import api from "./env.js";

const form = document.querySelector("form");
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${api.API_KEY}&language=ko&page=1`;

const movieDetail = (e) => {
  const { id } = e.target.parentElement;
  // console.log(id);
  const detailUrl = `https://www.themoviedb.org/movie/${id}`;
  window.open(detailUrl, "_blank");
};

const createBlock = ({
  id,
  poster_path,
  original_title,
  title,
  vote_average,
  release_date,
}) => {
  const parent = document.querySelector(".content");
  const movie = document.createElement("div");
  const poster = document.createElement("img");
  const detail = document.createElement("div");
  const info = document.createElement("div");
  const data = document.createElement("div");
  const rate = document.createElement("div");
  const h3 = document.createElement("h3");

  movie.className = "movie";
  detail.className = "detail";
  info.className = "info";
  data.className = "data";
  rate.className = "rate";

  movie.id = id;
  poster.src = `https://image.tmdb.org/t/p/original${poster_path}`;
  h3.innerText = `${original_title} (${title})`;
  data.innerText = `${release_date}`;
  rate.innerText = `⭐️⭐️⭐️ ${vote_average}`;

  info.append(data, rate);
  detail.append(info, h3);
  movie.append(poster, detail);
  parent.append(movie);

  poster.addEventListener("click", movieDetail);
};

fetch(URL)
  .then((response) => response.json())
  .then(({ results }) => {
    results.forEach((movie) => {
      createBlock(movie);
    });
  });

const searchMovie = (e) => {
  e.preventDefault();

  const input = form.querySelector("input");
  const { value: keyword } = input;
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${api.API_KEY}&query=${keyword}&include_adult=false&language=ko&page=1`;

  const removeAll = () => {
    const moives = document.querySelectorAll(".movie");
    console.log(moives);
    moives.forEach((movie) => {
      movie.remove();
    });
  };

  if (keyword) {
    removeAll();
    fetch(searchURL)
      .then((response) => response.json())
      .then(({ results }) => {
        results.forEach((movie) => {
          createBlock(movie);
        });
      });
  } else {
    alert("해당 검색어에 해당하는 결과를 찾을 수 없습니다.");
  }
};

form.addEventListener("submit", searchMovie);

// 추천영화, 장르, 예고편(유튜브), 리뷰, 개봉예정작, TV드라마
