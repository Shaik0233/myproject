import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import CardComp from "../components/CardComp";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10") // Fetch 10 posts only
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-danger mt-4">Error: {error}</p>;

  return <CardComp posts={posts} />;
};

export default Posts;
