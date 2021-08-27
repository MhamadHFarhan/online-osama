const User = require("../Model/register");
// Create and Save a new Customer
exports.create = (req, res) => {
   // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
};
}
// Create a Users
const user = new user({
    yourName : req.body.yourName,
    email : req.body.email,
    password : req.body.password,
    phoneNumber : req.body.phoneNumber,
    gender = req.body.gender,
  });
   // Save users in the database
   User.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });

// Retrieve all users from the database.
exports.findAll = (req, res) => {
    // Create a users
    User.findById(req.params.id_user, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found users with id ${req.params.id_user}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving users with id " + req.params.id_user
            });
          }
        } else res.send(data);
      });
};

// Find a single users with a id_user
exports.findOne = (req, res) => {
    User.findById(req.params.id_user, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.id_user}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.id_user
          });
        }
      } else res.send(data);
    });
  };
// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    User.updateById(
      req.params.id_user,
      new Customer(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found user with id ${req.params.id_user}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating user with id " + req.params.id_user
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    User.remove(req.params.id_user, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with id ${req.params.id_user}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete user with id " + req.params.id_user
          });
        }
      } else res.send({ message: `user was deleted successfully!` });
    });
  };

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all customers."
        });
      else res.send({ message: `All users were deleted successfully!` });
    });
  };