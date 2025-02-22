import express from 'express';
import { database } from './database.js';
import router from './Routes/routes.js';
import { textLogs } from './Middlewares/middleWares.js';

const app = express();
const PORT  = 8000;

// database coneection
const URI = "mongodb://localhost:27017/Todo";
database(URI);

app.use(express.json());

// middleware
app.use(textLogs("log.txt"))

app.use('/api/todo', router)
















app.listen(PORT, ()=>{
    console.log(`Server is working on PORT: ${PORT}` )
})