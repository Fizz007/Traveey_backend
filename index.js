const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
const employeeRoute = require('./src/Routes/employeeRoutes')
app.use('/employee', employeeRoute);

//DB Connection
require('./src/Config/connectDB')


//Server
const PORT = process.env.PORT
app.listen(PORT,()=> {
    console.log(`server is runnig on ${PORT}`)
})