import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import colors from 'colors';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log(`Connected to MongoDB`.bgYellow);
}).catch((err) => {
    console.log(err);
});


const app = express();
const PORT = process.env.PORT || 3000



app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`.bgCyan.bold)
});  
