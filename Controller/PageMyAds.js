const connection = require("../db");

const getMyAds = (req, res) => {
  const sql = `
      select users.id_user, 
             users.img,
             users.yourName,
             post.title,
             post.category,
             post.imgPost,
             post.pricePost,
             post.cityPost,
             post.date,
             post.post_id,
             post.phonePost from post 
             inner join users on post.id_user = users.id_user
             where post.id_user = ${req.params.id_user}`;
  connection.query(sql, (err, result) => {
    if (result) {
      res.json(result);
    } else {
      res.json(err);
    }
  });
};

module.exports = { getMyAds };
