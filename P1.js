document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        target.classList.add('highlight'); // Add highlight class for animation

        // Remove the highlight class after the animation
        setTimeout(() => {
            target.classList.remove('highlight');
        }, 1000);
    });
});

// P1.js

// Function to enable smooth scrolling to sections when links are clicked
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior

            // Get the target section to scroll to
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

