import cardsData from './menu.json';
import templateMarkUp from './templates/card.hbs';

const refs = {
  bodyEl: document.querySelector('body'),
  switchEl: document.querySelector('#theme-switch-toggle'),
  menuEl: document.querySelector('.js-menu'),
};

refs.menuEl.innerHTML = templateMarkUp(cardsData);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  refs.bodyEl.classList.remove(refs.bodyEl.className);
  refs.bodyEl.classList.add(currentTheme);
  if (currentTheme === Theme.DARK) {
    refs.switchEl.checked = true;
  }
}

refs.switchEl.addEventListener('input', onSwitchClick);

function onSwitchClick() {
  refs.bodyEl.classList.toggle(Theme.DARK);
  refs.bodyEl.classList.toggle(Theme.LIGHT);
  localStorage.setItem('theme', refs.bodyEl.className);
}
