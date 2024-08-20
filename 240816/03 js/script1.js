const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const eamil = form.querySelector("#useremail");

  if (eamil.value !== "") {
    let userName = eamil.value.split("@")[0];
    userName += userName.slice(0, 2);
    const domain = eamil.value.split("@")[1];
    console.log(userName, domain);
    document.querySelector("#result").innerText = `${userName}***@${domain}`;
    eamil.value = "";
  } else {
    alert("이메일을 입력해주세요.");
  }
});
