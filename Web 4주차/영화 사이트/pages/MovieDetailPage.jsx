import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

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
        : <MovieDetailBox posterPath={movieDetail.backdrop_path} alt={movieDetail.title}>

            <MoviePoster posterPath={movieDetail.poster_path}/>

            <MovieContentWrapper>
                <MainText>{movieDetail.title}</MainText>
                <SubText>평점 {movieDetail.vote_average}</SubText>
                <SubText>개봉일 {movieDetail.release_date}</SubText>
                <SubText>줄거리</SubText>
                <OverViewBox>{movieDetail.overview}</OverViewBox>
            </MovieContentWrapper>
        
        </MovieDetailBox>
    );
}

const MovieDetailBox = styled.div`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-image: url('${props => `https://image.tmdb.org/t/p/w500/${props.posterPath}`}');
    background-size: cover;
    display: flex;
    flex-direction: row;
`;
const MoviePoster = styled.div`
    width: 500px;
    height: 350px;
    background-image: url('${props => `https://image.tmdb.org/t/p/w500/${props.posterPath}`}');
    background-size: cover;
`;

const MovieContentWrapper = styled.div`
    // TODO
`;

const MainText = styled.p``; // TODO : title

const SubText = styled.p``; // TODO : 평점, 개봉일ㅂ, 줄거리

const OverViewBox = styled.div``;

export default MovieDetailPage;
