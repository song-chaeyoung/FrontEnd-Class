import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Editor from "../component/Editor";

const Edit = () => {
  const navigate = useNavigate();
  const goToDiary = (e) => {
    if (e.target === "value") navigate("/Dairy");
    else {
      alert("미가입 회원은 다이어리 리뷰 불가!");
      navigate("/");
    }
  };
  return (
    <div>
      {/* <Link to={"/Diary"}>다이어리페이지</Link> */}
      {/* <button onClick={goToDiary}>다이어리 페이지</button> */}
      <Editor />
    </div>
  );
};

export default Edit;
