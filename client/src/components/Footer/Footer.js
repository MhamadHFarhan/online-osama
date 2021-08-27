import React,{ useState, useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
const Footer = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const id = decoded.id;
    axios
      .get(`profile/${id}`)
      .then(async (response) => {
        setUsers(response.data);
        console.log("response", response);
        if (users.length === []) {
          console.log("response", response);
          console.log("no user found");
        }
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };
  return (
    <div className="footer">
      <div className="footer-container">
        {users.map((e)=>{
       return <div className="footer-link">
          
          <div className="footer-link-title">
            <h2>Links</h2>
          </div>
          <div className="footer-link-menu">
            <div>
              <Link to={"/Home/"+e.id_user} className="footer-Home">
                <i className="fa fa-fw fa-home" style={{ color: "silver" }}></i>
                <span> Home</span>
              </Link>
            </div>
            <div>
              <Link to={"/About/"+e.id_user} className="footer-About">
                <i
                  className="fa fa-fw fa-address-card"
                  style={{ color: "silver" }}
                ></i>
                <span> About</span>
              </Link>
            </div>
            <div>
              <Link to={"/Contact/"+e.id_user} className="footer-Contact">
                <i
                  className="fa fa-fw fa-envelope"
                  style={{ color: "silver" }}
                ></i>
                <span>Contact US</span>
              </Link>
            </div>
          </div>
        </div>
        })}
        <div className="footer-Contact-Us">
          <div className="footer-Contact-Us-title">
            <h2>Contact Us</h2>
          </div>
          <div className="footer-Contact-Us-menu">
            <div>
              <i class="fas fa-map-marked" style={{ color: "silver" }}></i>
              <Link className="footer-contact-location">
                <span>Amman, Mecca Street</span>
              </Link>
            </div>
            <div>
              <i className="fa fa-phone" style={{ color: "silver" }}></i>
              <Link className="footer-contact-phone">
                <span>(+962) 79 98 95632</span>
              </Link>
            </div>
            <div>
              <i className="fa fa-envelope" style={{ color: "silver" }}></i>
              <Link className="footer-contact-email">
                <span>osama.moh.salem.com</span>
              </Link>
            </div>
          </div>
        
        </div>
      
        <div className="footer-Social-media">
        <div className="footer-Social-title">
          <h2>Social media</h2>
          </div>
            <div className="Social-media-menu">
              <div>
                  <Link>
                    <i
                      className="fab fa-facebook-f"
                      style={{ color: "silver" }}
                    ></i>
                    <span>Facebook</span>
                  </Link>
                </div>
                <div>
                  <Link>
                    <i
                      className="fab fa-twitter"
                      style={{ color: "silver" }}
                    ></i>
                    <span>Twitter</span>
                  </Link>
                </div>
                <div>
                  <Link className="facebook">
                    <i
                      className="fab fa-instagram"
                      style={{ color: "silver" }}
                    ></i>
                    <span>Instagram</span>
                  </Link>
                </div>
            </div>
            </div>
        <div className="footer-Newsletter">
          <div className="footer-Newsletter-title">
            <h2>Singn up Newsletter</h2>
          </div>
          <div className="footer-Newsletter-menu">
          <div>
              <span>Send us to receive all new</span>
          </div>
          <div>
            <input type="email" placeholder="Enter Email Address" />
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>
        </div>
        
           </div>
          
        
     
      <div className="Copyright">
        <strong>© Copyright 2021. All Rights Reserved.</strong>
      </div>
    </div>
  );
};

export default Footer;
