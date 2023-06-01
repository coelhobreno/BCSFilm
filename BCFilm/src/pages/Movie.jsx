import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";

import { BiWallet, BiCalendarEvent, BiTimer, BiDollarCircle } from "react-icons/bi";
import { GiFilmProjector } from "react-icons/gi";

import './Movie.css'

const apiKey= "api_key=d538b86c45627ec760a4401612ea51bc";
const urlMovie = "https://api.themoviedb.org/3/movie/";

const Movie = ()=>{
    
    const {id} = useParams();

    const [movie, setMovies] = useState(null);

    const getMovieAPI = async (url)=>{
        const resp = await fetch(url);
        const data = await resp.json();

        setMovies(data);
    }

    const convertDol = (number)=>{
        return number.toLocaleString("en-US", {
            style: "currency",
            currency:"USD",
        })
    }

    const covertDate = (number) =>{
        return number.split('-').reverse().join('/')
    }

    useEffect(()=>{
        const urlCreated = `${urlMovie}${id}?${apiKey}`;
        getMovieAPI(urlCreated);
    }, [])

    return <div className="movie-page">
        
        {movie &&
            <>
                <MovieCard movie={movie} showDetails={false}/>
                <div className="info">
                    <h3>Descrição:</h3>
                    {movie.overview}
                </div>
                <div className="info">
                    <h3><BiWallet/>Orçamento:</h3>
                    {convertDol(movie.budget)}
                </div>
                <div className="info">
                    <h3><GiFilmProjector/>Gênero:</h3>
                    {movie.genres[0].name}
                </div>
                <div className="info">
                    <h3><BiCalendarEvent/>Data de Lançamento:</h3>
                    {covertDate(movie.release_date)}
                </div>
                <div className="info">
                    <h3><BiTimer/>Duração:</h3>
                    {movie.runtime}min
                </div>
                <div className="info">
                    <h3><BiDollarCircle/>Receita:</h3>
                    {convertDol(movie.revenue)}
                </div>
            </>
        }
        
    </div>
}

export default Movie;