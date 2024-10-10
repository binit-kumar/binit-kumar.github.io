document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

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
                top: targetSection.offsetTop - headerHeight,
                behavior: 'smooth'
            });

            // Remove 'selected' class from all nav links
            navLinks.forEach(navLink => navLink.classList.remove('selected'));

            // Add 'selected' class to the clicked nav link
            this.classList.add('selected');
        });
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
        const plusIcon = toggleIcon.querySelector('.plus-icon');
        const minusIcon = toggleIcon.querySelector('.minus-icon');
        const detailsContent = toggleIcon.closest('.education-details').querySelector('.education-details-content');

        toggleIcon.addEventListener('click', function () {
            if (detailsContent.classList.contains('show')) {
                detailsContent.classList.remove('show');
                plusIcon.style.display = 'inline';
                minusIcon.style.display = 'none';
            } else {
                detailsContent.classList.add('show');
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'inline';
            }
        });
    });
});