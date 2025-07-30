import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)));
  }, []);

  return (
    <div className="post-box">
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="box-1">
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
