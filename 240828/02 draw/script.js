const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");
const inputColor = document.querySelector("input[type='color']");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

// console.log(ctx);

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

let startX;
let startY;
let lineWidth = 2;
let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
  ctx.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});

const reset = toolbar.querySelector("#reset");
reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

toolbar.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.id == "stroke") {
    ctx.strokeStyle = e.target.value;
  } else if (e.target.id === "lidth") {
    lineWidth = e.target.value;
  }
});
