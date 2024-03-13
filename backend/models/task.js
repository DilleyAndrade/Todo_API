import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter task title"],
      maxLength: [100, "Task title cannot exceed 100 characteres"]
    },
    description: {
      type: String,
      required: [true, "Please enter task description"],
      maxLength: [100, "Task description cannot exceed 100 characteres"]
    },
    category: {
      type: String,
      required: [true, "Please enter task category"],
      maxLength: [100, "Task category cannot exceed 100 characteres"]
    },
    validity: {
      type: String,
      required: [true, "Please enter task validity"],
      maxLength: [40, "Task validity cannot exceed 40 characteres"]
    },
    isComplete: {
      type: Boolean,
      default: false
    },
  },
  {timestamps: true}
)

export default mongoose.model("Task", taskSchema)