import { galleryItems } from "./gallery-items.js";
// Change code below this line

// ---Creating and rendering of gallery items
const gallery = document.querySelector(".gallery");
const createdItems = galleryItems
	.map(
		({ preview, original, description }) => `<div class="gallery__item">
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
	.join("");

gallery.insertAdjacentHTML("afterbegin", createdItems);

// ---Delegation

const handleGalleryContainerClick = (event) => {
	event.preventDefault();
	if (!event.target.classList.contains("gallery__image")) {
		return;
	}

	const instance = basicLightbox.create(
		`
    <img src="${event.target.dataset.source}">
`
	);
	instance.show();

	const handleModalClosing = (event) => {
		if (event.key === "Escape") {
			instance.close();
			event.currentTarget.removeEventListener("keydown", handleModalClosing);
		}
	};
	if (instance.visible()) {
		event.currentTarget.addEventListener("keydown", handleModalClosing);
	}
};

gallery.addEventListener("click", handleGalleryContainerClick);
