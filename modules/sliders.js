class Sliders {
  constructor(element, inputElement) {
    this.element = element;
    this.inputElement = inputElement;
  }

  // method for Slider reset
  sliderReset() {
    this.element.forEach((item) => {
      const element = item;
      element.style.display = 'none';
    });

    this.inputElement.forEach((item) => {
      const element = item;
      element.checked = false;
    });
    this.element[0].style.display = 'block';
    this.inputElement[0].checked = true;
  }

  // method for View previous image from slider
  prevImageButton() {
    let current = 0;
    let prev = this.element[this.element.length - 1];

    this.element.forEach((item) => {
      const element = item;

      if (item.style.display === 'block') {
      // set item to display none
        element.style.display = 'none';

        if (current > 0) {
          prev = this.element[current - 1];
        }
      } else {
        element.style.display = 'none';
      }
      current += 1;
    });

    prev.style.display = 'block';
  }

  // method for View next image from slider
  nextImageButton() {
    let current = 0;
    let nextElement = this.element[0];

    this.element.forEach((item) => {
      const element = item;

      if (item.style.display === 'block') {
      // set item to display none
        element.style.display = 'none';

        if (current < this.element.length - 1) {
          nextElement = this.element[current + 1];
        }
      } else {
        element.style.display = 'none';
      }
      current += 1;
    });

    nextElement.style.display = 'block';
  }

  inputChange() {
    let current = 0;
    this.element.forEach((item) => {
      const element = item;

      if (element.style.display === 'block') {
        this.inputElement[current].checked = true;
      } else {
        this.inputElement[current].checked = false;
      }

      current += 1;
    });
  }

  changeImageByInput(value) {
    const current = value;

    this.element.forEach((item) => {
      const element = item;
      element.style.display = 'none';
    });

    this.element[current].style.display = 'block';
  }
}

export default Sliders;
