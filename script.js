<div id="landing">
  <h1>Szívesen látunk az esküvőnkön!</h1>
  <p>Kérlek, nyisd ki a meghívót a weboldal megtekintéséhez</p>
  <button id="openBtn">Megnyitás</button>
</div>


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
