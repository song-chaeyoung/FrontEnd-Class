const imgAll = document.querySelectorAll(".parallax_img");

const totalNum = imgAll.length;

window.addEventListener("scroll", () => {
  let scrollNum = window.scrollY;

  if (scrollNum < window.innerHeight) {
    imgAll.forEach((item, idx) => {
      item.style.transform = `translate3D(0,0,${
        scrollNum / (2 * (totalNum - idx))
      }px)`;
    });
  }
});
