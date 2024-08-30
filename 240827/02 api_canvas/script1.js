const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// 사각형 형태의 도형을 만들 때에는
// 사각형 행태 리 완료 (색상, 외곽선 => 도형 그림)

// 삼각형 형태의 도형을 만들 때에는
// 도형! 드로잉 선언!
// beginPath()
// 경로 그림 : lineTo(x, y)
// 실제 경로가 그려지도록 하는 함수 : stroke()
// 해당 경로사이에 채색 함수 fill()
// closePath() => 어떤 도형을 그릴 것인가에 대한 경로 드로잉 종료 선언
// 외곽선을 페이팅 & 내부 도형 채색

// 위치 좌표값을 이동하고자 할 때 : moveTo(x, y)

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.closePath();
// ctx.stroke();
// ctx.fill = "rgba(0,0,0)";

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 100);
ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 50);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.fillStyle = "rgb(0,200,0)";
ctx.fill();
