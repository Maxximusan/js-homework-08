// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);



const ourGallery = document.querySelector('.gallery');
const imgMarcup = addItemMarcup(galleryItems);
ourGallery.insertAdjacentHTML('afterbegin', imgMarcup);

function addItemMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    }).join('');
};
console.log(addItemMarcup(galleryItems));
console.log(ourGallery)



const lightBox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt', animationSpeed: 1000, fadeSpeed: 400 });