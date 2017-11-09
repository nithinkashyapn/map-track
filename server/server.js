// We will declare all our dependencies here
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const map = require('./controllers/map');

//Connect mongoose to our database
mongoose.connect(config.database);

//Declaring Port
const port = 3001;

//Initialize our app variable
const app = express();

//Middleware for CORS
app.use(cors());

//Middlewares for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send("Invalid page");
})

//Routing all HTTP requests to /bucketlist to bucketlist controller
app.use('/map',map);

//Listen to port 3000
app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});