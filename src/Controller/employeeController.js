const Employee = require("../Model/employeeModel");
const Tasks = require("../Model/taskModel");

const createUser = async (req, res) => {
  const { name, email, phone, hireDate, position } = req.body;

  try {
    const employeeAdded = Employee.create({
      name,
      email,
      phone,
      hireDate,
      position,
    });

    res
      .status(200)
      .json({ message: "employee Added", employee: employeeAdded });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const allEmployee = await Employee.find();

    res
      .status(200)
      .json({ message: "employee retrived", employee: allEmployee });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.body;

  try {
    const singleEmpl = await Employee.findById({ _id: id});
    res.status(200).json({ employee: singleEmpl });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEmployee = await Employee.findByIdAndDelete({ _id: id });
    res.status(201).json({ message: "deleted", deletedEmployee });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateSingle = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, {
      $set: req.body,
    });
    res.status(201).json({ message: "Updated", updatedEmployee });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const tasksByID = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    
    const tasks = await Tasks.find({ _id: { $in: employee.tasks } });
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const taskForSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    const { title, description, dueDate } = req.body;

    const newTask = await Tasks.create({
      title,
      description,
      dueDate,
      employeeId: employee._id,
    });

    employee.tasks.push(newTask);
    await employee.save();
    res
      .status(201)
      .json({ message: "new task created for an employee", task: newTask });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllUser, createUser, deleteUser, updateSingle, getById, tasksByID, taskForSingleUser };
