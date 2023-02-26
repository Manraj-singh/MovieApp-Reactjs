import React from "react";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="search-container">
        <input />
        <button id="search-btn">Search</button>

        {/* {showSearchResults && (
          <div className="search-results">
            <div className="search-result">
              <img src={movies.Poster} alt="search-pic" />

              <div className="movie-info">
                <span>{movies.Title}</span>
                <button onClick={() => this.handleAddToMovies(movies)}>
                  Add to movies
                </button>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
