const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = document.querySelector("#name").value;
  const userSubject = document.querySelector("#subject").value;

  const tr = document.createElement("tr");
  const td = document.createElement("td");

  tr.innerHTML = `<td>${userName}</td><td>${userSubject}</td>`;

  const table = document.querySelector("table");
  table.appendChild(tr);
});
