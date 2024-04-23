import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieComponent from '../components/MovieComponent';
import MovieDetailComponent from '../components/MovieDetailComponent';

// App component
function App() {
  const [movieData, setMovieData] = useState([]);

  // fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=ko-KRx&page=1', {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzcwN2Q5ZWM3ZTY2OGE5OTk4NjUzYTdhNjMzMzU0NCIsInN1YiI6IjY2MjUxZDVjMjIxYmE2MDE2MzEzNDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fpocj-TMRKkVquXQ4yX-KtpHI7h6CZJVHAvDNdd_PO4'
          }
        });
        if (!response.ok) {
          throw new Error('Error : Not OK :(');
        }
        const data = await response.json();
        const movies = data.results;
        console.log('Number of movies:', movies.length); // 영화 개수 출력

        const newMovieData = movies.map(movie => ({
          id: movie.id,
          movieComponent: (
            <MovieComponent
              key={movie.id}
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              title={movie.title}
              voteAverage={movie.vote_average}
            />
          ),
          movieDetailComponent: (
            <MovieDetailComponent
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
            />
          )
        }));
        setMovieData(newMovieData);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <MovieContainer>

        {movieData.map(({ id, movieComponent, movieDetailComponent }) => (
          <MovieItem key={id} className="movieContainer__movieItem">
            {movieComponent}
            <MovieDetailWrapper className="movieContainer__movieItem__movieDetailWrapper">
              {movieDetailComponent}
            </MovieDetailWrapper>
          </MovieItem>
        ))}

      </MovieContainer>
    </Container>
  )
}

// Styled components
const Container = styled.div`
  padding: 30px;
  background-color: rgb(19, 19, 19);
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-y: scroll;
`;

const MovieContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  padding-top: 10px;
  gap: 20px;
  overflow-y: scroll;
  min-height: 100vh;
`;

const MovieItem = styled.div`
  flex-basis: calc(12% - 20px);
  display: flex;
  height: 332px;
  position: relative;
  justify-content: center;
  margin-bottom: 30px;

  &:hover .movieContainer__movieItem__movieDetailWrapper {
    display: flex;
  }
`;

const MovieDetailWrapper = styled.div`
  display: none;
`;

export default App;
