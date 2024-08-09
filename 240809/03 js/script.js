const nums = document.querySelectorAll(".number");

for (let i = 0; i < nums.length; i++) {
  // nums[i]+1 => 실제로 어떤 숫자인지를 체크
  if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;

  const angle = (i + 1) * (Math.PI / 6);

  const x = 132 + 132 * Math.abs(Math.sin(angle)) - nums[i].offsetWidth / 2;
  const y = 132 - 132 * Math.abs(Math.cos(angle));

  if (i + 1 > 6) nums[i].style.right = `${x}px`;
  else nums[i].style.left = `${x}px`;

  if ((i + 1 <= 12 && i + 1 >= 9) || (i + 1 >= 1 && i + 1 <= 3))
    nums[i].style.top = `${y}px`;
  else nums[i].style.bottom = `${y}px`;

  // nums[0].style.left = `${x}px`;
  // nums[0].style.top = `${y}px`;
}

const secondPointer = document.querySelector("#second");
const minutePointer = document.querySelector("#minute");
const hourPointer = document.querySelector("#hour");

const clock = () => {
  const currentTime = new Date();
  let second = currentTime.getSeconds();
  let secondAngel = second * 6;
  let secondAngelValue = `translate(-50%, -100%) rotate(${secondAngel}deg)`;

  let minute = currentTime.getMinutes();
  let minuteAngel = minute * 6;
  let minuteAngelValue = `translate(-50%, -100%) rotate(${minuteAngel}deg)`;

  let hour = currentTime.getHours();
  let hourAngel =
    (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minute / 60) * 30;
  let hourAngelValue = `translate(-50%, -100%) rotate(${hourAngel}deg)`;

  secondPointer.style.transform = secondAngelValue;
  minutePointer.style.transform = minuteAngelValue;
  hourPointer.style.transform = hourAngelValue;

  // Digital
  const digital = document.querySelector(".digital_clock");

  let period = "오전";
  if (hour === 0) hour = 12;
  else if (hour > 12) {
    hour -= 12;
    period = "오후";
  }

  second = second < 10 ? `0${second}` : second;
  minute = minute < 10 ? `0${minute}` : minute;
  hour = hour < 10 ? `0${hour}` : hour;
  // let digiHour = hour > 12 ? `0${hour - 12}` : hour;

  // let digiScope = hour < 12 ? "오전" : "오후";

  digital.innerText = `${period} ${hour}시 ${minute}분 ${second}초`;
};

setInterval(clock, 1000);
