/* =========================================================
   SACCHI FLYIER
   CART + CHECKOUT + COUNTRY PRICING
   CJ DROPSHIPPING
   ========================================================= */


/* =========================================================
   1. PRODUCT SETTINGS
   ========================================================= */

const PRODUCT_COST_USD = 1.62;
const PROFIT_USD = 10.00;

const MAIN_PRODUCT_SKU = "CJLX239765601AZ";

const MAIN_PRODUCT_NAME =
    "Light Luxury High-grade Micro Inlaid Zircon Chain Earrings";


/* =========================================================
   2. CJ SHIPPING RATES
   Shipping cost from China in USD
   ========================================================= */

const shippingRates = {

    "Afghanistan": 3.72,
    "Albania": 3.22,
    "Algeria": 3.35,
    "American Samoa": 9.11,
    "Andorra": 6.60,
    "Angola": 3.53,
    "Anguilla": 3.82,
    "Antigua and Barbuda": 3.50,
    "Argentina": 3.67,
    "Armenia": 3.32,
    "Aruba": 3.37,
    "Australia": 6.48,
    "Austria": 3.41,
    "Azerbaijan": 3.19,
    "Bahamas": 3.57,
    "Bahrain": 4.71,
    "Bangladesh": 3.45,
    "Barbados": 3.53,
    "Belarus": 4.56,
    "Belgium": 6.82,
    "Belize": 3.82,
    "Benin": 4.61,
    "Bermuda": 3.53,
    "Bhutan": 5.67,
    "Bolivia (Plurinational State of)": 3.86,
    "Bonaire, Sint Eustatius and Saba": 3.86,
    "Bosnia and Herzegovina": 4.95,
    "Botswana": 3.53,
    "Bouvet Island": 9.86,
    "Brazil": 6.05,
    "British Indian Ocean Territory": 5.51,
    "Brunei Darussalam": 3.14,
    "Bulgaria": 8.74,
    "Burkina Faso": 4.80,
    "Burundi": 3.60,
    "Cabo Verde": 3.86,
    "Cambodia": 3.56,
    "Cameroon": 3.35,
    "Canada": 5.31,
    "Cayman Islands": 3.60,
    "Central African Republic": 3.86,
    "Chad": 3.64,
    "Chile": 4.14,
    "China": 3.05,
    "Christmas Island": 9.43,
    "Cocos (Keeling) Islands": 9.43,
    "Colombia": 2.85,
    "Comoros": 3.14,
    "Congo (the Democratic Republic of the)": 1.90,
    "Congo": 1.88,
    "Cook Islands": 4.14,
    "Costa Rica": 1.75,
    "Côte d’Ivoire": 1.88,
    "Croatia": 8.71,
    "Cuba": 3.57,
    "Curaçao": 3.40,
    "Cyprus": 6.51,
    "Czechia": 8.38,
    "Denmark": 3.37,
    "Djibouti": 3.86,
    "Dominica": 3.82,
    "Dominican Republic": 3.37,
    "Ecuador": 3.75,
    "Egypt": 3.68,
    "El Salvador": 3.52,
    "Equatorial Guinea": 4.27,
    "Eritrea": 3.60,
    "Ethiopia": 3.43,
    "Falkland Islands": 5.30,
    "Faroe Islands": 8.38,
    "Fiji": 3.98,
    "Finland": 3.36,
    "France": 5.76,
    "French Guiana": 3.46,
    "French Polynesia": 3.46,
    "French Southern Territories": 8.11,
    "Gabon": 4.76,
    "Gambia": 3.60,
    "Georgia": 3.97,
    "Germany": 6.17,
    "Ghana": 3.27,
    "Gibraltar": 4.11,
    "Greece": 3.32,
    "Greenland": 8.54,
    "Grenada": 3.60,
    "Guadeloupe": 8.59,
    "Guam": 9.53,
    "Guernsey": 7.81,
    "Guinea": 4.43,
    "Guinea-Bissau": 87.03,
    "Guyana": 5.51,
    "Haiti": 3.82,
    "Heard Island and McDonald Islands": 9.00,
    "Holy See": 38.81,
    "Honduras": 3.82,
    "Hong Kong (China)": 3.92,
    "Hungary": 3.36,
    "Iceland": 3.56,
    "India": 4.01,
    "Indonesia": 3.06,
    "Iran (Islamic Republic of)": 3.43,
    "Iraq": 181.74,
    "Ireland": 6.80,
    "Isle of Man": 7.81,
    "Israel": 5.16,
    "Italy": 7.10,
    "Jamaica": 3.53,
    "Japan": 4.96,
    "Jersey": 7.35,
    "Jordan": 3.45,
    "Kazakhstan": 2.88,
    "Kenya": 3.43,
    "Kiribati": 4.38,
    "Korea (the Democratic People's Republic of)": 137.03,
    "Korea (South Korea)": 3.91,
    "Kuwait": 9.27,
    "Kyrgyzstan": 3.25,
    "Lao peoples Democratic republic": 4.28,
    "Latvia": 7.60,
    "Lebanon": 3.25,
    "Lesotho": 3.86,
    "Liberia": 3.32,
    "Libya": 4.80,
    "Liechtenstein": 7.33,
    "Lithuania": 7.60,
    "Luxembourg": 3.25,
    "Macao (China)": 5.58,
    "Macedonia (The former Yugoslav Republic of)": 3.32,
    "Madagascar": 3.60,
    "Malawi": 3.50,
    "Malaysia": 3.41,
    "Maldives": 2.95,
    "Mali": 4.80,
    "Malta": 3.31,
    "Marshall Islands": 8.93,
    "Martinique": 8.10,
    "Mauritania": 3.27,
    "Mauritius": 3.23,
    "Mayotte": 7.82,
    "Mexico": 4.18,
    "Micronesia (Federated States of)": 87.03,
    "Moldova the republic": 3.22,
    "Monaco": 6.35,
    "Mongolia": 4.42,
    "Montenegro": 4.95,
    "Montserrat": 3.82,
    "Morocco": 4.04,
    "Mozambique": 3.23,
    "Myanmar": 3.53,
    "Namibia": 4.83,
    "Nauru": 5.30,
    "Nepal": 3.15,
    "Netherlands": 6.36,
    "New Caledonia": 3.98,
    "New Zealand": 4.94,
    "Nicaragua": 3.60,
    "Niger": 4.76,
    "Nigeria": 3.50,
    "Niue": 4.48,
    "Norfolk Island": 3.38,
    "Northern Mariana Island": 9.15,
    "Norway": 5.94,
    "Oman": 4.17,
    "Pakistan": 2.94,
    "Palau": 87.03,
    "Panama": 3.25,
    "Papua New Guinea": 3.98,
    "Paraguay": 3.67,
    "Peru": 3.67,
    "Philippines": 3.32,
    "Pitcairn": 5.14,
    "Poland": 5.27,
    "Portugal": 6.11,
    "Puerto Rico": 8.47,
    "Qatar": 4.04,
    "Réunion": 5.89,
    "Romania": 4.91,
    "Russian Federation": 4.36,
    "Rwanda": 3.50,
    "Saint Helena, Ascension and Tristan da Cunha": 5.95,
    "Saint Kitts and Nevis": 3.82,
    "Saint Lucia": 3.53,
    "Saint Martin (French part)": 8.11,
    "Saint Pierre and Miquelon": 6.10,
    "Saint Vincent and the Grenadines": 3.82,
    "Samoa": 4.04,
    "San Marino": 4.94,
    "Sao Tome and Principe": 3.86,
    "Saudi Arabia": 4.32,
    "Senegal": 3.37,
    "Serbia": 3.18,
    "Seychelles": 3.21,
    "Sierra Leone": 3.86,
    "Singapore": 3.93,
    "Sint Maarten (Dutch Part)": 3.86,
    "Slovakia": 8.72,
    "Slovenia": 8.90,
    "Solomon Islands": 4.03,
    "Somalia": 3.86,
    "South Africa": 5.97,
    "South Georgia and South Sandwich Islands": 8.19,
    "South Sudan": 87.03,
    "Spain": 4.87,
    "Sri Lanka": 3.12,
    "Sudan": 4.43,
    "Suriname": 3.86,
    "Swaziland": 3.87,
    "Sweden": 6.74,
    "Switzerland": 6.40,
    "Syrian Arab Republic": 181.74,
    "Taiwan": 7.37,
    "Tajikistan": 3.25,
    "Tanzania, United Republic of": 3.46,
    "Thailand": 2.71,
    "The Republic of Kosovo": 4.25,
    "Timor-Leste": 5.76,
    "Togo": 3.38,
    "Tokelau": 4.40,
    "Tonga": 4.78,
    "Trinidad and Tobago": 3.27,
    "Tunisia": 3.43,
    "Turkey": 4.64,
    "Turks and Caicos Islands": 3.86,
    "Tuvalu": 4.38,
    "Uganda": 3.35,
    "Ukraine": 3.23,
    "United Arab Emirates": 4.03,
    "United Kingdom": 4.81,
    "United States": 3.68,
    "Uruguay": 4.21,
    "Uzbekistan": 4.21,
    "Vanuatu": 4.81,
    "Venezuela (Bolivarian Republic of)": 3.57,
    "Vietnam": 3.02,
    "Virgin Islands (British)": 3.53,
    "Virgin Islands (U.S.)": 9.15,
    "Wallis and Futuna": 5.24,
    "Western Sahara": 6.54,
    "Yemen": 181.74,
    "Zambia": 3.46,
    "Zimbabwe": 4.01
};


/* =========================================================
   3. COUNTRIES THAT YOU DO NOT SHIP TO
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
   4. COUNTRY → CURRENCY
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
    "Bahamas": "BSD",
    "Bahrain": "BHD",
    "Bangladesh": "BDT",
    "Belgium": "EUR",
    "Belize": "BZD",
    "Bhutan": "BTN",
    "Bolivia (Plurinational State of)": "BOB",
    "Bosnia and Herzegovina": "BAM",
    "Brazil": "BRL",
    "Brunei Darussalam": "BND",
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
    "Ghana": "GHS",
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
    "Jordan": "JOD",
    "Kazakhstan": "KZT",
    "Kenya": "KES",
    "Kuwait": "KWD",
    "Kyrgyzstan": "KGS",
    "Latvia": "EUR",
    "Lebanon": "LBP",
    "Liechtenstein": "CHF",
    "Lithuania": "EUR",
    "Luxembourg": "EUR",
    "Malaysia": "MYR",
    "Maldives": "MVR",
    "Malta": "EUR",
    "Mexico": "MXN",
    "Moldova the republic": "MDL",
    "Monaco": "EUR",
    "Mongolia": "MNT",
    "Montenegro": "EUR",
    "Morocco": "MAD",
    "Nepal": "NPR",
    "Netherlands": "EUR",
    "New Zealand": "NZD",
    "Nigeria": "NGN",
    "North Macedonia": "MKD",
    "Norway": "NOK",
    "Oman": "OMR",
    "Pakistan": "PKR",
    "Panama": "PAB",
    "Paraguay": "PYG",
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
    "Uruguay": "UYU",
    "Uzbekistan": "UZS",
    "Vietnam": "VND"
};


/* =========================================================
   5. FALLBACK EXCHANGE RATES
   USD → LOCAL CURRENCY
   ========================================================= */

const exchangeRates = {

    USD: 1,

    INR: 88.00,
    EUR: 0.85,
    GBP: 0.74,
    CAD: 1.38,
    AUD: 1.52,
    NZD: 1.77,

    AED: 3.67,
    SAR: 3.75,
    QAR: 3.64,
    BHD: 0.377,
    KWD: 0.307,
    OMR: 0.385,

    JPY: 148,
    CNY: 7.12,
    HKD: 7.80,
    TWD: 31.5,
    KRW: 1390,

    SGD: 1.29,
    MYR: 4.22,
    THB: 32.5,
    IDR: 16400,
    PHP: 57.0,
    VND: 26000,

    PKR: 283,
    BDT: 122,
    NPR: 140,
    LKR: 306,

    BRL: 5.40,
    MXN: 18.5,
    ARS: 1450,
    CLP: 950,
    COP: 3900,
    PEN: 3.50,

    ZAR: 17.0,
    NGN: 1500,
    GHS: 12.5,
    KES: 129,

    CHF: 0.81,
    SEK: 9.35,
    NOK: 10.1,
    DKK: 6.35,
    PLN: 3.65,
    CZK: 21.2,
    HUF: 330,
    RON: 4.35,
    BGN: 1.66,

    TRY: 41,
    UAH: 41.5,
    RSD: 100,
    ISK: 123,

    EGP: 48,
    MAD: 9.3,
    ILS: 3.30,
    JOD: 0.709
};


/* =========================================================
   6. CURRENCY SYMBOLS
   ========================================================= */

const currencySymbols = {

    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£",
    CAD: "CA$",
    AUD: "A$",
    NZD: "NZ$",

    AED: "د.إ",
    SAR: "﷼",
    QAR: "﷼",
    BHD: ".د.ب",
    KWD: "د.ك",
    OMR: "﷼",

    JPY: "¥",
    CNY: "¥",
    HKD: "HK$",
    TWD: "NT$",
    KRW: "₩",

    SGD: "S$",
    MYR: "RM",
    THB: "฿",
    IDR: "Rp",
    PHP: "₱",
    VND: "₫",

    PKR: "₨",
    BDT: "৳",
    NPR: "₨",
    LKR: "Rs",

    BRL: "R$",
    MXN: "MX$",
    ARS: "$",
    CLP: "$",
    COP: "$",
    PEN: "S/",

    ZAR: "R",
    NGN: "₦",
    GHS: "GH₵",
    KES: "KSh",

    CHF: "CHF",
    SEK: "kr",
    NOK: "kr",
    DKK: "kr",
    PLN: "zł",
    CZK: "Kč",
    HUF: "Ft",
    RON: "lei",
    BGN: "лв",

    TRY: "₺",
    UAH: "₴",
    RSD: "дин",
    ISK: "kr",

    EGP: "E£",
    MAD: "د.م.",
    ILS: "₪",
    JOD: "د.ا"
};


/* =========================================================
   7. CART STORAGE
   ========================================================= */

function getCart() {

    try {

        const savedCart =
            localStorage.getItem("cart") ||
            localStorage.getItem("shoppingCart") ||
            localStorage.getItem("cartItems");

        if (!savedCart) {
            return [];
        }

        const parsed = JSON.parse(savedCart);

        return Array.isArray(parsed) ? parsed : [];

    } catch (error) {

        console.error("Cart loading error:", error);

        return [];
    }
}


function saveCart(cart) {

    localStorage.setItem("cart", JSON.stringify(cart));

    localStorage.setItem(
        "shoppingCart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cart)
    );
}


/* =========================================================
   8. COUNTRY HELPERS
   ========================================================= */

function getSelectedCountry() {

    return (
        localStorage.getItem("customerCountry") ||
        localStorage.getItem("checkoutCountry") ||
        "India"
    );
}


function isBlockedCountry(country) {

    return blockedCountries.includes(country);
}


function getShippingRate(country) {

    if (!country) {
        return null;
    }

    if (isBlockedCountry(country)) {
        return null;
    }

    if (
        Object.prototype.hasOwnProperty.call(
            shippingRates,
            country
        )
    ) {

        return Number(shippingRates[country]);
    }

    return null;
}


function getCurrency(country) {

    return countryCurrency[country] || "USD";
}


/* =========================================================
   9. PRODUCT PRICE
   Product price =
   CJ product cost + CJ shipping + $10 profit
   ========================================================= */

function getItemUSDPrice(item, country) {

    const quantity =
        Number(item.quantity) > 0
            ? Number(item.quantity)
            : 1;

    let productCost =
        Number(item.price);

    if (!Number.isFinite(productCost)) {
        productCost = PRODUCT_COST_USD;
    }

    let shipping =
        getShippingRate(country);

    if (shipping === null) {
        shipping = 0;
    }

    return (
        productCost +
        shipping +
        PROFIT_USD
    );
}


/* =========================================================
   10. USD → LOCAL CURRENCY
   ========================================================= */

function convertUSDToCurrency(
    amountUSD,
    currency
) {

    const rate =
        Number(exchangeRates[currency]) || 1;

    return amountUSD * rate;
}


/* =========================================================
   11. FORMAT CUSTOMER PRICE
   ========================================================= */

function formatCustomerPrice(
    amountUSD,
    country
) {

    const currency =
        getCurrency(country);

    const converted =
        convertUSDToCurrency(
            amountUSD,
            currency
        );

    const symbol =
        currencySymbols[currency] || currency;

    let decimals = 2;

    if (
        [
            "JPY",
            "KRW",
            "VND",
            "IDR",
            "CLP",
            "COP",
            "HUF"
        ].includes(currency)
    ) {
        decimals = 0;
    }

    return (
        symbol +
        converted.toLocaleString(
            undefined,
            {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            }
        )
    );
}


/* =========================================================
   12. CART COUNT
   ========================================================= */

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");

    if (!cartCount) {
        return;
    }

    const cart = getCart();

    const count =
        cart.reduce(
            (total, item) =>
                total +
                (
                    Number(item.quantity) || 1
                ),
            0
        );

    cartCount.textContent = count;
}


/* =========================================================
   13. PRODUCT IDENTIFICATION
   ========================================================= */

function isMainProduct(item) {

    if (!item) {
        return false;
    }

    return (
        item.sku === MAIN_PRODUCT_SKU ||
        item.dataSku === MAIN_PRODUCT_SKU ||
        item.productSku === MAIN_PRODUCT_SKU ||
        item.name === MAIN_PRODUCT_NAME
    );
}


/* =========================================================
   14. ADD PRODUCT TO CART
   ========================================================= */

function addToCart(product) {

    const cart = getCart();

    const productName =
        product.name ||
        MAIN_PRODUCT_NAME;

    const productSKU =
        product.sku ||
        MAIN_PRODUCT_SKU;

    const productPrice =
        Number(product.price) ||
        PRODUCT_COST_USD;

    const existingIndex =
        cart.findIndex(
            item =>
                (
                    item.sku === productSKU ||
                    item.name === productName
                )
        );

    if (existingIndex !== -1) {

        cart[existingIndex].quantity =
            (
                Number(
                    cart[existingIndex].quantity
                ) || 1
            ) + 1;

    } else {

        cart.push({

            name: productName,

            sku: productSKU,

            price: productPrice,

            quantity: 1,

            image:
                product.image || "",

            variant:
                product.variant || "Gold Plated"

        });
    }

    saveCart(cart);

    updateCartCount();

    updateStoreCartUI();

    showCartMessage(
        "Product added to cart."
    );
}


/* =========================================================
   15. ADD BUTTONS
   ========================================================= */

function setupAddToCartButtons() {

    const buttons =
        document.querySelectorAll(
            ".add-cart"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const name =
                    this.dataset.product ||
                    MAIN_PRODUCT_NAME;

                const sku =
                    this.dataset.sku ||
                    (
                        name === MAIN_PRODUCT_NAME
                            ? MAIN_PRODUCT_SKU
                            : name
                    );

                const price =
                    Number(
                        this.dataset.price
                    ) ||
                    (
                        name === MAIN_PRODUCT_NAME
                            ? PRODUCT_COST_USD
                            : PRODUCT_COST_USD
                    );

                const image =
                    this.dataset.image ||
                    "";

                const variant =
                    this.dataset.variant ||
                    "Gold Plated";

                addToCart({

                    name: name,

                    sku: sku,

                    price: price,

                    image: image,

                    variant: variant
                });
            }
        );

    });
}


/* =========================================================
   16. CART MESSAGE
   ========================================================= */

function showCartMessage(message) {

    const oldMessage =
        document.querySelector(
            ".cart-message"
        );

    if (oldMessage) {
        oldMessage.remove();
    }

    const messageBox =
        document.createElement("div");

    messageBox.className =
        "cart-message";

    messageBox.textContent =
        message;

    messageBox.style.position =
        "fixed";

    messageBox.style.bottom =
        "25px";

    messageBox.style.right =
        "25px";

    messageBox.style.zIndex =
        "99999";

    messageBox.style.padding =
        "12px 18px";

    messageBox.style.background =
        "#111";

    messageBox.style.color =
        "#fff";

    messageBox.style.border =
        "1px solid #555";

    messageBox.style.borderRadius =
        "8px";

    document.body.appendChild(
        messageBox
    );

    setTimeout(
        () => messageBox.remove(),
        2200
    );
}


/* =========================================================
   17. STORE CART UI
   ========================================================= */

function updateStoreCartUI() {

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

    const country =
        getSelectedCountry();

    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        if (cartTotal) {
            cartTotal.textContent = "$0.00";
        }

        updateCartCount();

        return;
    }

    let totalUSD = 0;

    cartItems.innerHTML = "";

    cart.forEach(
        (item, index) => {

            const quantity =
                Number(item.quantity) > 0
                    ? Number(item.quantity)
                    : 1;

            const itemPriceUSD =
                getItemUSDPrice(
                    item,
                    country
                );

            const itemTotalUSD =
                itemPriceUSD *
                quantity;

            totalUSD += itemTotalUSD;

            const itemDiv =
                document.createElement(
                    "div"
                );

            itemDiv.className =
                "cart-item";

            itemDiv.innerHTML = `

                <div class="cart-item-info">

                    <strong>
                        ${
                            item.name ||
                            MAIN_PRODUCT_NAME
                        }
                    </strong>

                    <small>
                        ${
                            item.variant ||
                            ""
                        }
                    </small>

                    <small>
                        Quantity:
                        ${quantity}
                    </small>

                    <span>
                        ${formatCustomerPrice(
                            itemTotalUSD,
                            country
                        )}
                    </span>

                </div>

                <button
                    class="remove-cart-item"
                    data-index="${index}">
                    Remove
                </button>
            `;

            cartItems.appendChild(
                itemDiv
            );
        }
    );

    if (cartTotal) {

        cartTotal.textContent =
            formatCustomerPrice(
                totalUSD,
                country
            );
    }

    const removeButtons =
        cartItems.querySelectorAll(
            ".remove-cart-item"
        );

    removeButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                function () {

                    const index =
                        Number(
                            this.dataset.index
                        );

                    removeFromCart(index);
                }
            );
        }
    );

    updateCartCount();
}


/* =========================================================
   18. REMOVE FROM CART
   ========================================================= */

function removeFromCart(index) {

    const cart = getCart();

    if (
        index < 0 ||
        index >= cart.length
    ) {
        return;
    }

    cart.splice(index, 1);

    saveCart(cart);

    updateCartCount();

    updateStoreCartUI();

    updateCheckout();
}


/* =========================================================
   19. OPEN CART
   ========================================================= */

function openCart() {

    const cartPanel =
        document.getElementById(
            "cartPanel"
        );

    if (!cartPanel) {
        return;
    }

    cartPanel.classList.add(
        "active"
    );

    cartPanel.classList.add(
        "open"
    );
}


/* =========================================================
   20. CLOSE CART
   ========================================================= */

function closeCart() {

    const cartPanel =
        document.getElementById(
            "cartPanel"
        );

    if (!cartPanel) {
        return;
    }

    cartPanel.classList.remove(
        "active"
    );

    cartPanel.classList.remove(
        "open"
    );
}


/* =========================================================
   21. CHECKOUT CALCULATION
   ========================================================= */

function updateCheckout() {

    const checkoutItems =
        document.getElementById(
            "checkoutItems"
        );

    const checkoutSubtotal =
        document.getElementById(
            "checkoutSubtotal"
        );

    const checkoutShipping =
        document.getElementById(
            "checkoutShipping"
        );

    const checkoutTotal =
        document.getElementById(
            "checkoutTotal"
        );

    const checkoutCurrency =
        document.getElementById(
            "checkoutCurrency"
        );

    const placeOrderButton =
        document.getElementById(
            "placeOrderButton"
        );

    if (!checkoutItems) {
        return;
    }

    const cart = getCart();

    const countrySelect =
        document.getElementById(
            "checkoutCountry"
        );

    const country =
        countrySelect
            ? countrySelect.value
            : getSelectedCountry();

    if (!country) {

        checkoutItems.innerHTML =
            "<p>Please select your country.</p>";

        if (checkoutSubtotal) {
            checkoutSubtotal.textContent =
                "$0.00";
        }

        if (checkoutShipping) {
            checkoutShipping.textContent =
                "FREE";
        }

        if (checkoutTotal) {
            checkoutTotal.textContent =
                "$0.00";
        }

        if (placeOrderButton) {
            placeOrderButton.disabled =
                true;
        }

        return;
    }

    if (isBlockedCountry(country)) {

        checkoutItems.innerHTML =
            `
            <p>
                Sorry, shipping is not available
                to ${country}.
            </p>
            `;

        if (checkoutSubtotal) {
            checkoutSubtotal.textContent =
                "—";
        }

        if (checkoutShipping) {
            checkoutShipping.textContent =
                "Unavailable";
        }

        if (checkoutTotal) {
            checkoutTotal.textContent =
                "—";
        }

        if (placeOrderButton) {
            placeOrderButton.disabled =
                true;
        }

        return;
    }

    const shipping =
        getShippingRate(country);

    if (
        shipping === null &&
        cart.length > 0
    ) {

        checkoutItems.innerHTML =
            `
            <p>
                Shipping information is
                unavailable for ${country}.
            </p>
            `;

        if (placeOrderButton) {
            placeOrderButton.disabled =
                true;
        }

        return;
    }

    const currency =
        getCurrency(country);

    if (checkoutCurrency) {

        checkoutCurrency.textContent =
            currency;
    }

    if (cart.length === 0) {

        checkoutItems.innerHTML =
            "<p>Your cart is empty.</p>";

        if (checkoutSubtotal) {
            checkoutSubtotal.textContent =
                formatCustomerPrice(
                    0,
                    country
                );
        }

        if (checkoutShipping) {
            checkoutShipping.textContent =
                "FREE";
        }

        if (checkoutTotal) {
            checkoutTotal.textContent =
                formatCustomerPrice(
                    0,
                    country
                );
        }

        if (placeOrderButton) {
            placeOrderButton.disabled =
                true;
        }

        return;
    }

    let subtotalUSD = 0;

    checkoutItems.innerHTML = "";

    cart.forEach(
        item => {

            const quantity =
                Number(item.quantity) > 0
                    ? Number(item.quantity)
                    : 1;

            const itemPriceUSD =
                getItemUSDPrice(
                    item,
                    country
                );

            const itemTotalUSD =
                itemPriceUSD *
                quantity;

            subtotalUSD +=
                itemTotalUSD;

            const itemElement =
                document.createElement(
                    "div"
                );

            itemElement.className =
                "checkout-item";

            itemElement.innerHTML = `

                <span>
                    ${
                        item.name ||
                        MAIN_PRODUCT_NAME
                    }
                    × ${quantity}
                </span>

                <strong>
                    ${formatCustomerPrice(
                        itemTotalUSD,
                        country
                    )}
                </strong>
            `;

            checkoutItems.appendChild(
                itemElement
            );
        }
    );

    /*
       Customer pays FREE shipping.
       CJ shipping is already included
       in the product selling price.
    */

    const totalUSD =
        subtotalUSD;

    if (checkoutSubtotal) {

        checkoutSubtotal.textContent =
            formatCustomerPrice(
                subtotalUSD,
                country
            );
    }

    if (checkoutShipping) {

        checkoutShipping.textContent =
            "FREE";
    }

    if (checkoutTotal) {

        checkoutTotal.textContent =
            formatCustomerPrice(
                totalUSD,
                country
            );
    }

    if (placeOrderButton) {

        placeOrderButton.disabled =
            false;
    }
}


/* =========================================================
   22. CHECKOUT COUNTRY CHANGE
   ========================================================= */

function setupCheckoutCountry() {

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
        ) ||
        localStorage.getItem(
            "customerCountry"
        ) ||
        "";

    if (
        savedCountry &&
        Array.from(
            countrySelect.options
        ).some(
            option =>
                option.value ===
                savedCountry
        )
    ) {

        countrySelect.value =
            savedCountry;
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

            updateStoreCartUI();

            updateCheckout();

            updateCountryError();
        }
    );

    updateCountryError();

    updateCheckout();
}


/* =========================================================
   23. COUNTRY ERROR
   ========================================================= */

function updateCountryError() {

    const countrySelect =
        document.getElementById(
            "checkoutCountry"
        );

    const countryError =
        document.getElementById(
            "countryError"
        );

    if (
        !countrySelect ||
        !countryError
    ) {
        return;
    }

    const country =
        countrySelect.value;

    if (
        country &&
        isBlockedCountry(country)
    ) {

        countryError.textContent =
            `
            Sorry, we currently do not
            ship to ${country}.
            `;

        countryError.style.display =
            "block";

        return;
    }

    countryError.textContent = "";

    countryError.style.display =
        "none";
}


/* =========================================================
   24. CHECKOUT FORM
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

            const countrySelect =
                document.getElementById(
                    "checkoutCountry"
                );

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
                isBlockedCountry(country)
            ) {

                alert(
                    `Sorry, we do not ship to ${country}.`
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

            const name =
                document.getElementById(
                    "checkoutName"
                )?.value.trim() || "";

            const email =
                document.getElementById(
                    "checkoutEmail"
                )?.value.trim() || "";

            const phoneCode =
                document.getElementById(
                    "checkoutCountryCode"
                )?.value || "";

            const phone =
                document.getElementById(
                    "checkoutPhone"
                )?.value.trim() || "";

            const address =
                document.getElementById(
                    "checkoutAddress"
                )?.value.trim() || "";

            const city =
                document.getElementById(
                    "checkoutCity"
                )?.value.trim() || "";

            const state =
                document.getElementById(
                    "checkoutState"
                )?.value.trim() || "";

            const postalCode =
                document.getElementById(
                    "checkoutPostalCode"
                )?.value.trim() || "";

            const payment =
                document.querySelector(
                    'input[name="payment"]:checked'
                )?.value || "cod";

            if (!name) {

                alert(
                    "Please enter your name."
                );

                return;
            }

            if (!email) {

                alert(
                    "Please enter your email."
                );

                return;
            }

            if (!phone) {

                alert(
                    "Please enter your phone number."
                );

                return;
            }

            if (!address) {

                alert(
                    "Please enter your address."
                );

                return;
            }

            if (!city) {

                alert(
                    "Please enter your city."
                );

                return;
            }

            if (!state) {

                alert(
                    "Please enter your state."
                );

                return;
            }

            if (!postalCode) {

                alert(
                    "Please enter your postal code."
                );

                return;
            }

            const order = {

                orderId:
                    "SF-" +
                    Date.now(),

                customer: {

                    name: name,

                    email: email,

                    phone:
                        phoneCode +
                        " " +
                        phone,

                    address: address,

                    city: city,

                    state: state,

                    postalCode: postalCode,

                    country: country
                },

                paymentMethod:
                    payment,

                currency:
                    getCurrency(country),

                items:
                    cart,

                createdAt:
                    new Date().toISOString()
            };

            localStorage.setItem(
                "lastOrder",
                JSON.stringify(order)
            );

            /*
               For now this stores the order locally.
               Your Resend/CJ backend can be connected
               separately for actual order processing.
            */

            alert(
                "Order information saved successfully."
            );

        }
    );
}


/* =========================================================
   25. CART BUTTON
   ========================================================= */

function setupCartButton() {

    const cartButton =
        document.getElementById(
            "cartButton"
        );

    const closeCartButton =
        document.getElementById(
            "closeCart"
        );

    if (cartButton) {

        cartButton.addEventListener(
            "click",
            openCart
        );
    }

    if (closeCartButton) {

        closeCartButton.addEventListener(
            "click",
            closeCart
        );
    }
}


/* =========================================================
   26. CHECKOUT BUTTON
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
   27. SEARCH
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

                searchOverlay.classList.add(
                    "open"
                );

                if (searchInput) {

                    setTimeout(
                        () =>
                            searchInput.focus(),
                        100
                    );
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
            function () {

                searchOverlay.classList.remove(
                    "active"
                );

                searchOverlay.classList.remove(
                    "open"
                );
            }
        );
    }

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                const searchText =
                    this.value
                        .trim()
                        .toLowerCase();

                const products =
                    document.querySelectorAll(
                        ".product-card"
                    );

                products.forEach(
                    product => {

                        const text =
                            product.textContent
                                .toLowerCase();

                        if (
                            text.includes(
                                searchText
                            )
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
    }
}


/* =========================================================
   28. MOBILE MENU
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

            navLinks.classList.toggle(
                "open"
            );

        }
    );
}


/* =========================================================
   29. NEWSLETTER FORM
   ========================================================= */

function setupNewsletter() {

    const form =
        document.getElementById(
            "newsletterForm"
        );

    const emailInput =
        document.getElementById(
            "newsletterEmail"
        );

    if (!form) {
        return;
    }

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const email =
                emailInput
                    ? emailInput.value.trim()
                    : "";

            if (!email) {

                alert(
                    "Please enter your email."
                );

                return;
            }

            localStorage.setItem(
                "newsletterEmail",
                email
            );

            alert(
                "Thank you for subscribing!"
            );

            form.reset();
        }
    );
}


/* =========================================================
   30. CONTACT FORM
   ========================================================= */

function setupContactForm() {

    const form =
        document.getElementById(
            "contactForm"
        );

    if (!form) {
        return;
    }

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const emailInput =
                form.querySelector(
                    'input[type="email"]'
                );

            if (
                emailInput &&
                !emailInput.value.trim()
            ) {

                alert(
                    "Please enter your email."
                );

                return;
            }

            alert(
                "Thank you! Your message has been received."
            );

            form.reset();
        }
    );
}


/* =========================================================
   31. COUNTRY PERSISTENCE
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
            "customerCountry"
        ) ||
        localStorage.getItem(
            "checkoutCountry"
        );

    if (!savedCountry) {
        return;
    }

    const exists =
        Array.from(
            countrySelect.options
        ).some(
            option =>
                option.value ===
                savedCountry
        );

    if (exists) {

        countrySelect.value =
            savedCountry;
    }
}


/* =========================================================
   32. UPDATE EVERYTHING
   ========================================================= */

function updateEverything() {

    updateCartCount();

    updateStoreCartUI();

    updateCheckout();

    updateCountryError();
}


/* =========================================================
   33. PAGE START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupAddToCartButtons();

        setupCartButton();

        setupCheckoutButton();

        setupSearch();

        setupMobileMenu();

        setupNewsletter();

        setupContactForm();

        setupCheckoutCountry();

        setupCheckoutForm();

        setupSavedCountry();

        updateEverything();

    }
);


/* =========================================================
   34. STORAGE CHANGE
   ========================================================= */

window.addEventListener(
    "storage",
    function () {

        updateCartCount();

        updateStoreCartUI();

        updateCheckout();

    }
);


/* =========================================================
   35. GLOBAL FUNCTIONS
   ========================================================= */

window.addToCart =
    addToCart;

window.removeFromCart =
    removeFromCart;

window.updateCartCount =
    updateCartCount;

window.updateStoreCartUI =
    updateStoreCartUI;

window.updateCheckout =
    updateCheckout;

window.openCart =
    openCart;

window.closeCart =
    closeCart;


/* =========================================================
   END
   ========================================================= */
