// const form = document.querySelector("form");

// form.addEventListener("submit", () => {
//   const inputText =
// })

const inputText = document.querySelector("input[type='text']");
// const btn = document.querySelector("input[type='submit']");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const word = inputText.value;
  const count = word.length;
  alert(`입력하신 ${word}의 길이는 ${count}입니다.`);
  inputText.value = null;
});
