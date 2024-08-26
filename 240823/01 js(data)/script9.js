// const display = (quotes) => {
//   const randomNum = Math.floor(Math.random() * quotes.length) ;

//   const result = document.querySelector("#result");
//   result.innerHTML = `
//         <div class="quote">${quotes[randomNum].quote}</div>
//         <div class="author">${quotes[randomNum].author}</div>
//   `;
// };

// const init = async () => {
//   const response = await fetch("https://dummyjson.com/quotes");

//   const quotes = await response.json();
//   display(quotes.quotes);
// };

// init();

const quoteURL = "https://dummyjson.com/quotes";

fetch(quoteURL)
  .then((response) => response.json())
  .then((data) => {
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 30);
    result.querySelector(".quote").innerText = data.quotes[random].quote;
    result.querySelector(
      ".author"
    ).innerHTML = ` - ${data.quotes[random].author} -`;
  })
  .catch((err) => console.log(err));
