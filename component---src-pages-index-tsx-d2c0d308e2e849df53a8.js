(self.webpackChunkdamian_ertel_portfolio=self.webpackChunkdamian_ertel_portfolio||[]).push([[691],{4944:function(e,t,n){"use strict";var r=n(2109),i=n(6790),o=n(7908),a=n(6244),l=n(9303),c=n(5417);r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=o(this),n=a(t),r=c(t,0);return r.length=i(r,t,t,n,0,void 0===e?1:l(e)),r}})},3792:function(e,t,n){n(1223)("flat")},7290:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return Z},default:function(){return K}});var r=n(7294),i=n(3494),o={borderRadius:"4px",palette:{common:{black:"#000",white:"#fff"},primary:{main:"#6B0EE1",dark:"#7205F7",light:"#8840e3",contrastText:"#fff"},secondary:{main:"#FFCD00",dark:"#F2C41A",light:"#F2DD9A",contrastText:"#fff"}}},a=(0,i.createGlobalStyle)(['*,*::after,*::before{padding:0;margin:0;box-sizing:border-box;font-family:"Roboto","Helvetica","Arial",sans-serif;}html{font-size:62.5%;scroll-snap-type:y mandatory;scroll-behavior:smooth;}body{margin:0;padding:0;&::-webkit-scrollbar{display:none;}}']),l=function(e){var t=e.children;return r.createElement(i.ThemeProvider,{theme:o},r.createElement(a,null),t)};n(4944),n(3792);function c(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function u(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function f(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}function p(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return c(this,void 0,void 0,(function(){var r,i,o,a,l,c;return s(this,(function(s){switch(s.label){case 0:s.trys.push([0,12,13,14]),r=u(n),i=r.next(),s.label=1;case 1:if(i.done)return[3,11];switch(typeof(o=i.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,m(e,o,t)];case 3:return s.sent(),[3,10];case 4:return[4,h(o)];case 5:return s.sent(),[3,10];case 6:return[4,o.apply(void 0,f([e,t],d(n),!1))];case 7:return s.sent(),[3,10];case 8:return[4,o];case 9:s.sent(),s.label=10;case 10:return i=r.next(),[3,1];case 11:return[3,14];case 12:return a=s.sent(),l={error:a},[3,14];case 13:try{i&&!i.done&&(c=r.return)&&c.call(r)}finally{if(l)throw l.error}return[7];case 14:return[2]}}))}))}function m(e,t,n){return c(this,void 0,void 0,(function(){var r;return s(this,(function(i){switch(i.label){case 0:return r=function(e,t){var n=d(t).slice(0);return f(f([],d(e),!1),[NaN],!1).findIndex((function(e,t){return n[t]!==e}))}(e.textContent,t),[4,y(e,f(f([],d(g(e.textContent,r)),!1),d(v(t,r)),!1),n)];case 1:return i.sent(),[2]}}))}))}function h(e){return c(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function y(e,t,n){return c(this,void 0,void 0,(function(){var r,i,o,a,l;return s(this,(function(c){switch(c.label){case 0:c.trys.push([0,5,6,7]),r=u(function(e){var t,n,r,i,o,a,l;return s(this,(function(c){switch(c.label){case 0:t=function(e){return s(this,(function(t){switch(t.label){case 0:return[4,function(t){return requestAnimationFrame((function(){return t.textContent=e}))}];case 1:return t.sent(),[2]}}))},c.label=1;case 1:c.trys.push([1,6,7,8]),n=u(e),r=n.next(),c.label=2;case 2:return r.done?[3,5]:(i=r.value,[5,t(i)]);case 3:c.sent(),c.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return o=c.sent(),a={error:o},[3,8];case 7:try{r&&!r.done&&(l=n.return)&&l.call(n)}finally{if(a)throw a.error}return[7];case 8:return[2]}}))}(t)),i=r.next(),c.label=1;case 1:return i.done?[3,4]:((0,i.value)(e),[4,h(n+n*(Math.random()-.5))]);case 2:c.sent(),c.label=3;case 3:return i=r.next(),[3,1];case 4:return[3,7];case 5:return o=c.sent(),a={error:o},[3,7];case 6:try{i&&!i.done&&(l=r.return)&&l.call(r)}finally{if(a)throw a.error}return[7];case 7:return[2]}}))}))}function v(e,t,n){var r=d(e).slice(0);return void 0===t&&(t=0),void 0===n&&(n=r.length),s(this,(function(e){switch(e.label){case 0:return t<n?[4,r.slice(0,++t).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}function g(e,t,n){var r=d(e).slice(0);return void 0===t&&(t=0),void 0===n&&(n=r.length),s(this,(function(e){switch(e.label){case 0:return n>t?[4,r.slice(0,--n).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".index-module_type__1pV_J::after {\n  content: '|';\n  animation: index-module_cursor__1t4b- 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__1t4b- {\n  50% {\n    opacity: 0;\n  }\n}\n");var x=(0,r.memo)((function(e){var t=e.sequence,n=e.repeat,i=e.className,o=e.speed,a=void 0===o?40:o,l=e.wrapper,c=void 0===l?"div":l,s=e.cursor,u=void 0===s||s,m=e.style;a=Math.abs(a-100);var h,y,v,g,x,b,w=(0,r.useRef)(null),k="index-module_type__1pV_J";h=i&&i.length>0?u?"".concat(k," ").concat(i):i:u?k:"",y=(0,r.useRef)((function(){return n===1/0?p.apply(void 0,f(f([w.current,a],d(t),!1),[p],!1)):"number"==typeof n?p.apply(void 0,f([w.current,a],d(Array(1+n).fill(t).flat()),!1)):p.apply(void 0,f([w.current,a],d(t),!1)),function(){w.current}})),v=(0,r.useRef)(),g=(0,r.useRef)(!1),x=(0,r.useRef)(!1),b=d((0,r.useState)(0),2)[1],g.current&&(x.current=!0),(0,r.useEffect)((function(){return g.current||(v.current=y.current(),g.current=!0),b((function(e){return e+1})),function(){x.current&&v.current&&v.current()}}),[]);var E=c;return r.createElement(E,{style:m,className:h,ref:w})}),(function(e,t){return!0})),b=i.default.section.withConfig({displayName:"sectionstyled__SectionStyled",componentId:"sc-1adp1ue-0"})(["width:100%;height:100vh;scroll-snap-align:center;font-size:2rem;background:",";color:",";font-weight:bold;"],(function(e){return e.theme.palette.secondary.main}),(function(e){return e.theme.palette.primary.contrastText})),w=(0,i.default)(b).withConfig({displayName:"Mainstyled__StyledSection",componentId:"sc-n73zhs-0"})(["background-color:",";"],(function(e){return e.theme.palette.primary.main})),k=i.default.div.withConfig({displayName:"Mainstyled__Container",componentId:"sc-n73zhs-1"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%;"]),E=i.default.div.withConfig({displayName:"Mainstyled__ButtonContainer",componentId:"sc-n73zhs-2"})(["min-width:338px;margin-top:110px;display:flex;justify-content:space-between;@media screen and (max-width:600px){margin-top:40px;min-width:auto;flex-direction:column;justify-content:space-between;align-items:center;min-height:120px;}"]),C=i.default.article.withConfig({displayName:"Mainstyled__StyledMessageContainer",componentId:"sc-n73zhs-3"})(["display:flex;flex-direction:column;min-width:360px;font-size:4rem;text-shadow:0 4px 4px rgba(0,0,0,0.25);@media screen and (max-width:600px){min-width:255px;max-width:255px;}"]),S=(0,i.default)(x).withConfig({displayName:"Mainstyled__StyledTypeAnimation",componentId:"sc-n73zhs-4"})(["font-size:",";@media screen and (max-width:600px){font-size:",";}"],(function(e){return e.$main?"4rem":"3rem"}),(function(e){return e.$main?"3rem":"2rem"})),A=function(){return r.createElement(C,null,r.createElement("div",{style:{display:"flex"}},r.createElement(S,{sequence:["",200,"Hello, i'm"],cursor:!1,$main:!0})," ",r.createElement(S,{sequence:["",800,"Damian"],cursor:!1,style:{color:"#FFCD00"},$main:!0})),r.createElement("div",{style:{display:"flex"}},r.createElement(S,{sequence:["",1500,"Frontend",500,"Backend",500,"Fullstack"],wrapper:"div",cursor:!1,$main:!1})," ",r.createElement(S,{sequence:["",5500,"Web Developer"],style:{color:"#FFCD00"},cursor:!1,$main:!1})))},O=i.default.button.withConfig({displayName:"buttonsstyled__BaseButton",componentId:"sc-1ij4dao-0"})(["width:140px;height:40px;font-size:2rem;border:none;cursor:pointer;box-shadow:4px 4px 4px rgba(0,0,0,0.25);transition:background-color 0.2s ease-in-out;font-weight:bold;text-decoration:none;display:flex;justify-content:center;align-items:center;",";"],(function(e){var t=e.variant,n=e.theme;return"secondary"===t?"\n                background-color: "+n.palette.secondary.main+";\n                color: "+n.palette.primary.main+";\n                &:hover {\n                    background-color: "+n.palette.secondary.light+";\n                };\n                ":"\n                background-color: "+n.palette.primary.dark+";\n                color: "+n.palette.primary.contrastText+";\n                &:hover {\n                    background-color: "+n.palette.primary.light+";\n                }\n            "})),z=O,_=function(){return r.createElement(w,{id:"home"},r.createElement(k,null,r.createElement(A,null),r.createElement(E,null,r.createElement(z,{as:"a",href:"#skills"},"About me"),r.createElement(z,{as:"a",href:"#contact",variant:"secondary"},"Contact me"))))},M=function(){return r.createElement(w,{id:"skills"},r.createElement(k,null,r.createElement("p",null,"SKILLS")))},H=function(){return r.createElement(w,{id:"experience"},r.createElement(k,null,r.createElement("p",null,"EXPERIENCE")))},P=function(){return r.createElement(w,{id:"contact"},r.createElement(k,null,r.createElement("p",null,"CONTACT")))},T=(0,r.createContext)(null),V=n(434),j=n.n(V),R=n(8416),I=n.n(R),N=n(215),L=n.n(N);var B=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,D=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return B.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){return Object.keys(e).reduce((function(t,n){return D(n)&&(t[n]=e[n]),t}),{})}var U=r.forwardRef((function(e,t){var n=e.children,i=e.iconAttrs,o=(e.iconVerticalAlign,e.iconViewBox),a=e.size,l=e.title,c=L()(e,["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"]),s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){I()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({viewBox:o,height:void 0!==e.height?e.height:a,width:void 0!==e.width?e.width:a,"aria-hidden":null==l?"true":void 0,focusable:"false",role:null!=l?"img":void 0},i),u=q(c);return r.createElement("svg",j()({},s,u,{ref:t}),l&&r.createElement("title",{key:"icon-title"},l),n)})),W=(0,i.default)(U).withConfig({displayName:"StyledIconBase",componentId:"ea9ulj-0"})(["display:inline-block;vertical-align:",";overflow:hidden;"],(function(e){return e.iconVerticalAlign})),X=r.forwardRef((function(e,t){return r.createElement(W,j()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),r.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.createElement("path",{d:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"}))}));X.displayName="Home";var $=r.forwardRef((function(e,t){return r.createElement(W,j()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),r.createElement("g",{fill:"none"},r.createElement("path",{d:"M0 0h24v24H0V0z"}),r.createElement("path",{d:"M0 0h24v24H0V0z",opacity:.87})),r.createElement("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}))}));$.displayName="List";var Y=r.forwardRef((function(e,t){return r.createElement(W,j()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),r.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.createElement("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}))}));Y.displayName="Work";var G=r.forwardRef((function(e,t){return r.createElement(W,j()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),r.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.createElement("path",{d:"M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 00-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1z"}))}));G.displayName="Phone";var J=[{to:"#home",text:"Home",icon:r.createElement(X,null),scrollIndex:0},{to:"#skills",text:"Skills",icon:r.createElement($,null),scrollIndex:1},{to:"#experience",text:"Experience",icon:r.createElement(Y,null),scrollIndex:2},{to:"#contact",text:"Contact",icon:r.createElement(G,null),scrollIndex:3}],K=function(e){var t=e.location;return(0,r.useEffect)((function(){var e=function(){var e,t=window.scrollY/window.innerHeight;Number.isInteger(t)&&(window.location.hash=null===(e=J[t])||void 0===e?void 0:e.to)};return window.addEventListener("scroll",e,{passive:!0}),function(){window.removeEventListener("scroll",e)}}),[]),r.createElement(T.Provider,{value:t},r.createElement(l,null,r.createElement(_,null),r.createElement(M,null),r.createElement(H,null),r.createElement(P,null)))},Z=function(){return r.createElement("title",null,"Portfolio")}},8416:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},215:function(e,t,n){var r=n(7071);e.exports=function(e,t){if(null==e)return{};var n,i,o=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d2c0d308e2e849df53a8.js.map