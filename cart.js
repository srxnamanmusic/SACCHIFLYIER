
/* =========================================
   SACCHI FLYIER — UNIVERSAL CART
   Shared cart system for all product pages
========================================= */

(function () {
  "use strict";

  const CART_KEY = "sacchiFlyierCart";
  const BUY_NOW_KEY = "sacchiFlyierBuyNow";

  function read(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error("Cart storage error:", error);
      return null;
    }
  }

  function getCart() {
    const value = read(CART_KEY);
    return Array.isArray(value) ? value : [];
  }

  function saveCart(items) {
    if (!Array.isArray(items)) {
      throw new TypeError("Cart must be an array.");
    }

    localStorage.setItem(CART_KEY, JSON.stringify(items));

    window.dispatchEvent(
      new CustomEvent("sacchi:cart-updated", {
        detail: { cart: items }
      })
    );

    return items;
  }

  function normalize(item) {
    if (!item || typeof item !== "object") {
      throw new Error("Product information is missing.");
    }

    const id = String(item.id || item.sku || "").trim();
    const price = Number(item.unitPriceUSD ?? item.price);
    const quantity = Math.max(
      1,
      Math.floor(Number(item.quantity) || 1)
    );

    if (!id) {
      throw new Error("Product ID is missing.");
    }

    if (!Number.isFinite(price) || price < 0) {
      throw new Error("Product USD price is invalid.");
    }

    return {
      id,
      sku: String(item.sku || ""),
      name: String(item.name || "Sacchi Flyier Product"),
      image: String(item.image || ""),
      quantity,
      country: String(item.country || ""),
      currency: String(item.currency || "USD"),
      unitPriceUSD: Number(price.toFixed(2)),
      unitPriceLocal: Number(
        (Number(item.unitPriceLocal ?? price) || 0).toFixed(2)
      ),
      color: String(item.color || ""),
      size: String(item.size || ""),
      variant: String(item.variant || "")
    };
  }

  function variantKey(item) {
    return [
      item.id,
      item.country,
      item.color,
      item.size,
      item.variant
    ].join("|");
  }

  function add(item) {
    const product = normalize(item);
    const cart = getCart();

    const existing = cart.find(
      entry => variantKey(entry) === variantKey(product)
    );

    if (existing) {
      existing.quantity += product.quantity;
    } else {
      cart.push(product);
    }

    saveCart(cart);
    return cart;
  }

  function buyNow(item) {
    const product = normalize(item);

    localStorage.setItem(
      BUY_NOW_KEY,
      JSON.stringify([product])
    );

    window.location.href = "checkout.html?mode=buy-now";
  }

  function updateQuantity(index, quantity) {
    const cart = getCart();

    if (!cart[index]) return cart;

    const next = Math.floor(Number(quantity));

    if (!Number.isFinite(next) || next < 1) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity = next;
    }

    return saveCart(cart);
  }

  function remove(index) {
    const cart = getCart();

    if (
      Number.isInteger(index) &&
      index >= 0 &&
      index < cart.length
    ) {
      cart.splice(index, 1);
    }

    return saveCart(cart);
  }

  function clearCart() {
    localStorage.removeItem(CART_KEY);
    return saveCart([]);
  }

  function clearBuyNow() {
    localStorage.removeItem(BUY_NOW_KEY);
  }

  function getCheckoutItems() {
    const buyNow = read(BUY_NOW_KEY);

    if (Array.isArray(buyNow) && buyNow.length) {
      return buyNow;
    }

    return getCart();
  }

  function getTotalUSD(items) {
    const list = Array.isArray(items) ? items : getCart();

    return list.reduce((sum, item) => {
      const price = Number(
        item.unitPriceUSD ?? item.price ?? 0
      );

      const quantity = Math.max(
        1,
        Number(item.quantity) || 1
      );

      return sum + price * quantity;
    }, 0);
  }

  window.SacchiCart = {
    CART_KEY,
    BUY_NOW_KEY,
    getCart,
    saveCart,
    add,
    buyNow,
    updateQuantity,
    remove,
    clearCart,
    clearBuyNow,
    getCheckoutItems,
    getTotalUSD
  };

})();
