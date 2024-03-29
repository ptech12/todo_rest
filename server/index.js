import epxress from 'express'
import cors from 'cors'
import pool from './db.js'
import dotenv from 'dotenv';

dotenv.config();


const app = epxress();
const PORT = process.env.PORT || 8080;


// middleware
app.use(cors());
app.use(epxress.json());

// Routes //

// create todo

// get all todo

// get a todo


// update all todo

// delete todo

app.listen(PORT, () => {
    console.log("Server running on PORT=" + PORT);
})