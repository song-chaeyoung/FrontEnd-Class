// 정규표현식! = 정규식
// const regexp = /\d{3}/; //정수형태

// const regexp = new RegExp(/\d{3}/);

// console.log(regexp.test("hello"));
// console.log(regexp.test("00"));
// console.log(regexp.exec("000000"));
// test() : 앞에 붙은 정규표현식의 불린값 반환

// const str = "ES2024 is powerfull";
// const regexp = /es/i;

// console.log(regexp.test(str));

// console.log(str.match(/ES6/));
// console.log(str.replace(/ES2024/, "Javascript"));
// console.log(str);

// console.log(str.match(/ES\d\d\d/));

const hello = "Hello, everyone.";

// console.log(/^H/.test(hello));
// console.log(/^h/.test(hello));
// console.log(/^h/i.test(hello));

// console.log(/one.$/.test(hello));
// console.log(/e.$/.test(hello));
// console.log(/one$/.test(hello));

// const str = "ES 2024.";
// console.log(str.match(/[^0-9]/g)); //숫자 제외하고 찾아라

// const str = "0Oooops";

// console.log(str.match(/o*/i));

// const str2 = "ES2024(ES8) is powerfull";
// const regexp = /ES2024|ES8/;

// console.log(regexp.test(str2));

// 1) 숫자만 가능한 가능한 정규표현식 패턴
const regexp = /^[0-9]+$/;

// 2) 양의 정수만 가능한 정규표현식 패턴
const regexp1 = /^[1-9]\d*$/;

// 3) 음의 정수만 가능한 정규표현식 패턴
const regexp2 = /^\-[1-9]\d*$/;

// 4) 영문자를 찾아오도록 하는 정규표현식 패턴
const regexp3 = /^[a-zA-Z]+$/;

// 5) 숫자와 영문자를 찾오도록 하는 정규표현식 패턴
const regexp4 = /^[a-zA-Z0-9]+$/;

// 6) 한글만 찾아오도록 하는 정규표현식 패턴
const regexp5 = /^[가-힣]+$/;

// 7) 한글과 영문자만 가능한 정규표현식 패턴
const regexp6 = /^[가-힣a-zA-Z]+$/;

// 8) 예) 문자열의 길이가 5~10개 패턴
const regexp7 = /^.{5,10}$/;
