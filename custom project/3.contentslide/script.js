// texts.forEach((text, i) => {
//   text.addEventListener("click", function () {
//     contents.forEach((content, j) => {
//       if (i !== j) {
//         content.classList.remove("active");
//         this.classList.remove("active");
//       } else {
//         content.classList.add("active");
//         this.classList.add("active");
//       }
//     });
//   });
// });

// texts.addEventLinster("click", () => {
//   texts.forEach((text,i) => {

//   })
// })

// text.forEach();

// contents.fotEach(content, () => {
//   content;
// });

// const texts = document.querySelectorAll(".tab_btn");

// texts.forEach((text, i) => {
//   text.addEventListener("click", function () {
//     texts.forEach((sibling) => {
//       if (sibling !== text) {
//         sibling.classList.remove("active");
//       }
//     });
//     this.classList.add("active");

//     const targetId = text.getAttribute("data-alt");
//     const targetContent = document.getElementById(targetId);
//     const contents = document.querySelectorAll(".content");

//     contents.forEach((content) => {
//       content.classList.remove("active");
//     });
//     if (targetContent) {
//       content.classList.add("active");
//     }
//   });
// });

// const texts = document.querySelectorAll(".tab_btn");

// texts.forEach((text, i) => {
//   text.addEventListener("click", function () {
//     texts.forEach((sibling) => {
//       if (sibling !== text) {
//         sibling.classList.remove("active");
//       }
//     });
//     this.classList.add("active");

//     const targetId = text.getAttribute("data-alt");
//     const targetContent = document.getElementById(targetId);
//     const contents = document.querySelectorAll(".content");
//     const viewport = document.querySelector("main");
//     console.log(viewport);

//     contents.forEach((content) => {
//       content.classList.remove("active");

//       if (targetContent) {
//         targetContent.classList.add("active");
//       }
//       // contents[i].classList.add("active");
//       // viewport.style = `left: ${i * -100}%`;
//     });
//   });
// });

const texts = document.querySelectorAll(".tab_btn");

texts.forEach((text, i) => {
  text.addEventListener("click", function () {
    texts.forEach((sibling) => {
      if (sibling !== text) {
        sibling.classList.remove("active");
      }
    });
    this.classList.add("active");

    const targetId = text.getAttribute("data-alt");
    const targetContent = document.getElementById(targetId);
    const contents = document.querySelectorAll(".content");
    const contentContainer = document.querySelector(".content_container");

    contents.forEach((content, j, arr) => {
      if (i == 0) {
        contentContainer.style.marginLeft = "0";
        contentContainer.style.transition = "0.5s";
      } else if (i == 1) {
        contentContainer.style.marginLeft = "-100%";
        contentContainer.style.transition = "0.5s";
      } else {
        contentContainer.style.marginLeft = "-200%";
        contentContainer.style.transition = "0.5s";
      }
    });

    // let currentTabIndex = i;

    // contents.forEach((content, j) => {
    //   if (currentTabIndex === j) {
    //     contentContainer.style.left = `${j * -100}%`;
    //   }

    // contents.forEach((content, j) => {
    //   // content.classList.remove("active");
    //   if ((j = 0)) {
    //     contentContainer.style = `left: 0`;
    //   } else if ((j = 1)) {
    //     contentContainer.style = `left: -100%`;
    //   } else if ((j = 2)) {
    //     contentContainer.style = `left: -200%`;
    //   }

    // contents[i].classList.add("active");
    // viewport.style = `left: ${i * -100}%`;
  });
});
