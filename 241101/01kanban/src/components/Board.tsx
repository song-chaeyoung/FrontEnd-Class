import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import { ToDo, toDoState } from "../atoms";

const Container = styled.div`
  width: 100%;
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

interface AreaProps {
  $isDraggingOver: boolean;
  $isDraggingFromThis: boolean;
}

const Area = styled.div<AreaProps>`
  /* background: #1e90ff; */
  width: 100%;
  background: ${(props) =>
    props.$isDraggingOver
      ? "pink"
      : props.$isDraggingFromThis
      ? "red"
      : "#1e90ff"};
  padding: 10px;
  flex: 1;
  border-radius: 8px;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: none;
  &:focus {
    outline: none;
  }
`;

interface BoardProps {
  toDos: ToDo[];
  boardId: string;
}

interface FormProps {
  toDo: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<FormProps>();

  const onVaild = ({ toDo }: FormProps) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };
    // console.log(toDo);
    setToDos((allBoards) => {
      return { ...allBoards, [boardId]: [...allBoards[boardId], newTodo] };
    });
    setValue("toDo", "");
  };

  // const inputRef = useRef<HTMLInputElement>(null);
  // const onClick = () => {
  //   inputRef.current?.focus();
  //   setTimeout(() => {
  //     inputRef.current?.blur();
  //   }, 5000);
  // };

  return (
    <Container>
      {/* <input ref={inputRef} type="text" placeholder="Todo Write" />
      <button onClick={onClick}>Click</button> */}
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onVaild)}>
        <Input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add Task On ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            $isDraggingOver={snapshot.isDraggingOver}
            $isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((todo, idx) => (
              <DraggableCard
                key={todo.id}
                todoId={todo.id}
                todoText={todo.text}
                idx={idx}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Container>
  );
};

export default Board;
