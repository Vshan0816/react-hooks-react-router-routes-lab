import React from "react";
import { actors } from "../data";

const actorsMap = actors.map(actor => {
  return <div key={actor.name}>
    {actor.name}
    <ul>
      {actor.movies.map(movie=>{
        return <li key = {movie}>{movie}</li>
      })}
    </ul>
  </div>
})

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actorsMap}
  </div>;
}

export default Actors;
