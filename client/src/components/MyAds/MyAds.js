import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./MyAds.css";

const MyAds = () => {
  const [users, setUsers] = useState([]);
  const [yourName, setYourName] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [img, setimg] = useState("");
  const [myAds, setMyAds] = useState([]);
  useEffect(() => {
    getMyAds();
    getUsers();
  }, []);
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
  const getMyAds = () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const id = decoded.id;
    axios.get(`getMyAds/${id}`).then((res) => {
      setMyAds(res.data);
    });
  };

  const MyAds = myAds.map((e, i) => {
    return (
      <div className="info-myAds" key={i}>
        <div className="MyAds-user">
          <img
            src={e.img}
            style={{
              width: "50px",
              borderRadius: "50%",
            }}
          />
          <label>{e.yourName}</label>
        </div>
        <div className="MyAds-post-info">
          <div  className="MyAds-post-img">
            <img
              src={e.imgPost}
            />
          </div>
            <div className="MyAds-title-city">
              <p>{e.title}</p>
              <p>{e.cityPost}</p>
              <p>{e.date}</p>
            </div>
            <div className="MyAds-Price-Phone">
              <p style={{ background: "yellow", color: "black" }}>
                {e.pricePost}JD
              </p>
              <p>{e.phonePost}</p>
               <button><Link
                to={"/UpdatePost/" + e.id_user + "/" + e.post_id}
                params={{ id: e.post_id }}
              >
                Edit The Ads
              </Link></button>
            
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="MyAds">
      <div className="row-navbar-myAds">
        <div className="col-navbar-myAds">
          {users.map((e, i) => {
            return (
              <div className="sidenav-myAds">
                <img src={img} />
                <p>{email}</p>
                <hr style={{ marginTop: "1rem", width: "100%" }}></hr>
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
        <div className="col-myAds">
          <div className="myAds-list">
            <h4>
              My Ads <hr style={{ marginTop: "1rem", width: "100%" }}></hr>
            </h4>
            <div>{MyAds}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyAds;
