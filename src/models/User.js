import {Sequelize,DataTypes } from 'sequelize';
import sequelize from '../config/config.js';  // Import sequelize instance

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
