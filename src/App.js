import React from 'react'
// import {Blog, Footer, Features, Header, Possibility, WhatGPT3} from './container';
// import { Brand, CTA, Navbar } from './components';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from "./search.svg";

// 3e1208d

const API_URL = 'http://www.omdbapi.com?apikey=3e1208d';

const movie1 = {
  "Title": "Shrek Retold",
  "Type": "movie",
  "Year": "2018",
  "imdbID": "tt9334162",
  "Poster": "N/A"
}

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data.Search)
  }
  useEffect(() => {
    searchMovies("Shrek")
  }, [])

  return (
    <div className='app'>

      <h1>App</h1>
      <section className='search'>
        <input value="Shrek" placeholder="Search for movies" onChange={() => { }} />
        <img src={SearchIcon} alt="search" onClick={() => { }} />
      </section>

      <div className='container'>
        <div className='movie'>
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : "https://via.placeholder.com/400"} alt={movie1.Title} />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
