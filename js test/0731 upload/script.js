// const findSmallNum = () => {
//   const numbers = [];
//   for (let i = 0; i < 3; i++) {
//     let num = prompt("1~100 사이의 자연수를 입력하세요.");
//     // console.log(num);
//     numbers.push(num);
//     console.log(numbers);
//     if (Number.isInteger(num) == false || num <= 0 || num >= 100) {
//       prompt("1~100 사이의 자연수를 다시 입력하세요.");
//     } else {
//       console.log(Math.min(num));
//     }
//   }
// };

// findSmallNum();

// // console.log(parseInt(prompt("..")));

// console.log(Number.isInteger(6));

// const findSmallNum = () => {
//   const num1 = parseInt(prompt("첫번째 자연수를 입력하세요."));
//   const num2 = parseInt(prompt("두번째 자연수를 입력하세요."));
//   const num3 = parseInt(prompt("세번째 자연수를 입력하세요."));

//   function naturalNum(num) {
//     return Number.isInteger(num) && num > 0;
//   }

//   if (!naturalNum(num1) || !naturalNum(num2) || !naturalNum(num3)) {
//     console.log("자연수만 입력해주세요!");
//     return;
//   }
// };

// findSmallNum();

// const findSmallNum = () => {
//   const numbers = [];
//   for (let i = 0; i < 3; i++) {
//     let number = parseInt(prompt("100 이하의 자연수를 입력하세요:"));
//     while (isNaN(number) || number <= 0 || number > 100) {
//       number = parseInt(
//         prompt("유효하지 않은 입력입니다. 100 이하의 자연수를 다시 입력하세요:")
//       );
//     }
//     numbers.push(number);
//   }

//   const smallest = Math.min(...numbers);

//   console.log("가장 작은 수는:", smallest);
// console.log(`가장 작은 수는 : ${smallest}`);
// };

// findSmallNum();

// const findSmallNum = () => {
//   // prompt 3번 > 각각 받은 값을 조건문 비교
//   // prompt 1번 > 문자 > 배열 변환 > 각각 비교
//   // NaN = 숫자or not
//   const numbers = [];
//   for (let i = 0; i < 3; i++) {
//     let number = prompt("100 이하의 자연수를 입력하세요:");
//     if (Number.isInteger(number) == false || number <= 0 || number > 100) {
//       prompt("유효하지 않은 입력입니다. 100 이하의 자연수를 다시 입력하세요:");
//     }
//   }
// };

// findSmallNum();

const numbers = [];
for (let i = 0; i < 3; i++) {
  const promptNumber = Number(prompt("1~100까지의 자연수를 입력해주세요."));
  // 1로 나눈 나머지가 0이 아니면 소수점이 있음
  if (promptNumber % 1 == 0) {
    if (promptNumber < 100) {
      numbers.push(promptNumber);
    } else {
      alert("100 이하의 숫자만 입력해주세요.");
      i--;
    }
  } else {
    alert("자연수만 입력해주세요.");
    i--;
  }
}
const smallest = Math.min(...numbers);
console.log(`입력한 값 중 가장 작은 값은 ${smallest}입니다.`);

// console.log("numbers ==>", numbers);
// numbers.forEach((number) => {
//   if (isNaN(number) || number >= 100 || number <= 0) {
//     alert("잘못된 입력입니다. 다시 입력해주세요.");
//   } else {
//     console.log(Math.min(numbers));
//   }
// });
// if (numbers) {
// numbers.forEach((number) => {
//   if (isNaN(number) || number > 100 || number == 0) {
//     alert("잘못된 입력입니다. 다시 입력해주세요.");
//   }
// });
// }
