import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
// import { fetchPosts } from "../store/reducers/asyncActions/asyncGetPosts";
import { fetchPosts } from "../store/toolkitStore/blogSlice";
import { postsSelector } from "../store/selectors/postsSelectors";

export const Blog = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Posts page</h1>
      {posts.map((post) => {
        return (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        );
      })}
    </div>
  );
};
