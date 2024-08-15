// 객체생성 => 선언

// const book1 = {
//   title: "자바스크립트",
//   level: "noraml",
//   study: "done",
// };

// // 객체 안에 담겨있는 데이터를 찾을 수 있다.
// // 프로퍼티(속성)에 접근 2가지 방법
// // 1) 온점표기법
// // 2) 대괄호표기법 ["문자열"]
// console.log(book1.title);
// console.log(book1["level"]);

// book1.study = "ready";

// book1.master = "David";

// console.log(book1);

// JS 어딘가에 Class 생성자함수를 활용해서 이미 누군가가 객체를 만들어놓았음!
// Class 생성자함수를 통해서 이미 생성된어진 요소를 가져와서 사용할 때에는 반드시 new 예약어 + prototype 함수를 활용해야 한다.
// prototype을 통해서 생성된 값을 인스턴스 객체
// 최초에 선언한 변수의 값으로 할당

// let book2 = new Object();
// console.log(typeof book2);

// let book3 = new Array();
// console.log(typeof book3);

// book2.title = "타입스크립트";
// book2.author = "송채영";
// book2.bestSeller = "ture";
// console.log(book2);

// delete book2.author;

// console.log(book2);

// 객체 중첩
const student = {
  name: "전진우",
  age: 20,
  favorite: "game",
  score: {
    history: 85,
    science: 90,
    math: 20,
    average: function () {
      return (this.history + this.science + this.math) / 3;
    },
    like() {
      // alert(`전진우님은 컴퓨터를 좋아합니다!`);
    },
  },
};

// 함수는 객체의 자식

// function // 화살표함수 (Hosting 안됨)

console.log(student.score.average());

// 객체 안에 Property 일부로서 탄생된 함수는 method라고 칭한다

student.score.like();

// const window = {
//   document : {
//     html : {
//       head: {
//         meta: "a",
//         link: "./"
//       }
//       body: {
//         h1: "안녕하세요",
//         p: "반갑습니다",
//       }
//     }
//   }
// }
