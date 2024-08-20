// 문자열 && 배열
// 1) 둘 다 length
// 2) 둘 다 index (0부터 시작 // 좌측 시작)

// ES6 문법이 적용되기 전
// const str5 = "Hello, everyone!";
// // const array5 = str5.split("");
// const array5 = [...str5];
// const str6 = array5.join("");

// console.log(array5);
// console.log(str6);

// const string = prompt("영문 소문자로 된 문자열을 입력하세요.");

// const firstCh = string[0].toUpperCase();
// const reaminStr = string.slice(1);ㅣ
// const result = firstCh + reaminStr;

// const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
// document.write(result);

// 자료구조 & 알고리즘
// 배열 => 얼만큼 잘 활용?

// 1) 생성자 함수
let arr = new Array();

arr[0] = "first";
arr[1] = "second";
console.log(arr);

let obj = new Object();
console.log(obj);

// 2) 변수 // 빈배열 할당 및 선언

let season = [];

season[0] = "spring";
season[1] = "summer";
season[2] = "fall";
season[3] = "winter";

console.log(season);

// 3) 직접 배열 선언 // 할당
const pets = ["dogs", "cats", "lion"];
console.log(pets);
