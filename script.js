document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');

    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save theme preference
        const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formConfirmation = document.getElementById('form-confirmation');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulated form submission
        contactForm.reset();
        formConfirmation.classList.remove('hidden');
        
        setTimeout(() => {
            formConfirmation.classList.add('hidden');
        }, 3000);
    });
});
