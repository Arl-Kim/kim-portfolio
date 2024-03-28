"use strict";

//Dark Theme To Light Theme && Vice Versa

const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
})


//Scroll Sections

window.onscroll = () => {
    //Sticky Header
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);
}