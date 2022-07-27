import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const imageContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryFn(galleryItems);
const basicLightboxMarkup = basicLightbox.create(imagesMarkup);

imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);
imageContainer.addEventListener('click', onOpenImageModal);

function onOpenImageModal(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  basicLightboxMarkup.show();
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

// function createModalFn(images) {
//   return images
//     .map(({ preview, original, description }) => {
//       return `
//         <div class="modal">
//         <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//     </div>
// `;
//     })
//     .join('');
// }

// import * as basicLightbox from 'basiclightbox';

// const instance = basicLightbox.create(`
    // <div class="modal">
    //     <p>
    //         Your first lightbox with just a few lines of code.
    //         Yes, it's really that simple.
    //     </p>
    // </div>
// `);

// instance.show();