// const p = document.querySelector("p");
// const section = document.querySelector("section");

document.querySelector("p").addEventListener("click", () => {
  // console.log("p");
});
document.querySelector("section").addEventListener("click", () => {
  // console.log("section");
});
document.querySelector("div").addEventListener("click", () => {
  // console.log("div");
});
document.body.addEventListener("click", () => {
  // console.log("body");
});

// 웹브라우저 실행 => html, js 파싱

// function testFnc() {
//   alert("시작")
// }

const elements = document.querySelectorAll("*");
// console.log(elements);

elements.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(
      `e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`
    );
  });
  true;
});
