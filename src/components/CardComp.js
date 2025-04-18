import React from "react";
import { Link } from "react-router-dom";

const CardComp = ({ posts }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Latest Posts</h2>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                  {post.body.substring(0, 100)}....
                  <Link to={`/post/${post.id}`} className="text-primary">
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComp;
