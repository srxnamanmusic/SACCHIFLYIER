// ==========================================
// SACCHI FLYIER - WEBSITE JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // MOBILE MENU
    // ==========================================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }


    // ==========================================
    // SEARCH
    // ==========================================

    const searchButton = document.getElementById("searchButton");
    const searchOverlay = document.getElementById("searchOverlay");
    const closeSearch = document.getElementById("closeSearch");
    const searchInput = document.getElementById("searchInput");

    if (searchButton && searchOverlay) {
        searchButton.addEventListener("click", () => {
            searchOverlay.classList.add("active");

            if (searchInput) {
                setTimeout(() => searchInput.focus(), 200);
            }
        });
    }

    if (closeSearch && searchOverlay) {
        closeSearch.addEventListener("click", () => {
            searchOverlay.classList.remove("active");

            if (searchInput) {
                searchInput.value = "";
            }
        });
    }

    if (searchOverlay) {
        searchOverlay.addEventListener("click", event => {
            if (event.target === searchOverlay) {
                searchOverlay.classList.remove("active");
            }
        });
    }


    // ==========================================
    // CART
    // ==========================================

    let cart = JSON.parse(localStorage.getItem("sacchiFlyierCart")) || [];

    const cartButton = document.getElementById("cartButton");
    const cartPanel = document.getElementById("cartPanel");
    const closeCart = document.getElementById("closeCart");

    const cartItemsContainer = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    const checkoutButton = document.getElementById("checkoutButton");


    // ==========================================
    // UPDATE CART
    // ==========================================

    function updateCart() {

        if (cartCount) {
            cartCount.textContent = cart.length;
        }

        if (!cartItemsContainer) {
            saveCart();
            return;
        }

        cartItemsContainer.innerHTML = "";

        let total = 0;

        if (cart.length === 0) {

            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <p>Your cart is empty.</p>
                    <span>Add something you love.</span>
                </div>
            `;

        } else {

            cart.forEach((item, index) => {

                total += Number(item.price) || 0;

                const itemElement = document.createElement("div");

                itemElement.className = "cart-item";

                itemElement.innerHTML = `
                    <div class="cart-item-info">
                        <strong>${escapeHTML(item.name)}</strong>
                        <span>₹${Number(item.price).toFixed(2)}</span>
                    </div>

                    <button
                        class="remove-cart-item"
                        data-index="${index}">
                        ×
                    </button>
                `;

                cartItemsContainer.appendChild(itemElement);
            });
        }

        if (cartTotal) {
            cartTotal.textContent = `₹${total.toFixed(2)}`;
        }

        document.querySelectorAll(".remove-cart-item").forEach(button => {

            button.addEventListener("click", () => {

                const index = Number(button.dataset.index);

                cart.splice(index, 1);

                saveCart();
                updateCart();
            });

        });
    }


    // ==========================================
    // SAVE CART
    // ==========================================

    function saveCart() {
        localStorage.setItem(
            "sacchiFlyierCart",
            JSON.stringify(cart)
        );
    }


    // ==========================================
    // ADD TO CART
    // ==========================================

    document.querySelectorAll(".add-cart").forEach(button => {

        button.addEventListener("click", () => {

            const productCard =
                button.closest(".product-card");

            const productName =
                button.dataset.product ||
                "Product";

            let price = 0;

            if (productCard) {

                const priceElement =
                    productCard.querySelector(".price");

                if (priceElement) {

                    price =
                        parseFloat(
                            priceElement.textContent
                                .replace(/[^\d.]/g, "")
                        ) || 0;
                }
            }

            cart.push({
                name: productName,
                price: price
            });

            saveCart();
            updateCart();

            if (cartPanel) {
                cartPanel.classList.add("active");
            }

            const oldText = button.textContent;

            button.textContent = "Added ✓";

            setTimeout(() => {
                button.textContent = oldText;
            }, 1200);

        });

    });


    // ==========================================
    // OPEN CART
    // ==========================================

    if (cartButton && cartPanel) {

        cartButton.addEventListener("click", () => {
            cartPanel.classList.add("active");
        });

    }


    // ==========================================
    // CLOSE CART
    // ==========================================

    if (closeCart && cartPanel) {

        closeCart.addEventListener("click", () => {
            cartPanel.classList.remove("active");
        });

    }


    // ==========================================
    // GO TO CHECKOUT
    // ==========================================

    if (checkoutButton) {

        checkoutButton.addEventListener("click", () => {

            if (cart.length === 0) {

                alert("Your cart is empty.");

                return;
            }

            window.location.href = "checkout.html";

        });

    }


    // ==========================================
    // CHECKOUT PAGE
    // ==========================================

    if (window.location.pathname.includes("checkout.html")) {

        loadCheckout();

    }


    function loadCheckout() {

        const checkoutItems =
            document.getElementById("checkoutItems");

        const checkoutSubtotal =
            document.getElementById("checkoutSubtotal");

        const checkoutTotal =
            document.getElementById("checkoutTotal");

        if (!checkoutItems) return;

        checkoutItems.innerHTML = "";

        let subtotal = 0;


        if (cart.length === 0) {

            checkoutItems.innerHTML = `
                <p>Your cart is empty.</p>
            `;

        } else {

            cart.forEach(item => {

                const price =
                    Number(item.price) || 0;

                subtotal += price;

                const itemElement =
                    document.createElement("div");

                itemElement.className =
                    "checkout-item";

                itemElement.innerHTML = `
                    <span class="checkout-item-name">
                        ${escapeHTML(item.name)}
                    </span>

                    <span class="checkout-item-price">
                        ₹${price.toFixed(2)}
                    </span>
                `;

                checkoutItems.appendChild(itemElement);

            });

        }


        if (checkoutSubtotal) {
            checkoutSubtotal.textContent =
                `₹${subtotal.toFixed(2)}`;
        }


        if (checkoutTotal) {
            checkoutTotal.textContent =
                `₹${subtotal.toFixed(2)}`;
        }


        // ==========================================
        // PLACE ORDER
        // ==========================================

        const placeOrderButton =
            document.getElementById("placeOrderButton");

        if (placeOrderButton) {

            placeOrderButton.addEventListener(
                "click",
                placeOrder
            );

        }

    }


    // ==========================================
    // PLACE ORDER FUNCTION
    // ==========================================

    function placeOrder() {

        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;
        }


        const name =
            document.getElementById("checkoutName")?.value.trim();

        const email =
            document.getElementById("checkoutEmail")?.value.trim();

        const phone =
            document.getElementById("checkoutPhone")?.value.trim();

        const address =
            document.getElementById("address")?.value.trim();

        const city =
            document.getElementById("city")?.value.trim();

        const state =
            document.getElementById("state")?.value.trim();

        const country =
            document.getElementById("country")?.value.trim();

        const postalCode =
            document.getElementById("postalCode")?.value.trim();


        if (
            !name ||
            !email ||
            !phone ||
            !address ||
            !city ||
            !state ||
            !country ||
            !postalCode
        ) {

            alert(
                "Please complete all required information."
            );

            return;
        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert(
                "Please enter a valid email address."
            );

            return;
        }


        const countryCode =
            document.getElementById(
                "checkoutCountryCode"
            )?.value || "+91";


        const paymentMethod =
            document.querySelector(
                'input[name="payment"]:checked'
            )?.value || "cod";


        // Create order number
        const orderNumber =
            "SF-" +
            Date.now().toString().slice(-8);


        // Calculate total
        const total =
            cart.reduce(
                (sum, item) =>
                    sum + (Number(item.price) || 0),
                0
            );


        const order = {

            orderNumber: orderNumber,

            customer: {
                name: name,
                email: email,
                phone: countryCode + " " + phone
            },

            address: {
                street: address,
                city: city,
                state: state,
                country: country,
                postalCode: postalCode
            },

            payment: paymentMethod,

            items: cart,

            total: total,

            date: new Date().toISOString()

        };


        // Save order locally
        localStorage.setItem(
            "sacchiFlyierLastOrder",
            JSON.stringify(order)
        );


        // Empty cart
        cart = [];

        saveCart();

        updateCart();


        alert(
            `Order ${orderNumber} created successfully!`
        );


        window.location.href =
            "index.html";

    }


    // ==========================================
    // NEWSLETTER
    // ==========================================

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
                    )?.value.trim();

                if (!email) {

                    alert(
                        "Please enter your email."
                    );

                    return;
                }

                alert(
                    "Thank you for joining Sacchi Flyier!"
                );

                newsletterForm.reset();

            }
        );

    }


    // ==========================================
    // CONTACT FORM
    // ==========================================

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                alert(
                    "Thank you for contacting Sacchi Flyier. We will get back to you soon."
                );

                contactForm.reset();

            }
        );

    }


    // ==========================================
    // 3D PRODUCT CARD EFFECT
    // ==========================================

    document
        .querySelectorAll(".product-card")
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX - rect.left;

                    const y =
                        event.clientY - rect.top;

                    const centerX =
                        rect.width / 2;

                    const centerY =
                        rect.height / 2;

                    const rotateX =
                        ((y - centerY) / centerY) * -5;

                    const rotateY =
                        ((x - centerX) / centerX) * 5;

                    card.style.transform =
                        `perspective(1000px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-8px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

                }
            );

        });


    // ==========================================
    // SMOOTH SCROLL
    // ==========================================

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetID =
                        link.getAttribute("href");

                    if (
                        !targetID ||
                        targetID === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(targetID);

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        });


    // ==========================================
    // ESC KEY
    // ==========================================

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                if (searchOverlay) {
                    searchOverlay.classList.remove("active");
                }

                if (cartPanel) {
                    cartPanel.classList.remove("active");
                }

            }

        }
    );


    // ==========================================
    // SECURITY HELPER
    // ==========================================

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    // ==========================================
    // START
    // ==========================================

    updateCart();

});
