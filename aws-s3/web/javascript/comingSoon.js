let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
let timer;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function prevSlide() {
  clearInterval(timer);
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

function nextSlide() {
  clearInterval(timer);
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
  timer = setInterval(nextSlide, 5000);
}

showSlide(currentIndex);
timer = setInterval(nextSlide, 5000);

document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("mousemove", function() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
  });
});
