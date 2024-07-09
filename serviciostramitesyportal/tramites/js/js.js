/* Sección 1 mocasines*/
let currentSlideIndex = 0;

function showSlide(index) {
    let slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;

    for (let slide of slides) {
        slide.style.display = 'none';
    }
    slides[currentSlideIndex].style.display = 'block';
}

function changeSlide(step) {
    showSlide(currentSlideIndex += step);
}

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlideIndex);
});