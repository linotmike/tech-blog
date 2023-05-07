const { Blog } = require("../models");

const blogData = [
  {
    notes: "What is JavaScript",
    User_id: 1,
  },
  {
    notes: "What is ERD( Entity Relationship Diagram)",
    User_id: 2,
  },
  {
    notes: "What is MVC",
    User_id: 3,
  },
  {
    notes: "What is Css(cascading style sheet)",
    User_id: 4,
  },
  {
    notes: "What is Html",
    User_id: 5,
  },
  {
    notes: "What is ORM",
    User_id: 6,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
