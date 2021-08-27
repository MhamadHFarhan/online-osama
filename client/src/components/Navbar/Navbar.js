import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "./DarkMode.css";
import jwt_decode from "jwt-decode";
import useDarkMode from "use-dark-mode";
import Toggle from "./Toggle";
const NavBar = () => {
  const [users, setUsers] = useState([]);
  const [id_user, setId_user] = useState("");
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [img, setimg] = useState("");
  const [postLength, setPostLength] = useState([]);
  const darkMode = useDarkMode(false);
  useEffect(() => {
    getUser();
    getAddCartLength();
  }, [postLength]);
  const getAddCartLength = () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const id = decoded.id;
    axios.get(`/getCartLength/${id}`).then((res) => {
      setPostLength(res.data);
      console.log(res.data);
    });
  };
  const getUser = async () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const id = decoded.id;
    axios
      .get(`profile/${id}`, {
        id_user: id_user,
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
        setId_user(response.data[0].id_user);
        setYourName(response.data[0].yourName);
        setEmail(response.data[0].email);
        setimg(response.data[0].img);
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };

  const [clicked, setClicked] = useState(false);
  const [navbarMenu, setNavbarMenu] = useState(false);
  const handleIcon = () => {
    setClicked(!clicked);
  };
  const clickNavbarMenu = () => {
    setNavbarMenu(!navbarMenu);
  };
  
  return (
    <div className="Navbar">
      <div className="row-Navbar">
        <div className="col-Navbar-logo">
          <div className="Navbar-logo">
            <div onClick={clickNavbarMenu}>
              <i
                className={navbarMenu ? "fa fa-times" : "fa fa-bars"}
                onClick={clickNavbarMenu}
              ></i>
            </div>
            <div>
              <h2 title="Online Shopping">Online Shopping</h2>
            </div>
          </div>
          <div className="menu-list">
            {navbarMenu ? (
              <div>
                {users.map((e, i) => {
                  return (
                    <div className="Navbar-List-mobile" key={i}>
                      <ul>
                        <li>
                          <i className="fa fa-fw fa-home"></i>
                          <Link to={"/Home/" + e.id_user}>Home</Link>
                        </li>
                        <li>
                          <i className="fa fa-fw fa-address-card"></i>
                          <Link to={"/About/" + e.id_user}>About</Link>
                        </li>
                        <li>
                          <i className="fa fa-fw fa-envelope"></i>
                          <Link to={"/Contact/" + e.id_user}>Contact</Link>
                        </li>
                        <li>
                          <i className="fa fa-fw fa-list-alt"></i>
                          <Link to={"/Categories/"+ e.id_user}>Categories</Link>
                        </li>
                        <li>
                          <i className="fa fa-fw fa-shopping-cart"></i>
                          <Link to={"/Products/" + e.id_user }>Shop</Link>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>

        <div className="col-Navbar-menu">
          {users.map((e, i) => {
            return (
              <div>
                <nav key={i}>
                  <ul>
                    <li>
                      <Link to={"/Home/" + e.id_user}>
                        <i className="fa fa-fw fa-home"></i> Home
                      </Link>
                    </li>
                    <li>
                      <Link to={"/About/" + e.id_user}>
                        <i className="fa fa-fw fa-address-card"></i> About
                      </Link>
                    </li>
                    <li>
                      <Link to={"/Contact/" + e.id_user}>
                        <i className="fa fa-fw fa-envelope"></i> Contact
                      </Link>
                    </li>
                    <li>
                      <Link to={"/Categories/" + e.id_user }>
                        <i className="fa fa-fw fa-list-alt"></i> Categories
                      </Link>
                    </li>
                    <li>
                      <Link to={"/Products/" + e.id_user }>
                        <i className="fa fa-fw fa-shopping-cart"></i> Shop
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            );
          })}
        </div>
        <div className="col-Navbar-profile">
          {users.map((e)=>{
          return<nav>
            <ul>
              <li>
                <Link to={"/Cart/"+ e.id_user }>
                  <i className="fa fa-fw fa-shopping-cart"></i>Cart{" "}
                  <span style={{color:"red"}}>({postLength})</span>
                </Link>
              </li>
              <li>
                <Link to={"/NewPost/"+ e.id_user }>
                  <i className="fa fa-plus-square"></i> New Post
                </Link>
              </li>
              <li>
                <img src={img} />
                <i className="fa fa-angle-down" onMouseDown={handleIcon}></i>
              </li>
            </ul>
          </nav>
        })}
          {clicked ? (
            <div className="Navbar-Profile-Setting">
              {users.map((e, i) => {
                return (
                  <div className="Navbar-Profile-User" key={i}>
                    <div>
                      <i className="fa fa-user" style={{ color: "silver" }}></i>
                      <Link to={"/Profile/" + e.id_user}>My Profile</Link>
                    </div>
                    <div>
                      <i
                        className="fas fa-user-edit"
                        style={{ color: "silver" }}
                      ></i>
                      <Link to={"/EditProfile/" + e.id_user}>Edit Profile</Link>
                    </div>
                    <div>
                      <i
                        className="fas fa-user-edit"
                        style={{ color: "silver" }}
                      ></i>
                      <Link to={"/MyAds/" + e.id_user}>My Ads</Link>
                    </div>
                    <div>
                      <i
                        className="fa fa-adjust"
                        style={{ color: "silver" }}
                      ></i>
                      <Link>Dark</Link>
                      <Toggle
                        checked={darkMode.value}
                        onChange={darkMode.toggle}
                      />
                    </div>
                    <div className="Sign_out">
                      <i
                        className="fas fa-sign-out-alt"
                        style={{ color: "silver" }}
                      ></i>
                      <Link to="/" >
                        <span>Sign out</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
