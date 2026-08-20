// ==========================================
// IRSHAD AIRWAYS - COMMON SCRIPT
// ==========================================


// ==========================================
// HIDE LOADER
// ==========================================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.pointerEvents = "none";

        }, 800);

    }

});


// ==========================================
// BACK TO TOP
// ==========================================

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.style.display = "flex";

        } else {

            backToTop.style.display = "none";

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ==========================================
// SCROLL REVEAL
// ==========================================

const reveals =
    document.querySelectorAll(".reveal");


function revealSections() {

    reveals.forEach(function (section) {

        const windowHeight =
            window.innerHeight;

        const top =
            section.getBoundingClientRect().top;


        if (top < windowHeight - 120) {

            section.classList.add("active");

        }

    });

}


if (reveals.length > 0) {

    window.addEventListener(
        "scroll",
        revealSections
    );

    revealSections();

}


// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.querySelector(".nav-menu");


if (menuToggle && navMenu) {


    menuToggle.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle("active");


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                if (
                    navMenu.classList.contains("active")
                ) {

                    icon.classList.remove(
                        "fa-bars"
                    );

                    icon.classList.add(
                        "fa-xmark"
                    );

                } else {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }

        }
    );


    // Close mobile menu after clicking link

    navMenu
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove(
                        "active"
                    );


                    const icon =
                        menuToggle.querySelector("i");


                    if (icon) {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                }
            );

        });

}