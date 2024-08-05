// const main = window.document.querySelector("main");
// const profile = document.querySelector("main > #profile");
// const profile = document.getElementById("profile");
// const image = document.getElementsByClassName("image");
// console.log(image);
// console.log(profile);
// const h1 = main.querySelector("h1");
// const h1 = document.getElementsByTagName("h1");
// console.log(h1);
// const desc = document.querySelector("#desc");

// getElementById => 메모리의 효율성 극대화!
// DOM > ID
// querySelector => 전역요소의 모든 node
// 객체속성을 반드시 document로 지정하고 가야한다

// const user = desc.querySelectorAll(".user");
// console.log(user);
// 유사배열
// 99% 배열이 가지고 있는 속성!
// 유사배열은 배열과 다른 1% => forEach,Map 등이 안먹음

// user.addEventListern("click", () => {
//   console.log("click");
// });

// user.forEach((u) => {
//   u.addEventListern("click", () => {
//     console.log("click");
//   });
// });

// user.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("click");
//   });
// });

// const desc = document.querySelector("#desc");
// const iu = document.querySelectorAll(".user")[0].innerText;
// // console.log(iu);
// console.log(desc.innerText);

const title = document.querySelector("#title"); //title = 변수

title.addEventListener("click", function () {
  // title = 객체
  this.innerText = "나의 프로필";
  this.style.backgroundColor = "black";
  this.style.color = "#fff";
});

const profileImg = document.querySelector("#profile img");
// console.log(profileImg.src);

profileImg.addEventListener("click", function () {
  this.src = "./dom/pf2.png";
});

const firstP = document.querySelector("#desc > p:first-child");
firstP.addEventListener("click", function () {
  this.innerHTML = "이름 : <b>태연</b>";
  // this.style.fontWeight = "700";
});

const secondP = document.querySelector("#desc > p:nth-child(2");
secondP.addEventListener("click", function () {
  this.classList.toggle("active");
  // if (!this.classList.contains("active")) {
  //   this.classList.add("active");
  // } else {
  //   this.classList.remove("active");
  // }
});
