import {Sequelize, DataTypes} from 'sequelize';
import sequelize from '../config/config.js';
import User from "./User.js";

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true, // Explicitly stating allowNull for clarity
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Users', // Use the actual table name as a string if the `User` model is not already defined.
            key: 'id',
        },
    },
}, {
    timestamps: true,  // Adds createdAt and updatedAt by default
    paranoid: true,    // Adds deletedAt for soft deletes
});

// Defining associations
User.hasMany(Post, {foreignKey: 'userId', as: 'posts'}); // Updated `as` to pluralize for consistency
Post.belongsTo(User, {foreignKey: 'userId', as: 'user'});
export default Post;
