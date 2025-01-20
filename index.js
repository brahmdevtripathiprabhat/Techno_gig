

const slides = document.querySelectorAll(".testimonial-slide");
const indicators = document.querySelectorAll(".indicator");
let currentIndex = 0;

function updateSlider(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    indicators[i].classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      indicators[i].classList.add("active");
    }
  });
}

indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    currentIndex = i;
    updateSlider(currentIndex);
  });
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
}, 5000);

updateSlider(currentIndex);



const knowMoreBtn = document.getElementById("knowMoreBtn");
  const detailsCard = document.getElementById("detailsCard");
  const closeBtn = document.getElementById("closeBtn");

  knowMoreBtn.addEventListener("click", () => {
    detailsCard.style.display = "block";
    knowMoreBtn.style.display = "none";
  });

  closeBtn.addEventListener("click", () => {
    detailsCard.style.display = "none";
    knowMoreBtn.style.display = "block";
  });