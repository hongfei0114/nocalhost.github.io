"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[4520],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),o=n(79443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",c="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,o=e.block,u=e.defaultValue,s=e.values,p=e.groupId,m=e.className,f=r.Children.toArray(e.children),d=null!=s?s:f.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=u?u:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,y=a(),g=y.tabGroupChoices,h=y.setTabGroupChoices,b=(0,r.useState)(v),k=b[0],w=b[1],N=[];if(null!=p){var O=g[p];null!=O&&O!==k&&d.some((function(e){return e.value===O}))&&w(O)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),r=d[n].value;w(r),null!=p&&(h(p,r),setTimeout((function(){var e,n,r,o,a,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case"ArrowLeft":var o=N.indexOf(e.target)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:z,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,r.cloneElement)(f.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},43549:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i=n(55064),l=n(58215),c=["components"],u={title:"kustomize"},s="Deploy Kustomizations",p={unversionedId:"config/config-deploy-kustomize",id:"config/config-deploy-kustomize",isDocsHomePage:!1,title:"kustomize",description:"To deploy Kustomize with Nocalhost, you need to configure them within the application section of the .nocalhost/config.yaml.",source:"@site/docs/config/config-deploy-kustomize.md",sourceDirName:"config",slug:"/config/config-deploy-kustomize",permalink:"/docs/config/config-deploy-kustomize",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-deploy-kustomize.md",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1630036750,formattedLastUpdatedAt:"8/27/2021",frontMatter:{title:"kustomize"}},m=[{value:"Example",id:"example",children:[]}],f={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-kustomizations"},"Deploy Kustomizations"),(0,a.kt)("p",null,"To deploy Kustomize with Nocalhost, you need to configure them within the application section of the .",(0,a.kt)("inlineCode",{parentName:"p"},"nocalhost/config.yaml"),"."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"No need for kubectl")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You do not need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),", Nocalhost can deploy Kustomize."))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(i.Z,{defaultValue:"local",values:[{label:"From Local Directory",value:"local"},{label:"From Git Repo",value:"git"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"local",mdxType:"TabItem"},(0,a.kt)("p",null,"Deploy Kubernetes manifest from local directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigProperties:                       # struct    | required | Specify config properties\n    version: v2 \n\napplication:\n  name: bookinfo                        # string    | required | Application name\n  manifestType: kustomizeLocal          # string    | required | Application k8s manifest type\n  resourcePath: ["kustomize/base"]      # string[]  | required | Set the application resource path\n\n'))),(0,a.kt)(l.Z,{value:"git",mdxType:"TabItem"},(0,a.kt)("p",null,"Deploy Kubernetes manifest from Git repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigProperties:                       # struct    | required | Specify config properties\n    version: v2 \n\napplication:\n  name: bookinfo                        # string    | required | Application name\n  manifestType: kustomizeGit            # string    | required | Application k8s manifest type\n  resourcePath: ["kustomize/base"]      # string[]  | required | Set the application resource path\n  \n')))))}d.isMDXComponent=!0}}]);