(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65d7d158"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(r(t))}},2199:function(t,e,n){"use strict";var r=n("5960"),i=n.n(r);i.a},"3e7d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",class:t.theme?"button--"+t.theme:"",on:{click:t.clickHandler}},[t._v(t._s(t.text))])},i=[],o={name:"AppButton",props:{text:{type:String,required:!0},theme:{type:String,required:!1}},methods:{clickHandler:function(){this.$emit("click-handler")}}},a=o,c=(n("679a"),n("2877")),s=Object(c["a"])(a,r,i,!1,null,null,null);e["a"]=s.exports},5119:function(t,e,n){},5960:function(t,e,n){},"679a":function(t,e,n){"use strict";var r=n("d9b8"),i=n.n(r);i.a},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),o=n("c032"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},"788c":function(t,e,n){"use strict";var r=n("5119"),i=n.n(r);i.a},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?i.f(t,a,o(0,n)):t[a]=n}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("c430"),a=n("83ab"),c=n("4930"),s=n("d039"),u=n("5135"),l=n("e8b5"),m=n("861d"),f=n("825a"),d=n("7b0b"),p=n("fc6a"),b=n("c04e"),h=n("5c6c"),v=n("7c73"),_=n("df75"),y=n("241c"),g=n("057f"),w=n("7418"),C=n("06cf"),O=n("9bf2"),j=n("d1e7"),x=n("9112"),P=n("6eeb"),S=n("5692"),k=n("f772"),D=n("d012"),E=n("90e3"),$=n("b622"),A=n("c032"),q=n("746f"),N=n("d44e"),W=n("69f3"),I=n("b727").forEach,H=k("hidden"),T="Symbol",B="prototype",J=$("toPrimitive"),V=W.set,L=W.getterFor(T),F=Object[B],M=i.Symbol,Q=i.JSON,z=Q&&Q.stringify,G=C.f,K=O.f,R=g.f,U=j.f,X=S("symbols"),Y=S("op-symbols"),Z=S("string-to-symbol-registry"),tt=S("symbol-to-string-registry"),et=S("wks"),nt=i.QObject,rt=!nt||!nt[B]||!nt[B].findChild,it=a&&s((function(){return 7!=v(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=G(F,e);r&&delete F[e],K(t,e,n),r&&t!==F&&K(F,e,r)}:K,ot=function(t,e){var n=X[t]=v(M[B]);return V(n,{type:T,tag:t,description:e}),a||(n.description=e),n},at=c&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof M},ct=function(t,e,n){t===F&&ct(Y,e,n),f(t);var r=b(e,!0);return f(n),u(X,r)?(n.enumerable?(u(t,H)&&t[H][r]&&(t[H][r]=!1),n=v(n,{enumerable:h(0,!1)})):(u(t,H)||K(t,H,h(1,{})),t[H][r]=!0),it(t,r,n)):K(t,r,n)},st=function(t,e){f(t);var n=p(e),r=_(n).concat(dt(n));return I(r,(function(e){a&&!lt.call(n,e)||ct(t,e,n[e])})),t},ut=function(t,e){return void 0===e?v(t):st(v(t),e)},lt=function(t){var e=b(t,!0),n=U.call(this,e);return!(this===F&&u(X,e)&&!u(Y,e))&&(!(n||!u(this,e)||!u(X,e)||u(this,H)&&this[H][e])||n)},mt=function(t,e){var n=p(t),r=b(e,!0);if(n!==F||!u(X,r)||u(Y,r)){var i=G(n,r);return!i||!u(X,r)||u(n,H)&&n[H][r]||(i.enumerable=!0),i}},ft=function(t){var e=R(p(t)),n=[];return I(e,(function(t){u(X,t)||u(D,t)||n.push(t)})),n},dt=function(t){var e=t===F,n=R(e?Y:p(t)),r=[];return I(n,(function(t){!u(X,t)||e&&!u(F,t)||r.push(X[t])})),r};c||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),n=function(t){this===F&&n.call(Y,t),u(this,H)&&u(this[H],e)&&(this[H][e]=!1),it(this,e,h(1,t))};return a&&rt&&it(F,e,{configurable:!0,set:n}),ot(e,t)},P(M[B],"toString",(function(){return L(this).tag})),j.f=lt,O.f=ct,C.f=mt,y.f=g.f=ft,w.f=dt,a&&(K(M[B],"description",{configurable:!0,get:function(){return L(this).description}}),o||P(F,"propertyIsEnumerable",lt,{unsafe:!0})),A.f=function(t){return ot($(t),t)}),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:M}),I(_(et),(function(t){q(t)})),r({target:T,stat:!0,forced:!c},{for:function(t){var e=String(t);if(u(Z,e))return Z[e];var n=M(e);return Z[e]=n,tt[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(u(tt,t))return tt[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:ut,defineProperty:ct,defineProperties:st,getOwnPropertyDescriptor:mt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:dt}),r({target:"Object",stat:!0,forced:s((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(d(t))}}),Q&&r({target:"JSON",stat:!0,forced:!c||s((function(){var t=M();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}))},{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(m(e)||void 0!==t)&&!at(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),r[1]=e,z.apply(Q,r)}}),M[B][J]||x(M[B],J,M[B].valueOf),N(M,T),D[H]=!0},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),a=n("d039"),c=a((function(){o(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return o(i(t))}})},c032:function(t,e,n){e.f=n("b622")},d9b8:function(t,e,n){},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),a=n("fc6a"),c=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),i=c.f,u=o(r),l={},m=0;while(u.length>m)n=i(r,e=u[m++]),void 0!==n&&s(l,e,n);return l}})},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),a=n("06cf").f,c=n("83ab"),s=i((function(){a(1)})),u=!c||s;r({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},fc1e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.article?n("article",{staticClass:"article-detail"},[n("div",{staticClass:"article-detail__inner"},[n("app-button",{staticClass:"article-detail__link",attrs:{text:"Назад"},on:{"click-handler":function(e){return t.$router.go(-1)}}}),n("div",{staticClass:"article-detail__image"},[n("img",{staticClass:"article-detail__image-img",attrs:{src:t.article.image,alt:t.article.title}})]),n("div",{staticClass:"article-detail__text"},[n("h1",{staticClass:"article-detail__title"},[t._v(t._s(t.article.title))]),n("div",{domProps:{innerHTML:t._s(t.article.text)}})])],1),n("footer",{staticClass:"article-detail__footer"},[n("time",{staticClass:"article-detail__date",attrs:{datetime:""}},[t._v(t._s(t.article.date.toLocaleString()))])]),n("article-comments",{attrs:{comments:t.article.comments,articleID:t.article.id}})],1):t._e()},i=[],o=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),a=n("3e7d"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comments"},[n("button",{staticClass:"comments__button comments__button--add",on:{click:function(e){t.isCommentWrite=!t.isCommentWrite}}},[t._v("+")]),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isCommentWrite?n("div",{staticClass:"comments__add"},[n("form",{staticClass:"comments-form",attrs:{action:""}},[n("label",{staticClass:"comments-form__label"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.author,expression:"newComment.author"}],staticClass:"comments-form__field",attrs:{type:"text",placeholder:"Имя",required:""},domProps:{value:t.newComment.author},on:{input:function(e){e.target.composing||t.$set(t.newComment,"author",e.target.value)}}})]),n("label",{staticClass:"comments-form__label"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newComment.text,expression:"newComment.text"}],staticClass:"comments-form__field",attrs:{rows:"7",placeholder:"Комментарий",required:""},domProps:{value:t.newComment.text},on:{input:function(e){e.target.composing||t.$set(t.newComment,"text",e.target.value)}}})]),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isValidateError?n("span",{staticClass:"comments-form__error"},[t._v("Оба поля должны быть заполнены")]):t._e()]),n("button",{staticClass:"comments__button",on:{click:function(e){return e.preventDefault(),t.clickHandler(e)}}},[t._v("Отправить")])],1)]):t._e()]),n("ul",{staticClass:"comments__list"},t._l(t.comments,(function(e,r){return n("li",{key:r,staticClass:"comments__item comment"},[n("span",{staticClass:"comment__author"},[t._v(t._s(e.author))]),n("p",{staticClass:"comment__text"},[t._v(t._s(e.text))]),n("span",{staticClass:"comment__date"},[t._v(t._s(t.commentDate(e.date)))])])})),0)],1)},s=[],u=(n("0d03"),{name:"ArticleComments",props:{articleID:{type:String,required:!0},comments:{type:Array,required:!0}},data:function(){return{isCommentWrite:!1,isValidateError:!1,newComment:{author:"",text:"",date:""}}},methods:{commentDate:function(t){return new Date(1e3*t.seconds).toLocaleString()},updateComments:function(t){this.$store.commit("updateComments",[this.articleID,t])},clickHandler:function(){var t=this;this.newComment.date=new Date;var e={author:this.newComment.author,text:this.newComment.text,date:new Date};e.author&&e.text?(this.updateComments(e),this.clearComment(),this.isCommentWrite=!this.isCommentWrite):(this.isValidateError=!0,setTimeout((function(){t.isValidateError=!1}),2e3))},clearComment:function(){this.newComment.author="",this.newComment.text="",this.newComment.date=""}}}),l=u,m=(n("2199"),n("2877")),f=Object(m["a"])(l,c,s,!1,null,null,null),d=f.exports,p=n("2f62");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={name:"ArticleDetail",components:{AppButton:a["a"],ArticleComments:d},props:{id:{type:String,required:!0}},computed:h({},Object(p["b"])(["getArticleById"]),{article:function(){return this.getArticleById(this.id)}}),mounted:function(){this.increasePopularity()},methods:{increasePopularity:function(){var t=this;setTimeout((function(){t.$store.commit("increasePopularity",t.id)}),3e3)}}},_=v,y=(n("788c"),Object(m["a"])(_,r,i,!1,null,null,null));e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-65d7d158.1851d478.js.map