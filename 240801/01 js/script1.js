// 사용자로부터 이름과 나이를 전달받으세요
// 반드시 콜백함수를 통해서 사용자의 값을 활용해 알림창으로 "안녕하세요 00님 나이가 00세 이네요!!"

// document.body.innerHTML += `<button id="btn">정보 입력</button>`;

// const button = document.querySelector("#btn");

// function promptUser() {
//   const userName = prompt("이름을 입력해주세요.");
//   const userAge = prompt("나이를 입력해주세요.");
//   alert(`안녕하세요 ${userName}님 나이가 ${userAge}세 이네요!`);
// }

// button.addEventListener("click", promptUser);

// function showData(name, age) {
//   alert(`안녕하세요 ${name}님 나이가 ${age}세 이네요!`);
// }

// function getData(callback) {
//   const userName = prompt("이름을 입력하세요.");
//   const userAge = Number(prompt("나이를 입력하세요."));
//   callback(userName, userAge);
// }

// getData(showData);

// js 함수는 1급시민
// 자격 요건
// 1. 함수가 일반 변수에 자료형으로 할당 가능
// 2. 다른 함수의 인자값으로 사용될 수 있어야함
// 3. 다른 함수의 반환값으로 함수를 사용할 수 있어야함

// function hello() {
//   return "안녕하세요!";
// }

// function bey() {
//   return "안녕히가세요!";
// }

// function userCheck(name, fn) {
//   console.log(`${name}님`, fn());
// }

// userCheck("채영", hello);
// userCheck("영심", bey);

// const init = () => {
//   return (a, b) => {
//     return a - b > 0 ? a - b : b - a;
//   };
// };

// console.log(`${init()(10, 20)}`);
