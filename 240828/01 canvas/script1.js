const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
// img를 인스턴스 객체로 만들어서 객체로 가져옴

// const img = new Image();
// // img.addEventListener("load", () => {
// //   ctx.drawImage(img, 0, 0);
// // });
// img.onload = function () {
//   // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   // ctx.drawImage(img, 0, 0, 200, 300);
//   ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
// };
// img.src = "./canvasAPI/cat.jpg";

const img = new Image();

img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
img.src = "./canvasAPI/bird.jpg";

ctx.beginPath();
ctx.arc(550, 300, 150, 0, Math.PI * 2, false);
ctx.clip();
