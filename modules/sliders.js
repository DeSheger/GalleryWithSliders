class Sliders {
  constructor(element) {
    this.element = element;
  }

  // method for Slider reset
  sliderReset() {
    this.element.forEach((item) => {
      const element = item;
      element.style.display = 'none';
    });
    this.element[0].style.display = 'block';
  }

  // method for View previous image from slider
  prevImageButton() {
    let current = 0;
    let prev = 0;

    this.element.forEach((item) => {
      const element = item;
      if (item.style.display === 'block') {
      // set item to display none
        element.style.display = 'none';

        if (current === 0) {
          prev = this.element[this.element.length - 1];
        } else {
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
    let next = this.element[0];

    this.element.forEach((item) => {
      const element = item;

      if (item.style.display === 'block') {
      // set item to display none
        element.style.display = 'none';
        if (current < 3) {
          next = this.element[current + 1];
        }
      } else {
        element.style.display = 'none';
      }
      current += 1;
    });

    next.style.display = 'block';
  }
}

export default Sliders;
