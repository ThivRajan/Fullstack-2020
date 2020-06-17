(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),l=t(2),o=function(e){var n=e.filterChange;return r.a.createElement(r.a.Fragment,null,"Filter By: ",r.a.createElement("input",{onChange:n})," ",r.a.createElement("br",null))},i=function(e){var n=e.onChange,t=e.value,a=e.text;return r.a.createElement(r.a.Fragment,null,a," ",r.a.createElement("input",{onChange:n,value:t})," ",r.a.createElement("br",null))},m=function(e){var n=e.nameChange,t=e.numChange,a=e.handleClick,u=e.nameValue,c=e.numValue;return r.a.createElement("form",null,r.a.createElement(i,{onChange:n,value:u,text:"Name: "}),r.a.createElement(i,{onChange:t,value:c,text:"Number: "}),r.a.createElement("button",{type:"submit",onClick:a},"Add"))},d=function(e){var n=e.person,t=e.handleClick;return r.a.createElement(r.a.Fragment,null,n.name," ",n.number,r.a.createElement("button",{id:n.id,onClick:t},"Delete")," ",r.a.createElement("br",null))},s=function(e){var n=e.persons,t=e.handleClick;return r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement(d,{person:e,key:e.id,handleClick:t})})))},f=function(e){var n=e.message,t={borderRadius:"5px",padding:"10px",background:"lightgrey",marginBottom:"1rem"};return e.error?(t.border="solid 2px red",t.color="red"):(t.border="solid 2px green",t.color="green"),null===n?null:r.a.createElement("div",{style:t},n)},h=t(3),b=t.n(h),g="/api/persons",p=function(){return b.a.get(g).then((function(e){return e.data}))},E=function(e){return b.a.post(g,e).then((function(e){return e.data}))},C=function(e,n){return b.a.put("".concat(g,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return b.a.delete("".concat(g,"/").concat(e))},k=function(){Object(a.useEffect)((function(){p().then((function(e){u(e),x(e)}))}),[]);var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),d=i[0],h=i[1],b=Object(a.useState)(""),g=Object(l.a)(b,2),k=g[0],j=g[1],O=Object(a.useState)(t),w=Object(l.a)(O,2),y=w[0],x=w[1],F=Object(a.useState)(null),S=Object(l.a)(F,2),T=S[0],N=S[1],V=Object(a.useState)(!1),B=Object(l.a)(V,2),D=B[0],A=B[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(f,{message:T,error:D}),r.a.createElement(o,{filterChange:function(e){x(t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())})))}}),r.a.createElement("h2",null,"New Contact"),r.a.createElement(m,{nameChange:function(e){h(e.target.value)},numChange:function(e){j(e.target.value)},handleClick:function(e){e.preventDefault();var n=t.find((function(e){return e.name===d}));null!=n?window.confirm("".concat(d," is already in the phonebook, replace their old number with the new one?"))&&C(n.id,{id:n.id,name:n.name,number:k}).then((function(e){u(t.map((function(t){return t.id!=n.id?t:e}))),x(t.map((function(t){return t.id!=n.id?t:e}))),N("Number of ".concat(e.name," successfully changed")),A(!1),setTimeout((function(){return N(null)}),5e3)})).catch((function(){N("".concat(n.name," has already been deleted from the server")),A(!0),setTimeout((function(){return N(null)}),5e3)})):E({id:d,name:d,number:k}).then((function(e){u(t.concat(e)),x(t.concat(e)),h(""),j(""),N("Added ".concat(e.name)),A(!1),setTimeout((function(){return N(null)}),5e3)})).catch((function(e){h(""),j(""),N("Name must be at least 3 characters & number must be at least 8 digits"),A(!0),setTimeout((function(){return N(null)}),5e3)}))},nameValue:d,numValue:k}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(s,{persons:y,handleClick:function(e){var n=e.target.id,a=t.find((function(e){return e.id==n}));window.confirm("Delete ".concat(a.name,"?"))&&v(n).then((function(){var e=t.filter((function(e){return e.id!=n}));u(e),x(e),N("".concat(a.name," successfully deleted")),A(!1),setTimeout((function(){return N(null)}),5e3)})).catch((function(){N("".concat(a.name," has already been deleted from the server")),A(!0),setTimeout((function(){return N(null)}),5e3)}))}}))};c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0e5b8a85.chunk.js.map