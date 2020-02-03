(this["webpackJsonprestaurant-project-2"]=this["webpackJsonprestaurant-project-2"]||[]).push([[0],{138:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(19),s=t.n(r),c=(t(88),t(89),t(12)),i=t(13),o=t(16),m=t(14),u=t(15),d=(t(90),t(2)),h=t(60),E=function(e){var a=e.dish;e.onClick;return l.a.createElement(d.d,null,l.a.createElement(h.a,{to:"/menu/".concat(a.id)},l.a.createElement(d.g,{width:"100%",src:a.image,alt:a.name}),l.a.createElement(d.h,null,l.a.createElement(d.k,null,a.name))))},f=function(e){var a=e.dishes.map((function(a){return l.a.createElement("div",{className:"col-12 col-md-5 m-1"},l.a.createElement(E,{dish:a,onClick:e.onClick}))}));return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(d.a,null,l.a.createElement(d.b,null,l.a.createElement(h.a,{to:"/home"},"Home")),l.a.createElement(d.b,{active:!0},"Menu")),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Menu"),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row"},a))},g=t(9),p=t(140),b=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).toggleNav=t.toggleNav.bind(Object(g.a)(t)),t.toggleModal=t.toggleModal.bind(Object(g.a)(t)),t.handleLogin=t.handleLogin.bind(Object(g.a)(t)),t.state={isNavOpen:!1,isModalOpen:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(d.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},l.a.createElement(d.v,{toggle:this.toggleModal},"Login"),l.a.createElement(d.u,null,l.a.createElement(d.n,{onSubmit:this.handleLogin},l.a.createElement(d.o,null,l.a.createElement(d.r,{htmlFor:"username"},"Username"),l.a.createElement(d.p,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),l.a.createElement(d.o,null,l.a.createElement(d.r,{htmlFor:"password"},"Password"),l.a.createElement(d.p,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),l.a.createElement(d.o,{check:!0},l.a.createElement(d.r,{check:!0},l.a.createElement(d.p,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),l.a.createElement(d.c,{type:"submit",value:"submit",color:"primary"},"Login")))),l.a.createElement(d.y,{dark:!0,expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement(d.A,{onClick:this.toggleNav}),l.a.createElement(d.z,{className:"mr-auto",href:"/"},l.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),l.a.createElement(d.m,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(d.w,{navbar:!0},l.a.createElement(d.x,null,l.a.createElement(p.a,{className:"nav-link",to:"/home"},l.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),l.a.createElement(d.x,null,l.a.createElement(p.a,{className:"nav-link",to:"/aboutus"},l.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),l.a.createElement(d.x,null,l.a.createElement(p.a,{className:"nav-link",to:"/menu"},l.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),l.a.createElement(d.x,null,l.a.createElement(p.a,{className:"nav-link",to:"/contactus"},l.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),l.a.createElement(d.w,{className:"ml-auto",navbar:!0},l.a.createElement(d.x,null,l.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},l.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),l.a.createElement(d.q,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-header"},l.a.createElement("div",{className:"col-12 col-sm-6"},l.a.createElement("h1",null,"Ristorante con Fusion"),l.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))))}}]),a}(n.Component);function v(e){var a=e.item;return l.a.createElement(d.d,null,l.a.createElement(d.g,{src:a.image,alt:a.name}),l.a.createElement(d.e,null,l.a.createElement(d.k,null,a.name),a.designation?l.a.createElement(d.i,null,a.designation):null,l.a.createElement(d.j,null,a.description)))}var N=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-start"},l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(v,{item:e.dish})),l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(v,{item:e.promotion})),l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(v,{item:e.leader}))))},y=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},l.a.createElement("h5",null,"Links"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement(h.a,{to:"/home"},"Home")),l.a.createElement("li",null,l.a.createElement(h.a,{to:"/aboutus"},"About Us")),l.a.createElement("li",null,l.a.createElement(h.a,{to:"/menu"},"Menu")),l.a.createElement("li",null,l.a.createElement(h.a,{to:"/contactus"},"Contact Us")))),l.a.createElement("div",{className:"col-7 col-sm-5"},l.a.createElement("h5",null,"Our Address"),l.a.createElement("address",null,"121, Clear Water Bay Road",l.a.createElement("br",null),"Clear Water Bay, Kowloon",l.a.createElement("br",null),"HONG KONG",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",l.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),l.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},l.a.createElement("div",{className:"text-center"},l.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},l.a.createElement("i",{className:"fa fa-google-plus"})),l.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},l.a.createElement("i",{className:"fa fa-youtube"})),l.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},l.a.createElement("i",{className:"fa fa-envelope-o"}))))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},w=t(6),k=function(e){return function(a){return!a||a.length<=e}},O=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={isModalOpen:!1},t.toggleModal=t.toggleModal.bind(Object(g.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(g.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){alert(JSON.stringify(e)),console.log(JSON.stringify(e))}},{key:"render",value:function(){var e,a=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.c,{outline:!0,type:"button",color:"secondary",onClick:this.toggleModal},l.a.createElement("i",{className:"fa fa-pencil"})," ","Submit Comment"),l.a.createElement(d.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},l.a.createElement(d.v,{toggle:this.toggleModal},"Submit Comment"),l.a.createElement(d.u,null,l.a.createElement("div",{className:"col-12"},l.a.createElement(w.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},l.a.createElement(d.B,{className:"form-group"},l.a.createElement(d.r,{htmlFor:"rating"},"Rating"),l.a.createElement(w.Control.select,{model:".rating",name:"rating",id:"rating",className:"form-control"},l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement(d.B,{className:"form-group"},l.a.createElement(d.r,{htmlFor:"yourName"},"Your Name"),l.a.createElement(w.Control.text,{model:".yourName",id:"yourName",name:"yourName",placeholder:"Your Name",className:"form-control",validators:{minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:k(15)}}),l.a.createElement(w.Errors,{className:"text-danger",model:".yourName",show:"touched",messages:{minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})),l.a.createElement(d.B,{className:"form-group"},l.a.createElement(d.r,{htmlFor:"comment"},"Comment"),l.a.createElement(w.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"})),l.a.createElement(d.B,null,l.a.createElement(d.c,{type:"submit",color:"primary"},"Submit")))))))}}]),a}(n.Component);function C(e){var a=e.dish;return l.a.createElement(d.d,null,l.a.createElement(d.g,{top:!0,src:a.image,alt:a.name}),l.a.createElement(d.e,null,l.a.createElement(d.k,null,a.name),l.a.createElement(d.j,null,a.description)))}function I(e){var a=e.comments;if(null!=a&&a.length>0){var t=a.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("p",null,e.comment),l.a.createElement("p",null,"-- ",e.author+", "+(a=e.date,new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(a))))));var a}));return l.a.createElement("div",null,l.a.createElement("h4",null,"Comments"),l.a.createElement("ul",{className:"list-unstyled"},t),l.a.createElement(O,null))}return l.a.createElement("div",null)}var j=function(e){return null!=e.dish?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(d.a,null,l.a.createElement(d.b,null,l.a.createElement(h.a,{to:"/menu"},"Menu")),l.a.createElement(d.b,{active:!0},e.dish.name)),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,e.dish.name),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-5 m-1"},l.a.createElement(C,{dish:e.dish})),l.a.createElement("div",{className:"col-12 col-md-5 m-1"},l.a.createElement(I,{comments:e.comments})))):l.a.createElement("div",null)},x=t(35),M=t(81),S=function(e){return e&&e.length},F=function(e){return function(a){return!a||a.length<=e}},L=function(e){return function(a){return a&&a.length>=e}},T=function(e){return!isNaN(Number(e))},A=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},B=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleBlur=function(e){return function(a){t.setState({touched:Object(M.a)({},t.state.touched,Object(x.a)({},e,!0))})}},t.state={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:"",touched:{firstname:!1,lastname:!1,telnum:!1,email:!1}},t.handleInputChange=t.handleInputChange.bind(Object(g.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(g.a)(t)),t.handleBlur=t.handleBlur.bind(Object(g.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(x.a)({},n,t))}},{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e))}},{key:"validate",value:function(e,a,t,n){var l={firstname:"",lastname:"",telnum:"",email:""};this.state.touched.firstname&&e.length<3?l.firstname="First Name should be >= 3 characters":this.state.touched.firstname&&e.length>10&&(l.firstname="First Name should be <= 10 characters"),this.state.touched.lastname&&a.length<3?l.lastname="Last Name should be >= 3 characters":this.state.touched.lastname&&a.length>10&&(l.lastname="Last Name should be <= 10 characters");return this.state.touched.telnum&&!/^\d+$/.test(t)&&(l.telnum="Tel. Number should contain only numbers"),this.state.touched.email&&1!==n.split("").filter((function(e){return"@"===e})).length&&(l.email="Email should contain a @"),l}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(d.a,null,l.a.createElement(d.b,null,l.a.createElement(h.a,{to:"/home"},"Home")),l.a.createElement(d.b,{active:!0},"Contact Us")),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Contact Us"),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Location Information")),l.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},l.a.createElement("h5",null,"Our Address"),l.a.createElement("address",null,"121, Clear Water Bay Road",l.a.createElement("br",null),"Clear Water Bay, Kowloon",l.a.createElement("br",null),"HONG KONG",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope"}),": ",l.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),l.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},l.a.createElement("h5",null,"Map of our Location")),l.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},l.a.createElement("div",{className:"btn-group",role:"group"},l.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},l.a.createElement("i",{className:"fa fa-phone"})," Call"),l.a.createElement("a",{role:"button",className:"btn btn-info",href:"skype.com"},l.a.createElement("i",{className:"fa fa-skype"})," Skype"),l.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},l.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Send us your Feedback")),l.a.createElement("div",{className:"col-12 col-md-9"},l.a.createElement(w.LocalForm,{onSubmit:function(a){return e.handleSubmit(a)}},l.a.createElement(d.B,{className:"form-group"},l.a.createElement(d.r,{htmlFor:"firstname",md:2},"First Name"),l.a.createElement(d.l,{md:10},l.a.createElement(w.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:S,minLength:L(3),maxLength:F(15)}}),l.a.createElement(w.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),l.a.createElement(d.B,{className:"form-group"},l.a.createElement(d.r,{htmlFor:"lastname",md:2},"Last Name"),l.a.createElement(d.l,{md:10},l.a.createElement(w.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:S,minLength:L(3),maxLength:F(15)}}),l.a.createElement(w.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),l.a.createElement(d.B,{className:"form-group"},l.a.createElement(d.r,{htmlFor:"telnum",md:2},"Contact Tel."),l.a.createElement(d.l,{md:10},l.a.createElement(w.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:S,minLength:L(3),maxLength:F(15),isNumber:T}}),l.a.createElement(w.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),l.a.createElement(d.B,{className:"form-group"},l.a.createElement(d.r,{htmlFor:"email",md:2},"Email"),l.a.createElement(d.l,{md:10},l.a.createElement(w.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:S,validEmail:A}}),l.a.createElement(w.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),l.a.createElement(d.B,{className:"form-group"},l.a.createElement(d.l,{md:{size:6,offset:2}},l.a.createElement("div",{className:"form-check"},l.a.createElement(d.r,{check:!0},l.a.createElement(w.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",l.a.createElement("strong",null,"May we contact you?")))),l.a.createElement(d.l,{md:{size:3,offset:1}},l.a.createElement(w.Control.select,{model:".contactType",name:"contactType",className:"form-control"},l.a.createElement("option",null,"Tel."),l.a.createElement("option",null,"Email")))),l.a.createElement(d.B,{className:"form-group"},l.a.createElement(d.r,{htmlFor:"message",md:2},"Your Feedback"),l.a.createElement(d.l,{md:10},l.a.createElement(w.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),l.a.createElement(d.B,{className:"form-group"},l.a.createElement(d.l,{md:{size:10,offset:2}},l.a.createElement(d.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component),Z=[{id:0,name:"Uthappizza",image:"/assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"/assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"/assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"/assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],R=[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],q=[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Alberto Somayya",image:"/assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],z=[{id:0,name:"Weekend Grand Buffet",image:"/assets/images/buffet.png",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person"}];var H=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(d.a,null,l.a.createElement(d.b,null,l.a.createElement(h.a,{to:"/home"},"Home")),l.a.createElement(d.b,{active:!0},"About Us")),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"About Us"),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("h2",null,"Our History"),l.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),l.a.createElement("p",null,"The restaurant traces its humble beginnings to ",l.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),l.a.createElement("div",{className:"col-12 col-md-5"},l.a.createElement(d.d,null,l.a.createElement(d.f,{className:"bg-primary text-white"},"Facts At a Glance"),l.a.createElement(d.e,null,l.a.createElement("dl",{className:"row p-1"},l.a.createElement("dt",{className:"col-6"},"Started"),l.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),l.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),l.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),l.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),l.a.createElement("dd",{className:"col-6"},"$1,250,375"),l.a.createElement("dt",{className:"col-6"},"Employees"),l.a.createElement("dd",{className:"col-6"},"40"))))),l.a.createElement("div",{className:"col-12"},l.a.createElement(d.d,null,l.a.createElement(d.e,{className:"bg-faded"},l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),l.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",l.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h2",null,"Corporate Leadership")),l.a.createElement("div",{className:"col-12"},l.a.createElement(d.s,{list:!0},l.a.createElement((function(){return e.leaders.map((function(e){return l.a.createElement("div",{key:e.id,className:"col-12 mt-5"},l.a.createElement(d.s,{tag:"li"},l.a.createElement(d.s,{left:!0,middle:!0},l.a.createElement(d.s,{object:!0,src:e.image,alt:e.name})),l.a.createElement(d.s,{body:!0,className:"ml-5"},l.a.createElement(d.s,{heading:!0},e.name),l.a.createElement("p",null,e.designation),l.a.createElement("p",null,e.description))))}))}),null)))))},P=t(144),U=t(77),J=t(141),W=t(143),Y=t(18),D=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={dishes:Z,comments:R,leaders:q,promotions:z},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement("div",null,l.a.createElement(P.a,null,l.a.createElement(U.a,{path:"/home",component:function(){return l.a.createElement(N,{dish:e.props.dishes.filter((function(e){return e.featured}))[0],promotion:e.props.promotions.filter((function(e){return e.featured}))[0],leader:e.props.leaders.filter((function(e){return e.featured}))[0]})}}),l.a.createElement(U.a,{exact:!0,path:"/aboutus",component:function(){return l.a.createElement(H,{leaders:e.props.leaders})}}),"} />",l.a.createElement(U.a,{exact:!0,path:"/menu",component:function(){return l.a.createElement(f,{dishes:e.props.dishes})}}),l.a.createElement(U.a,{path:"/menu/:dishId",component:function(a){var t=a.match;return l.a.createElement(j,{dish:e.props.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],comments:e.props.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)}))})}}),l.a.createElement(U.a,{exact:!0,path:"/contactus",component:B}),"} />",l.a.createElement(J.a,{to:"/home"}))),l.a.createElement(y,null))}}]),a}(n.Component),G=Object(W.a)(Object(Y.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}))(D)),K=t(142),V=t(24),$={dishes:Z,comments:R,promotions:z,leaders:q},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$;arguments.length>1&&arguments[1];return e},Q=Object(V.createStore)(_,$),X=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(Y.Provider,{store:Q},l.a.createElement(K.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(G,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(136),t(137);s.a.render(l.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},83:function(e,a,t){e.exports=t(138)},89:function(e,a,t){},90:function(e,a,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.ad3c3531.chunk.js.map