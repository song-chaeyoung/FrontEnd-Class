const today = new Date();

// Display Date
const displayDate = document.querySelector("#today");

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
let day = today.getDay();

switch (day) {
  case 0:
    day = "일요일";
    break;
  case 1:
    day = "월요일";
    break;
  case 2:
    day = "화요일";
    break;
  case 3:
    day = "수요일";
    break;
  case 4:
    day = "목요일";
    break;
  case 5:
    day = "금요일";
    break;
  case 6:
    day = "토요일";
    break;
}

displayDate.innerHTML = `${year}년 ${month}월 ${date}일 <span style="font-weight: bold">${day}</span>`;

// Display Clock
const displayTime = document.querySelector("#clock");

const clock = () => {
  const current = new Date();
  let hrs = current.getHours();
  let min = current.getMinutes();
  let sec = current.getSeconds();

  let period = "오전";
  if (hrs === 0) hrs = 12;
  else if (hrs > 12) {
    hrs = hrs = 12;
    period = "오후";
  }

  hrs = hrs < 10 ? `0${hrs}` : hrs;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;

  displayTime.innerText = ` ${period} ${hrs} : ${min} : ${sec}`;
};

setInterval(clock, 1000);
