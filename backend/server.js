import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './database/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/admin.route.js';

// app config
const app = express();
const PORT = process.env.PORT || 4000;
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());


// api endpoints
app.use('/api/admin', adminRouter);

app.listen(PORT, () => {
  console.log(`Server is listning on port ${PORT}`);
  connectDB();
});
