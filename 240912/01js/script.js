// 병합연산자
// const numA = 10;
// const numB = 20;
// const numC = undefined;

// console.log(numC ?? numB);

// 삼항조건 연산자
// const strA = "안녕하세요";
// const strB = "";

// typeof strA === "string"
//   ? console.log("문자 자료형")
//   : console.log("문자 아님");
// console.log(typeof strA);

// switch & case
// const fruit = "pine";

// switch (fruit) {
//   case "apple":
//     console.log("사과");
//     break;

//   case "banana":
//     console.log("바나나");
//     break;

//   default:
//     console.log("찾는 과일 없음");
// }

// Object 생성 및 온점, 대괄호표기법
// let objA = {};
// objA.numA = 200;
// objA["numB"] = 2;
// console.log(objA);

// let objB = new Object();
// console.log(objB);
// console.log(objA.numA);

// const person = {
//   name: "David",
//   Age: 20,
//   location: "Seoul",
// };
// 객체 안에 있는 key값을 배열로 반환!
// const keyArr = Object.keys(person);

// keyArr.forEach((item) => {
//   let value = person[item];
//   console.log(item, value);
// });

// console.log(keyArr);

// 구조분해할당
// const test0 = {
//   name: "Cy",
//   age: 20,
//   skill: "JS",
// };

// const { name, age, skill } = test0;

// console.log(name, age, skill);

// 단락회로평가
// const calaA = () => {
//   console.log("A");
//   return false;
// };

// const calaB = () => {
//   console.log("B");
//   return true;
// };

// console.log(calaA() && calaB());
// console.log(calaA() || calaB());
// && : 좌항이 true면 우항 실행X
// || : 좌항에 관계없이 우항이 true이면 실행

// react는 기본적으로 브라우저를 통해서 앱을 여는 순간 => 컴포넌트가 무조건 마운트!
// 가상돔 => 영화데이터를 찾아오도록하는 fetch()
// 정상적으로 fetch()를 통해서 불러오는 영화 API데이터를 출력하지 못함
// console.log(movieData && data.title);

// 찾아온 영화데이터를 가지고 약 3000픽셀 높이값을 가지고 있는 브라우저 화면을 채워야하는 상황 => 20개
// 로딩스피너 가 돌고 있으면 데이터를 가져오고 준비해라

// 전개연산자
// const arrA = [1, 2, 3];
// const arrB = [4, 5, 6];

// const arrC = [...arrA, ...arrB];
// const arrD = [arrA, arrB];

// console.log(arrC, arrD);

// const objA = {
//   a: 1,
//   b: 2,
// };

// const objB = {
//   c: 3,
//   d: 4,
// };

// const objC = { ...objA, ...objB };

// console.log(objC);

// 배열 메서드 특집!
let food = ["짜장면", "피자", "치킨"];
let food2 = ["탕수육", "라면"];
// const newLength = food.push("탕수육", "라면");

// console.log(food, newLength);

// const removeItem = food.pop();
// const removeItem2 = food.pop();
// console.log(removeItem, removeItem2);
// console.log(food);

// const newLength = food.unshift();
// console.log(newLength, food);

// const removeItem = food.shift();
// console.log(removeItem);
// console.log(food);

// const sliced = food.slice(1, 3);
// console.log(sliced);
// const sliced = food.slice(1);
// console.log(sliced);

// const arrA = food.concat(food2);
// console.log(arrA);

// console.log(food.includes("짜장면"));

// const arr = [
//   { name: "Daivd" },
//   { name: "Daivd" },
//   { name: "Cy" },
//   { name: "Maria" },
//   { name: "martin" },
//   { name: "Juliet" },
//   { name: "Romeo" },
// ];

// const element = arr.find((item) => item.name === "Daivd");
// console.log(element);
// console.log(arr);

// const arr = [
//   { name: "슛돌이", hobby: "축구" },
//   { name: "통키", hobby: "피구" },
//   { name: "강속구", hobby: "야구" },
//   { name: "태백산", hobby: "피구" },
// ];

// const filterd = arr.filter((item) => {
//   return item.hobby == "피구";
// });
// const filterd2 = arr.filter((item) => item.hobby == "피구");
// console.log(filterd);
// console.log(arr);

// const newArr = arr.map((item) => (item.food = "음식"));
// console.log(newArr);

// const arr1 = [10, 5, 3, 7, 3];
// // arr1.sort(a -b);

// const compare = (a, b) => {
//   // if (a > b) return 1;
//   // else if (a < b) return -1;
//   // else return 0;
//   a - b;
// };

// arr1.sort(compare);
// console.log(arr1);

// console.log(food.join("**"));

const arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((acc, item) => acc + item, 0);

console.log(result);
