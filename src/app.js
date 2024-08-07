/* Scroll Reveal Config */
document.addEventListener('DOMContentLoaded', () => {
    ScrollReveal().reveal('.reveal', {
        duration: 500, // Animation duration in milliseconds
        distance: '50px', // Distance the element moves
        easing: 'ease-in-out', // Easing function
        origin: 'left', // Animation origin: top, right, bottom, left
        reset: true // Whether to repeat the animation on scrolling back
    });
});

/* Navbar Responsiveness */
document.getElementById('menu-btn').addEventListener('click', function () {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('hidden');
    if (!navLinks.classList.contains('hidden')) {
        navLinks.classList.add('flex', 'flex-row', 'absolute', 'top-16', 'left-0', 'right-0', 'w-full', 'z-10', 'justify-evenly', 'bg-customGreen', 'text-white');
    } else {
        navLinks.classList.remove('flex', 'flex-row');
    }
});

// Add active class to the current link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Preserve active state on page reload
window.addEventListener('load', () => {
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

// Add year to the footer span
const year = new Date().getFullYear();
document.getElementById('year').innerText = year;