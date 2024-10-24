// const arr = [1, 2, 3];
// const newArr = arr.map((it) => it * 2);
// console.log(newArr);

// 명령형 방식 프로그래밍 코드
// 선언형 방식 프로그래밍 코드

// const map = (arr: unknown[], callback: (item: unknown) => unknown): any[] => {};

// 선언형 방식
// high-level 함수 (고급함수)
const map = <T>(arr: T[], callback: (item: T) => T): T[] => {
  let result = [];
  for (let i = 0; i <= arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
};

const test = map([1, 2, 3, 45], (a) => a + 10);
console.log(test);

// 명령형방식
// low-level 함수 (저급함수)
const arrTest = [1, 2, 3];
const result = arrTest.map((it) => it);
