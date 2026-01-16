const weddingDate = new Date("2026-06-20");

setInterval(() => {
  const now = new Date();
  const diff = weddingDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerText =
    days + " nap múlva találkozunk ❤️";
}, 1000);

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Ülésrend kereső
const searchInput = document.getElementById('searchName');
const guestList = document.getElementById('guestList');
const guests = guestList.getElementsByTagName('li');

searchInput.addEventListener('keyup', () => {
  const filter = searchInput.value.toLowerCase();
  for (let i = 0; i < guests.length; i++) {
    const txtValue = guests[i].textContent || guests[i].innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      guests[i].style.display = "";
    } else {
      guests[i].style.display = "none";
    }
  }
});
