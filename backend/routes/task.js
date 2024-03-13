import express from 'express'
import { createTask, deleteTask, getTask, updateTask } from '../controllers/taskController.js'

const router = express.Router()

router.route("/admin/tasks").post(createTask)
router.route("/tasks").get(getTask)
router.route("/tasks/:id").put(updateTask)
router.route("/tasks/:id").delete(deleteTask)

export default router