"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[8770],{20830:function(e,t,n){n.d(t,{W:function(){return a}});var r=n(67294);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},36742:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(79973),a=n(67294),o=n(73727),l=n(52263),c=n(13919),i=n(10412),s=(0,a.createContext)({collectLink:function(){}}),u=n(44996),m=n(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,v=e.to,h=e.href,b=e.activeClassName,g=e.isActive,p=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,k=void 0===E||E,Z=(0,r.Z)(e,d),w=(0,l.Z)().siteConfig,_=w.trailingSlash,y=w.baseUrl,C=(0,u.C)().withBaseUrl,N=(0,a.useContext)(s),S=v||h,L=(0,c.Z)(S),I=null==S?void 0:S.replace("pathname://",""),D=void 0!==I?(n=I,k&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;D&&L&&(D=(0,m.applyTrailingSlash)(D,{trailingSlash:_,baseUrl:y}));var B,T=(0,a.useRef)(!1),P=f?o.OL:o.rU,U=i.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!U&&L&&null!=D&&window.docusaurus.prefetch(D),function(){U&&B&&B.disconnect()}}),[D,U,L]);var M=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,A=!D||!L||M;return D&&L&&!M&&!p&&N.collectLink(D),A?a.createElement("a",Object.assign({href:D},S&&!L&&{target:"_blank",rel:"noopener noreferrer"},Z)):a.createElement(P,Object.assign({},Z,{onMouseEnter:function(){T.current||null==D||(window.docusaurus.preload(D),T.current=!0)},innerRef:function(e){var t,n;U&&e&&L&&(t=e,n=function(){null!=D&&window.docusaurus.prefetch(D)},(B=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),n())}))}))).observe(t))},to:D||""},f&&{isActive:g,activeClassName:b}))}},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(52263),a=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,c=void 0!==l&&l,i=o.absolute,s=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},18617:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a="iconExternalLink_3J9K",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,l=void 0===o?13.5:o;return r.createElement("svg",{width:n,height:l,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},18770:function(e,t,n){n.d(t,{Z:function(){return ve}});var r=n(67294),a=n(86010),o=n(5977),l=n(24973),c=n(941),i="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,r.useRef)(null),t=(0,o.k6)().action;return(0,c.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&s(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},r.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=n(74034),d=n(79973),f=["width","height","className"];function v(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,l=e.className,c=(0,d.Z)(e,f);return r.createElement("svg",(0,m.Z)({className:l,viewBox:"0 0 24 24",width:n,height:o,fill:"currentColor"},c),r.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}var h="announcementBar_3WsW",b="announcementBarPlaceholder_2m9F",g="announcementBarClose_38nx",p="announcementBarContent_3EUC";var E=function(){var e=(0,c.nT)(),t=e.isClosed,n=e.close,o=(0,c.LU)().announcementBar;if(!o)return null;var i=o.content,s=o.backgroundColor,u=o.textColor,m=o.isCloseable;return!i||m&&t?null:r.createElement("div",{className:h,style:{backgroundColor:s,color:u},role:"banner"},m&&r.createElement("div",{className:b}),r.createElement("div",{className:p,dangerouslySetInnerHTML:{__html:i}}),m?r.createElement("button",{type:"button",className:(0,a.Z)("clean-btn close",g),onClick:n,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement(v,{width:14,height:14})):null)},k=n(81036),Z=n(72389),w={toggle:"toggle_71bT"},_=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(w.toggle,w.dark),style:n},t)},y=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(w.toggle,w.light),style:n},t)},C=(0,r.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,c=e.onChange,i=(0,r.useState)(o),s=i[0],u=i[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":l})},r.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked),r.createElement("div",{className:"react-toggle-thumb"})),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=v.current)||t.click())}}))}));function N(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,l=t.lightIconStyle,i=(0,Z.Z)();return r.createElement(C,(0,m.Z)({disabled:!i,icons:{checked:r.createElement(_,{icon:n,style:a}),unchecked:r.createElement(y,{icon:o,style:l})}},e))}var S=n(85350),L=n(77898),I=function(e){var t=(0,o.TH)(),n=(0,r.useState)(e),a=n[0],l=n[1],i=(0,r.useRef)(!1),s=(0,r.useState)(0),u=s[0],m=s[1],d=(0,r.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,L.Z)((function(t,n){var r=t.scrollY,a=null==n?void 0:n.scrollY;if(e)if(r<u)l(!0);else{if(i.current)return i.current=!1,void l(!1);a&&0===r&&l(!0);var o=document.documentElement.scrollHeight-u,c=window.innerHeight;a&&r>=a?l(!1):r+c<o&&l(!0)}}),[u,i]),(0,c.SL)((function(t){e&&!t.location.hash&&l(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(i.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:a}};var D=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},B=n(93783),T=n(80907),P=n(77819),U=n(55537),M=["width","height","className"],A=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,o=void 0===a?30:a,l=e.className,c=(0,d.Z)(e,M);return r.createElement("svg",(0,m.Z)({className:l,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},c),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},O=["width","height","className"];function x(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,l=e.className,c=(0,d.Z)(e,O);return r.createElement("svg",(0,m.Z)({className:l,viewBox:"0 0 413.348 413.348",width:n,height:o,fill:"currentColor"},c),r.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}var R="toggle_3Zt9",W="navbarHideable_2qcr",j="navbarHidden_3yey",V="navbarSidebarToggle_wkoY",H="navbarSidebarCloseSvg_2XuS",z="right";function q(){return(0,c.LU)().navbar.items}function F(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,S.Z)(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?o():a()}),[a,o]),disabled:e}}function K(e){var t=e.sidebarShown,n=e.toggleSidebar;D(t);var o=q(),i=F(),s=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,o=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:a}),l=(0,c.D9)(o),i=(0,r.useState)((function(){return!1})),s=i[0],u=i[1];(0,r.useEffect)((function(){o&&!l&&u(!0)}),[o,l]);var m=!!o;return(0,r.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,r.useCallback)((function(){u(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(U.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!i.disabled&&r.createElement(N,{className:V,checked:i.isDarkTheme,onChange:i.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},r.createElement(x,{width:20,height:20,className:H}))),r.createElement("div",{className:(0,a.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(P.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},r.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var Y=function(){var e,t=(0,c.LU)().navbar,n=t.hideOnScroll,o=t.style,l=function(){var e=(0,B.Z)(),t="mobile"===e,n=(0,r.useState)(!1),a=n[0],o=n[1];(0,c.Rb)((function(){a&&o(!1)}));var l=(0,r.useCallback)((function(){o((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&o(!1)}),[e]),{shouldRender:t,toggle:l,shown:a}}(),i=F(),s=(0,T.gA)(),u=I(n),d=u.navbarRef,f=u.isNavbarVisible,v=q(),h=v.some((function(e){return"search"===e.type})),b=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:z)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:z)}))}}(v),g=b.leftItems,p=b.rightItems;return r.createElement("nav",{ref:d,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":l.shown},e[W]=n,e[j]=n&&!f,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==v?void 0:v.length)>0||s)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:l.toggle,onKeyDown:l.toggle},r.createElement(A,null)),r.createElement(U.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),g.map((function(e,t){return r.createElement(P.Z,(0,m.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},p.map((function(e,t){return r.createElement(P.Z,(0,m.Z)({},e,{key:t}))})),!i.disabled&&r.createElement(N,{className:R,checked:i.isDarkTheme,onChange:i.toggle}),!h&&r.createElement(k.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:l.toggle}),l.shouldRender&&r.createElement(K,{sidebarShown:l.shown,toggleSidebar:l.toggle}))},G=n(36742),X=n(44996),Q=n(13919),J="footerLogoLink_MyFc",$=n(98465),ee=n(18617),te=["to","href","label","prependBaseUrlToHref"];function ne(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,l=(0,d.Z)(e,te),c=(0,X.Z)(t),i=(0,X.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(G.Z,(0,m.Z)({className:"footer__link-item"},n?{href:o?i:n}:{to:c},l),n&&!(0,Q.Z)(n)?r.createElement("span",null,a,r.createElement(ee.Z,null)):a)}var re=function(e){var t=e.sources,n=e.alt;return r.createElement($.Z,{className:"footer__logo",alt:n,sources:t})};var ae=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,o=t.links,l=void 0===o?[]:o,i=t.logo,s=void 0===i?{}:i,u={light:(0,X.Z)(s.src),dark:(0,X.Z)(s.srcDark||s.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},l&&l.length>0&&r.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(ne,e))}))):null)}))),(s||n)&&r.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},s.href?r.createElement(G.Z,{href:s.href,className:J},r.createElement(re,{alt:s.alt,sources:u})):r.createElement(re,{alt:s.alt,sources:u})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},oe=n(86482),le=n(99105),ce=n(52263);function ie(e){var t=e.locale,n=e.version,a=e.tag,o=t;return r.createElement(le.Z,null,o&&r.createElement("meta",{name:"docsearch:language",content:o}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var se=n(41217);function ue(){var e=(0,ce.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,c.l5)();return r.createElement(le.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function me(e){var t=e.permalink,n=(0,ce.Z)().siteConfig.url,a=function(){var e=(0,ce.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,X.Z)(t)}(),l=t?""+n+t:a;return r.createElement(le.Z,null,r.createElement("meta",{property:"og:url",content:l}),r.createElement("link",{rel:"canonical",href:l}))}function de(e){var t=(0,ce.Z)(),n=t.siteConfig.favicon,a=t.i18n,o=a.currentLocale,l=a.localeConfigs,i=(0,c.LU)(),s=i.metadatas,u=i.image,d=e.title,f=e.description,v=e.image,h=e.keywords,b=e.searchMetadatas,g=(0,X.Z)(n),p=(0,c.pe)(d),E=o,k=l[o].direction;return r.createElement(r.Fragment,null,r.createElement(le.Z,null,r.createElement("html",{lang:E,dir:k}),n&&r.createElement("link",{rel:"shortcut icon",href:g}),r.createElement("title",null,p),r.createElement("meta",{property:"og:title",content:p}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&r.createElement(se.Z,{image:u}),v&&r.createElement(se.Z,{image:v}),r.createElement(se.Z,{description:f,keywords:h}),r.createElement(me,null),r.createElement(ue,null),r.createElement(ie,(0,m.Z)({tag:c.HX,locale:o},b)),r.createElement(le.Z,null,s.map((function(e,t){return r.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}var fe=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var ve=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,l=e.pageClassName;return fe(),r.createElement(oe.Z,null,r.createElement(de,e),r.createElement(u,null),r.createElement(E,null),r.createElement(Y,null),r.createElement("div",{className:(0,a.Z)(c.kM.wrapper.main,o,l)},t),!n&&r.createElement(ae,null))}},86482:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a=n(10412),o=n(941),l=(0,o.WA)("theme"),c="light",i="dark",s=function(e){return e===i?i:c},u=function(e){(0,o.WA)("theme").set(s(e))},m=function(){var e=(0,o.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,m=e.respectPrefersColorScheme,d=(0,r.useState)(function(e){return a.Z.canUseDOM?s(document.documentElement.getAttribute("data-theme")):s(e)}(t)),f=d[0],v=d[1],h=(0,r.useCallback)((function(){v(c),u(c)}),[]),b=(0,r.useCallback)((function(){v(i),u(i)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",s(f))}),[f]),(0,r.useEffect)((function(){if(!n)try{var e=l.get();null!==e&&v(s(e))}catch(t){console.error(t)}}),[v]),(0,r.useEffect)((function(){n&&!m||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;v(t?i:c)}))}),[]),{isDarkTheme:f===i,setLightTheme:h,setDarkTheme:b}},d=n(82924);var f=function(e){var t=m(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(d.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},v="docusaurus.tab.",h=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,o.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,o._f)().forEach((function(t){if(t.startsWith(v)){var n=t.substring(v.length);e[n]=(0,o.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},b=n(79443);var g=function(e){var t=h(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(b.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function p(e){var t=e.children;return r.createElement(f,null,r.createElement(o.pl,null,r.createElement(g,null,r.createElement(o.L5,null,r.createElement(o.Cn,null,t)))))}},55537:function(e,t,n){var r=n(74034),a=n(79973),o=n(67294),l=n(36742),c=n(98465),i=n(44996),s=n(52263),u=n(941),m=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.Z)().siteConfig.title,n=(0,u.LU)().navbar,d=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,b=e.titleClassName,g=(0,a.Z)(e,m),p=(0,i.Z)(v.href||"/"),E={light:(0,i.Z)(v.src),dark:(0,i.Z)(v.srcDark||v.src)};return o.createElement(l.Z,(0,r.Z)({to:p},g,v.target&&{target:v.target}),v.src&&o.createElement(c.Z,{className:h,sources:E,alt:v.alt||d||t}),null!=d&&o.createElement("b",{className:b},d))}},5525:function(e,t,n){n.d(t,{O:function(){return b}});var r=n(74034),a=n(79973),o=n(67294),l=n(86010),c=n(36742),i=n(44996),s=n(18617),u=n(13919),m=n(77819),d=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],f=["className","isDropdownItem"],v=["className","isDropdownItem"],h=["mobile","position"];function b(e){var t,n=e.activeBasePath,l=e.activeBaseRegex,m=e.to,f=e.href,v=e.label,h=e.activeClassName,b=void 0===h?"":h,g=e.prependBaseUrlToHref,p=(0,a.Z)(e,d),E=(0,i.Z)(m),k=(0,i.Z)(n),Z=(0,i.Z)(f,{forcePrependBaseUrl:!0}),w=v&&f&&!(0,u.Z)(f),_="dropdown__link--active"===b;return o.createElement(c.Z,(0,r.Z)({},f?{href:g?Z:f}:Object.assign({isNavLink:!0,activeClassName:null!=(t=p.className)&&t.includes(b)?"":b,to:E},n||l?{isActive:function(e,t){return l?new RegExp(l).test(t.pathname):t.pathname.startsWith(k)}}:null),p),w?o.createElement("span",null,v,o.createElement(s.Z,_&&{width:12,height:12})):v)}function g(e){var t=e.className,n=e.isDropdownItem,c=void 0!==n&&n,i=(0,a.Z)(e,f),s=o.createElement(b,(0,r.Z)({className:(0,l.Z)(c?"dropdown__link":"navbar__item navbar__link",t)},i));return c?o.createElement("li",null,s):s}function p(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,v));return o.createElement("li",{className:"menu__list-item"},o.createElement(b,(0,r.Z)({className:(0,l.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,l=void 0!==n&&n,c=(e.position,(0,a.Z)(e,h)),i=l?p:g;return o.createElement(i,(0,r.Z)({},c,{activeClassName:null!=(t=c.activeClassName)?t:(0,m.E)(l)}))}},76400:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(74034),a=n(79973),o=n(67294),l=n(5525),c=n(80907),i=n(86010),s=n(77819),u=n(941),m=n(18780),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,d),b=(0,c.Iw)(v),g=b.activeVersion,p=b.activeDoc,E=(0,u.J)(v).preferredVersion,k=(0,c.yW)(v),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,m.uniq)([g,E,k].filter(Boolean)),n),w=(0,s.E)(h.mobile);return o.createElement(l.Z,(0,r.Z)({exact:!0},h,{className:(0,i.Z)(h.className,(t={},t[w]=(null==p?void 0:p.sidebar)&&p.sidebar===Z.sidebar,t)),activeClassName:w,label:null!=f?f:Z.id,to:Z.path}))}},59308:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(74034),a=n(79973),o=n(67294),l=n(5525),c=n(23154),i=n(80907),s=n(941),u=n(24973),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,b=e.dropdownItemsBefore,g=e.dropdownItemsAfter,p=(0,a.Z)(e,m),E=(0,i.Iw)(v),k=(0,i.gB)(v),Z=(0,i.yW)(v),w=(0,s.J)(v),_=w.preferredVersion,y=w.savePreferredVersionName;var C,N=(C=k.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){y(e.name)}}})),[].concat(b,C,g)),S=null!=(t=null!=(n=E.activeVersion)?n:_)?t:Z,L=f&&N?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):S.label,I=f&&N?void 0:d(S).path;return N.length<=1?o.createElement(l.Z,(0,r.Z)({},p,{mobile:f,label:L,to:I,isActive:h?function(){return!1}:void 0})):o.createElement(c.Z,(0,r.Z)({},p,{mobile:f,label:L,to:I,items:N,isActive:h?function(){return!1}:void 0}))}},47250:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(74034),a=n(79973),o=n(67294),l=n(5525),c=n(80907),i=n(941),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,c.zu)(m),v=(0,i.J)(m).preferredVersion,h=(0,c.yW)(m),b=null!=(t=null!=f?f:v)?t:h,g=null!=n?n:b.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.createElement(l.Z,(0,r.Z)({},d,{label:g,to:p}))}},23154:function(e,t,n){var r=n(74034),a=n(79973),o=n(67294),l=n(86010),c=n(941),i=n(5525),s=n(77819),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,c.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,c=e.position,m=e.className,d=(0,a.Z)(e,u),f=(0,o.useRef)(null),v=(0,o.useRef)(null),h=(0,o.useState)(!1),b=h[0],g=h[1];return(0,o.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),o.createElement("div",{ref:f,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===c,"dropdown--show":b})},o.createElement(i.O,(0,r.Z)({className:(0,l.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!b))}}),null!=(t=d.children)?t:d.label),o.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=f.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,a.Z)(e,m)),v=(0,c.be)(),h=f(n,v),b=(0,c.uR)({initialState:function(){return!h}}),g=b.collapsed,p=b.toggleCollapsed,E=b.setCollapsed;return(0,o.useEffect)((function(){h&&E(!h)}),[v,h]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":g})},o.createElement(i.O,(0,r.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),o.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,d),l=n?h:v;return o.createElement(l,r)}},77819:function(e,t,n){n.d(t,{Z:function(){return k},E:function(){return E}});var r=n(79973),a=n(67294),o=n(5525),l=n(23154),c=n(74034),i=["width","height"],s=function(e){var t=e.width,n=void 0===t?20:t,o=e.height,l=void 0===o?20:o,s=(0,r.Z)(e,i);return a.createElement("svg",(0,c.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},s),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},u=n(52263),m=n(941),d="iconLanguage_3vod",f=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function v(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,i=(0,r.Z)(e,f),v=(0,u.Z)().i18n,h=v.currentLocale,b=v.locales,g=v.localeConfigs,p=(0,m.l5)();function E(e){return g[e].label}var k=b.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),Z=[].concat(n,k,o),w=t?"Languages":E(h);return a.createElement(l.Z,(0,c.Z)({},i,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(s,{className:d}),a.createElement("span",null,w)),items:Z}))}var h=n(81036);function b(e){return e.mobile?null:a.createElement(h.Z,null)}var g=["type"],p={default:function(){return o.Z},localeDropdown:function(){return v},search:function(){return b},dropdown:function(){return l.Z},docsVersion:function(){return n(47250).Z},docsVersionDropdown:function(){return n(59308).Z},doc:function(){return n(76400).Z}};var E=function(e){return e?"menu__link--active":"navbar__link--active"};function k(e){var t=e.type,n=(0,r.Z)(e,g),o=function(e){var t=p[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return a.createElement(o,n)}},41217:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(99105),o=n(941),l=n(44996);function c(e){var t=e.title,n=e.description,c=e.keywords,i=e.image,s=e.children,u=(0,o.pe)(t),m=(0,l.C)().withBaseUrl,d=i?m(i,{absolute:!0}):void 0;return r.createElement(a.Z,null,t&&r.createElement("title",null,u),t&&r.createElement("meta",{property:"og:title",content:u}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),c&&r.createElement("meta",{name:"keywords",content:Array.isArray(c)?c.join(","):c}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),s)}},82924:function(e,t,n){var r=n(67294).createContext(void 0);t.Z=r},98465:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(74034),a=n(79973),o=n(67294),l=n(86010),c=n(72389),i=n(85350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,c.Z)(),n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,u),b=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,b.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},77898:function(e,t,n){var r=n(67294),a=n(10412),o=function(){return a.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(o()),a=function(){var t=o();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},85350:function(e,t,n){var r=n(67294),a=n(82924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},93783:function(e,t,n){var r=n(67294),a=n(10412),o="desktop",l="mobile",c="ssr";function i(){return a.Z.canUseDOM?window.innerWidth>996?o:l:c}t.Z=function(){var e=(0,r.useState)((function(){return i()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n(i())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},81036:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(74034),a=n(79973),o=n(67294),l=n(73935),c=n(52263),i=n(5977),s=n(44996),u=n(36742),m=n(99105),d=n(6397);function f(){return o.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},o.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var v=n(20830);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g="Ctrl";var p=o.forwardRef((function(e,t){var n=e.translations,r=void 0===n?{}:n,a=b(e,["translations"]),l=r.buttonText,c=void 0===l?"Search":l,i=r.buttonAriaLabel,s=void 0===i?"Search":i,u=(0,o.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":g:null}),[]);return o.createElement("button",h({type:"button",className:"DocSearch DocSearch-Button","aria-label":s},a,{ref:t}),o.createElement("span",{className:"DocSearch-Button-Container"},o.createElement(v.W,null),o.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),o.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&o.createElement(o.Fragment,null,o.createElement("span",{className:"DocSearch-Button-Key"},u===g?o.createElement(f,null):u),o.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),E=n(80907),k=n(941);function Z(){var e=function(){var e=(0,c.Z)().i18n,t=(0,E._r)(),n=(0,E.WS)(),r=(0,k.Oh)(),a=[k.HX].concat(Object.keys(t).map((function(e){var a,o,l=(null==n||null==(a=n.activePlugin)?void 0:a.pluginId)===e?n.activeVersion:void 0,c=r[e],i=t[e].versions.find((function(e){return e.isLast})),s=null!=(o=null!=l?l:c)?o:i;return(0,k.os)(e,s.name)})));return{locale:e.currentLocale,tags:a}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var w=n(24973),_="searchBox_1Doo",y=["contextualSearch"],C=null;function N(e){var t=e.hit,n=e.children;return o.createElement(u.Z,{to:t.url},n)}function S(e){var t=e.state,n=e.onClose,r=(0,d.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function L(e){var t,u,d=e.contextualSearch,f=(0,a.Z)(e,y),v=(0,c.Z)().siteMetadata,h=Z(),b=null!=(t=null==(u=f.searchParameters)?void 0:u.facetFilters)?t:[],g=d?[].concat(h,b):b,E=Object.assign({},f.searchParameters,{facetFilters:g}),k=(0,s.C)().withBaseUrl,L=(0,i.k6)(),I=(0,o.useRef)(null),D=(0,o.useRef)(null),B=(0,o.useState)(!1),T=B[0],P=B[1],U=(0,o.useState)(null),M=U[0],A=U[1],O=(0,o.useCallback)((function(){return C?Promise.resolve():Promise.all([n.e(3581).then(n.bind(n,44300)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,46945)),Promise.all([n.e(532),n.e(5256)]).then(n.bind(n,95256))]).then((function(e){var t=e[0].DocSearchModal;C=t}))}),[]),x=(0,o.useCallback)((function(){O().then((function(){I.current=document.createElement("div"),document.body.insertBefore(I.current,document.body.firstChild),P(!0)}))}),[O,P]),R=(0,o.useCallback)((function(){P(!1),I.current.remove()}),[P]),W=(0,o.useCallback)((function(e){O().then((function(){P(!0),A(e.key)}))}),[O,P,A]),j=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;L.push(t)}}).current,V=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:k(""+t.pathname+t.hash)})}))})).current,H=(0,o.useMemo)((function(){return function(e){return o.createElement(S,(0,r.Z)({},e,{onClose:R}))}}),[R]),z=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e}),[v.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,a=e.onInput,l=e.searchButtonRef;o.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),l&&l.current===document.activeElement&&a&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&a(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,a,l])}({isOpen:T,onOpen:x,onClose:R,onInput:W,searchButtonRef:D});var q=(0,w.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+f.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",{className:_},o.createElement(p,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:x,ref:D,translations:{buttonText:q,buttonAriaLabel:q}})),T&&(0,l.createPortal)(o.createElement(C,(0,r.Z)({onClose:R,initialScrollY:window.scrollY,initialQuery:M,navigator:j,transformItems:V,hitComponent:N,resultsFooterComponent:H,transformSearchClient:z},f,{searchParameters:E})),I.current))}var I=function(){var e=(0,c.Z)().siteConfig;return o.createElement(L,e.themeConfig.algolia)}},6397:function(e,t,n){var r=n(5977),a=n(10412),o=n(52263);t.Z=function(){var e=(0,r.k6)(),t=(0,r.TH)(),n=(0,o.Z)().siteConfig,l=(n=void 0===n?{}:n).baseUrl;return{searchValue:a.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return l+"search?q="+encodeURIComponent(e)}}}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],l="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,l)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);