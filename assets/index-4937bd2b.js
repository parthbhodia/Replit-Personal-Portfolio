var Pu=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var K=(t,e,n)=>(Pu(t,e,"read from private field"),n?n.call(t):e.get(t)),tt=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Oe=(t,e,n,r)=>(Pu(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);var sl=(t,e,n,r)=>({set _(i){Oe(t,e,i,n)},get _(){return K(t,e,r)}}),Gt=(t,e,n)=>(Pu(t,e,"access private method"),n);function AS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function r0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var i0={exports:{}},eu={},s0={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),CS=Symbol.for("react.portal"),RS=Symbol.for("react.fragment"),PS=Symbol.for("react.strict_mode"),DS=Symbol.for("react.profiler"),NS=Symbol.for("react.provider"),IS=Symbol.for("react.context"),kS=Symbol.for("react.forward_ref"),LS=Symbol.for("react.suspense"),US=Symbol.for("react.memo"),FS=Symbol.for("react.lazy"),am=Symbol.iterator;function OS(t){return t===null||typeof t!="object"?null:(t=am&&t[am]||t["@@iterator"],typeof t=="function"?t:null)}var a0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o0=Object.assign,l0={};function Na(t,e,n){this.props=t,this.context=e,this.refs=l0,this.updater=n||a0}Na.prototype.isReactComponent={};Na.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Na.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function c0(){}c0.prototype=Na.prototype;function Oh(t,e,n){this.props=t,this.context=e,this.refs=l0,this.updater=n||a0}var Bh=Oh.prototype=new c0;Bh.constructor=Oh;o0(Bh,Na.prototype);Bh.isPureReactComponent=!0;var om=Array.isArray,u0=Object.prototype.hasOwnProperty,zh={current:null},d0={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)u0.call(e,r)&&!d0.hasOwnProperty(r)&&(i[r]=e[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in o=t.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:Xo,type:t,key:s,ref:a,props:i,_owner:zh.current}}function BS(t,e){return{$$typeof:Xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xo}function zS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lm=/\/+/g;function Du(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zS(""+t.key):e.toString(36)}function ec(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Xo:case CS:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+Du(a,0):r,om(i)?(n="",t!=null&&(n=t.replace(lm,"$&/")+"/"),ec(i,e,n,"",function(c){return c})):i!=null&&(Hh(i)&&(i=BS(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(lm,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",om(t))for(var o=0;o<t.length;o++){s=t[o];var l=r+Du(s,o);a+=ec(s,e,n,l,i)}else if(l=OS(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=r+Du(s,o++),a+=ec(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function al(t,e,n){if(t==null)return t;var r=[],i=0;return ec(t,r,"","",function(s){return e.call(n,s,i++)}),r}function HS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},tc={transition:null},VS={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:tc,ReactCurrentOwner:zh};function h0(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:al,forEach:function(t,e,n){al(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return al(t,function(){e++}),e},toArray:function(t){return al(t,function(e){return e})||[]},only:function(t){if(!Hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Na;ze.Fragment=RS;ze.Profiler=DS;ze.PureComponent=Oh;ze.StrictMode=PS;ze.Suspense=LS;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VS;ze.act=h0;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=o0({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=zh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)u0.call(e,l)&&!d0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:Xo,type:t.type,key:i,ref:s,props:r,_owner:a}};ze.createContext=function(t){return t={$$typeof:IS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NS,_context:t},t.Consumer=t};ze.createElement=f0;ze.createFactory=function(t){var e=f0.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:kS,render:t}};ze.isValidElement=Hh;ze.lazy=function(t){return{$$typeof:FS,_payload:{_status:-1,_result:t},_init:HS}};ze.memo=function(t,e){return{$$typeof:US,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=tc.transition;tc.transition={};try{t()}finally{tc.transition=e}};ze.unstable_act=h0;ze.useCallback=function(t,e){return rn.current.useCallback(t,e)};ze.useContext=function(t){return rn.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};ze.useEffect=function(t,e){return rn.current.useEffect(t,e)};ze.useId=function(){return rn.current.useId()};ze.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return rn.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};ze.useRef=function(t){return rn.current.useRef(t)};ze.useState=function(t){return rn.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return rn.current.useTransition()};ze.version="18.3.1";s0.exports=ze;var D=s0.exports;const Sc=r0(D),p0=AS({__proto__:null,default:Sc},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GS=D,WS=Symbol.for("react.element"),jS=Symbol.for("react.fragment"),XS=Object.prototype.hasOwnProperty,$S=GS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qS={key:!0,ref:!0,__self:!0,__source:!0};function m0(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)XS.call(e,r)&&!qS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:WS,type:t,key:s,ref:a,props:i,_owner:$S.current}}eu.Fragment=jS;eu.jsx=m0;eu.jsxs=m0;i0.exports=eu;var y=i0.exports,qd={},g0={exports:{}},Mn={},v0={exports:{}},y0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,X){var J=k.length;k.push(X);e:for(;0<J;){var ae=J-1>>>1,we=k[ae];if(0<i(we,X))k[ae]=X,k[J]=we,J=ae;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var X=k[0],J=k.pop();if(J!==X){k[0]=J;e:for(var ae=0,we=k.length,Ye=we>>>1;ae<Ye;){var $=2*(ae+1)-1,oe=k[$],me=$+1,le=k[me];if(0>i(oe,J))me<we&&0>i(le,oe)?(k[ae]=le,k[me]=J,ae=me):(k[ae]=oe,k[$]=J,ae=$);else if(me<we&&0>i(le,J))k[ae]=le,k[me]=J,ae=me;else break e}}return X}function i(k,X){var J=k.sortIndex-X.sortIndex;return J!==0?J:k.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,u=null,h=3,m=!1,x=!1,g=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(k){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=k)r(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function w(k){if(g=!1,_(k),!x)if(n(l)!==null)x=!0,W(A);else{var X=n(c);X!==null&&Z(w,X.startTime-k)}}function A(k,X){x=!1,g&&(g=!1,d(P),P=-1),m=!0;var J=h;try{for(_(X),u=n(l);u!==null&&(!(u.expirationTime>X)||k&&!N());){var ae=u.callback;if(typeof ae=="function"){u.callback=null,h=u.priorityLevel;var we=ae(u.expirationTime<=X);X=t.unstable_now(),typeof we=="function"?u.callback=we:u===n(l)&&r(l),_(X)}else r(l);u=n(l)}if(u!==null)var Ye=!0;else{var $=n(c);$!==null&&Z(w,$.startTime-X),Ye=!1}return Ye}finally{u=null,h=J,m=!1}}var C=!1,T=null,P=-1,M=5,S=-1;function N(){return!(t.unstable_now()-S<M)}function O(){if(T!==null){var k=t.unstable_now();S=k;var X=!0;try{X=T(!0,k)}finally{X?B():(C=!1,T=null)}}else C=!1}var B;if(typeof v=="function")B=function(){v(O)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Q=q.port2;q.port1.onmessage=O,B=function(){Q.postMessage(null)}}else B=function(){p(O,0)};function W(k){T=k,C||(C=!0,B())}function Z(k,X){P=p(function(){k(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,W(A))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var J=h;h=X;try{return k()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,X){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var J=h;h=k;try{return X()}finally{h=J}},t.unstable_scheduleCallback=function(k,X,J){var ae=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,k){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=J+we,k={id:f++,callback:X,priorityLevel:k,startTime:J,expirationTime:we,sortIndex:-1},J>ae?(k.sortIndex=J,e(c,k),n(l)===null&&k===n(c)&&(g?(d(P),P=-1):g=!0,Z(w,J-ae))):(k.sortIndex=we,e(l,k),x||m||(x=!0,W(A))),k},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(k){var X=h;return function(){var J=h;h=X;try{return k.apply(this,arguments)}finally{h=J}}}})(y0);v0.exports=y0;var YS=v0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KS=D,bn=YS;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x0=new Set,_o={};function vs(t,e){xa(t,e),xa(t+"Capture",e)}function xa(t,e){for(_o[t]=e,t=0;t<e.length;t++)x0.add(e[t])}var Fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yd=Object.prototype.hasOwnProperty,QS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cm={},um={};function ZS(t){return Yd.call(um,t)?!0:Yd.call(cm,t)?!1:QS.test(t)?um[t]=!0:(cm[t]=!0,!1)}function JS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ew(t,e,n,r){if(e===null||typeof e>"u"||JS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vh=/[\-:]([a-z])/g;function Gh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vh,Gh);Ht[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vh,Gh);Ht[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vh,Gh);Ht[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wh(t,e,n,r){var i=Ht.hasOwnProperty(e)?Ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ew(e,n,i,r)&&(n=null),r||i===null?ZS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gr=KS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ol=Symbol.for("react.element"),Hs=Symbol.for("react.portal"),Vs=Symbol.for("react.fragment"),jh=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),S0=Symbol.for("react.context"),Xh=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Zd=Symbol.for("react.suspense_list"),$h=Symbol.for("react.memo"),ii=Symbol.for("react.lazy"),w0=Symbol.for("react.offscreen"),dm=Symbol.iterator;function za(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Nu;function io(t){if(Nu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nu=e&&e[1]||""}return`
`+Nu+t}var Iu=!1;function ku(t,e){if(!t||Iu)return"";Iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==s[o]){var l=`
`+i[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function tw(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=ku(t.type,!1),t;case 11:return t=ku(t.type.render,!1),t;case 1:return t=ku(t.type,!0),t;default:return""}}function Jd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vs:return"Fragment";case Hs:return"Portal";case Kd:return"Profiler";case jh:return"StrictMode";case Qd:return"Suspense";case Zd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case S0:return(t.displayName||"Context")+".Consumer";case _0:return(t._context.displayName||"Context")+".Provider";case Xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $h:return e=t.displayName||null,e!==null?e:Jd(t.type)||"Memo";case ii:e=t._payload,t=t._init;try{return Jd(t(e))}catch{}}return null}function nw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jd(e);case 8:return e===jh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ai(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function b0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rw(t){var e=b0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ll(t){t._valueTracker||(t._valueTracker=rw(t))}function M0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=b0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ef(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ai(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function E0(t,e){e=e.checked,e!=null&&Wh(t,"checked",e,!1)}function tf(t,e){E0(t,e);var n=Ai(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&nf(t,e.type,Ai(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nf(t,e,n){(e!=="number"||wc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var so=Array.isArray;function ea(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ai(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function rf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(so(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ai(n)}}function T0(t,e){var n=Ai(e.value),r=Ai(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cl,C0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cl=cl||document.createElement("div"),cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function So(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iw=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){iw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function R0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function P0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=R0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var sw=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function af(t,e){if(e){if(sw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function of(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=null;function qh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cf=null,ta=null,na=null;function gm(t){if(t=Yo(t)){if(typeof cf!="function")throw Error(re(280));var e=t.stateNode;e&&(e=su(e),cf(t.stateNode,t.type,e))}}function D0(t){ta?na?na.push(t):na=[t]:ta=t}function N0(){if(ta){var t=ta,e=na;if(na=ta=null,gm(t),e)for(t=0;t<e.length;t++)gm(e[t])}}function I0(t,e){return t(e)}function k0(){}var Lu=!1;function L0(t,e,n){if(Lu)return t(e,n);Lu=!0;try{return I0(t,e,n)}finally{Lu=!1,(ta!==null||na!==null)&&(k0(),N0())}}function wo(t,e){var n=t.stateNode;if(n===null)return null;var r=su(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var uf=!1;if(Fr)try{var Ha={};Object.defineProperty(Ha,"passive",{get:function(){uf=!0}}),window.addEventListener("test",Ha,Ha),window.removeEventListener("test",Ha,Ha)}catch{uf=!1}function aw(t,e,n,r,i,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var uo=!1,bc=null,Mc=!1,df=null,ow={onError:function(t){uo=!0,bc=t}};function lw(t,e,n,r,i,s,a,o,l){uo=!1,bc=null,aw.apply(ow,arguments)}function cw(t,e,n,r,i,s,a,o,l){if(lw.apply(this,arguments),uo){if(uo){var c=bc;uo=!1,bc=null}else throw Error(re(198));Mc||(Mc=!0,df=c)}}function ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function U0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vm(t){if(ys(t)!==t)throw Error(re(188))}function uw(t){var e=t.alternate;if(!e){if(e=ys(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vm(i),t;if(s===r)return vm(i),e;s=s.sibling}throw Error(re(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==r)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function F0(t){return t=uw(t),t!==null?O0(t):null}function O0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=O0(t);if(e!==null)return e;t=t.sibling}return null}var B0=bn.unstable_scheduleCallback,ym=bn.unstable_cancelCallback,dw=bn.unstable_shouldYield,fw=bn.unstable_requestPaint,Et=bn.unstable_now,hw=bn.unstable_getCurrentPriorityLevel,Yh=bn.unstable_ImmediatePriority,z0=bn.unstable_UserBlockingPriority,Ec=bn.unstable_NormalPriority,pw=bn.unstable_LowPriority,H0=bn.unstable_IdlePriority,tu=null,gr=null;function mw(t){if(gr&&typeof gr.onCommitFiberRoot=="function")try{gr.onCommitFiberRoot(tu,t,void 0,(t.current.flags&128)===128)}catch{}}var er=Math.clz32?Math.clz32:yw,gw=Math.log,vw=Math.LN2;function yw(t){return t>>>=0,t===0?32:31-(gw(t)/vw|0)|0}var ul=64,dl=4194304;function ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~i;o!==0?r=ao(o):(s&=a,s!==0&&(r=ao(s)))}else a=n&~i,a!==0?r=ao(a):s!==0&&(r=ao(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-er(e),i=1<<n,r|=t[n],e&=~i;return r}function xw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _w(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-er(s),o=1<<a,l=i[a];l===-1?(!(o&n)||o&r)&&(i[a]=xw(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function ff(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function V0(){var t=ul;return ul<<=1,!(ul&4194240)&&(ul=64),t}function Uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-er(e),t[e]=n}function Sw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-er(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-er(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var st=0;function G0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var W0,Qh,j0,X0,$0,hf=!1,fl=[],gi=null,vi=null,yi=null,bo=new Map,Mo=new Map,ai=[],ww="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xm(t,e){switch(t){case"focusin":case"focusout":gi=null;break;case"dragenter":case"dragleave":vi=null;break;case"mouseover":case"mouseout":yi=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function Va(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Yo(e),e!==null&&Qh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function bw(t,e,n,r,i){switch(e){case"focusin":return gi=Va(gi,t,e,n,r,i),!0;case"dragenter":return vi=Va(vi,t,e,n,r,i),!0;case"mouseover":return yi=Va(yi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bo.set(s,Va(bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Mo.set(s,Va(Mo.get(s)||null,t,e,n,r,i)),!0}return!1}function q0(t){var e=Yi(t.target);if(e!==null){var n=ys(e);if(n!==null){if(e=n.tag,e===13){if(e=U0(n),e!==null){t.blockedOn=e,$0(t.priority,function(){j0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);lf=r,n.target.dispatchEvent(r),lf=null}else return e=Yo(n),e!==null&&Qh(e),t.blockedOn=n,!1;e.shift()}return!0}function _m(t,e,n){nc(t)&&n.delete(e)}function Mw(){hf=!1,gi!==null&&nc(gi)&&(gi=null),vi!==null&&nc(vi)&&(vi=null),yi!==null&&nc(yi)&&(yi=null),bo.forEach(_m),Mo.forEach(_m)}function Ga(t,e){t.blockedOn===e&&(t.blockedOn=null,hf||(hf=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,Mw)))}function Eo(t){function e(i){return Ga(i,t)}if(0<fl.length){Ga(fl[0],t);for(var n=1;n<fl.length;n++){var r=fl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gi!==null&&Ga(gi,t),vi!==null&&Ga(vi,t),yi!==null&&Ga(yi,t),bo.forEach(e),Mo.forEach(e),n=0;n<ai.length;n++)r=ai[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ai.length&&(n=ai[0],n.blockedOn===null);)q0(n),n.blockedOn===null&&ai.shift()}var ra=Gr.ReactCurrentBatchConfig,Ac=!0;function Ew(t,e,n,r){var i=st,s=ra.transition;ra.transition=null;try{st=1,Zh(t,e,n,r)}finally{st=i,ra.transition=s}}function Tw(t,e,n,r){var i=st,s=ra.transition;ra.transition=null;try{st=4,Zh(t,e,n,r)}finally{st=i,ra.transition=s}}function Zh(t,e,n,r){if(Ac){var i=pf(t,e,n,r);if(i===null)Xu(t,e,r,Cc,n),xm(t,r);else if(bw(i,t,e,n,r))r.stopPropagation();else if(xm(t,r),e&4&&-1<ww.indexOf(t)){for(;i!==null;){var s=Yo(i);if(s!==null&&W0(s),s=pf(t,e,n,r),s===null&&Xu(t,e,r,Cc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xu(t,e,r,null,n)}}var Cc=null;function pf(t,e,n,r){if(Cc=null,t=qh(r),t=Yi(t),t!==null)if(e=ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=U0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cc=t,null}function Y0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hw()){case Yh:return 1;case z0:return 4;case Ec:case pw:return 16;case H0:return 536870912;default:return 16}default:return 16}}var pi=null,Jh=null,rc=null;function K0(){if(rc)return rc;var t,e=Jh,n=e.length,r,i="value"in pi?pi.value:pi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return rc=i.slice(t,1<r?1-r:void 0)}function ic(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function Sm(){return!1}function En(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hl:Sm,this.isPropagationStopped=Sm,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),e}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ep=En(Ia),qo=xt({},Ia,{view:0,detail:0}),Aw=En(qo),Fu,Ou,Wa,nu=xt({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wa&&(Wa&&t.type==="mousemove"?(Fu=t.screenX-Wa.screenX,Ou=t.screenY-Wa.screenY):Ou=Fu=0,Wa=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),wm=En(nu),Cw=xt({},nu,{dataTransfer:0}),Rw=En(Cw),Pw=xt({},qo,{relatedTarget:0}),Bu=En(Pw),Dw=xt({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),Nw=En(Dw),Iw=xt({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kw=En(Iw),Lw=xt({},Ia,{data:0}),bm=En(Lw),Uw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ow={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ow[t])?!!e[t]:!1}function tp(){return Bw}var zw=xt({},qo,{key:function(t){if(t.key){var e=Uw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ic(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tp,charCode:function(t){return t.type==="keypress"?ic(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ic(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hw=En(zw),Vw=xt({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mm=En(Vw),Gw=xt({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tp}),Ww=En(Gw),jw=xt({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xw=En(jw),$w=xt({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qw=En($w),Yw=[9,13,27,32],np=Fr&&"CompositionEvent"in window,fo=null;Fr&&"documentMode"in document&&(fo=document.documentMode);var Kw=Fr&&"TextEvent"in window&&!fo,Q0=Fr&&(!np||fo&&8<fo&&11>=fo),Em=String.fromCharCode(32),Tm=!1;function Z0(t,e){switch(t){case"keyup":return Yw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function Qw(t,e){switch(t){case"compositionend":return J0(e);case"keypress":return e.which!==32?null:(Tm=!0,Em);case"textInput":return t=e.data,t===Em&&Tm?null:t;default:return null}}function Zw(t,e){if(Gs)return t==="compositionend"||!np&&Z0(t,e)?(t=K0(),rc=Jh=pi=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Q0&&e.locale!=="ko"?null:e.data;default:return null}}var Jw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Jw[t.type]:e==="textarea"}function ey(t,e,n,r){D0(r),e=Rc(e,"onChange"),0<e.length&&(n=new ep("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ho=null,To=null;function eb(t){dy(t,0)}function ru(t){var e=Xs(t);if(M0(e))return t}function tb(t,e){if(t==="change")return e}var ty=!1;if(Fr){var zu;if(Fr){var Hu="oninput"in document;if(!Hu){var Cm=document.createElement("div");Cm.setAttribute("oninput","return;"),Hu=typeof Cm.oninput=="function"}zu=Hu}else zu=!1;ty=zu&&(!document.documentMode||9<document.documentMode)}function Rm(){ho&&(ho.detachEvent("onpropertychange",ny),To=ho=null)}function ny(t){if(t.propertyName==="value"&&ru(To)){var e=[];ey(e,To,t,qh(t)),L0(eb,e)}}function nb(t,e,n){t==="focusin"?(Rm(),ho=e,To=n,ho.attachEvent("onpropertychange",ny)):t==="focusout"&&Rm()}function rb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ru(To)}function ib(t,e){if(t==="click")return ru(e)}function sb(t,e){if(t==="input"||t==="change")return ru(e)}function ab(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rr=typeof Object.is=="function"?Object.is:ab;function Ao(t,e){if(rr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yd.call(e,i)||!rr(t[i],e[i]))return!1}return!0}function Pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dm(t,e){var n=Pm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pm(n)}}function ry(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ry(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function iy(){for(var t=window,e=wc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wc(t.document)}return e}function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ob(t){var e=iy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ry(n.ownerDocument.documentElement,n)){if(r!==null&&rp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Dm(n,s);var a=Dm(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lb=Fr&&"documentMode"in document&&11>=document.documentMode,Ws=null,mf=null,po=null,gf=!1;function Nm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gf||Ws==null||Ws!==wc(r)||(r=Ws,"selectionStart"in r&&rp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),po&&Ao(po,r)||(po=r,r=Rc(mf,"onSelect"),0<r.length&&(e=new ep("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ws)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var js={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Vu={},sy={};Fr&&(sy=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function iu(t){if(Vu[t])return Vu[t];if(!js[t])return t;var e=js[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sy)return Vu[t]=e[n];return t}var ay=iu("animationend"),oy=iu("animationiteration"),ly=iu("animationstart"),cy=iu("transitionend"),uy=new Map,Im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Di(t,e){uy.set(t,e),vs(e,[t])}for(var Gu=0;Gu<Im.length;Gu++){var Wu=Im[Gu],cb=Wu.toLowerCase(),ub=Wu[0].toUpperCase()+Wu.slice(1);Di(cb,"on"+ub)}Di(ay,"onAnimationEnd");Di(oy,"onAnimationIteration");Di(ly,"onAnimationStart");Di("dblclick","onDoubleClick");Di("focusin","onFocus");Di("focusout","onBlur");Di(cy,"onTransitionEnd");xa("onMouseEnter",["mouseout","mouseover"]);xa("onMouseLeave",["mouseout","mouseover"]);xa("onPointerEnter",["pointerout","pointerover"]);xa("onPointerLeave",["pointerout","pointerover"]);vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),db=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function km(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cw(r,e,void 0,t),t.currentTarget=null}function dy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;km(i,o,c),s=l}else for(a=0;a<r.length;a++){if(o=r[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;km(i,o,c),s=l}}}if(Mc)throw t=df,Mc=!1,df=null,t}function ft(t,e){var n=e[Sf];n===void 0&&(n=e[Sf]=new Set);var r=t+"__bubble";n.has(r)||(fy(e,t,2,!1),n.add(r))}function ju(t,e,n){var r=0;e&&(r|=4),fy(n,t,r,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[ml]){t[ml]=!0,x0.forEach(function(n){n!=="selectionchange"&&(db.has(n)||ju(n,!1,t),ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,ju("selectionchange",!1,e))}}function fy(t,e,n,r){switch(Y0(e)){case 1:var i=Ew;break;case 4:i=Tw;break;default:i=Zh}n=i.bind(null,e,n,t),i=void 0,!uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Xu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;o!==null;){if(a=Yi(o),a===null)return;if(l=a.tag,l===5||l===6){r=s=a;continue e}o=o.parentNode}}r=r.return}L0(function(){var c=s,f=qh(n),u=[];e:{var h=uy.get(t);if(h!==void 0){var m=ep,x=t;switch(t){case"keypress":if(ic(n)===0)break e;case"keydown":case"keyup":m=Hw;break;case"focusin":x="focus",m=Bu;break;case"focusout":x="blur",m=Bu;break;case"beforeblur":case"afterblur":m=Bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Rw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ww;break;case ay:case oy:case ly:m=Nw;break;case cy:m=Xw;break;case"scroll":m=Aw;break;case"wheel":m=qw;break;case"copy":case"cut":case"paste":m=kw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Mm}var g=(e&4)!==0,p=!g&&t==="scroll",d=g?h!==null?h+"Capture":null:h;g=[];for(var v=c,_;v!==null;){_=v;var w=_.stateNode;if(_.tag===5&&w!==null&&(_=w,d!==null&&(w=wo(v,d),w!=null&&g.push(Ro(v,w,_)))),p)break;v=v.return}0<g.length&&(h=new m(h,x,null,n,f),u.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==lf&&(x=n.relatedTarget||n.fromElement)&&(Yi(x)||x[Or]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Yi(x):null,x!==null&&(p=ys(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(g=wm,w="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(g=Mm,w="onPointerLeave",d="onPointerEnter",v="pointer"),p=m==null?h:Xs(m),_=x==null?h:Xs(x),h=new g(w,v+"leave",m,n,f),h.target=p,h.relatedTarget=_,w=null,Yi(f)===c&&(g=new g(d,v+"enter",x,n,f),g.target=_,g.relatedTarget=p,w=g),p=w,m&&x)t:{for(g=m,d=x,v=0,_=g;_;_=Ss(_))v++;for(_=0,w=d;w;w=Ss(w))_++;for(;0<v-_;)g=Ss(g),v--;for(;0<_-v;)d=Ss(d),_--;for(;v--;){if(g===d||d!==null&&g===d.alternate)break t;g=Ss(g),d=Ss(d)}g=null}else g=null;m!==null&&Lm(u,h,m,g,!1),x!==null&&p!==null&&Lm(u,p,x,g,!0)}}e:{if(h=c?Xs(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var A=tb;else if(Am(h))if(ty)A=sb;else{A=rb;var C=nb}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=ib);if(A&&(A=A(t,c))){ey(u,A,n,f);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&nf(h,"number",h.value)}switch(C=c?Xs(c):window,t){case"focusin":(Am(C)||C.contentEditable==="true")&&(Ws=C,mf=c,po=null);break;case"focusout":po=mf=Ws=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,Nm(u,n,f);break;case"selectionchange":if(lb)break;case"keydown":case"keyup":Nm(u,n,f)}var T;if(np)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Gs?Z0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Q0&&n.locale!=="ko"&&(Gs||P!=="onCompositionStart"?P==="onCompositionEnd"&&Gs&&(T=K0()):(pi=f,Jh="value"in pi?pi.value:pi.textContent,Gs=!0)),C=Rc(c,P),0<C.length&&(P=new bm(P,t,null,n,f),u.push({event:P,listeners:C}),T?P.data=T:(T=J0(n),T!==null&&(P.data=T)))),(T=Kw?Qw(t,n):Zw(t,n))&&(c=Rc(c,"onBeforeInput"),0<c.length&&(f=new bm("onBeforeInput","beforeinput",null,n,f),u.push({event:f,listeners:c}),f.data=T))}dy(u,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wo(t,n),s!=null&&r.unshift(Ro(t,s,i)),s=wo(t,e),s!=null&&r.push(Ro(t,s,i))),t=t.return}return r}function Ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lm(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===r)break;o.tag===5&&c!==null&&(o=c,i?(l=wo(n,s),l!=null&&a.unshift(Ro(n,l,o))):i||(l=wo(n,s),l!=null&&a.push(Ro(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var fb=/\r\n?/g,hb=/\u0000|\uFFFD/g;function Um(t){return(typeof t=="string"?t:""+t).replace(fb,`
`).replace(hb,"")}function gl(t,e,n){if(e=Um(e),Um(t)!==e&&n)throw Error(re(425))}function Pc(){}var vf=null,yf=null;function xf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _f=typeof setTimeout=="function"?setTimeout:void 0,pb=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,mb=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(t){return Fm.resolve(null).then(t).catch(gb)}:_f;function gb(t){setTimeout(function(){throw t})}function $u(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Eo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Eo(e)}function xi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Om(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ka=Math.random().toString(36).slice(2),hr="__reactFiber$"+ka,Po="__reactProps$"+ka,Or="__reactContainer$"+ka,Sf="__reactEvents$"+ka,vb="__reactListeners$"+ka,yb="__reactHandles$"+ka;function Yi(t){var e=t[hr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Or]||n[hr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Om(t);t!==null;){if(n=t[hr])return n;t=Om(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[hr]||t[Or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function su(t){return t[Po]||null}var wf=[],$s=-1;function Ni(t){return{current:t}}function ht(t){0>$s||(t.current=wf[$s],wf[$s]=null,$s--)}function ct(t,e){$s++,wf[$s]=t.current,t.current=e}var Ci={},Kt=Ni(Ci),un=Ni(!1),os=Ci;function _a(t,e){var n=t.type.contextTypes;if(!n)return Ci;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dn(t){return t=t.childContextTypes,t!=null}function Dc(){ht(un),ht(Kt)}function Bm(t,e,n){if(Kt.current!==Ci)throw Error(re(168));ct(Kt,e),ct(un,n)}function hy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(re(108,nw(t)||"Unknown",i));return xt({},n,r)}function Nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ci,os=Kt.current,ct(Kt,t),ct(un,un.current),!0}function zm(t,e,n){var r=t.stateNode;if(!r)throw Error(re(169));n?(t=hy(t,e,os),r.__reactInternalMemoizedMergedChildContext=t,ht(un),ht(Kt),ct(Kt,t)):ht(un),ct(un,n)}var Cr=null,au=!1,qu=!1;function py(t){Cr===null?Cr=[t]:Cr.push(t)}function xb(t){au=!0,py(t)}function Ii(){if(!qu&&Cr!==null){qu=!0;var t=0,e=st;try{var n=Cr;for(st=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cr=null,au=!1}catch(i){throw Cr!==null&&(Cr=Cr.slice(t+1)),B0(Yh,Ii),i}finally{st=e,qu=!1}}return null}var qs=[],Ys=0,Ic=null,kc=0,Nn=[],In=0,ls=null,Pr=1,Dr="";function Vi(t,e){qs[Ys++]=kc,qs[Ys++]=Ic,Ic=t,kc=e}function my(t,e,n){Nn[In++]=Pr,Nn[In++]=Dr,Nn[In++]=ls,ls=t;var r=Pr;t=Dr;var i=32-er(r)-1;r&=~(1<<i),n+=1;var s=32-er(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Pr=1<<32-er(e)+i|n<<i|r,Dr=s+t}else Pr=1<<s|n<<i|r,Dr=t}function ip(t){t.return!==null&&(Vi(t,1),my(t,1,0))}function sp(t){for(;t===Ic;)Ic=qs[--Ys],qs[Ys]=null,kc=qs[--Ys],qs[Ys]=null;for(;t===ls;)ls=Nn[--In],Nn[In]=null,Dr=Nn[--In],Nn[In]=null,Pr=Nn[--In],Nn[In]=null}var wn=null,Sn=null,mt=!1,Qn=null;function gy(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,Sn=xi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ls!==null?{id:Pr,overflow:Dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,Sn=null,!0):!1;default:return!1}}function bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mf(t){if(mt){var e=Sn;if(e){var n=e;if(!Hm(t,e)){if(bf(t))throw Error(re(418));e=xi(n.nextSibling);var r=wn;e&&Hm(t,e)?gy(r,n):(t.flags=t.flags&-4097|2,mt=!1,wn=t)}}else{if(bf(t))throw Error(re(418));t.flags=t.flags&-4097|2,mt=!1,wn=t}}}function Vm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function vl(t){if(t!==wn)return!1;if(!mt)return Vm(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xf(t.type,t.memoizedProps)),e&&(e=Sn)){if(bf(t))throw vy(),Error(re(418));for(;e;)gy(t,e),e=xi(e.nextSibling)}if(Vm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=xi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=wn?xi(t.stateNode.nextSibling):null;return!0}function vy(){for(var t=Sn;t;)t=xi(t.nextSibling)}function Sa(){Sn=wn=null,mt=!1}function ap(t){Qn===null?Qn=[t]:Qn.push(t)}var _b=Gr.ReactCurrentBatchConfig;function ja(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var r=n.stateNode}if(!r)throw Error(re(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=i.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function yl(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gm(t){var e=t._init;return e(t._payload)}function yy(t){function e(d,v){if(t){var _=d.deletions;_===null?(d.deletions=[v],d.flags|=16):_.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function r(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function i(d,v){return d=bi(d,v),d.index=0,d.sibling=null,d}function s(d,v,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<v?(d.flags|=2,v):_):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,_,w){return v===null||v.tag!==6?(v=td(_,d.mode,w),v.return=d,v):(v=i(v,_),v.return=d,v)}function l(d,v,_,w){var A=_.type;return A===Vs?f(d,v,_.props.children,w,_.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ii&&Gm(A)===v.type)?(w=i(v,_.props),w.ref=ja(d,v,_),w.return=d,w):(w=dc(_.type,_.key,_.props,null,d.mode,w),w.ref=ja(d,v,_),w.return=d,w)}function c(d,v,_,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=nd(_,d.mode,w),v.return=d,v):(v=i(v,_.children||[]),v.return=d,v)}function f(d,v,_,w,A){return v===null||v.tag!==7?(v=ss(_,d.mode,w,A),v.return=d,v):(v=i(v,_),v.return=d,v)}function u(d,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=td(""+v,d.mode,_),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ol:return _=dc(v.type,v.key,v.props,null,d.mode,_),_.ref=ja(d,null,v),_.return=d,_;case Hs:return v=nd(v,d.mode,_),v.return=d,v;case ii:var w=v._init;return u(d,w(v._payload),_)}if(so(v)||za(v))return v=ss(v,d.mode,_,null),v.return=d,v;yl(d,v)}return null}function h(d,v,_,w){var A=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:o(d,v,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ol:return _.key===A?l(d,v,_,w):null;case Hs:return _.key===A?c(d,v,_,w):null;case ii:return A=_._init,h(d,v,A(_._payload),w)}if(so(_)||za(_))return A!==null?null:f(d,v,_,w,null);yl(d,_)}return null}function m(d,v,_,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(_)||null,o(v,d,""+w,A);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ol:return d=d.get(w.key===null?_:w.key)||null,l(v,d,w,A);case Hs:return d=d.get(w.key===null?_:w.key)||null,c(v,d,w,A);case ii:var C=w._init;return m(d,v,_,C(w._payload),A)}if(so(w)||za(w))return d=d.get(_)||null,f(v,d,w,A,null);yl(v,w)}return null}function x(d,v,_,w){for(var A=null,C=null,T=v,P=v=0,M=null;T!==null&&P<_.length;P++){T.index>P?(M=T,T=null):M=T.sibling;var S=h(d,T,_[P],w);if(S===null){T===null&&(T=M);break}t&&T&&S.alternate===null&&e(d,T),v=s(S,v,P),C===null?A=S:C.sibling=S,C=S,T=M}if(P===_.length)return n(d,T),mt&&Vi(d,P),A;if(T===null){for(;P<_.length;P++)T=u(d,_[P],w),T!==null&&(v=s(T,v,P),C===null?A=T:C.sibling=T,C=T);return mt&&Vi(d,P),A}for(T=r(d,T);P<_.length;P++)M=m(T,d,P,_[P],w),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?P:M.key),v=s(M,v,P),C===null?A=M:C.sibling=M,C=M);return t&&T.forEach(function(N){return e(d,N)}),mt&&Vi(d,P),A}function g(d,v,_,w){var A=za(_);if(typeof A!="function")throw Error(re(150));if(_=A.call(_),_==null)throw Error(re(151));for(var C=A=null,T=v,P=v=0,M=null,S=_.next();T!==null&&!S.done;P++,S=_.next()){T.index>P?(M=T,T=null):M=T.sibling;var N=h(d,T,S.value,w);if(N===null){T===null&&(T=M);break}t&&T&&N.alternate===null&&e(d,T),v=s(N,v,P),C===null?A=N:C.sibling=N,C=N,T=M}if(S.done)return n(d,T),mt&&Vi(d,P),A;if(T===null){for(;!S.done;P++,S=_.next())S=u(d,S.value,w),S!==null&&(v=s(S,v,P),C===null?A=S:C.sibling=S,C=S);return mt&&Vi(d,P),A}for(T=r(d,T);!S.done;P++,S=_.next())S=m(T,d,P,S.value,w),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?P:S.key),v=s(S,v,P),C===null?A=S:C.sibling=S,C=S);return t&&T.forEach(function(O){return e(d,O)}),mt&&Vi(d,P),A}function p(d,v,_,w){if(typeof _=="object"&&_!==null&&_.type===Vs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ol:e:{for(var A=_.key,C=v;C!==null;){if(C.key===A){if(A=_.type,A===Vs){if(C.tag===7){n(d,C.sibling),v=i(C,_.props.children),v.return=d,d=v;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ii&&Gm(A)===C.type){n(d,C.sibling),v=i(C,_.props),v.ref=ja(d,C,_),v.return=d,d=v;break e}n(d,C);break}else e(d,C);C=C.sibling}_.type===Vs?(v=ss(_.props.children,d.mode,w,_.key),v.return=d,d=v):(w=dc(_.type,_.key,_.props,null,d.mode,w),w.ref=ja(d,v,_),w.return=d,d=w)}return a(d);case Hs:e:{for(C=_.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(d,v.sibling),v=i(v,_.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=nd(_,d.mode,w),v.return=d,d=v}return a(d);case ii:return C=_._init,p(d,v,C(_._payload),w)}if(so(_))return x(d,v,_,w);if(za(_))return g(d,v,_,w);yl(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(d,v.sibling),v=i(v,_),v.return=d,d=v):(n(d,v),v=td(_,d.mode,w),v.return=d,d=v),a(d)):n(d,v)}return p}var wa=yy(!0),xy=yy(!1),Lc=Ni(null),Uc=null,Ks=null,op=null;function lp(){op=Ks=Uc=null}function cp(t){var e=Lc.current;ht(Lc),t._currentValue=e}function Ef(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ia(t,e){Uc=t,op=Ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(op!==t)if(t={context:t,memoizedValue:e,next:null},Ks===null){if(Uc===null)throw Error(re(308));Ks=t,Uc.dependencies={lanes:0,firstContext:t}}else Ks=Ks.next=t;return e}var Ki=null;function up(t){Ki===null?Ki=[t]:Ki.push(t)}function _y(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,up(e)):(n.next=i.next,i.next=n),e.interleaved=n,Br(t,r)}function Br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var si=!1;function dp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _i(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,qe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Br(t,n)}return i=r.interleaved,i===null?(e.next=e,up(r)):(e.next=i.next,i.next=e),r.interleaved=e,Br(t,n)}function sc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kh(t,n)}}function Wm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fc(t,e,n,r){var i=t.updateQueue;si=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;a=0,f=c=l=null,o=s;do{var h=o.lane,m=o.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,g=o;switch(h=e,m=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){u=x.call(m,u,h);break e}u=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,h=typeof x=="function"?x.call(m,u,h):x,h==null)break e;u=xt({},u,h);break e;case 2:si=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=u):f=f.next=m,a|=h;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(f===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);us|=a,t.lanes=a,t.memoizedState=u}}function jm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(re(191,i));i.call(r)}}}var Ko={},vr=Ni(Ko),Do=Ni(Ko),No=Ni(Ko);function Qi(t){if(t===Ko)throw Error(re(174));return t}function fp(t,e){switch(ct(No,e),ct(Do,t),ct(vr,Ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sf(e,t)}ht(vr),ct(vr,e)}function ba(){ht(vr),ht(Do),ht(No)}function wy(t){Qi(No.current);var e=Qi(vr.current),n=sf(e,t.type);e!==n&&(ct(Do,t),ct(vr,n))}function hp(t){Do.current===t&&(ht(vr),ht(Do))}var vt=Ni(0);function Oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yu=[];function pp(){for(var t=0;t<Yu.length;t++)Yu[t]._workInProgressVersionPrimary=null;Yu.length=0}var ac=Gr.ReactCurrentDispatcher,Ku=Gr.ReactCurrentBatchConfig,cs=0,yt=null,Dt=null,Ut=null,Bc=!1,mo=!1,Io=0,Sb=0;function Wt(){throw Error(re(321))}function mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rr(t[n],e[n]))return!1;return!0}function gp(t,e,n,r,i,s){if(cs=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ac.current=t===null||t.memoizedState===null?Eb:Tb,t=n(r,i),mo){s=0;do{if(mo=!1,Io=0,25<=s)throw Error(re(301));s+=1,Ut=Dt=null,e.updateQueue=null,ac.current=Ab,t=n(r,i)}while(mo)}if(ac.current=zc,e=Dt!==null&&Dt.next!==null,cs=0,Ut=Dt=yt=null,Bc=!1,e)throw Error(re(300));return t}function vp(){var t=Io!==0;return Io=0,t}function lr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?yt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function zn(){if(Dt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Ut===null?yt.memoizedState:Ut.next;if(e!==null)Ut=e,Dt=t;else{if(t===null)throw Error(re(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Ut===null?yt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function ko(t,e){return typeof e=="function"?e(t):e}function Qu(t){var e=zn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var r=Dt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((cs&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=u,a=r):l=l.next=u,yt.lanes|=f,us|=f}c=c.next}while(c!==null&&c!==s);l===null?a=r:l.next=o,rr(r,e.memoizedState)||(cn=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,yt.lanes|=s,us|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zu(t){var e=zn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);rr(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function by(){}function My(t,e){var n=yt,r=zn(),i=e(),s=!rr(r.memoizedState,i);if(s&&(r.memoizedState=i,cn=!0),r=r.queue,yp(Ay.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Lo(9,Ty.bind(null,n,r,i,e),void 0,null),Ft===null)throw Error(re(349));cs&30||Ey(n,e,i)}return i}function Ey(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ty(t,e,n,r){e.value=n,e.getSnapshot=r,Cy(e)&&Ry(t)}function Ay(t,e,n){return n(function(){Cy(e)&&Ry(t)})}function Cy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rr(t,n)}catch{return!0}}function Ry(t){var e=Br(t,1);e!==null&&tr(e,t,1,-1)}function Xm(t){var e=lr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:t},e.queue=t,t=t.dispatch=Mb.bind(null,yt,t),[e.memoizedState,t]}function Lo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Py(){return zn().memoizedState}function oc(t,e,n,r){var i=lr();yt.flags|=t,i.memoizedState=Lo(1|e,n,void 0,r===void 0?null:r)}function ou(t,e,n,r){var i=zn();r=r===void 0?null:r;var s=void 0;if(Dt!==null){var a=Dt.memoizedState;if(s=a.destroy,r!==null&&mp(r,a.deps)){i.memoizedState=Lo(e,n,s,r);return}}yt.flags|=t,i.memoizedState=Lo(1|e,n,s,r)}function $m(t,e){return oc(8390656,8,t,e)}function yp(t,e){return ou(2048,8,t,e)}function Dy(t,e){return ou(4,2,t,e)}function Ny(t,e){return ou(4,4,t,e)}function Iy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ky(t,e,n){return n=n!=null?n.concat([t]):null,ou(4,4,Iy.bind(null,e,t),n)}function xp(){}function Ly(t,e){var n=zn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Uy(t,e){var n=zn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Fy(t,e,n){return cs&21?(rr(n,e)||(n=V0(),yt.lanes|=n,us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function wb(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var r=Ku.transition;Ku.transition={};try{t(!1),e()}finally{st=n,Ku.transition=r}}function Oy(){return zn().memoizedState}function bb(t,e,n){var r=wi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},By(t))zy(e,n);else if(n=_y(t,e,n,r),n!==null){var i=nn();tr(n,t,r,i),Hy(n,e,r)}}function Mb(t,e,n){var r=wi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(By(t))zy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,rr(o,a)){var l=e.interleaved;l===null?(i.next=i,up(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=_y(t,e,i,r),n!==null&&(i=nn(),tr(n,t,r,i),Hy(n,e,r))}}function By(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function zy(t,e){mo=Bc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Hy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kh(t,n)}}var zc={readContext:Bn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},Eb={readContext:Bn,useCallback:function(t,e){return lr().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:$m,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,oc(4194308,4,Iy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return oc(4,2,t,e)},useMemo:function(t,e){var n=lr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=lr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bb.bind(null,yt,t),[r.memoizedState,t]},useRef:function(t){var e=lr();return t={current:t},e.memoizedState=t},useState:Xm,useDebugValue:xp,useDeferredValue:function(t){return lr().memoizedState=t},useTransition:function(){var t=Xm(!1),e=t[0];return t=wb.bind(null,t[1]),lr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=yt,i=lr();if(mt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ft===null)throw Error(re(349));cs&30||Ey(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$m(Ay.bind(null,r,s,t),[t]),r.flags|=2048,Lo(9,Ty.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=lr(),e=Ft.identifierPrefix;if(mt){var n=Dr,r=Pr;n=(r&~(1<<32-er(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Sb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Tb={readContext:Bn,useCallback:Ly,useContext:Bn,useEffect:yp,useImperativeHandle:ky,useInsertionEffect:Dy,useLayoutEffect:Ny,useMemo:Uy,useReducer:Qu,useRef:Py,useState:function(){return Qu(ko)},useDebugValue:xp,useDeferredValue:function(t){var e=zn();return Fy(e,Dt.memoizedState,t)},useTransition:function(){var t=Qu(ko)[0],e=zn().memoizedState;return[t,e]},useMutableSource:by,useSyncExternalStore:My,useId:Oy,unstable_isNewReconciler:!1},Ab={readContext:Bn,useCallback:Ly,useContext:Bn,useEffect:yp,useImperativeHandle:ky,useInsertionEffect:Dy,useLayoutEffect:Ny,useMemo:Uy,useReducer:Zu,useRef:Py,useState:function(){return Zu(ko)},useDebugValue:xp,useDeferredValue:function(t){var e=zn();return Dt===null?e.memoizedState=t:Fy(e,Dt.memoizedState,t)},useTransition:function(){var t=Zu(ko)[0],e=zn().memoizedState;return[t,e]},useMutableSource:by,useSyncExternalStore:My,useId:Oy,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lu={isMounted:function(t){return(t=t._reactInternals)?ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nn(),i=wi(t),s=Lr(r,i);s.payload=e,n!=null&&(s.callback=n),e=_i(t,s,i),e!==null&&(tr(e,t,i,r),sc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nn(),i=wi(t),s=Lr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_i(t,s,i),e!==null&&(tr(e,t,i,r),sc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),r=wi(t),i=Lr(n,r);i.tag=2,e!=null&&(i.callback=e),e=_i(t,i,r),e!==null&&(tr(e,t,r,n),sc(e,t,r))}};function qm(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,r)||!Ao(i,s):!0}function Vy(t,e,n){var r=!1,i=Ci,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(i=dn(e)?os:Kt.current,r=e.contextTypes,s=(r=r!=null)?_a(t,i):Ci),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ym(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lu.enqueueReplaceState(e,e.state,null)}function Af(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},dp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bn(s):(s=dn(e)?os:Kt.current,i.context=_a(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lu.enqueueReplaceState(i,i.state,null),Fc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ma(t,e){try{var n="",r=e;do n+=tw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ju(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cb=typeof WeakMap=="function"?WeakMap:Map;function Gy(t,e,n){n=Lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vc||(Vc=!0,Of=r),Cf(t,e)},n}function Wy(t,e,n){n=Lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Cf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cf(t,e),typeof r!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Km(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Cb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Vb.bind(null,t,e,n),e.then(t,t))}function Qm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Lr(-1,1),e.tag=2,_i(n,e,1))),n.lanes|=1),t)}var Rb=Gr.ReactCurrentOwner,cn=!1;function en(t,e,n,r){e.child=t===null?xy(e,null,n,r):wa(e,t.child,n,r)}function Jm(t,e,n,r,i){n=n.render;var s=e.ref;return ia(e,i),r=gp(t,e,n,r,s,i),n=vp(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zr(t,e,i)):(mt&&n&&ip(e),e.flags|=1,en(t,e,r,i),e.child)}function eg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ap(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,jy(t,e,s,r,i)):(t=dc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(a,r)&&t.ref===e.ref)return zr(t,e,i)}return e.flags|=1,t=bi(s,r),t.ref=e.ref,t.return=e,e.child=t}function jy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ao(s,r)&&t.ref===e.ref)if(cn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,zr(t,e,i)}return Rf(t,e,n,r,i)}function Xy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Zs,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(Zs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ct(Zs,_n),_n|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ct(Zs,_n),_n|=r;return en(t,e,i,n),e.child}function $y(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rf(t,e,n,r,i){var s=dn(n)?os:Kt.current;return s=_a(e,s),ia(e,i),n=gp(t,e,n,r,s,i),r=vp(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zr(t,e,i)):(mt&&r&&ip(e),e.flags|=1,en(t,e,n,i),e.child)}function tg(t,e,n,r,i){if(dn(n)){var s=!0;Nc(e)}else s=!1;if(ia(e,i),e.stateNode===null)lc(t,e),Vy(e,n,r),Af(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=dn(n)?os:Kt.current,c=_a(e,c));var f=n.getDerivedStateFromProps,u=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||l!==c)&&Ym(e,a,r,c),si=!1;var h=e.memoizedState;a.state=h,Fc(e,r,a,i),l=e.memoizedState,o!==r||h!==l||un.current||si?(typeof f=="function"&&(Tf(e,n,f,r),l=e.memoizedState),(o=si||qm(e,n,o,r,h,l,c))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),a.props=r,a.state=l,a.context=c,r=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Sy(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:$n(e.type,o),a.props=c,u=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=dn(n)?os:Kt.current,l=_a(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==u||h!==l)&&Ym(e,a,r,l),si=!1,h=e.memoizedState,a.state=h,Fc(e,r,a,i);var x=e.memoizedState;o!==u||h!==x||un.current||si?(typeof m=="function"&&(Tf(e,n,m,r),x=e.memoizedState),(c=si||qm(e,n,c,r,h,x,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),a.props=r,a.state=x,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Pf(t,e,n,r,s,i)}function Pf(t,e,n,r,i,s){$y(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&zm(e,n,!1),zr(t,e,s);r=e.stateNode,Rb.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=wa(e,t.child,null,s),e.child=wa(e,null,o,s)):en(t,e,o,s),e.memoizedState=r.state,i&&zm(e,n,!0),e.child}function qy(t){var e=t.stateNode;e.pendingContext?Bm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bm(t,e.context,!1),fp(t,e.containerInfo)}function ng(t,e,n,r,i){return Sa(),ap(i),e.flags|=256,en(t,e,n,r),e.child}var Df={dehydrated:null,treeContext:null,retryLane:0};function Nf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yy(t,e,n){var r=e.pendingProps,i=vt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ct(vt,i&1),t===null)return Mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=du(a,r,0,null),t=ss(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nf(n),e.memoizedState=Df,t):_p(e,a));if(i=t.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Pb(t,e,a,r,o,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,o=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=bi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=bi(o,s):(s=ss(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?Nf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Df,r}return s=t.child,t=s.sibling,r=bi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _p(t,e){return e=du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xl(t,e,n,r){return r!==null&&ap(r),wa(e,t.child,null,n),t=_p(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Pb(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=Ju(Error(re(422))),xl(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=du({mode:"visible",children:r.children},i,0,null),s=ss(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&wa(e,t.child,null,a),e.child.memoizedState=Nf(a),e.memoizedState=Df,s);if(!(e.mode&1))return xl(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(re(419)),r=Ju(s,r,void 0),xl(t,e,a,r)}if(o=(a&t.childLanes)!==0,cn||o){if(r=Ft,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Br(t,i),tr(r,t,i,-1))}return Tp(),r=Ju(Error(re(421))),xl(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Gb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Sn=xi(i.nextSibling),wn=e,mt=!0,Qn=null,t!==null&&(Nn[In++]=Pr,Nn[In++]=Dr,Nn[In++]=ls,Pr=t.id,Dr=t.overflow,ls=e),e=_p(e,r.children),e.flags|=4096,e)}function rg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ef(t.return,e,n)}function ed(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ky(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(en(t,e,r.children,n),r=vt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rg(t,n,e);else if(t.tag===19)rg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ct(vt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Oc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ed(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Oc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ed(e,!0,n,null,s);break;case"together":ed(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function lc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Db(t,e,n){switch(e.tag){case 3:qy(e),Sa();break;case 5:wy(e);break;case 1:dn(e.type)&&Nc(e);break;case 4:fp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ct(Lc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ct(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?Yy(t,e,n):(ct(vt,vt.current&1),t=zr(t,e,n),t!==null?t.sibling:null);ct(vt,vt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ky(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ct(vt,vt.current),r)break;return null;case 22:case 23:return e.lanes=0,Xy(t,e,n)}return zr(t,e,n)}var Qy,If,Zy,Jy;Qy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};If=function(){};Zy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qi(vr.current);var s=null;switch(n){case"input":i=ef(t,i),r=ef(t,r),s=[];break;case"select":i=xt({},i,{value:void 0}),r=xt({},r,{value:void 0}),s=[];break;case"textarea":i=rf(t,i),r=rf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Pc)}af(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var o=i[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(o=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Jy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xa(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Nb(t,e,n){var r=e.pendingProps;switch(sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return dn(e.type)&&Dc(),jt(e),null;case 3:return r=e.stateNode,ba(),ht(un),ht(Kt),pp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(Hf(Qn),Qn=null))),If(t,e),jt(e),null;case 5:hp(e);var i=Qi(No.current);if(n=e.type,t!==null&&e.stateNode!=null)Zy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(re(166));return jt(e),null}if(t=Qi(vr.current),vl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[hr]=e,r[Po]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",r),ft("close",r);break;case"iframe":case"object":case"embed":ft("load",r);break;case"video":case"audio":for(i=0;i<oo.length;i++)ft(oo[i],r);break;case"source":ft("error",r);break;case"img":case"image":case"link":ft("error",r),ft("load",r);break;case"details":ft("toggle",r);break;case"input":fm(r,s),ft("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ft("invalid",r);break;case"textarea":pm(r,s),ft("invalid",r)}af(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&gl(r.textContent,o,t),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&gl(r.textContent,o,t),i=["children",""+o]):_o.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ft("scroll",r)}switch(n){case"input":ll(r),hm(r,s,!0);break;case"textarea":ll(r),mm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[hr]=e,t[Po]=r,Qy(t,e,!1,!1),e.stateNode=t;e:{switch(a=of(n,r),n){case"dialog":ft("cancel",t),ft("close",t),i=r;break;case"iframe":case"object":case"embed":ft("load",t),i=r;break;case"video":case"audio":for(i=0;i<oo.length;i++)ft(oo[i],t);i=r;break;case"source":ft("error",t),i=r;break;case"img":case"image":case"link":ft("error",t),ft("load",t),i=r;break;case"details":ft("toggle",t),i=r;break;case"input":fm(t,r),i=ef(t,r),ft("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xt({},r,{value:void 0}),ft("invalid",t);break;case"textarea":pm(t,r),i=rf(t,r),ft("invalid",t);break;default:i=r}af(n,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?P0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&C0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&So(t,l):typeof l=="number"&&So(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&Wh(t,s,l,a))}switch(n){case"input":ll(t),hm(t,r,!1);break;case"textarea":ll(t),mm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ai(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ea(t,!!r.multiple,s,!1):r.defaultValue!=null&&ea(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Pc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)Jy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(re(166));if(n=Qi(No.current),Qi(vr.current),vl(e)){if(r=e.stateNode,n=e.memoizedProps,r[hr]=e,(s=r.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hr]=e,e.stateNode=r}return jt(e),null;case 13:if(ht(vt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&Sn!==null&&e.mode&1&&!(e.flags&128))vy(),Sa(),e.flags|=98560,s=!1;else if(s=vl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[hr]=e}else Sa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Qn!==null&&(Hf(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Nt===0&&(Nt=3):Tp())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return ba(),If(t,e),t===null&&Co(e.stateNode.containerInfo),jt(e),null;case 10:return cp(e.type._context),jt(e),null;case 17:return dn(e.type)&&Dc(),jt(e),null;case 19:if(ht(vt),s=e.memoizedState,s===null)return jt(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)Xa(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Oc(t),a!==null){for(e.flags|=128,Xa(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Ea&&(e.flags|=128,r=!0,Xa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Oc(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!mt)return jt(e),null}else 2*Et()-s.renderingStartTime>Ea&&n!==1073741824&&(e.flags|=128,r=!0,Xa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=vt.current,ct(vt,r?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Ep(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_n&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Ib(t,e){switch(sp(e),e.tag){case 1:return dn(e.type)&&Dc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ba(),ht(un),ht(Kt),pp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hp(e),null;case 13:if(ht(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Sa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(vt),null;case 4:return ba(),null;case 10:return cp(e.type._context),null;case 22:case 23:return Ep(),null;case 24:return null;default:return null}}var _l=!1,Yt=!1,kb=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){bt(t,e,r)}else n.current=null}function kf(t,e,n){try{n()}catch(r){bt(t,e,r)}}var ig=!1;function Lb(t,e){if(vf=Ac,t=iy(),rp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,u=t,h=null;t:for(;;){for(var m;u!==n||i!==0&&u.nodeType!==3||(o=a+i),u!==s||r!==0&&u.nodeType!==3||(l=a+r),u.nodeType===3&&(a+=u.nodeValue.length),(m=u.firstChild)!==null;)h=u,u=m;for(;;){if(u===t)break t;if(h===n&&++c===i&&(o=a),h===s&&++f===r&&(l=a),(m=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yf={focusedElem:t,selectionRange:n},Ac=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,p=x.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?g:$n(e.type,g),p);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(w){bt(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return x=ig,ig=!1,x}function go(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&kf(e,n,s)}i=i.next}while(i!==r)}}function cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ex(t){var e=t.alternate;e!==null&&(t.alternate=null,ex(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hr],delete e[Po],delete e[Sf],delete e[vb],delete e[yb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tx(t){return t.tag===5||t.tag===3||t.tag===4}function sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pc));else if(r!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}function Ff(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}var Bt=null,Kn=!1;function Xr(t,e,n){for(n=n.child;n!==null;)nx(t,e,n),n=n.sibling}function nx(t,e,n){if(gr&&typeof gr.onCommitFiberUnmount=="function")try{gr.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:Yt||Qs(n,e);case 6:var r=Bt,i=Kn;Bt=null,Xr(t,e,n),Bt=r,Kn=i,Bt!==null&&(Kn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Kn?(t=Bt,n=n.stateNode,t.nodeType===8?$u(t.parentNode,n):t.nodeType===1&&$u(t,n),Eo(t)):$u(Bt,n.stateNode));break;case 4:r=Bt,i=Kn,Bt=n.stateNode.containerInfo,Kn=!0,Xr(t,e,n),Bt=r,Kn=i;break;case 0:case 11:case 14:case 15:if(!Yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&kf(n,e,a),i=i.next}while(i!==r)}Xr(t,e,n);break;case 1:if(!Yt&&(Qs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){bt(n,e,o)}Xr(t,e,n);break;case 21:Xr(t,e,n);break;case 22:n.mode&1?(Yt=(r=Yt)||n.memoizedState!==null,Xr(t,e,n),Yt=r):Xr(t,e,n);break;default:Xr(t,e,n)}}function ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kb),e.forEach(function(r){var i=Wb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Bt=o.stateNode,Kn=!1;break e;case 3:Bt=o.stateNode.containerInfo,Kn=!0;break e;case 4:Bt=o.stateNode.containerInfo,Kn=!0;break e}o=o.return}if(Bt===null)throw Error(re(160));nx(s,a,i),Bt=null,Kn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){bt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rx(e,t),e=e.sibling}function rx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),or(t),r&4){try{go(3,t,t.return),cu(3,t)}catch(g){bt(t,t.return,g)}try{go(5,t,t.return)}catch(g){bt(t,t.return,g)}}break;case 1:Gn(e,t),or(t),r&512&&n!==null&&Qs(n,n.return);break;case 5:if(Gn(e,t),or(t),r&512&&n!==null&&Qs(n,n.return),t.flags&32){var i=t.stateNode;try{So(i,"")}catch(g){bt(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&E0(i,s),of(o,a);var c=of(o,s);for(a=0;a<l.length;a+=2){var f=l[a],u=l[a+1];f==="style"?P0(i,u):f==="dangerouslySetInnerHTML"?C0(i,u):f==="children"?So(i,u):Wh(i,f,u,c)}switch(o){case"input":tf(i,s);break;case"textarea":T0(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ea(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?ea(i,!!s.multiple,s.defaultValue,!0):ea(i,!!s.multiple,s.multiple?[]:"",!1))}i[Po]=s}catch(g){bt(t,t.return,g)}}break;case 6:if(Gn(e,t),or(t),r&4){if(t.stateNode===null)throw Error(re(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(g){bt(t,t.return,g)}}break;case 3:if(Gn(e,t),or(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Eo(e.containerInfo)}catch(g){bt(t,t.return,g)}break;case 4:Gn(e,t),or(t);break;case 13:Gn(e,t),or(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bp=Et())),r&4&&ag(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||f,Gn(e,t),Yt=c):Gn(e,t),or(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ge=t,f=t.child;f!==null;){for(u=ge=f;ge!==null;){switch(h=ge,m=h.child,h.tag){case 0:case 11:case 14:case 15:go(4,h,h.return);break;case 1:Qs(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(g){bt(r,n,g)}}break;case 5:Qs(h,h.return);break;case 22:if(h.memoizedState!==null){lg(u);continue}}m!==null?(m.return=h,ge=m):lg(u)}f=f.sibling}e:for(f=null,u=t;;){if(u.tag===5){if(f===null){f=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=u.stateNode,l=u.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=R0("display",a))}catch(g){bt(t,t.return,g)}}}else if(u.tag===6){if(f===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(g){bt(t,t.return,g)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;f===u&&(f=null),u=u.return}f===u&&(f=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Gn(e,t),or(t),r&4&&ag(t);break;case 21:break;default:Gn(e,t),or(t)}}function or(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tx(n)){var r=n;break e}n=n.return}throw Error(re(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(So(i,""),r.flags&=-33);var s=sg(t);Ff(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=sg(t);Uf(t,o,a);break;default:throw Error(re(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ub(t,e,n){ge=t,ix(t)}function ix(t,e,n){for(var r=(t.mode&1)!==0;ge!==null;){var i=ge,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||_l;if(!a){var o=i.alternate,l=o!==null&&o.memoizedState!==null||Yt;o=_l;var c=Yt;if(_l=a,(Yt=l)&&!c)for(ge=i;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?cg(i):l!==null?(l.return=a,ge=l):cg(i);for(;s!==null;)ge=s,ix(s),s=s.sibling;ge=i,_l=o,Yt=c}og(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ge=s):og(t)}}function og(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||cu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Yt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jm(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var u=f.dehydrated;u!==null&&Eo(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Yt||e.flags&512&&Lf(e)}catch(h){bt(e,e.return,h)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function lg(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function cg(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cu(4,e)}catch(l){bt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){bt(e,i,l)}}var s=e.return;try{Lf(e)}catch(l){bt(e,s,l)}break;case 5:var a=e.return;try{Lf(e)}catch(l){bt(e,a,l)}}}catch(l){bt(e,e.return,l)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var Fb=Math.ceil,Hc=Gr.ReactCurrentDispatcher,Sp=Gr.ReactCurrentOwner,Fn=Gr.ReactCurrentBatchConfig,qe=0,Ft=null,Pt=null,zt=0,_n=0,Zs=Ni(0),Nt=0,Uo=null,us=0,uu=0,wp=0,vo=null,ln=null,bp=0,Ea=1/0,Ar=null,Vc=!1,Of=null,Si=null,Sl=!1,mi=null,Gc=0,yo=0,Bf=null,cc=-1,uc=0;function nn(){return qe&6?Et():cc!==-1?cc:cc=Et()}function wi(t){return t.mode&1?qe&2&&zt!==0?zt&-zt:_b.transition!==null?(uc===0&&(uc=V0()),uc):(t=st,t!==0||(t=window.event,t=t===void 0?16:Y0(t.type)),t):1}function tr(t,e,n,r){if(50<yo)throw yo=0,Bf=null,Error(re(185));$o(t,n,r),(!(qe&2)||t!==Ft)&&(t===Ft&&(!(qe&2)&&(uu|=n),Nt===4&&oi(t,zt)),fn(t,r),n===1&&qe===0&&!(e.mode&1)&&(Ea=Et()+500,au&&Ii()))}function fn(t,e){var n=t.callbackNode;_w(t,e);var r=Tc(t,t===Ft?zt:0);if(r===0)n!==null&&ym(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ym(n),e===1)t.tag===0?xb(ug.bind(null,t)):py(ug.bind(null,t)),mb(function(){!(qe&6)&&Ii()}),n=null;else{switch(G0(r)){case 1:n=Yh;break;case 4:n=z0;break;case 16:n=Ec;break;case 536870912:n=H0;break;default:n=Ec}n=fx(n,sx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sx(t,e){if(cc=-1,uc=0,qe&6)throw Error(re(327));var n=t.callbackNode;if(sa()&&t.callbackNode!==n)return null;var r=Tc(t,t===Ft?zt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wc(t,r);else{e=r;var i=qe;qe|=2;var s=ox();(Ft!==t||zt!==e)&&(Ar=null,Ea=Et()+500,is(t,e));do try{zb();break}catch(o){ax(t,o)}while(1);lp(),Hc.current=s,qe=i,Pt!==null?e=0:(Ft=null,zt=0,e=Nt)}if(e!==0){if(e===2&&(i=ff(t),i!==0&&(r=i,e=zf(t,i))),e===1)throw n=Uo,is(t,0),oi(t,r),fn(t,Et()),n;if(e===6)oi(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ob(i)&&(e=Wc(t,r),e===2&&(s=ff(t),s!==0&&(r=s,e=zf(t,s))),e===1))throw n=Uo,is(t,0),oi(t,r),fn(t,Et()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(re(345));case 2:Gi(t,ln,Ar);break;case 3:if(oi(t,r),(r&130023424)===r&&(e=bp+500-Et(),10<e)){if(Tc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_f(Gi.bind(null,t,ln,Ar),e);break}Gi(t,ln,Ar);break;case 4:if(oi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-er(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=Et()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fb(r/1960))-r,10<r){t.timeoutHandle=_f(Gi.bind(null,t,ln,Ar),r);break}Gi(t,ln,Ar);break;case 5:Gi(t,ln,Ar);break;default:throw Error(re(329))}}}return fn(t,Et()),t.callbackNode===n?sx.bind(null,t):null}function zf(t,e){var n=vo;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=Wc(t,e),t!==2&&(e=ln,ln=n,e!==null&&Hf(e)),t}function Hf(t){ln===null?ln=t:ln.push.apply(ln,t)}function Ob(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!rr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function oi(t,e){for(e&=~wp,e&=~uu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-er(e),r=1<<n;t[n]=-1,e&=~r}}function ug(t){if(qe&6)throw Error(re(327));sa();var e=Tc(t,0);if(!(e&1))return fn(t,Et()),null;var n=Wc(t,e);if(t.tag!==0&&n===2){var r=ff(t);r!==0&&(e=r,n=zf(t,r))}if(n===1)throw n=Uo,is(t,0),oi(t,e),fn(t,Et()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gi(t,ln,Ar),fn(t,Et()),null}function Mp(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Ea=Et()+500,au&&Ii())}}function ds(t){mi!==null&&mi.tag===0&&!(qe&6)&&sa();var e=qe;qe|=1;var n=Fn.transition,r=st;try{if(Fn.transition=null,st=1,t)return t()}finally{st=r,Fn.transition=n,qe=e,!(qe&6)&&Ii()}}function Ep(){_n=Zs.current,ht(Zs)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,pb(n)),Pt!==null)for(n=Pt.return;n!==null;){var r=n;switch(sp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dc();break;case 3:ba(),ht(un),ht(Kt),pp();break;case 5:hp(r);break;case 4:ba();break;case 13:ht(vt);break;case 19:ht(vt);break;case 10:cp(r.type._context);break;case 22:case 23:Ep()}n=n.return}if(Ft=t,Pt=t=bi(t.current,null),zt=_n=e,Nt=0,Uo=null,wp=uu=us=0,ln=vo=null,Ki!==null){for(e=0;e<Ki.length;e++)if(n=Ki[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Ki=null}return t}function ax(t,e){do{var n=Pt;try{if(lp(),ac.current=zc,Bc){for(var r=yt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bc=!1}if(cs=0,Ut=Dt=yt=null,mo=!1,Io=0,Sp.current=null,n===null||n.return===null){Nt=1,Uo=e,Pt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=zt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,u=f.tag;if(!(f.mode&1)&&(u===0||u===11||u===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Qm(a);if(m!==null){m.flags&=-257,Zm(m,a,o,s,e),m.mode&1&&Km(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var g=new Set;g.add(l),e.updateQueue=g}else x.add(l);break e}else{if(!(e&1)){Km(s,c,e),Tp();break e}l=Error(re(426))}}else if(mt&&o.mode&1){var p=Qm(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Zm(p,a,o,s,e),ap(Ma(l,o));break e}}s=l=Ma(l,o),Nt!==4&&(Nt=2),vo===null?vo=[s]:vo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Gy(s,l,e);Wm(s,d);break e;case 1:o=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Si===null||!Si.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Wy(s,o,e);Wm(s,w);break e}}s=s.return}while(s!==null)}cx(n)}catch(A){e=A,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(1)}function ox(){var t=Hc.current;return Hc.current=zc,t===null?zc:t}function Tp(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Ft===null||!(us&268435455)&&!(uu&268435455)||oi(Ft,zt)}function Wc(t,e){var n=qe;qe|=2;var r=ox();(Ft!==t||zt!==e)&&(Ar=null,is(t,e));do try{Bb();break}catch(i){ax(t,i)}while(1);if(lp(),qe=n,Hc.current=r,Pt!==null)throw Error(re(261));return Ft=null,zt=0,Nt}function Bb(){for(;Pt!==null;)lx(Pt)}function zb(){for(;Pt!==null&&!dw();)lx(Pt)}function lx(t){var e=dx(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?cx(t):Pt=e,Sp.current=null}function cx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ib(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Pt=null;return}}else if(n=Nb(n,e,_n),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Nt===0&&(Nt=5)}function Gi(t,e,n){var r=st,i=Fn.transition;try{Fn.transition=null,st=1,Hb(t,e,n,r)}finally{Fn.transition=i,st=r}return null}function Hb(t,e,n,r){do sa();while(mi!==null);if(qe&6)throw Error(re(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Sw(t,s),t===Ft&&(Pt=Ft=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sl||(Sl=!0,fx(Ec,function(){return sa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fn.transition,Fn.transition=null;var a=st;st=1;var o=qe;qe|=4,Sp.current=null,Lb(t,n),rx(n,t),ob(yf),Ac=!!vf,yf=vf=null,t.current=n,Ub(n),fw(),qe=o,st=a,Fn.transition=s}else t.current=n;if(Sl&&(Sl=!1,mi=t,Gc=i),s=t.pendingLanes,s===0&&(Si=null),mw(n.stateNode),fn(t,Et()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vc)throw Vc=!1,t=Of,Of=null,t;return Gc&1&&t.tag!==0&&sa(),s=t.pendingLanes,s&1?t===Bf?yo++:(yo=0,Bf=t):yo=0,Ii(),null}function sa(){if(mi!==null){var t=G0(Gc),e=Fn.transition,n=st;try{if(Fn.transition=null,st=16>t?16:t,mi===null)var r=!1;else{if(t=mi,mi=null,Gc=0,qe&6)throw Error(re(331));var i=qe;for(qe|=4,ge=t.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ge=c;ge!==null;){var f=ge;switch(f.tag){case 0:case 11:case 15:go(8,f,s)}var u=f.child;if(u!==null)u.return=f,ge=u;else for(;ge!==null;){f=ge;var h=f.sibling,m=f.return;if(ex(f),f===c){ge=null;break}if(h!==null){h.return=m,ge=h;break}ge=m}}}var x=s.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var p=g.sibling;g.sibling=null,g=p}while(g!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ge=d;break e}ge=s.return}}var v=t.current;for(ge=v;ge!==null;){a=ge;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,ge=_;else e:for(a=v;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:cu(9,o)}}catch(A){bt(o,o.return,A)}if(o===a){ge=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,ge=w;break e}ge=o.return}}if(qe=i,Ii(),gr&&typeof gr.onPostCommitFiberRoot=="function")try{gr.onPostCommitFiberRoot(tu,t)}catch{}r=!0}return r}finally{st=n,Fn.transition=e}}return!1}function dg(t,e,n){e=Ma(n,e),e=Gy(t,e,1),t=_i(t,e,1),e=nn(),t!==null&&($o(t,1,e),fn(t,e))}function bt(t,e,n){if(t.tag===3)dg(t,t,n);else for(;e!==null;){if(e.tag===3){dg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Si===null||!Si.has(r))){t=Ma(n,t),t=Wy(e,t,1),e=_i(e,t,1),t=nn(),e!==null&&($o(e,1,t),fn(e,t));break}}e=e.return}}function Vb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(zt&n)===n&&(Nt===4||Nt===3&&(zt&130023424)===zt&&500>Et()-bp?is(t,0):wp|=n),fn(t,e)}function ux(t,e){e===0&&(t.mode&1?(e=dl,dl<<=1,!(dl&130023424)&&(dl=4194304)):e=1);var n=nn();t=Br(t,e),t!==null&&($o(t,e,n),fn(t,n))}function Gb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ux(t,n)}function Wb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(re(314))}r!==null&&r.delete(e),ux(t,n)}var dx;dx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,Db(t,e,n);cn=!!(t.flags&131072)}else cn=!1,mt&&e.flags&1048576&&my(e,kc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;lc(t,e),t=e.pendingProps;var i=_a(e,Kt.current);ia(e,n),i=gp(null,e,r,t,i,n);var s=vp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(r)?(s=!0,Nc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dp(e),i.updater=lu,e.stateNode=i,i._reactInternals=e,Af(e,r,t,n),e=Pf(null,e,r,!0,s,n)):(e.tag=0,mt&&s&&ip(e),en(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(lc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Xb(r),t=$n(r,t),i){case 0:e=Rf(null,e,r,t,n);break e;case 1:e=tg(null,e,r,t,n);break e;case 11:e=Jm(null,e,r,t,n);break e;case 14:e=eg(null,e,r,$n(r.type,t),n);break e}throw Error(re(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),Rf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),tg(t,e,r,i,n);case 3:e:{if(qy(e),t===null)throw Error(re(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Sy(t,e),Fc(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ma(Error(re(423)),e),e=ng(t,e,r,n,i);break e}else if(r!==i){i=Ma(Error(re(424)),e),e=ng(t,e,r,n,i);break e}else for(Sn=xi(e.stateNode.containerInfo.firstChild),wn=e,mt=!0,Qn=null,n=xy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sa(),r===i){e=zr(t,e,n);break e}en(t,e,r,n)}e=e.child}return e;case 5:return wy(e),t===null&&Mf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,xf(r,i)?a=null:s!==null&&xf(r,s)&&(e.flags|=32),$y(t,e),en(t,e,a,n),e.child;case 6:return t===null&&Mf(e),null;case 13:return Yy(t,e,n);case 4:return fp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wa(e,null,r,n):en(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),Jm(t,e,r,i,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,ct(Lc,r._currentValue),r._currentValue=a,s!==null)if(rr(s.value,a)){if(s.children===i.children&&!un.current){e=zr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Lr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ef(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ef(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}en(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ia(e,n),i=Bn(i),r=r(i),e.flags|=1,en(t,e,r,n),e.child;case 14:return r=e.type,i=$n(r,e.pendingProps),i=$n(r.type,i),eg(t,e,r,i,n);case 15:return jy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),lc(t,e),e.tag=1,dn(r)?(t=!0,Nc(e)):t=!1,ia(e,n),Vy(e,r,i),Af(e,r,i,n),Pf(null,e,r,!0,t,n);case 19:return Ky(t,e,n);case 22:return Xy(t,e,n)}throw Error(re(156,e.tag))};function fx(t,e){return B0(t,e)}function jb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,r){return new jb(t,e,n,r)}function Ap(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xb(t){if(typeof t=="function")return Ap(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xh)return 11;if(t===$h)return 14}return 2}function bi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dc(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Ap(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Vs:return ss(n.children,i,s,e);case jh:a=8,i|=8;break;case Kd:return t=Ln(12,n,e,i|2),t.elementType=Kd,t.lanes=s,t;case Qd:return t=Ln(13,n,e,i),t.elementType=Qd,t.lanes=s,t;case Zd:return t=Ln(19,n,e,i),t.elementType=Zd,t.lanes=s,t;case w0:return du(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _0:a=10;break e;case S0:a=9;break e;case Xh:a=11;break e;case $h:a=14;break e;case ii:a=16,r=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Ln(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ss(t,e,n,r){return t=Ln(7,t,r,e),t.lanes=n,t}function du(t,e,n,r){return t=Ln(22,t,r,e),t.elementType=w0,t.lanes=n,t.stateNode={isHidden:!1},t}function td(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function nd(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $b(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cp(t,e,n,r,i,s,a,o,l){return t=new $b(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dp(s),t}function qb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hx(t){if(!t)return Ci;t=t._reactInternals;e:{if(ys(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(dn(n))return hy(t,n,e)}return e}function px(t,e,n,r,i,s,a,o,l){return t=Cp(n,r,!0,t,i,s,a,o,l),t.context=hx(null),n=t.current,r=nn(),i=wi(n),s=Lr(r,i),s.callback=e??null,_i(n,s,i),t.current.lanes=i,$o(t,i,r),fn(t,r),t}function fu(t,e,n,r){var i=e.current,s=nn(),a=wi(i);return n=hx(n),e.context===null?e.context=n:e.pendingContext=n,e=Lr(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_i(i,e,a),t!==null&&(tr(t,i,a,s),sc(t,i,a)),a}function jc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rp(t,e){fg(t,e),(t=t.alternate)&&fg(t,e)}function Yb(){return null}var mx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pp(t){this._internalRoot=t}hu.prototype.render=Pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));fu(t,e,null,null)};hu.prototype.unmount=Pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ds(function(){fu(null,t,null,null)}),e[Or]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var e=X0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ai.length&&e!==0&&e<ai[n].priority;n++);ai.splice(n,0,t),n===0&&q0(t)}};function Dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hg(){}function Kb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=jc(a);s.call(c)}}var a=px(e,r,t,0,null,!1,!1,"",hg);return t._reactRootContainer=a,t[Or]=a.current,Co(t.nodeType===8?t.parentNode:t),ds(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var c=jc(l);o.call(c)}}var l=Cp(t,0,!1,null,null,!1,!1,"",hg);return t._reactRootContainer=l,t[Or]=l.current,Co(t.nodeType===8?t.parentNode:t),ds(function(){fu(e,l,n,r)}),l}function mu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var o=i;i=function(){var l=jc(a);o.call(l)}}fu(e,a,t,i)}else a=Kb(n,e,t,i,r);return jc(a)}W0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ao(e.pendingLanes);n!==0&&(Kh(e,n|1),fn(e,Et()),!(qe&6)&&(Ea=Et()+500,Ii()))}break;case 13:ds(function(){var r=Br(t,1);if(r!==null){var i=nn();tr(r,t,1,i)}}),Rp(t,1)}};Qh=function(t){if(t.tag===13){var e=Br(t,134217728);if(e!==null){var n=nn();tr(e,t,134217728,n)}Rp(t,134217728)}};j0=function(t){if(t.tag===13){var e=wi(t),n=Br(t,e);if(n!==null){var r=nn();tr(n,t,e,r)}Rp(t,e)}};X0=function(){return st};$0=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};cf=function(t,e,n){switch(e){case"input":if(tf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=su(r);if(!i)throw Error(re(90));M0(r),tf(r,i)}}}break;case"textarea":T0(t,n);break;case"select":e=n.value,e!=null&&ea(t,!!n.multiple,e,!1)}};I0=Mp;k0=ds;var Qb={usingClientEntryPoint:!1,Events:[Yo,Xs,su,D0,N0,Mp]},$a={findFiberByHostInstance:Yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zb={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=F0(t),t===null?null:t.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||Yb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{tu=wl.inject(Zb),gr=wl}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qb;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dp(e))throw Error(re(200));return qb(t,e,null,n)};Mn.createRoot=function(t,e){if(!Dp(t))throw Error(re(299));var n=!1,r="",i=mx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cp(t,1,!1,null,null,n,!1,r,i),t[Or]=e.current,Co(t.nodeType===8?t.parentNode:t),new Pp(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=F0(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return ds(t)};Mn.hydrate=function(t,e,n){if(!pu(e))throw Error(re(200));return mu(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!Dp(t))throw Error(re(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=mx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=px(e,null,t,1,n??null,i,!1,s,a),t[Or]=e.current,Co(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new hu(e)};Mn.render=function(t,e,n){if(!pu(e))throw Error(re(200));return mu(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!pu(t))throw Error(re(40));return t._reactRootContainer?(ds(function(){mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Or]=null})}),!0):!1};Mn.unstable_batchedUpdates=Mp;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return mu(t,e,n,!1,r)};Mn.version="18.3.1-next-f1338f8080-20240426";function gx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gx)}catch(t){console.error(t)}}gx(),g0.exports=Mn;var Np=g0.exports;const Jb=r0(Np);var pg=Np;qd.createRoot=pg.createRoot,qd.hydrateRoot=pg.hydrateRoot;function eM(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,i,s,a=[],o="",l=t.split("/");for(l[0]||l.shift();i=l.shift();)n=i[0],n==="*"?(a.push(n),o+=i[1]==="?"?"(?:/(.*))?":"/(.*)"):n===":"?(r=i.indexOf("?",1),s=i.indexOf(".",1),a.push(i.substring(1,~r?r:~s?s:i.length)),o+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(o+=(~r?"?":"")+"\\"+i.substring(s))):o+="/"+i;return{keys:a,pattern:new RegExp("^"+o+(e?"(?=$|/)":"/?$"),"i")}}var vx={exports:{}},yx={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=D;function tM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nM=typeof Object.is=="function"?Object.is:tM,rM=Ta.useState,iM=Ta.useEffect,sM=Ta.useLayoutEffect,aM=Ta.useDebugValue;function oM(t,e){var n=e(),r=rM({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return sM(function(){i.value=n,i.getSnapshot=e,rd(i)&&s({inst:i})},[t,n,e]),iM(function(){return rd(i)&&s({inst:i}),t(function(){rd(i)&&s({inst:i})})},[t]),aM(n),n}function rd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nM(t,n)}catch{return!0}}function lM(t,e){return e()}var cM=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?lM:oM;yx.useSyncExternalStore=Ta.useSyncExternalStore!==void 0?Ta.useSyncExternalStore:cM;vx.exports=yx;var uM=vx.exports;const dM=p0["useInsertionEffect"],fM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hM=fM?D.useLayoutEffect:D.useEffect,pM=dM||hM,xx=t=>{const e=D.useRef([t,(...n)=>e[0](...n)]).current;return pM(()=>{e[0]=t}),e[1]},mM="popstate",Ip="pushState",kp="replaceState",gM="hashchange",mg=[mM,Ip,kp,gM],vM=t=>{for(const e of mg)addEventListener(e,t);return()=>{for(const e of mg)removeEventListener(e,t)}},_x=(t,e)=>uM.useSyncExternalStore(vM,t,e),yM=()=>location.search,xM=({ssrSearch:t=""}={})=>_x(yM,()=>t),gg=()=>location.pathname,_M=({ssrPath:t}={})=>_x(gg,t?()=>t:gg),SM=(t,{replace:e=!1,state:n=null}={})=>history[e?kp:Ip](n,"",t),wM=(t={})=>[_M(t),SM],vg=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[vg]>"u"){for(const t of[Ip,kp]){const e=history[t];history[t]=function(){const n=e.apply(this,arguments),r=new Event(t);return r.arguments=arguments,dispatchEvent(r),n}}Object.defineProperty(window,vg,{value:!0})}const bM=(t,e)=>e.toLowerCase().indexOf(t.toLowerCase())?"~"+e:e.slice(t.length)||"/",Sx=(t="")=>t==="/"?"":t,MM=(t,e)=>t[0]==="~"?t.slice(1):Sx(e)+t,EM=(t="",e)=>bM(yg(Sx(t)),yg(e)),yg=t=>{try{return decodeURI(t)}catch{return t}},wx={hook:wM,searchHook:xM,parser:eM,base:"",ssrPath:void 0,ssrSearch:void 0,hrefs:t=>t},bx=D.createContext(wx),gu=()=>D.useContext(bx),Mx={},Ex=D.createContext(Mx),TM=()=>D.useContext(Ex),Lp=t=>{const[e,n]=t.hook(t);return[EM(t.base,e),xx((r,i)=>n(MM(r,t.base),i))]},Tx=(t,e,n,r)=>{const{pattern:i,keys:s}=e instanceof RegExp?{keys:!1,pattern:e}:t(e||"*",r),a=i.exec(n)||[],[o,...l]=a;return o!==void 0?[!0,(()=>{const c=s!==!1?Object.fromEntries(s.map((u,h)=>[u,l[h]])):a.groups;let f={...l};return c&&Object.assign(f,c),f})(),...r?[o]:[]]:[!1,null]},Ax=({children:t,...e})=>{var f,u;const n=gu(),r=e.hook?wx:n;let i=r;const[s,a]=((f=e.ssrPath)==null?void 0:f.split("?"))??[];a&&(e.ssrSearch=a,e.ssrPath=s),e.hrefs=e.hrefs??((u=e.hook)==null?void 0:u.hrefs);let o=D.useRef({}),l=o.current,c=l;for(let h in r){const m=h==="base"?r[h]+(e[h]||""):e[h]||r[h];l===c&&m!==c[h]&&(o.current=c={...c}),c[h]=m,m!==r[h]&&(i=c)}return D.createElement(bx.Provider,{value:i,children:t})},xg=({children:t,component:e},n)=>e?D.createElement(e,{params:n}):typeof t=="function"?t(n):t,AM=t=>{let e=D.useRef(Mx),n=e.current;for(const r in t)t[r]!==n[r]&&(n=t);return Object.keys(t).length===0&&(n=t),e.current=n},qa=({path:t,nest:e,match:n,...r})=>{const i=gu(),[s]=Lp(i),[a,o,l]=n??Tx(i.parser,t,s,e),c=AM({...TM(),...o});if(!a)return null;const f=l?D.createElement(Ax,{base:l},xg(r,c)):xg(r,c);return D.createElement(Ex.Provider,{value:c,children:f})},Un=D.forwardRef((t,e)=>{const n=gu(),[r,i]=Lp(n),{to:s="",href:a=s,onClick:o,asChild:l,children:c,className:f,replace:u,state:h,...m}=t,x=xx(p=>{p.ctrlKey||p.metaKey||p.altKey||p.shiftKey||p.button!==0||(o==null||o(p),p.defaultPrevented||(p.preventDefault(),i(a,t)))}),g=n.hrefs(a[0]==="~"?a.slice(1):n.base+a,n);return l&&D.isValidElement(c)?D.cloneElement(c,{onClick:x,href:g}):D.createElement("a",{...m,onClick:x,href:g,className:f!=null&&f.call?f(r===a):f,children:c,ref:e})}),Cx=t=>Array.isArray(t)?t.flatMap(e=>Cx(e&&e.type===D.Fragment?e.props.children:e)):[t],CM=({children:t,location:e})=>{const n=gu(),[r]=Lp(n);for(const i of Cx(t)){let s=0;if(D.isValidElement(i)&&(s=Tx(n.parser,i.props.path,e||r,i.props.nest))[0])return D.cloneElement(i,{match:s})}return null};var RM="@vercel/analytics",PM="1.5.0",DM=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function Rx(){return typeof window<"u"}function Px(){try{const t="production"}catch{}return"production"}function NM(t="auto"){if(t==="auto"){window.vam=Px();return}window.vam=t}function IM(){return(Rx()?window.vam:Px())||"production"}function Vf(){return IM()==="development"}function kM(t){return t.scriptSrc?t.scriptSrc:Vf()?"https://va.vercel-scripts.com/v1/script.debug.js":t.basePath?`${t.basePath}/insights/script.js`:"/_vercel/insights/script.js"}function LM(t={debug:!0}){var e;if(!Rx())return;NM(t.mode),DM(),t.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",t.beforeSend));const n=kM(t);if(document.head.querySelector(`script[src*="${n}"]`))return;const r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn=RM+(t.framework?`/${t.framework}`:""),r.dataset.sdkv=PM,t.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),t.endpoint?r.dataset.endpoint=t.endpoint:t.basePath&&(r.dataset.endpoint=`${t.basePath}/insights`),t.dsn&&(r.dataset.dsn=t.dsn),r.onerror=()=>{const i=Vf()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${i}`)},Vf()&&t.debug===!1&&(r.dataset.debug="false"),document.head.appendChild(r)}function UM({route:t,path:e}){var n;(n=window.va)==null||n.call(window,"pageview",{route:t,path:e})}function FM(){if(!(typeof process>"u"||typeof process.env>"u"))return{}.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function OM(t){return D.useEffect(()=>{var e;t.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",t.beforeSend))},[t.beforeSend]),D.useEffect(()=>{LM({framework:t.framework||"react",basePath:t.basePath??FM(),...t.route!==void 0&&{disableAutoTrack:!0},...t})},[]),D.useEffect(()=>{t.route&&t.path&&UM({route:t.route,path:t.path})},[t.route,t.path]),null}function Mi(t,e,{checkForDefaultPrevented:n=!0}={}){return function(i){if(t==null||t(i),n===!1||!i.defaultPrevented)return e==null?void 0:e(i)}}function BM(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function Dx(...t){return e=>t.forEach(n=>BM(n,e))}function xs(...t){return D.useCallback(Dx(...t),t)}function zM(t,e){const n=D.createContext(e),r=s=>{const{children:a,...o}=s,l=D.useMemo(()=>o,Object.values(o));return y.jsx(n.Provider,{value:l,children:a})};r.displayName=t+"Provider";function i(s){const a=D.useContext(n);if(a)return a;if(e!==void 0)return e;throw new Error(`\`${s}\` must be used within \`${t}\``)}return[r,i]}function HM(t,e=[]){let n=[];function r(s,a){const o=D.createContext(a),l=n.length;n=[...n,a];const c=u=>{var d;const{scope:h,children:m,...x}=u,g=((d=h==null?void 0:h[t])==null?void 0:d[l])||o,p=D.useMemo(()=>x,Object.values(x));return y.jsx(g.Provider,{value:p,children:m})};c.displayName=s+"Provider";function f(u,h){var g;const m=((g=h==null?void 0:h[t])==null?void 0:g[l])||o,x=D.useContext(m);if(x)return x;if(a!==void 0)return a;throw new Error(`\`${u}\` must be used within \`${s}\``)}return[c,f]}const i=()=>{const s=n.map(a=>D.createContext(a));return function(o){const l=(o==null?void 0:o[t])||s;return D.useMemo(()=>({[`__scope${t}`]:{...o,[t]:l}}),[o,l])}};return i.scopeName=t,[r,VM(i,...e)]}function VM(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const r=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(s){const a=r.reduce((o,{useScope:l,scopeName:c})=>{const u=l(s)[`__scope${c}`];return{...o,...u}},{});return D.useMemo(()=>({[`__scope${e.scopeName}`]:a}),[a])}};return n.scopeName=e.scopeName,n}var Xc=globalThis!=null&&globalThis.document?D.useLayoutEffect:()=>{},GM=p0["useId".toString()]||(()=>{}),WM=0;function id(t){const[e,n]=D.useState(GM());return Xc(()=>{t||n(r=>r??String(WM++))},[t]),t||(e?`radix-${e}`:"")}function fs(t){const e=D.useRef(t);return D.useEffect(()=>{e.current=t}),D.useMemo(()=>(...n)=>{var r;return(r=e.current)==null?void 0:r.call(e,...n)},[])}function jM({prop:t,defaultProp:e,onChange:n=()=>{}}){const[r,i]=XM({defaultProp:e,onChange:n}),s=t!==void 0,a=s?t:r,o=fs(n),l=D.useCallback(c=>{if(s){const u=typeof c=="function"?c(t):c;u!==t&&o(u)}else i(c)},[s,t,i,o]);return[a,l]}function XM({defaultProp:t,onChange:e}){const n=D.useState(t),[r]=n,i=D.useRef(r),s=fs(e);return D.useEffect(()=>{i.current!==r&&(s(r),i.current=r)},[r,i,s]),n}var vu=D.forwardRef((t,e)=>{const{children:n,...r}=t,i=D.Children.toArray(n),s=i.find(qM);if(s){const a=s.props.children,o=i.map(l=>l===s?D.Children.count(a)>1?D.Children.only(null):D.isValidElement(a)?a.props.children:null:l);return y.jsx(Gf,{...r,ref:e,children:D.isValidElement(a)?D.cloneElement(a,void 0,o):null})}return y.jsx(Gf,{...r,ref:e,children:n})});vu.displayName="Slot";var Gf=D.forwardRef((t,e)=>{const{children:n,...r}=t;if(D.isValidElement(n)){const i=KM(n);return D.cloneElement(n,{...YM(r,n.props),ref:e?Dx(e,i):i})}return D.Children.count(n)>1?D.Children.only(null):null});Gf.displayName="SlotClone";var $M=({children:t})=>y.jsx(y.Fragment,{children:t});function qM(t){return D.isValidElement(t)&&t.type===$M}function YM(t,e){const n={...e};for(const r in e){const i=t[r],s=e[r];/^on[A-Z]/.test(r)?i&&s?n[r]=(...o)=>{s(...o),i(...o)}:i&&(n[r]=i):r==="style"?n[r]={...i,...s}:r==="className"&&(n[r]=[i,s].filter(Boolean).join(" "))}return{...t,...n}}function KM(t){var r,i;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var QM=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Wr=QM.reduce((t,e)=>{const n=D.forwardRef((r,i)=>{const{asChild:s,...a}=r,o=s?vu:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),y.jsx(o,{...a,ref:i})});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function ZM(t,e){t&&Np.flushSync(()=>t.dispatchEvent(e))}function JM(t,e=globalThis==null?void 0:globalThis.document){const n=fs(t);D.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return e.addEventListener("keydown",r,{capture:!0}),()=>e.removeEventListener("keydown",r,{capture:!0})},[n,e])}var eE="DismissableLayer",Wf="dismissableLayer.update",tE="dismissableLayer.pointerDownOutside",nE="dismissableLayer.focusOutside",_g,Nx=D.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ix=D.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:a,onDismiss:o,...l}=t,c=D.useContext(Nx),[f,u]=D.useState(null),h=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=D.useState({}),x=xs(e,T=>u(T)),g=Array.from(c.layers),[p]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),d=g.indexOf(p),v=f?g.indexOf(f):-1,_=c.layersWithOutsidePointerEventsDisabled.size>0,w=v>=d,A=sE(T=>{const P=T.target,M=[...c.branches].some(S=>S.contains(P));!w||M||(i==null||i(T),a==null||a(T),T.defaultPrevented||o==null||o())},h),C=aE(T=>{const P=T.target;[...c.branches].some(S=>S.contains(P))||(s==null||s(T),a==null||a(T),T.defaultPrevented||o==null||o())},h);return JM(T=>{v===c.layers.size-1&&(r==null||r(T),!T.defaultPrevented&&o&&(T.preventDefault(),o()))},h),D.useEffect(()=>{if(f)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(_g=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(f)),c.layers.add(f),Sg(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=_g)}},[f,h,n,c]),D.useEffect(()=>()=>{f&&(c.layers.delete(f),c.layersWithOutsidePointerEventsDisabled.delete(f),Sg())},[f,c]),D.useEffect(()=>{const T=()=>m({});return document.addEventListener(Wf,T),()=>document.removeEventListener(Wf,T)},[]),y.jsx(Wr.div,{...l,ref:x,style:{pointerEvents:_?w?"auto":"none":void 0,...t.style},onFocusCapture:Mi(t.onFocusCapture,C.onFocusCapture),onBlurCapture:Mi(t.onBlurCapture,C.onBlurCapture),onPointerDownCapture:Mi(t.onPointerDownCapture,A.onPointerDownCapture)})});Ix.displayName=eE;var rE="DismissableLayerBranch",iE=D.forwardRef((t,e)=>{const n=D.useContext(Nx),r=D.useRef(null),i=xs(e,r);return D.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),y.jsx(Wr.div,{...t,ref:i})});iE.displayName=rE;function sE(t,e=globalThis==null?void 0:globalThis.document){const n=fs(t),r=D.useRef(!1),i=D.useRef(()=>{});return D.useEffect(()=>{const s=o=>{if(o.target&&!r.current){let l=function(){kx(tE,n,c,{discrete:!0})};const c={originalEvent:o};o.pointerType==="touch"?(e.removeEventListener("click",i.current),i.current=l,e.addEventListener("click",i.current,{once:!0})):l()}else e.removeEventListener("click",i.current);r.current=!1},a=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(a),e.removeEventListener("pointerdown",s),e.removeEventListener("click",i.current)}},[e,n]),{onPointerDownCapture:()=>r.current=!0}}function aE(t,e=globalThis==null?void 0:globalThis.document){const n=fs(t),r=D.useRef(!1);return D.useEffect(()=>{const i=s=>{s.target&&!r.current&&kx(nE,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",i),()=>e.removeEventListener("focusin",i)},[e,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Sg(){const t=new CustomEvent(Wf);document.dispatchEvent(t)}function kx(t,e,n,{discrete:r}){const i=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&i.addEventListener(t,e,{once:!0}),r?ZM(i,s):i.dispatchEvent(s)}var sd="focusScope.autoFocusOnMount",ad="focusScope.autoFocusOnUnmount",wg={bubbles:!1,cancelable:!0},oE="FocusScope",Lx=D.forwardRef((t,e)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:s,...a}=t,[o,l]=D.useState(null),c=fs(i),f=fs(s),u=D.useRef(null),h=xs(e,g=>l(g)),m=D.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;D.useEffect(()=>{if(r){let g=function(_){if(m.paused||!o)return;const w=_.target;o.contains(w)?u.current=w:ni(u.current,{select:!0})},p=function(_){if(m.paused||!o)return;const w=_.relatedTarget;w!==null&&(o.contains(w)||ni(u.current,{select:!0}))},d=function(_){if(document.activeElement===document.body)for(const A of _)A.removedNodes.length>0&&ni(o)};document.addEventListener("focusin",g),document.addEventListener("focusout",p);const v=new MutationObserver(d);return o&&v.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",p),v.disconnect()}}},[r,o,m.paused]),D.useEffect(()=>{if(o){Mg.add(m);const g=document.activeElement;if(!o.contains(g)){const d=new CustomEvent(sd,wg);o.addEventListener(sd,c),o.dispatchEvent(d),d.defaultPrevented||(lE(hE(Ux(o)),{select:!0}),document.activeElement===g&&ni(o))}return()=>{o.removeEventListener(sd,c),setTimeout(()=>{const d=new CustomEvent(ad,wg);o.addEventListener(ad,f),o.dispatchEvent(d),d.defaultPrevented||ni(g??document.body,{select:!0}),o.removeEventListener(ad,f),Mg.remove(m)},0)}}},[o,c,f,m]);const x=D.useCallback(g=>{if(!n&&!r||m.paused)return;const p=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,d=document.activeElement;if(p&&d){const v=g.currentTarget,[_,w]=cE(v);_&&w?!g.shiftKey&&d===w?(g.preventDefault(),n&&ni(_,{select:!0})):g.shiftKey&&d===_&&(g.preventDefault(),n&&ni(w,{select:!0})):d===v&&g.preventDefault()}},[n,r,m.paused]);return y.jsx(Wr.div,{tabIndex:-1,...a,ref:h,onKeyDown:x})});Lx.displayName=oE;function lE(t,{select:e=!1}={}){const n=document.activeElement;for(const r of t)if(ni(r,{select:e}),document.activeElement!==n)return}function cE(t){const e=Ux(t),n=bg(e,t),r=bg(e.reverse(),t);return[n,r]}function Ux(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function bg(t,e){for(const n of t)if(!uE(n,{upTo:e}))return n}function uE(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function dE(t){return t instanceof HTMLInputElement&&"select"in t}function ni(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&dE(t)&&e&&t.select()}}var Mg=fE();function fE(){let t=[];return{add(e){const n=t[0];e!==n&&(n==null||n.pause()),t=Eg(t,e),t.unshift(e)},remove(e){var n;t=Eg(t,e),(n=t[0])==null||n.resume()}}}function Eg(t,e){const n=[...t],r=n.indexOf(e);return r!==-1&&n.splice(r,1),n}function hE(t){return t.filter(e=>e.tagName!=="A")}var pE="Portal",Fx=D.forwardRef((t,e)=>{var o;const{container:n,...r}=t,[i,s]=D.useState(!1);Xc(()=>s(!0),[]);const a=n||i&&((o=globalThis==null?void 0:globalThis.document)==null?void 0:o.body);return a?Jb.createPortal(y.jsx(Wr.div,{...r,ref:e}),a):null});Fx.displayName=pE;function mE(t,e){return D.useReducer((n,r)=>e[n][r]??n,t)}var yu=t=>{const{present:e,children:n}=t,r=gE(e),i=typeof n=="function"?n({present:r.isPresent}):D.Children.only(n),s=xs(r.ref,vE(i));return typeof n=="function"||r.isPresent?D.cloneElement(i,{ref:s}):null};yu.displayName="Presence";function gE(t){const[e,n]=D.useState(),r=D.useRef({}),i=D.useRef(t),s=D.useRef("none"),a=t?"mounted":"unmounted",[o,l]=mE(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return D.useEffect(()=>{const c=bl(r.current);s.current=o==="mounted"?c:"none"},[o]),Xc(()=>{const c=r.current,f=i.current;if(f!==t){const h=s.current,m=bl(c);t?l("MOUNT"):m==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(f&&h!==m?"ANIMATION_OUT":"UNMOUNT"),i.current=t}},[t,l]),Xc(()=>{if(e){let c;const f=e.ownerDocument.defaultView??window,u=m=>{const g=bl(r.current).includes(m.animationName);if(m.target===e&&g&&(l("ANIMATION_END"),!i.current)){const p=e.style.animationFillMode;e.style.animationFillMode="forwards",c=f.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=p)})}},h=m=>{m.target===e&&(s.current=bl(r.current))};return e.addEventListener("animationstart",h),e.addEventListener("animationcancel",u),e.addEventListener("animationend",u),()=>{f.clearTimeout(c),e.removeEventListener("animationstart",h),e.removeEventListener("animationcancel",u),e.removeEventListener("animationend",u)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(o),ref:D.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function bl(t){return(t==null?void 0:t.animationName)||"none"}function vE(t){var r,i;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var od=0;function yE(){D.useEffect(()=>{const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",t[0]??Tg()),document.body.insertAdjacentElement("beforeend",t[1]??Tg()),od++,()=>{od===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),od--}},[])}function Tg(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}var pr=function(){return pr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},pr.apply(this,arguments)};function Ox(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function xE(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var fc="right-scroll-bar-position",hc="width-before-scroll-bar",_E="with-scroll-bars-hidden",SE="--removed-body-scroll-bar-size";function ld(t,e){return typeof t=="function"?t(e):t&&(t.current=e),t}function wE(t,e){var n=D.useState(function(){return{value:t,callback:e,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=e,n.facade}var bE=typeof window<"u"?D.useLayoutEffect:D.useEffect,Ag=new WeakMap;function ME(t,e){var n=wE(e||null,function(r){return t.forEach(function(i){return ld(i,r)})});return bE(function(){var r=Ag.get(n);if(r){var i=new Set(r),s=new Set(t),a=n.current;i.forEach(function(o){s.has(o)||ld(o,null)}),s.forEach(function(o){i.has(o)||ld(o,a)})}Ag.set(n,t)},[t]),n}function EE(t){return t}function TE(t,e){e===void 0&&(e=EE);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:t},useMedium:function(s){var a=e(s,r);return n.push(a),function(){n=n.filter(function(o){return o!==a})}},assignSyncMedium:function(s){for(r=!0;n.length;){var a=n;n=[],a.forEach(s)}n={push:function(o){return s(o)},filter:function(){return n}}},assignMedium:function(s){r=!0;var a=[];if(n.length){var o=n;n=[],o.forEach(s),a=n}var l=function(){var f=a;a=[],f.forEach(s)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(f){a.push(f),c()},filter:function(f){return a=a.filter(f),n}}}};return i}function AE(t){t===void 0&&(t={});var e=TE(null);return e.options=pr({async:!0,ssr:!1},t),e}var Bx=function(t){var e=t.sideCar,n=Ox(t,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return D.createElement(r,pr({},n))};Bx.isSideCarExport=!0;function CE(t,e){return t.useMedium(e),Bx}var zx=AE(),cd=function(){},xu=D.forwardRef(function(t,e){var n=D.useRef(null),r=D.useState({onScrollCapture:cd,onWheelCapture:cd,onTouchMoveCapture:cd}),i=r[0],s=r[1],a=t.forwardProps,o=t.children,l=t.className,c=t.removeScrollBar,f=t.enabled,u=t.shards,h=t.sideCar,m=t.noIsolation,x=t.inert,g=t.allowPinchZoom,p=t.as,d=p===void 0?"div":p,v=t.gapMode,_=Ox(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),w=h,A=ME([n,e]),C=pr(pr({},_),i);return D.createElement(D.Fragment,null,f&&D.createElement(w,{sideCar:zx,removeScrollBar:c,shards:u,noIsolation:m,inert:x,setCallbacks:s,allowPinchZoom:!!g,lockRef:n,gapMode:v}),a?D.cloneElement(D.Children.only(o),pr(pr({},C),{ref:A})):D.createElement(d,pr({},C,{className:l,ref:A}),o))});xu.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};xu.classNames={fullWidth:hc,zeroRight:fc};var Cg,RE=function(){if(Cg)return Cg;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function PE(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=RE();return e&&t.setAttribute("nonce",e),t}function DE(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function NE(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var IE=function(){var t=0,e=null;return{add:function(n){t==0&&(e=PE())&&(DE(e,n),NE(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},kE=function(){var t=IE();return function(e,n){D.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},Hx=function(){var t=kE(),e=function(n){var r=n.styles,i=n.dynamic;return t(r,i),null};return e},LE={left:0,top:0,right:0,gap:0},ud=function(t){return parseInt(t||"",10)||0},UE=function(t){var e=window.getComputedStyle(document.body),n=e[t==="padding"?"paddingLeft":"marginLeft"],r=e[t==="padding"?"paddingTop":"marginTop"],i=e[t==="padding"?"paddingRight":"marginRight"];return[ud(n),ud(r),ud(i)]},FE=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return LE;var e=UE(t),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-n+e[2]-e[0])}},OE=Hx(),aa="data-scroll-locked",BE=function(t,e,n,r){var i=t.left,s=t.top,a=t.right,o=t.gap;return n===void 0&&(n="margin"),`
  .`.concat(_E,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body[`).concat(aa,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(fc,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(hc,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(fc," .").concat(fc,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(hc," .").concat(hc,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(aa,`] {
    `).concat(SE,": ").concat(o,`px;
  }
`)},Rg=function(){var t=parseInt(document.body.getAttribute(aa)||"0",10);return isFinite(t)?t:0},zE=function(){D.useEffect(function(){return document.body.setAttribute(aa,(Rg()+1).toString()),function(){var t=Rg()-1;t<=0?document.body.removeAttribute(aa):document.body.setAttribute(aa,t.toString())}},[])},HE=function(t){var e=t.noRelative,n=t.noImportant,r=t.gapMode,i=r===void 0?"margin":r;zE();var s=D.useMemo(function(){return FE(i)},[i]);return D.createElement(OE,{styles:BE(s,!e,i,n?"":"!important")})},jf=!1;if(typeof window<"u")try{var Ml=Object.defineProperty({},"passive",{get:function(){return jf=!0,!0}});window.addEventListener("test",Ml,Ml),window.removeEventListener("test",Ml,Ml)}catch{jf=!1}var ws=jf?{passive:!1}:!1,VE=function(t){return t.tagName==="TEXTAREA"},Vx=function(t,e){if(!(t instanceof Element))return!1;var n=window.getComputedStyle(t);return n[e]!=="hidden"&&!(n.overflowY===n.overflowX&&!VE(t)&&n[e]==="visible")},GE=function(t){return Vx(t,"overflowY")},WE=function(t){return Vx(t,"overflowX")},Pg=function(t,e){var n=e.ownerDocument,r=e;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=Gx(t,r);if(i){var s=Wx(t,r),a=s[1],o=s[2];if(a>o)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},jE=function(t){var e=t.scrollTop,n=t.scrollHeight,r=t.clientHeight;return[e,n,r]},XE=function(t){var e=t.scrollLeft,n=t.scrollWidth,r=t.clientWidth;return[e,n,r]},Gx=function(t,e){return t==="v"?GE(e):WE(e)},Wx=function(t,e){return t==="v"?jE(e):XE(e)},$E=function(t,e){return t==="h"&&e==="rtl"?-1:1},qE=function(t,e,n,r,i){var s=$E(t,window.getComputedStyle(e).direction),a=s*r,o=n.target,l=e.contains(o),c=!1,f=a>0,u=0,h=0;do{var m=Wx(t,o),x=m[0],g=m[1],p=m[2],d=g-p-s*x;(x||d)&&Gx(t,o)&&(u+=d,h+=x),o instanceof ShadowRoot?o=o.host:o=o.parentNode}while(!l&&o!==document.body||l&&(e.contains(o)||e===o));return(f&&(i&&Math.abs(u)<1||!i&&a>u)||!f&&(i&&Math.abs(h)<1||!i&&-a>h))&&(c=!0),c},El=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},Dg=function(t){return[t.deltaX,t.deltaY]},Ng=function(t){return t&&"current"in t?t.current:t},YE=function(t,e){return t[0]===e[0]&&t[1]===e[1]},KE=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},QE=0,bs=[];function ZE(t){var e=D.useRef([]),n=D.useRef([0,0]),r=D.useRef(),i=D.useState(QE++)[0],s=D.useState(Hx)[0],a=D.useRef(t);D.useEffect(function(){a.current=t},[t]),D.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(i));var g=xE([t.lockRef.current],(t.shards||[]).map(Ng),!0).filter(Boolean);return g.forEach(function(p){return p.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),g.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(i))})}}},[t.inert,t.lockRef.current,t.shards]);var o=D.useCallback(function(g,p){if("touches"in g&&g.touches.length===2||g.type==="wheel"&&g.ctrlKey)return!a.current.allowPinchZoom;var d=El(g),v=n.current,_="deltaX"in g?g.deltaX:v[0]-d[0],w="deltaY"in g?g.deltaY:v[1]-d[1],A,C=g.target,T=Math.abs(_)>Math.abs(w)?"h":"v";if("touches"in g&&T==="h"&&C.type==="range")return!1;var P=Pg(T,C);if(!P)return!0;if(P?A=T:(A=T==="v"?"h":"v",P=Pg(T,C)),!P)return!1;if(!r.current&&"changedTouches"in g&&(_||w)&&(r.current=A),!A)return!0;var M=r.current||A;return qE(M,p,g,M==="h"?_:w,!0)},[]),l=D.useCallback(function(g){var p=g;if(!(!bs.length||bs[bs.length-1]!==s)){var d="deltaY"in p?Dg(p):El(p),v=e.current.filter(function(A){return A.name===p.type&&(A.target===p.target||p.target===A.shadowParent)&&YE(A.delta,d)})[0];if(v&&v.should){p.cancelable&&p.preventDefault();return}if(!v){var _=(a.current.shards||[]).map(Ng).filter(Boolean).filter(function(A){return A.contains(p.target)}),w=_.length>0?o(p,_[0]):!a.current.noIsolation;w&&p.cancelable&&p.preventDefault()}}},[]),c=D.useCallback(function(g,p,d,v){var _={name:g,delta:p,target:d,should:v,shadowParent:JE(d)};e.current.push(_),setTimeout(function(){e.current=e.current.filter(function(w){return w!==_})},1)},[]),f=D.useCallback(function(g){n.current=El(g),r.current=void 0},[]),u=D.useCallback(function(g){c(g.type,Dg(g),g.target,o(g,t.lockRef.current))},[]),h=D.useCallback(function(g){c(g.type,El(g),g.target,o(g,t.lockRef.current))},[]);D.useEffect(function(){return bs.push(s),t.setCallbacks({onScrollCapture:u,onWheelCapture:u,onTouchMoveCapture:h}),document.addEventListener("wheel",l,ws),document.addEventListener("touchmove",l,ws),document.addEventListener("touchstart",f,ws),function(){bs=bs.filter(function(g){return g!==s}),document.removeEventListener("wheel",l,ws),document.removeEventListener("touchmove",l,ws),document.removeEventListener("touchstart",f,ws)}},[]);var m=t.removeScrollBar,x=t.inert;return D.createElement(D.Fragment,null,x?D.createElement(s,{styles:KE(i)}):null,m?D.createElement(HE,{gapMode:t.gapMode}):null)}function JE(t){for(var e=null;t!==null;)t instanceof ShadowRoot&&(e=t.host,t=t.host),t=t.parentNode;return e}const e1=CE(zx,ZE);var jx=D.forwardRef(function(t,e){return D.createElement(xu,pr({},t,{ref:e,sideCar:e1}))});jx.classNames=xu.classNames;const t1=jx;var n1=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},Ms=new WeakMap,Tl=new WeakMap,Al={},dd=0,Xx=function(t){return t&&(t.host||Xx(t.parentNode))},r1=function(t,e){return e.map(function(n){if(t.contains(n))return n;var r=Xx(n);return r&&t.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return!!n})},i1=function(t,e,n,r){var i=r1(e,Array.isArray(t)?t:[t]);Al[n]||(Al[n]=new WeakMap);var s=Al[n],a=[],o=new Set,l=new Set(i),c=function(u){!u||o.has(u)||(o.add(u),c(u.parentNode))};i.forEach(c);var f=function(u){!u||l.has(u)||Array.prototype.forEach.call(u.children,function(h){if(o.has(h))f(h);else try{var m=h.getAttribute(r),x=m!==null&&m!=="false",g=(Ms.get(h)||0)+1,p=(s.get(h)||0)+1;Ms.set(h,g),s.set(h,p),a.push(h),g===1&&x&&Tl.set(h,!0),p===1&&h.setAttribute(n,"true"),x||h.setAttribute(r,"true")}catch(d){console.error("aria-hidden: cannot operate on ",h,d)}})};return f(e),o.clear(),dd++,function(){a.forEach(function(u){var h=Ms.get(u)-1,m=s.get(u)-1;Ms.set(u,h),s.set(u,m),h||(Tl.has(u)||u.removeAttribute(r),Tl.delete(u)),m||u.removeAttribute(n)}),dd--,dd||(Ms=new WeakMap,Ms=new WeakMap,Tl=new WeakMap,Al={})}},s1=function(t,e,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),i=e||n1(t);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),i1(r,i,n,"aria-hidden")):function(){return null}},Up="Dialog",[$x,b3]=HM(Up),[a1,ir]=$x(Up),qx=t=>{const{__scopeDialog:e,children:n,open:r,defaultOpen:i,onOpenChange:s,modal:a=!0}=t,o=D.useRef(null),l=D.useRef(null),[c=!1,f]=jM({prop:r,defaultProp:i,onChange:s});return y.jsx(a1,{scope:e,triggerRef:o,contentRef:l,contentId:id(),titleId:id(),descriptionId:id(),open:c,onOpenChange:f,onOpenToggle:D.useCallback(()=>f(u=>!u),[f]),modal:a,children:n})};qx.displayName=Up;var Yx="DialogTrigger",Kx=D.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=ir(Yx,n),s=xs(e,i.triggerRef);return y.jsx(Wr.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":Bp(i.open),...r,ref:s,onClick:Mi(t.onClick,i.onOpenToggle)})});Kx.displayName=Yx;var Fp="DialogPortal",[o1,Qx]=$x(Fp,{forceMount:void 0}),Zx=t=>{const{__scopeDialog:e,forceMount:n,children:r,container:i}=t,s=ir(Fp,e);return y.jsx(o1,{scope:e,forceMount:n,children:D.Children.map(r,a=>y.jsx(yu,{present:n||s.open,children:y.jsx(Fx,{asChild:!0,container:i,children:a})}))})};Zx.displayName=Fp;var $c="DialogOverlay",Jx=D.forwardRef((t,e)=>{const n=Qx($c,t.__scopeDialog),{forceMount:r=n.forceMount,...i}=t,s=ir($c,t.__scopeDialog);return s.modal?y.jsx(yu,{present:r||s.open,children:y.jsx(l1,{...i,ref:e})}):null});Jx.displayName=$c;var l1=D.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=ir($c,n);return y.jsx(t1,{as:vu,allowPinchZoom:!0,shards:[i.contentRef],children:y.jsx(Wr.div,{"data-state":Bp(i.open),...r,ref:e,style:{pointerEvents:"auto",...r.style}})})}),hs="DialogContent",e_=D.forwardRef((t,e)=>{const n=Qx(hs,t.__scopeDialog),{forceMount:r=n.forceMount,...i}=t,s=ir(hs,t.__scopeDialog);return y.jsx(yu,{present:r||s.open,children:s.modal?y.jsx(c1,{...i,ref:e}):y.jsx(u1,{...i,ref:e})})});e_.displayName=hs;var c1=D.forwardRef((t,e)=>{const n=ir(hs,t.__scopeDialog),r=D.useRef(null),i=xs(e,n.contentRef,r);return D.useEffect(()=>{const s=r.current;if(s)return s1(s)},[]),y.jsx(t_,{...t,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Mi(t.onCloseAutoFocus,s=>{var a;s.preventDefault(),(a=n.triggerRef.current)==null||a.focus()}),onPointerDownOutside:Mi(t.onPointerDownOutside,s=>{const a=s.detail.originalEvent,o=a.button===0&&a.ctrlKey===!0;(a.button===2||o)&&s.preventDefault()}),onFocusOutside:Mi(t.onFocusOutside,s=>s.preventDefault())})}),u1=D.forwardRef((t,e)=>{const n=ir(hs,t.__scopeDialog),r=D.useRef(!1),i=D.useRef(!1);return y.jsx(t_,{...t,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var a,o;(a=t.onCloseAutoFocus)==null||a.call(t,s),s.defaultPrevented||(r.current||(o=n.triggerRef.current)==null||o.focus(),s.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:s=>{var l,c;(l=t.onInteractOutside)==null||l.call(t,s),s.defaultPrevented||(r.current=!0,s.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const a=s.target;((c=n.triggerRef.current)==null?void 0:c.contains(a))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&i.current&&s.preventDefault()}})}),t_=D.forwardRef((t,e)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:s,...a}=t,o=ir(hs,n),l=D.useRef(null),c=xs(e,l);return yE(),y.jsxs(y.Fragment,{children:[y.jsx(Lx,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:s,children:y.jsx(Ix,{role:"dialog",id:o.contentId,"aria-describedby":o.descriptionId,"aria-labelledby":o.titleId,"data-state":Bp(o.open),...a,ref:c,onDismiss:()=>o.onOpenChange(!1)})}),y.jsxs(y.Fragment,{children:[y.jsx(d1,{titleId:o.titleId}),y.jsx(h1,{contentRef:l,descriptionId:o.descriptionId})]})]})}),Op="DialogTitle",n_=D.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=ir(Op,n);return y.jsx(Wr.h2,{id:i.titleId,...r,ref:e})});n_.displayName=Op;var r_="DialogDescription",i_=D.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=ir(r_,n);return y.jsx(Wr.p,{id:i.descriptionId,...r,ref:e})});i_.displayName=r_;var s_="DialogClose",a_=D.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=ir(s_,n);return y.jsx(Wr.button,{type:"button",...r,ref:e,onClick:Mi(t.onClick,()=>i.onOpenChange(!1))})});a_.displayName=s_;function Bp(t){return t?"open":"closed"}var o_="DialogTitleWarning",[M3,l_]=zM(o_,{contentName:hs,titleName:Op,docsSlug:"dialog"}),d1=({titleId:t})=>{const e=l_(o_),n=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return D.useEffect(()=>{t&&(document.getElementById(t)||console.error(n))},[n,t]),null},f1="DialogDescriptionWarning",h1=({contentRef:t,descriptionId:e})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${l_(f1).contentName}}.`;return D.useEffect(()=>{var s;const i=(s=t.current)==null?void 0:s.getAttribute("aria-describedby");e&&i&&(document.getElementById(e)||console.warn(r))},[r,t,e]),null},p1=qx,m1=Kx,g1=Zx,c_=Jx,u_=e_,d_=n_,f_=i_,v1=a_;/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h_=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var x1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=D.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...o},l)=>D.createElement("svg",{ref:l,...x1,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:h_("lucide",i),...o},[...a.map(([c,f])=>D.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=(t,e)=>{const n=D.forwardRef(({className:r,...i},s)=>D.createElement(_1,{ref:s,iconNode:e,className:h_(`lucide-${y1(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=sr("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=sr("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=sr("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=sr("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=sr("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=sr("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=sr("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=sr("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=sr("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=sr("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=sr("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function p_(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=p_(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function C1(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=p_(t))&&(r&&(r+=" "),r+=e);return r}const zp="-",R1=t=>{const e=D1(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:a=>{const o=a.split(zp);return o[0]===""&&o.length!==1&&o.shift(),m_(o,e)||P1(a)},getConflictingClassGroupIds:(a,o)=>{const l=n[a]||[];return o&&r[a]?[...l,...r[a]]:l}}},m_=(t,e)=>{var a;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),i=r?m_(t.slice(1),r):void 0;if(i)return i;if(e.validators.length===0)return;const s=t.join(zp);return(a=e.validators.find(({validator:o})=>o(s)))==null?void 0:a.classGroupId},Ig=/^\[(.+)\]$/,P1=t=>{if(Ig.test(t)){const e=Ig.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},D1=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return I1(Object.entries(t.classGroups),n).forEach(([s,a])=>{Xf(a,r,s,e)}),r},Xf=(t,e,n,r)=>{t.forEach(i=>{if(typeof i=="string"){const s=i===""?e:kg(e,i);s.classGroupId=n;return}if(typeof i=="function"){if(N1(i)){Xf(i(r),e,n,r);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([s,a])=>{Xf(a,kg(e,s),n,r)})})},kg=(t,e)=>{let n=t;return e.split(zp).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},N1=t=>t.isThemeGetter,I1=(t,e)=>e?t.map(([n,r])=>{const i=r.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([a,o])=>[e+a,o])):s);return[n,i]}):t,k1=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const i=(s,a)=>{n.set(s,a),e++,e>t&&(e=0,r=n,n=new Map)};return{get(s){let a=n.get(s);if(a!==void 0)return a;if((a=r.get(s))!==void 0)return i(s,a),a},set(s,a){n.has(s)?n.set(s,a):i(s,a)}}},g_="!",L1=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,i=e[0],s=e.length,a=o=>{const l=[];let c=0,f=0,u;for(let p=0;p<o.length;p++){let d=o[p];if(c===0){if(d===i&&(r||o.slice(p,p+s)===e)){l.push(o.slice(f,p)),f=p+s;continue}if(d==="/"){u=p;continue}}d==="["?c++:d==="]"&&c--}const h=l.length===0?o:o.substring(f),m=h.startsWith(g_),x=m?h.substring(1):h,g=u&&u>f?u-f:void 0;return{modifiers:l,hasImportantModifier:m,baseClassName:x,maybePostfixModifierPosition:g}};return n?o=>n({className:o,parseClassName:a}):a},U1=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},F1=t=>({cache:k1(t.cacheSize),parseClassName:L1(t),...R1(t)}),O1=/\s+/,B1=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=e,s=[],a=t.trim().split(O1);let o="";for(let l=a.length-1;l>=0;l-=1){const c=a[l],{modifiers:f,hasImportantModifier:u,baseClassName:h,maybePostfixModifierPosition:m}=n(c);let x=!!m,g=r(x?h.substring(0,m):h);if(!g){if(!x){o=c+(o.length>0?" "+o:o);continue}if(g=r(h),!g){o=c+(o.length>0?" "+o:o);continue}x=!1}const p=U1(f).join(":"),d=u?p+g_:p,v=d+g;if(s.includes(v))continue;s.push(v);const _=i(g,x);for(let w=0;w<_.length;++w){const A=_[w];s.push(d+A)}o=c+(o.length>0?" "+o:o)}return o};function z1(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=v_(e))&&(r&&(r+=" "),r+=n);return r}const v_=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=v_(t[r]))&&(n&&(n+=" "),n+=e);return n};function H1(t,...e){let n,r,i,s=a;function a(l){const c=e.reduce((f,u)=>u(f),t());return n=F1(c),r=n.cache.get,i=n.cache.set,s=o,o(l)}function o(l){const c=r(l);if(c)return c;const f=B1(l,n);return i(l,f),f}return function(){return s(z1.apply(null,arguments))}}const dt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},y_=/^\[(?:([a-z-]+):)?(.+)\]$/i,V1=/^\d+\/\d+$/,G1=new Set(["px","full","screen"]),W1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,j1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,X1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,$1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,q1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,xr=t=>oa(t)||G1.has(t)||V1.test(t),$r=t=>La(t,"length",nT),oa=t=>!!t&&!Number.isNaN(Number(t)),md=t=>La(t,"number",oa),Ya=t=>!!t&&Number.isInteger(Number(t)),Y1=t=>t.endsWith("%")&&oa(t.slice(0,-1)),Le=t=>y_.test(t),qr=t=>W1.test(t),K1=new Set(["length","size","percentage"]),Q1=t=>La(t,K1,x_),Z1=t=>La(t,"position",x_),J1=new Set(["image","url"]),eT=t=>La(t,J1,iT),tT=t=>La(t,"",rT),Ka=()=>!0,La=(t,e,n)=>{const r=y_.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},nT=t=>j1.test(t)&&!X1.test(t),x_=()=>!1,rT=t=>$1.test(t),iT=t=>q1.test(t),sT=()=>{const t=dt("colors"),e=dt("spacing"),n=dt("blur"),r=dt("brightness"),i=dt("borderColor"),s=dt("borderRadius"),a=dt("borderSpacing"),o=dt("borderWidth"),l=dt("contrast"),c=dt("grayscale"),f=dt("hueRotate"),u=dt("invert"),h=dt("gap"),m=dt("gradientColorStops"),x=dt("gradientColorStopPositions"),g=dt("inset"),p=dt("margin"),d=dt("opacity"),v=dt("padding"),_=dt("saturate"),w=dt("scale"),A=dt("sepia"),C=dt("skew"),T=dt("space"),P=dt("translate"),M=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto",Le,e],O=()=>[Le,e],B=()=>["",xr,$r],q=()=>["auto",oa,Le],Q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],W=()=>["solid","dashed","dotted","double","none"],Z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],k=()=>["start","end","center","between","around","evenly","stretch"],X=()=>["","0",Le],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ae=()=>[oa,Le];return{cacheSize:500,separator:":",theme:{colors:[Ka],spacing:[xr,$r],blur:["none","",qr,Le],brightness:ae(),borderColor:[t],borderRadius:["none","","full",qr,Le],borderSpacing:O(),borderWidth:B(),contrast:ae(),grayscale:X(),hueRotate:ae(),invert:X(),gap:O(),gradientColorStops:[t],gradientColorStopPositions:[Y1,$r],inset:N(),margin:N(),opacity:ae(),padding:O(),saturate:ae(),scale:ae(),sepia:X(),skew:ae(),space:O(),translate:O()},classGroups:{aspect:[{aspect:["auto","square","video",Le]}],container:["container"],columns:[{columns:[qr]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Q(),Le]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ya,Le]}],basis:[{basis:N()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Le]}],grow:[{grow:X()}],shrink:[{shrink:X()}],order:[{order:["first","last","none",Ya,Le]}],"grid-cols":[{"grid-cols":[Ka]}],"col-start-end":[{col:["auto",{span:["full",Ya,Le]},Le]}],"col-start":[{"col-start":q()}],"col-end":[{"col-end":q()}],"grid-rows":[{"grid-rows":[Ka]}],"row-start-end":[{row:["auto",{span:[Ya,Le]},Le]}],"row-start":[{"row-start":q()}],"row-end":[{"row-end":q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Le]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Le]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...k()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...k(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...k(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[T]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[T]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Le,e]}],"min-w":[{"min-w":[Le,e,"min","max","fit"]}],"max-w":[{"max-w":[Le,e,"none","full","min","max","fit","prose",{screen:[qr]},qr]}],h:[{h:[Le,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Le,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Le,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Le,e,"auto","min","max","fit"]}],"font-size":[{text:["base",qr,$r]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",md]}],"font-family":[{font:[Ka]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Le]}],"line-clamp":[{"line-clamp":["none",oa,md]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",xr,Le]}],"list-image":[{"list-image":["none",Le]}],"list-style-type":[{list:["none","disc","decimal",Le]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[d]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[d]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",xr,$r]}],"underline-offset":[{"underline-offset":["auto",xr,Le]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Le]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Le]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[d]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Q(),Z1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Q1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},eT]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[o]}],"border-w-x":[{"border-x":[o]}],"border-w-y":[{"border-y":[o]}],"border-w-s":[{"border-s":[o]}],"border-w-e":[{"border-e":[o]}],"border-w-t":[{"border-t":[o]}],"border-w-r":[{"border-r":[o]}],"border-w-b":[{"border-b":[o]}],"border-w-l":[{"border-l":[o]}],"border-opacity":[{"border-opacity":[d]}],"border-style":[{border:[...W(),"hidden"]}],"divide-x":[{"divide-x":[o]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[o]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[d]}],"divide-style":[{divide:W()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...W()]}],"outline-offset":[{"outline-offset":[xr,Le]}],"outline-w":[{outline:[xr,$r]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[d]}],"ring-offset-w":[{"ring-offset":[xr,$r]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",qr,tT]}],"shadow-color":[{shadow:[Ka]}],opacity:[{opacity:[d]}],"mix-blend":[{"mix-blend":[...Z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Z()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",qr,Le]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[u]}],saturate:[{saturate:[_]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[d]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Le]}],duration:[{duration:ae()}],ease:[{ease:["linear","in","out","in-out",Le]}],delay:[{delay:ae()}],animate:[{animate:["none","spin","ping","pulse","bounce",Le]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[Ya,Le]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Le]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Le]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Le]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[xr,$r,md]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},aT=H1(sT);function Ua(...t){return aT(C1(t))}const oT=p1,lT=m1,cT=g1,__=D.forwardRef(({className:t,...e},n)=>y.jsx(c_,{ref:n,className:Ua("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...e}));__.displayName=c_.displayName;const S_=D.forwardRef(({className:t,children:e,...n},r)=>y.jsxs(cT,{children:[y.jsx(__,{}),y.jsxs(u_,{ref:r,className:Ua("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...n,children:[e,y.jsxs(v1,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[y.jsx(_u,{className:"h-4 w-4"}),y.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));S_.displayName=u_.displayName;const w_=({className:t,...e})=>y.jsx("div",{className:Ua("flex flex-col space-y-1.5 text-center sm:text-left",t),...e});w_.displayName="DialogHeader";const b_=D.forwardRef(({className:t,...e},n)=>y.jsx(d_,{ref:n,className:Ua("text-lg font-semibold leading-none tracking-tight",t),...e}));b_.displayName=d_.displayName;const M_=D.forwardRef(({className:t,...e},n)=>y.jsx(f_,{ref:n,className:Ua("text-sm text-muted-foreground",t),...e}));M_.displayName=f_.displayName;function ar(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function ps(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const E_=6048e5,uT=864e5;let dT={};function Su(){return dT}function Fo(t,e){var o,l,c,f;const n=Su(),r=(e==null?void 0:e.weekStartsOn)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((f=(c=n.locale)==null?void 0:c.options)==null?void 0:f.weekStartsOn)??0,i=ar(t),s=i.getDay(),a=(s<r?7:0)+s-r;return i.setDate(i.getDate()-a),i.setHours(0,0,0,0),i}function qc(t){return Fo(t,{weekStartsOn:1})}function T_(t){const e=ar(t),n=e.getFullYear(),r=ps(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=qc(r),s=ps(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const a=qc(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=a.getTime()?n:n-1}function Lg(t){const e=ar(t);return e.setHours(0,0,0,0),e}function Ug(t){const e=ar(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function fT(t,e){const n=Lg(t),r=Lg(e),i=+n-Ug(n),s=+r-Ug(r);return Math.round((i-s)/uT)}function hT(t){const e=T_(t),n=ps(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),qc(n)}function pT(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function mT(t){if(!pT(t)&&typeof t!="number")return!1;const e=ar(t);return!isNaN(Number(e))}function gT(t){const e=ar(t),n=ps(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const vT={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},yT=(t,e,n)=>{let r;const i=vT[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function gd(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const xT={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},_T={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ST={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},wT={date:gd({formats:xT,defaultWidth:"full"}),time:gd({formats:_T,defaultWidth:"full"}),dateTime:gd({formats:ST,defaultWidth:"full"})},bT={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},MT=(t,e,n,r)=>bT[t];function Qa(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,o=n!=null&&n.width?String(n.width):a;i=t.formattingValues[o]||t.formattingValues[a]}else{const a=t.defaultWidth,o=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[o]||t.values[a]}const s=t.argumentCallback?t.argumentCallback(e):e;return i[s]}}const ET={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},TT={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},AT={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},CT={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},RT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},PT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},DT=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},NT={ordinalNumber:DT,era:Qa({values:ET,defaultWidth:"wide"}),quarter:Qa({values:TT,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Qa({values:AT,defaultWidth:"wide"}),day:Qa({values:CT,defaultWidth:"wide"}),dayPeriod:Qa({values:RT,defaultWidth:"wide",formattingValues:PT,defaultFormattingWidth:"wide"})};function Za(t){return(e,n={})=>{const r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;const a=s[0],o=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(o)?kT(o,u=>u.test(a)):IT(o,u=>u.test(a));let c;c=t.valueCallback?t.valueCallback(l):l,c=n.valueCallback?n.valueCallback(c):c;const f=e.slice(a.length);return{value:c,rest:f}}}function IT(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function kT(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function LT(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const i=r[0],s=e.match(t.parsePattern);if(!s)return null;let a=t.valueCallback?t.valueCallback(s[0]):s[0];a=n.valueCallback?n.valueCallback(a):a;const o=e.slice(i.length);return{value:a,rest:o}}}const UT=/^(\d+)(th|st|nd|rd)?/i,FT=/\d+/i,OT={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},BT={any:[/^b/i,/^(a|c)/i]},zT={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},HT={any:[/1/i,/2/i,/3/i,/4/i]},VT={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},GT={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},WT={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},jT={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},XT={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},$T={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},qT={ordinalNumber:LT({matchPattern:UT,parsePattern:FT,valueCallback:t=>parseInt(t,10)}),era:Za({matchPatterns:OT,defaultMatchWidth:"wide",parsePatterns:BT,defaultParseWidth:"any"}),quarter:Za({matchPatterns:zT,defaultMatchWidth:"wide",parsePatterns:HT,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Za({matchPatterns:VT,defaultMatchWidth:"wide",parsePatterns:GT,defaultParseWidth:"any"}),day:Za({matchPatterns:WT,defaultMatchWidth:"wide",parsePatterns:jT,defaultParseWidth:"any"}),dayPeriod:Za({matchPatterns:XT,defaultMatchWidth:"any",parsePatterns:$T,defaultParseWidth:"any"})},YT={code:"en-US",formatDistance:yT,formatLong:wT,formatRelative:MT,localize:NT,match:qT,options:{weekStartsOn:0,firstWeekContainsDate:1}};function KT(t){const e=ar(t);return fT(e,gT(e))+1}function QT(t){const e=ar(t),n=+qc(e)-+hT(e);return Math.round(n/E_)+1}function A_(t,e){var f,u,h,m;const n=ar(t),r=n.getFullYear(),i=Su(),s=(e==null?void 0:e.firstWeekContainsDate)??((u=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:u.firstWeekContainsDate)??i.firstWeekContainsDate??((m=(h=i.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,a=ps(t,0);a.setFullYear(r+1,0,s),a.setHours(0,0,0,0);const o=Fo(a,e),l=ps(t,0);l.setFullYear(r,0,s),l.setHours(0,0,0,0);const c=Fo(l,e);return n.getTime()>=o.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function ZT(t,e){var o,l,c,f;const n=Su(),r=(e==null?void 0:e.firstWeekContainsDate)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(c=n.locale)==null?void 0:c.options)==null?void 0:f.firstWeekContainsDate)??1,i=A_(t,e),s=ps(t,0);return s.setFullYear(i,0,r),s.setHours(0,0,0,0),Fo(s,e)}function JT(t,e){const n=ar(t),r=+Fo(n,e)-+ZT(n,e);return Math.round(r/E_)+1}function rt(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const Yr={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return rt(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):rt(n+1,2)},d(t,e){return rt(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return rt(t.getHours()%12||12,e.length)},H(t,e){return rt(t.getHours(),e.length)},m(t,e){return rt(t.getMinutes(),e.length)},s(t,e){return rt(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return rt(i,e.length)}},Es={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Fg={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return Yr.y(t,e)},Y:function(t,e,n,r){const i=A_(t,r),s=i>0?i:1-i;if(e==="YY"){const a=s%100;return rt(a,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):rt(s,e.length)},R:function(t,e){const n=T_(t);return rt(n,e.length)},u:function(t,e){const n=t.getFullYear();return rt(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return rt(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return rt(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return Yr.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return rt(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const i=JT(t,r);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):rt(i,e.length)},I:function(t,e,n){const r=QT(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):rt(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Yr.d(t,e)},D:function(t,e,n){const r=KT(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):rt(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return rt(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return rt(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return rt(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let i;switch(r===12?i=Es.noon:r===0?i=Es.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let i;switch(r>=17?i=Es.evening:r>=12?i=Es.afternoon:r>=4?i=Es.morning:i=Es.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Yr.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Yr.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):rt(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):rt(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Yr.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Yr.s(t,e)},S:function(t,e){return Yr.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return Bg(r);case"XXXX":case"XX":return Wi(r);case"XXXXX":case"XXX":default:return Wi(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return Bg(r);case"xxxx":case"xx":return Wi(r);case"xxxxx":case"xxx":default:return Wi(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Og(r,":");case"OOOO":default:return"GMT"+Wi(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Og(r,":");case"zzzz":default:return"GMT"+Wi(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return rt(r,e.length)},T:function(t,e,n){const r=t.getTime();return rt(r,e.length)}};function Og(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=Math.trunc(r/60),s=r%60;return s===0?n+String(i):n+String(i)+e+rt(s,2)}function Bg(t,e){return t%60===0?(t>0?"-":"+")+rt(Math.abs(t)/60,2):Wi(t,e)}function Wi(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=rt(Math.trunc(r/60),2),s=rt(r%60,2);return n+i+e+s}const zg=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},C_=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},eA=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return zg(t,e);let s;switch(r){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",zg(r,e)).replace("{{time}}",C_(i,e))},tA={p:C_,P:eA},nA=/^D+$/,rA=/^Y+$/,iA=["D","DD","YY","YYYY"];function sA(t){return nA.test(t)}function aA(t){return rA.test(t)}function oA(t,e,n){const r=lA(t,e,n);if(console.warn(r),iA.includes(t))throw new RangeError(r)}function lA(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const cA=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,uA=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,dA=/^'([^]*?)'?$/,fA=/''/g,hA=/[a-zA-Z]/;function R_(t,e,n){var f,u,h,m,x,g,p,d;const r=Su(),i=(n==null?void 0:n.locale)??r.locale??YT,s=(n==null?void 0:n.firstWeekContainsDate)??((u=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:u.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(h=r.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,a=(n==null?void 0:n.weekStartsOn)??((g=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:g.weekStartsOn)??r.weekStartsOn??((d=(p=r.locale)==null?void 0:p.options)==null?void 0:d.weekStartsOn)??0,o=ar(t);if(!mT(o))throw new RangeError("Invalid time value");let l=e.match(uA).map(v=>{const _=v[0];if(_==="p"||_==="P"){const w=tA[_];return w(v,i.formatLong)}return v}).join("").match(cA).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const _=v[0];if(_==="'")return{isToken:!1,value:pA(v)};if(Fg[_])return{isToken:!0,value:v};if(_.match(hA))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");return{isToken:!1,value:v}});i.localize.preprocessor&&(l=i.localize.preprocessor(o,l));const c={firstWeekContainsDate:s,weekStartsOn:a,locale:i};return l.map(v=>{if(!v.isToken)return v.value;const _=v.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&aA(_)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&sA(_))&&oA(_,e,String(t));const w=Fg[_[0]];return w(o,_,i.localize,c)}).join("")}function pA(t){const e=t.match(dA);return e?e[1].replace(fA,"'"):t}function zs({children:t,speed:e=.2,className:n=""}){const r=D.useRef(null),[i,s]=D.useState(0),[a,o]=D.useState(!1);return D.useEffect(()=>{const l=()=>{if(!r.current)return;const c=r.current.getBoundingClientRect();if(c.top<window.innerHeight&&c.bottom>0){o(!0);const u=window.innerHeight/2,m=c.top+c.height/2-u;s(m*e)}};return window.addEventListener("scroll",l),l(),()=>{window.removeEventListener("scroll",l)}},[e]),y.jsx("div",{ref:r,className:`transform transition-opacity duration-700 ${a?"opacity-100":"opacity-0"} ${n}`,style:{transform:`translateY(${i}px)`,transition:"transform 0.1s ease-out"},children:t})}function mA({title:t,description:e,tags:n,liveUrl:r,codeUrl:i,image:s,stats:a,hideCode:o,index:l=0}){const[c,f]=D.useState(!1),u=D.useRef(null),[h,m]=D.useState({x:0,y:0}),[x,g]=D.useState({x:0,y:0}),p=v=>{if(!u.current)return;const _=u.current.getBoundingClientRect(),w=v.clientX-_.left-_.width/2,A=v.clientY-_.top-_.height/2;m({x:A/10,y:-w/10}),g({x:w/20,y:A/20})},d=()=>{f(!1),m({x:0,y:0}),g({x:0,y:0})};return D.useEffect(()=>{u.current&&(u.current.classList.add("project-card-enter"),u.current.style.animationDelay=`${l*.1}s`);const v=setTimeout(()=>{u.current&&u.current.classList.remove("project-card-enter")},1e3);return()=>clearTimeout(v)},[l]),y.jsxs("div",{ref:u,onMouseEnter:()=>f(!0),onMouseMove:p,onMouseLeave:d,className:"relative min-h-[24rem] bg-white/90 dark:bg-black/60 rounded-xl shadow-lg transform transition-all duration-200 ease-out hover:shadow-xl hover:scale-[1.02]",style:{transform:`perspective(1000px) rotateX(${h.x}deg) rotateY(${h.y}deg) translate3d(${x.x}px, ${x.y}px, 0)`,transformStyle:"preserve-3d"},children:[y.jsxs("div",{className:"relative h-48 overflow-hidden rounded-t-xl flex items-center justify-center transform transition-transform duration-300",style:{transform:`translateZ(${c?"20px":"0px"})`,transformStyle:"preserve-3d"},children:[s?y.jsxs(y.Fragment,{children:[y.jsx("img",{src:s,alt:t,className:`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${c?"scale-110":"scale-100"}`}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"})]}):y.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600"}),y.jsxs("div",{className:"relative z-10 text-center px-6 w-full flex flex-col items-center",children:[y.jsx("h3",{className:"text-white text-xl font-semibold drop-shadow-lg",children:t}),a&&y.jsxs("div",{className:"mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20",children:[y.jsx("span",{className:"text-white font-bold text-sm",children:a.value}),y.jsx("span",{className:"text-white/80 text-xs",children:a.label})]})]})]}),y.jsxs("div",{className:"p-6 transform transition-transform duration-300",style:{transform:`translateZ(${c?"40px":"0px"})`,transformStyle:"preserve-3d"},children:[y.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:e}),y.jsx("div",{className:"flex flex-wrap gap-2 mb-4 transform transition-transform duration-300",style:{transform:`translateZ(${c?"60px":"0px"})`},children:n.map((v,_)=>y.jsx("span",{className:"px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs rounded-full",children:v},_))}),y.jsxs("div",{className:"flex space-x-3 transform transition-transform duration-300",style:{transform:`translateZ(${c?"60px":"0px"})`},children:[y.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"px-3 py-1 bg-purple-600 dark:bg-purple-500 text-white rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors",children:"View Live"}),!o&&y.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"px-3 py-1 border border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-500 rounded hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors",children:"Source Code"})]})]}),c&&y.jsx("div",{className:"absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"})]})}const gA=[{emoji:"🎾",label:"Tennis",glow:"from-lime-400/30 to-green-500/30"},{emoji:"📚",label:"Reading",glow:"from-orange-400/30 to-amber-500/30"},{emoji:"💻",label:"Coding",glow:"from-purple-400/30 to-indigo-500/30"},{emoji:"💪",label:"Fitness",glow:"from-red-400/30 to-rose-500/30"},{emoji:"🏓",label:"Pickleball",glow:"from-yellow-400/30 to-orange-500/30"},{emoji:"🎮",label:"Gaming",glow:"from-cyan-400/30 to-blue-500/30"}];function vA({src:t,alt:e}){const n=D.useRef(null),[r,i]=D.useState(!1),[s,a]=D.useState(!1),[o,l]=D.useState({rx:0,ry:0,tx:0,ty:0}),[c,f]=D.useState({x:50,y:50}),u=g=>{if(!n.current||s)return;const p=n.current.getBoundingClientRect(),d=g.clientX-p.left,v=g.clientY-p.top,_=p.width/2,w=p.height/2,A=(d-_)/_,C=(v-w)/w;l({rx:-C*12,ry:A*12,tx:A*6,ty:C*6}),f({x:d/p.width*100,y:v/p.height*100})},h=()=>i(!0),m=()=>{i(!1),l({rx:0,ry:0,tx:0,ty:0}),f({x:50,y:50})},x=s?180:0;return y.jsxs("div",{ref:n,className:"relative mx-auto max-w-sm cursor-pointer select-none",style:{perspective:"1500px"},onMouseMove:u,onMouseEnter:h,onMouseLeave:m,onClick:()=>a(g=>!g),children:[y.jsx("div",{className:`absolute -inset-6 rounded-3xl transition-opacity duration-500 ${r?"opacity-100":"opacity-60"}`,style:{background:`radial-gradient(circle at ${c.x}% ${c.y}%, rgba(168, 85, 247, 0.5), rgba(139, 92, 246, 0.2) 40%, transparent 70%)`,filter:"blur(40px)",transition:"background 0.15s ease-out, opacity 0.5s"}}),y.jsxs("div",{className:"relative transition-transform ease-out",style:{transform:s?`rotateY(${x}deg)`:`rotateX(${o.rx}deg) rotateY(${o.ry}deg) translate3d(${o.tx}px, ${o.ty}px, 0)`,transformStyle:"preserve-3d",transitionDuration:s?"700ms":"200ms"},children:[y.jsx("div",{className:"relative rounded-2xl p-[2px] bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 shadow-2xl",style:{backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden"},children:y.jsxs("div",{className:"relative overflow-hidden rounded-2xl bg-black",children:[y.jsx("img",{src:t,alt:e,className:`block w-full h-auto rounded-2xl transition-all duration-500 ${r&&!s?"scale-105 saturate-150":"scale-100 saturate-100"}`,draggable:!1}),y.jsx("div",{className:"absolute inset-0 pointer-events-none transition-opacity duration-300",style:{background:`radial-gradient(circle 200px at ${c.x}% ${c.y}%, rgba(255,255,255,0.25), transparent 60%)`,opacity:r&&!s?1:0,mixBlendMode:"overlay"}}),y.jsx("div",{className:"absolute inset-0 pointer-events-none transition-opacity duration-300",style:{background:`radial-gradient(circle 250px at ${c.x}% ${c.y}%, rgba(168,85,247,0.18), rgba(236,72,153,0.1) 40%, transparent 70%)`,opacity:r&&!s?1:0,mixBlendMode:"screen"}}),y.jsx("div",{className:"absolute inset-0 pointer-events-none transition-opacity duration-300",style:{background:`linear-gradient(${135+(c.x-50)*.5}deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)`,opacity:r&&!s?1:0}}),y.jsxs("div",{className:`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent transition-all duration-500 ${r&&!s?"translate-y-0 opacity-100":"translate-y-4 opacity-0"}`,children:[y.jsx("p",{className:"text-white font-semibold text-lg drop-shadow-lg",children:"Parth Bhodia"}),y.jsx("p",{className:"text-purple-200 text-sm",children:"Click to see my hobbies →"})]})]})}),y.jsx("div",{className:"absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-purple-600 via-pink-500 to-purple-400 shadow-2xl",style:{backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:y.jsxs("div",{className:"relative w-full h-full rounded-2xl bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 p-6 flex flex-col",children:[y.jsx("h3",{className:"text-2xl font-bold mb-1 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text",children:"Off the clock"}),y.jsx("p",{className:"text-purple-200/70 text-xs mb-5",children:"When I'm not building things, I'm…"}),y.jsx("div",{className:"grid grid-cols-3 gap-3 flex-1",children:gA.map(({emoji:g,label:p,glow:d},v)=>y.jsxs("div",{className:`group relative flex flex-col items-center justify-center text-center gap-1.5 p-3 rounded-xl bg-gradient-to-br ${d} border border-white/10 hover:border-purple-400/50 transition-all overflow-hidden`,style:{animation:s?`fadeInUp 0.5s ease-out ${.3+v*.05}s both`:"none"},children:[y.jsx("span",{className:"text-3xl group-hover:scale-125 transition-transform duration-300",children:g}),y.jsx("span",{className:"text-[11px] font-medium text-white/90 leading-tight",children:p})]},v))}),y.jsx("p",{className:"text-center text-purple-300/60 text-xs mt-4",children:"Click to flip back"})]})})]}),y.jsx("style",{children:`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})}const xo="https://parthbhodia.com",P_=`${xo}/og-image.svg`,yA=t=>t?/^https?:\/\//i.test(t)?t:`${xo}${t.startsWith("/")?"":"/"}${t}`:P_;function Hp(t={}){const{title:e="Parth Bhodia - Full Stack Software Developer",description:n="Parth Bhodia is a skilled Full Stack Software Developer specializing in Vue.js, React, Node.js, Python, and AWS.",keywords:r="Parth Bhodia, Software Developer, Full Stack Developer, Vue.js, React, Node.js, Python, AWS",image:i=P_,url:s=typeof window<"u"?window.location.href:xo,type:a="website",article:o}=t,l=o?`${o.publishedTime}|${o.modifiedTime??""}|${o.author??""}|${o.section??""}|${(o.tags??[]).join(",")}|${o.wordCount??""}`:"";D.useEffect(()=>{const c=e.includes("Parth Bhodia")?e:`${e} | Parth Bhodia`,f=yA(i);document.title=c;const u=(p,d,v)=>{let _=document.head.querySelector(`meta[${p}="${d}"]`);_||(_=document.createElement("meta"),_.setAttribute(p,d),document.head.appendChild(_)),_.setAttribute("content",v)},h=(p,d)=>{document.head.querySelectorAll(`meta[${p}="${d}"]`).forEach(v=>v.remove())};u("name","description",n),u("name","keywords",r),u("property","og:title",c),u("property","og:description",n),u("property","og:image",f),u("property","og:url",s),u("property","og:type",a),u("property","og:site_name","Parth Bhodia Portfolio"),u("name","twitter:card","summary_large_image"),u("name","twitter:title",c),u("name","twitter:description",n),u("name","twitter:image",f),o?(u("property","article:published_time",o.publishedTime),o.modifiedTime?u("property","article:modified_time",o.modifiedTime):h("property","article:modified_time"),o.author&&u("property","article:author",o.author),o.section&&u("property","article:section",o.section),document.head.querySelectorAll('meta[property="article:tag"]').forEach(p=>p.remove()),(o.tags??[]).forEach(p=>{const d=document.createElement("meta");d.setAttribute("property","article:tag"),d.setAttribute("content",p),document.head.appendChild(d)})):(["article:published_time","article:modified_time","article:author","article:section"].forEach(p=>h("property",p)),document.head.querySelectorAll('meta[property="article:tag"]').forEach(p=>p.remove()));let m=document.head.querySelector('link[rel="canonical"]');m||(m=document.createElement("link"),m.rel="canonical",document.head.appendChild(m)),m.href=s;const x="seo-blogposting-jsonld",g=document.getElementById(x);if(g&&g.remove(),o){const p={"@context":"https://schema.org","@type":"BlogPosting",headline:e,description:n,image:[f],datePublished:o.publishedTime,dateModified:o.modifiedTime??o.publishedTime,author:{"@type":"Person",name:o.author??"Parth Bhodia",url:xo},publisher:{"@type":"Person",name:"Parth Bhodia",url:xo},mainEntityOfPage:{"@type":"WebPage","@id":s},articleSection:o.section,keywords:(o.tags??[]).join(", "),wordCount:o.wordCount,inLanguage:"en-US"},d=document.createElement("script");d.type="application/ld+json",d.id=x,d.textContent=JSON.stringify(p),document.head.appendChild(d)}},[e,n,r,i,s,a,l])}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vp="175",xA=0,Hg=1,_A=2,D_=1,SA=2,Er=3,Ri=0,hn=1,Rr=2,Ei=0,la=1,Vg=2,Gg=3,Wg=4,wA=5,$i=100,bA=101,MA=102,EA=103,TA=104,AA=200,CA=201,RA=202,PA=203,$f=204,qf=205,DA=206,NA=207,IA=208,kA=209,LA=210,UA=211,FA=212,OA=213,BA=214,Yf=0,Kf=1,Qf=2,Aa=3,Zf=4,Jf=5,eh=6,th=7,N_=0,zA=1,HA=2,Ti=0,VA=1,GA=2,WA=3,jA=4,XA=5,$A=6,qA=7,I_=300,Ca=301,Ra=302,nh=303,rh=304,wu=306,ih=1e3,Zi=1001,sh=1002,nr=1003,YA=1004,Cl=1005,mr=1006,vd=1007,Ji=1008,Hr=1009,k_=1010,L_=1011,Oo=1012,Gp=1013,ms=1014,Nr=1015,Qo=1016,Wp=1017,jp=1018,Bo=1020,U_=35902,F_=1021,O_=1022,Jn=1023,B_=1024,z_=1025,zo=1026,Ho=1027,H_=1028,Xp=1029,V_=1030,$p=1031,qp=1033,pc=33776,mc=33777,gc=33778,vc=33779,ah=35840,oh=35841,lh=35842,ch=35843,uh=36196,dh=37492,fh=37496,hh=37808,ph=37809,mh=37810,gh=37811,vh=37812,yh=37813,xh=37814,_h=37815,Sh=37816,wh=37817,bh=37818,Mh=37819,Eh=37820,Th=37821,yc=36492,Ah=36494,Ch=36495,G_=36283,Rh=36284,Ph=36285,Dh=36286,KA=3200,QA=3201,ZA=0,JA=1,li="",Dn="srgb",Pa="srgb-linear",Yc="linear",at="srgb",Ts=7680,jg=519,eC=512,tC=513,nC=514,W_=515,rC=516,iC=517,sC=518,aC=519,Xg=35044,$g="300 es",Ir=2e3,Kc=2001;class Fa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const i=r[e];if(i!==void 0){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=Math.PI/180,Nh=180/Math.PI;function Zo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[r&255]+Xt[r>>8&255]+Xt[r>>16&255]+Xt[r>>24&255]).toLowerCase()}function He(t,e,n){return Math.max(e,Math.min(n,t))}function oC(t,e){return(t%e+e)%e}function xd(t,e,n){return(1-n)*t+n*e}function Ja(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,n=0){ot.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(He(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(He(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*r-a*i+e.x,this.y=s*i+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,r,i,s,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,s,a,o,l,c)}set(e,n,r,i,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=r,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,s=this.elements,a=r[0],o=r[3],l=r[6],c=r[1],f=r[4],u=r[7],h=r[2],m=r[5],x=r[8],g=i[0],p=i[3],d=i[6],v=i[1],_=i[4],w=i[7],A=i[2],C=i[5],T=i[8];return s[0]=a*g+o*v+l*A,s[3]=a*p+o*_+l*C,s[6]=a*d+o*w+l*T,s[1]=c*g+f*v+u*A,s[4]=c*p+f*_+u*C,s[7]=c*d+f*w+u*T,s[2]=h*g+m*v+x*A,s[5]=h*p+m*_+x*C,s[8]=h*d+m*w+x*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-r*s*f+r*o*l+i*s*c-i*a*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=f*a-o*c,h=o*l-f*s,m=c*s-a*l,x=n*u+r*h+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=u*g,e[1]=(i*c-f*r)*g,e[2]=(o*r-i*a)*g,e[3]=h*g,e[4]=(f*n-i*l)*g,e[5]=(i*s-o*n)*g,e[6]=m*g,e[7]=(r*l-c*n)*g,e[8]=(a*n-r*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(r*l,r*c,-r*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(_d.makeScale(e,n)),this}rotate(e){return this.premultiply(_d.makeRotation(-e)),this}translate(e,n){return this.premultiply(_d.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _d=new Ue;function j_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Qc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function lC(){const t=Qc("canvas");return t.style.display="block",t}const qg={};function xc(t){t in qg||(qg[t]=!0,console.warn(t))}function cC(t,e,n){return new Promise(function(r,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:r()}}setTimeout(s,n)})}function uC(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dC(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Yg=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kg=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fC(){const t={enabled:!0,workingColorSpace:Pa,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(i.r=Ur(i.r),i.g=Ur(i.g),i.b=Ur(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(i.r=ca(i.r),i.g=ca(i.g),i.b=ca(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?Yc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return t.define({[Pa]:{primaries:e,whitePoint:r,transfer:Yc,toXYZ:Yg,fromXYZ:Kg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:r,transfer:at,toXYZ:Yg,fromXYZ:Kg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),t}const Qe=fC();function Ur(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ca(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let As;class hC{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{As===void 0&&(As=Qc("canvas")),As.width=e.width,As.height=e.height;const i=As.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=As}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Qc("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ur(s[a]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ur(n[r]/255)*255):n[r]=Ur(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pC=0;class Yp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pC++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Sd(i[a].image)):s.push(Sd(i[a]))}else s=Sd(i);r.url=s}return n||(e.images[this.uuid]=r),r}}function Sd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?hC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mC=0;class pn extends Fa{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,r=Zi,i=Zi,s=mr,a=Ji,o=Jn,l=Hr,c=pn.DEFAULT_ANISOTROPY,f=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mC++}),this.uuid=Zo(),this.name="",this.source=new Yp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==I_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ih:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ih:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=I_;pn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,r=0,i=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*i+a[12]*s,this.y=a[1]*n+a[5]*r+a[9]*i+a[13]*s,this.z=a[2]*n+a[6]*r+a[10]*i+a[14]*s,this.w=a[3]*n+a[7]*r+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,s;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],m=l[5],x=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-g)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+g)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,w=(m+1)/2,A=(d+1)/2,C=(f+h)/4,T=(u+g)/4,P=(x+p)/4;return _>w&&_>A?_<.01?(r=0,i=.707106781,s=.707106781):(r=Math.sqrt(_),i=C/r,s=T/r):w>A?w<.01?(r=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),r=C/i,s=P/i):A<.01?(r=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),r=T/s,i=P/s),this.set(r,i,s,n),this}let v=Math.sqrt((p-x)*(p-x)+(u-g)*(u-g)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(u-g)/v,this.z=(h-f)/v,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this.w=He(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this.w=He(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(He(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gC extends Fa{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const i={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const s=new pn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);s.flipY=!1,s.generateMipmaps=r.generateMipmaps,s.internalFormat=r.internalFormat,this.textures=[];const a=r.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const i=Object.assign({},e.textures[n].image);this.textures[n].source=new Yp(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends gC{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class X_ extends pn{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=nr,this.minFilter=nr,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vC extends pn{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=nr,this.minFilter=nr,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,s,a,o){let l=r[i+0],c=r[i+1],f=r[i+2],u=r[i+3];const h=s[a+0],m=s[a+1],x=s[a+2],g=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=g;return}if(u!==g||l!==h||c!==m||f!==x){let p=1-o;const d=l*h+c*m+f*x+u*g,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const A=Math.sqrt(_),C=Math.atan2(A,d*v);p=Math.sin(p*C)/A,o=Math.sin(o*C)/A}const w=o*v;if(l=l*p+h*w,c=c*p+m*w,f=f*p+x*w,u=u*p+g*w,p===1-o){const A=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=A,c*=A,f*=A,u*=A}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u}static multiplyQuaternionsFlat(e,n,r,i,s,a){const o=r[i],l=r[i+1],c=r[i+2],f=r[i+3],u=s[a],h=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+f*u+l*m-c*h,e[n+1]=l*x+f*h+c*u-o*m,e[n+2]=c*x+f*m+o*h-l*u,e[n+3]=f*x-o*u-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(r/2),f=o(i/2),u=o(s/2),h=l(r/2),m=l(i/2),x=l(s/2);switch(a){case"XYZ":this._x=h*f*u+c*m*x,this._y=c*m*u-h*f*x,this._z=c*f*x+h*m*u,this._w=c*f*u-h*m*x;break;case"YXZ":this._x=h*f*u+c*m*x,this._y=c*m*u-h*f*x,this._z=c*f*x-h*m*u,this._w=c*f*u+h*m*x;break;case"ZXY":this._x=h*f*u-c*m*x,this._y=c*m*u+h*f*x,this._z=c*f*x+h*m*u,this._w=c*f*u-h*m*x;break;case"ZYX":this._x=h*f*u-c*m*x,this._y=c*m*u+h*f*x,this._z=c*f*x-h*m*u,this._w=c*f*u+h*m*x;break;case"YZX":this._x=h*f*u+c*m*x,this._y=c*m*u+h*f*x,this._z=c*f*x-h*m*u,this._w=c*f*u-h*m*x;break;case"XZY":this._x=h*f*u-c*m*x,this._y=c*m*u-h*f*x,this._z=c*f*x+h*m*u,this._w=c*f*u+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],u=n[10],h=r+o+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(r>o&&r>u){const m=2*Math.sqrt(1+r-o-u);this._w=(f-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-r-u);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+u-r-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=r*f+a*o+i*c-s*l,this._y=i*f+a*l+s*o-r*c,this._z=s*f+a*c+r*l-i*o,this._w=a*f-r*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+r*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=r,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*r+n*this._x,this._y=m*i+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),u=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=a*u+this._w*h,this._x=r*u+this._x*h,this._y=i*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),s=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,r=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[3]*r+s[6]*i,this.y=s[1]*n+s[4]*r+s[7]*i,this.z=s[2]*n+s[5]*r+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,s=e.elements,a=1/(s[3]*n+s[7]*r+s[11]*i+s[15]);return this.x=(s[0]*n+s[4]*r+s[8]*i+s[12])*a,this.y=(s[1]*n+s[5]*r+s[9]*i+s[13])*a,this.z=(s[2]*n+s[6]*r+s[10]*i+s[14])*a,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*r),f=2*(o*n-s*i),u=2*(s*r-a*n);return this.x=n+l*c+a*u-o*f,this.y=r+l*f+o*c-s*u,this.z=i+l*u+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*i,this.y=s[1]*n+s[5]*r+s[9]*i,this.z=s[2]*n+s[6]*r+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(He(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=i*l-s*o,this.y=s*a-r*l,this.z=r*o-i*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return wd.copy(this).projectOnVector(e),this.sub(wd)}reflect(e){return this.sub(wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(He(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wd=new G,Qg=new Jo;class el{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const s=r.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wn):Wn.fromBufferAttribute(s,a),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Rl.copy(r.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Pl.subVectors(this.max,eo),Cs.subVectors(e.a,eo),Rs.subVectors(e.b,eo),Ps.subVectors(e.c,eo),Kr.subVectors(Rs,Cs),Qr.subVectors(Ps,Rs),Ui.subVectors(Cs,Ps);let n=[0,-Kr.z,Kr.y,0,-Qr.z,Qr.y,0,-Ui.z,Ui.y,Kr.z,0,-Kr.x,Qr.z,0,-Qr.x,Ui.z,0,-Ui.x,-Kr.y,Kr.x,0,-Qr.y,Qr.x,0,-Ui.y,Ui.x,0];return!bd(n,Cs,Rs,Ps,Pl)||(n=[1,0,0,0,1,0,0,0,1],!bd(n,Cs,Rs,Ps,Pl))?!1:(Dl.crossVectors(Kr,Qr),n=[Dl.x,Dl.y,Dl.z],bd(n,Cs,Rs,Ps,Pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _r=[new G,new G,new G,new G,new G,new G,new G,new G],Wn=new G,Rl=new el,Cs=new G,Rs=new G,Ps=new G,Kr=new G,Qr=new G,Ui=new G,eo=new G,Pl=new G,Dl=new G,Fi=new G;function bd(t,e,n,r,i){for(let s=0,a=t.length-3;s<=a;s+=3){Fi.fromArray(t,s);const o=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),l=e.dot(Fi),c=n.dot(Fi),f=r.dot(Fi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const yC=new el,to=new G,Md=new G;class bu{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):yC.setFromPoints(e).getCenter(r);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const n=to.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(to,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Md)),this.expandByPoint(to.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sr=new G,Ed=new G,Nl=new G,Zr=new G,Td=new G,Il=new G,Ad=new G;class $_{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Sr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,n),Sr.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){Ed.copy(e).add(n).multiplyScalar(.5),Nl.copy(n).sub(e).normalize(),Zr.copy(this.origin).sub(Ed);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Nl),o=Zr.dot(this.direction),l=-Zr.dot(Nl),c=Zr.lengthSq(),f=Math.abs(1-a*a);let u,h,m,x;if(f>0)if(u=a*l-o,h=a*o-l,x=s*f,u>=0)if(h>=-x)if(h<=x){const g=1/f;u*=g,h*=g,m=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h<=-x?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+h*(h+2*l)+c):h<=x?(u=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ed).addScaledVector(Nl,h),m}intersectSphere(e,n){Sr.subVectors(e.center,this.origin);const r=Sr.dot(this.direction),i=Sr.dot(Sr)-r*r,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=r-a,l=r+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),r>a||s>i||((s>r||isNaN(r))&&(r=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),r>l||o>i)||((o>r||r!==r)&&(r=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,n,r,i,s){Td.subVectors(n,e),Il.subVectors(r,e),Ad.crossVectors(Td,Il);let a=this.direction.dot(Ad),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zr.subVectors(this.origin,e);const l=o*this.direction.dot(Il.crossVectors(Zr,Il));if(l<0)return null;const c=o*this.direction.dot(Td.cross(Zr));if(c<0||l+c>a)return null;const f=-o*Zr.dot(Ad);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,r,i,s,a,o,l,c,f,u,h,m,x,g,p){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,s,a,o,l,c,f,u,h,m,x,g,p)}set(e,n,r,i,s,a,o,l,c,f,u,h,m,x,g,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=r,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=u,d[14]=h,d[3]=m,d[7]=x,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*s,n[5]=r[5]*s,n[6]=r[6]*s,n[7]=0,n[8]=r[8]*a,n[9]=r[9]*a,n[10]=r[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,s=e.z,a=Math.cos(r),o=Math.sin(r),l=Math.cos(i),c=Math.sin(i),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*f,m=a*u,x=o*f,g=o*u;n[0]=l*f,n[4]=-l*u,n[8]=c,n[1]=m+x*c,n[5]=h-g*c,n[9]=-o*l,n[2]=g-h*c,n[6]=x+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,m=l*u,x=c*f,g=c*u;n[0]=h+g*o,n[4]=x*o-m,n[8]=a*c,n[1]=a*u,n[5]=a*f,n[9]=-o,n[2]=m*o-x,n[6]=g+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,m=l*u,x=c*f,g=c*u;n[0]=h-g*o,n[4]=-a*u,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*f,n[9]=g-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,m=a*u,x=o*f,g=o*u;n[0]=l*f,n[4]=x*c-m,n[8]=h*c+g,n[1]=l*u,n[5]=g*c+h,n[9]=m*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,x=o*l,g=o*c;n[0]=l*f,n[4]=g-h*u,n[8]=x*u+m,n[1]=u,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*u+x,n[10]=h-g*u}else if(e.order==="XZY"){const h=a*l,m=a*c,x=o*l,g=o*c;n[0]=l*f,n[4]=-u,n[8]=c*f,n[1]=h*u+g,n[5]=a*f,n[9]=m*u-x,n[2]=x*u-m,n[6]=o*f,n[10]=g*u+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xC,e,_C)}lookAt(e,n,r){const i=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Jr.crossVectors(r,vn),Jr.lengthSq()===0&&(Math.abs(r.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Jr.crossVectors(r,vn)),Jr.normalize(),kl.crossVectors(vn,Jr),i[0]=Jr.x,i[4]=kl.x,i[8]=vn.x,i[1]=Jr.y,i[5]=kl.y,i[9]=vn.y,i[2]=Jr.z,i[6]=kl.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,s=this.elements,a=r[0],o=r[4],l=r[8],c=r[12],f=r[1],u=r[5],h=r[9],m=r[13],x=r[2],g=r[6],p=r[10],d=r[14],v=r[3],_=r[7],w=r[11],A=r[15],C=i[0],T=i[4],P=i[8],M=i[12],S=i[1],N=i[5],O=i[9],B=i[13],q=i[2],Q=i[6],W=i[10],Z=i[14],k=i[3],X=i[7],J=i[11],ae=i[15];return s[0]=a*C+o*S+l*q+c*k,s[4]=a*T+o*N+l*Q+c*X,s[8]=a*P+o*O+l*W+c*J,s[12]=a*M+o*B+l*Z+c*ae,s[1]=f*C+u*S+h*q+m*k,s[5]=f*T+u*N+h*Q+m*X,s[9]=f*P+u*O+h*W+m*J,s[13]=f*M+u*B+h*Z+m*ae,s[2]=x*C+g*S+p*q+d*k,s[6]=x*T+g*N+p*Q+d*X,s[10]=x*P+g*O+p*W+d*J,s[14]=x*M+g*B+p*Z+d*ae,s[3]=v*C+_*S+w*q+A*k,s[7]=v*T+_*N+w*Q+A*X,s[11]=v*P+_*O+w*W+A*J,s[15]=v*M+_*B+w*Z+A*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],m=e[14],x=e[3],g=e[7],p=e[11],d=e[15];return x*(+s*l*u-i*c*u-s*o*h+r*c*h+i*o*m-r*l*m)+g*(+n*l*m-n*c*h+s*a*h-i*a*m+i*c*f-s*l*f)+p*(+n*c*u-n*o*m-s*a*u+r*a*m+s*o*f-r*c*f)+d*(-i*o*f-n*l*u+n*o*h+i*a*u-r*a*h+r*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],m=e[11],x=e[12],g=e[13],p=e[14],d=e[15],v=u*p*c-g*h*c+g*l*m-o*p*m-u*l*d+o*h*d,_=x*h*c-f*p*c-x*l*m+a*p*m+f*l*d-a*h*d,w=f*g*c-x*u*c+x*o*m-a*g*m-f*o*d+a*u*d,A=x*u*l-f*g*l-x*o*h+a*g*h+f*o*p-a*u*p,C=n*v+r*_+i*w+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=v*T,e[1]=(g*h*s-u*p*s-g*i*m+r*p*m+u*i*d-r*h*d)*T,e[2]=(o*p*s-g*l*s+g*i*c-r*p*c-o*i*d+r*l*d)*T,e[3]=(u*l*s-o*h*s-u*i*c+r*h*c+o*i*m-r*l*m)*T,e[4]=_*T,e[5]=(f*p*s-x*h*s+x*i*m-n*p*m-f*i*d+n*h*d)*T,e[6]=(x*l*s-a*p*s-x*i*c+n*p*c+a*i*d-n*l*d)*T,e[7]=(a*h*s-f*l*s+f*i*c-n*h*c-a*i*m+n*l*m)*T,e[8]=w*T,e[9]=(x*u*s-f*g*s-x*r*m+n*g*m+f*r*d-n*u*d)*T,e[10]=(a*g*s-x*o*s+x*r*c-n*g*c-a*r*d+n*o*d)*T,e[11]=(f*o*s-a*u*s-f*r*c+n*u*c+a*r*m-n*o*m)*T,e[12]=A*T,e[13]=(f*g*i-x*u*i+x*r*h-n*g*h-f*r*p+n*u*p)*T,e[14]=(x*o*i-a*g*i-x*r*l+n*g*l+a*r*p-n*o*p)*T,e[15]=(a*u*i-f*o*i+f*r*l-n*u*l-a*r*h+n*o*h)*T,this}scale(e){const n=this.elements,r=e.x,i=e.y,s=e.z;return n[0]*=r,n[4]*=i,n[8]*=s,n[1]*=r,n[5]*=i,n[9]*=s,n[2]*=r,n[6]*=i,n[10]*=s,n[3]*=r,n[7]*=i,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),s=1-r,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+r,c*o-i*l,c*l+i*o,0,c*o+i*l,f*o+r,f*l-i*a,0,c*l-i*o,f*l+i*a,s*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,s,a){return this.set(1,r,s,0,e,1,a,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,u=o+o,h=s*c,m=s*f,x=s*u,g=a*f,p=a*u,d=o*u,v=l*c,_=l*f,w=l*u,A=r.x,C=r.y,T=r.z;return i[0]=(1-(g+d))*A,i[1]=(m+w)*A,i[2]=(x-_)*A,i[3]=0,i[4]=(m-w)*C,i[5]=(1-(h+d))*C,i[6]=(p+v)*C,i[7]=0,i[8]=(x+_)*T,i[9]=(p-v)*T,i[10]=(1-(h+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let s=Ds.set(i[0],i[1],i[2]).length();const a=Ds.set(i[4],i[5],i[6]).length(),o=Ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],jn.copy(this);const c=1/s,f=1/a,u=1/o;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=f,jn.elements[5]*=f,jn.elements[6]*=f,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,n.setFromRotationMatrix(jn),r.x=s,r.y=a,r.z=o,this}makePerspective(e,n,r,i,s,a,o=Ir){const l=this.elements,c=2*s/(n-e),f=2*s/(r-i),u=(n+e)/(n-e),h=(r+i)/(r-i);let m,x;if(o===Ir)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Kc)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,i,s,a,o=Ir){const l=this.elements,c=1/(n-e),f=1/(r-i),u=1/(a-s),h=(n+e)*c,m=(r+i)*f;let x,g;if(o===Ir)x=(a+s)*u,g=-2*u;else if(o===Kc)x=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ds=new G,jn=new At,xC=new G(0,0,0),_C=new G(1,1,1),Jr=new G,kl=new G,vn=new G,Zg=new At,Jg=new Jo;class Vr{constructor(e=0,n=0,r=0,i=Vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],f=i[9],u=i[2],h=i[6],m=i[10];switch(n){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Zg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zg,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vr.DEFAULT_ORDER="XYZ";class q_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SC=0;const ev=new G,Ns=new Jo,wr=new At,Ll=new G,no=new G,wC=new G,bC=new Jo,tv=new G(1,0,0),nv=new G(0,1,0),rv=new G(0,0,1),iv={type:"added"},MC={type:"removed"},Is={type:"childadded",child:null},Cd={type:"childremoved",child:null};class mn extends Fa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SC++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new G,n=new Vr,r=new Jo,i=new G(1,1,1);function s(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(s),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new At},normalMatrix:{value:new Ue}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(tv,e)}rotateY(e){return this.rotateOnAxis(nv,e)}rotateZ(e){return this.rotateOnAxis(rv,e)}translateOnAxis(e,n){return ev.copy(e).applyQuaternion(this.quaternion),this.position.add(ev.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tv,e)}translateY(e){return this.translateOnAxis(nv,e)}translateZ(e){return this.translateOnAxis(rv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Ll.copy(e):Ll.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wr.lookAt(no,Ll,this.up):wr.lookAt(Ll,no,this.up),this.quaternion.setFromRotationMatrix(wr),i&&(wr.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(wr),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iv),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(MC),Cd.child=e,this.dispatchEvent(Cd),Cd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(wr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iv),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const a=this.children[r].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,wC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,bC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),u=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),f.length>0&&(r.images=f),u.length>0&&(r.shapes=u),h.length>0&&(r.skeletons=h),m.length>0&&(r.animations=m),x.length>0&&(r.nodes=x)}return r.object=i,r;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}mn.DEFAULT_UP=new G(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new G,br=new G,Rd=new G,Mr=new G,ks=new G,Ls=new G,sv=new G,Pd=new G,Dd=new G,Nd=new G,Id=new Tt,kd=new Tt,Ld=new Tt;class Zn{constructor(e=new G,n=new G,r=new G){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),Xn.subVectors(e,n),i.cross(Xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,n,r,i,s){Xn.subVectors(i,n),br.subVectors(r,n),Rd.subVectors(e,n);const a=Xn.dot(Xn),o=Xn.dot(br),l=Xn.dot(Rd),c=br.dot(br),f=br.dot(Rd),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,m=(c*l-o*f)*h,x=(a*f-o*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,Mr)===null?!1:Mr.x>=0&&Mr.y>=0&&Mr.x+Mr.y<=1}static getInterpolation(e,n,r,i,s,a,o,l){return this.getBarycoord(e,n,r,i,Mr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mr.x),l.addScaledVector(a,Mr.y),l.addScaledVector(o,Mr.z),l)}static getInterpolatedAttribute(e,n,r,i,s,a){return Id.setScalar(0),kd.setScalar(0),Ld.setScalar(0),Id.fromBufferAttribute(e,n),kd.fromBufferAttribute(e,r),Ld.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Id,s.x),a.addScaledVector(kd,s.y),a.addScaledVector(Ld,s.z),a}static isFrontFacing(e,n,r,i){return Xn.subVectors(r,n),br.subVectors(e,n),Xn.cross(br).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),br.subVectors(this.a,this.b),Xn.cross(br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,i,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,r,i,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,s=this.c;let a,o;ks.subVectors(i,r),Ls.subVectors(s,r),Pd.subVectors(e,r);const l=ks.dot(Pd),c=Ls.dot(Pd);if(l<=0&&c<=0)return n.copy(r);Dd.subVectors(e,i);const f=ks.dot(Dd),u=Ls.dot(Dd);if(f>=0&&u<=f)return n.copy(i);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(r).addScaledVector(ks,a);Nd.subVectors(e,s);const m=ks.dot(Nd),x=Ls.dot(Nd);if(x>=0&&m<=x)return n.copy(s);const g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(r).addScaledVector(Ls,o);const p=f*x-m*u;if(p<=0&&u-f>=0&&m-x>=0)return sv.subVectors(s,i),o=(u-f)/(u-f+(m-x)),n.copy(i).addScaledVector(sv,o);const d=1/(p+g+h);return a=g*d,o=h*d,n.copy(r).addScaledVector(ks,a).addScaledVector(Ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Ud(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=r,Qe.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=Qe.workingColorSpace){if(e=oC(e,1),n=He(n,0,1),r=He(r,0,1),n===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+n):r+n-r*n,a=2*r-s;this.r=Ud(a,s,e+1/3),this.g=Ud(a,s,e),this.b=Ud(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,n=Dn){function r(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const r=Y_[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return Qe.fromWorkingColorSpace($t.copy(this),e),Math.round(He($t.r*255,0,255))*65536+Math.round(He($t.g*255,0,255))*256+Math.round(He($t.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace($t.copy(this),n);const r=$t.r,i=$t.g,s=$t.b,a=Math.max(r,i,s),o=Math.min(r,i,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case r:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-r)/u+2;break;case s:l=(r-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Dn){Qe.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,r=$t.g,i=$t.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+n,ei.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(ei),e.getHSL(Ul);const r=xd(ei.h,Ul.h,n),i=xd(ei.s,Ul.s,n),s=xd(ei.l,Ul.l,n);return this.setHSL(r,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,s=e.elements;return this.r=s[0]*n+s[3]*r+s[6]*i,this.g=s[1]*n+s[4]*r+s[7]*i,this.b=s[2]*n+s[5]*r+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new it;it.NAMES=Y_;let EC=0;class tl extends Fa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EC++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=la,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=qf,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==la&&(r.blending=this.blending),this.side!==Ri&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==$f&&(r.blendSrc=this.blendSrc),this.blendDst!==qf&&(r.blendDst=this.blendDst),this.blendEquation!==$i&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Aa&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=i(e.textures),a=i(e.images);s.length>0&&(r.textures=s),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let s=0;s!==i;++s)r[s]=n[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class K_ extends tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=N_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new G,Fl=new ot;let TC=0;class On{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TC++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Xg,this.updateRanges=[],this.gpuType=Nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Fl.fromBufferAttribute(this,n),Fl.applyMatrix3(e),this.setXY(n,Fl.x,Fl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ja(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=on(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ja(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ja(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ja(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ja(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),r=on(r,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),r=on(r,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xg&&(e.usage=this.usage),e}}class Q_ extends On{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Z_ extends On{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class as extends On{constructor(e,n,r){super(new Float32Array(e),n,r)}}let AC=0;const Rn=new At,Fd=new mn,Us=new G,yn=new el,ro=new el,Lt=new G;class jr extends Fa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AC++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j_(e)?Z_:Q_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new Ue().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,r){return Rn.makeTranslation(e,n,r),this.applyMatrix4(Rn),this}scale(e,n,r){return Rn.makeScale(e,n,r),this.applyMatrix4(Rn),this}lookAt(e){return Fd.lookAt(e),Fd.updateMatrix(),this.applyMatrix4(Fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];r.push(a.x,a.y,a.z||0)}this.setAttribute("position",new as(r,3))}else{const r=Math.min(e.length,n.count);for(let i=0;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const s=n[r];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const r=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ro.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(yn.min,ro.min),yn.expandByPoint(Lt),Lt.addVectors(yn.max,ro.max),yn.expandByPoint(Lt)):(yn.expandByPoint(ro.min),yn.expandByPoint(ro.max))}yn.getCenter(r);let i=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),i=Math.max(i,r.distanceToSquared(Lt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Lt.fromBufferAttribute(o,c),l&&(Us.fromBufferAttribute(e,c),Lt.add(Us)),i=Math.max(i,r.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,i=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*r.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<r.count;P++)o[P]=new G,l[P]=new G;const c=new G,f=new G,u=new G,h=new ot,m=new ot,x=new ot,g=new G,p=new G;function d(P,M,S){c.fromBufferAttribute(r,P),f.fromBufferAttribute(r,M),u.fromBufferAttribute(r,S),h.fromBufferAttribute(s,P),m.fromBufferAttribute(s,M),x.fromBufferAttribute(s,S),f.sub(c),u.sub(c),m.sub(h),x.sub(h);const N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(g.copy(f).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(N),p.copy(u).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(N),o[P].add(g),o[M].add(g),o[S].add(g),l[P].add(p),l[M].add(p),l[S].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,M=v.length;P<M;++P){const S=v[P],N=S.start,O=S.count;for(let B=N,q=N+O;B<q;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new G,w=new G,A=new G,C=new G;function T(P){A.fromBufferAttribute(i,P),C.copy(A);const M=o[P];_.copy(M),_.sub(A.multiplyScalar(A.dot(M))).normalize(),w.crossVectors(C,M);const N=w.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,N)}for(let P=0,M=v.length;P<M;++P){const S=v[P],N=S.start,O=S.count;for(let B=N,q=N+O;B<q;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new On(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let h=0,m=r.count;h<m;h++)r.setXYZ(h,0,0,0);const i=new G,s=new G,a=new G,o=new G,l=new G,c=new G,f=new G,u=new G;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(n,x),s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,p),f.subVectors(a,s),u.subVectors(i,s),f.cross(u),o.fromBufferAttribute(r,x),l.fromBufferAttribute(r,g),c.fromBufferAttribute(r,p),o.add(f),l.add(f),c.add(f),r.setXYZ(x,o.x,o.y,o.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)i.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),u.subVectors(i,s),f.cross(u),r.setXYZ(h+0,f.x,f.y,f.z),r.setXYZ(h+1,f.x,f.y,f.z),r.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,u=o.normalized,h=new c.constructor(l.length*f);let m=0,x=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*f;for(let d=0;d<f;d++)h[x++]=c[m++]}return new On(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jr,r=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,r);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,u=c.length;f<u;f++){const h=c[f],m=e(h,r);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const m=c[u];f.push(m.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const i=e.attributes;for(const c in i){const f=i[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,m=u.length;h<m;h++)f.push(u[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const av=new At,Oi=new $_,Ol=new bu,ov=new G,Bl=new G,zl=new G,Hl=new G,Od=new G,Vl=new G,lv=new G,Gl=new G;class kr extends mn{constructor(e=new jr,n=new K_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,s=r.morphAttributes.position,a=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],u=s[l];f!==0&&(Od.fromBufferAttribute(u,e),a?Vl.addScaledVector(Od,f):Vl.addScaledVector(Od.sub(n),f))}n.add(Vl)}return n}raycast(e,n){const r=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ol.copy(r.boundingSphere),Ol.applyMatrix4(s),Oi.copy(e.ray).recast(e.near),!(Ol.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Ol,ov)===null||Oi.origin.distanceToSquared(ov)>(e.far-e.near)**2))&&(av.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(av),!(r.boundingBox!==null&&Oi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Oi)))}_computeIntersections(e,n,r){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=h.length;x<g;x++){const p=h[x],d=a[p.materialIndex],v=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=v,A=_;w<A;w+=3){const C=o.getX(w),T=o.getX(w+1),P=o.getX(w+2);i=Wl(this,d,e,r,c,f,u,C,T,P),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,n.push(i))}}else{const x=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=x,d=g;p<d;p+=3){const v=o.getX(p),_=o.getX(p+1),w=o.getX(p+2);i=Wl(this,a,e,r,c,f,u,v,_,w),i&&(i.faceIndex=Math.floor(p/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=h.length;x<g;x++){const p=h[x],d=a[p.materialIndex],v=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=v,A=_;w<A;w+=3){const C=w,T=w+1,P=w+2;i=Wl(this,d,e,r,c,f,u,C,T,P),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,n.push(i))}}else{const x=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=x,d=g;p<d;p+=3){const v=p,_=p+1,w=p+2;i=Wl(this,a,e,r,c,f,u,v,_,w),i&&(i.faceIndex=Math.floor(p/3),n.push(i))}}}}function CC(t,e,n,r,i,s,a,o){let l;if(e.side===hn?l=r.intersectTriangle(a,s,i,!0,o):l=r.intersectTriangle(i,s,a,e.side===Ri,o),l===null)return null;Gl.copy(o),Gl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Gl);return c<n.near||c>n.far?null:{distance:c,point:Gl.clone(),object:t}}function Wl(t,e,n,r,i,s,a,o,l,c){t.getVertexPosition(o,Bl),t.getVertexPosition(l,zl),t.getVertexPosition(c,Hl);const f=CC(t,e,n,r,Bl,zl,Hl,lv);if(f){const u=new G;Zn.getBarycoord(lv,Bl,zl,Hl,u),i&&(f.uv=Zn.getInterpolatedAttribute(i,o,l,c,u,new ot)),s&&(f.uv1=Zn.getInterpolatedAttribute(s,o,l,c,u,new ot)),a&&(f.normal=Zn.getInterpolatedAttribute(a,o,l,c,u,new G),f.normal.dot(r.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};Zn.getNormal(Bl,zl,Hl,h.normal),f.face=h,f.barycoord=u}return f}class nl extends jr{constructor(e=1,n=1,r=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],u=[];let h=0,m=0;x("z","y","x",-1,-1,r,n,e,a,s,0),x("z","y","x",1,-1,r,n,-e,a,s,1),x("x","z","y",1,1,e,r,n,i,a,2),x("x","z","y",1,-1,e,r,-n,i,a,3),x("x","y","z",1,-1,e,n,r,i,s,4),x("x","y","z",-1,-1,e,n,-r,i,s,5),this.setIndex(l),this.setAttribute("position",new as(c,3)),this.setAttribute("normal",new as(f,3)),this.setAttribute("uv",new as(u,2));function x(g,p,d,v,_,w,A,C,T,P,M){const S=w/T,N=A/P,O=w/2,B=A/2,q=C/2,Q=T+1,W=P+1;let Z=0,k=0;const X=new G;for(let J=0;J<W;J++){const ae=J*N-B;for(let we=0;we<Q;we++){const Ye=we*S-O;X[g]=Ye*v,X[p]=ae*_,X[d]=q,c.push(X.x,X.y,X.z),X[g]=0,X[p]=0,X[d]=C>0?1:-1,f.push(X.x,X.y,X.z),u.push(we/T),u.push(1-J/P),Z+=1}}for(let J=0;J<P;J++)for(let ae=0;ae<T;ae++){const we=h+ae+Q*J,Ye=h+ae+Q*(J+1),$=h+(ae+1)+Q*(J+1),oe=h+(ae+1)+Q*J;l.push(we,Ye,oe),l.push(Ye,$,oe),k+=6}o.addGroup(m,k,M),m+=k,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Da(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const r=Da(t[n]);for(const i in r)e[i]=r[i]}return e}function RC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function J_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const PC={clone:Da,merge:Zt};var DC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DC,this.fragmentShader=NC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Da(e.uniforms),this.uniformsGroups=RC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?n.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[i]={type:"m4",value:a.toArray()}:n.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class eS extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Ir}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new G,cv=new ot,uv=new ot;class kn extends eS{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nh*2*Math.atan(Math.tan(yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,n){return this.getViewBounds(e,cv,uv),n.subVectors(uv,cv)}setViewOffset(e,n,r,i,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(yd*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,n-=a.offsetY*r/c,i*=a.width/l,r*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,Os=1;class IC extends mn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kn(Fs,Os,e,n);i.layers=this.layers,this.add(i);const s=new kn(Fs,Os,e,n);s.layers=this.layers,this.add(s);const a=new kn(Fs,Os,e,n);a.layers=this.layers,this.add(a);const o=new kn(Fs,Os,e,n);o.layers=this.layers,this.add(o);const l=new kn(Fs,Os,e,n);l.layers=this.layers,this.add(l);const c=new kn(Fs,Os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ir)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kc)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,s),e.setRenderTarget(r,1,i),e.render(n,a),e.setRenderTarget(r,2,i),e.render(n,o),e.setRenderTarget(r,3,i),e.render(n,l),e.setRenderTarget(r,4,i),e.render(n,c),r.texture.generateMipmaps=g,e.setRenderTarget(r,5,i),e.render(n,f),e.setRenderTarget(u,h,m),e.xr.enabled=x,r.texture.needsPMREMUpdate=!0}}class tS extends pn{constructor(e=[],n=Ca,r,i,s,a,o,l,c,f){super(e,n,r,i,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kC extends gs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new tS(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mr}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new nl(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:Da(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:hn,blending:Ei});s.uniforms.tEquirect.value=n;const a=new kr(i,s),o=n.minFilter;return n.minFilter===Ji&&(n.minFilter=mr),new IC(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,r=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,r,i);e.setRenderTarget(s)}}class jl extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LC={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=n.getJointPose(g,r),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(LC)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new jl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class UC extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zd=new G,FC=new G,OC=new Ue;class ji{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=zd.subVectors(r,n).cross(FC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(zd),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:n.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||OC.getNormalMatrix(e),i=this.coplanarPoint(zd).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new bu,Xl=new G;class nS{constructor(e=new ji,n=new ji,r=new ji,i=new ji,s=new ji,a=new ji){this.planes=[e,n,r,i,s,a]}set(e,n,r,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(r),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ir){const r=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],f=i[5],u=i[6],h=i[7],m=i[8],x=i[9],g=i[10],p=i[11],d=i[12],v=i[13],_=i[14],w=i[15];if(r[0].setComponents(l-s,h-c,p-m,w-d).normalize(),r[1].setComponents(l+s,h+c,p+m,w+d).normalize(),r[2].setComponents(l+a,h+f,p+x,w+v).normalize(),r[3].setComponents(l-a,h-f,p-x,w-v).normalize(),r[4].setComponents(l-o,h-u,p-g,w-_).normalize(),n===Ir)r[5].setComponents(l+o,h+u,p+g,w+_).normalize();else if(n===Kc)r[5].setComponents(o,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Bi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(Xl.x=i.normal.x>0?e.max.x:e.min.x,Xl.y=i.normal.y>0?e.max.y:e.min.y,Xl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rS extends tl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dv=new At,Ih=new $_,$l=new bu,ql=new G;class BC extends mn{constructor(e=new jr,n=new rS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),$l.copy(r.boundingSphere),$l.applyMatrix4(i),$l.radius+=s,e.ray.intersectsSphere($l)===!1)return;dv.copy(i).invert(),Ih.copy(e.ray).applyMatrix4(dv);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=r.index,u=r.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=h,g=m;x<g;x++){const p=c.getX(x);ql.fromBufferAttribute(u,p),fv(ql,p,l,i,e,n,this)}}else{const h=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=h,g=m;x<g;x++)ql.fromBufferAttribute(u,x),fv(ql,x,l,i,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fv(t,e,n,r,i,s,a){const o=Ih.distanceSqToPoint(t);if(o<n){const l=new G;Ih.closestPointToPoint(t,l),l.applyMatrix4(r);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class iS extends pn{constructor(e,n,r=ms,i,s,a,o=nr,l=nr,c,f=zo){if(f!==zo&&f!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,a,o,l,f,r,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Mu extends jr{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const s=e/2,a=n/2,o=Math.floor(r),l=Math.floor(i),c=o+1,f=l+1,u=e/o,h=n/l,m=[],x=[],g=[],p=[];for(let d=0;d<f;d++){const v=d*h-a;for(let _=0;_<c;_++){const w=_*u-s;x.push(w,-v,0),g.push(0,0,1),p.push(_/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const _=v+c*d,w=v+c*(d+1),A=v+1+c*(d+1),C=v+1+c*d;m.push(_,w,C),m.push(w,A,C)}this.setIndex(m),this.setAttribute("position",new as(x,3)),this.setAttribute("normal",new as(g,3)),this.setAttribute("uv",new as(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.width,e.height,e.widthSegments,e.heightSegments)}}class zC extends tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HC extends tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class VC extends eS{constructor(e=-1,n=1,r=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=r-e,a=r+e,o=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class GC extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function hv(t,e,n,r){const i=WC(r);switch(n){case F_:return t*e;case B_:return t*e;case z_:return t*e*2;case H_:return t*e/i.components*i.byteLength;case Xp:return t*e/i.components*i.byteLength;case V_:return t*e*2/i.components*i.byteLength;case $p:return t*e*2/i.components*i.byteLength;case O_:return t*e*3/i.components*i.byteLength;case Jn:return t*e*4/i.components*i.byteLength;case qp:return t*e*4/i.components*i.byteLength;case pc:case mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gc:case vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case oh:case ch:return Math.max(t,16)*Math.max(e,8)/4;case ah:case lh:return Math.max(t,8)*Math.max(e,8)/2;case uh:case dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case mh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case gh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case vh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case yh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case _h:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case wh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case bh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case yc:case Ah:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*16;case G_:case Rh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ph:case Dh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function WC(t){switch(t){case Hr:case k_:return{byteLength:1,components:1};case Oo:case L_:case Qo:return{byteLength:2,components:1};case Wp:case jp:return{byteLength:2,components:4};case ms:case Gp:case Nr:return{byteLength:4,components:1};case U_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sS(){let t=null,e=!1,n=null,r=null;function i(s,a){n(s,a),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jC(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,u=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function r(o,l,c){const f=l.array,u=l.updateRanges;if(t.bindBuffer(c,o),u.length===0)t.bufferSubData(c,0,f);else{u.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<u.length;m++){const x=u[h],g=u[m];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++h,u[h]=g)}u.length=h+1;for(let m=0,x=u.length;m<x;m++){const g=u[m];t.bufferSubData(c,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var XC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$C=`#ifdef USE_ALPHAHASH
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
#endif`,qC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZC=`#ifdef USE_AOMAP
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
#endif`,JC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eR=`#ifdef USE_BATCHING
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
#endif`,tR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sR=`#ifdef USE_IRIDESCENCE
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
#endif`,aR=`#ifdef USE_BUMPMAP
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
#endif`,oR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mR=`#define PI 3.141592653589793
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
} // validated`,gR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vR=`vec3 transformedNormal = objectNormal;
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
#endif`,yR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_R=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wR="gl_FragColor = linearToOutputTexel( gl_FragColor );",bR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MR=`#ifdef USE_ENVMAP
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
#endif`,ER=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TR=`#ifdef USE_ENVMAP
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
#endif`,AR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CR=`#ifdef USE_ENVMAP
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
#endif`,RR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IR=`#ifdef USE_GRADIENTMAP
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
}`,kR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FR=`uniform bool receiveShadow;
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
#endif`,OR=`#ifdef USE_ENVMAP
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
#endif`,BR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GR=`PhysicalMaterial material;
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
#endif`,WR=`struct PhysicalMaterial {
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
}`,jR=`
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
#endif`,XR=`#if defined( RE_IndirectDiffuse )
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
#endif`,$R=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tP=`#if defined( USE_POINTS_UV )
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
#endif`,nP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oP=`#ifdef USE_MORPHTARGETS
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
#endif`,lP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pP=`#ifdef USE_NORMALMAP
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
#endif`,mP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_P=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PP=`float getShadowMask() {
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
}`,DP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NP=`#ifdef USE_SKINNING
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
#endif`,IP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kP=`#ifdef USE_SKINNING
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
#endif`,LP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BP=`#ifdef USE_TRANSMISSION
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
#endif`,zP=`#ifdef USE_TRANSMISSION
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
#endif`,HP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XP=`uniform sampler2D t2D;
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
}`,$P=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QP=`#include <common>
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
}`,ZP=`#if DEPTH_PACKING == 3200
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
}`,JP=`#define DISTANCE
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
}`,e2=`#define DISTANCE
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
}`,t2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r2=`uniform float scale;
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
}`,i2=`uniform vec3 diffuse;
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
}`,s2=`#include <common>
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
}`,a2=`uniform vec3 diffuse;
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
}`,o2=`#define LAMBERT
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
}`,l2=`#define LAMBERT
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
}`,c2=`#define MATCAP
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
}`,u2=`#define MATCAP
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
}`,d2=`#define NORMAL
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
}`,f2=`#define NORMAL
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
}`,h2=`#define PHONG
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
}`,p2=`#define PHONG
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
}`,m2=`#define STANDARD
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
}`,g2=`#define STANDARD
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
}`,v2=`#define TOON
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
}`,y2=`#define TOON
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
}`,x2=`uniform float size;
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
}`,_2=`uniform vec3 diffuse;
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
}`,S2=`#include <common>
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
}`,w2=`uniform vec3 color;
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
}`,b2=`uniform float rotation;
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
}`,M2=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:XC,alphahash_pars_fragment:$C,alphamap_fragment:qC,alphamap_pars_fragment:YC,alphatest_fragment:KC,alphatest_pars_fragment:QC,aomap_fragment:ZC,aomap_pars_fragment:JC,batching_pars_vertex:eR,batching_vertex:tR,begin_vertex:nR,beginnormal_vertex:rR,bsdfs:iR,iridescence_fragment:sR,bumpmap_pars_fragment:aR,clipping_planes_fragment:oR,clipping_planes_pars_fragment:lR,clipping_planes_pars_vertex:cR,clipping_planes_vertex:uR,color_fragment:dR,color_pars_fragment:fR,color_pars_vertex:hR,color_vertex:pR,common:mR,cube_uv_reflection_fragment:gR,defaultnormal_vertex:vR,displacementmap_pars_vertex:yR,displacementmap_vertex:xR,emissivemap_fragment:_R,emissivemap_pars_fragment:SR,colorspace_fragment:wR,colorspace_pars_fragment:bR,envmap_fragment:MR,envmap_common_pars_fragment:ER,envmap_pars_fragment:TR,envmap_pars_vertex:AR,envmap_physical_pars_fragment:OR,envmap_vertex:CR,fog_vertex:RR,fog_pars_vertex:PR,fog_fragment:DR,fog_pars_fragment:NR,gradientmap_pars_fragment:IR,lightmap_pars_fragment:kR,lights_lambert_fragment:LR,lights_lambert_pars_fragment:UR,lights_pars_begin:FR,lights_toon_fragment:BR,lights_toon_pars_fragment:zR,lights_phong_fragment:HR,lights_phong_pars_fragment:VR,lights_physical_fragment:GR,lights_physical_pars_fragment:WR,lights_fragment_begin:jR,lights_fragment_maps:XR,lights_fragment_end:$R,logdepthbuf_fragment:qR,logdepthbuf_pars_fragment:YR,logdepthbuf_pars_vertex:KR,logdepthbuf_vertex:QR,map_fragment:ZR,map_pars_fragment:JR,map_particle_fragment:eP,map_particle_pars_fragment:tP,metalnessmap_fragment:nP,metalnessmap_pars_fragment:rP,morphinstance_vertex:iP,morphcolor_vertex:sP,morphnormal_vertex:aP,morphtarget_pars_vertex:oP,morphtarget_vertex:lP,normal_fragment_begin:cP,normal_fragment_maps:uP,normal_pars_fragment:dP,normal_pars_vertex:fP,normal_vertex:hP,normalmap_pars_fragment:pP,clearcoat_normal_fragment_begin:mP,clearcoat_normal_fragment_maps:gP,clearcoat_pars_fragment:vP,iridescence_pars_fragment:yP,opaque_fragment:xP,packing:_P,premultiplied_alpha_fragment:SP,project_vertex:wP,dithering_fragment:bP,dithering_pars_fragment:MP,roughnessmap_fragment:EP,roughnessmap_pars_fragment:TP,shadowmap_pars_fragment:AP,shadowmap_pars_vertex:CP,shadowmap_vertex:RP,shadowmask_pars_fragment:PP,skinbase_vertex:DP,skinning_pars_vertex:NP,skinning_vertex:IP,skinnormal_vertex:kP,specularmap_fragment:LP,specularmap_pars_fragment:UP,tonemapping_fragment:FP,tonemapping_pars_fragment:OP,transmission_fragment:BP,transmission_pars_fragment:zP,uv_pars_fragment:HP,uv_pars_vertex:VP,uv_vertex:GP,worldpos_vertex:WP,background_vert:jP,background_frag:XP,backgroundCube_vert:$P,backgroundCube_frag:qP,cube_vert:YP,cube_frag:KP,depth_vert:QP,depth_frag:ZP,distanceRGBA_vert:JP,distanceRGBA_frag:e2,equirect_vert:t2,equirect_frag:n2,linedashed_vert:r2,linedashed_frag:i2,meshbasic_vert:s2,meshbasic_frag:a2,meshlambert_vert:o2,meshlambert_frag:l2,meshmatcap_vert:c2,meshmatcap_frag:u2,meshnormal_vert:d2,meshnormal_frag:f2,meshphong_vert:h2,meshphong_frag:p2,meshphysical_vert:m2,meshphysical_frag:g2,meshtoon_vert:v2,meshtoon_frag:y2,points_vert:x2,points_frag:_2,shadow_vert:S2,shadow_frag:w2,sprite_vert:b2,sprite_frag:M2},ce={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},fr={basic:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new it(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Zt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Zt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new it(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Zt([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Zt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Zt([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Zt([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Zt([ce.common,ce.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Zt([ce.lights,ce.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};fr.physical={uniforms:Zt([fr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Yl={r:0,b:0,g:0},zi=new Vr,E2=new At;function T2(t,e,n,r,i,s,a){const o=new it(0);let l=s===!0?0:1,c,f,u=null,h=0,m=null;function x(_){let w=_.isScene===!0?_.background:null;return w&&w.isTexture&&(w=(_.backgroundBlurriness>0?n:e).get(w)),w}function g(_){let w=!1;const A=x(_);A===null?d(o,l):A&&A.isColor&&(d(A,1),w=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?r.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(t.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(_,w){const A=x(w);A&&(A.isCubeTexture||A.mapping===wu)?(f===void 0&&(f=new kr(new nl(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Da(fr.backgroundCube.uniforms),vertexShader:fr.backgroundCube.vertexShader,fragmentShader:fr.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),zi.copy(w.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(E2.makeRotationFromEuler(zi)),f.material.toneMapped=Qe.getTransfer(A.colorSpace)!==at,(u!==A||h!==A.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,u=A,h=A.version,m=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new kr(new Mu(2,2),new Pi({name:"BackgroundMaterial",uniforms:Da(fr.background.uniforms),vertexShader:fr.background.vertexShader,fragmentShader:fr.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(A.colorSpace)!==at,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||h!==A.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,u=A,h=A.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,w){_.getRGB(Yl,J_(t)),r.buffers.color.setClear(Yl.r,Yl.g,Yl.b,w,a)}function v(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,w=1){o.set(_),l=w,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(o,l)},render:g,addToRenderList:p,dispose:v}}function A2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},i=h(null);let s=i,a=!1;function o(S,N,O,B,q){let Q=!1;const W=u(B,O,N);s!==W&&(s=W,c(s.object)),Q=m(S,B,O,q),Q&&x(S,B,O,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,w(S,N,O,B),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function u(S,N,O){const B=O.wireframe===!0;let q=r[S.id];q===void 0&&(q={},r[S.id]=q);let Q=q[N.id];Q===void 0&&(Q={},q[N.id]=Q);let W=Q[B];return W===void 0&&(W=h(l()),Q[B]=W),W}function h(S){const N=[],O=[],B=[];for(let q=0;q<n;q++)N[q]=0,O[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:B,object:S,attributes:{},index:null}}function m(S,N,O,B){const q=s.attributes,Q=N.attributes;let W=0;const Z=O.getAttributes();for(const k in Z)if(Z[k].location>=0){const J=q[k];let ae=Q[k];if(ae===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;W++}return s.attributesNum!==W||s.index!==B}function x(S,N,O,B){const q={},Q=N.attributes;let W=0;const Z=O.getAttributes();for(const k in Z)if(Z[k].location>=0){let J=Q[k];J===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),q[k]=ae,W++}s.attributes=q,s.attributesNum=W,s.index=B}function g(){const S=s.newAttributes;for(let N=0,O=S.length;N<O;N++)S[N]=0}function p(S){d(S,0)}function d(S,N){const O=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;O[S]=1,B[S]===0&&(t.enableVertexAttribArray(S),B[S]=1),q[S]!==N&&(t.vertexAttribDivisor(S,N),q[S]=N)}function v(){const S=s.newAttributes,N=s.enabledAttributes;for(let O=0,B=N.length;O<B;O++)N[O]!==S[O]&&(t.disableVertexAttribArray(O),N[O]=0)}function _(S,N,O,B,q,Q,W){W===!0?t.vertexAttribIPointer(S,N,O,q,Q):t.vertexAttribPointer(S,N,O,B,q,Q)}function w(S,N,O,B){g();const q=B.attributes,Q=O.getAttributes(),W=N.defaultAttributeValues;for(const Z in Q){const k=Q[Z];if(k.location>=0){let X=q[Z];if(X===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){const J=X.normalized,ae=X.itemSize,we=e.get(X);if(we===void 0)continue;const Ye=we.buffer,$=we.type,oe=we.bytesPerElement,me=$===t.INT||$===t.UNSIGNED_INT||X.gpuType===Gp;if(X.isInterleavedBufferAttribute){const le=X.data,Ce=le.stride,Ze=X.offset;if(le.isInstancedInterleavedBuffer){for(let Pe=0;Pe<k.locationSize;Pe++)d(k.location+Pe,le.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Pe=0;Pe<k.locationSize;Pe++)p(k.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let Pe=0;Pe<k.locationSize;Pe++)_(k.location+Pe,ae/k.locationSize,$,J,Ce*oe,(Ze+ae/k.locationSize*Pe)*oe,me)}else{if(X.isInstancedBufferAttribute){for(let le=0;le<k.locationSize;le++)d(k.location+le,X.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let le=0;le<k.locationSize;le++)p(k.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let le=0;le<k.locationSize;le++)_(k.location+le,ae/k.locationSize,$,J,ae*oe,ae/k.locationSize*le*oe,me)}}else if(W!==void 0){const J=W[Z];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(k.location,J);break;case 3:t.vertexAttrib3fv(k.location,J);break;case 4:t.vertexAttrib4fv(k.location,J);break;default:t.vertexAttrib1fv(k.location,J)}}}}v()}function A(){P();for(const S in r){const N=r[S];for(const O in N){const B=N[O];for(const q in B)f(B[q].object),delete B[q];delete N[O]}delete r[S]}}function C(S){if(r[S.id]===void 0)return;const N=r[S.id];for(const O in N){const B=N[O];for(const q in B)f(B[q].object),delete B[q];delete N[O]}delete r[S.id]}function T(S){for(const N in r){const O=r[N];if(O[S.id]===void 0)continue;const B=O[S.id];for(const q in B)f(B[q].object),delete B[q];delete O[S.id]}}function P(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:v}}function C2(t,e,n){let r;function i(c){r=c}function s(c,f){t.drawArrays(r,c,f),n.update(f,r,1)}function a(c,f,u){u!==0&&(t.drawArraysInstanced(r,c,f,u),n.update(f,r,u))}function o(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=f[x];n.update(m,r,1)}function l(c,f,u,h){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)a(c[x],f[x],h[x]);else{m.multiDrawArraysInstancedWEBGL(r,c,0,f,0,h,0,u);let x=0;for(let g=0;g<u;g++)x+=f[g]*h[g];n.update(x,r,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function R2(t,e,n,r){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Jn&&r.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Hr&&r.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Nr&&!P)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:A,maxSamples:C}}function P2(t){const e=this;let n=null,r=0,i=!1,s=!1;const a=new ji,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||r!==0||i;return i=h,r=u.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){n=f(u,h,0)},this.setState=function(u,h,m){const x=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,d=t.get(u);if(!i||x===null||x.length===0||s&&!p)s?f(null):c();else{const v=s?0:r,_=v*4;let w=d.clippingState||null;l.value=w,w=f(x,h,_,m);for(let A=0;A!==_;++A)w[A]=n[A];d.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function f(u,h,m,x){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,x!==!0||p===null){const d=m+g*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let _=0,w=m;_!==g;++_,w+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function D2(t){let e=new WeakMap;function n(a,o){return o===nh?a.mapping=Ca:o===rh&&(a.mapping=Ra),a}function r(a){if(a&&a.isTexture){const o=a.mapping;if(o===nh||o===rh)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kC(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",i),n(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}const Js=4,pv=[.125,.215,.35,.446,.526,.582],qi=20,Hd=new VC,mv=new it;let Vd=null,Gd=0,Wd=0,jd=!1;const Xi=(1+Math.sqrt(5))/2,Bs=1/Xi,gv=[new G(-Xi,Bs,0),new G(Xi,Bs,0),new G(-Bs,0,Xi),new G(Bs,0,Xi),new G(0,Xi,-Bs),new G(0,Xi,Bs),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],N2=new G;class vv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100,s={}){const{size:a=256,position:o=N2}=s;Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,i,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,Gd,Wd),this._renderer.xr.enabled=jd,e.scissorTest=!1,Kl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ca||e.mapping===Ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:mr,minFilter:mr,generateMipmaps:!1,type:Qo,format:Jn,colorSpace:Pa,depthBuffer:!1},i=yv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yv(e,n,r);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I2(s)),this._blurMaterial=k2(s,e,n)}return i}_compileMaterial(e){const n=new kr(this._lodPlanes[0],e);this._renderer.compile(n,Hd)}_sceneToCubeUV(e,n,r,i,s){const l=new kn(90,1,n,r),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,m=u.toneMapping;u.getClearColor(mv),u.toneMapping=Ti,u.autoClear=!1;const x=new K_({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new kr(new nl,x);let p=!1;const d=e.background;d?d.isColor&&(x.color.copy(d),e.background=null,p=!0):(x.color.copy(mv),p=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[v],s.y,s.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[v]));const w=this._cubeSize;Kl(i,_*w,v>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=m,u.autoClear=h,e.background=d}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===Ca||e.mapping===Ra;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xv());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new kr(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Kl(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(a,Hd)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gv[(i-s-1)%gv.length];this._blur(e,s-1,s,a,o)}n.autoClear=r}_blur(e,n,r,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,r,i,"latitudinal",s),this._halfBlur(a,e,r,r,i,"longitudinal",s)}_halfBlur(e,n,r,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new kr(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[r]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*qi-1),g=s/x,p=isFinite(s)?1+Math.floor(f*g):qi;p>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qi}`);const d=[];let v=0;for(let T=0;T<qi;++T){const P=T/g,M=Math.exp(-P*P/2);d.push(M),T===0?v+=M:T<p&&(v+=2*M)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=x,h.mipInt.value=_-r;const w=this._sizeLods[i],A=3*w*(i>_-Js?i-_+Js:0),C=4*(this._cubeSize-w);Kl(n,A,C,3*w,2*w),l.setRenderTarget(n),l.render(u,Hd)}}function I2(t){const e=[],n=[],r=[];let i=t;const s=t-Js+1+pv.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);n.push(o);let l=1/o;a>t-Js?l=pv[a-t+Js-1]:a===0&&(l=0),r.push(l);const c=1/(o-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],m=6,x=6,g=3,p=2,d=1,v=new Float32Array(g*x*m),_=new Float32Array(p*x*m),w=new Float32Array(d*x*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,P=C>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(M,g*x*C),_.set(h,p*x*C);const S=[C,C,C,C,C,C];w.set(S,d*x*C)}const A=new jr;A.setAttribute("position",new On(v,g)),A.setAttribute("uv",new On(_,p)),A.setAttribute("faceIndex",new On(w,d)),e.push(A),i>Js&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function yv(t,e,n){const r=new gs(t,e,n);return r.texture.mapping=wu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Kl(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function k2(t,e,n){const r=new Float32Array(qi),i=new G(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kp(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function xv(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kp(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function _v(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Kp(){return`

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
	`}function L2(t){let e=new WeakMap,n=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===nh||l===rh,f=l===Ca||l===Ra;if(c||f){let u=e.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new vv(t)),u=c?n.fromEquirectangular(o,u):n.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||f&&m&&i(m)?(n===null&&(n=new vv(t)),u=c?n.fromEquirectangular(o):n.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:a}}function U2(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const i=n(r);return i===null&&xc("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function F2(t,e,n,r){const i={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete i[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(u,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,n.memory.geometries++),h}function l(u){const h=u.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER)}function c(u){const h=[],m=u.index,x=u.attributes.position;let g=0;if(m!==null){const v=m.array;g=m.version;for(let _=0,w=v.length;_<w;_+=3){const A=v[_+0],C=v[_+1],T=v[_+2];h.push(A,C,C,T,T,A)}}else if(x!==void 0){const v=x.array;g=x.version;for(let _=0,w=v.length/3-1;_<w;_+=3){const A=_+0,C=_+1,T=_+2;h.push(A,C,C,T,T,A)}}else return;const p=new(j_(h)?Z_:Q_)(h,1);p.version=g;const d=s.get(u);d&&e.remove(d),s.set(u,p)}function f(u){const h=s.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function O2(t,e,n){let r;function i(h){r=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){t.drawElements(r,m,s,h*a),n.update(m,r,1)}function c(h,m,x){x!==0&&(t.drawElementsInstanced(r,m,s,h*a,x),n.update(m,r,x))}function f(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,s,h,0,x);let p=0;for(let d=0;d<x;d++)p+=m[d];n.update(p,r,1)}function u(h,m,x,g){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/a,m[d],g[d]);else{p.multiDrawElementsInstancedWEBGL(r,m,0,s,h,0,g,0,x);let d=0;for(let v=0;v<x;v++)d+=m[v]*g[v];n.update(d,r,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function B2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function z2(t,e,n){const r=new WeakMap,i=new Tt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let h=r.get(o);if(h===void 0||h.count!==u){let S=function(){P.dispose(),r.delete(o),o.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let w=0;x===!0&&(w=1),g===!0&&(w=2),p===!0&&(w=3);let A=o.attributes.position.count*w,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*C*4*u),P=new X_(T,A,C,u);P.type=Nr,P.needsUpdate=!0;const M=w*4;for(let N=0;N<u;N++){const O=d[N],B=v[N],q=_[N],Q=A*C*4*N;for(let W=0;W<O.count;W++){const Z=W*M;x===!0&&(i.fromBufferAttribute(O,W),T[Q+Z+0]=i.x,T[Q+Z+1]=i.y,T[Q+Z+2]=i.z,T[Q+Z+3]=0),g===!0&&(i.fromBufferAttribute(B,W),T[Q+Z+4]=i.x,T[Q+Z+5]=i.y,T[Q+Z+6]=i.z,T[Q+Z+7]=0),p===!0&&(i.fromBufferAttribute(q,W),T[Q+Z+8]=i.x,T[Q+Z+9]=i.y,T[Q+Z+10]=i.z,T[Q+Z+11]=q.itemSize===4?i.w:1)}}h={count:u,texture:P,size:new ot(A,C)},r.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let p=0;p<c.length;p++)x+=c[p];const g=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function H2(t,e,n,r){let i=new WeakMap;function s(l){const c=r.render.frame,f=l.geometry,u=e.get(l,f);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const aS=new pn,Sv=new iS(1,1),oS=new X_,lS=new vC,cS=new tS,wv=[],bv=[],Mv=new Float32Array(16),Ev=new Float32Array(9),Tv=new Float32Array(4);function Oa(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let s=wv[i];if(s===void 0&&(s=new Float32Array(i),wv[i]=s),e!==0){r.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function Eu(t,e){let n=bv[e];n===void 0&&(n=new Int32Array(e),bv[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function V2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function G2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function W2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function j2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function X2(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(It(n,r))return;Tv.set(r),t.uniformMatrix2fv(this.addr,!1,Tv),kt(n,r)}}function $2(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(It(n,r))return;Ev.set(r),t.uniformMatrix3fv(this.addr,!1,Ev),kt(n,r)}}function q2(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(It(n,r))return;Mv.set(r),t.uniformMatrix4fv(this.addr,!1,Mv),kt(n,r)}}function Y2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function K2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function Q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function J2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function eD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function tD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function nD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function rD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);let s;this.type===t.SAMPLER_2D_SHADOW?(Sv.compareFunction=W_,s=Sv):s=aS,n.setTexture2D(e||s,i)}function iD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||lS,i)}function sD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||cS,i)}function aD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||oS,i)}function oD(t){switch(t){case 5126:return V2;case 35664:return G2;case 35665:return W2;case 35666:return j2;case 35674:return X2;case 35675:return $2;case 35676:return q2;case 5124:case 35670:return Y2;case 35667:case 35671:return K2;case 35668:case 35672:return Q2;case 35669:case 35673:return Z2;case 5125:return J2;case 36294:return eD;case 36295:return tD;case 36296:return nD;case 35678:case 36198:case 36298:case 36306:case 35682:return rD;case 35679:case 36299:case 36307:return iD;case 35680:case 36300:case 36308:case 36293:return sD;case 36289:case 36303:case 36311:case 36292:return aD}}function lD(t,e){t.uniform1fv(this.addr,e)}function cD(t,e){const n=Oa(e,this.size,2);t.uniform2fv(this.addr,n)}function uD(t,e){const n=Oa(e,this.size,3);t.uniform3fv(this.addr,n)}function dD(t,e){const n=Oa(e,this.size,4);t.uniform4fv(this.addr,n)}function fD(t,e){const n=Oa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hD(t,e){const n=Oa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pD(t,e){const n=Oa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mD(t,e){t.uniform1iv(this.addr,e)}function gD(t,e){t.uniform2iv(this.addr,e)}function vD(t,e){t.uniform3iv(this.addr,e)}function yD(t,e){t.uniform4iv(this.addr,e)}function xD(t,e){t.uniform1uiv(this.addr,e)}function _D(t,e){t.uniform2uiv(this.addr,e)}function SD(t,e){t.uniform3uiv(this.addr,e)}function wD(t,e){t.uniform4uiv(this.addr,e)}function bD(t,e,n){const r=this.cache,i=e.length,s=Eu(n,i);It(r,s)||(t.uniform1iv(this.addr,s),kt(r,s));for(let a=0;a!==i;++a)n.setTexture2D(e[a]||aS,s[a])}function MD(t,e,n){const r=this.cache,i=e.length,s=Eu(n,i);It(r,s)||(t.uniform1iv(this.addr,s),kt(r,s));for(let a=0;a!==i;++a)n.setTexture3D(e[a]||lS,s[a])}function ED(t,e,n){const r=this.cache,i=e.length,s=Eu(n,i);It(r,s)||(t.uniform1iv(this.addr,s),kt(r,s));for(let a=0;a!==i;++a)n.setTextureCube(e[a]||cS,s[a])}function TD(t,e,n){const r=this.cache,i=e.length,s=Eu(n,i);It(r,s)||(t.uniform1iv(this.addr,s),kt(r,s));for(let a=0;a!==i;++a)n.setTexture2DArray(e[a]||oS,s[a])}function AD(t){switch(t){case 5126:return lD;case 35664:return cD;case 35665:return uD;case 35666:return dD;case 35674:return fD;case 35675:return hD;case 35676:return pD;case 5124:case 35670:return mD;case 35667:case 35671:return gD;case 35668:case 35672:return vD;case 35669:case 35673:return yD;case 5125:return xD;case 36294:return _D;case 36295:return SD;case 36296:return wD;case 35678:case 36198:case 36298:case 36306:case 35682:return bD;case 35679:case 36299:case 36307:return MD;case 35680:case 36300:case 36308:case 36293:return ED;case 36289:case 36303:case 36311:case 36292:return TD}}class CD{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=oD(n.type)}}class RD{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AD(n.type)}}class PD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,n[o.id],r)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function Av(t,e){t.seq.push(e),t.map[e.id]=e}function DD(t,e,n){const r=t.name,i=r.length;for(Xd.lastIndex=0;;){const s=Xd.exec(r),a=Xd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Av(n,c===void 0?new CD(o,t,e):new RD(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new PD(o),Av(n,u)),n=u}}}class _c{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const s=e.getActiveUniform(n,i),a=e.getUniformLocation(n,s.name);DD(s,a,this)}}setValue(e,n,r,i){const s=this.map[n];s!==void 0&&s.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in n&&r.push(a)}return r}}function Cv(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const ND=37297;let ID=0;function kD(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=i;a<s;a++){const o=a+1;r.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return r.join(`
`)}const Rv=new Ue;function LD(t){Qe._getMatrix(Rv,Qe.workingColorSpace,t);const e=`mat3( ${Rv.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case Yc:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Pv(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+i+`

`+kD(t.getShaderSource(e),a)}else return i}function UD(t,e){const n=LD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function FD(t,e){let n;switch(e){case VA:n="Linear";break;case GA:n="Reinhard";break;case WA:n="Cineon";break;case jA:n="ACESFilmic";break;case $A:n="AgX";break;case qA:n="Neutral";break;case XA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ql=new G;function OD(){Qe.getLuminanceCoefficients(Ql);const t=Ql.x.toFixed(4),e=Ql.y.toFixed(4),n=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function zD(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function HD(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const s=t.getActiveAttrib(e,i),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function lo(t){return t!==""}function Dv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VD=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(t){return t.replace(VD,WD)}const GD=new Map;function WD(t,e){let n=Be[e];if(n===void 0){const r=GD.get(e);if(r!==void 0)n=Be[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kh(n)}const jD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iv(t){return t.replace(jD,XD)}function XD(t,e,n,r){let i="";for(let s=parseInt(e);s<parseInt(n);s++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function kv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function $D(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===D_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===SA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Er&&(e="SHADOWMAP_TYPE_VSM"),e}function qD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ca:case Ra:e="ENVMAP_TYPE_CUBE";break;case wu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ra:e="ENVMAP_MODE_REFRACTION";break}return e}function KD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case N_:e="ENVMAP_BLENDING_MULTIPLY";break;case zA:e="ENVMAP_BLENDING_MIX";break;case HA:e="ENVMAP_BLENDING_ADD";break}return e}function QD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function ZD(t,e,n,r){const i=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=$D(n),c=qD(n),f=YD(n),u=KD(n),h=QD(n),m=BD(n),x=zD(s),g=i.createProgram();let p,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(lo).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(lo).join(`
`),d.length>0&&(d+=`
`)):(p=[kv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),d=[kv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ti?"#define TONE_MAPPING":"",n.toneMapping!==Ti?Be.tonemapping_pars_fragment:"",n.toneMapping!==Ti?FD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,UD("linearToOutputTexel",n.outputColorSpace),OD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(lo).join(`
`)),a=kh(a),a=Dv(a,n),a=Nv(a,n),o=kh(o),o=Dv(o,n),o=Nv(o,n),a=Iv(a),o=Iv(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",n.glslVersion===$g?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=v+p+a,w=v+d+o,A=Cv(i,i.VERTEX_SHADER,_),C=Cv(i,i.FRAGMENT_SHADER,w);i.attachShader(g,A),i.attachShader(g,C),n.index0AttributeName!==void 0?i.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(N){if(t.debug.checkShaderErrors){const O=i.getProgramInfoLog(g).trim(),B=i.getShaderInfoLog(A).trim(),q=i.getShaderInfoLog(C).trim();let Q=!0,W=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,g,A,C);else{const Z=Pv(i,A,"vertex"),k=Pv(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+Z+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||q==="")&&(W=!1);W&&(N.diagnostics={runnable:Q,programLog:O,vertexShader:{log:B,prefix:p},fragmentShader:{log:q,prefix:d}})}i.deleteShader(A),i.deleteShader(C),P=new _c(i,g),M=HD(i,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,ND)),S},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ID++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=C,this}let JD=0;class eN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),s=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new tN(e),n.set(e,r)),r}}class tN{constructor(e){this.id=JD++,this.code=e,this.usedTimes=0}}function nN(t,e,n,r,i,s,a){const o=new q_,l=new eN,c=new Set,f=[],u=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,S,N,O,B){const q=O.fog,Q=B.geometry,W=M.isMeshStandardMaterial?O.environment:null,Z=(M.isMeshStandardMaterial?n:e).get(M.envMap||W),k=Z&&Z.mapping===wu?Z.image.height:null,X=x[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const J=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ae=J!==void 0?J.length:0;let we=0;Q.morphAttributes.position!==void 0&&(we=1),Q.morphAttributes.normal!==void 0&&(we=2),Q.morphAttributes.color!==void 0&&(we=3);let Ye,$,oe,me;if(X){const nt=fr[X];Ye=nt.vertexShader,$=nt.fragmentShader}else Ye=M.vertexShader,$=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const le=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),Ze=B.isInstancedMesh===!0,Pe=B.isBatchedMesh===!0,Mt=!!M.map,gt=!!M.matcap,Ve=!!Z,I=!!M.aoMap,Tn=!!M.lightMap,je=!!M.bumpMap,Ge=!!M.normalMap,Ee=!!M.displacementMap,ut=!!M.emissiveMap,Me=!!M.metalnessMap,R=!!M.roughnessMap,b=M.anisotropy>0,z=M.clearcoat>0,ee=M.dispersion>0,ne=M.iridescence>0,Y=M.sheen>0,be=M.transmission>0,de=b&&!!M.anisotropyMap,ye=z&&!!M.clearcoatMap,Xe=z&&!!M.clearcoatNormalMap,se=z&&!!M.clearcoatRoughnessMap,xe=ne&&!!M.iridescenceMap,Re=ne&&!!M.iridescenceThicknessMap,Ne=Y&&!!M.sheenColorMap,_e=Y&&!!M.sheenRoughnessMap,We=!!M.specularMap,Fe=!!M.specularColorMap,lt=!!M.specularIntensityMap,L=be&&!!M.transmissionMap,fe=be&&!!M.thicknessMap,j=!!M.gradientMap,te=!!M.alphaMap,pe=M.alphaTest>0,he=!!M.alphaHash,ke=!!M.extensions;let _t=Ti;M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Vt={shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:Ye,fragmentShader:$,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Pe,batchingColor:Pe&&B._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&B.instanceColor!==null,instancingMorph:Ze&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Pa,alphaToCoverage:!!M.alphaToCoverage,map:Mt,matcap:gt,envMap:Ve,envMapMode:Ve&&Z.mapping,envMapCubeUVHeight:k,aoMap:I,lightMap:Tn,bumpMap:je,normalMap:Ge,displacementMap:h&&Ee,emissiveMap:ut,normalMapObjectSpace:Ge&&M.normalMapType===JA,normalMapTangentSpace:Ge&&M.normalMapType===ZA,metalnessMap:Me,roughnessMap:R,anisotropy:b,anisotropyMap:de,clearcoat:z,clearcoatMap:ye,clearcoatNormalMap:Xe,clearcoatRoughnessMap:se,dispersion:ee,iridescence:ne,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:Y,sheenColorMap:Ne,sheenRoughnessMap:_e,specularMap:We,specularColorMap:Fe,specularIntensityMap:lt,transmission:be,transmissionMap:L,thicknessMap:fe,gradientMap:j,opaque:M.transparent===!1&&M.blending===la&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:pe,alphaHash:he,combine:M.combine,mapUv:Mt&&g(M.map.channel),aoMapUv:I&&g(M.aoMap.channel),lightMapUv:Tn&&g(M.lightMap.channel),bumpMapUv:je&&g(M.bumpMap.channel),normalMapUv:Ge&&g(M.normalMap.channel),displacementMapUv:Ee&&g(M.displacementMap.channel),emissiveMapUv:ut&&g(M.emissiveMap.channel),metalnessMapUv:Me&&g(M.metalnessMap.channel),roughnessMapUv:R&&g(M.roughnessMap.channel),anisotropyMapUv:de&&g(M.anisotropyMap.channel),clearcoatMapUv:ye&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(M.sheenRoughnessMap.channel),specularMapUv:We&&g(M.specularMap.channel),specularColorMapUv:Fe&&g(M.specularColorMap.channel),specularIntensityMapUv:lt&&g(M.specularIntensityMap.channel),transmissionMapUv:L&&g(M.transmissionMap.channel),thicknessMapUv:fe&&g(M.thicknessMap.channel),alphaMapUv:te&&g(M.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ge||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Q.attributes.uv&&(Mt||te),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ce,skinning:B.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:we,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:Mt&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===at,decodeVideoTextureEmissive:ut&&M.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(M.emissiveMap.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Rr,flipSided:M.side===hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ke&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&M.extensions.multiDraw===!0||Pe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)S.push(N),S.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(v(S,M),_(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function w(M){const S=x[M.type];let N;if(S){const O=fr[S];N=PC.clone(O.uniforms)}else N=M.uniforms;return N}function A(M,S){let N;for(let O=0,B=f.length;O<B;O++){const q=f[O];if(q.cacheKey===S){N=q,++N.usedTimes;break}}return N===void 0&&(N=new ZD(t,S,M,s),f.push(N)),N}function C(M){if(--M.usedTimes===0){const S=f.indexOf(M);f[S]=f[f.length-1],f.pop(),M.destroy()}}function T(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:w,acquireProgram:A,releaseProgram:C,releaseShaderCache:T,programs:f,dispose:P}}function rN(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function r(a){t.delete(a)}function i(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:r,update:i,dispose:s}}function iN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Lv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Uv(){const t=[];let e=0;const n=[],r=[],i=[];function s(){e=0,n.length=0,r.length=0,i.length=0}function a(u,h,m,x,g,p){let d=t[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:m,groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},t[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=m,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=g,d.group=p),e++,d}function o(u,h,m,x,g,p){const d=a(u,h,m,x,g,p);m.transmission>0?r.push(d):m.transparent===!0?i.push(d):n.push(d)}function l(u,h,m,x,g,p){const d=a(u,h,m,x,g,p);m.transmission>0?r.unshift(d):m.transparent===!0?i.unshift(d):n.unshift(d)}function c(u,h){n.length>1&&n.sort(u||iN),r.length>1&&r.sort(h||Lv),i.length>1&&i.sort(h||Lv)}function f(){for(let u=e,h=t.length;u<h;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:r,transparent:i,init:s,push:o,unshift:l,finish:f,sort:c}}function sN(){let t=new WeakMap;function e(r,i){const s=t.get(r);let a;return s===void 0?(a=new Uv,t.set(r,[a])):i>=s.length?(a=new Uv,s.push(a)):a=s[i],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function aN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new it};break;case"SpotLight":n={position:new G,direction:new G,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function oN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let lN=0;function cN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function uN(t){const e=new aN,n=oN(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new G);const i=new G,s=new At,a=new At;function o(c){let f=0,u=0,h=0;for(let M=0;M<9;M++)r.probe[M].set(0,0,0);let m=0,x=0,g=0,p=0,d=0,v=0,_=0,w=0,A=0,C=0,T=0;c.sort(cN);for(let M=0,S=c.length;M<S;M++){const N=c[M],O=N.color,B=N.intensity,q=N.distance,Q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=O.r*B,u+=O.g*B,h+=O.b*B;else if(N.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(N.sh.coefficients[W],B);T++}else if(N.isDirectionalLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Z=N.shadow,k=n.get(N);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,r.directionalShadow[m]=k,r.directionalShadowMap[m]=Q,r.directionalShadowMatrix[m]=N.shadow.matrix,v++}r.directional[m]=W,m++}else if(N.isSpotLight){const W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(O).multiplyScalar(B),W.distance=q,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,r.spot[g]=W;const Z=N.shadow;if(N.map&&(r.spotLightMap[A]=N.map,A++,Z.updateMatrices(N),N.castShadow&&C++),r.spotLightMatrix[g]=Z.matrix,N.castShadow){const k=n.get(N);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,r.spotShadow[g]=k,r.spotShadowMap[g]=Q,w++}g++}else if(N.isRectAreaLight){const W=e.get(N);W.color.copy(O).multiplyScalar(B),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),r.rectArea[p]=W,p++}else if(N.isPointLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){const Z=N.shadow,k=n.get(N);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,r.pointShadow[x]=k,r.pointShadowMap[x]=Q,r.pointShadowMatrix[x]=N.shadow.matrix,_++}r.point[x]=W,x++}else if(N.isHemisphereLight){const W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(B),W.groundColor.copy(N.groundColor).multiplyScalar(B),r.hemi[d]=W,d++}}p>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2)),r.ambient[0]=f,r.ambient[1]=u,r.ambient[2]=h;const P=r.hash;(P.directionalLength!==m||P.pointLength!==x||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==d||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==w||P.numSpotMaps!==A||P.numLightProbes!==T)&&(r.directional.length=m,r.spot.length=g,r.rectArea.length=p,r.point.length=x,r.hemi.length=d,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=_,r.spotLightMatrix.length=w+A-C,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=T,P.directionalLength=m,P.pointLength=x,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=d,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=w,P.numSpotMaps=A,P.numLightProbes=T,r.version=lN++)}function l(c,f){let u=0,h=0,m=0,x=0,g=0;const p=f.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const _=c[d];if(_.isDirectionalLight){const w=r.directional[u];w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),u++}else if(_.isSpotLight){const w=r.spot[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const w=r.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),a.identity(),s.copy(_.matrixWorld),s.premultiply(p),a.extractRotation(s),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const w=r.point[h];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),h++}else if(_.isHemisphereLight){const w=r.hemi[g];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:r}}function Fv(t){const e=new uN(t),n=[],r=[];function i(f){c.camera=f,n.length=0,r.length=0}function s(f){n.push(f)}function a(f){r.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function dN(t){let e=new WeakMap;function n(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Fv(t),e.set(i,[o])):s>=a.length?(o=new Fv(t),a.push(o)):o=a[s],o}function r(){e=new WeakMap}return{get:n,dispose:r}}const fN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hN=`uniform sampler2D shadow_pass;
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
}`;function pN(t,e,n){let r=new nS;const i=new ot,s=new ot,a=new Tt,o=new zC({depthPacking:QA}),l=new HC,c={},f=n.maxTextureSize,u={[Ri]:hn,[hn]:Ri,[Rr]:Rr},h=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:fN,fragmentShader:hN}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new jr;x.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new kr(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D_;let d=this.type;this.render=function(C,T,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Ei),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=d!==Er&&this.type===Er,q=d===Er&&this.type!==Er;for(let Q=0,W=C.length;Q<W;Q++){const Z=C[Q],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const X=k.getFrameExtents();if(i.multiply(X),s.copy(k.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/X.x),i.x=s.x*X.x,k.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/X.y),i.y=s.y*X.y,k.mapSize.y=s.y)),k.map===null||B===!0||q===!0){const ae=this.type!==Er?{minFilter:nr,magFilter:nr}:{};k.map!==null&&k.map.dispose(),k.map=new gs(i.x,i.y,ae),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const J=k.getViewportCount();for(let ae=0;ae<J;ae++){const we=k.getViewport(ae);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),O.viewport(a),k.updateMatrices(Z,ae),r=k.getFrustum(),w(T,P,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===Er&&v(k,P),k.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(M,S,N)};function v(C,T){const P=e.update(g);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gs(i.x,i.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,P,h,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,P,m,g,null)}function _(C,T,P,M){let S=null;const N=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)S=N;else if(S=P.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=S.uuid,B=T.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let Q=q[B];Q===void 0&&(Q=S.clone(),q[B]=Q,T.addEventListener("dispose",A)),S=Q}if(S.visible=T.visible,S.wireframe=T.wireframe,M===Er?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=t.properties.get(S);O.light=P}return S}function w(C,T,P,M,S){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Er)&&(!C.frustumCulled||r.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const B=e.update(C),q=C.material;if(Array.isArray(q)){const Q=B.groups;for(let W=0,Z=Q.length;W<Z;W++){const k=Q[W],X=q[k.materialIndex];if(X&&X.visible){const J=_(C,X,M,S);C.onBeforeShadow(t,C,T,P,B,J,k),t.renderBufferDirect(P,null,B,J,C,k),C.onAfterShadow(t,C,T,P,B,J,k)}}}else if(q.visible){const Q=_(C,q,M,S);C.onBeforeShadow(t,C,T,P,B,Q,null),t.renderBufferDirect(P,null,B,Q,C,null),C.onAfterShadow(t,C,T,P,B,Q,null)}}const O=C.children;for(let B=0,q=O.length;B<q;B++)w(O[B],T,P,M,S)}function A(C){C.target.removeEventListener("dispose",A);for(const P in c){const M=c[P],S=C.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const mN={[Yf]:Kf,[Qf]:eh,[Zf]:th,[Aa]:Jf,[Kf]:Yf,[eh]:Qf,[th]:Zf,[Jf]:Aa};function gN(t,e){function n(){let L=!1;const fe=new Tt;let j=null;const te=new Tt(0,0,0,0);return{setMask:function(pe){j!==pe&&!L&&(t.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){L=pe},setClear:function(pe,he,ke,_t,Vt){Vt===!0&&(pe*=_t,he*=_t,ke*=_t),fe.set(pe,he,ke,_t),te.equals(fe)===!1&&(t.clearColor(pe,he,ke,_t),te.copy(fe))},reset:function(){L=!1,j=null,te.set(-1,0,0,0)}}}function r(){let L=!1,fe=!1,j=null,te=null,pe=null;return{setReversed:function(he){if(fe!==he){const ke=e.get("EXT_clip_control");he?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),fe=he;const _t=pe;pe=null,this.setClear(_t)}},getReversed:function(){return fe},setTest:function(he){he?le(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(he){j!==he&&!L&&(t.depthMask(he),j=he)},setFunc:function(he){if(fe&&(he=mN[he]),te!==he){switch(he){case Yf:t.depthFunc(t.NEVER);break;case Kf:t.depthFunc(t.ALWAYS);break;case Qf:t.depthFunc(t.LESS);break;case Aa:t.depthFunc(t.LEQUAL);break;case Zf:t.depthFunc(t.EQUAL);break;case Jf:t.depthFunc(t.GEQUAL);break;case eh:t.depthFunc(t.GREATER);break;case th:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=he}},setLocked:function(he){L=he},setClear:function(he){pe!==he&&(fe&&(he=1-he),t.clearDepth(he),pe=he)},reset:function(){L=!1,j=null,te=null,pe=null,fe=!1}}}function i(){let L=!1,fe=null,j=null,te=null,pe=null,he=null,ke=null,_t=null,Vt=null;return{setTest:function(nt){L||(nt?le(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(nt){fe!==nt&&!L&&(t.stencilMask(nt),fe=nt)},setFunc:function(nt,Hn,yr){(j!==nt||te!==Hn||pe!==yr)&&(t.stencilFunc(nt,Hn,yr),j=nt,te=Hn,pe=yr)},setOp:function(nt,Hn,yr){(he!==nt||ke!==Hn||_t!==yr)&&(t.stencilOp(nt,Hn,yr),he=nt,ke=Hn,_t=yr)},setLocked:function(nt){L=nt},setClear:function(nt){Vt!==nt&&(t.clearStencil(nt),Vt=nt)},reset:function(){L=!1,fe=null,j=null,te=null,pe=null,he=null,ke=null,_t=null,Vt=null}}}const s=new n,a=new r,o=new i,l=new WeakMap,c=new WeakMap;let f={},u={},h=new WeakMap,m=[],x=null,g=!1,p=null,d=null,v=null,_=null,w=null,A=null,C=null,T=new it(0,0,0),P=0,M=!1,S=null,N=null,O=null,B=null,q=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=Z>=2);let X=null,J={};const ae=t.getParameter(t.SCISSOR_BOX),we=t.getParameter(t.VIEWPORT),Ye=new Tt().fromArray(ae),$=new Tt().fromArray(we);function oe(L,fe,j,te){const pe=new Uint8Array(4),he=t.createTexture();t.bindTexture(L,he),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ke=0;ke<j;ke++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(fe+ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return he}const me={};me[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(t.DEPTH_TEST),a.setFunc(Aa),je(!1),Ge(Hg),le(t.CULL_FACE),I(Ei);function le(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function Ce(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function Ze(L,fe){return u[L]!==fe?(t.bindFramebuffer(L,fe),u[L]=fe,L===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),L===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Pe(L,fe){let j=m,te=!1;if(L){j=h.get(fe),j===void 0&&(j=[],h.set(fe,j));const pe=L.textures;if(j.length!==pe.length||j[0]!==t.COLOR_ATTACHMENT0){for(let he=0,ke=pe.length;he<ke;he++)j[he]=t.COLOR_ATTACHMENT0+he;j.length=pe.length,te=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,te=!0);te&&t.drawBuffers(j)}function Mt(L){return x!==L?(t.useProgram(L),x=L,!0):!1}const gt={[$i]:t.FUNC_ADD,[bA]:t.FUNC_SUBTRACT,[MA]:t.FUNC_REVERSE_SUBTRACT};gt[EA]=t.MIN,gt[TA]=t.MAX;const Ve={[AA]:t.ZERO,[CA]:t.ONE,[RA]:t.SRC_COLOR,[$f]:t.SRC_ALPHA,[LA]:t.SRC_ALPHA_SATURATE,[IA]:t.DST_COLOR,[DA]:t.DST_ALPHA,[PA]:t.ONE_MINUS_SRC_COLOR,[qf]:t.ONE_MINUS_SRC_ALPHA,[kA]:t.ONE_MINUS_DST_COLOR,[NA]:t.ONE_MINUS_DST_ALPHA,[UA]:t.CONSTANT_COLOR,[FA]:t.ONE_MINUS_CONSTANT_COLOR,[OA]:t.CONSTANT_ALPHA,[BA]:t.ONE_MINUS_CONSTANT_ALPHA};function I(L,fe,j,te,pe,he,ke,_t,Vt,nt){if(L===Ei){g===!0&&(Ce(t.BLEND),g=!1);return}if(g===!1&&(le(t.BLEND),g=!0),L!==wA){if(L!==p||nt!==M){if((d!==$i||w!==$i)&&(t.blendEquation(t.FUNC_ADD),d=$i,w=$i),nt)switch(L){case la:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vg:t.blendFunc(t.ONE,t.ONE);break;case Gg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case la:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,_=null,A=null,C=null,T.set(0,0,0),P=0,p=L,M=nt}return}pe=pe||fe,he=he||j,ke=ke||te,(fe!==d||pe!==w)&&(t.blendEquationSeparate(gt[fe],gt[pe]),d=fe,w=pe),(j!==v||te!==_||he!==A||ke!==C)&&(t.blendFuncSeparate(Ve[j],Ve[te],Ve[he],Ve[ke]),v=j,_=te,A=he,C=ke),(_t.equals(T)===!1||Vt!==P)&&(t.blendColor(_t.r,_t.g,_t.b,Vt),T.copy(_t),P=Vt),p=L,M=!1}function Tn(L,fe){L.side===Rr?Ce(t.CULL_FACE):le(t.CULL_FACE);let j=L.side===hn;fe&&(j=!j),je(j),L.blending===la&&L.transparent===!1?I(Ei):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const te=L.stencilWrite;o.setTest(te),te&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ut(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(L){S!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),S=L)}function Ge(L){L!==xA?(le(t.CULL_FACE),L!==N&&(L===Hg?t.cullFace(t.BACK):L===_A?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),N=L}function Ee(L){L!==O&&(W&&t.lineWidth(L),O=L)}function ut(L,fe,j){L?(le(t.POLYGON_OFFSET_FILL),(B!==fe||q!==j)&&(t.polygonOffset(fe,j),B=fe,q=j)):Ce(t.POLYGON_OFFSET_FILL)}function Me(L){L?le(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function R(L){L===void 0&&(L=t.TEXTURE0+Q-1),X!==L&&(t.activeTexture(L),X=L)}function b(L,fe,j){j===void 0&&(X===null?j=t.TEXTURE0+Q-1:j=X);let te=J[j];te===void 0&&(te={type:void 0,texture:void 0},J[j]=te),(te.type!==L||te.texture!==fe)&&(X!==j&&(t.activeTexture(j),X=j),t.bindTexture(L,fe||me[L]),te.type=L,te.texture=fe)}function z(){const L=J[X];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ee(){try{t.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{t.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{t.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{t.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{t.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{t.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(L){Ye.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Ye.copy(L))}function _e(L){$.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function We(L,fe){let j=c.get(fe);j===void 0&&(j=new WeakMap,c.set(fe,j));let te=j.get(L);te===void 0&&(te=t.getUniformBlockIndex(fe,L.name),j.set(L,te))}function Fe(L,fe){const te=c.get(fe).get(L);l.get(fe)!==te&&(t.uniformBlockBinding(fe,te,L.__bindingPointIndex),l.set(fe,te))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},X=null,J={},u={},h=new WeakMap,m=[],x=null,g=!1,p=null,d=null,v=null,_=null,w=null,A=null,C=null,T=new it(0,0,0),P=0,M=!1,S=null,N=null,O=null,B=null,q=null,Ye.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Ce,bindFramebuffer:Ze,drawBuffers:Pe,useProgram:Mt,setBlending:I,setMaterial:Tn,setFlipSided:je,setCullFace:Ge,setLineWidth:Ee,setPolygonOffset:ut,setScissorTest:Me,activeTexture:R,bindTexture:b,unbindTexture:z,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:xe,texImage3D:Re,updateUBOMapping:We,uniformBlockBinding:Fe,texStorage2D:Xe,texStorage3D:se,texSubImage2D:Y,texSubImage3D:be,compressedTexSubImage2D:de,compressedTexSubImage3D:ye,scissor:Ne,viewport:_e,reset:lt}}function vN(t,e,n,r,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,f=new WeakMap;let u;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,b){return m?new OffscreenCanvas(R,b):Qc("canvas")}function g(R,b,z){let ee=1;const ne=Me(R);if((ne.width>z||ne.height>z)&&(ee=z/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(ee*ne.width),be=Math.floor(ee*ne.height);u===void 0&&(u=x(Y,be));const de=b?x(Y,be):u;return de.width=Y,de.height=be,de.getContext("2d").drawImage(R,0,0,Y,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Y+"x"+be+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function p(R){return R.generateMipmaps}function d(R){t.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,b,z,ee,ne=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=b;if(b===t.RED&&(z===t.FLOAT&&(Y=t.R32F),z===t.HALF_FLOAT&&(Y=t.R16F),z===t.UNSIGNED_BYTE&&(Y=t.R8)),b===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.R8UI),z===t.UNSIGNED_SHORT&&(Y=t.R16UI),z===t.UNSIGNED_INT&&(Y=t.R32UI),z===t.BYTE&&(Y=t.R8I),z===t.SHORT&&(Y=t.R16I),z===t.INT&&(Y=t.R32I)),b===t.RG&&(z===t.FLOAT&&(Y=t.RG32F),z===t.HALF_FLOAT&&(Y=t.RG16F),z===t.UNSIGNED_BYTE&&(Y=t.RG8)),b===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RG8UI),z===t.UNSIGNED_SHORT&&(Y=t.RG16UI),z===t.UNSIGNED_INT&&(Y=t.RG32UI),z===t.BYTE&&(Y=t.RG8I),z===t.SHORT&&(Y=t.RG16I),z===t.INT&&(Y=t.RG32I)),b===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),z===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),z===t.UNSIGNED_INT&&(Y=t.RGB32UI),z===t.BYTE&&(Y=t.RGB8I),z===t.SHORT&&(Y=t.RGB16I),z===t.INT&&(Y=t.RGB32I)),b===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),z===t.UNSIGNED_INT&&(Y=t.RGBA32UI),z===t.BYTE&&(Y=t.RGBA8I),z===t.SHORT&&(Y=t.RGBA16I),z===t.INT&&(Y=t.RGBA32I)),b===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),b===t.RGBA){const be=ne?Yc:Qe.getTransfer(ee);z===t.FLOAT&&(Y=t.RGBA32F),z===t.HALF_FLOAT&&(Y=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Y=be===at?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function w(R,b){let z;return R?b===null||b===ms||b===Bo?z=t.DEPTH24_STENCIL8:b===Nr?z=t.DEPTH32F_STENCIL8:b===Oo&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ms||b===Bo?z=t.DEPTH_COMPONENT24:b===Nr?z=t.DEPTH_COMPONENT32F:b===Oo&&(z=t.DEPTH_COMPONENT16),z}function A(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==nr&&R.minFilter!==mr?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){const b=R.target;b.removeEventListener("dispose",C),P(b),b.isVideoTexture&&f.delete(b)}function T(R){const b=R.target;b.removeEventListener("dispose",T),S(b)}function P(R){const b=r.get(R);if(b.__webglInit===void 0)return;const z=R.source,ee=h.get(z);if(ee){const ne=ee[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(R),Object.keys(ee).length===0&&h.delete(z)}r.remove(R)}function M(R){const b=r.get(R);t.deleteTexture(b.__webglTexture);const z=R.source,ee=h.get(z);delete ee[b.__cacheKey],a.memory.textures--}function S(R){const b=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let ne=0;ne<b.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(b.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)t.deleteFramebuffer(b.__webglFramebuffer[ee]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=R.textures;for(let ee=0,ne=z.length;ee<ne;ee++){const Y=r.get(z[ee]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),a.memory.textures--),r.remove(z[ee])}r.remove(R)}let N=0;function O(){N=0}function B(){const R=N;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),N+=1,R}function q(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function Q(R,b){const z=r.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,R,b);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+b)}function W(R,b){const z=r.get(R);if(R.version>0&&z.__version!==R.version){$(z,R,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+b)}function Z(R,b){const z=r.get(R);if(R.version>0&&z.__version!==R.version){$(z,R,b);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+b)}function k(R,b){const z=r.get(R);if(R.version>0&&z.__version!==R.version){oe(z,R,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+b)}const X={[ih]:t.REPEAT,[Zi]:t.CLAMP_TO_EDGE,[sh]:t.MIRRORED_REPEAT},J={[nr]:t.NEAREST,[YA]:t.NEAREST_MIPMAP_NEAREST,[Cl]:t.NEAREST_MIPMAP_LINEAR,[mr]:t.LINEAR,[vd]:t.LINEAR_MIPMAP_NEAREST,[Ji]:t.LINEAR_MIPMAP_LINEAR},ae={[eC]:t.NEVER,[aC]:t.ALWAYS,[tC]:t.LESS,[W_]:t.LEQUAL,[nC]:t.EQUAL,[sC]:t.GEQUAL,[rC]:t.GREATER,[iC]:t.NOTEQUAL};function we(R,b){if(b.type===Nr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===mr||b.magFilter===vd||b.magFilter===Cl||b.magFilter===Ji||b.minFilter===mr||b.minFilter===vd||b.minFilter===Cl||b.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,X[b.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,X[b.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,X[b.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,J[b.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,J[b.minFilter]),b.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nr||b.minFilter!==Cl&&b.minFilter!==Ji||b.type===Nr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Ye(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));const ee=b.source;let ne=h.get(ee);ne===void 0&&(ne={},h.set(ee,ne));const Y=q(b);if(Y!==R.__cacheKey){ne[Y]===void 0&&(ne[Y]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[Y].usedTimes++;const be=ne[R.__cacheKey];be!==void 0&&(ne[R.__cacheKey].usedTimes--,be.usedTimes===0&&M(b)),R.__cacheKey=Y,R.__webglTexture=ne[Y].texture}return z}function $(R,b,z){let ee=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=t.TEXTURE_3D);const ne=Ye(R,b),Y=b.source;n.bindTexture(ee,R.__webglTexture,t.TEXTURE0+z);const be=r.get(Y);if(Y.version!==be.__version||ne===!0){n.activeTexture(t.TEXTURE0+z);const de=Qe.getPrimaries(Qe.workingColorSpace),ye=b.colorSpace===li?null:Qe.getPrimaries(b.colorSpace),Xe=b.colorSpace===li||de===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let se=g(b.image,!1,i.maxTextureSize);se=ut(b,se);const xe=s.convert(b.format,b.colorSpace),Re=s.convert(b.type);let Ne=_(b.internalFormat,xe,Re,b.colorSpace,b.isVideoTexture);we(ee,b);let _e;const We=b.mipmaps,Fe=b.isVideoTexture!==!0,lt=be.__version===void 0||ne===!0,L=Y.dataReady,fe=A(b,se);if(b.isDepthTexture)Ne=w(b.format===Ho,b.type),lt&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,Ne,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ne,se.width,se.height,0,xe,Re,null));else if(b.isDataTexture)if(We.length>0){Fe&&lt&&n.texStorage2D(t.TEXTURE_2D,fe,Ne,We[0].width,We[0].height);for(let j=0,te=We.length;j<te;j++)_e=We[j],Fe?L&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,xe,Re,_e.data):n.texImage2D(t.TEXTURE_2D,j,Ne,_e.width,_e.height,0,xe,Re,_e.data);b.generateMipmaps=!1}else Fe?(lt&&n.texStorage2D(t.TEXTURE_2D,fe,Ne,se.width,se.height),L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,xe,Re,se.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,se.width,se.height,0,xe,Re,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Fe&&lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ne,We[0].width,We[0].height,se.depth);for(let j=0,te=We.length;j<te;j++)if(_e=We[j],b.format!==Jn)if(xe!==null)if(Fe){if(L)if(b.layerUpdates.size>0){const pe=hv(_e.width,_e.height,b.format,b.type);for(const he of b.layerUpdates){const ke=_e.data.subarray(he*pe/_e.data.BYTES_PER_ELEMENT,(he+1)*pe/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,he,_e.width,_e.height,1,xe,ke)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,se.depth,xe,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Ne,_e.width,_e.height,se.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,se.depth,xe,Re,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Ne,_e.width,_e.height,se.depth,0,xe,Re,_e.data)}else{Fe&&lt&&n.texStorage2D(t.TEXTURE_2D,fe,Ne,We[0].width,We[0].height);for(let j=0,te=We.length;j<te;j++)_e=We[j],b.format!==Jn?xe!==null?Fe?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,xe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Ne,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?L&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,xe,Re,_e.data):n.texImage2D(t.TEXTURE_2D,j,Ne,_e.width,_e.height,0,xe,Re,_e.data)}else if(b.isDataArrayTexture)if(Fe){if(lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ne,se.width,se.height,se.depth),L)if(b.layerUpdates.size>0){const j=hv(se.width,se.height,b.format,b.type);for(const te of b.layerUpdates){const pe=se.data.subarray(te*j/se.data.BYTES_PER_ELEMENT,(te+1)*j/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,xe,Re,pe)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,xe,Re,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,se.width,se.height,se.depth,0,xe,Re,se.data);else if(b.isData3DTexture)Fe?(lt&&n.texStorage3D(t.TEXTURE_3D,fe,Ne,se.width,se.height,se.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,xe,Re,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,se.width,se.height,se.depth,0,xe,Re,se.data);else if(b.isFramebufferTexture){if(lt)if(Fe)n.texStorage2D(t.TEXTURE_2D,fe,Ne,se.width,se.height);else{let j=se.width,te=se.height;for(let pe=0;pe<fe;pe++)n.texImage2D(t.TEXTURE_2D,pe,Ne,j,te,0,xe,Re,null),j>>=1,te>>=1}}else if(We.length>0){if(Fe&&lt){const j=Me(We[0]);n.texStorage2D(t.TEXTURE_2D,fe,Ne,j.width,j.height)}for(let j=0,te=We.length;j<te;j++)_e=We[j],Fe?L&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,xe,Re,_e):n.texImage2D(t.TEXTURE_2D,j,Ne,xe,Re,_e);b.generateMipmaps=!1}else if(Fe){if(lt){const j=Me(se);n.texStorage2D(t.TEXTURE_2D,fe,Ne,j.width,j.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Re,se)}else n.texImage2D(t.TEXTURE_2D,0,Ne,xe,Re,se);p(b)&&d(ee),be.__version=Y.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function oe(R,b,z){if(b.image.length!==6)return;const ee=Ye(R,b),ne=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const Y=r.get(ne);if(ne.version!==Y.__version||ee===!0){n.activeTexture(t.TEXTURE0+z);const be=Qe.getPrimaries(Qe.workingColorSpace),de=b.colorSpace===li?null:Qe.getPrimaries(b.colorSpace),ye=b.colorSpace===li||be===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Xe=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,xe=[];for(let te=0;te<6;te++)!Xe&&!se?xe[te]=g(b.image[te],!0,i.maxCubemapSize):xe[te]=se?b.image[te].image:b.image[te],xe[te]=ut(b,xe[te]);const Re=xe[0],Ne=s.convert(b.format,b.colorSpace),_e=s.convert(b.type),We=_(b.internalFormat,Ne,_e,b.colorSpace),Fe=b.isVideoTexture!==!0,lt=Y.__version===void 0||ee===!0,L=ne.dataReady;let fe=A(b,Re);we(t.TEXTURE_CUBE_MAP,b);let j;if(Xe){Fe&&lt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,We,Re.width,Re.height);for(let te=0;te<6;te++){j=xe[te].mipmaps;for(let pe=0;pe<j.length;pe++){const he=j[pe];b.format!==Jn?Ne!==null?Fe?L&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,he.width,he.height,Ne,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,We,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,he.width,he.height,Ne,_e,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,We,he.width,he.height,0,Ne,_e,he.data)}}}else{if(j=b.mipmaps,Fe&&lt){j.length>0&&fe++;const te=Me(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,We,te.width,te.height)}for(let te=0;te<6;te++)if(se){Fe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,xe[te].width,xe[te].height,Ne,_e,xe[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,xe[te].width,xe[te].height,0,Ne,_e,xe[te].data);for(let pe=0;pe<j.length;pe++){const ke=j[pe].image[te].image;Fe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,ke.width,ke.height,Ne,_e,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,We,ke.width,ke.height,0,Ne,_e,ke.data)}}else{Fe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,_e,xe[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,Ne,_e,xe[te]);for(let pe=0;pe<j.length;pe++){const he=j[pe];Fe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Ne,_e,he.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,We,Ne,_e,he.image[te])}}}p(b)&&d(t.TEXTURE_CUBE_MAP),Y.__version=ne.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function me(R,b,z,ee,ne,Y){const be=s.convert(z.format,z.colorSpace),de=s.convert(z.type),ye=_(z.internalFormat,be,de,z.colorSpace),Xe=r.get(b),se=r.get(z);if(se.__renderTarget=b,!Xe.__hasExternalTextures){const xe=Math.max(1,b.width>>Y),Re=Math.max(1,b.height>>Y);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Y,ye,xe,Re,b.depth,0,be,de,null):n.texImage2D(ne,Y,ye,xe,Re,0,be,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ge(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ne,se.__webglTexture,0,je(b)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ne,se.__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(R,b,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),b.depthBuffer){const ee=b.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,Y=w(b.stencilBuffer,ne),be=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=je(b);Ge(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,Y,b.width,b.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,Y,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Y,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,R)}else{const ee=b.textures;for(let ne=0;ne<ee.length;ne++){const Y=ee[ne],be=s.convert(Y.format,Y.colorSpace),de=s.convert(Y.type),ye=_(Y.internalFormat,be,de,Y.colorSpace),Xe=je(b);z&&Ge(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,ye,b.width,b.height):Ge(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe,ye,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,ye,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=r.get(b.depthTexture);ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q(b.depthTexture,0);const ne=ee.__webglTexture,Y=je(b);if(b.depthTexture.format===zo)Ge(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(b.depthTexture.format===Ho)Ge(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ze(R){const b=r.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=ee}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ce(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=t.createRenderbuffer(),le(b.__webglDepthbuffer[ee],R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),le(b.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(R,b,z){const ee=r.get(R);b!==void 0&&me(ee.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Ze(R)}function Mt(R){const b=R.texture,z=r.get(R),ee=r.get(b);R.addEventListener("dispose",T);const ne=R.textures,Y=R.isWebGLCubeRenderTarget===!0,be=ne.length>1;if(be||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=b.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let ye=0;ye<b.mipmaps.length;ye++)z.__webglFramebuffer[de][ye]=t.createFramebuffer()}else z.__webglFramebuffer[de]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)z.__webglFramebuffer[de]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(be)for(let de=0,ye=ne.length;de<ye;de++){const Xe=r.get(ne[de]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Ge(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const ye=ne[de];z.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[de]);const Xe=s.convert(ye.format,ye.colorSpace),se=s.convert(ye.type),xe=_(ye.internalFormat,Xe,se,ye.colorSpace,R.isXRRenderTarget===!0),Re=je(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,z.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),le(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),we(t.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)me(z.__webglFramebuffer[de][ye],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye);else me(z.__webglFramebuffer[de],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(b)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let de=0,ye=ne.length;de<ye;de++){const Xe=ne[de],se=r.get(Xe);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),we(t.TEXTURE_2D,Xe),me(z.__webglFramebuffer,R,Xe,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),p(Xe)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,ee.__webglTexture),we(de,b),b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)me(z.__webglFramebuffer[ye],R,b,t.COLOR_ATTACHMENT0,de,ye);else me(z.__webglFramebuffer,R,b,t.COLOR_ATTACHMENT0,de,0);p(b)&&d(de),n.unbindTexture()}R.depthBuffer&&Ze(R)}function gt(R){const b=R.textures;for(let z=0,ee=b.length;z<ee;z++){const ne=b[z];if(p(ne)){const Y=v(R),be=r.get(ne).__webglTexture;n.bindTexture(Y,be),d(Y),n.unbindTexture()}}}const Ve=[],I=[];function Tn(R){if(R.samples>0){if(Ge(R)===!1){const b=R.textures,z=R.width,ee=R.height;let ne=t.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=r.get(R),de=b.length>1;if(de)for(let ye=0;ye<b.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);const Xe=r.get(b[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Xe,0)}t.blitFramebuffer(0,0,z,ee,0,0,z,ee,ne,t.NEAREST),l===!0&&(Ve.length=0,I.length=0,Ve.push(t.COLOR_ATTACHMENT0+ye),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ve.push(Y),I.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ye=0;ye<b.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);const Xe=r.get(b[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function je(R){return Math.min(i.maxSamples,R.samples)}function Ge(R){const b=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ee(R){const b=a.render.frame;f.get(R)!==b&&(f.set(R,b),R.update())}function ut(R,b){const z=R.colorSpace,ee=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Pa&&z!==li&&(Qe.getTransfer(z)===at?(ee!==Jn||ne!==Hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=Pe,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ge}function yN(t,e){function n(r,i=li){let s;const a=Qe.getTransfer(i);if(r===Hr)return t.UNSIGNED_BYTE;if(r===Wp)return t.UNSIGNED_SHORT_4_4_4_4;if(r===jp)return t.UNSIGNED_SHORT_5_5_5_1;if(r===U_)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===k_)return t.BYTE;if(r===L_)return t.SHORT;if(r===Oo)return t.UNSIGNED_SHORT;if(r===Gp)return t.INT;if(r===ms)return t.UNSIGNED_INT;if(r===Nr)return t.FLOAT;if(r===Qo)return t.HALF_FLOAT;if(r===F_)return t.ALPHA;if(r===O_)return t.RGB;if(r===Jn)return t.RGBA;if(r===B_)return t.LUMINANCE;if(r===z_)return t.LUMINANCE_ALPHA;if(r===zo)return t.DEPTH_COMPONENT;if(r===Ho)return t.DEPTH_STENCIL;if(r===H_)return t.RED;if(r===Xp)return t.RED_INTEGER;if(r===V_)return t.RG;if(r===$p)return t.RG_INTEGER;if(r===qp)return t.RGBA_INTEGER;if(r===pc||r===mc||r===gc||r===vc)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ah||r===oh||r===lh||r===ch)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===ah)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===oh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ch)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===uh||r===dh||r===fh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===uh||r===dh)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===fh)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hh||r===ph||r===mh||r===gh||r===vh||r===yh||r===xh||r===_h||r===Sh||r===wh||r===bh||r===Mh||r===Eh||r===Th)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===hh)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ph)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mh)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gh)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vh)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yh)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xh)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_h)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sh)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wh)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bh)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mh)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Eh)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Th)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yc||r===Ah||r===Ch)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===yc)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===G_||r===Rh||r===Ph||r===Dh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===yc)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Rh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ph)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bo?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}const xN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_N=`
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

}`;class SN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const i=new pn,s=e.properties.get(i);s.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Pi({vertexShader:xN,fragmentShader:_N,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kr(new Mu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wN extends Fa{constructor(e,n){super();const r=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,h=null,m=null,x=null;const g=new SN,p=n.getContextAttributes();let d=null,v=null;const _=[],w=[],A=new ot;let C=null;const T=new kn;T.viewport=new Tt;const P=new kn;P.viewport=new Tt;const M=[T,P],S=new GC;let N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=_[$];return oe===void 0&&(oe=new Bd,_[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=_[$];return oe===void 0&&(oe=new Bd,_[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=_[$];return oe===void 0&&(oe=new Bd,_[$]=oe),oe.getHandSpace()};function B($){const oe=w.indexOf($.inputSource);if(oe===-1)return;const me=_[oe];me!==void 0&&(me.update($.inputSource,$.frame,c||a),me.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",Q);for(let $=0;$<_.length;$++){const oe=w[$];oe!==null&&(w[$]=null,_[$].disconnect(oe))}N=null,O=null,g.reset(),e.setRenderTarget(d),m=null,h=null,u=null,i=null,v=null,Ye.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",q),i.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,le=null,Ce=null;p.depth&&(Ce=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=p.stencil?Ho:zo,le=p.stencil?Bo:ms);const Ze={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};u=new XRWebGLBinding(i,n),h=u.createProjectionLayer(Ze),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new gs(h.textureWidth,h.textureHeight,{format:Jn,type:Hr,depthTexture:new iS(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,n,me),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new gs(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:Hr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q($){for(let oe=0;oe<$.removed.length;oe++){const me=$.removed[oe],le=w.indexOf(me);le>=0&&(w[le]=null,_[le].disconnect(me))}for(let oe=0;oe<$.added.length;oe++){const me=$.added[oe];let le=w.indexOf(me);if(le===-1){for(let Ze=0;Ze<_.length;Ze++)if(Ze>=w.length){w.push(me),le=Ze;break}else if(w[Ze]===null){w[Ze]=me,le=Ze;break}if(le===-1)break}const Ce=_[le];Ce&&Ce.connect(me)}}const W=new G,Z=new G;function k($,oe,me){W.setFromMatrixPosition(oe.matrixWorld),Z.setFromMatrixPosition(me.matrixWorld);const le=W.distanceTo(Z),Ce=oe.projectionMatrix.elements,Ze=me.projectionMatrix.elements,Pe=Ce[14]/(Ce[10]-1),Mt=Ce[14]/(Ce[10]+1),gt=(Ce[9]+1)/Ce[5],Ve=(Ce[9]-1)/Ce[5],I=(Ce[8]-1)/Ce[0],Tn=(Ze[8]+1)/Ze[0],je=Pe*I,Ge=Pe*Tn,Ee=le/(-I+Tn),ut=Ee*-I;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ut),$.translateZ(Ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ce[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Me=Pe+Ee,R=Mt+Ee,b=je-ut,z=Ge+(le-ut),ee=gt*Mt/R*Me,ne=Ve*Mt/R*Me;$.projectionMatrix.makePerspective(b,z,ee,ne,Me,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function X($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let oe=$.near,me=$.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(me=g.depthFar)),S.near=P.near=T.near=oe,S.far=P.far=T.far=me,(N!==S.near||O!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,O=S.far),T.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,S.layers.mask=T.layers.mask|P.layers.mask;const le=$.parent,Ce=S.cameras;X(S,le);for(let Ze=0;Ze<Ce.length;Ze++)X(Ce[Ze],le);Ce.length===2?k(S,T,P):S.projectionMatrix.copy(T.projectionMatrix),J($,S,le)};function J($,oe,me){me===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Nh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let ae=null;function we($,oe){if(f=oe.getViewerPose(c||a),x=oe,f!==null){const me=f.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let le=!1;me.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Pe=0;Pe<me.length;Pe++){const Mt=me[Pe];let gt=null;if(m!==null)gt=m.getViewport(Mt);else{const I=u.getViewSubImage(h,Mt);gt=I.viewport,Pe===0&&(e.setRenderTargetTextures(v,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(v))}let Ve=M[Pe];Ve===void 0&&(Ve=new kn,Ve.layers.enable(Pe),Ve.viewport=new Tt,M[Pe]=Ve),Ve.matrix.fromArray(Mt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Mt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(gt.x,gt.y,gt.width,gt.height),Pe===0&&(S.matrix.copy(Ve.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(Ve)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Pe=u.getDepthInformation(me[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(e,Pe,i.renderState)}}for(let me=0;me<_.length;me++){const le=w[me],Ce=_[me];le!==null&&Ce!==void 0&&Ce.update(le,oe,c||a)}ae&&ae($,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),x=null}const Ye=new sS;Ye.setAnimationLoop(we),this.setAnimationLoop=function($){ae=$},this.dispose=function(){}}}const Hi=new Vr,bN=new At;function MN(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function r(p,d){d.color.getRGB(p.fogColor.value,J_(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,v,_,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),f(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,w)):d.isMeshMatcapMaterial?(s(p,d),x(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),g(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,v,_):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===hn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===hn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=e.get(d),_=v.envMap,w=v.envMapRotation;_&&(p.envMap.value=_,Hi.copy(w),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),p.envMapRotation.value.setFromMatrix4(bN.makeRotationFromEuler(Hi)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,v,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=_*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function f(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const v=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function EN(t,e,n,r){let i={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const w=_.program;r.uniformBlockBinding(v,w)}function c(v,_){let w=i[v.id];w===void 0&&(x(v),w=f(v),i[v.id]=w,v.addEventListener("dispose",p));const A=_.program;r.updateUBOMapping(v,A);const C=e.render.frame;s[v.id]!==C&&(h(v),s[v.id]=C)}function f(v){const _=u();v.__bindingPointIndex=_;const w=t.createBuffer(),A=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,w),w}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=i[v.id],w=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,T=w.length;C<T;C++){const P=Array.isArray(w[C])?w[C]:[w[C]];for(let M=0,S=P.length;M<S;M++){const N=P[M];if(m(N,C,M,A)===!0){const O=N.__offset,B=Array.isArray(N.value)?N.value:[N.value];let q=0;for(let Q=0;Q<B.length;Q++){const W=B[Q],Z=g(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,O+q,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,_,w,A){const C=v.value,T=_+"_"+w;if(A[T]===void 0)return typeof C=="number"||typeof C=="boolean"?A[T]=C:A[T]=C.clone(),!0;{const P=A[T];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return A[T]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function x(v){const _=v.uniforms;let w=0;const A=16;for(let T=0,P=_.length;T<P;T++){const M=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,N=M.length;S<N;S++){const O=M[S],B=Array.isArray(O.value)?O.value:[O.value];for(let q=0,Q=B.length;q<Q;q++){const W=B[q],Z=g(W),k=w%A,X=k%Z.boundary,J=k+X;w+=X,J!==0&&A-J<Z.storage&&(w+=A-J),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=w,w+=Z.storage}}}const C=w%A;return C>0&&(w+=A-C),v.__size=w,v.__cache={},this}function g(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const w=a.indexOf(_.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function d(){for(const v in i)t.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}class TN{constructor(e={}){const{canvas:n=lC(),context:r=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=r.getContextAttributes().alpha}else m=a;const x=new Uint32Array(4),g=new Int32Array(4);let p=null,d=null;const v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let A=!1;this._outputColorSpace=Dn;let C=0,T=0,P=null,M=-1,S=null;const N=new Tt,O=new Tt;let B=null;const q=new it(0);let Q=0,W=n.width,Z=n.height,k=1,X=null,J=null;const ae=new Tt(0,0,W,Z),we=new Tt(0,0,W,Z);let Ye=!1;const $=new nS;let oe=!1,me=!1;const le=new At,Ce=new At,Ze=new G,Pe=new Tt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Ve(){return P===null?k:1}let I=r;function Tn(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vp}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",he,!1),I===null){const U="webgl2";if(I=Tn(U,E),I===null)throw Tn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let je,Ge,Ee,ut,Me,R,b,z,ee,ne,Y,be,de,ye,Xe,se,xe,Re,Ne,_e,We,Fe,lt,L;function fe(){je=new U2(I),je.init(),Fe=new yN(I,je),Ge=new R2(I,je,e,Fe),Ee=new gN(I,je),Ge.reverseDepthBuffer&&h&&Ee.buffers.depth.setReversed(!0),ut=new B2(I),Me=new rN,R=new vN(I,je,Ee,Me,Ge,Fe,ut),b=new D2(w),z=new L2(w),ee=new jC(I),lt=new A2(I,ee),ne=new F2(I,ee,ut,lt),Y=new H2(I,ne,ee,ut),Ne=new z2(I,Ge,R),se=new P2(Me),be=new nN(w,b,z,je,Ge,lt,se),de=new MN(w,Me),ye=new sN,Xe=new dN(je),Re=new T2(w,b,z,Ee,Y,m,l),xe=new pN(w,Y,Ge),L=new EN(I,ut,Ge,Ee),_e=new C2(I,je,ut),We=new O2(I,je,ut),ut.programs=be.programs,w.capabilities=Ge,w.extensions=je,w.properties=Me,w.renderLists=ye,w.shadowMap=xe,w.state=Ee,w.info=ut}fe();const j=new wN(w,I);this.xr=j,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(W,Z,!1))},this.getSize=function(E){return E.set(W,Z)},this.setSize=function(E,U,H=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,Z=U,n.width=Math.floor(E*k),n.height=Math.floor(U*k),H===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(W*k,Z*k).floor()},this.setDrawingBufferSize=function(E,U,H){W=E,Z=U,k=H,n.width=Math.floor(E*H),n.height=Math.floor(U*H),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(ae)},this.setViewport=function(E,U,H,V){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,U,H,V),Ee.viewport(N.copy(ae).multiplyScalar(k).round())},this.getScissor=function(E){return E.copy(we)},this.setScissor=function(E,U,H,V){E.isVector4?we.set(E.x,E.y,E.z,E.w):we.set(E,U,H,V),Ee.scissor(O.copy(we).multiplyScalar(k).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(E){Ee.setScissorTest(Ye=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,H=!0){let V=0;if(E){let F=!1;if(P!==null){const ie=P.texture.format;F=ie===qp||ie===$p||ie===Xp}if(F){const ie=P.texture.type,ue=ie===Hr||ie===ms||ie===Oo||ie===Bo||ie===Wp||ie===jp,ve=Re.getClearColor(),Se=Re.getClearAlpha(),Ie=ve.r,De=ve.g,Te=ve.b;ue?(x[0]=Ie,x[1]=De,x[2]=Te,x[3]=Se,I.clearBufferuiv(I.COLOR,0,x)):(g[0]=Ie,g[1]=De,g[2]=Te,g[3]=Se,I.clearBufferiv(I.COLOR,0,g))}else V|=I.COLOR_BUFFER_BIT}U&&(V|=I.DEPTH_BUFFER_BIT),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",he,!1),Re.dispose(),ye.dispose(),Xe.dispose(),Me.dispose(),b.dispose(),z.dispose(),Y.dispose(),lt.dispose(),L.dispose(),be.dispose(),j.dispose(),j.removeEventListener("sessionstart",Jp),j.removeEventListener("sessionend",em),ki.stop()};function te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=ut.autoReset,U=xe.enabled,H=xe.autoUpdate,V=xe.needsUpdate,F=xe.type;fe(),ut.autoReset=E,xe.enabled=U,xe.autoUpdate=H,xe.needsUpdate=V,xe.type=F}function he(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ke(E){const U=E.target;U.removeEventListener("dispose",ke),_t(U)}function _t(E){Vt(E),Me.remove(E)}function Vt(E){const U=Me.get(E).programs;U!==void 0&&(U.forEach(function(H){be.releaseProgram(H)}),E.isShaderMaterial&&be.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,H,V,F,ie){U===null&&(U=Mt);const ue=F.isMesh&&F.matrixWorld.determinant()<0,ve=SS(E,U,H,V,F);Ee.setMaterial(V,ue);let Se=H.index,Ie=1;if(V.wireframe===!0){if(Se=ne.getWireframeAttribute(H),Se===void 0)return;Ie=2}const De=H.drawRange,Te=H.attributes.position;let $e=De.start*Ie,Je=(De.start+De.count)*Ie;ie!==null&&($e=Math.max($e,ie.start*Ie),Je=Math.min(Je,(ie.start+ie.count)*Ie)),Se!==null?($e=Math.max($e,0),Je=Math.min(Je,Se.count)):Te!=null&&($e=Math.max($e,0),Je=Math.min(Je,Te.count));const Ct=Je-$e;if(Ct<0||Ct===1/0)return;lt.setup(F,V,ve,H,Se);let St,Ke=_e;if(Se!==null&&(St=ee.get(Se),Ke=We,Ke.setIndex(St)),F.isMesh)V.wireframe===!0?(Ee.setLineWidth(V.wireframeLinewidth*Ve()),Ke.setMode(I.LINES)):Ke.setMode(I.TRIANGLES);else if(F.isLine){let Ae=V.linewidth;Ae===void 0&&(Ae=1),Ee.setLineWidth(Ae*Ve()),F.isLineSegments?Ke.setMode(I.LINES):F.isLineLoop?Ke.setMode(I.LINE_LOOP):Ke.setMode(I.LINE_STRIP)}else F.isPoints?Ke.setMode(I.POINTS):F.isSprite&&Ke.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)xc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Ke.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ae=F._multiDrawStarts,Ot=F._multiDrawCounts,et=F._multiDrawCount,Vn=Se?ee.get(Se).bytesPerElement:1,_s=Me.get(V).currentProgram.getUniforms();for(let gn=0;gn<et;gn++)_s.setValue(I,"_gl_DrawID",gn),Ke.render(Ae[gn]/Vn,Ot[gn])}else if(F.isInstancedMesh)Ke.renderInstances($e,Ct,F.count);else if(H.isInstancedBufferGeometry){const Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ot=Math.min(H.instanceCount,Ae);Ke.renderInstances($e,Ct,Ot)}else Ke.render($e,Ct)};function nt(E,U,H){E.transparent===!0&&E.side===Rr&&E.forceSinglePass===!1?(E.side=hn,E.needsUpdate=!0,il(E,U,H),E.side=Ri,E.needsUpdate=!0,il(E,U,H),E.side=Rr):il(E,U,H)}this.compile=function(E,U,H=null){H===null&&(H=E),d=Xe.get(H),d.init(U),_.push(d),H.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),E!==H&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const V=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ie=F.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){const ve=ie[ue];nt(ve,H,F),V.add(ve)}else nt(ie,H,F),V.add(ie)}),d=_.pop(),V},this.compileAsync=function(E,U,H=null){const V=this.compile(E,U,H);return new Promise(F=>{function ie(){if(V.forEach(function(ue){Me.get(ue).currentProgram.isReady()&&V.delete(ue)}),V.size===0){F(E);return}setTimeout(ie,10)}je.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Hn=null;function yr(E){Hn&&Hn(E)}function Jp(){ki.stop()}function em(){ki.start()}const ki=new sS;ki.setAnimationLoop(yr),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(E){Hn=E,j.setAnimationLoop(E),E===null?ki.stop():ki.start()},j.addEventListener("sessionstart",Jp),j.addEventListener("sessionend",em),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,U,P),d=Xe.get(E,_.length),d.init(U),_.push(d),Ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Ce),me=this.localClippingEnabled,oe=se.init(this.clippingPlanes,me),p=ye.get(E,v.length),p.init(),v.push(p),j.enabled===!0&&j.isPresenting===!0){const ie=w.xr.getDepthSensingMesh();ie!==null&&Cu(ie,U,-1/0,w.sortObjects)}Cu(E,U,0,w.sortObjects),p.finish(),w.sortObjects===!0&&p.sort(X,J),gt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,gt&&Re.addToRenderList(p,E),this.info.render.frame++,oe===!0&&se.beginShadows();const H=d.state.shadowsArray;xe.render(H,E,U),oe===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,F=p.transmissive;if(d.setupLights(),U.isArrayCamera){const ie=U.cameras;if(F.length>0)for(let ue=0,ve=ie.length;ue<ve;ue++){const Se=ie[ue];nm(V,F,E,Se)}gt&&Re.render(E);for(let ue=0,ve=ie.length;ue<ve;ue++){const Se=ie[ue];tm(p,E,Se,Se.viewport)}}else F.length>0&&nm(V,F,E,U),gt&&Re.render(E),tm(p,E,U);P!==null&&T===0&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(w,E,U),lt.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?(d=_[_.length-1],oe===!0&&se.setGlobalState(w.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Cu(E,U,H,V){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){V&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ce);const ue=Y.update(E),ve=E.material;ve.visible&&p.push(E,ue,ve,H,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const ue=Y.update(E),ve=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Pe.copy(ue.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(Ce)),Array.isArray(ve)){const Se=ue.groups;for(let Ie=0,De=Se.length;Ie<De;Ie++){const Te=Se[Ie],$e=ve[Te.materialIndex];$e&&$e.visible&&p.push(E,ue,$e,H,Pe.z,Te)}}else ve.visible&&p.push(E,ue,ve,H,Pe.z,null)}}const ie=E.children;for(let ue=0,ve=ie.length;ue<ve;ue++)Cu(ie[ue],U,H,V)}function tm(E,U,H,V){const F=E.opaque,ie=E.transmissive,ue=E.transparent;d.setupLightsView(H),oe===!0&&se.setGlobalState(w.clippingPlanes,H),V&&Ee.viewport(N.copy(V)),F.length>0&&rl(F,U,H),ie.length>0&&rl(ie,U,H),ue.length>0&&rl(ue,U,H),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function nm(E,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new gs(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Qo:Hr,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ie=d.state.transmissionRenderTarget[V.id],ue=V.viewport||N;ie.setSize(ue.z*w.transmissionResolutionScale,ue.w*w.transmissionResolutionScale);const ve=w.getRenderTarget();w.setRenderTarget(ie),w.getClearColor(q),Q=w.getClearAlpha(),Q<1&&w.setClearColor(16777215,.5),w.clear(),gt&&Re.render(H);const Se=w.toneMapping;w.toneMapping=Ti;const Ie=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),oe===!0&&se.setGlobalState(w.clippingPlanes,V),rl(E,H,V),R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie),je.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Te=0,$e=U.length;Te<$e;Te++){const Je=U[Te],Ct=Je.object,St=Je.geometry,Ke=Je.material,Ae=Je.group;if(Ke.side===Rr&&Ct.layers.test(V.layers)){const Ot=Ke.side;Ke.side=hn,Ke.needsUpdate=!0,rm(Ct,H,V,St,Ke,Ae),Ke.side=Ot,Ke.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie))}w.setRenderTarget(ve),w.setClearColor(q,Q),Ie!==void 0&&(V.viewport=Ie),w.toneMapping=Se}function rl(E,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ie=E.length;F<ie;F++){const ue=E[F],ve=ue.object,Se=ue.geometry,Ie=ue.group;let De=ue.material;De.allowOverride===!0&&V!==null&&(De=V),ve.layers.test(H.layers)&&rm(ve,U,H,Se,De,Ie)}}function rm(E,U,H,V,F,ie){E.onBeforeRender(w,U,H,V,F,ie),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(w,U,H,V,E,ie),F.transparent===!0&&F.side===Rr&&F.forceSinglePass===!1?(F.side=hn,F.needsUpdate=!0,w.renderBufferDirect(H,U,V,F,E,ie),F.side=Ri,F.needsUpdate=!0,w.renderBufferDirect(H,U,V,F,E,ie),F.side=Rr):w.renderBufferDirect(H,U,V,F,E,ie),E.onAfterRender(w,U,H,V,F,ie)}function il(E,U,H){U.isScene!==!0&&(U=Mt);const V=Me.get(E),F=d.state.lights,ie=d.state.shadowsArray,ue=F.state.version,ve=be.getParameters(E,F.state,ie,U,H),Se=be.getProgramCacheKey(ve);let Ie=V.programs;V.environment=E.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(E.isMeshStandardMaterial?z:b).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",ke),Ie=new Map,V.programs=Ie);let De=Ie.get(Se);if(De!==void 0){if(V.currentProgram===De&&V.lightsStateVersion===ue)return sm(E,ve),De}else ve.uniforms=be.getUniforms(E),E.onBeforeCompile(ve,w),De=be.acquireProgram(ve,Se),Ie.set(Se,De),V.uniforms=ve.uniforms;const Te=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=se.uniform),sm(E,ve),V.needsLights=bS(E),V.lightsStateVersion=ue,V.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=De,V.uniformsList=null,De}function im(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=_c.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function sm(E,U){const H=Me.get(E);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function SS(E,U,H,V,F){U.isScene!==!0&&(U=Mt),R.resetTextureUnits();const ie=U.fog,ue=V.isMeshStandardMaterial?U.environment:null,ve=P===null?w.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Pa,Se=(V.isMeshStandardMaterial?z:b).get(V.envMap||ue),Ie=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,De=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!H.morphAttributes.position,$e=!!H.morphAttributes.normal,Je=!!H.morphAttributes.color;let Ct=Ti;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ct=w.toneMapping);const St=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ke=St!==void 0?St.length:0,Ae=Me.get(V),Ot=d.state.lights;if(oe===!0&&(me===!0||E!==S)){const Qt=E===S&&V.id===M;se.setState(V,E,Qt)}let et=!1;V.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ot.state.version||Ae.outputColorSpace!==ve||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==Se||V.fog===!0&&Ae.fog!==ie||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Ie||Ae.vertexTangents!==De||Ae.morphTargets!==Te||Ae.morphNormals!==$e||Ae.morphColors!==Je||Ae.toneMapping!==Ct||Ae.morphTargetsCount!==Ke)&&(et=!0):(et=!0,Ae.__version=V.version);let Vn=Ae.currentProgram;et===!0&&(Vn=il(V,U,F));let _s=!1,gn=!1,Ba=!1;const pt=Vn.getUniforms(),An=Ae.uniforms;if(Ee.useProgram(Vn.program)&&(_s=!0,gn=!0,Ba=!0),V.id!==M&&(M=V.id,gn=!0),_s||S!==E){Ee.buffers.depth.getReversed()?(le.copy(E.projectionMatrix),uC(le),dC(le),pt.setValue(I,"projectionMatrix",le)):pt.setValue(I,"projectionMatrix",E.projectionMatrix),pt.setValue(I,"viewMatrix",E.matrixWorldInverse);const an=pt.map.cameraPosition;an!==void 0&&an.setValue(I,Ze.setFromMatrixPosition(E.matrixWorld)),Ge.logarithmicDepthBuffer&&pt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,gn=!0,Ba=!0)}if(F.isSkinnedMesh){pt.setOptional(I,F,"bindMatrix"),pt.setOptional(I,F,"bindMatrixInverse");const Qt=F.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),pt.setValue(I,"boneTexture",Qt.boneTexture,R))}F.isBatchedMesh&&(pt.setOptional(I,F,"batchingTexture"),pt.setValue(I,"batchingTexture",F._matricesTexture,R),pt.setOptional(I,F,"batchingIdTexture"),pt.setValue(I,"batchingIdTexture",F._indirectTexture,R),pt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&pt.setValue(I,"batchingColorTexture",F._colorsTexture,R));const Cn=H.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Ne.update(F,H,Vn),(gn||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,pt.setValue(I,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(An.envMap.value=Se,An.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(An.envMapIntensity.value=U.environmentIntensity),gn&&(pt.setValue(I,"toneMappingExposure",w.toneMappingExposure),Ae.needsLights&&wS(An,Ba),ie&&V.fog===!0&&de.refreshFogUniforms(An,ie),de.refreshMaterialUniforms(An,V,k,Z,d.state.transmissionRenderTarget[E.id]),_c.upload(I,im(Ae),An,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(_c.upload(I,im(Ae),An,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(I,"center",F.center),pt.setValue(I,"modelViewMatrix",F.modelViewMatrix),pt.setValue(I,"normalMatrix",F.normalMatrix),pt.setValue(I,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Qt=V.uniformsGroups;for(let an=0,Ru=Qt.length;an<Ru;an++){const Li=Qt[an];L.update(Li,Vn),L.bind(Li,Vn)}}return Vn}function wS(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function bS(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,U,H){const V=Me.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Me.get(E.texture).__webglTexture=U,Me.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const H=Me.get(E);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const MS=I.createFramebuffer();this.setRenderTarget=function(E,U=0,H=0){P=E,C=U,T=H;let V=!0,F=null,ie=!1,ue=!1;if(E){const Se=Me.get(E);if(Se.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(Se.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Se.__hasExternalTextures)R.rebindTextures(E,Me.get(E.texture).__webglTexture,Me.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Te=E.depthTexture;if(Se.__boundDepthTexture!==Te){if(Te!==null&&Me.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ue=!0);const De=Me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[U])?F=De[U][H]:F=De[U],ie=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?F=Me.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?F=De[H]:F=De,N.copy(E.viewport),O.copy(E.scissor),B=E.scissorTest}else N.copy(ae).multiplyScalar(k).floor(),O.copy(we).multiplyScalar(k).floor(),B=Ye;if(H!==0&&(F=MS),Ee.bindFramebuffer(I.FRAMEBUFFER,F)&&V&&Ee.drawBuffers(E,F),Ee.viewport(N),Ee.scissor(O),Ee.setScissorTest(B),ie){const Se=Me.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,H)}else if(ue){const Se=Me.get(E.texture),Ie=U;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.__webglTexture,H,Ie)}else if(E!==null&&H!==0){const Se=Me.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Se.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(E,U,H,V,F,ie,ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){Ee.bindFramebuffer(I.FRAMEBUFFER,ve);try{const Se=E.texture,Ie=Se.format,De=Se.type;if(!Ge.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-V&&H>=0&&H<=E.height-F&&I.readPixels(U,H,V,F,Fe.convert(Ie),Fe.convert(De),ie)}finally{const Se=P!==null?Me.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(E,U,H,V,F,ie,ue){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve)if(U>=0&&U<=E.width-V&&H>=0&&H<=E.height-F){Ee.bindFramebuffer(I.FRAMEBUFFER,ve);const Se=E.texture,Ie=Se.format,De=Se.type;if(!Ge.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.bufferData(I.PIXEL_PACK_BUFFER,ie.byteLength,I.STREAM_READ),I.readPixels(U,H,V,F,Fe.convert(Ie),Fe.convert(De),0);const $e=P!==null?Me.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,$e);const Je=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await cC(I,Je,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ie),I.deleteBuffer(Te),I.deleteSync(Je),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,H=0){const V=Math.pow(2,-H),F=Math.floor(E.image.width*V),ie=Math.floor(E.image.height*V),ue=U!==null?U.x:0,ve=U!==null?U.y:0;R.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,ue,ve,F,ie),Ee.unbindTexture()};const ES=I.createFramebuffer(),TS=I.createFramebuffer();this.copyTextureToTexture=function(E,U,H=null,V=null,F=0,ie=null){ie===null&&(F!==0?(xc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=F,F=0):ie=0);let ue,ve,Se,Ie,De,Te,$e,Je,Ct;const St=E.isCompressedTexture?E.mipmaps[ie]:E.image;if(H!==null)ue=H.max.x-H.min.x,ve=H.max.y-H.min.y,Se=H.isBox3?H.max.z-H.min.z:1,Ie=H.min.x,De=H.min.y,Te=H.isBox3?H.min.z:0;else{const Cn=Math.pow(2,-F);ue=Math.floor(St.width*Cn),ve=Math.floor(St.height*Cn),E.isDataArrayTexture?Se=St.depth:E.isData3DTexture?Se=Math.floor(St.depth*Cn):Se=1,Ie=0,De=0,Te=0}V!==null?($e=V.x,Je=V.y,Ct=V.z):($e=0,Je=0,Ct=0);const Ke=Fe.convert(U.format),Ae=Fe.convert(U.type);let Ot;U.isData3DTexture?(R.setTexture3D(U,0),Ot=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Ot=I.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Ot=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const et=I.getParameter(I.UNPACK_ROW_LENGTH),Vn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_s=I.getParameter(I.UNPACK_SKIP_PIXELS),gn=I.getParameter(I.UNPACK_SKIP_ROWS),Ba=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,De),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Te);const pt=E.isDataArrayTexture||E.isData3DTexture,An=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Cn=Me.get(E),Qt=Me.get(U),an=Me.get(Cn.__renderTarget),Ru=Me.get(Qt.__renderTarget);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,an.__webglFramebuffer),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ru.__webglFramebuffer);for(let Li=0;Li<Se;Li++)pt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(E).__webglTexture,F,Te+Li),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(U).__webglTexture,ie,Ct+Li)),I.blitFramebuffer(Ie,De,ue,ve,$e,Je,ue,ve,I.DEPTH_BUFFER_BIT,I.NEAREST);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||Me.has(E)){const Cn=Me.get(E),Qt=Me.get(U);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,ES),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,TS);for(let an=0;an<Se;an++)pt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Cn.__webglTexture,F,Te+an):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Cn.__webglTexture,F),An?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qt.__webglTexture,ie,Ct+an):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Qt.__webglTexture,ie),F!==0?I.blitFramebuffer(Ie,De,ue,ve,$e,Je,ue,ve,I.COLOR_BUFFER_BIT,I.NEAREST):An?I.copyTexSubImage3D(Ot,ie,$e,Je,Ct+an,Ie,De,ue,ve):I.copyTexSubImage2D(Ot,ie,$e,Je,Ie,De,ue,ve);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else An?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Ot,ie,$e,Je,Ct,ue,ve,Se,Ke,Ae,St.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Ot,ie,$e,Je,Ct,ue,ve,Se,Ke,St.data):I.texSubImage3D(Ot,ie,$e,Je,Ct,ue,ve,Se,Ke,Ae,St):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ie,$e,Je,ue,ve,Ke,Ae,St.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ie,$e,Je,St.width,St.height,Ke,St.data):I.texSubImage2D(I.TEXTURE_2D,ie,$e,Je,ue,ve,Ke,Ae,St);I.pixelStorei(I.UNPACK_ROW_LENGTH,et),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Vn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_s),I.pixelStorei(I.UNPACK_SKIP_ROWS,gn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ba),ie===0&&U.generateMipmaps&&I.generateMipmap(Ot),Ee.unbindTexture()},this.copyTextureToTexture3D=function(E,U,H=null,V=null,F=0){return xc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,H,V,F)},this.initRenderTarget=function(E){Me.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){C=0,T=0,P=null,Ee.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}function AN(){const t=D.useRef(null),e=D.useRef({x:0,y:0}),n=D.useRef(!1);return D.useEffect(()=>{if(!t.current)return;const r=new UC,i=new kn(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=30;const s=new TN({alpha:!0,antialias:!0});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(window.devicePixelRatio),t.current.appendChild(s.domElement),n.current=document.documentElement.classList.contains("dark");const a=()=>n.current?9133302:8141549,o=new jr,l=1e3,c=new Float32Array(l*3),f=new Float32Array(l);for(let d=0;d<l;d++)c[d*3]=(Math.random()-.5)*100,c[d*3+1]=(Math.random()-.5)*100,c[d*3+2]=(Math.random()-.5)*100,f[d]=Math.random()*2;o.setAttribute("position",new On(c,3)),o.setAttribute("scale",new On(f,1));const u=new rS({color:a(),size:.15,transparent:!0,opacity:.9,sizeAttenuation:!0}),h=new BC(o,u);r.add(h);let m=0;const x=()=>{requestAnimationFrame(x),h.rotation.x+=1e-4,h.rotation.y+=1e-4,h.rotation.x+=e.current.y*5e-5,h.rotation.y+=e.current.x*5e-5;const d=document.documentElement.classList.contains("dark");d!==n.current&&(n.current=d,u.color.set(a())),m+=.01;const v=o.attributes.position.array,_=o.attributes.scale.array;for(let w=0;w<l;w++){const A=w*3,C=v[A],T=v[A+1];v[A+2],v[A]=C+Math.sin(m+w)*.01,v[A+1]=T+Math.cos(m+w)*.01,_[w]=Math.abs(Math.sin(m+w)*1.5)+.5}o.attributes.position.needsUpdate=!0,o.attributes.scale.needsUpdate=!0,s.render(r,i)};function g(d){e.current.x=d.clientX/window.innerWidth*2-1,e.current.y=-(d.clientY/window.innerHeight)*2+1}const p=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return x(),window.addEventListener("resize",p),document.addEventListener("mousemove",g),()=>{window.removeEventListener("resize",p),document.removeEventListener("mousemove",g),s.dispose(),t.current&&t.current.contains(s.domElement)&&t.current.removeChild(s.domElement)}},[]),y.jsx("div",{ref:t,className:"fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-60 dark:opacity-90"})}function Lh(){const[t,e]=D.useState(!0);D.useEffect(()=>{const r=localStorage.getItem("theme");e(r?r==="dark":!0)},[]),D.useEffect(()=>{t?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},[t]);const n=()=>{e(!t)};return y.jsxs("button",{onClick:n,className:"fixed z-[999] top-20 right-6 w-14 h-14 bg-white/95 dark:bg-gray-800/95 rounded-full shadow-xl flex items-center justify-center backdrop-blur-sm hover:shadow-2xl transition-all transform hover:scale-110 border-2 border-purple-400/30 hover:border-purple-500/50 animate-pulse-light","aria-label":t?"Switch to light mode":"Switch to dark mode",children:[!t&&y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 text-yellow-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}),t&&y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 text-purple-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})]})}function CN({currentPage:t}){const[e,n]=D.useState(!1),r=[{href:"/#companies",label:"Companies"},{href:"/#about",label:"About"},{href:"/skills",label:"Skills"},{href:"/#projects",label:"Projects"},{href:"/blog",label:"Blog"},{href:"/#contact",label:"Contact"}];return y.jsx("nav",{className:"bg-white/90 dark:bg-black/90 backdrop-blur-sm sticky top-0 z-50 shadow-md",children:y.jsxs("div",{className:"container mx-auto px-4 py-4",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx(Un,{href:"/",children:y.jsx("div",{className:"text-xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text cursor-pointer",children:"Parth Bhodia"})}),y.jsxs("div",{className:"hidden md:flex items-center space-x-6",children:[r.map(i=>y.jsx(Sc.Fragment,{children:i.href.startsWith("/#")?y.jsx("a",{href:i.href,className:`font-medium transition-colors ${t===i.label.toLowerCase()?"text-purple-600 dark:text-purple-400":"hover:text-purple-600 dark:hover:text-purple-400"}`,children:i.label}):y.jsx(Un,{href:i.href,className:`font-medium transition-colors ${t===i.label.toLowerCase()?"text-purple-600 dark:text-purple-400":"hover:text-purple-600 dark:hover:text-purple-400"}`,children:i.label})},i.label)),y.jsx(Lh,{})]}),y.jsxs("div",{className:"md:hidden flex items-center space-x-4",children:[y.jsx(Lh,{}),y.jsx("button",{onClick:()=>n(!e),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors",children:e?y.jsx(_u,{size:24}):y.jsx(T1,{size:24})})]})]}),e&&y.jsx("div",{className:"md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700",children:y.jsx("div",{className:"flex flex-col space-y-4 pt-4",children:r.map(i=>y.jsx(Sc.Fragment,{children:i.href.startsWith("/#")?y.jsx("a",{href:i.href,className:`font-medium transition-colors ${t===i.label.toLowerCase()?"text-purple-600 dark:text-purple-400":"hover:text-purple-600 dark:hover:text-purple-400"}`,onClick:()=>n(!1),children:i.label}):y.jsx(Un,{href:i.href,className:`font-medium transition-colors ${t===i.label.toLowerCase()?"text-purple-600 dark:text-purple-400":"hover:text-purple-600 dark:hover:text-purple-400"}`,onClick:()=>n(!1),children:i.label})},i.label))})})]})})}function RN(){const[t,e]=D.useState(0);D.useEffect(()=>{const s=()=>{e(window.scrollY)};return window.addEventListener("scroll",s,{passive:!0}),()=>{window.removeEventListener("scroll",s)}},[]);const n=Math.max(0,Math.min(1,1-t/500)),r=t*.5,i=1-t*.001;return y.jsxs("div",{className:"fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0",children:[y.jsx("div",{className:"absolute inset-0 flex items-center justify-center",style:{opacity:n,transform:`translateY(${r}px) scale(${i})`},children:y.jsxs("div",{className:"w-full h-full absolute",children:[y.jsxs("div",{className:"text-center z-10",children:[y.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-4 text-white",children:"Parth Bhodia"}),y.jsx("p",{className:"text-xl md:text-2xl text-purple-200",children:"Software Developer"})]}),y.jsx("div",{className:"absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-400/30 to-purple-600/30 filter blur-3xl animate-float"}),y.jsx("div",{className:"absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 filter blur-3xl",style:{animationDelay:"1s",animationDuration:"7s"}}),y.jsx("div",{className:"absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-purple-300/20 to-purple-500/20 filter blur-3xl",style:{animationDelay:"0.5s",animationDuration:"5s"}})]})}),y.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z'/%3E%3C/g%3E%3C/svg%3E")`,backgroundSize:"30px 30px"}})]})}function PN({texts:t,typingSpeed:e=100,deletingSpeed:n=50,delayBetweenTexts:r=2e3,className:i=""}){const[s,a]=D.useState(""),[o,l]=D.useState(0),[c,f]=D.useState(!1),[u,h]=D.useState(!1);return D.useEffect(()=>{if(t.length===0)return;const m=()=>{const g=t[o],p=c?g.substring(0,s.length-1):g.substring(0,s.length+1);a(p),!c&&p===g?(h(!0),setTimeout(()=>{h(!1),f(!0)},r)):c&&p===""&&(f(!1),l((o+1)%t.length))};if(u)return;const x=setTimeout(m,c?n:e);return()=>clearTimeout(x)},[s,o,c,u,t,e,n,r]),y.jsxs("span",{className:i,children:[s,y.jsx("span",{className:"animate-blink",children:"|"})]})}function uS(){const[t,e]=D.useState(0);return D.useEffect(()=>{const n=()=>{const r=document.documentElement.scrollHeight-window.innerHeight,s=window.scrollY/r*100;e(s)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),y.jsx("div",{className:"fixed top-0 left-0 right-0 h-1 z-50",children:y.jsx("div",{className:"h-full bg-gradient-to-r from-purple-400 to-purple-600",style:{width:`${t}%`}})})}function Zc({children:t,showHero:e=!1,currentPage:n="home"}){D.useState(!1);const[r,i]=D.useState({name:"",email:"",subject:"",message:""}),[s,a]=D.useState(!1),[o,l]=D.useState(""),[c,f]=D.useState(!1),[u,h]=D.useState(!1),[m,x]=D.useState([{text:"Hello! I'm here to help you learn about Parth Bhodia. Ask me about his skills, experience, projects, education, or visa status!",isUser:!1,timestamp:new Date}]),[g,p]=D.useState(""),d=D.useRef(null),v=M=>{const{name:S,value:N}=M.target;i(O=>({...O,[S]:N}))},_=async M=>{M.preventDefault(),a(!0),l("");const S=`https://mail.google.com/mail/?view=cm&to=parthbhodia08@gmail.com&su=${encodeURIComponent(r.subject)}&body=${encodeURIComponent(`Name: ${r.name}
Email: ${r.email}

Message:
${r.message}`)}`;window.open(S,"_blank"),f(!0),l("Opening Gmail to send your message. Please complete sending from Gmail."),i({name:"",email:"",subject:"",message:""}),a(!1)},w=()=>{h(M=>!M)};D.useEffect(()=>{u&&d.current&&A()},[m,u]);const A=()=>{d.current&&(d.current.scrollTop=d.current.scrollHeight)},C=M=>{const S=M.toLowerCase().trim();return S.includes("experience")||S.includes("work")||S.includes("job")?"I have experience at Eccalon LLC (2022-Present) as a Fullstack Developer, UMBC as Research Assistant (2022), and Tata Communications (2018-2021) as Software Developer. I've worked on AI/ML projects, enterprise dashboards, and automation systems.":S.includes("skills")||S.includes("technology")||S.includes("tech")?"My core skills include JavaScript (95%), TypeScript (90%), Vue.js (90%), React (85%), Node.js (90%), Python (85%), and cloud technologies like AWS. I also work with databases like PostgreSQL and MongoDB.":S.includes("education")||S.includes("degree")||S.includes("study")?"I graduated from University of Maryland, Baltimore County (UMBC) in May 2023 with a Master's degree in Computer Science. I'm currently on F1 OPT status.":S.includes("project")||S.includes("portfolio")?"My featured projects include a Personalized Knowledge Assistant ChatBOT using GPT and Pinecone, CMS Management System for 100K+ users, and Nutri AI Scan (award-winning PWA). Check out the Projects section for more details!":S.includes("visa")||S.includes("status")||S.includes("opt")?"I am looking for more fun opportunities to work with! I'm authorized to work in the US and excited about new challenges.":S.includes("contact")||S.includes("hire")||S.includes("reach")?"You can reach me at parthbhodia08@gmail.com or through the contact form on this website. I'm actively looking for software development opportunities!":S.includes("ai")||S.includes("machine learning")||S.includes("ml")?"I have strong experience in AI/ML, including developing a ChatBOT with GPT and Pinecone vector databases, OCR-based applications, and data analytics. It's one of my primary areas of expertise.":S.includes("hello")||S.includes("hi")||S.includes("hey")?"Hello! I'm Parth's portfolio assistant. I can tell you about his work experience, skills, education, projects, or visa status. What would you like to know?":S.includes("location")||S.includes("where")?"I'm based in Maryland, USA. I'm available for remote work or positions in the DMV area (DC, Maryland, Virginia).":"I can help you learn about Parth's experience, skills, education, projects, or contact information. Try asking about his work experience, technical skills, or recent projects!"},T=async M=>{if(M.preventDefault(),!g.trim())return;const S={text:g,isUser:!0,timestamp:new Date};x(O=>[...O,S]);const N=g;p("");try{const O=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:N})});if(O.ok){const B=await O.json();x(q=>[...q,{text:B.response||C(N),isUser:!1,timestamp:new Date}])}else throw new Error("API not available")}catch{setTimeout(()=>{x(B=>[...B,{text:C(N),isUser:!1,timestamp:new Date}])},500)}},P=M=>R_(new Date(M),"h:mm a");return y.jsxs("div",{className:"min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100",children:[y.jsx(uS,{}),y.jsx(Lh,{}),y.jsx(AN,{}),y.jsx(CN,{currentPage:n}),e&&y.jsxs(y.Fragment,{children:[y.jsx(RN,{}),y.jsx("section",{className:"min-h-screen flex items-center justify-center relative -mt-screen",children:y.jsxs("div",{className:"container mx-auto px-4 flex flex-col items-center z-10",children:[y.jsx(zs,{speed:.4,className:"mb-8",children:y.jsx("div",{className:"w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 flex items-center justify-center text-4xl text-white shadow-lg transform transition-all duration-500 hover:scale-110",children:"PB"})}),y.jsx(zs,{speed:.2,className:"mb-4",children:y.jsxs("h1",{className:"text-4xl md:text-6xl font-bold text-center mb-4",children:["Hi, I'm ",y.jsx("span",{className:"bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text",children:"Parth Bhodia"})]})}),y.jsx(zs,{speed:.1,className:"mb-8",children:y.jsxs("div",{className:"text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 max-w-2xl backdrop-blur-sm py-2 px-4 rounded-lg bg-white/10 dark:bg-black/20",children:["I'm a ",y.jsx(PN,{texts:["Software Developer","Full Stack Engineer","Vue.js Expert","React Developer","AWS Cloud Specialist","Python Developer"],className:"bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text font-semibold"})]})}),y.jsx(zs,{speed:-.1,children:y.jsxs("div",{className:"flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",children:[y.jsx("a",{href:"#contact",className:"px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-md hover:bg-purple-700 dark:hover:bg-purple-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1",children:"Get in Touch"}),y.jsx("a",{href:"#projects",className:"px-6 py-3 border-2 border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-500 rounded-md hover:bg-purple-600/10 dark:hover:bg-purple-500/10 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1",children:"View Projects"}),y.jsxs("a",{href:"/resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"px-6 py-3 bg-gray-600 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center",children:[y.jsx("span",{children:"Download Resume"}),y.jsx("svg",{className:"w-4 h-4 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})})]})]})})]})})]}),y.jsx("main",{children:t}),e&&y.jsx("section",{id:"contact",className:"py-20 bg-white/80 dark:bg-black/40 backdrop-blur-sm",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:y.jsx("span",{className:"bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text",children:"Get In Touch"})}),y.jsx(zs,{speed:.05,children:y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto",children:[y.jsxs("div",{className:"bg-white/70 dark:bg-black/50 p-6 rounded-lg shadow-md backdrop-blur-sm",children:[y.jsx("h3",{className:"text-xl font-medium mb-6 text-gray-800 dark:text-gray-200",children:"Contact Information"}),y.jsxs("div",{className:"space-y-6 mb-6",children:[y.jsxs("div",{className:"flex items-center transform transition-transform hover:translate-x-2",children:[y.jsx("div",{className:"w-10 h-10 bg-purple-100 dark:bg-purple-900/60 rounded-full flex items-center justify-center mr-4 shadow-md",children:y.jsx("span",{className:"text-purple-600 dark:text-purple-400",children:"📧"})}),y.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"parthbhodia08@gmail.com"})]}),y.jsxs("div",{className:"flex items-center transform transition-transform hover:translate-x-2",children:[y.jsx("div",{className:"w-10 h-10 bg-purple-100 dark:bg-purple-900/60 rounded-full flex items-center justify-center mr-4 shadow-md",children:y.jsx("span",{className:"text-purple-600 dark:text-purple-400",children:"📍"})}),y.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Jersey City, NJ"})]})]})]}),y.jsxs("form",{onSubmit:_,className:"space-y-4 bg-white/70 dark:bg-black/50 p-6 rounded-lg shadow-md backdrop-blur-sm",children:[y.jsxs("div",{children:[y.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Name"}),y.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:v,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"})]}),y.jsxs("div",{children:[y.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email"}),y.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:v,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"})]}),y.jsxs("div",{children:[y.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Subject"}),y.jsx("input",{type:"text",id:"subject",name:"subject",value:r.subject,onChange:v,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"})]}),y.jsxs("div",{children:[y.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Message"}),y.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:v,rows:4,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"})]}),y.jsx("button",{type:"submit",disabled:s,className:"w-full py-3 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white rounded-md hover:from-purple-600 hover:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none disabled:hover:shadow-md",children:s?"Sending...":"Send Message"}),o&&y.jsx("p",{className:`text-center mt-4 ${c?"text-purple-600":"text-red-600"}`,children:o})]})]})})]})}),y.jsx("div",{className:"fixed bottom-6 right-6 z-40",children:y.jsx("button",{onClick:w,className:"w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white rounded-full shadow-lg flex items-center justify-center hover:from-purple-600 hover:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600 transition-all transform hover:scale-110",children:y.jsx("span",{className:"text-xl",children:u?"✕":"💬"})})}),u&&y.jsxs("div",{className:"fixed bottom-24 right-6 w-80 md:w-96 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden z-50 border border-purple-200 dark:border-purple-900",children:[y.jsx("div",{className:"p-4 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white",children:y.jsx("h3",{className:"font-medium",children:"Portfolio Assistant"})}),y.jsx("div",{ref:d,className:"h-96 overflow-y-auto p-4 flex flex-col gap-3",children:m.map((M,S)=>y.jsxs("div",{className:`max-w-[80%] p-3 rounded-lg ${M.isUser?"bg-purple-100 dark:bg-purple-900/60 text-gray-800 dark:text-gray-200 self-end shadow-md":"bg-gray-100 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 self-start shadow-md"}`,children:[M.text,y.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:P(M.timestamp)})]},S))}),y.jsx("div",{className:"p-3 border-t border-gray-200 dark:border-gray-800",children:y.jsxs("form",{onSubmit:T,className:"flex gap-2",children:[y.jsx("input",{type:"text",value:g,onChange:M=>p(M.target.value),placeholder:"Ask me anything...",className:"flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"}),y.jsx("button",{type:"submit",disabled:!g.trim(),className:"px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white rounded-md hover:from-purple-600 hover:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600 transition-all disabled:opacity-70",children:"Send"})]})})]}),y.jsx("footer",{className:"py-12 bg-gray-50/70 dark:bg-gray-900/50 backdrop-blur-md border-t border-gray-200 dark:border-gray-800",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:[y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"flex items-center space-x-2",children:[y.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 flex items-center justify-center text-sm text-white font-bold",children:"PB"}),y.jsx("h3",{className:"text-xl font-semibold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text",children:"Parth Bhodia"})]}),y.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Software Developer specializing in Vue.js, React, Node.js, Python, and AWS. Building scalable solutions with modern technologies."}),y.jsxs("div",{className:"flex space-x-4 text-gray-500 dark:text-gray-400",children:[y.jsx("a",{href:"https://github.com/parthbhodia",target:"_blank",rel:"noopener noreferrer",className:"hover:text-purple-600 dark:hover:text-purple-400 transition-colors",children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),y.jsx("a",{href:"https://linkedin.com/in/parthbhodia",target:"_blank",rel:"noopener noreferrer",className:"hover:text-purple-600 dark:hover:text-purple-400 transition-colors",children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),y.jsx("a",{href:"mailto:parthbhodia08@gmail.com",className:"hover:text-purple-600 dark:hover:text-purple-400 transition-colors",children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"})})})]})]}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-lg font-medium mb-4 text-gray-900 dark:text-gray-100",children:"Quick Links"}),y.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-400",children:[y.jsx("li",{children:y.jsxs("a",{href:"/",className:"hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center",children:[y.jsx("span",{className:"mr-2",children:"→"})," Home"]})}),y.jsx("li",{children:y.jsxs("a",{href:"/#about",className:"hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center",children:[y.jsx("span",{className:"mr-2",children:"→"})," About Me"]})}),y.jsx("li",{children:y.jsxs(Un,{href:"/skills",className:"hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center",children:[y.jsx("span",{className:"mr-2",children:"→"})," Skills & Expertise"]})}),y.jsx("li",{children:y.jsxs(Un,{href:"/blog",className:"hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center",children:[y.jsx("span",{className:"mr-2",children:"→"})," Tech Blog"]})}),y.jsx("li",{children:y.jsxs("a",{href:"/#projects",className:"hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center",children:[y.jsx("span",{className:"mr-2",children:"→"})," Portfolio Projects"]})}),y.jsx("li",{children:y.jsxs("a",{href:"/#contact",className:"hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center",children:[y.jsx("span",{className:"mr-2",children:"→"})," Get In Touch"]})})]})]}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-lg font-medium mb-4 text-gray-900 dark:text-gray-100",children:"Stay Updated"}),y.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm mb-4",children:"Subscribe to my newsletter for the latest articles, projects, and tech insights."}),y.jsxs("form",{className:"flex",children:[y.jsx("input",{type:"email",placeholder:"Your email address",className:"flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800/30 bg-white/80 backdrop-blur-sm"}),y.jsx("button",{type:"submit",className:"px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white rounded-r-md hover:from-purple-600 hover:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600 transition-all",children:"Subscribe"})]})]})]}),y.jsx("div",{className:"border-t border-gray-200 dark:border-gray-800 my-8"}),y.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400",children:[y.jsx("div",{className:"flex items-center space-x-2 mb-2",children:y.jsx("span",{children:"Made with ❤️ by Parth Bhodia"})}),y.jsxs("p",{children:["© ",new Date().getFullYear()," Parth Bhodia. All rights reserved."]}),y.jsxs("div",{className:"mt-4 md:mt-0 flex items-center space-x-4",children:[y.jsx("a",{href:"mailto:parthbhodia08@gmail.com",className:"hover:text-purple-600 dark:hover:text-purple-400 transition-colors",children:"Contact"}),y.jsx("span",{className:"text-gray-300 dark:text-gray-700",children:"•"}),y.jsx("a",{href:"https://linkedin.com/in/parthbhodia",target:"_blank",rel:"noopener noreferrer",className:"hover:text-purple-600 dark:hover:text-purple-400 transition-colors",children:"LinkedIn"})]})]})]})})]})}const dS=[{id:"550e8400-e29b-41d4-a716-446655440001",slug:"aws-architecture-scalable-applications",title:"How to Build Scalable AWS Architecture for Applications",excerpt:"Build scalable AWS systems with Lambda, API Gateway, and queues. This guide shows 3 production patterns that reduce p95 latency and improve service reliability.",content:`# Building Scalable Applications with AWS Architecture

Scalable systems are not just about handling traffic spikes; they are about staying fast, reliable, and easy to evolve.

## 1) What are the core building blocks of scalable AWS architecture?

- **API Gateway** to front your APIs securely
- **Lambda** for burst-friendly compute
- **RDS + read replicas** for transactional workloads
- **S3 + CloudFront** for static and media delivery

## 2) How should you structure the baseline AWS architecture?

\`\`text
Client -> CloudFront -> API Gateway -> Lambda -> RDS
                           |
                           +-> S3
\`

## 3) Which real-world AWS scaling patterns work best?

### Example 1: Product Catalog API

A high-traffic catalog endpoint can be handled with API Gateway + Lambda, while frequently requested product details are cached.

\`\`text
Request -> API Gateway -> Lambda (GetProduct) -> RDS Read Replica
                               |
                               +-> Cache hit returns in milliseconds
\`

### Example 2: Image Upload Pipeline

For user-generated media, upload directly to S3 using presigned URLs, then process asynchronously.

\`\`text
Client -> API Gateway -> Lambda (CreateUploadUrl) -> S3
S3 ObjectCreated -> Lambda (ImageResize) -> S3 (optimized) -> CloudFront
\`

### Example 3: Flash-Sale Protection

During sudden traffic spikes, protect the database by queuing write-heavy operations.

\`\`text
Checkout Request -> API Gateway -> Lambda -> SQS Queue -> Worker Lambda -> RDS
\`

This smooths bursts and prevents DB connection exhaustion.

## 4) What design tips prevent common scaling failures?

1. Start with stateless services.
2. Cache expensive reads.
3. Design for failure across AZs.
4. Add observability from day one.

## 5) First Production Rollout Plan

You do not need every AWS service to scale. A small, well-observed architecture beats a complex one every time.

## References and Further Reading

- [Microservices vs Macroservices: Architecture Trade-offs](/blog/microservices-vs-macroservices)
- [Username Availability at Scale](/blog/username-availability-system-design-at-scale)
- [Enterprise RAG Design](/blog/enterprise-rag-evidence-over-context-window)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [AWS Lambda Best Practices](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)
- [Amazon Builders Library](https://aws.amazon.com/builders-library/)`,date:"2025-01-15",readTime:"8 min read",views:1297,category:"Cloud Architecture",image:"/blog-aws.svg",tags:["AWS","Serverless","Scalability","Lambda","API Gateway"]},{id:"550e8400-e29b-41d4-a716-446655440002",slug:"generative-ai-modern-development",title:"How to Integrate Generative AI Into Dev Workflows",excerpt:"Integrate generative AI with guardrails so teams ship faster. This workflow uses 4 review checkpoints to reduce regressions and improve quality in production.",content:`# Integrating Generative AI into Modern Development Workflows

AI tools are strongest when used as accelerators, not autopilots. The teams seeing real gains treat AI as part of an engineering system: prompts, retrieval, evals, and guardrails working together.

## 1) What does a reliable AI-assisted development workflow look like?

\`\`text
Developer -> Prompt -> AI Assistant -> Draft Code
     ^                                |
     +---- Review + Tests + Security -+
\`

## 2) How do you ship an API endpoint with AI support safely?

Suppose a team needs to ship \`/api/invoices/export\` in one sprint.

### Step 1: Specification Drafting

Use AI to convert product notes into a technical checklist:

- request/response shape
- auth and permission rules
- CSV and JSON export modes
- edge cases (large datasets, null fields, timezones)

### Step 2: Scaffold + Tests First

Ask AI for:

- route handler skeleton
- validation schema
- unit test table for success/failure paths
- integration test plan

### Step 3: Security + Reliability Pass

Prompt AI to explicitly threat-model the endpoint:

- injection vectors
- PII leaks in logs
- rate limiting strategy
- retry/idempotency behavior

### Step 4: PR Review Assistant

Before merge, use AI as a reviewer focused on:

- backward compatibility
- migration risks
- performance hotspots
- observability gaps

This pattern turns AI from "code generator" into a continuous engineering copilot across the SDLC.

## 3) Which production challenges appear first with AI-assisted coding?

### 1. Hallucinated APIs and libraries
AI may suggest methods that do not exist in your version.

### 2. Non-deterministic output
The same prompt can produce materially different code quality.

### 3. Context window limits
Large repos and long PRs get truncated, causing shallow reviews.

### 4. Security and compliance drift
Generated code can bypass internal standards if guardrails are weak.

### 5. Evaluation blindness
Teams rely on "looks good" instead of repeatable quality checks.

## 4) What engineering hacks actually improve AI coding outcomes?

### Hack 1: Prompt templates per task
Maintain reusable templates for bugfixing, code review, test generation, and incident analysis. Consistency reduces output variance.

### Hack 2: Retrieval-augmented prompting
Inject local context: coding standards, ADRs, API contracts, and recent incident notes before asking for implementation details.

### Hack 3: Two-model review loop
Model A writes, Model B critiques. Humans approve. This catches many obvious misses early.

### Hack 4: Eval sets for common tasks
Create a small benchmark suite (20-50 prompts) for your real workflows. Track pass rates over time when prompts/models change.

### Hack 5: Guardrails before and after generation
- Input guardrails: block unsafe or policy-breaking prompts.
- Output guardrails: detect secret leakage, insecure patterns, or banned dependencies.

### Hack 6: "Explain before code" mode
Require AI to propose architecture and tradeoffs first, then generate code. This improves design quality and catches wrong assumptions early.

## 5) Team Operating Model for Trustworthy AI Output

- **Junior engineers:** use AI for comprehension, examples, and test scaffolding.
- **Mid-level engineers:** use AI for implementation speed and refactor suggestions.
- **Senior engineers:** use AI for review augmentation, architecture alternatives, and risk analysis.
- **Managers/tech leads:** track throughput, defect rate, and review latency to verify real gains.

## 6) What metrics should teams track for AI development quality?

- PR cycle time
- escaped defect rate
- test coverage delta
- review rework count
- security findings per release

If speed improves but defects spike, the workflow is not mature yet.

## 7) Fastest Way to Start

The best AI-enabled teams do not ask, "Can AI write this file?" They ask, "Where in our engineering loop does AI reduce bottlenecks without reducing trust?"

Used this way, AI meaningfully improves delivery speed, documentation quality, and learning velocity while keeping humans in control of correctness and accountability.

## References and Further Reading

- [Enterprise RAG Design](/blog/enterprise-rag-evidence-over-context-window)
- [Identity Is Diachronic: AI Context Over Time](/blog/identity-is-diachronic-ai-context)
- [Microservices vs Modular Monolith](/blog/microservices-vs-macroservices)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [GitHub Copilot Research: Productivity and Quality](https://github.blog/news-insights/research/)`,date:"2025-01-12",readTime:"10 min read",views:982,category:"Artificial Intelligence",image:"/blog-ai.svg",tags:["AI","GPT","Productivity","Code Review","Developer Tools"]},{id:"550e8400-e29b-41d4-a716-446655440003",slug:"microservices-vs-macroservices",title:"How to Choose Microservices vs Modular Monolith Architecture",excerpt:"Architecture choices shape speed, reliability, and ownership. Use this guide and 5 decision criteria to choose the model that fits your current product stage.",content:`# Microservices vs Modular Monolith: Choosing the Right Architecture

Architecture should fit your constraints, not trends. The right answer depends on team topology, domain boundaries, operational maturity, and change velocity.

## 1) What does the microservices vs modular monolith decision look like?

\`\`text
Modular Monolith
App -> [Auth | Billing | Content | Search] -> One DB

Microservices
Gateway -> AuthSvc -> AuthDB
        -> BillingSvc -> BillingDB
        -> ContentSvc -> ContentDB
\`

## 2) What is the core trade-off between these architectures?

- **Modular monolith** optimizes for development speed, simplicity, and transactional consistency.
- **Microservices** optimize for team autonomy, selective scaling, and fault isolation.

You are trading coordination complexity for runtime distribution complexity.

## 3) Which practical framework helps teams decide quickly?

Ask these in order:

1. Are domain boundaries stable enough to split now?
2. Do teams need independent deploy cycles weekly?
3. Do components have very different scale profiles?
4. Can your platform team support observability, tracing, and on-call load?
5. Is your incident response mature for distributed failure modes?

If 1-2 are no, start modular monolith.
If 3-5 are yes and persistent, microservices may be justified.

## 4) When does a modular monolith outperform microservices?

### 1. Faster Product Iteration

Single repo, single deployment unit, simpler local setup, and lower cognitive overhead usually mean faster feature delivery for early-stage teams.

### 2. Strong Consistency by Default

Cross-module writes can share one transaction boundary. This is valuable for domains like finance, inventory, and compliance-heavy workflows.

### 3. Easier Testing and Debugging

One process boundary means fewer distributed unknowns. You can step through end-to-end flows without chasing network hops.

### 4. Lower Platform Tax

No service mesh requirement, fewer deployment pipelines, less infra toil, fewer pages caused by inter-service contracts.

## 5) When do microservices become the better choice?

### 1. Independent Scalability

CPU-heavy search, IO-heavy export, and latency-sensitive auth can scale independently, reducing waste in high-traffic systems.

### 2. Team Autonomy

Domain teams can own build-test-deploy for their service without waiting on global release trains.

### 3. Fault Isolation

A failure in recommendations should not take down checkout. Service boundaries can contain blast radius when designed well.

### 4. Technology Flexibility

Different services can use different storage or runtimes where justified, though this should be intentional and limited.

## 6) Hidden Costs Teams Underestimate

### With Microservices

- Distributed tracing and observability are mandatory, not optional.
- Data consistency becomes eventual; compensation workflows are needed.
- Contract testing and versioning overhead grows continuously.
- On-call complexity and incident coordination increase significantly.

### With Modular Monoliths

- Without strict boundaries, codebases can decay into tangled monoliths.
- Hotspots can block team parallelism if ownership is unclear.
- Scaling bottlenecks may force extraction later under pressure.

## 7) Guardrails That Keep Each Architecture Healthy

### Modular Monolith Guardrails

- Enforce module boundaries with package rules and architecture tests.
- Use explicit interfaces between modules, not shared internals.
- Assign clear ownership per module and API contract.
- Track coupling metrics (imports, change frequency, shared tables).

### Microservices Guardrails

- Start with bounded contexts, not org charts.
- Require API contracts and consumer-driven contract tests.
- Instrument everything (logs, metrics, traces) before scaling service count.
- Standardize retries, timeouts, idempotency, and circuit breakers platform-wide.

## 8) Migration Path from Monolith to Services

### Stage 1: Modularize Internally

Create clear modules and interfaces inside one deployable app.

### Stage 2: Identify Extraction Signals

Extract only when there is repeated pain:

- independent scaling pressure
- independent release urgency
- reliability isolation need

### Stage 3: Extract One High-Value Service

Pick a domain with stable boundaries and clear ROI (for example search or notifications).

### Stage 4: Prove Operational Readiness

Before second extraction, validate on-call, rollback speed, tracing quality, and contract stability.

### 9) Anti-Patterns to Avoid Early

- Splitting services by CRUD entity too early.
- Creating shared "common" databases across services.
- Adopting microservices to match hype rather than solve bottlenecks.
- Ignoring platform investment while increasing service count.

### 10) Next Step for Your Architecture

The best architecture is the one your team can operate confidently and evolve safely.

For most teams, a modular monolith is the highest-leverage starting point. Move to microservices selectively, driven by measured pain and proven readiness, not by fashion.

### References and Further Reading

- [AWS Architecture for Scalable Apps](/blog/aws-architecture-scalable-applications)
- [Enterprise RAG Design](/blog/enterprise-rag-evidence-over-context-window)
- [Generative AI Dev Workflows](/blog/generative-ai-modern-development)
- [Martin Fowler: Monolith First](https://martinfowler.com/bliki/MonolithFirst.html)
- [Microservices by Sam Newman](https://samnewman.io/books/building_microservices_2nd_edition/)
- [Google SRE Workbook](https://sre.google/workbook/table-of-contents/)`,date:"2025-01-10",readTime:"12 min read",views:1543,category:"Software Architecture",image:"/blog-architecture.svg",tags:["Microservices","Monolith","Architecture","DDD","Scalability"]},{id:"550e8400-e29b-41d4-a716-446655440004",slug:"identity-is-diachronic-ai-context",title:"How AI Identity Evolves Over Time: A Practical Context Guide",excerpt:"AI systems lose trust when context stays static as goals change. This guide shows a 3-layer identity model that improves continuity, personalization, and trust.",content:`# Identity Is Diachronic: Why Temporal Context is the Next Frontier in AI

The quality of any single AI output is shaped less by model size alone and more by the context available at inference time.

If context is sparse, stale, or poorly ranked, even strong models produce generic answers. If context is structured, current, and relevant, the same model can produce responses that feel accurate, personalized, and useful.

This is why context engineering sits at the center of modern AI product quality. But there is a deeper insight hiding here: the best systems are not managing "context" at all. They are modeling **identity over time**.

## 1) The Static Context Problem: Why Stateless Design Breaks at Scale

Most AI products treat each interaction as a fresh start. A user opens the app, the system reads whatever is in the request, generates a response, and forgets everything.

This works for one-off tasks: "Translate this sentence." "Summarize this PDF." But it fails catastrophically for anything ongoing.

Consider a learning platform. Day 1: a student says "I'm terrible at math." The system provides beginner-level content. Day 5: the student has progressed, solved 50 problems, aced a quiz. Day 6: the system doesn't remember. It sees a new session and treats the student like they still can't do math. It feels broken because it *is* broken.

Or a writing assistant. On Monday, a CEO explains her company's vision for 30 minutes—core values, market positioning, tone, audience. The system learns her writing style, her priorities, her voice. On Tuesday, she returns. The system has no memory. Every time it sees her, she has to re-explain everything. The system is not useful; it is exhausting.

Not all context behaves the same way:

- **Static context**: durable facts, long-term preferences, goals, constraints, identity anchors, core values.
- **Volatile context**: recent interactions, conversation state, current task progress, immediate corrections.
- **Evolving context**: goals-in-progress, changing priorities, learned preferences, skill progression, shifts in direction.

Systems that are truly generative, 1-to-1, and dynamic must handle all three types simultaneously at scale. And the hard part is not storage—it is **continuity with change**.

How do you preserve coherence while allowing meaningful updates? How do you avoid treating identity as either frozen (unable to grow) or chaotic (unable to feel stable)?

## 2) Why "Identity" is a Better Frame Than "Context Management"

The word "context" is passive. It sounds like a search problem: retrieve relevant facts, stuff them into a prompt, hope the model uses them well.

But the deeper problem is active and structural. It is not "what facts should we retrieve?" It is "who is this person becoming, and how should we model their trajectory?"

A useful answer comes from philosophy and cognitive science. In philosophy, there is a concept called **diachronic identity**: the idea that you can be the same person across time even as you change meaningfully.

You are not the same person you were at age 8. Your beliefs, knowledge, goals, and values have shifted. Yet there is continuity. Your growth is coherent. You can look back and trace how you evolved. You are the same entity persisting through transformation.

Humans, teams, agents, communities, and brands all have this property. They persist while they change. They have identity that is stable enough to be recognizable but flexible enough to evolve.

When we import this frame into software systems, the design problem changes:

- Context stops being a retrieval problem.
- It becomes a **modeling problem**: How do we represent who someone is, how they got here, and where they are heading?
- It becomes a **synthesis problem**: Which slice of their identity matters for this moment?
- It becomes a **governance problem**: How do we update their model without losing coherence?

## 3) The Three Layers of Diachronic Identity

When you design a system that tracks diachronic identity, it is not one monolithic store. It is a layered architecture:

![Three-Layer Identity Architecture](/identity-architecture.svg)

### Layer 1: The Stable Identity Core
This is what persists. Core values, fundamental preferences, long-term constraints, unchanging facts.

For a student: "I want to become a software engineer." "I learn best from examples." "I struggle with abstract math." "I have limited time on weekday mornings."

For a CEO: "My company solves billing problems for SaaS." "We target mid-market." "Our tone is direct, not marketing-y." "I care about unit economics."

This layer is sparse. It should only contain information that *truly* doesn't change. Everything else corrupts it.

### Layer 2: The Trajectory Layer
How is this person or entity *changing*? What are they working toward? What momentum are they building?

For a student: "Started at algebra; now at calculus." "Quiz scores improving 3-5% per week." "Recently asked about advanced topics (shift in confidence)." "Engagement up 40% since study group was added."

For a CEO: "Launched feature X last month; customer feedback is mixed." "Currently hiring for leadership roles." "Recently shifted focus from growth to retention." "Reading three books on organizational design."

This layer captures motion, not just state. It is forward-looking. It says "they were here, now they are here, therefore they are heading toward...?"

### Layer 3: The Session Context
What is happening right now? What is the immediate goal? What constraints apply to this specific interaction?

For a student: "Working on calculus homework, specifically limits." "Has 30 minutes." "Just got frustrated, asked for a break."

For a CEO: "Writing an all-hands memo about the pivot." "Wants it to be inspiring but honest." "Nervous about retention concerns."

This layer is ephemeral. It lives and dies with the session. It is not stored, only passed along during interaction.

\`\`\`
        Session Context (ephemeral)
                ↓
        Trajectory Layer (momentum)
                ↓
        Stable Identity Core (persistent)
                ↓
        Synthesis → Relevant Context Slice → Model Input
\`\`\`

The synthesis step is critical. You do not dump all three layers into the prompt. You synthesize: given the session goal and trajectory, which aspects of their stable identity matter right now?

## 4) Why Temporal Retrieval Changes Everything

Vector search is semantic: "Find documents similar to the query in meaning."

Temporal retrieval is semantic *and* time-aware: "Find the right information at the right age, weighted by how much it should influence this moment."

Consider a user's goal history. Over 6 months, they said:

- Month 1: "I want to learn machine learning."
- Month 2: "Actually, I want to specialize in computer vision."
- Month 3: "I realized I hate deep learning math. I want to focus on computer vision applications instead."
- Month 4: "I want to build a production CV system."
- Month 5: "I got hired as a CV engineer! Now I need to learn about edge deployment."
- Month 6: "We're considering moving to mobile; I need to learn TensorFlow Lite."

A naive system sees "user interested in ML" and surfaces generic ML content. A semantic search system surfaces vision + deep learning content because it is most similar to their recent queries. But a temporal system understands:

- "Their original interest (ML) is stable but was refined."
- "They went through a rejection phase (deep learning math) which teaches us they prefer practical work."
- "Their trajectory shows progression: learning → application → production → deployment."
- "Right now, TensorFlow Lite is 100% relevant because it is the next step."

Temporal retrieval uses these signals:

- **Recency**: How fresh is this information? (Recently stated goals matter more.)
- **Stability**: How many times has this been reinforced? (Repeated signals are more stable.)
- **Trajectory**: Does this fit the direction they are heading? (Aligned signals matter more.)
- **Decay**: How much should old signals still influence us? (Not all old information is obsolete.)
- **Conflict**: Do we have contradicting information? (When goals shift, old signals may become noise.)

![Temporal Retrieval Weighting](/temporal-retrieval.svg)

![Diachronic Identity Timeline](/identity-timeline.svg)

## 5) The Architecture of Update and Conflict Resolution

Diachronic systems handle contradiction differently than append-only databases.

When a user says "I no longer care about X," this is not a data error to ignore. It is a meaningful update. The system should:

1. **Record the change**: "At time T, preference shifted from X to not-X."
2. **Understand it**: "Did they discover X was not valuable? Did their constraints change? Did they achieve X and move on?"
3. **Integrate it**: "How should this change affect what we retrieve and synthesize?"

This requires **merge semantics**. When two pieces of information conflict:

- **Recency wins by default**: Newer signals override older ones, unless...
- **Stability breaks ties**: If both are recent but one is repeated, the repeated one wins.
- **Explicit overrides win**: If a user directly contradicts themselves with intent, that is a signal, not noise.
- **Confidence propagates**: If you know how sure they were about the old signal, you can adjust how much it still influences retrieval.

Example:

\`\`\`
Old: "I use Python" (stated 18 months ago, frequency: 20 times)
New: "I switched to Rust" (stated 3 days ago, frequency: 2 times)

Merge logic:
Conflict detected.
Recency favors Rust (3 days < 18 months).
Stability favors Python (20 > 2).
Resolution: Rust is primary, Python is historical.
Synthesis: "You recently shifted to Rust, but your Python background is strong."
\`\`\`

Without this, systems either:
- Forget the user ever knew Python (recency-only).
- Keep suggesting Python because it is the "most stable" signal (stability-only).
- Suggest both equally, confusing the user.

## 6) The Personalization Must Be Reversible

Here is a subtle but crucial constraint: users should be able to inspect, correct, and reset their identity at any level.

Imagine a writing assistant that has learned your style. It autocompletes sentences. It suggests paragraph rewrites. It knows your voice.

Then one day, you realize: "Actually, I do not want the system to know my voice this well. It is too autocratic. I want more creative suggestions."

Or: "The system remembered I once said I hate passive voice, but I changed my mind. Now it is too aggressive about it."

Or: "I am working on a different project. Can I start fresh without losing my profile?"

Good diachronic systems allow users to:

1. **See what is stored about them**: "Show me what you know about my writing preferences."
2. **Correct it**: "Actually, I like this kind of passive construction. Remove that."
3. **Scope it**: "Apply this identity only to fiction, not business writing."
4. **Reset parts of it**: "Forget everything from before I switched jobs."
5. **Pause learning**: "Stop updating my profile for the next week while I experiment."

This is not just privacy. It is **transparency and control**. A system that remembers you is only trustworthy if you can see what it remembers and change it.

## 7) Evaluation: Beyond Single-Turn Metrics

Naive benchmarking measures single-turn quality: given a prompt, how good is the response?

Diachronic systems need a different evaluation framework.

### Dimension 1: Coherence Over Time
Does the system remain coherent across 50 conversations spanning 6 months?

\`\`\`
Metric: Consistency Score
- Give the system the same "identity"
- Ask similar questions at T0, T3, T6
- Does the system give roughly the same answers?
- If the user *changed*, does the system detect and adapt?
\`\`\`

### Dimension 2: Trajectory Alignment
Does the system understand where the user is heading and bias toward relevant help?

\`\`\`
Metric: Trajectory Precision
- Track user's stated goals over time
- At any point, predict: "What should the system help with next?"
- Measure how often the system suggests the right next step
\`\`\`

### Dimension 3: Update Integrity
When the user corrects themselves, does the system update correctly without losing stability?

\`\`\`
Metric: Conflict Resolution Quality
- Insert contradictions into the profile
- Ask the system questions that depend on resolving the conflict
- Measure: did it pick the most reasonable interpretation?
\`\`\`

### Dimension 4: Transparency and Control
Can users see and modify what the system knows about them?

\`\`\`
Metric: Editability Score
- User makes 20 edits to their profile
- System re-asks questions that depended on the old data
- Do the responses reflect the new information?
- Do users report feeling in control?
\`\`\`

### Dimension 5: Failure Recovery
When the system makes a wrong assumption, how well does it recover?

\`\`\`
Metric: Recovery Speed
- System makes a wrong assumption (e.g., misunderstands a user's goal)
- User corrects it
- On the next 10 interactions, does the error influence the system less?
- Does confidence in the wrong assumption decay?
\`\`\`

Single-turn benchmarks miss all of this. A system could score 95/100 on GPT-Eval and still be unusable because it has no memory, no understanding of trajectory, and no way to correct itself.

## 8) Real-World Failure Modes and How They Surface

![Identity Failure Modes](/failure-modes.svg)

### Failure 1: The Forgetting Problem
The system loses important durable context.

**Signature:** User frustration creeping in around week 2-3. "Why did you forget? I told you this last month."

**Example:** A product manager using an AI assistant for strategy. They explain their quarterly priorities in January. By March, the system has forgotten and suggests tactics that contradict those priorities.

**Root cause:** Context window limitations, aggressive pruning, or no layer 1 (stable identity core).

**Fix:** Explicit durable layer. Identify 5-10 facts that *truly* define the user and never let them age out.

### Failure 2: Overfitting to Recency
The system chases the latest signal and drops stable truths.

**Signature:** System behavior shifts dramatically after one or two recent interactions. "You suddenly think I like X, but I never said that."

**Example:** A user explores a new technology out of curiosity. The system assumes it is a new career direction and starts suggesting it constantly. The user gets annoyed: "It was just curiosity, not a goal shift."

**Root cause:** No stability weighting. No difference between "said once" and "said 20 times."

**Fix:** Stability metrics. One signal should not override months of consistency.

### Failure 3: Profile Lock-In
The system treats old traits as permanent even after the user has evolved.

**Signature:** "You keep assuming I am a beginner, but I have learned a lot since we started."

**Example:** A student starts with a math tutor as a struggling learner. By month 3, they are strong. But the system still gives beginner explanations because the initial profile says "struggles with math."

**Root cause:** No trajectory layer. The system sees the initial state as static.

**Fix:** Explicit trajectory modeling. "They were here, now they are here, so they are progressing toward..."

### Failure 4: Context Bloat
The system stores too much and retrieves noise instead of signal.

**Signature:** Responses become generic or contradictory. "It sounds like you are giving me random facts instead of understanding me."

**Example:** After 1000 interactions, the system has so much context that synthesis is impossible. The prompt becomes a messy pile of half-relevant facts.

**Root cause:** No compression or summarization. Every interaction is stored raw.

**Fix:** Learn to summarize. "These 50 interactions about X can be compressed to: 'They care about performance, not simplicity.'"

## 9) Advanced: Confidence Scoring and Uncertainty in Identity Models

A mature diachronic system tracks not just *what* it knows, but **how sure it is**.

You might know:
- "This user is a software engineer." (confidence: 99%, stated directly 100 times)
- "This user likes Python." (confidence: 85%, stated 15 times but might change)
- "This user wants to start a company." (confidence: 60%, mentioned once in passing)

Confidence affects:

1. **Retrieval weighting**: High-confidence facts get synthesized more often.
2. **Synthesis strategy**: For low-confidence beliefs, present options instead of assuming.
3. **Update inertia**: High-confidence facts resist change; low-confidence facts update easily.
4. **Uncertainty communication**: Tell the user when you are guessing.

Example response:

\`\`\`
Low confidence:
"You mentioned interest in AI, though you also said you like hands-on work. 
Based on your background, you might enjoy applied ML more than research. 
Want to explore that?"

Vs.

High confidence:
"Your background is in systems engineering and you have consistently 
focused on production reliability. 
I will emphasize that in suggestions."
\`\`\`

## 10) Building Diachronic Identity in Production

### Start Small
1. Define layer 1 (stable core): 5-10 durable facts about the user. Explicit, mutable by user.
2. Add trajectory signals: Track goal progression (stated goals, milestones, detected shifts).
3. Implement temporal retrieval: Weight recent + stable signals higher than recent + unstable.

### Measure What Matters
1. Retention: Do users feel understood over weeks and months?
2. Coherence: Do system responses feel consistent with user's sense of self?
3. Growth detection: Does the system notice when users improve or change direction?
4. Control: Can users inspect and modify their profile easily?

### Avoid Common Traps
1. **Don't conflate quantity with quality.** More context is not better. Better context is better.
2. **Don't treat identity as static.** Periodically ask users: "Has anything about you changed?"
3. **Don't hide what you remember.** Users should be able to see and edit their profile.
4. **Don't rely on embeddings alone.** Add explicit reasoning about time, stability, and confidence.

## 11) Why This Matters Beyond Product

Diachronic identity is not just a feature optimization. It is a design philosophy.

It says: **AI systems should respect human growth.** They should not lock you into who you were. They should understand you as a becoming, not a state.

A student becomes a job seeker. A junior engineer becomes a senior architect. A job seeker becomes a founder. A founder becomes a leader. A leader becomes a thinker.

Good AI should evolve with you, not flatten you.

That requires systems that understand:
- Who you are now
- Who you were
- Who you are becoming
- The difference between stable essence and temporary state
- How to be coherent while changing

The next wave of AI products will not be defined by bigger models or cleverer prompts. They will be defined by temporal intelligence. By systems that understand that identity is diachronic.

### References and Further Reading

- [Generative AI in Development Workflows](/blog/generative-ai-modern-development)
- [Enterprise RAG Design](/blog/enterprise-rag-evidence-over-context-window)
- [How to Beat the 2 PM Slump](/blog/beat-the-2pm-slump-without-more-coffee)
- Derek Parfit - *Reasons and Persons* (on personal identity and change)
- [NIST Privacy Framework](https://www.nist.gov/privacy-framework)
- [Human-Centered AI Guidelines](https://pair.withgoogle.com/guidebook/)
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [Semantic Drift in Long-Running ML Systems](https://arxiv.org/abs/2012.00099)
- [Personalization and Privacy in Recommender Systems](https://arxiv.org/abs/2102.06844)`,date:"2025-09-18",readTime:"18 min read",views:745,category:"Philosophy of AI",image:"/blog-identity.svg",tags:["philosophy","cogsci","ml","identity","context engineering"]},{id:"550e8400-e29b-41d4-a716-446655440005",slug:"beat-the-2pm-slump-without-more-coffee",title:"How to Beat the 2 PM Slump Without Drinking More Coffee",excerpt:"Beat the 2 PM slump with a practical reset routine. This 10-minute protocol improves focus by 20 to 30 percent and helps sustain output without extra coffee.",content:`# The 2 PM Slowdown: How to Reset Your Brain Without Another Coffee

You know the feeling: mornings are clear, decisions feel easy, and your inbox is manageable. Then around 2 PM, everything slows down.

That does not mean you are lazy or losing discipline. It is usually a mix of normal biology, cognitive fatigue, and environment design.

## 1) Why does the 2 PM energy slump happen?

Most people experience a midday dip in alertness. Add long screen time, context switching, heavy lunch, and back-to-back decisions, and your brain runs out of high-quality attention.

By afternoon, tasks are not objectively harder, but they *feel* harder because your mental energy is lower.

## 2) Fast 2 PM Reset Routine

\`\`text
2 PM Slump -> Pause 10 min -> Light + Movement -> Hydration -> Priority Reset -> Better Output
\`\`\`

## 3) How do you run a 10-minute recovery protocol?

### 1) Step away from your screen

Take 10 minutes away from your desk. If possible, walk outside. Movement plus visual distance from screens reduces cognitive load faster than doom-scrolling or another tab.

### 2) Get natural light

Even a few minutes of daylight helps reset alertness. Sit near a window or step outside. Light is one of the fastest non-caffeine signals your brain responds to.

### 3) Hydrate before you caffeinate

Mild dehydration can amplify fatigue. Drink water first. If you still want caffeine, take a smaller dose than usual and avoid it too late in the day.

### 4) Reset your task list to one priority

Afternoon fog gets worse when you stare at 20 unfinished tasks. Choose one meaningful task for the next 45-60 minutes and ignore the rest.

### 5) Lower activation energy

Start with the smallest concrete action:

- open the doc
- write three bullets
- respond to one key email
- run one command

Momentum usually returns after the first 5 minutes.

## 4) How should workload match afternoon energy patterns?

Do not force deep creative work at your lowest energy by default.

Use afternoons for:

- admin and email batching
- code cleanup
- review and QA
- scheduled calls

Reserve your peak window for deep work (architecture, strategy, hard coding, writing).

## 5) Which mistakes make the afternoon crash worse?

- taking more caffeine instead of taking a reset break
- eating a heavy lunch and jumping straight into meetings
- trying to multitask through fatigue
- using guilt as a productivity strategy

The trough does not last forever. But fighting it without a system wastes hours.

## 6) Daily Rhythm That Sustains Results

- **Morning:** highest-value deep work
- **Early afternoon:** reset + medium-complexity tasks
- **Late afternoon:** coordination, review, planning tomorrow

This is not about doing less. It is about doing the right work at the right energy level.

## 7) What should you test this week?

When 2 PM hits, do not interpret it as failure. Treat it as a signal to switch modes. A short reset, light movement, and one clear next task can recover most of your afternoon.

## References and Further Reading

- [Generative AI Workflows for Teams](/blog/generative-ai-modern-development)
- [Identity and Context in AI Systems](/blog/identity-is-diachronic-ai-context)
- [How Username Availability Works at Scale](/blog/username-availability-system-design-at-scale)
- [CDC: Sleep and Health](https://www.cdc.gov/sleep/about_sleep/sleep_hygiene.html)
- [Harvard Health: Afternoon Slump](https://www.health.harvard.edu/blog/need-an-afternoon-pick-me-up-try-these-strategies-202304122915)
- [Mayo Clinic: Caffeine and Sleep](https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/caffeine/art-20049372)`,date:"2026-04-30",readTime:"6 min read",views:2156,category:"Productivity",image:"/blog-2pm-reset.svg",tags:["productivity","focus","habits","energy","workflows"]},{id:"550e8400-e29b-41d4-a716-446655440006",slug:"jiobase-case-study-solving-supabase-block-india",title:"How Jiobase Kept Supabase Apps Alive in India: A Case Study",excerpt:"ISP-level failures blocked Supabase traffic, so Jiobase rerouted requests through Cloudflare. This case study shares 8 lessons on resilience, response, and risk",content:`# Jiobase Case Study: How One Developer Kept Supabase Apps Alive in India

Sometimes the best projects are not planned startups. They are emergency fixes for real people.

In early 2026, many Indian developers suddenly found their Supabase-powered apps failing on major ISPs. Instead of waiting for a long policy or vendor resolution cycle, one developer, Sunith, shipped Jiobase: a lightweight Cloudflare-based reverse proxy that helped apps keep working.

## 1) What problem did Jiobase solve during the outage?

Many users on Indian networks could not reliably reach \`*.supabase.co\`.

What developers experienced:

- logins timing out
- API requests failing
- uploads and realtime features breaking

For production apps, this meant users were locked out even though the app code was fine.

## 2) How did the one-line integration fix work?

Jiobase provided a replacement URL.

Instead of sending traffic directly to Supabase, the app sent it to a Jiobase domain, which then forwarded it to Supabase through Cloudflare's edge.

\`\`text
App -> your-app.jiobase.com -> your-project.supabase.co
\`\`\`

From the developer side, integration was intentionally simple: change the Supabase base URL and redeploy.

## 3) Why did this proxy approach work under pressure?

In basic terms:

1. User traffic reached a non-blocked Cloudflare endpoint.
2. The proxy forwarded requests to the original Supabase target.
3. Responses came back through the proxy to the app.

This reduced breakage for users impacted by ISP-level routing/DNS issues.

## 4) Rollout Impact in Practice

Public updates around Jiobase reported very large usage during the incident window, including:

- millions of users/visitors served
- hundreds of millions of requests handled
- thousands of apps kept running
- large DDoS traffic bursts absorbed with Cloudflare protections

The exact numbers vary by source and date, but the practical takeaway is clear: a small infra patch solved a huge production pain point for a large community.

## 5) Engineering Lessons Beyond This Incident

### 1) Solve distribution first

A perfect feature is useless if users cannot reach your backend. Reliability is product.

### 2) Make adoption tiny

A one-line migration beats a 20-step guide. Low-friction fixes spread quickly.

### 3) Use battle-tested infrastructure

Cloudflare Workers + edge network + DDoS protection gave leverage far beyond what one developer could build alone.

### 4) Keep architecture understandable

Jiobase was not magic. It was a clear proxy pattern applied at the right time.

### 5) Ship before consensus

In incidents, speed matters more than polish. A working v1 now is often better than a perfect v5 later.

## 6) What risks and caveats came with this approach?

Proxying critical traffic is powerful but sensitive. Teams should think about:

- trust boundaries
- logging and privacy practices
- key handling
- abuse protection
- ownership and migration plans

Jiobase eventually announced managed shutdown and encouraged self-host migration, which is also a healthy reliability practice: do not leave critical paths dependent on a single community service forever.

## 7) Reusable Build Pattern for Teams

When something external breaks your product:

1. Isolate the failure layer (DNS, network, auth, rate limit, etc.)
2. Build a narrow workaround, not a full rewrite
3. Minimize integration changes for adopters
4. Publish docs + migration path immediately
5. Harden only after adoption starts

## 8) What should teams include in an outage preparation checklist?

Jiobase is a strong example of practical engineering: notice pain, ship fast, reduce complexity for others, and keep improving under load.

If you see a real problem in your ecosystem, build the smallest reliable fix and release it. You never know how many people are waiting for exactly that.

### References and Further Reading

- [AWS Architecture for Scalable Apps](/blog/aws-architecture-scalable-applications)
- [Username Availability at Scale](/blog/username-availability-system-design-at-scale)
- [Enterprise RAG Design](/blog/enterprise-rag-evidence-over-context-window)
- [Cloudflare Learning Center](https://www.cloudflare.com/learning/)
- [Supabase Docs](https://supabase.com/docs)
- [Google SRE: Handling Overload](https://sre.google/sre-book/handling-overload/)`,date:"2026-04-30",readTime:"7 min read",views:3847,category:"Case Study",image:"/blog-jiobase-case-study.svg",tags:["case study","cloudflare","supabase","india","developer story"]},{id:"550e8400-e29b-41d4-a716-446655440007",slug:"enterprise-rag-evidence-over-context-window",title:"How Enterprise RAG Prioritizes Evidence Over Context Window",excerpt:"Enterprise RAG systems fail when they push 300 documents into a 128k window. Learn a retrieval-first design that improves precision, citations, and trust.",content:`# Enterprise RAG Design: Evidence Over Context Window

If you have 300 relevant documents and only 128k context per model call, this is not mainly a model problem. It is a retrieval, ranking, and evidence-selection problem.

You are not trying to stuff documents into an LLM. You are trying to send the smallest set of trustworthy evidence that answers the query.

## System Diagram

\`\`\`text
User Query
   -> Access + Metadata Filters
   -> Hybrid Retrieval (Keyword + Vector)
   -> Candidate Set (high recall)
   -> Reranker (high precision)
   -> Evidence Pack Builder
   -> LLM (grounded prompt + citations)
   -> Answer or Safe No-Answer
\`\`\`

## 1) How should enterprise RAG reduce search space before retrieval?

In enterprise systems, every query should not search every document equally.

Before semantic retrieval, apply hard filters:

- user permissions
- team / department
- source system
- document type
- time range
- project / customer / ticket metadata
- freshness constraints

If a user asks pricing decisions for last quarter, your system should not pull HR pages or random old chat logs.

Good retrieval starts by removing what should never be considered.

## 2) Why should enterprise RAG use hybrid retrieval?

Vector search captures meaning. Keyword search captures exact identifiers. Enterprise traffic needs both.

Pure semantic retrieval often misses:

- acronyms
- Jira IDs
- customer names
- invoice numbers
- internal codenames
- release versions

A practical first pass:

- metadata + ACL filters
- keyword retrieval
- vector retrieval
- merge + dedupe candidates

At this point, 300 docs are still not context. They are candidates.

## 3) How do you rerank enterprise RAG results for precision?

Initial retrieval optimizes recall. Reranking optimizes precision.

Reranker scoring should include:

- query relevance
- freshness
- source authority
- chunk answer-likelihood
- stale/outdated penalties
- redundancy penalties

Sending 30 high-signal chunks is almost always better than sending 300 mediocre ones.

## 4) Why pack evidence instead of full documents?

A common failure mode is dropping whole documents into prompt context. That wastes tokens and still misses key passages.

Build chunk-level evidence packets with context fields:

- document title
- section heading
- adjacent paragraphs
- timestamp
- source URL
- owner/team
- permission markers

Then structure the prompt payload:

- direct answer evidence
- supporting evidence
- recent updates
- authoritative decision records
- conflicting evidence when present

The target is not to fill 128k tokens. The target is to ground the answer safely.

## 5) When should enterprise RAG return no-answer?

In enterprise search, a confident wrong answer is worse than no answer.

Prompt and policy should allow:

- answer only from provided evidence
- cite sources
- state uncertainty
- ask clarification for ambiguous queries
- refuse to invent missing details

If confidence is low, return: related docs found, but insufficient evidence for a confident answer.

That is a better product than polished hallucination.

## 6) Monitor Retrieval Quality, Not Just LLM Quality

Track the full pipeline, not only final text quality:

- retrieval recall
- reranker precision
- citation accuracy
- source click-through
- stale-document usage
- permission leakage
- no-answer rate
- latency + cost per query

If these metrics are weak, better prompts alone will not save the system.

## My 2 Cents

Most teams over-invest in model swapping and under-invest in retrieval engineering.

If your retrieval layer is weak, a stronger model just hallucinates more fluently. If your retrieval layer is strong, even smaller models can produce reliable enterprise answers.

Treat retrieval and evidence packing as core product infrastructure, not glue code. That's usually where the real quality step-change comes from.

### References and Further Reading

- [How Username Availability Works at Scale](/blog/username-availability-system-design-at-scale)
- [Microservices vs Macroservices: Architecture Trade-offs](/blog/microservices-vs-macroservices)
- [Generative AI in Modern Development](/blog/generative-ai-modern-development)
- [BM25 and Beyond: SIGIR Tutorial](https://sigir.org/sigir2021/tutorials/TOIS_BM25_Beyond.pdf)
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [NIST Information Retrieval Overview](https://www.nist.gov/itl/iad/mig/information-retrieval)`,date:"2026-04-30",readTime:"8 min read",views:2654,category:"System Design",image:"/blog-enterprise-rag.svg",tags:["system design","rag","retrieval","llm","enterprise"]},{id:"550e8400-e29b-41d4-a716-446655440008",slug:"username-availability-system-design-at-scale",title:"How Username Availability Works at Scale: Beyond a DB Check",excerpt:"Username availability at scale needs more than DB checks. This design handles millions of requests with debounce, cache layers, and a 2-step ownership check.",content:`# How Username Availability Works at Scale

A username box looks tiny in the UI. You type a name, and the product says: available or taken.

At large scale, this is not a simple database lookup problem. It is a traffic-shaping and correctness problem: how to prevent billions of noisy checks from becoming expensive reads.

## 1) What does a scalable username availability flow look like?

\`\`\`text
User Typing
  -> Debounce in Client
  -> Normalize Username
  -> Cache / Reserved / Bloom Checks
  -> Indexed DB Existence Lookup (if needed)
  -> Availability Hint
  -> Final Signup Write with Unique Constraint
\`\`\`

## 2) How do you reduce noisy availability traffic on the frontend?

If a user types \`sameer123\`, the backend should not receive checks for:

- s
- sa
- sam
- same
- samee
- sameer

Use debounce (typically 300-500 ms). If the user keeps typing, reset the timer.

This one client-side rule removes a huge amount of useless traffic before it touches infrastructure.

## 3) Normalization Before Lookup

\`Sameer\`, \` sameer \`, and \`SAMEER\` should collapse to one canonical value.

Also apply validation early:

- allowed characters
- length limits
- reserved words
- blocked names

Why this matters: cache keys only work when equivalent input maps to the same key. Weak normalization fragments cache and increases DB load.

## 4) Why should the database be a last resort for checks?

Do cheaper checks first:

- hot cache for recent checks
- reserved username list
- negative cache for recently available values
- Bloom filter for fast existence screening

Bloom filter behavior:

- says definitely not present -> skip DB
- says might be present -> do stronger lookup

This lets large volumes of checks avoid primary storage reads.

## 5) Final Lookup Narrowing and Index Strategy

When you must hit storage, ask one narrow question: does normalized username X exist?

Use a dedicated index on normalized username. Do not fetch profile, preferences, devices, or anything unrelated.

Fast systems win by asking the smallest correct question.

## 6) Availability Is a Hint, Not Ownership

Two users can check the same username at nearly the same time and both see available.

Correctness must be enforced at final write:

- unique constraint
- or atomic reservation transaction

Availability endpoint improves UX responsiveness. Signup write path guarantees correctness.

## 7) How do you protect availability endpoints from abuse?

Username check APIs are attractive for scraping and account enumeration.

Add guardrails:

- per-IP / device rate limiting
- bot detection
- CAPTCHA triggers
- anomaly monitoring
- response shaping to reduce inference of account existence patterns

Security posture is part of system design here, not a separate concern.

## 8) How should you frame this design in interviews?

If asked this in a system design round, explicitly separate:

- UX latency path (fast hint)
- correctness path (atomic final claim)
- abuse path (throttle and detect)

That framing usually signals senior-level thinking because it balances product feel, correctness, and reliability under abuse.

### 9) What are the practical takeaways for production teams?

The best way to make a system feel instant is to be selective about what is allowed to become expensive.

A lot of backend scale wins come from boring but disciplined choices: debounce, normalization, cache hierarchy, and strict final-write guarantees.

### References and Further Reading

- [Microservices vs Modular Monolith](/blog/microservices-vs-macroservices)
- [Enterprise RAG Design](/blog/enterprise-rag-evidence-over-context-window)
- [AWS Architecture for Scalable Apps](/blog/aws-architecture-scalable-applications)
- [OWASP API Security Top 10](https://owasp.org/API-Security/)
- [Redis Caching Patterns](https://redis.io/docs/latest/develop/use/patterns/)
- [Bloom Filters Explained](https://en.wikipedia.org/wiki/Bloom_filter)`,date:"2026-04-30",readTime:"7 min read",views:1902,category:"System Design",image:"/blog-username-availability.svg",tags:["system design","scalability","backend","caching","security"]}];function DN(){Hp({title:"Parth Bhodia - Full Stack Software Developer | Vue.js React Node.js Python AWS Expert",description:"Parth Bhodia is a skilled Full Stack Software Developer specializing in Vue.js, React, Node.js, Python, and AWS. UMBC graduate with expertise in AI/ML, microservices, and scalable web applications.",keywords:"Parth Bhodia, Software Developer, Full Stack Developer, Vue.js, React, Node.js, Python, AWS, Machine Learning, AI, UMBC, Jersey City, Web Development, Microservices, Software Engineer, Frontend Developer, Backend Developer",url:"https://parthbhodia.com"});const t=[{title:"Personalized Knowledge Assistant ChatBOT",description:"ChatBOT using GPT and Pinecone vector databases to predict vendor success rates based on historical data. Reduced time-to-information retrieval by 50%.",tags:["GPT","Pinecone","Machine Learning","Vector DB"],category:"AI/ML",liveUrl:"#",codeUrl:"#",featured:!0},{title:"CMS Management System",description:"Postgres schema design and implementation for CMS managing 100,000+ users with efficient data display and management.",tags:["PostgreSQL","Node.js","Database Design"],category:"Backend",liveUrl:"#",codeUrl:"#",featured:!0},{title:"AWS Authentication System",description:"Secure Login and Registration system with JWT authentication using AWS Amplify, Cognito, API Gateway, and Lambda Services.",tags:["AWS","JWT","Cognito","Lambda","API Gateway"],category:"Cloud/Security",liveUrl:"#",codeUrl:"#",featured:!0},{title:"Dynamic AWS Lambda Functions",description:"HTML content generation with Open Graph metadata for enhanced social media sharing and SEO for sports news platform.",tags:["AWS Lambda","SEO","Open Graph","HTML"],category:"Cloud",liveUrl:"#",codeUrl:"#",featured:!0},{title:"NLSE Sports Website with Stripe",description:"Sports entertainment website with integrated Stripe payment processing for ticket sales and event bookings.",tags:["Stripe","Payment Processing","Vue.js","Node.js"],category:"E-commerce",liveUrl:"#",codeUrl:"#",featured:!0},{title:"Project Spectrum (Government Website)",description:"Frontend solutions using HTMX and Vue.js for seamless dynamic interactions without full page reloads.",tags:["HTMX","Vue.js","Government","SPA"],category:"Government",liveUrl:"#",codeUrl:"#",featured:!0},{title:"GIS Enemy Detection Framework",description:"GIS-based visualization framework for detecting enemy objects using Elastic Search and Kibana with real-time data processing.",tags:["Elastic Search","Kibana","GIS","Java Spring Boot","RabbitMQ"],category:"Research",liveUrl:"#",codeUrl:"#",featured:!0},{title:"IPT Tool Dashboard",description:"Internal dashboard for 10,000+ users to monitor login activity, app usage, and security metrics with automated testing.",tags:["Django","Python","React","Dashboard","Analytics"],category:"Enterprise",liveUrl:"#",codeUrl:"#",featured:!0},{title:"Back-Bone Cost Map Automation",description:"Automation application using Python3 and Leaflet Open Maps for sales team route optimization, increasing APAC revenue by 36%.",tags:["Python3","Leaflet","Maps","Automation","Sales"],category:"Enterprise",liveUrl:"#",codeUrl:"#",featured:!0},{title:"Nutri AI Scan",description:"Award-winning progressive web app (2nd place CBIC Entrepreneurship UMBC) using OCR to identify allergens and provide healthiness ratings.",tags:["Vue.js","OCR","REST API","MongoDB","PWA"],category:"AI/ML",liveUrl:"#",codeUrl:"#",featured:!0},{title:"Stock Trader",description:"Full-stack stock trading platform with real-time market data, portfolio tracking, and AI-powered trade recommendations. Features live charts, watchlists, and automated alerts.",tags:["React","Node.js","WebSocket","Finance API","AI"],category:"Personal",liveUrl:"https://parthbhodia.github.io/Trading-bot-algo/",codeUrl:"https://github.com/parthbhodia/Trading-bot-algo",image:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",stats:{value:"1.2K+",label:"daily active users"},hideCode:!0,featured:!0},{title:"VibeImg",description:"AI-powered image generation platform that creates stunning visuals from text prompts and mood/vibe descriptors. Supports style transfers, image editing, and social sharing.",tags:["React","Python","Stable Diffusion","AWS S3","AI/ML"],category:"Personal",liveUrl:"https://vibeimg.xyz",codeUrl:"#",image:"https://images.unsplash.com/photo-1686191128892-f5b66b8b5b1a?w=800&h=500&fit=crop",stats:{value:"3.4K+",label:"daily active users"},hideCode:!0,featured:!0},{title:"ResuNova",description:"Intelligent resume builder powered by AI that tailors resumes to job descriptions, scores ATS compatibility, and provides actionable improvement suggestions for job seekers.",tags:["React","Node.js","OpenAI","PDF Generation","ATS"],category:"Personal",liveUrl:"https://resunova.io",codeUrl:"#",image:"https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop",stats:{value:"2.8K+",label:"daily active users"},hideCode:!0,featured:!0},{title:"Cat Lockscreen — Focus Extension",description:"Chrome extension that helps you stay focused with a playful cat lockscreen. Tracks active-tab time across MV3 service-worker cycles using chrome.storage.session, pauses any visible playing videos during breaks (resuming them after), and supports Esc-to-emergency-shoo + popup dismissal. Features a centered, oversized digital-calendar timer overlay.",tags:["Chrome Extension","Manifest V3","JavaScript","Service Worker","Productivity"],category:"Personal",liveUrl:"https://chromewebstore.google.com/detail/claude-code-lockscreen",codeUrl:"#",image:"https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=800&h=500&fit=crop",stats:{value:"Coming Soon",label:"in approval"},hideCode:!0,featured:!0}],e=[...dS].sort((u,h)=>new Date(h.date).getTime()-new Date(u.date).getTime())[0]??null,n=["All","Personal","AI/ML","Backend","Cloud/Security","Cloud","E-commerce","Government","Research","Enterprise"],[r,i]=D.useState("Personal");D.useState(!1),D.useState({name:"",email:"",subject:"",message:""}),D.useState(!1),D.useState(""),D.useState(!1);const[s,a]=D.useState(!1),[o,l]=D.useState([{text:"Hello! I'm here to help you learn about Parth Bhodia. Ask me about his skills, experience, projects, education, or visa status!",isUser:!1,timestamp:new Date}]);D.useState("");const c=D.useRef(null);D.useEffect(()=>{s&&c.current&&f()},[o,s]);const f=()=>{c.current&&(c.current.scrollTop=c.current.scrollHeight)};return y.jsxs(Zc,{showHero:!0,currentPage:"home",children:[y.jsx("section",{id:"companies",className:"py-20",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:y.jsx("span",{className:"bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text",children:"Companies I've Worked With"})}),y.jsxs("div",{className:"relative",children:[y.jsx("div",{className:"overflow-hidden",children:y.jsx("div",{id:"companies-carousel",className:"flex gap-6 transition-transform duration-500 ease-in-out px-4 justify-center",children:[{name:"Eccalon LLC",logo:"https://media.glassdoor.com/sqll/2356227/eccalon-squarelogo-1556550788109.png",role:"Fullstack Developer",period:"May 2022 - Present",description:"Developed personalized knowledge assistant ChatBOT using GPT and Pinecone vector databases, reducing time-to-information retrieval by 50%. Designed Postgres schema for CMS managing 100K+ users. Built secure authentication systems with AWS services."},{name:"University of Maryland, Baltimore County",logo:"https://i.pinimg.com/1200x/4a/14/02/4a1402708352e7c0993d76ea70fefd79.jpg",role:"Research Assistant - Software Developer",period:"Jan 2022 - Dec 2022",description:"Developed GIS-based visualization framework for detecting enemy objects using Elastic Search and Kibana. Used Java Spring Boot to control servers and communicate with edge devices using RabbitMQ."},{name:"Tata Communications Ltd.",logo:"https://cdn.freebiesupply.com/logos/large/2x/tata-communications-logo-png-transparent.png",role:"Software Developer",period:"July 2018 - May 2021",description:"Led development of internal IPT Tool dashboard for 10,000+ users using Django, Python, JavaScript, and React. Developed automation application for Back-Bone Cost Map, increasing APAC region revenue by 36%."}].map((u,h)=>y.jsxs(oT,{children:[y.jsx(lT,{asChild:!0,children:y.jsxs("div",{className:"bg-white/90 dark:bg-black/40 p-6 rounded-lg shadow-lg backdrop-blur-sm cursor-pointer w-72 flex-shrink-0",children:[y.jsx("div",{className:"h-16 flex items-center justify-center mb-4",children:y.jsx("img",{src:u.logo,alt:u.name,className:"max-h-full object-contain"})}),y.jsx("h3",{className:"text-xl font-semibold mb-2 text-center",children:u.name}),y.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-center",children:u.role}),y.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-500 text-center",children:u.period})]})}),y.jsx(S_,{className:"sm:max-w-[425px]",children:y.jsxs(w_,{children:[y.jsxs(b_,{className:"flex items-center gap-2",children:[y.jsx("img",{src:u.logo,alt:u.name,className:"h-8 object-contain"}),y.jsx("span",{children:u.name})]}),y.jsxs(M_,{className:"pt-4",children:[y.jsxs("div",{className:"mb-4",children:[y.jsx("p",{className:"font-semibold text-purple-600 dark:text-purple-400",children:u.role}),y.jsx("p",{className:"text-sm text-gray-500",children:u.period})]}),y.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:u.description})]})]})})]},h))})}),y.jsxs("div",{className:"md:hidden",children:[y.jsx("button",{onClick:()=>{var h;const u=document.getElementById("companies-carousel");if(u){const x=u.style.transform||"translateX(0px)",p=parseInt(((h=x.match(/-?\d+/))==null?void 0:h[0])||"0")+300;p>0?u.style.transform=`translateX(-${300*2}px)`:u.style.transform=`translateX(${p}px)`}},className:"absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 p-3 rounded-full shadow-xl z-30 hover:bg-white dark:hover:bg-gray-900 transition-all",children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),y.jsx("button",{onClick:()=>{var h;const u=document.getElementById("companies-carousel");if(u){const x=u.style.transform||"translateX(0px)",p=parseInt(((h=x.match(/-?\d+/))==null?void 0:h[0])||"0")-300;Math.abs(p)>=300*2?u.style.transform="translateX(0px)":u.style.transform=`translateX(${p}px)`}},className:"absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 p-3 rounded-full shadow-xl z-30 hover:bg-white dark:hover:bg-gray-900 transition-all",children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})]})]})}),y.jsx("section",{id:"about",className:"py-20 bg-gray-50 dark:bg-gray-900/40 backdrop-blur-sm",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsx("h2",{className:"text-3xl font-bold mb-12 text-center relative",children:y.jsx("span",{className:"bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text",children:"About Me"})}),y.jsx("div",{className:"max-w-5xl mx-auto",children:y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 items-center",children:[y.jsx("div",{className:"flex justify-center md:justify-start",children:y.jsx(vA,{src:"/profile-photo.jpg",alt:"Parth Bhodia"})}),y.jsxs("div",{className:"text-gray-700 dark:text-gray-300 space-y-4 bg-white/80 dark:bg-black/40 p-6 rounded-lg shadow-md backdrop-blur-sm",children:[y.jsx("p",{children:"I'm a Software Developer with over 5 years of experience in HTML, CSS, SASS, SCSS, TypeScript, JavaScript, Node.js, Python, and AWS. I'm proficient with modern frameworks such as Vue.js, Nuxt, and React, with extensive experience in REST APIs and GraphQL."}),y.jsx("p",{children:"Currently based in Jersey City, NJ, I'm on F1 OPT status and graduated with a Master's in Computer Science from UMBC in May 2023. My expertise spans from building ChatBOTs with GPT and vector databases to designing systems for 100K+ users."}),y.jsx("p",{children:"I've led projects that reduced information retrieval time by 50% and increased revenue by 36% through automation. I'm passionate about creating efficient, scalable solutions and stay current with emerging technologies in cloud computing and AI/ML."})]})]})})]})}),y.jsx("section",{id:"projects",className:"py-20 bg-gray-50/80 dark:bg-gray-900/30 backdrop-blur-sm",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:y.jsx("span",{className:"bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text",children:"My Projects"})}),y.jsx("div",{className:"flex justify-center flex-wrap gap-2 mb-12",children:n.map((u,h)=>y.jsx("button",{onClick:()=>i(u),className:`px-4 py-2 rounded-full transition-all duration-300 ${r===u?"bg-purple-500 dark:bg-purple-600 text-white shadow-lg category-tab-active":"bg-white/70 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:shadow-md"}`,children:u},h))}),y.jsxs(zs,{speed:.1,children:[y.jsx("div",{className:"w-full overflow-x-auto pb-4",children:y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-w-[320px]",children:t.filter(u=>r==="All"||u.category===r).map((u,h)=>y.jsx(mA,{title:u.title,description:u.description,tags:u.tags,liveUrl:u.liveUrl,codeUrl:u.codeUrl,image:u.image,stats:u.stats,hideCode:u.hideCode,index:h},`${r}-${h}`))})},r),t.filter(u=>r==="All"||u.category===r).length===0&&y.jsx("div",{className:"text-center py-20 text-gray-500 dark:text-gray-400",children:y.jsx("p",{className:"text-xl",children:"No projects found in this category."})})]})]})}),e&&y.jsx("section",{id:"featured-blog",className:"py-20",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsx("h2",{className:"text-3xl font-bold mb-10 text-center",children:y.jsx("span",{className:"bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text",children:"Featured Blog"})}),y.jsxs("div",{className:"max-w-4xl mx-auto bg-white/90 dark:bg-black/40 rounded-2xl p-8 shadow-lg border border-purple-100 dark:border-purple-900/40",children:[y.jsxs("div",{className:"mb-4 flex items-center justify-between flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400",children:[y.jsx("span",{className:"inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 font-medium",children:e.category}),y.jsxs("span",{children:[R_(new Date(e.date),"MMM d, yyyy")," • ",e.readTime]})]}),y.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight",children:e.title}),y.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-8 mb-6",children:e.excerpt}),y.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:e.tags.slice(0,4).map(u=>y.jsxs("span",{className:"px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300",children:["#",u]},u))}),y.jsx(Un,{href:`/blog/${e.slug}`,className:"inline-flex items-center px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors",children:"Read Featured Post"})]})]})})]})}function NN(){Hp({title:"Skills & Expertise - Parth Bhodia | Vue.js React Node.js Python AWS",description:"Explore Parth Bhodia's technical skills and expertise in Full Stack Development, including Vue.js, React, Node.js, Python, AWS, Machine Learning, and Database technologies.",keywords:"Parth Bhodia Skills, Vue.js Expert, React Developer, Node.js Developer, Python Programming, AWS Cloud, Machine Learning, Database Design, Full Stack Skills, Software Development Skills",url:"https://parthbhodia.com/skills"});const t=[{name:"JavaScript",level:95},{name:"TypeScript",level:90},{name:"Vue.js",level:90},{name:"React",level:85},{name:"Node.js",level:90},{name:"Python",level:85},{name:"HTML/CSS/SASS",level:95},{name:"Java (Spring Boot)",level:80},{name:"AWS",level:85},{name:"PostgreSQL",level:80},{name:"MongoDB",level:75},{name:"GraphQL",level:75}];return y.jsx(Zc,{showHero:!1,currentPage:"skills",children:y.jsx("section",{className:"py-20 relative z-10",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsxs("div",{className:"text-center mb-12",children:[y.jsx("h1",{className:"text-4xl font-bold mb-4",children:y.jsx("span",{className:"bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text",children:"Technical Skills"})}),y.jsx("p",{className:"text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"Here's a comprehensive overview of my technical expertise and proficiency levels across various technologies and frameworks."})]}),y.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",children:t.map((e,n)=>y.jsxs("div",{className:"bg-white/90 dark:bg-black/40 p-6 rounded-lg shadow-lg backdrop-blur-sm transform transition-all duration-500 hover:scale-105",children:[y.jsxs("div",{className:"flex justify-between items-center mb-3",children:[y.jsx("span",{className:"font-semibold text-lg",children:e.name}),y.jsxs("span",{className:"text-sm font-medium text-purple-600 dark:text-purple-400",children:[e.level,"%"]})]}),y.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3",children:y.jsx("div",{className:"bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 h-3 rounded-full transition-all duration-1000",style:{width:`${e.level}%`}})})]},n))}),y.jsx("div",{className:"text-center mt-12",children:y.jsx(Un,{href:"/",children:y.jsx("button",{className:"bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300",children:"Back to Home"})})})]})})})}function fS(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=fS(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function IN(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=fS(t))&&(r&&(r+=" "),r+=e);return r}const Ov=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,Bv=IN,kN=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return Bv(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:s}=e,a=Object.keys(i).map(c=>{const f=n==null?void 0:n[c],u=s==null?void 0:s[c];if(f===null)return null;const h=Ov(f)||Ov(u);return i[c][h]}),o=n&&Object.entries(n).reduce((c,f)=>{let[u,h]=f;return h===void 0||(c[u]=h),c},{}),l=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((c,f)=>{let{class:u,className:h,...m}=f;return Object.entries(m).every(x=>{let[g,p]=x;return Array.isArray(p)?p.includes({...s,...o}[g]):{...s,...o}[g]===p})?[...c,u,h]:c},[]);return Bv(t,a,l,n==null?void 0:n.class,n==null?void 0:n.className)},LN=kN("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),hS=D.forwardRef(({className:t,variant:e,size:n,asChild:r=!1,...i},s)=>{const a=r?vu:"button";return y.jsx(a,{className:Ua(LN({variant:e,size:n,className:t})),ref:s,...i})});hS.displayName="Button";function UN({title:t,excerpt:e,url:n,className:r=""}){const[i,s]=D.useState(!1),[a,o]=D.useState(!1),l=[{name:"Facebook",icon:w1,color:"hover:bg-blue-600 hover:text-white",action:()=>{window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(n)}`,"_blank")}},{name:"Twitter",icon:_u,color:"hover:bg-black hover:text-white",action:()=>{const f=`${t} - ${e}`;window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(f)}&url=${encodeURIComponent(n)}`,"_blank")}},{name:"LinkedIn",icon:M1,color:"hover:bg-blue-700 hover:text-white",action:()=>{window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(n)}`,"_blank")}},{name:"Copy Link",icon:b1,color:"hover:bg-gray-600 hover:text-white",action:async()=>{try{await navigator.clipboard.writeText(n),o(!0),setTimeout(()=>o(!1),2e3)}catch{const u=document.createElement("textarea");u.value=n,document.body.appendChild(u),u.select(),document.execCommand("copy"),document.body.removeChild(u),o(!0),setTimeout(()=>o(!1),2e3)}s(!1)}}],c=async()=>{try{navigator.share?await navigator.share({title:t,text:e,url:n}):s(!i)}catch(f){f.name!=="AbortError"&&s(!i)}};return y.jsxs("div",{className:"relative",children:[y.jsxs(hS,{onClick:c,className:`flex items-center space-x-2 ${r}`,variant:"outline",children:[y.jsx(A1,{size:16}),y.jsx("span",{className:"text-sm font-medium",children:a?"Copied!":"Share"})]}),i&&y.jsx("div",{className:"absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 z-50 min-w-[200px]",children:y.jsx("div",{className:"space-y-1",children:l.map(f=>y.jsxs("button",{onClick:f.action,className:`w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md transition-colors ${f.color}`,children:[y.jsx(f.icon,{size:16}),y.jsx("span",{children:f.name})]},f.name))})}),i&&y.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>s(!1)})]})}const FN=dS,zv=()=>{if(typeof window>"u")return{};const t=localStorage.getItem("blog-views");if(!t)return{};try{return JSON.parse(t)}catch{return{}}},ON=t=>{typeof window>"u"||localStorage.setItem("blog-views",JSON.stringify(t))},Zl=t=>t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString(),BN=t=>t.toLowerCase().replace(/<[^>]*>/g,"").replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-"),Uh=(t,e)=>{const n=BN(t)||"section",r=e[n]??0;return e[n]=r+1,r===0?n:`${n}-${r+1}`},zN=t=>{const e=t.split(`
`),n={},r=[],i=new Map(HN(t).map(s=>[s.title,s.minutes]));for(const s of e){if(!s.startsWith("## "))continue;const a=s.slice(3).trim();a&&r.push({id:Uh(a,n),title:a,minutes:i.get(a)??1})}return r.slice(0,10)},HN=t=>{const e=t.split(`
`),n=[];let r="Overview",i=0;const s=()=>{i===0&&n.length>0||n.push({title:r,words:i})};for(const a of e){if(a.startsWith("## ")){s(),r=a.slice(3).trim(),i=0;continue}const o=a.replace(/[`#>*\-]/g," ").trim().split(/\s+/).filter(Boolean).length;i+=o}return s(),n.filter(a=>a.words>10).map(a=>({title:a.title,minutes:Math.max(1,Math.round(a.words/180))})).slice(0,8)},VN=t=>{const e=t.split(`
`),n=[];let r=!1,i=!1,s=!1;const a=[];let o=!1;const l=[],c={};let f=!1,u=!1;const h=v=>v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),m=()=>{r&&(n.push("</ul>"),r=!1),i&&(n.push("</ol>"),i=!1)},x=()=>{u&&(n.push("</div>"),u=!1)},g=()=>{o&&(n.push(`<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code>${h(l.join(`
`))}</code></pre>`),o=!1,l.length=0)},p=()=>{s&&(n.push(`<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code>${h(a.join(`
`))}</code></pre>`),s=!1,a.length=0)},d=v=>v.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-purple-700 dark:text-purple-300 underline decoration-purple-300 dark:decoration-purple-700 hover:text-purple-900 dark:hover:text-purple-200" target="_blank" rel="noopener noreferrer">$1</a>').replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,'<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">$1</code>');for(const v of e){const _=v.trim();if(_==="`"&&s){p();continue}if(_.startsWith("```")||_.startsWith("``text")){x(),g(),m(),s?p():s=!0;continue}if(s){a.push(v);continue}if(v.includes("->")||/^\s*\|/.test(v)||/^\s*\+[-+\s]+\+\s*$/.test(v)){x(),m(),o=!0,l.push(v);continue}g();const A=v.trim();if(!A){x(),m();continue}if(A.startsWith("### ")){x(),m();const C=A.slice(4).trim();f=/references and further reading/i.test(C),n.push(`<h3 id="${Uh(C,c)}" class="scroll-mt-24">${d(C)}</h3>`);continue}if(A.startsWith("## ")){x(),m();const C=A.slice(3).trim();f=/references and further reading/i.test(C),n.push(`<h2 id="${Uh(C,c)}" class="scroll-mt-24">${d(C)}</h2>`);continue}if(A.startsWith("# ")){x(),m(),n.push(`<h1>${d(A.slice(2))}</h1>`);continue}if(A.startsWith("- ")){const C=A.slice(2).trim().match(/^\[([^\]]+)\]\(([^)]+)\)$/);if(f&&C){m(),u||(n.push('<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">'),u=!0);const[,T,P]=C,M=P.startsWith("/");n.push(`<a href="${P}" class="block rounded-xl border border-purple-200/70 dark:border-purple-800/60 bg-purple-50/70 dark:bg-purple-900/20 px-4 py-3 no-underline hover:border-purple-400 dark:hover:border-purple-500 hover:bg-purple-100/70 dark:hover:bg-purple-900/30 transition-colors" ${M?"":'target="_blank" rel="noopener noreferrer"'}><span class="text-sm font-semibold text-purple-800 dark:text-purple-200">${T}</span><span class="block text-xs text-gray-500 dark:text-gray-400 mt-1">${M?"Read related blog":"Open external reference"}</span></a>`);continue}x(),i&&(n.push("</ol>"),i=!1),r||(n.push("<ul>"),r=!0),n.push(`<li>${d(A.slice(2))}</li>`);continue}if(/^\d+\.\s/.test(A)){x(),r&&(n.push("</ul>"),r=!1),i||(n.push("<ol>"),i=!0),n.push(`<li>${d(A.replace(/^\d+\.\s/,""))}</li>`);continue}x(),m(),n.push(`<p class="whitespace-pre-wrap">${d(A)}</p>`)}return x(),p(),g(),m(),n.join("")},GN=(t,e=155)=>{const n=t.replace(/\s+/g," ").trim();if(n.length<=e)return n;const r=n.slice(0,e),i=r.lastIndexOf(" ");return`${r.slice(0,i>80?i:e).trimEnd()}…`},WN=t=>t.replace(/```[\s\S]*?```/g," ").replace(/`[^`]*`/g," ").replace(/[#>*_\-]/g," ").split(/\s+/).filter(Boolean).length;function Hv({slug:t}={}){const[e,n]=D.useState(null),r=D.useMemo(()=>e?{title:e.title,description:GN(e.excerpt),keywords:[...e.tags,e.category,"Parth Bhodia","Software Engineering Blog"].join(", "),image:e.image,url:`https://parthbhodia.com/blog/${e.slug}`,type:"article",article:{publishedTime:new Date(e.date).toISOString(),author:"Parth Bhodia",section:e.category,tags:e.tags,wordCount:WN(e.content)}}:{title:"Blog - Parth Bhodia | Software Development & Tech Insights",description:"Technical writing on AWS architecture, AI-assisted development, distributed systems, and engineering practices by Parth Bhodia.",keywords:"Parth Bhodia Blog, Software Engineering Blog, AWS, Generative AI, Microservices, System Design, Web Development",url:"https://parthbhodia.com/blog",type:"website"},[e]);Hp(r);const[i,s]=D.useState({}),[a,o]=D.useState("all"),[l,c]=D.useState("all"),[f,u]=D.useState(null),[h,m]=D.useState(!1),[x,g]=D.useState(0),p=D.useRef(null),d=D.useMemo(()=>[...FN].sort((S,N)=>new Date(N.date).getTime()-new Date(S.date).getTime()),[]),v=d[0]??null,_=D.useMemo(()=>{const S=new Set(d.map(N=>N.category));return["all",...Array.from(S)]},[d]),w=D.useMemo(()=>{const S=new Set(d.flatMap(N=>N.tags));return["all",...Array.from(S)]},[d]),A=D.useMemo(()=>d.filter(S=>{const N=a==="all"||S.category===a,O=l==="all"||S.tags.includes(l);return N&&O}),[d,a,l]),C=D.useMemo(()=>{if(t)return t;if(typeof window>"u")return null;const S=window.location.pathname.match(/\/blog\/([^/]+)/);return S?S[1]:null},[t]);D.useEffect(()=>{s(zv())},[]),D.useEffect(()=>{if(!C){n(null);return}const S=d.find(N=>N.slug===C)??null;n(S)},[C,d]),D.useEffect(()=>{if(!e)return;const S=zv(),N={...S,[e.slug]:(S[e.slug]??e.views??0)+1};ON(N),s(N)},[e==null?void 0:e.slug]);const T=S=>i[S.slug]??S.views??0,P=e?zN(e.content):[],M=S=>{const N=document.getElementById(S);if(!N)return;const O=96,B=N.getBoundingClientRect().top+window.scrollY-O;window.scrollTo({top:B,behavior:"smooth"}),u(S),m(!1)};return D.useEffect(()=>{if(!e||P.length===0){u(null);return}const S=P.map(q=>document.getElementById(q.id)).filter(q=>!!q);if(S.length===0)return;const N=96,O=()=>{const q=N+72;let Q=S[0].id;for(let W=0;W<S.length;W+=1){const Z=S[W];if(Z.getBoundingClientRect().top<=q){Q=Z.id;continue}W>0&&(Q=S[W-1].id);break}u(W=>W===Q?W:Q)};O();const B=()=>{O()};return window.addEventListener("scroll",B,{passive:!0}),window.addEventListener("resize",B),()=>{window.removeEventListener("scroll",B),window.removeEventListener("resize",B)}},[e,P]),D.useEffect(()=>{m(!1)},[e==null?void 0:e.slug]),D.useEffect(()=>{if(!e)return;const S=()=>{var N;g(((N=p.current)==null?void 0:N.offsetHeight)??0)};return S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[e==null?void 0:e.slug,e==null?void 0:e.content]),e?y.jsx(Zc,{showHero:!1,currentPage:"blog",children:y.jsx("article",{className:"pt-8 md:pt-10 pb-14 md:pb-16",children:y.jsx("div",{className:"container mx-auto px-4 max-w-6xl",children:y.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(0,72ch)_260px] gap-8 lg:gap-10 justify-center",children:[y.jsxs("div",{className:"min-w-0",children:[y.jsxs("header",{ref:p,className:"mb-7 md:mb-8",children:[y.jsx(Un,{href:"/blog",className:"inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6",children:"← Back to Blog"}),y.jsx("div",{className:"mb-4",children:y.jsx("span",{className:"inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium",children:e.category})}),y.jsx("h1",{className:"text-[clamp(2rem,4vw,3.15rem)] leading-tight tracking-tight font-bold mb-5 text-gray-900 dark:text-white",children:e.title}),y.jsx("div",{className:"flex items-center justify-between mb-6",children:y.jsxs("div",{className:"flex items-center space-x-4 text-gray-600 dark:text-gray-400",children:[y.jsxs("div",{className:"flex items-center space-x-1",children:[y.jsx(fd,{className:"h-4 w-4"}),y.jsx("span",{children:new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})]}),y.jsxs("div",{className:"flex items-center space-x-1",children:[y.jsx(hd,{className:"h-4 w-4"}),y.jsx("span",{children:e.readTime})]}),y.jsxs("div",{className:"inline-flex items-center space-x-1",children:[y.jsx(pd,{className:"h-4 w-4"}),y.jsx("span",{children:Zl(T(e))})]})]})}),y.jsx("div",{className:"flex flex-wrap gap-2 mb-10",children:e.tags.map((S,N)=>y.jsxs("span",{className:"px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm",children:["#",S]},N))}),y.jsxs("div",{className:"mb-7 md:mb-10 p-4 md:p-5 rounded-xl border border-purple-200/70 dark:border-purple-800/60 bg-purple-50/70 dark:bg-purple-900/15",children:[y.jsx("p",{className:"text-xs uppercase tracking-wide font-semibold text-purple-700 dark:text-purple-300 mb-2",children:"2-Minute Takeaway"}),y.jsx("p",{className:"text-[1.02rem] leading-7 text-gray-800 dark:text-gray-200",children:e.excerpt})]})]}),y.jsx("div",{className:"prose prose-neutral dark:prose-invert max-w-none prose-p:leading-7 md:prose-p:leading-8 prose-p:text-[1rem] md:prose-p:text-[1.12rem] prose-headings:tracking-tight prose-h2:text-[1.55rem] md:prose-h2:text-[1.75rem] prose-h2:mt-12 md:prose-h2:mt-14 prose-h2:mb-4 md:prose-h2:mb-5 prose-h3:text-[1.22rem] md:prose-h3:text-[1.35rem] prose-h3:mt-8 md:prose-h3:mt-10 prose-h3:mb-2 md:prose-h3:mb-3 prose-pre:rounded-xl prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700 prose-li:my-1 prose-ul:my-5 md:prose-ul:my-6 prose-ol:my-5 md:prose-ol:my-6",children:y.jsx("div",{dangerouslySetInnerHTML:{__html:VN(e.content)}})}),y.jsx("div",{className:"mt-12 pt-8 border-t border-gray-200 dark:border-gray-700",children:y.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4",children:[y.jsx("div",{className:"flex items-center space-x-6",children:y.jsxs("div",{className:"flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300",children:[y.jsx(pd,{className:"h-4 w-4"}),y.jsx("span",{className:"text-sm font-medium",children:Zl(T(e))})]})}),y.jsx(UN,{title:e.title,excerpt:e.excerpt,url:window.location.href,className:"px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"})]})})]}),P.length>0&&y.jsx("aside",{className:"hidden lg:block",style:{paddingTop:x},children:y.jsxs("div",{className:"sticky top-24 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 backdrop-blur px-4 py-4",children:[y.jsx("p",{className:"text-xs uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400 mb-3",children:"On this page"}),y.jsx("nav",{className:"space-y-1.5",children:P.map(S=>{const N=S.id===f;return y.jsxs("a",{href:`#${S.id}`,onClick:O=>{O.preventDefault(),M(S.id)},className:`block text-sm leading-5 rounded-md px-2.5 py-1.5 transition-colors ${N?"bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 font-medium":"text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`,children:[y.jsx("span",{className:"block",children:S.title}),y.jsxs("span",{className:"block text-xs opacity-80 mt-0.5",children:[S.minutes," min"]})]},S.id)})})]})}),P.length>0&&y.jsxs("div",{className:"lg:hidden fixed right-4 bottom-5 z-40",children:[h&&y.jsxs("div",{className:"mb-3 w-[min(86vw,320px)] max-h-[55vh] overflow-y-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 shadow-xl backdrop-blur p-3",children:[y.jsx("p",{className:"text-xs uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400 mb-2",children:"On this page"}),y.jsx("nav",{className:"space-y-1.5",children:P.map(S=>{const N=S.id===f;return y.jsxs("a",{href:`#${S.id}`,onClick:O=>{O.preventDefault(),M(S.id)},className:`block text-sm leading-5 rounded-md px-2.5 py-1.5 transition-colors ${N?"bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 font-medium":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`,children:[y.jsx("span",{className:"block",children:S.title}),y.jsxs("span",{className:"block text-xs opacity-80 mt-0.5",children:[S.minutes," min"]})]},S.id)})})]}),y.jsxs("button",{type:"button",onClick:()=>m(S=>!S),className:"inline-flex items-center gap-2 rounded-full bg-purple-600 text-white px-4 py-2.5 shadow-lg hover:bg-purple-700 transition-colors","aria-expanded":h,"aria-label":"Toggle table of contents",children:[h?y.jsx(_u,{className:"h-4 w-4"}):y.jsx(E1,{className:"h-4 w-4"}),y.jsx("span",{className:"text-sm font-medium",children:"TOC"})]})]})]})})})}):y.jsxs(Zc,{showHero:!1,currentPage:"blog",children:[y.jsx("section",{className:"py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20",children:y.jsxs("div",{className:"container mx-auto px-4 text-center",children:[y.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:y.jsx("span",{className:"bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text",children:"Tech Blog"})}),y.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"Explore technical articles, tutorials, and insights on software development, Vue.js, React, Node.js, Python, AWS, and more."})]})}),y.jsx("section",{className:"py-20",children:y.jsxs("div",{className:"container mx-auto px-4",children:[v&&a==="all"&&l==="all"&&y.jsx("article",{className:"mb-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-purple-100 dark:border-purple-900/40",children:y.jsxs("div",{className:"p-8",children:[y.jsx("span",{className:"inline-block px-3 py-1 mb-4 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-semibold",children:"Featured Post"}),y.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-3",children:y.jsx(Un,{href:`/blog/${v.slug}`,children:v.title})}),y.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-5",children:v.excerpt}),y.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400",children:[y.jsxs("div",{className:"flex items-center space-x-1",children:[y.jsx(fd,{className:"h-4 w-4"}),y.jsx("span",{children:new Date(v.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})})]}),y.jsxs("div",{className:"flex items-center space-x-1",children:[y.jsx(hd,{className:"h-4 w-4"}),y.jsx("span",{children:v.readTime})]})]})]})}),y.jsxs("div",{className:"mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between",children:[y.jsx("div",{className:"flex flex-wrap gap-2",children:_.map(S=>y.jsx("button",{onClick:()=>o(S),className:`px-3 py-1.5 rounded-full text-sm border transition-colors ${a===S?"bg-purple-600 text-white border-purple-600":"bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-400"}`,children:S==="all"?"All Categories":S},S))}),y.jsx("div",{children:y.jsx("select",{value:l,onChange:S=>c(S.target.value),className:"px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300",children:w.map(S=>y.jsx("option",{value:S,children:S==="all"?"All Tags":`#${S}`},S))})})]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:A.map(S=>y.jsx("article",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300",children:y.jsxs("div",{className:"p-6",children:[y.jsx("div",{className:"mb-4",children:y.jsx("span",{className:"inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium",children:S.category})}),y.jsx("h2",{className:"text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors",children:y.jsx(Un,{href:`/blog/${S.slug}`,children:S.title})}),y.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4 line-clamp-3",children:S.excerpt}),y.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4",children:[y.jsxs("div",{className:"flex items-center space-x-4",children:[y.jsxs("div",{className:"flex items-center space-x-1",children:[y.jsx(fd,{className:"h-4 w-4"}),y.jsx("span",{children:new Date(S.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})})]}),y.jsxs("div",{className:"flex items-center space-x-1",children:[y.jsx(hd,{className:"h-4 w-4"}),y.jsx("span",{children:S.readTime})]})]}),y.jsxs("div",{className:"inline-flex items-center space-x-1",children:[y.jsx(pd,{className:"h-4 w-4"}),y.jsx("span",{children:Zl(T(S))})]})]}),y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("div",{className:"flex flex-wrap gap-2",children:S.tags.slice(0,3).map((N,O)=>y.jsxs("span",{className:"px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs",children:["#",N]},O))}),y.jsxs("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:[Zl(T(S))," views"]})]}),y.jsx("div",{className:"mt-4",children:y.jsxs(Un,{href:`/blog/${S.slug}`,className:"inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium",children:["Read More",y.jsx(S1,{className:"h-4 w-4 ml-1"})]})})]})},S.id))}),A.length===0&&y.jsx("div",{className:"text-center py-20",children:y.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-lg",children:"No posts match your current filters. Try a different category or tag."})})]})})]})}function jN(){return y.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100",children:[y.jsx("div",{className:"text-9xl font-bold text-blue-600 dark:text-blue-500 mb-6",children:"404"}),y.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-center mb-4",children:"Page Not Found"}),y.jsx("p",{className:"text-xl text-center text-gray-600 dark:text-gray-400 max-w-md mb-8",children:"The page you are looking for doesn't exist or has been moved."}),y.jsx(Un,{href:"/",children:y.jsx("a",{className:"px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",children:"Go Back Home"})})]})}function XN(){const[t,e]=D.useState({x:0,y:0}),[n,r]=D.useState(!1),[i,s]=D.useState(!1);return D.useEffect(()=>{const a=f=>{e({x:f.clientX,y:f.clientY}),i||s(!0)},o=f=>{const u=f.target,h=u.tagName==="BUTTON"||u.tagName==="A"||u.closest("button")!==null||u.closest("a")!==null||u.getAttribute("role")==="button"||window.getComputedStyle(u).cursor==="pointer";r(!!h)},l=()=>{s(!1)},c=()=>{s(!0)};return document.addEventListener("mousemove",a),document.addEventListener("mouseover",o),document.addEventListener("mouseleave",l),document.addEventListener("mouseenter",c),()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseover",o),document.removeEventListener("mouseleave",l),document.removeEventListener("mouseenter",c)}},[i]),typeof window<"u"&&"ontouchstart"in window?null:y.jsx("div",{className:`custom-cursor ${n?"hover":""}`,style:{left:`${t.x}px`,top:`${t.y}px`,opacity:i?1:0}})}var Tu=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Au=typeof window>"u"||"Deno"in globalThis;function qn(){}function $N(t,e){return typeof t=="function"?t(e):t}function qN(t){return typeof t=="number"&&t>=0&&t!==1/0}function YN(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Vv(t,e){return typeof t=="function"?t(e):t}function KN(t,e){return typeof t=="function"?t(e):t}function Gv(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:a,stale:o}=t;if(a){if(r){if(e.queryHash!==Qp(a,e.options))return!1}else if(!Go(e.queryKey,a))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof o=="boolean"&&e.isStale()!==o||i&&i!==e.state.fetchStatus||s&&!s(e))}function Wv(t,e){const{exact:n,status:r,predicate:i,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(Vo(e.options.mutationKey)!==Vo(s))return!1}else if(!Go(e.options.mutationKey,s))return!1}return!(r&&e.state.status!==r||i&&!i(e))}function Qp(t,e){return((e==null?void 0:e.queryKeyHashFn)||Vo)(t)}function Vo(t){return JSON.stringify(t,(e,n)=>Fh(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Go(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!Go(t[n],e[n])):!1}function pS(t,e){if(t===e)return t;const n=jv(t)&&jv(e);if(n||Fh(t)&&Fh(e)){const r=n?t:Object.keys(t),i=r.length,s=n?e:Object.keys(e),a=s.length,o=n?[]:{};let l=0;for(let c=0;c<a;c++){const f=n?c:s[c];(!n&&r.includes(f)||n)&&t[f]===void 0&&e[f]===void 0?(o[f]=void 0,l++):(o[f]=pS(t[f],e[f]),o[f]===t[f]&&t[f]!==void 0&&l++)}return i===a&&l===i?t:o}return e}function jv(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Fh(t){if(!Xv(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!Xv(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Xv(t){return Object.prototype.toString.call(t)==="[object Object]"}function QN(t){return new Promise(e=>{setTimeout(e,t)})}function ZN(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?pS(t,e):e}function JN(t,e,n=0){const r=[...t,e];return n&&r.length>n?r.slice(1):r}function e3(t,e,n=0){const r=[e,...t];return n&&r.length>n?r.slice(0,-1):r}var Zp=Symbol();function mS(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Zp?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var es,ci,ua,Yv,t3=(Yv=class extends Tu{constructor(){super();tt(this,es,void 0);tt(this,ci,void 0);tt(this,ua,void 0);Oe(this,ua,e=>{if(!Au&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){K(this,ci)||this.setEventListener(K(this,ua))}onUnsubscribe(){var e;this.hasListeners()||((e=K(this,ci))==null||e.call(this),Oe(this,ci,void 0))}setEventListener(e){var n;Oe(this,ua,e),(n=K(this,ci))==null||n.call(this),Oe(this,ci,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){K(this,es)!==e&&(Oe(this,es,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof K(this,es)=="boolean"?K(this,es):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},es=new WeakMap,ci=new WeakMap,ua=new WeakMap,Yv),gS=new t3,da,ui,fa,Kv,n3=(Kv=class extends Tu{constructor(){super();tt(this,da,!0);tt(this,ui,void 0);tt(this,fa,void 0);Oe(this,fa,e=>{if(!Au&&window.addEventListener){const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){K(this,ui)||this.setEventListener(K(this,fa))}onUnsubscribe(){var e;this.hasListeners()||((e=K(this,ui))==null||e.call(this),Oe(this,ui,void 0))}setEventListener(e){var n;Oe(this,fa,e),(n=K(this,ui))==null||n.call(this),Oe(this,ui,e(this.setOnline.bind(this)))}setOnline(e){K(this,da)!==e&&(Oe(this,da,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return K(this,da)}},da=new WeakMap,ui=new WeakMap,fa=new WeakMap,Kv),Jc=new n3;function r3(){let t,e;const n=new Promise((i,s)=>{t=i,e=s});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),t(i)},n.reject=i=>{r({status:"rejected",reason:i}),e(i)},n}function i3(t){return Math.min(1e3*2**t,3e4)}function vS(t){return(t??"online")==="online"?Jc.isOnline():!0}var yS=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function $d(t){return t instanceof yS}function xS(t){let e=!1,n=0,r=!1,i;const s=r3(),a=g=>{var p;r||(h(new yS(g)),(p=t.abort)==null||p.call(t))},o=()=>{e=!0},l=()=>{e=!1},c=()=>gS.isFocused()&&(t.networkMode==="always"||Jc.isOnline())&&t.canRun(),f=()=>vS(t.networkMode)&&t.canRun(),u=g=>{var p;r||(r=!0,(p=t.onSuccess)==null||p.call(t,g),i==null||i(),s.resolve(g))},h=g=>{var p;r||(r=!0,(p=t.onError)==null||p.call(t,g),i==null||i(),s.reject(g))},m=()=>new Promise(g=>{var p;i=d=>{(r||c())&&g(d)},(p=t.onPause)==null||p.call(t)}).then(()=>{var g;i=void 0,r||(g=t.onContinue)==null||g.call(t)}),x=()=>{if(r)return;let g;const p=n===0?t.initialPromise:void 0;try{g=p??t.fn()}catch(d){g=Promise.reject(d)}Promise.resolve(g).then(u).catch(d=>{var C;if(r)return;const v=t.retry??(Au?0:3),_=t.retryDelay??i3,w=typeof _=="function"?_(n,d):_,A=v===!0||typeof v=="number"&&n<v||typeof v=="function"&&v(n,d);if(e||!A){h(d);return}n++,(C=t.onFail)==null||C.call(t,n,d),QN(w).then(()=>c()?void 0:m()).then(()=>{e?h(d):x()})})};return{promise:s,cancel:a,continue:()=>(i==null||i(),s),cancelRetry:o,continueRetry:l,canStart:f,start:()=>(f()?x():m().then(x),s)}}function s3(){let t=[],e=0,n=o=>{o()},r=o=>{o()},i=o=>setTimeout(o,0);const s=o=>{e?t.push(o):i(()=>{n(o)})},a=()=>{const o=t;t=[],o.length&&i(()=>{r(()=>{o.forEach(l=>{n(l)})})})};return{batch:o=>{let l;e++;try{l=o()}finally{e--,e||a()}return l},batchCalls:o=>(...l)=>{s(()=>{o(...l)})},schedule:s,setNotifyFunction:o=>{n=o},setBatchNotifyFunction:o=>{r=o},setScheduler:o=>{i=o}}}var tn=s3(),ts,Qv,_S=(Qv=class{constructor(){tt(this,ts,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),qN(this.gcTime)&&Oe(this,ts,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Au?1/0:5*60*1e3))}clearGcTimeout(){K(this,ts)&&(clearTimeout(K(this,ts)),Oe(this,ts,void 0))}},ts=new WeakMap,Qv),ha,pa,Pn,qt,Wo,ns,Yn,Tr,Zv,a3=(Zv=class extends _S{constructor(e){super();tt(this,Yn);tt(this,ha,void 0);tt(this,pa,void 0);tt(this,Pn,void 0);tt(this,qt,void 0);tt(this,Wo,void 0);tt(this,ns,void 0);Oe(this,ns,!1),Oe(this,Wo,e.defaultOptions),this.setOptions(e.options),this.observers=[],Oe(this,Pn,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,Oe(this,ha,l3(this.options)),this.state=e.state??K(this,ha),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=K(this,qt))==null?void 0:e.promise}setOptions(e){this.options={...K(this,Wo),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&K(this,Pn).remove(this)}setData(e,n){const r=ZN(this.state.data,e,this.options);return Gt(this,Yn,Tr).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){Gt(this,Yn,Tr).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var r,i;const n=(r=K(this,qt))==null?void 0:r.promise;return(i=K(this,qt))==null||i.cancel(e),n?n.then(qn).catch(qn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(K(this,ha))}isActive(){return this.observers.some(e=>KN(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Zp||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!YN(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(r=>r.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=K(this,qt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(r=>r.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=K(this,qt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),K(this,Pn).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(K(this,qt)&&(K(this,ns)?K(this,qt).cancel({revert:!0}):K(this,qt).cancelRetry()),this.scheduleGc()),K(this,Pn).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Gt(this,Yn,Tr).call(this,{type:"invalidate"})}fetch(e,n){var l,c,f;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(K(this,qt))return K(this,qt).continueRetry(),K(this,qt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const u=this.observers.find(h=>h.options.queryFn);u&&this.setOptions(u.options)}const r=new AbortController,i=u=>{Object.defineProperty(u,"signal",{enumerable:!0,get:()=>(Oe(this,ns,!0),r.signal)})},s=()=>{const u=mS(this.options,n),h={queryKey:this.queryKey,meta:this.meta};return i(h),Oe(this,ns,!1),this.options.persister?this.options.persister(u,h,this):u(h)},a={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:s};i(a),(l=this.options.behavior)==null||l.onFetch(a,this),Oe(this,pa,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=a.fetchOptions)==null?void 0:c.meta))&&Gt(this,Yn,Tr).call(this,{type:"fetch",meta:(f=a.fetchOptions)==null?void 0:f.meta});const o=u=>{var h,m,x,g;$d(u)&&u.silent||Gt(this,Yn,Tr).call(this,{type:"error",error:u}),$d(u)||((m=(h=K(this,Pn).config).onError)==null||m.call(h,u,this),(g=(x=K(this,Pn).config).onSettled)==null||g.call(x,this.state.data,u,this)),this.scheduleGc()};return Oe(this,qt,xS({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:u=>{var h,m,x,g;if(u===void 0){o(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(u)}catch(p){o(p);return}(m=(h=K(this,Pn).config).onSuccess)==null||m.call(h,u,this),(g=(x=K(this,Pn).config).onSettled)==null||g.call(x,u,this.state.error,this),this.scheduleGc()},onError:o,onFail:(u,h)=>{Gt(this,Yn,Tr).call(this,{type:"failed",failureCount:u,error:h})},onPause:()=>{Gt(this,Yn,Tr).call(this,{type:"pause"})},onContinue:()=>{Gt(this,Yn,Tr).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),K(this,qt).start()}},ha=new WeakMap,pa=new WeakMap,Pn=new WeakMap,qt=new WeakMap,Wo=new WeakMap,ns=new WeakMap,Yn=new WeakSet,Tr=function(e){const n=r=>{switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...o3(r.data,this.options),fetchMeta:e.meta??null};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=e.error;return $d(i)&&i.revert&&K(this,pa)?{...K(this,pa),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),tn.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),K(this,Pn).notify({query:this,type:"updated",action:e})})},Zv);function o3(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:vS(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function l3(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var cr,Jv,c3=(Jv=class extends Tu{constructor(e={}){super();tt(this,cr,void 0);this.config=e,Oe(this,cr,new Map)}build(e,n,r){const i=n.queryKey,s=n.queryHash??Qp(i,n);let a=this.get(s);return a||(a=new a3({cache:this,queryKey:i,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(a)),a}add(e){K(this,cr).has(e.queryHash)||(K(this,cr).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=K(this,cr).get(e.queryHash);n&&(e.destroy(),n===e&&K(this,cr).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){tn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return K(this,cr).get(e)}getAll(){return[...K(this,cr).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Gv(n,r))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(r=>Gv(e,r)):n}notify(e){tn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){tn.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){tn.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},cr=new WeakMap,Jv),ur,Jt,rs,dr,ri,e0,u3=(e0=class extends _S{constructor(e){super();tt(this,dr);tt(this,ur,void 0);tt(this,Jt,void 0);tt(this,rs,void 0);this.mutationId=e.mutationId,Oe(this,Jt,e.mutationCache),Oe(this,ur,[]),this.state=e.state||d3(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){K(this,ur).includes(e)||(K(this,ur).push(e),this.clearGcTimeout(),K(this,Jt).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){Oe(this,ur,K(this,ur).filter(n=>n!==e)),this.scheduleGc(),K(this,Jt).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){K(this,ur).length||(this.state.status==="pending"?this.scheduleGc():K(this,Jt).remove(this))}continue(){var e;return((e=K(this,rs))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var i,s,a,o,l,c,f,u,h,m,x,g,p,d,v,_,w,A,C,T;Oe(this,rs,xS({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(P,M)=>{Gt(this,dr,ri).call(this,{type:"failed",failureCount:P,error:M})},onPause:()=>{Gt(this,dr,ri).call(this,{type:"pause"})},onContinue:()=>{Gt(this,dr,ri).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>K(this,Jt).canRun(this)}));const n=this.state.status==="pending",r=!K(this,rs).canStart();try{if(!n){Gt(this,dr,ri).call(this,{type:"pending",variables:e,isPaused:r}),await((s=(i=K(this,Jt).config).onMutate)==null?void 0:s.call(i,e,this));const M=await((o=(a=this.options).onMutate)==null?void 0:o.call(a,e));M!==this.state.context&&Gt(this,dr,ri).call(this,{type:"pending",context:M,variables:e,isPaused:r})}const P=await K(this,rs).start();return await((c=(l=K(this,Jt).config).onSuccess)==null?void 0:c.call(l,P,e,this.state.context,this)),await((u=(f=this.options).onSuccess)==null?void 0:u.call(f,P,e,this.state.context)),await((m=(h=K(this,Jt).config).onSettled)==null?void 0:m.call(h,P,null,this.state.variables,this.state.context,this)),await((g=(x=this.options).onSettled)==null?void 0:g.call(x,P,null,e,this.state.context)),Gt(this,dr,ri).call(this,{type:"success",data:P}),P}catch(P){try{throw await((d=(p=K(this,Jt).config).onError)==null?void 0:d.call(p,P,e,this.state.context,this)),await((_=(v=this.options).onError)==null?void 0:_.call(v,P,e,this.state.context)),await((A=(w=K(this,Jt).config).onSettled)==null?void 0:A.call(w,void 0,P,this.state.variables,this.state.context,this)),await((T=(C=this.options).onSettled)==null?void 0:T.call(C,void 0,P,e,this.state.context)),P}finally{Gt(this,dr,ri).call(this,{type:"error",error:P})}}finally{K(this,Jt).runNext(this)}}},ur=new WeakMap,Jt=new WeakMap,rs=new WeakMap,dr=new WeakSet,ri=function(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),tn.batch(()=>{K(this,ur).forEach(r=>{r.onMutationUpdate(e)}),K(this,Jt).notify({mutation:this,type:"updated",action:e})})},e0);function d3(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var xn,jo,t0,f3=(t0=class extends Tu{constructor(e={}){super();tt(this,xn,void 0);tt(this,jo,void 0);this.config=e,Oe(this,xn,new Map),Oe(this,jo,Date.now())}build(e,n,r){const i=new u3({mutationCache:this,mutationId:++sl(this,jo)._,options:e.defaultMutationOptions(n),state:r});return this.add(i),i}add(e){const n=Jl(e),r=K(this,xn).get(n)??[];r.push(e),K(this,xn).set(n,r),this.notify({type:"added",mutation:e})}remove(e){var r;const n=Jl(e);if(K(this,xn).has(n)){const i=(r=K(this,xn).get(n))==null?void 0:r.filter(s=>s!==e);i&&(i.length===0?K(this,xn).delete(n):K(this,xn).set(n,i))}this.notify({type:"removed",mutation:e})}canRun(e){var r;const n=(r=K(this,xn).get(Jl(e)))==null?void 0:r.find(i=>i.state.status==="pending");return!n||n===e}runNext(e){var r;const n=(r=K(this,xn).get(Jl(e)))==null?void 0:r.find(i=>i!==e&&i.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){tn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...K(this,xn).values()].flat()}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Wv(n,r))}findAll(e={}){return this.getAll().filter(n=>Wv(e,n))}notify(e){tn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return tn.batch(()=>Promise.all(e.map(n=>n.continue().catch(qn))))}},xn=new WeakMap,jo=new WeakMap,t0);function Jl(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function $v(t){return{onFetch:(e,n)=>{var f,u,h,m,x;const r=e.options,i=(h=(u=(f=e.fetchOptions)==null?void 0:f.meta)==null?void 0:u.fetchMore)==null?void 0:h.direction,s=((m=e.state.data)==null?void 0:m.pages)||[],a=((x=e.state.data)==null?void 0:x.pageParams)||[];let o={pages:[],pageParams:[]},l=0;const c=async()=>{let g=!1;const p=_=>{Object.defineProperty(_,"signal",{enumerable:!0,get:()=>(e.signal.aborted?g=!0:e.signal.addEventListener("abort",()=>{g=!0}),e.signal)})},d=mS(e.options,e.fetchOptions),v=async(_,w,A)=>{if(g)return Promise.reject();if(w==null&&_.pages.length)return Promise.resolve(_);const C={queryKey:e.queryKey,pageParam:w,direction:A?"backward":"forward",meta:e.options.meta};p(C);const T=await d(C),{maxPages:P}=e.options,M=A?e3:JN;return{pages:M(_.pages,T,P),pageParams:M(_.pageParams,w,P)}};if(i&&s.length){const _=i==="backward",w=_?h3:qv,A={pages:s,pageParams:a},C=w(r,A);o=await v(A,C,_)}else{const _=t??s.length;do{const w=l===0?a[0]??r.initialPageParam:qv(r,o);if(l>0&&w==null)break;o=await v(o,w),l++}while(l<_)}return o};e.options.persister?e.fetchFn=()=>{var g,p;return(p=(g=e.options).persister)==null?void 0:p.call(g,c,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function qv(t,{pages:e,pageParams:n}){const r=e.length-1;return e.length>0?t.getNextPageParam(e[r],e,n[r],n):void 0}function h3(t,{pages:e,pageParams:n}){var r;return e.length>0?(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,n[0],n):void 0}var wt,di,fi,ma,ga,hi,va,ya,n0,p3=(n0=class{constructor(t={}){tt(this,wt,void 0);tt(this,di,void 0);tt(this,fi,void 0);tt(this,ma,void 0);tt(this,ga,void 0);tt(this,hi,void 0);tt(this,va,void 0);tt(this,ya,void 0);Oe(this,wt,t.queryCache||new c3),Oe(this,di,t.mutationCache||new f3),Oe(this,fi,t.defaultOptions||{}),Oe(this,ma,new Map),Oe(this,ga,new Map),Oe(this,hi,0)}mount(){sl(this,hi)._++,K(this,hi)===1&&(Oe(this,va,gS.subscribe(async t=>{t&&(await this.resumePausedMutations(),K(this,wt).onFocus())})),Oe(this,ya,Jc.subscribe(async t=>{t&&(await this.resumePausedMutations(),K(this,wt).onOnline())})))}unmount(){var t,e;sl(this,hi)._--,K(this,hi)===0&&((t=K(this,va))==null||t.call(this),Oe(this,va,void 0),(e=K(this,ya))==null||e.call(this),Oe(this,ya,void 0))}isFetching(t){return K(this,wt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return K(this,di).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=K(this,wt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const n=this.defaultQueryOptions(t),r=K(this,wt).build(this,n);return t.revalidateIfStale&&r.isStaleByTime(Vv(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return K(this,wt).findAll(t).map(({queryKey:e,state:n})=>{const r=n.data;return[e,r]})}setQueryData(t,e,n){const r=this.defaultQueryOptions({queryKey:t}),i=K(this,wt).get(r.queryHash),s=i==null?void 0:i.state.data,a=$N(e,s);if(a!==void 0)return K(this,wt).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(t,e,n){return tn.batch(()=>K(this,wt).findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=K(this,wt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=K(this,wt);tn.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=K(this,wt),r={type:"active",...t};return tn.batch(()=>(n.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries(r,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},r=tn.batch(()=>K(this,wt).findAll(t).map(i=>i.cancel(n)));return Promise.all(r).then(qn).catch(qn)}invalidateQueries(t={},e={}){return tn.batch(()=>{if(K(this,wt).findAll(t).forEach(r=>{r.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},r=tn.batch(()=>K(this,wt).findAll(t).filter(i=>!i.isDisabled()).map(i=>{let s=i.fetch(void 0,n);return n.throwOnError||(s=s.catch(qn)),i.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(r).then(qn)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=K(this,wt).build(this,e);return n.isStaleByTime(Vv(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(qn).catch(qn)}fetchInfiniteQuery(t){return t.behavior=$v(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(qn).catch(qn)}ensureInfiniteQueryData(t){return t.behavior=$v(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return Jc.isOnline()?K(this,di).resumePausedMutations():Promise.resolve()}getQueryCache(){return K(this,wt)}getMutationCache(){return K(this,di)}getDefaultOptions(){return K(this,fi)}setDefaultOptions(t){Oe(this,fi,t)}setQueryDefaults(t,e){K(this,ma).set(Vo(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...K(this,ma).values()];let n={};return e.forEach(r=>{Go(t,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(t,e){K(this,ga).set(Vo(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...K(this,ga).values()];let n={};return e.forEach(r=>{Go(t,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...K(this,fi).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Qp(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===Zp&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...K(this,fi).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){K(this,wt).clear(),K(this,di).clear()}},wt=new WeakMap,di=new WeakMap,fi=new WeakMap,ma=new WeakMap,ga=new WeakMap,hi=new WeakMap,va=new WeakMap,ya=new WeakMap,n0),m3=D.createContext(void 0),g3=({client:t,children:e})=>(D.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),y.jsx(m3.Provider,{value:t,children:e}));async function v3(t){if(!t.ok){const e=await t.text()||t.statusText;throw new Error(`${t.status}: ${e}`)}}const y3=({on401:t})=>async({queryKey:e})=>{const n=await fetch(e[0],{credentials:"include"});return t==="returnNull"&&n.status===401?null:(await v3(n),await n.json())},x3=new p3({defaultOptions:{queries:{queryFn:y3({on401:"throw"}),refetchInterval:!1,refetchOnWindowFocus:!1,staleTime:1/0,retry:!1},mutations:{retry:!1}}}),_3=()=>{if(typeof window<"u"){const t=window.localStorage.getItem("theme");if(t)return t}return"dark"};function S3(){return D.useEffect(()=>{const t=_3();document.documentElement.classList.add("dark"),t==="light"&&document.documentElement.classList.remove("dark"),typeof window<"u"&&!window.localStorage.getItem("theme")&&window.localStorage.setItem("theme","dark")},[]),y.jsxs(g3,{client:x3,children:[y.jsx(Ax,{children:y.jsxs("div",{className:"app",children:[y.jsx(XN,{}),y.jsx(uS,{}),y.jsxs(CM,{children:[y.jsx(qa,{path:"/",component:DN}),y.jsx(qa,{path:"/skills",component:NN}),y.jsx(qa,{path:"/blog",children:()=>y.jsx(Hv,{})}),y.jsx(qa,{path:"/blog/:slug",children:t=>y.jsx(Hv,{slug:t.slug??""})}),y.jsx(qa,{component:jN})]})]})}),y.jsx(OM,{})]})}qd.createRoot(document.getElementById("root")).render(y.jsx(Sc.StrictMode,{children:y.jsx(S3,{})}));
