(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{43:function(n,e,t){n.exports=t(78)},74:function(n,e){},78:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(36),i=t.n(a),c=t(12),u=t(20),s=t(41),l=t(3),d=t(1),g=t(2),p=t(37),m=t.n(p),f=t(42),b={layer0Background:"#fdf6e3",layer1Background:"#eee8d5",layer1Foreground:"#4d4a44",layer2Background:"#ded8c5",wrongCharColor:"#ba5d5d",playerCursorColor:"#cfbaa5",opponentCursorColor:"#baba70"};function h(){var n=Object(d.a)(["\n  height: calc(100% - ",");\n  background: ",";\n"]);return h=function(){return n},n}function v(){var n=Object(d.a)(["\n  height: ",";\n  background: ",";\n"]);return v=function(){return n},n}var y=g.a.div(v(),"30px",b.layer2Background),k=g.a.div(h(),"30px",b.layer1Background),j=function(n){var e=n.children;return o.a.createElement("div",null,o.a.createElement(y,null),o.a.createElement(k,null,e))};function O(){var n=Object(d.a)(["\n  flex-basis: 100%;\n  padding: 1rem;\n  color: ",";\n  // Copied from default React index.css\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n"]);return O=function(){return n},n}function C(){var n=Object(d.a)(["\n  // Make it easy to visually differentiate messages\n  padding-bottom: 7px;\n"]);return C=function(){return n},n}var E=g.a.div(C()),w=function(n){return o.a.createElement(E,null,o.a.createElement("b",null,"<",n.message.sender,">")," ",o.a.createElement("span",null,n.message.content))},x=g.a.div(O(),b.layer1Foreground),S=function(n){return o.a.createElement(x,null,n.messages.map((function(n,e){return o.a.createElement(w,{key:e,message:n})})))};function B(){var n=Object(d.a)(["\n  ","\n  height: 100%;\n  width: 100%;\n"]);return B=function(){return n},n}function P(){var n=Object(d.a)(["\n  border: calc(1em / 2) solid ",";\n  border-top: 0;\n  height: 40px;\n  box-sizing: border-box;\n  background: ",";\n"]);return P=function(){return n},n}function D(){var n=Object(d.a)(["\n  ","\n  width: 70px;\n  border: solid "," 0;\n"]);return D=function(){return n},n}function F(){var n=Object(d.a)(["\n  background: ",";\n  color: ",";\n  border: 0;\n  width: 100%;\n  padding: 0 3px 3px 0;\n  box-sizing: border-box;\n  outline: none;\n  border-right: 1em solid ",";\n"]);return F=function(){return n},n}function I(){var n=Object(d.a)(["\n  background: ",";\n  height: 50px;\n  display: flex;\n  padding: calc(1rem / 2);\n  box-sizing: border-box;\n"]);return I=function(){return n},n}function M(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);return M=function(){return n},n}var z=g.a.div(M()),J=g.a.form(I(),b.layer2Background),W=g.a.input(F(),b.layer1Background,b.layer1Foreground,b.layer2Background),G="\n  :hover {\n    background: ".concat(b.layer2Background,";\n    color: ").concat(b.layer2Foreground,";\n  }\n  background: ").concat(b.layer1Background,";\n  color: ").concat(b.layer1Foreground,";\n  transition-duration: 0.12s;\n  font-weight: bold;\n  font-size: 14px;\n  padding: 0;\n  cursor: pointer;\n  border: 0;\n  border-radius: 5px;\n  outline: none;\n"),T=g.a.button(D(),G,b.layer2Background),U=g.a.div(P(),b.layer2Background,b.layer2Background),N=g.a.button(B(),G),R=function(n){return o.a.createElement(j,null,o.a.createElement(z,null,o.a.createElement(S,{messages:n.messages}),o.a.createElement(J,{onSubmit:n.handleSendMessage},o.a.createElement(W,{name:"input"}),o.a.createElement(T,null,"SEND")),o.a.createElement(U,null,o.a.createElement(N,{onClick:n.handleClickJoinGame},"JOIN GAME"))))};function A(){var n=Object(d.a)(["\n  padding: ",";\n  margin: 0;\n  color: ",";\n  outline: none;\n"]);return A=function(){return n},n}var H=g.a.pre(A(),"1rem",b.layer1Foreground),K=function(n){return o.a.createElement(j,null,n.snippet&&o.a.createElement(H,{onKeyDown:function(e){["Tab"].includes(e.key)&&e.preventDefault();var t,r=(t=e.key,["Shift","Meta","Alt","Control","Backspace"].includes(t)?null:"Enter"===t?"\n":"Tab"===t?"\t":t);r?0===n.wrongChars&&n.snippet.code[n.cursorPosition]===r?n.setCursorPosition(n.cursorPosition+1):n.setWrongChars(n.wrongChars+1):"Backspace"===e.key&&(n.wrongChars>0?n.setWrongChars(n.wrongChars-1):n.cursorPosition>0&&n.setCursorPosition(n.cursorPosition-1))},tabIndex:"0"},n.snippet.code.split("").map((function(e,t){var r=t===n.cursorPosition,a=Object.values(n.opponentCursorPositions).some((function(n){return n===t})),i=n.wrongChars>0&&t===n.cursorPosition+n.wrongChars-1,c=t>=n.cursorPosition&&t<n.cursorPosition+n.wrongChars,u={};return a&&(u.background=b.opponentCursorColor),r&&(u.background=b.playerCursorColor),n.wrongChars>0&&c&&(u.background=b.wrongCharColor),"\n"===e&&(i||r&&!c)&&(e="\u21b5\n"),o.a.createElement("span",{key:t,style:u},e)}))))};function $(){var n=Object(d.a)(["\n// Consume the entire viewport\nposition: fixed;\ntop: 0;\nleft: 0;\nbottom: 0;\nright: 0;\noverflow: auto;\n\n// Use a grid layout\ndisplay: grid;\ngrid-template-columns: minmax(300px, 500px) minmax(750px, auto);\npadding: 2rem;\ncolumn-gap: 2rem;\n\n// Color\nbackground: ","\n"]);return $=function(){return n},n}var q=g.a.div($(),b.layer0Background);var L=function(){var n=Object(r.useState)(),e=Object(l.a)(n,2),t=e[0],a=e[1],i=Object(r.useState)(),d=Object(l.a)(i,2),g=d[0],p=d[1],b=Object(r.useState)(),h=Object(l.a)(b,2),v=h[0],y=h[1],k=Object(r.useState)({}),j=Object(l.a)(k,2),O=j[0],C=j[1],E=Object(r.useState)(),w=Object(l.a)(E,2),x=w[0],S=w[1],B=Object(r.useState)([]),P=Object(l.a)(B,2),D=P[0],F=P[1],I=Object(r.useState)(),M=Object(l.a)(I,2),z=M[0],J=M[1],W=function(n){return decodeURI(n.pathname).slice(1)};return window.onpopstate=function(n){var e=W(n.target.location);z.emit("join game",e),history.replaceState(void 0,void 0,e)},Object(r.useEffect)((function(){if(z)if("/"===window.location.pathname){var n=Math.random().toString(36).replace(/[^a-z]+/g,"");z.emit("join game",n),history.replaceState(void 0,void 0,n)}else{var e=W(window.location);z.emit("join game",e),history.pushState(void 0,void 0,e)}}),[z]),Object(r.useEffect)((function(){J(m()())}),[]),Object(r.useEffect)((function(){z&&(z.on("game state",(function(n){a(n.snippet),p(n.roundID),y(0),S(0),C({})})),z.on("chat message",(function(n){F((function(e){return[].concat(Object(s.a)(e),[n])}))})),z.on("cursor position update",(function(n){var e=n.sid,t=n.position;C((function(n){return Object(u.a)(Object(u.a)({},n),{},Object(c.a)({},e,t))}))})))}),[z]),Object(r.useEffect)((function(){z&&void 0!==v&&z.emit("cursor position update",{position:v,roundID:g})}),[g,z,v]),Object(f.a)(window.navigator).any?o.a.createElement("div",null,o.a.createElement("h3",null,"This game is not playable on mobile devices"),o.a.createElement("p",null,"To play liracer, open it on a laptop or desktop computer.")):o.a.createElement(q,null,o.a.createElement(R,{messages:D,handleClickJoinGame:function(n){var e=prompt("GameID");null!==e&&""!==e&&(z.emit("join game",e),history.pushState(void 0,void 0,e))},handleSendMessage:function(n){n.preventDefault(),z.emit("chat message",n.target.input.value),n.target.input.value=""}}),o.a.createElement(K,{snippet:t,cursorPosition:v,opponentCursorPositions:O,setCursorPosition:y,wrongChars:x,setWrongChars:S}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.b0ad2b15.chunk.js.map