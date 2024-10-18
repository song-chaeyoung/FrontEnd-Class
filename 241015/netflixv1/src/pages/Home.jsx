import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { ClipLoader } from "react-spinners";

const Wrapper = styled.main`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  margin: 20px 10px;
  font-size: 26px;
  background: crimson;
  width: fit-content;
  padding: 6px 10px;
  border-radius: 8px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovie, topRatedMovie, upComingMovie, loading } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <ClipLoader loading={loading} color="#f00" size={150} />
      </Wrapper>
    );
  } else {
    return (
      <div>
        <Banner movie={popularMovie.results[0]} />
        {/* <Banner movie={popularMovie.results && popularMovie.results[0]} /> */}
        <Title>Popular Movie</Title>
        <MovieSlide movies={popularMovie} />
        <Title>TopRated Movie</Title>
        <MovieSlide movies={topRatedMovie} />
        <Title>Upcoming Movie</Title>
        <MovieSlide movies={upComingMovie} />
      </div>
    );
  }
};

export default Home;
