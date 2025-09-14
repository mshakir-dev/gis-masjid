import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <div className="notfound-links">
          <Link to="/" className="btn btn-home" title="GIS | Homepage">Back to Home</Link>
          <Link to="/contact" className="btn btn-contact" title="GIS | Contact">Back to Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
