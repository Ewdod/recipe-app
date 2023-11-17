// Header.js
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-container">
      <h1>My Recipe App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipe-list">Recipe List</Link>
          </li>
          <li>
            <Link to="/new-recipe">New Recipe</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
