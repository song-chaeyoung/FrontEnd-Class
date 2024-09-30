import { motion, stagger } from "framer-motion";
import { del } from "framer-motion/client";
import { useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

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

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const boxVariants = {
  hover: { scale: 2, rotateZ: 90 },
  click: { scale: 1.5, borderRadius: "50%" },
};

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  overflow: hidden;
`;

function App03() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  console.log(biggerBoxRef);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
          <Box
            drag
            dragSnapToOrigin
            dragElastic={2}
            dragConstraints={biggerBoxRef}
            variants={boxVariants}
            whileHover={"hover"}
            whileTap={"click"}
          />
        </BiggerBox>
      </Wrapper>
    </>
  );
}

export default App03;
