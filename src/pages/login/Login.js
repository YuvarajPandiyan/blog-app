import React from "react";
import LoginForm from "../../components/login/LoginForm.js";
import "./login.css";
import logo from "../../util/img/cat-1424748.png";

export const Login = (props) => {
  return (
    <div className="login__center">
      <div className="login__root">
        <img src={logo} alt="logo" className='login__logo'/>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
