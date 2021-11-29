const express = require('express')
const router = express.Router()

const {getAlltasks, getSingletask, createTask, updateTask,  deleteTask} = require('../controllers/tasks')

router.route('/').get(getAlltasks).post(createTask)
router.route('/:id').get(getSingletask).patch(updateTask).delete(deleteTask)

module.exports = router