import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';

import { Link } from 'react-router-dom'


const apiKey = "api_key=d538b86c45627ec760a4401612ea51bc";

const urlMovie = "https://api.themoviedb.org/3/movie/top_rated";
const urlMoviePopular = "https://api.themoviedb.org/3/movie/popular"
const urlMovieUpcoming = "https://api.themoviedb.org/3/movie/upcoming"

import './MovieGrid.css'

const Home = ()=>{
    
    const [movies, setMovies] = useState([]);

    const [contTopRated, setContTopRated] = useState(0);
    const [contPopular, setContPopular] = useState(0);
    const [contUpcoming, setContUpcoming] = useState(0);

    const ratedMovies = async (url)=>{

        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    }

    //TopMovies
    useEffect(()=>{
        const homeTopRatedURL = `${urlMovie}?${apiKey}`;

        ratedMovies(homeTopRatedURL);
    }, [contTopRated])
    
    //Populars
    useEffect(()=>{
        const homePopularURL = `${urlMoviePopular}?${apiKey}`;

        ratedMovies(homePopularURL);
    }, [contPopular])

    //Upcoming
    useEffect(()=>{
        const homeUpcomingURL = `${urlMovieUpcoming}?${apiKey}`;

        ratedMovies(homeUpcomingURL);
    }, [contUpcoming])

    return <div className='container'>
        <div className='menu'>
            <Link onClick={()=> setContUpcoming((count)=>count+=1)}>Lançamentos</Link>
            <Link onClick={()=> setContTopRated((count)=>count+=1)}>Melhores</Link>
            <Link onClick={()=> setContPopular((count)=>count+=1)}>Populares</Link>
        </div>
        <div className='movies_container'>
            {movies.length === 0 &&
                <p className='loading'>Carregando...</p>
            }
            {movies.length > 0 &&
                movies.map((movie) =>
                <MovieCard key={movie.id} movie={movie}/>
            )
        }
        </div>
    </div>
}

export default Home;