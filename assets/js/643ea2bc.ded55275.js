"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[1672],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(t),u=o,k=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var m=2;m<i;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13919:function(e,n,t){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}t.d(n,{b:function(){return a},Z:function(){return o}})},44996:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return r}});var a=t(52263),o=t(13919);function i(){var e=(0,a.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,l=void 0!==r&&r,s=i.absolute,m=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(l)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return m?e+c:c}(i,t,e,n)}}}function r(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(67294),o=t(79443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=t(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var m=function(e){var n,t=e.lazy,o=e.block,m=e.defaultValue,c=e.values,p=e.groupId,d=e.className,u=a.Children.toArray(e.children),k=null!=c?c:u.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=m?m:null==(n=u.find((function(e){return e.props.default})))?void 0:n.props.value,f=i(),g=f.tabGroupChoices,v=f.setTabGroupChoices,N=(0,a.useState)(h),y=N[0],b=N[1],w=[];if(null!=p){var C=g[p];null!=C&&C!==y&&k.some((function(e){return e.value===C}))&&b(C)}var z=function(e){var n=e.currentTarget,t=w.indexOf(n),a=k[t].value;b(a),null!=p&&(v(p,a),setTimeout((function(){var e,t,a,o,i,r,l,m;(e=n.getBoundingClientRect(),t=e.top,a=e.left,o=e.bottom,i=e.right,r=window,l=r.innerHeight,m=r.innerWidth,t>=0&&i<=m&&o<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;t=w[a]||w[0];break;case"ArrowLeft":var o=w.indexOf(e.target)-1;t=w[o]||w[w.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},d)},k.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":y===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:z,onClick:z},null!=t?t:n)}))),t?(0,a.cloneElement)(u.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},u.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},79443:function(e,n,t){var a=(0,t(67294).createContext)(void 0);n.Z=a},69059:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=t(74034),o=t(79973),i=(t(67294),t(3905)),r=(t(55064),t(58215),t(44996)),l=["components"],s={title:"Quick Start"},m=void 0,c={unversionedId:"config/config-deployment-quickstart",id:"config/config-deployment-quickstart",isDocsHomePage:!1,title:"Quick Start",description:"Overview / Deploy Config / Quick Start",source:"@site/docs/config/config-deployment-quickstart.md",sourceDirName:"config",slug:"/config/config-deployment-quickstart",permalink:"/docs/config/config-deployment-quickstart",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-deployment-quickstart.md",tags:[],version:"current",lastUpdatedBy:"anurnomeru",lastUpdatedAt:1635934825,formattedLastUpdatedAt:"11/3/2021",frontMatter:{title:"Quick Start"},sidebar:"docs",previous:{title:"Deploy Config",permalink:"/docs/config/config-deployment-en"},next:{title:"Spec",permalink:"/docs/config/config-deployment-spec"}},p=[{value:"\u90e8\u7f72\u914d\u7f6e\u7684\u7ed3\u6784",id:"\u90e8\u7f72\u914d\u7f6e\u7684\u7ed3\u6784",children:[]},{value:"\u5feb\u901f\u4e0a\u624b\u5404\u4e2a\u5e94\u7528\u7c7b\u578b\u7684\u90e8\u7f72\u914d\u7f6e",id:"\u5feb\u901f\u4e0a\u624b\u5404\u4e2a\u5e94\u7528\u7c7b\u578b\u7684\u90e8\u7f72\u914d\u7f6e",children:[{value:"RawManifest \u6700\u5c0f\u5316\u914d\u7f6e",id:"rawmanifest-\u6700\u5c0f\u5316\u914d\u7f6e",children:[]},{value:"Kustomize \u6700\u5c0f\u5316\u914d\u7f6e",id:"kustomize-\u6700\u5c0f\u5316\u914d\u7f6e",children:[]},{value:"Helm \u6700\u5c0f\u5316\u914d\u7f6e",id:"helm-\u6700\u5c0f\u5316\u914d\u7f6e",children:[]}]},{value:"\u5728\u90e8\u7f72\u914d\u7f6e\u4e2d\u9884\u5148\u914d\u7f6e\u597d\u5f00\u53d1\u914d\u7f6e",id:"\u5728\u90e8\u7f72\u914d\u7f6e\u4e2d\u9884\u5148\u914d\u7f6e\u597d\u5f00\u53d1\u914d\u7f6e",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}]}],d={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/config/config-en"},"Overview")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/config/config-deployment-en"},"Deploy Config")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/config/config-deployment-quickstart"},"Quick Start")),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"\u90e8\u7f72\u914d\u7f6e\u5165\u95e8--nocalhost-\u57fa\u7840\u90e8\u7f72\u914d\u7f6e"},"\u90e8\u7f72\u914d\u7f6e\u5165\u95e8 \u2014\u2014\u2014 Nocalhost \u57fa\u7840\u90e8\u7f72\u914d\u7f6e"),(0,i.kt)("p",null,"You can configured the deployment method of matching type to deploy your application in Kubernetes with Nocalhost IDE\nplugin. Nocalhost supports to use the following types to deploy application:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RawManifest"),(0,i.kt)("li",{parentName:"ul"},"Helm"),(0,i.kt)("li",{parentName:"ul"},"Kustomize")),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u90e8\u7f72\u914d\u7f6e\u7684\u7ed3\u6784"},"\u90e8\u7f72\u914d\u7f6e\u7684\u7ed3\u6784"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/config/config-overview-en"},"\u5f00\u53d1\u914d\u7f6e"),"\u662f\u90e8\u7f72\u914d\u7f6e\u7684\u5b50\u96c6\uff0c\u662f\u90e8\u7f72\u914d\u7f6e\u7684\u4e00\u90e8\u5206\u3002\u90e8\u7f72\u914d\u7f6e\u7684\u6700\u7cbe\u7b80\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: ""\n  manifestType: ""\n  resourcePath: []\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"application")," \u5c42\u7ea7\u4e0b\u5206\u522b\u4e3a\u5e94\u7528\u540d\u3001\u5e94\u7528\u7c7b\u578b\u3001\u4e0e\u8d44\u6e90\u6240\u5728\u6570\u7ec4\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5e94\u7528\u540d\u7528\u4e8e\u5728 Nocalhost \u63d2\u4ef6\u4e2d\u5c55\u793a\u5e76\u5f52\u6863\u805a\u5408\u8d44\u6e90\uff0c\u5982\u679c\u662f Helm \u7c7b\u578b\u7684\u5e94\u7528\uff0c\u5b83\u4e5f\u5c06\u6210\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"Release.Name")),(0,i.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7c7b\u578b\u5927\u4f53\u5206\u4e3a RawManifest\u3001Helm \u4e0e Kustomize \u4e09\u79cd\uff0c\u4e0d\u540c\u7684\u7c7b\u578b\u90e8\u7f72\u65b9\u5f0f\u6709\u6240\u4e0d\u540c\uff0c\u6240\u4ee5\u9700\u8981\u7c7b\u578b\u6765\u52a0\u4ee5\u533a\u5206\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6700\u540e\u5219\u662f\u8d44\u6e90\u8def\u5f84\uff0c\u5b83\u5e94\u8be5\u5305\u542b\u6240\u6709\u9700\u90e8\u7f72\u7684\u8d44\u6e90\u7684\u8def\u5f84")),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u90e8\u7f72\u914d\u7f6e\u72ec\u7279\u7684\u914d\u7f6e\u65b9\u5f0f \u2014\u2014\u2014\u2014 ",(0,i.kt)("inlineCode",{parentName:"h5"},"config.yaml"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u90e8\u7f72\u914d\u7f6e\u7684\u547d\u540d\u4e00\u822c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml"),"\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u547d\u540d\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml"),"\u3002"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u9700\u56fa\u5b9a\u653e\u5728 git \u4e3b\u76ee\u5f55\u4e0b\u7684 .nocalhost \u6587\u4ef6\u5939\u4e2d\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-dotenv"},"\u251c\u2500\u2500 .nocalhost\n\u2502\xa0\xa0 \u2514\u2500\u2500 config.yaml\n\u2514\u2500\u2500 YourManifests\n...\n")))),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u5feb\u901f\u4e0a\u624b\u5404\u4e2a\u5e94\u7528\u7c7b\u578b\u7684\u90e8\u7f72\u914d\u7f6e"},"\u5feb\u901f\u4e0a\u624b\u5404\u4e2a\u5e94\u7528\u7c7b\u578b\u7684\u90e8\u7f72\u914d\u7f6e"),(0,i.kt)("p",null,"\u6211\u4eec\u4f1a\u4ee5 bookinfo \u8fd9\u4e2a\u5e94\u7528\u4e3a\u5b9e\u4f8b\uff0c\u4ecb\u7ecd Nocalhost \u90e8\u7f72\u914d\u7f6e\u3002"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"rawmanifest-\u6700\u5c0f\u5316\u914d\u7f6e"},"RawManifest \u6700\u5c0f\u5316\u914d\u7f6e"),(0,i.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5b9e\u9645\u53ef\u7528\u7684 Nocalhost \u90e8\u7f72\u914d\u7f6e\uff0c\u8868\u660e\u8fd9\u662f\u4e00\u4e2a RawManifest \u5e94\u7528\uff0c\u5e76\u4e14\u5c06 apply manifest/templates \u76ee\u5f55\u4e0b\u7684\u6240\u6709\u8d44\u6e90\uff0c\u90e8\u7f72\u540e\uff0c\u8fd9\u4e2a\u5e94\u7528\u7684\u5e94\u7528\u540d\u5b57\u662f bookinfo\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: bookinfo\n  manifestType: rawManifestGit\n  resourcePath: [ "manifest/templates" ]\n')),(0,i.kt)("p",null,"\u8be5\u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff0c\u9664\u4e86 .nocalhost \u76ee\u5f55\u4e0b\u7684 config.yaml \u4ee5\u5916\uff0c\u6ca1\u6709\u5176\u4ed6\u989d\u5916\u7684\u4fee\u6539\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u251c\u2500\u2500 .nocalhost\n\u2502\xa0\xa0 \u2514\u2500\u2500 config.yaml\n\u2514\u2500\u2500 manifest\n    \u2514\u2500\u2500 templates\n        \u251c\u2500\u2500 authors.yaml\n        \u251c\u2500\u2500 bookinfo\n        \u2502\xa0\xa0 \u2514\u2500\u2500 dep-job.yaml\n        \u251c\u2500\u2500 detail.yaml\n        \u251c\u2500\u2500 pre-install\n        \u2502\xa0\xa0 \u251c\u2500\u2500 print-num-job-01.yaml\n        \u2502\xa0\xa0 \u2514\u2500\u2500 print-num-job-02.yaml\n        \u251c\u2500\u2500 pre-install-cm.yaml\n        \u251c\u2500\u2500 productpage\n        \u2502\xa0\xa0 \u2514\u2500\u2500 productpage.yaml\n        \u251c\u2500\u2500 ratings.yaml\n        \u2514\u2500\u2500 reviews.yaml\n")),(0,i.kt)("span",{id:"deploy"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\u6765\u83b7\u53d6\u5e76\u67e5\u770b\u6b64\u9879\u76ee")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/nocalhost/bookinfo && git checkout manifest/config/example\n")))),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"\u5728-nocalhost-\u63d2\u4ef6\u4e2d\u90e8\u7f72\u8fd9\u4e2a\u5e94\u7528"},"\u5728 Nocalhost \u63d2\u4ef6\u4e2d\u90e8\u7f72\u8fd9\u4e2a\u5e94\u7528"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 Nocalhost \u63d2\u4ef6\u4e2d\u4efb\u610f\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace")," \u70b9\u51fb\u53f3\u952e\uff0c\u518d\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy Application"),"\uff0c\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"p"},"clone from git"),"\u3002 \u7136\u540e\u586b\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/nocalhost/bookinfo")," \u8fd9\u4e2a\u5730\u5740\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest/config/example")," \u5206\u652f\u3002"),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/config/deploy-config-install-manifest.png")})),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u70b9\u51fb\u90e8\u7f72\u5373\u53ef\uff0cNocalhost \u5c06\u4e3a\u4f60\u90e8\u7f72\u8fd9\u4e2a RawManifest \u5e94\u7528\uff0c\u5f53\u524d ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace")," \u4e0b\uff0c\u5c06\u51fa\u73b0 bookinfo \u8fd9\u4e2a\u5e94\u7528\u3002"),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/config/deploy-config-install-manifest-success.png")})),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"\u5b9a\u5236\u5316-resourcepath-\u4ee5\u53ca-ignoredpath"},"\u5b9a\u5236\u5316 resourcePath \u4ee5\u53ca ignoredPath"),(0,i.kt)("p",null,"resourcePath \u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u53ef\u4ee5\u81ea\u7531\u5b9a\u5236\u9700\u8981\u90e8\u7f72\u7684 RawManifest\uff0c\u4f8b\u5982\u5bf9\u4e8e\u4e0a\u8ff0\u7684\u5e94\u7528\u6765\u8bf4\uff0c\u5982\u679c\u53ea\u60f3\u5e94\u7528\u90a3\u4e9b job.yaml \uff0c\u53ef\u4ee5\u66f4\u6539\u914d\u7f6e\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: bookinfo\n  manifestType: rawManifestGit\n  resourcePath: [ "manifest/templates/bookinfo", "manifest/templates/pre-install" ]\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u6b64\u5916\uff0c\u90e8\u7f72\u914d\u7f6e\u540c\u6837\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"ignoredPath"),"\uff0c\u4f8b\u5982\u5bf9\u4e8e\u4e0a\u8ff0\u7684\u5e94\u7528\u6765\u8bf4\uff0c\u5982\u679c\u4e0d\u60f3\u5e94\u7528\u6240\u6709 job.yaml \uff0c\u53ef\u4ee5\u66f4\u6539\u914d\u7f6e\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: bookinfo\n  manifestType: rawManifestGit\n  resourcePath: [ "manifest/templates" ]\n  ignorePath: [ "manifest/templates/bookinfo", "manifest/templates/pre-install" ]\n')),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"kustomize-\u6700\u5c0f\u5316\u914d\u7f6e"},"Kustomize \u6700\u5c0f\u5316\u914d\u7f6e"),(0,i.kt)("p",null,"\u4e0e RawManifest \u7c7b\u4f3c\uff0cKustomize \u7c7b\u578b\u7684 config.yaml \u5982\u4e0b\uff0c\u610f\u4e3a\u8fd9\u662f\u4e00\u4e2a Kustomize \u5e94\u7528\uff0c\u540d\u5b57\u4e3a bookinfo-kustomize\uff0c\u914d\u7f6e\u7684 resourcePath \u5bf9\u5e94\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -k")," \u4f7f\u7528\u7684\u76ee\u5f55\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'application:\n  name: bookinfo-kustomize\n  manifestType: kustomizeGit\n  resourcePath: ["kustomize/base"]\n')),(0,i.kt)("p",null,"\u8be5\u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"kustomize/base")," \u5bf9\u5e94\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")," \u6240\u5728\u7684\u76f8\u5bf9\u76ee\u5f55\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u251c\u2500\u2500 .nocalhost\n\u2502\xa0\xa0 \u2514\u2500\u2500 config.yaml\n\u2514\u2500\u2500 kustomize\n    \u2514\u2500\u2500 base\n        \u251c\u2500\u2500 authors.yaml\n        \u251c\u2500\u2500 dep-job.yaml\n        \u251c\u2500\u2500 detail.yaml\n        \u251c\u2500\u2500 kustomization.yaml\n        \u251c\u2500\u2500 pre-install\n        \u2502\xa0\xa0 \u251c\u2500\u2500 print-num-job-01.yaml\n        \u2502\xa0\xa0 \u2514\u2500\u2500 print-num-job-02.yaml\n        \u251c\u2500\u2500 pre-install-cm.yaml\n        \u251c\u2500\u2500 productpage.yaml\n        \u251c\u2500\u2500 ratings.yaml\n        \u2514\u2500\u2500 reviews.yaml\n")),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\u6765\u83b7\u53d6\u5e76\u67e5\u770b\u6b64\u9879\u76ee")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/nocalhost/bookinfo && git checkout kustomize/config/example\n")))),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5c1d\u8bd5\u7528 Nocalhost \u63d2\u4ef6\u4e2d\u90e8\u7f72\u6b64\u9879\u76ee")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u53ef\u4ee5\u5728\u672c\u6587\u524d\u9762\u63d0\u5230\u7684 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"#deploy"},"\u5982\u4f55\u5728\u63d2\u4ef6\u4e2d\u90e8\u7f72 Nocalhost \u5e94\u7528\u4e2d"))," \u8fdb\u884c\u64cd\u4f5c\uff0c\u5bf9\u5e94\u7684\u5206\u652f\u540d\u586b\u5199 ",(0,i.kt)("inlineCode",{parentName:"p"},"kustomize/config/example")))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"helm-\u6700\u5c0f\u5316\u914d\u7f6e"},"Helm \u6700\u5c0f\u5316\u914d\u7f6e"),(0,i.kt)("p",null,"\u4e0e Kustomize \u7c7b\u4f3c\uff0cHelm \u7c7b\u578b\u7684 config.yaml \u5982\u4e0b\uff0c\u610f\u4e3a\u8fd9\u662f\u4e00\u4e2a Helm \u5e94\u7528\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Release.Name")," \u4e3a bookinfo-helm\uff0c\u914d\u7f6e\u7684 resourcePath \u5bf9\u5e94\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"helm install")," \u4f7f\u7528\u7684\u76ee\u5f55\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'application:\n  name: bookinfo-helm\n  manifestType: helmGit\n  resourcePath: ["charts/bookinfo"]\n')),(0,i.kt)("p",null,"\u8be5\u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"charts/bookinfo")," \u5bf9\u5e94\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," \u6240\u5728\u7684\u76f8\u5bf9\u76ee\u5f55\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u251c\u2500\u2500 .nocalhost\n\u2502\xa0\xa0 \u2514\u2500\u2500 config.yaml\n\u2514\u2500\u2500 charts\n    \u2514\u2500\u2500 bookinfo\n        \u251c\u2500\u2500 Chart.yaml\n        \u251c\u2500\u2500 README.md\n        \u251c\u2500\u2500 templates\n        \u2502\xa0\xa0 \u251c\u2500\u2500 _helpers.tpl\n        \u2502\xa0\xa0 \u251c\u2500\u2500 dep-job.yaml\n        \u2502\xa0\xa0 \u251c\u2500\u2500 microservice-authors.yaml\n        \u2502\xa0\xa0 \u251c\u2500\u2500 microservice-details.yaml\n        \u2502\xa0\xa0 \u251c\u2500\u2500 microservice-productpage.yaml\n        \u2502\xa0\xa0 \u251c\u2500\u2500 microservice-ratings.yaml\n        \u2502\xa0\xa0 \u2514\u2500\u2500 microservice-reviews.yaml\n        \u251c\u2500\u2500 values.yaml\n        \u2514\u2500\u2500 values_example.yaml\n")),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\u6765\u83b7\u53d6\u5e76\u67e5\u770b\u6b64\u9879\u76ee")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/nocalhost/bookinfo && git checkout helm/config/example\n")))),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5c1d\u8bd5\u7528 Nocalhost \u63d2\u4ef6\u4e2d\u90e8\u7f72\u6b64\u9879\u76ee")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u53ef\u4ee5\u5728\u672c\u6587\u524d\u9762\u63d0\u5230\u7684 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"#deploy"},"\u5982\u4f55\u5728\u63d2\u4ef6\u4e2d\u90e8\u7f72 Nocalhost \u5e94\u7528\u4e2d"))," \u8fdb\u884c\u64cd\u4f5c\uff0c\u5bf9\u5e94\u7684\u5206\u652f\u540d\u586b\u5199 ",(0,i.kt)("inlineCode",{parentName:"p"},"helm/config/example")))),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u5728\u90e8\u7f72\u914d\u7f6e\u4e2d\u9884\u5148\u914d\u7f6e\u597d\u5f00\u53d1\u914d\u7f6e"},"\u5728\u90e8\u7f72\u914d\u7f6e\u4e2d\u9884\u5148\u914d\u7f6e\u597d\u5f00\u53d1\u914d\u7f6e"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u9605\u8bfb\u672c\u5c0f\u8282\u4e4b\u524d\uff0c\u5df2\u7ecf\u9ed8\u8ba4\u4f60\u5df2\u77e5\u6653\u5f00\u53d1\u914d\u7f6e\u5e94\u5982\u4f55\u914d\u7f6e\u3002"))),(0,i.kt)("p",null,"\u5728 Nocalhost \u90e8\u7f72\u914d\u7f6e\u4e2d\uff0c\u53ef\u4ee5\u5c06\u5f00\u53d1\u914d\u7f6e\u8fdb\u884c\u5d4c\u5165\u3002\u8fd9\u6837\u6709\u4e00\u4e2a\u597d\u5904\uff0c\u53ef\u4ee5\u5c06 Nocalhost \u914d\u7f6e\u690d\u5165\u5230\u5e94\u7528\u90e8\u7f72\u8fc7\u7a0b\u4e2d\uff0c\u7701\u53bb\u5728\u65b0\u73af\u5883\u4e2d\u91cd\u590d\u8fdb\u884c\u914d\u7f6e Nocalhost \u7684\u5de5\u4f5c\u3002\u4e24\u8005\u5e76\u4e0d\u51b2\u7a81\uff0c\u76f8\u5f53\u4e8e\u5728 Nocalhost \u90e8\u7f72\u5e94\u7528\u540e\uff0c\u81ea\u52a8\u5c06\u5f00\u53d1\u914d\u7f6e\u4e0e\u670d\u52a1\u8fdb\u884c\u5173\u8054\u3002"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5728\u524d\u9762\u7684\u90e8\u7f72\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u59cb\u7ec8\u90e8\u7f72 bookinfo \u8fd9\u4e2a\u5e94\u7528\uff0c\u91cc\u9762\u6709\u51e0\u4e2a\u7c7b\u578b\u4e3a Deployment \u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u6211\u4eec\u6765\u5bf9\u5b83\u4eec\u8fdb\u884c\u4e00\u4e9b\u914d\u7f6e\uff0c\u6700\u7ec8\u5982\u4e0b\u3002"),(0,i.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u7684\u6700\u5c0f\u5316\u914d\u7f6e\u4ee5\u5916\uff0c\u6211\u4eec\u5f15\u5165\u4e86 services \u8fd9\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u5185\u7684\u5143\u7d20\u5219\u662f\u6211\u4eec\u719f\u6089\u7684",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/config/config-spec-en"},"\u5f00\u53d1\u914d\u7f6e")),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: bookinfo\n  manifestType: rawManifestGit\n  resourcePath: [ "manifest/templates" ]\n  \n  services:\n    - name: productpage\n      serviceType: deployment\n      containers:\n        - name: productpage\n          dev:\n            gitUrl: https://e.coding.net/nocalhost/nocalhost/bookinfo-productpage.git\n            image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage-with-pydevd\n            shell: bash\n            workDir: /home/nocalhost-dev\n            command:\n              run:\n                - ./run.sh\n              debug:\n                - ./debug.sh\n            debug:\n              remoteDebugPort: 9009\n            sync: \n              type: send\n              filePattern: \n                - ./\n              ignoreFilePattern:\n                - ".git"\n                - ".github"\n                - ".idea"\n            portForward:\n            - 39080:9080\n            resources:\n              limits:\n                cpu: "1"\n                memory: 1Gi\n              requests:\n                cpu: "0.5"\n                memory: 512Mi\n                \n    - name: details\n      serviceType: deployment\n      containers:\n        - dev:\n            gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n            image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim\n            shell: bash\n            workDir: /home/nocalhost-dev\n            sync: \n              type: send\n              filePattern: \n                - ./\n              ignoreFilePattern:\n                - ".git"\n                - ".github"\n            env: \n            - name: DEBUG\n              value: "true"\n')),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u53ef\u4ee5\u4f7f\u7528 QuickStart \u793a\u4f8b\u5e94\u7528\u6765\u4f53\u9a8c")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"}," ",(0,i.kt)("a",{parentName:"strong",href:"/docs/guides/deploy/deploy-demo"},"Demo \u4e2d\u4f7f\u7528\u7684\u5e94\u7528\u5c31\u662f\u5728\u90e8\u7f72\u914d\u7f6e\u4e2d\u5d4c\u5165\u4e86\u5f00\u53d1\u914d\u7f6e"))),(0,i.kt)("p",{parentName:"div"},"\u5728\u90e8\u7f72\u5b8c\u6bd5\u7684 Demo \u5e94\u7528\u4e2d\uff0c\u968f\u610f\u53f3\u952e\u70b9\u51fb\u5e94\u7528\u5e95\u4e0b\u7684\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment/details")," \uff0c\u53d1\u73b0\u5b83\u5df2\u7ecf\u63d0\u524d\u914d\u7f6e\u597d\u4e86\u4e00\u7cfb\u5217\u5f00\u53d1\u914d\u7f6e\uff0c\u6211\u4eec\u53ef\u4ee5\u6309\u7167\u9884\u8bbe\u7684\u914d\u7f6e\u76f4\u63a5\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u3002"))))}u.isMDXComponent=!0}}]);