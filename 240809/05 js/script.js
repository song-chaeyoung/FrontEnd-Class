const buttons = document.querySelectorAll("button");
const computerChoice = document.querySelector(".computer_choice");
const userChoice = document.querySelector(".user_choice");

const reultText = document.querySelector(".result");

const result = ["가위", "바위", "보"];

let message = "";

const show = (user, computer, message) => {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  reultText.innerText = message;
};

const game = (user, computer) => {
  if (user === computer) message = `무승부입니다`;
  else {
    switch (
      user + computer //연결연산자
    ) {
      case `가위보`:
      case `바위가위`:
      case `보바위`:
        message = `나의 승리!`;
        break;
      case `가위바위`:
      case `바위보`:
      case `보가위`:
        message = `나의 패배🥹`;
        break;
    }
  }

  show(user, computer, message);
  // reultText.innerText = `${message}`;
};

const play = (e) => {
  const user = e.target.innerText;

  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];

  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
