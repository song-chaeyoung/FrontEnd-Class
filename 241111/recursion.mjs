const myFunc = (number) => {
  if (number > 3) return;
  console.log(number);
  myFunc(number + 1);
};

// myFunc(1);
// const myFunc = (3) => {
//   if (3 > 3) return;
//   console.log(3);
//   myFunc(3 + 1);
// };

// const funcA = () => {
//   let a = 10;
//   let b = 5;
//   return a + b;
// };

// const funcB = () => {
//   let c = 10;
//   let d = 5;
//   return c - d;
// };

// funcA();
// funcB();

// const funcC = () => {
//   let a = 10;
//   let b = 5;
//   return a - b;
// };
// const funcD = () => {
//   let c = 10;
//   let d = 5;
//   let e = funcC();
//   return c + d + e;
// };

// funcD();
// funcC();
