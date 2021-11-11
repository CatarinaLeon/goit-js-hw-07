import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

// Создание и рендер разметки по массиву данных galleryItems

function renderImages() {
    const markup = galleryItems.map(
        ({ preview, original, description }) =>
            `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
        .join('');
    galleryContainer.insertAdjacentHTML('beforeend', markup);
}
renderImages();

// Инициализация библиотеки после того как элементы галереи созданы и добавлены

new SimpleLightbox('.gallery .gallery__item', { /* options */ captionsData:'alt', captionDelay:250 });