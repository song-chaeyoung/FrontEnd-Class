const btn = document.querySelector("#open");

btn.addEventListener("click", function () {
  const modal = document.querySelector("#modal_box");
  this.classList.add("active");
  modal.classList.add("active");

  const xMark = modal.querySelector("button");
  xMark.addEventListener("click", () => {
    this.classList.remove("active");
    modal.classList.remove("active");
  });
});

// 1. 최초에 보여줘야하는 ui 디자인
// 2. 모달창이 오픈되었을 때에 보여줘야하는 ui 디자인
// 3. js를 활용해서 위 2개의 디자인 요소를 어떻게 크로스 할 것인가?
