"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5225],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7640:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(9496),r=n(1626),o="tabItem_zeWL";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},866:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(5443),r=n(9496),o=n(1626),l=n(4252),i=n(1135),u=n(9162),s=n(3946),p="tabList_gs2P",c="tabItem_Ugfh";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,v=e.groupId,h=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),x=N.tabGroupChoices,w=N.setTabGroupChoices,O=(0,r.useState)(y),_=O[0],T=O[1],E=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=x[v];null!=D&&D!==_&&k.some((function(e){return e.value===D}))&&T(D)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),a=k[n].value;a!==_&&(j(t),T(a),null!=v&&w(v,String(a)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var o,l=E.indexOf(e.currentTarget)-1;n=null!=(o=E[l])?o:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},3841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(5443),r=n(3010),o=(n(9496),n(9613)),l=n(866),i=n(7640),u=["components"],s={title:"Getting started",sidebar_position:1,displayed_sidebar:"ox_core"},p=void 0,c={unversionedId:"ox_core/index",id:"ox_core/index",title:"Getting started",description:"This resource is not production ready. Breaking changes are guaranteed, and support is limited.",source:"@site/docs/ox_core/index.md",sourceDirName:"ox_core",slug:"/ox_core/",permalink:"/docs/ox_core/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_core/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting started",sidebar_position:1,displayed_sidebar:"ox_core"},sidebar:"ox_core",previous:{title:"Core",permalink:"/docs/category/core"},next:{title:"Client",permalink:"/docs/ox_core/Player/Client/"}},d={},m=[{value:"Setup",id:"setup",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Optional dependencies",id:"optional-dependencies",level:3},{value:"Installation",id:"installation",level:3},{value:"Convars",id:"convars",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This resource is ",(0,o.kt)("strong",{parentName:"p"},"not production ready"),". Breaking changes are guaranteed, and support is limited.",(0,o.kt)("br",{parentName:"p"}),"\n","Documentation may fall behind and be rendered obsolete."))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"We ",(0,o.kt)("strong",{parentName:"p"},"strongly")," recommend using Git to help with version control and separating your own changes from the original source code.",(0,o.kt)("br",{parentName:"p"}),"\n","Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/set-up-git#setting-up-git"},"GitHub's guide to setting up Git"),". You can also download a Git GUI client, such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.gitkraken.com/"},"GitKraken"),", to improve your workflow and more easily maintain changes."),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/overextended/oxmysql/"},"oxmysql"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Database connector"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_lib/"},"ox_lib"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Shared functions through modules and exports"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_inventory"},"ox_inventory"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Implements items, weapons, shops, etc."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pedr0fontoura/fivem-appearance"},"fivem-appearance"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Player ped customisation."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_appearance"},"ox_appearance"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Outfits, shops, and player appearance persistence.")))),(0,o.kt)("h3",{id:"optional-dependencies"},"Optional dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/project-error/npwd"},"npwd"))),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"1",label:"Recommended",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nodejs.org/"},"Download")," and install the LTS version of Node.js 16."),(0,o.kt)("li",{parentName:"ul"},"Open a terminal, command prompt, etc. and navigate to your resources folder."),(0,o.kt)("li",{parentName:"ul"},"Execute the following commands")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --location=global pnpm\ngit clone https://github.com/overextended/ox_core.git\ncd web\npnpm i\npnpm build\n"))),(0,o.kt)(i.Z,{value:"2",label:"Lazy",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download a tagged ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_core/releases"},"release"),".")))),(0,o.kt)("h2",{id:"convars"},"Convars"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Replicated"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ox:primaryIdentifier"),(0,o.kt)("td",{parentName:"tr",align:null},"fivem"),(0,o.kt)("td",{parentName:"tr",align:null},"false")))))}v.isMDXComponent=!0}}]);