(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],{188:function(e,t,a){e.exports=a(395)},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){},385:function(e,t,a){},386:function(e,t,a){},387:function(e,t,a){},388:function(e,t,a){},389:function(e,t,a){},390:function(e,t,a){},391:function(e,t,a){},392:function(e,t,a){},393:function(e,t,a){},394:function(e,t,a){},395:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(59),o=a.n(c),l=(a(193),a(8)),i=a(28),u=a(23),m=(a(194),a(195),function(){return r.a.createElement("div",{className:"nav-links"},r.a.createElement("ul",{className:"nav-links__list"},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"About"))))}),s=(a(200),function(){return r.a.createElement("div",{className:"nav-container"},r.a.createElement(m,null))}),d=(a(201),function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1];return r.a.createElement("div",{className:"location-form-container"},r.a.createElement("h2",null,"Where in the world are you? "),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log(c),console.log("submitted"),e.handler(c)}},r.a.createElement("input",{type:"text",value:c,onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",null,"Here!")))}),h=a(37),f=a.n(h),E=a(148),p=a(14),v=(a(385),function(e){var t;if(e.week){console.log("weekly graph");var a=(0,function(){var e=function(e){var t=[],a=[];return e.data.list.forEach((function(e){var n=e.dt_txt.split(" ")[0];0===a.length||a[0].dt_txt.split(" ")[0]===n?a.push(e):(t.push(a),a=[])})),t},t=function(t){var a=e(t),n=[];return a.forEach((function(e){var t;e.forEach((function(e){(void 0===t||t<e.main.temp)&&(t=Math.round(10*e.main.temp)/10)})),n.push(t)})),n},a=function(t){var a=e(t),n=[];return a.forEach((function(e){var t;e.forEach((function(e){(void 0===t||t>e.main.temp)&&(t=Math.round(10*e.main.temp)/10)})),n.push(t)})),n};return{listHighs:t,listLows:a,calculateHandler:function(n){return{dayList:e(n),highs:t(n),lows:a(n)}}}}().calculateHandler)(e);console.log(a);var n=[];a.dayList.forEach((function(e,t){var r={name:e[0].dt_txt.split(" ")[0],high:a.highs[t],low:a.lows[t]};n.push(r)})),t=r.a.createElement(p.b,{width:800,height:350,data:n,margin:{top:5,right:50,bottom:10,left:0}},r.a.createElement(p.a,{type:"monotone",dataKey:"high",stroke:"#8884d8"}),r.a.createElement(p.a,{type:"monotone",dataKey:"low",stroke:"#000"}),r.a.createElement(p.d,{dataKey:"name"}),r.a.createElement(p.e,{label:{value:"Temp. C ",angle:-90,position:"insideLeft"}}),r.a.createElement(p.c,null))}else if(e.hourly){var c=[];e.data.map((function(e){var t={name:e.dt_txt.split(" ")[1],high:e.main.temp};c.push(t)})),t=r.a.createElement(p.b,{width:800,height:350,data:c,margin:{top:5,right:30,bottom:10,left:0}},r.a.createElement(p.a,{type:"monotone",dataKey:"high",stroke:"#8884d8"}),r.a.createElement(p.d,{dataKey:"name"}),r.a.createElement(p.e,{label:{value:"Temp. C",angle:-90,position:"insideLeft"}}),r.a.createElement(p.c,null))}return r.a.createElement("div",{className:"graph-container"},t)}),y=(a(386),a(63)),w=a.n(y),g=function(e){console.log(e);var t=new Date,a=1e3*e.day;return t.setTime(a),w()(t).format("dddd"),r.a.createElement("div",{className:"day-of-week"},e.week&&r.a.createElement("h2",null,w()(t).format("MMMM Do")),!e.week&&r.a.createElement("h2",null,w()(t).format("MMMM Do, h:mm a")))},b=(a(387),function(e){return r.a.createElement("div",{className:"forecast-icon"},r.a.createElement("i",{className:"owf owf-".concat(e.iconCode,"-d owf-5x")}))}),k=(a(388),function(e){return console.log(e),r.a.createElement("div",null,r.a.createElement("h2",null,e.weather," "))}),x=(a(389),function(e){return console.log(e),r.a.createElement("div",{className:"temp-data"},e.temp.temp.toFixed()," \xb0C")}),N=(a(390),function(e){return r.a.createElement("div",{className:"card ".concat(e.extraStyle)},e.children)}),_=(a(391),function(e){return console.log(e),r.a.createElement(N,null,r.a.createElement("div",{className:"day-container"},r.a.createElement(g,{day:e.dailyForecast.dt,date:e.dailyForecast.dt_txt,week:!!e.week}),r.a.createElement(b,{iconCode:e.dailyForecast.weather[0].id}),r.a.createElement(k,{weather:e.dailyForecast.weather[0].description}),r.a.createElement(x,{temp:e.dailyForecast.main})))}),j=(a(392),function(e){console.log(e);var t,a=Object(n.useState)(),c=Object(l.a)(a,2),o=c[0],u=c[1],m=Object(n.useState)(),s=Object(l.a)(m,2),d=(s[0],s[1]);Object(n.useEffect)((function(){(function(){var t=Object(E.a)(f.a.mark((function t(){var a,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(e.loc,"&units=metric&appid=daea4b2b7ea6afe405712e5fcd31d174"));case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,u(n),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),d(!0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[e.loc]),void 0!==o&&(t=o.list.filter((function(e){return e.dt_txt.includes("12:00:00")})));var h=e.loc.charAt(0).toUpperCase()+e.loc.slice(1);return r.a.createElement("div",{className:"week-container"},o&&r.a.createElement("h2",null,h,", ",o.city.country),r.a.createElement("ul",{className:"week-container__list"},o&&t.map((function(t){return r.a.createElement("li",{key:t.dt,className:"week-day__listitem"},r.a.createElement(i.b,{style:{textDecoration:"none"},to:{pathname:"/hourly/"+t.dt,state:{location:e.loc,day:t,week:o}}},r.a.createElement(_,{dailyForecast:t,week:!0})))}))),r.a.createElement("h3",null,"Click a day for 3-hour forecast."),o&&r.a.createElement(v,{id:"chart",data:o,week:!0}))}),M=(a(393),function(e){return console.log(e),r.a.createElement(N,{extraStyle:"hour-card"},r.a.createElement("div",{className:"day-container"},r.a.createElement(g,{day:e.data.dt,date:e.data.dt_txt}),r.a.createElement(b,{iconCode:e.data.weather[0].id}),r.a.createElement(k,{weather:e.data.weather[0].description}),r.a.createElement(x,{temp:e.data.main})))}),O=(a(394),function(e){console.log(e);var t=e.location.state,a=t.location,n=t.day,c=t.week;console.log(n);var o=n.dt_txt.split(" ")[0],l=c.list.filter((function(e){return e.dt_txt.split(" ")[0]===o}));return console.log(l),r.a.createElement("div",{className:"hourly-container"},r.a.createElement("h2",null,a,", ",c.city.country),r.a.createElement("ul",{className:"hourly-container__list"},l&&l.map((function(e){return r.a.createElement("li",{key:e.dt,className:"hour__listitem"},r.a.createElement(M,{data:e}))}))),l&&r.a.createElement(v,{id:"chart",data:l,hourly:!0}))});var C=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"main-container"},r.a.createElement(i.a,null,r.a.createElement("div",{className:"nav-bar"},r.a.createElement("div",{className:"empty"}),r.a.createElement("h1",null,"Weatherlog"),r.a.createElement(s,null)),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0},r.a.createElement(d,{handler:function(e){c(e)}}),r.a.createElement(j,{loc:a||"London"})),r.a.createElement(u.a,{path:"/hourly/:day",exact:!0,component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[188,1,2]]]);
//# sourceMappingURL=main.c0fcca6d.chunk.js.map