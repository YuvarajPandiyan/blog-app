import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/lgoin.js";
import logo from "../../util/img/cat-1424748.png";
import "./navbar.css";

const NavBar = (props) => {
  const { logout } = props;

  const [updateAuth, setUpdateAuth] = useState(
    localStorage.getItem("authenticated")
  );

  const logOut = () => {
    logout().then((result) => {
      setUpdateAuth(`${result.authenticated}`);
    });
  };

  return (
    <div className="nav__root">
      <li className="nav">
        <ul className="nav__hover">
          <Link to="/">Home</Link>
        </ul>
        <ul className="nav__hover">
          <Link to="/albums">Album</Link>
        </ul>
        <ul className="nav__hover">
          <Link to="/todo">ToDo</Link>
        </ul>
        <ul className="nav__hover">
          <Link to="/createpost">Create Post</Link>
        </ul>
        <ul className="nav__hover">
          <button className="login-btn">
            {updateAuth === "false" ? (
              <Link to="/login">LogIn</Link>
            ) : (
              <Link to="/" onClick={logOut}>
                Log Out
              </Link>
            )}
          </button>
        </ul>
      </li>
      <div className="logo_img__container">
        <img src={logo} alt="logo" className="logo_img" />
      </div>
    </div>
  );
};

export default connect(null, { logout })(NavBar);
