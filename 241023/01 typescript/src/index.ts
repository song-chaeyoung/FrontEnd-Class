// const numArr: [number, number, number] = [1, 2, 3];
// const strArr: String[] = ["1", "2"];
// const boolArr: Array<boolean> = [true, false]; // 제네릭 형식

// let multiArr: (number | string)[] = [1, "hello"];

// let doubleArr: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// let tup1: [number, number] = [1, 2];

// const user: {
//   id?: number;
//   name: string;
// } = {
//   name: "David",
// };

// const result = user.id;

// let config: {
//   readonly apikey: string;
// } = {
//   apikey: "32121515153",
// };

// type User = {
//   id: number;
//   name: string;
//   location: string;
// };

// const fnc = () => {
//   type User = {};
// };

// let user1: User = {
//   id: 1,
//   name: "David",
//   location: "Seoul",
// };
// let user2: User = {
//   id: 2,
//   name: "Chae",
//   location: "Busan",
// };

// type CountryCodes = {
//   [key: string]: string;
// };

// const countryCodes: CountryCodes = {
//   korea: "ko",
//   UnitedState: "us",
//   UnitedKingdom: "uk",
// };

// interface User01 {
//   id: number;
// }

// interface person {
//   name: string;
//   age: number;
//   etc?: boolean;
// }

// const person1: person = {
//   name: "Peter",
//   age: 20,
// };

// const person2: person = {
//   name: "Namsu",
//   age: 20,
//   etc: true,
// };

// class Person01 {
//   name: string;
//   age: number;
// }

// const person3: Person01 = new Person01();
// person3.name = "peter";
// person3.age = 20;

// class Person02 {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Person2 {
//   constructor(public name: string, public age?: number) {}
// }

// const person04 = new Person2("Romeo");

interface Person5 {
  name: string;
  age: number;
}

class Person6 implements Person5 {
  constructor(public name: string, public age: number) {}
}

const person05 = new Person6("Julia", 30);

// 추상클래스
abstract class Person7 {
  constructor(public name: string, public age: number) {}
}

class Person8 extends Person7 {
  public location: string;
  constructor(name: string, age: number, location: string) {
    super(name, age);
    this.location = location;
  }
}

// const person6 = new Person8("Bruce", 25, "Seoul");
// console.log(person6);

// // static 속성
// class TestA {
//   static initialValue = 1;
// }

// const test01A = TestA.initialValue;
// console.log(test01A);

// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// const user1 = {
//   name: "David",
//   role: Role.ADMIN,
// };
// const user2 = {
//   name: "SSSS",
//   role: Role.USER,
// };
// const user3 = {
//   name: "AAA",
//   role: Role.GUEST,
// };

// console.log(user1, user2, user3);

// any
// let test01: any = 10;
// test01 = "hi";

// let test02: unknown;
// test02 = 10;
// test02 = "world";
// test02 = false;
// test02 = { k: 1 };
// test02 = () => {};

// let test03 = test01;

// let test04: number = 20;
// if (typeof test02 === "number") {
//   test04 = test02;
// }

const func1 = (): void => {
  console.log("world");
};

let test05: void;

test05 = undefined;

// let test06: never;
// test06 = 1;
// test06 = "hi";
// test06 = undefined;
// test06 = true;
// test06 = any;

// const func3 = (): never => {
//   while (true) {}
// };

// let obj: object = {
//   name: "David",
// };

// interface Nameable {
//   name: string;
// }

// let name1 = (<Nameable>obj).name;
// let name2 = (obj as Nameable).name;

// name1;
// name2;

// console.log(name1, name2);

const add = (a: number, b: number): number => {
  return a + b;
};

// const printMe = (name: string, age: number): void => {
//   console.log(name, age);
// };

// 타입별칭
type PrintMeFnc = (name: string, age: number) => void;
// 함수시그니처
// const printMe: PrintMeFnc = (name, age) => {
//   console.log(name, age);
// };
// const printMe: (arg01: string, arg02: number) => void = (name, age) => {
//   console.log(name, age);
// };

interface Namealbe2 {
  name: string;
}

// const getName = (o: Namealbe2): string => {
//   return o != undefined ? o.name : "Loading";
// };

// const dataResult = getName(undefined);
// console.log(dataResult);
// console.log(getName({ name: "David" }));

const getName = (o: Namealbe2 | undefined) => {
  return o != undefined ? o.name : "Loading";
};

// console.log(getName(undefined));
// console.log(getName({ name: "cy" }));
