import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 20,
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export default createReducer(initialState, {
  [increment]: (state) => {
    state.count = state.count + 1;
  },
  [decrement]: (state) => {
    state.count = state.count + 1;
  },
});
