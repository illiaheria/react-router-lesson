import {
  SET_POSTS_FAILURE,
  SET_POSTS_LOADING,
  SET_POSTS_SUCCESS,
} from "./constants";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const setPostsAction = (payload) => ({
  type: SET_POSTS_SUCCESS,
  payload,
});

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS_SUCCESS:
      return {
        posts: [...action.payload],
        loading: false,
        error: null,
      };
    case SET_POSTS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SET_POSTS_FAILURE:
      return {
        // posts: [...action.payload],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
