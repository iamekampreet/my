import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";

const NavLinks = () => {
  const authObject = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {authObject.isLoggedIn && (
        <li>
          <NavLink to={`/${authObject.userId}/places`}>MY PLACES</NavLink>
        </li>
      )}
      {authObject.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!authObject.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {authObject.isLoggedIn && (
        <li>
          <button onClick={authObject.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
