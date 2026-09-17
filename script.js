/* =========================================================
   SACCHI FLYIER - MAIN SCRIPT
   ========================================================= */

/* =========================================================
   1. MOBILE MENU
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const closeMenu = document.querySelector(".close-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.add("active");
        });
    }

    if (closeMenu && navMenu) {
        closeMenu.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    }

    /* Close menu when clicking a navigation link */
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu) {
                navMenu.classList.remove("active");
            }
        });
    });

    /* =====================================================
       2. CART COUNT
       ===================================================== */

    updateCartCount();

    /* =====================================================
       3. NEWSLETTER
       ===================================================== */

    setupNewsletter();

    /* =====================================================
       4. CATEGORY FILTER
       ===================================================== */

    setupCategoryFilter();

    /* =====================================================
       5. CHECKOUT
       ===================================================== */

    setupCheckout();
});


/* =========================================================
   CART
   ========================================================= */

/*
   Your website may use one of these cart keys.
   The script checks them in this order.
*/

const CART_KEYS = [
    "sacchiFlyierCart",
    "cart",
    "shoppingCart",
    "cartItems"
];


/* Get cart from localStorage */
function getCart() {
    for (const key of CART_KEYS) {
        try {
            const stored = localStorage.getItem(key);

            if (stored) {
                const parsed = JSON.parse(stored);

                if (Array.isArray(parsed)) {
                    return parsed;
                }
            }
        } catch (error) {
            console.warn("Could not read cart:", key, error);
        }
    }

    return [];
}


/* Save cart */
function saveCart(cart) {
    localStorage.setItem("sacchiFlyierCart", JSON.stringify(cart));
}


/* Get number of products in cart */
function getCartQuantity() {
    const cart = getCart();

    return cart.reduce((total, item) => {
        const quantity = Number(item.quantity || item.qty || 1);

        return total + (Number.isFinite(quantity) ? quantity : 1);
    }, 0);
}


/* Update cart icon/count */
function updateCartCount() {
    const count = getCartQuantity();

    const cartElements = document.querySelectorAll(
        ".cart-count, #cartCount, [data-cart-count]"
    );

    cartElements.forEach(element => {
        element.textContent = count;
    });

    const oldCartCount = document.getElementById("cart-count");

    if (oldCartCount) {
        oldCartCount.textContent = count;
    }
}


/* =========================================================
   PRODUCT PRICE
   ========================================================= */

/*
   Your store product prices are treated as INR.

   Example:
   Product price = ₹499
*/

function getItemPriceINR(item) {
    if (!item) {
        return 0;
    }

    const possiblePrices = [
        item.price,
        item.salePrice,
        item.productPrice,
        item.amount
    ];

    for (const value of possiblePrices) {
        const price = Number(value);

        if (Number.isFinite(price) && price >= 0) {
            return price;
        }
    }

    return 0;
}


/* Get item quantity */
function getItemQuantity(item) {
    const quantity = Number(item?.quantity || item?.qty || 1);

    if (!Number.isFinite(quantity) || quantity < 1) {
        return 1;
    }

    return quantity;
}


/* Calculate cart subtotal in INR */
function getCartSubtotalINR() {
    const cart = getCart();

    return cart.reduce((total, item) => {
        return total + (
            getItemPriceINR(item) * getItemQuantity(item)
        );
    }, 0);
}


/* =========================================================
   CUSTOMER SHIPPING
   ========================================================= */

/*
   IMPORTANT:

   $19.99 is the SHIPPING PRICE YOU CHARGE YOUR CUSTOMER.

   It is NOT the same as CJ's actual shipping cost.

   You pay CJ according to CJ's shipping price.
   Your customer pays $19.99 shipping.
*/

const CUSTOMER_SHIPPING_USD = 19.99;


/* =========================================================
   BLOCKED COUNTRIES
   ========================================================= */

const BLOCKED_COUNTRIES = [
    "Iraq",
    "Guinea-Bissau",
    "Holy See"
];


/* Check whether country is blocked */
function isCountryBlocked(country) {
    return BLOCKED_COUNTRIES.includes(country);
}


/* =========================================================
   COUNTRY → CURRENCY
   ========================================================= */

/*
   These currencies are used for displaying the checkout.

   Country names below match the values used in your
   checkout.html.
*/

const COUNTRY_CURRENCY = {

    "Afghanistan": "AFN",
    "Albania": "ALL",
    "Algeria": "DZD",
    "American Samoa": "USD",
    "Andorra": "EUR",
    "Angola": "AOA",
    "Anguilla": "XCD",
    "Antigua and Barbuda": "XCD",
    "Argentina": "ARS",
    "Armenia": "AMD",
    "Aruba": "AWG",
    "Australia": "AUD",
    "Austria": "EUR",
    "Azerbaijan": "AZN",

    "Bahamas": "BSD",
    "Bahrain": "BHD",
    "Bangladesh": "BDT",
    "Barbados": "BBD",
    "Belarus": "BYN",
    "Belgium": "EUR",
    "Belize": "BZD",
    "Benin": "XOF",
    "Bermuda": "BMD",
    "Bhutan": "BTN",
    "Bolivia": "BOB",
    "Bolivia (Plurinational State of)": "BOB",
    "Bonaire, Sint Eustatius and Saba": "USD",
    "Bosnia and Herzegovina": "BAM",
    "Botswana": "BWP",
    "Bouvet Island": "NOK",
    "Brazil": "BRL",
    "British Indian Ocean Territory": "USD",
    "Brunei": "BND",
    "Brunei Darussalam": "BND",
    "Bulgaria": "EUR",
    "Burkina Faso": "XOF",
    "Burundi": "BIF",

    "Cabo Verde": "CVE",
    "Cambodia": "KHR",
    "Cameroon": "XAF",
    "Canada": "CAD",
    "Cayman Islands": "KYD",
    "Central African Republic": "XAF",
    "Chad": "XAF",
    "Chile": "CLP",
    "China": "CNY",
    "Christmas Island": "AUD",
    "Cocos (Keeling) Islands": "AUD",
    "Colombia": "COP",
    "Comoros": "KMF",
    "Congo": "XAF",
    "Congo (the Democratic Republic of the)": "CDF",
    "Cook Islands": "NZD",
    "Costa Rica": "CRC",
    "Côte d’Ivoire": "XOF",
    "Côte d'Ivoire": "XOF",
    "Croatia": "EUR",
    "Cuba": "CUP",
    "Curaçao": "ANG",
    "Cyprus": "EUR",
    "Czechia": "CZK",

    "Denmark": "DKK",
    "Djibouti": "DJF",
    "Dominica": "XCD",
    "Dominican Republic": "DOP",

    "Ecuador": "USD",
    "Egypt": "EGP",
    "El Salvador": "USD",
    "Equatorial Guinea": "XAF",
    "Eritrea": "ERN",
    "Estonia": "EUR",
    "Ethiopia": "ETB",

    "Falkland Islands": "FKP",
    "Faroe Islands": "DKK",
    "Fiji": "FJD",
    "Finland": "EUR",
    "France": "EUR",
    "French Guiana": "EUR",
    "French Polynesia": "XPF",
    "French Southern Territories": "EUR",

    "Gabon": "XOF",
    "Gambia": "GMD",
    "Georgia": "GEL",
    "Germany": "EUR",
    "Ghana": "GHS",
    "Gibraltar": "GIP",
    "Greece": "EUR",
    "Greenland": "DKK",
    "Grenada": "XCD",
    "Guadeloupe": "EUR",
    "Guam": "USD",
    "Guatemala": "GTQ",
    "Guernsey": "GBP",
    "Guinea": "GNF",
    "Guinea-Bissau": "XOF",
    "Guyana": "GYD",

    "Haiti": "HTG",
    "Heard Island and McDonald Islands": "AUD",
    "Holy See": "EUR",
    "Honduras": "HNL",
    "Hong Kong": "HKD",
    "Hong Kong (China)": "HKD",
    "Hungary": "HUF",

    "Iceland": "ISK",
    "India": "INR",
    "Indonesia": "IDR",
    "Iran": "IRR",
    "Iran (Islamic Republic of)": "IRR",
    "Iraq": "IQD",
    "Ireland": "EUR",
    "Isle of Man": "GBP",
    "Israel": "ILS",
    "Italy": "EUR",

    "Jamaica": "JMD",
    "Japan": "JPY",
    "Jersey": "GBP",
    "Jordan": "JOD",

    "Kazakhstan": "KZT",
    "Kenya": "KES",
    "Kuwait": "KWD",
    "Kyrgyzstan": "KGS",

    "Laos": "LAK",
    "Latvia": "EUR",
    "Lebanon": "LBP",
    "Liechtenstein": "CHF",
    "Lithuania": "EUR",
    "Luxembourg": "EUR",

    "Macau": "MOP",
    "Malaysia": "MYR",
    "Maldives": "MVR",
    "Malta": "EUR",
    "Martinique": "EUR",
    "Mauritius": "MUR",
    "Mexico": "MXN",
    "Monaco": "EUR",
    "Mongolia": "MNT",
    "Montenegro": "EUR",
    "Morocco": "MAD",
    "Mozambique": "MZN",
    "Myanmar": "MMK",

    "Namibia": "NAD",
    "Nepal": "NPR",
    "Netherlands": "EUR",
    "New Zealand": "NZD",
    "Nigeria": "NGN",
    "North Macedonia": "MKD",
    "Norway": "NOK",

    "Oman": "OMR",

    "Pakistan": "PKR",
    "Panama": "PAB",
    "Papua New Guinea": "PGK",
    "Paraguay": "PYG",
    "Peru": "PEN",
    "Philippines": "PHP",
    "Poland": "PLN",
    "Portugal": "EUR",
    "Puerto Rico": "USD",

    "Qatar": "QAR",

    "Romania": "RON",
    "Russia": "RUB",

    "Saudi Arabia": "SAR",
    "Serbia": "RSD",
    "Singapore": "SGD",
    "Slovakia": "EUR",
    "Slovenia": "EUR",
    "South Africa": "ZAR",
    "South Korea": "KRW",
    "Spain": "EUR",
    "Sri Lanka": "LKR",
    "Suriname": "SRD",
    "Sweden": "SEK",
    "Switzerland": "CHF",

    "Taiwan": "TWD",
    "Thailand": "THB",
    "Tunisia": "TND",
    "Turkey": "TRY",

    "Ukraine": "UAH",
    "United Arab Emirates": "AED",
    "UAE": "AED",
    "United Kingdom": "GBP",
    "UK": "GBP",
    "United States": "USD",
    "US": "USD",
    "Uruguay": "UYU",
    "Uzbekistan": "UZS",

    "Venezuela": "VES",
    "Vietnam": "VND"
};


/* =========================================================
   CURRENCY SYMBOLS
   ========================================================= */

const CURRENCY_SYMBOLS = {
    "INR": "₹",
    "USD": "$",
    "EUR": "€",
    "GBP": "£",
    "AUD": "A$",
    "CAD": "C$",
    "NZD": "NZ$",
    "SGD": "S$",
    "HKD": "HK$",
    "CNY": "¥",
    "JPY": "¥",
    "KRW": "₩",
    "TWD": "NT$",
    "THB": "฿",
    "MYR": "RM",
    "IDR": "Rp",
    "PHP": "₱",
    "VND": "₫",
    "BDT": "৳",
    "PKR": "₨",
    "LKR": "Rs",
    "NPR": "Rs",
    "AED": "د.إ",
    "SAR": "﷼",
    "QAR": "﷼",
    "ZAR": "R",
    "BRL": "R$",
    "MXN": "MX$",
    "ARS": "ARS$",
    "CLP": "CLP$",
    "COP": "COL$",
    "PEN": "S/",
    "TRY": "₺",
    "RUB": "₽",
    "UAH": "₴",
    "CHF": "CHF",
    "SEK": "kr",
    "NOK": "kr",
    "DKK": "kr",
    "PLN": "zł",
    "CZK": "Kč",
    "HUF": "Ft",
    "RON": "lei",
    "ISK": "kr"
};


/* =========================================================
   CURRENCY NAME
   ========================================================= */

function getCurrencyForCountry(country) {
    return COUNTRY_CURRENCY[country] || null;
}


/* =========================================================
   FORMAT MONEY
   ========================================================= */

function formatMoney(amount, currency) {
    if (!Number.isFinite(amount)) {
        return "—";
    }

    try {
        return new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: currency,
            maximumFractionDigits: 2
        }).format(amount);
    } catch (error) {
        const symbol = CURRENCY_SYMBOLS[currency] || currency;

        return `${symbol}${amount.toFixed(2)}`;
    }
}


/* =========================================================
   EXCHANGE RATE
   ========================================================= */

/*
   Frankfurter API:
   INR → selected currency
   USD → selected currency

   The API does not require an API key.
*/

const exchangeRateCache = {};


async function getExchangeRate(baseCurrency, targetCurrency) {

    if (baseCurrency === targetCurrency) {
        return 1;
    }

    const cacheKey = `${baseCurrency}_${targetCurrency}`;

    if (exchangeRateCache[cacheKey]) {
        return exchangeRateCache[cacheKey];
    }

    const url =
        `https://api.frankfurter.dev/v2/rate/${encodeURIComponent(baseCurrency)}/${encodeURIComponent(targetCurrency)}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(
            `Currency conversion failed: ${baseCurrency} → ${targetCurrency}`
        );
    }

    const data = await response.json();

    const rate = Number(data.rate);

    if (!Number.isFinite(rate) || rate <= 0) {
        throw new Error("Invalid exchange rate received.");
    }

    exchangeRateCache[cacheKey] = rate;

    return rate;
}


/* =========================================================
   CONVERT MONEY
   ========================================================= */

async function convertMoney(amount, fromCurrency, toCurrency) {

    if (amount === 0) {
        return 0;
    }

    if (fromCurrency === toCurrency) {
        return amount;
    }

    const rate = await getExchangeRate(
        fromCurrency,
        toCurrency
    );

    return amount * rate;
}


/* =========================================================
   CHECKOUT ELEMENTS
   ========================================================= */

function getCheckoutElements() {

    return {
        form: document.getElementById("checkoutForm"),

        name: document.getElementById("checkoutName"),
        email: document.getElementById("checkoutEmail"),
        phone: document.getElementById("checkoutPhone"),
        phoneCode: document.getElementById("checkoutCountryCode"),

        address: document.getElementById("address"),
        city: document.getElementById("city"),
        state: document.getElementById("state"),
        country: document.getElementById("country"),
        postalCode: document.getElementById("postalCode"),

        countryMessage: document.getElementById("countryMessage"),

        checkoutItems: document.getElementById("checkoutItems"),
        checkoutSubtotal: document.getElementById("checkoutSubtotal"),
        checkoutShipping: document.getElementById("checkoutShipping"),
        checkoutTotal: document.getElementById("checkoutTotal"),
        checkoutCurrency: document.getElementById("checkoutCurrency"),

        placeOrderButton: document.getElementById("placeOrderButton")
    };
}


/* =========================================================
   RENDER CHECKOUT CART
   ========================================================= */

async function renderCheckoutItems(targetCurrency = "INR") {

    const elements = getCheckoutElements();

    if (!elements.checkoutItems) {
        return;
    }

    const cart = getCart();

    if (cart.length === 0) {

        elements.checkoutItems.innerHTML = `
            <div class="empty-checkout-cart">
                Your cart is empty.
            </div>
        `;

        return;
    }

    /*
       Convert INR product prices to selected currency.
    */

    let conversionRate = 1;

    try {
        conversionRate = await getExchangeRate(
            "INR",
            targetCurrency
        );
    } catch (error) {
        console.warn("Could not convert cart prices:", error);

        /*
           If selected currency is unavailable, don't show
           misleading mixed currencies.
        */

        elements.checkoutItems.innerHTML = `
            <div class="empty-checkout-cart">
                Currency conversion is currently unavailable.
                Please try again.
            </div>
        `;

        return;
    }


    elements.checkoutItems.innerHTML = cart.map(item => {

        const name =
            item.name ||
            item.title ||
            item.productName ||
            "Product";

        const quantity = getItemQuantity(item);

        const priceINR = getItemPriceINR(item);

        const priceConverted =
            priceINR * conversionRate;

        const lineTotal =
            priceConverted * quantity;

        return `
            <div class="checkout-item">
                <div class="checkout-item-info">
                    <strong>${escapeHTML(name)}</strong>
                    <span>Qty: ${quantity}</span>
                </div>

                <div class="checkout-item-price">
                    ${formatMoney(lineTotal, targetCurrency)}
                </div>
            </div>
        `;

    }).join("");
}


/* =========================================================
   UPDATE CHECKOUT
   ========================================================= */

let checkoutUpdateRequest = 0;


async function updateCheckout() {

    const elements = getCheckoutElements();

    if (!elements.country) {
        return;
    }

    const requestNumber = ++checkoutUpdateRequest;

    const country = elements.country.value;

    const cart = getCart();

    /*
       No country selected.
    */

    if (!country) {

        if (elements.checkoutCurrency) {
            elements.checkoutCurrency.textContent =
                "Select country";
        }

        if (elements.checkoutSubtotal) {
            elements.checkoutSubtotal.textContent = "—";
        }

        if (elements.checkoutShipping) {
            elements.checkoutShipping.textContent = "—";
        }

        if (elements.checkoutTotal) {
            elements.checkoutTotal.textContent = "—";
        }

        if (elements.countryMessage) {
            elements.countryMessage.textContent =
                "Please select your shipping country.";

            elements.countryMessage.className =
                "checkout-status";
        }

        if (elements.placeOrderButton) {
            elements.placeOrderButton.disabled = true;
        }

        return;
    }


    /*
       Blocked country.
    */

    if (isCountryBlocked(country)) {

        if (elements.checkoutCurrency) {
            elements.checkoutCurrency.textContent =
                "Not available";
        }

        if (elements.checkoutSubtotal) {
            elements.checkoutSubtotal.textContent = "—";
        }

        if (elements.checkoutShipping) {
            elements.checkoutShipping.textContent = "—";
        }

        if (elements.checkoutTotal) {
            elements.checkoutTotal.textContent = "—";
        }

        if (elements.countryMessage) {

            elements.countryMessage.textContent =
                "Sorry, shipping is not available to this country.";

            elements.countryMessage.className =
                "checkout-status unavailable";
        }

        if (elements.placeOrderButton) {
            elements.placeOrderButton.disabled = true;
        }

        if (elements.checkoutItems) {
            if (cart.length === 0) {
                elements.checkoutItems.innerHTML = `
                    <div class="empty-checkout-cart">
                        Your cart is empty.
                    </div>
                `;
            }
        }

        return;
    }


    /*
       Get target currency.
    */

    const targetCurrency =
        getCurrencyForCountry(country);

    if (!targetCurrency) {

        if (elements.checkoutCurrency) {
            elements.checkoutCurrency.textContent =
                "Currency unavailable";
        }

        if (elements.countryMessage) {
            elements.countryMessage.textContent =
                "Currency conversion is not available for this country.";

            elements.countryMessage.className =
                "checkout-status unavailable";
        }

        if (elements.placeOrderButton) {
            elements.placeOrderButton.disabled = true;
        }

        return;
    }


    /*
       Empty cart.
    */

    if (cart.length === 0) {

        if (elements.checkoutCurrency) {
            elements.checkoutCurrency.textContent =
                targetCurrency;
        }

        if (elements.checkoutSubtotal) {
            elements.checkoutSubtotal.textContent =
                formatMoney(0, targetCurrency);
        }

        if (elements.checkoutShipping) {
            elements.checkoutShipping.textContent =
                formatMoney(0, targetCurrency);
        }

        if (elements.checkoutTotal) {
            elements.checkoutTotal.textContent =
                formatMoney(0, targetCurrency);
        }

        if (elements.countryMessage) {
            elements.countryMessage.textContent =
                "Your cart is empty.";

            elements.countryMessage.className =
                "checkout-status unavailable";
        }

        if (elements.placeOrderButton) {
            elements.placeOrderButton.disabled = true;
        }

        await renderCheckoutItems(targetCurrency);

        return;
    }


    /*
       Show loading state.
    */

    if (elements.checkoutCurrency) {
        elements.checkoutCurrency.textContent =
            `${targetCurrency} • Converting...`;
    }

    if (elements.checkoutSubtotal) {
        elements.checkoutSubtotal.textContent =
            "Converting...";
    }

    if (elements.checkoutShipping) {
        elements.checkoutShipping.textContent =
            "Converting...";
    }

    if (elements.checkoutTotal) {
        elements.checkoutTotal.textContent =
            "Converting...";
    }

    if (elements.placeOrderButton) {
        elements.placeOrderButton.disabled = true;
    }


    try {

        /*
           Product prices are INR.
        */

        const subtotalINR =
            getCartSubtotalINR();


        /*
           Convert product subtotal:
           INR → customer's currency
        */

        const subtotalConverted =
            await convertMoney(
                subtotalINR,
                "INR",
                targetCurrency
            );


        /*
           Customer shipping is USD 19.99.
           Convert:
           USD → customer's currency
        */

        const shippingConverted =
            await convertMoney(
                CUSTOMER_SHIPPING_USD,
                "USD",
                targetCurrency
            );


        /*
           Total
        */

        const totalConverted =
            subtotalConverted +
            shippingConverted;


        /*
           Make sure a newer request hasn't started.
        */

        if (requestNumber !== checkoutUpdateRequest) {
            return;
        }


        /*
           Update currency label.
        */

        if (elements.checkoutCurrency) {
            elements.checkoutCurrency.textContent =
                targetCurrency;
        }


        /*
           Update subtotal.
        */

        if (elements.checkoutSubtotal) {
            elements.checkoutSubtotal.textContent =
                formatMoney(
                    subtotalConverted,
                    targetCurrency
                );
        }


        /*
           Update shipping.
        */

        if (elements.checkoutShipping) {
            elements.checkoutShipping.textContent =
                formatMoney(
                    shippingConverted,
                    targetCurrency
                );
        }


        /*
           Update total.
        */

        if (elements.checkoutTotal) {
            elements.checkoutTotal.textContent =
                formatMoney(
                    totalConverted,
                    targetCurrency
                );
        }


        /*
           Country message.
        */

        if (elements.countryMessage) {

            elements.countryMessage.textContent =
                `Shipping available to ${country}.`;

            elements.countryMessage.className =
                "checkout-status available";
        }


        /*
           Render product lines in SAME currency.
        */

        await renderCheckoutItems(targetCurrency);


        /*
           Enable order button only after successful conversion.
        */

        if (
            elements.placeOrderButton &&
            requestNumber === checkoutUpdateRequest
        ) {
            elements.placeOrderButton.disabled = false;
        }


    } catch (error) {

        console.error(
            "Checkout currency conversion error:",
            error
        );


        if (elements.checkoutCurrency) {
            elements.checkoutCurrency.textContent =
                "Conversion unavailable";
        }

        if (elements.checkoutSubtotal) {
            elements.checkoutSubtotal.textContent =
                "—";
        }

        if (elements.checkoutShipping) {
            elements.checkoutShipping.textContent =
                "—";
        }

        if (elements.checkoutTotal) {
            elements.checkoutTotal.textContent =
                "—";
        }

        if (elements.countryMessage) {

            elements.countryMessage.textContent =
                "Currency conversion is temporarily unavailable. Please try again.";

            elements.countryMessage.className =
                "checkout-status unavailable";
        }

        if (elements.placeOrderButton) {
            elements.placeOrderButton.disabled = true;
        }
    }
}


/* =========================================================
   CHECKOUT SETUP
   ========================================================= */

function setupCheckout() {

    const elements = getCheckoutElements();

    if (!elements.country) {
        return;
    }


    /*
       Country change.
    */

    elements.country.addEventListener(
        "change",
        () => {
            updateCheckout();
        }
    );


    /*
       Initial checkout update.
    */

    updateCheckout();


    /*
       Place order button.
    */

    if (elements.placeOrderButton) {

        elements.placeOrderButton.addEventListener(
            "click",
            handlePlaceOrder
        );
    }


    /*
       If checkout form exists, prevent normal submission.
    */

    if (elements.form) {

        elements.form.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                handlePlaceOrder();
            }
        );
    }
}


/* =========================================================
   PLACE ORDER
   ========================================================= */

async function handlePlaceOrder() {

    const elements = getCheckoutElements();

    if (!elements.country) {
        return;
    }


    /*
       Prevent multiple clicks.
    */

    if (
        elements.placeOrderButton &&
        elements.placeOrderButton.disabled
    ) {
        return;
    }


    /*
       Get cart.
    */

    const cart = getCart();

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    /*
       Country.
    */

    const country = elements.country.value;


    /*
       Blocked country.
    */

    if (isCountryBlocked(country)) {

        alert(
            "Sorry, shipping is not available to this country."
        );

        return;
    }


    /*
       Validate required fields.
    */

    const requiredFields = [
        elements.name,
        elements.email,
        elements.phone,
        elements.address,
        elements.city,
        elements.state,
        elements.country,
        elements.postalCode
    ];


    for (const field of requiredFields) {

        if (!field) {
            continue;
        }

        if (!String(field.value).trim()) {

            field.focus();

            alert(
                "Please complete all required checkout fields."
            );

            return;
        }
    }


    /*
       Email validation.
    */

    if (
        elements.email &&
        typeof elements.email.checkValidity === "function" &&
        !elements.email.checkValidity()
    ) {

        elements.email.focus();

        alert(
            "Please enter a valid email address."
        );

        return;
    }


    /*
       Currency.
    */

    const currency =
        getCurrencyForCountry(country);

    if (!currency) {

        alert(
            "Currency conversion is unavailable for this country."
        );

        return;
    }


    /*
       Calculate prices again before saving order.
    */

    try {

        const subtotalINR =
            getCartSubtotalINR();


        const subtotal =
            await convertMoney(
                subtotalINR,
                "INR",
                currency
            );


        const shipping =
            await convertMoney(
                CUSTOMER_SHIPPING_USD,
                "USD",
                currency
            );


        const total =
            subtotal + shipping;


        /*
           Payment method.
        */

        let paymentMethod = "Cash on Delivery";

        const selectedPayment =
            document.querySelector(
                'input[name="paymentMethod"]:checked'
            );

        if (selectedPayment) {

            paymentMethod =
                selectedPayment.value ||
                selectedPayment.dataset?.method ||
                paymentMethod;
        }


        /*
           Build order.
        */

        const order = {

            orderId:
                "SF-" +
                Date.now(),

            customer: {

                name:
                    elements.name?.value.trim() || "",

                email:
                    elements.email?.value.trim() || "",

                phoneCode:
                    elements.phoneCode?.value || "+91",

                phone:
                    elements.phone?.value.trim() || ""
            },

            shippingAddress: {

                address:
                    elements.address?.value.trim() || "",

                city:
                    elements.city?.value.trim() || "",

                state:
                    elements.state?.value.trim() || "",

                country:
                    country,

                postalCode:
                    elements.postalCode?.value.trim() || ""
            },

            items: cart,

            currency: currency,

            subtotal: Number(
                subtotal.toFixed(2)
            ),

            shipping: Number(
                shipping.toFixed(2)
            ),

            total: Number(
                total.toFixed(2)
            ),

            shippingChargeUSD:
                CUSTOMER_SHIPPING_USD,

            paymentMethod:
                paymentMethod,

            createdAt:
                new Date().toISOString()
        };


        /*
           Save order for the next page/backend.
        */

        localStorage.setItem(
            "pendingOrder",
            JSON.stringify(order)
        );


        /*
           Optional: also save a copy of checkout data.
        */

        localStorage.setItem(
            "sacchiFlyierCheckout",
            JSON.stringify(order)
        );


        /*
           Continue to payment/confirmation.

           If your checkout page already has a specific
           redirect, change ONLY the line below.
        */

        const checkoutNextPage =
            document.body.dataset.checkoutNext ||
            "confirmation.html";

        window.location.href =
            checkoutNextPage;


    } catch (error) {

        console.error(
            "Could not create order:",
            error
        );

        alert(
            "We could not calculate your order total right now. Please try again."
        );
    }
}


/* =========================================================
   NEWSLETTER
   ========================================================= */

function setupNewsletter() {

    const newsletterForms =
        document.querySelectorAll(
            ".newsletter-form, #newsletterForm"
        );


    newsletterForms.forEach(form => {

        form.addEventListener(
            "submit",
            async event => {

                event.preventDefault();

                const emailInput =
                    form.querySelector(
                        'input[type="email"]'
                    );

                if (!emailInput) {
                    return;
                }

                const email =
                    emailInput.value.trim();


                if (!email) {

                    alert(
                        "Please enter your email address."
                    );

                    return;
                }


                if (!emailInput.checkValidity()) {

                    alert(
                        "Please enter a valid email address."
                    );

                    return;
                }


                /*
                   The actual Resend API call should be done
                   by your backend/server.js.

                   Do NOT put your Resend API key inside
                   this browser script.
                */

                try {

                    const response =
                        await fetch(
                            "/api/newsletter",
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body: JSON.stringify({
                                    email: email
                                })
                            }
                        );


                    if (!response.ok) {
                        throw new Error(
                            "Newsletter request failed."
                        );
                    }


                    alert(
                        "Thanks for subscribing to Sacchi Flyier!"
                    );

                    form.reset();


                } catch (error) {

                    console.error(
                        "Newsletter error:",
                        error
                    );

                    /*
                       If backend isn't connected yet,
                       don't expose API keys or sensitive info.
                    */

                    alert(
                        "Newsletter service is currently unavailable. Please try again later."
                    );
                }
            }
        );
    });
}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function setupCategoryFilter() {

    const categoryButtons =
        document.querySelectorAll(
            "[data-category]"
        );

    const products =
        document.querySelectorAll(
            "[data-product-category]"
        );


    if (
        categoryButtons.length === 0 ||
        products.length === 0
    ) {
        return;
    }


    categoryButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const selectedCategory =
                    button.dataset.category;


                /*
                   Active button.
                */

                categoryButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                button.classList.add("active");


                /*
                   Show/hide products.
                */

                products.forEach(product => {

                    const productCategory =
                        product.dataset.productCategory;


                    if (
                        selectedCategory === "all" ||
                        selectedCategory === "*" ||
                        productCategory === selectedCategory
                    ) {

                        product.style.display = "";

                    } else {

                        product.style.display = "none";
                    }
                });
            }
        );
    });
}


/* =========================================================
   HTML ESCAPE
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   CART STORAGE LISTENER
   ========================================================= */

/*
   Update cart count when another tab/window changes
   the cart.
*/

window.addEventListener(
    "storage",
    event => {

        if (CART_KEYS.includes(event.key)) {
            updateCartCount();
        }
    }
);


/* =========================================================
   CUSTOM EVENT
   ========================================================= */

/*
   Your product/cart code can call:

   window.dispatchEvent(new Event("cartUpdated"));

   after adding/removing a product.
*/

window.addEventListener(
    "cartUpdated",
    () => {
        updateCartCount();

        if (document.getElementById("country")) {
            updateCheckout();
        }
    }
);


/* =========================================================
   END OF SCRIPT
   ========================================================= */
