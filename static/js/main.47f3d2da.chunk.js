(this["webpackJsonpnotes-frontend"]=this["webpackJsonpnotes-frontend"]||[]).push([[0],{47:function(t,e,n){},49:function(t,e,n){},71:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(13),o=n.n(c),s=(n(47),n(2)),i=n(22),u=n(7),l=n.n(u),d=n(12),p=n(8),f=(n(49),n.p+"static/media/RajaG.05ab71b7.gif"),j=n(15),b=n.n(j),v="".concat("https://note-app-backend-rajag.herokuapp.com","/notes"),x=function(){var t=Object(d.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get(v);case 3:return e=t.sent,t.abrupt("return",e.data.notes);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(d.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.post(v,e);case 3:return n=t.sent,console.log(n),t.abrupt("return",n.data.note);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(d.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(v,"/").concat(e),t.next=4,b.a.delete(n);case 4:return r=t.sent,t.abrupt("return",r.data.reply);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(d.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(v,"/").concat(e._id),t.next=4,b.a.put(n,e);case 4:return r=t.sent,t.abrupt("return",r.data.updatedNote);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(d.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(v,"/").concat(e._id),t.next=4,b.a.put(n,e);case 4:return r=t.sent,t.abrupt("return",r.data.updatedNote);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),g=n(23),w=n(24),_=(n(71),n(1)),N=function(t){var e=t.note,n=t.onNoteUpdate,a=t.onNoteDelete,c=t.toggleHandler,o=t.isPinned,i=Object(r.useState)(!1),u=Object(p.a)(i,2),l=u[0],d=u[1],f=Object(s.a)(Object(s.a)({},e),{},{pinned:!e.pinned});return Object(_.jsxs)("div",{className:l?"note note--focused":"note",children:[Object(_.jsxs)("div",{className:"note__tools",children:[Object(_.jsx)("a",{className:"link",target:"_blank",rel:"noreferrer",href:e.link,children:Object(_.jsx)(g.a,{icon:w.a})}),Object(_.jsx)("button",{onClick:function(){c(e)},children:Object(_.jsx)(g.a,{icon:w.b})})]}),Object(_.jsx)("button",{onClick:function(){o(f),d(!1)},className:e.pinned?"note__pin note__pinned":"note__pin",children:Object(_.jsx)(g.a,{icon:w.c})}),Object(_.jsx)("button",{onClick:function(){a(e)},type:"button",className:"btn-close","aria-label":"Close"}),Object(_.jsx)("div",{onBlur:function(t){d(!1);var r=t.currentTarget.textContent;if(r!==e.text){var a=Object(s.a)(Object(s.a)({},e),{},{text:r||""});n(a)}},onFocus:function(){d(!0)},contentEditable:!0,suppressContentEditableWarning:!0,className:"note__text",children:e.text})]})},y=n(80),C=n(78),A=n(41),E=n(79);var T=function(){var t;!function(t){t[t.Add=0]="Add",t[t.Edit=1]="Edit"}(t||(t={}));var e=Object(r.useState)([]),n=Object(p.a)(e,2),a=n[0],c=n[1],o=Object(r.useState)(!1),u=Object(p.a)(o,2),j=u[0],b=u[1],v=Object(r.useState)(t.Add),g=Object(p.a)(v,2),w=g[0],T=g[1],S=function(){L({link:"",text:"",pinned:!1}),b(!1)},F=function(e){L(e),T(t.Edit),b(!0)},B=Object(r.useState)({link:"",text:"",pinned:!1}),H=Object(p.a)(B,2),I=H[0],L=H[1];Object(r.useEffect)((function(){P()}),[]);var P=function(){var t=Object(d.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:e=t.sent,n=e.sort((function(t){return t.pinned?-1:1})),console.log(n),c(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=function(){var t=Object(d.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:n=t.sent,r=a.map((function(t){return t._id===n._id?n:t})),c(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(){var t=Object(d.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(I);case 2:e=t.sent,c([].concat(Object(i.a)(a),[e])),S();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),J=function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:U(I),b(!1);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=function(){var t=Object(d.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e._id);case 2:n=a.filter((function(t){return t._id!==e._id})),c(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=Object(d.a)(l.a.mark((function t(e){var n,r,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:n=t.sent,r=a.map((function(t){return t._id===n._id?n:t})),o=r.sort((function(t){return t.pinned?-1:1})),c(o);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("div",{className:"t1-main",children:"Notes Application"}),Object(_.jsx)(y.a,{variant:"dark",className:"add-button",onClick:function(){T(t.Add),b(!0)},children:"+"}),Object(_.jsxs)(C.a,{show:j,onHide:S,children:[Object(_.jsx)(C.a.Header,{closeButton:!0,children:Object(_.jsxs)(C.a.Title,{children:[w===t.Add?"Add":"Edit"," Note"]})}),Object(_.jsxs)(C.a.Body,{children:[Object(_.jsx)(A.a,{controlId:"floatingTextarea2",label:"Text",children:Object(_.jsx)(E.a.Control,{onChange:function(t){var e=t.currentTarget.value;L(Object(s.a)(Object(s.a)({},I),{},{text:e}))},as:"textarea",value:I.text,placeholder:"Leave a comment here",style:{height:"100px"}})}),Object(_.jsx)(A.a,{controlId:"floatingTextarea",label:"Link",className:"mb-3 note-link",children:Object(_.jsx)(E.a.Control,{onChange:function(t){var e=t.currentTarget.value;L(Object(s.a)(Object(s.a)({},I),{},{link:e}))},placeholder:"Enter note Url",type:"url",value:I.link})})]}),Object(_.jsxs)(C.a.Footer,{children:[Object(_.jsx)(y.a,{variant:"secondary",onClick:S,children:"Close"}),Object(_.jsx)(y.a,{variant:"primary",onClick:w===t.Add?D:J,children:w===t.Add?"Create":"Update"})]})]}),Object(_.jsx)("div",{className:"notes-list",children:a.map((function(t,e){return Object(_.jsx)(N,{note:t,onNoteUpdate:U,onNoteDelete:G,toggleHandler:F,isPinned:M},e)}))}),Object(_.jsx)("div",{className:"note__logo",children:Object(_.jsx)("img",{src:f,alt:""})})]})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))};n(73),n(74);o.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(T,{})}),document.getElementById("root")),S()}},[[75,1,2]]]);
//# sourceMappingURL=main.47f3d2da.chunk.js.map