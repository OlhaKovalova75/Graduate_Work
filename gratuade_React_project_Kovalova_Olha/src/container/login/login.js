// import main_container from "../../assets/image/casper.jpg";
import "./login.css";
// import Input from "../../components/Input";
import React from "react";

const Login = () => {
  //   const getName = () => "TEST";
  return (
    <div className="container">
      <div className="main-container">
        {/* <img src={main_container} className="main_logo" alt="logo" /> */}
        <h2>Hello! I am Casper!</h2>

        <label>Write down your name</label>
        {/* <Input name={getName()} /> */}
      </div>
    </div>
  );
};

export default Login;
