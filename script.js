// Menu animation
document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.getElementById("menu");
    var overlay = document.getElementById("overlay");
    var nav = document.querySelector("nav");
    const menuIconDelay = 1000;

    if (menuIcon) {
        menuIcon.onclick = function () {
            menuIcon.classList.toggle("openmenu");
            overlay.classList.toggle("active");
            nav.classList.toggle("open");
        }
    }  
});
