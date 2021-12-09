"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[9753],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(67294);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,c=function(e,r){if(null==e)return{};var n,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(c[n]=e[n]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a=t.createContext({}),u=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(a.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,c=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=c,g=d["".concat(a,".").concat(f)]||d[f]||s[f]||o;return n?t.createElement(g,i(i({ref:r},p),{},{components:n})):t.createElement(g,i({ref:r},p))}));function f(e,r){var n=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l.mdxType="string"==typeof e?e:c,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24927:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return l},metadata:function(){return a},toc:function(){return u},default:function(){return s}});var t=n(22122),c=n(19756),o=(n(67294),n(3905)),i=["components"],l={title:"nhctl render"},a={unversionedId:"cli/cli-render",id:"cli/cli-render",isDocsHomePage:!1,title:"nhctl render",description:"Render the file for debugging",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/cli/cli-render.md",sourceDirName:"cli",slug:"/cli/cli-render",permalink:"/zh-CN/docs/cli/cli-render",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{title:"nhctl render"},sidebar:"docs",previous:{title:"nhctl pvc",permalink:"/zh-CN/docs/cli/cli-pvc"},next:{title:"nhctl reset",permalink:"/zh-CN/docs/cli/cli-reset"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],p={toc:u};function s(e){var r=e.components,n=(0,c.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Render the file for debugging"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nhctl render [NAME] [flags]\n")),(0,o.kt)("h2",{id:"flags"},"Flags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Flags:\n  -e, --env path string   the env file for render injection\n  -h, --help              help for render\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}s.isMDXComponent=!0}}]);