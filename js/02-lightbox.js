import { galleryItems } from './gallery-items.js';

const imageContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryFn(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);
imageContainer.addEventListener('click', onOpenImageModal);

let gallery = new SimpleLightbox('.gallery a');

function onOpenImageModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  // gallery.on('show.simplelightbox', function () {
  // });

  gallery.on('captionsData', function () {
    gallery.captionsData = event.target.alt;
  }); 

  gallery.on('captionsDelay', function () {
    gallery.captionsDelay = 250;
  });

  gallery.on('captionPosition', function () {
    gallery.captionPosition = 'bottom';
  }); 
   
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
