const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];

const tail = (arr) => {
  return arr.length > 1 ? arr.slice(1) : arr;
};

origin.innerText = numbers;
result.innerText = tail(numbers);

// 1) 1개의 난이도가 있는 문제를 1시간 동안 해결
// 2) 10개의 문제(초 ~ 상급)
