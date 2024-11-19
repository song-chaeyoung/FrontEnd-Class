// 콜백함수 : 함수안에 또다른 함수 선언, 호출
// 함수의 호출을 다른 함수가 결정짓는다

const displayLetter = () => {
  console.log("a");
  setTimeout(() => {
    console.log("b");
    setTimeout(() => {
      console.log("c");
      setTimeout(() => {
        console.log("d");
        setTimeout(() => {
          console.log("final");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

// displayLetter();

const likePizza = true;

const pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve("피자를 주문합니다");
  else reject("피자를 주문하지 않습니다");
});
