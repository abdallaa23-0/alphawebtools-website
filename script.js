document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add form submission handling for the subscription form
    document.getElementById('subscribe-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        if (email) {
            alert('Thank you for subscribing!');
            this.submit();
        } else {
            alert('Please enter a valid email address.');
        }
    });
});
