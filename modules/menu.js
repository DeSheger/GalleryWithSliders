function menu(id) {
  document.querySelector(`.${id}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function moveMenu(bool) {
  const menu = document.querySelector(".list");
  if(bool) {
    menu.style.position = "fixed";
    menu.style.bottom = "0px";
    menu.style.background = "white";
    menu.style.padding = "2%";
    menu.style.borderRadius = "20px";
    menu.style.color = "black";
  }
  else {
    menu.style.position = "static";
    menu.style.bottom = "auto";
    menu.style.background = "none";
    menu.style.padding = "5%";
    menu.style.borderRadius = "none";
    menu.style.color = "#ececec";
  }
  

  
}

export {menu, moveMenu};
