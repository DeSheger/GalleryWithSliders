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

sliders.sliderReset();

document.querySelector('.sliders__prev').addEventListener('click', () => {
  sliders.prevImageButton();
  sliders.inputChange();
});

document.querySelector('.sliders__next').addEventListener('click', () => {
  sliders.nextImageButton();
  sliders.inputChange();
});

slidersRadio.forEach((radio) => {
  radio.addEventListener('click', () => {
    sliders.changeImageByInput(radio.value);
  });
});

// GALLERY
galleryImages.forEach((image) => {
});
