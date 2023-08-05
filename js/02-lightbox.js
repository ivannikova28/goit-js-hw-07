import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector(".gallery");

renderGallery(galleryItems);

function renderGallery(arr) {
    if (typeof arr !== "object") return null;


    const html = arr.map((item) => {
        const { preview, original, description } = item;

        const html = `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`;
        return html;
    }).join("");

    ulGallery.innerHTML = html
}


const lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 })