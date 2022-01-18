function menu(id) {
  document.querySelector(`.${id}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function moveMenu(bool) {
  const menu = document.querySelector(".list");
  if(bool) {
    menu.style.position = "fixed";
    menu.style.width = "100%";
    menu.style.height = "50px";
    menu.style.top = "0px";
    menu.style.background = "white";
    menu.style.padding = "0 10%";
    menu.style.color = "black";
  }
  else {
    menu.style.position = "static";
    if(window.matchMedia("(min-width: 800px)").matches) {
      menu.style.width = "70%";
    } else {
      menu.style.width = "100%";
    }
    menu.style.height = "auto";
    menu.style.top = "auto";
    menu.style.background = "none";
    menu.style.padding = "5%";
    menu.style.borderRadius = "none";
    menu.style.color = "#ececec";
  }
}

export {menu, moveMenu};
