// JS ES6 => 혼종!
// map & set
// 배열 & 객체
// 배열 : 인덱스 // 개수 // 넣고, 빼고 자유
// 객체 : 프로퍼티 형태 유지 (어떤 자료가 무슨 의미인지 확인 가능)
// 배열 + 객체 => 장점 집합 => map
// Map => 배열의 형태를 띄고 있는 이터러블한 객체의 자료구조들의 공통적인 약점
// 중복되는 값을 제어X

// const bag = new Map();
// bag.set("color", "red");

// console.log(bag);

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

console.log(myCup);

myCup.set("type", "mini");
myCup.set("color", "red");

console.log(myCup);
