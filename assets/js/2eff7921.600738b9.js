"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[7894],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),h=i,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return t?a.createElement(u,r(r({ref:n},p),{},{components:t})):a.createElement(u,r({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23146:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=t(22122),i=t(19756),o=(t(67294),t(3905)),r=["components"],s={title:"Dev Container configuration"},l={unversionedId:"config/config-dev-container-en",id:"config/config-dev-container-en",isDocsHomePage:!1,title:"Dev Container configuration",description:"Overview / Spec / Container",source:"@site/docs/config/config-dev-container-en.md",sourceDirName:"config",slug:"/config/config-dev-container-en",permalink:"/docs/config/config-dev-container-en",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-dev-container-en.md",version:"current",lastUpdatedBy:"anurnomeru",lastUpdatedAt:1637563788,formattedLastUpdatedAt:"11/22/2021",frontMatter:{title:"Dev Container configuration"},sidebar:"docs",previous:{title:"Spec",permalink:"/docs/config/config-spec-en"},next:{title:"Enhance configuration",permalink:"/docs/config/config-enhance"}},c=[{value:"The Remote Directory for File Synchronization",id:"the-remote-directory-for-file-synchronization",children:[]},{value:"DevImage",id:"devimage",children:[]},{value:"Shell in the Remote Container",id:"shell-in-the-remote-container",children:[]},{value:"Persistence in Dev Container",id:"persistence-in-dev-container",children:[]},{value:"Resource Requests and Constraints in Dev Container",id:"resource-requests-and-constraints-in-dev-container",children:[]},{value:"Sidecar Image Customization",id:"sidecar-image-customization",children:[]},{value:"Patches",id:"patches",children:[]}],p={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/config/config-en"},"Overview")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/config-spec-en"},"Spec")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/config-dev-container-en"},"Container")),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"the-remote-directory-for-file-synchronization"},"The Remote Directory for File Synchronization"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      workDir: /home/nocalhost-dev\n")),(0,o.kt)("p",null,"After entering DevMode, users need to select a local directory, or right-click the target workload and select  ",(0,o.kt)("inlineCode",{parentName:"p"},"Associate Local DIR")," to do so in IDE plug-in. This directory local selected will be synchronized with the ",(0,o.kt)("inlineCode",{parentName:"p"},"workDir")," of the container in DevMode."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"workDir")," defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/nocalhost-dev")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Note on workDir")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"workDir")," uses emptyDir to share in ",(0,o.kt)("inlineCode",{parentName:"p"},"container")," \uff0cso ",(0,o.kt)("strong",{parentName:"p"},"this directory is empty")," at the beginning."))),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"devimage"},"DevImage"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh\n")),(0,o.kt)("p",null,"DevImage is the basis of DevMode, which can be regarded as a 'remote Linux'. If you want to correctly compile and run the files synchronized from the local, you must use the proper DevImage. Nocalhost provides multiple official DevImage, and if you do not configure this field before entering DevMode, you are required to select or enter a DevImage to move on."),(0,o.kt)("p",null,"The official DevImages are regular images without any special change. Apart from the basic environment of various languages, such as  JRE, Maven in Java, there are also some built-in basic softwares such as git, openssh-client, zsh, bash, net-tools, tmux. If no official image is sutiable for you, you can customize your own DevImage. The DockerFile is in  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nocalhost/dev-container"},"dev-container"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Make your DevImage")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to customize DevImage, please place it in a repository that can be pulled by your K8s cluster."))),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"shell-in-the-remote-container"},"Shell in the Remote Container"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      shell: /bin/zsh\n")),(0,o.kt)("p",null,"It is not a must to configure the shell, which defaults ",(0,o.kt)("inlineCode",{parentName:"p"},"zsh || bash || sh"),". Using a proper Shell normally makes things easier and more efficient, such as the automatic supplement and history supplement functions provided by zsh."),(0,o.kt)("p",null,"Of course, the shell configuration also depends on the DevImage. If your DevImage does not support zsh, it will not work even if you have configured zsh as the shell. It will look for zsh, bash and sh in turn until it finds a usable one."),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"persistence-in-dev-container"},"Persistence in Dev Container"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      persistentVolumeDirs:\n        - path: /the/path/you/want/to/persistent/in/container\n          capacity: 10Gi\n        - path: /other\n          capacity: 10Gi\n      storageClass: cbs\n")),(0,o.kt)("p",null,"We know that if the directory is not persisted in K8s container, the previously generated data will be lost after the container is shut down or restarted, such as synchronized files, compiled contents, constructed contents, etc. Enabling persistence in Dev Container can greatly reduce such loss."),(0,o.kt)("p",null,"Persistence includes two parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Which directories need to be persisted.  It is allowable not to configure this, and the default value will be empty. ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," indicates the directory that needs to be persisted in DevImage, and ",(0,o.kt)("inlineCode",{parentName:"li"},"capacity")," indicates the space allocated for this directory persistence.  ",(0,o.kt)("inlineCode",{parentName:"li"},"persistentVolumeDirs ")," is an array used to configure multiple path/capacity."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"storageClass"),". Persistence requires ",(0,o.kt)("inlineCode",{parentName:"li"},"storageClass"),"  (",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl get storageclass "),"). If you do not configure ",(0,o.kt)("inlineCode",{parentName:"li"},"storageClass"),", Nocalhost will use the default ",(0,o.kt)("inlineCode",{parentName:"li"},"storageClass")," in the cluster to create PVC. If you have configured ",(0,o.kt)("inlineCode",{parentName:"li"},"storageClass"),", PVC will be created by the corresponding  ",(0,o.kt)("inlineCode",{parentName:"li"},"storageClass"),". ")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Pay Attention")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"capacity")," needs to satisfy the resource constraints of K8s."))),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"resource-requests-and-constraints-in-dev-container"},"Resource Requests and Constraints in Dev Container"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      resources:\n        limits:\n          memory: 4Gi\n          cpu: "1"\n        requests:\n          memory: 2Gi\n          cpu: "0.5"\n')),(0,o.kt)("p",null,"Nocalhost Dev Container inherits the resource settings of the original container. If there is no configuration in the original container and no ",(0,o.kt)("inlineCode",{parentName:"p"},"limitranges")," (",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get limitranges"),") in the namespace, Dev Container will have no resource constraints."),(0,o.kt)("p",null,"Generally, after entering DevMode, the amount of the resource used will exceed the original image. Therefore, the resource configuration of the original container often leads to the failure of DevMode, such as OOM caused by insufficient memory. When such thing happens, you need to configure  ",(0,o.kt)("inlineCode",{parentName:"p"},"resources"),"  to provide more resource for DevImage."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Pay Attention")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"memory"),"  and ",(0,o.kt)("inlineCode",{parentName:"p"},"cpu")," need to satisify the resource constraints of K8s."))),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sidecar-image-customization"},"Sidecar Image Customization"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      sidecarImage: nocalhost-docker.pkg.coding.net/nocalhost/public/nocalhost-sidecar:sshversion\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sidecarImage")," is a necessary image to enter DevMode, which is used for code synchronization, debug connection management, etc. ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecarImage")," defaults ",(0,o.kt)("inlineCode",{parentName:"p"},"docker.pkg.coding.net/nocalhost/public/nocalhost-sidecar:sshversion")," and does not need to be configured manually."),(0,o.kt)("p",null,"If your cluster cannot get this image because of the network, you can pull this image and push it to the image repository that your cluster can access, and then configure it as a new address."),(0,o.kt)("h3",{id:"patches"},"Patches"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      patches:\n        - patch: \'[{"op": "add","path":"/metadata/annotations/nocalhost-patch","value":"hello-world"}]\'\n          type: json\n        - patch: \'{"spec":{"template":{"spec":{"containers":[{"name":"nocalhost-dev","resources":{"limits":{"cpu":"2"}}}]}}}}\'\n        - patch: \'{"spec":{"template":{"spec":{"containers":[{"name":"nocalhost-sidecar","resources":{"limits":{"cpu":"2"}}}]}}}}\'\n          type: strategic\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"patches")," provide the function similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl patch"),". Users can use ",(0,o.kt)("inlineCode",{parentName:"p"},"patches")," to flexibly modify the Spec of the workload in Nocalhost DevMode."),(0,o.kt)("p",null,"In which\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," ",(0,o.kt)("strong",{parentName:"p"},"type"),": The type of patch. The optional values are  ",(0,o.kt)("inlineCode",{parentName:"p"},"json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"merge"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"strategic"),", and the default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"strategic")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," ",(0,o.kt)("strong",{parentName:"p"},"patch"),": The content of patch"),(0,o.kt)("p",null,"To easily understand,  ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"patch")," can be regarded as the ",(0,o.kt)("inlineCode",{parentName:"p"},"--type")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--patch")," parameters of ",(0,o.kt)("inlineCode",{parentName:"p"},"ubectl patch")," command, respectively. To get more information about ",(0,o.kt)("inlineCode",{parentName:"p"},"kuebctl patch")," , please see  ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/manage-kubernetes-objects/update-api-object-kubectl-patch/"},"Update K8s API Object by kubectl patch")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Nocalhost will not validate the content of patch, so Nocalhost may fail to enter DevMode because of the improper contents of the patch. Please make sure the patch is correct."))))}d.isMDXComponent=!0}}]);