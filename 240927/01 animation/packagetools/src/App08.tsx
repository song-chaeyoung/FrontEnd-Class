// 모달
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
  gap: 200px;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #00a5ff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

function App08() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper onClick={toggleClicked}>
        {/* <Box
          style={{
            justifyContent: clicked ? "center" : "flex-start",
            alignItems: clicked ? "center" : "flex-start",
          }}
        >
          <Circle></Circle>
        </Box> */}
        <Box>
          {clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 50 }} />
          ) : null}
        </Box>
        <Box>
          {clicked ? null : (
            <Circle layoutId="circle" style={{ borderRadius: 0 }} />
          )}
        </Box>
      </Wrapper>
    </>
  );
}

export default App08;
