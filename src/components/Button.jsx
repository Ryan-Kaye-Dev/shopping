import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ className, label, to }) => {
  return (
    <Link to={to}>
      <button className={`button ${className}`}>{label}</button>
    </Link>
  );
};

export default Button;
