(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)a=s[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);h&&h(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"76a74d53","chunk-7379888f":"34349725","chunk-86a7925a":"b1220f2b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-7379888f":1,"chunk-86a7925a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-7379888f":"f1ab3d6c","chunk-86a7925a":"4f1e41df"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],h.parentNode.removeChild(h),n(i)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e),c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},5237:function(e,t,n){"use strict";var r=n("a30e"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("28dd"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{src:n("9077"),alt:"allBusiness Logo",width:"310",height:"125"}}),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),r("router-link",{attrs:{to:"/AboutUs"}},[e._v("About")]),e._v(" |\n    "),r("router-link",{attrs:{to:"/Businesses"}},[e._v("Businesses")]),e._v(" |\n    "),r("router-link",{attrs:{to:"/ContactUs"}},[e._v("Contact Us")])],1),r("router-view")],1)},i=[],s={name:"App",components:{},data:function(){return{}}},u=s,c=(n("5c0b"),n("2877")),l=Object(c["a"])(u,o,i,!1,null,null,null),f=l.exports,h=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to BLK BIZ"}})],1)},p=[],m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("body",{staticClass:"ContactUS"},[r("header",{staticClass:"BLK BIZ"}),r("main",[r("div",{staticClass:"image1"},[r("h1",{attrs:{id:"HomePageGreeting"}},[e._v("Welcome to Black Biz!")]),r("img",{attrs:{src:n("cecf"),alt:"Wrong image name/location",width:"1247",height:"500"}}),r("h2",{staticClass:"hook"},[e._v("All black owned businesses can be found here. This is your small business advantage.")])]),r("section",{attrs:{id:"mainsect1"}},[r("h2",{attrs:{id:"mission"}},[e._v("Mission Statement")]),r("p",[e._v("\n              We aim to give small an medium sized minority owned businessess a platform and the ability to connect with "),r("br"),e._v("customers and potential partners the world over. We are more than just a directory,\n              we are your business advantage. \n          ")]),r("hr")]),r("section",{attrs:{id:"tableSection"}},[r("h2",[e._v("Featured Business of the Day!")]),r("p",[r("strong",{attrs:{id:"BusinessAd1"}},[e._v("Qunnections Management Group, LLC")]),r("br"),e._v("\n              Click "),r("a",{attrs:{href:"http://www.qmgconstruction.com/",target:"_blank"}},[e._v("here")]),e._v(" to view website.\n          ")]),r("p",[e._v(" To see our full list of businesses,  Click "),r("a",{attrs:{href:"businesses"}},[e._v("here")])]),r("hr")]),r("div",[r("p",[e._v("\n              This is your connection to the world of black and minority owned businesses. \n          ")]),r("section",{attrs:{id:"asidesect2"}},[r("p",[e._v("\n                To learn more, go to our "),r("a",{attrs:{href:"aboutus"}},[e._v("about us")]),e._v(" page to get the story behind the movement. \n                If you would like to contact, visit our "),r("a",{attrs:{href:"contactus"}},[e._v("contact")]),e._v(" page and reach out.\n            ")])]),r("a",{attrs:{id:"topink",href:"#"}},[e._v("Go to Top")])])]),r("footer",{staticClass:"footer2"},[e._v("\n      Copyright© by BlkBiz inc. All rights reserved.\n  ")])])])}],b={name:"Home",props:{msg:String}},g=b,y=(n("5237"),Object(c["a"])(g,m,v,!1,null,"a1b0457c",null)),A=y.exports,w={name:"home",components:{HelloWorld:A}},L=w,X=Object(c["a"])(L,d,p,!1,null,null,null),I=X.exports;r["default"].use(h["a"]);var j=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:I},{path:"/AboutUs",name:"about",component:function(){return n.e("about").then(n.bind(null,"2664"))}},{path:"/Businesses",name:"business",component:function(){return n.e("chunk-7379888f").then(n.bind(null,"1cfb"))}},{path:"/ContactUs",name:"contact",component:function(){return n.e("chunk-86a7925a").then(n.bind(null,"e9bb"))}}]}),k=n("ce5b"),T=n.n(k),Z=n("9f7b");n("f9e3"),n("2dd8");r["default"].use(Z["a"]),r["default"].config.productionTip=!1,r["default"].use(a["a"]),r["default"].use(T.a),new r["default"]({router:j,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},9077:function(e,t){e.exports="data:image/png;base64,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"},a30e:function(e,t,n){},cecf:function(e,t,n){e.exports=n.p+"img/website_background2.a7405e6a.jpeg"}});
//# sourceMappingURL=app.c35b5e66.js.map