import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark app-navbar py-4 font-weight-bold">
        <div className="container-fluid ">
          <Link className="navbar-brand app-brand " to="/">
            iNoteBook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              {isLoggedIn && (
                <li className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`}
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
              )}
            </ul>
            {!isLoggedIn ? (
              <form className="d-flex" role="search">
                <Link
                  className={`btn auth-btn auth-btn-login ${location.pathname === "/login" ? "active" : ""} mx-1`}
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className={`btn auth-btn auth-btn-signup ${location.pathname === "/signup" ? "active" : ""} mx-1`}
                  to="/signup"
                  role="button"
                >
                  Sign Up
                </Link>
              </form>
            ) : (
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
                className="btn btn-light bg-primary mx-4 text-white"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
