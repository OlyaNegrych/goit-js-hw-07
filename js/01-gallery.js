import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector('.gallery');
const imagesMarkup = createGallery(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);
imageContainer.addEventListener('click', onOpenImageModal);

function onOpenImageModal(event) {
    // event.preventDefault();

    if (!event.target.classList.contains('.gallery__link')) {
        return;
    }
    console.log(event.target);
};

function createGallery(images) {
    return images
      .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg${original}"
      alt="${description}"
    />
  </a>
</div>
`;
      })
        .join('');
};

