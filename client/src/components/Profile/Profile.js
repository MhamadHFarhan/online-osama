import React, { useState, useEffect } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
const Profile = () => {
  const [users, setUsers] = useState([]);
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [img, setimg] = useState("");

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const id = decoded.id;
    axios
      .get(`profile/${id}`, {
        yourName: yourName,
        email: email,
      })
      .then(async (response) => {
        setUsers(response.data);
        console.log("response", response);
        if (users.length === []) {
          console.log("response", response);
          console.log("no user found");
        }
        setYourName(response.data[0].yourName);
        setEmail(response.data[0].email);
        setGender(response.data[0].gender);
        setimg(response.data[0].img);
        setPhoneNumber(response.data[0].phoneNumber);
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };
  return (
    <div className="profile">
      <div className="row-navbar-porfile">
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

        <div className="col-profile">
        <div className="row-Profile">
          <div className="Profile-information-img" >
          <img src={img}/>
          </div>
          <div className="Profile-information-label">
            <div>
              <label style={{color:"silver"}}><i className="far fa-frown" style={{color:"silver"}}></i> Name : </label>
            </div>
            <div>
              <label style={{color:"silver"}}><i className="fa fa-envelope" style={{color:"silver"}}></i>  Email :</label>
            </div>
            <div>
              <label style={{color:"silver"}}><i className="fa fa-male" style={{ color:"silver"}}></i>  Gender :</label>
            </div>
            <div>
              <label style={{color:"silver"}}> <i className="fa fa-phone"  style={{color:"silver"}}></i>  Phone Number :</label>
            </div>
          </div>
          <div className="Profile-information-user" style={{ color: "silver" }}>
            <div>
              <label>{yourName}</label>
            </div>
            <div>
              <label>{email}</label>
            </div>
            <div>
              <label>{gender}</label>
            </div>
            <div>
              <label>{phoneNumber}</label>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
