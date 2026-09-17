/* =========================================================
   SACCHI FLYIER - MAIN JAVASCRIPT
   Country-based currency + CJ shipping + cart + checkout
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       COUNTRY / CURRENCY SETTINGS
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
        "Brazil": "BRL",
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
        "Estonia": "EUR",
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
        "Mauritania": "MRU",
        "Mauritius": "MUR",
        "Mexico": "MXN",
        "Moldova the republic": "MDL",
        "Monaco": "EUR",
        "Mongolia": "MNT",
        "Montenegro": "EUR",
        "Morocco": "MAD",
        "Mozambique": "MZN",
        "Myanmar": "MMK",
        "Namibia": "NAD",
        "Nepal": "NPR",
        "Netherlands": "EUR",
        "New Caledonia": "XPF",
        "New Zealand": "NZD",
        "Nicaragua": "NIO",
        "Nigeria": "NGN",
        "Norway": "NOK",
        "Oman": "OMR",
        "Pakistan": "PKR",
        "Panama": "PAB",
        "Papua New Guinea": "PGK",
        "Paraguay": "PYG",
        "Peru": "PEN",
        "Philippines": "PHP",
        "Poland": "PLN",
        "Portugal": "EUR",
        "Puerto Rico": "USD",
        "Qatar": "QAR",
        "Romania": "RON",
        "Russian Federation": "RUB",
        "Rwanda": "RWF",
        "Saudi Arabia": "SAR",
        "Senegal": "XOF",
        "Serbia": "RSD",
        "Seychelles": "SCR",
        "Singapore": "SGD",
        "Slovakia": "EUR",
        "Slovenia": "EUR",
        "South Africa": "ZAR",
        "South Korea": "KRW",
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
        "Tunisia": "TND",
        "Turkey": "TRY",
        "Uganda": "UGX",
        "Ukraine": "UAH",
        "United Arab Emirates": "AED",
        "United Kingdom": "GBP",
        "United States": "USD",
        "Uruguay": "UYU",
        "Uzbekistan": "UZS",
        "Venezuela (Bolivarian Republic of)": "VES",
        "Vietnam": "VND",
        "Virgin Islands (British)": "USD",
        "Virgin Islands (U.S.)": "USD",
        "Zambia": "ZMW",
        "Zimbabwe": "ZWL"
    };


    /* =========================================================
       CJ SHIPPING PRICES
       Shipping is FREE to customer.
       Shipping cost is included in your selling price.
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
        "Brazil": 6.05,
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
        "South Korea": 3.91,
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
        "Romania": 4.91,
        "Russian Federation": 4.36,
        "Rwanda": 3.50,
        "Saudi Arabia": 4.32,
        "Senegal": 3.37,
        "Serbia": 3.18,
        "Seychelles": 3.21,
        "Singapore": 3.93,
        "Slovakia": 8.72,
        "Slovenia": 8.90,
        "Solomon Islands": 4.03,
        "Somalia": 3.86,
        "South Africa": 5.97,
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
        "Tunisia": 3.43,
        "Turkey": 4.64,
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
       COUNTRIES YOU DON'T WANT TO SHIP TO
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
       PRODUCT SETTINGS
    ========================================================= */

    const productCostUSD = 1.62;
    const profitUSD = 10.00;

    // Selling price = product cost + CJ shipping + $10 profit
    function getSellingPrice(country) {
        const shipping = shippingRates[country];

        if (shipping === undefined) {
            return null;
        }

        return productCostUSD + shipping + profitUSD;
    }


    /* =========================================================
       CURRENCY CONVERSION
    ========================================================= */

    let exchangeRates = {
        USD: 1
    };

    async function loadExchangeRates() {
        try {
            const response = await fetch(
                "https://open.er-api.com/v6/latest/USD",
                {
                    cache: "no-store"
                }
            );

            if (!response.ok) {
                throw new Error("Currency API error");
            }

            const data = await response.json();

            if (
                data &&
                data.result === "success" &&
                data.rates
            ) {
                exchangeRates = {
                    USD: 1,
                    ...data.rates
                };

                console.log("Currency rates loaded:", exchangeRates);

                updateAllPrices();
            }

        } catch (error) {
            console.error("Currency conversion failed:", error);

            // USD still works if the API is temporarily unavailable
            exchangeRates = {
                USD: 1
            };

            updateAllPrices();
        }
    }


    function convertUSDToCurrency(amountUSD, currency) {

        if (!amountUSD || isNaN(amountUSD)) {
            return 0;
        }

        if (currency === "USD") {
            return amountUSD;
        }

        const rate = exchangeRates[currency];

        if (!rate) {
            console.warn(
                "Exchange rate not available for:",
                currency
            );

            return amountUSD;
        }

        return amountUSD * rate;
    }


    /* =========================================================
       MONEY FORMATTER
    ========================================================= */

    function formatMoney(amount, currency) {

        try {
            return new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: currency,
                maximumFractionDigits: 2
            }).format(amount);

        } catch (error) {

            return `${currency} ${Number(amount).toFixed(2)}`;
        }
    }


    /* =========================================================
       GET CUSTOMER COUNTRY
    ========================================================= */

    function getSelectedCountry() {

        const countrySelect =
            document.getElementById("checkoutCountry");

        if (!countrySelect) {
            return "United States";
        }

        return countrySelect.value;
    }


    /* =========================================================
       GET CUSTOMER CURRENCY
    ========================================================= */

    function getSelectedCurrency() {

        const country = getSelectedCountry();

        return countryCurrency[country] || "USD";
    }


    /* =========================================================
       UPDATE CHECKOUT CURRENCY
    ========================================================= */

    function updateCheckoutCurrency() {

        const country = getSelectedCountry();
        const currency = getSelectedCurrency();

        const currencyElement =
            document.getElementById("checkoutCurrency");

        if (currencyElement) {
            currencyElement.textContent = currency;
        }

        console.log(
            "Country:",
            country,
            "Currency:",
            currency
        );

        updateCheckoutSummary();
    }


    /* =========================================================
       CART
    ========================================================= */

    let cart = JSON.parse(
        localStorage.getItem("sacchiFlyierCart") || "[]"
    );


    function saveCart() {

        localStorage.setItem(
            "sacchiFlyierCart",
            JSON.stringify(cart)
        );
    }


    function getCartTotalUSD() {

        return cart.reduce((total, item) => {

            const price =
                Number(item.price) || 0;

            const quantity =
                Number(item.quantity) || 1;

            return total + price * quantity;

        }, 0);
    }


    /* =========================================================
       CART DISPLAY
    ========================================================= */

    function updateCartCount() {

        const cartCount =
            document.getElementById("cartCount");

        if (!cartCount) {
            return;
        }

        const count = cart.reduce(
            (total, item) =>
                total + (Number(item.quantity) || 1),
            0
        );

        cartCount.textContent = count;
    }


    function renderCart() {

        const cartItems =
            document.getElementById("cartItems");

        const cartTotal =
            document.getElementById("cartTotal");

        if (!cartItems) {
            return;
        }

        cartItems.innerHTML = "";

        if (cart.length === 0) {

            cartItems.innerHTML =
                "<p>Your cart is empty.</p>";

            if (cartTotal) {
                cartTotal.textContent = "$0.00";
            }

            updateCartCount();
            return;
        }


        cart.forEach((item, index) => {

            const div =
                document.createElement("div");

            div.className = "cart-item";

            div.innerHTML = `
                <div>
                    <strong>${escapeHTML(item.name)}</strong>
                    <br>
                    $${Number(item.price).toFixed(2)}
                    × ${Number(item.quantity)}
                </div>

                <button
                    type="button"
                    class="remove-cart"
                    data-index="${index}">
                    Remove
                </button>
            `;

            cartItems.appendChild(div);
        });


        if (cartTotal) {

            cartTotal.textContent =
                `$${getCartTotalUSD().toFixed(2)}`;
        }


        document
            .querySelectorAll(".remove-cart")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(button.dataset.index);

                        cart.splice(index, 1);

                        saveCart();
                        renderCart();
                    }
                );
            });

        updateCartCount();
    }


    function addToCart(name, price) {

        const existing =
            cart.find(item => item.name === name);

        if (existing) {

            existing.quantity =
                Number(existing.quantity || 1) + 1;

        } else {

            cart.push({
                name: name,
                price: Number(price),
                quantity: 1
            });
        }

        saveCart();
        renderCart();
    }


    /* =========================================================
       CHECKOUT SUMMARY
    ========================================================= */

    function updateCheckoutSummary() {

        const checkoutItems =
            document.getElementById("checkoutItems");

        const checkoutSubtotal =
            document.getElementById("checkoutSubtotal");

        const checkoutShipping =
            document.getElementById("checkoutShipping");

        const checkoutTotal =
            document.getElementById("checkoutTotal");

        const checkoutCurrency =
            document.getElementById("checkoutCurrency");


        const country =
            getSelectedCountry();

        const currency =
            countryCurrency[country] || "USD";


        /* Currency display */

        if (checkoutCurrency) {
            checkoutCurrency.textContent =
                currency;
        }


        /* Cart items */

        if (checkoutItems) {

            checkoutItems.innerHTML = "";

            cart.forEach(item => {

                const itemPriceUSD =
                    Number(item.price) || 0;

                const quantity =
                    Number(item.quantity) || 1;

                const itemTotalUSD =
                    itemPriceUSD * quantity;

                const itemTotal =
                    convertUSDToCurrency(
                        itemTotalUSD,
                        currency
                    );

                const div =
                    document.createElement("div");

                div.innerHTML = `
                    <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                        <span>
                            ${escapeHTML(item.name)}
                            × ${quantity}
                        </span>

                        <strong>
                            ${formatMoney(
                                itemTotal,
                                currency
                            )}
                        </strong>
                    </div>
                `;

                checkoutItems.appendChild(div);
            });
        }


        /* Subtotal */

        const subtotalUSD =
            getCartTotalUSD();

        const subtotal =
            convertUSDToCurrency(
                subtotalUSD,
                currency
            );


        /* Customer shipping is FREE */

        const shipping =
            convertUSDToCurrency(
                0,
                currency
            );


        /* Total */

        const total =
            subtotal + shipping;


        if (checkoutSubtotal) {

            checkoutSubtotal.textContent =
                formatMoney(
                    subtotal,
                    currency
                );
        }


        if (checkoutShipping) {

            checkoutShipping.textContent =
                "FREE";
        }


        if (checkoutTotal) {

            checkoutTotal.textContent =
                formatMoney(
                    total,
                    currency
                );
        }
    }


    /* =========================================================
       UPDATE ALL PRICES
    ========================================================= */

    function updateAllPrices() {

        updateCheckoutSummary();

        updateCheckoutCurrency();
    }


    /* =========================================================
       CHECKOUT COUNTRY DROPDOWN
    ========================================================= */

    function setupCountrySelect() {

        const countrySelect =
            document.getElementById("checkoutCountry");

        if (!countrySelect) {
            return;
        }


        countrySelect.addEventListener(
            "change",
            () => {

                const country =
                    countrySelect.value;


                /* Block selected countries */

                if (
                    blockedCountries.includes(country)
                ) {

                    alert(
                        "Sorry, we currently do not ship to this country."
                    );

                    countrySelect.value = "";

                    updateCheckoutSummary();

                    return;
                }


                /* Make sure CJ shipping exists */

                if (
                    country &&
                    shippingRates[country] === undefined
                ) {

                    alert(
                        "Shipping is currently unavailable for this country."
                    );

                    countrySelect.value = "";

                    updateCheckoutSummary();

                    return;
                }


                updateCheckoutCurrency();
            }
        );
    }


    /* =========================================================
       PRODUCT ADD BUTTONS
    ========================================================= */

    function setupAddToCartButtons() {

        document
            .querySelectorAll(".add-cart")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const name =
                            button.dataset.product ||
                            "Product";

                        /*
                         IMPORTANT:
                         Replace this price with your actual
                         country-based product price if your
                         product cards use another system.
                        */

                        const price =
                            Number(
                                button.dataset.price
                            ) || 15.63;

                        addToCart(
                            name,
                            price
                        );

                        alert(
                            `${name} added to cart`
                        );
                    }
                );
            });
    }


    /* =========================================================
       CART PANEL
    ========================================================= */

    function setupCartPanel() {

        const cartButton =
            document.getElementById("cartButton");

        const cartPanel =
            document.getElementById("cartPanel");

        const closeCart =
            document.getElementById("closeCart");


        if (cartButton && cartPanel) {

            cartButton.addEventListener(
                "click",
                () => {

                    cartPanel.classList.add("active");

                    renderCart();
                }
            );
        }


        if (closeCart && cartPanel) {

            closeCart.addEventListener(
                "click",
                () => {

                    cartPanel.classList.remove("active");
                }
            );
        }
    }


    /* =========================================================
       CHECKOUT BUTTON
    ========================================================= */

    function setupCheckoutButton() {

        const checkoutButton =
            document.getElementById("checkoutButton");

        if (!checkoutButton) {
            return;
        }

        checkoutButton.addEventListener(
            "click",
            () => {

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
       SEARCH
    ========================================================= */

    function setupSearch() {

        const searchButton =
            document.getElementById("searchButton");

        const searchOverlay =
            document.getElementById("searchOverlay");

        const closeSearch =
            document.getElementById("closeSearch");

        const searchInput =
            document.getElementById("searchInput");


        if (searchButton && searchOverlay) {

            searchButton.addEventListener(
                "click",
                () => {

                    searchOverlay.classList.add("active");

                    if (searchInput) {
                        searchInput.focus();
                    }
                }
            );
        }


        if (closeSearch && searchOverlay) {

            closeSearch.addEventListener(
                "click",
                () => {

                    searchOverlay.classList.remove(
                        "active"
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
            document.getElementById("menuToggle");

        const navLinks =
            document.getElementById("navLinks");

        if (!menuToggle || !navLinks) {
            return;
        }

        menuToggle.addEventListener(
            "click",
            () => {

                navLinks.classList.toggle("active");
            }
        );
    }


    /* =========================================================
       NEWSLETTER
    ========================================================= */

    const newsletterForm =
        document.getElementById("newsletterForm");

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const email =
                    document.getElementById(
                        "newsletterEmail"
                    )?.value;

                if (!email) {
                    return;
                }

                alert(
                    "Thank you for subscribing!"
                );

                newsletterForm.reset();
            }
        );
    }


    /* =========================================================
       CONTACT FORM
    ========================================================= */

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                alert(
                    "Thank you! Your message has been submitted."
                );

                contactForm.reset();
            }
        );
    }


    /* =========================================================
       HTML SECURITY HELPER
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
       START
    ========================================================= */

    setupCountrySelect();
    setupAddToCartButtons();
    setupCartPanel();
    setupCheckoutButton();
    setupSearch();
    setupMobileMenu();

    renderCart();
    updateCheckoutSummary();

    /*
       Load live exchange rates.
       Example:
       India → INR
       USA → USD
       UK → GBP
       Canada → CAD
       Australia → AUD
       Europe → EUR
       Japan → JPY
       UAE → AED
       etc.
    */

    loadExchangeRates();

});
