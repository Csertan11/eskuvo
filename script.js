const landing = document.getElementById('landing');
document.getElementById('openBtn').addEventListener('click', () => {
  landing.style.display = 'none'; // eltünteti a landinget
});


function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

function searchGuest() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const guests = document.querySelectorAll("#guestList li");

  guests.forEach(guest => {
    const name = guest.dataset.name.toLowerCase();
    guest.style.display = name.includes(input) ? "block" : "none";
  });
}
