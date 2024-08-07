const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector(".print");

// stars.forEach((star, i) => {
//   star.addEventListener("click", () => {
//     stars.forEach(function (s) {
//       s.classList.remove("active");
//     });
//     for (let k = 0; k < star[i]; k++) {
//       stars[i].classList.add("active");
//     }
//   });
// });

stars.forEach((star, idx) => {
  star.addEventListener("click", () => {
    stars.forEach((s, idx2) => {
      s.classList.remove("active");
      if (idx2 <= idx) {
        s.classList.add("active");
      }
      // if (idx2 <= idx) {
      //   s.classList.add("active");
      // } else {
      //   s.classList.remove("active");
      // }
    });

    let message = "";
    let imageURL = "";

    switch (idx) {
      case 0:
        message = "별로에요!";
        imageURL = "./img/star-lv1.png";
        break;
      case 1:
        message = "보통이에요!";
        imageURL = "./img/star-lv2.png";
        break;
      case 2:
        message = "그냥그래요!";
        imageURL = "./img/star-lv3.png";
        break;
      case 3:
        message = "마음에 들어요!";
        imageURL = "./img/star-lv4.png";
        break;
      case 4:
        message = "아주 최고에요!";
        imageURL = "./img/star-lv5.png";
        break;
    }

    print.innerHTML = `<img src =${imageURL}></img> ${message}`;
  });
});
