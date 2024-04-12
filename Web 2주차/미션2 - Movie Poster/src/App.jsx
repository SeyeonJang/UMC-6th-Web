import { useState } from 'react'
import { movies } from '../public/data/movies.jsx';
import MovieComponent from '../components/MovieComponent.jsx';
import MovieDetailComponent from '../components/MovieDetailComponent.jsx';
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
    <div className='Container'>
      <div className='movieContainer'>

        {MovieComponents.map((component, index) => (
          <div key={index} className="movieItem">
          {component}
        </div>
      ))} 
      <MovieDetailComponent/>
      </div>
    </div>
  )
}

export default App