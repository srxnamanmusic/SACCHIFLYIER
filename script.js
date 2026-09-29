document.addEventListener("DOMContentLoaded", function () {

    // ================= MENU =================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }


    // ================= CART =================

    const cartButton = document.getElementById("cartButton");
    const cartPanel = document.getElementById("cartPanel");
    const closeCart = document.getElementById("closeCart");

    if (cartButton && cartPanel) {
        cartButton.addEventListener("click", function () {
            cartPanel.classList.add("active");
            cartPanel.setAttribute("aria-hidden", "false");
        });
    }

    if (closeCart && cartPanel) {
        closeCart.addEventListener("click", function () {
            cartPanel.classList.remove("active");
            cartPanel.setAttribute("aria-hidden", "true");
        });
    }


    // ================= SEARCH =================

    const searchButton = document.getElementById("searchButton");
    const searchOverlay = document.getElementById("searchOverlay");
    const closeSearch = document.getElementById("closeSearch");
    const searchInput = document.getElementById("searchInput");

    if (searchButton && searchOverlay) {
        searchButton.addEventListener("click", function () {
            searchOverlay.classList.add("active");

            if (searchInput) {
                searchInput.focus();
            }
        });
    }

    if (closeSearch && searchOverlay) {
        closeSearch.addEventListener("click", function () {
            searchOverlay.classList.remove("active");
        });
    }


    // ================= CART PRODUCT BUTTONS =================

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    let cart = [];

    const addCartButtons = document.querySelectorAll(".add-cart");

    addCartButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const product = {
                name: button.dataset.product || "Product",
                sku: button.dataset.sku || "",
                price: parseFloat(button.dataset.price) || 0
            };

            cart.push(product);

            updateCart();

            if (cartPanel) {
                cartPanel.classList.add("active");
                cartPanel.setAttribute("aria-hidden", "false");
            }
        });

    });


    function updateCart() {

        if (!cartItems) return;

        if (cart.length === 0) {

            cartItems.innerHTML = "<p>Your cart is empty.</p>";

            if (cartCount) {
                cartCount.textContent = "0";
            }

            if (cartTotal) {
                cartTotal.textContent = "$0.00";
            }

            return;
        }

        cartItems.innerHTML = "";

        let total = 0;

        cart.forEach(function (item, index) {

            total += item.price;

            const itemElement = document.createElement("div");

            itemElement.className = "cart-item";

            itemElement.innerHTML = `
                <p><strong>${item.name}</strong></p>
                <p>SKU: ${item.sku}</p>
                <p>$${item.price.toFixed(2)}</p>
                <button type="button" data-index="${index}">
                    Remove
                </button>
                <hr>
            `;

            cartItems.appendChild(itemElement);
        });


        if (cartCount) {
            cartCount.textContent = cart.length;
        }

        if (cartTotal) {
            cartTotal.textContent = "$" + total.toFixed(2);
        }


        cartItems.querySelectorAll("button").forEach(function (button) {

            button.addEventListener("click", function () {

                const index = parseInt(button.dataset.index);

                cart.splice(index, 1);

                updateCart();
            });

        });

    }


    // ================= CHECKOUT =================

    const checkoutButton = document.getElementById("checkoutButton");

    if (checkoutButton) {

        checkoutButton.addEventListener("click", function () {

            if (cart.length === 0) {
                alert("Your cart is empty.");
                return;
            }

            alert("Checkout system will be connected soon.");
        });

    }


    // ================= NEWSLETTER =================

    const newsletterForm = document.getElementById("newsletterForm");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = document.getElementById("newsletterEmail");

            if (!email || !email.value) {
                return;
            }

            alert("Thank you for subscribing to Sacchi Flyier!");

            newsletterForm.reset();
        });

    }


    // ================= CONTACT FORM =================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Thank you! Your message has been received.");

            contactForm.reset();
        });

    }

});
