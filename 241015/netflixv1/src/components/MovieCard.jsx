import React from "react";
import styled from "styled-components";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.6);
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
  }
`;

// const Overlay = styled.div`
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.6);
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1;
//   border: 1px solid #f00;
// `;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  width: 100%;
  position: absolute;
  top: 20px;
  left: 10px;
  font-size: 20px;
`;

const Adult = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(220, 20, 60, 0.8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  /* border: 1px solid #fff; */
  font-size: 14px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
`;

const InfoGroup = styled.div`
  width: 100%;
  position: absolute;
  /* left: 10px; */
  bottom: 10px;
  padding: 0 10px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
`;

const Genre = styled.div`
  display: flex;
  gap: 6px;
`;

const Vote = styled.span``;

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);

  return (
    <Wrapper>
      <Img
        src={`https://media.themoviedb.org/t/p/original${item.backdrop_path}`}
        alt="thumbnail"
      />
      <Title>{item.title}</Title>
      <Adult>{item.adult ? "성인" : "전체"}</Adult>

      <InfoGroup>
        <Genre>
          {item.genre_ids.map((id, idx) => (
            <Badge key={idx} className="badge">
              {genreList.find((list) => list.id === id).name}
            </Badge>
          ))}
        </Genre>
        <Vote>{item.vote_average}</Vote>
      </InfoGroup>
    </Wrapper>
  );
};

export default MovieCard;
