// 1.  사용자로부터 태어난 년도를 받으세요!
// 2. 태어난 년도를 기준으로 나이가 몇살인지
// 3. result 공간에 출력해주세요.
// innerText 속성을 활용 > 특정 Node 안에 텍스트 문장을 삽입할 수 있음

// const promptNum = Number(prompt("태어난 년도를 넣어주세요"));

// if (promptNum == NaN) {
//   console.log("error");
// } else {
//   const nowYear = new Date().getFullYear();
//   console.log(nowYear);

//   const result = document.querySelector("#result");
//   console.log(result);
//   const old = nowYear - promptNum;

//   result.innerText = `나이는 ${old}입니다.`;
// }

const button = document.querySelector("button");
const calc = () => {
  const birthYear = Number(prompt("태어난 년도를 입력하세요", "2022"));
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear + 1;
  const result = document.querySelector("#result");
  result.innerText = `${birthYear}년생의 나이는 ${age}입니다.`;
};

button.addEventListener("click", calc);
