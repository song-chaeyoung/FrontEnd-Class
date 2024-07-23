const button = document.querySelector("button");

const buttonAciton = (e) => {
  console.log(e);
  // 실시간으로 받아오기때문에 target과 cuttrentTagrget이 동시에 뜨지않음
  console.log(e.target);
  console.log(e.currentTarget);
};

button.addEventListener("click", buttonAciton);
