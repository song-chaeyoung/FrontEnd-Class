// function greeting() {
//   console.log("HI");
// }

// const timer = setInterval(greeting, 2000);

// clearInterval(timer);

// let counter = 0;

// const changeFnc = () => {};

// const timer = setInterval(() => {
//   console.log("안녕하세요.");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// 재귀함수 호출 = 반복문처럼 무한 반복
// let num = 0;

// const testFnc = () => {
//   num++;
//   document.write(num, "</br>");
//   if (num === 10) return; //"보이지않는 무의 반환값";
//   testFnc();
// };

// testFnc();

// return => 문장종결
// return 값
// 함수가 어떤 연산작업 => 값을 반환!!
// 연산작업이 완료 x => 반환!

//setTimeout
setTimeout(() => {
  console.log("3초가 지났습니다.");
}, 3000);
