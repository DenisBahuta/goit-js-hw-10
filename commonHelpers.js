import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-651d7991.js";const h=m("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(e){const o=e[0],n=new Date;o<=n?(f.error({title:"Error",message:"Please choose a date in the future"}),t.disabled=!0):t.disabled=!1}});function s(e){const c=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:d,seconds:l}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));const t=document.querySelector("button[data-start]"),y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");t.disabled=!0;t.addEventListener("click",function(){t.disabled=!0;const e=h.selectedDates[0];let o=setInterval(function(){const n=new Date().getTime(),a=e.getTime()-n;if(a<0){clearInterval(o),t.disabled=!0;return}const{days:i,hours:c,minutes:u,seconds:d}=s(a);y.textContent=r(i),S.textContent=r(c),g.textContent=r(u),D.textContent=r(d)},1e3)});function r(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map