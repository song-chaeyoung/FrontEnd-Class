import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { useNavigate, useMatch, useParams, PathMatch } from "react-router-dom";
import { motion, AnimatePresence, delay, useScroll } from "framer-motion";
import { getMovies, GetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { useState } from "react";

const Container = styled.section`
  margin-top: 60px;
  width: 100%;
  height: 100%;
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
  position: relative;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  h4 {
    text-align: center;
    font-size: 16px;
    color: ${(props) => props.theme.red};
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

const ModalBox = styled(motion.div)`
  position: fixed;
  left: 25%;
  transform: translateX(-50%);
  /* transform: translate(-50%, -50%); */
  width: 50%;
  /* height: 80vh; */
  margin: 0 auto;
  background: ${(props) => props.theme.black.lighter};
  color: ${(props) => props.theme.white.darker};
  border-radius: 20px;
  overflow: hidden;
`;

const MovieCover = styled.img`
  width: 100%;
  height: 400px;
  /* height: 100%; */
  /* height: auto; */
  /* object-fit: cover; */
  /* background: linear-gradient(to bottom #000 transparent); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MovieTitle = styled.h3`
  position: relative;
  color: ${(props) => props.theme.white.darker};
  /* text-align: center; */
  font-size: 28px;
  /* margin-top: 10px; */
  padding: 20px;
  top: -80px;
  /* background: rgba(255, 255, 255, 0.5); */
`;

const MovieOverView = styled.p`
  padding: 20px;
  line-height: 2;
  font-size: 18px;
  position: relative;
  top: -60px;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

const boxVariants = {
  normal: { scale: 1 },
  hover: { scale: 1.3, y: -20, transition: { delay: 0.15 } },
};

const infoVariants = {
  hover: {
    opacity: 1,
  },
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
  const history = useNavigate();
  const movieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");
  const { movieId } = useParams();
  const { isLoading, data } = useQuery<GetMoviesResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });
  const { scrollY } = useScroll();

  const [index, setIndex] = useState<number>(0);
  const [leaving, setLeaving] = useState(false);

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

  const onBoxClick = (movieId: number) => {
    history(`/movies/${movieId}`);
  };

  const onOverlayClick = () => {
    history("/");
  };

  const clickedMovie =
    movieMatch?.params.movieId &&
    data?.results.find((it) => it.id + "" == movieMatch?.params.movieId);
  console.log(clickedMovie);
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
                transition={{ type: "tween", duration: 1, delay: 0.5 }}
                key={index}
              >
                {data?.results
                  .slice(index * offset, index * offset + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      $bgPhoto={data && makeImagePath(movie.backdrop_path)}
                      layoutId={`${movie.id}`}
                      variants={boxVariants}
                      initial="normal"
                      whileHover={"hover"}
                      onClick={() => onBoxClick(movie.id)}
                    >
                      <img />
                      <Info variants={infoVariants}>
                        <h4>{movie.original_title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {movieMatch && (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <ModalBox
                  layoutId={movieId}
                  style={{ top: scrollY.get() + 60 }}
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1, transform: "translate(-50%, -50%)" }}
                  // exit={{ opacity: 0 }}
                >
                  {clickedMovie && (
                    <>
                      <MovieCover
                        style={{
                          backgroundImage: `linear-gradient(to top, #000, transparent) ,url(
                            ${makeImagePath(clickedMovie.backdrop_path, "w500")}
                          )`,
                        }}
                      />
                      <MovieTitle>{clickedMovie.title}</MovieTitle>
                      <MovieOverView>{clickedMovie.overview}</MovieOverView>
                    </>
                  )}
                </ModalBox>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </Container>
  );
};

export default Home;
