const express = require('express');
const app = express();
const env = require('dotenv');
const cors = require('cors');
const connectDb = require('./config/db');
const userRouter = require('./routes/routes');

env.config();

app.use(express.json());
app.use(cors());
app.use('/api',userRouter);

connectDb();

app.listen(process.env.PORT, () =>
    console.log(`Server is running on port ${process.env.PORT}`)
)