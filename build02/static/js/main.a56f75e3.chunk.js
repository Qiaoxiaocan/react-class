(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{101:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},176:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),l=n.n(o),r=n(95),i=n(10),m=n(12),s=(n(101),function(){return c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement(m.b,{activeClassName:"active",exact:!0,to:"/"},"React"),c.a.createElement(m.b,{activeClassName:"active",to:"/doc"},"\u6587\u6863"),c.a.createElement(m.b,{activeClassName:"active",to:"/tuto"},"\u6559\u7a0b"),c.a.createElement(m.b,{activeClassName:"active",to:"/blog"},"\u535a\u5ba2"),c.a.createElement(m.b,{activeClassName:"active",to:"/comm"},"\u793e\u533a")))}),u=function(e){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h2",null,"React"),c.a.createElement("p",null,"\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93"),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.history.push("/doc")}},"\u5feb\u901f\u5f00\u59cb"),c.a.createElement("button",{onClick:function(){return e.history.push("/tuto")}},"\u5165\u95e8\u6559\u7a0b")))},p=n(13);n(173);var E=[{path:"/",exact:!0,component:u},{path:"/doc",exact:!1,component:Object(i.g)((function(e){var t=e.routes;return c.a.createElement("div",{className:"doc"},c.a.createElement("div",{className:"content"},c.a.createElement(i.d,null,t.map((function(e,t){return c.a.createElement(y,Object.assign({key:t},e))}))),c.a.createElement(i.a,{from:"/doc",to:"/doc/core"})),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement(m.b,{activeClassName:"left-blue",to:"/doc/core"},"\u6838\u5fc3\u6982\u5ff5")),c.a.createElement("li",null,c.a.createElement(m.b,{activeClassName:"left-blue",to:"/doc/guide"},"\u9ad8\u7ea7\u6307\u5f15")),c.a.createElement("li",null,c.a.createElement(m.b,{activeClassName:"left-blue",to:"/doc/api"},"API")),c.a.createElement("li",null,c.a.createElement(m.b,{activeClassName:"left-blue",to:"/doc/hooks"},"Hooks"))))})),pri:!0,routes:[{path:"/doc/core",component:function(){return c.a.createElement("h1",null,"core")}},{path:"/doc/guide",component:function(){return c.a.createElement("h1",null,"guide")}},{path:"/doc/api",component:function(){return c.a.createElement("h1",null,"api")}},{path:"/doc/hooks",component:function(){return c.a.createElement("h1",null,"hooks")}}]},{path:"/tuto",exact:!1,component:function(){return c.a.createElement("div",null,"Tuto")},pri:!0},{path:"/blog",exact:!1,component:function(){return c.a.createElement("div",null,"Blog")}},{path:"/comm",exact:!1,component:function(){return c.a.createElement("div",null,"Comm")}},{path:"/login",exact:!1,component:function(e){return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){localStorage.setItem("userinfo","tom"),e.history.replace(e.location.state)}},"\u767b\u9646"))}}],h=n(48),f=n(49),b=n(51),d=n(50);n(174),c.a.Component;function v(e){var t=e.component,n=Object(r.a)(e,["component"]);return c.a.createElement(i.b,Object.assign({},n,{render:function(e){var a=e.location;return localStorage.getItem("userinfo")?c.a.createElement(t,n):c.a.createElement(i.a,{to:{pathname:"/login",state:a}})}}))}function y(e){return e.pri?c.a.createElement(v,e):c.a.createElement(i.b,{path:e.path,render:function(t){return c.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})}var g=function(){return c.a.createElement(m.a,null,c.a.createElement(s,null),c.a.createElement(i.d,null,E.map((function(e,t){return c.a.createElement(y,Object.assign({key:t},e))}))))},k=(n(175),n(42)),C=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={selectedTab:""},a}return Object(f.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props.location.pathname;return c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(p.b,{unselectedTintColor:"#777",tintColor:"#777",barTintColor:"white"},c.a.createElement(p.b.Item,(e={title:"\u9996\u9875",key:"home",icon:c.a.createElement("i",{className:"iconfont icon-home1"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-home"})},Object(k.a)(e,"title","\u9996\u9875"),Object(k.a)(e,"key","tbhome"),Object(k.a)(e,"selected","/"===n),Object(k.a)(e,"onPress",(function(){t.props.history.push("/")})),e)),c.a.createElement(p.b.Item,{icon:c.a.createElement("i",{className:"iconfont icon-dilanxianxingiconyihuifu_huabanfuben"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-ai66"}),title:"\u8d2d\u7269\u8f66",key:"shopcart",selected:"/shopcart"===n,onPress:function(){t.props.history.push("/shopcart")}}),c.a.createElement(p.b.Item,{icon:c.a.createElement("i",{className:"iconfont icon-weibiao45127"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-list2"}),title:"\u8ba2\u5355\u5217\u8868",key:"list",selected:"/list"===n,onPress:function(){t.props.history.push("/list")}}),c.a.createElement(p.b.Item,{icon:c.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-wode1"}),title:"\u6211\u7684\u6dd8\u5b9d",key:"my",selected:"/mytaobao"===n,onPress:function(){t.props.history.push("/mytaobao")}})))}}]),n}(c.a.Component);Object(i.g)(C);l.a.render(c.a.createElement(g,null),document.getElementById("root"));fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},96:function(e,t,n){e.exports=n(176)}},[[96,1,2]]]);
//# sourceMappingURL=main.a56f75e3.chunk.js.map