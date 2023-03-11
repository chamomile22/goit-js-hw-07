import { galleryItems } from "./gallery-items.js";
// Change code below this line

// ---Creating and rendering of gallery items
const gallery = document.querySelector(".gallery");
const createdItems = galleryItems
	.map(
		({ preview, original, description }) => `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
	)
	.join("");

gallery.insertAdjacentHTML("afterbegin", createdItems);

const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
});
const handleGalleryContainerClick = (event) => {
	event.preventDefault();
	if (!event.target.classList.contains("gallery__image")) {
		return;
	}
};

gallery.addEventListener("click", handleGalleryContainerClick);
