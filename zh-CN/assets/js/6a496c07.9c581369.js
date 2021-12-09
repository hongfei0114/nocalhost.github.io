"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[3215],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57380:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],l={},u={unversionedId:"changelogs/0.6.x",id:"changelogs/0.6.x",isDocsHomePage:!1,title:"0.6.x",description:"0.6.0 (2021-10-15)",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/changelogs/0.6.x.md",sourceDirName:"changelogs",slug:"/changelogs/0.6.x",permalink:"/zh-CN/docs/changelogs/0.6.x",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"0.5.x",permalink:"/zh-CN/docs/changelogs/0.5.x"}},c=[{value:"0.6.0 (2021-10-15)",id:"060-2021-10-15",children:[{value:"New Features",id:"new-features",children:[]},{value:"Improvement",id:"improvement",children:[]}]},{value:"0.6.3 (2121-11.01)",id:"063-2121-1101",children:[{value:"New Features:",id:"new-features-1",children:[]},{value:"Improvement",id:"improvement-1",children:[]}]}],p={toc:c};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"060-2021-10-15"},"0.6.0 (2021-10-15)"),(0,a.kt)("h3",{id:"new-features"},"New Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supports ",(0,a.kt)("strong",{parentName:"li"},"Duplicate DevMode")),(0,a.kt)("li",{parentName:"ul"},"Supports Dev Config gui tools"),(0,a.kt)("li",{parentName:"ul"},"(VSCode) Supports remote debug\u3001run\u3001hotReload for Node and Golang")),(0,a.kt)("h3",{id:"improvement"},"Improvement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supports file sync dir management"),(0,a.kt)("li",{parentName:"ul"},"Supports Dev Config validation"),(0,a.kt)("li",{parentName:"ul"},"Improve port-forward stability on containerd K8s cluster"),(0,a.kt)("li",{parentName:"ul"},"Supports using git bash(unix shell) as default shell in windows"),(0,a.kt)("li",{parentName:"ul"},"Generate 100-year validity certificate for Nocalhost-Dep"),(0,a.kt)("li",{parentName:"ul"},"Supports external tcp and http dependency readiness probe in Nocalhost-Dep")),(0,a.kt)("h2",{id:"063-2121-1101"},"0.6.3 (2121-11.01)"),(0,a.kt)("h3",{id:"new-features-1"},"New Features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supports one-click Run/Debug and HotReload in VSCode"),(0,a.kt)("li",{parentName:"ul"},"Supports configure DevConfig in browser through IDE plugin"),(0,a.kt)("li",{parentName:"ul"},"Supports amr64-osx"),(0,a.kt)("li",{parentName:"ul"},"Auto position to the project when using Run/Debug"),(0,a.kt)("li",{parentName:"ul"},"Check kubeconfig when adding to IDE plugin")),(0,a.kt)("h3",{id:"improvement-1"},"Improvement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix bugs when delete the associated project of workload"),(0,a.kt)("li",{parentName:"ul"},"Fix high CPU usage when starting for the first time"),(0,a.kt)("li",{parentName:"ul"},"Optimized the performance when K8s cluster is unavailable")))}s.isMDXComponent=!0}}]);