(this.webpackJsonpworkspace=this.webpackJsonpworkspace||[]).push([[0],{163:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"signIn",(function(){return dn})),n.d(a,"signUp",(function(){return bn})),n.d(a,"logOut",(function(){return pn})),n.d(a,"checkCurrentUser",(function(){return jn}));var c,r,o,i,s,l,u,d,b,p,j,f,O,x,h,g,v,m,y,w,k,A,S,E,C,F,R,I,U,D,T=n(0),N=n.n(T),M=n(27),_=n.n(M),z=n(29),L=n(11),P=n(12),B=P.a.footer(c||(c=Object(L.a)(["\n\tdisplay: flex;\t\n\tjustify-content: center;\n\talign-items: center;    \n    width: 100%;    \n    height: 20px; \n    background-color: #2a9cff;\n    z-index: 10;\n"]))),W=B,H=P.a.p(r||(r=Object(L.a)(["\nmargin: 0;\n\tfont-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n\tfont-size: 10px;\n\tfont-weight: 400;\n\tcolor: #fff;\t\n"]))),V=H,X=n(3),Q=function(){return Object(X.jsx)(W,{children:Object(X.jsx)(V,{children:"\xa9 2021"})})},G=n(42),Y=P.a.div(o||(o=Object(L.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n   * {\n    text-decoration: none;\n  }\n"]))),q=P.a.h1(i||(i=Object(L.a)(["\n  padding: 10px;\n  font-size: 16px;\n  line-height: 16px;\n  color: #fff;\n  cursor: pointer;\n  \n  &:hover {    \n    background-color: rgba(0, 0, 0, 0.04);    \n  }\n"]))),J=function(){return Object(X.jsx)(Y,{children:Object(X.jsx)(G.b,{to:"/",children:Object(X.jsx)(q,{children:"Workspace"})})})},K=n(22),Z="USERS_LOGIN_REQUEST",$="USERS_SINGUP_REQUEST",ee="USERS_AUTH_SUCCESS",te="USER_AUTH_FAILURE",ne="USER_LOGOUT",ae="GET_CURRENT_USER",ce="LOADING",re=function(){return{type:ne}},oe=function(e){return{type:ee,payload:e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Somthing wrong ...";return{type:te,payload:e}},se=n(189),le=Object(P.a)(se.a)(s||(s=Object(L.a)(["\n  &:hover {\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.04);\n    border-radius: 0;\n  }\n"]))),ue=n(193),de=Object(P.a)(ue.a)(l||(l=Object(L.a)(["\n  fill: #fff;\n"]))),be=P.a.p(u||(u=Object(L.a)(["\n  padding: 10px;\n  font-size: 16px;\n  line-height: 16px;\n  color: #fff;\n"]))),pe=P.a.span(d||(d=Object(L.a)(["\n    font-size: 12px;\n    color: #ed0b0b;\n    & span {\n        color: #fff;\n        font-size: 16px;\n    }\n"]))),je=function(e){return e.auth.user},fe=function(e){return e.auth.loading},Oe=function(e){return e.workspaces.officesData},xe=function(e){return e.workspaces.selectedOffice},he=function(e){return e.workspaces.selectedOffice.floors},ge=function(e){return e.workspaces.selectedFloor},ve=function(e){return e.auth.errorAuth},me=function(){var e=Object(z.g)(),t=Object(K.c)(),n=Object(K.d)(je);Object(T.useEffect)((function(){t({type:ae})}),[]);return Object(X.jsxs)(le,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){n?(t(re()),e.push("/auth")):e.push("/auth")},color:"inherit",children:[Object(X.jsx)(de,{}),Object(X.jsx)(be,{children:n?Object(X.jsxs)(pe,{children:[JSON.stringify(n).slice(1,-1)," \xa0",Object(X.jsx)("span",{children:"log out"})]}):"log in"})]})},ye=P.a.header(b||(b=Object(L.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\tpadding: 0 10px;\n\tposition: fixed;\n\twidth: 100%;\n\theight: 40px;\n\ttop: 0;\n\tleft: 0;\n\tbackground-color: #2a9cff;\n\tz-index: 10;\n\t"]))),we=function(){return Object(X.jsxs)(ye,{children:[Object(X.jsx)(J,{}),Object(X.jsx)(me,{})]})},ke=P.a.div(p||(p=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #fff;\n  position: relative;\n  margin-top: 40px;\n  height: calc(100vh - 60px);\n  padding: 0 20px;\n"]))),Ae=function(e){var t=e.children;return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(we,{}),Object(X.jsx)(ke,{children:t}),Object(X.jsx)(Q,{})]})},Se=n(30),Ee=n(194),Ce=Object(P.a)(Ee.a)(j||(j=Object(L.a)(["\n  margin: 16px 0 2px 0;\n  padding: 10px 0;\n  background-color: #299cff;\n  color: #fff;\n"]))),Fe=n(203),Re=Object(P.a)(Fe.a)(f||(f=Object(L.a)(["\n  margin: 16px 0 0 0;\n"]))),Ie=P.a.form(O||(O=Object(L.a)(["\n  padding: 10px;\n"]))),Ue=n(210),De=Object(P.a)(Ue.a)(x||(x=Object(L.a)(["\n  background-color: #299cff;\n  padding: 28px;\n  margin: 0 auto;\n"]))),Te=n(195),Ne=Object(P.a)(Te.a)(h||(h=Object(L.a)(["\n  padding: 24px;\n  width: 320px;\n  margin: 70px auto;\n  transition: all 0.5s ease-in;\n"]))),Me=n(197),_e=n(206),ze=n(123),Le=n.n(ze),Pe=function(){return Object(X.jsx)(Ce,{type:"submit",color:"primary",variant:"contained",fullWidth:!0,children:"submit"})},Be=n(196),We=Object(P.a)(Be.a)(g||(g=Object(L.a)(["\n  color: #2b9cfc;\n"]))),He=P.a.div(v||(v=Object(L.a)(["\n  display: flex;\n  height: 100%;\n  align-items: center;\n"]))),Ve=function(){return Object(X.jsx)(He,{children:Object(X.jsx)(We,{})})},Xe={logIn:function(e){return{type:Z,payload:e}},signUp:function(e){return{type:$,payload:e}},logOut:re},Qe=Object(K.b)((function(e){return{user:je(e),errorAuth:ve(e),loading:fe(e)}}),Xe)((function(e){var t=e.user,n=e.errorAuth,a=e.loading,c=e.logIn,r=e.signUp,o=Object(T.useState)(""),i=Object(Se.a)(o,2),s=i[0],l=i[1],u=Object(T.useState)(""),d=Object(Se.a)(u,2),b=d[0],p=d[1],j=Object(T.useState)(!1),f=Object(Se.a)(j,2),O=f[0],x=f[1],h=function(e){"username"===e.target.name?l(e.target.value):"password"===e.target.name&&p(e.target.value)};return Object(X.jsx)(N.a.Fragment,{children:t?Object(X.jsx)(z.a,{to:"/"}):a?Object(X.jsx)(Ve,{}):Object(X.jsxs)(Ne,{elevation:10,children:[Object(X.jsx)(De,{children:Object(X.jsx)(Le.a,{fontSize:"large"})}),Object(X.jsxs)(Ie,{noValidate:!0,onSubmit:function(e){e.preventDefault(),(O?r:c)({email:s,password:b}),l(""),p("")},children:[Object(X.jsx)(Re,{type:"email",name:"username",label:"Email",placeholder:"Enter email",margin:"normal",value:s,onChange:h,fullWidth:!0,variant:"outlined",required:!0}),n?Object(X.jsx)("span",{children:n}):null,Object(X.jsx)(Re,{type:"password",name:"password",label:"Password",placeholder:"Enter password",margin:"normal",value:b,onChange:h,fullWidth:!0,variant:"outlined",required:!0}),Object(X.jsx)(Me.a,{control:Object(X.jsx)(_e.a,{color:"primary",checked:O,onChange:function(e){x((function(e){return!e}))},name:"newUser"}),label:"Create an account"}),Object(X.jsx)(Pe,{})]})]})})})),Ge=Object(P.a)(G.b)(m||(m=Object(L.a)(['\n  text-decoration: none;\n  margin-left: 10px;\n  font-family: "Open Sans", sans-serif;\n  font-size: 20px;\n  line-height: 21px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: #605efb;\n']))),Ye=P.a.li(y||(y=Object(L.a)(["\n  display: flex;\n  padding: 4px;\n  margin: 10px;\n  align-items: center;\n  border-bottom: 2px solid rgb(41 156 255 / 50%);\n  &:hover {    \n    border-color: #600cfb;\n  }\n  &:hover svg{\n    fill: #600cfb;\n  }\n"]))),qe=P.a.ul(w||(w=Object(L.a)(["\n  list-style: none;\n  margin: 20px auto;\n  padding: 0;\n"]))),Je=n(124),Ke=n.n(Je),Ze=function(e){var t=e.addresesData;return console.log(t),Object(X.jsx)(X.Fragment,{children:Object(X.jsx)(qe,{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(X.jsxs)(Ye,{children:[Object(X.jsx)(Ke.a,{color:"secondary"}),Object(X.jsx)(Ge,{to:"/office/".concat(e.id),id:e.id,children:e.addres})]},e.id)}))})})},$e=P.a.div(k||(k=Object(L.a)(["\n\tposition: relative;\n\twidth: 100%;\n\tmax-width: 250px;\n\tmargin: 12px 23px;\n"]))),et=n(208),tt=Object(P.a)(et.a)(A||(A=Object(L.a)(["\n  margin: 5px;\n"]))),nt=P.a.select(S||(S=Object(L.a)(['\n  width: 100%;\n  max-width: 250px;\n  padding: 15px;\n  margin: 0 auto;\n  outline: none;\n  box-sizing: border-box;\n  background-color: #ffffff;\n  font-family: "Open Sans", sans-serif;\n  font-size: 16px;\n  line-height: 21px;\n  font-weight: 400;\n  color: #600dfb;\n  text-transform: uppercase;\n  border: 2px solid #2b9cfc;\n  border-radius: 5px;\n  transition: ease-in-out 0.2s;\n  padding-right: 25px;\n  appearance: none;\n  background-image: url(',");\n  background-position: 95%;\n  background-repeat: no-repeat;\n  cursor: pointer;\n\n  &:hover {\n    border: 2px solid #4e4e4e;\n    transition: 0.2s ease-in-out;\n  }\n\n  &:focus {\n    border: 2px solid #4e4e4e;\n  }\n\n  & * {\n    color: #2b9cfc;   \n    font-size: 16px;\n  }\n"])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACXSURBVHgBfY/RDYIwFEVP6QKOwAh+mfjpJOoExgVEYRB1Azfw0wRNWIE9sNbXNCi0wE2a3Oadm/cuOBWvNVPKHilFuXNWkT8zsEfxFw6LbQxXM3RTiUvhs08w76t8ankb8vIcwUlz97Awxt7Ub6XW7cBvamHF3MNmxWlZq96d3ZAVMIB9h7DcP0QIx4F+iBAelwu5DgP6AipOP+ELHeuEAAAAAElFTkSuQmCC"),at=P.a.div(E||(E=Object(L.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 100%;\n"]))),ct=P.a.h2(C||(C=Object(L.a)(['\n  font-family: "Open Sans", sans-serif;\n  font-size: 20px;\n  line-height: 21px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: #605efb;\n']))),rt=function(e){var t,n=e.officesProps,a=Object(T.useState)(""),c=Object(Se.a)(a,2),r=c[0],o=c[1],i=Object(T.useState)([]),s=Object(Se.a)(i,2),l=s[0],u=s[1],d=Object(T.useState)(""),b=Object(Se.a)(d,2),p=b[0],j=b[1],f=Object(T.useState)([]),O=Object(Se.a)(f,2),x=O[0],h=O[1],g=function(e){var t=e.target;"selectCountry"===t.name?(o(t.value),u(Object.keys(n[t.value])),j(""),h([])):"selectCity"===t.name&&(j(t.value),h(n[r][t.value]))};return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(ct,{children:"choose a workplace"}),Object(X.jsxs)(at,{children:[Object(X.jsxs)($e,{children:[Object(X.jsx)(tt,{htmlFor:"selectCountry",children:"Select Country"}),Object(X.jsxs)(nt,{id:"selectCountry",name:"selectCountry",value:r,onChange:g,children:[Object(X.jsx)("option",{hidden:!0,value:"",children:"Select country"}),null===(t=Object.keys(n))||void 0===t?void 0:t.map((function(e,t){return Object(X.jsx)("option",{value:e,children:e},"officeProps-".concat(t))}))]})]}),Object(X.jsxs)($e,{children:[Object(X.jsx)(tt,{htmlFor:"selectCity",children:"Select City"}),Object(X.jsxs)(nt,{id:"selectCity",name:"selectCity",value:p,onChange:g,disabled:!r,children:[Object(X.jsx)("option",{hidden:!0,value:"",children:"Select sity"}),null===l||void 0===l?void 0:l.map((function(e,t){return Object(X.jsx)("option",{children:e},"city-".concat(t))}))]})]})]}),Object(X.jsx)(Ze,{addresesData:x})]})},ot="FETCH_OFFICES_DATA",it="FETCH_OFFICES_DATA_COMPLETE",st="FETCH_SELECTED_OFFICE",lt="FETCH_SELECTED_OFFICE_COMPLETE",ut="SET_SELECTED_FLOOR",dt="SET_RESERVATION",bt=function(e){return{type:lt,payload:e}},pt=function(e){return{type:ut,payload:e}},jt=function(e){return{type:dt,payload:e}},ft=function(){var e=Object(K.d)(je),t=Object(K.d)(fe),n=Object(K.c)(),a=Object(K.d)(Oe);return Object(T.useEffect)((function(){e&&n({type:ot})}),[e]),e||t?a?Object(X.jsx)(rt,{officesProps:a}):Object(X.jsx)(Ve,{}):Object(X.jsx)(z.a,{to:"/auth"})},Ot=P.a.p(F||(F=Object(L.a)(["\n    font-size: 16px;\n    text-transform: capitalize;\n"]))),xt=P.a.span(R||(R=Object(L.a)(["\n  color: #fff;\n  background-color: #299cff;\n  height: 25px;\n  width: 25px;\n  display: inline-block;\n  border-radius: 50%;\n  text-align: center;\n"]))),ht=function(){var e=Object(K.d)(he),t=Object(T.useState)(""),n=Object(Se.a)(t,2),a=n[0],c=n[1],r=Object(K.c)();return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(Ot,{children:["total floors: ",Object(X.jsx)(xt,{children:e.length})]}),Object(X.jsx)($e,{children:Object(X.jsx)(nt,{id:"selectFloor",name:"selectFloor",value:a,onChange:function(e){var t=e.target;c(t.value);var n=+t.value;r(pt(n))},children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(X.jsxs)("option",{value:"".concat(e.number),children:["floor - ",e.number]},"Floor-".concat(t))}))})})]})},gt=n(18),vt=n(129),mt=n(126),yt=n(57),wt=n(34),kt=n(204),At=n(211),St=n(201),Et=n(10),Ct=n(207),Ft=n(198),Rt=n(199),It=n(200),Ut=n(116),Dt=n.n(Ut),Tt=n(132),Nt=["children","classes","onClose"],Mt=Object(St.a)((function(e){return Object(At.a)({container:{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-between"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:250},occupantUser:{marginBottom:e.spacing(2)}})})),_t=Object(Et.a)((function(e){return Object(At.a)({root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})}))((function(e){var t=e.children,n=e.classes,a=e.onClose,c=Object(vt.a)(e,Nt);return Object(X.jsxs)(Ft.a,Object(gt.a)(Object(gt.a)({disableTypography:!0,className:n.root},c),{},{style:{textAlign:"center"},children:[Object(X.jsx)(Tt.a,{variant:"h6",children:t}),a&&Object(X.jsx)(se.a,{"aria-label":"close",className:n.closeButton,onClick:a,children:Object(X.jsx)(Dt.a,{})})]}))})),zt=Object(Et.a)((function(e){return{root:{padding:e.spacing(3)}}}))(Rt.a),Lt=Object(Et.a)((function(e){return{root:{margin:0,padding:e.spacing(1),justifyContent:"space-around"}}}))(It.a),Pt=function(e){var t=e.handleEventPopUp,n=e.dataAboutWorkplace,a=Mt(),c=Object(K.c)(),r=Object(K.d)(je),o=Object(K.d)(ge),i=Object(K.d)(xe),s=Object(T.useState)(),l=Object(Se.a)(s,2),u=l[0],d=l[1],b=Object(T.useState)(),p=Object(Se.a)(b,2),j=p[0],f=p[1],O=Object(T.useState)({idOffice:"",selectFloor:"",blocked:!1,endReservation:"",label:"",occupant:"",palceIndex:"",startReservation:"",type:""}),x=Object(Se.a)(O,2),h=x[0],g=x[1],v=(null!==n&&void 0!==n?n:{}).occupant,m=Object(T.useMemo)((function(){return Boolean(v&&r!==v)}),[r,v]);Object(T.useEffect)((function(){n&&(f(""===n.startReservation?new Date:new Date(n.startReservation)),d(""===n.endReservation?new Date:new Date(n.endReservation)),g({idOffice:i.id,selectFloor:"".concat(o-1),blocked:n.blocked,endReservation:n.endReservation,label:n.label,occupant:n.occupant,palceIndex:n.palceIndex,startReservation:n.startReservation,type:n.type}))}),[n,i.id,o]);return Object(X.jsx)(wt.a,{utils:mt.a,children:Object(X.jsx)(Ct.a,{onClose:t,"aria-labelledby":"customized-dialog-title",open:null!==n,children:n&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(_t,{id:"customized-dialog-title",onClose:t,children:[n.type," - ",n.label]}),Object(X.jsxs)(zt,{dividers:!0,children:[Object(X.jsx)(Tt.a,{className:a.occupantUser,children:h.occupant?h.occupant:null}),Object(X.jsxs)("form",{className:a.container,noValidate:!0,children:[Object(X.jsx)(kt.a,{disabled:m,id:"datetime-booking-place-start",label:"Start booking",className:a.textField,inputVariant:"outlined",value:j,onChange:function(e){f(e),d(e),g((function(t){return Object(gt.a)(Object(gt.a)({},t),{},{occupant:r,startReservation:Object(yt.a)(e,"yyyy/MM/dd"),endReservation:Object(yt.a)(e,"yyyy/MM/dd")})}))},minDate:j,format:"yyyy/MM/dd"}),Object(X.jsx)(kt.a,{disabled:m,id:"datetime-booking-place-end",label:"End booking",className:a.textField,inputVariant:"outlined",value:u,onChange:function(e){d(e),g((function(t){return Object(gt.a)(Object(gt.a)({},t),{},{occupant:r,endReservation:Object(yt.a)(e,"yyyy/MM/dd")})}))},minDate:u,format:"yyyy/MM/dd"})]})]}),Object(X.jsxs)(Lt,{children:[r===h.occupant?Object(X.jsx)(Ee.a,{disabled:m,onClick:function(){f(new Date),d(new Date);var e,t=(e=h,Object(gt.a)(Object(gt.a)({},e),{},{occupant:"",endReservation:"",startReservation:""}));g(t),c(jt(t))},variant:"contained",color:"secondary",children:"cancel booking"}):null,Object(X.jsx)(Ee.a,{disabled:m,onClick:function(){c(jt(h))},variant:"contained",color:"primary",children:"Save booking"})]})]})})})},Bt=P.a.div(I||(I=Object(L.a)(['\n  position: relative;\n  width: 1024px;\n  height: 640px;\n  background-image: url("','");\n  background-position: center;\n  background-repeat: no-repeat;\n'])),(function(e){return e.$image})),Wt=Object(St.a)({canvas:{border:"1px solid black",width:"100%",height:"100%",pointerEvents:"auto"},placeField:{cursor:"pointer",fill:"#c4c4c4","&:hover":{fill:"#299eff"}},placeLabel:{fontSize:"14px",lineHeight:"14px",fontWeight:"bold",fill:"#000000",cursor:"pointer"}}),Ht=function(e,t){switch(e){case t:return"orange";case"":return"green";default:return"red"}},Vt=function(){var e=Wt(),t=Object(K.d)(he),n=Object(K.d)(ge),a=Object(T.useState)(!1),c=Object(Se.a)(a,2),r=c[0],o=c[1],i=Object(K.d)(je),s=Object(T.useMemo)((function(){return t[n-1]}),[t,n]),l=s.places,u=s.floorImageSrc,d=Object(T.useState)(null),b=Object(Se.a)(d,2),p=b[0],j=b[1];Object(T.useEffect)((function(){o(!1);var e=new Image;e.addEventListener("load",(function(){o(!0)})),e.src=u}),[u]);return Object(X.jsxs)(X.Fragment,{children:[l&&r?Object(X.jsx)(Bt,{$image:u,children:Object(X.jsx)("svg",{id:"canvas",className:e.canvas,onClick:function(e){e.preventDefault();var t=e.target;if("rect"===t.tagName||"text"===t.tagName){var n=l[t.id];j({palceIndex:t.id,label:n.label,type:n.type,occupant:n.placeStatus.occupant,startReservation:n.placeStatus.start,endReservation:n.placeStatus.end,blocked:n.placeStatus.blocked})}},children:null===l||void 0===l?void 0:l.map((function(t,n){return Object(X.jsxs)("g",{id:"place-".concat(n+1),children:[Object(X.jsx)("rect",{id:"".concat(n),className:e.placeField,x:t.coordinates.x,y:t.coordinates.y,width:t.coordinates.width,height:t.coordinates.height,rx:"5",stroke:Ht(t.placeStatus.occupant,i),strokeWidth:"4px"}),Object(X.jsx)("text",{id:"".concat(n),className:e.placeLabel,x:t.coordinates.x+t.coordinates.width/2-16,y:t.coordinates.y+t.coordinates.height/2+4,children:t.label})]},"rect-".concat(n))}))})}):Object(X.jsx)(Ve,{}),Object(X.jsx)(Pt,{handleEventPopUp:function(){j(null)},dataAboutWorkplace:p})]})},Xt=P.a.div(U||(U=Object(L.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n\n  @media screen and (max-width: 900px) {\n    flex-direction: column;\n  }\n"]))),Qt=P.a.h2(D||(D=Object(L.a)(["\n  margin-left: 15px;\n"]))),Gt=function(){var e=Object(K.d)(je),t=Object(K.d)(fe),n=Object(K.c)(),a=Object(z.h)().officeId,c=Object(K.d)(xe),r=Object(T.useState)({country:"",city:"",location:""}),o=Object(Se.a)(r,2),i=o[0],s=o[1];return Object(T.useEffect)((function(){e&&n({type:st,payload:a})}),[e]),Object(T.useEffect)((function(){c&&s({country:c.addres.country,city:c.addres.city,location:c.addres.location})}),[c]),e||t?c?Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(Xt,{children:[Object(X.jsxs)(Qt,{children:["Location:",Object(X.jsxs)("em",{style:{color:"#299cff"},children:[i.country,"-",i.city,"-",i.location]})]}),Object(X.jsx)(ht,{})]}),Object(X.jsx)(Vt,{})]}):Object(X.jsx)(Ve,{}):Object(X.jsx)(z.a,{to:"/auth"})},Yt=function(){return Object(X.jsx)(Ae,{children:Object(X.jsxs)(z.d,{children:[Object(X.jsx)(z.b,{component:ft,exact:!0,path:"/"}),Object(X.jsx)(z.b,{component:Qe,path:"/auth"}),Object(X.jsx)(z.b,{component:Gt,path:"/office/:officeId"})]})})},qt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,213)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},Jt=n(60),Kt=n(127),Zt=n(125),$t={user:null,loading:!1,errorAuth:null};var en={officesData:{},selectedOffice:null,selectedFloor:1};var tn,nn=Object(Jt.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case ee:return Object(gt.a)(Object(gt.a)({},e),{},{user:a,loading:!1,errorAuth:null});case ne:return Object(gt.a)(Object(gt.a)({},e),{},{user:null});case Z:case $:case ae:return Object(gt.a)(Object(gt.a)({},e),{},{loading:!0});case te:return Object(gt.a)(Object(gt.a)({},e),{},{loading:!1,errorAuth:a});case ce:return Object(gt.a)(Object(gt.a)({},e),{},{loading:a});default:return e}},workspaces:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:en,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case it:return Object(gt.a)(Object(gt.a)({},e),{},{officesData:a});case lt:return Object(gt.a)(Object(gt.a)({},e),{},{selectedOffice:a});case ut:return Object(gt.a)(Object(gt.a)({},e),{},{selectedFloor:a});default:return e}}}),an=n(20),cn=n.n(an),rn=n(26),on=n(56),sn=n(76),ln=n(66),un=(n(158),ln.a.initializeApp({apiKey:"AIzaSyC74NFCYGLp9llv5lU40hqr1rqXbhelmwk",authDomain:"workspace-da013.firebaseapp.com",databaseURL:"https://workspace-da013-default-rtdb.firebaseio.com",projectId:"workspace-da013",storageBucket:"workspace-da013.appspot.com",messagingSenderId:"622809564203",appId:"1:622809564203:web:f92897d9649c5c6c51166e",measurementId:"G-DZX94FXST0"})),dn=function(){var e=Object(on.a)(cn.a.mark((function e(t){var n,a,c;return cn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,e.prev=1,e.next=4,un.auth().signInWithEmailAndPassword(n,a);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),c=e.t0.message,e.abrupt("return",c);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),bn=function(){var e=Object(on.a)(cn.a.mark((function e(t){var n,a,c;return cn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,e.prev=1,e.next=4,un.auth().createUserWithEmailAndPassword(n,a);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),c=e.t0.message,e.abrupt("return",c);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),pn=function(){un.auth().signOut()},jn=function(){return new Promise((function(e,t){var n=ln.a.auth().onAuthStateChanged((function(a){a?e(a):t(),n()}))}))},fn=cn.a.mark(vn),On=cn.a.mark(mn),xn=cn.a.mark(yn),hn=(tn={},Object(sn.a)(tn,Z,"signIn"),Object(sn.a)(tn,$,"signUp"),Object(sn.a)(tn,ne,"logOut"),tn),gn=function(){var e=Object(on.a)(cn.a.mark((function e(t,n){var c,r;return cn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,null===(c=a[n])||void 0===c?void 0:c.call(a,t);case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}();function vn(e){var t,n,c,r,o;return cn.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(t=e.type,n=e.payload,"logOut"!==(c=hn[t])){i.next=7;break}return i.next=5,Object(rn.b)(a[c]);case 5:i.next=17;break;case 7:return i.next=9,Object(rn.b)(gn,n,c);case 9:if(!(null===(o=i.sent)||void 0===o||null===(r=o.user)||void 0===r?void 0:r.email)){i.next=15;break}return i.next=13,Object(rn.c)(oe(o.user.email));case 13:i.next=17;break;case 15:return i.next=17,Object(rn.c)(ie(o));case 17:case"end":return i.stop()}}),fn)}function mn(){var e;return cn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(rn.b)(jn);case 3:return e=t.sent,t.next=6,Object(rn.c)(oe(e.email));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(rn.c)({type:ce,payload:!1});case 12:case"end":return t.stop()}}),On,null,[[0,8]])}function yn(){return cn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rn.e)([ae],mn);case 2:return e.next=4,Object(rn.e)([Z,$,ne],vn);case 4:case"end":return e.stop()}}),xn)}n(160);var wn=n(77),kn=function(e){var t=new Date;return Object(gt.a)(Object(gt.a)({},e),{},{floors:e.floors.map((function(e){return Object(gt.a)(Object(gt.a)({},e),{},{places:e.places.map((function(e){var n=new Date(e.placeStatus.end),a=Object(wn.a)(t,n);return Object(gt.a)(Object(gt.a)({},e),{},{placeStatus:Object(gt.a)(Object(gt.a)({},e.placeStatus),{},{end:a?Object(yt.a)(t,"yyyy-MM-dd"):e.placeStatus.end,start:a?Object(yt.a)(t,"yyyy-MM-dd"):e.placeStatus.start,occupant:a?"":e.placeStatus.occupant})})}))})}))})},An=function(){var e=Object(on.a)(cn.a.mark((function e(){return cn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ln.a.database().ref("officesData/").get().then((function(e){return e.exists()?e.val():(console.log("no data available"),null)})).catch((function(e){return console.log(e),null}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Sn=function(){var e=Object(on.a)(cn.a.mark((function e(t){return cn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ln.a.database().ref("offices/"+t).get().then((function(e){if(e.exists()){var t=e.val();return kn(t)}return console.log("no data available"),null})).catch((function(e){return console.log(e),null}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),En=function(){var e=Object(on.a)(cn.a.mark((function e(t){var n;return cn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e,n){ln.a.database().ref("offices/"+t.idOffice+"/floors/"+t.selectFloor+"/places/"+t.palceIndex+"/placeStatus/").set({blocked:t.blocked,start:t.startReservation,end:t.endReservation,occupant:t.occupant},(function(a){a?(n(),console.log("not save data",a.message)):(e(t.idOffice),console.log("data save in BD"))}))})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Cn=cn.a.mark(Un),Fn=cn.a.mark(Dn),Rn=cn.a.mark(Tn),In=cn.a.mark(Nn);function Un(){var e;return cn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(rn.b)(An);case 3:if(!(e=t.sent)){t.next=9;break}return t.next=7,Object(rn.c)({type:it,payload:e});case 7:t.next=10;break;case 9:console.log("fech data offices fail");case 10:return t.abrupt("return",e);case 13:return t.prev=13,t.t0=t.catch(0),console.log("Fetch date offices error:",t.t0),t.abrupt("return",null);case 17:case"end":return t.stop()}}),Cn,null,[[0,13]])}function Dn(e){var t,n;return cn.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(rn.b)(Sn,t);case 4:if(!(n=a.sent)){a.next=10;break}return a.next=8,Object(rn.c)(bt(n));case 8:a.next=11;break;case 10:console.log("fetch data office addres fail");case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),console.log("Fetch office addres error:",a.t0);case 16:case"end":return a.stop()}}),Fn,null,[[1,13]])}function Tn(e){var t,n,a,c;return cn.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(rn.b)(En,t);case 4:if(n=r.sent,a=t.selectFloor,!n){r.next=18;break}return r.next=9,Object(rn.b)(Sn,n);case 9:if(!(c=r.sent)){r.next=17;break}return r.next=13,Object(rn.c)(bt(c));case 13:return r.next=15,Object(rn.c)(pt(+a+1));case 15:r.next=18;break;case 17:console.log("fetch data office addres fail");case 18:r.next=23;break;case 20:r.prev=20,r.t0=r.catch(1),console.log("Set reservation select place error:",r.t0);case 23:case"end":return r.stop()}}),Rn,null,[[1,20]])}function Nn(){return cn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rn.e)([ot],Un);case 2:return e.next=4,Object(rn.e)([st],Dn);case 4:return e.next=6,Object(rn.e)([dt],Tn);case 6:case"end":return e.stop()}}),In)}var Mn=cn.a.mark(zn),_n=[yn,Nn];function zn(){return cn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rn.a)(_n.map((function(e){return Object(rn.d)(cn.a.mark((function t(){return cn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,Object(rn.b)(e);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0);case 9:t.next=0;break;case 11:case"end":return t.stop()}}),t,null,[[1,6]])})))})));case 2:case"end":return e.stop()}}),Mn)}var Ln=zn,Pn=Object(Kt.a)(),Bn=Object(Jt.createStore)(nn,Object(Zt.composeWithDevTools)(Object(Jt.applyMiddleware)(Pn)));Pn.run(Ln);var Wn=Bn,Hn=n(202);_.a.render(Object(X.jsx)(N.a.StrictMode,{children:Object(X.jsx)(K.a,{store:Wn,children:Object(X.jsxs)(G.a,{children:[Object(X.jsx)(Hn.a,{}),Object(X.jsx)(Yt,{})]})})}),document.getElementById("root")),qt()}},[[163,1,2]]]);
//# sourceMappingURL=main.f211c119.chunk.js.map