document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.carousel-slider');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelectorAll('.marcianosCards');
    let currentIndex = 0;
    let autoPlayInterval;

    function updateButtonVisibility() {
        // Asegúrate de que los botones siempre estén visibles.
        prevButton.style.display = currentIndex > 0 ? 'block' : 'none';
        nextButton.style.display = currentIndex < slides.length - 1 ? 'block' : 'none';
    }

    function updateCarousel() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateButtonVisibility();
    }

    function moveToNextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        updateCarousel();
    }

    function startAutoPlay() {
        stopAutoPlay(); 
        autoPlayInterval = setInterval(moveToNextSlide, 3000); 
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
        startAutoPlay(); 
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateCarousel();
        }
        startAutoPlay(); 
    });

    // Actualiza los botones inicialmente y cada vez que se cambia el tamaño de la ventana
    window.addEventListener('resize', updateButtonVisibility);

    updateCarousel();
    startAutoPlay();
});
