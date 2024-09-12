import React, { useState } from "react";
import "./TodoList.css";
import Todoitem from "./Todoitem";

const Todolist = ({ todo }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="Todolist">
      <h4>Todo List</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {todo.map((it) => (
          <Todoitem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default Todolist;
