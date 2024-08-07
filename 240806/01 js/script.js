// window.addEventListener("load", alert("즐거운 화요일!"));

// const overout = document.querySelectorAll(".overout");
// const enterleave = document.querySelectorAll(".enterleave");

// overout.forEach((item, index) => {
//   if (index === 0) {
//     item.addEventListener("mouseover", function () {
//       this.querySelector("p:first-of-type").innerText = "mouseover";
//       this.querySelector("p:last-of-type").innerText = ++index;
//     });
//     item.addEventListener("mouseout", function () {
//       this.querySelector("p:first-of-type").innerText = "mouseout";
//     });
//   }
//   if (index === 1) {
//     item.addEventListener("mouseover", function () {
//       this.querySelector("p:first-of-type").innerText = "mouseover";
//       this.querySelector("p:last-of-type").innerText = ++index;
//     });
//     item.addEventListener("mouseout", function () {
//       this.querySelector("p:first-of-type").innerText = "mouseout";
//     });
//   }
// });

// mouseover & mouseout
let o = 0;

const overoutOut = document.querySelector("div.out.overout");

overoutOut.addEventListener("mouseover", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseover";
  pItems[3].innerText = ++o;
});

const overoutIn = overoutOut.querySelector("div.in.overout");
overoutIn.addEventListener("mouseover", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseover";
  pItems[1].innerText = ++o;
});

// mouseenter & mouseleave
let e = 0;

const enterleaveOut = document.querySelector("div.out.enterleave");

enterleaveOut.addEventListener("mouseenter", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseenter";
  pItems[3].innerText = ++e;
});

const enterleaveIn = enterleaveOut.querySelector("div.in.enterleave");
enterleaveIn.addEventListener("mouseenter", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseenter";
  pItems[1].innerText = ++e;
});
