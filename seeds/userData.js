const { User } = require("../models");

const userData = [
  {
    username: "Birhan Meng",
    
    password: "password"
  },
  {
    username: "Bammi Meng",
    
    password: "password2"
  },
  {
    username: "samri abu",
    
    password: "password1"
  },
  {
    username: "shanki lino",
    
    password: "password4"
  },
  {
    username: "yabi gast",
    
    password: "password3"
  },
  {
    username: "tesfa mike",
    
    password: "password5"
  },
];
 const seedUser = () =>User.bulkCreate(userData);
 module.exports = seedUser