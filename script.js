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
// CHECKOUT ELEMENTS
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
// CHECKOUT SETTINGS
// ======================================================

// Customer shipping charge.
// This is always stored internally in USD.

const BASE_SHIPPING_USD = 19.99;


// Your product/cart selling prices are currently INR.

const STORE_CURRENCY = "INR";


// Countries you do NOT ship to.

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
    "Bolivia (Plurinational State of)": "BOB",
    "Bosnia and Herzegovina": "BAM",
    "Botswana": "BWP",
    "Brazil": "BRL",
    "Brunei Darussalam": "BND",
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
    "Congo (the Democratic Republic of the)": "CDF",
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
    "Hong Kong (China)": "HKD",
    "Hungary": "HUF",
    "Iceland": "ISK",
    "India": "INR",
    "Indonesia": "IDR",
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
    AED: "د.إ ",
    SAR: "﷼ ",
    CHF: "CHF ",
    SGD: "S$",
    NZD: "NZ$",
    HKD: "HK$",
    TWD: "NT$",
    THB: "฿",
    MYR: "RM",
    PHP: "₱",
    IDR: "Rp ",
    BDT: "৳",
    PKR: "₨",
    ZAR: "R",
    BRL: "R$",
    MXN: "MX$",
    TRY: "₺",
    PLN: "zł ",
    SEK: "kr ",
    NOK: "kr ",
    DKK: "kr ",
    CZK: "Kč ",
    HUF: "Ft ",
    RON: "lei ",
    RUB: "₽",
    UAH: "₴",
    VND: "₫",
    KZT: "₸",
    EGP: "E£ ",
    NGN: "₦",
    GHS: "GH₵ ",
    KES: "KSh ",
    NPR: "₨",
    LKR: "Rs ",
    CLP: "$",
    COP: "$",
    ARS: "$",
    PEN: "S/ ",
    BOB: "Bs. ",
    UYU: "$U ",
    GEL: "₾",
    AMD: "֏",
    AZN: "₼",
    ALL: "L ",
    RSD: "дин. ",
    BGN: "лв ",
    BAM: "KM ",
    MKD: "ден ",
    MAD: "د.م. ",
    DZD: "دج ",
    TND: "د.ت ",
    QAR: "ر.ق ",
    KWD: "د.ك ",
    BHD: ".د.ب ",
    OMR: "ر.ع. ",
    JOD: "د.ا ",
    ILS: "₪",
    KHR: "៛",
    MMK: "K ",
    LAK: "₭",
    MVR: "Rf ",
    MUR: "₨",
    FJD: "FJ$",
    BWP: "P ",
    NAD: "N$",
    GMD: "D ",
    GNF: "FG ",
    XOF: "CFA ",
    XAF: "FCFA ",
    XCD: "EC$ ",
    XPF: "₣ "

};


// ======================================================
// GET CART
// ======================================================

function getCart() {

    // IMPORTANT:
    // This is the actual Sacchi Flyier cart key.

    const possibleKeys = [
        "sacchiFlyierCart",
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
// GET ITEM PRICE
// ======================================================

function getItemPriceINR(item) {

    if (!item) {
        return 0;
    }

    if (
        item.priceINR !== undefined &&
        !isNaN(Number(item.priceINR))
    ) {
        return Number(item.priceINR);
    }

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
// GET SUBTOTAL INR
// ======================================================

function getSubtotalINR() {

    const cart =
        getCart();

    if (!cart.length) {
        return 0;
    }

    let subtotal = 0;

    cart.forEach(function (item) {

        subtotal +=
            getItemPriceINR(item) *
            getItemQuantity(item);

    });

    return subtotal;

}


// ======================================================
// DISPLAY CART ITEMS
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
            getItemPriceINR(item);

        const row =
            document.createElement("div");

        row.className =
            "checkout-item";

        row.innerHTML = `
            <div>
                <strong>${escapeHTML(name)}</strong>
                <small> × ${quantity}</small>
            </div>

            <strong class="checkout-item-price">
                ${formatMoney(
                    price * quantity,
                    "INR"
                )}
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
// COUNTRY CURRENCY
// ======================================================

function getCurrencyForCountry(country) {

    return COUNTRY_CURRENCY[country] || "USD";

}


// ======================================================
// FORMAT MONEY
// ======================================================

function formatMoney(amount, currency) {

    try {

        return new Intl.NumberFormat(
            undefined,
            {
                style: "currency",
                currency: currency
            }
        ).format(Number(amount));

    } catch (error) {

        return (
            getCurrencySymbol(currency) +
            Number(amount).toFixed(2)
        );

    }

}


// ======================================================
// SYMBOL
// ======================================================

function getCurrencySymbol(currency) {

    return (
        CURRENCY_SYMBOLS[currency] ||
        currency + " "
    );

}


// ======================================================
// RATE CACHE
// ======================================================

function getCachedRate(base, quote) {

    if (base === quote) {
        return 1;
    }

    const key =
        "sf_rate_" +
        base +
        "_" +
        quote;

    const saved =
        localStorage.getItem(key);

    if (!saved) {
        return null;
    }

    try {

        const data =
            JSON.parse(saved);

        // 12-hour cache

        if (
            Date.now() - data.time <
            12 * 60 * 60 * 1000
        ) {

            return Number(data.rate);

        }

    } catch (error) {

        return null;

    }

    return null;

}


// ======================================================
// SAVE RATE
// ======================================================

function saveRate(base, quote, rate) {

    if (base === quote) {
        return;
    }

    const key =
        "sf_rate_" +
        base +
        "_" +
        quote;

    localStorage.setItem(

        key,

        JSON.stringify({

            rate: rate,
            time: Date.now()

        })

    );

}


// ======================================================
// GET EXCHANGE RATE
// ======================================================

async function getExchangeRate(base, quote) {

    if (base === quote) {
        return 1;
    }

    const cached =
        getCachedRate(
            base,
            quote
        );

    if (cached !== null) {
        return cached;
    }

    // Frankfurter v2 API

    const url =
        "https://api.frankfurter.dev/v2/rate/" +
        encodeURIComponent(base) +
        "/" +
        encodeURIComponent(quote);

    const response =
        await fetch(url);

    if (!response.ok) {

        throw new Error(
            "Exchange rate service unavailable."
        );

    }

    const data =
        await response.json();

    const rate =
        Number(data.rate);

    if (
        !rate ||
        isNaN(rate)
    ) {

        throw new Error(
            "Exchange rate unavailable."
        );

    }

    saveRate(
        base,
        quote,
        rate
    );

    return rate;

}


// ======================================================
// MESSAGE
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


function hideCountryMessage() {

    if (!countryMessage) {
        return;
    }

    countryMessage.textContent = "";

    countryMessage.style.display =
        "none";

}


// ======================================================
// CURRENCY LABEL
// ======================================================

function setCurrencyText(currency) {

    if (!currencyElement) {
        return;
    }

    currencyElement.textContent =
        currency;

}


// ======================================================
// RESET
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

        if (placeOrderButton) {
            placeOrderButton.disabled = true;
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

    if (placeOrderButton) {
        placeOrderButton.disabled = false;
    }

    if (totalElement) {

        totalElement.classList.remove(
            "unavailable-total"
        );

    }

    showCountryMessage(

        "Converting prices to " +
        currency +
        "…",

        "loading"

    );


    try {

        // Product prices are INR.
        const productRate =
            await getExchangeRate(
                "INR",
                currency
            );

        // Shipping is USD.
        const shippingRate =
            await getExchangeRate(
                "USD",
                currency
            );


        const subtotalINR =
            getSubtotalINR();

        const shippingUSD =
            BASE_SHIPPING_USD;


        const subtotalConverted =
            subtotalINR *
            productRate;

        const shippingConverted =
            shippingUSD *
            shippingRate;

        const totalConverted =
            subtotalConverted +
            shippingConverted;


        // ==================================================
        // SUBTOTAL
        // ==================================================

        if (subtotalElement) {

            subtotalElement.textContent =
                formatMoney(
                    subtotalConverted,
                    currency
                );

        }


        // ==================================================
        // SHIPPING
        // ==================================================

        if (shippingElement) {

            shippingElement.textContent =
                formatMoney(
                    shippingConverted,
                    currency
                );

        }


        // ==================================================
        // TOTAL
        // ==================================================

        if (totalElement) {

            totalElement.textContent =
                formatMoney(
                    totalConverted,
                    currency
                );

        }


        // ==================================================
        // SAVE CHECKOUT DATA
        // ==================================================

        localStorage.setItem(
            "checkoutCountry",
            country
        );

        localStorage.setItem(
            "checkoutCurrency",
            currency
        );

        localStorage.setItem(
            "checkoutProductRate",
            String(productRate)
        );

        localStorage.setItem(
            "checkoutShippingRate",
            String(shippingRate)
        );


        showCountryMessage(

            "Shipping available to " +
            country +
            ". Prices are shown in " +
            currency +
            ".",

            "success"

        );

    } catch (error) {

        console.error(
            "Currency conversion error:",
            error
        );


        // If currency service fails,
        // show the original currencies consistently
        // instead of mixing them.

        const subtotalINR =
            getSubtotalINR();


        if (subtotalElement) {

            subtotalElement.textContent =
                formatMoney(
                    subtotalINR,
                    "INR"
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
                "Conversion unavailable";

        }


        setCurrencyText(
            "Conversion unavailable"
        );


        showCountryMessage(

            "Currency conversion is temporarily unavailable. Please try again.",

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

    if (savedCountry) {

        const option =
            Array.from(
                countrySelect.options
            ).find(function (item) {

                return item.value === savedCountry;

            });

        if (option) {
            countrySelect.value =
                savedCountry;
        }

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


            if (!country) {

                alert(
                    "Please select your country."
                );

                return;

            }


            if (
                BLOCKED_COUNTRIES.includes(country)
            ) {

                alert(
                    "Sorry, Sacchi Flyier currently does not ship to " +
                    country +
                    "."
                );

                return;

            }


            // Required fields

            const requiredFields =
                document.querySelectorAll(
                    ".checkout-form [required]"
                );

            let valid = true;


            requiredFields.forEach(
                function (field) {

                    if (
                        String(field.value || "")
                            .trim() === ""
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
            // ORDER DATA
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
                    ) ||
                    getCurrencyForCountry(country),

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
