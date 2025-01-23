

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



document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const heroSection = document.querySelector("#heroSection");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbar && heroSection && navbarToggler && navbarCollapse) {
 
    window.addEventListener("scroll", () => {
      if (window.scrollY > heroSection.offsetHeight) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    navbarToggler.addEventListener("click", () => {
      navbarCollapse.classList.toggle("gradient-background");
    });
  } else {
    console.error("Navbar, hero section, or navbar toggler not found.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const heroContent = document.querySelector("#heroSection .hero-content");

  if (navbarToggler && heroContent) {
    navbarToggler.addEventListener("click", () => {
      heroContent.classList.toggle("hide-text");
    });
  } else {
    console.error("Navbar toggler or hero content not found.");
  }
});

 

  