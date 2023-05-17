const { User } = require("../models");

const userData = [
  {
    user_id: 1,
    username: "Birhan Meng",
    
    password: "password"
  },
  {
    user_id : 1,
    username: "Bammi Meng",
    
    password: "password2"
  },
  {
    user_id : 1,
    username: "samri abu",
    
    password: "password1"
  },
  {
    user_id : 1,
    username: "shanki lino",
    
    password: "password4"
  },
  {
    user_id : 1,
    username: "yabi gast",
    
    password: "password3"
  },
  { 
    user_id : 1,
    username: "tesfa mike",
    
    password: "password5",
  },
];
 const seedUser = () =>User.bulkCreate(userData);
 module.exports = seedUser