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
