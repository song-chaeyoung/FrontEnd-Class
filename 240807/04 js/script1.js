const orderBtn = document.querySelector("#order");
const orderInfo = document.querySelector(".orderinfo");

orderBtn.addEventListener("click", () => {
  const newH2 = document.createElement("h2");
  const title = document.querySelector(".desc > h2");
  const textNode = document.createTextNode(title.innerText);

  // newH2.style = `margin: 20px;`;
  newH2.style.fontSize = "2rem";
  newH2.style.color = "crimson";

  const newImg = document.createElement(img);
  const scrNode = document.createAttribute("src");
  scrNode.value =
    "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b24c79dc-427b-4722-9e0c-2ca66c064ecf/G.T.+HUSTLE+3+EP+OLY.png";

  newImg.setAttribute(
    "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b24c79dc-427b-4722-9e0c-2ca66c064ecf/G.T.+HUSTLE+3+EP+OLY.png"
  );

  newH2.appendChild(textNode);
  orderInfo.appendChild(newH2);
  orderInfo.appendChild(newH2);
  orderInfo.appendChild(newHnewImg2);
});
