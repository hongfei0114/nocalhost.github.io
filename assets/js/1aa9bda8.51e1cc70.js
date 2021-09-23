"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[2341],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},c=Object.keys(e);for(l=0;l<c.length;l++)t=c[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)t=c[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=l.createContext({}),p=function(e){var n=l.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return l.createElement(a.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},f=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=p(t),d=r,u=f["".concat(a,".").concat(d)]||f[d]||g[d]||c;return t?l.createElement(u,i(i({ref:n},s),{},{components:t})):l.createElement(u,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=f;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=t[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}f.displayName="MDXCreateElement"},79315:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var l=t(74034),r=t(79973),c=(t(67294),t(3905)),i=["components"],o={title:"nhctl config"},a=void 0,p={unversionedId:"cli/cli-config",id:"cli/cli-config",isDocsHomePage:!1,title:"nhctl config",description:"View, save and check application config file",source:"@site/docs/cli/cli-config.md",sourceDirName:"cli",slug:"/cli/cli-config",permalink:"/docs/cli/cli-config",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/cli/cli-config.md",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{title:"nhctl config"},sidebar:"docs",previous:{title:"nhctl apply",permalink:"/docs/cli/cli-apply"},next:{title:"nhctl convert",permalink:"/docs/cli/cli-convert"}},s=[{value:"nhctl config edit",id:"nhctl-config-edit",children:[{value:"Flags",id:"flags",children:[]}]},{value:"nhctl config get",id:"nhctl-config-get",children:[{value:"Flags",id:"flags-1",children:[]}]},{value:"nhctl config reload",id:"nhctl-config-reload",children:[{value:"Flags",id:"flags-2",children:[]}]},{value:"nhctl config template",id:"nhctl-config-template",children:[{value:"Flags",id:"flags-3",children:[]}]}],g={toc:s};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,l.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"View, save and check application config file"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Usage:\nnhctl config [command]\n\nAvailable Commands:\n  edit        edit service config\n  get         get application/service config\n  reload      reload application/service config\n  template    get service config template\n")),(0,c.kt)("h2",{id:"nhctl-config-edit"},"nhctl config edit"),(0,c.kt)("p",null,"Edit service config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"nhctl config edit [Name] [flags]\n")),(0,c.kt)("h3",{id:"flags"},"Flags"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Flags:\n    --app-config               get application config\n    -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet\n    -d, --deployment string        k8s deployment which your developing service exists\n    -h, --help                     help for get\n\nGlobal Flags:\n    --debug               enable debug level log\n    --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,c.kt)("h2",{id:"nhctl-config-get"},"nhctl config get"),(0,c.kt)("p",null,"Get application/service config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"nhctl config get [Name] [flags]\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\u793a\u4f8b: \n")),(0,c.kt)("h3",{id:"flags-1"},"Flags"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Flags:\n    --app-config               get application config\n    -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet\n    -d, --deployment string        k8s deployment which your developing service exists\n    -h, --help                     help for get\n\nGlobal Flags:\n    --debug               enable debug level log\n    --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,c.kt)("h2",{id:"nhctl-config-reload"},"nhctl config reload"),(0,c.kt)("p",null,"Reload application/service config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"nhctl config reload [Name] [flags]\n")),(0,c.kt)("h3",{id:"flags-2"},"Flags"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Flags:\n    -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet\n    -d, --deployment string        k8s deployment which your developing service exists\n    -h, --help                     help for reload\n\nGlobal Flags:\n    --debug               enable debug level log\n    --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,c.kt)("h2",{id:"nhctl-config-template"},"nhctl config template"),(0,c.kt)("p",null,"Get service config template"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"nhctl config template [Name] [flags]\n")),(0,c.kt)("h3",{id:"flags-3"},"Flags"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Flags:\n    -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet\n    -d, --deployment string        k8s deployment which your developing service exists\n    -h, --help                     help for template\n\nGlobal Flags:\n    --debug               enable debug level log\n    --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}f.isMDXComponent=!0}}]);