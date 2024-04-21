import { useState } from 'react';
import { movies } from '../public/data/movies.jsx';
import MovieComponent from '../components/MovieComponent.jsx';
import MovieDetailComponent from '../components/MovieDetailComponent.jsx';
import './App.css';

function App() {
  const [movieData, setMovieData] = useState([]);

  useState(() => {
    const newMovieData = movies.results.map(movie => ({
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