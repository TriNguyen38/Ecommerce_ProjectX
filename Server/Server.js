import express from 'express';
import connectToDB from './src/config/dbConnect.js';
import dotenv from 'dotenv';
import initRoutes from './src/routers/index';
import cookieParser from 'cookie-parser';

dotenv.config();
const port = process.env.PORT || 6001

const app = express();
app.use(cookieParser()); // đọc data của cookie
app.use(express.json()) // data client gửi lên đọc theo kiểu json
app.use(express.urlencoded({extended : true})) // data client gửi lên đọc theo kiểu urlencoded (array...)
connectToDB();
initRoutes(app);

app.listen(port, () => {
    console.log("Server is listenning on http://localhost:" + port);
})


