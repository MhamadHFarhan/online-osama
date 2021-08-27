const express = require("express");
const mainRouter = express.Router();
const { register } = require("../Controller/PageRegister");
const { login } = require("../Controller/PageLogin");
const { profile } = require("../Controller/Profile");
const { UpdateUser } = require("../Controller/PageUpdateUser");
const { newPost } = require("../Controller/NewPost");
const {
  category,
  getcategory,
  updataCategory,
} = require("../Controller/Categories");
const {
  Cars,
  Mobile,
  Tablet,
  Computer,
  Laptop,
  Playstation,
  BabySupplies,
  Clothes,
  getPost,
  getPostID,
  deletePost,
} = require("../Controller/PageProducts");
const { contact } = require("../Controller/pageContact");

const { getMyAds } = require("../Controller/PageMyAds");
const { updatePost } = require("../Controller/UpdatePost");
mainRouter.get("/profile/:id_user", profile);
mainRouter.post("/register", register);
mainRouter.post("/login", login);
mainRouter.put("/UpdateUser/:id_user", UpdateUser);

mainRouter.post("/newpost", newPost);

mainRouter.post("/category", category);
mainRouter.get("/categorys", getcategory);
mainRouter.put("/UpdataCategorys/:category_id", updataCategory);

mainRouter.put("/UpdatePost/:post_id", updatePost);

mainRouter.get("/findcar", Cars);
mainRouter.get("/findMobile", Mobile);
mainRouter.get("/findTablet", Tablet);
mainRouter.get("/findComputer", Computer);
mainRouter.get("/findLaptop", Laptop);
mainRouter.get("/findPlaystation", Playstation);
mainRouter.get("/findBabySupplies", BabySupplies);
mainRouter.get("/findClothes", Clothes);
mainRouter.get("/getPost/:post_id", getPostID);
mainRouter.get("/getPost", getPost);
mainRouter.delete("/deletePost/:post_id", deletePost);

mainRouter.get("/getMyAds/:id_user", getMyAds);


mainRouter.post("/contactUs", contact);

// Router cart
const { getCart, getAddCartLength, getInfCart ,updateAddcart} = require("../Controller/Cart");
mainRouter.get("/getCart", getCart);
mainRouter.put("/updateAddCart/:id_user", updateAddcart);
mainRouter.get("/getCartLength/:id_user", getAddCartLength);
mainRouter.get("/getInfCart/:id_user", getInfCart);
module.exports = mainRouter;
