"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[8517],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93619:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=t(74034),a=t(79973),o=(t(67294),t(3905)),i=["components"],c={title:"Enhance configuration"},l=void 0,p={unversionedId:"config/config-enhance",id:"config/config-enhance",isDocsHomePage:!1,title:"Enhance configuration",description:"Overview / Spec / Enhance",source:"@site/docs/config/config-enhance.md",sourceDirName:"config",slug:"/config/config-enhance",permalink:"/docs/config/config-enhance",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-enhance.md",tags:[],version:"current",lastUpdatedBy:"anurnomeru",lastUpdatedAt:1631719830,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Enhance configuration"},sidebar:"docs",previous:{title:"Dev Container configuration",permalink:"/docs/config/config-dev-container"},next:{title:"Pattern",permalink:"/docs/config/config-pattern"}},s=[{value:"\u5f00\u53d1\u6a21\u5f0f\u540e\u81ea\u52a8\u7aef\u53e3\u8f6c\u53d1",id:"\u5f00\u53d1\u6a21\u5f0f\u540e\u81ea\u52a8\u7aef\u53e3\u8f6c\u53d1",children:[]},{value:"\u6e90\u7801\u5730\u5740",id:"\u6e90\u7801\u5730\u5740",children:[]},{value:"\u5f00\u53d1\u6a21\u5f0f\u540c\u6b65 Pattern",id:"\u5f00\u53d1\u6a21\u5f0f\u540c\u6b65-pattern",children:[]}],d={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/config/config"},"Overview")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/config-spec"},"Spec")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/config-enhance"},"Enhance")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u5f00\u53d1\u6a21\u5f0f\u540e\u81ea\u52a8\u7aef\u53e3\u8f6c\u53d1"},"\u5f00\u53d1\u6a21\u5f0f\u540e\u81ea\u52a8\u7aef\u53e3\u8f6c\u53d1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      portForward:\n        - 8080:80\n        - 3306:3306\n")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u5728\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u540e\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u81ea\u52a8"),"\u5c06\u67d0\u4e9b\u5f00\u53d1\u5bb9\u5668\u7aef\u53e3\u4e0e\u672c\u5730\u8fdb\u884c\u6253\u901a\uff0c\u53ef\u4ee5\u8fdb\u884c\u76f8\u5e94\u7684\u914d\u7f6e\u3002"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u5c0f\u7aef\u53e3\u6743\u9650\u95ee\u9898")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u672c\u5730\u76d1\u542c\u7684\u7aef\u53e3\u9700\u8981\u6743\u9650\uff0c\u5982 ubuntu \u6216\u8005 windows \u7cfb\u7edf\u4e0b\u7684\u5c0f\u7aef\u53e3(1024 \u4ee5\u4e0b)\uff0c\u5219\u65e0\u6cd5\u5728\u542f\u52a8\u5f00\u53d1\u6a21\u5f0f\u4ee5\u540e\u81ea\u52a8\u8f6c\u53d1\u3002"))),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u6e90\u7801\u5730\u5740"},"\u6e90\u7801\u5730\u5740"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      gitUrl: git@github.com:nocalhost/nocalhost.git\n")),(0,o.kt)("p",null,"\u6e90\u7801\u5730\u5740\u6307\u7684\u662f\u5f53\u524d\u670d\u52a1\u6240\u5bf9\u5e94\u7684 git \u6e90\u7801\u76ee\u5f55\uff0c\u7528\u4e8e\u5728",(0,o.kt)("strong",{parentName:"p"},"\u672c\u5730\u6ca1\u6709\u5bf9\u5e94\u6e90\u7801\u7684\u65f6\u5019\u5feb\u901f\u4fbf\u6377\u5c06\u6e90\u7801\u4e0b\u8f7d\u5230\u672c\u5730"),"\uff0c\u53ef\u652f\u6301 http/https \u534f\u8bae\u4e0e ssh \u534f\u8bae\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u80fd\u5426\u771f\u6b63\u514b\u9686\u4e0b\u6765",(0,o.kt)("strong",{parentName:"p"},"\u53d6\u51b3\u4e8e\u64cd\u4f5c\u8005\u4f7f\u7528\u7684\u8bbe\u5907\u662f\u5426\u6709\u6743\u9650")))),(0,o.kt)("p",null,"\u9002\u5b9c\u573a\u666f\u4e3a\u63d0\u524d\u914d\u7f6e\u597d\u5404\u4e2a\u670d\u52a1\u7684 gitUrl\uff0c\u8fd9\u6837\uff0c\u5bf9\u4e8e\u56e2\u961f\u534f\u4f5c\u6765\u8bf4\uff0c\u53ef\u4ee5\u7701\u53bb\u56e2\u961f\u4e4b\u95f4\u670d\u52a1\u4e0e\u4e1a\u52a1\u7684\u6c9f\u901a\u6210\u672c\u3002"),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u5f00\u53d1\u6a21\u5f0f\u540c\u6b65-pattern"},"\u5f00\u53d1\u6a21\u5f0f\u540c\u6b65 Pattern"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      sync:\n        type: send\n        filePattern:\n          - .\n        ignoreFilePattern:\n          - ".git"\n          - ".github"\n          - ".vscode"\n          - "node_modules"\n')),(0,o.kt)("p",null,"\u6211\u4eec\u77e5\u9053\uff0c\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u8981\u9009\u62e9\u4e00\u4e2a\u672c\u5730\u7684\u5173\u8054\u76ee\u5f55\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cNocalhost \u5c06\u540c\u6b65\u76ee\u5f55\u4e0b\u6240\u6709\u7684\u6587\u4ef6\u3002\u5982\u679c\u60f3\u8981\u5bf9\u540c\u6b65\u7684\u5185\u5bb9\u4f7f\u7528\u6a21\u5f0f\u5339\u914d\uff0c\u53ef\u4f7f\u7528\u5f3a\u5927\u7684 filePattern \u548c ignoreFilePattern \u6765\u8fdb\u884c\u5b9a\u5236\uff0c\u5982\u53ea\u540c\u6b65\u6784\u5efa\u4ea7\u7269\uff0c\u6216\u8005\u5ffd\u7565\u4e0e\u6784\u5efa\u65e0\u5173\u7684\u6240\u6709\u6587\u4ef6\u7b49\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/config/config-pattern"},"\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b Pattern \u7684\u8be6\u7ec6\u914d\u7f6e")))}u.isMDXComponent=!0}}]);