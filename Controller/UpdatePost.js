const connection = require("../db");

const updatePost = (req, res) => {
  let sql = `update post 
             set id_user = ?,
              title = ?,
              category = ?,
              imgPost = ?,
              cityPost = ?,
              pricePost = ?,
              phonePost = ?,
              where post_id = ? `;
  let data = [
    req.body.id_user,
    req.body.title,
    req.body.category,
    req.body.imgPost,
    req.body.cityPost,
    req.body.pricePost,
    req.body.phonePost,
    req.body.addCart,
    req.params.post_id,
  ];
  connection.query(sql, data, (err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({
        result: "Save Update Post",
        data,
      });
    }
  });
};
module.exports = { updatePost };
