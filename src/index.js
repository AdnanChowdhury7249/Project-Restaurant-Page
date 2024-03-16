import { initialPageLoad } from "./pageLoad";
import { menuPage } from "./menuPage";
import { contactUs } from "./contact";
import './style.css';

const container = document.querySelector('#content');

function addFadeInAnimation() {
    container.classList.add('animate-fade-in');
}

document.addEventListener('DOMContentLoaded', () => {
    initialPageLoad();
    addFadeInAnimation();
});

document.getElementById("home").addEventListener("click", () => {
    container.innerHTML = "";
    initialPageLoad();
    addFadeInAnimation();
});

document.getElementById("menu").addEventListener("click", () => {
    container.innerHTML = "";
    menuPage();
    addFadeInAnimation();
});

document.getElementById("Contact us").addEventListener("click", () => {
    container.innerHTML = "";
    contactUs();
    addFadeInAnimation();
});

container.addEventListener('animationend', () => {
    container.classList.remove('animate-fade-in');
});
