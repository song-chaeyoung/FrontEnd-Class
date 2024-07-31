// js for문을 활용해서 구구단 2단부터 9단까지 웹 브라우저 화면에 출력하세요.

// for (i = 2; i <= 9; i++) {
//   // let gugudan = [i] * idx;
//   // console.log(gugudan);
//   const idxs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   idxs.forEach((idx) => {
//     const gugudan = [i] * idx;
//     document.write(`${gugudan}`);
//   });
// }

// console.log(idx);

// 중첩 for문
// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; k <= 2; k++) {
//     document.write(`${i}행 ${k}열`);
//   }
//   document.write("<br/>");
// }

// 구구단
for (let a = 2; a <= 9; a++) {
  document.write(`<h2>구구단 ${a}단</h2>`);
  for (let b = 1; b <= 9; b++) {
    // const n = a * b;
    document.write(`${a} X ${b} = ${a * b}`);
    document.write("<br/>");
  }
}
