(this["webpackJsonprick-morty-front-end-test"]=this["webpackJsonprick-morty-front-end-test"]||[]).push([[0],{37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(27),s=c.n(r),i=c(31),o=c(2),l=c(5),j=c.n(l),h=c(4),d=c(9),u=(c(37),c(1));var b=function(e){var t=e.children,c=e.classes,n=Object(d.a)(e,["children","classes"]),a=j()("g-button",c);return Object(u.jsx)("button",Object(h.a)(Object(h.a)({className:a},n),{},{children:t}))};c(39);function g(e){var t=e.children,c=e.classes,n=e.variant,a=Object(d.a)(e,["children","classes","variant"]),r=j()("g-card","g-card--".concat(n),c);return Object(u.jsx)("div",Object(h.a)(Object(h.a)({className:r},a),{},{children:t}))}g.defaultProps={variant:"normal"};var m=g;c(40);function O(e){var t=e.change,c=e.classes,n=Object(d.a)(e,["change","classes"]),a=j()("g-input",c);return Object(u.jsx)("input",Object(h.a)({className:a,onChange:t},n))}O.defaultProps={change:function(){}};var f=O;c(41);function x(e){var t=e.color,c=e.children,n=e.classes,a=e.family,r=Object(d.a)(e,["color","children","classes","family"]),s=j()("g-text","g-text--".concat(t),"g-text--".concat(a),n);return Object(u.jsx)("p",Object(h.a)(Object(h.a)({className:s},r),{},{children:c}))}x.defaultProps={color:"white",family:"nunito"};var v=x;c(42);function p(e){var t=e.color,c=e.children,n=e.classes,a=e.family,r=e.spacing,s=e.tag,i=e.weight,o=Object(d.a)(e,["color","children","classes","family","spacing","tag","weight"]),l=s,b=j()("g-title","g-title--".concat(t),"g-title--".concat(a),"g-title--space-".concat(r),"g-title--".concat(i),n);return Object(u.jsx)(l,Object(h.a)(Object(h.a)({className:b},o),{},{children:c}))}p.defaultProps={color:"white",family:"nunito",spacing:"normal",tag:"h1",weight:"normal"};var _=p;c(43);var y=function(e){var t=e.children,c=e.classes,n=Object(d.a)(e,["children","classes"]),a=j()("g-modal",c);return Object(u.jsx)("div",Object(h.a)(Object(h.a)({className:a},n),{},{children:t}))},N=c(13),k=c(28),S=c(29),C=c(30),w=c.n(C),P=new(function(){function e(){Object(k.a)(this,e)}return Object(S.a)(e,[{key:"getCharacters",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return w.a.post("https://rickandmortyapi.com/graphql",{query:"\n        query {\n          characters(page: ".concat(e,', filter: { name: "').concat(t,'" }) {\n            info {\n              pages\n            }\n            results {\n              id,\n              name,\n              status,\n              species,\n              image,\n              origin {\n                name,\n                type,\n                dimension,\n                residents {\n                  id\n                }\n              },\n              location {\n                name,\n                type,\n                dimension,\n                residents {\n                  id\n                }\n              }\n            }\n          }\n        }\n      ')})}}]),e}()),F=Object(n.createContext)(),T=function(e){var t=e.children,c=Object(n.useState)(1),a=Object(N.a)(c,1)[0],r=Object(n.useState)(""),s=Object(N.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)([]),j=Object(N.a)(l,2),h=j[0],d=j[1],b=Object(n.useState)(!1),g=Object(N.a)(b,2),m=g[0],O=g[1];return Object(u.jsx)(F.Provider,{value:{searchTerm:i,setSearchTerm:o,characters:h,handleSearch:function(){O(!0),P.getCharacters(a,i).then((function(e){var t=e.data.data.characters.results;d(t),O(!1)})).catch((function(e){console.log(e),O(!1)}))},isLoading:m},children:t})},L=c.p+"static/media/logo.66cb6353.png";c(62);var q=function(){var e=Object(n.useContext)(F),t=e.searchTerm,c=e.setSearchTerm,a=e.handleSearch;return Object(u.jsxs)("section",{className:"search-section",children:[Object(u.jsx)("img",{src:L,alt:"Rick and Morty logo",className:"search-section__logo"}),Object(u.jsxs)("div",{className:"search-section__input-container",children:[Object(u.jsx)(f,{type:"text",placeholder:"Search characters",value:t,change:function(e){var t=e.target;return c(t.value)}}),Object(u.jsx)(b,{classes:"search-section__button",onClick:a,children:"Search"})]})]})},M=c.p+"static/media/loading.1a60ec50.png";c(63);var B=function(){return Object(u.jsxs)(y,{children:[Object(u.jsx)("img",{src:M,alt:"Rick and Morty visiting an alien planet",className:"the-loading__img"}),Object(u.jsx)(v,{classes:"the-loading__text",children:"Loading"})]})};c(64);var D=function(e){var t=e.character,c=j()("character-card__img","Dead"===t.status&&"character-card__img--dead");return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(m,{classes:"character-card",children:[Object(u.jsx)("img",{src:t.image,alt:t.name,className:c}),Object(u.jsxs)("div",{className:"character-card__text-container",children:[Object(u.jsx)(_,{family:"seravek",weight:"bold",classes:"character-card__title",children:t.name}),Object(u.jsx)(v,{family:"seravek",classes:"character-card__subtitle",children:t.species})]})]})})};c(65);var I=function(){var e=Object(n.useContext)(F),t=e.characters,c=e.isLoading,a=j()("the-home",c&&" the-home--blur");return Object(u.jsxs)(u.Fragment,{children:[c&&Object(u.jsx)(B,{}),Object(u.jsx)("div",{className:a,children:Object(u.jsxs)("div",{className:"the-home__img-background",children:[Object(u.jsx)(q,{}),Object(u.jsx)("section",{className:"the-home__cards",children:t.map((function(e){return Object(u.jsx)(D,{character:e},e.id)}))})]})})]})},J=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/rick-morty-front-end-test",component:I}),Object(u.jsx)(o.a,{from:"*",to:"/rick-morty-front-end-test"})]})})};c(71);var R=function(){return Object(u.jsx)(T,{children:Object(u.jsx)(J,{})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};c(72);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root")),E()}},[[73,1,2]]]);
//# sourceMappingURL=main.7cb26881.chunk.js.map