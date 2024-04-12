import '../styles/movieDetail.css'

function MovieDetailComponent({title, overview}) {
    return (
        <div className='movieDetailBox'>
            <div className='textDetailBox'>
                {/* <p id='title_detail'>{title}</p> */}
                <p id='title_detail'>타이틀</p>
                {/* <p id='overview'>{overview}</p> */}
                <p id='overview'>오버뷰</p>
            </div>
        </div>
    )
}

export default MovieDetailComponent