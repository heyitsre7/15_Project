const slides = document.querySelectorAll(".slides");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".pre-btn");

let counter = 0;

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // Hide buttons at the edges
  if (counter >= slides.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
  if (counter <= 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  // Ensure counter is within bounds
  if (counter >= slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none"; // Hide prev button initially
