(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{13:function(e,t,a){e.exports={wrapper:"Message_wrapper__2F8YL",img_container:"Message_img_container__1lotc",message_container:"Message_message_container__3HJrW"}},14:function(e,t,a){e.exports={superInput:"SuperInputText_superInput__qPRCo",errorInput:"SuperInputText_errorInput__wCArk",error:"SuperInputText_error__2w2xs"}},18:function(e,t,a){e.exports={default:"SuperButton_default__1eEbH",red:"SuperButton_red__3UKEr"}},19:function(e,t,a){e.exports={someClass:"Greeting_someClass__2BoUI",error:"Greeting_error__aqHgc"}},20:function(e,t,a){e.exports={blue:"HW4_blue__3iyA0",column:"HW4_column__25g8K"}},21:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__2qY9l",spanClassName:"SuperCheckbox_spanClassName__3p4ht"}},25:function(e,t,a){e.exports={App:"App_App__3PEJY"}},28:function(e,t,a){e.exports=a(39)},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),o=(a(33),a(25)),u=a.n(o),i=a(7);var m=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,"Links"),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/PRE_JUNIOR"},"Pre Junior")),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/JUNIOR"},"Junior")),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/JUNIOR_PLUS"},"Junior+"))))},s=a(1);var E=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},d=a(13),p=a.n(d);var f=function(e){var t=e.name,a=e.avatar,n=e.time,l=e.message;return r.a.createElement("div",{className:p.a.wrapper},r.a.createElement("div",{className:p.a.img_container},r.a.createElement("img",{src:a,alt:""})),r.a.createElement("div",{className:p.a.message_container},r.a.createElement("h4",null,t),r.a.createElement("p",null,l),r.a.createElement("span",null,n)))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Some Name",_="some text",b="22:00";var g=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(f,{name:v,avatar:h,message:_,time:b}))},C=a(6),k=a(9),N=a(18),O=a.n(N),w=function(e){var t=e.red,a=e.className,n=Object(k.a)(e,["red","className"]),l="".concat(t?O.a.red:O.a.default," ").concat(a);return console.log({restProps:n}),r.a.createElement("button",Object.assign({className:l},n))};var x=function(e){return r.a.createElement("div",null,r.a.createElement("div",{key:e.affair._id}," ",e.affair.name,"  ",r.a.createElement(w,{red:!0,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))};var j=function(e){var t=e.data.map((function(t){return r.a.createElement(x,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement(w,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(w,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(w,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(w,{onClick:function(){e.setFilter("low")}},"Low"))},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(n.useState)(y),t=Object(C.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(C.a)(c,2),u=o[0],i=o[1],m=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e.filter((function(e){return"low"===e.priority}))}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},S=a(27),U=a(19),J=a.n(U),R=a(14),P=a.n(R),A=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(k.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(P.a.error," ").concat(u||""),s="".concat(c?"".concat(P.a.errorInput," ").concat(o):P.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:s},i)),c&&r.a.createElement("span",{className:m}," ",c," "))},T=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=J.a.error,u=l?o:"";return r.a.createElement("div",null,r.a.createElement(A,{value:t,onChange:a,error:u,className:J.a.blue}),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},H=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(C.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),m=Object(C.a)(i,2),s=m[0],E=m[1],d=t.length;return r.a.createElement(T,{name:o,setNameCallback:function(e){u(e.currentTarget.value),E("")},addUser:function(){""!==o.trim()?(a(o),alert("Hello ".concat(o," !"))):E("Error"),u("")},error:s,totalUsers:d})},L=a(41);var F=function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(H,{users:a,addUserCallback:function(e){var t={_id:Object(L.a)(),name:e};l([t].concat(Object(S.a)(a)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},M=a(20),W=a.n(M),B=a(21),K=a.n(B),q=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(k.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(K.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:K.a.spanClassName},l))};var Y=function(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),i=Object(C.a)(u,2),m=i[0],s=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:W.a.column},r.a.createElement(A,{value:a,onChangeText:l,onEnter:o,error:c,className:W.a.blue}),r.a.createElement(w,{red:!0,onClick:o},"delete "),r.a.createElement(q,{checked:m,onChangeChecked:s},"some text "),r.a.createElement(q,{checked:m,onChange:function(e){return s(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var G=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(I,null),r.a.createElement(F,null),r.a.createElement(Y,null))};var X=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"HELLO I'M JUNIOR"))};var Z=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"HELLO I'M JUNIOR+"))};var $=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,render:function(){return r.a.createElement(s.a,{to:"PRE_JUNIOR"})}}),r.a.createElement(s.b,{path:"/PRE_JUNIOR",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(s.b,{path:"/JUNIOR",render:function(){return r.a.createElement(X,null)}}),r.a.createElement(s.b,{path:"/JUNIOR_PLUS",render:function(){return r.a.createElement(Z,null)}}),"/JUNIOR // add routes",r.a.createElement(s.b,{render:function(){return r.a.createElement(E,null)}})))};var z=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(m,null),r.a.createElement($,null)))};var D=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.3dbcdbef.chunk.js.map