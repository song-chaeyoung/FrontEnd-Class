const canvas = document.querySelector("canvas");
const button = document.querySelector("button");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const origin = {
  x: 200,
  y: 200,
};

const aplha = 0.7;

ctx.fillStyle = "#ccc";
ctx.fillRect(origin.x, origin.y, 100, 100);

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

button.addEventListener("click", () => {
  let color = randomRGB();

  ctx.globalAlpha = aplha;
  ctx.translate(origin.x, origin.y);
  ctx.rotate((Math.PI / 180) * 30);
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 100, 100);
  ctx.translate(-origin.x, -origin.y);
});