// Variables
import { descriptionText, aboutDescription, slidersImages } from './modules/variables.js';
// Animations
import { textAnimation } from './modules/animations.js';
// Slider
import Sliders from './modules/sliders.js';

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
const sliders = new Sliders(slidersImages);

sliders.sliderReset();

document.querySelector('.sliders__prev').addEventListener('click', () => {
  sliders.prevSliderButton();
});

document.querySelector('.sliders__next').addEventListener('click', () => {
  sliders.nextImageButton();
});
