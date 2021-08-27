const connection = require("../db");
const bcrypt = require("bcrypt");
const validateRegisterInput = require("../middlewares/register");
require("dotenv").config();

const register = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  let sql = `INSERT INTO users 
                  (yourName, email, password, phoneNumber ,gender ,img) VALUES
                  (?, ?, ?, ? ,? ,?)`;
  let { yourName, email, password, phoneNumber, gender, img } = req.body;
  password = bcrypt.hashSync(password, Number("salt"));
  const data = [yourName, email, password, phoneNumber, gender, img ];
  connection.query(sql, data, (err, result) => {
    if (err) {
      res.json({ err: "Invalid Email or Password" });
    } else if (!result.email) {
      res.json({
        result: "Sava register",
        data,
      });
    }
  });
};
module.exports = {
  register,
};
