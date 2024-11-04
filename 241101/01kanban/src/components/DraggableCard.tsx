import React, { memo } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Card = styled.div`
  /* width: 300px; */
  background: ${({ theme }) => theme.cardColor};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
`;

interface DraggableCardProps {
  todo: string;
  idx: number;
}

const DraggableCard = ({ todo, idx }: DraggableCardProps) => {
  // console.log(todo);
  return (
    <Draggable draggableId={todo} index={idx}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
