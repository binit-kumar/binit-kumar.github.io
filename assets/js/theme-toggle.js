document.addEventListener('DOMContentLoaded', function () {
  // Constants
  const body = document.body;
  const navLinks = document.querySelectorAll('nav ul li a');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const slider = document.getElementById('slider');
  const visitWebsiteBtns = document.querySelectorAll('.visit-website-btn');
  const viewTranscriptLinks = document.querySelectorAll('.view-transcript-link');
  const educationDetailsLinks = document.querySelectorAll('.education-details-link');
  const heroMask = document.querySelector('.hero-mask');
  const cardLinks = document.querySelectorAll('.card-link');
  const contactImages = document.querySelectorAll('.contact-image');
  const feedbackInputs = document.querySelectorAll('.feedback-input');
  const submitButton = document.querySelector('[type="submit"]');
  const dynamicTextElement = document.getElementById('dynamic-text');
  const roles = ["Principal Software Engineer.", "Full Stack Developer.", "Cloud Engineer."];
  const svgLabels = document.querySelectorAll('.svg-label');
  const typingSpeed = 100;
  const delayBetweenRoles = 2000;

  let currentRoleIndex = 0;
  let currentCharIndex = 0;

  // Helper Functions

  /**
   * Applies the specified theme to the webpage.
   * @param {string} theme - The theme to apply, either 'dark' or 'light'.
   */
  function applyTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
      header.classList.add('dark-theme');
      footer.classList.add('dark-theme');
      navLinks.forEach(link => link.classList.add('dark-theme'));
      visitWebsiteBtns.forEach(btn => {
        btn.classList.add('dark-theme');
        btn.classList.remove('light-theme');
      });
      viewTranscriptLinks.forEach(link => {
        link.classList.add('dark-theme');
        link.classList.remove('light-theme');
      });
      educationDetailsLinks.forEach(link => {
        link.classList.add('dark-theme');
        link.classList.remove('light-theme');
      });
      heroMask.classList.add('dark-theme');
      heroMask.classList.remove('light-theme');
      cardLinks.forEach(link => {
        link.classList.add('dark-theme');
        link.classList.remove('light-theme');
      });
      contactImages.forEach(img => {
        img.classList.add('dark-theme');
        img.classList.remove('light-theme');
        img.style.fill = getComputedStyle(body).getPropertyValue('--theme-color-dark').trim();
      });
      feedbackInputs.forEach(input => {
        input.classList.add('dark-theme');
        input.classList.remove('light-theme');
      });
      svgLabels.forEach(label => {
        label.classList.add('dark-theme');
        label.classList.remove('light-theme');
      });
      submitButton.classList.add('dark-theme');
      submitButton.classList.remove('light-theme');
      slider.checked = true; // Set the slider to checked for dark theme
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
      header.classList.remove('dark-theme');
      footer.classList.remove('dark-theme');
      navLinks.forEach(link => link.classList.remove('dark-theme'));
      visitWebsiteBtns.forEach(btn => {
        btn.classList.add('light-theme');
        btn.classList.remove('dark-theme');
      });
      viewTranscriptLinks.forEach(link => {
        link.classList.add('light-theme');
        link.classList.remove('dark-theme');
      });
      educationDetailsLinks.forEach(link => {
        link.classList.add('light-theme');
        link.classList.remove('dark-theme');
      });
      heroMask.classList.add('light-theme');
      heroMask.classList.remove('dark-theme');
      cardLinks.forEach(link => {
        link.classList.add('light-theme');
        link.classList.remove('dark-theme');
      });
      contactImages.forEach(img => {
        img.classList.remove('dark-theme');
        img.classList.add('light-theme');
        img.style.fill = getComputedStyle(body).getPropertyValue('--theme-color-light').trim();
      });
      feedbackInputs.forEach(input => {
        input.classList.add('light-theme');
        input.classList.remove('dark-theme');
      });
      svgLabels.forEach(label => {
        label.classList.add('light-theme');
        label.classList.remove('dark-theme');
      });
      submitButton.classList.add('light-theme');
      submitButton.classList.remove('dark-theme');
      slider.checked = false; // Set the slider to unchecked for light theme
    }
  }

  /**
   * Updates the width of the dynamic text element based on the current text length.
   */
  function updateWidth() {
    const text = roles[currentRoleIndex].substring(0, currentCharIndex);
    dynamicTextElement.style.width = `${text.length}ch`;
  }

  /**
   * Types out the current role character by character.
   */
  function typeRole() {
    if (currentCharIndex < roles[currentRoleIndex].length) {
      dynamicTextElement.textContent += roles[currentRoleIndex].charAt(currentCharIndex);
      currentCharIndex++;
      updateWidth();
      setTimeout(typeRole, typingSpeed);
    } else {
      setTimeout(deleteRole, delayBetweenRoles);
    }
  }

  /**
   * Clears the dynamic text element and moves to the next role.
   */
  function deleteRole() {
    dynamicTextElement.textContent = '';
    currentCharIndex = 0;
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    setTimeout(typeRole, typingSpeed);
  }

  // Main Functionality

  // Detect the current theme
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Apply the initial theme
  applyTheme(prefersDarkScheme.matches ? 'dark' : 'light');

  // Listen for changes in the theme
  prefersDarkScheme.addEventListener('change', (e) => {
    applyTheme(e.matches ? 'dark' : 'light');
  });

  // Theme toggle functionality
  slider.addEventListener('change', function () {
    if (this.checked) {
      applyTheme('dark');
    } else {
      applyTheme('light');
    }
  });

  // Add selected class to clicked nav link
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('nav ul li a').forEach(el => el.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  // Initialize typing effect
  typeRole();
});