const connection = require("../db");


const getCart = (req, res) => {
  const sql = `select * from post`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getAddCartLength = (req, res) => {
  const sql = `SELECT * FROM post 
  inner join users on post.id_user = users.id_user
  where addCart = "Remove to Cart"`;
  connection.query(sql, (err, result) => {
    const id = result.post_id
    const idUser = req.params.id_user
    const addCart = result.addCart ="Remove to Cart"
    console.log(addCart.length)
 const findcart = result.filter((e)=>{
     return  idUser !== id
 })
   res.json(findcart.length)
  });
};
const getInfCart = (req, res) => {
  const sql = `select users.id_user, 
  users.img,
  users.yourName,
  users.email,
  post.title,
  post.category,
  post.imgPost,
  post.pricePost,
  post.addCart,
  post.cityPost,
  post.date,
  post.post_id,
  post.phonePost from post 
  inner join users on post.id_user = users.id_user
  where addCart = "Remove to Cart" `;
  connection.query(sql, (err, result) => {
    const id = result.post_id
    const idUser = req.params.id_user
    const addCart = result.addCart ="Remove to Cart"
    console.log(addCart)
 const findcart = result.filter((e)=>{
     return  idUser !== id
 })
   res.json(findcart)
  });
};
const updateAddcart = (req, res) => {
  const sql = `UPDATE post SET addCart = ? where post_id = ?`;
  let data = [req.body.addCart, req.params.id_user];
  connection.query(sql, data, (err, result) => {
    if (result) {
      res.json(result);
    } else {
      res.json(err);
    }
  });
};
const Checkout = ()=>{
  const sql =`select `
}
module.exports = { getCart, getAddCartLength, getInfCart, updateAddcart };
