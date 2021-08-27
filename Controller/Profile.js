const connection = require("../db");


const profile =(req,res) =>{
 
    const sqlCommand = `SELECT * FROM users WHERE id_user = ${req.params.id_user}`;
    connection.query(sqlCommand,(err, result) => {
      if (err) throw err;
      // console.log("RESULT: ", result);
      res.json(result);
        });
    
}
module.exports = {
    profile,
  };
  