const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Post extends Model{}


Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    topic_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "topic",
            key: "id"
        }
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: false

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
    modelName: 'post',
    freezeTableName: true ,
    timestamps: true
})

  module.exports = Post

  