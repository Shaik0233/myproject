import React from "react";
import { Link } from "react-router-dom";

const CardComp2 = ({post}) => {
  return (
    <>
      <div className="container mt-4">
      
        <h2 className="mb-3" key={post.id}>{post.title}</h2>
        <p>{post.body}</p>
        <Link to="/users" className="btn btn-primary mt-3">
          Back to Posts
        </Link>
      </div>
      
    </>
  );
};

export default CardComp2;
