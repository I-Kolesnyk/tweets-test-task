"use strict";(self.webpackChunktweets_test_task=self.webpackChunktweets_test_task||[]).push([[696],{6696:function(n,t,e){e.r(t),e.d(t,{default:function(){return un}});var o=e(2791),r=e(5048),i=e(9085),a=e(598),s=e(8163),l=e(873),c=e(3431),g=function(n){return n.pagination.allUsers},f=function(n){return n.pagination.tweetsPerPage},A=function(n){return n.pagination.totalPages},d=function(n){return n.pagination.currentPage},u=(0,l.P1)([function(n){return n.pagination.shownUsers},c.G],(function(n,t){return"all"===t?n:"follow"===t?n.filter((function(n){return"follow"===localStorage.getItem(n.id)})):"following"===t?n.filter((function(n){return"following"===localStorage.getItem(n.id)})):void 0})),x=function(){return(0,r.v9)(f)},h=function(){return(0,r.v9)(d)},m=e(9439),p=function(n){return localStorage.getItem("".concat(n))},C=function(n,t){return localStorage.setItem("".concat(n),t)},Z=function(n,t){return"follow"===n?t+1:"following"===n?t-1:t};function b(n){var t=n.toString().split(".");return t[0].replace(/\B(?=(\d{3})+(?!\d))/g,",")+(t.length>1?"."+t[1]:"")}var O,k,v,y,w,j,P,M,z,E,Q,B,N=e.p+"static/media/logo.e917114d7945c04c85a8946a331d28b6.svg",G=e(168),H=e(6088),V=e(2554),L=e(7724),D=H.Z.li(y||(y=(0,G.Z)(["\n  ","\n"])),(function(n){var t=n.theme;return(0,V.iv)(O||(O=(0,G.Z)(["\n  width: 380px;\n  height: 460px;\n  padding: 20px 20px 36px 20px;\n  background: linear-gradient(\n    114.99deg,\n    "," -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: ",";\n  border-radius: 20px;\n"])),t.colors.mainDarkColor,t.cardBoxShadow)})),R=H.Z.div(w||(w=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: url(",");\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: 5px;\n"])),L),W=H.Z.img(j||(j=(0,G.Z)(["\n  align-self: flex-start;\n"]))),I=H.Z.div(P||(P=(0,G.Z)(["\n  margin-top: 136px;\n  margin-bottom: 16px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: 35px;\n"])),"data:image/png;base64,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"),K=H.Z.div(M||(M=(0,G.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 380px;\n  height: 80px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: 0px;\n"])),"data:image/png;base64,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"),F=H.Z.img(z||(z=(0,G.Z)(["\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n"]))),J=H.Z.p(E||(E=(0,G.Z)(["\n  ","\n"])),(function(n){var t=n.theme;return(0,V.iv)(k||(k=(0,G.Z)(["\n  margin: 0;\n  font-family: ",";\n  font-style: normal;\n  font-weight: ",";\n  font-size: 20px;\n  line-height: ",";\n  text-transform: ",";\n  color: ",";\n"])),t.font.fontFamily,t.font.mediumWeight,t.font.lineHeight,t.font.textTransform,t.colors.mainLightColor)})),S=H.Z.div(Q||(Q=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 26px;\n"]))),X=H.Z.button(B||(B=(0,G.Z)(["\n  ","\n"])),(function(n){var t=n.theme;return(0,V.iv)(v||(v=(0,G.Z)(["\n  width: 196px;\n  height: 50px;\n  box-shadow: ",";\n  border-radius: ",";\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  text-transform: ",";\n  color: ",";\n"])),t.buttonBoxShadow,t.borderRadius,t.font.fontFamily,t.font.semiBoldWeight,t.font.smallSize,t.font.lineHeight,t.font.textTransform,t.colors.darkFontColor)})),Y=e(184);var U,q,T,_=function(n){var t=n.userData,e=t.id,r=t.avatar,s=t.user,l=t.tweets,c=t.followers,g=(0,o.useState)(p(e)||"follow"),f=(0,m.Z)(g,2),A=f[0],d=f[1],u=(0,a.kD)(),x=(0,m.Z)(u,2),h=x[0],O=x[1].isError,k=p(e);(0,o.useEffect)((function(){C(e,A)})),(0,o.useEffect)((function(){O&&i.Am.error("Something has happened. Please try again later.")}),[O]);var v={user:s,tweets:l,avatar:r,followers:Z(A,c),id:e};return(0,Y.jsx)(D,{children:(0,Y.jsxs)(R,{children:[(0,Y.jsx)(W,{src:N,alt:"go-it logo"}),(0,Y.jsx)(I,{children:(0,Y.jsx)(K,{children:(0,Y.jsx)(F,{src:r,alt:s})})}),(0,Y.jsxs)(S,{children:[(0,Y.jsxs)(J,{children:[b(l)," tweets"]}),(0,Y.jsxs)(J,{children:[b(c)," followers"]})]}),(0,Y.jsx)(X,{type:"button",onClick:function(){return function(n,t){null===k&&(d("following"),C(n,"following"),h(t)),"following"===k&&(d("follow"),C(n,"follow"),h(t)),"follow"===k&&(d("following"),C(n,"following"),h(t))}(e,v)},style:{backgroundColor:"following"===A?"#5CD3A8":"#EBD8FF"},children:A})]})})},$=e(1273),nn=H.Z.div(q||(q=(0,G.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),tn=H.Z.button(T||(T=(0,G.Z)(["\n  ","\n"])),(function(n){var t=n.theme;return(0,V.iv)(U||(U=(0,G.Z)(["\n  padding: 15px;\n  height: 60px;\n  width: 160px;\n  background-color: ",";\n  color: ",";\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  text-transform: ",";\n  border-radius: ",";\n  transform: scale(1);\n  transition: ",";\n  &:hover,\n  &:focus-visible {\n    transform: scale(1.05);\n  }\n"])),t.colors.mainDarkColor,t.colors.mainLightColor,t.font.fontFamily,t.font.mediumWeight,t.font.smallSize,t.font.lineHeight,t.font.textTransform,t.borderRadius,t.transition)}));var en,on,rn,an,sn=function(){var n=x(),t=h(),e=(0,r.I0)();return(0,Y.jsx)(nn,{children:(0,Y.jsx)(tn,{onClick:function(){return o=n,r=t,e((0,s.CE)(o+3)),e((0,s.D4)(r+1)),void e((0,$.T)("all"));var o,r},children:"Load more"})})},ln=e(5438);e(5462);function cn(){return(0,Y.jsx)(i.Ix,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})}var gn=H.Z.h2(on||(on=(0,G.Z)(["\n  ","\n"])),(function(n){var t=n.theme;return(0,V.iv)(en||(en=(0,G.Z)(["\n  margin: 0;\n  width: 800px;\n  color: ",";\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 2.8;\n  text-transform: ",";\n  text-align: center;\n"])),t.colors.mainDarkColor,t.font.fontFamily,t.font.semiBoldWeight,t.font.mediumSize,t.font.textTransform)})),fn=H.Z.div(rn||(rn=(0,G.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 700px;\n  background: url(",");\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: 60px;\n"])),L),An=H.Z.ul(an||(an=(0,G.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 50px;\n  margin-bottom: 30px;\n"])));var dn=function(){var n=(0,a.Cx)(),t=n.data,e=n.isFetching,l=n.isError,f=n.isSuccess,d=(0,r.v9)(g),m=(0,r.v9)(A),p=x(),C=h(),Z=(0,r.v9)(c.G),b=(0,r.v9)(u),O=(0,r.I0)();return(0,o.useEffect)((function(){t&&O((0,s.BA)(t))}),[t,O]),(0,o.useEffect)((function(){if(d){var n=d.slice(0,p);O((0,s.yg)(n)),O((0,s.K$)(Math.ceil(d.length/3)))}}),[d,O,p]),(0,o.useEffect)((function(){l&&i.Am.error("Something has happened. Please try again later.")}),[l]),(0,Y.jsxs)(Y.Fragment,{children:[e&&(0,Y.jsx)(ln.Z,{}),f&&t.length?(0,Y.jsx)(An,{children:b&&b.map((function(n){return(0,Y.jsx)(_,{userData:n},n.id)}))}):(0,Y.jsx)(fn,{children:(0,Y.jsxs)(gn,{children:["Great! You are the first user! ",(0,Y.jsx)("br",{})," Wait for a little for someone to join you."]})}),m>1&&C<m&&"all"===Z&&(0,Y.jsx)(sn,{}),(0,Y.jsx)(cn,{})]})};var un=function(){return(0,Y.jsx)(dn,{})}},7724:function(n,t,e){n.exports=e.p+"static/media/bcg.032662a2a907475127d7.png"}}]);
//# sourceMappingURL=696.af6dfcb5.chunk.js.map