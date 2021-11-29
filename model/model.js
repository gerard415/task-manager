const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name : {
        type: String,
        required:[true, 'name cannot be empty'],
        maxlength: [20, 'name cannot be more than 20 characters'],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('tasks', taskSchema)