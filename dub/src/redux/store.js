import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export const logIn = createAction("LOGIN");
export const logOut = createAction("LOGOUT");


const reducer = createReducer([], {
  [logIn]: (state, action) => {
    state += action.payload
    console.log(state)
  },
  [logOut]: (state, action) => {
    console.log(state);
    state = action.payload
    console.log(state);
  }
});

const store = configureStore({ reducer });
export default store;

