import axios from "axios";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Detalle () {
  
  let token = localStorage.getItem('token');

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get('movieID')

  const [ movieDetails, setMovieDetails ] = useState(null)


  useEffect(()=>{
    
    console.log(movieID);
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=8d9c37e5e1c91a385da3eb3ced62d03a&language=es-ES`
        
    axios
      .get(endPoint)
      .then(res => {
        const movieData = res.data;
        setMovieDetails(movieData);
        console.log(movieDetails);
      })
      .catch(error => {console.log('error')})
    
  },[setMovieDetails])

  return (
    <>
      { !token && <Navigate to="/" /> }

      { movieDetails && 
      <>
        <h2>Título: {movieDetails.title}</h2>
        <div className="row">
          <div className="col-4">
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} className="img-fluid" alt="poster"/>
          </div>
          <div className="col-8">
            <h5>Fecha de estreno: {movieDetails.release_date}</h5>
            <h5>Reseña:</h5>
            <p>{movieDetails.overview}</p>
            <h5>Rating: { movieDetails.vote_average }</h5>
            <h5>Géneros:</h5>
            
            <ul>
              { movieDetails.genres.map( oneGenre => <li key={oneGenre.id}>{ oneGenre.name }</li> ) }
            </ul>
          </div>
        </div>
      </>}

    </>
  )
}

export default Detalle;