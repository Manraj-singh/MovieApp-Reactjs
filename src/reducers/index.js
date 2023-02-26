import { ACTIONS } from "../actions";

// INITIAL STATES
const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
const initialSearchState = {
  result: {},
};

//REDUCER FUNCTIONS
export default function movies(state = initialMovieState, action) {
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

    default:
      return state;
  }
}

export function search(state = initialSearchState, action) {}

// export default function rootReducer(state) {
//   return {
//     movies: movies(state),
//   };
// }
