const express = require('express')

const router = express.Router();

const {getAllUser, createUser, deleteUser, updateSingle, getById, tasksByID, taskForSingleUser } = require('../Controller/employeeController')

router.get('/', getAllUser)
router.post('/', createUser)
router.get('/:id', getById)
router.patch('/:id', updateSingle)
router.delete('/:id', deleteUser)
router.get('/:id/tasks', tasksByID)
router.post('/:id/tasks', taskForSingleUser)

function hello(){
    console.log("hii")
}

module.exports = router;