(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var i=a(1),c=a(6),s=a.n(c),l=(a(15),a(4)),r=a(5),n=a(7),o=a(8),b=a(2),j=a(10),u=a(9),d=(a(16),a(17),a(0)),h=function(t){var e="button ";return e+=t.operation?"operation":"",e+=t.double?"double":"",e+=t.triple?"triple":"",Object(d.jsx)("button",{onClick:function(e){return t.click&&t.click(t.label)},className:e,children:t.label})},p=(a(19),function(t){return Object(d.jsx)("div",{className:"display",children:t.value})}),O={displayValue:"0",clearDisplay:!1,operation:null,values:[0,0],current:0},k=function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).state=Object(r.a)({},O),i.clearMemory=i.clearMemory.bind(Object(b.a)(i)),i.setOperation=i.setOperation.bind(Object(b.a)(i)),i.addDigit=i.addDigit.bind(Object(b.a)(i)),i}return Object(o.a)(a,[{key:"clearMemory",value:function(){this.setState(Object(r.a)({},O))}},{key:"setOperation",value:function(t){if(0===this.state.current)this.setState({operation:t,current:1,clearDisplay:!0});else{var e="="===t,a=this.state.operation,i=Object(l.a)(this.state.values);switch(a){case"+":i[0]=i[0]+i[1];break;case"-":i[0]=i[0]-i[1];break;case"*":i[0]=i[0]*i[1];break;case"/":if(0===i[1])break;i[0]=i[0]-i[1];break;default:i[0]=this.state.values[0]}i[1]=1,this.setState({displayValue:i[0],operation:e?null:t,current:e?0:1,clearDisplay:!e,values:i})}}},{key:"addDigit",value:function(t){if("."!==t||!this.state.displayValue.includes(".")){var e=("0"===this.state.displayValue||this.state.clearDisplay?"":this.state.displayValue)+t;if(this.setState({displayValue:e,clearDisplay:!1}),"."!==t){var a=this.state.current,i=parseFloat(e),c=Object(l.a)(this.state.values);c[a]=i,this.setState({values:c})}}}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"calculator",children:[Object(d.jsx)(p,{value:this.state.displayValue}),Object(d.jsx)(h,{label:"AC",click:this.clearMemory,triple:!0}),Object(d.jsx)(h,{label:"\xf7",click:this.setOperation,operation:!0}),Object(d.jsx)(h,{label:"7",click:this.addDigit}),Object(d.jsx)(h,{label:"8",click:this.addDigit}),Object(d.jsx)(h,{label:"9",click:this.addDigit}),Object(d.jsx)(h,{label:"\xd7",click:this.setOperation,operation:!0}),Object(d.jsx)(h,{label:"4",click:this.addDigit}),Object(d.jsx)(h,{label:"5",click:this.addDigit}),Object(d.jsx)(h,{label:"6",click:this.addDigit}),Object(d.jsx)(h,{label:"-",click:this.setOperation,operation:!0}),Object(d.jsx)(h,{label:"1",click:this.addDigit}),Object(d.jsx)(h,{label:"2",click:this.addDigit}),Object(d.jsx)(h,{label:"3",click:this.addDigit}),Object(d.jsx)(h,{label:"+",click:this.setOperation,operation:!0}),Object(d.jsx)(h,{label:"0",click:this.addDigit,double:!0}),Object(d.jsx)(h,{label:".",click:this.addDigit}),Object(d.jsx)(h,{label:"=",click:this.setOperation,operation:!0})]})}}]),a}(i.Component),x=a.p+"static/media/logo.6ce24c58.svg",f=(a(20),function(t){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("p",{className:"footer",children:t.text}),Object(d.jsx)("img",{src:x,className:"App-logo footer",alt:"logo"})]})});s.a.render(Object(d.jsxs)(i.Fragment,{children:[Object(d.jsx)(k,{}),Object(d.jsx)(f,{text:"Made with React"})]}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.275644cd.chunk.js.map