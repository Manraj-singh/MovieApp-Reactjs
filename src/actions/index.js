//ACTION TYPES
export const ACTIONS = {
  ADD_MOVIES: "ADD_MOVIES",
  ADD_FAVOURITE: "ADD_FAVOURITE",
  REMOVE_FAVOURITE: "REMOVE_FAVOURITE",
  SET_SHOW_FAVOURITES: "SET_SHOW_FAVOURITES",
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
