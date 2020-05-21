const express = require('express');
const logger = require('morgan');
const fs = require('fs');
require('dotenv').config();
const {authError} = require('./utils/jwt');

const app = express();
const port = process.env.PORT || 3000;

// routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');


// set up logger 
app.use(logger('common', {
    stream: fs.createWriteStream('./logs/access.log', {flags: 'a'})
}));
app.use(logger('dev'));

// set up body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connect to db
require('./config/dbconn');

// routes
app.use('/auth',authRoute);
app.use('/user',userRoute);

// unauthorized middleware
app.use(authError);


app.get('/',(req,res)=>{
    res.json("hai"); // quick test running
})

// serve app
app.listen(port, () => console.log(`server listening on port ${port}!`));