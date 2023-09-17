const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required:[true, 'Title is mandatory'],
  },
  description: {
    type: String,
  },
  dueDate: {
    type: Date,
  },
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
},{versionKey:false});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
