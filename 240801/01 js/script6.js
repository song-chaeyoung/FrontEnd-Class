// 사용자에게 숫자 1개를 받습니다.
// 단, 무조건 1보다 큰 숫자를 받아야 합니다.
// 사용자에게 받은 숫자를 기준으로 1~해당숫자까지의 수들 가운데 짝수만 찾아서 더한 결과값을 console

const userNum = Number(prompt("숫자 1개를 입력해주세요."));

let num2 = 0;
if (userNum <= 0 && userNum !== NaN) {
  alert("0보다 큰 숫자를 입력해주세요.");
} else {
  for (i = 1; i < userNum; i++) {
    if (i % 2 === 0) {
      num2 += i;
    }
  }
  console.log(num2);
}

// const number = Number(prompt("숫자 1개를 입력해주세요."));
// let sum = 0;
// if (number > 0 && number !== null) {
//   for (let i = 1; i < number; i++) {
//     if (i % 2 === 1) continue;
//     sum += i;
//   }
//   console.log(sum);
// }
