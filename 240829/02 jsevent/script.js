const cursorItem = document.querySelector(".cursoritem");
const circle = cursorItem.querySelector(".circle");
const buttonAll = document.querySelectorAll("a");

// 시차 가지고 따라오기
let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.2;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
  cursorItem.style.transform = `translate(${x}px, ${y}px)`;
  // cursorItem.style.left = `${e.pageX}px`;
  // cursorItem.style.top = `${e.pageY}px`;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);
};
loop();

buttonAll.forEach((button) => {
  button.addEventListener("mouseenter", (e) => {
    circle.style.transform = `scale(0.3) translate(-100%, -100%)`;
  });
  button.addEventListener("mouseleave", (e) => {
    circle.style.transform = `scale(1)`;
  });
});
