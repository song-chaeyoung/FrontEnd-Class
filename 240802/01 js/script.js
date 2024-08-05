// 함수에서 만날 수 있는 전개연산자 구문

// const fruits = ["apple", "banna", "grape"];
// console.log(...fruits);

// function addNum(...numbers) {
//   let sum = 0;

//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(addNum(1, 3, 8, 10, 11, 20));

function displayFavorites(first, second, ...favs) {
  //전개연산자는 젤 뒤에 와야한다!
  const str = `가장 좋아하는 과일은 ${second}입니다.`;
  return str;
}

console.log(displayFavorites("사과", "포도", "토마토"));
