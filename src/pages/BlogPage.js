import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(setPosts);
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
