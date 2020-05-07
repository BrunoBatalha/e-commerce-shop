function clicar() {
    var menu = document.querySelector(".menu-left-item");
    if(menu.style.height == '50px') {
        menu.style.height = '255px';
    }else {
        menu.style.height = '50px';
    };
    var menulist = document.querySelector("li.#menu-list");
    if(menulist.style.display == 'none') {
        menulist.style.display = 'block';
    }else {
        menulist.style.display = 'none';
    }
};
