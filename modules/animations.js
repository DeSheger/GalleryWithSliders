// Text Animation
function textAnimation(text, id) {
  // Transform text to array
  const textArray = [...text];

  const elementName = id;

  // Adding text to element
  textArray.map((value, index) => {
    setTimeout(() => { elementName.textContent += value; }, index * 50);
    return value;
  });
}

export default textAnimation;
