"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[8481],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),d=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,u=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),p=d(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||s[f]||l;return n?r.createElement(m,i(i({ref:e},c),{},{components:n})):r.createElement(m,i({ref:e},c))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,i=new Array(l);i[0]=p;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:o,i[1]=a;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(t,e,n){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return o}})},4996:function(t,e,n){n.d(e,{C:function(){return l},Z:function(){return i}});var r=n(2263),o=n(3919);function l(){var t=(0,r.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var l=void 0===r?{}:r,i=l.forcePrependBaseUrl,a=void 0!==i&&i,u=l.absolute,d=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return e+n;var c=n.startsWith(e)?n:e+n.replace(/^\//,"");return d?t+c:c}(l,n,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},3775:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(2122),o=n(9756),l=(n(7294),n(3905)),i=n(4996),a=["components"],u={},d="Hot Reload",c={unversionedId:"guides/hot-reload",id:"guides/hot-reload",isDocsHomePage:!1,title:"Hot Reload",description:"What is Hot-Reload?",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/hot-reload.md",sourceDirName:"guides",slug:"/guides/hot-reload",permalink:"/zh-CN/docs/guides/hot-reload",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Remote Run",permalink:"/zh-CN/docs/guides/remote-run"},next:{title:"Overview",permalink:"/zh-CN/docs/config/config"}},s=[{value:"What is Hot-Reload?",id:"what-is-hot-reload",children:[]},{value:"Supported IDEs",id:"supported-ides",children:[]},{value:"How to enable Hot-Reload?",id:"how-to-enable-hot-reload",children:[{value:"Sample Configuration",id:"sample-configuration",children:[]}]}],p={toc:s};function f(t){var e=t.components,n=(0,o.Z)(t,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hot-reload"},"Hot Reload"),(0,l.kt)("h2",{id:"what-is-hot-reload"},"What is Hot-Reload?"),(0,l.kt)("p",null,"The files you modify in the IDE will be synchronized to the remote container in real time, and your Run/Debug command will be re-executed."),(0,l.kt)("h2",{id:"supported-ides"},"Supported IDEs"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Language"),(0,l.kt)("th",null,"IDE"),(0,l.kt)("th",null,"Edition"),(0,l.kt)("th",null,"Required Plugin")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Java"),(0,l.kt)("td",null,"IntelliJ IDEA"),(0,l.kt)("td",null,"Ultimate"),(0,l.kt)("td",null,"N/A")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"2"},"Go"),(0,l.kt)("td",null,"IntelliJ IDEA"),(0,l.kt)("td",null,"Ultimate"),(0,l.kt)("td",null,"Go plugin")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"GoLand"),(0,l.kt)("td",null,"Professional"),(0,l.kt)("td",null,"N/A")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"2"},"Python"),(0,l.kt)("td",null,"IntelliJ IDEA"),(0,l.kt)("td",null,"Ultimate"),(0,l.kt)("td",null,"Python plugin")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"PyCharm"),(0,l.kt)("td",null,"Professional"),(0,l.kt)("td",null,"N/A")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"2"},"PHP"),(0,l.kt)("td",null,"IntelliJ IDEA"),(0,l.kt)("td",null,"Ultimate"),(0,l.kt)("td",null,"PHP plugin")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"PhpStorm"),(0,l.kt)("td",null,"Professional"),(0,l.kt)("td",null,"N/A")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"2"},"Node.js"),(0,l.kt)("td",null,"IntelliJ IDEA"),(0,l.kt)("td",null,"Ultimate"),(0,l.kt)("td",null,"N/A")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"WebStorm"),(0,l.kt)("td",null,"Professional"),(0,l.kt)("td",null,"N/A")))),(0,l.kt)("h2",{id:"how-to-enable-hot-reload"},"How to enable Hot-Reload?"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Select the workload that you want to Run/Debug"),(0,l.kt)("li",{parentName:"ol"},"Right-click the workload and select ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Dev Config")),", configure ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"hotReload: true")))),(0,l.kt)("h3",{id:"sample-configuration"},"Sample Configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{15} title="Nocalhost Configs"',"{15}":!0,title:'"Nocalhost','Configs"':!0},'name: java-remote-run\nserviceType: deployment\ncontainers:\n  - name: "reviews"\n    dev:\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:latest\n        shell: bash\n        workDir: /home/nocalhost-dev\n        command:\n          debug:\n            - ./gradlew\n            - bootRun\n            - --debug-jvm\n            - --no-daemon\n        hotReload: true\n        debug:\n          remoteDebugPort: 5005\n\n')),(0,l.kt)("figure",{className:"img-frame"},(0,l.kt)("img",{className:"gif-img",src:(0,i.Z)("/img/blog/apisix/apisix-ingress-remote-run.gif")}),(0,l.kt)("figcaption",null,"Remote run")))}f.isMDXComponent=!0}}]);