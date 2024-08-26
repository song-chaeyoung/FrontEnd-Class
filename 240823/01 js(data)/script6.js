// const xhr = new XMLHttpRequest();

// xhr.open("GET", "student-2.json");
// xhr.send();

// const result = document.querySelector("#result");

// const renderHTML = (students) => {
//   let output = "";
//   for (let stdent of students) {
//     output += `
//     <h2>${stdent.name}</h2>
//     <ul>
//       <li>전공 : ${stdent.major}</li>
//       <li>학년 : ${stdent.grade}</li>
//     </ul>
//     `;
//   }
//   result.innerHTML = output;
// };

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const students = JSON.parse(xhr.responseText);
//     renderHTML(students);
//   }
// };

fetch("student-2.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
    <h2>${student.name}</h2>
    <ul>
      <li>전공 : ${student.major}</li>
      <li>학년 : ${student.grade}</li>
    </ul>
      `;
      console.log(student);
    });
    document.querySelector("#result").innerHTML = output;
  })
  .catch((err) => console.err(err));

// console.log(fetch("./student-2.json")); //fullfilled
