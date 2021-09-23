"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[8934],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,v=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(v,r(r({ref:n},p),{},{components:t})):a.createElement(v,r({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13919:function(e,n,t){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}t.d(n,{b:function(){return a},Z:function(){return o}})},44996:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return r}});var a=t(52263),o=t(13919);function i(){var e=(0,a.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,l=void 0!==r&&r,c=i.absolute,s=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(l)return n+t;var p=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+p:p}(i,t,e,n)}}}function r(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(67294),o=t(79443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=t(86010),l="tabItem_1uMI",c="tabItemActive_2DSg";var s=function(e){var n,t=e.lazy,o=e.block,s=e.defaultValue,p=e.values,d=e.groupId,m=e.className,u=a.Children.toArray(e.children),v=null!=p?p:u.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=s?s:null==(n=u.find((function(e){return e.props.default})))?void 0:n.props.value,h=i(),g=h.tabGroupChoices,k=h.setTabGroupChoices,N=(0,a.useState)(f),b=N[0],y=N[1],C=[];if(null!=d){var w=g[d];null!=w&&w!==b&&v.some((function(e){return e.value===w}))&&y(w)}var E=function(e){var n=e.currentTarget,t=C.indexOf(n),a=v[t].value;y(a),null!=d&&(k(d,a),setTimeout((function(){var e,t,a,o,i,r,l,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,o=e.bottom,i=e.right,r=window,l=r.innerHeight,s=r.innerWidth,t>=0&&i<=s&&o<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c),setTimeout((function(){return n.classList.remove(c)}),2e3))}),150))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;t=C[a]||C[0];break;case"ArrowLeft":var o=C.indexOf(e.target)-1;t=C[o]||C[C.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},m)},v.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":b===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:A,onFocus:E,onClick:E},null!=t?t:n)}))),t?(0,a.cloneElement)(u.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},u.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}},79443:function(e,n,t){var a=(0,t(67294).createContext)(void 0);n.Z=a},78890:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=t(74034),o=t(79973),i=(t(67294),t(3905)),r=(t(55064),t(58215),t(44996),["components"]),l={title:"Advance"},c=void 0,s={unversionedId:"config/config-deployment-advance",id:"config/config-deployment-advance",isDocsHomePage:!1,title:"Advance",description:"Overview / Deploy Config / Advance",source:"@site/docs/config/config-deployment-advance.md",sourceDirName:"config",slug:"/config/config-deployment-advance",permalink:"/docs/config/config-deployment-advance",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-deployment-advance.md",tags:[],version:"current",lastUpdatedBy:"anurnomeru",lastUpdatedAt:1631782362,formattedLastUpdatedAt:"9/16/2021",frontMatter:{title:"Advance"},sidebar:"docs",previous:{title:"Spec",permalink:"/docs/config/config-deployment-spec"},next:{title:"Kubernetes Compatibility",permalink:"/docs/practice/cloud/k8s-compatible"}},p=[{value:"\u4f7f\u7528 ConfigMap \u914d\u7f6e\u90e8\u7f72\u914d\u7f6e",id:"\u4f7f\u7528-configmap-\u914d\u7f6e\u90e8\u7f72\u914d\u7f6e",children:[]},{value:"\u4f7f\u7528 Annotations \u914d\u7f6e\u90e8\u7f72\u914d\u7f6e",id:"\u4f7f\u7528-annotations-\u914d\u7f6e\u90e8\u7f72\u914d\u7f6e",children:[]},{value:"\u5982\u4f55\u90e8\u7f72 <code>Nocalhost Dep</code>",id:"\u5982\u4f55\u90e8\u7f72-nocalhost-dep",children:[]}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/config/config"},"Overview")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/config/config-deployment"},"Deploy Config")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/config/config-deployment-advance"},"Advance")),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"dep-\u7ec4\u4ef6\u4e0e\u5176\u4ed6\u914d\u7f6e\u65b9\u5f0f\u7684\u652f\u6301"},"Dep \u7ec4\u4ef6\u4e0e\u5176\u4ed6\u914d\u7f6e\u65b9\u5f0f\u7684\u652f\u6301"),(0,i.kt)("p",null,"Nocalhost \u7684\u5f00\u53d1\u914d\u7f6e\u652f\u6301\u591a\u79cd\u5f00\u53d1\u65b9\u5f0f\uff0c\u5982 ConfigMap\u3001Annotations \u7b49\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd9\u4e9b\u914d\u7f6e\u65b9\u5f0f",(0,i.kt)("strong",{parentName:"p"},"\u540c\u6837\u9002\u7528\u4e8e"),"\u90e8\u7f72\u914d\u7f6e\u3002\u4f46\u6709\u4e9b\u529f\u80fd\u662f\u9700\u8981\u914d\u5408 K8s WebHook \u529f\u80fd\u6765\u5b9e\u73b0\uff0c\u5728 Nocalhost \u4e2d\uff0c\u662f\u7531\u4e00\u4e2a\u53eb\u505a ",(0,i.kt)("inlineCode",{parentName:"p"},"Nocalhost-Dep")," \u7684\u7ec4\u4ef6\u6765\u627f\u62c5\u8fd9\u4e2a\u89d2\u8272\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Nocalhost Server")," \u5c06\u81ea\u52a8\u4e3a\u4f60\u90e8\u7f72\u8fd9\u4e2a\u7ec4\u4ef6\uff0c\u5982\u679c\u4f60\u6ca1\u6709\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Nocalhost Server"),"\uff0c\u90a3\u4e48\u5219\u9700\u8981\u989d\u5916\u8fdb\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"Nocalhost Dep")," \u7684\u90e8\u7f72\u3002"),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/docs/config/config-deployment-spec"},"Nocalhost \u63d0\u4f9b\u4e86\u54ea\u4e9b\u90e8\u7f72\u914d\u7f6e\uff1f")," \u4e2d\u4ecb\u7ecd\u4e86\u54ea\u4e9b\u90e8\u7f72\u914d\u7f6e\u9700\u8981\u989d\u5916\u90e8\u7f72 ",(0,i.kt)("inlineCode",{parentName:"p"},"Nocalhost Dep")," \u6765\u8fdb\u884c\u652f\u6301\u3002"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u4f7f\u7528-configmap-\u914d\u7f6e\u90e8\u7f72\u914d\u7f6e"},"\u4f7f\u7528 ConfigMap \u914d\u7f6e\u90e8\u7f72\u914d\u7f6e"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("a",{parentName:"p",href:"/docs/config/config-deployment-quickstart"},"\u90e8\u7f72\u914d\u7f6e\u5165\u95e8 \u2014\u2014\u2014 Nocalhost \u57fa\u7840\u90e8\u7f72\u914d\u7f6e")," \u63d0\u5230\u4e86\u5982\u4f55\u914d\u7f6e\u4e00\u4e2a\u7b80\u5355\u7684\u90e8\u7f72\u914d\u7f6e\u3002\u7ed3\u5408 ",(0,i.kt)("a",{parentName:"p",href:"/docs/config/configure#%E5%B0%86%E9%85%8D%E7%BD%AE%E6%94%BE%E7%BD%AE%E5%9C%A8-configmap-%E4%B8%AD"},"Nocalhost \u652f\u6301\u54ea\u4e9b\u914d\u7f6e\u65b9\u5f0f \u2014\u2014 \u5c06\u914d\u7f6e\u653e\u7f6e\u5728 configmap \u4e2d"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5f97\u5230 ConfigMap \u90e8\u7f72\u914d\u7f6e\uff1a"),(0,i.kt)("p",null,"\u6211\u4eec\u4e3a\u6b64\u51c6\u5907\u4e86\u4e00\u4e2a\u4f53\u9a8c\u9879\u76ee\uff0c\u5b83\u5c06\u81ea\u52a8\u90e8\u7f72 ",(0,i.kt)("inlineCode",{parentName:"p"},"Nocalhost Dep"),"\uff0c\u5e76\u4e14\u4f7f\u7528 ConfigMap \u7684\u5f62\u5f0f\u8fdb\u884c\u90e8\u7f72\u914d\u7f6e\u7684\u914d\u7f6e\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\u6765\u83b7\u53d6\u5e76\u67e5\u770b\u6b64\u9879\u76ee\uff08\u4f53\u9a8c\u8be5 Chart \u5305\u9700\u8981 ClusterAdmin \u7ea7\u522b\u7684\u6743\u9650\uff09")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/nocalhost/bookinfo && git checkout config/example\n")))),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u7136\u540e\u518d\u4f7f\u7528 Helm \u6765\u8fdb\u884c\u5b89\u88c5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm dep build ./charts/bookinfo && helm install bookinfo ./charts/bookinfo\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u90e8\u7f72\u914d\u7f6e\u7684\u5185\u5bb9\u672c\u8eab\u8fd9\u91cc\u4e0d\u505a\u8d58\u8ff0\uff0c\u6211\u4eec\u6765\u770b\u770b ",(0,i.kt)("inlineCode",{parentName:"p"},"charts/bookinfo/templates/nocalhost-app-config.yaml"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  # [Nocalhost]: nocalhost configmap should be named with dev.nocalhost.config.${appName}\n  name: "dev.nocalhost.config.{{ .Release.Name }}"\n  # [Nocalhost]: labels {dep-management: nocalhost} is also required\n  labels:\n    dep-management: nocalhost\n  annotations:\n    "helm.sh/hook": pre-install\ndata:\n  config: |-\n    {{ .Files.Get .Values.nocalhost.config.path | nindent 4 }}\n')),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8fd9\u4e2a ConfigMap \u9700\u8981\u6700\u5148\u88ab\u63d0\u4ea4\u7684 Api Server\uff0c\u5982\u5728 Helm \u7684\u5e94\u7528\u573a\u666f\u4e0b\uff0c\u5b83\u5e94\u8be5\u88ab\u58f0\u660e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"pre-install")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  annotations:\n    "helm.sh/hook": pre-install\n')))),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u5b83\u5f15\u5165\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},".Values.nocalhost.config.path")," \u6765\u6e32\u67d3\u90e8\u7f72\u914d\u7f6e\u7684\u4e3b\u4f53\u5185\u5bb9\u3002\u914d\u7f6e\u5b9e\u9645\u4e0a\u58f0\u660e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"./charts/bookinfo/example/config-from-cm/nocalhost-full-config.yaml")," \u4e2d\uff0c\u5b83\u662f\u4e00\u4e2a\u6807\u51c6\u7684 Nocalhost \u90e8\u7f72\u914d\u7f6e\uff0c\u6ca1\u6709\u505a\u989d\u5916\u7684\u6539\u9020\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  env:\n    - name: APP_ENV_1\n      value: EXAMPLE\n    - name: APP_ENV_2\n      value: EXAMPLE\n\n  services:\n    - name: productpage\n      serviceType: deployment\n      containers:\n        - name: productpage\n          install:\n            env:\n              - name: ENV_INJECT_EXAM\n                value: BASE\n\n    - name: details\n      serviceType: deployment\n      containers:\n        - install:\n            env:\n              - name: ENV_INJECT_EXAM\n                value: BASE\n\n    - name: ratings\n      serviceType: deployment\n      dependLabelSelector:\n        pods:\n          - "productpage"\n      containers:\n        - install:\n            env:\n              - name: ENV_INJECT_EXAM\n                value: BASE\n\n    - name: reviews\n      serviceType: deployment\n      dependLabelSelector:\n        pods:\n          - "productpage"\n      containers:\n        - install:\n            env:\n              - name: ENV_INJECT_EXAM\n                value: BASE\n\n    - name: authors\n      serviceType: deployment\n      dependLabelSelector:\n        pods:\n          - "productpage"\n      containers:\n        - install:\n            env:\n              - name: ENV_INJECT_EXAM\n                value: BASE\n')),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u4f7f\u7528-annotations-\u914d\u7f6e\u90e8\u7f72\u914d\u7f6e"},"\u4f7f\u7528 Annotations \u914d\u7f6e\u90e8\u7f72\u914d\u7f6e"),(0,i.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u4e0e ",(0,i.kt)("a",{parentName:"p",href:"/docs/config/configure#%E5%B0%86%E9%85%8D%E7%BD%AE%E6%94%BE%E7%BD%AE%E5%9C%A8-annotations-%E4%B8%AD"},"Nocalhost \u652f\u6301\u54ea\u4e9b\u914d\u7f6e\u65b9\u5f0f \u2014\u2014 \u5c06\u914d\u7f6e\u653e\u7f6e\u5728 annotations \u4e2d")," \u5b8c\u5168\u4e00\u81f4\u3002"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u989d\u5916\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7531\u4e8e Annotations \u7d27\u8ddf\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u6240\u4ee5\u4e0d\u652f\u6301\u5e94\u7528\u7ea7\u522b\u7684\u4e00\u4e9b\u914d\u7f6e\uff0c\u4ec5\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"application.services")," \u4e0b\u7684\u914d\u7f6e\u3002"))),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u540c\u6837\u4f7f\u7528\u4e0a\u8ff0\u8fd9\u4e2a\u4f53\u9a8c\u9879\u76ee\uff1a"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\u6765\u83b7\u53d6\u5e76\u67e5\u770b\u6b64\u9879\u76ee\uff08\u4f53\u9a8c\u8be5 Chart \u5305\u9700\u8981 ClusterAdmin \u7ea7\u522b\u7684\u6743\u9650\uff09")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/nocalhost/bookinfo && git checkout config/example\n")))),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u7136\u540e\u518d\u4f7f\u7528 Helm \u6765\u8fdb\u884c\u5b89\u88c5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm dep build ./charts/bookinfo && helm install bookinfo ./charts/bookinfo -f ./charts/bookinfo/values-annotation-config.yaml\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u6211\u4eec\u6307\u5b9a\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"values-annotation-config.yaml")," \u4f5c\u4e3a Values.yaml\uff0c\u91cc\u9762\u6307\u5b9a\u4e86\u5c06\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u6e32\u67d3\u5230\u5de5\u4f5c\u8d1f\u8f7d\u7684 Annotations \u4e2d\uff0c\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"./charts/bookinfo/templates/microservice-details.yaml")," \u4e3a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: details\n  {{- if .Values.nocalhost.annotations.path.details }}\n  annotations:\n    nocalhost.dev: |-\n      {{ .Files.Get .Values.nocalhost.annotations.path.details | nindent 6 }}\n  {{- end }}\n  labels:\n    app: details\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Helm \u4f1a\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},".Values.nocalhost.annotations.path.details")," \u6240\u914d\u7f6e\u8def\u5f84\u6e32\u67d3\u5230 yaml \u4e2d\uff0c\u5185\u5bb9\u5982\u4e0b\uff0c\u5373 Values \u4e2d\u6307\u5b9a\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"./charts/bookinfo/example/config-from-annotations/details.yaml"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"containers:\n  - install:\n      env:\n        - name: ENV_INJECT_EXAM\n          value: ANNOTATIONS\n")),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u5982\u4f55\u90e8\u7f72-nocalhost-dep"},"\u5982\u4f55\u90e8\u7f72 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Nocalhost Dep")),(0,i.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Nocalhost Server")," \u6765\u83b7\u5f97 ",(0,i.kt)("inlineCode",{parentName:"p"},"Nocalhost Dep")," \u7684\u5168\u90e8\u529f\u80fd\u3002"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"COMING SOON")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})))}m.isMDXComponent=!0}}]);