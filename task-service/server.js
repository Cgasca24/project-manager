const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ service: "task-service", message: "Servicio de tareas activo" });
});

app.get("/tasks", (req, res) => {
  res.json([
    { id: 1, title: "Crear microservicios", status: "doing" },
    { id: 2, title: "Agregar Docker Compose", status: "todo" },
    { id: 3, title: "Implementar notificaciones", status: "done" }
  ]);
});

app.listen(3003, () => {
  console.log("Task Service corriendo en http://localhost:3003");
});