// ===== NYITÓ LANDING OLDAL JS =====
const landing = document.getElementById('landing');
const openBtn = document.getElementById('openBtn');

openBtn.addEventListener('click', () => {
  landing.style.transition = 'opacity 0.8s ease';
  landing.style.opacity = '0';
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
// Modal JS
function openModal() {
  document.getElementById('extraModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('extraModal').style.display = 'none';
}

// Bezárás ha a háttérre kattintanak
window.onclick = function(event) {
  const modal = document.getElementById('extraModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

