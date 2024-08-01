let num1;
let num2;
let num3;

for (i = 1; i <= 3; i++) {
  const userNum = Number(prompt(`${i}번째 자연수값을 입력해주세요.`));

  if (userNum % 1 === 0 && userNum > 0) {
    if (i === 1) {
      num1 = userNum;
    } else if (i === 2) {
      num2 = userNum;
    } else {
      num3 = userNum;
    }
  } else {
    alert("자연수만 입력해주세요.");
    i--;
  }
}

if (num1 + num2 > num3 && num2 + num3 > num1 && num1 + num3 > num2) {
  console.log(
    `YES! ${num1}과 ${num2}과 ${num3}으로 삼각형을 만들 수 있습니다.`
  );
} else {
  console.log(`No! ${num1}과 ${num2}과 ${num3}으로 삼각형을 만들 수 없습니다.`);
}
