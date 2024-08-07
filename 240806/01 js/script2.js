const userId = document.querySelector("#userID");
const userPw = document.querySelector("#userPw");

userId.addEventListener("focus", function () {
  this.style.backgroundColor = "pink";
});

userId.addEventListener("blur", function () {
  this.style.backgroundColor = "transparent";
});
