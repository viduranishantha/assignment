(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),s=(a(15),a(7)),o=a(1),d=a(2),l=a(4),p=a(3),m=a(5),u=a(6),b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"renderButtons",value:function(){var e=this;return"savedList"===this.props.listType?r.a.createElement("button",{onClick:function(){return e.props.delEvent(e.props.propertyId)}},"Remove Property"):r.a.createElement("button",{onClick:function(){return e.props.addEvent(e.props.propertyId)}},"Add Property")}},{key:"render",value:function(){var e=this.props,t=e.logoBgColor,a=e.propertyId,n=e.logo,c=e.mainImage,i=e.price;e.delEvent,e.addEvent,e.listType;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{className:"logo",style:{backgroundColor:t}},this.renderButtons(),r.a.createElement("img",{src:n,width:"80px",height:"30px",alt:"property"}),r.a.createElement("div",null,a," ")),r.a.createElement("div",{className:"main-image"},r.a.createElement("img",{src:c,alt:"property"})),r.a.createElement("div",{className:"price"},i))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).AddProperty=function(e,t){var n=e,r=[a.state.results[n]],c=a.state.saved,i=[].concat(Object(s.a)(c),r);a.setState({saved:i});var o=Object.assign([],a.state.results);o.splice(n,1),a.setState({results:o})},a.DelProperty=function(e,t){console.log(e);var n=[a.state.saved[e]],r=a.state.results,c=[].concat(Object(s.a)(r),n);a.setState({results:c});var i=Object.assign([],a.state.saved);i.splice(e,1),a.setState({saved:i})},a.state={results:u.results,saved:u.saved},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"main-container"},r.a.createElement("h1",null," REA Assignment "),r.a.createElement("div",{className:"list-container"},r.a.createElement("div",{className:"result-container"},r.a.createElement("h2",null," Result "),this.state.results.map((function(t,a){return r.a.createElement(b,{key:t.id,listType:"resultResult",propertyId:t.id,logoBgColor:t.agency.brandingColors.primary,mainImage:t.mainImage,logo:t.agency.logo,price:t.price,addEvent:e.AddProperty.bind(e,a)})}))),r.a.createElement("div",{className:"saved-container"},r.a.createElement("h2",null," Saved Properties "),this.state.saved.map((function(t,a){return r.a.createElement(b,{key:t.id,listType:"savedList",propertyId:t.id,logoBgColor:t.agency.brandingColors.primary,mainImage:t.mainImage,logo:t.agency.logo,price:t.price,delEvent:e.DelProperty.bind(e,a)})})))))}}]),t}(n.Component);var f=function(){return r.a.createElement(g,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e){e.exports=JSON.parse('{"results":[{"price":"$726,500","agency":{"brandingColors":{"primary":"#ffe512"},"logo":"https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif"},"id":"1","mainImage":"https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"},{"price":"$560,520","agency":{"brandingColors":{"primary":"#fcfa3b"},"logo":"https://i4.au.reastatic.net/170x32/a3bd69c1a5c651eca02dd829fdd4d11d1a0b3bb6b00db79410817d17067bd495/main.gif"},"id":"2","mainImage":"https://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"},{"price":"$826,500","agency":{"brandingColors":{"primary":"#57B5E0"},"logo":"https://i1.au.reastatic.net/170x32/b269b079bf554d2ae9ca01d578bb3d80ec5fbb4f57062bbfcd51bbf1f2d13981/main.gif"},"id":"3","mainImage":"https://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"}],"saved":[{"price":"$526,500","agency":{"brandingColors":{"primary":"#000000"},"logo":"https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif"},"id":"4","mainImage":"https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"}]}')}},[[10,1,2]]]);
//# sourceMappingURL=main.27c60b7d.chunk.js.map