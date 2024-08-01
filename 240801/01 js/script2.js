// 1. 배열 명확하게 이해 사용
// 2. 반복문 적재적소
// 3. 내가 원하는 기능 구현 함수

// window 객체 안에는 시간 관련된 내장 함수 존재!
// setInterval
// clearInterval
// setTimeout : 특정 시간 이후부터

// CallBack 1 //js에서 자주만날 콜백함수 1번 예제
// let count = 0;
// const cbFunc = () => {
//   console.log(count);
//   if (count++ > 4) clearInterval(timer);
// };

// const timer = setInterval(cbFunc, 1000);

// cbFunc();

// CB2 //js에서 자주만날 콜백함수 2번 예제
// map함수는 배열안에 있는 각각의 개별 아이템을 찾아와서 어떤 연산작업을 한 이후 다시 해당 아이템을 모아서 *새로운 배열*로 생성!
// const arr = [10, 20, 30];
// const newArr = arr.map((item, idx) => (item + 5) * idx);

// console.log(newArr);

//CB3 //js에서 자주만날 콜백함수 3번 예제 //js에서 자주만날 콜백함수 1번 예제
// setTimeout => 일정시간 지연 후 실행

// window에 내장된 시간 내장 함수에서 this를 사용하면, 무조건 window

// 일반적인 콜백함수 내에서 주체가되고 있는 아이템을 찾아오고 싶을때는 직접 해당 인자리를 언급하거나 경우에 따라서 this 사용

// CB4 //js에서 자주만날 콜백함수 4번 예제
// const arr2 = [1, 2, 3, 4, 5];

// arr2.forEach((item) => {
//   console.log(item);
// });

// CB5 //js에서 자주만날 콜백함수 5번 예제
// this => 함수 형태 종류에 따라서 지칭하는 대상 달라짐!
// document.body.innerHTML += `<button id="a">Click</button>`;
// document.querySelector("#a").addEventListener("click", () => {
//   console.log(this);
// });

// CB6 //js에서 자주만날 콜백함수 6번 예제
// 객체 안에 있는 메서드 함수의 경우, this는 function의 경우, 해당 메서드 함수의 부모격인 객체를 찾아오지만, 만약 화살표 함수를 사용한다면 window 객체를 찾아온다.
// const obj = {
//   vals: [1, 2, 3],
//   logValues: function () {
//     console.log(this);
//   },
// };

// obj.logValues();

// // 객체 안에 메서드 형식으로 정의한 함수는 외부에 별도 존재하는 함수의 콜백함수로 사용할 시, 기존 객체와의 관계성이 제거된다!
// const arr3 = [4, 5, 6];
// arr3.forEach(obj.logValues);

// 객체를 통해서 탄생된 메서드 함수를 콜백함수로 사용 시, 해당 요소의 부모를 찾아올 수 있도록 하는 방법

// const obj1 = {
//   name: "obj1",
//   func: function () {
//     const self = this;
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// const callback = obj1.func();
// // setTimeout(callback, 1000);

//위 코드보다 효율적으로 this 객체를 사용하는 방법
// const obj2 = {
//   name: "obj2",
//   func: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(obj2.func.bind(obj2), 1000);

// 콜백 함수 => 콜백지옥!
// setTimeout(
//   (name) => {
//     let coffeeList = name;
//     console.log(coffeeList);
//     setTimeout(
//       (name) => {
//         coffeeList += `,${name}`;
//         console.log(coffeeList);
//         setTimeout(
//           (name) => {
//             coffeeList += `,${name}`;
//             console.log(coffeeList);
//             setTimeout(
//               (name) => {
//                 coffeeList += `,${name}`;
//                 console.log(coffeeList);
//               },
//               500,
//               "바닐라라떼"
//             );
//           },
//           500,
//           "카페모카"
//         );
//       },
//       500,
//       "아메리카노"
//     );
//   },
//   500,
//   "에스프레소"
// );

// 콜백 지옥에서 탈출하는 법
// 1번 티켓
// let coffeeList = "";

// const addValina = (name) => {
//   coffeeList += `, ${name}`;
//   console.log(coffeeList);
// };

// const addcafemoca = (name) => {
//   coffeeList += `, ${name}`;
//   console.log(coffeeList);
//   setTimeout(addValina, 500, "바닐라라떼");
// };

// const addAmericano = (name) => {
//   coffeeList += `, ${name}`;
//   console.log(coffeeList);
//   setTimeout(addcafemoca, 500, "카페모카");
// };

// const addEspress = (name) => {
//   coffeeList += name;
//   console.log(coffeeList);
//   setTimeout(addAmericano, 500, "아메리카노");
// };

// setTimeout(addEspress, 500, "에스프레소");

// 콜백함수 : 어떤 함수가 샐행 => 종료(또 다른 실행)
// 약속 => 이 함수가 정상적으로 실행된다면, 종료 => 함수 예약!

// 2번 티켓 Promise() => 클래스를 선언되었을 때
// new Promise(); //Class로 생성된 프로토타입 함수 = 붕어빵 틀

// let likePizza = true;

// const pizza = new Promise((resolve, reject) => {
//   if (likePizza) {
//     resolve("피자를 주문합니다!");
//   } else {
//     reject("피자를 주문하지 않습니다!");
//   }
// });

// pizza.then((result) => {
//   console.log(result);
// });

// const obj =
new Promise((resolve) => {
  setTimeout(() => {
    const name = "에스프레소";
    console.log(name);
    resolve(name);
  }, 500);
}).then((prevName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const name = `${prevName} 카페모카`;
      console.log(name);
      resolve(name);
    }, 500);
  }).then((prevName) => {
    const name = `${prevName} 카페라떼`;
    console.log(name);
  }, 500);
}); //then이 실행

// obj.then
