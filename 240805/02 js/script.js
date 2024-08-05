const productBtn = document.querySelector("button");

productBtn.addEventListener("click", () => {
  const info = document.querySelector(".info");
  info.classList.toggle("active");
});
