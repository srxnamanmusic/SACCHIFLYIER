<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="Sacchi Flyier secure checkout"
    >

    <title>Checkout | Sacchi Flyier</title>

    <link
        rel="stylesheet"
        href="style.css"
    >
</head>

<body>

<!-- =====================================================
     CHECKOUT HEADER
     ===================================================== -->

<header class="checkout-header">

    <div class="checkout-header-inner">

        <a
            href="index.html"
            class="checkout-logo"
        >
            Sacchi Flyier
        </a>

        <a
            href="index.html"
            class="back-to-store"
        >
            ← Back to Store
        </a>

    </div>

</header>


<!-- =====================================================
     CHECKOUT MAIN
     ===================================================== -->

<main class="checkout-page">

    <div class="checkout-container">

        <!-- =================================================
             PAGE TITLE
             ================================================= -->

        <div class="checkout-title">

            <h1>Checkout</h1>

            <p>
                Complete your details to place your order.
            </p>

        </div>


        <!-- =================================================
             CHECKOUT GRID
             ================================================= -->

        <div class="checkout-grid">


            <!-- =============================================
                 CUSTOMER INFORMATION
                 ============================================= -->

            <section class="checkout-form-card">

                <h2>Customer Information</h2>


                <!-- NAME -->

                <div class="checkout-field">

                    <label for="checkoutName">
                        Full Name
                    </label>

                    <input
                        type="text"
                        id="checkoutName"
                        name="name"
                        placeholder="Enter your full name"
                        autocomplete="name"
                        required
                    >

                </div>


                <!-- EMAIL -->

                <div class="checkout-field">

                    <label for="checkoutEmail">
                        Email Address
                    </label>

                    <input
                        type="email"
                        id="checkoutEmail"
                        name="email"
                        placeholder="Enter your email"
                        autocomplete="email"
                        required
                    >

                </div>


                <!-- PHONE -->

                <div class="checkout-field">

                    <label for="checkoutPhone">
                        Phone Number
                    </label>

                    <div class="phone-row">

                        <select
                            id="checkoutCountryCode"
                            name="countryCode"
                            autocomplete="tel-country-code"
                        >

                            <option value="+91">
                                +91 India
                            </option>

                            <option value="+1">
                                +1 USA/Canada
                            </option>

                            <option value="+44">
                                +44 UK
                            </option>

                            <option value="+61">
                                +61 Australia
                            </option>

                            <option value="+971">
                                +971 UAE
                            </option>

                            <option value="+92">
                                +92 Pakistan
                            </option>

                            <option value="+880">
                                +880 Bangladesh
                            </option>

                            <option value="+86">
                                +86 China
                            </option>

                            <option value="+81">
                                +81 Japan
                            </option>

                            <option value="+82">
                                +82 South Korea
                            </option>

                            <option value="+65">
                                +65 Singapore
                            </option>

                            <option value="+60">
                                +60 Malaysia
                            </option>

                        </select>


                        <input
                            type="tel"
                            id="checkoutPhone"
                            name="phone"
                            placeholder="Phone number"
                            autocomplete="tel"
                            required
                        >

                    </div>

                </div>


                <!-- =========================================
                     SHIPPING ADDRESS
                     ========================================= -->

                <h2 class="checkout-section-heading">
                    Shipping Address
                </h2>


                <!-- ADDRESS -->

                <div class="checkout-field">

                    <label for="address">
                        Address
                    </label>

                    <textarea
                        id="address"
                        name="address"
                        placeholder="House number, street, area"
                        autocomplete="street-address"
                        rows="3"
                        required
                    ></textarea>

                </div>


                <!-- CITY -->

                <div class="checkout-field">

                    <label for="city">
                        City
                    </label>

                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Enter your city"
                        autocomplete="address-level2"
                        required
                    >

                </div>


                <!-- STATE -->

                <div class="checkout-field">

                    <label for="state">
                        State / Province
                    </label>

                    <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="Enter your state or province"
                        autocomplete="address-level1"
                        required
                    >

                </div>


                <!-- COUNTRY -->

                <div class="checkout-field">

                    <label for="country">
                        Country
                    </label>

                    <select
                        id="country"
                        name="country"
                        autocomplete="country-name"
                        required
                    >

                        <option value="">
                            Select your country
                        </option>


                        <option value="Afghanistan">
                            Afghanistan
                        </option>

                        <option value="Albania">
                            Albania
                        </option>

                        <option value="Algeria">
                            Algeria
                        </option>

                        <option value="American Samoa">
                            American Samoa
                        </option>

                        <option value="Andorra">
                            Andorra
                        </option>

                        <option value="Angola">
                            Angola
                        </option>

                        <option value="Anguilla">
                            Anguilla
                        </option>

                        <option value="Antigua and Barbuda">
                            Antigua and Barbuda
                        </option>

                        <option value="Argentina">
                            Argentina
                        </option>

                        <option value="Armenia">
                            Armenia
                        </option>

                        <option value="Aruba">
                            Aruba
                        </option>

                        <option value="Australia">
                            Australia
                        </option>

                        <option value="Austria">
                            Austria
                        </option>

                        <option value="Azerbaijan">
                            Azerbaijan
                        </option>

                        <option value="Bahamas">
                            Bahamas
                        </option>

                        <option value="Bahrain">
                            Bahrain
                        </option>

                        <option value="Bangladesh">
                            Bangladesh
                        </option>

                        <option value="Barbados">
                            Barbados
                        </option>

                        <option value="Belarus">
                            Belarus
                        </option>

                        <option value="Belgium">
                            Belgium
                        </option>

                        <option value="Belize">
                            Belize
                        </option>

                        <option value="Benin">
                            Benin
                        </option>

                        <option value="Bermuda">
                            Bermuda
                        </option>

                        <option value="Bhutan">
                            Bhutan
                        </option>

                        <option value="Bolivia">
                            Bolivia
                        </option>

                        <option value="Bonaire, Sint Eustatius and Saba">
                            Bonaire, Sint Eustatius and Saba
                        </option>

                        <option value="Bosnia and Herzegovina">
                            Bosnia and Herzegovina
                        </option>

                        <option value="Botswana">
                            Botswana
                        </option>

                        <option value="Bouvet Island">
                            Bouvet Island
                        </option>

                        <option value="Brazil">
                            Brazil
                        </option>

                        <option value="British Indian Ocean Territory">
                            British Indian Ocean Territory
                        </option>

                        <option value="Brunei Darussalam">
                            Brunei Darussalam
                        </option>

                        <option value="Bulgaria">
                            Bulgaria
                        </option>

                        <option value="Burkina Faso">
                            Burkina Faso
                        </option>

                        <option value="Burundi">
                            Burundi
                        </option>

                        <option value="Cabo Verde">
                            Cabo Verde
                        </option>

                        <option value="Cambodia">
                            Cambodia
                        </option>

                        <option value="Cameroon">
                            Cameroon
                        </option>

                        <option value="Canada">
                            Canada
                        </option>

                        <option value="Cayman Islands">
                            Cayman Islands
                        </option>

                        <option value="Central African Republic">
                            Central African Republic
                        </option>

                        <option value="Chad">
                            Chad
                        </option>

                        <option value="Chile">
                            Chile
                        </option>

                        <option value="China">
                            China
                        </option>

                        <option value="Christmas Island">
                            Christmas Island
                        </option>

                        <option value="Cocos (Keeling) Islands">
                            Cocos (Keeling) Islands
                        </option>

                        <option value="Colombia">
                            Colombia
                        </option>

                        <option value="Comoros">
                            Comoros
                        </option>

                        <option value="Congo">
                            Congo
                        </option>

                        <option value="Congo (the Democratic Republic of the)">
                            Democratic Republic of the Congo
                        </option>

                        <option value="Cook Islands">
                            Cook Islands
                        </option>

                        <option value="Costa Rica">
                            Costa Rica
                        </option>

                        <option value="Côte d’Ivoire">
                            Côte d’Ivoire
                        </option>

                        <option value="Croatia">
                            Croatia
                        </option>

                        <option value="Cuba">
                            Cuba
                        </option>

                        <option value="Curaçao">
                            Curaçao
                        </option>

                        <option value="Cyprus">
                            Cyprus
                        </option>

                        <option value="Czechia">
                            Czechia
                        </option>

                        <option value="Denmark">
                            Denmark
                        </option>

                        <option value="Djibouti">
                            Djibouti
                        </option>

                        <option value="Dominica">
                            Dominica
                        </option>

                        <option value="Dominican Republic">
                            Dominican Republic
                        </option>

                        <option value="Ecuador">
                            Ecuador
                        </option>

                        <option value="Egypt">
                            Egypt
                        </option>

                        <option value="El Salvador">
                            El Salvador
                        </option>

                        <option value="Equatorial Guinea">
                            Equatorial Guinea
                        </option>

                        <option value="Eritrea">
                            Eritrea
                        </option>

                        <option value="Estonia">
                            Estonia
                        </option>

                        <option value="Ethiopia">
                            Ethiopia
                        </option>

                        <option value="Falkland Islands">
                            Falkland Islands
                        </option>

                        <option value="Faroe Islands">
                            Faroe Islands
                        </option>

                        <option value="Fiji">
                            Fiji
                        </option>

                        <option value="Finland">
                            Finland
                        </option>

                        <option value="France">
                            France
                        </option>

                        <option value="French Guiana">
                            French Guiana
                        </option>

                        <option value="French Polynesia">
                            French Polynesia
                        </option>

                        <option value="French Southern Territories">
                            French Southern Territories
                        </option>

                        <option value="Gabon">
                            Gabon
                        </option>

                        <option value="Gambia">
                            Gambia
                        </option>

                        <option value="Georgia">
                            Georgia
                        </option>

                        <option value="Germany">
                            Germany
                        </option>

                        <option value="Ghana">
                            Ghana
                        </option>

                        <option value="Gibraltar">
                            Gibraltar
                        </option>

                        <option value="Greece">
                            Greece
                        </option>

                        <option value="Greenland">
                            Greenland
                        </option>

                        <option value="Grenada">
                            Grenada
                        </option>

                        <option value="Guadeloupe">
                            Guadeloupe
                        </option>

                        <option value="Guam">
                            Guam
                        </option>

                        <option value="Guatemala">
                            Guatemala
                        </option>

                        <option value="Guernsey">
                            Guernsey
                        </option>

                        <option value="Guinea">
                            Guinea
                        </option>

                        <option
                            value="Guinea-Bissau"
                            disabled
                        >
                            Guinea-Bissau — Not Available
                        </option>

                        <option value="Guyana">
                            Guyana
                        </option>

                        <option value="Haiti">
                            Haiti
                        </option>

                        <option value="Hawaii">
                            Hawaii — Shipping Unavailable
                        </option>

                        <option value="Heard Island and McDonald Islands">
                            Heard Island and McDonald Islands
                        </option>

                        <option value="Holy See">
                            Holy See
                        </option>

                        <option value="Honduras">
                            Honduras
                        </option>

                        <option value="Hong Kong (China)">
                            Hong Kong
                        </option>

                        <option value="Hungary">
                            Hungary
                        </option>

                        <option value="Iceland">
                            Iceland
                        </option>

                        <option value="India">
                            India
                        </option>

                        <option value="Indonesia">
                            Indonesia
                        </option>

                        <option value="Iran (Islamic Republic of)">
                            Iran
                        </option>

                        <option
                            value="Iraq"
                            disabled
                        >
                            Iraq — Not Available
                        </option>

                        <option value="Ireland">
                            Ireland
                        </option>

                        <option value="Isle of Man">
                            Isle of Man
                        </option>

                        <option value="Israel">
                            Israel
                        </option>

                        <option value="Italy">
                            Italy
                        </option>

                        <option value="Jamaica">
                            Jamaica
                        </option>

                        <option value="Japan">
                            Japan
                        </option>

                        <option value="Jersey">
                            Jersey
                        </option>

                        <option value="Jordan">
                            Jordan
                        </option>

                        <option value="Kazakhstan">
                            Kazakhstan
                        </option>

                        <option value="Kenya">
                            Kenya
                        </option>

                        <option value="Kiribati">
                            Kiribati
                        </option>

                        <option
                            value="Korea (the Democratic People's Republic of)"
                            disabled
                        >
                            North Korea — Not Available
                        </option>

                        <option value="South Korea">
                            South Korea
                        </option>

                        <option value="Kuwait">
                            Kuwait
                        </option>

                        <option value="Kyrgyzstan">
                            Kyrgyzstan
                        </option>

                        <option value="Laos">
                            Laos
                        </option>

                        <option value="Latvia">
                            Latvia
                        </option>

                        <option value="Lebanon">
                            Lebanon
                        </option>

                        <option value="Lesotho">
                            Lesotho
                        </option>

                        <option value="Liberia">
                            Liberia
                        </option>

                        <option value="Libya">
                            Libya
                        </option>

                        <option value="Liechtenstein">
                            Liechtenstein
                        </option>

                        <option value="Lithuania">
                            Lithuania
                        </option>

                        <option value="Luxembourg">
                            Luxembourg
                        </option>

                        <option value="Macao (China)">
                            Macao
                        </option>

                        <option value="Macedonia (The former Yugoslav Republic of)">
                            North Macedonia
                        </option>

                        <option value="Madagascar">
                            Madagascar
                        </option>

                        <option value="Malawi">
                            Malawi
                        </option>

                        <option value="Malaysia">
                            Malaysia
                        </option>

                        <option value="Maldives">
                            Maldives
                        </option>

                        <option value="Mali">
                            Mali
                        </option>

                        <option value="Malta">
                            Malta
                        </option>

                        <option value="Marshall Islands">
                            Marshall Islands
                        </option>

                        <option value="Martinique">
                            Martinique
                        </option>

                        <option value="Mauritania">
                            Mauritania
                        </option>

                        <option value="Mauritius">
                            Mauritius
                        </option>

                        <option value="Mayotte">
                            Mayotte
                        </option>

                        <option value="Mexico">
                            Mexico
                        </option>

                        <option
                            value="Micronesia (Federated States of)"
                            disabled
                        >
                            Micronesia — Not Available
                        </option>

                        <option value="Moldova the republic">
                            Moldova
                        </option>

                        <option value="Monaco">
                            Monaco
                        </option>

                        <option value="Mongolia">
                            Mongolia
                        </option>

                        <option value="Montenegro">
                            Montenegro
                        </option>

                        <option value="Montserrat">
                            Montserrat
                        </option>

                        <option value="Morocco">
                            Morocco
                        </option>

                        <option value="Mozambique">
                            Mozambique
                        </option>

                        <option value="Myanmar">
                            Myanmar
                        </option>

                        <option value="Namibia">
                            Namibia
                        </option>

                        <option value="Nauru">
                            Nauru
                        </option>

                        <option value="Nepal">
                            Nepal
                        </option>

                        <option value="Netherlands">
                            Netherlands
                        </option>

                        <option value="New Caledonia">
                            New Caledonia
                        </option>

                        <option value="New Zealand">
                            New Zealand
                        </option>

                        <option value="Nicaragua">
                            Nicaragua
                        </option>

                        <option value="Niger">
                            Niger
                        </option>

                        <option value="Nigeria">
                            Nigeria
                        </option>

                        <option value="Niue">
                            Niue
                        </option>

                        <option value="Norfolk Island">
                            Norfolk Island
                        </option>

                        <option value="Northern Mariana Island">
                            Northern Mariana Islands
                        </option>

                        <option value="Norway">
                            Norway
                        </option>

                        <option value="Oman">
                            Oman
                        </option>

                        <option value="Pakistan">
                            Pakistan
                        </option>

                        <option
                            value="Palau"
                            disabled
                        >
                            Palau — Not Available
                        </option>

                        <option value="Palestine State of">
                            Palestine
                        </option>

                        <option value="Panama">
                            Panama
                        </option>

                        <option value="Papua New Guinea">
                            Papua New Guinea
                        </option>

                        <option value="Paraguay">
                            Paraguay
                        </option>

                        <option value="Peru">
                            Peru
                        </option>

                        <option value="Philippines">
                            Philippines
                        </option>

                        <option value="Pitcairn">
                            Pitcairn
                        </option>

                        <option value="Poland">
                            Poland
                        </option>

                        <option value="Portugal">
                            Portugal
                        </option>

                        <option value="Puerto Rico">
                            Puerto Rico
                        </option>

                        <option value="Qatar">
                            Qatar
                        </option>

                        <option value="Réunion">
                            Réunion
                        </option>

                        <option value="Romania">
                            Romania
                        </option>

                        <option value="Russian Federation">
                            Russia
                        </option>

                        <option value="Rwanda">
                            Rwanda
                        </option>

                        <option value="Saint Helena, Ascension and Tristan da Cunha">
                            Saint Helena
                        </option>

                        <option value="Saint Kitts and Nevis">
                            Saint Kitts and Nevis
                        </option>

                        <option value="Saint Lucia">
                            Saint Lucia
                        </option>

                        <option value="Saint Martin (French part)">
                            Saint Martin
                        </option>

                        <option value="Saint Pierre and Miquelon">
                            Saint Pierre and Miquelon
                        </option>

                        <option value="Saint Vincent and the Grenadines">
                            Saint Vincent and the Grenadines
                        </option>

                        <option value="Samoa">
                            Samoa
                        </option>

                        <option value="San Marino">
                            San Marino
                        </option>

                        <option value="São Tomé and Príncipe">
                            São Tomé and Príncipe
                        </option>

                        <option value="Saudi Arabia">
                            Saudi Arabia
                        </option>

                        <option value="Senegal">
                            Senegal
                        </option>

                        <option value="Serbia">
                            Serbia
                        </option>

                        <option value="Seychelles">
                            Seychelles
                        </option>

                        <option value="Sierra Leone">
                            Sierra Leone
                        </option>

                        <option value="Singapore">
                            Singapore
                        </option>

                        <option value="Sint Maarten (Dutch Part)">
                            Sint Maarten
                        </option>

                        <option value="Slovakia">
                            Slovakia
                        </option>

                        <option value="Slovenia">
                            Slovenia
                        </option>

                        <option value="Solomon Islands">
                            Solomon Islands
                        </option>

                        <option value="Somalia">
                            Somalia
                        </option>

                        <option value="South Africa">
                            South Africa
                        </option>

                        <option value="South Georgia and the South Sandwich Islands">
                            South Georgia and the South Sandwich Islands
                        </option>

                        <option
                            value="South Sudan"
                            disabled
                        >
                            South Sudan — Not Available
                        </option>

                        <option value="Spain">
                            Spain
                        </option>

                        <option value="Sri Lanka">
                            Sri Lanka
                        </option>

                        <option value="Sudan">
                            Sudan
                        </option>

                        <option value="Suriname">
                            Suriname
                        </option>

                        <option value="Swaziland">
                            Eswatini
                        </option>

                        <option value="Sweden">
                            Sweden
                        </option>

                        <option value="Switzerland">
                            Switzerland
                        </option>

                        <option
                            value="Syrian Arab Republic"
                            disabled
                        >
                            Syria — Not Available
                        </option>

                        <option value="Taiwan">
                            Taiwan
                        </option>

                        <option value="Tajikistan">
                            Tajikistan
                        </option>

                        <option value="Tanzania, United Republic of">
                            Tanzania
                        </option>

                        <option value="Thailand">
                            Thailand
                        </option>

                        <option value="The Republic of Kosovo">
                            Kosovo
                        </option>

                        <option value="Timor-Leste">
                            Timor-Leste
                        </option>

                        <option value="Togo">
                            Togo
                        </option>

                        <option value="Tokelau">
                            Tokelau
                        </option>

                        <option value="Tonga">
                            Tonga
                        </option>

                        <option value="Trinidad and Tobago">
                            Trinidad and Tobago
                        </option>

                        <option value="Tunisia">
                            Tunisia
                        </option>

                        <option value="Turkey">
                            Turkey
                        </option>

                        <option value="Turks and Caicos Islands">
                            Turks and Caicos Islands
                        </option>

                        <option value="Tuvalu">
                            Tuvalu
                        </option>

                        <option value="Uganda">
                            Uganda
                        </option>

                        <option value="Ukraine">
                            Ukraine
                        </option>

                        <option value="United Arab Emirates">
                            United Arab Emirates
                        </option>

                        <option value="United Kingdom">
                            United Kingdom
                        </option>

                        <option value="United States">
                            United States
                        </option>

                        <option value="Uruguay">
                            Uruguay
                        </option>

                        <option value="Uzbekistan">
                            Uzbekistan
                        </option>

                        <option value="Vanuatu">
                            Vanuatu
                        </option>

                        <option value="Venezuela (Bolivarian Republic of)">
                            Venezuela
                        </option>

                        <option value="Vietnam">
                            Vietnam
                        </option>

                        <option value="Virgin Islands (British)">
                            British Virgin Islands
                        </option>

                        <option value="Virgin Islands (U.S.)">
                            U.S. Virgin Islands
                        </option>

                        <option value="Wallis and Futuna">
                            Wallis and Futuna
                        </option>

                        <option value="Western Sahara">
                            Western Sahara
                        </option>

                        <option
                            value="Yemen"
                            disabled
                        >
                            Yemen — Not Available
                        </option>

                        <option value="Zambia">
                            Zambia
                        </option>

                        <option value="Zimbabwe">
                            Zimbabwe
                        </option>

                    </select>

                    <p
                        id="countryMessage"
                        class="checkout-status loading"
                    >
                        Please select your shipping country.
                    </p>

                </div>


                <!-- POSTAL CODE -->

                <div class="checkout-field">

                    <label for="postalCode">
                        Postal / ZIP Code
                    </label>

                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        placeholder="Enter postal or ZIP code"
                        autocomplete="postal-code"
                        required
                    >

                </div>


                <!-- =========================================
                     PAYMENT
                     ========================================= -->

                <h2 class="checkout-section-heading">
                    Payment Method
                </h2>


                <div class="payment-options">

                    <label class="payment-option">

                        <input
                            type="radio"
                            id="cod"
                            name="payment"
                            value="cod"
                            checked
                        >

                        <span>
                            Cash on Delivery
                        </span>

                    </label>


                    <label class="payment-option">

                        <input
                            type="radio"
                            id="online"
                            name="payment"
                            value="online"
                        >

                        <span>
                            Online Payment
                        </span>

                    </label>

                </div>


                <p class="payment-note">
                    Online payment processing will be connected
                    when the payment gateway is ready.
                </p>


            </section>


            <!-- =============================================
                 ORDER SUMMARY
                 ============================================= -->

            <aside class="checkout-summary-card">

                <h2>Order Summary</h2>


                <!-- PRODUCTS -->

                <div
                    id="checkoutItems"
                    class="checkout-items"
                >

                    <p>
                        Your cart is loading...
                    </p>

                </div>


                <!-- DIVIDER -->

                <div class="checkout-divider"></div>


                <!-- CURRENCY -->

                <div class="checkout-summary-row">

                    <span>
                        Currency
                    </span>

                    <strong id="checkoutCurrency">
                        —
                    </strong>

                </div>


                <!-- PRODUCT TOTAL -->

                <div class="checkout-summary-row">

                    <span>
                        Product Total
                    </span>

                    <strong id="checkoutSubtotal">
                        —
                    </strong>

                </div>


                <!-- CUSTOMER SHIPPING -->

                <div class="checkout-summary-row">

                    <span>
                        Shipping
                    </span>

                    <strong id="checkoutShipping">
                        FREE
                    </strong>

                </div>


                <!-- DIVIDER -->

                <div class="checkout-divider"></div>


                <!-- FINAL TOTAL -->

                <div class="checkout-total-row">

                    <span>
                        Total
                    </span>

                    <strong id="checkoutTotal">
                        —
                    </strong>

                </div>


                <!-- SHIPPING NOTE -->

                <div class="checkout-free-shipping">

                    <strong>
                        FREE SHIPPING
                    </strong>

                    <p>
                        Your customer shipping charge is FREE.
                    </p>

                </div>


                <!-- PRICE NOTE -->

                <div class="checkout-price-note">

                    <p>
                        Product prices are automatically
                        calculated according to the selected
                        destination country.
                    </p>

                </div>


                <!-- PLACE ORDER -->

                <button
                    type="button"
                    id="placeOrderButton"
                    class="place-order-button"
                    disabled
                >
                    Place Order
                </button>


                <!-- SECURITY -->

                <div class="checkout-security">

                    <span>🔒</span>

                    <p>
                        Your checkout information is handled
                        securely.
                    </p>

                </div>

            </aside>

        </div>

    </div>

</main>


<!-- =====================================================
     FOOTER
     ===================================================== -->

<footer class="checkout-footer">

    <p>
        © 2026 Sacchi Flyier. All rights reserved.
    </p>

</footer>


<!-- =====================================================
     JAVASCRIPT
     ===================================================== -->

<script src="script.js"></script>

</body>
</html>
