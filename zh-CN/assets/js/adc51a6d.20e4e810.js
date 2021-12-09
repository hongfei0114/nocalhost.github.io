"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[8674],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,y=d["".concat(a,".").concat(f)]||d[f]||p[f]||c;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<c;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76647:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return a},toc:function(){return s},default:function(){return p}});var r=t(22122),o=t(19756),c=(t(67294),t(3905)),i=["components"],l={title:"nhctl sync"},a={unversionedId:"cli/cli-sync",id:"cli/cli-sync",isDocsHomePage:!1,title:"nhctl sync",description:"Sync files to remote Pod in Kubernetes",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/cli/cli-sync.md",sourceDirName:"cli",slug:"/cli/cli-sync",permalink:"/zh-CN/docs/cli/cli-sync",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{title:"nhctl sync"},sidebar:"docs",previous:{title:"nhctl sync-status",permalink:"/zh-CN/docs/cli/cli-sync-status"},next:{title:"nhctl uninstall",permalink:"/zh-CN/docs/cli/cli-uninstall"}},s=[{value:"Usage",id:"usage",children:[]},{value:"\u6807\u8bc6",id:"\u6807\u8bc6",children:[]}],u={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Sync files to remote Pod in Kubernetes"),(0,c.kt)("h2",{id:"usage"},"Usage"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"nhctl sync [NAME] [flags]\n")),(0,c.kt)("h2",{id:"\u6807\u8bc6"},"\u6807\u8bc6"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Flags:\n      --container string          container name of pod to sync\n  -t, --controller-type string    kind of k8s controller,such as deployment,statefulSet\n  -d, --deployment string         k8s deployment which your developing service exists\n  -b, --double                    if use double side sync\n  -h, --help                      help for sync\n  -i, --ignored-pattern strings   local ignored pattern\n      --overwrite                 override the remote changing according to the local sync folder while start up (default true)\n      --resume                    resume file sync\n      --stop                      stop file sync\n  -s, --synced-pattern strings    local synced pattern\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}p.isMDXComponent=!0}}]);