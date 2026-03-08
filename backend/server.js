const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();  
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

mongoose
  .connect("mongodb://127.0.0.1:27017/project_manager")
  .then(() => console.log("✅ MongoDB conectado"))
  .catch((err) => console.error("❌ Error MongoDB:", err.message));

app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "API funcionando" });
});

app.listen(3001, () => {
  console.log("🚀 Backend en http://localhost:3001");
});