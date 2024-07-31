// Header Fixed
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const gototop = document.querySelector(".gototop");
  if (scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  if (scrollY > 500) {
    gototop.classList.add("active");
  } else {
    gototop.classList.remove("active");
  }
});

// Header Fixed
const diplayNavMo = document.querySelector(".top-nav_btn");
diplayNavMo.addEventListener("click", () => {
  diplayNavMo.classList.toggle('active');
});

// Swiper
const swiper = new Swiper(".swiper", {
  // slidesPerView: 1, // 한 번에 표시할 슬라이드 수
  // // spaceBetween: 50, // 슬라이드 간의 간격
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  autoplay: {
    delay: 3000, // 3초마다 자동 재생
    disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생 유지
  },
});
