// Toggle Icon Navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const scrollY = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
            // Activate corresponding navbar links
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            // Add animation class to the section
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky Header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 100);

    // Remove toggle icon and navbar when clicking navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animate footer on scroll
    const footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', window.innerHeight + scrollY >= document.scrollingElement.scrollHeight);
};
