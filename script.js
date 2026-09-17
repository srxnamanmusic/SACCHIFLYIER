/* =========================================================
   SACCHI FLYIER
   COMPLETE CART + CHECKOUT + COUNTRY PRICE SYSTEM
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
   Shipping cost is included in the selling price.
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
    AFN: 65,
    ALL: 82,
    DZD: 130,
    EUR: 0.85,
    ARS: 1450,
    AUD: 1.52,
    AZN: 1.70,
    BSD: 1,
    BHD: 0.376,
    BDT: 122,
    BBD: 2,
    BYN: 3.20,
    BMD: 1,
    BTN: 88,
    BOB: 6.90,
    BAM: 1.66,
    BWP: 13.5,
    BRL: 5.45,
    BND: 1.29,
    BGN: 1.66,
    BIF: 2950,
    KHR: 4100,
    XAF: 557,
    CAD: 1.38,
    KYD: 0.82,
    CLP: 930,
    CNY: 7.15,
    COP: 3800,
    KMF: 450,
    CRC: 500,
    XOF: 557,
    CUP: 24,
    ANG: 1.79,
    CZK: 21.2,
    DKK: 6.35,
    DJF: 177,
    XCD: 2.70,
    DOP: 63,
    EGP: 48.5,
    ERN: 15,
    ETB: 145,
    FJD: 2.25,
    XPF: 101.5,
    GMD: 73,
    GEL: 2.70,
    GHS: 11,
    GIP: 0.74,
    GNF: 8600,
    GYD: 209,
    HTG: 130,
    HNL: 26,
    HKD: 7.80,
    HUF: 335,
    ISK: 123,
    INR: 88,
    IDR: 16500,
    IRR: 42000,
    ILS: 3.35,
    JMD: 158,
    JPY: 147,
    GBP: 0.74,
    JOD: 0.709,
    KZT: 540,
    KES: 129,
    KRW: 1390,
    KWD: 0.31,
    KGS: 87,
    LAK: 21500,
    CHF: 0.80,
    LBP: 89500,
    LSL: 17.2,
    LRD: 190,
    LYD: 5.45,
    MOP: 7.99,
    MKD: 52,
    MGA: 4500,
    MWK: 1750,
    MYR: 4.25,
    MVR: 15.4,
    MRU: 40,
    MUR: 45,
    MXN: 18.8,
    MDL: 17.2,
    MNT: 3550,
    MAD: 9.9,
    MZN: 64,
    MMK: 2100,
    NAD: 17.2,
    NPR: 140,
    NZD: 1.66,
    NIO: 36.8,
    NGN: 1500,
    NOK: 10,
    OMR: 0.385,
    PKR: 285,
    PAB: 1,
    PGK: 4.05,
    PYG: 8000,
    PEN: 3.55,
    PHP: 58,
    PLN: 3.65,
    QAR: 3.64,
    RON: 4.35,
    RUB: 80,
    RWF: 1450,
    SHP: 0.74,
    WST: 2.80,
    STN: 22.5,
    SAR: 3.75,
    RSD: 100,
    SCR: 13.2,
    SLE: 23,
    SGD: 1.29,
    ANG: 1.79,
    SBD: 8.10,
    SOS: 570,
    ZAR: 17.2,
    SDG: 600,
    SRD: 36,
    SZL: 17.2,
    SEK: 9.30,
    TWD: 31.5,
    TJS: 10.9,
    TZS: 2450,
    THB: 32.5,
    TOP: 2.35,
    TTD: 6.78,
    TND: 2.90,
    TRY: 41.5,
    UAH: 41,
    AED: 3.67,
    UYU: 40,
    UZS: 12500,
    VUV: 119,
    VES: 140,
    VND: 26000,
    ZMW: 23,
    ZWG: 26
};


/* =========================================================
   6. LIVE EXCHANGE RATES
   ========================================================= */

let exchangeRates = {
    ...fallbackRates
};

let usingLiveRates = false;


/* =========================================================
   7. LOAD LIVE EXCHANGE RATES
   IMPORTANT:
   Checkout does NOT wait for this request.
   ========================================================= */

async function loadExchangeRates() {

    try {

        const controller =
            new AbortController();

        const timeout =
            setTimeout(
                () => controller.abort(),
                5000
            );

        const response =
            await fetch(
                "https://open.er-api.com/v6/latest/USD",
                {
                    method: "GET",
                    signal: controller.signal
                }
            );

        clearTimeout(timeout);

        if (!response.ok) {
            throw new Error(
                "Exchange rate request failed."
            );
        }

        const data =
            await response.json();

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

            console.log(
                "Sacchi Flyier: live exchange rates loaded."
            );

            /*
               Refresh checkout after live rates arrive.
            */

            updateCheckout();

        }

    } catch (error) {

        console.warn(
            "Sacchi Flyier: live exchange rates unavailable. Using fallback rates."
        );

        exchangeRates = {
            ...fallbackRates
        };

        usingLiveRates = false;

        updateCheckout();

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

        const parsed =
            JSON.parse(savedCart);

        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed;

    } catch (error) {

        console.error(
            "Sacchi Flyier: could not read cart.",
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

    } catch (error) {

        console.error(
            "Sacchi Flyier: could not save cart.",
            error
        );

    }

}


/* =========================================================
   9. COUNTRY SHIPPING
   ========================================================= */

function getCountryShipping(country) {

    if (!country) {
        return null;
    }

    if (
        Object.prototype.hasOwnProperty.call(
            shippingRates,
            country
        )
    ) {

        return Number(
            shippingRates[country]
        );

    }

    return null;

}


/* =========================================================
   10. COUNTRY SELLING PRICE
   $1.62 PRODUCT + CJ SHIPPING + $10 PROFIT
   ========================================================= */

function getUSDPriceForCountry(country) {

    const shipping =
        getCountryShipping(country);

    if (
        shipping === null ||
        !Number.isFinite(shipping)
    ) {

        return null;

    }

    return (
        PRODUCT_COST_USD +
        shipping +
        PROFIT_USD
    );

}


/* =========================================================
   11. COUNTRY CURRENCY
   ========================================================= */

function getCurrency(country) {

    return (
        countryCurrency[country] ||
        "USD"
    );

}


/* =========================================================
   12. CONVERT USD TO CUSTOMER CURRENCY
   ========================================================= */

function convertFromUSD(
    usdAmount,
    currency
) {

    const amount =
        Number(usdAmount);

    if (!Number.isFinite(amount)) {
        return 0;
    }

    const rate =
        Number(exchangeRates[currency]);

    if (
        !Number.isFinite(rate) ||
        rate <= 0
    ) {

        return amount;

    }

    return amount * rate;

}


/* =========================================================
   13. FORMAT CUSTOMER PRICE
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
                    (
                        currency === "JPY" ||
                        currency === "KRW" ||
                        currency === "VND" ||
                        currency === "CLP" ||
                        currency === "IDR" ||
                        currency === "ISK" ||
                        currency === "HUF" ||
                        currency === "XOF" ||
                        currency === "XAF"
                    )
                        ? 0
                        : 2
            }
        ).format(converted);

    } catch (error) {

        return (
            currency +
            " " +
            converted.toFixed(2)
        );

    }

}


/* =========================================================
   14. PRODUCT IDENTIFICATION
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
        )
        .trim()
        .toUpperCase();

    const name =
        String(
            item.name ||
            item.productName ||
            item.title ||
            ""
        )
        .trim()
        .toLowerCase();

    return (
        sku === MAIN_PRODUCT_SKU ||
        name.includes(
            "micro inlaid zircon"
        ) ||
        name.includes(
            "zircon chain earrings"
        )
    );

}


/* =========================================================
   15. GET ITEM USD PRICE
   ========================================================= */

function getItemUSDPrice(
    item,
    country
) {

    /*
       MAIN CJ PRODUCT:
       $1.62 + country shipping + $10 profit
    */

    if (isMainCJProduct(item)) {

        return getUSDPriceForCountry(
            country
        );

    }


    /*
       OLD CART PRODUCTS:
       Use their saved price.
    */

    const storedPrice =
        Number(
            item.price ??
            item.unitPrice ??
            item.salePrice ??
            0
        );

    if (
        Number.isFinite(storedPrice) &&
        storedPrice > 0
    ) {

        return storedPrice;

    }

    return 0;

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

                const quantity =
                    Math.max(
                        1,
                        Number(item.quantity) || 1
                    );

                return total + quantity;

            },
            0
        );

    const countElement =
        document.getElementById(
            "cartCount"
        );

    if (countElement) {

        countElement.textContent =
            String(count);

    }

}


/* =========================================================
   17. UPDATE CHECKOUT
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
            ? String(countryElement.value).trim()
            : "";

    const cart =
        getCart();


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


    /* -----------------------------------------
       BLOCKED COUNTRY
       ----------------------------------------- */

    if (
        blockedCountries.includes(
            country
        )
    ) {

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


    /* -----------------------------------------
       COUNTRY HAS NO SHIPPING RATE
       ----------------------------------------- */

    const shipping =
        getCountryShipping(country);

    if (shipping === null) {

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


    /* -----------------------------------------
       CUSTOMER CURRENCY
       ----------------------------------------- */

    const currency =
        getCurrency(country);

    if (currencyElement) {

        currencyElement.textContent =
            currency;

    }


    /* -----------------------------------------
       BUILD CART SUMMARY
       ----------------------------------------- */

    let subtotalUSD = 0;
    let validItems = 0;

    if (itemsElement) {
        itemsElement.innerHTML = "";
    }


    cart.forEach(
        function(item) {

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
                !Number.isFinite(unitPriceUSD) ||
                unitPriceUSD <= 0
            ) {

                return;

            }

            validItems++;

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
                item.title ||
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

        }
    );


    /* -----------------------------------------
       NO VALID ITEMS
       ----------------------------------------- */

    if (
        validItems === 0 ||
        subtotalUSD <= 0
    ) {

        if (itemsElement) {

            itemsElement.innerHTML = `
                <div class="empty-cart">
                    Your cart does not contain
                    a valid product.
                </div>
            `;

        }

        if (currencyElement) {
            currencyElement.textContent =
                currency;
        }

        if (subtotalElement) {
            subtotalElement.textContent =
                "—";
        }

        if (shippingElement) {
            shippingElement.textContent =
                "—";
        }

        if (totalElement) {
            totalElement.textContent =
                "—";
        }

        if (placeOrderButton) {
            placeOrderButton.disabled =
                true;
        }

        return;

    }


    /* -----------------------------------------
       TOTAL
       ----------------------------------------- */

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
       CJ shipping is already included
       in the selling price.
       Customer sees FREE shipping.
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
            false;

    }

}


/* =========================================================
   18. HTML ESCAPE
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
   19. COUNTRY CHANGE
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
        function() {

            updateCheckout();

        }
    );

}


/* =========================================================
   20. DEFAULT COUNTRY
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
       Only choose India if the
       customer has not selected a country.
    */

    if (!countryElement.value) {

        const indiaOption =
            Array.from(
                countryElement.options
            ).find(
                option =>
                    option.value === "India"
            );

        if (indiaOption) {

            countryElement.value =
                "India";

        }

    }

}


/* =========================================================
   21. CHECKOUT FORM
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
                    ? String(
                        countryElement.value
                    ).trim()
                    : "";


            /* -----------------------------
               COUNTRY CHECK
               ----------------------------- */

            if (!country) {

                alert(
                    "Please select your country."
                );

                return;

            }


            /* -----------------------------
               BLOCKED COUNTRY CHECK
               ----------------------------- */

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


            /* -----------------------------
               SHIPPING CHECK
               ----------------------------- */

            if (
                getCountryShipping(country)
                === null
            ) {

                alert(
                    "Shipping is currently unavailable for this country."
                );

                return;

            }


            /* -----------------------------
               CART CHECK
               ----------------------------- */

            const cart =
                getCart();

            if (!cart.length) {

                alert(
                    "Your cart is empty."
                );

                return;

            }


            /* -----------------------------
               FORM DATA
               ----------------------------- */

            const formData =
                new FormData(form);


            /*
               These names support your
               checkout HTML.
            */

            const getFormValue =
                function(...names) {

                    for (
                        const name of names
                    ) {

                        const value =
                            formData.get(name);

                        if (
                            value !== null &&
                            String(value).trim() !== ""
                        ) {

                            return String(
                                value
                            ).trim();

                        }

                    }

                    return "";

                };


            /* -----------------------------
               CUSTOMER INFORMATION
               ----------------------------- */

            const orderData = {

                name:
                    getFormValue(
                        "name",
                        "checkoutName"
                    ),

                email:
                    getFormValue(
                        "email",
                        "checkoutEmail"
                    ),

                countryCode:
                    getFormValue(
                        "countryCode",
                        "checkoutCountryCode"
                    ),

                phone:
                    getFormValue(
                        "phone",
                        "checkoutPhone"
                    ),

                address:
                    getFormValue(
                        "address"
                    ),

                city:
                    getFormValue(
                        "city"
                    ),

                state:
                    getFormValue(
                        "state"
                    ),

                country:
                    country,

                postalCode:
                    getFormValue(
                        "postalCode"
                    ),

                paymentMethod:
                    getFormValue(
                        "paymentMethod"
                    ) || "cod",

                cart:
                    cart,

                currency:
                    getCurrency(country),

                shipping:
                    "FREE",

                createdAt:
                    new Date().toISOString()

            };


            /* -----------------------------
               CALCULATE ORDER TOTAL
               ----------------------------- */

            let totalUSD = 0;

            cart.forEach(
                function(item) {

                    const quantity =
                        Math.max(
                            1,
                            Number(
                                item.quantity
                            ) || 1
                        );

                    const price =
                        getItemUSDPrice(
                            item,
                            country
                        );

                    if (
                        price !== null &&
                        Number.isFinite(price) &&
                        price > 0
                    ) {

                        totalUSD +=
                            price * quantity;

                    }

                }
            );


            if (
                !Number.isFinite(totalUSD) ||
                totalUSD <= 0
            ) {

                alert(
                    "Unable to calculate your order total. Please check your cart."
                );

                return;

            }


            orderData.totalUSD =
                Number(
                    totalUSD.toFixed(2)
                );

            orderData.total =
                formatCustomerPrice(
                    totalUSD,
                    country
                );


            /* -----------------------------
               SAVE ORDER
               ----------------------------- */

            try {

                localStorage.setItem(
                    "pendingOrder",
                    JSON.stringify(
                        orderData
                    )
                );

            } catch (error) {

                console.error(
                    "Could not save order:",
                    error
                );

                alert(
                    "We could not save your order information. Please try again."
                );

                return;

            }


            /* -----------------------------
               PAYMENT STATUS
               ----------------------------- */

            if (
                orderData.paymentMethod ===
                "online"
            ) {

                alert(
                    "Your order information has been saved. Online payment processing will be connected next."
                );

            } else {

                alert(
                    "Your order information has been saved successfully."
                );

            }

        }
    );

}


/* =========================================================
   22. ADD PRODUCT TO CART
   ========================================================= */

function addToCart(product) {

    if (!product) {
        return getCart();
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
            product.productSku ||
            ""
        );


    const existing =
        cart.find(
            function(item) {

                const sameSKU =
                    productSKU &&
                    (
                        String(
                            item.sku ||
                            item.SKU ||
                            ""
                        ) === productSKU
                    );

                const sameName =
                    String(
                        item.name ||
                        item.productName ||
                        item.title ||
                        ""
                    ) === productName;

                return (
                    sameSKU ||
                    sameName
                );

            }
        );


    if (existing) {

        existing.quantity =
            Math.max(
                1,
                Number(
                    existing.quantity
                ) || 1
            ) + 1;


        /*
           If old cart item does not have
           the SKU, add it now.
        */

        if (
            !existing.sku &&
            productSKU
        ) {

            existing.sku =
                productSKU;

        }

    } else {

        cart.push({

            name:
                productName,

            price:
                Number(
                    product.price
                ) || 0,

            quantity:
                1,

            sku:
                productSKU,

            image:
                product.image || "",

            productName:
                productName

        });

    }


    saveCart(cart);

    updateCartCount();

    /*
       If checkout is open in the same page,
       refresh it too.
    */

    updateCheckout();

    return cart;

}


/* =========================================================
   23. REMOVE CART ITEM
   ========================================================= */

function removeFromCart(index) {

    const cart =
        getCart();

    if (
        index < 0 ||
        index >= cart.length
    ) {

        return;

    }

    cart.splice(
        index,
        1
    );

    saveCart(cart);

    updateCartCount();

    updateCheckout();

}


/* =========================================================
   24. CHANGE CART QUANTITY
   ========================================================= */

function updateCartQuantity(
    index,
    quantity
) {

    const cart =
        getCart();

    if (
        index < 0 ||
        index >= cart.length
    ) {

        return;

    }

    const newQuantity =
        Math.max(
            1,
            Number(quantity) || 1
        );

    cart[index].quantity =
        newQuantity;

    saveCart(cart);

    updateCartCount();

    updateCheckout();

}


/* =========================================================
   25. CLEAR CART
   ========================================================= */

function clearCart() {

    saveCart([]);

    updateCartCount();

    updateCheckout();

}


/* =========================================================
   26. CHECKOUT BUTTON FROM CART
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
        function() {

            const cart =
                getCart();

            if (!cart.length) {

                alert(
                    "Your cart is empty."
                );

                return;

            }


            /*
               Your checkout page is:
               checkout.html
            */

            window.location.href =
                "checkout.html";

        }
    );

}


/* =========================================================
   27. START WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
           IMPORTANT:
           Do NOT wait for the exchange-rate
           API before starting checkout.
        */

        setDefaultCountry();

        setupCountryChange();

        setupCheckoutForm();

        setupCheckoutButton();

        updateCheckout();

        updateCartCount();


        /*
           Load live rates in the background.
           Fallback rates are already available.
        */

        loadExchangeRates();

    }
);
