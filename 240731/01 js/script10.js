// 사용자로부터 어떤 숫자를 받습니다.
// 사용자에게 받은 숫자가 소수이면 바탕화면에 "00"숫자는 소수입니다.
// else "00"는 소수가 아닙니다.

// const userNum = Number(prompt("숫자를 입력해주세요."));

// for (let i = 2; userNum > i; i++) {
//   if (userNum % 1 === 0) {
//     document.write(`<h2>${userNum}은 소수가 아닙니다.</h2>`);
//   } else if (userNum === 1) {
//     document.write(`<h2>${userNum}은 소수가 아닙니다.</h2>`);
//   } else {
//     document.write(`<h2>${userNum}은 소수입니다.</h2>`);
//     // break;
//   }
// }

// for (let i = 2; userNum > i; i++) {
//   if (userNum === 1) {
//     document.write(`<h2>${userNum}은 소수가 아닙니다.</h2>`);
//     // return;
//   } else if (userNum % i === 0) {
//     document.write(`<h2>${userNum}은 소수가 아닙니다.</h2>`);
//   } else {
//     document.write(`<h2>${userNum}은 소수입니다.</h2>`);
//     // break;
//   }
// }
// return userNum > 1;

const number = Number(prompt("숫자를 입력하세요!"));
let isPrimes;

if (number === 1) {
  document.write(`<h2>1은 소수도 합성수도 아닙니다.</h2>`);
} else if (number === 2) {
  document.write(`<h2>2는 소수입니다.</h2>`);
  isPrimes = true;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      // document.write(`<h2>${number}은 소수가 아닙니다.</h2>`);
      isPrimes = false;
      break;
    } else {
      // document.write(`<h2>${number}은 소수입니다.</h2>`);
      isPrimes = true;
    }
  }

  if (isPrimes) {
    document.write(`<h2>${number}은 소수입니다.</h2>`);
  } else {
    document.write(`<h2>${number}은 소수가 아닙니다.</h2>`);
  }
}
