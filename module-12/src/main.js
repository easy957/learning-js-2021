import FetchCountriesAPI from './fetch-countries.js';
import debounce from 'lodash.debounce';
import countriesListTpl from './templates/countries-list.hbs';
import countryCardTpl from './templates/country-card.hbs';
import { notice, error, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
  searchInputContainer: document.querySelector('.search-field'),
  searchInput: document.querySelector('[data-search-input]'),
  searchList: document.querySelector('[data-search-list]'),
  cardEl: document.querySelector('.card'),
};

const notificationsStack = new Stack({
  dir1: 'left',
  firstpos1: 20,
  context: refs.searchInputContainer,
  maxOpen: 1,
  maxStrategy: 'close',
  maxClosureCausesWait: false,
});
const notificationOptions = {
  stack: notificationsStack,
  hide: true,
  delay: 1500,
  width: '260px',
};

const FetchCountries = new FetchCountriesAPI();
refs.searchInput.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  const searchQuery = e.target.value.toLowerCase();
  if (searchQuery) {
    FetchCountries.search(searchQuery).then(populateCountries).catch(showWarning);
  } else {
    populateCountries([]);
  }
}

function populateCountries(data) {
  const countries = [];

  data.map(e => countries.push(e));

  if (countries.length === 0) {
    refs.searchList.innerHTML = '';
  }

  if (countries.length === 1) {
    refs.searchList.innerHTML = '';
    console.log(countries[0]);
    refs.cardEl.innerHTML = countryCardTpl(countries[0]);
  }

  if (countries.length <= 10 && countries.length > 1) {
    refs.cardEl.innerHTML = '';
    refs.searchList.innerHTML = countriesListTpl(countries);
  }

  if (countries.length > 10) {
    notice({
      ...notificationOptions,
      text: 'Too many mathces found. Please, enter more specific query.',
    });
  }
}

function showWarning() {
  refs.searchList.innerHTML = '';
  error({
    ...notificationOptions,
    text: 'No matches found. Try again.',
  });
}
