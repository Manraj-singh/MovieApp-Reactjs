import { combineReducers } from "redux";
import { ACTIONS } from "../actions";

// INITIAL STATES

const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
const initialSearchState = {
  result: {},
  showSearchResults: false,
};
const initialRootState = {
  movies: initialMovieState,
  search: initialSearchState,
};

//REDUCER FUNCTIONS
export function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ACTIONS.ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ACTIONS.ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case ACTIONS.REMOVE_FAVOURITE:
      const newArray = state.favourites.filter(
        (movie) => movie.imdbID !== action.movie.imdbID
      );
      return {
        ...state,
        favourites: newArray,
      };

    case ACTIONS.SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.bool,
      };
    case ACTIONS.ADD_RESULT_TO_MOVIELIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ACTIONS.ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ACTIONS.ADD_RESULT_TO_MOVIELIST:
      return {
        ...state,
        showSearchResults: false,
      };

    default:
      return state;
  }
}

export default combineReducers({
  movies: movies,
  search: search,
});

// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }
