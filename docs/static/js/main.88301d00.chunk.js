(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),i=(n(13),n(7)),l=n(1),u={API_KEY:"b6e15d83096f32133cad96b5a91e7033",UNITS:"metric",LANG:"es",PXELS_API:"563492ad6f91700001000001f46b055b5bc94727beb73e75ca9ad1f4"},s=n(6),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"q";return fetch("//api.openweathermap.org/data/2.5/weather?".concat(t,"=").concat(e,"&appid=").concat(u.API_KEY,"&lang=").concat(u.LANG,"&units=").concat(u.UNITS)).then((function(e){return e.json()}))},d=function(e){var t=e;return Object(s.a)(u.PXELS_API).photos.search({query:t,per_page:10})},f=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),c=Object(l.a)(n,2),r=c[0],o=c[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]};n(17);var p=function(e){var t=e.onAdd,n=Object(a.useState)(""),r=Object(l.a)(n,2),o=r[0],i=r[1],u=function(){t(o),i("")};return c.a.createElement("div",{className:"add-location"},c.a.createElement("input",{type:"text",onChange:function(e){return i(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&u()},value:o,placeholder:"Busca un lugar o un CP"}),c.a.createElement("button",{disabled:""===o,onClick:function(){return u()}},"Buscar"))};var h=function(e){var t=e.name,n=e.weather,a=e.wind,r=e.main,o=e.onRemove,i=e.onClick,l=e.selected;if(!n)return null;var u=n[0];return c.a.createElement("div",{className:"weather-pannel ".concat(l?"seledted":""),onClick:function(){return i()}},c.a.createElement("span",{className:"remove-icon",onClick:function(){return o()}},"X"),c.a.createElement("h1",{className:"city-name"},c.a.createElement("span",null,t),c.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(u.icon,".png"),alt:u.description})),c.a.createElement("hr",null),c.a.createElement("div",{className:"info-row description"},"".concat(u.description.charAt(0).toUpperCase()).concat(u.description.slice(1))),c.a.createElement("div",{className:"info-row temeperature"},"Temperatura (act/min/max): ",r.temp,"\xbaC / ",r.temp_min,"\xbaC /"," ",r.temp_max,"\xbaC"),c.a.createElement("div",{className:"info-row humidity"},"Humedad: ",r.humidity),c.a.createElement("div",{className:"info-row wind"},"Velocidad del viento: ",a.speed," m/s"))};n(18);var v=function(e){return e.visible?c.a.createElement("div",{className:"loading-container"},c.a.createElement("div",null,"cargando...")):null};n(19);var g=function(e){var t=f("location",[]),n=Object(l.a)(t,2),r=n[0],o=n[1],u=f("selectedLocationIndex",r.length>0?0:-1),s=Object(l.a)(u,2),g=s[0],b=s[1],E=Object(a.useState)(""),w=Object(l.a)(E,2),y=w[0],O=w[1],j=Object(a.useState)(!1),N=Object(l.a)(j,2),S=N[0],k=N[1],I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sunny sky blue";d(e).then((function(e){var t=Math.floor(Math.random()*e.photos.length),n=e.photos[t].src.large2x;O(n)})).catch((function(){return console.log("error")}))};return Object(a.useEffect)((function(){r&&r.length>0&&r[g]&&r[g].weather&&r[g].weather.length>0?I(r[g].weather[0].main):I()}),[r,g]),Object(a.useEffect)((function(){document.body.style.backgroundImage="url(".concat(y,")")}),[y]),c.a.createElement("div",null,c.a.createElement(p,{onAdd:function(e){return function(e){var t=parseInt(e)+""===e?"zip":"q";k(!0),m(e,t).then((function(e){if(200!==e.cod||r.some((function(t){return t.id===e.id})))alert(e.message);else{var t=[].concat(Object(i.a)(r),[e]);o(t),b(t.length-1)}})).catch((function(e){return alert(e)})).finally((function(){return k(!1)}))}(e)}}),c.a.createElement("div",{className:"locations-list"},r&&r.map((function(e,t){return c.a.createElement(h,Object.assign({key:e.key},e,{onRemove:function(){return function(e){var t=r.filter((function(t){return t.id!==e}));o(t),b(t.length-1)}(e.id)},onClick:function(){return b(t)},selected:g===t}))}))),c.a.createElement(v,{visible:S}))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.88301d00.chunk.js.map