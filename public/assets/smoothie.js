var h=void 0,k=!0,m=null,n=!1;function p(){return function(a){return a}}
(function(){function a(f,b,G,d){if(f===b)return 0!==f||1/f==1/b;if(m==f||m==b)return f===b;f instanceof c&&(f=f.H);b instanceof c&&(b=b.H);var e=x.call(f);if(e!=x.call(b))return n;switch(e){case "[object String]":return f==b+"";case "[object Number]":return f!=+f?b!=+b:0==f?1/f==1/b:f==+b;case "[object Date]":case "[object Boolean]":return+f==+b;case "[object RegExp]":return f.source==b.source&&f.global==b.global&&f.multiline==b.multiline&&f.ignoreCase==b.ignoreCase}if("object"!=typeof f||"object"!=
typeof b)return n;for(var t=G.length;t--;)if(G[t]==f)return d[t]==b;G.push(f);d.push(b);var t=0,H=k;if("[object Array]"==e){if(t=f.length,H=t==b.length)for(;t--&&(H=a(f[t],b[t],G,d)););}else{var e=f.constructor,g=b.constructor;if(e!==g&&(!c.j(e)||!(e instanceof e&&c.j(g)&&g instanceof g)))return n;for(var l in f)if(c.c(f,l)&&(t++,!(H=c.c(b,l)&&a(f[l],b[l],G,d))))break;if(H){for(l in b)if(c.c(b,l)&&!t--)break;H=!t}}return G.pop(),d.pop(),H}function b(f,a,d){return w(f,function(f){c.isArray(f)?a?y.apply(d,
f):b(f,a,d):d.push(f)}),d}function d(f,a,b,d){var D={},t=e(a||c.A);return w(f,function(a,c){var ha=t.call(b,a,c,f);d(D,ha,a)}),D}function e(f){return c.j(f)?f:function(a){return a[f]}}function c(f){return f instanceof c?f:this instanceof c?(this.H=f,h):new c(f)}var g=this,q=g.ea,r={},j=Array.prototype,u=Object.prototype,y=j.push,l=j.slice,E=j.concat,x=u.toString,I=u.hasOwnProperty,F=j.forEach,z=j.map,s=j.reduce,U=j.reduceRight,V=j.filter,W=j.every,X=j.some,L=j.indexOf,Y=j.lastIndexOf,u=Array.isArray,
ia=Object.keys,Q=Function.prototype.bind;"undefined"!=typeof exports?("undefined"!=typeof module&&module.xb&&(exports=module.xb=c),exports.ea=c):g.ea=c;c.VERSION="1.4.4";var w=c.W=c.forEach=function(f,a,b){if(m!=f)if(F&&f.forEach===F)f.forEach(a,b);else if(f.length===+f.length)for(var d=0,e=f.length;e>d&&a.call(b,f[d],d,f)!==r;d++);else for(d in f)if(c.c(f,d)&&a.call(b,f[d],d,f)===r)break};c.map=c.ic=function(f,a,c){var b=[];return m==f?b:z&&f.map===z?f.map(a,c):(w(f,function(f,d,e){b[b.length]=a.call(c,
f,d,e)}),b)};c.reduce=c.uc=c.Bc=function(f,a,b,d){var e=2<arguments.length;if(m==f&&(f=[]),s&&f.reduce===s)return d&&(a=c.bind(a,d)),e?f.reduce(a,b):f.reduce(a);if(w(f,function(f,c,g){e?b=a.call(d,b,f,c,g):(b=f,e=k)}),!e)throw new TypeError("Reduce of empty array with no initial value");return b};c.reduceRight=c.vc=function(a,b,d,e){var D=2<arguments.length;if(m==a&&(a=[]),U&&a.reduceRight===U)return e&&(b=c.bind(b,e)),D?a.reduceRight(b,d):a.reduceRight(b);var t=a.length;if(t!==+t)var g=c.keys(a),
t=g.length;if(w(a,function(c,l,j){l=g?g[--t]:--t;D?d=b.call(e,d,a[l],l,j):(d=a[l],D=k)}),!D)throw new TypeError("Reduce of empty array with no initial value");return d};c.find=c.oc=function(a,c,b){var d;return Z(a,function(a,f,e){return c.call(b,a,f,e)?(d=a,k):h}),d};c.filter=c.select=function(a,c,b){var d=[];return m==a?d:V&&a.filter===V?a.filter(c,b):(w(a,function(a,f,e){c.call(b,a,f,e)&&(d[d.length]=a)}),d)};c.dd=function(a,b,d){return c.filter(a,function(a,f,c){return!b.call(d,a,f,c)},d)};c.every=
c.all=function(a,b,d){b||(b=c.A);var e=k;return m==a?e:W&&a.every===W?a.every(b,d):(w(a,function(a,f,c){return(e=e&&b.call(d,a,f,c))?h:r}),!!e)};var Z=c.some=c.ob=function(a,b,d){b||(b=c.A);var e=n;return m==a?e:X&&a.some===X?a.some(b,d):(w(a,function(a,f,c){return e||(e=b.call(d,a,f,c))?r:h}),!!e)};c.contains=c.zc=function(a,c){return m==a?n:L&&a.indexOf===L?-1!=a.indexOf(c):Z(a,function(a){return a===c})};c.Hb=function(a,b){var d=l.call(arguments,2),e=c.j(b);return c.map(a,function(a){return(e?
b:a[b]).apply(a,d)})};c.ka=function(a,b){return c.map(a,function(a){return a[b]})};c.Da=function(a,b,d){return c.Z(b)?d?m:[]:c[d?"find":"filter"](a,function(a){for(var f in b)if(b[f]!==a[f])return n;return k})};c.zb=function(a,b){return c.Da(a,b,k)};c.max=function(a,b,d){if(!b&&c.isArray(a)&&a[0]===+a[0]&&65535>a.length)return Math.max.apply(Math,a);if(!b&&c.Z(a))return-1/0;var e={T:-1/0,value:-1/0};return w(a,function(a,c,f){c=b?b.call(d,a,c,f):a;c>=e.T&&(e={value:a,T:c})}),e.value};c.min=function(a,
b,d){if(!b&&c.isArray(a)&&a[0]===+a[0]&&65535>a.length)return Math.min.apply(Math,a);if(!b&&c.Z(a))return 1/0;var e={T:1/0,value:1/0};return w(a,function(a,c,f){c=b?b.call(d,a,c,f):a;e.T>c&&(e={value:a,T:c})}),e.value};c.fd=function(a){var b,d=0,e=[];return w(a,function(a){b=c.random(d++);e[d-1]=e[b];e[b]=a}),e};c.Pb=function(a,b){var d=e(b);return c.ka(c.map(a,function(a,b,c){return{value:a,index:b,Oa:d.call(h,a,b,c)}}).sort(function(a,b){var c=a.Oa,f=b.Oa;if(c!==f){if(c>f||c===h)return 1;if(f>c||
f===h)return-1}return a.index<b.index?-1:1}),"value")};c.wc=function(a,b,e){return d(a,b,e,function(a,b,f){(c.c(a,b)?a[b]:a[b]=[]).push(f)})};c.kc=function(a,b,e){return d(a,b,e,function(a,b){c.c(a,b)||(a[b]=0);a[b]++})};c.ya=function(a,b,d,g){d=m==d?c.A:e(d);b=d.call(g,b);for(var l=0,t=a.length;t>l;){var j=l+t>>>1;b>d.call(g,a[j])?l=j+1:t=j}return l};c.md=function(a){return a?c.isArray(a)?l.call(a):a.length===+a.length?c.map(a,c.A):c.Tb(a):[]};c.size=function(a){return m==a?0:a.length===+a.length?
a.length:c.keys(a).length};c.sc=c.head=c.hd=function(a,b,c){return m==a?h:m==b||c?a[0]:l.call(a,0,b)};c.Ac=function(a,b,c){return l.call(a,0,a.length-(m==b||c?1:b))};c.Nc=function(a,b,c){return m==a?h:m==b||c?a[a.length-1]:l.call(a,Math.max(a.length-b,0))};c.ed=c.gd=c.pc=function(a,b,c){return l.call(a,m==b||c?1:b)};c.compact=function(a){return c.filter(a,c.A)};c.tc=function(a,c){return b(a,c,[])};c.od=function(a){return c.wb(a,l.call(arguments,1))};c.ab=c.unique=function(a,b,d,e){c.j(b)&&(e=d,d=
b,b=n);d=d?c.map(a,d,e):a;var g=[],l=[];return w(d,function(d,e){(b?e&&l[l.length-1]===d:c.contains(l,d))||(l.push(d),g.push(a[e]))}),g};c.nd=function(){return c.ab(E.apply(j,arguments))};c.Cc=function(a){var b=l.call(arguments,1);return c.filter(c.ab(a),function(a){return c.every(b,function(b){return 0<=c.indexOf(b,a)})})};c.wb=function(a){var b=E.apply(j,l.call(arguments,1));return c.filter(a,function(a){return!c.contains(b,a)})};c.qd=function(){for(var a=l.call(arguments),b=c.max(c.ka(a,"length")),
d=Array(b),e=0;b>e;e++)d[e]=c.ka(a,""+e);return d};c.object=function(a,b){if(m==a)return{};for(var c={},d=0,e=a.length;e>d;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c};c.indexOf=function(a,b,d){if(m==a)return-1;var e=0,g=a.length;if(d){if("number"!=typeof d)return e=c.ya(a,b),a[e]===b?e:-1;e=0>d?Math.max(0,g+d):d}if(L&&a.indexOf===L)return a.indexOf(b,d);for(;g>e;e++)if(a[e]===b)return e;return-1};c.lastIndexOf=function(a,b,c){if(m==a)return-1;var d=m!=c;if(Y&&a.lastIndexOf===Y)return d?a.lastIndexOf(b,
c):a.lastIndexOf(b);for(c=d?c:a.length;c--;)if(a[c]===b)return c;return-1};c.bd=function(a,b,c){1>=arguments.length&&(b=a||0,a=0);c=arguments[2]||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=0,g=Array(d);d>e;)g[e++]=a,a+=c;return g};c.bind=function(a,b){if(a.bind===Q&&Q)return Q.apply(a,l.call(arguments,1));var c=l.call(arguments,2);return function(){return a.apply(b,c.concat(l.call(arguments)))}};c.Yc=function(a){var b=l.call(arguments,1);return function(){return a.apply(this,b.concat(l.call(arguments)))}};
c.rb=function(a){var b=l.call(arguments,1);0===b.length&&(b=c.Qa(a));w(b,function(b){a[b]=c.bind(a[b],a)})};c.Qc=function(a,b){var d={};return b||(b=c.A),function(){var e=b.apply(this,arguments);return c.c(d,e)?d[e]:d[e]=a.apply(this,arguments)}};c.vb=function(a,b){var c=l.call(arguments,2);return setTimeout(function(){return a.apply(m,c)},b)};c.defer=function(a){return c.vb.apply(c,[a,1].concat(l.call(arguments,1)))};c.kd=function(a,b){function c(){j=new Date;g=m;l=a.apply(d,e)}var d,e,g,l,j=0;return function(){var u=
new Date,s=b-(u-j);return d=this,e=arguments,0>=s?(clearTimeout(g),g=m,j=u,l=a.apply(d,e)):g||(g=setTimeout(c,s)),l}};c.mc=function(a,b,c){var d,e;return function(){var g=this,l=arguments,j=c&&!d;return clearTimeout(d),d=setTimeout(function(){d=m;c||(e=a.apply(g,l))},b),j&&(e=a.apply(g,l)),e}};c.Wa=function(a){var b,c=n;return function(){return c?b:(c=k,b=a.apply(this,arguments),a=m,b)}};c.pd=function(a,b){return function(){var c=[a];return y.apply(c,arguments),b.apply(this,c)}};c.jc=function(){var a=
arguments;return function(){for(var b=arguments,c=a.length-1;0<=c;c--)b=[a[c].apply(this,b)];return b[0]}};c.ec=function(a,b){return 0>=a?b():function(){return 1>--a?b.apply(this,arguments):h}};c.keys=ia||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],d;for(d in a)c.c(a,d)&&(b[b.length]=d);return b};c.Tb=function(a){var b=[],d;for(d in a)c.c(a,d)&&b.push(a[d]);return b};c.Xc=function(a){var b=[],d;for(d in a)c.c(a,d)&&b.push([d,a[d]]);return b};c.Gb=function(a){var b=
{},d;for(d in a)c.c(a,d)&&(b[a[d]]=d);return b};c.Qa=c.Rc=function(a){var b=[],d;for(d in a)c.j(a[d])&&b.push(d);return b.sort()};c.extend=function(a){return w(l.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a};c.Xa=function(a){var b={},c=E.apply(j,l.call(arguments,1));return w(c,function(c){c in a&&(b[c]=a[c])}),b};c.Tc=function(a){var b={},d=E.apply(j,l.call(arguments,1)),e;for(e in a)c.contains(d,e)||(b[e]=a[e]);return b};c.V=function(a){return w(l.call(arguments,1),function(b){if(b)for(var c in b)m==
a[c]&&(a[c]=b[c])}),a};c.l=function(a){return c.Ta(a)?c.isArray(a)?a.slice():c.extend({},a):a};c.jd=function(a,b){return b(a),a};c.isEqual=function(b,c){return a(b,c,[],[])};c.Z=function(a){if(m==a)return k;if(c.isArray(a)||c.Ua(a))return 0===a.length;for(var b in a)if(c.c(a,b))return n;return k};c.Ec=function(a){return!(!a||1!==a.nodeType)};c.isArray=u||function(a){return"[object Array]"==x.call(a)};c.Ta=function(a){return a===Object(a)};w("Arguments Function String Number Date RegExp".split(" "),
function(a){c["is"+a]=function(b){return x.call(b)=="[object "+a+"]"}});c.Ib(arguments)||(c.Ib=function(a){return!(!a||!c.c(a,"callee"))});"function"!=typeof/./&&(c.j=function(a){return"function"==typeof a});c.Fc=function(a){return isFinite(a)&&!isNaN(parseFloat(a))};c.Gc=function(a){return c.Ic(a)&&a!=+a};c.Dc=function(a){return a===k||a===n||"[object Boolean]"==x.call(a)};c.Hc=function(a){return m===a};c.Kc=function(a){return a===h};c.c=function(a,b){return I.call(a,b)};c.Mb=function(){return g.ea=
q,this};c.A=p();c.ld=function(a,b,c){for(var d=Array(a),e=0;a>e;e++)d[e]=b.call(c,e);return d};c.random=function(a,b){return m==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))};var J={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};J.unescape=c.Gb(J.escape);var ja={escape:RegExp("["+c.keys(J.escape).join("")+"]","g"),unescape:RegExp("("+c.keys(J.unescape).join("|")+")","g")};c.W(["escape","unescape"],function(a){c[a]=function(b){return m==b?"":(""+b).replace(ja[a],
function(b){return J[a][b]})}});c.result=function(a,b){if(m==a)return m;var d=a[b];return c.j(d)?d.call(a):d};c.Jb=function(a){w(c.Qa(a),function(b){var d=c[b]=a[b];c.prototype[b]=function(){var a=[this.H];y.apply(a,arguments);a=d.apply(c,a);return this.pa?c(a).R():a}})};var ka=0;c.Ba=function(a){var b=++ka+"";return a?a+b:b};c.Rb={evaluate:/<%([\s\S]+?)%>/g,Eb:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var R=/(.)^/,la={"'":"'","\\":"\\","\r":"r","\n":"n","  ":"t","\u2028":"u2028","\u2029":"u2029"},
ma=/\\|'|\r|\n|\t|\u2028|\u2029/g;c.L=function(a,b,d){function e(a){return g.call(this,a,c)}var g;d=c.V({},d,c.Rb);var l=0,j="__p+='";a.replace(RegExp([(d.escape||R).source,(d.Eb||R).source,(d.evaluate||R).source].join("|")+"|$","g"),function(b,c,d,e,g){return j+=a.slice(l,g).replace(ma,function(a){return"\\"+la[a]}),c&&(j+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"),d&&(j+="'+\n((__t=("+d+"))==null?'':__t)+\n'"),e&&(j+="';\n"+e+"\n__p+='"),l=g+b.length,b});j+="';\n";d.fb||(j="with(obj||{}){\n"+
j+"}\n");j="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+j+"return __p;\n";try{g=Function(d.fb||"obj","_",j)}catch(u){throw u.source=j,u;}return b?g(b,c):(e.source="function("+(d.fb||"obj")+"){\n"+j+"}",e)};c.R=function(a){return c(a).R()};c.Jb(c);w("pop push reverse shift sort splice unshift".split(" "),function(a){var b=j[a];c.prototype[a]=function(){var d=this.H;return b.apply(d,arguments),"shift"!=a&&"splice"!=a||0!==d.length||delete d[0],this.pa?
c(d).R():d}});w(["concat","join","slice"],function(a){var b=j[a];c.prototype[a]=function(){var a=b.apply(this.H,arguments);return this.pa?c(a).R():a}});c.extend(c.prototype,{R:function(){return this.pa=k,this},value:function(){return this.H}})}).call(this);"object"!==typeof JSON&&(JSON={});
(function(){function a(a){return 10>a?"0"+a:a}function b(a){c.lastIndex=0;return c.test(a)?'"'+a.replace(c,function(a){var b=r[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function d(a,c){var e,r,x,I,F=g,z,s=c[a];s&&("object"===typeof s&&"function"===typeof s.toJSON)&&(s=s.toJSON(a));"function"===typeof j&&(s=j.call(c,a,s));switch(typeof s){case "string":return b(s);case "number":return isFinite(s)?String(s):"null";case "boolean":case "null":return String(s);
case "object":if(!s)return"null";g+=q;z=[];if("[object Array]"===Object.prototype.toString.apply(s)){I=s.length;for(e=0;e<I;e+=1)z[e]=d(e,s)||"null";x=0===z.length?"[]":g?"[\n"+g+z.join(",\n"+g)+"\n"+F+"]":"["+z.join(",")+"]";g=F;return x}if(j&&"object"===typeof j){I=j.length;for(e=0;e<I;e+=1)"string"===typeof j[e]&&(r=j[e],(x=d(r,s))&&z.push(b(r)+(g?": ":":")+x))}else for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(x=d(r,s))&&z.push(b(r)+(g?": ":":")+x);x=0===z.length?"{}":g?"{\n"+g+z.join(",\n"+
g)+"\n"+F+"}":"{"+z.join(",")+"}";g=F;return x}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":m},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,g,q,r={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},j;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,b,c){var e;q=g="";if("number"===typeof c)for(e=0;e<c;e+=1)q+=" ";else"string"===typeof c&&(q=c);if((j=b)&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length))throw Error("JSON.stringify");return d("",{"":a})});
"function"!==typeof JSON.parse&&(JSON.parse=function(a,b){function c(a,d){var e,g,j=a[d];if(j&&"object"===typeof j)for(e in j)Object.prototype.hasOwnProperty.call(j,e)&&(g=c(j,e),g!==h?j[e]=g:delete j[e]);return b.call(a,d,j)}var d;a=String(a);e.lastIndex=0;e.test(a)&&(a=a.replace(e,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),"function"===typeof b?c({"":d},""):d;throw new SyntaxError("JSON.parse");})})();var v=this,aa=v.Ea,A=[],ba=A.push,B=A.slice,ca=A.splice,C;C="undefined"!==typeof exports?exports:v.Ea={};C.VERSION="1.0.0";var K=v.ea;!K&&"undefined"!==typeof require&&(K=require("underscore"));C.g=v.Mc||v.bc||v.qc||v.g;C.Mb=function(){v.Ea=aa;return this};C.va=n;C.X=n;
var N=C.Wb={D:function(a,b,d){if(!M(this,"on",a,[b,d])||!b)return this;this.f||(this.f={});(this.f[a]||(this.f[a]=[])).push({o:b,ub:d,U:d||this});return this},Wa:function(a,b,d){if(!M(this,"once",a,[b,d])||!b)return this;var e=this,c=K.Wa(function(){e.C(a,c);b.apply(this,arguments)});c.ib=b;return this.D(a,c,d)},C:function(a,b,d){var e,c,g,q,r,j,u,y;if(!this.f||!M(this,"off",a,[b,d]))return this;if(!a&&!b&&!d)return this.f={},this;q=a?[a]:K.keys(this.f);r=0;for(j=q.length;r<j;r++)if(a=q[r],g=this.f[a]){this.f[a]=
e=[];if(b||d){u=0;for(y=g.length;u<y;u++)c=g[u],(b&&b!==c.o&&b!==c.o.ib||d&&d!==c.ub)&&e.push(c)}e.length||delete this.f[a]}return this},a:function(a){if(!this.f)return this;var b=B.call(arguments,1);if(!M(this,"trigger",a,b))return this;var d=this.f[a],e=this.f.all;d&&da(d,b);e&&da(e,arguments);return this},Qb:function(a,b,d){var e=this.ra;if(!e)return this;var c=!b&&!d;"object"===typeof b&&(d=this);a&&((e={})[a.Fa]=a);for(var g in e)e[g].C(b,d,this),c&&delete this.ra[g];return this}},ea=/\s+/;
function M(a,b,d,e){if(!d)return k;if("object"===typeof d){for(var c in d)a[b].apply(a,[c,d[c]].concat(e));return n}if(ea.test(d)){d=d.split(ea);c=0;for(var g=d.length;c<g;c++)a[b].apply(a,[d[c]].concat(e));return n}return k}
function da(a,b){var d,e=-1,c=a.length,g=b[0],q=b[1],r=b[2];switch(b.length){case 0:for(;++e<c;)(d=a[e]).o.call(d.U);break;case 1:for(;++e<c;)(d=a[e]).o.call(d.U,g);break;case 2:for(;++e<c;)(d=a[e]).o.call(d.U,g,q);break;case 3:for(;++e<c;)(d=a[e]).o.call(d.U,g,q,r);break;default:for(;++e<c;)(d=a[e]).o.apply(d.U,b)}}K.W({Oc:"on",Pc:"once"},function(a,b){N[b]=function(b,e,c){var g=this.ra||(this.ra={}),q=b.Fa||(b.Fa=K.Ba("l"));g[q]=b;"object"===typeof e&&(c=this);b[a](e,c,this);return this}});
N.bind=N.D;N.Za=N.C;K.extend(C,N);var O=C.Yb=function(a,b){var d,e=a||{};b||(b={});this.q=K.Ba("c");this.attributes={};K.extend(this,K.Xa(b,fa));b.parse&&(e=this.parse(e,b)||{});if(d=K.result(this,"defaults"))e=K.V({},e,d);this.set(e,b);this.v={};this.r.apply(this,arguments)},fa=["url","urlRoot","collection"];
K.extend(O.prototype,N,{v:m,eb:m,ha:"id",r:function(){},toJSON:function(){return K.l(this.attributes)},t:function(){return C.t.apply(this,arguments)},get:function(a){return this.attributes[a]},escape:function(a){return K.escape(this.get(a))},c:function(a){return this.get(a)!=m},set:function(a,b,d){var e,c,g,q,r,j,u;if(a==m)return this;"object"===typeof a?(c=a,d=b):(c={})[a]=b;d||(d={});if(!this.ga(c,d))return n;g=d.Ca;q=d.s;a=[];r=this.qa;this.qa=k;r||(this.P=K.l(this.attributes),this.v={});u=this.attributes;
j=this.P;this.ha in c&&(this.id=c[this.ha]);for(e in c)b=c[e],K.isEqual(u[e],b)||a.push(e),K.isEqual(j[e],b)?delete this.v[e]:this.v[e]=b,g?delete u[e]:u[e]=b;if(!q){a.length&&(this.sa=k);b=0;for(e=a.length;b<e;b++)this.a("change:"+a[b],this,u[a[b]],d)}if(r)return this;if(!q)for(;this.sa;)this.sa=n,this.a("change",this,d);this.qa=this.sa=n;return this},Ca:function(a,b){return this.set(a,h,K.extend({},b,{Ca:k}))},clear:function(a){var b={},d;for(d in this.attributes)b[d]=h;return this.set(b,K.extend({},
a,{Ca:k}))},Sa:function(a){return a==m?!K.Z(this.v):K.c(this.v,a)},hc:function(a){if(!a)return this.Sa()?K.l(this.v):n;var b,d=n,e=this.qa?this.P:this.attributes,c;for(c in a)if(!K.isEqual(e[c],b=a[c]))(d||(d={}))[c]=b;return d},wa:function(a){return a==m||!this.P?m:this.P[a]},Zc:function(){return K.l(this.P)},yb:function(a){a=a?K.l(a):{};a.parse===h&&(a.parse=k);var b=this,d=a.n;a.n=function(e){if(!b.set(b.parse(e,a),a))return n;d&&d(b,e,a);b.a("sync",b,e,a)};P(this,a);return this.t("read",this,
a)},save:function(a,b,d){var e,c=this.attributes;a==m||"object"===typeof a?(e=a,d=b):(e={})[a]=b;if(e&&(!d||!d.F)&&!this.set(e,d))return n;d=K.extend({ma:k},d);if(!this.ga(e,d))return n;e&&d.F&&(this.attributes=K.extend({},c,e));d.parse===h&&(d.parse=k);var g=this,q=d.n;d.n=function(a){g.attributes=c;var b=g.parse(a,d);d.F&&(b=K.extend(e||{},b));if(K.Ta(b)&&!g.set(b,d))return n;q&&q(g,a,d);g.a("sync",g,a,d)};P(this,d);a=this.$()?"create":d.Ob?"patch":"update";"patch"===a&&(d.pb=e);a=this.t(a,this,
d);e&&d.F&&(this.attributes=c);return a},nc:function(a){function b(){d.a("destroy",d,d.I,a)}a=a?K.l(a):{};var d=this,e=a.n;a.n=function(c){(a.F||d.$())&&b();e&&e(d,c,a);d.$()||d.a("sync",d,c,a)};if(this.$())return a.n(),n;P(this,a);var c=this.t("delete",this,a);a.F||b();return c},url:function(){var a=K.result(this,"urlRoot")||K.result(this.I,"url")||ga();return this.$()?a:a+("/"===a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:p(),l:function(){return new this.constructor(this.attributes)},
$:function(){return this.id==m},Lc:function(a){return this.ga({},K.extend(a||{},{ma:k}))},ga:function(a,b){if(!b.ma||!this.ma)return k;a=K.extend({},this.attributes,a);var d=this.eb=this.ma(a,b)||m;if(!d)return k;this.a("invalid",this,d,K.extend(b||{},{eb:d}));return n}});K.W("keys values pairs invert pick omit".split(" "),function(a){O.prototype[a]=function(){var b=B.call(arguments);b.unshift(this.attributes);return K[a].apply(K,b)}});
var S=C.Vb=function(a,b){b||(b={});b.url&&(this.url=b.url);b.k&&(this.k=b.k);b.i!==h&&(this.i=b.i);this.Ia();this.r.apply(this,arguments);a&&this.reset(a,K.extend({s:k},b))},na={add:k,remove:k,Va:k},oa={add:k,Va:n,remove:n};
K.extend(S.prototype,N,{k:O,r:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},t:function(){return C.t.apply(this,arguments)},add:function(a,b){return this.set(a,K.V(b||{},oa))},remove:function(a,b){a=K.isArray(a)?a.slice():[a];b||(b={});var d,e,c,g;d=0;for(e=a.length;d<e;d++)if(g=this.get(a[d]))delete this.u[g.id],delete this.u[g.q],c=this.indexOf(g),this.d.splice(c,1),this.length--,b.s||(b.index=c,g.a("remove",g,this,b)),this.Ha(g);return this},set:function(a,b){b=
K.V(b||{},na);b.parse&&(a=this.parse(a,b));K.isArray(a)||(a=a?[a]:[]);var d,e,c,g,q,r=b.Q,j=this.i&&r==m&&b.sort!==n,u=K.Ua(this.i)?this.i:m,y=[],l=[],E={};d=0;for(e=a.length;d<e;d++)if(c=this.fa(a[d],b))(g=this.get(c))?(b.remove&&(E[g.q]=k),b.Va&&(g.set(c.attributes,b),j&&(!q&&g.Sa(u))&&(q=k))):b.add&&(y.push(c),c.D("all",this.Ga,this),this.u[c.q]=c,c.id!=m&&(this.u[c.id]=c));if(b.remove){d=0;for(e=this.length;d<e;++d)E[(c=this.d[d]).q]||l.push(c);l.length&&this.remove(l,b)}y.length&&(j&&(q=k),this.length+=
y.length,r!=m?ca.apply(this.d,[r,0].concat(y)):ba.apply(this.d,y));q&&this.sort({s:k});if(b.s)return this;d=0;for(e=y.length;d<e;d++)(c=y[d]).a("add",c,this,b);q&&this.a("sort",this,b);return this},reset:function(a,b){b||(b={});for(var d=0,e=this.d.length;d<e;d++)this.Ha(this.d[d]);b.$c=this.d;this.Ia();this.add(a,K.extend({s:k},b));b.s||this.a("reset",this,b);return this},push:function(a,b){a=this.fa(a,b);this.add(a,K.extend({Q:this.length},b));return a},pop:function(a){var b=this.Q(this.length-
1);this.remove(b,a);return b},unshift:function(a,b){a=this.fa(a,b);this.add(a,K.extend({Q:0},b));return a},shift:function(a){var b=this.Q(0);this.remove(b,a);return b},slice:function(a,b){return this.d.slice(a,b)},get:function(a){return a==m?h:this.u[a.id!=m?a.id:a.q||a]},Q:function(a){return this.d[a]},Da:function(a,b){return K.Z(a)?b?h:[]:this[b?"find":"filter"](function(b){for(var e in a)if(a[e]!==b.get(e))return n;return k})},zb:function(a){return this.Da(a,k)},sort:function(a){if(!this.i)throw Error("Cannot sort a set without a comparator");
a||(a={});K.Ua(this.i)||1===this.i.length?this.d=this.Pb(this.i,this):this.d.sort(K.bind(this.i,this));a.s||this.a("sort",this,a);return this},ya:function(a,b,d){b||(b=this.i);return K.ya(this.d,a,K.j(b)?b:function(a){return a.get(b)},d)},ka:function(a){return K.Hb(this.d,"get",a)},yb:function(a){a=a?K.l(a):{};a.parse===h&&(a.parse=k);var b=a.n,d=this;a.n=function(e){d[a.reset?"reset":"set"](e,a);b&&b(d,e,a);d.a("sync",d,e,a)};P(this,a);return this.t("read",this,a)},create:function(a,b){b=b?K.l(b):
{};if(!(a=this.fa(a,b)))return n;b.F||this.add(a,b);var d=this,e=b.n;b.n=function(c){b.F&&d.add(a,b);e&&e(a,c,b)};a.save(m,b);return a},parse:p(),l:function(){return new this.constructor(this.d)},Ia:function(){this.length=0;this.d=[];this.u={}},fa:function(a,b){if(a instanceof O)return a.I||(a.I=this),a;b||(b={});b.I=this;var d=new this.k(a,b);return!d.ga(a,b)?(this.a("invalid",this,a,b),n):d},Ha:function(a){this===a.I&&delete a.I;a.C("all",this.Ga,this)},Ga:function(a,b,d,e){("add"===a||"remove"===
a)&&d!==this||("destroy"===a&&this.remove(b,e),b&&a==="change:"+b.ha&&(delete this.u[b.wa(b.ha)],b.id!=m&&(this.u[b.id]=b)),this.a.apply(this,arguments))}});
K.W("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min toArray size first head take initial rest tail drop last without indexOf shuffle lastIndexOf isEmpty chain".split(" "),function(a){S.prototype[a]=function(){var b=B.call(arguments);b.unshift(this.d);return K[a].apply(K,b)}});
K.W(["groupBy","countBy","sortBy"],function(a){S.prototype[a]=function(b,d){return K[a](this.d,K.j(b)?b:function(a){return a.get(b)},d)}});var pa=C.oa=function(a){this.q=K.Ba("view");this.kb(a||{});this.lb();this.r.apply(this,arguments);this.Pa()},qa=/^(\S+)\s*(.*)$/,ra="model collection el id attributes className tagName events".split(" ");
K.extend(pa.prototype,N,{tagName:"div",g:function(a){return this.b.find(a)},r:function(){},m:function(){return this},remove:function(){this.b.remove();this.Qb();return this},Ya:function(a,b){this.b&&this.$a();this.b=a instanceof C.g?a:C.g(a);this.J=this.b[0];b!==n&&this.Pa();return this},Pa:function(a){if(!a&&!(a=K.result(this,"events")))return this;this.$a();for(var b in a){var d=a[b];K.j(d)||(d=this[a[b]]);if(d){var e=b.match(qa),c=e[1],e=e[2],d=K.bind(d,this),c=c+(".delegateEvents"+this.q);""===
e?this.b.D(c,d):this.b.D(c,e,d)}}return this},$a:function(){this.b.C(".delegateEvents"+this.q);return this},kb:function(a){this.options&&(a=K.extend({},K.result(this,"options"),a));K.extend(this,K.Xa(a,ra));this.options=a},lb:function(){if(this.J)this.Ya(K.result(this,"el"),n);else{var a=K.extend({},K.result(this,"attributes"));this.id&&(a.id=K.result(this,"id"));this.className&&(a["class"]=K.result(this,"className"));a=C.g("<"+K.result(this,"tagName")+">").gc(a);this.Ya(a,n)}}});
C.t=function(a,b,d){var e=sa[a];K.V(d||(d={}),{va:C.va,X:C.X});var c={type:e,dataType:"json"};d.url||(c.url=K.result(b,"url")||ga());if(d.data==m&&b&&("create"===a||"update"===a||"patch"===a))c.contentType="application/json",c.data=JSON.stringify(d.pb||b.toJSON(d));d.X&&(c.contentType="application/x-www-form-urlencoded",c.data=c.data?{k:c.data}:{});if(d.va&&("PUT"===e||"DELETE"===e||"PATCH"===e)){c.type="POST";d.X&&(c.data.dc=e);var g=d.qb;d.qb=function(a){a.setRequestHeader("X-HTTP-Method-Override",
e);if(g)return g.apply(this,arguments)}}"GET"!==c.type&&!d.X&&(c.ad=n);if("PATCH"===c.type&&window.ActiveXObject&&(!window.external||!window.external.Sc))c.Ub=function(){return new ActiveXObject("Microsoft.XMLHTTP")};a=d.Ub=C.La(K.extend(c,d));b.a("request",b,a,d);return a};var sa={create:"POST",update:"PUT",Ob:"PATCH","delete":"DELETE",cd:"GET"};C.La=function(){return C.g.La.apply(C.g,arguments)};
var ta=C.$b=function(a){a||(a={});a.K&&(this.K=a.K);this.hb();this.r.apply(this,arguments)},ua=/\((.*?)\)/g,va=/(\(\?)?:\w+/g,wa=/\*\w+/g,xa=/[\-{}\[\]+?.,\\\^$|#\s]/g;
K.extend(ta.prototype,N,{r:function(){},ca:function(a,b,d){K.Jc(a)||(a=this.nb(a));K.j(b)&&(d=b,b="");d||(d=this[b]);var e=this;C.history.ca(a,function(c){c=e.mb(a,c);d&&d.apply(e,c);e.a.apply(e,["route:"+b].concat(c));e.a("route",b,c);C.history.a("route",e,b,c)});return this},navigate:function(a,b){C.history.navigate(a,b);return this},hb:function(){if(this.K){this.K=K.result(this,"routes");for(var a,b=K.keys(this.K);(a=b.pop())!=m;)this.ca(a,this.K[a])}},nb:function(a){a=a.replace(xa,"\\$&").replace(ua,
"(?:$1)?").replace(va,function(a,d){return d?a:"([^/]+)"}).replace(wa,"(.*?)");return RegExp("^"+a+"$")},mb:function(a,b){var d=a.exec(b).slice(1);return K.map(d,function(a){return a?decodeURIComponent(a):m})}});var T=C.Xb=function(){this.Ra=[];K.rb(this,"checkUrl");"undefined"!==typeof window&&(this.location=window.location,this.history=window.history)},ya=/^[#\/]|\s+$/g,za=/^\/+|\/+$/g,Aa=/msie [\w.]+/,Ba=/\/$/;T.la=n;
K.extend(T.prototype,N,{Fb:50,Y:function(a){return(a=(a||this).location.href.match(/#(.*)$/))?a[1]:""},z:function(a,b){if(a==m)if(this.O||!this.G||b){a=this.location.pathname;var d=this.root.replace(Ba,"");a.indexOf(d)||(a=a.substr(d.length))}else a=this.Y();return a.replace(ya,"")},start:function(a){if(T.la)throw Error("Backbone.history has already been started");T.la=k;this.options=K.extend({},{root:"/"},this.options,a);this.root=this.options.root;this.G=this.options.xc!==n;this.Ka=!!this.options.pushState;
this.O=!(!this.options.pushState||!this.history||!this.history.pushState);a=this.z();var b=document.documentMode,b=Aa.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b);this.root=("/"+this.root+"/").replace(za,"/");b&&this.G&&(this.B=C.g('<iframe src="javascript:0" tabindex="-1" />').yc().fc("body")[0].contentWindow,this.navigate(a));this.O?C.g(window).D("popstate",this.S):this.G&&"onhashchange"in window&&!b?C.g(window).D("hashchange",this.S):this.G&&(this.jb=setInterval(this.S,this.Fb));this.p=
a;a=this.location;b=a.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this.G&&this.Ka&&!this.O&&!b)return this.p=this.z(m,k),this.location.replace(this.root+this.location.search+"#"+this.p),k;this.Ka&&(this.O&&b&&a.hash)&&(this.p=this.Y().replace(ya,""),this.history.replaceState({},document.title,this.root+this.p+a.search));if(!this.options.s)return this.ia()},stop:function(){C.g(window).C("popstate",this.S).C("hashchange",this.S);clearInterval(this.jb);T.la=n},ca:function(a,b){this.Ra.unshift({ca:a,
o:b})},S:function(){var a=this.z();a===this.p&&this.B&&(a=this.z(this.Y(this.B)));if(a===this.p)return n;this.B&&this.navigate(a);this.ia()||this.ia(this.Y())},ia:function(a){var b=this.p=this.z(a);return K.ob(this.Ra,function(a){if(a.ca.test(b))return a.o(b),k})},navigate:function(a,b){if(!T.la)return n;if(!b||b===k)b={a:b};a=this.z(a||"");if(this.p!==a){this.p=a;var d=this.root+a;if(this.O)this.history[b.replace?"replaceState":"pushState"]({},document.title,d);else if(this.G)this.Ja(this.location,
a,b.replace),this.B&&a!==this.z(this.Y(this.B))&&(b.replace||this.B.document.open().close(),this.Ja(this.B.location,a,b.replace));else return this.location.assign(d);b.a&&this.ia(a)}},Ja:function(a,b,d){d?(d=a.href.replace(/(javascript:|#).*$/,""),a.replace(d+"#"+b)):a.hash="#"+b}});C.history=new T;
O.extend=S.extend=ta.extend=pa.extend=T.extend=function(a,b){function d(){this.constructor=c}var e=this,c;c=a&&K.c(a,"constructor")?a.constructor:function(){return e.apply(this,arguments)};K.extend(c,e,b);d.prototype=e.prototype;c.prototype=new d;a&&K.extend(c.prototype,a);c.cc=e.prototype;return c};function ga(){throw Error('A "url" property or function must be specified');}function P(a,b){var d=b.error;b.error=function(e){d&&d(a,e,b);a.a("error",a,e,b)}}window.ac={Zb:{},e:{},h:{}};$(function(){return Smoothie.e.M.sb()});
Smoothie.h.da={ja:n,Sb:m,play:function(){this.ja=k;return Smoothie.e.M.m()},pause:function(){this.ja=n;return Smoothie.e.M.m()}};
Smoothie.h.N={za:[{ua:"https://i4.sndcdn.com/artworks-000034170195-wb7buo-t500x500.jpg",title:"Mammals - Move Slower Feat. Flash Forest (FREE D/L in description)",url:"http://www.google.com",bb:"Flash Forest",cb:"http://www.google.com"},{ua:"https://i4.sndcdn.com/artworks-000037931943-gkafnb-t500x500.jpg",title:"Sir Sly - Gold",url:"http://www.google.com",bb:"Sir Sly",cb:"http://www.google.com"},{ua:"https://i1.sndcdn.com/artworks-000033642979-p06mxq-t500x500.jpg",title:"The Temper Trap - Sweet Disposition (RAC Mix)",
url:"http://www.google.com",bb:"RAC",cb:"http://www.google.com"}],index:1,next:function(){this.index+=1;return Smoothie.e.M.Lb()},wa:function(){this.index-=1;return Smoothie.e.M.Kb()},Cb:function(){return this.za[this.index-1]},Ab:function(){return this.za[this.index]},Bb:function(){return this.za[this.index+1]}};
Smoothie.e.na=Backbone.oa.extend({L:'    <div class="overlay"></div>    <a class="artist" href="<%= track.uploader_url %>"><%= track.uploader_name %></a>    <br>    <a class="title" href="<%= track.url %>"><%= track.title %></a>  ',r:function(){return console.log("Initializing TrackView")},m:function(){this.k&&(this.b.Db(_.L(this.L,{Sb:this.k})),this.b.lc("background-image","url("+this.k.ua+")"));return this}});
Smoothie.e.gb=Backbone.oa.extend({L:'    <a class="control pull-left" id="prev"><i class="icon-backward"></i></a>    <% if (playing) { %>      <a class="control" id="pause"><i class="icon-pause"></i></a>    <% } else { %>      <a class="control" id="play"><i class="icon-play"></i></a>    <% } %>    <a class="control pull-right" id="next"><i class="icon-forward"></i></a>  ',rc:{"click #play":"onPlay","click #pause":"onPause","click #next":"onNext","click #prev":"onPrevious"},Vc:function(){return Smoothie.h.da.play()},
Nb:function(){return Smoothie.h.da.pause()},Nb:function(){return Smoothie.h.da.pause()},Wc:function(){return Smoothie.h.N.wa()},Uc:function(){return Smoothie.h.N.next()},m:function(){return this.b.Db(_.L(this.L,{ja:Smoothie.h.da.ja}))}});var Ca;
Ca=Backbone.oa.extend({J:"#current-track",Aa:"#tracks",sb:function(){this.Na();this.tb();this.Ma();this.controls=new Smoothie.e.gb({J:"#controls"});return this.m()},Lb:function(){this.ba.Za().remove();this.ba=this.w;this.ba.b.xa("current").ta("previous");this.w=this.aa;this.w.b.xa("next").ta("current");return this.Ma()},Kb:function(){this.aa.Za().remove();this.aa=this.w;this.aa.b.xa("current").ta("next");this.w=this.ba;this.w.b.xa("previous").ta("current");return this.Na()},Na:function(){this.ba=
new Smoothie.e.na({className:"track previous",k:Smoothie.h.N.Cb()});return this.b.find(this.Aa).append(this.ba.m().J)},tb:function(){this.w=new Smoothie.e.na({className:"track current",k:Smoothie.h.N.Ab()});return this.b.find(this.Aa).append(this.w.m().J)},Ma:function(){this.aa=new Smoothie.e.na({className:"track next",k:Smoothie.h.N.Bb()});return this.b.find(this.Aa).append(this.aa.m().J)},m:function(){return this.controls.m()}});Smoothie.e.M=new Ca;