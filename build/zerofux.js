var t=function(t){this.dispatcher=t||document.querySelector("body")};t.prototype.dispatch=function(t){this.dispatcher.dispatchEvent(new CustomEvent(t.type,{detail:t,bubbles:!0,compose:!0}))},t.prototype.setReducers=function(t,e,r){var o=this;t.forEach(function(t){if(!e[t])throw new Error('Please add a reducer for the "'+t+'" action.');o.dispatcher.addEventListener(t,function(o){var a=o.detail;r.state=e[t](r.state,a)})})};var e=new t;exports.ZeroFux=t,exports.zeroFux=e;
//# sourceMappingURL=zerofux.js.map