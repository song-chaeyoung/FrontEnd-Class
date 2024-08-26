const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let value = input.value;

  try {
    if (value === "" || isNaN(value)) throw "숫자를 입력하세요.";

    value = Number(value);
    if (value <= 10) result.innerText = value;

    if (value > 10) throw "10보다 작은 수를 입력하세요!";
  } catch (err) {
    alert(err);
  } finally {
    input.value = "";
  }
});
