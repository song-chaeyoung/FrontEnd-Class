// 시간에 따라서 (오전//오후)
// js 현시점의 날짜 정보 데이터를 생성해주는 함수
// 년, 월, 일, 시, 분, 초

const today = new Date();
const hrs = today.getHours();

const container = document.querySelector(".container");
const newImg = document.createElement("img");

newImg.src = hrs < 12 ? "./images/morning.jpg" : "./images/afternoon.jpg";

container.appendChild(newImg);
