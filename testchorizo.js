const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => { 
    navMenu.classList.toggle("nav-menu_visible");});

    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar Menu");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menu");
    }