//Variables
import { descriptionText, about__description } from "./modules/variables.js";
//Animations
import { textAnimation } from "./modules/animations.js";
//Slider
import { slider, prevImage, nextImage } from "./modules/sliders.js";


//ABOUT
function aboutAnimation(){
    if(window.pageYOffset >= document.querySelector('.about').offsetTop) {
        textAnimation(descriptionText, about__description);
        //unmounting event listener
        window.removeEventListener("scroll", aboutAnimation);
    }
}

window.addEventListener("scroll", aboutAnimation, false);


//SLIDERS
slider();    

document.querySelector('.sliders__prev').addEventListener('click', () => {
    prevImage();
})

document.querySelector('.sliders__next').addEventListener('click', () => {
    nextImage();
})
