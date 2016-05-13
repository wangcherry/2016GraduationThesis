(function(){var g,aa=aa||{},m=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function ca(a){a.getInstance=function(){return a.P?a.P:a.P=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ea(a){return"array"==da(a)}
function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function v(a){return"string"==typeof a}
function ga(a){return"number"==typeof a}
function ha(a){return"function"==da(a)}
function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ja(a){return a[ka]||(a[ka]=++la)}
var ka="closure_uid_"+(1E9*Math.random()>>>0),la=0;function ma(a,b,c){return a.call.apply(a.bind,arguments)}
function na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ma:na;return w.apply(null,arguments)}
function oa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var x=Date.now||function(){return+new Date};
function y(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Re=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}}
;function pa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,pa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(pa,Error);pa.prototype.name="CustomError";var qa;var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function sa(a){return decodeURIComponent(a.replace(/\+/g," "))}
var ta=/&/g,ua=/</g,va=/>/g,wa=/"/g,xa=/'/g,ya=/\x00/g,za=/[\x00&<>"']/;function Aa(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=m.document.createElement("div");return a.replace(Ba,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(f=String.fromCharCode(h))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})}
function Ca(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}
var Ba=/&([^;\s<&]+);?/g,Da={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Ea={"'":"\\'"};
function Fa(a,b){for(var c=0,d=ra(String(a)).split("."),e=ra(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",l=e[h]||"",n=RegExp("(\\d*)(\\D*)","g"),u=RegExp("(\\d*)(\\D*)","g");do{var ba=n.exec(k)||["","",""],R=u.exec(l)||["","",""];if(0==ba[0].length&&0==R[0].length)break;c=Ga(0==ba[1].length?0:parseInt(ba[1],10),0==R[1].length?0:parseInt(R[1],10))||Ga(0==ba[2].length,0==R[2].length)||Ga(ba[2],R[2])}while(0==c)}return c}
function Ga(a,b){return a<b?-1:a>b?1:0}
function Ha(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ia=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(v(a))return v(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ja=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=v(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},Ka=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=v(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},La=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},Ma=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Na(a,b,c){b=Oa(a,b,c);return 0>b?null:v(a)?a.charAt(b):a[b]}
function Oa(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function A(a,b){return 0<=Ia(a,b)}
function Pa(a,b){A(a,b)||a.push(b)}
function Qa(a,b){var c=Ia(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Ra(a,b){var c=Oa(a,b,void 0);0<=c&&Array.prototype.splice.call(a,c,1)}
function Sa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Ta(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ua(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(fa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Va(a,b,c,d){return Array.prototype.splice.apply(a,Wa(arguments,1))}
function Wa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Xa(a,b){return a>b?1:a<b?-1:0}
;function Ya(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Za(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function $a(a){var b=0,c;for(c in a)b++;return b}
function ab(a,b){return bb(a,b)}
function cb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function db(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function eb(a){return null!==a&&"withCredentials"in a}
function bb(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function fb(a){var b=gb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function hb(a){for(var b in a)return!1;return!0}
function ib(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function jb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function kb(a){var b=da(a);if("object"==b||"array"==b){if(ha(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=kb(a[c]);return b}return a}
var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<lb.length;f++)c=lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var nb;a:{var ob=m.navigator;if(ob){var pb=ob.userAgent;if(pb){nb=pb;break a}}nb=""}function B(a){return-1!=nb.indexOf(a)}
;function qb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
;function rb(){this.b=""}
rb.prototype.Nb=!0;rb.prototype.Ib=function(){return this.b};
rb.prototype.toString=function(){return"Const{"+this.b+"}"};
function sb(a){var b=new rb;b.b=a;return b}
;function tb(){this.b="";this.f=ub}
tb.prototype.Nb=!0;tb.prototype.Ib=function(){return this.b};
function vb(a){if(a instanceof tb&&a.constructor===tb&&a.f===ub)return a.b;da(a);return"type_error:SafeUrl"}
var wb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function xb(a){if(a instanceof tb)return a;a=a.Nb?a.Ib():String(a);wb.test(a)||(a="about:invalid#zClosurez");return yb(a)}
var ub={};function yb(a){var b=new tb;b.b=a;return b}
yb("about:blank");function zb(){this.b="";this.f=Bb;this.g=null}
zb.prototype.Nb=!0;zb.prototype.Ib=function(){return this.b};
function Cb(a){if(a instanceof zb&&a.constructor===zb&&a.f===Bb)return a.b;da(a);return"type_error:SafeHtml"}
var Bb={};function Db(a,b){var c=new zb;c.b=a;c.g=b;return c}
Db("<!DOCTYPE html>",0);Db("",0);Db("<br>",0);function Eb(a,b){var c;c=b instanceof tb?b:xb(b);a.href=vb(c)}
;function Fb(a,b,c){a&&(a.dataset?a.dataset[Hb(b)]=c:a.setAttribute("data-"+b,c))}
function C(a,b){return a?a.dataset?a.dataset[Hb(b)]:a.getAttribute("data-"+b):null}
function Ib(a,b){a&&(a.dataset?delete a.dataset[Hb(b)]:a.removeAttribute("data-"+b))}
var Jb={};function Hb(a){return Jb[a]||(Jb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Kb(a){m.setTimeout(function(){throw a;},0)}
var Lb;
function Mb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.dc;c.dc=null;a()}};
return function(a){d.next={dc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function Nb(a,b,c){this.h=c;this.g=a;this.i=b;this.f=0;this.b=null}
Nb.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function Ob(a,b){a.i(b);a.f<a.h&&(a.f++,b.next=a.b,a.b=b)}
;function Pb(){this.f=this.b=null}
var Rb=new Nb(function(){return new Qb},function(a){a.reset()},100);
Pb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Qb(){this.next=this.scope=this.b=null}
Qb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Qb.prototype.reset=function(){this.next=this.scope=this.b=null};function Sb(a,b){Tb||Ub();Vb||(Tb(),Vb=!0);var c=Wb,d=Rb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Tb;function Ub(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);Tb=function(){a.then(Xb)}}else Tb=function(){var a=Xb;
!ha(m.setImmediate)||m.Window&&m.Window.prototype&&!B("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Lb||(Lb=Mb()),Lb(a)):m.setImmediate(a)}}
var Vb=!1,Wb=new Pb;function Xb(){for(var a=null;a=Wb.remove();){try{a.b.call(a.scope)}catch(b){Kb(b)}Ob(Rb,a)}Vb=!1}
;function D(){this.Ga=this.Ga;this.V=this.V}
D.prototype.Ga=!1;D.prototype.isDisposed=function(){return this.Ga};
D.prototype.dispose=function(){this.Ga||(this.Ga=!0,this.w())};
function Yb(a,b){a.Ga?b.call(void 0):(a.V||(a.V=[]),a.V.push(p(void 0)?w(b,void 0):b))}
D.prototype.w=function(){if(this.V)for(;this.V.length;)this.V.shift()()};
function E(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Zb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];fa(d)?Zb.apply(null,d):E(d)}}
;function F(a){D.call(this);this.h=1;this.f=[];this.g=0;this.b=[];this.$={};this.i=!!a}
y(F,D);g=F.prototype;g.subscribe=function(a,b,c){var d=this.$[a];d||(d=this.$[a]=[]);var e=this.h;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.h=e+3;d.push(e);return e};
g.unsubscribe=function(a,b,c){if(a=this.$[a]){var d=this.b;if(a=Na(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.ha(a)}return!1};
g.ha=function(a){var b=this.b[a];if(b){var c=this.$[b];0!=this.g?(this.f.push(a),this.b[a+1]=t):(c&&Qa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
g.u=function(a,b){var c=this.$[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.i)for(e=0;e<c.length;e++){var h=c[e];$b(this.b[h+1],this.b[h+2],d)}else{this.g++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.b[h+1].apply(this.b[h+2],d)}finally{if(this.g--,0<this.f.length&&0==this.g)for(;c=this.f.pop();)this.ha(c)}}return 0!=e}return!1};
function $b(a,b,c){Sb(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.$[a];b&&(z(b,this.ha,this),delete this.$[a])}else this.b.length=0,this.$={}};
g.N=function(a){if(a){var b=this.$[a];return b?b.length:0}a=0;for(b in this.$)a+=this.N(b);return a};
g.w=function(){F.A.w.call(this);this.clear();this.f.length=0};var ac=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",ac,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var bc=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",bc,void 0);function cc(a){dc(ac,arguments)}
function G(a,b){return a in ac?ac[a]:b}
function H(a,b){ha(a)&&(a=ec(a));return window.setTimeout(a,b)}
function I(a){window.clearTimeout(a)}
function ec(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw fc(b),b;}}:a}
function fc(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=G("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),cc("ERRORS",c))}
function gc(){var a={},b="FLASH_UPGRADE"in bc?bc.FLASH_UPGRADE:'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>';if(b)for(var c in a)b=b.replace(new RegExp("\\$"+c,"gi"),function(){return a[c]});
return b}
function dc(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var hc=window.performance&&window.performance.timing&&window.performance.now&&window.__yt_experimental_now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},ic="Microsoft Internet Explorer"==navigator.appName;var jc=r("yt.pubsub.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.ha;F.prototype.publish=F.prototype.u;F.prototype.clear=F.prototype.clear;q("yt.pubsub.instance_",jc,void 0);var kc=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",kc,void 0);var lc=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",lc,void 0);var mc=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",mc,void 0);
var nc=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",nc,void 0);function oc(a,b,c){var d=qc();if(d){var e=d.subscribe(a,function(){if(!nc||nc!=e){var d=arguments,h;h=function(){kc[e]&&b.apply(c||window,d)};
try{mc[a]?h():H(h,0)}catch(k){fc(k)}}},c);
kc[e]=!0;lc[a]||(lc[a]=[]);lc[a].push(e);return e}return 0}
function rc(a){var b=qc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete kc[a]}))}
function J(a,b){var c=qc();return c?c.publish.apply(c,arguments):!1}
function sc(a,b){mc[a]=!0;var c=qc();c&&c.publish.apply(c,arguments);mc[a]=!1}
function tc(a){lc[a]&&(a=lc[a],z(a,function(a){kc[a]&&delete kc[a]}),a.length=0)}
function uc(a){var b=qc();if(b)if(b.clear(a),a)tc(a);else for(var c in lc)tc(c)}
function qc(){return r("yt.pubsub.instance_")}
;function vc(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(wc,""),c=c.replace(xc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else yc(a,b)}
function yc(a,b){var c=zc(a),d=document.getElementById(c),e=d&&C(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=oc(c,b),h=""+ja(b);Ac[h]=e}f||(d=Bc(a,c,function(){C(d,"loaded")||(Fb(d,"loaded","true"),J(c),H(oa(uc,c),0))}))}}
function Bc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Cc(a,b){if(a&&b){var c=""+ja(b);(c=Ac[c])&&rc(c)}}
function zc(a){var b=document.createElement("a");Eb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ha(a)}
var wc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,xc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Ac={};var Dc=null;function Ec(){var a=G("BG_I",null),b=G("BG_IU",null),c=G("BG_P",void 0);b?vc(b,function(){Dc=new botguard.bg(c)}):a&&(eval(a),Dc=new botguard.bg(c))}
function Fc(){return null!=Dc}
function Gc(){return Dc?Dc.invoke():null}
;function Hc(a,b){return Db(b,null)}
;var Ic="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Jc(){}
Jc.prototype.next=function(){throw Ic;};
Jc.prototype.ma=function(){return this};
function Kc(a){if(a instanceof Jc)return a;if("function"==typeof a.ma)return a.ma(!1);if(fa(a)){var b=0,c=new Jc;c.next=function(){for(;;){if(b>=a.length)throw Ic;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Lc(a,b,c){if(fa(a))try{z(a,b,c)}catch(d){if(d!==Ic)throw d;}else{a=Kc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Ic)throw d;}}}
function Mc(a){if(fa(a))return Ta(a);a=Kc(a);var b=[];Lc(a,function(a){b.push(a)});
return b}
;function Nc(a,b){this.f={};this.b=[];this.wa=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Nc?(c=a.ia(),d=a.O()):(c=db(a),d=cb(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}
g=Nc.prototype;g.N=function(){return this.g};
g.O=function(){Oc(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.f[this.b[b]]);return a};
g.ia=function(){Oc(this);return this.b.concat()};
g.Sa=function(a){for(var b=0;b<this.b.length;b++){var c=this.b[b];if(Pc(this.f,c)&&this.f[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.g!=a.N())return!1;var c=b||Qc;Oc(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Qc(a,b){return a===b}
g.isEmpty=function(){return 0==this.g};
g.clear=function(){this.f={};this.wa=this.g=this.b.length=0};
g.remove=function(a){return Pc(this.f,a)?(delete this.f[a],this.g--,this.wa++,this.b.length>2*this.g&&Oc(this),!0):!1};
function Oc(a){if(a.g!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Pc(a.f,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.g!=a.b.length){for(var e={},c=b=0;b<a.b.length;)d=a.b[b],Pc(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
g.get=function(a,b){return Pc(this.f,a)?this.f[a]:b};
g.set=function(a,b){Pc(this.f,a)||(this.g++,this.b.push(a),this.wa++);this.f[a]=b};
g.forEach=function(a,b){for(var c=this.ia(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Nc(this)};
g.ma=function(a){Oc(this);var b=0,c=this.wa,d=this,e=new Jc;e.next=function(){if(c!=d.wa)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw Ic;var e=d.b[b++];return a?e:d.f[e]};
return e};
function Pc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Rc(a){return a.N&&"function"==typeof a.N?a.N():fa(a)||v(a)?a.length:$a(a)}
function Sc(a){if(a.O&&"function"==typeof a.O)return a.O();if(v(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return cb(a)}
function Tc(a){if(a.ia&&"function"==typeof a.ia)return a.ia();if(!a.O||"function"!=typeof a.O){if(fa(a)||v(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return db(a)}}
function Uc(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(fa(a)||v(a))z(a,b,c);else for(var d=Tc(a),e=Sc(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}
function Vc(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(fa(a)||v(a))return Ma(a,b,void 0);for(var c=Tc(a),d=Sc(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function Wc(a){this.b=new Nc;a&&Xc(this,a)}
function Yc(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ja(a):b.substr(0,1)+a}
g=Wc.prototype;g.N=function(){return this.b.N()};
function Xc(a,b){for(var c=Sc(b),d=c.length,e=0;e<d;e++){var f=c[e];a.b.set(Yc(f),f)}}
g.remove=function(a){return this.b.remove(Yc(a))};
g.clear=function(){this.b.clear()};
g.isEmpty=function(){return this.b.isEmpty()};
g.contains=function(a){a=Yc(a);return Pc(this.b.f,a)};
g.O=function(){return this.b.O()};
g.clone=function(){return new Wc(this)};
g.equals=function(a){return this.N()==Rc(a)&&Zc(this,a)};
function Zc(a,b){var c=Rc(b);if(a.N()>c)return!1;!(b instanceof Wc)&&5<c&&(b=new Wc(b));return Vc(a,function(a){var c=b;return c.contains&&"function"==typeof c.contains?c.contains(a):c.Sa&&"function"==typeof c.Sa?c.Sa(a):fa(c)||v(c)?A(c,a):bb(c,a)})}
g.ma=function(){return this.b.ma(!1)};function $c(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;var ad=B("Opera"),K=B("Trident")||B("MSIE"),bd=B("Edge"),cd=B("Gecko")&&!(-1!=nb.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),dd=-1!=nb.toLowerCase().indexOf("webkit")&&!B("Edge"),ed=B("Macintosh"),fd=B("Windows");function gd(){var a=m.document;return a?a.documentMode:void 0}
var hd;a:{var id="",jd=function(){var a=nb;if(cd)return/rv\:([^\);]+)(\)|;)/.exec(a);if(bd)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(dd)return/WebKit\/(\S+)/.exec(a);if(ad)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
jd&&(id=jd?jd[1]:"");if(K){var kd=gd();if(null!=kd&&kd>parseFloat(id)){hd=String(kd);break a}}hd=id}var ld=hd,md={};function nd(a){return md[a]||(md[a]=0<=Fa(ld,a))}
function od(a){return Number(pd)>=a}
var qd=m.document,pd=qd&&K?gd()||("CSS1Compat"==qd.compatMode?parseInt(ld,10):5):void 0;function rd(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function sd(a){return eval("("+a+")")}
function L(a){return td(new ud(void 0),a)}
function ud(a){this.b=a}
function td(a,b){var c=[];vd(a,b,c);return c.join("")}
function vd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],vd(a,a.b?a.b.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),wd(d,c),c.push(":"),vd(a,a.b?a.b.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":wd(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var xd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},yd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function wd(a,b){b.push('"',a.replace(yd,function(a){var b=xd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),xd[a]=b);return b}),'"')}
;var zd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Ad(a){return(a=a.match(zd)[3]||null)?decodeURI(a):a}
function Bd(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?sa(h):"")}}
function Cd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Dd(a,b,c){if(ea(b))for(var d=0;d<b.length;d++)Dd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Ed(a,b,c){for(c=c||0;c<b.length;c+=2)Dd(b[c],b[c+1],a);return a}
function Fd(a,b){for(var c in b)Dd(c,b[c],a);return a}
function Gd(a){a=Fd([],a);a[0]="";return a.join("")}
function Hd(a,b){return Cd(2==arguments.length?Ed([a],arguments[1],0):Ed([a],arguments,1))}
function Id(a,b){return Cd(Fd([a],b))}
;function Jd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=sa(e[0]||""),e=sa(e[1]||"");f in b?ea(b[f])?Ua(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Kd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Jd(d[1]||""),e;for(e in b)d[e]=b[e];return Id(a,d)+c}
function Ld(a){a=Ad(a);a=null===a?null:a.split(".").reverse();return(null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:-nocookie)?$/)?!0:!1)||(null===a?!1:"google"==a[1]?!0:"google"==a[2]?"au"==a[0]&&"com"==a[1]?!0:"uk"==a[0]&&"co"==a[1]?!0:!1:!1)}
;var Md=null;"undefined"!=typeof XMLHttpRequest?Md=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Md=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Nd(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Od(a,b,c,d,e,f,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&ec(b)(l)}
var l=Md&&Md();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);h&&(l.withCredentials=!0);f="POST"==c;if(e=Pd(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function Pd(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(zd)[1]||null,e=Ad(a);d&&e?(d=c,c=a.match(zd),d=d.match(zd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Ad(c)==e&&(Number(c.match(zd)[4]||null)||null)==(Number(a.match(zd)[4]||null)||null):!0;for(var f in Qd){if((e=d=G(Qd[f]))&&!(e=c)){var e=f,h=G("CORS_HEADER_WHITELIST")||{},k=Ad(a);e=k?(h=h[k])?A(h,e):!1:!0}e&&(b[f]=d)}return b}
function Rd(a,b){var c=G("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Te&&(!Ad(a)||b.withCredentials||Ad(a)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.J&&b.J[c])}
function Sd(a,b){var c=b.format||"JSON";b.Ue&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=G("XSRF_FIELD_NAME",void 0),e=G("XSRF_TOKEN",void 0),f=b.Ub;f&&(f[d]&&delete f[d],a=Kd(a,f||{}));var h=b.postBody||"",f=b.J;Rd(a,b)&&(f||(f={}),f[d]=e);f&&v(h)&&(d=Jd(h),mb(d,f),h=b.Bc&&"JSON"==b.Bc?JSON.stringify(d):Gd(d));var k=!1,l,n=Od(a,function(a){if(!k){k=!0;l&&I(l);var d=Nd(a),e=null;if(d||400<=a.status&&500>a.status)e=
Td(c,a,b.Se);if(d)a:{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.Z&&b.Z.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Qb&&b.Qb.call(f,a,e)}},b.method,h,b.headers,b.responseType,b.withCredentials);
b.Ea&&0<b.timeout&&(l=H(function(){k||(k=!0,n.abort(),I(l),b.Ea.call(b.context||m,n))},b.timeout));
return n}
function Td(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=sd(a));break;case "XML":if(b=(b=b.responseXML)?Ud(b):null)d={},z(b.getElementsByTagName("*"),function(a){d[a.tagName]=Vd(a)})}c&&Wd(d);
return d}
function Wd(a){if(ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=Hc(sb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Wd(a[b])}}
function Ud(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Vd(a){var b="";z(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Qd={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"XSRF_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var Xd={},Yd=0;function Zd(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,0,b):void 0===b?(a(),NaN):H(a,b||0)}
;var $d=[],ae=!1;function be(){function a(){ae=!0;"google_ad_status"in window?cc("DCLKSTAT",1):cc("DCLKSTAT",2)}
vc("//static.doubleclick.net/instream/ad_status.js",a);$d.push(Zd(function(){ae||"google_ad_status"in window||(Cc("//static.doubleclick.net/instream/ad_status.js",a),cc("DCLKSTAT",3))},5E3))}
function ce(){return parseInt(G("DCLKSTAT",0),10)}
;function de(a){if(a.classList)return a.classList;a=a.className;return v(a)&&a.match(/\S+/g)||[]}
function ee(a,b){return a.classList?a.classList.contains(b):A(de(a),b)}
function fe(a,b){a.classList?a.classList.add(b):ee(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function ge(a,b){a.classList?a.classList.remove(b):ee(a,b)&&(a.className=Ja(de(a),function(a){return a!=b}).join(" "))}
function he(a,b,c){c?fe(a,b):ge(a,b)}
;function ie(a,b){this.x=p(a)?a:0;this.y=p(b)?b:0}
ie.prototype.clone=function(){return new ie(this.x,this.y)};
ie.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
ie.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
ie.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function je(a,b){this.width=a;this.height=b}
g=je.prototype;g.clone=function(){return new je(this.width,this.height)};
g.Bb=function(){return this.width*this.height};
g.aspectRatio=function(){return this.width/this.height};
g.isEmpty=function(){return!this.Bb()};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};!cd&&!K||K&&od(9)||cd&&nd("1.9.1");var ke=K&&!nd("9");function le(a){return a?new me(ne(a)):qa||(qa=new me)}
function oe(a){return v(a)?document.getElementById(a):a}
function pe(a){var b=document;return v(a)?b.getElementById(a):a}
function qe(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):re(a,void 0)}
function re(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var h=c.getElementsByClassName(a);return h}h=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=h[d];d++){var k=c.className;"function"==typeof k.split&&A(k.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return h}
function se(a){a=a.document;a=te(a)?a.documentElement:a.body;return new je(a.clientWidth,a.clientHeight)}
function ue(a){var b=a.scrollingElement?a.scrollingElement:!dd&&te(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return K&&nd("10")&&a.pageYOffset!=b.scrollTop?new ie(b.scrollLeft,b.scrollTop):new ie(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function te(a){return"CSS1Compat"==a.compatMode}
function ve(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function we(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function xe(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function ne(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function ye(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{ve(a);var c=ne(a);a.appendChild(c.createTextNode(String(b)))}}
var ze={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Ae={IMG:" ",BR:"\n"};function Be(a){if(ke&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Ce(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");ke||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Ce(a,b,c){if(!(a.nodeName in ze))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Ae)b.push(Ae[a.nodeName]);else for(a=a.firstChild;a;)Ce(a,b,c),a=a.nextSibling}
function De(a){var b=Ee.Tc;return b?Fe(a,function(a){return!b||v(a.className)&&A(a.className.split(/\s+/),b)},!0,void 0):null}
function Fe(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function me(a){this.b=a||m.document||document}
me.prototype.createElement=function(a){return this.b.createElement(a)};
me.prototype.appendChild=function(a,b){a.appendChild(b)};
me.prototype.isElement=function(a){return ia(a)&&1==a.nodeType};
me.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Ge=r("yt.dom.getNextId_");if(!Ge){Ge=function(){return++He};
q("yt.dom.getNextId_",Ge,void 0);var He=0}function Ie(){var a=document,b;La(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;function Je(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ke||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Je.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Je.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Je.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var Ke={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var gb=r("yt.events.listeners_")||{};q("yt.events.listeners_",gb,void 0);var Le=r("yt.events.counter_")||{count:0};q("yt.events.counter_",Le,void 0);function Me(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return fb(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function M(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Me(a,b,c,d);if(e)return e;var e=++Le.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),h;h=f?function(d){d=new Je(d);if(!Fe(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Je(b);
b.currentTarget=a;return c.call(a,b)};
h=ec(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,h,d)):a.attachEvent("on"+b,h);gb[e]=[a,b,c,h,d];return e}
function Ne(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in gb){var c=gb[a],d=c[0],e=c[1],f=c[3],c=c[4];d.removeEventListener?d.removeEventListener(e,f,c):d.detachEvent&&d.detachEvent("on"+e,f);delete gb[a]}}))}
;function Oe(){if(null==r("_lact",window)){var a=parseInt(G("LACT"),10),a=isFinite(a)?x()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Pe();M(document,"keydown",Pe);M(document,"keyup",Pe);M(document,"mousedown",Pe);M(document,"mouseup",Pe);oc("page-mouse",Pe);oc("page-scroll",Pe);oc("page-resize",Pe)}}
function Pe(){null==r("_lact",window)&&(Oe(),r("_lact",window));var a=x();q("_lact",a,window);J("USER_ACTIVE")}
function Qe(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;function Re(){}
;function Se(a){this.b=a||{cookie:""}}
var Te=/\s*;\s*/;g=Se.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Te),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
g.ia=function(){return Ue(this).keys};
g.O=function(){return Ue(this).values};
g.isEmpty=function(){return!this.b.cookie};
g.N=function(){return this.b.cookie?(this.b.cookie||"").split(Te).length:0};
g.Sa=function(a){for(var b=Ue(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=Ue(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Ue(a){a=(a.b.cookie||"").split(Te);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Ve=new Se("undefined"==typeof document?null:document);Ve.f=3950;function We(a,b,c){Ve.set(""+a,b,c,"/","youtube.com")}
;function Xe(a,b,c){var d=G("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=G("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Ad(window.location.href);e&&d.push(e);e=Ad(a);if(A(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=a.match(zd),d=f[5],e=f[6],f=f[7],h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))e=G("ST_BASE36",!0),f=G("ST_SHORT",!0)?"ST-":"s_tempdata-",d=f=e?f+Ha(d).toString(36):f+Ha(d),e=b?Gd(b):"",We(d,e,5),b&&(b=b.itct||b.ved,d=r("yt.logging.screenreporter.storeParentElement"),
b&&d&&d(new Re))}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):(c=window.location,a=Id(a,{})+"",a=a instanceof tb?a:xb(a),c.href=vb(a));return!0}
;function Ye(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||jb(Ze);this.assets=a.assets||{};this.attrs=a.attrs||jb($e);this.params=a.params||jb(af);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Ze={enablejsapi:1},$e={},af={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function bf(a){a instanceof Ye||(a=new Ye(a));return a}
Ye.prototype.clone=function(){var a=new Ye,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==da(c)?a[b]=jb(c):a[b]=c}return a};function cf(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=cf.prototype;g.getHeight=function(){return this.bottom-this.top};
g.clone=function(){return new cf(this.top,this.right,this.bottom,this.left)};
g.contains=function(a){return this&&a?a instanceof cf?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function df(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
g=df.prototype;g.clone=function(){return new df(this.left,this.top,this.width,this.height)};
g.contains=function(a){return a instanceof df?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
g.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ef(a){ef[" "](a);return a}
ef[" "]=t;function ff(a,b){var c=ne(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function gf(a,b){return ff(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function hf(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}K&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function jf(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function kf(a){var b=lf;if("none"!=gf(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function lf(a){var b=a.offsetWidth,c=a.offsetHeight,d=dd&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new je(b,c):(a=hf(a),new je(a.right-a.left,a.bottom-a.top))}
function mf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function nf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?mf(a,c):0}
var of={thin:2,medium:4,thick:6};function pf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in of?of[c]:mf(a,c)}
;var qf=B("Firefox"),rf=$c()||B("iPod"),sf=B("iPad"),tf=B("Android")&&!(qb()||B("Firefox")||B("Opera")||B("Silk")),uf=qb(),vf=B("Safari")&&!(qb()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))&&!($c()||B("iPad")||B("iPod"));function wf(){var a;if(a=Ve.get("PREF",void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(xf[d]=c.toString())}}}
ca(wf);var xf=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",xf,void 0);function yf(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function zf(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function Af(a){a=void 0!==xf[a]?xf[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
wf.prototype.get=function(a,b){zf(a);yf(a);var c=void 0!==xf[a]?xf[a].toString():null;return null!=c?c:b?b:""};
wf.prototype.set=function(a,b){zf(a);yf(a);if(null==b)throw"ExpectedNotNull";xf[a]=b.toString()};
function Bf(a,b){return!!((Af("f"+(Math.floor(b/31)+1))||0)&1<<b%31)}
wf.prototype.remove=function(a){zf(a);yf(a);delete xf[a]};
wf.prototype.clear=function(){xf={}};function Cf(a,b){(a=oe(a))&&a.style&&(a.style.display=b?"":"none",he(a,"hid",!b))}
function Df(a){z(arguments,function(a){!fa(a)||a instanceof Element?Cf(a,!0):z(a,function(a){Df(a)})})}
function Ef(a){z(arguments,function(a){!fa(a)||a instanceof Element?Cf(a,!1):z(a,function(a){Ef(a)})})}
;function Ff(){this.g=this.f=this.b=0;this.h="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.h=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var h,k,l,n;if(ic)try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(u){h=null}else l=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),h=l.appendChild(n);if(h&&"GetVariable"in h)try{k=h.GetVariable("$version")}catch(u){k=""}l&&n&&l.removeChild(n);(h=k||"")?(h=h.split(" ")[1].split(","),h=[parseInt(h[0],10)||0,parseInt(h[1],10)||0,parseInt(h[2],
10)||0]):h=[0,0,0];this.b=h[0];this.f=h[1];this.g=h[2]}}
ca(Ff);function Gf(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
function Hf(a){return-1<a.h.indexOf("Gnash")&&-1==a.h.indexOf("AVM2")||9==a.b&&1==a.f||9==a.b&&0==a.f&&1==a.g?!1:9<=a.b}
function If(a){return fd?!Gf(a,11,2):ed?!Gf(a,11,3):!Hf(a)}
;function Jf(a,b,c){if(b){a=v(a)?pe(a):a;var d=jb(c.attrs);d.tabindex=0;var e=jb(c.params);e.flashvars=Gd(c.args);if(ic){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=document.createElement("object");for(var f in d)b.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=document.createElement("embed");b.setAttribute("name",d.id);for(f in d)b.setAttribute(f,
d[f]);for(f in e)b.setAttribute(f,e[f])}e=document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}}
function Kf(a,b,c){if(a&&a.attrs&&a.attrs.id){a=bf(a);var d=!!b,e=oe(a.attrs.id),f=e?e.parentNode:null;if(e&&f){if(window!=window.top){var h=null;if(document.referrer){var k=document.referrer.substring(0,128);Ld(k)||(h=k)}else h="unknown";h&&(d=!0,a.args.framer=h)}h=Ff.getInstance();if(Gf(h,a.minVersion)){var k=Lf(a,h),l="";-1<navigator.userAgent.indexOf("Sony/COM2")||(l=e.getAttribute("src")||e.movie);(l!=k||d)&&Jf(f,k,a);If(h)&&Mf()}else Nf(f,a,h);c&&c()}else H(function(){Kf(a,b,c)},50)}}
function Nf(a,b,c){0==c.b&&b.fallback?b.fallback():0==c.b&&b.fallbackMessage?b.fallbackMessage():a.innerHTML='<div id="flash-upgrade">'+gc()+"</div>"}
function Lf(a,b){return Hf(b)&&a.url||(-1<navigator.userAgent.indexOf("Sony/COM2")&&!Gf(b,9,1,58)?!1:!0)&&a.urlV9As2||a.url}
function Mf(){var a=oe("flash10-promo-div"),b=Bf(wf.getInstance(),107);a&&!b&&Df(a)}
;function Of(a){if(window.spf){var b=a.match(Pf);spf.style.load(a,b?b[1]:"",void 0)}else Qf(a)}
function Qf(a){var b=Rf(a),c=document.getElementById(b),d=c&&C(c,"loaded");d||c&&!d||(c=Sf(a,b,function(){C(c,"loaded")||(Fb(c,"loaded","true"),J(b),H(oa(uc,b),0))}))}
function Sf(a,b,c){var d=document.createElement("link");d.id=b;d.rel="stylesheet";d.onload=function(){c&&setTimeout(c,0)};
Eb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Rf(a){var b=document.createElement("a");Eb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ha(a)}
var Pf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var Tf;var Uf=nb,Uf=Uf.toLowerCase();if(-1!=Uf.indexOf("android")){var Vf=Uf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Vf)Tf=Number(Vf[1]);else{var Wf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},Xf=Uf.match("("+db(Wf).join("|")+")");Tf=Xf?Wf[Xf[0]]:0}}else Tf=void 0;var Yf=rf||sf;var Zf=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],$f=['audio/mp4; codecs="mp4a.40.2"'];function ag(a){D.call(this);this.b=[];this.f=a||this}
y(ag,D);function bg(a,b,c,d){d=ec(w(d,a.f));b.addEventListener(c,d);a.b.push({target:b,name:c,Cb:d})}
ag.prototype.sb=function(a){for(var b=0;b<this.b.length;b++)if(this.b[b]==a){this.b.splice(b,1);a.target.removeEventListener(a.name,a.Cb);break}};
function cg(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.Cb)}}
ag.prototype.w=function(){cg(this);ag.A.w.call(this)};function dg(a){return G("EXPERIMENT_FLAGS",{})[a]}
;function eg(){this.b={apiaryHost:G("APIARY_HOST",void 0),Qe:G("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:G("GAPI_HINT_OVERRIDE"),gapiHintParams:G("GAPI_HINT_PARAMS",void 0),innertubeApiKey:G("INNERTUBE_API_KEY",void 0),innertubeApiVersion:G("INNERTUBE_API_VERSION",void 0),rd:G("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:G("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),td:G("INNERTUBE_CONTEXT_HL",void 0),sd:G("INNERTUBE_CONTEXT_GL",void 0),te:G("XHR_APIARY_HOST",void 0)}}
;var fg={log_event:"events",log_interaction:"interactions"},gg={},hg={},ig=0,jg=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",jg,void 0);
function kg(){I(ig);if(!hb(jg)){for(var a in jg){var b=gg[a];if(!b){var c=hg[a];if(!c)continue;b=new c;gg[a]=b}c=b.b;c={client:{hl:c.td,gl:c.sd,clientName:c.rd,clientVersion:c.innertubeContextClientVersion}};G("DELEGATED_SESSION_ID")&&(c.user={onBehalfOfUser:G("DELEGATED_SESSION_ID")});c={context:c};c.requestTimeMs=Math.round(hc());c[fg[a]]=jg[a];var d=b,b={},d="//"+d.b.te+("/youtubei/"+d.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+d.b.innertubeApiKey,c={headers:{"Content-Type":"application/json",
"X-Goog-Visitor-Id":G("VISITOR_DATA")},J:c,Bc:"JSON",Ea:b.Ea,Z:b.Z,onError:b.onError,timeout:b.timeout,method:"POST"};c.J||(c.J={});Sd(d,c);delete jg[a]}hb(jg)||lg()}}
function lg(){I(ig);ig=H(kg,G("VISIBILITY_TIMEOUT",1E4))}
;function mg(a,b){var c={};c.eventTimeMs=Math.round(hc());c[a]=b;jg.log_event=jg.log_event||[];var d=jg.log_event;d.push(c);hg.log_event=eg;20<=d.length?kg():lg()}
;function ng(a,b){this.f=this.o=this.h="";this.j=null;this.i=this.b="";this.l=!1;var c;a instanceof ng?(this.l=p(b)?b:a.l,og(this,a.h),this.o=a.o,pg(this,a.f),qg(this,a.j),this.b=a.b,rg(this,a.g.clone()),this.i=a.i):a&&(c=String(a).match(zd))?(this.l=!!b,og(this,c[1]||"",!0),this.o=sg(c[2]||""),pg(this,c[3]||"",!0),qg(this,c[4]),this.b=sg(c[5]||"",!0),rg(this,c[6]||"",!0),this.i=sg(c[7]||"")):(this.l=!!b,this.g=new tg(null,0,this.l))}
ng.prototype.toString=function(){var a=[],b=this.h;b&&a.push(ug(b,vg,!0),":");var c=this.f;if(c||"file"==b)a.push("//"),(b=this.o)&&a.push(ug(b,vg,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.j,null!=c&&a.push(":",String(c));if(c=this.b)this.f&&"/"!=c.charAt(0)&&a.push("/"),a.push(ug(c,"/"==c.charAt(0)?wg:xg,!0));(c=this.g.toString())&&a.push("?",c);(c=this.i)&&a.push("#",ug(c,yg));return a.join("")};
ng.prototype.resolve=function(a){var b=this.clone(),c=!!a.h;c?og(b,a.h):c=!!a.o;c?b.o=a.o:c=!!a.f;c?pg(b,a.f):c=null!=a.j;var d=a.b;if(c)qg(b,a.j);else if(c=!!a.b){if("/"!=d.charAt(0))if(this.f&&!this.b)d="/"+d;else{var e=b.b.lastIndexOf("/");-1!=e&&(d=b.b.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.b=d:c=""!==a.g.toString();c?rg(b,sg(a.g.toString())):c=!!a.i;c&&(b.i=a.i);return b};
ng.prototype.clone=function(){return new ng(this)};
function og(a,b,c){a.h=c?sg(b,!0):b;a.h&&(a.h=a.h.replace(/:$/,""))}
function pg(a,b,c){a.f=c?sg(b,!0):b}
function qg(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.j=b}else a.j=null}
function rg(a,b,c){b instanceof tg?(a.g=b,zg(a.g,a.l)):(c||(b=ug(b,Ag)),a.g=new tg(b,0,a.l))}
function N(a,b,c){a.g.set(b,c)}
function Bg(a,b,c){ea(c)||(c=[String(c)]);Cg(a.g,b,c)}
function Dg(a){N(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^x()).toString(36));return a}
function Eg(a){return a instanceof ng?a.clone():new ng(a,void 0)}
function Fg(a,b,c,d){var e=new ng(null,void 0);a&&og(e,a);b&&pg(e,b);c&&qg(e,c);d&&(e.b=d);return e}
function sg(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function ug(a,b,c){return v(a)?(a=encodeURI(a).replace(b,Gg),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Gg(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var vg=/[#\/\?@]/g,xg=/[\#\?:]/g,wg=/[\#\?]/g,Ag=/[\#\?@]/g,yg=/#/g;function tg(a,b,c){this.f=this.b=null;this.g=a||null;this.h=!!c}
function Hg(a){a.b||(a.b=new Nc,a.f=0,a.g&&Bd(a.g,function(b,c){Ig(a,sa(b),c)}))}
g=tg.prototype;g.N=function(){Hg(this);return this.f};
function Ig(a,b,c){Hg(a);a.g=null;b=Jg(a,b);var d=a.b.get(b);d||a.b.set(b,d=[]);d.push(c);a.f=a.f+1}
g.remove=function(a){Hg(this);a=Jg(this,a);return Pc(this.b.f,a)?(this.g=null,this.f=this.f-this.b.get(a).length,this.b.remove(a)):!1};
g.clear=function(){this.b=this.g=null;this.f=0};
g.isEmpty=function(){Hg(this);return 0==this.f};
function Kg(a,b){Hg(a);b=Jg(a,b);return Pc(a.b.f,b)}
g.Sa=function(a){var b=this.O();return A(b,a)};
g.ia=function(){Hg(this);for(var a=this.b.O(),b=this.b.ia(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.O=function(a){Hg(this);var b=[];if(v(a))Kg(this,a)&&(b=Sa(b,this.b.get(Jg(this,a))));else{a=this.b.O();for(var c=0;c<a.length;c++)b=Sa(b,a[c])}return b};
g.set=function(a,b){Hg(this);this.g=null;a=Jg(this,a);Kg(this,a)&&(this.f=this.f-this.b.get(a).length);this.b.set(a,[b]);this.f=this.f+1;return this};
g.get=function(a,b){var c=a?this.O(a):[];return 0<c.length?String(c[0]):b};
function Cg(a,b,c){a.remove(b);0<c.length&&(a.g=null,a.b.set(Jg(a,b),Ta(c)),a.f=a.f+c.length)}
g.toString=function(){if(this.g)return this.g;if(!this.b)return"";for(var a=[],b=this.b.ia(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.O(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.g=a.join("&")};
g.clone=function(){var a=new tg;a.g=this.g;this.b&&(a.b=this.b.clone(),a.f=this.f);return a};
function Jg(a,b){var c=String(b);a.h&&(c=c.toLowerCase());return c}
function zg(a,b){b&&!a.h&&(Hg(a),a.g=null,a.b.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),Cg(this,e,a))},a));
a.h=b}
g.extend=function(a){for(var b=0;b<arguments.length;b++)Uc(arguments[b],function(a,b){Ig(this,b,a)},this)};var Lg="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),Mg="";
function Ng(a){return a&&a==Mg?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+Lg.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?(Mg=a,!0):!1}
;var Og={},Pg=0,Qg=r("yt.net.ping.workerUrl_")||null;q("yt.net.ping.workerUrl_",Qg,void 0);function Rg(a){var b=new Image,c=""+Pg++;Og[c]=b;b.onload=b.onerror=function(){delete Og[c]};
b.src=a}
;function O(a,b){this.version=a;this.args=b}
function Sg(a){if(!a.wa){var b={};a.call(b);a.wa=b.version}return a.wa}
function Tg(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Sg(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function P(a,b){this.topic=a;this.b=b}
P.prototype.toString=function(){return this.topic};var Ug=r("yt.pubsub2.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.ha;F.prototype.publish=F.prototype.u;F.prototype.clear=F.prototype.clear;q("yt.pubsub2.instance_",Ug,void 0);var Vg=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Vg,void 0);var Wg=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Wg,void 0);var Xg=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Xg,void 0);
q("yt.pubsub2.skipSubKey_",null,void 0);function Q(a,b){var c=Yg();c&&c.publish.call(c,a.toString(),a,b)}
function Zg(a,b,c){var d=Yg();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var k=function(){if(Vg[e])try{if(h&&a instanceof P&&a!=d)try{h=Tg(a.b,h)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,h)}catch(k){fc(k)}};
Xg[a.toString()]?r("yt.scheduler.instance")?Zd(k,void 0):H(k,0):k()}});
Vg[e]=!0;Wg[a.toString()]||(Wg[a.toString()]=[]);Wg[a.toString()].push(e);return e}
function $g(a){var b=Yg();b&&(ga(a)&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete Vg[a]}))}
function Yg(){return r("yt.pubsub2.instance_")}
;var ah=x().toString();var S=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function bh(a){O.call(this,1,arguments)}
y(bh,O);var ch=new P("timing-sent",bh);function dh(a){var b=a||window;if(!(b.performance&&b.performance.timing&&b.performance.getEntriesByType))return{qb:0,Jc:0};a=se(b||window);for(var c=[],d=b.document.getElementsByTagName("*"),e=0,f=d.length;e<f;e++){var h=d[e];if("IMG"==h.tagName||"IFRAME"==h.tagName){var k=eh(h,h.src,a);if(k){if("IFRAME"==h.tagName){var l;try{l=dh(h.contentWindow).qb}catch(n){l=0}0<l&&(k.timing=l)}c.push(k)}}(k=b.getComputedStyle(h)["background-image"])&&(k=fh.exec(k))&&1<k.length&&(k=eh(h,k[1],a))&&c.push(k)}l=b.performance.getEntriesByType("resource");
h=b.performance.getEntriesByType("mark");d={};e=0;for(f=l.length;e<f;e++)k=l[e],d[k.name]=k.responseEnd;e=0;for(f=h.length;e<f;e++)k=h[e],"mark_iframe_loaded: "==k.name.slice(0,20)&&(d[k.name.slice(20)]=k.startTime);e=0;for(f=c.length;e<f;e++)h=c[e],h.timing||(h.timing=d[h.url]||0);b=gh(b,l);a=hh(b,a,c);h=c=0;if(a.length)for(d=l=0,e=a.length;d<e;d++)f=a[d],h=f.timing-h,0<h&&1>l&&(c+=(1-l)*h),h=f.timing,l=f.progress;return{qb:Math.round(c||b),Jc:h}}
function eh(a,b,c){if(b&&a.getBoundingClientRect){var d=a.getBoundingClientRect();a=Math.max(d.top,0);var e=Math.min(d.right,c.width);c=Math.min(d.bottom,c.height);d=Math.max(d.left,0);if(c>a&&e>d)return new ih(a,e,c,d,b)}return null}
function gh(a,b){var c,d=a.performance.timing.navigationStart;if("msFirstPaint"in a.performance.timing)c=a.performance.timing.b-d;else if("chrome"in a&&"loadTimes"in a.chrome){var e=a.chrome.loadTimes(),f=e.firstPaintTime;if(0<f){var h=e.startLoadTime;"requestTime"in e&&(h=e.requestTime);f>=h&&(c=1E3*(f-h))}}if(void 0===c||0>c||12E4<c){c=a.performance.timing.responseStart-d;for(var k={},d=a.document.getElementsByTagName("head")[0].children,e=0,f=d.length;e<f;e++)h=d[e],"SCRIPT"==h.tagName&&h.src&&
!h.async?k[h.src]=!0:"LINK"==h.tagName&&"stylesheet"==h.rel&&h.href&&(k[h.href]=!0);b.some(function(a){if(!k[a.name]||"script"!=a.initiatorType&&"link"!=a.initiatorType)return!0;a=a.responseEnd;if(void 0===c||a>c)c=a})}return Math.max(c,0)||0}
function hh(a,b,c){for(var d={0:0},e=0,f=0,h=c.length;f<h;f++){var k=c[f],l=a;k.timing>a&&(l=k.timing);d[l]||(d[l]=0);k=(k.b-k.h)*(k.g-k.f);d[l]+=k;e+=k}f=b.width*b.height;0<f&&(f=.1*Math.max(f-e,0),a in d||(d[a]=0),d[a]+=f,e+=f);a=[];if(e){for(var n in d)b=new jh(parseFloat(n),d[n]),a.push(b);a.sort(function(a,b){return a.timing-b.timing});
f=d=0;for(h=a.length;f<h;f++)b=a[f],d+=b.Bb,b.progress=d/e}return a}
function ih(a,b,c,d,e){this.b=c;this.f=d;this.g=b;this.h=a;this.url=e}
function jh(a,b){this.Bb=b;this.timing=a}
var fh=/url\(["']?(http[^'"\)]+)['"]?\)/i;var kh={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile_polymer/mobile_polymer"]':"mpj",'link[rel="import"][name="mobile_polymer"]':"mph",'script[name="mobile-polymer-player/mobile-polymer-player"]':"mppj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mppc"},lh=w(S.clearResourceTimings||
S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||t,S),mh=S.mark?function(a){S.mark(a)}:t;
function nh(a){mh(a);oh()[a]=hc();var b=ph();"gel"in b||(b.gel={});b.gel[a]=void 0;if(dg("csi_on_gel")){var c,b=ph().nonce;if(!b){b:{if(window.crypto&&window.crypto.getRandomValues)try{var d=Array(16),e=new Uint8Array(16);window.crypto.getRandomValues(e);for(b=0;b<d.length;b++)d[b]=e[b];c=d;break b}catch(yq){}c=Array(16);for(d=0;16>d;d++){e=x();for(b=0;b<e%23;b++)c[d]=Math.random();c[d]=Math.floor(256*Math.random())}if(ah)for(d=1,e=0;e<ah.length;e++)c[d%16]=c[d%16]^c[(d-1)%16]/4^ah.charCodeAt(e),
d++}d=[];for(e=0;e<c.length;e++)d.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(c[e]&63));b=d.join("");ph().nonce=b}c=b;"_start"==a?mg("latencyActionBaselined",{clientActionNonce:c}):mg("latencyActionTicked",{tickName:a,clientActionNonce:c});a=!0}else a=!1;if(!a&&(c=G("TIMING_ACTION",void 0),a=oh(),r("yt.timing.ready_")&&c&&a._start&&qh())){c=!0;d=G("TIMING_WAIT",[]);if(d.length)for(e=0,b=d.length;e<b;++e)if(!(d[e]in a)){c=!1;break}if(c)if(d=oh(),a=ph().span,e=ph().info,
c=r("yt.timing.reportbuilder_")){if(c=c(d,a,e,void 0))rh(c),sh()}else{var f=G("TIMING_ACTION",void 0),b=G("CSI_SERVICE_NAME","youtube");c={v:2,s:b,action:f};var h;S.now&&S.timing?(h=S.timing.navigationStart+S.now(),h=Math.round(x()-h)):h=null;null!=h&&(e.yt_hrd=h);h=G("TIMING_INFO",{});for(var k in h)e[k]=h[k];k=e.srt;delete e.srt;var l;void 0===d.srt&&(k||0===k||(l=S.timing||{},k=Math.max(0,l.responseStart-l.navigationStart),isNaN(k)&&e.pt&&(k=e.pt)),k||0===k)&&(e.srt=Math.round(k));e.h5jse&&(h=
window.location.protocol+r("ytplayer.config.assets.js"),(h=S.getEntriesByName?S.getEntriesByName(h)[0]:null)?e.h5jse=Math.round(e.h5jse-h.responseEnd):delete e.h5jse);d.aft=qh();h=d._start;if("cold"==e.yt_lt){l||(l=S.timing||{});var n;a:if(n=l,n.msFirstPaint)n=Math.max(0,n.msFirstPaint);else{var u=window.chrome;if(u&&(u=u.loadTimes,ha(u))){var u=u(),ba=1E3*Math.min(u.requestTime||Infinity,u.startLoadTime||Infinity),ba=Infinity===ba?0:n.navigationStart-ba;n=Math.max(0,Math.round(1E3*u.firstPaintTime+
ba)||0);break a}n=0}0<n&&n>h&&(d.fpt=n);n=a||ph().span;u=l.redirectEnd-l.redirectStart;0<u&&(n.rtime_=u);u=l.domainLookupEnd-l.domainLookupStart;0<u&&(n.dns_=u);u=l.connectEnd-l.connectStart;0<u&&(n.tcp_=u);u=l.connectEnd-l.secureConnectionStart;l.secureConnectionStart>=l.navigationStart&&0<u&&(n.stcp_=u);u=l.responseStart-l.requestStart;0<u&&(n.req_=u);u=l.responseEnd-l.responseStart;0<u&&(n.rcv_=u);S.getEntriesByType&&th(d);(l=G("SPEEDINDEX_FOR_ACTIONS",void 0))&&-1<l.indexOf(f)&&(l=hc(),f=dh(),
n=hc(),0<f.qb&&(e.si=f.qb,d.vsc=uh(f.Jc),d.sics=l,d.sice=n));l=[];if(document.querySelector&&S&&S.getEntriesByName)for(var R in kh)if(f=document.querySelector(R))n="",u=f.nodeName,"SCRIPT"==u?n=f.src:"LINK"==u&&(n=f.href),n&&(f=S.getEntriesByName(n))&&f[0]&&l.push(kh[R]+"."+Math.round(f[0].duration));l.length&&(e.rs=l.join(","))}f=oh();R=f.pbr;l=f.vc;f=f.pbs;R&&l&&f&&R<l&&l<f&&1==ph().info.yt_vis&&"youtube"==b&&(ph().info.yt_lt="hot_bg",R=d.vc,l=d.pbs,delete d.aft,e.aft=Math.round(l-R));(R=G("PREVIOUS_ACTION"))&&
(e.pa=R);e.p=G("CLIENT_PROTOCOL")||"unknown";e.t=G("CLIENT_TRANSPORT")||"unknown";window.navigator&&window.navigator.sendBeacon&&(e.ba=1);for(var Ab in e)"_"!=Ab.charAt(0)&&(c[Ab]=e[Ab]);d.ps=hc();Ab={};R=[];for(var pc in d)"_"!=pc.charAt(0)&&(n=Math.round(d[pc]-h),dg("enable_negative_ticks")||(n=Math.max(n,0)),Ab[pc]=n,R.push(pc+"."+n));c.rt=R.join(",");pc=c;R=[];for(var Gb in a)"_"!=Gb.charAt(0)&&R.push(Gb+"."+Math.round(a[Gb]));pc.it=R.join(",");(Gb=r("ytdebug.logTiming"))&&Gb(c,Ab,a);sh();G("EXP_DEFER_CSI_PING")?
(vh(),q("yt.timing.deferredPingArgs_",c,void 0),Gb=H(vh,0),q("yt.timing.deferredPingTimer_",Gb,void 0)):rh(c);Q(ch,new bh(Ab.aft+(k||0)))}}}
function sh(){wh();lh();q("yt.timing.pingSent_",!1,void 0)}
function qh(){var a=oh();if(a.aft)return a.aft;for(var b=G("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function uh(a){return Math.round(S.timing.navigationStart+a)}
function th(a){var b=window.location.protocol,c=S.getEntriesByType("resource"),d=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.googleapis.com/css?family=")})[0],c=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.gstatic.com/s/")}).reduce(function(a,b){return b.duration>a.duration?b:a},{duration:0});
d&&0<d.startTime&&0<d.responseEnd&&(a.wfcs=uh(d.startTime),a.wfce=uh(d.responseEnd));c&&0<c.startTime&&0<c.responseEnd&&(a.wffs=uh(c.startTime),a.wffe=uh(c.responseEnd))}
function rh(a){if(G("DEBUG_CSI_DATA")){var b=r("yt.timing.csiData");b||(b=[],q("yt.timing.csiData",b,void 0));b.push({page:location.href,time:new Date,args:a})}G("EXP_DEFER_CSI_PING")&&(I(r("yt.timing.deferredPingTimer_")),q("yt.timing.deferredPingArgs_",null,void 0));var b="",c;for(c in a)b+="&"+c+"="+a[c];a="/csi_204?"+b.substring(1);if(window.navigator&&window.navigator.sendBeacon)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&Rg(a)}catch(d){a&&Rg(a)}else a&&
Rg(a);q("yt.timing.pingSent_",!0,void 0)}
function vh(a){if(G("EXP_DEFER_CSI_PING")){var b=r("yt.timing.deferredPingArgs_");b&&(a&&(b.yt_fss=a),rh(b))}}
function oh(){return ph().tick}
function ph(){return r("ytcsi.data_")||wh()}
function wh(){var a={tick:{},span:{},info:{}};q("ytcsi.data_",a,void 0);return a}
;var xh={"api.invalidparam":2,auth:150,"drm.auth":150,heartbeat:150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function yh(a,b){D.call(this);this.l=this.i=a;this.aa=b;this.C=!1;this.f={};this.ra=this.W=null;this.ca=new F;Yb(this,oa(E,this.ca));this.h={};this.j=this.Ha=this.g=this.zb=this.b=null;this.ja=!1;this.D=this.o=this.K=this.L=null;this.bb={};this.Zc=["onReady"];this.ka=new ag(this);Yb(this,oa(E,this.ka));this.Ab=null;this.$b=NaN;this.la={};zh(this);this.na("onDetailedError",w(this.Hd,this));this.na("onTabOrderChange",w(this.bd,this));this.na("onTabAnnounce",w(this.ac,this));this.na("WATCH_LATER_VIDEO_ADDED",
w(this.Id,this));this.na("WATCH_LATER_VIDEO_REMOVED",w(this.Jd,this));qf||(this.na("onMouseWheelCapture",w(this.Ed,this)),this.na("onMouseWheelRelease",w(this.Fd,this)));this.na("onAdAnnounce",w(this.ac,this));this.G=new ag(this);Yb(this,oa(E,this.G));this.yb=!1;this.xb=null}
y(yh,D);var Ah=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g=yh.prototype;g.Wb=function(a,b){this.isDisposed()||(Bh(this,a),Ch(this,b),this.C&&Dh(this))};
function Bh(a,b){a.zb=b;a.b=b.clone();a.g=a.b.attrs.id||a.g;"video-player"==a.g&&(a.g=a.aa,a.b.attrs.id=a.aa);a.l.id==a.g&&(a.g+="-player",a.b.attrs.id=a.g);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.aa;a.Ha||(a.Ha=Eh(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.l.style.width=jf(Number(c)||c,!0));if(c=a.b.attrs.height)a.l.style.height=jf(Number(c)||c,!0)}
g.jd=function(){return this.zb};
function Dh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function Fh(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=Gf(Ff.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function Gh(a,b){if((!b||(5!=(xh[b.errorCode]||5)?0:-1!=Ah.indexOf(b.errorCode)))&&Fh(a)){var c=Hh(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=bf(c));d.args.autoplay=1;d.args.html5_unavailable="1";Bh(a,d);Ch(a,"flash")}}
function Ch(a,b){if(!a.isDisposed()){if(!b){var c;if(!(c=!a.b.html5&&Fh(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==Tf)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("video"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Zf:$f,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(h){d="html5.missingapi"}}d=!d}d&&(d=Ih(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?Fh(a)?"flash":"unsupported":"html5"}("flash"==b?a.qe:"html5"==b?a.re:a.se).call(a)}}
function Ih(a){var b=!0,c=Hh(a);c&&a.b&&(a=a.b,b=C(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
g.re=function(){if(!this.ja){var a=Ih(this);a&&"html5"==Jh(this)?(this.j="html5",this.C||this.Ma()):(Kh(this),this.j="html5",a&&this.K?(this.i.appendChild(this.K),this.Ma()):(this.b.loaded=!0,this.L=w(function(){var a=this.i,c=this.b.clone();r("yt.player.Application.create")(a,c);this.Ma()},this),this.ja=!0,a?this.L():(vc(this.b.assets.js,this.L),Of(this.b.assets.css))))}};
g.qe=function(){var a=this.b.clone();if(!this.o){var b=Hh(this);b&&(this.o=document.createElement("span"),this.o.tabIndex=0,bg(this.ka,this.o,"focus",this.nc),this.D=document.createElement("span"),this.D.tabIndex=0,bg(this.ka,this.D,"focus",this.nc),b.parentNode&&b.parentNode.insertBefore(this.o,b),b.parentNode&&b.parentNode.insertBefore(this.D,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Jh(this))this.j="flash",this.C||Kf(a,!1,w(this.Ma,this));
else{Kh(this);this.j="flash";this.b.loaded=!0;b=this.i;b=v(b)?pe(b):b;a=bf(a);if(window!=window.top){var c=null;document.referrer&&(c=document.referrer.substring(0,128));a.args.framer=c}c=Ff.getInstance();Gf(c,a.minVersion)?(c=Lf(a,c),Jf(b,c,a)):Nf(b,a,c);this.Ma()}};
g.nc=function(){Hh(this).focus()};
function Hh(a){var b=oe(a.g);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.g));return b}
g.Ma=function(){if(!this.isDisposed()){var a=Hh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.ja=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Gh(this);else{zh(this);this.C=!0;a=Hh(this);a.addEventListener&&(this.W=Lh(this,a,"addEventListener"));a.removeEventListener&&(this.ra=Lh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=Lh(this,a,d))}for(var e in this.h)this.W(e,
this.h[e]);Dh(this);this.Ha&&this.Ha(this.f);this.ca.u("onReady",this.f)}else this.$b=H(w(this.Ma,this),50)}};
function Lh(a,b,c){var d=b[c];return function(){try{return a.Ab=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Ab=e,fc(e,"WARNING"))}}}
function zh(a){a.C=!1;if(a.ra)for(var b in a.h)a.ra(b,a.h[b]);for(var c in a.la)I(parseInt(c,10));a.la={};a.W=null;a.ra=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=w(a.na,a);a.f.removeEventListener=w(a.de,a);a.f.destroy=w(a.dispose,a);a.f.getLastError=w(a.kd,a);a.f.getPlayerType=w(a.ld,a);a.f.getCurrentVideoConfig=w(a.jd,a);a.f.loadNewVideoConfig=w(a.Wb,a);a.f.isReady=w(a.Ee,a)}
g.Ee=function(){return this.C};
g.na=function(a,b){if(!this.isDisposed()){var c=Eh(this,b);if(c){if(!A(this.Zc,a)&&!this.h[a]){var d=Mh(this,a);this.W&&this.W(a,d)}this.ca.subscribe(a,c);"onReady"==a&&this.C&&H(oa(c,this.f),0)}}};
g.de=function(a,b){if(!this.isDisposed()){var c=Eh(this,b);c&&this.ca.unsubscribe(a,c)}};
function Eh(a,b){var c=b;if("string"==typeof b){if(a.bb[b])return a.bb[b];c=function(){var a=r(b);a&&a.apply(m,arguments)};
a.bb[b]=c}return c?c:null}
function Mh(a,b){var c="ytPlayer"+b+a.aa;a.h[b]=c;m[c]=function(c){var e=H(function(){if(!a.isDisposed()){a.ca.u(b,c);var f=a.la,h=String(e);h in f&&delete f[h]}},0);
ib(a.la,String(e))};
return c}
g.bd=function(a){a=a?xe:we;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.o||b==this.D||(b.focus(),b!=document.activeElement));)b=a(b)};
g.ac=function(a){J("a11y-announce",a)};
g.Hd=function(a){Gh(this,a)};
g.Id=function(a){J("WATCH_LATER_VIDEO_ADDED",a)};
g.Jd=function(a){J("WATCH_LATER_VIDEO_REMOVED",a)};
g.Ed=function(){this.yb||(uf?(this.xb=ue(document),bg(this.G,window,"scroll",this.Zd),bg(this.G,this.i,"touchmove",this.Td)):(bg(this.G,this.i,"mousewheel",this.qc),bg(this.G,this.i,"wheel",this.qc)),this.yb=!0)};
g.Fd=function(){cg(this.G);this.yb=!1};
g.qc=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.Zd=function(){window.scrollTo(this.xb.x,this.xb.y)};
g.Td=function(a){a.preventDefault()};
g.se=function(){Kh(this);this.j="unsupported";var a='Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>',b=navigator.userAgent.match(/Version\/(\d).*Safari/);b&&5<=parseInt(b[1],10)&&(a='Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/"> Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>');
b=this.b.messages.player_fallback||a;a=oe("player-unavailable");if(oe("unavailable-submessage")&&a){oe("unavailable-submessage").innerHTML=b;var b=a||document,c=null;b.getElementsByClassName?c=b.getElementsByClassName("icon")[0]:b.querySelectorAll&&b.querySelector?c=b.querySelector(".icon"):c=re("icon",a)[0];if(c=b=c||null)c=b?b.dataset?Hb("icon")in b.dataset:b.hasAttribute?!!b.hasAttribute("data-icon"):!!b.getAttribute("data-icon"):!1;c&&(b.src=C(b,"icon"));a.style.display="";fe(oe("player"),"off-screen-trigger")}};
g.ld=function(){return this.j||Jh(this)};
g.kd=function(){return this.Ab};
function Jh(a){return(a=Hh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Kh(a){nh("dcp");a.cancel();zh(a);a.j=null;a.b&&(a.b.loaded=!1);var b=Hh(a);"html5"==Jh(a)?a.K=b:b&&b.destroy&&b.destroy();ve(a.i);cg(a.ka);a.o=null;a.D=null}
g.cancel=function(){this.L&&Cc(this.b.assets.js,this.L);I(this.$b);this.ja=!1};
g.w=function(){Kh(this);if(this.K&&this.b)try{this.K.destroy()}catch(b){fc(b)}this.bb=null;for(var a in this.h)m[this.h[a]]=null;this.zb=this.b=this.f=null;delete this.i;delete this.l;yh.A.w.call(this)};var Nh={},Oh="player_uid_"+(1E9*Math.random()>>>0);function Ph(a,b){a=v(a)?pe(a):a;b=bf(b);var c=Oh+"_"+ja(a),d=Nh[c];if(d)return d.Wb(b),d.f;d=new yh(a,c);Nh[c]=d;J("player-added",d.f);Yb(d,oa(Qh,d));H(function(){d.Wb(b)},0);
return d.f}
function Qh(a){Nh[a.aa]=null}
function Rh(a){a=oe(a);if(!a)return null;var b=Oh+"_"+ja(a),c=Nh[b];c||(c=new yh(a,b),Nh[b]=c);return c.f}
;var Sh=r("yt.abuse.botguardInitialized")||Fc;q("yt.abuse.botguardInitialized",Sh,void 0);var Th=r("yt.abuse.invokeBotguard")||Gc;q("yt.abuse.invokeBotguard",Th,void 0);var Uh=r("yt.abuse.dclkstatus.checkDclkStatus")||ce;q("yt.abuse.dclkstatus.checkDclkStatus",Uh,void 0);var Vh=r("yt.player.exports.navigate")||Xe;q("yt.player.exports.navigate",Vh,void 0);var Wh=r("yt.player.embed")||Ph;q("yt.player.embed",Wh,void 0);var Xh=r("yt.player.getPlayerByElement")||Rh;q("yt.player.getPlayerByElement",Xh,void 0);
var Yh=r("yt.util.activity.init")||Oe;q("yt.util.activity.init",Yh,void 0);var Zh=r("yt.util.activity.getTimeSinceActive")||Qe;q("yt.util.activity.getTimeSinceActive",Zh,void 0);var $h=r("yt.util.activity.setTimestamp")||Pe;q("yt.util.activity.setTimestamp",$h,void 0);function ai(a){O.call(this,1,arguments);this.b=a}
y(ai,O);function bi(a){O.call(this,1,arguments);this.b=a}
y(bi,O);function ci(a,b){O.call(this,1,arguments);this.b=a;this.isEnabled=b}
y(ci,O);function di(a,b,c,d,e){O.call(this,2,arguments);this.f=a;this.b=b;this.h=c||null;this.g=d||null;this.source=e||null}
y(di,O);function ei(a,b,c){O.call(this,1,arguments);this.b=a;this.subscriptionId=b}
y(ei,O);function fi(a,b,c,d,e,f,h){O.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.i=d||null;this.h=e||null;this.g=f||null;this.source=h||null}
y(fi,O);
var gi=new P("subscription-batch-subscribe",ai),hi=new P("subscription-batch-unsubscribe",ai),ii=new P("subscription-pref-email",ci),ji=new P("subscription-subscribe",di),ki=new P("subscription-subscribe-loading",bi),li=new P("subscription-subscribe-loaded",bi),mi=new P("subscription-subscribe-success",ei),ni=new P("subscription-subscribe-external",di),oi=new P("subscription-unsubscribe",fi),pi=new P("subscription-unsubscirbe-loading",bi),qi=new P("subscription-unsubscribe-loaded",bi),ri=new P("subscription-unsubscribe-success",
bi),si=new P("subscription-external-unsubscribe",fi),ti=new P("subscription-enable-ypc",bi),ui=new P("subscription-disable-ypc",bi);function vi(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Hd(c,"mode",b));c=Hd("/signin?context=popup","next",c);c=Hd(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=oc("LOGGED_IN",function(b){rc(G("LOGGED_IN_PUBSUB_KEY",void 0));cc("LOGGED_IN",!0);a(b)});
cc("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",J,void 0);function wi(){var a=G("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!G("SESSION_INDEX")&&!G("LOGGED_IN"))}
;function xi(){var a=Ie();return a?a:null}
;var yi={},zi="ontouchstart"in document;function Ai(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Fe(c,function(a){return ee(a,b)},!0,d)}
function Bi(a){var b="mouseover"==a.type&&"mouseenter"in yi||"mouseout"==a.type&&"mouseleave"in yi,c=a.type in yi||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=yi[b],d;for(d in c.$){var e=Ai(b,d,a.target);e&&!Fe(a.relatedTarget,function(a){return a==e},!0)&&c.u(d,e,b,a)}}if(b=yi[a.type])for(d in b.$)(e=Ai(a.type,d,a.target))&&b.u(d,e,a.type,a)}}
M(document,"blur",Bi,!0);M(document,"change",Bi,!0);M(document,"click",Bi);M(document,"focus",Bi,!0);M(document,"mouseover",Bi);M(document,"mouseout",Bi);M(document,"mousedown",Bi);M(document,"keydown",Bi);M(document,"keyup",Bi);M(document,"keypress",Bi);M(document,"cut",Bi);M(document,"paste",Bi);zi&&(M(document,"touchstart",Bi),M(document,"touchend",Bi),M(document,"touchcancel",Bi));function Ci(a){this.i=a;this.g={};this.nb=[];this.h=[]}
function T(a,b){return"yt-uix"+(a.i?"-"+a.i:"")+(b?"-"+b:"")}
Ci.prototype.unregister=function(){rc(this.nb);this.nb.length=0;$g(this.h);this.h.length=0};
Ci.prototype.init=t;Ci.prototype.dispose=t;function Di(a,b,c){a.h.push(Zg(b,c,a))}
function Ei(a,b,c){var d=T(a,void 0),e=w(c,a);b in yi||(yi[b]=new F);yi[b].subscribe(d,e);a.g[c]=e}
function Fi(a,b,c){if(b in yi){var d=yi[b];d.unsubscribe(T(a,void 0),a.g[c]);0>=d.N()&&(d.dispose(),delete yi[b])}delete a.g[c]}
function Gi(a,b){Fb(a,"tooltip-text",b)}
;function Hi(){Ci.call(this,"tooltip");this.b=0;this.f={}}
y(Hi,Ci);ca(Hi);g=Hi.prototype;g.register=function(){Ei(this,"mouseover",this.kb);Ei(this,"mouseout",this.Da);Ei(this,"focus",this.hc);Ei(this,"blur",this.cc);Ei(this,"click",this.Da);Ei(this,"touchstart",this.Ic);Ei(this,"touchend",this.rb);Ei(this,"touchcancel",this.rb)};
g.unregister=function(){Fi(this,"mouseover",this.kb);Fi(this,"mouseout",this.Da);Fi(this,"focus",this.hc);Fi(this,"blur",this.cc);Fi(this,"click",this.Da);Fi(this,"touchstart",this.Ic);Fi(this,"touchend",this.rb);Fi(this,"touchcancel",this.rb);this.dispose();Hi.A.unregister.call(this)};
g.dispose=function(){for(var a in this.f)this.Da(this.f[a]);this.f={}};
g.kb=function(a){if(!(this.b&&1E3>x()-this.b)){var b=parseInt(C(a,"tooltip-hide-timer"),10);b&&(Ib(a,"tooltip-hide-timer"),I(b));var b=w(function(){Ii(this,a);Ib(a,"tooltip-show-timer")},this),c=parseInt(C(a,"tooltip-show-delay"),10)||0,b=H(b,c);
Fb(a,"tooltip-show-timer",b.toString());a.title&&(Gi(a,Ji(a)),a.title="");b=ja(a).toString();this.f[b]=a}};
g.Da=function(a){var b=parseInt(C(a,"tooltip-show-timer"),10);b&&(I(b),Ib(a,"tooltip-show-timer"));b=w(function(){if(a){var b=oe(Ki(this,a));b&&(Li(b),b&&b.parentNode&&b.parentNode.removeChild(b),Ib(a,"content-id"));(b=oe(Ki(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Ib(a,"tooltip-hide-timer")},this);
b=H(b,50);Fb(a,"tooltip-hide-timer",b.toString());if(b=C(a,"tooltip-text"))a.title=b;b=ja(a).toString();delete this.f[b]};
g.hc=function(a){this.b=0;this.kb(a)};
g.cc=function(a){this.b=0;this.Da(a)};
g.Ic=function(a,b,c){c.changedTouches&&(this.b=0,a=Ai(b,T(this),c.changedTouches[0].target),this.kb(a))};
g.rb=function(a,b,c){c.changedTouches&&(this.b=x(),a=Ai(b,T(this),c.changedTouches[0].target),this.Da(a))};
function Mi(a,b){Gi(a,b);var c=C(a,"content-id");(c=oe(c))&&ye(c,b)}
function Ji(a){return C(a,"tooltip-text")||a.title}
function Ii(a,b){if(b){var c=Ji(b);if(c){var d=oe(Ki(a,b));if(!d){d=document.createElement("div");d.id=Ki(a,b);d.className=T(a,"tip");var e=document.createElement("div");e.className=T(a,"tip-body");var f=document.createElement("div");f.className=T(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=T(a,"tip-content");var k=Ni(a,b),l=Ki(a,b,"content");h.id=l;Fb(b,"content-id",l);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var l=
Be(b),n=Ki(a,b,"arialabel"),f=document.createElement("div");fe(f,T(a,"arialabel"));f.id=n;"rtl"==document.body.getAttribute("dir")?ye(f,c+" "+l):ye(f,l+" "+c);b.setAttribute("aria-labelledby",n);l=xi()||document.body;l.appendChild(f);l.appendChild(d);Mi(b,c);(c=parseInt(C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",fe(h,T(a,"normal-wrap")));h=ee(b,T(a,"reverse"));Oi(a,b,d,e,k,h)||Oi(a,b,d,e,k,!h);var u=T(a,"tip-visible");H(function(){fe(d,u)},0)}}}}
function Oi(a,b,c,d,e,f){he(c,T(a,"tip-reverse"),f);var h=0;f&&(h=1);a=kf(b);f=new ie((a.width-10)/2,f?a.height:0);var k=ne(b),l=new ie(0,0),n;n=k?ne(k):document;n=!K||od(9)||te(le(n).b)?n.documentElement:n.body;b!=n&&(n=hf(b),k=ue(le(k).b),l.x=n.left+k.x,l.y=n.top+k.y);f=new ie(l.x+f.x,l.y+f.y);f=f.clone();l=(h&8&&"rtl"==gf(c,"direction")?h^4:h)&-9;h=kf(c);k=h.clone();n=f.clone();k=k.clone();0!=l&&(l&4?n.x-=k.width+0:l&2&&(n.x-=k.width/2),l&1&&(n.y-=k.height+0));f=new df(0,0,0,0);f.left=n.x;f.top=
n.y;f.width=k.width;f.height=k.height;k=new ie(f.left,f.top);k instanceof ie?(l=k.x,k=k.y):(l=k,k=void 0);c.style.left=jf(l,!1);c.style.top=jf(k,!1);k=new je(f.width,f.height);if(!(h==k||h&&k&&h.width==k.width&&h.height==k.height))if(h=k,f=ne(c),l=te(le(f).b),!K||nd("10")||l&&nd("8"))f=c.style,cd?f.MozBoxSizing="border-box":dd?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(h.width,0)+"px",f.height=Math.max(h.height,0)+"px";else if(f=c.style,l){if(K){l=nf(c,"paddingLeft");
k=nf(c,"paddingRight");n=nf(c,"paddingTop");var u=nf(c,"paddingBottom"),l=new cf(n,k,u,l)}else l=ff(c,"paddingLeft"),k=ff(c,"paddingRight"),n=ff(c,"paddingTop"),u=ff(c,"paddingBottom"),l=new cf(parseFloat(n),parseFloat(k),parseFloat(u),parseFloat(l));if(K&&!od(9)){k=pf(c,"borderLeft");n=pf(c,"borderRight");var u=pf(c,"borderTop"),ba=pf(c,"borderBottom"),k=new cf(u,n,ba,k)}else k=ff(c,"borderLeftWidth"),n=ff(c,"borderRightWidth"),u=ff(c,"borderTopWidth"),ba=ff(c,"borderBottomWidth"),k=new cf(parseFloat(u),
parseFloat(n),parseFloat(ba),parseFloat(k));f.pixelWidth=h.width-k.left-l.left-l.right-k.right;f.pixelHeight=h.height-k.top-l.top-l.bottom-k.bottom}else f.pixelWidth=h.width,f.pixelHeight=h.height;f=se(window);1==c.nodeType?(c=hf(c),k=new ie(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,k=new ie(c.clientX,c.clientY));c=kf(d);n=Math.floor(c.width/2);h=!!(f.height<k.y+a.height);a=!!(k.y<a.height);l=!!(k.x<n);f=!!(f.width<k.x+n);k=(c.width+3)/-2- -5;b=C(b,"force-tooltip-direction");if("left"==
b||l)k=-5;else if("right"==b||f)k=20-c.width-3;b=Math.floor(k)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||a)}
function Ki(a,b,c){a=T(a);var d=b.__yt_uid_key;d||(d=Ge(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Ni(a,b){var c=null;fd&&ee(b,T(a,"masked"))&&((c=oe("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Df(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=T(a,"tip-mask")));return c}
function Li(a){var b=oe("yt-uix-tooltip-shared-mask"),c=b&&Fe(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Ef(b),document.body.appendChild(b))}
;function Pi(){Ci.call(this,"subscription-button")}
y(Pi,Ci);ca(Pi);Pi.prototype.register=function(){Ei(this,"click",this.Eb);Di(this,ki,this.pc);Di(this,li,this.oc);Di(this,mi,this.Rd);Di(this,pi,this.pc);Di(this,qi,this.oc);Di(this,ri,this.Xd);Di(this,ti,this.Dd);Di(this,ui,this.Cd)};
Pi.prototype.unregister=function(){Fi(this,"click",this.Eb);Pi.A.unregister.call(this)};
var Ee={Xb:"hover-enabled",Rc:"yt-uix-button-subscribe",Sc:"yt-uix-button-subscribed",Ge:"ypc-enabled",Tc:"yt-uix-button-subscription-container",Uc:"yt-subscription-button-disabled-mask-container"},Qi={He:"channel-external-id",Vc:"subscriber-count-show-when-subscribed",Wc:"subscriber-count-tooltip",Xc:"subscriber-count-title",Ie:"href",Yb:"is-subscribed",Ke:"parent-url",Me:"clicktracking",Yc:"style-type",Zb:"subscription-id",Pe:"target",$c:"ypc-enabled"};g=Pi.prototype;
g.Eb=function(a){var b=C(a,"href"),c=wi();if(b)a=C(a,"target")||"_self",window.open(b,a);else if(c){var b=C(a,"channel-external-id"),c=C(a,"clicktracking"),d;if(C(a,"ypc-enabled")){d=C(a,"ypc-item-type");var e=C(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=C(a,"parent-url");if(C(a,"is-subscribed")){var f=C(a,"subscription-id");Q(oi,new fi(b,f,d,a,c,e))}else Q(ji,new di(b,d,c,e))}else Ri(this,a)};
g.pc=function(a){this.Ia(a.b,this.Fc,!0)};
g.oc=function(a){this.Ia(a.b,this.Fc,!1)};
g.Rd=function(a){this.Ia(a.b,this.Gc,!0,a.subscriptionId)};
g.Xd=function(a){this.Ia(a.b,this.Gc,!1)};
g.Dd=function(a){this.Ia(a.b,this.ed)};
g.Cd=function(a){this.Ia(a.b,this.dd)};
g.Gc=function(a,b,c){b?(Fb(a,Qi.Yb,"true"),c&&Fb(a,Qi.Zb,c)):(Ib(a,Qi.Yb),Ib(a,Qi.Zb));Si(a)};
g.Fc=function(a,b){var c;c=De(a);he(c,Ee.Uc,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Si(a){var b=C(a,Qi.Yc),c=!!C(a,"is-subscribed"),b="-"+b,d=Ee.Sc+b;he(a,Ee.Rc+b,!c);he(a,d,c);C(a,Qi.Wc)&&!C(a,Qi.Vc)&&(b=T(Hi.getInstance()),he(a,b,!c),a.title=c?"":C(a,Qi.Xc));c?H(function(){fe(a,Ee.Xb)},1E3):ge(a,Ee.Xb)}
g.ed=function(a){var b=!!C(a,"ypc-item-type"),c=!!C(a,"ypc-item-id");!C(a,"ypc-enabled")&&b&&c&&(fe(a,"ypc-enabled"),Fb(a,Qi.$c,"true"))};
g.dd=function(a){C(a,"ypc-enabled")&&(ge(a,"ypc-enabled"),Ib(a,"ypc-enabled"))};
function Ti(a,b){var c=qe(T(a));return Ja(c,function(a){return b==C(a,"channel-external-id")},a)}
g.ad=function(a,b,c){var d=Wa(arguments,2);z(a,function(a){b.apply(this,Sa(a,d))},this)};
g.Ia=function(a,b,c){var d=Ti(this,a),d=Sa([d],Wa(arguments,1));this.ad.apply(this,d)};
function Ri(a,b){var c=w(function(a){a.discoverable_subscriptions&&cc("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Eb(b)},a);
vi(c,"subscribe")}
;var Ui=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",Ui,void 0);function Vi(a,b){this.source=null;this.h=a||null;this.origin="*";this.o=window.document.location.protocol+"//"+window.document.location.hostname;this.l=b;this.g=this.b=this.f=this.i=null;M(window,"message",w(this.j,this))}
Vi.prototype.j=function(a){var b=this.l||G("POST_MESSAGE_ORIGIN",void 0)||this.o;if("*"!=b&&a.origin!=b)window.console&&window.console.warn("Untrusted origin: "+a.origin);else if(!this.h||a.source==this.h)if(this.source=a.source,this.origin="null"==a.origin?this.origin:a.origin,a=a.data,v(a)){try{a=rd(a)}catch(c){return}this.i=a.id;switch(a.event){case "listening":this.b&&(this.b(),this.b=null);break;case "command":this.f&&(this.g&&!A(this.g,a.func)||this.f(a.func,a.args))}}};
Vi.prototype.sendMessage=function(a){this.source&&(a.id=this.i,a=L(a),this.source.postMessage(a,this.origin))};function Wi(){}
;function Xi(){}
y(Xi,Wi);Xi.prototype.N=function(){var a=0;Lc(this.ma(!0),function(){a++});
return a};
Xi.prototype.clear=function(){var a=Mc(this.ma(!0)),b=this;z(a,function(a){b.remove(a)})};function Yi(a){this.b=a}
y(Yi,Xi);g=Yi.prototype;g.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.b.getItem(a);if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.b.removeItem(a)};
g.N=function(){return this.b.length};
g.ma=function(a){var b=0,c=this.b,d=new Jc;d.next=function(){if(b>=c.length)throw Ic;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!v(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.b.clear()};
g.key=function(a){return this.b.key(a)};function Zi(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
y(Zi,Yi);function $i(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
y($i,Yi);function aj(a){this.b=a}
aj.prototype.set=function(a,b){p(b)?this.b.set(a,L(b)):this.b.remove(a)};
aj.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return rd(b)}catch(c){throw"Storage: Invalid value was encountered";}};
aj.prototype.remove=function(a){this.b.remove(a)};function bj(a){this.b=a}
y(bj,aj);function cj(a){this.data=a}
function dj(a){return!p(a)||a instanceof cj?a:new cj(a)}
bj.prototype.set=function(a,b){bj.A.set.call(this,a,dj(b))};
bj.prototype.f=function(a){a=bj.A.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
bj.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ej(a){this.b=a}
y(ej,bj);function fj(a){var b=a.creation;a=a.expiration;return!!a&&a<x()||!!b&&b>x()}
ej.prototype.set=function(a,b,c){if(b=dj(b)){if(c){if(c<x()){ej.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}ej.A.set.call(this,a,b)};
ej.prototype.f=function(a,b){var c=ej.A.f.call(this,a);if(c)if(!b&&fj(c))ej.prototype.remove.call(this,a);else return c};function gj(a){this.b=a}
y(gj,ej);function hj(a,b){var c=[];Lc(b,function(a){var b;try{b=gj.prototype.f.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?fj(b)&&c.push(a):c.push(a)},a);
return c}
function ij(a,b){var c=hj(a,b);z(c,function(a){gj.prototype.remove.call(this,a)},a)}
function jj(){var a=kj;ij(a,a.b.ma(!0))}
;function U(a,b,c){var d=c&&0<c?c:0;c=d?x()+1E3*d:0;if((d=d?kj:lj)&&window.JSON){v(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function mj(a){if(!lj&&!kj||!window.JSON)return null;var b;try{b=lj.get(a)}catch(c){}if(!v(b))try{b=kj.get(a)}catch(c){}if(!v(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function nj(a){lj&&lj.remove(a);kj&&kj.remove(a)}
var kj,oj=new Zi;kj=oj.isAvailable()?new gj(oj):null;var lj,pj=new $i;lj=pj.isAvailable()?new gj(pj):null;function qj(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function rj(a,b,c){v(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=a;c=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);b.videoId=c&&c[2]?c[2]:null;return sj(a)}
function sj(a,b,c){if(ia(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function tj(a,b,c,d){if(ia(a)&&!ea(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};v(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function uj(a){var b=a.video_id||a.videoId;if(v(b)){var c=mj("yt-player-two-stage-token")||{},d=mj("yt-player-two-stage-token")||{};p(void 0)?d[b]=void 0:delete d[b];U("yt-player-two-stage-token",d,300);(b=c[b])&&(a.two_stage_token=b)}}
;function vj(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return a?50<=parseInt(a[1],10):!1}
var wj=document.currentScript&&-1!=document.currentScript.src.indexOf("?loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",xj=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],yj=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],zj=vj()?yj.concat(xj):xj.concat(yj);function Aj(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}}
function Bj(a){if(a>=zj.length)Cj();else{var b=zj[a],c="chrome-extension://"+b+wj;0<=xj.indexOf(b)?Aj(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,Dj(c,Cj)):Bj(a+1)}):Dj(c,function(){Bj(a+1)})}}
function Dj(a,b){var c=document.createElement("script");c.onerror=b;c.src=a;(document.head||document.documentElement).appendChild(c)}
function Cj(){var a=window.__onGCastApiAvailable;a&&"function"==typeof a&&a(!1,"No cast extension found")}
function Ej(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){a({command:"cast.sender.init"});return}}window.chrome?(a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation?(a=vj()?"50":"",Dj("//www.gstatic.com/eureka/clank"+a+wj,Cj)):Bj(0)):Cj()}
;var Fj=x(),Gj=null,Hj=Array(50),Ij=-1,Jj=!1;function Kj(){var a=Lj;Mj();Gj.push(a);Nj(Gj)}
function Oj(a,b){Mj();var c=Gj,d=Pj(a,String(b));0==c.length?Qj(d):(Nj(c),z(c,function(a){a(d)}))}
function Mj(){Gj||(Gj=r("yt.mdx.remote.debug.handlers_")||[],q("yt.mdx.remote.debug.handlers_",Gj,void 0))}
function Qj(a){var b=(Ij+1)%50;Ij=b;Hj[b]=a;Jj||(Jj=49==b)}
function Nj(a){var b=Hj;if(b[0]){var c=Ij,d=Jj?c:-1;do{var d=(d+1)%50,e=b[d];z(a,function(a){a(e)})}while(d!=c);
Hj=Array(50);Ij=-1;Jj=!1}}
function Pj(a,b){var c=(x()-Fj)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function Rj(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function Sj(a,b){return!!b&&(a.id==b||a.uuid==b)}
function Tj(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function Uj(a){return new Rj(a)}
function Vj(a){return ea(a)?Ka(a,Uj):[]}
function Wj(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function Xj(a){return ea(a)?"["+Ka(a,Wj).join(",")+"]":"null"}
;var Yj={Fe:"atp",Oe:"ska",Le:"que",Je:"mus",Ne:"sus"};function Zj(a){this.h=this.g="";this.b="/api/lounge";this.f=!0;a=a||document.location.href;var b=Number(a.match(zd)[4]||null)||null||"";b&&(this.h=":"+b);this.g=Ad(a)||"";a=nb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Fa(a,"10.0")&&(this.f=!1))}
function ak(a,b,c,d){var e=a.b;if(p(d)?d:a.f)e="https://"+a.g+a.h+a.b;return Id(e+b,c||{})}
function bk(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,Z:oa(a.l,d,!0),onError:oa(a.i,e),Ea:oa(a.j,e)};c&&(a.J=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Sd(b,a)}
Zj.prototype.l=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Zj.prototype.i=function(a,b){a(Error("Request error: "+b.status))};
Zj.prototype.j=function(a){a(Error("request timed out"))};function ck(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function dk(a,b){return Na(a,function(a){return a.key==b})}
function ek(a){return Ka(a,function(a){return{key:a.id,name:a.name}})}
function fk(a,b){return Na(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})}
function gk(a,b){return Na(a,function(a){return Sj(a,b)})}
;function V(){D.call(this);this.l=new F;Yb(this,oa(E,this.l))}
y(V,D);V.prototype.subscribe=function(a,b,c){return this.isDisposed()?0:this.l.subscribe(a,b,c)};
V.prototype.unsubscribe=function(a,b,c){return this.isDisposed()?!1:this.l.unsubscribe(a,b,c)};
V.prototype.ha=function(a){return this.isDisposed()?!1:this.l.ha(a)};
V.prototype.u=function(a,b){return this.isDisposed()?!1:this.l.u.apply(this.l,arguments)};function hk(a){V.call(this);this.j=a;this.screens=[]}
y(hk,V);hk.prototype.S=function(){return this.screens};
hk.prototype.contains=function(a){return!!fk(this.screens,a)};
hk.prototype.get=function(a){return a?gk(this.screens,a):null};
function ik(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0}
function jk(a,b){var c=a.screens.length!=b.length;a.screens=Ja(a.screens,function(a){return!!fk(b,a)});
for(var d=0,e=b.length;d<e;d++)c=ik(a,b[d])||c;return c}
function kk(a,b){var c=a.screens.length;a.screens=Ja(a.screens,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.screens.length<c}
hk.prototype.info=function(a){Oj(this.j,a)};function lk(a,b,c,d){V.call(this);this.o=a;this.j=b;this.h=c;this.i=d;this.g=0;this.b=null;this.f=NaN}
y(lk,V);var mk=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=lk.prototype;g.start=function(){!this.b&&isNaN(this.f)&&this.Ac()};
g.stop=function(){this.b&&(this.b.abort(),this.b=null);isNaN(this.f)||(I(this.f),this.f=NaN)};
g.w=function(){this.stop();lk.A.w.call(this)};
g.Ac=function(){this.f=NaN;this.b=Sd(ak(this.o,"/pairing/get_screen"),{method:"POST",J:{pairing_code:this.j},timeout:5E3,Z:w(this.we,this),onError:w(this.ve,this),Ea:w(this.xe,this)})};
g.we=function(a,b){this.b=null;var c=b.screen||{};c.dialId=this.h;c.name=this.i;this.u("pairingComplete",new Rj(c))};
g.ve=function(a){this.b=null;a.status&&404==a.status?this.g>=mk.length?this.u("pairingFailed",Error("DIAL polling timed out")):(a=mk[this.g],this.f=H(w(this.Ac,this),a),this.g++):this.u("pairingFailed",Error("Server error "+a.status))};
g.xe=function(){this.b=null;this.u("pairingFailed",Error("Server not responding"))};function nk(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.avatar=this.username="";this.capabilities=new Wc;this.experiments=new Wc;this.theme="u";if(a){this.id=a.id||a.name;this.name=a.name;this.app=a.app;this.type=a.type||"REMOTE_CONTROL";this.username=a.user||"";this.avatar=a.userAvatarUri||"";this.theme=a.theme||"u";var b=a.capabilities||"";this.capabilities.clear();Xc(this.capabilities,Ja(b.split(","),oa(ab,Yj)));a=a.experiments||"";this.experiments.clear();Xc(this.experiments,
a.split(","))}}
nk.prototype.equals=function(a){return a?this.id==a.id:!1};var ok;function pk(){var a=qk(),b=rk();A(a,b);if(sk()){var c=a,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,k;k=Xa(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&Va(c,-(d+1),0,b)}a=tk(a);if(0==a.length)try{Ve.remove("remote_sid","/","youtube.com")}catch(l){}else try{We("remote_sid",a.join(","),-1)}catch(l){}}
function qk(){var a=mj("yt-remote-connected-devices")||[];a.sort(Xa);return a}
function tk(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return Ka(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function uk(a){U("yt-remote-connected-devices",a,86400)}
function rk(){if(vk)return vk;var a=mj("yt-remote-device-id");a||(a=ck(),U("yt-remote-device-id",a,31536E3));for(var b=qk(),c=1,d=a;A(b,d);)c++,d=a+"#"+c;return vk=d}
function wk(){return mj("yt-remote-session-browser-channel")}
function sk(){return mj("yt-remote-session-screen-id")}
function xk(a){5<a.length&&(a=a.slice(a.length-5));var b=Ka(yk(),function(a){return a.loungeToken}),c=Ka(a,function(a){return a.loungeToken});
Ma(c,function(a){return!A(b,a)})&&zk();
U("yt-remote-local-screens",a,31536E3)}
function yk(){return mj("yt-remote-local-screens")||[]}
function zk(){U("yt-remote-lounge-token-expiration",!0,86400)}
function Ak(a,b){U("yt-remote-session-browser-channel",a);U("yt-remote-session-screen-id",b);var c=qk(),d=rk();A(c,d)||c.push(d);uk(c);pk()}
function Bk(a){a||(nj("yt-remote-session-screen-id"),nj("yt-remote-session-video-id"));pk();a=qk();Qa(a,rk());uk(a)}
function Ck(){if(!ok){var a;a=new Zi;(a=a.isAvailable()?a:null)&&(ok=new aj(a))}return ok?!!ok.get("yt-remote-use-staging-server"):!1}
var vk="";function Dk(a){hk.call(this,"LocalScreenService");this.f=a;this.b=NaN;Ek(this);this.info("Initializing with "+Xj(this.screens))}
y(Dk,hk);g=Dk.prototype;g.start=function(){Ek(this)&&this.u("screenChange");!mj("yt-remote-lounge-token-expiration")&&Fk(this);I(this.b);this.b=H(w(this.start,this),1E4)};
g.wb=function(a,b){Ek(this);ik(this,a);Gk(this,!1);this.u("screenChange");b(a);a.token||Fk(this)};
g.remove=function(a,b){var c=Ek(this);kk(this,a)&&(Gk(this,!1),c=!0);b(a);c&&this.u("screenChange")};
g.tb=function(a,b,c,d){var e=Ek(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,Gk(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.u("screenChange")};
g.w=function(){I(this.b);Dk.A.w.call(this)};
function Fk(a){if(a.screens.length){var b=Ka(a.screens,function(a){return a.id}),c=ak(a.f,"/pairing/get_lounge_token_batch");
bk(a.f,c,{screen_ids:b.join(",")},w(a.od,a),w(a.nd,a))}}
g.od=function(a){Ek(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}Gk(this,!b);b&&Oj(this.j,"Missed "+b+" lounge tokens.")};
g.nd=function(a){Oj(this.j,"Requesting lounge tokens failed: "+a)};
function Ek(a){var b=Vj(yk()),b=Ja(b,function(a){return!a.uuid});
return jk(a,b)}
function Gk(a,b){xk(Ka(a.screens,Tj));b&&zk()}
;function Hk(a,b){V.call(this);this.j=b;for(var c=mj("yt-remote-online-screen-ids")||"",c=c?c.split(","):[],d={},e=this.j(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=A(c,k)}this.b=d;this.i=a;this.g=this.h=NaN;this.f=null;Ik("Initialized with "+L(this.b))}
y(Hk,V);g=Hk.prototype;g.start=function(){var a=parseInt(mj("yt-remote-fast-check-period")||"0",10);(this.h=x()-144E5<a?0:a)?Jk(this):(this.h=x()+3E5,U("yt-remote-fast-check-period",this.h),this.Rb())};
g.isEmpty=function(){return hb(this.b)};
g.update=function(){Ik("Updating availability on schedule.");var a=this.j(),b=Za(this.b,function(b,d){return b&&!!gk(a,d)},this);
Kk(this,b)};
function Lk(a,b,c){var d=ak(a.i,"/pairing/get_screen_availability");bk(a.i,d,{lounge_token:b.token},w(function(a){a=a.screens||[];for(var d=0,h=a.length;d<h;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),w(function(){c(!1)},a))}
g.w=function(){I(this.g);this.g=NaN;this.f&&(this.f.abort(),this.f=null);Hk.A.w.call(this)};
function Kk(a,b){var c;a:if($a(b)!=$a(a.b))c=!1;else{c=db(b);for(var d=0,e=c.length;d<e;++d)if(!a.b[c[d]]){c=!1;break a}c=!0}c||(Ik("Updated online screens: "+L(a.b)),a.b=b,a.u("screenChange"));Mk(a)}
function Jk(a){isNaN(a.g)||I(a.g);a.g=H(w(a.Rb,a),0<a.h&&a.h<x()?2E4:1E4)}
g.Rb=function(){I(this.g);this.g=NaN;this.f&&this.f.abort();var a=Nk(this);if($a(a)){var b=ak(this.i,"/pairing/get_screen_availability");this.f=bk(this.i,b,{lounge_token:db(a).join(",")},w(this.Pd,this,a),w(this.Od,this))}else Kk(this,{}),Jk(this)};
g.Pd=function(a,b){this.f=null;var c;a:{c=db(Nk(this));var d=db(a);if(fa(c)&&fa(d)&&c.length==d.length){for(var e=c.length,f=0;f<e;f++)if(c[f]!==d[f]){c=!1;break a}c=!0}else c=!1}if(c){c=b.screens||[];d={};e=0;for(f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;Kk(this,d);Jk(this)}else this.H("Changing Screen set during request."),this.Rb()};
g.Od=function(a){this.H("Screen availability failed: "+a);this.f=null;Jk(this)};
function Ik(a){Oj("OnlineScreenService",a)}
g.H=function(a){Oj("OnlineScreenService",a)};
function Nk(a){var b={};z(a.j(),function(a){a.token?b[a.token]=a.id:this.H("Requesting availability of screen w/o lounge token.")});
return b}
function Mk(a){a=db(Za(a.b,function(a){return a}));
a.sort(Xa);a.length?U("yt-remote-online-screen-ids",a.join(","),60):nj("yt-remote-online-screen-ids")}
;function W(a){hk.call(this,"ScreenService");this.i=a;this.b=this.f=null;this.g=[];this.h={};Ok(this)}
y(W,hk);g=W.prototype;g.start=function(){this.f.start();this.b.start();this.screens.length&&(this.u("screenChange"),this.b.isEmpty()||this.u("onlineScreenChange"))};
g.wb=function(a,b,c){this.f.wb(a,b,c)};
g.remove=function(a,b,c){this.f.remove(a,b,c);this.b.update()};
g.tb=function(a,b,c,d){this.f.contains(a)?this.f.tb(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Oj(this.j,a),d(Error(a)))};
g.S=function(a){return a?this.screens:Sa(this.screens,Ja(this.g,function(a){return!this.contains(a)},this))};
g.Lc=function(){return Ja(this.S(!0),function(a){return!!this.b.b[a.id]},this)};
function Pk(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.h[b]);var h=a.S();if(h=(c?gk(h,c):null)||gk(h,b)){h.uuid=b;var k=Qk(a,h);Lk(a.b,k,function(a){e(a?k:null)})}else c?Rk(a,c,w(function(a){var f=Qk(this,new Rj({name:d,
screenId:c,loungeToken:a,dialId:b||""}));Lk(this.b,f,function(a){e(a?f:null)})},a),f):e(null)}
g.Mc=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new lk(this.i,a,b,c);f.subscribe("pairingComplete",w(function(a){E(f);d(Qk(this,a))},this));
f.subscribe("pairingFailed",function(a){E(f);e(a)});
f.start();return w(f.stop,f)};
function Sk(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
g.ze=function(a,b,c,d){Sd(ak(this.i,"/pairing/get_screen"),{method:"POST",J:{pairing_code:a},timeout:5E3,Z:w(function(a,d){var h=new Rj(d.screen||{});if(!h.name||Sk(this,h.name)){var k;a:{k=h.name;for(var l=2,n=b(k,l);Sk(this,n);){l++;if(20<l)break a;n=b(k,l)}k=n}h.name=k}c(Qk(this,h))},this),
onError:w(function(a){d(Error("pairing request failed: "+a.status))},this),
Ea:w(function(){d(Error("pairing request timed out."))},this)})};
g.w=function(){E(this.f);E(this.b);W.A.w.call(this)};
function Rk(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={J:{screen_ids:b},method:"POST",context:a,Z:function(a,e){var k=e&&e.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Sd(ak(a.i,"/pairing/get_lounge_token_batch"),e)}
function Tk(a){a.screens=a.f.S();var b=a.h,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+Xj(a.screens))}
g.pd=function(){Tk(this);this.u("screenChange");this.b.update()};
function Ok(a){Uk(a);a.f=new Dk(a.i);a.f.subscribe("screenChange",w(a.pd,a));Tk(a);a.g=Vj(mj("yt-remote-automatic-screen-cache")||[]);Uk(a);a.info("Initializing automatic screens: "+Xj(a.g));a.b=new Hk(a.i,w(a.S,a,!0));a.b.subscribe("screenChange",w(function(){this.u("onlineScreenChange")},a))}
function Qk(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=gk(a.g,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.g.push(b),U("yt-remote-automatic-screen-cache",Ka(a.g,Tj)));Uk(a);a.h[b.uuid]=b.id;U("yt-remote-device-id-map",a.h,31536E3);return b}
function Uk(a){a.h=mj("yt-remote-device-id-map")||{}}
W.prototype.dispose=W.prototype.dispose;function Vk(a,b,c){V.call(this);this.L=c;this.D=a;this.f=b;this.g=null}
y(Vk,V);g=Vk.prototype;g.mb=function(a){this.g=a;this.u("sessionScreen",this.g)};
g.T=function(a){this.isDisposed()||(a&&Wk(this,""+a),this.g=null,this.u("sessionScreen",null))};
g.info=function(a){Oj(this.L,a)};
function Wk(a,b){Oj(a.L,b)}
g.Oc=function(){return null};
g.Tb=function(a){var b=this.f;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,w(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),w(function(){Wk(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.w=function(){this.Tb("");Vk.A.w.call(this)};function Xk(a,b){Vk.call(this,a,b,"CastSession");this.b=null;this.i=0;this.h=null;this.o=w(this.Ae,this);this.j=w(this.$d,this);this.i=H(w(function(){Yk(this,null)},this),12E4)}
y(Xk,Vk);g=Xk.prototype;g.Sb=function(a){if(this.b){if(this.b==a)return;Wk(this,"Overriding cast sesison with new session object");this.b.removeUpdateListener(this.o);this.b.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j)}this.b=a;this.b.addUpdateListener(this.o);this.b.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.j);this.h&&Zk(this);$k(this,"getMdxSessionStatus")};
g.La=function(a){this.info("launchWithParams: "+L(a));this.h=a;this.b&&Zk(this)};
g.stop=function(){this.b?this.b.stop(w(function(){this.T()},this),w(function(){this.T(Error("Failed to stop receiver app."))},this)):this.T(Error("Stopping cast device witout session."))};
g.Tb=t;g.w=function(){this.info("disposeInternal");I(this.i);this.i=0;this.b&&(this.b.removeUpdateListener(this.o),this.b.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j));this.b=null;Xk.A.w.call(this)};
function Zk(a){var b=a.h.videoId;b&&$k(a,"flingVideo",{videoId:b,currentTime:a.h.currentTime||0});a.h=null}
function $k(a,b,c){a.info("sendYoutubeMessage_: "+b+" "+L(c));var d={};d.type=b;c&&(d.data=c);a.b?a.b.sendMessage("urn:x-cast:com.google.youtube.mdx",d,t,w(function(){Wk(this,"Failed to send message: "+b+".")},a)):Wk(a,"Sending yt message without session: "+L(d))}
g.$d=function(a,b){if(!this.isDisposed())if(b){var c=sd(b);if(c){var d=""+c.type,c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+L(c));switch(d){case "mdxSessionStatus":Yk(this,c.screenId);break;default:Wk(this,"Unknown youtube message: "+d)}}else Wk(this,"Unable to parse message.")}else Wk(this,"No data in message.")};
function Yk(a,b){I(a.i);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.g||a.g.id!=b){var c=w(a.mb,a),d=w(a.T,a);a.jc(b,c,d,5)}}else a.T(Error("Waiting for session status timed out."))}
g.jc=function(a,b,c,d){Pk(this.D,this.f.label,a,this.f.friendlyName,w(function(e){e?b(e):0<=d?(Wk(this,"Screen "+a+" appears to be offline. "+d+" retries left."),H(w(this.jc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.Oc=function(){return this.b};
g.Ae=function(a){this.isDisposed()||a||(Wk(this,"Cast session died."),this.T())};function al(a,b){Vk.call(this,a,b,"DialSession");this.h=this.C=null;this.G="";this.i=null;this.o=t;this.j=NaN;this.K=w(this.De,this);this.b=t}
y(al,Vk);g=al.prototype;g.Sb=function(a){this.h=a;this.h.addUpdateListener(this.K)};
g.La=function(a){this.i=a;this.o()};
g.stop=function(){this.b();this.b=t;I(this.j);this.h?this.h.stop(w(this.T,this,null),w(this.T,this,"Failed to stop DIAL device.")):this.T()};
g.w=function(){this.b();this.b=t;I(this.j);this.h&&this.h.removeUpdateListener(this.K);this.h=null;al.A.w.call(this)};
function bl(a){a.b=a.D.Mc(a.G,a.f.label,a.f.friendlyName,w(function(a){this.b=t;this.mb(a)},a),w(function(a){this.b=t;
this.T(a)},a))}
g.De=function(a){this.isDisposed()||a||(Wk(this,"DIAL session died."),this.b(),this.b=t,this.T())};
function cl(a){var b={};b.pairingCode=a.G;if(a.i){var c=a.i.currentTime||0;b.v=a.i.videoId;b.t=c}Ck()&&(b.env_useStageMdx=1);return Gd(b)}
g.Ob=function(a){this.G=ck();if(this.i){var b=new chrome.cast.DialLaunchResponse(!0,cl(this));a(b);bl(this)}else this.o=w(function(){I(this.j);this.o=t;this.j=NaN;var b=new chrome.cast.DialLaunchResponse(!0,cl(this));a(b);bl(this)},this),this.j=H(w(function(){this.o()},this),100)};
g.qd=function(a,b){Pk(this.D,this.C.receiver.label,a,this.f.friendlyName,w(function(a){a&&a.token?(this.mb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Ob(b)},this),w(function(a){Wk(this,"Failed to get DIAL screen: "+a);
this.Ob(b)},this))};function dl(a,b){Vk.call(this,a,b,"ManualSession");this.b=H(w(this.La,this,null),150)}
y(dl,Vk);dl.prototype.stop=function(){this.T()};
dl.prototype.Sb=t;dl.prototype.La=function(){I(this.b);this.b=NaN;var a=gk(this.D.S(),this.f.label);a?this.mb(a):this.T(Error("No such screen"))};
dl.prototype.w=function(){I(this.b);this.b=NaN;dl.A.w.call(this)};function X(a){V.call(this);this.f=a;this.b=null;this.i=!1;this.g=[];this.h=w(this.Md,this)}
y(X,V);g=X.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest("233637DE");c.dialRequest=new chrome.cast.DialRequest("YouTube");var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,c=new chrome.cast.ApiConfig(c,w(this.uc,this),w(this.Nd,this),d,e);c.customDialLaunchCallback=w(this.Bd,this);chrome.cast.initialize(c,w(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.h),
Kj(),this.f.subscribe("onlineScreenChange",w(this.Nc,this)),this.g=el(this),chrome.cast.setCustomReceivers(this.g,t,w(function(a){this.H("Failed to set initial custom receivers: "+L(a))},this)),this.u("yt-remote-cast2-availability-change",fl(this)),b(!0))},this),w(function(a){this.H("Failed to initialize API: "+L(a));
b(!1)},this))};
g.me=function(a,b){gl("Setting connected screen ID: "+a+" -> "+b);if(this.b){var c=this.b.g;if(!a||c&&c.id!=a)gl("Unsetting old screen status: "+this.b.f.friendlyName),E(this.b),this.b=null}if(a&&b){if(!this.b){c=gk(this.f.S(),a);if(!c){gl("setConnectedScreenStatus: Unknown screen.");return}var d=hl(this,c);d||(gl("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.g.push(d),chrome.cast.setCustomReceivers(this.g,
t,w(function(a){this.H("Failed to set initial custom receivers: "+L(a))},this)));
gl("setConnectedScreenStatus: new active receiver: "+d.friendlyName);il(this,new dl(this.f,d),!0)}this.b.Tb(b)}else gl("setConnectedScreenStatus: no screen.")};
function hl(a,b){return b?Na(a.g,function(a){return Sj(b,a.label)},a):null}
g.ne=function(a){this.isDisposed()?this.H("Setting connection data on disposed cast v2"):this.b?this.b.La(a):this.H("Setting connection data without a session")};
g.Ce=function(){this.isDisposed()?this.H("Stopping session on disposed cast v2"):this.b?(this.b.stop(),E(this.b),this.b=null):gl("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(w(this.uc,this),w(this.Qd,this))};
g.w=function(){this.f.unsubscribe("onlineScreenChange",w(this.Nc,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.h);var a=Lj,b=r("yt.mdx.remote.debug.handlers_");Qa(b||[],a);E(this.b);X.A.w.call(this)};
function gl(a){Oj("Controller",a)}
g.H=function(a){Oj("Controller",a)};
function Lj(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function fl(a){return a.i||!!a.g.length||!!a.b}
function il(a,b,c){E(a.b);(a.b=b)?(c?a.u("yt-remote-cast2-receiver-resumed",b.f):a.u("yt-remote-cast2-receiver-selected",b.f),b.subscribe("sessionScreen",w(a.wc,a,b)),b.g?a.u("yt-remote-cast2-session-change",b.g):c&&a.b.La(null)):a.u("yt-remote-cast2-session-change",null)}
g.wc=function(a,b){this.b==a&&(b||il(this,null),this.u("yt-remote-cast2-session-change",b))};
g.Md=function(a,b){if(!this.isDisposed())if(a)switch(gl("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.b)if(this.b.f.label!=a.label)gl("onReceiverAction_: Stopping active receiver: "+this.b.f.friendlyName),this.b.stop();else{gl("onReceiverAction_: Casting to active receiver.");this.b.g&&this.u("yt-remote-cast2-session-change",this.b.g);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:il(this,new dl(this.f,a));break;case chrome.cast.ReceiverType.DIAL:il(this,
new al(this.f,a));break;case chrome.cast.ReceiverType.CAST:il(this,new Xk(this.f,a));break;default:this.H("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.b&&this.b.f.label==a.label?this.b.stop():this.H("Stopping receiver w/o session: "+a.friendlyName)}else this.H("onReceiverAction_ called without receiver.")};
g.Bd=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.H("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.b?this.b.f:null;if(!c||c.label!=b.label)return this.H("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.b.g)return gl("Reselecting dial screen."),
this.u("yt-remote-cast2-session-change",this.b.g),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.H('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);il(this,new al(this.f,b))}b=this.b;b.C=a;return b.C.appState==chrome.cast.DialAppState.RUNNING?new Promise(w(b.qd,b,(b.C.extraData||{}).screenId||null)):new Promise(w(b.Ob,b))};
g.uc=function(a){if(!this.isDisposed()){gl("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.b)if(b.receiverType==chrome.cast.ReceiverType.CAST)gl("Got resumed cast session before resumed mdx connection."),il(this,new Xk(this.f,b),!0);else{this.H("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.b.f,d=gk(this.f.S(),c.label);d&&Sj(d,b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==
chrome.cast.ReceiverType.CAST&&(gl("onSessionEstablished_: manual to cast session change "+b.friendlyName),E(this.b),this.b=new Xk(this.f,b),this.b.subscribe("sessionScreen",w(this.wc,this,this.b)),this.b.La(null));this.b.Sb(a)}}};
g.Be=function(){return this.b?this.b.Oc():null};
g.Qd=function(a){this.isDisposed()||(this.H("Failed to estabilish a session: "+L(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&il(this,null))};
g.Nd=function(a){gl("Receiver availability updated: "+a);if(!this.isDisposed()){var b=fl(this);this.i=a==chrome.cast.ReceiverAvailability.AVAILABLE;fl(this)!=b&&this.u("yt-remote-cast2-availability-change",fl(this))}};
function el(a){var b=a.f.Lc(),c=a.b&&a.b.f;a=Ka(b,function(a){c&&Sj(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,f=hl(this,a);f?(f.label=b,f.friendlyName=a.name):(f=new chrome.cast.Receiver(b,a.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.Nc=function(){if(!this.isDisposed()){var a=fl(this);this.g=el(this);gl("Updating custom receivers: "+L(this.g));chrome.cast.setCustomReceivers(this.g,t,w(function(){this.H("Failed to set custom receivers.")},this));
var b=fl(this);b!=a&&this.u("yt-remote-cast2-availability-change",b)}};
X.prototype.setLaunchParams=X.prototype.ne;X.prototype.setConnectedScreenStatus=X.prototype.me;X.prototype.stopSession=X.prototype.Ce;X.prototype.getCastSession=X.prototype.Be;X.prototype.requestSession=X.prototype.requestSession;X.prototype.init=X.prototype.init;X.prototype.dispose=X.prototype.dispose;function jl(a,b,c){kl()?ml(a)&&(nl(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?ol(b):(window.__onGCastApiAvailable=function(a,c){a?ol(b):(pl("Failed to load cast API: "+c),ql(!1),nl(!1),nj("yt-remote-cast-available"),nj("yt-remote-cast-receiver"),rl(),b(!1))},c?vc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):Ej())):ll("Cannot initialize because not running Chrome")}
function rl(){ll("dispose");var a=sl();a&&a.dispose();tl=null;q("yt.mdx.remote.cloudview.instance_",null,void 0);ul(!1);rc(vl);vl.length=0}
function wl(){return!!mj("yt-remote-cast-installed")}
function xl(){var a=mj("yt-remote-cast-receiver");a?(a=a.friendlyName,a=-1!=a.indexOf("&")?"document"in m?Aa(a):Ca(a):a):a=null;return a}
function yl(){ll("clearCurrentReciever");nj("yt-remote-cast-receiver")}
function zl(){wl()?sl()?Al()?(ll("Requesting cast selector."),tl.requestSession()):(ll("Wait for cast API to be ready to request the session."),vl.push(oc("yt-remote-cast2-api-ready",zl))):pl("requestCastSelector: Cast is not initialized."):pl("requestCastSelector: Cast API is not installed!")}
function Bl(a){Al()?sl().setLaunchParams(a):pl("setLaunchParams called before ready.")}
function Cl(a,b){Al()?sl().setConnectedScreenStatus(a,b):pl("setConnectedScreenStatus called before ready.")}
var tl=null;function kl(){var a;a=0<=nb.search(/\ (CrMo|Chrome|CriOS)\//);return uf||a}
function ml(a){var b=!1;if(!tl){var c=r("yt.mdx.remote.cloudview.instance_");c||(c=new X(a),c.subscribe("yt-remote-cast2-availability-change",function(a){U("yt-remote-cast-available",a);J("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){ll("onReceiverSelected: "+a.friendlyName);
U("yt-remote-cast-receiver",a);J("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){ll("onReceiverResumed: "+a.friendlyName);
U("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){ll("onSessionChange: "+Wj(a));
a||nj("yt-remote-cast-receiver");J("yt-remote-cast2-session-change",a)}),q("yt.mdx.remote.cloudview.instance_",c,void 0),b=!0);
tl=c}ll("cloudview.createSingleton_: "+b);return b}
function sl(){tl||(tl=r("yt.mdx.remote.cloudview.instance_"));return tl}
function ol(a){ql(!0);nl(!1);tl.init(!0,function(b){b?(ul(!0),J("yt-remote-cast2-api-ready")):(pl("Failed to initialize cast API."),ql(!1),nj("yt-remote-cast-available"),nj("yt-remote-cast-receiver"),rl());a(b)})}
function ll(a){Oj("cloudview",a)}
function pl(a){Oj("cloudview",a)}
function ql(a){ll("setCastInstalled_ "+a);U("yt-remote-cast-installed",a)}
function Al(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function ul(a){ll("setApiReady_ "+a);q("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function nl(a){q("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var vl=[];function Dl(){}
;function El(a,b){this.action=a;this.params=b||null}
;function Fl(){this.b=x()}
new Fl;Fl.prototype.set=function(a){this.b=a};
Fl.prototype.reset=function(){this.set(x())};
Fl.prototype.get=function(){return this.b};function Gl(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.b=!1;this.Dc=!0}
Gl.prototype.stopPropagation=function(){this.b=!0};
Gl.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Dc=!1};var Hl=!K||od(9),Il=K&&!nd("9");!dd||nd("528");cd&&nd("1.9b")||K&&nd("8")||ad&&nd("9.5")||dd&&nd("528");cd&&!nd("8")||K&&nd("9");function Jl(a,b){Gl.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.f=this.state=null;a&&this.init(a,b)}
y(Jl,Gl);
Jl.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(cd){var f;a:{try{ef(e.nodeName);f=!0;break a}catch(h){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||
0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.f=a;a.defaultPrevented&&this.preventDefault()};
Jl.prototype.stopPropagation=function(){Jl.A.stopPropagation.call(this);this.f.stopPropagation?this.f.stopPropagation():this.f.cancelBubble=!0};
Jl.prototype.preventDefault=function(){Jl.A.preventDefault.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Il)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Kl="closure_listenable_"+(1E6*Math.random()|0),Ll=0;function Ml(a,b,c,d,e){this.listener=a;this.b=null;this.src=b;this.type=c;this.eb=!!d;this.ib=e;this.key=++Ll;this.Na=this.cb=!1}
function Nl(a){a.Na=!0;a.listener=null;a.b=null;a.src=null;a.ib=null}
;function Ol(a){this.src=a;this.b={};this.f=0}
function Pl(a,b,c,d,e){var f=b.toString();b=a.b[f];b||(b=a.b[f]=[],a.f++);var h=Ql(b,c,d,e);-1<h?(a=b[h],a.cb=!1):(a=new Ml(c,a.src,f,!!d,e),a.cb=!1,b.push(a));return a}
Ol.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.b))return!1;var e=this.b[a];b=Ql(e,b,c,d);return-1<b?(Nl(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.b[a],this.f--),!0):!1};
function Rl(a,b){var c=b.type;c in a.b&&Qa(a.b[c],b)&&(Nl(b),0==a.b[c].length&&(delete a.b[c],a.f--))}
function Sl(a,b,c,d,e){a=a.b[b.toString()];b=-1;a&&(b=Ql(a,c,d,e));return-1<b?a[b]:null}
function Ql(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Na&&f.listener==b&&f.eb==!!c&&f.ib==d)return e}return-1}
;var Tl="closure_lm_"+(1E6*Math.random()|0),Ul={},Vl=0;
function Wl(a,b,c,d,e){if(ea(b)){for(var f=0;f<b.length;f++)Wl(a,b[f],c,d,e);return null}c=Xl(c);if(a&&a[Kl])a=a.jb(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=Yl(a);h||(a[Tl]=h=new Ol(a));c=Pl(h,b,c,d,e);if(!c.b){d=Zl();c.b=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent($l(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Vl++}a=c}return a}
function Zl(){var a=am,b=Hl?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function bm(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)bm(a,b[f],c,d,e);else c=Xl(c),a&&a[Kl]?a.sb(b,c,d,e):a&&(a=Yl(a))&&(b=Sl(a,b,c,!!d,e))&&cm(b)}
function cm(a){if(!ga(a)&&a&&!a.Na){var b=a.src;if(b&&b[Kl])Rl(b.g,a);else{var c=a.type,d=a.b;b.removeEventListener?b.removeEventListener(c,d,a.eb):b.detachEvent&&b.detachEvent($l(c),d);Vl--;(c=Yl(b))?(Rl(c,a),0==c.f&&(c.src=null,b[Tl]=null)):Nl(a)}}}
function $l(a){return a in Ul?Ul[a]:Ul[a]="on"+a}
function dm(a,b,c,d){var e=!0;if(a=Yl(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.eb==c&&!f.Na&&(f=em(f,d),e=e&&!1!==f)}return e}
function em(a,b){var c=a.listener,d=a.ib||a.src;a.cb&&cm(a);return c.call(d,b)}
function am(a,b){if(a.Na)return!0;if(!Hl){var c=b||r("window.event"),d=new Jl(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;!d.b&&0<=h;h--){d.currentTarget=c[h];var k=dm(c[h],f,!0,d),e=e&&k}for(h=0;!d.b&&h<c.length;h++)d.currentTarget=c[h],k=dm(c[h],f,!1,d),e=e&&k}return e}return em(a,new Jl(b,this))}
function Yl(a){a=a[Tl];return a instanceof Ol?a:null}
var fm="__closure_events_fn_"+(1E9*Math.random()>>>0);function Xl(a){if(ha(a))return a;a[fm]||(a[fm]=function(b){return a.handleEvent(b)});
return a[fm]}
;function gm(){D.call(this);this.g=new Ol(this);this.ra=this;this.ca=null}
y(gm,D);gm.prototype[Kl]=!0;g=gm.prototype;g.addEventListener=function(a,b,c,d){Wl(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){bm(this,a,b,c,d)};
function hm(a,b){var c,d=a.ca;if(d){c=[];for(var e=1;d;d=d.ca)c.push(d),++e}var d=a.ra,e=b,f=e.type||e;if(v(e))e=new Gl(e,d);else if(e instanceof Gl)e.target=e.target||d;else{var h=e,e=new Gl(f,d);mb(e,h)}var h=!0,k;if(c)for(var l=c.length-1;!e.b&&0<=l;l--)k=e.currentTarget=c[l],h=im(k,f,!0,e)&&h;e.b||(k=e.currentTarget=d,h=im(k,f,!0,e)&&h,e.b||(h=im(k,f,!1,e)&&h));if(c)for(l=0;!e.b&&l<c.length;l++)k=e.currentTarget=c[l],h=im(k,f,!1,e)&&h}
g.w=function(){gm.A.w.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.b){for(var d=a.b[c],e=0;e<d.length;e++)++b,Nl(d[e]);delete a.b[c];a.f--}}this.ca=null};
g.jb=function(a,b,c,d){return Pl(this.g,String(a),b,c,d)};
g.sb=function(a,b,c,d){return this.g.remove(String(a),b,c,d)};
function im(a,b,c,d){b=a.g.b[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Na&&h.eb==c){var k=h.listener,l=h.ib||h.src;h.cb&&Rl(a.g,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.Dc}
;function jm(a,b){this.f=new ud(a);this.b=b?sd:rd}
jm.prototype.stringify=function(a){return td(this.f,a)};
jm.prototype.parse=function(a){return this.b(a)};function km(a,b){this.b=0;this.j=void 0;this.h=this.f=this.g=null;this.i=this.l=!1;if(a!=t)try{var c=this;a.call(b,function(a){lm(c,2,a)},function(a){lm(c,3,a)})}catch(d){lm(this,3,d)}}
function mm(){this.next=this.context=this.f=this.h=this.b=null;this.g=!1}
mm.prototype.reset=function(){this.context=this.f=this.h=this.b=null;this.g=!1};
var nm=new Nb(function(){return new mm},function(a){a.reset()},100);
function om(a,b,c){var d=nm.get();d.h=a;d.f=b;d.context=c;return d}
function pm(a){return new km(function(b,c){c(a)})}
km.prototype.then=function(a,b,c){return qm(this,ha(a)?a:null,ha(b)?b:null,c)};
km.prototype.then=km.prototype.then;km.prototype.$goog_Thenable=!0;km.prototype.cancel=function(a){0==this.b&&Sb(function(){var b=new rm(a);sm(this,b)},this)};
function sm(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,h=c.f;h&&(h.g||(d++,h.b==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.b&&1==d?sm(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):tm(c),um(c,e,3,b)))}a.g=null}else lm(a,3,b)}
function vm(a,b){a.f||2!=a.b&&3!=a.b||wm(a);a.h?a.h.next=b:a.f=b;a.h=b}
function qm(a,b,c,d){var e=om(null,null,null);e.b=new km(function(a,h){e.h=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){h(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof rm?h(b):a(e)}catch(n){h(n)}}:h});
e.b.g=a;vm(a,e);return e.b}
km.prototype.C=function(a){this.b=0;lm(this,2,a)};
km.prototype.V=function(a){this.b=0;lm(this,3,a)};
function lm(a,b,c){if(0==a.b){a==c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.C,h=a.V;if(e instanceof km)vm(e,om(f||t,h||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(n){k=!1}else k=!1;if(k)e.then(f,h,a),d=!0;else{if(ia(e))try{var l=e.then;if(ha(l)){xm(e,l,f,h,a);d=!0;break a}}catch(n){h.call(a,n);d=!0;break a}d=!1}}}d||(a.j=c,a.b=b,a.g=null,wm(a),3!=b||c instanceof rm||ym(a,c))}}
function xm(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function h(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,h,f)}catch(l){f(l)}}
function wm(a){a.l||(a.l=!0,Sb(a.o,a))}
function tm(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
km.prototype.o=function(){for(var a=null;a=tm(this);)um(this,a,this.b,this.j);this.l=!1};
function um(a,b,c,d){if(3==c&&b.f&&!b.g)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,zm(b,c,d);else try{b.g?b.h.call(b.context):zm(b,c,d)}catch(e){Am.call(null,e)}Ob(nm,b)}
function zm(a,b,c){2==b?a.h.call(a.context,c):a.f&&a.f.call(a.context,c)}
function ym(a,b){a.i=!0;Sb(function(){a.i&&Am.call(null,b)})}
var Am=Kb;function rm(a){pa.call(this,a)}
y(rm,pa);rm.prototype.name="cancel";function Bm(a,b){gm.call(this);this.b=a||1;this.f=b||m;this.h=w(this.pe,this);this.i=x()}
y(Bm,gm);g=Bm.prototype;g.enabled=!1;g.X=null;function Cm(a,b){a.b=b;a.X&&a.enabled?(a.stop(),a.start()):a.X&&a.stop()}
g.pe=function(){if(this.enabled){var a=x()-this.i;0<a&&a<.8*this.b?this.X=this.f.setTimeout(this.h,this.b-a):(this.X&&(this.f.clearTimeout(this.X),this.X=null),hm(this,"tick"),this.enabled&&(this.X=this.f.setTimeout(this.h,this.b),this.i=x()))}};
g.start=function(){this.enabled=!0;this.X||(this.X=this.f.setTimeout(this.h,this.b),this.i=x())};
g.stop=function(){this.enabled=!1;this.X&&(this.f.clearTimeout(this.X),this.X=null)};
g.w=function(){Bm.A.w.call(this);this.stop();delete this.f};
function Dm(a,b,c){if(ha(a))c&&(a=w(a,c));else if(a&&"function"==typeof a.handleEvent)a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)}
;function Em(a,b,c){D.call(this);this.h=null!=c?w(a,c):a;this.g=b;this.f=w(this.Sd,this);this.b=[]}
y(Em,D);g=Em.prototype;g.Oa=!1;g.Ya=0;g.Aa=null;g.gd=function(a){this.b=arguments;this.Aa||this.Ya?this.Oa=!0:Fm(this)};
g.stop=function(){this.Aa&&(m.clearTimeout(this.Aa),this.Aa=null,this.Oa=!1,this.b=[])};
g.pause=function(){this.Ya++};
g.resume=function(){this.Ya--;this.Ya||!this.Oa||this.Aa||(this.Oa=!1,Fm(this))};
g.w=function(){Em.A.w.call(this);this.stop()};
g.Sd=function(){this.Aa=null;this.Oa&&!this.Ya&&(this.Oa=!1,Fm(this))};
function Fm(a){a.Aa=Dm(a.f,a.g);a.h.apply(null,a.b)}
;function Gm(a){D.call(this);this.f=a;this.b={}}
y(Gm,D);var Hm=[];Gm.prototype.jb=function(a,b,c,d){ea(b)||(b&&(Hm[0]=b.toString()),b=Hm);for(var e=0;e<b.length;e++){var f=Wl(a,b[e],c||this.handleEvent,d||!1,this.f||this);if(!f)break;this.b[f.key]=f}return this};
Gm.prototype.sb=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)this.sb(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.f||this,c=Xl(c),d=!!d,b=a&&a[Kl]?Sl(a.g,String(b),c,d,e):a?(a=Yl(a))?Sl(a,b,c,d,e):null:null,b&&(cm(b),delete this.b[b.key]);return this};
function Im(a){Ya(a.b,function(a,c){this.b.hasOwnProperty(c)&&cm(a)},a);
a.b={}}
Gm.prototype.w=function(){Gm.A.w.call(this);Im(this)};
Gm.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Jm(){}
Jm.prototype.b=null;function Km(a){var b;(b=a.b)||(b={},Lm(a)&&(b[0]=!0,b[1]=!0),b=a.b=b);return b}
;var Mm;function Nm(){}
y(Nm,Jm);function Om(a){return(a=Lm(a))?new ActiveXObject(a):new XMLHttpRequest}
function Lm(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}
Mm=new Nm;function Pm(a,b,c,d,e){this.b=a;this.g=c;this.o=d;this.j=e||1;this.i=45E3;this.h=new Gm(this);this.f=new Bm;Cm(this.f,250)}
g=Pm.prototype;g.Ba=null;g.fa=!1;g.Qa=null;g.Vb=null;g.Za=null;g.Pa=null;g.sa=null;g.va=null;g.Fa=null;g.I=null;g.ab=0;g.ga=null;g.vb=null;g.Ca=null;g.Wa=-1;g.Ec=!0;g.xa=!1;g.Mb=0;g.ob=null;var Qm={},Rm={};g=Pm.prototype;g.setTimeout=function(a){this.i=a};
function Sm(a,b,c){a.Pa=1;a.sa=Dg(b.clone());a.Fa=c;a.l=!0;Tm(a,null)}
function Um(a,b,c,d,e){a.Pa=1;a.sa=Dg(b.clone());a.Fa=null;a.l=c;e&&(a.Ec=!1);Tm(a,d)}
function Tm(a,b){a.Za=x();Vm(a);a.va=a.sa.clone();Bg(a.va,"t",a.j);a.ab=0;a.I=a.b.Fb(a.b.$a()?b:null);0<a.Mb&&(a.ob=new Em(w(a.Kc,a,a.I),a.Mb));a.h.jb(a.I,"readystatechange",a.be);var c=a.Ba?jb(a.Ba):{};a.Fa?(a.vb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.I.send(a.va,a.vb,a.Fa,c)):(a.vb="GET",a.Ec&&!dd&&(c.Connection="close"),a.I.send(a.va,a.vb,null,c));a.b.ea(1)}
g.be=function(a){a=a.target;var b=this.ob;b&&3==Wm(a)?b.gd():this.Kc(a)};
g.Kc=function(a){try{if(a==this.I)a:{var b=Wm(this.I),c=this.I.i,d=this.I.getStatus();if(K&&!od(10)||dd&&!nd("420+")){if(4>b)break a}else if(3>b||3==b&&!ad&&!Xm(this.I))break a;this.xa||4!=b||7==c||(8==c||0>=d?this.b.ea(3):this.b.ea(2));Ym(this);var e=this.I.getStatus();this.Wa=e;var f=Xm(this.I);(this.fa=200==e)?(4==b&&Zm(this),this.l?($m(this,b,f),ad&&this.fa&&3==b&&(this.h.jb(this.f,"tick",this.ae),this.f.start())):an(this,f),this.fa&&!this.xa&&(4==b?this.b.lb(this):(this.fa=!1,Vm(this)))):(this.Ca=
400==e&&0<f.indexOf("Unknown SID")?3:0,Y(),Zm(this),bn(this))}}catch(h){this.I&&Xm(this.I)}finally{}};
function $m(a,b,c){for(var d=!0;!a.xa&&a.ab<c.length;){var e=cn(a,c);if(e==Rm){4==b&&(a.Ca=4,Y(),d=!1);break}else if(e==Qm){a.Ca=4;Y();d=!1;break}else an(a,e)}4==b&&0==c.length&&(a.Ca=1,Y(),d=!1);a.fa=a.fa&&d;d||(Zm(a),bn(a))}
g.ae=function(){var a=Wm(this.I),b=Xm(this.I);this.ab<b.length&&(Ym(this),$m(this,a,b),this.fa&&4!=a&&Vm(this))};
function cn(a,b){var c=a.ab,d=b.indexOf("\n",c);if(-1==d)return Rm;c=Number(b.substring(c,d));if(isNaN(c))return Qm;d+=1;if(d+c>b.length)return Rm;var e=b.substr(d,c);a.ab=d+c;return e}
function dn(a,b){a.Za=x();Vm(a);var c=b?window.location.hostname:"";a.va=a.sa.clone();N(a.va,"DOMAIN",c);N(a.va,"t",a.j);try{a.ga=new ActiveXObject("htmlfile")}catch(n){Zm(a);a.Ca=7;Y();bn(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{if(h in Ea)h=Ea[h];else if(h in Da)h=Ea[h]=Da[h];else{var k=h,l=h.charCodeAt(0);if(31<l&&127>l)k=h;else{if(256>l){if(k="\\x",16>l||256<l)k+="0"}else k="\\u",4096>l&&(k+="0");
k+=l.toString(16).toUpperCase()}h=Ea[h]=k}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=Hc(sb("b/12014412"),d);a.ga.open();a.ga.write(Cb(c));a.ga.close();a.ga.parentWindow.m=w(a.Wd,a);a.ga.parentWindow.d=w(a.zc,a,!0);a.ga.parentWindow.rpcClose=w(a.zc,a,!1);c=a.ga.createElement("DIV");a.ga.parentWindow.document.body.appendChild(c);d=xb(a.va.toString());d=vb(d);za.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(ta,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(ua,"&lt;")),-1!=
d.indexOf(">")&&(d=d.replace(va,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(wa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(xa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ya,"&#0;")));d=Hc(sb("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=Cb(d);a.b.ea(1)}
g.Wd=function(a){en(w(this.Vd,this,a),0)};
g.Vd=function(a){this.xa||(Ym(this),an(this,a),Vm(this))};
g.zc=function(a){en(w(this.Ud,this,a),0)};
g.Ud=function(a){this.xa||(Zm(this),this.fa=a,this.b.lb(this),this.b.ea(4))};
g.cancel=function(){this.xa=!0;Zm(this)};
function Vm(a){a.Vb=x()+a.i;fn(a,a.i)}
function fn(a,b){if(null!=a.Qa)throw Error("WatchDog timer not null");a.Qa=en(w(a.Yd,a),b)}
function Ym(a){a.Qa&&(m.clearTimeout(a.Qa),a.Qa=null)}
g.Yd=function(){this.Qa=null;var a=x();0<=a-this.Vb?(2!=this.Pa&&this.b.ea(3),Zm(this),this.Ca=2,Y(),bn(this)):fn(this,this.Vb-a)};
function bn(a){a.b.lc()||a.xa||a.b.lb(a)}
function Zm(a){Ym(a);E(a.ob);a.ob=null;a.f.stop();Im(a.h);if(a.I){var b=a.I;a.I=null;gn(b);b.dispose()}a.ga&&(a.ga=null)}
function an(a,b){try{a.b.tc(a,b),a.b.ea(4)}catch(c){}}
;function hn(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;jn(a,b,function(e){e?c(!0):m.setTimeout(function(){hn(a,b,c,d,f)},f)})}}
function jn(a,b,c){var d=new Image;d.onload=function(){try{kn(d),c(!0)}catch(a){}};
d.onerror=function(){try{kn(d),c(!1)}catch(a){}};
d.onabort=function(){try{kn(d),c(!1)}catch(a){}};
d.ontimeout=function(){try{kn(d),c(!1)}catch(a){}};
m.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function kn(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function ln(a){this.b=a;this.f=new jm(null,!0)}
g=ln.prototype;g.Kb=null;g.U=null;g.pb=!1;g.Hc=null;g.fb=null;g.Pb=null;g.Lb=null;g.Y=null;g.qa=-1;g.Va=null;g.Ra=null;g.connect=function(a){this.Lb=a;a=mn(this.b,null,this.Lb);Y();this.Hc=x();var b=this.b.o;null!=b?(this.Va=b[0],(this.Ra=b[1])?(this.Y=1,nn(this)):(this.Y=2,on(this))):(Bg(a,"MODE","init"),this.U=new Pm(this,0,void 0,void 0,void 0),this.U.Ba=this.Kb,Um(this.U,a,!1,null,!0),this.Y=0)};
function nn(a){var b=mn(a.b,a.Ra,"/mail/images/cleardot.gif");Dg(b);hn(b.toString(),5E3,w(a.cd,a),3,2E3);a.ea(1)}
g.cd=function(a){if(a)this.Y=2,on(this);else{Y();var b=this.b;b.da=b.ta.qa;pn(b,9)}a&&this.ea(2)};
function on(a){var b=a.b.C;if(null!=b)Y(),b?(Y(),qn(a.b,a,!1)):(Y(),qn(a.b,a,!0));else if(a.U=new Pm(a,0,void 0,void 0,void 0),a.U.Ba=a.Kb,b=a.b,b=mn(b,b.$a()?a.Va:null,a.Lb),Y(),!K||od(10))Bg(b,"TYPE","xmlhttp"),Um(a.U,b,!1,a.Va,!1);else{Bg(b,"TYPE","html");var c=a.U;a=!!a.Va;c.Pa=3;c.sa=Dg(b.clone());dn(c,a)}}
g.Fb=function(a){return this.b.Fb(a)};
g.lc=function(){return!1};
g.tc=function(a,b){this.qa=a.Wa;if(0==this.Y)if(b){try{var c=this.f.parse(b)}catch(d){c=this.b;c.da=this.qa;pn(c,2);return}this.Va=c[0];this.Ra=c[1]}else c=this.b,c.da=this.qa,pn(c,2);else if(2==this.Y)if(this.pb)Y(),this.Pb=x();else if("11111"==b){if(Y(),this.pb=!0,this.fb=x(),c=this.fb-this.Hc,!K||od(10)||500>c)this.qa=200,this.U.cancel(),Y(),qn(this.b,this,!0)}else Y(),this.fb=this.Pb=x(),this.pb=!1};
g.lb=function(){this.qa=this.U.Wa;if(this.U.fa)0==this.Y?this.Ra?(this.Y=1,nn(this)):(this.Y=2,on(this)):2==this.Y&&(a=!1,(a=!K||od(10)?this.pb:200>this.Pb-this.fb?!1:!0)?(Y(),qn(this.b,this,!0)):(Y(),qn(this.b,this,!1)));else{0==this.Y?Y():2==this.Y&&Y();var a=this.b;a.da=this.qa;pn(a,2)}};
g.$a=function(){return this.b.$a()};
g.isActive=function(){return this.b.isActive()};
g.ea=function(a){this.b.ea(a)};function rn(a){gm.call(this);this.headers=new Nc;this.L=a||null;this.f=!1;this.K=this.b=null;this.ja=this.C="";this.i=0;this.l="";this.h=this.aa=this.o=this.W=!1;this.j=0;this.D=null;this.ka="";this.G=this.la=!1}
y(rn,gm);var sn=/^https?$/i,tn=["POST","PUT"];g=rn.prototype;
g.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.C+"; newUri="+a);b=b?b.toUpperCase():"GET";this.C=a;this.l="";this.i=0;this.ja=b;this.W=!1;this.f=!0;this.b=this.L?Om(this.L):Om(Mm);this.K=this.L?Km(this.L):Km(Mm);this.b.onreadystatechange=w(this.sc,this);try{Dl(un(this,"Opening Xhr")),this.aa=!0,this.b.open(b,String(a),!0),this.aa=!1}catch(f){Dl(un(this,"Error opening Xhr: "+f.message));vn(this,f);return}a=c||"";var e=this.headers.clone();
d&&Uc(d,function(a,b){e.set(b,a)});
d=Na(e.ia(),wn);c=m.FormData&&a instanceof m.FormData;!A(tn,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);
this.ka&&(this.b.responseType=this.ka);eb(this.b)&&(this.b.withCredentials=this.la);try{xn(this),0<this.j&&(this.G=yn(this.b),Dl(un(this,"Will abort after "+this.j+"ms if incomplete, xhr2 "+this.G)),this.G?(this.b.timeout=this.j,this.b.ontimeout=w(this.kc,this)):this.D=Dm(this.kc,this.j,this)),Dl(un(this,"Sending request")),this.o=!0,this.b.send(a),this.o=!1}catch(f){Dl(un(this,"Send error: "+f.message)),vn(this,f)}};
function yn(a){return K&&nd(9)&&ga(a.timeout)&&p(a.ontimeout)}
function wn(a){return"content-type"==a.toLowerCase()}
g.kc=function(){"undefined"!=typeof aa&&this.b&&(this.l="Timed out after "+this.j+"ms, aborting",this.i=8,un(this,this.l),hm(this,"timeout"),gn(this,8))};
function vn(a,b){a.f=!1;a.b&&(a.h=!0,a.b.abort(),a.h=!1);a.l=b;a.i=5;zn(a);An(a)}
function zn(a){a.W||(a.W=!0,hm(a,"complete"),hm(a,"error"))}
function gn(a,b){a.b&&a.f&&(un(a,"Aborting"),a.f=!1,a.h=!0,a.b.abort(),a.h=!1,a.i=b||7,hm(a,"complete"),hm(a,"abort"),An(a))}
g.w=function(){this.b&&(this.f&&(this.f=!1,this.h=!0,this.b.abort(),this.h=!1),An(this,!0));rn.A.w.call(this)};
g.sc=function(){this.isDisposed()||(this.aa||this.o||this.h?Bn(this):this.Kd())};
g.Kd=function(){Bn(this)};
function Bn(a){if(a.f&&"undefined"!=typeof aa)if(a.K[1]&&4==Wm(a)&&2==a.getStatus())un(a,"Local request error detected and ignored");else if(a.o&&4==Wm(a))Dm(a.sc,0,a);else if(hm(a,"readystatechange"),4==Wm(a)){un(a,"Request complete");a.f=!1;try{var b=a.getStatus(),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.C).match(zd)[1]||null;if(!f&&m.self&&m.self.location)var h=m.self.location.protocol,
f=h.substr(0,h.length-1);e=!sn.test(f?f.toLowerCase():"")}d=e}if(d)hm(a,"complete"),hm(a,"success");else{a.i=6;var k;try{k=2<Wm(a)?a.b.statusText:""}catch(l){k=""}a.l=k+" ["+a.getStatus()+"]";zn(a)}}finally{An(a)}}}
function An(a,b){if(a.b){xn(a);var c=a.b,d=a.K[0]?t:null;a.b=null;a.K=null;b||hm(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function xn(a){a.b&&a.G&&(a.b.ontimeout=null);ga(a.D)&&(m.clearTimeout(a.D),a.D=null)}
g.isActive=function(){return!!this.b};
function Wm(a){return a.b?a.b.readyState:0}
g.getStatus=function(){try{return 2<Wm(this)?this.b.status:-1}catch(a){return-1}};
function Xm(a){try{return a.b?a.b.responseText:""}catch(b){return""}}
function un(a,b){return b+" ["+a.ja+" "+a.C+" "+a.getStatus()+"]"}
;function Cn(a,b,c){this.j=a||null;this.b=1;this.f=[];this.h=[];this.i=new jm(null,!0);this.o=b||null;this.C=null!=c?c:null}
function Dn(a,b){this.b=a;this.map=b;this.context=null}
g=Cn.prototype;g.Ta=null;g.R=null;g.F=null;g.Jb=null;g.gb=null;g.bc=null;g.hb=null;g.Xa=0;g.vd=0;g.M=null;g.ua=null;g.oa=null;g.za=null;g.ta=null;g.ub=null;g.Ka=-1;g.mc=-1;g.da=-1;g.Ua=0;g.Ja=0;g.ya=8;var En=new gm;function Fn(a){Gl.call(this,"statevent",a)}
y(Fn,Gl);function Gn(a,b){Gl.call(this,"timingevent",a);this.size=b}
y(Gn,Gl);function Hn(a){Gl.call(this,"serverreachability",a)}
y(Hn,Gl);g=Cn.prototype;g.connect=function(a,b,c,d,e){Y();this.Jb=b;this.Ta=c||{};d&&p(e)&&(this.Ta.OSID=d,this.Ta.OAID=e);this.ta=new ln(this);this.ta.Kb=null;this.ta.f=this.i;this.ta.connect(a)};
function In(a){Jn(a);if(3==a.b){var b=a.Xa++,c=a.gb.clone();N(c,"SID",a.g);N(c,"RID",b);N(c,"TYPE","terminate");Kn(a,c);b=new Pm(a,0,a.g,b,void 0);b.Pa=2;b.sa=Dg(c.clone());(new Image).src=b.sa;b.Za=x();Vm(b)}Ln(a)}
function Jn(a){if(a.ta){var b=a.ta;b.U&&(b.U.cancel(),b.U=null);b.qa=-1;a.ta=null}a.F&&(a.F.cancel(),a.F=null);a.oa&&(m.clearTimeout(a.oa),a.oa=null);Mn(a);a.R&&(a.R.cancel(),a.R=null);a.ua&&(m.clearTimeout(a.ua),a.ua=null)}
function Nn(a,b){if(0==a.b)throw Error("Invalid operation: sending map when state is closed");a.f.push(new Dn(a.vd++,b));2!=a.b&&3!=a.b||On(a)}
g.lc=function(){return 0==this.b};
function On(a){a.R||a.ua||(a.ua=en(w(a.yc,a),0),a.Ua=0)}
g.yc=function(a){this.ua=null;Pn(this,a)};
function Pn(a,b){if(1==a.b){if(!b){a.Xa=Math.floor(1E5*Math.random());var c=a.Xa++,d=new Pm(a,0,"",c,void 0);d.Ba=null;var e=Qn(a),f=a.gb.clone();N(f,"RID",c);a.j&&N(f,"CVER",a.j);Kn(a,f);Sm(d,f,e);a.R=d;a.b=2}}else 3==a.b&&(b?Rn(a,b):0!=a.f.length&&(a.R||Rn(a)))}
function Rn(a,b){var c,d;b?6<a.ya?(a.f=a.h.concat(a.f),a.h.length=0,c=a.Xa-1,d=Qn(a)):(c=b.o,d=b.Fa):(c=a.Xa++,d=Qn(a));var e=a.gb.clone();N(e,"SID",a.g);N(e,"RID",c);N(e,"AID",a.Ka);Kn(a,e);c=new Pm(a,0,a.g,c,a.Ua+1);c.Ba=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.R=c;Sm(c,e,d)}
function Kn(a,b){if(a.M){var c=a.M.ic(a);c&&Ya(c,function(a,c){N(b,c,a)})}}
function Qn(a){var b=Math.min(a.f.length,1E3),c=["count="+b],d;6<a.ya&&0<b?(d=a.f[0].b,c.push("ofs="+d)):d=0;for(var e=0;e<b;e++){var f=a.f[e].b,h=a.f[e].map,f=6>=a.ya?e:f-d;try{Uc(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.h=a.h.concat(a.f.splice(0,b));
return c.join("&")}
function Sn(a){a.F||a.oa||(a.l=1,a.oa=en(w(a.xc,a),0),a.Ja=0)}
function Tn(a){if(a.F||a.oa||3<=a.Ja)return!1;a.l++;a.oa=en(w(a.xc,a),Un(a,a.Ja));a.Ja++;return!0}
g.xc=function(){this.oa=null;this.F=new Pm(this,0,this.g,"rpc",this.l);this.F.Ba=null;this.F.Mb=0;var a=this.bc.clone();N(a,"RID","rpc");N(a,"SID",this.g);N(a,"CI",this.ub?"0":"1");N(a,"AID",this.Ka);Kn(this,a);if(!K||od(10))N(a,"TYPE","xmlhttp"),Um(this.F,a,!0,this.hb,!1);else{N(a,"TYPE","html");var b=this.F,c=!!this.hb;b.Pa=3;b.sa=Dg(a.clone());dn(b,c)}};
function qn(a,b,c){a.ub=c;a.da=b.qa;a.fd(1,0);a.gb=mn(a,null,a.Jb);On(a)}
g.tc=function(a,b){if(0!=this.b&&(this.F==a||this.R==a))if(this.da=a.Wa,this.R==a&&3==this.b)if(7<this.ya){var c;try{c=this.i.parse(b)}catch(f){c=null}if(ea(c)&&3==c.length)if(0==c[0])a:{if(!this.oa){if(this.F)if(this.F.Za+3E3<this.R.Za)Mn(this),this.F.cancel(),this.F=null;else break a;Tn(this);Y()}}else this.mc=c[1],0<this.mc-this.Ka&&37500>c[2]&&this.ub&&0==this.Ja&&!this.za&&(this.za=en(w(this.wd,this),6E3));else pn(this,11)}else"y2f%"!=b&&pn(this,11);else if(this.F==a&&Mn(this),!/^[\s\xa0]*$/.test(b)){c=
this.i.parse(b);ea(c);for(var d=0;d<c.length;d++){var e=c[d];this.Ka=e[0];e=e[1];2==this.b?"c"==e[0]?(this.g=e[1],this.hb=e[2],e=e[3],null!=e?this.ya=e:this.ya=6,this.b=3,this.M&&this.M.gc(this),this.bc=mn(this,this.$a()?this.hb:null,this.Jb),Sn(this)):"stop"==e[0]&&pn(this,7):3==this.b&&("stop"==e[0]?pn(this,7):"noop"!=e[0]&&this.M&&this.M.fc(this,e),this.Ja=0)}}};
g.wd=function(){null!=this.za&&(this.za=null,this.F.cancel(),this.F=null,Tn(this),Y())};
function Mn(a){null!=a.za&&(m.clearTimeout(a.za),a.za=null)}
g.lb=function(a){var b;if(this.F==a)Mn(this),this.F=null,b=2;else if(this.R==a)this.R=null,b=1;else return;this.da=a.Wa;if(0!=this.b)if(a.fa)1==b?(x(),hm(En,new Gn(En,a.Fa?a.Fa.length:0)),On(this),this.h.length=0):Sn(this);else{var c=a.Ca,d;if(!(d=3==c||7==c||0==c&&0<this.da)){if(d=1==b)this.R||this.ua||1==this.b||2<=this.Ua?d=!1:(this.ua=en(w(this.yc,this,a),Un(this,this.Ua)),this.Ua++,d=!0);d=!(d||2==b&&Tn(this))}if(d)switch(c){case 1:pn(this,5);break;case 4:pn(this,10);break;case 3:pn(this,6);
break;case 7:pn(this,12);break;default:pn(this,2)}}};
function Un(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
g.fd=function(a){if(!A(arguments,this.b))throw Error("Unexpected channel state: "+this.b);};
function pn(a,b){if(2==b||9==b){var c=null;a.M&&(c=null);var d=w(a.oe,a);c||(c=new ng("//www.google.com/images/cleardot.gif"),Dg(c));jn(c.toString(),1E4,d)}else Y();Vn(a,b)}
g.oe=function(a){a?Y():(Y(),Vn(this,8))};
function Vn(a,b){a.b=0;a.M&&a.M.ec(a,b);Ln(a);Jn(a)}
function Ln(a){a.b=0;a.da=-1;if(a.M)if(0==a.h.length&&0==a.f.length)a.M.Db(a);else{var b=Ta(a.h),c=Ta(a.f);a.h.length=0;a.f.length=0;a.M.Db(a,b,c)}}
function mn(a,b,c){var d=Eg(c);if(""!=d.f)b&&pg(d,b+"."+d.f),qg(d,d.j);else var e=window.location,d=Fg(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.Ta&&Ya(a.Ta,function(a,b){N(d,b,a)});
N(d,"VER",a.ya);Kn(a,d);return d}
g.Fb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new rn;a.la=!1;return a};
g.isActive=function(){return!!this.M&&this.M.isActive(this)};
function en(a,b){if(!ha(a))throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},b)}
g.ea=function(){hm(En,new Hn(En))};
function Y(){hm(En,new Fn(En))}
g.$a=function(){return!(!K||od(10))};
function Wn(){}
g=Wn.prototype;g.gc=function(){};
g.fc=function(){};
g.ec=function(){};
g.Db=function(){};
g.ic=function(){return{}};
g.isActive=function(){return!0};function Xn(a,b){Bm.call(this);this.l=0;if(ha(a))b&&(a=w(a,b));else if(a&&ha(a.handleEvent))a=w(a.handleEvent,a);else throw Error("Invalid listener argument");this.o=a;Wl(this,"tick",w(this.j,this));Yn(this)}
y(Xn,Bm);Xn.prototype.j=function(){if(500<this.b){var a=this.b;24E4>2*a&&(a*=2);Cm(this,a)}this.o()};
Xn.prototype.start=function(){Xn.A.start.call(this);this.l=x()+this.b};
Xn.prototype.stop=function(){this.l=0;Xn.A.stop.call(this)};
function Yn(a){a.stop();Cm(a,5E3+2E4*Math.random())}
;function Zn(a,b){this.D=a;this.l=b;this.g=new F;this.f=new Xn(this.ue,this);this.b=null;this.V=!1;this.i=null;this.C="";this.o=this.h=0;this.j=[]}
y(Zn,Wn);g=Zn.prototype;g.subscribe=function(a,b,c){return this.g.subscribe(a,b,c)};
g.unsubscribe=function(a,b,c){return this.g.unsubscribe(a,b,c)};
g.ha=function(a){return this.g.ha(a)};
g.u=function(a,b){return this.g.u.apply(this.g,arguments)};
g.dispose=function(){this.V||(this.V=!0,this.g.clear(),$n(this),E(this.g))};
g.isDisposed=function(){return this.V};
function ao(a){return{firstTestResults:[""],secondTestResults:!a.b.ub,sessionId:a.b.g,arrayId:a.b.Ka}}
g.connect=function(a,b,c){if(!this.b||2!=this.b.b){this.C="";this.f.stop();this.i=a||null;this.h=b||0;a=this.D+"/test";b=this.D+"/bind";var d=new Cn("1",c?c.firstTestResults:null,c?c.secondTestResults:null),e=this.b;e&&(e.M=null);d.M=this;this.b=d;e?this.b.connect(a,b,this.l,e.g,e.Ka):c?this.b.connect(a,b,this.l,c.sessionId,c.arrayId):this.b.connect(a,b,this.l)}};
function $n(a,b){a.o=b||0;a.f.stop();a.b&&(3==a.b.b&&Pn(a.b),In(a.b));a.o=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&mb(c,b);this.f.enabled||2==(this.b?this.b.b:0)?this.j.push(c):bo(this)&&Nn(this.b,c)};
g.gc=function(){Yn(this.f);this.i=null;this.h=0;if(this.j.length){var a=this.j;this.j=[];for(var b=0,c=a.length;b<c;++b)Nn(this.b,a[b])}this.u("handlerOpened")};
g.ec=function(a,b){var c=2==b&&401==this.b.da;if(4!=b&&!c){if(6==b||410==this.b.da)c=this.f,c.stop(),Cm(c,500);this.f.start()}this.u("handlerError",b)};
g.Db=function(a,b,c){if(!this.f.enabled)this.u("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].map;d&&this.j.push(d)}};
g.ic=function(){var a={v:2};this.C&&(a.gsessionid=this.C);0!=this.h&&(a.ui=""+this.h);0!=this.o&&(a.ui=""+this.o);this.i&&mb(a,this.i);return a};
g.fc=function(a,b){"S"==b[0]?this.C=b[1]:"gracefulReconnect"==b[0]?(Yn(this.f),this.f.start(),In(this.b)):this.u("handlerMessage",new El(b[0],b[1]))};
function bo(a){return!!a.b&&3==a.b.b}
function co(a,b){(a.l.loungeIdToken=b)||a.f.stop()}
g.ue=function(){this.f.stop();var a=this.b,b=0;a.F&&b++;a.R&&b++;0!=b?this.f.start():this.connect(this.i,this.h)};function eo(a){this.index=-1;this.videoId=this.f="";this.volume=this.b=-1;this.l=!1;this.audioTrackId=null;this.i=this.g=0;this.h=null;this.reset(a)}
function fo(a){a.audioTrackId=null;a.h=null;a.b=-1;a.g=0;a.i=x()}
eo.prototype.reset=function(a){this.f="";this.index=-1;this.videoId="";fo(this);this.volume=-1;this.l=!1;a&&(this.index=a.index,this.f=a.listId,this.videoId=a.videoId,this.b=a.playerState,this.volume=a.volume,this.l=a.muted,this.audioTrackId=a.audioTrackId,this.h=a.trackData,this.g=a.playerTime,this.i=a.playerTimeAt)};
function go(a){switch(a.b){case 1:return(x()-a.i)/1E3+a.g;case -1E3:return 0}return a.g}
function ho(a){var b={};b.index=a.index;b.listId=a.f;b.videoId=a.videoId;b.playerState=a.b;b.volume=a.volume;b.muted=a.l;b.audioTrackId=a.audioTrackId;b.trackData=kb(a.h);b.playerTime=a.g;b.playerTimeAt=a.i;return b}
eo.prototype.clone=function(){return new eo(ho(this))};function Z(a,b,c){V.call(this);this.h=NaN;this.K=!1;this.C=this.o=this.D=this.G=NaN;this.L=[];this.g=this.B=this.b=null;this.ra=a;this.L.push(M(window,"beforeunload",w(this.md,this)));this.f=[];this.B=new eo;this.aa=b.id;this.b=io(this,c);this.b.subscribe("handlerOpened",this.Ad,this);this.b.subscribe("handlerClosed",this.xd,this);this.b.subscribe("handlerError",this.yd,this);this.b.subscribe("handlerMessage",this.zd,this);co(this.b,b.token);this.subscribe("remoteQueueChange",function(){var a=this.B.videoId;
sk()&&U("yt-remote-session-video-id",a)},this)}
y(Z,V);g=Z.prototype;g.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);var h={videoId:d,currentTime:f};c&&(h.listId=c);p(e)&&(h.currentIndex=e);c&&(this.B.f=c);this.B.videoId=d;this.B.index=e||0;this.B.state=3;c=this.B;c.g=f;c.i=x();jo("Connecting with setPlaylist and params: "+L(h));this.b.connect({method:"setPlaylist",params:L(h)},a,wk())}else jo("Connecting without params"),this.b.connect({},a,wk());ko(this)};
g.dispose=function(){this.isDisposed()||(this.u("beforeDispose"),lo(this,3));Z.A.dispose.call(this)};
g.w=function(){mo(this);no(this);oo(this);I(this.o);this.o=NaN;I(this.C);this.C=NaN;this.g=null;Ne(this.L);this.L.length=0;this.b.dispose();Z.A.w.call(this);this.f=this.B=this.b=null};
function jo(a){Oj("conn",a)}
g.md=function(){this.i(2)};
function io(a,b){return new Zn(ak(a.ra,"/bc",void 0,!1),b)}
function lo(a,b){a.u("proxyStateChange",b)}
function ko(a){a.h=H(w(function(){jo("Connecting timeout");this.i(1)},a),2E4)}
function mo(a){I(a.h);a.h=NaN}
function oo(a){I(a.G);a.G=NaN}
function po(a){no(a);a.D=H(w(function(){qo(this,"getNowPlaying")},a),2E4)}
function no(a){I(a.D);a.D=NaN}
g.Ad=function(){jo("Channel opened");this.K&&(this.K=!1,oo(this),this.G=H(w(function(){jo("Timing out waiting for a screen.");this.i(1)},this),15E3));
Ak(ao(this.b),this.aa)};
g.xd=function(){jo("Channel closed");isNaN(this.h)?Bk(!0):Bk();this.dispose()};
g.yd=function(a){Bk();isNaN(this.j())?(jo("Channel error: "+a+" without reconnection"),this.dispose()):(this.K=!0,jo("Channel error: "+a+" with reconnection in "+this.j()+" ms"),lo(this,2))};
function ro(a,b){b&&(mo(a),oo(a));b==(bo(a.b)&&isNaN(a.h))?b&&(lo(a,1),qo(a,"getSubtitlesTrack")):b?(a.W()&&a.B.reset(),lo(a,1),qo(a,"getNowPlaying"),so(a)):a.i(1)}
function to(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.B.videoId&&(hb(b.params)?a.B.h=null:a.B.h=b.params,a.u("remotePlayerChange"))}
function uo(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.B.f=b.params.listId||a.B.f;var e=a.B,f=e.videoId;e.videoId=c;e.index=d;c!=f&&fo(e);a.u("remoteQueueChange")}
function vo(a,b){b.params=b.params||{};uo(a,b);wo(a,b)}
function wo(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10),d=a.B;d.g=isNaN(c)?0:c;d.i=x();c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.B.b&&(c=-1E3);a.B.b=c;1==a.B.b?po(a):no(a);a.u("remotePlayerChange")}
function xo(a,b){var c="true"==b.params.muted;a.B.volume=parseInt(b.params.volume,10);a.B.l=c;a.u("remotePlayerChange")}
g.zd=function(a){a.params?jo("Received: action="+a.action+", params="+L(a.params)):jo("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=rd(a.params.devices);this.f=Ka(a,function(a){return new nk(a)});
a=!!Na(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
ro(this,a);break;case "loungeScreenConnected":ro(this,!0);break;case "loungeScreenDisconnected":Ra(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
ro(this,!1);break;case "remoteConnected":var b=new nk(rd(a.params.device));Na(this.f,function(a){return a.equals(b)})||Pa(this.f,b);
break;case "remoteDisconnected":b=new nk(rd(a.params.device));Ra(this.f,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":uo(this,a);break;case "nowPlaying":vo(this,a);break;case "onStateChange":wo(this,a);break;case "onVolumeChanged":xo(this,a);break;case "onSubtitlesTrackChanged":to(this,a);break;default:jo("Unrecognized action: "+a.action)}};
g.ee=function(){if(this.g){var a=this.g;this.g=null;this.B.videoId!=a&&qo(this,"getNowPlaying")}};
Z.prototype.subscribe=Z.prototype.subscribe;Z.prototype.unsubscribeByKey=Z.prototype.ha;Z.prototype.ja=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.j())?bo(this.b)&&isNaN(this.h)&&(a=1):a=2);return a};
Z.prototype.getProxyState=Z.prototype.ja;Z.prototype.i=function(a){jo("Disconnecting with "+a);mo(this);this.u("beforeDisconnect",a);1==a&&Bk();$n(this.b,a);this.dispose()};
Z.prototype.disconnect=Z.prototype.i;Z.prototype.ca=function(){var a=this.B;if(this.g){var b=a=this.B.clone(),c=this.g,d=a.index,e=b.videoId;b.videoId=c;b.index=d;c!=e&&fo(b)}return ho(a)};
Z.prototype.getPlayerContextData=Z.prototype.ca;Z.prototype.la=function(a){var b=new eo(a);b.videoId&&b.videoId!=this.B.videoId&&(this.g=b.videoId,I(this.o),this.o=H(w(this.ee,this),5E3));var c=[];this.B.f==b.f&&this.B.videoId==b.videoId&&this.B.index==b.index||c.push("remoteQueueChange");this.B.b==b.b&&this.B.volume==b.volume&&this.B.l==b.l&&go(this.B)==go(b)&&L(this.B.h)==L(b.h)||c.push("remotePlayerChange");this.B.reset(a);z(c,function(a){this.u(a)},this)};
Z.prototype.setPlayerContextData=Z.prototype.la;Z.prototype.W=function(){var a=this.b.l.id,b=Na(this.f,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Z.prototype.getOtherConnectedRemoteId=Z.prototype.W;Z.prototype.j=function(){var a=this.b;return a.f.enabled?a.f.l-x():NaN};
Z.prototype.getReconnectTimeout=Z.prototype.j;Z.prototype.Ha=function(){if(!isNaN(this.j())){var a=this.b.f;a.enabled&&(a.stop(),a.start(),a.j())}};
Z.prototype.reconnect=Z.prototype.Ha;function so(a){I(a.C);a.C=H(w(a.i,a,1),864E5)}
function qo(a,b,c){c?jo("Sending: action="+b+", params="+L(c)):jo("Sending: action="+b);a.b.sendMessage(b,c)}
Z.prototype.ka=function(a,b){qo(this,a,b);so(this)};
Z.prototype.sendMessage=Z.prototype.ka;function yo(a){hk.call(this,"ScreenServiceProxy");this.P=a;this.b=[];this.b.push(this.P.$_s("screenChange",w(this.ye,this)));this.b.push(this.P.$_s("onlineScreenChange",w(this.Gd,this)))}
y(yo,hk);g=yo.prototype;g.S=function(a){return this.P.$_gs(a)};
g.contains=function(a){return!!this.P.$_c(a)};
g.get=function(a){return this.P.$_g(a)};
g.start=function(){this.P.$_st()};
g.wb=function(a,b,c){this.P.$_a(a,b,c)};
g.remove=function(a,b,c){this.P.$_r(a,b,c)};
g.tb=function(a,b,c,d){this.P.$_un(a,b,c,d)};
g.w=function(){for(var a=0,b=this.b.length;a<b;++a)this.P.$_ubk(this.b[a]);this.b.length=0;this.P=null;yo.A.w.call(this)};
g.ye=function(){this.u("screenChange")};
g.Gd=function(){this.u("onlineScreenChange")};
W.prototype.$_st=W.prototype.start;W.prototype.$_gspc=W.prototype.ze;W.prototype.$_gsppc=W.prototype.Mc;W.prototype.$_c=W.prototype.contains;W.prototype.$_g=W.prototype.get;W.prototype.$_a=W.prototype.wb;W.prototype.$_un=W.prototype.tb;W.prototype.$_r=W.prototype.remove;W.prototype.$_gs=W.prototype.S;W.prototype.$_gos=W.prototype.Lc;W.prototype.$_s=W.prototype.subscribe;W.prototype.$_ubk=W.prototype.ha;function zo(){var a={device:"Desktop",app:"youtube-desktop"};kj&&jj();pk();Ao||(Ao=new Zj,Ck()&&(Ao.b="/api/loungedev"));Bo||(Bo=r("yt.mdx.remote.deferredProxies_")||[],q("yt.mdx.remote.deferredProxies_",Bo,void 0));Co();var b=Do();if(!b){var c=new W(Ao);q("yt.mdx.remote.screenService_",c,void 0);b=Do();jl(c,function(a){a?Eo()&&Cl(Eo(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){J("yt-remote-receiver-availability-change")})},!(!a||!a.loadCastApiSetupScript))}if(a&&!r("yt.mdx.remote.initialized_")){q("yt.mdx.remote.initialized_",
!0,void 0);
Fo("Initializing: "+L(a));Go.push(oc("yt-remote-cast2-availability-change",function(){J("yt-remote-receiver-availability-change")}));
Go.push(oc("yt-remote-cast2-receiver-selected",function(){Ho(null);J("yt-remote-auto-connect","cast-selector-receiver")}));
Go.push(oc("yt-remote-cast2-session-change",Io));Go.push(oc("yt-remote-connection-change",function(a){a?Cl(Eo(),"YouTube TV"):Jo()||(Cl(null,null),yl())}));
var d=Ko();a.isAuto&&(d.id+="#dial");d.name=a.device;d.app=a.app;Fo(" -- with channel params: "+L(d));Lo(d);b.start();Eo()||Mo()}}
function No(){rc(Go);Go.length=0;E(Oo);Oo=null;Bo&&(z(Bo,function(a){a(null)}),Bo.length=0,Bo=null,q("yt.mdx.remote.deferredProxies_",null,void 0));
Ao=null}
function Po(){if(wl()){var a=[];if(mj("yt-remote-cast-available")||r("yt.mdx.remote.cloudview.castButtonShown_")||Qo())a.push({key:"cast-selector-receiver",name:Ro()}),q("yt.mdx.remote.cloudview.castButtonShown_",!0,void 0);return a}return r("yt.mdx.remote.cloudview.initializing_")?[]:So()}
function So(){var a;a=Do().P.$_gos();var b=To();b&&Qo()&&(fk(a,b)||a.push(b));return ek(a)}
function Uo(){if(wl()){var a=xl();return a?{key:"cast-selector-receiver",name:a}:null}return Vo()}
function Vo(){var a=So(),b=To();b||(b=Jo());return Na(a,function(a){return b&&Sj(b,a.key)?!0:!1})}
function Ro(){if(wl())return xl();var a=To();return a?a.name:null}
function To(){var a=Eo();if(!a)return null;var b=Do().S();return gk(b,a)}
function Io(a){Fo("remote.onCastSessionChange_: "+Wj(a));if(a){var b=To();b&&b.id==a.id?Cl(b.id,"YouTube TV"):(b&&Wo(),Xo(a,1))}else Wo()}
function Yo(a,b){Fo("Connecting to: "+L(a));if("cast-selector-receiver"==a.key)Ho(b||null),Bl(b||null);else{Wo();Ho(b||null);var c=Do().S();(c=gk(c,a.key))?Xo(c,1):H(function(){Zo(null)},0)}}
function Wo(){Al()?sl().stopSession():pl("stopSession called before API ready.");var a=Qo();a?a.disconnect(1):(sc("yt-remote-before-disconnect",1),sc("yt-remote-connection-change",!1));Zo(null)}
function Fo(a){Oj("remote",a)}
function Do(){if(!Oo){var a=r("yt.mdx.remote.screenService_");Oo=a?new yo(a):null}return Oo}
function Eo(){return r("yt.mdx.remote.currentScreenId_")}
function $o(a){q("yt.mdx.remote.currentScreenId_",a,void 0)}
function Ho(a){q("yt.mdx.remote.connectData_",a,void 0)}
function Qo(){return r("yt.mdx.remote.connection_")}
function Zo(a){var b=Qo();Ho(null);a?Qo():$o("");q("yt.mdx.remote.connection_",a,void 0);Bo&&(z(Bo,function(b){b(a)}),Bo.length=0);
b&&!a?sc("yt-remote-connection-change",!1):!b&&a&&J("yt-remote-connection-change",!0)}
function Jo(){var a=sk();if(!a)return null;var b=Do().S();return gk(b,a)}
function Xo(a,b){Eo();$o(a.id);var c=new Z(Ao,a,Ko());c.connect(b,r("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(a){sc("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){Qo()&&(Qo(),Zo(null))});
Zo(c)}
function Mo(){var a=Jo();a?(Fo("Resume connection to: "+Wj(a)),Xo(a,0)):(Bk(),yl(),Fo("Skipping connecting because no session screen found."))}
var Ao=null,Bo=null,Oo=null;function Co(){var a=Ko();if(hb(a)){var a=rk(),b=mj("yt-remote-session-name")||"",c=mj("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};q("yt.mdx.remote.channelParams_",a,void 0)}}
function Ko(){return r("yt.mdx.remote.channelParams_")||{}}
function Lo(a){a?(U("yt-remote-session-app",a.app),U("yt-remote-session-name",a.name)):(nj("yt-remote-session-app"),nj("yt-remote-session-name"));q("yt.mdx.remote.channelParams_",a,void 0)}
var Go=[];var ap=null,bp=[];function cp(){dp();if(Uo()){var a=ap;"html5"!=a.getPlayerType()&&a.loadNewVideoConfig(a.getCurrentVideoConfig(),"html5")}}
function ep(a){"cast-selector-receiver"==a?zl():fp(a)}
function fp(a){var b=Po();if(a=dk(b,a)){var c=ap;Yo(a,{listId:c.getVideoData().list,videoId:c.getVideoData().video_id,currentTime:c.getCurrentTime()});"html5"!=c.getPlayerType()?c.loadNewVideoConfig(c.getCurrentVideoConfig(),"html5"):c.updateRemoteReceivers&&c.updateRemoteReceivers(b,a)}}
function dp(){var a=ap;a&&a.updateRemoteReceivers&&a.updateRemoteReceivers(Po(),Uo())}
;var gp=null,hp=[];function ip(a){return{externalChannelId:a.externalChannelId,ud:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function jp(a){kp(ip(a))}
function kp(a){wi()?(Q(ji,new di(a.externalChannelId,a.ud?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+Gd({event:"subscribe",source:a.source}))&&Rg(a)):lp(a)}
function lp(a){vi(function(b){b.subscription_ajax&&kp(a)},null)}
function mp(a){a=ip(a);Q(oi,new fi(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+Gd({event:"unsubscribe",source:a.source}))&&Rg(a)}
function np(a){gp&&gp.channelSubscribed(a.b,a.subscriptionId)}
function op(a){gp&&gp.channelUnsubscribed(a.b)}
;function pp(a){D.call(this);this.f=a;this.f.subscribe("command",this.Cc,this);this.g={};this.h=!1}
y(pp,D);g=pp.prototype;g.start=function(){this.h||this.isDisposed()||(this.h=!0,qp(this.f,"RECEIVING"))};
g.Cc=function(a,b){if(this.h&&!this.isDisposed()){var c=b||{};switch(a){case "addEventListener":if(v(c.event)&&(c=c.event,!(c in this.g))){var d=w(this.ge,this,c);this.g[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":v(c.event)&&rp(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=sp(a,b||{}),c=this.b[a].apply(this.b,c),(c=tp(a,c))&&this.h&&!this.isDisposed()&&qp(this.f,a,c))}}};
g.ge=function(a,b){this.h&&!this.isDisposed()&&qp(this.f,a,this.Gb(a,b))};
g.Gb=function(a,b){if(null!=b)return{value:b}};
function rp(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
g.w=function(){this.f.unsubscribe("command",this.Cc,this);this.f=null;for(var a in this.g)rp(this,a);pp.A.w.call(this)};function up(a,b){pp.call(this,b);this.b=a;this.start()}
y(up,pp);up.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
up.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function sp(a,b){switch(a){case "loadVideoById":return b=sj(b),uj(b),[b];case "cueVideoById":return b=sj(b),uj(b),[b];case "loadVideoByPlayerVars":return uj(b),[b];case "cueVideoByPlayerVars":return uj(b),[b];case "loadPlaylist":return b=tj(b),uj(b),[b];case "cuePlaylist":return b=tj(b),uj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function tp(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
up.prototype.Gb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return up.A.Gb.call(this,a,b)};
up.prototype.w=function(){up.A.w.call(this);delete this.b};function vp(){var a=this.f=new Vi,b=w(this.ce,this);a.f=b;a.g=null;this.h=[];this.l=!1;this.i={}}
g=vp.prototype;g.ce=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.i[c]||"onReady"==c||(this.addEventListener(c,wp(this,c)),this.i[c]=!0)}else this.Pc(a,b)};
g.Pc=function(){};
function wp(a,b){return w(function(a){this.sendMessage(b,a)},a)}
g.addEventListener=function(){};
g.hd=function(){this.l=!0;this.sendMessage("initialDelivery",this.Hb());this.sendMessage("onReady");z(this.h,this.Qc,this);this.h=[]};
g.Hb=function(){return null};
function xp(a,b){a.sendMessage("infoDelivery",b)}
g.Qc=function(a){this.l?this.f.sendMessage(a):this.h.push(a)};
g.sendMessage=function(a,b){this.Qc({event:a,info:void 0==b?null:b})};
g.dispose=function(){this.f=null};function yp(a){vp.call(this);this.b=a;this.g=[];this.addEventListener("onReady",w(this.Ld,this));this.addEventListener("onVideoProgress",w(this.ke,this));this.addEventListener("onVolumeChange",w(this.le,this));this.addEventListener("onApiChange",w(this.fe,this));this.addEventListener("onPlaybackQualityChange",w(this.he,this));this.addEventListener("onPlaybackRateChange",w(this.ie,this));this.addEventListener("onStateChange",w(this.je,this))}
y(yp,vp);g=yp.prototype;g.Pc=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&qj(a)){var c;c=b;if(ia(c[0])&&!ea(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=sj.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=rj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=tj.apply(window,c)}c=d}uj(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);qj(a)&&xp(this,this.Hb())}};
g.Ld=function(){var a=w(this.hd,this);this.f.b=a};
g.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
g.Hb=function(){if(!this.b)return null;var a=this.b.getApiInterface();Qa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var k=this.b[e]();b[f]=k}catch(l){}}}b.videoData=this.b.getVideoData();return b};
g.je=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());
this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());xp(this,a)};
g.he=function(a){xp(this,{playbackQuality:a})};
g.ie=function(a){xp(this,{playbackRate:a})};
g.fe=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var h=0,k=f.length;h<k;h++){var l=f[h],n=this.b.getOption(e,l);b[e][l]=n}}this.sendMessage("apiInfoDelivery",b)};
g.le=function(){xp(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
g.ke=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());xp(this,a)};
g.dispose=function(){yp.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function zp(a,b,c){V.call(this);this.b=a;this.f=b;this.g=c}
y(zp,V);function qp(a,b,c){if(!a.isDisposed()){var d=a.b,e=a.f;a=a.g;d.isDisposed()||e!=d.b||(b={id:a,command:b},c&&(b.data=c),d.b.postMessage(L(b),d.g))}}
zp.prototype.w=function(){this.f=this.b=null;zp.A.w.call(this)};function Ap(a,b,c){D.call(this);this.b=a;this.g=c;this.h=M(window,"message",w(this.i,this));this.f=new zp(this,a,b);Yb(this,oa(E,this.f))}
y(Ap,D);Ap.prototype.i=function(a){var b;if(b=!this.isDisposed())if(b=a.origin==this.g)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(c=a.data,v(c))){try{c=rd(c)}catch(d){return}c.command&&(a=this.f,b=c.command,c=c.data,a.isDisposed()||a.u("command",b,c))}};
Ap.prototype.w=function(){Ne(this.h);this.b=null;Ap.A.w.call(this)};var Bp=!1;function Cp(a){if(a=a.match(/[\d]+/g))a.length=3}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Bp=!0,a.description)){Cp(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Bp=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Bp=!!a&&a.enabledPlugin)){Cp(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Bp=!0;Cp(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Bp=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Bp=!0,Cp(b.GetVariable("$version"))}catch(c){}})();function Dp(a){return(a=a.exec(nb))?a[1]:""}
(function(){if(qf)return Dp(/Firefox\/([0-9.]+)/);if(K||bd||ad)return ld;if(uf)return Dp(/Chrome\/([0-9.]+)/);if(vf&&!($c()||B("iPad")||B("iPod")))return Dp(/Version\/([0-9.]+)/);if(rf||sf){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(nb);if(a)return a[1]+"."+a[2]}else if(tf)return(a=Dp(/Android\s+([0-9.]+)/))?a:Dp(/Version\/([0-9.]+)/);return""})();function Ep(){var a={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0};return new km(function(b,c){a.Z=function(a){Nd(a)?b(a):c(a)};
a.onError=c;a.Ea=c;Sd("//googleads.g.doubleclick.net/pagead/id",a)})}
;var Fp=null;function Gp(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return Hp(""),"";a=JSON.parse(a.substr(4)).id;Hp(a);return a}
function Ip(){H(function(){Fp=null},3E5)}
function Hp(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function Jp(){}
;function Kp(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&Rg(c)}}
;function Lp(a){O.call(this,1,arguments);this.Cb=a}
y(Lp,O);function Mp(a,b){O.call(this,2,arguments);this.f=a;this.b=b}
y(Mp,O);function Np(a,b,c,d){O.call(this,1,arguments);this.b=b;this.g=c||null;this.f=d||null}
y(Np,O);function Op(a,b){O.call(this,1,arguments);this.f=a;this.b=b||null}
y(Op,O);function Pp(a){O.call(this,1,arguments)}
y(Pp,O);var Qp=new P("ypc-core-load",Lp),Rp=new P("ypc-guide-sync-success",Mp),Sp=new P("ypc-purchase-success",Np),Tp=new P("ypc-subscription-cancel",Pp),Up=new P("ypc-subscription-cancel-success",Op),Vp=new P("ypc-init-subscription",Pp);var Wp=!1,Xp=[],Yp=[];function Zp(a){a.b?Wp?Q(ni,a):Q(Qp,new Lp(function(){Q(Vp,new Pp(a.b))})):$p(a.f,a.h,a.g,a.source)}
function aq(a){a.b?Wp?Q(si,a):Q(Qp,new Lp(function(){Q(Tp,new Pp(a.b))})):bq(a.f,a.subscriptionId,a.h,a.g,a.source)}
function cq(a){dq(Ta(a.b))}
function eq(a){fq(Ta(a.b))}
function gq(a){hq(a.b,a.isEnabled,null)}
function iq(a,b,c,d){hq(a,b,c,d)}
function jq(a){var b=a.f,c=a.b.subscriptionId;b&&c&&Q(mi,new ei(b,c,a.b.channelInfo))}
function kq(a){var b=a.b;Ya(a.f,function(a,d){Q(mi,new ei(d,a,b[d]))})}
function lq(a){Q(ri,new bi(a.f.itemId));a.b&&a.b.length&&(mq(a.b,ri),mq(a.b,ti))}
function $p(a,b,c,d){var e=new bi(a);Q(ki,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=G("PLAYBACK_ID"))&&(c.plid=d);(d=G("EVENT_ID"))&&(c.ei=d);b&&nq(b,c);Sd("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ub:f,J:c,Z:function(b,c){var d=c.response;Q(mi,new ei(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&J("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Kp(d.actions)},
Qb:function(){Q(li,e)}})}
function bq(a,b,c,d,e){var f=new bi(a);Q(pi,f);var h={};d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=G("PLAYBACK_ID"))&&(d.plid=a);(a=G("EVENT_ID"))&&(d.ei=a);c&&nq(c,d);Sd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ub:h,J:d,Z:function(a,b){var c=b.response;Q(ri,f);c.actions&&Kp(c.actions)},
Qb:function(){Q(qi,f)}})}
function hq(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.email_on_upload=b);null===c||(e.receive_no_updates=c);Sd("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",J:e,onError:function(){d&&d()}})}}
function dq(a){if(a.length){var b=Va(a,0,40);Q("subscription-batch-subscribe-loading");mq(b,ki);var c={};c.a=b.join(",");var d=function(){Q("subscription-batch-subscribe-loaded");mq(b,li)};
Sd("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",J:c,Z:function(c,f){d();var h=f.response,k=h.id;if(ea(k)&&k.length==b.length){var l=h.channel_info_map;z(k,function(a,c){var d=b[c];Q(mi,new ei(d,a,l[d]))});
a.length?dq(a):Q("subscription-batch-subscribe-finished")}},
onError:function(){d();Q("subscription-batch-subscribe-failure")}})}}
function fq(a){if(a.length){var b=Va(a,0,40);Q("subscription-batch-unsubscribe-loading");mq(b,pi);var c={};c.c=b.join(",");var d=function(){Q("subscription-batch-unsubscribe-loaded");mq(b,qi)};
Sd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",J:c,Z:function(){d();mq(b,ri);a.length&&fq(a)},
onError:function(){d()}})}}
function mq(a,b){z(a,function(a){Q(b,new bi(a))})}
function nq(a,b){var c=Jd(a),d;for(d in c)b[d]=c[d]}
;var oq,pq=null,qq=null,rq=null,sq=!1;
function tq(){var a=G("PLAYER_CONFIG",void 0),b=G("REVERSE_MOBIUS_PERCENT",void 0);if("1"!=a.privembed&&Yf&&100*Math.random()<b||dg("enable_server_side_ad_request_for_embeds"))try{var c;try{var d=r("yt.www.ads.biscotti.getId_"),e;if(d)e=d();else{if(!Fp){var f=Ep().then(Gp),h=om(Ip,Ip,void 0);h.g=!0;vm(f,h);Fp=f}e=Fp}c=e}catch(k){c=pm(k)}qm(c,null,Jp,void 0)}catch(k){fc(k)}if(G("REQUEST_POST_MESSAGE_ORIGIN")){if(!oq){oq=new Vi;oq.b=tq;return}oq.origin&&"*"!=oq.origin&&(a.args.post_message_origin=oq.origin)}d=
document.referrer;b=G("POST_MESSAGE_ORIGIN");c=!1;dg("legacy_cast")&&v(d)&&v(b)&&-1<d.indexOf(b)&&Ng(b)&&Ng(d)&&(c=!0);window!=window.top&&d&&d!=document.URL&&(a.args.loaderUrl=d);G("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&uj(a.args);pq=Ph("player",a);d=G("POST_MESSAGE_ID","player");G("ENABLE_JS_API")?rq=new yp(pq):G("ENABLE_POST_API")&&v(d)&&v(b)&&(qq=new Ap(window.parent,d,b),rq=new up(pq,qq.f));dg("legacy_cast")&&((sq=c&&!G("ENABLE_CAST_API"))?a.args.disableCast="1":(a=pq,
zo(),ap=a,ap.addEventListener("onReady",cp),ap.addEventListener("onRemoteReceiverSelected",ep),bp.push(oc("yt-remote-receiver-availability-change",dp)),bp.push(oc("yt-remote-auto-connect",fp))));G("BG_P")&&(G("BG_I")||G("BG_IU"))&&Ec();be();gp=pq;gp.addEventListener("SUBSCRIBE",jp);gp.addEventListener("UNSUBSCRIBE",mp);hp.push(Zg(mi,np),Zg(ri,op))}
;q("yt.setConfig",cc,void 0);q("yt.setMsg",function(a){dc(bc,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||"WEB",version:d||G("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e;if(a&&e&&!(5<=Yd)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(v(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var h,k,l=!1;try{h=a.lineNumber||a.Ve||"Not available"}catch(ba){h="Not available",l=!0}try{k=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||f}catch(ba){k=
"Not available",l=!0}a=!l&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(Xd[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={Ub:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b||"ERROR"},J:{url:G("PAGE_NAME",window.location.href),file:a.fileName},
method:"POST"};e&&(b.J.stack=e);for(var n in c)b.J["client."+n]=c[n];if(n=G("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in n)b.J[u]=n[u];Sd("/error_204",b);Xd[a.message]=!0;Yd++}}},void 0);
q("writeEmbed",tq,void 0);q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a+="mac_204?action_fcts=1")&&Rg(a);return!0},void 0);
var uq=ec(function(){nh("ol");Wp=!0;Yp.push(Zg(ji,Zp),Zg(oi,aq));Wp||(Yp.push(Zg(ni,Zp),Zg(si,aq),Zg(gi,cq),Zg(hi,eq),Zg(ii,gq)),Xp.push(oc("subscription-prefs",iq)),Yp.push(Zg(Sp,jq),Zg(Up,lq),Zg(Rp,kq)));wf.getInstance();var a=1<window.devicePixelRatio;if(Bf(0,119)!=a){var b="f"+(Math.floor(119/31)+1),c=Af(b)||0,c=a?c|67108864:c&-67108865;0==c?delete xf[b]:(a=c.toString(16),xf[b]=a.toString());var b=[],d;for(d in xf)b.push(d+"="+escape(xf[d]));We("PREF",b.join("&"),63072E3)}}),vq=ec(function(){var a=
pq;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();G("PL_ATT")&&(Dc=null);for(var a=0,b=$d.length;a<b;a++){var c=$d[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):I(c)}}$d.length=0;a=zc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))uc(a),b.parentNode.removeChild(b);ae=!1;cc("DCLKSTAT",0);rc(Xp);Xp.length=0;$g(Yp);Yp.length=0;Wp=!1;gp&&(gp.removeEventListener("SUBSCRIBE",kp),gp.removeEventListener("UNSUBSCRIBE",mp));gp=null;$g(hp);hp.length=0;
dg("legacy_cast")&&!sq&&(rc(bp),bp.length=0,ap&&(ap.removeEventListener("onRemoteReceiverSelected",ep),ap.removeEventListener("onReady",cp),ap=null),No());Zb(rq,qq);pq&&pq.destroy()});
window.addEventListener?(window.addEventListener("load",uq),window.addEventListener("unload",vq)):window.attachEvent&&(window.attachEvent("onload",uq),window.attachEvent("onunload",vq));var wq=Pi.getInstance(),xq=T(wq);xq in Ui||(wq.register(),wq.nb.push(oc("yt-uix-init-"+xq,wq.init,wq)),wq.nb.push(oc("yt-uix-dispose-"+xq,wq.dispose,wq)),Ui[xq]=wq);})();
