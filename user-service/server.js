const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ service: "user-service", message: "Servicio de usuarios activo" });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Carolina Gasca", email: "gasca@mail.com", role: "admin" },
    { id: 2, name: "Usuario Demo", email: "demo@mail.com", role: "member" }
  ]);
});

app.listen(3001, () => {
  console.log("User Service corriendo en http://localhost:3001");
});