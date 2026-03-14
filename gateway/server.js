const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ service: "gateway", message: "API Gateway funcionando" });
});

app.get("/api/users", (req, res) => {
  res.json({ gateway: true, route: "/api/users", target: "user-service" });
});

app.get("/api/projects", (req, res) => {
  res.json({ gateway: true, route: "/api/projects", target: "project-service" });
});

app.get("/api/tasks", (req, res) => {
  res.json({ gateway: true, route: "/api/tasks", target: "task-service" });
});

app.get("/api/notifications", (req, res) => {
  res.json({ gateway: true, route: "/api/notifications", target: "notification-service" });
});

app.listen(3000, () => {
  console.log("Gateway corriendo en http://localhost:3000");
});