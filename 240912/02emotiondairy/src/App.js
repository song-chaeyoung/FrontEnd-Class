// import emotion1 from "./emotion/emotion1.png";
// import emotion2 from "../public/emotion1/emotion1.png";
// 이렇게 찾아오는건 불가능
// `${process.env.PUBLIC_URL}/img1/emotion2.png`

import React, { useReducer, useRef, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";

const Wrapper = styled.div`
  padding: 20px;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? { ...action.data } : item
      );
    }
    case "DELETE": {
      return state.filter((item) => String(item.id) !== String(action.data.id));
    }

    default: {
      return state;
    }
  }
};

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime(),
    content: "mock1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime(),
    content: "mock2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date().getTime(),
    content: "mock3",
    emotionId: 3,
  },
];

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
console.log(DiaryDispatchContext);

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetID, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetID,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetID) => {
    dispatch({
      type: "DELETE",
      targetID,
    });
  };

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={(onCreate, onDelete, onUpdate)}>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
            {/* <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/new"}>New</Link>
          <Link to={"/edit"}>Edit</Link>
          <Link to={"/diary"}>Diary</Link>
        </div> */}
          </Wrapper>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
};

export default App;
