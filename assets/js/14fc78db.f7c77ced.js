"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[1050],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=s(n),m=i,g=f["".concat(c,".").concat(m)]||f[m]||u[m]||l;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},60678:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(74034),i=n(79973),l=(n(67294),n(3905)),a=["components"],o={title:"nhctl install"},c=void 0,s={unversionedId:"cli/cli-install",id:"cli/cli-install",isDocsHomePage:!1,title:"nhctl install",description:"Deploy Application",source:"@site/docs/cli/cli-install.md",sourceDirName:"cli",slug:"/cli/cli-install",permalink:"/docs/cli/cli-install",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/cli/cli-install.md",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629102564,formattedLastUpdatedAt:"8/16/2021",frontMatter:{title:"nhctl install"},sidebar:"docs",previous:{title:"nhctl init",permalink:"/docs/cli/cli-init"},next:{title:"nhctl k",permalink:"/docs/cli/cli-k"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],u={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Deploy Application"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nhctl install [NAME] [flags]\n")),(0,l.kt)("h2",{id:"flags"},"Flags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Flags:\n      --config string              specify a config relative to .nocalhost dir\n  -r, --git-ref string             resources git ref\n  -u, --git-url string             resources git url\n      --helm-chart-name string     chart name\n      --helm-repo-name string      chart repository name\n      --helm-repo-url string       chart repository url where to locate the requested chart\n      --helm-repo-version string   chart repository version\n  -f, --helm-values string         helm's Value.yaml\n  -h, --help                       help for install\n      --ignore-pre-install         ignore pre-install\n      --local-path string          local path for application\n  -c, --outer-config string        specify a config.yaml in local path\n      --resource-path strings      resources path\n      --set strings                set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)\n  -t, --type string                nocalhost application type: helmRepo, helmGit, helmLocal, rawManifest, rawManifestGit, rawManifestLocal or kustomizeGit\n      --wait                       wait for completion\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}f.isMDXComponent=!0}}]);