document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header');
    const root = document.documentElement;
    const navMenu = document.querySelector('.nav-menu');

    function setHeaderHeight() {
        const headerHeight = header.offsetHeight;
        root.style.setProperty('--header-height', `${headerHeight}px`);
    }

    // Set the header height on page load
    setHeaderHeight();

    // Update the header height on window resize
    window.addEventListener('resize', setHeaderHeight);

    // Hide all sections except the home section on page load
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.style.display = 'none';
        }
    });

    // Add event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('appear'); // Remove the appear class
            });

            // Show the selected section
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection.id === 'home') {
                targetSection.style.display = 'flex'; // Set display to flex for hero section
            } else {
                targetSection.style.display = 'block';
            }

            // Add the appear class to trigger the animation
            setTimeout(() => {
                targetSection.classList.add('appear');
            }, 10); // Slight delay to ensure display change is applied

            // Scroll the selected section to the top, adjusting for the header height
            window.scrollTo({
                top: targetSection.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });

            // Remove 'selected' class from all nav links
            navLinks.forEach(navLink => navLink.classList.remove('selected'));

            // Add 'selected' class to the clicked nav link
            this.classList.add('selected');

            // Hide the navigation menu
            navMenu.classList.remove('active');
        });
    });

    // Hide nav menu when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!navMenu.contains(event.target) && !event.target.matches('.hamburger-menu')) {
            navMenu.classList.remove('active');
        }
    });

    // Intersection Observer for SVG animation in education-card
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const svg = entry.target.querySelector('svg');
                if (svg) {
                    svg.classList.add('svg-animate');
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach(card => observer.observe(card));

    // Toggle plus/minus icons and details content for each card
    const toggleIcons = document.querySelectorAll('.toggle-icon');
    toggleIcons.forEach(toggleIcon => {
        const caretRight = toggleIcon.querySelector('.caret-right');
        const caretUp = toggleIcon.querySelector('.caret-up');
        const detailsContent = toggleIcon.closest('.education-details').querySelector('.education-details-content');

        toggleIcon.addEventListener('click', function () {
            if (detailsContent.classList.contains('show')) {
                detailsContent.classList.remove('show');
                caretRight.style.display = 'inline';
                caretUp.style.display = 'none';
            } else {
                detailsContent.classList.add('show');
                caretRight.style.display = 'none';
                caretUp.style.display = 'inline';
            }
        });
    });

    // Hamburger menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    hamburgerMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});