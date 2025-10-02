const mensajes = [
  "Amor Infinito",
  "Mi Katalina",
  "Un Año Mas",
  "Mas Cerca De Estar Juntos",
];

let i = 0;

setInterval(() => {
  document.getElementById("mensaje").textContent = mensajes[i];
  i = (i + 1) % mensajes.length;
}, 3000);

const btn = document.getElementById("play-btn");
const audio = document.getElementById("bg-music");

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = "⏸️ Pausar música";
  } else {
    audio.pause();
    btn.textContent = "🎶 Escuchar música de fondo";
  }
});
