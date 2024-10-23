const calc = (value: number, cb: (arg: number) => void): void => {
  let add = (a: number, b: number) => a + b;
  let multplay = (a: number, b: number) => a * b;

  let result = multplay(add(1, 2), value);
  cb(result);
};

// calc(30, (result: number) => console.log(`result is ${result}`));

// 고차함수
// const add =
//   (a: number): ((arg: number) => number) =>
//   (b: number) =>
//     a + b;

// const result = add(1)(2);
// console.log(result);

type NumberToNumber = (arg0: number) => number; //함수의 시그니처

const add = (a: number): NumberToNumber => {
  const _add = (b: number): number => {
    return a + b;
  };

  return _add;
};

const result = add(1)(2);

console.log(result);
