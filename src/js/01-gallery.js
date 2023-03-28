import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// 1.Створення галереї
const galleryImages = document.querySelector(".gallery");

const itemOfGallery = galleryItems
  .map(
    (element) =>
      `<div class="gallery__item">
  <a class="gallery__link" href=${element.original}>
    <img
      class="gallery__image"
      src=${element.preview}
      data-source=${element.original}
      alt=${element.description}
    />
  </a>
</div>`
  )
  .join("");
// console.log(itemOfGallery);

galleryImages.insertAdjacentHTML("afterbegin", itemOfGallery);
// console.log(galleryImages);

// 2. Делегування на div.gallery і отримання url великого зображення
galleryImages.addEventListener("click", onClickImage);

function onClickImage(event) {
  // Заборона перезагрузки при кліці на картинку
  event.preventDefault();

  // Перевірка чи клік по картинці чи ні, якщо ні - не реагує на клік
  if (event.target.nodeName !== "IMG") {
    return;
  }

  // Якщо так то - заходить на картинку(бібліотеку) із зміненим значення атрибута src
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  //   Закриття вікна після натискання клавіші Escape
  galleryImages.addEventListener("keydown", onClickImageClose);

  function onClickImageClose(event) {
    if (event.code === "Escape") {
      console.log(event);
      instance.close();
    }
    //   додати знімання слухача події при виході через Escape.
    galleryImages.removeEventListener("keydown", onClickImageClose);
  }
}
