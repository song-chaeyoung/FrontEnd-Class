import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { motion, AnimatePresence, delay } from "framer-motion";
import { getMovies, GetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { useState } from "react";

const Container = styled.section`
  margin-top: 60px;
  width: 100%;
  height: 3000px;
  background: ${(props) => props.theme.black.lighter};
  overflow-x: hidden;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.red};
  font-size: 40px;
`;

const Slider = styled.div`
  width: 100%;
  position: relative;
  top: -100px;
  /* margin-top: 20px; */
`;

const Row = styled(motion.div)`
  width: 100%;
  position: absolute;
  top: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

interface BgPhoto {
  $bgPhoto: string | undefined;
}

const Box = styled(motion.div)<BgPhoto>`
  width: auto;
  height: 200px;
  /* background: ${(props) => props.theme.white.darker}; */
  background: url(${(props) => props.$bgPhoto}) center/cover no-repeat;
  font-size: 22px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Banner = styled.div<BgPhoto>`
  color: ${(props) => props.theme.white.darker};
  background: linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
    url(${(props) => props.$bgPhoto}) center/cover no-repeat;
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  font-size: 20px;
  width: 50%;
`;

const boxVariants = {
  normal: { scale: 1 },
  hover: { scale: 1.3, y: -20, transition: { delay: 0.15 } },
};

const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const Home = () => {
  const [index, setIndex] = useState<number>(0);
  const [leaving, setLeaving] = useState(false);
  const { isLoading, data } = useQuery<GetMoviesResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      const totalMovies = data.results.length;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const offset = 6;

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            $bgPhoto={data && makeImagePath(data?.results[8].backdrop_path)}
          >
            <Title>{data?.results[0].original_title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit={"exit"}
                transition={{ type: "tween", duration: 1 }}
                key={index}
              >
                {data?.results
                  .slice(index * offset, index * offset + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      $bgPhoto={data && makeImagePath(movie.backdrop_path)}
                      variants={boxVariants}
                      initial="normal"
                      whileHover={"hover"}
                    >
                      {movie.original_title}
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Container>
  );
};

export default Home;
