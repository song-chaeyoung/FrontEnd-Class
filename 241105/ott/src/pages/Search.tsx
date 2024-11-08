import { useLocation, useSearchParams } from "react-router-dom";
import { GetMoviesResult, searchContents, searchGeneres } from "../api";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { makeImagePath } from "../utils";

const Container = styled.main`
  width: 100%;
  margin-top: 60px;
`;

const SearchBox = styled.div`
  width: 100%;
  padding: 10px;
`;

const MovieSection = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const MovieImg = styled.img`
  /* flex: 1; */
  width: 50%;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  gap: 10px;
`;

const MovieTitle = styled.h4`
  font-size: 30px;
  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white.lighter};
  padding: 10px;
  border-radius: 8px;
`;

const MovieOverview = styled.p`
  line-height: 150%;
  font-size: 18px;
  border-top: 1px solid ${(props) => props.theme.black.lighter};
  border-bottom: 1px solid ${(props) => props.theme.black.lighter};
  padding: 20px 0;
  margin-top: 10px;
`;

const MovieDate = styled.div`
  font-size: 18px;
  span {
    padding: 10px;
    display: block;
    background: #ffa300;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;

const MovieValue = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.theme.black.lighter};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MovieRate = styled.div`
  font-size: 18px;
  span {
    padding: 10px;
    display: block;
    background: #ffa300;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;

const RateNumbers = styled.div`
  font-size: 18px;
  span {
    padding: 10px;
    display: block;
    background: #ffa300;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;

const Search = () => {
  const { search } = useLocation();
  // const key = search.split("=")[1];
  const keyword = new URLSearchParams(search).get("keyword");

  const content = searchContents(keyword);
  const { data: movieData, isLoading: movieLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["multicontents", keyword],
      queryFn: () => searchContents(keyword),
    });

  const { data: generData, isLoading: genereLoading } = useQuery({
    queryKey: ["getGeneres"],
    queryFn: () => searchGeneres,
  });

  return (
    <Container>
      {movieLoading ? (
        <div>Loading. . . </div>
      ) : (
        <>
          {movieData?.results.map((movie, idx) => (
            <SearchBox key={idx}>
              <MovieSection>
                <MovieImg src={makeImagePath(movie.backdrop_path)} />
                <MovieInfo>
                  <MovieTitle>
                    {movie.title} ({movie.original_title})
                  </MovieTitle>
                  <MovieOverview>{movie.overview}</MovieOverview>
                  <MovieValue>{movie.adult ? "18+" : "ALL"}</MovieValue>
                  <MovieDate>
                    <span>Release {movie.release_date}</span>
                  </MovieDate>
                  <MovieRate>
                    <span>Rate {movie.vote_average?.toFixed(2)}</span>
                  </MovieRate>
                  <RateNumbers>
                    <span>
                      Members {movie.vote_count?.toLocaleString("ko-kr")}
                    </span>
                  </RateNumbers>
                </MovieInfo>
              </MovieSection>
            </SearchBox>
          ))}
        </>
      )}
    </Container>
  );
};

export default Search;
