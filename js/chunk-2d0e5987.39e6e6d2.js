(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5987"],{"94c9":function(t,e,r){"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
function n(t,e,r){var n=new o;return n.shimCssText(t,e,e+"-h",e+"-s",r)}r.r(e),r.d(e,"ShadowCss",function(){return o}),r.d(e,"scopeCss",function(){return n});var o=function(){function t(){this.strictStyling=!0}return t.prototype.shimCssText=function(t,e,r,n,o){void 0===r&&(r=""),void 0===n&&(n=""),void 0===o&&(o=!1);var c=R(t);t=w(t);var s=[];if(o){var i=function(t){var e="/*!@___"+s.length+"___*/",r="/*!@"+t.selector+"*/";return s.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=j(t,function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=j(t.content,i),t):t})}var p=this._scopeCssText(t,e,r,n,o);return t=[p].concat(c).join("\n"),o&&s.forEach(function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)}),t},t.prototype._scopeCssText=function(t,e,r,n,o){return t=this._insertPolyfillHostInCssText(t),t=this._convertColonHost(t),t=this._convertColonHostContext(t),t=this._convertColonSlotted(t,n),t=this._convertShadowDOMSelectors(t),e&&(t=this._scopeSelectors(t,e,r,n,o)),t=t.replace(/-shadowcsshost-no-combinator/g,"."+r),t=t.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),t.trim()},t.prototype._convertColonHost=function(t){return this._convertColonRule(t,a,this._colonHostPartReplacer)},t.prototype._convertColonSlotted=function(t,e){var r=h;return t.replace(r,function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t[2]){var n=t[2].trim(),o=t[3],c="."+e+" > "+n+o;return c}return f+t[3]})},t.prototype._convertColonHostContext=function(t){return this._convertColonRule(t,u,this._colonHostContextPartReplacer)},t.prototype._convertColonRule=function(t,e,r){return t.replace(e,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var n=t[2].split(","),o=[],c=0;c<n.length;c++){var s=n[c].trim();if(!s)break;o.push(r(f,s,t[3]))}return o.join(",")}return f+t[3]})},t.prototype._colonHostContextPartReplacer=function(t,e,r){return e.indexOf(s)>-1?this._colonHostPartReplacer(t,e,r):t+e+r+", "+e+" "+t+r},t.prototype._colonHostPartReplacer=function(t,e,r){return t+e.replace(s,"")+r},t.prototype._convertShadowDOMSelectors=function(t){return _.reduce(function(t,e){return t.replace(e," ")},t)},t.prototype._scopeSelectors=function(t,e,r,n,o){var c=this;return j(t,function(t){var s=t.selector,i=t.content;return"@"!==t.selector[0]?s=c._scopeSelector(t.selector,e,r,n,c.strictStyling):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(i=c._scopeSelectors(t.content,e,r,n,o)),s=s.replace(/\s{2,}/g," ").trim(),new P(s,i)})},t.prototype._scopeSelector=function(t,e,r,n,o){var c=this;return t.split(",").map(function(t){return n&&t.indexOf("."+n)>-1?t.trim():c._selectorNeedsScoping(t,e)?o?c._applyStrictSelectorScope(t,e,r).trim():c._applySelectorScope(t,e,r).trim():t.trim()}).join(", ")},t.prototype._selectorNeedsScoping=function(t,e){var r=this._makeScopeMatcher(e);return!r.test(t)},t.prototype._makeScopeMatcher=function(t){var e=/\[/g,r=/\]/g;return t=t.replace(e,"\\[").replace(r,"\\]"),new RegExp("^("+t+")"+d,"m")},t.prototype._applySelectorScope=function(t,e,r){return this._applySimpleSelectorScope(t,e,r)},t.prototype._applySimpleSelectorScope=function(t,e,r){if(g.lastIndex=0,g.test(t)){var n=this.strictStyling?"."+r:e;return t.replace(v,function(t,e){return e.replace(/([^:]*)(:*)(.*)/,function(t,e,r,o){return e+n+r+o})}).replace(g,n+" ")}return e+" "+t},t.prototype._applyStrictSelectorScope=function(t,e,r){var n=this,o=/\[is=([^\]]*)\]/g;e=e.replace(o,function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]});var s="."+e,i=function(t){var o=t.trim();if(!o)return"";if(t.indexOf(f)>-1)o=n._applySimpleSelectorScope(t,e,r);else{var c=t.replace(g,"");if(c.length>0){var i=c.match(/([^:]*)(:*)(.*)/);i&&(o=i[1]+s+i[2]+i[3])}}return o},p=new c(t);t=p.content();var l,a="",u=0,h=/( |>|\+|~(?!=))\s*/g,v=t.indexOf(f)>-1,_=!v;while(null!==(l=h.exec(t))){var d=l[1],S=t.slice(u,l.index).trim();_=_||S.indexOf(f)>-1;var m=_?i(S):S;a+=m+" "+d+" ",u=h.lastIndex}var x=t.substring(u);return _=_||x.indexOf(f)>-1,a+=_?i(x):x,p.restore(a)},t.prototype._insertPolyfillHostInCssText=function(t){return t=t.replace(x,p).replace(S,s).replace(m,i),t},t}(),c=function(){function t(t){var e=this;this.placeholders=[],this.index=0,t=t.replace(/(\[[^\]]*\])/g,function(t,r){var n="__ph-"+e.index+"__";return e.placeholders.push(r),e.index++,n}),this._content=t.replace(/(:nth-[-\w]+)(\([^)]+\))/g,function(t,r,n){var o="__ph-"+e.index+"__";return e.placeholders.push(n),e.index++,r+o})}return t.prototype.restore=function(t){var e=this;return t.replace(/__ph-(\d+)__/g,function(t,r){return e.placeholders[+r]})},t.prototype.content=function(){return this._content},t}(),s="-shadowcsshost",i="-shadowcssslotted",p="-shadowcsscontext",l=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=new RegExp("("+s+l,"gim"),u=new RegExp("("+p+l,"gim"),h=new RegExp("("+i+l,"gim"),f=s+"-no-combinator",v=/-shadowcsshost-no-combinator([^\s]*)/,_=[/::shadow/g,/::content/g],d="([>\\s~+[.,{:][\\s\\S]*)?$",g=/-shadowcsshost/gim,S=/:host/gim,m=/::slotted/gim,x=/:host-context/gim,y=/\/\*\s*[\s\S]*?\*\//g;function w(t){return t.replace(y,"")}var C=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;function R(t){return t.match(C)||[]}var H=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,O="{",W="}",k="%BLOCK%",P=function(){function t(t,e){this.selector=t,this.content=e}return t}();function j(t,e){var r=E(t),n=0;return r.escapedString.replace(H,function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var c=t[2],s="",i=t[4],p="";i&&i.startsWith("{"+k)&&(s=r.blocks[n++],i=i.substring(k.length+1),p="{");var l=e(new P(c,s));return""+t[1]+l.selector+t[3]+p+l.content+i})}var T=function(){function t(t,e){this.escapedString=t,this.blocks=e}return t}();function E(t){for(var e=t.split(b),r=[],n=[],o=0,c=[],s=0;s<e.length;s++){var i=e[s];i===W&&o--,o>0?c.push(i):(c.length>0&&(n.push(c.join("")),r.push(k),c=[]),r.push(i)),i===O&&o++}return c.length>0&&(n.push(c.join("")),r.push(k)),new T(r.join(""),n)}}}]);
//# sourceMappingURL=chunk-2d0e5987.39e6e6d2.js.map