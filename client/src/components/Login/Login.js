import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./login.css";
//promise based HTTP client for making requests to our backend
import axios from "axios";
//classnames: used for conditional classes in our JSX
import validateLoginInput from "./ValidationLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginState, setLoginState] = useState(false);
  const [errors, setErrorLogin] = useState({});
  const [errorEmail, setErrorEmail] = useState({});
  const [errorPassword, setErrorPassword] = useState({});
  let history = useHistory();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorPassword({});
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorEmail({});
  };
  const submit = (e) => {
    e.preventDefault();
    const { errors, isValid } = validateLoginInput(email, password);
    if (!isValid) {
      setErrorEmail(errors);
      setErrorPassword(errors);
    }
    axios
      .post(`login`, {
        email: email,
        password: password,
      })
      .then((response ) => {
        console.log(response.data.result);
        let id_user = response.data.result[0].id_user;
        if (response.data.auth) {
          const { token } = response.data;
          localStorage.setItem("token", token);
          setErrorLogin({
            ...errors,
            ValidationInfo: "Successfull",
          });

          history.push(`/Home/${id_user}`);
        } else if(response.data.err){
          setErrorLogin({
            ...errors,
            err: response.data.err,
          });
          setLoginState({
            ...loginState,
            auth: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showPassword = () => {
    let x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  return (
    <div className="login">
      <div className="login-title">
        <h2>Log into Your Account</h2>
      </div>
      <div className="row-login">
        <div className="col-login-input">
        <p>You need to login to edit your profile.</p>
          <label>
            <i className="fa fa-envelope"></i> Email
          </label>
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required={setErrorEmail}
            />
          </div>
          {errorEmail.email && (
            <small style={{ color: "red" }}>{errorEmail.email}</small>
          )}
          <br></br>
          <label>
            <i className="fa fa-key icon"></i> Password
          </label>
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required={setErrorPassword}
            />
          </div>
          {errorPassword.password && (
            <small style={{ color: "red" }}>{errorPassword.password}</small>
          )}<br></br>
          <div className="showPassword">
          <label>Show Password</label>
            <input type="checkbox"  onClick={showPassword}    style={{
                  width: "18px",
                  height: "15px",
                  marginLeft: "5px",
                  marginTop: "5px",
                }} />
          </div>
          <div>
            <button type="submit"  onClick={submit}>
              Login
            </button>
          </div>
          <div>
            <p style={{ color: "white" }}>
              Already have an account ? Register
              <Link to="/Register"> Here</Link>
            </p>
          </div>
          <div>
            {errors.massage && <p style={{ color: "red" }}>{errors.massage}</p>}
          </div>
        </div>
        <div className="col-login-img">
          <img src="https://previews.123rf.com/images/magurok/magurok1408/magurok140800045/30735392-vector-online-shopping-and-e-commerce-concept-illustration.jpg" />
        </div>
      </div>
    </div>
  );
};
export default Login;
