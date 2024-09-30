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

const Grid = styled(motion.div)`
  width: 50vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  & > div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  /* width: 400px; */
  height: 400px;
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxArray = ["1", "2", "3", "4"];

function App09() {
  // const [clicked, setClicked] = useState(false);
  const [id, setId] = useState<null | string>(null);

  // const toggle = () => {
  //   setClicked((prev) => !prev);
  // };

  // const setID = () => {};

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Grid>
          {boxArray.map((i) => (
            <Box onClick={() => setId(i)} key={i} layoutId={i} />
          ))}
        </Grid>
        <AnimatePresence>
          {id ? (
            <Overlay
              onClick={() => setId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Box layoutId={id} style={{ width: 400, height: 400 }} />
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default App09;
