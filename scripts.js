// dark-mode.js
document.addEventListener('DOMContentLoaded', function() {
    // Theme Switching Functionality
    const themeToggle = document.querySelector('.theme-switch input[type="checkbox"]');
    const toggleIcon = document.getElementById('toggle-icon');
    const htmlElement = document.documentElement;
  
    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (currentTheme) {
      htmlElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
        themeToggle.checked = true;
        toggleIcon.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
      }
    } else if (systemPrefersDark) {
      htmlElement.setAttribute('data-theme', 'dark');
      themeToggle.checked = true;
      toggleIcon.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    }
  
    // Theme toggle event listener
    themeToggle.addEventListener('change', function(e) {
      if (e.target.checked) {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleIcon.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
      } else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleIcon.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
      }
    });
  
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          htmlElement.setAttribute('data-theme', 'dark');
          themeToggle.checked = true;
          toggleIcon.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
          htmlElement.setAttribute('data-theme', 'light');
          themeToggle.checked = false;
          toggleIcon.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
      }
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
          formObject[key] = value;
        });
  
        // Here you would typically send the data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
        
        // In a real implementation, you would use fetch() to send the data
        /*
        fetch('your-server-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formObject),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          alert('Thank you for your message! I will get back to you soon.');
          this.reset();
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('There was an error sending your message. Please try again later.');
        });
        */
      });
    }
  
    // Animation on scroll
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.experience-card, .contact-card, .about-grid');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
  
    // Set initial state for animated elements
    document.querySelectorAll('.experience-card, .contact-card, .about-grid').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
  
    // Run once on load
    animateOnScroll();
    
    // Then run on scroll
    window.addEventListener('scroll', animateOnScroll);
  
    // Mobile menu toggle (if you add a mobile menu later)
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.classList.toggle('active');
      });
    }
  });