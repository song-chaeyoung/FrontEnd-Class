// let num1: number = 10;
// let num2: 10 = 10;

// num1 = num2;
// // num2 = num1;

// interface Animal {
//   name: string;
//   color: string;
// }

// let animal: Animal = {
//   name: "고양이",
//   color: "white",
// };

// interface Dog {
//   name: string;
//   color: string;
//   breed: string;
// }

// let dog: Dog = {
//   name: "강아지",
//   color: "brown",
//   breed: "진돗개",
// };

// animal은 dog보다 슈퍼타입
// dog는 animal보다 서브타입
// animal = dog;
// dog = animal; //불가

// interface Book {
//   name: string;
//   price: number;
// }

// let book: Book;

// interface ProgrammingBook {
//   name: string;
//   price: number;
//   skill: string;
// }

// let programmingBook: ProgrammingBook = {
//   name: "TS",
//   price: 33000,
//   skill: "Typescript",
// };

// book = programmingBook;
// // programmingBook = book

// let book3: Book = programmingBook;

// let a: string | number;
// a = 1;
// a = "hi";

// type Dog = {
//   name: string;
//   color: string;
// };
// type Person = {
//   name: string;
//   language: string;
// };

// type Union1 = Dog | Person;

// let union1: Union1 = {
//   name: "",
//   color: "",
// };

// let union2: Union1 = {
//   name: "",
//   language: "",
// };

// let union3 = {
//   name: "",
//   color: "",
//   language: "",
// };

// // let union4: Union1 = {
// //   name: "",
// // };

// type Intersection = Dog & Person;

// let intersection: Intersection = {
//   name: "",
//   color: "",
//   language: "",
// };

// interface Person01 {
//   name: string;
//   age: number;
// }

// let person01 = {} as Person01;

// person01.name = "";
// person01.age = 20;

// type Dog = {
//   name: string;
//   color: string;
// };

// let dog: Dog = {
//   name: "뽀삐",
//   color: "red",
//   breed: "똥개",
// } as Dog;

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string;

let num4 = 10 as const;

// 타입가드
const func = (value: number | string) => {
  if (typeof value === "number") {
    value.toFixed(2);
  } else if (typeof value === "string") {
    value.toUpperCase();
  }
};
