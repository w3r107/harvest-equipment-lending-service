(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{152:function(e,t,c){},203:function(e,t,c){},204:function(e,t,c){},307:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(34),a=c.n(r),s=(c(203),c(2)),o=(c.p,c(204),c(41)),i=c(33),l=c(6),j=c(23),d=c(17),b=c.n(d),u=c(30),h=c(318),O=c(310),x=c(311),m=c(321),p=c(47),f=(c(152),c(40)),g=c.n(f),v=c(1);var y=function(e){var t=JSON.parse(localStorage.getItem("user")),c=Object(v.jsxs)(h.a,{children:[Object(v.jsx)(h.a.Item,{children:Object(v.jsx)("a",{href:"/",children:"Home"})}),Object(v.jsx)(h.a.Item,{children:Object(v.jsx)("a",{href:"/userbookings",children:"Bookings"})}),Object(v.jsx)(h.a.Item,{children:Object(v.jsx)("a",{href:"/admin",children:"Admin"})}),Object(v.jsx)(h.a.Item,{onClick:function(){localStorage.removeItem("user"),window.location.href="/login"},children:Object(v.jsx)("li",{style:{color:"orangered"},children:"Logout"})})]});return Object(v.jsxs)("div",{className:"hi",children:[Object(v.jsx)("div",{className:"header bs1",children:Object(v.jsx)(O.a,{gutter:16,justify:"center",children:Object(v.jsx)(x.a,{lg:20,sm:24,xs:24,children:Object(v.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(v.jsx)("h1",{children:Object(v.jsx)("b",{children:Object(v.jsx)(o.b,{to:"/",style:{color:"orangered"},children:"FARM-X"})})}),Object(v.jsx)(m.a,{overlay:c,placement:"bottomCenter",children:Object(v.jsx)(p.a,{children:t.username})})]})})})}),Object(v.jsx)("div",{className:"content",children:e.children}),Object(v.jsxs)("div",{className:"footer text-center",children:[Object(v.jsx)("hr",{}),Object(v.jsx)("p",{children:"Desinged and Developed By"}),Object(v.jsx)("p",{children:"FARM-X"})]})]})},N=c(193),w=function(){return function(){var e=Object(u.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,g.a.get("/api/cars/getallcars");case 4:c=e.sent,t({type:"GET_ALL_CARS",payload:c.data}),t({type:"LOADING",payload:!1}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},k=c(313),S=c(149),I=c(60),D=c(315),A=c(312);var T=function(){return Object(v.jsx)("div",{className:"spinner",children:Object(v.jsx)(A.a,{size:"large"})})},R=c(49),C=c.n(R);D.a.RangePicker;var L=function(){var e=Object(j.c)((function(e){return e.carsReducer})).cars,t=Object(j.c)((function(e){return e.alertsReducer})).loading,c=Object(n.useState)([]),r=Object(l.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(""),d=Object(l.a)(i,2),b=d[0],u=d[1],h=Object(n.useState)([]),x=Object(l.a)(h,2),m=x[0],f=x[1],g=Object(n.useState)([]),N=Object(l.a)(g,2),D=(N[0],N[1],Object(j.b)()),A=Object(n.useState)([]),R=Object(l.a)(A,2),C=R[0],L=R[1],q=[];return Object(n.useEffect)((function(){D(w())}),[]),Object(n.useEffect)((function(){s(e),setTimeout((function(){var e=new Set([]);a.map((function(t,c){e.add(t.city)})),e.forEach((function(e){q.push(e)})),f(q)}),0)}),[a,e,C]),Object(v.jsx)(y,{children:Object(v.jsxs)(k.a,{children:[Object(v.jsx)("div",{className:"mt-3 fs-1 container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col",lg:20,children:Object(v.jsxs)("form",{children:[Object(v.jsx)(I.a.Select,{"aria-label":"Default select example",value:b,onChange:function(e){return u(e.target.value)},children:null===m||void 0===m?void 0:m.map((function(e,t){return Object(v.jsx)("option",{value:e,children:e},t)}))}),Object(v.jsx)(p.a,{onClick:function(e){e.preventDefault();var t=b.toLowerCase(),c=null===a||void 0===a?void 0:a.filter((function(e){return e.city===t}));console.log(b),L(c),s(c)},children:"Submit"})]})})})}),1==t&&Object(v.jsx)(T,{}),Object(v.jsxs)(O.a,{children:[console.log(C),null===C||void 0===C?void 0:C.map((function(e){return Object(v.jsxs)(S.a,{style:{width:"25rem"},className:"mr-4",children:[Object(v.jsx)(S.a.Img,{variant:"top",style:{height:"300px"},src:e.image}),Object(v.jsxs)(S.a.Body,{children:[Object(v.jsx)(S.a.Title,{children:e.name}),Object(v.jsxs)(S.a.Text,{children:[Object(v.jsxs)("div",{children:["Rent per Hour :",e.rentPerHour]}),Object(v.jsxs)("div",{children:["Name of the Shop :",e.nameOfShop]}),Object(v.jsxs)("div",{children:["Address of the shop :",e.address]}),Object(v.jsxs)("div",{children:["City-",e.city]})]}),Object(v.jsx)("button",{className:"btn1 mr-2",children:Object(v.jsx)(o.b,{to:"/booking/".concat(e._id),children:"Book Now"})})]})]})}))]})]})})},q=c(316),G=c(317),E=c(93),H=c.n(E);c(144);H.a.init();var _=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.alertsReducer})).loading;return Object(v.jsxs)("div",{className:"login",children:[t&&Object(v.jsx)(T,{}),Object(v.jsxs)(O.a,{gutter:16,className:"d-flex align-items-center",children:[Object(v.jsxs)(x.a,{lg:16,style:{position:"relative"},children:[Object(v.jsx)("img",{className:"w-100","data-aos":"slide-right","data-aos-duration":"1500",src:"https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}),Object(v.jsx)("h1",{className:"login-logo",children:"FARM-X"})]}),Object(v.jsx)(x.a,{lg:8,className:"text-left p-5",children:Object(v.jsxs)(q.a,{layout:"vertical",className:"login-form p-5",onFinish:function(t){var c;e((c=t,function(){var e=Object(u.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,g.a.post("/api/users/login",c);case 4:n=e.sent,localStorage.setItem("user",JSON.stringify(n.data)),N.b.success("Login success"),t({type:"LOADING",payload:!1}),setTimeout((function(){window.location.href="/preHome"}),500),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),N.b.error("Something went wrong"),t({type:"LOADING",payload:!1});case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())),console.log(t)},children:[Object(v.jsx)("h1",{children:"Login"}),Object(v.jsx)("hr",{}),Object(v.jsx)(q.a.Item,{name:"username",label:"Username",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"password",label:"Password",rules:[{required:!0}],children:Object(v.jsx)(G.a,{type:"password"})}),Object(v.jsx)("button",{className:"btn1 mt-2",children:"Login"}),Object(v.jsx)("hr",{}),Object(v.jsx)(o.b,{to:"/register",children:"Click Here to Register"})]})})]})]})};H.a.init();var F=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.alertsReducer})).loading;return Object(v.jsxs)("div",{className:"login",children:[t&&Object(v.jsx)(T,{}),Object(v.jsxs)(O.a,{gutter:16,className:"d-flex align-items-center",children:[Object(v.jsxs)(x.a,{lg:16,style:{position:"relative"},children:[Object(v.jsx)("img",{className:"w-100","data-aos":"slide-left","data-aos-duration":"1500",src:"https://th.bing.com/th/id/R.2193ed2b05371fa474bdc8e87131c220?rik=2e9cxi9ryJJZUA&riu=http%3a%2f%2ffarmingequipmentcanada.com%2fwp-content%2fuploads%2f2013%2f01%2ffarm-equipment-list-tractor.jpg&ehk=qjzJoXIsc9I40%2fRJaOn5I25aleNwdG2Y3Qq84e5wK9c%3d&risl=&pid=ImgRaw&r=0"}),Object(v.jsx)("h1",{className:"login-logo",children:"FARM-X"})]}),Object(v.jsx)(x.a,{lg:8,className:"text-left p-5",children:Object(v.jsxs)(q.a,{layout:"vertical",className:"login-form p-5",onFinish:function(t){var c;e((c=t,function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,g.a.post("/api/users/register",c);case 4:e.sent,N.b.success("Registration successfull"),setTimeout((function(){window.location.href="/login"}),500),t({type:"LOADING",payload:!1}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),N.b.error("Something went wrong"),t({type:"LOADING",payload:!1});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())),console.log(t)},children:[Object(v.jsx)("h1",{children:"Register"}),Object(v.jsx)("hr",{}),Object(v.jsx)(q.a.Item,{name:"username",label:"Username",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"password",label:"Password",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"cpassword",label:"Confirm Password",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)("button",{className:"btn1 mt-2 mb-3",children:"Register"}),Object(v.jsx)("br",{}),Object(v.jsx)(o.b,{to:"/login",children:"Click Here to Login"})]})})]})]})},P=c(314),M=c(320),B=c(319),J=function(e){return function(){var t=Object(u.a)(b.a.mark((function t(c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:"LOADING",payload:!0}),t.prev=1,t.next=4,g.a.post("/api/bookings/bookcar",e);case 4:c({type:"LOADING",payload:!1}),N.b.success("Your car booked successfully"),setTimeout((function(){window.location.href="/userbookings"}),500),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),c({type:"LOADING",payload:!1}),N.b.error("Something went wrong , please try later");case 14:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},Y=c(184),U=c.n(Y),X=D.a.RangePicker;var z=function(e){var t=e.match,c=Object(j.c)((function(e){return e.carsReducer})).cars,r=Object(j.c)((function(e){return e.alertsReducer})).loading,a=Object(n.useState)({}),s=Object(l.a)(a,2),o=s[0],i=s[1],d=Object(j.b)(),b=Object(n.useState)(),u=Object(l.a)(b,2),h=u[0],m=u[1],p=Object(n.useState)(),f=Object(l.a)(p,2),g=f[0],N=f[1],k=Object(n.useState)(0),S=Object(l.a)(k,2),I=S[0],D=S[1],A=Object(n.useState)(!1),R=Object(l.a)(A,2),L=R[0],q=R[1],G=Object(n.useState)(0),E=Object(l.a)(G,2),H=E[0],_=E[1],F=Object(n.useState)(!1),Y=Object(l.a)(F,2),z=Y[0],K=Y[1];return Object(n.useEffect)((function(){0==c.length?d(w()):i(c.find((function(e){return e._id==t.params.carid})))}),[c]),Object(n.useEffect)((function(){_(I*o.rentPerHour),L&&_(H+.2*H)}),[L,I]),Object(v.jsxs)(y,{children:[r&&Object(v.jsx)(T,{}),Object(v.jsxs)(O.a,{justify:"center",className:"d-flex align-items-center",style:{minHeight:"90vh"},children:[Object(v.jsx)(x.a,{lg:10,sm:24,xs:24,className:"p-3",children:Object(v.jsx)("img",{src:o.image,className:"carimg2 bs1 w-100","data-aos":"flip-left","data-aos-duration":"1500"})}),Object(v.jsxs)(x.a,{lg:10,sm:24,xs:24,className:"text-right",children:[Object(v.jsx)(P.a,{type:"horizontal",dashed:!0,children:"Car Info"}),Object(v.jsxs)("div",{style:{textAlign:"right",background:"white",color:"black",opacity:.7},children:[Object(v.jsx)("p",{children:o.name}),Object(v.jsxs)("p",{children:[o.rentPerHour," Rent Per hour /-"]}),Object(v.jsxs)("p",{children:[" ",o.nameOfShop]}),Object(v.jsxs)("p",{children:[" ",o.address]}),Object(v.jsxs)("p",{children:[" ",o.nameOfDriver]}),Object(v.jsxs)("p",{children:[" ",o.phoneNo]})]}),Object(v.jsx)(P.a,{type:"horizontal",dashed:!0,children:"Select Time Slots"}),Object(v.jsx)(X,{showTime:{format:"HH:mm"},format:"MMM DD yyyy HH:mm",onChange:function(e){m(C()(e[0]).format("MMM DD yyyy HH:mm")),N(C()(e[1]).format("MMM DD yyyy HH:mm")),D(e[1].diff(e[0],"hours"))}}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{className:"btn1 mt-2",onClick:function(){K(!0)},children:"See Booked Slots"}),h&&g&&Object(v.jsxs)("div",{style:{textAlign:"right",background:"white",color:"black",opacity:.7},children:[Object(v.jsxs)("p",{children:["Total Hours : ",Object(v.jsx)("b",{children:I})]}),Object(v.jsxs)("p",{children:["Rent Per Hour : ",Object(v.jsx)("b",{children:o.rentPerHour})]}),Object(v.jsx)(M.a,{onChange:function(e){e.target.checked?q(!0):q(!1)},children:"Driver Required"}),Object(v.jsxs)("h3",{children:["Total Amount : ",H]}),Object(v.jsx)("button",{className:"btn1",onClick:function(){var e={user:JSON.parse(localStorage.getItem("user"))._id,car:o._id,totalHours:I,nameOfDriver:o.nameOfDriver,phoneNo:o.phoneNo,nameOfShop:o.nameOfShop,phoneNoShop:o.phoneNoShop,address:o.address,city:o.city,totalAmount:H,driverRequired:L,bookedTimeSlots:{from:h,to:g}};d(J(e))},children:"Book COD"}),Object(v.jsx)("br",{}),Object(v.jsx)(U.a,{shippingAddress:!0,token:function(e){var t={token:e,user:JSON.parse(localStorage.getItem("user"))._id,car:o._id,totalHours:I,nameOfDriver:o.nameOfDriver,phoneNo:o.phoneNo,nameOfShop:o.nameOfShop,phoneNoShop:o.phoneNoShop,address:o.address,city:o.city,totalAmount:H,driverRequired:L,bookedTimeSlots:{from:h,to:g}};d(J(t))},currency:"inr",amount:100*H,stripeKey:"pk_test_51IYnC0SIR2AbPxU0TMStZwFUoaDZle9yXVygpVIzg36LdpO8aSG8B9j2C0AikiQw2YyCI8n4faFYQI5uG3Nk5EGQ00lCfjXYvZ",children:Object(v.jsx)("button",{className:"btn1",children:"Book Now by giving advance amount"})})]})]}),o.name&&Object(v.jsx)(B.a,{visible:z,closable:!1,footer:!1,title:"Booked time slots",children:Object(v.jsxs)("div",{className:"p-2",children:[o.bookedTimeSlots.map((function(e){return Object(v.jsxs)("button",{className:"btn1 mt-2",children:[e.from," - ",e.to]})})),Object(v.jsx)("div",{className:"text-right mt-5",children:Object(v.jsx)("button",{className:"btn1",onClick:function(){K(!1)},children:"CLOSE"})})]})})]})]})};c(306);var K=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=Object(j.b)(),c=Object(j.c)((function(e){return e.bookingsReducer})).bookings,r=Object(j.c)((function(e){return e.alertsReducer})).loading,a=Object(n.useState)(""),s=Object(l.a)(a,2),o=s[0],i=s[1],d=Object(n.useState)([]),h=Object(l.a)(d,2),m=h[0],p=(h[1],JSON.parse(localStorage.getItem("user")));if(Object(n.useEffect)((function(){t(function(){var e=Object(u.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,g.a.get("/api/bookings/getallbookings");case 4:c=e.sent,t({type:"GET_ALL_BOOKINGS",payload:c.data}),t({type:"LOADING",payload:!1}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()),console.log(c)}),[o]),p&&c)c.filter((function(e){return e.user._id==p._id}));var f=function(){var e=Object(u.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("/api/bookings/delete",{carid:t});case 3:c=e.sent,i("x"),console.log(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),N=new Date,w=N.getFullYear(),k=N.getMonth()+1,S=N.getDate(),I=N.getHours(),D=N.getMinutes(),A=new Date(w+"-"+k+"-"+S+" "+I+":"+D+":00");return Object(v.jsxs)(y,{children:[r&&Object(v.jsx)(T,{}),Object(v.jsx)("h3",{className:"text-center mt-2",children:"My Bookings"}),console.log(p),Object(v.jsx)(O.a,{justify:"center",gutter:16,children:Object(v.jsx)(x.a,{lg:16,sm:24,children:null===c||void 0===c?void 0:c.filter((function(e){return e.user._id==p._id})).map((function(t,c){var n,r,a,s,o,i,l;console.log("as");var j=t.bookedTimeSlots.to.split(" ")[2],d=t.bookedTimeSlots.to.split(" ")[1],b=t.bookedTimeSlots.to.split(" ")[0],u=e.indexOf(b)+1,h=t.bookedTimeSlots.to.split(" ")[3].split(":")[0],p=t.bookedTimeSlots.to.split(" ")[3].split(":")[1],g=new Date(j+"-"+u+"-"+d+" "+h+":"+p+":00");return console.log(m),Object(v.jsxs)(O.a,{gutter:16,className:"bs1 mt-3 text-left",style:{backgroundColor:"white",opacity:.7},children:[Object(v.jsxs)(x.a,{lg:6,sm:24,children:[Object(v.jsx)("p",{children:Object(v.jsx)("b",{children:null===(n=t.car)||void 0===n?void 0:n.name})}),Object(v.jsxs)("p",{children:["Total hours : ",Object(v.jsx)("b",{children:t.totalHours})]}),Object(v.jsxs)("p",{children:["Rent per hour : ",Object(v.jsx)("b",{children:null===(r=t.car)||void 0===r?void 0:r.rentPerHour})]}),Object(v.jsxs)("p",{children:["Total amount : ",Object(v.jsx)("b",{children:t.totalAmount})]}),Object(v.jsxs)("p",{children:["Name of The driver : ",Object(v.jsx)("b",{children:null===(a=t.car)||void 0===a?void 0:a.nameOfDriver})]}),Object(v.jsxs)("p",{children:["Contact number : ",Object(v.jsx)("b",{children:null===(s=t.car)||void 0===s?void 0:s.phoneNo})]})]}),Object(v.jsxs)(x.a,{lg:12,sm:24,children:[t.transactionId?Object(v.jsxs)("p",{children:["Transaction Id : ",Object(v.jsx)("b",{children:t.transactionId})]}):Object(v.jsxs)("p",{children:["Transaction Id :",Object(v.jsx)("b",{children:" Your order is COD"})]}),Object(v.jsxs)("p",{children:["From: ",Object(v.jsx)("b",{children:t.bookedTimeSlots.from})]}),Object(v.jsxs)("p",{children:["To: ",Object(v.jsx)("b",{children:t.bookedTimeSlots.to})]}),Object(v.jsxs)("p",{children:["Date of booking:"," ",Object(v.jsx)("b",{children:C()(t.createdAt).format("MMM DD yyyy")})]}),Object(v.jsxs)("p",{children:["Name of The Shop : ",Object(v.jsx)("b",{children:null===(o=t.car)||void 0===o?void 0:o.nameOfShop})]}),Object(v.jsxs)("p",{children:["Phone of The Shop : ",Object(v.jsx)("b",{children:null===(i=t.car)||void 0===i?void 0:i.phoneNoShop})]})]}),Object(v.jsx)(x.a,{lg:6,sm:24,className:"text-right",children:Object(v.jsx)("img",{style:{borderRadius:5},src:null===(l=t.car)||void 0===l?void 0:l.image,height:"140",className:"p-2"})}),console.log(g,A),g>A?Object(v.jsx)("button",{type:"button",class:"btn btn-danger",onClick:function(){return e=t._id,void("yes"===prompt("Are you sure you want to delete it? If Yes,then please type yes in the boYour will get refund within 3-4 working days")?f(e):console.log("a"));var e},children:"Delete"}):Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:"btn btn-bg-danger-subtle disabled",children:"Delete"})})]},t._id)}))})})]})};var Q=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.alertsReducer})).loading;return Object(v.jsxs)(y,{children:[t&&Object(v.jsx)(T,{}),Object(v.jsx)(O.a,{justify:"center mt-5",children:Object(v.jsx)(x.a,{lg:12,sm:24,xs:24,className:"p-2",children:Object(v.jsxs)(q.a,{className:"bs1 p-2",layout:"vertical",onFinish:function(t){var c;console.log(t),t.bookedTimeSlots=[],e((c=t,function(){var e=Object(u.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,g.a.post("/api/cars/addcar",c);case 4:n=e.sent,console.log(n),t({type:"LOADING",payload:!1}),N.b.success("New car added successfully"),setTimeout((function(){window.location.href="/admin"}),500),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),t({type:"LOADING",payload:!1});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(v.jsx)("h3",{children:"Add New Equipment"}),Object(v.jsx)("hr",{}),Object(v.jsx)(q.a.Item,{name:"name",label:"Equipment name",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"nameOfDriver",label:"Name of the Driver",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"phoneNo",label:"Phone Number",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"nameOfShop",label:"Name of the shop",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"phoneNoShop",label:"Phone Number of shop",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"address",label:"Address of the shop",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"city",label:"Shop location city",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"image",label:"Image url",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"rentPerHour",label:"Rent per hour",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"capacity",label:"Capacity",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"fuelType",label:"Fuel Type",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)("div",{className:"text-right",children:Object(v.jsx)("button",{className:"btn1",children:"ADD CAR"})})]})})})]})},Z=c(324),V=c(325),W=c(322);D.a.RangePicker;var $=function(){var e=Object(j.c)((function(e){return e.carsReducer})).cars,t=Object(j.c)((function(e){return e.alertsReducer})).loading,c=Object(n.useState)([]),r=Object(l.a)(c,2),a=r[0],s=r[1],i=Object(j.b)();return Object(n.useEffect)((function(){i(w())}),[]),Object(n.useEffect)((function(){s(e)}),[e]),Object(v.jsx)(y,{children:Object(v.jsxs)(k.a,{children:[Object(v.jsx)(O.a,{justify:"center",gutter:16,className:"mt-2",children:Object(v.jsx)(x.a,{lg:20,sm:24,children:Object(v.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(v.jsx)("h3",{className:"mt-1 mr-2",children:"Admin Panel"}),Object(v.jsx)("button",{className:"btn1",children:Object(v.jsx)("a",{href:"/addcar",children:"ADD Equipment"})}),Object(v.jsx)("button",{className:"btn1",children:Object(v.jsx)("a",{href:"/allbookings",children:"See all bookings"})})]})})}),1==t&&Object(v.jsx)(T,{}),Object(v.jsx)(O.a,{children:null===a||void 0===a?void 0:a.map((function(e){return Object(v.jsxs)(S.a,{style:{width:"25rem"},className:"mr-4",children:[Object(v.jsx)(S.a.Img,{variant:"top",style:{height:"300px"},src:e.image}),Object(v.jsxs)(S.a.Body,{children:[Object(v.jsx)(S.a.Title,{children:e.name}),Object(v.jsxs)(S.a.Text,{children:[Object(v.jsxs)("div",{children:["Rent per Hour :",e.rentPerHour]}),Object(v.jsxs)("div",{children:["Name of the Shop :",e.nameOfShop]}),Object(v.jsxs)("div",{children:["Address of the shop :",e.address]}),Object(v.jsxs)("div",{children:["City-",e.city]})]}),Object(v.jsxs)("div",{className:"mr-4",children:[Object(v.jsx)(o.b,{to:"/editcar/".concat(e._id),children:Object(v.jsx)(Z.a,{className:"mr-3",style:{color:"green",cursor:"pointer"}})}),Object(v.jsx)(W.a,{title:"Are you sure to delete this car?",onConfirm:function(){var t;i((t={carid:e._id},function(){var e=Object(u.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOADING",payload:!0}),e.prev=1,e.next=4,g.a.post("/api/cars/deletecar",t);case 4:c({type:"LOADING",payload:!1}),N.b.success("Car deleted successfully"),setTimeout((function(){window.location.reload()}),500),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),c({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()))},okText:"Yes",cancelText:"No",children:Object(v.jsx)(V.a,{style:{color:"red",cursor:"pointer"}})})]})]})]})}))})]})})};var ee=function(e){var t=e.match,c=Object(j.c)((function(e){return e.carsReducer})).cars,r=Object(j.b)(),a=Object(j.c)((function(e){return e.alertsReducer})).loading,s=Object(n.useState)(),o=Object(l.a)(s,2),i=o[0],d=o[1],h=Object(n.useState)([]),m=Object(l.a)(h,2),p=m[0],f=m[1];return Object(n.useEffect)((function(){0==c.length?r(w()):(f(c),d(c.find((function(e){return e._id==t.params.carid}))),console.log(i))}),[c]),Object(v.jsxs)(y,{children:[a&&Object(v.jsx)(T,{}),Object(v.jsx)(O.a,{justify:"center mt-5",children:Object(v.jsx)(x.a,{lg:12,sm:24,xs:24,className:"p-2",children:p.length>0&&Object(v.jsxs)(q.a,{initialValues:i,className:"bs1 p-2",layout:"vertical",onFinish:function(e){var t;e._id=i._id,r((t=e,function(){var e=Object(u.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOADING",payload:!0}),e.prev=1,e.next=4,g.a.post("/api/cars/editcar",t);case 4:c({type:"LOADING",payload:!1}),N.b.success("Car details updated successfully"),setTimeout((function(){window.location.href="/admin"}),500),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),c({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())),console.log(e)},children:[Object(v.jsx)("h3",{children:"Add New Equipment"}),Object(v.jsx)("hr",{}),Object(v.jsx)(q.a.Item,{name:"name",label:"Equipment name",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"nameOfDriver",label:"Name of the Driver",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"phoneNo",label:"Phone Number",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"nameOfShop",label:"Name of the shop",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"phoneNoShop",label:"Phone Number of shop",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"address",label:"Address of the shop",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"city",label:"Shop location city",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"image",label:"Image url",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"rentPerHour",label:"Rent per hour",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"capacity",label:"Capacity",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)(q.a.Item,{name:"fuelType",label:"Fuel Type",rules:[{required:!0}],children:Object(v.jsx)(G.a,{})}),Object(v.jsx)("div",{className:"text-right",children:Object(v.jsx)("button",{className:"btn1",children:"Edit Equipment"})})]})})})]})},te=c(11),ce=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(l.a)(a,2);s[0],s[1];Object(n.useEffect)((function(){o()}),[]);var o=function(){var e=Object(u.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/bookings/getallbookings");case 2:t=e.sent,n=t.data,r(n),console.log(n[0].user.username),console.log(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("button",{onClick:function(){window.location.href="/admin"},children:"GO BACK"}),Object(v.jsxs)("table",{class:"table",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"col",children:"#"}),Object(v.jsx)("th",{scope:"col",children:"User"}),Object(v.jsx)("th",{scope:"col",children:"Name of shop"}),Object(v.jsx)("th",{scope:"col",children:"Name of Driver"}),Object(v.jsx)("th",{scope:"col",children:"Phone of shop"}),Object(v.jsx)("th",{scope:"col",children:"Phone of driver"}),Object(v.jsx)("th",{scope:"col",children:"Equipment"}),Object(v.jsx)("th",{scope:"col",children:"From"}),Object(v.jsx)("th",{scope:"col",children:"To"}),Object(v.jsx)("th",{scope:"col",children:"Total Amount"}),Object(v.jsx)("th",{scope:"col",children:"Transaction Id"})]})}),Object(v.jsxs)("tbody",{children:[console.log(c),null===c||void 0===c?void 0:c.map((function(e,t){var c=e.bookedTimeSlots,n=e.car,r=e.totalAmount,a=e.user.username;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("tr",{style:{backgroundColor:"white",opacity:"0.7 "},children:[Object(v.jsx)("th",{scope:"row",children:t+1}),Object(v.jsx)("td",{children:a}),Object(v.jsx)("td",{children:null===n||void 0===n?void 0:n.nameOfShop}),Object(v.jsx)("td",{children:null===n||void 0===n?void 0:n.nameOfDriver}),Object(v.jsx)("td",{children:null===n||void 0===n?void 0:n.phoneNoShop}),Object(v.jsx)("td",{children:null===n||void 0===n?void 0:n.phoneNo}),Object(v.jsx)("td",{children:null===n||void 0===n?void 0:n.name}),Object(v.jsx)("td",{children:c.from}),Object(v.jsx)("td",{children:c.to}),Object(v.jsx)("td",{children:r}),Object(v.jsx)("td",{children:e.transactionId?e.transactionId:"COD"})]})})}))]})]}),Object(v.jsxs)("button",{type:"button",onClick:function(e){e.preventDefault();var t=null===c||void 0===c?void 0:c.reduce((function(e,t){var c=t.bookedTimeSlots,n=t.car,r=(t.totalAmount,t.user),a=n.nameOfShop,s=n.nameOfDriver,o=n.phoneNoShop,i=n.phoneNo,l=n.name,j=c.from,d=c.to,b=t.totalAmount,u=t.transactionId?t.transactionId:"COD";return e.push([r,a,s,o,i,l,j,d,b,u].join(",")),e}),[]);!function(e){var t=e.data,c=e.fileName,n=e.fileType,r=new Blob([t],{type:n}),a=document.createElement("a");a.download=c,a.href=window.URL.createObjectURL(r);var s=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});a.dispatchEvent(s),a.remove()}({data:[].concat(["User,Shop,Driver,Phone_shop,Phone_Driver,Equipment,From,To,Total,Transaction_ID"],Object(te.a)(t)).join("\n"),fileName:"users.csv",fileType:"text/csv"})},children:[" ","Download data in excel format"]})]})},ne=function(){return Object(v.jsx)("div",{children:"DeleteBooking"})},re=c(187),ae=c(77),se=c(323),oe=function(){return Object(v.jsx)("footer",{style:{backgroundColor:"black",color:"white",width:"100%"},children:Object(v.jsx)(k.a,{children:Object(v.jsxs)(re.a,{children:[Object(v.jsxs)(ae.a,{children:[Object(v.jsx)("h5",{style:{color:"white"},children:"FARM-X"}),Object(v.jsx)("div",{children:"The purpose of Farm-x is to provide connections between different roles in the agriculture industry. As the farmers are not getting a fair price for their goods because of contractors. This app removes the requirement of contractors for farmers. Farmers can buy their required needs for farming from Sellers and they can also sell their products to the Consumers"})]}),Object(v.jsxs)(ae.a,{children:[Object(v.jsx)("h5",{style:{color:"white"},children:"Links"}),Object(v.jsx)("div",{children:"Farmer"}),Object(v.jsx)("div",{children:"krishi site"}),Object(v.jsx)("div",{children:"Ek aur"})]}),Object(v.jsxs)(ae.a,{children:[Object(v.jsx)("h5",{style:{color:"white"},children:"Contact us"}),Object(v.jsx)("div",{children:"Tushar Kumar"}),Object(v.jsx)("div",{children:"tushar.kumar9179@gmail.com"}),Object(v.jsx)("div",{children:"+91 9045730781"})]}),Object(v.jsxs)(ae.a,{children:[Object(v.jsx)("h5",{style:{color:"white"},children:"Contact Us"}),Object(v.jsxs)(I.a,{children:[Object(v.jsxs)(I.a.Group,{controlId:"name",children:[Object(v.jsx)(I.a.Label,{children:"Name"}),Object(v.jsx)(I.a.Control,{type:"text",placeholder:"Enter your name"})]}),Object(v.jsxs)(I.a.Group,{controlId:"email",children:[Object(v.jsx)(I.a.Label,{children:"Email"}),Object(v.jsx)(I.a.Control,{type:"email",placeholder:"Enter your email"})]}),Object(v.jsx)(se.a,{variant:"primary",type:"submit",children:"Send"})]})]})]})})})},ie=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"header bs1",children:Object(v.jsx)(re.a,{gutter:16,justify:"center",children:Object(v.jsx)(ae.a,{lg:20,sm:24,xs:24,children:Object(v.jsx)("div",{className:"d-flex justify-content-between",children:Object(v.jsx)("h1",{children:Object(v.jsx)("b",{children:Object(v.jsx)(o.b,{to:"/",style:{color:"orangered"},children:"FARM-X"})})})})})})}),Object(v.jsxs)("div",{className:"container farmerContainer",children:[Object(v.jsx)("h1",{className:"title",children:"FARMER"}),Object(v.jsx)("h4",{className:"farmer-title",children:"If you are a farmer then you are at perfect platfrom from where you can hire all of your farming related machines and make your equipment available for hiring."}),Object(v.jsxs)(S.a,{children:[Object(v.jsx)(S.a.Img,{variant:"top",src:"https://www.theindiaforum.in/sites/default/files/styles/cover_story/public/field/image/2022/06/21/ramkumar-radhakrishnan-wikimedia-1622193304-1622193304.jpeg"}),Object(v.jsx)(o.b,{to:"/",style:{height:"60px",fontSize:"30px"},children:"Let's Hire"})]})]})]}),Object(v.jsx)(oe,{})]})},le=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(v.jsx)("div",{children:Object(v.jsx)("form",{onSubmit:function(e){e.preventDefault(),g.a.post("/api/otp/verify",{num:c})},children:Object(v.jsx)("input",{type:"text",value:c,className:"form-control",onChange:function(e){return r(e.target.value)}})})})};var je=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(o.a,{children:[Object(v.jsx)(de,{path:"/",exact:!0,component:L}),Object(v.jsx)(de,{path:"/preHome",exact:!0,component:ie}),Object(v.jsx)(i.b,{path:"/login",exact:!0,component:_}),Object(v.jsx)(i.b,{path:"/loginOTP",exact:!0,component:le}),Object(v.jsx)(i.b,{path:"/register",exact:!0,component:F}),Object(v.jsx)(de,{path:"/booking/:carid",exact:!0,component:z}),Object(v.jsx)(de,{path:"/userbookings",exact:!0,component:K}),Object(v.jsx)(de,{path:"/addcar",exact:!0,component:Q}),Object(v.jsx)(de,{path:"/allbookings",exact:!0,component:ce}),Object(v.jsx)(de,{path:"/deleteBooking",exact:!0,component:ne}),Object(v.jsx)(de,{path:"/editcar/:carid",exact:!0,component:ee}),Object(v.jsx)(de,{path:"/admin",exact:!0,component:$})]})})};function de(e){return localStorage.getItem("user")?Object(v.jsx)(i.b,Object(s.a)({},e)):Object(v.jsx)(i.a,{to:"/login"})}var be=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,326)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))},ue=c(101),he=c(188),Oe=c(189),xe={loading:!1},me={cars:[]},pe={bookings:[]},fe=Object(he.composeWithDevTools)({}),ge=Object(ue.combineReducers)({carsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;return"GET_ALL_CARS"===t.type?Object(s.a)(Object(s.a)({},e),{},{cars:t.payload}):e},alertsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;return"LOADING"===t.type?Object(s.a)(Object(s.a)({},e),{},{loading:t.payload}):e},bookingsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;return"GET_ALL_BOOKINGS"===t.type?Object(s.a)(Object(s.a)({},e),{},{bookings:t.payload}):e}}),ve=Object(ue.createStore)(ge,fe(Object(ue.applyMiddleware)(Oe.a)));a.a.render(Object(v.jsx)(j.a,{store:ve,children:Object(v.jsx)(je,{})}),document.getElementById("root")),be()}},[[307,1,2]]]);
//# sourceMappingURL=main.ca2b0213.chunk.js.map