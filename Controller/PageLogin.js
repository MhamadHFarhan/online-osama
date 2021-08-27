const connection = require("../db");
//used to hash passwords before we store them in our database
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateLoginInput =require("../middlewares/login")
require("dotenv").config();

const login = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  } 
    const email = req.body.email;
    const password = req.body.password;
    connection.query(
      `Select * From users where email =?`,
      email,
      (err, result) => {
        if (err) {
          res.json({ err:  "wrony email / password combination !" });
        }
        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, respones) => {
            if (respones) {
              const id = result[0].id_user;
              const token = jwt.sign({ id }, "jwtSecret", {
                expiresIn: process.env.TOKEN_EXPIRATION,
              });
              //req.session.user = result;
              res.json({ auth: true, token: token, result: result });
            } else {
              res.json({auth:false ,massage: "wrony email / password combination !" });
            }
          });
        } else {
          res.json({ auth: false, massage:"no user exists"});
        }
      }
    );
  };
module.exports = {login}