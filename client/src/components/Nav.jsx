import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Nav = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  return (
    <nav className="flex items-center justify-between px-3 bg-[#2C3E50] text-white py-4">
      <div className="left">
        <h2 className="sm:text-2xl">
          <Link to="/" className="cursor-pointer">
            Caption Generator
          </Link>
        </h2>
      </div>
      <div className="right flex items-center gap-3">
        {isAuthenticated ? (
          <Link
            to="/"
            className="hover:bg-[#E1B12C] cursor-pointer px-3 py-2 rounded-[5px] outline-0 border border-transparent hover:border-white transition"
            aria-label="Sign Up"
            onClick={() => {
              localStorage.removeItem("username");
              setIsAuthenticated(false);
            }}
          >
            Logout
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              className="hover:bg-[#E1B12C] cursor-pointer px-3 py-2 rounded-[5px] outline-0 border border-transparent hover:border-white transition"
              aria-label="Login"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="hover:bg-[#E1B12C] cursor-pointer px-3 py-2 rounded-[5px] outline-0 border border-transparent hover:border-white transition"
              aria-label="Sign Up"
            >
              Sign-Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
