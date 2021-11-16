"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[1213],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13919:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return r}});var o=n(52263),a=n(13919);function i(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var i=void 0===o?{}:o,r=i.forcePrependBaseUrl,l=void 0!==r&&r,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},58215:function(e,t,n){var o=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(67294),a=n(79443);var i=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,d=e.values,u=e.groupId,p=e.className,m=o.Children.toArray(e.children),h=null!=d?d:m.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,g=i(),v=g.tabGroupChoices,f=g.setTabGroupChoices,N=(0,o.useState)(k),w=N[0],y=N[1],b=[];if(null!=u){var D=v[u];null!=D&&D!==w&&h.some((function(e){return e.value===D}))&&y(D)}var C=function(e){var t=e.currentTarget,n=b.indexOf(t),o=h[n].value;y(o),null!=u&&(f(u,o),setTimeout((function(){var e,n,o,a,i,r,l,c;(e=t.getBoundingClientRect(),n=e.top,o=e.left,a=e.bottom,i=e.right,r=window,l=r.innerHeight,c=r.innerWidth,n>=0&&i<=c&&a<=l&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=b.indexOf(e.target)+1;n=b[o]||b[0];break;case"ArrowLeft":var a=b.indexOf(e.target)-1;n=b[a]||b[b.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},p)},h.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":w===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:M,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,o.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,n){var o=(0,n(67294).createContext)(void 0);t.Z=o},56e3:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var o=n(74034),a=n(79973),i=(n(67294),n(3905)),r=(n(55064),n(58215),n(44996)),l=["components"],s={title:"Overview"},c="Development with Nocalhost",d={unversionedId:"guides/develop-service",id:"guides/develop-service",isDocsHomePage:!1,title:"Overview",description:"Nocalhost allows you to develop applications directly inside a Kubernetes cluster.",source:"@site/docs/guides/develop-service.md",sourceDirName:"guides",slug:"/guides/develop-service",permalink:"/docs/guides/develop-service",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/guides/develop-service.md",tags:[],version:"current",lastUpdatedBy:"name",lastUpdatedAt:1636966853,formattedLastUpdatedAt:"11/15/2021",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Deploy Demo Application",permalink:"/docs/guides/deploy/deploy-demo"},next:{title:"DevMode(Replace)",permalink:"/docs/guides/develop-service-replace"}},u=[{value:"Using Cluster Inspector",id:"using-cluster-inspector",children:[{value:"Resources Status",id:"resources-status",children:[]}]},{value:"Before Entering DevMode",id:"before-entering-devmode",children:[{value:"Source Code Directory",id:"source-code-directory",children:[]},{value:"Development Container",id:"development-container",children:[]}]},{value:"Start Development Mode",id:"start-development-mode",children:[{value:"Select Workload",id:"select-workload",children:[]},{value:"DevMode Process",id:"devmode-process",children:[]}]},{value:"Coding in Kubernetes Cluster",id:"coding-in-kubernetes-cluster",children:[{value:"Status Bar",id:"status-bar",children:[]},{value:"Open Project",id:"open-project",children:[]}]},{value:"End Development Mode",id:"end-development-mode",children:[{value:"How to?",id:"how-to",children:[]},{value:"Process",id:"process",children:[]}]},{value:"Other Useful Features",id:"other-useful-features",children:[{value:"Reset Pod",id:"reset-pod",children:[]},{value:"Modify Manifest",id:"modify-manifest",children:[]},{value:"Clear PVC",id:"clear-pvc",children:[]}]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"development-with-nocalhost"},"Development with Nocalhost"),(0,i.kt)("p",null,"Nocalhost allows you to develop applications directly inside a Kubernetes cluster. "),(0,i.kt)("h2",{id:"using-cluster-inspector"},"Using Cluster Inspector"),(0,i.kt)("p",null,"Nocalhost build-in a cluster inspector. You can use the cluster inspector to browse resources in the Kubernetes cluster, deploy your application and select the workload that wants to develop and debug."),(0,i.kt)("h3",{id:"resources-status"},"Resources Status"),(0,i.kt)("p",null,"Nocalhost uses the following icons to describe the status of different Kubernetes resources in cluster inspector."),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Resource"),(0,i.kt)("th",null,"Status"),(0,i.kt)("th",null,"Icon"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{rowSpan:"2"},"Cluster"),(0,i.kt)("td",null,"Active"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/cluster_active.svg"),width:"20"})),(0,i.kt)("td",null,"Connected to cluster")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Inactive"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/cluster_warning.svg"),width:"20"})),(0,i.kt)("td",null,"Unable to connect to cluster")),(0,i.kt)("tr",null,(0,i.kt)("td",{rowSpan:"2"},"DevSpace"),(0,i.kt)("td",null,"Normal"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/namespace.svg"),width:"20"})),(0,i.kt)("td",null,"Normal DevSpace/Namespace")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Read Only"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/namespace_viewer.svg"),width:"20"})),(0,i.kt)("td",null,"This DevSpace/Namespace is readonly, can not operate")),(0,i.kt)("tr",null,(0,i.kt)("td",{rowSpan:"3"},"Application"),(0,i.kt)("td",null,"Active"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/app_active.svg"),width:"20"})),(0,i.kt)("td",null,"Application is able to operate")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Inactive"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/app_inactive.svg"),width:"20"})),(0,i.kt)("td",null,"Application is inactive, unable to operate")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Loading"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/loading.gif"),width:"20"})),(0,i.kt)("td",null,"Installation or uninstallation")),(0,i.kt)("tr",null,(0,i.kt)("td",{rowSpan:"5"},"Development Mode"),(0,i.kt)("td",null,"Start DevMode"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/dev_start.svg"),width:"20"})),(0,i.kt)("td",null,"The workload is in DevMode")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"End DevMode"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/dev_end.svg"),width:"20"})),(0,i.kt)("td",null,"End DevMode")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Others"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/dev_other.svg"),width:"20"})),(0,i.kt)("td",null,"Others enabled DevMode")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"DevMode and Port-Forwarding"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/dev_port_forwarding.svg"),width:"20"})),(0,i.kt)("td",null,"In DevMode and port-forwarding enabled")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"DevMode and Port-Forwarding, enabled by others"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/dev_port_forwarding_other.svg"),width:"20"})),(0,i.kt)("td",null,"Others enable the workload into DevMode and port-forwarding")),(0,i.kt)("tr",null,(0,i.kt)("td",{rowSpan:"2"},"Nocalhost Configs"),(0,i.kt)("td",null,"Normal"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/setting_normal.svg"),width:"20"})),(0,i.kt)("td",null,"This workload has Nocalhost configurations")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Warning"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/setting_warning.svg"),width:"20"})),(0,i.kt)("td",null,"Nocalhost configurations is empty")),(0,i.kt)("tr",null,(0,i.kt)("td",{rowSpan:"4"},"Workload Status"),(0,i.kt)("td",null,"Not Ready"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/status_normal.svg"),width:"20"})),(0,i.kt)("td",null,"This workload is not ready, e.g. deploying")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Running"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/status_running.svg"),width:"20"})),(0,i.kt)("td",null,"This workload is running")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Failed"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/status_failed.svg"),width:"20"})),(0,i.kt)("td",null,"This workload has failed to run")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Unknown"),(0,i.kt)("td",null,(0,i.kt)("img",{src:(0,r.Z)("/img/icons/status_unknown.svg"),width:"20"})),(0,i.kt)("td",null,"This workload status is unknown")))),(0,i.kt)("h2",{id:"before-entering-devmode"},"Before Entering DevMode"),(0,i.kt)("p",null,"There are some configurations that you need to take care of before DevMode."),(0,i.kt)("h3",{id:"source-code-directory"},"Source Code Directory"),(0,i.kt)("p",null,"Before developing the application, you need to tell Nocalhost the location of your source code, so Nocalhost can synchronize your source code files to the remote container. You can either specify a local directory or clone your source code from the Git repository through Nocalhost."),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"#associate-local-directory"},"Associate Local Directory")," before entering DevMode. Alternatively, Nocalhost will check the directory path. If you do not have an associated directory, Nocalhost will pop the selection menu to ask you to `specify the source directory. You can ",(0,i.kt)("a",{parentName:"p",href:"#open-local-directory"},"Open Local Directory")," or ",(0,i.kt)("a",{parentName:"p",href:"#clone-from-git-repository"},"Clone from Git Repo"),"."),(0,i.kt)("h4",{id:"associate-local-directory"},"Associate Local Directory"),(0,i.kt)("p",null,"You can associate the local source code directory to a workload before entering DevMode. Once you associated this directory, Nocalhost will save this directory path in the database. "),(0,i.kt)("p",null,"When you entering DevMode, Nocalhost will use this path directory instead of asking for input."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Steps:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the workload"),(0,i.kt)("li",{parentName:"ol"},"Right-click and select the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Associate Local DIR"))),(0,i.kt)("li",{parentName:"ol"},"Choose the local directory and confirm the selection")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Cross IDE")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have associated the directory in one IDE already, once you develop the same workload in the other IDE, Nocalhost will still use the directory path set before. "),(0,i.kt)("p",{parentName:"div"},"For example, when a workload is associated with a directory in VS Code, then switch to IDEA. Nocalhost will firstly use the directory you associated in VS Code until you associate again."))),(0,i.kt)("h4",{id:"open-local-directory"},"Open Local Directory"),(0,i.kt)("p",null,"You can select any local directory and confirm the selection. Nocalhost will save the directory path in the database."),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/develop/specify-source-dir.png")}),(0,i.kt)("figcaption",null,"Ask to specify the source directory in VS Code")),(0,i.kt)("h4",{id:"clone-from-git-repository"},"Clone from Git Repository"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Limitation")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Nocalhost will not clone source code from Git if you have already associated or opened the directory. "))),(0,i.kt)("p",null,"Nocalhost can help you to clone the source code from the Git repository within the IDE. "),(0,i.kt)("p",null,"If you choose ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Clone from Git Repository")),", Nocalhost will try to clone the source code from URL according to the ",(0,i.kt)("a",{parentName:"p",href:"../config/config-dev#devgiturl"},(0,i.kt)("inlineCode",{parentName:"a"},"dev.gitUrl"))," section or ask you to input the Git URL."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Auto-associate")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Nocalhost will associate the directory to the clone directory automatically after codes are cloned. "))),(0,i.kt)("h3",{id:"development-container"},"Development Container"),(0,i.kt)("p",null,"Nocalhost will replace the workload containers when entering DevMode with ",(0,i.kt)("a",{parentName:"p",href:"../config/config-dev-devcontainer"},"development container"),". Nocalhost will load the ",(0,i.kt)("inlineCode",{parentName:"p"},"container[*].dev")," section from the Nocalhost configuration. "),(0,i.kt)("h4",{id:"development-image"},"Development Image"),(0,i.kt)("p",null,"Nocalhost needs to know which ",(0,i.kt)("inlineCode",{parentName:"p"},"development image")," to use before entering DevMode. Nocalhost will use image defined in ",(0,i.kt)("a",{parentName:"p",href:"../config/config-dev#devimage"},(0,i.kt)("inlineCode",{parentName:"a"},"dev.image"))," or ask you to input one. "),(0,i.kt)("p",null,"You can use the docker image provided by us or use any ",(0,i.kt)("a",{parentName:"p",href:"../config/config-dev-devcontainer#advices-for-making-devimage"},"custom image")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"development image"),"."),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/develop/vs-choose-image.jpg")}),(0,i.kt)("figcaption",null,"Select development image in VS Code")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Image Pull")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Container image will handle by Kubernetes, ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/containers/images/"},"read more to learn about Kubernetes image management"),"."))),(0,i.kt)("h2",{id:"start-development-mode"},"Start Development Mode"),(0,i.kt)("h3",{id:"select-workload"},"Select Workload"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Expand the cluster inspector"),(0,i.kt)("li",{parentName:"ol"},"Select the workload you want to develop and click ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Start DevMode"))," or ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Start DevMode(Duplicate)"))),(0,i.kt)("li",{parentName:"ol"},"Select a container if you have more than one container in this workload")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Container")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have more than one container in a workload, you can only select one container to enter DevMode."))),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/develop/start-devmode.jpg")}),(0,i.kt)("figcaption",null,"Select workload in VS Code and JetBrains")),(0,i.kt)("h3",{id:"devmode-process"},"DevMode Process"),(0,i.kt)("p",null,"When entering DevMoe, Nocalhost will do the following things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Replace Pods")," according to your ",(0,i.kt)("a",{parentName:"li",href:"../config/config-dev-devcontainer#configuration"},(0,i.kt)("inlineCode",{parentName:"a"},"replacing port")," configurations")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Forward ports")," according to your ",(0,i.kt)("a",{parentName:"li",href:"../config/config-dev-portforward"},(0,i.kt)("inlineCode",{parentName:"a"},"port-forwarding")," configurations")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Sync file changes")," between your local project directory and the Kubernetes pods according to the ",(0,i.kt)("a",{parentName:"li",href:"../config/config-dev-sync"},(0,i.kt)("inlineCode",{parentName:"a"},"dev.sync"))," section"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Open a terminal")," right within IDE after the container started. The opened working directory is according to your ",(0,i.kt)("a",{parentName:"li",href:"../config/config-dev#devworkdir"},(0,i.kt)("inlineCode",{parentName:"a"},"dev.workDir"))," section.")),(0,i.kt)("p",null,"Once the terminal session starts, you start your application and work inside your container. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Remote terminal session started"',title:'"Remote',terminal:!0,session:!0,'started"':!0},"root@ratings-5dfbc89c59-r7wg5:/home/nocalhost-dev#\n")),(0,i.kt)("p",null,"You can also use the ",(0,i.kt)("a",{parentName:"p",href:"./remote-run"},"remote run")," to run all the commands according to ",(0,i.kt)("inlineCode",{parentName:"p"},"dev.command")," section."),(0,i.kt)("h2",{id:"coding-in-kubernetes-cluster"},"Coding in Kubernetes Cluster"),(0,i.kt)("p",null,"Make sure you have done the following before developing:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Start process inside the container or use the ",(0,i.kt)("a",{parentName:"li",href:"./remote-run"},"remote run")," to run your application."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","The port-forwarding you configured has successfully started or ",(0,i.kt)("a",{parentName:"li",href:"../config/config-dev-portforward#using-ide-plugin"},"configure the port-forwarding in IDE"))),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/opt/code-change.gif")}),(0,i.kt)("figcaption",null,"Coding in VS Code")),(0,i.kt)("h3",{id:"status-bar"},"Status Bar"),(0,i.kt)("p",null,"Nocalhost will monitor the local files change and synchronize the changes to the remote containers. You can check the synchronization status in IDE's status bar."),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/develop/statusbar.jpg")}),(0,i.kt)("figcaption",null,"Synchronization status in IDE")),(0,i.kt)("h4",{id:"disconnect--reconnect"},"Disconnect & Reconnect"),(0,i.kt)("p",null,"If the file synchronization has disconnected, the status will change to ",(0,i.kt)("inlineCode",{parentName:"p"},"Nocalhost sidecar disconnected"),". In this case, you can just click the status bar, Nocalhost will reconnect the file synchronization. "),(0,i.kt)("h3",{id:"open-project"},"Open Project"),(0,i.kt)("p",null,"If you close the developing IDE window and want to reopen it again. Just right-click the workload which in DevMode and choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Open Project"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"DevMode Only")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Open Project")," only works in development mode."))),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/develop/open-project.gif")}),(0,i.kt)("figcaption",null,"Open project in VS Code")),(0,i.kt)("h2",{id:"end-development-mode"},"End Development Mode"),(0,i.kt)("p",null,"When you finish developing, you can now end DevMode."),(0,i.kt)("h3",{id:"how-to"},"How to?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"VS Code:")," Click the ",(0,i.kt)("img",{src:(0,r.Z)("/img/icons/dev_end.svg"),width:"20"})," icon"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"JetBrains:")," Right click the workload that in DevMode and select ",(0,i.kt)("inlineCode",{parentName:"li"},"End DevMode"))),(0,i.kt)("h3",{id:"process"},"Process"),(0,i.kt)("p",null,"When ending DevMode, Nocalhost runs the following process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Stop file synchronization and port-forwarding (if any)"),(0,i.kt)("li",{parentName:"ol"},"Stop the DevContainer"),(0,i.kt)("li",{parentName:"ol"},"Delete the current versioned Pod"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#reset-pod"},"reset pod")," - Recreating and start the original versioned Pod")),(0,i.kt)("h2",{id:"other-useful-features"},"Other Useful Features"),(0,i.kt)("h3",{id:"reset-pod"},"Reset Pod"),(0,i.kt)("p",null,"Nocalhost can help you to roll back any Pod to its original version by ",(0,i.kt)("inlineCode",{parentName:"p"},"Reset Pod"),"."),(0,i.kt)("p",null,"For example, reset the ",(0,i.kt)("inlineCode",{parentName:"p"},"productpage")," deployment, and you should see similar messages below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\nStopping port forward\nAnnotation nocalhost.origin.spec.json found, use it\n Deleting current revision...\n Recreating original revision...\nService productpage has been reset.\n\n")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/develop/reset-pod.gif")}),(0,i.kt)("figcaption",null,"Reset pod")),(0,i.kt)("h3",{id:"modify-manifest"},"Modify Manifest"),(0,i.kt)("p",null,"Nocalhost has a built-in manifest editor that allows you to edit and apply the Kubernetes manifest within IDE. After modification, Nocalhost can apply the new manifest directly."),(0,i.kt)("h4",{id:"edit-and-apply"},"Edit and Apply"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"DevMode")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can not able to edit the manifest if the workload is in DevMode."))),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/develop/edit-manifest.gif")}),(0,i.kt)("figcaption",null,"Edit manifest")),(0,i.kt)("h4",{id:"delete"},"Delete"),(0,i.kt)("p",null,"COMING SOON"),(0,i.kt)("h3",{id:"clear-pvc"},"Clear PVC"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"DOCS COMING SOON")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})))}m.isMDXComponent=!0}}]);