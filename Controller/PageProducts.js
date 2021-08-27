const connection = require("../db");

const getPost = (req, res) => {
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
         post.addCart,
         post.post_id,
         post.phonePost from post 
         inner join users on post.id_user = users.id_user
      `;
  connection.query(sql, (err, result) => {
    if (result) {
      res.json(result);
    } else {
      res.json(err);
    }
  });
};

const getPostID = (req, res) => {
  const sql = `select *  from post where post_id = ?`;
  const data = [req.params.post_id];
  connection.query(sql, data, (err, result) => {
    if (result) {
      res.json(result);
    } else {
      res.json(err);
    }
  });
};

const deletePost = (req, res) => {
  const sql = `Delete from post where post_id= ?`;
  const data = [req.params.post_id];
  connection.query(sql, data, (err, result) => {
    if (result) {
      res.json("Delete Post");
    } else {
      res.json(err);
    }
  });
};
const Mobile = (req, res) => {
  const adr = "Mobile";
  const sql = `SELECT * FROM post WHERE category = ?`;
  connection.query(sql, [adr], (err, result) => {
    res.json(result);
    console.log(result);
  });
};
const Cars = (req, res) => {
  const adr = "Cars";
  const sql = `SELECT * FROM post WHERE category = ?`;
  connection.query(sql, [adr], (err, result) => {
    res.json(result);
    console.log(result);
  });
};
const Tablet = (req, res) => {
  const adr = "Tablet";
  const sql = `SELECT * FROM post WHERE category = ?`;
  connection.query(sql, [adr], (err, result) => {
    res.json(result);
    console.log(result);
  });
};
const Computer = (req, res) => {
  const adr = "Computer";
  const sql = `SELECT * FROM post WHERE category = ?`;
  connection.query(sql, [adr], (err, result) => {
    res.json(result);
    console.log(result);
  });
};
const Laptop = (req, res) => {
  const adr = "Laptop";
  const sql = `SELECT * FROM post WHERE category = ?`;
  connection.query(sql, [adr], (err, result) => {
    res.json(result);
    console.log(result);
  });
};
const Playstation = (req, res) => {
  const adr = "Playstation";
  const sql = `SELECT * FROM post WHERE category = ?`;
  connection.query(sql, [adr], (err, result) => {
    res.json(result);
    console.log(result);
  });
};
const BabySupplies = (req, res) => {
  const adr = "Baby Supplies";
  const sql = `SELECT * FROM post WHERE category = ?`;
  connection.query(sql, [adr], (err, result) => {
    res.json(result);
    console.log(result);
  });
};
const Clothes = (req, res) => {
  const adr = "Clothes";
  const sql = `SELECT * FROM post WHERE category = ?`;
  connection.query(sql, [adr], (err, result) => {
    res.json(result);
    console.log(result);
  });
};
module.exports = {
  Mobile,
  Cars,
  Tablet,
  getPost,
  getPostID,
  deletePost,
  Computer,
  Laptop,
  Playstation,
  BabySupplies,
  Clothes,
  };
