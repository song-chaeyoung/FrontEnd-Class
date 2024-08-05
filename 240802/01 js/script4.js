// form요소 => form 태그 안에 있는 세부적인 태그들을 모두 지칭하는 표현

//요소.value
// const btn = document.querySelector("input[type='submit']");
// const form = document.querySelector("form");
// // console.log(form);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // const orderName = document.querySelector("#ordername");
//   const orderName = document.order.ordername;
//   // console.log(orderName);
// });

// console.log(document.forms[0].elements[4]);

const select = document.querySelector("#fruits");
// console.log(select.options[1].value);

select.addEventListener("change", function () {
  console.log(this.options);
  const selectedText = this.options[this.selectedIndex].innerText;
  // alert(`${selectedText}를 선택하셨습니다! 가격은 5,000입니다.`);
});

// const radioBtn = document.order.userage;
// console.log(radioBtn[2].value);
// const checkBox = document.querySelector("input[name='alarm']:checked");
// console.log(checkBox);

const radioBox = document.querySelectorAll("input[name='userage']");
radioBox.forEach((item) => {
  item.addEventListener("change", (e) => {
    const target = e.target;
    if (target.checked) {
      alert(`당신의 연령은 ${target.value}대 입니다.`);
    }
  });
});

const checkBox = document.querySelectorAll("input[name='alarm']");
checkBox.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.target;
    alert(`당신의 관심은 ${target.value}입니다!`);
  });
});
