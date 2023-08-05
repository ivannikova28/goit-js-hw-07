import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector(".gallery");

ulGallery.addEventListener("click", modalImage)

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
  

function modalImage(event) {
    event.preventDefault();

    const target = event.target;
    if (target.nodeName !== "IMG") {
        return;
    }


    const instance = basicLightbox.create(
        `<img src="${target.dataset.source}" width="800" height="600"/>`,
        {
            onShow: () => ulGallery.addEventListener('keydown', modalClose),
            onClose: () => ulGallery.removeEventListener("keydown", modalClose)
        }
    )

    instance.show();

    modalClose({event, instance})
}
 

function modalClose({ event, instance}) {
    if (event.key === "Escape") {
        instance.close()
    }
}