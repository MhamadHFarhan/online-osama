const connection = require("../db");

const UpdateUser = (req, res) => {
 
  const sql = `UPDATE users 
  SET yourName = ? , email = ? , password = ? , phoneNumber = ? ,gender = ? , img = ? , addCart =?
  WHERE id_user = ? `;
  let data = [
    req.body.yourName,
    req.body.email,
    req.body.password,
    req.body.phoneNumber,
    req.body.gender,
    req.body.img,
    req.body.addCart,
    req.params.id_user,
  ];
 

  connection.query(sql, data,(err) => {
   
    if (err) {
      res.json(err);
    } else {
      res.json ({
        result : "Sava Update User" , data
      })
    }
  });
};
module.exports = { UpdateUser };
