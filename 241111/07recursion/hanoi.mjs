const hanoi = (count, from, to, temp) => {
  if (count === 0) return;
  hanoi(count - 1, from, temp, to);
  console.log(`원반 ${count}을 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
};

hanoi(4, "A", "C", "B");

// const hanoi = (3, "A", "B", "C") => {
//   if (count === 0) return;
//   hanoi(3 - 1, A, B, C);
//   console.log(`원반 ${3}을 ${a}에서 ${c}로 이동`);
//   hanoi(3 - 1, B, C, A);
// }

// const hanoi = (2, "A", "B", "C") => {
//   if (2 === 0) return;
//   hanoi(2 - 1, A, B, C);
//   console.log(`원반 ${2}을 ${a}에서 ${b}로 이동`);
//   hanoi(2 - 1, C, B, A);
// }

// const hanoi = (2, "B", "C", "A") => {
//   if (2 === 0) return;
//   hanoi(2 - 1, B, A, C);
//   console.log(`원반 ${2}을 ${b}에서 ${c}로 이동`);
//   hanoi(2 - 1, A, C, B);
// }
