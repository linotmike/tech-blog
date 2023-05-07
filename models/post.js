const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Post extends Model{}


Post.init({
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
    time_created: {
        type: DataTypes.TIME,
        allowNull:false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
          model: "user",
          key: "id",
        },
      },
},{
    sequelize,
    modelName: 'post'
})

  module.exports = Post

  