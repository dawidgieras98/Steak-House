const swiper = new Swiper(".swiper", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletActiveClass: "swiper-pagination-bullet-active",
    bulletClass: "swiper-pagination-bullet",
    bulletElement: "div",
  },
});

// Marquee effect

const marqueeElementsDisplayed = document.querySelector(".marquee_container").childElementCount;
const marqueeContent = document.querySelector("ul.marquee_container");

const cloneNodeAddToList = () => {
  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }
};

cloneNodeAddToList();
