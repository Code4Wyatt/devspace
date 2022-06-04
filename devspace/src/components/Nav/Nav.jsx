import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <div className="navbar">
        <h5>DevSpace</h5>
        <div className="links">
          <Link to="/" className="link">
            <p>Employers</p>
          </Link>
          <Link to="/employers" className="link">
            <p>Developers</p>
          </Link>
          <Link to="/employers" className="link">
            <p>Roles</p>
          </Link>
        </div>
        <div className="auth">
          <Link to="/login" className="auth-link">
            <h6>Login</h6>
          </Link>
          <Link to="/register" className="auth-link">
            <h6>Register</h6>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
