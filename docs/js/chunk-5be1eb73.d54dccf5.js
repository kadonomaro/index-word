(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5be1eb73"],{"29d7":function(t,e,n){},"29eb":function(t,e,n){},7650:function(t,e,n){"use strict";var s=n("29eb"),i=n.n(s);i.a},a15b:function(t,e,n){"use strict";var s=n("23e7"),i=n("44ad"),r=n("fc6a"),a=n("b301"),c=[].join,o=i!=Object,u=a("join",",");s({target:"Array",proto:!0,forced:o||u},{join:function(t){return c.call(r(this),void 0===t?",":t)}})},b175:function(t,e,n){"use strict";var s=n("29d7"),i=n.n(s);i.a},e0ba:function(t,e,n){"use strict";n.r(e);var s,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-settings")},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings"},[n("h1",{staticClass:"settings__title admin__title"},[t._v("Settings")]),n("form",{staticClass:"settings__form",attrs:{action:""}},[n("ul",{staticClass:"settings__list"},t._l(t.settings,(function(t,e,s){return n("setting-item",{key:s,staticClass:"settings__item",attrs:{name:e,val:t}})})),1)])])},c=[],o=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),u=n("2f62"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"setting-item"},[n("span",{staticClass:"setting-item__title"},[t._v(t._s(t.setTitle(t.name))+":")]),n("input",{class:["setting-item__value",{"setting-item__value--error":t.hasError}],attrs:{type:"text"},domProps:{value:t.val},on:{input:function(e){t.value=e.target.value}}}),n("button",{staticClass:"setting-item__button",on:{click:function(e){var n;return e.preventDefault(),t.setSettings((n={},n[t.name]=t.value,n))}}},[t._v("Save")])])},p=[],f=(n("a15b"),n("ac1f"),n("1276"),{name:"SettingItem",props:{name:{type:String,required:!0},val:{type:String,required:!0}},data:function(){return{hasError:!1,value:""}},created:function(){this.value=""+this.val},methods:{setTitle:function(t){return t.split(/(?=[A-Z])/).join(" ").toLowerCase()},setSettings:function(t){this.$store.commit("uploadSettings",t)},inputValidate:function(){this.hasError=/^[0-9]*$/g.test(this.val)}}}),b=f,g=(n("7650"),n("2877")),m=Object(g["a"])(b,l,p,!1,null,null,null),v=m.exports;function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O=(s={name:"AppSettings",components:{SettingItem:v}},Object(o["a"])(s,"name","Settings"),Object(o["a"])(s,"computed",d({},Object(u["b"])(["settings"]))),s),j=O,h=(n("b175"),Object(g["a"])(j,a,c,!1,null,null,null)),y=h.exports,S={name:"Settings",components:{AppSettings:y}},w=S,C=Object(g["a"])(w,i,r,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-5be1eb73.d54dccf5.js.map