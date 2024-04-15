document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll("#text-slider span");
    let currentSlide = 0;
    slides[currentSlide].style.opacity = '1'; // Mostrar el primer span

    setInterval(() => {
        slides[currentSlide].style.opacity = '0';
        setTimeout(() => {
            currentSlide = (currentSlide + 1) % slides.length; // Volver al primer slide después del último
            slides[currentSlide].style.opacity = '1';
        }, 1000); // Esperar la duración de la transición antes de mostrar el próximo slide
    }, 3000); // Cambiar cada 3 segundos
});