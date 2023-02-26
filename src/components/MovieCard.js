import React from "react";
import { addToFavourite, removeFromFavourite } from "../actions";

export default function MovieCard({ movie, dispatch, isMovieFavourite }) {
  const handleAddToFavourites = () => {
    //dispatch the add favoutites action
    console.log("dp add");
    // isMovieFavourite
    //   ? dispatch(removeFromFavourite(movie))
    //   : dispatch(addToFavourite(movie));
    dispatch(addToFavourite(movie));
  };
  const handleRemoveFromFavourites = () => {
    console.log("dp remove");

    dispatch(removeFromFavourite(movie));
  };
  return (
    <div className="movie-card">
      <div className="left">
        <img alt="movie-poster" src={movie.Poster} />
      </div>
      <div className="right">
        <div className="title">{movie.Title}</div>
        <div className="plot">{movie.Plot}</div>
        <div className="footer">
          <div className="rating">{movie.imdbRating}</div>
          {isMovieFavourite ? (
            <button
              className="unfavourite-btn"
              onClick={handleRemoveFromFavourites}
            >
              Unfavourite
            </button>
          ) : (
            <button className="favourite-btn" onClick={handleAddToFavourites}>
              Favourite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
