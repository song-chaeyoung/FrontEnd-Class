import React from "react";
import { useApolloClient, gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  height: 30vh;
  color: #fff;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;

const Loading = styled.div`
  font-size: 18px;
  width: 100%;
  text-align: center;
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  width: 60vw;
  margin-top: -100px;
`;

const PosterContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 7px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const PosterBg = styled.div`
  background: url(${({ $background }) => $background}) center/cover no-repeat;
  width: 100%;
  height: 100%;
`;

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      id
      title
      medium_cover_image
    }
  }
`;

const Movies = () => {
  // const [movies, setMovies] = useState();
  // const client = useApolloClient();

  // useEffect(() => {
  //   client
  //     .query({
  //       query: gql`
  //         {
  //           allMovies {
  //             title
  //             id
  //           }
  //         }
  //       `,
  //     })
  //     .then(({ data }) => setMovies(data.allMovies));
  // }, [client]);

  const { data, loading } = useQuery(ALL_MOVIES);

  // console.log(data);
  return (
    <Container>
      <Header>
        <Title>Movies List</Title>
      </Header>
      {loading ? (
        <Loading>로딩중...</Loading>
      ) : (
        <MoviesGrid>
          {data.allMovies.map((movie) => (
            <PosterContainer key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <PosterBg $background={movie.medium_cover_image} />
              </Link>
            </PosterContainer>
          ))}
        </MoviesGrid>
      )}
    </Container>
  );
};

export default Movies;
