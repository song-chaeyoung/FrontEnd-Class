const display = (result) => {
  console.log(`${result} 준비 완료!`);
};

const order = (coffee, callback) => {
  console.log(`${coffee} 주문 접수!`);
  setTimeout(() => {
    callback(coffee);
  }, 2000);
};

order("아메리카노", display);
