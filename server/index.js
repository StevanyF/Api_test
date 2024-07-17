require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
console.log(mongoString)

mongoose.connect(mongoString);
const database = mongoose.connection;
const app = express();

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());

const routes = require('./Routes/routes');
app.use('/api', routes)

app.use(cors());

app.listen(4000, () => {
    console.log(`Server Started at ${4000}`)
})