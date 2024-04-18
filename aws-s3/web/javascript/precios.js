
//JAVASCRIPT PARA EL CARRUSEL

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.carousel-slider');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelectorAll('.marcianosCards');
    let currentIndex = 0;
    let autoPlayInterval;

    function checkWindowSize() {
        return window.innerWidth < 768;
    }

    function updateButtonVisibility() {
        prevButton.style.display = currentIndex > 0 && checkWindowSize() ? 'block' : 'none';
        nextButton.style.display = currentIndex < slides.length - 1 && checkWindowSize() ? 'block' : 'none';
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

    window.addEventListener('resize', () => {
        if (!checkWindowSize() && currentIndex !== 0) {
            slider.style.transform = 'translateX(0)';
            currentIndex = 0;
        }
        updateButtonVisibility();
        startAutoPlay(); 
    });

    updateCarousel();
    startAutoPlay();
});




//JAVASCRIPT PARA LAS TARJETAS INVERTIDAS
