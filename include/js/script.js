document.addEventListener('DOMContentLoaded', () => {
    const launchBtn = document.getElementById('launch-btn');
    const planets = document.querySelectorAll('.planet');
    const contactForm = document.getElementById('contact-form');

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Launch button animation
    launchBtn.addEventListener('click', () => {
        launchBtn.style.transform = 'translateY(-1000px) rotate(720deg)';
        launchBtn.style.transition = 'all 2s ease';
        setTimeout(() => {
            launchBtn.style.transform = 'translateY(0) rotate(0deg)';
        }, 2000);
    });

    // Planet hover effect
    planets.forEach(planet => {
        planet.addEventListener('mouseover', () => {
            planet.style.boxShadow = '0 0 20px #00ffff';
        });
        planet.addEventListener('mouseout', () => {
            planet.style.boxShadow = 'none';
        });
    });

    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent to Mission Control!');
        contactForm.reset();
    });

    // Parallax effect for stars
    window.addEventListener('scroll', () => {
        const stars = document.querySelector('.stars');
        const scrollPosition = window.pageYOffset;
        stars.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Random twinkling stars
    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 1}s`;
        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 5000);
    }

    setInterval(createStar, 200);
});
