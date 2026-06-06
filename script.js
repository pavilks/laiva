const boats = [
  {
    id: 1,
    name: "Speed Boat",
    price: 80,
    img: "https://images.unsplash.com/photo-boat"
  },
  {
    id: 2,
    name: "Luxury Yacht",
    price: 250,
    img: "https://images.unsplash.com/photo-yacht"
  },
  {
    id: 3,
    name: "Fishing Boat",
    price: 50,
    img: "https://images.unsplash.com/photo-fishing"
  }
];

let selectedBoat = null;

const boatsDiv = document.getElementById("boats");
const modal = document.getElementById("modal");

function loadBoats() {
  boats.forEach(b => {
    boatsDiv.innerHTML += `
      <div class="card">
        <img src="${b.img}" />
        <h3>${b.name}</h3>
        <p>${b.price}€/h</p>
        <button onclick="openBooking(${b.id})">Rezervēt</button>
      </div>
    `;
  });
}

function openBooking(id) {
  selectedBoat = boats.find(b => b.id === id);
  document.getElementById("boatName").innerText = selectedBoat.name;
  modal.classList.remove("hidden");
}

document.getElementById("close").onclick = () => {
  modal.classList.add("hidden");
};

function calculatePrice() {
  const start = new Date(document.getElementById("start").value);
  const end = new Date(document.getElementById("end").value);

  const hours = (end - start) / (1000 * 60 * 60);

  if (hours <= 0) {
    document.getElementById("price").innerText = "Nepareizs laiks";
    return;
  }

  const total = hours * selectedBoat.price;

  document.getElementById("price").innerText =
    "Cena: " + total.toFixed(2) + " €";
}

function confirmBooking() {
  alert("Rezervācija veikta! (demo režīms)");
  modal.classList.add("hidden");
}

loadBoats();
