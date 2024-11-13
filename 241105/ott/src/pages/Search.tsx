import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  GetMoviesResult,
  getReviews,
  searchContents,
  searchGeneres,
  getVideos,
  Movie,
} from "../api";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { makeImagePath } from "../utils";
import YouTube from "react-youtube";
import Pagination from "react-js-pagination";

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

const ImgBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.black.lighter};
  border-radius: 8px;
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

const Generes = styled.div`
  background: #ffa300;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 8px;
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

const ReviewSection = styled.div`
  background: ${(props) => props.theme.white.darker};
  color: ${(props) => props.theme.black.lighter};
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  li {
    padding: 10px;
  }
`;

const ReviewAuthor = styled.div`
  background: ${(props) => props.theme.white.lighter};
  /* color: ${(props) => props.theme.white.lighter}; */
  width: fit-content;
  padding: 4px 10px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const ReviewContent = styled.div`
  font-size: 14px;
`;

const VideoSection = styled.div`
  margin-top: 30px;
`;

const StyledPagination = styled.div`
  margin: 20px auto;
  /* background: crimson; */
  width: fit-content;
  padding: 20px;
  border-radius: 10px;
  ul {
    display: flex;
    gap: 10px;
    li {
      a {
        display: inline-block;
        font-size: 20px;
        color: ${(props) => props.theme.black.lighter};
        transition: all 0.3s;
        &:hover {
          color: ${(props) => props.theme.red};
        }
      }
    }
  }
`;

interface GenereItem {
  id: number;
  name: string;
}

interface ReviewContens {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: string;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

interface VideoContent<T> {
  [key: number]: T[];
}

const Search = () => {
  const [videos, setVideos] = useState<VideoContent<string>>({});
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
    queryFn: searchGeneres,
  });

  const ids = movieData?.results.map((it) => it.id);

  const { data: reviewData, isLoading: reviewLoading } = useQuery({
    queryKey: ["getReviews", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getReviews(id))) : Promise.resolve([]),
    enabled: !!ids,
  });

  const { data: videoData, isLoading: videoLoading } = useQuery({
    queryKey: ["getVideos", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getVideos(id))) : Promise.resolve([]),
    enabled: !!ids,
  });

  useEffect(() => {
    if (movieData && videoData) {
      movieData.results.forEach((movie) => {
        getVideos(movie.id).then((data) => {
          if (data.results) {
            const videoIds = data.results.map((video: any) => video.key);
            setVideos((prev) => ({
              ...prev,
              [movie.id]: videoIds,
            }));
          }
        });
      });
    }
  }, [movieData, videoData]);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviePerPage] = useState(2);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  const currentMovies: Movie[] =
    movieData?.results.slice(indexOfFirstMovie, indexOfLastMovie) || [];
  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  return (
    <Container>
      {movieLoading ? (
        <div>Loading. . . </div>
      ) : (
        <>
          {currentMovies?.map((movie, idx) => (
            <SearchBox key={idx}>
              <MovieSection>
                {movie.backdrop_path ? (
                  <MovieImg src={makeImagePath(movie.backdrop_path)} />
                ) : (
                  <ImgBox>Ready for Images</ImgBox>
                )}

                <MovieInfo>
                  <MovieTitle>
                    {movie.title} ({movie.original_title})
                  </MovieTitle>
                  <MovieOverview>{movie.overview}</MovieOverview>
                  <MovieValue>{movie.adult ? "18+" : "ALL"}</MovieValue>
                  <Generes>
                    {movie.genre_ids
                      .map(
                        (id) =>
                          generData?.genres.find(
                            (item: GenereItem) => item.id === id
                          ).name
                      )
                      .join(", ")}
                  </Generes>
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
              <ReviewSection>
                <h3>Movie Reviews 🥸</h3>
                {reviewLoading ? (
                  <div>Reveiw Loading...</div>
                ) : (
                  <ul>
                    {reviewData && reviewData[idx].results ? (
                      reviewData[idx].results.map((review: ReviewContens) => (
                        <li key={review.id}>
                          <ReviewAuthor>{review.author}</ReviewAuthor>
                          <ReviewContent>{review.content}</ReviewContent>
                        </li>
                      ))
                    ) : (
                      <li>No Reviews...</li>
                    )}
                  </ul>
                )}
              </ReviewSection>
              <VideoSection>
                {videos[movie.id]?.length > 0 ? (
                  <YouTube
                    videoId={videos[movie.id][0]}
                    opts={{ width: "100%", height: "600px" }}
                  />
                ) : (
                  <div>No Availalbe</div>
                )}
              </VideoSection>
            </SearchBox>
          ))}
          <StyledPagination>
            <Pagination
              onChange={handlePageChange}
              activePage={currentPage}
              itemsCountPerPage={moviesPerPage}
              totalItemsCount={movieData?.results.length || 0}
              pageRangeDisplayed={5}
            />
          </StyledPagination>
        </>
      )}
    </Container>
  );
};

export default Search;
