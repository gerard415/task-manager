const Model = require('../model/model')
const Asyncwrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')


const getAlltasks = Asyncwrapper(async (req, res)=>{
         const tasks = await Model.find({})
         res.status(200).json({tasks})
})


const getSingletask = Asyncwrapper(async (req, res, next)=>{
        
        const task = await Model.findOne({_id:req.params.id})
        if(!task){
            return next(createCustomError(`No task with id : ${req.params.id}`, 404))
        }
        res.status(200).json({task})
})


const createTask = Asyncwrapper(async (req, res)=>{
        const task = await Model.create(req.body)
        res.status(200).json({task})
})


const updateTask = Asyncwrapper(async (req, res, next)=>{
        const task = await Model.findOneAndUpdate({_id:req.params.id}, req.body, {new: true, runValidators:true})
        if(!task){
            return next(createCustomError(`No task with id : ${req.params.id}`, 404))
        }
        res.status(200).json({task})
})


const deleteTask = Asyncwrapper(async (req, res, next)=>{
        const task = await Model.findOneAndDelete({_id:req.params.id})
        if(!task){
            return next(createCustomError(`No task with id : ${req.params.id}`, 404))
        }
        res.status(200).json({task})
})

module.exports = {
    getAlltasks, getSingletask, createTask, updateTask, deleteTask
}