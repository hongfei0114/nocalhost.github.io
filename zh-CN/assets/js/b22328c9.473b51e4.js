"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[1952],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||c;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23322:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(74034),o=n(79973),c=(n(67294),n(3905)),i=["components"],l={title:"nhctl version"},a=void 0,u={unversionedId:"cli/cli-version",id:"cli/cli-version",isDocsHomePage:!1,title:"nhctl version",description:"Get nhctl's version",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/cli/cli-version.md",sourceDirName:"cli",slug:"/cli/cli-version",permalink:"/zh-CN/docs/cli/cli-version",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{title:"nhctl version"},sidebar:"docs",previous:{title:"nhctl upgrade",permalink:"/zh-CN/docs/cli/cli-upgrade"},next:{title:"nhctl yaml",permalink:"/zh-CN/docs/cli/cli-yaml"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],p={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Get nhctl's version"),(0,c.kt)("h2",{id:"usage"},"Usage"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"nhctl version [flags]\n")),(0,c.kt)("h2",{id:"flags"},"Flags"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Flags:\n  -h, --help   help for version\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}f.isMDXComponent=!0}}]);