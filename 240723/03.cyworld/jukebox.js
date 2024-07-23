const songs = document.querySelectorAll(".album_table_song");

for (let song of songs) {
  const play = song.querySelector(".fa-caret-right");
  const pause = song.querySelector(".fa-pause");
  play.addEventListener("click", (e) => {
    console.log(e);
    e.target.closest("td").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").pause();
  });
}

// e 객체 // target || cuttentTarget
// cuttentTarget : 이벤ㅌ 핸들러가 부착되어진 요소를 의미!
// target : 실제 이벤트가 발생된 요소를 의미
