// ============================================================
// SACCHI FLYIER - COMPLETE SCRIPT
// Cart + Checkout + CJ Country Pricing + Currency Conversion
// ============================================================

"use strict";

// ============================================================
// SETTINGS
// ============================================================

const CART_KEY = "sacchiFlyierCart";

const CJ_PRODUCT_COST_USD = 1.62;
const MINIMUM_PROFIT_USD = 10.00;

// Customer sees FREE shipping.
// Selling price = $1.62 product cost + CJ shipping + $10 profit.


// ============================================================
// BLOCKED COUNTRIES
// ============================================================

const BLOCKED_COUNTRIES = [
    "Iraq",
    "Syrian Arab Republic",
    "Yemen",
    "Guinea-Bissau",
    "Micronesia (Federated States of)",
    "Palau",
    "South Sudan"
];


// ============================================================
// CJ SHIPPING PRICES - USD
// ============================================================

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
    "Guernsey": 7.81,
    "Guinea": 4.43,
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
    "Spain": 4.87,
    "Sri Lanka": 3.12,
    "Sudan": 4.43,
    "Suriname": 3.86,
    "Swaziland": 3.87,
    "Sweden": 6.74,
    "Switzerland": 6.40,
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


// ============================================================
// COUNTRY CURRENCY
// ============================================================

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
    "Bonaire, Sint Eustatius and Saba": "USD",
    "Bosnia and Herzegovina": "BAM",
    "Botswana": "BWP",
    "Bouvet Island": "NOK",
    "Brazil": "BRL",
    "British Indian Ocean Territory": "USD",
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
    "Christmas Island": "AUD",
    "Cocos (Keeling) Islands": "AUD",
    "Colombia": "COP",
    "Comoros": "KMF",
    "Congo (the Democratic Republic of the)": "CDF",
    "Congo": "XAF",
    "Cook Islands": "NZD",
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

    "Falkland Islands": "FKP",
    "Faroe Islands": "DKK",
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
    "Guernsey": "GBP",
    "Guinea": "GNF",
    "Guyana": "GYD",

    "Haiti": "HTG",
    "Heard Island and McDonald Islands": "AUD",
    "Holy See": "EUR",
    "Honduras": "HNL",
    "Hong Kong (China)": "HKD",
    "Hungary": "HUF",

    "Iceland": "ISK",
    "India": "INR",
    "Indonesia": "IDR",
    "Iran (Islamic Republic of)": "IRR",
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
    "Korea (South Korea)": "KRW",
    "Kuwait": "KWD",
    "Kyrgyzstan": "KGS",

    "Lao peoples Democratic republic": "LAK",
    "Latvia": "EUR",
    "Lebanon": "LBP",
    "Lesotho": "LSL",
    "Liberia": "LRD",
    "Libya": "LYD",
    "Liechtenstein": "CHF",
    "Lithuania": "EUR",
    "Luxembourg": "EUR",

    "Macao (China)": "MOP",
    "Macedonia (The former Yugoslav Republic of)": "MKD",
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
    "Romania": "RON",
    "Russian Federation": "RUB",
    "Rwanda": "RWF",

    "Saint Helena, Ascension and Tristan da Cunha": "SHP",
    "Saint Kitts and Nevis": "XCD",
    "Saint Lucia": "XCD",
    "Saint Martin (French part)": "EUR",
    "Saint Pierre and Miquelon": "EUR",
    "Saint Vincent and the Grenadines": "XCD",
    "Samoa": "WST",
    "San Marino": "EUR",
    "Sao Tome and Principe": "STN",
    "Saudi Arabia": "SAR",
    "Senegal": "XOF",
    "Serbia": "RSD",
    "Seychelles": "SCR",
    "Sierra Leone": "SLE",
    "Singapore": "SGD",
    "Sint Maarten (Dutch Part)": "ANG",
    "Slovakia": "EUR",
    "Slovenia": "EUR",
    "Solomon Islands": "SBD",
    "Somalia": "SOS",
    "South Africa": "ZAR",
    "South Georgia and South Sandwich Islands": "GBP",
    "South Sudan": "SSP",
    "Spain": "EUR",
    "Sri Lanka": "LKR",
    "Sudan": "SDG",
    "Suriname": "SRD",
    "Swaziland": "SZL",
    "Sweden": "SEK",
    "Switzerland": "CHF",

    "Taiwan": "TWD",
    "Tajikistan": "TJS",
    "Tanzania, United Republic of": "TZS",
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
    "Tuvalu": "AUD",

    "Uganda": "UGX",
    "Ukraine": "UAH",
    "United Arab Emirates": "AED",
    "United Kingdom": "GBP",
    "United States": "USD",
    "Uruguay": "UYU",
    "Uzbekistan": "UZS",

    "Vanuatu": "VUV",
    "Venezuela (Bolivarian Republic of)": "VES",
    "Vietnam": "VND",
    "Virgin Islands (British)": "USD",
    "Virgin Islands (U.S.)": "USD",

    "Wallis and Futuna": "XPF",
    "Western Sahara": "MAD",

    "Zambia": "ZMW",
    "Zimbabwe": "ZWG"
};


// ============================================================
// COUNTRY PHONE CODES
// ============================================================

const COUNTRY_PHONE_CODES = {

    "Afghanistan": "+93",
    "Albania": "+355",
    "Algeria": "+213",
    "American Samoa": "+1",
    "Andorra": "+376",
    "Angola": "+244",
    "Anguilla": "+1",
    "Antigua and Barbuda": "+1",
    "Argentina": "+54",
    "Armenia": "+374",
    "Aruba": "+297",
    "Australia": "+61",
    "Austria": "+43",
    "Azerbaijan": "+994",

    "Bahamas": "+1",
    "Bahrain": "+973",
    "Bangladesh": "+880",
    "Barbados": "+1",
    "Belarus": "+375",
    "Belgium": "+32",
    "Belize": "+501",
    "Benin": "+229",
    "Bermuda": "+1",
    "Bhutan": "+975",
    "Bolivia (Plurinational State of)": "+591",
    "Bosnia and Herzegovina": "+387",
    "Botswana": "+267",
    "Brazil": "+55",
    "Brunei Darussalam": "+673",
    "Bulgaria": "+359",
    "Burkina Faso": "+226",
    "Burundi": "+257",

    "Cabo Verde": "+238",
    "Cambodia": "+855",
    "Cameroon": "+237",
    "Canada": "+1",
    "Cayman Islands": "+1",
    "Central African Republic": "+236",
    "Chad": "+235",
    "Chile": "+56",
    "China": "+86",
    "Colombia": "+57",
    "Comoros": "+269",
    "Congo": "+242",
    "Costa Rica": "+506",
    "Côte d’Ivoire": "+225",
    "Croatia": "+385",
    "Cuba": "+53",
    "Curaçao": "+599",
    "Cyprus": "+357",
    "Czechia": "+420",

    "Denmark": "+45",
    "Djibouti": "+253",
    "Dominica": "+1",
    "Dominican Republic": "+1",
    "Ecuador": "+593",
    "Egypt": "+20",
    "El Salvador": "+503",
    "Equatorial Guinea": "+240",
    "Eritrea": "+291",
    "Estonia": "+372",
    "Ethiopia": "+251",

    "Fiji": "+679",
    "Finland": "+358",
    "France": "+33",
    "French Guiana": "+594",
    "French Polynesia": "+689",

    "Gabon": "+241",
    "Gambia": "+220",
    "Georgia": "+995",
    "Germany": "+49",
    "Ghana": "+233",
    "Gibraltar": "+350",
    "Greece": "+30",
    "Greenland": "+299",
    "Grenada": "+1",
    "Guadeloupe": "+590",
    "Guam": "+1",
    "Guernsey": "+44",
    "Guinea": "+224",
    "Guyana": "+592",

    "Haiti": "+509",
    "Holy See": "+39",
    "Honduras": "+504",
    "Hong Kong (China)": "+852",
    "Hungary": "+36",

    "Iceland": "+354",
    "India": "+91",
    "Indonesia": "+62",
    "Iran (Islamic Republic of)": "+98",
    "Iraq": "+964",
    "Ireland": "+353",
    "Isle of Man": "+44",
    "Israel": "+972",
    "Italy": "+39",

    "Jamaica": "+1",
    "Japan": "+81",
    "Jersey": "+44",
    "Jordan": "+962",

    "Kazakhstan": "+7",
    "Kenya": "+254",
    "Kiribati": "+686",
    "Korea (the Democratic People's Republic of)": "+850",
    "Korea (South Korea)": "+82",
    "Kuwait": "+965",
    "Kyrgyzstan": "+996",

    "Lao peoples Democratic republic": "+856",
    "Latvia": "+371",
    "Lebanon": "+961",
    "Lesotho": "+266",
    "Liberia": "+231",
    "Libya": "+218",
    "Liechtenstein": "+423",
    "Lithuania": "+370",
    "Luxembourg": "+352",

    "Macao (China)": "+853",
    "Macedonia (The former Yugoslav Republic of)": "+389",
    "Madagascar": "+261",
    "Malawi": "+265",
    "Malaysia": "+60",
    "Maldives": "+960",
    "Mali": "+223",
    "Malta": "+356",
    "Marshall Islands": "+692",
    "Martinique": "+596",
    "Mauritania": "+222",
    "Mauritius": "+230",
    "Mayotte": "+262",
    "Mexico": "+52",
    "Moldova the republic": "+373",
    "Monaco": "+377",
    "Mongolia": "+976",
    "Montenegro": "+382",
    "Montserrat": "+1",
    "Morocco": "+212",
    "Mozambique": "+258",
    "Myanmar": "+95",

    "Namibia": "+264",
    "Nauru": "+674",
    "Nepal": "+977",
    "Netherlands": "+31",
    "New Caledonia": "+687",
    "New Zealand": "+64",
    "Nicaragua": "+505",
    "Niger": "+227",
    "Nigeria": "+234",
    "Niue": "+683",
    "Norfolk Island": "+672",
    "Northern Mariana Island": "+1",
    "Norway": "+47",

    "Oman": "+968",

    "Pakistan": "+92",
    "Palestine State of": "+970",
    "Panama": "+507",
    "Papua New Guinea": "+675",
    "Paraguay": "+595",
    "Peru": "+51",
    "Philippines": "+63",
    "Pitcairn": "+64",
    "Poland": "+48",
    "Portugal": "+351",
    "Puerto Rico": "+1",

    "Qatar": "+974",

    "Réunion": "+262",
    "Romania": "+40",
    "Russian Federation": "+7",
    "Rwanda": "+250",

    "Saint Kitts and Nevis": "+1",
    "Saint Lucia": "+1",
    "Saint Martin (French part)": "+590",
    "Saint Pierre and Miquelon": "+508",
    "Saint Vincent and the Grenadines": "+1",
    "Samoa": "+685",
    "San Marino": "+378",
    "Saudi Arabia": "+966",
    "Senegal": "+221",
    "Serbia": "+381",
    "Seychelles": "+248",
    "Sierra Leone": "+232",
    "Singapore": "+65",
    "Sint Maarten (Dutch Part)": "+1",
    "Slovakia": "+421",
    "Slovenia": "+386",
    "Solomon Islands": "+677",
    "Somalia": "+252",
    "South Africa": "+27",
    "South Sudan": "+211",
    "Spain": "+34",
    "Sri Lanka": "+94",
    "Sudan": "+249",
    "Suriname": "+597",
    "Swaziland": "+268",
    "Sweden": "+46",
    "Switzerland": "+41",

    "Taiwan": "+886",
    "Tajikistan": "+992",
    "Tanzania, United Republic of": "+255",
    "Thailand": "+66",
    "The Republic of Kosovo": "+383",
    "Timor-Leste": "+670",
    "Togo": "+228",
    "Tokelau": "+690",
    "Tonga": "+676",
    "Trinidad and Tobago": "+1",
    "Tunisia": "+216",
    "Turkey": "+90",
    "Turks and Caicos Islands": "+1",
    "Tuvalu": "+688",

    "Uganda": "+256",
    "Ukraine": "+380",
    "United Arab Emirates": "+971",
    "United Kingdom": "+44",
    "United States": "+1",
    "Uruguay": "+598",
    "Uzbekistan": "+998",

    "Vanuatu": "+678",
    "Venezuela (Bolivarian Republic of)": "+58",
    "Vietnam": "+84",
    "Virgin Islands (British)": "+1",
    "Virgin Islands (U.S.)": "+1",

    "Wallis and Futuna": "+681",
    "Western Sahara": "+212",

    "Zambia": "+260",
    "Zimbabwe": "+263"
};


// ============================================================
// HELPER FUNCTIONS
// ============================================================

function isBlockedCountry(country) {
    return BLOCKED_COUNTRIES.includes(country);
}


function getShippingUSD(country) {
    if (!country) return null;

    if (isBlockedCountry(country)) {
        return null;
    }

    const shipping = COUNTRY_SHIPPING_USD[country];

    if (typeof shipping !== "number") {
        return null;
    }

    return shipping;
}


function getSellingPriceUSD(country) {
    const shipping = getShippingUSD(country);

    if (shipping === null) {
        return null;
    }

    return CJ_PRODUCT_COST_USD + shipping + MINIMUM_PROFIT_USD;
}


function getCurrency(country) {
    return COUNTRY_CURRENCY[country] || "USD";
}


function getPhoneCode(country) {
    return COUNTRY_PHONE_CODES[country] || "";
}


function formatMoney(amount, currency) {

    if (!Number.isFinite(amount)) {
        return "—";
    }

    try {
        return new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: currency,
            maximumFractionDigits: 2
        }).format(amount);
    } catch (error) {
        return `${currency} ${amount.toFixed(2)}`;
    }
}


// ============================================================
// CART FUNCTIONS
// ============================================================

function getCart() {

    try {
        const saved = localStorage.getItem(CART_KEY);

        if (!saved) {
            return [];
        }

        const cart = JSON.parse(saved);

        return Array.isArray(cart) ? cart : [];

    } catch (error) {
        console.error("Cart loading error:", error);
        return [];
    }
}


function saveCart(cart) {

    try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (error) {
        console.error("Cart saving error:", error);
    }
}


function getCartQuantity() {

    return getCart().reduce((total, item) => {
        return total + (Number(item.quantity) || 0);
    }, 0);
}


function updateCartCount() {

    const cartCount = document.getElementById("cartCount");

    if (!cartCount) return;

    cartCount.textContent = getCartQuantity();
}


function addToCart(product) {

    const cart = getCart();

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            image: product.image || "",
            quantity: 1,

            // If a product has a custom cost, use it.
            // Otherwise use the current CJ product cost.
            costUSD: Number(product.costUSD) || CJ_PRODUCT_COST_USD
        });
    }

    saveCart(cart);
    updateCartCount();
    renderCart();

    openCartPanel();

    return cart;
}


function removeFromCart(index) {

    const cart = getCart();

    if (index < 0 || index >= cart.length) return;

    cart.splice(index, 1);

    saveCart(cart);

    updateCartCount();
    renderCart();
}


function changeCartQuantity(index, amount) {

    const cart = getCart();

    if (!cart[index]) return;

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart(cart);

    updateCartCount();
    renderCart();
}


function clearCart() {

    localStorage.removeItem(CART_KEY);

    updateCartCount();
    renderCart();
}


// ============================================================
// CART PANEL
// ============================================================

function openCartPanel() {

    const cartPanel = document.getElementById("cartPanel");

    if (cartPanel) {
        cartPanel.classList.add("active");
    }
}


function closeCartPanel() {

    const cartPanel = document.getElementById("cartPanel");

    if (cartPanel) {
        cartPanel.classList.remove("active");
    }
}


function renderCart() {

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems) return;

    const cart = getCart();

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">Your cart is empty.</p>
        `;

        if (cartTotal) {
            cartTotal.textContent = "$0.00";
        }

        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        const quantity = Number(item.quantity) || 1;

        /*
         * On the homepage there is no shipping country yet.
         * Therefore the cart shows the product cost until
         * the customer chooses a shipping country at checkout.
         */
        const itemPrice = Number(item.costUSD) || CJ_PRODUCT_COST_USD;

        const itemTotal = itemPrice * quantity;

        total += itemTotal;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <strong>${escapeHTML(item.name)}</strong>
                <small>
                    $${itemPrice.toFixed(2)} × ${quantity}
                </small>
            </div>

            <div style="display:flex;gap:8px;align-items:center;">
                <button
                    type="button"
                    class="cart-minus"
                    data-index="${index}">
                    −
                </button>

                <span>${quantity}</span>

                <button
                    type="button"
                    class="cart-plus"
                    data-index="${index}">
                    +
                </button>

                <button
                    type="button"
                    class="cart-remove"
                    data-index="${index}">
                    ×
                </button>
            </div>
        `;

        cartItems.appendChild(div);
    });

    if (cartTotal) {
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    cartItems.querySelectorAll(".cart-minus").forEach(button => {

        button.addEventListener("click", () => {

            const index = Number(button.dataset.index);

            changeCartQuantity(index, -1);
        });
    });


    cartItems.querySelectorAll(".cart-plus").forEach(button => {

        button.addEventListener("click", () => {

            const index = Number(button.dataset.index);

            changeCartQuantity(index, 1);
        });
    });


    cartItems.querySelectorAll(".cart-remove").forEach(button => {

        button.addEventListener("click", () => {

            const index = Number(button.dataset.index);

            removeFromCart(index);
        });
    });
}


// ============================================================
// HTML ESCAPE
// ============================================================

function escapeHTML(value) {

    const div = document.createElement("div");

    div.textContent = value == null ? "" : String(value);

    return div.innerHTML;
}


// ============================================================
// PRODUCT BUTTONS
// ============================================================

function setupProductButtons() {

    const buttons = document.querySelectorAll(".add-cart");

    buttons.forEach((button, index) => {

        button.addEventListener("click", () => {

            const name =
                button.dataset.product ||
                button.dataset.name ||
                `Product ${index + 1}`;

            const image =
                button.dataset.image ||
                "";

            const costUSD =
                Number(button.dataset.cost) ||
                Number(button.dataset.price) ||
                CJ_PRODUCT_COST_USD;

            const id =
                button.dataset.id ||
                name;

            addToCart({
                id,
                name,
                image,
                costUSD
            });
        });
    });
}


// ============================================================
// CHECKOUT COUNTRY DROPDOWN
// ============================================================

function populateCheckoutCountries() {

    const countrySelect =
        document.getElementById("checkoutCountry");

    if (!countrySelect) return;

    countrySelect.innerHTML = "";

    const firstOption = document.createElement("option");

    firstOption.value = "";
    firstOption.textContent = "Select your country";

    countrySelect.appendChild(firstOption);

    const countries = Object.keys(COUNTRY_SHIPPING_USD)
        .filter(country => {
            return (
                COUNTRY_SHIPPING_USD[country] !== null &&
                !isBlockedCountry(country)
            );
        })
        .sort((a, b) => a.localeCompare(b));

    countries.forEach(country => {

        const option = document.createElement("option");

        option.value = country;

        option.textContent = country;

        countrySelect.appendChild(option);
    });
}


// ============================================================
// AUTO COUNTRY CODE
// ============================================================

function updateCountryPhoneCode() {

    const countrySelect =
        document.getElementById("checkoutCountry");

    const phoneCodeSelect =
        document.getElementById("checkoutCountryCode");

    if (!countrySelect || !phoneCodeSelect) return;

    const country = countrySelect.value;

    const code = getPhoneCode(country);

    if (!code) return;

    /*
     * If the checkout HTML contains a <select>,
     * try to select the matching option.
     */
    const matchingOption =
        Array.from(phoneCodeSelect.options)
            .find(option => option.value === code);

    if (matchingOption) {

        phoneCodeSelect.value = code;

    } else {

        /*
         * If the current checkout dropdown doesn't contain
         * the country code, add it automatically.
         */
        const option = document.createElement("option");

        option.value = code;
        option.textContent = `${country} (${code})`;

        phoneCodeSelect.appendChild(option);

        phoneCodeSelect.value = code;
    }
}


// ============================================================
// CHECKOUT ITEMS
// ============================================================

function renderCheckoutItems() {

    const checkoutItems =
        document.getElementById("checkoutItems");

    if (!checkoutItems) return;

    const cart = getCart();

    checkoutItems.innerHTML = "";

    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        return;
    }

    cart.forEach(item => {

        const quantity = Number(item.quantity) || 1;

        const div = document.createElement("div");

        div.className = "checkout-item";

        div.innerHTML = `
            <div>
                <strong>${escapeHTML(item.name)}</strong>
                <small>Quantity: ${quantity}</small>
            </div>

            <strong>
                $${(
                    (Number(item.costUSD) || CJ_PRODUCT_COST_USD)
                    * quantity
                ).toFixed(2)}
            </strong>
        `;

        checkoutItems.appendChild(div);
    });
}


// ============================================================
// CHECKOUT PRICE CALCULATION
// ============================================================

function calculateCheckoutSubtotal(country) {

    const cart = getCart();

    if (cart.length === 0) {
        return 0;
    }

    const sellingPricePerUnit =
        getSellingPriceUSD(country);

    if (sellingPricePerUnit === null) {
        return null;
    }

    let subtotal = 0;

    cart.forEach(item => {

        const quantity = Number(item.quantity) || 1;

        subtotal += sellingPricePerUnit * quantity;
    });

    return subtotal;
}


// ============================================================
// CURRENCY CONVERSION
// ============================================================

let exchangeRates = null;
let exchangeRatesPromise = null;


async function loadExchangeRates() {

    if (exchangeRates) {
        return exchangeRates;
    }

    if (exchangeRatesPromise) {
        return exchangeRatesPromise;
    }

    exchangeRatesPromise = fetch(
        "https://open.er-api.com/v6/latest/USD",
        {
            method: "GET",
            cache: "no-store"
        }
    )
        .then(response => {

            if (!response.ok) {
                throw new Error(
                    `Currency API HTTP ${response.status}`
                );
            }

            return response.json();
        })
        .then(data => {

            if (
                !data ||
                data.result !== "success" ||
                !data.rates
            ) {
                throw new Error("Invalid currency API response.");
            }

            exchangeRates = data.rates;

            return exchangeRates;
        })
        .catch(error => {

            console.error(
                "Currency conversion error:",
                error
            );

            exchangeRatesPromise = null;

            return null;
        });

    return exchangeRatesPromise;
}


async function convertUSDToCurrency(
    amountUSD,
    currency
) {

    if (!Number.isFinite(amountUSD)) {
        return null;
    }

    if (currency === "USD") {
        return amountUSD;
    }

    const rates = await loadExchangeRates();

    if (!rates || !rates[currency]) {

        console.warn(
            `No exchange rate available for ${currency}.`
        );

        return null;
    }

    return amountUSD * Number(rates[currency]);
}


// ============================================================
// UPDATE CHECKOUT SUMMARY
// ============================================================

let checkoutCalculationToken = 0;


async function updateCheckoutSummary() {

    const countrySelect =
        document.getElementById("checkoutCountry");

    const currencyElement =
        document.getElementById("checkoutCurrency");

    const subtotalElement =
        document.getElementById("checkoutSubtotal");

    const totalElement =
        document.getElementById("checkoutTotal");

    const shippingElement =
        document.getElementById("checkoutShipping");

    const placeOrderButton =
        document.getElementById("placeOrderButton");

    if (!countrySelect) return;

    const country = countrySelect.value;

    checkoutCalculationToken++;

    const currentToken = checkoutCalculationToken;

    /*
     * No country selected.
     */
    if (!country) {

        if (currencyElement) {
            currencyElement.textContent = "USD";
        }

        if (subtotalElement) {
            subtotalElement.textContent = "—";
        }

        if (totalElement) {
            totalElement.textContent = "—";
        }

        if (shippingElement) {
            shippingElement.textContent = "FREE";
        }

        if (placeOrderButton) {
            placeOrderButton.disabled = true;
        }

        updateCountryPhoneCode();

        return;
    }


    /*
     * Blocked country.
     */
    if (isBlockedCountry(country)) {

        if (currencyElement) {
            currencyElement.textContent = "—";
        }

        if (subtotalElement) {
            subtotalElement.textContent =
                "Shipping unavailable";
        }

        if (totalElement) {
            totalElement.textContent =
                "Unavailable";
        }

        if (shippingElement) {
            shippingElement.textContent =
                "Unavailable";
        }

        if (placeOrderButton) {
            placeOrderButton.disabled = true;
        }

        alert(
            "Sorry, Sacchi Flyier currently does not ship to this country."
        );

        countrySelect.value = "";

        return;
    }


    const shippingUSD =
        getShippingUSD(country);

    const subtotalUSD =
        calculateCheckoutSubtotal(country);

    const currency =
        getCurrency(country);


    if (
        shippingUSD === null ||
        subtotalUSD === null
    ) {

        if (placeOrderButton) {
            placeOrderButton.disabled = true;
        }

        return;
    }


    if (currencyElement) {
        currencyElement.textContent = currency;
    }

    if (shippingElement) {
        shippingElement.textContent = "FREE";
    }

    if (subtotalElement) {
        subtotalElement.textContent = "Calculating...";
    }

    if (totalElement) {
        totalElement.textContent = "Calculating...";
    }

    /*
     * Country code automatically follows country.
     */
    updateCountryPhoneCode();


    /*
     * Convert the selling price to customer's currency.
     */
    const convertedTotal =
        await convertUSDToCurrency(
            subtotalUSD,
            currency
        );


    /*
     * Prevent an older API response from changing
     * the summary after the customer selects another country.
     */
    if (currentToken !== checkoutCalculationToken) {
        return;
    }


    if (convertedTotal === null) {

        /*
         * If conversion is unavailable,
         * keep the price in USD rather than showing
         * an incorrect amount.
         */
        if (currencyElement) {
            currencyElement.textContent = "USD";
        }

        if (subtotalElement) {
            subtotalElement.textContent =
                formatMoney(subtotalUSD, "USD");
        }

        if (totalElement) {
            totalElement.textContent =
                formatMoney(subtotalUSD, "USD");
        }

    } else {

        if (subtotalElement) {
            subtotalElement.textContent =
                formatMoney(convertedTotal, currency);
        }

        if (totalElement) {
            totalElement.textContent =
                formatMoney(convertedTotal, currency);
        }
    }


    /*
     * Customer sees FREE shipping.
     */
    if (shippingElement) {
        shippingElement.textContent = "FREE";
    }


    /*
     * Enable Place Order only when:
     * - cart contains products
     * - country is valid
     */
    if (placeOrderButton) {

        const cart = getCart();

        placeOrderButton.disabled =
            cart.length === 0;
    }
}


// ============================================================
// CHECKOUT FORM
// ============================================================

function setupCheckoutForm() {

    const checkoutForm =
        document.getElementById("checkoutForm");

    if (!checkoutForm) return;


    const countrySelect =
        document.getElementById("checkoutCountry");


    if (countrySelect) {

        countrySelect.addEventListener(
            "change",
            updateCheckoutSummary
        );
    }


    checkoutForm.addEventListener(
        "submit",
        handleCheckoutSubmit
    );


    /*
     * Update the button when customer fills fields.
     */
    checkoutForm.addEventListener(
        "input",
        () => {

            const country =
                countrySelect
                    ? countrySelect.value
                    : "";

            const button =
                document.getElementById(
                    "placeOrderButton"
                );

            if (!button) return;

            const cart = getCart();

            button.disabled =
                !country ||
                cart.length === 0;
        }
    );
}


async function handleCheckoutSubmit(event) {

    event.preventDefault();

    const form = event.currentTarget;

    const country =
        document.getElementById(
            "checkoutCountry"
        )?.value;


    if (!country) {

        alert("Please select your country.");

        return;
    }


    if (isBlockedCountry(country)) {

        alert(
            "Sorry, Sacchi Flyier does not ship to this country."
        );

        return;
    }


    const cart = getCart();


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


    const sellingPriceUSD =
        getSellingPriceUSD(country);


    if (sellingPriceUSD === null) {

        alert(
            "Shipping is currently unavailable for this country."
        );

        return;
    }


    const quantity =
        cart.reduce(
            (total, item) =>
                total + (Number(item.quantity) || 1),
            0
        );


    const totalUSD =
        sellingPriceUSD * quantity;


    const currency =
        getCurrency(country);


    const convertedTotal =
        await convertUSDToCurrency(
            totalUSD,
            currency
        );


    const paymentMethod =
        document.querySelector(
            'input[name="paymentMethod"]:checked'
        )?.value || "cod";


    /*
     * Save order information locally.
     *
     * This is useful until a real backend/order
     * system is connected.
     */
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

        shippingAddress: {

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

            country,

            postalCode:
                document.getElementById(
                    "checkoutPostalCode"
                )?.value.trim()
        },

        items: cart,

        pricing: {

            productCostUSD:
                CJ_PRODUCT_COST_USD,

            cjShippingUSD:
                getShippingUSD(country),

            profitUSD:
                MINIMUM_PROFIT_USD,

            sellingPricePerItemUSD:
                sellingPriceUSD,

            totalUSD,

            currency,

            convertedTotal:
                convertedTotal !== null
                    ? convertedTotal
                    : totalUSD,

            customerShipping:
                "FREE"
        },

        paymentMethod,

        createdAt:
            new Date().toISOString()
    };


    try {

        localStorage.setItem(
            "sacchiFlyierLastOrder",
            JSON.stringify(order)
        );

    } catch (error) {

        console.error(
            "Could not save order:",
            error
        );
    }


    /*
     * Online payment cannot actually be charged by
     * JavaScript alone. A payment gateway/backend
     * must be connected before accepting real payments.
     */
    if (paymentMethod === "online") {

        alert(
            "Online payment is selected. A payment gateway still needs to be connected before real online payments can be accepted."
        );

        return;
    }


    /*
     * COD confirmation.
     */
    alert(
        `Order received!\n\n` +
        `Order ID: ${order.orderId}\n` +
        `Total: ${
            convertedTotal !== null
                ? formatMoney(convertedTotal, currency)
                : formatMoney(totalUSD, "USD")
        }\n` +
        `Shipping: FREE`
    );


    /*
     * Clear cart after COD order.
     */
    clearCart();


    /*
     * Return customer to homepage.
     */
    window.location.href = "index.html";
}


// ============================================================
// CHECKOUT INITIALIZATION
// ============================================================

function initializeCheckout() {

    const checkoutCountry =
        document.getElementById(
            "checkoutCountry"
        );

    if (!checkoutCountry) return;

    populateCheckoutCountries();

    renderCheckoutItems();

    updateCountryPhoneCode();

    updateCheckoutSummary();
}


// ============================================================
// CHECKOUT BUTTON FROM CART
// ============================================================

function setupCheckoutButton() {

    const checkoutButton =
        document.getElementById(
            "checkoutButton"
        );

    if (!checkoutButton) return;

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


// ============================================================
// SEARCH
// ============================================================

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
        !searchButton ||
        !searchOverlay
    ) {
        return;
    }


    searchButton.addEventListener(
        "click",
        () => {

            searchOverlay.classList.add(
                "active"
            );

            if (searchInput) {
                setTimeout(
                    () => searchInput.focus(),
                    100
                );
            }
        }
    );


    if (closeSearch) {

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
            "keydown",
            event => {

                if (event.key !== "Enter") {
                    return;
                }

                const query =
                    searchInput.value
                        .trim()
                        .toLowerCase();

                if (!query) return;

                performProductSearch(query);
            }
        );
    }
}


function performProductSearch(query) {

    const products =
        document.querySelectorAll(
            ".product-card, .product, [data-product]"
        );


    let found = false;


    products.forEach(product => {

        const text =
            product.textContent
                .toLowerCase();

        const matches =
            text.includes(query);

        product.style.display =
            matches ? "" : "none";

        if (matches) {
            found = true;
        }
    });


    const searchOverlay =
        document.getElementById(
            "searchOverlay"
        );

    if (searchOverlay) {
        searchOverlay.classList.remove(
            "active"
        );
    }


    if (!found) {

        alert(
            `No products found for "${query}".`
        );
    }
}


// ============================================================
// MOBILE MENU
// ============================================================

function setupMobileMenu() {

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );

    const navLinks =
        document.getElementById(
            "navLinks"
        );


    if (!menuToggle || !navLinks) {
        return;
    }


    menuToggle.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "active"
            );
        }
    );


    navLinks.querySelectorAll("a")
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


// ============================================================
// CART BUTTON
// ============================================================

function setupCartButton() {

    const cartButton =
        document.getElementById(
            "cartButton"
        );

    if (!cartButton) return;

    cartButton.addEventListener(
        "click",
        openCartPanel
    );


    const closeCart =
        document.getElementById(
            "closeCart"
        );

    if (closeCart) {

        closeCart.addEventListener(
            "click",
            closeCartPanel
        );
    }
}


// ============================================================
// COUNTRY CODE DROPDOWN SUPPORT
// ============================================================

function syncCountryCodeDropdown() {

    const countryCode =
        document.getElementById(
            "checkoutCountryCode"
        );

    if (!countryCode) return;

    /*
     * The HTML you sent already contains a <select>.
     * We make sure the most important codes are available.
     */
    const existingValues =
        new Set(
            Array.from(
                countryCode.options
            ).map(option => option.value)
        );


    Object.values(
        COUNTRY_PHONE_CODES
    ).forEach(code => {

        if (!existingValues.has(code)) {

            const option =
                document.createElement(
                    "option"
                );

            option.value = code;
            option.textContent = code;

            countryCode.appendChild(option);

            existingValues.add(code);
        }
    });
}


// ============================================================
// AUTO-DETECT COUNTRY FROM BROWSER LANGUAGE
// ============================================================

function tryDetectCountry() {

    const countrySelect =
        document.getElementById(
            "checkoutCountry"
        );

    if (!countrySelect) return;

    /*
     * We do not automatically select a country based
     * on IP/location. Instead, browser language is only
     * used as a harmless convenience when it matches
     * a country code.
     */
    const language =
        navigator.language || "";

    const parts =
        language.split("-");

    if (parts.length < 2) {
        return;
    }

    const region =
        parts[1].toUpperCase();


    const regionToCountry = {

        "IN": "India",
        "US": "United States",
        "GB": "United Kingdom",
        "CA": "Canada",
        "AU": "Australia",
        "NZ": "New Zealand",
        "DE": "Germany",
        "FR": "France",
        "IT": "Italy",
        "ES": "Spain",
        "PT": "Portugal",
        "JP": "Japan",
        "CN": "China",
        "KR": "Korea (South Korea)",
        "SG": "Singapore",
        "MY": "Malaysia",
        "ID": "Indonesia",
        "TH": "Thailand",
        "PH": "Philippines",
        "VN": "Vietnam",
        "PK": "Pakistan",
        "BD": "Bangladesh",
        "NP": "Nepal",
        "LK": "Sri Lanka",
        "AE": "United Arab Emirates",
        "SA": "Saudi Arabia",
        "BR": "Brazil",
        "MX": "Mexico"
    };


    const detectedCountry =
        regionToCountry[region];


    if (
        detectedCountry &&
        Array.from(
            countrySelect.options
        ).some(
            option =>
                option.value === detectedCountry
        )
    ) {

        /*
         * Do not force selection if the customer
         * has already selected something.
         */
        if (!countrySelect.value) {
            countrySelect.value =
                detectedCountry;

            updateCheckoutSummary();
        }
    }
}


// ============================================================
// NEWSLETTER FORM
// ============================================================

function setupNewsletterForm() {

    const form =
        document.getElementById(
            "newsletterForm"
        );

    const emailInput =
        document.getElementById(
            "newsletterEmail"
        );


    if (!form || !emailInput) {
        return;
    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const email =
                emailInput.value.trim();


            if (!email) {
                return;
            }


            /*
             * The frontend stores the email locally.
             * Your Resend backend can be connected later
             * to send/store newsletter subscriptions.
             */
            try {

                localStorage.setItem(
                    "sacchiFlyierNewsletterEmail",
                    email
                );

            } catch (error) {

                console.error(
                    "Newsletter storage error:",
                    error
                );
            }


            alert(
                "Thanks for subscribing to Sacchi Flyier!"
            );

            form.reset();
        }
    );
}


// ============================================================
// CONTACT FORM
// ============================================================

function setupContactForm() {

    const form =
        document.getElementById(
            "contactForm"
        );

    if (!form) return;


    form.addEventListener(
        "submit",
        event => {

            /*
             * Prevent browser reload.
             *
             * Your Resend/server backend should handle
             * the actual email delivery.
             */
            event.preventDefault();


            if (!form.checkValidity()) {

                form.reportValidity();

                return;
            }


            alert(
                "Your message has been prepared successfully."
            );
        }
    );
}


// ============================================================
// START EVERYTHING
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCartCount();

        renderCart();

        setupProductButtons();

        setupCartButton();

        setupCheckoutButton();

        setupSearch();

        setupMobileMenu();

        setupNewsletterForm();

        setupContactForm();

        syncCountryCodeDropdown();

        initializeCheckout();

        tryDetectCountry();
    }
);
