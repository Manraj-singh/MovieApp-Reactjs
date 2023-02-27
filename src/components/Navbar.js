import React, { useState } from "react";
import { addResutToMovielist, searchMovie } from "../actions";

export default function Navbar({ dispatch, movie, showSearchResults }) {
  // const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchText, setSearchText] = useState("");

  // movie ? setShowSearchResults(true) : setShowSearchResults(false);
  const handleAddToMovies = () => {
    dispatch(addResutToMovielist(movie));
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearch = () => {
    //call an action to search
    dispatch(searchMovie(searchText));
  };

  return (
    <div className="nav">
      <div className="search-container">
        <input onChange={(e) => handleChange(e)} />
        <button id="search-btn" onClick={handleSearch}>
          Search
        </button>

        {showSearchResults && (
          <div className="search-results">
            <div className="search-result">
              <img src={movie.Poster} alt="search-pic" />

              <div className="movie-info">
                <span>{movie.Title}</span>
                <button onClick={() => handleAddToMovies(movie)}>
                  Add to movies
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
