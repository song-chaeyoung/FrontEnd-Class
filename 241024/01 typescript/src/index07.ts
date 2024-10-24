// 제네릭이 필요한 상황
// 종합적인 타입을 정의하고 싶을 때 사용
// General : 종합적인

// const func = <T>(value: T): T => {
//   return value;
// };

// const swap = <T, U>(a: T, b: U) => {
//   return [b, a];
// };

// const [a, b] = swap("1", false);

// const funcArray = <T>(data: T[]): T => {
//   return data[0];
// };

// const num = funcArray([0, 1, 2, 3]);
// console.log(num);

// let str = funcArray(["1", "hi", "world"]);
// console.log(str);

// const returnFirst = <T>(data: [T, ...unknown[]]): T => {
//   return data[0];
// };

// const str = returnFirst([1, "hello", 5415]);
// console.log(str);

const func4 = <T extends { length: number }>(data: T) => {
  return data.length;
};

console.log(func4("12"));
console.log(func4([1, 2, 4]));
console.log(func4({ length: 1 }));
