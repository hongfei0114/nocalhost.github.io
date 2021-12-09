"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[1569],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return v}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),v=i,k=d["".concat(p,".").concat(v)]||d[v]||m[v]||r;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72144:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=t(22122),i=t(19756),r=(t(67294),t(3905)),o=["components"],l={title:"Enhance configuration"},p={unversionedId:"config/config-enhance",id:"config/config-enhance",isDocsHomePage:!1,title:"Enhance configuration",description:"Overview / Spec / Enhance",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/config/config-enhance.md",sourceDirName:"config",slug:"/config/config-enhance",permalink:"/zh-CN/docs/config/config-enhance",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",frontMatter:{title:"Enhance configuration"},sidebar:"docs",previous:{title:"\u5f00\u53d1\u5bb9\u5668",permalink:"/zh-CN/docs/config/config-dev-container-en"},next:{title:"Pattern",permalink:"/zh-CN/docs/config/config-pattern"}},c=[{value:"\u5f00\u53d1\u6a21\u5f0f\u540e\u81ea\u52a8\u7aef\u53e3\u8f6c\u53d1",id:"\u5f00\u53d1\u6a21\u5f0f\u540e\u81ea\u52a8\u7aef\u53e3\u8f6c\u53d1",children:[]},{value:"\u6e90\u7801\u5730\u5740",id:"\u6e90\u7801\u5730\u5740",children:[]},{value:"\u6587\u4ef6\u540c\u6b65",id:"\u6587\u4ef6\u540c\u6b65",children:[]}],s={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/config/config-en"},"Overview")," / ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/config/config-spec-en"},"Spec")," / ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/config/config-enhance"},"Enhance")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u5f00\u53d1\u6a21\u5f0f\u540e\u81ea\u52a8\u7aef\u53e3\u8f6c\u53d1"},"\u5f00\u53d1\u6a21\u5f0f\u540e\u81ea\u52a8\u7aef\u53e3\u8f6c\u53d1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      portForward:\n        - 8080:80\n        - 3306:3306\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u5728\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u540e\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u52a8"),"\u5c06\u67d0\u4e9b\u5f00\u53d1\u5bb9\u5668\u7aef\u53e3\u4e0e\u672c\u5730\u8fdb\u884c\u6253\u901a\uff0c\u53ef\u4ee5\u8fdb\u884c\u76f8\u5e94\u7684\u914d\u7f6e\u3002"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u5c0f\u7aef\u53e3\u6743\u9650\u95ee\u9898")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u672c\u5730\u76d1\u542c\u7684\u7aef\u53e3\u9700\u8981\u6743\u9650\uff0c\u5982 ubuntu \u6216\u8005 windows \u7cfb\u7edf\u4e0b\u7684\u5c0f\u7aef\u53e3(1024 \u4ee5\u4e0b)\uff0c\u5219\u65e0\u6cd5\u5728\u542f\u52a8\u5f00\u53d1\u6a21\u5f0f\u4ee5\u540e\u81ea\u52a8\u8f6c\u53d1\u3002"))),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u6e90\u7801\u5730\u5740"},"\u6e90\u7801\u5730\u5740"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      gitUrl: git@github.com:nocalhost/nocalhost.git\n")),(0,r.kt)("p",null,"\u6e90\u7801\u5730\u5740\u6307\u7684\u662f\u5f53\u524d\u670d\u52a1\u6240\u5bf9\u5e94\u7684 git \u6e90\u7801\u76ee\u5f55\uff0c\u7528\u4e8e\u5728",(0,r.kt)("strong",{parentName:"p"},"\u672c\u5730\u6ca1\u6709\u5bf9\u5e94\u6e90\u7801\u7684\u65f6\u5019\u5feb\u901f\u4fbf\u6377\u5c06\u6e90\u7801\u4e0b\u8f7d\u5230\u672c\u5730"),"\uff0c\u53ef\u652f\u6301 http/https \u534f\u8bae\u4e0e ssh \u534f\u8bae\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u80fd\u5426\u771f\u6b63\u514b\u9686\u4e0b\u6765",(0,r.kt)("strong",{parentName:"p"},"\u53d6\u51b3\u4e8e\u64cd\u4f5c\u8005\u4f7f\u7528\u7684\u8bbe\u5907\u662f\u5426\u6709\u6743\u9650")))),(0,r.kt)("p",null,"\u9002\u5b9c\u573a\u666f\u4e3a\u63d0\u524d\u914d\u7f6e\u597d\u5404\u4e2a\u670d\u52a1\u7684 gitUrl\uff0c\u8fd9\u6837\uff0c\u5bf9\u4e8e\u56e2\u961f\u534f\u4f5c\u6765\u8bf4\uff0c\u53ef\u4ee5\u7701\u53bb\u56e2\u961f\u4e4b\u95f4\u670d\u52a1\u4e0e\u4e1a\u52a1\u7684\u6c9f\u901a\u6210\u672c\u3002"),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u6587\u4ef6\u540c\u6b65"},"\u6587\u4ef6\u540c\u6b65"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      sync:\n        type: send\n        mode: pattern\n        filePattern:\n          - .\n        ignoreFilePattern:\n          - ".git"\n          - ".github"\n          - ".vscode"\n          - "node_modules"\n')),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u6587\u4ef6\u540c\u6b65\u7684\u914d\u7f6e\u5305\u62ec\u4e09\u4e2a\u90e8\u5206\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," \u5176\u4e00\u662f\u540c\u6b65\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"containers[].dev.sync.type"),"\uff0c\u53ef\u914d\u7f6e\u4e3a"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"send\uff0c\u610f\u4e3a\u4ec5\u53d1\u9001\uff0c\u6240\u6709\u7684\u53d8\u66f4\u4ee5\u672c\u5730\u4e3a\u51c6\uff0c\u8fdc\u7a0b\u7684\u53d8\u66f4\u4e0d\u4f1a\u5f71\u54cd\u5230\u672c\u5730\uff08\u9ed8\u8ba4\u65b9\u5f0f\uff09"),(0,r.kt)("li",{parentName:"ul"},"sendReceive\uff0c\u610f\u4e3a\u53cc\u5411\u540c\u6b65\uff0c\u5373\u4e00\u7aef\u7684\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u7b49\u64cd\u4f5c\u5c06\u540c\u6b65\u5230\u53e6\u4e00\u7aef")))),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," \u5176\u4e8c\u662f\u662f\u5426\u5f00\u542f\u672c\u5730\u6587\u4ef6\u5220\u9664\u4fdd\u62a4\uff0c\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"containers[].dev.sync.deleteProtection"),"\uff0c\u4e3a\u5e03\u5c14\u503c"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," ","\xa0"," ","\xa0"," - ")," \u5982\u679c\u5f00\u542f\u6b64\u529f\u80fd\uff0c\u5219\u672c\u5730\u4e0d\u4f1a\u540c\u6b65\u8fdc\u7aef\u7684\u5220\u9664\u64cd\u4f5c\uff08\u9ed8\u8ba4\u5f00\u542f\u6b64\u529f\u80fd\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," ","\xa0"," ","\xa0"," - ")," \u5982\u679c\u5173\u95ed\u6b64\u529f\u80fd\uff0c\u4e14\u5f00\u542f\u53cc\u5411\u540c\u6b65\u7684\u60c5\u51b5\u4e0b\uff0c\u5219\u5f53\u4e00\u4e2a\u6587\u4ef6\u5728\u8fdc\u7aef\u88ab\u5220\u9664\uff0c\u672c\u5730\u4e5f\u4f1a\u76f8\u5e94\u5c06\u5176\u8fdb\u884c\u5220\u9664\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," \u5176\u4e8c\u662f\u540c\u6b65\u5ffd\u7565\u63a7\u5236\uff0c\u6211\u4eec\u77e5\u9053\uff0c\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u8981\u9009\u62e9\u4e00\u4e2a\u672c\u5730\u7684\u5173\u8054\u76ee\u5f55\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cNocalhost \u5c06\u540c\u6b65\u76ee\u5f55\u4e0b\u6240\u6709\u7684\u6587\u4ef6\uff0c\u5982\u679c\u4e0d\u60f3\u8981\u540c\u6b65\u6240\u6709\u5185\u5bb9\uff0c\u5219\u53ef\u4ee5\u8fdb\u884c\u5b9a\u5236\u3002"),(0,r.kt)("p",null,"Nocalhost \u63d0\u4f9b\u4e86\u4e24\u79cd\u540c\u6b65\u5185\u5bb9\u63a7\u5236\u65b9\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"containers[].dev.sync.mode")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"pattern\uff0c\u610f\u4e3a\u4f7f\u7528\u6a21\u5f0f\u5339\u914d\u6765\u8fdb\u884c\u540c\u6b65\u5185\u5bb9\u63a7\u5236\uff08\u9ed8\u8ba4\u65b9\u5f0f\uff09"),(0,r.kt)("li",{parentName:"ul"},"gitIgnore\uff0c\u610f\u4e3a\u4f7f\u7528\u76ee\u5f55\u7684 gitIgnore \u6765\u5ffd\u7565\u90e8\u5206\u6587\u4ef6\u8fdb\u884c\u4e0a\u4f20")))),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"\u4f7f\u7528-pattern-\u6a21\u5f0f"},"\u4f7f\u7528 pattern \u6a21\u5f0f"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u8981\u5bf9\u540c\u6b65\u7684\u5185\u5bb9\u4f7f\u7528\u6a21\u5f0f\u5339\u914d\uff0c\u53ef\u914d\u7f6e filePattern \u548c ignoreFilePattern \u6765\u8fdb\u884c\u5b9a\u5236\uff0c\u5982\u53ea\u540c\u6b65\u6784\u5efa\u4ea7\u7269\uff0c\u6216\u8005\u5ffd\u7565\u4e0e\u6784\u5efa\u65e0\u5173\u7684\u6240\u6709\u6587\u4ef6\u7b49\u3002"),(0,r.kt)("p",null,"\u5982\u672c\u5c0f\u8282\u6240\u7ed9\u51fa\u7684\u793a\u4f8b\u610f\u4e3a\uff0c\u4ee5 ",(0,r.kt)("strong",{parentName:"p"},"\u53ea\u53d1\u9001")," \u7684\u5f62\u5f0f\u6765\u8fdb\u884c\u6587\u4ef6\u540c\u6b65\uff0c\u540c\u6b65\u6240\u6709\u7684\u6587\u4ef6\u5185\u5bb9\uff0c\u5e76\u5ffd\u7565\u547d\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},".git"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".github"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".vscode")," \u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u7684\u6587\u4ef6\u4e0e\u76ee\u5f55\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Pattern")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/config/config-pattern"},"\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b Pattern \u7684\u8be6\u7ec6\u914d\u7f6e\u4e0e\u8bed\u6cd5")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\u4f7f\u7528-gitignore-\u6a21\u5f0f"},"\u4f7f\u7528 gitIgnore \u6a21\u5f0f"),(0,r.kt)("p",null,"\u4f7f\u7528\u8fd9\u79cd\u6a21\u5f0f\u8f83\u4e3a\u7b80\u4fbf\uff0c\u5b83\u5c06\u81ea\u52a8\u4f7f\u7528\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," \u9879\u76ee\u7684\u5ffd\u7565\u914d\u7f6e\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," \u7b49\u3002"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u9650\u5236")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7531\u4e8e\u6b64\u529f\u80fd\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," \u5b9e\u73b0\uff0c\u6240\u4ee5\u5f53\u524d\u4f7f\u7528\u7684\u8bbe\u5907\u4e0a\u5fc5\u987b\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"git"),"\u3002\u53e6\u5916\uff0c\u540c\u6b65\u76ee\u5f55\u9700\u8981\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," \u9879\u76ee\u6240\u5728\u7684\u76ee\u5f55\u3002"),(0,r.kt)("p",{parentName:"div"},'\u5982\u679c\u4e0d\u6ee1\u8db3\u4e0a\u8ff0\u4e24\u4e2a\u6761\u4ef6\uff0cNocalhost \u5c06\u4e0d\u542f\u7528\u540c\u6b65\u5185\u5bb9\u63a7\u5236\uff0c\u8868\u73b0\u7684\u884c\u4e3a\u4e3a"\u540c\u6b65\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6"\uff0c',(0,r.kt)("strong",{parentName:"p"},"\u76f8\u5f53\u4e8e\u6ca1\u6709\u8fdb\u884c\u4efb\u4f55\u540c\u6b65\u914d\u7f6e\u63a7\u5236"),"\u3002"))),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u54ea\u4e9b\u6587\u4ef6\u88ab\u5ffd\u7565\u4e86\uff1f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u5b9a\u4f4d\u5230\u540c\u6b65\u76ee\u5f55\u4e0b\uff08\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"cd /yourpath"),"\uff09\uff0c\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"git status --ignored=matching -s")," \u6765\u67e5\u770b\u90a3\u4e9b\u88ab\u5ffd\u7565\u7684\u6587\u4ef6/\u6587\u4ef6\u5939\u3002\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"!!")," \u5f00\u5934\u7684\u6587\u4ef6/\u6587\u4ef6\u5939\u5c06\u4e0d\u4f1a\u88ab\u540c\u6b65\u5230\u8fdc\u7aef\u3002"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      sync:\n        type: send\n        mode: gitIgnore\n")))}m.isMDXComponent=!0}}]);