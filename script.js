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
   2. CJ SHIPPING RATES
   Customer sees FREE shipping.
   Shipping cost is included in selling price.
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
    "Bolivia": 3.86,
    "Bosnia and Herzegovina": 4.95,
    "Botswana": 3.53,
    "Brazil": 6.05,
    "Brunei Darussalam": 3.14,
    "Bulgaria": 8.74,
    "Burkina Faso": 4.80,
    "Burundi": 3.60,
    "Cambodia": 3.56,
    "Cameroon": 3.35,
    "Canada": 5.31,
    "Cayman Islands": 3.60,
    "Central African Republic": 3.86,
    "Chad": 3.64,
    "Chile": 4.14,
    "China": 3.05,
    "Colombia": 2.85,
    "Comoros": 3.14,
    "Congo": 1.88,
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
    "Fiji": 3.98,
    "Finland": 3.36,
    "France": 5.76,
    "French Guiana": 3.46,
    "French Polynesia": 3.46,
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
    "Guyana": 5.51,
    "Haiti": 3.82,
    "Honduras": 3.82,
    "Hong Kong (China)": 3.92,
    "Hungary": 3.36,
    "Iceland": 3.56,
    "India": 4.01,
    "Indonesia": 3.06,
    "Iran": 3.43,
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
    "South Korea": 3.91,
    "Kuwait": 9.27,
    "Kyrgyzstan": 3.25,
    "Laos": 4.28,
    "Latvia": 7.60,
    "Lebanon": 3.25,
    "Lesotho": 3.86,
    "Liberia": 3.32,
    "Libya": 4.80,
    "Liechtenstein": 7.33,
    "Lithuania": 7.60,
    "Luxembourg": 3.25,
    "Macao (China)": 5.58,
    "North Macedonia": 3.32,
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
    "Moldova": 3.22,
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
    "Rwanda": 3.50,
    "Saint Helena": 5.95,
    "Saint Kitts and Nevis": 3.82,
    "Saint Lucia": 3.53,
    "Saint Martin": 8.11,
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
    "Sint Maarten": 3.86,
    "Slovakia": 8.72,
    "Slovenia": 8.90,
    "Solomon Islands": 4.03,
    "Somalia": 3.86,
    "South Africa": 5.97,
    "South Georgia": 8.19,
    "Spain": 4.87,
    "Sri Lanka": 3.12,
    "Sudan": 4.43,
    "Suriname": 3.86,
    "Eswatini": 3.87,
    "Sweden": 6.74,
    "Switzerland": 6.40,
    "Taiwan": 7.37,
    "Tajikistan": 3.25,
    "Tanzania": 3.46,
    "Thailand": 2.71,
    "Kosovo": 4.25,
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
    "Venezuela": 3.57,
    "Vietnam": 3.02,
    "British Virgin Islands": 3.53,
    "U.S. Virgin Islands": 9.15,
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
    "Micronesia",
    "Palau",
    "South Sudan"
];


/* =========================================================
   4. COUNTRY CURRENCIES
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
    "Brunei Darussalam": "BND",
    "Bulgaria": "BGN",
    "Burkina Faso": "XOF",
    "Burundi": "BIF",
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
    "Ethiopia": "ETB",
    "Fiji": "FJD",
    "Finland": "EUR",
    "France": "EUR",
    "French Guiana": "EUR",
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
    "Guernsey": "GBP",
    "Guinea": "GNF",
    "Guyana": "GYD",
    "Haiti": "HTG",
    "Honduras": "HNL",
    "Hong Kong (China)": "HKD",
    "Hungary": "HUF",
    "Iceland": "ISK",
    "India": "INR",
    "Indonesia": "IDR",
    "Iran": "IRR",
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
    "South Korea": "KRW",
    "Kuwait": "KWD",
    "Kyrgyzstan": "KGS",
    "Laos": "LAK",
    "Latvia": "EUR",
    "Lebanon": "LBP",
    "Lesotho": "LSL",
    "Liberia": "LRD",
    "Libya": "LYD",
    "Liechtenstein": "CHF",
    "Lithuania": "EUR",
    "Luxembourg": "EUR",
    "Macao (China)": "MOP",
    "North Macedonia": "MKD",
    "Madagascar": "MGA",
    "Malawi": "MWK",
    "Malaysia": "MYR",
    "Maldives": "MVR",
    "Mali": "XOF",
    "Malta": "EUR",
    "Marshall Islands": "USD",
    "Martinique": "EUR",
    "Mauritania": "MRU",
    "Mauritius": "MUR",
    "Mayotte": "EUR",
    "Mexico": "MXN",
    "Moldova": "MDL",
    "Monaco": "EUR",
    "Mongolia": "MNT",
    "Montenegro": "EUR",
    "Montserrat": "XCD",
    "Morocco": "MAD",
    "Mozambique": "MZN",
    "Myanmar": "MMK",
    "Namibia": "NAD",
    "Nauru": "AUD",
    "Nepal": "NPR",
    "Netherlands": "EUR",
    "New Caledonia": "XPF",
    "New Zealand": "NZD",
    "Nicaragua": "NIO",
    "Niger": "XOF",
    "Nigeria": "NGN",
    "Niue": "NZD",
    "Norfolk Island": "AUD",
    "Northern Mariana Islands": "USD",
    "Norway": "NOK",
    "Oman": "OMR",
    "Pakistan": "PKR",
    "Panama": "PAB",
    "Papua New Guinea": "PGK",
    "Paraguay": "PYG",
    "Peru": "PEN",
    "Philippines": "PHP",
    "Pitcairn": "NZD",
    "Poland": "PLN",
    "Portugal": "EUR",
    "Puerto Rico": "USD",
    "Qatar": "QAR",
    "Réunion": "EUR",
    "Romania": "RON",
    "Russian Federation": "RUB",
    "Rwanda": "RWF",
    "Saint Helena": "SHP",
    "Saint Kitts and Nevis": "XCD",
    "Saint Lucia": "XCD",
    "Saint Martin": "EUR",
    "Saint Pierre and Miquelon": "EUR",
    "Saint Vincent and the Grenadines": "XCD",
    "Samoa": "WST",
    "San Marino": "EUR",
    "São Tomé and Príncipe": "STN",
    "Saudi Arabia": "SAR",
    "Senegal": "XOF",
    "Serbia": "RSD",
    "Seychelles": "SCR",
    "Sierra Leone": "SLE",
    "Singapore": "SGD",
    "Sint Maarten": "ANG",
    "Slovakia": "EUR",
    "Slovenia": "EUR",
    "Solomon Islands": "SBD",
    "Somalia": "SOS",
    "South Africa": "ZAR",
    "South Georgia": "GBP",
    "Spain": "EUR",
    "Sri Lanka": "LKR",
    "Sudan": "SDG",
    "Suriname": "SRD",
    "Eswatini": "SZL",
    "Sweden": "SEK",
    "Switzerland": "CHF",
    "Taiwan": "TWD",
    "Tajikistan": "TJS",
    "Tanzania": "TZS",
    "Thailand": "THB",
    "Kosovo": "EUR",
    "Timor-Leste": "USD",
    "Togo": "XOF",
    "Tokelau": "NZD",
    "Tonga": "TOP",
    "Trinidad and Tobago": "TTD",
    "Tunisia": "TND",
    "Turkey": "TRY",
    "Turks and Caicos Islands": "USD",
    "Tuvalu": "AUD",
    "Uganda": "UGX",
    "Ukraine": "UAH",
    "United Arab Emirates": "AED",
    "United Kingdom": "GBP",
    "United States": "USD",
    "Uruguay": "UYU",
    "Uzbekistan": "UZS",
    "Vanuatu": "VUV",
    "Venezuela": "VES",
    "Vietnam": "VND",
    "British Virgin Islands": "USD",
    "U.S. Virgin Islands": "USD",
    "Wallis and Futuna": "XPF",
    "Western Sahara": "MAD",
    "Zambia": "ZMW",
    "Zimbabwe": "ZWG"
};


/* =========================================================
   5. FALLBACK EXCHANGE RATES
   ========================================================= */

const fallbackRates = {
    USD: 1,
    INR: 88,
    GBP: 0.74,
    EUR: 0.85,
    AUD: 1.52,
    CAD: 1.38,
    AED: 3.67,
    SAR: 3.75,
    CNY: 7.15,
    JPY: 147,
    KRW: 1390,
    SGD: 1.29,
    MYR: 4.25,
    THB: 32.5,
    VND: 26000,
    IDR: 16500,
    PHP: 58,
    PKR: 285,
    BDT: 122,
    NPR: 140,
    LKR: 305,
    NZD: 1.66,
    CHF: 0.80,
    SEK: 9.30,
    NOK: 10.00,
    DKK: 6.35,
    PLN: 3.65,
    CZK: 21.2,
    HUF: 335,
    RON: 4.35,
    TRY: 41.5,
    ZAR: 17.2,
    BRL: 5.45,
    MXN: 18.8,
    ARS: 1450,
    CLP: 930,
    COP: 3800,
    PEN: 3.55,
    NGN: 1500,
    KES: 129,
    GHS: 11,
    EGP: 48.5,
    MAD: 9.9,
    ILS: 3.35,
    QAR: 3.64,
    KWD: 0.31,
    OMR: 0.385,
    BHD: 0.376,
    JOD: 0.709,
    GEL: 2.70,
    KZT: 540,
    UAH: 41,
    RSD: 100,
    ISK: 123,
    BGN: 1.66,
    ALL: 82,
    DZD: 130,
    AZN: 1.70,
    MDL: 17.2,
    MKD: 52,
    BAM: 1.66,
    XOF: 557,
    XAF: 557,
    XPF: 101.5,
    XCD: 2.70,
    FJD: 2.25,
    WST: 2.80,
    TOP: 2.35,
    PGK: 4.05,
    VUV: 119,
    SBD: 8.10,
    MUR: 45,
    MVR: 15.4,
    SCR: 13.2,
    BWP: 13.5,
    NAD: 17.2,
    LSL: 17.2,
    SZL: 17.2,
    ZMW: 23,
    MWK: 1750,
    UGX: 3600,
    TZS: 2450,
    RWF: 1450,
    GNF: 8600,
    SLE: 23,
    SOS: 570,
    ETB: 145,
    ERN: 15,
    HTG: 130,
    HNL: 26,
    NIO: 36.8,
    DOP: 63,
    BZD: 2,
    BSD: 1,
    BBD: 2,
    BMD: 1,
    KYD: 0.82,
    ANG: 1.79,
    CRC: 500,
    BOB: 6.90,
    PAB: 1,
    PYG: 8000,
    UYU: 40,
    VES: 140,
    MNT: 3550,
    MMK: 2100,
    LAK: 21500,
    KGS: 87,
    TJS: 10.9,
    TND: 2.90,
    LBP: 89500,
    LYD: 5.45,
    MRU: 40,
    STN: 22.5,
    SHP: 0.74,
    GMD: 73,
    GYD: 209,
    JMD: 158,
    TTD: 6.78,
    CUP: 24,
    MOP: 7.99,
    HKD: 7.80,
    TWD: 31.5,
    BTN: 88,
    BND: 1.29,
    KMF: 557,
    GIP: 0.74,
    MGA: 4500,
    MZN: 63,
    NAD: 17.2,
    ZWG: 26
};


/* =========================================================
   6. EXCHANGE RATES
   ========================================================= */

let exchangeRates = {
    ...fallbackRates
};

let usingLiveRates = false;


/* =========================================================
   7. LOAD LIVE EXCHANGE RATES
   ========================================================= */

async function loadExchangeRates() {

    try {

        const controller = new AbortController();

        const timeout = setTimeout(() => {
            controller.abort();
        }, 5000);

        const response = await fetch(
            "https://open.er-api.com/v6/latest/USD",
            {
                signal: controller.signal
            }
        );

        clearTimeout(timeout);

        if (!response.ok) {
            throw new Error("Exchange-rate request failed.");
        }

        const data = await response.json();

        if (
            data &&
            data.result === "success" &&
            data.rates
        ) {

            exchangeRates = {
                ...fallbackRates,
                ...data.rates
            };

            usingLiveRates = true;

            console.log("Sacchi Flyier: live exchange rates loaded.");

        }

    } catch (error) {

        usingLiveRates = false;

        exchangeRates = {
            ...fallbackRates
        };

        console.warn(
            "Sacchi Flyier: using fallback exchange rates."
        );

    }

}


/* =========================================================
   8. CART STORAGE
   ========================================================= */

function getCart() {

    try {

        const savedCart =
            localStorage.getItem("cart");

        if (!savedCart) {
            return [];
        }

        const cart =
            JSON.parse(savedCart);

        if (!Array.isArray(cart)) {
            return [];
        }

        return cart;

    } catch (error) {

        console.error(
            "Sacchi Flyier cart error:",
            error
        );

        return [];

    }

}


function saveCart(cart) {

    try {

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        return true;

    } catch (error) {

        console.error(
            "Could not save cart:",
            error
        );

        return false;

    }

}


/* =========================================================
   9. SHIPPING
   ========================================================= */

function getCountryShipping(country) {

    if (!country) {
        return null;
    }

    return Object.prototype.hasOwnProperty.call(
        shippingRates,
        country
    )
        ? shippingRates[country]
        : null;

}


/* =========================================================
   10. COUNTRY SELLING PRICE
   ========================================================= */

function getUSDPriceForCountry(country) {

    const shipping =
        getCountryShipping(country);

    if (shipping === null) {
        return null;
    }

    /*
       CJ product = $1.62
       CJ shipping = country rate
       Profit = $10
    */

    return (
        PRODUCT_COST_USD +
        shipping +
        PROFIT_USD
    );

}


/* =========================================================
   11. CURRENCY
   ========================================================= */

function getCurrency(country) {

    return countryCurrency[country] || "USD";

}


function convertFromUSD(
    usdAmount,
    currency
) {

    const rate =
        exchangeRates[currency];

    if (
        typeof rate !== "number" ||
        !Number.isFinite(rate) ||
        rate <= 0
    ) {

        return usdAmount;

    }

    return usdAmount * rate;

}


/* =========================================================
   12. CUSTOMER PRICE FORMAT
   ========================================================= */

function formatCustomerPrice(
    usdAmount,
    country
) {

    const currency =
        getCurrency(country);

    const converted =
        convertFromUSD(
            usdAmount,
            currency
        );

    const zeroDecimalCurrencies = [
        "JPY",
        "KRW",
        "VND",
        "CLP",
        "IDR",
        "HUF"
    ];

    const decimals =
        zeroDecimalCurrencies.includes(currency)
            ? 0
            : 2;

    try {

        return new Intl.NumberFormat(
            undefined,
            {
                style: "currency",
                currency: currency,
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            }
        ).format(converted);

    } catch (error) {

        return (
            currency +
            " " +
            converted.toFixed(decimals)
        );

    }

}


/* =========================================================
   13. PRODUCT IDENTIFICATION
   ========================================================= */

function isMainCJProduct(item) {

    if (!item) {
        return false;
    }

    const sku =
        String(
            item.sku ||
            item.SKU ||
            item.productSku ||
            ""
        ).trim().toUpperCase();

    const name =
        String(
            item.name ||
            item.productName ||
            item.title ||
            ""
        ).trim().toLowerCase();

    if (sku === MAIN_PRODUCT_SKU) {
        return true;
    }

    return (
        name.includes("micro inlaid zircon") ||
        name.includes("zircon chain earrings") ||
        name.includes("zircon") &&
        name.includes("earrings")
    );

}


/* =========================================================
   14. ITEM PRICE
   ========================================================= */

function getItemUSDPrice(
    item,
    country
) {

    if (isMainCJProduct(item)) {

        return getUSDPriceForCountry(
            country
        );

    }

    /*
       Other products use their saved
       cart price.
    */

    const storedPrice =
        Number(
            item.price ??
            item.unitPrice ??
            item.productPrice ??
            0
        );

    if (
        !Number.isFinite(storedPrice) ||
        storedPrice < 0
    ) {

        return 0;

    }

    return storedPrice;

}


/* =========================================================
   15. HTML ESCAPE
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
   16. UPDATE CART COUNT
   ========================================================= */

function updateCartCount() {

    const cart =
        getCart();

    const count =
        cart.reduce(
            function(total, item) {

                return total +
                    Math.max(
                        1,
                        Number(item.quantity) || 1
                    );

            },
            0
        );

    const countElement =
        document.getElementById(
            "cartCount"
        );

    if (countElement) {

        countElement.textContent =
            count;

    }

}


/* =========================================================
   17. ADD PRODUCT TO CART
   ========================================================= */

function addToCart(product) {

    if (!product) {
        return;
    }

    const cart =
        getCart();

    const productName =
        String(
            product.name ||
            product.productName ||
            product.title ||
            "Product"
        );

    const productSKU =
        String(
            product.sku ||
            product.SKU ||
            ""
        );

    const existing =
        cart.find(function(item) {

            if (
                productSKU &&
                item.sku &&
                item.sku === productSKU
            ) {
                return true;
            }

            return (
                item.name === productName
            );

        });


    if (existing) {

        existing.quantity =
            Math.max(
                1,
                Number(existing.quantity) || 1
            ) + 1;

        /*
           Make sure the CJ SKU is retained.
        */

        if (
            productSKU &&
            !existing.sku
        ) {

            existing.sku =
                productSKU;

        }

    } else {

        cart.push({

            name: productName,

            price:
                Number(product.price) || 0,

            quantity: 1,

            sku: productSKU,

            image:
                product.image ||
                "",

            productUrl:
                product.productUrl ||
                ""

        });

    }


    saveCart(cart);

    updateCartCount();

    updateStoreCartUI();

    /*
       Small confirmation.
    */

    console.log(
        "Added to cart:",
        productName
    );

}


/* =========================================================
   18. STORE ADD-TO-CART BUTTONS
   ========================================================= */

function setupAddToCartButtons() {

    const buttons =
        document.querySelectorAll(
            ".add-cart"
        );

    if (!buttons.length) {
        return;
    }

    buttons.forEach(function(button) {

        /*
           Prevent duplicate event listeners.
        */

        if (
            button.dataset.cartReady === "true"
        ) {
            return;
        }

        button.dataset.cartReady = "true";


        button.addEventListener(
            "click",
            function(event) {

                event.preventDefault();
                event.stopPropagation();


                const productName =
                    button.dataset.product ||
                    button.dataset.name ||
                    button.getAttribute(
                        "data-product"
                    ) ||
                    "Product";


                const productPrice =
                    Number(
                        button.dataset.price ||
                        button.getAttribute(
                            "data-price"
                        ) ||
                        0
                    );


                const productSKU =
                    button.dataset.sku ||
                    button.dataset.SKU ||
                    button.getAttribute(
                        "data-sku"
                    ) ||
                    "";


                const productImage =
                    button.dataset.image ||
                    button.getAttribute(
                        "data-image"
                    ) ||
                    "";


                /*
                   If this is your real CJ earrings
                   product, automatically attach
                   the correct CJ SKU.
                */

                const lowerName =
                    productName.toLowerCase();


                const finalSKU =
                    productSKU ||
                    (
                        lowerName.includes("zircon") &&
                        lowerName.includes("earring")
                            ? MAIN_PRODUCT_SKU
                            : ""
                    );


                const product = {

                    name:
                        productName,

                    price:
                        productPrice,

                    sku:
                        finalSKU,

                    image:
                        productImage

                };


                addToCart(product);


                /*
                   Open existing cart panel if
                   your index.html has one.
                */

                const cartPanel =
                    document.getElementById(
                        "cartPanel"
                    );

                if (cartPanel) {

                    cartPanel.classList.add(
                        "active"
                    );

                }

            }
        );

    });

}


/* =========================================================
   19. STORE CART UI
   ========================================================= */

function updateStoreCartUI() {

    const cart = getCart();

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                Your cart is empty.
            </div>
        `;

        if (cartTotal) {
            cartTotal.textContent = "$0.00";
        }

        updateCartCount();
        return;
    }

    let total = 0;

    cart.forEach(function(item, index) {

        const quantity = Number(item.quantity) || 1;

        /*
         * CJ PRODUCT PRICE
         */
        const productCost = 1.62;

        /*
         * PROFIT
         */
        const profit = 10.00;

        /*
         * Use the customer's selected country
         * from checkout.
         */
        const country =
            localStorage.getItem("checkoutCountry") || "India";

        /*
         * CJ SHIPPING COST
         */
        const shipping =
            Number(shippingRates[country]) || 0;

        /*
         * CUSTOMER PRICE
         */
        const priceUSD =
            productCost + shipping + profit;

        const itemTotal =
            priceUSD * quantity;

        total += itemTotal;

        const itemHTML = document.createElement("div");

        itemHTML.className = "cart-item";

        itemHTML.innerHTML = `
            <strong>${escapeHTML(item.name)}</strong>

            <div>Qty: ${quantity}</div>

            <div>
                $${priceUSD.toFixed(2)}
            </div>

            <button
                type="button"
                onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(itemHTML);
    });

    if (cartTotal) {
        cartTotal.textContent =
            "$" + total.toFixed(2);
    }

    updateCartCount();
}


function removeFromCart(index) {

    const cart = getCart();

    cart.splice(index, 1);

    saveCart(cart);

    updateStoreCartUI();

    updateCheckout();
}


/* =========================================================
   20. CHECKOUT UPDATE
   ========================================================= */

function updateCheckout() {

    const cart = getCart();

    const itemsElement = document.getElementById("checkoutItems");
    const subtotalElement = document.getElementById("checkoutSubtotal");
    const shippingElement = document.getElementById("checkoutShipping");
    const totalElement = document.getElementById("checkoutTotal");
    const currencyElement = document.getElementById("checkoutCurrency");
    const countryElement = document.getElementById("checkoutCountry");

    if (!itemsElement) return;

    // Get customer country
    const country = countryElement
        ? countryElement.value
        : "India";

    // Customer currency
    const currency =
        countryCurrency[country] || "USD";

    if (currencyElement) {
        currencyElement.textContent = currency;
    }

    // Empty cart
    if (!cart || cart.length === 0) {

        itemsElement.textContent = "Your cart is empty.";

        if (subtotalElement) {
            subtotalElement.textContent = "$0.00";
        }

        if (shippingElement) {
            shippingElement.textContent = "FREE";
        }

        if (totalElement) {
            totalElement.textContent = "$0.00";
        }

        return;
    }

    let totalUSD = 0;

    // Show cart products
    itemsElement.innerHTML = "";

    cart.forEach(function(item) {

        const quantity =
            Number(item.quantity) || 1;

        const shipping =
            Number(shippingRates[country]) || 0;

        // $1.62 CJ cost + country shipping + $10 profit
        const priceUSD =
            1.62 + shipping + 10;

        const itemTotal =
            priceUSD * quantity;

        totalUSD += itemTotal;

        const div = document.createElement("div");

        div.innerHTML = `
            <strong>${escapeHTML(item.name)}</strong>
            <div>Qty: ${quantity}</div>
            <div>Price: $${priceUSD.toFixed(2)}</div>
        `;

        itemsElement.appendChild(div);
    });

    // Show USD for now
    // Currency conversion will be applied by your existing
    // exchange-rate system.
    if (subtotalElement) {
        subtotalElement.textContent =
            "$" + totalUSD.toFixed(2);
    }

    if (shippingElement) {
        shippingElement.textContent = "FREE";
    }

    if (totalElement) {
        totalElement.textContent =
            "$" + totalUSD.toFixed(2);
    }
}


    /* -----------------------------------------
       EMPTY CART
    ----------------------------------------- */

    if (!cart.length) {

        if (itemsElement) {

            itemsElement.innerHTML = `
                <div class="empty-cart">
                    Your cart is empty.
                </div>
            `;

        }

        if (currencyElement) {
            currencyElement.textContent = "—";
        }

        if (subtotalElement) {
            subtotalElement.textContent = "—";
        }

        if (shippingElement) {
            shippingElement.textContent = "—";
        }

        if (totalElement) {
            totalElement.textContent = "—";
        }

        if (placeOrderButton) {
            placeOrderButton.disabled = true;
        }

        return;

    }


    /* -----------------------------------------
       COUNTRY NOT SELECTED
    ----------------------------------------- */

    if (!country) {

        if (itemsElement) {

            itemsElement.innerHTML = `
                <div class="empty-cart">
                    Select your country to see your price.
                </div>
            `;

        }

        if (currencyElement) {
            currencyElement.textContent = "—";
        }

        if (subtotalElement) {
            subtotalElement.textContent = "—";
        }

        if (shippingElement) {
            shippingElement.textContent = "—";
        }

        if (totalElement) {
            totalElement.textContent = "—";
        }

        if (placeOrderButton) {
            placeOrderButton.disabled = true;
        }

        return;

    }


    /* -----------------------------------------
       BLOCKED COUNTRY
    ----------------------------------------- */

    if (
        blockedCountries.includes(country)
    ) {

        showCountryError(
            "Shipping is currently unavailable for this country."
        );

        if (itemsElement) {

            itemsElement.innerHTML = `
                <div class="empty-cart">
                    Shipping is currently unavailable
                    for this country.
                </div>
            `;

        }

        if (currencyElement) {
            currencyElement.textContent = "—";
        }

        if (subtotalElement) {
            subtotalElement.textContent = "—";
        }

        if (shippingElement) {
            shippingElement.textContent = "Unavailable";
        }

        if (totalElement) {
            totalElement.textContent = "—";
        }

        if (placeOrderButton) {
            placeOrderButton.disabled = true;
        }

        return;

    }


    /* -----------------------------------------
       SHIPPING RATE CHECK
    ----------------------------------------- */

    const shipping =
        getCountryShipping(country);


    if (shipping === null) {

        showCountryError(
            "Shipping is currently unavailable for this country."
        );

        if (itemsElement) {

            itemsElement.innerHTML = `
                <div class="empty-cart">
                    Shipping is currently unavailable
                    for this country.
                </div>
            `;

        }

        if (currencyElement) {
            currencyElement.textContent = "—";
        }

        if (subtotalElement) {
            subtotalElement.textContent = "—";
        }

        if (shippingElement) {
            shippingElement.textContent = "Unavailable";
        }

        if (totalElement) {
            totalElement.textContent = "—";
        }

        if (placeOrderButton) {
            placeOrderButton.disabled = true;
        }

        return;

    }


    hideCountryError();


    /* -----------------------------------------
       CURRENCY
    ----------------------------------------- */

    const currency =
        getCurrency(country);


    if (currencyElement) {

        currencyElement.textContent =
            currency;

    }


    /* -----------------------------------------
       CALCULATE CART
    ----------------------------------------- */

    let subtotalUSD = 0;

    if (itemsElement) {
        itemsElement.innerHTML = "";
    }


    cart.forEach(function(item) {

        const quantity =
            Math.max(
                1,
                Number(item.quantity) || 1
            );


        const unitPriceUSD =
            getItemUSDPrice(
                item,
                country
            );


        if (
            unitPriceUSD === null ||
            !Number.isFinite(unitPriceUSD)
        ) {
            return;
        }


        const itemTotalUSD =
            unitPriceUSD * quantity;


        subtotalUSD +=
            itemTotalUSD;


        const displayPrice =
            formatCustomerPrice(
                itemTotalUSD,
                country
            );


        const itemName =
            item.name ||
            item.productName ||
            "Product";


        if (itemsElement) {

            const itemHTML =
                document.createElement(
                    "div"
                );

            itemHTML.className =
                "summary-item";


            itemHTML.innerHTML = `
                <span class="summary-item-name">
                    ${escapeHTML(itemName)}
                    × ${quantity}
                </span>

                <span class="summary-item-price">
                    ${displayPrice}
                </span>
            `;


            itemsElement.appendChild(
                itemHTML
            );

        }

    });


    /* -----------------------------------------
       TOTAL
    ----------------------------------------- */

    const totalDisplay =
        formatCustomerPrice(
            subtotalUSD,
            country
        );


    if (subtotalElement) {

        subtotalElement.textContent =
            totalDisplay;

    }


    /*
       Shipping is already included
       in the product price.
    */

    if (shippingElement) {

        shippingElement.textContent =
            "FREE";

    }


    if (totalElement) {

        totalElement.textContent =
            totalDisplay;

    }


    if (placeOrderButton) {

        placeOrderButton.disabled =
            subtotalUSD <= 0;

    }

}


/* =========================================================
   21. COUNTRY ERROR
   ========================================================= */

function showCountryError(message) {

    const error =
        document.getElementById(
            "countryError"
        );

    if (!error) {
        return;
    }

    error.textContent =
        message;

    error.style.display =
        "block";

}


function hideCountryError() {

    const error =
        document.getElementById(
            "countryError"
        );

    if (!error) {
        return;
    }

    error.textContent = "";

    error.style.display =
        "none";

}


/* =========================================================
   22. DEFAULT COUNTRY
   ========================================================= */

function setDefaultCountry() {

    const countryElement =
        document.getElementById(
            "checkoutCountry"
        );

    if (!countryElement) {
        return;
    }


    if (!countryElement.value) {

        const indiaOption =
            Array.from(
                countryElement.options
            ).find(function(option) {

                return option.value === "India";

            });


        if (indiaOption) {

            countryElement.value =
                "India";

        }

    }

}


/* =========================================================
   23. COUNTRY CHANGE
   ========================================================= */

function setupCountryChange() {

    const countryElement =
        document.getElementById(
            "checkoutCountry"
        );

    if (!countryElement) {
        return;
    }


    if (
        countryElement.dataset.ready === "true"
    ) {
        return;
    }


    countryElement.dataset.ready =
        "true";


    countryElement.addEventListener(
        "change",
        function() {

            updateCheckout();

        }
    );

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


    if (
        form.dataset.ready === "true"
    ) {
        return;
    }


    form.dataset.ready =
        "true";


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const countryElement =
                document.getElementById(
                    "checkoutCountry"
                );


            const country =
                countryElement
                    ? countryElement.value
                    : "";


            if (!country) {

                alert(
                    "Please select your country."
                );

                return;

            }


            if (
                blockedCountries.includes(
                    country
                )
            ) {

                alert(
                    "Sorry, we currently do not ship to this country."
                );

                return;

            }


            if (
                getCountryShipping(country) === null
            ) {

                alert(
                    "Shipping is currently unavailable for this country."
                );

                return;

            }


            const cart =
                getCart();


            if (!cart.length) {

                alert(
                    "Your cart is empty. Please add a product first."
                );

                return;

            }


            const formData =
                new FormData(form);


            const orderData = {

                name:
                    formData.get("name") || "",

                email:
                    formData.get("email") || "",

                countryCode:
                    formData.get("countryCode") || "",

                phone:
                    formData.get("phone") || "",

                address:
                    formData.get("address") || "",

                city:
                    formData.get("city") || "",

                state:
                    formData.get("state") || "",

                country:
                    country,

                postalCode:
                    formData.get("postalCode") || "",

                paymentMethod:
                    formData.get("paymentMethod") || "cod",

                currency:
                    getCurrency(country),

                shipping:
                    "FREE",

                cart:
                    cart,

                createdAt:
                    new Date().toISOString()

            };


            /*
               Calculate final total in USD
               for internal order records.
            */

            let totalUSD = 0;


            cart.forEach(function(item) {

                const quantity =
                    Math.max(
                        1,
                        Number(item.quantity) || 1
                    );


                const price =
                    getItemUSDPrice(
                        item,
                        country
                    );


                if (
                    price !== null &&
                    Number.isFinite(price)
                ) {

                    totalUSD +=
                        price * quantity;

                }

            });


            orderData.totalUSD =
                Number(
                    totalUSD.toFixed(2)
                );


            orderData.customerTotal =
                formatCustomerPrice(
                    totalUSD,
                    country
                );


            localStorage.setItem(
                "pendingOrder",
                JSON.stringify(
                    orderData
                )
            );


            /*
               At this stage the order information
               is saved locally.

               Payment gateway/backend can be
               connected afterward.
            */

            alert(
                "Your order information has been saved successfully."
            );


            console.log(
                "Pending order:",
                orderData
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
        cartPanel &&
        cartButton.dataset.ready !== "true"
    ) {

        cartButton.dataset.ready =
            "true";


        cartButton.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                cartPanel.classList.add(
                    "active"
                );

                updateStoreCartUI();

            }
        );

    }


    if (
        closeCart &&
        cartPanel &&
        closeCart.dataset.ready !== "true"
    ) {

        closeCart.dataset.ready =
            "true";


        closeCart.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                cartPanel.classList.remove(
                    "active"
                );

            }
        );

    }

}


/* =========================================================
   26. CHECKOUT BUTTON FROM CART
   ========================================================= */

function setupCheckoutButton() {

    const checkoutButton =
        document.getElementById(
            "checkoutButton"
        );


    if (
        !checkoutButton ||
        checkoutButton.dataset.ready === "true"
    ) {
        return;
    }


    checkoutButton.dataset.ready =
        "true";


    checkoutButton.addEventListener(
        "click",
        function(event) {

            event.preventDefault();


            const cart =
                getCart();


            if (!cart.length) {

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
        searchOverlay &&
        searchButton.dataset.ready !== "true"
    ) {

        searchButton.dataset.ready =
            "true";


        searchButton.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                searchOverlay.classList.add(
                    "active"
                );


                if (searchInput) {

                    setTimeout(
                        function() {

                            searchInput.focus();

                        },
                        100
                    );

                }

            }
        );

    }


    if (
        closeSearch &&
        searchOverlay &&
        closeSearch.dataset.ready !== "true"
    ) {

        closeSearch.dataset.ready =
            "true";


        closeSearch.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                searchOverlay.classList.remove(
                    "active"
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
        !navLinks ||
        menuToggle.dataset.ready === "true"
    ) {
        return;
    }


    menuToggle.dataset.ready =
        "true";


    menuToggle.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            navLinks.classList.toggle(
                "active"
            );

        }
    );

}


/* =========================================================
   29. START EVERYTHING
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "Sacchi Flyier JavaScript loaded."
        );


        /*
           IMPORTANT:
           Do NOT wait for exchange rates
           before starting checkout.
        */

        setDefaultCountry();

        setupCountryChange();

        setupCheckoutForm();

        setupAddToCartButtons();

        setupCartButton();

        setupCheckoutButton();

        setupSearch();

        setupMobileMenu();

        updateCartCount();

        detectCustomerCountry();
       
        updateStoreCartUI();

        updateCheckout();


        /*
           Load live rates in background.
           Once loaded, refresh checkout.
        */

        loadExchangeRates()
            .then(function() {

                updateCheckout();

            })
            .catch(function(error) {

                console.warn(
                    "Exchange-rate loading finished with an error.",
                    error
                );

                updateCheckout();

            });

    }
);
