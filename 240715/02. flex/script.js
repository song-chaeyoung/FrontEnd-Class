// Header Nav
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const header = document.querySelector("header");
  const gototop = document.querySelector(".gototop");

  if (scroll > 50) {
    header.classList.add("active");
    gototop.classList.add("active");
    const triggerSpan = trigger.querySelectorAll("span");
    triggerSpan.forEach((span) => {
      span.style.background = "#000";
    });
  } else {
    header.classList.remove("active");
    gototop.classList.remove("active");
    triggerSpan.forEach((span) => {
      span.style.background = "#fff";
    });
  }
});
// 가급적 전역번수 x, 읽는 시간이 늘어남

//Tigger
const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".gnb");
const gnbLinks = gnb.querySelectorAll("a");

trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  gnb.classList.toggle("active");
});

gnbLinks.forEach((link) => {
  link.addEventListener("click", () => {
    trigger.classList.remove("active");
    gnb.classList.remove("active");
  });
});

// Slick Slider
$(".myslider").slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
