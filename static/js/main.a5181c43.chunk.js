(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),c=t.n(i),o=(t(15),t(9)),s=t(1),d=t(2),l=t(4),p=t(3),m=t(5),u=t(6),b=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(d.a)(a,[{key:"renderButtons",value:function(){var e=this;return"savedList"===this.props.listType?r.a.createElement("button",{onClick:function(){return e.props.delEvent(e.props.propertyId)}},"Remove Property"):r.a.createElement("button",{onClick:function(){return e.props.addEvent(e.props.propertyId)}},"Add Property")}},{key:"render",value:function(){var e=this.props,a=e.logoBgColor,t=e.propertyId,n=e.logo,i=e.mainImage,c=e.price;e.delEvent,e.addEvent,e.listType;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{className:"logo",style:{backgroundColor:a}},this.renderButtons(),r.a.createElement("img",{src:n,width:"80px",height:"30px",alt:"property"}),r.a.createElement("div",null,t," ")),r.a.createElement("div",{className:"main-image"},r.a.createElement("img",{src:i,alt:"property"})),r.a.createElement("div",{className:"price"},c))}}]),a}(n.Component),g=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(p.a)(a).call(this,e))).AddProperty=function(e,a){var n=e-1,r=[t.state.results[n]],i=t.state.saved,c=[].concat(Object(o.a)(i),r);t.setState({saved:c});var s=Object.assign([],t.state.results);s.splice(n,1),t.setState({results:s}),console.log(n)},t.DelProperty=function(e,a){console.log(e)},t.state={results:u.results,saved:u.saved},t}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"main-container"},r.a.createElement("h1",null," REA Assignment "),r.a.createElement("div",{className:"list-container"},r.a.createElement("div",{className:"result-container"},r.a.createElement("h2",null," Result "),this.state.results.map((function(a,t){return r.a.createElement(b,{key:a.id,listType:"resultResult",propertyId:a.id,logoBgColor:a.agency.brandingColors.primary,mainImage:a.mainImage,logo:a.agency.logo,price:a.price,addEvent:e.AddProperty.bind(t,a.id)})}))),r.a.createElement("div",{className:"saved-container"},r.a.createElement("h2",null," Saved Properties "),this.state.saved.map((function(a,t){return r.a.createElement(b,{key:a.id,listType:"savedList",propertyId:a.id,logoBgColor:a.agency.brandingColors.primary,mainImage:a.mainImage,logo:a.agency.logo,price:a.price,delEvent:e.DelProperty.bind(e,a.id)})})))))}}]),a}(n.Component);var f=function(){return r.a.createElement(g,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e){e.exports=JSON.parse('{"results":[{"price":"$726,500","agency":{"brandingColors":{"primary":"#ffe512"},"logo":"https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif"},"id":"1","mainImage":"https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"},{"price":"$560,520","agency":{"brandingColors":{"primary":"#fcfa3b"},"logo":"https://i4.au.reastatic.net/170x32/a3bd69c1a5c651eca02dd829fdd4d11d1a0b3bb6b00db79410817d17067bd495/main.gif"},"id":"2","mainImage":"https://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"},{"price":"$826,500","agency":{"brandingColors":{"primary":"#57B5E0"},"logo":"https://i1.au.reastatic.net/170x32/b269b079bf554d2ae9ca01d578bb3d80ec5fbb4f57062bbfcd51bbf1f2d13981/main.gif"},"id":"3","mainImage":"https://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"}],"saved":[{"price":"$526,500","agency":{"brandingColors":{"primary":"#000000"},"logo":"https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif"},"id":"4","mainImage":"https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"}]}')}},[[10,1,2]]]);
//# sourceMappingURL=main.a5181c43.chunk.js.map