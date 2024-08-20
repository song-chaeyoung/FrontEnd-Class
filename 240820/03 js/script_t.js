const userDataList = [
  {
    name: "곰",
    age: 18,
  },
  {
    name: "여우",
    age: 37,
  },
  {
    name: "사자",
    age: 32,
  },
  {
    name: "얼룩말",
    age: 41,
  },
  {
    name: "기린",
    age: 56,
  },
  {
    name: "고양이",
    age: 27,
  },
];

const btns = document.querySelectorAll(".button");

const updateList = (filteredList) => {
  let listHTML = "";
  filteredList.forEach((data) => {
    listHTML += `<li>${data.name} : ${data.age}</li>`;
  });
  document.querySelector(".user_list").innerHTML = listHTML;
};

const onClickBtn = (e) => {
  const targetAge = e.target.dataset.age;
  let filteredList = userDataList.filter((data) => data.age >= targetAge);

  updateList(filteredList);
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    onClickBtn(e);
  });
});
