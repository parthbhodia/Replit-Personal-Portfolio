var $p=t=>{throw TypeError(t)};var Eu=(t,e,n)=>e.has(t)||$p("Cannot "+n);var Z=(t,e,n)=>(Eu(t,e,"read from private field"),n?n.call(t):e.get(t)),tt=(t,e,n)=>e.has(t)?$p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Oe=(t,e,n,r)=>(Eu(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),Gt=(t,e,n)=>(Eu(t,e,"access private method"),n);var rl=(t,e,n,r)=>({set _(i){Oe(t,e,i,n)},get _(){return Z(t,e,r)}});function aS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Vv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gv={exports:{}},$c={},Wv={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=Symbol.for("react.element"),lS=Symbol.for("react.portal"),cS=Symbol.for("react.fragment"),uS=Symbol.for("react.strict_mode"),dS=Symbol.for("react.profiler"),fS=Symbol.for("react.provider"),hS=Symbol.for("react.context"),pS=Symbol.for("react.forward_ref"),mS=Symbol.for("react.suspense"),gS=Symbol.for("react.memo"),vS=Symbol.for("react.lazy"),Kp=Symbol.iterator;function _S(t){return t===null||typeof t!="object"?null:(t=Kp&&t[Kp]||t["@@iterator"],typeof t=="function"?t:null)}var jv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xv=Object.assign,Yv={};function No(t,e,n){this.props=t,this.context=e,this.refs=Yv,this.updater=n||jv}No.prototype.isReactComponent={};No.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};No.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qv(){}qv.prototype=No.prototype;function bh(t,e,n){this.props=t,this.context=e,this.refs=Yv,this.updater=n||jv}var Ah=bh.prototype=new qv;Ah.constructor=bh;Xv(Ah,No.prototype);Ah.isPureReactComponent=!0;var Qp=Array.isArray,$v=Object.prototype.hasOwnProperty,Ch={current:null},Kv={key:!0,ref:!0,__self:!0,__source:!0};function Qv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$v.call(e,r)&&!Kv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ga,type:t,key:s,ref:o,props:i,_owner:Ch.current}}function xS(t,e){return{$$typeof:Ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ga}function yS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zp=/\/+/g;function wu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yS(""+t.key):e.toString(36)}function Ql(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ga:case lS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wu(o,0):r,Qp(i)?(n="",t!=null&&(n=t.replace(Zp,"$&/")+"/"),Ql(i,e,n,"",function(c){return c})):i!=null&&(Rh(i)&&(i=xS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+wu(s,a);o+=Ql(s,e,n,l,i)}else if(l=_S(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+wu(s,a++),o+=Ql(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function il(t,e,n){if(t==null)return t;var r=[],i=0;return Ql(t,r,"","",function(s){return e.call(n,s,i++)}),r}function SS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Zl={transition:null},MS={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Zl,ReactCurrentOwner:Ch};function Zv(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:il,forEach:function(t,e,n){il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return il(t,function(){e++}),e},toArray:function(t){return il(t,function(e){return e})||[]},only:function(t){if(!Rh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=No;ze.Fragment=cS;ze.Profiler=dS;ze.PureComponent=bh;ze.StrictMode=uS;ze.Suspense=mS;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MS;ze.act=Zv;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ch.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$v.call(e,l)&&!Kv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ga,type:t.type,key:i,ref:s,props:r,_owner:o}};ze.createContext=function(t){return t={$$typeof:hS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fS,_context:t},t.Consumer=t};ze.createElement=Qv;ze.createFactory=function(t){var e=Qv.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:pS,render:t}};ze.isValidElement=Rh;ze.lazy=function(t){return{$$typeof:vS,_payload:{_status:-1,_result:t},_init:SS}};ze.memo=function(t,e){return{$$typeof:gS,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Zl.transition;Zl.transition={};try{t()}finally{Zl.transition=e}};ze.unstable_act=Zv;ze.useCallback=function(t,e){return rn.current.useCallback(t,e)};ze.useContext=function(t){return rn.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};ze.useEffect=function(t,e){return rn.current.useEffect(t,e)};ze.useId=function(){return rn.current.useId()};ze.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return rn.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};ze.useRef=function(t){return rn.current.useRef(t)};ze.useState=function(t){return rn.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return rn.current.useTransition()};ze.version="18.3.1";Wv.exports=ze;var D=Wv.exports;const Jv=Vv(D),e0=aS({__proto__:null,default:Jv},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ES=D,wS=Symbol.for("react.element"),TS=Symbol.for("react.fragment"),bS=Object.prototype.hasOwnProperty,AS=ES.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CS={key:!0,ref:!0,__self:!0,__source:!0};function t0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bS.call(e,r)&&!CS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wS,type:t,key:s,ref:o,props:i,_owner:AS.current}}$c.Fragment=TS;$c.jsx=t0;$c.jsxs=t0;Gv.exports=$c;var E=Gv.exports,Bd={},n0={exports:{}},Tn={},r0={exports:{}},i0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Y){var J=U.length;U.push(Y);e:for(;0<J;){var oe=J-1>>>1,Me=U[oe];if(0<i(Me,Y))U[oe]=Y,U[J]=Me,J=oe;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var Y=U[0],J=U.pop();if(J!==Y){U[0]=J;e:for(var oe=0,Me=U.length,$e=Me>>>1;oe<$e;){var q=2*(oe+1)-1,ae=U[q],me=q+1,le=U[me];if(0>i(ae,J))me<Me&&0>i(le,ae)?(U[oe]=le,U[me]=J,oe=me):(U[oe]=ae,U[q]=J,oe=q);else if(me<Me&&0>i(le,J))U[oe]=le,U[me]=J,oe=me;else break e}}return Y}function i(U,Y){var J=U.sortIndex-Y.sortIndex;return J!==0?J:U.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,m=!1,v=!1,g=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=U)r(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function y(U){if(g=!1,x(U),!v)if(n(l)!==null)v=!0,j(A);else{var Y=n(c);Y!==null&&Q(y,Y.startTime-U)}}function A(U,Y){v=!1,g&&(g=!1,u(P),P=-1),m=!0;var J=h;try{for(x(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||U&&!N());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,h=f.priorityLevel;var Me=oe(f.expirationTime<=Y);Y=t.unstable_now(),typeof Me=="function"?f.callback=Me:f===n(l)&&r(l),x(Y)}else r(l);f=n(l)}if(f!==null)var $e=!0;else{var q=n(c);q!==null&&Q(y,q.startTime-Y),$e=!1}return $e}finally{f=null,h=J,m=!1}}var C=!1,b=null,P=-1,T=5,M=-1;function N(){return!(t.unstable_now()-M<T)}function I(){if(b!==null){var U=t.unstable_now();M=U;var Y=!0;try{Y=b(!0,U)}finally{Y?F():(C=!1,b=null)}}else C=!1}var F;if(typeof _=="function")F=function(){_(I)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,$=X.port2;X.port1.onmessage=I,F=function(){$.postMessage(null)}}else F=function(){p(I,0)};function j(U){b=U,C||(C=!0,F())}function Q(U,Y){P=p(function(){U(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,j(A))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var J=h;h=Y;try{return U()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Y){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=h;h=U;try{return Y()}finally{h=J}},t.unstable_scheduleCallback=function(U,Y,J){var oe=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?oe+J:oe):J=oe,U){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=J+Me,U={id:d++,callback:Y,priorityLevel:U,startTime:J,expirationTime:Me,sortIndex:-1},J>oe?(U.sortIndex=J,e(c,U),n(l)===null&&U===n(c)&&(g?(u(P),P=-1):g=!0,Q(y,J-oe))):(U.sortIndex=Me,e(l,U),v||m||(v=!0,j(A))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var Y=h;return function(){var J=h;h=Y;try{return U.apply(this,arguments)}finally{h=J}}}})(i0);r0.exports=i0;var RS=r0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PS=D,wn=RS;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s0=new Set,va={};function gs(t,e){xo(t,e),xo(t+"Capture",e)}function xo(t,e){for(va[t]=e,t=0;t<e.length;t++)s0.add(e[t])}var Fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zd=Object.prototype.hasOwnProperty,DS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jp={},em={};function NS(t){return zd.call(em,t)?!0:zd.call(Jp,t)?!1:DS.test(t)?em[t]=!0:(Jp[t]=!0,!1)}function LS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IS(t,e,n,r){if(e===null||typeof e>"u"||LS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ph=/[\-:]([a-z])/g;function Dh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ph,Dh);Ht[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ph,Dh);Ht[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ph,Dh);Ht[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nh(t,e,n,r){var i=Ht.hasOwnProperty(e)?Ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IS(e,n,i,r)&&(n=null),r||i===null?NS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vr=PS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sl=Symbol.for("react.element"),zs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),Lh=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),o0=Symbol.for("react.provider"),a0=Symbol.for("react.context"),Ih=Symbol.for("react.forward_ref"),Vd=Symbol.for("react.suspense"),Gd=Symbol.for("react.suspense_list"),Uh=Symbol.for("react.memo"),ri=Symbol.for("react.lazy"),l0=Symbol.for("react.offscreen"),tm=Symbol.iterator;function Bo(t){return t===null||typeof t!="object"?null:(t=tm&&t[tm]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Tu;function na(t){if(Tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tu=e&&e[1]||""}return`
`+Tu+t}var bu=!1;function Au(t,e){if(!t||bu)return"";bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function US(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=Au(t.type,!1),t;case 11:return t=Au(t.type.render,!1),t;case 1:return t=Au(t.type,!0),t;default:return""}}function Wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case zs:return"Portal";case Hd:return"Profiler";case Lh:return"StrictMode";case Vd:return"Suspense";case Gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case a0:return(t.displayName||"Context")+".Consumer";case o0:return(t._context.displayName||"Context")+".Provider";case Ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uh:return e=t.displayName||null,e!==null?e:Wd(t.type)||"Memo";case ri:e=t._payload,t=t._init;try{return Wd(t(e))}catch{}}return null}function FS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wd(e);case 8:return e===Lh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kS(t){var e=c0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ol(t){t._valueTracker||(t._valueTracker=kS(t))}function u0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=c0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function _c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jd(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function nm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function d0(t,e){e=e.checked,e!=null&&Nh(t,"checked",e,!1)}function Xd(t,e){d0(t,e);var n=bi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yd(t,e.type,bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yd(t,e,n){(e!=="number"||_c(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function Js(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+bi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function qd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function im(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(ra(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:bi(n)}}function f0(t,e){var n=bi(e.value),r=bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function sm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function h0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?h0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var al,p0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(al=al||document.createElement("div"),al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},OS=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(t){OS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),aa[e]=aa[t]})});function m0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||aa.hasOwnProperty(t)&&aa[t]?(""+e).trim():e+"px"}function g0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=m0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var BS=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kd(t,e){if(e){if(BS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Qd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=null;function Fh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jd=null,eo=null,to=null;function om(t){if(t=Xa(t)){if(typeof Jd!="function")throw Error(re(280));var e=t.stateNode;e&&(e=eu(e),Jd(t.stateNode,t.type,e))}}function v0(t){eo?to?to.push(t):to=[t]:eo=t}function _0(){if(eo){var t=eo,e=to;if(to=eo=null,om(t),e)for(t=0;t<e.length;t++)om(e[t])}}function x0(t,e){return t(e)}function y0(){}var Cu=!1;function S0(t,e,n){if(Cu)return t(e,n);Cu=!0;try{return x0(t,e,n)}finally{Cu=!1,(eo!==null||to!==null)&&(y0(),_0())}}function xa(t,e){var n=t.stateNode;if(n===null)return null;var r=eu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var ef=!1;if(Fr)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){ef=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{ef=!1}function zS(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var la=!1,xc=null,yc=!1,tf=null,HS={onError:function(t){la=!0,xc=t}};function VS(t,e,n,r,i,s,o,a,l){la=!1,xc=null,zS.apply(HS,arguments)}function GS(t,e,n,r,i,s,o,a,l){if(VS.apply(this,arguments),la){if(la){var c=xc;la=!1,xc=null}else throw Error(re(198));yc||(yc=!0,tf=c)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function M0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function am(t){if(vs(t)!==t)throw Error(re(188))}function WS(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return am(i),t;if(s===r)return am(i),e;s=s.sibling}throw Error(re(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==r)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function E0(t){return t=WS(t),t!==null?w0(t):null}function w0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w0(t);if(e!==null)return e;t=t.sibling}return null}var T0=wn.unstable_scheduleCallback,lm=wn.unstable_cancelCallback,jS=wn.unstable_shouldYield,XS=wn.unstable_requestPaint,Tt=wn.unstable_now,YS=wn.unstable_getCurrentPriorityLevel,kh=wn.unstable_ImmediatePriority,b0=wn.unstable_UserBlockingPriority,Sc=wn.unstable_NormalPriority,qS=wn.unstable_LowPriority,A0=wn.unstable_IdlePriority,Kc=null,mr=null;function $S(t){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(Kc,t,void 0,(t.current.flags&128)===128)}catch{}}var er=Math.clz32?Math.clz32:ZS,KS=Math.log,QS=Math.LN2;function ZS(t){return t>>>=0,t===0?32:31-(KS(t)/QS|0)|0}var ll=64,cl=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ia(a):(s&=o,s!==0&&(r=ia(s)))}else o=n&~i,o!==0?r=ia(o):s!==0&&(r=ia(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-er(e),i=1<<n,r|=t[n],e&=~i;return r}function JS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eM(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-er(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=JS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function C0(){var t=ll;return ll<<=1,!(ll&4194240)&&(ll=64),t}function Ru(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-er(e),t[e]=n}function tM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-er(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-er(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var st=0;function R0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var P0,Bh,D0,N0,L0,rf=!1,ul=[],mi=null,gi=null,vi=null,ya=new Map,Sa=new Map,si=[],nM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cm(t,e){switch(t){case"focusin":case"focusout":mi=null;break;case"dragenter":case"dragleave":gi=null;break;case"mouseover":case"mouseout":vi=null;break;case"pointerover":case"pointerout":ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function Ho(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xa(e),e!==null&&Bh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function rM(t,e,n,r,i){switch(e){case"focusin":return mi=Ho(mi,t,e,n,r,i),!0;case"dragenter":return gi=Ho(gi,t,e,n,r,i),!0;case"mouseover":return vi=Ho(vi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ya.set(s,Ho(ya.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Sa.set(s,Ho(Sa.get(s)||null,t,e,n,r,i)),!0}return!1}function I0(t){var e=qi(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=M0(n),e!==null){t.blockedOn=e,L0(t.priority,function(){D0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Zd=r,n.target.dispatchEvent(r),Zd=null}else return e=Xa(n),e!==null&&Bh(e),t.blockedOn=n,!1;e.shift()}return!0}function um(t,e,n){Jl(t)&&n.delete(e)}function iM(){rf=!1,mi!==null&&Jl(mi)&&(mi=null),gi!==null&&Jl(gi)&&(gi=null),vi!==null&&Jl(vi)&&(vi=null),ya.forEach(um),Sa.forEach(um)}function Vo(t,e){t.blockedOn===e&&(t.blockedOn=null,rf||(rf=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,iM)))}function Ma(t){function e(i){return Vo(i,t)}if(0<ul.length){Vo(ul[0],t);for(var n=1;n<ul.length;n++){var r=ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mi!==null&&Vo(mi,t),gi!==null&&Vo(gi,t),vi!==null&&Vo(vi,t),ya.forEach(e),Sa.forEach(e),n=0;n<si.length;n++)r=si[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<si.length&&(n=si[0],n.blockedOn===null);)I0(n),n.blockedOn===null&&si.shift()}var no=Vr.ReactCurrentBatchConfig,Ec=!0;function sM(t,e,n,r){var i=st,s=no.transition;no.transition=null;try{st=1,zh(t,e,n,r)}finally{st=i,no.transition=s}}function oM(t,e,n,r){var i=st,s=no.transition;no.transition=null;try{st=4,zh(t,e,n,r)}finally{st=i,no.transition=s}}function zh(t,e,n,r){if(Ec){var i=sf(t,e,n,r);if(i===null)Bu(t,e,r,wc,n),cm(t,r);else if(rM(i,t,e,n,r))r.stopPropagation();else if(cm(t,r),e&4&&-1<nM.indexOf(t)){for(;i!==null;){var s=Xa(i);if(s!==null&&P0(s),s=sf(t,e,n,r),s===null&&Bu(t,e,r,wc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bu(t,e,r,null,n)}}var wc=null;function sf(t,e,n,r){if(wc=null,t=Fh(r),t=qi(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=M0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wc=t,null}function U0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(YS()){case kh:return 1;case b0:return 4;case Sc:case qS:return 16;case A0:return 536870912;default:return 16}default:return 16}}var hi=null,Hh=null,ec=null;function F0(){if(ec)return ec;var t,e=Hh,n=e.length,r,i="value"in hi?hi.value:hi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ec=i.slice(t,1<r?1-r:void 0)}function tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function dm(){return!1}function bn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dl:dm,this.isPropagationStopped=dm,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var Lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vh=bn(Lo),ja=xt({},Lo,{view:0,detail:0}),aM=bn(ja),Pu,Du,Go,Qc=xt({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Go&&(Go&&t.type==="mousemove"?(Pu=t.screenX-Go.screenX,Du=t.screenY-Go.screenY):Du=Pu=0,Go=t),Pu)},movementY:function(t){return"movementY"in t?t.movementY:Du}}),fm=bn(Qc),lM=xt({},Qc,{dataTransfer:0}),cM=bn(lM),uM=xt({},ja,{relatedTarget:0}),Nu=bn(uM),dM=xt({},Lo,{animationName:0,elapsedTime:0,pseudoElement:0}),fM=bn(dM),hM=xt({},Lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pM=bn(hM),mM=xt({},Lo,{data:0}),hm=bn(mM),gM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_M={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_M[t])?!!e[t]:!1}function Gh(){return xM}var yM=xt({},ja,{key:function(t){if(t.key){var e=gM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gh,charCode:function(t){return t.type==="keypress"?tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),SM=bn(yM),MM=xt({},Qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pm=bn(MM),EM=xt({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gh}),wM=bn(EM),TM=xt({},Lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),bM=bn(TM),AM=xt({},Qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CM=bn(AM),RM=[9,13,27,32],Wh=Fr&&"CompositionEvent"in window,ca=null;Fr&&"documentMode"in document&&(ca=document.documentMode);var PM=Fr&&"TextEvent"in window&&!ca,k0=Fr&&(!Wh||ca&&8<ca&&11>=ca),mm=" ",gm=!1;function O0(t,e){switch(t){case"keyup":return RM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function DM(t,e){switch(t){case"compositionend":return B0(e);case"keypress":return e.which!==32?null:(gm=!0,mm);case"textInput":return t=e.data,t===mm&&gm?null:t;default:return null}}function NM(t,e){if(Vs)return t==="compositionend"||!Wh&&O0(t,e)?(t=F0(),ec=Hh=hi=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return k0&&e.locale!=="ko"?null:e.data;default:return null}}var LM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LM[t.type]:e==="textarea"}function z0(t,e,n,r){v0(r),e=Tc(e,"onChange"),0<e.length&&(n=new Vh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ua=null,Ea=null;function IM(t){Q0(t,0)}function Zc(t){var e=js(t);if(u0(e))return t}function UM(t,e){if(t==="change")return e}var H0=!1;if(Fr){var Lu;if(Fr){var Iu="oninput"in document;if(!Iu){var _m=document.createElement("div");_m.setAttribute("oninput","return;"),Iu=typeof _m.oninput=="function"}Lu=Iu}else Lu=!1;H0=Lu&&(!document.documentMode||9<document.documentMode)}function xm(){ua&&(ua.detachEvent("onpropertychange",V0),Ea=ua=null)}function V0(t){if(t.propertyName==="value"&&Zc(Ea)){var e=[];z0(e,Ea,t,Fh(t)),S0(IM,e)}}function FM(t,e,n){t==="focusin"?(xm(),ua=e,Ea=n,ua.attachEvent("onpropertychange",V0)):t==="focusout"&&xm()}function kM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zc(Ea)}function OM(t,e){if(t==="click")return Zc(e)}function BM(t,e){if(t==="input"||t==="change")return Zc(e)}function zM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rr=typeof Object.is=="function"?Object.is:zM;function wa(t,e){if(rr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zd.call(e,i)||!rr(t[i],e[i]))return!1}return!0}function ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sm(t,e){var n=ym(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ym(n)}}function G0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function W0(){for(var t=window,e=_c();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_c(t.document)}return e}function jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HM(t){var e=W0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G0(n.ownerDocument.documentElement,n)){if(r!==null&&jh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Sm(n,s);var o=Sm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var VM=Fr&&"documentMode"in document&&11>=document.documentMode,Gs=null,of=null,da=null,af=!1;function Mm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;af||Gs==null||Gs!==_c(r)||(r=Gs,"selectionStart"in r&&jh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),da&&wa(da,r)||(da=r,r=Tc(of,"onSelect"),0<r.length&&(e=new Vh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gs)))}function fl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ws={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},Uu={},j0={};Fr&&(j0=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function Jc(t){if(Uu[t])return Uu[t];if(!Ws[t])return t;var e=Ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in j0)return Uu[t]=e[n];return t}var X0=Jc("animationend"),Y0=Jc("animationiteration"),q0=Jc("animationstart"),$0=Jc("transitionend"),K0=new Map,Em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pi(t,e){K0.set(t,e),gs(e,[t])}for(var Fu=0;Fu<Em.length;Fu++){var ku=Em[Fu],GM=ku.toLowerCase(),WM=ku[0].toUpperCase()+ku.slice(1);Pi(GM,"on"+WM)}Pi(X0,"onAnimationEnd");Pi(Y0,"onAnimationIteration");Pi(q0,"onAnimationStart");Pi("dblclick","onDoubleClick");Pi("focusin","onFocus");Pi("focusout","onBlur");Pi($0,"onTransitionEnd");xo("onMouseEnter",["mouseout","mouseover"]);xo("onMouseLeave",["mouseout","mouseover"]);xo("onPointerEnter",["pointerout","pointerover"]);xo("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jM=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function wm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,GS(r,e,void 0,t),t.currentTarget=null}function Q0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;wm(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;wm(i,a,c),s=l}}}if(yc)throw t=tf,yc=!1,tf=null,t}function ft(t,e){var n=e[ff];n===void 0&&(n=e[ff]=new Set);var r=t+"__bubble";n.has(r)||(Z0(e,t,2,!1),n.add(r))}function Ou(t,e,n){var r=0;e&&(r|=4),Z0(n,t,r,e)}var hl="_reactListening"+Math.random().toString(36).slice(2);function Ta(t){if(!t[hl]){t[hl]=!0,s0.forEach(function(n){n!=="selectionchange"&&(jM.has(n)||Ou(n,!1,t),Ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hl]||(e[hl]=!0,Ou("selectionchange",!1,e))}}function Z0(t,e,n,r){switch(U0(e)){case 1:var i=sM;break;case 4:i=oM;break;default:i=zh}n=i.bind(null,e,n,t),i=void 0,!ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Bu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=qi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}S0(function(){var c=s,d=Fh(n),f=[];e:{var h=K0.get(t);if(h!==void 0){var m=Vh,v=t;switch(t){case"keypress":if(tc(n)===0)break e;case"keydown":case"keyup":m=SM;break;case"focusin":v="focus",m=Nu;break;case"focusout":v="blur",m=Nu;break;case"beforeblur":case"afterblur":m=Nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=cM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=wM;break;case X0:case Y0:case q0:m=fM;break;case $0:m=bM;break;case"scroll":m=aM;break;case"wheel":m=CM;break;case"copy":case"cut":case"paste":m=pM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=pm}var g=(e&4)!==0,p=!g&&t==="scroll",u=g?h!==null?h+"Capture":null:h;g=[];for(var _=c,x;_!==null;){x=_;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,u!==null&&(y=xa(_,u),y!=null&&g.push(ba(_,y,x)))),p)break;_=_.return}0<g.length&&(h=new m(h,v,null,n,d),f.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Zd&&(v=n.relatedTarget||n.fromElement)&&(qi(v)||v[kr]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?qi(v):null,v!==null&&(p=vs(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(g=fm,y="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(g=pm,y="onPointerLeave",u="onPointerEnter",_="pointer"),p=m==null?h:js(m),x=v==null?h:js(v),h=new g(y,_+"leave",m,n,d),h.target=p,h.relatedTarget=x,y=null,qi(d)===c&&(g=new g(u,_+"enter",v,n,d),g.target=x,g.relatedTarget=p,y=g),p=y,m&&v)t:{for(g=m,u=v,_=0,x=g;x;x=ys(x))_++;for(x=0,y=u;y;y=ys(y))x++;for(;0<_-x;)g=ys(g),_--;for(;0<x-_;)u=ys(u),x--;for(;_--;){if(g===u||u!==null&&g===u.alternate)break t;g=ys(g),u=ys(u)}g=null}else g=null;m!==null&&Tm(f,h,m,g,!1),v!==null&&p!==null&&Tm(f,p,v,g,!0)}}e:{if(h=c?js(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var A=UM;else if(vm(h))if(H0)A=BM;else{A=kM;var C=FM}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=OM);if(A&&(A=A(t,c))){z0(f,A,n,d);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Yd(h,"number",h.value)}switch(C=c?js(c):window,t){case"focusin":(vm(C)||C.contentEditable==="true")&&(Gs=C,of=c,da=null);break;case"focusout":da=of=Gs=null;break;case"mousedown":af=!0;break;case"contextmenu":case"mouseup":case"dragend":af=!1,Mm(f,n,d);break;case"selectionchange":if(VM)break;case"keydown":case"keyup":Mm(f,n,d)}var b;if(Wh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Vs?O0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(k0&&n.locale!=="ko"&&(Vs||P!=="onCompositionStart"?P==="onCompositionEnd"&&Vs&&(b=F0()):(hi=d,Hh="value"in hi?hi.value:hi.textContent,Vs=!0)),C=Tc(c,P),0<C.length&&(P=new hm(P,t,null,n,d),f.push({event:P,listeners:C}),b?P.data=b:(b=B0(n),b!==null&&(P.data=b)))),(b=PM?DM(t,n):NM(t,n))&&(c=Tc(c,"onBeforeInput"),0<c.length&&(d=new hm("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=b))}Q0(f,e)})}function ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=xa(t,n),s!=null&&r.unshift(ba(t,s,i)),s=xa(t,e),s!=null&&r.push(ba(t,s,i))),t=t.return}return r}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=xa(n,s),l!=null&&o.unshift(ba(n,l,a))):i||(l=xa(n,s),l!=null&&o.push(ba(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XM=/\r\n?/g,YM=/\u0000|\uFFFD/g;function bm(t){return(typeof t=="string"?t:""+t).replace(XM,`
`).replace(YM,"")}function pl(t,e,n){if(e=bm(e),bm(t)!==e&&n)throw Error(re(425))}function bc(){}var lf=null,cf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var df=typeof setTimeout=="function"?setTimeout:void 0,qM=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,$M=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(t){return Am.resolve(null).then(t).catch(KM)}:df;function KM(t){setTimeout(function(){throw t})}function zu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ma(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ma(e)}function _i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Io=Math.random().toString(36).slice(2),fr="__reactFiber$"+Io,Aa="__reactProps$"+Io,kr="__reactContainer$"+Io,ff="__reactEvents$"+Io,QM="__reactListeners$"+Io,ZM="__reactHandles$"+Io;function qi(t){var e=t[fr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kr]||n[fr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cm(t);t!==null;){if(n=t[fr])return n;t=Cm(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[fr]||t[kr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function eu(t){return t[Aa]||null}var hf=[],Xs=-1;function Di(t){return{current:t}}function ht(t){0>Xs||(t.current=hf[Xs],hf[Xs]=null,Xs--)}function ct(t,e){Xs++,hf[Xs]=t.current,t.current=e}var Ai={},Kt=Di(Ai),un=Di(!1),os=Ai;function yo(t,e){var n=t.type.contextTypes;if(!n)return Ai;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dn(t){return t=t.childContextTypes,t!=null}function Ac(){ht(un),ht(Kt)}function Rm(t,e,n){if(Kt.current!==Ai)throw Error(re(168));ct(Kt,e),ct(un,n)}function J0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(re(108,FS(t)||"Unknown",i));return xt({},n,r)}function Cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ai,os=Kt.current,ct(Kt,t),ct(un,un.current),!0}function Pm(t,e,n){var r=t.stateNode;if(!r)throw Error(re(169));n?(t=J0(t,e,os),r.__reactInternalMemoizedMergedChildContext=t,ht(un),ht(Kt),ct(Kt,t)):ht(un),ct(un,n)}var Ar=null,tu=!1,Hu=!1;function e_(t){Ar===null?Ar=[t]:Ar.push(t)}function JM(t){tu=!0,e_(t)}function Ni(){if(!Hu&&Ar!==null){Hu=!0;var t=0,e=st;try{var n=Ar;for(st=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ar=null,tu=!1}catch(i){throw Ar!==null&&(Ar=Ar.slice(t+1)),T0(kh,Ni),i}finally{st=e,Hu=!1}}return null}var Ys=[],qs=0,Rc=null,Pc=0,Ln=[],In=0,as=null,Rr=1,Pr="";function Hi(t,e){Ys[qs++]=Pc,Ys[qs++]=Rc,Rc=t,Pc=e}function t_(t,e,n){Ln[In++]=Rr,Ln[In++]=Pr,Ln[In++]=as,as=t;var r=Rr;t=Pr;var i=32-er(r)-1;r&=~(1<<i),n+=1;var s=32-er(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rr=1<<32-er(e)+i|n<<i|r,Pr=s+t}else Rr=1<<s|n<<i|r,Pr=t}function Xh(t){t.return!==null&&(Hi(t,1),t_(t,1,0))}function Yh(t){for(;t===Rc;)Rc=Ys[--qs],Ys[qs]=null,Pc=Ys[--qs],Ys[qs]=null;for(;t===as;)as=Ln[--In],Ln[In]=null,Pr=Ln[--In],Ln[In]=null,Rr=Ln[--In],Ln[In]=null}var En=null,Mn=null,mt=!1,Qn=null;function n_(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Mn=_i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:Rr,overflow:Pr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Mn=null,!0):!1;default:return!1}}function pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mf(t){if(mt){var e=Mn;if(e){var n=e;if(!Dm(t,e)){if(pf(t))throw Error(re(418));e=_i(n.nextSibling);var r=En;e&&Dm(t,e)?n_(r,n):(t.flags=t.flags&-4097|2,mt=!1,En=t)}}else{if(pf(t))throw Error(re(418));t.flags=t.flags&-4097|2,mt=!1,En=t}}}function Nm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function ml(t){if(t!==En)return!1;if(!mt)return Nm(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=Mn)){if(pf(t))throw r_(),Error(re(418));for(;e;)n_(t,e),e=_i(e.nextSibling)}if(Nm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=_i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=En?_i(t.stateNode.nextSibling):null;return!0}function r_(){for(var t=Mn;t;)t=_i(t.nextSibling)}function So(){Mn=En=null,mt=!1}function qh(t){Qn===null?Qn=[t]:Qn.push(t)}var eE=Vr.ReactCurrentBatchConfig;function Wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var r=n.stateNode}if(!r)throw Error(re(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function gl(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lm(t){var e=t._init;return e(t._payload)}function i_(t){function e(u,_){if(t){var x=u.deletions;x===null?(u.deletions=[_],u.flags|=16):x.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function r(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function i(u,_){return u=Mi(u,_),u.index=0,u.sibling=null,u}function s(u,_,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<_?(u.flags|=2,_):x):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,x,y){return _===null||_.tag!==6?(_=qu(x,u.mode,y),_.return=u,_):(_=i(_,x),_.return=u,_)}function l(u,_,x,y){var A=x.type;return A===Hs?d(u,_,x.props.children,y,x.key):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ri&&Lm(A)===_.type)?(y=i(_,x.props),y.ref=Wo(u,_,x),y.return=u,y):(y=lc(x.type,x.key,x.props,null,u.mode,y),y.ref=Wo(u,_,x),y.return=u,y)}function c(u,_,x,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=$u(x,u.mode,y),_.return=u,_):(_=i(_,x.children||[]),_.return=u,_)}function d(u,_,x,y,A){return _===null||_.tag!==7?(_=is(x,u.mode,y,A),_.return=u,_):(_=i(_,x),_.return=u,_)}function f(u,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=qu(""+_,u.mode,x),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case sl:return x=lc(_.type,_.key,_.props,null,u.mode,x),x.ref=Wo(u,null,_),x.return=u,x;case zs:return _=$u(_,u.mode,x),_.return=u,_;case ri:var y=_._init;return f(u,y(_._payload),x)}if(ra(_)||Bo(_))return _=is(_,u.mode,x,null),_.return=u,_;gl(u,_)}return null}function h(u,_,x,y){var A=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:a(u,_,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case sl:return x.key===A?l(u,_,x,y):null;case zs:return x.key===A?c(u,_,x,y):null;case ri:return A=x._init,h(u,_,A(x._payload),y)}if(ra(x)||Bo(x))return A!==null?null:d(u,_,x,y,null);gl(u,x)}return null}function m(u,_,x,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(x)||null,a(_,u,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case sl:return u=u.get(y.key===null?x:y.key)||null,l(_,u,y,A);case zs:return u=u.get(y.key===null?x:y.key)||null,c(_,u,y,A);case ri:var C=y._init;return m(u,_,x,C(y._payload),A)}if(ra(y)||Bo(y))return u=u.get(x)||null,d(_,u,y,A,null);gl(_,y)}return null}function v(u,_,x,y){for(var A=null,C=null,b=_,P=_=0,T=null;b!==null&&P<x.length;P++){b.index>P?(T=b,b=null):T=b.sibling;var M=h(u,b,x[P],y);if(M===null){b===null&&(b=T);break}t&&b&&M.alternate===null&&e(u,b),_=s(M,_,P),C===null?A=M:C.sibling=M,C=M,b=T}if(P===x.length)return n(u,b),mt&&Hi(u,P),A;if(b===null){for(;P<x.length;P++)b=f(u,x[P],y),b!==null&&(_=s(b,_,P),C===null?A=b:C.sibling=b,C=b);return mt&&Hi(u,P),A}for(b=r(u,b);P<x.length;P++)T=m(b,u,P,x[P],y),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?P:T.key),_=s(T,_,P),C===null?A=T:C.sibling=T,C=T);return t&&b.forEach(function(N){return e(u,N)}),mt&&Hi(u,P),A}function g(u,_,x,y){var A=Bo(x);if(typeof A!="function")throw Error(re(150));if(x=A.call(x),x==null)throw Error(re(151));for(var C=A=null,b=_,P=_=0,T=null,M=x.next();b!==null&&!M.done;P++,M=x.next()){b.index>P?(T=b,b=null):T=b.sibling;var N=h(u,b,M.value,y);if(N===null){b===null&&(b=T);break}t&&b&&N.alternate===null&&e(u,b),_=s(N,_,P),C===null?A=N:C.sibling=N,C=N,b=T}if(M.done)return n(u,b),mt&&Hi(u,P),A;if(b===null){for(;!M.done;P++,M=x.next())M=f(u,M.value,y),M!==null&&(_=s(M,_,P),C===null?A=M:C.sibling=M,C=M);return mt&&Hi(u,P),A}for(b=r(u,b);!M.done;P++,M=x.next())M=m(b,u,P,M.value,y),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?P:M.key),_=s(M,_,P),C===null?A=M:C.sibling=M,C=M);return t&&b.forEach(function(I){return e(u,I)}),mt&&Hi(u,P),A}function p(u,_,x,y){if(typeof x=="object"&&x!==null&&x.type===Hs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case sl:e:{for(var A=x.key,C=_;C!==null;){if(C.key===A){if(A=x.type,A===Hs){if(C.tag===7){n(u,C.sibling),_=i(C,x.props.children),_.return=u,u=_;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ri&&Lm(A)===C.type){n(u,C.sibling),_=i(C,x.props),_.ref=Wo(u,C,x),_.return=u,u=_;break e}n(u,C);break}else e(u,C);C=C.sibling}x.type===Hs?(_=is(x.props.children,u.mode,y,x.key),_.return=u,u=_):(y=lc(x.type,x.key,x.props,null,u.mode,y),y.ref=Wo(u,_,x),y.return=u,u=y)}return o(u);case zs:e:{for(C=x.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(u,_.sibling),_=i(_,x.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=$u(x,u.mode,y),_.return=u,u=_}return o(u);case ri:return C=x._init,p(u,_,C(x._payload),y)}if(ra(x))return v(u,_,x,y);if(Bo(x))return g(u,_,x,y);gl(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(u,_.sibling),_=i(_,x),_.return=u,u=_):(n(u,_),_=qu(x,u.mode,y),_.return=u,u=_),o(u)):n(u,_)}return p}var Mo=i_(!0),s_=i_(!1),Dc=Di(null),Nc=null,$s=null,$h=null;function Kh(){$h=$s=Nc=null}function Qh(t){var e=Dc.current;ht(Dc),t._currentValue=e}function gf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ro(t,e){Nc=t,$h=$s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if($h!==t)if(t={context:t,memoizedValue:e,next:null},$s===null){if(Nc===null)throw Error(re(308));$s=t,Nc.dependencies={lanes:0,firstContext:t}}else $s=$s.next=t;return e}var $i=null;function Zh(t){$i===null?$i=[t]:$i.push(t)}function o_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Or(t,r)}function Or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ii=!1;function Jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ir(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,qe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Or(t,n)}return i=r.interleaved,i===null?(e.next=e,Zh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Or(t,n)}function nc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Oh(t,n)}}function Im(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lc(t,e,n,r){var i=t.updateQueue;ii=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,g=a;switch(h=e,m=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){f=v.call(m,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,h=typeof v=="function"?v.call(m,f,h):v,h==null)break e;f=xt({},f,h);break e;case 2:ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);cs|=o,t.lanes=o,t.memoizedState=f}}function Um(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(re(191,i));i.call(r)}}}var Ya={},gr=Di(Ya),Ca=Di(Ya),Ra=Di(Ya);function Ki(t){if(t===Ya)throw Error(re(174));return t}function ep(t,e){switch(ct(Ra,e),ct(Ca,t),ct(gr,Ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$d(e,t)}ht(gr),ct(gr,e)}function Eo(){ht(gr),ht(Ca),ht(Ra)}function l_(t){Ki(Ra.current);var e=Ki(gr.current),n=$d(e,t.type);e!==n&&(ct(Ca,t),ct(gr,n))}function tp(t){Ca.current===t&&(ht(gr),ht(Ca))}var vt=Di(0);function Ic(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vu=[];function np(){for(var t=0;t<Vu.length;t++)Vu[t]._workInProgressVersionPrimary=null;Vu.length=0}var rc=Vr.ReactCurrentDispatcher,Gu=Vr.ReactCurrentBatchConfig,ls=0,_t=null,Dt=null,Ft=null,Uc=!1,fa=!1,Pa=0,tE=0;function Wt(){throw Error(re(321))}function rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rr(t[n],e[n]))return!1;return!0}function ip(t,e,n,r,i,s){if(ls=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rc.current=t===null||t.memoizedState===null?sE:oE,t=n(r,i),fa){s=0;do{if(fa=!1,Pa=0,25<=s)throw Error(re(301));s+=1,Ft=Dt=null,e.updateQueue=null,rc.current=aE,t=n(r,i)}while(fa)}if(rc.current=Fc,e=Dt!==null&&Dt.next!==null,ls=0,Ft=Dt=_t=null,Uc=!1,e)throw Error(re(300));return t}function sp(){var t=Pa!==0;return Pa=0,t}function ar(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?_t.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function zn(){if(Dt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Ft===null?_t.memoizedState:Ft.next;if(e!==null)Ft=e,Dt=t;else{if(t===null)throw Error(re(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Ft===null?_t.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Da(t,e){return typeof e=="function"?e(t):e}function Wu(t){var e=zn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var r=Dt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((ls&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,_t.lanes|=d,cs|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,rr(r,e.memoizedState)||(cn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_t.lanes|=s,cs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ju(t){var e=zn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);rr(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function c_(){}function u_(t,e){var n=_t,r=zn(),i=e(),s=!rr(r.memoizedState,i);if(s&&(r.memoizedState=i,cn=!0),r=r.queue,op(h_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,Na(9,f_.bind(null,n,r,i,e),void 0,null),kt===null)throw Error(re(349));ls&30||d_(n,e,i)}return i}function d_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f_(t,e,n,r){e.value=n,e.getSnapshot=r,p_(e)&&m_(t)}function h_(t,e,n){return n(function(){p_(e)&&m_(t)})}function p_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rr(t,n)}catch{return!0}}function m_(t){var e=Or(t,1);e!==null&&tr(e,t,1,-1)}function Fm(t){var e=ar();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},e.queue=t,t=t.dispatch=iE.bind(null,_t,t),[e.memoizedState,t]}function Na(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function g_(){return zn().memoizedState}function ic(t,e,n,r){var i=ar();_t.flags|=t,i.memoizedState=Na(1|e,n,void 0,r===void 0?null:r)}function nu(t,e,n,r){var i=zn();r=r===void 0?null:r;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,r!==null&&rp(r,o.deps)){i.memoizedState=Na(e,n,s,r);return}}_t.flags|=t,i.memoizedState=Na(1|e,n,s,r)}function km(t,e){return ic(8390656,8,t,e)}function op(t,e){return nu(2048,8,t,e)}function v_(t,e){return nu(4,2,t,e)}function __(t,e){return nu(4,4,t,e)}function x_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function y_(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,x_.bind(null,e,t),n)}function ap(){}function S_(t,e){var n=zn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function M_(t,e){var n=zn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function E_(t,e,n){return ls&21?(rr(n,e)||(n=C0(),_t.lanes|=n,cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function nE(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var r=Gu.transition;Gu.transition={};try{t(!1),e()}finally{st=n,Gu.transition=r}}function w_(){return zn().memoizedState}function rE(t,e,n){var r=Si(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},T_(t))b_(e,n);else if(n=o_(t,e,n,r),n!==null){var i=nn();tr(n,t,r,i),A_(n,e,r)}}function iE(t,e,n){var r=Si(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(T_(t))b_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,rr(a,o)){var l=e.interleaved;l===null?(i.next=i,Zh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=o_(t,e,i,r),n!==null&&(i=nn(),tr(n,t,r,i),A_(n,e,r))}}function T_(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function b_(t,e){fa=Uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function A_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Oh(t,n)}}var Fc={readContext:Bn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},sE={readContext:Bn,useCallback:function(t,e){return ar().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:km,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ic(4194308,4,x_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ic(4194308,4,t,e)},useInsertionEffect:function(t,e){return ic(4,2,t,e)},useMemo:function(t,e){var n=ar();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ar();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=rE.bind(null,_t,t),[r.memoizedState,t]},useRef:function(t){var e=ar();return t={current:t},e.memoizedState=t},useState:Fm,useDebugValue:ap,useDeferredValue:function(t){return ar().memoizedState=t},useTransition:function(){var t=Fm(!1),e=t[0];return t=nE.bind(null,t[1]),ar().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_t,i=ar();if(mt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),kt===null)throw Error(re(349));ls&30||d_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,km(h_.bind(null,r,s,t),[t]),r.flags|=2048,Na(9,f_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ar(),e=kt.identifierPrefix;if(mt){var n=Pr,r=Rr;n=(r&~(1<<32-er(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},oE={readContext:Bn,useCallback:S_,useContext:Bn,useEffect:op,useImperativeHandle:y_,useInsertionEffect:v_,useLayoutEffect:__,useMemo:M_,useReducer:Wu,useRef:g_,useState:function(){return Wu(Da)},useDebugValue:ap,useDeferredValue:function(t){var e=zn();return E_(e,Dt.memoizedState,t)},useTransition:function(){var t=Wu(Da)[0],e=zn().memoizedState;return[t,e]},useMutableSource:c_,useSyncExternalStore:u_,useId:w_,unstable_isNewReconciler:!1},aE={readContext:Bn,useCallback:S_,useContext:Bn,useEffect:op,useImperativeHandle:y_,useInsertionEffect:v_,useLayoutEffect:__,useMemo:M_,useReducer:ju,useRef:g_,useState:function(){return ju(Da)},useDebugValue:ap,useDeferredValue:function(t){var e=zn();return Dt===null?e.memoizedState=t:E_(e,Dt.memoizedState,t)},useTransition:function(){var t=ju(Da)[0],e=zn().memoizedState;return[t,e]},useMutableSource:c_,useSyncExternalStore:u_,useId:w_,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ru={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nn(),i=Si(t),s=Ir(r,i);s.payload=e,n!=null&&(s.callback=n),e=xi(t,s,i),e!==null&&(tr(e,t,i,r),nc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nn(),i=Si(t),s=Ir(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xi(t,s,i),e!==null&&(tr(e,t,i,r),nc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),r=Si(t),i=Ir(n,r);i.tag=2,e!=null&&(i.callback=e),e=xi(t,i,r),e!==null&&(tr(e,t,r,n),nc(e,t,r))}};function Om(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wa(n,r)||!wa(i,s):!0}function C_(t,e,n){var r=!1,i=Ai,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(i=dn(e)?os:Kt.current,r=e.contextTypes,s=(r=r!=null)?yo(t,i):Ai),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ru,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ru.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Jh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bn(s):(s=dn(e)?os:Kt.current,i.context=yo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ru.enqueueReplaceState(i,i.state,null),Lc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function wo(t,e){try{var n="",r=e;do n+=US(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Xu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lE=typeof WeakMap=="function"?WeakMap:Map;function R_(t,e,n){n=Ir(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Oc||(Oc=!0,Rf=r),xf(t,e)},n}function P_(t,e,n){n=Ir(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xf(t,e),typeof r!="function"&&(yi===null?yi=new Set([this]):yi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new lE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ME.bind(null,t,e,n),e.then(t,t))}function Hm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ir(-1,1),e.tag=2,xi(n,e,1))),n.lanes|=1),t)}var cE=Vr.ReactCurrentOwner,cn=!1;function en(t,e,n,r){e.child=t===null?s_(e,null,n,r):Mo(e,t.child,n,r)}function Gm(t,e,n,r,i){n=n.render;var s=e.ref;return ro(e,i),r=ip(t,e,n,r,s,i),n=sp(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(mt&&n&&Xh(e),e.flags|=1,en(t,e,r,i),e.child)}function Wm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D_(t,e,s,r,i)):(t=lc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(o,r)&&t.ref===e.ref)return Br(t,e,i)}return e.flags|=1,t=Mi(s,r),t.ref=e.ref,t.return=e,e.child=t}function D_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(wa(s,r)&&t.ref===e.ref)if(cn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Br(t,e,i)}return yf(t,e,n,r,i)}function N_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Qs,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(Qs,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ct(Qs,Sn),Sn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ct(Qs,Sn),Sn|=r;return en(t,e,i,n),e.child}function L_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yf(t,e,n,r,i){var s=dn(n)?os:Kt.current;return s=yo(e,s),ro(e,i),n=ip(t,e,n,r,s,i),r=sp(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(mt&&r&&Xh(e),e.flags|=1,en(t,e,n,i),e.child)}function jm(t,e,n,r,i){if(dn(n)){var s=!0;Cc(e)}else s=!1;if(ro(e,i),e.stateNode===null)sc(t,e),C_(e,n,r),_f(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=dn(n)?os:Kt.current,c=yo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Bm(e,o,r,c),ii=!1;var h=e.memoizedState;o.state=h,Lc(e,r,o,i),l=e.memoizedState,a!==r||h!==l||un.current||ii?(typeof d=="function"&&(vf(e,n,d,r),l=e.memoizedState),(a=ii||Om(e,n,a,r,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,a_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Yn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=dn(n)?os:Kt.current,l=yo(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Bm(e,o,r,l),ii=!1,h=e.memoizedState,o.state=h,Lc(e,r,o,i);var v=e.memoizedState;a!==f||h!==v||un.current||ii?(typeof m=="function"&&(vf(e,n,m,r),v=e.memoizedState),(c=ii||Om(e,n,c,r,h,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Sf(t,e,n,r,s,i)}function Sf(t,e,n,r,i,s){L_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Pm(e,n,!1),Br(t,e,s);r=e.stateNode,cE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Mo(e,t.child,null,s),e.child=Mo(e,null,a,s)):en(t,e,a,s),e.memoizedState=r.state,i&&Pm(e,n,!0),e.child}function I_(t){var e=t.stateNode;e.pendingContext?Rm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rm(t,e.context,!1),ep(t,e.containerInfo)}function Xm(t,e,n,r,i){return So(),qh(i),e.flags|=256,en(t,e,n,r),e.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function Ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function U_(t,e,n){var r=e.pendingProps,i=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ct(vt,i&1),t===null)return mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ou(o,r,0,null),t=is(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ef(n),e.memoizedState=Mf,t):lp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uE(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Mi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Mi(a,s):(s=is(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ef(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mf,r}return s=t.child,t=s.sibling,r=Mi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function lp(t,e){return e=ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vl(t,e,n,r){return r!==null&&qh(r),Mo(e,t.child,null,n),t=lp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Xu(Error(re(422))),vl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ou({mode:"visible",children:r.children},i,0,null),s=is(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Mo(e,t.child,null,o),e.child.memoizedState=Ef(o),e.memoizedState=Mf,s);if(!(e.mode&1))return vl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(re(419)),r=Xu(s,r,void 0),vl(t,e,o,r)}if(a=(o&t.childLanes)!==0,cn||a){if(r=kt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Or(t,i),tr(r,t,i,-1))}return pp(),r=Xu(Error(re(421))),vl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=EE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mn=_i(i.nextSibling),En=e,mt=!0,Qn=null,t!==null&&(Ln[In++]=Rr,Ln[In++]=Pr,Ln[In++]=as,Rr=t.id,Pr=t.overflow,as=e),e=lp(e,r.children),e.flags|=4096,e)}function Ym(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),gf(t.return,e,n)}function Yu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function F_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(en(t,e,r.children,n),r=vt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ym(t,n,e);else if(t.tag===19)Ym(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ct(vt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ic(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ic(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yu(e,!0,n,null,s);break;case"together":Yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Mi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dE(t,e,n){switch(e.tag){case 3:I_(e),So();break;case 5:l_(e);break;case 1:dn(e.type)&&Cc(e);break;case 4:ep(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ct(Dc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ct(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?U_(t,e,n):(ct(vt,vt.current&1),t=Br(t,e,n),t!==null?t.sibling:null);ct(vt,vt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return F_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ct(vt,vt.current),r)break;return null;case 22:case 23:return e.lanes=0,N_(t,e,n)}return Br(t,e,n)}var k_,wf,O_,B_;k_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wf=function(){};O_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ki(gr.current);var s=null;switch(n){case"input":i=jd(t,i),r=jd(t,r),s=[];break;case"select":i=xt({},i,{value:void 0}),r=xt({},r,{value:void 0}),s=[];break;case"textarea":i=qd(t,i),r=qd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bc)}Kd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(va.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(va.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};B_=function(t,e,n,r){n!==r&&(e.flags|=4)};function jo(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fE(t,e,n){var r=e.pendingProps;switch(Yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return dn(e.type)&&Ac(),jt(e),null;case 3:return r=e.stateNode,Eo(),ht(un),ht(Kt),np(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(Nf(Qn),Qn=null))),wf(t,e),jt(e),null;case 5:tp(e);var i=Ki(Ra.current);if(n=e.type,t!==null&&e.stateNode!=null)O_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(re(166));return jt(e),null}if(t=Ki(gr.current),ml(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fr]=e,r[Aa]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",r),ft("close",r);break;case"iframe":case"object":case"embed":ft("load",r);break;case"video":case"audio":for(i=0;i<sa.length;i++)ft(sa[i],r);break;case"source":ft("error",r);break;case"img":case"image":case"link":ft("error",r),ft("load",r);break;case"details":ft("toggle",r);break;case"input":nm(r,s),ft("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ft("invalid",r);break;case"textarea":im(r,s),ft("invalid",r)}Kd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&pl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&pl(r.textContent,a,t),i=["children",""+a]):va.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",r)}switch(n){case"input":ol(r),rm(r,s,!0);break;case"textarea":ol(r),sm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=h0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fr]=e,t[Aa]=r,k_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qd(n,r),n){case"dialog":ft("cancel",t),ft("close",t),i=r;break;case"iframe":case"object":case"embed":ft("load",t),i=r;break;case"video":case"audio":for(i=0;i<sa.length;i++)ft(sa[i],t);i=r;break;case"source":ft("error",t),i=r;break;case"img":case"image":case"link":ft("error",t),ft("load",t),i=r;break;case"details":ft("toggle",t),i=r;break;case"input":nm(t,r),i=jd(t,r),ft("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xt({},r,{value:void 0}),ft("invalid",t);break;case"textarea":im(t,r),i=qd(t,r),ft("invalid",t);break;default:i=r}Kd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?g0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&p0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_a(t,l):typeof l=="number"&&_a(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(va.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&Nh(t,s,l,o))}switch(n){case"input":ol(t),rm(t,r,!1);break;case"textarea":ol(t),sm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Js(t,!!r.multiple,s,!1):r.defaultValue!=null&&Js(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)B_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(re(166));if(n=Ki(Ra.current),Ki(gr.current),ml(e)){if(r=e.stateNode,n=e.memoizedProps,r[fr]=e,(s=r.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:pl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fr]=e,e.stateNode=r}return jt(e),null;case 13:if(ht(vt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&Mn!==null&&e.mode&1&&!(e.flags&128))r_(),So(),e.flags|=98560,s=!1;else if(s=ml(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[fr]=e}else So(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Qn!==null&&(Nf(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Nt===0&&(Nt=3):pp())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Eo(),wf(t,e),t===null&&Ta(e.stateNode.containerInfo),jt(e),null;case 10:return Qh(e.type._context),jt(e),null;case 17:return dn(e.type)&&Ac(),jt(e),null;case 19:if(ht(vt),s=e.memoizedState,s===null)return jt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)jo(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ic(t),o!==null){for(e.flags|=128,jo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>To&&(e.flags|=128,r=!0,jo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ic(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return jt(e),null}else 2*Tt()-s.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,r=!0,jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=vt.current,ct(vt,r?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return hp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Sn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function hE(t,e){switch(Yh(e),e.tag){case 1:return dn(e.type)&&Ac(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Eo(),ht(un),ht(Kt),np(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tp(e),null;case 13:if(ht(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));So()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(vt),null;case 4:return Eo(),null;case 10:return Qh(e.type._context),null;case 22:case 23:return hp(),null;case 24:return null;default:return null}}var _l=!1,$t=!1,pE=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Et(t,e,r)}else n.current=null}function Tf(t,e,n){try{n()}catch(r){Et(t,e,r)}}var qm=!1;function mE(t,e){if(lf=Ec,t=W0(),jh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cf={focusedElem:t,selectionRange:n},Ec=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,p=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?g:Yn(e.type,g),p);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){Et(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return v=qm,qm=!1,v}function ha(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Tf(e,n,s)}i=i.next}while(i!==r)}}function iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function z_(t){var e=t.alternate;e!==null&&(t.alternate=null,z_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fr],delete e[Aa],delete e[ff],delete e[QM],delete e[ZM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function H_(t){return t.tag===5||t.tag===3||t.tag===4}function $m(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bc));else if(r!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}function Cf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}var Bt=null,Kn=!1;function jr(t,e,n){for(n=n.child;n!==null;)V_(t,e,n),n=n.sibling}function V_(t,e,n){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(Kc,n)}catch{}switch(n.tag){case 5:$t||Ks(n,e);case 6:var r=Bt,i=Kn;Bt=null,jr(t,e,n),Bt=r,Kn=i,Bt!==null&&(Kn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Kn?(t=Bt,n=n.stateNode,t.nodeType===8?zu(t.parentNode,n):t.nodeType===1&&zu(t,n),Ma(t)):zu(Bt,n.stateNode));break;case 4:r=Bt,i=Kn,Bt=n.stateNode.containerInfo,Kn=!0,jr(t,e,n),Bt=r,Kn=i;break;case 0:case 11:case 14:case 15:if(!$t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tf(n,e,o),i=i.next}while(i!==r)}jr(t,e,n);break;case 1:if(!$t&&(Ks(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Et(n,e,a)}jr(t,e,n);break;case 21:jr(t,e,n);break;case 22:n.mode&1?($t=(r=$t)||n.memoizedState!==null,jr(t,e,n),$t=r):jr(t,e,n);break;default:jr(t,e,n)}}function Km(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pE),e.forEach(function(r){var i=wE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Kn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Kn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(Bt===null)throw Error(re(160));V_(s,o,i),Bt=null,Kn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Et(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)G_(e,t),e=e.sibling}function G_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),or(t),r&4){try{ha(3,t,t.return),iu(3,t)}catch(g){Et(t,t.return,g)}try{ha(5,t,t.return)}catch(g){Et(t,t.return,g)}}break;case 1:Gn(e,t),or(t),r&512&&n!==null&&Ks(n,n.return);break;case 5:if(Gn(e,t),or(t),r&512&&n!==null&&Ks(n,n.return),t.flags&32){var i=t.stateNode;try{_a(i,"")}catch(g){Et(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&d0(i,s),Qd(a,o);var c=Qd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?g0(i,f):d==="dangerouslySetInnerHTML"?p0(i,f):d==="children"?_a(i,f):Nh(i,d,f,c)}switch(a){case"input":Xd(i,s);break;case"textarea":f0(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Js(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Js(i,!!s.multiple,s.defaultValue,!0):Js(i,!!s.multiple,s.multiple?[]:"",!1))}i[Aa]=s}catch(g){Et(t,t.return,g)}}break;case 6:if(Gn(e,t),or(t),r&4){if(t.stateNode===null)throw Error(re(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(g){Et(t,t.return,g)}}break;case 3:if(Gn(e,t),or(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(g){Et(t,t.return,g)}break;case 4:Gn(e,t),or(t);break;case 13:Gn(e,t),or(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dp=Tt())),r&4&&Km(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||d,Gn(e,t),$t=c):Gn(e,t),or(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ge=t,d=t.child;d!==null;){for(f=ge=d;ge!==null;){switch(h=ge,m=h.child,h.tag){case 0:case 11:case 14:case 15:ha(4,h,h.return);break;case 1:Ks(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(g){Et(r,n,g)}}break;case 5:Ks(h,h.return);break;case 22:if(h.memoizedState!==null){Zm(f);continue}}m!==null?(m.return=h,ge=m):Zm(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=m0("display",o))}catch(g){Et(t,t.return,g)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Et(t,t.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gn(e,t),or(t),r&4&&Km(t);break;case 21:break;default:Gn(e,t),or(t)}}function or(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(H_(n)){var r=n;break e}n=n.return}throw Error(re(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_a(i,""),r.flags&=-33);var s=$m(t);Cf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=$m(t);Af(t,a,o);break;default:throw Error(re(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gE(t,e,n){ge=t,W_(t)}function W_(t,e,n){for(var r=(t.mode&1)!==0;ge!==null;){var i=ge,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_l;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||$t;a=_l;var c=$t;if(_l=o,($t=l)&&!c)for(ge=i;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?Jm(i):l!==null?(l.return=o,ge=l):Jm(i);for(;s!==null;)ge=s,W_(s),s=s.sibling;ge=i,_l=a,$t=c}Qm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ge=s):Qm(t)}}function Qm(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||iu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Um(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Um(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ma(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}$t||e.flags&512&&bf(e)}catch(h){Et(e,e.return,h)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Zm(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Jm(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{iu(4,e)}catch(l){Et(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Et(e,i,l)}}var s=e.return;try{bf(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{bf(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var vE=Math.ceil,kc=Vr.ReactCurrentDispatcher,cp=Vr.ReactCurrentOwner,kn=Vr.ReactCurrentBatchConfig,qe=0,kt=null,Pt=null,zt=0,Sn=0,Qs=Di(0),Nt=0,La=null,cs=0,su=0,up=0,pa=null,ln=null,dp=0,To=1/0,br=null,Oc=!1,Rf=null,yi=null,xl=!1,pi=null,Bc=0,ma=0,Pf=null,oc=-1,ac=0;function nn(){return qe&6?Tt():oc!==-1?oc:oc=Tt()}function Si(t){return t.mode&1?qe&2&&zt!==0?zt&-zt:eE.transition!==null?(ac===0&&(ac=C0()),ac):(t=st,t!==0||(t=window.event,t=t===void 0?16:U0(t.type)),t):1}function tr(t,e,n,r){if(50<ma)throw ma=0,Pf=null,Error(re(185));Wa(t,n,r),(!(qe&2)||t!==kt)&&(t===kt&&(!(qe&2)&&(su|=n),Nt===4&&oi(t,zt)),fn(t,r),n===1&&qe===0&&!(e.mode&1)&&(To=Tt()+500,tu&&Ni()))}function fn(t,e){var n=t.callbackNode;eM(t,e);var r=Mc(t,t===kt?zt:0);if(r===0)n!==null&&lm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lm(n),e===1)t.tag===0?JM(eg.bind(null,t)):e_(eg.bind(null,t)),$M(function(){!(qe&6)&&Ni()}),n=null;else{switch(R0(r)){case 1:n=kh;break;case 4:n=b0;break;case 16:n=Sc;break;case 536870912:n=A0;break;default:n=Sc}n=Z_(n,j_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j_(t,e){if(oc=-1,ac=0,qe&6)throw Error(re(327));var n=t.callbackNode;if(io()&&t.callbackNode!==n)return null;var r=Mc(t,t===kt?zt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=zc(t,r);else{e=r;var i=qe;qe|=2;var s=Y_();(kt!==t||zt!==e)&&(br=null,To=Tt()+500,rs(t,e));do try{yE();break}catch(a){X_(t,a)}while(!0);Kh(),kc.current=s,qe=i,Pt!==null?e=0:(kt=null,zt=0,e=Nt)}if(e!==0){if(e===2&&(i=nf(t),i!==0&&(r=i,e=Df(t,i))),e===1)throw n=La,rs(t,0),oi(t,r),fn(t,Tt()),n;if(e===6)oi(t,r);else{if(i=t.current.alternate,!(r&30)&&!_E(i)&&(e=zc(t,r),e===2&&(s=nf(t),s!==0&&(r=s,e=Df(t,s))),e===1))throw n=La,rs(t,0),oi(t,r),fn(t,Tt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(re(345));case 2:Vi(t,ln,br);break;case 3:if(oi(t,r),(r&130023424)===r&&(e=dp+500-Tt(),10<e)){if(Mc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=df(Vi.bind(null,t,ln,br),e);break}Vi(t,ln,br);break;case 4:if(oi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-er(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Tt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vE(r/1960))-r,10<r){t.timeoutHandle=df(Vi.bind(null,t,ln,br),r);break}Vi(t,ln,br);break;case 5:Vi(t,ln,br);break;default:throw Error(re(329))}}}return fn(t,Tt()),t.callbackNode===n?j_.bind(null,t):null}function Df(t,e){var n=pa;return t.current.memoizedState.isDehydrated&&(rs(t,e).flags|=256),t=zc(t,e),t!==2&&(e=ln,ln=n,e!==null&&Nf(e)),t}function Nf(t){ln===null?ln=t:ln.push.apply(ln,t)}function _E(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!rr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function oi(t,e){for(e&=~up,e&=~su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-er(e),r=1<<n;t[n]=-1,e&=~r}}function eg(t){if(qe&6)throw Error(re(327));io();var e=Mc(t,0);if(!(e&1))return fn(t,Tt()),null;var n=zc(t,e);if(t.tag!==0&&n===2){var r=nf(t);r!==0&&(e=r,n=Df(t,r))}if(n===1)throw n=La,rs(t,0),oi(t,e),fn(t,Tt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vi(t,ln,br),fn(t,Tt()),null}function fp(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(To=Tt()+500,tu&&Ni())}}function us(t){pi!==null&&pi.tag===0&&!(qe&6)&&io();var e=qe;qe|=1;var n=kn.transition,r=st;try{if(kn.transition=null,st=1,t)return t()}finally{st=r,kn.transition=n,qe=e,!(qe&6)&&Ni()}}function hp(){Sn=Qs.current,ht(Qs)}function rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qM(n)),Pt!==null)for(n=Pt.return;n!==null;){var r=n;switch(Yh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ac();break;case 3:Eo(),ht(un),ht(Kt),np();break;case 5:tp(r);break;case 4:Eo();break;case 13:ht(vt);break;case 19:ht(vt);break;case 10:Qh(r.type._context);break;case 22:case 23:hp()}n=n.return}if(kt=t,Pt=t=Mi(t.current,null),zt=Sn=e,Nt=0,La=null,up=su=cs=0,ln=pa=null,$i!==null){for(e=0;e<$i.length;e++)if(n=$i[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$i=null}return t}function X_(t,e){do{var n=Pt;try{if(Kh(),rc.current=Fc,Uc){for(var r=_t.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Uc=!1}if(ls=0,Ft=Dt=_t=null,fa=!1,Pa=0,cp.current=null,n===null||n.return===null){Nt=1,La=e,Pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Hm(o);if(m!==null){m.flags&=-257,Vm(m,o,a,s,e),m.mode&1&&zm(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var g=new Set;g.add(l),e.updateQueue=g}else v.add(l);break e}else{if(!(e&1)){zm(s,c,e),pp();break e}l=Error(re(426))}}else if(mt&&a.mode&1){var p=Hm(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Vm(p,o,a,s,e),qh(wo(l,a));break e}}s=l=wo(l,a),Nt!==4&&(Nt=2),pa===null?pa=[s]:pa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=R_(s,l,e);Im(s,u);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(yi===null||!yi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=P_(s,a,e);Im(s,y);break e}}s=s.return}while(s!==null)}$_(n)}catch(A){e=A,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function Y_(){var t=kc.current;return kc.current=Fc,t===null?Fc:t}function pp(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),kt===null||!(cs&268435455)&&!(su&268435455)||oi(kt,zt)}function zc(t,e){var n=qe;qe|=2;var r=Y_();(kt!==t||zt!==e)&&(br=null,rs(t,e));do try{xE();break}catch(i){X_(t,i)}while(!0);if(Kh(),qe=n,kc.current=r,Pt!==null)throw Error(re(261));return kt=null,zt=0,Nt}function xE(){for(;Pt!==null;)q_(Pt)}function yE(){for(;Pt!==null&&!jS();)q_(Pt)}function q_(t){var e=Q_(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?$_(t):Pt=e,cp.current=null}function $_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hE(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Pt=null;return}}else if(n=fE(n,e,Sn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Nt===0&&(Nt=5)}function Vi(t,e,n){var r=st,i=kn.transition;try{kn.transition=null,st=1,SE(t,e,n,r)}finally{kn.transition=i,st=r}return null}function SE(t,e,n,r){do io();while(pi!==null);if(qe&6)throw Error(re(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(tM(t,s),t===kt&&(Pt=kt=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xl||(xl=!0,Z_(Sc,function(){return io(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=st;st=1;var a=qe;qe|=4,cp.current=null,mE(t,n),G_(n,t),HM(cf),Ec=!!lf,cf=lf=null,t.current=n,gE(n),XS(),qe=a,st=o,kn.transition=s}else t.current=n;if(xl&&(xl=!1,pi=t,Bc=i),s=t.pendingLanes,s===0&&(yi=null),$S(n.stateNode),fn(t,Tt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oc)throw Oc=!1,t=Rf,Rf=null,t;return Bc&1&&t.tag!==0&&io(),s=t.pendingLanes,s&1?t===Pf?ma++:(ma=0,Pf=t):ma=0,Ni(),null}function io(){if(pi!==null){var t=R0(Bc),e=kn.transition,n=st;try{if(kn.transition=null,st=16>t?16:t,pi===null)var r=!1;else{if(t=pi,pi=null,Bc=0,qe&6)throw Error(re(331));var i=qe;for(qe|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var d=ge;switch(d.tag){case 0:case 11:case 15:ha(8,d,s)}var f=d.child;if(f!==null)f.return=d,ge=f;else for(;ge!==null;){d=ge;var h=d.sibling,m=d.return;if(z_(d),d===c){ge=null;break}if(h!==null){h.return=m,ge=h;break}ge=m}}}var v=s.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var p=g.sibling;g.sibling=null,g=p}while(g!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ha(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ge=u;break e}ge=s.return}}var _=t.current;for(ge=_;ge!==null;){o=ge;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ge=x;else e:for(o=_;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:iu(9,a)}}catch(A){Et(a,a.return,A)}if(a===o){ge=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ge=y;break e}ge=a.return}}if(qe=i,Ni(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(Kc,t)}catch{}r=!0}return r}finally{st=n,kn.transition=e}}return!1}function tg(t,e,n){e=wo(n,e),e=R_(t,e,1),t=xi(t,e,1),e=nn(),t!==null&&(Wa(t,1,e),fn(t,e))}function Et(t,e,n){if(t.tag===3)tg(t,t,n);else for(;e!==null;){if(e.tag===3){tg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yi===null||!yi.has(r))){t=wo(n,t),t=P_(e,t,1),e=xi(e,t,1),t=nn(),e!==null&&(Wa(e,1,t),fn(e,t));break}}e=e.return}}function ME(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(zt&n)===n&&(Nt===4||Nt===3&&(zt&130023424)===zt&&500>Tt()-dp?rs(t,0):up|=n),fn(t,e)}function K_(t,e){e===0&&(t.mode&1?(e=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):e=1);var n=nn();t=Or(t,e),t!==null&&(Wa(t,e,n),fn(t,n))}function EE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),K_(t,n)}function wE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(re(314))}r!==null&&r.delete(e),K_(t,n)}var Q_;Q_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,dE(t,e,n);cn=!!(t.flags&131072)}else cn=!1,mt&&e.flags&1048576&&t_(e,Pc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;sc(t,e),t=e.pendingProps;var i=yo(e,Kt.current);ro(e,n),i=ip(null,e,r,t,i,n);var s=sp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(r)?(s=!0,Cc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jh(e),i.updater=ru,e.stateNode=i,i._reactInternals=e,_f(e,r,t,n),e=Sf(null,e,r,!0,s,n)):(e.tag=0,mt&&s&&Xh(e),en(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(sc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=bE(r),t=Yn(r,t),i){case 0:e=yf(null,e,r,t,n);break e;case 1:e=jm(null,e,r,t,n);break e;case 11:e=Gm(null,e,r,t,n);break e;case 14:e=Wm(null,e,r,Yn(r.type,t),n);break e}throw Error(re(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yn(r,i),yf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yn(r,i),jm(t,e,r,i,n);case 3:e:{if(I_(e),t===null)throw Error(re(387));r=e.pendingProps,s=e.memoizedState,i=s.element,a_(t,e),Lc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=wo(Error(re(423)),e),e=Xm(t,e,r,n,i);break e}else if(r!==i){i=wo(Error(re(424)),e),e=Xm(t,e,r,n,i);break e}else for(Mn=_i(e.stateNode.containerInfo.firstChild),En=e,mt=!0,Qn=null,n=s_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(So(),r===i){e=Br(t,e,n);break e}en(t,e,r,n)}e=e.child}return e;case 5:return l_(e),t===null&&mf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,uf(r,i)?o=null:s!==null&&uf(r,s)&&(e.flags|=32),L_(t,e),en(t,e,o,n),e.child;case 6:return t===null&&mf(e),null;case 13:return U_(t,e,n);case 4:return ep(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mo(e,null,r,n):en(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yn(r,i),Gm(t,e,r,i,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ct(Dc,r._currentValue),r._currentValue=o,s!==null)if(rr(s.value,o)){if(s.children===i.children&&!un.current){e=Br(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ir(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ro(e,n),i=Bn(i),r=r(i),e.flags|=1,en(t,e,r,n),e.child;case 14:return r=e.type,i=Yn(r,e.pendingProps),i=Yn(r.type,i),Wm(t,e,r,i,n);case 15:return D_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yn(r,i),sc(t,e),e.tag=1,dn(r)?(t=!0,Cc(e)):t=!1,ro(e,n),C_(e,r,i),_f(e,r,i,n),Sf(null,e,r,!0,t,n);case 19:return F_(t,e,n);case 22:return N_(t,e,n)}throw Error(re(156,e.tag))};function Z_(t,e){return T0(t,e)}function TE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,r){return new TE(t,e,n,r)}function mp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bE(t){if(typeof t=="function")return mp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ih)return 11;if(t===Uh)return 14}return 2}function Mi(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return is(n.children,i,s,e);case Lh:o=8,i|=8;break;case Hd:return t=Fn(12,n,e,i|2),t.elementType=Hd,t.lanes=s,t;case Vd:return t=Fn(13,n,e,i),t.elementType=Vd,t.lanes=s,t;case Gd:return t=Fn(19,n,e,i),t.elementType=Gd,t.lanes=s,t;case l0:return ou(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case o0:o=10;break e;case a0:o=9;break e;case Ih:o=11;break e;case Uh:o=14;break e;case ri:o=16,r=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Fn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function is(t,e,n,r){return t=Fn(7,t,r,e),t.lanes=n,t}function ou(t,e,n,r){return t=Fn(22,t,r,e),t.elementType=l0,t.lanes=n,t.stateNode={isHidden:!1},t}function qu(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function $u(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ru(0),this.expirationTimes=Ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ru(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gp(t,e,n,r,i,s,o,a,l){return t=new AE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jh(s),t}function CE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function J_(t){if(!t)return Ai;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(dn(n))return J0(t,n,e)}return e}function ex(t,e,n,r,i,s,o,a,l){return t=gp(n,r,!0,t,i,s,o,a,l),t.context=J_(null),n=t.current,r=nn(),i=Si(n),s=Ir(r,i),s.callback=e??null,xi(n,s,i),t.current.lanes=i,Wa(t,i,r),fn(t,r),t}function au(t,e,n,r){var i=e.current,s=nn(),o=Si(i);return n=J_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ir(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xi(i,e,o),t!==null&&(tr(t,i,o,s),nc(t,i,o)),o}function Hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ng(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vp(t,e){ng(t,e),(t=t.alternate)&&ng(t,e)}function RE(){return null}var tx=typeof reportError=="function"?reportError:function(t){console.error(t)};function _p(t){this._internalRoot=t}lu.prototype.render=_p.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));au(t,e,null,null)};lu.prototype.unmount=_p.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;us(function(){au(null,t,null,null)}),e[kr]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=N0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<si.length&&e!==0&&e<si[n].priority;n++);si.splice(n,0,t),n===0&&I0(t)}};function xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rg(){}function PE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Hc(o);s.call(c)}}var o=ex(e,r,t,0,null,!1,!1,"",rg);return t._reactRootContainer=o,t[kr]=o.current,Ta(t.nodeType===8?t.parentNode:t),us(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Hc(l);a.call(c)}}var l=gp(t,0,!1,null,null,!1,!1,"",rg);return t._reactRootContainer=l,t[kr]=l.current,Ta(t.nodeType===8?t.parentNode:t),us(function(){au(e,l,n,r)}),l}function uu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Hc(o);a.call(l)}}au(e,o,t,i)}else o=PE(n,e,t,i,r);return Hc(o)}P0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(Oh(e,n|1),fn(e,Tt()),!(qe&6)&&(To=Tt()+500,Ni()))}break;case 13:us(function(){var r=Or(t,1);if(r!==null){var i=nn();tr(r,t,1,i)}}),vp(t,1)}};Bh=function(t){if(t.tag===13){var e=Or(t,134217728);if(e!==null){var n=nn();tr(e,t,134217728,n)}vp(t,134217728)}};D0=function(t){if(t.tag===13){var e=Si(t),n=Or(t,e);if(n!==null){var r=nn();tr(n,t,e,r)}vp(t,e)}};N0=function(){return st};L0=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Jd=function(t,e,n){switch(e){case"input":if(Xd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=eu(r);if(!i)throw Error(re(90));u0(r),Xd(r,i)}}}break;case"textarea":f0(t,n);break;case"select":e=n.value,e!=null&&Js(t,!!n.multiple,e,!1)}};x0=fp;y0=us;var DE={usingClientEntryPoint:!1,Events:[Xa,js,eu,v0,_0,fp]},Xo={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NE={bundleType:Xo.bundleType,version:Xo.version,rendererPackageName:Xo.rendererPackageName,rendererConfig:Xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=E0(t),t===null?null:t.stateNode},findFiberByHostInstance:Xo.findFiberByHostInstance||RE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{Kc=yl.inject(NE),mr=yl}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DE;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xp(e))throw Error(re(200));return CE(t,e,null,n)};Tn.createRoot=function(t,e){if(!xp(t))throw Error(re(299));var n=!1,r="",i=tx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gp(t,1,!1,null,null,n,!1,r,i),t[kr]=e.current,Ta(t.nodeType===8?t.parentNode:t),new _p(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=E0(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return us(t)};Tn.hydrate=function(t,e,n){if(!cu(e))throw Error(re(200));return uu(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!xp(t))throw Error(re(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ex(e,null,t,1,n??null,i,!1,s,o),t[kr]=e.current,Ta(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new lu(e)};Tn.render=function(t,e,n){if(!cu(e))throw Error(re(200));return uu(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!cu(t))throw Error(re(40));return t._reactRootContainer?(us(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[kr]=null})}),!0):!1};Tn.unstable_batchedUpdates=fp;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!cu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return uu(t,e,n,!1,r)};Tn.version="18.3.1-next-f1338f8080-20240426";function nx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nx)}catch(t){console.error(t)}}nx(),n0.exports=Tn;var yp=n0.exports;const LE=Vv(yp);var ig=yp;Bd.createRoot=ig.createRoot,Bd.hydrateRoot=ig.hydrateRoot;function IE(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,i,s,o=[],a="",l=t.split("/");for(l[0]||l.shift();i=l.shift();)n=i[0],n==="*"?(o.push(n),a+=i[1]==="?"?"(?:/(.*))?":"/(.*)"):n===":"?(r=i.indexOf("?",1),s=i.indexOf(".",1),o.push(i.substring(1,~r?r:~s?s:i.length)),a+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(a+=(~r?"?":"")+"\\"+i.substring(s))):a+="/"+i;return{keys:o,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}var rx={exports:{}},ix={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=D;function UE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var FE=typeof Object.is=="function"?Object.is:UE,kE=bo.useState,OE=bo.useEffect,BE=bo.useLayoutEffect,zE=bo.useDebugValue;function HE(t,e){var n=e(),r=kE({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return BE(function(){i.value=n,i.getSnapshot=e,Ku(i)&&s({inst:i})},[t,n,e]),OE(function(){return Ku(i)&&s({inst:i}),t(function(){Ku(i)&&s({inst:i})})},[t]),zE(n),n}function Ku(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!FE(t,n)}catch{return!0}}function VE(t,e){return e()}var GE=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?VE:HE;ix.useSyncExternalStore=bo.useSyncExternalStore!==void 0?bo.useSyncExternalStore:GE;rx.exports=ix;var WE=rx.exports;const jE=e0.useInsertionEffect,XE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",YE=XE?D.useLayoutEffect:D.useEffect,qE=jE||YE,sx=t=>{const e=D.useRef([t,(...n)=>e[0](...n)]).current;return qE(()=>{e[0]=t}),e[1]},$E="popstate",Sp="pushState",Mp="replaceState",KE="hashchange",sg=[$E,Sp,Mp,KE],QE=t=>{for(const e of sg)addEventListener(e,t);return()=>{for(const e of sg)removeEventListener(e,t)}},ox=(t,e)=>WE.useSyncExternalStore(QE,t,e),ZE=()=>location.search,JE=({ssrSearch:t=""}={})=>ox(ZE,()=>t),og=()=>location.pathname,ew=({ssrPath:t}={})=>ox(og,t?()=>t:og),tw=(t,{replace:e=!1,state:n=null}={})=>history[e?Mp:Sp](n,"",t),nw=(t={})=>[ew(t),tw],ag=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[ag]>"u"){for(const t of[Sp,Mp]){const e=history[t];history[t]=function(){const n=e.apply(this,arguments),r=new Event(t);return r.arguments=arguments,dispatchEvent(r),n}}Object.defineProperty(window,ag,{value:!0})}const rw=(t,e)=>e.toLowerCase().indexOf(t.toLowerCase())?"~"+e:e.slice(t.length)||"/",ax=(t="")=>t==="/"?"":t,iw=(t,e)=>t[0]==="~"?t.slice(1):ax(e)+t,sw=(t="",e)=>rw(lg(ax(t)),lg(e)),lg=t=>{try{return decodeURI(t)}catch{return t}},lx={hook:nw,searchHook:JE,parser:IE,base:"",ssrPath:void 0,ssrSearch:void 0,hrefs:t=>t},cx=D.createContext(lx),du=()=>D.useContext(cx),ux={},dx=D.createContext(ux),ow=()=>D.useContext(dx),Ep=t=>{const[e,n]=t.hook(t);return[sw(t.base,e),sx((r,i)=>n(iw(r,t.base),i))]},fx=(t,e,n,r)=>{const{pattern:i,keys:s}=e instanceof RegExp?{keys:!1,pattern:e}:t(e||"*",r),o=i.exec(n)||[],[a,...l]=o;return a!==void 0?[!0,(()=>{const c=s!==!1?Object.fromEntries(s.map((f,h)=>[f,l[h]])):o.groups;let d={...l};return c&&Object.assign(d,c),d})(),...r?[a]:[]]:[!1,null]},aw=({children:t,...e})=>{var d,f;const n=du(),r=e.hook?lx:n;let i=r;const[s,o]=((d=e.ssrPath)==null?void 0:d.split("?"))??[];o&&(e.ssrSearch=o,e.ssrPath=s),e.hrefs=e.hrefs??((f=e.hook)==null?void 0:f.hrefs);let a=D.useRef({}),l=a.current,c=l;for(let h in r){const m=h==="base"?r[h]+(e[h]||""):e[h]||r[h];l===c&&m!==c[h]&&(a.current=c={...c}),c[h]=m,m!==r[h]&&(i=c)}return D.createElement(cx.Provider,{value:i,children:t})},cg=({children:t,component:e},n)=>e?D.createElement(e,{params:n}):typeof t=="function"?t(n):t,lw=t=>{let e=D.useRef(ux),n=e.current;for(const r in t)t[r]!==n[r]&&(n=t);return Object.keys(t).length===0&&(n=t),e.current=n},Qu=({path:t,nest:e,match:n,...r})=>{const i=du(),[s]=Ep(i),[o,a,l]=n??fx(i.parser,t,s,e),c=lw({...ow(),...a});if(!o)return null;const d=l?D.createElement(aw,{base:l},cg(r,c)):cg(r,c);return D.createElement(dx.Provider,{value:c,children:d})},xn=D.forwardRef((t,e)=>{const n=du(),[r,i]=Ep(n),{to:s="",href:o=s,onClick:a,asChild:l,children:c,className:d,replace:f,state:h,...m}=t,v=sx(p=>{p.ctrlKey||p.metaKey||p.altKey||p.shiftKey||p.button!==0||(a==null||a(p),p.defaultPrevented||(p.preventDefault(),i(o,t)))}),g=n.hrefs(o[0]==="~"?o.slice(1):n.base+o,n);return l&&D.isValidElement(c)?D.cloneElement(c,{onClick:v,href:g}):D.createElement("a",{...m,onClick:v,href:g,className:d!=null&&d.call?d(r===o):d,children:c,ref:e})}),hx=t=>Array.isArray(t)?t.flatMap(e=>hx(e&&e.type===D.Fragment?e.props.children:e)):[t],cw=({children:t,location:e})=>{const n=du(),[r]=Ep(n);for(const i of hx(t)){let s=0;if(D.isValidElement(i)&&(s=fx(n.parser,i.props.path,e||r,i.props.nest))[0])return D.cloneElement(i,{match:s})}return null};function Ei(t,e,{checkForDefaultPrevented:n=!0}={}){return function(i){if(t==null||t(i),n===!1||!i.defaultPrevented)return e==null?void 0:e(i)}}function uw(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function px(...t){return e=>t.forEach(n=>uw(n,e))}function _s(...t){return D.useCallback(px(...t),t)}function dw(t,e){const n=D.createContext(e),r=s=>{const{children:o,...a}=s,l=D.useMemo(()=>a,Object.values(a));return E.jsx(n.Provider,{value:l,children:o})};r.displayName=t+"Provider";function i(s){const o=D.useContext(n);if(o)return o;if(e!==void 0)return e;throw new Error(`\`${s}\` must be used within \`${t}\``)}return[r,i]}function fw(t,e=[]){let n=[];function r(s,o){const a=D.createContext(o),l=n.length;n=[...n,o];const c=f=>{var u;const{scope:h,children:m,...v}=f,g=((u=h==null?void 0:h[t])==null?void 0:u[l])||a,p=D.useMemo(()=>v,Object.values(v));return E.jsx(g.Provider,{value:p,children:m})};c.displayName=s+"Provider";function d(f,h){var g;const m=((g=h==null?void 0:h[t])==null?void 0:g[l])||a,v=D.useContext(m);if(v)return v;if(o!==void 0)return o;throw new Error(`\`${f}\` must be used within \`${s}\``)}return[c,d]}const i=()=>{const s=n.map(o=>D.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return D.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return i.scopeName=t,[r,hw(i,...e)]}function hw(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const r=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(s){const o=r.reduce((a,{useScope:l,scopeName:c})=>{const f=l(s)[`__scope${c}`];return{...a,...f}},{});return D.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}var Vc=globalThis!=null&&globalThis.document?D.useLayoutEffect:()=>{},pw=e0.useId||(()=>{}),mw=0;function Zu(t){const[e,n]=D.useState(pw());return Vc(()=>{t||n(r=>r??String(mw++))},[t]),t||(e?`radix-${e}`:"")}function ds(t){const e=D.useRef(t);return D.useEffect(()=>{e.current=t}),D.useMemo(()=>(...n)=>{var r;return(r=e.current)==null?void 0:r.call(e,...n)},[])}function gw({prop:t,defaultProp:e,onChange:n=()=>{}}){const[r,i]=vw({defaultProp:e,onChange:n}),s=t!==void 0,o=s?t:r,a=ds(n),l=D.useCallback(c=>{if(s){const f=typeof c=="function"?c(t):c;f!==t&&a(f)}else i(c)},[s,t,i,a]);return[o,l]}function vw({defaultProp:t,onChange:e}){const n=D.useState(t),[r]=n,i=D.useRef(r),s=ds(e);return D.useEffect(()=>{i.current!==r&&(s(r),i.current=r)},[r,i,s]),n}var wp=D.forwardRef((t,e)=>{const{children:n,...r}=t,i=D.Children.toArray(n),s=i.find(xw);if(s){const o=s.props.children,a=i.map(l=>l===s?D.Children.count(o)>1?D.Children.only(null):D.isValidElement(o)?o.props.children:null:l);return E.jsx(Lf,{...r,ref:e,children:D.isValidElement(o)?D.cloneElement(o,void 0,a):null})}return E.jsx(Lf,{...r,ref:e,children:n})});wp.displayName="Slot";var Lf=D.forwardRef((t,e)=>{const{children:n,...r}=t;if(D.isValidElement(n)){const i=Sw(n);return D.cloneElement(n,{...yw(r,n.props),ref:e?px(e,i):i})}return D.Children.count(n)>1?D.Children.only(null):null});Lf.displayName="SlotClone";var _w=({children:t})=>E.jsx(E.Fragment,{children:t});function xw(t){return D.isValidElement(t)&&t.type===_w}function yw(t,e){const n={...e};for(const r in e){const i=t[r],s=e[r];/^on[A-Z]/.test(r)?i&&s?n[r]=(...a)=>{s(...a),i(...a)}:i&&(n[r]=i):r==="style"?n[r]={...i,...s}:r==="className"&&(n[r]=[i,s].filter(Boolean).join(" "))}return{...t,...n}}function Sw(t){var r,i;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var Mw=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Gr=Mw.reduce((t,e)=>{const n=D.forwardRef((r,i)=>{const{asChild:s,...o}=r,a=s?wp:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),E.jsx(a,{...o,ref:i})});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function Ew(t,e){t&&yp.flushSync(()=>t.dispatchEvent(e))}function ww(t,e=globalThis==null?void 0:globalThis.document){const n=ds(t);D.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return e.addEventListener("keydown",r,{capture:!0}),()=>e.removeEventListener("keydown",r,{capture:!0})},[n,e])}var Tw="DismissableLayer",If="dismissableLayer.update",bw="dismissableLayer.pointerDownOutside",Aw="dismissableLayer.focusOutside",ug,mx=D.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),gx=D.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=D.useContext(mx),[d,f]=D.useState(null),h=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=D.useState({}),v=_s(e,b=>f(b)),g=Array.from(c.layers),[p]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),u=g.indexOf(p),_=d?g.indexOf(d):-1,x=c.layersWithOutsidePointerEventsDisabled.size>0,y=_>=u,A=Pw(b=>{const P=b.target,T=[...c.branches].some(M=>M.contains(P));!y||T||(i==null||i(b),o==null||o(b),b.defaultPrevented||a==null||a())},h),C=Dw(b=>{const P=b.target;[...c.branches].some(M=>M.contains(P))||(s==null||s(b),o==null||o(b),b.defaultPrevented||a==null||a())},h);return ww(b=>{_===c.layers.size-1&&(r==null||r(b),!b.defaultPrevented&&a&&(b.preventDefault(),a()))},h),D.useEffect(()=>{if(d)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(ug=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),dg(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=ug)}},[d,h,n,c]),D.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),dg())},[d,c]),D.useEffect(()=>{const b=()=>m({});return document.addEventListener(If,b),()=>document.removeEventListener(If,b)},[]),E.jsx(Gr.div,{...l,ref:v,style:{pointerEvents:x?y?"auto":"none":void 0,...t.style},onFocusCapture:Ei(t.onFocusCapture,C.onFocusCapture),onBlurCapture:Ei(t.onBlurCapture,C.onBlurCapture),onPointerDownCapture:Ei(t.onPointerDownCapture,A.onPointerDownCapture)})});gx.displayName=Tw;var Cw="DismissableLayerBranch",Rw=D.forwardRef((t,e)=>{const n=D.useContext(mx),r=D.useRef(null),i=_s(e,r);return D.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),E.jsx(Gr.div,{...t,ref:i})});Rw.displayName=Cw;function Pw(t,e=globalThis==null?void 0:globalThis.document){const n=ds(t),r=D.useRef(!1),i=D.useRef(()=>{});return D.useEffect(()=>{const s=a=>{if(a.target&&!r.current){let l=function(){vx(bw,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",i.current),i.current=l,e.addEventListener("click",i.current,{once:!0})):l()}else e.removeEventListener("click",i.current);r.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",i.current)}},[e,n]),{onPointerDownCapture:()=>r.current=!0}}function Dw(t,e=globalThis==null?void 0:globalThis.document){const n=ds(t),r=D.useRef(!1);return D.useEffect(()=>{const i=s=>{s.target&&!r.current&&vx(Aw,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",i),()=>e.removeEventListener("focusin",i)},[e,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function dg(){const t=new CustomEvent(If);document.dispatchEvent(t)}function vx(t,e,n,{discrete:r}){const i=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&i.addEventListener(t,e,{once:!0}),r?Ew(i,s):i.dispatchEvent(s)}var Ju="focusScope.autoFocusOnMount",ed="focusScope.autoFocusOnUnmount",fg={bubbles:!1,cancelable:!0},Nw="FocusScope",_x=D.forwardRef((t,e)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:s,...o}=t,[a,l]=D.useState(null),c=ds(i),d=ds(s),f=D.useRef(null),h=_s(e,g=>l(g)),m=D.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;D.useEffect(()=>{if(r){let g=function(x){if(m.paused||!a)return;const y=x.target;a.contains(y)?f.current=y:ti(f.current,{select:!0})},p=function(x){if(m.paused||!a)return;const y=x.relatedTarget;y!==null&&(a.contains(y)||ti(f.current,{select:!0}))},u=function(x){if(document.activeElement===document.body)for(const A of x)A.removedNodes.length>0&&ti(a)};document.addEventListener("focusin",g),document.addEventListener("focusout",p);const _=new MutationObserver(u);return a&&_.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",p),_.disconnect()}}},[r,a,m.paused]),D.useEffect(()=>{if(a){pg.add(m);const g=document.activeElement;if(!a.contains(g)){const u=new CustomEvent(Ju,fg);a.addEventListener(Ju,c),a.dispatchEvent(u),u.defaultPrevented||(Lw(Ow(xx(a)),{select:!0}),document.activeElement===g&&ti(a))}return()=>{a.removeEventListener(Ju,c),setTimeout(()=>{const u=new CustomEvent(ed,fg);a.addEventListener(ed,d),a.dispatchEvent(u),u.defaultPrevented||ti(g??document.body,{select:!0}),a.removeEventListener(ed,d),pg.remove(m)},0)}}},[a,c,d,m]);const v=D.useCallback(g=>{if(!n&&!r||m.paused)return;const p=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,u=document.activeElement;if(p&&u){const _=g.currentTarget,[x,y]=Iw(_);x&&y?!g.shiftKey&&u===y?(g.preventDefault(),n&&ti(x,{select:!0})):g.shiftKey&&u===x&&(g.preventDefault(),n&&ti(y,{select:!0})):u===_&&g.preventDefault()}},[n,r,m.paused]);return E.jsx(Gr.div,{tabIndex:-1,...o,ref:h,onKeyDown:v})});_x.displayName=Nw;function Lw(t,{select:e=!1}={}){const n=document.activeElement;for(const r of t)if(ti(r,{select:e}),document.activeElement!==n)return}function Iw(t){const e=xx(t),n=hg(e,t),r=hg(e.reverse(),t);return[n,r]}function xx(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function hg(t,e){for(const n of t)if(!Uw(n,{upTo:e}))return n}function Uw(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function Fw(t){return t instanceof HTMLInputElement&&"select"in t}function ti(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&Fw(t)&&e&&t.select()}}var pg=kw();function kw(){let t=[];return{add(e){const n=t[0];e!==n&&(n==null||n.pause()),t=mg(t,e),t.unshift(e)},remove(e){var n;t=mg(t,e),(n=t[0])==null||n.resume()}}}function mg(t,e){const n=[...t],r=n.indexOf(e);return r!==-1&&n.splice(r,1),n}function Ow(t){return t.filter(e=>e.tagName!=="A")}var Bw="Portal",yx=D.forwardRef((t,e)=>{var a;const{container:n,...r}=t,[i,s]=D.useState(!1);Vc(()=>s(!0),[]);const o=n||i&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?LE.createPortal(E.jsx(Gr.div,{...r,ref:e}),o):null});yx.displayName=Bw;function zw(t,e){return D.useReducer((n,r)=>e[n][r]??n,t)}var fu=t=>{const{present:e,children:n}=t,r=Hw(e),i=typeof n=="function"?n({present:r.isPresent}):D.Children.only(n),s=_s(r.ref,Vw(i));return typeof n=="function"||r.isPresent?D.cloneElement(i,{ref:s}):null};fu.displayName="Presence";function Hw(t){const[e,n]=D.useState(),r=D.useRef({}),i=D.useRef(t),s=D.useRef("none"),o=t?"mounted":"unmounted",[a,l]=zw(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return D.useEffect(()=>{const c=Sl(r.current);s.current=a==="mounted"?c:"none"},[a]),Vc(()=>{const c=r.current,d=i.current;if(d!==t){const h=s.current,m=Sl(c);t?l("MOUNT"):m==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(d&&h!==m?"ANIMATION_OUT":"UNMOUNT"),i.current=t}},[t,l]),Vc(()=>{if(e){let c;const d=e.ownerDocument.defaultView??window,f=m=>{const g=Sl(r.current).includes(m.animationName);if(m.target===e&&g&&(l("ANIMATION_END"),!i.current)){const p=e.style.animationFillMode;e.style.animationFillMode="forwards",c=d.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=p)})}},h=m=>{m.target===e&&(s.current=Sl(r.current))};return e.addEventListener("animationstart",h),e.addEventListener("animationcancel",f),e.addEventListener("animationend",f),()=>{d.clearTimeout(c),e.removeEventListener("animationstart",h),e.removeEventListener("animationcancel",f),e.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:D.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function Sl(t){return(t==null?void 0:t.animationName)||"none"}function Vw(t){var r,i;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var td=0;function Gw(){D.useEffect(()=>{const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",t[0]??gg()),document.body.insertAdjacentElement("beforeend",t[1]??gg()),td++,()=>{td===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),td--}},[])}function gg(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}var hr=function(){return hr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},hr.apply(this,arguments)};function Sx(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ww(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var cc="right-scroll-bar-position",uc="width-before-scroll-bar",jw="with-scroll-bars-hidden",Xw="--removed-body-scroll-bar-size";function nd(t,e){return typeof t=="function"?t(e):t&&(t.current=e),t}function Yw(t,e){var n=D.useState(function(){return{value:t,callback:e,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=e,n.facade}var qw=typeof window<"u"?D.useLayoutEffect:D.useEffect,vg=new WeakMap;function $w(t,e){var n=Yw(null,function(r){return t.forEach(function(i){return nd(i,r)})});return qw(function(){var r=vg.get(n);if(r){var i=new Set(r),s=new Set(t),o=n.current;i.forEach(function(a){s.has(a)||nd(a,null)}),s.forEach(function(a){i.has(a)||nd(a,o)})}vg.set(n,t)},[t]),n}function Kw(t){return t}function Qw(t,e){e===void 0&&(e=Kw);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:t},useMedium:function(s){var o=e(s,r);return n.push(o),function(){n=n.filter(function(a){return a!==o})}},assignSyncMedium:function(s){for(r=!0;n.length;){var o=n;n=[],o.forEach(s)}n={push:function(a){return s(a)},filter:function(){return n}}},assignMedium:function(s){r=!0;var o=[];if(n.length){var a=n;n=[],a.forEach(s),o=n}var l=function(){var d=o;o=[],d.forEach(s)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(d){o.push(d),c()},filter:function(d){return o=o.filter(d),n}}}};return i}function Zw(t){t===void 0&&(t={});var e=Qw(null);return e.options=hr({async:!0,ssr:!1},t),e}var Mx=function(t){var e=t.sideCar,n=Sx(t,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return D.createElement(r,hr({},n))};Mx.isSideCarExport=!0;function Jw(t,e){return t.useMedium(e),Mx}var Ex=Zw(),rd=function(){},hu=D.forwardRef(function(t,e){var n=D.useRef(null),r=D.useState({onScrollCapture:rd,onWheelCapture:rd,onTouchMoveCapture:rd}),i=r[0],s=r[1],o=t.forwardProps,a=t.children,l=t.className,c=t.removeScrollBar,d=t.enabled,f=t.shards,h=t.sideCar,m=t.noIsolation,v=t.inert,g=t.allowPinchZoom,p=t.as,u=p===void 0?"div":p,_=t.gapMode,x=Sx(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),y=h,A=$w([n,e]),C=hr(hr({},x),i);return D.createElement(D.Fragment,null,d&&D.createElement(y,{sideCar:Ex,removeScrollBar:c,shards:f,noIsolation:m,inert:v,setCallbacks:s,allowPinchZoom:!!g,lockRef:n,gapMode:_}),o?D.cloneElement(D.Children.only(a),hr(hr({},C),{ref:A})):D.createElement(u,hr({},C,{className:l,ref:A}),a))});hu.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};hu.classNames={fullWidth:uc,zeroRight:cc};var e1=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function t1(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=e1();return e&&t.setAttribute("nonce",e),t}function n1(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function r1(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var i1=function(){var t=0,e=null;return{add:function(n){t==0&&(e=t1())&&(n1(e,n),r1(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},s1=function(){var t=i1();return function(e,n){D.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},wx=function(){var t=s1(),e=function(n){var r=n.styles,i=n.dynamic;return t(r,i),null};return e},o1={left:0,top:0,right:0,gap:0},id=function(t){return parseInt(t||"",10)||0},a1=function(t){var e=window.getComputedStyle(document.body),n=e[t==="padding"?"paddingLeft":"marginLeft"],r=e[t==="padding"?"paddingTop":"marginTop"],i=e[t==="padding"?"paddingRight":"marginRight"];return[id(n),id(r),id(i)]},l1=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return o1;var e=a1(t),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-n+e[2]-e[0])}},c1=wx(),so="data-scroll-locked",u1=function(t,e,n,r){var i=t.left,s=t.top,o=t.right,a=t.gap;return n===void 0&&(n="margin"),`
  .`.concat(jw,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat(so,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(o,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(cc,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(uc,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(cc," .").concat(cc,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(uc," .").concat(uc,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(so,`] {
    `).concat(Xw,": ").concat(a,`px;
  }
`)},_g=function(){var t=parseInt(document.body.getAttribute(so)||"0",10);return isFinite(t)?t:0},d1=function(){D.useEffect(function(){return document.body.setAttribute(so,(_g()+1).toString()),function(){var t=_g()-1;t<=0?document.body.removeAttribute(so):document.body.setAttribute(so,t.toString())}},[])},f1=function(t){var e=t.noRelative,n=t.noImportant,r=t.gapMode,i=r===void 0?"margin":r;d1();var s=D.useMemo(function(){return l1(i)},[i]);return D.createElement(c1,{styles:u1(s,!e,i,n?"":"!important")})},Uf=!1;if(typeof window<"u")try{var Ml=Object.defineProperty({},"passive",{get:function(){return Uf=!0,!0}});window.addEventListener("test",Ml,Ml),window.removeEventListener("test",Ml,Ml)}catch{Uf=!1}var Ss=Uf?{passive:!1}:!1,h1=function(t){return t.tagName==="TEXTAREA"},Tx=function(t,e){if(!(t instanceof Element))return!1;var n=window.getComputedStyle(t);return n[e]!=="hidden"&&!(n.overflowY===n.overflowX&&!h1(t)&&n[e]==="visible")},p1=function(t){return Tx(t,"overflowY")},m1=function(t){return Tx(t,"overflowX")},xg=function(t,e){var n=e.ownerDocument,r=e;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=bx(t,r);if(i){var s=Ax(t,r),o=s[1],a=s[2];if(o>a)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},g1=function(t){var e=t.scrollTop,n=t.scrollHeight,r=t.clientHeight;return[e,n,r]},v1=function(t){var e=t.scrollLeft,n=t.scrollWidth,r=t.clientWidth;return[e,n,r]},bx=function(t,e){return t==="v"?p1(e):m1(e)},Ax=function(t,e){return t==="v"?g1(e):v1(e)},_1=function(t,e){return t==="h"&&e==="rtl"?-1:1},x1=function(t,e,n,r,i){var s=_1(t,window.getComputedStyle(e).direction),o=s*r,a=n.target,l=e.contains(a),c=!1,d=o>0,f=0,h=0;do{var m=Ax(t,a),v=m[0],g=m[1],p=m[2],u=g-p-s*v;(v||u)&&bx(t,a)&&(f+=u,h+=v),a instanceof ShadowRoot?a=a.host:a=a.parentNode}while(!l&&a!==document.body||l&&(e.contains(a)||e===a));return(d&&(Math.abs(f)<1||!i)||!d&&(Math.abs(h)<1||!i))&&(c=!0),c},El=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},yg=function(t){return[t.deltaX,t.deltaY]},Sg=function(t){return t&&"current"in t?t.current:t},y1=function(t,e){return t[0]===e[0]&&t[1]===e[1]},S1=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},M1=0,Ms=[];function E1(t){var e=D.useRef([]),n=D.useRef([0,0]),r=D.useRef(),i=D.useState(M1++)[0],s=D.useState(wx)[0],o=D.useRef(t);D.useEffect(function(){o.current=t},[t]),D.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(i));var g=Ww([t.lockRef.current],(t.shards||[]).map(Sg),!0).filter(Boolean);return g.forEach(function(p){return p.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),g.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(i))})}}},[t.inert,t.lockRef.current,t.shards]);var a=D.useCallback(function(g,p){if("touches"in g&&g.touches.length===2||g.type==="wheel"&&g.ctrlKey)return!o.current.allowPinchZoom;var u=El(g),_=n.current,x="deltaX"in g?g.deltaX:_[0]-u[0],y="deltaY"in g?g.deltaY:_[1]-u[1],A,C=g.target,b=Math.abs(x)>Math.abs(y)?"h":"v";if("touches"in g&&b==="h"&&C.type==="range")return!1;var P=xg(b,C);if(!P)return!0;if(P?A=b:(A=b==="v"?"h":"v",P=xg(b,C)),!P)return!1;if(!r.current&&"changedTouches"in g&&(x||y)&&(r.current=A),!A)return!0;var T=r.current||A;return x1(T,p,g,T==="h"?x:y,!0)},[]),l=D.useCallback(function(g){var p=g;if(!(!Ms.length||Ms[Ms.length-1]!==s)){var u="deltaY"in p?yg(p):El(p),_=e.current.filter(function(A){return A.name===p.type&&(A.target===p.target||p.target===A.shadowParent)&&y1(A.delta,u)})[0];if(_&&_.should){p.cancelable&&p.preventDefault();return}if(!_){var x=(o.current.shards||[]).map(Sg).filter(Boolean).filter(function(A){return A.contains(p.target)}),y=x.length>0?a(p,x[0]):!o.current.noIsolation;y&&p.cancelable&&p.preventDefault()}}},[]),c=D.useCallback(function(g,p,u,_){var x={name:g,delta:p,target:u,should:_,shadowParent:w1(u)};e.current.push(x),setTimeout(function(){e.current=e.current.filter(function(y){return y!==x})},1)},[]),d=D.useCallback(function(g){n.current=El(g),r.current=void 0},[]),f=D.useCallback(function(g){c(g.type,yg(g),g.target,a(g,t.lockRef.current))},[]),h=D.useCallback(function(g){c(g.type,El(g),g.target,a(g,t.lockRef.current))},[]);D.useEffect(function(){return Ms.push(s),t.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:h}),document.addEventListener("wheel",l,Ss),document.addEventListener("touchmove",l,Ss),document.addEventListener("touchstart",d,Ss),function(){Ms=Ms.filter(function(g){return g!==s}),document.removeEventListener("wheel",l,Ss),document.removeEventListener("touchmove",l,Ss),document.removeEventListener("touchstart",d,Ss)}},[]);var m=t.removeScrollBar,v=t.inert;return D.createElement(D.Fragment,null,v?D.createElement(s,{styles:S1(i)}):null,m?D.createElement(f1,{gapMode:t.gapMode}):null)}function w1(t){for(var e=null;t!==null;)t instanceof ShadowRoot&&(e=t.host,t=t.host),t=t.parentNode;return e}const T1=Jw(Ex,E1);var Cx=D.forwardRef(function(t,e){return D.createElement(hu,hr({},t,{ref:e,sideCar:T1}))});Cx.classNames=hu.classNames;var b1=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},Es=new WeakMap,wl=new WeakMap,Tl={},sd=0,Rx=function(t){return t&&(t.host||Rx(t.parentNode))},A1=function(t,e){return e.map(function(n){if(t.contains(n))return n;var r=Rx(n);return r&&t.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return!!n})},C1=function(t,e,n,r){var i=A1(e,Array.isArray(t)?t:[t]);Tl[n]||(Tl[n]=new WeakMap);var s=Tl[n],o=[],a=new Set,l=new Set(i),c=function(f){!f||a.has(f)||(a.add(f),c(f.parentNode))};i.forEach(c);var d=function(f){!f||l.has(f)||Array.prototype.forEach.call(f.children,function(h){if(a.has(h))d(h);else try{var m=h.getAttribute(r),v=m!==null&&m!=="false",g=(Es.get(h)||0)+1,p=(s.get(h)||0)+1;Es.set(h,g),s.set(h,p),o.push(h),g===1&&v&&wl.set(h,!0),p===1&&h.setAttribute(n,"true"),v||h.setAttribute(r,"true")}catch(u){console.error("aria-hidden: cannot operate on ",h,u)}})};return d(e),a.clear(),sd++,function(){o.forEach(function(f){var h=Es.get(f)-1,m=s.get(f)-1;Es.set(f,h),s.set(f,m),h||(wl.has(f)||f.removeAttribute(r),wl.delete(f)),m||f.removeAttribute(n)}),sd--,sd||(Es=new WeakMap,Es=new WeakMap,wl=new WeakMap,Tl={})}},R1=function(t,e,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),i=b1(t);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),C1(r,i,n,"aria-hidden")):function(){return null}},Tp="Dialog",[Px,bN]=fw(Tp),[P1,ir]=Px(Tp),Dx=t=>{const{__scopeDialog:e,children:n,open:r,defaultOpen:i,onOpenChange:s,modal:o=!0}=t,a=D.useRef(null),l=D.useRef(null),[c=!1,d]=gw({prop:r,defaultProp:i,onChange:s});return E.jsx(P1,{scope:e,triggerRef:a,contentRef:l,contentId:Zu(),titleId:Zu(),descriptionId:Zu(),open:c,onOpenChange:d,onOpenToggle:D.useCallback(()=>d(f=>!f),[d]),modal:o,children:n})};Dx.displayName=Tp;var Nx="DialogTrigger",Lx=D.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=ir(Nx,n),s=_s(e,i.triggerRef);return E.jsx(Gr.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":Cp(i.open),...r,ref:s,onClick:Ei(t.onClick,i.onOpenToggle)})});Lx.displayName=Nx;var bp="DialogPortal",[D1,Ix]=Px(bp,{forceMount:void 0}),Ux=t=>{const{__scopeDialog:e,forceMount:n,children:r,container:i}=t,s=ir(bp,e);return E.jsx(D1,{scope:e,forceMount:n,children:D.Children.map(r,o=>E.jsx(fu,{present:n||s.open,children:E.jsx(yx,{asChild:!0,container:i,children:o})}))})};Ux.displayName=bp;var Gc="DialogOverlay",Fx=D.forwardRef((t,e)=>{const n=Ix(Gc,t.__scopeDialog),{forceMount:r=n.forceMount,...i}=t,s=ir(Gc,t.__scopeDialog);return s.modal?E.jsx(fu,{present:r||s.open,children:E.jsx(N1,{...i,ref:e})}):null});Fx.displayName=Gc;var N1=D.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=ir(Gc,n);return E.jsx(Cx,{as:wp,allowPinchZoom:!0,shards:[i.contentRef],children:E.jsx(Gr.div,{"data-state":Cp(i.open),...r,ref:e,style:{pointerEvents:"auto",...r.style}})})}),fs="DialogContent",kx=D.forwardRef((t,e)=>{const n=Ix(fs,t.__scopeDialog),{forceMount:r=n.forceMount,...i}=t,s=ir(fs,t.__scopeDialog);return E.jsx(fu,{present:r||s.open,children:s.modal?E.jsx(L1,{...i,ref:e}):E.jsx(I1,{...i,ref:e})})});kx.displayName=fs;var L1=D.forwardRef((t,e)=>{const n=ir(fs,t.__scopeDialog),r=D.useRef(null),i=_s(e,n.contentRef,r);return D.useEffect(()=>{const s=r.current;if(s)return R1(s)},[]),E.jsx(Ox,{...t,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Ei(t.onCloseAutoFocus,s=>{var o;s.preventDefault(),(o=n.triggerRef.current)==null||o.focus()}),onPointerDownOutside:Ei(t.onPointerDownOutside,s=>{const o=s.detail.originalEvent,a=o.button===0&&o.ctrlKey===!0;(o.button===2||a)&&s.preventDefault()}),onFocusOutside:Ei(t.onFocusOutside,s=>s.preventDefault())})}),I1=D.forwardRef((t,e)=>{const n=ir(fs,t.__scopeDialog),r=D.useRef(!1),i=D.useRef(!1);return E.jsx(Ox,{...t,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var o,a;(o=t.onCloseAutoFocus)==null||o.call(t,s),s.defaultPrevented||(r.current||(a=n.triggerRef.current)==null||a.focus(),s.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:s=>{var l,c;(l=t.onInteractOutside)==null||l.call(t,s),s.defaultPrevented||(r.current=!0,s.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const o=s.target;((c=n.triggerRef.current)==null?void 0:c.contains(o))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&i.current&&s.preventDefault()}})}),Ox=D.forwardRef((t,e)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:s,...o}=t,a=ir(fs,n),l=D.useRef(null),c=_s(e,l);return Gw(),E.jsxs(E.Fragment,{children:[E.jsx(_x,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:s,children:E.jsx(gx,{role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":Cp(a.open),...o,ref:c,onDismiss:()=>a.onOpenChange(!1)})}),E.jsxs(E.Fragment,{children:[E.jsx(U1,{titleId:a.titleId}),E.jsx(k1,{contentRef:l,descriptionId:a.descriptionId})]})]})}),Ap="DialogTitle",Bx=D.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=ir(Ap,n);return E.jsx(Gr.h2,{id:i.titleId,...r,ref:e})});Bx.displayName=Ap;var zx="DialogDescription",Hx=D.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=ir(zx,n);return E.jsx(Gr.p,{id:i.descriptionId,...r,ref:e})});Hx.displayName=zx;var Vx="DialogClose",Gx=D.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=ir(Vx,n);return E.jsx(Gr.button,{type:"button",...r,ref:e,onClick:Ei(t.onClick,()=>i.onOpenChange(!1))})});Gx.displayName=Vx;function Cp(t){return t?"open":"closed"}var Wx="DialogTitleWarning",[AN,jx]=dw(Wx,{contentName:fs,titleName:Ap,docsSlug:"dialog"}),U1=({titleId:t})=>{const e=jx(Wx),n=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return D.useEffect(()=>{t&&(document.getElementById(t)||console.error(n))},[n,t]),null},F1="DialogDescriptionWarning",k1=({contentRef:t,descriptionId:e})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${jx(F1).contentName}}.`;return D.useEffect(()=>{var s;const i=(s=t.current)==null?void 0:s.getAttribute("aria-describedby");e&&i&&(document.getElementById(e)||console.warn(r))},[r,t,e]),null},O1=Dx,B1=Lx,z1=Ux,Xx=Fx,Yx=kx,qx=Bx,$x=Hx,H1=Gx;/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kx=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var G1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=D.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>D.createElement("svg",{ref:l,...G1,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Kx("lucide",i),...a},[...o.map(([c,d])=>D.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=(t,e)=>{const n=D.forwardRef(({className:r,...i},s)=>D.createElement(W1,{ref:s,iconNode:e,className:Kx(`lucide-${V1(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=Qx("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=Qx("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Jx(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=Jx(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function j1(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=Jx(t))&&(r&&(r+=" "),r+=e);return r}const Pp="-",X1=t=>{const e=q1(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const a=o.split(Pp);return a[0]===""&&a.length!==1&&a.shift(),ey(a,e)||Y1(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&r[o]?[...l,...r[o]]:l}}},ey=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),i=r?ey(t.slice(1),r):void 0;if(i)return i;if(e.validators.length===0)return;const s=t.join(Pp);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},Mg=/^\[(.+)\]$/,Y1=t=>{if(Mg.test(t)){const e=Mg.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},q1=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return K1(Object.entries(t.classGroups),n).forEach(([s,o])=>{Ff(o,r,s,e)}),r},Ff=(t,e,n,r)=>{t.forEach(i=>{if(typeof i=="string"){const s=i===""?e:Eg(e,i);s.classGroupId=n;return}if(typeof i=="function"){if($1(i)){Ff(i(r),e,n,r);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([s,o])=>{Ff(o,Eg(e,s),n,r)})})},Eg=(t,e)=>{let n=t;return e.split(Pp).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},$1=t=>t.isThemeGetter,K1=(t,e)=>e?t.map(([n,r])=>{const i=r.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,i]}):t,Q1=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const i=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=r.get(s))!==void 0)return i(s,o),o},set(s,o){n.has(s)?n.set(s,o):i(s,o)}}},ty="!",Z1=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,i=e[0],s=e.length,o=a=>{const l=[];let c=0,d=0,f;for(let p=0;p<a.length;p++){let u=a[p];if(c===0){if(u===i&&(r||a.slice(p,p+s)===e)){l.push(a.slice(d,p)),d=p+s;continue}if(u==="/"){f=p;continue}}u==="["?c++:u==="]"&&c--}const h=l.length===0?a:a.substring(d),m=h.startsWith(ty),v=m?h.substring(1):h,g=f&&f>d?f-d:void 0;return{modifiers:l,hasImportantModifier:m,baseClassName:v,maybePostfixModifierPosition:g}};return n?a=>n({className:a,parseClassName:o}):o},J1=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},eT=t=>({cache:Q1(t.cacheSize),parseClassName:Z1(t),...X1(t)}),tT=/\s+/,nT=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=e,s=[],o=t.trim().split(tT);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:d,hasImportantModifier:f,baseClassName:h,maybePostfixModifierPosition:m}=n(c);let v=!!m,g=r(v?h.substring(0,m):h);if(!g){if(!v){a=c+(a.length>0?" "+a:a);continue}if(g=r(h),!g){a=c+(a.length>0?" "+a:a);continue}v=!1}const p=J1(d).join(":"),u=f?p+ty:p,_=u+g;if(s.includes(_))continue;s.push(_);const x=i(g,v);for(let y=0;y<x.length;++y){const A=x[y];s.push(u+A)}a=c+(a.length>0?" "+a:a)}return a};function rT(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=ny(e))&&(r&&(r+=" "),r+=n);return r}const ny=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=ny(t[r]))&&(n&&(n+=" "),n+=e);return n};function iT(t,...e){let n,r,i,s=o;function o(l){const c=e.reduce((d,f)=>f(d),t());return n=eT(c),r=n.cache.get,i=n.cache.set,s=a,a(l)}function a(l){const c=r(l);if(c)return c;const d=nT(l,n);return i(l,d),d}return function(){return s(rT.apply(null,arguments))}}const dt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},ry=/^\[(?:([a-z-]+):)?(.+)\]$/i,sT=/^\d+\/\d+$/,oT=new Set(["px","full","screen"]),aT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,lT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,cT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,uT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,dT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,_r=t=>oo(t)||oT.has(t)||sT.test(t),Xr=t=>Uo(t,"length",xT),oo=t=>!!t&&!Number.isNaN(Number(t)),od=t=>Uo(t,"number",oo),Yo=t=>!!t&&Number.isInteger(Number(t)),fT=t=>t.endsWith("%")&&oo(t.slice(0,-1)),Ue=t=>ry.test(t),Yr=t=>aT.test(t),hT=new Set(["length","size","percentage"]),pT=t=>Uo(t,hT,iy),mT=t=>Uo(t,"position",iy),gT=new Set(["image","url"]),vT=t=>Uo(t,gT,ST),_T=t=>Uo(t,"",yT),qo=()=>!0,Uo=(t,e,n)=>{const r=ry.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},xT=t=>lT.test(t)&&!cT.test(t),iy=()=>!1,yT=t=>uT.test(t),ST=t=>dT.test(t),MT=()=>{const t=dt("colors"),e=dt("spacing"),n=dt("blur"),r=dt("brightness"),i=dt("borderColor"),s=dt("borderRadius"),o=dt("borderSpacing"),a=dt("borderWidth"),l=dt("contrast"),c=dt("grayscale"),d=dt("hueRotate"),f=dt("invert"),h=dt("gap"),m=dt("gradientColorStops"),v=dt("gradientColorStopPositions"),g=dt("inset"),p=dt("margin"),u=dt("opacity"),_=dt("padding"),x=dt("saturate"),y=dt("scale"),A=dt("sepia"),C=dt("skew"),b=dt("space"),P=dt("translate"),T=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto",Ue,e],I=()=>[Ue,e],F=()=>["",_r,Xr],X=()=>["auto",oo,Ue],$=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],j=()=>["solid","dashed","dotted","double","none"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],Y=()=>["","0",Ue],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],oe=()=>[oo,Ue];return{cacheSize:500,separator:":",theme:{colors:[qo],spacing:[_r,Xr],blur:["none","",Yr,Ue],brightness:oe(),borderColor:[t],borderRadius:["none","","full",Yr,Ue],borderSpacing:I(),borderWidth:F(),contrast:oe(),grayscale:Y(),hueRotate:oe(),invert:Y(),gap:I(),gradientColorStops:[t],gradientColorStopPositions:[fT,Xr],inset:N(),margin:N(),opacity:oe(),padding:I(),saturate:oe(),scale:oe(),sepia:Y(),skew:oe(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",Ue]}],container:["container"],columns:[{columns:[Yr]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...$(),Ue]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Yo,Ue]}],basis:[{basis:N()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ue]}],grow:[{grow:Y()}],shrink:[{shrink:Y()}],order:[{order:["first","last","none",Yo,Ue]}],"grid-cols":[{"grid-cols":[qo]}],"col-start-end":[{col:["auto",{span:["full",Yo,Ue]},Ue]}],"col-start":[{"col-start":X()}],"col-end":[{"col-end":X()}],"grid-rows":[{"grid-rows":[qo]}],"row-start-end":[{row:["auto",{span:[Yo,Ue]},Ue]}],"row-start":[{"row-start":X()}],"row-end":[{"row-end":X()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ue]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ue]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[_]}],px:[{px:[_]}],py:[{py:[_]}],ps:[{ps:[_]}],pe:[{pe:[_]}],pt:[{pt:[_]}],pr:[{pr:[_]}],pb:[{pb:[_]}],pl:[{pl:[_]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[b]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[b]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Ue,e]}],"min-w":[{"min-w":[Ue,e,"min","max","fit"]}],"max-w":[{"max-w":[Ue,e,"none","full","min","max","fit","prose",{screen:[Yr]},Yr]}],h:[{h:[Ue,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Ue,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Ue,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Ue,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Yr,Xr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",od]}],"font-family":[{font:[qo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ue]}],"line-clamp":[{"line-clamp":["none",oo,od]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",_r,Ue]}],"list-image":[{"list-image":["none",Ue]}],"list-style-type":[{list:["none","disc","decimal",Ue]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[u]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[u]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...j(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",_r,Xr]}],"underline-offset":[{"underline-offset":["auto",_r,Ue]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ue]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ue]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[u]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...$(),mT]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",pT]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},vT]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[u]}],"border-style":[{border:[...j(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[u]}],"divide-style":[{divide:j()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...j()]}],"outline-offset":[{"outline-offset":[_r,Ue]}],"outline-w":[{outline:[_r,Xr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[u]}],"ring-offset-w":[{"ring-offset":[_r,Xr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Yr,_T]}],"shadow-color":[{shadow:[qo]}],opacity:[{opacity:[u]}],"mix-blend":[{"mix-blend":[...Q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Q()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Yr,Ue]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[x]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[u]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ue]}],duration:[{duration:oe()}],ease:[{ease:["linear","in","out","in-out",Ue]}],delay:[{delay:oe()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ue]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[Yo,Ue]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ue]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ue]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ue]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[_r,Xr,od]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ET=iT(MT);function qa(...t){return ET(j1(t))}const wT=O1,TT=B1,bT=z1,sy=D.forwardRef(({className:t,...e},n)=>E.jsx(Xx,{ref:n,className:qa("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...e}));sy.displayName=Xx.displayName;const oy=D.forwardRef(({className:t,children:e,...n},r)=>E.jsxs(bT,{children:[E.jsx(sy,{}),E.jsxs(Yx,{ref:r,className:qa("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...n,children:[e,E.jsxs(H1,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[E.jsx(Rp,{className:"h-4 w-4"}),E.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));oy.displayName=Yx.displayName;const ay=({className:t,...e})=>E.jsx("div",{className:qa("flex flex-col space-y-1.5 text-center sm:text-left",t),...e});ay.displayName="DialogHeader";const ly=D.forwardRef(({className:t,...e},n)=>E.jsx(qx,{ref:n,className:qa("text-lg font-semibold leading-none tracking-tight",t),...e}));ly.displayName=qx.displayName;const cy=D.forwardRef(({className:t,...e},n)=>E.jsx($x,{ref:n,className:qa("text-sm text-muted-foreground",t),...e}));cy.displayName=$x.displayName;function sr(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function hs(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const uy=6048e5,AT=864e5;let CT={};function pu(){return CT}function Ia(t,e){var a,l,c,d;const n=pu(),r=(e==null?void 0:e.weekStartsOn)??((l=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((d=(c=n.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??0,i=sr(t),s=i.getDay(),o=(s<r?7:0)+s-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function Wc(t){return Ia(t,{weekStartsOn:1})}function dy(t){const e=sr(t),n=e.getFullYear(),r=hs(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=Wc(r),s=hs(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const o=Wc(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function wg(t){const e=sr(t);return e.setHours(0,0,0,0),e}function Tg(t){const e=sr(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function RT(t,e){const n=wg(t),r=wg(e),i=+n-Tg(n),s=+r-Tg(r);return Math.round((i-s)/AT)}function PT(t){const e=dy(t),n=hs(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),Wc(n)}function DT(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function NT(t){if(!DT(t)&&typeof t!="number")return!1;const e=sr(t);return!isNaN(Number(e))}function LT(t){const e=sr(t),n=hs(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const IT={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},UT=(t,e,n)=>{let r;const i=IT[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function ad(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const FT={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},kT={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},OT={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},BT={date:ad({formats:FT,defaultWidth:"full"}),time:ad({formats:kT,defaultWidth:"full"}),dateTime:ad({formats:OT,defaultWidth:"full"})},zT={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},HT=(t,e,n,r)=>zT[t];function $o(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,a=n!=null&&n.width?String(n.width):o;i=t.formattingValues[a]||t.formattingValues[o]}else{const o=t.defaultWidth,a=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[a]||t.values[o]}const s=t.argumentCallback?t.argumentCallback(e):e;return i[s]}}const VT={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},GT={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},WT={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},jT={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},XT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},YT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},qT=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},$T={ordinalNumber:qT,era:$o({values:VT,defaultWidth:"wide"}),quarter:$o({values:GT,defaultWidth:"wide",argumentCallback:t=>t-1}),month:$o({values:WT,defaultWidth:"wide"}),day:$o({values:jT,defaultWidth:"wide"}),dayPeriod:$o({values:XT,defaultWidth:"wide",formattingValues:YT,defaultFormattingWidth:"wide"})};function Ko(t){return(e,n={})=>{const r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;const o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?QT(a,f=>f.test(o)):KT(a,f=>f.test(o));let c;c=t.valueCallback?t.valueCallback(l):l,c=n.valueCallback?n.valueCallback(c):c;const d=e.slice(o.length);return{value:c,rest:d}}}function KT(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function QT(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function ZT(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const i=r[0],s=e.match(t.parsePattern);if(!s)return null;let o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;const a=e.slice(i.length);return{value:o,rest:a}}}const JT=/^(\d+)(th|st|nd|rd)?/i,eb=/\d+/i,tb={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},nb={any:[/^b/i,/^(a|c)/i]},rb={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ib={any:[/1/i,/2/i,/3/i,/4/i]},sb={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ob={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ab={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},lb={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},cb={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ub={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},db={ordinalNumber:ZT({matchPattern:JT,parsePattern:eb,valueCallback:t=>parseInt(t,10)}),era:Ko({matchPatterns:tb,defaultMatchWidth:"wide",parsePatterns:nb,defaultParseWidth:"any"}),quarter:Ko({matchPatterns:rb,defaultMatchWidth:"wide",parsePatterns:ib,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Ko({matchPatterns:sb,defaultMatchWidth:"wide",parsePatterns:ob,defaultParseWidth:"any"}),day:Ko({matchPatterns:ab,defaultMatchWidth:"wide",parsePatterns:lb,defaultParseWidth:"any"}),dayPeriod:Ko({matchPatterns:cb,defaultMatchWidth:"any",parsePatterns:ub,defaultParseWidth:"any"})},fb={code:"en-US",formatDistance:UT,formatLong:BT,formatRelative:HT,localize:$T,match:db,options:{weekStartsOn:0,firstWeekContainsDate:1}};function hb(t){const e=sr(t);return RT(e,LT(e))+1}function pb(t){const e=sr(t),n=+Wc(e)-+PT(e);return Math.round(n/uy)+1}function fy(t,e){var d,f,h,m;const n=sr(t),r=n.getFullYear(),i=pu(),s=(e==null?void 0:e.firstWeekContainsDate)??((f=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??i.firstWeekContainsDate??((m=(h=i.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,o=hs(t,0);o.setFullYear(r+1,0,s),o.setHours(0,0,0,0);const a=Ia(o,e),l=hs(t,0);l.setFullYear(r,0,s),l.setHours(0,0,0,0);const c=Ia(l,e);return n.getTime()>=a.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function mb(t,e){var a,l,c,d;const n=pu(),r=(e==null?void 0:e.firstWeekContainsDate)??((l=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((d=(c=n.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??1,i=fy(t,e),s=hs(t,0);return s.setFullYear(i,0,r),s.setHours(0,0,0,0),Ia(s,e)}function gb(t,e){const n=sr(t),r=+Ia(n,e)-+mb(n,e);return Math.round(r/uy)+1}function rt(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const qr={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return rt(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):rt(n+1,2)},d(t,e){return rt(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return rt(t.getHours()%12||12,e.length)},H(t,e){return rt(t.getHours(),e.length)},m(t,e){return rt(t.getMinutes(),e.length)},s(t,e){return rt(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return rt(i,e.length)}},ws={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},bg={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return qr.y(t,e)},Y:function(t,e,n,r){const i=fy(t,r),s=i>0?i:1-i;if(e==="YY"){const o=s%100;return rt(o,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):rt(s,e.length)},R:function(t,e){const n=dy(t);return rt(n,e.length)},u:function(t,e){const n=t.getFullYear();return rt(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return rt(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return rt(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return qr.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return rt(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const i=gb(t,r);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):rt(i,e.length)},I:function(t,e,n){const r=pb(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):rt(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):qr.d(t,e)},D:function(t,e,n){const r=hb(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):rt(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return rt(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return rt(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return rt(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let i;switch(r===12?i=ws.noon:r===0?i=ws.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let i;switch(r>=17?i=ws.evening:r>=12?i=ws.afternoon:r>=4?i=ws.morning:i=ws.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return qr.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):qr.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):rt(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):rt(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):qr.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):qr.s(t,e)},S:function(t,e){return qr.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return Cg(r);case"XXXX":case"XX":return Gi(r);case"XXXXX":case"XXX":default:return Gi(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return Cg(r);case"xxxx":case"xx":return Gi(r);case"xxxxx":case"xxx":default:return Gi(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Ag(r,":");case"OOOO":default:return"GMT"+Gi(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Ag(r,":");case"zzzz":default:return"GMT"+Gi(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return rt(r,e.length)},T:function(t,e,n){const r=t.getTime();return rt(r,e.length)}};function Ag(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=Math.trunc(r/60),s=r%60;return s===0?n+String(i):n+String(i)+e+rt(s,2)}function Cg(t,e){return t%60===0?(t>0?"-":"+")+rt(Math.abs(t)/60,2):Gi(t,e)}function Gi(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=rt(Math.trunc(r/60),2),s=rt(r%60,2);return n+i+e+s}const Rg=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},hy=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},vb=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return Rg(t,e);let s;switch(r){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",Rg(r,e)).replace("{{time}}",hy(i,e))},_b={p:hy,P:vb},xb=/^D+$/,yb=/^Y+$/,Sb=["D","DD","YY","YYYY"];function Mb(t){return xb.test(t)}function Eb(t){return yb.test(t)}function wb(t,e,n){const r=Tb(t,e,n);if(console.warn(r),Sb.includes(t))throw new RangeError(r)}function Tb(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const bb=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ab=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Cb=/^'([^]*?)'?$/,Rb=/''/g,Pb=/[a-zA-Z]/;function Db(t,e,n){var d,f,h,m;const r=pu(),i=r.locale??fb,s=r.firstWeekContainsDate??((f=(d=r.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??1,o=r.weekStartsOn??((m=(h=r.locale)==null?void 0:h.options)==null?void 0:m.weekStartsOn)??0,a=sr(t);if(!NT(a))throw new RangeError("Invalid time value");let l=e.match(Ab).map(v=>{const g=v[0];if(g==="p"||g==="P"){const p=_b[g];return p(v,i.formatLong)}return v}).join("").match(bb).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const g=v[0];if(g==="'")return{isToken:!1,value:Nb(v)};if(bg[g])return{isToken:!0,value:v};if(g.match(Pb))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:v}});i.localize.preprocessor&&(l=i.localize.preprocessor(a,l));const c={firstWeekContainsDate:s,weekStartsOn:o,locale:i};return l.map(v=>{if(!v.isToken)return v.value;const g=v.value;(Eb(g)||Mb(g))&&wb(g,e,String(t));const p=bg[g[0]];return p(a,g,i.localize,c)}).join("")}function Nb(t){const e=t.match(Cb);return e?e[1].replace(Rb,"'"):t}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dp="175",Lb=0,Pg=1,Ib=2,py=1,Ub=2,wr=3,Ci=0,hn=1,Cr=2,wi=0,ao=1,Dg=2,Ng=3,Lg=4,Fb=5,Xi=100,kb=101,Ob=102,Bb=103,zb=104,Hb=200,Vb=201,Gb=202,Wb=203,kf=204,Of=205,jb=206,Xb=207,Yb=208,qb=209,$b=210,Kb=211,Qb=212,Zb=213,Jb=214,Bf=0,zf=1,Hf=2,Ao=3,Vf=4,Gf=5,Wf=6,jf=7,my=0,eA=1,tA=2,Ti=0,nA=1,rA=2,iA=3,sA=4,oA=5,aA=6,lA=7,gy=300,Co=301,Ro=302,Xf=303,Yf=304,mu=306,qf=1e3,Qi=1001,$f=1002,nr=1003,cA=1004,bl=1005,pr=1006,ld=1007,Zi=1008,zr=1009,vy=1010,_y=1011,Ua=1012,Np=1013,ps=1014,Dr=1015,$a=1016,Lp=1017,Ip=1018,Fa=1020,xy=35902,yy=1021,Sy=1022,Jn=1023,My=1024,Ey=1025,ka=1026,Oa=1027,wy=1028,Up=1029,Ty=1030,Fp=1031,kp=1033,dc=33776,fc=33777,hc=33778,pc=33779,Kf=35840,Qf=35841,Zf=35842,Jf=35843,eh=36196,th=37492,nh=37496,rh=37808,ih=37809,sh=37810,oh=37811,ah=37812,lh=37813,ch=37814,uh=37815,dh=37816,fh=37817,hh=37818,ph=37819,mh=37820,gh=37821,mc=36492,vh=36494,_h=36495,by=36283,xh=36284,yh=36285,Sh=36286,uA=3200,dA=3201,fA=0,hA=1,ai="",Nn="srgb",Po="srgb-linear",jc="linear",ot="srgb",Ts=7680,Ig=519,pA=512,mA=513,gA=514,Ay=515,vA=516,_A=517,xA=518,yA=519,Ug=35044,Fg="300 es",Nr=2e3,Xc=2001;class Fo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const i=r[e];if(i!==void 0){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=Math.PI/180,Mh=180/Math.PI;function Ka(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[r&255]+Xt[r>>8&255]+Xt[r>>16&255]+Xt[r>>24&255]).toLowerCase()}function He(t,e,n){return Math.max(e,Math.min(n,t))}function SA(t,e){return(t%e+e)%e}function ud(t,e,n){return(1-n)*t+n*e}function Qo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(He(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(He(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*r-o*i+e.x,this.y=s*i+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,r,i,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,s,o,a,l,c)}set(e,n,r,i,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=r,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,s=this.elements,o=r[0],a=r[3],l=r[6],c=r[1],d=r[4],f=r[7],h=r[2],m=r[5],v=r[8],g=i[0],p=i[3],u=i[6],_=i[1],x=i[4],y=i[7],A=i[2],C=i[5],b=i[8];return s[0]=o*g+a*_+l*A,s[3]=o*p+a*x+l*C,s[6]=o*u+a*y+l*b,s[1]=c*g+d*_+f*A,s[4]=c*p+d*x+f*C,s[7]=c*u+d*y+f*b,s[2]=h*g+m*_+v*A,s[5]=h*p+m*x+v*C,s[8]=h*u+m*y+v*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-r*s*d+r*a*l+i*s*c-i*o*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,m=c*s-o*l,v=n*f+r*h+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(i*c-d*r)*g,e[2]=(a*r-i*o)*g,e[3]=h*g,e[4]=(d*n-i*l)*g,e[5]=(i*s-a*n)*g,e[6]=m*g,e[7]=(r*l-c*n)*g,e[8]=(o*n-r*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(r*l,r*c,-r*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(dd.makeScale(e,n)),this}rotate(e){return this.premultiply(dd.makeRotation(-e)),this}translate(e,n){return this.premultiply(dd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dd=new Fe;function Cy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Yc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function MA(){const t=Yc("canvas");return t.style.display="block",t}const kg={};function gc(t){t in kg||(kg[t]=!0,console.warn(t))}function EA(t,e,n){return new Promise(function(r,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:r()}}setTimeout(s,n)})}function wA(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function TA(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Og=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bg=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bA(){const t={enabled:!0,workingColorSpace:Po,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(i.r=Ur(i.r),i.g=Ur(i.g),i.b=Ur(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(i.r=lo(i.r),i.g=lo(i.g),i.b=lo(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ai?jc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return t.define({[Po]:{primaries:e,whitePoint:r,transfer:jc,toXYZ:Og,fromXYZ:Bg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:r,transfer:ot,toXYZ:Og,fromXYZ:Bg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),t}const Qe=bA();function Ur(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let bs;class AA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{bs===void 0&&(bs=Yc("canvas")),bs.width=e.width,bs.height=e.height;const i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=bs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Yc("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ur(s[o]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ur(n[r]/255)*255):n[r]=Ur(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CA=0;class Op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CA++}),this.uuid=Ka(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(fd(i[o].image)):s.push(fd(i[o]))}else s=fd(i);r.url=s}return n||(e.images[this.uuid]=r),r}}function fd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?AA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RA=0;class pn extends Fo{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,r=Qi,i=Qi,s=pr,o=Zi,a=Jn,l=zr,c=pn.DEFAULT_ANISOTROPY,d=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RA++}),this.uuid=Ka(),this.name="",this.source=new Op(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qf:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case $f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qf:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case $f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=gy;pn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,r=0,i=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i+o[12]*s,this.y=o[1]*n+o[5]*r+o[9]*i+o[13]*s,this.z=o[2]*n+o[6]*r+o[10]*i+o[14]*s,this.w=o[3]*n+o[7]*r+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],v=l[9],g=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+g)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(m+1)/2,A=(u+1)/2,C=(d+h)/4,b=(f+g)/4,P=(v+p)/4;return x>y&&x>A?x<.01?(r=0,i=.707106781,s=.707106781):(r=Math.sqrt(x),i=C/r,s=b/r):y>A?y<.01?(r=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),r=C/i,s=P/i):A<.01?(r=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),r=b/s,i=P/s),this.set(r,i,s,n),this}let _=Math.sqrt((p-v)*(p-v)+(f-g)*(f-g)+(h-d)*(h-d));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(f-g)/_,this.z=(h-d)/_,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this.w=He(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this.w=He(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(He(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PA extends Fo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const i={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const s=new pn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);s.flipY=!1,s.generateMipmaps=r.generateMipmaps,s.internalFormat=r.internalFormat,this.textures=[];const o=r.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const i=Object.assign({},e.textures[n].image);this.textures[n].source=new Op(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends PA{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Ry extends pn{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=nr,this.minFilter=nr,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DA extends pn{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=nr,this.minFilter=nr,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qa{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,s,o,a){let l=r[i+0],c=r[i+1],d=r[i+2],f=r[i+3];const h=s[o+0],m=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=g;return}if(f!==g||l!==h||c!==m||d!==v){let p=1-a;const u=l*h+c*m+d*v+f*g,_=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const A=Math.sqrt(x),C=Math.atan2(A,u*_);p=Math.sin(p*C)/A,a=Math.sin(a*C)/A}const y=a*_;if(l=l*p+h*y,c=c*p+m*y,d=d*p+v*y,f=f*p+g*y,p===1-a){const A=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=A,c*=A,d*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,r,i,s,o){const a=r[i],l=r[i+1],c=r[i+2],d=r[i+3],f=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+d*f+l*m-c*h,e[n+1]=l*v+d*h+c*f-a*m,e[n+2]=c*v+d*m+a*h-l*f,e[n+3]=d*v-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(r/2),d=a(i/2),f=a(s/2),h=l(r/2),m=l(i/2),v=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*m*v,this._y=c*m*f-h*d*v,this._z=c*d*v+h*m*f,this._w=c*d*f-h*m*v;break;case"YXZ":this._x=h*d*f+c*m*v,this._y=c*m*f-h*d*v,this._z=c*d*v-h*m*f,this._w=c*d*f+h*m*v;break;case"ZXY":this._x=h*d*f-c*m*v,this._y=c*m*f+h*d*v,this._z=c*d*v+h*m*f,this._w=c*d*f-h*m*v;break;case"ZYX":this._x=h*d*f-c*m*v,this._y=c*m*f+h*d*v,this._z=c*d*v-h*m*f,this._w=c*d*f+h*m*v;break;case"YZX":this._x=h*d*f+c*m*v,this._y=c*m*f+h*d*v,this._z=c*d*v-h*m*f,this._w=c*d*f-h*m*v;break;case"XZY":this._x=h*d*f-c*m*v,this._y=c*m*f-h*d*v,this._z=c*d*v+h*m*f,this._w=c*d*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=r+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(r>a&&r>f){const m=2*Math.sqrt(1+r-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-r-f);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-r-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=r*d+o*a+i*c-s*l,this._y=i*d+o*l+s*a-r*c,this._z=s*d+o*c+r*l-i*a,this._w=o*d-r*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+r*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=r,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*r+n*this._x,this._y=m*i+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=r*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),s=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,r=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[3]*r+s[6]*i,this.y=s[1]*n+s[4]*r+s[7]*i,this.z=s[2]*n+s[5]*r+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,s=e.elements,o=1/(s[3]*n+s[7]*r+s[11]*i+s[15]);return this.x=(s[0]*n+s[4]*r+s[8]*i+s[12])*o,this.y=(s[1]*n+s[5]*r+s[9]*i+s[13])*o,this.z=(s[2]*n+s[6]*r+s[10]*i+s[14])*o,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*r),d=2*(a*n-s*i),f=2*(s*r-o*n);return this.x=n+l*c+o*f-a*d,this.y=r+l*d+a*c-s*f,this.z=i+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*i,this.y=s[1]*n+s[5]*r+s[9]*i,this.z=s[2]*n+s[6]*r+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(He(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=i*l-s*a,this.y=s*o-r*l,this.z=r*a-i*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return hd.copy(this).projectOnVector(e),this.sub(hd)}reflect(e){return this.sub(hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(He(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new G,zg=new Qa;class Za{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const s=r.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(s,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Al.copy(r.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Cl.subVectors(this.max,Zo),As.subVectors(e.a,Zo),Cs.subVectors(e.b,Zo),Rs.subVectors(e.c,Zo),$r.subVectors(Cs,As),Kr.subVectors(Rs,Cs),Ui.subVectors(As,Rs);let n=[0,-$r.z,$r.y,0,-Kr.z,Kr.y,0,-Ui.z,Ui.y,$r.z,0,-$r.x,Kr.z,0,-Kr.x,Ui.z,0,-Ui.x,-$r.y,$r.x,0,-Kr.y,Kr.x,0,-Ui.y,Ui.x,0];return!pd(n,As,Cs,Rs,Cl)||(n=[1,0,0,0,1,0,0,0,1],!pd(n,As,Cs,Rs,Cl))?!1:(Rl.crossVectors($r,Kr),n=[Rl.x,Rl.y,Rl.z],pd(n,As,Cs,Rs,Cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xr=[new G,new G,new G,new G,new G,new G,new G,new G],Wn=new G,Al=new Za,As=new G,Cs=new G,Rs=new G,$r=new G,Kr=new G,Ui=new G,Zo=new G,Cl=new G,Rl=new G,Fi=new G;function pd(t,e,n,r,i){for(let s=0,o=t.length-3;s<=o;s+=3){Fi.fromArray(t,s);const a=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),l=e.dot(Fi),c=n.dot(Fi),d=r.dot(Fi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const NA=new Za,Jo=new G,md=new G;class gu{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):NA.setFromPoints(e).getCenter(r);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const n=Jo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(Jo,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(md)),this.expandByPoint(Jo.copy(e.center).sub(md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yr=new G,gd=new G,Pl=new G,Qr=new G,vd=new G,Dl=new G,_d=new G;class Py{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,n),yr.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){gd.copy(e).add(n).multiplyScalar(.5),Pl.copy(n).sub(e).normalize(),Qr.copy(this.origin).sub(gd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Pl),a=Qr.dot(this.direction),l=-Qr.dot(Pl),c=Qr.lengthSq(),d=Math.abs(1-o*o);let f,h,m,v;if(d>0)if(f=o*l-a,h=o*a-l,v=s*d,f>=0)if(h>=-v)if(h<=v){const g=1/d;f*=g,h*=g,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(gd).addScaledVector(Pl,h),m}intersectSphere(e,n){yr.subVectors(e.center,this.origin);const r=yr.dot(this.direction),i=yr.dot(yr)-r*r,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=r-o,l=r+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),r>o||s>i||((s>r||isNaN(r))&&(r=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),r>l||a>i)||((a>r||r!==r)&&(r=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,n,r,i,s){vd.subVectors(n,e),Dl.subVectors(r,e),_d.crossVectors(vd,Dl);let o=this.direction.dot(_d),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qr.subVectors(this.origin,e);const l=a*this.direction.dot(Dl.crossVectors(Qr,Dl));if(l<0)return null;const c=a*this.direction.dot(vd.cross(Qr));if(c<0||l+c>o)return null;const d=-a*Qr.dot(_d);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,r,i,s,o,a,l,c,d,f,h,m,v,g,p){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,s,o,a,l,c,d,f,h,m,v,g,p)}set(e,n,r,i,s,o,a,l,c,d,f,h,m,v,g,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=r,u[12]=i,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=v,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/Ps.setFromMatrixColumn(e,0).length(),s=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*s,n[5]=r[5]*s,n[6]=r[6]*s,n[7]=0,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,s=e.z,o=Math.cos(r),a=Math.sin(r),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,m=o*f,v=a*d,g=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+v*c,n[5]=h-g*c,n[9]=-a*l,n[2]=g-h*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,v=c*d,g=c*f;n[0]=h+g*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=m*a-v,n[6]=g+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,v=c*d,g=c*f;n[0]=h-g*a,n[4]=-o*f,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*d,n[9]=g-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,m=o*f,v=a*d,g=a*f;n[0]=l*d,n[4]=v*c-m,n[8]=h*c+g,n[1]=l*f,n[5]=g*c+h,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,v=a*l,g=a*c;n[0]=l*d,n[4]=g-h*f,n[8]=v*f+m,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*f+v,n[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,m=o*c,v=a*l,g=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+g,n[5]=o*d,n[9]=m*f-v,n[2]=v*f-m,n[6]=a*d,n[10]=g*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LA,e,IA)}lookAt(e,n,r){const i=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Zr.crossVectors(r,vn),Zr.lengthSq()===0&&(Math.abs(r.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Zr.crossVectors(r,vn)),Zr.normalize(),Nl.crossVectors(vn,Zr),i[0]=Zr.x,i[4]=Nl.x,i[8]=vn.x,i[1]=Zr.y,i[5]=Nl.y,i[9]=vn.y,i[2]=Zr.z,i[6]=Nl.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,s=this.elements,o=r[0],a=r[4],l=r[8],c=r[12],d=r[1],f=r[5],h=r[9],m=r[13],v=r[2],g=r[6],p=r[10],u=r[14],_=r[3],x=r[7],y=r[11],A=r[15],C=i[0],b=i[4],P=i[8],T=i[12],M=i[1],N=i[5],I=i[9],F=i[13],X=i[2],$=i[6],j=i[10],Q=i[14],U=i[3],Y=i[7],J=i[11],oe=i[15];return s[0]=o*C+a*M+l*X+c*U,s[4]=o*b+a*N+l*$+c*Y,s[8]=o*P+a*I+l*j+c*J,s[12]=o*T+a*F+l*Q+c*oe,s[1]=d*C+f*M+h*X+m*U,s[5]=d*b+f*N+h*$+m*Y,s[9]=d*P+f*I+h*j+m*J,s[13]=d*T+f*F+h*Q+m*oe,s[2]=v*C+g*M+p*X+u*U,s[6]=v*b+g*N+p*$+u*Y,s[10]=v*P+g*I+p*j+u*J,s[14]=v*T+g*F+p*Q+u*oe,s[3]=_*C+x*M+y*X+A*U,s[7]=_*b+x*N+y*$+A*Y,s[11]=_*P+x*I+y*j+A*J,s[15]=_*T+x*F+y*Q+A*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],v=e[3],g=e[7],p=e[11],u=e[15];return v*(+s*l*f-i*c*f-s*a*h+r*c*h+i*a*m-r*l*m)+g*(+n*l*m-n*c*h+s*o*h-i*o*m+i*c*d-s*l*d)+p*(+n*c*f-n*a*m-s*o*f+r*o*m+s*a*d-r*c*d)+u*(-i*a*d-n*l*f+n*a*h+i*o*f-r*o*h+r*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],v=e[12],g=e[13],p=e[14],u=e[15],_=f*p*c-g*h*c+g*l*m-a*p*m-f*l*u+a*h*u,x=v*h*c-d*p*c-v*l*m+o*p*m+d*l*u-o*h*u,y=d*g*c-v*f*c+v*a*m-o*g*m-d*a*u+o*f*u,A=v*f*l-d*g*l-v*a*h+o*g*h+d*a*p-o*f*p,C=n*_+r*x+i*y+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=_*b,e[1]=(g*h*s-f*p*s-g*i*m+r*p*m+f*i*u-r*h*u)*b,e[2]=(a*p*s-g*l*s+g*i*c-r*p*c-a*i*u+r*l*u)*b,e[3]=(f*l*s-a*h*s-f*i*c+r*h*c+a*i*m-r*l*m)*b,e[4]=x*b,e[5]=(d*p*s-v*h*s+v*i*m-n*p*m-d*i*u+n*h*u)*b,e[6]=(v*l*s-o*p*s-v*i*c+n*p*c+o*i*u-n*l*u)*b,e[7]=(o*h*s-d*l*s+d*i*c-n*h*c-o*i*m+n*l*m)*b,e[8]=y*b,e[9]=(v*f*s-d*g*s-v*r*m+n*g*m+d*r*u-n*f*u)*b,e[10]=(o*g*s-v*a*s+v*r*c-n*g*c-o*r*u+n*a*u)*b,e[11]=(d*a*s-o*f*s-d*r*c+n*f*c+o*r*m-n*a*m)*b,e[12]=A*b,e[13]=(d*g*i-v*f*i+v*r*h-n*g*h-d*r*p+n*f*p)*b,e[14]=(v*a*i-o*g*i-v*r*l+n*g*l+o*r*p-n*a*p)*b,e[15]=(o*f*i-d*a*i+d*r*l-n*f*l-o*r*h+n*a*h)*b,this}scale(e){const n=this.elements,r=e.x,i=e.y,s=e.z;return n[0]*=r,n[4]*=i,n[8]*=s,n[1]*=r,n[5]*=i,n[9]*=s,n[2]*=r,n[6]*=i,n[10]*=s,n[3]*=r,n[7]*=i,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),s=1-r,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+r,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+r,d*l-i*o,0,c*l-i*a,d*l+i*o,s*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,s,o){return this.set(1,r,s,0,e,1,o,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,m=s*d,v=s*f,g=o*d,p=o*f,u=a*f,_=l*c,x=l*d,y=l*f,A=r.x,C=r.y,b=r.z;return i[0]=(1-(g+u))*A,i[1]=(m+y)*A,i[2]=(v-x)*A,i[3]=0,i[4]=(m-y)*C,i[5]=(1-(h+u))*C,i[6]=(p+_)*C,i[7]=0,i[8]=(v+x)*b,i[9]=(p-_)*b,i[10]=(1-(h+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let s=Ps.set(i[0],i[1],i[2]).length();const o=Ps.set(i[4],i[5],i[6]).length(),a=Ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],jn.copy(this);const c=1/s,d=1/o,f=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=d,jn.elements[5]*=d,jn.elements[6]*=d,jn.elements[8]*=f,jn.elements[9]*=f,jn.elements[10]*=f,n.setFromRotationMatrix(jn),r.x=s,r.y=o,r.z=a,this}makePerspective(e,n,r,i,s,o,a=Nr){const l=this.elements,c=2*s/(n-e),d=2*s/(r-i),f=(n+e)/(n-e),h=(r+i)/(r-i);let m,v;if(a===Nr)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Xc)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,i,s,o,a=Nr){const l=this.elements,c=1/(n-e),d=1/(r-i),f=1/(o-s),h=(n+e)*c,m=(r+i)*d;let v,g;if(a===Nr)v=(o+s)*f,g=-2*f;else if(a===Xc)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ps=new G,jn=new At,LA=new G(0,0,0),IA=new G(1,1,1),Zr=new G,Nl=new G,vn=new G,Hg=new At,Vg=new Qa;class Hr{constructor(e=0,n=0,r=0,i=Hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],f=i[2],h=i[6],m=i[10];switch(n){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hg,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vg.setFromEuler(this),this.setFromQuaternion(Vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hr.DEFAULT_ORDER="XYZ";class Dy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UA=0;const Gg=new G,Ds=new Qa,Sr=new At,Ll=new G,ea=new G,FA=new G,kA=new Qa,Wg=new G(1,0,0),jg=new G(0,1,0),Xg=new G(0,0,1),Yg={type:"added"},OA={type:"removed"},Ns={type:"childadded",child:null},xd={type:"childremoved",child:null};class mn extends Fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new G,n=new Hr,r=new Qa,i=new G(1,1,1);function s(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(s),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new At},normalMatrix:{value:new Fe}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Wg,e)}rotateY(e){return this.rotateOnAxis(jg,e)}rotateZ(e){return this.rotateOnAxis(Xg,e)}translateOnAxis(e,n){return Gg.copy(e).applyQuaternion(this.quaternion),this.position.add(Gg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wg,e)}translateY(e){return this.translateOnAxis(jg,e)}translateZ(e){return this.translateOnAxis(Xg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Ll.copy(e):Ll.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sr.lookAt(ea,Ll,this.up):Sr.lookAt(Ll,ea,this.up),this.quaternion.setFromRotationMatrix(Sr),i&&(Sr.extractRotation(i.matrixWorld),Ds.setFromRotationMatrix(Sr),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yg),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(OA),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yg),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const o=this.children[r].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,FA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,kA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),m.length>0&&(r.animations=m),v.length>0&&(r.nodes=v)}return r.object=i,r;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}mn.DEFAULT_UP=new G(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new G,Mr=new G,yd=new G,Er=new G,Ls=new G,Is=new G,qg=new G,Sd=new G,Md=new G,Ed=new G,wd=new bt,Td=new bt,bd=new bt;class Zn{constructor(e=new G,n=new G,r=new G){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),Xn.subVectors(e,n),i.cross(Xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,n,r,i,s){Xn.subVectors(i,n),Mr.subVectors(r,n),yd.subVectors(e,n);const o=Xn.dot(Xn),a=Xn.dot(Mr),l=Xn.dot(yd),c=Mr.dot(Mr),d=Mr.dot(yd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*d)*h,v=(o*d-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(e,n,r,i,s,o,a,l){return this.getBarycoord(e,n,r,i,Er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Er.x),l.addScaledVector(o,Er.y),l.addScaledVector(a,Er.z),l)}static getInterpolatedAttribute(e,n,r,i,s,o){return wd.setScalar(0),Td.setScalar(0),bd.setScalar(0),wd.fromBufferAttribute(e,n),Td.fromBufferAttribute(e,r),bd.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(wd,s.x),o.addScaledVector(Td,s.y),o.addScaledVector(bd,s.z),o}static isFrontFacing(e,n,r,i){return Xn.subVectors(r,n),Mr.subVectors(e,n),Xn.cross(Mr).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),Xn.cross(Mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,i,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,r,i,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,s=this.c;let o,a;Ls.subVectors(i,r),Is.subVectors(s,r),Sd.subVectors(e,r);const l=Ls.dot(Sd),c=Is.dot(Sd);if(l<=0&&c<=0)return n.copy(r);Md.subVectors(e,i);const d=Ls.dot(Md),f=Is.dot(Md);if(d>=0&&f<=d)return n.copy(i);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(r).addScaledVector(Ls,o);Ed.subVectors(e,s);const m=Ls.dot(Ed),v=Is.dot(Ed);if(v>=0&&m<=v)return n.copy(s);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(r).addScaledVector(Is,a);const p=d*v-m*f;if(p<=0&&f-d>=0&&m-v>=0)return qg.subVectors(s,i),a=(f-d)/(f-d+(m-v)),n.copy(i).addScaledVector(qg,a);const u=1/(p+g+h);return o=g*u,a=h*u,n.copy(r).addScaledVector(Ls,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ny={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Ad(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=r,Qe.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=Qe.workingColorSpace){if(e=SA(e,1),n=He(n,0,1),r=He(r,0,1),n===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;this.r=Ad(o,s,e+1/3),this.g=Ad(o,s,e),this.b=Ad(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,n=Nn){function r(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const r=Ny[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Qe.fromWorkingColorSpace(Yt.copy(this),e),Math.round(He(Yt.r*255,0,255))*65536+Math.round(He(Yt.g*255,0,255))*256+Math.round(He(Yt.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Yt.copy(this),n);const r=Yt.r,i=Yt.g,s=Yt.b,o=Math.max(r,i,s),a=Math.min(r,i,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case r:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-r)/f+2;break;case s:l=(r-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Nn){Qe.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,r=Yt.g,i=Yt.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(Jr),this.setHSL(Jr.h+e,Jr.s+n,Jr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Jr),e.getHSL(Il);const r=ud(Jr.h,Il.h,n),i=ud(Jr.s,Il.s,n),s=ud(Jr.l,Il.l,n);return this.setHSL(r,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,s=e.elements;return this.r=s[0]*n+s[3]*r+s[6]*i,this.g=s[1]*n+s[4]*r+s[7]*i,this.b=s[2]*n+s[5]*r+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new it;it.NAMES=Ny;let BA=0;class Ja extends Fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=ao,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=Of,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(r.blending=this.blending),this.side!==Ci&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==kf&&(r.blendSrc=this.blendSrc),this.blendDst!==Of&&(r.blendDst=this.blendDst),this.blendEquation!==Xi&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ig&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=i(e.textures),o=i(e.images);s.length>0&&(r.textures=s),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let s=0;s!==i;++s)r[s]=n[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ly extends Ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.combine=my,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new G,Ul=new at;let zA=0;class On{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Ug,this.updateRanges=[],this.gpuType=Dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Ul.fromBufferAttribute(this,n),Ul.applyMatrix3(e),this.setXY(n,Ul.x,Ul.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Qo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=an(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qo(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qo(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qo(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),r=an(r,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),r=an(r,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ug&&(e.usage=this.usage),e}}class Iy extends On{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Uy extends On{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ss extends On{constructor(e,n,r){super(new Float32Array(e),n,r)}}let HA=0;const Pn=new At,Cd=new mn,Us=new G,_n=new Za,ta=new Za,Ut=new G;class Wr extends Fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HA++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cy(e)?Uy:Iy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new Fe().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,r){return Pn.makeTranslation(e,n,r),this.applyMatrix4(Pn),this}scale(e,n,r){return Pn.makeScale(e,n,r),this.applyMatrix4(Pn),this}lookAt(e){return Cd.lookAt(e),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];r.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ss(r,3))}else{const r=Math.min(e.length,n.count);for(let i=0;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const s=n[r];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const r=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ta.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(_n.min,ta.min),_n.expandByPoint(Ut),Ut.addVectors(_n.max,ta.max),_n.expandByPoint(Ut)):(_n.expandByPoint(ta.min),_n.expandByPoint(ta.max))}_n.getCenter(r);let i=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),i=Math.max(i,r.distanceToSquared(Ut));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ut.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(e,c),Ut.add(Us)),i=Math.max(i,r.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,i=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*r.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<r.count;P++)a[P]=new G,l[P]=new G;const c=new G,d=new G,f=new G,h=new at,m=new at,v=new at,g=new G,p=new G;function u(P,T,M){c.fromBufferAttribute(r,P),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,M),h.fromBufferAttribute(s,P),m.fromBufferAttribute(s,T),v.fromBufferAttribute(s,M),d.sub(c),f.sub(c),m.sub(h),v.sub(h);const N=1/(m.x*v.y-v.x*m.y);isFinite(N)&&(g.copy(d).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(N),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(N),a[P].add(g),a[T].add(g),a[M].add(g),l[P].add(p),l[T].add(p),l[M].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,T=_.length;P<T;++P){const M=_[P],N=M.start,I=M.count;for(let F=N,X=N+I;F<X;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new G,y=new G,A=new G,C=new G;function b(P){A.fromBufferAttribute(i,P),C.copy(A);const T=a[P];x.copy(T),x.sub(A.multiplyScalar(A.dot(T))).normalize(),y.crossVectors(C,T);const N=y.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,N)}for(let P=0,T=_.length;P<T;++P){const M=_[P],N=M.start,I=M.count;for(let F=N,X=N+I;F<X;F+=3)b(e.getX(F+0)),b(e.getX(F+1)),b(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new On(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let h=0,m=r.count;h<m;h++)r.setXYZ(h,0,0,0);const i=new G,s=new G,o=new G,a=new G,l=new G,c=new G,d=new G,f=new G;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,p),d.subVectors(o,s),f.subVectors(i,s),d.cross(f),a.fromBufferAttribute(r,v),l.fromBufferAttribute(r,g),c.fromBufferAttribute(r,p),a.add(d),l.add(d),c.add(d),r.setXYZ(v,a.x,a.y,a.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)i.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(i,s),d.cross(f),r.setXYZ(h+0,d.x,d.y,d.z),r.setXYZ(h+1,d.x,d.y,d.z),r.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let m=0,v=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*d;for(let u=0;u<d;u++)h[v++]=c[m++]}return new On(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wr,r=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,r);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,r);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $g=new At,ki=new Py,Fl=new gu,Kg=new G,kl=new G,Ol=new G,Bl=new G,Rd=new G,zl=new G,Qg=new G,Hl=new G;class Lr extends mn{constructor(e=new Wr,n=new Ly){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,s=r.morphAttributes.position,o=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){zl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Rd.fromBufferAttribute(f,e),o?zl.addScaledVector(Rd,d):zl.addScaledVector(Rd.sub(n),d))}n.add(zl)}return n}raycast(e,n){const r=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Fl.copy(r.boundingSphere),Fl.applyMatrix4(s),ki.copy(e.ray).recast(e.near),!(Fl.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Fl,Kg)===null||ki.origin.distanceToSquared(Kg)>(e.far-e.near)**2))&&($g.copy(s).invert(),ki.copy(e.ray).applyMatrix4($g),!(r.boundingBox!==null&&ki.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ki)))}_computeIntersections(e,n,r){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=h.length;v<g;v++){const p=h[v],u=o[p.materialIndex],_=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=_,A=x;y<A;y+=3){const C=a.getX(y),b=a.getX(y+1),P=a.getX(y+2);i=Vl(this,u,e,r,c,d,f,C,b,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,n.push(i))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=v,u=g;p<u;p+=3){const _=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=Vl(this,o,e,r,c,d,f,_,x,y),i&&(i.faceIndex=Math.floor(p/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=h.length;v<g;v++){const p=h[v],u=o[p.materialIndex],_=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=_,A=x;y<A;y+=3){const C=y,b=y+1,P=y+2;i=Vl(this,u,e,r,c,d,f,C,b,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,n.push(i))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=v,u=g;p<u;p+=3){const _=p,x=p+1,y=p+2;i=Vl(this,o,e,r,c,d,f,_,x,y),i&&(i.faceIndex=Math.floor(p/3),n.push(i))}}}}function VA(t,e,n,r,i,s,o,a){let l;if(e.side===hn?l=r.intersectTriangle(o,s,i,!0,a):l=r.intersectTriangle(i,s,o,e.side===Ci,a),l===null)return null;Hl.copy(a),Hl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Hl);return c<n.near||c>n.far?null:{distance:c,point:Hl.clone(),object:t}}function Vl(t,e,n,r,i,s,o,a,l,c){t.getVertexPosition(a,kl),t.getVertexPosition(l,Ol),t.getVertexPosition(c,Bl);const d=VA(t,e,n,r,kl,Ol,Bl,Qg);if(d){const f=new G;Zn.getBarycoord(Qg,kl,Ol,Bl,f),i&&(d.uv=Zn.getInterpolatedAttribute(i,a,l,c,f,new at)),s&&(d.uv1=Zn.getInterpolatedAttribute(s,a,l,c,f,new at)),o&&(d.normal=Zn.getInterpolatedAttribute(o,a,l,c,f,new G),d.normal.dot(r.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new G,materialIndex:0};Zn.getNormal(kl,Ol,Bl,h.normal),d.face=h,d.barycoord=f}return d}class el extends Wr{constructor(e=1,n=1,r=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,r,n,e,o,s,0),v("z","y","x",1,-1,r,n,-e,o,s,1),v("x","z","y",1,1,e,r,n,i,o,2),v("x","z","y",1,-1,e,r,-n,i,o,3),v("x","y","z",1,-1,e,n,r,i,s,4),v("x","y","z",-1,-1,e,n,-r,i,s,5),this.setIndex(l),this.setAttribute("position",new ss(c,3)),this.setAttribute("normal",new ss(d,3)),this.setAttribute("uv",new ss(f,2));function v(g,p,u,_,x,y,A,C,b,P,T){const M=y/b,N=A/P,I=y/2,F=A/2,X=C/2,$=b+1,j=P+1;let Q=0,U=0;const Y=new G;for(let J=0;J<j;J++){const oe=J*N-F;for(let Me=0;Me<$;Me++){const $e=Me*M-I;Y[g]=$e*_,Y[p]=oe*x,Y[u]=X,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[p]=0,Y[u]=C>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(Me/b),f.push(1-J/P),Q+=1}}for(let J=0;J<P;J++)for(let oe=0;oe<b;oe++){const Me=h+oe+$*J,$e=h+oe+$*(J+1),q=h+(oe+1)+$*(J+1),ae=h+(oe+1)+$*J;l.push(Me,$e,ae),l.push($e,q,ae),U+=6}a.addGroup(m,U,T),m+=U,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Do(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const r=Do(t[n]);for(const i in r)e[i]=r[i]}return e}function GA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Fy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const WA={clone:Do,merge:Zt};var jA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jA,this.fragmentShader=XA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=GA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?n.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[i]={type:"m4",value:o.toArray()}:n.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class ky extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Nr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new G,Zg=new at,Jg=new at;class Un extends ky{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Mh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mh*2*Math.atan(Math.tan(cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,n){return this.getViewBounds(e,Zg,Jg),n.subVectors(Jg,Zg)}setViewOffset(e,n,r,i,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(cd*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,n-=o.offsetY*r/c,i*=o.width/l,r*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,ks=1;class YA extends mn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Un(Fs,ks,e,n);i.layers=this.layers,this.add(i);const s=new Un(Fs,ks,e,n);s.layers=this.layers,this.add(s);const o=new Un(Fs,ks,e,n);o.layers=this.layers,this.add(o);const a=new Un(Fs,ks,e,n);a.layers=this.layers,this.add(a);const l=new Un(Fs,ks,e,n);l.layers=this.layers,this.add(l);const c=new Un(Fs,ks,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Nr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xc)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,s),e.setRenderTarget(r,1,i),e.render(n,o),e.setRenderTarget(r,2,i),e.render(n,a),e.setRenderTarget(r,3,i),e.render(n,l),e.setRenderTarget(r,4,i),e.render(n,c),r.texture.generateMipmaps=g,e.setRenderTarget(r,5,i),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=v,r.texture.needsPMREMUpdate=!0}}class Oy extends pn{constructor(e=[],n=Co,r,i,s,o,a,l,c,d){super(e,n,r,i,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qA extends ms{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new Oy(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pr}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new el(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:Do(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:hn,blending:wi});s.uniforms.tEquirect.value=n;const o=new Lr(i,s),a=n.minFilter;return n.minFilter===Zi&&(n.minFilter=pr),new YA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,r=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,r,i);e.setRenderTarget(s)}}class Gl extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $A={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=n.getJointPose(g,r),u=this._getHandJoint(c,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($A)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Gl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class KA extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hr,this.environmentIntensity=1,this.environmentRotation=new Hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Dd=new G,QA=new G,ZA=new Fe;class Wi{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=Dd.subVectors(r,n).cross(QA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Dd),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:n.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ZA.getNormalMatrix(e),i=this.coplanarPoint(Dd).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new gu,Wl=new G;class By{constructor(e=new Wi,n=new Wi,r=new Wi,i=new Wi,s=new Wi,o=new Wi){this.planes=[e,n,r,i,s,o]}set(e,n,r,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(r),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Nr){const r=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],d=i[5],f=i[6],h=i[7],m=i[8],v=i[9],g=i[10],p=i[11],u=i[12],_=i[13],x=i[14],y=i[15];if(r[0].setComponents(l-s,h-c,p-m,y-u).normalize(),r[1].setComponents(l+s,h+c,p+m,y+u).normalize(),r[2].setComponents(l+o,h+d,p+v,y+_).normalize(),r[3].setComponents(l-o,h-d,p-v,y-_).normalize(),r[4].setComponents(l-a,h-f,p-g,y-x).normalize(),n===Nr)r[5].setComponents(l+a,h+f,p+g,y+x).normalize();else if(n===Xc)r[5].setComponents(a,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(Wl.x=i.normal.x>0?e.max.x:e.min.x,Wl.y=i.normal.y>0?e.max.y:e.min.y,Wl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zy extends Ja{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ev=new At,Eh=new Py,jl=new gu,Xl=new G;class JA extends mn{constructor(e=new Wr,n=new zy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),jl.copy(r.boundingSphere),jl.applyMatrix4(i),jl.radius+=s,e.ray.intersectsSphere(jl)===!1)return;ev.copy(i).invert(),Eh.copy(e.ray).applyMatrix4(ev);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=r.index,f=r.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=h,g=m;v<g;v++){const p=c.getX(v);Xl.fromBufferAttribute(f,p),tv(Xl,p,l,i,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=h,g=m;v<g;v++)Xl.fromBufferAttribute(f,v),tv(Xl,v,l,i,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function tv(t,e,n,r,i,s,o){const a=Eh.distanceSqToPoint(t);if(a<n){const l=new G;Eh.closestPointToPoint(t,l),l.applyMatrix4(r);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Hy extends pn{constructor(e,n,r=ps,i,s,o,a=nr,l=nr,c,d=ka){if(d!==ka&&d!==Oa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,o,a,l,d,r,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class vu extends Wr{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const s=e/2,o=n/2,a=Math.floor(r),l=Math.floor(i),c=a+1,d=l+1,f=e/a,h=n/l,m=[],v=[],g=[],p=[];for(let u=0;u<d;u++){const _=u*h-o;for(let x=0;x<c;x++){const y=x*f-s;v.push(y,-_,0),g.push(0,0,1),p.push(x/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const x=_+c*u,y=_+c*(u+1),A=_+1+c*(u+1),C=_+1+c*u;m.push(x,y,C),m.push(y,A,C)}this.setIndex(m),this.setAttribute("position",new ss(v,3)),this.setAttribute("normal",new ss(g,3)),this.setAttribute("uv",new ss(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.width,e.height,e.widthSegments,e.heightSegments)}}class eC extends Ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tC extends Ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nC extends ky{constructor(e=-1,n=1,r=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=r-e,o=r+e,a=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class rC extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function nv(t,e,n,r){const i=iC(r);switch(n){case yy:return t*e;case My:return t*e;case Ey:return t*e*2;case wy:return t*e/i.components*i.byteLength;case Up:return t*e/i.components*i.byteLength;case Ty:return t*e*2/i.components*i.byteLength;case Fp:return t*e*2/i.components*i.byteLength;case Sy:return t*e*3/i.components*i.byteLength;case Jn:return t*e*4/i.components*i.byteLength;case kp:return t*e*4/i.components*i.byteLength;case dc:case fc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hc:case pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qf:case Jf:return Math.max(t,16)*Math.max(e,8)/4;case Kf:case Zf:return Math.max(t,8)*Math.max(e,8)/2;case eh:case th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case sh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case dh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case mc:case vh:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*16;case by:case xh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case yh:case Sh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iC(t){switch(t){case zr:case vy:return{byteLength:1,components:1};case Ua:case _y:case $a:return{byteLength:2,components:1};case Lp:case Ip:return{byteLength:2,components:4};case ps:case Np:case Dr:return{byteLength:4,components:1};case xy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vy(){let t=null,e=!1,n=null,r=null;function i(s,o){n(s,o),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function sC(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function r(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<f.length;m++){const v=f[h],g=f[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++h,f[h]=g)}f.length=h+1;for(let m=0,v=f.length;m<v;m++){const g=f[m];t.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var oC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_C=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,SC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,MC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,RC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,DC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,NC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FC="gl_FragColor = linearToOutputTexel( gl_FragColor );",kC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,HC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,GC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$C=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ZC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,JC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_R=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ER=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,UR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,VR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$R=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_P=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:oC,alphahash_pars_fragment:aC,alphamap_fragment:lC,alphamap_pars_fragment:cC,alphatest_fragment:uC,alphatest_pars_fragment:dC,aomap_fragment:fC,aomap_pars_fragment:hC,batching_pars_vertex:pC,batching_vertex:mC,begin_vertex:gC,beginnormal_vertex:vC,bsdfs:_C,iridescence_fragment:xC,bumpmap_pars_fragment:yC,clipping_planes_fragment:SC,clipping_planes_pars_fragment:MC,clipping_planes_pars_vertex:EC,clipping_planes_vertex:wC,color_fragment:TC,color_pars_fragment:bC,color_pars_vertex:AC,color_vertex:CC,common:RC,cube_uv_reflection_fragment:PC,defaultnormal_vertex:DC,displacementmap_pars_vertex:NC,displacementmap_vertex:LC,emissivemap_fragment:IC,emissivemap_pars_fragment:UC,colorspace_fragment:FC,colorspace_pars_fragment:kC,envmap_fragment:OC,envmap_common_pars_fragment:BC,envmap_pars_fragment:zC,envmap_pars_vertex:HC,envmap_physical_pars_fragment:ZC,envmap_vertex:VC,fog_vertex:GC,fog_pars_vertex:WC,fog_fragment:jC,fog_pars_fragment:XC,gradientmap_pars_fragment:YC,lightmap_pars_fragment:qC,lights_lambert_fragment:$C,lights_lambert_pars_fragment:KC,lights_pars_begin:QC,lights_toon_fragment:JC,lights_toon_pars_fragment:eR,lights_phong_fragment:tR,lights_phong_pars_fragment:nR,lights_physical_fragment:rR,lights_physical_pars_fragment:iR,lights_fragment_begin:sR,lights_fragment_maps:oR,lights_fragment_end:aR,logdepthbuf_fragment:lR,logdepthbuf_pars_fragment:cR,logdepthbuf_pars_vertex:uR,logdepthbuf_vertex:dR,map_fragment:fR,map_pars_fragment:hR,map_particle_fragment:pR,map_particle_pars_fragment:mR,metalnessmap_fragment:gR,metalnessmap_pars_fragment:vR,morphinstance_vertex:_R,morphcolor_vertex:xR,morphnormal_vertex:yR,morphtarget_pars_vertex:SR,morphtarget_vertex:MR,normal_fragment_begin:ER,normal_fragment_maps:wR,normal_pars_fragment:TR,normal_pars_vertex:bR,normal_vertex:AR,normalmap_pars_fragment:CR,clearcoat_normal_fragment_begin:RR,clearcoat_normal_fragment_maps:PR,clearcoat_pars_fragment:DR,iridescence_pars_fragment:NR,opaque_fragment:LR,packing:IR,premultiplied_alpha_fragment:UR,project_vertex:FR,dithering_fragment:kR,dithering_pars_fragment:OR,roughnessmap_fragment:BR,roughnessmap_pars_fragment:zR,shadowmap_pars_fragment:HR,shadowmap_pars_vertex:VR,shadowmap_vertex:GR,shadowmask_pars_fragment:WR,skinbase_vertex:jR,skinning_pars_vertex:XR,skinning_vertex:YR,skinnormal_vertex:qR,specularmap_fragment:$R,specularmap_pars_fragment:KR,tonemapping_fragment:QR,tonemapping_pars_fragment:ZR,transmission_fragment:JR,transmission_pars_fragment:eP,uv_pars_fragment:tP,uv_pars_vertex:nP,uv_vertex:rP,worldpos_vertex:iP,background_vert:sP,background_frag:oP,backgroundCube_vert:aP,backgroundCube_frag:lP,cube_vert:cP,cube_frag:uP,depth_vert:dP,depth_frag:fP,distanceRGBA_vert:hP,distanceRGBA_frag:pP,equirect_vert:mP,equirect_frag:gP,linedashed_vert:vP,linedashed_frag:_P,meshbasic_vert:xP,meshbasic_frag:yP,meshlambert_vert:SP,meshlambert_frag:MP,meshmatcap_vert:EP,meshmatcap_frag:wP,meshnormal_vert:TP,meshnormal_frag:bP,meshphong_vert:AP,meshphong_frag:CP,meshphysical_vert:RP,meshphysical_frag:PP,meshtoon_vert:DP,meshtoon_frag:NP,points_vert:LP,points_frag:IP,shadow_vert:UP,shadow_frag:FP,sprite_vert:kP,sprite_frag:OP},ce={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},dr={basic:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new it(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Zt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Zt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new it(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Zt([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Zt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Zt([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Zt([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Zt([ce.common,ce.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Zt([ce.lights,ce.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};dr.physical={uniforms:Zt([dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Yl={r:0,b:0,g:0},Bi=new Hr,BP=new At;function zP(t,e,n,r,i,s,o){const a=new it(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function v(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function g(x){let y=!1;const A=v(x);A===null?u(a,l):A&&A.isColor&&(u(A,1),y=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?r.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(x,y){const A=v(y);A&&(A.isCubeTexture||A.mapping===mu)?(d===void 0&&(d=new Lr(new el(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Do(dr.backgroundCube.uniforms),vertexShader:dr.backgroundCube.vertexShader,fragmentShader:dr.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Bi.copy(y.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(BP.makeRotationFromEuler(Bi)),d.material.toneMapped=Qe.getTransfer(A.colorSpace)!==ot,(f!==A||h!==A.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=A,h=A.version,m=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Lr(new vu(2,2),new Ri({name:"BackgroundMaterial",uniforms:Do(dr.background.uniforms),vertexShader:dr.background.vertexShader,fragmentShader:dr.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(A.colorSpace)!==ot,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=A,h=A.version,m=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,y){x.getRGB(Yl,Fy(t)),r.buffers.color.setClear(Yl.r,Yl.g,Yl.b,y,o)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:g,addToRenderList:p,dispose:_}}function HP(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},i=h(null);let s=i,o=!1;function a(M,N,I,F,X){let $=!1;const j=f(F,I,N);s!==j&&(s=j,c(s.object)),$=m(M,F,I,X),$&&v(M,F,I,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(M,N,I,F),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function f(M,N,I){const F=I.wireframe===!0;let X=r[M.id];X===void 0&&(X={},r[M.id]=X);let $=X[N.id];$===void 0&&($={},X[N.id]=$);let j=$[F];return j===void 0&&(j=h(l()),$[F]=j),j}function h(M){const N=[],I=[],F=[];for(let X=0;X<n;X++)N[X]=0,I[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:I,attributeDivisors:F,object:M,attributes:{},index:null}}function m(M,N,I,F){const X=s.attributes,$=N.attributes;let j=0;const Q=I.getAttributes();for(const U in Q)if(Q[U].location>=0){const J=X[U];let oe=$[U];if(oe===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),J===void 0||J.attribute!==oe||oe&&J.data!==oe.data)return!0;j++}return s.attributesNum!==j||s.index!==F}function v(M,N,I,F){const X={},$=N.attributes;let j=0;const Q=I.getAttributes();for(const U in Q)if(Q[U].location>=0){let J=$[U];J===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const oe={};oe.attribute=J,J&&J.data&&(oe.data=J.data),X[U]=oe,j++}s.attributes=X,s.attributesNum=j,s.index=F}function g(){const M=s.newAttributes;for(let N=0,I=M.length;N<I;N++)M[N]=0}function p(M){u(M,0)}function u(M,N){const I=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;I[M]=1,F[M]===0&&(t.enableVertexAttribArray(M),F[M]=1),X[M]!==N&&(t.vertexAttribDivisor(M,N),X[M]=N)}function _(){const M=s.newAttributes,N=s.enabledAttributes;for(let I=0,F=N.length;I<F;I++)N[I]!==M[I]&&(t.disableVertexAttribArray(I),N[I]=0)}function x(M,N,I,F,X,$,j){j===!0?t.vertexAttribIPointer(M,N,I,X,$):t.vertexAttribPointer(M,N,I,F,X,$)}function y(M,N,I,F){g();const X=F.attributes,$=I.getAttributes(),j=N.defaultAttributeValues;for(const Q in $){const U=$[Q];if(U.location>=0){let Y=X[Q];if(Y===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor)),Y!==void 0){const J=Y.normalized,oe=Y.itemSize,Me=e.get(Y);if(Me===void 0)continue;const $e=Me.buffer,q=Me.type,ae=Me.bytesPerElement,me=q===t.INT||q===t.UNSIGNED_INT||Y.gpuType===Np;if(Y.isInterleavedBufferAttribute){const le=Y.data,Ce=le.stride,Ze=Y.offset;if(le.isInstancedInterleavedBuffer){for(let Pe=0;Pe<U.locationSize;Pe++)u(U.location+Pe,le.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Pe=0;Pe<U.locationSize;Pe++)p(U.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let Pe=0;Pe<U.locationSize;Pe++)x(U.location+Pe,oe/U.locationSize,q,J,Ce*ae,(Ze+oe/U.locationSize*Pe)*ae,me)}else{if(Y.isInstancedBufferAttribute){for(let le=0;le<U.locationSize;le++)u(U.location+le,Y.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let le=0;le<U.locationSize;le++)p(U.location+le);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let le=0;le<U.locationSize;le++)x(U.location+le,oe/U.locationSize,q,J,oe*ae,oe/U.locationSize*le*ae,me)}}else if(j!==void 0){const J=j[Q];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(U.location,J);break;case 3:t.vertexAttrib3fv(U.location,J);break;case 4:t.vertexAttrib4fv(U.location,J);break;default:t.vertexAttrib1fv(U.location,J)}}}}_()}function A(){P();for(const M in r){const N=r[M];for(const I in N){const F=N[I];for(const X in F)d(F[X].object),delete F[X];delete N[I]}delete r[M]}}function C(M){if(r[M.id]===void 0)return;const N=r[M.id];for(const I in N){const F=N[I];for(const X in F)d(F[X].object),delete F[X];delete N[I]}delete r[M.id]}function b(M){for(const N in r){const I=r[N];if(I[M.id]===void 0)continue;const F=I[M.id];for(const X in F)d(F[X].object),delete F[X];delete I[M.id]}}function P(){T(),o=!0,s!==i&&(s=i,c(s.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:_}}function VP(t,e,n){let r;function i(c){r=c}function s(c,d){t.drawArrays(r,c,d),n.update(d,r,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(r,c,d,f),n.update(d,r,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,d,0,f);let m=0;for(let v=0;v<f;v++)m+=d[v];n.update(m,r,1)}function l(c,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],d[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(r,c,0,d,0,h,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g]*h[g];n.update(v,r,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function GP(t,e,n,r){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==Jn&&r.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===$a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==zr&&r.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Dr&&!P)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:C}}function WP(t){const e=this;let n=null,r=0,i=!1,s=!1;const o=new Wi,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||r!==0||i;return i=h,r=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!i||v===null||v.length===0||s&&!p)s?d(null):c();else{const _=s?0:r,x=_*4;let y=u.clippingState||null;l.value=y,y=d(v,h,x,m);for(let A=0;A!==x;++A)y[A]=n[A];u.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function d(f,h,m,v){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const u=m+g*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,y=m;x!==g;++x,y+=4)o.copy(f[x]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function jP(t){let e=new WeakMap;function n(o,a){return a===Xf?o.mapping=Co:a===Yf&&(o.mapping=Ro),o}function r(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xf||a===Yf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qA(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",i),n(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}const Zs=4,rv=[.125,.215,.35,.446,.526,.582],Yi=20,Nd=new nC,iv=new it;let Ld=null,Id=0,Ud=0,Fd=!1;const ji=(1+Math.sqrt(5))/2,Os=1/ji,sv=[new G(-ji,Os,0),new G(ji,Os,0),new G(-Os,0,ji),new G(Os,0,ji),new G(0,ji,-Os),new G(0,ji,Os),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],XP=new G;class ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100,s={}){const{size:o=256,position:a=XP}=s;Ld=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,i,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ld,Id,Ud),this._renderer.xr.enabled=Fd,e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Co||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ld=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:pr,minFilter:pr,generateMipmaps:!1,type:$a,format:Jn,colorSpace:Po,depthBuffer:!1},i=av(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(e,n,r);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YP(s)),this._blurMaterial=qP(s,e,n)}return i}_compileMaterial(e){const n=new Lr(this._lodPlanes[0],e);this._renderer.compile(n,Nd)}_sceneToCubeUV(e,n,r,i,s){const l=new Un(90,1,n,r),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(iv),f.toneMapping=Ti,f.autoClear=!1;const v=new Ly({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Lr(new el,v);let p=!1;const u=e.background;u?u.isColor&&(v.color.copy(u),e.background=null,p=!0):(v.color.copy(iv),p=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[_],s.y,s.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[_]));const y=this._cubeSize;ql(i,x*y,_>2?y:0,y,y),f.setRenderTarget(i),p&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=m,f.autoClear=h,e.background=u}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===Co||e.mapping===Ro;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lv());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Lr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ql(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(o,Nd)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=sv[(i-s-1)%sv.length];this._blur(e,s-1,s,o,a)}n.autoClear=r}_blur(e,n,r,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,r,i,"latitudinal",s),this._halfBlur(o,e,r,r,i,"longitudinal",s)}_halfBlur(e,n,r,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Lr(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[r]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Yi-1),g=s/v,p=isFinite(s)?1+Math.floor(d*g):Yi;p>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yi}`);const u=[];let _=0;for(let b=0;b<Yi;++b){const P=b/g,T=Math.exp(-P*P/2);u.push(T),b===0?_+=T:b<p&&(_+=2*T)}for(let b=0;b<u.length;b++)u[b]=u[b]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-r;const y=this._sizeLods[i],A=3*y*(i>x-Zs?i-x+Zs:0),C=4*(this._cubeSize-y);ql(n,A,C,3*y,2*y),l.setRenderTarget(n),l.render(f,Nd)}}function YP(t){const e=[],n=[],r=[];let i=t;const s=t-Zs+1+rv.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);n.push(a);let l=1/a;o>t-Zs?l=rv[o-t+Zs-1]:o===0&&(l=0),r.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,v=6,g=3,p=2,u=1,_=new Float32Array(g*v*m),x=new Float32Array(p*v*m),y=new Float32Array(u*v*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,P=C>2?0:-1,T=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];_.set(T,g*v*C),x.set(h,p*v*C);const M=[C,C,C,C,C,C];y.set(M,u*v*C)}const A=new Wr;A.setAttribute("position",new On(_,g)),A.setAttribute("uv",new On(x,p)),A.setAttribute("faceIndex",new On(y,u)),e.push(A),i>Zs&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function av(t,e,n){const r=new ms(t,e,n);return r.texture.mapping=mu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ql(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function qP(t,e,n){const r=new Float32Array(Yi),i=new G(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function lv(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function cv(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Bp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $P(t){let e=new WeakMap,n=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xf||l===Yf,d=l===Co||l===Ro;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new ov(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&i(m)?(n===null&&(n=new ov(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function KP(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const i=n(r);return i===null&&gc("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function QP(t,e,n,r){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete i[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER)}function c(f){const h=[],m=f.index,v=f.attributes.position;let g=0;if(m!==null){const _=m.array;g=m.version;for(let x=0,y=_.length;x<y;x+=3){const A=_[x+0],C=_[x+1],b=_[x+2];h.push(A,C,C,b,b,A)}}else if(v!==void 0){const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const A=x+0,C=x+1,b=x+2;h.push(A,C,C,b,b,A)}}else return;const p=new(Cy(h)?Uy:Iy)(h,1);p.version=g;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function ZP(t,e,n){let r;function i(h){r=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(r,m,s,h*o),n.update(m,r,1)}function c(h,m,v){v!==0&&(t.drawElementsInstanced(r,m,s,h*o,v),n.update(m,r,v))}function d(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,s,h,0,v);let p=0;for(let u=0;u<v;u++)p+=m[u];n.update(p,r,1)}function f(h,m,v,g){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<h.length;u++)c(h[u]/o,m[u],g[u]);else{p.multiDrawElementsInstancedWEBGL(r,m,0,s,h,0,g,0,v);let u=0;for(let _=0;_<v;_++)u+=m[_]*g[_];n.update(u,r,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function JP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function e2(t,e,n){const r=new WeakMap,i=new bt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=r.get(a);if(h===void 0||h.count!==f){let M=function(){P.dispose(),r.delete(a),a.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),g===!0&&(y=2),p===!0&&(y=3);let A=a.attributes.position.count*y,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*C*4*f),P=new Ry(b,A,C,f);P.type=Dr,P.needsUpdate=!0;const T=y*4;for(let N=0;N<f;N++){const I=u[N],F=_[N],X=x[N],$=A*C*4*N;for(let j=0;j<I.count;j++){const Q=j*T;v===!0&&(i.fromBufferAttribute(I,j),b[$+Q+0]=i.x,b[$+Q+1]=i.y,b[$+Q+2]=i.z,b[$+Q+3]=0),g===!0&&(i.fromBufferAttribute(F,j),b[$+Q+4]=i.x,b[$+Q+5]=i.y,b[$+Q+6]=i.z,b[$+Q+7]=0),p===!0&&(i.fromBufferAttribute(X,j),b[$+Q+8]=i.x,b[$+Q+9]=i.y,b[$+Q+10]=i.z,b[$+Q+11]=X.itemSize===4?i.w:1)}}h={count:f,texture:P,size:new at(A,C)},r.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function t2(t,e,n,r){let i=new WeakMap;function s(l){const c=r.render.frame,d=l.geometry,f=e.get(l,d);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Gy=new pn,uv=new Hy(1,1),Wy=new Ry,jy=new DA,Xy=new Oy,dv=[],fv=[],hv=new Float32Array(16),pv=new Float32Array(9),mv=new Float32Array(4);function ko(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let s=dv[i];if(s===void 0&&(s=new Float32Array(i),dv[i]=s),e!==0){r.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function _u(t,e){let n=fv[e];n===void 0&&(n=new Int32Array(e),fv[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function n2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function r2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function s2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function o2(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,r))return;mv.set(r),t.uniformMatrix2fv(this.addr,!1,mv),It(n,r)}}function a2(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,r))return;pv.set(r),t.uniformMatrix3fv(this.addr,!1,pv),It(n,r)}}function l2(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,r))return;hv.set(r),t.uniformMatrix4fv(this.addr,!1,hv),It(n,r)}}function c2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function u2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function d2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function f2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function h2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function p2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function m2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function g2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function v2(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);let s;this.type===t.SAMPLER_2D_SHADOW?(uv.compareFunction=Ay,s=uv):s=Gy,n.setTexture2D(e||s,i)}function _2(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||jy,i)}function x2(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||Xy,i)}function y2(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||Wy,i)}function S2(t){switch(t){case 5126:return n2;case 35664:return r2;case 35665:return i2;case 35666:return s2;case 35674:return o2;case 35675:return a2;case 35676:return l2;case 5124:case 35670:return c2;case 35667:case 35671:return u2;case 35668:case 35672:return d2;case 35669:case 35673:return f2;case 5125:return h2;case 36294:return p2;case 36295:return m2;case 36296:return g2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return _2;case 35680:case 36300:case 36308:case 36293:return x2;case 36289:case 36303:case 36311:case 36292:return y2}}function M2(t,e){t.uniform1fv(this.addr,e)}function E2(t,e){const n=ko(e,this.size,2);t.uniform2fv(this.addr,n)}function w2(t,e){const n=ko(e,this.size,3);t.uniform3fv(this.addr,n)}function T2(t,e){const n=ko(e,this.size,4);t.uniform4fv(this.addr,n)}function b2(t,e){const n=ko(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function A2(t,e){const n=ko(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function C2(t,e){const n=ko(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function R2(t,e){t.uniform1iv(this.addr,e)}function P2(t,e){t.uniform2iv(this.addr,e)}function D2(t,e){t.uniform3iv(this.addr,e)}function N2(t,e){t.uniform4iv(this.addr,e)}function L2(t,e){t.uniform1uiv(this.addr,e)}function I2(t,e){t.uniform2uiv(this.addr,e)}function U2(t,e){t.uniform3uiv(this.addr,e)}function F2(t,e){t.uniform4uiv(this.addr,e)}function k2(t,e,n){const r=this.cache,i=e.length,s=_u(n,i);Lt(r,s)||(t.uniform1iv(this.addr,s),It(r,s));for(let o=0;o!==i;++o)n.setTexture2D(e[o]||Gy,s[o])}function O2(t,e,n){const r=this.cache,i=e.length,s=_u(n,i);Lt(r,s)||(t.uniform1iv(this.addr,s),It(r,s));for(let o=0;o!==i;++o)n.setTexture3D(e[o]||jy,s[o])}function B2(t,e,n){const r=this.cache,i=e.length,s=_u(n,i);Lt(r,s)||(t.uniform1iv(this.addr,s),It(r,s));for(let o=0;o!==i;++o)n.setTextureCube(e[o]||Xy,s[o])}function z2(t,e,n){const r=this.cache,i=e.length,s=_u(n,i);Lt(r,s)||(t.uniform1iv(this.addr,s),It(r,s));for(let o=0;o!==i;++o)n.setTexture2DArray(e[o]||Wy,s[o])}function H2(t){switch(t){case 5126:return M2;case 35664:return E2;case 35665:return w2;case 35666:return T2;case 35674:return b2;case 35675:return A2;case 35676:return C2;case 5124:case 35670:return R2;case 35667:case 35671:return P2;case 35668:case 35672:return D2;case 35669:case 35673:return N2;case 5125:return L2;case 36294:return I2;case 36295:return U2;case 36296:return F2;case 35678:case 36198:case 36298:case 36306:case 35682:return k2;case 35679:case 36299:case 36307:return O2;case 35680:case 36300:case 36308:case 36293:return B2;case 36289:case 36303:case 36311:case 36292:return z2}}class V2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=S2(n.type)}}class G2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=H2(n.type)}}class W2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,n[a.id],r)}}}const kd=/(\w+)(\])?(\[|\.)?/g;function gv(t,e){t.seq.push(e),t.map[e.id]=e}function j2(t,e,n){const r=t.name,i=r.length;for(kd.lastIndex=0;;){const s=kd.exec(r),o=kd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){gv(n,c===void 0?new V2(a,t,e):new G2(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new W2(a),gv(n,f)),n=f}}}class vc{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const s=e.getActiveUniform(n,i),o=e.getUniformLocation(n,s.name);j2(s,o,this)}}setValue(e,n,r,i){const s=this.map[n];s!==void 0&&s.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in n&&r.push(o)}return r}}function vv(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const X2=37297;let Y2=0;function q2(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=i;o<s;o++){const a=o+1;r.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return r.join(`
`)}const _v=new Fe;function $2(t){Qe._getMatrix(_v,Qe.workingColorSpace,t);const e=`mat3( ${_v.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case jc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function xv(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+i+`

`+q2(t.getShaderSource(e),o)}else return i}function K2(t,e){const n=$2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Q2(t,e){let n;switch(e){case nA:n="Linear";break;case rA:n="Reinhard";break;case iA:n="Cineon";break;case sA:n="ACESFilmic";break;case aA:n="AgX";break;case lA:n="Neutral";break;case oA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $l=new G;function Z2(){Qe.getLuminanceCoefficients($l);const t=$l.x.toFixed(4),e=$l.y.toFixed(4),n=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function eD(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function tD(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const s=t.getActiveAttrib(e,i),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function oa(t){return t!==""}function yv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nD=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(t){return t.replace(nD,iD)}const rD=new Map;function iD(t,e){let n=Be[e];if(n===void 0){const r=rD.get(e);if(r!==void 0)n=Be[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return wh(n)}const sD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mv(t){return t.replace(sD,oD)}function oD(t,e,n,r){let i="";for(let s=parseInt(e);s<parseInt(n);s++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ev(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aD(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===py?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ub?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===wr&&(e="SHADOWMAP_TYPE_VSM"),e}function lD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Co:case Ro:e="ENVMAP_TYPE_CUBE";break;case mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ro:e="ENVMAP_MODE_REFRACTION";break}return e}function uD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case my:e="ENVMAP_BLENDING_MULTIPLY";break;case eA:e="ENVMAP_BLENDING_MIX";break;case tA:e="ENVMAP_BLENDING_ADD";break}return e}function dD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function fD(t,e,n,r){const i=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=aD(n),c=lD(n),d=cD(n),f=uD(n),h=dD(n),m=J2(n),v=eD(s),g=i.createProgram();let p,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(oa).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(oa).join(`
`),u.length>0&&(u+=`
`)):(p=[Ev(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),u=[Ev(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ti?"#define TONE_MAPPING":"",n.toneMapping!==Ti?Be.tonemapping_pars_fragment:"",n.toneMapping!==Ti?Q2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,K2("linearToOutputTexel",n.outputColorSpace),Z2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oa).join(`
`)),o=wh(o),o=yv(o,n),o=Sv(o,n),a=wh(a),a=yv(a,n),a=Sv(a,n),o=Mv(o),a=Mv(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=_+p+o,y=_+u+a,A=vv(i,i.VERTEX_SHADER,x),C=vv(i,i.FRAGMENT_SHADER,y);i.attachShader(g,A),i.attachShader(g,C),n.index0AttributeName!==void 0?i.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(N){if(t.debug.checkShaderErrors){const I=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(A).trim(),X=i.getShaderInfoLog(C).trim();let $=!0,j=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,g,A,C);else{const Q=xv(i,A,"vertex"),U=xv(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+Q+`
`+U)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||X==="")&&(j=!1);j&&(N.diagnostics={runnable:$,programLog:I,vertexShader:{log:F,prefix:p},fragmentShader:{log:X,prefix:u}})}i.deleteShader(A),i.deleteShader(C),P=new vc(i,g),T=tD(i,g)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,X2)),M},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Y2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=C,this}let hD=0;class pD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),s=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new mD(e),n.set(e,r)),r}}class mD{constructor(e){this.id=hD++,this.code=e,this.usedTimes=0}}function gD(t,e,n,r,i,s,o){const a=new Dy,l=new pD,c=new Set,d=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,M,N,I,F){const X=I.fog,$=F.geometry,j=T.isMeshStandardMaterial?I.environment:null,Q=(T.isMeshStandardMaterial?n:e).get(T.envMap||j),U=Q&&Q.mapping===mu?Q.image.height:null,Y=v[T.type];T.precision!==null&&(m=i.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const J=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=J!==void 0?J.length:0;let Me=0;$.morphAttributes.position!==void 0&&(Me=1),$.morphAttributes.normal!==void 0&&(Me=2),$.morphAttributes.color!==void 0&&(Me=3);let $e,q,ae,me;if(Y){const nt=dr[Y];$e=nt.vertexShader,q=nt.fragmentShader}else $e=T.vertexShader,q=T.fragmentShader,l.update(T),ae=l.getVertexShaderID(T),me=l.getFragmentShaderID(T);const le=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),Ze=F.isInstancedMesh===!0,Pe=F.isBatchedMesh===!0,wt=!!T.map,gt=!!T.matcap,Ve=!!Q,L=!!T.aoMap,An=!!T.lightMap,je=!!T.bumpMap,Ge=!!T.normalMap,Te=!!T.displacementMap,ut=!!T.emissiveMap,we=!!T.metalnessMap,R=!!T.roughnessMap,S=T.anisotropy>0,z=T.clearcoat>0,ee=T.dispersion>0,ne=T.iridescence>0,K=T.sheen>0,Ee=T.transmission>0,de=S&&!!T.anisotropyMap,_e=z&&!!T.clearcoatMap,Xe=z&&!!T.clearcoatNormalMap,se=z&&!!T.clearcoatRoughnessMap,xe=ne&&!!T.iridescenceMap,Re=ne&&!!T.iridescenceThicknessMap,Ne=K&&!!T.sheenColorMap,ye=K&&!!T.sheenRoughnessMap,We=!!T.specularMap,ke=!!T.specularColorMap,lt=!!T.specularIntensityMap,k=Ee&&!!T.transmissionMap,fe=Ee&&!!T.thicknessMap,W=!!T.gradientMap,te=!!T.alphaMap,pe=T.alphaTest>0,he=!!T.alphaHash,Ie=!!T.extensions;let yt=Ti;T.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(yt=t.toneMapping);const Vt={shaderID:Y,shaderType:T.type,shaderName:T.name,vertexShader:$e,fragmentShader:q,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Pe,batchingColor:Pe&&F._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&F.instanceColor!==null,instancingMorph:Ze&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Po,alphaToCoverage:!!T.alphaToCoverage,map:wt,matcap:gt,envMap:Ve,envMapMode:Ve&&Q.mapping,envMapCubeUVHeight:U,aoMap:L,lightMap:An,bumpMap:je,normalMap:Ge,displacementMap:h&&Te,emissiveMap:ut,normalMapObjectSpace:Ge&&T.normalMapType===hA,normalMapTangentSpace:Ge&&T.normalMapType===fA,metalnessMap:we,roughnessMap:R,anisotropy:S,anisotropyMap:de,clearcoat:z,clearcoatMap:_e,clearcoatNormalMap:Xe,clearcoatRoughnessMap:se,dispersion:ee,iridescence:ne,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:K,sheenColorMap:Ne,sheenRoughnessMap:ye,specularMap:We,specularColorMap:ke,specularIntensityMap:lt,transmission:Ee,transmissionMap:k,thicknessMap:fe,gradientMap:W,opaque:T.transparent===!1&&T.blending===ao&&T.alphaToCoverage===!1,alphaMap:te,alphaTest:pe,alphaHash:he,combine:T.combine,mapUv:wt&&g(T.map.channel),aoMapUv:L&&g(T.aoMap.channel),lightMapUv:An&&g(T.lightMap.channel),bumpMapUv:je&&g(T.bumpMap.channel),normalMapUv:Ge&&g(T.normalMap.channel),displacementMapUv:Te&&g(T.displacementMap.channel),emissiveMapUv:ut&&g(T.emissiveMap.channel),metalnessMapUv:we&&g(T.metalnessMap.channel),roughnessMapUv:R&&g(T.roughnessMap.channel),anisotropyMapUv:de&&g(T.anisotropyMap.channel),clearcoatMapUv:_e&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(T.sheenRoughnessMap.channel),specularMapUv:We&&g(T.specularMap.channel),specularColorMapUv:ke&&g(T.specularColorMap.channel),specularIntensityMapUv:lt&&g(T.specularIntensityMap.channel),transmissionMapUv:k&&g(T.transmissionMap.channel),thicknessMapUv:fe&&g(T.thicknessMap.channel),alphaMapUv:te&&g(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ge||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(wt||te),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ce,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:wt&&T.map.isVideoTexture===!0&&Qe.getTransfer(T.map.colorSpace)===ot,decodeVideoTextureEmissive:ut&&T.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(T.emissiveMap.colorSpace)===ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Cr,flipSided:T.side===hn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ie&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&T.extensions.multiDraw===!0||Pe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function u(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const N in T.defines)M.push(N),M.push(T.defines[N]);return T.isRawShaderMaterial===!1&&(_(M,T),x(M,T),M.push(t.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function _(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function x(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const M=v[T.type];let N;if(M){const I=dr[M];N=WA.clone(I.uniforms)}else N=T.uniforms;return N}function A(T,M){let N;for(let I=0,F=d.length;I<F;I++){const X=d[I];if(X.cacheKey===M){N=X,++N.usedTimes;break}}return N===void 0&&(N=new fD(t,M,T,s),d.push(N)),N}function C(T){if(--T.usedTimes===0){const M=d.indexOf(T);d[M]=d[d.length-1],d.pop(),T.destroy()}}function b(T){l.remove(T)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:A,releaseProgram:C,releaseShaderCache:b,programs:d,dispose:P}}function vD(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function r(o){t.delete(o)}function i(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:r,update:i,dispose:s}}function _D(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function wv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Tv(){const t=[];let e=0;const n=[],r=[],i=[];function s(){e=0,n.length=0,r.length=0,i.length=0}function o(f,h,m,v,g,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:g,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=g,u.group=p),e++,u}function a(f,h,m,v,g,p){const u=o(f,h,m,v,g,p);m.transmission>0?r.push(u):m.transparent===!0?i.push(u):n.push(u)}function l(f,h,m,v,g,p){const u=o(f,h,m,v,g,p);m.transmission>0?r.unshift(u):m.transparent===!0?i.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||_D),r.length>1&&r.sort(h||wv),i.length>1&&i.sort(h||wv)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:r,transparent:i,init:s,push:a,unshift:l,finish:d,sort:c}}function xD(){let t=new WeakMap;function e(r,i){const s=t.get(r);let o;return s===void 0?(o=new Tv,t.set(r,[o])):i>=s.length?(o=new Tv,s.push(o)):o=s[i],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function yD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new it};break;case"SpotLight":n={position:new G,direction:new G,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function SD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let MD=0;function ED(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function wD(t){const e=new yD,n=SD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new G);const i=new G,s=new At,o=new At;function a(c){let d=0,f=0,h=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let m=0,v=0,g=0,p=0,u=0,_=0,x=0,y=0,A=0,C=0,b=0;c.sort(ED);for(let T=0,M=c.length;T<M;T++){const N=c[T],I=N.color,F=N.intensity,X=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=I.r*F,f+=I.g*F,h+=I.b*F;else if(N.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(N.sh.coefficients[j],F);b++}else if(N.isDirectionalLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,U=n.get(N);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,r.directionalShadow[m]=U,r.directionalShadowMap[m]=$,r.directionalShadowMatrix[m]=N.shadow.matrix,_++}r.directional[m]=j,m++}else if(N.isSpotLight){const j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(I).multiplyScalar(F),j.distance=X,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,r.spot[g]=j;const Q=N.shadow;if(N.map&&(r.spotLightMap[A]=N.map,A++,Q.updateMatrices(N),N.castShadow&&C++),r.spotLightMatrix[g]=Q.matrix,N.castShadow){const U=n.get(N);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,r.spotShadow[g]=U,r.spotShadowMap[g]=$,y++}g++}else if(N.isRectAreaLight){const j=e.get(N);j.color.copy(I).multiplyScalar(F),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),r.rectArea[p]=j,p++}else if(N.isPointLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){const Q=N.shadow,U=n.get(N);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,U.shadowCameraNear=Q.camera.near,U.shadowCameraFar=Q.camera.far,r.pointShadow[v]=U,r.pointShadowMap[v]=$,r.pointShadowMatrix[v]=N.shadow.matrix,x++}r.point[v]=j,v++}else if(N.isHemisphereLight){const j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(F),j.groundColor.copy(N.groundColor).multiplyScalar(F),r.hemi[u]=j,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2)),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=h;const P=r.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==u||P.numDirectionalShadows!==_||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==A||P.numLightProbes!==b)&&(r.directional.length=m,r.spot.length=g,r.rectArea.length=p,r.point.length=v,r.hemi.length=u,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=y+A-C,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=b,P.directionalLength=m,P.pointLength=v,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=u,P.numDirectionalShadows=_,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=A,P.numLightProbes=b,r.version=MD++)}function l(c,d){let f=0,h=0,m=0,v=0,g=0;const p=d.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const x=c[u];if(x.isDirectionalLight){const y=r.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(x.isSpotLight){const y=r.spot[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const y=r.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const y=r.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const y=r.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:r}}function bv(t){const e=new wD(t),n=[],r=[];function i(d){c.camera=d,n.length=0,r.length=0}function s(d){n.push(d)}function o(d){r.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function TD(t){let e=new WeakMap;function n(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new bv(t),e.set(i,[a])):s>=o.length?(a=new bv(t),o.push(a)):a=o[s],a}function r(){e=new WeakMap}return{get:n,dispose:r}}const bD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CD(t,e,n){let r=new By;const i=new at,s=new at,o=new bt,a=new eC({depthPacking:dA}),l=new tC,c={},d=n.maxTextureSize,f={[Ci]:hn,[hn]:Ci,[Cr]:Cr},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:bD,fragmentShader:AD}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Wr;v.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Lr(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=py;let u=this.type;this.render=function(C,b,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),M=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),I=t.state;I.setBlending(wi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=u!==wr&&this.type===wr,X=u===wr&&this.type!==wr;for(let $=0,j=C.length;$<j;$++){const Q=C[$],U=Q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const Y=U.getFrameExtents();if(i.multiply(Y),s.copy(U.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/Y.x),i.x=s.x*Y.x,U.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/Y.y),i.y=s.y*Y.y,U.mapSize.y=s.y)),U.map===null||F===!0||X===!0){const oe=this.type!==wr?{minFilter:nr,magFilter:nr}:{};U.map!==null&&U.map.dispose(),U.map=new ms(i.x,i.y,oe),U.map.texture.name=Q.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const J=U.getViewportCount();for(let oe=0;oe<J;oe++){const Me=U.getViewport(oe);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),I.viewport(o),U.updateMatrices(Q,oe),r=U.getFrustum(),y(b,P,U.camera,Q,this.type)}U.isPointLightShadow!==!0&&this.type===wr&&_(U,P),U.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(T,M,N)};function _(C,b){const P=e.update(g);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ms(i.x,i.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,P,h,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,P,m,g,null)}function x(C,b,P,T){let M=null;const N=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)M=N;else if(M=P.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=M.uuid,F=b.uuid;let X=c[I];X===void 0&&(X={},c[I]=X);let $=X[F];$===void 0&&($=M.clone(),X[F]=$,b.addEventListener("dispose",A)),M=$}if(M.visible=b.visible,M.wireframe=b.wireframe,T===wr?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=t.properties.get(M);I.light=P}return M}function y(C,b,P,T,M){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===wr)&&(!C.frustumCulled||r.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const F=e.update(C),X=C.material;if(Array.isArray(X)){const $=F.groups;for(let j=0,Q=$.length;j<Q;j++){const U=$[j],Y=X[U.materialIndex];if(Y&&Y.visible){const J=x(C,Y,T,M);C.onBeforeShadow(t,C,b,P,F,J,U),t.renderBufferDirect(P,null,F,J,C,U),C.onAfterShadow(t,C,b,P,F,J,U)}}}else if(X.visible){const $=x(C,X,T,M);C.onBeforeShadow(t,C,b,P,F,$,null),t.renderBufferDirect(P,null,F,$,C,null),C.onAfterShadow(t,C,b,P,F,$,null)}}const I=C.children;for(let F=0,X=I.length;F<X;F++)y(I[F],b,P,T,M)}function A(C){C.target.removeEventListener("dispose",A);for(const P in c){const T=c[P],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const RD={[Bf]:zf,[Hf]:Wf,[Vf]:jf,[Ao]:Gf,[zf]:Bf,[Wf]:Hf,[jf]:Vf,[Gf]:Ao};function PD(t,e){function n(){let k=!1;const fe=new bt;let W=null;const te=new bt(0,0,0,0);return{setMask:function(pe){W!==pe&&!k&&(t.colorMask(pe,pe,pe,pe),W=pe)},setLocked:function(pe){k=pe},setClear:function(pe,he,Ie,yt,Vt){Vt===!0&&(pe*=yt,he*=yt,Ie*=yt),fe.set(pe,he,Ie,yt),te.equals(fe)===!1&&(t.clearColor(pe,he,Ie,yt),te.copy(fe))},reset:function(){k=!1,W=null,te.set(-1,0,0,0)}}}function r(){let k=!1,fe=!1,W=null,te=null,pe=null;return{setReversed:function(he){if(fe!==he){const Ie=e.get("EXT_clip_control");he?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),fe=he;const yt=pe;pe=null,this.setClear(yt)}},getReversed:function(){return fe},setTest:function(he){he?le(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(he){W!==he&&!k&&(t.depthMask(he),W=he)},setFunc:function(he){if(fe&&(he=RD[he]),te!==he){switch(he){case Bf:t.depthFunc(t.NEVER);break;case zf:t.depthFunc(t.ALWAYS);break;case Hf:t.depthFunc(t.LESS);break;case Ao:t.depthFunc(t.LEQUAL);break;case Vf:t.depthFunc(t.EQUAL);break;case Gf:t.depthFunc(t.GEQUAL);break;case Wf:t.depthFunc(t.GREATER);break;case jf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=he}},setLocked:function(he){k=he},setClear:function(he){pe!==he&&(fe&&(he=1-he),t.clearDepth(he),pe=he)},reset:function(){k=!1,W=null,te=null,pe=null,fe=!1}}}function i(){let k=!1,fe=null,W=null,te=null,pe=null,he=null,Ie=null,yt=null,Vt=null;return{setTest:function(nt){k||(nt?le(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(nt){fe!==nt&&!k&&(t.stencilMask(nt),fe=nt)},setFunc:function(nt,Hn,vr){(W!==nt||te!==Hn||pe!==vr)&&(t.stencilFunc(nt,Hn,vr),W=nt,te=Hn,pe=vr)},setOp:function(nt,Hn,vr){(he!==nt||Ie!==Hn||yt!==vr)&&(t.stencilOp(nt,Hn,vr),he=nt,Ie=Hn,yt=vr)},setLocked:function(nt){k=nt},setClear:function(nt){Vt!==nt&&(t.clearStencil(nt),Vt=nt)},reset:function(){k=!1,fe=null,W=null,te=null,pe=null,he=null,Ie=null,yt=null,Vt=null}}}const s=new n,o=new r,a=new i,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,m=[],v=null,g=!1,p=null,u=null,_=null,x=null,y=null,A=null,C=null,b=new it(0,0,0),P=0,T=!1,M=null,N=null,I=null,F=null,X=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Q=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(U)[1]),j=Q>=1):U.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),j=Q>=2);let Y=null,J={};const oe=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),$e=new bt().fromArray(oe),q=new bt().fromArray(Me);function ae(k,fe,W,te){const pe=new Uint8Array(4),he=t.createTexture();t.bindTexture(k,he),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<W;Ie++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(fe+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return he}const me={};me[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(Ao),je(!1),Ge(Pg),le(t.CULL_FACE),L(wi);function le(k){d[k]!==!0&&(t.enable(k),d[k]=!0)}function Ce(k){d[k]!==!1&&(t.disable(k),d[k]=!1)}function Ze(k,fe){return f[k]!==fe?(t.bindFramebuffer(k,fe),f[k]=fe,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=fe),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Pe(k,fe){let W=m,te=!1;if(k){W=h.get(fe),W===void 0&&(W=[],h.set(fe,W));const pe=k.textures;if(W.length!==pe.length||W[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ie=pe.length;he<Ie;he++)W[he]=t.COLOR_ATTACHMENT0+he;W.length=pe.length,te=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,te=!0);te&&t.drawBuffers(W)}function wt(k){return v!==k?(t.useProgram(k),v=k,!0):!1}const gt={[Xi]:t.FUNC_ADD,[kb]:t.FUNC_SUBTRACT,[Ob]:t.FUNC_REVERSE_SUBTRACT};gt[Bb]=t.MIN,gt[zb]=t.MAX;const Ve={[Hb]:t.ZERO,[Vb]:t.ONE,[Gb]:t.SRC_COLOR,[kf]:t.SRC_ALPHA,[$b]:t.SRC_ALPHA_SATURATE,[Yb]:t.DST_COLOR,[jb]:t.DST_ALPHA,[Wb]:t.ONE_MINUS_SRC_COLOR,[Of]:t.ONE_MINUS_SRC_ALPHA,[qb]:t.ONE_MINUS_DST_COLOR,[Xb]:t.ONE_MINUS_DST_ALPHA,[Kb]:t.CONSTANT_COLOR,[Qb]:t.ONE_MINUS_CONSTANT_COLOR,[Zb]:t.CONSTANT_ALPHA,[Jb]:t.ONE_MINUS_CONSTANT_ALPHA};function L(k,fe,W,te,pe,he,Ie,yt,Vt,nt){if(k===wi){g===!0&&(Ce(t.BLEND),g=!1);return}if(g===!1&&(le(t.BLEND),g=!0),k!==Fb){if(k!==p||nt!==T){if((u!==Xi||y!==Xi)&&(t.blendEquation(t.FUNC_ADD),u=Xi,y=Xi),nt)switch(k){case ao:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dg:t.blendFunc(t.ONE,t.ONE);break;case Ng:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ao:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ng:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,x=null,A=null,C=null,b.set(0,0,0),P=0,p=k,T=nt}return}pe=pe||fe,he=he||W,Ie=Ie||te,(fe!==u||pe!==y)&&(t.blendEquationSeparate(gt[fe],gt[pe]),u=fe,y=pe),(W!==_||te!==x||he!==A||Ie!==C)&&(t.blendFuncSeparate(Ve[W],Ve[te],Ve[he],Ve[Ie]),_=W,x=te,A=he,C=Ie),(yt.equals(b)===!1||Vt!==P)&&(t.blendColor(yt.r,yt.g,yt.b,Vt),b.copy(yt),P=Vt),p=k,T=!1}function An(k,fe){k.side===Cr?Ce(t.CULL_FACE):le(t.CULL_FACE);let W=k.side===hn;fe&&(W=!W),je(W),k.blending===ao&&k.transparent===!1?L(wi):L(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const te=k.stencilWrite;a.setTest(te),te&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ut(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(k){M!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),M=k)}function Ge(k){k!==Lb?(le(t.CULL_FACE),k!==N&&(k===Pg?t.cullFace(t.BACK):k===Ib?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),N=k}function Te(k){k!==I&&(j&&t.lineWidth(k),I=k)}function ut(k,fe,W){k?(le(t.POLYGON_OFFSET_FILL),(F!==fe||X!==W)&&(t.polygonOffset(fe,W),F=fe,X=W)):Ce(t.POLYGON_OFFSET_FILL)}function we(k){k?le(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function R(k){k===void 0&&(k=t.TEXTURE0+$-1),Y!==k&&(t.activeTexture(k),Y=k)}function S(k,fe,W){W===void 0&&(Y===null?W=t.TEXTURE0+$-1:W=Y);let te=J[W];te===void 0&&(te={type:void 0,texture:void 0},J[W]=te),(te.type!==k||te.texture!==fe)&&(Y!==W&&(t.activeTexture(W),Y=W),t.bindTexture(k,fe||me[k]),te.type=k,te.texture=fe)}function z(){const k=J[Y];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ee(){try{t.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{t.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{t.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{t.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{t.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{t.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(){try{t.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{t.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{t.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{t.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(k){$e.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),$e.copy(k))}function ye(k){q.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function We(k,fe){let W=c.get(fe);W===void 0&&(W=new WeakMap,c.set(fe,W));let te=W.get(k);te===void 0&&(te=t.getUniformBlockIndex(fe,k.name),W.set(k,te))}function ke(k,fe){const te=c.get(fe).get(k);l.get(fe)!==te&&(t.uniformBlockBinding(fe,te,k.__bindingPointIndex),l.set(fe,te))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Y=null,J={},f={},h=new WeakMap,m=[],v=null,g=!1,p=null,u=null,_=null,x=null,y=null,A=null,C=null,b=new it(0,0,0),P=0,T=!1,M=null,N=null,I=null,F=null,X=null,$e.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Ce,bindFramebuffer:Ze,drawBuffers:Pe,useProgram:wt,setBlending:L,setMaterial:An,setFlipSided:je,setCullFace:Ge,setLineWidth:Te,setPolygonOffset:ut,setScissorTest:we,activeTexture:R,bindTexture:S,unbindTexture:z,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:xe,texImage3D:Re,updateUBOMapping:We,uniformBlockBinding:ke,texStorage2D:Xe,texStorage3D:se,texSubImage2D:K,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:Ne,viewport:ye,reset:lt}}function DD(t,e,n,r,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return m?new OffscreenCanvas(R,S):Yc("canvas")}function g(R,S,z){let ee=1;const ne=we(R);if((ne.width>z||ne.height>z)&&(ee=z/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(ee*ne.width),Ee=Math.floor(ee*ne.height);f===void 0&&(f=v(K,Ee));const de=S?v(K,Ee):f;return de.width=K,de.height=Ee,de.getContext("2d").drawImage(R,0,0,K,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+K+"x"+Ee+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function p(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,S,z,ee,ne=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=S;if(S===t.RED&&(z===t.FLOAT&&(K=t.R32F),z===t.HALF_FLOAT&&(K=t.R16F),z===t.UNSIGNED_BYTE&&(K=t.R8)),S===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(K=t.R8UI),z===t.UNSIGNED_SHORT&&(K=t.R16UI),z===t.UNSIGNED_INT&&(K=t.R32UI),z===t.BYTE&&(K=t.R8I),z===t.SHORT&&(K=t.R16I),z===t.INT&&(K=t.R32I)),S===t.RG&&(z===t.FLOAT&&(K=t.RG32F),z===t.HALF_FLOAT&&(K=t.RG16F),z===t.UNSIGNED_BYTE&&(K=t.RG8)),S===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(K=t.RG8UI),z===t.UNSIGNED_SHORT&&(K=t.RG16UI),z===t.UNSIGNED_INT&&(K=t.RG32UI),z===t.BYTE&&(K=t.RG8I),z===t.SHORT&&(K=t.RG16I),z===t.INT&&(K=t.RG32I)),S===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(K=t.RGB8UI),z===t.UNSIGNED_SHORT&&(K=t.RGB16UI),z===t.UNSIGNED_INT&&(K=t.RGB32UI),z===t.BYTE&&(K=t.RGB8I),z===t.SHORT&&(K=t.RGB16I),z===t.INT&&(K=t.RGB32I)),S===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),z===t.UNSIGNED_INT&&(K=t.RGBA32UI),z===t.BYTE&&(K=t.RGBA8I),z===t.SHORT&&(K=t.RGBA16I),z===t.INT&&(K=t.RGBA32I)),S===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),S===t.RGBA){const Ee=ne?jc:Qe.getTransfer(ee);z===t.FLOAT&&(K=t.RGBA32F),z===t.HALF_FLOAT&&(K=t.RGBA16F),z===t.UNSIGNED_BYTE&&(K=Ee===ot?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(R,S){let z;return R?S===null||S===ps||S===Fa?z=t.DEPTH24_STENCIL8:S===Dr?z=t.DEPTH32F_STENCIL8:S===Ua&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ps||S===Fa?z=t.DEPTH_COMPONENT24:S===Dr?z=t.DEPTH_COMPONENT32F:S===Ua&&(z=t.DEPTH_COMPONENT16),z}function A(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==nr&&R.minFilter!==pr?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){const S=R.target;S.removeEventListener("dispose",C),P(S),S.isVideoTexture&&d.delete(S)}function b(R){const S=R.target;S.removeEventListener("dispose",b),M(S)}function P(R){const S=r.get(R);if(S.__webglInit===void 0)return;const z=R.source,ee=h.get(z);if(ee){const ne=ee[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(R),Object.keys(ee).length===0&&h.delete(z)}r.remove(R)}function T(R){const S=r.get(R);t.deleteTexture(S.__webglTexture);const z=R.source,ee=h.get(z);delete ee[S.__cacheKey],o.memory.textures--}function M(R){const S=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(S.__webglFramebuffer[ee]))for(let ne=0;ne<S.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(S.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(S.__webglFramebuffer[ee]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[ee])}else{if(Array.isArray(S.__webglFramebuffer))for(let ee=0;ee<S.__webglFramebuffer.length;ee++)t.deleteFramebuffer(S.__webglFramebuffer[ee]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ee=0;ee<S.__webglColorRenderbuffer.length;ee++)S.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[ee]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=R.textures;for(let ee=0,ne=z.length;ee<ne;ee++){const K=r.get(z[ee]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),r.remove(z[ee])}r.remove(R)}let N=0;function I(){N=0}function F(){const R=N;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),N+=1,R}function X(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function $(R,S){const z=r.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,R,S);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+S)}function j(R,S){const z=r.get(R);if(R.version>0&&z.__version!==R.version){q(z,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+S)}function Q(R,S){const z=r.get(R);if(R.version>0&&z.__version!==R.version){q(z,R,S);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+S)}function U(R,S){const z=r.get(R);if(R.version>0&&z.__version!==R.version){ae(z,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+S)}const Y={[qf]:t.REPEAT,[Qi]:t.CLAMP_TO_EDGE,[$f]:t.MIRRORED_REPEAT},J={[nr]:t.NEAREST,[cA]:t.NEAREST_MIPMAP_NEAREST,[bl]:t.NEAREST_MIPMAP_LINEAR,[pr]:t.LINEAR,[ld]:t.LINEAR_MIPMAP_NEAREST,[Zi]:t.LINEAR_MIPMAP_LINEAR},oe={[pA]:t.NEVER,[yA]:t.ALWAYS,[mA]:t.LESS,[Ay]:t.LEQUAL,[gA]:t.EQUAL,[xA]:t.GEQUAL,[vA]:t.GREATER,[_A]:t.NOTEQUAL};function Me(R,S){if(S.type===Dr&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===pr||S.magFilter===ld||S.magFilter===bl||S.magFilter===Zi||S.minFilter===pr||S.minFilter===ld||S.minFilter===bl||S.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Y[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Y[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Y[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,J[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,J[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nr||S.minFilter!==bl&&S.minFilter!==Zi||S.type===Dr&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function $e(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const ee=S.source;let ne=h.get(ee);ne===void 0&&(ne={},h.set(ee,ne));const K=X(S);if(K!==R.__cacheKey){ne[K]===void 0&&(ne[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[K].usedTimes++;const Ee=ne[R.__cacheKey];Ee!==void 0&&(ne[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&T(S)),R.__cacheKey=K,R.__webglTexture=ne[K].texture}return z}function q(R,S,z){let ee=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=t.TEXTURE_3D);const ne=$e(R,S),K=S.source;n.bindTexture(ee,R.__webglTexture,t.TEXTURE0+z);const Ee=r.get(K);if(K.version!==Ee.__version||ne===!0){n.activeTexture(t.TEXTURE0+z);const de=Qe.getPrimaries(Qe.workingColorSpace),_e=S.colorSpace===ai?null:Qe.getPrimaries(S.colorSpace),Xe=S.colorSpace===ai||de===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let se=g(S.image,!1,i.maxTextureSize);se=ut(S,se);const xe=s.convert(S.format,S.colorSpace),Re=s.convert(S.type);let Ne=x(S.internalFormat,xe,Re,S.colorSpace,S.isVideoTexture);Me(ee,S);let ye;const We=S.mipmaps,ke=S.isVideoTexture!==!0,lt=Ee.__version===void 0||ne===!0,k=K.dataReady,fe=A(S,se);if(S.isDepthTexture)Ne=y(S.format===Oa,S.type),lt&&(ke?n.texStorage2D(t.TEXTURE_2D,1,Ne,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ne,se.width,se.height,0,xe,Re,null));else if(S.isDataTexture)if(We.length>0){ke&&lt&&n.texStorage2D(t.TEXTURE_2D,fe,Ne,We[0].width,We[0].height);for(let W=0,te=We.length;W<te;W++)ye=We[W],ke?k&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,xe,Re,ye.data):n.texImage2D(t.TEXTURE_2D,W,Ne,ye.width,ye.height,0,xe,Re,ye.data);S.generateMipmaps=!1}else ke?(lt&&n.texStorage2D(t.TEXTURE_2D,fe,Ne,se.width,se.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,xe,Re,se.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,se.width,se.height,0,xe,Re,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ke&&lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ne,We[0].width,We[0].height,se.depth);for(let W=0,te=We.length;W<te;W++)if(ye=We[W],S.format!==Jn)if(xe!==null)if(ke){if(k)if(S.layerUpdates.size>0){const pe=nv(ye.width,ye.height,S.format,S.type);for(const he of S.layerUpdates){const Ie=ye.data.subarray(he*pe/ye.data.BYTES_PER_ELEMENT,(he+1)*pe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,he,ye.width,ye.height,1,xe,Ie)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,se.depth,xe,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,Ne,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,se.depth,xe,Re,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,Ne,ye.width,ye.height,se.depth,0,xe,Re,ye.data)}else{ke&&lt&&n.texStorage2D(t.TEXTURE_2D,fe,Ne,We[0].width,We[0].height);for(let W=0,te=We.length;W<te;W++)ye=We[W],S.format!==Jn?xe!==null?ke?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,xe,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,W,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?k&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,xe,Re,ye.data):n.texImage2D(t.TEXTURE_2D,W,Ne,ye.width,ye.height,0,xe,Re,ye.data)}else if(S.isDataArrayTexture)if(ke){if(lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ne,se.width,se.height,se.depth),k)if(S.layerUpdates.size>0){const W=nv(se.width,se.height,S.format,S.type);for(const te of S.layerUpdates){const pe=se.data.subarray(te*W/se.data.BYTES_PER_ELEMENT,(te+1)*W/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,xe,Re,pe)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,xe,Re,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,se.width,se.height,se.depth,0,xe,Re,se.data);else if(S.isData3DTexture)ke?(lt&&n.texStorage3D(t.TEXTURE_3D,fe,Ne,se.width,se.height,se.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,xe,Re,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,se.width,se.height,se.depth,0,xe,Re,se.data);else if(S.isFramebufferTexture){if(lt)if(ke)n.texStorage2D(t.TEXTURE_2D,fe,Ne,se.width,se.height);else{let W=se.width,te=se.height;for(let pe=0;pe<fe;pe++)n.texImage2D(t.TEXTURE_2D,pe,Ne,W,te,0,xe,Re,null),W>>=1,te>>=1}}else if(We.length>0){if(ke&&lt){const W=we(We[0]);n.texStorage2D(t.TEXTURE_2D,fe,Ne,W.width,W.height)}for(let W=0,te=We.length;W<te;W++)ye=We[W],ke?k&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,xe,Re,ye):n.texImage2D(t.TEXTURE_2D,W,Ne,xe,Re,ye);S.generateMipmaps=!1}else if(ke){if(lt){const W=we(se);n.texStorage2D(t.TEXTURE_2D,fe,Ne,W.width,W.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Re,se)}else n.texImage2D(t.TEXTURE_2D,0,Ne,xe,Re,se);p(S)&&u(ee),Ee.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ae(R,S,z){if(S.image.length!==6)return;const ee=$e(R,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const K=r.get(ne);if(ne.version!==K.__version||ee===!0){n.activeTexture(t.TEXTURE0+z);const Ee=Qe.getPrimaries(Qe.workingColorSpace),de=S.colorSpace===ai?null:Qe.getPrimaries(S.colorSpace),_e=S.colorSpace===ai||Ee===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Xe=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let te=0;te<6;te++)!Xe&&!se?xe[te]=g(S.image[te],!0,i.maxCubemapSize):xe[te]=se?S.image[te].image:S.image[te],xe[te]=ut(S,xe[te]);const Re=xe[0],Ne=s.convert(S.format,S.colorSpace),ye=s.convert(S.type),We=x(S.internalFormat,Ne,ye,S.colorSpace),ke=S.isVideoTexture!==!0,lt=K.__version===void 0||ee===!0,k=ne.dataReady;let fe=A(S,Re);Me(t.TEXTURE_CUBE_MAP,S);let W;if(Xe){ke&&lt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,We,Re.width,Re.height);for(let te=0;te<6;te++){W=xe[te].mipmaps;for(let pe=0;pe<W.length;pe++){const he=W[pe];S.format!==Jn?Ne!==null?ke?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,he.width,he.height,Ne,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,We,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,he.width,he.height,Ne,ye,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,We,he.width,he.height,0,Ne,ye,he.data)}}}else{if(W=S.mipmaps,ke&&lt){W.length>0&&fe++;const te=we(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,We,te.width,te.height)}for(let te=0;te<6;te++)if(se){ke?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,xe[te].width,xe[te].height,Ne,ye,xe[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,xe[te].width,xe[te].height,0,Ne,ye,xe[te].data);for(let pe=0;pe<W.length;pe++){const Ie=W[pe].image[te].image;ke?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Ie.width,Ie.height,Ne,ye,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,We,Ie.width,Ie.height,0,Ne,ye,Ie.data)}}else{ke?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,ye,xe[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,Ne,ye,xe[te]);for(let pe=0;pe<W.length;pe++){const he=W[pe];ke?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Ne,ye,he.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,We,Ne,ye,he.image[te])}}}p(S)&&u(t.TEXTURE_CUBE_MAP),K.__version=ne.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function me(R,S,z,ee,ne,K){const Ee=s.convert(z.format,z.colorSpace),de=s.convert(z.type),_e=x(z.internalFormat,Ee,de,z.colorSpace),Xe=r.get(S),se=r.get(z);if(se.__renderTarget=S,!Xe.__hasExternalTextures){const xe=Math.max(1,S.width>>K),Re=Math.max(1,S.height>>K);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,K,_e,xe,Re,S.depth,0,Ee,de,null):n.texImage2D(ne,K,_e,xe,Re,0,Ee,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ge(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ne,se.__webglTexture,0,je(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ne,se.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(R,S,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const ee=S.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,K=y(S.stencilBuffer,ne),Ee=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=je(S);Ge(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,K,S.width,S.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,K,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,K,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,R)}else{const ee=S.textures;for(let ne=0;ne<ee.length;ne++){const K=ee[ne],Ee=s.convert(K.format,K.colorSpace),de=s.convert(K.type),_e=x(K.internalFormat,Ee,de,K.colorSpace),Xe=je(S);z&&Ge(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,_e,S.width,S.height):Ge(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe,_e,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,_e,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=r.get(S.depthTexture);ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const ne=ee.__webglTexture,K=je(S);if(S.depthTexture.format===ka)Ge(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(S.depthTexture.format===Oa)Ge(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ze(R){const S=r.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ee){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=ee}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ce(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]===void 0)S.__webglDepthbuffer[ee]=t.createRenderbuffer(),le(S.__webglDepthbuffer[ee],R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,K)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),le(S.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(R,S,z){const ee=r.get(R);S!==void 0&&me(ee.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Ze(R)}function wt(R){const S=R.texture,z=r.get(R),ee=r.get(S);R.addEventListener("dispose",b);const ne=R.textures,K=R.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=S.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let _e=0;_e<S.mipmaps.length;_e++)z.__webglFramebuffer[de][_e]=t.createFramebuffer()}else z.__webglFramebuffer[de]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)z.__webglFramebuffer[de]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let de=0,_e=ne.length;de<_e;de++){const Xe=r.get(ne[de]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ge(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const _e=ne[de];z.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[de]);const Xe=s.convert(_e.format,_e.colorSpace),se=s.convert(_e.type),xe=x(_e.internalFormat,Xe,se,_e.colorSpace,R.isXRRenderTarget===!0),Re=je(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,z.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),le(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Me(t.TEXTURE_CUBE_MAP,S);for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)me(z.__webglFramebuffer[de][_e],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else me(z.__webglFramebuffer[de],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let de=0,_e=ne.length;de<_e;de++){const Xe=ne[de],se=r.get(Xe);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),Me(t.TEXTURE_2D,Xe),me(z.__webglFramebuffer,R,Xe,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),p(Xe)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,ee.__webglTexture),Me(de,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)me(z.__webglFramebuffer[_e],R,S,t.COLOR_ATTACHMENT0,de,_e);else me(z.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,de,0);p(S)&&u(de),n.unbindTexture()}R.depthBuffer&&Ze(R)}function gt(R){const S=R.textures;for(let z=0,ee=S.length;z<ee;z++){const ne=S[z];if(p(ne)){const K=_(R),Ee=r.get(ne).__webglTexture;n.bindTexture(K,Ee),u(K),n.unbindTexture()}}}const Ve=[],L=[];function An(R){if(R.samples>0){if(Ge(R)===!1){const S=R.textures,z=R.width,ee=R.height;let ne=t.COLOR_BUFFER_BIT;const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=r.get(R),de=S.length>1;if(de)for(let _e=0;_e<S.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);const Xe=r.get(S[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Xe,0)}t.blitFramebuffer(0,0,z,ee,0,0,z,ee,ne,t.NEAREST),l===!0&&(Ve.length=0,L.length=0,Ve.push(t.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ve.push(K),L.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<S.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);const Xe=r.get(S[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function je(R){return Math.min(i.maxSamples,R.samples)}function Ge(R){const S=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(R){const S=o.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function ut(R,S){const z=R.colorSpace,ee=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Po&&z!==ai&&(Qe.getTransfer(z)===ot?(ee!==Jn||ne!==zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=U,this.rebindTextures=Pe,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ge}function ND(t,e){function n(r,i=ai){let s;const o=Qe.getTransfer(i);if(r===zr)return t.UNSIGNED_BYTE;if(r===Lp)return t.UNSIGNED_SHORT_4_4_4_4;if(r===Ip)return t.UNSIGNED_SHORT_5_5_5_1;if(r===xy)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===vy)return t.BYTE;if(r===_y)return t.SHORT;if(r===Ua)return t.UNSIGNED_SHORT;if(r===Np)return t.INT;if(r===ps)return t.UNSIGNED_INT;if(r===Dr)return t.FLOAT;if(r===$a)return t.HALF_FLOAT;if(r===yy)return t.ALPHA;if(r===Sy)return t.RGB;if(r===Jn)return t.RGBA;if(r===My)return t.LUMINANCE;if(r===Ey)return t.LUMINANCE_ALPHA;if(r===ka)return t.DEPTH_COMPONENT;if(r===Oa)return t.DEPTH_STENCIL;if(r===wy)return t.RED;if(r===Up)return t.RED_INTEGER;if(r===Ty)return t.RG;if(r===Fp)return t.RG_INTEGER;if(r===kp)return t.RGBA_INTEGER;if(r===dc||r===fc||r===hc||r===pc)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===dc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===dc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kf||r===Qf||r===Zf||r===Jf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Kf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===eh||r===th||r===nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===eh||r===th)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===nh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rh||r===ih||r===sh||r===oh||r===ah||r===lh||r===ch||r===uh||r===dh||r===fh||r===hh||r===ph||r===mh||r===gh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===rh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ih)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===oh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ah)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ch)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ph)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mc||r===vh||r===_h)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===mc)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===by||r===xh||r===yh||r===Sh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===mc)return s.COMPRESSED_RED_RGTC1_EXT;if(r===xh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fa?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}const LD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ID=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class UD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const i=new pn,s=e.properties.get(i);s.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ri({vertexShader:LD,fragmentShader:ID,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Lr(new vu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FD extends Fo{constructor(e,n){super();const r=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,v=null;const g=new UD,p=n.getContextAttributes();let u=null,_=null;const x=[],y=[],A=new at;let C=null;const b=new Un;b.viewport=new bt;const P=new Un;P.viewport=new bt;const T=[b,P],M=new rC;let N=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ae=x[q];return ae===void 0&&(ae=new Pd,x[q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(q){let ae=x[q];return ae===void 0&&(ae=new Pd,x[q]=ae),ae.getGripSpace()},this.getHand=function(q){let ae=x[q];return ae===void 0&&(ae=new Pd,x[q]=ae),ae.getHandSpace()};function F(q){const ae=y.indexOf(q.inputSource);if(ae===-1)return;const me=x[ae];me!==void 0&&(me.update(q.inputSource,q.frame,c||o),me.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",$);for(let q=0;q<x.length;q++){const ae=y[q];ae!==null&&(y[q]=null,x[q].disconnect(ae))}N=null,I=null,g.reset(),e.setRenderTarget(u),m=null,h=null,f=null,i=null,_=null,$e.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(u=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",X),i.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,le=null,Ce=null;p.depth&&(Ce=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=p.stencil?Oa:ka,le=p.stencil?Fa:ps);const Ze={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};f=new XRWebGLBinding(i,n),h=f.createProjectionLayer(Ze),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new ms(h.textureWidth,h.textureHeight,{format:Jn,type:zr,depthTexture:new Hy(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,n,me),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new ms(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:zr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$e.setContext(i),$e.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(q){for(let ae=0;ae<q.removed.length;ae++){const me=q.removed[ae],le=y.indexOf(me);le>=0&&(y[le]=null,x[le].disconnect(me))}for(let ae=0;ae<q.added.length;ae++){const me=q.added[ae];let le=y.indexOf(me);if(le===-1){for(let Ze=0;Ze<x.length;Ze++)if(Ze>=y.length){y.push(me),le=Ze;break}else if(y[Ze]===null){y[Ze]=me,le=Ze;break}if(le===-1)break}const Ce=x[le];Ce&&Ce.connect(me)}}const j=new G,Q=new G;function U(q,ae,me){j.setFromMatrixPosition(ae.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);const le=j.distanceTo(Q),Ce=ae.projectionMatrix.elements,Ze=me.projectionMatrix.elements,Pe=Ce[14]/(Ce[10]-1),wt=Ce[14]/(Ce[10]+1),gt=(Ce[9]+1)/Ce[5],Ve=(Ce[9]-1)/Ce[5],L=(Ce[8]-1)/Ce[0],An=(Ze[8]+1)/Ze[0],je=Pe*L,Ge=Pe*An,Te=le/(-L+An),ut=Te*-L;if(ae.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ut),q.translateZ(Te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ce[10]===-1)q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const we=Pe+Te,R=wt+Te,S=je-ut,z=Ge+(le-ut),ee=gt*wt/R*we,ne=Ve*wt/R*we;q.projectionMatrix.makePerspective(S,z,ee,ne,we,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Y(q,ae){ae===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ae.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ae=q.near,me=q.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(me=g.depthFar)),M.near=P.near=b.near=ae,M.far=P.far=b.far=me,(N!==M.near||I!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,I=M.far),b.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,M.layers.mask=b.layers.mask|P.layers.mask;const le=q.parent,Ce=M.cameras;Y(M,le);for(let Ze=0;Ze<Ce.length;Ze++)Y(Ce[Ze],le);Ce.length===2?U(M,b,P):M.projectionMatrix.copy(b.projectionMatrix),J(q,M,le)};function J(q,ae,me){me===null?q.matrix.copy(ae.matrixWorld):(q.matrix.copy(me.matrixWorld),q.matrix.invert(),q.matrix.multiply(ae.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Mh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let oe=null;function Me(q,ae){if(d=ae.getViewerPose(c||o),v=ae,d!==null){const me=d.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let le=!1;me.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let Pe=0;Pe<me.length;Pe++){const wt=me[Pe];let gt=null;if(m!==null)gt=m.getViewport(wt);else{const L=f.getViewSubImage(h,wt);gt=L.viewport,Pe===0&&(e.setRenderTargetTextures(_,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(_))}let Ve=T[Pe];Ve===void 0&&(Ve=new Un,Ve.layers.enable(Pe),Ve.viewport=new bt,T[Pe]=Ve),Ve.matrix.fromArray(wt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(wt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(gt.x,gt.y,gt.width,gt.height),Pe===0&&(M.matrix.copy(Ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(Ve)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&f){const Pe=f.getDepthInformation(me[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(e,Pe,i.renderState)}}for(let me=0;me<x.length;me++){const le=y[me],Ce=x[me];le!==null&&Ce!==void 0&&Ce.update(le,ae,c||o)}oe&&oe(q,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),v=null}const $e=new Vy;$e.setAnimationLoop(Me),this.setAnimationLoop=function(q){oe=q},this.dispose=function(){}}}const zi=new Hr,kD=new At;function OD(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function r(p,u){u.color.getRGB(p.fogColor.value,Fy(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,_,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),g(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,_,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===hn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===hn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u),x=_.envMap,y=_.envMapRotation;x&&(p.envMap.value=x,zi.copy(y),zi.x*=-1,zi.y*=-1,zi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),p.envMapRotation.value.setFromMatrix4(kD.makeRotationFromEuler(zi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,_,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=x*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===hn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){const _=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function BD(t,e,n,r){let i={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const y=x.program;r.uniformBlockBinding(_,y)}function c(_,x){let y=i[_.id];y===void 0&&(v(_),y=d(_),i[_.id]=y,_.addEventListener("dispose",p));const A=x.program;r.updateUBOMapping(_,A);const C=e.render.frame;s[_.id]!==C&&(h(_),s[_.id]=C)}function d(_){const x=f();_.__bindingPointIndex=x;const y=t.createBuffer(),A=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const x=i[_.id],y=_.uniforms,A=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,b=y.length;C<b;C++){const P=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,M=P.length;T<M;T++){const N=P[T];if(m(N,C,T,A)===!0){const I=N.__offset,F=Array.isArray(N.value)?N.value:[N.value];let X=0;for(let $=0;$<F.length;$++){const j=F[$],Q=g(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,I+X,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,x,y,A){const C=_.value,b=x+"_"+y;if(A[b]===void 0)return typeof C=="number"||typeof C=="boolean"?A[b]=C:A[b]=C.clone(),!0;{const P=A[b];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return A[b]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function v(_){const x=_.uniforms;let y=0;const A=16;for(let b=0,P=x.length;b<P;b++){const T=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,N=T.length;M<N;M++){const I=T[M],F=Array.isArray(I.value)?I.value:[I.value];for(let X=0,$=F.length;X<$;X++){const j=F[X],Q=g(j),U=y%A,Y=U%Q.boundary,J=U+Y;y+=Y,J!==0&&A-J<Q.storage&&(y+=A-J),I.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=Q.storage}}}const C=y%A;return C>0&&(y+=A-C),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function p(_){const x=_.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function u(){for(const _ in i)t.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:u}}class zD{constructor(e={}){const{canvas:n=MA(),context:r=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=r.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),g=new Int32Array(4);let p=null,u=null;const _=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=Nn;let C=0,b=0,P=null,T=-1,M=null;const N=new bt,I=new bt;let F=null;const X=new it(0);let $=0,j=n.width,Q=n.height,U=1,Y=null,J=null;const oe=new bt(0,0,j,Q),Me=new bt(0,0,j,Q);let $e=!1;const q=new By;let ae=!1,me=!1;const le=new At,Ce=new At,Ze=new G,Pe=new bt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Ve(){return P===null?U:1}let L=r;function An(w,O){return n.getContext(w,O)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dp}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",he,!1),L===null){const O="webgl2";if(L=An(O,w),L===null)throw An(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let je,Ge,Te,ut,we,R,S,z,ee,ne,K,Ee,de,_e,Xe,se,xe,Re,Ne,ye,We,ke,lt,k;function fe(){je=new KP(L),je.init(),ke=new ND(L,je),Ge=new GP(L,je,e,ke),Te=new PD(L,je),Ge.reverseDepthBuffer&&h&&Te.buffers.depth.setReversed(!0),ut=new JP(L),we=new vD,R=new DD(L,je,Te,we,Ge,ke,ut),S=new jP(y),z=new $P(y),ee=new sC(L),lt=new HP(L,ee),ne=new QP(L,ee,ut,lt),K=new t2(L,ne,ee,ut),Ne=new e2(L,Ge,R),se=new WP(we),Ee=new gD(y,S,z,je,Ge,lt,se),de=new OD(y,we),_e=new xD,Xe=new TD(je),Re=new zP(y,S,z,Te,K,m,l),xe=new CD(y,K,Ge),k=new BD(L,ut,Ge,Te),ye=new VP(L,je,ut),We=new ZP(L,je,ut),ut.programs=Ee.programs,y.capabilities=Ge,y.extensions=je,y.properties=we,y.renderLists=_e,y.shadowMap=xe,y.state=Te,y.info=ut}fe();const W=new FD(y,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(j,Q,!1))},this.getSize=function(w){return w.set(j,Q)},this.setSize=function(w,O,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,Q=O,n.width=Math.floor(w*U),n.height=Math.floor(O*U),H===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(j*U,Q*U).floor()},this.setDrawingBufferSize=function(w,O,H){j=w,Q=O,U=H,n.width=Math.floor(w*H),n.height=Math.floor(O*H),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,O,H,V){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,O,H,V),Te.viewport(N.copy(oe).multiplyScalar(U).round())},this.getScissor=function(w){return w.copy(Me)},this.setScissor=function(w,O,H,V){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,O,H,V),Te.scissor(I.copy(Me).multiplyScalar(U).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(w){Te.setScissorTest($e=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,H=!0){let V=0;if(w){let B=!1;if(P!==null){const ie=P.texture.format;B=ie===kp||ie===Fp||ie===Up}if(B){const ie=P.texture.type,ue=ie===zr||ie===ps||ie===Ua||ie===Fa||ie===Lp||ie===Ip,ve=Re.getClearColor(),Se=Re.getClearAlpha(),Le=ve.r,De=ve.g,be=ve.b;ue?(v[0]=Le,v[1]=De,v[2]=be,v[3]=Se,L.clearBufferuiv(L.COLOR,0,v)):(g[0]=Le,g[1]=De,g[2]=be,g[3]=Se,L.clearBufferiv(L.COLOR,0,g))}else V|=L.COLOR_BUFFER_BIT}O&&(V|=L.DEPTH_BUFFER_BIT),H&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",he,!1),Re.dispose(),_e.dispose(),Xe.dispose(),we.dispose(),S.dispose(),z.dispose(),K.dispose(),lt.dispose(),k.dispose(),Ee.dispose(),W.dispose(),W.removeEventListener("sessionstart",Vp),W.removeEventListener("sessionend",Gp),Li.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=ut.autoReset,O=xe.enabled,H=xe.autoUpdate,V=xe.needsUpdate,B=xe.type;fe(),ut.autoReset=w,xe.enabled=O,xe.autoUpdate=H,xe.needsUpdate=V,xe.type=B}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ie(w){const O=w.target;O.removeEventListener("dispose",Ie),yt(O)}function yt(w){Vt(w),we.remove(w)}function Vt(w){const O=we.get(w).programs;O!==void 0&&(O.forEach(function(H){Ee.releaseProgram(H)}),w.isShaderMaterial&&Ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,H,V,B,ie){O===null&&(O=wt);const ue=B.isMesh&&B.matrixWorld.determinant()<0,ve=tS(w,O,H,V,B);Te.setMaterial(V,ue);let Se=H.index,Le=1;if(V.wireframe===!0){if(Se=ne.getWireframeAttribute(H),Se===void 0)return;Le=2}const De=H.drawRange,be=H.attributes.position;let Ye=De.start*Le,Je=(De.start+De.count)*Le;ie!==null&&(Ye=Math.max(Ye,ie.start*Le),Je=Math.min(Je,(ie.start+ie.count)*Le)),Se!==null?(Ye=Math.max(Ye,0),Je=Math.min(Je,Se.count)):be!=null&&(Ye=Math.max(Ye,0),Je=Math.min(Je,be.count));const Ct=Je-Ye;if(Ct<0||Ct===1/0)return;lt.setup(B,V,ve,H,Se);let St,Ke=ye;if(Se!==null&&(St=ee.get(Se),Ke=We,Ke.setIndex(St)),B.isMesh)V.wireframe===!0?(Te.setLineWidth(V.wireframeLinewidth*Ve()),Ke.setMode(L.LINES)):Ke.setMode(L.TRIANGLES);else if(B.isLine){let Ae=V.linewidth;Ae===void 0&&(Ae=1),Te.setLineWidth(Ae*Ve()),B.isLineSegments?Ke.setMode(L.LINES):B.isLineLoop?Ke.setMode(L.LINE_LOOP):Ke.setMode(L.LINE_STRIP)}else B.isPoints?Ke.setMode(L.POINTS):B.isSprite&&Ke.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)gc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Ke.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ae=B._multiDrawStarts,Ot=B._multiDrawCounts,et=B._multiDrawCount,Vn=Se?ee.get(Se).bytesPerElement:1,xs=we.get(V).currentProgram.getUniforms();for(let gn=0;gn<et;gn++)xs.setValue(L,"_gl_DrawID",gn),Ke.render(Ae[gn]/Vn,Ot[gn])}else if(B.isInstancedMesh)Ke.renderInstances(Ye,Ct,B.count);else if(H.isInstancedBufferGeometry){const Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ot=Math.min(H.instanceCount,Ae);Ke.renderInstances(Ye,Ct,Ot)}else Ke.render(Ye,Ct)};function nt(w,O,H){w.transparent===!0&&w.side===Cr&&w.forceSinglePass===!1?(w.side=hn,w.needsUpdate=!0,nl(w,O,H),w.side=Ci,w.needsUpdate=!0,nl(w,O,H),w.side=Cr):nl(w,O,H)}this.compile=function(w,O,H=null){H===null&&(H=w),u=Xe.get(H),u.init(O),x.push(u),H.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),w!==H&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();const V=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ie=B.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){const ve=ie[ue];nt(ve,H,B),V.add(ve)}else nt(ie,H,B),V.add(ie)}),u=x.pop(),V},this.compileAsync=function(w,O,H=null){const V=this.compile(w,O,H);return new Promise(B=>{function ie(){if(V.forEach(function(ue){we.get(ue).currentProgram.isReady()&&V.delete(ue)}),V.size===0){B(w);return}setTimeout(ie,10)}je.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Hn=null;function vr(w){Hn&&Hn(w)}function Vp(){Li.stop()}function Gp(){Li.start()}const Li=new Vy;Li.setAnimationLoop(vr),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(w){Hn=w,W.setAnimationLoop(w),w===null?Li.stop():Li.start()},W.addEventListener("sessionstart",Vp),W.addEventListener("sessionend",Gp),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(O),O=W.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,O,P),u=Xe.get(w,x.length),u.init(O),x.push(u),Ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(Ce),me=this.localClippingEnabled,ae=se.init(this.clippingPlanes,me),p=_e.get(w,_.length),p.init(),_.push(p),W.enabled===!0&&W.isPresenting===!0){const ie=y.xr.getDepthSensingMesh();ie!==null&&Su(ie,O,-1/0,y.sortObjects)}Su(w,O,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(Y,J),gt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,gt&&Re.addToRenderList(p,w),this.info.render.frame++,ae===!0&&se.beginShadows();const H=u.state.shadowsArray;xe.render(H,w,O),ae===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,B=p.transmissive;if(u.setupLights(),O.isArrayCamera){const ie=O.cameras;if(B.length>0)for(let ue=0,ve=ie.length;ue<ve;ue++){const Se=ie[ue];jp(V,B,w,Se)}gt&&Re.render(w);for(let ue=0,ve=ie.length;ue<ve;ue++){const Se=ie[ue];Wp(p,w,Se,Se.viewport)}}else B.length>0&&jp(V,B,w,O),gt&&Re.render(w),Wp(p,w,O);P!==null&&b===0&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(y,w,O),lt.resetDefaultState(),T=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],ae===!0&&se.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Su(w,O,H,V){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){V&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ce);const ue=K.update(w),ve=w.material;ve.visible&&p.push(w,ue,ve,H,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const ue=K.update(w),ve=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Pe.copy(ue.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(Ce)),Array.isArray(ve)){const Se=ue.groups;for(let Le=0,De=Se.length;Le<De;Le++){const be=Se[Le],Ye=ve[be.materialIndex];Ye&&Ye.visible&&p.push(w,ue,Ye,H,Pe.z,be)}}else ve.visible&&p.push(w,ue,ve,H,Pe.z,null)}}const ie=w.children;for(let ue=0,ve=ie.length;ue<ve;ue++)Su(ie[ue],O,H,V)}function Wp(w,O,H,V){const B=w.opaque,ie=w.transmissive,ue=w.transparent;u.setupLightsView(H),ae===!0&&se.setGlobalState(y.clippingPlanes,H),V&&Te.viewport(N.copy(V)),B.length>0&&tl(B,O,H),ie.length>0&&tl(ie,O,H),ue.length>0&&tl(ue,O,H),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function jp(w,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new ms(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?$a:zr,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ie=u.state.transmissionRenderTarget[V.id],ue=V.viewport||N;ie.setSize(ue.z*y.transmissionResolutionScale,ue.w*y.transmissionResolutionScale);const ve=y.getRenderTarget();y.setRenderTarget(ie),y.getClearColor(X),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),gt&&Re.render(H);const Se=y.toneMapping;y.toneMapping=Ti;const Le=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),ae===!0&&se.setGlobalState(y.clippingPlanes,V),tl(w,H,V),R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie),je.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let be=0,Ye=O.length;be<Ye;be++){const Je=O[be],Ct=Je.object,St=Je.geometry,Ke=Je.material,Ae=Je.group;if(Ke.side===Cr&&Ct.layers.test(V.layers)){const Ot=Ke.side;Ke.side=hn,Ke.needsUpdate=!0,Xp(Ct,H,V,St,Ke,Ae),Ke.side=Ot,Ke.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie))}y.setRenderTarget(ve),y.setClearColor(X,$),Le!==void 0&&(V.viewport=Le),y.toneMapping=Se}function tl(w,O,H){const V=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ie=w.length;B<ie;B++){const ue=w[B],ve=ue.object,Se=ue.geometry,Le=ue.group;let De=ue.material;De.allowOverride===!0&&V!==null&&(De=V),ve.layers.test(H.layers)&&Xp(ve,O,H,Se,De,Le)}}function Xp(w,O,H,V,B,ie){w.onBeforeRender(y,O,H,V,B,ie),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(y,O,H,V,w,ie),B.transparent===!0&&B.side===Cr&&B.forceSinglePass===!1?(B.side=hn,B.needsUpdate=!0,y.renderBufferDirect(H,O,V,B,w,ie),B.side=Ci,B.needsUpdate=!0,y.renderBufferDirect(H,O,V,B,w,ie),B.side=Cr):y.renderBufferDirect(H,O,V,B,w,ie),w.onAfterRender(y,O,H,V,B,ie)}function nl(w,O,H){O.isScene!==!0&&(O=wt);const V=we.get(w),B=u.state.lights,ie=u.state.shadowsArray,ue=B.state.version,ve=Ee.getParameters(w,B.state,ie,O,H),Se=Ee.getProgramCacheKey(ve);let Le=V.programs;V.environment=w.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(w.isMeshStandardMaterial?z:S).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",Ie),Le=new Map,V.programs=Le);let De=Le.get(Se);if(De!==void 0){if(V.currentProgram===De&&V.lightsStateVersion===ue)return qp(w,ve),De}else ve.uniforms=Ee.getUniforms(w),w.onBeforeCompile(ve,y),De=Ee.acquireProgram(ve,Se),Le.set(Se,De),V.uniforms=ve.uniforms;const be=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=se.uniform),qp(w,ve),V.needsLights=rS(w),V.lightsStateVersion=ue,V.needsLights&&(be.ambientLightColor.value=B.state.ambient,be.lightProbe.value=B.state.probe,be.directionalLights.value=B.state.directional,be.directionalLightShadows.value=B.state.directionalShadow,be.spotLights.value=B.state.spot,be.spotLightShadows.value=B.state.spotShadow,be.rectAreaLights.value=B.state.rectArea,be.ltc_1.value=B.state.rectAreaLTC1,be.ltc_2.value=B.state.rectAreaLTC2,be.pointLights.value=B.state.point,be.pointLightShadows.value=B.state.pointShadow,be.hemisphereLights.value=B.state.hemi,be.directionalShadowMap.value=B.state.directionalShadowMap,be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,be.spotShadowMap.value=B.state.spotShadowMap,be.spotLightMatrix.value=B.state.spotLightMatrix,be.spotLightMap.value=B.state.spotLightMap,be.pointShadowMap.value=B.state.pointShadowMap,be.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=De,V.uniformsList=null,De}function Yp(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=vc.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function qp(w,O){const H=we.get(w);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function tS(w,O,H,V,B){O.isScene!==!0&&(O=wt),R.resetTextureUnits();const ie=O.fog,ue=V.isMeshStandardMaterial?O.environment:null,ve=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Po,Se=(V.isMeshStandardMaterial?z:S).get(V.envMap||ue),Le=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,De=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!H.morphAttributes.position,Ye=!!H.morphAttributes.normal,Je=!!H.morphAttributes.color;let Ct=Ti;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ct=y.toneMapping);const St=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ke=St!==void 0?St.length:0,Ae=we.get(V),Ot=u.state.lights;if(ae===!0&&(me===!0||w!==M)){const Qt=w===M&&V.id===T;se.setState(V,w,Qt)}let et=!1;V.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ot.state.version||Ae.outputColorSpace!==ve||B.isBatchedMesh&&Ae.batching===!1||!B.isBatchedMesh&&Ae.batching===!0||B.isBatchedMesh&&Ae.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ae.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ae.instancing===!1||!B.isInstancedMesh&&Ae.instancing===!0||B.isSkinnedMesh&&Ae.skinning===!1||!B.isSkinnedMesh&&Ae.skinning===!0||B.isInstancedMesh&&Ae.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ae.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ae.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ae.instancingMorph===!1&&B.morphTexture!==null||Ae.envMap!==Se||V.fog===!0&&Ae.fog!==ie||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Le||Ae.vertexTangents!==De||Ae.morphTargets!==be||Ae.morphNormals!==Ye||Ae.morphColors!==Je||Ae.toneMapping!==Ct||Ae.morphTargetsCount!==Ke)&&(et=!0):(et=!0,Ae.__version=V.version);let Vn=Ae.currentProgram;et===!0&&(Vn=nl(V,O,B));let xs=!1,gn=!1,Oo=!1;const pt=Vn.getUniforms(),Cn=Ae.uniforms;if(Te.useProgram(Vn.program)&&(xs=!0,gn=!0,Oo=!0),V.id!==T&&(T=V.id,gn=!0),xs||M!==w){Te.buffers.depth.getReversed()?(le.copy(w.projectionMatrix),wA(le),TA(le),pt.setValue(L,"projectionMatrix",le)):pt.setValue(L,"projectionMatrix",w.projectionMatrix),pt.setValue(L,"viewMatrix",w.matrixWorldInverse);const on=pt.map.cameraPosition;on!==void 0&&on.setValue(L,Ze.setFromMatrixPosition(w.matrixWorld)),Ge.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,gn=!0,Oo=!0)}if(B.isSkinnedMesh){pt.setOptional(L,B,"bindMatrix"),pt.setOptional(L,B,"bindMatrixInverse");const Qt=B.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),pt.setValue(L,"boneTexture",Qt.boneTexture,R))}B.isBatchedMesh&&(pt.setOptional(L,B,"batchingTexture"),pt.setValue(L,"batchingTexture",B._matricesTexture,R),pt.setOptional(L,B,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",B._indirectTexture,R),pt.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",B._colorsTexture,R));const Rn=H.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Ne.update(B,H,Vn),(gn||Ae.receiveShadow!==B.receiveShadow)&&(Ae.receiveShadow=B.receiveShadow,pt.setValue(L,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Cn.envMap.value=Se,Cn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(Cn.envMapIntensity.value=O.environmentIntensity),gn&&(pt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&nS(Cn,Oo),ie&&V.fog===!0&&de.refreshFogUniforms(Cn,ie),de.refreshMaterialUniforms(Cn,V,U,Q,u.state.transmissionRenderTarget[w.id]),vc.upload(L,Yp(Ae),Cn,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(vc.upload(L,Yp(Ae),Cn,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(L,"center",B.center),pt.setValue(L,"modelViewMatrix",B.modelViewMatrix),pt.setValue(L,"normalMatrix",B.normalMatrix),pt.setValue(L,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Qt=V.uniformsGroups;for(let on=0,Mu=Qt.length;on<Mu;on++){const Ii=Qt[on];k.update(Ii,Vn),k.bind(Ii,Vn)}}return Vn}function nS(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function rS(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,O,H){const V=we.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),we.get(w.texture).__webglTexture=O,we.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const H=we.get(w);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};const iS=L.createFramebuffer();this.setRenderTarget=function(w,O=0,H=0){P=w,C=O,b=H;let V=!0,B=null,ie=!1,ue=!1;if(w){const Se=we.get(w);if(Se.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(Se.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Se.__hasExternalTextures)R.rebindTextures(w,we.get(w.texture).__webglTexture,we.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const be=w.depthTexture;if(Se.__boundDepthTexture!==be){if(be!==null&&we.has(be)&&(w.width!==be.image.width||w.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ue=!0);const De=we.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[O])?B=De[O][H]:B=De[O],ie=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?B=we.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?B=De[H]:B=De,N.copy(w.viewport),I.copy(w.scissor),F=w.scissorTest}else N.copy(oe).multiplyScalar(U).floor(),I.copy(Me).multiplyScalar(U).floor(),F=$e;if(H!==0&&(B=iS),Te.bindFramebuffer(L.FRAMEBUFFER,B)&&V&&Te.drawBuffers(w,B),Te.viewport(N),Te.scissor(I),Te.setScissorTest(F),ie){const Se=we.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,H)}else if(ue){const Se=we.get(w.texture),Le=O;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,H,Le)}else if(w!==null&&H!==0){const Se=we.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,H)}T=-1},this.readRenderTargetPixels=function(w,O,H,V,B,ie,ue){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){Te.bindFramebuffer(L.FRAMEBUFFER,ve);try{const Se=w.texture,Le=Se.format,De=Se.type;if(!Ge.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-V&&H>=0&&H<=w.height-B&&L.readPixels(O,H,V,B,ke.convert(Le),ke.convert(De),ie)}finally{const Se=P!==null?we.get(P).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,O,H,V,B,ie,ue){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve)if(O>=0&&O<=w.width-V&&H>=0&&H<=w.height-B){Te.bindFramebuffer(L.FRAMEBUFFER,ve);const Se=w.texture,Le=Se.format,De=Se.type;if(!Ge.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),L.readPixels(O,H,V,B,ke.convert(Le),ke.convert(De),0);const Ye=P!==null?we.get(P).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Ye);const Je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await EA(L,Je,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie),L.deleteBuffer(be),L.deleteSync(Je),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,H=0){const V=Math.pow(2,-H),B=Math.floor(w.image.width*V),ie=Math.floor(w.image.height*V),ue=O!==null?O.x:0,ve=O!==null?O.y:0;R.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,ue,ve,B,ie),Te.unbindTexture()};const sS=L.createFramebuffer(),oS=L.createFramebuffer();this.copyTextureToTexture=function(w,O,H=null,V=null,B=0,ie=null){ie===null&&(B!==0?(gc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=B,B=0):ie=0);let ue,ve,Se,Le,De,be,Ye,Je,Ct;const St=w.isCompressedTexture?w.mipmaps[ie]:w.image;if(H!==null)ue=H.max.x-H.min.x,ve=H.max.y-H.min.y,Se=H.isBox3?H.max.z-H.min.z:1,Le=H.min.x,De=H.min.y,be=H.isBox3?H.min.z:0;else{const Rn=Math.pow(2,-B);ue=Math.floor(St.width*Rn),ve=Math.floor(St.height*Rn),w.isDataArrayTexture?Se=St.depth:w.isData3DTexture?Se=Math.floor(St.depth*Rn):Se=1,Le=0,De=0,be=0}V!==null?(Ye=V.x,Je=V.y,Ct=V.z):(Ye=0,Je=0,Ct=0);const Ke=ke.convert(O.format),Ae=ke.convert(O.type);let Ot;O.isData3DTexture?(R.setTexture3D(O,0),Ot=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(R.setTexture2DArray(O,0),Ot=L.TEXTURE_2D_ARRAY):(R.setTexture2D(O,0),Ot=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const et=L.getParameter(L.UNPACK_ROW_LENGTH),Vn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),xs=L.getParameter(L.UNPACK_SKIP_PIXELS),gn=L.getParameter(L.UNPACK_SKIP_ROWS),Oo=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Le),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,be);const pt=w.isDataArrayTexture||w.isData3DTexture,Cn=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const Rn=we.get(w),Qt=we.get(O),on=we.get(Rn.__renderTarget),Mu=we.get(Qt.__renderTarget);Te.bindFramebuffer(L.READ_FRAMEBUFFER,on.__webglFramebuffer),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mu.__webglFramebuffer);for(let Ii=0;Ii<Se;Ii++)pt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(w).__webglTexture,B,be+Ii),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(O).__webglTexture,ie,Ct+Ii)),L.blitFramebuffer(Le,De,ue,ve,Ye,Je,ue,ve,L.DEPTH_BUFFER_BIT,L.NEAREST);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||we.has(w)){const Rn=we.get(w),Qt=we.get(O);Te.bindFramebuffer(L.READ_FRAMEBUFFER,sS),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,oS);for(let on=0;on<Se;on++)pt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rn.__webglTexture,B,be+on):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Rn.__webglTexture,B),Cn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qt.__webglTexture,ie,Ct+on):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qt.__webglTexture,ie),B!==0?L.blitFramebuffer(Le,De,ue,ve,Ye,Je,ue,ve,L.COLOR_BUFFER_BIT,L.NEAREST):Cn?L.copyTexSubImage3D(Ot,ie,Ye,Je,Ct+on,Le,De,ue,ve):L.copyTexSubImage2D(Ot,ie,Ye,Je,Le,De,ue,ve);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Cn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Ot,ie,Ye,Je,Ct,ue,ve,Se,Ke,Ae,St.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Ot,ie,Ye,Je,Ct,ue,ve,Se,Ke,St.data):L.texSubImage3D(Ot,ie,Ye,Je,Ct,ue,ve,Se,Ke,Ae,St):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,Ye,Je,ue,ve,Ke,Ae,St.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,Ye,Je,St.width,St.height,Ke,St.data):L.texSubImage2D(L.TEXTURE_2D,ie,Ye,Je,ue,ve,Ke,Ae,St);L.pixelStorei(L.UNPACK_ROW_LENGTH,et),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Vn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xs),L.pixelStorei(L.UNPACK_SKIP_ROWS,gn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oo),ie===0&&O.generateMipmaps&&L.generateMipmap(Ot),Te.unbindTexture()},this.copyTextureToTexture3D=function(w,O,H=null,V=null,B=0){return gc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,H,V,B)},this.initRenderTarget=function(w){we.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Te.unbindTexture()},this.resetState=function(){C=0,b=0,P=null,Te.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}function Yy(){const t=D.useRef(null),e=D.useRef({x:0,y:0}),n=D.useRef(!1);return D.useEffect(()=>{if(!t.current)return;const r=new KA,i=new Un(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=30;const s=new zD({alpha:!0,antialias:!0});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(window.devicePixelRatio),t.current.appendChild(s.domElement),n.current=document.documentElement.classList.contains("dark");const o=()=>n.current?4906624:1096065,a=new Wr,l=1e3,c=new Float32Array(l*3),d=new Float32Array(l);for(let u=0;u<l;u++)c[u*3]=(Math.random()-.5)*100,c[u*3+1]=(Math.random()-.5)*100,c[u*3+2]=(Math.random()-.5)*100,d[u]=Math.random()*2;a.setAttribute("position",new On(c,3)),a.setAttribute("scale",new On(d,1));const f=new zy({color:o(),size:.15,transparent:!0,opacity:.9,sizeAttenuation:!0}),h=new JA(a,f);r.add(h);let m=0;const v=()=>{requestAnimationFrame(v),h.rotation.x+=1e-4,h.rotation.y+=1e-4,h.rotation.x+=e.current.y*5e-5,h.rotation.y+=e.current.x*5e-5;const u=document.documentElement.classList.contains("dark");u!==n.current&&(n.current=u,f.color.set(o())),m+=.01;const _=a.attributes.position.array,x=a.attributes.scale.array;for(let y=0;y<l;y++){const A=y*3,C=_[A],b=_[A+1];_[A+2],_[A]=C+Math.sin(m+y)*.01,_[A+1]=b+Math.cos(m+y)*.01,x[y]=Math.abs(Math.sin(m+y)*1.5)+.5}a.attributes.position.needsUpdate=!0,a.attributes.scale.needsUpdate=!0,s.render(r,i)};function g(u){e.current.x=u.clientX/window.innerWidth*2-1,e.current.y=-(u.clientY/window.innerHeight)*2+1}const p=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return v(),window.addEventListener("resize",p),document.addEventListener("mousemove",g),()=>{window.removeEventListener("resize",p),document.removeEventListener("mousemove",g),s.dispose(),t.current&&t.current.contains(s.domElement)&&t.current.removeChild(s.domElement)}},[]),E.jsx("div",{ref:t,className:"fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-60 dark:opacity-90"})}function ga(){const[t,e]=D.useState(!1);D.useEffect(()=>{const r=localStorage.getItem("theme")==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches;e(r)},[]),D.useEffect(()=>{t?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},[t]);const n=()=>{e(!t)};return E.jsxs("button",{onClick:n,className:"fixed z-[999] top-20 right-6 w-14 h-14 bg-white/95 dark:bg-gray-800/95 rounded-full shadow-xl flex items-center justify-center backdrop-blur-sm hover:shadow-2xl transition-all transform hover:scale-110 border-2 border-green-400/30 hover:border-green-500/50 animate-pulse-light","aria-label":t?"Switch to light mode":"Switch to dark mode",children:[!t&&E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 text-yellow-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}),t&&E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 text-green-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})]})}function Bs({children:t,speed:e=.2,className:n=""}){const r=D.useRef(null),[i,s]=D.useState(0),[o,a]=D.useState(!1);return D.useEffect(()=>{const l=()=>{if(!r.current)return;const c=r.current.getBoundingClientRect();if(c.top<window.innerHeight&&c.bottom>0){a(!0);const f=window.innerHeight/2,m=c.top+c.height/2-f;s(m*e)}};return window.addEventListener("scroll",l),l(),()=>{window.removeEventListener("scroll",l)}},[e]),E.jsx("div",{ref:r,className:`transform transition-opacity duration-700 ${o?"opacity-100":"opacity-0"} ${n}`,style:{transform:`translateY(${i}px)`,transition:"transform 0.1s ease-out"},children:t})}function HD(){const[t,e]=D.useState(0);D.useEffect(()=>{const s=()=>{e(window.scrollY)};return window.addEventListener("scroll",s,{passive:!0}),()=>{window.removeEventListener("scroll",s)}},[]);const n=Math.max(0,Math.min(1,1-t/500)),r=t*.5,i=1-t*.001;return E.jsxs("div",{className:"fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0",children:[E.jsx("div",{className:"absolute inset-0 flex items-center justify-center",style:{opacity:n,transform:`translateY(${r}px) scale(${i})`},children:E.jsxs("div",{className:"w-full h-full absolute",children:[E.jsxs("div",{className:"text-center z-10",children:[E.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-4 text-white",children:"Parth Bhodia"}),E.jsx("p",{className:"text-xl md:text-2xl text-green-200",children:"Software Developer"})]}),E.jsx("div",{className:"absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-green-400/30 to-green-600/30 filter blur-3xl animate-float"}),E.jsx("div",{className:"absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-green-500/20 to-green-700/20 filter blur-3xl",style:{animationDelay:"1s",animationDuration:"7s"}}),E.jsx("div",{className:"absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-green-300/20 to-green-500/20 filter blur-3xl",style:{animationDelay:"0.5s",animationDuration:"5s"}})]})}),E.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z'/%3E%3C/g%3E%3C/svg%3E")`,backgroundSize:"30px 30px"}})]})}function VD({title:t,description:e,tags:n,liveUrl:r,codeUrl:i,index:s=0}){const[o,a]=D.useState(!1),l=D.useRef(null),[c,d]=D.useState({x:0,y:0}),[f,h]=D.useState({x:0,y:0}),m=g=>{if(!l.current)return;const p=l.current.getBoundingClientRect(),u=g.clientX-p.left-p.width/2,_=g.clientY-p.top-p.height/2;d({x:_/10,y:-u/10}),h({x:u/20,y:_/20})},v=()=>{a(!1),d({x:0,y:0}),h({x:0,y:0})};return D.useEffect(()=>{l.current&&(l.current.classList.add("project-card-enter"),l.current.style.animationDelay=`${s*.1}s`);const g=setTimeout(()=>{l.current&&l.current.classList.remove("project-card-enter")},1e3);return()=>clearTimeout(g)},[s]),E.jsxs("div",{ref:l,onMouseEnter:()=>a(!0),onMouseMove:m,onMouseLeave:v,className:"relative h-96 bg-white/90 dark:bg-black/60 rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 ease-out hover:shadow-xl hover:scale-[1.02]",style:{transform:`perspective(1000px) rotateX(${c.x}deg) rotateY(${c.y}deg) translate3d(${f.x}px, ${f.y}px, 0)`,transformStyle:"preserve-3d"},children:[E.jsx("div",{className:"h-48 bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 flex items-center justify-center p-6 transform transition-transform duration-300",style:{transform:`translateZ(${o?"20px":"0px"})`,transformStyle:"preserve-3d"},children:E.jsx("h3",{className:"text-white text-xl font-medium text-center",children:t})}),E.jsxs("div",{className:"p-6 transform transition-transform duration-300",style:{transform:`translateZ(${o?"40px":"0px"})`,transformStyle:"preserve-3d"},children:[E.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:e}),E.jsx("div",{className:"flex flex-wrap gap-2 mb-4 transform transition-transform duration-300",style:{transform:`translateZ(${o?"60px":"0px"})`},children:n.map((g,p)=>E.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full",children:g},p))}),E.jsxs("div",{className:"flex space-x-3 transform transition-transform duration-300",style:{transform:`translateZ(${o?"60px":"0px"})`},children:[E.jsx("a",{href:r,className:"px-3 py-1 bg-green-600 dark:bg-green-500 text-white rounded hover:bg-green-700 dark:hover:bg-green-600 transition-colors",children:"View Live"}),E.jsx("a",{href:i,className:"px-3 py-1 border border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 rounded hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors",children:"Source Code"})]})]}),o&&E.jsx("div",{className:"absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"})]})}function GD({texts:t,typingSpeed:e=100,deletingSpeed:n=50,delayBetweenTexts:r=2e3,className:i=""}){const[s,o]=D.useState(""),[a,l]=D.useState(0),[c,d]=D.useState(!1),[f,h]=D.useState(!1);return D.useEffect(()=>{if(t.length===0)return;const m=()=>{const g=t[a],p=c?g.substring(0,s.length-1):g.substring(0,s.length+1);o(p),!c&&p===g?(h(!0),setTimeout(()=>{h(!1),d(!0)},r)):c&&p===""&&(d(!1),l((a+1)%t.length))};if(f)return;const v=setTimeout(m,c?n:e);return()=>clearTimeout(v)},[s,a,c,f,t,e,n,r]),E.jsxs("span",{className:i,children:[s,E.jsx("span",{className:"animate-blink",children:"|"})]})}function WD(){const[t,e]=D.useState(0);return D.useEffect(()=>{const n=()=>{const r=document.documentElement.scrollHeight-window.innerHeight,s=window.scrollY/r*100;e(s)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),E.jsx("div",{className:"fixed top-0 left-0 right-0 h-1 z-50",children:E.jsx("div",{className:"h-full bg-gradient-to-r from-green-400 to-green-600",style:{width:`${t}%`}})})}function jD(){const t=[{title:"Personalized Knowledge Assistant ChatBOT",description:"ChatBOT using GPT and Pinecone vector databases to predict vendor success rates based on historical data. Reduced time-to-information retrieval by 50%.",tags:["GPT","Pinecone","Machine Learning","Vector DB"],category:"AI/ML",liveUrl:"#",codeUrl:"#",featured:!0},{title:"CMS Management System",description:"Postgres schema design and implementation for CMS managing 100,000+ users with efficient data display and management.",tags:["PostgreSQL","Node.js","Database Design"],category:"Backend",liveUrl:"#",codeUrl:"#",featured:!0},{title:"AWS Authentication System",description:"Secure Login and Registration system with JWT authentication using AWS Amplify, Cognito, API Gateway, and Lambda Services.",tags:["AWS","JWT","Cognito","Lambda","API Gateway"],category:"Cloud/Security",liveUrl:"#",codeUrl:"#",featured:!0},{title:"Dynamic AWS Lambda Functions",description:"HTML content generation with Open Graph metadata for enhanced social media sharing and SEO for sports news platform.",tags:["AWS Lambda","SEO","Open Graph","HTML"],category:"Cloud",liveUrl:"#",codeUrl:"#",featured:!0},{title:"NLSE Sports Website with Stripe",description:"Sports entertainment website with integrated Stripe payment processing for ticket sales and event bookings.",tags:["Stripe","Payment Processing","Vue.js","Node.js"],category:"E-commerce",liveUrl:"#",codeUrl:"#",featured:!0},{title:"Project Spectrum (Government Website)",description:"Frontend solutions using HTMX and Vue.js for seamless dynamic interactions without full page reloads.",tags:["HTMX","Vue.js","Government","SPA"],category:"Government",liveUrl:"#",codeUrl:"#",featured:!0},{title:"GIS Enemy Detection Framework",description:"GIS-based visualization framework for detecting enemy objects using Elastic Search and Kibana with real-time data processing.",tags:["Elastic Search","Kibana","GIS","Java Spring Boot","RabbitMQ"],category:"Research",liveUrl:"#",codeUrl:"#",featured:!0},{title:"IPT Tool Dashboard",description:"Internal dashboard for 10,000+ users to monitor login activity, app usage, and security metrics with automated testing.",tags:["Django","Python","React","Dashboard","Analytics"],category:"Enterprise",liveUrl:"#",codeUrl:"#",featured:!0},{title:"Back-Bone Cost Map Automation",description:"Automation application using Python3 and Leaflet Open Maps for sales team route optimization, increasing APAC revenue by 36%.",tags:["Python3","Leaflet","Maps","Automation","Sales"],category:"Enterprise",liveUrl:"#",codeUrl:"#",featured:!0},{title:"Nutri AI Scan",description:"Award-winning progressive web app (2nd place CBIC Entrepreneurship UMBC) using OCR to identify allergens and provide healthiness ratings.",tags:["Vue.js","OCR","REST API","MongoDB","PWA"],category:"AI/ML",liveUrl:"#",codeUrl:"#",featured:!0}],e=["All","AI/ML","Backend","Cloud/Security","Cloud","E-commerce","Government","Research","Enterprise"],[n,r]=D.useState("AI/ML"),[i,s]=D.useState(!1),[o,a]=D.useState({name:"",email:"",subject:"",message:""}),[l,c]=D.useState(!1),[d,f]=D.useState(""),[h,m]=D.useState(!1),[v,g]=D.useState(!1),[p,u]=D.useState([{text:"Hello! I'm here to help you learn about Parth Bhodia. Ask me about his skills, experience, projects, education, or visa status!",isUser:!1,timestamp:new Date}]),[_,x]=D.useState(""),y=D.useRef(null),A=I=>{const{name:F,value:X}=I.target;a($=>({...$,[F]:X}))},C=async I=>{I.preventDefault(),c(!0),f("");try{const F=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),X=await F.json();F.ok?(m(!0),f("Your message has been sent successfully!"),a({name:"",email:"",subject:"",message:""})):(m(!1),f(X.message||"There was an error sending your message. Please try again."))}catch(F){m(!1),f("Network error. Please check your connection and try again."),console.error("Error submitting form:",F)}finally{c(!1)}},b=()=>{g(I=>!I)};D.useEffect(()=>{v&&y.current&&P()},[p,v]);const P=()=>{y.current&&(y.current.scrollTop=y.current.scrollHeight)},T=I=>{const F=I.toLowerCase().trim();return F.includes("experience")||F.includes("work")||F.includes("job")?"I have experience at Eccalon LLC (2022-Present) as a Fullstack Developer, UMBC as Research Assistant (2022), and Tata Communications (2018-2021) as Software Developer. I've worked on AI/ML projects, enterprise dashboards, and automation systems.":F.includes("skills")||F.includes("technology")||F.includes("tech")?"My core skills include JavaScript (95%), TypeScript (90%), Vue.js (90%), React (85%), Node.js (90%), Python (85%), and cloud technologies like AWS. I also work with databases like PostgreSQL and MongoDB.":F.includes("education")||F.includes("degree")||F.includes("study")?"I graduated from University of Maryland, Baltimore County (UMBC) in May 2023 with a Master's degree in Computer Science. I'm currently on F1 OPT status.":F.includes("project")||F.includes("portfolio")?"My featured projects include a Personalized Knowledge Assistant ChatBOT using GPT and Pinecone, CMS Management System for 100K+ users, and Nutri AI Scan (award-winning PWA). Check out the Projects section for more details!":F.includes("visa")||F.includes("status")||F.includes("opt")?"I'm currently on F1 OPT status after graduating from UMBC in May 2023. I'm authorized to work in the US and looking for full-time opportunities.":F.includes("contact")||F.includes("hire")||F.includes("reach")?"You can reach me at parthbhodia08@gmail.com or through the contact form on this website. I'm actively looking for software development opportunities!":F.includes("ai")||F.includes("machine learning")||F.includes("ml")?"I have strong experience in AI/ML, including developing a ChatBOT with GPT and Pinecone vector databases, OCR-based applications, and data analytics. It's one of my primary areas of expertise.":F.includes("hello")||F.includes("hi")||F.includes("hey")?"Hello! I'm Parth's portfolio assistant. I can tell you about his work experience, skills, education, projects, or visa status. What would you like to know?":F.includes("location")||F.includes("where")?"I'm based in Maryland, USA. I'm available for remote work or positions in the DMV area (DC, Maryland, Virginia).":"I can help you learn about Parth's experience, skills, education, projects, or contact information. Try asking about his work experience, technical skills, or recent projects!"},M=async I=>{if(I.preventDefault(),!_.trim())return;const F={text:_,isUser:!0,timestamp:new Date};u($=>[...$,F]);const X=_;x("");try{const $=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:X})});if($.ok){const j=await $.json();u(Q=>[...Q,{text:j.response||T(X),isUser:!1,timestamp:new Date}])}else throw new Error("API not available")}catch{setTimeout(()=>{u(j=>[...j,{text:T(X),isUser:!1,timestamp:new Date}])},500)}},N=I=>Db(new Date(I),"h:mm a");return E.jsxs("div",{className:"min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100",children:[E.jsx(WD,{}),E.jsx(ga,{}),E.jsx(Yy,{}),E.jsx("nav",{className:"bg-white/90 dark:bg-black/90 backdrop-blur-sm sticky top-0 z-50 shadow-md",children:E.jsxs("div",{className:"container mx-auto px-4 py-4",children:[E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsx("div",{className:"text-xl font-bold bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"Parth Bhodia"}),E.jsxs("div",{className:"hidden md:flex items-center space-x-6",children:[E.jsx("a",{href:"#companies",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Companies"}),E.jsx("a",{href:"#about",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"About"}),E.jsx("a",{href:"/skills",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Skills"}),E.jsx("a",{href:"#projects",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Projects"}),E.jsx("a",{href:"#contact",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Contact"}),E.jsx(ga,{})]}),E.jsxs("div",{className:"md:hidden flex items-center space-x-4",children:[E.jsx(ga,{}),E.jsx("button",{onClick:()=>s(!i),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors",children:i?E.jsx(Rp,{size:24}):E.jsx(Zx,{size:24})})]})]}),i&&E.jsx("div",{className:"md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700",children:E.jsxs("div",{className:"flex flex-col space-y-4 pt-4",children:[E.jsx("a",{href:"#companies",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>s(!1),children:"Companies"}),E.jsx("a",{href:"#about",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>s(!1),children:"About"}),E.jsx("a",{href:"/skills",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>s(!1),children:"Skills"}),E.jsx("a",{href:"#projects",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>s(!1),children:"Projects"}),E.jsx("a",{href:"#contact",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>s(!1),children:"Contact"})]})})]})}),E.jsx(HD,{}),E.jsx("section",{className:"min-h-screen flex items-center justify-center relative -mt-screen",children:E.jsxs("div",{className:"container mx-auto px-4 flex flex-col items-center z-10",children:[E.jsx(Bs,{speed:.4,className:"mb-8",children:E.jsx("div",{className:"w-32 h-32 rounded-full bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 flex items-center justify-center text-4xl text-white shadow-lg transform transition-all duration-500 hover:scale-110",children:"PB"})}),E.jsx(Bs,{speed:.2,className:"mb-4",children:E.jsxs("h1",{className:"text-4xl md:text-6xl font-bold text-center mb-4",children:["Hi, I'm ",E.jsx("span",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"Parth Bhodia"})]})}),E.jsx(Bs,{speed:.1,className:"mb-8",children:E.jsxs("div",{className:"text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 max-w-2xl backdrop-blur-sm py-2 px-4 rounded-lg bg-white/10 dark:bg-black/20",children:["I'm a ",E.jsx(GD,{texts:["Software Developer","Full Stack Engineer","Vue.js Expert","React Developer","AWS Cloud Specialist","Python Developer"],className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text font-semibold"})]})}),E.jsx(Bs,{speed:-.1,children:E.jsxs("div",{className:"flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",children:[E.jsx("a",{href:"#contact",className:"px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1",children:"Get in Touch"}),E.jsx("a",{href:"#projects",className:"px-6 py-3 border-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 rounded-md hover:bg-green-600/10 dark:hover:bg-green-500/10 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1",children:"View Projects"}),E.jsxs("a",{href:"/resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"px-6 py-3 bg-gray-600 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center",children:[E.jsx("span",{children:"Download Resume"}),E.jsx("svg",{className:"w-4 h-4 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})})]})]})})]})}),E.jsx("section",{id:"companies",className:"py-20",children:E.jsxs("div",{className:"container mx-auto px-4",children:[E.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:E.jsx("span",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"Companies I've Worked With"})}),E.jsxs("div",{className:"relative",children:[E.jsx("div",{className:"overflow-hidden",children:E.jsx("div",{id:"companies-carousel",className:"flex gap-6 transition-transform duration-500 ease-in-out px-4",children:[{name:"Eccalon LLC",logo:"https://media.glassdoor.com/sqll/2356227/eccalon-squarelogo-1556550788109.png",role:"Fullstack Developer",period:"May 2022 - Present",description:"Developed personalized knowledge assistant ChatBOT using GPT and Pinecone vector databases, reducing time-to-information retrieval by 50%. Designed Postgres schema for CMS managing 100K+ users. Built secure authentication systems with AWS services."},{name:"University of Maryland, Baltimore County",logo:"https://www.interfolio.com/wp-content/uploads/umbc.png",role:"Research Assistant - Software Developer",period:"Jan 2022 - Dec 2022",description:"Developed GIS-based visualization framework for detecting enemy objects using Elastic Search and Kibana. Used Java Spring Boot to control servers and communicate with edge devices using RabbitMQ."},{name:"Tata Communications Ltd.",logo:"https://cdn.freebiesupply.com/logos/large/2x/tata-communications-logo-png-transparent.png",role:"Software Developer",period:"July 2018 - May 2021",description:"Led development of internal IPT Tool dashboard for 10,000+ users using Django, Python, JavaScript, and React. Developed automation application for Back-Bone Cost Map, increasing APAC region revenue by 36%."},{name:"Eccalon LLC",logo:"https://media.glassdoor.com/sqll/2356227/eccalon-squarelogo-1556550788109.png",role:"Fullstack Developer",period:"May 2022 - Present",description:"Developed personalized knowledge assistant ChatBOT using GPT and Pinecone vector databases, reducing time-to-information retrieval by 50%. Designed Postgres schema for CMS managing 100K+ users. Built secure authentication systems with AWS services."},{name:"University of Maryland, Baltimore County",logo:"https://www.interfolio.com/wp-content/uploads/umbc.png",role:"Research Assistant - Software Developer",period:"Jan 2022 - Dec 2022",description:"Developed GIS-based visualization framework for detecting enemy objects using Elastic Search and Kibana. Used Java Spring Boot to control servers and communicate with edge devices using RabbitMQ."}].map((I,F)=>E.jsxs(wT,{children:[E.jsx(TT,{asChild:!0,children:E.jsxs("div",{className:"bg-white/90 dark:bg-black/40 p-6 rounded-lg shadow-lg backdrop-blur-sm cursor-pointer w-72 flex-shrink-0",children:[E.jsx("div",{className:"h-16 flex items-center justify-center mb-4",children:E.jsx("img",{src:I.logo,alt:I.name,className:"max-h-full object-contain"})}),E.jsx("h3",{className:"text-xl font-semibold mb-2 text-center",children:I.name}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-center",children:I.role}),E.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-500 text-center",children:I.period})]})}),E.jsx(oy,{className:"sm:max-w-[425px]",children:E.jsxs(ay,{children:[E.jsxs(ly,{className:"flex items-center gap-2",children:[E.jsx("img",{src:I.logo,alt:I.name,className:"h-8 object-contain"}),E.jsx("span",{children:I.name})]}),E.jsxs(cy,{className:"pt-4",children:[E.jsxs("div",{className:"mb-4",children:[E.jsx("p",{className:"font-semibold text-green-600 dark:text-green-400",children:I.role}),E.jsx("p",{className:"text-sm text-gray-500",children:I.period})]}),E.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:I.description})]})]})})]},F))})}),E.jsx("button",{onClick:()=>{var F;const I=document.getElementById("companies-carousel");if(I){const $=I.style.transform||"translateX(0px)",Q=parseInt(((F=$.match(/-?\d+/))==null?void 0:F[0])||"0")+300;Q>0?I.style.transform=`translateX(-${300*2}px)`:I.style.transform=`translateX(${Q}px)`}},className:"absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 p-3 rounded-full shadow-xl z-30 hover:bg-white dark:hover:bg-gray-900 transition-all",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),E.jsx("button",{onClick:()=>{var F;const I=document.getElementById("companies-carousel");if(I){const $=I.style.transform||"translateX(0px)",Q=parseInt(((F=$.match(/-?\d+/))==null?void 0:F[0])||"0")-300;Math.abs(Q)>=300*3?I.style.transform="translateX(0px)":I.style.transform=`translateX(${Q}px)`}},className:"absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 p-3 rounded-full shadow-xl z-30 hover:bg-white dark:hover:bg-gray-900 transition-all",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})]})}),E.jsx("section",{id:"about",className:"py-20 bg-gray-50 dark:bg-gray-900/40 backdrop-blur-sm",children:E.jsxs("div",{className:"container mx-auto px-4",children:[E.jsx("h2",{className:"text-3xl font-bold mb-12 text-center relative",children:E.jsx("span",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"About Me"})}),E.jsxs("div",{className:"max-w-3xl mx-auto text-gray-700 dark:text-gray-300 space-y-4 bg-white/80 dark:bg-black/40 p-6 rounded-lg shadow-md backdrop-blur-sm",children:[E.jsx("p",{children:"I'm a Software Developer with over 5 years of experience in HTML, CSS, SASS, SCSS, TypeScript, JavaScript, Node.js, Python, and AWS. I'm proficient with modern frameworks such as Vue.js, Nuxt, and React, with extensive experience in REST APIs and GraphQL."}),E.jsx("p",{children:"Currently based in Jersey City, NJ, I'm on F1 OPT status and graduated with a Master's in Computer Science from UMBC in May 2023. My expertise spans from building ChatBOTs with GPT and vector databases to designing systems for 100K+ users."}),E.jsx("p",{children:"I've led projects that reduced information retrieval time by 50% and increased revenue by 36% through automation. I'm passionate about creating efficient, scalable solutions and stay current with emerging technologies in cloud computing and AI/ML."})]})]})}),E.jsx("section",{id:"projects",className:"py-20 bg-gray-50/80 dark:bg-gray-900/30 backdrop-blur-sm",children:E.jsxs("div",{className:"container mx-auto px-4",children:[E.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:E.jsx("span",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"My Projects"})}),E.jsx("div",{className:"flex justify-center flex-wrap gap-2 mb-12",children:e.map((I,F)=>E.jsx("button",{onClick:()=>r(I),className:`px-4 py-2 rounded-full transition-all duration-300 ${n===I?"bg-green-500 dark:bg-green-600 text-white shadow-lg category-tab-active":"bg-white/70 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30 hover:shadow-md"}`,children:I},F))}),E.jsxs(Bs,{speed:.1,children:[E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.filter(I=>n==="All"||I.category===n).map((I,F)=>E.jsx(VD,{title:I.title,description:I.description,tags:I.tags,liveUrl:I.liveUrl,codeUrl:I.codeUrl,index:F},`${n}-${F}`))},n),t.filter(I=>n==="All"||I.category===n).length===0&&E.jsx("div",{className:"text-center py-20 text-gray-500 dark:text-gray-400",children:E.jsx("p",{className:"text-xl",children:"No projects found in this category."})})]})]})}),E.jsx("section",{id:"contact",className:"py-20 bg-white/80 dark:bg-black/40 backdrop-blur-sm",children:E.jsxs("div",{className:"container mx-auto px-4",children:[E.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:E.jsx("span",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"Get In Touch"})}),E.jsx(Bs,{speed:.05,children:E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto",children:[E.jsxs("div",{className:"bg-white/70 dark:bg-black/50 p-6 rounded-lg shadow-md backdrop-blur-sm",children:[E.jsx("h3",{className:"text-xl font-medium mb-6 text-gray-800 dark:text-gray-200",children:"Contact Information"}),E.jsxs("div",{className:"space-y-6 mb-6",children:[E.jsxs("div",{className:"flex items-center transform transition-transform hover:translate-x-2",children:[E.jsx("div",{className:"w-10 h-10 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center mr-4 shadow-md",children:E.jsx("span",{className:"text-green-600 dark:text-green-400",children:"📧"})}),E.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"contact@alexchen.com"})]}),E.jsxs("div",{className:"flex items-center transform transition-transform hover:translate-x-2",children:[E.jsx("div",{className:"w-10 h-10 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center mr-4 shadow-md",children:E.jsx("span",{className:"text-green-600 dark:text-green-400",children:"📱"})}),E.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"+1 (123) 456-7890"})]}),E.jsxs("div",{className:"flex items-center transform transition-transform hover:translate-x-2",children:[E.jsx("div",{className:"w-10 h-10 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center mr-4 shadow-md",children:E.jsx("span",{className:"text-green-600 dark:text-green-400",children:"📍"})}),E.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"San Francisco, CA"})]})]})]}),E.jsxs("form",{onSubmit:C,className:"space-y-4 bg-white/70 dark:bg-black/50 p-6 rounded-lg shadow-md backdrop-blur-sm",children:[E.jsxs("div",{children:[E.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Name"}),E.jsx("input",{type:"text",id:"name",name:"name",value:o.name,onChange:A,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email"}),E.jsx("input",{type:"email",id:"email",name:"email",value:o.email,onChange:A,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Subject"}),E.jsx("input",{type:"text",id:"subject",name:"subject",value:o.subject,onChange:A,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Message"}),E.jsx("textarea",{id:"message",name:"message",value:o.message,onChange:A,rows:4,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"})]}),E.jsx("button",{type:"submit",disabled:l,className:"w-full py-3 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white rounded-md hover:from-green-600 hover:to-green-700 dark:hover:from-green-500 dark:hover:to-green-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none disabled:hover:shadow-md",children:l?"Sending...":"Send Message"}),d&&E.jsx("p",{className:`text-center mt-4 ${h?"text-green-600":"text-red-600"}`,children:d})]})]})})]})}),E.jsx("div",{className:"fixed bottom-6 right-6 z-40",children:E.jsx("button",{onClick:b,className:"w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:from-green-600 hover:to-green-700 dark:hover:from-green-500 dark:hover:to-green-600 transition-all transform hover:scale-110",children:E.jsx("span",{className:"text-xl",children:v?"✕":"💬"})})}),v&&E.jsxs("div",{className:"fixed bottom-24 right-6 w-80 md:w-96 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden z-50 border border-green-200 dark:border-green-900",children:[E.jsx("div",{className:"p-4 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white",children:E.jsx("h3",{className:"font-medium",children:"Portfolio Assistant"})}),E.jsx("div",{ref:y,className:"h-96 overflow-y-auto p-4 flex flex-col gap-3",children:p.map((I,F)=>E.jsxs("div",{className:`max-w-[80%] p-3 rounded-lg ${I.isUser?"bg-green-100 dark:bg-green-900/60 text-gray-800 dark:text-gray-200 self-end shadow-md":"bg-gray-100 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 self-start shadow-md"}`,children:[I.text,E.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:N(I.timestamp)})]},F))}),E.jsx("div",{className:"p-3 border-t border-gray-200 dark:border-gray-800",children:E.jsxs("form",{onSubmit:M,className:"flex gap-2",children:[E.jsx("input",{type:"text",value:_,onChange:I=>x(I.target.value),placeholder:"Ask me anything...",className:"flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"}),E.jsx("button",{type:"submit",disabled:!_.trim(),className:"px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white rounded-md hover:from-green-600 hover:to-green-700 dark:hover:from-green-500 dark:hover:to-green-600 transition-all disabled:opacity-70",children:"Send"})]})})]}),E.jsx("footer",{className:"py-12 bg-gray-50/70 dark:bg-gray-900/50 backdrop-blur-md border-t border-gray-200 dark:border-gray-800",children:E.jsxs("div",{className:"container mx-auto px-4",children:[E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:[E.jsxs("div",{className:"space-y-4",children:[E.jsxs("div",{className:"flex items-center space-x-2",children:[E.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 flex items-center justify-center text-sm text-white font-bold",children:"PB"}),E.jsx("h3",{className:"text-xl font-semibold bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"Parth Bhodia"})]}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Software Developer specializing in Vue.js, React, Node.js, Python, and AWS. Building scalable solutions with modern technologies."}),E.jsxs("div",{className:"flex space-x-4 text-gray-500 dark:text-gray-400",children:[E.jsx("a",{href:"https://github.com/parthbhodia",target:"_blank",rel:"noopener noreferrer",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),E.jsx("a",{href:"https://linkedin.com/in/parthbhodia",target:"_blank",rel:"noopener noreferrer",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),E.jsx("a",{href:"mailto:parthbhodia08@gmail.com",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{d:"M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"})})})]})]}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-lg font-medium mb-4 text-gray-900 dark:text-gray-100",children:"Quick Links"}),E.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-400",children:[E.jsx("li",{children:E.jsxs("a",{href:"#about",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center",children:[E.jsx("span",{className:"mr-2",children:"→"})," About Me"]})}),E.jsx("li",{children:E.jsxs("a",{href:"#skills",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center",children:[E.jsx("span",{className:"mr-2",children:"→"})," Skills & Expertise"]})}),E.jsx("li",{children:E.jsxs("a",{href:"#projects",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center",children:[E.jsx("span",{className:"mr-2",children:"→"})," Portfolio Projects"]})}),E.jsx("li",{children:E.jsxs("a",{href:"#contact",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center",children:[E.jsx("span",{className:"mr-2",children:"→"})," Get In Touch"]})})]})]}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-lg font-medium mb-4 text-gray-900 dark:text-gray-100",children:"Stay Updated"}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm mb-4",children:"Subscribe to my newsletter for the latest articles, projects, and tech insights."}),E.jsxs("form",{className:"flex",children:[E.jsx("input",{type:"email",placeholder:"Your email address",className:"flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800/30 bg-white/80 backdrop-blur-sm"}),E.jsx("button",{type:"submit",className:"px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white rounded-r-md hover:from-green-600 hover:to-green-700 dark:hover:from-green-500 dark:hover:to-green-600 transition-all",children:"Subscribe"})]})]})]}),E.jsx("div",{className:"border-t border-gray-200 dark:border-gray-800 my-8"}),E.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400",children:[E.jsxs("p",{children:["© ",new Date().getFullYear()," Parth Bhodia. All rights reserved."]}),E.jsxs("div",{className:"mt-4 md:mt-0 flex items-center space-x-4",children:[E.jsx("a",{href:"mailto:parthbhodia08@gmail.com",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Contact"}),E.jsx("span",{className:"text-gray-300 dark:text-gray-700",children:"•"}),E.jsx("a",{href:"tel:+14439294371",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"+1 443-929-4371"}),E.jsx("span",{className:"text-gray-300 dark:text-gray-700",children:"•"}),E.jsx("a",{href:"https://linkedin.com/in/parthbhodia",target:"_blank",rel:"noopener noreferrer",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"LinkedIn"})]})]})]})})]})}function XD(){const[t,e]=D.useState(!1),n=[{name:"JavaScript",level:95},{name:"TypeScript",level:90},{name:"Vue.js",level:90},{name:"React",level:85},{name:"Node.js",level:90},{name:"Python",level:85},{name:"HTML/CSS/SASS",level:95},{name:"Java (Spring Boot)",level:80},{name:"AWS",level:85},{name:"PostgreSQL",level:80},{name:"MongoDB",level:75},{name:"GraphQL",level:75}];return E.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden",children:[E.jsx(Yy,{}),E.jsx("nav",{className:"bg-white/90 dark:bg-black/90 backdrop-blur-sm sticky top-0 z-50 shadow-md",children:E.jsxs("div",{className:"container mx-auto px-4 py-4",children:[E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsx(xn,{href:"/",children:E.jsx("div",{className:"text-xl font-bold bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text cursor-pointer",children:"Parth Bhodia"})}),E.jsxs("div",{className:"hidden md:flex items-center space-x-6",children:[E.jsx(xn,{href:"/#companies",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Companies"}),E.jsx(xn,{href:"/#about",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"About"}),E.jsx(xn,{href:"/skills",className:"font-medium text-green-600 dark:text-green-400",children:"Skills"}),E.jsx(xn,{href:"/#projects",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Projects"}),E.jsx(xn,{href:"/#contact",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Contact"}),E.jsx(ga,{})]}),E.jsxs("div",{className:"md:hidden flex items-center space-x-4",children:[E.jsx(ga,{}),E.jsx("button",{onClick:()=>e(!t),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors",children:t?E.jsx(Rp,{size:24}):E.jsx(Zx,{size:24})})]})]}),t&&E.jsx("div",{className:"md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700",children:E.jsxs("div",{className:"flex flex-col space-y-4 pt-4",children:[E.jsx(xn,{href:"/#companies",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>e(!1),children:"Companies"}),E.jsx(xn,{href:"/#about",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>e(!1),children:"About"}),E.jsx(xn,{href:"/skills",className:"font-medium text-green-600 dark:text-green-400",onClick:()=>e(!1),children:"Skills"}),E.jsx(xn,{href:"/#projects",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>e(!1),children:"Projects"}),E.jsx(xn,{href:"/#contact",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>e(!1),children:"Contact"})]})})]})}),E.jsx("section",{className:"py-20 relative z-10",children:E.jsxs("div",{className:"container mx-auto px-4",children:[E.jsxs("div",{className:"text-center mb-12",children:[E.jsx("h1",{className:"text-4xl font-bold mb-4",children:E.jsx("span",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"Technical Skills"})}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"Here's a comprehensive overview of my technical expertise and proficiency levels across various technologies and frameworks."})]}),E.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",children:n.map((r,i)=>E.jsxs("div",{className:"bg-white/90 dark:bg-black/40 p-6 rounded-lg shadow-lg backdrop-blur-sm transform transition-all duration-500 hover:scale-105",children:[E.jsxs("div",{className:"flex justify-between items-center mb-3",children:[E.jsx("span",{className:"font-semibold text-lg",children:r.name}),E.jsxs("span",{className:"text-sm font-medium text-green-600 dark:text-green-400",children:[r.level,"%"]})]}),E.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3",children:E.jsx("div",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 h-3 rounded-full transition-all duration-1000",style:{width:`${r.level}%`}})})]},i))}),E.jsx("div",{className:"text-center mt-12",children:E.jsx(xn,{href:"/",children:E.jsx("button",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300",children:"Back to Home"})})})]})})]})}function YD(){return E.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100",children:[E.jsx("div",{className:"text-9xl font-bold text-blue-600 dark:text-blue-500 mb-6",children:"404"}),E.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-center mb-4",children:"Page Not Found"}),E.jsx("p",{className:"text-xl text-center text-gray-600 dark:text-gray-400 max-w-md mb-8",children:"The page you are looking for doesn't exist or has been moved."}),E.jsx(xn,{href:"/",children:E.jsx("a",{className:"px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",children:"Go Back Home"})})]})}function qD(){const[t,e]=D.useState({x:0,y:0}),[n,r]=D.useState(!1),[i,s]=D.useState(!1);return D.useEffect(()=>{const o=d=>{e({x:d.clientX,y:d.clientY}),i||s(!0)},a=d=>{const f=d.target,h=f.tagName==="BUTTON"||f.tagName==="A"||f.closest("button")!==null||f.closest("a")!==null||f.getAttribute("role")==="button"||window.getComputedStyle(f).cursor==="pointer";r(!!h)},l=()=>{s(!1)},c=()=>{s(!0)};return document.addEventListener("mousemove",o),document.addEventListener("mouseover",a),document.addEventListener("mouseleave",l),document.addEventListener("mouseenter",c),()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseover",a),document.removeEventListener("mouseleave",l),document.removeEventListener("mouseenter",c)}},[i]),typeof window<"u"&&"ontouchstart"in window?null:E.jsx("div",{className:`custom-cursor ${n?"hover":""}`,style:{left:`${t.x}px`,top:`${t.y}px`,opacity:i?1:0}})}const $D=()=>{if(typeof window<"u"){const t=window.localStorage.getItem("theme");if(t)return t}return"dark"};function KD(){return D.useEffect(()=>{const t=$D();document.documentElement.classList.add("dark"),t==="light"&&document.documentElement.classList.remove("dark"),typeof window<"u"&&!window.localStorage.getItem("theme")&&window.localStorage.setItem("theme","dark")},[]),E.jsxs("div",{className:"app",children:[E.jsx(qD,{}),E.jsxs(cw,{children:[E.jsx(Qu,{path:"/",component:jD}),E.jsx(Qu,{path:"/skills",component:XD}),E.jsx(Qu,{component:YD})]})]})}function QD(){return E.jsx(KD,{})}var xu=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},yu=typeof window>"u"||"Deno"in globalThis;function qn(){}function ZD(t,e){return typeof t=="function"?t(e):t}function JD(t){return typeof t=="number"&&t>=0&&t!==1/0}function eN(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Av(t,e){return typeof t=="function"?t(e):t}function tN(t,e){return typeof t=="function"?t(e):t}function Cv(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:a}=t;if(o){if(r){if(e.queryHash!==zp(o,e.options))return!1}else if(!za(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||i&&i!==e.state.fetchStatus||s&&!s(e))}function Rv(t,e){const{exact:n,status:r,predicate:i,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(Ba(e.options.mutationKey)!==Ba(s))return!1}else if(!za(e.options.mutationKey,s))return!1}return!(r&&e.state.status!==r||i&&!i(e))}function zp(t,e){return((e==null?void 0:e.queryKeyHashFn)||Ba)(t)}function Ba(t){return JSON.stringify(t,(e,n)=>Th(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function za(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!za(t[n],e[n])):!1}function qy(t,e){if(t===e)return t;const n=Pv(t)&&Pv(e);if(n||Th(t)&&Th(e)){const r=n?t:Object.keys(t),i=r.length,s=n?e:Object.keys(e),o=s.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const d=n?c:s[c];(!n&&r.includes(d)||n)&&t[d]===void 0&&e[d]===void 0?(a[d]=void 0,l++):(a[d]=qy(t[d],e[d]),a[d]===t[d]&&t[d]!==void 0&&l++)}return i===o&&l===i?t:a}return e}function Pv(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Th(t){if(!Dv(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!Dv(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Dv(t){return Object.prototype.toString.call(t)==="[object Object]"}function nN(t){return new Promise(e=>{setTimeout(e,t)})}function rN(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?qy(t,e):e}function iN(t,e,n=0){const r=[...t,e];return n&&r.length>n?r.slice(1):r}function sN(t,e,n=0){const r=[e,...t];return n&&r.length>n?r.slice(0,-1):r}var Hp=Symbol();function $y(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Hp?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var Ji,li,co,Iv,oN=(Iv=class extends xu{constructor(){super();tt(this,Ji);tt(this,li);tt(this,co);Oe(this,co,e=>{if(!yu&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){Z(this,li)||this.setEventListener(Z(this,co))}onUnsubscribe(){var e;this.hasListeners()||((e=Z(this,li))==null||e.call(this),Oe(this,li,void 0))}setEventListener(e){var n;Oe(this,co,e),(n=Z(this,li))==null||n.call(this),Oe(this,li,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){Z(this,Ji)!==e&&(Oe(this,Ji,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof Z(this,Ji)=="boolean"?Z(this,Ji):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Ji=new WeakMap,li=new WeakMap,co=new WeakMap,Iv),Ky=new oN,uo,ci,fo,Uv,aN=(Uv=class extends xu{constructor(){super();tt(this,uo,!0);tt(this,ci);tt(this,fo);Oe(this,fo,e=>{if(!yu&&window.addEventListener){const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){Z(this,ci)||this.setEventListener(Z(this,fo))}onUnsubscribe(){var e;this.hasListeners()||((e=Z(this,ci))==null||e.call(this),Oe(this,ci,void 0))}setEventListener(e){var n;Oe(this,fo,e),(n=Z(this,ci))==null||n.call(this),Oe(this,ci,e(this.setOnline.bind(this)))}setOnline(e){Z(this,uo)!==e&&(Oe(this,uo,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return Z(this,uo)}},uo=new WeakMap,ci=new WeakMap,fo=new WeakMap,Uv),qc=new aN;function lN(){let t,e;const n=new Promise((i,s)=>{t=i,e=s});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),t(i)},n.reject=i=>{r({status:"rejected",reason:i}),e(i)},n}function cN(t){return Math.min(1e3*2**t,3e4)}function Qy(t){return(t??"online")==="online"?qc.isOnline():!0}var Zy=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Od(t){return t instanceof Zy}function Jy(t){let e=!1,n=0,r=!1,i;const s=lN(),o=g=>{var p;r||(h(new Zy(g)),(p=t.abort)==null||p.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>Ky.isFocused()&&(t.networkMode==="always"||qc.isOnline())&&t.canRun(),d=()=>Qy(t.networkMode)&&t.canRun(),f=g=>{var p;r||(r=!0,(p=t.onSuccess)==null||p.call(t,g),i==null||i(),s.resolve(g))},h=g=>{var p;r||(r=!0,(p=t.onError)==null||p.call(t,g),i==null||i(),s.reject(g))},m=()=>new Promise(g=>{var p;i=u=>{(r||c())&&g(u)},(p=t.onPause)==null||p.call(t)}).then(()=>{var g;i=void 0,r||(g=t.onContinue)==null||g.call(t)}),v=()=>{if(r)return;let g;const p=n===0?t.initialPromise:void 0;try{g=p??t.fn()}catch(u){g=Promise.reject(u)}Promise.resolve(g).then(f).catch(u=>{var C;if(r)return;const _=t.retry??(yu?0:3),x=t.retryDelay??cN,y=typeof x=="function"?x(n,u):x,A=_===!0||typeof _=="number"&&n<_||typeof _=="function"&&_(n,u);if(e||!A){h(u);return}n++,(C=t.onFail)==null||C.call(t,n,u),nN(y).then(()=>c()?void 0:m()).then(()=>{e?h(u):v()})})};return{promise:s,cancel:o,continue:()=>(i==null||i(),s),cancelRetry:a,continueRetry:l,canStart:d,start:()=>(d()?v():m().then(v),s)}}function uN(){let t=[],e=0,n=a=>{a()},r=a=>{a()},i=a=>setTimeout(a,0);const s=a=>{e?t.push(a):i(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&i(()=>{r(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{s(()=>{a(...l)})},schedule:s,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{i=a}}}var tn=uN(),es,Fv,eS=(Fv=class{constructor(){tt(this,es)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),JD(this.gcTime)&&Oe(this,es,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(yu?1/0:5*60*1e3))}clearGcTimeout(){Z(this,es)&&(clearTimeout(Z(this,es)),Oe(this,es,void 0))}},es=new WeakMap,Fv),ho,po,Dn,qt,Ha,ts,$n,Tr,kv,dN=(kv=class extends eS{constructor(e){super();tt(this,$n);tt(this,ho);tt(this,po);tt(this,Dn);tt(this,qt);tt(this,Ha);tt(this,ts);Oe(this,ts,!1),Oe(this,Ha,e.defaultOptions),this.setOptions(e.options),this.observers=[],Oe(this,Dn,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,Oe(this,ho,hN(this.options)),this.state=e.state??Z(this,ho),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=Z(this,qt))==null?void 0:e.promise}setOptions(e){this.options={...Z(this,Ha),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&Z(this,Dn).remove(this)}setData(e,n){const r=rN(this.state.data,e,this.options);return Gt(this,$n,Tr).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){Gt(this,$n,Tr).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var r,i;const n=(r=Z(this,qt))==null?void 0:r.promise;return(i=Z(this,qt))==null||i.cancel(e),n?n.then(qn).catch(qn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(Z(this,ho))}isActive(){return this.observers.some(e=>tN(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Hp||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!eN(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(r=>r.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=Z(this,qt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(r=>r.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=Z(this,qt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),Z(this,Dn).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(Z(this,qt)&&(Z(this,ts)?Z(this,qt).cancel({revert:!0}):Z(this,qt).cancelRetry()),this.scheduleGc()),Z(this,Dn).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Gt(this,$n,Tr).call(this,{type:"invalidate"})}fetch(e,n){var l,c,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(Z(this,qt))return Z(this,qt).continueRetry(),Z(this,qt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const f=this.observers.find(h=>h.options.queryFn);f&&this.setOptions(f.options)}const r=new AbortController,i=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(Oe(this,ts,!0),r.signal)})},s=()=>{const f=$y(this.options,n),h={queryKey:this.queryKey,meta:this.meta};return i(h),Oe(this,ts,!1),this.options.persister?this.options.persister(f,h,this):f(h)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:s};i(o),(l=this.options.behavior)==null||l.onFetch(o,this),Oe(this,po,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&Gt(this,$n,Tr).call(this,{type:"fetch",meta:(d=o.fetchOptions)==null?void 0:d.meta});const a=f=>{var h,m,v,g;Od(f)&&f.silent||Gt(this,$n,Tr).call(this,{type:"error",error:f}),Od(f)||((m=(h=Z(this,Dn).config).onError)==null||m.call(h,f,this),(g=(v=Z(this,Dn).config).onSettled)==null||g.call(v,this.state.data,f,this)),this.scheduleGc()};return Oe(this,qt,Jy({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:r.abort.bind(r),onSuccess:f=>{var h,m,v,g;if(f===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(f)}catch(p){a(p);return}(m=(h=Z(this,Dn).config).onSuccess)==null||m.call(h,f,this),(g=(v=Z(this,Dn).config).onSettled)==null||g.call(v,f,this.state.error,this),this.scheduleGc()},onError:a,onFail:(f,h)=>{Gt(this,$n,Tr).call(this,{type:"failed",failureCount:f,error:h})},onPause:()=>{Gt(this,$n,Tr).call(this,{type:"pause"})},onContinue:()=>{Gt(this,$n,Tr).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),Z(this,qt).start()}},ho=new WeakMap,po=new WeakMap,Dn=new WeakMap,qt=new WeakMap,Ha=new WeakMap,ts=new WeakMap,$n=new WeakSet,Tr=function(e){const n=r=>{switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...fN(r.data,this.options),fetchMeta:e.meta??null};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=e.error;return Od(i)&&i.revert&&Z(this,po)?{...Z(this,po),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),tn.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),Z(this,Dn).notify({query:this,type:"updated",action:e})})},kv);function fN(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Qy(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function hN(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var lr,Ov,pN=(Ov=class extends xu{constructor(e={}){super();tt(this,lr);this.config=e,Oe(this,lr,new Map)}build(e,n,r){const i=n.queryKey,s=n.queryHash??zp(i,n);let o=this.get(s);return o||(o=new dN({cache:this,queryKey:i,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(o)),o}add(e){Z(this,lr).has(e.queryHash)||(Z(this,lr).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=Z(this,lr).get(e.queryHash);n&&(e.destroy(),n===e&&Z(this,lr).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){tn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return Z(this,lr).get(e)}getAll(){return[...Z(this,lr).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Cv(n,r))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(r=>Cv(e,r)):n}notify(e){tn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){tn.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){tn.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},lr=new WeakMap,Ov),cr,Jt,ns,ur,ni,Bv,mN=(Bv=class extends eS{constructor(e){super();tt(this,ur);tt(this,cr);tt(this,Jt);tt(this,ns);this.mutationId=e.mutationId,Oe(this,Jt,e.mutationCache),Oe(this,cr,[]),this.state=e.state||gN(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){Z(this,cr).includes(e)||(Z(this,cr).push(e),this.clearGcTimeout(),Z(this,Jt).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){Oe(this,cr,Z(this,cr).filter(n=>n!==e)),this.scheduleGc(),Z(this,Jt).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){Z(this,cr).length||(this.state.status==="pending"?this.scheduleGc():Z(this,Jt).remove(this))}continue(){var e;return((e=Z(this,ns))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var i,s,o,a,l,c,d,f,h,m,v,g,p,u,_,x,y,A,C,b;Oe(this,ns,Jy({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(P,T)=>{Gt(this,ur,ni).call(this,{type:"failed",failureCount:P,error:T})},onPause:()=>{Gt(this,ur,ni).call(this,{type:"pause"})},onContinue:()=>{Gt(this,ur,ni).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>Z(this,Jt).canRun(this)}));const n=this.state.status==="pending",r=!Z(this,ns).canStart();try{if(!n){Gt(this,ur,ni).call(this,{type:"pending",variables:e,isPaused:r}),await((s=(i=Z(this,Jt).config).onMutate)==null?void 0:s.call(i,e,this));const T=await((a=(o=this.options).onMutate)==null?void 0:a.call(o,e));T!==this.state.context&&Gt(this,ur,ni).call(this,{type:"pending",context:T,variables:e,isPaused:r})}const P=await Z(this,ns).start();return await((c=(l=Z(this,Jt).config).onSuccess)==null?void 0:c.call(l,P,e,this.state.context,this)),await((f=(d=this.options).onSuccess)==null?void 0:f.call(d,P,e,this.state.context)),await((m=(h=Z(this,Jt).config).onSettled)==null?void 0:m.call(h,P,null,this.state.variables,this.state.context,this)),await((g=(v=this.options).onSettled)==null?void 0:g.call(v,P,null,e,this.state.context)),Gt(this,ur,ni).call(this,{type:"success",data:P}),P}catch(P){try{throw await((u=(p=Z(this,Jt).config).onError)==null?void 0:u.call(p,P,e,this.state.context,this)),await((x=(_=this.options).onError)==null?void 0:x.call(_,P,e,this.state.context)),await((A=(y=Z(this,Jt).config).onSettled)==null?void 0:A.call(y,void 0,P,this.state.variables,this.state.context,this)),await((b=(C=this.options).onSettled)==null?void 0:b.call(C,void 0,P,e,this.state.context)),P}finally{Gt(this,ur,ni).call(this,{type:"error",error:P})}}finally{Z(this,Jt).runNext(this)}}},cr=new WeakMap,Jt=new WeakMap,ns=new WeakMap,ur=new WeakSet,ni=function(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),tn.batch(()=>{Z(this,cr).forEach(r=>{r.onMutationUpdate(e)}),Z(this,Jt).notify({mutation:this,type:"updated",action:e})})},Bv);function gN(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var yn,Va,zv,vN=(zv=class extends xu{constructor(e={}){super();tt(this,yn);tt(this,Va);this.config=e,Oe(this,yn,new Map),Oe(this,Va,Date.now())}build(e,n,r){const i=new mN({mutationCache:this,mutationId:++rl(this,Va)._,options:e.defaultMutationOptions(n),state:r});return this.add(i),i}add(e){const n=Kl(e),r=Z(this,yn).get(n)??[];r.push(e),Z(this,yn).set(n,r),this.notify({type:"added",mutation:e})}remove(e){var r;const n=Kl(e);if(Z(this,yn).has(n)){const i=(r=Z(this,yn).get(n))==null?void 0:r.filter(s=>s!==e);i&&(i.length===0?Z(this,yn).delete(n):Z(this,yn).set(n,i))}this.notify({type:"removed",mutation:e})}canRun(e){var r;const n=(r=Z(this,yn).get(Kl(e)))==null?void 0:r.find(i=>i.state.status==="pending");return!n||n===e}runNext(e){var r;const n=(r=Z(this,yn).get(Kl(e)))==null?void 0:r.find(i=>i!==e&&i.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){tn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...Z(this,yn).values()].flat()}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Rv(n,r))}findAll(e={}){return this.getAll().filter(n=>Rv(e,n))}notify(e){tn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return tn.batch(()=>Promise.all(e.map(n=>n.continue().catch(qn))))}},yn=new WeakMap,Va=new WeakMap,zv);function Kl(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function Nv(t){return{onFetch:(e,n)=>{var d,f,h,m,v;const r=e.options,i=(h=(f=(d=e.fetchOptions)==null?void 0:d.meta)==null?void 0:f.fetchMore)==null?void 0:h.direction,s=((m=e.state.data)==null?void 0:m.pages)||[],o=((v=e.state.data)==null?void 0:v.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let g=!1;const p=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(e.signal.aborted?g=!0:e.signal.addEventListener("abort",()=>{g=!0}),e.signal)})},u=$y(e.options,e.fetchOptions),_=async(x,y,A)=>{if(g)return Promise.reject();if(y==null&&x.pages.length)return Promise.resolve(x);const C={queryKey:e.queryKey,pageParam:y,direction:A?"backward":"forward",meta:e.options.meta};p(C);const b=await u(C),{maxPages:P}=e.options,T=A?sN:iN;return{pages:T(x.pages,b,P),pageParams:T(x.pageParams,y,P)}};if(i&&s.length){const x=i==="backward",y=x?_N:Lv,A={pages:s,pageParams:o},C=y(r,A);a=await _(A,C,x)}else{const x=t??s.length;do{const y=l===0?o[0]??r.initialPageParam:Lv(r,a);if(l>0&&y==null)break;a=await _(a,y),l++}while(l<x)}return a};e.options.persister?e.fetchFn=()=>{var g,p;return(p=(g=e.options).persister)==null?void 0:p.call(g,c,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function Lv(t,{pages:e,pageParams:n}){const r=e.length-1;return e.length>0?t.getNextPageParam(e[r],e,n[r],n):void 0}function _N(t,{pages:e,pageParams:n}){var r;return e.length>0?(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,n[0],n):void 0}var Mt,ui,di,mo,go,fi,vo,_o,Hv,xN=(Hv=class{constructor(t={}){tt(this,Mt);tt(this,ui);tt(this,di);tt(this,mo);tt(this,go);tt(this,fi);tt(this,vo);tt(this,_o);Oe(this,Mt,t.queryCache||new pN),Oe(this,ui,t.mutationCache||new vN),Oe(this,di,t.defaultOptions||{}),Oe(this,mo,new Map),Oe(this,go,new Map),Oe(this,fi,0)}mount(){rl(this,fi)._++,Z(this,fi)===1&&(Oe(this,vo,Ky.subscribe(async t=>{t&&(await this.resumePausedMutations(),Z(this,Mt).onFocus())})),Oe(this,_o,qc.subscribe(async t=>{t&&(await this.resumePausedMutations(),Z(this,Mt).onOnline())})))}unmount(){var t,e;rl(this,fi)._--,Z(this,fi)===0&&((t=Z(this,vo))==null||t.call(this),Oe(this,vo,void 0),(e=Z(this,_o))==null||e.call(this),Oe(this,_o,void 0))}isFetching(t){return Z(this,Mt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return Z(this,ui).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=Z(this,Mt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const n=this.defaultQueryOptions(t),r=Z(this,Mt).build(this,n);return t.revalidateIfStale&&r.isStaleByTime(Av(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return Z(this,Mt).findAll(t).map(({queryKey:e,state:n})=>{const r=n.data;return[e,r]})}setQueryData(t,e,n){const r=this.defaultQueryOptions({queryKey:t}),i=Z(this,Mt).get(r.queryHash),s=i==null?void 0:i.state.data,o=ZD(e,s);if(o!==void 0)return Z(this,Mt).build(this,r).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return tn.batch(()=>Z(this,Mt).findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=Z(this,Mt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=Z(this,Mt);tn.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=Z(this,Mt),r={type:"active",...t};return tn.batch(()=>(n.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries(r,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},r=tn.batch(()=>Z(this,Mt).findAll(t).map(i=>i.cancel(n)));return Promise.all(r).then(qn).catch(qn)}invalidateQueries(t={},e={}){return tn.batch(()=>{if(Z(this,Mt).findAll(t).forEach(r=>{r.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},r=tn.batch(()=>Z(this,Mt).findAll(t).filter(i=>!i.isDisabled()).map(i=>{let s=i.fetch(void 0,n);return n.throwOnError||(s=s.catch(qn)),i.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(r).then(qn)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=Z(this,Mt).build(this,e);return n.isStaleByTime(Av(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(qn).catch(qn)}fetchInfiniteQuery(t){return t.behavior=Nv(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(qn).catch(qn)}ensureInfiniteQueryData(t){return t.behavior=Nv(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return qc.isOnline()?Z(this,ui).resumePausedMutations():Promise.resolve()}getQueryCache(){return Z(this,Mt)}getMutationCache(){return Z(this,ui)}getDefaultOptions(){return Z(this,di)}setDefaultOptions(t){Oe(this,di,t)}setQueryDefaults(t,e){Z(this,mo).set(Ba(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...Z(this,mo).values()];let n={};return e.forEach(r=>{za(t,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(t,e){Z(this,go).set(Ba(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...Z(this,go).values()];let n={};return e.forEach(r=>{za(t,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...Z(this,di).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=zp(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===Hp&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...Z(this,di).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){Z(this,Mt).clear(),Z(this,ui).clear()}},Mt=new WeakMap,ui=new WeakMap,di=new WeakMap,mo=new WeakMap,go=new WeakMap,fi=new WeakMap,vo=new WeakMap,_o=new WeakMap,Hv),yN=D.createContext(void 0),SN=({client:t,children:e})=>(D.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),E.jsx(yN.Provider,{value:t,children:e}));async function MN(t){if(!t.ok){const e=await t.text()||t.statusText;throw new Error(`${t.status}: ${e}`)}}const EN=({on401:t})=>async({queryKey:e})=>{const n=await fetch(e[0],{credentials:"include"});return t==="returnNull"&&n.status===401?null:(await MN(n),await n.json())},wN=new xN({defaultOptions:{queries:{queryFn:EN({on401:"throw"}),refetchInterval:!1,refetchOnWindowFocus:!1,staleTime:1/0,retry:!1},mutations:{retry:!1}}});Bd.createRoot(document.getElementById("app")).render(E.jsx(Jv.StrictMode,{children:E.jsx(SN,{client:wN,children:E.jsx(QD,{})})}));
