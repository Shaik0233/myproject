import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const PostDetail = () => {
  const { id } = useParams(); // Get post ID from URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <p className="text-center mt-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </p>
    );

  if (error)
    return <p className="text-center text-danger mt-4">Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3">{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/users" className="btn btn-primary mt-3">
        Back to Posts
      </Link>
    </div>
  );
};

export default PostDetail;
