// ==========================================
// IRSHAD AIRWAYS - TICKET
// ==========================================

const booking = JSON.parse(
    localStorage.getItem("bookingData")
);

const flight = JSON.parse(
    localStorage.getItem("selectedFlight")
);


if (booking && flight) {

    // Passenger

    document.getElementById("passengerName").textContent =
        booking.passengerName;


    // Flight

    document.getElementById("flightNo").textContent =
        flight.flightNo;


    // Route

    document.getElementById("fromCity").textContent =
        flight.from;

    document.getElementById("toCity").textContent =
        flight.to;


    // Times

    document.getElementById("departureTime").textContent =
        flight.departure;

    document.getElementById("arrivalTime").textContent =
        flight.arrival;


    // Duration

    document.getElementById("flightDuration").textContent =
        flight.duration;


    // Class

    document.getElementById("travelClass").textContent =
        booking.travelClass;


    // Seat

    document.getElementById("seatNumber").textContent =
        generateSeat();


    // Gate

    document.getElementById("gateNumber").textContent =
        generateGate();


    // Boarding Time

    document.getElementById("boardingTime").textContent =
        generateBoardingTime();


    // Fare

    document.getElementById("ticketPrice").textContent =
        flight.price;


    // Booking ID

    document.getElementById("bookingId").textContent =
        generateBookingId();

}


// ==========================================
// RANDOM SEAT
// ==========================================

function generateSeat(){

    const row =
        Math.floor(Math.random() * 25) + 1;

    const letters =
        ["A","B","C","D","E","F"];

    const letter =
        letters[
            Math.floor(
                Math.random() * letters.length
            )
        ];

    return row + letter;

}


// ==========================================
// RANDOM GATE
// ==========================================

function generateGate(){

    return "G" +
        (Math.floor(Math.random() * 12) + 1);

}


// ==========================================
// BOOKING ID
// ==========================================

function generateBookingId(){

    return "IA" +
        Math.floor(
            100000 + Math.random() * 900000
        );

}


// ==========================================
// BOARDING TIME
// ==========================================

function generateBoardingTime(){

    return "09:00 AM";

}