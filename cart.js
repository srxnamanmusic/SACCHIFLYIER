/* =====================================================
   SACCHI FLYIER — CART SYSTEM
   Version: 1.1
   Internal currency: USD
   Delivery: Worldwide except India
===================================================== */

(() => {
  "use strict";

  const CART_KEY = "sacchiFlyierCart";
  const BUY_NOW_KEY = "sacchiFlyierBuyNow";
  const COUNTRY_KEY = "sacchiFlyierCountry";
  const CURRENCY_KEY = "sacchiFlyierCurrency";

  const DEFAULT_COUNTRY = "US";

  const COUNTRIES = {
    US: { name: "United States", currency: "USD", symbol: "$" },
    GB: { name: "United Kingdom", currency: "GBP", symbol: "£" },
    CA: { name: "Canada", currency: "CAD", symbol: "$" },
    AU: { name: "Australia", currency: "AUD", symbol: "$" },
    DE: { name: "Germany", currency: "EUR", symbol: "€" },
    FR: { name: "France", currency: "EUR", symbol: "€" },
    IT: { name: "Italy", currency: "EUR", symbol: "€" },
    ES: { name: "Spain", currency: "EUR", symbol: "€" },
    NL: { name: "Netherlands", currency: "EUR", symbol: "€" },
    JP: { name: "Japan", currency: "JPY", symbol: "¥" },
    CN: { name: "China", currency: "CNY", symbol: "¥" },
    SG: { name: "Singapore", currency: "SGD", symbol: "$" },
    NZ: { name: "New Zealand", currency: "NZD", symbol: "$" },
    CH: { name: "Switzerland", currency: "CHF", symbol: "CHF " },
    AE: { name: "United Arab Emirates", currency: "AED", symbol: "د.إ " },
    SA: { name: "Saudi Arabia", currency: "SAR", symbol: "﷼" },
    ZA: { name: "South Africa", currency: "ZAR", symbol: "R" },
    BR: { name: "Brazil", currency: "BRL", symbol: "R$" },
    MX: { name: "Mexico", currency: "MXN", symbol: "$" },
    KR: { name: "South Korea", currency: "KRW", symbol: "₩" }
  };

  function readJSON(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getCart() {
    const cart = readJSON(CART_KEY, []);
    return Array.isArray(cart) ? cart : [];
  }

  function saveCart(cart) {
    if (!Array.isArray(cart)) {
      throw new Error("Invalid cart data.");
    }

    writeJSON(CART_KEY, cart);

    window.dispatchEvent(new CustomEvent("sacchi:cart-updated", {
      detail: { cart }
    }));

    return cart;
  }

  function getCountry() {
    const code = localStorage.getItem(COUNTRY_KEY) || DEFAULT_COUNTRY;

    if (code === "IN" || !COUNTRIES[code]) {
      return DEFAULT_COUNTRY;
    }

    return code;
  }

  function setCountry(code) {
    code = String(code || "").toUpperCase();

    if (code === "IN" || !COUNTRIES[code]) {
      throw new Error("Delivery is not available for this country.");
    }

    localStorage.setItem(COUNTRY_KEY, code);
    localStorage.setItem(CURRENCY_KEY, COUNTRIES[code].currency);

    window.dispatchEvent(new CustomEvent("sacchi:country-updated", {
      detail: {
        country: code,
        currency: COUNTRIES[code].currency
      }
    }));

    return COUNTRIES[code];
  }

  function getCurrency() {
    return COUNTRIES[getCountry()].currency;
  }

  function getProductPrice(product) {
    const price = Number(product.unitPriceUSD);

    if (!Number.isFinite(price) || price < 0) {
      throw new Error("Invalid product price.");
    }

    return price;
  }

  function normalizeProduct(product) {
    if (!product || !product.id || !product.name) {
      throw new Error("Product information is incomplete.");
    }

    return {
      id: String(product.id),
      name: String(product.name),
      sku: String(product.sku || ""),
      image: String(product.image || ""),
      unitPriceUSD: getProductPrice(product),
      quantity: Math.min(
        99,
        Math.max(1, Math.floor(Number(product.quantity) || 1))
      )
    };
  }

  // ADD TO CART → SAVE PRODUCT → CHECKOUT
  function add(product) {
    const item = normalizeProduct(product);
    const cart = getCart();
    const existing = cart.find(p => p.id === item.id);

    if (existing) {
      existing.quantity = Math.min(99, existing.quantity + item.quantity);
    } else {
      cart.push(item);
    }

    saveCart(cart);

    // Remove Buy Now mode so checkout uses the complete cart.
    clearBuyNow();

    window.location.href = "/checkout.html";

    return cart;
  }

  // BUY NOW → CHECKOUT WITH ONLY THIS PRODUCT
  function buyNow(product) {
    const item = normalizeProduct(product);

    writeJSON(BUY_NOW_KEY, [item]);

    window.location.href = "/checkout.html?mode=buy-now";
  }

  function getBuyNow() {
    const items = readJSON(BUY_NOW_KEY, []);
    return Array.isArray(items) ? items : [];
  }

  function getCheckoutItems() {
    const params = new URLSearchParams(window.location.search);

    if (params.get("mode") === "buy-now") {
      return getBuyNow();
    }

    return getCart();
  }

  function updateQuantity(id, quantity) {
    const cart = getCart();
    const item = cart.find(p => p.id === String(id));

    if (!item) return cart;

    const newQuantity = Math.floor(Number(quantity));

    if (!Number.isFinite(newQuantity) || newQuantity < 1) {
      return remove(id);
    }

    item.quantity = Math.min(newQuantity, 99);
    return saveCart(cart);
  }

  function remove(id) {
    const cart = getCart().filter(p => p.id !== String(id));
    return saveCart(cart);
  }

  function clearCart() {
    localStorage.removeItem(CART_KEY);
    saveCart([]);
  }

  function clearBuyNow() {
    localStorage.removeItem(BUY_NOW_KEY);
  }

  function getSubtotalUSD(items = getCart()) {
    return items.reduce((total, item) => {
      return total + getProductPrice(item) * item.quantity;
    }, 0);
  }

  function getTotalQuantity(items = getCart()) {
    return items.reduce((total, item) => total + item.quantity, 0);
  }

  function formatUSD(amount) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(Number(amount) || 0);
  }

  window.SacchiCart = Object.freeze({
    CART_KEY,
    BUY_NOW_KEY,
    COUNTRY_KEY,
    COUNTRIES,
    getCart,
    saveCart,
    add,
    buyNow,
    getBuyNow,
    getCheckoutItems,
    updateQuantity,
    remove,
    clearCart,
    clearBuyNow,
    getCountry,
    setCountry,
    getCurrency,
    getSubtotalUSD,
    getTotalQuantity,
    formatUSD
  });

})();
