const btn = document.querySelector("#open");
const modalBox = document.querySelector("#modal_box");
const close = document.querySelector("#close");

btn.addEventListener("click", () => {
  modalBox.classList.add("acitve");
});

close.addEventListener("click", () => {
  modalBox.classList.remove("acitve");
});

modalBox.addEventListener("click", function () {
  this.classList.remove("acitve");
});

// 2015년도 java script를 만드는 기관(Ecma) => ES6문법
// js 문법
// 화살표 문법 function
// 기존문법의 편의성을 못가져옴 (ex. this문법, 선언 & 호출 위치)
// Hosting => 끌어올리다
