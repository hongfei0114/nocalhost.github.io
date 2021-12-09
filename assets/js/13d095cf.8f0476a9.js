"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[6310],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=i(n),f=c,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:c,l[1]=a;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},703:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return i},default:function(){return p}});var r=n(22122),c=n(19756),o=(n(67294),n(3905)),l=["components"],a={title:"nhctl sync-status"},s={unversionedId:"cli/cli-sync-status",id:"cli/cli-sync-status",isDocsHomePage:!1,title:"nhctl sync-status",description:"Tracing the files sync status, include local folder and remote device",source:"@site/docs/cli/cli-sync-status.md",sourceDirName:"cli",slug:"/cli/cli-sync-status",permalink:"/docs/cli/cli-sync-status",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/cli/cli-sync-status.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{title:"nhctl sync-status"},sidebar:"docs",previous:{title:"nhctl reset",permalink:"/docs/cli/cli-reset"},next:{title:"nhctl sync",permalink:"/docs/cli/cli-sync"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],u={toc:i};function p(e){var t=e.components,n=(0,c.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tracing the files sync status, include local folder and remote device"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nhctl sync-status [NAME] [flags]\n")),(0,o.kt)("h2",{id:"flags"},"Flags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Flags:\n  -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet (default "deployment")\n  -d, --deployment string        k8s deployment which your developing service exists (default "deployment")\n  -h, --help                     help for sync-status\n      --override                 override the remote changing according to the local sync folder\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n')))}p.isMDXComponent=!0}}]);