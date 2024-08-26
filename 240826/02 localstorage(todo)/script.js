const form = document.querySelector("form");
const todoItem = document.querySelector("#todoItem");
const todos = document.querySelector(".todos");

const getLocal = () => {
  let todosContainer;

  if (localStorage.getItem("todos") === null) todosContainer = [];
  else todosContainer = JSON.parse(localStorage.getItem("todos"));

  console.log(todosContainer);

  todosContainer.forEach((todo) => {
    const newLi = document.createElement("li");
    newLi.classList.add("todo");
    const newSpan = document.createElement("span");
    newSpan.className = "todo_content";
    newSpan.innerText = todo;

    const completeBtn = document.createElement("button");
    completeBtn.className = "completebtn";
    completeBtn.innerText = "완료";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deletebtn";
    deleteBtn.innerText = "삭제";

    newLi.append(newSpan, completeBtn, deleteBtn);
    // saveLocal(todo.value);
    todos.appendChild(newLi);
    todoItem.value = "";
  });
};

document.addEventListener("DOMContentLoaded", getLocal);

const saveLocal = (todo) => {
  let todos;

  if (localStorage.getItem("todos") === null) todos = [];
  else todos = JSON.parse(localStorage.getItem("todos"));

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (e) => {
  e.preventDefault();

  if (todoItem.value == "") {
    alert("todolist를 입력해주세요.");
  } else {
    const newLi = document.createElement("li");
    // newLi.className = "todo";
    newLi.classList.add("todo");
    const newSpan = document.createElement("span");
    newSpan.className = "todo_content";
    newSpan.innerText = todoItem.value;

    const completeBtn = document.createElement("button");
    completeBtn.className = "completebtn";
    completeBtn.innerText = "완료";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deletebtn";
    deleteBtn.innerText = "삭제";

    // newLi.appendChild(newSpan);
    // newLi.appendChild(deleteBtn);
    newLi.append(newSpan, completeBtn, deleteBtn);
    saveLocal(todoItem.value);
    todos.appendChild(newLi);
    todoItem.value = "";
  }
};

const removeLocal = (todo) => {
  let todosItem;
  if (localStorage.getItem("todos") === null) todosItem = [];
  else todosItem = JSON.parse(localStorage.getItem("todos"));

  const index = todosItem.indexOf(todo.children[0].innerText);
  todosItem.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todosItem));
  // todo.remove();
};

const manageTodo = (e) => {
  const whichBtn = e.target.classList[0];
  const todoItem = e.target.parentElement;
  if (whichBtn === "completebtn") {
    todoItem.children[0].classList.toggle("completed");
  } else if (whichBtn === "deletebtn") {
    // todoItem.remove();
    removeLocal(todoItem);
    todoItem.remove();
  }
};

todos.addEventListener("click", manageTodo);

form.addEventListener("submit", addTodo);
