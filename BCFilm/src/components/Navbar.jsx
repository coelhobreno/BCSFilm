import { Link, useNavigate } from 'react-router-dom'

import { BsFilm, BsSearch } from "react-icons/bs";

import { useState } from "react"

import './Navbar.css';

const Navbar = ()=>{

    const navigate = useNavigate()
    const [ search, setSearch ] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(!search) return

        navigate(`/search?q=${search}`);

    }

    return <div className="navbar">
        <h2>
            <Link to="/">
                <BsFilm/> BCSFilm
            </Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder="Pesquise um filme..." onChange={(e)=>setSearch(e.target.value)}/>
            <button type='submit'>
                <BsSearch/>
            </button>
        </form>
    </div>
}

export default Navbar;