import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched post:", data);
        setPost(data);
      });
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
