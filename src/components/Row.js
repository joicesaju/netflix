import React from 'react'
import { useState,useEffect } from 'react'
import instance from '../baseUrl'
import './Row.css'
import requests from '../request'


function Row({title,fetchUrl}) {

    const[movies,setMovies]=useState([])

    async function fetchData()
    {
        const result =await instance.get(requests.fetchTrending);
        console.log(result.data.results);
        setMovies(result.data.results)
    }
     useEffect(()=>{
        fetchData()
     },[])
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className='row'>


      <div className='movies'>
        {
            movies.map(movie=>(
            <img style={{}} src={`${base_url}${movie.backdrop_path}`} className="movie"/> 
            // <div className='' style={{backgroundImage:URL({movie.poster_path})}}></div>
            ))
        }
      </div>
    </div>
  )
}

export default Row
