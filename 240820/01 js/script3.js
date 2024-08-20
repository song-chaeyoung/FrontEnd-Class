// 면접 단골질문~
// 1. Iterable => 객체 안에 담겨있는 각각의 독립적인 아이템요소를 찾아서 어떤 실행을 순서대로 처리할 수 있도록 할 수 있는 객체
// JS 안에서 Iterable 객체 => 배열 & 문자열!!

// for in문 (객체)

// Iterable 객체
// 1) for...of 반복문
// 2) 전개연산자 구문
// 3) 구조분해할당

// let hi = "hello";

// for (let ch of hi) {
//   console.log(ch);
// }

// let chArray = [...hi];
// console.log(chArray);

// let [ch1, ch2, ch3, ch4, ch5] = hi;
// console.log(ch1, ch2, ch3, ch4, ch5);

// console.log(hi);

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let it = arr[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// 이터러블한 객체 => 이터레이터 객체 속성!
// 이터레이터 객체 속성 => next()
// next() => 반복문으로 무언가를 실행시키고자 할 때, 실행되는 메서드 함수!

// 제너레이터 = 함수
// 태생적으로 이터러블하지 못한 요소들을 이터러블한 속성을 갖게끔 하기위한 목적으로 태어난 함수

function* fnc() {
  yield 1;
  yield 2;
  yield 3;
}

const g1 = fnc();

// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());

for (let i of g1) {
  console.log(i);
}
// for문 사용 가능 => 이터러블한 객체다
