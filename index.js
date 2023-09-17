const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const employeeRoute = require('./src/Routes/employeeRoutes')
app.use('/employee', employeeRoute);

require('./src/Config/connectDB')

const PORT = process.env.PORT
app.listen(PORT,()=> {
    console.log(`server is runnig on ${PORT}`)
})