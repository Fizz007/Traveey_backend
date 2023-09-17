const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true, 'name is important'],
    minLength:[4, 'value cannot be less than 4'],
    maxLength:[8, 'value cannot be greater than 8'],
  },
  email: {
    type: String,
    unique: true,
    required:[true, 'Email is mandatory'],
    validate: {
        validator:(data)=> {
            console.log(data)
            return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(data)
        },
        message: `email is invalid`
    }
  },
  phone: {
    type: String,
    validate:{
        validator:(data)=> {
            console.log(data)
            return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(data)
        },
        message: `mobile no. should be of 10 digits`
    }
  },
  hireDate: {
    type: Date,
  },
  position: {
    type: String,
  },
  
},{versionKey:false});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
