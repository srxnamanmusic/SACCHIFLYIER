/* =========================================================
   SACCHI FLYIER
   NEW CART + CHECKOUT + COUNTRY PRICE SYSTEM
   ========================================================= */


/* =========================================================
   1. PRODUCT SETTINGS
   ========================================================= */

const PRODUCT_COST_USD = 1.62;
const PROFIT_USD = 10.00;


/* =========================================================
   2. CJ SHIPPING RATES
   Shipping is used internally.
   Customer sees FREE shipping.
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
   3. COUNTRIES WE DO NOT SHIP TO
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
   4. CURRENCY FOR EACH COUNTRY
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
    "Costa Rica": "CRC",
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
   Used if live exchange-rate service is unavailable.
   These are approximate backup rates.
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
    GHS: 11.0,
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
    SBD: 8.10,
    GMD: 73,
    GYD: 209,
    JMD: 158,
    TTD: 6.78,
    CUP: 24,
    MOP: 7.99,
    HKD: 7.80,
    TWD: 31.5,
    MOP: 7.99

};


/* =========================================================
   6. LIVE EXCHANGE RATES
   ========================================================= */

let exchangeRates = {
    ...fallbackRates
};

let usingLiveRates = false;


/* =========================================================
   7. GET LIVE USD EXCHANGE RATES
   ========================================================= */

async function loadExchangeRates() {

    try {

        const response = await fetch(
            "https://open.er-api.com/v6/latest/USD"
        );

        if (!response.ok) {
            throw new Error("Exchange rate request failed.");
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

            console.log("Live exchange rates loaded.");

        }

    } catch (error) {

        console.warn(
            "Live exchange rates unavailable. Using fallback rates."
        );

        exchangeRates = {
            ...fallbackRates
        };

    }

}


/* =========================================================
   8. CART
   ========================================================= */

function getCart() {

    try {

        const savedCart =
            localStorage.getItem("cart");

        if (!savedCart) {
            return [];
        }

        const parsed =
            JSON.parse(savedCart);

        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        console.error(
            "Could not read cart:",
            error
        );

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
   9. COUNTRY PRICE CALCULATION
   ========================================================= */

function getCountryShipping(country) {

    if (!country) {
        return null;
    }

    return shippingRates[country] ?? null;

}


function getUSDPriceForCountry(country) {

    const shipping =
        getCountryShipping(country);

    if (shipping === null) {
        return null;
    }

    return (
        PRODUCT_COST_USD +
        shipping +
        PROFIT_USD
    );

}


/* =========================================================
   10. CURRENCY
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

    if (!rate) {
        return usdAmount;
    }

    return usdAmount * rate;

}


/* =========================================================
   11. FORMAT CUSTOMER PRICE
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

    try {

        return new Intl.NumberFormat(
            undefined,
            {
                style: "currency",
                currency: currency,
                maximumFractionDigits:
                    currency === "JPY" ||
                    currency === "KRW" ||
                    currency === "VND" ||
                    currency === "CLP" ||
                    currency === "IDR"
                        ? 0
                        : 2
            }
        ).format(converted);

    } catch (error) {

        return `${currency} ${converted.toFixed(2)}`;

    }

}


/* =========================================================
   12. PRODUCT IDENTIFICATION
   ========================================================= */

function isMainCJProduct(item) {

    const name =
        String(
            item.name ||
            item.productName ||
            ""
        ).toLowerCase();

    const sku =
        String(
            item.sku ||
            item.SKU ||
            ""
        ).toUpperCase();

    return (
        sku === "CJLX239765601AZ" ||
        name.includes("micro inlaid zircon") ||
        name.includes("zircon chain earrings")
    );

}


/* =========================================================
   13. GET ITEM PRICE
   ========================================================= */

function getItemUSDPrice(
    item,
    country
) {

    /*
       For the real CJ earrings:
       $1.62 + country shipping + $10 profit
    */

    if (isMainCJProduct(item)) {

        return getUSDPriceForCountry(
            country
        );

    }


    /*
       Other products can still use
       their saved cart price.
    */

    const storedPrice =
        Number(
            item.price ||
            item.unitPrice ||
            0
        );

    return Number.isFinite(storedPrice)
        ? storedPrice
        : 0;

}


/* =========================================================
   14. UPDATE CHECKOUT
   ========================================================= */

function updateCheckout() {

    const countryElement =
        document.getElementById(
            "checkoutCountry"
        );

    const currencyElement =
        document.getElementById(
            "checkoutCurrency"
        );

    const itemsElement =
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

    const placeOrderButton =
        document.getElementById(
            "placeOrderButton"
        );

    const country =
        countryElement
            ? countryElement.value
            : "";

    const cart =
        getCart();


    /* -------------------------
       EMPTY CART
    ------------------------- */

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


    /* -------------------------
       COUNTRY NOT SELECTED
    ------------------------- */

    if (!country) {

        if (itemsElement) {

            itemsElement.innerHTML = `
                <div class="empty-cart">
                    Select your country to see
                    your price.
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


    /* -------------------------
       BLOCKED COUNTRY
    ------------------------- */

    if (blockedCountries.includes(country)) {

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
            shippingElement.textContent =
                "Unavailable";
        }

        if (totalElement) {
            totalElement.textContent = "—";
        }

        if (placeOrderButton) {
            placeOrderButton.disabled = true;
        }

        return;

    }


    /* -------------------------
       COUNTRY HAS NO CJ RATE
    ------------------------- */

    const shipping =
        getCountryShipping(country);

    if (shipping === null) {

        if (itemsElement) {

            itemsElement.innerHTML = `
                <div class="empty-cart">
                    Shipping is currently
                    unavailable for this country.
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
            shippingElement.textContent =
                "Unavailable";
        }

        if (totalElement) {
            totalElement.textContent = "—";
        }

        if (placeOrderButton) {
            placeOrderButton.disabled = true;
        }

        return;

    }


    /* -------------------------
       CUSTOMER CURRENCY
    ------------------------- */

    const currency =
        getCurrency(country);


    if (currencyElement) {
        currencyElement.textContent =
            currency;
    }


    /* -------------------------
       CALCULATE CART
    ------------------------- */

    let subtotalUSD = 0;


    if (itemsElement) {

        itemsElement.innerHTML = "";

    }


    cart.forEach((item, index) => {

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


        subtotalUSD += itemTotalUSD;


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
                document.createElement("div");

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


    /* -------------------------
       DISPLAY TOTAL
    ------------------------- */

    const subtotalDisplay =
        formatCustomerPrice(
            subtotalUSD,
            country
        );


    if (subtotalElement) {

        subtotalElement.textContent =
            subtotalDisplay;

    }


    /*
       Customer always sees FREE shipping.
       CJ shipping is already included
       inside the product selling price.
    */

    if (shippingElement) {

        shippingElement.textContent =
            "FREE";

    }


    if (totalElement) {

        totalElement.textContent =
            subtotalDisplay;

    }


    if (placeOrderButton) {

        placeOrderButton.disabled =
            subtotalUSD <= 0;

    }

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
   16. COUNTRY CHANGE
   ========================================================= */

function setupCountryChange() {

    const countryElement =
        document.getElementById(
            "checkoutCountry"
        );

    if (!countryElement) {
        return;
    }


    countryElement.addEventListener(
        "change",
        function () {

            updateCheckout();

        }
    );

}


/* =========================================================
   17. AUTO SELECT INDIA
   ========================================================= */

function setDefaultCountry() {

    const countryElement =
        document.getElementById(
            "checkoutCountry"
        );

    if (!countryElement) {
        return;
    }


    /*
       Only set India if no country
       has already been selected.
    */

    if (!countryElement.value) {

        countryElement.value =
            "India";

    }

}


/* =========================================================
   18. CHECKOUT FORM
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
                getCountryShipping(country)
                === null
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
                    "Your cart is empty."
                );

                return;

            }


            /*
               Save checkout information.
               Your payment/order backend can use
               this information later.
            */

            const formData =
                new FormData(form);


            const orderData = {

                name:
                    formData.get("name"),

                email:
                    formData.get("email"),

                countryCode:
                    formData.get(
                        "countryCode"
                    ),

                phone:
                    formData.get("phone"),

                address:
                    formData.get("address"),

                city:
                    formData.get("city"),

                state:
                    formData.get("state"),

                country:
                    country,

                postalCode:
                    formData.get(
                        "postalCode"
                    ),

                paymentMethod:
                    formData.get(
                        "paymentMethod"
                    ),

                cart:
                    cart,

                currency:
                    getCurrency(country),

                shipping:
                    "FREE"

            };


            localStorage.setItem(
                "pendingOrder",
                JSON.stringify(
                    orderData
                )
            );


            /*
               For now this confirms that
               checkout data was collected.
               
               Real online payment processing
               will need a payment provider/backend.
            */

            alert(
                "Your order information has been saved. Payment processing will be connected next."
            );

        }
    );

}


/* =========================================================
   19. BASIC CART FUNCTIONS FOR STORE
   ========================================================= */

function addToCart(product) {

    const cart =
        getCart();


    const existing =
        cart.find(
            item =>
                item.name === product.name
        );


    if (existing) {

        existing.quantity =
            (Number(existing.quantity) || 1)
            + 1;

    } else {

        cart.push({

            name:
                product.name,

            price:
                Number(product.price) || 0,

            quantity:
                1,

            sku:
                product.sku || "",

            image:
                product.image || ""

        });

    }


    saveCart(cart);

    updateCartCount();

    return cart;

}


/* =========================================================
   20. CART COUNT
   ========================================================= */

function updateCartCount() {

    const cart =
        getCart();

    const count =
        cart.reduce(
            (total, item) =>
                total +
                (Number(item.quantity) || 1),
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
   21. START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    async function() {

        /*
           Start live exchange rates.
        */

        await loadExchangeRates();


        /*
           Checkout page.
        */

        setDefaultCountry();

        setupCountryChange();

        setupCheckoutForm();

        updateCheckout();


        /*
           Store cart count.
        */

        updateCartCount();

    }
);
