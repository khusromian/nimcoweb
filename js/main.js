// JavaScript functionality for Fresh Bites website

// Performance monitoring and loading optimizations
document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to body for initial loading state
    document.body.classList.add('loading');

    // Remove loading class after DOM is loaded
    window.addEventListener('load', function() {
        document.body.classList.remove('loading');
    });

    // Add smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll detection for active section highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function highlightActiveSection() {
        let scrollPos = window.scrollY + 200; // Adjust offset as needed

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Performance optimization for scroll events
    let isScrolling = false;

    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                highlightActiveSection();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // Add click functionality for contact buttons
    const contactButtons = document.querySelectorAll('.contact-info a');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add any additional click tracking or analytics here if needed
            console.log('Contact link clicked:', this.href);
        });
    });
});

// Add error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Fallback if image fails to load
            // Create a fallback SVG inline as backup
            this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%239E9E9E"/><text x="150" y="100" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">Image</text><text x="150" y="130" font-family="Arial" font-size="14" fill="white" text-anchor="middle" dominant-baseline="middle">Not Available</text></svg>';
            this.alt = 'Image not available';
        });
    });
});

// Add social sharing functionality
function shareWebsite() {
    if (navigator.share) {
        navigator.share({
            title: 'Fresh Bites - Delicious Food Products',
            text: 'Check out Fresh Bites for delicious food products including fresh juice, baked biscuits, and traditional Nimco snacks!',
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback: Copy link to clipboard
        navigator.clipboard.writeText(window.location.href).then(function() {
            alert('Link copied to clipboard!');
        });
    }
}

// Add share button functionality if needed
document.addEventListener('DOMContentLoaded', function() {
    // Create share button if it doesn't exist
    const footer = document.querySelector('footer');
    if (footer && !document.querySelector('.share-button')) {
        const shareButton = document.createElement('button');
        shareButton.className = 'share-button';
        shareButton.textContent = 'Share';
        shareButton.onclick = shareWebsite;
        shareButton.style.cssText = `
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
        `;
        footer.appendChild(shareButton);
    }
});