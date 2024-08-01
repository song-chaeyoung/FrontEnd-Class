// 현재 보고 있는 웹브라우저 문서 내 버튼 하나 만들어 주세요
// 해당 버튼을 클릭할때마다 색상이 변경되도록 해주세요.
// 변경되어야 하는 색상은 화이트, 옐로우, aqua, purple이며, 마지막 퍼플 색상 다음번 색상은 첫번재 색상인 White 색상으로 변경되면 됩니다.
//각각의 컬러를 배열 자료구조를 사용
//이벤트 필요
// 0부터 시작하는 인덱스값이 1개씩 증가한다
//증감연산자

// document.body.innerHTML += `<button>Button</button>`;
// const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   for (let i = 0; i < colors.length; i++) {
//   const colors = ["white", "yellow", "aqua", "purple"];
//     colors.forEach((color) => {
//       btn.style.backgroundColor = color;
//     });
//   }
// });

const color = ["white", "yellow", "aqua", "purple"];

document.body.innerHTML += `<button>Button</button>`;
const btn = document.querySelector("button");

let i = 0;

btn.addEventListener("click", () => {
  i++;
  if (i >= color.length) i = 0;
  const bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = color[i];
});
