import {
  motion,
  stagger,
  useMotionValue,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { del, linearGradient } from "framer-motion/client";
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
  height: 200vh;
`;

const Box = styled(motion.div)`
  position: fixed;
  top: 40%;
  left: 34%;
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

function App04() {
  const { scrollY, scrollYProgress } = useScroll();

  // useEffect(() => {
  //   scrollY.on("change", () => {
  //     console.log(scrollY.get(), scrollYProgress.get());
  //   });
  // }, [scrollY, scrollYProgress]);

  const x = useMotionValue(0);
  // const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotate = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0,210,238), rgb(0,83,238)",
      "linear-gradient(135deg, rgb(238,0,153), rgb(221,0,238)",
      "linear-gradient(135deg, rgb(0,238,155), rgb(238,178,0)",
    ]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2.5]);
  const height = useTransform(scrollYProgress, [0, 1], ["50px", "200px"]);

  // 예전문법
  // useEffect(() => {
  //   x.onChange(() => {});
  // }, [x]);

  // useEffect(() => {
  //   scale.on("change", () => console.log(scale.get()));
  // }, [x]);

  return (
    <>
      <GlobalStyle />
      <Wrapper style={{ background: gradient }}>
        {/* <button onClick={() => x.set(200)}>Click me</button> */}
        <Box style={{ x, scale, rotate, height }} drag="x" dragSnapToOrigin />
      </Wrapper>
    </>
  );
}

export default App04;
