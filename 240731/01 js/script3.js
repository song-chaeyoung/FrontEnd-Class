// const submit = document.querySelector(".sumbit_btn");
// const calc = () => {
//   const priceValue = document.querySelector("#input_first").value;
//   const saleValue = document.querySelector("#input_second").value;

//   const salePrice = priceValue / saleValue;
//   const finalPrice = priceValue - salePrice;

//   const result = document.querySelector(".result_text");
//   result.innerText = `상품의 원래 가격은 ${priceValue}원 이고,
//   할인율은 ${saleValue}%입니다. ${salePrice}원을 절약한 ${finalPrice}원에 살 수 있습니다. `;
// };

// submit.addEventListener("click", calc);

// form 요소(input태그) 입력될 값 절대 전역요소로 찾아올 수 없습니다!
// 이벤트라는 액션이 발생된 이후에만 value값 찾아올 수 있음

const button = document.querySelector("input[type='button']");
const showSales = () => {
  const price = document.querySelector("#price").value;
  // const priceValue = price.value;
  const rate = document.querySelector("#rate").value;

  const savedPrice = price * (rate / 100);
  const resultPrice = price - savedPrice;

  document.querySelector(
    ".btm_info p"
  ).innerText = `상품의 원래 가격은 ${price}원 이고,
  할인율은 ${rate}%입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 살 수 있습니다. `;
};

button.addEventListener("click", showSales);
