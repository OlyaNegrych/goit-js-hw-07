import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const imageContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryFn(galleryItems);
const instance = basicLightbox.create(`<img class="modal-img" src="" />`, {
  onShow: instance => {
    window.addEventListener('keydown', onEscClick);
  },
  onClose: instance => {
    window.removeEventListener('keydown', onEscClick);
  }
});

imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);
imageContainer.addEventListener('click', onOpenImageModal);

function onOpenImageModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();
};

function createGalleryFn(images) {
    return images
      .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}" rel="noreferrel noopener nofollow">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
        </div>
`;
      })
      .join('');
};

function onEscClick(event) {
  if (event.code === 'Escape') {
    instance.close();
    return;
  }
}
