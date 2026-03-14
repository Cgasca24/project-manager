const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  socket.emit("notification", {
    title: "Bienvenido",
    message: "Conexión en tiempo real establecida correctamente"
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

app.get("/", (req, res) => {
  res.json({ service: "notification-service", message: "Servicio de notificaciones activo" });
});

app.get("/notifications", (req, res) => {
  res.json([
    { id: 1, type: "task_created", message: "Se creó una nueva tarea" },
    { id: 2, type: "task_updated", message: "Se actualizó el estado de una tarea" }
  ]);
});

server.listen(3004, () => {
  console.log("Notification Service corriendo en http://localhost:3004");
});