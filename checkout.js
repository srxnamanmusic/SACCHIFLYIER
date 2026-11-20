/* SACCHI FLYIER — TEST CHECKOUT
   No order is created and no payment is collected.
*/
(() => {
 "use strict";
 const api=window.SacchiCart,form=document.getElementById("checkout-form");
 const countrySelect=document.getElementById("country"),itemsBox=document.getElementById("checkout-items");
 const quantityEl=document.getElementById("checkout-quantity"),quantitySummary=document.getElementById("checkout-quantity-summary"),subtotalEl=document.getElementById("checkout-subtotal");
 const currencyNote=document.getElementById("checkout-currency-note"),rateDateEl=document.getElementById("checkout-rate-date");
 const shippingEl=document.getElementById("checkout-shipping"),totalEl=document.getElementById("checkout-total");
 const message=document.getElementById("checkout-message"),submit=document.getElementById("place-order-button");
 if(!api||!form)return;
 let items=[],currency="USD";
 const say=(s,type="info")=>{if(message){message.textContent=s;message.className="checkout-message show "+type;message.setAttribute("role","alert")}};
 const clear=()=>{if(message){message.textContent="";message.className="checkout-message"}};
 function populate(){
  const list=api.COUNTRIES,selected=api.getCountry();
  countrySelect.innerHTML='<option value="">Select your country</option>';
  Object.entries(list).sort((a,b)=>a[1].name.localeCompare(b[1].name)).forEach(([code,c])=>{
   if(code==="IN")return;const o=document.createElement("option");o.value=code;o.textContent=c.name+" ("+c.currency+")";countrySelect.appendChild(o);
  });
  if(list[selected])countrySelect.value=selected;
 }
 function render(){
  items=api.getCheckoutItems();
  if(!items.length){itemsBox.textContent="Your checkout is empty.";quantityEl.textContent="0";if(quantitySummary)quantitySummary.textContent="0";subtotalEl.textContent="—";shippingEl.textContent="Not calculated";totalEl.textContent="Not calculated";submit.disabled=true;say("Your cart is empty. Add a product before checkout.","error");return}
  itemsBox.replaceChildren();
  items.forEach(item=>{
   const article=document.createElement("article");article.className="checkout-item";
   if(item.image){const img=document.createElement("img");img.src=item.image;img.alt=item.name||"Product";img.loading="lazy";img.onerror=()=>img.style.display="none";article.appendChild(img)}
   const details=document.createElement("div");details.className="checkout-item-details";
   const name=document.createElement("h3");name.textContent=item.name||"Product";
   const meta=document.createElement("p");meta.textContent=["Quantity: "+item.quantity,item.color?"Colour: "+item.color:"",item.model?"Model: "+item.model:""].filter(Boolean).join(" · ");
   details.append(name,meta);
   const price=document.createElement("div");price.className="checkout-item-price";price.textContent=api.formatMoney(Number(item.unitPriceUSD)*Number(item.quantity),"USD");
   article.append(details,price);itemsBox.appendChild(article);
  });
  quantityEl.textContent=String(api.getTotalQuantity(items));if(quantitySummary)quantitySummary.textContent=String(api.getTotalQuantity(items));
  subtotalEl.textContent=api.formatMoney(api.getSubtotalUSD(items),"USD");
  shippingEl.textContent="Included in the product prices shown on product pages";
  totalEl.textContent=api.formatMoney(api.getSubtotalUSD(items),"USD");
  submit.disabled=false;
 }
 async function renderLocal(){
  await api.refreshCurrencyData();
  const code=countrySelect.value||api.getCountry(),c=api.COUNTRIES[code];
  if(!c)return;
  const destinations=items.map(x=>x.country);
  if(destinations.some(x=>!x)||destinations.some(x=>x!==code)){
   submit.disabled=true;
   say("Your selected delivery country must match the country used for shipping calculations on every product. Return to the product page and choose the same destination, or start a new cart.","error");
   return;
  }
  currency=c.currency;
  if(currencyNote)currencyNote.textContent="Prices are displayed in "+currency+" when a current or cached reference rate is available.";
  if(rateDateEl)rateDateEl.textContent=api.rateDate?"Reference exchange-rate date: "+api.rateDate+".":"Exchange-rate date unavailable; converted prices may be unavailable.";
  const totalUSD=api.getSubtotalUSD(items),local=api.convertUSD(totalUSD,currency);
  if(local===null){submit.disabled=true;subtotalEl.textContent="Currency not supported";totalEl.textContent="Currency not supported";say("Reference conversion for "+currency+" is unavailable. Please select a supported currency or try again later.","error");return}
  submit.disabled=false;
  subtotalEl.textContent=api.formatMoney(local,currency);
  totalEl.textContent=api.formatMoney(local,currency);
  itemsBox.querySelectorAll(".checkout-item").forEach((article,i)=>{
   const item=items[i],converted=api.convertUSD(Number(item.unitPriceUSD)*Number(item.quantity),currency);
   const price=article.querySelector(".checkout-item-price");
   price.textContent=converted===null?"Price unavailable":api.formatMoney(converted,currency);
  });
  if(api.rateDate)say("Prices shown in "+currency+". Reference exchange rate date: "+api.rateDate+". Shipping is included in each product price.","info");
 }
 function validate(){
  if(!countrySelect.value||countrySelect.value==="IN"||!api.COUNTRIES[countrySelect.value]){say("Please select a valid delivery country outside India.","error");return false}
  if(!items.length){say("Your checkout is empty.","error");return false}
  if(items.some(x=>!x.country)){say("A product is missing its delivery-country selection. Please return to the product page and add it again.","error");return false}
  if(new Set(items.map(x=>x.country)).size>1){say("Your cart contains different delivery countries. Please use one destination per checkout.","error");return false}
  if(items.some(x=>x.country!==countrySelect.value)){say("The checkout country must match the delivery country selected on the product page. Please return and select the same destination.","error");return false}
  return true;
 }
 countrySelect.addEventListener("change",async()=>{clear();try{api.setCountry(countrySelect.value);await renderLocal()}catch(e){say(e.message,"error")}});
 form.addEventListener("submit",async e=>{
  e.preventDefault();clear();if(!form.checkValidity()){form.reportValidity();return}
  if(!validate())return;
  await renderLocal();
  if(submit.disabled)return;
  say("Test only: your checkout passed browser validation. Shipping and payment are not connected. No order has been placed and no payment has been collected.","success");
 });
 (async()=>{await api.refreshCurrencyData();populate();render();await renderLocal()})();
 window.addEventListener("sacchi:cart-updated",render);
})();