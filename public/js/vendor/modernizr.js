window.Modernizr=function(ay,ax,aw){function av(b){ae.cssText=b}function au(d,c){return av(aa.join(d+";")+(c||""))}function at(d,c){return typeof d===c}function ar(d,c){return !!~(""+d).indexOf(c)}function aq(f,c){for(var h in f){var g=f[h];if(!ar(g,"-")&&ae[g]!==aw){return"pfx"==c?g:!0}}return !1}function ap(f,c,j){for(var i in f){var h=c[f[i]];if(h!==aw){return j===!1?f[i]:at(h,"function")?h.bind(j||c):h}}return !1}function ao(g,f,j){var i=g.charAt(0).toUpperCase()+g.slice(1),h=(g+" "+Y.join(i+" ")+i).split(" ");return at(f,"string")||at(f,"undefined")?aq(h,f):(h=(g+" "+X.join(i+" ")+i).split(" "),ap(h,f,j))}function an(){aj.input=function(f){for(var b=0,a=f.length;a>b;b++){T[f[b]]=!!(f[b] in ad)}return T.list&&(T.list=!(!ax.createElement("datalist")||!ay.HTMLDataListElement)),T}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),aj.inputtypes=function(b){for(var l,k,j,i=0,c=b.length;c>i;i++){ad.setAttribute("type",k=b[i]),l="text"!==ad.type,l&&(ad.value=ac,ad.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(k)&&ad.style.WebkitAppearance!==aw?(ah.appendChild(ad),j=ax.defaultView,l=j.getComputedStyle&&"textfield"!==j.getComputedStyle(ad,null).WebkitAppearance&&0!==ad.offsetHeight,ah.removeChild(ad)):/^(search|tel)$/.test(k)||(l=/^(url|email)$/.test(k)?ad.checkValidity&&ad.checkValidity()===!1:ad.value!=ac)),U[b[i]]=!!l}return U}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var am,al,ak="2.8.3",aj={},ai=!0,ah=ax.documentElement,ag="modernizr",af=ax.createElement(ag),ae=af.style,ad=ax.createElement("input"),ac=":)",ab={}.toString,aa=" -webkit- -moz- -o- -ms- ".split(" "),Z="Webkit Moz O ms",Y=Z.split(" "),X=Z.toLowerCase().split(" "),W={svg:"http://www.w3.org/2000/svg"},V={},U={},T={},S=[],R=S.slice,Q=function(v,u,t,s){var r,q,p,o,n=ax.createElement("div"),m=ax.body,b=m||ax.createElement("body");if(parseInt(t,10)){for(;t--;){p=ax.createElement("div"),p.id=s?s[t]:ag+(t+1),n.appendChild(p)}}return r=["&#173;",'<style id="s',ag,'">',v,"</style>"].join(""),n.id=ag,(m?n:b).innerHTML+=r,b.appendChild(n),m||(b.style.background="",b.style.overflow="hidden",o=ah.style.overflow,ah.style.overflow="hidden",ah.appendChild(b)),q=u(n,v),m?n.parentNode.removeChild(n):(b.parentNode.removeChild(b),ah.style.overflow=o),!!q},P=function(a){var f=ay.matchMedia||ay.msMatchMedia;if(f){return f(a)&&f(a).matches||!1}var e;return Q("@media "+a+" { #"+ag+" { position: absolute; } }",function(c){e="absolute"==(ay.getComputedStyle?getComputedStyle(c,null):c.currentStyle).position}),e},O=function(){function b(d,h){h=h||ax.createElement(c[d]||"div"),d="on"+d;var f=d in h;return f||(h.setAttribute||(h=ax.createElement("div")),h.setAttribute&&h.removeAttribute&&(h.setAttribute(d,""),f=at(h[d],"function"),at(h[d],"undefined")||(h[d]=aw),h.removeAttribute(d))),h=null,f}var c={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return b}(),N={}.hasOwnProperty;al=at(N,"undefined")||at(N.call,"undefined")?function(d,c){return c in d&&at(d.constructor.prototype[c],"undefined")}:function(d,c){return N.call(d,c)},Function.prototype.bind||(Function.prototype.bind=function(f){var e=this;if("function"!=typeof e){throw new TypeError}var h=R.call(arguments,1),g=function(){if(this instanceof g){var c=function(){};c.prototype=e.prototype;var b=new c,a=e.apply(b,h.concat(R.call(arguments)));return Object(a)===a?a:b}return e.apply(f,h.concat(R.call(arguments)))};return g}),V.flexbox=function(){return ao("flexWrap")},V.flexboxlegacy=function(){return ao("boxDirection")},V.canvas=function(){var b=ax.createElement("canvas");return !(!b.getContext||!b.getContext("2d"))},V.canvastext=function(){return !(!aj.canvas||!at(ax.createElement("canvas").getContext("2d").fillText,"function"))},V.webgl=function(){return !!ay.WebGLRenderingContext},V.touch=function(){var a;return"ontouchstart" in ay||ay.DocumentTouch&&ax instanceof DocumentTouch?a=!0:Q(["@media (",aa.join("touch-enabled),("),ag,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=9===b.offsetTop}),a},V.geolocation=function(){return"geolocation" in navigator},V.postmessage=function(){return !!ay.postMessage},V.websqldatabase=function(){return !!ay.openDatabase},V.indexedDB=function(){return !!ao("indexedDB",ay)},V.hashchange=function(){return O("hashchange",ay)&&(ax.documentMode===aw||ax.documentMode>7)},V.history=function(){return !(!ay.history||!history.pushState)},V.draganddrop=function(){var b=ax.createElement("div");return"draggable" in b||"ondragstart" in b&&"ondrop" in b},V.websockets=function(){return"WebSocket" in ay||"MozWebSocket" in ay},V.rgba=function(){return av("background-color:rgba(150,255,150,.5)"),ar(ae.backgroundColor,"rgba")},V.hsla=function(){return av("background-color:hsla(120,40%,100%,.5)"),ar(ae.backgroundColor,"rgba")||ar(ae.backgroundColor,"hsla")},V.multiplebgs=function(){return av("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(ae.background)},V.backgroundsize=function(){return ao("backgroundSize")},V.borderimage=function(){return ao("borderImage")},V.borderradius=function(){return ao("borderRadius")},V.boxshadow=function(){return ao("boxShadow")},V.textshadow=function(){return""===ax.createElement("div").style.textShadow},V.opacity=function(){return au("opacity:.55"),/^0.55$/.test(ae.opacity)},V.cssanimations=function(){return ao("animationName")},V.csscolumns=function(){return ao("columnCount")},V.cssgradients=function(){var e="background-image:",d="gradient(linear,left top,right bottom,from(#9f9),to(white));",f="linear-gradient(left top,#9f9, white);";return av((e+"-webkit- ".split(" ").join(d+e)+aa.join(f+e)).slice(0,-e.length)),ar(ae.backgroundImage,"gradient")},V.cssreflections=function(){return ao("boxReflect")},V.csstransforms=function(){return !!ao("transform")},V.csstransforms3d=function(){var b=!!ao("perspective");return b&&"webkitPerspective" in ah.style&&Q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(a){b=9===a.offsetLeft&&3===a.offsetHeight}),b},V.csstransitions=function(){return ao("transition")},V.fontface=function(){var b;return Q('@font-face {font-family:"font";src:url("https://")}',function(k,j){var i=ax.getElementById("smodernizr"),h=i.sheet||i.styleSheet,a=h?h.cssRules&&h.cssRules[0]?h.cssRules[0].cssText:h.cssText||"":"";b=/src/i.test(a)&&0===a.indexOf(j.split(" ")[0])}),b},V.generatedcontent=function(){var b;return Q(["#",ag,"{font:0/0 a}#",ag,':after{content:"',ac,'";visibility:hidden;font:3px/1 a}'].join(""),function(a){b=a.offsetHeight>=3}),b},V.video=function(){var b=ax.createElement("video"),f=!1;try{(f=!!b.canPlayType)&&(f=new Boolean(f),f.ogg=b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),f.h264=b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),f.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return f},V.audio=function(){var b=ax.createElement("audio"),f=!1;try{(f=!!b.canPlayType)&&(f=new Boolean(f),f.ogg=b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),f.mp3=b.canPlayType("audio/mpeg;").replace(/^no$/,""),f.wav=b.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),f.m4a=(b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return f},V.localstorage=function(){try{return localStorage.setItem(ag,ag),localStorage.removeItem(ag),!0}catch(b){return !1}},V.sessionstorage=function(){try{return sessionStorage.setItem(ag,ag),sessionStorage.removeItem(ag),!0}catch(b){return !1}},V.webworkers=function(){return !!ay.Worker},V.applicationcache=function(){return !!ay.applicationCache},V.svg=function(){return !!ax.createElementNS&&!!ax.createElementNS(W.svg,"svg").createSVGRect},V.inlinesvg=function(){var b=ax.createElement("div");return b.innerHTML="<svg/>",(b.firstChild&&b.firstChild.namespaceURI)==W.svg},V.smil=function(){return !!ax.createElementNS&&/SVGAnimate/.test(ab.call(ax.createElementNS(W.svg,"animate")))},V.svgclippaths=function(){return !!ax.createElementNS&&/SVGClipPath/.test(ab.call(ax.createElementNS(W.svg,"clipPath")))};for(var M in V){al(V,M)&&(am=M.toLowerCase(),aj[am]=V[M](),S.push((aj[am]?"":"no-")+am))}return aj.input||an(),aj.addTest=function(e,c){if("object"==typeof e){for(var f in e){al(e,f)&&aj.addTest(f,e[f])}}else{if(e=e.toLowerCase(),aj[e]!==aw){return aj}c="function"==typeof c?c():c,"undefined"!=typeof ai&&ai&&(ah.className+=" "+(c?"":"no-")+e),aj[e]=c}return aj},av(""),af=ad=null,function(L,K){function J(f,e){var h=f.createElement("p"),g=f.getElementsByTagName("head")[0]||f.documentElement;return h.innerHTML="x<style>"+e+"</style>",g.insertBefore(h.lastChild,g.firstChild)}function I(){var b=t.elements;return"string"==typeof b?b.split(" "):b}function H(d){var c=u[d[w]];return c||(c={},v++,d[w]=v,u[v]=c),c}function G(b,h,g){if(h||(h=K),B){return h.createElement(b)}g||(g=H(h));var e;return e=g.cache[b]?g.cache[b].cloneNode():x.test(b)?(g.cache[b]=g.createElem(b)).cloneNode():g.createElem(b),!e.canHaveChildren||y.test(b)||e.tagUrn?e:g.frag.appendChild(e)}function F(b,l){if(b||(b=K),B){return b.createDocumentFragment()}l=l||H(b);for(var k=l.frag.cloneNode(),j=0,e=I(),d=e.length;d>j;j++){k.createElement(e[j])}return k}function E(d,c){c.cache||(c.cache={},c.createElem=d.createElement,c.createFrag=d.createDocumentFragment,c.frag=c.createFrag()),d.createElement=function(a){return t.shivMethods?G(a,d,c):c.createElem(a)},d.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+I().join().replace(/[\w\-]+/g,function(b){return c.createElem(b),c.frag.createElement(b),'c("'+b+'")'})+");return n}")(t,c.frag)}function D(b){b||(b=K);var c=H(b);return !t.shivCSS||C||c.hasCSS||(c.hasCSS=!!J(b,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),B||E(b,c),b}var C,B,A="3.7.0",z=L.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,x=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,w="_html5shiv",v=0,u={};!function(){try{var b=K.createElement("a");b.innerHTML="<xyz></xyz>",C="hidden" in b,B=1==b.childNodes.length||function(){K.createElement("a");var c=K.createDocumentFragment();return"undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}()}catch(d){C=!0,B=!0}}();var t={elements:z.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:A,shivCSS:z.shivCSS!==!1,supportsUnknownElements:B,shivMethods:z.shivMethods!==!1,type:"default",shivDocument:D,createElement:G,createDocumentFragment:F};L.html5=t,D(K)}(this,ax),aj._version=ak,aj._prefixes=aa,aj._domPrefixes=X,aj._cssomPrefixes=Y,aj.mq=P,aj.hasEvent=O,aj.testProp=function(b){return aq([b])},aj.testAllProps=ao,aj.testStyles=Q,aj.prefixed=function(e,d,f){return d?ao(e,d,f):ao(e,"pfx")},ah.className=ah.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(ai?" js "+S.join(" "):""),aj}(this,this.document);