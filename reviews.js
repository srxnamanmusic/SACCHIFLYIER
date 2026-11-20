/* SACCHI FLYIER — REVIEW SUBMISSION
   Static-site version: submissions are emailed for manual moderation.
   Shared public review publishing requires a database/backend connection. */
(function(){
  "use strict";
  document.querySelectorAll("[data-sf-review-form]").forEach(function(form){
    form.addEventListener("submit",function(event){
      event.preventDefault();
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
      ].join("\n");
      const mailto="mailto:info@sacchiflyier.in?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
      window.location.href=mailto;
      const status=form.querySelector("[data-sf-review-status]");
      if(status) status.textContent="Your email app should open with your review. Send the email to submit it for moderation.";
    });
  });
})();