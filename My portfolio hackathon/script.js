document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeSwitch = document.querySelector('.theme-switch input');
    const toggleIcon = document.querySelector('#toggle-icon i');
    const toggleText = document.querySelector('#toggle-icon');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
      themeSwitch.checked = savedTheme === 'dark-mode';
      updateToggleIcon(themeSwitch.checked);
    }
    
    // Theme switch event
    themeSwitch.addEventListener('change', function(e) {
      if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', '');
      }
      updateToggleIcon(e.target.checked);
    });
    
    // Update toggle icon/text
    function updateToggleIcon(isDark) {
      if (isDark) {
        toggleIcon.classList.replace('fa-moon', 'fa-sun');
        toggleText.innerHTML = '<i class="fas fa-sun"></i> Dark Mode';
      } else {
        toggleIcon.classList.replace('fa-sun', 'fa-moon');
        toggleText.innerHTML = '<i class="fas fa-moon"></i> Light Mode';
      }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Message sent successfully!');
        this.reset();
      });
    }
  });