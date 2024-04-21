import React, { useState, useEffect } from 'react';
// import { movies } from '../public/data/movies.jsx';
import MovieComponent from '../components/MovieComponent.jsx';
import MovieDetailComponent from '../components/MovieDetailComponent.jsx';
import './App.css';

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
    <div className='Container'>
      <div className='movieContainer'>

        {movieData.map(({ id, movieComponent, movieDetailComponent }) => (
          <div key={id} className="movieItem">
            {movieComponent}
            <div className="movieDetailWrapper"> {/* 클래스 이름 변경 */}
              {movieDetailComponent}
            </div>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default App