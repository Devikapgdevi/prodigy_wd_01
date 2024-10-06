// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#444';
    }
});
