const xhr = new XMLHttpRequest();

xhr.open("GET", "student2.json", true); //boolean => 비동기/동기(false) : 쓸일이 없다
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const student2 = JSON.parse(xhr.responseText);
    document.querySelector("#result").innerHTML = `
    <h1>${student2.name}</h1>
    <ul>
      <li>전공 : ${student2.major} 전공</li>
      <li>학년 : ${student2.grade}학년</li>
    </ul>
    `;
  }
};
