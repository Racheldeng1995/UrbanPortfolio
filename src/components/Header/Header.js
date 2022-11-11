import { Link } from "react-router-dom";
import "./Header.css";
import React from "react";
function Header() {
  return (
    <>
      <header>
        <div className="header-container">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/logout">Dashboard</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
