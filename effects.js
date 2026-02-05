const container = document.createElement("div");
container.className = "hearts";
document.body.appendChild(container);

const emojis = ["❤️", "✨", "💖", "⭐"];

function createParticle() {
  const el = document.createElement("div");
  el.className = "heart-float";

  el.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = Math.random() * 18 + 14 + "px";
  el.style.animationDuration = (Math.random() * 3 + 4) + "s";

  container.appendChild(el);

  setTimeout(() => el.remove(), 7000);
}

setInterval(createParticle, 250);
