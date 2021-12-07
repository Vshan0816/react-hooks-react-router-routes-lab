import React from "react";
import { movies } from "../data";

const moviesMap = movies.map(movie => {
  return <div key={movie.title}>
    {movie.title}
    {movie.time}
    <ul>
      {movie.genres.map(genre => {
      return <li key={genre}>{genre}</li>
        })}
    </ul>
  </div>
})

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {moviesMap}
  </div>;
}

export default Movies;
