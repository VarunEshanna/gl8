import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/login">Log In</Link>
        </li>
        <li>
            <Link to="/register">Register User</Link>
        </li>
        <li>
            <Link to="/confirmUser">Confirm User</Link>
        </li>
        </ul>
    </div>
  );
};

export default NavBar;