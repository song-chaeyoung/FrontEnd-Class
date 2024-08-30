const progress = document.querySelector(".bar");
const depthWrap = document.querySelector(".depth_wrap span");
const submarine = document.querySelector(".submarine");
const octopus = document.querySelector(".octopus");

const percent = (scrollNum, documentHeight) => {
  return parseInt((scrollNum / documentHeight) * 100);
};

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight - window.innerHeight;

  const per = `${percent(scrollNum, documentHeight)}`;

  progress.style.width = `${per}%`;
  depthWrap.innerText = `${scrollNum}`;
  submarine.style.transform = `translateX(${per}%)`;
  octopus.style.transform = `translateY(-${per / 2}%)`;
});
