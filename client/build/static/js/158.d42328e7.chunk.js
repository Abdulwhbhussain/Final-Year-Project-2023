"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[158],{3321:function(e,n,s){s(2791);var t=s(184);n.Z=function(){return(0,t.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(e,n,s){s.d(n,{Z:function(){return l}});s(2791);var t=s(6355),i=s(3495),r=s(1087),o=s(184),l=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("footer",{children:[(0,o.jsxs)("div",{className:"footer",children:[(0,o.jsxs)("div",{className:"footer-links",children:[(0,o.jsx)("h3",{children:"Links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.OL,{to:"/",children:"Home"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.OL,{to:"/doctors",children:"Doctors"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.OL,{to:"/appointments",children:"Appointments"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.OL,{to:"/notifications",children:"Notifications"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.fO,{to:"/#contact",children:"Contact Us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.OL,{to:"/profile",children:"Profile"})})]})]}),(0,o.jsxs)("div",{className:"social",children:[(0,o.jsx)("h3",{children:"Social links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:"facebook",children:(0,o.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(t.tBk,{})})}),(0,o.jsx)("li",{className:"youtube",children:(0,o.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(t.V2E,{})})}),(0,o.jsx)("li",{className:"instagram",children:(0,o.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(t.Zf_,{})})})]})]})]}),(0,o.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,o.jsx)("a",{href:"https://github.com/Abdulwhbhussain",target:"_blank",rel:"noreferrer",children:"Wahab"})," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,n,s){s.d(n,{Z:function(){return m}});var t=s(9439),i=s(2791),r=s(7689),o=s(1087),l=s(3495),c=s(9434),a=s(5318),d=s(3853),h=s(1213),u=s(456),x=s(184),m=function(){var e=(0,i.useState)(!1),n=(0,t.Z)(e,2),s=n[0],m=n[1],j=(0,c.I0)(),p=(0,r.s0)(),f=(0,i.useState)(localStorage.getItem("token")||""),v=(0,t.Z)(f,2),g=v[0],N=(v[1],(0,i.useState)(localStorage.getItem("token")?(0,u.Z)(localStorage.getItem("token")):"")),b=(0,t.Z)(N,2),k=b[0];b[1];return(0,x.jsxs)("header",{children:[(0,x.jsxs)("nav",{className:s?"nav-active":"",children:[(0,x.jsx)("h2",{className:"nav-logo",children:(0,x.jsx)(o.OL,{to:"/",children:"HGCS"})}),(0,x.jsxs)("ul",{className:"nav-links",children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/",children:"Home"})}),!k.isAdmin&&(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/doctors",children:"Doctors"})}),g&&k.isAdmin&&(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/dashboard/users",children:"Dashboard"})}),g&&!k.isAdmin&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/appointments",children:"Appointments"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/notifications",children:"Notifications"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.fO,{to:"/#contact",children:"Contact Us"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/profile",children:"Profile"})})]}),g&&k.isDoctor&&!k.isAdmin&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/appointments",children:"Appointments"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/notifications",children:"Notifications"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.fO,{to:"/#contact",children:"Contact Us"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/profile",children:"Profile"})})]}),g?(0,x.jsx)("li",{children:(0,x.jsx)("span",{className:"btn",onClick:function(){j((0,a.ps)({})),localStorage.removeItem("token"),p("/login")},children:"Logout"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{className:"btn",to:"/login",children:"Login"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,x.jsxs)("div",{className:"menu-icons",children:[!s&&(0,x.jsx)(d.cur,{className:"menu-open",onClick:function(){m(!0)}}),s&&(0,x.jsx)(h.ySC,{className:"menu-close",onClick:function(){m(!1)}})]})]})}},3158:function(e,n,s){s.r(n),s.d(n,{default:function(){return k}});var t=s(4165),i=s(5861),r=s(9439),o=s(2791),l=s(4942),c=s(1413),a=s(1243),d=s(3402),h=s(4373),u=s(184),x=function(e){var n=e.setModalOpen,s=e.ele,x=(0,o.useState)({date:"",time:""}),m=(0,r.Z)(x,2),j=m[0],p=m[1],f=function(e){var n=e.target,s=n.name,t=n.value;return p((0,c.Z)((0,c.Z)({},j),{},(0,l.Z)({},s,t)))},v=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(i){var r,o,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.preventDefault(),e.prev=1,e.next=4,d.ZP.promise(a.Z.post("http://localhost:5000/api/appointment/bookappointment",{doctorId:null===s||void 0===s||null===(r=s.userId)||void 0===r?void 0:r._id,date:j.date,time:j.time,doctorname:"".concat(null===s||void 0===s||null===(o=s.userId)||void 0===o?void 0:o.firstname," ").concat(null===s||void 0===s||null===(l=s.userId)||void 0===l?void 0:l.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."});case 4:n(!1),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"modal flex-center",children:(0,u.jsxs)("div",{className:"modal__content",children:[(0,u.jsx)("h2",{className:"page-heading",children:"Book Appointment"}),(0,u.jsx)(h.QAE,{onClick:function(){n(!1)},className:"close-btn"}),(0,u.jsx)("div",{className:"register-container flex-center book",children:(0,u.jsxs)("form",{className:"register-form",children:[(0,u.jsx)("input",{type:"date",name:"date",className:"form-input",value:j.date,onChange:f}),(0,u.jsx)("input",{type:"time",name:"time",className:"form-input",value:j.time,onChange:f}),(0,u.jsx)("button",{type:"submit",className:"btn form-btn",onClick:v,children:"book"})]})})]})})})},m=function(e){var n,s,t,i,l=e.ele,c=(0,o.useState)(!1),a=(0,r.Z)(c,2),h=a[0],m=a[1],j=(0,o.useState)(localStorage.getItem("token")||""),p=(0,r.Z)(j,2),f=p[0];p[1];return(0,u.jsxs)("div",{className:"card",children:[(0,u.jsx)("div",{className:"card-img flex-center",children:(0,u.jsx)("img",{src:(null===l||void 0===l||null===(n=l.userId)||void 0===n?void 0:n.pic)||"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",alt:"profile"})}),(0,u.jsxs)("h3",{className:"card-name",children:["Dr. ",(null===l||void 0===l||null===(s=l.userId)||void 0===s?void 0:s.firstname)+" "+(null===l||void 0===l||null===(t=l.userId)||void 0===t?void 0:t.lastname)]}),(0,u.jsxs)("p",{className:"specialization",children:[(0,u.jsx)("strong",{children:"Specialization: "}),null===l||void 0===l?void 0:l.specialization]}),(0,u.jsxs)("p",{className:"experience",children:[(0,u.jsx)("strong",{children:"Experience: "}),null===l||void 0===l?void 0:l.experience,"yrs"]}),(0,u.jsxs)("p",{className:"fees",children:[(0,u.jsx)("strong",{children:"Fees per consultation: "}),"$ ",null===l||void 0===l?void 0:l.fees]}),(0,u.jsxs)("p",{className:"phone",children:[(0,u.jsx)("strong",{children:"Phone: "}),null===l||void 0===l||null===(i=l.userId)||void 0===i?void 0:i.mobile]}),(0,u.jsx)("button",{className:"btn appointment-btn",onClick:function(){if(""===f)return d.Am.error("You must log in first");m(!0)},children:"Book Appointment"}),h&&(0,u.jsx)(x,{setModalOpen:m,ele:l})]})},j=s(6794),p=s(3841),f=s(4971),v=s(3200),g=s(9434),N=s(5318),b=s(3321),k=function(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),s=n[0],l=n[1],c=(0,g.I0)(),a=(0,g.v9)((function(e){return e.root})).loading,d=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c((0,N.K4)(!0)),e.next=3,(0,f.Z)("http://localhost:5000/api/doctor/getalldoctors");case 3:n=e.sent,console.log(n),l(n),c((0,N.K4)(!1));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){d()}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p.Z,{}),a&&(0,u.jsx)(v.Z,{}),!a&&(0,u.jsxs)("section",{className:"container doctors",children:[(0,u.jsx)("h2",{className:"page-heading",children:"Our Doctors"}),s.length>0?(0,u.jsx)("div",{className:"doctors-card-container",children:s.map((function(e){return(0,u.jsx)(m,{ele:e},e._id)}))}):(0,u.jsx)(b.Z,{})]}),(0,u.jsx)(j.Z,{})]})}}}]);
//# sourceMappingURL=158.d42328e7.chunk.js.map