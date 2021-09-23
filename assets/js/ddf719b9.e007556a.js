"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[5234],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=s(n),d=c,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,i=new Array(o);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:c,i[1]=a;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},21755:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(74034),c=n(79973),o=(n(67294),n(3905)),i=["components"],a={title:"nhctl reset"},l=void 0,s={unversionedId:"cli/cli-reset",id:"cli/cli-reset",isDocsHomePage:!1,title:"nhctl reset",description:"Reset application",source:"@site/docs/cli/cli-reset.md",sourceDirName:"cli",slug:"/cli/cli-reset",permalink:"/docs/cli/cli-reset",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/cli/cli-reset.md",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{title:"nhctl reset"},sidebar:"docs",previous:{title:"nhctl render",permalink:"/docs/cli/cli-render"},next:{title:"nhctl sync-status",permalink:"/docs/cli/cli-sync-status"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],p={toc:u};function f(e){var t=e.components,n=(0,c.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Reset application"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nhctl reset [NAME] [flags]\n")),(0,o.kt)("h2",{id:"flags"},"Flags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Flags:\n  -h, --help   help for reset\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}f.isMDXComponent=!0}}]);