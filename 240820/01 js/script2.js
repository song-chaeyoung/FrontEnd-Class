const result = document.querySelector("#result");
const member1 = ["HTML", "Node", "React"];
const member2 = ["CSS", "Javascript", "React"];
const member3 = ["Javascript", "React"];

// let subject = new Set()
//   .add(...member1)
//   .add(...member2)
//   .add(...member3);

let subjects = [...member1, ...member2, ...member3];

const resultList = new Set();

subjects.forEach((subject) => {
  resultList.add(subject);
});

console.log(resultList);

result.innerHTML = `
    <ul>
    ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
    </ul>
  `;
