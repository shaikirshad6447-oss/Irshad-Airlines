// ===============================
// IRSHAD AIRWAYS - HOME PAGE
// ===============================

// Book Flight Button
const bookBtn = document.querySelector(".primary-btn");

if (bookBtn) {
    bookBtn.addEventListener("click", () => {
        window.location.href = "flights.html";
    });
}

// Explore Flights Button
const exploreBtn = document.querySelector(".secondary-btn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        window.location.href = "flights.html";
    });
}