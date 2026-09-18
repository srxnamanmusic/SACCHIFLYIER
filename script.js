/* =========================================================
   SACCHI FLYIER
   CART + CHECKOUT + COUNTRY PRICING
   ========================================================= */


/* =========================================================
   1. PRODUCT SETTINGS
   ========================================================= */

const PRODUCT_COST_USD = 1.62;
const PROFIT_USD = 10.00;

const MAIN_PRODUCT_SKU = "CJLX239765601AZ";


/* =========================================================
   2. SHIPPING RATES FROM CJ
   ========================================================= */

const shippingRates = {

    "Afghanistan": 3.72,
    "Albania": 3.22,
    "Algeria": 3.35,
    "Andorra": 6.60,
    "Argentina": 3.67,
    "Australia": 6.48,
    "Austria": 3.41,
    "Azerbaijan": 3.19,
    "Bangladesh": 3.45,
    "Belgium": 6.82,
    "Brazil": 6.05,
    "Bulgaria": 8.74,
    "Cambodia": 3.56,
    "Canada": 5.31,
    "Chile": 4.14,
    "China": 3.05,
    "Colombia": 2.85,
    "Costa Rica": 1.75,
    "Croatia": 8.71,
    "Cyprus": 6.51,
    "Czechia": 8.38,
    "Denmark": 3.37,
    "Egypt": 3.68,
    "Finland": 3.36,
    "France": 5.76,
    "Georgia": 3.97,
    "Germany": 6.17,
    "Greece": 3.32,
    "Hong Kong (China)": 3.92,
    "Hungary": 3.36,
    "Iceland": 3.56,
    "India": 4.01,
    "Indonesia": 3.06,
    "Ireland": 6.80,
    "Israel": 5.16,
    "Italy": 7.10,
    "Japan": 4.96,
    "Kazakhstan": 2.88,
    "Kenya": 3.43,
    "Malaysia": 3.41,
    "Maldives": 2.95,
    "Mexico": 4.18,
    "Morocco": 4.04,
    "Nepal": 3.15,
    "Netherlands": 6.36,
    "New Zealand": 4.94,
    "Nigeria": 3.50,
    "Norway": 5.94,
    "Oman": 4.17,
    "Pakistan": 2.94,
    "Peru": 3.67,
    "Philippines": 3.32,
    "Poland": 5.27,
    "Portugal": 6.11,
    "Qatar": 4.04,
    "Romania": 4.91,
    "Russian Federation": 4.36,
    "Saudi Arabia": 4.32,
    "Serbia": 3.18,
    "Singapore": 3.93,
    "Slovakia": 8.72,
    "Slovenia": 8.90,
    "South Africa": 5.97,
    "South Korea": 3.91,
    "Spain": 4.87,
    "Sri Lanka": 3.12,
    "Sweden": 6.74,
    "Switzerland": 6.40,
    "Taiwan": 7.37,
    "Thailand": 2.71,
    "Tunisia": 3.43,
    "Turkey": 4.64,
    "Ukraine": 3.23,
    "United Arab Emirates": 4.03,
    "United Kingdom": 4.81,
    "United States": 3.68,
    "Vietnam": 3.02
};


/* =========================================================
   3. BLOCKED COUNTRIES
   ========================================================= */

const blockedCountries = [
    "Iraq",
    "Syrian Arab Republic",
    "Yemen",
    "Guinea-Bissau",
    "Micronesia (Federated States of)",
    "Palau",
    "South Sudan"
];


/* =========================================================
   4. COUNTRY CURRENCY
   ========================================================= */

const countryCurrency = {

    "Afghanistan": "AFN",
    "Albania": "ALL",
    "Algeria": "DZD",
    "Andorra": "EUR",
    "Argentina": "ARS",
    "Australia": "AUD",
    "Austria": "EUR",
    "Azerbaijan": "AZN",
    "Bangladesh": "BDT",
    "Belgium": "EUR",
    "Brazil": "BRL",
    "Bulgaria": "BGN",
    "Cambodia": "KHR",
    "Canada": "CAD",
    "Chile": "CLP",
    "China": "CNY",
    "Colombia": "COP",
    "Costa Rica": "CRC",
    "Croatia": "EUR",
    "Cyprus": "EUR",
    "Czechia": "CZK",
    "Denmark": "DKK",
    "Egypt": "EGP",
    "Estonia": "EUR",
    "Finland": "EUR",
    "France": "EUR",
    "Georgia": "GEL",
    "Germany": "EUR",
    "Greece": "EUR",
    "Hong Kong (China)": "HKD",
    "Hungary": "HUF",
    "Iceland": "ISK",
    "India": "INR",
    "Indonesia": "IDR",
    "Ireland": "EUR",
    "Israel": "ILS",
    "Italy": "EUR",
    "Japan": "JPY",
    "Kazakhstan": "KZT",
    "Kenya": "KES",
    "Malaysia": "MYR",
    "Maldives": "MVR",
    "Mexico": "MXN",
    "Morocco": "MAD",
    "Nepal": "NPR",
    "Netherlands": "EUR",
    "New Zealand": "NZD",
    "Nigeria": "NGN",
    "Norway": "NOK",
    "Oman": "OMR",
    "Pakistan": "PKR",
    "Peru": "PEN",
    "Philippines": "PHP",
    "Poland": "PLN",
    "Portugal": "EUR",
    "Qatar": "QAR",
    "Romania": "RON",
    "Russian Federation": "RUB",
    "Saudi Arabia": "SAR",
    "Serbia": "RSD",
    "Singapore": "SGD",
    "Slovakia": "EUR",
    "Slovenia": "EUR",
    "South Africa": "ZAR",
    "South Korea": "KRW",
    "Spain": "EUR",
    "Sri Lanka": "LKR",
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
    "Vietnam": "VND"
};


/* =========================================================
   5. FALLBACK EXCHANGE RATES
   Approximate display rates
   ========================================================= */

const exchangeRates = {

    USD: 1,

    INR: 83.50,
    EUR: 0.92,
    GBP: 0.78,
    AUD: 1.52,
    CAD: 1.36,
    CNY: 7.25,
    JPY: 149,
    KRW: 1380,
    AED: 3.67,
    SAR: 3.75,
    SGD: 1.34,
    NZD: 1.65,
    CHF: 0.88,
    SEK: 10.50,
    NOK: 10.70,
    DKK: 6.85,
    PLN: 3.95,
    CZK: 23.20,
    HUF: 360,
    RON: 4.58,
    TRY: 33.00,
    ZAR: 18.20,

    BDT: 117,
    PKR: 278,
    NPR: 133,
    LKR: 300,
    MYR: 4.70,
    THB: 36.00,
    IDR: 16200,
    PHP: 57.50,
    VND: 24500,

    BRL: 5.20,
    MXN: 18.50,
    ARS: 950,
    CLP: 930,
    COP: 4100,
    PEN: 3.75,
    CRC: 520,

    EGP: 48,
    MAD: 10.00,
    NGN: 1500,
    KES: 130,
    GHS: 15,

    ILS: 3.70,
    GEL: 2.70,
    KZT: 480,
    UAH: 41,
    RUB: 90,
    AZN: 1.70,

    AFN: 70,
    ALL: 93,
    DZD: 135,
    BGN: 1.80,
    HRK: 0.92,
    ISK: 140,
    MVR: 15.40,
    RSD: 108,
    TND: 3.10,
    OMR: 0.385,
    QAR: 3.64,
    KHR: 4100,
    MAD: 10.00,
    HKD: 7.80,
    TWD: 32.00
};


/* =========================================================
   6. CURRENCY SYMBOLS
   ========================================================= */

const currencySymbols = {

    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£",
    AUD: "A$",
    CAD: "C$",
    CNY: "¥",
    JPY: "¥",
    KRW: "₩",
    AED: "د.إ",
    SAR: "﷼",
    SGD: "S$",
    NZD: "NZ$",
    CHF: "CHF",
    SEK: "kr",
    NOK: "kr",
    DKK: "kr",
    PLN: "zł",
    CZK: "Kč",
    HUF: "Ft",
    RON: "lei",
    TRY: "₺",
    ZAR: "R",
    BDT: "৳",
    PKR: "₨",
    NPR: "रू",
    LKR: "Rs",
    MYR: "RM",
    THB: "฿",
    IDR: "Rp",
    PHP: "₱",
    VND: "₫",
    BRL: "R$",
    MXN: "$",
    ARS: "$",
    CLP: "$",
    COP: "$",
    PEN: "S/",
    CRC: "₡",
    EGP: "E£",
    NGN: "₦",
    KES: "KSh",
    ILS: "₪",
    GEL: "₾",
    KZT: "₸",
    UAH: "₴",
    RUB: "₽",
    AZN: "₼",
    AFN: "؋",
    ALL: "Lek",
    DZD: "دج",
    BGN: "лв",
    ISK: "kr",
    MVR: "Rf",
    RSD: "дин",
    TND: "د.ت",
    OMR: "ر.ع.",
    QAR: "﷼",
    KHR: "៛",
    HKD: "HK$",
    TWD: "NT$"
};


/* =========================================================
   7. CART STORAGE
   ========================================================= */

function getCart() {

    try {

        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        return Array.isArray(cart) ? cart : [];

    } catch (error) {

        console.error("Cart error:", error);

        return [];
    }
}


function saveCart(cart) {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


/* =========================================================
   8. PRODUCT INFORMATION
   ========================================================= */

function getProductSKU(item) {

    return (
        item.sku ||
        item.SKU ||
        item.productSku ||
        MAIN_PRODUCT_SKU
    );
}


function getProductCost(item) {

    const sku = getProductSKU(item);

    if (sku === MAIN_PRODUCT_SKU) {
        return PRODUCT_COST_USD;
    }

    const price = Number(item.price);

    return Number.isFinite(price)
        ? price
        : PRODUCT_COST_USD;
}


/* =========================================================
   9. COUNTRY / SHIPPING
   ========================================================= */

function getSelectedCountry() {

    return (
        localStorage.getItem("customerCountry") ||
        localStorage.getItem("checkoutCountry") ||
        "India"
    );
}


function getShippingRate(country) {

    if (!country) {
        return null;
    }

    if (Object.prototype.hasOwnProperty.call(
        shippingRates,
        country
    )) {
        return shippingRates[country];
    }

    return null;
}


function isCountryBlocked(country) {

    return blockedCountries.includes(country);
}


/* =========================================================
   10. CURRENCY
   ========================================================= */

function getCurrency(country) {

    return countryCurrency[country] || "USD";
}


function convertUSDToCurrency(amountUSD, currency) {

    const rate = exchangeRates[currency] || 1;

    return amountUSD * rate;
}


function formatMoney(amount, currency) {

    const symbol =
        currencySymbols[currency] || currency;

    let decimals = 2;

    if (
        ["JPY", "KRW", "VND", "IDR", "CLP", "COP"]
            .includes(currency)
    ) {
        decimals = 0;
    }

    return (
        symbol +
        Number(amount).toLocaleString(
            "en-US",
            {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            }
        )
    );
}


/* =========================================================
   11. PRODUCT SELLING PRICE
   ========================================================= */

function getItemUSDPrice(item, country) {

    const productCost =
        getProductCost(item);

    const shipping =
        getShippingRate(country);

    if (shipping === null) {
        return null;
    }

    return (
        productCost +
        shipping +
        PROFIT_USD
    );
}


/* =========================================================
   12. ADD TO CART
   ========================================================= */

function addToCart(productName) {

    const cart = getCart();

    const existing =
        cart.find(item =>
            item.name === productName
        );

    if (existing) {

        existing.quantity =
            Number(existing.quantity || 1) + 1;

    } else {

        cart.push({

            name: productName,

            sku: MAIN_PRODUCT_SKU,

            price: PRODUCT_COST_USD,

            quantity: 1

        });
    }

    saveCart(cart);

    updateStoreCartUI();

    updateCartCount();

    alert(productName + " added to cart!");
}


/* =========================================================
   13. CART COUNT
   ========================================================= */

function updateCartCount() {

    const countElement =
        document.getElementById("cartCount");

    if (!countElement) {
        return;
    }

    const cart = getCart();

    const count = cart.reduce(
        (total, item) =>
            total + Number(item.quantity || 1),
        0
    );

    countElement.textContent = count;
}


/* =========================================================
   14. STORE CART UI
   ========================================================= */

function updateStoreCartUI() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");

    if (!cartItems) {
        return;
    }

    const cart = getCart();

    const country =
        getSelectedCountry();

    const currency =
        getCurrency(country);

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

        if (cartTotal) {
            cartTotal.textContent =
                formatMoney(0, currency);
        }

        return;
    }

    let totalUSD = 0;

    cart.forEach((item, index) => {

        const quantity =
            Number(item.quantity || 1);

        const itemPrice =
            getItemUSDPrice(item, country);

        if (itemPrice === null) {
            return;
        }

        const itemTotal =
            itemPrice * quantity;

        totalUSD += itemTotal;

        const itemElement =
            document.createElement("div");

        itemElement.className =
            "cart-item";

        itemElement.innerHTML = `

            <div>
                <strong>${escapeHTML(item.name)}</strong>

                <p>
                    Qty: ${quantity}
                </p>

                <p>
                    ${formatMoney(
                        convertUSDToCurrency(
                            itemTotal,
                            currency
                        ),
                        currency
                    )}
                </p>
            </div>

            <button
                type="button"
                class="remove-cart-item"
                data-index="${index}"
            >
                Remove
            </button>
        `;

        cartItems.appendChild(itemElement);
    });

    if (cartTotal) {

        cartTotal.textContent =
            formatMoney(
                convertUSDToCurrency(
                    totalUSD,
                    currency
                ),
                currency
            );
    }

    document
        .querySelectorAll(".remove-cart-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const index =
                        Number(this.dataset.index);

                    const updatedCart =
                        getCart();

                    updatedCart.splice(
                        index,
                        1
                    );

                    saveCart(updatedCart);

                    updateStoreCartUI();

                    updateCartCount();
                }
            );
        });
}


/* =========================================================
   15. CHECKOUT
   ========================================================= */

function updateCheckout() {

    const checkoutItems =
        document.getElementById("checkoutItems");

    const subtotalElement =
        document.getElementById("checkoutSubtotal");

    const shippingElement =
        document.getElementById("checkoutShipping");

    const totalElement =
        document.getElementById("checkoutTotal");

    const currencyElement =
        document.getElementById("checkoutCurrency");

    const placeOrderButton =
        document.getElementById("placeOrderButton");

    const countryError =
        document.getElementById("countryError");

    const countrySelect =
        document.getElementById("checkoutCountry");

    if (!checkoutItems) {
        return;
    }

    const cart = getCart();

    let country =
        countrySelect?.value ||
        getSelectedCountry();

    if (countrySelect && country) {
        countrySelect.value = country;
    }

    const currency =
        getCurrency(country);

    if (currencyElement) {
        currencyElement.textContent =
            currency;
    }

    checkoutItems.innerHTML = "";

    if (placeOrderButton) {
        placeOrderButton.disabled = true;
    }

    if (countryError) {
        countryError.style.display = "none";
        countryError.textContent = "";
    }

    if (cart.length === 0) {

        checkoutItems.innerHTML =
            '<div class="empty-cart">Your cart is empty.</div>';

        setCheckoutTotals(
            0,
            currency
        );

        return;
    }

    if (!country) {

        checkoutItems.innerHTML =
            '<div class="empty-cart">Please select your country.</div>';

        return;
    }

    if (isCountryBlocked(country)) {

        checkoutItems.innerHTML =
            '<div class="empty-cart">Shipping is unavailable to this country.</div>';

        if (countryError) {

            countryError.textContent =
                "Sorry, Sacchi Flyier does not currently ship to this country.";

            countryError.style.display =
                "block";
        }

        return;
    }

    const shipping =
        getShippingRate(country);

    if (shipping === null) {

        checkoutItems.innerHTML =
            '<div class="empty-cart">Shipping is currently unavailable for this country.</div>';

        if (countryError) {

            countryError.textContent =
                "Shipping is currently unavailable for this country.";

            countryError.style.display =
                "block";
        }

        return;
    }

    let subtotalUSD = 0;

    cart.forEach(item => {

        const quantity =
            Number(item.quantity || 1);

        const price =
            getItemUSDPrice(
                item,
                country
            );

        if (price === null) {
            return;
        }

        const itemTotal =
            price * quantity;

        subtotalUSD += itemTotal;

        const row =
            document.createElement("div");

        row.className =
            "summary-item";

        row.innerHTML = `

            <span class="summary-item-name">
                ${escapeHTML(item.name)}
                × ${quantity}
            </span>

            <strong class="summary-item-price">
                ${formatMoney(
                    convertUSDToCurrency(
                        itemTotal,
                        currency
                    ),
                    currency
                )}
            </strong>
        `;

        checkoutItems.appendChild(row);
    });

    /*
       Customer shipping is FREE.
       CJ shipping is already included
       inside the product price.
    */

    if (shippingElement) {
        shippingElement.textContent =
            "FREE";
    }

    setCheckoutTotals(
        subtotalUSD,
        currency
    );

    if (placeOrderButton) {
        placeOrderButton.disabled = false;
    }
}


/* =========================================================
   16. CHECKOUT TOTALS
   ========================================================= */

function setCheckoutTotals(
    totalUSD,
    currency
) {

    const subtotalElement =
        document.getElementById("checkoutSubtotal");

    const totalElement =
        document.getElementById("checkoutTotal");

    const shippingElement =
        document.getElementById("checkoutShipping");

    const converted =
        convertUSDToCurrency(
            totalUSD,
            currency
        );

    if (subtotalElement) {

        subtotalElement.textContent =
            formatMoney(
                converted,
                currency
            );
    }

    if (shippingElement) {

        shippingElement.textContent =
            "FREE";
    }

    if (totalElement) {

        totalElement.textContent =
            formatMoney(
                converted,
                currency
            );
    }
}


/* =========================================================
   17. CHECKOUT COUNTRY
   ========================================================= */

function setupCheckoutCountry() {

    const countrySelect =
        document.getElementById(
            "checkoutCountry"
        );

    if (!countrySelect) {
        return;
    }

    countrySelect.addEventListener(
        "change",
        function () {

            const country =
                this.value;

            localStorage.setItem(
                "customerCountry",
                country
            );

            localStorage.setItem(
                "checkoutCountry",
                country
            );

            updateCheckout();

            updateStoreCartUI();
        }
    );
}


/* =========================================================
   18. SAVED COUNTRY
   ========================================================= */

function setupSavedCountry() {

    const countrySelect =
        document.getElementById(
            "checkoutCountry"
        );

    if (!countrySelect) {
        return;
    }

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


/* =========================================================
   19. CHECKOUT FORM
   ========================================================= */

function setupCheckoutForm() {

    const form =
        document.getElementById(
            "checkoutForm"
        );

    if (!form) {
        return;
    }

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const country =
                document.getElementById(
                    "checkoutCountry"
                )?.value;

            if (!country) {

                alert(
                    "Please select your country."
                );

                return;
            }

            if (
                isCountryBlocked(country)
            ) {

                alert(
                    "Sorry, we cannot ship to this country."
                );

                return;
            }

            if (
                getShippingRate(country) === null
            ) {

                alert(
                    "Shipping is currently unavailable for this country."
                );

                return;
            }

            const cart =
                getCart();

            if (cart.length === 0) {

                alert(
                    "Your cart is empty."
                );

                return;
            }

            if (!form.checkValidity()) {

                form.reportValidity();

                return;
            }

            const paymentMethod =
                document.querySelector(
                    'input[name="paymentMethod"]:checked'
                )?.value || "cod";

            const order = {

                orderId:
                    "SF-" +
                    Date.now(),

                customer: {

                    name:
                        document.getElementById(
                            "checkoutName"
                        )?.value.trim(),

                    email:
                        document.getElementById(
                            "checkoutEmail"
                        )?.value.trim(),

                    countryCode:
                        document.getElementById(
                            "checkoutCountryCode"
                        )?.value,

                    phone:
                        document.getElementById(
                            "checkoutPhone"
                        )?.value.trim()
                },

                address: {

                    address:
                        document.getElementById(
                            "checkoutAddress"
                        )?.value.trim(),

                    city:
                        document.getElementById(
                            "checkoutCity"
                        )?.value.trim(),

                    state:
                        document.getElementById(
                            "checkoutState"
                        )?.value.trim(),

                    country: country,

                    postalCode:
                        document.getElementById(
                            "checkoutPostalCode"
                        )?.value.trim()
                },

                paymentMethod:
                    paymentMethod,

                items: cart,

                currency:
                    getCurrency(country),

                createdAt:
                    new Date().toISOString()
            };

            localStorage.setItem(
                "lastOrder",
                JSON.stringify(order)
            );

            /*
               IMPORTANT:
               This saves the order locally.
               It does NOT charge an online payment
               or send the order to CJ.
            */

            alert(
                "Order information saved successfully!\n\n" +
                "Order ID: " +
                order.orderId
            );

        }
    );
}


/* =========================================================
   20. CART BUTTON
   ========================================================= */

function setupCartButton() {

    const cartButton =
        document.getElementById(
            "cartButton"
        );

    const cartPanel =
        document.getElementById(
            "cartPanel"
        );

    const closeCart =
        document.getElementById(
            "closeCart"
        );

    if (
        cartButton &&
        cartPanel
    ) {

        cartButton.addEventListener(
            "click",
            function () {

                cartPanel.classList.add(
                    "active"
                );

                updateStoreCartUI();
            }
        );
    }

    if (
        closeCart &&
        cartPanel
    ) {

        closeCart.addEventListener(
            "click",
            function () {

                cartPanel.classList.remove(
                    "active"
                );
            }
        );
    }
}


/* =========================================================
   21. CHECKOUT BUTTON
   ========================================================= */

function setupCheckoutButton() {

    const checkoutButton =
        document.getElementById(
            "checkoutButton"
        );

    if (!checkoutButton) {
        return;
    }

    checkoutButton.addEventListener(
        "click",
        function () {

            const cart =
                getCart();

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


/* =========================================================
   22. SEARCH
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
            function () {

                searchOverlay.classList.add(
                    "active"
                );

                setTimeout(
                    () => searchInput?.focus(),
                    100
                );
            }
        );
    }

    if (
        closeSearch &&
        searchOverlay
    ) {

        closeSearch.addEventListener(
            "click",
            function () {

                searchOverlay.classList.remove(
                    "active"
                );
            }
        );
    }

    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    const search =
                        this.value
                            .trim()
                            .toLowerCase();

                    if (!search) {
                        return;
                    }

                    alert(
                        "Searching for: " +
                        search
                    );
                }
            }
        );
    }
}


/* =========================================================
   23. MOBILE MENU
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
        !menuToggle ||
        !navLinks
    ) {
        return;
    }

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "active"
            );
        }
    );
}


/* =========================================================
   24. ADD CART BUTTONS
   ========================================================= */

function setupAddCartButtons() {

    document
        .querySelectorAll(".add-cart")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const productName =
                        this.dataset.product ||
                        "Product";

                    addToCart(
                        productName
                    );
                }
            );
        });
}


/* =========================================================
   25. HTML SAFETY
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
   26. INITIALIZE WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupAddCartButtons();

        setupCartButton();

        setupCheckoutButton();

        setupCheckoutCountry();

        setupSavedCountry();

        setupCheckoutForm();

        setupSearch();

        setupMobileMenu();

        updateCartCount();

        updateStoreCartUI();

        updateCheckout();
    }
);
