// 현재 보여지는 문서의 높이 자체 : innerHeight
// 스콜이 가능한 영역까지 포함한 문서의 높이 자체 : scrollHeight
// documentHeight = scrollHeight - innerHeight = 순수하게 스크롤이 되었을 때 볼 수 있는 영역
// winodw.scollY / documentHeight * 100
// (2px / 스크롤이 가능한 full영역) * 100

const progress = document.querySelector(".bar");
const h1 = document.querySelector("h1");

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

window.addEventListener("scroll", (e) => {
  let scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight - window.innerHeight;

  const per = `${percent(scrollNum, documentHeight)}%`;
  h1.innerText = per;
  progress.style.width = `${percent(scrollNum, documentHeight)}%`;
});
