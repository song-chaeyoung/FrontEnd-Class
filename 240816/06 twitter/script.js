const tweetBtn = document.querySelector("#tweetBtn");

tweetBtn.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  tweetText += `#cy #html #fedevelop`;

  const encodedText = encodeURIComponent(tweetText);

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;

  window.open(tweetURL);
});
