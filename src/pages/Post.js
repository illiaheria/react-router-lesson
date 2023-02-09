import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then(setPost);
  }, []);

  if (!post) return <>loading...</>;

  return (
    <>
      <button onClick={goBack}>Go back</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};
