"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6193],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6968:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(5443),o=n(3010),a=(n(9496),n(9613)),i=["components"],s={slug:"./../"},l="Getting Started",u={unversionedId:"oxmysql/Getting Started/index",id:"oxmysql/Getting Started/index",title:"Getting Started",description:"MySQL or MariaDB?",source:"@site/docs/oxmysql/Getting Started/index.md",sourceDirName:"oxmysql/Getting Started",slug:"/oxmysql/",permalink:"/docs/oxmysql/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Getting Started/index.md",tags:[],version:"current",lastUpdatedAt:1657603292,formattedLastUpdatedAt:"7/12/2022",frontMatter:{slug:"./../"},sidebar:"oxmysql",previous:{title:"OxMySQL",permalink:"/docs/category/oxmysql"},next:{title:"Benchmark",permalink:"/docs/oxmysql/Getting Started/benchmark"}},c={},d=[{value:"MySQL or MariaDB?",id:"mysql-or-mariadb",level:2},{value:"XAMPP",id:"xampp",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Using the UI",id:"using-the-ui",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"mysql-or-mariadb"},"MySQL or MariaDB?"),(0,a.kt)("p",null,"Most resources for FiveM were designed to be used with MySQL 5.7 and may hit compatibility issues when using MySQL 8, i.e."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"More reserved keywords, like 'stored' and 'group'."),(0,a.kt)("li",{parentName:"ul"},"Longtext / JSON fields do not support default values.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mariadb.org/"},"MariaDB")," is strongly recommended for compatibility, and improved performance (over all versions of MySQL)."),(0,a.kt)("h2",{id:"xampp"},"XAMPP"),(0,a.kt)("p",null,"XAMPP is not a database, and should not be used solely to start your MySQL/MariaDB service. Please ",(0,a.kt)("em",{parentName:"p"},"do not")," use XAMPP."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/overextended/oxmysql/releases/latest"},"latest build")," of oxmysql (not the source code)."),(0,a.kt)("li",{parentName:"ul"},"Extract the contents of the archive to your resources folder."),(0,a.kt)("li",{parentName:"ul"},"Start the resource near the top of your resources in your ",(0,a.kt)("inlineCode",{parentName:"li"},"server.cfg"),"."),(0,a.kt)("li",{parentName:"ul"},"If you have a lot of streamed assets, load them first to prevent timing out the connection.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You can change the configuration settings by using convars inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"server.cfg"),".\nReference the following for an idea of how to set your connection options.\nYou must include one of the following lines, adjusted for your connection and database settings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'set mysql_connection_string "mysql://root:12345@localhost:3306/es_extended?charset=utf8mb4"\nset mysql_connection_string "user=root;password=12345;host=localhost;port=3306;database=es_extended;charset=utf8mb4"\n')),(0,a.kt)("p",null,"Certain special characters are reserved or blocked and may cause issues when used in your password.",(0,a.kt)("br",{parentName:"p"}),"\n","For more optional settings (such as multiple statements) you can reference ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sidorares/node-mysql2/blob/master/typings/mysql/lib/Pool.d.ts#L10"},"pool.d.ts")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sidorares/node-mysql2/blob/master/typings/mysql/lib/Connection.d.ts#L8"},"connection.d.ts"),"."),(0,a.kt)("p",null,"You can also add the following convars if you require extra information when testing queries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"set mysql_slow_query_warning 150\nset mysql_debug true\n")),(0,a.kt)("h3",{id:"using-the-ui"},"Using the UI"),(0,a.kt)("p",null,"Before using the UI first you have to make sure you have the ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql_ui")," convar set to true:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"set mysql_ui true\n")),(0,a.kt)("p",null,"Also make sure that you have ",(0,a.kt)("inlineCode",{parentName:"p"},"command")," ace permission access, then you should be able to use the\n",(0,a.kt)("inlineCode",{parentName:"p"},"mysql")," command in game to open up the UI and see your query data."))}m.isMDXComponent=!0}}]);