import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as i}from"./assets/vendor-651d7991.js";const l={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(t){let e=t[0];const o=new Date;e<=o?(window.alert("Please choose a date in the future"),document.querySelector("button[data-start]").disabled=!0):document.querySelector("button[data-start]").disabled=!1}},m=i("#datetime-picker",l);function n(t){const a=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),s=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:c,minutes:s,seconds:d}}console.log(n(2e3));console.log(n(14e4));console.log(n(2414e4));document.querySelector("button[data-start]").addEventListener("click",function(){let t=m.selectedDates[0];const e=setInterval(function(){const o=new Date().getTime(),r=t.getTime()-o;if(r<0){clearInterval(e),document.querySelector("button[data-start]").disabled=!0;return}const{days:u,hours:a,minutes:c,seconds:s}=n(r);document.querySelector("[data-days]").textContent=u.toString().padStart(2,"0"),document.querySelector("[data-hours]").textContent=a.toString().padStart(2,"0"),document.querySelector("[data-minutes]").textContent=c.toString().padStart(2,"0"),document.querySelector("[data-seconds]").textContent=s.toString().padStart(2,"0")},1e3)});
//# sourceMappingURL=commonHelpers.js.map
