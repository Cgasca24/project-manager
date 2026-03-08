const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// READ by Project
router.get("/project/:projectId", async (req, res) => {
  const tasks = await Task.find({ projectId: req.params.projectId }).sort({ createdAt: -1 });
  res.json(tasks);
});

// CREATE
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

module.exports = router;