import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import styled from "styled-components";
import Header from "../component/Header";
import Button from "../component/Button";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useDiary(id);

  const { onDelete } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (
      window.confirm("일기를 정말 삭제하시겠습니까? 다시 복구되지않습니다.")
    ) {
      onDelete(id);
      navigate("/");
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다.</div>;
  } else {
    return (
      <div>
        <Header
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          title={"일기 수정하기"}
          rightChild={
            <Button
              text={"삭제 하기"}
              type={"negative"}
              onClick={onClickDelete}
            />
          }
        />
      </div>
    );
  }
};

export default Edit;
