// ==========================================
// IRSHAD AIRWAYS - BOOKING
// ==========================================

const flight = JSON.parse(
    localStorage.getItem("selectedFlight")
);

const bookingForm = document.getElementById("bookingForm");


// ==========================================
// CHECK SELECTED FLIGHT
// ==========================================

if (!flight) {

    console.warn("No flight selected.");

}


// ==========================================
// DISPLAY SELECTED FLIGHT
// ==========================================

if (flight) {

    const summary =
        document.querySelector(".booking-summary");

    if (summary) {

        summary.innerHTML = `

            <h2>Booking Summary</h2>

            <div class="summary-airline">

                <strong>
                    ✈ ${flight.airline}
                </strong>

                <span>
                    ${flight.flightNo}
                </span>

            </div>


            <div class="route-summary">

                <div>

                    <small>FROM</small>

                    <strong>
                        ${flight.from}
                    </strong>

                    <span>
                        ${flight.departure}
                    </span>

                </div>


                <div class="route-arrow">
                    →
                </div>


                <div>

                    <small>TO</small>

                    <strong>
                        ${flight.to}
                    </strong>

                    <span>
                        ${flight.arrival}
                    </span>

                </div>

            </div>


            <hr>


            <p>

                <strong>
                    Duration:
                </strong>

                ${flight.duration}

            </p>


            <p>

                <strong>
                    Available Seats:
                </strong>

                ${flight.seats}

            </p>


            <hr>


            <h3>
                Total Fare
            </h3>


            <h1>
                ${flight.price}
            </h1>

        `;

    }

}


// ==========================================
// BOOKING FORM
// ==========================================

if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // ==================================
            // GET PASSENGER INFORMATION
            // ==================================

            const passengerName =
                bookingForm
                    .querySelector('input[type="text"]')
                    .value
                    .trim();


            const email =
                bookingForm
                    .querySelector('input[type="email"]')
                    .value
                    .trim();


            const mobile =
                bookingForm
                    .querySelector('input[type="tel"]')
                    .value
                    .trim();


            const age =
                bookingForm
                    .querySelector('input[type="number"]')
                    .value;


            const selects =
                bookingForm.querySelectorAll("select");


            const gender =
                selects[0]
                    ? selects[0].value
                    : "";


            const seatPreference =
                selects[1]
                    ? selects[1].value
                    : "";


            const travelClass =
                selects[2]
                    ? selects[2].value
                    : "";


            // ==================================
            // CREATE BOOKING DATA
            // ==================================

            const bookingData = {

                passengerName: passengerName,

                email: email,

                mobile: mobile,

                age: age,

                gender: gender,

                seatPreference: seatPreference,

                travelClass: travelClass,

                flight: flight

            };


            // ==================================
            // GENERATE BOOKING ID
            // ==================================

            const bookingId =
                "IA-" +
                Date.now()
                    .toString()
                    .slice(-8);


            bookingData.bookingId =
                bookingId;


            // ==================================
            // SAVE BOOKING
            // ==================================

            localStorage.setItem(
                "bookingData",
                JSON.stringify(bookingData)
            );


            // ==================================
            // GO TO PAYMENT
            // ==================================

            window.location.href =
                "payment.html";

        }
    );

}