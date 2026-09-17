// ============================================================
// SACCHI FLYIER - COMPLETE SCRIPT
// ============================================================

const CART_KEY = "sacchiFlyierCart";

const CJ_PRODUCT_COST_USD = 1.62;
const MINIMUM_PROFIT_USD = 10.00;

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
// CJ SHIPPING RATES
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
    "Guatemala": 3.61,
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


// ============================================================
// COUNTRY CURRENCIES
// ============================================================

const COUNTRY_CURRENCY = {
    "India": "INR",
    "United States": "USD",
    "Canada": "CAD",
    "United Kingdom": "GBP",
    "Australia": "AUD",
    "New Zealand": "NZD",
    "China": "CNY",
    "Hong Kong (China)": "HKD",
    "Macao (China)": "MOP",
    "Japan": "JPY",
    "Korea (South Korea)": "KRW",
    "Singapore": "SGD",
    "Malaysia": "MYR",
    "Thailand": "THB",
    "Indonesia": "IDR",
    "Philippines": "PHP",
    "Vietnam": "VND",
    "Bangladesh": "BDT",
    "Pakistan": "PKR",
    "Nepal": "NPR",
    "Sri Lanka": "LKR",
    "United Arab Emirates": "AED",
    "Saudi Arabia": "SAR",
    "Qatar": "QAR",
    "Kuwait": "KWD",
    "Bahrain": "BHD",
    "Oman": "OMR",
    "Israel": "ILS",
    "Turkey": "TRY",
    "Russian Federation": "RUB",
    "South Africa": "ZAR",
    "Nigeria": "NGN",
    "Ghana": "GHS",
    "Kenya": "KES",
    "Egypt": "EGP",
    "Morocco": "MAD",
    "Brazil": "BRL",
    "Mexico": "MXN",
    "Argentina": "ARS",
    "Chile": "CLP",
    "Colombia": "COP",
    "Peru": "PEN",
    "Poland": "PLN",
    "Czechia": "CZK",
    "Hungary": "HUF",
    "Romania": "RON",
    "Bulgaria": "BGN",
    "France": "EUR",
    "Germany": "EUR",
    "Italy": "EUR",
    "Spain": "EUR",
    "Portugal": "EUR",
    "Netherlands": "EUR",
    "Belgium": "EUR",
    "Austria": "EUR",
    "Ireland": "EUR",
    "Finland": "EUR",
    "Greece": "EUR",
    "Estonia": "EUR",
    "Latvia": "EUR",
    "Lithuania": "EUR",
    "Luxembourg": "EUR",
    "Slovakia": "EUR",
    "Slovenia": "EUR",
    "Cyprus": "EUR",
    "Malta": "EUR",
    "Sweden": "SEK",
    "Denmark": "DKK",
    "Norway": "NOK",
    "Switzerland": "CHF",
    "Iceland": "ISK",
    "Ukraine": "UAH",
    "Kazakhstan": "KZT",
    "Armenia": "AMD",
    "Georgia": "GEL",
    "Azerbaijan": "AZN",
    "Serbia": "RSD",
    "Albania": "ALL",
    "Taiwan": "TWD"
};


// ============================================================
// COUNTRY HELPERS
// ============================================================

function getCountryKey(country) {
    const aliases = {
        "Bolivia": "Bolivia (Plurinational State of)",
        "South Korea": "Korea (South Korea)",
        "Laos": "Lao peoples Democratic republic",
        "São Tomé and Príncipe": "Sao Tome and Principe",
        "South Georgia and the South Sandwich Islands":
            "South Georgia and South Sandwich Islands"
    };

    return aliases[country] || country;
}


function getSellingPriceUSD(country) {
    const key = getCountryKey(country);
    const shipping = COUNTRY_SHIPPING_USD[key];

    if (
        shipping === null ||
        shipping === undefined ||
        BLOCKED_COUNTRIES.includes(key)
    ) {
        return null;
    }

    return Number(
        (
            CJ_PRODUCT_COST_USD +
            shipping +
            MINIMUM_PROFIT_USD
        ).toFixed(2)
    );
}


function getCurrency(country) {
    const key = getCountryKey(country);
    return COUNTRY_CURRENCY[key] || "USD";
}


// ============================================================
// CART
// ============================================================

function getCart() {
    try {
        const cart = JSON.parse(
            localStorage.getItem(CART_KEY) || "[]"
        );

        return Array.isArray(cart) ? cart : [];
    } catch {
        return [];
    }
}


function saveCart(cart) {
    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );
}


function addToCart(productName) {
    const cart = getCart();

    const existing = cart.find(
        item => item.name === productName
    );

    if (existing) {
        existing.quantity =
            Number(existing.quantity || 1) + 1;
    } else {
        cart.push({
            id: Date.now(),
            name: productName,
            quantity: 1,
            cjProductCostUSD: CJ_PRODUCT_COST_USD
        });
    }

    saveCart(cart);
    updateCartUI();

    alert(productName + " added to your cart.");
}


function removeFromCart(index) {
    const cart = getCart();

    cart.splice(index, 1);

    saveCart(cart);
    updateCartUI();
}


function changeQuantity(index, amount) {
    const cart = getCart();

    if (!cart[index]) return;

    cart[index].quantity =
        Number(cart[index].quantity || 1) + amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart(cart);
    updateCartUI();
}


function updateCartUI() {
    const cart = getCart();

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");

    let totalQuantity = 0;

    cart.forEach(item => {
        totalQuantity += Number(item.quantity || 1);
    });

    if (cartCount) {
        cartCount.textContent = totalQuantity;
    }

    if (cartTotal) {
        cartTotal.textContent = totalQuantity;
    }

    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.innerHTML = cart.map(
        (item, index) => `
            <div class="cart-item">
                <div>
                    <strong>${escapeHTML(item.name)}</strong>
                    <div>
                        Quantity:
                        ${Number(item.quantity || 1)}
                    </div>
                </div>

                <div>
                    <button
                        type="button"
                        onclick="changeQuantity(${index}, -1)"
                    >−</button>

                    <button
                        type="button"
                        onclick="changeQuantity(${index}, 1)"
                    >+</button>

                    <button
                        type="button"
                        onclick="removeFromCart(${index})"
                    >Remove</button>
                </div>
            </div>
        `
    ).join("");
}


// ============================================================
// CART OPEN / CLOSE
// ============================================================

function openCart() {
    const panel =
        document.getElementById("cartPanel");

    if (panel) {
        panel.classList.add("active");
    }
}


function closeCart() {
    const panel =
        document.getElementById("cartPanel");

    if (panel) {
        panel.classList.remove("active");
    }
}


// ============================================================
// CHECKOUT NAVIGATION
// ============================================================

function goToCheckout() {
    const cart = getCart();

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    window.location.href = "./checkout.html";
}


// ============================================================
// CHECKOUT COUNTRY LIST
// ============================================================

function loadCountries() {
    const select =
        document.getElementById("checkoutCountry");

    if (!select) return;

    const countries =
        Object.keys(COUNTRY_SHIPPING_USD)
            .sort((a, b) =>
                a.localeCompare(b)
            );

    select.innerHTML =
        '<option value="">Select your country</option>';

    countries.forEach(country => {
        const option =
            document.createElement("option");

        option.value = country;
        option.textContent = country;

        if (
            BLOCKED_COUNTRIES.includes(country) ||
            COUNTRY_SHIPPING_USD[country] === null
        ) {
            option.disabled = true;
            option.textContent +=
                " — Shipping unavailable";
        }

        select.appendChild(option);
    });
}


// ============================================================
// CHECKOUT ITEMS
// ============================================================

function renderCheckoutItems() {
    const container =
        document.getElementById("checkoutItems");

    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {
        container.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';
        return;
    }

    container.innerHTML = cart.map(
        item => `
            <div class="checkout-item">
                <div>
                    <strong>
                        ${escapeHTML(item.name)}
                    </strong>

                    <small>
                        Quantity:
                        ${Number(item.quantity || 1)}
                    </small>
                </div>
            </div>
        `
    ).join("");
}


// ============================================================
// CHECKOUT PRICE
// ============================================================

async function updateCheckoutTotal() {
    const countrySelect =
        document.getElementById("checkoutCountry");

    const subtotal =
        document.getElementById("checkoutSubtotal");

    const total =
        document.getElementById("checkoutTotal");

    const shipping =
        document.getElementById("checkoutShipping");

    const currency =
        document.getElementById("checkoutCurrency");

    const button =
        document.getElementById("placeOrderButton");

    if (!countrySelect) return;

    const country =
        countrySelect.value;

    const cart =
        getCart();

    if (!country || cart.length === 0) {
        if (subtotal) subtotal.textContent = "—";
        if (total) total.textContent = "—";
        if (shipping) shipping.textContent = "FREE";
        if (button) button.disabled = true;
        return;
    }

    const priceUSD =
        getSellingPriceUSD(country);

    if (priceUSD === null) {
        if (subtotal) subtotal.textContent = "Unavailable";
        if (total) total.textContent = "Unavailable";
        if (button) button.disabled = true;
        return;
    }

    let totalUSD = 0;

    cart.forEach(item => {
        totalUSD +=
            priceUSD *
            Number(item.quantity || 1);
    });

    totalUSD =
        Number(totalUSD.toFixed(2));

    const targetCurrency =
        getCurrency(country);

    if (currency) {
        currency.textContent =
            targetCurrency;
    }

    if (shipping) {
        shipping.textContent = "FREE";
    }

    if (button) {
        button.disabled = false;
    }

    if (subtotal) {
        subtotal.textContent =
            formatMoney(
                totalUSD,
                "USD"
            );
    }

    if (total) {
        total.textContent =
            formatMoney(
                totalUSD,
                "USD"
            );
    }

    if (targetCurrency !== "USD") {
        try {
            const converted =
                await convertCurrency(
                    totalUSD,
                    targetCurrency
                );

            if (subtotal) {
                subtotal.textContent =
                    formatMoney(
                        converted,
                        targetCurrency
                    );
            }

            if (total) {
                total.textContent =
                    formatMoney(
                        converted,
                        targetCurrency
                    );
            }
        } catch (error) {
            console.log(
                "Currency conversion unavailable."
            );
        }
    }
}


// ============================================================
// CURRENCY CONVERSION
// ============================================================

async function convertCurrency(
    usdAmount,
    currency
) {
    const response =
        await fetch(
            "https://api.frankfurter.app/latest?from=USD&to=" +
            encodeURIComponent(currency)
        );

    if (!response.ok) {
        throw new Error(
            "Currency conversion failed"
        );
    }

    const data =
        await response.json();

    const rate =
        data.rates[currency];

    if (!rate) {
        return usdAmount;
    }

    return Number(
        (usdAmount * rate).toFixed(2)
    );
}


function formatMoney(
    amount,
    currency
) {
    try {
        return new Intl.NumberFormat(
            undefined,
            {
                style: "currency",
                currency: currency
            }
        ).format(amount);
    } catch {
        return currency + " " +
            Number(amount).toFixed(2);
    }
}


// ============================================================
// PLACE ORDER
// ============================================================

function handlePlaceOrder(event) {
    event.preventDefault();

    const form =
        document.getElementById(
            "checkoutForm"
        );

    if (
        form &&
        !form.reportValidity()
    ) {
        return;
    }

    const cart = getCart();

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const country =
        document.getElementById(
            "checkoutCountry"
        )?.value;

    const priceUSD =
        getSellingPriceUSD(country);

    if (priceUSD === null) {
        alert(
            "Shipping is unavailable for this country."
        );
        return;
    }

    let totalUSD = 0;

    cart.forEach(item => {
        totalUSD +=
            priceUSD *
            Number(item.quantity || 1);
    });

    totalUSD =
        Number(totalUSD.toFixed(2));

    const order = {
        orderId:
            "SF-" + Date.now(),

        customer: {
            name:
                document.getElementById(
                    "checkoutName"
                )?.value || "",

            email:
                document.getElementById(
                    "checkoutEmail"
                )?.value || "",

            countryCode:
                document.getElementById(
                    "checkoutCountryCode"
                )?.value || "",

            phone:
                document.getElementById(
                    "checkoutPhone"
                )?.value || ""
        },

        shippingAddress: {
            address:
                document.getElementById(
                    "checkoutAddress"
                )?.value || "",

            city:
                document.getElementById(
                    "checkoutCity"
                )?.value || "",

            state:
                document.getElementById(
                    "checkoutState"
                )?.value || "",

            country: country,

            postalCode:
                document.getElementById(
                    "checkoutPostalCode"
                )?.value || ""
        },

        items: cart,

        pricing: {
            productCostUSD:
                CJ_PRODUCT_COST_USD,

            cjShippingUSD:
                COUNTRY_SHIPPING_USD[
                    getCountryKey(country)
                ],

            profitUSD:
                MINIMUM_PROFIT_USD,

            sellingPriceUSDPerItem:
                priceUSD,

            totalUSD:
                totalUSD,

            customerShipping:
                "FREE"
        },

        paymentMethod:
            document.querySelector(
                'input[name="paymentMethod"]:checked'
            )?.value || "cod",

        createdAt:
            new Date().toISOString()
    };

    localStorage.setItem(
        "pendingOrder",
        JSON.stringify(order)
    );

    localStorage.setItem(
        "sacchiFlyierCheckout",
        JSON.stringify(order)
    );

    alert(
        "Order " +
        order.orderId +
        " created successfully."
    );
}


// ============================================================
// SEARCH
// ============================================================

function openSearch() {
    const overlay =
        document.getElementById(
            "searchOverlay"
        );

    if (overlay) {
        overlay.classList.add("active");

        document
            .getElementById("searchInput")
            ?.focus();
    }
}


function closeSearch() {
    const overlay =
        document.getElementById(
            "searchOverlay"
        );

    if (overlay) {
        overlay.classList.remove("active");
    }
}


// ============================================================
// HTML SAFETY
// ============================================================

function escapeHTML(value) {
    return String(value).replace(
        /[&<>"']/g,
        character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[character]
    );
}


// ============================================================
// START
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // Cart
        updateCartUI();

        // Add-to-cart buttons
        document
            .querySelectorAll(".add-cart")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    function () {

                        const product =
                            button.dataset.product ||
                            "Product";

                        addToCart(product);
                    }
                );
            });


        // Cart open
        document
            .getElementById("cartButton")
            ?.addEventListener(
                "click",
                openCart
            );


        // Cart close
        document
            .getElementById("closeCart")
            ?.addEventListener(
                "click",
                closeCart
            );


        // Checkout
        document
            .getElementById("checkoutButton")
            ?.addEventListener(
                "click",
                goToCheckout
            );


        // Search
        document
            .getElementById("searchButton")
            ?.addEventListener(
                "click",
                openSearch
            );


        document
            .getElementById("closeSearch")
            ?.addEventListener(
                "click",
                closeSearch
            );


        // Mobile menu
        const menuToggle =
            document.getElementById(
                "menuToggle"
            );

        const navLinks =
            document.getElementById(
                "navLinks"
            );

        if (menuToggle && navLinks) {

            menuToggle.addEventListener(
                "click",
                function () {

                    navLinks.classList.toggle(
                        "active"
                    );
                }
            );
        }


        // Checkout page
        loadCountries();
        renderCheckoutItems();
        updateCheckoutTotal();


        document
            .getElementById("checkoutCountry")
            ?.addEventListener(
                "change",
                updateCheckoutTotal
            );


        document
            .getElementById("checkoutForm")
            ?.addEventListener(
                "submit",
                handlePlaceOrder
            );
    }
);
