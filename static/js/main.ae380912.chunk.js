(this.webpackJsonppdf=this.webpackJsonppdf||[]).push([[0],{109:function(e,t,n){},111:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},132:function(e,t,n){},167:function(e,t){},168:function(e,t){},169:function(e,t){},170:function(e,t){},171:function(e,t){},172:function(e,t,n){},173:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),r=n(79),i=n.n(r),s=(n(109),n(20)),o=n.n(s),u=n(38),l=n(36),d=n(16),g=(n(111),n(80)),j=n(45),b=n(103),p=(n(116),n(117),n(81)),h=n.n(p),f=n(8),A=function(e){var t=e.imgsrc,n=e.pageId,c=e.handleDelete;return Object(f.jsxs)("div",{className:"page-card grid-item",children:[Object(f.jsx)("div",{className:"delete",children:Object(f.jsx)(h.a,{size:24,onClick:function(){return c(n)}})}),Object(f.jsx)("img",{src:t,width:"100%",alt:""})]})},m=(n(132),function(e){return Object(f.jsx)("div",{className:"topbar",children:e.children})}),v=n(192),O=n(15);j.Sortable.mount(new j.MultiDrag);var x=function(e){var t=e.file,n=e.fileId,a=e.updateList,r=e.updateCheck,i=Object(c.useState)([]),s=Object(d.a)(i,2),o=s[0],u=s[1],j=Object(c.useState)(!0),p=Object(d.a)(j,2),h=p[0],x=p[1];Object(c.useEffect)((function(){var e=t.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{id:"".concat(n,"-").concat(e.page-1),file:n})}));u(e)}),[t,n]);var w=function(e){var t=o.filter((function(t){return t.id!==e}));u(t),a({id:n,pages:t.map((function(e){return{from:e.file,page:e.page-1}})),checked:h},n)};return Object(f.jsx)("div",{className:"doc",children:Object(f.jsxs)(b.a,{style:{display:"flex"},defaultSize:{width:"200",height:"100vh"},maxWidth:"600",minWidth:"150",handleClasses:{right:"handle"},enable:{top:!1,right:!0,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},children:[Object(f.jsx)(m,{children:Object(f.jsx)(v.a,{checked:h,onChange:function(e){x(e.target.checked),r(n)},labelPlacement:O.a.right})}),Object(f.jsx)("div",{className:"pages",children:Object(f.jsx)(g.ReactSortable,{multiDrag:!0,list:o,setList:u,group:"groupName",animation:200,delayOnTouchStart:!0,delay:2,selectedClass:"selected",ghostClass:"selected",swapThreshold:.5,className:"grid-container",onSort:function(){a({id:n,pages:o.map((function(e){return{from:e.file,page:e.page-1}})),checked:h},n)},children:o.map((function(e){return Object(f.jsx)(A,{imgsrc:e.thumbnail,pageId:e.id,handleDelete:w},e.id)}))})})]})})},w=n(55),D=n(97),k=n.n(D),S=n(47);S.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(S.version,"/pdf.worker.js");var I=function(e,t){var n=t/e.getViewport({scale:1}).width,c=e.getViewport({scale:n}),a=document.createElement("canvas");return a.height=c.height,a.width=c.width,e.render({canvasContext:a.getContext("2d"),viewport:c}).promise.then((function(){return a.toDataURL()})).catch((function(e){return console.error(e)}))},N=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.getDocument({url:t}).promise;case 3:return c=e.sent,console.log("PDF loaded"),a=Array.from({length:c.numPages},(function(e,t){return t+1})),e.abrupt("return",Promise.all(a.map((function(e){return c.getPage(e).then((function(e){return I(e,n)})).then((function(t){return{page:e,thumbnail:t}}))}))));case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),E=(n(172),n(173),n(189));function R(e){var t=e.handlefile,n=e.processing,a=c.useState(!1),r=Object(d.a)(a,2),i=(r[0],r[1]),s=c.useRef(null);function o(){i(!1),clearTimeout(s.current)}return Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{children:Object(f.jsx)(E.a,{className:"uploader",multiple:!0,accept:"application/pdf",onCancel:o,onDrop:function(e,n){t(e)},progressMessage:n?"Loading... hang tight.":""})})})}var B=n(190),L=n(100);function P(e){var t=e.handlefile,n=e.handleSave,c=e.loaded,a=e.isLoading,r=e.isSaving,i=e.pageCount;return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(m,{}),Object(f.jsxs)("div",{className:"input",children:[Object(f.jsx)(L.a,{children:"Arrange & Combine PDF (severless)"}),Object(f.jsx)("a",{href:"https://github.com/ynynl/severless-pdf-merge",children:Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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"})}),Object(f.jsx)("div",{children:Object(f.jsx)(R,{handlefile:t,processing:a})}),c&&Object(f.jsx)("div",{className:"button",children:Object(f.jsxs)(B.a,{onClick:n,isLoading:r,children:["Combine and Save ",i," Pages"]})})]})]})}var M=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),i=Object(d.a)(r,2),s=i[0],g=i[1],j=Object(c.useState)([]),b=Object(d.a)(j,2),p=b[0],h=b[1],A=Object(c.useState)(!1),m=Object(d.a)(A,2),v=m[0],O=m[1],D=Object(c.useState)(!1),S=Object(d.a)(D,2),I=S[0],E=S[1];Object(c.useEffect)((function(){var e=n.map((function(e,t){return t>p.length-1?{id:t,pages:e.map((function(e){return{from:t,page:e.page-1}})),checked:!0}:p[t]}));h(e)}),[n]);var R=p.reduce((function(e,t){return t.checked?e+t.pages.length:e}),0),B=function(e,t){var n=p.map((function(n){return n.id===t?e:n}));h(n)},L=function(e){var t=p.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{checked:!t.checked}):t}));h(t)},M=function(){var e=Object(u.a)(o.a.mark((function e(t){var c,r,i,u,l,d,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(!0),e.prev=1,c=[],r=[],i=0;case 5:if(!(i<t.length)){e.next=15;break}return u=t[i],e.next=9,J(u);case 9:l=e.sent,r.push(w.PDFDocument.load(l)),c.push(N(l,600));case 12:i++,e.next=5;break;case 15:return e.next=17,Promise.all(r);case 17:return d=e.sent,e.next=20,Promise.all(c);case 20:j=e.sent,g(s.concat(d)),a(n.concat(j)),O(!1),e.next=30;break;case 26:e.prev=26,e.t0=e.catch(1),console.log(e.t0),O(!1);case 30:case"end":return e.stop()}}),e,null,[[1,26]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,c,a,r,i,u,l,g;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,w.PDFDocument.create();case 3:t=e.sent,n=0;case 5:if(!(n<p.length)){e.next=24;break}if(!p[n].checked){e.next=21;break}c=p[n].pages,console.log("save",c),a=0;case 10:if(!(a<c.length)){e.next=21;break}return r=c[a],e.next=14,t.copyPages(s[r.from],[r.page]);case 14:i=e.sent,u=Object(d.a)(i,1),l=u[0],t.addPage(l);case 18:a++,e.next=10;break;case 21:n++,e.next=5;break;case 24:return e.next=26,t.save();case 26:g=e.sent,k()(g,"mergedPDF.pdf","application/pdf"),E(!1);case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function J(e){return new Promise((function(t,n){var c=new FileReader;c.onload=function(e){t(e.target.result)},c.onerror=function(e){n(e)},c.readAsDataURL(e)}))}return Object(f.jsxs)("div",{className:"App",children:[n.map((function(e,t){return Object(f.jsx)(x,{className:"row",fileId:t,file:e,updateList:B,updateCheck:L},t)})),Object(f.jsx)(P,{className:"row",handlefile:M,handleSave:U,loaded:!!p.length,isLoading:v,isSaving:I,pageCount:R})]})},U=n(102),J=n(25),T=n(191),C=n(178),Y=new U.a;i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(J.Provider,{value:Y,children:Object(f.jsx)(T.a,{theme:C.a,children:Object(f.jsx)(M,{})})})}),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.ae380912.chunk.js.map