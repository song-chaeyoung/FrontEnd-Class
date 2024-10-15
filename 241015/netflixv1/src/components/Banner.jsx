import React from "react";
import styled from "styled-components";

const BgImg = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  color: #fff;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
`;

const MovieTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const MovieOverView = styled.p`
  line-height: 150%;
  width: 800px;
  font-size: 20px;
`;

const Banner = ({ movie }) => {
  console.log(movie);
  return (
    <BgImg>
      <Img
        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
      />
      <BannerInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieOverView>{movie.overview}</MovieOverView>
      </BannerInfo>
    </BgImg>
  );
};

export default Banner;
