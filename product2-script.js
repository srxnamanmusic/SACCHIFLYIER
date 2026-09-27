(() => {
    "use strict";

    /* =========================================================
       SACCHI FLYIER — PRODUCT 2 SCRIPT
       ========================================================= */

    const PRODUCT_COST_USD = 6.14;
    const PROFIT_USD = 10.00;

    const PRODUCT_SKU = "CJYD268159623WD";

    const PRODUCT_NAME =
        "Fleece Zip Up Jacket Women's Stand Collar Solid Color Loose Fit Casual Long Sleeve Outerwear Clothing";


    /* =========================================================
       SHIPPING RATES — USD
       ========================================================= */

    const shippingRates = {
        "Afghanistan": 22.31,
        "Albania": 17.80,
        "Algeria": 22.05,
        "American Samoa": 22.12,
        "Andorra": 16.38,
        "Angola": 22.12,
        "Anguilla": 25.76,
        "Antigua and Barbuda": 20.97,
        "Argentina": 16.51,
        "Armenia": 20.67,
        "Aruba": 22.74,
        "Australia": 11.78,
        "Austria": 12.56,
        "Azerbaijan": 16.30,
        "Bahamas": 23.27,
        "Bahrain": 18.93,
        "Bangladesh": 19.36,
        "Barbados": 22.12,
        "Belarus": 13.24,
        "Belgium": 12.97,
        "Belize": 25.76,
        "Benin": 22.08,
        "Bermuda": 22.12,
        "Bhutan": 15.33,
        "Bolivia (Plurinational State of)": 26.91,
        "Bonaire, Sint Eustatius and Saba": 26.91,
        "Bosnia and Herzegovina": 16.71,
        "Botswana": 22.12,
        "Bouvet Island": 19.62,
        "Brazil": 15.27,
        "British Indian Ocean Territory": 28.24,
        "Brunei Darussalam": 8.65,
        "Bulgaria": 16.05,
        "Burkina Faso": 22.27,
        "Burundi": 24.42,
        "Cabo Verde": 26.91,
        "Cambodia": 4.28,
        "Cameroon": 21.12,
        "Canada": 10.99,
        "Cayman Islands": 24.42,
        "Central African Republic": 26.91,
        "Chad": 25.57,
        "Chile": 12.24,
        "China": 1.96,
        "Christmas Island": 26.68,
        "Cocos (Keeling) Islands": 26.68,
        "Colombia": 13.68,
        "Comoros": 21.12,
        "Congo (the Democratic Republic of the)": 26.91,
        "Congo": 20.97,
        "Cook Islands": 27.01,
        "Costa Rica": 19.53,
        "Croatia": 15.25,
        "Cuba": 23.27,
        "Curaçao": 23.66,
        "Cyprus": 12.93,
        "Czechia": 13.95,
        "Denmark": 13.68,
        "Djibouti": 26.91,
        "Dominica": 25.76,
        "Dominican Republic": 22.74,
        "Ecuador": 29.71,
        "Egypt": 8.54,
        "El Salvador": 24.42,
        "Equatorial Guinea": 22.87,
        "Eritrea": 24.42,
        "Estonia": 14.02,
        "Ethiopia": 18.67,
        "Falkland Islands": 18.07,
        "Faroe Islands": 17.99,
        "Fiji": 31.51,
        "Finland": 17.37,
        "France": 11.09,
        "French Guiana": 25.73,
        "French Polynesia": 25.85,
        "French Southern Territories": 18.32,
        "Gabon": 21.12,
        "Gambia": 24.42,
        "Georgia": 12.52,
        "Germany": 10.54,
        "Ghana": 19.29,
        "Gibraltar": 16.98,
        "Greece": 16.21,
        "Greenland": 39.42,
        "Grenada": 24.42,
        "Guadeloupe": 22.72,
        "Guam": 23.65,
        "Guernsey": 13.15,
        "Guinea": 21.90,
        "Guyana": 28.35,
        "Haiti": 25.76,
        "Heard Island and McDonald Islands": 30.49,
        "Holy See": 44.30,
        "Honduras": 25.76,
        "Hong Kong (China)": 4.65,
        "Hungary": 14.62,
        "Iceland": 15.78,
        "India": 7.41,
        "Indonesia": 9.85,
        "Iran (Islamic Republic of)": 18.67,
        "Ireland": 15.98,
        "Isle of Man": 13.15,
        "Israel": 11.54,
        "Italy": 13.25,
        "Jamaica": 22.12,
        "Japan": 7.15,
        "Jersey": 13.15,
        "Jordan": 18.67,
        "Kazakhstan": 5.84,
        "Kenya": 18.67,
        "Kiribati": 27.01,
        "Korea (South Korea)": 4.08,
        "Kuwait": 23.14,
        "Kyrgyzstan": 8.77,
        "Lao People's Democratic Republic": 4.44,
        "Latvia": 14.02,
        "Lebanon": 18.60,
        "Lesotho": 26.91,
        "Liberia": 20.67,
        "Libya": 22.27,
        "Liechtenstein": 20.85,
        "Lithuania": 14.02,
        "Luxembourg": 17.18,
        "Macao (China)": 8.82,
        "Macedonia (The former Yugoslav Republic of)": 20.67,
        "Madagascar": 24.42,
        "Malawi": 20.97,
        "Malaysia": 4.86,
        "Maldives": 6.70,
        "Mali": 22.27,
        "Malta": 17.22,
        "Marshall Islands": 21.94,
        "Martinique": 24.47,
        "Mauritania": 19.29,
        "Mauritius": 14.74,
        "Mayotte": 18.05,
        "Mexico": 12.78,
        "Moldova the Republic": 15.68,
        "Monaco": 16.38,
        "Mongolia": 4.98,
        "Montenegro": 14.83,
        "Montserrat": 25.76,
        "Morocco": 9.37,
        "Mozambique": 18.14,
        "Myanmar": 5.80,
        "Namibia": 23.42,
        "Nauru": 39.52,
        "Nepal": 15.15,
        "Netherlands": 13.13,
        "New Caledonia": 31.51,
        "New Zealand": 12.36,
        "Nicaragua": 24.42,
        "Niger": 21.12,
        "Nigeria": 20.97,
        "Niue": 27.01,
        "Norfolk Island": 26.68,
        "Northern Mariana Islands": 23.27,
        "Norway": 11.79,
        "Oman": 9.04,
        "Pakistan": 5.39,
        "Palau": 105.82,
        "Panama": 18.26,
        "Papua New Guinea": 31.51,
        "Paraguay": 26.72,
        "Peru": 16.00,
        "Philippines": 5.66,
        "Pitcairn": 31.23,
        "Poland": 11.10,
        "Portugal": 11.82,
        "Puerto Rico": 21.35,
        "Qatar": 25.83,
        "Réunion": 16.55,
        "Romania": 14.02,
        "Russian Federation": 12.56,
        "Rwanda": 20.97,
        "Saint Helena, Ascension and Tristan da Cunha": 24.53,
        "Saint Kitts and Nevis": 25.76,
        "Saint Lucia": 22.12,
        "Saint Martin (French part)": 18.32,
        "Saint Pierre and Miquelon": 23.57,
        "Saint Vincent and the Grenadines": 25.76,
        "Samoa": 27.01,
        "San Marino": 26.87,
        "Sao Tome and Principe": 26.91,
        "Saudi Arabia": 11.76,
        "Senegal": 19.82,
        "Serbia": 13.90,
        "Seychelles": 17.34,
        "Sierra Leone": 26.91,
        "Singapore": 5.57,
        "Sint Maarten (Dutch Part)": 26.91,
        "Slovakia": 15.71,
        "Slovenia": 15.43,
        "Solomon Islands": 20.38,
        "Somalia": 26.91,
        "South Africa": 12.94,
        "South Georgia and South Sandwich Islands": 18.07,
        "Spain": 10.24,
        "Sri Lanka": 13.03,
        "Sudan": 21.90,
        "Suriname": 26.91,
        "Swaziland": 21.35,
        "Sweden": 11.65,
        "Switzerland": 14.39,
        "Taiwan (Province of China)": 9.44,
        "Tajikistan": 18.60,
        "Tanzania, United Republic of": 19.82,
        "Thailand": 3.12,
        "The Republic of Kosovo": 21.72,
        "Timor-Leste": 55.62,
        "Togo": 22.27,
        "Tokelau": 27.01,
        "Tonga": 27.01,
        "Trinidad and Tobago": 19.29,
        "Tunisia": 18.67,
        "Turkey": 10.38,
        "Turks and Caicos Islands": 26.91,
        "Tuvalu": 27.01,
        "Uganda": 18.67,
        "Ukraine": 12.00,
        "United Arab Emirates": 8.10,
        "United Kingdom": 7.24,
        "United States": 11.77,
        "Uruguay": 20.57,
        "Uzbekistan": 20.57,
        "Vanuatu": 27.01,
        "Venezuela (Bolivarian Republic of)": 23.27,
        "Vietnam": 2.63,
        "Virgin Islands (British)": 22.12,
        "Virgin Islands (U.S.)": 23.27,
        "Wallis and Futuna": 27.01,
        "Western Sahara": 26.35,
        "Zambia": 19.82,
        "Zimbabwe": 13.67
    };


    /* =========================================================
       BLOCKED COUNTRIES
       ========================================================= */

    const blockedCountries = [
        "Yemen",
        "Côte d'Ivoire",
        "Guinea-Bissau",
        "Iraq",
        "Korea (the Democratic People's Republic of)",
        "Micronesia (Federated States of)",
        "South Sudan",
        "Syrian Arab Republic",
        "Holy See",
        "Palestine State of",
        "Hawaii"
    ];


    /* =========================================================
       COUNTRY → CURRENCY
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
        "Korea (South Korea)": "KRW",
        "Kuwait": "KWD",
        "Kyrgyzstan": "KGS",
        "Lao People's Democratic Republic": "LAK",
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
        "Moldova the Republic": "MDL",
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
        "Palau": "USD",
        "Panama": "USD",
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
        "Spain": "EUR",
        "Sri Lanka": "LKR",
        "Sudan": "SDG",
        "Suriname": "SRD",
        "Swaziland": "SZL",
        "Sweden": "SEK",
        "Switzerland": "CHF",
        "Taiwan (Province of China)": "TWD",
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
       CURRENCY SYMBOLS
       ========================================================= */

    const currencySymbols = {
        AFN: "؋",
        ALL: "L",
        DZD: "دج",
        AMD: "֏",
        AZN: "₼",
        BDT: "৳",
        BTN: "Nu.",
        BND: "B$",
        KHR: "៛",
        CNY: "¥",
        HKD: "HK$",
        INR: "₹",
        IDR: "Rp",
        IRR: "﷼",
        ILS: "₪",
        JPY: "¥",
        JOD: "JD",
        KZT: "₸",
        KRW: "₩",
        KWD: "د.ك",
        KGS: "с",
        LAK: "₭",
        LBP: "ل.ل",
        MOP: "MOP$",
        MYR: "RM",
        MVR: "Rf",
        MMK: "K",
        NPR: "Rs",
        OMR: "﷼",
        PKR: "₨",
        PHP: "₱",
        QAR: "ر.ق",
        SAR: "﷼",
        SGD: "S$",
        LKR: "Rs",
        TWD: "NT$",
        TJS: "SM",
        THB: "฿",
        AED: "د.إ",
        UZS: "so'm",
        VND: "₫",

        EUR: "€",
        GBP: "£",
        CHF: "CHF",
        NOK: "kr",
        SEK: "kr",
        DKK: "kr",
        PLN: "zł",
        CZK: "Kč",
        HUF: "Ft",
        RON: "lei",
        BGN: "лв",
        RSD: "дин",
        MKD: "ден",
        MDL: "L",
        ISK: "kr",
        RUB: "₽",
        UAH: "₴",
        BAM: "KM",
        GEL: "₾",
        BYN: "Br",
        FKP: "£",
        GIP: "£",
        SHP: "£",

        USD: "$",
        CAD: "CA$",
        AUD: "A$",
        NZD: "NZ$",
        MXN: "MX$",
        BSD: "B$",
        BBD: "Bds$",
        BMD: "$",
        BZD: "BZ$",
        CRC: "₡",
        CUP: "$",
        DOP: "RD$",
        HTG: "G",
        HNL: "L",
        JMD: "J$",
        NIO: "C$",
        XCD: "EC$",
        ANG: "ƒ",
        KYD: "CI$",

        ARS: "$",
        BOB: "Bs.",
        BRL: "R$",
        CLP: "$",
        COP: "$",
        PYG: "₲",
        PEN: "S/",
        UYU: "$U",
        VES: "Bs.",
        GYD: "G$",
        SRD: "$",

        AOA: "Kz",
        BWP: "P",
        BIF: "FBu",
        CVE: "$",
        KMF: "CF",
        DJF: "Fdj",
        EGP: "E£",
        ERN: "Nfk",
        ETB: "Br",
        GMD: "D",
        GHS: "₵",
        GNF: "FG",
        KES: "KSh",
        LSL: "L",
        LRD: "L$",
        LYD: "ل.د",
        MGA: "Ar",
        MWK: "MK",
        MRU: "UM",
        MUR: "₨",
        MAD: "د.م.",
        MZN: "MT",
        NAD: "N$",
        NGN: "₦",
        RWF: "FRw",
        SCR: "₨",
        SLE: "Le",
        SOS: "Sh",
        ZAR: "R",
        SDG: "ج.س.",
        SZL: "E",
        TZS: "TSh",
        TND: "د.ت",
        UGX: "USh",
        ZMW: "ZK",
        ZWG: "ZiG",
        XOF: "CFA",
        XAF: "FCFA",
        CDF: "FC",
        FJD: "FJ$",
        PGK: "K",
        SBD: "SI$",
        WST: "T",
        TOP: "T$",
        VUV: "VT",
        XPF: "₣",
        AWG: "ƒ",
        BHD: ".د.ب",
        MNT: "₮",
        STN: "Db",
        TRY: "₺"
    };


    /* =========================================================
       FALLBACK EXCHANGE RATES
       1 USD = rate
       ========================================================= */

    const fallbackExchangeRates = {
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
       TIMEZONE → COUNTRY DETECTION
       ========================================================= */

    const timezoneCountries = {
        "Asia/Kolkata": "India",
        "Asia/Calcutta": "India",

        "America/New_York": "United States",
        "America/Chicago": "United States",
        "America/Denver": "United States",
        "America/Los_Angeles": "United States",

        "America/Toronto": "Canada",
        "America/Vancouver": "Canada",

        "Europe/London": "United Kingdom",

        "Australia/Sydney": "Australia",
        "Australia/Melbourne": "Australia",

        "Asia/Tokyo": "Japan",
        "Asia/Shanghai": "China",
        "Asia/Hong_Kong": "Hong Kong (China)",
        "Asia/Singapore": "Singapore",

        "Asia/Dubai": "United Arab Emirates",
        "Asia/Riyadh": "Saudi Arabia",

        "Europe/Paris": "France",
        "Europe/Berlin": "Germany",
        "Europe/Rome": "Italy",
        "Europe/Madrid": "Spain"
    };


    /* =========================================================
       STATE
       ========================================================= */

    let exchangeRates = {
        ...fallbackExchangeRates
    };

    let quantity = 1;
    let selectedCountry = "";
    let selectedPriceUSD = 0;


    /* =========================================================
       START AFTER PAGE LOAD
       ========================================================= */

    document.addEventListener("DOMContentLoaded", () => {

        const countrySelect =
            document.getElementById("customerCountry");

        const productPrice =
            document.getElementById("productPrice");

        const priceUSD =
            document.getElementById("priceUSD");

        const shippingText =
            document.getElementById("shippingText");

        const countryMessage =
            document.getElementById("countryMessage");

        const quantityInput =
            document.getElementById("productQuantity");

        const decreaseButton =
            document.getElementById("decreaseQuantity");

        const increaseButton =
            document.getElementById("increaseQuantity");

        const addToCartButton =
            document.getElementById("addProductToCart");

        const buyNowButton =
            document.getElementById("buyNowButton");

        const productMessage =
            document.getElementById("productMessage");


        /* =====================================================
           CHECK REQUIRED HTML ELEMENTS
           ===================================================== */

        if (!countrySelect) {
            console.error(
                "Product 2 error: #customerCountry not found."
            );
            return;
        }


        /* =====================================================
           FORMAT CURRENCY
           ===================================================== */

        function formatCurrency(amount, currency) {

            if (!Number.isFinite(amount)) {
                amount = 0;
            }

            if (!currency) {
                currency = "USD";
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

            } catch (error) {

                const symbol =
                    currencySymbols[currency] || currency;

                return `${symbol}${amount.toFixed(2)}`;
            }
        }


        /* =====================================================
           CREATE COUNTRY LIST
           ===================================================== */

        function createCountryList() {

            const currentValue =
                countrySelect.value;

            countrySelect.innerHTML = "";

            const defaultOption =
                document.createElement("option");

            defaultOption.value = "";
            defaultOption.textContent =
                "Select your country";

            countrySelect.appendChild(defaultOption);


            Object.keys(shippingRates)
                .sort((a, b) =>
                    a.localeCompare(b)
                )
                .forEach(country => {

                    if (
                        blockedCountries.includes(country)
                    ) {
                        return;
                    }

                    const option =
                        document.createElement("option");

                    option.value = country;
                    option.textContent = country;

                    countrySelect.appendChild(option);
                });


            if (
                currentValue &&
                !blockedCountries.includes(currentValue) &&
                shippingRates[currentValue] !== undefined
            ) {
                countrySelect.value = currentValue;
            }
        }


        /* =====================================================
           GET COUNTRY CURRENCY
           ===================================================== */

        function getCountryCurrency(country) {

            return (
                countryCurrency[country] ||
                "USD"
            );
        }


        /* =====================================================
           UPDATE USD PRICE
           ===================================================== */

        function showUSDPrice() {

            if (!priceUSD) {
                return;
            }

            if (!selectedPriceUSD) {

                priceUSD.textContent =
                    "USD price unavailable";

                return;
            }

            priceUSD.textContent =
                `USD $${selectedPriceUSD.toFixed(2)}`;
        }


        /* =====================================================
           CALCULATE PRODUCT PRICE
           ===================================================== */

        function calculatePrice(country) {

            selectedCountry = country || "";

            if (!country) {

                selectedPriceUSD = 0;

                if (productPrice) {
                    productPrice.textContent = "--";
                }

                if (priceUSD) {
                    priceUSD.textContent =
                        "Select your country";
                }

                if (shippingText) {
                    shippingText.textContent =
                        "FREE SHIPPING";
                }

                if (countryMessage) {
                    countryMessage.textContent = "";
                }

                return;
            }


            /* -----------------------------------------------
               BLOCKED COUNTRY CHECK
               ----------------------------------------------- */

            if (
                blockedCountries.includes(country)
            ) {

                selectedPriceUSD = 0;

                if (productPrice) {
                    productPrice.textContent =
                        "Unavailable";
                }

                if (priceUSD) {
                    priceUSD.textContent =
                        "Shipping unavailable";
                }

                if (shippingText) {
                    shippingText.textContent =
                        "Shipping unavailable";
                }

                if (countryMessage) {
                    countryMessage.textContent =
                        "We currently cannot ship this product to this location.";
                }

                return;
            }


            /* -----------------------------------------------
               SHIPPING CHECK
               ----------------------------------------------- */

            const shipping =
                Number(shippingRates[country]);

            if (!Number.isFinite(shipping)) {

                selectedPriceUSD = 0;

                if (productPrice) {
                    productPrice.textContent =
                        "Unavailable";
                }

                if (priceUSD) {
                    priceUSD.textContent =
                        "Shipping rate unavailable";
                }

                return;
            }


            /* -----------------------------------------------
               FINAL USD PRICE
               ----------------------------------------------- */

            const finalPriceUSD =
                PRODUCT_COST_USD +
                shipping +
                PROFIT_USD;

            selectedPriceUSD =
                Number(finalPriceUSD.toFixed(2));


            /* -----------------------------------------------
               LOCAL CURRENCY
               ----------------------------------------------- */

            const currency =
                getCountryCurrency(country);

            const rate =
                Number(exchangeRates[currency]);


            let localPrice;

            if (
                currency === "USD"
            ) {

                localPrice =
                    selectedPriceUSD;

            } else if (
                Number.isFinite(rate) &&
                rate > 0
            ) {

                localPrice =
                    selectedPriceUSD * rate;

            } else {

                /* If live and fallback rate do not exist,
                   safely display USD instead. */

                localPrice =
                    selectedPriceUSD;
            }


            /* -----------------------------------------------
               DISPLAY
               ----------------------------------------------- */

            if (productPrice) {

                if (
                    currency !== "USD" &&
                    Number.isFinite(rate) &&
                    rate > 0
                ) {

                    productPrice.textContent =
                        formatCurrency(
                            localPrice,
                            currency
                        );

                } else {

                    productPrice.textContent =
                        formatCurrency(
                            selectedPriceUSD,
                            "USD"
                        );
                }
            }


            showUSDPrice();


            if (shippingText) {
                shippingText.textContent =
                    "FREE SHIPPING";
            }


            if (countryMessage) {
                countryMessage.textContent = "";
            }


            /* -----------------------------------------------
               SAVE COUNTRY SEPARATELY FOR PRODUCT 2
               ----------------------------------------------- */

            try {

                localStorage.setItem(
                    "product2Country",
                    country
                );

            } catch (error) {

                console.warn(
                    "Could not save Product 2 country.",
                    error
                );
            }
        }


        /* =====================================================
           DETECT USER COUNTRY
           ===================================================== */

        function detectCountry() {

            let detectedCountry = "";


            /* -----------------------------------------------
               TIMEZONE
               ----------------------------------------------- */

            try {

                const timezone =
                    Intl.DateTimeFormat()
                        .resolvedOptions()
                        .timeZone;

                if (
                    timezoneCountries[timezone]
                ) {

                    detectedCountry =
                        timezoneCountries[timezone];
                }

            } catch (error) {

                console.warn(
                    "Timezone detection failed."
                );
            }


            /* -----------------------------------------------
               LANGUAGE FALLBACK
               ----------------------------------------------- */

            if (!detectedCountry) {

                try {

                    const language =
                        navigator.language ||
                        "";

                    if (
                        language.toLowerCase()
                            .endsWith("-in")
                    ) {

                        detectedCountry =
                            "India";
                    }

                } catch (error) {

                    console.warn(
                        "Language detection failed."
                    );
                }
            }


            /* -----------------------------------------------
               USE DETECTED COUNTRY
               ----------------------------------------------- */

            if (
                detectedCountry &&
                !blockedCountries.includes(
                    detectedCountry
                ) &&
                shippingRates[
                    detectedCountry
                ] !== undefined
            ) {

                countrySelect.value =
                    detectedCountry;

                calculatePrice(
                    detectedCountry
                );

                return;
            }


            /* -----------------------------------------------
               DEFAULT
               ----------------------------------------------- */

            countrySelect.value = "";

            calculatePrice("");
        }


        /* =====================================================
           LOAD LIVE EXCHANGE RATES
           ===================================================== */

        async function loadLiveExchangeRates() {

            try {

                const response =
                    await fetch(
                        "https://open.er-api.com/v6/latest/USD",
                        {
                            method: "GET",
                            cache: "no-store"
                        }
                    );


                if (!response.ok) {
                    throw new Error(
                        "Exchange-rate request failed"
                    );
                }


                const data =
                    await response.json();


                if (
                    data.result !== "success" ||
                    !data.rates
                ) {

                    throw new Error(
                        "Invalid exchange-rate response"
                    );
                }


                /* -------------------------------------------
                   IMPORTANT FIX:
                   Keep fallback rates and overwrite them
                   with live rates when available.
                   ------------------------------------------- */

                exchangeRates = {
                    ...fallbackExchangeRates,
                    ...data.rates
                };


                console.log(
                    "LIVE EXCHANGE RATES LOADED"
                );


                console.log(
                    "USD → INR:",
                    exchangeRates.INR
                );


                console.log(
                    "Last update:",
                    data.time_last_update_utc
                );


                /* -------------------------------------------
                   RECALCULATE CURRENT COUNTRY
                   ------------------------------------------- */

                if (
                    countrySelect.value
                ) {

                    calculatePrice(
                        countrySelect.value
                    );
                }

            } catch (error) {

                console.error(
                    "Could not load live exchange rates. Using fallback rates.",
                    error
                );


                /* -------------------------------------------
                   IMPORTANT:
                   DO NOT replace exchangeRates with
                   { USD: 1 }.
                   Keep the complete fallback rates.
                   ------------------------------------------- */

                exchangeRates = {
                    ...fallbackExchangeRates
                };


                if (
                    countrySelect.value
                ) {

                    calculatePrice(
                        countrySelect.value
                    );
                }
            }
        }


        /* =====================================================
           PRODUCT 2 CART
           ===================================================== */

        function getProduct2Cart() {

            try {

                const savedCart =
                    localStorage.getItem(
                        "product2Cart"
                    );

                if (!savedCart) {
                    return [];
                }

                const parsedCart =
                    JSON.parse(savedCart);

                return Array.isArray(parsedCart)
                    ? parsedCart
                    : [];

            } catch (error) {

                console.error(
                    "Product 2 cart could not be loaded.",
                    error
                );

                return [];
            }
        }


        function saveProduct2Cart(cart) {

            try {

                localStorage.setItem(
                    "product2Cart",
                    JSON.stringify(cart)
                );

                return true;

            } catch (error) {

                console.error(
                    "Product 2 cart could not be saved.",
                    error
                );

                return false;
            }
        }


        /* =====================================================
           BUILD PRODUCT 2 CART ITEM
           ===================================================== */

        function buildCartItem() {

            return {
                id: PRODUCT_SKU,
                sku: PRODUCT_SKU,
                name: PRODUCT_NAME,
                price: selectedPriceUSD,
                finalPriceUSD: selectedPriceUSD,
                quantity: quantity,
                country: selectedCountry
            };
        }


        /* =====================================================
           ADD PRODUCT 2 TO CART
           ===================================================== */

        function addToCart() {

            if (
                !selectedCountry ||
                !selectedPriceUSD
            ) {

                if (productMessage) {
                    productMessage.textContent =
                        "Please select your country first.";
                }

                return;
            }


            if (
                blockedCountries.includes(
                    selectedCountry
                )
            ) {

                if (productMessage) {
                    productMessage.textContent =
                        "This product cannot be shipped to the selected location.";
                }

                return;
            }


            const cart =
                getProduct2Cart();


            const existingIndex =
                cart.findIndex(
                    item =>
                        item.sku === PRODUCT_SKU
                );


            if (existingIndex !== -1) {

                cart[existingIndex].quantity =
                    Number(
                        cart[existingIndex].quantity || 0
                    ) + quantity;

                cart[existingIndex].price =
                    selectedPriceUSD;

                cart[existingIndex].finalPriceUSD =
                    selectedPriceUSD;

                cart[existingIndex].country =
                    selectedCountry;

            } else {

                cart.push(
                    buildCartItem()
                );
            }


            if (
                saveProduct2Cart(cart)
            ) {

                if (productMessage) {
                    productMessage.textContent =
                        "Product added to cart successfully.";
                }

                console.log(
                    "Product 2 cart:",
                    cart
                );
            }
        }


        /* =====================================================
           BUY NOW
           ===================================================== */

        function buyNow() {

            if (
                !selectedCountry ||
                !selectedPriceUSD
            ) {

                if (productMessage) {
                    productMessage.textContent =
                        "Please select your country first.";
                }

                return;
            }


            if (
                blockedCountries.includes(
                    selectedCountry
                )
            ) {

                if (productMessage) {
                    productMessage.textContent =
                        "This product cannot be shipped to the selected location.";
                }

                return;
            }


            const cart =
                getProduct2Cart();


            const existingIndex =
                cart.findIndex(
                    item =>
                        item.sku === PRODUCT_SKU
                );


            if (existingIndex !== -1) {

                cart[existingIndex].quantity =
                    quantity;

                cart[existingIndex].price =
                    selectedPriceUSD;

                cart[existingIndex].finalPriceUSD =
                    selectedPriceUSD;

                cart[existingIndex].country =
                    selectedCountry;

            } else {

                cart.push(
                    buildCartItem()
                );
            }


            saveProduct2Cart(cart);


            /* -------------------------------------------
               PRODUCT 2 GOES ONLY TO CHECKOUT2
               ------------------------------------------- */

            window.location.href =
                "checkout2.html";
        }


        /* =====================================================
           QUANTITY
           ===================================================== */

        function updateQuantity(newQuantity) {

            newQuantity =
                Number(newQuantity);


            if (
                !Number.isFinite(newQuantity) ||
                newQuantity < 1
            ) {

                newQuantity = 1;
            }


            quantity =
                Math.floor(newQuantity);


            if (quantityInput) {

                quantityInput.value =
                    quantity;
            }
        }


        if (decreaseButton) {

            decreaseButton.addEventListener(
                "click",
                () => {

                    updateQuantity(
                        quantity - 1
                    );
                }
            );
        }


        if (increaseButton) {

            increaseButton.addEventListener(
                "click",
                () => {

                    updateQuantity(
                        quantity + 1
                    );
                }
            );
        }


        if (quantityInput) {

            quantityInput.addEventListener(
                "change",
                () => {

                    updateQuantity(
                        quantityInput.value
                    );
                }
            );

            quantityInput.addEventListener(
                "input",
                () => {

                    const value =
                        Number(
                            quantityInput.value
                        );

                    if (
                        Number.isFinite(value) &&
                        value >= 1
                    ) {

                        quantity =
                            Math.floor(value);
                    }
                }
            );
        }


        /* =====================================================
           COUNTRY CHANGE
           ===================================================== */

        countrySelect.addEventListener(
            "change",
            () => {

                const country =
                    countrySelect.value;

                calculatePrice(
                    country
                );
            }
        );


        /* =====================================================
           BUTTONS
           ===================================================== */

        if (addToCartButton) {

            addToCartButton.addEventListener(
                "click",
                addToCart
            );
        }


        if (buyNowButton) {

            buyNowButton.addEventListener(
                "click",
                buyNow
            );
        }


        /* =====================================================
           INITIALIZE
           ===================================================== */

        createCountryList();


        /* -----------------------------------------------
           RESTORE PREVIOUS PRODUCT 2 COUNTRY
           ----------------------------------------------- */

        let savedCountry = "";

        try {

            savedCountry =
                localStorage.getItem(
                    "product2Country"
                ) || "";

        } catch (error) {

            console.warn(
                "Could not read saved Product 2 country."
            );
        }


        if (
            savedCountry &&
            !blockedCountries.includes(
                savedCountry
            ) &&
            shippingRates[
                savedCountry
            ] !== undefined
        ) {

            countrySelect.value =
                savedCountry;

            calculatePrice(
                savedCountry
            );

        } else {

            detectCountry();
        }


        /* -----------------------------------------------
           LOAD LIVE RATES
           ----------------------------------------------- */

        loadLiveExchangeRates();

    });

})();
