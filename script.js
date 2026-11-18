
/* SACCHI FLYIER — MAIN WEBSITE SCRIPT */

(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const cartAPI = window.SacchiCart;

    // Update copyright year.
    document.querySelectorAll("[data-current-year]").forEach((element) => {
      element.textContent = new Date().getFullYear();
    });

    // Update cart quantity indicators.
    function updateCartCount() {
      if (!cartAPI) return;

      const count = cartAPI.getTotalQuantity();

      document.querySelectorAll("[data-cart-count]").forEach((element) => {
        element.textContent = String(count);
        element.hidden = count === 0;
      });
    }

    updateCartCount();

    window.addEventListener("sacchi:cart-updated", updateCartCount);

    // Product buttons use data-product-id, data-product-name,
    // data-product-price and optional data-product-image / data-product-sku.
    function getProductFromButton(button) {
      return {
        id: button.dataset.productId,
        name: button.dataset.productName,
        sku: button.dataset.productSku || "",
        image: button.dataset.productImage || "",
        unitPriceUSD: Number(button.dataset.productPrice),
        quantity: 1
      };
    }

    document.querySelectorAll("[data-add-to-cart]").forEach((button) => {
      button.addEventListener("click", () => {
        if (!cartAPI) {
          alert("The shopping cart is currently unavailable.");
          return;
        }

        try {
          cartAPI.add(getProductFromButton(button));

          const originalText = button.textContent;
          button.textContent = "ADDED TO CART";
          button.disabled = true;

          window.setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
          }, 1200);
        } catch (error) {
          console.error("Add to cart error:", error);
          alert("Could not add this product. Please try again.");
        }
      });
    });

    document.querySelectorAll("[data-buy-now]").forEach((button) => {
      button.addEventListener("click", () => {
        if (!cartAPI) {
          alert("Checkout is currently unavailable.");
          return;
        }

        try {
          cartAPI.buyNow(getProductFromButton(button));
        } catch (error) {
          console.error("Buy now error:", error);
          alert("Could not continue to checkout. Please try again.");
        }
      });
    });

    // Optional mobile menu.
    const menuButton = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-mobile-menu]");

    if (menuButton && menu) {
      menuButton.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
      });
    }

    // Register one service worker.
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .catch((error) => {
            console.error("Service worker registration failed:", error);
          });
      });
    }
  });
})();
