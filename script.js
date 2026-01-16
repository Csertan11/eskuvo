const weddingDate = new Date("2026-06-20");

setInterval(() => {
  const now = new Date();
  const diff = weddingDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerText =
    days + " nap múlva találkozunk ❤️";
}, 1000);
