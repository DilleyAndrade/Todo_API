import Task from '../models/task.js'
import  ErrorHandler from '../util/errorHandler.js'

//Create Task => /api/v1/admin/tasks
export const createTask = async(req, res) => {
  const task = await Task.create(req.body)

  res.status(200).json({
    message: "Task created",
  })
}

//Read Task => /api/v1/tasks
export const getTask = async(req, res) => {
  const task = await Task.find()

  res.status(200).json({
    task,
  })
}

//Update Task => /api/v1/tasks/:id
export const updateTask = async(req, res, next) => {
  let task = await Task.findById(req.params.id)

  if(!task){
    return next(new ErrorHandler("Task not found!", 404) )
  }

  task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })

  res.status(200).json({
    message: "Task updated",
  })

}

//Delete Task => /api/v1/tasks/:id
export const deleteTask = async(req, res, next) => {
  const task = await Task.findById(req.params.id)

  if(!task){
    return next(new ErrorHandler("Task not found!", 404) )
  }

  await Task.deleteOne()

  res.status(200).json({
    message: "Task deleted",
  })
}