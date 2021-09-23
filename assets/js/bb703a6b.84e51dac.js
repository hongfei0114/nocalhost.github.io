"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[1110],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),p=o,g=m["".concat(u,".").concat(p)]||m[p]||d[p]||a;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},44996:function(e,n,t){t.d(n,{C:function(){return a},Z:function(){return l}});var r=t(52263),o=t(13919);function a(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,l=a.forcePrependBaseUrl,i=void 0!==l&&l,u=a.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(i)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+c:c}(a,t,e,n)}}}function l(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(67294),o=t(79443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(86010),i="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var n,t=e.lazy,o=e.block,s=e.defaultValue,c=e.values,d=e.groupId,m=e.className,p=r.Children.toArray(e.children),g=null!=c?c:p.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=s?s:null==(n=p.find((function(e){return e.props.default})))?void 0:n.props.value,f=a(),v=f.tabGroupChoices,k=f.setTabGroupChoices,b=(0,r.useState)(h),y=b[0],N=b[1],w=[];if(null!=d){var D=v[d];null!=D&&D!==y&&g.some((function(e){return e.value===D}))&&N(D)}var P=function(e){var n=e.currentTarget,t=w.indexOf(n),r=g[t].value;N(r),null!=d&&(k(d,r),setTimeout((function(){var e,t,r,o,a,l,i,s;(e=n.getBoundingClientRect(),t=e.top,r=e.left,o=e.bottom,a=e.right,l=window,i=l.innerHeight,s=l.innerWidth,t>=0&&a<=s&&o<=i&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;t=w[r]||w[0];break;case"ArrowLeft":var o=w.indexOf(e.target)-1;t=w[o]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},m)},g.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":y===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:P,onClick:P},null!=t?t:n)}))),t?(0,r.cloneElement)(p.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},p.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},79443:function(e,n,t){var r=(0,t(67294).createContext)(void 0);n.Z=r},87539:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return h}});var r=t(74034),o=t(79973),a=(t(67294),t(3905)),l=t(55064),i=t(58215),u=t(44996),s=["components"],c={},d="Remote Run",m={unversionedId:"guides/remote-run",id:"guides/remote-run",isDocsHomePage:!1,title:"Remote Run",description:"When you start the new container in Kubernetes cluster, Kubernetes will not start any process within this container. Nocalhost can uses run configurations to run your code in Kubernetes cluster like to use the run feature within IDE.",source:"@site/docs/guides/remote-run.md",sourceDirName:"guides",slug:"/guides/remote-run",permalink:"/docs/guides/remote-run",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/guides/remote-run.md",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1631978902,formattedLastUpdatedAt:"9/18/2021",frontMatter:{},sidebar:"docs",previous:{title:"Log Viewer",permalink:"/docs/guides/debug/log-viewer"},next:{title:"Hot Reload",permalink:"/docs/guides/hot-reload"}},p=[{value:"Supported IDEs",id:"supported-ides",children:[]},{value:"Remote Run Process",id:"remote-run-process",children:[{value:"Remote Run Configurations in IDE",id:"remote-run-configurations-in-ide",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Sample Configuration",id:"sample-configuration",children:[]}]}],g={toc:p};function h(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"remote-run"},"Remote Run"),(0,a.kt)("p",null,"When you start the new container in Kubernetes cluster, Kubernetes will not start any process within this container. Nocalhost can uses run configurations to run your code in Kubernetes cluster like to use the run feature within IDE. "),(0,a.kt)("h2",{id:"supported-ides"},"Supported IDEs"),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Language"),(0,a.kt)("th",null,"IDE"),(0,a.kt)("th",null,"Edition"),(0,a.kt)("th",null,"Required Plugin")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Java"),(0,a.kt)("td",null,"IntelliJ IDEA"),(0,a.kt)("td",null,"Ultimate"),(0,a.kt)("td",null,"N/A")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"Go"),(0,a.kt)("td",null,"IntelliJ IDEA"),(0,a.kt)("td",null,"Ultimate"),(0,a.kt)("td",null,"Go plugin")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GoLand"),(0,a.kt)("td",null,"Professional"),(0,a.kt)("td",null,"N/A")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"Python"),(0,a.kt)("td",null,"IntelliJ IDEA"),(0,a.kt)("td",null,"Ultimate"),(0,a.kt)("td",null,"Python plugin")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"PyCharm"),(0,a.kt)("td",null,"Professional"),(0,a.kt)("td",null,"N/A")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"PHP"),(0,a.kt)("td",null,"IntelliJ IDEA"),(0,a.kt)("td",null,"Ultimate"),(0,a.kt)("td",null,"PHP plugin")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"PHPStorm"),(0,a.kt)("td",null,"Professional"),(0,a.kt)("td",null,"N/A")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"Node.js"),(0,a.kt)("td",null,"IntelliJ IDEA"),(0,a.kt)("td",null,"Ultimate"),(0,a.kt)("td",null,"Node.js plugin")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"WebStrom"),(0,a.kt)("td",null,"Professional"),(0,a.kt)("td",null,"N/A")))),(0,a.kt)("h2",{id:"remote-run-process"},"Remote Run Process"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the workload that you want to run"),(0,a.kt)("li",{parentName:"ol"},"Right-click the workload and select ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Dev Config")),", ",(0,a.kt)("a",{parentName:"li",href:"#configuration"},"configure your run configuration")),(0,a.kt)("li",{parentName:"ol"},"Then right-click this workload again and select ",(0,a.kt)("strong",{parentName:"li"},"Remote Run")),(0,a.kt)("li",{parentName:"ol"},"Nocalhost will automatically enter the ",(0,a.kt)("inlineCode",{parentName:"li"},"DevMode")," and start remote run")),(0,a.kt)("h3",{id:"remote-run-configurations-in-ide"},"Remote Run Configurations in IDE"),(0,a.kt)("p",null,"Before starting remote run, if you do not have a Nocalhost IDE run configuration under an existing workload, Nocalhost will create a new IDE run configuration according to your ",(0,a.kt)("a",{parentName:"p",href:"#configuration"},"Nocalhost configuration"),". Different IDE has different configuration names and templates."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Multi Configs")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you already have a Nocalhost IDE run configuration under the existing workload, Nocalhost will use the first one to start running. You can change the order in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Run/Debug Configurations")," window within IDE."),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,u.Z)("/img/debug/debug-configs.png")}),(0,a.kt)("figcaption",null,"Nocalhost run configurations in IDE")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The development environment is different between developers. You should configure remote run configurations according to the actual situation."),(0,a.kt)("p",null,"These are important options for remote run:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Development Image:")," the image use to start development container"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Run Command:")," the command to execute in the container for remote run"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Container Port-Forwarding:")," the port-forwarding in development mode")),(0,a.kt)("h3",{id:"sample-configuration"},"Sample Configuration"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Go",value:"go"},{label:"PHP",value:"php"},{label:"Node.js",value:"node"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{10,28} title="Nocalhost Configs"',"{10,28}":!0,title:'"Nocalhost','Configs"':!0},'name: java-remote-run\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:latest\n        shell: bash\n        workDir: /home/nocalhost-dev\n        command:\n          run:\n            - /home/nocalhost-dev/gradlew\n            - bootRun\n        debug:\n          remoteDebugPort: 5005\n        useDevContainer: false\n        sync:\n            type: send\n            filePattern:\n              - ./\n            ignoreFilePattern:\n              - .git\n              - .github\n        env:\n          - name: DEBUG\n            value: "true"\n        envFrom: null\n        portForward:\n          - 33333:9999\n\n'))),(0,a.kt)(i.Z,{value:"python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{10,27} title="Nocalhost Configs"',"{10,27}":!0,title:'"Nocalhost','Configs"':!0},'name: python-remote-run\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:latest\n        shell: bash\n        workDir: /home/nocalhost-dev\n        command:\n          run:\n            - ./run.sh\n        debug:\n          remoteDebugPort: 9009\n        useDevContainer: false\n        sync:\n            type: send\n            filePattern:\n              - ./\n            ignoreFilePattern:\n              - .git\n              - .github\n        env:\n          - name: DEBUG\n            value: "true"\n        envFrom: null\n        portForward:\n          - 33333:9999\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="run.sh"',title:'"run.sh"'},"\n#! /bin/sh\n\npip3 install --no-cache-dir -r ./requirements.txt\n\nexport DEBUG_DEV=0\nexport FLASK_DEBUG=0\nexport FLASK_ENV=development\n\nflask run --host=0.0.0.0 --port=9999\n\n"))),(0,a.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{10,27} title="Nocalhost Configs"',"{10,27}":!0,title:'"Nocalhost','Configs"':!0},'name: go-remote-run\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:latest\n        shell: bash\n        workDir: /home/nocalhost-dev\n        command:\n          run:\n            - ./run.sh\n        debug:\n          remoteDebugPort: 9009\n        useDevContainer: false\n        sync:\n            type: send\n            filePattern:\n              - ./\n            ignoreFilePattern:\n              - .git\n              - .github\n        env:\n          - name: DEBUG\n            value: "true"\n        envFrom: null\n        portForward:\n          - 33333:9999\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="run.sh"',title:'"run.sh"'},"#! /bin/sh\n\nexport GOPROXY=https://goproxy.cn\ngo run app.go\n"))),(0,a.kt)(i.Z,{value:"php",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{10,27} title="Nocalhost Configs"',"{10,27}":!0,title:'"Nocalhost','Configs"':!0},'name: php-remote-run\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/php:zsh\n        shell: bash\n        workDir: /home/nocalhost-dev\n        command:\n          run:\n            - ./run.sh\n        debug:\n          remoteDebugPort: 9009\n        useDevContainer: false\n        sync:\n            type: send\n            filePattern:\n              - ./\n            ignoreFilePattern:\n              - .git\n              - .github\n        env:\n          - name: DEBUG\n            value: "true"\n        envFrom: null\n        portForward:\n          - 33333:9999\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="run.sh"',title:'"run.sh"'},"\n#\uff01/bin/sh\n\nphp -t ./ -S 0.0.0.0:9999;\n\n"))),(0,a.kt)(i.Z,{value:"node",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{10,27} title="Nocalhost Configs"',"{10,27}":!0,title:'"Nocalhost','Configs"':!0},'name: node-remote-run\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/php:zsh\n        shell: bash\n        workDir: /home/nocalhost-dev\n        command:\n          run:\n            - ./run.sh\n        debug:\n          remoteDebugPort: 9229\n        useDevContainer: false\n        sync:\n            type: send\n            filePattern:\n              - ./\n            ignoreFilePattern:\n              - .git\n              - .github\n        env:\n          - name: DEBUG\n            value: "true"\n        envFrom: null\n        portForward:\n          - 33333:9999\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="run.sh"',title:'"run.sh"'},"\n#\uff01/bin/sh\n\nnpm install && node ratings.js 9080\n\n")))))}h.isMDXComponent=!0}}]);