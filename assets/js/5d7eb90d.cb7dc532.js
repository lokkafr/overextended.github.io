"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9414],{4681:function(e,t,n){var s=n(9496);t.Z=function(e){var t={fontSize:"1.7rem",paddingRight:"left"===e.side&&"0.6rem",paddingLeft:"right"===e.side&&"0.6rem",verticalAlign:"center",display:"flex"};return s.createElement("div",{style:Object.assign({width:"fit-content",height:"3rem",padding:"0.8rem",borderRadius:"0.2rem",verticalAlign:"baseline",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:"white"},e.style),className:"icon-button"},"left"===e.side&&s.createElement("div",{style:t},e.icon),s.createElement("div",null,e.children),"right"===e.side&&s.createElement("div",{style:t},e.icon))}},232:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var s=n(5443),i=n(3010),r=(n(9496),n(9613)),a=n(4681),o=n(4583),l=["components"],u={title:"Creating custom stashes"},d=void 0,p={unversionedId:"ox_inventory/Guides/stashes",id:"ox_inventory/Guides/stashes",title:"Creating custom stashes",description:"We can set up custom stashes from outside the resource utilising the exported RegisterStash function. Firstly, we need to define the stashes properties.",source:"@site/docs/ox_inventory/Guides/stashes.md",sourceDirName:"ox_inventory/Guides",slug:"/ox_inventory/Guides/stashes",permalink:"/docs/ox_inventory/Guides/stashes",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Guides/stashes.md",tags:[],version:"current",lastUpdatedAt:1657603292,formattedLastUpdatedAt:"7/12/2022",frontMatter:{title:"Creating custom stashes"},sidebar:"ox_inventory",previous:{title:"Building inventory UI",permalink:"/docs/ox_inventory/Guides/inventory_ui"}},h={},c=[{value:"Example",id:"example",level:2},{value:"Example resource",id:"example-resource",level:2}],m={toc:c};function y(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We can set up custom stashes from outside the resource utilising the exported RegisterStash function. Firstly, we need to define the stashes properties.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- id: string\n-- label: string\n-- slots: number\n-- weight: number\n-- owner: string or boolean (optional)\n-- groups: table (optional)\n    -- name: string\n    -- grade: number\n-- coords: vector or table (optional)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - A unique name to identify the stash in the database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"label")," - Display name when viewing the stash"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slots")," - Number of slots that the stash will have"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weight")," - Maximum stash weight"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"owner")," - See below"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"groups")," - Key-value pairs of job name and minimum grade to access"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"coords")," - Vector or table containing coordinates")),(0,r.kt)("p",null,"The owner field will set permissions for stash access, with stashes registering to specific identifiers."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"true: Each player has their own unique stash, but can request to open the stash of another player"),(0,r.kt)("li",{parentName:"ul"},"false: Only a single stash exists and is shared between all players"),(0,r.kt)("li",{parentName:"ul"},"string: The stash explicitly belongs to the given owner, usually a player identifier")),(0,r.kt)("p",null,"You can set the stash coordinates to prevent the stash from being opened if the player isn't close enough."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Below the value is hardset, but it could be loaded from the database (especially if there are unknown fields, i.e. owner)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- Server\nlocal stash = {\n    id = '42wallabyway',\n    label = '42 Wallaby Way',\n    slots = 50,\n    weight = 100000,\n    owner = 'char1:license'\n}\n\nAddEventHandler('onServerResourceStart', function(resourceName)\n    if resourceName == 'ox_inventory' or resourceName == GetCurrentResourceName() then\n        exports.ox_inventory:RegisterStash(stash.id, stash.label, stash.slots, stash.weight, stash.owner)\n    end\nend)\n\n-- Client\nexports.ox_inventory:openInventory('stash', {id='42wallabyway', owner=property.owner})\n")),(0,r.kt)("p",null,"The following sample is based on esx_property's db data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- Server\nlocal properties\n\nMySQL.query('SELECT * FROM `properties`', {}, function(result)\n    properties = result\nend\n\nRegisterNetEvent('ox:loadStashes', function(id)\nlocal stash = properties[id]\n    if stash then\n        -- id: 1, name: WhispymoundDrive, label: 2677 Whispymound Drive, coords: {\"x\":118.748,\"y\":566.573,\"z\":175.697}\n        ox_inventory:RegisterStash(stash.name, stash.label, 50, 100000, true, false, json.encode(stash.room_menu))\n    end\nend)\n\n-- Client\nlocal ox_inventory = exports.ox_inventory\n\nif ox_inventory:openInventory('stash', property.id) == false then\n    TriggerServerEvent('ox:loadStashes')\n    ox_inventory:openInventory('stash', property.id)\nend\n")),(0,r.kt)("h2",{id:"example-resource"},"Example resource"),(0,r.kt)("p",null,"We put together an example resource showcasing how to properly utilise the stash API:"),(0,r.kt)("div",{style:{width:"fit-content"}},(0,r.kt)("a",{href:"https://www.github.com/overextended/ox_inventory_examples"},(0,r.kt)(a.Z,{side:"left",icon:(0,r.kt)(o.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub"))))}y.isMDXComponent=!0}}]);