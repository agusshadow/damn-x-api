// Entidades:
// - User
// - Post
// - Comment
// - Like

// Profe, la entidad de like que es una de las que voy a agregar depende de las relaciones con user_id y post_id, lo comento porque como no entra para este parcial no tengo como llevarla a cabo.


import express from 'express';
import routerApi from './routes/index.js';
import { connectDB } from './db.js';

const port = 2024;

const app = express();

app.use(express.json());

connectDB();

routerApi(app);

app.listen(port, () => {
    console.log(`Corriendo en: http://localhost:${port}`);
})
