// 사용자로부터 2개의 숫자를 받습니다.
// 두개의 숫자의 최대 공약수를 찾아서 콘솔창에 출력합니다.
// 최대공약수란? 복수의 숫자를 동시에 나눌 수 있는 수 중에서 가장 큰 수

const num = [];
for (i = 1; i < 3; i++) {
  const userNum = Number(
    prompt(`${i}번째 숫자를 입력해주세요. 2개의 숫자를 입력합니다.`)
  );
  num.push(userNum);
}

const num2 = [];
for (let k = 1; k <= Math.min(...num); k++) {
  if (num[0] % k === 0 && num[1] % k === 0) {
    num2.push(k);
  }
}
console.log(Math.max(...num2));

// const num01 = Number(prompt("첫번째 숫자 입력!"));
// const num02 = Number(prompt("두번째 숫자 입력!"));

// function getGcd() {
//   const max = num01 > num02 ? num01 : num02;
//   let gcd = 0;
//   for (let i = 1; 1 <= max; i++) {
//     if (num01 % i === 0 && num01 % i === 0) {
//       gcd = i;
//     }
//   }
//   return gcd;
// }
// alert(`${num01}과 ${num02}의 최대공약수는 ${getGcd()}입니다.`);
