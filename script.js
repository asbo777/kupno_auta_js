const carDatabase = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    price: 60000,
    image: "toyota_corolla.jpg",
    engine_power: "120 KM",
    mileage: "10 000 km",
  },
  {
    id: 2,
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    price: 75000,
    image: "toyota_camry.jpg",
    engine_power: "180 KM",
    mileage: "15 000 km",
  },
  {
    id: 3,
    brand: "Toyota",
    model: "Rav4",
    year: 2022,
    price: 70000,
    image: "toyota_rav4.jpg",
    engine_power: "150 KM",
    mileage: "12 000 km",
  },
  {
    id: 4,
    brand: "Honda",
    model: "Civic",
    year: 2020,
    price: 55000,
    image: "honda_civic.jpg",
    engine_power: "110 KM",
    mileage: "11 500 km",
  },
  {
    id: 5,
    brand: "Honda",
    model: "Accord",
    year: 2021,
    price: 65000,
    image: "honda_accord.jpg",
    engine_power: "160 KM",
    mileage: "14 200 km",
  },
  {
    id: 6,
    brand: "Honda",
    model: "CR-V",
    year: 2022,
    price: 70000,
    image: "honda_cr-v.jpg",
    engine_power: "170 KM",
    mileage: "13 800 km",
  },
  {
    id: 7,
    brand: "Ford",
    model: "Focus",
    year: 2020,
    price: 62000,
    image: "ford_focus.jpg",
    engine_power: "130 KM",
    mileage: "12 300 km",
  },
  {
    id: 8,
    brand: "Ford",
    model: "Fusion",
    year: 2021,
    price: 68000,
    image: "ford_fusion.jpg",
    engine_power: "150 KM",
    mileage: "13 500 km",
  },
  {
    id: 9,
    brand: "Ford",
    model: "Escape",
    year: 2022,
    price: 70000,
    image: "ford_escape.jpg",
    engine_power: "160 KM",
    mileage: "14 700 km",
  },
  {
    id: 10,
    brand: "Chevrolet",
    model: "Cruze",
    year: 2020,
    price: 58000,
    image: "chevrolet_cruze.jpg",
    engine_power: "120 KM",
    mileage: "11 800 km",
  },
  {
    id: 11,
    brand: "Chevrolet",
    model: "Malibu",
    year: 2021,
    price: 68000,
    image: "chevrolet_malibu.jpg",
    engine_power: "170 KM",
    mileage: "14 300 km",
  },
  {
    id: 12,
    brand: "Chevrolet",
    model: "Traverse",
    year: 2022,
    price: 72000,
    image: "chevrolet_traverse.jpg",
    engine_power: "180 KM",
    mileage: "13 900 km",
  },
  {
    id: 13,
    brand: "Nissan",
    model: "Sentra",
    year: 2020,
    price: 59000,
    image: "nissan_sentra.jpg",
    engine_power: "130 KM",
    mileage: "12 100 km",
  },
  {
    id: 14,
    brand: "Nissan",
    model: "Altima",
    year: 2021,
    price: 67000,
    image: "nissan_altima.jpg",
    engine_power: "160 KM",
    mileage: "13 700 km",
  },
  {
    id: 15,
    brand: "Nissan",
    model: "Murano",
    year: 2022,
    price: 71000,
    image: "nissan_murano.jpg",
    engine_power: "170 KM",
    mileage: "12 500 km",
  },
  {
    id: 16,
    brand: "Hyundai",
    model: "Elantra",
    year: 2020,
    price: 56000,
    image: "hyundai_elantra.jpg",
    engine_power: "120 KM",
    mileage: "11 200 km",
  },
  {
    id: 17,
    brand: "Hyundai",
    model: "Sonata",
    year: 2021,
    price: 64000,
    image: "hyundai_sonata.jpg",
    engine_power: "150 KM",
    mileage: "14 000 km",
  },
  {
    id: 18,
    brand: "Hyundai",
    model: "Santa Fe",
    year: 2022,
    price: 69000,
    image: "hyundai_santa-fe.jpg",
    engine_power: "170 KM",
    mileage: "13 600 km",
  },
  {
    id: 19,
    brand: "Kia",
    model: "Forte",
    year: 2020,
    price: 57000,
    image: "kia_forte.jpg",
    engine_power: "130 KM",
    mileage: "12 300 km",
  },
  {
    id: 20,
    brand: "Kia",
    model: "Optima",
    year: 2021,
    price: 66000,
    image: "kia_optima.jpg",
    engine_power: "160 KM",
    mileage: "13 800 km",
  },
  {
    id: 21,
    brand: "Kia",
    model: "Sportage",
    year: 2022,
    price: 72000,
    image: "kia_sportage.jpg",
    engine_power: "180 KM",
    mileage: "14 500 km",
  },
  {
    id: 22,
    brand: "Mazda",
    model: "Mazda3",
    year: 2020,
    price: 59000,
    image: "mazda_mazda3.jpg",
    engine_power: "140 KM",
    mileage: "12 700 km",
  },
  {
    id: 23,
    brand: "Mazda",
    model: "Mazda6",
    year: 2021,
    price: 67000,
    image: "mazda_mazda6.jpg",
    engine_power: "170 KM",
    mileage: "14 200 km",
  },
  {
    id: 24,
    brand: "Mazda",
    model: "CX-5",
    year: 2022,
    price: 72000,
    image: "mazda_cx-5.jpg",
    engine_power: "180 KM",
    mileage: "13 900 km",
  },
  {
    id: 25,
    brand: "Subaru",
    model: "Impreza",
    year: 2020,
    price: 60000,
    image: "subaru_impreza.jpg",
    engine_power: "140 KM",
    mileage: "12 300 km",
  },
  {
    id: 26,
    brand: "Subaru",
    model: "Legacy",
    year: 2021,
    price: 68000,
    image: "subaru_legacy.jpg",
    engine_power: "160 KM",
    mileage: "13 800 km",
  },
  {
    id: 27,
    brand: "Subaru",
    model: "Outback",
    year: 2022,
    price: 72000,
    image: "subaru_outback.jpg",
    engine_power: "170 KM",
    mileage: "14 500 km",
  },
  {
    id: 28,
    brand: "Nissan",
    model: "Maxima",
    year: 2022,
    price: 72000,
    image: "nissan_maxima.jpg",
    engine_power: "180 KM",
    mileage: "13 900 km",
  },
  {
    id: 29,
    brand: "Nissan",
    model: "Pathfinder",
    year: 2020,
    price: 67000,
    image: "nissan_pathfinder.jpg",
    engine_power: "170 KM",
    mileage: "14 200 km",
  },
  {
    id: 30,
    brand: "Nissan",
    model: "Armada",
    year: 2021,
    price: 78000,
    image: "nissan_armada.jpg",
    engine_power: "200 KM",
    mileage: "15 000 km",
  },
];
carDatabase.forEach((car) => {
  const carEntry = document.createElement("div");
  carEntry.classList.add("car-entry");
  carEntry.dataset.brand = car.brand.toLowerCase();

  const carImage = document.createElement("img");
  carImage.src = `assets/cars/${car.image}`;
  carImage.alt = `${car.brand} ${car.model}`;
  carImage.classList.add("car-image");
  carEntry.appendChild(carImage);

  const details = [
    "brand",
    "model",
    "year",
    "price",
    "engine_power",
    "mileage",
  ];
  details.forEach((detail) => {
    const p = document.createElement("p");
    const formattedDetail = detail.replace("_", " ").toUpperCase();
    p.innerHTML = `<strong>${formattedDetail}:</strong> ${car[detail]}`;
    carEntry.appendChild(p);
  });

  carEntry.dataset.carId = car.id;
  document.querySelector(".car-grid").appendChild(carEntry);
});

// Inicjalizacja datepickera
flatpickr("#deliveryDate", {
  minDate: new Date().fp_incr(14),
  defaultDate: new Date().fp_incr(14),
  dateFormat: "Y-m-d",
});

function playFireworksAnimation() {
  const fireworks = document.createElement("div");
  fireworks.classList.add("fireworks");
  fireworks.style.animation = "fireworks-animation 2s ease-in-out";
  document.body.appendChild(fireworks);
  fireworks.addEventListener("animationend", () => {
    fireworks.remove();
  });
}

const carGrid = document.querySelector(".car-grid");

function handleCarEntryClick(event) {
  const carEntry = event.target.closest(".car-entry");
  if (!carEntry) return;

  const carId = carEntry.dataset.carId;
  localStorage.setItem(
    "selectedCar",
    JSON.stringify(carDatabase.find((car) => car.id === parseInt(carId)))
  );

  carGrid.innerHTML = "";

  const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));

  const selectedCarElement = document.getElementById("selectedCar");
  const totalPriceElement = document.getElementById("totalPrice");
  selectedCarElement.textContent = `Your choice: ${selectedCar.brand} ${selectedCar.model}`;
  totalPriceElement.textContent = `Price: $${selectedCar.price}`;

  const footer = document.querySelector("footer");
  footer.style.display = "none";

  const summaryElement = document.querySelector(".summary");
  summaryElement.classList.remove("hidden");

  const congratulationsHeading = document.querySelector(".summary h2");
  congratulationsHeading.textContent = `Congratulations for choosing ${selectedCar.brand} ${selectedCar.model}!`;

  document.getElementById(
    "selectedCar"
  ).value = `${selectedCar.brand} ${selectedCar.model}`;
  document.getElementById("totalPrice").value = `$${selectedCar.price}`;

  const formContainer = document.querySelector(".form-container");
  formContainer.classList.remove("hidden");
}

// Inicjalizacja zmiennej przechowującej łączną cenę akcesoriów
let totalAccessoriesPrice = 0;

// Funkcja obsługująca dodawanie cen akcesoriów
function handleAccessoryChange(event) {
  const accessoryName = event.target.getAttribute("data-accessory-name");
  const accessoryPrice = parseFloat(
    event.target.getAttribute("data-accessory-price")
  );
  const totalPriceElement = document.getElementById("totalPrice");

  let totalPrice = parseFloat(totalPriceElement.textContent.replace("$", ""));

  if (event.target.checked) {
    totalPrice += accessoryPrice;
    event.target.parentNode.style.fontWeight = "bold";
    event.target.parentNode.style.color = "red";
    // Dodanie ceny akcesorium do łącznej ceny akcesoriów
    totalAccessoriesPrice += accessoryPrice;
  } else {
    totalPrice -= accessoryPrice;
    event.target.parentNode.style.fontWeight = "normal";
    event.target.parentNode.style.color = "inherit";
    // Odjęcie ceny akcesorium z łącznej ceny akcesoriów
    totalAccessoriesPrice -= accessoryPrice;
  }

  // Aktualizacja wyświetlanej ceny na stronie
  totalPriceElement.textContent = `$${(
    totalPrice + totalAccessoriesPrice
  ).toFixed(2)}`;
}

// Funkcja wyświetlająca podsumowanie zakupu
function displayPurchaseSummary() {
  const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));

  const financeOption = document.querySelector(
    'input[name="finance"]:checked'
  ).value;
  const ownerName = document.getElementById("ownerName").value;
  const deliveryDate = document.getElementById("deliveryDate").value;

  const summary = document.querySelector(".purchase-summary");
  summary.innerHTML = `
    <h2>Thank You for Your Purchase!</h2>
    <p>Your car will be delivered on: ${deliveryDate}</p>
    <p>Owner: ${ownerName}</p>
    <p>Payment method: ${financeOption}</p>
    <img src="assets/cars/${selectedCar.image}" alt="${selectedCar.brand} ${
    selectedCar.model
  }" class="car-image">
    <p>Total Price (including accessories): $${(
      selectedCar.price + totalAccessoriesPrice
    ).toFixed(2)}</p>
  `;
}

document.getElementById("purchaseBtn").addEventListener("click", function () {
  playFireworksAnimation();

  displayPurchaseSummary();

  const formContainer = document.querySelector(".form-container");
  formContainer.classList.add("hidden");

  const summary = document.querySelector(".summary");
  summary.classList.add("hidden");
});

// Aktualizacja wyświetlanej ceny po każdej zmianie w checkboxach
const accessories = document.querySelectorAll('input[type="checkbox"]');
accessories.forEach((accessory) => {
  accessory.addEventListener("change", function () {
    handleAccessoryChange();
    displayPurchaseSummary();
  });
});

carGrid.addEventListener("click", handleCarEntryClick);

const brandIcons = document.querySelectorAll(".footer--icons img");
brandIcons.forEach((icon) => {
  icon.addEventListener("click", handleBrandIconClick);
});

// Dodanie obsługi przycisku powrotu do widoku głównego
document
  .getElementById("backToMainViewBtn")
  .addEventListener("click", function () {
    const carEntries = document.querySelectorAll(".car-entry");
    carEntries.forEach((carEntry) => {
      carEntry.style.display = "block";
    });
    this.style.display = "none";
  });

document.getElementById("purchaseBtn").addEventListener("click", function () {
  playFireworksAnimation();
  const deliveryDate = document.getElementById("deliveryDate").value;

  const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));

  carGrid.innerHTML = "";

  const thankYouMessage = document.createElement("div");
  thankYouMessage.innerHTML = `
  <h2>Thanks for choosing us 🥹!</h2>
  <p>Your car will be delivered on: ${deliveryDate}</p>
  <img src="assets/cars/${selectedCar.image}" alt="${selectedCar.brand} ${selectedCar.model}" class="car-image">
`;

  carGrid.appendChild(thankYouMessage);
  const formContainer = document.querySelector(".form-container");
  formContainer.classList.add("hidden");

  const summary = document.querySelector(".summary");
  summary.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  // Pozostały kod...
});

function handleBrandIconClick(event) {
  const brand = event.target.alt.toLowerCase();

  const carEntries = document.querySelectorAll(".car-entry");

  carEntries.forEach((carEntry) => {
    if (carEntry.dataset.brand.toLowerCase() === brand) {
      carEntry.style.display = "block";
    } else {
      carEntry.style.display = "none";
    }
  });

  document.getElementById("backToMainViewBtn").style.display = "block";
}

function displayPurchaseSummary() {
  const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));

  const financeOption = document.querySelector(
    'input[name="finance"]:checked'
  ).value;
  const ownerName = document.getElementById("ownerName").value;
  const deliveryDate = document.getElementById("deliveryDate").value;

  const summary = document.querySelector(".purchase-summary");
  summary.innerHTML = `
    <h2>Thank You for Your Purchase!</h2>
    <p>Your car will be delivered on: ${deliveryDate}</p>
    <p>Owner: ${ownerName}</p>
    <p>Payment method: ${financeOption}</p>
    <img src="assets/cars/${selectedCar.image}" alt="${selectedCar.brand} ${
    selectedCar.model
  }" class="car-image">
    <p>Total Price (including accessories): $${(
      total + selectedCar.price
    ).toFixed(2)}</p>
  `;
}

document.getElementById("purchaseBtn").addEventListener("click", function () {
  playFireworksAnimation();

  displayPurchaseSummary();

  const formContainer = document.querySelector(".form-container");
  formContainer.classList.add("hidden");

  const summary = document.querySelector(".summary");
  summary.classList.add("hidden");
});
