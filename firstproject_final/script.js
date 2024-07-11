// header fixed, gotop event
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 60) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  if (window.scrollY > 3900) {
    const goTop = document.querySelector(".top_move_btn");
    goTop.classList.add("show");
  } else {
    const goTop = document.querySelector(".top_move_btn");
    goTop.classList.remove("show");
  }
});

// logo top event
const headLogo = document.querySelector(".logo.head-logo");
headLogo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// top button event
const goTop = document.querySelector(".top_move_btn");
goTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//search bar evnet
const searchBar = document.querySelector(".search_bar");
const gnbRight = document.querySelector(".gnb_right");

gnbRight.addEventListener("click", () => {
  searchBar.classList.add("active");
});

const closeBtn = document.querySelector(".close_btn");
closeBtn.addEventListener("click", () => {
  searchBar.classList.remove("active");
});

//typing evnet
const toptext1 = "About Me";
const cursor = document.querySelector(".blink");

const text1 = document.querySelector(".top_text h1");

let j = 0;

const typing = () => {
  if (j < toptext1.length) {
    let txt = toptext1[j++];
    text1.innerHTML += txt;
    setTimeout(typing, 200);
  } else {
    cursor.style.animation = "none";
    cursor.style.display = "none";
    return false;
  }
};

typing();

const toptext2 = "안녕하세요.\n FE개발자 송채영입니다.";
const text2 = document.querySelector(".subtitle");
let k = 0;
const typing2 = () => {
  if (k < toptext2.length) {
    let txt = toptext2[k++];
    text2.innerHTML += txt === "\n" ? "<br/>" : txt;
    setTimeout(typing2, 200);
  } else {
    cursor.style.animation = "none";
    cursor.style.display = "none";
    return false;
  }
};
setTimeout(() => {
  typing2();
}, 1750);

const contactME = document.querySelector(".contactme");

setTimeout(() => {
  contactME.style.visibility = "visible";
  contactME.style.opacity = "1";
  contactME.style.transition = "all 0.5s";
}, 6500);

//header click event
const links = document.querySelectorAll("a[data-target]");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    const targetId = this.dataset.target;
    const targetSection = document.querySelector(targetId);

    let gnbList = document.querySelectorAll(".gnb_center ul li");

    if (targetSection) {
      event.preventDefault();

      searchBar.classList.remove("active");

      if (this.dataset.name == "about") {
        let offset = targetSection.offsetTop - 80;

        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      } else if (
        this.dataset.name == "capability" ||
        this.dataset.name == "history" ||
        this.dataset.name == "keyword"
      ) {
        let offset = targetSection.offsetTop - 100;

        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      } else {
        let offset = targetSection.offsetTop;

        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }
  });
});

//background img size change
window.addEventListener("scroll", () => {
  const backgroundImg = document.querySelector(".background_img");
  if (window.scrollY > 250) {
    backgroundImg.classList.add("active");
  } else {
    backgroundImg.classList.remove("active");
  }
});

// About Me img slide
const slideContainerArrow = document.querySelector(
  ".about-me_contents_img_arrow"
);
const slideArrows = document.querySelectorAll(".slide_arrow_btn");
const slideImg = document.querySelector(".about-me_contents_img");

const pics = ["aboutMe1.jpg", "aboutMe2.jpg", "aboutMe3.JPG"];
let i = 0;
let slideInterval;
let isTransitioning = false;

slideImg.style.background = `url('https://ecimg.cafe24img.com/pg1108b37246576001/scy512/iamyoung/${pics[0]}') center/cover no-repeat`;

const updateSlide = (i) => {
  slideImg.style.background = `url('https://ecimg.cafe24img.com/pg1108b37246576001/scy512/iamyoung/${pics[i]}') center/cover no-repeat`;
  slideImg.style.transition = "all 0.5s";
};

const startSlideShow = () => {
  slideInterval = setInterval(() => {
    i = (i + 1) % pics.length;
    updateSlide(i);
  }, 4000);
};

const stopSlideShow = () => {
  clearInterval(slideInterval);
};

const resetSlideShow = () => {
  stopSlideShow();
  isTransitioning = false;
  startSlideShow();
};

slideArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (isTransitioning) return;
    isTransitioning = true;

    stopSlideShow();
    if (e.target.id === "leftArrow") {
      i = (i - 1 + pics.length) % pics.length;
    } else if (e.target.id === "rightArrow") {
      i = (i + 1) % pics.length;
    }

    updateSlide(i);

    setTimeout(() => {
      isTransitioning = false;
      // startSlideShow();
    }, 500);
  });
});

startSlideShow();

slideContainerArrow.addEventListener("mouseover", stopSlideShow);
slideContainerArrow.addEventListener("mouseout", resetSlideShow);

// capability ani start
const skillLevel = document.querySelectorAll(".skill_level");
const skillContainer = document.querySelector(".skill_contanier");
const skillDimmed = skillContainer.querySelector(".dimmed");
skillContainer.addEventListener("click", () => {
  skillDimmed.classList.add("hide");
  skillLevel.forEach((skillItem, index) => {
    setTimeout(() => {
      if (index <= skillLevel.length) {
        skillItem.classList.add("active");
      }
    }, 1000 * index);
  });
});

// keyword, mygoal click evnet
// keyword 1
const keywordBoxFirst = document.querySelector(".box_first");
const keywordCircleFirst = document.querySelector(".keyword_cicle_first");

keywordBoxFirst.addEventListener("click", () => {
  keywordBoxFirst.classList.toggle("active");
  keywordCircleFirst.classList.toggle("active");
});

//keyword2
const keywordBoxSecond = document.querySelector(".box_second");
const keywordCircleSecond = document.querySelector(".keyword_cicle_second");

keywordBoxSecond.addEventListener("click", () => {
  keywordBoxSecond.classList.toggle("active");
  keywordCircleSecond.classList.toggle("active");
});

//keyword3
const keywordBoxThird = document.querySelector(".box_third");
const keywordCircleThird = document.querySelector(".keyword_cicle_third");

keywordBoxThird.addEventListener("click", () => {
  keywordBoxThird.classList.toggle("active");
  keywordCircleThird.classList.toggle("active");
});

//mygoal
const mygoalCircle = document.querySelector(".mygoal_cicle");
const mygoalBox = document.querySelector(".mygoal_first");

mygoalBox.addEventListener("click", () => {
  mygoalBox.classList.toggle("active");
  mygoalCircle.classList.toggle("active");
});

// Code Reivew Modal
//first
const modalContainer = document.querySelector(
  ".codereview_modal_container.modal_first"
);
const codereviewBtnFirst = document.querySelector(".reveiw_btn_first");

const modalFirst = document.querySelector(".modal_first");
const modalCloseFirst = document.querySelector(".modal_close_first");
const goTopShow = document.querySelector(".top_move_btn");

codereviewBtnFirst.addEventListener("click", () => {
  modalFirst.classList.add("active");
  goTopShow.style.display = "none";
});
modalCloseFirst.addEventListener("click", () => {
  modalFirst.classList.remove("active");
  goTopShow.style.display = "block";
});
modalContainer.addEventListener("click", () => {
  modalFirst.classList.remove("active");
  goTopShow.style.display = "block";
});

//second
const modalContainerSecond = document.querySelector(
  ".codereview_modal_container.modal_second"
);
const codereviewBtnSecond = document.querySelector(".reveiw_btn_second");
const modalSecond = document.querySelector(".modal_second");
const modalCloseSecond = document.querySelector(".modal_close_second");

codereviewBtnSecond.addEventListener("click", () => {
  modalSecond.classList.add("active");
  goTopShow.style.display = "none";
});
modalCloseSecond.addEventListener("click", () => {
  modalSecond.classList.remove("active");
  goTopShow.style.display = "block";
});
modalContainerSecond.addEventListener("click", () => {
  modalSecond.classList.remove("active");
  goTopShow.style.display = "block";
});

//third
const modalContainerThird = document.querySelector(
  ".codereview_modal_container.modal_third"
);
const codereviewBtnThird = document.querySelector(".reveiw_btn_third");

const modalThird = document.querySelector(".modal_third");
const modalCloseThird = document.querySelector(".modal_close_third");

codereviewBtnThird.addEventListener("click", () => {
  modalThird.classList.add("active");
  goTopShow.style.display = "none";
});
modalCloseThird.addEventListener("click", () => {
  modalThird.classList.remove("active");
  goTopShow.style.display = "block";
});
modalContainerThird.addEventListener("click", () => {
  modalThird.classList.remove("active");
  goTopShow.style.display = "block";
});
