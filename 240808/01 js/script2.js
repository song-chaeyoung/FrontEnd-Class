const userAnswer = prompt("우리 공부한지", "2024-06-14");
const accent = document.querySelector(".accent");
// const date100 = document.querySelector("#date100");
// const date200 = document.querySelector("#date200");
// const date365 = document.querySelector("#date365");
// const date500 = document.querySelector("#date500");

const now = new Date();
const firstDay = new Date(userAnswer);

const toNow = now.getTime();
const toFrist = firstDay.getTime();

const passedTime = toNow - toFrist;
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

accent.innerText = `${passedDate}일`;

// d-100
// let future = toFrist + 100 * (24 * 60 * 60 * 1000);
// let someday = new Date(future);
// let year = someday.getFullYear();
// let month = someday.getMonth() + 1;
// let date = someday.getDate();
// let day = someday.getDay();
// date100.innerText = `${year}년 ${month}월 ${date}일`;

// // d-200
// future = toFrist + 200 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// date200.innerText = `${year}년 ${month}월 ${date}일`;

// // d-365
// future = toFrist + 365 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// date365.innerText = `${year}년 ${month}월 ${date}일`;

// // d-500
// future = toFrist + 500 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// date500.innerText = `${year}년 ${month}월 ${date}일`;

// function Hosting
// 끌어올리다
// 화살표 함수 => 호이스팅 기능 x : 반드시 선언 > 호출
// function함수 => 익명X 기명함수에서는 호이스팅 기능 가능!

const calcDate = (days) => {
  future = toFrist + days * (24 * 60 * 60 * 1000);
  someday = new Date(future);
  year = someday.getFullYear();
  month = someday.getMonth() + 1;
  date = someday.getDate();

  document.querySelector(
    `#date${days}`
  ).innerText = `${year}년 ${month}월 ${date}일`;
};

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
