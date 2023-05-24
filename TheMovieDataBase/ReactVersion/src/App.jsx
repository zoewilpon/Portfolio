import React,{ useState } from 'react'
import './App.css'
import keys from './config/keys'

const App = () => {

  const [movies, setMovies] = useState([])
  
  const preformSearch = (searchTerms) => {
    const url = 'https://api.themoviedb.org/3'
    const movieRoute = `/search/movie?api_key=${keys.tmdb_key}&query=${searchTerms}`;
    const endpoint = url + movieRoute
    fetch(endpoint)
    .then(response => response.json())
    .then(searchResults => {
      if (searchResults.results) {
        setMovies(searchResults.results)
      }
    })
    .catch(error => console.error('Error comming from API:     ', error))  
  }

  const searchChangeHandler = (event) => {
    preformSearch(event.target.value)
    console.log('I am the event', event)
    console.log('I am the event.target', event.target)
    console.log('I am the event.target.value', event.target.value)
  }
  // We are taking the change event object and passing it to the preformSearch function thats INSIDE the searchChangeHandler function
  // target = the input field value

  const movieList = movies.map(movie => (
    <div key={movie.id}>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>
        {movie.overview}
      </p>
    </div>
))

// each time we map over the movies array we are creating a new div with the movie title, poster, and overview 

  return (
    <div>
      <h1>Movie Search:</h1>
      <input 
          type="text" 
          placeholder="Search for a movie" 
          id="inputFeild" 
          onChange={searchChangeHandler}
      /> 
      <div className="movieResult">
        {movieList}
      </div>
    </div>
  )
}

export default App

