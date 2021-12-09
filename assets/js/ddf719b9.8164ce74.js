"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[5234],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=c,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:c,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12006:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var n=r(22122),c=r(19756),o=(r(67294),r(3905)),a=["components"],l={title:"nhctl reset"},i={unversionedId:"cli/cli-reset",id:"cli/cli-reset",isDocsHomePage:!1,title:"nhctl reset",description:"Reset application",source:"@site/docs/cli/cli-reset.md",sourceDirName:"cli",slug:"/cli/cli-reset",permalink:"/docs/cli/cli-reset",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/cli/cli-reset.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{title:"nhctl reset"},sidebar:"docs",previous:{title:"nhctl render",permalink:"/docs/cli/cli-render"},next:{title:"nhctl sync-status",permalink:"/docs/cli/cli-sync-status"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],u={toc:s};function p(e){var t=e.components,r=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Reset application"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nhctl reset [NAME] [flags]\n")),(0,o.kt)("h2",{id:"flags"},"Flags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Flags:\n  -h, --help   help for reset\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}p.isMDXComponent=!0}}]);