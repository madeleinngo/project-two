var toggleButton = document.querySelector(".toggle");
var links = document.querySelector(".links");

function toggle() {
  links.classList.toggle("active");
}

toggleButton.addEventListener("click", toggle);


var slideIndex = 0;
var slides = document.querySelectorAll(".slideshow > div");
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
}

