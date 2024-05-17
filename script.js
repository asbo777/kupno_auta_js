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

//tworzenie car grid w index html
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
  // dodanie znaczka waluty //
  details.forEach((detail) => {
    const p = document.createElement("p");
    const formattedDetail = detail.replace("_", " ").toUpperCase();
    if (detail === "price") {
      p.innerHTML = `<strong>${formattedDetail}: </strong>$${car[detail]}`;
    } else {
      p.innerHTML = `<strong>${formattedDetail}: </strong>${car[detail]}`;
    }
    carEntry.appendChild(p);
  });
  carEntry.dataset.carId = car.id;
  document.querySelector(".car-grid").appendChild(carEntry);
});

//dodanie przycisku powrotu do widoku wszystkich aut

function showBackToMainViewBtn() {
  const backToMainViewBtn = document.getElementById("backToMainViewBtn");
  backToMainViewBtn.classList.remove("hidden");
}

// modyfikacja car grid w zaleznosci od klikniecia na wybrana ikone footera //
const carGrid = document.querySelector(".car-grid");

function handleCarEntryClick(event) {
  const carEntry = event.target.closest(".car-entry");
  if (!carEntry) return;
  const carId = carEntry.dataset.carId;
  localStorage.setItem(
    "selectedCar",
    JSON.stringify(carDatabase.find((car) => car.id === parseInt(carId)))
  );

  // Zaktualizuj cenę całkowitą na podstawie nowego wybranego samochodu
  localStorage.setItem("selectedCar", JSON.stringify(selectedCar));
  // updateTotalPrice(selectedCar.price);
}

carGrid.addEventListener("click", handleCarEntryClick);

const brandIcons = document.querySelectorAll(".footer--icons img");
brandIcons.forEach((icon) => {
  icon.addEventListener("click", handleBrandIconClick);
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
  showBackToMainViewBtn();
}

// Funkcja pokazująca przycisk "ALL CARS" i przywracająca domyślny widok
function showBackToMainViewBtn() {
  backToMainViewBtn.style.display = "block";
}

// dodanie obsługi zdarzenia kliknięcia dla przycisku
backToMainViewBtn.addEventListener("click", () => {
  // orzywrócenie domyślnego widoku - wyświetlenie wszystkich samochodów
  const carEntries = document.querySelectorAll(".car-entry");
  carEntries.forEach((carEntry) => {
    carEntry.style.display = "block";
  });

  // a nastepnie ukrycie przycisku "backToMainViewBtn"
  backToMainViewBtn.style.display = "none";
});

//get back 2 main view v2

// get back btn

document.getElementById("returnBtn").addEventListener("click", function () {
  const formContainer = document.querySelector(".form-container");
  formContainer.classList.add("hidden");

  // const summaryElement = document.querySelector(".summary");
  // summaryElement.classList.add("hidden");

  const footer = document.querySelector("footer");
  footer.style.display = "flex";

  const carGrid = document.querySelector(".car-grid");
  carGrid.innerHTML = "";

  // Ponownie wygeneruj car grid
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
      p.innerHTML = `<strong>${formattedDetail}: </strong>${car[detail]}`;
      carEntry.appendChild(p);
    });
    carEntry.dataset.carId = car.id;
    document.querySelector(".car-grid").appendChild(carEntry);
  });
});

// funkcja inicjalizująca zawartość formularza
function initializeForm() {
  // pobranie danych z localStorage, jeśli istnieją
  const formData = JSON.parse(localStorage.getItem("formData")) || {};

  // wypełnienie pól formularza danymi z localStorage
  document.getElementById("ownerName").value = formData.ownerName || "";
  document.getElementById("deliveryDate").value = formData.deliveryDate || "";

  // wypełnienie informacji o wybranym aucie
  const selectedCar = JSON.parse(localStorage.getItem("selectedCar")) || {};
  document.getElementById("selectedCar").textContent = `Your choice: ${
    selectedCar.brand || ""
  } ${selectedCar.model || ""}`;
  document.getElementById("carPrice").textContent = `Price: $${
    selectedCar.price || 0
  }`;

  // aktualizacja ceny calkowitej
  updateTotalPrice();
}

// funkcja aktualizująca całkowitą cenę
// function updateTotalPrice(price) {
//   const totalPriceElement = document.getElementById("totalPrice");
//   totalPriceElement.textContent = `Total Price: $${price.toFixed(2)}`;
// }

// inicjalizacja zawartości formularza po załadowaniu strony
document.addEventListener("DOMContentLoaded", () => {
  initializeForm();
});

// dodanie obsługi zdarzenia kliknięcia dla przycisku "purchase"
document.getElementById("purchaseBtn").addEventListener("click", function () {
  if (validateForm()) {
    showPurchaseConfirmation();
    localStorage.removeItem("formData");
  }
});

// wybieranie auta i  wyswietlanie formularza z zapamietanymi danymi

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
  updateTotalPrice(selectedCar.price);

  const selectedCarElement = document.getElementById("selectedCar");
  const priceElement = document.getElementById("carPrice");
  selectedCarElement.textContent = `Your choice: ${selectedCar.brand} ${selectedCar.model}`;
  priceElement.textContent = `Price: $${selectedCar.price}`;

  const footer = document.querySelector("footer");
  footer.style.display = "none";

  // const summaryElement = document.querySelector(".summary");
  // summaryElement.classList.remove("hidden");

  // const congratulationsHeading = document.querySelector(".summary h2");
  // congratulationsHeading.textContent = `Congratulations for choosing ${selectedCar.brand} ${selectedCar.model}!`;

  document.getElementById(
    "selectedCar"
  ).value = `${selectedCar.brand} ${selectedCar.model}`;
  document.getElementById("carPrice").value = `$${selectedCar.price}`;

  const formContainer = document.querySelector(".form-container");
  formContainer.classList.remove("hidden");

  // ukryj przycisk "backToMainViewBtn"
  document.getElementById("backToMainViewBtn").classList.add("hidden");
}

// inicjalizacja datepickera
flatpickr("#deliveryDate", {
  minDate: new Date().fp_incr(14),
  defaultDate: new Date().fp_incr(14),
  dateFormat: "Y-m-d",
});

// pobranie wszystkich przycisków plus i minus oraz pól tekstowych z ilością akcesoriów
const quantityButtons = document.querySelectorAll(".quantity-btn");
const quantityInputs = document.querySelectorAll(".quantity-input");

// przypisanie funkcji obsługi zdarzenia dla każdego przycisku plus i minus
document.querySelectorAll(".quantity-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault(); // Zatrzymaj domyślną akcję przycisku

    const quantityInput =
      event.target.parentNode.querySelector(".quantity-input");
    let quantity = parseInt(quantityInput.value);

    if (event.target.classList.contains("plus")) {
      quantity += 1;
    } else if (event.target.classList.contains("minus") && quantity > 0) {
      quantity -= 1;
    }

    quantityInput.value = quantity;
    updateTotalPrice(); // Aktualizuj cenę całkowitą po zmianie ilości akcesoriów
  });
});

// funkcja do aktualizacji sumarycznej ceny na podstawie ilości akcesoriów
function updateTotalPrice() {
  let totalPrice = 0;

  // pobranie ceny wybranego samochodu
  const carPrice = parseFloat(
    document.getElementById("carPrice").textContent.split("$")[1]
  );
  totalPrice += carPrice;

  const accessoriesList = document.querySelectorAll("#accessories-list li");
  accessoriesList.forEach((accessory, index) => {
    const pricePerItem = parseInt(
      accessory.querySelector("span").textContent.split("$")[1]
    );
    const quantity = parseInt(quantityInputs[index].value);
    totalPrice += pricePerItem * quantity;
  });
  document.getElementById(
    "totalPrice"
  ).textContent = `Total Price: $${totalPrice}`;
}

// inicjalizacja sumarycznej ceny
updateTotalPrice();

// funkcja do obliczania całkowitej ceny
function calculateTotalPrice(selectedCar) {
  let totalPrice = selectedCar.price; // początkowa cena to cena auta

  //pobranie ilości akcesoriów i ich ceny
  const accessoriesList = document.querySelectorAll("#accessories-list li");
  accessoriesList.forEach((accessory, index) => {
    const pricePerItem = parseInt(
      accessory.querySelector("span").textContent.split("$")[1]
    );
    const quantity = parseInt(
      document.querySelectorAll(".quantity-input")[index].value
    );
    totalPrice += pricePerItem * quantity;
  });

  return totalPrice;
}

// dodanie obsługi kliknięcia przycisku "Zakup"
document.getElementById("purchaseBtn").addEventListener("click", function () {
  if (validateForm()) {
    // Wyświetlenie potwierdzenia zakupu
    showPurchaseConfirmation();
    // Wyświetlenie strony podsumowania
    showSummaryPage();
    // Usunięcie danych z formularza po zakupie
    localStorage.removeItem("formData");
  }
});

// walidacja formularza
function validateForm() {
  const ownerNameInput = document.getElementById("ownerName");
  const deliveryDateInput = document.getElementById("deliveryDate");

  if (!ownerNameInput.value || !deliveryDateInput.value) {
    document.querySelector(".error-msg").classList.remove("hidden");
    return false; // Formularz nieprawidłowy
  }

  const fullName = ownerNameInput.value.trim();
  if (!fullName.includes(" ")) {
    alert(
      "Please enter your full name with at least two parts separated by a space."
    );
    return false; // Formularz nieprawidłowy
  }

  document.querySelector(".error-msg").classList.add("hidden");
  return true; // Formularz prawidłowy
}

// wyświetlenie potwierdzenia zakupu
function showPurchaseConfirmation() {
  document.querySelector(".success-msg").classList.remove("hidden");
}

//SUMMARY

function showSummaryPage() {
  // Ukrycie formularza i komunikatu o sukcesie zakupu
  document.querySelector(".form-container").classList.add("hidden");
  document.querySelector(".success-msg").classList.add("hidden");

  // pobranie danych z localStorage
  const selectedCar = JSON.parse(localStorage.getItem("selectedCar")) || {};
  const formData = JSON.parse(localStorage.getItem("formData")) || {};

  // pobranie zdjęcia wybranego auta
  const carImageSrc = `assets/cars/${selectedCar.image}`;

  // Inicjalizacja Flatpickr dla pola input daty
  const deliveryDateInput = document.getElementById("deliveryDate");

  // wyświetlenie danych na stronie podsumowania
  const summaryElement = document.querySelector(".summary");
  summaryElement.classList.remove("hidden");
  summaryElement.innerHTML = `
  <div class="summary-content" style="text-align: center;">
    <h2>Thank you for your purchase!</h2>
    <p>Car: ${selectedCar.brand} ${selectedCar.model}</p>
    <p>Total Price: $${calculateTotalPrice(selectedCar)}</p>
    <p>Payment Method: ${
      formData.finance === "leasing" ? "Leasing" : "Cash"
    }</p>
    <p>Delivery Date: ${deliveryDateInput.value}</p>
    <img src="${carImageSrc}" alt="${selectedCar.brand} ${
    selectedCar.model
  }" class="summary-image" style="max-width: 50%;">
   
    </div>
  `;
}
