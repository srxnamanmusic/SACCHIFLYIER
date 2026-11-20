/* SACCHI FLYIER — MAIN WEBSITE SCRIPT */
(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const cartAPI = window.SacchiCart;
    const cartPanel = document.getElementById("cartPanel");
    const cartButton = document.getElementById("cartButton");
    const closeCartButton = document.getElementById("closeCart");
    const cartItemsElement = document.getElementById("cartItems");
    const cartTotalElement = document.getElementById("cartTotal");
    const cartCountElement = document.getElementById("cartCount");
    const checkoutButton = document.getElementById("checkoutButton");
    const searchOverlay = document.getElementById("searchOverlay");
    const searchButton = document.getElementById("searchButton");
    const closeSearchButton = document.getElementById("closeSearch");
    const searchInput = document.getElementById("searchInput");
    const menuButton = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    document.querySelectorAll("[data-current-year]").forEach((el) => {
      el.textContent = String(new Date().getFullYear());
    });

    function openCart() {
      if (!cartPanel) return;
      cartPanel.classList.add("active");
      cartPanel.setAttribute("aria-hidden", "false");
      renderCart();
    }
    function closeCart() {
      if (!cartPanel) return;
      cartPanel.classList.remove("active");
      cartPanel.setAttribute("aria-hidden", "true");
    }

    function renderCart() {
      if (!cartAPI || !cartItemsElement || !cartTotalElement) return;
      const items = cartAPI.getCart();
      const count = cartAPI.getTotalQuantity(items);
      if (cartCountElement) {
        cartCountElement.textContent = String(count);
        cartCountElement.hidden = count === 0;
      }
      cartItemsElement.replaceChildren();

      if (!items.length) {
        const empty = document.createElement("p");
        empty.textContent = "Your cart is empty.";
        cartItemsElement.appendChild(empty);
        cartTotalElement.textContent = cartAPI.formatMoney(0, "USD");
        if (checkoutButton) checkoutButton.disabled = true;
        return;
      }

      const countries = [...new Set(items.map(item => item.country).filter(Boolean))];
      const currencies = [...new Set(items.map(item => item.currency).filter(Boolean))];
      const oneDestination = countries.length === 1;
      const oneCurrency = currencies.length === 1;
      items.forEach((item, index) => {
        const row = document.createElement("div");
        row.className = "cart-item";
        const name = document.createElement("strong");
        name.textContent = item.name || "Product";
        const details = document.createElement("p");
        const currency = item.currency || "USD";
        const amount = Number(item.unitPriceLocal);
        const price = Number.isFinite(amount)
          ? cartAPI.formatMoney(amount, currency)
          : cartAPI.formatMoney(Number(item.unitPriceUSD) || 0, "USD");
        details.textContent = price + " × " + Number(item.quantity || 1) +
          (item.color ? " · " + item.color : "") +
          (item.model ? " · " + item.model : "");
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "cart-remove";
        remove.textContent = "Remove";
        remove.setAttribute("aria-label", "Remove " + (item.name || "product"));
        remove.addEventListener("click", () => {
          const current = cartAPI.getCart();
          current.splice(index, 1);
          cartAPI.saveCart(current);
          renderCart();
        });
        row.append(name, details, remove);
        cartItemsElement.appendChild(row);
      });

      if (!oneDestination) {
        cartTotalElement.textContent = "Multiple destinations";
        const note = document.createElement("p");
        note.textContent = "Use one delivery country per checkout. Remove items for other destinations.";
        cartItemsElement.appendChild(note);
      } else if (!oneCurrency) {
        cartTotalElement.textContent = "Currency mismatch";
      } else {
        const currency = currencies[0] || "USD";
        const total = items.reduce((sum, item) =>
          sum + Number(item.unitPriceLocal ?? item.unitPriceUSD ?? 0) *
          Number(item.quantity || 1), 0);
        cartTotalElement.textContent = cartAPI.formatMoney(total, currency);
      }
      if (checkoutButton) checkoutButton.disabled = !oneDestination || !oneCurrency;
    }

    if (cartButton) cartButton.addEventListener("click", openCart);
    if (closeCartButton) closeCartButton.addEventListener("click", closeCart);
    if (cartPanel) {
      cartPanel.addEventListener("click", (event) => {
        if (event.target === cartPanel) closeCart();
      });
    }
    if (checkoutButton) {
      checkoutButton.addEventListener("click", () => {
        if (!cartAPI || !cartAPI.getCart().length) return;
        const items = cartAPI.getCart();
        if (new Set(items.map(item => item.country).filter(Boolean)).size !== 1) {
          alert("Please use one delivery country per checkout.");
          return;
        }
        window.location.href = "checkout.html";
      });
    }
    if (cartAPI) {
      renderCart();
      window.addEventListener("sacchi:cart-updated", renderCart);
      window.addEventListener("sacchi:country-updated", renderCart);
    }

    function openSearch() {
      if (!searchOverlay) return;
      searchOverlay.classList.add("active");
      searchOverlay.setAttribute("aria-hidden", "false");
      if (searchInput) searchInput.focus();
    }
    function closeSearch() {
      if (!searchOverlay) return;
      searchOverlay.classList.remove("active");
      searchOverlay.setAttribute("aria-hidden", "true");
      if (searchInput) searchInput.value = "";
      filterProducts("");
    }
    function filterProducts(query) {
      const q = String(query || "").trim().toLowerCase();
      document.querySelectorAll(".product-card").forEach(card => {
        card.hidden = Boolean(q) && !card.textContent.toLowerCase().includes(q);
      });
    }
    if (searchButton) searchButton.addEventListener("click", openSearch);
    if (closeSearchButton) closeSearchButton.addEventListener("click", closeSearch);
    if (searchInput) searchInput.addEventListener("input", () => filterProducts(searchInput.value));

    if (menuButton && navLinks) {
      menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      });
      navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          menuButton.setAttribute("aria-expanded", "false");
          menuButton.setAttribute("aria-label", "Open menu");
        });
      });
    }

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch(error => {
          console.error("Service worker registration failed:", error);
        });
      });
    }
  });
})();
