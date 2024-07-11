const listicon = document.querySelector(".mobile_list");
const listbar = document.querySelector(".list_bar");

listicon.addEventListener("click", () => {
  listbar.classList.toggle("active");
  listicon.classList.toggle("active");
});
