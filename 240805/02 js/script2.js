const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const num1 = Number(document.querySelector(".num1").value);
  const num2 = Number(document.querySelector(".num2").value);

  let min = num1 < num2 ? num1 : num2;
  let k = 0;
  for (let i = 1; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      k = i;
      // return k;
    }
    // console.log(k);
  }

  document.querySelector(".result").innerText = `${k}`;
});
