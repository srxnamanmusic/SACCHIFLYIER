// ==========================================
// SACCHI FLYIER - MAIN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------------------
    // ELEMENTS
    // ------------------------------------------

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    const searchButton = document.getElementById("searchButton");
    const searchOverlay = document.getElementById("searchOverlay");
    const closeSearch = document.getElementById("closeSearch");
    const searchInput = document.getElementById("searchInput");

    const cartButton = document.getElementById("cartButton");
    const cartPanel = document.getElementById("cartPanel");
    const closeCart = document.getElementById("closeCart");

    const cartItemsContainer = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    const checkoutButton = document.getElementById("checkoutButton");

    const newsletterForm = document.getElementById("newsletterForm");
    const newsletterEmail = document.getElementById("newsletterEmail");

    const contactForm = document.getElementById("contactForm");


    // ------------------------------------------
    // MOBILE MENU
    // ------------------------------------------

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        // Close menu after clicking a navigation link
        const links = navLinks.querySelectorAll("a");

        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }


    // ------------------------------------------
    // SEARCH OVERLAY
    // ------------------------------------------

    if (searchButton && searchOverlay) {

        searchButton.addEventListener("click", () => {
            searchOverlay.classList.add("active");

            setTimeout(() => {
                if (searchInput) {
                    searchInput.focus();
                }
            }, 200);
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


    // Close search when clicking outside the search box
    if (searchOverlay) {

        searchOverlay.addEventListener("click", (event) => {

            if (event.target === searchOverlay) {
                searchOverlay.classList.remove("active");

                if (searchInput) {
                    searchInput.value = "";
                }
            }

        });
    }


    // ------------------------------------------
    // SEARCH
    // ------------------------------------------

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const searchValue = searchInput.value.toLowerCase().trim();

            const products = document.querySelectorAll(".product-card");

            products.forEach(product => {

                const productText =
                    product.textContent.toLowerCase();

                if (productText.includes(searchValue)) {
                    product.style.display = "";
                } else {
                    product.style.display = "none";
                }

            });

        });
    }


    // ------------------------------------------
    // SHOPPING CART
    // ------------------------------------------

    let cart = [];


    function updateCart() {

        if (!cartItemsContainer) return;

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

                total += item.price;

                const cartItem = document.createElement("div");

                cartItem.className = "cart-item";

                cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <strong>${item.name}</strong>
                        <span>₹${item.price.toFixed(2)}</span>
                    </div>

                    <button 
                        class="remove-cart-item"
                        data-index="${index}">
                        ×
                    </button>
                `;

                cartItemsContainer.appendChild(cartItem);

            });

        }


        // Update cart count
        if (cartCount) {
            cartCount.textContent = cart.length;
        }


        // Update total
        if (cartTotal) {
            cartTotal.textContent = `₹${total.toFixed(2)}`;
        }


        // Remove buttons
        const removeButtons =
            document.querySelectorAll(".remove-cart-item");

        removeButtons.forEach(button => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);

                cart.splice(index, 1);

                updateCart();

            });

        });

    }


    // ------------------------------------------
    // ADD TO CART
    // ------------------------------------------

    const addCartButtons =
        document.querySelectorAll(".add-cart");

    addCartButtons.forEach(button => {

        button.addEventListener("click", () => {

            const productName =
                button.dataset.product ||
                "Product";

            // Try to find price from product card
            const productCard =
                button.closest(".product-card");

            let price = 0;

            if (productCard) {

                const priceElement =
                    productCard.querySelector(".price");

                if (priceElement) {

                    const priceText =
                        priceElement.textContent
                            .replace(/[^\d.]/g, "");

                    price =
                        parseFloat(priceText) || 0;
                }

            }


            cart.push({
                name: productName,
                price: price
            });


            updateCart();


            // Open cart
            if (cartPanel) {
                cartPanel.classList.add("active");
            }


            // Small button feedback
            const originalText =
                button.textContent;

            button.textContent = "Added ✓";

            setTimeout(() => {
                button.textContent = originalText;
            }, 1200);

        });

    });


    // ------------------------------------------
    // OPEN CART
    // ------------------------------------------

    if (cartButton && cartPanel) {

        cartButton.addEventListener("click", () => {
            cartPanel.classList.add("active");
        });

    }


    // ------------------------------------------
    // CLOSE CART
    // ------------------------------------------

    if (closeCart && cartPanel) {

        closeCart.addEventListener("click", () => {
            cartPanel.classList.remove("active");
        });

    }


    // ------------------------------------------
    // CHECKOUT
    // ------------------------------------------

    if (checkoutButton) {

        checkoutButton.addEventListener("click", () => {

            if (cart.length === 0) {

                alert("Your cart is empty.");

                return;
            }


            alert(
                "Checkout will be available soon. Thank you for shopping with Sacchi Flyier!"
            );

        });

    }


    // ------------------------------------------
    // NEWSLETTER
    // ------------------------------------------

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const email =
                newsletterEmail
                    ? newsletterEmail.value.trim()
                    : "";


            if (!email) {

                alert("Please enter your email.");

                return;
            }


            if (!email.includes("@")) {

                alert("Please enter a valid email address.");

                return;
            }


            alert(
                "Thank you for joining Sacchi Flyier!"
            );


            newsletterForm.reset();

        });

    }


    // ------------------------------------------
    // CONTACT FORM
    // ------------------------------------------

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();


            alert(
                "Thank you for contacting Sacchi Flyier. We will get back to you soon."
            );


            contactForm.reset();

        });

    }


    // ------------------------------------------
    // 3D MOUSE EFFECT
    // ------------------------------------------

    const productCards =
        document.querySelectorAll(".product-card");


    productCards.forEach(card => {

        card.addEventListener("mousemove", (event) => {

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

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

        });

    });


    // ------------------------------------------
    // SMOOTH SCROLL
    // ------------------------------------------

    const anchorLinks =
        document.querySelectorAll('a[href^="#"]');


    anchorLinks.forEach(link => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ------------------------------------------
    // SCROLL REVEAL
    // ------------------------------------------

    const revealElements =
        document.querySelectorAll(
            ".section-title, .product-card, .category-card, .story-content, .about-content"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    // ------------------------------------------
    // ESC KEY
    // ------------------------------------------

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (searchOverlay) {
                searchOverlay.classList.remove("active");
            }

            if (cartPanel) {
                cartPanel.classList.remove("active");
            }

        }

    });


    // ------------------------------------------
    // INITIAL CART
    // ------------------------------------------

    updateCart();


    console.log(
        "Sacchi Flyier website loaded successfully."
    );

});
