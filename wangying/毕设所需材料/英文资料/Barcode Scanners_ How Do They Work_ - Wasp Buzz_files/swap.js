  var calltrk_jq = jQuery;

swapEntry = function () {
  if (document.removeEventListener) {
    document.removeEventListener("visibilitychange", swapEntry, false);
  }
  namespace_315820941 = {};
  
_calltrk_crossSubdomain = true;

// Figuring out the highest up a cookie can be set
// i.e. given domain bob.jane.co.uk, this function returns '.jane.co.uk'
_calltrk_nearestTLD = null;
calltrk_nearestTLD = function() {
  if (_calltrk_nearestTLD) return _calltrk_nearestTLD;
  var cookieStr = document.cookie;
  var pieces = document.location.hostname.split('.');
  for(var i = pieces.length - 1; i >= 0; i--) {
    var domain = '.' + pieces.slice(i).join('.');
    namespace_315820941.createCookie('calltrk_nearest_tld', domain, 30, domain);
    if (cookieStr !== document.cookie) {
      namespace_315820941.eraseCookie('calltrk_nearest_tld', domain)
      _calltrk_nearestTLD =  domain; 
      break;
    }
  }
  return _calltrk_nearestTLD;
};

namespace_315820941.createCookie = function(name,value,days,domain) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  var cookieStr = name+"="+escape(value)+expires+"; path=/";
  if (domain && _calltrk_crossSubdomain) {
    cookieStr += '; domain=' + domain;
  }
  document.cookie = cookieStr;
};

namespace_315820941.readTransitionalCookie = function(name) {
  var session_ids = namespace_315820941.cookieValues(name);
  if (session_ids.length > 1) {
    namespace_315820941.eraseCookie(name);
    return namespace_315820941.readCookie(name);
  } else {
    return session_ids[0];
  }
};

namespace_315820941.cookieValues = function(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  var res = [];
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) res.push(unescape(c.substring(nameEQ.length,c.length)));
  }
  return res;
};

namespace_315820941.readCookie = function(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length,c.length));
  }
  return null;
};

namespace_315820941.eraseCookie = function(name, domain) {
  namespace_315820941.createCookie(name,"",-1,domain);
};


  
  

  (function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(calltrk_jq);
  /*
CryptoJS v3.1.2 SHA-1
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License  (MIT on 2013-10-15)
*/
var CryptoJS=CryptoJS||function(e,m){var p={},j=p.lib={},l=function(){},f=j.Base={extend:function(a){l.prototype=this;var c=new l;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
n=j.WordArray=f.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=m?c:4*a.length},toString:function(a){return(a||h).stringify(this)},concat:function(a){var c=this.words,q=a.words,d=this.sigBytes;a=a.sigBytes;this.clamp();if(d%4)for(var b=0;b<a;b++)c[d+b>>>2]|=(q[b>>>2]>>>24-8*(b%4)&255)<<24-8*((d+b)%4);else if(65535<q.length)for(b=0;b<a;b+=4)c[d+b>>>2]=q[b>>>2];else c.push.apply(c,q);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=e.ceil(c/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],b=0;b<a;b+=4)c.push(4294967296*e.random()|0);return new n.init(c,a)}}),b=p.enc={},h=b.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++){var f=c[d>>>2]>>>24-8*(d%4)&255;b.push((f>>>4).toString(16));b.push((f&15).toString(16))}return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d+=2)b[d>>>3]|=parseInt(a.substr(d,
2),16)<<24-4*(d%8);return new n.init(b,c/2)}},g=b.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++)b.push(String.fromCharCode(c[d>>>2]>>>24-8*(d%4)&255));return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d++)b[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return new n.init(b,c)}},r=b.Utf8={stringify:function(a){try{return decodeURIComponent(escape(g.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return g.parse(unescape(encodeURIComponent(a)))}},
k=j.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new n.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=r.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,b=c.words,d=c.sigBytes,f=this.blockSize,h=d/(4*f),h=a?e.ceil(h):e.max((h|0)-this._minBufferSize,0);a=h*f;d=e.min(4*a,d);if(a){for(var g=0;g<a;g+=f)this._doProcessBlock(b,g);g=b.splice(0,a);c.sigBytes-=d}return new n.init(g,d)},clone:function(){var a=f.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});j.Hasher=k.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){k.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,b){return(new a.init(b)).finalize(c)}},_createHmacHelper:function(a){return function(b,f){return(new s.HMAC.init(a,
f)).finalize(b)}}});var s=p.algo={};return p}(Math);
(function(){var e=CryptoJS,m=e.lib,p=m.WordArray,j=m.Hasher,l=[],m=e.algo.SHA1=j.extend({_doReset:function(){this._hash=new p.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(f,n){for(var b=this._hash.words,h=b[0],g=b[1],e=b[2],k=b[3],j=b[4],a=0;80>a;a++){if(16>a)l[a]=f[n+a]|0;else{var c=l[a-3]^l[a-8]^l[a-14]^l[a-16];l[a]=c<<1|c>>>31}c=(h<<5|h>>>27)+j+l[a];c=20>a?c+((g&e|~g&k)+1518500249):40>a?c+((g^e^k)+1859775393):60>a?c+((g&e|g&k|e&k)-1894007588):c+((g^e^
k)-899497514);j=k;k=e;e=g<<30|g>>>2;g=h;h=c}b[0]=b[0]+h|0;b[1]=b[1]+g|0;b[2]=b[2]+e|0;b[3]=b[3]+k|0;b[4]=b[4]+j|0},_doFinalize:function(){var f=this._data,e=f.words,b=8*this._nDataBytes,h=8*f.sigBytes;e[h>>>5]|=128<<24-h%32;e[(h+64>>>9<<4)+14]=Math.floor(b/4294967296);e[(h+64>>>9<<4)+15]=b;f.sigBytes=4*e.length;this._process();return this._hash},clone:function(){var e=j.clone.call(this);e._hash=this._hash.clone();return e}});e.SHA1=j._createHelper(m);e.HmacSHA1=j._createHmacHelper(m)})();
/* END CryptoJS */


  calltrk_jq('html').addClass('crjs');
  calltrk_jq("<style type='text/css'> .crjs .phoneswap { visibility: hidden; } </style>").appendTo("head");

  

// Get the referrer from a cookie, otherwise get it from the url and set a cookie
namespace_315820941.getReferrer = function(){
  var referrer = namespace_315820941.readTransitionalCookie('calltrk_referrer');
  if (!referrer) {
    referrer = namespace_315820941.getCurrentReferrer();
  }
  namespace_315820941.createCookie('calltrk_referrer', referrer, 30, calltrk_nearestTLD());
  return referrer;
}

// Returns the current referrer without looking at the cookie
namespace_315820941.getCurrentReferrer = function(){
  var referrer;
  if(namespace_315820941.getURLParameter('utm_referrer')){
    referrer = namespace_315820941.getURLParameter('utm_referrer');
  }else{
    referrer = document.referrer;
  }

  if (!referrer || referrer == '') {
    referrer = 'direct';
  }
  return referrer;
}

namespace_315820941.getLanding = function(){
  var landing = namespace_315820941.readTransitionalCookie('calltrk_landing');
  if (!landing) {
    landing = document.URL;
  }
  namespace_315820941.createCookie('calltrk_landing', landing, 30, calltrk_nearestTLD());
  return landing;
}

// Returns the current landing without looking at the cookie
namespace_315820941.getCurrentLanding = function(){
  var landing;
  landing = document.URL;
  return landing;
}

namespace_315820941.getReferrerKey = function(referrer, landing){
  var referrer_key;
  if(referrer.match(/^(.*)doubleclick(.*)$/) || landing.match(/^(.*)gclid=(.*)$/)) {
    referrer_key = 'google_paid';
  } else if(referrer.match(/^(.*)google(.*)$/) && !referrer.match(/^(.*)mail\.google\.com(.*)$/)) {
    if(referrer.match(/^(.*)maps\.google\.[a-z\.]{2,5}(.*)$/)) {
      referrer_key = 'google_local';
    } else if(referrer.match(/^(.*)google\.[a-z\.]{2,5}\/aclk(.*)$/) || referrer.match(/^(.*)google\.[a-z\.]{2,5}\/afs(.*)$/) || referrer.match(/^(.*)googleadservices(.*)$/) || landing.match(/^(.*)utm_medium=[cp]pc(.*)$/i) || landing.match(/^(.*)matchtype=(.*)$/i) || landing.match(/^(.*)adposition=(.*)$/i)) {
      referrer_key = 'google_paid';
    } else {
      referrer_key = 'google_organic';
    }
  } else if(referrer.match(/^(.*)yahoo(.*)$/) && !referrer.match(/^(.*)mail\.yahoo\.com(.*)$/) ) {
    if(referrer.match(/^(.*)local\.yahoo\.com(.*)$/) || referrer.match(/^(.*)local\.search\.yahoo\.com(.*)$/)) {
      referrer_key = 'yahoo_local';
    } else if(landing.match(/^(.*)utm_medium=cpc(.*)$/i) || landing.match(/^(.*)utm_medium=ppc(.*)$/i)) {
      referrer_key = 'yahoo_paid';
    } else {
      referrer_key = 'yahoo_organic';
    }
  } else if(referrer.match(/^(.*){1}(\/|\.)bing\.(.*)$/)) {
    if(referrer.match(/^(.*)bing\.com\/local(.*)$/)) {
      referrer_key = 'bing_local';
    } else if(landing.match(/^(.*)utm_medium=cpc(.*)$/i) || landing.match(/^(.*)utm_medium=ppc(.*)$/i)){
      referrer_key = 'bing_paid';
    } else {
      referrer_key = 'bing_organic';
    }
  } else if(referrer.match(/^(.*)msn\.com(.*)$/)) {
    referrer_key = 'bing_paid';
  } else if (referrer == 'direct') {
    //if theres no referrer (usually because of an ssl redirect) we'll still match paid if UTM params say so.
    if (landing.match(/^(.*)utm_medium=[cp]pc(.*)$/i) && landing.match(/^(.*)utm_source=google(.*)$/i)) {
      referrer_key = 'google_paid';
    } else {
      referrer_key = 'direct';
    }
  } else {
    referrer_key = namespace_315820941.getReferrerDomain(referrer);
  }
  return referrer_key;
}

// Get the domain name of the referrer
namespace_315820941.getReferrerDomain = function(referrer){
  var host = referrer.split('/')[2];
  var host_split = host.split('.');
  if(host_split.length > 2){
    var domain = host_split[host_split.length - 2] + '.' + host_split[host_split.length - 1];
  }else{
    var domain = host;
  }
  return domain;
}

namespace_315820941.checkLanding = function(landing, target){
  return (landing.indexOf(target) !== -1);
}

namespace_315820941.getHostnameAndPath = function() {
  var temp_a = document.createElement("a");
  temp_a.href = document.location.href;
  return temp_a.hostname + temp_a.pathname;
}

namespace_315820941.getURLParameter = function(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

  

namespace_315820941.makePhoneSwapVisible = function(){
  calltrk_jq('.phoneswap').css("visibility", "visible");
}


namespace_315820941.swapPhoneNumber = function(old_number, new_number) {
  var old_123 = old_number.substring(0,3);
  var old_456 = old_number.substring(3,6);
  var old_6789 = old_number.substring(6,10);
  var new_123 = new_number.substring(0,3);
  var new_456 = new_number.substring(3,6);
  var new_6789 = new_number.substring(6,10);
  var sep = "([-. "+String.fromCharCode(160)+"]?)";

  var re = new RegExp("(\\(?)"+old_123+"(\\))?"+sep+old_456+sep+old_6789,"g");


  document.title = document.title.replace(re, "$1" + new_123 + "$2$3" + new_456 + "$4" + new_6789);

  calltrk_jq("body *").replaceText(re, "$1" + new_123 + "$2$3" + new_456 + "$4" + new_6789, true);
  calltrk_jq("img").each(function(index) {
    var img = calltrk_jq(this),
        src = img.attr("src"),
        srcset = img.attr("srcset"),
        newSrc;

    if (src) {
      newSrc = src.replace(re, "$1" + new_123 + "$2$3" + new_456 + "$4" + new_6789);
      if (newSrc != src) {
        img.attr("src", newSrc);
      }
    }
    if (srcset) {
      newSrc = srcset.replace(re, "$1" + new_123 + "$2$3" + new_456 + "$4" + new_6789);
      if (newSrc != srcset) {
        img.attr("srcset", newSrc);
      }
    }
  });
  calltrk_jq("a").each(function(index) {
    var elem = calltrk_jq(this);
    calltrk_swapLinkHref(elem, new_123, new_456, new_6789, re);
    calltrk_swapLinkAttributes("title", elem, new_123, new_456, new_6789, re);
    calltrk_swapLinkAttributes("phone", elem, new_123, new_456, new_6789, re);
  });
  calltrk_jq('.cr_image, .cr_image *').each(function() {
    var background_style = calltrk_jq(this).css("background");
    if(typeof background_style != 'undefined'){
      background_style = background_style.replace(re, "$1" + new_123 + "$2$3" + new_456 + "$4" + new_6789);
      calltrk_jq(this).css('background', background_style);
    }
    var background_image_style = calltrk_jq(this).css("background-image");
    if(typeof background_image_style != 'undefined'){
      background_image_style = background_image_style.replace(re, "$1" + new_123 + "$2$3" + new_456 + "$4" + new_6789);
      calltrk_jq(this).css('background-image', background_image_style);
    }
  });


  if(typeof Cufon != 'undefined' ){
    calltrk_jq(".cufon").each(function(index) {
      var alt = calltrk_jq(this).attr("alt");
      if(typeof alt != 'undefined'){
        alt = alt.replace(re, "$1" + new_123 + "$2$3" + new_456 + "$4" + new_6789);
        calltrk_jq(this).attr("alt", alt);
      }
    });
  }
  namespace_315820941.makePhoneSwapVisible();
}

calltrk_swapLinkAttributes = function(attrName, element, new_123, new_456, new_6789, regex) {
  var attribute = element.attr(attrName);
  if(typeof attribute != 'undefined'){
    attribute = attribute.replace(regex, "$1" + new_123 + "$2$3" + new_456 + "$4" + new_6789);
    element.attr(attrName, attribute);
  }
};

calltrk_swapLinkHref = function(element, new_123, new_456, new_6789, regex) {
  var href = element.attr('href');
  if (typeof href != 'undefined' && href.match(/^(tel|sms):/i)) {
    href = href.replace(regex, "$1" + new_123 + "$2$3" + new_456 + "$4" + new_6789);
    element.attr('href', href);
  }
}

calltrk_domPhoneNumbers = function() {
  var sep = "([-. "+String.fromCharCode(160)+"]?)";
  var re = new RegExp("(\\(?)\\d{3}(\\))?"+sep+"\\d{3}"+sep+"\\d{4}\\b","g");
  var attrs = ['src', 'srcset', 'title', 'phone'];
  var matches = [];
  var hrefRegex = /^(sms|tel):/i;

  var searchString = function(search) {
    search = search && search.match(re);
    if (search && search.length > 0) {
      matches.push.apply(matches, search);
    }
  };

  calltrk_jq('.cr_image, .cr_image *').each(function() {
    // search our cr_image class and its children
    var ele = calltrk_jq(this);
    searchString(ele.css("background"));
    searchString(ele.css("background-image"));
  });

  calltrk_jq('body *').each(function() {
    // search attribute values we care about
    for (var i = 0; i < attrs.length; i++) {
      searchString(this.getAttribute(attrs[i]));
    }

    // only search href for number if it is a tel: or sms: link
    var href = this.getAttribute('href');
    if (href && href.match(hrefRegex)) {
      searchString(href);
    }

    var node = this.firstChild;
    if (!node) return;
    do {
      // search text nodes attached to this element
      if (node.nodeType === 3) { // Node.TEXT_NODE
        searchString(node.nodeValue);
      }
    } while (node = node.nextSibling);
  });

  var results = [];
  for (var i = 0; i < matches.length; i++) {
    var number = matches[i].replace(/\D/g,'');
    // only want the 10-digit form
    if (number.length > 10) {
      number = number.slice(number.length - 10);
    }
    results.push(number);
  }
  return results;
};

namespace_315820941.swapPhonePlainText = function(search_text, replacement_text, replacement_number){
  replacement_text = calltrk_replacementForPlainText(replacement_text, replacement_number);
  calltrk_jq("body *").replaceText(search_text, replacement_text);
  namespace_315820941.makePhoneSwapVisible();
}

calltrk_replacementForPlainText = function(replacement_text, replacement_number) {
  var new_123 = replacement_number.substring(0,3);
  var new_456 = replacement_number.substring(3,6);
  var new_6789 = replacement_number.substring(6,10);
  phone = '(' + new_123 + ') ' + new_456 + '-' + new_6789;
  phone_dashes = new_123 + '-' + new_456 + '-' + new_6789;
  phone_dots = new_123 + '.' + new_456 + '.' + new_6789;

  replacement_text = replacement_text.replace('###phone###', phone);
  replacement_text = replacement_text.replace('###phone-dashes###', phone_dashes);
  replacement_text = replacement_text.replace('###phone-dots###', phone_dots);
  return replacement_text;
};

namespace_315820941.swapPhonePlainTextForUpdate = function(replacement_text, old_number, replacement_number){
  var old_123 = old_number.substring(0,3);
  var old_456 = old_number.substring(3,6);
  var old_6789 = old_number.substring(6,10);
  var old_phone = '(' + old_123 + ') ' + old_456 + '-' + old_6789;
  var old_phone_dashes = old_123 + '-' + old_456 + '-' + old_6789;
  var old_phone_dots = old_123 + '.' + old_456 + '.' + old_6789;

  var search_text = replacement_text;
  search_text = search_text.replace('###phone###', new_phone);
  search_text = search_text.replace('###phone-dashes###', new_phone_dashes);
  search_text = search_text.replace('###phone-dots###', new_phone_dots);

  var new_123 = replacement_number.substring(0,3);
  var new_456 = replacement_number.substring(3,6);
  var new_6789 = replacement_number.substring(6,10);
  var new_phone = '(' + new_123 + ') ' + new_456 + '-' + new_6789;
  var new_phone_dashes = new_123 + '-' + new_456 + '-' + new_6789;
  var new_phone_dots = new_123 + '.' + new_456 + '.' + new_6789;

  replacement_text = replacement_text.replace('###phone###', new_phone);
  replacement_text = replacement_text.replace('###phone-dashes###', new_phone_dashes);
  replacement_text = replacement_text.replace('###phone-dots###', new_phone_dots);

  calltrk_jq("body *").replaceText(search_text, replacement_text);
  namespace_315820941.makePhoneSwapVisible();
}

namespace_315820941.checkPhonePlainText = function(search_text){
  if(document.body.innerHTML.indexOf(search_text) > 1){
    return true;
  }
  return false;
}

  

namespace_315820941.getVWOCookies = function() {
  var cookies = document.cookie.split(';');
  var vwo_cookies = [];

  for(var i=0;i < cookies.length;i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0)==' ') cookie = cookie.substring(1,cookie.length);
    if (cookie.match(/^_vis_opt_(.*)=(.*)$/i)){
      vwo_cookies[vwo_cookies.length] = unescape(cookie);
    }
  }
  return vwo_cookies.join('&');
}

namespace_315820941.getUnbounceCookies = function() {
  var unbounce_variations;
  if(namespace_315820941.readCookie('calltrk_unbounce_variations')){
    unbounce_variations = namespace_315820941.readCookie('calltrk_unbounce_variations');
  }else{
    unbounce_variations = '';
  }

  if(namespace_315820941.readCookie('ubpv')){
    variation = namespace_315820941.readCookie('ubpv')[0];
    current_page = namespace_315820941.getHostnameAndPath();

    if(unbounce_variations.indexOf(variation + current_page) < 0){
      if(unbounce_variations != ''){
        unbounce_variations = unbounce_variations + '|' + variation + current_page
      }else{
        unbounce_variations = variation + current_page
      }
    }

    namespace_315820941.createCookie('calltrk_unbounce_variations', unbounce_variations, 30);
  }

  return unbounce_variations;
}

namespace_315820941.getGoogleContentExperimentCookies = function() {
  var google_experiments;
  if(namespace_315820941.readCookie('calltrk_google_experiments')){
    google_experiments = namespace_315820941.readCookie('calltrk_google_experiments');
  }else{
    google_experiments = '';
  }

  if(namespace_315820941.getURLParameter('utm_expid')){
    experiment = namespace_315820941.getURLParameter('utm_expid');
    current_page = namespace_315820941.getHostnameAndPath();
    to_add = experiment + ',' + current_page;

    if(google_experiments.indexOf(to_add) < 0){
      if(google_experiments != ''){
        google_experiments = google_experiments + '|' + to_add
      }else{
        google_experiments = to_add
      }
    }

    namespace_315820941.createCookie('calltrk_google_experiments', google_experiments, 30);
  }

  return google_experiments;
}

namespace_315820941.getMarketoCookies = function() {
  var marketo_cookie;
  if(namespace_315820941.readCookie('_mkto_trk')){
    marketo_cookie = namespace_315820941.readCookie('_mkto_trk');
  }else{
    marketo_cookie = '';
  }
  return marketo_cookie;
}

  

namespace_315820941.getSecondScript = function(sessionSwapTargets, record_pageview, domless){
  var ns = namespace_315820941;
  var params = {
    uuid: ns.getSessionID(),
    ref: ns.getCurrentReferrer(),
    landing: ns.getCurrentLanding(),
    user_agent: navigator.userAgent,
    record_pageview: record_pageview,
    domless: domless,
    swaps: []
  }

  calltrk_jq.extend(params, ns.getIntegrationData());

  for(var target in sessionSwapTargets) {
    var number = sessionSwapTargets[target] || '';
    params.swaps.push(target + '=' + number);
  }

  calltrk_jq.ajax({
    url: "//app.callrail.com/companies/315820941/f010bee1b9e25f683034/10/swap_session.js",
    dataType: 'script',
    cache: false,
    data: params
  })
}

namespace_315820941._log = [];
namespace_315820941._dolog = (window.location.href.indexOf("crdbg") != -1)
namespace_315820941.log = function(what) {
  if (namespace_315820941._dolog) {
    namespace_315820941._log.push(what);
  }
}

namespace_315820941.startSessionSwap = function(reassigns) {
  var swaps = namespace_315820941.getStoredSwaps();
  var replaceNumber;

  if (reassigns) {
    for (var i in reassigns) {
      swaps[i] = reassigns[i];
    }
  }

  for(var target in swaps) {
    if (target.indexOf(',') === -1) {
      namespace_315820941.swapPhoneNumber(target, swaps[target]);
    } else {
      var searchAndReplacement = target.split(',');
      var search_text = decodeURIComponent(searchAndReplacement[0]);
      var replacement_text = decodeURIComponent(searchAndReplacement[1]);

      if (calltrk_jq.isArray(swaps[target])) {
        var oldNumber = swaps[target][0];
        var newNumber = swaps[target][1];
        var newSearch = calltrk_replacementForPlainText(replacement_text, oldNumber);
        var newReplace = calltrk_replacementForPlainText(replacement_text, newNumber);
        namespace_315820941.swapPhonePlainTextForUpdate(newSearch, newReplace, 'xxxxxxxxxx');
      } else {
        namespace_315820941.swapPhonePlainText(search_text, replacement_text, swaps[target]);
      }
    }
  }

  if (typeof Cufon != 'undefined') {
    try { Cufon.refresh(); } catch(ex) { }
  }
}

namespace_315820941.getSessionSources = function(swapTarget) {
  return namespace_315820941.swapTargets[swapTarget];
}

namespace_315820941.findSwapTargets = function() {
  var targets = [];
    targets = calltrk_domPhoneNumbers();

  var exactTargets = [
  ];

  for (var i = 0; i < exactTargets.length; i++) {
    var swapText = exactTargets[i];
    if (namespace_315820941.checkPhonePlainText(swapText)) {
      targets.push(swapText);
    }
  }

  return targets;
}

namespace_315820941.checkSessionSwap = function() {
  namespace_315820941.checkSessionSwapInternal(true);
}

namespace_315820941.setStoredSwaps = function(swaps) {
  var cookieStrings = [];
  for(var target in swaps) {
    if (!swaps[target]) {
      continue;
    }
    cookieStrings.push(encodeURIComponent(target) + '=' + encodeURIComponent(swaps[target]));
  }

  var cookieStr = cookieStrings.join('&');
  namespace_315820941.createCookie('calltrk_session_swap_numbers_315820941', cookieStr, 30, calltrk_nearestTLD());
};

namespace_315820941.mergeStoredSwaps = function(swaps) {
  var swapsStored = namespace_315820941.getStoredSwaps();
  for (var target in swaps) {
    if (swaps[target]) { // if came back with assignment
      swapsStored[target] = swaps[target];
    } else if (swapsStored[target]) { // remove value if it came back nullified
      delete swapsStored[target];
    }
  }

  namespace_315820941.setStoredSwaps(swapsStored);
};

namespace_315820941.getStoredSwaps = function() {
  var swap, result;
  var swapsStored = namespace_315820941.readCookie('calltrk_session_swap_numbers_315820941');
  if (!swapsStored) return {};

  result = {};
  swapsStored = swapsStored.split('&');
  for(var i = 0; i < swapsStored.length; i++) {
    swap = swapsStored[i].split('=');
    result[decodeURIComponent(swap[0])] = decodeURIComponent(swap[1]);
  }

  return result;
};

namespace_315820941.domlessSessionSwap = function(numbers, callback) {
  var hasSessionTracker = true;
  if (!hasSessionTracker || !numbers || numbers.length === 0) {
    callback({});
    return;
  }
  var swapsToVerify = {};
  for (var i = 0; i < numbers.length; i++) {
    swapsToVerify[numbers[i]] = null;
  }

  namespace_315820941.swapCallback = callback;
  namespace_315820941.getSecondScript(swapsToVerify, false, true);
};

namespace_315820941.checkSessionSwapInternal = function(recordPageView, domlessNumbers, domlessCallback) {
  var swapsToVerify = {};
  var possibleTargets = namespace_315820941.findSwapTargets();
  var storedSwaps = namespace_315820941.getStoredSwaps();

  var foundStoredTarget = false;
  for (var i = 0; i < possibleTargets.length; i++) {
    var target = possibleTargets[i];
    swapsToVerify[target] = storedSwaps[target] || null;
    if (swapsToVerify[target]) {
      foundStoredTarget = true;
    }
  }

  for (var target in storedSwaps) {
    if (target.indexOf(',') !== -1) {
      var searchAndReplacement = target.split(',');
      var search_text = decodeURIComponent(searchAndReplacement[0]);

      if (swapsToVerify[search_text] === null) { 
        delete swapsToVerify[search_text];
        swapsToVerify[target] = storedSwaps[target];
      }
    }
  }

  if (foundStoredTarget) {
    // We've already got cookie data, swap immediately
    namespace_315820941.addLoadEvent(namespace_315820941.startSessionSwap);
  }
  if (possibleTargets.length == 0) {
    // no targets on page, show hidden fields
    namespace_315820941.makePhoneSwapVisible();
  }

  namespace_315820941.getSecondScript(swapsToVerify, recordPageView);
};

namespace_315820941.swapPhoneForUpdate = function(reassigns){
  namespace_315820941.startSessionSwap(reassigns);

  if (typeof Cufon != 'undefined') {
    try { Cufon.refresh(); } catch(ex) { }
  }
}

/******************************************
* Session ID
*******************************************/

namespace_315820941.getSessionID = function(){
  var idKey = 'calltrk_session_id_315820941';
  var session_id = namespace_315820941.readTransitionalCookie(idKey);

  if (!session_id) {
    session_id = namespace_315820941.generateUUID();
  }

  namespace_315820941.createCookie(idKey, session_id, 30, calltrk_nearestTLD());
  return session_id;
}

namespace_315820941.generateUUID = function(){
  var sha1 = CryptoJS.algo.SHA1.create();
  sha1.update(new Date().getTime().toString(16));
  sha1.update(window.location.href);
  sha1.update(CryptoJS.lib.WordArray.random(256));

  var hash = sha1.finalize().toString(CryptoJS.enc.Hex);
  var mask = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  var uuid = '';

  for(var i = 0; i < mask.length; i++) {
    if(mask.charAt(i) == 'x') { uuid += hash.charAt(i); }
    else if(mask.charAt(i) == 'y') {
      switch(hash.charAt(i)) {
      case '0': case '1': case '2': case '3': uuid += '8'; break;
      case '4': case '5': case '6': case '7': uuid += '9'; break;
      case '8': case '9': case 'a': case 'b': uuid += 'a'; break;
      case 'c': case 'd': case 'e': case 'f': uuid += 'b'; break;
      }
    }
    else { uuid += mask.charAt(i); }
  }

  return uuid;
}

  
namespace_315820941.addLoadEvent = function(new_func){
  // Executes when html is finished loading, even if its still downloading images
  calltrk_jq(document).ready(function() {
    new_func();
  });
};

namespace_315820941.startSourceSwap = function(numberQuery){
  var queryResult = namespace_315820941.sourceSwap(namespace_315820941.referrer_key, numberQuery);

  if (typeof Cufon != 'undefined') {
    try { Cufon.refresh(); } catch(ex) { }
  }

  return queryResult;
};


namespace_315820941.contains = function(a, obj) {
  if(calltrk_jq.inArray(obj, a) > -1){
    return true;
  }else{
    return false;
  }
};

namespace_315820941.sourceSwap = function(referrer_key, numberQuery) {
  var old_number, new_number, search_text, replacement_text, ref_swap, landing_target, landing_swap;
      keys_93727 = ["landing_params"];
      ref_swap = namespace_315820941.contains(keys_93727, referrer_key);

        ref_swap = true;
        landing_target = 'utm_medium=Banner';
        landing_swap = namespace_315820941.checkLanding(namespace_315820941.landing, landing_target);

      track_all_93727 = false;
      if( (ref_swap && landing_swap) || track_all_93727){

            old_number = '8884158992';
            new_number = '8889870963';
            if (old_number === numberQuery) {
              return new_number;
            } else {
              namespace_315820941.swapPhoneNumber(old_number, new_number);
            }

      }
      keys_91880 = ["landing_params"];
      ref_swap = namespace_315820941.contains(keys_91880, referrer_key);

        ref_swap = true;
        landing_target = 'utm_source=capterra';
        landing_swap = namespace_315820941.checkLanding(namespace_315820941.landing, landing_target);

      track_all_91880 = false;
      if( (ref_swap && landing_swap) || track_all_91880){

            old_number = '8665479277';
            new_number = '8883489310';
            if (old_number === numberQuery) {
              return new_number;
            } else {
              namespace_315820941.swapPhoneNumber(old_number, new_number);
            }

      }
      keys_157625 = ["landing_params"];
      ref_swap = namespace_315820941.contains(keys_157625, referrer_key);

        ref_swap = true;
        landing_target = 'utm_source=capterraasset';
        landing_swap = namespace_315820941.checkLanding(namespace_315820941.landing, landing_target);

      track_all_157625 = false;
      if( (ref_swap && landing_swap) || track_all_157625){

            old_number = '8665479277';
            new_number = '8777139469';
            if (old_number === numberQuery) {
              return new_number;
            } else {
              namespace_315820941.swapPhoneNumber(old_number, new_number);
            }

      }
};


  (function() {
  var ns = namespace_315820941;
  var gac = ['utma', 'utmb', 'utmc', 'utmv', 'utmz', 'utmx'];
  var ic = {"GoogleAnalytics":{"cookies":["_ga","__utma","__utmb","__utmc","__utmv","__utmz","__utmx"],"js":{}}};
  var $ = calltrk_jq;

  ns.getIntegrationData = function() {
    var params = {
      ga:   ns.readCookie('_ga'),
      google_content_cookies: ns.getGoogleContentExperimentCookies()
    };

    for(var i = 0; i < gac.length; ++i)
      params[gac[i]] = ns.readCookie('__' + gac[i]);

    $.each(ic, function(intName, dataSet) {
      $.each(dataSet.cookies, function(index, cookie) {
        var v = ns.readCookie(cookie);
        if (v !== null)
          params[intName + "_" + cookie] = v;
      });

      $.each(dataSet.js, function(reportAs, code) {
        try {
          var rc = eval(code);
          if (typeof(rc) === 'object' && !$.isArray(rc))
            rc = $.param(rc);

          params[intName + "_" + reportAs] = rc;
        } catch(e) { }
      });
    });

    return params;
  };

  ns.integrationRetry = function() {
    var data = ns.getIntegrationData();
    data.uuid = ns.getSessionID();

    calltrk_jq.ajax({
      url: "//app.callrail.com/companies/315820941/f010bee1b9e25f683034/10/icap.js",
      dataType: 'script',
      cache: false,
      data: data
    });
  };

})();



  namespace_315820941.referrer = namespace_315820941.getReferrer();
  namespace_315820941.landing = namespace_315820941.getLanding();
  namespace_315820941.referrer_key = namespace_315820941.getReferrerKey(namespace_315820941.referrer, namespace_315820941.landing);


  namespace_315820941.addLoadEvent(namespace_315820941.startSourceSwap);
  namespace_315820941.addLoadEvent(namespace_315820941.checkSessionSwap);

  (function() {
  var cfg = {"enabled":false,"all_pages":false,"url_whitelist":[]};
  var $ = calltrk_jq, namespace = namespace_315820941,
      cookieName = 'crFormCapture';

  namespace.formCaptureConfig = cfg;

  function sendData(data) {
    namespace.log("submitting data");
    var reportUrl = "//app.callrail.com/companies/315820941/f010bee1b9e25f683034/10/form_capture";
    $.getJSON(reportUrl + '?' + data + "&callback=?", function(_) {
      namespace.eraseCookie(cookieName);
      namespace.log("done submitting data");
    });
  }

  function shouldAttach(form) {
    namespace.log('form #' + (form.attr('id') || '<none>') + '.' + (form.attr('class') || '<none>'));

    if (form.attr('data-cr-no-capture') != null) {
      namespace.log('opted out');
      return false;
    }

    var bad = /(^cc$)|(^cvc$)|(card([_-]?)number)|(credit([_-]?)card)/i;
    var inputs = form.find('input');

    for(var i = 0; i < inputs.length; ++i) {
      namespace.log('input: ' + inputs[i].name);
      if (inputs[i].name.match(bad)) {
        namespace.log('has bad name ');
        return false;
      }
    }
    namespace.log('attaching');
    return true;
  }

  function sanitize(name) {
    return name.replace(/[^A-Za-z0-9_]+/g, '_').replace(/_+$/, '');
  }

  function cleanupName(name) {
    return name.replace(/(\[|\])+/g, ' ').replace(/:?\s*$/, '').replace(/^\s+/, '');
  }

  function parentLabel(input) {
    var parent = input.parentElement;
    if (parent && parent.nodeName.match(/label/i))
      return $(parent);
    return null;
  }

  function labelFor(form, input, attribute) {
    attribute = attribute || 'id';
    var label = null;
    if (input[attribute])
      label = form.find("label[for=" + input[attribute] + "]").first();
    return label.length > 0 ? label : null;
  }

  function lookupName(form, input) {
    var label, name, parent;
    if (input.id) {
      if ((label = labelFor(form, input))) {
        name = label.text();
      } else if ((parent = parentLabel(input))) {
        name = parent.text();
      }

      if (name) {
        name = cleanupName(name);
      }
    }

    return (name && name.length) ? name : sanitize(input.name);
  }

  namespace.captureForm = function(form) {
    var contents = { form: {}, hidden: {} },
        types = ['input', 'select', 'textarea'], now = new Date(), name,
        aspxIgnore = ['__EVENTTARGET', '__VIEWSTATE', '__EVENTVALIDATION', '__VIEWSTATEGENERATOR',
                      '__EVENTARGUMENT'];

    if (form.find('input[type=password]').length > 0) {
      namespace.log('has password field, not capturing');
      return;
    }

    function handler(_, input) {
      var name;
      if (input.type === 'radio' && !input.checked) {
        return;
      }

      if (input.getAttribute('data-cr-no-capture') != null) {
        return;
      }

      if (input.type == 'hidden') {
        for(var i = 0; i < aspxIgnore.length; ++i) {
          if (input.name == aspxIgnore[i]) {
            return;
          }
        }
        if (input.name) {
          contents.hidden[lookupName(form, input)] = input.value;
        }
        return;
      }

      if (!input.type.match(/submit/i) && input.name) {
        var value;
        if (input.type == 'radio') {
          var parent = parentLabel(input);
          var label  = labelFor(form, input, 'name');
          name  = label ? cleanupName(label.text()) : sanitize(input.name);
          value = parent ? parent.text().replace(/^\s+/,'') : input.value;
        } else {
          name  = lookupName(form, input);
          value = input.type == 'checkbox' ? input.checked : input.value;
        }

        if (!contents.form[name]) {
          contents.form[name] = value;
        } else {
          /* form has multiple elements with the same name...
          * can happen when looking up via labelFor() */
          var counter = 1;
          var newName;
          do {
            counter++;
            newName = name + " (" + counter.toString() + ")";
          } while (contents.form[newName]);
          contents.form[newName] = value;
        }
      }
    }

    for(var i = 0; i < types.length; ++i) {
      form.find(types[i]).each(handler);
    }

    if (namespace.readCookie('calltrk_session_id_315820941')) {
      contents.session_uuid = namespace.getSessionID();
    }
    contents.uuid      = namespace.generateUUID();
    contents.timestamp = now.getTime();
    contents.url       = window.location.toString();
    contents.landing   = namespace.getLanding();
    contents.referrer  = namespace.getReferrerKey(namespace.getReferrer(), contents.landing);
    contents.referrer_url  = namespace.getReferrer();
    contents = $.param(contents);
    namespace.createCookie(cookieName, contents, 1);
    sendData(contents);

  }

  function onFormSubmit(e) {
    namespace.captureForm($(this));
  }

  function sendExisting() {
    var cookie;
    if ((cookie = namespace.readCookie(cookieName))) {
      namespace.log('found existing cookie, submitting');
      sendData(cookie);
    }
  }

  function attachForms() {
    namespace.log('attaching forms');
    $('form').each(function(index, form) {
      form = $(form);
      if (shouldAttach(form)) {
        form.on('submit', onFormSubmit);
      }
    });
  }

  function captureThisPage() {
    if (cfg.all_pages) { return true; }
    var thisUrl = window.location.protocol + "//" + window.location.host;
    thisUrl += window.location.pathname;
    thisUrl = thisUrl.replace(/\/$/, '')

    for(var i = 0; i < cfg.url_whitelist.length; ++i) {
      var url = cfg.url_whitelist[i].replace(/\/$/, '');

      if (url.indexOf("://") === -1) {
        url = "http://" +  url;
      }

      if (thisUrl == url) {
        namespace.log('url matches, capturing');
        return true;
      }
    }

    namespace.log('no url match, not capturing');
    return false;
  }

  if (cfg.enabled) {
    $(document).ready(function() {
      sendExisting();
      if (captureThisPage()) {
        attachForms();
      }
    });
  }
})();


  (function() {
  // 
  window.CallTrk = window.CallTrk || {
    _namespaces: [],

    swap: function() {
      eachNamespace(function(ns) {
        ns.startSourceSwap();
        ns.checkSessionSwapInternal(false);
      });
    },

    getSwapNumbers: function(numbers, callback) {
      if (!calltrk_jq.isArray(numbers)) {
        numbers = [numbers];
      }
      // build the combined stored session swaps (cross-namespace)
      var knownSessionSwaps = storedSessionSwaps();
      // doesn't matter which namespace, just need hook into one
      var firstNamespace = window.CallTrk._namespaces[0];
      var ns = window[firstNamespace];
      var swappedNumber;
      var result = {};
      for( var j = 0; j < numbers.length; j++) {
        var number = numbers[j];
        swappedNumber = ns.startSourceSwap(number);
        if (swappedNumber) {
          result[number] = swappedNumber;
          numbers.splice(j--,1);
        } else if (knownSessionSwaps[number]) {
          result[number] = knownSessionSwaps[number];
          numbers.splice(j--,1);
        }
      }

      if (numbers.length === 0) {
        callback(result);
      } else {
        // do a session swap, pass results through
        swappedNumber = ns.domlessSessionSwap(numbers, function(serverResult) {
          serverResult = serverResult || [];
          for (var i in serverResult) {
            result[i] = serverResult[i];
          }
          callback(result);
        });
      }
      return result;
    },

    // 
    captureForm: function(node_or_selector) {
      var form = calltrk_jq(node_or_selector);
      eachNamespace(function(ns) {
        if (ns.formCaptureConfig && ns.formCaptureConfig.enabled) {
          ns.captureForm(form);
        }
      });
    }
  };

  function pushNamespace(ns) {
    var namespaces = window.CallTrk._namespaces;
    for(var i = 0; i < namespaces.length; ++i) {
      if (namespaces[i] == ns)
        return;
    }
    namespaces.push(ns);
  }

  function eachNamespace(callback) {
    var namespaces = window.CallTrk._namespaces;
    for(var i = 0; i < namespaces.length; ++i) {
      callback(window[namespaces[i]]);
    }
  }

  function storedSessionSwaps() {
    var result = {};
    eachNamespace(function(ns) {
      var stored = ns.getStoredSwaps();
      for (var i in stored) {
        result[i] = stored[i];
      }
    });
    return result;
  }

  // 
  pushNamespace("namespace_315820941");

})();

};

if (document.visibilityState !== 'prerender') {
  swapEntry();
} else if (document.addEventListener) {
  document.addEventListener("visibilitychange", swapEntry, false);
}

