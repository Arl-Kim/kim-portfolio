/*
    *@author Allan Kimutai Tum
 
    *If you cloned this repository and you have just started your JS journey, I left some comments to guide you through. Happy Coding!
 
 */

"use strict";

//Dark Theme To Light Theme && Vice Versa

const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
})

// Define the array of headings to rotate
const headings = ["Software Engineer, Nairobi", "Full-Stack Developer"];

// Function to rotate the headings
function rotateHeadings() {
    const headingElement = document.querySelector('.animated-text h3');
    let index = 0;

    // Set an interval to change the heading text
    setInterval(() => {
        // Change the heading text to the next item in the array
        headingElement.textContent = headings[index];
        
        // Increment index or reset to 0 if it reaches the end of the array
        index = (index + 1) % headings.length;
    }, 7000); 
}

window.onload = rotateHeadings;


//Toggle Icon Navigation Bar

let menuIcon = document.querySelector('#menu_icon');
let navigationBar = document.querySelector('.main-nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navigationBar.classList.toggle('active');
}


//Scroll Sections

let sections = document.querySelectorAll("section");
let navigationLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            //Active Nav Links
            navigationLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            //Active sections during scroll animations
            sec.classList.add('show-animate');
        }

        //For repetitive animations on scroll
        else{
            sec.classList.remove('show-animate');
        }
    });

    //Sticky Header
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    //Remove toggle icon and navigation bar on link click
    menuIcon.classList.remove('bx-x');
    navigationBar.classList.remove('active');

    //Footer animation on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}