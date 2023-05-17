const { Comment } = require("../models");

const commentData = [
  {
    notes:
      "is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities",
    post_id: 1,
  },
  {
    notes:
      "An Entity Relationship Diagram (ERD) is a type of diagram that lets you see how different entities (e.g. people, customers, or other objects) relate to each other in an application or a database.",
    post_id: 2,
  },
  {
    notes:
      "MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the softwares business logic and display",
    post_id: 3,
  },
  {
    notes:
      "Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language.",
    post_id: 4,
  },
  {
    notes:
      "HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.",
    post_id: 5,
  },
  {
    notes:
      " object-relational mapping, where objects are used to connect the programming language on to the database systems, with the facility to work SQL and object-oriented programming concepts.",
    post_id: 6,
  },
];

const seedCommet = () => Comment.bulkCreate(commentData);

module.exports = seedComment;