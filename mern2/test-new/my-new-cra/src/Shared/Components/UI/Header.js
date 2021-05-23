import React from "react";
import { NavLink } from "react-router-dom";

import logo from "./mapLogo.png";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-light navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt=""
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
          <span>Location Buddy</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex">
            <NavLink className="nav-link" exact to="/">
              All Users
            </NavLink>
            <NavLink className="nav-link" exact to="/:uid/places">
              My Places
            </NavLink>
            <NavLink className="nav-link" exact to="/places/new">
              Add Places
            </NavLink>
            <NavLink className="nav-link " exact to="/authenticate">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
