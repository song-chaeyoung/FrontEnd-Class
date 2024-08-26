const phoneNumber = document.querySelector("input[type='text']");
const warningMessage = document.querySelector("#warningmessage");

phoneNumber.addEventListener("keyup", function () {
  const numberValue = this.value;
  const trimNumber = numberValue.replace(/-/g, "");

  const regexp = /^[0][0-9]{9,10}$/.test(trimNumber);
  // const regexp = /^[0]\d{8,9}[0-9]$/.test(trimNumber); //가능
  // const regexp = /^0[0-9]{9,10}$/.test(trimNumber); //가능

  if (!regexp) {
    warningMessage.innerText = "전화번호의 형식에 맞춰서 입력해주세요.";
  } else {
    warningMessage.innerText = "";
  }
});
