const result = document.querySelector("#result");

const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");

  if (coffee !== null && coffee !== "") {
    result.innerText = `${coffee} 주문 접수`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else {
    reject("커피를 주문하지 않았습니다.");
  }
});

const display = (coffee) => {
  const end = document.querySelector("#end");
  result.classList.add("done");
  end.innerText = `${coffee} 준비 완료!`;
  end.classList.add("active");
};

const showErr = (err) => {
  console.log(err);
};
order.then(display).catch(showErr);

console.log(order);

// promise 단계
// 1. pending : promise를 생성하고 실제 실행을 시키기전, 대기 상태
// 2. fullfilled : promise를 통해서 어떤 실행값 혹은 실행문을 정상적으로 실행시키는 상태
// 3. rejected : promise를 통해서 실행하고자 했던 요소를 정상적으로 실행시키지 못한 상태
