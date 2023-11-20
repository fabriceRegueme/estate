import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000


app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`)
});  