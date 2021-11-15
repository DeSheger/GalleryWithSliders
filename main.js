// IMPORTS //
// Variables
import {
  descriptionText, aboutDescription, slidersImages, slidersRadio,
} from './modules/variables.js';
// Animations
import { textAnimation } from './modules/animations.js';
// Slider
import Sliders from './modules/sliders.js';

// DOM //
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

// ANIMATION
