// ==========================================
// SACCHI FLYIER - MAIN JAVASCRIPT
// ==========================================


// ==========================================
// MOBILE MENU
// ==========================================

const menuButton = document.querySelector(".menu-button");
const navbar = document.querySelector(".navbar");

if (menuButton && navbar) {
    menuButton.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
}


// ==========================================
// ADD TO CART
// ==========================================

const cartButtons = document.querySelectorAll(".cart-button");

let cartCount = Number(localStorage.getItem("cartCount")) || 0;

cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        localStorage.setItem("cartCount", cartCount);

        button.textContent = "ADDED ✓";

        setTimeout(function () {
            button.textContent = "ADD TO CART";
        }, 1500);

        console.log("Cart items:", cartCount);
    });

});


// ==========================================
// NEWSLETTER
// ==========================================

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailInput = newsletterForm.querySelector("input");

        if (emailInput && emailInput.value.trim() !== "") {

            alert("Thanks for joining Sacchi Flyier!");

            emailInput.value = "";
        }

    });

}


// ==========================================
// CLOSE MOBILE MENU
// ==========================================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbar) {
            navbar.classList.remove("active");
        }

    });

});


// ==========================================
// CATEGORY FILTER
// ==========================================

function filterCategory(category) {

    const products = document.querySelectorAll(".product-card");

    products.forEach(function (product) {

        const productCategory =
            product.querySelector(".product-category");

        if (productCategory) {

            const categoryText =
                productCategory.textContent.trim().toUpperCase();

            if (categoryText === category) {

                product.style.display = "";

            } else {

                product.style.display = "none";

            }

        }

    });

    const shop = document.querySelector("#shop");

    if (shop) {

        setTimeout(function () {

            shop.scrollIntoView({
                behavior: "smooth"
            });

        }, 100);

    }

}


// ==========================================
// CHECKOUT SHIPPING
// ==========================================

const countrySelect = document.getElementById("country");

const shippingElement =
    document.getElementById("checkoutShipping");

const totalElement =
    document.getElementById("checkoutTotal");

const subtotalElement =
    document.getElementById("checkoutSubtotal");

const countryMessage =
    document.getElementById("countryMessage");


// Your customer shipping charge
const CUSTOMER_SHIPPING = 19.99;


// Countries you do NOT want to sell to
const BLOCKED_COUNTRIES = [
    "Iraq",
    "Guinea-Bissau",
    "Holy See"
];


// ==========================================
// UPDATE SHIPPING WHEN COUNTRY CHANGES
// ==========================================

function updateShipping() {

    if (!countrySelect) {
        return;
    }

    const selectedCountry = countrySelect.value;


    // No country selected
    if (selectedCountry === "") {

        if (shippingElement) {
            shippingElement.textContent = "$19.99";
        }

        if (countryMessage) {
            countryMessage.textContent = "";
        }

        return;
    }


    // Check blocked countries
    if (BLOCKED_COUNTRIES.includes(selectedCountry)) {

        if (shippingElement) {
            shippingElement.textContent = "Unavailable";
        }

        if (countryMessage) {

            countryMessage.textContent =
                "Sorry, we currently do not ship to this country.";

            countryMessage.style.display = "block";
        }

        if (totalElement) {
            totalElement.textContent = "Unavailable";
        }

        return;
    }


    // Allowed country
    if (shippingElement) {
        shippingElement.textContent =
            "$" + CUSTOMER_SHIPPING.toFixed(2);
    }


    if (countryMessage) {

        countryMessage.textContent =
            "Shipping available to " + selectedCountry + ".";

        countryMessage.style.display = "block";
    }


    updateCheckoutTotal();
}


// ==========================================
// UPDATE TOTAL
// ==========================================

function updateCheckoutTotal() {

    if (!subtotalElement || !totalElement || !countrySelect) {
        return;
    }


    const selectedCountry = countrySelect.value;


    // Don't calculate total for blocked country
    if (BLOCKED_COUNTRIES.includes(selectedCountry)) {

        totalElement.textContent = "Unavailable";

        return;
    }


    const subtotalText =
        subtotalElement.textContent
            .replace(/[^\d.-]/g, "");

    const subtotal =
        parseFloat(subtotalText) || 0;


    if (selectedCountry === "") {

        totalElement.textContent =
            "₹" + subtotal.toFixed(2) + " + $19.99";

        return;
    }


    totalElement.textContent =
        "₹" + subtotal.toFixed(2) +
        " + $" + CUSTOMER_SHIPPING.toFixed(2);
}


// ==========================================
// COUNTRY CHANGE EVENT
// ==========================================

if (countrySelect) {

    countrySelect.addEventListener(
        "change",
        updateShipping
    );

}


// ==========================================
// CHECKOUT INITIALIZATION
// ==========================================

if (countrySelect) {

    updateShipping();

}


// ==========================================
// PLACE ORDER BUTTON
// ==========================================

const placeOrderButton =
    document.getElementById("placeOrderButton");

if (placeOrderButton) {

    placeOrderButton.addEventListener(
        "click",
        function () {

            const selectedCountry =
                countrySelect ? countrySelect.value : "";


            if (selectedCountry === "") {

                alert("Please select your country.");

                return;
            }


            if (BLOCKED_COUNTRIES.includes(selectedCountry)) {

                alert(
                    "Sorry, Sacchi Flyier currently does not ship to " +
                    selectedCountry + "."
                );

                return;
            }


            alert(
                "Your order can be placed for " +
                selectedCountry + "."
            );

        }
    );

}
