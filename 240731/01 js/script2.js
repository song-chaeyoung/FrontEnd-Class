// 아래 id/pw는 A 사용자의 id / pw 입니다.
const id = "ezen";
const pw = 1234;

// 1. 사용자로부터 id / pw 정보값을 순차적으로 받습니다.
// 2. 사용자가 입력한 id값이 위에 저장된 id와 일치하면, pw값을 받을 수 있는 단계로 넘아가고, 만약 id값이 일치하지 않으면 값이 일치하지 않는다. 는 알림창을 띄워줍니다.
// 3. pw값을 입력하는 단계에 도착해서 역시, pw가 일치하면 사용자님 반갑습니다. 라는 알림창이 나오고, 만약 pw가 일치하지 않는다면, pw값이 일치하지 않습니다. 라는 알림창을 띄워 주겠습니다.

// for (i = 0; i < 2; i++) {
//   const info = ["아이디", "비밀번호"]
//   const userID = prompt(`${info[i]}을 입력해주세요.`)
//   // const userPw = prompt(`${info[0]}을 입력해주세요.`)
//   if (userID === id) {
//     prom
//   } else {

//   }
// }

// const info = ["아이디", "비밀번호"];

// const userID = prompt(`아이디를 입력해주세요.`);
// if (userID === id) {
//   const userPw = Numbere(prompt(`비밀번호를 입력해주세요.`));
//   if (userPw === pw) {
//     alert("사용자님 반갑습니다.");
//   } else {
//     prompt("비밀번호를 다시 입력해주세요.");
//   }
// } else {
//   prompt("아이디를 다시 입력해주세요.");
// }

// for (i = 0; i < 2; i++) {
//   const info = ["아이디", "비밀번호"];
//   const userID = prompt(`${info[i]}을 입력해주세요.`);
//   // const userPw = prompt(`${info[0]}을 입력해주세요.`)
//   if (userID === id) {
//     if (userPw === pw) {
//       alert("사용자님 반갑습니다.");
//     } else {
//       prompt("비밀번호를 다시 입력해주세요.");
//     }
//   } else {
//   }
// }

const userID = prompt("당신의 아이디는?");

if (id === userID) {
  const userPw = prompt("당신의 비밀번호는?");
  if (userPw == pw) {
    alert(`${userID}님, 다시와주셔서 감사합니다!`);
  } else {
    alert("비밀번호가 일치하지 않습니다.");
    location.reload();
  }
} else {
  alert("아이디가 일치하지 않습니다.");
  location.reload();
}
