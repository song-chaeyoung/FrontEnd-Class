const subject = prompt("신청할 과목을 선택하세요", "1-Html, 2-Css, 3-Js");

if (subject !== null) {
  switch (subject) {
    case "1":
      alert("HTML을 신청하셨습니다!");
      break;
    case "2":
      alert("CSS을 신청하셨습니다!");
      break;
    case "3":
      alert("JS을 신청하셨습니다!");
      break;
    default:
      alert("잘못입력했습니다.");
  }
} else {
  alert("취소되었습니다.");
  // return;
}
