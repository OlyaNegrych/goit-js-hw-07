import { galleryItems } from './gallery-items.js';

const imageContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryFn(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);
imageContainer.addEventListener('click', onOpenImageModal);

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

function onOpenImageModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
   
}

function createGalleryFn(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
`;
    })
    .join('');
}
