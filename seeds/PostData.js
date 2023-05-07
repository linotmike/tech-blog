const { Post } = require("../models");

const postData = [
  {
    notes: "What is JavaScript",
    User_id: 1,
    time_created: 22
  },
  {
    notes: "What is ERD( Entity Relationship Diagram)",
    User_id: 2,
    time_created: 20
  },
  {
    notes: "What is MVC",
    User_id: 3,
    time_created: 2
  },
  {
    notes: "What is Css(cascading style sheet)",
    User_id: 4,
    time_created: 18
  },
  {
    notes: "What is Html",
    User_id: 5,
    time_created: 3
  },
  {
    notes: "What is ORM",
    User_id: 6,
    time_created: 14
  },
];

const seedBlogs = () => Post.bulkCreate(postData);

module.exports = seedBlogs;
