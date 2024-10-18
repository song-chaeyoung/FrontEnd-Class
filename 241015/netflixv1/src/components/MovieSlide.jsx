import React from "react";
import MovieCard from "./MovieCard";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Wrapper = styled.div`
  width: 100vw;
  /* display: flex;
  justify-content: center; */
`;

const MovieSlide = ({ movies }) => {
  const { results } = movies;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Wrapper>
      {movies?.results && (
        <Carousel responsive={responsive} infinite={true} draggable={true}>
          {movies.results.map((it, idx) => (
            <MovieCard key={idx} item={it} />
          ))}
        </Carousel>
      )}
    </Wrapper>
  );
};

export default MovieSlide;
