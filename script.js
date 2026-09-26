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
    "Estonia": 7.60,
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
    "Guatemala": 3.61,
    "Guernsey": 7.81,
    "Guinea": 4.43,
    "Guyana": 5.51,
    "Haiti": 3.82,
    "Heard Island and McDonald Islands": 9.00,
    "Honduras": 3.82,
    "Hong Kong (China)": 3.92,
    "Hungary": 3.36,
    "Iceland": 3.56,
    "India": 4.01,
    "Indonesia": 3.06,
    "Iran (Islamic Republic of)": 3.43,
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
    "Korea (the Democratic People’s Republic of)": 137.03,
    "Korea": 3.91,
    "Kuwait": 9.27,
    "Kyrgyzstan": 3.25,
    "Lao People’s Democratic Republic": 4.28,
    "Latvia": 7.60,
    "Lebanon": 3.25,
    "Lesotho": 3.86,
    "Liberia": 3.32,
    "Libya": 4.80,
    "Liechtenstein": 7.33,
    "Lithuania": 7.60,
    "Luxembourg": 3.25,
    "Macao (China)": 5.58,
    "Macedonia (the former Yugoslav Republic of)": 3.32,
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
    "Moldova (the Republic of)": 3.22,
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
    "Northern Mariana Islands": 9.15,
    "Norway": 5.94,
    "Oman": 4.17,
    "Pakistan": 2.94,
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
    "Russia": 4.36,
    "Rwanda": 3.50,
    "Saint Helena, Ascension and Tristan da Cunha": 5.95,
    "Saint Kitts and Nevis": 3.82,
    "Saint Lucia": 3.53,
    "Saint Martin (French part)": 8.11,
    "Saint Pierre and Miquelon": 6.10,
    "Saint Vincent and the Grenadines": 3.82,
    "Samoa": 4.04,
    "San Marino": 4.94,
    "São Tomé and Príncipe": 3.86,
    "Saudi Arabia": 4.32,
    "Senegal": 3.37,
    "Serbia": 3.18,
    "Seychelles": 3.21,
    "Sierra Leone": 3.86,
    "Singapore": 3.93,
    "Sint Maarten (Dutch part)": 3.86,
    "Slovakia": 8.72,
    "Slovenia": 8.90,
    "Solomon Islands": 4.03,
    "Somalia": 3.86,
    "South Africa": 5.97,
    "South Georgia and the South Sandwich Islands": 8.19,
    "Spain": 4.87,
    "Sri Lanka": 3.12,
    "Sudan": 4.43,
    "Suriname": 3.86,
    "Eswatini": 3.87,
    "Sweden": 6.74,
    "Switzerland": 6.40,
    "Taiwan (Province of China)": 7.37,
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
    "Zambia": 3.46,
    "Zimbabwe": 4.01
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
    "South Sudan",
    "Holy See"
];


/* =========================================================
   4. COUNTRY CURRENCY
   ========================================================= */

const countryCurrencySymbols = {
    "Afghanistan": "؋",
    "Albania": "Lek",
    "Algeria": "دج",
    "American Samoa": "$",
    "Andorra": "€",
    "Angola": "Kz",
    "Anguilla": "$",
    "Antigua and Barbuda": "$",
    "Argentina": "$",
    "Armenia": "֏",
    "Aruba": "ƒ",
    "Australia": "$",
    "Austria": "€",
    "Azerbaijan": "₼",
    "Bahamas": "$",
    "Bahrain": ".د.ب",
    "Bangladesh": "৳",
    "Barbados": "$",
    "Belarus": "Br",
    "Belgium": "€",
    "Belize": "BZ$",
    "Benin": "CFA",
    "Bermuda": "$",
    "Bhutan": "Nu.",
    "Bolivia (Plurinational State of)": "Bs.",
    "Bonaire, Sint Eustatius and Saba": "$",
    "Bosnia and Herzegovina": "KM",
    "Botswana": "P",
    "Bouvet Island": "kr",
    "Brazil": "R$",
    "British Indian Ocean Territory": "$",
    "Brunei Darussalam": "$",
    "Bulgaria": "лв",
    "Burkina Faso": "CFA",
    "Burundi": "FBu",
    "Cabo Verde": "$",
    "Cambodia": "៛",
    "Cameroon": "FCFA",
    "Canada": "$",
    "Cayman Islands": "$",
    "Central African Republic": "FCFA",
    "Chad": "FCFA",
    "Chile": "$",
    "China": "¥",
    "Christmas Island": "$",
    "Cocos (Keeling) Islands": "$",
    "Colombia": "$",
    "Comoros": "CF",
    "Congo (the Democratic Republic of the)": "FC",
    "Congo": "FCFA",
    "Cook Islands": "$",
    "Costa Rica": "₡",
    "Côte d’Ivoire": "CFA",
    "Croatia": "€",
    "Cuba": "$",
    "Curaçao": "ƒ",
    "Cyprus": "€",
    "Czechia": "Kč",
    "Denmark": "kr",
    "Djibouti": "Fdj",
    "Dominica": "$",
    "Dominican Republic": "RD$",
    "Ecuador": "$",
    "Egypt": "£",
    "El Salvador": "$",
    "Equatorial Guinea": "FCFA",
    "Eritrea": "Nfk",
    "Estonia": "€",
    "Ethiopia": "Br",
    "Falkland Islands": "£",
    "Faroe Islands": "kr",
    "Fiji": "$",
    "Finland": "€",
    "France": "€",
    "French Guiana": "€",
    "French Polynesia": "₣",
    "French Southern Territories": "€",
    "Gabon": "FCFA",
    "Gambia": "D",
    "Georgia": "₾",
    "Germany": "€",
    "Ghana": "₵",
    "Gibraltar": "£",
    "Greece": "€",
    "Greenland": "kr",
    "Grenada": "$",
    "Guadeloupe": "€",
    "Guam": "$",
    "Guatemala": "Q",
    "Guernsey": "£",
    "Guinea": "FG",
    "Guyana": "$",
    "Haiti": "G",
    "Hawaii": "",
    "Heard Island and McDonald Islands": "$",
    "Honduras": "L",
    "Hong Kong (China)": "$",
    "Hungary": "Ft",
    "Iceland": "kr",
    "India": "₹",
    "Indonesia": "Rp",
    "Iran (Islamic Republic of)": "﷼",
    "Ireland": "€",
    "Isle of Man": "£",
    "Israel": "₪",
    "Italy": "€",
    "Jamaica": "J$",
    "Japan": "¥",
    "Jersey": "£",
    "Jordan": "د.ا",
    "Kazakhstan": "₸",
    "Kenya": "KSh",
    "Kiribati": "$",
    "Korea": "₩",
    "Kuwait": "د.ك",
    "Kyrgyzstan": "с",
    "Lao People’s Democratic Republic": "₭",
    "Latvia": "€",
    "Lebanon": "£",
    "Lesotho": "L",
    "Liberia": "$",
    "Libya": "ل.د",
    "Liechtenstein": "CHF",
    "Lithuania": "€",
    "Luxembourg": "€",
    "Macao (China)": "MOP$",
    "Macedonia (the former Yugoslav Republic of)": "ден",
    "Madagascar": "Ar",
    "Malawi": "MK",
    "Malaysia": "RM",
    "Maldives": "Rf",
    "Mali": "CFA",
    "Malta": "€",
    "Marshall Islands": "$",
    "Martinique": "€",
    "Mauritania": "UM",
    "Mauritius": "₨",
    "Mayotte": "€",
    "Mexico": "$",
    "Moldova (the Republic of)": "L",
    "Monaco": "€",
    "Mongolia": "₮",
    "Montenegro": "€",
    "Montserrat": "$",
    "Morocco": "د.م.",
    "Mozambique": "MT",
    "Myanmar": "K",
    "Namibia": "$",
    "Nauru": "$",
    "Nepal": "₨",
    "Netherlands": "€",
    "New Caledonia": "₣",
    "New Zealand": "$",
    "Nicaragua": "C$",
    "Niger": "CFA",
    "Nigeria": "₦",
    "Niue": "$",
    "Norfolk Island": "$",
    "Northern Mariana Islands": "$",
    "Norway": "kr",
    "Oman": "﷼",
    "Pakistan": "₨",
    "Panama": "B/.",
    "Papua New Guinea": "K",
    "Paraguay": "₲",
    "Peru": "S/",
    "Philippines": "₱",
    "Pitcairn": "NZ$",
    "Poland": "zł",
    "Portugal": "€",
    "Puerto Rico": "$",
    "Qatar": "﷼",
    "Réunion": "€",
    "Romania": "lei",
    "Russia": "₽",
    "Russian Federation": "₽",
    "Rwanda": "FRw",
    "Saint Helena, Ascension and Tristan da Cunha": "£",
    "Saint Kitts and Nevis": "$",
    "Saint Lucia": "$",
    "Saint Martin (French part)": "€",
    "Saint Pierre and Miquelon": "€",
    "Saint Vincent and the Grenadines": "$",
    "Samoa": "T",
    "San Marino": "€",
    "São Tomé and Príncipe": "Db",
    "Saudi Arabia": "﷼",
    "Senegal": "CFA",
    "Serbia": "Дин.",
    "Seychelles": "₨",
    "Sierra Leone": "Le",
    "Singapore": "$",
    "Sint Maarten (Dutch part)": "ƒ",
    "Slovakia": "€",
    "Slovenia": "€",
    "Solomon Islands": "$",
    "Somalia": "S",
    "South Africa": "R",
    "South Georgia and the South Sandwich Islands": "£",
    "Spain": "€",
    "Sri Lanka": "₨",
    "Sudan": "ج.س.",
    "Suriname": "$",
    "Eswatini": "L",
    "Sweden": "kr",
    "Switzerland": "CHF",
    "Taiwan": "NT$",
    "Taiwan (Province of China)": "NT$",
    "Tajikistan": "SM",
    "Tanzania, United Republic of": "TSh",
    "Thailand": "฿",
    "The Republic of Kosovo": "€",
    "Timor-Leste": "$",
    "Togo": "CFA",
    "Tokelau": "NZ$",
    "Tonga": "T$",
    "Trinidad and Tobago": "TT$",
    "Tunisia": "د.ت",
    "Turkey": "₺",
    "Turks and Caicos Islands": "$",
    "Tuvalu": "$",
    "Uganda": "USh",
    "Ukraine": "₴",
    "United Arab Emirates": "د.إ",
    "United Kingdom": "£",
    "United States": "$",
    "Uruguay": "$U",
    "Uzbekistan": "лв",
    "Vanuatu": "VT",
    "Venezuela (Bolivarian Republic of)": "Bs.",
    "Vietnam": "₫",
    "Virgin Islands (British)": "$",
    "Virgin Islands (U.S.)": "$",
    "Wallis and Futuna": "₣",
    "Western Sahara": "د.م.",
    "Zambia": "ZK",
    "Zimbabwe": "$"
};

/* =========================================================
   5. FALLBACK EXCHANGE RATES
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

function getProductCost(item) {

    const sku = getProductSKU(item);

    /* PRODUCT 1 */
    if (sku === MAIN_PRODUCT_SKU) {
        return PRODUCT_COST_USD;
    }

    /* PRODUCT 2 */
    if (sku === "CJYD268159623WD") {
        return 6.14;
    }

    /* OTHER PRODUCTS */
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

    if (
        Object.prototype.hasOwnProperty.call(
            shippingRates,
            country
        )
    ) {
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

    const rate =
        exchangeRates[currency] || 1;

    return amountUSD * rate;
}


function formatMoney(amount, currency) {

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
            "COP"
        ].includes(currency)
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

    const cartPanel =
        document.getElementById("cartPanel");

    if (cartPanel) {

        cartPanel.classList.add("active");

    }
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
                formatMoney(
                    0,
                    currency
                );
        }

        return;
    }

    let totalUSD = 0;

    cart.forEach((item, index) => {

        const quantity =
            Number(item.quantity || 1);

        const itemPrice =
            getItemUSDPrice(
                item,
                country
            );

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

                <strong>
                    ${escapeHTML(item.name)}
                </strong>

                <div class="cart-quantity">

                    <span>Qty:</span>

                    <button
                        type="button"
                        class="quantity-minus"
                        data-index="${index}"
                        aria-label="Decrease quantity"
                    >
                        −
                    </button>

                    <span class="quantity-number">
                        ${quantity}
                    </span>

                    <button
                        type="button"
                        class="quantity-plus"
                        data-index="${index}"
                        aria-label="Increase quantity"
                    >
                        +
                    </button>

                </div>

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

        cartItems.appendChild(
            itemElement
        );
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
                        Number(
                            this.dataset.index
                        );

                    const updatedCart =
                        getCart();

                    updatedCart.splice(
                        index,
                        1
                    );

                    saveCart(
                        updatedCart
                    );

                    updateStoreCartUI();

                    updateCartCount();
                }
            );
        });
}


/* =========================================================
   CART QUANTITY + / -
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const minusButton =
            event.target.closest(
                ".quantity-minus"
            );

        const plusButton =
            event.target.closest(
                ".quantity-plus"
            );

        if (
            !minusButton &&
            !plusButton
        ) {
            return;
        }

        const button =
            minusButton || plusButton;

        const index =
            Number(
                button.dataset.index
            );

        if (
            !Number.isInteger(index)
        ) {
            return;
        }

        const cart =
            getCart();

        if (!cart[index]) {
            return;
        }

        let quantity =
            Number(
                cart[index].quantity || 1
            );

        if (minusButton) {

            quantity--;
        }

        if (plusButton) {

            quantity++;
        }

        /* Minimum quantity = 1 */

        quantity =
            Math.max(
                1,
                quantity
            );

        cart[index].quantity =
            quantity;

        saveCart(cart);

        updateStoreCartUI();

        updateCartCount();
    }
);


/* =========================================================
   15. CHECKOUT
   ========================================================= */

function updateCheckout() {

    const checkoutItems =
        document.getElementById(
            "checkoutItems"
        );

    const subtotalElement =
        document.getElementById(
            "checkoutSubtotal"
        );

    const shippingElement =
        document.getElementById(
            "checkoutShipping"
        );

    const totalElement =
        document.getElementById(
            "checkoutTotal"
        );

    const currencyElement =
        document.getElementById(
            "checkoutCurrency"
        );

    const placeOrderButton =
        document.getElementById(
            "placeOrderButton"
        );

    const countryError =
        document.getElementById(
            "countryError"
        );

    const countrySelect =
        document.getElementById(
            "checkoutCountry"
        );

    if (!checkoutItems) {
        return;
    }

    const cart =
        getCart();

    let country =
        countrySelect?.value ||
        getSelectedCountry();

    if (
        countrySelect &&
        country
    ) {
        countrySelect.value =
            country;
    }

    const currency =
        getCurrency(country);

    if (currencyElement) {

        currencyElement.textContent =
            currency;
    }

    checkoutItems.innerHTML = "";

    if (placeOrderButton) {

        placeOrderButton.disabled =
            true;
    }

    if (countryError) {

        countryError.style.display =
            "none";

        countryError.textContent =
            "";
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

    if (
        isCountryBlocked(country)
    ) {

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

        subtotalUSD +=
            itemTotal;

        const row =
            document.createElement(
                "div"
            );

        row.className =
            "summary-item";

        row.innerHTML = `

            <span class="summary-item-name">

                ${escapeHTML(
                    item.name
                )}

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

        checkoutItems.appendChild(
            row
        );
    });

    if (shippingElement) {

        shippingElement.textContent =
            "FREE";
    }

    setCheckoutTotals(
        subtotalUSD,
        currency
    );

    if (placeOrderButton) {

        placeOrderButton.disabled =
            false;
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
        document.getElementById(
            "checkoutSubtotal"
        );

    const totalElement =
        document.getElementById(
            "checkoutTotal"
        );

    const shippingElement =
        document.getElementById(
            "checkoutShipping"
        );

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

                    country:
                        country,

                    postalCode:
                        document.getElementById(
                            "checkoutPostalCode"
                        )?.value.trim()
                },

                paymentMethod:
                    paymentMethod,

                items:
                    cart,

                currency:
                    getCurrency(country),

                createdAt:
                    new Date().toISOString()
            };

            localStorage.setItem(
                "lastOrder",
                JSON.stringify(order)
            );

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
                    () =>
                        searchInput?.focus(),
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


/* ================= PRODUCT IMAGE GALLERY ================= */

function changeProductImage(
    imageSrc,
    thumbnail
) {

    const mainImage =
        document.getElementById(
            "mainProductImage"
        );

    if (!mainImage) {
        return;
    }

    mainImage.src =
        imageSrc;

    document
        .querySelectorAll(
            ".product-thumbnail"
        )
        .forEach(
            function (button) {

                button.classList.remove(
                    "active"
                );
            }
        );

    thumbnail.classList.add(
        "active"
    );
}
g
