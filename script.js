// ===== NYITÓ LANDING OLDAL JS =====
const landing = document.getElementById('landing');
const openBtn = document.getElementById('openBtn');

openBtn.addEventListener('click', () => {
  // Finom animáció (fade out)
  landing.style.transition = 'opacity 0.8s ease';
  landing.style.opacity = '0';

  // 800ms után eltüntetjük a DOM-ból
  setTimeout(() => {
    landing.style.display = 'none';
  }, 800);
});

// ===== MOBIL MENU TOGGLE =====
function toggleMenu() {
  document.getElementById('nav').classList.toggle('show');
}

// ===== ÜLÉSREND KERESÉS =====
function searchGuest() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const list = document.getElementById('guestList').getElementsByTagName('li');
  for (let i = 0; i < list.length; i++) {
    const name = list[i].dataset.name.toLowerCase();
    list[i].style.display = name.includes(input) ? "" : "none";
  }
}
