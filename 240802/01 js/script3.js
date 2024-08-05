const button = document.querySelector("button");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (!document.body.classList.contains("dark")) {
    this.innerText = "라이트모드로 바꾸기";
  } else {
    this.innerText = "다크모드로 바꾸기";
  }
});
