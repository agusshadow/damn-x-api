import mongoose from "mongoose";

const dbName = 'test';

export const connectDB = () => {
    mongoose.connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Error al conectar con MongoDB'));
    db.once('open', () => { console.log('Conexión exitosa a MongoDB')});
}