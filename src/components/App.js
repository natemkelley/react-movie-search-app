import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

const MOVIE_API_URL =
  "https://www.omdbapi.com/?s=Lord+of+the+Rings&apikey=4a3b711b";

const App = () => {
  const [loading, setLoading] = useState(true); //renders loading when set to true
  const [movies, setMovies] = useState([]); //handles array from server
  const [errorMessage, setErrorMessage] = useState(null); //handles errers from server

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => {
        return response.json(); //https://developer.mozilla.org/en-US/docs/Web/API/Body/json
      })
      .then(jsonObjs => {
        setMovies(jsonObjs.Search);
        setLoading(false);
      });
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse)
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div className="App">
      <Header text="Kelley Movie Search" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
