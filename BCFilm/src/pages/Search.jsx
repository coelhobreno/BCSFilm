import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import MovieCard from '../components/MovieCard'

import './MovieGrid.css'

const urlSearch = "https://api.themoviedb.org/3/search/movie"
const apiKey= "api_key=d538b86c45627ec760a4401612ea51bc";

const Search = ()=>{

    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [movies, setMovies] = useState([]);

    const ratedMovies = async (url)=>{

        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    }

    useEffect(()=>{
        const searchMoviesURL = `${urlSearch}?${apiKey}&query=${query}`;

        ratedMovies(searchMoviesURL);
    }, [query])

    return <div className='container'>
        <h3 className='query-text'>Resultados para:<span className='name_film'> {query}</span></h3>
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

export default Search;