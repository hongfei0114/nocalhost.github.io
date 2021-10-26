"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[7426],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,v=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(52263),a=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,l=void 0!==i&&i,c=o.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+d:d}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",c="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,a=e.block,u=e.defaultValue,d=e.values,s=e.groupId,p=e.className,m=r.Children.toArray(e.children),v=null!=d?d:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,h=o(),k=h.tabGroupChoices,g=h.setTabGroupChoices,N=(0,r.useState)(f),b=N[0],w=N[1],y=[];if(null!=s){var D=k[s];null!=D&&D!==b&&v.some((function(e){return e.value===D}))&&w(D)}var C=function(e){var t=e.currentTarget,n=y.indexOf(t),r=v[n].value;w(r),null!=s&&(g(s,r),setTimeout((function(){var e,n,r,a,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case"ArrowLeft":var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},p)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:M,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},86421:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i=(n(55064),n(58215),n(44996),["components"]),l={title:"DevMode(Duplicate)"},c=void 0,u={unversionedId:"guides/develop-service-dup",id:"guides/develop-service-dup",isDocsHomePage:!1,title:"DevMode(Duplicate)",description:"Why Duplicate DevMode",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/develop-service-dup.md",sourceDirName:"guides",slug:"/guides/develop-service-dup",permalink:"/zh-CN/docs/guides/develop-service-dup",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",frontMatter:{title:"DevMode(Duplicate)"}},d=[{value:"Why Duplicate DevMode",id:"why-duplicate-devmode",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"How to use",id:"how-to-use",children:[]}],s={toc:d};function p(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"why-duplicate-devmode"},"Why Duplicate DevMode"),(0,o.kt)("p",null,"Nocalhost \u9ed8\u8ba4\u7684\u5f00\u53d1\u6a21\u5f0f\u662f\u66ff\u6362\u955c\u50cf(",(0,o.kt)("inlineCode",{parentName:"p"},"Replace DevMode"),")\u7684\u65b9\u5f0f\uff0c\u5f53\u5bf9\u67d0\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\u8fdb\u884c\u5f00\u53d1\u7684\u65f6\u5019\uff0c\u4f1a\u628a\u539f\u6709\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7684\u5bb9\u5668\u955c\u50cf\u66ff\u6362\u6210\u5f00\u53d1\u955c\u50cf\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a ",(0,o.kt)("img",{alt:"\u56fe\u7247",src:n(22724).Z})),(0,o.kt)("p",null,"\u4f7f\u7528\u76f4\u63a5\u66ff\u6362\u955c\u50cf\u7684\u65b9\u5f0f\u53ef\u4ee5\u5f88\u597d\u5730\u4fdd\u6301\u539f\u6709\u7684\u670d\u52a1\u95f4\u8c03\u7528\u5173\u7cfb\uff0c\u8ba9\u96c6\u7fa4\u4e2d\u5176\u5b83\u670d\u52a1\u7684\u6d41\u91cf\u6253\u5230\u6b63\u5728\u5f00\u53d1\u7684\u670d\u52a1\u4e0a\uff0c\u4f46\u662f\u4e5f\u5b58\u5728\u4ee5\u4e0b\u4e0d\u8db3: ",(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"p"},"1.")," \u5bb9\u6613\u7834\u574f\u539f\u6709\u7684\u73af\u5883\uff0c\u53ef\u80fd\u4f1a\u56e0\u4e3a\u5f00\u53d1\u4e2d\u7684\u670d\u52a1\u51fa\u73b0\u95ee\u9898\u800c\u5bfc\u81f4\u6574\u4e2a\u73af\u5883\u51fa\u95ee\u9898 ",(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"p"},"2.")," \u5bb9\u6613\u5f71\u54cd\u5176\u5b83\u56e2\u961f\u6210\u5458\u5bf9\u73af\u5883\u7684\u6b63\u5e38\u4f7f\u7528\uff0c\u5176\u5b83\u56e2\u961f\u6210\u5458\u53ef\u80fd\u53ea\u60f3\u8bbf\u95ee\u6b63\u5e38\u7684\u7684\u73af\u5883\uff0c\u800c\u4e0d\u662f\u5904\u4e8e\u5f00\u53d1\u4e2d\u7684\u73af\u5883 ",(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"p"},"3.")," \u591a\u4e2a\u56e2\u961f\u6210\u5458\u65e0\u6cd5\u5bf9\u540c\u4e00\u5957\u73af\u5883\u7684\u540c\u4e00\u4e2a\u670d\u52a1\u8fdb\u884c\u5f00\u53d1 ",(0,o.kt)("br",null)," \u4e3a\u4e86\u89e3\u51b3\u4ee5\u4e0a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode"),"\u8fdb\u884c\u5f00\u53d1\u3002"),(0,o.kt)("h3",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode")," \u4e2d\uff0cNocalhost \u4e0d\u4f1a\u5bf9\u539f\u6709\u539f\u6709\u5de5\u4f5c\u8d1f\u8f7d\u8fdb\u884c\u4efb\u4f55\u4fee\u6539\uff0c\u800c\u662f\u521b\u5efa\u4e00\u4e2a\u539f\u6709\u5de5\u4f5c\u8d1f\u8f7d\u7684\u526f\u672c\uff0c\u5728\u8be5\u526f\u672c\u4e0a\u8fdb\u884c\u5f00\u53d1\u3002\u5728\u4e0d\u540c\u8bbe\u5907\u4e0a\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode")," \u521b\u5efa\u5de5\u4f5c\u8d1f\u8f7d\u7684\u526f\u672c\u8fdb\u884c\u5f00\u53d1\uff0c\u526f\u672c\u4e0a\u4f1a\u88ab Nocalhost \u6253\u4e0a\u8bbe\u5907\u7684 ID (\u8bbe\u5907 ID \u7531 Nocalhost \u81ea\u52a8\u751f\u6210\uff0c\u5bf9\u7528\u6237\u900f\u660e\uff0c\u5e76\u4fdd\u8bc1\u4e0d\u540c\u8bbe\u5907\u4e0a\u7684\u8bbe\u5907 ID \u4e0d\u4f1a\u91cd\u590d)\u4ee5\u6807\u8bc6\u8be5\u526f\u672c\u662f\u54ea\u4e2a\u8bbe\u5907\u5728\u8fdb\u884c\u5f00\u53d1\uff0c\u5404\u4e2a\u526f\u672c\u4e4b\u95f4\u4e92\u4e0d\u5f71\u54cd\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a ",(0,o.kt)("img",{alt:"\u56fe\u7247",src:n(48601).Z})),(0,o.kt)("p",null,"\u526f\u672c\u53ca\u5176\u7ba1\u7406\u7684 Pod \u4f1a\u4f7f\u7528\u548c\u539f\u6709\u5de5\u4f5c\u8d1f\u8f7d\u4e0d\u4e00\u6837\u7684 labels\uff0c\u6240\u4ee5\u5b83\u4e0d\u4f1a\u63a5\u6536\u4efb\u4f55\u8bbf\u95ee\u539f\u6709\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6d41\u91cf\u3002\u8fd9\u4e48\u505a\u7684\u539f\u56e0\u662f\uff0c\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Replace DevMode")," \u4e0d\u540c\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode")," \u662f\u5141\u8bb8\u5728\u591a\u53f0\u8bbe\u5907\u4e0a\u540c\u65f6\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u7684\uff0c\u5982\u679c\u526f\u672c\u548c\u539f\u6709\u5de5\u4f5c\u8d1f\u8f7d\u4e00\u6837\u90fd\u63a5\u6536\u6765\u81ea\u7ebf\u4e0a\u6d41\u91cf\u7684\u8bdd\uff0c\u6211\u4eec\u65e0\u6cd5\u77e5\u9053\u5f53\u524d\u8bbf\u95ee\u7684\u73af\u5883\u4f7f\u7528\u7684\u54ea\u4e2a\u8bbe\u5907\u4e0a\u6b63\u5728\u5f00\u53d1\u7684\u670d\u52a1\uff0c\u4ece\u800c\u4f1a\u5bfc\u81f4\u8bbf\u95ee\u73af\u5883\u7684\u7ed3\u679c\u53d8\u5f97\u4e0d\u53ef\u9884\u671f\u3002"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u5982\u679c\u5fae\u670d\u52a1\u5e94\u7528\u4f7f\u7528\u4e86\u7b2c\u4e09\u65b9\u7684\u670d\u52a1\u53d1\u73b0\u7ec4\u4ef6(\u5982 NACOS)\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 K8s \u7684 Service \u6765\u8fdb\u884c\u670d\u52a1\u53d1\u73b0\uff0c\u90a3\u4e48\u4ecd\u7136\u53ef\u80fd\u51fa\u73b0\u96c6\u7fa4\u4e2d\u5176\u5b83\u670d\u52a1\u8bbf\u95ee\u5230 ",(0,o.kt)("inlineCode",{parentName:"h5"},"Duplicate Mode")," \u521b\u5efa\u7684\u526f\u672c\uff0c\u4ece\u800c\u5bfc\u81f4\u8bbf\u95ee\u73af\u5883\u7684\u7ed3\u679c\u53d8\u5f97\u4e0d\u53ef\u9884\u671f\u3002\u8fd9\u79cd\u573a\u666f\u9700\u8981\u81ea\u884c\u63a7\u5236\u542f\u52a8\u7684\u670d\u52a1\u662f\u5426\u9700\u8981\u6ce8\u518c\u5230\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3 :::")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"Duplicate Mode")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Replace Mode")," \u53ef\u4ee5\u5728\u4e0d\u540c\u8bbe\u5907\u4e0a\u540c\u65f6\u4f7f\u7528\uff0c\u4f46\u540c\u4e00\u8bbe\u5907\u4e0a\uff0c\u4ec5\u80fd\u9009\u62e9\u5176\u4e2d\u4e00\u79cd\u8fdb\u5165\u5f00\u53d1\u3002"),(0,o.kt)("p",{parentName:"div"},"\u5f53\u6211\u4eec\u9700\u8981\u8bbf\u95ee\u526f\u672c\u4e2d\u6b63\u5728\u5f00\u53d1\u7684\u670d\u52a1\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 Nocalhost \u7684\u7aef\u53e3\u8f6c\u53d1\u529f\u80fd\u5c06\u672c\u5730\u7aef\u53e3\u8f6c\u53d1\u5230\u8fdc\u7aef\u670d\u52a1\u7684\u76ee\u6807\u7aef\u53e3\uff0c\u5728\u672c\u5730\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"lcoalhost:[\u672c\u5730\u7aef\u53e3]")," \u7684\u65b9\u5f0f\u6765\u8bbf\u95ee\u670d\u52a1"))),(0,o.kt)("h3",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"\u5728 Jetbrains \u548c VS Code \u63d2\u4ef6\u4e0a\uff0c\u53f3\u952e\u70b9\u51fb ",(0,o.kt)("inlineCode",{parentName:"p"},"Start DevMode(duplicate)")," \u5373\u53ef\u8fdb\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode"),": ",(0,o.kt)("img",{alt:"\u56fe\u7247",src:n(98932).Z})),(0,o.kt)("p",null,"\u8fdb\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode")," \u4e4b\u540e\u76f8\u5e94\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4f1a\u663e\u793a\u76f8\u5e94\u56fe\u6807\u8868\u660e\u8be5\u5de5\u4f5c\u8d1f\u8f7d\u5904\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode"),"\uff1a ",(0,o.kt)("img",{alt:"\u56fe\u7247",src:n(34110).Z})),(0,o.kt)("p",null,"\u8fdb\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode")," \u540e\u7684\u5176\u5b83\u64cd\u4f5c\u548c\u9ed8\u8ba4\u7684\u5f00\u53d1\u6a21\u5f0f\u4e00\u6837\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u548c\u9ed8\u8ba4\u7684\u5f00\u53d1\u65b9\u5f0f\u4e00\u6837\uff0c\u5982\u679c\u9700\u8981\u901a\u8fc7\u672c\u5730\u7aef\u53e3\u8bbf\u95ee\u5f00\u53d1\u4e2d\u7684\u670d\u52a1\uff0c\u53f3\u952e\u70b9\u51fb ",(0,o.kt)("inlineCode",{parentName:"h5"},"Port Forward")," \u4f7f\u7528 Nocalhost \u7684\u7aef\u53e3\u8f6c\u53d1\u529f\u80fd\u5373\u53ef :::")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h3",{parentName:"div",id:"faq"},"FAQ"),(0,o.kt)("h4",{parentName:"div",id:"\u65e2\u7136\u4e0d\u80fd\u63a5\u6536\u5176\u4ed6\u670d\u52a1\u7684\u6d41\u91cf\uff0c\u90a3\u548c\u5728\u672c\u5730\u76f4\u63a5\u628a\u7a0b\u5e8f\u8dd1\u8d77\u6765\u5f00\u53d1\u6709\u4ec0\u4e48\u533a\u522b"},"\u65e2\u7136\u4e0d\u80fd\u63a5\u6536\u5176\u4ed6\u670d\u52a1\u7684\u6d41\u91cf\uff0c\u90a3\u548c\u5728\u672c\u5730\u76f4\u63a5\u628a\u7a0b\u5e8f\u8dd1\u8d77\u6765\u5f00\u53d1\u6709\u4ec0\u4e48\u533a\u522b?"),(0,o.kt)("p",{parentName:"div"},"\u5728\u672c\u5730\u76f4\u63a5\u8fd0\u884c\u7a0b\u5e8f\u53ef\u80fd\u9700\u8981\u5bfc\u5165\u5f88\u591a\u73af\u5883\u53d8\u91cf\uff0c\u5982\u679c\u5de5\u4f5c\u8d1f\u8f7d\u4f9d\u8d56\u96c6\u7fa4\u4e2d\u7684\u5176\u4ed6 k8s \u8d44\u6e90\uff0c\u5982(configmap/secrets)\uff0c\u5904\u7406\u8d77\u6765\u5c31\u4f1a\u66f4\u9ebb\u70e6\u3002 \u672c\u5730\u7a0b\u5e8f\u56e0\u4e3a\u548c\u96c6\u7fa4\u5904\u4e8e\u4e0d\u540c\u7684\u7f51\u7edc\u4e4b\u4e0b\uff0c\u8bbf\u95ee\u96c6\u7fa4\u4e2d\u7684\u5176\u5b83\u670d\u52a1(\u5982 mysql, redis \u7b49)\uff0c\u4e5f\u9700\u8981\u7279\u6b8a\u7684\u914d\u7f6e\uff0c\u800c ",(0,o.kt)("inlineCode",{parentName:"p"},"Duplicate Mode")," \u521b\u5efa\u51fa\u6765\u7684\u526f\u672c\u867d\u7136\u4e0d\u80fd\u88ab\u5176\u5b83\u670d\u52a1\u8bbf\u95ee\uff0c\u4f46\u662f\u662f\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u96c6\u7fa4\u4e2d\u7684\u5176\u5b83\u670d\u52a1\u7684\u3002 \u53e6\u5916\uff0c\u5728\u5bb9\u5668\u4e2d\u5f00\u53d1\u53ef\u4ee5\u66f4\u597d\u5730\u4e0e\u751f\u4ea7\u73af\u5883\u4fdd\u6301\u4e00\u81f4\u6027\u3002"),(0,o.kt)("h4",{parentName:"div",id:"\u526f\u672c\u6570\u91cf\u6709\u9650\u5236\u5417"},"\u526f\u672c\u6570\u91cf\u6709\u9650\u5236\u5417?"),(0,o.kt)("p",{parentName:"div"},"Nocalhost \u6ca1\u6709\u5bf9\u526f\u672c\u6570\u91cf\u8fdb\u884c\u9650\u5236\uff0c\u7406\u8bba\u4e0a\u4efb\u610f\u6570\u91cf\u7684\u8bbe\u5907\u90fd\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Duplicate Mode")," \u521b\u5efa\u5c5e\u4e8e\u81ea\u5df1\u7684\u526f\u672c\u8fdb\u884c\u5f00\u53d1\uff0c\u5b9e\u9645\u573a\u666f\u53ef\u80fd\u53d7\u9650\u4e8e\u96c6\u7fa4\u8d44\u6e90\u7b49\u3002"))))}p.isMDXComponent=!0},34110:function(e,t,n){t.Z=n.p+"assets/images/duplicate-devmode-status-98a31922ed1aa790ada39d91f044ed0a.png"},48601:function(e,t,n){t.Z=n.p+"assets/images/duplicate-devmode-e75e7ca0fc6d7b90ddeb03ddabefab54.jpg"},22724:function(e,t,n){t.Z=n.p+"assets/images/replace-devmode-e3ab40b8dec0373f3af7acde36165c63.jpg"},98932:function(e,t,n){t.Z=n.p+"assets/images/start-duplicate-devmode-24dd1fb838bcecdbe4c79657525117b9.png"}}]);