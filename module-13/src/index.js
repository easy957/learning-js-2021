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
  sentinel: document.querySelector('#sentinel'),
};

const observer = new IntersectionObserver(onEntry, { rootMargin: '250px' });
observer.observe(refs.sentinel);

refs.searchForm.addEventListener('submit', onFormSearch);
document.body.addEventListener('click', onBodyClick);

addBackToTop({
  backgroundColor: '#0d6efd',
  showWhenScrollTopIs: 600,
});

async function onFormSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchQuery.value;

  const images = await SearchImage.searchImages(searchQuery);
  refs.imageContainer.innerHTML = imageTemplate(images);
}

function onBodyClick(event) {
  if (event.target.dataset.imageFull) {
    const options = {
      onShow: () => {
        document.body.style.overflow = 'hidden';
      },
      onClose: () => {
        document.body.style.overflow = 'initial';
      },
    };
    basicLightbox
      .create(`<img src="${event.target.dataset.imageFull}" width="800" height="600">`, options)
      .show();
  }
}

async function loadMore() {
  const images = await SearchImage.loadMore();
  refs.imageContainer.insertAdjacentHTML('beforeend', imageTemplate(images));
}

function onEntry(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && SearchImage.searchQuery !== '') {
      loadMore();
    }
  });
}
