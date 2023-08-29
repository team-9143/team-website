// Home page slideshow
var slideIndex = 0;

function changeSlide(n) {
  setSlide(slideIndex + n);
}

function setSlide(n) {
  let slides = document.querySelectorAll("#slideshow-container .mySlides");
  let dots = document.querySelectorAll("#slideshow-container .dot");

  (n >= slides.length) ? slideIndex = 0 :
      (n < 0) ? slideIndex = slides.length-1 :
        slideIndex = n;

  for (let slide of slides) {slide.style.display = "none"}
  slides[slideIndex].style.display = "block";

  for (let dot of dots) {dot.classList.remove("active")}
  dots[slideIndex].classList.add("active");
}