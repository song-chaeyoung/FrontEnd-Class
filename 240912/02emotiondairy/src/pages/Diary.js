import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import Viewer from "../component/Viewer";
import { getFormattedDate } from "../util";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const nevigate = useNavigate();

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const goBack = () => {
      nevigate(-1);
    };
    const goEdit = () => {
      nevigate(`/edit/${id}`);
    };

    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(parseInt(date)))} 기록`;
    return (
      <div>
        <Header
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          title={title}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        />
        <Viewer data={data} />
      </div>
    );
  }
};

export default Diary;
