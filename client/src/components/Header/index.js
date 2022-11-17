import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.localStorage.clear();
  };

  return (
    <header className="header-wrapper bg-img-1 mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <img
            className="header-img"
            src="http://logocache.com/custom-design/logo-name/urban-designstyle-colors-u.png"
            alt="logo"
          ></img>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">
                <span className="link">Me</span>
              </Link>
              <a href="/" onClick={logout}>
                <span className="link"> Logout</span>
              </a>
            </>
          ) : (
            <>
              <Link to="/login">
                <span className="link"> Login</span>
              </Link>
              <Link to="/signup">
                <span className="link"> Signup</span>
              </Link>
              <Link to="/">
                <span className="link"> Donation</span>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
