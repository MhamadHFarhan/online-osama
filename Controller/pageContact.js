const connection = require("../db");
const validateContactInput =require("../middlewares/contact")

const contact =(req,res)=>{
    const { errors, isValid } = validateContactInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    } 
    const sql =`insert into contact (id_user,contact_name ,contact_email,contact_phone,contact_massage)VALUES(?, ?, ?, ?, ?)`
    let { id_user,contact_name, contact_email, contact_phone,contact_massage} =
    req.body;
    const data = [
        id_user,
        contact_name,
        contact_email,
        contact_phone,
        contact_massage,
      ];
      connection.query(sql,data,(err)=>{
        if (err) {
            res.json(err);
          } else {
            res.json({
              result: "Sava Post User",
              data,
            });
          }
      })
}
module.exports={contact}