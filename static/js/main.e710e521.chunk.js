(this["webpackJsonprick-morty-front-end-test"]=this["webpackJsonprick-morty-front-end-test"]||[]).push([[0],{42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(32),r=n.n(s),i=n(36),o=n(3),l=n(6),j=n.n(l),u=n(4),h=n(7),d=(n(42),n(1));var b=function(e){var t=e.children,n=e.classes,c=Object(h.a)(e,["children","classes"]),a=j()("g-button",n);return Object(d.jsx)("button",Object(u.a)(Object(u.a)({className:a},c),{},{children:t}))};n(44);function g(e){var t=e.children,n=e.classes,c=e.variant,a=Object(h.a)(e,["children","classes","variant"]),s=j()("g-card","g-card--".concat(c),n);return Object(d.jsx)("div",Object(u.a)(Object(u.a)({className:s},a),{},{children:t}))}g.defaultProps={variant:"normal"};var O=g;n(45);function m(e){var t=e.change,n=e.classes,c=e.onEnter,a=Object(h.a)(e,["change","classes","onEnter"]),s=j()("g-input",n);return Object(d.jsx)("input",Object(u.a)({className:s,onChange:t,onKeyPress:function(e){"Enter"===e.key&&c()}},a))}m.defaultProps={change:function(){},onEnter:function(){}};var f=m;n(46);function x(e){var t=e.color,n=e.children,c=e.classes,a=e.family,s=Object(h.a)(e,["color","children","classes","family"]),r=j()("g-text","g-text--".concat(t),"g-text--".concat(a),c);return Object(d.jsx)("p",Object(u.a)(Object(u.a)({className:r},s),{},{children:n}))}x.defaultProps={color:"white",family:"nunito"};var v=x;n(47);function p(e){var t=e.color,n=e.children,c=e.classes,a=e.family,s=e.spacing,r=e.tag,i=e.weight,o=Object(h.a)(e,["color","children","classes","family","spacing","tag","weight"]),l=r,b=j()("g-title","g-title--".concat(t),"g-title--".concat(a),"g-title--space-".concat(s),"g-title--".concat(i),c);return Object(d.jsx)(l,Object(u.a)(Object(u.a)({className:b},o),{},{children:n}))}p.defaultProps={color:"white",family:"nunito",spacing:"normal",tag:"h1",weight:"normal"};var _=p;n(48);var y=function(e){var t=e.children,n=e.classes,c=Object(h.a)(e,["children","classes"]),a=j()("g-modal",n);return Object(d.jsx)("div",Object(u.a)(Object(u.a)({className:a},c),{},{children:t}))},N=n(12),k=n(18),S=n(19),C=n(33),P=n(34),w=n(35),E=n.n(w),F=new(function(){function e(){Object(C.a)(this,e)}return Object(P.a)(e,[{key:"getCharacters",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return E.a.post("https://rickandmortyapi.com/graphql",{query:"\n        query {\n          characters(page: ".concat(e,', filter: { name: "').concat(t,'" }) {\n            info {\n              pages\n            }\n            results {\n              id,\n              name,\n              status,\n              species,\n              image,\n              origin {\n                name,\n                type,\n                dimension,\n                residents {\n                  id\n                }\n              },\n              location {\n                name,\n                type,\n                dimension,\n                residents {\n                  id\n                }\n              }\n            }\n          }\n        }\n      ')})}}]),e}()),T=Object(c.createContext)(),L=function(e){var t=e.children,n=Object(c.useState)(1),a=Object(N.a)(n,2),s=(a[0],a[1]),r=Object(c.useState)(1),i=Object(N.a)(r,2),o=i[0],l=i[1],j=Object(c.useState)(1),u=Object(N.a)(j,2),h=u[0],b=u[1],g=Object(c.useState)(""),O=Object(N.a)(g,2),m=O[0],f=O[1],x=Object(c.useState)([]),v=Object(N.a)(x,2),p=v[0],_=v[1],y=Object(c.useState)(!1),k=Object(N.a)(y,2),S=k[0],C=k[1];function P(e){C(!0),F.getCharacters(e,m).then((function(e){var t=e.data.data.characters,n=t.info,c=t.results;_(c),b(n.pages),C(!1)})).catch((function(e){console.log(e),C(!1)}))}var w={characters:p,handleSearch:function(){P(1),s(1),l(1)},handlePagination:function(e){l(e),P(e)},isLoading:S,maxPage:h,paginationPage:o,searchTerm:m,setSearchTerm:f};return Object(d.jsx)(T.Provider,{value:w,children:t})};n(70);var q=function(e){e.children;var t=e.classes,n=Object(h.a)(e,["children","classes"]),a=j()("g-pagination",t),s=Object(c.useContext)(T),r=s.maxPage,i=s.handlePagination,o=s.paginationPage,l=Object(c.useState)([]),b=Object(N.a)(l,2),g=b[0],O=b[1];function m(e){e<1||e>r||e===o||i(e)}return Object(c.useEffect)((function(){var e=[],t=o-2,n=o+2;t<1&&(n+=1-t,t=1),n>r&&(n=r);for(var c=t;c<=n;c++)e.push(c);O(e)}),[o,r]),Object(d.jsxs)("div",Object(u.a)(Object(u.a)({className:a},n),{},{children:[Object(d.jsx)(k.a,{icon:S.a,className:"".concat(1===o?"pagination__icon-disabled":"pagination__icon"),onClick:function(){return m(o-1)}}),g.map((function(e){return Object(d.jsx)("span",{className:"pagination__number".concat(e===o?" pagination__number--active":""),onClick:function(){return m(e)},children:e},e)})),Object(d.jsx)(k.a,{icon:S.b,className:"".concat(o===r?"pagination__icon-disabled":"pagination__icon"),onClick:function(){return m(o+1)}})]}))},M=n.p+"static/media/logo.66cb6353.png";n(71);var B=function(){var e=Object(c.useContext)(T),t=e.searchTerm,n=e.setSearchTerm,a=e.handleSearch;return Object(d.jsxs)("section",{className:"search-section",children:[Object(d.jsx)("img",{src:M,alt:"Rick and Morty logo",className:"search-section__logo"}),Object(d.jsxs)("div",{className:"search-section__input-container",children:[Object(d.jsx)(f,{type:"text",placeholder:"Search characters",value:t,change:function(e){var t=e.target;return n(t.value)},onEnter:a}),Object(d.jsx)(b,{classes:"search-section__button",onClick:a,children:"Search"})]})]})},D=n.p+"static/media/loading.1a60ec50.png";n(72);var I=function(){return Object(d.jsxs)(y,{children:[Object(d.jsx)("img",{src:D,alt:"Rick and Morty visiting an alien planet",className:"the-loading__img"}),Object(d.jsx)(v,{classes:"the-loading__text",children:"Loading"})]})};n(73);var J=function(e){var t=e.character,n=j()("character-card__img","Dead"===t.status&&"character-card__img--dead");return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(O,{classes:"character-card",children:[Object(d.jsx)("img",{src:t.image,alt:t.name,className:n}),Object(d.jsxs)("div",{className:"character-card__text-container",children:[Object(d.jsx)(_,{family:"seravek",weight:"bold",classes:"character-card__title",children:t.name}),Object(d.jsx)(v,{family:"seravek",classes:"character-card__subtitle",children:t.species})]})]})})};n(74);var R=function(){var e=Object(c.useContext)(T),t=e.characters,n=e.isLoading,a=j()("the-home",n&&" the-home--blur");return Object(d.jsxs)(d.Fragment,{children:[n&&Object(d.jsx)(I,{}),Object(d.jsx)("div",{className:a,children:Object(d.jsxs)("div",{className:"the-home__img-background",children:[Object(d.jsx)(B,{}),Object(d.jsx)("section",{className:"the-home__cards",children:t.map((function(e){return Object(d.jsx)(J,{character:e},e.id)}))}),t.length&&Object(d.jsx)("section",{className:"the-home__pagination-section",children:Object(d.jsx)(q,{})})]})})]})},K=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{exact:!0,path:"/rick-morty-front-end-test",component:R}),Object(d.jsx)(o.a,{from:"*",to:"/rick-morty-front-end-test"})]})})};n(77);var z=function(){return Object(d.jsx)(L,{children:Object(d.jsx)(K,{})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(78);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),A()}},[[79,1,2]]]);
//# sourceMappingURL=main.e710e521.chunk.js.map