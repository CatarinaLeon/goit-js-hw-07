import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
galleryContainer.addEventListener('click', onSelectImage);


// Подключение библиотеки basicLightbox

const instance = basicLightbox.create(`<img src="" />`, {
  onShow: () => {
    window.addEventListener('keydown', keydownEscape);
  },
  onClose: () => {
    window.removeEventListener('keydown', keydownEscape);
  },
});



// Создание и рендер разметки по массиву данных galleryItems

function renderImages() {
    const markup = galleryItems.map(
        ({ preview, original, description }) =>
            `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
        .join('');
    galleryContainer.insertAdjacentHTML('beforeend', markup);
}
renderImages();

// получение url большого изображения
function onSelectImage(event) {
    event.preventDefault();
    instance.element().querySelector('img').src = event.target.dataset.source;
    instance.show();
}

function keydownEscape(event) {
  console.log(event);
  if (event.key === 'Escape') {
    instance.close();
    return;
  }
}
