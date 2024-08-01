const numbers = [];
for (let i = 0; i < 3; i++) {
  const promptNumber = Number(prompt("1~100까지의 자연수를 입력해주세요."));

  if (promptNumber % 1 == 0) {
    if (promptNumber < 100) {
      numbers.push(promptNumber);
    } else {
      alert("100 이하의 숫자만 입력해주세요.");
      i--;
    }
  } else {
    alert("자연수만 입력해주세요.");
    i--;
  }
}
const smallest = Math.min(...numbers);
console.log(`입력한 값 중 가장 작은 값은 ${smallest}입니다.`);
