const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prevBtn = document.querySelector(".btnPrev");
const nextBtn = document.querySelector(".btnNext");
const audios = frame.querySelectorAll("audio");

const deg = 45;
let i = 0;
let num = 0;
lists.forEach((list) => {
  const pic = list.querySelector(".pic");
  list.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url("./img/member${i + 1}.jpg")`;
  i++;

  const pause = list.querySelector("li:nth-child(1)");
  const play = list.querySelector("li:nth-child(2)");
  const load = list.querySelector("li:nth-child(3)");

  play.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector("audio").play();
  });

  pause.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.remove("on");
    e.target.closest("article").querySelector("audio").pause();
  });

  load.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector("audio").load();
    e.target.closest("article").querySelector("audio").play();
  });
});

const initMuisc = () => {
  for (let audio of audios) {
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on");
  }
};
initMuisc();

let active = 0;
const len = lists.length - 1;

const activation = (index, lists) => {
  for (let list of lists) {
    list.classList.remove("on");
  }
  lists[index].classList.add("on");
};

prevBtn.addEventListener("click", () => {
  initMuisc();
  num++;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === 0 ? (active = len) : active--;
  activation(active, lists);
});

nextBtn.addEventListener("click", () => {
  initMuisc();
  num--;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === len ? (active = 0) : active++;
  activation(active, lists);
});