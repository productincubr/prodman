import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>404 - Page Not Found | Prodman</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="not-found-links">
          <Link to="/" className="not-found-btn">Go to Home</Link>
          <Link to="/studio" className="not-found-btn secondary">Visit Studio</Link>
          <Link to="/design" className="not-found-btn secondary">View Design Services</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
