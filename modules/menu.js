function menu(id) {
  document.querySelector(`.${id}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
}
export default menu;
