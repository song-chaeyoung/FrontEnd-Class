const path = anime.path(".svg path");
anime({
  targets: ".circle",
  translateX: path("x"),
  translateY: path("y"),
  duration: 8000,
  easing: "linear",
  loop: true,
});
