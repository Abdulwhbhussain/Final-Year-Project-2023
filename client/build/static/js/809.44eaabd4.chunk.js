"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[809],{3321:function(e,n,s){s(2791);var t=s(184);n.Z=function(){return(0,t.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(e,n,s){s.d(n,{Z:function(){return c}});s(2791);var t=s(6355),i=s(3495),r=s(1087),l=s(184),c=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("footer",{children:[(0,l.jsxs)("div",{className:"footer",children:[(0,l.jsxs)("div",{className:"footer-links",children:[(0,l.jsx)("h3",{children:"Links"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/",children:"Home"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/doctors",children:"Doctors"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/appointments",children:"Appointments"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/notifications",children:"Notifications"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.fO,{to:"/#contact",children:"Contact Us"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.OL,{to:"/profile",children:"Profile"})})]})]}),(0,l.jsxs)("div",{className:"social",children:[(0,l.jsx)("h3",{children:"Social links"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"facebook",children:(0,l.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(t.tBk,{})})}),(0,l.jsx)("li",{className:"youtube",children:(0,l.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(t.V2E,{})})}),(0,l.jsx)("li",{className:"instagram",children:(0,l.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(t.Zf_,{})})})]})]})]}),(0,l.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,l.jsx)("a",{href:"https://github.com/Abdulwhbhussain",target:"_blank",rel:"noreferrer",children:"Wahab"})," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,n,s){s.d(n,{Z:function(){return u}});var t=s(9439),i=s(2791),r=s(7689),l=s(1087),c=s(3495),o=s(9434),a=s(5318),d=s(3853),h=s(1213),x=s(456),j=s(184),u=function(){var e=(0,i.useState)(!1),n=(0,t.Z)(e,2),s=n[0],u=n[1],f=(0,o.I0)(),m=(0,r.s0)(),p=(0,i.useState)(localStorage.getItem("token")||""),g=(0,t.Z)(p,2),v=g[0],k=(g[1],(0,i.useState)(localStorage.getItem("token")?(0,x.Z)(localStorage.getItem("token")):"")),N=(0,t.Z)(k,2),b=N[0];N[1];return(0,j.jsxs)("header",{children:[(0,j.jsxs)("nav",{className:s?"nav-active":"",children:[(0,j.jsx)("h2",{className:"nav-logo",children:(0,j.jsx)(l.OL,{to:"/",children:"HealthBooker"})}),(0,j.jsxs)("ul",{className:"nav-links",children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/",children:"Home"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/doctors",children:"Doctors"})}),v&&b.isAdmin&&(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/dashboard/users",children:"Dashboard"})}),v&&!b.isAdmin&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/appointments",children:"Appointments"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/notifications",children:"Notifications"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,j.jsx)("li",{children:(0,j.jsx)(c.fO,{to:"/#contact",children:"Contact Us"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/profile",children:"Profile"})})]}),v?(0,j.jsx)("li",{children:(0,j.jsx)("span",{className:"btn",onClick:function(){f((0,a.ps)({})),localStorage.removeItem("token"),m("/login")},children:"Logout"})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{className:"btn",to:"/login",children:"Login"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,j.jsxs)("div",{className:"menu-icons",children:[!s&&(0,j.jsx)(d.cur,{className:"menu-open",onClick:function(){u(!0)}}),s&&(0,j.jsx)(h.ySC,{className:"menu-close",onClick:function(){u(!1)}})]})]})}},809:function(e,n,s){s.r(n),s.d(n,{default:function(){return f}});var t=s(4165),i=s(5861),r=s(9439),l=s(2791),c=s(9434),o=s(3321),a=s(6794),d=s(3841),h=s(4971),x=s(5318),j=s(3200),u=(s(5108),s(184)),f=function(){var e=(0,l.useState)([]),n=(0,r.Z)(e,2),s=n[0],f=n[1],m=(0,c.I0)(),p=(0,c.v9)((function(e){return e.root})).loading,g=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n){var s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m((0,x.K4)(!0)),e.next=4,(0,h.Z)("http://localhost:5000/api/notification/getallnotifs");case 4:s=e.sent,m((0,x.K4)(!1)),f(s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error Agya Bhai",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){g()}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{}),p?(0,u.jsx)(j.Z,{}):(0,u.jsxs)("section",{className:"container notif-section",children:[(0,u.jsx)("h2",{className:"page-heading",children:"Your Notifications"}),s.length>0?(0,u.jsx)("div",{className:"notifications",children:(0,u.jsxs)("table",{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"S.No"}),(0,u.jsx)("th",{children:"Content"}),(0,u.jsx)("th",{children:"Date"}),(0,u.jsx)("th",{children:"Time"})]})}),(0,u.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map((function(e,n){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:n+1}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.content}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.updatedAt.split("T")[0]}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.updatedAt.split("T")[1].split(".")[0]})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,u.jsx)(o.Z,{})]}),(0,u.jsx)(a.Z,{})]})}},5108:function(){}}]);
//# sourceMappingURL=809.44eaabd4.chunk.js.map