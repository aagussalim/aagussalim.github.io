let slideIndex = 0;

const showSlides = (n) => {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    const offset = -slideIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

const nextSlide = () => showSlides(++slideIndex);
const prevSlide = () => showSlides(--slideIndex);

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

showSlides(slideIndex);
