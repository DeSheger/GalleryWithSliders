class Gallery {
  constructor(image) {
    this.image = image;
    this.container = image.parentNode;
    this.gallery = this.container.parentNode;
    this.button = document.querySelector('.gallery__button');
    this.images = document.querySelectorAll('.gallery__image');
  }

  showImage() {
    this.images.forEach((image) => {
      const item = image;
      item.style.display = 'none';
    });

    this.image.style.display = 'block';
    this.image.style.width = '100%';

    this.gallery.style.width = "100%"
    this.gallery.style.position = 'fixed';
    this.gallery.style.top = '0';
    this.gallery.style.left = '0';
    this.gallery.style.backgroundColor = 'black';
    this.gallery.style.zIndex = '3';
    this.button.style.display = 'block';
  }

  closeImage() {
    this.button.addEventListener('click', () => {
      this.images.forEach((image) => {
        const item = image;
        item.style.display = 'block';
        item.style.width = '50%';
      });

      this.gallery.style.position = 'static';
      this.gallery.style.top = 'auto';
      this.gallery.style.left = 'auto';
      this.gallery.style.backgroundColor = 'white';
      this.gallery.style.zIndex = '0';
      this.button.style.display = 'none';

      this.image.scrollIntoView({ block: 'center' });
    });
  }
}

export default Gallery;
