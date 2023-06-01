import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom"

const imageURL = "https://image.tmdb.org/t/p/w500/"

const MovieCard = ({ movie, showDetails=true })=> {

    return <div className="card">
        <img src={imageURL+movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <BsFillStarFill/> {movie.vote_average.toFixed(1)}
        </p>
        {showDetails &&
            <Link to={`/movie/${movie.id}`}>Ver Mais</Link>
        }
    </div>

}

export default MovieCard;