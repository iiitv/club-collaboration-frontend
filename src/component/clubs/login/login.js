import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  const renderFormInput = (For, labelTitle, inputType) => {
    return (
      <div>
        <label className="login__label" htmlFor={For}>
          {labelTitle} :
        </label>
        <input type={inputType} className="login__input" name={For} />
      </div>
    );
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1>Student Login</h1>
        <form className="login__form">
          {renderFormInput("email", "Email", "text")}
          {renderFormInput("password", "Password", "password")}
          <Link className="login__button" to="/">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
