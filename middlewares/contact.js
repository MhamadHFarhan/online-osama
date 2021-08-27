const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateContactInput(data) {
    let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
    data.contact_name = !isEmpty(data.contact_name) ? data.contact_name : "";
    data.contact_email = !isEmpty(data.contact_email) ? data.contact_email : "";
    data.contact_phone = !isEmpty(data.contact_phone) ? data.contact_phone : "";
    data.contact_massage = !isEmpty(data.contact_massage) ? data.contact_massage : "";
   
  // Name checks
    if (Validator.isEmpty(data.contact_name)) {
      errors.contact_name = "Name field is required";
    }
  // email checks
    if (Validator.isEmpty(data.contact_email)) {
      errors.contact_email = "Email field is required";
    }
  // phone checks
    if (Validator.isEmpty(data.contact_phone)) {
      errors.contact_phone = "Phone field is required";
    }
  
  // massage checks
    if (Validator.isEmpty(data.contact_massage)) {
      errors.contact_massage = "massage field is required";
    }
  
  return {
      errors,
      isValid: isEmpty(errors)
    };
  };