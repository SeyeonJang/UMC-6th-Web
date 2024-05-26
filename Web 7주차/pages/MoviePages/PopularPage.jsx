import MoviesPaginationFetchComponent from '../../components/MoviesPaginationFetechComponent';

function PopularPage() {
    // const address = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1';
    const address = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR';

    return(
        <MoviesPaginationFetchComponent address={address}/>
    );
}

export default PopularPage;