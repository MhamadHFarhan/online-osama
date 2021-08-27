const connection = require("../db");
const validateNewPostInput =require("../middlewares/NewPost")
require("dotenv").config();

const newPost = (req, res) => {
  const { error, isValid } = validateNewPostInput(req.body);
  if (!isValid) {
    return res.status(400).json(error);
  } 
  const sql = `INSERT INTO post 
    (id_user,title,category,imgPost,cityPost,pricePost,phonePost,addCart,date)
              VALUES( ?, ?, ?, ?, ?, ?, ?,?,now())`;
  let { id_user,title, category, imgPost, cityPost, pricePost, phonePost,addCart ,date} =
    req.body;
  const data = [
    id_user,
    title,
    category,
    imgPost,
    cityPost,
    pricePost,
    phonePost,
    addCart,
    date,
  ];
  connection.query(sql, data, (err,result) => {
    if (err) {
      res.json({ err: "Invalid Post user" });
    } else if (!result.email) {
      res.json({
        result: "Sava Post",
        data,
      });
    }
  });
};

module.exports = { newPost };
