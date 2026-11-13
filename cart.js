
/* =========================================
   SACCHI FLYIER — UNIVERSAL CART
   Shared cart storage for all product pages
========================================= */

(function () {
    "use strict";

    const CART_KEY = "sacchiFlyierCart";
    const BUY_NOW_KEY = "sacchiFlyierBuyNow";

    function readStorage(key) {
        try {
            const value = JSON.parse(localStorage.getItem(key));
            return value;
        } catch {
            return null;
        }
    }

    function getCart() {
        const cart = readStorage(CART_KEY);
        return Array.isArray(cart) ? cart : [];
    }

    function saveCart(cart) {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
        window.dispatchEvent(new CustomEvent("sacchi:cart-updated", {
            detail: { cart }
        }));
    }

    function normalizeItem(item) {
        const quantity = Math.max(1, Math.floor(Number(item.quantity) || 1));

        const unitPriceUSD = Number(
            item.unitPriceUSD ?? item.price ?? 0
        );

        if (!item.id || !Number.isFinite(unitPriceUSD) || unitPriceUSD < 0) {
            throw new Error("Product information is incomplete.");
        }

        return {
            ...item,
            id: String(item.id),
            name: String(item.name || "Product"),
            image: String(item.image || ""),
            quantity,
            country: String(item.country || ""),
            currency: String(item.currency || "USD"),
            unitPriceUSD: Number(unitPriceUSD.toFixed(2)),
            unitPriceLocal: Number(
                (Number(item.unitPriceLocal) || unitPriceUSD).toFixed(2)
            )
        };
    }

    function getVariantKey(item) {
        return [
            item.id,
            item.country,
            item.color || "",
            item.model || "",
            item.size || "",
            item.variant || ""
        ].join("|");
    }

    function add(item) {
        const newItem = normalizeItem(item);
        const cart = getCart();
        const key = getVariantKey(newItem);

        const existing = cart.find(
            current => getVariantKey(current) === key
        );

        if (existing) {
            existing.quantity += newItem.quantity;
        } else {
            cart.push(newItem);
        }

        saveCart(cart);
        return cart;
    }

    function buyNow(item) {
        const newItem = normalizeItem(item);

        // Buy Now contains only the selected product.
        localStorage.setItem(
            BUY_NOW_KEY,
            JSON.stringify([newItem])
        );

        window.location.href = "checkout.html?mode=buy-now";
    }

    function updateQuantity(index, quantity) {
        const cart = getCart();

        if (!cart[index]) return;

        const newQuantity = Math.floor(Number(quantity));

        if (!Number.isFinite(newQuantity) || newQuantity < 1) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity = newQuantity;
        }

        saveCart(cart);
    }

    function remove(index) {
        const cart = getCart();
        cart.splice(index, 1);
        saveCart(cart);
    }

    function clear() {
        localStorage.removeItem(CART_KEY);
        localStorage.removeItem(BUY_NOW_KEY);
        saveCart([]);
    }

    function getTotalUSD(items = getCart()) {
        return items.reduce((total, item) => {
            const price = Number(item.unitPriceUSD ?? item.price ?? 0);
            const quantity = Math.max(1, Number(item.quantity) || 1);
            return total + price * quantity;
        }, 0);
    }

    window.SacchiCart = {
        getCart,
        saveCart,
        add,
        buyNow,
        updateQuantity,
        remove,
        clear,
        getTotalUSD
    };
})();
