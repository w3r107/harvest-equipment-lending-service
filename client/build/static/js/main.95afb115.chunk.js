(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{155:function(e,t,c){},214:function(e,t,c){},215:function(e,t,c){},341:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(34),a=c.n(r),s=(c(214),c(2)),o=(c.p,c(215),c(41)),i=c(33),l=c(6),j=c(23),d=c(17),b=c.n(d),u=c(30),h=c(352),O=c(344),p=c(345),m=c(355),x=c(47),f=(c(155),c(40)),v=c.n(f),g=c(1);var y=function(e){var t=function(){var e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/users/allUser");case 3:t=e.sent,console.log(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("asa"),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){t()}),[]);var c=JSON.parse(localStorage.getItem("user")),r=Object(g.jsxs)(h.a,{children:[Object(g.jsx)(h.a.Item,{children:Object(g.jsx)("a",{href:"/",children:"Home"})}),Object(g.jsx)(h.a.Item,{children:Object(g.jsx)("a",{href:"/userbookings",children:"Bookings"})}),(c.username,Object(g.jsx)(h.a.Item,{children:Object(g.jsx)("a",{href:"/admin",children:"Admin"})})),Object(g.jsx)(h.a.Item,{onClick:function(){localStorage.removeItem("user"),window.location.href="/login"},children:Object(g.jsx)("li",{style:{color:"orangered"},children:"Logout"})})]});return Object(g.jsxs)("div",{className:"hi",children:[Object(g.jsx)("div",{className:"header bs1",children:Object(g.jsx)(O.a,{gutter:16,justify:"center",children:Object(g.jsx)(p.a,{lg:20,sm:24,xs:24,children:Object(g.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(g.jsx)("h1",{children:Object(g.jsx)("b",{children:Object(g.jsx)(o.b,{to:"/",style:{color:"orangered"},children:"FARM-X"})})}),Object(g.jsx)(m.a,{overlay:r,placement:"bottomCenter",children:Object(g.jsx)(x.a,{children:c.username})})]})})})}),Object(g.jsx)("div",{className:"content",children:e.children}),Object(g.jsxs)("div",{className:"footer text-center",children:[Object(g.jsx)("hr",{}),Object(g.jsx)("p",{children:"Desinged and Developed By"}),Object(g.jsx)("p",{children:"FARM-X"})]})]})},N=c(204),w=(c(310),function(){return function(){var e=Object(u.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,v.a.get("/api/cars/getallcars");case 4:c=e.sent,t({type:"GET_ALL_CARS",payload:c.data}),t({type:"LOADING",payload:!1}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}),k=c(347),S=c(152),I=c(60),D=c(349),A=c(346);var T=function(){return Object(g.jsx)("div",{className:"spinner",children:Object(g.jsx)(A.a,{size:"large"})})},C=c(49),R=c.n(C);D.a.RangePicker;var L=function(){var e=Object(j.c)((function(e){return e.carsReducer})).cars,t=Object(j.c)((function(e){return e.alertsReducer})).loading,c=Object(n.useState)([]),r=Object(l.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(""),d=Object(l.a)(i,2),b=d[0],u=d[1],h=Object(n.useState)([]),p=Object(l.a)(h,2),m=p[0],f=p[1],v=Object(n.useState)([]),N=Object(l.a)(v,2),D=(N[0],N[1],Object(j.b)()),A=Object(n.useState)([]),C=Object(l.a)(A,2),R=C[0],L=C[1],q=[];return Object(n.useEffect)((function(){D(w())}),[]),Object(n.useEffect)((function(){s(e),setTimeout((function(){var e=new Set([]);a.map((function(t,c){e.add(t.city)})),e.forEach((function(e){q.push(e)})),f(q)}),0)}),[a,e,R]),Object(g.jsx)(y,{children:Object(g.jsxs)(k.a,{children:[Object(g.jsx)("div",{className:"mt-3 fs-1 container",children:Object(g.jsx)("div",{className:"row",children:Object(g.jsx)("div",{className:"col",lg:20,children:Object(g.jsxs)("form",{children:[Object(g.jsx)(I.a.Select,{"aria-label":"Default select example",value:b,onChange:function(e){return u(e.target.value)},children:null===m||void 0===m?void 0:m.map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}))}),Object(g.jsx)(x.a,{onClick:function(e){e.preventDefault();var t=b.toLowerCase(),c=null===a||void 0===a?void 0:a.filter((function(e){return e.city.toLowerCase()===t}));console.log(b),L(c),s(c)},children:"Submit"})]})})})}),1==t&&Object(g.jsx)(T,{}),Object(g.jsxs)(O.a,{children:[console.log(R),null===R||void 0===R?void 0:R.map((function(e){return Object(g.jsxs)(S.a,{style:{width:"25rem"},className:"mr-4",children:[Object(g.jsx)(S.a.Img,{variant:"top",style:{height:"300px"},src:e.image}),Object(g.jsxs)(S.a.Body,{children:[Object(g.jsx)(S.a.Title,{children:e.name}),Object(g.jsxs)(S.a.Text,{children:[Object(g.jsxs)("div",{children:["Rent per Hour :",e.rentPerHour]}),Object(g.jsxs)("div",{children:["Name of the Shop :",e.nameOfShop]}),Object(g.jsxs)("div",{children:["Address of the shop :",e.address]}),Object(g.jsxs)("div",{children:["City-",e.city]})]}),Object(g.jsx)("button",{className:"btn1 mr-2",children:Object(g.jsx)(o.b,{to:"/booking/".concat(e._id),children:"Book Now"})})]})]})}))]})]})})},q=c(350),G=c(351),E=c(93),H=c.n(E);c(147);H.a.init();var P=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.alertsReducer})).loading;return Object(g.jsxs)("div",{className:"login",children:[t&&Object(g.jsx)(T,{}),Object(g.jsxs)(O.a,{gutter:16,className:"d-flex align-items-center",children:[Object(g.jsxs)(p.a,{lg:16,style:{position:"relative"},children:[Object(g.jsx)("img",{className:"w-100","data-aos":"slide-right","data-aos-duration":"1500",src:"https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}),Object(g.jsx)("h1",{className:"login-logo",children:"FARM-X"})]}),Object(g.jsx)(p.a,{lg:8,className:"text-left p-5",children:Object(g.jsxs)(q.a,{layout:"vertical",className:"login-form p-5",onFinish:function(t){var c;e((c=t,function(){var e=Object(u.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,v.a.post("/api/users/login",c);case 4:n=e.sent,localStorage.setItem("user",JSON.stringify(n.data)),N.b.success("Login success"),t({type:"LOADING",payload:!1}),setTimeout((function(){window.location.href="/preHome"}),500),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),N.b.error("Something went wrong"),t({type:"LOADING",payload:!1});case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())),console.log(t)},children:[Object(g.jsx)("h1",{children:"Login"}),Object(g.jsx)("hr",{}),Object(g.jsx)(q.a.Item,{name:"username",label:"Username",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"password",label:"Password",rules:[{required:!0}],children:Object(g.jsx)(G.a,{type:"password"})}),Object(g.jsx)("button",{className:"btn1 mt-2",children:"Login"}),Object(g.jsx)("hr",{}),Object(g.jsx)(o.b,{to:"/register",children:"Click Here to Register"})]})})]})]})};H.a.init();var F=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.alertsReducer})).loading;return Object(g.jsxs)("div",{className:"login",children:[t&&Object(g.jsx)(T,{}),Object(g.jsxs)(O.a,{gutter:16,className:"d-flex align-items-center",children:[Object(g.jsxs)(p.a,{lg:16,style:{position:"relative"},children:[Object(g.jsx)("img",{className:"w-100","data-aos":"slide-left","data-aos-duration":"1500",src:"https://th.bing.com/th/id/R.2193ed2b05371fa474bdc8e87131c220?rik=2e9cxi9ryJJZUA&riu=http%3a%2f%2ffarmingequipmentcanada.com%2fwp-content%2fuploads%2f2013%2f01%2ffarm-equipment-list-tractor.jpg&ehk=qjzJoXIsc9I40%2fRJaOn5I25aleNwdG2Y3Qq84e5wK9c%3d&risl=&pid=ImgRaw&r=0"}),Object(g.jsx)("h1",{className:"login-logo",children:"FARM-X"})]}),Object(g.jsx)(p.a,{lg:8,className:"text-left p-5",children:Object(g.jsxs)(q.a,{layout:"vertical",className:"login-form p-5",onFinish:function(t){var c;e((c=t,function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,v.a.post("/api/users/register",c);case 4:e.sent,N.b.success("Registration successfull"),setTimeout((function(){window.location.href="/login"}),500),t({type:"LOADING",payload:!1}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),N.b.error("Something went wrong"),t({type:"LOADING",payload:!1});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())),console.log(t)},children:[Object(g.jsx)("h1",{children:"Register"}),Object(g.jsx)("hr",{}),Object(g.jsx)(q.a.Item,{name:"username",label:"Username",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"password",label:"Password",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"cpassword",label:"Confirm Password",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)("button",{className:"btn1 mt-2 mb-3",children:"Register"}),Object(g.jsx)("br",{}),Object(g.jsx)(o.b,{to:"/login",children:"Click Here to Login"})]})})]})]})},_=c(348),M=c(354),B=c(353),J=function(e){return function(){var t=Object(u.a)(b.a.mark((function t(c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:"LOADING",payload:!0}),t.prev=1,t.next=4,v.a.post("/api/bookings/bookcar",e);case 4:c({type:"LOADING",payload:!1}),N.b.success("Your car booked successfully"),setTimeout((function(){window.location.href="/userbookings"}),500),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),c({type:"LOADING",payload:!1}),N.b.error("Something went wrong , please try later");case 14:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},U=c(195),Y=c.n(U),X=D.a.RangePicker;var z=function(e){var t=e.match,c=Object(j.c)((function(e){return e.carsReducer})).cars,r=Object(j.c)((function(e){return e.alertsReducer})).loading,a=Object(n.useState)({}),s=Object(l.a)(a,2),o=s[0],i=s[1],d=Object(j.b)(),b=Object(n.useState)(),u=Object(l.a)(b,2),h=u[0],m=u[1],x=Object(n.useState)(),f=Object(l.a)(x,2),v=f[0],N=f[1],k=Object(n.useState)(0),S=Object(l.a)(k,2),I=S[0],D=S[1],A=Object(n.useState)(!1),C=Object(l.a)(A,2),L=C[0],q=C[1],G=Object(n.useState)(0),E=Object(l.a)(G,2),H=E[0],P=E[1],F=Object(n.useState)(!1),U=Object(l.a)(F,2),z=U[0],K=U[1];return Object(n.useEffect)((function(){0==c.length?d(w()):i(c.find((function(e){return e._id==t.params.carid})))}),[c]),Object(n.useEffect)((function(){P(I*o.rentPerHour),L&&P(H+.2*H)}),[L,I]),Object(g.jsxs)(y,{children:[r&&Object(g.jsx)(T,{}),Object(g.jsxs)(O.a,{justify:"center",className:"d-flex align-items-center",style:{minHeight:"90vh"},children:[Object(g.jsx)(p.a,{lg:10,sm:24,xs:24,className:"p-3",children:Object(g.jsx)("img",{src:o.image,className:"carimg2 bs1 w-100","data-aos":"flip-left","data-aos-duration":"1500"})}),Object(g.jsxs)(p.a,{lg:10,sm:24,xs:24,className:"text-right",children:[Object(g.jsx)(_.a,{type:"horizontal",dashed:!0,children:"Car Info"}),Object(g.jsxs)("div",{style:{textAlign:"right",background:"white",color:"black",opacity:.7},children:[Object(g.jsx)("p",{children:o.name}),Object(g.jsxs)("p",{children:[o.rentPerHour," Rent Per hour /-"]}),Object(g.jsxs)("p",{children:[" ",o.nameOfShop]}),Object(g.jsxs)("p",{children:[" ",o.address]}),Object(g.jsxs)("p",{children:[" ",o.nameOfDriver]}),Object(g.jsxs)("p",{children:[" ",o.phoneNo]})]}),Object(g.jsx)(_.a,{type:"horizontal",dashed:!0,children:"Select Time Slots"}),Object(g.jsx)(X,{showTime:{format:"HH:mm"},format:"MMM DD yyyy HH:mm",onChange:function(e){m(R()(e[0]).format("MMM DD yyyy HH:mm")),N(R()(e[1]).format("MMM DD yyyy HH:mm")),D(e[1].diff(e[0],"hours"))}}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{className:"btn1 mt-2",onClick:function(){K(!0)},children:"See Booked Slots"}),h&&v&&Object(g.jsxs)("div",{style:{textAlign:"right",background:"white",color:"black",opacity:.7},children:[Object(g.jsxs)("p",{children:["Total Hours : ",Object(g.jsx)("b",{children:I})]}),Object(g.jsxs)("p",{children:["Rent Per Hour : ",Object(g.jsx)("b",{children:o.rentPerHour})]}),Object(g.jsx)(M.a,{onChange:function(e){e.target.checked?q(!0):q(!1)},children:"Driver Required"}),Object(g.jsxs)("h3",{children:["Total Amount : ",H]}),Object(g.jsx)("button",{className:"btn1",onClick:function(){var e={user:JSON.parse(localStorage.getItem("user"))._id,car:o._id,totalHours:I,nameOfDriver:o.nameOfDriver,phoneNo:o.phoneNo,nameOfShop:o.nameOfShop,phoneNoShop:o.phoneNoShop,address:o.address,city:o.city,totalAmount:H,driverRequired:L,bookedTimeSlots:{from:h,to:v}};d(J(e))},children:"Book COD"}),Object(g.jsx)("br",{}),Object(g.jsx)(Y.a,{shippingAddress:!0,token:function(e){var t={token:e,user:JSON.parse(localStorage.getItem("user"))._id,car:o._id,totalHours:I,nameOfDriver:o.nameOfDriver,phoneNo:o.phoneNo,nameOfShop:o.nameOfShop,phoneNoShop:o.phoneNoShop,address:o.address,city:o.city,totalAmount:H,driverRequired:L,bookedTimeSlots:{from:h,to:v}};d(J(t))},currency:"inr",amount:100*H,stripeKey:"pk_test_51IYnC0SIR2AbPxU0TMStZwFUoaDZle9yXVygpVIzg36LdpO8aSG8B9j2C0AikiQw2YyCI8n4faFYQI5uG3Nk5EGQ00lCfjXYvZ",children:Object(g.jsx)("button",{className:"btn1",children:"Book Now by giving advance amount"})})]})]}),o.name&&Object(g.jsx)(B.a,{visible:z,closable:!1,footer:!1,title:"Booked time slots",children:Object(g.jsxs)("div",{className:"p-2",children:[o.bookedTimeSlots.map((function(e){return Object(g.jsxs)("button",{className:"btn1 mt-2",children:[e.from," - ",e.to]})})),Object(g.jsx)("div",{className:"text-right mt-5",children:Object(g.jsx)("button",{className:"btn1",onClick:function(){K(!1)},children:"CLOSE"})})]})})]})]})};c(340);var K=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=Object(j.b)(),c=Object(j.c)((function(e){return e.bookingsReducer})).bookings,r=Object(j.c)((function(e){return e.alertsReducer})).loading,a=Object(n.useState)(""),s=Object(l.a)(a,2),o=s[0],i=s[1],d=Object(n.useState)([]),h=Object(l.a)(d,2),m=h[0],x=(h[1],JSON.parse(localStorage.getItem("user")));if(Object(n.useEffect)((function(){t(function(){var e=Object(u.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,v.a.get("/api/bookings/getallbookings");case 4:c=e.sent,t({type:"GET_ALL_BOOKINGS",payload:c.data}),t({type:"LOADING",payload:!1}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()),console.log(c)}),[o]),x&&c)c.filter((function(e){return e.user._id==x._id}));var f=function(){var e=Object(u.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("/api/bookings/delete",{carid:t});case 3:c=e.sent,i("x"),console.log(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),N=new Date,w=N.getFullYear(),k=N.getMonth()+1,S=N.getDate(),I=N.getHours(),D=N.getMinutes(),A=new Date(w+"-"+k+"-"+S+" "+I+":"+D+":00");return Object(g.jsxs)(y,{children:[r&&Object(g.jsx)(T,{}),Object(g.jsx)("h3",{className:"text-center mt-2",children:"My Bookings"}),console.log(x),Object(g.jsx)(O.a,{justify:"center",gutter:16,children:Object(g.jsx)(p.a,{lg:16,sm:24,children:null===c||void 0===c?void 0:c.filter((function(e){return e.user._id==x._id})).map((function(t,c){var n,r,a,s,o,i,l;console.log("as");var j=t.bookedTimeSlots.to.split(" ")[2],d=t.bookedTimeSlots.to.split(" ")[1],b=t.bookedTimeSlots.to.split(" ")[0],u=e.indexOf(b)+1,h=t.bookedTimeSlots.to.split(" ")[3].split(":")[0],x=t.bookedTimeSlots.to.split(" ")[3].split(":")[1],v=new Date(j+"-"+u+"-"+d+" "+h+":"+x+":00");return console.log(m),Object(g.jsxs)(O.a,{gutter:16,className:"bs1 mt-3 text-left",style:{backgroundColor:"white",opacity:.7},children:[Object(g.jsxs)(p.a,{lg:6,sm:24,children:[Object(g.jsx)("p",{children:Object(g.jsx)("b",{children:null===(n=t.car)||void 0===n?void 0:n.name})}),Object(g.jsxs)("p",{children:["Total hours : ",Object(g.jsx)("b",{children:t.totalHours})]}),Object(g.jsxs)("p",{children:["Rent per hour : ",Object(g.jsx)("b",{children:null===(r=t.car)||void 0===r?void 0:r.rentPerHour})]}),Object(g.jsxs)("p",{children:["Total amount : ",Object(g.jsx)("b",{children:t.totalAmount})]}),Object(g.jsxs)("p",{children:["Name of The driver : ",Object(g.jsx)("b",{children:null===(a=t.car)||void 0===a?void 0:a.nameOfDriver})]}),Object(g.jsxs)("p",{children:["Contact number : ",Object(g.jsx)("b",{children:null===(s=t.car)||void 0===s?void 0:s.phoneNo})]})]}),Object(g.jsxs)(p.a,{lg:12,sm:24,children:[t.transactionId?Object(g.jsxs)("p",{children:["Transaction Id : ",Object(g.jsx)("b",{children:t.transactionId})]}):Object(g.jsxs)("p",{children:["Transaction Id :",Object(g.jsx)("b",{children:" Your order is COD"})]}),Object(g.jsxs)("p",{children:["From: ",Object(g.jsx)("b",{children:t.bookedTimeSlots.from})]}),Object(g.jsxs)("p",{children:["To: ",Object(g.jsx)("b",{children:t.bookedTimeSlots.to})]}),Object(g.jsxs)("p",{children:["Date of booking:"," ",Object(g.jsx)("b",{children:R()(t.createdAt).format("MMM DD yyyy")})]}),Object(g.jsxs)("p",{children:["Name of The Shop : ",Object(g.jsx)("b",{children:null===(o=t.car)||void 0===o?void 0:o.nameOfShop})]}),Object(g.jsxs)("p",{children:["Phone of The Shop : ",Object(g.jsx)("b",{children:null===(i=t.car)||void 0===i?void 0:i.phoneNoShop})]})]}),Object(g.jsx)(p.a,{lg:6,sm:24,className:"text-right",children:Object(g.jsx)("img",{style:{borderRadius:5},src:null===(l=t.car)||void 0===l?void 0:l.image,height:"140",className:"p-2"})}),console.log(v,A),v>A?Object(g.jsx)("button",{type:"button",class:"btn btn-danger",onClick:function(){return e=t._id,void("yes"===prompt("Are you sure you want to delete it? If Yes,then please type yes in the boYour will get refund within 3-4 working days")?f(e):console.log("a"));var e},children:"Delete"}):Object(g.jsx)("div",{children:Object(g.jsx)("button",{className:"btn btn-bg-danger-subtle disabled",children:"Delete"})})]},t._id)}))})})]})};var Q=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.alertsReducer})).loading;return Object(g.jsxs)(y,{children:[t&&Object(g.jsx)(T,{}),Object(g.jsx)(O.a,{justify:"center mt-5",children:Object(g.jsx)(p.a,{lg:12,sm:24,xs:24,className:"p-2",children:Object(g.jsxs)(q.a,{className:"bs1 p-2",layout:"vertical",onFinish:function(t){var c;console.log(t),t.bookedTimeSlots=[],e((c=t,function(){var e=Object(u.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,(n=new FormData).set("name",c.name),n.set("nameOfDriver",c.name),n.set("name",c.name),n.set("phoneNo",c.phoneNo),n.set("nameOfShop",c.nameOfShop),n.set("phoneNoShop",c.phoneNoShop),n.set("address",c.address),n.set("city",c.city),n.set("capacity",c.capacity),n.set("fuelType",c.fuelType),n.set("rentPerHour",c.rentPerHour),n.set("image",c.image),console.log(c.image),e.next=18,v.a.post("/api/cars/addcar",c,{"Content-type":"multipart/form-data"});case 18:r=e.sent,console.log(r),t({type:"LOADING",payload:!1}),N.b.success("New car added successfully"),setTimeout((function(){window.location.href="/admin"}),500),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(1),console.log(e.t0),t({type:"LOADING",payload:!1});case 29:case"end":return e.stop()}}),e,null,[[1,25]])})));return function(t){return e.apply(this,arguments)}}()))},style:{backgroundColor:"white",opacity:.78,borderRadius:"10px solid black"},children:[Object(g.jsx)("h3",{children:"Add New Equipment"}),Object(g.jsx)("hr",{}),Object(g.jsx)(q.a.Item,{name:"name",label:"Equipment name",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"nameOfDriver",label:"Name of the Driver",style:{color:"red"},rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"phoneNo",label:"Phone Number",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"nameOfShop",label:"Name of the shop",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"phoneNoShop",label:"Phone Number of shop",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"address",label:"Address of the shop",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"city",label:"Shop location city",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"image",label:"Image url",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"rentPerHour",label:"Rent per hour",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"capacity",label:"Capacity",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"fuelType",label:"Fuel Type",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)("div",{className:"text-right",children:Object(g.jsx)("button",{className:"btn1",children:"ADD Equipment"})})]})})})]})},Z=c(358),V=c(359),W=c(356);D.a.RangePicker;var $=function(){var e=Object(j.c)((function(e){return e.carsReducer})).cars,t=Object(j.c)((function(e){return e.alertsReducer})).loading,c=Object(n.useState)([]),r=Object(l.a)(c,2),a=r[0],s=r[1],i=Object(j.b)();return Object(n.useEffect)((function(){i(w())}),[]),Object(n.useEffect)((function(){s(e)}),[e]),Object(g.jsx)(y,{children:Object(g.jsxs)(k.a,{children:[Object(g.jsx)(O.a,{justify:"center",gutter:16,className:"mt-2",children:Object(g.jsx)(p.a,{lg:20,sm:24,children:Object(g.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(g.jsx)("h3",{className:"mt-1 mr-2",children:"Admin Panel"}),Object(g.jsx)("button",{className:"btn1",children:Object(g.jsx)("a",{href:"/addcar",children:"ADD Equipment"})}),Object(g.jsx)("button",{className:"btn1",children:Object(g.jsx)("a",{href:"/allbookings",children:"See all bookings"})})]})})}),1==t&&Object(g.jsx)(T,{}),Object(g.jsx)(O.a,{children:null===a||void 0===a?void 0:a.map((function(e){return Object(g.jsxs)(S.a,{style:{width:"25rem"},className:"mr-4",children:[Object(g.jsx)(S.a.Img,{variant:"top",style:{height:"300px"},src:e.image}),Object(g.jsxs)(S.a.Body,{children:[Object(g.jsx)(S.a.Title,{children:e.name}),Object(g.jsxs)(S.a.Text,{children:[Object(g.jsxs)("div",{children:["Rent per Hour :",e.rentPerHour]}),Object(g.jsxs)("div",{children:["Name of the Shop :",e.nameOfShop]}),Object(g.jsxs)("div",{children:["Address of the shop :",e.address]}),Object(g.jsxs)("div",{children:["City-",e.city]})]}),Object(g.jsxs)("div",{className:"mr-4",children:[Object(g.jsx)(o.b,{to:"/editcar/".concat(e._id),children:Object(g.jsx)(Z.a,{className:"mr-3",style:{color:"green",cursor:"pointer"}})}),Object(g.jsx)(W.a,{title:"Are you sure to delete this car?",onConfirm:function(){var t;i((t={carid:e._id},function(){var e=Object(u.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOADING",payload:!0}),e.prev=1,e.next=4,v.a.post("/api/cars/deletecar",t);case 4:c({type:"LOADING",payload:!1}),N.b.success("Car deleted successfully"),setTimeout((function(){window.location.reload()}),500),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),c({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()))},okText:"Yes",cancelText:"No",children:Object(g.jsx)(V.a,{style:{color:"red",cursor:"pointer"}})})]})]})]})}))})]})})};var ee=function(e){var t=e.match,c=Object(j.c)((function(e){return e.carsReducer})).cars,r=Object(j.b)(),a=Object(j.c)((function(e){return e.alertsReducer})).loading,s=Object(n.useState)(),o=Object(l.a)(s,2),i=o[0],d=o[1],h=Object(n.useState)([]),m=Object(l.a)(h,2),x=m[0],f=m[1];return Object(n.useEffect)((function(){0==c.length?r(w()):(f(c),d(c.find((function(e){return e._id==t.params.carid}))),console.log(i))}),[c]),Object(g.jsxs)(y,{children:[a&&Object(g.jsx)(T,{}),Object(g.jsx)(O.a,{justify:"center mt-5",children:Object(g.jsx)(p.a,{lg:12,sm:24,xs:24,className:"p-2",children:x.length>0&&Object(g.jsxs)(q.a,{initialValues:i,className:"bs1 p-2",layout:"vertical",onFinish:function(e){var t;e._id=i._id,r((t=e,function(){var e=Object(u.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOADING",payload:!0}),e.prev=1,e.next=4,v.a.post("/api/cars/editcar",t);case 4:c({type:"LOADING",payload:!1}),N.b.success("Car details updated successfully"),setTimeout((function(){window.location.href="/admin"}),500),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),c({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())),console.log(e)},style:{backgroundColor:"white",opacity:.78,borderRadius:"10px solid black"},children:[Object(g.jsx)("h3",{children:"Add New Equipment"}),Object(g.jsx)("hr",{}),Object(g.jsx)(q.a.Item,{name:"name",label:"Equipment name",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"nameOfDriver",label:"Name of the Driver",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"phoneNo",label:"Phone Number",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"nameOfShop",label:"Name of the shop",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"phoneNoShop",label:"Phone Number of shop",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"address",label:"Address of the shop",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"city",label:"Shop location city",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"image",label:"Image url",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"rentPerHour",label:"Rent per hour",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"capacity",label:"Capacity",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(q.a.Item,{name:"fuelType",label:"Fuel Type",rules:[{required:!0}],children:Object(g.jsx)(G.a,{})}),Object(g.jsx)("div",{className:"text-right",children:Object(g.jsx)("button",{className:"btn1",children:"Edit Equipment"})})]})})})]})},te=c(11),ce=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(l.a)(a,2);s[0],s[1];Object(n.useEffect)((function(){o()}),[]);var o=function(){var e=Object(u.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/bookings/getallbookings");case 2:t=e.sent,n=t.data,r(n),console.log(n[0].user.username),console.log(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{onClick:function(){window.location.href="/admin"},children:"GO BACK"}),Object(g.jsxs)("table",{class:"table",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",children:"#"}),Object(g.jsx)("th",{scope:"col",children:"User"}),Object(g.jsx)("th",{scope:"col",children:"Name of shop"}),Object(g.jsx)("th",{scope:"col",children:"Name of Driver"}),Object(g.jsx)("th",{scope:"col",children:"Phone of shop"}),Object(g.jsx)("th",{scope:"col",children:"Phone of driver"}),Object(g.jsx)("th",{scope:"col",children:"Equipment"}),Object(g.jsx)("th",{scope:"col",children:"From"}),Object(g.jsx)("th",{scope:"col",children:"To"}),Object(g.jsx)("th",{scope:"col",children:"Total Amount"}),Object(g.jsx)("th",{scope:"col",children:"Transaction Id"})]})}),Object(g.jsxs)("tbody",{children:[console.log(c),null===c||void 0===c?void 0:c.map((function(e,t){var c=e.bookedTimeSlots,n=e.car,r=e.totalAmount,a=e.user.username;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("tr",{style:{backgroundColor:"white",opacity:"0.7 "},children:[Object(g.jsx)("th",{scope:"row",children:t+1}),Object(g.jsx)("td",{children:a}),Object(g.jsx)("td",{children:null===n||void 0===n?void 0:n.nameOfShop}),Object(g.jsx)("td",{children:null===n||void 0===n?void 0:n.nameOfDriver}),Object(g.jsx)("td",{children:null===n||void 0===n?void 0:n.phoneNoShop}),Object(g.jsx)("td",{children:null===n||void 0===n?void 0:n.phoneNo}),Object(g.jsx)("td",{children:null===n||void 0===n?void 0:n.name}),Object(g.jsx)("td",{children:c.from}),Object(g.jsx)("td",{children:c.to}),Object(g.jsx)("td",{children:r}),Object(g.jsx)("td",{children:e.transactionId?e.transactionId:"COD"})]})})}))]})]}),Object(g.jsxs)("button",{type:"button",onClick:function(e){e.preventDefault();var t=null===c||void 0===c?void 0:c.reduce((function(e,t){var c=null===t||void 0===t?void 0:t.bookedTimeSlots,n=null===t||void 0===t?void 0:t.car,r=(null===t||void 0===t||t.totalAmount,null===t||void 0===t?void 0:t.user),a=null===n||void 0===n?void 0:n.nameOfShop,s=null===n||void 0===n?void 0:n.nameOfDriver,o=null===n||void 0===n?void 0:n.phoneNoShop,i=null===n||void 0===n?void 0:n.phoneNo,l=null===n||void 0===n?void 0:n.name,j=null===c||void 0===c?void 0:c.from,d=null===c||void 0===c?void 0:c.to,b=null===t||void 0===t?void 0:t.totalAmount,u=t.transactionId?t.transactionId:"COD";return e.push([r,a,s,o,i,l,j,d,b,u].join(",")),e}),[]);!function(e){var t=e.data,c=e.fileName,n=e.fileType,r=new Blob([t],{type:n}),a=document.createElement("a");a.download=c,a.href=window.URL.createObjectURL(r);var s=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});a.dispatchEvent(s),a.remove()}({data:[].concat(["User,Shop,Driver,Phone_shop,Phone_Driver,Equipment,From,To,Total,Transaction_ID"],Object(te.a)(t)).join("\n"),fileName:"users.csv",fileType:"text/csv"})},children:[" ","Download data in excel format"]})]})},ne=function(){return Object(g.jsx)("div",{children:"DeleteBooking"})},re=c(198),ae=c(77),se=c(357),oe=function(){return Object(g.jsx)("footer",{style:{backgroundColor:"black",color:"white",width:"100%"},children:Object(g.jsx)(k.a,{children:Object(g.jsxs)(re.a,{children:[Object(g.jsxs)(ae.a,{children:[Object(g.jsx)("h5",{style:{color:"white"},children:"FARM-X"}),Object(g.jsx)("div",{children:"The purpose of Farm-x is to provide connections between different roles in the agriculture industry. As the farmers are not getting a fair price for their goods because of contractors. This app removes the requirement of contractors for farmers. Farmers can buy their required needs for farming from Sellers and they can also sell their products to the Consumers"})]}),Object(g.jsxs)(ae.a,{children:[Object(g.jsx)("h5",{style:{color:"white"},children:"Links"}),Object(g.jsx)("div",{children:"Farmer"}),Object(g.jsx)("div",{children:"krishi site"}),Object(g.jsx)("div",{children:"Ek aur"})]}),Object(g.jsxs)(ae.a,{children:[Object(g.jsx)("h5",{style:{color:"white"},children:"Contact us"}),Object(g.jsx)("div",{children:"Tushar Kumar"}),Object(g.jsx)("div",{children:"tushar.kumar9179@gmail.com"}),Object(g.jsx)("div",{children:"+91 9045730781"})]}),Object(g.jsxs)(ae.a,{children:[Object(g.jsx)("h5",{style:{color:"white"},children:"Contact Us"}),Object(g.jsxs)(I.a,{children:[Object(g.jsxs)(I.a.Group,{controlId:"name",children:[Object(g.jsx)(I.a.Label,{children:"Name"}),Object(g.jsx)(I.a.Control,{type:"text",placeholder:"Enter your name"})]}),Object(g.jsxs)(I.a.Group,{controlId:"email",children:[Object(g.jsx)(I.a.Label,{children:"Email"}),Object(g.jsx)(I.a.Control,{type:"email",placeholder:"Enter your email"})]}),Object(g.jsx)(se.a,{variant:"primary",type:"submit",children:"Send"})]})]})]})})})},ie=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"header bs1",children:Object(g.jsx)(re.a,{gutter:16,justify:"center",children:Object(g.jsx)(ae.a,{lg:20,sm:24,xs:24,children:Object(g.jsx)("div",{className:"d-flex justify-content-between",children:Object(g.jsx)("h1",{children:Object(g.jsx)("b",{children:Object(g.jsx)(o.b,{to:"/",style:{color:"orangered"},children:"FARM-X"})})})})})})}),Object(g.jsxs)("div",{className:"container farmerContainer",children:[Object(g.jsx)("h1",{className:"title",children:"FARMER"}),Object(g.jsx)("h4",{className:"farmer-title",children:"If you are a farmer then you are at perfect platfrom from where you can hire all of your farming related machines and make your equipment available for hiring."}),Object(g.jsxs)(S.a,{children:[Object(g.jsx)(S.a.Img,{variant:"top",src:"https://www.theindiaforum.in/sites/default/files/styles/cover_story/public/field/image/2022/06/21/ramkumar-radhakrishnan-wikimedia-1622193304-1622193304.jpeg"}),Object(g.jsx)(o.b,{to:"/",style:{height:"60px",fontSize:"30px"},children:"Let's Hire"})]})]})]}),Object(g.jsx)(oe,{})]})},le=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(g.jsx)("div",{children:Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault(),v.a.post("/api/otp/verify",{num:c})},children:Object(g.jsx)("input",{type:"text",value:c,className:"form-control",onChange:function(e){return r(e.target.value)}})})})};var je=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(o.a,{children:[Object(g.jsx)(de,{path:"/",exact:!0,component:L}),Object(g.jsx)(de,{path:"/preHome",exact:!0,component:ie}),Object(g.jsx)(i.b,{path:"/login",exact:!0,component:P}),Object(g.jsx)(i.b,{path:"/loginOTP",exact:!0,component:le}),Object(g.jsx)(i.b,{path:"/register",exact:!0,component:F}),Object(g.jsx)(de,{path:"/booking/:carid",exact:!0,component:z}),Object(g.jsx)(de,{path:"/userbookings",exact:!0,component:K}),Object(g.jsx)(de,{path:"/addcar",exact:!0,component:Q}),Object(g.jsx)(de,{path:"/allbookings",exact:!0,component:ce}),Object(g.jsx)(de,{path:"/deleteBooking",exact:!0,component:ne}),Object(g.jsx)(de,{path:"/editcar/:carid",exact:!0,component:ee}),Object(g.jsx)(de,{path:"/admin",exact:!0,component:$})]})})};function de(e){return localStorage.getItem("user")?Object(g.jsx)(i.b,Object(s.a)({},e)):Object(g.jsx)(i.a,{to:"/login"})}var be=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,360)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))},ue=c(101),he=c(199),Oe=c(200),pe={loading:!1},me={cars:[]},xe={bookings:[]},fe=Object(he.composeWithDevTools)({}),ve=Object(ue.combineReducers)({carsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;return"GET_ALL_CARS"===t.type?Object(s.a)(Object(s.a)({},e),{},{cars:t.payload}):e},alertsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;return"LOADING"===t.type?Object(s.a)(Object(s.a)({},e),{},{loading:t.payload}):e},bookingsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;return"GET_ALL_BOOKINGS"===t.type?Object(s.a)(Object(s.a)({},e),{},{bookings:t.payload}):e}}),ge=Object(ue.createStore)(ve,fe(Object(ue.applyMiddleware)(Oe.a)));a.a.render(Object(g.jsx)(j.a,{store:ge,children:Object(g.jsx)(je,{})}),document.getElementById("root")),be()}},[[341,1,2]]]);
//# sourceMappingURL=main.95afb115.chunk.js.map