import React, { useState, useEffect } from "react";
import "./EditProfile.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
const EditProfile = () => {
  const [users, setUsers] = useState([]);
  const [yourName, setYourName] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [img, setimg] = useState("");
  useEffect(() => {
    getUsers();
  }, []);
  const handleYourNameChange = (e) => {
    setYourName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleImgChange = (e) => {
    setimg(e.target.value);
  };

  const getUsers = async () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const id = decoded.id;

    axios
      .get(`profile/${id}`, {})
      .then(async (response) => {
        console.log("response", response);
        setUsers(response.data);
        setYourName(response.data[0].yourName);
        setEmail(response.data[0].email);
        setPassword(response.data[0].password);
        setPhoneNumber(response.data[0].phoneNumber);
        setGender(response.data[0].gender);
        setimg(response.data[0].img);
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };

  const UpdateUser = (e) => {
    let data = {
      yourName: yourName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      gender: gender,
      img: img,
    };
    
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const id = decoded.id;
    axios.put(`/UpdateUser/${id}`, data).then((res) => {
      console.log("response", res.data);
    });
  };
  return (
    <div className="Edit-profile">
      <div className="row-navbar-edit-porfile">
        <div className="col-navbar">
          {users.map((e, i) => {
            return (
              <div className="sidenav">
                <img src={img} />
                <p>{email}</p>
                <hr style={{ marginTop: "1rem", width: "160%" }}></hr>
                <ul>
                  <li>
                    <Link to={"/Profile/" + e.id_user}>
                      <i
                        className="fas fa-user"
                        style={{ color: "silver" }}
                      ></i>{" "}
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link to={"/EditProfile/" + e.id_user}>
                      <i
                        className="fas fa-user-edit"
                        style={{ color: "silver" }}
                      ></i>
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <Link to={"/MyAds/" + e.id_user}>
                      <i
                        className="fas fa-bullhorn"
                        style={{ color: "silver" }}
                      ></i>
                      My Ads
                    </Link>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="col-edit-profile">
          <div className="row-edit-profile">
            <div className="col-edit-profile-img">
              <img src={img} />
            </div>

            <div className="col-edit-profile-input">
              <div>
                <label htmlFor="yourName">Your Name</label>
                <input
                  type="text"
                  name="yourName"
                  value={yourName}
                  placeholder="Enter to Your Name"
                  onChange={handleYourNameChange}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone</label>

                <input
                  type="text"
                  name="phoneNumber"
                  value={phoneNumber || ""}
                  placeholder="Enter to Phone Number"
                  onChange={handlePhoneNumberChange}
                />
              </div>

              <div>
                <label htmlFor="img">Img Url</label>
                <input
                  type="text"
                  name="img"
                  value={img || ""}
                  placeholder="Enter to Img Url"
                  onChange={handleImgChange}
                />
              </div>
              <div>
              <label htmlFor="gender">Gender</label>
              <select onChange={handleGenderChange}>
                <option value={gender}>{gender}</option>
                <option>select Gender</option>
                <option value="Male">Mela</option>
                <option value="Female">Female</option>
              </select>
              </div>
              <div>
                <button onClick={UpdateUser}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
