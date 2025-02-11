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

window.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const loadingBg = document.querySelector(".loading_bg");


  // Check if video is already loaded
  if (video.readyState >= 3) {  // 3 means the video can play through
    showVideo();
  } else {
    video.addEventListener("canplaythrough", showVideo);
    video.addEventListener("error", function (e) {
      console.error("Error loading video:", e);
    });
  }

  function showVideo() {
    console.log("Video loaded");
    loadingBg.style.display = "none";  // Hide the loading screen
    video.style.display = "block";     // Show the video
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

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  const animateBars = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const percent = bar.getAttribute("data-percent");
        bar.style.width = `${percent}%`; 
        observer.unobserve(bar);
      }
    });
  };

  const observer = new IntersectionObserver(animateBars, {
    threshold: 0.3, 
  });

  progressBars.forEach((bar) => {
    observer.observe(bar);
  });
});

// testimonial section
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".testimonial-container");

  if (!container) {
    console.error("Testimonial container not found.");
    return;
  }

  window.scrollLeftTestimonial = function () { 
    container.scrollBy({ left: -200, behavior: "smooth" });
  };

  window.scrollRightTestimonial = function () { 
    container.scrollBy({ left: 200, behavior: "smooth" });
  };

 
  document.querySelector(".scroll-btn.left")?.addEventListener("click", scrollLeftTestimonial);
  document.querySelector(".scroll-btn.right")?.addEventListener("click", scrollRightTestimonial);
});


function openImage(img) {
  document.getElementById("fullImage").src = img.src;
  document.getElementById("imageModal").style.display = "flex";
}

function closeImage(event) {
  if (event.target.classList.contains("image-modal") || event.target.classList.contains("close-btn")) {
    document.getElementById("imageModal").style.display = "none";
  }
}





 

  
