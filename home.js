document.addEventListener("DOMContentLoaded", function () {
    const servicesTyping = {
      0: {
        element: "#typing-service-1",
        strings: ["Discover your life's path with customized insights based on the stars."],
      },
      1: {
        element: "#typing-service-2",
        strings: ["Uncover your destiny with our ancient and accurate palmistry techniques."],
      },
      2: {
        element: "#typing-service-3",
        strings: ["Experience the power of Vedic astrology to guide you through life's challenges."],
      },
    };

    let activeTypingInstance = null;

    const initializeTypingEffect = (index) => {
      const service = servicesTyping[index];
      if (service && !document.querySelector(service.element).innerHTML) {
        activeTypingInstance = new Typed(service.element, {
          strings: service.strings,
          typeSpeed: 50,
          backSpeed: 30,
          loop: false,
        });
      }
    };

    const carousel = document.querySelector("#servicesCarousel");
    carousel.addEventListener("slide.bs.carousel", function (e) {
      if (activeTypingInstance) {
        activeTypingInstance.destroy(); 
        activeTypingInstance = null;
      }

      const nextSlideIndex = e.to;
      initializeTypingEffect(nextSlideIndex);
    });

   
    initializeTypingEffect(0);
  });