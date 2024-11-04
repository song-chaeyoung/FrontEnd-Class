import { atom } from "recoil";

interface ToDoState {
  [key: string]: string[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    todo: ["포트폴리오 하기", "흑백요리사 시청"],
    doing: ["리액트 복습하기", "운동하고", "NextJS 공부하기"],
    done: ["쉬기"],
  },
});
