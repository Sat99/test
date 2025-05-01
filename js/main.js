// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuButton.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuButton.classList.remove('active');
                }
            }
        });
    });

    // Partner logos hover effect
    const partnerLogos = document.querySelectorAll('.partner-logo');
    partnerLogos.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            logo.style.filter = 'grayscale(0%)';
            logo.style.transform = 'scale(1.05)';
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.filter = 'grayscale(100%)';
            logo.style.transform = 'scale(1)';
        });
    });

    // Testimonial cards hover effect
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // Event cards hover effect
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // Blog post cards hover effect
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        post.addEventListener('mouseenter', () => {
            post.style.transform = 'translateY(-5px)';
            post.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
        
        post.addEventListener('mouseleave', () => {
            post.style.transform = 'translateY(0)';
            post.style.boxShadow = 'none';
        });
    });

    // Form validation and submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'red';
                } else {
                    field.style.borderColor = '#ccc';
                }
            });
            
            if (isValid) {
                // Here you would typically send the form data to a server
                // For now, we'll just show a success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Forma uspešno poslana!';
                successMessage.style.color = 'green';
                successMessage.style.marginTop = '1rem';
                
                form.appendChild(successMessage);
                form.reset();
                
                // Remove success message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value.trim()) {
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Uspešno ste se prijavili na novice!';
                successMessage.style.color = 'green';
                successMessage.style.marginTop = '1rem';
                
                this.appendChild(successMessage);
                this.reset();
                
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
        });
    }

    // Mobile menu button animation
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const spans = this.querySelectorAll('span');
            spans.forEach(span => {
                span.classList.toggle('active');
            });
        });
    }
}); 