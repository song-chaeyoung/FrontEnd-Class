const header = document.querySelector("header");

const coverWrap = document.querySelector(".cover_wrap");
const overlay = coverWrap.querySelector(".overlay");
const coverTitle = coverWrap.querySelector(".cover_title");
const coverHeight = window.innerHeight;

const contWrap = document.querySelector(".cont_wrap");
const bar = document.querySelector(".bar");

coverWrap.style.height = `${coverHeight}px`;
contWrap.style.marginTop = `${coverHeight}px`;

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

window.addEventListener("scroll", (e) => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight;
  // const documentHeight = document.body.scrollHeight - window.innerHeight;
  // console.log(documentHeight);

  const per = `${percent(scrollNum, documentHeight)}`;
  bar.style.width = `${per}%`;

  if (scrollNum >= coverHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 8}px`;
    coverTitle.style.top = `${-scrollNum / 3}px`;
    overlay.style.background = `rgba(0,0,0,${0.2 + scrollNum / 1000})`;
  }
});

// 1. css > backgroundPosition => 수평//수직 정렬값
// 2. 패럴렉스 개념
