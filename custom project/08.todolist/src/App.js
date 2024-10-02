import React, { useEffect, useReducer, useRef, useState } from "react";
import GlobalStyle from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import Button from "./component/Button";

const Wraaper = styled.div`
  text-align: center;
  margin: 10px 0 100px;
`;

const AddBtn = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 60px;
  height: 60px;
  background: var(--main-purple);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  i {
    font-size: 30px;
    color: #fff;
  }
  &:hover {
    opacity: 0.7;
  }
`;

// const mockData = [
//   {
//     id: 0,
//     content: "TodoList 만들기",
//     date: "2024. 9. 23.",
//     isChecked: false,
//   },
//   {
//     id: 1,
//     content: "Custom 만들기",
//     date: "2024. 9. 20.",
//     isChecked: false,
//   },
//   {
//     id: 2,
//     content: "React 공부하기",
//     date: "2024. 9. 23.",
//     isChecked: true,
//   },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      const newState = [action.newItem, ...state];
      localStorage.setItem("TodoCy", JSON.stringify(newState));
      return newState;
    }
    case "UPDATE_CONTENT": {
      const newState = state.map((it) =>
        it.id === action.targetId
          ? {
              ...it,
              content: action.newContent,
            }
          : it
      );
      localStorage.setItem("TodoCy", JSON.stringify(newState));
      return newState;
    }
    case "TOGGLE_CHECK": {
      const newState = state.map((it) =>
        it.id === action.targetId
          ? {
              ...it,
              isChecked: !it.isChecked,
            }
          : it
      );
      localStorage.setItem("TodoCy", JSON.stringify(newState));
      return newState;
    }
    case "DELETE": {
      const newState = state.filter((it) => it.id !== action.targetId);
      localStorage.setItem("TodoCy", JSON.stringify(newState));
      return newState;
    }
    case "INIT": {
      const savedData = localStorage.getItem("TodoCy");
      return savedData ? JSON.parse(savedData) : state;
    }
    default:
      return state;
  }
};

export const TodoDataContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App() {
  const [todo, dispatch] = useReducer(reducer, []);
  const [modal, setModal] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const idRef = useRef(0);

  useEffect(() => {
    const rowData = localStorage.getItem("TodoCy");

    if (!rowData) {
      setIsDataLoaded(true);
      return;
    }

    const localData = JSON.parse(rowData);
    if (localData.length === 0) {
      setIsDataLoaded(true);
      return;
    }

    localData.sort((a, b) => Number(b.id) - Number(a.id));
    idRef.current = localData[0].id + 1;

    dispatch({
      type: "INIT",
      data: localData,
    });
    setIsDataLoaded(true);
  }, []);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        date: new Date().toLocaleDateString(),
        isChecked: false,
      },
    });
    idRef.current += 1;
  };

  const onUpdateContent = (targetId, newContent) => {
    dispatch({
      type: "UPDATE_CONTENT",
      targetId,
      newContent,
    });
  };

  const onToggleCheck = (targetId) => {
    dispatch({
      type: "TOGGLE_CHECK",
      targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  const modalEvent = () => {
    setModal(!modal);
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        {/* <Search /> */}
        <TodoList
          todo={todo}
          onUpdateContent={onUpdateContent}
          onToggleCheck={onToggleCheck}
          onDelete={onDelete}
        />
        <AddBtn onClick={modalEvent}>
          <i className="fa-solid fa-plus"></i>
        </AddBtn>
        {modal ? (
          <TodoEditor
            onCreate={onCreate}
            onClick={modalEvent}
            onCancel={modalEvent}
          />
        ) : null}
      </div>
    </>
  );
}

export default App;
