// const content =
//   "Hi!✋ I'm chaeyoung. \n Front-End Developer. \n welcome to My Site :) ";

// const text = document.querySelector(".text");

// let i = 0;

// const typing = () => {
//   let txt = content[i++];
//   text.innerHTML += txt === "\n" ? "<br/>" : txt;

//   if (i > content.length) {
//     text.textContent = "";
//     i = 0;
//   }
// };

// setInterval(typing, 50);

const content =
  "Hi!✋ I'm chaeyoung. \n Front-End Developer. \n welcome to My Site :) ";

const text = document.querySelector(".text");
let i = 0;

let textInterval = setInterval(() => {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;

  if (i === content.length) clearInterval(textInterval);
}, 50);

// const content =
//   "Hi!✋ I'm chaeyoung. \n Front-End Developer. \n welcome to My Site :) ";

// const text = document.querySelector(".text");

// let i = 0;

// const typing = () => {
//   let txt = content[i++];
//   text.innerHTML += txt === "\n" ? "<br/>" : txt;

//   if (i > content.length) {
//     text.textContent = "";
//     i = 0;
//   }
// };

// let loopInterval = setInterval(typing, 50);
// clearInterval(loopInterval);

// let loopInterval = setInterval(() => {
//   const content =
//     "Hi!✋ I'm chaeyoung. \n Front-End Developer. \n welcome to My Site :) ";

//   const text = document.querySelector(".text");

//   let i = 0;

//   let txt = content[i++];
//   text.innerHTML += txt === "\n" ? "<br/>" : txt;

//   if (i > content.length) {
//     text.textContent = "";
//     i = 0;
//   }
// }, 50);

// clearInterval(loopInterval);

// const content =
//   "Hi!✋ I'm chaeyoung. \n Front-End Developer. \n welcome to My Site :) ";

// const text = document.querySelector(".text");

// let i = 0;

// const typing = () => {
//   let txt = content[i++];
//   text.innerHTML += txt === "\n" ? "<br/>" : txt;
// };

// setInterval(typing, 50);

// if (i > content.length) {
//   clearInterval(() => {
//     text.textContent = "";
//     i = 0;
//   });
// }

// const content =
// "Hi!✋ I'm chaeyoung. \n Front-End Developer. \n welcome to My Site :) ";

// const text = document.querySelector(".text");

// let i = 0;

// const typing = () => {
//     let txt = content[i++];
//     text.innerHTML += txt === "\n" ? "<br/>" : txt;
// };

// setInterval(typing, 50);

// if (i > content.length) {
//     clearInterval(typing);
// }

// const content =
//   "Hi!✋ I'm chaeyoung. \n Front-End Developer. \n welcome to My Site :) ";
// const text = document.querySelector(".text");
// let i = 0;

// let textInterval = setInterval(() => {
//   let txt = content[i++];
//   text.innerHTML += txt === "\n" ? "<br/>" : txt;

//   if (i > content.length) clearInterval(textInterval);
// }, 50);
