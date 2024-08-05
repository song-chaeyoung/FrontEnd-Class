// Sticky Event
window.addEventListener("scroll", () => {
  const hashList = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  if (scrollY > 300) {
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
});

// Touch Event
const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScrollWidth = hashContent.clientWidth + 200;

//최초 터치 및 마우스다운 지점
let startX = 0;

// 현재 이동중인 지점
let nowX = 0;

// 터치 종료 지점
let endX = 0;

// 두번째 터치 지점
let listX = 0;

const getClientX = (e) => {
  // const isTouches = e.touches ? true : false;
  // return isTouches ? e.touches[0].clientX : e.clientX;
  // clientX : 사용자가 현재 보고있는 device 매체의 너비를 의미!
  return e.touches ? e.touches[0].clientX : e.clientX;
};

// console.log(window.getComputedStyle(hashContent).transform);
// getComputedStyle => matrix(1, 0, 0, 1, -56, 0)
// 1. x방향의 스케일
// 2. y방향의 기울기
// 3. x방향의 기울기
// 4. y방향의 스케일
// 5. x축을 기준으로 이동한 거리
// 6. Y축을 기준으로 이동한 거리

// 정규표현식
// 문자열 // 전용 함수 (인덱스)
// 로그인페이지

// split 문자열을 배열로

const getTranslateX = () => {
  // console.log(
  //   window.getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  // );
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollWidth;
  }
  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);
  window.removeEventListener("touchstart", onScrollMove);
  window.removeEventListener("mousedown", onScrollMove);
  window.removeEventListener("touchend", onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);
};

const onScrollStart = (e) => {
  startX = getClientX(e);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);
  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);
