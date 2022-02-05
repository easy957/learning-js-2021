import './sass/main.scss';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import imageTemplate from './templates/image.hbs';
import SearchImageAPI from './imageSearchAPI';
import * as basicLightbox from 'basiclightbox';
import { addBackToTop } from 'vanilla-back-to-top';

const SearchImage = new SearchImageAPI();
const refs = {
  imageContainer: document.querySelector('[data-image-container]'),
  searchForm: document.querySelector('[data-search-form]'),
  loadMoreBtn: document.querySelector('[data-load-button]'),
  loadMoreBtnText: document.querySelector('[data-button-text]'),
  spinnerEl: document.querySelector('[data-button-spinner]'),
};

refs.searchForm.addEventListener('submit', onFormSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
document.body.addEventListener('click', onBodyClick);

addBackToTop({
  backgroundColor: '#0d6efd',
  showWhenScrollTopIs: 800,
});

function onFormSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchQuery.value;

  SearchImage.searchImages(searchQuery).then(r => {
    refs.imageContainer.innerHTML = imageTemplate(r);
    showLoadMoreBtn();
  });
}

function showLoadMoreBtn() {
  refs.loadMoreBtn.classList.remove('d-none');
}

function onBodyClick(event) {
  if (event.target.dataset.imageFull) {
    basicLightbox
      .create(`<img src="${event.target.dataset.imageFull}" width="800" height="600">`)
      .show();
  }
}

function onLoadMore() {
  btnSetLoading();
  SearchImage.loadMore().then(r => {
    refs.imageContainer.insertAdjacentHTML('beforeend', imageTemplate(r));
    btnSetLoadMore();
    scrollUserViewport();
  });
}

function btnSetLoading() {
  refs.loadMoreBtnText.textContent = 'Loading...';
  refs.loadMoreBtn.disabled = true;
  refs.spinnerEl.classList.remove('d-none');
}

function btnSetLoadMore() {
  refs.loadMoreBtnText.textContent = 'Load more';
  refs.loadMoreBtn.disabled = false;
  refs.spinnerEl.classList.add('d-none');
}

function scrollUserViewport() {
  const cards = document.querySelectorAll('.card');
  const elScrollTo = cards[cards.length - 10];
  elScrollTo.firstElementChild.onload = function () {
    elScrollTo.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
}
