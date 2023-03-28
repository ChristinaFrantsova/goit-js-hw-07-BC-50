import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryImages = document.querySelector(".gallery");

const itemOfGallery = galleryItems
  .map(
    (element) =>
      `<a class="gallery__item" href=${element.original}>
  <img class="gallery__image" src=${element.preview} alt=${element.description} />
</a>`
  )
  .join(" ");

galleryImages.insertAdjacentHTML("afterbegin", itemOfGallery);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "top",
  captionDelay: 250,
  showCounter: true,
  enableKeyboard: true,
  doubleTapZoom: 2,
});

console.log(lightbox);
