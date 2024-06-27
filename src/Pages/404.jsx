// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/404.css';

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Yazı Yazı Yazı</p>
      <Link to="/" className="linkButton">Go to Homepage</Link>
    </div>
  );
};
