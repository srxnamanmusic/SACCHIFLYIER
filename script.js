/* =========================================================
   SACCHI FLYIER
   CLEAN CART + CHECKOUT + COUNTRY CURRENCY SYSTEM
   ========================================================= */


/* =========================================================
   1. PRODUCT SETTINGS
   ========================================================= */

const PRODUCT_1 = {
    sku: "CJLX239765601AZ",
    name: "Light Luxury High-grade Micro Inlaid Zircon Chain Earrings",
    costUSD: 1.62
};

const PRODUCT_2 = {
    sku: "CJYD268159623WD",
    name: "Fleece Zip Up Jacket Women's Stand Collar Solid Color Loose Fit Casual Long Sleeve Outerwear",
    costUSD: 6.14
};

const PROFIT_USD = 10.00;


/* =========================================================
   2. PRODUCT 1 SHIPPING RATES
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
   4. COUNTRY → CURRENCY
   ========================================================= */

const countryCurrency = {

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
    "Guatemala": "GTQ",
    "Guernsey": "GBP",
    "Guinea": "GNF",
    "Guyana": "GYD",
    "Haiti": "HTG",
    "Heard Island and McDonald Islands": "AUD",
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
    "Korea": "KRW",
    "Kuwait": "KWD",
    "Kyrgyzstan": "KGS",
    "Lao People’s Democratic Republic": "LAK",
    "Latvia": "EUR",
    "Lebanon": "LBP",
    "Lesotho": "LSL",
    "Liberia": "LRD",
    "Libya": "LYD",
    "Liechtenstein": "CHF",
    "Lithuania": "EUR",
    "Luxembourg": "EUR",
    "Macao (China)": "MOP",
    "Macedonia (the former Yugoslav Republic of)": "MKD",
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
    "Moldova (the Republic of)": "MDL",
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
    "Russia": "RUB",
    "Rwanda": "RWF",
    "Saint Helena, Ascension and Tristan da Cunha": "SHP",
    "Saint Kitts and Nevis": "XCD",
    "Saint Lucia": "XCD",
    "Saint Martin (French part)": "EUR",
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
    "Sint Maarten (Dutch part)": "ANG",
    "Slovakia": "EUR",
    "Slovenia": "EUR",
    "Solomon Islands": "SBD",
    "Somalia": "SOS",
    "South Africa": "ZAR",
    "South Georgia and the South Sandwich Islands": "GBP",
    "Spain": "EUR",
    "Sri Lanka": "LKR",
    "Sudan": "SDG",
    "Suriname": "SRD",
    "Eswatini": "SZL",
    "Sweden": "SEK",
    "Switzerland": "CHF",
    "Taiwan (Province of China)": "TWD",
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


/* =========================================================
   5. CURRENCY SYMBOLS
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
    TWD: "NT$",

    AOA: "Kz",
    AMD: "֏",
    AWG: "ƒ",
    BSD: "B$",
    BHD: ".د.ب",
    BBD: "Bds$",
    BYN: "Br",
    BZD: "BZ$",
    BOB: "Bs.",
    BAM: "KM",
    BWP: "P",
    BND: "B$",
    BIF: "FBu",
    CVE: "$",
    XOF: "CFA",
    XAF: "FCFA",
    XCD: "EC$",
    CUP: "$",
    ANG: "ƒ",
    DOP: "RD$",
    ERN: "Nfk",
    ETB: "Br",
    FKP: "£",
    FJD: "FJ$",
    GMD: "D",
    GHS: "₵",
    GIP: "£",
    GTQ: "Q",
    GNF: "FG",
    GYD: "G$",
    HTG: "G",
    HNL: "L",
    IRR: "﷼",
    JMD: "J$",
    JOD: "د.ا",
    KWD: "د.ك",
    KGS: "с",
    LAK: "₭",
    LBP: "ل.ل",
    LSL: "L",
    LRD: "L$",
    LYD: "ل.د",
    MOP: "MOP$",
    MKD: "ден",
    MGA: "Ar",
    MWK: "MK",
    MNT: "₮",
    MRU: "UM",
    MUR: "₨",
    MMK: "K",
    NAD: "N$",
    NIO: "C$",
    PGK: "K",
    PAB: "B/.",
    PYG: "₲",
    RWF: "FRw",
    SCR: "₨",
    SLE: "Le",
    SHP: "£",
    SBD: "SI$",
    SOS: "S",
    SDG: "ج.س.",
    SRD: "$",
    SZL: "E",
    TJS: "SM",
    TZS: "TSh",
    TOP: "T$",
    TTD: "TT$",
    UGX: "USh",
    UYU: "$U",
    UZS: "лв",
    VUV: "VT",
    VES: "Bs.",
    XPF: "₣",
    ZMW: "ZK",
    ZWG: "Zi"
};


/* =========================================================
   6. FALLBACK EXCHANGE RATES
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
    TRY: 33,
    ZAR: 18.20,

    BDT: 117,
    PKR: 278,
    NPR: 133,
    LKR: 300,
    MYR: 4.70,
    THB: 36,
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
    MAD: 10,
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
    ISK: 140,
    MVR: 15.40,
    RSD: 108,
    TND: 3.10,
    OMR: 0.385,
    QAR: 3.64,
    KHR: 4100,
    HKD: 7.80,
    TWD: 32,

    AOA: 900,
    AMD: 390,
    AWG: 1.79,
    BSD: 1,
    BHD: 0.376,
    BBD: 2,
    BYN: 3.3,
    BZD: 2,
    BOB: 6.9,
    BAM: 1.80,
    BWP: 13.5,
    BND: 1.34,
    BIF: 2900,
    CVE: 101,
    XOF: 605,
    XAF: 605,
    XCD: 2.70,
    CUP: 24,
    ANG: 1.79,
    DOP: 60,
    ERN: 15,
    ETB: 57,
    FKP: 0.78,
    FJD: 2.25,
    GMD: 68,
    GIP: 0.78,
    GTQ: 7.75,
    GNF: 8600,
    GYD: 209,
    HTG: 132,
    HNL: 25,
    IRR: 42000,
    JMD: 158,
    JOD: 0.709,
    KWD: 0.307,
    KGS: 87,
    LAK: 22000,
    LBP: 89500,
    LSL: 18.2,
    LRD: 190,
    LYD: 4.85,
    MOP: 8.05,
    MKD: 56.5,
    MGA: 4500,
    MWK: 1740,
    MNT: 3450,
    MRU: 39,
    MUR: 46,
    MMK: 2100,
    NAD: 18.2,
    NIO: 36.7,
    PAB: 1,
    PGK: 3.8,
    PYG: 7900,
    RWF: 1400,
    SCR: 13.5,
    SLE: 22.5,
    SHP: 0.78,
    SBD: 8.5,
    SOS: 570,
    SDG: 600,
    SRD: 36,
    SZL: 18.2,
    TJS: 10.9,
    TZS: 2650,
    TOP: 2.35,
    TTD: 6.75,
    UGX: 3500,
    UYU: 40,
    UZS: 12600,
    VUV: 120,
    VES: 120,
    XPF: 109,
    ZMW: 27,
    ZWG: 13.5
};


/* =========================================================
   7. LIVE CURRENCY UPDATE
   ========================================================= */

async function loadLiveExchangeRates() {

    try {

        const response =
            await fetch(
                "https://open.er-api.com/v6/latest/USD",
                {
                    cache: "no-store"
                }
            );

        if (!response.ok) {
            throw new Error("Currency API error");
        }

        const data =
            await response.json();

        if (
            data &&
            data.result === "success" &&
            data.rates
        ) {

            Object.assign(
                exchangeRates,
                data.rates
            );

            updateStoreCartUI();
            updateCheckout();
        }

    } catch (error) {

        console.warn(
            "Live exchange rates unavailable. Using fallback rates.",
            error
        );
    }
}


/* =========================================================
   8. CART STORAGE
   ========================================================= */

function getCart() {

    try {

        const saved =
            localStorage.getItem("cart");

        if (!saved) {
            return [];
        }

        const cart =
            JSON.parse(saved);

        if (!Array.isArray(cart)) {
            return [];
        }

        return cart;

    } catch (error) {

        console.error(
            "Unable to read cart:",
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
   9. COUNTRY
   ========================================================= */

function getSelectedCountry() {

    return (
        localStorage.getItem("customerCountry") ||
        localStorage.getItem("checkoutCountry") ||
        "India"
    );
}


function setSelectedCountry(country) {

    if (!country) {
        return;
    }

    localStorage.setItem(
        "customerCountry",
        country
    );

    localStorage.setItem(
        "checkoutCountry",
        country
    );
}


/* =========================================================
   10. CURRENCY FUNCTIONS
   ========================================================= */

function getCurrency(country) {

    return (
        countryCurrency[country] ||
        "USD"
    );
}


function convertUSDToCurrency(
    amountUSD,
    currency
) {

    const amount =
        Number(amountUSD) || 0;

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


function formatMoney(
    amount,
    currency
) {

    const value =
        Number(amount) || 0;

    const symbol =
        currencySymbols[currency] ||
        currency;

    const zeroDecimalCurrencies = [
        "JPY",
        "KRW",
        "VND",
        "IDR",
        "CLP",
        "COP"
    ];

    const decimals =
        zeroDecimalCurrencies.includes(
            currency
        )
            ? 0
            : 2;

    return (
        symbol +
        value.toLocaleString(
            "en-US",
            {
                minimumFractionDigits:
                    decimals,

                maximumFractionDigits:
                    decimals
            }
        )
    );
}


/* =========================================================
   11. SHIPPING
   ========================================================= */

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

    return blockedCountries.includes(
        country
    );
}


/* =========================================================
   12. PRODUCT INFORMATION
   ========================================================= */

function getProductSKU(item) {

    return (
        item?.sku ||
        item?.SKU ||
        item?.productSku ||
        ""
    );
}


function getProductCost(item) {

    const sku =
        getProductSKU(item);

    if (
        sku === PRODUCT_1.sku
    ) {
        return PRODUCT_1.costUSD;
    }

    if (
        sku === PRODUCT_2.sku
    ) {
        return PRODUCT_2.costUSD;
    }

    const storedPrice =
        Number(item?.price);

    if (
        Number.isFinite(storedPrice)
    ) {
        return storedPrice;
    }

    return PRODUCT_1.costUSD;
}


/* =========================================================
   13. PRODUCT PRICE
   ========================================================= */

function getItemUSDPrice(
    item,
    country
) {

    /*
       If the product page already saved
       a final USD price, use it.

       This prevents Product 2 from
       accidentally using Product 1
       shipping.
    */

    if (
        item &&
        item.finalPriceUSD !== undefined
    ) {

        const savedFinal =
            Number(
                item.finalPriceUSD
            );

        if (
            Number.isFinite(savedFinal)
        ) {
            return savedFinal;
        }
    }

    /*
       Product 1 fallback calculation.
    */

    const cost =
        getProductCost(item);

    const shipping =
        getShippingRate(country);

    if (
        shipping === null
    ) {
        return null;
    }

    return (
        cost +
        shipping +
        PROFIT_USD
    );
}


/* =========================================================
   14. ADD TO CART
   ========================================================= */

function addToCart(
    productName,
    sku = PRODUCT_1.sku,
    priceUSD = null
) {

    const cart =
        getCart();

    const existing =
        cart.find(
            item =>
                item.sku === sku
        );

    if (existing) {

        existing.quantity =
            Number(
                existing.quantity || 1
            ) + 1;

    } else {

        const product =
            sku === PRODUCT_2.sku
                ? PRODUCT_2
                : PRODUCT_1;

        cart.push({

            name:
                productName ||
                product.name,

            sku:
                sku,

            price:
                Number.isFinite(
                    Number(priceUSD)
                )
                    ? Number(priceUSD)
                    : product.costUSD,

            quantity: 1
        });
    }

    saveCart(cart);

    updateCartCount();

    updateStoreCartUI();

    openCart();
}


/* =========================================================
   15. UPDATE CART COUNT
   ========================================================= */

function updateCartCount() {

    const elements =
        document.querySelectorAll(
            "#cartCount, .cart-count"
        );

    const cart =
        getCart();

    const count =
        cart.reduce(
            (total, item) =>
                total +
                Math.max(
                    1,
                    Number(
                        item.quantity || 1
                    )
                ),
            0
        );

    elements.forEach(
        element => {
            element.textContent =
                count;
        }
    );
}


/* =========================================================
   16. OPEN CART
   ========================================================= */

function openCart() {

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


/* =========================================================
   17. CLOSE CART
   ========================================================= */

function closeCartPanel() {

    const cartPanel =
        document.getElementById(
            "cartPanel"
        );

    if (cartPanel) {

        cartPanel.classList.remove(
            "active"
        );
    }
}


/* =========================================================
   18. CART UI
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

    const cart =
        getCart();

    const country =
        getSelectedCountry();

    const currency =
        getCurrency(country);

    cartItems.innerHTML = "";

    if (
        cart.length === 0
    ) {

        cartItems.innerHTML =
            `
            <p class="empty-cart">
                Your cart is empty.
            </p>
            `;

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

    cart.forEach(
        (item, index) => {

            const quantity =
                Math.max(
                    1,
                    Number(
                        item.quantity || 1
                    )
                );

            const unitPrice =
                getItemUSDPrice(
                    item,
                    country
                );

            if (
                unitPrice === null
            ) {
                return;
            }

            const itemTotalUSD =
                unitPrice * quantity;

            totalUSD +=
                itemTotalUSD;

            const itemElement =
                document.createElement(
                    "div"
                );

            itemElement.className =
                "cart-item";

            itemElement.innerHTML =
                `
                <div class="cart-item-info">

                    <strong>
                        ${escapeHTML(
                            item.name ||
                            "Product"
                        )}
                    </strong>

                    <div class="cart-quantity">

                        <span>Qty:</span>

                        <button
                            type="button"
                            class="quantity-minus"
                            data-index="${index}"
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
                        >
                            +
                        </button>

                    </div>

                    <p>
                        ${formatMoney(
                            convertUSDToCurrency(
                                itemTotalUSD,
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
        }
    );

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
}


/* =========================================================
   19. CART BUTTON ACTIONS
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const plus =
            event.target.closest(
                ".quantity-plus"
            );

        const minus =
            event.target.closest(
                ".quantity-minus"
            );

        const remove =
            event.target.closest(
                ".remove-cart-item"
            );

        /* REMOVE */

        if (remove) {

            const index =
                Number(
                    remove.dataset.index
                );

            const cart =
                getCart();

            if (
                Number.isInteger(index) &&
                cart[index]
            ) {

                cart.splice(
                    index,
                    1
                );

                saveCart(cart);

                updateCartCount();

                updateStoreCartUI();

                updateCheckout();
            }

            return;
        }

        /* PLUS / MINUS */

        if (
            !plus &&
            !minus
        ) {
            return;
        }

        const button =
            plus || minus;

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

        if (plus) {
            quantity++;
        }

        if (minus) {
            quantity--;
        }

        /*
           Minimum quantity = 1
        */

        quantity =
            Math.max(
                1,
                quantity
            );

        cart[index].quantity =
            quantity;

        saveCart(cart);

        updateCartCount();

        updateStoreCartUI();

        updateCheckout();
    }
);


/* =========================================================
   20. CHECKOUT PAGE
   ========================================================= */

function updateCheckout() {

    const checkoutItems =
        document.getElementById(
            "checkoutItems"
        );

    if (!checkoutItems) {
        return;
    }

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

    const countryError =
        document.getElementById(
            "countryError"
        );

    const placeOrderButton =
        document.getElementById(
            "placeOrderButton"
        );

    const countrySelect =
        document.getElementById(
            "checkoutCountry"
        );

    const cart =
        getCart();

    const country =
        countrySelect?.value ||
        getSelectedCountry();

    const currency =
        getCurrency(country);

    if (currencyElement) {

        currencyElement.textContent =
            currency;
    }

    checkoutItems.innerHTML =
        "";

    if (countryError) {

        countryError.textContent =
            "";

        countryError.style.display =
            "none";
    }

    if (placeOrderButton) {

        placeOrderButton.disabled =
            true;
    }

    if (
        cart.length === 0
    ) {

        checkoutItems.innerHTML =
            `
            <div class="empty-cart">
                Your cart is empty.
            </div>
            `;

        setCheckoutTotals(
            0,
            currency
        );

        return;
    }

    if (
        !country
    ) {

        checkoutItems.innerHTML =
            `
            <div class="empty-cart">
                Please select your country.
            </div>
            `;

        return;
    }

    if (
        isCountryBlocked(country)
    ) {

        checkoutItems.innerHTML =
            `
            <div class="empty-cart">
                Shipping is unavailable to this country.
            </div>
            `;

        if (countryError) {

            countryError.textContent =
                "Sorry, Sacchi Flyier does not currently ship to this country.";

            countryError.style.display =
                "block";
        }

        return;
    }

    if (
        getShippingRate(country) === null
    ) {

        checkoutItems.innerHTML =
            `
            <div class="empty-cart">
                Shipping is currently unavailable for this country.
            </div>
            `;

        if (countryError) {

            countryError.textContent =
                "Shipping is currently unavailable for this country.";

            countryError.style.display =
                "block";
        }

        return;
    }

    let subtotalUSD = 0;

    cart.forEach(
        item => {

            const quantity =
                Math.max(
                    1,
                    Number(
                        item.quantity || 1
                    )
                );

            const unitPrice =
                getItemUSDPrice(
                    item,
                    country
                );

            if (
                unitPrice === null
            ) {
                return;
            }

            const itemTotalUSD =
                unitPrice * quantity;

            subtotalUSD +=
                itemTotalUSD;

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "summary-item";

            row.innerHTML =
                `
                <span class="summary-item-name">

                    ${escapeHTML(
                        item.name ||
                        "Product"
                    )}

                    × ${quantity}

                </span>

                <strong class="summary-item-price">

                    ${formatMoney(
                        convertUSDToCurrency(
                            itemTotalUSD,
                            currency
                        ),
                        currency
                    )}

                </strong>
                `;

            checkoutItems.appendChild(
                row
            );
        }
    );

    setCheckoutTotals(
        subtotalUSD,
        currency
    );

    if (shippingElement) {

        shippingElement.textContent =
            "FREE";
    }

    if (placeOrderButton) {

        placeOrderButton.disabled =
            false;
    }
}


/* =========================================================
   21. CHECKOUT TOTALS
   ========================================================= */

function setCheckoutTotals(
    totalUSD,
    currency
) {

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
   22. CHECKOUT COUNTRY
   ========================================================= */

function setupCheckoutCountry() {

    const select =
        document.getElementById(
            "checkoutCountry"
        );

    if (!select) {
        return;
    }

    const saved =
        getSelectedCountry();

    if (saved) {

        const option =
            Array.from(
                select.options
            ).find(
                option =>
                    option.value === saved
            );

        if (option) {

            select.value =
                saved;
        }
    }

    select.addEventListener(
        "change",
        function () {

            setSelectedCountry(
                this.value
            );

            updateCheckout();

            updateStoreCartUI();
        }
    );
}


/* =========================================================
   23. CHECKOUT FORM
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

            if (
                cart.length === 0
            ) {

                alert(
                    "Your cart is empty."
                );

                return;
            }

            if (
                !form.checkValidity()
            ) {

                form.reportValidity();

                return;
            }

            const paymentMethod =
                document.querySelector(
                    'input[name="paymentMethod"]:checked'
                )?.value ||
                "cod";

            const order = {

                orderId:
                    "SF-" +
                    Date.now(),

                customer: {

                    name:
                        document.getElementById(
                            "checkoutName"
                        )?.value.trim() || "",

                    email:
                        document.getElementById(
                            "checkoutEmail"
                        )?.value.trim() || "",

                    countryCode:
                        document.getElementById(
                            "checkoutCountryCode"
                        )?.value || "",

                    phone:
                        document.getElementById(
                            "checkoutPhone"
                        )?.value.trim() || ""
                },

                address: {

                    address:
                        document.getElementById(
                            "checkoutAddress"
                        )?.value.trim() || "",

                    city:
                        document.getElementById(
                            "checkoutCity"
                        )?.value.trim() || "",

                    state:
                        document.getElementById(
                            "checkoutState"
                        )?.value.trim() || "",

                    postalCode:
                        document.getElementById(
                            "checkoutPostalCode"
                        )?.value.trim() || "",

                    country:
                        country
                },

                paymentMethod:
                    paymentMethod,

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

            alert(
                "Order information saved successfully!\n\n" +
                "Order ID: " +
                order.orderId
            );
        }
    );
}


/* =========================================================
   24. CART OPEN / CLOSE BUTTON
   ========================================================= */

function setupCartButton() {

    const cartButton =
        document.getElementById(
            "cartButton"
        );

    const closeButton =
        document.getElementById(
            "closeCart"
        );

    if (cartButton) {

        cartButton.addEventListener(
            "click",
            function () {

                openCart();

                updateStoreCartUI();
            }
        );
    }

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function () {

                closeCartPanel();
            }
        );
    }
}


/* =========================================================
   25. CHECKOUT BUTTON
   ========================================================= */

function setupCheckoutButton() {

    const button =
        document.getElementById(
            "checkoutButton"
        );

    if (!button) {
        return;
    }

    button.addEventListener(
        "click",
        function () {

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


/* =========================================================
   26. ADD-TO-CART BUTTONS
   ========================================================= */

function setupAddCartButtons() {

    document
        .querySelectorAll(
            ".add-cart"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    function () {

                        const name =
                            this.dataset.product ||
                            this.dataset.name ||
                            "Product";

                        const sku =
                            this.dataset.sku ||
                            PRODUCT_1.sku;

                        const price =
                            this.dataset.price
                                ? Number(
                                    this.dataset.price
                                )
                                : null;

                        addToCart(
                            name,
                            sku,
                            price
                        );
                    }
                );
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

    const overlay =
        document.getElementById(
            "searchOverlay"
        );

    const closeButton =
        document.getElementById(
            "closeSearch"
        );

    const input =
        document.getElementById(
            "searchInput"
        );

    if (
        searchButton &&
        overlay
    ) {

        searchButton.addEventListener(
            "click",
            function () {

                overlay.classList.add(
                    "active"
                );

                setTimeout(
                    () => {
                        input?.focus();
                    },
                    100
                );
            }
        );
    }

    if (
        closeButton &&
        overlay
    ) {

        closeButton.addEventListener(
            "click",
            function () {

                overlay.classList.remove(
                    "active"
                );
            }
        );
    }

    if (input) {

        input.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key !== "Enter"
                ) {
                    return;
                }

                const value =
                    this.value
                        .trim();

                if (!value) {
                    return;
                }

                alert(
                    "Searching for: " +
                    value
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
        }
    );
}


/* =========================================================
   29. ESCAPE HTML
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
   30. PRODUCT IMAGE GALLERY
   ========================================================= */

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
            element => {

                element.classList.remove(
                    "active"
                );
            }
        );

    if (thumbnail) {

        thumbnail.classList.add(
            "active"
        );
    }
}


/* =========================================================
   31. INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupAddCartButtons();

        setupCartButton();

        setupCheckoutButton();

        setupCheckoutCountry();

        setupCheckoutForm();

        setupSearch();

        setupMobileMenu();

        updateCartCount();

        updateStoreCartUI();

        updateCheckout();

        /*
           Load live currency rates after
           the website has loaded.
        */

        loadLiveExchangeRates();
    }
);
