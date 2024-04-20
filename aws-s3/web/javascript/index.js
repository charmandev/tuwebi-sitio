// Archivo: scrollToHome.js
document.querySelector('.logo h2 a').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});
