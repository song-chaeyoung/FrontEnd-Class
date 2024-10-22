import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Loading = styled.div`
  /* margin-top: 100px; */
  font-size: 18px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  color: #fff;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ItemGroup = styled.div`
  width: 50vw;
  height: fit-content;
  border: 1px solid #fff;
  display: flex;
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 30px;
  margin: 15px 0 20px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 22px;
  line-height: 30px;
`;

const Img = styled.div`
  flex: 1;
  background: url(${({ background }) => background}) center/cover no-repeat;
  width: 100%;
  height: 700px;
`;

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      rating
      medium_cover_image
      large_cover_image
      isLiked @client
    }
  }
`;

const Movie = () => {
  const { id } = useParams();
  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });

  console.log(cache);

  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };

  if (loading) {
    return <Loading>로딩중...</Loading>;
  } else {
    // console.log(data);
    return (
      <Container>
        <ItemGroup>
          <Column>
            <Title>{data.movie.title}</Title>
            <Subtitle>💫 {data.movie.rating}</Subtitle>
            <Button onClick={onClick}>
              {data.movie.isLiked ? "Like" : "UnLike"}
            </Button>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              cum, ipsum distinctio dolorem excepturi impedit ducimus modi?
              Culpa nostrum aspernatur rem? Corporis nihil nisi cumque cum
              ratione ex animi tenetur.
            </Description>
          </Column>
          <Img background={data.movie.large_cover_image} />
        </ItemGroup>
      </Container>
    );
  }
};

export default Movie;
