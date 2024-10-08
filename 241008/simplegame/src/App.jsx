import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Box from "./components/Box";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul, li {
    list-style: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: 100vh;
`;

const BoxGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  display: inline-block;
  width: 80px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const choice = {
  rock: {
    name: "rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "scissors",
    img: "https://cdn4.vectorstock.com/i/1000x1000/72/78/scissor-cute-cartoon-vector-14507278.jpg",
  },
  paper: {
    name: "paper",
    img: "https://bdsdoc.com/wp-content/uploads/2023/09/Is-printer-paper-a4-or-letter.jpg",
  },
};

const App = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    const computerChoice = randomChoice();
    setComSelect(computerChoice);
    setResult(judgeMent(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArr = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArr.length);
    let final = itemArr[randomItem];
    return choice[final];
  };

  const judgeMent = (user, computer) => {
    if (user.name === computer.name) {
      return "TIE";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "WIN" : "LOSE";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "WIN" : "LOSE";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "WIN" : "LOSE";
    }
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BoxGroup>
          <Box title={"You"} item={userSelect} result={result} />
          <Box title={"Computer"} item={comSelect} result={result} />
        </BoxGroup>
        <BtnGroup>
          <Button onClick={() => play("scissors")}>가위</Button>
          <Button onClick={() => play("rock")}>바위</Button>
          <Button onClick={() => play("paper")}>보</Button>
        </BtnGroup>
      </Wrapper>
    </>
  );
};

export default App;
