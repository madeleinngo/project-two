var toggleButton = document.querySelector(".toggle");
var links = document.querySelector(".links");

function toggleMenu() {
  links.classList.toggle("active");
}

toggleButton.addEventListener("click", toggleMenu);

var slideIndex = 0;
var slides = document.querySelectorAll(".slideshow > div.slide");
var stories = document.querySelectorAll(".progress-container > div");
var maxIndex = slides.length - 1;

function back() {
  if (slideIndex === 0) {
    slideIndex = maxIndex;
    toggle(0, maxIndex);
  } else {
    --slideIndex;
    toggle(slideIndex + 1, slideIndex);
  }
}

function next() {
  if (slideIndex === maxIndex) {
    slideIndex = 0;
    toggle(maxIndex, 0);
  } else {
    ++slideIndex;
    toggle(slideIndex - 1, slideIndex);
  }
}

function toggle(from, to) {
  slides[from].classList.remove("active");
  slides[to].classList.add("active");

  stories[from].classList.remove("active");
  stories[to].classList.add("active");
}

