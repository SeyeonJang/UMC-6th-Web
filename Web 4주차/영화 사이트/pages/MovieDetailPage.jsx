import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SpinnerComponent from '../components/SpinnerComponent';

function MovieDetailPage() {
    const { state } = useLocation();
    const [movieDetail, setMovieDetail] = useState(null);

    useEffect(() => {
        if (state && state.id) {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzcwN2Q5ZWM3ZTY2OGE5OTk4NjUzYTdhNjMzMzU0NCIsInN1YiI6IjY2MjUxZDVjMjIxYmE2MDE2MzEzNDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fpocj-TMRKkVquXQ4yX-KtpHI7h6CZJVHAvDNdd_PO4'
                }
            };

            fetch(`https://api.themoviedb.org/3/movie/${state.id}?language=ko-KR`, options)
                .then(response => response.json())
                .then(data => {
                    setMovieDetail(data);
                })
                .catch(err => console.error(err));
        }
    }, [state]);

    return (
        !movieDetail 
        ? <SpinnerComponent/>
        :
        <div>
            <h1>{movieDetail.title}</h1>
            <p>{movieDetail.overview}</p>
        </div>
    );
}

export default MovieDetailPage;
