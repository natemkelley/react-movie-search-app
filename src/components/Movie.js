import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="col s12 m4 l3">
      <div class="card">
        <div class="card-image">
          <img alt={`The movie titled is ${movie.Title}`} src={poster} />
        </div>
        <div class="card-content">
          <span class="card-title center-align">{movie.Title}</span>

          <p>({movie.Year})</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
