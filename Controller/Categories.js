const connection = require("../db");

const category  =(req,res)=>{
 const sql = `insert into category (nameCategory,imgCategory) VALUES (?,?)`
let {nameCategory,imgCategory}=req.body
 const data = [nameCategory,imgCategory]
 connection.query(sql,data,(err)=>{
     if(err){
         res.json(err)
         console.log(err)
     }else{
         res.json({
             result:"Save category",
             data,
         })
     }
 })
}
const getcategory =(req,res) =>{
    
    const sql =`select * FROM category`
    connection.query(sql,(err,result)=>{
        if (err){
            res.json(err);
            }
            res.json(result)
    })
}

const updataCategory  = (req,res) =>{
    const sql = `UPDATE category 
    SET nameCategory = ? , imgCategory = ? 
    WHERE category_id = ? `;
    let data = [
      req.body.nameCategory,
      req.body.imgCategory,
      req.params.category_id,
    ];
    connection.query(sql,data,(err,result)=>{
        if (err){
            res.json(err);
            }
            res.json(result)
    })
}



module.exports={category ,getcategory,updataCategory}
