/* =========================================================
   SACCHI FLYIER - COMPLETE script.js
   Homepage + Cart + Checkout + Currency + Newsletter
   ========================================================= */


/* =========================================================
   SETTINGS
   ========================================================= */

const CUSTOMER_SHIPPING_USD = 19.99;

const CART_KEY = "sacchiFlyierCart";

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

    "Fiji": "FJD",
    "Finland": "EUR",
    "France": "EUR",
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
   CART STORAGE
   ========================================================= */

function getCart() {

    try {

        const saved = localStorage.getItem(CART_KEY);

        if (!saved) {
            return [];
        }

        const cart = JSON.parse(saved);

        return Array.isArray(cart) ? cart : [];

    } catch (error) {

        console.error("Cart read error:", error);

        return [];
    }
}


function saveCart(cart) {

    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

    updateCartCount();
    renderCart();

    window.dispatchEvent(
        new Event("cartUpdated")
    );
}


/* =========================================================
   PRODUCT PRICE
   ========================================================= */

function getItemPriceINR(item) {

    const values = [
        item?.price,
        item?.salePrice,
        item?.productPrice,
        item?.amount
    ];

    for (const value of values) {

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
   QUANTITY
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

    return Math.floor(quantity);
}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(productName, price = 0, image = "") {

    const cart = getCart();

    const name = String(
        productName || "Product"
    ).trim();

    const numericPrice = Number(price) || 0;

    const existing = cart.find(
        item =>
            String(
                item.name ||
                item.title ||
                item.productName ||
                ""
            ).toLowerCase() ===
            name.toLowerCase()
    );


    if (existing) {

        existing.quantity =
            getItemQuantity(existing) + 1;

    } else {

        cart.push({

            id:
                "SF-" +
                Date.now() +
                "-" +
                Math.random()
                    .toString(36)
                    .slice(2, 8),

            name: name,

            price: numericPrice,

            quantity: 1,

            image: image || ""
        });
    }


    saveCart(cart);

    alert(
        `${name} has been added to your cart.`
    );
}


/* =========================================================
   CART COUNT
   ========================================================= */

function updateCartCount() {

    const cart = getCart();

    const count = cart.reduce(
        (total, item) =>
            total + getItemQuantity(item),
        0
    );


    const elements =
        document.querySelectorAll(
            "#cartCount, .cart-count, #cart-count, [data-cart-count]"
        );


    elements.forEach(
        element => {
            element.textContent = count;
        }
    );
}


/* =========================================================
   CART TOTAL
   ========================================================= */

function getCartSubtotalINR() {

    const cart = getCart();

    return cart.reduce(
        (total, item) => {

            return total +
                (
                    getItemPriceINR(item) *
                    getItemQuantity(item)
                );

        },
        0
    );
}


/* =========================================================
   RENDER CART
   ========================================================= */

function renderCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );

    const cartTotal =
        document.getElementById(
            "cartTotal"
        );


    if (!cartItems) {
        return;
    }


    const cart = getCart();


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        if (cartTotal) {
            cartTotal.textContent = "0";
        }

        return;
    }


    cartItems.innerHTML =
        cart.map(
            (item, index) => {

                const name =
                    item.name ||
                    item.title ||
                    item.productName ||
                    "Product";

                const price =
                    getItemPriceINR(item);

                const quantity =
                    getItemQuantity(item);

                const image =
                    item.image || "";


                return `
                    <div class="cart-item">

                        ${
                            image
                                ? `
                                    <img
                                        src="${escapeHTML(image)}"
                                        alt="${escapeHTML(name)}"
                                        class="cart-item-image"
                                    >
                                  `
                                : ""
                        }

                        <div class="cart-item-info">

                            <strong>
                                ${escapeHTML(name)}
                            </strong>

                            <span>
                                ₹${price.toFixed(2)}
                            </span>

                            <div class="cart-quantity">

                                <button
                                    type="button"
                                    onclick="changeQuantity(${index}, -1)"
                                >
                                    −
                                </button>

                                <span>
                                    ${quantity}
                                </span>

                                <button
                                    type="button"
                                    onclick="changeQuantity(${index}, 1)"
                                >
                                    +
                                </button>

                            </div>

                        </div>

                        <button
                            type="button"
                            class="remove-cart-item"
                            onclick="removeFromCart(${index})"
                        >
                            ✕
                        </button>

                    </div>
                `;

            }
        ).join("");


    if (cartTotal) {

        cartTotal.textContent =
            `₹${getCartSubtotalINR().toFixed(2)}`;
    }
}


/* =========================================================
   CHANGE QUANTITY
   ========================================================= */

function changeQuantity(index, change) {

    const cart = getCart();

    if (!cart[index]) {
        return;
    }


    let quantity =
        getItemQuantity(cart[index]) +
        Number(change);


    if (quantity <= 0) {

        cart.splice(index, 1);

    } else {

        cart[index].quantity =
            quantity;
    }


    saveCart(cart);
}


/* =========================================================
   REMOVE FROM CART
   ========================================================= */

function removeFromCart(index) {

    const cart = getCart();

    if (!cart[index]) {
        return;
    }


    cart.splice(index, 1);

    saveCart(cart);
}


/* =========================================================
   CART PANEL
   ========================================================= */

function openCart() {

    const panel =
        document.getElementById(
            "cartPanel"
        );

    if (!panel) {
        return;
    }


    panel.classList.add("active");

    renderCart();
}


function closeCart() {

    const panel =
        document.getElementById(
            "cartPanel"
        );

    if (!panel) {
        return;
    }


    panel.classList.remove("active");
}


function setupCart() {

    const cartButton =
        document.getElementById(
            "cartButton"
        );

    const closeButton =
        document.getElementById(
            "closeCart"
        );

    const checkoutButton =
        document.getElementById(
            "checkoutButton"
        );


    if (cartButton) {

        cartButton.addEventListener(
            "click",
            openCart
        );
    }


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeCart
        );
    }


    if (checkoutButton) {

        checkoutButton.addEventListener(
            "click",
            () => {

                const cart = getCart();

                if (cart.length === 0) {

                    alert(
                        "Your cart is empty."
                    );

                    return;
                }


                window.location.href =
                    "checkout.html";
            }
        );
    }


    renderCart();
}


/* =========================================================
   ADD-CART BUTTONS
   ========================================================= */

function setupAddToCartButtons() {

    const buttons =
        document.querySelectorAll(
            ".add-cart"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const productName =
                    button.dataset.product ||
                    button.dataset.name ||
                    "Product";

                const price =
                    Number(
                        button.dataset.price ||
                        button.dataset.productPrice ||
                        0
                    );

                const image =
                    button.dataset.image ||
                    "";


                addToCart(
                    productName,
                    price,
                    image
                );
            }
        );
    });
}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

    const searchButton =
        document.getElementById(
            "searchButton"
        );

    const searchOverlay =
        document.getElementById(
            "searchOverlay"
        );

    const closeSearch =
        document.getElementById(
            "closeSearch"
        );

    const searchInput =
        document.getElementById(
            "searchInput"
        );


    if (
        searchButton &&
        searchOverlay
    ) {

        searchButton.addEventListener(
            "click",
            () => {

                searchOverlay.classList.add(
                    "active"
                );

                if (searchInput) {
                    searchInput.focus();
                }
            }
        );
    }


    if (
        closeSearch &&
        searchOverlay
    ) {

        closeSearch.addEventListener(
            "click",
            () => {

                searchOverlay.classList.remove(
                    "active"
                );
            }
        );
    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                const query =
                    searchInput.value
                        .trim()
                        .toLowerCase();


                const products =
                    document.querySelectorAll(
                        ".product-card"
                    );


                products.forEach(product => {

                    const text =
                        product.textContent
                            .toLowerCase();


                    product.style.display =
                        !query ||
                        text.includes(query)
                            ? ""
                            : "none";
                });
            }
        );
    }
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );

    const navLinks =
        document.getElementById(
            "navLinks"
        );


    if (
        menuToggle &&
        navLinks
    ) {

        menuToggle.addEventListener(
            "click",
            () => {

                navLinks.classList.toggle(
                    "active"
                );
            }
        );


        navLinks
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navLinks.classList.remove(
                            "active"
                        );
                    }
                );
            });
    }
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
        !buttons.length ||
        !products.length
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
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                products.forEach(product => {

                    const productCategory =
                        product.dataset
                            .productCategory;


                    product.style.display =
                        category === "all" ||
                        category === "*" ||
                        category === productCategory
                            ? ""
                            : "none";
                });
            }
        );
    });
}


/* =========================================================
   CURRENCY
   ========================================================= */

const exchangeRateCache = {};


function getCurrencyForCountry(country) {

    return COUNTRY_CURRENCY[country] || null;
}


function isCountryBlocked(country) {

    return BLOCKED_COUNTRIES.includes(
        country
    );
}


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

    } catch {

        return `${currency} ${amount.toFixed(2)}`;
    }
}


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


    const key =
        `${fromCurrency}_${toCurrency}`;


    if (
        exchangeRateCache[key]
    ) {
        return exchangeRateCache[key];
    }


    const url =
        `https://api.frankfurter.dev/v2/rate/${encodeURIComponent(fromCurrency)}/${encodeURIComponent(toCurrency)}`;


    const response =
        await fetch(url);


    if (!response.ok) {

        throw new Error(
            "Exchange rate unavailable"
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
            "Invalid exchange rate"
        );
    }


    exchangeRateCache[key] =
        rate;


    return rate;
}


async function convertMoney(
    amount,
    fromCurrency,
    toCurrency
) {

    if (amount === 0) {
        return 0;
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
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   RENDER CHECKOUT ITEMS
   ========================================================= */

async function renderCheckoutItems(currency) {

    const elements =
        getCheckoutElements();


    if (!elements.checkoutItems) {
        return;
    }


    const cart =
        getCart();


    if (cart.length === 0) {

        elements.checkoutItems.innerHTML =
            "<p>Your cart is empty.</p>";

        return;
    }


    let rate = 1;


    try {

        rate =
            await getExchangeRate(
                "INR",
                currency
            );

    } catch {

        elements.checkoutItems.innerHTML =
            "<p>Currency conversion unavailable.</p>";

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

            const price =
                getItemPriceINR(item);

            const total =
                price *
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

                    <strong>
                        ${formatMoney(
                            total,
                            currency
                        )}
                    </strong>

                </div>
            `;

        }).join("");
}


/* =========================================================
   UPDATE CHECKOUT
   ========================================================= */

let checkoutRequest = 0;


async function updateCheckout() {

    const elements =
        getCheckoutElements();


    if (!elements.country) {
        return;
    }


    const request =
        ++checkoutRequest;


    const country =
        elements.country.value;


    const cart =
        getCart();


    /* NO COUNTRY */

    if (!country) {

        setCheckoutMessage(
            elements,
            "Please select your shipping country.",
            "loading"
        );

        setCheckoutValues(
            elements,
            "Select country",
            "—",
            "—",
            "—"
        );

        disableOrderButton(
            elements,
            true
        );

        return;
    }


    /* BLOCKED COUNTRY */

    if (isCountryBlocked(country)) {

        setCheckoutMessage(
            elements,
            "Sorry, shipping is not available to this country.",
            "error"
        );

        setCheckoutValues(
            elements,
            "Not available",
            "—",
            "—",
            "—"
        );

        disableOrderButton(
            elements,
            true
        );

        return;
    }


    /* EMPTY CART */

    if (cart.length === 0) {

        const currency =
            getCurrencyForCountry(country);


        setCheckoutMessage(
            elements,
            "Your cart is empty.",
            "error"
        );

        setCheckoutValues(
            elements,
            currency || "Unavailable",
            formatMoney(0, currency || "USD"),
            formatMoney(0, currency || "USD"),
            formatMoney(0, currency || "USD")
        );

        disableOrderButton(
            elements,
            true
        );

        await renderCheckoutItems(
            currency || "USD"
        );

        return;
    }


    /* CURRENCY */

    const currency =
        getCurrencyForCountry(country);


    if (!currency) {

        setCheckoutMessage(
            elements,
            "Currency conversion is unavailable for this country.",
            "error"
        );

        setCheckoutValues(
            elements,
            "Unavailable",
            "—",
            "—",
            "—"
        );

        disableOrderButton(
            elements,
            true
        );

        return;
    }


    /* LOADING */

    setCheckoutMessage(
        elements,
        `Shipping available to ${country}. Calculating total...`,
        "loading"
    );


    setCheckoutValues(
        elements,
        `${currency} • Converting...`,
        "Converting...",
        "Converting...",
        "Converting..."
    );


    disableOrderButton(
        elements,
        true
    );


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
            subtotal +
            shipping;


        if (
            request !==
            checkoutRequest
        ) {
            return;
        }


        setCheckoutValues(
            elements,
            currency,
            formatMoney(
                subtotal,
                currency
            ),
            formatMoney(
                shipping,
                currency
            ),
            formatMoney(
                total,
                currency
            )
        );


        setCheckoutMessage(
            elements,
            `Shipping available to ${country}.`,
            "success"
        );


        await renderCheckoutItems(
            currency
        );


        if (
            request ===
            checkoutRequest
        ) {

            disableOrderButton(
                elements,
                false
            );
        }

    } catch (error) {

        console.error(
            "Checkout error:",
            error
        );


        setCheckoutMessage(
            elements,
            "Currency conversion is temporarily unavailable. Please try again.",
            "error"
        );


        setCheckoutValues(
            elements,
            "Unavailable",
            "—",
            "—",
            "—"
        );


        disableOrderButton(
            elements,
            true
        );
    }
}


/* =========================================================
   CHECKOUT DISPLAY HELPERS
   ========================================================= */

function setCheckoutValues(
    elements,
    currency,
    subtotal,
    shipping,
    total
) {

    if (elements.checkoutCurrency) {
        elements.checkoutCurrency.textContent =
            currency;
    }

    if (elements.checkoutSubtotal) {
        elements.checkoutSubtotal.textContent =
            subtotal;
    }

    if (elements.checkoutShipping) {
        elements.checkoutShipping.textContent =
            shipping;
    }

    if (elements.checkoutTotal) {
        elements.checkoutTotal.textContent =
            total;
    }
}


function setCheckoutMessage(
    elements,
    message,
    type
) {

    if (!elements.countryMessage) {
        return;
    }


    elements.countryMessage.textContent =
        message;


    elements.countryMessage.className =
        "checkout-status " +
        (
            type === "error"
                ? "error"
                : type === "success"
                    ? "success"
                    : "loading"
        );
}


function disableOrderButton(
    elements,
    disabled
) {

    if (
        elements.placeOrderButton
    ) {

        elements.placeOrderButton.disabled =
            disabled;
    }
}


/* =========================================================
   PLACE ORDER
   ========================================================= */

async function handlePlaceOrder() {

    const elements =
        getCheckoutElements();


    const cart =
        getCart();


    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;
    }


    const country =
        elements.country?.value || "";


    if (!country) {

        alert(
            "Please select your shipping country."
        );

        return;
    }


    if (
        isCountryBlocked(country)
    ) {

        alert(
            "Sorry, shipping is not available to this country."
        );

        return;
    }


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
            !String(
                field.value
            ).trim()
        ) {

            field.focus();

            alert(
                "Please complete all required checkout fields."
            );

            return;
        }
    }


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
            subtotal +
            shipping;


        /* IMPORTANT:
           Your HTML uses name="payment"
        */

        const selectedPayment =
            document.querySelector(
                'input[name="payment"]:checked'
            );


        const paymentMethod =
            selectedPayment
                ? selectedPayment.value
                : "cod";


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


        /* SAVE ORDER */

        localStorage.setItem(
            "pendingOrder",
            JSON.stringify(order)
        );


        localStorage.setItem(
            "sacchiFlyierCheckout",
            JSON.stringify(order)
        );


        /*
           DO NOT EMPTY CART YET.
           Payment/backend integration can be added later.
        */


        alert(
            `Order ${order.orderId} created.\n\nTotal: ${formatMoney(total, currency)}\nPayment: ${
                paymentMethod === "cod"
                    ? "Cash on Delivery"
                    : "Online Payment"
            }`
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


    elements.country.addEventListener(
        "change",
        updateCheckout
    );


    if (
        elements.placeOrderButton
    ) {

        elements.placeOrderButton.addEventListener(
            "click",
            handlePlaceOrder
        );
    }


    updateCheckout();
}


/* =========================================================
   NEWSLETTER
   ========================================================= */

function setupNewsletter() {

    const form =
        document.getElementById(
            "newsletterForm"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const input =
                document.getElementById(
                    "newsletterEmail"
                );


            if (!input) {
                return;
            }


            const email =
                input.value.trim();


            if (
                !input.checkValidity()
            ) {

                alert(
                    "Please enter a valid email address."
                );

                return;
            }


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
                        "Newsletter request failed"
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
}


/* =========================================================
   STORAGE UPDATE
   ========================================================= */

window.addEventListener(
    "storage",
    event => {

        if (
            event.key === CART_KEY
        ) {

            updateCartCount();
            renderCart();


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
        renderCart();


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
   START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupMobileMenu();

        setupCart();

        setupAddToCartButtons();

        setupSearch();

        setupCategoryFilter();

        setupNewsletter();

        setupCheckout();

        updateCartCount();

        renderCart();
    }
);
