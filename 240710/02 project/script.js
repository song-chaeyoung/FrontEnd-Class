const pic = document.querySelector(".pic");
const imgs = pic.querySelectorAll("img");

imgs.forEach((img) => {
  img.addEventListener("click", function () {
    imgs.forEach((sibling) => {
      if (sibling !== img) {
        sibling.classList.remove("active");
      }
    });
    this.classList.add("active");
    const desc = document.querySelector(".desc");
    const content = desc.querySelectorAll(".content");

    content.forEach((content) => {
      content.classList.remove("active");
    });

    const targetId = img.getAttribute("data-alt");
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});
