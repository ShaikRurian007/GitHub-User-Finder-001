'use strict';

const /**{NodeElement} */  $HTML = document.documentElement;
const /**{Boolean} */ isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if (sessionStorage.getItem("theme")){
$HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
$HTML.dataset.theme = isDark ? "dark" : "Light";
}
let /** {Boolean} */ isPressed = false;




const changeTheme = function () {
    isPressed = isPressed ? false : true;
    this.setAttribute("aria-pressed", isPressed);
    $HTML.setAttribute ("data-theme", ($HTML.dataset.theme === "Light") ? "dark" : "Light");
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

window.addEventListener("load", function () {
const /** {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");

    $themeBtn.addEventListener("cLick", changeTheme);
});