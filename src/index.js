import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, createStore } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      //if the incoming action is a function we are just passing the dispatch to th function else just pass action object to reducer
      action(dispatch);
      return;
    }
    //pass the action to reducer
    next(action);
  };
const store = createStore(rootReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
