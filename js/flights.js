// ==========================================
// IRSHAD AIRWAYS - FLIGHTS
// ==========================================


// ==========================================
// FLIGHT DATA
// ==========================================

const flights = [

    {
        airline: "IRSHAD AIRWAYS",
        flightNo: "IA-201",
        from: "Delhi",
        to: "Hyderabad",
        departure: "09:30 AM",
        arrival: "11:45 AM",
        duration: "2h 15m",
        price: "₹4,999",
        seats: 18
    },

    {
        airline: "IRSHAD AIRWAYS",
        flightNo: "IA-305",
        from: "Delhi",
        to: "Mumbai",
        departure: "06:20 AM",
        arrival: "08:45 AM",
        duration: "2h 25m",
        price: "₹5,499",
        seats: 12
    },

    {
        airline: "IRSHAD AIRWAYS",
        flightNo: "IA-412",
        from: "Hyderabad",
        to: "Goa",
        departure: "11:00 AM",
        arrival: "12:30 PM",
        duration: "1h 30m",
        price: "₹3,499",
        seats: 20
    },

    {
        airline: "IRSHAD AIRWAYS",
        flightNo: "IA-521",
        from: "Mumbai",
        to: "Bangalore",
        departure: "07:15 AM",
        arrival: "08:40 AM",
        duration: "1h 25m",
        price: "₹4,299",
        seats: 15
    },

    {
        airline: "IRSHAD AIRWAYS",
        flightNo: "IA-618",
        from: "Goa",
        to: "Chennai",
        departure: "01:30 PM",
        arrival: "03:10 PM",
        duration: "1h 40m",
        price: "₹4,799",
        seats: 9
    },

    {
        airline: "IRSHAD AIRWAYS",
        flightNo: "IA-720",
        from: "Bangalore",
        to: "Delhi",
        departure: "04:45 PM",
        arrival: "07:30 PM",
        duration: "2h 45m",
        price: "₹5,999",
        seats: 25
    }

];


// ==========================================
// FLIGHT CONTAINER
// ==========================================

const container =
    document.getElementById("flightContainer");


// ==========================================
// FLIGHT COUNT
// ==========================================

const flightCount =
    document.getElementById("flightCount");


// ==========================================
// DISPLAY FLIGHTS
// ==========================================

function displayFlights(flightList) {

    if (!container) {

        console.warn(
            "flightContainer not found."
        );

        return;

    }


    // Clear previous flights

    container.innerHTML = "";


    // Update count

    if (flightCount) {

        flightCount.textContent =
            `${flightList.length} Flight${flightList.length !== 1 ? "s" : ""} Available`;

    }


    // No flights

    if (flightList.length === 0) {

        container.innerHTML = `

            <div class="no-flights">

                <i class="fa-solid fa-plane-slash"></i>

                <h3>
                    No Flights Available
                </h3>

                <p>
                    We couldn't find a flight for this route.
                </p>

            </div>

        `;

        return;

    }


    // Create flight cards

    flightList.forEach((flight, index) => {

        const card =
            document.createElement("div");


        card.className =
            "flight-card";


        card.innerHTML = `

            <div class="airline">

                <h3>
                    ✈ ${flight.airline}
                </h3>

                <p>
                    ${flight.flightNo}
                </p>

            </div>


            <div class="time">

                <h2>
                    ${flight.departure}
                </h2>

                <span>
                    ${flight.from}
                </span>

            </div>


            <div class="duration">

                <i class="fa-solid fa-plane"></i>

                <span>
                    ${flight.duration}
                </span>

            </div>


            <div class="time">

                <h2>
                    ${flight.arrival}
                </h2>

                <span>
                    ${flight.to}
                </span>

            </div>


            <div class="price">

                <h2>
                    ${flight.price}
                </h2>

                <p>
                    ${flight.seats} Seats Left
                </p>

            </div>


            <button
                class="book-flight-btn"
                data-flight-index="${index}"
                type="button"
            >

                Book Now

                <i class="fa-solid fa-arrow-right"></i>

            </button>

        `;


        container.appendChild(card);

    });


    // Attach Book Now events

    const bookButtons =
        container.querySelectorAll(
            ".book-flight-btn"
        );


    bookButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const index =
                    Number(
                        this.dataset.flightIndex
                    );


                const selectedFlight =
                    flightList[index];


                // ==================================
                // SAVE SELECTED FLIGHT
                // ==================================

                localStorage.setItem(
                    "selectedFlight",
                    JSON.stringify(
                        selectedFlight
                    )
                );


                // ==================================
                // GO TO BOOKING
                // ==================================

                window.location.href =
                    "booking.html";

            }
        );

    });

}


// ==========================================
// INITIAL DISPLAY
// ==========================================

displayFlights(flights);


// ==========================================
// SEARCH
// ==========================================

const searchBtn =
    document.getElementById("searchBtn");


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        function () {


            const fromInput =
                document.getElementById(
                    "fromInput"
                );


            const toInput =
                document.getElementById(
                    "toInput"
                );


            const from =
                fromInput
                    ? fromInput.value
                        .toLowerCase()
                        .trim()
                    : "";


            const to =
                toInput
                    ? toInput.value
                        .toLowerCase()
                        .trim()
                    : "";


            const filteredFlights =
                flights.filter(
                    flight => {

                        const matchesFrom =
                            !from ||
                            flight.from
                                .toLowerCase()
                                .includes(from);


                        const matchesTo =
                            !to ||
                            flight.to
                                .toLowerCase()
                                .includes(to);


                        return (
                            matchesFrom &&
                            matchesTo
                        );

                    }
                );


            displayFlights(
                filteredFlights
            );

        }
    );

}