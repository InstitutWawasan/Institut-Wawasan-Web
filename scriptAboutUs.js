
$(document).ready(function() {
  $('#aboutUsTitle').animate({
      opacity: 1,
      transform: 'scale(1)',
  }, 2000);
});




























//// bagi gambar blh slide
let currentSlide = 0;
let slides;

window.onload = function () {
  slides = document.querySelectorAll('.slide');
  showSlide(currentSlide);
};

function showSlide(n) {
  // Remove "active" class from all slides and add "out"
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    slide.classList.add('out');
  });

  // Add "active" class to desired slide and remove "out"
  slides[n].classList.add('active');
  slides[n].classList.remove('out');
}

function changeSlide(n) {
  currentSlide += n;

  // Wrap around to the first slide
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;

  showSlide(currentSlide);
}

