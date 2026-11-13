
/* ==========================================
   SACCHI FLYIER — MAIN WEBSITE JAVASCRIPT
   Cart and checkout prototype
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const CART_KEY = "sacchiFlyierCart";

    // ------------------------------------------
    // ELEMENTS
    // ------------------------------------------

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    const cartButton = document.getElementById("cartButton");
    const cartPanel = document.getElementById("cartPanel");
    const closeCart = document.getElementById("closeCart");
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    const checkoutButton = document.getElementById("checkoutButton");

    const searchButton = document.getElementById("searchButton");
    const searchOverlay = document.getElementById("searchOverlay");
    const closeSearch = document.getElementById("closeSearch");
    const searchInput = document.getElementById("searchInput");

    // ------------------------------------------
    // CART STORAGE
    // ------------------------------------------

    function loadCart() {
        try {
            const savedCart = localStorage.getItem(CART_KEY);
            const parsedCart = savedCart ? JSON.parse(savedCart) : [];

            return Array.isArray(parsedCart) ? parsedCart : [];
        } catch (error) {
            console.error("Could not load cart:", error);
            return [];
        }
    }

    let cart = loadCart();

    function saveCart() {
        try {
            localStorage.setItem(CART_KEY, JSON.stringify(cart));
        } catch (error) {
            console.error("Could not save cart:", error);
            alert("Your browser could not save the cart.");
        }
    }

    function money(amount, currency = "USD") {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency
        }).format(amount);
    }

    // ------------------------------------------
    // CART TOTALS
    // ------------------------------------------

    function getCartQuantity() {
        return cart.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
    }

    function getCartTotal() {
        return cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    // ------------------------------------------
    // RENDER CART
    // ------------------------------------------

    function renderCart() {
        if (!cartItems) return;

        cartItems.replaceChildren();

        if (cart.length === 0) {
            const emptyMessage = document.createElement("p");
            emptyMessage.textContent = "Your cart is empty.";
            cartItems.appendChild(emptyMessage);
        }

        cart.forEach((item, index) => {
            const itemBox = document.createElement("div");
            itemBox.className = "cart-item";

            const name = document.createElement("h3");
            name.textContent = item.name;

            const price = document.createElement("p");
            price.textContent = money(item.price * item.quantity, item.currency);

            const quantity = document.createElement("p");
            quantity.textContent = `Quantity: ${item.quantity}`;

            const decrease = document.createElement("button");
            decrease.type = "button";
            decrease.textContent = "−";
            decrease.setAttribute("aria-label", `Decrease ${item.name} quantity`);
            decrease.addEventListener("click", () => changeQuantity(index, -1));

            const increase = document.createElement("button");
            increase.type = "button";
            increase.textContent = "+";
            increase.setAttribute("aria-label", `Increase ${item.name} quantity`);
            increase.addEventListener("click", () => changeQuantity(index, 1));

            const remove = document.createElement("button");
            remove.type = "button";
            remove.textContent = "Remove";
            remove.addEventListener("click", () => removeItem(index));

            itemBox.append(name, price, quantity, decrease, increase, remove);
            cartItems.appendChild(itemBox);
        });

        if (cartCount) {
            cartCount.textContent = getCartQuantity();
        }

        if (cartTotal) {
            cartTotal.textContent = money(getCartTotal(), "USD");
        }

        if (checkoutButton) {
            checkoutButton.disabled = cart.length === 0;
        }
    }

    // ------------------------------------------
    // ADD PRODUCT TO CART
    // Product pages can use data attributes:
    // data-add-to-cart
    // data-product-id
    // data-product-name
    // data-product-price
    // ------------------------------------------

    function addToCart(product) {
        const existing = cart.find(item => item.id === product.id);

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        saveCart();
        renderCart();
        openCartPanel();
    }

    document.addEventListener("click", event => {
        const button = event.target.closest("[data-add-to-cart]");

        if (!button) return;

        const id = button.dataset.productId;
        const name = button.dataset.productName;
        const price = Number(button.dataset.productPrice);
        const currency = button.dataset.productCurrency || "USD";

        if (!id || !name || !Number.isFinite(price) || price <= 0) {
            alert("Product information is incomplete. Please check the product page.");
            return;
        }

        addToCart({
            id,
            name,
            price,
            currency
        });
    });

    // ------------------------------------------
    // CHANGE QUANTITY
    // ------------------------------------------

    function changeQuantity(index, amount) {
        if (!cart[index]) return;

        cart[index].quantity += amount;

        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }

        saveCart();
        renderCart();
    }

    // ------------------------------------------
    // REMOVE PRODUCT
    // ------------------------------------------

    function removeItem(index) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    }

    // ------------------------------------------
    // CART PANEL
    // ------------------------------------------

    function openCartPanel() {
        if (!cartPanel) return;

        cartPanel.classList.add("active");
        cartPanel.setAttribute("aria-hidden", "false");
    }

    function closeCartPanel() {
        if (!cartPanel) return;

        cartPanel.classList.remove("active");
        cartPanel.setAttribute("aria-hidden", "true");
    }

    if (cartButton) {
        cartButton.addEventListener("click", openCartPanel);
    }

    if (closeCart) {
        closeCart.addEventListener("click", closeCartPanel);
    }

    // ------------------------------------------
    // MOBILE NAVIGATION
    // ------------------------------------------

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // ------------------------------------------
    // SEARCH OVERLAY
    // ------------------------------------------

    function openSearch() {
        if (!searchOverlay) return;

        searchOverlay.classList.add("active");
        searchOverlay.setAttribute("aria-hidden", "false");

        if (searchInput) {
            searchInput.focus();
        }
    }

    function closeSearchOverlay() {
        if (!searchOverlay) return;

        searchOverlay.classList.remove("active");
        searchOverlay.setAttribute("aria-hidden", "true");

        if (searchInput) {
            searchInput.value = "";
            filterProducts("");
        }
    }

    if (searchButton) {
        searchButton.addEventListener("click", openSearch);
    }

    if (closeSearch) {
        closeSearch.addEventListener("click", closeSearchOverlay);
    }

    // ------------------------------------------
    // SEARCH PRODUCTS ON HOMEPAGE
    // ------------------------------------------

    function filterProducts(searchTerm) {
        const products = document.querySelectorAll(".product-card");
        const term = searchTerm.toLowerCase().trim();

        products.forEach(product => {
            const productText = product.textContent.toLowerCase();
            product.style.display = productText.includes(term) ? "" : "none";
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            filterProducts(searchInput.value);
        });
    }

    // ------------------------------------------
    // CHECKOUT NAVIGATION
    // ------------------------------------------

    if (checkoutButton) {
        checkoutButton.addEventListener("click", () => {
            if (cart.length === 0) {
                alert("Your cart is empty.");
                return;
            }

            window.location.href = "checkout.html";
        });
    }

    // ------------------------------------------
    // NEWSLETTER FORM
    // No mailing service is connected yet.
    // ------------------------------------------

    const newsletterForm = document.getElementById("newsletterForm");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", event => {
            event.preventDefault();

            alert(
                "Thank you for your interest! Newsletter subscriptions are not connected yet."
            );

            newsletterForm.reset();
        });
    }

    // ------------------------------------------
    // CONTACT FORM
    // No email service is connected yet.
    // ------------------------------------------

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            alert(
                "Your message has not been sent. The contact form needs a secure form service before it can deliver messages."
            );
        });
    }

    // ------------------------------------------
    // KEYBOARD SUPPORT
    // ------------------------------------------

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeCartPanel();
            closeSearchOverlay();
        }
    });

    // ------------------------------------------
    // INITIALIZE
    // ------------------------------------------

    renderCart();

});
