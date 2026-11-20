/* SACCHI FLYIER — SHARED CART + CURRENCY
   USD is the internal calculation currency.
   Exchange rates are reference rates, refreshed automatically when stale.
*/
(() => {
  "use strict";
  const CART_KEY="sacchiFlyierCart", BUY_NOW_KEY="sacchiFlyierBuyNow";
  const COUNTRY_KEY="sacchiFlyierCountry";
  const FX_KEY="sacchiFlyierFxCache", COUNTRY_CACHE_KEY="sacchiFlyierCountryCache";
  const DEFAULT_COUNTRY="US";
  let countries={}, rates={}, fxDate="", countriesPromise=null, ratesPromise=null;

  function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
  function write(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{}}
  function getCart(){const x=read(CART_KEY,[]);return Array.isArray(x)?x:[]}
  function saveCart(items){
    if(!Array.isArray(items)) throw new Error("Invalid cart data.");
    write(CART_KEY,items);
    window.dispatchEvent(new CustomEvent("sacchi:cart-updated",{detail:{cart:items}}));
    return items;
  }
  function getCountry(){const code=localStorage.getItem(COUNTRY_KEY)||DEFAULT_COUNTRY;return code==="IN"||!countries[code]&&Object.keys(countries).length?DEFAULT_COUNTRY:code}
  function setCountry(code){
    code=String(code||"").toUpperCase();
    if(code==="IN"||(Object.keys(countries).length&&!countries[code])) throw new Error("Delivery to this country is not available.");
    localStorage.setItem(COUNTRY_KEY,code);
    window.dispatchEvent(new CustomEvent("sacchi:country-updated",{detail:{country:code,currency:getCurrency()}}));
    return countries[code]||null;
  }
  function getCurrency(){return countries[getCountry()]?.currency||"USD"}
  async function loadCountries(force=false){
    if(countriesPromise&&!force)return countriesPromise;
    countriesPromise=(async()=>{
      const cached=read(COUNTRY_CACHE_KEY,null);
      if(!force&&cached&&Date.now()-cached.savedAt<7*864e5){countries=cached.data;return countries}
      try{
        const res=await fetch("https://restcountries.com/v3.1/all?fields=name,cca2,currencies");
        if(!res.ok)throw Error("Country list unavailable");
        const data=await res.json(), next={};
        data.forEach(c=>{
          const code=c.cca2, currency=Object.keys(c.currencies||{})[0];
          if(code&&code!=="IN"&&currency)next[code]={name:c.name?.common||code,currency};
        });
        countries=next;write(COUNTRY_CACHE_KEY,{savedAt:Date.now(),data:next});return countries;
      }catch(error){
        if(cached?.data){countries=cached.data;return countries}
        countries={US:{name:"United States",currency:"USD"}};
        return countries;
      }
    })();
    return countriesPromise;
  }
  async function loadRates(force=false){
    if(ratesPromise&&!force)return ratesPromise;
    ratesPromise=(async()=>{
      const cached=read(FX_KEY,null);
      if(!force&&cached&&Date.now()-cached.savedAt<6*36e5){rates=cached.rates;fxDate=cached.date;return rates}
      try{
        const res=await fetch("https://api.frankfurter.dev/v2/rates?base=USD");
        if(!res.ok)throw Error("Exchange rates unavailable");
        const rows=await res.json(), next={USD:1};
        rows.forEach(row=>{if(row.quote&&Number(row.rate)>0)next[row.quote]=Number(row.rate)});
        rates=next;fxDate=rows[0]?.date||new Date().toISOString().slice(0,10);
        write(FX_KEY,{savedAt:Date.now(),date:fxDate,rates});return rates;
      }catch(error){
        if(cached?.rates){rates=cached.rates;fxDate=cached.date;return rates}
        rates={USD:1};fxDate="";return rates;
      }
    })();
    return ratesPromise;
  }
  async function refreshCurrencyData(){await Promise.all([loadCountries(),loadRates()]);return {countries,rates,date:fxDate}}
  function currencyForCountryName(name){
    const normalized=String(name||"").trim().toLowerCase();
    const match=Object.values(countries).find(c=>c.name.toLowerCase()===normalized);
    return match?.currency||null;
  }
  function convertUSD(amount,currency){
    const value=Number(amount), code=String(currency||"").toUpperCase();
    if(!Number.isFinite(value)||!rates[code])return null;
    return value*rates[code];
  }
  function formatMoney(amount,currency){
    if(amount===null||amount===undefined||!Number.isFinite(Number(amount)))return "Price unavailable";
    try{return new Intl.NumberFormat(undefined,{style:"currency",currency:currency||"USD"}).format(Number(amount))}
    catch{return Number(amount).toFixed(2)+" "+currency}
  }
  function normalizeProduct(p){
    if(!p||!p.id||!p.name)throw Error("Product information is incomplete.");
    const price=Number(p.unitPriceUSD);
    if(!Number.isFinite(price)||price<0)throw Error("Invalid product price.");
    return {...p,id:String(p.id),name:String(p.name),sku:String(p.sku||""),image:String(p.image||""),unitPriceUSD:price,quantity:Math.min(99,Math.max(1,Math.floor(Number(p.quantity)||1)))};
  }
  function add(p){
    const item=normalizeProduct(p), items=getCart();
    const same=items.find(x=>x.id===item.id&&x.country===item.country&&x.color===item.color&&x.model===item.model);
    if(same)same.quantity=Math.min(99,Number(same.quantity||0)+item.quantity);else items.push(item);
    saveCart(items);localStorage.removeItem(BUY_NOW_KEY);return items;
  }
  function buyNow(p){write(BUY_NOW_KEY,[normalizeProduct(p)]);localStorage.setItem("sacchiFlyierReturnPage",location.pathname);location.href="checkout.html?mode=buy-now"}
  function getBuyNow(){const x=read(BUY_NOW_KEY,[]);return Array.isArray(x)?x:[]}
  function getCheckoutItems(){return new URLSearchParams(location.search).get("mode")==="buy-now"?getBuyNow():getCart()}
  function updateQuantity(id,q){const items=getCart(),item=items.find(x=>x.id===String(id));if(!item)return items;const n=Math.floor(Number(q));if(!Number.isFinite(n)||n<1)return remove(id);item.quantity=Math.min(99,n);return saveCart(items)}
  function remove(id){return saveCart(getCart().filter(x=>x.id!==String(id)))}
  function clearCart(){localStorage.removeItem(CART_KEY);saveCart([])}
  function clearBuyNow(){localStorage.removeItem(BUY_NOW_KEY)}
  function getSubtotalUSD(items=getCart()){return items.reduce((sum,x)=>sum+Number(x.unitPriceUSD||0)*Number(x.quantity||0),0)}
  function getTotalQuantity(items=getCart()){return items.reduce((sum,x)=>sum+Number(x.quantity||0),0)}
  const api={CART_KEY,BUY_NOW_KEY,COUNTRY_KEY,get COUNTRIES(){return countries},get rates(){return rates},get rateDate(){return fxDate},getCart,saveCart,add,buyNow,getBuyNow,getCheckoutItems,updateQuantity,remove,clearCart,clearBuyNow,getCountry,setCountry,getCurrency,getSubtotalUSD,getTotalQuantity,loadCountries,loadRates,refreshCurrencyData,currencyForCountryName,convertUSD,formatMoney,formatUSD:n=>formatMoney(n,"USD")};
  window.SacchiCart=Object.freeze(api);
  refreshCurrencyData();
})();