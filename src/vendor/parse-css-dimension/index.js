var e=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports);var u=e((k,g)=>{g.exports=["em","ex","ch","rem","vh","vw","vmin","vmax","px","mm","cm","in","pt","pc","mozmm"]});var a=e((z,v)=>{v.exports=["deg","grad","rad","turn"]});var c=e((L,w)=>{w.exports=["dpi","dpcm","dppx"]});var h=e(($,y)=>{y.exports=["Hz","kHz"]});var m=e((j,b)=>{b.exports=["s","ms"]});var q=u(),f=a(),p=c(),l=h(),d=m();function s(t){if(/\.\D?$/.test(t))throw new Error("The dot should be followed by a number");if(/^[+-]{2}/.test(t))throw new Error("Only one leading +/- is allowed");if(x(t)>1)throw new Error("Only one dot is allowed");if(/%$/.test(t)){this.type="percentage",this.value=o(t),this.unit="%";return}var r=O(t);if(!r){this.type="number",this.value=o(t);return}this.type=F(r),this.value=o(t.substr(0,t.length-r.length)),this.unit=r}s.prototype.valueOf=function(){return this.value};s.prototype.toString=function(){return this.value+(this.unit||"")};function U(t){return new s(t)}function x(t){var r=t.match(/\./g);return r?r.length:0}function o(t){var r=parseFloat(t);if(isNaN(r))throw new Error("Invalid number: "+t);return r}var E=[].concat(f,l,q,p,d);function O(t){var r=t.match(/\D+$/),n=r&&r[0];if(n&&E.indexOf(n)===-1)throw new Error("Invalid unit: "+n);return n}var D=Object.assign(i(f,"angle"),i(l,"frequency"),i(p,"resolution"),i(d,"time"));function i(t,r){return Object.fromEntries(t.map(n=>[n,r]))}function F(t){return D[t]||"length"}export{U as default};