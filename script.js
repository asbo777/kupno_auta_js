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

// Zapisywanie danych formularza do localStorage po każdej zmianie
document
  .querySelectorAll(".form-container input, .form-container textarea")
  .forEach((input) => {
    input.addEventListener("change", () => {
      localStorage.setItem(input.id, input.value);
    });
  });

// Odtwarzanie danych formularza po odświeżeniu strony
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".form-container input, .form-container textarea")
    .forEach((input) => {
      const savedValue = localStorage.getItem(input.id);
      if (savedValue) {
        input.value = savedValue;
      }
    });
});

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

//V3//
document.addEventListener("DOMContentLoaded", () => {
  const carGrid = document.querySelector(".car-grid");
  const brandIcons = document.querySelectorAll(".footer--icons img");
  const backToMainViewBtn = document.getElementById("backToMainViewBtn");
  const formContainer = document.querySelector(".form-container");
  const purchaseBtn = document.getElementById("purchaseBtn");
  const summaryElement = document.querySelector(".summary");
  let selectedAccessories = [];

  // Pokaż przycisk powrotu do widoku głównego
  function showBackToMainViewBtn() {
    backToMainViewBtn.classList.remove("hidden");
  }

  // Ukryj przycisk powrotu do widoku głównego
  function hideBackToMainViewBtn() {
    backToMainViewBtn.classList.add("hidden");
  }

  // Przywróć domyślny widok - wyświetlenie wszystkich samochodów
  function showAllCars() {
    const carEntries = document.querySelectorAll(".car-entry");
    carEntries.forEach((carEntry) => {
      carEntry.style.display = "block";
    });
    hideBackToMainViewBtn();
  }

  // Obsługa kliknięcia na ikonę marki
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
  // nasluchiwanie

  // Dodaj nasłuchiwanie zdarzenia kliknięcia dla kafelków samochodów
  carGrid.addEventListener("click", handleCarEntryClick);

  // Dodaj nasłuchiwanie zdarzenia kliknięcia dla ikon marek
  brandIcons.forEach((icon) => {
    icon.addEventListener("click", handleBrandIconClick);
  });

  // Dodaj nasłuchiwanie zdarzenia kliknięcia dla przycisku powrotu
  backToMainViewBtn.addEventListener("click", showAllCars);

  // klikniecie w kafelek auta

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

    // Ustawienie tekstu w elemencie
    selectedCarElement.textContent = `Your choice: ${selectedCar.brand} ${selectedCar.model}`;
    // Ustawienie wartości pola formularza
    selectedCarElement.value = `${selectedCar.brand} ${selectedCar.model}`;

    // Ustawienie ceny samochodu i całkowitej ceny
    const carPriceElement = document.getElementById("carPrice");
    if (carPriceElement) {
      carPriceElement.textContent = `Price: $${selectedCar.price}`;
    } else {
      const newCarPriceElement = document.createElement("div");
      newCarPriceElement.id = "carPrice";
      newCarPriceElement.textContent = `Price: $${selectedCar.price}`;
      document.body.appendChild(newCarPriceElement);
    }

    totalPriceElement.textContent = `Total Price: $${selectedCar.price}`;
    totalPriceElement.value = `$${selectedCar.price}`;

    const footer = document.querySelector("footer");
    footer.style.display = "none";

    // FORMULARZ - GENEROWANIE

    const formContainer = document.querySelector(".form-container");
    formContainer.classList.remove("hidden");

    //ukrycie przycisku ALL CARS

    hideBackToMainViewBtn();
  }
});

// inicjalizacja datepickera
flatpickr("#deliveryDate", {
  minDate: new Date().fp_incr(14),
  defaultDate: new Date().fp_incr(14),
  dateFormat: "Y-m-d",
});

// akcesoria i aktualizacja ceny

function updateTotalPrice() {
  const carPriceElement = document.getElementById("carPrice");
  if (!carPriceElement) {
    console.error("Element with ID 'carPrice' not found.");
    return;
  }

  const carPriceText = carPriceElement.textContent.trim();
  const carPrice = parseFloat(carPriceText.split("$")[1]);

  if (isNaN(carPrice)) {
    console.error("Car Price is not a valid number:", carPriceText);
    return;
  }

  console.log("Car Price:", carPrice);

  let totalAccessoriesPrice = 0;
  selectedAccessories = []; // Clear previous selections

  const accessoriesList = document.querySelectorAll("#accessories-list li");
  accessoriesList.forEach((accessory) => {
    const priceSpan = accessory.querySelector("span");
    const priceText = priceSpan.textContent.trim();
    const accessoryPrice = parseFloat(priceText.split("$")[1]);
    const quantityInput = accessory.querySelector(".quantity-input");
    const quantity = parseInt(quantityInput.value);
    const accessoryName = accessory
      .querySelector(".accessory-name")
      .textContent.trim();

    console.log("Accessory Price:", accessoryPrice);
    console.log("Quantity:", quantity);

    if (quantity > 0) {
      selectedAccessories.push({
        name: accessoryName,
        quantity: quantity,
        price: accessoryPrice,
      });
    }

    totalAccessoriesPrice += accessoryPrice * quantity;
  });
  console.log("Total Accessories Price:", totalAccessoriesPrice);

  const totalPrice = carPrice + totalAccessoriesPrice;
  console.log("Total Price:", totalPrice);

  const totalPriceElement = document.getElementById("totalPrice");
  if (totalPriceElement) {
    totalPriceElement.textContent = `Total Price: $${totalPrice}`;
  } else {
    console.error("Element with ID 'totalPrice' not found.");
  }

  return totalPrice;
}

document.querySelectorAll(".quantity-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const quantityInput =
      event.target.parentNode.querySelector(".quantity-input");
    let quantity = parseInt(quantityInput.value);
    const accessoryPrice = parseFloat(
      event.target.parentNode
        .querySelector("span")
        .textContent.trim()
        .split("$")[1]
    );

    if (event.target.classList.contains("plus")) {
      quantity += 1;
    } else if (event.target.classList.contains("minus") && quantity > 0) {
      quantity -= 1;
    }
    console.log("After Quantity Update:", quantity);
    quantityInput.value = quantity;

    updateTotalPrice();
  });
});

// Funkcja walidująca formularz
function validateForm() {
  const ownerNameInput = document.getElementById("ownerName");
  const deliveryDateInput = document.getElementById("deliveryDate");

  // Sprawdź, czy podane imię i nazwisko mają poprawny format
  const fullName = ownerNameInput.value.trim();
  if (!fullName.includes(" ")) {
    alert(
      "Please enter your full name with at least two parts separated by a space."
    );
    return false; // Formularz nieprawidłowy
  }

  // Sprawdź, czy pole daty dostawy nie jest puste
  if (!deliveryDateInput.value.trim()) {
    document.getElementById("deliveryDateError").classList.remove("hidden");
    return false; // Formularz nieprawidłowy
  } else {
    document.getElementById("deliveryDateError").classList.add("hidden");
  }

  // Sprawdź, czy został wybrany sposób płatności
  const financeInput = document.querySelector('input[name="finance"]:checked');
  if (!financeInput) {
    alert("Please select a payment method.");
    return false; // Formularz nieprawidłowy
  }

  // Wszystkie pola wymagane są wypełnione, formularz jest prawidłowy
  return true;
}

// purchase
document.getElementById("purchaseBtn").addEventListener("click", function () {
  const ownerNameInput = document.getElementById("ownerName");
  const deliveryDateInput = document.getElementById("deliveryDate");

  if (!ownerNameInput.value || !deliveryDateInput.value) {
    document.getElementById("ownerNameError").classList.remove("hidden");
    return; // Zatrzymanie procesu zakupu z powodu nieprawidłowego formularza
  } else {
    document.getElementById("ownerNameError").classList.add("hidden");
  }

  if (validateForm()) {
    const deliveryDateInput = document.getElementById("deliveryDate");
    const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));
    const carImageSrc = `assets/cars/${selectedCar.image}`;

    let summaryContent = `
      <div class="summary-content" style="text-align: center;">
        <h2>Thank you for your purchase!</h2>
        <p>Car: ${selectedCar.brand} ${selectedCar.model}</p>
        <p>Total Price: $${updateTotalPrice().toFixed(2)}</p>
        <p>Payment Method: ${
          document.querySelector('input[name="finance"]:checked')
            ? document.querySelector('input[name="finance"]:checked').value ===
              "leasing"
              ? "Leasing"
              : "Cash"
            : "Not selected"
        }</p>
        <p>Delivery Date: ${deliveryDateInput.value}</p>
    `;

    // Dodajemy sekcję "Selected Accessories" jako kontynuację tekstu
    if (selectedAccessories.length > 0) {
      summaryContent += `
        <p>Selected Accessories:</p>
        <ul>
          ${selectedAccessories
            .map(
              (accessory) =>
                `<li>${accessory.quantity} x ${accessory.name}</li>`
            )
            .join("")}
        </ul>
      `;
    }

    // Dodajemy zdjęcie wybranego auta na samym dole
    console.log("Car Image Source:", carImageSrc);
    summaryContent += `
      <img src="${carImageSrc}" alt="${selectedCar.brand} ${selectedCar.model}" class="summary-image" style="width: 50%; height: auto;">
    `;

    summaryContent += `</div>`; // Zamykamy div.summary-content

    const summaryElement = document.querySelector(".summary");
    summaryElement.classList.remove("hidden");
    summaryElement.innerHTML = summaryContent;

    const formContainer = document.querySelector(".form-container");
    formContainer.classList.add("hidden");

    clearForm();
  }
});

// get back btn

document.getElementById("returnBtn").addEventListener("click", function () {
  const formContainer = document.querySelector(".form-container");
  formContainer.classList.add("hidden");

  const footer = document.querySelector("footer");
  footer.style.display = "flex";

  const carGrid = document.querySelector(".car-grid");
  carGrid.innerHTML = "";

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
      if (detail === "price") {
        p.innerHTML = `<strong>${formattedDetail}: </strong>$${car[detail]}`;
      } else {
        p.innerHTML = `<strong>${formattedDetail}: </strong>${car[detail]}`;
      }
      carEntry.appendChild(p);
    });
    carEntry.dataset.carId = car.id;
    carGrid.appendChild(carEntry);
  });

  document.querySelector(".summary").classList.add("hidden");
});
