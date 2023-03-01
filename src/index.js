import React, { createContext } from "react";
// import { Provider } from "react-redux";

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

//creating context
export const StoreContext = createContext();
// creating custom provider function
const Provider = ({ children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
