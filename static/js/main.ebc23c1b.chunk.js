(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{140:function(t,e,n){},141:function(t,e,n){"use strict";n.r(e);var c,r,a,u,o,i,s,b,j=n(0),l=n.n(j),O=n(29),d=n.n(O),f=n(19),h=n(15),p=n(22),v=n(4),x=n(76),g=n.n(x),k=n(28),m=n(3),N=n(23),L=n(9),y=n(7),_=Object(v.c)([],(c={},Object(m.a)(c,L.i,(function(t,e){return e.payload})),Object(m.a)(c,L.c,(function(t,e){return[e.payload].concat(Object(p.a)(t))})),Object(m.a)(c,L.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(m.a)(c,y.i,(function(){return[]})),Object(m.a)(c,L.l,(function(t,e){var n=e.payload;return t.map((function(t){return t.id===n.id?n:t}))})),c)),C=Object(v.c)("",Object(m.a)({},L.m,(function(t,e){return e.payload}))),w=Object(v.c)(!1,(r={},Object(m.a)(r,L.h,(function(){return!0})),Object(m.a)(r,L.i,(function(){return!1})),Object(m.a)(r,L.g,(function(){return!1})),Object(m.a)(r,L.b,(function(){return!0})),Object(m.a)(r,L.c,(function(){return!1})),Object(m.a)(r,L.a,(function(){return!1})),Object(m.a)(r,L.e,(function(){return!0})),Object(m.a)(r,L.f,(function(){return!1})),Object(m.a)(r,L.d,(function(){return!1})),r)),A=Object(v.c)(!1,(a={},Object(m.a)(a,L.k,(function(){return!0})),Object(m.a)(a,L.l,(function(){return!1})),Object(m.a)(a,L.j,(function(){return!1})),a)),E=Object(v.c)(null,(u={},Object(m.a)(u,L.g,(function(t,e){return e.payload})),Object(m.a)(u,L.a,(function(t,e){return e.payload})),Object(m.a)(u,L.d,(function(t,e){return e.payload})),Object(m.a)(u,L.j,(function(t,e){return e.payload})),u)),S=Object(N.b)({items:_,filter:C,loading:w,error:E,updateLoading:A}),R={name:null,email:null},q=Object(v.c)(R,(o={},Object(m.a)(o,y.l,(function(t,e){return e.payload.user})),Object(m.a)(o,y.f,(function(t,e){return e.payload.user})),Object(m.a)(o,y.i,(function(){return R})),Object(m.a)(o,y.c,(function(t,e){return e.payload})),o)),T=Object(v.c)(null,(i={},Object(m.a)(i,y.l,(function(t,e){return e.payload.token})),Object(m.a)(i,y.f,(function(t,e){return e.payload.token})),Object(m.a)(i,y.i,(function(){return null})),i)),U=Object(v.c)(null,(s={},Object(m.a)(s,y.j,(function(t,e){return e.payload})),Object(m.a)(s,y.d,(function(t,e){return e.payload})),Object(m.a)(s,y.g,(function(t,e){return e.payload})),Object(m.a)(s,y.a,(function(t,e){return e.payload})),s)),z=Object(v.c)(!1,(b={},Object(m.a)(b,y.l,(function(){return!0})),Object(m.a)(b,y.f,(function(){return!0})),Object(m.a)(b,y.b,(function(){return!0})),Object(m.a)(b,y.c,(function(){return!0})),Object(m.a)(b,y.i,(function(){return!1})),Object(m.a)(b,y.j,(function(){return!1})),Object(m.a)(b,y.d,(function(){return!1})),Object(m.a)(b,y.a,(function(){return!1})),b)),B=Object(N.b)({user:q,token:T,isAuthenticated:z,error:U}),M=Object(p.a)(Object(v.d)({serializableCheck:{ignoredActions:[k.a,k.f,k.b,k.c,k.d,k.e]}})),P={key:"token",storage:g.a,whitelist:["token"]},J=Object(v.a)({reducer:{contacts:S,auth:Object(k.g)(P,B)},middleware:M,devTools:!1}),G=Object(k.h)(J),F=n(77),H=n(10),I={home:"/",register:"/register",login:"/login",contacts:"/contacts"},K=function(t){return t.auth.isAuthenticated},X=function(t){return t.auth.user.email},D=n(33),Q=n.n(D),V=n(2);function W(){var t=Object(h.c)(K);return Object(V.jsx)("nav",{children:Object(V.jsxs)("ul",{className:Q.a.NavLinksList,children:[Object(V.jsx)("li",{children:Object(V.jsx)(f.c,{exact:!0,to:I.home,className:Q.a.NavLink})}),Object(V.jsx)("li",{children:Object(V.jsx)(f.c,{exact:!0,to:I.home,className:Q.a.NavLink,activeClassName:Q.a["NavLink-active"],children:"Home"})}),t&&Object(V.jsx)("li",{children:Object(V.jsx)(f.c,{to:I.contacts,className:Q.a.NavLink,activeClassName:Q.a["NavLink-active"],children:"Contacts"})})]})})}var Y=n(167),Z=n(168),$=n(81),tt=n.n($),et=n(43),nt=n(17),ct=n(55),rt=n.n(ct),at=Object(nt.a)({root:{backgroundColor:"rgb(71, 126, 128)",color:"#ffffff"}})(Y.a);function ut(){var t=Object(h.b)(),e=Object(j.useCallback)((function(){return t(Object(et.c)())}),[t]),n=Object(h.c)(X);return Object(V.jsxs)("div",{className:rt.a.UserMenu,children:[Object(V.jsx)(at,{avatar:Object(V.jsx)(Z.a,{}),label:n}),Object(V.jsx)("button",{onClick:e,className:rt.a.logoutbutton,children:Object(V.jsx)(tt.a,{})})]})}var ot=n(35),it=n.n(ot),st=function(){return Object(V.jsxs)("ul",{className:it.a.NavLinksList,children:[Object(V.jsx)("li",{children:Object(V.jsx)(f.c,{to:I.register,className:it.a.NavLink,activeClassName:it.a["NavLink-active"],children:"Register"})}),Object(V.jsx)("li",{children:Object(V.jsx)(f.c,{to:I.login,className:it.a.NavLink,activeClassName:it.a["NavLink-active"],children:"Login"})})]})},bt=n(165),jt=n(82),lt=n.n(jt);function Ot(){var t=Object(h.c)(K);return Object(V.jsx)(bt.a,{position:"static",children:Object(V.jsxs)("div",{className:lt.a.AppBar,children:[Object(V.jsx)(W,{}),t?Object(V.jsx)(ut,{}):Object(V.jsx)(st,{})]})})}var dt=n(72),ft=n.n(dt),ht=n(24),pt=n(6),vt=["redirectTo","children"];function xt(t){var e=t.redirectTo,n=t.children,c=Object(pt.a)(t,vt),r=Object(h.c)(K);return Object(V.jsx)(H.b,Object(ht.a)(Object(ht.a)({},c),{},{children:r?n:Object(V.jsx)(H.a,{to:e})}))}var gt=["redirectTo","children"];function kt(t){var e=t.redirectTo,n=t.children,c=Object(pt.a)(t,gt),r=Object(h.c)(K);return Object(V.jsx)(H.b,Object(ht.a)(Object(ht.a)({},c),{},{children:r&&c.restricted?Object(V.jsx)(H.a,{to:e}):n}))}kt.defaultProps={restricted:!0};n(84);var mt=Object(j.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,203))})),Nt=Object(j.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,204))})),Lt=Object(j.lazy)((function(){return Promise.all([n.e(7),n.e(4)]).then(n.bind(null,202))}));function yt(){var t=Object(h.b)();return Object(j.useEffect)((function(){t(Object(et.a)())}),[t]),Object(V.jsx)(f.b,{basename:"/",children:Object(V.jsxs)(j.Suspense,{fallback:Object(V.jsx)(ft.a,{type:"TailSpin",color:"#80cbc4",height:80,width:80,className:"loader"}),children:[Object(V.jsx)(Ot,{}),Object(V.jsxs)(H.d,{children:[Object(V.jsx)(H.b,{exact:!0,path:I.home}),Object(V.jsx)(kt,{path:I.register,redirectTo:I.contacts,restricted:!0,children:Object(V.jsx)(Nt,{})}),Object(V.jsx)(kt,{path:I.login,redirectTo:I.contacts,restricted:!0,children:Object(V.jsx)(mt,{})}),Object(V.jsx)(xt,{path:I.contacts,redirectTo:I.login,children:Object(V.jsx)(Lt,{})})]})]})})}n(139),n(140);d.a.render(Object(V.jsx)(l.a.StrictMode,{children:Object(V.jsx)(f.a,{children:Object(V.jsx)(h.a,{store:J,children:Object(V.jsx)(F.a,{loading:"Loading...",persistor:G,children:Object(V.jsx)(yt,{})})})})}),document.getElementById("root"))},33:function(t,e,n){t.exports={NavLinksList:"Navigation_NavLinksList__22t4o",NavLink:"Navigation_NavLink__3gii4","NavLink-active":"Navigation_NavLink-active__11abE"}},35:function(t,e,n){t.exports={NavLinksList:"AuthNav_NavLinksList__3G5so",NavLink:"AuthNav_NavLink__3nEiw","NavLink-active":"AuthNav_NavLink-active__3GXe5"}},43:function(t,e,n){"use strict";n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return O})),n.d(e,"a",(function(){return d}));var c=n(39),r=n(27),a=n.n(r),u=n(7),o=n(31),i=n.n(o);i.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var s=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){i.a.defaults.headers.common.Authorization=""},j=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(u.k)()),e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:c=e.sent,s(c.data.token),n(Object(u.l)(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(u.j)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},l=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(u.e)()),e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:c=e.sent,s(c.data.token),n(Object(u.f)(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(u.d)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(u.h)()),t.prev=1,t.next=4,i.a.post("/users/logout");case 4:b(),e(Object(u.i)()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(u.g)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e,n){var c,r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),r=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return s(r),e(Object(u.b)()),t.prev=5,t.next=8,i.a.get("/users/current");case 8:o=t.sent,e(Object(u.c)(o.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(u.a)(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},55:function(t,e,n){t.exports={UserMenu:"UserMenu_UserMenu__3Jabz",logoutbutton:"UserMenu_logoutbutton__7K5Os"}},7:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return u})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return f}));var c=n(4),r=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),u=Object(c.b)("auth/registerError"),o=Object(c.b)("auth/loginRequest"),i=Object(c.b)("auth/loginSuccess"),s=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),l=Object(c.b)("auth/logoutError"),O=Object(c.b)("auth/getCurrentUserRequest"),d=Object(c.b)("auth/getCurrentUserSuccess"),f=Object(c.b)("auth/getCurrentUserError")},82:function(t,e,n){t.exports={AppBar:"AppBar_AppBar__2_q4r"}},9:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return l})),n.d(e,"k",(function(){return O})),n.d(e,"l",(function(){return d})),n.d(e,"j",(function(){return f})),n.d(e,"m",(function(){return h}));var c=n(4),r=Object(c.b)("contacts/fetchContactsRequest"),a=Object(c.b)("contacts/fetchContactsSuccess"),u=Object(c.b)("contacts/fetchContactsError"),o=Object(c.b)("contacts/addContactRequest"),i=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),b=Object(c.b)("contacts/deleteContactRequest"),j=Object(c.b)("contacts/deleteContactSuccess"),l=Object(c.b)("contacts/deleteContactError"),O=Object(c.b)("contacts/updateContactRequest"),d=Object(c.b)("contacts/updateContactSuccess"),f=Object(c.b)("contacts/updateContactError"),h=Object(c.b)("phonebook/updateFilter")}},[[141,2,3]]]);
//# sourceMappingURL=main.ebc23c1b.chunk.js.map