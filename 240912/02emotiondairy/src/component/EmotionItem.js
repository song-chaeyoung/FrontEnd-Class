import React from "react";
import styled from "styled-components";

const EmotionContent = styled.div`
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & img {
    width: 50%;
  }
  & span {
    font-size: 18px;
  }
  &.EmotionItem_off {
    background: #ececec;
  }
  &.EmotionItem_on_1 {
    background: #64c964;
    color: #fff;
  }
  &.EmotionItem_on_2 {
    background: #9dd772;
    color: #fff;
  }
  &.EmotionItem_on_3 {
    background: #fdce17;
    color: #fff;
  }
  &.EmotionItem_on_4 {
    background: #fd8446;
    color: #fff;
  }
  &.EmotionItem_on_5 {
    background: #fd565f;
    color: #fff;
  }
`;

const EmotionItem = ({ id, img, name, isSelected, onClick }) => {
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <EmotionContent
      className={isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`}
      onClick={handleOnClick}
    >
      <img src={img} alt={`emotion${id}`} />
      <span>{name}</span>
    </EmotionContent>
  );
};

export default React.memo(EmotionItem);
