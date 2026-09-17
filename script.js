/* =========================================================
   SACCHI FLYIER - script.js
   ========================================================= */


/* =========================================================
   CART SETTINGS
   ========================================================= */

const CART_KEYS = [
    "sacchiFlyierCart",
    "cart",
    "shoppingCart",
    "cartItems"
];


/* =========================================================
   CUSTOMER SHIPPING PRICE
   =========================================================
   
   This is what YOU charge the customer.

   CJ's actual shipping cost is separate.
   ========================================================= */

const CUSTOMER_SHIPPING_USD = 19.99;


/* =========================================================
   BLOCKED COUNTRIES
   ========================================================= */

const BLOCKED_COUNTRIES = [
    "Iraq",
    "Guinea-Bissau",
    "Holy See"
];


/* =========================================================
   COUNTRY → CURRENCY
   ========================================================= */

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

    "UAE": "AED",
    "United Arab Emirates": "AED",

    "UK": "GBP",
    "United Kingdom": "GBP",

    "US": "USD",
    "United States": "USD",

    "Uruguay": "UYU",
    "Uzbekistan": "UZS",

    "Venezuela": "VES",
    "Vietnam": "VND"
};


/* =========================================================
   CART
   ========================================================= */

function getCart() {

    for (const key of CART_KEYS) {

        try {

            const saved = localStorage.getItem(key);

            if (!saved) {
                continue;
            }

            const cart = JSON.parse(saved);

            if (Array.isArray(cart)) {
                return cart;
            }

        } catch (error) {

            console.warn(
                "Could not read cart:",
                error
            );
        }
    }

    return [];
}


/* =========================================================
   CART QUANTITY
   ========================================================= */

function getItemQuantity(item) {

    const quantity = Number(
        item?.quantity ??
        item?.qty ??
        1
    );

    if (
        !Number.isFinite(quantity) ||
        quantity < 1
    ) {
        return 1;
    }

    return quantity;
}


/* =========================================================
   PRODUCT PRICE
   =========================================================
   
   Your product prices are treated as INR.
   ========================================================= */

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

        if (
            Number.isFinite(price) &&
            price >= 0
        ) {
            return price;
        }
    }

    return 0;
}


/* =========================================================
   CART SUBTOTAL
   ========================================================= */

function getCartSubtotalINR() {

    const cart = getCart();

    return cart.reduce(
        (total, item) => {

            const price =
                getItemPriceINR(item);

            const quantity =
                getItemQuantity(item);

            return total +
                (price * quantity);

        },
        0
    );
}


/* =========================================================
   CART COUNT
   ========================================================= */

function updateCartCount() {

    const cart = getCart();

    const quantity = cart.reduce(
        (total, item) => {

            return total +
                getItemQuantity(item);

        },
        0
    );


    const selectors = [
        ".cart-count",
        "#cartCount",
        "#cart-count",
        "[data-cart-count]"
    ];


    document
        .querySelectorAll(selectors.join(","))
        .forEach(element => {

            element.textContent =
                quantity;
        });
}


/* =========================================================
   CURRENCY FORMAT
   ========================================================= */

function formatMoney(
    amount,
    currency
) {

    if (!Number.isFinite(amount)) {
        return "—";
    }

    try {

        return new Intl.NumberFormat(
            undefined,
            {
                style: "currency",
                currency: currency,
                maximumFractionDigits: 2
            }
        ).format(amount);

    } catch (error) {

        return `${currency} ${amount.toFixed(2)}`;
    }
}


/* =========================================================
   COUNTRY → CURRENCY
   ========================================================= */

function getCurrencyForCountry(country) {

    return COUNTRY_CURRENCY[country] || null;
}


/* =========================================================
   CHECK BLOCKED COUNTRY
   ========================================================= */

function isCountryBlocked(country) {

    return BLOCKED_COUNTRIES.includes(
        country
    );
}


/* =========================================================
   EXCHANGE RATE CACHE
   ========================================================= */

const exchangeRateCache = {};


/* =========================================================
   GET EXCHANGE RATE
   ========================================================= */

async function getExchangeRate(
    fromCurrency,
    toCurrency
) {

    if (
        fromCurrency ===
        toCurrency
    ) {
        return 1;
    }


    const cacheKey =
        `${fromCurrency}_${toCurrency}`;


    if (
        exchangeRateCache[cacheKey]
    ) {
        return exchangeRateCache[
            cacheKey
        ];
    }


    const url =
        `https://api.frankfurter.dev/v2/rate/${encodeURIComponent(fromCurrency)}/${encodeURIComponent(toCurrency)}`;


    const response =
        await fetch(url);


    if (!response.ok) {

        throw new Error(
            `Exchange rate unavailable: ${fromCurrency} → ${toCurrency}`
        );
    }


    const data =
        await response.json();


    const rate =
        Number(data.rate);


    if (
        !Number.isFinite(rate) ||
        rate <= 0
    ) {

        throw new Error(
            "Invalid exchange rate."
        );
    }


    exchangeRateCache[
        cacheKey
    ] = rate;


    return rate;
}


/* =========================================================
   CONVERT MONEY
   ========================================================= */

async function convertMoney(
    amount,
    fromCurrency,
    toCurrency
) {

    if (amount === 0) {
        return 0;
    }

    if (
        fromCurrency ===
        toCurrency
    ) {
        return amount;
    }


    const rate =
        await getExchangeRate(
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

        form:
            document.getElementById(
                "checkoutForm"
            ),

        name:
            document.getElementById(
                "checkoutName"
            ),

        email:
            document.getElementById(
                "checkoutEmail"
            ),

        phone:
            document.getElementById(
                "checkoutPhone"
            ),

        phoneCode:
            document.getElementById(
                "checkoutCountryCode"
            ),

        address:
            document.getElementById(
                "address"
            ),

        city:
            document.getElementById(
                "city"
            ),

        state:
            document.getElementById(
                "state"
            ),

        country:
            document.getElementById(
                "country"
            ),

        postalCode:
            document.getElementById(
                "postalCode"
            ),

        countryMessage:
            document.getElementById(
                "countryMessage"
            ),

        checkoutItems:
            document.getElementById(
                "checkoutItems"
            ),

        checkoutSubtotal:
            document.getElementById(
                "checkoutSubtotal"
            ),

        checkoutShipping:
            document.getElementById(
                "checkoutShipping"
            ),

        checkoutTotal:
            document.getElementById(
                "checkoutTotal"
            ),

        checkoutCurrency:
            document.getElementById(
                "checkoutCurrency"
            ),

        placeOrderButton:
            document.getElementById(
                "placeOrderButton"
            )
    };
}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


/* =========================================================
   RENDER CHECKOUT ITEMS
   ========================================================= */

async function renderCheckoutItems(
    currency
) {

    const elements =
        getCheckoutElements();

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


    let rate = 1;


    try {

        rate =
            await getExchangeRate(
                "INR",
                currency
            );

    } catch (error) {

        elements.checkoutItems.innerHTML = `
            <div class="empty-checkout-cart">
                Currency conversion is currently unavailable.
            </div>
        `;

        return;
    }


    elements.checkoutItems.innerHTML =
        cart.map(item => {

            const name =
                item.name ||
                item.title ||
                item.productName ||
                "Product";


            const quantity =
                getItemQuantity(item);


            const priceINR =
                getItemPriceINR(item);


            const lineTotal =
                priceINR *
                quantity *
                rate;


            return `
                <div class="checkout-item">

                    <div class="checkout-item-info">

                        <strong>
                            ${escapeHTML(name)}
                        </strong>

                        <span>
                            Qty: ${quantity}
                        </span>

                    </div>

                    <div class="checkout-item-price">

                        ${formatMoney(
                            lineTotal,
                            currency
                        )}

                    </div>

                </div>
            `;

        }).join("");
}


/* =========================================================
   UPDATE CHECKOUT
   ========================================================= */

let checkoutUpdateNumber = 0;


async function updateCheckout() {

    const elements =
        getCheckoutElements();


    if (!elements.country) {
        return;
    }


    const requestNumber =
        ++checkoutUpdateNumber;


    const country =
        elements.country.value;


    const cart =
        getCart();


    /* -----------------------------------------------------
       NO COUNTRY
       ----------------------------------------------------- */

    if (!country) {

        if (elements.checkoutCurrency) {
            elements.checkoutCurrency.textContent =
                "Select country";
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
                "Please select your shipping country.";

            elements.countryMessage.className =
                "checkout-status";
        }

        if (elements.placeOrderButton) {
            elements.placeOrderButton.disabled =
                true;
        }

        return;
    }


    /* -----------------------------------------------------
       BLOCKED COUNTRY
       ----------------------------------------------------- */

    if (
        isCountryBlocked(country)
    ) {

        if (elements.checkoutCurrency) {
            elements.checkoutCurrency.textContent =
                "Not available";
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
                "Sorry, shipping is not available to this country.";

            elements.countryMessage.className =
                "checkout-status unavailable";
        }

        if (elements.placeOrderButton) {
            elements.placeOrderButton.disabled =
                true;
        }

        return;
    }


    /* -----------------------------------------------------
       FIND CURRENCY
       ----------------------------------------------------- */

    const currency =
        getCurrencyForCountry(country);


    if (!currency) {

        if (elements.checkoutCurrency) {
            elements.checkoutCurrency.textContent =
                "Unavailable";
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
                "Currency conversion is unavailable for this country.";

            elements.countryMessage.className =
                "checkout-status unavailable";
        }

        if (elements.placeOrderButton) {
            elements.placeOrderButton.disabled =
                true;
        }

        return;
    }


    /* -----------------------------------------------------
       EMPTY CART
       ----------------------------------------------------- */

    if (cart.length === 0) {

        if (elements.checkoutCurrency) {
            elements.checkoutCurrency.textContent =
                currency;
        }

        if (elements.checkoutSubtotal) {
            elements.checkoutSubtotal.textContent =
                formatMoney(
                    0,
                    currency
                );
        }

        if (elements.checkoutShipping) {
            elements.checkoutShipping.textContent =
                formatMoney(
                    0,
                    currency
                );
        }

        if (elements.checkoutTotal) {
            elements.checkoutTotal.textContent =
                formatMoney(
                    0,
                    currency
                );
        }

        if (elements.countryMessage) {

            elements.countryMessage.textContent =
                "Your cart is empty.";

            elements.countryMessage.className =
                "checkout-status unavailable";
        }

        if (elements.placeOrderButton) {
            elements.placeOrderButton.disabled =
                true;
        }

        await renderCheckoutItems(
            currency
        );

        return;
    }


    /* -----------------------------------------------------
       LOADING
       ----------------------------------------------------- */

    if (elements.checkoutCurrency) {
        elements.checkoutCurrency.textContent =
            `${currency} • Converting...`;
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
        elements.placeOrderButton.disabled =
            true;
    }


    /* -----------------------------------------------------
       CALCULATE
       ----------------------------------------------------- */

    try {

        const subtotalINR =
            getCartSubtotalINR();


        /* Product price: INR → customer currency */

        const subtotal =
            await convertMoney(
                subtotalINR,
                "INR",
                currency
            );


        /* Shipping: USD 19.99 → customer currency */

        const shipping =
            await convertMoney(
                CUSTOMER_SHIPPING_USD,
                "USD",
                currency
            );


        const total =
            subtotal +
            shipping;


        if (
            requestNumber !==
            checkoutUpdateNumber
        ) {
            return;
        }


        /* Display currency */

        if (elements.checkoutCurrency) {
            elements.checkoutCurrency.textContent =
                currency;
        }


        /* Display subtotal */

        if (elements.checkoutSubtotal) {

            elements.checkoutSubtotal.textContent =
                formatMoney(
                    subtotal,
                    currency
                );
        }


        /* Display shipping */

        if (elements.checkoutShipping) {

            elements.checkoutShipping.textContent =
                formatMoney(
                    shipping,
                    currency
                );
        }


        /* Display total */

        if (elements.checkoutTotal) {

            elements.checkoutTotal.textContent =
                formatMoney(
                    total,
                    currency
                );
        }


        /* Country message */

        if (elements.countryMessage) {

            elements.countryMessage.textContent =
                `Shipping available to ${country}.`;

            elements.countryMessage.className =
                "checkout-status available";
        }


        /* Product lines */

        await renderCheckoutItems(
            currency
        );


        /* Enable order */

        if (
            elements.placeOrderButton &&
            requestNumber ===
                checkoutUpdateNumber
        ) {

            elements.placeOrderButton.disabled =
                false;
        }


    } catch (error) {

        console.error(
            "Checkout conversion error:",
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
            elements.placeOrderButton.disabled =
                true;
        }
    }
}


/* =========================================================
   PLACE ORDER
   ========================================================= */

async function handlePlaceOrder() {

    const elements =
        getCheckoutElements();


    if (!elements.country) {
        return;
    }


    /* Get cart */

    const cart =
        getCart();


    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;
    }


    /* Get country */

    const country =
        elements.country.value;


    /* Check blocked country */

    if (
        isCountryBlocked(country)
    ) {

        alert(
            "Sorry, shipping is not available to this country."
        );

        return;
    }


    /* Check required fields */

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


    for (
        const field of requiredFields
    ) {

        if (!field) {
            continue;
        }


        if (
            !String(field.value).trim()
        ) {

            field.focus();

            alert(
                "Please complete all required checkout fields."
            );

            return;
        }
    }


    /* Validate email */

    if (
        elements.email &&
        !elements.email.checkValidity()
    ) {

        elements.email.focus();

        alert(
            "Please enter a valid email address."
        );

        return;
    }


    /* Get currency */

    const currency =
        getCurrencyForCountry(
            country
        );


    if (!currency) {

        alert(
            "Currency conversion is unavailable for this country."
        );

        return;
    }


    try {

        /* Calculate subtotal */

        const subtotalINR =
            getCartSubtotalINR();


        /* Convert subtotal */

        const subtotal =
            await convertMoney(
                subtotalINR,
                "INR",
                currency
            );


        /* Convert customer shipping */

        const shipping =
            await convertMoney(
                CUSTOMER_SHIPPING_USD,
                "USD",
                currency
            );


        /* Calculate total */

        const total =
            subtotal +
            shipping;


        /* Payment method */

        let paymentMethod =
            "Cash on Delivery";


        const selectedPayment =
            document.querySelector(
                'input[name="paymentMethod"]:checked'
            );


        if (selectedPayment) {

            paymentMethod =
                selectedPayment.value ||
                "Cash on Delivery";
        }


        /* Create order */

        const order = {

            orderId:
                "SF-" +
                Date.now(),

            customer: {

                name:
                    elements.name.value.trim(),

                email:
                    elements.email.value.trim(),

                phoneCode:
                    elements.phoneCode?.value ||
                    "+91",

                phone:
                    elements.phone.value.trim()
            },

            shippingAddress: {

                address:
                    elements.address.value.trim(),

                city:
                    elements.city.value.trim(),

                state:
                    elements.state.value.trim(),

                country:
                    country,

                postalCode:
                    elements.postalCode.value.trim()
            },

            items:
                cart,

            currency:
                currency,

            subtotal:
                Number(
                    subtotal.toFixed(2)
                ),

            shipping:
                Number(
                    shipping.toFixed(2)
                ),

            total:
                Number(
                    total.toFixed(2)
                ),

            customerShippingUSD:
                CUSTOMER_SHIPPING_USD,

            paymentMethod:
                paymentMethod,

            createdAt:
                new Date().toISOString()
        };


        /* Save order */

        localStorage.setItem(
            "pendingOrder",
            JSON.stringify(order)
        );


        localStorage.setItem(
            "sacchiFlyierCheckout",
            JSON.stringify(order)
        );


        /*
           NO confirmation.html REDIRECT.

           For now, simply show the order ID.
        */

        alert(
            `Order ${order.orderId} has been created successfully!`
        );


    } catch (error) {

        console.error(
            "Order creation error:",
            error
        );

        alert(
            "We could not calculate your order total. Please try again."
        );
    }
}


/* =========================================================
   CHECKOUT SETUP
   ========================================================= */

function setupCheckout() {

    const elements =
        getCheckoutElements();


    if (!elements.country) {
        return;
    }


    /* Country changed */

    elements.country.addEventListener(
        "change",
        updateCheckout
    );


    /* Initial checkout */

    updateCheckout();


    /* Place order */

    if (
        elements.placeOrderButton
    ) {

        elements.placeOrderButton.addEventListener(
            "click",
            handlePlaceOrder
        );
    }


    /* Form submit */

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
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    const menuToggle =
        document.querySelector(
            ".menu-toggle"
        );


    const navMenu =
        document.querySelector(
            ".nav-menu"
        );


    const closeMenu =
        document.querySelector(
            ".close-menu"
        );


    if (
        menuToggle &&
        navMenu
    ) {

        menuToggle.addEventListener(
            "click",
            () => {

                navMenu.classList.add(
                    "active"
                );
            }
        );
    }


    if (
        closeMenu &&
        navMenu
    ) {

        closeMenu.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "active"
                );
            }
        );
    }


    document
        .querySelectorAll(
            ".nav-menu a"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    if (navMenu) {

                        navMenu.classList.remove(
                            "active"
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

    const buttons =
        document.querySelectorAll(
            "[data-category]"
        );


    const products =
        document.querySelectorAll(
            "[data-product-category]"
        );


    if (
        buttons.length === 0 ||
        products.length === 0
    ) {
        return;
    }


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;


                buttons.forEach(
                    btn =>
                        btn.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                products.forEach(
                    product => {

                        const productCategory =
                            product.dataset
                                .productCategory;


                        if (
                            category === "all" ||
                            category === "*" ||
                            category === productCategory
                        ) {

                            product.style.display =
                                "";

                        } else {

                            product.style.display =
                                "none";
                        }
                    }
                );
            }
        );
    });
}


/* =========================================================
   NEWSLETTER
   ========================================================= */

function setupNewsletter() {

    const forms =
        document.querySelectorAll(
            ".newsletter-form, #newsletterForm"
        );


    forms.forEach(form => {

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


                if (
                    !emailInput.checkValidity()
                ) {

                    alert(
                        "Please enter a valid email address."
                    );

                    return;
                }


                /*
                   Newsletter requests go to your backend.

                   NEVER put your Resend API key in this file.
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

                                body:
                                    JSON.stringify({
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


                    alert(
                        "Newsletter service is currently unavailable."
                    );
                }
            }
        );
    });
}


/* =========================================================
   STORAGE LISTENER
   ========================================================= */

window.addEventListener(
    "storage",
    event => {

        if (
            CART_KEYS.includes(
                event.key
            )
        ) {

            updateCartCount();

            if (
                document.getElementById(
                    "country"
                )
            ) {

                updateCheckout();
            }
        }
    }
);


/* =========================================================
   CART UPDATED EVENT
   ========================================================= */

window.addEventListener(
    "cartUpdated",
    () => {

        updateCartCount();

        if (
            document.getElementById(
                "country"
            )
        ) {

            updateCheckout();
        }
    }
);


/* =========================================================
   START EVERYTHING
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupMobileMenu();

        setupCategoryFilter();

        setupNewsletter();

        setupCheckout();

        updateCartCount();
    }
);
