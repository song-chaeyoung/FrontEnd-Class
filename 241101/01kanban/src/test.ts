import { atom } from "recoil";

// const x = ["a", "b", "c", "d", "e"];

// x.splice(0, 1);
// // a

// x.splice(2, 0, "a");

// console.log(x);
// ["b", "c", "a", "d", "e"]

const toDos = {
  x: ["a", "b"],
  y: ["c", "d"],
};

Object.keys(toDos);
// ["x", "y"]

Object.values(toDos);
// [[x의배열], [y의 배열]]

// toDos[0] => ["a", "b"]
// toDos[0] => ["c", "d"]

// const test = [...toDos.x, ...toDos.y];
