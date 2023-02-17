import React from 'react';
import { Button } from 'bootstrap'
import { useState ,useEffect} from 'react';
import instance from '../baseUrl';
import './Home.css'
import requests from '../request';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Home() {

  const h = useNavigate()

  const[data,setData]=useState([]);
  
  
      const getdata=(movie)=>{
          console.log(movie);
          localStorage.setItem("id",movie.id)
          localStorage.setItem("backdrop_path",movie.backdrop_path)
          localStorage.setItem("title",movie.title)
          localStorage.setItem("poster_path",movie.poster_path)
          localStorage.setItem("popularity",movie.popularity)
          localStorage.setItem("release_date",movie.release_date)
          localStorage.setItem("vote_average",movie.vote_average)
          localStorage.setItem("vote_count",movie.vote_count)
          localStorage.setItem("overview",movie.overview)
          }
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
    <div className='home'>
            <h4>TRENDING MOVIES</h4>

           <div className='movies'>
        {
             movies.map(movie=>(

              <Link to={'/md'}>
                 <img style={{width:"250px", height:"200px"}} src={`${base_url}${movie.poster_path}`} className="movie" onClick={()=>getdata(movie)}/>
              </Link>
                
                     ))
        }
      </div>
    </div>
  )
}

export default Home
