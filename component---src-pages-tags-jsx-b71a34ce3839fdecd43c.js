(self.webpackChunkmikkelrask_github_io=self.webpackChunkmikkelrask_github_io||[]).push([[81],{7091:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(e);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(t){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(e)}r["%C2"]="�";for(var c=Object.keys(r),u=0;u<c.length;u++){var s=c[u];e=e.replace(new RegExp(s,"g"),r[s])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],c=e[i];(o?-1!==t.indexOf(i):t(i,c,e))&&(r[i]=c)}return r}},2203:function(e,t,r){"use strict";var n=r(8416),o=r(7424),a=r(861);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=r(8936),s=r(7091),l=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(e,t){return t.encode?t.strict?u(e):encodeURIComponent(e):e}function g(e,t){return t.decode?s(e):e}function y(e){return Array.isArray(e)?e.sort():"object"==typeof e?y(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function v(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function x(e){var t=(e=v(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function h(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function b(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return function(e,r,n){t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&g(r,e).includes(e.arrayFormatSeparator);r=a?g(r,e):r;var i=o||a?r.split(e.arrayFormatSeparator).map((function(t){return g(t,e)})):null===r?r:g(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return g(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a}else n[t]=r?g(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var a,c=i(e.split("&"));try{for(c.s();!(a=c.n()).done;){var u=a.value;if(""!==u){var s=l(t.decode?u.replace(/\+/g," "):u,"="),f=o(s,2),p=f[0],m=f[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?m:g(m,t),r(g(p,t),m,n)}}}catch(_){c.e(_)}finally{c.f()}for(var v=0,x=Object.keys(n);v<x.length;v++){var b=x[v],k=n[b];if("object"==typeof k&&null!==k)for(var E=0,w=Object.keys(k);E<w.length;E++){var j=w[E];k[j]=h(k[j],t)}else n[b]=h(k,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=y(r):e[t]=r,e}),Object.create(null))}t.extract=x,t.parse=b,t.stringify=function(e,t){if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(t,e),"[",o,"]"].join("")]:[[m(t,e),"[",m(o,e),"]=",m(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(t,e),"[]"].join("")]:[[m(t,e),"[]=",m(n,e)].join("")])}};case"colon-list-separator":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(t,e),":list="].join("")]:[[m(t,e),":list=",m(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(r,e),t,m(o,e)].join("")]:[[n,m(o,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[m(t,e)]:[[m(t,e),"=",m(n,e)].join("")])}}}}(t),o={},i=0,c=Object.keys(e);i<c.length;i++){var u=c[i];r(u)||(o[u]=e[u])}var s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map((function(r){var o=e[r];return void 0===o?"":null===o?m(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?m(r,t)+"[]":o.reduce(n(r),[]).join("&"):m(r,t)+"="+m(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=l(e,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:b(x(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:g(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var o=v(e.url).split("?")[0]||"",a=t.extract(e.url),i=t.parse(a,{sort:!1}),c=Object.assign(i,e.query),u=t.stringify(c,r);u&&(u="?".concat(u));var s=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s="#".concat(r[p]?m(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(o).concat(u).concat(s)},t.pick=function(e,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=t.parseUrl(e,o),i=a.url,c=a.query,u=a.fragmentIdentifier;return t.stringifyUrl({url:i,query:f(c,r),fragmentIdentifier:u},o)},t.exclude=function(e,r,n){var o=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,o,n)}},4734:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},4246:function(e,t,r){"use strict";var n=r(3493),o=r.n(n),a=r(7294),i=r(3494),c=r(1597),u=r(2213),s=r(729),l=r(184),f=i.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-tqqimh-0"})(["@media (max-width:768px){padding:0 10px;}"]),p=i.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-tqqimh-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),d=i.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-tqqimh-2"})(["margin-bottom:16px;font-size:14.4px;color:",";"],(function(e){return e.theme.colors.tertiaryText})),m=i.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-tqqimh-3"})(["margin-bottom:32px;line-height:1.7;font-size:16px;color:",";word-break:none;"],(function(e){return e.theme.colors.secondaryText}));t.Z=function(e){var t=e.postList,r=(0,a.useState)(10),n=r[0],i=r[1],g=o()((function(){document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&n<t.length&&setTimeout((function(){return i(n+10)}),300)}),250);return(0,a.useEffect)((function(){return window.addEventListener("scroll",g),function(){window.removeEventListener("scroll",g)}}),[n,t]),(0,a.useEffect)((function(){i(10)}),[t]),a.createElement(f,null,t.slice(0,n).map((function(e,r){var o=e.frontmatter,i=o.title,f=o.date,g=o.tags,y=e.excerpt,v=e.fields.slug;return a.createElement(a.Fragment,null,a.createElement(p,null,a.createElement(u.Z,{size:"bg"},a.createElement(c.Link,{to:v},i)),a.createElement(d,null,f),a.createElement(m,null,y),a.createElement(l.Z,{tagList:g})),n-1!==r&&t.length-1!==r&&a.createElement(s.Z,{mt:"48px",mb:"32px"}))})))}},184:function(e,t,r){"use strict";var n=r(7294),o=r(3494),a=r(1597),i=o.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-1kn5zbe-0"})(["margin-bottom:16px;word-break:none;"]),c=o.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-1kn5zbe-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:8px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;&:hover{background-color:",";}"],(function(e){return e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground}),(function(e){return e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText}),(function(e){return e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground})),u=function(e){return e.replace(/\s+/g,"-")};t.Z=function(e){var t=e.tagList,r=e.count,o=e.selected;return t?r?n.createElement(i,null,t.map((function(e,t){return n.createElement(a.Link,{key:JSON.stringify({tag:e,i:t}),to:o===e.fieldValue?"/tags":"/tags?q="+e.fieldValue},n.createElement(c,{selected:e.fieldValue===o},u(e.fieldValue)," (",e.totalCount,")"))}))):n.createElement(i,null,t.map((function(e,t){return n.createElement(a.Link,{key:JSON.stringify({tag:e,i:t}),to:"/tags?q="+e},n.createElement(c,null,u(e)))}))):null}},8643:function(e,t,r){"use strict";r.r(t);var n=r(9734),o=r.n(n),a=r(7294),i=r(3494),c=r(3966),u=r(3105),s=r.n(u),l=r(1597),f=r(2203),p=r(2225),d=r(2213),m=r(184),g=r(4246),y=r(1093),v=r(9349),x=i.default.div.withConfig({displayName:"tags__TagListWrapper",componentId:"sc-84evz8-0"})(["margin-top:20px;@media (max-width:768px){padding:0 15px;}"]);t.default=function(e){var t=e.data,r=o()(t.allMarkdownRemark.group,["totalCount"]).reverse(),n=t.allMarkdownRemark.nodes,i=(0,a.useState)(),u=i[0],h=i[1],b=(0,a.useState)([]),k=b[0],E=b[1],w=null;return"undefined"!=typeof document&&(w=document.location.search),(0,a.useEffect)((function(){E(u?s()(n,(function(e){return-1!==e.frontmatter.tags.indexOf(u)})):n)}),[u]),(0,a.useEffect)((function(){var e=f.parse(w).q;h(e)}),[w]),a.createElement(p.Z,null,a.createElement(c.Z,{title:v.title,description:v.description,url:v.siteUrl}),a.createElement(x,null,u?a.createElement(d.Z,{size:"sm"},"There are ",k.length," post",k.length>1&&"s"," that match #",u,"."):a.createElement(d.Z,{size:"sm"},"There are ",r.length," tag",r.length>1&&"s","."),a.createElement(m.Z,{count:!0,tagList:r,selected:u,onClick:function(e){console.log(e,u),e===u?((0,l.navigate)("/tags"),alert("zz")):h(e)}})),a.createElement(y.Z,{size:32}),a.createElement(g.Z,{postList:k}))}},760:function(e,t,r){var n=r(9881);e.exports=function(e,t){var r=[];return n(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}},3105:function(e,t,r){var n=r(4963),o=r(760),a=r(7206),i=r(1469);e.exports=function(e,t){return(i(e)?n:o)(e,a(t,3))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},5372:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8872:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},2218:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7424:function(e,t,r){var n=r(5372),o=r(8872),a=r(6116),i=r(2218);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),o=r(9498),a=r(6116),i=r(2281);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var n=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-b71a34ce3839fdecd43c.js.map