// 끝말잇기
// 1. 제시어의 끝단어를 확인
// 1-1. 컴퓨터에게 최초의 제시어가 무엇인지 알려줘야 함
// 1-2. 3-1에서 이벤트의 시작을 알리는 "입력버튼"이 무엇인지 알려줘야 함

// 2. 끝단어로 시작하는 단어를 입력
// 2-1. 사용자가 입력한 단어가 무엇이지를 알아야함
// 2-2. 제시어 === 사용자가 입력한 단어

// 3. 단어 입력 후 입력버튼
// 3-1. 입력버튼 클릭 => 검증 (이벤트)

// 4. 문제 여부 판단 => 문제없다! or 문제 있다!
// 4-1. 조건에 따라서 값을 어떻게 출력

// 원칙적으로 form태그안에 submit에는 클릭 이벤트를 쓰지않음
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("입력버튼 클릭");
// });

// word game
const gameStart = (e) => {
  e.preventDefault();
  let word = document.querySelector("#word").innerText;
  let myword = document.querySelector("#myword").value;
  let lastword = word[word.length - 1];
  let firstword = myword[0];

  if (lastword === firstword) {
    document.querySelector("#result").innerText = "정답입니다!";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
    // myword = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다!";
  }
};

const button = document.querySelector(".word_text form");
button.addEventListener("submit", gameStart);

// lotto game
// 6개의 숫자가 랜덤으로 동시에 추출이 되어야 함
// 6개 숫자는 중복되서는 안되고, 1~45까지의 숫자

// 1. 클릭 버튼 클릭시, 숫자가 생성되어야함. (이벤트)

// 2. 클릭버튼이 무엇인지를 컴퓨터한테 알려줘야함

// 3. js에서는 내장 객체 > 숫자를 랜덤으로 생성해주는 함수
// 3-1. random() => 0~1미만의 실수 & 난수의 형태로 생성 (실수: 소수점을 가지고 있는 숫자), (난수 : 불규칙적으로 숫자를 생성하는 행위)
// 소수점을 없애야하는 필요: floor() => 소수점을 버림 // ceil() => 소수점을 올림 // round() => 소수점 반올림 (*44/*45하면)

// 4. 중복X
// 4-1. set() 클래스 => 무작위로 생성된 숫자를 배열에 한개씩 담을 예정 => 중복된 값이 생성되는 경우, 1개로 합쳐주는 역할
// 4-2. 6개의 숫자 완성 => 같은 숫자가 나오는 경우, 조건문 => 재추점을 하겠습니다!

const lottoBtn = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_num");

const luckyNum = {
  digitCount: 6,
  maxNum: 44,
};

const startLotto = () => {
  const { digitCount, maxNum } = luckyNum; // 구조분해할당
  let myNum = new Set(); //클래스 선택자
  for (let i = 0; i < digitCount; i++) {
    myNum.add(Math.floor(Math.random() * maxNum) + 1);
  }
  console.log(myNum); //1~45까지의 6개의 무작위 숫자
  if (myNum.size === 6) {
    result.innerText = `${[...myNum]}`; // ... 전개연산자구문 배열 > 문자 / `${[]}`
  } else {
    result.innerText = "재추첨 하겠습니다!";
  }
};

lottoBtn.addEventListener("click", startLotto);

// const startLotto = () => {
//   const { digitCount, maxNum } = luckyNum; //구조 분해 할당
//   let myNum = new Set(); //클라스 선택자
//   for (let i = 0; i < digitCount; i++) {
//     myNum.add(Math.floor(Math.random() * maxNum) + 1);
//   }
//   if (myNum.size === 6) {
//     result.innerText = `${[...myNum]}`;
//   } else {
//     result.innerText = "재추첨 하겠습니다!";
//   }
// };

// const lottoButton = document.querySelector(".wrapper_lotto_btn");
// const result = document.querySelector(".game_lotto_number");
// // console.log(result);
// // const lottoNumber = 6;
// // const lottoCount = 44;
// // 편리하게 사용하기 위해 한번에 담기
// const luckyNumber = {
//   digitCount: 6,
//   maxNumber: 44,
// };
// //리펙토링
// const startLotto = () => {
//   //console.log("Lotto");
//   //구조분해할당
//   const { digitCount, maxNumber } = luckyNumber;
//   //console.log(digitCount, maxNumber); // 6 44
//   // 4.
//   let myNumber = new Set();
//   for (let i = 0; i < digitCount; i++) {
//     myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
//   }
//   //console.log(myNumber); //1~45까지의 6개의 무작위 숫자
//   if (myNumber.size === 6) {
//     result.innerText = `${[...myNumber]}`;
//   } else {
//     result.innerText = "재추첨 하겠습니다.";
//   }
// };
// //console.log(lottoButton);
// lottoButton.addEventListener("click", startLotto);
