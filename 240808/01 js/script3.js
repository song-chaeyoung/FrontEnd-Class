// const b = document.querySelector("p > b");

// const userDate = new Date(
//   prompt("며칠부터 만보 걷기를 시작하셨나요?", "2024-06-14")
// );

// const now = new Date();
// const toNow = now.getTime();
// const toFrist = userDate.getTime();
// const userInfo = toNow - toFrist;

// const passedDate = Math.round(userInfo / (24 * 60 * 60 * 1000));
// console.log(passedDate);

// b.innerText = `${passedDate}`;

const userQuestion = new Date(
  prompt("만 보 걷기를 시작한 날짜를 입력해주세요.", "2024-06-14")
);
const result = document.querySelector("#result");

const today = new Date();
const firstday = new Date(userQuestion);

const passedTime = today.getTime() - firstday.getTime();
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

result.innerText = passedDate;
