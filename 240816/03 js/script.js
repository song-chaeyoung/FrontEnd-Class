const str = "hello, Sir";
const arr = ["today", "first", "theday"];

// console.log(str.length);

// 1) 특정 위치의 문자에 접근!! charAt (위치)
// console.log(str.charAt(0));

const counting = (string, word) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === word) count += 1;
  }
  return count;
};

// const string = prompt("원하시는 문자열을 입력하세요!");
// const word = prompt("그 중 찾고싶은 문자열은 무엇인가요?");

// const result = counting(string, word);

// document.write(
//   `${string}에는 ${word}이라는 알파벳이 ${result}번 사용되었습니다!`
// );

//  2) indexof() : 특정문자열을 인자값으로 제공 => 해당 문자열의 시작하는 인덱스 값을 찾아!

const str1 = "Good morning, everyone. Beautiful morning! Happy morning morning";
// console.log(str1.indexOf("morning"));
// console.log(str1.indexOf("morning"));

let firstIndex = str1.indexOf("morning");
let secondIndex = str1.indexOf("morning", firstIndex + 1);
let thirdIndex = str1.indexOf("morning", secondIndex + 1);
// console.log(str1.indexOf("morning", thirdIndex + 1));

// 3) 특정 문자열로 시작하거나 끝나거나 혹은 포함하고 있거나
// startWith() // endWith() // includes()
// 상기의 해당 조건에 부합하지 여부 체크 > 불린값으로 반환
// 조건에 부합하면 true // false

const str2 = "Hello, everyone.";
// console.log(str2.startsWith("Hello"));
// console.log(str2.startsWith("He"));
// console.log(str2.startsWith("Hello, ev"));
// console.log(str2.startsWith("hello"));

// console.log(str2.startsWith("el", 1));
// console.log(str2.startsWith("o", 4));

// console.log(str2.endsWith("everyone."));
// console.log(str2.endsWith("Everyone."));

// ES6 이전문법
// console.log(str2.indexOf("every") === 7);
// console.log(str2.includes("every"));

// let str3 = " ab cd ef- ";

// console.log(str3.trim());
// console.log(str3.trimStart());
// console.log(str3.trimEnd());

// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());

// 문자열에서 특정 문다를 추출하는 방법!
// 사용자가 올바르지 않은 정보값!

const str4 = "Good Morning.";
console.log(str4.length);
// console.log(str4.substring(5));
// console.log(str4.substring(0, 4)); //두번째 인덱스값 앞! 까지
// console.log(str4);

// console.log(str4.slice(0, 4));
// console.log(str4);

// slice() : 음수값 사용 가능
// console.log(str4.slice(-8, 12));

const str5 = "Hello everyone";
console.log(str5.split("n"));
