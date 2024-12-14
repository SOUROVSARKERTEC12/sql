import {Sequelize,DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
  }
});

export default Post;
