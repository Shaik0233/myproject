import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import Spinner from "./Spinner"
import CardComp2 from "./CardComp2";

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
      <Spinner/>
    );

  if (error)
    return <p className="text-center text-danger mt-4">Error: {error}</p>;

  return (
    <CardComp2 post={post}/>
  );
};

export default PostDetail;
