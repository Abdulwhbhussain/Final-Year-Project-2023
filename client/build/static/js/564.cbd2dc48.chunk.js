"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[564],{3321:function(e,n,t){t(2791);var i=t(184);n.Z=function(){return(0,i.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var i=t(6355),s=t(3495),l=t(1087),o=t(184),r=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("footer",{children:[(0,o.jsxs)("div",{className:"footer",children:[(0,o.jsxs)("div",{className:"footer-links",children:[(0,o.jsx)("h3",{children:"Links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(l.OL,{to:"/",children:"Home"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.OL,{to:"/doctors",children:"Doctors"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.OL,{to:"/appointments",children:"Appointments"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.OL,{to:"/notifications",children:"Notifications"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.fO,{to:"/#contact",children:"Contact Us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.OL,{to:"/profile",children:"Profile"})})]})]}),(0,o.jsxs)("div",{className:"social",children:[(0,o.jsx)("h3",{children:"Social links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:"facebook",children:(0,o.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(i.tBk,{})})}),(0,o.jsx)("li",{className:"youtube",children:(0,o.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(i.V2E,{})})}),(0,o.jsx)("li",{className:"instagram",children:(0,o.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(i.Zf_,{})})})]})]})]}),(0,o.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,o.jsx)("a",{href:"https://github.com/Abdulwhbhussain",target:"_blank",rel:"noreferrer",children:"Wahab"})," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,n,t){t.d(n,{Z:function(){return j}});var i=t(9439),s=t(2791),l=t(7689),o=t(1087),r=t(3495),c=t(9434),d=t(5318),a=t(3853),h=t(1213),u=t(456),x=t(184),j=function(){var e=(0,s.useState)(!1),n=(0,i.Z)(e,2),t=n[0],j=n[1],m=(0,c.I0)(),p=(0,l.s0)(),v=(0,s.useState)(localStorage.getItem("token")||""),f=(0,i.Z)(v,2),g=f[0],b=(f[1],(0,s.useState)(localStorage.getItem("token")?(0,u.Z)(localStorage.getItem("token")):"")),k=(0,i.Z)(b,2),N=k[0];k[1];return(0,x.jsxs)("header",{children:[(0,x.jsxs)("nav",{className:t?"nav-active":"",children:[(0,x.jsx)("h2",{className:"nav-logo",children:(0,x.jsx)(o.OL,{to:"/",children:"HealthBooker"})}),(0,x.jsxs)("ul",{className:"nav-links",children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/",children:"Home"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/doctors",children:"Doctors"})}),g&&N.isAdmin&&(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/dashboard/users",children:"Dashboard"})}),g&&!N.isAdmin&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/appointments",children:"Appointments"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/notifications",children:"Notifications"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,x.jsx)("li",{children:(0,x.jsx)(r.fO,{to:"/#contact",children:"Contact Us"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/profile",children:"Profile"})})]}),g?(0,x.jsx)("li",{children:(0,x.jsx)("span",{className:"btn",onClick:function(){m((0,d.ps)({})),localStorage.removeItem("token"),p("/login")},children:"Logout"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{className:"btn",to:"/login",children:"Login"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,x.jsxs)("div",{className:"menu-icons",children:[!t&&(0,x.jsx)(a.cur,{className:"menu-open",onClick:function(){j(!0)}}),t&&(0,x.jsx)(h.ySC,{className:"menu-close",onClick:function(){j(!1)}})]})]})}},564:function(e,n,t){t.r(n);var i=t(4165),s=t(5861),l=t(9439),o=t(2791),r=t(3321),c=t(6794),d=t(3841),a=t(4971),h=t(5318),u=t(3200),x=t(9434),j=t(456),m=t(1243),p=t(3402),v=(t(5108),t(184));n.default=function(){var e,n=(0,o.useState)([]),t=(0,l.Z)(n,2),f=t[0],g=t[1],b=(0,x.I0)(),k=(0,x.v9)((function(e){return e.root})).loading,N=(0,j.Z)(localStorage.getItem("token")).userId,Z=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b((0,h.K4)(!0)),e.next=4,(0,a.Z)("http://localhost:5000/api/appointment/getallappointments?search=".concat(N));case 4:t=e.sent,g(t),b((0,h.K4)(!1)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){Z()}),[]);var I=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t,s,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.ZP.promise(m.Z.put("http://localhost:5000/api/appointment/completed",{appointid:null===n||void 0===n?void 0:n._id,doctorId:null===n||void 0===n||null===(t=n.doctorId)||void 0===t?void 0:t._id,doctorname:"".concat(null===n||void 0===n||null===(s=n.userId)||void 0===s?void 0:s.firstname," ").concat(null===n||void 0===n||null===(l=n.userId)||void 0===l?void 0:l.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."});case 3:Z(),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d.Z,{}),k?(0,v.jsx)(u.Z,{}):(0,v.jsxs)("section",{className:"container notif-section",children:[(0,v.jsx)("h2",{className:"page-heading",children:"Your Appointments"}),f.length>0?(0,v.jsx)("div",{className:"appointments",children:(0,v.jsxs)("table",{children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"S.No"}),(0,v.jsx)("th",{children:"Doctor"}),(0,v.jsx)("th",{children:"Patient"}),(0,v.jsx)("th",{children:"Appointment Date"}),(0,v.jsx)("th",{children:"Appointment Time"}),(0,v.jsx)("th",{children:"Booking Date"}),(0,v.jsx)("th",{children:"Booking Time"}),(0,v.jsx)("th",{children:"Status"}),N===(null===(e=f[0].doctorId)||void 0===e?void 0:e._id)?(0,v.jsx)("th",{children:"Action"}):(0,v.jsx)(v.Fragment,{})]})}),(0,v.jsx)("tbody",{children:null===f||void 0===f?void 0:f.map((function(e,n){var t,i,s,l,o;return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:n+1}),(0,v.jsx)("td",{children:(null===e||void 0===e||null===(t=e.doctorId)||void 0===t?void 0:t.firstname)+" "+(null===e||void 0===e||null===(i=e.doctorId)||void 0===i?void 0:i.lastname)}),(0,v.jsx)("td",{children:(null===e||void 0===e||null===(s=e.userId)||void 0===s?void 0:s.firstname)+" "+(null===e||void 0===e||null===(l=e.userId)||void 0===l?void 0:l.lastname)}),(0,v.jsx)("td",{children:null===e||void 0===e?void 0:e.date}),(0,v.jsx)("td",{children:null===e||void 0===e?void 0:e.time}),(0,v.jsx)("td",{children:null===e||void 0===e?void 0:e.createdAt.split("T")[0]}),(0,v.jsx)("td",{children:null===e||void 0===e?void 0:e.updatedAt.split("T")[1].split(".")[0]}),(0,v.jsx)("td",{children:null===e||void 0===e?void 0:e.status}),N===(null===e||void 0===e||null===(o=e.doctorId)||void 0===o?void 0:o._id)?(0,v.jsx)("td",{children:(0,v.jsx)("button",{className:"btn user-btn accept-btn ".concat("Completed"===(null===e||void 0===e?void 0:e.status)?"disable-btn":""),disabled:"Completed"===(null===e||void 0===e?void 0:e.status),onClick:function(){return I(e)},children:"Complete"})}):(0,v.jsx)(v.Fragment,{})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,v.jsx)(r.Z,{})]}),(0,v.jsx)(c.Z,{})]})}},5108:function(){}}]);
//# sourceMappingURL=564.cbd2dc48.chunk.js.map