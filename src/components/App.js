import { useEffect, useState } from "react";
import { StoreContext } from "..";
import { addMovies, setShowFavourites } from "../actions";
import { data } from "../data";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
function App({ store }) {
  const { movies, search } = store.getState();
  const { list, favourites, showFavourites } = movies;

  const [movieList, setMovieList] = useState(list);
  const [favouriteList, setFavouritesList] = useState(favourites);
  const [favouriteTab, setFavouriteTab] = useState(showFavourites);
  const displayMovies = favouriteTab ? favouriteList : movieList;
  useEffect(() => {
    //make a call to get all movies,here we are using data file
    //whenever we call a dispatch or our state gets changed this subscribe gets rendered
    store.subscribe(() => {
      setFavouritesList(store.getState().movies.favourites);
      setMovieList(store.getState().movies.list);
      setFavouriteTab(store.getState().movies.showFavourites);
    });

    //dispatch to add movies in store
    store.dispatch(addMovies(data));
  }, []);

  const isMovieFavourite = (movie) => {
    const ind = favouriteList.indexOf(movie);
    if (ind > -1) {
      return true;
    }
    return false;
  };

  const handleChangeTab = (bool) => {
    store.dispatch(setShowFavourites(bool));
  };
  return (
    <div className="App">
      {/* navbar comp */}
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div
            className={`tab ${favouriteTab ? "" : "active-tabs"}`}
            onClick={() => handleChangeTab(false)}
          >
            Movies
          </div>
          <div
            className={`tab ${favouriteTab ? "active-tabs" : ""}`}
            onClick={() => handleChangeTab(true)}
          >
            Favourites
          </div>
        </div>

        <div className="list">
          {displayMovies.map((movie, index) => (
            <MovieCard
              dispatch={store.dispatch}
              movie={movie}
              isMovieFavourite={isMovieFavourite(movie)}
              key={index}
            />
          ))}
        </div>
        {displayMovies.length === 0 && (
          <div className="no-movies">No movies to display</div>
        )}
      </div>
    </div>
  );
}

//creating a wrapper over component so it will be able to use the StoreContext consumer and pass to component as prop.
//we can create consumer wrapper in needed place only and we can avoid proprilling through it
//NOTE for class components: context consumer can only be used in render method of class component
function AppWrapper() {
  return (
    <StoreContext.Consumer>
      {(store) => <App store={store} />}
    </StoreContext.Consumer>
  );
}
export default AppWrapper;
