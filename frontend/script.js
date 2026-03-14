const box = document.getElementById("notification-box");
const btn = document.getElementById("btn");

const socket = io("http://localhost:3004");

socket.on("notification", (data) => {
  box.innerHTML = `<strong>${data.title}</strong><br>${data.message}`;
});

btn.addEventListener("click", () => {
  box.innerHTML = "<strong>Notificación simulada</strong><br>El frontend está listo para recibir eventos en tiempo real.";
});