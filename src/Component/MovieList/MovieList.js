
import React from 'react'
import { Link } from 'react-router-dom'
import { MovieCard } from '../MovieCard/MovieCard'

const MovieList = ({movieList}) => {
  return (
    <div>
      {movieList.map(el=><MovieCard key={el.id} el={el}/>)}
      <Link to={"/addMovie"} ><button style={{ position: "absolute",
    top:"0%",
    right:"20%",
    backgroundColor:"#0a0a23",
    color: "#fff",
    border:"none",
    borderRadius:"10px"}}>Add New Movie</button> </Link>
    
    </div>
  )
}

export default MovieList