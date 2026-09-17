// ======================================================
// SACCHI FLYIER
// MAIN + CHECKOUT JAVASCRIPT
// ======================================================


// ======================================================
// MOBILE MENU
// ======================================================

const menuButton = document.querySelector(".menu-button");
const navbar = document.querySelector(".navbar");

if (menuButton && navbar) {

    menuButton.addEventListener("click", function () {

        navbar.classList.toggle("active");

    });

}


// ======================================================
// CART COUNT
// ======================================================

let cartCount =
    Number(localStorage.getItem("cartCount")) || 0;


const cartButtons =
    document.querySelectorAll(".cart-button");


cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        localStorage.setItem(
            "cartCount",
            cartCount
        );

        button.textContent = "ADDED ✓";

        setTimeout(function () {

            button.textContent = "ADD TO CART";

        }, 1500);

    });

});


// ======================================================
// NEWSLETTER
// ======================================================

const newsletterForm =
    document.querySelector(".newsletter-form");


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const emailInput =
                newsletterForm.querySelector("input");

            if (
                emailInput &&
                emailInput.value.trim() !== ""
            ) {

                alert(
                    "Thanks for joining Sacchi Flyier!"
                );

                emailInput.value = "";

            }

        }
    );

}


// ======================================================
// CLOSE MOBILE MENU
// ======================================================

const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbar) {

            navbar.classList.remove("active");

        }

    });

});


// ======================================================
// CATEGORY FILTER
// ======================================================

function filterCategory(category) {

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function (product) {

        const productCategory =
            product.querySelector(".product-category");


        if (productCategory) {

            const categoryText =
                productCategory.textContent
                    .trim()
                    .toUpperCase();


            if (
                categoryText ===
                category.toUpperCase()
            ) {

                product.style.display = "";

            } else {

                product.style.display = "none";

            }

        }

    });


    const shop =
        document.querySelector("#shop");


    if (shop) {

        setTimeout(function () {

            shop.scrollIntoView({
                behavior: "smooth"
            });

        }, 100);

    }

}


// ======================================================
// CHECKOUT
// ======================================================

const countrySelect =
    document.getElementById("country");

const shippingElement =
    document.getElementById("checkoutShipping");

const subtotalElement =
    document.getElementById("checkoutSubtotal");

const totalElement =
    document.getElementById("checkoutTotal");

const currencyElement =
    document.getElementById("checkoutCurrency");

const countryMessage =
    document.getElementById("countryMessage");

const checkoutItems =
    document.getElementById("checkoutItems");

const placeOrderButton =
    document.getElementById("placeOrderButton");


// ======================================================
// SETTINGS
// ======================================================

// Your customer shipping charge.
// This is the amount BEFORE currency conversion.

const BASE_SHIPPING_USD = 19.99;


// These are the countries you decided not to ship to.

const BLOCKED_COUNTRIES = [

    "Iraq",
    "Guinea-Bissau",
    "Holy See"

];


// ======================================================
// COUNTRY → CURRENCY
// ======================================================

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
    "Bosnia and Herzegovina": "BAM",
    "Botswana": "BWP",
    "Brazil": "BRL",
    "Brunei": "BND",
    "Bulgaria": "BGN",
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
    "Colombia": "COP",
    "Comoros": "KMF",
    "Congo": "XAF",
    "Costa Rica": "CRC",
    "Côte d’Ivoire": "XOF",
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
    "Fiji": "FJD",
    "Finland": "EUR",
    "France": "EUR",
    "French Polynesia": "XPF",
    "Gabon": "XAF",
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
    "Honduras": "HNL",
    "Hong Kong": "HKD",
    "Hungary": "HUF",
    "Iceland": "ISK",
    "India": "INR",
    "Indonesia": "IDR",
    "Iran": "IRR",
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
    "United Kingdom": "GBP",
    "United States": "USD",
    "Uruguay": "UYU",
    "Uzbekistan": "UZS",
    "Venezuela": "VES",
    "Holy See": "EUR",
    "Vietnam": "VND"

};


// ======================================================
// CURRENCY SYMBOLS
// ======================================================

const CURRENCY_SYMBOLS = {

    USD: "$",
    EUR: "€",
    GBP: "£",
    INR: "₹",
    AUD: "A$",
    CAD: "C$",
    CNY: "¥",
    JPY: "¥",
    KRW: "₩",
    AED: "د.إ",
    SAR: "﷼",
    CHF: "CHF ",
    SGD: "S$",
    NZD: "NZ$",
    HKD: "HK$",
    TWD: "NT$",
    THB: "฿",
    MYR: "RM",
    PHP: "₱",
    IDR: "Rp",
    BDT: "৳",
    PKR: "₨",
    ZAR: "R",
    BRL: "R$",
    MXN: "MX$",
    TRY: "₺",
    PLN: "zł",
    SEK: "kr",
    NOK: "kr",
    DKK: "kr",
    CZK: "Kč",
    HUF: "Ft",
    RON: "lei",
    RUB: "₽",
    UAH: "₴",
    VND: "₫",
    KZT: "₸",
    EGP: "E£",
    NGN: "₦",
    GHS: "GH₵",
    KES: "KSh",
    NPR: "₨",
    LKR: "Rs",
    CLP: "$",
    COP: "$",
    ARS: "$",
    PEN: "S/",
    BOB: "Bs.",
    UYU: "$U",
    ISK: "kr",
    ISL: "kr",
    GEL: "₾",
    AMD: "֏",
    AZN: "₼",
    ALL: "L",
    RSD: "дин.",
    BGN: "лв",
    BAM: "KM",
    MKD: "ден",
    MAD: "د.م.",
    DZD: "دج",
    TND: "د.ت",
    QAR: "ر.ق",
    KWD: "د.ك",
    BHD: ".د.ب",
    OMR: "ر.ع.",
    JOD: "د.ا",
    ILS: "₪",
    KHR: "៛",
    MMK: "K",
    LAK: "₭",
    MVR: "Rf",
    MUR: "₨",
    FJD: "FJ$",
    BWP: "P",
    NAD: "N$",
    SZL: "E",
    GMD: "D",
    GNF: "FG",
    XOF: "CFA",
    XAF: "FCFA",
    XCD: "EC$",
    XPF: "₣"

};


// ======================================================
// CART DATA
// ======================================================

function getCart() {

    const possibleKeys = [
        "cart",
        "shoppingCart",
        "cartItems"
    ];


    for (const key of possibleKeys) {

        const saved =
            localStorage.getItem(key);


        if (!saved) {
            continue;
        }


        try {

            const parsed =
                JSON.parse(saved);


            if (Array.isArray(parsed)) {

                return parsed;

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


// ======================================================
// GET PRODUCT PRICE IN USD
// ======================================================

function getItemPriceUSD(item) {

    if (!item) {
        return 0;
    }


    // Prefer an explicitly stored USD price.

    if (
        item.priceUSD !== undefined &&
        !isNaN(Number(item.priceUSD))
    ) {

        return Number(item.priceUSD);

    }


    if (
        item.usdPrice !== undefined &&
        !isNaN(Number(item.usdPrice))
    ) {

        return Number(item.usdPrice);

    }


    // Otherwise use "price".

    if (
        item.price !== undefined &&
        !isNaN(
            Number(
                String(item.price)
                    .replace(/[^0-9.-]/g, "")
            )
        )
    ) {

        return Number(
            String(item.price)
                .replace(/[^0-9.-]/g, "")
        );

    }


    return 0;

}


// ======================================================
// GET QUANTITY
// ======================================================

function getItemQuantity(item) {

    const quantity =
        Number(
            item.quantity ??
            item.qty ??
            1
        );


    return quantity > 0
        ? quantity
        : 1;

}


// ======================================================
// CALCULATE CART SUBTOTAL IN USD
// ======================================================

function getSubtotalUSD() {

    const cart =
        getCart();


    if (!cart.length) {
        return 0;
    }


    let subtotal = 0;


    cart.forEach(function (item) {

        const price =
            getItemPriceUSD(item);


        const quantity =
            getItemQuantity(item);


        subtotal +=
            price * quantity;

    });


    return subtotal;

}


// ======================================================
// DISPLAY CART
// ======================================================

function renderCartItems() {

    if (!checkoutItems) {
        return;
    }


    const cart =
        getCart();


    if (!cart.length) {

        checkoutItems.innerHTML = `
            <div class="checkout-empty">
                Your cart is empty.
            </div>
        `;

        return;

    }


    checkoutItems.innerHTML = "";


    cart.forEach(function (item) {

        const name =
            item.name ||
            item.title ||
            "Product";


        const quantity =
            getItemQuantity(item);


        const price =
            getItemPriceUSD(item);


        const row =
            document.createElement("div");


        row.className =
            "checkout-item";


        row.innerHTML = `
            <div>
                <strong>${escapeHTML(name)}</strong>
                <small> × ${quantity}</small>
            </div>

            <strong>
                $${(price * quantity).toFixed(2)}
            </strong>
        `;


        checkoutItems.appendChild(row);

    });

}


// ======================================================
// ESCAPE HTML
// ======================================================

function escapeHTML(value) {

    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}


// ======================================================
// GET CURRENCY
// ======================================================

function getCurrencyForCountry(country) {

    return COUNTRY_CURRENCY[country] || "USD";

}


// ======================================================
// GET CURRENCY SYMBOL
// ======================================================

function getCurrencySymbol(currency) {

    return (
        CURRENCY_SYMBOLS[currency] ||
        currency + " "
    );

}


// ======================================================
// FORMAT MONEY
// ======================================================

function formatMoney(amount, currency) {

    const symbol =
        getCurrencySymbol(currency);


    let decimals = 2;


    // Currencies normally displayed without
    // decimal places.

    if (
        currency === "JPY" ||
        currency === "KRW" ||
        currency === "VND" ||
        currency === "CLP" ||
        currency === "ISK"
    ) {

        decimals = 0;

    }


    return (
        symbol +
        Number(amount).toLocaleString(
            undefined,
            {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            }
        )
    );

}


// ======================================================
// EXCHANGE RATE CACHE
// ======================================================

function getCachedRate(currency) {

    if (currency === "USD") {
        return 1;
    }


    const key =
        "sf_rate_USD_" + currency;


    const saved =
        localStorage.getItem(key);


    if (!saved) {
        return null;
    }


    try {

        const data =
            JSON.parse(saved);


        // Cache for 12 hours.

        if (
            Date.now() - data.time <
            12 * 60 * 60 * 1000
        ) {

            return Number(data.rate);

        }

    } catch (error) {

        console.warn(
            "Invalid cached currency rate."
        );

    }


    return null;

}


// ======================================================
// SAVE EXCHANGE RATE
// ======================================================

function saveRate(currency, rate) {

    if (currency === "USD") {
        return;
    }


    localStorage.setItem(

        "sf_rate_USD_" + currency,

        JSON.stringify({

            rate: rate,

            time: Date.now()

        })

    );

}


// ======================================================
// GET LIVE EXCHANGE RATE
// ======================================================

async function getExchangeRate(currency) {

    if (currency === "USD") {
        return 1;
    }


    const cached =
        getCachedRate(currency);


    if (cached !== null) {

        return cached;

    }


    const url =
        "https://api.frankfurter.dev/v1/latest" +
        "?base=USD&symbols=" +
        encodeURIComponent(currency);


    const response =
        await fetch(url);


    if (!response.ok) {

        throw new Error(
            "Currency service unavailable."
        );

    }


    const data =
        await response.json();


    const rate =
        Number(
            data.rates &&
            data.rates[currency]
        );


    if (
        !rate ||
        isNaN(rate)
    ) {

        throw new Error(
            "Exchange rate not available."
        );

    }


    saveRate(
        currency,
        rate
    );


    return rate;

}


// ======================================================
// SHOW MESSAGE
// ======================================================

function showCountryMessage(
    message,
    type
) {

    if (!countryMessage) {
        return;
    }


    countryMessage.textContent =
        message;


    countryMessage.className =
        "checkout-status " +
        type;


    countryMessage.style.display =
        "block";

}


// ======================================================
// HIDE MESSAGE
// ======================================================

function hideCountryMessage() {

    if (!countryMessage) {
        return;
    }


    countryMessage.textContent = "";

    countryMessage.style.display =
        "none";

}


// ======================================================
// SET CHECKOUT CURRENCY
// ======================================================

function setCurrencyText(currency) {

    if (!currencyElement) {
        return;
    }


    currencyElement.textContent =
        currency;

}


// ======================================================
// RESET CHECKOUT
// ======================================================

function resetCheckout() {

    if (subtotalElement) {

        subtotalElement.textContent =
            "Select country";

    }


    if (shippingElement) {

        shippingElement.textContent =
            "Select country";

    }


    if (totalElement) {

        totalElement.textContent =
            "Select country";

        totalElement.classList.remove(
            "unavailable-total"
        );

    }


    if (currencyElement) {

        currencyElement.textContent =
            "Select country";

    }


    hideCountryMessage();

}


// ======================================================
// UPDATE CHECKOUT
// ======================================================

async function updateCheckout() {

    if (!countrySelect) {
        return;
    }


    const country =
        countrySelect.value;


    // Nothing selected.

    if (!country) {

        resetCheckout();

        return;

    }


    // ==================================================
    // BLOCKED COUNTRY
    // ==================================================

    if (
        BLOCKED_COUNTRIES.includes(country)
    ) {

        const currency =
            getCurrencyForCountry(country);


        setCurrencyText(currency);


        if (shippingElement) {

            shippingElement.textContent =
                "Unavailable";

        }


        if (subtotalElement) {

            subtotalElement.textContent =
                "Unavailable";

        }


        if (totalElement) {

            totalElement.textContent =
                "Unavailable";

            totalElement.classList.add(
                "unavailable-total"
            );

        }


        showCountryMessage(

            "Sorry, Sacchi Flyier currently does not ship to " +
            country +
            ".",

            "error"

        );


        return;

    }


    // ==================================================
    // ALLOWED COUNTRY
    // ==================================================

    const currency =
        getCurrencyForCountry(country);


    setCurrencyText(currency);


    if (totalElement) {

        totalElement.classList.remove(
            "unavailable-total"
        );

    }


    showCountryMessage(

        "Updating currency for " +
        country +
        "…",

        "loading"

    );


    try {

        const rate =
            await getExchangeRate(
                currency
            );


        const subtotalUSD =
            getSubtotalUSD();


        const shippingUSD =
            BASE_SHIPPING_USD;


        const subtotalConverted =
            subtotalUSD * rate;


        const shippingConverted =
            shippingUSD * rate;


        const totalConverted =
            (subtotalUSD + shippingUSD) *
            rate;


        // ==================================================
        // DISPLAY SUBTOTAL
        // ==================================================

        if (subtotalElement) {

            subtotalElement.textContent =
                formatMoney(
                    subtotalConverted,
                    currency
                );

        }


        // ==================================================
        // DISPLAY SHIPPING
        // ==================================================

        if (shippingElement) {

            shippingElement.textContent =
                formatMoney(
                    shippingConverted,
                    currency
                );

        }


        // ==================================================
        // DISPLAY TOTAL
        // ==================================================

        if (totalElement) {

            totalElement.textContent =
                formatMoney(
                    totalConverted,
                    currency
                );

        }


        // ==================================================
        // SUCCESS MESSAGE
        // ==================================================

        showCountryMessage(

            "Shipping available to " +
            country +
            ". Prices are shown in " +
            currency +
            ".",

            "success"

        );


        // Save checkout information.

        localStorage.setItem(

            "checkoutCountry",

            country

        );


        localStorage.setItem(

            "checkoutCurrency",

            currency

        );


        localStorage.setItem(

            "checkoutExchangeRate",

            String(rate)

        );


    } catch (error) {

        console.error(
            "Currency conversion error:",
            error
        );


        // Keep the checkout usable in USD
        // if the currency service cannot be reached.

        const subtotalUSD =
            getSubtotalUSD();


        const totalUSD =
            subtotalUSD +
            BASE_SHIPPING_USD;


        if (subtotalElement) {

            subtotalElement.textContent =
                formatMoney(
                    subtotalUSD,
                    "USD"
                );

        }


        if (shippingElement) {

            shippingElement.textContent =
                formatMoney(
                    BASE_SHIPPING_USD,
                    "USD"
                );

        }


        if (totalElement) {

            totalElement.textContent =
                formatMoney(
                    totalUSD,
                    "USD"
                );

        }


        setCurrencyText("USD");


        showCountryMessage(

            "Currency conversion is temporarily unavailable. Prices are shown in USD.",

            "error"

        );

    }

}


// ======================================================
// COUNTRY CHANGE
// ======================================================

if (countrySelect) {

    countrySelect.addEventListener(
        "change",
        updateCheckout
    );

}


// ======================================================
// LOAD SAVED COUNTRY
// ======================================================

if (countrySelect) {

    const savedCountry =
        localStorage.getItem(
            "checkoutCountry"
        );


    if (
        savedCountry &&
        countrySelect.querySelector(
            `option[value="${CSS.escape(savedCountry)}"]`
        )
    ) {

        countrySelect.value =
            savedCountry;

    }

}


// ======================================================
// PLACE ORDER
// ======================================================

if (placeOrderButton) {

    placeOrderButton.addEventListener(
        "click",
        function () {

            const country =
                countrySelect
                    ? countrySelect.value
                    : "";


            // Country required.

            if (!country) {

                alert(
                    "Please select your country."
                );

                return;

            }


            // Blocked country.

            if (
                BLOCKED_COUNTRIES.includes(
                    country
                )
            ) {

                alert(

                    "Sorry, Sacchi Flyier currently does not ship to " +
                    country +
                    "."

                );

                return;

            }


            // Check required fields.

            const requiredFields =
                document.querySelectorAll(
                    ".checkout-form [required]"
                );


            let valid = true;


            requiredFields.forEach(
                function (field) {

                    if (
                        !field.value.trim()
                    ) {

                        valid = false;

                    }

                }
            );


            if (!valid) {

                alert(
                    "Please complete all required fields."
                );

                return;

            }


            // ==================================================
            // SAVE ORDER INFORMATION
            // ==================================================

            const orderData = {

                name:
                    document.getElementById(
                        "checkoutName"
                    )?.value || "",

                email:
                    document.getElementById(
                        "checkoutEmail"
                    )?.value || "",

                phoneCode:
                    document.getElementById(
                        "checkoutCountryCode"
                    )?.value || "",

                phone:
                    document.getElementById(
                        "checkoutPhone"
                    )?.value || "",

                address:
                    document.getElementById(
                        "address"
                    )?.value || "",

                city:
                    document.getElementById(
                        "city"
                    )?.value || "",

                state:
                    document.getElementById(
                        "state"
                    )?.value || "",

                country:
                    country,

                postalCode:
                    document.getElementById(
                        "postalCode"
                    )?.value || "",

                payment:
                    document.querySelector(
                        'input[name="payment"]:checked'
                    )?.value || "",

                currency:
                    localStorage.getItem(
                        "checkoutCurrency"
                    ) || getCurrencyForCountry(country),

                exchangeRate:
                    localStorage.getItem(
                        "checkoutExchangeRate"
                    ) || "1",

                subtotal:
                    subtotalElement
                        ? subtotalElement.textContent
                        : "",

                shipping:
                    shippingElement
                        ? shippingElement.textContent
                        : "",

                total:
                    totalElement
                        ? totalElement.textContent
                        : "",

                createdAt:
                    new Date().toISOString()

            };


            localStorage.setItem(

                "pendingOrder",

                JSON.stringify(orderData)

            );


            alert(

                "Your order details have been saved. The next payment/order step can now be connected."

            );

        }
    );

}


// ======================================================
// INITIALIZE CHECKOUT
// ======================================================

if (countrySelect) {

    renderCartItems();

    updateCheckout();

}
