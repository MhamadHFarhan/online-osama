import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Register.css";
import isEmpty from "is-empty";
const RegisterForm = () => {
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [img, setImg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorsimg, setErrorsimg] = useState({});
  const [errorsName, setErrorsName] = useState({});
  const [errorsEmail, setErrorEmail] = useState({});
  const [errorsPassword, setErrorPasswoed] = useState({});
  const [errorsPhone, setErrorPhone] = useState({});
  const [errorsGender, setErrorGender] = useState({});
  let history = useHistory();
  const handleYourNameChange = (e) => {
    setYourName(e.target.value);
    setErrorsName({});
  };

  const handleImgChange = (e) => {
    setImg(e.target.value);
    setErrorsimg({});
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorEmail({});
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorPasswoed({});
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setErrorPhone({});
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setErrorGender({});
  };
  const save = (e) => {
    e.preventDefault();
    if (isEmpty(yourName)) {
      setErrorsName({ yourName: "Name is required" });
    }
    if (isEmpty(email)) {
      setErrorEmail({
        email: "Email is invalid",
      });
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorEmail({
        email: "Email address is invalid",
      });
    }
    if (isEmpty(password)) {
      setErrorPasswoed({
        password: "Password field is required",
      });
    } else if (password < 6) {
      setErrorPasswoed({
        password: "Password must be at least 6 characters",
      });
    }
    if (isEmpty(phoneNumber)) {
      setErrorPhone({ phoneNumber: "Phone is required" });
    }
    if (isEmpty(gender)) {
      setErrorGender({ gender: "Gender is required" });
    }
    if (isEmpty(img)) {
      setErrorsimg({ img: "img Url is required" });
    }
    axios
      .post(`register`, {
        yourName: yourName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        gender: gender,
        img: img,
      })
      .then((response) => {
        if (response.data.result) {
          setIsSubmitting({
            ...isSubmitting,
            auth: true,
          });
          history.push("/");
          console.log(response.data.result);
        }
        else if(response.data.err) {
          setErrors(
            {
              ...errors,
              err: response.data.err,
            },
            
          );
          console.log(response.data.err);
          setIsSubmitting({
            ...isSubmitting,
            auth: false,
          });
        }
      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
  };

  return (
    <div className="register">
      <div className="register-title">
        <h2>Register</h2>
      </div>
      <div className="row-register">
        <div className="col-register-p">
          <div>
            <h2>Advantages of Online Shopping</h2>
          </div>
          <div>
            <p>
              There are many advantages of online shopping watch online, which
              are summarized as follows:
            </p>
          </div>
          <div>
            <ul>
              <li>
                Reduction in commercial marketing by traditional methods such as
                flyers and television advertisements.
              </li>
              <li>
                Continuous interaction between marketers and customers
                throughout the day.
              </li>
              <li>
                Quickly and easily access customer feedback and know their
                opinions and complaints about the product
              </li>
              <li>
                Determining the target group accurately, according to the type
                of commodity, which leads to not wasting time and effort
              </li>
              <li>
                Develop and strengthen relationships between merchants and
                customers, and gain their trust in products easily.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-register-input">
          <p>Please fill in this form to create an account.</p>
          <label htmlFor="yourName">
            <i className="fa fa-user icon"></i> Your Name
          </label>
          <div>
            <input
              type="text"
              name="yourName"
              value={yourName}
              placeholder="Enter to Your Name"
              errors={errors.yourName}
              onChange={handleYourNameChange}
            />
          </div>
          {errorsName.yourName && (
            <small style={{ color: "red" }}>{errorsName.yourName}</small>
          )}
          <br></br>
          <label htmlFor="email">
            <i className="fa fa-envelope"></i> Email
          </label>
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {errorsEmail.email && (
            <small style={{ color: "red" }}>{errorsEmail.email}</small>
          )}
          <br></br>
          <label htmlFor="password">
            <i className="fa fa-key icon"></i> Password
          </label>
          <div>
            <input
              type="password"
              name="password"
              value={password || ""}
              placeholder="Enter to Password"
              onChange={handlePasswordChange}
            />
          </div>
          {errorsPassword.password && (
            <small style={{ color: "red" }}>{errorsPassword.password}</small>
          )}
          <br></br>
          <label htmlFor="phoneNumber">
            <i className="fa fa-phone"></i> Phone
          </label>
          <div>
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber || ""}
              placeholder="Enter to Phone Number"
              onChange={handlePhoneNumberChange}
            />
          </div>
          {errorsPhone.phoneNumber && (
            <small style={{ color: "red" }}>{errorsPhone.phoneNumber}</small>
          )}
          <br></br>

          <label htmlFor="img">
            <i className="fa fa-camera" style={{ color: "silver" }}></i> Img Url
          </label>
          <div>
            <input
              type="text"
              name="img"
              value={img || ""}
              placeholder="Enter to Img Url"
              onChange={handleImgChange}
            />
          </div>
          {errorsimg.img && (
            <small style={{ color: "red" }}>{errorsimg.img}</small>
          )}
          <br></br>
          <label htmlFor="gender">Gender</label>
          <br></br>
          <div className="Gender">
            <p htmlFor="gender">
              <i className="fa fa-male" style={{ marginRight: "10px" }}></i>
              Male
              <input
                type="radio"
                name="gender"
                value="Mela"
                onChange={handleGenderChange}
                style={{
                  width: "18px",
                  height: "15px",
                  marginLeft: "10px",
                  marginTop: "5px",
                  color: "white",
                }}
              />
            </p>
            <p htmlFor="gender">
              <i className="fa fa-female" style={{ marginRight: "10px" }}></i>{" "}
              Female
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleGenderChange}
                style={{
                  width: "18px",
                  height: "15px",
                  marginLeft: "10px",
                  marginTop: "5px",
                  color: "white",
                }}
              />
            </p>
            {errorsGender.gender && (
              <small style={{ color: "red" }}>{errorsGender.gender}</small>
            )}
          </div>
          <div>
            <button onClick={save}>Save</button>
          </div>
          {errors.err && (
            <small
              style={{ color: "red", marginLeft: "26%", fontSize: "15px" }}
            >
              {errors.err}
            </small>
          )}
          <br></br>
          <div>
            <p style={{ color: "white" }}>
              Already have an account ? Login
              <Link to="/"> Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
