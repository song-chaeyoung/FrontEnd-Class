// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const number01 = Number(document.querySelector("#number01").value);
//   const number02 = Number(document.querySelector("#number02").value);
//   const result = document.querySelector("#result");

//   // let randomNum = Math.ceil(Math.random() * number01);

//   let resultNum = [];
//   for (let i = 1; i <= number02; i++) {
//     let randomNum = Math.ceil(Math.random() * number01);
//     if (!randomNum) {
//       numbers.push(randomNum);
//     }
//     resultNum.push(randomNum);
//   }
//   result.innerText = `당첨자 : ${resultNum}번`;
// });

// 값을 찾아오거나 생성!! => 배열

const form = document.querySelector("form");
form.addEventListener("submit", () => {
  e.preventDefault();

  const number01 = document.querySelector("#number01");
  const number02 = document.querySelector("#number02");
  const result = document.querySelector("#result");

  let winner = "";
  let pickedNumbers = [];
  for (let i = 0; i < number02.value; i++) {
    let picked;

    do {
      picked = Math.floor(Math.random() * number01.value + 1);
    } while (pickedNumbers.includes(picked));

    pickedNumbers.push(picked);
    winner += `${picked}번`;
  }
  result.innerText = `당첨자 : ${winner}`;
});
