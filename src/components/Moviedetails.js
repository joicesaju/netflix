import React from 'react'
import '../components/Home'
import Home from './Home';
import { useState,useEffect } from 'react';
import imdb from '../../src/imdb.png'
// import Button from 'react-bootstrap/Button';
import Test from './Test'

import { Button } from '@mui/material';
import { Row } from 'react-bootstrap';

function Moviedetails() {
   
  const base_url = "https://image.tmdb.org/t/p/original/";


    const [id,setId]=useState(0)
    const [poster_path,setPOsterpath]=useState('')
    const [release_date,setRdate]=useState('')
    const [vote_count,setVotecount]=useState(0)
    const [backdrop_path,setBackdroppath]=useState('')
    const [overview,setOverview]=useState('')
    const [vote_average,setVoteaverage]=useState(0)
    const [title,setTitle]=useState('')
  
  
    useEffect(()=>{
     setId(localStorage.getItem("id"));
     setPOsterpath(localStorage.getItem("poster_path"));
     setVotecount(localStorage.getItem("vote_count"));
     setRdate(localStorage.getItem("release_date"));
     setTitle(localStorage.getItem("title"));
     setBackdroppath(localStorage.getItem("backdrop_path"));
    //  setTitle(JSON.parse(localStorage.getItem("salary")));
     setOverview(localStorage.getItem("overview"));
     setVoteaverage(localStorage.getItem("vote_average"));
    },[])

    console.log(title);
  return (
    <div className='moviedetails' style={{backgroundImage:`URL(${base_url}${backdrop_path})` ,height:'40vh',width:"100%", position:"relative",marginLeft:"1px",marginTop:"1px",backgroundPosition:"right", backgroundSize:"cover",backgroundRepeat:"no-repeat"}} >

  {/* <img style={{width:"500px", height:"500px"}} src={`${base_url}${poster_path}`} className="movie" /> */}

  
  <img style={{width:"32%", height:"400px",marginTop:"5%",borderRadius:"0%",border:"2px solid white",marginLeft:"10px"}} src={`${base_url}${poster_path}`} className="movie" />
     {/* <Button>joice</Button> */}
       {/* <h3 style={{color:"white"}}>{title}</h3> */}
       <div className='deatils' style={{marginTop:"-12%",marginLeft:"38%" ,color:"white"}}>
           <h3 style={{display:"inline"}}>{title}</h3>   
           <h3 style={{display:"inline",marginLeft:"20px"}}><span style={{color:"yellow",marginRight:"5px"}}>Rating:</span> {vote_average}</h3> 
          <h3 style={{display:"inline",marginLeft:"35px"}}><span style={{color:"yellow",marginRight:"5px"}}>Year:</span>{release_date}</h3> 

          <p style={{paddingTop:"30px",paddingRight:"10px"}}>
          {overview}   
          </p>   

          <Button variant="outlined" style={{marginTop:"25px",marginRight:"10px"}}>Watch_later</Button>
          <Button variant="outlined"  color='error' style={{marginTop:"25px",marginRight:"10px"}}>Trailer</Button>
          <Button variant="outlined" color='success' style={{marginTop:"25px"}}>Watch_Now</Button>

          {/* <Button variant="primary">Add to list</Button> */}
       </div>


       <div className='morelikethis' style={{marginTop:"120px"}}>
        <Home/>
       </div>
       
    </div>
  )
  
}

export default Moviedetails
