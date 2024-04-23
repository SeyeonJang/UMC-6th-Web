import '../styles/movieDetail.css'

function MovieDetailComponent({title, overview}) {
    return (
        <div className='movieDetailBox'>
            <div className='movieDetailBox__textDetailBox'>
                <p id='movieDetailBox__textDetailBox__title-detail'>{title}</p>
                <p id='movieDetailBox__textDetailBox__overview'>{overview}</p>
            </div>
        </div>
    )
}

export default MovieDetailComponent