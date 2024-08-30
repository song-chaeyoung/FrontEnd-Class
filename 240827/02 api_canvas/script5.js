const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.scale(1, 0.7);

// face
ctx.beginPath();
ctx.arc(150, 150, 80, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();

// eye
ctx.beginPath();
ctx.arc(120, 80, 20, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 20, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fillStyle = "#fff";
ctx.fill();
ctx.strokeStyle = "green";
ctx.stroke();

// eye-circle
ctx.beginPath();
ctx.arc(120, 80, 8, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 8, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fillStyle = "#000";
ctx.fill();

// mouse
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI, false);
// ctx.closePath();
ctx.lineWidth = 3;
ctx.strokeStyle = "#000";
ctx.stroke();
