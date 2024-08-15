// Search Modal
const searchBtn = document.querySelector(".fa-magnifying-glass");

searchBtn.addEventListener("click", () => {
  document.querySelector(".modal_search").classList.add("active");
});

// document.querySelectorAll(".close, section").addEventListener("click", () => {
//   document.querySelector(".modal_search").classList.remove("active");
// });

// const items = document.querySelectorAll(".close, section");
document.querySelectorAll(".close, section").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".modal_search").classList.remove("active");
  });
});

// Search Bar
const searchBar = document.querySelector(".search_box input[type='text']");

searchBar.addEventListener("focus", function () {
  this.parentElement.nextElementSibling.style.opacity = "1";
});
searchBar.addEventListener("blur", function () {
  this.parentElement.nextElementSibling.style.opacity = "0";
});

// Accordion
const firstContent = document.querySelectorAll(".accordion .content");
firstContent[0].style.display = "block";

const titles = document.querySelectorAll(".title");
titles.forEach((title, i) => {
  title.addEventListener("click", function () {
    firstContent.forEach((content) => {
      content.style.display = "none";
    });
    titles.forEach((t) => {
      // t.classList.remove("active");
      if (t !== this) {
        t.classList.remove("active");
      }
    });

    let content = title.nextElementSibling;
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
    // this.classList.add("active");
    // firstContent[i].style.display = "block";
  });
});
