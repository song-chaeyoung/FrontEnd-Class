const userAgeList = [
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
];

const btns = document.querySelectorAll(".btnwrapper span");
const result = document.querySelector(".result");

btns.forEach((btn, i) => {
  console.log(btn.id.slice(0, 1));
  btn.addEventListener("click", () => {
    userAgeList.forEach((user) => {
      let targetAgeList = userAgeList.filter(
        () => btn.id.slice(0, 1) == user.age.slice(1, 0)
      );
      console.log(targetAgeList);
    });
  });
});
