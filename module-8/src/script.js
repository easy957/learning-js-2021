import galleryItems from './app.js';

const galleryWrapper = document.querySelector('.js-gallery');
const lightBoxEl = document.querySelector('.js-lightbox');
const closeMobalBtn = document.querySelector('button[data-action="close-lightbox"]');
const originalPicEl = document.querySelector('.lightbox__image');
const modalOverlay = document.querySelector('.lightbox__overlay');

const galleryElems = populateGallery(galleryItems);
galleryWrapper.innerHTML = galleryElems;

galleryWrapper.addEventListener('click', openModalPic);
closeMobalBtn.addEventListener('click', closeModalPic);
modalOverlay.addEventListener('click', (e) => {
  if (e.currentTarget === e.target) {
    closeModalPic();
  }
});

function populateGallery(items) {
  return items.map(({original, preview, description}) => {
    return `
    <li class="gallery__item">
    <a
    class="gallery__link"
        href="${original}"
      >
      <img
      class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
        </a>
        </li>
    `
  }).join('');  
}

function openModalPic(e) {
  if (e.target.nodeName !== 'IMG') {
    return
  }
  console.log(e);
  e.preventDefault();
  document.addEventListener('keydown', keyboardControls);
  lightBoxEl.classList.add('is-open');
  originalPicEl.src = e.target.dataset.source;
  originalPicEl.alt = e.target.alt;
}

function closeModalPic() {
  document.removeEventListener('keydown', keyboardControls);
  lightBoxEl.classList.remove('is-open');
  setTimeout(() => {
    originalPicEl.src = '';
  }, 200);
}

function keyboardControls(e) {
  if (e.code === 'Escape') {
    closeModalPic();
  }

  const picSources = galleryItems.map(i => i.original);

  if (e.code === 'ArrowLeft') { 
    const currentIdx = picSources.indexOf(originalPicEl.src);

    if (currentIdx === 0) {
      return
    }

    originalPicEl.src = picSources[currentIdx - 1];
  }

  if (e.code === 'ArrowRight') { 
    const currentIdx = picSources.indexOf(originalPicEl.src);

    if (currentIdx + 1 === picSources.length) {
      return
    }
    
    originalPicEl.src = picSources[currentIdx + 1];
  }  
}


