import isEmpty  from "is-empty";
const  validateLoginInput =(email,password) => {
  let errors = {};
 
// Email checks
   if (isEmpty(email)) {
    errors.email = "Email is invalid";
  } else if((!/\S+@\S+\.\S+/.test(email))){
  errors.email="Email address is invalid"
  }
// Password checks
  if (isEmpty(password)) {
    errors.password = "Password field is required";
  }

if (password < 6) {
    errors.password = "Password must be at least 6 characters";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};
export default validateLoginInput