(this.webpackJsonpgithubpages=this.webpackJsonpgithubpages||[]).push([[0],{11:function(e,t,c){e.exports={Product:"Product_Product__JR_rA",leftPane:"Product_leftPane__2OkA_",rightPane:"Product_rightPane__vPL4C",description:"Product_description__3JI2X",photos:"Product_photos__1Z0vJ",photo:"Product_photo__1I8vg",btn:"Product_btn__2fTzL"}},38:function(e,t,c){e.exports={Topbar:"Topbar_Topbar__2WmOK"}},39:function(e,t,c){e.exports={cardItem:"Products_cardItem__CAtVK",products:"Products_products__3Zab5",btn:"Products_btn__123uj"}},40:function(e,t,c){e.exports={movies:"Movies_movies__cbcBB"}},41:function(e,t,c){e.exports={form:"SignIn_form__1H_-P"}},42:function(e,t,c){e.exports={SignUp:"SignUp_SignUp__3Rhjd"}},49:function(e,t,c){},50:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(21),n=c.n(r),i=(c(49),c(10)),o=c(3),l=(c(29),c(50),c(38)),d=c.n(l),j=c(4),b=c(0),h=function(e){return Object(b.jsxs)("div",{className:d.a.Topbar,children:[Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:"Ally React"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{className:"nav-link",to:"/react",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)(j.b,{className:"nav-link",to:"/react/Products",children:"Products"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{className:"nav-link",to:"/react/Movies",children:"Movies"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{className:"nav-link",to:"/react/SignUp",children:"SignUp"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{className:"nav-link",to:"/react/SignIn",children:"SignIn"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{className:"nav-link",to:"/react/Cart",children:"Cart"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link disabled",href:"#",children:"Disabled"})})]})})]}),Object(b.jsxs)("div",{className:"jumbotron jumbotron-fluid",children:[Object(b.jsx)("h1",{className:"display-4",children:"React Store"}),Object(b.jsx)("p",{className:"lead",children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(b.jsx)("hr",{className:"my-4"}),Object(b.jsx)("p",{children:"It uses utility classes for typography and spacing to space content out within the larger container."}),Object(b.jsx)("p",{className:"lead",children:Object(b.jsx)("a",{className:"btn btn-primary btn-lg",href:"#",role:"button",children:"Learn more"})})]})]})},u=c(15),m=c(16),p=c(18),x=c(17),O=function(e){Object(p.a)(c,e);var t=Object(x.a)(c);function c(e){var a;return Object(u.a)(this,c),(a=t.call(this,e)).state={hasError:!1},a}return Object(m.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),c}(s.a.Component),f=c(24),v=c.n(f),g=c(39),N=c.n(g),y=c(12),k=Object(y.b)((function(e){return{products:e.products}}),(function(e){return{sendProducts:function(t){return e(function(e){return{type:"GET_PRODUCTS",payload:e}}(t))},sendToCart:function(t){return e(function(e){return{type:"ADD_TO_CART",payload:e}}(t))}}}))((function(e){return Object(a.useEffect)((function(){v.a.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then((function(t){e.sendProducts(t.data)})).catch((function(e){return console.log(e)}))}),[]),Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"card-deck d-flex flex-wrap products",children:0==e.products.length?Object(b.jsx)("h1",{children:"Loading..."}):e.products.map((function(t,c){return Object(b.jsxs)("div",{className:"card product",style:{width:"18rem"},children:[Object(b.jsx)("img",{className:"card-img-top",src:t.preview,alt:"Card image cap"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)(j.b,{to:"/react/Products/".concat(t.id),children:[Object(b.jsx)("h5",{className:"card-title",children:t.name}),Object(b.jsx)("p",{className:"card-para card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content"})]}),Object(b.jsx)("div",{className:N.a.btn,children:Object(b.jsx)("button",{onClick:function(){e.sendToCart(t)},children:"Add to Cart"})})]})]})}))})})})),_=c(40),P=c.n(_),S=function(e){Object(p.a)(c,e);var t=Object(x.a)(c);function c(){var e;Object(u.a)(this,c);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={movies:[],searchWord:"",searchResult:[],showSearch:!1},e.handleInputChange=function(t){e.setState({searchWord:t.target.value})},e.handleSearch=function(){var t=e.state.movies.filter((function(t){return t.Title.toLowerCase().includes(e.state.searchWord)||t.Year.includes(e.state.searchWord)}));e.setState({searchResult:t,showSearch:!0})},e.handleClose=function(){e.setState({showSearch:!1})},e}return Object(m.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war").then((function(e){return e.json()})).then((function(t){e.setState({movies:t.Search})})).catch((function(e){return new Error("Movies not fetched")}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"input",children:[Object(b.jsx)("input",{type:"text",onChange:function(t){e.handleInputChange(t)}}),Object(b.jsx)("button",{onClick:this.handleSearch,children:"Search"})]}),this.state.showSearch?Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:this.handleClose,children:"Close Search"}),0===this.state.searchResult.length?Object(b.jsx)("h1",{children:"No result Found"}):Object(b.jsx)("div",{className:"movies",children:this.state.searchResult.map((function(e){return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("h1",{children:e.Title}),Object(b.jsx)("img",{src:e.Poster,alt:"Poster"}),Object(b.jsx)("h2",{children:e.Year})]},e.imdbID)}))})]}):Object(b.jsx)("div",{className:"movies",children:this.state.movies.map((function(e){return Object(b.jsxs)("div",{id:e.imdbID,className:"card movie ".concat(P.a.cardItem),style:{width:"18rem"},children:[Object(b.jsx)("img",{className:"card-img-top",src:e.Poster,alt:"Card image cap"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:e.Title}),Object(b.jsx)("p",{className:"hidden card-text",children:e.Year}),Object(b.jsx)("a",{href:"#",className:"btn btn-primary",children:"Go somewhere"})]})]},e.imdbID)}))})]})}}]),c}(s.a.Component),C=function(){return Object(b.jsx)("h1",{children:"Home"})},w=c(11),I=c.n(w),E=c(44),T=c(43),D=c(13),R={userDetails:[],products:[],cart:[]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return Object(D.a)(Object(D.a)({},e),{},{products:t.payload});case"ADD_TO_CART":var c=Object(T.a)(e.cart),a=c.findIndex((function(e){return e.id==t.payload.id}));return-1==a?c.push(Object(D.a)(Object(D.a)({},t.payload),{},{count:1})):c[a].count++,Object(D.a)(Object(D.a)({},e),{},{cart:c});default:return e}},F=Object(E.a)(A),L=function(e){var t=Object(a.useState)({}),c=Object(i.a)(t,2),s=c[0],r=c[1],n=Object(a.useState)(""),l=Object(i.a)(n,2),d=l[0],j=l[1],h=Object(o.g)().id;return Object(a.useEffect)((function(){v.a.get("".concat("https://5d76bf96515d1a0014085cf9.mockapi.io/product","/").concat(h)).then((function(e){r(e.data),j(e.data.photos[0])})).catch((function(e){return console.log(e)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h1",{children:["Product Details - ",h]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:I.a.Product,children:[Object(b.jsx)("div",{className:I.a.leftPane,children:Object(b.jsx)("img",{src:d})}),Object(b.jsxs)("div",{className:I.a.rightPane,children:[Object(b.jsx)("h1",{children:s.name}),Object(b.jsx)("h3",{children:s.brand}),Object(b.jsxs)("h3",{className:I.a.price,children:["Price Rs :",Object(b.jsx)("span",{children:s.price})]}),Object(b.jsxs)("div",{className:I.a.description,children:[Object(b.jsx)("h3",{children:"Description"}),Object(b.jsx)("p",{children:s.description})]}),Object(b.jsx)("h3",{children:"Product Preview"}),Object(b.jsx)("div",{className:I.a.photos,children:s.hasOwnProperty("photos")?s.photos.map((function(e){return Object(b.jsx)("img",{onClick:function(){return j(e)},className:I.a.photo,src:e})})):Object(b.jsx)("h3",{children:"Loading .."})}),Object(b.jsx)("div",{className:I.a.btn,children:Object(b.jsx)("button",{children:"Add to Cart"})})]})]})]})},U=c(41),H=c.n(U),M=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=(t[0],t[1]),s=Object(a.useState)(""),r=Object(i.a)(s,2),n=(r[0],r[1],Object(a.useState)(!1)),l=Object(i.a)(n,2),d=l[0],j=(l[1],{name:"harsheet",password:"12345"});return Object(b.jsxs)(b.Fragment,{children:[d&&Object(b.jsx)(o.a,{to:"/react/products"}),Object(b.jsx)("h1",{children:"Sign In"}),Object(b.jsxs)("form",{className:H.a.form,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(b.jsx)("input",{onChange:function(e){return c(e.target.value.toLowerCase())},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(b.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(b.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(b.jsxs)("div",{className:"form-group form-check",children:[Object(b.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),Object(b.jsx)("label",{className:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)(W,{user:j})]})},W=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Child"}),e.user.name,e.user.password]})};W.defaultProps={user:{name:"hello",password:"hello"}};var J=c(42),q=c.n(J),B=function(e){Object(p.a)(c,e);var t=Object(x.a)(c);function c(e){var s;return Object(u.a)(this,c),(s=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),console.log(s.firstName,s.lastName,s.age)},s.state={},s.state={},s.firstName=Object(a.createRef)(),s.lastName=Object(a.createRef)(),s.age=Object(a.createRef)(),s}return Object(m.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:q.a.SignUp,children:[Object(b.jsx)("h1",{children:"Sign Up"}),this.props.products[0].name,Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",children:"First Name"}),Object(b.jsx)("input",{ref:this.firstName,type:"First Name",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",children:"Last Name"}),Object(b.jsx)("input",{ref:this.lastName,type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(b.jsx)("input",{ref:this.age,type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(b.jsx)("input",{ref:this.firstName,type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(b.jsx)("input",{ref:this.password,type:"password",class:"form-control",id:"exampleInputPassword1"})]}),Object(b.jsxs)("div",{class:"form-group form-check",children:[Object(b.jsx)("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),Object(b.jsx)("label",{class:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(b.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})]})}}]),c}(s.a.Component),G=Object(y.b)((function(e){return{products:e.products}}),null)(B),Y=Object(y.b)((function(e){return{cart:e.cart}}),(function(e){return{}}))((function(e){return console.log(e.cart),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Cart"}),Object(b.jsx)("div",{className:"card-deck d-flex flex-wrap products",children:0==e.cart.length?Object(b.jsx)("h1",{children:"Loading..."}):e.cart.map((function(e,t){return Object(b.jsxs)("div",{className:"card product",style:{width:"18rem"},children:[Object(b.jsx)("img",{className:"card-img-top",src:e.preview,alt:"Card image cap"}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)(j.b,{to:"/react/Products/".concat(e.id),children:[Object(b.jsx)("h5",{className:"card-title",children:e.name}),Object(b.jsx)("p",{className:"card-para card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content"}),Object(b.jsxs)("h5",{children:["Count of Item X ",e.count]})]})})]})}))})]})}));var K=function(){var e=Object(a.useState)("products"),t=Object(i.a)(e,2),c=(t[0],t[1]);return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(O,{children:[Object(b.jsx)(h,{showPage:function(e){c(e)}}),Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/",exact:!0,component:C}),Object(b.jsx)(o.b,{path:"/react",exact:!0,component:C}),Object(b.jsx)(o.b,{path:"/react/Cart",component:Y}),Object(b.jsx)(o.b,{path:"/react/Products",exact:!0,component:k}),Object(b.jsx)(o.b,{path:"/react/Products/:id",component:L}),Object(b.jsx)(o.b,{path:"/react/Movies",component:S}),Object(b.jsx)(o.b,{path:"/react/SignUp",component:G}),Object(b.jsx)(o.b,{path:"/react/SignIn",component:M}),Object(b.jsx)(o.b,{component:function(){return Object(b.jsx)("h1",{children:"404 Not Found"})}})]})]})})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(y.a,{store:F,children:Object(b.jsx)(j.a,{children:Object(b.jsx)(K,{})})})}),document.getElementById("root")),X()}},[[75,1,2]]]);
//# sourceMappingURL=main.2d77e81f.chunk.js.map