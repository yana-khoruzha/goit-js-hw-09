import"./assets/styles-769fc8b7.js";const a="feedback-form-state",e=document.querySelector(".feedback-form");document.querySelector(".message");e.addEventListener("input",()=>{const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem(a,JSON.stringify(t))});e.addEventListener("submit",()=>{if(e.elements.email.value&&e.elements.message.value){const t=JSON.parse(localStorage.getItem(a));localStorage.removeItem(a),console.log(t)}});function m(){const{email:t,message:s}=JSON.parse(localStorage.getItem(a))||{};e.elements.email.value=t||"",e.elements.message.value=s||""}m();
//# sourceMappingURL=commonHelpers2.js.map