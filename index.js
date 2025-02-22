import express from 'express';
import { database } from './database.js';
// import router from './Routes/routes.js';
import { textLogs } from './Middlewares/middleWares.js';
// path import for ejs file
import path from 'path';
// import Todo from './models/Todomodels.js';
// import ejs from 'ejs'
import statciRoute from './Routes/staticRoutes.js'

const app = express();
const PORT  = 8000;

// database coneection
const URI = "mongodb://localhost:27017/Todo";
database(URI);

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// set for telling node js that we are using ejs engin and resolve its path
app.set('view engine', "ejs")
app.set('views', path.resolve('./views'))





// middleware
app.use(textLogs("log.txt"))

// app.use('/api/todo', router)




// ejs static router
app.use('/', statciRoute)

















app.listen(PORT, ()=>{
    console.log(`Server is working on PORT: ${PORT}` )
})