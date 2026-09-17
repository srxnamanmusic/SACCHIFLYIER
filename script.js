/* =========================================================
   SACCHI FLYIER - COMPLETE script.js
   CJ COUNTRY SHIPPING + $10 PROFIT PRICING
   Homepage + Cart + Checkout + Currency + Newsletter
   ========================================================= */


/* =========================================================
   SETTINGS
   ========================================================= */

const CJ_PRODUCT_COST_USD = 1.62;
const MINIMUM_PROFIT_USD = 10.00;

const CART_KEY = "sacchiFlyierCart";


/*
   COUNTRIES BLOCKED BY SACCHI FLYIER

   These countries have CJ shipping of:
   $87.03 or $181.74
*/

const BLOCKED_COUNTRIES = [
    "Iraq",
    "Syrian Arab Republic",
    "Yemen",

    "Guinea-Bissau",
    "Micronesia (Federated States of)",
    "Palau",
    "South Sudan"
];


/* =========================================================
   COUNTRY → CJ SHIPPING COST
   =========================================================

   Selling price:
   CJ product cost + CJ shipping + $10 profit

   Customer shipping:
   FREE
*/

const COUNTRY_SHIPPING_USD = {

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

    "Bolivia": 3.86,
    "Bolivia (Plurinational State of)": 3.86,

    "Bonaire, Sint Eustatius and Saba": 3.86,
    "Bosnia and Herzegovina": 4.95,
    "Botswana": 3.53,
    "Bouvet Island": 9.86,
    "Brazil": 6.05,

    "British Indian Ocean Territory": 5.51,

    "Brunei": 3.14,
    "Brunei Darussalam": 3.14,

    "Bulgaria": 8.74,
    "Burkina Faso": 4.80,
    "Burundi": 3.60,

    "Cabo Verde": 3.86,
    "Cambodia": 3.56,
    "Cameroon": 3.35,
    "Canada": 5.31,
    "Cayman Islands": 3.60,
    "Cayman island": 3.60,
    "Central African Republic": 3.86,
    "Chad": 3.64,
    "Chile": 4.14,
    "China": 3.05,
    "Christmas Island": 9.43,
    "Cocos (Keeling) Islands": 9.43,
    "Cocos (Keeling) island": 9.43,
    "Colombia": 2.85,
    "Comoros": 3.14,

    "Congo": 1.88,
    "Congo (the Democratic Republic of the)": 1.90,

    "Cook Islands": 4.14,
    "Cook island": 4.14,

    "Costa Rica": 1.75,

    "Côte d’Ivoire": 1.88,
    "Côte d'Ivoire": 1.88,

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
    "Ei Salvador": 3.52,
    "Equatorial Guinea": 4.27,
    "Eritrea": 3.60,
    "Estonia": 7.60,
    "Ethiopia": 3.43,

    "Falkland Islands": 5.30,
    "Falkland island": 5.30,
    "Faroe Islands": 8.38,
    "Faroe island": 8.38,
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

    "Guinea-Bissau": 87.03,

    "Guyana": 5.51,
    "Haiti": 3.82,

    /* Hawaii has no CJ rate */
    "Hawaii": null,

    "Heard Island and McDonald Islands": 9.00,
    "Heard Island and McDonald island": 9.00,

    "Holy See": 38.81,
    "Honduras": 3.82,

    "Hong Kong": 3.92,
    "Hong Kong (China)": 3.92,
    "Hong king(China)": 3.92,

    "Hungary": 3.36,
    "Iceland": 3.56,
    "India": 4.01,
    "Indonesia": 3.06,

    "Iran": 3.43,
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
    "Korea(The democratic peoples republic of)": 137.03,

    "Korea": 3.91,
    "South Korea": 3.91,

    "Kuwait": 9.27,
    "Kyrgyzstan": 3.25,

    "Lao peoples Democratic republic": 4.28,
    "Laos": 4.28,

    "Latvia": 7.60,
    "Lebanon": 3.25,
    "Lesotho": 3.86,
    "Liberia": 3.32,
    "Libya": 4.80,
    "Liechtenstein": 7.33,

    /* Same as Latvia according to your list */
    "Lithuania": 7.60,

    "Luxembourg": 3.25,

    "Macao (China)": 5.58,
    "Macao(China)": 5.58,
    "Macau": 5.58,

    "Macedonia (The former Yugoslav Republic of)": 3.32,
    "Macedonia(The former Yugoslav republic of": 3.32,

    "Madagascar": 3.60,
    "Malawi": 3.50,
    "Malaysia": 3.41,
    "Maldives": 2.95,
    "Mali": 4.80,
    "Malta": 3.31,
    "Marshall Islands": 8.93,
    "Marshall island": 8.93,
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

    /* No CJ rate supplied */
    "Palestine State of": null,

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
    "Reunion": 5.89,

    "Romania": 4.91,
    "Romania4.91": 4.91,

    "Russian Federation": 4.36,
    "Russia": 4.36,

    "Rwanda": 3.50,

    "Saint Helena, Ascension and Tristan da Cunha": 5.95,
    "Saint Helena,Ascension and Tristan da Cunha": 5.95,

    "Saint Kitts and Nevis": 3.82,
    "Saint Lucia": 3.53,
    "Saint Martin (French part)": 8.11,
    "Saint Martin(French part)": 8.11,
    "Saint Pierre and Miquelon": 6.10,
    "Saint Vincent and the Grenadines": 3.82,

    "Samoa": 4.04,
    "San Marino": 4.94,
    "São Tomé and Príncipe": 3.86,
    "Sao Tome and Principe": 3.86,

    "Saudi Arabia": 4.32,
    "Senegal": 3.37,
    "Serbia": 3.18,
    "Seychelles": 3.21,
    "Sierra Leone": 3.86,
    "Singapore": 3.93,
    "Sint Maarten (Dutch Part)": 3.86,
    "Sint Maarten(Dutch Part)": 3.86,

    "Slovakia": 8.72,
    "Slovenia": 8.90,
    "Solomon Islands": 4.03,
    "Solomon island": 4.03,

    "Somalia": 3.86,
    "South Africa": 5.97,
    "South Georgia and the South Sandwich Islands": 8.19,
    "South Georgia and the south sandwich island": 8.19,

    "South Sudan": 87.03,

    "Spain": 4.87,
    "Sri Lanka": 3.12,
    "Sudan": 4.43,
    "Suriname": 3.86,
    "Surname": 3.86,

    "Swaziland": 3.87,
    "Sweden": 6.74,
    "Switzerland": 6.40,

    "Syrian Arab Republic": 181.74,

    "Taiwan": 7.37,
    "Taiwan (Province of China)": 7.37,

    "Tajikistan": 3.25,
    "Tanzania, United Republic of": 3.46,
    "Tanzania,United republic of": 3.46,
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
    "Turks and Caicos island": 3.86,
    "Tuvalu": 4.38,

    "Uganda": 3.35,
    "Ukraine": 3.23,

    "United Arab Emirates": 4.03,
    "UAE": 4.03,

    "United Kingdom": 4.81,
    "UK": 4.81,

    "United States": 3.68,
    "US": 3.68,

    "Uruguay": 4.21,
    "Uzbekistan": 4.21,
    "Vanuatu": 4.81,
    "Venezuela": 3.57,
    "Venezuela (Bolivarian Republic of)": 3.57,
    "Vietnam": 3.02,

    "Virgin Islands (British)": 3.53,
    "Virgin island (British)": 3.53,

    "Virgin Islands (U.S.)": 9.15,
    "Virgin island (U.S)": 9.15,

    "Wallis and Futuna": 5.24,
    "Western Sahara": 6.54,

    "Yemen": 181.74,

    "Zambia": 3.46,
    "Zimbabwe": 4.01
};


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
    "Cayman island": "KYD",
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
    "Ei Salvador": "USD",
    "Equatorial Guinea": "XAF",
    "Eritrea": "ERN",
    "Estonia": "EUR",
    "Ethiopia": "ETB",

    "Falkland Islands": "FKP",
    "Falkland island": "FKP",
    "Faroe Islands": "DKK",
    "Faroe island": "DKK",
    "Fiji": "FJD",
    "Finland": "EUR",
    "France": "EUR",
    "French Guiana": "EUR",
    "French Polynesia": "XPF",
    "French Southern Territories": "EUR",

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
    "Hawaii": "USD",
    "Heard Island and McDonald Islands": "AUD",
    "Heard Island and McDonald island": "AUD",
    "Holy See": "EUR",
    "Honduras": "HNL",

    "Hong Kong": "HKD",
    "Hong Kong (China)": "HKD",
    "Hong king(China)": "HKD",

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
    "Kiribati": "AUD",

    "Korea (the Democratic People's Republic of)": "KPW",
    "Korea(The democratic peoples republic of)": "KPW",

    "Korea": "KRW",
    "South Korea": "KRW",

    "Kuwait": "KWD",
    "Kyrgyzstan": "KGS",

    "Lao peoples Democratic republic": "LAK",
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
    "Macao(China)": "MOP",
    "Macau": "MOP",

    "Macedonia (The former Yugoslav Republic of)": "MKD",
    "Macedonia(The former Yugoslav republic of": "MKD",

    "Madagascar": "MGA",
    "Malawi": "MWK",
    "Malaysia": "MYR",
    "Maldives": "MVR",
    "Mali": "XOF",
    "Malta": "EUR",
    "Marshall Islands": "USD",
    "Marshall island": "USD",
    "Martinique": "EUR",
    "Mauritania": "MRU",
    "Mauritius": "MUR",
    "Mayotte": "EUR",
    "Mexico": "MXN",

    "Micronesia (Federated States of)": "USD",

    "Moldova the republic": "MDL",
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
    "Northern Mariana Island": "USD",
    "Norway": "NOK",

    "Oman": "OMR",

    "Pakistan": "PKR",
    "Palau": "USD",
    "Palestine State of": "ILS",
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
    "Reunion": "EUR",

    "Romania": "RON",
    "Romania4.91": "RON",

    "Russian Federation": "RUB",
    "Russia": "RUB",

    "Rwanda": "RWF",

    "Saint Helena, Ascension and Tristan da Cunha": "SHP",
    "Saint Helena,Ascension and Tristan da Cunha": "SHP",

    "Saint Kitts and Nevis": "XCD",
    "Saint Lucia": "XCD",
    "Saint Martin (French part)": "EUR",
    "Saint Martin(French part)": "EUR",
    "Saint Pierre and Miquelon": "EUR",
    "Saint Vincent and the Grenadines": "XCD",

    "Samoa": "WST",
    "San Marino": "EUR",
    "São Tomé and Príncipe": "STN",
    "Sao Tome and Principe": "STN",

    "Saudi Arabia": "SAR",
    "Senegal": "XOF",
    "Serbia": "RSD",
    "Seychelles": "SCR",
    "Sierra Leone": "SLE",
    "Singapore": "SGD",
    "Sint Maarten (Dutch Part)": "ANG",
    "Sint Maarten(Dutch Part)": "ANG",

    "Slovakia": "EUR",
    "Slovenia": "EUR",
    "Solomon Islands": "SBD",
    "Solomon island": "SBD",

    "Somalia": "SOS",
    "South Africa": "ZAR",
    "South Georgia and the South Sandwich Islands": "GBP",
    "South Georgia and the south sandwich island": "GBP",

    "South Sudan": "SSP",

    "Spain": "EUR",
    "Sri Lanka": "LKR",
    "Sudan": "SDG",
    "Suriname": "SRD",
    "Surname": "SRD",

    "Swaziland": "SZL",
    "Sweden": "SEK",
    "Switzerland": "CHF",

    "Syrian Arab Republic": "SYP",

    "Taiwan": "TWD",
    "Taiwan (Province of China)": "TWD",

    "Tajikistan": "TJS",
    "Tanzania, United Republic of": "TZS",
    "Tanzania,United republic of": "TZS",
    "Thailand": "THB",
    "The Republic of Kosovo": "EUR",
    "Timor-Leste": "USD",
    "Togo": "XOF",
    "Tokelau": "NZD",
    "Tonga": "TOP",
    "Trinidad and Tobago": "TTD",
    "Tunisia": "TND",
    "Turkey": "TRY",
    "Turks and Caicos Islands": "USD",
    "Turks and Caicos island": "USD",
    "Tuvalu": "AUD",

    "Uganda": "UGX",
    "Ukraine": "UAH",

    "United Arab Emirates": "AED",
    "UAE": "AED",

    "United Kingdom": "GBP",
    "UK": "GBP",

    "United States": "USD",
    "US": "USD",

    "Uruguay": "UYU",
    "Uzbekistan": "UZS",
    "Vanuatu": "VUV",
    "Venezuela": "VES",
    "Venezuela (Bolivarian Republic of)": "VES",
    "Vietnam": "VND",

    "Virgin Islands (British)": "USD",
    "Virgin island (British)": "USD",
    "Virgin Islands (U.S.)": "USD",
    "Virgin island (U.S)": "USD",

    "Wallis and Futuna": "XPF",
    "Western Sahara": "MAD",

    "Yemen": "YER",

    "Zambia": "ZMW",
    "Zimbabwe": "ZWG"
};


/* =========================================================
   PRODUCT PRICING
   ========================================================= */

function getCJShipping(country) {

    if (
        !country ||
        !Object.prototype.hasOwnProperty.call(
            COUNTRY_SHIPPING_USD,
            country
        )
    ) {
        return null;
    }

    const shipping =
        Number(COUNTRY_SHIPPING_USD[country]);

    if (
        !Number.isFinite(shipping) ||
        shipping < 0
    ) {
        return null;
    }

    return shipping;
}


function getSellingPriceUSD(country) {

    const shipping =
        getCJShipping(country);

    if (shipping === null) {
        return null;
    }

    return (
        CJ_PRODUCT_COST_USD +
        shipping +
        MINIMUM_PROFIT_USD
    );
}


function isCountryBlocked(country) {

    return BLOCKED_COUNTRIES.includes(country);
}


function isCountryAvailable(country) {

    if (!country) {
        return false;
    }

    if (isCountryBlocked(country)) {
        return false;
    }

    return getCJShipping(country) !== null;
}


/* =========================================================
   CART STORAGE
   ========================================================= */

function getCart() {

    try {

        const saved =
            localStorage.getItem(CART_KEY);

        if (!saved) {
            return [];
        }

        const cart =
            JSON.parse(saved);

        return Array.isArray(cart)
            ? cart
            : [];

    } catch (error) {

        console.error(
            "Cart read error:",
            error
        );

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
   PRODUCT PRICE HELPERS
   ========================================================= */

function getItemCJCostUSD(item) {

    const possibleValues = [

        item?.cjCostUSD,
        item?.cjCost,
        item?.productCostUSD

    ];

    for (
        const value of possibleValues
    ) {

        const number =
            Number(value);

        if (
            Number.isFinite(number) &&
            number >= 0
        ) {
            return number;
        }
    }

    return CJ_PRODUCT_COST_USD;
}


function getItemPriceINR(item) {

    /*
       Kept for compatibility with old cart data.

       New products use CJ cost in USD and
       country-specific pricing at checkout.
    */

    const values = [

        item?.priceINR,
        item?.price,
        item?.salePrice,
        item?.productPrice,
        item?.amount

    ];

    for (
        const value of values
    ) {

        const price =
            Number(value);

        if (
            Number.isFinite(price) &&
            price >= 0
        ) {

            return price;
        }
    }

    return 0;
}


function getItemQuantity(item) {

    const quantity =
        Number(
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

function addToCart(
    productName,
    price = 0,
    image = "",
    cjCostUSD = CJ_PRODUCT_COST_USD
) {

    const cart =
        getCart();

    const name =
        String(
            productName ||
            "Product"
        ).trim();

    const cost =
        Number(cjCostUSD);


    const existing =
        cart.find(
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

            /*
               Product price is calculated by country
               at checkout.
            */

            price: Number(price) || 0,

            cjCostUSD:
                Number.isFinite(cost)
                    ? cost
                    : CJ_PRODUCT_COST_USD,

            quantity: 1,

            image:
                image || ""
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

    const cart =
        getCart();

    const count =
        cart.reduce(
            (
                total,
                item
            ) =>
                total +
                getItemQuantity(item),
            0
        );


    const elements =
        document.querySelectorAll(
            "#cartCount, .cart-count, #cart-count, [data-cart-count]"
        );


    elements.forEach(
        element => {

            element.textContent =
                count;
        }
    );
}


/* =========================================================
   CART TOTAL
   ========================================================= */

function getCartSubtotalINR() {

    const cart =
        getCart();

    return cart.reduce(
        (
            total,
            item
        ) => {

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


    const cart =
        getCart();


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        if (cartTotal) {

            cartTotal.textContent =
                "—";
        }

        return;
    }


    cartItems.innerHTML =
        cart.map(
            (
                item,
                index
            ) => {

                const name =
                    item.name ||
                    item.title ||
                    item.productName ||
                    "Product";

                const quantity =
                    getItemQuantity(item);

                const image =
                    item.image ||
                    "";


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
                                Price calculated at checkout
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
            "Price calculated at checkout";
    }
}


/* =========================================================
   CHANGE QUANTITY
   ========================================================= */

function changeQuantity(
    index,
    change
) {

    const cart =
        getCart();

    if (!cart[index]) {
        return;
    }


    let quantity =
        getItemQuantity(
            cart[index]
        ) +
        Number(change);


    if (quantity <= 0) {

        cart.splice(
            index,
            1
        );

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

    const cart =
        getCart();

    if (!cart[index]) {
        return;
    }


    cart.splice(
        index,
        1
    );

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


    panel.classList.add(
        "active"
    );

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


    panel.classList.remove(
        "active"
    );
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

                const cart =
                    getCart();

                if (
                    cart.length === 0
                ) {

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


    buttons.forEach(
        button => {

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


                    const cjCost =
                        Number(
                            button.dataset.cjCost ||
                            button.dataset.cjCostUsd ||
                            CJ_PRODUCT_COST_USD
                        );


                    const image =
                        button.dataset.image ||
                        "";


                    addToCart(
                        productName,
                        price,
                        image,
                        Number.isFinite(cjCost)
                            ? cjCost
                            : CJ_PRODUCT_COST_USD
                    );
                }
            );
        }
    );
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


                products.forEach(
                    product => {

                        const text =
                            product.textContent
                                .toLowerCase();


                        product.style.display =
                            !query ||
                            text.includes(query)
                                ? ""
                                : "none";
                    }
                );
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
            .forEach(
                link => {

                    link.addEventListener(
                        "click",
                        () => {

                            navLinks.classList.remove(
                                "active"
                            );
                        }
                    );
                }
            );
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


    buttons.forEach(
        button => {

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


                    products.forEach(
                        product => {

                            const productCategory =
                                product.dataset
                                    .productCategory;


                            product.style.display =
                                category === "all" ||
                                category === "*" ||
                                category === productCategory
                                    ? ""
                                    : "none";
                        }
                    );
                }
            );
        }
    );
}


/* =========================================================
   CURRENCY
   ========================================================= */

const exchangeRateCache = {};


function getCurrencyForCountry(
    country
) {

    return COUNTRY_CURRENCY[country] ||
        null;
}


function formatMoney(
    amount,
    currency
) {

    if (
        !Number.isFinite(amount)
    ) {

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

    if (
        amount === 0
    ) {

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
   CHECKOUT ITEM DISPLAY
   ========================================================= */

async function renderCheckoutItems(
    currency,
    country
) {

    const elements =
        getCheckoutElements();


    if (!elements.checkoutItems) {
        return;
    }


    const cart =
        getCart();


    if (
        cart.length === 0
    ) {

        elements.checkoutItems.innerHTML =
            "<p>Your cart is empty.</p>";

        return;
    }


    const rate =
        await getExchangeRate(
            "USD",
            currency
        );


    elements.checkoutItems.innerHTML =
        cart.map(
            item => {

                const name =
                    item.name ||
                    item.title ||
                    item.productName ||
                    "Product";


                const quantity =
                    getItemQuantity(item);


                const cjCost =
                    getItemCJCostUSD(item);


                const unitPriceUSD =
                    getSellingPriceUSD(
                        country
                    );


                const unitPrice =
                    (
                        unitPriceUSD ||
                        (
                            cjCost +
                            (
                                getCJShipping(country) || 0
                            ) +
                            MINIMUM_PROFIT_USD
                        )
                    );


                const total =
                    unitPrice *
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

            }
        ).join("");
}


/* =========================================================
   CHECKOUT REQUEST CONTROL
   ========================================================= */

let checkoutRequest = 0;


/* =========================================================
   UPDATE CHECKOUT
   ========================================================= */

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


    /* -----------------------------------------------------
       NO COUNTRY
       ----------------------------------------------------- */

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
            "FREE",
            "—"
        );


        disableOrderButton(
            elements,
            true
        );

        return;
    }


    /* -----------------------------------------------------
       BLOCKED COUNTRY
       ----------------------------------------------------- */

    if (
        isCountryBlocked(country)
    ) {

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


    /* -----------------------------------------------------
       NO CJ SHIPPING RATE
       ----------------------------------------------------- */

    const cjShipping =
        getCJShipping(country);


    if (
        cjShipping === null
    ) {

        setCheckoutMessage(
            elements,
            "Shipping is currently unavailable to this country.",
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


    /* -----------------------------------------------------
       EMPTY CART
       ----------------------------------------------------- */

    if (
        cart.length === 0
    ) {

        const currency =
            getCurrencyForCountry(
                country
            );


        setCheckoutMessage(
            elements,
            "Your cart is empty.",
            "error"
        );


        setCheckoutValues(
            elements,
            currency || "USD",
            formatMoney(
                0,
                currency || "USD"
            ),
            "FREE",
            formatMoney(
                0,
                currency || "USD"
            )
        );


        disableOrderButton(
            elements,
            true
        );


        if (currency) {

            try {

                await renderCheckoutItems(
                    currency,
                    country
                );

            } catch {

                // Nothing else needed.
            }
        }

        return;
    }


    /* -----------------------------------------------------
       CURRENCY
       ----------------------------------------------------- */

    const currency =
        getCurrencyForCountry(
            country
        );


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


    /* -----------------------------------------------------
       CALCULATE CUSTOMER PRICE
       ----------------------------------------------------- */

    /*
       For one product:

       $1.62 CJ product cost
       + country CJ shipping
       + $10 profit
       = customer selling price

       Customer shipping = FREE
    */


    let totalUSD = 0;


    cart.forEach(
        item => {

            const quantity =
                getItemQuantity(item);


            const productCost =
                getItemCJCostUSD(item);


            const sellingPrice =
                productCost +
                cjShipping +
                MINIMUM_PROFIT_USD;


            totalUSD +=
                sellingPrice *
                quantity;
        }
    );


    /* -----------------------------------------------------
       LOADING
       ----------------------------------------------------- */

    setCheckoutMessage(
        elements,
        `Shipping available to ${country}. Calculating total...`,
        "loading"
    );


    setCheckoutValues(
        elements,
        `${currency} • Converting...`,
        "Converting...",
        "FREE",
        "Converting..."
    );


    disableOrderButton(
        elements,
        true
    );


    try {

        const total =
            await convertMoney(
                totalUSD,
                "USD",
                currency
            );


        const productTotal =
            total;


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
                productTotal,
                currency
            ),
            "FREE",
            formatMoney(
                total,
                currency
            )
        );


        setCheckoutMessage(
            elements,
            `Shipping available to ${country}. Customer shipping is FREE.`,
            "success"
        );


        await renderCheckoutItems(
            currency,
            country
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

    if (
        elements.checkoutCurrency
    ) {

        elements.checkoutCurrency.textContent =
            currency;
    }


    if (
        elements.checkoutSubtotal
    ) {

        elements.checkoutSubtotal.textContent =
            subtotal;
    }


    if (
        elements.checkoutShipping
    ) {

        elements.checkoutShipping.textContent =
            shipping;
    }


    if (
        elements.checkoutTotal
    ) {

        elements.checkoutTotal.textContent =
            total;
    }
}


function setCheckoutMessage(
    elements,
    message,
    type
) {

    if (
        !elements.countryMessage
    ) {

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


    if (
        cart.length === 0
    ) {

        alert(
            "Your cart is empty."
        );

        return;
    }


    const country =
        elements.country?.value ||
        "";


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


    const cjShipping =
        getCJShipping(country);


    if (
        cjShipping === null
    ) {

        alert(
            "Shipping is currently unavailable to this country."
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

        let totalUSD = 0;


        const orderItems =
            cart.map(
                item => {

                    const quantity =
                        getItemQuantity(item);


                    const cjCost =
                        getItemCJCostUSD(item);


                    const unitSellingPrice =
                        cjCost +
                        cjShipping +
                        MINIMUM_PROFIT_USD;


                    const itemTotal =
                        unitSellingPrice *
                        quantity;


                    totalUSD +=
                        itemTotal;


                    return {

                        ...item,

                        cjCostUSD:
                            Number(
                                cjCost.toFixed(2)
                            ),

                        cjShippingUSD:
                            Number(
                                cjShipping.toFixed(2)
                            ),

                        profitUSD:
                            Number(
                                (
                                    MINIMUM_PROFIT_USD *
                                    quantity
                                ).toFixed(2)
                            ),

                        unitSellingPriceUSD:
                            Number(
                                unitSellingPrice.toFixed(2)
                            ),

                        itemTotalUSD:
                            Number(
                                itemTotal.toFixed(2)
                            )
                    };
                }
            );


        const total =
            await convertMoney(
                totalUSD,
                "USD",
                currency
            );


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
                orderItems,


            pricing: {

                cjProductCostUSD:
                    Number(
                        CJ_PRODUCT_COST_USD.toFixed(2)
                    ),

                cjShippingUSD:
                    Number(
                        cjShipping.toFixed(2)
                    ),

                minimumProfitUSD:
                    Number(
                        MINIMUM_PROFIT_USD.toFixed(2)
                    ),

                customerShipping:
                    "FREE",

                totalUSD:
                    Number(
                        totalUSD.toFixed(2)
                    ),

                customerCurrency:
                    currency,

                customerTotal:
                    Number(
                        total.toFixed(2)
                    )
            },


            currency:
                currency,


            /*
               Product total already includes:
               CJ product cost
               + CJ shipping
               + profit
            */

            subtotal:
                Number(
                    total.toFixed(2)
                ),


            shipping:
                0,


            total:
                Number(
                    total.toFixed(2)
                ),


            customerShipping:
                "FREE",


            cjShippingUSD:
                Number(
                    cjShipping.toFixed(2)
                ),


            minimumProfitUSD:
                Number(
                    MINIMUM_PROFIT_USD.toFixed(2)
                ),


            paymentMethod:
                paymentMethod,


            createdAt:
                new Date().toISOString()
        };


        /* =================================================
           SAVE ORDER
           ================================================= */

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
            `Order ${order.orderId} created.\n\nTotal: ${formatMoney(
                total,
                currency
            )}\nShipping: FREE\nPayment: ${
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


    if (
        !elements.country
    ) {

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
                                    email:
                                        email
                                })
                        }
                    );


                if (
                    !response.ok
                ) {

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
