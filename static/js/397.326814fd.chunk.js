"use strict";(self.webpackChunkcrypto_world=self.webpackChunkcrypto_world||[]).push([[397],{6397:function(e,n,r){r.r(n);var t=r(885),o=r(6821),i=r(8596),l=r(1795),s=r(3712),a=r(8302),c=r(9038),d=r(8583),u=r(4446),h=r(6556),g=r(9773),f=r(3486),p=r(7631),y=r(6593),x=r(1625),m=r(2791),j=r(9271),C=r(1785),Z=r(1479),k=r(184);n.default=function(){var e,n=(0,m.useState)(""),r=(0,t.Z)(n,2),b=r[0],v=r[1],w=(0,m.useState)(1),_=(0,t.Z)(w,2),M=_[0],F=_[1],S=(0,j.k6)(),B=(0,C.U)(),E=B.currency,L=B.symbol,P=B.coins,D=B.Loading,W=B.fetchCoins;console.log(P),(0,m.useEffect)((function(){W()}),[E]);var z=(0,o.Z)({palette:{primary:{main:"#fff"},type:"dark"}}),A=function(){return P.filter((function(e){return e.name.toLowerCase().includes(b)||e.symbol.toLowerCase().includes(b)}))},I=(0,i.Z)((function(){return{row:{backgroundColor:"#1617a",cursor:"pointer","&:hover":{backgroundColor:"#131111"},fontFamily:"Montserrat"},pagination:{"& .MuiPaginationItem-root":{color:"gold"}}}}))();return(0,k.jsx)(l.Z,{theme:z,children:(0,k.jsxs)(s.Z,{style:{textAlign:"center"},children:[(0,k.jsx)(a.Z,{variant:"h4",style:{margin:18,fontFamily:"Montserrat"},children:"Cryptocurrency Prices by Market Cap"}),(0,k.jsx)(c.Z,{label:"Search for a Crypto currency..",variant:"outlined",style:{marginBottom:20,width:"100%"},onChange:function(e){return v(e.target.value)}}),(0,k.jsx)(d.Z,{children:D?(0,k.jsx)(u.Z,{style:{backgroundColor:"gold"}}):(0,k.jsxs)(h.Z,{children:[(0,k.jsx)(g.Z,{style:{backgroundColor:"#EEBC1D"},children:(0,k.jsx)(f.Z,{children:["Coin","Price","24h Change","Market Cap"].map((function(e){return(0,k.jsx)(p.Z,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"Coin"===e?"left":"right",children:e},e)}))})}),(0,k.jsx)(y.Z,{children:A().slice(10*(M-1),10*(M-1)+10).map((function(e){var n=e.price_change_percentage_24h>0;return(0,k.jsxs)(f.Z,{onClick:function(){return S.push("/coins/".concat(e.id))},className:I.row,children:[(0,k.jsxs)(p.Z,{component:"th",scope:"row",styles:{display:"flex",gap:15},children:[(0,k.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"50",style:{marginBottom:10}}),(0,k.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,k.jsx)("span",{style:{textTransform:"uppercase",fontSize:22},children:e.symbol}),(0,k.jsx)("span",{style:{color:"darkgrey"},children:e.name})]})]}),(0,k.jsxs)(p.Z,{align:"right",children:[L," "," ",(0,Z.x)(e.current_price.toFixed(2))]}),(0,k.jsxs)(p.Z,{align:"right",style:{color:n>0?"rgb( 14,203,129)":"red",fontWeight:500},children:[n&&"+",e.price_change_percentage_24h.toFixed(2),"%"]}),(0,k.jsxs)(p.Z,{align:"right",children:[L," ",(0,Z.x)(e.market_cap.toString().slice(0,-6)),"M"]})]},e.name)}))})]})}),(0,k.jsx)(x.Z,{style:{padding:20,width:"100%",display:"flex",justifyContent:"center"},classes:{ul:I.pagination},count:((null===(e=A())||void 0===e?void 0:e.length)/10).toFixed(0),onChange:function(e,n){F(n),window.scroll(0,450)}})]})})}}}]);
//# sourceMappingURL=397.326814fd.chunk.js.map