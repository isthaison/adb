(this.webpackJsonptimkhobau=this.webpackJsonptimkhobau||[]).push([[0],{23:function(e,c,t){},25:function(e,c,t){},31:function(e,c,t){},32:function(e,c,t){"use strict";t.r(c);var n=t(0),s=t.n(n),a=t(9),i=t.n(a),r=(t(23),t(24),t(17)),l=t(11),o=t(36),j=t(35),h=t(37),d=t(38),b=(t(25),t(1)),x=["#ff1744","#d500f9","#651fff","#00e676","#00b0ff","#ff3d00","#1de9b6","#76ff03","#3d5afe","#f50057","#00e5ff","#c6ff00","#ffea00","#2979ff","#ffc400","#ff9100"],O=["A","B","C","D","E","F","G","H","I","J","K"];function u(e){return Object(b.jsxs)("button",{style:{background:x[e.team]},className:"square",onClick:function(){e.onClick&&e.onClick(e.x,e.y)},onDoubleClick:function(){e.onDoubleClick&&e.onDoubleClick(e.x,e.y)},children:[e.value,"3"==="".concat(e.x)&&"3"==="".concat(e.y)&&Object(b.jsx)("span",{children:"\ud83c\udf81"})]})}var m=window.openDatabase("mdb","1.0","TestDB",10485760);function f(){var e=Object(n.useState)(Array(7).fill(Array(7).fill(-1))),c=Object(l.a)(e,2),t=c[0],s=c[1],a=Object(n.useState)({v:!1,x:-1,y:-1}),i=Object(l.a)(a,2),f=i[0],N=i[1],p=Object(n.useState)([]),g=Object(l.a)(p,2),k=g[0],S=g[1],T=Object(n.useState)(""),y=Object(l.a)(T,2),v=y[0],w=y[1],E=function(e,c){},C=function(e,c){0!==e&&0!==c&&6!==c&&6!==e||N({x:e,y:c,v:!0})};Object(n.useEffect)((function(){return A()}),[]);var A=function(){m.transaction((function(e){e.executeSql("CREATE TABLE IF NOT EXISTS questions (id unique, question text)"),e.executeSql("CREATE TABLE IF NOT EXISTS answers (id unique, answers text, result boolean )"),e.executeSql('INSERT INTO questions (id, question) VALUES (1, "question 1")'),e.executeSql('INSERT INTO questions (id, question) VALUES (2, "question 2")'),e.executeSql('INSERT INTO answers (id, answers,result) VALUES (1, "answers 1", 1)')})),m.transaction((function(e){e.executeSql("SELECT * FROM question",[],(function(e,c){console.log(c)}))}))},q=function(){return N({v:!1,x:-1,y:-1})};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"game",children:[Object(b.jsx)("div",{className:"game-info",children:Object(b.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:k.map((function(e,c){return Object(b.jsx)("span",{style:{background:x[c],margin:"1px",fontSize:"2rem"},children:Object(b.jsx)("b",{children:e.name})},"".concat(e.name).concat(c))}))})}),Object(b.jsx)("h2",{children:"\u0110i\u1ec1u ki\u1ec7n th\u1eafng:"}),Object(b.jsx)("p",{children:"\u0110\u01b0\u1eddng \u0111i ph\u1ea3i l\u1edbn h\u01a1n 7 \xf4"}),Object(b.jsx)("div",{className:"game-board",children:t.map((function(e,c){return Object(b.jsx)("div",{id:"".concat(c).concat(JSON.stringify(e)),className:"board-row",children:e.map((function(e,n){return Object(b.jsx)(u,{x:c,y:n,team:t[c][n],value:"".concat(O[c]).concat(n+1),onClick:E,onDoubleClick:C},"".concat(n).concat(JSON.stringify(e)))}))},"".concat(c).concat(JSON.stringify(e)))}))})]}),Object(b.jsxs)(o.a,{show:f.v,onHide:q,children:[Object(b.jsx)(o.a.Header,{closeButton:!0,children:Object(b.jsx)(o.a.Title,{children:"T\u1ea1o \u0111\u1ed9i m\u1edbi n\xe8 ^ ^ "})}),Object(b.jsxs)(o.a.Body,{children:["Woohoo, you're reading this text! (",f.x,",",f.y,")"]}),Object(b.jsxs)(j.a,{className:"mb-3",children:[Object(b.jsx)(j.a.Prepend,{children:Object(b.jsx)(j.a.Text,{id:"basic-addon1",children:"@"})}),Object(b.jsx)(h.a,{value:v,onChange:function(e){var c=e.target;return w(c.value)},placeholder:"Teamname","aria-label":"Teamname","aria-describedby":"basic-addon1"})]}),Object(b.jsxs)(o.a.Footer,{children:[Object(b.jsx)(d.a,{variant:"secondary",onClick:q,children:"\u0110\xf3ng l\u1ea1i \u0111i"}),Object(b.jsx)(d.a,{variant:"primary",onClick:function(){var e=f.x,c=f.y,n=JSON.parse(JSON.stringify(t));n[e][c]=k.length,console.log(n),s(n),S((function(e){return[].concat(Object(r.a)(e),[{name:v}])})),q(),w("")},children:"Th\xeam m\u1edbi n\xe8"})]})]})]})}var N=t.p+"static/media/logo.6ce24c58.svg";t(31);function p(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:N,className:"App-logo",alt:"logo"}),Object(b.jsxs)("p",{children:["Nh\xf3m ",Object(b.jsx)("code",{children:"ABC"})," never die."]})]})})}function g(){return Object(b.jsxs)("div",{className:"page-top",children:[Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("a",{className:"logo",href:".page-top",children:"ABC Team"}),Object(b.jsx)("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),Object(b.jsx)("label",{className:"menu-icon",htmlFor:"menu-btn",children:Object(b.jsx)("span",{className:"navicon"})}),Object(b.jsxs)("ul",{className:"menu",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#one",className:"link link-theme link-arrow",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#two",className:"link link-theme link-arrow",children:"GAME"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#three",className:"link link-theme link-arrow",children:"ABOUT"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#four",className:"link link-theme link-arrow",children:"CONTACT"})})]})]}),Object(b.jsxs)("div",{id:"main",className:"main",children:[Object(b.jsx)("section",{className:"intro",children:Object(b.jsxs)("article",{className:"container",children:[Object(b.jsxs)("h1",{children:["Front-end ",Object(b.jsx)("strong",{children:"Development"})]}),Object(b.jsx)("h2",{children:"Wanna craft the beautiful, responsive digital experiences you dream of ? We are here for you."}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:".footer",className:"link link-theme link-arrow",title:"Let\u2019s Build Something Great",children:"LET\u2019S BUILD SOMETHING GREAT"})})]})}),Object(b.jsxs)("section",{className:"work",children:[Object(b.jsxs)("article",{className:"container",id:"one",children:[Object(b.jsx)("h2",{children:"The Gregor Samsa story"}),Object(b.jsx)(p,{})]}),Object(b.jsxs)("article",{className:"container",id:"two",children:[Object(b.jsx)("h2",{children:"The Gregor Samsa story part two"}),Object(b.jsx)(f,{})]}),Object(b.jsxs)("article",{className:"container",id:"three",children:[Object(b.jsx)("h2",{children:"The Gregor Samsa story part three"}),Object(b.jsx)("p",{children:"About team"})]}),Object(b.jsxs)("article",{className:"container",id:"four",children:[Object(b.jsx)("h2",{children:"The Gregor Samsa story part four"}),Object(b.jsx)("p",{children:"\u201cSomething\u2019s fallen down in there\u201d, said the chief clerk in the room on the left."})]})]}),Object(b.jsx)("footer",{className:"footer",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("hr",{}),Object(b.jsx)("article",{className:"foot-content-left",children:Object(b.jsx)("ul",{children:"\xa92016 by Pixel Strecher"})}),Object(b.jsx)("article",{className:"foot-content",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"pixelstrecher@gmail.com",children:"pixelstrecher@gmail.com"})}),Object(b.jsx)("li",{className:"social",children:Object(b.jsx)("a",{href:"https://www.facebook.com/",children:"Facebook"})}),Object(b.jsx)("li",{className:"social",children:Object(b.jsx)("a",{href:"https://twitter.com/",children:"Twitter"})}),Object(b.jsx)("li",{className:"social",children:Object(b.jsx)("a",{href:"https://www.linkedin.com/company/",children:"LinkedIn"})})]})})]})})]})]})}var k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),k()}},[[32,1,2]]]);
//# sourceMappingURL=main.0f2bfc99.chunk.js.map