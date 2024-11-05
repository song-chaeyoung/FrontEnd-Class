import React, { memo } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

interface DraggingProps {
  $isDragging: boolean;
}

const Card = styled.div<DraggingProps>`
  /* width: 300px; */
  /* background: ${({ theme }) => theme.cardColor}; */
  background: ${(props) =>
    props.$isDragging ? "tomato" : props.theme.cardColor};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: ${(props) => props.$isDragging && "0px 2px 5px rgba(0,0,0,0.3)"};
`;

interface DraggableCardProps {
  todoId: number;
  todoText: string;
  idx: number;
}

const DraggableCard = ({ todoId, todoText, idx }: DraggableCardProps) => {
  return (
    <Draggable key={todoId} draggableId={todoId + ""} index={idx}>
      {(magic, snapshot) => (
        <Card
          $isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {todoText}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
