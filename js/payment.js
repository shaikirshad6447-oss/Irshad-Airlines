// ==========================================
// IRSHAD AIRWAYS - PAYMENT
// FRONTEND DEMO
// ==========================================


// ==========================================
// GET BOOKING DATA
// ==========================================

const bookingData = JSON.parse(
    localStorage.getItem("bookingData")
);


// ==========================================
// ELEMENTS
// ==========================================

const paymentSummary =
    document.getElementById("paymentSummary");

const paymentAmount =
    document.getElementById("paymentAmount");

const payNowBtn =
    document.getElementById("payNowBtn");

const paymentLoader =
    document.getElementById("paymentLoader");

const paymentSuccess =
    document.getElementById("paymentSuccess");


// ==========================================
// CHECK BOOKING
// ==========================================

if (!bookingData || !bookingData.flight) {

    console.warn("No booking data found.");

}


// ==========================================
// DISPLAY BOOKING SUMMARY
// ==========================================

if (bookingData && bookingData.flight) {

    const flight = bookingData.flight;


    paymentSummary.innerHTML = `

        <div class="summary-passenger">

            <span>Passenger</span>

            <strong>
                ${bookingData.passengerName}
            </strong>

        </div>


        <div class="summary-flight">

            <div>

                <small>FLIGHT</small>

                <strong>
                    ${flight.flightNo}
                </strong>

            </div>


            <div>

                <small>AIRLINE</small>

                <strong>
                    ${flight.airline}
                </strong>

            </div>

        </div>


        <div class="summary-route">

            <div>

                <small>FROM</small>

                <strong>
                    ${flight.from}
                </strong>

                <span>
                    ${flight.departure}
                </span>

            </div>


            <i class="fa-solid fa-plane"></i>


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


        <div class="summary-details">

            <p>

                <span>
                    Travel Class
                </span>

                <strong>
                    ${bookingData.travelClass}
                </strong>

            </p>


            <p>

                <span>
                    Seat Preference
                </span>

                <strong>
                    ${bookingData.seatPreference}
                </strong>

            </p>


            <p>

                <span>
                    Booking ID
                </span>

                <strong>
                    ${bookingData.bookingId}
                </strong>

            </p>

        </div>

    `;


    // Display price

    paymentAmount.textContent =
        flight.price;

}


// ==========================================
// PAYMENT METHOD SWITCHING
// ==========================================

const paymentMethods =
    document.querySelectorAll(".payment-method");

const paymentPanels =
    document.querySelectorAll(".payment-panel");


paymentMethods.forEach(method => {

    method.addEventListener("click", function () {


        // Remove active

        paymentMethods.forEach(item => {

            item.classList.remove("active");

        });


        paymentPanels.forEach(panel => {

            panel.classList.remove("active");

        });


        // Activate selected

        this.classList.add("active");


        const selectedMethod =
            this.dataset.method;


        const selectedPanel =
            document.getElementById(
                selectedMethod + "Panel"
            );


        if (selectedPanel) {

            selectedPanel.classList.add("active");

        }

    });

});


// ==========================================
// PAY NOW
// ==========================================

if (payNowBtn) {

    payNowBtn.addEventListener(
        "click",
        processPayment
    );

}


// ==========================================
// PROCESS PAYMENT
// ==========================================

function processPayment() {


    // --------------------------------------
    // GET ACTIVE PAYMENT METHOD
    // --------------------------------------

    const activeMethod =
        document.querySelector(
            ".payment-method.active"
        );


    if (!activeMethod) {

        alert("Please select a payment method.");

        return;

    }


    const method =
        activeMethod.dataset.method;


    // --------------------------------------
    // VALIDATE PAYMENT DETAILS
    // --------------------------------------

    if (method === "upi") {

        const upi =
            document.getElementById("upiId").value.trim();


        if (!upi) {

            alert("Please enter your UPI ID.");

            return;

        }

    }


    if (method === "card") {

        const card =
            document.getElementById("cardNumber").value.trim();

        const expiry =
            document.getElementById("expiry").value.trim();

        const cvv =
            document.getElementById("cvv").value.trim();

        const cardName =
            document.getElementById("cardName").value.trim();


        if (
            !card ||
            !expiry ||
            !cvv ||
            !cardName
        ) {

            alert(
                "Please enter all card details."
            );

            return;

        }

    }


    if (method === "netbanking") {

        const bank =
            document.getElementById("bankSelect").value;


        if (!bank) {

            alert(
                "Please select your bank."
            );

            return;

        }

    }


    // --------------------------------------
    // SHOW PROCESSING
    // --------------------------------------

    paymentLoader.classList.add("active");


    payNowBtn.disabled = true;


    // --------------------------------------
    // SIMULATE PAYMENT PROCESSING
    // FRONTEND ONLY
    // --------------------------------------

    setTimeout(() => {


        // Hide loader

        paymentLoader.classList.remove(
            "active"
        );


        // Save payment information

        const paymentData = {

            paymentMethod: method,

            paymentStatus: "SUCCESS",

            paymentDate:
                new Date().toISOString(),

            transactionId:
                "TXN" +
                Date.now()
                    .toString()
                    .slice(-10)

        };


        localStorage.setItem(
            "paymentData",
            JSON.stringify(paymentData)
        );


        // Show success

        const successPopup =
    document.getElementById("paymentSuccess");

successPopup.classList.add("active");

setTimeout(() => {

    window.location.href = "ticket.html";

}, 2800);

    }, 2500);

}