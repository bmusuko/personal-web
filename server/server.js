const express = require('express');
const logger = require('morgan');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const userRoute = require('./routes/user');

// set up logger 
app.use(logger('common', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
app.use(logger('dev'));

// set up body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/',(req,res)=>{
    res.json("hai");
})

// routes
app.use('/user',userRoute);

// serve app
app.listen(port, () => console.log(`server listening on port ${port}!`));