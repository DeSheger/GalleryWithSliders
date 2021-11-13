const sliders = document.querySelector('.sliders');
const images = document.querySelectorAll('.sliders__image');

function slider() {
    
    for(const item of images){
        item.style.display = 'none';
    }
    images[0].style.display = 'block';
    
}

function prevImage() {
    let current = 0;
    let prev = 0;

    for(const item of images){
        if(item.style.display === 'block'){
            //set item to display none
            item.style.display = 'none';

            if(current === 0){
                prev = images[images.length - 1];
            } else {
                prev = images[current - 1];
            }
        }
        else{
            item.style.display = 'none';
        }
        current++;
    }
    prev.style.display = 'block';
}

function nextImage() {
    let current = 0;
    let next = 0;

    for(const item of images){
        if(item.style.display === 'block'){
            //set item to display none
            item.style.display = 'none';

            if(current === 3){
                next = images[0];
            } else {
                next = images[current + 1];
            }
        }
        else{
            item.style.display = 'none';
        }
        current++;
    }
    next.style.display = 'block';
}
export {slider, prevImage, nextImage};