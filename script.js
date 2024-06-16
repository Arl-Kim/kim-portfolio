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

//Form validation & EmailJS

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('NVBnrBxRIIRg9DVIP');

    document.getElementById('contact_form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Custom validation logic if needed
        let email = document.getElementById('email').value;
        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // If validation passes, send the email
        sendEmail();
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function sendEmail() {
        emailjs.sendForm('service_vioa6tm', 'template_9x2qnlm', '#contact_form')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showMessage('Your details have been sent successfully!', 'success');
                clearForm();
            }, function(error) {
                console.log('FAILED...', error);
                showMessage('Failed to send details. Please try again later.', 'error');
            });
    }

    function showMessage(message, type) {
        const messageDiv = document.getElementById('form_message');
        messageDiv.textContent = message;
        messageDiv.className = 'form-message ' + type;
        messageDiv.style.display = 'block';

        if (type === 'success') {
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 7000);
        }
    }

    function clearForm() {
        document.getElementById('contact_form').reset();
    }
});


//Google Analytics 4 Events

//Event For Form Submit Button
document.getElementById('submit_btn').addEventListener('click', function() {
    gtag('event', 'contact_click', {
      'event_category': 'Clicked A Button',
      'event_label': 'Send Message'
    });
  });

// Function to track link clicks
function trackLinkClick(event) {
gtag('event', 'click', {
    'event_category': 'Clicked A Btn Link',
    'event_label': event.target.textContent,
    'link_url': event.target.href,
    'transport_type': 'beacon'
});
}

// Add event listener to all links with class 'track-link'
document.querySelectorAll('a.track-link').forEach(function(link) {
link.addEventListener('click', trackLinkClick);
});