(this["webpackJsonpreact-table"]=this["webpackJsonpreact-table"]||[]).push([[0],{55:function(e,c,r){},60:function(e,c,r){"use strict";r.r(c);var t=r(0),n=r.n(t),i=r(8),a=r.n(i),o=(r(55),r(25)),s=[{id:65456465,name:"Sync 2",categories:["Windows software","Application"],creationDate:"2007-03-14T11:01:00.8031298",price:59.99,currency:"USD"},{id:50451123,name:"Sync 2 Cloud",categories:["Windows software","Application"],creationDate:"2015-09-23T16:51:10.8031298",price:49.99,currency:"USD"},{id:10288452,name:"SyncGene",categories:["Service"],creationDate:"2015-08-20T12:41:15.8031298",price:19.69,currency:"EUR"},{id:12258452,name:"Mergix",categories:["Service"],creationDate:"2014-09-13T10:21:00.8031298",price:9.99,currency:"USD"},{id:92258411,name:"Duplicate Killer",categories:["Windows software","Application"],creationDate:"2007-09-01T18:01:10.8031298",price:39.99,currency:"USD"},{id:88158421,name:"vCardWizard",categories:["Windows software","Application"],creationDate:"2011-10-23T14:51:20.8031298",price:59.99,currency:"EUR"},{id:65058421,name:"OST2",categories:["Windows software","Application"],creationDate:"2007-10-25T15:00:10.8031298",price:49.99,currency:"USD"},{id:72018421,name:"PST Merger",categories:["Windows software","Application"],creationDate:"2009-09-20T11:10:10.8031298",price:36.89},{id:92198228,name:"SendLater",categories:["Windows software","Application"],creationDate:"2008-02-02T10:25:13.8031298",price:16.39,currency:"USD"}],d=r(99),j=r(94),u=r(98),l=r(104),p=r(6);function b(e){var c=e.valueToOrderBy,r=e.orderDirection,t=e.handleRequestSort,n=function(e){return function(c){t(c,e)}};return Object(p.jsx)(j.a,{children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)(d.a,{keys:"id",children:Object(p.jsx)(l.a,{active:"id"===c,direction:"id"===c?r:"asc",onClick:n("id"),children:"Id"})}),Object(p.jsx)(d.a,{keys:"name",children:Object(p.jsx)(l.a,{active:"name"===c,direction:"name"===c?r:"asc",onClick:n("name"),children:"Name"})}),Object(p.jsx)(d.a,{keys:"categories",children:Object(p.jsx)(l.a,{active:"categories"===c,direction:"categories"===c?r:"asc",onClick:n("categories"),children:"Categories"})}),Object(p.jsx)(d.a,{keys:"creationDate",children:Object(p.jsx)(l.a,{active:"creationDate"===c,direction:"creationDate"===c?r:"asc",onClick:n("creationDate"),children:"Creation date"})}),Object(p.jsx)(d.a,{keys:"price",children:Object(p.jsx)(l.a,{active:"price"===c,direction:"price"===c?r:"asc",onClick:n("price"),children:"Price"})}),Object(p.jsx)(d.a,{keys:"currency",children:Object(p.jsx)(l.a,{active:"currency"===c,direction:"currency"===c?r:"asc",onClick:n("currency"),children:"Currency"})})]})})}var O=r(101),h=r(102),x=r(100);function g(e,c,r){return c[r]<e[r]?-1:c[r]>e[r]?1:0}var y=function(e,c){var r=e.map((function(e,c){return[e,c]}));return r.sort((function(e,r){var t=c(e[0],r[0]);return 0!==t?t:e[1]-r[1]})),r.map((function(e){return e[0]}))};function f(){var e,c,r=n.a.useState("asc"),t=Object(o.a)(r,2),i=t[0],a=t[1],j=n.a.useState("name"),l=Object(o.a)(j,2),f=l[0],m=l[1],v=n.a.useState(0),D=Object(o.a)(v,2),S=D[0],w=D[1],k=n.a.useState(5),C=Object(o.a)(k,2),T=C[0],P=C[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x.a,{children:Object(p.jsxs)(O.a,{children:[Object(p.jsx)(b,{valueToOrderBy:f,orderDirection:i,handleRequestSort:function(e,c){var r=f===c&&"asc"===i;m(c),a(r?"desc":"asc")}}),y(s,(e=i,c=f,"desc"===e?function(e,r){return g(e,r,c)}:function(e,r){return-g(e,r,c)})).slice(S*T,S*T+T).map((function(e,c){return Object(p.jsxs)(u.a,{children:[Object(p.jsx)(d.a,{children:e.id}),Object(p.jsx)(d.a,{children:e.name}),Object(p.jsx)(d.a,{children:e.categories}),Object(p.jsx)(d.a,{children:e.creationDate}),Object(p.jsx)(d.a,{children:e.price}),Object(p.jsx)(d.a,{children:e.currency})]},c)}))]})}),Object(p.jsx)(h.a,{rowsPerPageOptions:[1,2],component:"div",count:s.length,rowsPerPage:T,page:S,onChangePage:function(e,c){w(c)},onChangeRowsPerPage:function(e){P(parseInt(e.target.value),10),w(0)}})]})}var m=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(f,{})})};a.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.2bdfe071.chunk.js.map