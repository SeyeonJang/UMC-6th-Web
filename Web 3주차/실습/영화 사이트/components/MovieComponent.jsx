import '../styles/movie.css'

function MovieComponent({image, title, voteAverage}) {
    return (
        <div className='movieBox'>
            <img src={image} alt={title} className='movieBox__image'/>
            <div className='movieBox__bottomBox'>
                <div className='movieBox__bottomBox__paddingBox'></div>
                <div className='movieBox__bottomBox__textBox'>
                    <p id='movieBox__bottomBox__textBox__title'>{title}</p>
                    <p id='movieBox__bottomBox__textBox__vote_average'>{voteAverage}</p>
                </div>
                <div className='movieBox__bottomBox__paddingBox'></div>
            </div>
        </div>
    )
}

export default MovieComponent