// 사용자로부터 수학점수를 받으세요.
// 사용자로부터 국어점수를 받으세요.
// 함수를 사용해서 수학+국어 점수의 평균점수를 계산하여 alert창을 통해 알려주세요.

// const math = Number(prompt("수학점수를 입력하세요."));
// const korean = Number(prompt("국어점수를 입력하세요."));

// const score = (a, b) => {
//   const userScore = (a + b) / 2;
//   alert(`평균점수는 ${userScore}입니다.`);
// };

// score(math, korean);

// const test = () => {
//   const arr = ["국어", "수학"];
//   const scoreArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const userSocre2 = Number(prompt(`${arr[i]}점수를 입력하세요.`));
//     scoreArr.push(userSocre2);
//   }
//   let sum = 0;
//   let total = 0;
//   for (let k = 0; k < scoreArr.length; k++) {
//     sum += k;
//     total = sum / scoreArr.length;
//   }
//   alert(`평균은 ${total}입니다.`);
// };

// test();

const subject = ["수학", "국어"];

function testAvg() {
  let sum = 0;
  for (let i = 0; i < subject.length; i++) {
    sum += Number(prompt(`${subject[i]}점수는?`));
  }
  let avg = sum / subject.length;
  return avg;
}

alert(`평균점수는 ${testAvg()}입니다.`);
