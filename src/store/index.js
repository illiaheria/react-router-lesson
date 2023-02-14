import { applyMiddleware, combineReducers, createStore } from "redux";
import mainReducer from "./reducers/mainReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import postsReducer from "./reducers/posts";

const rootReducer = combineReducers({
  counter: mainReducer,
  blogPosts: postsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
