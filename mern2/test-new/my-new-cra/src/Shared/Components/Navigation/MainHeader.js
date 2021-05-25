import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

const MainHeader = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mySpacing">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          BlogPic
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                ALL USERS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/u1/posts">
                MY POSTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/post/new">
                ADD POST
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/auth">
                LOGIN
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
