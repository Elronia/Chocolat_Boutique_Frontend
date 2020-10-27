import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div id="not-found-container">
      <div>
        <h1>Page Not Found</h1>
        <h3>
          We're sorry. The page you requested could not be found.
        </h3>
        <Link to={"/"}>
          <div>Go Back Home</div>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
