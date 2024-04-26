// Entidades:
// - User
// - Post
// - Like
// - Comment

import express from 'express';
import mongoose from 'mongoose';

import routerApi from './routes/index.js';

const port = 2024;

const app = express();

app.use(express.json());

routerApi(app);

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

app.listen(3000, () => {
    console.log(`Corriendo en: http://localhost:${port}`);
})
