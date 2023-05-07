const { User } = require("../models");

const userData = [
  {
    name: "Birhan Meng",
    email: "lino@lino.com",
    password: "password",
  },
  {
    name: "Bammi Meng",
    email: "bammi@bammi.com",
    password: "password2",
  },
  {
    name: "samri abu",
    email: "samri@samri.com",
    password: "password1",
  },
  {
    name: "shanki lino",
    email: "shanki@shanki.com",
    password: "password4",
  },
  {
    name: "yabi gast",
    email: "yabi@lino.com",
    password: "password3",
  },
  {
    name: "tesfa mike",
    email: "tesfa@tesfa.com",
    password: "password5",
  },
];
 const seedUser = () =>User.bulkCreate(userData);
 module.exports = seedUser