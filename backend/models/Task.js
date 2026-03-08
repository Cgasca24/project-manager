const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    title: { type: String, required: true },
    description: String,
    assigneeId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, enum: ["todo", "doing", "done"], default: "todo" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);cd backend
npm run dev
