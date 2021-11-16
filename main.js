// IMPORTS //
// Variables
import {
  descriptionText, aboutDescription, slidersImages, slidersRadio,
  galleryImages, listItems,
} from './modules/variables.js';
// Menu
import menu from './modules/menu.js';
// Animations
import textAnimation from './modules/animations.js';
// Slider
import Sliders from './modules/sliders.js';
// Gallery
import Gallery from './modules/gallery.js';
// DOM //
// MENU

listItems.forEach((item) => {
  item.addEventListener('click', () => {
    menu(item.id);
  });
});

// ABOUT
function aboutAnimation() {
  if (window.pageYOffset >= document.querySelector('.about').offsetTop) {
    textAnimation(descriptionText, aboutDescription);
    // unmounting event listener
    window.removeEventListener('scroll', aboutAnimation);
  }
}

window.addEventListener('scroll', aboutAnimation, false);

// SLIDERS
const sliders = new Sliders(slidersImages, slidersRadio);

const autoInterval = setInterval(() => {
  sliders.nextImageButton();
  sliders.inputChange();
}, 2500);

sliders.sliderReset();

document.querySelector('.sliders__prev').addEventListener('click', () => {
  sliders.prevImageButton();
  sliders.inputChange();
  clearInterval(autoInterval);
});

document.querySelector('.sliders__next').addEventListener('click', () => {
  sliders.nextImageButton();
  sliders.inputChange();
  clearInterval(autoInterval);
});

slidersRadio.forEach((radio) => {
  radio.addEventListener('click', () => {
    sliders.changeImageByInput(radio.value);
    clearInterval(autoInterval);
  });
});

// GALLERY
galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    const gallery = new Gallery(image);
    gallery.showImage();
    gallery.closeImage();
  });
});
