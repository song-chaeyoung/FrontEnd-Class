const array = [
  {
    id: 123,
    name: "곰",
  },
  {
    id: 1021,
    name: "사자",
  },
  {
    id: 6021,
    name: "여우",
  },
];

const input = document.querySelector("#userid");
const result = document.querySelector(".result");

input.addEventListener("keyup", (e) => {
  console.log(input.value);

  // array.forEach((item) => {
  //   if (input.value == item.id) result.innerText = item.name;
  //   else result.innerText = "유저 검색결과 없음.";
  // });

  function findText() {
    if (input.value == item.id) return true;
    else return false;
  }

  array.forEach((item) => {
    result.innerText = array.find();
  });

  if (input.value == item.id)
    result.innerText = array.find((item) => item.name);
  else result.innerText = "유저 검색결과 없음.";
});
