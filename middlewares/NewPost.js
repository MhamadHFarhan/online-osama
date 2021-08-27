const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports =function validateNewPostInput(data){
    // Convert empty fields to an empty string so we can use validator functions
let error ={};
    data.title =!isEmpty(data.title) ? data.title : "";
data.category =!isEmpty(data.category) ? data.category : "";
data.imgPost =!isEmpty(data.imgPost) ? data.imgPost : "";
data.cityPost =!isEmpty(data.cityPost) ? data.cityPost : "";
data.pricePost =!isEmpty(data.pricePost) ? data.pricePost : "";
data.date =!isEmpty(data.date) ? data.date : "";
data.phonePost =!isEmpty(data.phonePost) ? data.phonePost : "";
//Title Check
if(Validator.isEmpty(data.title)){
error.title = "Title field is required"
}
if(Validator.isEmpty(data.category)){
error.category = "Category field is required"
}
if(Validator.isEmpty(data.imgPost)){
error.imgPost = "Img field is required"
}
if(Validator.isEmpty(data.cityPost)){
error.cityPost = "City field is required"
}
if(Validator.isEmpty(data.pricePost)){
error.pricePost = "Price field is required"
}
if(Validator.isEmpty(data.phonePost)){
error.phonePost = "Phone field is required"
}
return {
    error,
    isValid:isEmpty(error)
}
}