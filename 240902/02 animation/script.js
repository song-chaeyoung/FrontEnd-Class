anime({
  targets: "li",
  translateX: 300,
  easing: "linear",
  loop: true,
  direction: "alternate",
  delay: anime.stagger(100),
  endDelay: anime.stagger(100),

  // delay: (el, i) => {
  //   return i * 150;
  // },
  // endDelay: (el, i) => {
  //   return i * 150;
  // },
});
