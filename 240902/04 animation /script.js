// stagger() => 특정 패턴 이벤트 혹은 스타일 혹은 이동 등을 반복적으로 실행~
// timeline() => 어떤 순서에 맞춰서 무언가를 차례차례 실행

const tl = anime.timeline({
  easing: "linear",
  duration: 1000,
});

tl.add({
  targets: ".circle1",
  translateX: 500,
})
  .add({
    targets: ".circle1",
    translateY: 500,
  })
  .add({
    targets: ".circle1",
    translateX: 0,
  })
  .add({
    targets: ".circle1",
    translateY: 0,
  })
  .add({
    targets: ".circle2",
    scale: 1.5,
    rotate: 360,
    borderRadius: 0,
  });
