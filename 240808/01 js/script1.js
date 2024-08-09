// const today = new Date();
// const month = today.getMonth() + 1;
// // Month만 0부터 값을 찾아옴
// const date = today.getDate();
// const day = today.getDay();

// document.write(`<h1>오늘 날짜 정보</h1>`);
// document.write(`현재 월 : ${month}월`);
// document.write(`<br/>`);
// document.write(`<br/>`);
// document.write(`현재 일 : ${date}월`);

// 밀리초 개념!
// 초 / 분 / 시
// 1초 = 1000밀리초
// 1분 = 60초 = (60 * 1000) = 60,000밀리초
// 1시간 = 60분 = 60*60*1000 = 3,600,000밀리초
// 1일(24시간) = 24 * 60 * 60 * 1000 = 86,400,000

const today = new Date();
const year = today.getFullYear();

const lastDate = new Date(year, 11, 31);
const diffDate = lastDate - today;

const result = `올 연말 마지막 날까지 ${Math.round(
  diffDate / (24 * 60 * 60 * 1000)
)}일 남았습니다.`;
alert(result);
