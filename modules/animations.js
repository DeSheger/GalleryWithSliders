//Text Animation
function textAnimation(text, id){
    //transform text to array
    let textArray = [...text]
        
          textArray.map((value, index) => {setTimeout(() => {id.textContent += value;}, index*50)})
        
}

//Sliders Animation
function sliderAnimation(slider, id){

}

export {textAnimation};