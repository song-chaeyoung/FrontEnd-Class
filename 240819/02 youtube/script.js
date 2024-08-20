const playBtn = document.querySelector(".play_pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");
const progressCover = document.querySelector(".progress");
const player = document.querySelector(".player");

const play = () => {
  playBtn.innerText = "| |";
  playBtn.style.font = "700 14px/0.5 'arial'";
  video.play();
};
const pause = () => {
  playBtn.innerText = "►";
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const formatting = (time) => {
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");

  const duration = video.duration;
  const currentTime = video.currentTime;
  const percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;

  const progressBarWidth = progressCover.clientWidth;
  const newPosition = (currentTime / duration) * progressBarWidth - 1;
  progressPointer.style.left = `${newPosition}px`;
};

const videoPoint = (e) => {
  const mouseX = e.pageX - player.offsetLeft;
  const progressBarWidth = progressCover.clientWidth;
  const duration = video.duration;
  const clickedTime = (mouseX / progressBarWidth) * duration;
  video.currentTime = clickedTime;
};

playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);
progressCover.addEventListener("click", videoPoint);

// 1. 브라우저 창을 기준으로 좌, 우, 상, 하, 측면에서 얼만큼 떨어졌는가를 알 수있게 해주는 속성 : offset
// offsetLeft
// 2. 현재 브라우저 내 x좌표값을 찾아오도록 해주는 속성 : pageX
