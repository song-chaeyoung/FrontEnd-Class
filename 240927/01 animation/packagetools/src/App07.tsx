// 슬라이드
import {
  motion,
  stagger,
  useMotionValue,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Source Sans 3", sans-serif;
    background: linear-gradient(135deg, #e09, #d0e);
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow: hidden;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 250px;
`;

const box = {
  initial: (back: boolean) => ({
    x: back ? -200 : 200,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exits: (back: boolean) => ({
    x: back ? 200 : -200,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

const boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App07() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const prevePlese = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };

  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <AnimatePresence mode="wait" custom={back}>
          {boxArray.map((it) =>
            it === visible ? (
              <Box
                custom={back}
                variants={box}
                initial="initial"
                animate="visible"
                exit="exits"
                key={visible}
              >
                {visible}
              </Box>
            ) : null
          )}
        </AnimatePresence>
        {/* <button>PREV</button> */}
        <Buttons>
          <Button onClick={prevePlese}>PREV</Button>
          <Button onClick={nextPlease}>NEXT</Button>
        </Buttons>
      </Wrapper>
    </>
  );
}

export default App07;
