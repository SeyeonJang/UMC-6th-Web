import { useState } from 'react'
import { movies } from '../public/data/movies.jsx';
import MovieComponent from '../components/MovieComponent.jsx';
import './App.css';

function App() {
  // const newImagePath = originalImagePath.replace("/", "https://image.tmdb.org/t/p/w500/");
  const [MovieComponents, setMovieComponents] = useState([]);

  const generateMovieComponents = () => {
    const newMovieComponents = movies.results.map(movie => (
      <MovieComponent
        key={movie.id}
        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        title={movie.title}
        voteAverage={movie.vote_average}
      />
    ));  
    setMovieComponents(newMovieComponents);
  }

  useState(() => {
    generateMovieComponents();
  }, []);

  return (
    <>
      <div className='movieContainer'>
        {MovieComponents}
      </div>
    </>
  )
}

export default App