(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(2),c=n.n(a),l=n(3),u=n(4),s=n(6),i=n(5),f=function(t){var e=t.goods;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,e.map((function(t){return r.a.createElement("li",{key:t.id,style:{color:"".concat(t.color)}},t.name)}))))},m=(n(12),function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));return t.json()}))}),d=function(){return m().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).splice(0,5)}))},h=function(){return m().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},p=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={goods:[]},t.showAllHandler=function(e){e().then((function(e){return t.setState({goods:e})}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of Goods"),r.a.createElement("button",{type:"button",onClick:function(){return t.showAllHandler(m)}},"show all"),r.a.createElement("button",{type:"button",onClick:function(){return t.showAllHandler(d)}},"show 5 first"),r.a.createElement("button",{type:"button",onClick:function(){return t.showAllHandler(h)}},"show only red"),this.state.goods.length>0&&r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",null,"Table"),r.a.createElement(f,{goods:this.state.goods})))}}]),n}(r.a.Component);c.a.render(r.a.createElement(p,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.e13af836.chunk.js.map