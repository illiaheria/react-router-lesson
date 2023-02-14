import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import toolkitSlice from "./toolkitSlice";
import toolkitReducer from "./toolkitReducer";
import blogSlice from "./blogSlice";

const rootReducer = combineReducers({
  counter: toolkitReducer,
  blogPosts: blogSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
