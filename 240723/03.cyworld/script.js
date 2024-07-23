const menuHome = document.querySelector("#menu_home");
const menuGame = document.querySelector("#menu_game");
const menuJukebox = document.querySelector("#menu_jukebox");
const contentFrame = document.querySelector("#content_frame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #fff; color: #55b2e4;";
  menuGame.style = "background: #55b2e4; color: #fff;";
  menuJukebox.style = "background: #55b2e4; color: #fff;";
};
const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "background: #55b2e4; color: #fff;";
  menuGame.style = "background: #fff; color: #55b2e4;";
  menuJukebox.style = "background: #55b2e4; color: #fff;";
};
const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = "background: #55b2e4; color: #fff;";
  menuGame.style = "background: #55b2e4; color: #fff;";
  menuJukebox.style = "background: #fff; color: #55b2e4;";
};

console.log(contentFrame);

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);
