import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

let listArray = [];

galleryItems.forEach((galleryItem) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const innerString = `<a class = "gallery__link" href= "${galleryItem.original}">
<img
  class = "gallery__image"
  src = "${galleryItem.preview}"
  data-source = "${galleryItem.original}"
  alt = "${galleryItem.description}"/>
</a>`;

  listItem.insertAdjacentHTML(beforeend, innerString);
  listArray.push(listItem);
});

galleryContainer.append(...listArray);

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  if (!event.target.dataset.source) {
    return;
  }
});

const instance = basicLightbox.create(
  `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
  {
    onShow: (instance) => {
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          instance.close();
        }
        document.removeEventListener("keydown", event);
      });
    },
  }
);
instance.show();

console.log(galleryItems);
