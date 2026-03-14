const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ service: "project-service", message: "Servicio de proyectos activo" });
});

app.get("/projects", (req, res) => {
  res.json([
    { id: 1, name: "Project Manager", description: "Sistema de gestión de proyectos" },
    { id: 2, name: "Phase 2", description: "Escalado con microservicios" }
  ]);
});

app.listen(3002, () => {
  console.log("Project Service corriendo en http://localhost:3002");
});