/* SACCHI FLYIER — REVIEW SUBMISSION */
(function(){
  "use strict";
  document.querySelectorAll("[data-rating-picker]").forEach(function(picker){
    picker.querySelectorAll(".sf-star").forEach(function(star){
      star.addEventListener("click",function(){
        const rating=Number(star.dataset.value);
        const input=document.getElementById(picker.dataset.ratingPicker);
        if(input) input.value=String(rating);
        picker.querySelectorAll(".sf-star").forEach(function(item){
          const active=Number(item.dataset.value)<=rating;
          item.classList.toggle("is-selected",active);
          item.setAttribute("aria-checked",Number(item.dataset.value)===rating?"true":"false");
        });
        const label=picker.querySelector(".sf-star-label");
        if(label) label.textContent=rating+" out of 5 stars";
      });
    });
  });
  document.querySelectorAll("[data-sf-review-form]").forEach(function(form){
    form.addEventListener("submit",function(event){
      event.preventDefault();
      const rating=form.querySelector('input[name="rating"]');
      if(!rating || !rating.value){
        const picker=form.querySelector("[data-rating-picker]");
        if(picker) picker.querySelector(".sf-star-label").textContent="Please select a star rating";
        return;
      }
      if(!form.reportValidity()) return;
      const data=new FormData(form);
      const product=form.dataset.product || "Sacchi Flyier";
      const subject="Customer review — "+product;
      const body=[
        "Product: "+product,
        "Customer name: "+data.get("customerName"),
        "Email: "+data.get("customerEmail"),
        "Rating: "+data.get("rating")+" out of 5",
        "",
        "Review:",
        data.get("reviewText"),
        "",
        "Please verify the order before marking this review as a verified purchase."
      ].join("\\n");
      const mailto="mailto:info@sacchiflyier.in?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
      window.location.href=mailto;
      const status=form.querySelector("[data-sf-review-status]");
      if(status) status.textContent="Your email app should open with your review. Send the email to submit it for moderation.";
    });
  });
})();