// interface Person {
//   name: string;
//   age?: number;
//   sayHi?: () => void;
// }

// const person: Person = {
//   name: "David",
//   sayHi: () => {
//     console.log("HI");
//   },
// };

// const person01: Person = {
//   name: "Peter",
//   age: 20,
// };

// type Type1 = number | string;
// type Type2 = number & string;

// interface Person {
//   name : string
//   agd : number
// } | number

// interface Person {
//   name: string;
//   age: number;
// }

// type Type3 = number | string | Person;

// const person: Type3 = {
//   name: "David",
//   age: 20,
// };

// interface Animal {
//   name: string;
//   age: number;
// }

type Animal = {
  name: string;
  age: number;
};

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dog: DogCat = {
  name: "뽀삐",
  age: 5,
  isBark: true,
  isScratch: false,
};

// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }
