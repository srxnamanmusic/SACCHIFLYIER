
/* SACCHI FLYIER — CHECKOUT SYSTEM
   Front-end validation only.
   This file does NOT process payments or submit real orders.
*/

(() => {
  "use strict";

  const cartAPI = window.SacchiCart;

  const form = document.getElementById("checkout-form");
  const countrySelect = document.getElementById("country");
  const itemsContainer = document.getElementById("checkout-items");
  const quantityElement = document.getElementById("checkout-quantity");
  const subtotalElement = document.getElementById("checkout-subtotal");
  const shippingElement = document.getElementById("checkout-shipping");
  const totalElement = document.getElementById("checkout-total");
  const messageElement = document.getElementById("checkout-message");
  const submitButton = document.getElementById("place-order-button");

  if (!cartAPI || !form) {
    console.error("Sacchi Flyier checkout could not initialize.");
    return;
  }

  let checkoutItems = [];

  function formatMoney(amount) {
    return cartAPI.formatUSD(amount);
  }

  function showMessage(message, type = "info") {
    if (!messageElement) return;

    messageElement.textContent = message;
    messageElement.className = `checkout-message show ${type}`;
    messageElement.setAttribute("role", "alert");
  }

  function clearMessage() {
    if (!messageElement) return;

    messageElement.textContent = "";
    messageElement.className = "checkout-message";
  }

  function populateCountries() {
    if (!countrySelect) return;

    const countries = cartAPI.COUNTRIES;
    const currentCountry = cartAPI.getCountry();

    countrySelect.innerHTML = '<option value="">Select your country</option>';

    Object.entries(countries)
      .sort((a, b) => a[1].name.localeCompare(b[1].name))
      .forEach(([code, country]) => {
        if (code === "IN") return;

        const option = document.createElement("option");
        option.value = code;
        option.textContent = country.name;
        countrySelect.appendChild(option);
      });

    if (countries[currentCountry]) {
      countrySelect.value = currentCountry;
    }
  }

  function getItemPrice(item) {
    const price = Number(item.unitPriceUSD);

    if (!Number.isFinite(price) || price < 0) {
      throw new Error("A product has an invalid price.");
    }

    return price;
  }

  function renderItems() {
    checkoutItems = cartAPI.getCheckoutItems();

    if (!Array.isArray(checkoutItems) || checkoutItems.length === 0) {
      if (itemsContainer) {
        itemsContainer.textContent = "Your checkout is empty.";
      }

      if (quantityElement) quantityElement.textContent = "0";
      if (subtotalElement) subtotalElement.textContent = formatMoney(0);
      if (shippingElement) shippingElement.textContent = "Not calculated";
      if (totalElement) totalElement.textContent = "Not calculated";

      if (submitButton) submitButton.disabled = true;

      showMessage("Your cart is empty. Add a product before checkout.", "error");
      return;
    }

    if (itemsContainer) {
      itemsContainer.replaceChildren();

      checkoutItems.forEach((item) => {
        const article = document.createElement("article");
        article.className = "checkout-item";

        if (item.image) {
          const image = document.createElement("img");
          image.src = item.image;
          image.alt = item.name || "Product";
          image.loading = "lazy";

          image.addEventListener("error", () => {
            image.style.display = "none";
          });

          article.appendChild(image);
        }

        const details = document.createElement("div");
        details.className = "checkout-item-details";

        const name = document.createElement("h3");
        name.textContent = item.name || "Product";

        const quantity = document.createElement("p");
        quantity.textContent = `Quantity: ${item.quantity}`;

        details.append(name, quantity);

        const price = document.createElement("div");
        price.className = "checkout-item-price";
        price.textContent = formatMoney(
          getItemPrice(item) * Number(item.quantity)
        );

        article.append(details, price);
        itemsContainer.appendChild(article);
      });
    }

    const subtotal = cartAPI.getSubtotalUSD(checkoutItems);
    const totalQuantity = cartAPI.getTotalQuantity(checkoutItems);

    if (quantityElement) {
      quantityElement.textContent = String(totalQuantity);
    }

    if (subtotalElement) {
      subtotalElement.textContent = formatMoney(subtotal);
    }

    // Shipping has not been checked with the supplier.
    // Therefore, do not show a guessed shipping price or final total.
    if (shippingElement) {
      shippingElement.textContent = "Pending availability check";
    }

    if (totalElement) {
      totalElement.textContent = "Pending shipping calculation";
    }

    if (submitButton) submitButton.disabled = false;
  }

  function validateCountry() {
    if (!countrySelect) {
      showMessage("The country field could not be found.", "error");
      return false;
    }

    const countryCode = countrySelect.value;

    if (!countryCode) {
      showMessage("Please select your delivery country.", "error");
      countrySelect.focus();
      return false;
    }

    if (countryCode === "IN" || !cartAPI.COUNTRIES[countryCode]) {
      showMessage("Delivery to this country is not enabled.", "error");
      countrySelect.focus();
      return false;
    }

    try {
      cartAPI.setCountry(countryCode);
      return true;
    } catch (error) {
      showMessage(error.message, "error");
      return false;
    }
  }

  function validateCheckoutItems() {
    if (!Array.isArray(checkoutItems) || checkoutItems.length === 0) {
      showMessage("Your checkout is empty.", "error");
      return false;
    }

    try {
      checkoutItems.forEach((item) => {
        if (!item.id || !item.name || !Number.isInteger(Number(item.quantity)) ||
            Number(item.quantity) < 1 || Number(item.quantity) > 99) {
          throw new Error("A product in your checkout has invalid information.");
        }

        getItemPrice(item);
      });
    } catch (error) {
      showMessage(error.message, "error");
      return false;
    }

    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();
    clearMessage();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!validateCountry()) return;
    if (!validateCheckoutItems()) return;

    const subtotal = cartAPI.getSubtotalUSD(checkoutItems);

    if (!Number.isFinite(subtotal) || subtotal <= 0) {
      showMessage("The order subtotal is invalid.", "error");
      return;
    }

    /*
      IMPORTANT:
      This is only a front-end checkout validation.
      No customer details are sent or saved.
      No order is created.
      No payment is collected.
    */

    showMessage(
      "Your checkout details passed the browser validation. This is a test only: shipping availability and cost still need to be confirmed, and payment processing is not connected. No order has been placed.",
      "success"
    );
  }

  if (countrySelect) {
    countrySelect.addEventListener("change", () => {
      clearMessage();

      const code = countrySelect.value;

      if (!code) return;

      try {
        cartAPI.setCountry(code);
      } catch (error) {
        showMessage(error.message, "error");
        countrySelect.value = "";
      }
    });
  }

  form.addEventListener("submit", handleSubmit);

  populateCountries();
  renderItems();

  window.addEventListener("sacchi:cart-updated", renderItems);
})();
