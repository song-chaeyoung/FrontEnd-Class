import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";

const Container = styled.div`
  background: ${({ theme }) => theme.boardColor};
  padding: 30px 10px 20px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;
  text-transform: uppercase;
`;

interface BoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  return (
    <Container>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <div ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((todo, idx) => (
              <DraggableCard key={idx} todo={todo} idx={idx} />
            ))}
            {magic.placeholder}
          </div>
        )}
      </Droppable>
    </Container>
  );
};

export default Board;
