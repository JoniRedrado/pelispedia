//Libraries
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swAlert from "@sweetalert/with-react";


function Listado () {
  
  let token = localStorage.getItem('token');

  const [ moviesList, setMoviesList ] = useState([]);

  useEffect( () => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=8d9c37e5e1c91a385da3eb3ced62d03a&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
    axios
      .get(endPoint)
      .then( res => {
        const apiData = res.data.results;
        setMoviesList(apiData)
      })
      .catch(error=>{
        swAlert(<h2>Hubo errores, intenta mas tarde!</h2>)
      })
  }, [setMoviesList])

  console.log(moviesList)

  return (
    <>
      { !token && <Navigate to="/" /> }

      
      <div className="row">
      
        { moviesList.map((oneMovie, idx) => {
          return(
        
            <div className="col-3" key={idx}>
              <div className="card my-4">
                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{ oneMovie.title.substring(0, 30)}</h5>
                  <p className="card-text">{oneMovie.overview.substring(0, 100)}...</p>
                  <Link to={`/detalle?movieID=${oneMovie.id}`}className="btn btn-primary">View detail</Link>
                </div>
              </div>
            </div>
          )
        }) }
        
        

      </div>
    </>
  )
}

export default Listado