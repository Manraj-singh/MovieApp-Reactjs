//ACTION TYPES
export const ACTIONS = {
  ADD_MOVIES: "ADD_MOVIES",
  ADD_FAVOURITE: "ADD_FAVOURITE",
  REMOVE_FAVOURITE: "REMOVE_FAVOURITE",
  SET_SHOW_FAVOURITES: "SET_SHOW_FAVOURITES",
  SEARCH_MOVIE: "SEARCH_MOVIE",
  ADD_SEARCH_RESULT: "ADD_SEARCH_RESULT",
  ADD_RESULT_TO_MOVIELIST: "ADD_RESULT_TO_MOVIELIST",
};

//ACTION CREATORS
export function addMovies(movies) {
  return {
    type: ACTIONS.ADD_MOVIES,
    movies,
  };
}
export function addToFavourite(movie) {
  return {
    type: ACTIONS.ADD_FAVOURITE,
    movie,
  };
}
export function removeFromFavourite(movie) {
  return {
    type: ACTIONS.REMOVE_FAVOURITE,
    movie,
  };
}
export function setShowFavourites(bool) {
  return {
    type: ACTIONS.SET_SHOW_FAVOURITES,
    bool,
  };
}
//!NOTE:when a action is dispatched all reducers gets called ,so below action is in both movie and search reducer hence both will get called
export function addResutToMovielist(movie) {
  return {
    type: ACTIONS.ADD_RESULT_TO_MOVIELIST,
    movie,
  };
}
export function searchMovie(movie) {
  //make a call to api and search the movie with title
  console.log("action search", movie);
  const url = `http://www.omdbapi.com/?t=${movie}&apikey=8850ebe7`;

  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        dispatch(addSearchResult(movie));
      });

    //dispatch action to add result to search result
  };
}

export function addSearchResult(movie) {
  return {
    type: ACTIONS.ADD_SEARCH_RESULT,
    movie,
  };
}
