(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{29:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);t(1);var i,r,c,a,o,s,l,j,b,d=t(19),h=t.n(d),x=t(3),O=t(4),m=Object(O.a)(i||(i=Object(x.a)(["\n  /* @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;700&display=swap'); */\n  \n  html, body {\n      font-family: 'Source Code Pro', monospace;      \n      -webkit-font-smooting: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      height: 100%;\n      width: 100%;\n      background-color: #010400;\n      color: #fff;\n      font-size: 16px;\n      margin: 0;\n\n      background: linear-gradient(270deg, #003844, #00171f);\n        background-size: 400% 400%;\n\n        -webkit-animation: AnimationName 30s ease infinite;\n        -moz-animation: AnimationName 30s ease infinite;\n        animation: AnimationName 15s ease infinite;\n      }\n\n      @-webkit-keyframes AnimationName {\n          0%{background-position:0% 50%}\n          50%{background-position:100% 50%}\n          100%{background-position:0% 50%}\n      }\n      @-moz-keyframes AnimationName {\n          0%{background-position:0% 50%}\n          50%{background-position:100% 50%}\n          100%{background-position:0% 50%}\n      }\n      @keyframes AnimationName {\n          0%{background-position:0% 50%}\n          50%{background-position:100% 50%}\n          100%{background-position:0% 50%}\n      }\n}\n\n  * {\n      margin: 0;\n  }\n\n  span {\n    font-weight: 700;\n  }\n\n  @media (max-width: 430px) {\n    :root {\n      font-size: 12px;\n    }\n  }\n   \n"]))),f=(t(29),t(9)),p=t(6),u=t(2),g=t(5),v=O.b.div(r||(r=Object(x.a)(["\n  width: 75%;\n  max-width: 1100px;\n  margin: 0 auto;\n\n  @media (max-width: 488px) {\n    display: none;\n    /* need to change nav --\x3e hamburger?? */\n  }\n"]))),w=O.b.h1(c||(c=Object(x.a)(["\n  color: #fff;\n  font-weight: 200;\n  font-size: 1.4rem;\n  transition: 300ms;\n\n  &:hover {\n    cursor: pointer;\n    letter-spacing: 2px;\n  }\n"]))),k=O.b.div(a||(a=Object(x.a)(["\n  display: flex;\n"]))),y=O.b.p(o||(o=Object(x.a)(["\n  color: #fff;\n  text-decoration: none;\n  font-weight: 200;\n  font-size: 1.25rem;\n  transition: 300ms;\n\n  &:last-of-type {\n    margin-left: 30px;\n  }\n\n  &:hover,\n  &:focus {\n    font-weight: bold;\n    cursor: pointer;\n    letter-spacing: 2px;\n  }\n\n"]))),T=O.b.div(s||(s=Object(x.a)(["\n  display: flex;\n  justify-content space-between;\n  padding: 2rem 0;\n  align-items: baseline;\n"]))),S=t(0),z=["children"],I=["to","children"],L=["children"],A=["to","children"],N=["children"];function P(e){var n=e.children,t=Object(g.a)(e,z);return Object(S.jsx)(v,Object(u.a)(Object(u.a)({},t),{},{children:n}))}P.Name=function(e){var n=e.to,t=e.children,i=Object(g.a)(e,I);return Object(S.jsx)(f.b,{style:{textDecoration:"none"},to:n,children:Object(S.jsx)(w,Object(u.a)(Object(u.a)({},i),{},{children:t}))})},P.Nav=function(e){var n=e.children,t=Object(g.a)(e,L);return Object(S.jsx)(k,Object(u.a)(Object(u.a)({},t),{},{children:n}))},P.NavLink=function(e){var n=e.to,t=e.children,i=Object(g.a)(e,A);return Object(S.jsx)(f.b,{style:{textDecoration:"none"},to:n,children:Object(S.jsx)(y,Object(u.a)(Object(u.a)({},i),{},{children:t}))})},P.Frame=function(e){var n=e.children,t=Object(g.a)(e,N);return Object(S.jsx)(T,Object(u.a)(Object(u.a)({},t),{},{children:n}))};var B,D,Y,H,V,E=O.b.div(l||(l=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 30%;\n  left: 32px;\n\n  @media (max-width: 550px) {\n    display: none;\n  }\n"]))),F=O.b.div(j||(j=Object(x.a)(['\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n\n  ::before, ::after {\n    content: "";\n    width: .5px;\n    height: 75px;\n    background-color: white;\n    margin: 10px auto;\n    opacity: .4;\n  }\n']))),_=O.b.img(b||(b=Object(x.a)(["\n  filter: brightness(0) invert(1);\n  opacity: 0.65;\n  height: 20px;\n  width: auto;\n  padding: .5rem 0;\n  transition: 300ms;\n\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.1) translateY(-10%);\n    opacity: 1;\n  }\n"]))),q=["children"],C=["children"],R=["href","src","children"];function G(e){var n=e.children,t=Object(g.a)(e,q);return Object(S.jsx)(E,Object(u.a)(Object(u.a)({},t),{},{children:n}))}G.List=function(e){var n=e.children,t=Object(g.a)(e,C);return Object(S.jsx)(F,Object(u.a)(Object(u.a)({},t),{},{children:n}))},G.Item=function(e){var n=e.href,t=e.src;e.children,Object(g.a)(e,R);return Object(S.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:Object(S.jsx)(_,{src:t})})};var J,K,M,Z,Q,U,W,X,$,ee,ne=O.b.div(B||(B=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 60%;\n  max-width: 600px;\n  margin: 0 auto;\n  margin-top: 160px;\n\n\n  animation: risein 1s ease-out 1;\n\n  @keyframes risein {\n    from {\n      transform: translateY(10%);\n      opacity: 0;\n    }\n    to {\n      tranform: translateY(0%);\n      opacity: 1;\n    }\n  }\n"]))),te=O.b.a(D||(D=Object(x.a)(["\n  display: inline-block;\n  margin-top: 40px;\n  color: #fff;\n  border: 3px solid #fff;\n  text-decoration: none;\n  font-size: 1.75rem;\n  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);\n  padding: 0.75em 2em;\n  transition: 350ms;\n  \n  &:hover {\n    transform: translateY(-10%);\n    background-color: #fff;\n    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.35);\n    color: #000;\n    font-weight: 700;\n  }\n"]))),ie=O.b.p(Y||(Y=Object(x.a)(["\n  font-weight: 200;\n  font-size: 1.75rem;\n  margin-bottom: 1em;\n"]))),re=O.b.p(H||(H=Object(x.a)(["\n  font-weight: 200;\n  font-size: 1.75rem;\n  margin-bottom: 1em;\n"]))),ce=O.b.div(V||(V=Object(x.a)([""]))),ae=["children"],oe=["href","children"],se=["children"],le=["children"],je=["children"];function be(e){var n=e.children,t=Object(g.a)(e,ae);return Object(S.jsx)(ne,Object(u.a)(Object(u.a)({},t),{},{children:n}))}be.Email=function(e){var n=e.href,t=e.children,i=Object(g.a)(e,oe);return Object(S.jsx)(te,Object(u.a)(Object(u.a)({href:n},i),{},{children:t}))},be.Text=function(e){var n=e.children,t=Object(g.a)(e,se);return Object(S.jsx)(ie,Object(u.a)(Object(u.a)({},t),{},{children:n}))},be.SubText=function(e){var n=e.children,t=Object(g.a)(e,le);return Object(S.jsx)(re,Object(u.a)(Object(u.a)({},t),{},{children:n}))},be.Box=function(e){var n=e.children,t=Object(g.a)(e,je);return Object(S.jsx)(ce,Object(u.a)(Object(u.a)({},t),{},{children:n}))};var de,he,xe,Oe,me,fe=O.b.div(J||(J=Object(x.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  width: 75%;\n  margin: 0 auto;\n  margin-top: 3em;\n\n  animation: risein 1s ease-out 1;\n\n  @keyframes risein {\n    from {\n      transform: translateY(10%);\n      opacity: 0;\n    }\n    to {\n      tranform: translateY(0%);\n      opacity: 1;\n    }\n  }\n\n  @media (max-width: 800px) {\n    display: flex;\n    flex-direction: column;\n  }\n\n  @media (max-width: 550px) {\n    width: 100%;\n  }\n"]))),pe=O.b.div(K||(K=Object(x.a)(["\n  background-color: #fff;\n  box-sizing: border-box;\n  border-radius: 15px;\n  padding: 1.5rem;\n  opacity: 0.7;\n  margin: 0 0.25rem 0.5rem;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);\n  transition: 300ms;\n\n  &:hover {\n    opacity: 1;\n    transform: translateY(-3.5%) scale(1.01);\n    z-index: 999;\n    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.4);\n  }\n"]))),ue=O.b.p(M||(M=Object(x.a)(["\n  font-size: 1.25rem;\n  color: #000;\n  font-weight: 700;\n\n  &:hover {\n    cursor: pointer;\n    text-decoration: none;\n"]))),ge=O.b.img(Z||(Z=Object(x.a)(["\n  height: 1.25rem;\n  transition: 300ms;\n  color: #000;\n\n  &:hover {\n    cursor: pointer;\n"]))),ve=O.b.h2(Q||(Q=Object(x.a)(["\n  margin-bottom: 1.5rem;\n  color: #000;\n"]))),we=O.b.p(U||(U=Object(x.a)(["\n  color: #000;\n  margin-bottom: 1.5rem;\n"]))),ke=O.b.img(W||(W=Object(x.a)([""]))),ye=O.b.p(X||(X=Object(x.a)(["\n  color: #000;\n  font-size: 0.75rem;\n  opacity: 0.75;\n"]))),Te=O.b.div($||($=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n"]))),Se=O.b.p(ee||(ee=Object(x.a)(["\n  display: flex;\n  width: fit-content;\n  margin: 0 auto;\n  justify-content: center;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 10px 0;\n  transition: 500ms;\n  font-weight: 700;\n  font-size: 1.25rem;\n\n  @media (max-width: 800px) {\n    padding: 1em 2em;\n  }\n\n  &:hover {\n    cursor: pointer;\n    letter-spacing: 1.25px;\n  }\n\n  animation: risein 1s ease-out 1;\n\n  @keyframes risein {\n    from {\n      transform: translateY(10%);\n      opacity: 0;\n    }\n    to {\n      tranform: translateY(0%);\n      opacity: 1;\n    }\n  }\n"]))),ze=["children"],Ie=["children"],Le=["href","src","children"],Ae=["href","src","children"],Ne=["children"],Pe=["children"],Be=["src"],De=["children"],Ye=["children"],He=["href","children"];function Ve(e){var n=e.children,t=Object(g.a)(e,ze);return Object(S.jsx)(fe,Object(u.a)(Object(u.a)({},t),{},{children:n}))}Ve.Box=function(e){var n=e.children,t=Object(g.a)(e,Ie);return Object(S.jsx)(pe,Object(u.a)(Object(u.a)({},t),{},{children:n}))},Ve.Icon=function(e){var n=e.href,t=(e.src,e.children),i=Object(g.a)(e,Le);return Object(S.jsx)("a",{style:{textDecoration:"none"},href:n,target:"_blank",rel:"noreferrer",children:Object(S.jsx)(ue,Object(u.a)(Object(u.a)({},i),{},{children:t}))})},Ve.LinkImg=function(e){var n=e.href,t=e.src,i=(e.children,Object(g.a)(e,Ae));return Object(S.jsx)("a",{style:{color:"#000"},href:n,target:"_blank",rel:"noreferrer",children:Object(S.jsx)(ge,Object(u.a)({src:t},i))})},Ve.Title=function(e){var n=e.children,t=Object(g.a)(e,Ne);return Object(S.jsx)(ve,Object(u.a)(Object(u.a)({},t),{},{children:n}))},Ve.Description=function(e){var n=e.children,t=Object(g.a)(e,Pe);return Object(S.jsx)(we,Object(u.a)(Object(u.a)({},t),{},{children:n}))},Ve.Image=function(e){var n=e.src,t=Object(g.a)(e,Be);return Object(S.jsx)(ke,Object(u.a)({src:n},t))},Ve.SubText=function(e){var n=e.children,t=Object(g.a)(e,De);return Object(S.jsx)(ye,Object(u.a)(Object(u.a)({},t),{},{children:n}))},Ve.Header=function(e){var n=e.children,t=Object(g.a)(e,Ye);return Object(S.jsx)(Te,Object(u.a)(Object(u.a)({},t),{},{children:n}))},Ve.ExternalLink=function(e){var n=e.href,t=e.children,i=Object(g.a)(e,He);return Object(S.jsx)("a",{style:{textDecoration:"none",color:"white"},href:n,target:"_blank",rel:"noreferrer",children:Object(S.jsx)(Se,Object(u.a)(Object(u.a)({},i),{},{children:t}))})};var Ee=O.b.div(de||(de=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  // width: 95%;\n  // max-width: 800px;\n  // margin: 2em auto;\n  width: 60%;\n  max-width: 600px;\n  margin: 0 auto;\n  margin-top: 160px;\n  \n  animation: risein 1s ease-out 1;\n\n  @keyframes risein {\n    from {\n      transform: translateY(10%);\n      opacity: 0;\n    }\n    to {\n      tranform: translateY(0%);\n      opacity: 1;\n    }\n  }\n"]))),Fe=O.b.img(he||(he=Object(x.a)(["\n  height: 400px;\n  filter: saturate(0.65);\n  object-fit: cover;\n  object-position: center;\n"]))),_e=O.b.p(xe||(xe=Object(x.a)(["\nfont-weight: 200;\nfont-size: 1.75rem;\nmargin-bottom: 1em;\ntext-align: center;\n\n"]))),qe=O.b.p(Oe||(Oe=Object(x.a)(["\n  font-size: 0.85rem;\n  text-align: center;\n  margin-bottom: 1em;\n"]))),Ce=Object(O.b)(f.b)(me||(me=Object(x.a)(["\n  display: inline-block;\n  margin-top: 2em;\n  color: #fff;\n  border: 3px solid #fff;\n  text-decoration: none;\n  font-size: 1.75rem;\n  box-shadow: 0 0 12px rgba(0,0,0,0.2);\n  padding: 0.75em 2em;\n  transition: 350ms;\n\n  &:hover {\n    transform: translateY(-10%);\n    background-color: #fff;\n    box-shadow: 8px 8px 8px rgba(0,0,0,.35);\n    color: #000;\n    font-weight: 700;\n  }\n"]))),Re=["children"],Ge=["src"],Je=["children"],Ke=["children"],Me=["to","children"];function Ze(e){var n=e.children,t=Object(g.a)(e,Re);return Object(S.jsx)(Ee,Object(u.a)(Object(u.a)({},t),{},{children:n}))}function Qe(e){var n=e.children;return Object(S.jsxs)(P,{children:[Object(S.jsxs)(P.Frame,{children:[Object(S.jsx)(P.Name,{to:"/home",children:Object(S.jsx)("span",{children:"Aldo"})}),Object(S.jsxs)(P.Nav,{children:[Object(S.jsx)(P.NavLink,{to:"/home",children:".home"}),Object(S.jsx)(P.NavLink,{to:"/work",children:".projects"}),Object(S.jsx)(P.NavLink,{to:"/contact",children:".contact"})]})]}),n]})}function Ue(e){e.children;return Object(S.jsx)(G,{children:Object(S.jsxs)(G.List,{children:[Object(S.jsx)(G.Item,{href:"https://github.com/Aldothedev",src:"./icons/github.svg"}),Object(S.jsx)(G.Item,{href:"https://twitter.com/aldothedev_",src:"./icons/twitter.svg"}),Object(S.jsx)(G.Item,{href:"https://www.linkedin.com/in/aldothedev/",src:"./icons/linkedin.svg"})]})})}function We(e){e.children;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(Ve,{children:[Object(S.jsxs)(Ve.Box,{children:[Object(S.jsxs)(Ve.Header,{children:[Object(S.jsx)(Ve.Icon,{href:"https://github.com/Aldothedev/NetflixClone",src:"./icons/link.svg",children:"</>"}),Object(S.jsx)(Ve.LinkImg,{href:"https://vibrant-boyd-2074fc.netlify.app/",src:"V3Portfolio/icons/link.svg"})]}),Object(S.jsx)(Ve.Title,{children:"netflix clone"}),Object(S.jsx)(Ve.Description,{children:"netflix clone created with react.js and firebase (sign up/auth). create dummy account to see full site. compatible with all devices."}),Object(S.jsx)(Ve.SubText,{children:"react.js, javascript (es6), jquary, firebase, fuse.js, responsive, html/css"})]}),Object(S.jsxs)(Ve.Box,{children:[Object(S.jsxs)(Ve.Header,{children:[Object(S.jsx)(Ve.Icon,{href:"https://github.com/Aldothedev/SolarSystem-React",src:"/icons/link.svg",children:"</>"}),Object(S.jsx)(Ve.LinkImg,{href:"https://aldothedev.github.io/SolarSystem-React/",src:"V3Portfolio/icons/link.svg"})]}),Object(S.jsx)(Ve.Title,{children:"solar system"}),Object(S.jsx)(Ve.Description,{children:"planet fact app for all planets in our solar system."}),Object(S.jsx)(Ve.SubText,{children:"react.js, javascript (es6), scss, figma, responsive, javascript"})]}),Object(S.jsxs)(Ve.Box,{children:[Object(S.jsxs)(Ve.Header,{children:[Object(S.jsx)(Ve.Icon,{href:"https://github.com/Aldothedev/PayApi-Site",src:"/icons/link.svg",children:"</>"}),Object(S.jsx)(Ve.LinkImg,{href:"https://unruffled-colden-5c0403.netlify.app/",src:"V3Portfolio/icons/link.svg"})]}),Object(S.jsx)(Ve.Title,{children:"api site"}),Object(S.jsx)(Ve.Description,{children:"marketing/api site with custom form validations. compatible with all devices."}),Object(S.jsx)(Ve.SubText,{children:"react.js, javascript (es6), sass, jquary, html/css, responsive"})]}),Object(S.jsxs)(Ve.Box,{children:[Object(S.jsxs)(Ve.Header,{children:[Object(S.jsx)(Ve.Icon,{href:"https://github.com/Aldothedev/Beats-Site",src:"/icons/link.svg",children:"</>"}),Object(S.jsx)(Ve.LinkImg,{href:"https://aldothedev.github.io/Beats-Site/",src:"V3Portfolio/icons/link.svg"})]}),Object(S.jsx)(Ve.Title,{children:"beats site"}),Object(S.jsx)(Ve.Description,{children:'beats landing page with animations when scrolling. developed first with the "mobile first" methodology, compatible with all devices.'}),Object(S.jsx)(Ve.SubText,{children:"javascript (es6), figma, scss, html, css, responsive, animations"})]}),Object(S.jsxs)(Ve.Box,{children:[Object(S.jsxs)(Ve.Header,{children:[Object(S.jsx)(Ve.Icon,{href:"https://github.com/Aldothedev/GitHub-Profile-Search",src:"/icons/link.svg",children:"</>"}),Object(S.jsx)(Ve.LinkImg,{href:"https://aldothedev.github.io/GitHub-Profile-Search/",src:"V3Portfolio/icons/link.svg"})]}),Object(S.jsx)(Ve.Title,{children:"github user search app"}),Object(S.jsx)(Ve.Description,{children:"bulit with github users api that pulls user profile info (repos, followers, social, etc...) includes a dark and light mode"}),Object(S.jsx)(Ve.SubText,{children:"react.js ,javascript (es6), apis, responsive"})]}),Object(S.jsxs)(Ve.Box,{children:[Object(S.jsxs)(Ve.Header,{children:[Object(S.jsx)(Ve.Icon,{href:"https://github.com/Aldothedev/Travel",src:"/icons/link.svg",children:"</>"}),Object(S.jsx)(Ve.LinkImg,{href:"https://aldothedev.github.io/Travel/",src:"V3Portfolio/icons/link.svg"})]}),Object(S.jsx)(Ve.Title,{children:"travel website"}),Object(S.jsx)(Ve.Description,{children:"travel landing page with animations when scrolling. includes a dark and light mode and compatible with all devices."}),Object(S.jsx)(Ve.SubText,{children:"javascript (es6), figma, tailwind, html, responsive, animations"})]})]}),Object(S.jsx)(Ve.ExternalLink,{href:"https://github.com/Aldothedev?tab=repositories",children:"click to view more code projects on github"}),Object(S.jsx)(Ve.ExternalLink,{href:"https://drive.google.com/file/d/1ZM0PePK4xwB7NL0DvdK2FilAR9t3jbsf/view?usp=sharing",children:"click to view my resume"})]})}function Xe(){return Object(S.jsx)(We,{})}function $e(e){e.children;return Object(S.jsx)(be,{children:Object(S.jsxs)(be.Box,{children:[Object(S.jsx)(be.Text,{children:"questions?"}),Object(S.jsxs)(be.Text,{children:["send me a ",Object(S.jsx)("span",{children:"message"}),"..."]}),Object(S.jsx)(be.Email,{href:"mailto: aldothedev@gmail.com",children:"contact me"})]})})}function en(){return Object(S.jsx)($e,{})}function nn(e){e.children;return Object(S.jsxs)(Ze,{children:[Object(S.jsxs)(Ze.Text,{children:["hi, im ",Object(S.jsx)("span",{children:"Aldo"})]}),Object(S.jsxs)(Ze.Text,{children:["a ",Object(S.jsx)("span",{children:"front end web developer"})]}),Object(S.jsxs)(Ze.Text,{children:["see some of my recent ",Object(S.jsx)("span",{children:"projects"}),"."]}),Object(S.jsx)(Ze.SubText,{children:"react.js | javascript | typescript | node.js"}),Object(S.jsx)(Ze.SubText,{children:"git | npm | jquery | php | api's | sass | tailwind | html/css"}),Object(S.jsx)(Ce,{to:"/work",children:"projects"})]})}function tn(){return Object(S.jsx)(nn,{})}function rn(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(f.a,{children:[Object(S.jsx)(Qe,{}),Object(S.jsxs)(p.c,{children:[Object(S.jsx)(p.a,{path:"/home",children:Object(S.jsx)(tn,{})}),Object(S.jsx)(p.a,{path:"/V3Portfolio/",component:tn}),Object(S.jsx)(p.a,{path:"/work",children:Object(S.jsx)(Xe,{})}),Object(S.jsx)(p.a,{path:"/contact",children:Object(S.jsx)(en,{})})]}),Object(S.jsx)(Ue,{})]})})}Ze.Photo=function(e){var n=e.src,t=Object(g.a)(e,Ge);return Object(S.jsx)(Fe,Object(u.a)({src:n},t))},Ze.Text=function(e){var n=e.children,t=Object(g.a)(e,Je);return Object(S.jsx)(_e,Object(u.a)(Object(u.a)({},t),{},{children:n}))},Ze.SubText=function(e){var n=e.children,t=Object(g.a)(e,Ke);return Object(S.jsx)(qe,Object(u.a)(Object(u.a)({},t),{},{children:n}))},Ze.LinkText=function(e){var n=e.to,t=e.children,i=Object(g.a)(e,Me);return Object(S.jsx)(f.b,{style:{textDecoration:"none"},to:n,children:Object(S.jsx)(LinkText,Object(u.a)(Object(u.a)({},i),{},{children:t}))})},h.a.render(Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(m,{}),Object(S.jsx)(rn,{})]}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.16627384.chunk.js.map