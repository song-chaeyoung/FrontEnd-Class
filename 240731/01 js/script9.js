// for (let a = 1; a <= 5; a++) {
//   document.write(`<table border=1>`);
//   // document.write(`<tr>${[a]}</tr>`);
//   for (let b = 1; b <= 5; b++) {
//     document.write(`<td >${[a] * [b]}</td>`);
//   }
//   document.write(`</table>`);
// }

let t = `<table border=1>`;
let num = 1;

for (let i = 1; i <= 5; i++) {
  t += `<tr>`;
  for (let k = 1; k <= 5; k++) {
    t += `<td>${[num]}</td>`;
    num++;
  }
  t += `</tr>`;
}
t += `</table>`;

document.write(t);
