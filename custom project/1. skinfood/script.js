// gnb event
const gnbLi = document.querySelectorAll(".gnb_list > ul > li");
gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = 1;
      aTag.classList.add("active");
    }
  });
  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = "0";
      lnb.style.opacity = 0;
      aTag.classList.remove("active");
    }
  });
});

// card event
const items = document.querySelectorAll(".card_items li");

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "translateY(-20px)";
    item.style.transition = "all 0.3s";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
  });
});

const bgImgs = [
  "main1.jpg",
  "main2.jpg",
  "main3.jpg",
  "main4.jpg",
  "main5.jpg",
];

const bgImg = document.querySelector(".background_img");
bgImg.style.backgroundImage = `url(./img/${bgImgs[0]})`;

const topCotents = document.querySelector(".background_text");
const contentTitle = document.querySelector(".text_title");
const contentDesc = document.querySelector(".text_desc");

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const [firstData, ...otherData] = jsonData.data;
    console.log(firstData);

    contentTitle.innerText = firstData.title;
    contentDesc.innerText = firstData.description;

    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const { title, description } = jsonData.data[index];
        bgImg.style.backgroundImage = `url(./img/${bgImgs[index]})`;
        contentTitle.innerText = title;
        contentDesc.innerText = description;
      });
    });
  });
