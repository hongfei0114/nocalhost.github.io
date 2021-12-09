"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[7918],{36742:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(19756),r=n(67294),i=n(73727),l=n(13919),o=n(10412),s=(0,r.createContext)({collectLink:function(){}}),c=n(44996),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var u=function(e){var t,n,u,m=e.isNavLink,v=e.to,f=e.href,p=e.activeClassName,g=e.isActive,h=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,b=void 0===E||E,_=(0,a.Z)(e,d),L=(0,c.C)().withBaseUrl,w=(0,r.useContext)(s),N=v||f,y=(0,l.Z)(N),k=null==N?void 0:N.replace("pathname://",""),U=void 0!==k?(n=k,b&&function(e){return e.startsWith("/")}(n)?L(n):n):void 0,Z=(0,r.useRef)(!1),A=m?i.OL:i.rU,C=o.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!C&&y&&null!=U&&window.docusaurus.prefetch(U),function(){C&&u&&u.disconnect()}}),[U,C,y]);var T=null!==(t=null==U?void 0:U.startsWith("#"))&&void 0!==t&&t,B=!U||!y||T;return U&&y&&!T&&!h&&w.collectLink(U),B?r.createElement("a",Object.assign({href:U},N&&!y&&{target:"_blank",rel:"noopener noreferrer"},_)):r.createElement(A,Object.assign({},_,{onMouseEnter:function(){Z.current||null==U||(window.docusaurus.preload(U),Z.current=!0)},innerRef:function(e){var t,n;C&&e&&y&&(t=e,n=function(){null!=U&&window.docusaurus.prefetch(U)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:U||""},m&&{isActive:g,activeClassName:p}))}},24973:function(e,t,n){n.d(t,{Z:function(){return u},I:function(){return d}});var a=n(67294),r=/{\w+}/g,i="{}";function l(e,t){var n=[],l=e.replace(r,(function(e){var r=e.substr(1,e.length-2),l=null==t?void 0:t[r];if(void 0!==l){var o=a.isValidElement(l)?l:String(l);return n.push(o),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?l.split(i).reduce((function(e,t,a){var r;return e.concat(t).concat(null!==(r=n[a])&&void 0!==r?r:"")}),""):l.split(i).reduce((function(e,t,r){return[].concat(e,[a.createElement(a.Fragment,{key:r},t,n[r])])}),[])}function o(e){return l(e.children,e.values)}var s=n(64644);function c(e){var t,n=e.id,a=e.message;return null!==(t=s[null!=n?n:a])&&void 0!==t?t:a}function d(e,t){var n,a=e.message;return l(null!==(n=c({message:a,id:e.id}))&&void 0!==n?n:a,t)}function u(e){var t,n=e.children,r=e.id,i=e.values,l=null!==(t=c({message:n,id:r}))&&void 0!==t?t:n;return a.createElement(o,{values:i},l)}},13919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(52263),r=n(13919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(i,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},43319:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(67294),r=n(36742),i=n(24973);var l=function(e){var t=e.metadata;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.createElement(r.Z,{className:"pagination-nav__link",to:t.previous.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.createElement(r.Z,{className:"pagination-nav__link",to:t.next.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},o=n(52263),s=n(80907),c=n(59732);function d(e){var t=e.siteTitle,n=e.versionLabel;return a.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("strong",null,n)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function u(e){var t=e.siteTitle,n=e.versionLabel;return a.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("strong",null,n)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function m(e){var t=e.versionLabel,n=e.to,l=e.onClick;return a.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:a.createElement("strong",null,a.createElement(r.Z,{to:n,onClick:l},a.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var v=function(){var e=(0,o.Z)().siteConfig.title,t=(0,s.gA)({failfast:!0}).pluginId,n=(0,c.J)(t).savePreferredVersionName,r=(0,s.zu)(t),i=(0,s.Jo)(t),l=i.latestDocSuggestion,v=i.latestVersionSuggestion;if(!v)return a.createElement(a.Fragment,null);var f,p=null!=l?l:(f=v).docs.find((function(e){return e.id===f.mainDocId}));return a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},a.createElement("div",null,"current"===r.name?a.createElement(d,{siteTitle:e,versionLabel:r.label}):a.createElement(u,{siteTitle:e,versionLabel:r.label})),a.createElement("div",{className:"margin-top--md"},a.createElement(m,{versionLabel:v.label,to:p.path,onClick:function(){return n(v.name)}})))},f=n(41217),p="lastUpdatedDate_1WI_";function g(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("time",{dateTime:new Date(1e3*t).toISOString(),className:p},n)}}," on {date}")}function h(e){var t=e.lastUpdatedBy;return a.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("strong",null,t)}}," by {user}")}function E(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("div",{className:"col text--right"},a.createElement("em",null,a.createElement("small",null,a.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(h,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)))}var b=n(571),_=n(86146),L=n(86010),w="docTitle_3a4h",N="docItemContainer_33ec",y="docItemCol_3FnS";var k=function(e){var t,n=e.content,r=n.metadata,i=n.frontMatter,o=i.image,c=i.keywords,d=i.hide_title,u=i.hide_table_of_contents,m=r.description,p=r.title,g=r.editUrl,h=r.lastUpdatedAt,k=r.formattedLastUpdatedAt,U=r.lastUpdatedBy,Z=(0,s.gA)({failfast:!0}).pluginId,A=(0,s.gB)(Z),C=(0,s.zu)(Z),T=A.length>1,B=i.title||p;return a.createElement(a.Fragment,null,a.createElement(f.Z,{title:B,description:m,keywords:c,image:o}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,L.Z)("col",(t={},t[y]=!u,t))},a.createElement(v,null),a.createElement("div",{className:N},a.createElement("article",null,T&&a.createElement("div",null,a.createElement("span",{className:"badge badge--secondary"},"Version: ",C.label)),!d&&a.createElement("header",null,a.createElement("h1",{className:w},p)),a.createElement("div",{className:"markdown"},a.createElement(n,null))),(g||h||U)&&a.createElement("div",{className:"margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},g&&a.createElement(_.Z,{editUrl:g})),(h||U)&&a.createElement(E,{lastUpdatedAt:h,formattedLastUpdatedAt:k,lastUpdatedBy:U}))),a.createElement("div",{className:"margin-vert--lg"},a.createElement(l,{metadata:r})))),!u&&n.toc&&a.createElement("div",{className:"col col--3"},a.createElement(b.Z,{toc:n.toc}))))}},86146:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(24973),i=n(22122),l=n(19756),o=n(86010),s="iconEdit_2_ui",c=["className"],d=function(e){var t=e.className,n=(0,l.Z)(e,c);return a.createElement("svg",(0,i.Z)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-label":"Edit page"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a.createElement(d,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},41217:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(99105),i=n(59732),l=n(44996);function o(e){var t=e.title,n=e.description,o=e.keywords,s=e.image,c=(0,i.LU)().image,d=(0,i.pe)(t),u=(0,l.Z)(s||c,{absolute:!0});return a.createElement(r.Z,null,t&&a.createElement("title",null,d),t&&a.createElement("meta",{property:"og:title",content:d}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),o&&a.createElement("meta",{name:"keywords",content:Array.isArray(o)?o.join(","):o}),u&&a.createElement("meta",{property:"og:image",content:u}),u&&a.createElement("meta",{name:"twitter:image",content:u}),u&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},571:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(86010);var i=function(e,t,n){var r=(0,a.useState)(void 0),i=r[0],l=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var c=s[r],d=c.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));a.id===u&&(i&&i.classList.remove(t),c.classList.add(t),l(c),o=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},l="tableOfContents_35-E",o="table-of-contents__link";function s(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(s,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return i(o,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(l,"thin-scrollbar")},a.createElement(s,{toc:t}))}},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);