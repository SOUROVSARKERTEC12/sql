import express from 'express';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
// import sequelize from './config/database.config.js';

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send({message:"hi"});
})

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT || 3000, () => {
    console.log(`Server running on port ${PORT}`);
  });

// sequelize.sync().then(() => {
//     console.log('Database synchronized');
//     // Start the server only after the database is synchronized
//     const PORT = process.env.PORT || 3000;
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   }).catch((error) => {
//     console.error('Error synchronizing database:', error);
//   });