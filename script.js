document.addEventListener('DOMContentLoaded', function() {
    const isMaintenanceMode = false; // Set this to true to enable maintenance mode

    if (isMaintenanceMode) {
        document.getElementById('main-content').style.display = 'none';
        document.getElementById('maintenance-container').classList.remove('hidden');
        document.getElementById('maintenance-container').classList.add('visible');
    } else {
        document.getElementById('maintenance-container').classList.remove('visible');
        document.getElementById('maintenance-container').classList.add('hidden');
        document.getElementById('main-content').style.display = 'block';
    }

    // Add smooth scrolling to all navigation links
    document.querySelectorAll("nav .dropdown-content a").forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                document.querySelectorAll('main section').forEach(section => {
                    section.classList.add('hidden');
                    section.classList.remove('visible');
                });
                targetElement.classList.add('visible');
                targetElement.classList.remove('hidden');
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Temporarily disable form submission handling for the subscription form
    /*
    document.getElementById('subscribe-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        if (validateEmail(email)) {
            // Send the form data using AJAX
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Thank you for subscribing!');
                } else {
                    alert('There was an error with your subscription. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error with your subscription. Please try again.');
            });
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    */

    // Add scroll event listener to trigger animations
    const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach(element => {
        observer.observe(element);
    });
}); 
