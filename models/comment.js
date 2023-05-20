const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Comment extends Model{}


Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: false

     },
     topic_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "topic",
          key: "id",
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
},{
    sequelize,
    modelName: "comment"
})

  module.exports = Comment

  