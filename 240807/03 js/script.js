// 1. 각 텍스트에 마우슬 올린다.
// 텍스트를 찾아온다
// 텍스트는 4개이다
// querySelectorAll
// forEach
// addEventListiner
// mouseover || mouseenter
// mouseout || mouseleave

// 2. 텍스트에 마우스가 올라갈 때마다 이미지가 변경된다.
// - 현재 이미지를 출력하고 있는 Node를 찾아온다
// - 해당 Mode가 어떻게 이미지를 출력하고 있는지 확인
// - 어떻게 하면 Node의 속성값을 변경할 수 있는지 고민
//  스크립트에서 어떻게 CSS 스타일 속성을 제어할 수 있는지 생각

// 3. 텍스트에서 마우스에서 떠나면 원래 상태로 돌아온다.

// const texts = document.querySelectorAll("li");

// texts.forEach((text, i) => {
//   const changeImage = () => {
//     const bgImg = document.querySelector(".photo");
//     // let src = bgImg.getAttribute("src");
//     const newSrc = `./img/portrait-0${i + 1}.jpg`;
//     bgImg.style.background = `url("${newSrc}")center/cover no-repeat`;
//     bgImg.style.transition = `all 1s`;
//   };
//   text.addEventListener("mouseover", changeImage);

//   text.addEventListener("mouseout", () => {
//     this.style.background = ``;
//   });
// });

const liItems = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

liItems.forEach((item, i) => {
  item.addEventListener("mouseenter", function () {
    let changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = `url("${changeImage}")`;
  });

  item.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});
