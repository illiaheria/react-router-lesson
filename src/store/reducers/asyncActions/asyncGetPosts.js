import { setPostsAction } from "../posts";

export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => dispatch(setPostsAction(data)));
};
