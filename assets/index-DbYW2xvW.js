var Wm=t=>{throw TypeError(t)};var nd=(t,e,n)=>e.has(t)||Wm("Cannot "+n);var L=(t,e,n)=>(nd(t,e,"read from private field"),n?n.call(t):e.get(t)),Re=(t,e,n)=>e.has(t)?Wm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),me=(t,e,n,r)=>(nd(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),ze=(t,e,n)=>(nd(t,e,"access private method"),n);var Ll=(t,e,n,r)=>({set _(i){me(t,e,i,n)},get _(){return L(t,e,r)}});function yM(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function $v(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yv={exports:{}},Au={},Kv={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=Symbol.for("react.element"),_M=Symbol.for("react.portal"),SM=Symbol.for("react.fragment"),MM=Symbol.for("react.strict_mode"),EM=Symbol.for("react.profiler"),wM=Symbol.for("react.provider"),bM=Symbol.for("react.context"),TM=Symbol.for("react.forward_ref"),CM=Symbol.for("react.suspense"),AM=Symbol.for("react.memo"),RM=Symbol.for("react.lazy"),Xm=Symbol.iterator;function PM(t){return t===null||typeof t!="object"?null:(t=Xm&&t[Xm]||t["@@iterator"],typeof t=="function"?t:null)}var Qv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zv=Object.assign,Jv={};function sa(t,e,n){this.props=t,this.context=e,this.refs=Jv,this.updater=n||Qv}sa.prototype.isReactComponent={};sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ex(){}ex.prototype=sa.prototype;function _p(t,e,n){this.props=t,this.context=e,this.refs=Jv,this.updater=n||Qv}var Sp=_p.prototype=new ex;Sp.constructor=_p;Zv(Sp,sa.prototype);Sp.isPureReactComponent=!0;var qm=Array.isArray,tx=Object.prototype.hasOwnProperty,Mp={current:null},nx={key:!0,ref:!0,__self:!0,__source:!0};function rx(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tx.call(e,r)&&!nx.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:_l,type:t,key:s,ref:o,props:i,_owner:Mp.current}}function NM(t,e){return{$$typeof:_l,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ep(t){return typeof t=="object"&&t!==null&&t.$$typeof===_l}function DM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $m=/\/+/g;function rd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?DM(""+t.key):e.toString(36)}function Cc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _l:case _M:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+rd(o,0):r,qm(i)?(n="",t!=null&&(n=t.replace($m,"$&/")+"/"),Cc(i,e,n,"",function(c){return c})):i!=null&&(Ep(i)&&(i=NM(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($m,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",qm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+rd(s,a);o+=Cc(s,e,n,l,i)}else if(l=PM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+rd(s,a++),o+=Cc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Il(t,e,n){if(t==null)return t;var r=[],i=0;return Cc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function LM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},Ac={transition:null},IM={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:Ac,ReactCurrentOwner:Mp};function ix(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Il,forEach:function(t,e,n){Il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Il(t,function(){e++}),e},toArray:function(t){return Il(t,function(e){return e})||[]},only:function(t){if(!Ep(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=sa;Ve.Fragment=SM;Ve.Profiler=EM;Ve.PureComponent=_p;Ve.StrictMode=MM;Ve.Suspense=CM;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IM;Ve.act=ix;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Zv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)tx.call(e,l)&&!nx.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:_l,type:t.type,key:i,ref:s,props:r,_owner:o}};Ve.createContext=function(t){return t={$$typeof:bM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wM,_context:t},t.Consumer=t};Ve.createElement=rx;Ve.createFactory=function(t){var e=rx.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:TM,render:t}};Ve.isValidElement=Ep;Ve.lazy=function(t){return{$$typeof:RM,_payload:{_status:-1,_result:t},_init:LM}};Ve.memo=function(t,e){return{$$typeof:AM,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Ac.transition;Ac.transition={};try{t()}finally{Ac.transition=e}};Ve.unstable_act=ix;Ve.useCallback=function(t,e){return cn.current.useCallback(t,e)};Ve.useContext=function(t){return cn.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return cn.current.useEffect(t,e)};Ve.useId=function(){return cn.current.useId()};Ve.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return cn.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Ve.useRef=function(t){return cn.current.useRef(t)};Ve.useState=function(t){return cn.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return cn.current.useTransition()};Ve.version="18.3.1";Kv.exports=Ve;var N=Kv.exports;const sx=$v(N),ox=yM({__proto__:null,default:sx},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UM=N,kM=Symbol.for("react.element"),FM=Symbol.for("react.fragment"),OM=Object.prototype.hasOwnProperty,BM=UM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zM={key:!0,ref:!0,__self:!0,__source:!0};function ax(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)OM.call(e,r)&&!zM.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kM,type:t,key:s,ref:o,props:i,_owner:BM.current}}Au.Fragment=FM;Au.jsx=ax;Au.jsxs=ax;Yv.exports=Au;var v=Yv.exports,_f={},lx={exports:{}},Nn={},cx={exports:{}},ux={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,q){var J=k.length;k.push(q);e:for(;0<J;){var oe=J-1>>>1,Ee=k[oe];if(0<i(Ee,q))k[oe]=q,k[J]=Ee,J=oe;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var q=k[0],J=k.pop();if(J!==q){k[0]=J;e:for(var oe=0,Ee=k.length,Ze=Ee>>>1;oe<Ze;){var $=2*(oe+1)-1,ae=k[$],ge=$+1,le=k[ge];if(0>i(ae,J))ge<Ee&&0>i(le,ae)?(k[oe]=le,k[ge]=J,oe=ge):(k[oe]=ae,k[$]=J,oe=$);else if(ge<Ee&&0>i(le,J))k[oe]=le,k[ge]=J,oe=ge;else break e}}return q}function i(k,q){var J=k.sortIndex-q.sortIndex;return J!==0?J:k.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,m=!1,x=!1,g=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(k){for(var q=n(c);q!==null;){if(q.callback===null)r(c);else if(q.startTime<=k)r(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function S(k){if(g=!1,_(k),!x)if(n(l)!==null)x=!0,X(A);else{var q=n(c);q!==null&&Z(S,q.startTime-k)}}function A(k,q){x=!1,g&&(g=!1,d(P),P=-1),m=!0;var J=h;try{for(_(q),f=n(l);f!==null&&(!(f.expirationTime>q)||k&&!D());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,h=f.priorityLevel;var Ee=oe(f.expirationTime<=q);q=t.unstable_now(),typeof Ee=="function"?f.callback=Ee:f===n(l)&&r(l),_(q)}else r(l);f=n(l)}if(f!==null)var Ze=!0;else{var $=n(c);$!==null&&Z(S,$.startTime-q),Ze=!1}return Ze}finally{f=null,h=J,m=!1}}var C=!1,T=null,P=-1,w=5,M=-1;function D(){return!(t.unstable_now()-M<w)}function U(){if(T!==null){var k=t.unstable_now();M=k;var q=!0;try{q=T(!0,k)}finally{q?F():(C=!1,T=null)}}else C=!1}var F;if(typeof y=="function")F=function(){y(U)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,K=Y.port2;Y.port1.onmessage=U,F=function(){K.postMessage(null)}}else F=function(){p(U,0)};function X(k){T=k,C||(C=!0,F())}function Z(k,q){P=p(function(){k(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,X(A))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var J=h;h=q;try{return k()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,q){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var J=h;h=k;try{return q()}finally{h=J}},t.unstable_scheduleCallback=function(k,q,J){var oe=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?oe+J:oe):J=oe,k){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=J+Ee,k={id:u++,callback:q,priorityLevel:k,startTime:J,expirationTime:Ee,sortIndex:-1},J>oe?(k.sortIndex=J,e(c,k),n(l)===null&&k===n(c)&&(g?(d(P),P=-1):g=!0,Z(S,J-oe))):(k.sortIndex=Ee,e(l,k),x||m||(x=!0,X(A))),k},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(k){var q=h;return function(){var J=h;h=q;try{return k.apply(this,arguments)}finally{h=J}}}})(ux);cx.exports=ux;var HM=cx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VM=N,Pn=HM;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dx=new Set,qa={};function Fs(t,e){Xo(t,e),Xo(t+"Capture",e)}function Xo(t,e){for(qa[t]=e,t=0;t<e.length;t++)dx.add(e[t])}var qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=Object.prototype.hasOwnProperty,GM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ym={},Km={};function jM(t){return Sf.call(Km,t)?!0:Sf.call(Ym,t)?!1:GM.test(t)?Km[t]=!0:(Ym[t]=!0,!1)}function WM(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function XM(t,e,n,r){if(e===null||typeof e>"u"||WM(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var wp=/[\-:]([a-z])/g;function bp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wp,bp);qt[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wp,bp);qt[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wp,bp);qt[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tp(t,e,n,r){var i=qt.hasOwnProperty(e)?qt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(XM(e,n,i,r)&&(n=null),r||i===null?jM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jr=VM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ul=Symbol.for("react.element"),lo=Symbol.for("react.portal"),co=Symbol.for("react.fragment"),Cp=Symbol.for("react.strict_mode"),Mf=Symbol.for("react.profiler"),fx=Symbol.for("react.provider"),hx=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),Ef=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),Rp=Symbol.for("react.memo"),pi=Symbol.for("react.lazy"),px=Symbol.for("react.offscreen"),Qm=Symbol.iterator;function pa(t){return t===null||typeof t!="object"?null:(t=Qm&&t[Qm]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,id;function Da(t){if(id===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);id=e&&e[1]||""}return`
`+id+t}var sd=!1;function od(t,e){if(!t||sd)return"";sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{sd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Da(t):""}function qM(t){switch(t.tag){case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return t=od(t.type,!1),t;case 11:return t=od(t.type.render,!1),t;case 1:return t=od(t.type,!0),t;default:return""}}function bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case co:return"Fragment";case lo:return"Portal";case Mf:return"Profiler";case Cp:return"StrictMode";case Ef:return"Suspense";case wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hx:return(t.displayName||"Context")+".Consumer";case fx:return(t._context.displayName||"Context")+".Provider";case Ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rp:return e=t.displayName||null,e!==null?e:bf(t.type)||"Memo";case pi:e=t._payload,t=t._init;try{return bf(t(e))}catch{}}return null}function $M(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bf(e);case 8:return e===Cp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YM(t){var e=mx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function kl(t){t._valueTracker||(t._valueTracker=YM(t))}function gx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=mx(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Yc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tf(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Hi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vx(t,e){e=e.checked,e!=null&&Tp(t,"checked",e,!1)}function Cf(t,e){vx(t,e);var n=Hi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Af(t,e.type,n):e.hasOwnProperty("defaultValue")&&Af(t,e.type,Hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Af(t,e,n){(e!=="number"||Yc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var La=Array.isArray;function Mo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Hi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function eg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(La(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hi(n)}}function xx(t,e){var n=Hi(e.value),r=Hi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function tg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fl,_x=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fl=Fl||document.createElement("div"),Fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KM=["Webkit","ms","Moz","O"];Object.keys(Oa).forEach(function(t){KM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oa[e]=Oa[t]})});function Sx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oa.hasOwnProperty(t)&&Oa[t]?(""+e).trim():e+"px"}function Mx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sx(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var QM=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nf(t,e){if(e){if(QM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lf=null;function Pp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var If=null,Eo=null,wo=null;function ng(t){if(t=El(t)){if(typeof If!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Lu(e),If(t.stateNode,t.type,e))}}function Ex(t){Eo?wo?wo.push(t):wo=[t]:Eo=t}function wx(){if(Eo){var t=Eo,e=wo;if(wo=Eo=null,ng(t),e)for(t=0;t<e.length;t++)ng(e[t])}}function bx(t,e){return t(e)}function Tx(){}var ad=!1;function Cx(t,e,n){if(ad)return t(e,n);ad=!0;try{return bx(t,e,n)}finally{ad=!1,(Eo!==null||wo!==null)&&(Tx(),wx())}}function Ya(t,e){var n=t.stateNode;if(n===null)return null;var r=Lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Uf=!1;if(qr)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{Uf=!1}function ZM(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ba=!1,Kc=null,Qc=!1,kf=null,JM={onError:function(t){Ba=!0,Kc=t}};function eE(t,e,n,r,i,s,o,a,l){Ba=!1,Kc=null,ZM.apply(JM,arguments)}function tE(t,e,n,r,i,s,o,a,l){if(eE.apply(this,arguments),Ba){if(Ba){var c=Kc;Ba=!1,Kc=null}else throw Error(re(198));Qc||(Qc=!0,kf=c)}}function Os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ax(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function rg(t){if(Os(t)!==t)throw Error(re(188))}function nE(t){var e=t.alternate;if(!e){if(e=Os(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return rg(i),t;if(s===r)return rg(i),e;s=s.sibling}throw Error(re(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==r)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Rx(t){return t=nE(t),t!==null?Px(t):null}function Px(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Px(t);if(e!==null)return e;t=t.sibling}return null}var Nx=Pn.unstable_scheduleCallback,ig=Pn.unstable_cancelCallback,rE=Pn.unstable_shouldYield,iE=Pn.unstable_requestPaint,Rt=Pn.unstable_now,sE=Pn.unstable_getCurrentPriorityLevel,Np=Pn.unstable_ImmediatePriority,Dx=Pn.unstable_UserBlockingPriority,Zc=Pn.unstable_NormalPriority,oE=Pn.unstable_LowPriority,Lx=Pn.unstable_IdlePriority,Ru=null,wr=null;function aE(t){if(wr&&typeof wr.onCommitFiberRoot=="function")try{wr.onCommitFiberRoot(Ru,t,void 0,(t.current.flags&128)===128)}catch{}}var lr=Math.clz32?Math.clz32:uE,lE=Math.log,cE=Math.LN2;function uE(t){return t>>>=0,t===0?32:31-(lE(t)/cE|0)|0}var Ol=64,Bl=4194304;function Ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ia(a):(s&=o,s!==0&&(r=Ia(s)))}else o=n&~i,o!==0?r=Ia(o):s!==0&&(r=Ia(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-lr(e),i=1<<n,r|=t[n],e&=~i;return r}function dE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-lr(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=dE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ff(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ix(){var t=Ol;return Ol<<=1,!(Ol&4194240)&&(Ol=64),t}function ld(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-lr(e),t[e]=n}function hE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-lr(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Dp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-lr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var lt=0;function Ux(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kx,Lp,Fx,Ox,Bx,Of=!1,zl=[],Pi=null,Ni=null,Di=null,Ka=new Map,Qa=new Map,gi=[],pE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sg(t,e){switch(t){case"focusin":case"focusout":Pi=null;break;case"dragenter":case"dragleave":Ni=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":Ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(e.pointerId)}}function ga(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=El(e),e!==null&&Lp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mE(t,e,n,r,i){switch(e){case"focusin":return Pi=ga(Pi,t,e,n,r,i),!0;case"dragenter":return Ni=ga(Ni,t,e,n,r,i),!0;case"mouseover":return Di=ga(Di,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ka.set(s,ga(Ka.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qa.set(s,ga(Qa.get(s)||null,t,e,n,r,i)),!0}return!1}function zx(t){var e=cs(t.target);if(e!==null){var n=Os(e);if(n!==null){if(e=n.tag,e===13){if(e=Ax(n),e!==null){t.blockedOn=e,Bx(t.priority,function(){Fx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lf=r,n.target.dispatchEvent(r),Lf=null}else return e=El(n),e!==null&&Lp(e),t.blockedOn=n,!1;e.shift()}return!0}function og(t,e,n){Rc(t)&&n.delete(e)}function gE(){Of=!1,Pi!==null&&Rc(Pi)&&(Pi=null),Ni!==null&&Rc(Ni)&&(Ni=null),Di!==null&&Rc(Di)&&(Di=null),Ka.forEach(og),Qa.forEach(og)}function va(t,e){t.blockedOn===e&&(t.blockedOn=null,Of||(Of=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,gE)))}function Za(t){function e(i){return va(i,t)}if(0<zl.length){va(zl[0],t);for(var n=1;n<zl.length;n++){var r=zl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pi!==null&&va(Pi,t),Ni!==null&&va(Ni,t),Di!==null&&va(Di,t),Ka.forEach(e),Qa.forEach(e),n=0;n<gi.length;n++)r=gi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<gi.length&&(n=gi[0],n.blockedOn===null);)zx(n),n.blockedOn===null&&gi.shift()}var bo=Jr.ReactCurrentBatchConfig,eu=!0;function vE(t,e,n,r){var i=lt,s=bo.transition;bo.transition=null;try{lt=1,Ip(t,e,n,r)}finally{lt=i,bo.transition=s}}function xE(t,e,n,r){var i=lt,s=bo.transition;bo.transition=null;try{lt=4,Ip(t,e,n,r)}finally{lt=i,bo.transition=s}}function Ip(t,e,n,r){if(eu){var i=Bf(t,e,n,r);if(i===null)xd(t,e,r,tu,n),sg(t,r);else if(mE(i,t,e,n,r))r.stopPropagation();else if(sg(t,r),e&4&&-1<pE.indexOf(t)){for(;i!==null;){var s=El(i);if(s!==null&&kx(s),s=Bf(t,e,n,r),s===null&&xd(t,e,r,tu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xd(t,e,r,null,n)}}var tu=null;function Bf(t,e,n,r){if(tu=null,t=Pp(r),t=cs(t),t!==null)if(e=Os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ax(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tu=t,null}function Hx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sE()){case Np:return 1;case Dx:return 4;case Zc:case oE:return 16;case Lx:return 536870912;default:return 16}default:return 16}}var Ai=null,Up=null,Pc=null;function Vx(){if(Pc)return Pc;var t,e=Up,n=e.length,r,i="value"in Ai?Ai.value:Ai.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Pc=i.slice(t,1<r?1-r:void 0)}function Nc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hl(){return!0}function ag(){return!1}function Dn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hl:ag,this.isPropagationStopped=ag,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),e}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kp=Dn(oa),Ml=Et({},oa,{view:0,detail:0}),yE=Dn(Ml),cd,ud,xa,Pu=Et({},Ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xa&&(xa&&t.type==="mousemove"?(cd=t.screenX-xa.screenX,ud=t.screenY-xa.screenY):ud=cd=0,xa=t),cd)},movementY:function(t){return"movementY"in t?t.movementY:ud}}),lg=Dn(Pu),_E=Et({},Pu,{dataTransfer:0}),SE=Dn(_E),ME=Et({},Ml,{relatedTarget:0}),dd=Dn(ME),EE=Et({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),wE=Dn(EE),bE=Et({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TE=Dn(bE),CE=Et({},oa,{data:0}),cg=Dn(CE),AE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PE[t])?!!e[t]:!1}function Fp(){return NE}var DE=Et({},Ml,{key:function(t){if(t.key){var e=AE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fp,charCode:function(t){return t.type==="keypress"?Nc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),LE=Dn(DE),IE=Et({},Pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ug=Dn(IE),UE=Et({},Ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fp}),kE=Dn(UE),FE=Et({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),OE=Dn(FE),BE=Et({},Pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zE=Dn(BE),HE=[9,13,27,32],Op=qr&&"CompositionEvent"in window,za=null;qr&&"documentMode"in document&&(za=document.documentMode);var VE=qr&&"TextEvent"in window&&!za,Gx=qr&&(!Op||za&&8<za&&11>=za),dg=" ",fg=!1;function jx(t,e){switch(t){case"keyup":return HE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var uo=!1;function GE(t,e){switch(t){case"compositionend":return Wx(e);case"keypress":return e.which!==32?null:(fg=!0,dg);case"textInput":return t=e.data,t===dg&&fg?null:t;default:return null}}function jE(t,e){if(uo)return t==="compositionend"||!Op&&jx(t,e)?(t=Vx(),Pc=Up=Ai=null,uo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gx&&e.locale!=="ko"?null:e.data;default:return null}}var WE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!WE[t.type]:e==="textarea"}function Xx(t,e,n,r){Ex(r),e=nu(e,"onChange"),0<e.length&&(n=new kp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ha=null,Ja=null;function XE(t){ry(t,0)}function Nu(t){var e=po(t);if(gx(e))return t}function qE(t,e){if(t==="change")return e}var qx=!1;if(qr){var fd;if(qr){var hd="oninput"in document;if(!hd){var pg=document.createElement("div");pg.setAttribute("oninput","return;"),hd=typeof pg.oninput=="function"}fd=hd}else fd=!1;qx=fd&&(!document.documentMode||9<document.documentMode)}function mg(){Ha&&(Ha.detachEvent("onpropertychange",$x),Ja=Ha=null)}function $x(t){if(t.propertyName==="value"&&Nu(Ja)){var e=[];Xx(e,Ja,t,Pp(t)),Cx(XE,e)}}function $E(t,e,n){t==="focusin"?(mg(),Ha=e,Ja=n,Ha.attachEvent("onpropertychange",$x)):t==="focusout"&&mg()}function YE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nu(Ja)}function KE(t,e){if(t==="click")return Nu(e)}function QE(t,e){if(t==="input"||t==="change")return Nu(e)}function ZE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dr=typeof Object.is=="function"?Object.is:ZE;function el(t,e){if(dr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sf.call(e,i)||!dr(t[i],e[i]))return!1}return!0}function gg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vg(t,e){var n=gg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gg(n)}}function Yx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kx(){for(var t=window,e=Yc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yc(t.document)}return e}function Bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function JE(t){var e=Kx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yx(n.ownerDocument.documentElement,n)){if(r!==null&&Bp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=vg(n,s);var o=vg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ew=qr&&"documentMode"in document&&11>=document.documentMode,fo=null,zf=null,Va=null,Hf=!1;function xg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hf||fo==null||fo!==Yc(r)||(r=fo,"selectionStart"in r&&Bp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Va&&el(Va,r)||(Va=r,r=nu(zf,"onSelect"),0<r.length&&(e=new kp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fo)))}function Vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ho={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},pd={},Qx={};qr&&(Qx=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function Du(t){if(pd[t])return pd[t];if(!ho[t])return t;var e=ho[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qx)return pd[t]=e[n];return t}var Zx=Du("animationend"),Jx=Du("animationiteration"),ey=Du("animationstart"),ty=Du("transitionend"),ny=new Map,yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){ny.set(t,e),Fs(e,[t])}for(var md=0;md<yg.length;md++){var gd=yg[md],tw=gd.toLowerCase(),nw=gd[0].toUpperCase()+gd.slice(1);Wi(tw,"on"+nw)}Wi(Zx,"onAnimationEnd");Wi(Jx,"onAnimationIteration");Wi(ey,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(ty,"onTransitionEnd");Xo("onMouseEnter",["mouseout","mouseover"]);Xo("onMouseLeave",["mouseout","mouseover"]);Xo("onPointerEnter",["pointerout","pointerover"]);Xo("onPointerLeave",["pointerout","pointerover"]);Fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function _g(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tE(r,e,void 0,t),t.currentTarget=null}function ry(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;_g(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;_g(i,a,c),s=l}}}if(Qc)throw t=kf,Qc=!1,kf=null,t}function mt(t,e){var n=e[Xf];n===void 0&&(n=e[Xf]=new Set);var r=t+"__bubble";n.has(r)||(iy(e,t,2,!1),n.add(r))}function vd(t,e,n){var r=0;e&&(r|=4),iy(n,t,r,e)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function tl(t){if(!t[Gl]){t[Gl]=!0,dx.forEach(function(n){n!=="selectionchange"&&(rw.has(n)||vd(n,!1,t),vd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gl]||(e[Gl]=!0,vd("selectionchange",!1,e))}}function iy(t,e,n,r){switch(Hx(e)){case 1:var i=vE;break;case 4:i=xE;break;default:i=Ip}n=i.bind(null,e,n,t),i=void 0,!Uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=cs(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Cx(function(){var c=s,u=Pp(n),f=[];e:{var h=ny.get(t);if(h!==void 0){var m=kp,x=t;switch(t){case"keypress":if(Nc(n)===0)break e;case"keydown":case"keyup":m=LE;break;case"focusin":x="focus",m=dd;break;case"focusout":x="blur",m=dd;break;case"beforeblur":case"afterblur":m=dd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=lg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=SE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=kE;break;case Zx:case Jx:case ey:m=wE;break;case ty:m=OE;break;case"scroll":m=yE;break;case"wheel":m=zE;break;case"copy":case"cut":case"paste":m=TE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ug}var g=(e&4)!==0,p=!g&&t==="scroll",d=g?h!==null?h+"Capture":null:h;g=[];for(var y=c,_;y!==null;){_=y;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,d!==null&&(S=Ya(y,d),S!=null&&g.push(nl(y,S,_)))),p)break;y=y.return}0<g.length&&(h=new m(h,x,null,n,u),f.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Lf&&(x=n.relatedTarget||n.fromElement)&&(cs(x)||x[$r]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?cs(x):null,x!==null&&(p=Os(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(g=lg,S="onMouseLeave",d="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(g=ug,S="onPointerLeave",d="onPointerEnter",y="pointer"),p=m==null?h:po(m),_=x==null?h:po(x),h=new g(S,y+"leave",m,n,u),h.target=p,h.relatedTarget=_,S=null,cs(u)===c&&(g=new g(d,y+"enter",x,n,u),g.target=_,g.relatedTarget=p,S=g),p=S,m&&x)t:{for(g=m,d=x,y=0,_=g;_;_=Vs(_))y++;for(_=0,S=d;S;S=Vs(S))_++;for(;0<y-_;)g=Vs(g),y--;for(;0<_-y;)d=Vs(d),_--;for(;y--;){if(g===d||d!==null&&g===d.alternate)break t;g=Vs(g),d=Vs(d)}g=null}else g=null;m!==null&&Sg(f,h,m,g,!1),x!==null&&p!==null&&Sg(f,p,x,g,!0)}}e:{if(h=c?po(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var A=qE;else if(hg(h))if(qx)A=QE;else{A=YE;var C=$E}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=KE);if(A&&(A=A(t,c))){Xx(f,A,n,u);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Af(h,"number",h.value)}switch(C=c?po(c):window,t){case"focusin":(hg(C)||C.contentEditable==="true")&&(fo=C,zf=c,Va=null);break;case"focusout":Va=zf=fo=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,xg(f,n,u);break;case"selectionchange":if(ew)break;case"keydown":case"keyup":xg(f,n,u)}var T;if(Op)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else uo?jx(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Gx&&n.locale!=="ko"&&(uo||P!=="onCompositionStart"?P==="onCompositionEnd"&&uo&&(T=Vx()):(Ai=u,Up="value"in Ai?Ai.value:Ai.textContent,uo=!0)),C=nu(c,P),0<C.length&&(P=new cg(P,t,null,n,u),f.push({event:P,listeners:C}),T?P.data=T:(T=Wx(n),T!==null&&(P.data=T)))),(T=VE?GE(t,n):jE(t,n))&&(c=nu(c,"onBeforeInput"),0<c.length&&(u=new cg("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=T))}ry(f,e)})}function nl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ya(t,n),s!=null&&r.unshift(nl(t,s,i)),s=Ya(t,e),s!=null&&r.push(nl(t,s,i))),t=t.return}return r}function Vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ya(n,s),l!=null&&o.unshift(nl(n,l,a))):i||(l=Ya(n,s),l!=null&&o.push(nl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iw=/\r\n?/g,sw=/\u0000|\uFFFD/g;function Mg(t){return(typeof t=="string"?t:""+t).replace(iw,`
`).replace(sw,"")}function jl(t,e,n){if(e=Mg(e),Mg(t)!==e&&n)throw Error(re(425))}function ru(){}var Vf=null,Gf=null;function jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wf=typeof setTimeout=="function"?setTimeout:void 0,ow=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,aw=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(t){return Eg.resolve(null).then(t).catch(lw)}:Wf;function lw(t){setTimeout(function(){throw t})}function yd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Za(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Za(e)}function Li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var aa=Math.random().toString(36).slice(2),Sr="__reactFiber$"+aa,rl="__reactProps$"+aa,$r="__reactContainer$"+aa,Xf="__reactEvents$"+aa,cw="__reactListeners$"+aa,uw="__reactHandles$"+aa;function cs(t){var e=t[Sr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$r]||n[Sr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wg(t);t!==null;){if(n=t[Sr])return n;t=wg(t)}return e}t=n,n=t.parentNode}return null}function El(t){return t=t[Sr]||t[$r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function po(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Lu(t){return t[rl]||null}var qf=[],mo=-1;function Xi(t){return{current:t}}function vt(t){0>mo||(t.current=qf[mo],qf[mo]=null,mo--)}function ft(t,e){mo++,qf[mo]=t.current,t.current=e}var Vi={},tn=Xi(Vi),vn=Xi(!1),bs=Vi;function qo(t,e){var n=t.type.contextTypes;if(!n)return Vi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xn(t){return t=t.childContextTypes,t!=null}function iu(){vt(vn),vt(tn)}function bg(t,e,n){if(tn.current!==Vi)throw Error(re(168));ft(tn,e),ft(vn,n)}function sy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(re(108,$M(t)||"Unknown",i));return Et({},n,r)}function su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,bs=tn.current,ft(tn,t),ft(vn,vn.current),!0}function Tg(t,e,n){var r=t.stateNode;if(!r)throw Error(re(169));n?(t=sy(t,e,bs),r.__reactInternalMemoizedMergedChildContext=t,vt(vn),vt(tn),ft(tn,t)):vt(vn),ft(vn,n)}var kr=null,Iu=!1,_d=!1;function oy(t){kr===null?kr=[t]:kr.push(t)}function dw(t){Iu=!0,oy(t)}function qi(){if(!_d&&kr!==null){_d=!0;var t=0,e=lt;try{var n=kr;for(lt=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kr=null,Iu=!1}catch(i){throw kr!==null&&(kr=kr.slice(t+1)),Nx(Np,qi),i}finally{lt=e,_d=!1}}return null}var go=[],vo=0,ou=null,au=0,zn=[],Hn=0,Ts=null,Br=1,zr="";function ns(t,e){go[vo++]=au,go[vo++]=ou,ou=t,au=e}function ay(t,e,n){zn[Hn++]=Br,zn[Hn++]=zr,zn[Hn++]=Ts,Ts=t;var r=Br;t=zr;var i=32-lr(r)-1;r&=~(1<<i),n+=1;var s=32-lr(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Br=1<<32-lr(e)+i|n<<i|r,zr=s+t}else Br=1<<s|n<<i|r,zr=t}function zp(t){t.return!==null&&(ns(t,1),ay(t,1,0))}function Hp(t){for(;t===ou;)ou=go[--vo],go[vo]=null,au=go[--vo],go[vo]=null;for(;t===Ts;)Ts=zn[--Hn],zn[Hn]=null,zr=zn[--Hn],zn[Hn]=null,Br=zn[--Hn],zn[Hn]=null}var Rn=null,An=null,yt=!1,ir=null;function ly(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,An=Li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ts!==null?{id:Br,overflow:zr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,An=null,!0):!1;default:return!1}}function $f(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yf(t){if(yt){var e=An;if(e){var n=e;if(!Cg(t,e)){if($f(t))throw Error(re(418));e=Li(n.nextSibling);var r=Rn;e&&Cg(t,e)?ly(r,n):(t.flags=t.flags&-4097|2,yt=!1,Rn=t)}}else{if($f(t))throw Error(re(418));t.flags=t.flags&-4097|2,yt=!1,Rn=t}}}function Ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Wl(t){if(t!==Rn)return!1;if(!yt)return Ag(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jf(t.type,t.memoizedProps)),e&&(e=An)){if($f(t))throw cy(),Error(re(418));for(;e;)ly(t,e),e=Li(e.nextSibling)}if(Ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=Li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Rn?Li(t.stateNode.nextSibling):null;return!0}function cy(){for(var t=An;t;)t=Li(t.nextSibling)}function $o(){An=Rn=null,yt=!1}function Vp(t){ir===null?ir=[t]:ir.push(t)}var fw=Jr.ReactCurrentBatchConfig;function ya(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var r=n.stateNode}if(!r)throw Error(re(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Xl(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rg(t){var e=t._init;return e(t._payload)}function uy(t){function e(d,y){if(t){var _=d.deletions;_===null?(d.deletions=[y],d.flags|=16):_.push(y)}}function n(d,y){if(!t)return null;for(;y!==null;)e(d,y),y=y.sibling;return null}function r(d,y){for(d=new Map;y!==null;)y.key!==null?d.set(y.key,y):d.set(y.index,y),y=y.sibling;return d}function i(d,y){return d=Fi(d,y),d.index=0,d.sibling=null,d}function s(d,y,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<y?(d.flags|=2,y):_):(d.flags|=2,y)):(d.flags|=1048576,y)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,y,_,S){return y===null||y.tag!==6?(y=Cd(_,d.mode,S),y.return=d,y):(y=i(y,_),y.return=d,y)}function l(d,y,_,S){var A=_.type;return A===co?u(d,y,_.props.children,S,_.key):y!==null&&(y.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===pi&&Rg(A)===y.type)?(S=i(y,_.props),S.ref=ya(d,y,_),S.return=d,S):(S=Oc(_.type,_.key,_.props,null,d.mode,S),S.ref=ya(d,y,_),S.return=d,S)}function c(d,y,_,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=Ad(_,d.mode,S),y.return=d,y):(y=i(y,_.children||[]),y.return=d,y)}function u(d,y,_,S,A){return y===null||y.tag!==7?(y=Ms(_,d.mode,S,A),y.return=d,y):(y=i(y,_),y.return=d,y)}function f(d,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Cd(""+y,d.mode,_),y.return=d,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ul:return _=Oc(y.type,y.key,y.props,null,d.mode,_),_.ref=ya(d,null,y),_.return=d,_;case lo:return y=Ad(y,d.mode,_),y.return=d,y;case pi:var S=y._init;return f(d,S(y._payload),_)}if(La(y)||pa(y))return y=Ms(y,d.mode,_,null),y.return=d,y;Xl(d,y)}return null}function h(d,y,_,S){var A=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:a(d,y,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ul:return _.key===A?l(d,y,_,S):null;case lo:return _.key===A?c(d,y,_,S):null;case pi:return A=_._init,h(d,y,A(_._payload),S)}if(La(_)||pa(_))return A!==null?null:u(d,y,_,S,null);Xl(d,_)}return null}function m(d,y,_,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(_)||null,a(y,d,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ul:return d=d.get(S.key===null?_:S.key)||null,l(y,d,S,A);case lo:return d=d.get(S.key===null?_:S.key)||null,c(y,d,S,A);case pi:var C=S._init;return m(d,y,_,C(S._payload),A)}if(La(S)||pa(S))return d=d.get(_)||null,u(y,d,S,A,null);Xl(y,S)}return null}function x(d,y,_,S){for(var A=null,C=null,T=y,P=y=0,w=null;T!==null&&P<_.length;P++){T.index>P?(w=T,T=null):w=T.sibling;var M=h(d,T,_[P],S);if(M===null){T===null&&(T=w);break}t&&T&&M.alternate===null&&e(d,T),y=s(M,y,P),C===null?A=M:C.sibling=M,C=M,T=w}if(P===_.length)return n(d,T),yt&&ns(d,P),A;if(T===null){for(;P<_.length;P++)T=f(d,_[P],S),T!==null&&(y=s(T,y,P),C===null?A=T:C.sibling=T,C=T);return yt&&ns(d,P),A}for(T=r(d,T);P<_.length;P++)w=m(T,d,P,_[P],S),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?P:w.key),y=s(w,y,P),C===null?A=w:C.sibling=w,C=w);return t&&T.forEach(function(D){return e(d,D)}),yt&&ns(d,P),A}function g(d,y,_,S){var A=pa(_);if(typeof A!="function")throw Error(re(150));if(_=A.call(_),_==null)throw Error(re(151));for(var C=A=null,T=y,P=y=0,w=null,M=_.next();T!==null&&!M.done;P++,M=_.next()){T.index>P?(w=T,T=null):w=T.sibling;var D=h(d,T,M.value,S);if(D===null){T===null&&(T=w);break}t&&T&&D.alternate===null&&e(d,T),y=s(D,y,P),C===null?A=D:C.sibling=D,C=D,T=w}if(M.done)return n(d,T),yt&&ns(d,P),A;if(T===null){for(;!M.done;P++,M=_.next())M=f(d,M.value,S),M!==null&&(y=s(M,y,P),C===null?A=M:C.sibling=M,C=M);return yt&&ns(d,P),A}for(T=r(d,T);!M.done;P++,M=_.next())M=m(T,d,P,M.value,S),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?P:M.key),y=s(M,y,P),C===null?A=M:C.sibling=M,C=M);return t&&T.forEach(function(U){return e(d,U)}),yt&&ns(d,P),A}function p(d,y,_,S){if(typeof _=="object"&&_!==null&&_.type===co&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ul:e:{for(var A=_.key,C=y;C!==null;){if(C.key===A){if(A=_.type,A===co){if(C.tag===7){n(d,C.sibling),y=i(C,_.props.children),y.return=d,d=y;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===pi&&Rg(A)===C.type){n(d,C.sibling),y=i(C,_.props),y.ref=ya(d,C,_),y.return=d,d=y;break e}n(d,C);break}else e(d,C);C=C.sibling}_.type===co?(y=Ms(_.props.children,d.mode,S,_.key),y.return=d,d=y):(S=Oc(_.type,_.key,_.props,null,d.mode,S),S.ref=ya(d,y,_),S.return=d,d=S)}return o(d);case lo:e:{for(C=_.key;y!==null;){if(y.key===C)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(d,y.sibling),y=i(y,_.children||[]),y.return=d,d=y;break e}else{n(d,y);break}else e(d,y);y=y.sibling}y=Ad(_,d.mode,S),y.return=d,d=y}return o(d);case pi:return C=_._init,p(d,y,C(_._payload),S)}if(La(_))return x(d,y,_,S);if(pa(_))return g(d,y,_,S);Xl(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(n(d,y.sibling),y=i(y,_),y.return=d,d=y):(n(d,y),y=Cd(_,d.mode,S),y.return=d,d=y),o(d)):n(d,y)}return p}var Yo=uy(!0),dy=uy(!1),lu=Xi(null),cu=null,xo=null,Gp=null;function jp(){Gp=xo=cu=null}function Wp(t){var e=lu.current;vt(lu),t._currentValue=e}function Kf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function To(t,e){cu=t,Gp=xo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(Gp!==t)if(t={context:t,memoizedValue:e,next:null},xo===null){if(cu===null)throw Error(re(308));xo=t,cu.dependencies={lanes:0,firstContext:t}}else xo=xo.next=t;return e}var us=null;function Xp(t){us===null?us=[t]:us.push(t)}function fy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yr(t,r)}function Yr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mi=!1;function qp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ii(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Qe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yr(t,n)}return i=r.interleaved,i===null?(e.next=e,Xp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yr(t,n)}function Dc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dp(t,n)}}function Pg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uu(t,e,n,r){var i=t.updateQueue;mi=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,g=a;switch(h=e,m=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=Et({},f,h);break e;case 2:mi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);As|=o,t.lanes=o,t.memoizedState=f}}function Ng(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(re(191,i));i.call(r)}}}var wl={},br=Xi(wl),il=Xi(wl),sl=Xi(wl);function ds(t){if(t===wl)throw Error(re(174));return t}function $p(t,e){switch(ft(sl,e),ft(il,t),ft(br,wl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pf(e,t)}vt(br),ft(br,e)}function Ko(){vt(br),vt(il),vt(sl)}function py(t){ds(sl.current);var e=ds(br.current),n=Pf(e,t.type);e!==n&&(ft(il,t),ft(br,n))}function Yp(t){il.current===t&&(vt(br),vt(il))}var St=Xi(0);function du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sd=[];function Kp(){for(var t=0;t<Sd.length;t++)Sd[t]._workInProgressVersionPrimary=null;Sd.length=0}var Lc=Jr.ReactCurrentDispatcher,Md=Jr.ReactCurrentBatchConfig,Cs=0,Mt=null,Ut=null,Ht=null,fu=!1,Ga=!1,ol=0,hw=0;function Yt(){throw Error(re(321))}function Qp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dr(t[n],e[n]))return!1;return!0}function Zp(t,e,n,r,i,s){if(Cs=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Lc.current=t===null||t.memoizedState===null?vw:xw,t=n(r,i),Ga){s=0;do{if(Ga=!1,ol=0,25<=s)throw Error(re(301));s+=1,Ht=Ut=null,e.updateQueue=null,Lc.current=yw,t=n(r,i)}while(Ga)}if(Lc.current=hu,e=Ut!==null&&Ut.next!==null,Cs=0,Ht=Ut=Mt=null,fu=!1,e)throw Error(re(300));return t}function Jp(){var t=ol!==0;return ol=0,t}function mr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Mt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function qn(){if(Ut===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Ht===null?Mt.memoizedState:Ht.next;if(e!==null)Ht=e,Ut=t;else{if(t===null)throw Error(re(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Ht===null?Mt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function al(t,e){return typeof e=="function"?e(t):e}function Ed(t){var e=qn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var r=Ut,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Cs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Mt.lanes|=u,As|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,dr(r,e.memoizedState)||(gn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Mt.lanes|=s,As|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wd(t){var e=qn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dr(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function my(){}function gy(t,e){var n=Mt,r=qn(),i=e(),s=!dr(r.memoizedState,i);if(s&&(r.memoizedState=i,gn=!0),r=r.queue,em(yy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,ll(9,xy.bind(null,n,r,i,e),void 0,null),Vt===null)throw Error(re(349));Cs&30||vy(n,e,i)}return i}function vy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xy(t,e,n,r){e.value=n,e.getSnapshot=r,_y(e)&&Sy(t)}function yy(t,e,n){return n(function(){_y(e)&&Sy(t)})}function _y(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dr(t,n)}catch{return!0}}function Sy(t){var e=Yr(t,1);e!==null&&cr(e,t,1,-1)}function Dg(t){var e=mr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:al,lastRenderedState:t},e.queue=t,t=t.dispatch=gw.bind(null,Mt,t),[e.memoizedState,t]}function ll(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function My(){return qn().memoizedState}function Ic(t,e,n,r){var i=mr();Mt.flags|=t,i.memoizedState=ll(1|e,n,void 0,r===void 0?null:r)}function Uu(t,e,n,r){var i=qn();r=r===void 0?null:r;var s=void 0;if(Ut!==null){var o=Ut.memoizedState;if(s=o.destroy,r!==null&&Qp(r,o.deps)){i.memoizedState=ll(e,n,s,r);return}}Mt.flags|=t,i.memoizedState=ll(1|e,n,s,r)}function Lg(t,e){return Ic(8390656,8,t,e)}function em(t,e){return Uu(2048,8,t,e)}function Ey(t,e){return Uu(4,2,t,e)}function wy(t,e){return Uu(4,4,t,e)}function by(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ty(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4,4,by.bind(null,e,t),n)}function tm(){}function Cy(t,e){var n=qn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ay(t,e){var n=qn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ry(t,e,n){return Cs&21?(dr(n,e)||(n=Ix(),Mt.lanes|=n,As|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function pw(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var r=Md.transition;Md.transition={};try{t(!1),e()}finally{lt=n,Md.transition=r}}function Py(){return qn().memoizedState}function mw(t,e,n){var r=ki(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ny(t))Dy(e,n);else if(n=fy(t,e,n,r),n!==null){var i=ln();cr(n,t,r,i),Ly(n,e,r)}}function gw(t,e,n){var r=ki(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ny(t))Dy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,dr(a,o)){var l=e.interleaved;l===null?(i.next=i,Xp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=fy(t,e,i,r),n!==null&&(i=ln(),cr(n,t,r,i),Ly(n,e,r))}}function Ny(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function Dy(t,e){Ga=fu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ly(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dp(t,n)}}var hu={readContext:Xn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},vw={readContext:Xn,useCallback:function(t,e){return mr().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:Lg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4194308,4,by.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ic(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ic(4,2,t,e)},useMemo:function(t,e){var n=mr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mw.bind(null,Mt,t),[r.memoizedState,t]},useRef:function(t){var e=mr();return t={current:t},e.memoizedState=t},useState:Dg,useDebugValue:tm,useDeferredValue:function(t){return mr().memoizedState=t},useTransition:function(){var t=Dg(!1),e=t[0];return t=pw.bind(null,t[1]),mr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Mt,i=mr();if(yt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Vt===null)throw Error(re(349));Cs&30||vy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Lg(yy.bind(null,r,s,t),[t]),r.flags|=2048,ll(9,xy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=mr(),e=Vt.identifierPrefix;if(yt){var n=zr,r=Br;n=(r&~(1<<32-lr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ol++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xw={readContext:Xn,useCallback:Cy,useContext:Xn,useEffect:em,useImperativeHandle:Ty,useInsertionEffect:Ey,useLayoutEffect:wy,useMemo:Ay,useReducer:Ed,useRef:My,useState:function(){return Ed(al)},useDebugValue:tm,useDeferredValue:function(t){var e=qn();return Ry(e,Ut.memoizedState,t)},useTransition:function(){var t=Ed(al)[0],e=qn().memoizedState;return[t,e]},useMutableSource:my,useSyncExternalStore:gy,useId:Py,unstable_isNewReconciler:!1},yw={readContext:Xn,useCallback:Cy,useContext:Xn,useEffect:em,useImperativeHandle:Ty,useInsertionEffect:Ey,useLayoutEffect:wy,useMemo:Ay,useReducer:wd,useRef:My,useState:function(){return wd(al)},useDebugValue:tm,useDeferredValue:function(t){var e=qn();return Ut===null?e.memoizedState=t:Ry(e,Ut.memoizedState,t)},useTransition:function(){var t=wd(al)[0],e=qn().memoizedState;return[t,e]},useMutableSource:my,useSyncExternalStore:gy,useId:Py,unstable_isNewReconciler:!1};function er(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ku={isMounted:function(t){return(t=t._reactInternals)?Os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ln(),i=ki(t),s=jr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,i),e!==null&&(cr(e,t,i,r),Dc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ln(),i=ki(t),s=jr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,i),e!==null&&(cr(e,t,i,r),Dc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),r=ki(t),i=jr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ii(t,i,r),e!==null&&(cr(e,t,r,n),Dc(e,t,r))}};function Ig(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!el(n,r)||!el(i,s):!0}function Iy(t,e,n){var r=!1,i=Vi,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(i=xn(e)?bs:tn.current,r=e.contextTypes,s=(r=r!=null)?qo(t,i):Vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ku,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ug(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ku.enqueueReplaceState(e,e.state,null)}function Zf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},qp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xn(s):(s=xn(e)?bs:tn.current,i.context=qo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ku.enqueueReplaceState(i,i.state,null),uu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qo(t,e){try{var n="",r=e;do n+=qM(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function bd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _w=typeof WeakMap=="function"?WeakMap:Map;function Uy(t,e,n){n=jr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){mu||(mu=!0,ch=r),Jf(t,e)},n}function ky(t,e,n){n=jr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jf(t,e),typeof r!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function kg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _w;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Iw.bind(null,t,e,n),e.then(t,t))}function Fg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Og(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jr(-1,1),e.tag=2,Ii(n,e,1))),n.lanes|=1),t)}var Sw=Jr.ReactCurrentOwner,gn=!1;function an(t,e,n,r){e.child=t===null?dy(e,null,n,r):Yo(e,t.child,n,r)}function Bg(t,e,n,r,i){n=n.render;var s=e.ref;return To(e,i),r=Zp(t,e,n,r,s,i),n=Jp(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kr(t,e,i)):(yt&&n&&zp(e),e.flags|=1,an(t,e,r,i),e.child)}function zg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Fy(t,e,s,r,i)):(t=Oc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:el,n(o,r)&&t.ref===e.ref)return Kr(t,e,i)}return e.flags|=1,t=Fi(s,r),t.ref=e.ref,t.return=e,e.child=t}function Fy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(el(s,r)&&t.ref===e.ref)if(gn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Kr(t,e,i)}return eh(t,e,n,r,i)}function Oy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(_o,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(_o,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ft(_o,Cn),Cn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ft(_o,Cn),Cn|=r;return an(t,e,i,n),e.child}function By(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function eh(t,e,n,r,i){var s=xn(n)?bs:tn.current;return s=qo(e,s),To(e,i),n=Zp(t,e,n,r,s,i),r=Jp(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kr(t,e,i)):(yt&&r&&zp(e),e.flags|=1,an(t,e,n,i),e.child)}function Hg(t,e,n,r,i){if(xn(n)){var s=!0;su(e)}else s=!1;if(To(e,i),e.stateNode===null)Uc(t,e),Iy(e,n,r),Zf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=xn(n)?bs:tn.current,c=qo(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Ug(e,o,r,c),mi=!1;var h=e.memoizedState;o.state=h,uu(e,r,o,i),l=e.memoizedState,a!==r||h!==l||vn.current||mi?(typeof u=="function"&&(Qf(e,n,u,r),l=e.memoizedState),(a=mi||Ig(e,n,a,r,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,hy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:er(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=xn(n)?bs:tn.current,l=qo(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Ug(e,o,r,l),mi=!1,h=e.memoizedState,o.state=h,uu(e,r,o,i);var x=e.memoizedState;a!==f||h!==x||vn.current||mi?(typeof m=="function"&&(Qf(e,n,m,r),x=e.memoizedState),(c=mi||Ig(e,n,c,r,h,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return th(t,e,n,r,s,i)}function th(t,e,n,r,i,s){By(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Tg(e,n,!1),Kr(t,e,s);r=e.stateNode,Sw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Yo(e,t.child,null,s),e.child=Yo(e,null,a,s)):an(t,e,a,s),e.memoizedState=r.state,i&&Tg(e,n,!0),e.child}function zy(t){var e=t.stateNode;e.pendingContext?bg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bg(t,e.context,!1),$p(t,e.containerInfo)}function Vg(t,e,n,r,i){return $o(),Vp(i),e.flags|=256,an(t,e,n,r),e.child}var nh={dehydrated:null,treeContext:null,retryLane:0};function rh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hy(t,e,n){var r=e.pendingProps,i=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ft(St,i&1),t===null)return Yf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bu(o,r,0,null),t=Ms(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rh(n),e.memoizedState=nh,t):nm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Mw(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Fi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Fi(a,s):(s=Ms(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nh,r}return s=t.child,t=s.sibling,r=Fi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function nm(t,e){return e=Bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ql(t,e,n,r){return r!==null&&Vp(r),Yo(e,t.child,null,n),t=nm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Mw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=bd(Error(re(422))),ql(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Bu({mode:"visible",children:r.children},i,0,null),s=Ms(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Yo(e,t.child,null,o),e.child.memoizedState=rh(o),e.memoizedState=nh,s);if(!(e.mode&1))return ql(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(re(419)),r=bd(s,r,void 0),ql(t,e,o,r)}if(a=(o&t.childLanes)!==0,gn||a){if(r=Vt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yr(t,i),cr(r,t,i,-1))}return lm(),r=bd(Error(re(421))),ql(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Uw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,An=Li(i.nextSibling),Rn=e,yt=!0,ir=null,t!==null&&(zn[Hn++]=Br,zn[Hn++]=zr,zn[Hn++]=Ts,Br=t.id,zr=t.overflow,Ts=e),e=nm(e,r.children),e.flags|=4096,e)}function Gg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kf(t.return,e,n)}function Td(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Vy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(an(t,e,r.children,n),r=St.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gg(t,n,e);else if(t.tag===19)Gg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ft(St,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&du(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Td(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&du(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Td(e,!0,n,null,s);break;case"together":Td(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),As|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Fi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ew(t,e,n){switch(e.tag){case 3:zy(e),$o();break;case 5:py(e);break;case 1:xn(e.type)&&su(e);break;case 4:$p(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ft(lu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ft(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?Hy(t,e,n):(ft(St,St.current&1),t=Kr(t,e,n),t!==null?t.sibling:null);ft(St,St.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Vy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ft(St,St.current),r)break;return null;case 22:case 23:return e.lanes=0,Oy(t,e,n)}return Kr(t,e,n)}var Gy,ih,jy,Wy;Gy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ih=function(){};jy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ds(br.current);var s=null;switch(n){case"input":i=Tf(t,i),r=Tf(t,r),s=[];break;case"select":i=Et({},i,{value:void 0}),r=Et({},r,{value:void 0}),s=[];break;case"textarea":i=Rf(t,i),r=Rf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ru)}Nf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Wy=function(t,e,n,r){n!==r&&(e.flags|=4)};function _a(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ww(t,e,n){var r=e.pendingProps;switch(Hp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return xn(e.type)&&iu(),Kt(e),null;case 3:return r=e.stateNode,Ko(),vt(vn),vt(tn),Kp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ir!==null&&(fh(ir),ir=null))),ih(t,e),Kt(e),null;case 5:Yp(e);var i=ds(sl.current);if(n=e.type,t!==null&&e.stateNode!=null)jy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(re(166));return Kt(e),null}if(t=ds(br.current),Wl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sr]=e,r[rl]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",r),mt("close",r);break;case"iframe":case"object":case"embed":mt("load",r);break;case"video":case"audio":for(i=0;i<Ua.length;i++)mt(Ua[i],r);break;case"source":mt("error",r);break;case"img":case"image":case"link":mt("error",r),mt("load",r);break;case"details":mt("toggle",r);break;case"input":Zm(r,s),mt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},mt("invalid",r);break;case"textarea":eg(r,s),mt("invalid",r)}Nf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&jl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&jl(r.textContent,a,t),i=["children",""+a]):qa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",r)}switch(n){case"input":kl(r),Jm(r,s,!0);break;case"textarea":kl(r),tg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ru)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sr]=e,t[rl]=r,Gy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Df(n,r),n){case"dialog":mt("cancel",t),mt("close",t),i=r;break;case"iframe":case"object":case"embed":mt("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ua.length;i++)mt(Ua[i],t);i=r;break;case"source":mt("error",t),i=r;break;case"img":case"image":case"link":mt("error",t),mt("load",t),i=r;break;case"details":mt("toggle",t),i=r;break;case"input":Zm(t,r),i=Tf(t,r),mt("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Et({},r,{value:void 0}),mt("invalid",t);break;case"textarea":eg(t,r),i=Rf(t,r),mt("invalid",t);break;default:i=r}Nf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Mx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_x(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$a(t,l):typeof l=="number"&&$a(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Tp(t,s,l,o))}switch(n){case"input":kl(t),Jm(t,r,!1);break;case"textarea":kl(t),tg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Hi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mo(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ru)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)Wy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(re(166));if(n=ds(sl.current),ds(br.current),Wl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sr]=e,(s=r.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:jl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sr]=e,e.stateNode=r}return Kt(e),null;case 13:if(vt(St),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&An!==null&&e.mode&1&&!(e.flags&128))cy(),$o(),e.flags|=98560,s=!1;else if(s=Wl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Sr]=e}else $o(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else ir!==null&&(fh(ir),ir=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ft===0&&(Ft=3):lm())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return Ko(),ih(t,e),t===null&&tl(e.stateNode.containerInfo),Kt(e),null;case 10:return Wp(e.type._context),Kt(e),null;case 17:return xn(e.type)&&iu(),Kt(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return Kt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_a(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=du(t),o!==null){for(e.flags|=128,_a(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>Zo&&(e.flags|=128,r=!0,_a(s,!1),e.lanes=4194304)}else{if(!r)if(t=du(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_a(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return Kt(e),null}else 2*Rt()-s.renderingStartTime>Zo&&n!==1073741824&&(e.flags|=128,r=!0,_a(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=St.current,ft(St,r?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return am(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Cn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function bw(t,e){switch(Hp(e),e.tag){case 1:return xn(e.type)&&iu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ko(),vt(vn),vt(tn),Kp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yp(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));$o()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return Ko(),null;case 10:return Wp(e.type._context),null;case 22:case 23:return am(),null;case 24:return null;default:return null}}var $l=!1,en=!1,Tw=typeof WeakSet=="function"?WeakSet:Set,ve=null;function yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ct(t,e,r)}else n.current=null}function sh(t,e,n){try{n()}catch(r){Ct(t,e,r)}}var jg=!1;function Cw(t,e){if(Vf=eu,t=Kx(),Bp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++u===r&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gf={focusedElem:t,selectionRange:n},eu=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,p=x.memoizedState,d=e.stateNode,y=d.getSnapshotBeforeUpdate(e.elementType===e.type?g:er(e.type,g),p);d.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){Ct(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return x=jg,jg=!1,x}function ja(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&sh(e,n,s)}i=i.next}while(i!==r)}}function Fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function oh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xy(t){var e=t.alternate;e!==null&&(t.alternate=null,Xy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sr],delete e[rl],delete e[Xf],delete e[cw],delete e[uw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qy(t){return t.tag===5||t.tag===3||t.tag===4}function Wg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ru));else if(r!==4&&(t=t.child,t!==null))for(ah(t,e,n),t=t.sibling;t!==null;)ah(t,e,n),t=t.sibling}function lh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(lh(t,e,n),t=t.sibling;t!==null;)lh(t,e,n),t=t.sibling}var Wt=null,nr=!1;function ni(t,e,n){for(n=n.child;n!==null;)$y(t,e,n),n=n.sibling}function $y(t,e,n){if(wr&&typeof wr.onCommitFiberUnmount=="function")try{wr.onCommitFiberUnmount(Ru,n)}catch{}switch(n.tag){case 5:en||yo(n,e);case 6:var r=Wt,i=nr;Wt=null,ni(t,e,n),Wt=r,nr=i,Wt!==null&&(nr?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(nr?(t=Wt,n=n.stateNode,t.nodeType===8?yd(t.parentNode,n):t.nodeType===1&&yd(t,n),Za(t)):yd(Wt,n.stateNode));break;case 4:r=Wt,i=nr,Wt=n.stateNode.containerInfo,nr=!0,ni(t,e,n),Wt=r,nr=i;break;case 0:case 11:case 14:case 15:if(!en&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sh(n,e,o),i=i.next}while(i!==r)}ni(t,e,n);break;case 1:if(!en&&(yo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ct(n,e,a)}ni(t,e,n);break;case 21:ni(t,e,n);break;case 22:n.mode&1?(en=(r=en)||n.memoizedState!==null,ni(t,e,n),en=r):ni(t,e,n);break;default:ni(t,e,n)}}function Xg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Tw),e.forEach(function(r){var i=kw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Wt=a.stateNode,nr=!1;break e;case 3:Wt=a.stateNode.containerInfo,nr=!0;break e;case 4:Wt=a.stateNode.containerInfo,nr=!0;break e}a=a.return}if(Wt===null)throw Error(re(160));$y(s,o,i),Wt=null,nr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ct(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yy(e,t),e=e.sibling}function Yy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),pr(t),r&4){try{ja(3,t,t.return),Fu(3,t)}catch(g){Ct(t,t.return,g)}try{ja(5,t,t.return)}catch(g){Ct(t,t.return,g)}}break;case 1:Kn(e,t),pr(t),r&512&&n!==null&&yo(n,n.return);break;case 5:if(Kn(e,t),pr(t),r&512&&n!==null&&yo(n,n.return),t.flags&32){var i=t.stateNode;try{$a(i,"")}catch(g){Ct(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vx(i,s),Df(a,o);var c=Df(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Mx(i,f):u==="dangerouslySetInnerHTML"?_x(i,f):u==="children"?$a(i,f):Tp(i,u,f,c)}switch(a){case"input":Cf(i,s);break;case"textarea":xx(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Mo(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Mo(i,!!s.multiple,s.defaultValue,!0):Mo(i,!!s.multiple,s.multiple?[]:"",!1))}i[rl]=s}catch(g){Ct(t,t.return,g)}}break;case 6:if(Kn(e,t),pr(t),r&4){if(t.stateNode===null)throw Error(re(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(g){Ct(t,t.return,g)}}break;case 3:if(Kn(e,t),pr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Za(e.containerInfo)}catch(g){Ct(t,t.return,g)}break;case 4:Kn(e,t),pr(t);break;case 13:Kn(e,t),pr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(sm=Rt())),r&4&&Xg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||u,Kn(e,t),en=c):Kn(e,t),pr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ve=t,u=t.child;u!==null;){for(f=ve=u;ve!==null;){switch(h=ve,m=h.child,h.tag){case 0:case 11:case 14:case 15:ja(4,h,h.return);break;case 1:yo(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(g){Ct(r,n,g)}}break;case 5:yo(h,h.return);break;case 22:if(h.memoizedState!==null){$g(f);continue}}m!==null?(m.return=h,ve=m):$g(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sx("display",o))}catch(g){Ct(t,t.return,g)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Ct(t,t.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Kn(e,t),pr(t),r&4&&Xg(t);break;case 21:break;default:Kn(e,t),pr(t)}}function pr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qy(n)){var r=n;break e}n=n.return}throw Error(re(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($a(i,""),r.flags&=-33);var s=Wg(t);lh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Wg(t);ah(t,a,o);break;default:throw Error(re(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Aw(t,e,n){ve=t,Ky(t)}function Ky(t,e,n){for(var r=(t.mode&1)!==0;ve!==null;){var i=ve,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$l;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||en;a=$l;var c=en;if($l=o,(en=l)&&!c)for(ve=i;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?Yg(i):l!==null?(l.return=o,ve=l):Yg(i);for(;s!==null;)ve=s,Ky(s),s=s.sibling;ve=i,$l=a,en=c}qg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ve=s):qg(t)}}function qg(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||Fu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!en)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:er(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ng(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ng(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Za(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}en||e.flags&512&&oh(e)}catch(h){Ct(e,e.return,h)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function $g(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Yg(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fu(4,e)}catch(l){Ct(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ct(e,i,l)}}var s=e.return;try{oh(e)}catch(l){Ct(e,s,l)}break;case 5:var o=e.return;try{oh(e)}catch(l){Ct(e,o,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var Rw=Math.ceil,pu=Jr.ReactCurrentDispatcher,rm=Jr.ReactCurrentOwner,jn=Jr.ReactCurrentBatchConfig,Qe=0,Vt=null,It=null,Xt=0,Cn=0,_o=Xi(0),Ft=0,cl=null,As=0,Ou=0,im=0,Wa=null,mn=null,sm=0,Zo=1/0,Ur=null,mu=!1,ch=null,Ui=null,Yl=!1,Ri=null,gu=0,Xa=0,uh=null,kc=-1,Fc=0;function ln(){return Qe&6?Rt():kc!==-1?kc:kc=Rt()}function ki(t){return t.mode&1?Qe&2&&Xt!==0?Xt&-Xt:fw.transition!==null?(Fc===0&&(Fc=Ix()),Fc):(t=lt,t!==0||(t=window.event,t=t===void 0?16:Hx(t.type)),t):1}function cr(t,e,n,r){if(50<Xa)throw Xa=0,uh=null,Error(re(185));Sl(t,n,r),(!(Qe&2)||t!==Vt)&&(t===Vt&&(!(Qe&2)&&(Ou|=n),Ft===4&&vi(t,Xt)),yn(t,r),n===1&&Qe===0&&!(e.mode&1)&&(Zo=Rt()+500,Iu&&qi()))}function yn(t,e){var n=t.callbackNode;fE(t,e);var r=Jc(t,t===Vt?Xt:0);if(r===0)n!==null&&ig(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ig(n),e===1)t.tag===0?dw(Kg.bind(null,t)):oy(Kg.bind(null,t)),aw(function(){!(Qe&6)&&qi()}),n=null;else{switch(Ux(r)){case 1:n=Np;break;case 4:n=Dx;break;case 16:n=Zc;break;case 536870912:n=Lx;break;default:n=Zc}n=i_(n,Qy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Qy(t,e){if(kc=-1,Fc=0,Qe&6)throw Error(re(327));var n=t.callbackNode;if(Co()&&t.callbackNode!==n)return null;var r=Jc(t,t===Vt?Xt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vu(t,r);else{e=r;var i=Qe;Qe|=2;var s=Jy();(Vt!==t||Xt!==e)&&(Ur=null,Zo=Rt()+500,Ss(t,e));do try{Dw();break}catch(a){Zy(t,a)}while(!0);jp(),pu.current=s,Qe=i,It!==null?e=0:(Vt=null,Xt=0,e=Ft)}if(e!==0){if(e===2&&(i=Ff(t),i!==0&&(r=i,e=dh(t,i))),e===1)throw n=cl,Ss(t,0),vi(t,r),yn(t,Rt()),n;if(e===6)vi(t,r);else{if(i=t.current.alternate,!(r&30)&&!Pw(i)&&(e=vu(t,r),e===2&&(s=Ff(t),s!==0&&(r=s,e=dh(t,s))),e===1))throw n=cl,Ss(t,0),vi(t,r),yn(t,Rt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(re(345));case 2:rs(t,mn,Ur);break;case 3:if(vi(t,r),(r&130023424)===r&&(e=sm+500-Rt(),10<e)){if(Jc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ln(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wf(rs.bind(null,t,mn,Ur),e);break}rs(t,mn,Ur);break;case 4:if(vi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-lr(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Rt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rw(r/1960))-r,10<r){t.timeoutHandle=Wf(rs.bind(null,t,mn,Ur),r);break}rs(t,mn,Ur);break;case 5:rs(t,mn,Ur);break;default:throw Error(re(329))}}}return yn(t,Rt()),t.callbackNode===n?Qy.bind(null,t):null}function dh(t,e){var n=Wa;return t.current.memoizedState.isDehydrated&&(Ss(t,e).flags|=256),t=vu(t,e),t!==2&&(e=mn,mn=n,e!==null&&fh(e)),t}function fh(t){mn===null?mn=t:mn.push.apply(mn,t)}function Pw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vi(t,e){for(e&=~im,e&=~Ou,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-lr(e),r=1<<n;t[n]=-1,e&=~r}}function Kg(t){if(Qe&6)throw Error(re(327));Co();var e=Jc(t,0);if(!(e&1))return yn(t,Rt()),null;var n=vu(t,e);if(t.tag!==0&&n===2){var r=Ff(t);r!==0&&(e=r,n=dh(t,r))}if(n===1)throw n=cl,Ss(t,0),vi(t,e),yn(t,Rt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rs(t,mn,Ur),yn(t,Rt()),null}function om(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Zo=Rt()+500,Iu&&qi())}}function Rs(t){Ri!==null&&Ri.tag===0&&!(Qe&6)&&Co();var e=Qe;Qe|=1;var n=jn.transition,r=lt;try{if(jn.transition=null,lt=1,t)return t()}finally{lt=r,jn.transition=n,Qe=e,!(Qe&6)&&qi()}}function am(){Cn=_o.current,vt(_o)}function Ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ow(n)),It!==null)for(n=It.return;n!==null;){var r=n;switch(Hp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&iu();break;case 3:Ko(),vt(vn),vt(tn),Kp();break;case 5:Yp(r);break;case 4:Ko();break;case 13:vt(St);break;case 19:vt(St);break;case 10:Wp(r.type._context);break;case 22:case 23:am()}n=n.return}if(Vt=t,It=t=Fi(t.current,null),Xt=Cn=e,Ft=0,cl=null,im=Ou=As=0,mn=Wa=null,us!==null){for(e=0;e<us.length;e++)if(n=us[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}us=null}return t}function Zy(t,e){do{var n=It;try{if(jp(),Lc.current=hu,fu){for(var r=Mt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fu=!1}if(Cs=0,Ht=Ut=Mt=null,Ga=!1,ol=0,rm.current=null,n===null||n.return===null){Ft=1,cl=e,It=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Fg(o);if(m!==null){m.flags&=-257,Og(m,o,a,s,e),m.mode&1&&kg(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var g=new Set;g.add(l),e.updateQueue=g}else x.add(l);break e}else{if(!(e&1)){kg(s,c,e),lm();break e}l=Error(re(426))}}else if(yt&&a.mode&1){var p=Fg(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Og(p,o,a,s,e),Vp(Qo(l,a));break e}}s=l=Qo(l,a),Ft!==4&&(Ft=2),Wa===null?Wa=[s]:Wa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Uy(s,l,e);Pg(s,d);break e;case 1:a=l;var y=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ui===null||!Ui.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ky(s,a,e);Pg(s,S);break e}}s=s.return}while(s!==null)}t_(n)}catch(A){e=A,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function Jy(){var t=pu.current;return pu.current=hu,t===null?hu:t}function lm(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Vt===null||!(As&268435455)&&!(Ou&268435455)||vi(Vt,Xt)}function vu(t,e){var n=Qe;Qe|=2;var r=Jy();(Vt!==t||Xt!==e)&&(Ur=null,Ss(t,e));do try{Nw();break}catch(i){Zy(t,i)}while(!0);if(jp(),Qe=n,pu.current=r,It!==null)throw Error(re(261));return Vt=null,Xt=0,Ft}function Nw(){for(;It!==null;)e_(It)}function Dw(){for(;It!==null&&!rE();)e_(It)}function e_(t){var e=r_(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?t_(t):It=e,rm.current=null}function t_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bw(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,It=null;return}}else if(n=ww(n,e,Cn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Ft===0&&(Ft=5)}function rs(t,e,n){var r=lt,i=jn.transition;try{jn.transition=null,lt=1,Lw(t,e,n,r)}finally{jn.transition=i,lt=r}return null}function Lw(t,e,n,r){do Co();while(Ri!==null);if(Qe&6)throw Error(re(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hE(t,s),t===Vt&&(It=Vt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yl||(Yl=!0,i_(Zc,function(){return Co(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var o=lt;lt=1;var a=Qe;Qe|=4,rm.current=null,Cw(t,n),Yy(n,t),JE(Gf),eu=!!Vf,Gf=Vf=null,t.current=n,Aw(n),iE(),Qe=a,lt=o,jn.transition=s}else t.current=n;if(Yl&&(Yl=!1,Ri=t,gu=i),s=t.pendingLanes,s===0&&(Ui=null),aE(n.stateNode),yn(t,Rt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mu)throw mu=!1,t=ch,ch=null,t;return gu&1&&t.tag!==0&&Co(),s=t.pendingLanes,s&1?t===uh?Xa++:(Xa=0,uh=t):Xa=0,qi(),null}function Co(){if(Ri!==null){var t=Ux(gu),e=jn.transition,n=lt;try{if(jn.transition=null,lt=16>t?16:t,Ri===null)var r=!1;else{if(t=Ri,Ri=null,gu=0,Qe&6)throw Error(re(331));var i=Qe;for(Qe|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:ja(8,u,s)}var f=u.child;if(f!==null)f.return=u,ve=f;else for(;ve!==null;){u=ve;var h=u.sibling,m=u.return;if(Xy(u),u===c){ve=null;break}if(h!==null){h.return=m,ve=h;break}ve=m}}}var x=s.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var p=g.sibling;g.sibling=null,g=p}while(g!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ja(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ve=d;break e}ve=s.return}}var y=t.current;for(ve=y;ve!==null;){o=ve;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ve=_;else e:for(o=y;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fu(9,a)}}catch(A){Ct(a,a.return,A)}if(a===o){ve=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ve=S;break e}ve=a.return}}if(Qe=i,qi(),wr&&typeof wr.onPostCommitFiberRoot=="function")try{wr.onPostCommitFiberRoot(Ru,t)}catch{}r=!0}return r}finally{lt=n,jn.transition=e}}return!1}function Qg(t,e,n){e=Qo(n,e),e=Uy(t,e,1),t=Ii(t,e,1),e=ln(),t!==null&&(Sl(t,1,e),yn(t,e))}function Ct(t,e,n){if(t.tag===3)Qg(t,t,n);else for(;e!==null;){if(e.tag===3){Qg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ui===null||!Ui.has(r))){t=Qo(n,t),t=ky(e,t,1),e=Ii(e,t,1),t=ln(),e!==null&&(Sl(e,1,t),yn(e,t));break}}e=e.return}}function Iw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Xt&n)===n&&(Ft===4||Ft===3&&(Xt&130023424)===Xt&&500>Rt()-sm?Ss(t,0):im|=n),yn(t,e)}function n_(t,e){e===0&&(t.mode&1?(e=Bl,Bl<<=1,!(Bl&130023424)&&(Bl=4194304)):e=1);var n=ln();t=Yr(t,e),t!==null&&(Sl(t,e,n),yn(t,n))}function Uw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),n_(t,n)}function kw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(re(314))}r!==null&&r.delete(e),n_(t,n)}var r_;r_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,Ew(t,e,n);gn=!!(t.flags&131072)}else gn=!1,yt&&e.flags&1048576&&ay(e,au,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Uc(t,e),t=e.pendingProps;var i=qo(e,tn.current);To(e,n),i=Zp(null,e,r,t,i,n);var s=Jp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(r)?(s=!0,su(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qp(e),i.updater=ku,e.stateNode=i,i._reactInternals=e,Zf(e,r,t,n),e=th(null,e,r,!0,s,n)):(e.tag=0,yt&&s&&zp(e),an(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Uc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ow(r),t=er(r,t),i){case 0:e=eh(null,e,r,t,n);break e;case 1:e=Hg(null,e,r,t,n);break e;case 11:e=Bg(null,e,r,t,n);break e;case 14:e=zg(null,e,r,er(r.type,t),n);break e}throw Error(re(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:er(r,i),eh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:er(r,i),Hg(t,e,r,i,n);case 3:e:{if(zy(e),t===null)throw Error(re(387));r=e.pendingProps,s=e.memoizedState,i=s.element,hy(t,e),uu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qo(Error(re(423)),e),e=Vg(t,e,r,n,i);break e}else if(r!==i){i=Qo(Error(re(424)),e),e=Vg(t,e,r,n,i);break e}else for(An=Li(e.stateNode.containerInfo.firstChild),Rn=e,yt=!0,ir=null,n=dy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($o(),r===i){e=Kr(t,e,n);break e}an(t,e,r,n)}e=e.child}return e;case 5:return py(e),t===null&&Yf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,jf(r,i)?o=null:s!==null&&jf(r,s)&&(e.flags|=32),By(t,e),an(t,e,o,n),e.child;case 6:return t===null&&Yf(e),null;case 13:return Hy(t,e,n);case 4:return $p(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yo(e,null,r,n):an(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:er(r,i),Bg(t,e,r,i,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ft(lu,r._currentValue),r._currentValue=o,s!==null)if(dr(s.value,o)){if(s.children===i.children&&!vn.current){e=Kr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=jr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Kf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}an(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,To(e,n),i=Xn(i),r=r(i),e.flags|=1,an(t,e,r,n),e.child;case 14:return r=e.type,i=er(r,e.pendingProps),i=er(r.type,i),zg(t,e,r,i,n);case 15:return Fy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:er(r,i),Uc(t,e),e.tag=1,xn(r)?(t=!0,su(e)):t=!1,To(e,n),Iy(e,r,i),Zf(e,r,i,n),th(null,e,r,!0,t,n);case 19:return Vy(t,e,n);case 22:return Oy(t,e,n)}throw Error(re(156,e.tag))};function i_(t,e){return Nx(t,e)}function Fw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,r){return new Fw(t,e,n,r)}function cm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ow(t){if(typeof t=="function")return cm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ap)return 11;if(t===Rp)return 14}return 2}function Fi(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case co:return Ms(n.children,i,s,e);case Cp:o=8,i|=8;break;case Mf:return t=Gn(12,n,e,i|2),t.elementType=Mf,t.lanes=s,t;case Ef:return t=Gn(13,n,e,i),t.elementType=Ef,t.lanes=s,t;case wf:return t=Gn(19,n,e,i),t.elementType=wf,t.lanes=s,t;case px:return Bu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fx:o=10;break e;case hx:o=9;break e;case Ap:o=11;break e;case Rp:o=14;break e;case pi:o=16,r=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Gn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ms(t,e,n,r){return t=Gn(7,t,r,e),t.lanes=n,t}function Bu(t,e,n,r){return t=Gn(22,t,r,e),t.elementType=px,t.lanes=n,t.stateNode={isHidden:!1},t}function Cd(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function Ad(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Bw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ld(0),this.expirationTimes=ld(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ld(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function um(t,e,n,r,i,s,o,a,l){return t=new Bw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qp(s),t}function zw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function s_(t){if(!t)return Vi;t=t._reactInternals;e:{if(Os(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(xn(n))return sy(t,n,e)}return e}function o_(t,e,n,r,i,s,o,a,l){return t=um(n,r,!0,t,i,s,o,a,l),t.context=s_(null),n=t.current,r=ln(),i=ki(n),s=jr(r,i),s.callback=e??null,Ii(n,s,i),t.current.lanes=i,Sl(t,i,r),yn(t,r),t}function zu(t,e,n,r){var i=e.current,s=ln(),o=ki(i);return n=s_(n),e.context===null?e.context=n:e.pendingContext=n,e=jr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ii(i,e,o),t!==null&&(cr(t,i,o,s),Dc(t,i,o)),o}function xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dm(t,e){Zg(t,e),(t=t.alternate)&&Zg(t,e)}function Hw(){return null}var a_=typeof reportError=="function"?reportError:function(t){console.error(t)};function fm(t){this._internalRoot=t}Hu.prototype.render=fm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));zu(t,e,null,null)};Hu.prototype.unmount=fm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rs(function(){zu(null,t,null,null)}),e[$r]=null}};function Hu(t){this._internalRoot=t}Hu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ox();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gi.length&&e!==0&&e<gi[n].priority;n++);gi.splice(n,0,t),n===0&&zx(t)}};function hm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jg(){}function Vw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=xu(o);s.call(c)}}var o=o_(e,r,t,0,null,!1,!1,"",Jg);return t._reactRootContainer=o,t[$r]=o.current,tl(t.nodeType===8?t.parentNode:t),Rs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=xu(l);a.call(c)}}var l=um(t,0,!1,null,null,!1,!1,"",Jg);return t._reactRootContainer=l,t[$r]=l.current,tl(t.nodeType===8?t.parentNode:t),Rs(function(){zu(e,l,n,r)}),l}function Gu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=xu(o);a.call(l)}}zu(e,o,t,i)}else o=Vw(n,e,t,i,r);return xu(o)}kx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ia(e.pendingLanes);n!==0&&(Dp(e,n|1),yn(e,Rt()),!(Qe&6)&&(Zo=Rt()+500,qi()))}break;case 13:Rs(function(){var r=Yr(t,1);if(r!==null){var i=ln();cr(r,t,1,i)}}),dm(t,1)}};Lp=function(t){if(t.tag===13){var e=Yr(t,134217728);if(e!==null){var n=ln();cr(e,t,134217728,n)}dm(t,134217728)}};Fx=function(t){if(t.tag===13){var e=ki(t),n=Yr(t,e);if(n!==null){var r=ln();cr(n,t,e,r)}dm(t,e)}};Ox=function(){return lt};Bx=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};If=function(t,e,n){switch(e){case"input":if(Cf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Lu(r);if(!i)throw Error(re(90));gx(r),Cf(r,i)}}}break;case"textarea":xx(t,n);break;case"select":e=n.value,e!=null&&Mo(t,!!n.multiple,e,!1)}};bx=om;Tx=Rs;var Gw={usingClientEntryPoint:!1,Events:[El,po,Lu,Ex,wx,om]},Sa={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jw={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rx(t),t===null?null:t.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||Hw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Ru=Kl.inject(jw),wr=Kl}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gw;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hm(e))throw Error(re(200));return zw(t,e,null,n)};Nn.createRoot=function(t,e){if(!hm(t))throw Error(re(299));var n=!1,r="",i=a_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=um(t,1,!1,null,null,n,!1,r,i),t[$r]=e.current,tl(t.nodeType===8?t.parentNode:t),new fm(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Rx(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return Rs(t)};Nn.hydrate=function(t,e,n){if(!Vu(e))throw Error(re(200));return Gu(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!hm(t))throw Error(re(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=a_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=o_(e,null,t,1,n??null,i,!1,s,o),t[$r]=e.current,tl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Hu(e)};Nn.render=function(t,e,n){if(!Vu(e))throw Error(re(200));return Gu(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!Vu(t))throw Error(re(40));return t._reactRootContainer?(Rs(function(){Gu(null,null,t,!1,function(){t._reactRootContainer=null,t[$r]=null})}),!0):!1};Nn.unstable_batchedUpdates=om;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Vu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Gu(t,e,n,!1,r)};Nn.version="18.3.1-next-f1338f8080-20240426";function l_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l_)}catch(t){console.error(t)}}l_(),lx.exports=Nn;var pm=lx.exports;const Ww=$v(pm);var e0=pm;_f.createRoot=e0.createRoot,_f.hydrateRoot=e0.hydrateRoot;function Xw(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,i,s,o=[],a="",l=t.split("/");for(l[0]||l.shift();i=l.shift();)n=i[0],n==="*"?(o.push(n),a+=i[1]==="?"?"(?:/(.*))?":"/(.*)"):n===":"?(r=i.indexOf("?",1),s=i.indexOf(".",1),o.push(i.substring(1,~r?r:~s?s:i.length)),a+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(a+=(~r?"?":"")+"\\"+i.substring(s))):a+="/"+i;return{keys:o,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}var c_={exports:{}},u_={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jo=N;function qw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $w=typeof Object.is=="function"?Object.is:qw,Yw=Jo.useState,Kw=Jo.useEffect,Qw=Jo.useLayoutEffect,Zw=Jo.useDebugValue;function Jw(t,e){var n=e(),r=Yw({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return Qw(function(){i.value=n,i.getSnapshot=e,Rd(i)&&s({inst:i})},[t,n,e]),Kw(function(){return Rd(i)&&s({inst:i}),t(function(){Rd(i)&&s({inst:i})})},[t]),Zw(n),n}function Rd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$w(t,n)}catch{return!0}}function e1(t,e){return e()}var t1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?e1:Jw;u_.useSyncExternalStore=Jo.useSyncExternalStore!==void 0?Jo.useSyncExternalStore:t1;c_.exports=u_;var n1=c_.exports;const r1=ox.useInsertionEffect,i1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",s1=i1?N.useLayoutEffect:N.useEffect,o1=r1||s1,d_=t=>{const e=N.useRef([t,(...n)=>e[0](...n)]).current;return o1(()=>{e[0]=t}),e[1]},a1="popstate",mm="pushState",gm="replaceState",l1="hashchange",t0=[a1,mm,gm,l1],c1=t=>{for(const e of t0)addEventListener(e,t);return()=>{for(const e of t0)removeEventListener(e,t)}},f_=(t,e)=>n1.useSyncExternalStore(c1,t,e),u1=()=>location.search,d1=({ssrSearch:t=""}={})=>f_(u1,()=>t),n0=()=>location.pathname,f1=({ssrPath:t}={})=>f_(n0,t?()=>t:n0),h1=(t,{replace:e=!1,state:n=null}={})=>history[e?gm:mm](n,"",t),p1=(t={})=>[f1(t),h1],r0=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[r0]>"u"){for(const t of[mm,gm]){const e=history[t];history[t]=function(){const n=e.apply(this,arguments),r=new Event(t);return r.arguments=arguments,dispatchEvent(r),n}}Object.defineProperty(window,r0,{value:!0})}const m1=(t,e)=>e.toLowerCase().indexOf(t.toLowerCase())?"~"+e:e.slice(t.length)||"/",h_=(t="")=>t==="/"?"":t,g1=(t,e)=>t[0]==="~"?t.slice(1):h_(e)+t,v1=(t="",e)=>m1(i0(h_(t)),i0(e)),i0=t=>{try{return decodeURI(t)}catch{return t}},p_={hook:p1,searchHook:d1,parser:Xw,base:"",ssrPath:void 0,ssrSearch:void 0,hrefs:t=>t},m_=N.createContext(p_),ju=()=>N.useContext(m_),g_={},v_=N.createContext(g_),x1=()=>N.useContext(v_),vm=t=>{const[e,n]=t.hook(t);return[v1(t.base,e),d_((r,i)=>n(g1(r,t.base),i))]},x_=(t,e,n,r)=>{const{pattern:i,keys:s}=e instanceof RegExp?{keys:!1,pattern:e}:t(e||"*",r),o=i.exec(n)||[],[a,...l]=o;return a!==void 0?[!0,(()=>{const c=s!==!1?Object.fromEntries(s.map((f,h)=>[f,l[h]])):o.groups;let u={...l};return c&&Object.assign(u,c),u})(),...r?[a]:[]]:[!1,null]},y1=({children:t,...e})=>{var u,f;const n=ju(),r=e.hook?p_:n;let i=r;const[s,o]=((u=e.ssrPath)==null?void 0:u.split("?"))??[];o&&(e.ssrSearch=o,e.ssrPath=s),e.hrefs=e.hrefs??((f=e.hook)==null?void 0:f.hrefs);let a=N.useRef({}),l=a.current,c=l;for(let h in r){const m=h==="base"?r[h]+(e[h]||""):e[h]||r[h];l===c&&m!==c[h]&&(a.current=c={...c}),c[h]=m,m!==r[h]&&(i=c)}return N.createElement(m_.Provider,{value:i,children:t})},s0=({children:t,component:e},n)=>e?N.createElement(e,{params:n}):typeof t=="function"?t(n):t,_1=t=>{let e=N.useRef(g_),n=e.current;for(const r in t)t[r]!==n[r]&&(n=t);return Object.keys(t).length===0&&(n=t),e.current=n},Ma=({path:t,nest:e,match:n,...r})=>{const i=ju(),[s]=vm(i),[o,a,l]=n??x_(i.parser,t,s,e),c=_1({...x1(),...a});if(!o)return null;const u=l?N.createElement(y1,{base:l},s0(r,c)):s0(r,c);return N.createElement(v_.Provider,{value:c,children:u})},gt=N.forwardRef((t,e)=>{const n=ju(),[r,i]=vm(n),{to:s="",href:o=s,onClick:a,asChild:l,children:c,className:u,replace:f,state:h,...m}=t,x=d_(p=>{p.ctrlKey||p.metaKey||p.altKey||p.shiftKey||p.button!==0||(a==null||a(p),p.defaultPrevented||(p.preventDefault(),i(o,t)))}),g=n.hrefs(o[0]==="~"?o.slice(1):n.base+o,n);return l&&N.isValidElement(c)?N.cloneElement(c,{onClick:x,href:g}):N.createElement("a",{...m,onClick:x,href:g,className:u!=null&&u.call?u(r===o):u,children:c,ref:e})}),y_=t=>Array.isArray(t)?t.flatMap(e=>y_(e&&e.type===N.Fragment?e.props.children:e)):[t],S1=({children:t,location:e})=>{const n=ju(),[r]=vm(n);for(const i of y_(t)){let s=0;if(N.isValidElement(i)&&(s=x_(n.parser,i.props.path,e||r,i.props.nest))[0])return N.cloneElement(i,{match:s})}return null};function Oi(t,e,{checkForDefaultPrevented:n=!0}={}){return function(i){if(t==null||t(i),n===!1||!i.defaultPrevented)return e==null?void 0:e(i)}}function M1(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function __(...t){return e=>t.forEach(n=>M1(n,e))}function Bs(...t){return N.useCallback(__(...t),t)}function E1(t,e){const n=N.createContext(e),r=s=>{const{children:o,...a}=s,l=N.useMemo(()=>a,Object.values(a));return v.jsx(n.Provider,{value:l,children:o})};r.displayName=t+"Provider";function i(s){const o=N.useContext(n);if(o)return o;if(e!==void 0)return e;throw new Error(`\`${s}\` must be used within \`${t}\``)}return[r,i]}function w1(t,e=[]){let n=[];function r(s,o){const a=N.createContext(o),l=n.length;n=[...n,o];const c=f=>{var d;const{scope:h,children:m,...x}=f,g=((d=h==null?void 0:h[t])==null?void 0:d[l])||a,p=N.useMemo(()=>x,Object.values(x));return v.jsx(g.Provider,{value:p,children:m})};c.displayName=s+"Provider";function u(f,h){var g;const m=((g=h==null?void 0:h[t])==null?void 0:g[l])||a,x=N.useContext(m);if(x)return x;if(o!==void 0)return o;throw new Error(`\`${f}\` must be used within \`${s}\``)}return[c,u]}const i=()=>{const s=n.map(o=>N.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return N.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return i.scopeName=t,[r,b1(i,...e)]}function b1(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const r=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(s){const o=r.reduce((a,{useScope:l,scopeName:c})=>{const f=l(s)[`__scope${c}`];return{...a,...f}},{});return N.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}var yu=globalThis!=null&&globalThis.document?N.useLayoutEffect:()=>{},T1=ox.useId||(()=>{}),C1=0;function Pd(t){const[e,n]=N.useState(T1());return yu(()=>{t||n(r=>r??String(C1++))},[t]),t||(e?`radix-${e}`:"")}function Ps(t){const e=N.useRef(t);return N.useEffect(()=>{e.current=t}),N.useMemo(()=>(...n)=>{var r;return(r=e.current)==null?void 0:r.call(e,...n)},[])}function A1({prop:t,defaultProp:e,onChange:n=()=>{}}){const[r,i]=R1({defaultProp:e,onChange:n}),s=t!==void 0,o=s?t:r,a=Ps(n),l=N.useCallback(c=>{if(s){const f=typeof c=="function"?c(t):c;f!==t&&a(f)}else i(c)},[s,t,i,a]);return[o,l]}function R1({defaultProp:t,onChange:e}){const n=N.useState(t),[r]=n,i=N.useRef(r),s=Ps(e);return N.useEffect(()=>{i.current!==r&&(s(r),i.current=r)},[r,i,s]),n}var Wu=N.forwardRef((t,e)=>{const{children:n,...r}=t,i=N.Children.toArray(n),s=i.find(N1);if(s){const o=s.props.children,a=i.map(l=>l===s?N.Children.count(o)>1?N.Children.only(null):N.isValidElement(o)?o.props.children:null:l);return v.jsx(hh,{...r,ref:e,children:N.isValidElement(o)?N.cloneElement(o,void 0,a):null})}return v.jsx(hh,{...r,ref:e,children:n})});Wu.displayName="Slot";var hh=N.forwardRef((t,e)=>{const{children:n,...r}=t;if(N.isValidElement(n)){const i=L1(n);return N.cloneElement(n,{...D1(r,n.props),ref:e?__(e,i):i})}return N.Children.count(n)>1?N.Children.only(null):null});hh.displayName="SlotClone";var P1=({children:t})=>v.jsx(v.Fragment,{children:t});function N1(t){return N.isValidElement(t)&&t.type===P1}function D1(t,e){const n={...e};for(const r in e){const i=t[r],s=e[r];/^on[A-Z]/.test(r)?i&&s?n[r]=(...a)=>{s(...a),i(...a)}:i&&(n[r]=i):r==="style"?n[r]={...i,...s}:r==="className"&&(n[r]=[i,s].filter(Boolean).join(" "))}return{...t,...n}}function L1(t){var r,i;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var I1=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],ei=I1.reduce((t,e)=>{const n=N.forwardRef((r,i)=>{const{asChild:s,...o}=r,a=s?Wu:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),v.jsx(a,{...o,ref:i})});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function U1(t,e){t&&pm.flushSync(()=>t.dispatchEvent(e))}function k1(t,e=globalThis==null?void 0:globalThis.document){const n=Ps(t);N.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return e.addEventListener("keydown",r,{capture:!0}),()=>e.removeEventListener("keydown",r,{capture:!0})},[n,e])}var F1="DismissableLayer",ph="dismissableLayer.update",O1="dismissableLayer.pointerDownOutside",B1="dismissableLayer.focusOutside",o0,S_=N.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),M_=N.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=N.useContext(S_),[u,f]=N.useState(null),h=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=N.useState({}),x=Bs(e,T=>f(T)),g=Array.from(c.layers),[p]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),d=g.indexOf(p),y=u?g.indexOf(u):-1,_=c.layersWithOutsidePointerEventsDisabled.size>0,S=y>=d,A=V1(T=>{const P=T.target,w=[...c.branches].some(M=>M.contains(P));!S||w||(i==null||i(T),o==null||o(T),T.defaultPrevented||a==null||a())},h),C=G1(T=>{const P=T.target;[...c.branches].some(M=>M.contains(P))||(s==null||s(T),o==null||o(T),T.defaultPrevented||a==null||a())},h);return k1(T=>{y===c.layers.size-1&&(r==null||r(T),!T.defaultPrevented&&a&&(T.preventDefault(),a()))},h),N.useEffect(()=>{if(u)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(o0=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),a0(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=o0)}},[u,h,n,c]),N.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),a0())},[u,c]),N.useEffect(()=>{const T=()=>m({});return document.addEventListener(ph,T),()=>document.removeEventListener(ph,T)},[]),v.jsx(ei.div,{...l,ref:x,style:{pointerEvents:_?S?"auto":"none":void 0,...t.style},onFocusCapture:Oi(t.onFocusCapture,C.onFocusCapture),onBlurCapture:Oi(t.onBlurCapture,C.onBlurCapture),onPointerDownCapture:Oi(t.onPointerDownCapture,A.onPointerDownCapture)})});M_.displayName=F1;var z1="DismissableLayerBranch",H1=N.forwardRef((t,e)=>{const n=N.useContext(S_),r=N.useRef(null),i=Bs(e,r);return N.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),v.jsx(ei.div,{...t,ref:i})});H1.displayName=z1;function V1(t,e=globalThis==null?void 0:globalThis.document){const n=Ps(t),r=N.useRef(!1),i=N.useRef(()=>{});return N.useEffect(()=>{const s=a=>{if(a.target&&!r.current){let l=function(){E_(O1,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",i.current),i.current=l,e.addEventListener("click",i.current,{once:!0})):l()}else e.removeEventListener("click",i.current);r.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",i.current)}},[e,n]),{onPointerDownCapture:()=>r.current=!0}}function G1(t,e=globalThis==null?void 0:globalThis.document){const n=Ps(t),r=N.useRef(!1);return N.useEffect(()=>{const i=s=>{s.target&&!r.current&&E_(B1,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",i),()=>e.removeEventListener("focusin",i)},[e,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function a0(){const t=new CustomEvent(ph);document.dispatchEvent(t)}function E_(t,e,n,{discrete:r}){const i=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&i.addEventListener(t,e,{once:!0}),r?U1(i,s):i.dispatchEvent(s)}var Nd="focusScope.autoFocusOnMount",Dd="focusScope.autoFocusOnUnmount",l0={bubbles:!1,cancelable:!0},j1="FocusScope",w_=N.forwardRef((t,e)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:s,...o}=t,[a,l]=N.useState(null),c=Ps(i),u=Ps(s),f=N.useRef(null),h=Bs(e,g=>l(g)),m=N.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;N.useEffect(()=>{if(r){let g=function(_){if(m.paused||!a)return;const S=_.target;a.contains(S)?f.current=S:fi(f.current,{select:!0})},p=function(_){if(m.paused||!a)return;const S=_.relatedTarget;S!==null&&(a.contains(S)||fi(f.current,{select:!0}))},d=function(_){if(document.activeElement===document.body)for(const A of _)A.removedNodes.length>0&&fi(a)};document.addEventListener("focusin",g),document.addEventListener("focusout",p);const y=new MutationObserver(d);return a&&y.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",p),y.disconnect()}}},[r,a,m.paused]),N.useEffect(()=>{if(a){u0.add(m);const g=document.activeElement;if(!a.contains(g)){const d=new CustomEvent(Nd,l0);a.addEventListener(Nd,c),a.dispatchEvent(d),d.defaultPrevented||(W1(K1(b_(a)),{select:!0}),document.activeElement===g&&fi(a))}return()=>{a.removeEventListener(Nd,c),setTimeout(()=>{const d=new CustomEvent(Dd,l0);a.addEventListener(Dd,u),a.dispatchEvent(d),d.defaultPrevented||fi(g??document.body,{select:!0}),a.removeEventListener(Dd,u),u0.remove(m)},0)}}},[a,c,u,m]);const x=N.useCallback(g=>{if(!n&&!r||m.paused)return;const p=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,d=document.activeElement;if(p&&d){const y=g.currentTarget,[_,S]=X1(y);_&&S?!g.shiftKey&&d===S?(g.preventDefault(),n&&fi(_,{select:!0})):g.shiftKey&&d===_&&(g.preventDefault(),n&&fi(S,{select:!0})):d===y&&g.preventDefault()}},[n,r,m.paused]);return v.jsx(ei.div,{tabIndex:-1,...o,ref:h,onKeyDown:x})});w_.displayName=j1;function W1(t,{select:e=!1}={}){const n=document.activeElement;for(const r of t)if(fi(r,{select:e}),document.activeElement!==n)return}function X1(t){const e=b_(t),n=c0(e,t),r=c0(e.reverse(),t);return[n,r]}function b_(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function c0(t,e){for(const n of t)if(!q1(n,{upTo:e}))return n}function q1(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function $1(t){return t instanceof HTMLInputElement&&"select"in t}function fi(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&$1(t)&&e&&t.select()}}var u0=Y1();function Y1(){let t=[];return{add(e){const n=t[0];e!==n&&(n==null||n.pause()),t=d0(t,e),t.unshift(e)},remove(e){var n;t=d0(t,e),(n=t[0])==null||n.resume()}}}function d0(t,e){const n=[...t],r=n.indexOf(e);return r!==-1&&n.splice(r,1),n}function K1(t){return t.filter(e=>e.tagName!=="A")}var Q1="Portal",T_=N.forwardRef((t,e)=>{var a;const{container:n,...r}=t,[i,s]=N.useState(!1);yu(()=>s(!0),[]);const o=n||i&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?Ww.createPortal(v.jsx(ei.div,{...r,ref:e}),o):null});T_.displayName=Q1;function Z1(t,e){return N.useReducer((n,r)=>e[n][r]??n,t)}var Xu=t=>{const{present:e,children:n}=t,r=J1(e),i=typeof n=="function"?n({present:r.isPresent}):N.Children.only(n),s=Bs(r.ref,eb(i));return typeof n=="function"||r.isPresent?N.cloneElement(i,{ref:s}):null};Xu.displayName="Presence";function J1(t){const[e,n]=N.useState(),r=N.useRef({}),i=N.useRef(t),s=N.useRef("none"),o=t?"mounted":"unmounted",[a,l]=Z1(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return N.useEffect(()=>{const c=Ql(r.current);s.current=a==="mounted"?c:"none"},[a]),yu(()=>{const c=r.current,u=i.current;if(u!==t){const h=s.current,m=Ql(c);t?l("MOUNT"):m==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&h!==m?"ANIMATION_OUT":"UNMOUNT"),i.current=t}},[t,l]),yu(()=>{if(e){let c;const u=e.ownerDocument.defaultView??window,f=m=>{const g=Ql(r.current).includes(m.animationName);if(m.target===e&&g&&(l("ANIMATION_END"),!i.current)){const p=e.style.animationFillMode;e.style.animationFillMode="forwards",c=u.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=p)})}},h=m=>{m.target===e&&(s.current=Ql(r.current))};return e.addEventListener("animationstart",h),e.addEventListener("animationcancel",f),e.addEventListener("animationend",f),()=>{u.clearTimeout(c),e.removeEventListener("animationstart",h),e.removeEventListener("animationcancel",f),e.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:N.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function Ql(t){return(t==null?void 0:t.animationName)||"none"}function eb(t){var r,i;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var Ld=0;function tb(){N.useEffect(()=>{const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",t[0]??f0()),document.body.insertAdjacentElement("beforeend",t[1]??f0()),Ld++,()=>{Ld===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),Ld--}},[])}function f0(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}var Mr=function(){return Mr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Mr.apply(this,arguments)};function C_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nb(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Bc="right-scroll-bar-position",zc="width-before-scroll-bar",rb="with-scroll-bars-hidden",ib="--removed-body-scroll-bar-size";function Id(t,e){return typeof t=="function"?t(e):t&&(t.current=e),t}function sb(t,e){var n=N.useState(function(){return{value:t,callback:e,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=e,n.facade}var ob=typeof window<"u"?N.useLayoutEffect:N.useEffect,h0=new WeakMap;function ab(t,e){var n=sb(null,function(r){return t.forEach(function(i){return Id(i,r)})});return ob(function(){var r=h0.get(n);if(r){var i=new Set(r),s=new Set(t),o=n.current;i.forEach(function(a){s.has(a)||Id(a,null)}),s.forEach(function(a){i.has(a)||Id(a,o)})}h0.set(n,t)},[t]),n}function lb(t){return t}function cb(t,e){e===void 0&&(e=lb);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:t},useMedium:function(s){var o=e(s,r);return n.push(o),function(){n=n.filter(function(a){return a!==o})}},assignSyncMedium:function(s){for(r=!0;n.length;){var o=n;n=[],o.forEach(s)}n={push:function(a){return s(a)},filter:function(){return n}}},assignMedium:function(s){r=!0;var o=[];if(n.length){var a=n;n=[],a.forEach(s),o=n}var l=function(){var u=o;o=[],u.forEach(s)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(u){o.push(u),c()},filter:function(u){return o=o.filter(u),n}}}};return i}function ub(t){t===void 0&&(t={});var e=cb(null);return e.options=Mr({async:!0,ssr:!1},t),e}var A_=function(t){var e=t.sideCar,n=C_(t,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return N.createElement(r,Mr({},n))};A_.isSideCarExport=!0;function db(t,e){return t.useMedium(e),A_}var R_=ub(),Ud=function(){},qu=N.forwardRef(function(t,e){var n=N.useRef(null),r=N.useState({onScrollCapture:Ud,onWheelCapture:Ud,onTouchMoveCapture:Ud}),i=r[0],s=r[1],o=t.forwardProps,a=t.children,l=t.className,c=t.removeScrollBar,u=t.enabled,f=t.shards,h=t.sideCar,m=t.noIsolation,x=t.inert,g=t.allowPinchZoom,p=t.as,d=p===void 0?"div":p,y=t.gapMode,_=C_(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=h,A=ab([n,e]),C=Mr(Mr({},_),i);return N.createElement(N.Fragment,null,u&&N.createElement(S,{sideCar:R_,removeScrollBar:c,shards:f,noIsolation:m,inert:x,setCallbacks:s,allowPinchZoom:!!g,lockRef:n,gapMode:y}),o?N.cloneElement(N.Children.only(a),Mr(Mr({},C),{ref:A})):N.createElement(d,Mr({},C,{className:l,ref:A}),a))});qu.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};qu.classNames={fullWidth:zc,zeroRight:Bc};var fb=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function hb(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=fb();return e&&t.setAttribute("nonce",e),t}function pb(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function mb(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var gb=function(){var t=0,e=null;return{add:function(n){t==0&&(e=hb())&&(pb(e,n),mb(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},vb=function(){var t=gb();return function(e,n){N.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},P_=function(){var t=vb(),e=function(n){var r=n.styles,i=n.dynamic;return t(r,i),null};return e},xb={left:0,top:0,right:0,gap:0},kd=function(t){return parseInt(t||"",10)||0},yb=function(t){var e=window.getComputedStyle(document.body),n=e[t==="padding"?"paddingLeft":"marginLeft"],r=e[t==="padding"?"paddingTop":"marginTop"],i=e[t==="padding"?"paddingRight":"marginRight"];return[kd(n),kd(r),kd(i)]},_b=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return xb;var e=yb(t),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-n+e[2]-e[0])}},Sb=P_(),Ao="data-scroll-locked",Mb=function(t,e,n,r){var i=t.left,s=t.top,o=t.right,a=t.gap;return n===void 0&&(n="margin"),`
  .`.concat(rb,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat(Ao,`] {
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
  
  .`).concat(Bc,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(zc,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Bc," .").concat(Bc,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(zc," .").concat(zc,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Ao,`] {
    `).concat(ib,": ").concat(a,`px;
  }
`)},p0=function(){var t=parseInt(document.body.getAttribute(Ao)||"0",10);return isFinite(t)?t:0},Eb=function(){N.useEffect(function(){return document.body.setAttribute(Ao,(p0()+1).toString()),function(){var t=p0()-1;t<=0?document.body.removeAttribute(Ao):document.body.setAttribute(Ao,t.toString())}},[])},wb=function(t){var e=t.noRelative,n=t.noImportant,r=t.gapMode,i=r===void 0?"margin":r;Eb();var s=N.useMemo(function(){return _b(i)},[i]);return N.createElement(Sb,{styles:Mb(s,!e,i,n?"":"!important")})},mh=!1;if(typeof window<"u")try{var Zl=Object.defineProperty({},"passive",{get:function(){return mh=!0,!0}});window.addEventListener("test",Zl,Zl),window.removeEventListener("test",Zl,Zl)}catch{mh=!1}var Gs=mh?{passive:!1}:!1,bb=function(t){return t.tagName==="TEXTAREA"},N_=function(t,e){if(!(t instanceof Element))return!1;var n=window.getComputedStyle(t);return n[e]!=="hidden"&&!(n.overflowY===n.overflowX&&!bb(t)&&n[e]==="visible")},Tb=function(t){return N_(t,"overflowY")},Cb=function(t){return N_(t,"overflowX")},m0=function(t,e){var n=e.ownerDocument,r=e;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=D_(t,r);if(i){var s=L_(t,r),o=s[1],a=s[2];if(o>a)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Ab=function(t){var e=t.scrollTop,n=t.scrollHeight,r=t.clientHeight;return[e,n,r]},Rb=function(t){var e=t.scrollLeft,n=t.scrollWidth,r=t.clientWidth;return[e,n,r]},D_=function(t,e){return t==="v"?Tb(e):Cb(e)},L_=function(t,e){return t==="v"?Ab(e):Rb(e)},Pb=function(t,e){return t==="h"&&e==="rtl"?-1:1},Nb=function(t,e,n,r,i){var s=Pb(t,window.getComputedStyle(e).direction),o=s*r,a=n.target,l=e.contains(a),c=!1,u=o>0,f=0,h=0;do{var m=L_(t,a),x=m[0],g=m[1],p=m[2],d=g-p-s*x;(x||d)&&D_(t,a)&&(f+=d,h+=x),a instanceof ShadowRoot?a=a.host:a=a.parentNode}while(!l&&a!==document.body||l&&(e.contains(a)||e===a));return(u&&(Math.abs(f)<1||!i)||!u&&(Math.abs(h)<1||!i))&&(c=!0),c},Jl=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},g0=function(t){return[t.deltaX,t.deltaY]},v0=function(t){return t&&"current"in t?t.current:t},Db=function(t,e){return t[0]===e[0]&&t[1]===e[1]},Lb=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},Ib=0,js=[];function Ub(t){var e=N.useRef([]),n=N.useRef([0,0]),r=N.useRef(),i=N.useState(Ib++)[0],s=N.useState(P_)[0],o=N.useRef(t);N.useEffect(function(){o.current=t},[t]),N.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(i));var g=nb([t.lockRef.current],(t.shards||[]).map(v0),!0).filter(Boolean);return g.forEach(function(p){return p.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),g.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(i))})}}},[t.inert,t.lockRef.current,t.shards]);var a=N.useCallback(function(g,p){if("touches"in g&&g.touches.length===2||g.type==="wheel"&&g.ctrlKey)return!o.current.allowPinchZoom;var d=Jl(g),y=n.current,_="deltaX"in g?g.deltaX:y[0]-d[0],S="deltaY"in g?g.deltaY:y[1]-d[1],A,C=g.target,T=Math.abs(_)>Math.abs(S)?"h":"v";if("touches"in g&&T==="h"&&C.type==="range")return!1;var P=m0(T,C);if(!P)return!0;if(P?A=T:(A=T==="v"?"h":"v",P=m0(T,C)),!P)return!1;if(!r.current&&"changedTouches"in g&&(_||S)&&(r.current=A),!A)return!0;var w=r.current||A;return Nb(w,p,g,w==="h"?_:S,!0)},[]),l=N.useCallback(function(g){var p=g;if(!(!js.length||js[js.length-1]!==s)){var d="deltaY"in p?g0(p):Jl(p),y=e.current.filter(function(A){return A.name===p.type&&(A.target===p.target||p.target===A.shadowParent)&&Db(A.delta,d)})[0];if(y&&y.should){p.cancelable&&p.preventDefault();return}if(!y){var _=(o.current.shards||[]).map(v0).filter(Boolean).filter(function(A){return A.contains(p.target)}),S=_.length>0?a(p,_[0]):!o.current.noIsolation;S&&p.cancelable&&p.preventDefault()}}},[]),c=N.useCallback(function(g,p,d,y){var _={name:g,delta:p,target:d,should:y,shadowParent:kb(d)};e.current.push(_),setTimeout(function(){e.current=e.current.filter(function(S){return S!==_})},1)},[]),u=N.useCallback(function(g){n.current=Jl(g),r.current=void 0},[]),f=N.useCallback(function(g){c(g.type,g0(g),g.target,a(g,t.lockRef.current))},[]),h=N.useCallback(function(g){c(g.type,Jl(g),g.target,a(g,t.lockRef.current))},[]);N.useEffect(function(){return js.push(s),t.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:h}),document.addEventListener("wheel",l,Gs),document.addEventListener("touchmove",l,Gs),document.addEventListener("touchstart",u,Gs),function(){js=js.filter(function(g){return g!==s}),document.removeEventListener("wheel",l,Gs),document.removeEventListener("touchmove",l,Gs),document.removeEventListener("touchstart",u,Gs)}},[]);var m=t.removeScrollBar,x=t.inert;return N.createElement(N.Fragment,null,x?N.createElement(s,{styles:Lb(i)}):null,m?N.createElement(wb,{gapMode:t.gapMode}):null)}function kb(t){for(var e=null;t!==null;)t instanceof ShadowRoot&&(e=t.host,t=t.host),t=t.parentNode;return e}const Fb=db(R_,Ub);var I_=N.forwardRef(function(t,e){return N.createElement(qu,Mr({},t,{ref:e,sideCar:Fb}))});I_.classNames=qu.classNames;var Ob=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},Ws=new WeakMap,ec=new WeakMap,tc={},Fd=0,U_=function(t){return t&&(t.host||U_(t.parentNode))},Bb=function(t,e){return e.map(function(n){if(t.contains(n))return n;var r=U_(n);return r&&t.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return!!n})},zb=function(t,e,n,r){var i=Bb(e,Array.isArray(t)?t:[t]);tc[n]||(tc[n]=new WeakMap);var s=tc[n],o=[],a=new Set,l=new Set(i),c=function(f){!f||a.has(f)||(a.add(f),c(f.parentNode))};i.forEach(c);var u=function(f){!f||l.has(f)||Array.prototype.forEach.call(f.children,function(h){if(a.has(h))u(h);else try{var m=h.getAttribute(r),x=m!==null&&m!=="false",g=(Ws.get(h)||0)+1,p=(s.get(h)||0)+1;Ws.set(h,g),s.set(h,p),o.push(h),g===1&&x&&ec.set(h,!0),p===1&&h.setAttribute(n,"true"),x||h.setAttribute(r,"true")}catch(d){console.error("aria-hidden: cannot operate on ",h,d)}})};return u(e),a.clear(),Fd++,function(){o.forEach(function(f){var h=Ws.get(f)-1,m=s.get(f)-1;Ws.set(f,h),s.set(f,m),h||(ec.has(f)||f.removeAttribute(r),ec.delete(f)),m||f.removeAttribute(n)}),Fd--,Fd||(Ws=new WeakMap,Ws=new WeakMap,ec=new WeakMap,tc={})}},Hb=function(t,e,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),i=Ob(t);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),zb(r,i,n,"aria-hidden")):function(){return null}},xm="Dialog",[k_,uL]=w1(xm),[Vb,fr]=k_(xm),F_=t=>{const{__scopeDialog:e,children:n,open:r,defaultOpen:i,onOpenChange:s,modal:o=!0}=t,a=N.useRef(null),l=N.useRef(null),[c=!1,u]=A1({prop:r,defaultProp:i,onChange:s});return v.jsx(Vb,{scope:e,triggerRef:a,contentRef:l,contentId:Pd(),titleId:Pd(),descriptionId:Pd(),open:c,onOpenChange:u,onOpenToggle:N.useCallback(()=>u(f=>!f),[u]),modal:o,children:n})};F_.displayName=xm;var O_="DialogTrigger",B_=N.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=fr(O_,n),s=Bs(e,i.triggerRef);return v.jsx(ei.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":Sm(i.open),...r,ref:s,onClick:Oi(t.onClick,i.onOpenToggle)})});B_.displayName=O_;var ym="DialogPortal",[Gb,z_]=k_(ym,{forceMount:void 0}),H_=t=>{const{__scopeDialog:e,forceMount:n,children:r,container:i}=t,s=fr(ym,e);return v.jsx(Gb,{scope:e,forceMount:n,children:N.Children.map(r,o=>v.jsx(Xu,{present:n||s.open,children:v.jsx(T_,{asChild:!0,container:i,children:o})}))})};H_.displayName=ym;var _u="DialogOverlay",V_=N.forwardRef((t,e)=>{const n=z_(_u,t.__scopeDialog),{forceMount:r=n.forceMount,...i}=t,s=fr(_u,t.__scopeDialog);return s.modal?v.jsx(Xu,{present:r||s.open,children:v.jsx(jb,{...i,ref:e})}):null});V_.displayName=_u;var jb=N.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=fr(_u,n);return v.jsx(I_,{as:Wu,allowPinchZoom:!0,shards:[i.contentRef],children:v.jsx(ei.div,{"data-state":Sm(i.open),...r,ref:e,style:{pointerEvents:"auto",...r.style}})})}),Ns="DialogContent",G_=N.forwardRef((t,e)=>{const n=z_(Ns,t.__scopeDialog),{forceMount:r=n.forceMount,...i}=t,s=fr(Ns,t.__scopeDialog);return v.jsx(Xu,{present:r||s.open,children:s.modal?v.jsx(Wb,{...i,ref:e}):v.jsx(Xb,{...i,ref:e})})});G_.displayName=Ns;var Wb=N.forwardRef((t,e)=>{const n=fr(Ns,t.__scopeDialog),r=N.useRef(null),i=Bs(e,n.contentRef,r);return N.useEffect(()=>{const s=r.current;if(s)return Hb(s)},[]),v.jsx(j_,{...t,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Oi(t.onCloseAutoFocus,s=>{var o;s.preventDefault(),(o=n.triggerRef.current)==null||o.focus()}),onPointerDownOutside:Oi(t.onPointerDownOutside,s=>{const o=s.detail.originalEvent,a=o.button===0&&o.ctrlKey===!0;(o.button===2||a)&&s.preventDefault()}),onFocusOutside:Oi(t.onFocusOutside,s=>s.preventDefault())})}),Xb=N.forwardRef((t,e)=>{const n=fr(Ns,t.__scopeDialog),r=N.useRef(!1),i=N.useRef(!1);return v.jsx(j_,{...t,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var o,a;(o=t.onCloseAutoFocus)==null||o.call(t,s),s.defaultPrevented||(r.current||(a=n.triggerRef.current)==null||a.focus(),s.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:s=>{var l,c;(l=t.onInteractOutside)==null||l.call(t,s),s.defaultPrevented||(r.current=!0,s.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const o=s.target;((c=n.triggerRef.current)==null?void 0:c.contains(o))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&i.current&&s.preventDefault()}})}),j_=N.forwardRef((t,e)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:s,...o}=t,a=fr(Ns,n),l=N.useRef(null),c=Bs(e,l);return tb(),v.jsxs(v.Fragment,{children:[v.jsx(w_,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:s,children:v.jsx(M_,{role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":Sm(a.open),...o,ref:c,onDismiss:()=>a.onOpenChange(!1)})}),v.jsxs(v.Fragment,{children:[v.jsx(qb,{titleId:a.titleId}),v.jsx(Yb,{contentRef:l,descriptionId:a.descriptionId})]})]})}),_m="DialogTitle",W_=N.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=fr(_m,n);return v.jsx(ei.h2,{id:i.titleId,...r,ref:e})});W_.displayName=_m;var X_="DialogDescription",q_=N.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=fr(X_,n);return v.jsx(ei.p,{id:i.descriptionId,...r,ref:e})});q_.displayName=X_;var $_="DialogClose",Y_=N.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=fr($_,n);return v.jsx(ei.button,{type:"button",...r,ref:e,onClick:Oi(t.onClick,()=>i.onOpenChange(!1))})});Y_.displayName=$_;function Sm(t){return t?"open":"closed"}var K_="DialogTitleWarning",[dL,Q_]=E1(K_,{contentName:Ns,titleName:_m,docsSlug:"dialog"}),qb=({titleId:t})=>{const e=Q_(K_),n=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return N.useEffect(()=>{t&&(document.getElementById(t)||console.error(n))},[n,t]),null},$b="DialogDescriptionWarning",Yb=({contentRef:t,descriptionId:e})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Q_($b).contentName}}.`;return N.useEffect(()=>{var s;const i=(s=t.current)==null?void 0:s.getAttribute("aria-describedby");e&&i&&(document.getElementById(e)||console.warn(r))},[r,t,e]),null},Kb=F_,Qb=B_,Zb=H_,Z_=V_,J_=G_,eS=W_,tS=q_,Jb=Y_;/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nS=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=N.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>N.createElement("svg",{ref:l,...tT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:nS("lucide",i),...a},[...o.map(([c,u])=>N.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=(t,e)=>{const n=N.forwardRef(({className:r,...i},s)=>N.createElement(nT,{ref:s,iconNode:e,className:nS(`lucide-${eT(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=Gt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=Gt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=Gt("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=Gt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=Gt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=Gt("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=Gt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=Gt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=Gt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=Gt("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=Gt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=Gt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=Gt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=Gt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=Gt("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=Gt("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=Gt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=Gt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function rS(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=rS(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function gT(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=rS(t))&&(r&&(r+=" "),r+=e);return r}const Em="-",vT=t=>{const e=yT(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const a=o.split(Em);return a[0]===""&&a.length!==1&&a.shift(),iS(a,e)||xT(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&r[o]?[...l,...r[o]]:l}}},iS=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),i=r?iS(t.slice(1),r):void 0;if(i)return i;if(e.validators.length===0)return;const s=t.join(Em);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},S0=/^\[(.+)\]$/,xT=t=>{if(S0.test(t)){const e=S0.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},yT=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return ST(Object.entries(t.classGroups),n).forEach(([s,o])=>{gh(o,r,s,e)}),r},gh=(t,e,n,r)=>{t.forEach(i=>{if(typeof i=="string"){const s=i===""?e:M0(e,i);s.classGroupId=n;return}if(typeof i=="function"){if(_T(i)){gh(i(r),e,n,r);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([s,o])=>{gh(o,M0(e,s),n,r)})})},M0=(t,e)=>{let n=t;return e.split(Em).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},_T=t=>t.isThemeGetter,ST=(t,e)=>e?t.map(([n,r])=>{const i=r.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,i]}):t,MT=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const i=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=r.get(s))!==void 0)return i(s,o),o},set(s,o){n.has(s)?n.set(s,o):i(s,o)}}},sS="!",ET=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,i=e[0],s=e.length,o=a=>{const l=[];let c=0,u=0,f;for(let p=0;p<a.length;p++){let d=a[p];if(c===0){if(d===i&&(r||a.slice(p,p+s)===e)){l.push(a.slice(u,p)),u=p+s;continue}if(d==="/"){f=p;continue}}d==="["?c++:d==="]"&&c--}const h=l.length===0?a:a.substring(u),m=h.startsWith(sS),x=m?h.substring(1):h,g=f&&f>u?f-u:void 0;return{modifiers:l,hasImportantModifier:m,baseClassName:x,maybePostfixModifierPosition:g}};return n?a=>n({className:a,parseClassName:o}):o},wT=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},bT=t=>({cache:MT(t.cacheSize),parseClassName:ET(t),...vT(t)}),TT=/\s+/,CT=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=e,s=[],o=t.trim().split(TT);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:u,hasImportantModifier:f,baseClassName:h,maybePostfixModifierPosition:m}=n(c);let x=!!m,g=r(x?h.substring(0,m):h);if(!g){if(!x){a=c+(a.length>0?" "+a:a);continue}if(g=r(h),!g){a=c+(a.length>0?" "+a:a);continue}x=!1}const p=wT(u).join(":"),d=f?p+sS:p,y=d+g;if(s.includes(y))continue;s.push(y);const _=i(g,x);for(let S=0;S<_.length;++S){const A=_[S];s.push(d+A)}a=c+(a.length>0?" "+a:a)}return a};function AT(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=oS(e))&&(r&&(r+=" "),r+=n);return r}const oS=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=oS(t[r]))&&(n&&(n+=" "),n+=e);return n};function RT(t,...e){let n,r,i,s=o;function o(l){const c=e.reduce((u,f)=>f(u),t());return n=bT(c),r=n.cache.get,i=n.cache.set,s=a,a(l)}function a(l){const c=r(l);if(c)return c;const u=CT(l,n);return i(l,u),u}return function(){return s(AT.apply(null,arguments))}}const pt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},aS=/^\[(?:([a-z-]+):)?(.+)\]$/i,PT=/^\d+\/\d+$/,NT=new Set(["px","full","screen"]),DT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,LT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,IT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,UT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,kT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Cr=t=>Ro(t)||NT.has(t)||PT.test(t),ri=t=>ca(t,"length",jT),Ro=t=>!!t&&!Number.isNaN(Number(t)),Od=t=>ca(t,"number",Ro),Ea=t=>!!t&&Number.isInteger(Number(t)),FT=t=>t.endsWith("%")&&Ro(t.slice(0,-1)),Fe=t=>aS.test(t),ii=t=>DT.test(t),OT=new Set(["length","size","percentage"]),BT=t=>ca(t,OT,lS),zT=t=>ca(t,"position",lS),HT=new Set(["image","url"]),VT=t=>ca(t,HT,XT),GT=t=>ca(t,"",WT),wa=()=>!0,ca=(t,e,n)=>{const r=aS.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},jT=t=>LT.test(t)&&!IT.test(t),lS=()=>!1,WT=t=>UT.test(t),XT=t=>kT.test(t),qT=()=>{const t=pt("colors"),e=pt("spacing"),n=pt("blur"),r=pt("brightness"),i=pt("borderColor"),s=pt("borderRadius"),o=pt("borderSpacing"),a=pt("borderWidth"),l=pt("contrast"),c=pt("grayscale"),u=pt("hueRotate"),f=pt("invert"),h=pt("gap"),m=pt("gradientColorStops"),x=pt("gradientColorStopPositions"),g=pt("inset"),p=pt("margin"),d=pt("opacity"),y=pt("padding"),_=pt("saturate"),S=pt("scale"),A=pt("sepia"),C=pt("skew"),T=pt("space"),P=pt("translate"),w=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",Fe,e],U=()=>[Fe,e],F=()=>["",Cr,ri],Y=()=>["auto",Ro,Fe],K=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],X=()=>["solid","dashed","dotted","double","none"],Z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],k=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",Fe],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],oe=()=>[Ro,Fe];return{cacheSize:500,separator:":",theme:{colors:[wa],spacing:[Cr,ri],blur:["none","",ii,Fe],brightness:oe(),borderColor:[t],borderRadius:["none","","full",ii,Fe],borderSpacing:U(),borderWidth:F(),contrast:oe(),grayscale:q(),hueRotate:oe(),invert:q(),gap:U(),gradientColorStops:[t],gradientColorStopPositions:[FT,ri],inset:D(),margin:D(),opacity:oe(),padding:U(),saturate:oe(),scale:oe(),sepia:q(),skew:oe(),space:U(),translate:U()},classGroups:{aspect:[{aspect:["auto","square","video",Fe]}],container:["container"],columns:[{columns:[ii]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...K(),Fe]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:w()}],"overscroll-x":[{"overscroll-x":w()}],"overscroll-y":[{"overscroll-y":w()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ea,Fe]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Fe]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",Ea,Fe]}],"grid-cols":[{"grid-cols":[wa]}],"col-start-end":[{col:["auto",{span:["full",Ea,Fe]},Fe]}],"col-start":[{"col-start":Y()}],"col-end":[{"col-end":Y()}],"grid-rows":[{"grid-rows":[wa]}],"row-start-end":[{row:["auto",{span:[Ea,Fe]},Fe]}],"row-start":[{"row-start":Y()}],"row-end":[{"row-end":Y()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Fe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Fe]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...k()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...k(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...k(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[T]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[T]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Fe,e]}],"min-w":[{"min-w":[Fe,e,"min","max","fit"]}],"max-w":[{"max-w":[Fe,e,"none","full","min","max","fit","prose",{screen:[ii]},ii]}],h:[{h:[Fe,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Fe,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Fe,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Fe,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ii,ri]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Od]}],"font-family":[{font:[wa]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Fe]}],"line-clamp":[{"line-clamp":["none",Ro,Od]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Cr,Fe]}],"list-image":[{"list-image":["none",Fe]}],"list-style-type":[{list:["none","disc","decimal",Fe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[d]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[d]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...X(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Cr,ri]}],"underline-offset":[{"underline-offset":["auto",Cr,Fe]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Fe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Fe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[d]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...K(),zT]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",BT]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},VT]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[d]}],"border-style":[{border:[...X(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[d]}],"divide-style":[{divide:X()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...X()]}],"outline-offset":[{"outline-offset":[Cr,Fe]}],"outline-w":[{outline:[Cr,ri]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[d]}],"ring-offset-w":[{"ring-offset":[Cr,ri]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",ii,GT]}],"shadow-color":[{shadow:[wa]}],opacity:[{opacity:[d]}],"mix-blend":[{"mix-blend":[...Z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Z()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",ii,Fe]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[f]}],saturate:[{saturate:[_]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[d]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Fe]}],duration:[{duration:oe()}],ease:[{ease:["linear","in","out","in-out",Fe]}],delay:[{delay:oe()}],animate:[{animate:["none","spin","ping","pulse","bounce",Fe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[Ea,Fe]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Fe]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Fe]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Fe]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Cr,ri,Od]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},$T=RT(qT);function zs(...t){return $T(gT(t))}const YT=Kb,KT=Qb,QT=Zb,cS=N.forwardRef(({className:t,...e},n)=>v.jsx(Z_,{ref:n,className:zs("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...e}));cS.displayName=Z_.displayName;const uS=N.forwardRef(({className:t,children:e,...n},r)=>v.jsxs(QT,{children:[v.jsx(cS,{}),v.jsxs(J_,{ref:r,className:zs("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...n,children:[e,v.jsxs(Jb,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[v.jsx(la,{className:"h-4 w-4"}),v.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));uS.displayName=J_.displayName;const dS=({className:t,...e})=>v.jsx("div",{className:zs("flex flex-col space-y-1.5 text-center sm:text-left",t),...e});dS.displayName="DialogHeader";const fS=N.forwardRef(({className:t,...e},n)=>v.jsx(eS,{ref:n,className:zs("text-lg font-semibold leading-none tracking-tight",t),...e}));fS.displayName=eS.displayName;const hS=N.forwardRef(({className:t,...e},n)=>v.jsx(tS,{ref:n,className:zs("text-sm text-muted-foreground",t),...e}));hS.displayName=tS.displayName;function hr(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function Ds(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const pS=6048e5,ZT=864e5;let JT={};function $u(){return JT}function ul(t,e){var a,l,c,u;const n=$u(),r=(e==null?void 0:e.weekStartsOn)??((l=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((u=(c=n.locale)==null?void 0:c.options)==null?void 0:u.weekStartsOn)??0,i=hr(t),s=i.getDay(),o=(s<r?7:0)+s-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function Su(t){return ul(t,{weekStartsOn:1})}function mS(t){const e=hr(t),n=e.getFullYear(),r=Ds(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=Su(r),s=Ds(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const o=Su(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function E0(t){const e=hr(t);return e.setHours(0,0,0,0),e}function w0(t){const e=hr(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function eC(t,e){const n=E0(t),r=E0(e),i=+n-w0(n),s=+r-w0(r);return Math.round((i-s)/ZT)}function tC(t){const e=mS(t),n=Ds(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),Su(n)}function nC(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function rC(t){if(!nC(t)&&typeof t!="number")return!1;const e=hr(t);return!isNaN(Number(e))}function iC(t){const e=hr(t),n=Ds(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const sC={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},oC=(t,e,n)=>{let r;const i=sC[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Bd(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const aC={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},lC={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},cC={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},uC={date:Bd({formats:aC,defaultWidth:"full"}),time:Bd({formats:lC,defaultWidth:"full"}),dateTime:Bd({formats:cC,defaultWidth:"full"})},dC={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},fC=(t,e,n,r)=>dC[t];function ba(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,a=n!=null&&n.width?String(n.width):o;i=t.formattingValues[a]||t.formattingValues[o]}else{const o=t.defaultWidth,a=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[a]||t.values[o]}const s=t.argumentCallback?t.argumentCallback(e):e;return i[s]}}const hC={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},pC={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},mC={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},gC={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},vC={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},xC={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},yC=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},_C={ordinalNumber:yC,era:ba({values:hC,defaultWidth:"wide"}),quarter:ba({values:pC,defaultWidth:"wide",argumentCallback:t=>t-1}),month:ba({values:mC,defaultWidth:"wide"}),day:ba({values:gC,defaultWidth:"wide"}),dayPeriod:ba({values:vC,defaultWidth:"wide",formattingValues:xC,defaultFormattingWidth:"wide"})};function Ta(t){return(e,n={})=>{const r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;const o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?MC(a,f=>f.test(o)):SC(a,f=>f.test(o));let c;c=t.valueCallback?t.valueCallback(l):l,c=n.valueCallback?n.valueCallback(c):c;const u=e.slice(o.length);return{value:c,rest:u}}}function SC(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function MC(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function EC(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const i=r[0],s=e.match(t.parsePattern);if(!s)return null;let o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;const a=e.slice(i.length);return{value:o,rest:a}}}const wC=/^(\d+)(th|st|nd|rd)?/i,bC=/\d+/i,TC={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},CC={any:[/^b/i,/^(a|c)/i]},AC={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},RC={any:[/1/i,/2/i,/3/i,/4/i]},PC={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},NC={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},DC={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},LC={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},IC={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},UC={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},kC={ordinalNumber:EC({matchPattern:wC,parsePattern:bC,valueCallback:t=>parseInt(t,10)}),era:Ta({matchPatterns:TC,defaultMatchWidth:"wide",parsePatterns:CC,defaultParseWidth:"any"}),quarter:Ta({matchPatterns:AC,defaultMatchWidth:"wide",parsePatterns:RC,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Ta({matchPatterns:PC,defaultMatchWidth:"wide",parsePatterns:NC,defaultParseWidth:"any"}),day:Ta({matchPatterns:DC,defaultMatchWidth:"wide",parsePatterns:LC,defaultParseWidth:"any"}),dayPeriod:Ta({matchPatterns:IC,defaultMatchWidth:"any",parsePatterns:UC,defaultParseWidth:"any"})},FC={code:"en-US",formatDistance:oC,formatLong:uC,formatRelative:fC,localize:_C,match:kC,options:{weekStartsOn:0,firstWeekContainsDate:1}};function OC(t){const e=hr(t);return eC(e,iC(e))+1}function BC(t){const e=hr(t),n=+Su(e)-+tC(e);return Math.round(n/pS)+1}function gS(t,e){var u,f,h,m;const n=hr(t),r=n.getFullYear(),i=$u(),s=(e==null?void 0:e.firstWeekContainsDate)??((f=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:f.firstWeekContainsDate)??i.firstWeekContainsDate??((m=(h=i.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,o=Ds(t,0);o.setFullYear(r+1,0,s),o.setHours(0,0,0,0);const a=ul(o,e),l=Ds(t,0);l.setFullYear(r,0,s),l.setHours(0,0,0,0);const c=ul(l,e);return n.getTime()>=a.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function zC(t,e){var a,l,c,u;const n=$u(),r=(e==null?void 0:e.firstWeekContainsDate)??((l=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((u=(c=n.locale)==null?void 0:c.options)==null?void 0:u.firstWeekContainsDate)??1,i=gS(t,e),s=Ds(t,0);return s.setFullYear(i,0,r),s.setHours(0,0,0,0),ul(s,e)}function HC(t,e){const n=hr(t),r=+ul(n,e)-+zC(n,e);return Math.round(r/pS)+1}function ot(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const si={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return ot(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):ot(n+1,2)},d(t,e){return ot(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return ot(t.getHours()%12||12,e.length)},H(t,e){return ot(t.getHours(),e.length)},m(t,e){return ot(t.getMinutes(),e.length)},s(t,e){return ot(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return ot(i,e.length)}},Xs={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},b0={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return si.y(t,e)},Y:function(t,e,n,r){const i=gS(t,r),s=i>0?i:1-i;if(e==="YY"){const o=s%100;return ot(o,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):ot(s,e.length)},R:function(t,e){const n=mS(t);return ot(n,e.length)},u:function(t,e){const n=t.getFullYear();return ot(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return ot(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return ot(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return si.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return ot(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const i=HC(t,r);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):ot(i,e.length)},I:function(t,e,n){const r=BC(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):ot(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):si.d(t,e)},D:function(t,e,n){const r=OC(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):ot(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return ot(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return ot(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return ot(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let i;switch(r===12?i=Xs.noon:r===0?i=Xs.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let i;switch(r>=17?i=Xs.evening:r>=12?i=Xs.afternoon:r>=4?i=Xs.morning:i=Xs.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return si.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):si.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):ot(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):ot(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):si.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):si.s(t,e)},S:function(t,e){return si.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return C0(r);case"XXXX":case"XX":return is(r);case"XXXXX":case"XXX":default:return is(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return C0(r);case"xxxx":case"xx":return is(r);case"xxxxx":case"xxx":default:return is(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+T0(r,":");case"OOOO":default:return"GMT"+is(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+T0(r,":");case"zzzz":default:return"GMT"+is(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return ot(r,e.length)},T:function(t,e,n){const r=t.getTime();return ot(r,e.length)}};function T0(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=Math.trunc(r/60),s=r%60;return s===0?n+String(i):n+String(i)+e+ot(s,2)}function C0(t,e){return t%60===0?(t>0?"-":"+")+ot(Math.abs(t)/60,2):is(t,e)}function is(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=ot(Math.trunc(r/60),2),s=ot(r%60,2);return n+i+e+s}const A0=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},vS=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},VC=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return A0(t,e);let s;switch(r){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",A0(r,e)).replace("{{time}}",vS(i,e))},GC={p:vS,P:VC},jC=/^D+$/,WC=/^Y+$/,XC=["D","DD","YY","YYYY"];function qC(t){return jC.test(t)}function $C(t){return WC.test(t)}function YC(t,e,n){const r=KC(t,e,n);if(console.warn(r),XC.includes(t))throw new RangeError(r)}function KC(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const QC=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ZC=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,JC=/^'([^]*?)'?$/,eA=/''/g,tA=/[a-zA-Z]/;function nA(t,e,n){var u,f,h,m;const r=$u(),i=r.locale??FC,s=r.firstWeekContainsDate??((f=(u=r.locale)==null?void 0:u.options)==null?void 0:f.firstWeekContainsDate)??1,o=r.weekStartsOn??((m=(h=r.locale)==null?void 0:h.options)==null?void 0:m.weekStartsOn)??0,a=hr(t);if(!rC(a))throw new RangeError("Invalid time value");let l=e.match(ZC).map(x=>{const g=x[0];if(g==="p"||g==="P"){const p=GC[g];return p(x,i.formatLong)}return x}).join("").match(QC).map(x=>{if(x==="''")return{isToken:!1,value:"'"};const g=x[0];if(g==="'")return{isToken:!1,value:rA(x)};if(b0[g])return{isToken:!0,value:x};if(g.match(tA))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:x}});i.localize.preprocessor&&(l=i.localize.preprocessor(a,l));const c={firstWeekContainsDate:s,weekStartsOn:o,locale:i};return l.map(x=>{if(!x.isToken)return x.value;const g=x.value;($C(g)||qC(g))&&YC(g,e,String(t));const p=b0[g[0]];return p(a,g,i.localize,c)}).join("")}function rA(t){const e=t.match(JC);return e?e[1].replace(eA,"'"):t}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wm="175",iA=0,R0=1,sA=2,xS=1,oA=2,Lr=3,Gi=0,_n=1,Or=2,Bi=0,Po=1,P0=2,N0=3,D0=4,aA=5,as=100,lA=101,cA=102,uA=103,dA=104,fA=200,hA=201,pA=202,mA=203,vh=204,xh=205,gA=206,vA=207,xA=208,yA=209,_A=210,SA=211,MA=212,EA=213,wA=214,yh=0,_h=1,Sh=2,ea=3,Mh=4,Eh=5,wh=6,bh=7,yS=0,bA=1,TA=2,zi=0,CA=1,AA=2,RA=3,PA=4,NA=5,DA=6,LA=7,_S=300,ta=301,na=302,Th=303,Ch=304,Yu=306,Ah=1e3,fs=1001,Rh=1002,ur=1003,IA=1004,nc=1005,Er=1006,zd=1007,hs=1008,Qr=1009,SS=1010,MS=1011,dl=1012,bm=1013,Ls=1014,Hr=1015,bl=1016,Tm=1017,Cm=1018,fl=1020,ES=35902,wS=1021,bS=1022,ar=1023,TS=1024,CS=1025,hl=1026,pl=1027,AS=1028,Am=1029,RS=1030,Rm=1031,Pm=1033,Hc=33776,Vc=33777,Gc=33778,jc=33779,Ph=35840,Nh=35841,Dh=35842,Lh=35843,Ih=36196,Uh=37492,kh=37496,Fh=37808,Oh=37809,Bh=37810,zh=37811,Hh=37812,Vh=37813,Gh=37814,jh=37815,Wh=37816,Xh=37817,qh=37818,$h=37819,Yh=37820,Kh=37821,Wc=36492,Qh=36494,Zh=36495,PS=36283,Jh=36284,ep=36285,tp=36286,UA=3200,kA=3201,FA=0,OA=1,xi="",Bn="srgb",ra="srgb-linear",Mu="linear",ct="srgb",qs=7680,L0=519,BA=512,zA=513,HA=514,NS=515,VA=516,GA=517,jA=518,WA=519,I0=35044,U0="300 es",Vr=2e3,Eu=2001;class ua{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const i=r[e];if(i!==void 0){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hd=Math.PI/180,np=180/Math.PI;function Tl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[r&255]+Qt[r>>8&255]+Qt[r>>16&255]+Qt[r>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function XA(t,e){return(t%e+e)%e}function Vd(t,e,n){return(1-n)*t+n*e}function Ca(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ut{constructor(e=0,n=0){ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(je(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(je(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*r-o*i+e.x,this.y=s*i+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,r,i,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,s,o,a,l,c)}set(e,n,r,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=r,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,s=this.elements,o=r[0],a=r[3],l=r[6],c=r[1],u=r[4],f=r[7],h=r[2],m=r[5],x=r[8],g=i[0],p=i[3],d=i[6],y=i[1],_=i[4],S=i[7],A=i[2],C=i[5],T=i[8];return s[0]=o*g+a*y+l*A,s[3]=o*p+a*_+l*C,s[6]=o*d+a*S+l*T,s[1]=c*g+u*y+f*A,s[4]=c*p+u*_+f*C,s[7]=c*d+u*S+f*T,s[2]=h*g+m*y+x*A,s[5]=h*p+m*_+x*C,s[8]=h*d+m*S+x*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-r*s*u+r*a*l+i*s*c-i*o*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,x=n*f+r*h+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=f*g,e[1]=(i*c-u*r)*g,e[2]=(a*r-i*o)*g,e[3]=h*g,e[4]=(u*n-i*l)*g,e[5]=(i*s-a*n)*g,e[6]=m*g,e[7]=(r*l-c*n)*g,e[8]=(o*n-r*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(r*l,r*c,-r*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Gd.makeScale(e,n)),this}rotate(e){return this.premultiply(Gd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gd=new Oe;function DS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qA(){const t=wu("canvas");return t.style.display="block",t}const k0={};function Xc(t){t in k0||(k0[t]=!0,console.warn(t))}function $A(t,e,n){return new Promise(function(r,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:r()}}setTimeout(s,n)})}function YA(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function KA(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const F0=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O0=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QA(){const t={enabled:!0,workingColorSpace:ra,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(i.r=Wr(i.r),i.g=Wr(i.g),i.b=Wr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(i.r=No(i.r),i.g=No(i.g),i.b=No(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?Mu:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return t.define({[ra]:{primaries:e,whitePoint:r,transfer:Mu,toXYZ:F0,fromXYZ:O0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:r,transfer:ct,toXYZ:F0,fromXYZ:O0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),t}const et=QA();function Wr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function No(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $s;class ZA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{$s===void 0&&($s=wu("canvas")),$s.width=e.width,$s.height=e.height;const i=$s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=$s}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Wr(s[o]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Wr(n[r]/255)*255):n[r]=Wr(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JA=0;class Nm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JA++}),this.uuid=Tl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(jd(i[o].image)):s.push(jd(i[o]))}else s=jd(i);r.url=s}return n||(e.images[this.uuid]=r),r}}function jd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ZA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eR=0;class Sn extends ua{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,r=fs,i=fs,s=Er,o=hs,a=ar,l=Qr,c=Sn.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eR++}),this.uuid=Tl(),this.name="",this.source=new Nm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_S)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case fs:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case fs:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=_S;Sn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,r=0,i=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i+o[12]*s,this.y=o[1]*n+o[5]*r+o[9]*i+o[13]*s,this.z=o[2]*n+o[6]*r+o[10]*i+o[14]*s,this.w=o[3]*n+o[7]*r+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(m+1)/2,A=(d+1)/2,C=(u+h)/4,T=(f+g)/4,P=(x+p)/4;return _>S&&_>A?_<.01?(r=0,i=.707106781,s=.707106781):(r=Math.sqrt(_),i=C/r,s=T/r):S>A?S<.01?(r=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),r=C/i,s=P/i):A<.01?(r=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),r=T/s,i=P/s),this.set(r,i,s,n),this}let y=Math.sqrt((p-x)*(p-x)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-x)/y,this.y=(f-g)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(je(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tR extends ua{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const i={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Er,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const s=new Sn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);s.flipY=!1,s.generateMipmaps=r.generateMipmaps,s.internalFormat=r.internalFormat,this.textures=[];const o=r.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const i=Object.assign({},e.textures[n].image);this.textures[n].source=new Nm(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is extends tR{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class LS extends Sn{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=ur,this.minFilter=ur,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nR extends Sn{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=ur,this.minFilter=ur,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cl{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,s,o,a){let l=r[i+0],c=r[i+1],u=r[i+2],f=r[i+3];const h=s[o+0],m=s[o+1],x=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=g;return}if(f!==g||l!==h||c!==m||u!==x){let p=1-a;const d=l*h+c*m+u*x+f*g,y=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const A=Math.sqrt(_),C=Math.atan2(A,d*y);p=Math.sin(p*C)/A,a=Math.sin(a*C)/A}const S=a*y;if(l=l*p+h*S,c=c*p+m*S,u=u*p+x*S,f=f*p+g*S,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,r,i,s,o){const a=r[i],l=r[i+1],c=r[i+2],u=r[i+3],f=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+u*f+l*m-c*h,e[n+1]=l*x+u*h+c*f-a*m,e[n+2]=c*x+u*m+a*h-l*f,e[n+3]=u*x-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(r/2),u=a(i/2),f=a(s/2),h=l(r/2),m=l(i/2),x=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=r+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(r>a&&r>f){const m=2*Math.sqrt(1+r-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-r-f);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-r-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=r*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-r*c,this._z=s*u+o*c+r*l-i*a,this._w=o*u-r*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+r*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=r,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*r+n*this._x,this._y=m*i+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=r*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),s=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(B0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(B0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[3]*r+s[6]*i,this.y=s[1]*n+s[4]*r+s[7]*i,this.z=s[2]*n+s[5]*r+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,s=e.elements,o=1/(s[3]*n+s[7]*r+s[11]*i+s[15]);return this.x=(s[0]*n+s[4]*r+s[8]*i+s[12])*o,this.y=(s[1]*n+s[5]*r+s[9]*i+s[13])*o,this.z=(s[2]*n+s[6]*r+s[10]*i+s[14])*o,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*r),u=2*(a*n-s*i),f=2*(s*r-o*n);return this.x=n+l*c+o*f-a*u,this.y=r+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*i,this.y=s[1]*n+s[5]*r+s[9]*i,this.z=s[2]*n+s[6]*r+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(je(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=i*l-s*a,this.y=s*o-r*l,this.z=r*a-i*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wd.copy(this).projectOnVector(e),this.sub(Wd)}reflect(e){return this.sub(Wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(je(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wd=new j,B0=new Cl;class Al{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const s=r.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rc.copy(r.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),ic.subVectors(this.max,Aa),Ys.subVectors(e.a,Aa),Ks.subVectors(e.b,Aa),Qs.subVectors(e.c,Aa),oi.subVectors(Ks,Ys),ai.subVectors(Qs,Ks),Ki.subVectors(Ys,Qs);let n=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ki.z,Ki.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ki.z,0,-Ki.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ki.y,Ki.x,0];return!Xd(n,Ys,Ks,Qs,ic)||(n=[1,0,0,0,1,0,0,0,1],!Xd(n,Ys,Ks,Qs,ic))?!1:(sc.crossVectors(oi,ai),n=[sc.x,sc.y,sc.z],Xd(n,Ys,Ks,Qs,ic))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ar=[new j,new j,new j,new j,new j,new j,new j,new j],Qn=new j,rc=new Al,Ys=new j,Ks=new j,Qs=new j,oi=new j,ai=new j,Ki=new j,Aa=new j,ic=new j,sc=new j,Qi=new j;function Xd(t,e,n,r,i){for(let s=0,o=t.length-3;s<=o;s+=3){Qi.fromArray(t,s);const a=i.x*Math.abs(Qi.x)+i.y*Math.abs(Qi.y)+i.z*Math.abs(Qi.z),l=e.dot(Qi),c=n.dot(Qi),u=r.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rR=new Al,Ra=new j,qd=new j;class Ku{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):rR.setFromPoints(e).getCenter(r);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const n=Ra.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(Ra,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(qd)),this.expandByPoint(Ra.copy(e.center).sub(qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rr=new j,$d=new j,oc=new j,li=new j,Yd=new j,ac=new j,Kd=new j;class IS{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Rr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Rr.copy(this.origin).addScaledVector(this.direction,n),Rr.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){$d.copy(e).add(n).multiplyScalar(.5),oc.copy(n).sub(e).normalize(),li.copy(this.origin).sub($d);const s=e.distanceTo(n)*.5,o=-this.direction.dot(oc),a=li.dot(this.direction),l=-li.dot(oc),c=li.lengthSq(),u=Math.abs(1-o*o);let f,h,m,x;if(u>0)if(f=o*l-a,h=o*a-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const g=1/u;f*=g,h*=g,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy($d).addScaledVector(oc,h),m}intersectSphere(e,n){Rr.subVectors(e.center,this.origin);const r=Rr.dot(this.direction),i=Rr.dot(Rr)-r*r,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=r-o,l=r+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),r>o||s>i||((s>r||isNaN(r))&&(r=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),r>l||a>i)||((a>r||r!==r)&&(r=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,Rr)!==null}intersectTriangle(e,n,r,i,s){Yd.subVectors(n,e),ac.subVectors(r,e),Kd.crossVectors(Yd,ac);let o=this.direction.dot(Kd),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const l=a*this.direction.dot(ac.crossVectors(li,ac));if(l<0)return null;const c=a*this.direction.dot(Yd.cross(li));if(c<0||l+c>o)return null;const u=-a*li.dot(Kd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,n,r,i,s,o,a,l,c,u,f,h,m,x,g,p){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,s,o,a,l,c,u,f,h,m,x,g,p)}set(e,n,r,i,s,o,a,l,c,u,f,h,m,x,g,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=r,d[12]=i,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=x,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/Zs.setFromMatrixColumn(e,0).length(),s=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*s,n[5]=r[5]*s,n[6]=r[6]*s,n[7]=0,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,s=e.z,o=Math.cos(r),a=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,x=a*u,g=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+x*c,n[5]=h-g*c,n[9]=-a*l,n[2]=g-h*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,x=c*u,g=c*f;n[0]=h+g*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-x,n[6]=g+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,x=c*u,g=c*f;n[0]=h-g*a,n[4]=-o*f,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*u,n[9]=g-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,x=a*u,g=a*f;n[0]=l*u,n[4]=x*c-m,n[8]=h*c+g,n[1]=l*f,n[5]=g*c+h,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,x=a*l,g=a*c;n[0]=l*u,n[4]=g-h*f,n[8]=x*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*f+x,n[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,m=o*c,x=a*l,g=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+g,n[5]=o*u,n[9]=m*f-x,n[2]=x*f-m,n[6]=a*u,n[10]=g*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iR,e,sR)}lookAt(e,n,r){const i=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),ci.crossVectors(r,wn),ci.lengthSq()===0&&(Math.abs(r.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),ci.crossVectors(r,wn)),ci.normalize(),lc.crossVectors(wn,ci),i[0]=ci.x,i[4]=lc.x,i[8]=wn.x,i[1]=ci.y,i[5]=lc.y,i[9]=wn.y,i[2]=ci.z,i[6]=lc.z,i[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,s=this.elements,o=r[0],a=r[4],l=r[8],c=r[12],u=r[1],f=r[5],h=r[9],m=r[13],x=r[2],g=r[6],p=r[10],d=r[14],y=r[3],_=r[7],S=r[11],A=r[15],C=i[0],T=i[4],P=i[8],w=i[12],M=i[1],D=i[5],U=i[9],F=i[13],Y=i[2],K=i[6],X=i[10],Z=i[14],k=i[3],q=i[7],J=i[11],oe=i[15];return s[0]=o*C+a*M+l*Y+c*k,s[4]=o*T+a*D+l*K+c*q,s[8]=o*P+a*U+l*X+c*J,s[12]=o*w+a*F+l*Z+c*oe,s[1]=u*C+f*M+h*Y+m*k,s[5]=u*T+f*D+h*K+m*q,s[9]=u*P+f*U+h*X+m*J,s[13]=u*w+f*F+h*Z+m*oe,s[2]=x*C+g*M+p*Y+d*k,s[6]=x*T+g*D+p*K+d*q,s[10]=x*P+g*U+p*X+d*J,s[14]=x*w+g*F+p*Z+d*oe,s[3]=y*C+_*M+S*Y+A*k,s[7]=y*T+_*D+S*K+A*q,s[11]=y*P+_*U+S*X+A*J,s[15]=y*w+_*F+S*Z+A*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],g=e[7],p=e[11],d=e[15];return x*(+s*l*f-i*c*f-s*a*h+r*c*h+i*a*m-r*l*m)+g*(+n*l*m-n*c*h+s*o*h-i*o*m+i*c*u-s*l*u)+p*(+n*c*f-n*a*m-s*o*f+r*o*m+s*a*u-r*c*u)+d*(-i*a*u-n*l*f+n*a*h+i*o*f-r*o*h+r*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],g=e[13],p=e[14],d=e[15],y=f*p*c-g*h*c+g*l*m-a*p*m-f*l*d+a*h*d,_=x*h*c-u*p*c-x*l*m+o*p*m+u*l*d-o*h*d,S=u*g*c-x*f*c+x*a*m-o*g*m-u*a*d+o*f*d,A=x*f*l-u*g*l-x*a*h+o*g*h+u*a*p-o*f*p,C=n*y+r*_+i*S+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=y*T,e[1]=(g*h*s-f*p*s-g*i*m+r*p*m+f*i*d-r*h*d)*T,e[2]=(a*p*s-g*l*s+g*i*c-r*p*c-a*i*d+r*l*d)*T,e[3]=(f*l*s-a*h*s-f*i*c+r*h*c+a*i*m-r*l*m)*T,e[4]=_*T,e[5]=(u*p*s-x*h*s+x*i*m-n*p*m-u*i*d+n*h*d)*T,e[6]=(x*l*s-o*p*s-x*i*c+n*p*c+o*i*d-n*l*d)*T,e[7]=(o*h*s-u*l*s+u*i*c-n*h*c-o*i*m+n*l*m)*T,e[8]=S*T,e[9]=(x*f*s-u*g*s-x*r*m+n*g*m+u*r*d-n*f*d)*T,e[10]=(o*g*s-x*a*s+x*r*c-n*g*c-o*r*d+n*a*d)*T,e[11]=(u*a*s-o*f*s-u*r*c+n*f*c+o*r*m-n*a*m)*T,e[12]=A*T,e[13]=(u*g*i-x*f*i+x*r*h-n*g*h-u*r*p+n*f*p)*T,e[14]=(x*a*i-o*g*i-x*r*l+n*g*l+o*r*p-n*a*p)*T,e[15]=(o*f*i-u*a*i+u*r*l-n*f*l-o*r*h+n*a*h)*T,this}scale(e){const n=this.elements,r=e.x,i=e.y,s=e.z;return n[0]*=r,n[4]*=i,n[8]*=s,n[1]*=r,n[5]*=i,n[9]*=s,n[2]*=r,n[6]*=i,n[10]*=s,n[3]*=r,n[7]*=i,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),s=1-r,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+r,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+r,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,s,o){return this.set(1,r,s,0,e,1,o,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,x=s*f,g=o*u,p=o*f,d=a*f,y=l*c,_=l*u,S=l*f,A=r.x,C=r.y,T=r.z;return i[0]=(1-(g+d))*A,i[1]=(m+S)*A,i[2]=(x-_)*A,i[3]=0,i[4]=(m-S)*C,i[5]=(1-(h+d))*C,i[6]=(p+y)*C,i[7]=0,i[8]=(x+_)*T,i[9]=(p-y)*T,i[10]=(1-(h+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let s=Zs.set(i[0],i[1],i[2]).length();const o=Zs.set(i[4],i[5],i[6]).length(),a=Zs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Zn.copy(this);const c=1/s,u=1/o,f=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,n.setFromRotationMatrix(Zn),r.x=s,r.y=o,r.z=a,this}makePerspective(e,n,r,i,s,o,a=Vr){const l=this.elements,c=2*s/(n-e),u=2*s/(r-i),f=(n+e)/(n-e),h=(r+i)/(r-i);let m,x;if(a===Vr)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Eu)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,i,s,o,a=Vr){const l=this.elements,c=1/(n-e),u=1/(r-i),f=1/(o-s),h=(n+e)*c,m=(r+i)*u;let x,g;if(a===Vr)x=(o+s)*f,g=-2*f;else if(a===Eu)x=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Zs=new j,Zn=new Nt,iR=new j(0,0,0),sR=new j(1,1,1),ci=new j,lc=new j,wn=new j,z0=new Nt,H0=new Cl;class Zr{constructor(e=0,n=0,r=0,i=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(n){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return z0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(z0,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return H0.setFromEuler(this),this.setFromQuaternion(H0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class US{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oR=0;const V0=new j,Js=new Cl,Pr=new Nt,cc=new j,Pa=new j,aR=new j,lR=new Cl,G0=new j(1,0,0),j0=new j(0,1,0),W0=new j(0,0,1),X0={type:"added"},cR={type:"removed"},eo={type:"childadded",child:null},Qd={type:"childremoved",child:null};class Mn extends ua{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=Tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new j,n=new Zr,r=new Cl,i=new j(1,1,1);function s(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(s),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Oe}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new US,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Js.setFromAxisAngle(e,n),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,n){return Js.setFromAxisAngle(e,n),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(G0,e)}rotateY(e){return this.rotateOnAxis(j0,e)}rotateZ(e){return this.rotateOnAxis(W0,e)}translateOnAxis(e,n){return V0.copy(e).applyQuaternion(this.quaternion),this.position.add(V0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(G0,e)}translateY(e){return this.translateOnAxis(j0,e)}translateZ(e){return this.translateOnAxis(W0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?cc.copy(e):cc.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pr.lookAt(Pa,cc,this.up):Pr.lookAt(cc,Pa,this.up),this.quaternion.setFromRotationMatrix(Pr),i&&(Pr.extractRotation(i.matrixWorld),Js.setFromRotationMatrix(Pr),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(X0),eo.child=e,this.dispatchEvent(eo),eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cR),Qd.child=e,this.dispatchEvent(Qd),Qd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(X0),eo.child=e,this.dispatchEvent(eo),eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const o=this.children[r].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,e,aR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,lR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),m.length>0&&(r.animations=m),x.length>0&&(r.nodes=x)}return r.object=i,r;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Mn.DEFAULT_UP=new j(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new j,Nr=new j,Zd=new j,Dr=new j,to=new j,no=new j,q0=new j,Jd=new j,ef=new j,tf=new j,nf=new Pt,rf=new Pt,sf=new Pt;class or{constructor(e=new j,n=new j,r=new j){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),Jn.subVectors(e,n),i.cross(Jn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,n,r,i,s){Jn.subVectors(i,n),Nr.subVectors(r,n),Zd.subVectors(e,n);const o=Jn.dot(Jn),a=Jn.dot(Nr),l=Jn.dot(Zd),c=Nr.dot(Nr),u=Nr.dot(Zd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,x=(o*u-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,Dr)===null?!1:Dr.x>=0&&Dr.y>=0&&Dr.x+Dr.y<=1}static getInterpolation(e,n,r,i,s,o,a,l){return this.getBarycoord(e,n,r,i,Dr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dr.x),l.addScaledVector(o,Dr.y),l.addScaledVector(a,Dr.z),l)}static getInterpolatedAttribute(e,n,r,i,s,o){return nf.setScalar(0),rf.setScalar(0),sf.setScalar(0),nf.fromBufferAttribute(e,n),rf.fromBufferAttribute(e,r),sf.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(nf,s.x),o.addScaledVector(rf,s.y),o.addScaledVector(sf,s.z),o}static isFrontFacing(e,n,r,i){return Jn.subVectors(r,n),Nr.subVectors(e,n),Jn.cross(Nr).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),Jn.cross(Nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return or.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return or.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,i,s){return or.getInterpolation(e,this.a,this.b,this.c,n,r,i,s)}containsPoint(e){return or.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return or.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,s=this.c;let o,a;to.subVectors(i,r),no.subVectors(s,r),Jd.subVectors(e,r);const l=to.dot(Jd),c=no.dot(Jd);if(l<=0&&c<=0)return n.copy(r);ef.subVectors(e,i);const u=to.dot(ef),f=no.dot(ef);if(u>=0&&f<=u)return n.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(r).addScaledVector(to,o);tf.subVectors(e,s);const m=to.dot(tf),x=no.dot(tf);if(x>=0&&m<=x)return n.copy(s);const g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(r).addScaledVector(no,a);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return q0.subVectors(s,i),a=(f-u)/(f-u+(m-x)),n.copy(i).addScaledVector(q0,a);const d=1/(p+g+h);return o=g*d,a=h*d,n.copy(r).addScaledVector(to,o).addScaledVector(no,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},uc={h:0,s:0,l:0};function of(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class at{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=et.workingColorSpace){return this.r=e,this.g=n,this.b=r,et.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=et.workingColorSpace){if(e=XA(e,1),n=je(n,0,1),r=je(r,0,1),n===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;this.r=of(o,s,e+1/3),this.g=of(o,s,e),this.b=of(o,s,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,n=Bn){function r(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const r=kS[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}copyLinearToSRGB(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return et.fromWorkingColorSpace(Zt.copy(this),e),Math.round(je(Zt.r*255,0,255))*65536+Math.round(je(Zt.g*255,0,255))*256+Math.round(je(Zt.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Zt.copy(this),n);const r=Zt.r,i=Zt.g,s=Zt.b,o=Math.max(r,i,s),a=Math.min(r,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case r:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-r)/f+2;break;case s:l=(r-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Bn){et.fromWorkingColorSpace(Zt.copy(this),e);const n=Zt.r,r=Zt.g,i=Zt.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+n,ui.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(ui),e.getHSL(uc);const r=Vd(ui.h,uc.h,n),i=Vd(ui.s,uc.s,n),s=Vd(ui.l,uc.l,n);return this.setHSL(r,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,s=e.elements;return this.r=s[0]*n+s[3]*r+s[6]*i,this.g=s[1]*n+s[4]*r+s[7]*i,this.b=s[2]*n+s[5]*r+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new at;at.NAMES=kS;let uR=0;class Rl extends ua{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uR++}),this.uuid=Tl(),this.name="",this.type="Material",this.blending=Po,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=xh,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Po&&(r.blending=this.blending),this.side!==Gi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vh&&(r.blendSrc=this.blendSrc),this.blendDst!==xh&&(r.blendDst=this.blendDst),this.blendEquation!==as&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==L0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=i(e.textures),o=i(e.images);s.length>0&&(r.textures=s),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let s=0;s!==i;++s)r[s]=n[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class FS extends Rl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=yS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new j,dc=new ut;let dR=0;class Wn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=I0,this.updateRanges=[],this.gpuType=Hr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)dc.fromBufferAttribute(this,n),dc.applyMatrix3(e),this.setXY(n,dc.x,dc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ca(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=fn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ca(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ca(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ca(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ca(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),r=fn(r,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,s){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),r=fn(r,this.array),i=fn(i,this.array),s=fn(s,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==I0&&(e.usage=this.usage),e}}class OS extends Wn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class BS extends Wn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Es extends Wn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let fR=0;const kn=new Nt,af=new Mn,ro=new j,bn=new Al,Na=new Al,zt=new j;class ti extends ua{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fR++}),this.uuid=Tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DS(e)?BS:OS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new Oe().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,r){return kn.makeTranslation(e,n,r),this.applyMatrix4(kn),this}scale(e,n,r){return kn.makeScale(e,n,r),this.applyMatrix4(kn),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];r.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Es(r,3))}else{const r=Math.min(e.length,n.count);for(let i=0;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const s=n[r];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ku);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Na.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(bn.min,Na.min),bn.expandByPoint(zt),zt.addVectors(bn.max,Na.max),bn.expandByPoint(zt)):(bn.expandByPoint(Na.min),bn.expandByPoint(Na.max))}bn.getCenter(r);let i=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),i=Math.max(i,r.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(ro.fromBufferAttribute(e,c),zt.add(ro)),i=Math.max(i,r.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,i=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*r.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<r.count;P++)a[P]=new j,l[P]=new j;const c=new j,u=new j,f=new j,h=new ut,m=new ut,x=new ut,g=new j,p=new j;function d(P,w,M){c.fromBufferAttribute(r,P),u.fromBufferAttribute(r,w),f.fromBufferAttribute(r,M),h.fromBufferAttribute(s,P),m.fromBufferAttribute(s,w),x.fromBufferAttribute(s,M),u.sub(c),f.sub(c),m.sub(h),x.sub(h);const D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(D),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(D),a[P].add(g),a[w].add(g),a[M].add(g),l[P].add(p),l[w].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,w=y.length;P<w;++P){const M=y[P],D=M.start,U=M.count;for(let F=D,Y=D+U;F<Y;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const _=new j,S=new j,A=new j,C=new j;function T(P){A.fromBufferAttribute(i,P),C.copy(A);const w=a[P];_.copy(w),_.sub(A.multiplyScalar(A.dot(w))).normalize(),S.crossVectors(C,w);const D=S.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,D)}for(let P=0,w=y.length;P<w;++P){const M=y[P],D=M.start,U=M.count;for(let F=D,Y=D+U;F<Y;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let h=0,m=r.count;h<m;h++)r.setXYZ(h,0,0,0);const i=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(n,x),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(r,x),l.fromBufferAttribute(r,g),c.fromBufferAttribute(r,p),a.add(u),l.add(u),c.add(u),r.setXYZ(x,a.x,a.y,a.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)i.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,x=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let d=0;d<u;d++)h[x++]=c[m++]}return new Wn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ti,r=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,r);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,r);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $0=new Nt,Zi=new IS,fc=new Ku,Y0=new j,hc=new j,pc=new j,mc=new j,lf=new j,gc=new j,K0=new j,vc=new j;class Gr extends Mn{constructor(e=new ti,n=new FS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,s=r.morphAttributes.position,o=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){gc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(lf.fromBufferAttribute(f,e),o?gc.addScaledVector(lf,u):gc.addScaledVector(lf.sub(n),u))}n.add(gc)}return n}raycast(e,n){const r=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),!(fc.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(fc,Y0)===null||Zi.origin.distanceToSquared(Y0)>(e.far-e.near)**2))&&($0.copy(s).invert(),Zi.copy(e.ray).applyMatrix4($0),!(r.boundingBox!==null&&Zi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Zi)))}_computeIntersections(e,n,r){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){const p=h[x],d=o[p.materialIndex],y=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,A=_;S<A;S+=3){const C=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);i=xc(this,d,e,r,c,u,f,C,T,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,n.push(i))}}else{const x=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=x,d=g;p<d;p+=3){const y=a.getX(p),_=a.getX(p+1),S=a.getX(p+2);i=xc(this,o,e,r,c,u,f,y,_,S),i&&(i.faceIndex=Math.floor(p/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){const p=h[x],d=o[p.materialIndex],y=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,A=_;S<A;S+=3){const C=S,T=S+1,P=S+2;i=xc(this,d,e,r,c,u,f,C,T,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,n.push(i))}}else{const x=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=x,d=g;p<d;p+=3){const y=p,_=p+1,S=p+2;i=xc(this,o,e,r,c,u,f,y,_,S),i&&(i.faceIndex=Math.floor(p/3),n.push(i))}}}}function hR(t,e,n,r,i,s,o,a){let l;if(e.side===_n?l=r.intersectTriangle(o,s,i,!0,a):l=r.intersectTriangle(i,s,o,e.side===Gi,a),l===null)return null;vc.copy(a),vc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(vc);return c<n.near||c>n.far?null:{distance:c,point:vc.clone(),object:t}}function xc(t,e,n,r,i,s,o,a,l,c){t.getVertexPosition(a,hc),t.getVertexPosition(l,pc),t.getVertexPosition(c,mc);const u=hR(t,e,n,r,hc,pc,mc,K0);if(u){const f=new j;or.getBarycoord(K0,hc,pc,mc,f),i&&(u.uv=or.getInterpolatedAttribute(i,a,l,c,f,new ut)),s&&(u.uv1=or.getInterpolatedAttribute(s,a,l,c,f,new ut)),o&&(u.normal=or.getInterpolatedAttribute(o,a,l,c,f,new j),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new j,materialIndex:0};or.getNormal(hc,pc,mc,h.normal),u.face=h,u.barycoord=f}return u}class Pl extends ti{constructor(e=1,n=1,r=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,r,n,e,o,s,0),x("z","y","x",1,-1,r,n,-e,o,s,1),x("x","z","y",1,1,e,r,n,i,o,2),x("x","z","y",1,-1,e,r,-n,i,o,3),x("x","y","z",1,-1,e,n,r,i,s,4),x("x","y","z",-1,-1,e,n,-r,i,s,5),this.setIndex(l),this.setAttribute("position",new Es(c,3)),this.setAttribute("normal",new Es(u,3)),this.setAttribute("uv",new Es(f,2));function x(g,p,d,y,_,S,A,C,T,P,w){const M=S/T,D=A/P,U=S/2,F=A/2,Y=C/2,K=T+1,X=P+1;let Z=0,k=0;const q=new j;for(let J=0;J<X;J++){const oe=J*D-F;for(let Ee=0;Ee<K;Ee++){const Ze=Ee*M-U;q[g]=Ze*y,q[p]=oe*_,q[d]=Y,c.push(q.x,q.y,q.z),q[g]=0,q[p]=0,q[d]=C>0?1:-1,u.push(q.x,q.y,q.z),f.push(Ee/T),f.push(1-J/P),Z+=1}}for(let J=0;J<P;J++)for(let oe=0;oe<T;oe++){const Ee=h+oe+K*J,Ze=h+oe+K*(J+1),$=h+(oe+1)+K*(J+1),ae=h+(oe+1)+K*J;l.push(Ee,Ze,ae),l.push(Ze,$,ae),k+=6}a.addGroup(m,k,w),m+=k,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ia(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const r=ia(t[n]);for(const i in r)e[i]=r[i]}return e}function pR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function zS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const mR={clone:ia,merge:rn};var gR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Rl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gR,this.fragmentShader=vR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=pR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?n.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[i]={type:"m4",value:o.toArray()}:n.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class HS extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Vr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new j,Q0=new ut,Z0=new ut;class Vn extends HS{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(Hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,n){return this.getViewBounds(e,Q0,Z0),n.subVectors(Z0,Q0)}setViewOffset(e,n,r,i,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hd*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,n-=o.offsetY*r/c,i*=o.width/l,r*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const io=-90,so=1;class xR extends Mn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vn(io,so,e,n);i.layers=this.layers,this.add(i);const s=new Vn(io,so,e,n);s.layers=this.layers,this.add(s);const o=new Vn(io,so,e,n);o.layers=this.layers,this.add(o);const a=new Vn(io,so,e,n);a.layers=this.layers,this.add(a);const l=new Vn(io,so,e,n);l.layers=this.layers,this.add(l);const c=new Vn(io,so,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Vr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eu)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,s),e.setRenderTarget(r,1,i),e.render(n,o),e.setRenderTarget(r,2,i),e.render(n,a),e.setRenderTarget(r,3,i),e.render(n,l),e.setRenderTarget(r,4,i),e.render(n,c),r.texture.generateMipmaps=g,e.setRenderTarget(r,5,i),e.render(n,u),e.setRenderTarget(f,h,m),e.xr.enabled=x,r.texture.needsPMREMUpdate=!0}}class VS extends Sn{constructor(e=[],n=ta,r,i,s,o,a,l,c,u){super(e,n,r,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yR extends Is{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new VS(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Er}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pl(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:ia(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:_n,blending:Bi});s.uniforms.tEquirect.value=n;const o=new Gr(i,s),a=n.minFilter;return n.minFilter===hs&&(n.minFilter=Er),new xR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,r=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,r,i);e.setRenderTarget(s)}}class yc extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _R={type:"move"};class cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=n.getJointPose(g,r),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_R)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new yc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class SR extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const uf=new j,MR=new j,ER=new Oe;class ss{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=uf.subVectors(r,n).cross(MR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(uf),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:n.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ER.getNormalMatrix(e),i=this.coplanarPoint(uf).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Ku,_c=new j;class GS{constructor(e=new ss,n=new ss,r=new ss,i=new ss,s=new ss,o=new ss){this.planes=[e,n,r,i,s,o]}set(e,n,r,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(r),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Vr){const r=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],m=i[8],x=i[9],g=i[10],p=i[11],d=i[12],y=i[13],_=i[14],S=i[15];if(r[0].setComponents(l-s,h-c,p-m,S-d).normalize(),r[1].setComponents(l+s,h+c,p+m,S+d).normalize(),r[2].setComponents(l+o,h+u,p+x,S+y).normalize(),r[3].setComponents(l-o,h-u,p-x,S-y).normalize(),r[4].setComponents(l-a,h-f,p-g,S-_).normalize(),n===Vr)r[5].setComponents(l+a,h+f,p+g,S+_).normalize();else if(n===Eu)r[5].setComponents(a,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(_c.x=i.normal.x>0?e.max.x:e.min.x,_c.y=i.normal.y>0?e.max.y:e.min.y,_c.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jS extends Rl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const J0=new Nt,rp=new IS,Sc=new Ku,Mc=new j;class wR extends Mn{constructor(e=new ti,n=new jS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sc.copy(r.boundingSphere),Sc.applyMatrix4(i),Sc.radius+=s,e.ray.intersectsSphere(Sc)===!1)return;J0.copy(i).invert(),rp.copy(e.ray).applyMatrix4(J0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=r.index,f=r.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=h,g=m;x<g;x++){const p=c.getX(x);Mc.fromBufferAttribute(f,p),ev(Mc,p,l,i,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=h,g=m;x<g;x++)Mc.fromBufferAttribute(f,x),ev(Mc,x,l,i,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ev(t,e,n,r,i,s,o){const a=rp.distanceSqToPoint(t);if(a<n){const l=new j;rp.closestPointToPoint(t,l),l.applyMatrix4(r);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class WS extends Sn{constructor(e,n,r=Ls,i,s,o,a=ur,l=ur,c,u=hl){if(u!==hl&&u!==pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,o,a,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Qu extends ti{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const s=e/2,o=n/2,a=Math.floor(r),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=n/l,m=[],x=[],g=[],p=[];for(let d=0;d<u;d++){const y=d*h-o;for(let _=0;_<c;_++){const S=_*f-s;x.push(S,-y,0),g.push(0,0,1),p.push(_/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const _=y+c*d,S=y+c*(d+1),A=y+1+c*(d+1),C=y+1+c*d;m.push(_,S,C),m.push(S,A,C)}this.setIndex(m),this.setAttribute("position",new Es(x,3)),this.setAttribute("normal",new Es(g,3)),this.setAttribute("uv",new Es(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.width,e.height,e.widthSegments,e.heightSegments)}}class bR extends Rl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TR extends Rl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class CR extends HS{constructor(e=-1,n=1,r=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=r-e,o=r+e,a=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class AR extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function tv(t,e,n,r){const i=RR(r);switch(n){case wS:return t*e;case TS:return t*e;case CS:return t*e*2;case AS:return t*e/i.components*i.byteLength;case Am:return t*e/i.components*i.byteLength;case RS:return t*e*2/i.components*i.byteLength;case Rm:return t*e*2/i.components*i.byteLength;case bS:return t*e*3/i.components*i.byteLength;case ar:return t*e*4/i.components*i.byteLength;case Pm:return t*e*4/i.components*i.byteLength;case Hc:case Vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gc:case jc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nh:case Lh:return Math.max(t,16)*Math.max(e,8)/4;case Ph:case Dh:return Math.max(t,8)*Math.max(e,8)/2;case Ih:case Uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case $h:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Wc:case Qh:case Zh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case PS:case Jh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ep:case tp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RR(t){switch(t){case Qr:case SS:return{byteLength:1,components:1};case dl:case MS:case bl:return{byteLength:2,components:1};case Tm:case Cm:return{byteLength:2,components:4};case Ls:case bm:case Hr:return{byteLength:4,components:1};case ES:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function XS(){let t=null,e=!1,n=null,r=null;function i(s,o){n(s,o),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function PR(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function r(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<f.length;m++){const x=f[h],g=f[m];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++h,f[h]=g)}f.length=h+1;for(let m=0,x=f.length;m<x;m++){const g=f[m];t.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var NR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DR=`#ifdef USE_ALPHAHASH
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
#endif`,LR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FR=`#ifdef USE_AOMAP
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
#endif`,OR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BR=`#ifdef USE_BATCHING
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
#endif`,zR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jR=`#ifdef USE_IRIDESCENCE
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
#endif`,WR=`#ifdef USE_BUMPMAP
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
#endif`,XR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$R=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,e2=`#define PI 3.141592653589793
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
} // validated`,t2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n2=`vec3 transformedNormal = objectNormal;
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
#endif`,r2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a2="gl_FragColor = linearToOutputTexel( gl_FragColor );",l2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c2=`#ifdef USE_ENVMAP
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
#endif`,u2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,d2=`#ifdef USE_ENVMAP
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
#endif`,f2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h2=`#ifdef USE_ENVMAP
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
#endif`,p2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x2=`#ifdef USE_GRADIENTMAP
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
}`,y2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M2=`uniform bool receiveShadow;
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
#endif`,E2=`#ifdef USE_ENVMAP
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
#endif`,w2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A2=`PhysicalMaterial material;
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
#endif`,R2=`struct PhysicalMaterial {
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
}`,P2=`
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
#endif`,N2=`#if defined( RE_IndirectDiffuse )
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
#endif`,D2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z2=`#if defined( USE_POINTS_UV )
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
#endif`,H2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X2=`#ifdef USE_MORPHTARGETS
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
#endif`,q2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J2=`#ifdef USE_NORMALMAP
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
#endif`,eP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mP=`float getShadowMask() {
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
}`,gP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vP=`#ifdef USE_SKINNING
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
#endif`,xP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yP=`#ifdef USE_SKINNING
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
#endif`,_P=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wP=`#ifdef USE_TRANSMISSION
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
#endif`,bP=`#ifdef USE_TRANSMISSION
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
#endif`,TP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NP=`uniform sampler2D t2D;
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
}`,DP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kP=`#include <common>
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
}`,FP=`#if DEPTH_PACKING == 3200
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
}`,OP=`#define DISTANCE
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
}`,BP=`#define DISTANCE
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
}`,zP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VP=`uniform float scale;
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
}`,GP=`uniform vec3 diffuse;
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
}`,jP=`#include <common>
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
}`,WP=`uniform vec3 diffuse;
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
}`,XP=`#define LAMBERT
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
}`,qP=`#define LAMBERT
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
}`,$P=`#define MATCAP
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
}`,YP=`#define MATCAP
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
}`,KP=`#define NORMAL
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
}`,QP=`#define NORMAL
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
}`,ZP=`#define PHONG
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
}`,JP=`#define PHONG
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
}`,eN=`#define STANDARD
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
}`,tN=`#define STANDARD
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
}`,nN=`#define TOON
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
}`,rN=`#define TOON
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
}`,iN=`uniform float size;
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
}`,sN=`uniform vec3 diffuse;
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
}`,oN=`#include <common>
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
}`,aN=`uniform vec3 color;
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
}`,lN=`uniform float rotation;
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
}`,cN=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:NR,alphahash_pars_fragment:DR,alphamap_fragment:LR,alphamap_pars_fragment:IR,alphatest_fragment:UR,alphatest_pars_fragment:kR,aomap_fragment:FR,aomap_pars_fragment:OR,batching_pars_vertex:BR,batching_vertex:zR,begin_vertex:HR,beginnormal_vertex:VR,bsdfs:GR,iridescence_fragment:jR,bumpmap_pars_fragment:WR,clipping_planes_fragment:XR,clipping_planes_pars_fragment:qR,clipping_planes_pars_vertex:$R,clipping_planes_vertex:YR,color_fragment:KR,color_pars_fragment:QR,color_pars_vertex:ZR,color_vertex:JR,common:e2,cube_uv_reflection_fragment:t2,defaultnormal_vertex:n2,displacementmap_pars_vertex:r2,displacementmap_vertex:i2,emissivemap_fragment:s2,emissivemap_pars_fragment:o2,colorspace_fragment:a2,colorspace_pars_fragment:l2,envmap_fragment:c2,envmap_common_pars_fragment:u2,envmap_pars_fragment:d2,envmap_pars_vertex:f2,envmap_physical_pars_fragment:E2,envmap_vertex:h2,fog_vertex:p2,fog_pars_vertex:m2,fog_fragment:g2,fog_pars_fragment:v2,gradientmap_pars_fragment:x2,lightmap_pars_fragment:y2,lights_lambert_fragment:_2,lights_lambert_pars_fragment:S2,lights_pars_begin:M2,lights_toon_fragment:w2,lights_toon_pars_fragment:b2,lights_phong_fragment:T2,lights_phong_pars_fragment:C2,lights_physical_fragment:A2,lights_physical_pars_fragment:R2,lights_fragment_begin:P2,lights_fragment_maps:N2,lights_fragment_end:D2,logdepthbuf_fragment:L2,logdepthbuf_pars_fragment:I2,logdepthbuf_pars_vertex:U2,logdepthbuf_vertex:k2,map_fragment:F2,map_pars_fragment:O2,map_particle_fragment:B2,map_particle_pars_fragment:z2,metalnessmap_fragment:H2,metalnessmap_pars_fragment:V2,morphinstance_vertex:G2,morphcolor_vertex:j2,morphnormal_vertex:W2,morphtarget_pars_vertex:X2,morphtarget_vertex:q2,normal_fragment_begin:$2,normal_fragment_maps:Y2,normal_pars_fragment:K2,normal_pars_vertex:Q2,normal_vertex:Z2,normalmap_pars_fragment:J2,clearcoat_normal_fragment_begin:eP,clearcoat_normal_fragment_maps:tP,clearcoat_pars_fragment:nP,iridescence_pars_fragment:rP,opaque_fragment:iP,packing:sP,premultiplied_alpha_fragment:oP,project_vertex:aP,dithering_fragment:lP,dithering_pars_fragment:cP,roughnessmap_fragment:uP,roughnessmap_pars_fragment:dP,shadowmap_pars_fragment:fP,shadowmap_pars_vertex:hP,shadowmap_vertex:pP,shadowmask_pars_fragment:mP,skinbase_vertex:gP,skinning_pars_vertex:vP,skinning_vertex:xP,skinnormal_vertex:yP,specularmap_fragment:_P,specularmap_pars_fragment:SP,tonemapping_fragment:MP,tonemapping_pars_fragment:EP,transmission_fragment:wP,transmission_pars_fragment:bP,uv_pars_fragment:TP,uv_pars_vertex:CP,uv_vertex:AP,worldpos_vertex:RP,background_vert:PP,background_frag:NP,backgroundCube_vert:DP,backgroundCube_frag:LP,cube_vert:IP,cube_frag:UP,depth_vert:kP,depth_frag:FP,distanceRGBA_vert:OP,distanceRGBA_frag:BP,equirect_vert:zP,equirect_frag:HP,linedashed_vert:VP,linedashed_frag:GP,meshbasic_vert:jP,meshbasic_frag:WP,meshlambert_vert:XP,meshlambert_frag:qP,meshmatcap_vert:$P,meshmatcap_frag:YP,meshnormal_vert:KP,meshnormal_frag:QP,meshphong_vert:ZP,meshphong_frag:JP,meshphysical_vert:eN,meshphysical_frag:tN,meshtoon_vert:nN,meshtoon_frag:rN,points_vert:iN,points_frag:sN,shadow_vert:oN,shadow_frag:aN,sprite_vert:lN,sprite_frag:cN},ce={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},_r={basic:{uniforms:rn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:rn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new at(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:rn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:rn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:rn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new at(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:rn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:rn([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:rn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:rn([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:rn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:rn([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:rn([ce.common,ce.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:rn([ce.lights,ce.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};_r.physical={uniforms:rn([_r.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ec={r:0,b:0,g:0},es=new Zr,uN=new Nt;function dN(t,e,n,r,i,s,o){const a=new at(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function x(_){let S=_.isScene===!0?_.background:null;return S&&S.isTexture&&(S=(_.backgroundBlurriness>0?n:e).get(S)),S}function g(_){let S=!1;const A=x(_);A===null?d(a,l):A&&A.isColor&&(d(A,1),S=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?r.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(_,S){const A=x(S);A&&(A.isCubeTexture||A.mapping===Yu)?(u===void 0&&(u=new Gr(new Pl(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:ia(_r.backgroundCube.uniforms),vertexShader:_r.backgroundCube.vertexShader,fragmentShader:_r.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),es.copy(S.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uN.makeRotationFromEuler(es)),u.material.toneMapped=et.getTransfer(A.colorSpace)!==ct,(f!==A||h!==A.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,m=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Gr(new Qu(2,2),new ji({name:"BackgroundMaterial",uniforms:ia(_r.background.uniforms),vertexShader:_r.background.vertexShader,fragmentShader:_r.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=et.getTransfer(A.colorSpace)!==ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=A,h=A.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,S){_.getRGB(Ec,zS(t)),r.buffers.color.setClear(Ec.r,Ec.g,Ec.b,S,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),l=S,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:g,addToRenderList:p,dispose:y}}function fN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},i=h(null);let s=i,o=!1;function a(M,D,U,F,Y){let K=!1;const X=f(F,U,D);s!==X&&(s=X,c(s.object)),K=m(M,F,U,Y),K&&x(M,F,U,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(M,D,U,F),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,D,U){const F=U.wireframe===!0;let Y=r[M.id];Y===void 0&&(Y={},r[M.id]=Y);let K=Y[D.id];K===void 0&&(K={},Y[D.id]=K);let X=K[F];return X===void 0&&(X=h(l()),K[F]=X),X}function h(M){const D=[],U=[],F=[];for(let Y=0;Y<n;Y++)D[Y]=0,U[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:F,object:M,attributes:{},index:null}}function m(M,D,U,F){const Y=s.attributes,K=D.attributes;let X=0;const Z=U.getAttributes();for(const k in Z)if(Z[k].location>=0){const J=Y[k];let oe=K[k];if(oe===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),J===void 0||J.attribute!==oe||oe&&J.data!==oe.data)return!0;X++}return s.attributesNum!==X||s.index!==F}function x(M,D,U,F){const Y={},K=D.attributes;let X=0;const Z=U.getAttributes();for(const k in Z)if(Z[k].location>=0){let J=K[k];J===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const oe={};oe.attribute=J,J&&J.data&&(oe.data=J.data),Y[k]=oe,X++}s.attributes=Y,s.attributesNum=X,s.index=F}function g(){const M=s.newAttributes;for(let D=0,U=M.length;D<U;D++)M[D]=0}function p(M){d(M,0)}function d(M,D){const U=s.newAttributes,F=s.enabledAttributes,Y=s.attributeDivisors;U[M]=1,F[M]===0&&(t.enableVertexAttribArray(M),F[M]=1),Y[M]!==D&&(t.vertexAttribDivisor(M,D),Y[M]=D)}function y(){const M=s.newAttributes,D=s.enabledAttributes;for(let U=0,F=D.length;U<F;U++)D[U]!==M[U]&&(t.disableVertexAttribArray(U),D[U]=0)}function _(M,D,U,F,Y,K,X){X===!0?t.vertexAttribIPointer(M,D,U,Y,K):t.vertexAttribPointer(M,D,U,F,Y,K)}function S(M,D,U,F){g();const Y=F.attributes,K=U.getAttributes(),X=D.defaultAttributeValues;for(const Z in K){const k=K[Z];if(k.location>=0){let q=Y[Z];if(q===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){const J=q.normalized,oe=q.itemSize,Ee=e.get(q);if(Ee===void 0)continue;const Ze=Ee.buffer,$=Ee.type,ae=Ee.bytesPerElement,ge=$===t.INT||$===t.UNSIGNED_INT||q.gpuType===bm;if(q.isInterleavedBufferAttribute){const le=q.data,Pe=le.stride,tt=q.offset;if(le.isInstancedInterleavedBuffer){for(let De=0;De<k.locationSize;De++)d(k.location+De,le.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<k.locationSize;De++)p(k.location+De);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let De=0;De<k.locationSize;De++)_(k.location+De,oe/k.locationSize,$,J,Pe*ae,(tt+oe/k.locationSize*De)*ae,ge)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<k.locationSize;le++)d(k.location+le,q.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<k.locationSize;le++)p(k.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let le=0;le<k.locationSize;le++)_(k.location+le,oe/k.locationSize,$,J,oe*ae,oe/k.locationSize*le*ae,ge)}}else if(X!==void 0){const J=X[Z];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(k.location,J);break;case 3:t.vertexAttrib3fv(k.location,J);break;case 4:t.vertexAttrib4fv(k.location,J);break;default:t.vertexAttrib1fv(k.location,J)}}}}y()}function A(){P();for(const M in r){const D=r[M];for(const U in D){const F=D[U];for(const Y in F)u(F[Y].object),delete F[Y];delete D[U]}delete r[M]}}function C(M){if(r[M.id]===void 0)return;const D=r[M.id];for(const U in D){const F=D[U];for(const Y in F)u(F[Y].object),delete F[Y];delete D[U]}delete r[M.id]}function T(M){for(const D in r){const U=r[D];if(U[M.id]===void 0)continue;const F=U[M.id];for(const Y in F)u(F[Y].object),delete F[Y];delete U[M.id]}}function P(){w(),o=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function hN(t,e,n){let r;function i(c){r=c}function s(c,u){t.drawArrays(r,c,u),n.update(u,r,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(r,c,u,f),n.update(u,r,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=u[x];n.update(m,r,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],u[x],h[x]);else{m.multiDrawArraysInstancedWEBGL(r,c,0,u,0,h,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g]*h[g];n.update(x,r,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pN(t,e,n,r){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==ar&&r.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===bl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Qr&&r.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Hr&&!P)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:A,maxSamples:C}}function mN(t){const e=this;let n=null,r=0,i=!1,s=!1;const o=new ss,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||r!==0||i;return i=h,r=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,d=t.get(f);if(!i||x===null||x.length===0||s&&!p)s?u(null):c();else{const y=s?0:r,_=y*4;let S=d.clippingState||null;l.value=S,S=u(x,h,_,m);for(let A=0;A!==_;++A)S[A]=n[A];d.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,h,m,x){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,x!==!0||p===null){const d=m+g*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let _=0,S=m;_!==g;++_,S+=4)o.copy(f[_]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function gN(t){let e=new WeakMap;function n(o,a){return a===Th?o.mapping=ta:a===Ch&&(o.mapping=na),o}function r(o){if(o&&o.isTexture){const a=o.mapping;if(a===Th||a===Ch)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yR(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",i),n(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}const So=4,nv=[.125,.215,.35,.446,.526,.582],ls=20,df=new CR,rv=new at;let ff=null,hf=0,pf=0,mf=!1;const os=(1+Math.sqrt(5))/2,oo=1/os,iv=[new j(-os,oo,0),new j(os,oo,0),new j(-oo,0,os),new j(oo,0,os),new j(0,os,-oo),new j(0,os,oo),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],vN=new j;class sv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100,s={}){const{size:o=256,position:a=vN}=s;ff=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,i,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ff,hf,pf),this._renderer.xr.enabled=mf,e.scissorTest=!1,wc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ta||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ff=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Er,minFilter:Er,generateMipmaps:!1,type:bl,format:ar,colorSpace:ra,depthBuffer:!1},i=ov(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ov(e,n,r);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xN(s)),this._blurMaterial=yN(s,e,n)}return i}_compileMaterial(e){const n=new Gr(this._lodPlanes[0],e);this._renderer.compile(n,df)}_sceneToCubeUV(e,n,r,i,s){const l=new Vn(90,1,n,r),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(rv),f.toneMapping=zi,f.autoClear=!1;const x=new FS({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new Gr(new Pl,x);let p=!1;const d=e.background;d?d.isColor&&(x.color.copy(d),e.background=null,p=!0):(x.color.copy(rv),p=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const S=this._cubeSize;wc(i,_*S,y>2?S:0,S,S),f.setRenderTarget(i),p&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=m,f.autoClear=h,e.background=d}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===ta||e.mapping===na;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=av());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Gr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wc(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(o,df)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=iv[(i-s-1)%iv.length];this._blur(e,s-1,s,o,a)}n.autoClear=r}_blur(e,n,r,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,r,i,"latitudinal",s),this._halfBlur(o,e,r,r,i,"longitudinal",s)}_halfBlur(e,n,r,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Gr(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[r]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ls-1),g=s/x,p=isFinite(s)?1+Math.floor(u*g):ls;p>ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ls}`);const d=[];let y=0;for(let T=0;T<ls;++T){const P=T/g,w=Math.exp(-P*P/2);d.push(w),T===0?y+=w:T<p&&(y+=2*w)}for(let T=0;T<d.length;T++)d[T]=d[T]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=x,h.mipInt.value=_-r;const S=this._sizeLods[i],A=3*S*(i>_-So?i-_+So:0),C=4*(this._cubeSize-S);wc(n,A,C,3*S,2*S),l.setRenderTarget(n),l.render(f,df)}}function xN(t){const e=[],n=[],r=[];let i=t;const s=t-So+1+nv.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);n.push(a);let l=1/a;o>t-So?l=nv[o-t+So-1]:o===0&&(l=0),r.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,g=3,p=2,d=1,y=new Float32Array(g*x*m),_=new Float32Array(p*x*m),S=new Float32Array(d*x*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,P=C>2?0:-1,w=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(w,g*x*C),_.set(h,p*x*C);const M=[C,C,C,C,C,C];S.set(M,d*x*C)}const A=new ti;A.setAttribute("position",new Wn(y,g)),A.setAttribute("uv",new Wn(_,p)),A.setAttribute("faceIndex",new Wn(S,d)),e.push(A),i>So&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function ov(t,e,n){const r=new Is(t,e,n);return r.texture.mapping=Yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wc(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function yN(t,e,n){const r=new Float32Array(ls),i=new j(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dm(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function av(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dm(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function lv(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Dm(){return`

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
	`}function _N(t){let e=new WeakMap,n=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===Th||l===Ch,u=l===ta||l===na;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new sv(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&i(m)?(n===null&&(n=new sv(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function SN(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const i=n(r);return i===null&&Xc("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function MN(t,e,n,r){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete i[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER)}function c(f){const h=[],m=f.index,x=f.attributes.position;let g=0;if(m!==null){const y=m.array;g=m.version;for(let _=0,S=y.length;_<S;_+=3){const A=y[_+0],C=y[_+1],T=y[_+2];h.push(A,C,C,T,T,A)}}else if(x!==void 0){const y=x.array;g=x.version;for(let _=0,S=y.length/3-1;_<S;_+=3){const A=_+0,C=_+1,T=_+2;h.push(A,C,C,T,T,A)}}else return;const p=new(DS(h)?BS:OS)(h,1);p.version=g;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function EN(t,e,n){let r;function i(h){r=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(r,m,s,h*o),n.update(m,r,1)}function c(h,m,x){x!==0&&(t.drawElementsInstanced(r,m,s,h*o,x),n.update(m,r,x))}function u(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,s,h,0,x);let p=0;for(let d=0;d<x;d++)p+=m[d];n.update(p,r,1)}function f(h,m,x,g){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/o,m[d],g[d]);else{p.multiDrawElementsInstancedWEBGL(r,m,0,s,h,0,g,0,x);let d=0;for(let y=0;y<x;y++)d+=m[y]*g[y];n.update(d,r,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function bN(t,e,n){const r=new WeakMap,i=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=r.get(a);if(h===void 0||h.count!==f){let M=function(){P.dispose(),r.delete(a),a.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let A=a.attributes.position.count*S,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*C*4*f),P=new LS(T,A,C,f);P.type=Hr,P.needsUpdate=!0;const w=S*4;for(let D=0;D<f;D++){const U=d[D],F=y[D],Y=_[D],K=A*C*4*D;for(let X=0;X<U.count;X++){const Z=X*w;x===!0&&(i.fromBufferAttribute(U,X),T[K+Z+0]=i.x,T[K+Z+1]=i.y,T[K+Z+2]=i.z,T[K+Z+3]=0),g===!0&&(i.fromBufferAttribute(F,X),T[K+Z+4]=i.x,T[K+Z+5]=i.y,T[K+Z+6]=i.z,T[K+Z+7]=0),p===!0&&(i.fromBufferAttribute(Y,X),T[K+Z+8]=i.x,T[K+Z+9]=i.y,T[K+Z+10]=i.z,T[K+Z+11]=Y.itemSize===4?i.w:1)}}h={count:f,texture:P,size:new ut(A,C)},r.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let p=0;p<c.length;p++)x+=c[p];const g=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function TN(t,e,n,r){let i=new WeakMap;function s(l){const c=r.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const qS=new Sn,cv=new WS(1,1),$S=new LS,YS=new nR,KS=new VS,uv=[],dv=[],fv=new Float32Array(16),hv=new Float32Array(9),pv=new Float32Array(4);function da(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let s=uv[i];if(s===void 0&&(s=new Float32Array(i),uv[i]=s),e!==0){r.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function Zu(t,e){let n=dv[e];n===void 0&&(n=new Int32Array(e),dv[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function CN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function RN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function PN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function NN(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,r))return;pv.set(r),t.uniformMatrix2fv(this.addr,!1,pv),Bt(n,r)}}function DN(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,r))return;hv.set(r),t.uniformMatrix3fv(this.addr,!1,hv),Bt(n,r)}}function LN(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,r))return;fv.set(r),t.uniformMatrix4fv(this.addr,!1,fv),Bt(n,r)}}function IN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function UN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function kN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function FN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function ON(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function BN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function zN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function HN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function VN(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);let s;this.type===t.SAMPLER_2D_SHADOW?(cv.compareFunction=NS,s=cv):s=qS,n.setTexture2D(e||s,i)}function GN(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||YS,i)}function jN(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||KS,i)}function WN(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||$S,i)}function XN(t){switch(t){case 5126:return CN;case 35664:return AN;case 35665:return RN;case 35666:return PN;case 35674:return NN;case 35675:return DN;case 35676:return LN;case 5124:case 35670:return IN;case 35667:case 35671:return UN;case 35668:case 35672:return kN;case 35669:case 35673:return FN;case 5125:return ON;case 36294:return BN;case 36295:return zN;case 36296:return HN;case 35678:case 36198:case 36298:case 36306:case 35682:return VN;case 35679:case 36299:case 36307:return GN;case 35680:case 36300:case 36308:case 36293:return jN;case 36289:case 36303:case 36311:case 36292:return WN}}function qN(t,e){t.uniform1fv(this.addr,e)}function $N(t,e){const n=da(e,this.size,2);t.uniform2fv(this.addr,n)}function YN(t,e){const n=da(e,this.size,3);t.uniform3fv(this.addr,n)}function KN(t,e){const n=da(e,this.size,4);t.uniform4fv(this.addr,n)}function QN(t,e){const n=da(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ZN(t,e){const n=da(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function JN(t,e){const n=da(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eD(t,e){t.uniform1iv(this.addr,e)}function tD(t,e){t.uniform2iv(this.addr,e)}function nD(t,e){t.uniform3iv(this.addr,e)}function rD(t,e){t.uniform4iv(this.addr,e)}function iD(t,e){t.uniform1uiv(this.addr,e)}function sD(t,e){t.uniform2uiv(this.addr,e)}function oD(t,e){t.uniform3uiv(this.addr,e)}function aD(t,e){t.uniform4uiv(this.addr,e)}function lD(t,e,n){const r=this.cache,i=e.length,s=Zu(n,i);Ot(r,s)||(t.uniform1iv(this.addr,s),Bt(r,s));for(let o=0;o!==i;++o)n.setTexture2D(e[o]||qS,s[o])}function cD(t,e,n){const r=this.cache,i=e.length,s=Zu(n,i);Ot(r,s)||(t.uniform1iv(this.addr,s),Bt(r,s));for(let o=0;o!==i;++o)n.setTexture3D(e[o]||YS,s[o])}function uD(t,e,n){const r=this.cache,i=e.length,s=Zu(n,i);Ot(r,s)||(t.uniform1iv(this.addr,s),Bt(r,s));for(let o=0;o!==i;++o)n.setTextureCube(e[o]||KS,s[o])}function dD(t,e,n){const r=this.cache,i=e.length,s=Zu(n,i);Ot(r,s)||(t.uniform1iv(this.addr,s),Bt(r,s));for(let o=0;o!==i;++o)n.setTexture2DArray(e[o]||$S,s[o])}function fD(t){switch(t){case 5126:return qN;case 35664:return $N;case 35665:return YN;case 35666:return KN;case 35674:return QN;case 35675:return ZN;case 35676:return JN;case 5124:case 35670:return eD;case 35667:case 35671:return tD;case 35668:case 35672:return nD;case 35669:case 35673:return rD;case 5125:return iD;case 36294:return sD;case 36295:return oD;case 36296:return aD;case 35678:case 36198:case 36298:case 36306:case 35682:return lD;case 35679:case 36299:case 36307:return cD;case 35680:case 36300:case 36308:case 36293:return uD;case 36289:case 36303:case 36311:case 36292:return dD}}class hD{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=XN(n.type)}}class pD{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fD(n.type)}}class mD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,n[a.id],r)}}}const gf=/(\w+)(\])?(\[|\.)?/g;function mv(t,e){t.seq.push(e),t.map[e.id]=e}function gD(t,e,n){const r=t.name,i=r.length;for(gf.lastIndex=0;;){const s=gf.exec(r),o=gf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){mv(n,c===void 0?new hD(a,t,e):new pD(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new mD(a),mv(n,f)),n=f}}}class qc{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const s=e.getActiveUniform(n,i),o=e.getUniformLocation(n,s.name);gD(s,o,this)}}setValue(e,n,r,i){const s=this.map[n];s!==void 0&&s.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in n&&r.push(o)}return r}}function gv(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const vD=37297;let xD=0;function yD(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=i;o<s;o++){const a=o+1;r.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return r.join(`
`)}const vv=new Oe;function _D(t){et._getMatrix(vv,et.workingColorSpace,t);const e=`mat3( ${vv.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case Mu:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function xv(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+i+`

`+yD(t.getShaderSource(e),o)}else return i}function SD(t,e){const n=_D(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function MD(t,e){let n;switch(e){case CA:n="Linear";break;case AA:n="Reinhard";break;case RA:n="Cineon";break;case PA:n="ACESFilmic";break;case DA:n="AgX";break;case LA:n="Neutral";break;case NA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const bc=new j;function ED(){et.getLuminanceCoefficients(bc);const t=bc.x.toFixed(4),e=bc.y.toFixed(4),n=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function bD(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function TD(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const s=t.getActiveAttrib(e,i),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ka(t){return t!==""}function yv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _v(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CD=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(t){return t.replace(CD,RD)}const AD=new Map;function RD(t,e){let n=He[e];if(n===void 0){const r=AD.get(e);if(r!==void 0)n=He[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ip(n)}const PD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sv(t){return t.replace(PD,ND)}function ND(t,e,n,r){let i="";for(let s=parseInt(e);s<parseInt(n);s++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Mv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function DD(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===xS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===oA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Lr&&(e="SHADOWMAP_TYPE_VSM"),e}function LD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ta:case na:e="ENVMAP_TYPE_CUBE";break;case Yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ID(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case na:e="ENVMAP_MODE_REFRACTION";break}return e}function UD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case yS:e="ENVMAP_BLENDING_MULTIPLY";break;case bA:e="ENVMAP_BLENDING_MIX";break;case TA:e="ENVMAP_BLENDING_ADD";break}return e}function kD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function FD(t,e,n,r){const i=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=DD(n),c=LD(n),u=ID(n),f=UD(n),h=kD(n),m=wD(n),x=bD(s),g=i.createProgram();let p,d,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ka).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ka).join(`
`),d.length>0&&(d+=`
`)):(p=[Mv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),d=[Mv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zi?"#define TONE_MAPPING":"",n.toneMapping!==zi?He.tonemapping_pars_fragment:"",n.toneMapping!==zi?MD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,SD("linearToOutputTexel",n.outputColorSpace),ED(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ka).join(`
`)),o=ip(o),o=yv(o,n),o=_v(o,n),a=ip(a),a=yv(a,n),a=_v(a,n),o=Sv(o),a=Sv(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",n.glslVersion===U0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===U0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=y+p+o,S=y+d+a,A=gv(i,i.VERTEX_SHADER,_),C=gv(i,i.FRAGMENT_SHADER,S);i.attachShader(g,A),i.attachShader(g,C),n.index0AttributeName!==void 0?i.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(D){if(t.debug.checkShaderErrors){const U=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(A).trim(),Y=i.getShaderInfoLog(C).trim();let K=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,g,A,C);else{const Z=xv(i,A,"vertex"),k=xv(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+Z+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||Y==="")&&(X=!1);X&&(D.diagnostics={runnable:K,programLog:U,vertexShader:{log:F,prefix:p},fragmentShader:{log:Y,prefix:d}})}i.deleteShader(A),i.deleteShader(C),P=new qc(i,g),w=TD(i,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,vD)),M},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xD++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=C,this}let OD=0;class BD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),s=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new zD(e),n.set(e,r)),r}}class zD{constructor(e){this.id=OD++,this.code=e,this.usedTimes=0}}function HD(t,e,n,r,i,s,o){const a=new US,l=new BD,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,M,D,U,F){const Y=U.fog,K=F.geometry,X=w.isMeshStandardMaterial?U.environment:null,Z=(w.isMeshStandardMaterial?n:e).get(w.envMap||X),k=Z&&Z.mapping===Yu?Z.image.height:null,q=x[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const J=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,oe=J!==void 0?J.length:0;let Ee=0;K.morphAttributes.position!==void 0&&(Ee=1),K.morphAttributes.normal!==void 0&&(Ee=2),K.morphAttributes.color!==void 0&&(Ee=3);let Ze,$,ae,ge;if(q){const st=_r[q];Ze=st.vertexShader,$=st.fragmentShader}else Ze=w.vertexShader,$=w.fragmentShader,l.update(w),ae=l.getVertexShaderID(w),ge=l.getFragmentShaderID(w);const le=t.getRenderTarget(),Pe=t.state.buffers.depth.getReversed(),tt=F.isInstancedMesh===!0,De=F.isBatchedMesh===!0,At=!!w.map,_t=!!w.matcap,We=!!Z,I=!!w.aoMap,Ln=!!w.lightMap,$e=!!w.bumpMap,Xe=!!w.normalMap,Te=!!w.displacementMap,ht=!!w.emissiveMap,be=!!w.metalnessMap,R=!!w.roughnessMap,E=w.anisotropy>0,H=w.clearcoat>0,ee=w.dispersion>0,ne=w.iridescence>0,Q=w.sheen>0,we=w.transmission>0,de=E&&!!w.anisotropyMap,ye=H&&!!w.clearcoatMap,Ye=H&&!!w.clearcoatNormalMap,se=H&&!!w.clearcoatRoughnessMap,_e=ne&&!!w.iridescenceMap,Ne=ne&&!!w.iridescenceThicknessMap,Ie=Q&&!!w.sheenColorMap,Se=Q&&!!w.sheenRoughnessMap,qe=!!w.specularMap,Be=!!w.specularColorMap,dt=!!w.specularIntensityMap,O=we&&!!w.transmissionMap,fe=we&&!!w.thicknessMap,W=!!w.gradientMap,te=!!w.alphaMap,pe=w.alphaTest>0,he=!!w.alphaHash,ke=!!w.extensions;let wt=zi;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(wt=t.toneMapping);const $t={shaderID:q,shaderType:w.type,shaderName:w.name,vertexShader:Ze,fragmentShader:$,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:De,batchingColor:De&&F._colorsTexture!==null,instancing:tt,instancingColor:tt&&F.instanceColor!==null,instancingMorph:tt&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ra,alphaToCoverage:!!w.alphaToCoverage,map:At,matcap:_t,envMap:We,envMapMode:We&&Z.mapping,envMapCubeUVHeight:k,aoMap:I,lightMap:Ln,bumpMap:$e,normalMap:Xe,displacementMap:h&&Te,emissiveMap:ht,normalMapObjectSpace:Xe&&w.normalMapType===OA,normalMapTangentSpace:Xe&&w.normalMapType===FA,metalnessMap:be,roughnessMap:R,anisotropy:E,anisotropyMap:de,clearcoat:H,clearcoatMap:ye,clearcoatNormalMap:Ye,clearcoatRoughnessMap:se,dispersion:ee,iridescence:ne,iridescenceMap:_e,iridescenceThicknessMap:Ne,sheen:Q,sheenColorMap:Ie,sheenRoughnessMap:Se,specularMap:qe,specularColorMap:Be,specularIntensityMap:dt,transmission:we,transmissionMap:O,thicknessMap:fe,gradientMap:W,opaque:w.transparent===!1&&w.blending===Po&&w.alphaToCoverage===!1,alphaMap:te,alphaTest:pe,alphaHash:he,combine:w.combine,mapUv:At&&g(w.map.channel),aoMapUv:I&&g(w.aoMap.channel),lightMapUv:Ln&&g(w.lightMap.channel),bumpMapUv:$e&&g(w.bumpMap.channel),normalMapUv:Xe&&g(w.normalMap.channel),displacementMapUv:Te&&g(w.displacementMap.channel),emissiveMapUv:ht&&g(w.emissiveMap.channel),metalnessMapUv:be&&g(w.metalnessMap.channel),roughnessMapUv:R&&g(w.roughnessMap.channel),anisotropyMapUv:de&&g(w.anisotropyMap.channel),clearcoatMapUv:ye&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(w.sheenRoughnessMap.channel),specularMapUv:qe&&g(w.specularMap.channel),specularColorMapUv:Be&&g(w.specularColorMap.channel),specularIntensityMapUv:dt&&g(w.specularIntensityMap.channel),transmissionMapUv:O&&g(w.transmissionMap.channel),thicknessMapUv:fe&&g(w.thicknessMap.channel),alphaMapUv:te&&g(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Xe||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(At||te),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Pe,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:wt,decodeVideoTexture:At&&w.map.isVideoTexture===!0&&et.getTransfer(w.map.colorSpace)===ct,decodeVideoTextureEmissive:ht&&w.emissiveMap.isVideoTexture===!0&&et.getTransfer(w.emissiveMap.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Or,flipSided:w.side===_n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ke&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&w.extensions.multiDraw===!0||De)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function d(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)M.push(D),M.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(y(M,w),_(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function S(w){const M=x[w.type];let D;if(M){const U=_r[M];D=mR.clone(U.uniforms)}else D=w.uniforms;return D}function A(w,M){let D;for(let U=0,F=u.length;U<F;U++){const Y=u[U];if(Y.cacheKey===M){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new FD(t,M,w,s),u.push(D)),D}function C(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function T(w){l.remove(w)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:A,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:P}}function VD(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function r(o){t.delete(o)}function i(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:r,update:i,dispose:s}}function GD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ev(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function wv(){const t=[];let e=0;const n=[],r=[],i=[];function s(){e=0,n.length=0,r.length=0,i.length=0}function o(f,h,m,x,g,p){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=g,d.group=p),e++,d}function a(f,h,m,x,g,p){const d=o(f,h,m,x,g,p);m.transmission>0?r.push(d):m.transparent===!0?i.push(d):n.push(d)}function l(f,h,m,x,g,p){const d=o(f,h,m,x,g,p);m.transmission>0?r.unshift(d):m.transparent===!0?i.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||GD),r.length>1&&r.sort(h||Ev),i.length>1&&i.sort(h||Ev)}function u(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:r,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function jD(){let t=new WeakMap;function e(r,i){const s=t.get(r);let o;return s===void 0?(o=new wv,t.set(r,[o])):i>=s.length?(o=new wv,s.push(o)):o=s[i],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function WD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new at};break;case"SpotLight":n={position:new j,direction:new j,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function XD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let qD=0;function $D(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YD(t){const e=new WD,n=XD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new j);const i=new j,s=new Nt,o=new Nt;function a(c){let u=0,f=0,h=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let m=0,x=0,g=0,p=0,d=0,y=0,_=0,S=0,A=0,C=0,T=0;c.sort($D);for(let w=0,M=c.length;w<M;w++){const D=c[w],U=D.color,F=D.intensity,Y=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*F,f+=U.g*F,h+=U.b*F;else if(D.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(D.sh.coefficients[X],F);T++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,k=n.get(D);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,r.directionalShadow[m]=k,r.directionalShadowMap[m]=K,r.directionalShadowMatrix[m]=D.shadow.matrix,y++}r.directional[m]=X,m++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(U).multiplyScalar(F),X.distance=Y,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,r.spot[g]=X;const Z=D.shadow;if(D.map&&(r.spotLightMap[A]=D.map,A++,Z.updateMatrices(D),D.castShadow&&C++),r.spotLightMatrix[g]=Z.matrix,D.castShadow){const k=n.get(D);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,r.spotShadow[g]=k,r.spotShadowMap[g]=K,S++}g++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(U).multiplyScalar(F),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),r.rectArea[p]=X,p++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const Z=D.shadow,k=n.get(D);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,r.pointShadow[x]=k,r.pointShadowMap[x]=K,r.pointShadowMatrix[x]=D.shadow.matrix,_++}r.point[x]=X,x++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(F),X.groundColor.copy(D.groundColor).multiplyScalar(F),r.hemi[d]=X,d++}}p>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=h;const P=r.hash;(P.directionalLength!==m||P.pointLength!==x||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==d||P.numDirectionalShadows!==y||P.numPointShadows!==_||P.numSpotShadows!==S||P.numSpotMaps!==A||P.numLightProbes!==T)&&(r.directional.length=m,r.spot.length=g,r.rectArea.length=p,r.point.length=x,r.hemi.length=d,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=_,r.spotLightMatrix.length=S+A-C,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=T,P.directionalLength=m,P.pointLength=x,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=d,P.numDirectionalShadows=y,P.numPointShadows=_,P.numSpotShadows=S,P.numSpotMaps=A,P.numLightProbes=T,r.version=qD++)}function l(c,u){let f=0,h=0,m=0,x=0,g=0;const p=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const _=c[d];if(_.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(_.isSpotLight){const S=r.spot[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const S=r.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const S=r.point[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),h++}else if(_.isHemisphereLight){const S=r.hemi[g];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:r}}function bv(t){const e=new YD(t),n=[],r=[];function i(u){c.camera=u,n.length=0,r.length=0}function s(u){n.push(u)}function o(u){r.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function KD(t){let e=new WeakMap;function n(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new bv(t),e.set(i,[a])):s>=o.length?(a=new bv(t),o.push(a)):a=o[s],a}function r(){e=new WeakMap}return{get:n,dispose:r}}const QD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZD=`uniform sampler2D shadow_pass;
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
}`;function JD(t,e,n){let r=new GS;const i=new ut,s=new ut,o=new Pt,a=new bR({depthPacking:kA}),l=new TR,c={},u=n.maxTextureSize,f={[Gi]:_n,[_n]:Gi,[Or]:Or},h=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:QD,fragmentShader:ZD}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new ti;x.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Gr(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xS;let d=this.type;this.render=function(C,T,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Bi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=d!==Lr&&this.type===Lr,Y=d===Lr&&this.type!==Lr;for(let K=0,X=C.length;K<X;K++){const Z=C[K],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const q=k.getFrameExtents();if(i.multiply(q),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,k.mapSize.y=s.y)),k.map===null||F===!0||Y===!0){const oe=this.type!==Lr?{minFilter:ur,magFilter:ur}:{};k.map!==null&&k.map.dispose(),k.map=new Is(i.x,i.y,oe),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const J=k.getViewportCount();for(let oe=0;oe<J;oe++){const Ee=k.getViewport(oe);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),U.viewport(o),k.updateMatrices(Z,oe),r=k.getFrustum(),S(T,P,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===Lr&&y(k,P),k.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(w,M,D)};function y(C,T){const P=e.update(g);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Is(i.x,i.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,P,h,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,P,m,g,null)}function _(C,T,P,w){let M=null;const D=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)M=D;else if(M=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=M.uuid,F=T.uuid;let Y=c[U];Y===void 0&&(Y={},c[U]=Y);let K=Y[F];K===void 0&&(K=M.clone(),Y[F]=K,T.addEventListener("dispose",A)),M=K}if(M.visible=T.visible,M.wireframe=T.wireframe,w===Lr?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=t.properties.get(M);U.light=P}return M}function S(C,T,P,w,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Lr)&&(!C.frustumCulled||r.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const F=e.update(C),Y=C.material;if(Array.isArray(Y)){const K=F.groups;for(let X=0,Z=K.length;X<Z;X++){const k=K[X],q=Y[k.materialIndex];if(q&&q.visible){const J=_(C,q,w,M);C.onBeforeShadow(t,C,T,P,F,J,k),t.renderBufferDirect(P,null,F,J,C,k),C.onAfterShadow(t,C,T,P,F,J,k)}}}else if(Y.visible){const K=_(C,Y,w,M);C.onBeforeShadow(t,C,T,P,F,K,null),t.renderBufferDirect(P,null,F,K,C,null),C.onAfterShadow(t,C,T,P,F,K,null)}}const U=C.children;for(let F=0,Y=U.length;F<Y;F++)S(U[F],T,P,w,M)}function A(C){C.target.removeEventListener("dispose",A);for(const P in c){const w=c[P],M=C.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const e3={[yh]:_h,[Sh]:wh,[Mh]:bh,[ea]:Eh,[_h]:yh,[wh]:Sh,[bh]:Mh,[Eh]:ea};function t3(t,e){function n(){let O=!1;const fe=new Pt;let W=null;const te=new Pt(0,0,0,0);return{setMask:function(pe){W!==pe&&!O&&(t.colorMask(pe,pe,pe,pe),W=pe)},setLocked:function(pe){O=pe},setClear:function(pe,he,ke,wt,$t){$t===!0&&(pe*=wt,he*=wt,ke*=wt),fe.set(pe,he,ke,wt),te.equals(fe)===!1&&(t.clearColor(pe,he,ke,wt),te.copy(fe))},reset:function(){O=!1,W=null,te.set(-1,0,0,0)}}}function r(){let O=!1,fe=!1,W=null,te=null,pe=null;return{setReversed:function(he){if(fe!==he){const ke=e.get("EXT_clip_control");he?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),fe=he;const wt=pe;pe=null,this.setClear(wt)}},getReversed:function(){return fe},setTest:function(he){he?le(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(he){W!==he&&!O&&(t.depthMask(he),W=he)},setFunc:function(he){if(fe&&(he=e3[he]),te!==he){switch(he){case yh:t.depthFunc(t.NEVER);break;case _h:t.depthFunc(t.ALWAYS);break;case Sh:t.depthFunc(t.LESS);break;case ea:t.depthFunc(t.LEQUAL);break;case Mh:t.depthFunc(t.EQUAL);break;case Eh:t.depthFunc(t.GEQUAL);break;case wh:t.depthFunc(t.GREATER);break;case bh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=he}},setLocked:function(he){O=he},setClear:function(he){pe!==he&&(fe&&(he=1-he),t.clearDepth(he),pe=he)},reset:function(){O=!1,W=null,te=null,pe=null,fe=!1}}}function i(){let O=!1,fe=null,W=null,te=null,pe=null,he=null,ke=null,wt=null,$t=null;return{setTest:function(st){O||(st?le(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(st){fe!==st&&!O&&(t.stencilMask(st),fe=st)},setFunc:function(st,$n,Tr){(W!==st||te!==$n||pe!==Tr)&&(t.stencilFunc(st,$n,Tr),W=st,te=$n,pe=Tr)},setOp:function(st,$n,Tr){(he!==st||ke!==$n||wt!==Tr)&&(t.stencilOp(st,$n,Tr),he=st,ke=$n,wt=Tr)},setLocked:function(st){O=st},setClear:function(st){$t!==st&&(t.clearStencil(st),$t=st)},reset:function(){O=!1,fe=null,W=null,te=null,pe=null,he=null,ke=null,wt=null,$t=null}}}const s=new n,o=new r,a=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,m=[],x=null,g=!1,p=null,d=null,y=null,_=null,S=null,A=null,C=null,T=new at(0,0,0),P=0,w=!1,M=null,D=null,U=null,F=null,Y=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=Z>=2);let q=null,J={};const oe=t.getParameter(t.SCISSOR_BOX),Ee=t.getParameter(t.VIEWPORT),Ze=new Pt().fromArray(oe),$=new Pt().fromArray(Ee);function ae(O,fe,W,te){const pe=new Uint8Array(4),he=t.createTexture();t.bindTexture(O,he),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ke=0;ke<W;ke++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(fe+ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return he}const ge={};ge[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(ea),$e(!1),Xe(R0),le(t.CULL_FACE),I(Bi);function le(O){u[O]!==!0&&(t.enable(O),u[O]=!0)}function Pe(O){u[O]!==!1&&(t.disable(O),u[O]=!1)}function tt(O,fe){return f[O]!==fe?(t.bindFramebuffer(O,fe),f[O]=fe,O===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=fe),O===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function De(O,fe){let W=m,te=!1;if(O){W=h.get(fe),W===void 0&&(W=[],h.set(fe,W));const pe=O.textures;if(W.length!==pe.length||W[0]!==t.COLOR_ATTACHMENT0){for(let he=0,ke=pe.length;he<ke;he++)W[he]=t.COLOR_ATTACHMENT0+he;W.length=pe.length,te=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,te=!0);te&&t.drawBuffers(W)}function At(O){return x!==O?(t.useProgram(O),x=O,!0):!1}const _t={[as]:t.FUNC_ADD,[lA]:t.FUNC_SUBTRACT,[cA]:t.FUNC_REVERSE_SUBTRACT};_t[uA]=t.MIN,_t[dA]=t.MAX;const We={[fA]:t.ZERO,[hA]:t.ONE,[pA]:t.SRC_COLOR,[vh]:t.SRC_ALPHA,[_A]:t.SRC_ALPHA_SATURATE,[xA]:t.DST_COLOR,[gA]:t.DST_ALPHA,[mA]:t.ONE_MINUS_SRC_COLOR,[xh]:t.ONE_MINUS_SRC_ALPHA,[yA]:t.ONE_MINUS_DST_COLOR,[vA]:t.ONE_MINUS_DST_ALPHA,[SA]:t.CONSTANT_COLOR,[MA]:t.ONE_MINUS_CONSTANT_COLOR,[EA]:t.CONSTANT_ALPHA,[wA]:t.ONE_MINUS_CONSTANT_ALPHA};function I(O,fe,W,te,pe,he,ke,wt,$t,st){if(O===Bi){g===!0&&(Pe(t.BLEND),g=!1);return}if(g===!1&&(le(t.BLEND),g=!0),O!==aA){if(O!==p||st!==w){if((d!==as||S!==as)&&(t.blendEquation(t.FUNC_ADD),d=as,S=as),st)switch(O){case Po:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case P0:t.blendFunc(t.ONE,t.ONE);break;case N0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case D0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Po:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case P0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case N0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case D0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,_=null,A=null,C=null,T.set(0,0,0),P=0,p=O,w=st}return}pe=pe||fe,he=he||W,ke=ke||te,(fe!==d||pe!==S)&&(t.blendEquationSeparate(_t[fe],_t[pe]),d=fe,S=pe),(W!==y||te!==_||he!==A||ke!==C)&&(t.blendFuncSeparate(We[W],We[te],We[he],We[ke]),y=W,_=te,A=he,C=ke),(wt.equals(T)===!1||$t!==P)&&(t.blendColor(wt.r,wt.g,wt.b,$t),T.copy(wt),P=$t),p=O,w=!1}function Ln(O,fe){O.side===Or?Pe(t.CULL_FACE):le(t.CULL_FACE);let W=O.side===_n;fe&&(W=!W),$e(W),O.blending===Po&&O.transparent===!1?I(Bi):I(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const te=O.stencilWrite;a.setTest(te),te&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ht(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(O){M!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),M=O)}function Xe(O){O!==iA?(le(t.CULL_FACE),O!==D&&(O===R0?t.cullFace(t.BACK):O===sA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),D=O}function Te(O){O!==U&&(X&&t.lineWidth(O),U=O)}function ht(O,fe,W){O?(le(t.POLYGON_OFFSET_FILL),(F!==fe||Y!==W)&&(t.polygonOffset(fe,W),F=fe,Y=W)):Pe(t.POLYGON_OFFSET_FILL)}function be(O){O?le(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function R(O){O===void 0&&(O=t.TEXTURE0+K-1),q!==O&&(t.activeTexture(O),q=O)}function E(O,fe,W){W===void 0&&(q===null?W=t.TEXTURE0+K-1:W=q);let te=J[W];te===void 0&&(te={type:void 0,texture:void 0},J[W]=te),(te.type!==O||te.texture!==fe)&&(q!==W&&(t.activeTexture(W),q=W),t.bindTexture(O,fe||ge[O]),te.type=O,te.texture=fe)}function H(){const O=J[q];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ee(){try{t.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{t.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{t.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{t.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{t.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{t.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ye(){try{t.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{t.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{t.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{t.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(O){Ze.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Ze.copy(O))}function Se(O){$.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function qe(O,fe){let W=c.get(fe);W===void 0&&(W=new WeakMap,c.set(fe,W));let te=W.get(O);te===void 0&&(te=t.getUniformBlockIndex(fe,O.name),W.set(O,te))}function Be(O,fe){const te=c.get(fe).get(O);l.get(fe)!==te&&(t.uniformBlockBinding(fe,te,O.__bindingPointIndex),l.set(fe,te))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},q=null,J={},f={},h=new WeakMap,m=[],x=null,g=!1,p=null,d=null,y=null,_=null,S=null,A=null,C=null,T=new at(0,0,0),P=0,w=!1,M=null,D=null,U=null,F=null,Y=null,Ze.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Pe,bindFramebuffer:tt,drawBuffers:De,useProgram:At,setBlending:I,setMaterial:Ln,setFlipSided:$e,setCullFace:Xe,setLineWidth:Te,setPolygonOffset:ht,setScissorTest:be,activeTexture:R,bindTexture:E,unbindTexture:H,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:_e,texImage3D:Ne,updateUBOMapping:qe,uniformBlockBinding:Be,texStorage2D:Ye,texStorage3D:se,texSubImage2D:Q,texSubImage3D:we,compressedTexSubImage2D:de,compressedTexSubImage3D:ye,scissor:Ie,viewport:Se,reset:dt}}function n3(t,e,n,r,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,E){return m?new OffscreenCanvas(R,E):wu("canvas")}function g(R,E,H){let ee=1;const ne=be(R);if((ne.width>H||ne.height>H)&&(ee=H/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(ee*ne.width),we=Math.floor(ee*ne.height);f===void 0&&(f=x(Q,we));const de=E?x(Q,we):f;return de.width=Q,de.height=we,de.getContext("2d").drawImage(R,0,0,Q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Q+"x"+we+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function p(R){return R.generateMipmaps}function d(R){t.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,E,H,ee,ne=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=E;if(E===t.RED&&(H===t.FLOAT&&(Q=t.R32F),H===t.HALF_FLOAT&&(Q=t.R16F),H===t.UNSIGNED_BYTE&&(Q=t.R8)),E===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.R8UI),H===t.UNSIGNED_SHORT&&(Q=t.R16UI),H===t.UNSIGNED_INT&&(Q=t.R32UI),H===t.BYTE&&(Q=t.R8I),H===t.SHORT&&(Q=t.R16I),H===t.INT&&(Q=t.R32I)),E===t.RG&&(H===t.FLOAT&&(Q=t.RG32F),H===t.HALF_FLOAT&&(Q=t.RG16F),H===t.UNSIGNED_BYTE&&(Q=t.RG8)),E===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RG8UI),H===t.UNSIGNED_SHORT&&(Q=t.RG16UI),H===t.UNSIGNED_INT&&(Q=t.RG32UI),H===t.BYTE&&(Q=t.RG8I),H===t.SHORT&&(Q=t.RG16I),H===t.INT&&(Q=t.RG32I)),E===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),H===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),H===t.UNSIGNED_INT&&(Q=t.RGB32UI),H===t.BYTE&&(Q=t.RGB8I),H===t.SHORT&&(Q=t.RGB16I),H===t.INT&&(Q=t.RGB32I)),E===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),H===t.UNSIGNED_INT&&(Q=t.RGBA32UI),H===t.BYTE&&(Q=t.RGBA8I),H===t.SHORT&&(Q=t.RGBA16I),H===t.INT&&(Q=t.RGBA32I)),E===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),E===t.RGBA){const we=ne?Mu:et.getTransfer(ee);H===t.FLOAT&&(Q=t.RGBA32F),H===t.HALF_FLOAT&&(Q=t.RGBA16F),H===t.UNSIGNED_BYTE&&(Q=we===ct?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(R,E){let H;return R?E===null||E===Ls||E===fl?H=t.DEPTH24_STENCIL8:E===Hr?H=t.DEPTH32F_STENCIL8:E===dl&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ls||E===fl?H=t.DEPTH_COMPONENT24:E===Hr?H=t.DEPTH_COMPONENT32F:E===dl&&(H=t.DEPTH_COMPONENT16),H}function A(R,E){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==ur&&R.minFilter!==Er?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){const E=R.target;E.removeEventListener("dispose",C),P(E),E.isVideoTexture&&u.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),M(E)}function P(R){const E=r.get(R);if(E.__webglInit===void 0)return;const H=R.source,ee=h.get(H);if(ee){const ne=ee[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(R),Object.keys(ee).length===0&&h.delete(H)}r.remove(R)}function w(R){const E=r.get(R);t.deleteTexture(E.__webglTexture);const H=R.source,ee=h.get(H);delete ee[E.__cacheKey],o.memory.textures--}function M(R){const E=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ne=0;ne<E.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=R.textures;for(let ee=0,ne=H.length;ee<ne;ee++){const Q=r.get(H[ee]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),r.remove(H[ee])}r.remove(R)}let D=0;function U(){D=0}function F(){const R=D;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function Y(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function K(R,E){const H=r.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,R,E);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+E)}function X(R,E){const H=r.get(R);if(R.version>0&&H.__version!==R.version){$(H,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+E)}function Z(R,E){const H=r.get(R);if(R.version>0&&H.__version!==R.version){$(H,R,E);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+E)}function k(R,E){const H=r.get(R);if(R.version>0&&H.__version!==R.version){ae(H,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+E)}const q={[Ah]:t.REPEAT,[fs]:t.CLAMP_TO_EDGE,[Rh]:t.MIRRORED_REPEAT},J={[ur]:t.NEAREST,[IA]:t.NEAREST_MIPMAP_NEAREST,[nc]:t.NEAREST_MIPMAP_LINEAR,[Er]:t.LINEAR,[zd]:t.LINEAR_MIPMAP_NEAREST,[hs]:t.LINEAR_MIPMAP_LINEAR},oe={[BA]:t.NEVER,[WA]:t.ALWAYS,[zA]:t.LESS,[NS]:t.LEQUAL,[HA]:t.EQUAL,[jA]:t.GEQUAL,[VA]:t.GREATER,[GA]:t.NOTEQUAL};function Ee(R,E){if(E.type===Hr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Er||E.magFilter===zd||E.magFilter===nc||E.magFilter===hs||E.minFilter===Er||E.minFilter===zd||E.minFilter===nc||E.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,q[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,q[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,q[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,J[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,J[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ur||E.minFilter!==nc&&E.minFilter!==hs||E.type===Hr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ze(R,E){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const ee=E.source;let ne=h.get(ee);ne===void 0&&(ne={},h.set(ee,ne));const Q=Y(E);if(Q!==R.__cacheKey){ne[Q]===void 0&&(ne[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[Q].usedTimes++;const we=ne[R.__cacheKey];we!==void 0&&(ne[R.__cacheKey].usedTimes--,we.usedTimes===0&&w(E)),R.__cacheKey=Q,R.__webglTexture=ne[Q].texture}return H}function $(R,E,H){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const ne=Ze(R,E),Q=E.source;n.bindTexture(ee,R.__webglTexture,t.TEXTURE0+H);const we=r.get(Q);if(Q.version!==we.__version||ne===!0){n.activeTexture(t.TEXTURE0+H);const de=et.getPrimaries(et.workingColorSpace),ye=E.colorSpace===xi?null:et.getPrimaries(E.colorSpace),Ye=E.colorSpace===xi||de===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let se=g(E.image,!1,i.maxTextureSize);se=ht(E,se);const _e=s.convert(E.format,E.colorSpace),Ne=s.convert(E.type);let Ie=_(E.internalFormat,_e,Ne,E.colorSpace,E.isVideoTexture);Ee(ee,E);let Se;const qe=E.mipmaps,Be=E.isVideoTexture!==!0,dt=we.__version===void 0||ne===!0,O=Q.dataReady,fe=A(E,se);if(E.isDepthTexture)Ie=S(E.format===pl,E.type),dt&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Ie,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ie,se.width,se.height,0,_e,Ne,null));else if(E.isDataTexture)if(qe.length>0){Be&&dt&&n.texStorage2D(t.TEXTURE_2D,fe,Ie,qe[0].width,qe[0].height);for(let W=0,te=qe.length;W<te;W++)Se=qe[W],Be?O&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Se.width,Se.height,_e,Ne,Se.data):n.texImage2D(t.TEXTURE_2D,W,Ie,Se.width,Se.height,0,_e,Ne,Se.data);E.generateMipmaps=!1}else Be?(dt&&n.texStorage2D(t.TEXTURE_2D,fe,Ie,se.width,se.height),O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,_e,Ne,se.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,se.width,se.height,0,_e,Ne,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ie,qe[0].width,qe[0].height,se.depth);for(let W=0,te=qe.length;W<te;W++)if(Se=qe[W],E.format!==ar)if(_e!==null)if(Be){if(O)if(E.layerUpdates.size>0){const pe=tv(Se.width,Se.height,E.format,E.type);for(const he of E.layerUpdates){const ke=Se.data.subarray(he*pe/Se.data.BYTES_PER_ELEMENT,(he+1)*pe/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,he,Se.width,Se.height,1,_e,ke)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,Se.width,Se.height,se.depth,_e,Se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,Ie,Se.width,Se.height,se.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,Se.width,Se.height,se.depth,_e,Ne,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,Ie,Se.width,Se.height,se.depth,0,_e,Ne,Se.data)}else{Be&&dt&&n.texStorage2D(t.TEXTURE_2D,fe,Ie,qe[0].width,qe[0].height);for(let W=0,te=qe.length;W<te;W++)Se=qe[W],E.format!==ar?_e!==null?Be?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,Se.width,Se.height,_e,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,W,Ie,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?O&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Se.width,Se.height,_e,Ne,Se.data):n.texImage2D(t.TEXTURE_2D,W,Ie,Se.width,Se.height,0,_e,Ne,Se.data)}else if(E.isDataArrayTexture)if(Be){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ie,se.width,se.height,se.depth),O)if(E.layerUpdates.size>0){const W=tv(se.width,se.height,E.format,E.type);for(const te of E.layerUpdates){const pe=se.data.subarray(te*W/se.data.BYTES_PER_ELEMENT,(te+1)*W/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,_e,Ne,pe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Ne,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,se.width,se.height,se.depth,0,_e,Ne,se.data);else if(E.isData3DTexture)Be?(dt&&n.texStorage3D(t.TEXTURE_3D,fe,Ie,se.width,se.height,se.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Ne,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,se.width,se.height,se.depth,0,_e,Ne,se.data);else if(E.isFramebufferTexture){if(dt)if(Be)n.texStorage2D(t.TEXTURE_2D,fe,Ie,se.width,se.height);else{let W=se.width,te=se.height;for(let pe=0;pe<fe;pe++)n.texImage2D(t.TEXTURE_2D,pe,Ie,W,te,0,_e,Ne,null),W>>=1,te>>=1}}else if(qe.length>0){if(Be&&dt){const W=be(qe[0]);n.texStorage2D(t.TEXTURE_2D,fe,Ie,W.width,W.height)}for(let W=0,te=qe.length;W<te;W++)Se=qe[W],Be?O&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,_e,Ne,Se):n.texImage2D(t.TEXTURE_2D,W,Ie,_e,Ne,Se);E.generateMipmaps=!1}else if(Be){if(dt){const W=be(se);n.texStorage2D(t.TEXTURE_2D,fe,Ie,W.width,W.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Ne,se)}else n.texImage2D(t.TEXTURE_2D,0,Ie,_e,Ne,se);p(E)&&d(ee),we.__version=Q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ae(R,E,H){if(E.image.length!==6)return;const ee=Ze(R,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const Q=r.get(ne);if(ne.version!==Q.__version||ee===!0){n.activeTexture(t.TEXTURE0+H);const we=et.getPrimaries(et.workingColorSpace),de=E.colorSpace===xi?null:et.getPrimaries(E.colorSpace),ye=E.colorSpace===xi||we===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ye=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!Ye&&!se?_e[te]=g(E.image[te],!0,i.maxCubemapSize):_e[te]=se?E.image[te].image:E.image[te],_e[te]=ht(E,_e[te]);const Ne=_e[0],Ie=s.convert(E.format,E.colorSpace),Se=s.convert(E.type),qe=_(E.internalFormat,Ie,Se,E.colorSpace),Be=E.isVideoTexture!==!0,dt=Q.__version===void 0||ee===!0,O=ne.dataReady;let fe=A(E,Ne);Ee(t.TEXTURE_CUBE_MAP,E);let W;if(Ye){Be&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,qe,Ne.width,Ne.height);for(let te=0;te<6;te++){W=_e[te].mipmaps;for(let pe=0;pe<W.length;pe++){const he=W[pe];E.format!==ar?Ie!==null?Be?O&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,he.width,he.height,Ie,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,qe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,he.width,he.height,Ie,Se,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,qe,he.width,he.height,0,Ie,Se,he.data)}}}else{if(W=E.mipmaps,Be&&dt){W.length>0&&fe++;const te=be(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,qe,te.width,te.height)}for(let te=0;te<6;te++)if(se){Be?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,Ie,Se,_e[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,_e[te].width,_e[te].height,0,Ie,Se,_e[te].data);for(let pe=0;pe<W.length;pe++){const ke=W[pe].image[te].image;Be?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,ke.width,ke.height,Ie,Se,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,qe,ke.width,ke.height,0,Ie,Se,ke.data)}}else{Be?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ie,Se,_e[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,Ie,Se,_e[te]);for(let pe=0;pe<W.length;pe++){const he=W[pe];Be?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Ie,Se,he.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,qe,Ie,Se,he.image[te])}}}p(E)&&d(t.TEXTURE_CUBE_MAP),Q.__version=ne.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ge(R,E,H,ee,ne,Q){const we=s.convert(H.format,H.colorSpace),de=s.convert(H.type),ye=_(H.internalFormat,we,de,H.colorSpace),Ye=r.get(E),se=r.get(H);if(se.__renderTarget=E,!Ye.__hasExternalTextures){const _e=Math.max(1,E.width>>Q),Ne=Math.max(1,E.height>>Q);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Q,ye,_e,Ne,E.depth,0,we,de,null):n.texImage2D(ne,Q,ye,_e,Ne,0,we,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Xe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ne,se.__webglTexture,0,$e(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ne,se.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(R,E,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const ee=E.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,Q=S(E.stencilBuffer,ne),we=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=$e(E);Xe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,Q,E.width,E.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,Q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Q,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,R)}else{const ee=E.textures;for(let ne=0;ne<ee.length;ne++){const Q=ee[ne],we=s.convert(Q.format,Q.colorSpace),de=s.convert(Q.type),ye=_(Q.internalFormat,we,de,Q.colorSpace),Ye=$e(E);H&&Xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,ye,E.width,E.height):Xe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,ye,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ye,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=r.get(E.depthTexture);ee.__renderTarget=E,(!ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const ne=ee.__webglTexture,Q=$e(E);if(E.depthTexture.format===hl)Xe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(E.depthTexture.format===pl)Xe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function tt(R){const E=r.get(R),H=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=ee}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Pe(E.__webglFramebuffer,R)}else if(H){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=t.createRenderbuffer(),le(E.__webglDepthbuffer[ee],R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),le(E.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(R,E,H){const ee=r.get(R);E!==void 0&&ge(ee.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&tt(R)}function At(R){const E=R.texture,H=r.get(R),ee=r.get(E);R.addEventListener("dispose",T);const ne=R.textures,Q=R.isWebGLCubeRenderTarget===!0,we=ne.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,o.memory.textures++),Q){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let ye=0;ye<E.mipmaps.length;ye++)H.__webglFramebuffer[de][ye]=t.createFramebuffer()}else H.__webglFramebuffer[de]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)H.__webglFramebuffer[de]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(we)for(let de=0,ye=ne.length;de<ye;de++){const Ye=r.get(ne[de]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Xe(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const ye=ne[de];H.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[de]);const Ye=s.convert(ye.format,ye.colorSpace),se=s.convert(ye.type),_e=_(ye.internalFormat,Ye,se,ye.colorSpace,R.isXRRenderTarget===!0),Ne=$e(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,_e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,H.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),le(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)ge(H.__webglFramebuffer[de][ye],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye);else ge(H.__webglFramebuffer[de],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let de=0,ye=ne.length;de<ye;de++){const Ye=ne[de],se=r.get(Ye);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),Ee(t.TEXTURE_2D,Ye),ge(H.__webglFramebuffer,R,Ye,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),p(Ye)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,ee.__webglTexture),Ee(de,E),E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)ge(H.__webglFramebuffer[ye],R,E,t.COLOR_ATTACHMENT0,de,ye);else ge(H.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,de,0);p(E)&&d(de),n.unbindTexture()}R.depthBuffer&&tt(R)}function _t(R){const E=R.textures;for(let H=0,ee=E.length;H<ee;H++){const ne=E[H];if(p(ne)){const Q=y(R),we=r.get(ne).__webglTexture;n.bindTexture(Q,we),d(Q),n.unbindTexture()}}}const We=[],I=[];function Ln(R){if(R.samples>0){if(Xe(R)===!1){const E=R.textures,H=R.width,ee=R.height;let ne=t.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=r.get(R),de=E.length>1;if(de)for(let ye=0;ye<E.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ye=0;ye<E.length;ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[ye]);const Ye=r.get(E[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ye,0)}t.blitFramebuffer(0,0,H,ee,0,0,H,ee,ne,t.NEAREST),l===!0&&(We.length=0,I.length=0,We.push(t.COLOR_ATTACHMENT0+ye),R.depthBuffer&&R.resolveDepthBuffer===!1&&(We.push(Q),I.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ye=0;ye<E.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,we.__webglColorRenderbuffer[ye]);const Ye=r.get(E[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function $e(R){return Math.min(i.maxSamples,R.samples)}function Xe(R){const E=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function ht(R,E){const H=R.colorSpace,ee=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==ra&&H!==xi&&(et.getTransfer(H)===ct?(ee!==ar||ne!==Qr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=De,this.setupRenderTarget=At,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Xe}function r3(t,e){function n(r,i=xi){let s;const o=et.getTransfer(i);if(r===Qr)return t.UNSIGNED_BYTE;if(r===Tm)return t.UNSIGNED_SHORT_4_4_4_4;if(r===Cm)return t.UNSIGNED_SHORT_5_5_5_1;if(r===ES)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===SS)return t.BYTE;if(r===MS)return t.SHORT;if(r===dl)return t.UNSIGNED_SHORT;if(r===bm)return t.INT;if(r===Ls)return t.UNSIGNED_INT;if(r===Hr)return t.FLOAT;if(r===bl)return t.HALF_FLOAT;if(r===wS)return t.ALPHA;if(r===bS)return t.RGB;if(r===ar)return t.RGBA;if(r===TS)return t.LUMINANCE;if(r===CS)return t.LUMINANCE_ALPHA;if(r===hl)return t.DEPTH_COMPONENT;if(r===pl)return t.DEPTH_STENCIL;if(r===AS)return t.RED;if(r===Am)return t.RED_INTEGER;if(r===RS)return t.RG;if(r===Rm)return t.RG_INTEGER;if(r===Pm)return t.RGBA_INTEGER;if(r===Hc||r===Vc||r===Gc||r===jc)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Hc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Hc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ph||r===Nh||r===Dh||r===Lh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Lh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ih||r===Uh||r===kh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Ih||r===Uh)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===kh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fh||r===Oh||r===Bh||r===zh||r===Hh||r===Vh||r===Gh||r===jh||r===Wh||r===Xh||r===qh||r===$h||r===Yh||r===Kh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Fh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Oh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$h)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wc||r===Qh||r===Zh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Wc)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===PS||r===Jh||r===ep||r===tp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===Wc)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Jh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ep)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fl?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}const i3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s3=`
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

}`;class o3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const i=new Sn,s=e.properties.get(i);s.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new ji({vertexShader:i3,fragmentShader:s3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gr(new Qu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a3 extends ua{constructor(e,n){super();const r=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,x=null;const g=new o3,p=n.getContextAttributes();let d=null,y=null;const _=[],S=[],A=new ut;let C=null;const T=new Vn;T.viewport=new Pt;const P=new Vn;P.viewport=new Pt;const w=[T,P],M=new AR;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=_[$];return ae===void 0&&(ae=new cf,_[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=_[$];return ae===void 0&&(ae=new cf,_[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=_[$];return ae===void 0&&(ae=new cf,_[$]=ae),ae.getHandSpace()};function F($){const ae=S.indexOf($.inputSource);if(ae===-1)return;const ge=_[ae];ge!==void 0&&(ge.update($.inputSource,$.frame,c||o),ge.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",K);for(let $=0;$<_.length;$++){const ae=S[$];ae!==null&&(S[$]=null,_[$].disconnect(ae))}D=null,U=null,g.reset(),e.setRenderTarget(d),m=null,h=null,f=null,i=null,y=null,Ze.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,le=null,Pe=null;p.depth&&(Pe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=p.stencil?pl:hl,le=p.stencil?fl:Ls);const tt={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:s};f=new XRWebGLBinding(i,n),h=f.createProjectionLayer(tt),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Is(h.textureWidth,h.textureHeight,{format:ar,type:Qr,depthTexture:new WS(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ge={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,n,ge),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Is(m.framebufferWidth,m.framebufferHeight,{format:ar,type:Qr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ze.setContext(i),Ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K($){for(let ae=0;ae<$.removed.length;ae++){const ge=$.removed[ae],le=S.indexOf(ge);le>=0&&(S[le]=null,_[le].disconnect(ge))}for(let ae=0;ae<$.added.length;ae++){const ge=$.added[ae];let le=S.indexOf(ge);if(le===-1){for(let tt=0;tt<_.length;tt++)if(tt>=S.length){S.push(ge),le=tt;break}else if(S[tt]===null){S[tt]=ge,le=tt;break}if(le===-1)break}const Pe=_[le];Pe&&Pe.connect(ge)}}const X=new j,Z=new j;function k($,ae,ge){X.setFromMatrixPosition(ae.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const le=X.distanceTo(Z),Pe=ae.projectionMatrix.elements,tt=ge.projectionMatrix.elements,De=Pe[14]/(Pe[10]-1),At=Pe[14]/(Pe[10]+1),_t=(Pe[9]+1)/Pe[5],We=(Pe[9]-1)/Pe[5],I=(Pe[8]-1)/Pe[0],Ln=(tt[8]+1)/tt[0],$e=De*I,Xe=De*Ln,Te=le/(-I+Ln),ht=Te*-I;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ht),$.translateZ(Te),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pe[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const be=De+Te,R=At+Te,E=$e-ht,H=Xe+(le-ht),ee=_t*At/R*be,ne=We*At/R*be;$.projectionMatrix.makePerspective(E,H,ee,ne,be,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function q($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ae=$.near,ge=$.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),M.near=P.near=T.near=ae,M.far=P.far=T.far=ge,(D!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,U=M.far),T.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,M.layers.mask=T.layers.mask|P.layers.mask;const le=$.parent,Pe=M.cameras;q(M,le);for(let tt=0;tt<Pe.length;tt++)q(Pe[tt],le);Pe.length===2?k(M,T,P):M.projectionMatrix.copy(T.projectionMatrix),J($,M,le)};function J($,ae,ge){ge===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(ge.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=np*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let oe=null;function Ee($,ae){if(u=ae.getViewerPose(c||o),x=ae,u!==null){const ge=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let le=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let De=0;De<ge.length;De++){const At=ge[De];let _t=null;if(m!==null)_t=m.getViewport(At);else{const I=f.getViewSubImage(h,At);_t=I.viewport,De===0&&(e.setRenderTargetTextures(y,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(y))}let We=w[De];We===void 0&&(We=new Vn,We.layers.enable(De),We.viewport=new Pt,w[De]=We),We.matrix.fromArray(At.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(At.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(_t.x,_t.y,_t.width,_t.height),De===0&&(M.matrix.copy(We.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(We)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&f){const De=f.getDepthInformation(ge[0]);De&&De.isValid&&De.texture&&g.init(e,De,i.renderState)}}for(let ge=0;ge<_.length;ge++){const le=S[ge],Pe=_[ge];le!==null&&Pe!==void 0&&Pe.update(le,ae,c||o)}oe&&oe($,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),x=null}const Ze=new XS;Ze.setAnimationLoop(Ee),this.setAnimationLoop=function($){oe=$},this.dispose=function(){}}}const ts=new Zr,l3=new Nt;function c3(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function r(p,d){d.color.getRGB(p.fogColor.value,zS(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,y,_,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),x(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),g(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,y,_):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===_n&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===_n&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=e.get(d),_=y.envMap,S=y.envMapRotation;_&&(p.envMap.value=_,ts.copy(S),ts.x*=-1,ts.y*=-1,ts.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),p.envMapRotation.value.setFromMatrix4(l3.makeRotationFromEuler(ts)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=_*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===_n&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const y=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function u3(t,e,n,r){let i={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const S=_.program;r.uniformBlockBinding(y,S)}function c(y,_){let S=i[y.id];S===void 0&&(x(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",p));const A=_.program;r.updateUBOMapping(y,A);const C=e.render.frame;s[y.id]!==C&&(h(y),s[y.id]=C)}function u(y){const _=f();y.__bindingPointIndex=_;const S=t.createBuffer(),A=y.__size,C=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const _=i[y.id],S=y.uniforms,A=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,T=S.length;C<T;C++){const P=Array.isArray(S[C])?S[C]:[S[C]];for(let w=0,M=P.length;w<M;w++){const D=P[w];if(m(D,C,w,A)===!0){const U=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let K=0;K<F.length;K++){const X=F[K],Z=g(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,U+Y,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,Y),Y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(y,_,S,A){const C=y.value,T=_+"_"+S;if(A[T]===void 0)return typeof C=="number"||typeof C=="boolean"?A[T]=C:A[T]=C.clone(),!0;{const P=A[T];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return A[T]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function x(y){const _=y.uniforms;let S=0;const A=16;for(let T=0,P=_.length;T<P;T++){const w=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,D=w.length;M<D;M++){const U=w[M],F=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,K=F.length;Y<K;Y++){const X=F[Y],Z=g(X),k=S%A,q=k%Z.boundary,J=k+q;S+=q,J!==0&&A-J<Z.storage&&(S+=A-J),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=Z.storage}}}const C=S%A;return C>0&&(S+=A-C),y.__size=S,y.__cache={},this}function g(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function d(){for(const y in i)t.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:d}}class d3{constructor(e={}){const{canvas:n=qA(),context:r=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=r.getContextAttributes().alpha}else m=o;const x=new Uint32Array(4),g=new Int32Array(4);let p=null,d=null;const y=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let A=!1;this._outputColorSpace=Bn;let C=0,T=0,P=null,w=-1,M=null;const D=new Pt,U=new Pt;let F=null;const Y=new at(0);let K=0,X=n.width,Z=n.height,k=1,q=null,J=null;const oe=new Pt(0,0,X,Z),Ee=new Pt(0,0,X,Z);let Ze=!1;const $=new GS;let ae=!1,ge=!1;const le=new Nt,Pe=new Nt,tt=new j,De=new Pt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function We(){return P===null?k:1}let I=r;function Ln(b,B){return n.getContext(b,B)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wm}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",he,!1),I===null){const B="webgl2";if(I=Ln(B,b),I===null)throw Ln(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let $e,Xe,Te,ht,be,R,E,H,ee,ne,Q,we,de,ye,Ye,se,_e,Ne,Ie,Se,qe,Be,dt,O;function fe(){$e=new SN(I),$e.init(),Be=new r3(I,$e),Xe=new pN(I,$e,e,Be),Te=new t3(I,$e),Xe.reverseDepthBuffer&&h&&Te.buffers.depth.setReversed(!0),ht=new wN(I),be=new VD,R=new n3(I,$e,Te,be,Xe,Be,ht),E=new gN(S),H=new _N(S),ee=new PR(I),dt=new fN(I,ee),ne=new MN(I,ee,ht,dt),Q=new TN(I,ne,ee,ht),Ie=new bN(I,Xe,R),se=new mN(be),we=new HD(S,E,H,$e,Xe,dt,se),de=new c3(S,be),ye=new jD,Ye=new KD($e),Ne=new dN(S,E,H,Te,Q,m,l),_e=new JD(S,Q,Xe),O=new u3(I,ht,Xe,Te),Se=new hN(I,$e,ht),qe=new EN(I,$e,ht),ht.programs=we.programs,S.capabilities=Xe,S.extensions=$e,S.properties=be,S.renderLists=ye,S.shadowMap=_e,S.state=Te,S.info=ht}fe();const W=new a3(S,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=$e.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=$e.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(X,Z,!1))},this.getSize=function(b){return b.set(X,Z)},this.setSize=function(b,B,V=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,Z=B,n.width=Math.floor(b*k),n.height=Math.floor(B*k),V===!0&&(n.style.width=b+"px",n.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(X*k,Z*k).floor()},this.setDrawingBufferSize=function(b,B,V){X=b,Z=B,k=V,n.width=Math.floor(b*V),n.height=Math.floor(B*V),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(oe)},this.setViewport=function(b,B,V,G){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,B,V,G),Te.viewport(D.copy(oe).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(Ee)},this.setScissor=function(b,B,V,G){b.isVector4?Ee.set(b.x,b.y,b.z,b.w):Ee.set(b,B,V,G),Te.scissor(U.copy(Ee).multiplyScalar(k).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(b){Te.setScissorTest(Ze=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,V=!0){let G=0;if(b){let z=!1;if(P!==null){const ie=P.texture.format;z=ie===Pm||ie===Rm||ie===Am}if(z){const ie=P.texture.type,ue=ie===Qr||ie===Ls||ie===dl||ie===fl||ie===Tm||ie===Cm,xe=Ne.getClearColor(),Me=Ne.getClearAlpha(),Ue=xe.r,Le=xe.g,Ce=xe.b;ue?(x[0]=Ue,x[1]=Le,x[2]=Ce,x[3]=Me,I.clearBufferuiv(I.COLOR,0,x)):(g[0]=Ue,g[1]=Le,g[2]=Ce,g[3]=Me,I.clearBufferiv(I.COLOR,0,g))}else G|=I.COLOR_BUFFER_BIT}B&&(G|=I.DEPTH_BUFFER_BIT),V&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",he,!1),Ne.dispose(),ye.dispose(),Ye.dispose(),be.dispose(),E.dispose(),H.dispose(),Q.dispose(),dt.dispose(),O.dispose(),we.dispose(),W.dispose(),W.removeEventListener("sessionstart",Om),W.removeEventListener("sessionend",Bm),$i.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=ht.autoReset,B=_e.enabled,V=_e.autoUpdate,G=_e.needsUpdate,z=_e.type;fe(),ht.autoReset=b,_e.enabled=B,_e.autoUpdate=V,_e.needsUpdate=G,_e.type=z}function he(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ke(b){const B=b.target;B.removeEventListener("dispose",ke),wt(B)}function wt(b){$t(b),be.remove(b)}function $t(b){const B=be.get(b).programs;B!==void 0&&(B.forEach(function(V){we.releaseProgram(V)}),b.isShaderMaterial&&we.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,V,G,z,ie){B===null&&(B=At);const ue=z.isMesh&&z.matrixWorld.determinant()<0,xe=hM(b,B,V,G,z);Te.setMaterial(G,ue);let Me=V.index,Ue=1;if(G.wireframe===!0){if(Me=ne.getWireframeAttribute(V),Me===void 0)return;Ue=2}const Le=V.drawRange,Ce=V.attributes.position;let Ke=Le.start*Ue,nt=(Le.start+Le.count)*Ue;ie!==null&&(Ke=Math.max(Ke,ie.start*Ue),nt=Math.min(nt,(ie.start+ie.count)*Ue)),Me!==null?(Ke=Math.max(Ke,0),nt=Math.min(nt,Me.count)):Ce!=null&&(Ke=Math.max(Ke,0),nt=Math.min(nt,Ce.count));const Dt=nt-Ke;if(Dt<0||Dt===1/0)return;dt.setup(z,G,xe,V,Me);let bt,Je=Se;if(Me!==null&&(bt=ee.get(Me),Je=qe,Je.setIndex(bt)),z.isMesh)G.wireframe===!0?(Te.setLineWidth(G.wireframeLinewidth*We()),Je.setMode(I.LINES)):Je.setMode(I.TRIANGLES);else if(z.isLine){let Ae=G.linewidth;Ae===void 0&&(Ae=1),Te.setLineWidth(Ae*We()),z.isLineSegments?Je.setMode(I.LINES):z.isLineLoop?Je.setMode(I.LINE_LOOP):Je.setMode(I.LINE_STRIP)}else z.isPoints?Je.setMode(I.POINTS):z.isSprite&&Je.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Xc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))Je.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ae=z._multiDrawStarts,jt=z._multiDrawCounts,rt=z._multiDrawCount,Yn=Me?ee.get(Me).bytesPerElement:1,Hs=be.get(G).currentProgram.getUniforms();for(let En=0;En<rt;En++)Hs.setValue(I,"_gl_DrawID",En),Je.render(Ae[En]/Yn,jt[En])}else if(z.isInstancedMesh)Je.renderInstances(Ke,Dt,z.count);else if(V.isInstancedBufferGeometry){const Ae=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,jt=Math.min(V.instanceCount,Ae);Je.renderInstances(Ke,Dt,jt)}else Je.render(Ke,Dt)};function st(b,B,V){b.transparent===!0&&b.side===Or&&b.forceSinglePass===!1?(b.side=_n,b.needsUpdate=!0,Dl(b,B,V),b.side=Gi,b.needsUpdate=!0,Dl(b,B,V),b.side=Or):Dl(b,B,V)}this.compile=function(b,B,V=null){V===null&&(V=b),d=Ye.get(V),d.init(B),_.push(d),V.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),b!==V&&b.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const G=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ie=z.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){const xe=ie[ue];st(xe,V,z),G.add(xe)}else st(ie,V,z),G.add(ie)}),d=_.pop(),G},this.compileAsync=function(b,B,V=null){const G=this.compile(b,B,V);return new Promise(z=>{function ie(){if(G.forEach(function(ue){be.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){z(b);return}setTimeout(ie,10)}$e.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let $n=null;function Tr(b){$n&&$n(b)}function Om(){$i.stop()}function Bm(){$i.start()}const $i=new XS;$i.setAnimationLoop(Tr),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(b){$n=b,W.setAnimationLoop(b),b===null?$i.stop():$i.start()},W.addEventListener("sessionstart",Om),W.addEventListener("sessionend",Bm),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(B),B=W.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,B,P),d=Ye.get(b,_.length),d.init(B),_.push(d),Pe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(Pe),ge=this.localClippingEnabled,ae=se.init(this.clippingPlanes,ge),p=ye.get(b,y.length),p.init(),y.push(p),W.enabled===!0&&W.isPresenting===!0){const ie=S.xr.getDepthSensingMesh();ie!==null&&ed(ie,B,-1/0,S.sortObjects)}ed(b,B,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(q,J),_t=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,_t&&Ne.addToRenderList(p,b),this.info.render.frame++,ae===!0&&se.beginShadows();const V=d.state.shadowsArray;_e.render(V,b,B),ae===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=p.opaque,z=p.transmissive;if(d.setupLights(),B.isArrayCamera){const ie=B.cameras;if(z.length>0)for(let ue=0,xe=ie.length;ue<xe;ue++){const Me=ie[ue];Hm(G,z,b,Me)}_t&&Ne.render(b);for(let ue=0,xe=ie.length;ue<xe;ue++){const Me=ie[ue];zm(p,b,Me,Me.viewport)}}else z.length>0&&Hm(G,z,b,B),_t&&Ne.render(b),zm(p,b,B);P!==null&&T===0&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(S,b,B),dt.resetDefaultState(),w=-1,M=null,_.pop(),_.length>0?(d=_[_.length-1],ae===!0&&se.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function ed(b,B,V,G){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){G&&De.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Pe);const ue=Q.update(b),xe=b.material;xe.visible&&p.push(b,ue,xe,V,De.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const ue=Q.update(b),xe=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),De.copy(b.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),De.copy(ue.boundingSphere.center)),De.applyMatrix4(b.matrixWorld).applyMatrix4(Pe)),Array.isArray(xe)){const Me=ue.groups;for(let Ue=0,Le=Me.length;Ue<Le;Ue++){const Ce=Me[Ue],Ke=xe[Ce.materialIndex];Ke&&Ke.visible&&p.push(b,ue,Ke,V,De.z,Ce)}}else xe.visible&&p.push(b,ue,xe,V,De.z,null)}}const ie=b.children;for(let ue=0,xe=ie.length;ue<xe;ue++)ed(ie[ue],B,V,G)}function zm(b,B,V,G){const z=b.opaque,ie=b.transmissive,ue=b.transparent;d.setupLightsView(V),ae===!0&&se.setGlobalState(S.clippingPlanes,V),G&&Te.viewport(D.copy(G)),z.length>0&&Nl(z,B,V),ie.length>0&&Nl(ie,B,V),ue.length>0&&Nl(ue,B,V),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Hm(b,B,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new Is(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?bl:Qr,minFilter:hs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ie=d.state.transmissionRenderTarget[G.id],ue=G.viewport||D;ie.setSize(ue.z*S.transmissionResolutionScale,ue.w*S.transmissionResolutionScale);const xe=S.getRenderTarget();S.setRenderTarget(ie),S.getClearColor(Y),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),_t&&Ne.render(V);const Me=S.toneMapping;S.toneMapping=zi;const Ue=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),ae===!0&&se.setGlobalState(S.clippingPlanes,G),Nl(b,V,G),R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Ce=0,Ke=B.length;Ce<Ke;Ce++){const nt=B[Ce],Dt=nt.object,bt=nt.geometry,Je=nt.material,Ae=nt.group;if(Je.side===Or&&Dt.layers.test(G.layers)){const jt=Je.side;Je.side=_n,Je.needsUpdate=!0,Vm(Dt,V,G,bt,Je,Ae),Je.side=jt,Je.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie))}S.setRenderTarget(xe),S.setClearColor(Y,K),Ue!==void 0&&(G.viewport=Ue),S.toneMapping=Me}function Nl(b,B,V){const G=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ie=b.length;z<ie;z++){const ue=b[z],xe=ue.object,Me=ue.geometry,Ue=ue.group;let Le=ue.material;Le.allowOverride===!0&&G!==null&&(Le=G),xe.layers.test(V.layers)&&Vm(xe,B,V,Me,Le,Ue)}}function Vm(b,B,V,G,z,ie){b.onBeforeRender(S,B,V,G,z,ie),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(S,B,V,G,b,ie),z.transparent===!0&&z.side===Or&&z.forceSinglePass===!1?(z.side=_n,z.needsUpdate=!0,S.renderBufferDirect(V,B,G,z,b,ie),z.side=Gi,z.needsUpdate=!0,S.renderBufferDirect(V,B,G,z,b,ie),z.side=Or):S.renderBufferDirect(V,B,G,z,b,ie),b.onAfterRender(S,B,V,G,z,ie)}function Dl(b,B,V){B.isScene!==!0&&(B=At);const G=be.get(b),z=d.state.lights,ie=d.state.shadowsArray,ue=z.state.version,xe=we.getParameters(b,z.state,ie,B,V),Me=we.getProgramCacheKey(xe);let Ue=G.programs;G.environment=b.isMeshStandardMaterial?B.environment:null,G.fog=B.fog,G.envMap=(b.isMeshStandardMaterial?H:E).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Ue===void 0&&(b.addEventListener("dispose",ke),Ue=new Map,G.programs=Ue);let Le=Ue.get(Me);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===ue)return jm(b,xe),Le}else xe.uniforms=we.getUniforms(b),b.onBeforeCompile(xe,S),Le=we.acquireProgram(xe,Me),Ue.set(Me,Le),G.uniforms=xe.uniforms;const Ce=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=se.uniform),jm(b,xe),G.needsLights=mM(b),G.lightsStateVersion=ue,G.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.directionalShadowMap.value=z.state.directionalShadowMap,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotShadowMap.value=z.state.spotShadowMap,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMap.value=z.state.pointShadowMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function Gm(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=qc.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function jm(b,B){const V=be.get(b);V.outputColorSpace=B.outputColorSpace,V.batching=B.batching,V.batchingColor=B.batchingColor,V.instancing=B.instancing,V.instancingColor=B.instancingColor,V.instancingMorph=B.instancingMorph,V.skinning=B.skinning,V.morphTargets=B.morphTargets,V.morphNormals=B.morphNormals,V.morphColors=B.morphColors,V.morphTargetsCount=B.morphTargetsCount,V.numClippingPlanes=B.numClippingPlanes,V.numIntersection=B.numClipIntersection,V.vertexAlphas=B.vertexAlphas,V.vertexTangents=B.vertexTangents,V.toneMapping=B.toneMapping}function hM(b,B,V,G,z){B.isScene!==!0&&(B=At),R.resetTextureUnits();const ie=B.fog,ue=G.isMeshStandardMaterial?B.environment:null,xe=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ra,Me=(G.isMeshStandardMaterial?H:E).get(G.envMap||ue),Ue=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Le=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,nt=!!V.morphAttributes.color;let Dt=zi;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Dt=S.toneMapping);const bt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Je=bt!==void 0?bt.length:0,Ae=be.get(G),jt=d.state.lights;if(ae===!0&&(ge===!0||b!==M)){const nn=b===M&&G.id===w;se.setState(G,b,nn)}let rt=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==jt.state.version||Ae.outputColorSpace!==xe||z.isBatchedMesh&&Ae.batching===!1||!z.isBatchedMesh&&Ae.batching===!0||z.isBatchedMesh&&Ae.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ae.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ae.instancing===!1||!z.isInstancedMesh&&Ae.instancing===!0||z.isSkinnedMesh&&Ae.skinning===!1||!z.isSkinnedMesh&&Ae.skinning===!0||z.isInstancedMesh&&Ae.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ae.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ae.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ae.instancingMorph===!1&&z.morphTexture!==null||Ae.envMap!==Me||G.fog===!0&&Ae.fog!==ie||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Ue||Ae.vertexTangents!==Le||Ae.morphTargets!==Ce||Ae.morphNormals!==Ke||Ae.morphColors!==nt||Ae.toneMapping!==Dt||Ae.morphTargetsCount!==Je)&&(rt=!0):(rt=!0,Ae.__version=G.version);let Yn=Ae.currentProgram;rt===!0&&(Yn=Dl(G,B,z));let Hs=!1,En=!1,ha=!1;const xt=Yn.getUniforms(),In=Ae.uniforms;if(Te.useProgram(Yn.program)&&(Hs=!0,En=!0,ha=!0),G.id!==w&&(w=G.id,En=!0),Hs||M!==b){Te.buffers.depth.getReversed()?(le.copy(b.projectionMatrix),YA(le),KA(le),xt.setValue(I,"projectionMatrix",le)):xt.setValue(I,"projectionMatrix",b.projectionMatrix),xt.setValue(I,"viewMatrix",b.matrixWorldInverse);const dn=xt.map.cameraPosition;dn!==void 0&&dn.setValue(I,tt.setFromMatrixPosition(b.matrixWorld)),Xe.logarithmicDepthBuffer&&xt.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xt.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,En=!0,ha=!0)}if(z.isSkinnedMesh){xt.setOptional(I,z,"bindMatrix"),xt.setOptional(I,z,"bindMatrixInverse");const nn=z.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),xt.setValue(I,"boneTexture",nn.boneTexture,R))}z.isBatchedMesh&&(xt.setOptional(I,z,"batchingTexture"),xt.setValue(I,"batchingTexture",z._matricesTexture,R),xt.setOptional(I,z,"batchingIdTexture"),xt.setValue(I,"batchingIdTexture",z._indirectTexture,R),xt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&xt.setValue(I,"batchingColorTexture",z._colorsTexture,R));const Un=V.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ie.update(z,V,Yn),(En||Ae.receiveShadow!==z.receiveShadow)&&(Ae.receiveShadow=z.receiveShadow,xt.setValue(I,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(In.envMap.value=Me,In.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&B.environment!==null&&(In.envMapIntensity.value=B.environmentIntensity),En&&(xt.setValue(I,"toneMappingExposure",S.toneMappingExposure),Ae.needsLights&&pM(In,ha),ie&&G.fog===!0&&de.refreshFogUniforms(In,ie),de.refreshMaterialUniforms(In,G,k,Z,d.state.transmissionRenderTarget[b.id]),qc.upload(I,Gm(Ae),In,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(qc.upload(I,Gm(Ae),In,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xt.setValue(I,"center",z.center),xt.setValue(I,"modelViewMatrix",z.modelViewMatrix),xt.setValue(I,"normalMatrix",z.normalMatrix),xt.setValue(I,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const nn=G.uniformsGroups;for(let dn=0,td=nn.length;dn<td;dn++){const Yi=nn[dn];O.update(Yi,Yn),O.bind(Yi,Yn)}}return Yn}function pM(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function mM(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,B,V){const G=be.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),be.get(b.texture).__webglTexture=B,be.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const V=be.get(b);V.__webglFramebuffer=B,V.__useDefaultFramebuffer=B===void 0};const gM=I.createFramebuffer();this.setRenderTarget=function(b,B=0,V=0){P=b,C=B,T=V;let G=!0,z=null,ie=!1,ue=!1;if(b){const Me=be.get(b);if(Me.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Me.__hasExternalTextures)R.rebindTextures(b,be.get(b.texture).__webglTexture,be.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ce=b.depthTexture;if(Me.__boundDepthTexture!==Ce){if(Ce!==null&&be.has(Ce)&&(b.width!==Ce.image.width||b.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ue=!0);const Le=be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[B])?z=Le[B][V]:z=Le[B],ie=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?z=be.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?z=Le[V]:z=Le,D.copy(b.viewport),U.copy(b.scissor),F=b.scissorTest}else D.copy(oe).multiplyScalar(k).floor(),U.copy(Ee).multiplyScalar(k).floor(),F=Ze;if(V!==0&&(z=gM),Te.bindFramebuffer(I.FRAMEBUFFER,z)&&G&&Te.drawBuffers(b,z),Te.viewport(D),Te.scissor(U),Te.setScissorTest(F),ie){const Me=be.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me.__webglTexture,V)}else if(ue){const Me=be.get(b.texture),Ue=B;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.__webglTexture,V,Ue)}else if(b!==null&&V!==0){const Me=be.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Me.__webglTexture,V)}w=-1},this.readRenderTargetPixels=function(b,B,V,G,z,ie,ue){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){Te.bindFramebuffer(I.FRAMEBUFFER,xe);try{const Me=b.texture,Ue=Me.format,Le=Me.type;if(!Xe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-G&&V>=0&&V<=b.height-z&&I.readPixels(B,V,G,z,Be.convert(Ue),Be.convert(Le),ie)}finally{const Me=P!==null?be.get(P).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(b,B,V,G,z,ie,ue){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe)if(B>=0&&B<=b.width-G&&V>=0&&V<=b.height-z){Te.bindFramebuffer(I.FRAMEBUFFER,xe);const Me=b.texture,Ue=Me.format,Le=Me.type;if(!Xe.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ce),I.bufferData(I.PIXEL_PACK_BUFFER,ie.byteLength,I.STREAM_READ),I.readPixels(B,V,G,z,Be.convert(Ue),Be.convert(Le),0);const Ke=P!==null?be.get(P).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,Ke);const nt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $A(I,nt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ce),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ie),I.deleteBuffer(Ce),I.deleteSync(nt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,V=0){const G=Math.pow(2,-V),z=Math.floor(b.image.width*G),ie=Math.floor(b.image.height*G),ue=B!==null?B.x:0,xe=B!==null?B.y:0;R.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,ue,xe,z,ie),Te.unbindTexture()};const vM=I.createFramebuffer(),xM=I.createFramebuffer();this.copyTextureToTexture=function(b,B,V=null,G=null,z=0,ie=null){ie===null&&(z!==0?(Xc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=z,z=0):ie=0);let ue,xe,Me,Ue,Le,Ce,Ke,nt,Dt;const bt=b.isCompressedTexture?b.mipmaps[ie]:b.image;if(V!==null)ue=V.max.x-V.min.x,xe=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,Ue=V.min.x,Le=V.min.y,Ce=V.isBox3?V.min.z:0;else{const Un=Math.pow(2,-z);ue=Math.floor(bt.width*Un),xe=Math.floor(bt.height*Un),b.isDataArrayTexture?Me=bt.depth:b.isData3DTexture?Me=Math.floor(bt.depth*Un):Me=1,Ue=0,Le=0,Ce=0}G!==null?(Ke=G.x,nt=G.y,Dt=G.z):(Ke=0,nt=0,Dt=0);const Je=Be.convert(B.format),Ae=Be.convert(B.type);let jt;B.isData3DTexture?(R.setTexture3D(B,0),jt=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),jt=I.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),jt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const rt=I.getParameter(I.UNPACK_ROW_LENGTH),Yn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Hs=I.getParameter(I.UNPACK_SKIP_PIXELS),En=I.getParameter(I.UNPACK_SKIP_ROWS),ha=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,bt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),I.pixelStorei(I.UNPACK_SKIP_ROWS,Le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ce);const xt=b.isDataArrayTexture||b.isData3DTexture,In=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const Un=be.get(b),nn=be.get(B),dn=be.get(Un.__renderTarget),td=be.get(nn.__renderTarget);Te.bindFramebuffer(I.READ_FRAMEBUFFER,dn.__webglFramebuffer),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,td.__webglFramebuffer);for(let Yi=0;Yi<Me;Yi++)xt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(b).__webglTexture,z,Ce+Yi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(B).__webglTexture,ie,Dt+Yi)),I.blitFramebuffer(Ue,Le,ue,xe,Ke,nt,ue,xe,I.DEPTH_BUFFER_BIT,I.NEAREST);Te.bindFramebuffer(I.READ_FRAMEBUFFER,null),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||be.has(b)){const Un=be.get(b),nn=be.get(B);Te.bindFramebuffer(I.READ_FRAMEBUFFER,vM),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,xM);for(let dn=0;dn<Me;dn++)xt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Un.__webglTexture,z,Ce+dn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Un.__webglTexture,z),In?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nn.__webglTexture,ie,Dt+dn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nn.__webglTexture,ie),z!==0?I.blitFramebuffer(Ue,Le,ue,xe,Ke,nt,ue,xe,I.COLOR_BUFFER_BIT,I.NEAREST):In?I.copyTexSubImage3D(jt,ie,Ke,nt,Dt+dn,Ue,Le,ue,xe):I.copyTexSubImage2D(jt,ie,Ke,nt,Ue,Le,ue,xe);Te.bindFramebuffer(I.READ_FRAMEBUFFER,null),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else In?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(jt,ie,Ke,nt,Dt,ue,xe,Me,Je,Ae,bt.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(jt,ie,Ke,nt,Dt,ue,xe,Me,Je,bt.data):I.texSubImage3D(jt,ie,Ke,nt,Dt,ue,xe,Me,Je,Ae,bt):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ie,Ke,nt,ue,xe,Je,Ae,bt.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ie,Ke,nt,bt.width,bt.height,Je,bt.data):I.texSubImage2D(I.TEXTURE_2D,ie,Ke,nt,ue,xe,Je,Ae,bt);I.pixelStorei(I.UNPACK_ROW_LENGTH,rt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Yn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Hs),I.pixelStorei(I.UNPACK_SKIP_ROWS,En),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ha),ie===0&&B.generateMipmaps&&I.generateMipmap(jt),Te.unbindTexture()},this.copyTextureToTexture3D=function(b,B,V=null,G=null,z=0){return Xc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,V,G,z)},this.initRenderTarget=function(b){be.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Te.unbindTexture()},this.resetState=function(){C=0,T=0,P=null,Te.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}function QS(){const t=N.useRef(null),e=N.useRef({x:0,y:0}),n=N.useRef(!1);return N.useEffect(()=>{if(!t.current)return;const r=new SR,i=new Vn(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=30;const s=new d3({alpha:!0,antialias:!0});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(window.devicePixelRatio),t.current.appendChild(s.domElement),n.current=document.documentElement.classList.contains("dark");const o=()=>n.current?4906624:1096065,a=new ti,l=1e3,c=new Float32Array(l*3),u=new Float32Array(l);for(let d=0;d<l;d++)c[d*3]=(Math.random()-.5)*100,c[d*3+1]=(Math.random()-.5)*100,c[d*3+2]=(Math.random()-.5)*100,u[d]=Math.random()*2;a.setAttribute("position",new Wn(c,3)),a.setAttribute("scale",new Wn(u,1));const f=new jS({color:o(),size:.15,transparent:!0,opacity:.9,sizeAttenuation:!0}),h=new wR(a,f);r.add(h);let m=0;const x=()=>{requestAnimationFrame(x),h.rotation.x+=1e-4,h.rotation.y+=1e-4,h.rotation.x+=e.current.y*5e-5,h.rotation.y+=e.current.x*5e-5;const d=document.documentElement.classList.contains("dark");d!==n.current&&(n.current=d,f.color.set(o())),m+=.01;const y=a.attributes.position.array,_=a.attributes.scale.array;for(let S=0;S<l;S++){const A=S*3,C=y[A],T=y[A+1];y[A+2],y[A]=C+Math.sin(m+S)*.01,y[A+1]=T+Math.cos(m+S)*.01,_[S]=Math.abs(Math.sin(m+S)*1.5)+.5}a.attributes.position.needsUpdate=!0,a.attributes.scale.needsUpdate=!0,s.render(r,i)};function g(d){e.current.x=d.clientX/window.innerWidth*2-1,e.current.y=-(d.clientY/window.innerHeight)*2+1}const p=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return x(),window.addEventListener("resize",p),document.addEventListener("mousemove",g),()=>{window.removeEventListener("resize",p),document.removeEventListener("mousemove",g),s.dispose(),t.current&&t.current.contains(s.domElement)&&t.current.removeChild(s.domElement)}},[]),v.jsx("div",{ref:t,className:"fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-60 dark:opacity-90"})}function ws(){const[t,e]=N.useState(!1);N.useEffect(()=>{const r=localStorage.getItem("theme")==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches;e(r)},[]),N.useEffect(()=>{t?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},[t]);const n=()=>{e(!t)};return v.jsxs("button",{onClick:n,className:"fixed z-[999] top-20 right-6 w-14 h-14 bg-white/95 dark:bg-gray-800/95 rounded-full shadow-xl flex items-center justify-center backdrop-blur-sm hover:shadow-2xl transition-all transform hover:scale-110 border-2 border-green-400/30 hover:border-green-500/50 animate-pulse-light","aria-label":t?"Switch to light mode":"Switch to dark mode",children:[!t&&v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 text-yellow-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}),t&&v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 text-green-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})]})}function ao({children:t,speed:e=.2,className:n=""}){const r=N.useRef(null),[i,s]=N.useState(0),[o,a]=N.useState(!1);return N.useEffect(()=>{const l=()=>{if(!r.current)return;const c=r.current.getBoundingClientRect();if(c.top<window.innerHeight&&c.bottom>0){a(!0);const f=window.innerHeight/2,m=c.top+c.height/2-f;s(m*e)}};return window.addEventListener("scroll",l),l(),()=>{window.removeEventListener("scroll",l)}},[e]),v.jsx("div",{ref:r,className:`transform transition-opacity duration-700 ${o?"opacity-100":"opacity-0"} ${n}`,style:{transform:`translateY(${i}px)`,transition:"transform 0.1s ease-out"},children:t})}function f3(){const[t,e]=N.useState(0);N.useEffect(()=>{const s=()=>{e(window.scrollY)};return window.addEventListener("scroll",s,{passive:!0}),()=>{window.removeEventListener("scroll",s)}},[]);const n=Math.max(0,Math.min(1,1-t/500)),r=t*.5,i=1-t*.001;return v.jsxs("div",{className:"fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0",children:[v.jsx("div",{className:"absolute inset-0 flex items-center justify-center",style:{opacity:n,transform:`translateY(${r}px) scale(${i})`},children:v.jsxs("div",{className:"w-full h-full absolute",children:[v.jsxs("div",{className:"text-center z-10",children:[v.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-4 text-white",children:"Parth Bhodia"}),v.jsx("p",{className:"text-xl md:text-2xl text-green-200",children:"Software Developer"})]}),v.jsx("div",{className:"absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-green-400/30 to-green-600/30 filter blur-3xl animate-float"}),v.jsx("div",{className:"absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-green-500/20 to-green-700/20 filter blur-3xl",style:{animationDelay:"1s",animationDuration:"7s"}}),v.jsx("div",{className:"absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-green-300/20 to-green-500/20 filter blur-3xl",style:{animationDelay:"0.5s",animationDuration:"5s"}})]})}),v.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z'/%3E%3C/g%3E%3C/svg%3E")`,backgroundSize:"30px 30px"}})]})}function h3({title:t,description:e,tags:n,liveUrl:r,codeUrl:i,index:s=0}){const[o,a]=N.useState(!1),l=N.useRef(null),[c,u]=N.useState({x:0,y:0}),[f,h]=N.useState({x:0,y:0}),m=g=>{if(!l.current)return;const p=l.current.getBoundingClientRect(),d=g.clientX-p.left-p.width/2,y=g.clientY-p.top-p.height/2;u({x:y/10,y:-d/10}),h({x:d/20,y:y/20})},x=()=>{a(!1),u({x:0,y:0}),h({x:0,y:0})};return N.useEffect(()=>{l.current&&(l.current.classList.add("project-card-enter"),l.current.style.animationDelay=`${s*.1}s`);const g=setTimeout(()=>{l.current&&l.current.classList.remove("project-card-enter")},1e3);return()=>clearTimeout(g)},[s]),v.jsxs("div",{ref:l,onMouseEnter:()=>a(!0),onMouseMove:m,onMouseLeave:x,className:"relative h-96 bg-white/90 dark:bg-black/60 rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 ease-out hover:shadow-xl hover:scale-[1.02]",style:{transform:`perspective(1000px) rotateX(${c.x}deg) rotateY(${c.y}deg) translate3d(${f.x}px, ${f.y}px, 0)`,transformStyle:"preserve-3d"},children:[v.jsx("div",{className:"h-48 bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 flex items-center justify-center p-6 transform transition-transform duration-300",style:{transform:`translateZ(${o?"20px":"0px"})`,transformStyle:"preserve-3d"},children:v.jsx("h3",{className:"text-white text-xl font-medium text-center",children:t})}),v.jsxs("div",{className:"p-6 transform transition-transform duration-300",style:{transform:`translateZ(${o?"40px":"0px"})`,transformStyle:"preserve-3d"},children:[v.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:e}),v.jsx("div",{className:"flex flex-wrap gap-2 mb-4 transform transition-transform duration-300",style:{transform:`translateZ(${o?"60px":"0px"})`},children:n.map((g,p)=>v.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full",children:g},p))}),v.jsxs("div",{className:"flex space-x-3 transform transition-transform duration-300",style:{transform:`translateZ(${o?"60px":"0px"})`},children:[v.jsx("a",{href:r,className:"px-3 py-1 bg-green-600 dark:bg-green-500 text-white rounded hover:bg-green-700 dark:hover:bg-green-600 transition-colors",children:"View Live"}),v.jsx("a",{href:i,className:"px-3 py-1 border border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 rounded hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors",children:"Source Code"})]})]}),o&&v.jsx("div",{className:"absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"})]})}function p3({texts:t,typingSpeed:e=100,deletingSpeed:n=50,delayBetweenTexts:r=2e3,className:i=""}){const[s,o]=N.useState(""),[a,l]=N.useState(0),[c,u]=N.useState(!1),[f,h]=N.useState(!1);return N.useEffect(()=>{if(t.length===0)return;const m=()=>{const g=t[a],p=c?g.substring(0,s.length-1):g.substring(0,s.length+1);o(p),!c&&p===g?(h(!0),setTimeout(()=>{h(!1),u(!0)},r)):c&&p===""&&(u(!1),l((a+1)%t.length))};if(f)return;const x=setTimeout(m,c?n:e);return()=>clearTimeout(x)},[s,a,c,f,t,e,n,r]),v.jsxs("span",{className:i,children:[s,v.jsx("span",{className:"animate-blink",children:"|"})]})}function ZS(){const[t,e]=N.useState(0);return N.useEffect(()=>{const n=()=>{const r=document.documentElement.scrollHeight-window.innerHeight,s=window.scrollY/r*100;e(s)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),v.jsx("div",{className:"fixed top-0 left-0 right-0 h-1 z-50",children:v.jsx("div",{className:"h-full bg-gradient-to-r from-green-400 to-green-600",style:{width:`${t}%`}})})}function m3(){const t=[{title:"Personalized Knowledge Assistant ChatBOT",description:"ChatBOT using GPT and Pinecone vector databases to predict vendor success rates based on historical data. Reduced time-to-information retrieval by 50%.",tags:["GPT","Pinecone","Machine Learning","Vector DB"],category:"AI/ML",liveUrl:"#",codeUrl:"#",featured:!0},{title:"CMS Management System",description:"Postgres schema design and implementation for CMS managing 100,000+ users with efficient data display and management.",tags:["PostgreSQL","Node.js","Database Design"],category:"Backend",liveUrl:"#",codeUrl:"#",featured:!0},{title:"AWS Authentication System",description:"Secure Login and Registration system with JWT authentication using AWS Amplify, Cognito, API Gateway, and Lambda Services.",tags:["AWS","JWT","Cognito","Lambda","API Gateway"],category:"Cloud/Security",liveUrl:"#",codeUrl:"#",featured:!0},{title:"Dynamic AWS Lambda Functions",description:"HTML content generation with Open Graph metadata for enhanced social media sharing and SEO for sports news platform.",tags:["AWS Lambda","SEO","Open Graph","HTML"],category:"Cloud",liveUrl:"#",codeUrl:"#",featured:!0},{title:"NLSE Sports Website with Stripe",description:"Sports entertainment website with integrated Stripe payment processing for ticket sales and event bookings.",tags:["Stripe","Payment Processing","Vue.js","Node.js"],category:"E-commerce",liveUrl:"#",codeUrl:"#",featured:!0},{title:"Project Spectrum (Government Website)",description:"Frontend solutions using HTMX and Vue.js for seamless dynamic interactions without full page reloads.",tags:["HTMX","Vue.js","Government","SPA"],category:"Government",liveUrl:"#",codeUrl:"#",featured:!0},{title:"GIS Enemy Detection Framework",description:"GIS-based visualization framework for detecting enemy objects using Elastic Search and Kibana with real-time data processing.",tags:["Elastic Search","Kibana","GIS","Java Spring Boot","RabbitMQ"],category:"Research",liveUrl:"#",codeUrl:"#",featured:!0},{title:"IPT Tool Dashboard",description:"Internal dashboard for 10,000+ users to monitor login activity, app usage, and security metrics with automated testing.",tags:["Django","Python","React","Dashboard","Analytics"],category:"Enterprise",liveUrl:"#",codeUrl:"#",featured:!0},{title:"Back-Bone Cost Map Automation",description:"Automation application using Python3 and Leaflet Open Maps for sales team route optimization, increasing APAC revenue by 36%.",tags:["Python3","Leaflet","Maps","Automation","Sales"],category:"Enterprise",liveUrl:"#",codeUrl:"#",featured:!0},{title:"Nutri AI Scan",description:"Award-winning progressive web app (2nd place CBIC Entrepreneurship UMBC) using OCR to identify allergens and provide healthiness ratings.",tags:["Vue.js","OCR","REST API","MongoDB","PWA"],category:"AI/ML",liveUrl:"#",codeUrl:"#",featured:!0}],e=["All","AI/ML","Backend","Cloud/Security","Cloud","E-commerce","Government","Research","Enterprise"],[n,r]=N.useState("AI/ML"),[i,s]=N.useState(!1),[o,a]=N.useState({name:"",email:"",subject:"",message:""}),[l,c]=N.useState(!1),[u,f]=N.useState(""),[h,m]=N.useState(!1),[x,g]=N.useState(!1),[p,d]=N.useState([{text:"Hello! I'm here to help you learn about Parth Bhodia. Ask me about his skills, experience, projects, education, or visa status!",isUser:!1,timestamp:new Date}]),[y,_]=N.useState(""),S=N.useRef(null),A=U=>{const{name:F,value:Y}=U.target;a(K=>({...K,[F]:Y}))},C=async U=>{U.preventDefault(),c(!0),f("");const F=`https://mail.google.com/mail/?view=cm&to=parthbhodia08@gmail.com&su=${encodeURIComponent(o.subject)}&body=${encodeURIComponent(`Name: ${o.name}
Email: ${o.email}

Message:
${o.message}`)}`;window.open(F,"_blank"),m(!0),f("Opening Gmail to send your message. Please complete sending from Gmail."),a({name:"",email:"",subject:"",message:""}),c(!1)},T=()=>{g(U=>!U)};N.useEffect(()=>{x&&S.current&&P()},[p,x]);const P=()=>{S.current&&(S.current.scrollTop=S.current.scrollHeight)},w=U=>{const F=U.toLowerCase().trim();return F.includes("experience")||F.includes("work")||F.includes("job")?"I have experience at Eccalon LLC (2022-Present) as a Fullstack Developer, UMBC as Research Assistant (2022), and Tata Communications (2018-2021) as Software Developer. I've worked on AI/ML projects, enterprise dashboards, and automation systems.":F.includes("skills")||F.includes("technology")||F.includes("tech")?"My core skills include JavaScript (95%), TypeScript (90%), Vue.js (90%), React (85%), Node.js (90%), Python (85%), and cloud technologies like AWS. I also work with databases like PostgreSQL and MongoDB.":F.includes("education")||F.includes("degree")||F.includes("study")?"I graduated from University of Maryland, Baltimore County (UMBC) in May 2023 with a Master's degree in Computer Science. I'm currently on F1 OPT status.":F.includes("project")||F.includes("portfolio")?"My featured projects include a Personalized Knowledge Assistant ChatBOT using GPT and Pinecone, CMS Management System for 100K+ users, and Nutri AI Scan (award-winning PWA). Check out the Projects section for more details!":F.includes("visa")||F.includes("status")||F.includes("opt")?"I am looking for more fun opportunities to work with! I'm authorized to work in the US and excited about new challenges.":F.includes("contact")||F.includes("hire")||F.includes("reach")?"You can reach me at parthbhodia08@gmail.com or through the contact form on this website. I'm actively looking for software development opportunities!":F.includes("ai")||F.includes("machine learning")||F.includes("ml")?"I have strong experience in AI/ML, including developing a ChatBOT with GPT and Pinecone vector databases, OCR-based applications, and data analytics. It's one of my primary areas of expertise.":F.includes("hello")||F.includes("hi")||F.includes("hey")?"Hello! I'm Parth's portfolio assistant. I can tell you about his work experience, skills, education, projects, or visa status. What would you like to know?":F.includes("location")||F.includes("where")?"I'm based in Maryland, USA. I'm available for remote work or positions in the DMV area (DC, Maryland, Virginia).":"I can help you learn about Parth's experience, skills, education, projects, or contact information. Try asking about his work experience, technical skills, or recent projects!"},M=async U=>{if(U.preventDefault(),!y.trim())return;const F={text:y,isUser:!0,timestamp:new Date};d(K=>[...K,F]);const Y=y;_("");try{const K=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:Y})});if(K.ok){const X=await K.json();d(Z=>[...Z,{text:X.response||w(Y),isUser:!1,timestamp:new Date}])}else throw new Error("API not available")}catch{setTimeout(()=>{d(X=>[...X,{text:w(Y),isUser:!1,timestamp:new Date}])},500)}},D=U=>nA(new Date(U),"h:mm a");return v.jsxs("div",{className:"min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100",children:[v.jsx(ZS,{}),v.jsx(ws,{}),v.jsx(QS,{}),v.jsx("nav",{className:"bg-white/90 dark:bg-black/90 backdrop-blur-sm sticky top-0 z-50 shadow-md",children:v.jsxs("div",{className:"container mx-auto px-4 py-4",children:[v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsx("div",{className:"text-xl font-bold bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"Parth Bhodia"}),v.jsxs("div",{className:"hidden md:flex items-center space-x-6",children:[v.jsx("a",{href:"#companies",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Companies"}),v.jsx("a",{href:"#about",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"About"}),v.jsx(gt,{href:"/skills",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Skills"}),v.jsx("a",{href:"#projects",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Projects"}),v.jsx(gt,{href:"/blog",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Blog"}),v.jsx("a",{href:"#contact",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Contact"}),v.jsx(ws,{})]}),v.jsxs("div",{className:"md:hidden flex items-center space-x-4",children:[v.jsx(ws,{}),v.jsx("button",{onClick:()=>s(!i),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors",children:i?v.jsx(la,{size:24}):v.jsx(Mm,{size:24})})]})]}),i&&v.jsx("div",{className:"md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700",children:v.jsxs("div",{className:"flex flex-col space-y-4 pt-4",children:[v.jsx("a",{href:"#companies",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>s(!1),children:"Companies"}),v.jsx("a",{href:"#about",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>s(!1),children:"About"}),v.jsx(gt,{href:"/skills",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>s(!1),children:"Skills"}),v.jsx("a",{href:"#projects",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>s(!1),children:"Projects"}),v.jsx(gt,{href:"/blog",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>s(!1),children:"Blog"}),v.jsx("a",{href:"#contact",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>s(!1),children:"Contact"})]})})]})}),v.jsx(f3,{}),v.jsx("section",{className:"min-h-screen flex items-center justify-center relative -mt-screen",children:v.jsxs("div",{className:"container mx-auto px-4 flex flex-col items-center z-10",children:[v.jsx(ao,{speed:.4,className:"mb-8",children:v.jsx("div",{className:"w-32 h-32 rounded-full bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 flex items-center justify-center text-4xl text-white shadow-lg transform transition-all duration-500 hover:scale-110",children:"PB"})}),v.jsx(ao,{speed:.2,className:"mb-4",children:v.jsxs("h1",{className:"text-4xl md:text-6xl font-bold text-center mb-4",children:["Hi, I'm ",v.jsx("span",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"Parth Bhodia"})]})}),v.jsx(ao,{speed:.1,className:"mb-8",children:v.jsxs("div",{className:"text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 max-w-2xl backdrop-blur-sm py-2 px-4 rounded-lg bg-white/10 dark:bg-black/20",children:["I'm a ",v.jsx(p3,{texts:["Software Developer","Full Stack Engineer","Vue.js Expert","React Developer","AWS Cloud Specialist","Python Developer"],className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text font-semibold"})]})}),v.jsx(ao,{speed:-.1,children:v.jsxs("div",{className:"flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",children:[v.jsx("a",{href:"#contact",className:"px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1",children:"Get in Touch"}),v.jsx("a",{href:"#projects",className:"px-6 py-3 border-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 rounded-md hover:bg-green-600/10 dark:hover:bg-green-500/10 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1",children:"View Projects"}),v.jsxs("a",{href:"/resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"px-6 py-3 bg-gray-600 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center",children:[v.jsx("span",{children:"Download Resume"}),v.jsx("svg",{className:"w-4 h-4 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})})]})]})})]})}),v.jsx("section",{id:"companies",className:"py-20",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:v.jsx("span",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"Companies I've Worked With"})}),v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"overflow-hidden",children:v.jsx("div",{id:"companies-carousel",className:"flex gap-6 transition-transform duration-500 ease-in-out px-4",children:[{name:"Eccalon LLC",logo:"https://media.glassdoor.com/sqll/2356227/eccalon-squarelogo-1556550788109.png",role:"Fullstack Developer",period:"May 2022 - Present",description:"Developed personalized knowledge assistant ChatBOT using GPT and Pinecone vector databases, reducing time-to-information retrieval by 50%. Designed Postgres schema for CMS managing 100K+ users. Built secure authentication systems with AWS services."},{name:"University of Maryland, Baltimore County",logo:"https://www.interfolio.com/wp-content/uploads/umbc.png",role:"Research Assistant - Software Developer",period:"Jan 2022 - Dec 2022",description:"Developed GIS-based visualization framework for detecting enemy objects using Elastic Search and Kibana. Used Java Spring Boot to control servers and communicate with edge devices using RabbitMQ."},{name:"Tata Communications Ltd.",logo:"https://cdn.freebiesupply.com/logos/large/2x/tata-communications-logo-png-transparent.png",role:"Software Developer",period:"July 2018 - May 2021",description:"Led development of internal IPT Tool dashboard for 10,000+ users using Django, Python, JavaScript, and React. Developed automation application for Back-Bone Cost Map, increasing APAC region revenue by 36%."},{name:"Eccalon LLC",logo:"https://media.glassdoor.com/sqll/2356227/eccalon-squarelogo-1556550788109.png",role:"Fullstack Developer",period:"May 2022 - Present",description:"Developed personalized knowledge assistant ChatBOT using GPT and Pinecone vector databases, reducing time-to-information retrieval by 50%. Designed Postgres schema for CMS managing 100K+ users. Built secure authentication systems with AWS services."},{name:"University of Maryland, Baltimore County",logo:"https://www.interfolio.com/wp-content/uploads/umbc.png",role:"Research Assistant - Software Developer",period:"Jan 2022 - Dec 2022",description:"Developed GIS-based visualization framework for detecting enemy objects using Elastic Search and Kibana. Used Java Spring Boot to control servers and communicate with edge devices using RabbitMQ."}].map((U,F)=>v.jsxs(YT,{children:[v.jsx(KT,{asChild:!0,children:v.jsxs("div",{className:"bg-white/90 dark:bg-black/40 p-6 rounded-lg shadow-lg backdrop-blur-sm cursor-pointer w-72 flex-shrink-0",children:[v.jsx("div",{className:"h-16 flex items-center justify-center mb-4",children:v.jsx("img",{src:U.logo,alt:U.name,className:"max-h-full object-contain"})}),v.jsx("h3",{className:"text-xl font-semibold mb-2 text-center",children:U.name}),v.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-center",children:U.role}),v.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-500 text-center",children:U.period})]})}),v.jsx(uS,{className:"sm:max-w-[425px]",children:v.jsxs(dS,{children:[v.jsxs(fS,{className:"flex items-center gap-2",children:[v.jsx("img",{src:U.logo,alt:U.name,className:"h-8 object-contain"}),v.jsx("span",{children:U.name})]}),v.jsxs(hS,{className:"pt-4",children:[v.jsxs("div",{className:"mb-4",children:[v.jsx("p",{className:"font-semibold text-green-600 dark:text-green-400",children:U.role}),v.jsx("p",{className:"text-sm text-gray-500",children:U.period})]}),v.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:U.description})]})]})})]},F))})}),v.jsx("button",{onClick:()=>{var F;const U=document.getElementById("companies-carousel");if(U){const K=U.style.transform||"translateX(0px)",Z=parseInt(((F=K.match(/-?\d+/))==null?void 0:F[0])||"0")+300;Z>0?U.style.transform=`translateX(-${300*2}px)`:U.style.transform=`translateX(${Z}px)`}},className:"absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 p-3 rounded-full shadow-xl z-30 hover:bg-white dark:hover:bg-gray-900 transition-all",children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),v.jsx("button",{onClick:()=>{var F;const U=document.getElementById("companies-carousel");if(U){const K=U.style.transform||"translateX(0px)",Z=parseInt(((F=K.match(/-?\d+/))==null?void 0:F[0])||"0")-300;Math.abs(Z)>=300*3?U.style.transform="translateX(0px)":U.style.transform=`translateX(${Z}px)`}},className:"absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 p-3 rounded-full shadow-xl z-30 hover:bg-white dark:hover:bg-gray-900 transition-all",children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})]})}),v.jsx("section",{id:"about",className:"py-20 bg-gray-50 dark:bg-gray-900/40 backdrop-blur-sm",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx("h2",{className:"text-3xl font-bold mb-12 text-center relative",children:v.jsx("span",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"About Me"})}),v.jsxs("div",{className:"max-w-3xl mx-auto text-gray-700 dark:text-gray-300 space-y-4 bg-white/80 dark:bg-black/40 p-6 rounded-lg shadow-md backdrop-blur-sm",children:[v.jsx("p",{children:"I'm a Software Developer with over 5 years of experience in HTML, CSS, SASS, SCSS, TypeScript, JavaScript, Node.js, Python, and AWS. I'm proficient with modern frameworks such as Vue.js, Nuxt, and React, with extensive experience in REST APIs and GraphQL."}),v.jsx("p",{children:"Currently based in Jersey City, NJ, I'm on F1 OPT status and graduated with a Master's in Computer Science from UMBC in May 2023. My expertise spans from building ChatBOTs with GPT and vector databases to designing systems for 100K+ users."}),v.jsx("p",{children:"I've led projects that reduced information retrieval time by 50% and increased revenue by 36% through automation. I'm passionate about creating efficient, scalable solutions and stay current with emerging technologies in cloud computing and AI/ML."})]})]})}),v.jsx("section",{id:"projects",className:"py-20 bg-gray-50/80 dark:bg-gray-900/30 backdrop-blur-sm",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:v.jsx("span",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"My Projects"})}),v.jsx("div",{className:"flex justify-center flex-wrap gap-2 mb-12",children:e.map((U,F)=>v.jsx("button",{onClick:()=>r(U),className:`px-4 py-2 rounded-full transition-all duration-300 ${n===U?"bg-green-500 dark:bg-green-600 text-white shadow-lg category-tab-active":"bg-white/70 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30 hover:shadow-md"}`,children:U},F))}),v.jsxs(ao,{speed:.1,children:[v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.filter(U=>n==="All"||U.category===n).map((U,F)=>v.jsx(h3,{title:U.title,description:U.description,tags:U.tags,liveUrl:U.liveUrl,codeUrl:U.codeUrl,index:F},`${n}-${F}`))},n),t.filter(U=>n==="All"||U.category===n).length===0&&v.jsx("div",{className:"text-center py-20 text-gray-500 dark:text-gray-400",children:v.jsx("p",{className:"text-xl",children:"No projects found in this category."})})]})]})}),v.jsx("section",{id:"contact",className:"py-20 bg-white/80 dark:bg-black/40 backdrop-blur-sm",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:v.jsx("span",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"Get In Touch"})}),v.jsx(ao,{speed:.05,children:v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto",children:[v.jsxs("div",{className:"bg-white/70 dark:bg-black/50 p-6 rounded-lg shadow-md backdrop-blur-sm",children:[v.jsx("h3",{className:"text-xl font-medium mb-6 text-gray-800 dark:text-gray-200",children:"Contact Information"}),v.jsxs("div",{className:"space-y-6 mb-6",children:[v.jsxs("div",{className:"flex items-center transform transition-transform hover:translate-x-2",children:[v.jsx("div",{className:"w-10 h-10 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center mr-4 shadow-md",children:v.jsx("span",{className:"text-green-600 dark:text-green-400",children:"📧"})}),v.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"parthbhodia08@gmail.com"})]}),v.jsxs("div",{className:"flex items-center transform transition-transform hover:translate-x-2",children:[v.jsx("div",{className:"w-10 h-10 bg-green-100 dark:bg-green-900/60 rounded-full flex items-center justify-center mr-4 shadow-md",children:v.jsx("span",{className:"text-green-600 dark:text-green-400",children:"📍"})}),v.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Jersey City, NJ"})]})]})]}),v.jsxs("form",{onSubmit:C,className:"space-y-4 bg-white/70 dark:bg-black/50 p-6 rounded-lg shadow-md backdrop-blur-sm",children:[v.jsxs("div",{children:[v.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Name"}),v.jsx("input",{type:"text",id:"name",name:"name",value:o.name,onChange:A,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email"}),v.jsx("input",{type:"email",id:"email",name:"email",value:o.email,onChange:A,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Subject"}),v.jsx("input",{type:"text",id:"subject",name:"subject",value:o.subject,onChange:A,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Message"}),v.jsx("textarea",{id:"message",name:"message",value:o.message,onChange:A,rows:4,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"})]}),v.jsx("button",{type:"submit",disabled:l,className:"w-full py-3 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white rounded-md hover:from-green-600 hover:to-green-700 dark:hover:from-green-500 dark:hover:to-green-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none disabled:hover:shadow-md",children:l?"Sending...":"Send Message"}),u&&v.jsx("p",{className:`text-center mt-4 ${h?"text-green-600":"text-red-600"}`,children:u})]})]})})]})}),v.jsx("div",{className:"fixed bottom-6 right-6 z-40",children:v.jsx("button",{onClick:T,className:"w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:from-green-600 hover:to-green-700 dark:hover:from-green-500 dark:hover:to-green-600 transition-all transform hover:scale-110",children:v.jsx("span",{className:"text-xl",children:x?"✕":"💬"})})}),x&&v.jsxs("div",{className:"fixed bottom-24 right-6 w-80 md:w-96 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden z-50 border border-green-200 dark:border-green-900",children:[v.jsx("div",{className:"p-4 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white",children:v.jsx("h3",{className:"font-medium",children:"Portfolio Assistant"})}),v.jsx("div",{ref:S,className:"h-96 overflow-y-auto p-4 flex flex-col gap-3",children:p.map((U,F)=>v.jsxs("div",{className:`max-w-[80%] p-3 rounded-lg ${U.isUser?"bg-green-100 dark:bg-green-900/60 text-gray-800 dark:text-gray-200 self-end shadow-md":"bg-gray-100 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 self-start shadow-md"}`,children:[U.text,v.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:D(U.timestamp)})]},F))}),v.jsx("div",{className:"p-3 border-t border-gray-200 dark:border-gray-800",children:v.jsxs("form",{onSubmit:M,className:"flex gap-2",children:[v.jsx("input",{type:"text",value:y,onChange:U=>_(U.target.value),placeholder:"Ask me anything...",className:"flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm"}),v.jsx("button",{type:"submit",disabled:!y.trim(),className:"px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white rounded-md hover:from-green-600 hover:to-green-700 dark:hover:from-green-500 dark:hover:to-green-600 transition-all disabled:opacity-70",children:"Send"})]})})]}),v.jsx("footer",{className:"py-12 bg-gray-50/70 dark:bg-gray-900/50 backdrop-blur-md border-t border-gray-200 dark:border-gray-800",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:[v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 flex items-center justify-center text-sm text-white font-bold",children:"PB"}),v.jsx("h3",{className:"text-xl font-semibold bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"Parth Bhodia"})]}),v.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Software Developer specializing in Vue.js, React, Node.js, Python, and AWS. Building scalable solutions with modern technologies."}),v.jsxs("div",{className:"flex space-x-4 text-gray-500 dark:text-gray-400",children:[v.jsx("a",{href:"https://github.com/parthbhodia",target:"_blank",rel:"noopener noreferrer",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors",children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:v.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),v.jsx("a",{href:"https://linkedin.com/in/parthbhodia",target:"_blank",rel:"noopener noreferrer",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors",children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:v.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),v.jsx("a",{href:"mailto:parthbhodia08@gmail.com",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors",children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:v.jsx("path",{d:"M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"})})})]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"text-lg font-medium mb-4 text-gray-900 dark:text-gray-100",children:"Quick Links"}),v.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-400",children:[v.jsx("li",{children:v.jsxs("a",{href:"#about",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center",children:[v.jsx("span",{className:"mr-2",children:"→"})," About Me"]})}),v.jsx("li",{children:v.jsxs(gt,{href:"/skills",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center",children:[v.jsx("span",{className:"mr-2",children:"→"})," Skills & Expertise"]})}),v.jsx("li",{children:v.jsxs(gt,{href:"/blog",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center",children:[v.jsx("span",{className:"mr-2",children:"→"})," Tech Blog"]})}),v.jsx("li",{children:v.jsxs("a",{href:"#projects",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center",children:[v.jsx("span",{className:"mr-2",children:"→"})," Portfolio Projects"]})}),v.jsx("li",{children:v.jsxs("a",{href:"#contact",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center",children:[v.jsx("span",{className:"mr-2",children:"→"})," Get In Touch"]})})]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"text-lg font-medium mb-4 text-gray-900 dark:text-gray-100",children:"Stay Updated"}),v.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm mb-4",children:"Subscribe to my newsletter for the latest articles, projects, and tech insights."}),v.jsxs("form",{className:"flex",children:[v.jsx("input",{type:"email",placeholder:"Your email address",className:"flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800/30 bg-white/80 backdrop-blur-sm"}),v.jsx("button",{type:"submit",className:"px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white rounded-r-md hover:from-green-600 hover:to-green-700 dark:hover:from-green-500 dark:hover:to-green-600 transition-all",children:"Subscribe"})]})]})]}),v.jsx("div",{className:"border-t border-gray-200 dark:border-gray-800 my-8"}),v.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400",children:[v.jsx("div",{className:"flex items-center space-x-2 mb-2",children:v.jsx("span",{children:"Made with ❤️ by Parth Bhodia"})}),v.jsxs("p",{children:["© ",new Date().getFullYear()," Parth Bhodia. All rights reserved."]}),v.jsxs("div",{className:"mt-4 md:mt-0 flex items-center space-x-4",children:[v.jsx("a",{href:"mailto:parthbhodia08@gmail.com",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Contact"}),v.jsx("span",{className:"text-gray-300 dark:text-gray-700",children:"•"}),v.jsx("a",{href:"tel:+14439294371",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"+1 443-929-4371"}),v.jsx("span",{className:"text-gray-300 dark:text-gray-700",children:"•"}),v.jsx("a",{href:"https://linkedin.com/in/parthbhodia",target:"_blank",rel:"noopener noreferrer",className:"hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"LinkedIn"})]})]})]})})]})}function g3(){const[t,e]=N.useState(!1),n=[{name:"JavaScript",level:95},{name:"TypeScript",level:90},{name:"Vue.js",level:90},{name:"React",level:85},{name:"Node.js",level:90},{name:"Python",level:85},{name:"HTML/CSS/SASS",level:95},{name:"Java (Spring Boot)",level:80},{name:"AWS",level:85},{name:"PostgreSQL",level:80},{name:"MongoDB",level:75},{name:"GraphQL",level:75}];return v.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden",children:[v.jsx(QS,{}),v.jsx("nav",{className:"bg-white/90 dark:bg-black/90 backdrop-blur-sm sticky top-0 z-50 shadow-md",children:v.jsxs("div",{className:"container mx-auto px-4 py-4",children:[v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsx(gt,{href:"/",children:v.jsx("div",{className:"text-xl font-bold bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text cursor-pointer",children:"Parth Bhodia"})}),v.jsxs("div",{className:"hidden md:flex items-center space-x-6",children:[v.jsx(gt,{href:"/#companies",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Companies"}),v.jsx(gt,{href:"/#about",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"About"}),v.jsx(gt,{href:"/skills",className:"font-medium text-green-600 dark:text-green-400",children:"Skills"}),v.jsx(gt,{href:"/#projects",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Projects"}),v.jsx(gt,{href:"/#contact",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Contact"}),v.jsx(ws,{})]}),v.jsxs("div",{className:"md:hidden flex items-center space-x-4",children:[v.jsx(ws,{}),v.jsx("button",{onClick:()=>e(!t),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors",children:t?v.jsx(la,{size:24}):v.jsx(Mm,{size:24})})]})]}),t&&v.jsx("div",{className:"md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700",children:v.jsxs("div",{className:"flex flex-col space-y-4 pt-4",children:[v.jsx(gt,{href:"/#companies",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>e(!1),children:"Companies"}),v.jsx(gt,{href:"/#about",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>e(!1),children:"About"}),v.jsx(gt,{href:"/skills",className:"font-medium text-green-600 dark:text-green-400",onClick:()=>e(!1),children:"Skills"}),v.jsx(gt,{href:"/#projects",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>e(!1),children:"Projects"}),v.jsx(gt,{href:"/#contact",className:"font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>e(!1),children:"Contact"})]})})]})}),v.jsx("section",{className:"py-20 relative z-10",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsxs("div",{className:"text-center mb-12",children:[v.jsx("h1",{className:"text-4xl font-bold mb-4",children:v.jsx("span",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"Technical Skills"})}),v.jsx("p",{className:"text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"Here's a comprehensive overview of my technical expertise and proficiency levels across various technologies and frameworks."})]}),v.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",children:n.map((r,i)=>v.jsxs("div",{className:"bg-white/90 dark:bg-black/40 p-6 rounded-lg shadow-lg backdrop-blur-sm transform transition-all duration-500 hover:scale-105",children:[v.jsxs("div",{className:"flex justify-between items-center mb-3",children:[v.jsx("span",{className:"font-semibold text-lg",children:r.name}),v.jsxs("span",{className:"text-sm font-medium text-green-600 dark:text-green-400",children:[r.level,"%"]})]}),v.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3",children:v.jsx("div",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 h-3 rounded-full transition-all duration-1000",style:{width:`${r.level}%`}})})]},i))}),v.jsx("div",{className:"text-center mt-12",children:v.jsx(gt,{href:"/",children:v.jsx("button",{className:"bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300",children:"Back to Home"})})})]})})]})}var fa=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Us=typeof window>"u"||"Deno"in globalThis;function On(){}function v3(t,e){return typeof t=="function"?t(e):t}function sp(t){return typeof t=="number"&&t>=0&&t!==1/0}function JS(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Do(t,e){return typeof t=="function"?t(e):t}function sr(t,e){return typeof t=="function"?t(e):t}function Tv(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:a}=t;if(o){if(r){if(e.queryHash!==Lm(o,e.options))return!1}else if(!ml(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||i&&i!==e.state.fetchStatus||s&&!s(e))}function Cv(t,e){const{exact:n,status:r,predicate:i,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(ks(e.options.mutationKey)!==ks(s))return!1}else if(!ml(e.options.mutationKey,s))return!1}return!(r&&e.state.status!==r||i&&!i(e))}function Lm(t,e){return((e==null?void 0:e.queryKeyHashFn)||ks)(t)}function ks(t){return JSON.stringify(t,(e,n)=>op(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function ml(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!ml(t[n],e[n])):!1}function eM(t,e){if(t===e)return t;const n=Av(t)&&Av(e);if(n||op(t)&&op(e)){const r=n?t:Object.keys(t),i=r.length,s=n?e:Object.keys(e),o=s.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const u=n?c:s[c];(!n&&r.includes(u)||n)&&t[u]===void 0&&e[u]===void 0?(a[u]=void 0,l++):(a[u]=eM(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&l++)}return i===o&&l===i?t:a}return e}function bu(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function Av(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function op(t){if(!Rv(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!Rv(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Rv(t){return Object.prototype.toString.call(t)==="[object Object]"}function x3(t){return new Promise(e=>{setTimeout(e,t)})}function ap(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?eM(t,e):e}function y3(t,e,n=0){const r=[...t,e];return n&&r.length>n?r.slice(1):r}function _3(t,e,n=0){const r=[e,...t];return n&&r.length>n?r.slice(0,-1):r}var Im=Symbol();function tM(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Im?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var ps,yi,Lo,Ov,S3=(Ov=class extends fa{constructor(){super();Re(this,ps);Re(this,yi);Re(this,Lo);me(this,Lo,e=>{if(!Us&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){L(this,yi)||this.setEventListener(L(this,Lo))}onUnsubscribe(){var e;this.hasListeners()||((e=L(this,yi))==null||e.call(this),me(this,yi,void 0))}setEventListener(e){var n;me(this,Lo,e),(n=L(this,yi))==null||n.call(this),me(this,yi,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){L(this,ps)!==e&&(me(this,ps,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof L(this,ps)=="boolean"?L(this,ps):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},ps=new WeakMap,yi=new WeakMap,Lo=new WeakMap,Ov),Um=new S3,Io,_i,Uo,Bv,M3=(Bv=class extends fa{constructor(){super();Re(this,Io,!0);Re(this,_i);Re(this,Uo);me(this,Uo,e=>{if(!Us&&window.addEventListener){const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){L(this,_i)||this.setEventListener(L(this,Uo))}onUnsubscribe(){var e;this.hasListeners()||((e=L(this,_i))==null||e.call(this),me(this,_i,void 0))}setEventListener(e){var n;me(this,Uo,e),(n=L(this,_i))==null||n.call(this),me(this,_i,e(this.setOnline.bind(this)))}setOnline(e){L(this,Io)!==e&&(me(this,Io,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return L(this,Io)}},Io=new WeakMap,_i=new WeakMap,Uo=new WeakMap,Bv),Tu=new M3;function lp(){let t,e;const n=new Promise((i,s)=>{t=i,e=s});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),t(i)},n.reject=i=>{r({status:"rejected",reason:i}),e(i)},n}function E3(t){return Math.min(1e3*2**t,3e4)}function nM(t){return(t??"online")==="online"?Tu.isOnline():!0}var rM=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function vf(t){return t instanceof rM}function iM(t){let e=!1,n=0,r=!1,i;const s=lp(),o=g=>{var p;r||(h(new rM(g)),(p=t.abort)==null||p.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>Um.isFocused()&&(t.networkMode==="always"||Tu.isOnline())&&t.canRun(),u=()=>nM(t.networkMode)&&t.canRun(),f=g=>{var p;r||(r=!0,(p=t.onSuccess)==null||p.call(t,g),i==null||i(),s.resolve(g))},h=g=>{var p;r||(r=!0,(p=t.onError)==null||p.call(t,g),i==null||i(),s.reject(g))},m=()=>new Promise(g=>{var p;i=d=>{(r||c())&&g(d)},(p=t.onPause)==null||p.call(t)}).then(()=>{var g;i=void 0,r||(g=t.onContinue)==null||g.call(t)}),x=()=>{if(r)return;let g;const p=n===0?t.initialPromise:void 0;try{g=p??t.fn()}catch(d){g=Promise.reject(d)}Promise.resolve(g).then(f).catch(d=>{var C;if(r)return;const y=t.retry??(Us?0:3),_=t.retryDelay??E3,S=typeof _=="function"?_(n,d):_,A=y===!0||typeof y=="number"&&n<y||typeof y=="function"&&y(n,d);if(e||!A){h(d);return}n++,(C=t.onFail)==null||C.call(t,n,d),x3(S).then(()=>c()?void 0:m()).then(()=>{e?h(d):x()})})};return{promise:s,cancel:o,continue:()=>(i==null||i(),s),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?x():m().then(x),s)}}function w3(){let t=[],e=0,n=a=>{a()},r=a=>{a()},i=a=>setTimeout(a,0);const s=a=>{e?t.push(a):i(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&i(()=>{r(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{s(()=>{a(...l)})},schedule:s,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{i=a}}}var kt=w3(),ms,zv,sM=(zv=class{constructor(){Re(this,ms)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),sp(this.gcTime)&&me(this,ms,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Us?1/0:5*60*1e3))}clearGcTimeout(){L(this,ms)&&(clearTimeout(L(this,ms)),me(this,ms,void 0))}},ms=new WeakMap,zv),ko,Fo,Fn,Jt,gl,gs,tr,Ir,Hv,b3=(Hv=class extends sM{constructor(e){super();Re(this,tr);Re(this,ko);Re(this,Fo);Re(this,Fn);Re(this,Jt);Re(this,gl);Re(this,gs);me(this,gs,!1),me(this,gl,e.defaultOptions),this.setOptions(e.options),this.observers=[],me(this,Fn,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,me(this,ko,T3(this.options)),this.state=e.state??L(this,ko),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=L(this,Jt))==null?void 0:e.promise}setOptions(e){this.options={...L(this,gl),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&L(this,Fn).remove(this)}setData(e,n){const r=ap(this.state.data,e,this.options);return ze(this,tr,Ir).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){ze(this,tr,Ir).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var r,i;const n=(r=L(this,Jt))==null?void 0:r.promise;return(i=L(this,Jt))==null||i.cancel(e),n?n.then(On).catch(On):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(L(this,ko))}isActive(){return this.observers.some(e=>sr(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Im||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!JS(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(r=>r.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=L(this,Jt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(r=>r.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=L(this,Jt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),L(this,Fn).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(L(this,Jt)&&(L(this,gs)?L(this,Jt).cancel({revert:!0}):L(this,Jt).cancelRetry()),this.scheduleGc()),L(this,Fn).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||ze(this,tr,Ir).call(this,{type:"invalidate"})}fetch(e,n){var l,c,u;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(L(this,Jt))return L(this,Jt).continueRetry(),L(this,Jt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const f=this.observers.find(h=>h.options.queryFn);f&&this.setOptions(f.options)}const r=new AbortController,i=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(me(this,gs,!0),r.signal)})},s=()=>{const f=tM(this.options,n),h={queryKey:this.queryKey,meta:this.meta};return i(h),me(this,gs,!1),this.options.persister?this.options.persister(f,h,this):f(h)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:s};i(o),(l=this.options.behavior)==null||l.onFetch(o,this),me(this,Fo,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&ze(this,tr,Ir).call(this,{type:"fetch",meta:(u=o.fetchOptions)==null?void 0:u.meta});const a=f=>{var h,m,x,g;vf(f)&&f.silent||ze(this,tr,Ir).call(this,{type:"error",error:f}),vf(f)||((m=(h=L(this,Fn).config).onError)==null||m.call(h,f,this),(g=(x=L(this,Fn).config).onSettled)==null||g.call(x,this.state.data,f,this)),this.scheduleGc()};return me(this,Jt,iM({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:r.abort.bind(r),onSuccess:f=>{var h,m,x,g;if(f===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(f)}catch(p){a(p);return}(m=(h=L(this,Fn).config).onSuccess)==null||m.call(h,f,this),(g=(x=L(this,Fn).config).onSettled)==null||g.call(x,f,this.state.error,this),this.scheduleGc()},onError:a,onFail:(f,h)=>{ze(this,tr,Ir).call(this,{type:"failed",failureCount:f,error:h})},onPause:()=>{ze(this,tr,Ir).call(this,{type:"pause"})},onContinue:()=>{ze(this,tr,Ir).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),L(this,Jt).start()}},ko=new WeakMap,Fo=new WeakMap,Fn=new WeakMap,Jt=new WeakMap,gl=new WeakMap,gs=new WeakMap,tr=new WeakSet,Ir=function(e){const n=r=>{switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...oM(r.data,this.options),fetchMeta:e.meta??null};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=e.error;return vf(i)&&i.revert&&L(this,Fo)?{...L(this,Fo),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),kt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),L(this,Fn).notify({query:this,type:"updated",action:e})})},Hv);function oM(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:nM(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function T3(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var gr,Vv,C3=(Vv=class extends fa{constructor(e={}){super();Re(this,gr);this.config=e,me(this,gr,new Map)}build(e,n,r){const i=n.queryKey,s=n.queryHash??Lm(i,n);let o=this.get(s);return o||(o=new b3({cache:this,queryKey:i,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(o)),o}add(e){L(this,gr).has(e.queryHash)||(L(this,gr).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=L(this,gr).get(e.queryHash);n&&(e.destroy(),n===e&&L(this,gr).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){kt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return L(this,gr).get(e)}getAll(){return[...L(this,gr).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Tv(n,r))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(r=>Tv(e,r)):n}notify(e){kt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){kt.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){kt.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},gr=new WeakMap,Vv),vr,sn,vs,xr,hi,Gv,A3=(Gv=class extends sM{constructor(e){super();Re(this,xr);Re(this,vr);Re(this,sn);Re(this,vs);this.mutationId=e.mutationId,me(this,sn,e.mutationCache),me(this,vr,[]),this.state=e.state||aM(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){L(this,vr).includes(e)||(L(this,vr).push(e),this.clearGcTimeout(),L(this,sn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){me(this,vr,L(this,vr).filter(n=>n!==e)),this.scheduleGc(),L(this,sn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){L(this,vr).length||(this.state.status==="pending"?this.scheduleGc():L(this,sn).remove(this))}continue(){var e;return((e=L(this,vs))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var i,s,o,a,l,c,u,f,h,m,x,g,p,d,y,_,S,A,C,T;me(this,vs,iM({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(P,w)=>{ze(this,xr,hi).call(this,{type:"failed",failureCount:P,error:w})},onPause:()=>{ze(this,xr,hi).call(this,{type:"pause"})},onContinue:()=>{ze(this,xr,hi).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>L(this,sn).canRun(this)}));const n=this.state.status==="pending",r=!L(this,vs).canStart();try{if(!n){ze(this,xr,hi).call(this,{type:"pending",variables:e,isPaused:r}),await((s=(i=L(this,sn).config).onMutate)==null?void 0:s.call(i,e,this));const w=await((a=(o=this.options).onMutate)==null?void 0:a.call(o,e));w!==this.state.context&&ze(this,xr,hi).call(this,{type:"pending",context:w,variables:e,isPaused:r})}const P=await L(this,vs).start();return await((c=(l=L(this,sn).config).onSuccess)==null?void 0:c.call(l,P,e,this.state.context,this)),await((f=(u=this.options).onSuccess)==null?void 0:f.call(u,P,e,this.state.context)),await((m=(h=L(this,sn).config).onSettled)==null?void 0:m.call(h,P,null,this.state.variables,this.state.context,this)),await((g=(x=this.options).onSettled)==null?void 0:g.call(x,P,null,e,this.state.context)),ze(this,xr,hi).call(this,{type:"success",data:P}),P}catch(P){try{throw await((d=(p=L(this,sn).config).onError)==null?void 0:d.call(p,P,e,this.state.context,this)),await((_=(y=this.options).onError)==null?void 0:_.call(y,P,e,this.state.context)),await((A=(S=L(this,sn).config).onSettled)==null?void 0:A.call(S,void 0,P,this.state.variables,this.state.context,this)),await((T=(C=this.options).onSettled)==null?void 0:T.call(C,void 0,P,e,this.state.context)),P}finally{ze(this,xr,hi).call(this,{type:"error",error:P})}}finally{L(this,sn).runNext(this)}}},vr=new WeakMap,sn=new WeakMap,vs=new WeakMap,xr=new WeakSet,hi=function(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),kt.batch(()=>{L(this,vr).forEach(r=>{r.onMutationUpdate(e)}),L(this,sn).notify({mutation:this,type:"updated",action:e})})},Gv);function aM(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Tn,vl,jv,R3=(jv=class extends fa{constructor(e={}){super();Re(this,Tn);Re(this,vl);this.config=e,me(this,Tn,new Map),me(this,vl,Date.now())}build(e,n,r){const i=new A3({mutationCache:this,mutationId:++Ll(this,vl)._,options:e.defaultMutationOptions(n),state:r});return this.add(i),i}add(e){const n=Tc(e),r=L(this,Tn).get(n)??[];r.push(e),L(this,Tn).set(n,r),this.notify({type:"added",mutation:e})}remove(e){var r;const n=Tc(e);if(L(this,Tn).has(n)){const i=(r=L(this,Tn).get(n))==null?void 0:r.filter(s=>s!==e);i&&(i.length===0?L(this,Tn).delete(n):L(this,Tn).set(n,i))}this.notify({type:"removed",mutation:e})}canRun(e){var r;const n=(r=L(this,Tn).get(Tc(e)))==null?void 0:r.find(i=>i.state.status==="pending");return!n||n===e}runNext(e){var r;const n=(r=L(this,Tn).get(Tc(e)))==null?void 0:r.find(i=>i!==e&&i.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){kt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...L(this,Tn).values()].flat()}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Cv(n,r))}findAll(e={}){return this.getAll().filter(n=>Cv(e,n))}notify(e){kt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return kt.batch(()=>Promise.all(e.map(n=>n.continue().catch(On))))}},Tn=new WeakMap,vl=new WeakMap,jv);function Tc(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function Pv(t){return{onFetch:(e,n)=>{var u,f,h,m,x;const r=e.options,i=(h=(f=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:f.fetchMore)==null?void 0:h.direction,s=((m=e.state.data)==null?void 0:m.pages)||[],o=((x=e.state.data)==null?void 0:x.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let g=!1;const p=_=>{Object.defineProperty(_,"signal",{enumerable:!0,get:()=>(e.signal.aborted?g=!0:e.signal.addEventListener("abort",()=>{g=!0}),e.signal)})},d=tM(e.options,e.fetchOptions),y=async(_,S,A)=>{if(g)return Promise.reject();if(S==null&&_.pages.length)return Promise.resolve(_);const C={queryKey:e.queryKey,pageParam:S,direction:A?"backward":"forward",meta:e.options.meta};p(C);const T=await d(C),{maxPages:P}=e.options,w=A?_3:y3;return{pages:w(_.pages,T,P),pageParams:w(_.pageParams,S,P)}};if(i&&s.length){const _=i==="backward",S=_?P3:Nv,A={pages:s,pageParams:o},C=S(r,A);a=await y(A,C,_)}else{const _=t??s.length;do{const S=l===0?o[0]??r.initialPageParam:Nv(r,a);if(l>0&&S==null)break;a=await y(a,S),l++}while(l<_)}return a};e.options.persister?e.fetchFn=()=>{var g,p;return(p=(g=e.options).persister)==null?void 0:p.call(g,c,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function Nv(t,{pages:e,pageParams:n}){const r=e.length-1;return e.length>0?t.getNextPageParam(e[r],e,n[r],n):void 0}function P3(t,{pages:e,pageParams:n}){var r;return e.length>0?(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,n[0],n):void 0}var Tt,Si,Mi,Oo,Bo,Ei,zo,Ho,Wv,N3=(Wv=class{constructor(t={}){Re(this,Tt);Re(this,Si);Re(this,Mi);Re(this,Oo);Re(this,Bo);Re(this,Ei);Re(this,zo);Re(this,Ho);me(this,Tt,t.queryCache||new C3),me(this,Si,t.mutationCache||new R3),me(this,Mi,t.defaultOptions||{}),me(this,Oo,new Map),me(this,Bo,new Map),me(this,Ei,0)}mount(){Ll(this,Ei)._++,L(this,Ei)===1&&(me(this,zo,Um.subscribe(async t=>{t&&(await this.resumePausedMutations(),L(this,Tt).onFocus())})),me(this,Ho,Tu.subscribe(async t=>{t&&(await this.resumePausedMutations(),L(this,Tt).onOnline())})))}unmount(){var t,e;Ll(this,Ei)._--,L(this,Ei)===0&&((t=L(this,zo))==null||t.call(this),me(this,zo,void 0),(e=L(this,Ho))==null||e.call(this),me(this,Ho,void 0))}isFetching(t){return L(this,Tt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return L(this,Si).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=L(this,Tt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const n=this.defaultQueryOptions(t),r=L(this,Tt).build(this,n);return t.revalidateIfStale&&r.isStaleByTime(Do(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return L(this,Tt).findAll(t).map(({queryKey:e,state:n})=>{const r=n.data;return[e,r]})}setQueryData(t,e,n){const r=this.defaultQueryOptions({queryKey:t}),i=L(this,Tt).get(r.queryHash),s=i==null?void 0:i.state.data,o=v3(e,s);if(o!==void 0)return L(this,Tt).build(this,r).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return kt.batch(()=>L(this,Tt).findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=L(this,Tt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=L(this,Tt);kt.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=L(this,Tt),r={type:"active",...t};return kt.batch(()=>(n.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries(r,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},r=kt.batch(()=>L(this,Tt).findAll(t).map(i=>i.cancel(n)));return Promise.all(r).then(On).catch(On)}invalidateQueries(t={},e={}){return kt.batch(()=>{if(L(this,Tt).findAll(t).forEach(r=>{r.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},r=kt.batch(()=>L(this,Tt).findAll(t).filter(i=>!i.isDisabled()).map(i=>{let s=i.fetch(void 0,n);return n.throwOnError||(s=s.catch(On)),i.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(r).then(On)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=L(this,Tt).build(this,e);return n.isStaleByTime(Do(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(On).catch(On)}fetchInfiniteQuery(t){return t.behavior=Pv(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(On).catch(On)}ensureInfiniteQueryData(t){return t.behavior=Pv(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return Tu.isOnline()?L(this,Si).resumePausedMutations():Promise.resolve()}getQueryCache(){return L(this,Tt)}getMutationCache(){return L(this,Si)}getDefaultOptions(){return L(this,Mi)}setDefaultOptions(t){me(this,Mi,t)}setQueryDefaults(t,e){L(this,Oo).set(ks(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...L(this,Oo).values()];let n={};return e.forEach(r=>{ml(t,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(t,e){L(this,Bo).set(ks(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...L(this,Bo).values()];let n={};return e.forEach(r=>{ml(t,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...L(this,Mi).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Lm(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===Im&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...L(this,Mi).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){L(this,Tt).clear(),L(this,Si).clear()}},Tt=new WeakMap,Si=new WeakMap,Mi=new WeakMap,Oo=new WeakMap,Bo=new WeakMap,Ei=new WeakMap,zo=new WeakMap,Ho=new WeakMap,Wv),hn,Ge,xl,on,xs,Vo,wi,yr,yl,Go,jo,ys,_s,bi,Wo,it,Fa,cp,up,dp,fp,hp,pp,mp,lM,Xv,D3=(Xv=class extends fa{constructor(e,n){super();Re(this,it);Re(this,hn);Re(this,Ge);Re(this,xl);Re(this,on);Re(this,xs);Re(this,Vo);Re(this,wi);Re(this,yr);Re(this,yl);Re(this,Go);Re(this,jo);Re(this,ys);Re(this,_s);Re(this,bi);Re(this,Wo,new Set);this.options=n,me(this,hn,e),me(this,yr,null),me(this,wi,lp()),this.options.experimental_prefetchInRender||L(this,wi).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(L(this,Ge).addObserver(this),Dv(L(this,Ge),this.options)?ze(this,it,Fa).call(this):this.updateResult(),ze(this,it,fp).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return gp(L(this,Ge),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return gp(L(this,Ge),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,ze(this,it,hp).call(this),ze(this,it,pp).call(this),L(this,Ge).removeObserver(this)}setOptions(e,n){const r=this.options,i=L(this,Ge);if(this.options=L(this,hn).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof sr(this.options.enabled,L(this,Ge))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");ze(this,it,mp).call(this),L(this,Ge).setOptions(this.options),r._defaulted&&!bu(this.options,r)&&L(this,hn).getQueryCache().notify({type:"observerOptionsUpdated",query:L(this,Ge),observer:this});const s=this.hasListeners();s&&Lv(L(this,Ge),i,this.options,r)&&ze(this,it,Fa).call(this),this.updateResult(n),s&&(L(this,Ge)!==i||sr(this.options.enabled,L(this,Ge))!==sr(r.enabled,L(this,Ge))||Do(this.options.staleTime,L(this,Ge))!==Do(r.staleTime,L(this,Ge)))&&ze(this,it,cp).call(this);const o=ze(this,it,up).call(this);s&&(L(this,Ge)!==i||sr(this.options.enabled,L(this,Ge))!==sr(r.enabled,L(this,Ge))||o!==L(this,bi))&&ze(this,it,dp).call(this,o)}getOptimisticResult(e){const n=L(this,hn).getQueryCache().build(L(this,hn),e),r=this.createResult(n,e);return I3(this,r)&&(me(this,on,r),me(this,Vo,this.options),me(this,xs,L(this,Ge).state)),r}getCurrentResult(){return L(this,on)}trackResult(e,n){const r={};return Object.keys(e).forEach(i=>{Object.defineProperty(r,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),n==null||n(i),e[i])})}),r}trackProp(e){L(this,Wo).add(e)}getCurrentQuery(){return L(this,Ge)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const n=L(this,hn).defaultQueryOptions(e),r=L(this,hn).getQueryCache().build(L(this,hn),n);return r.fetch().then(()=>this.createResult(r,n))}fetch(e){return ze(this,it,Fa).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),L(this,on)))}createResult(e,n){var P;const r=L(this,Ge),i=this.options,s=L(this,on),o=L(this,xs),a=L(this,Vo),c=e!==r?e.state:L(this,xl),{state:u}=e;let f={...u},h=!1,m;if(n._optimisticResults){const w=this.hasListeners(),M=!w&&Dv(e,n),D=w&&Lv(e,r,n,i);(M||D)&&(f={...f,...oM(u.data,e.options)}),n._optimisticResults==="isRestoring"&&(f.fetchStatus="idle")}let{error:x,errorUpdatedAt:g,status:p}=f;if(n.select&&f.data!==void 0)if(s&&f.data===(o==null?void 0:o.data)&&n.select===L(this,yl))m=L(this,Go);else try{me(this,yl,n.select),m=n.select(f.data),m=ap(s==null?void 0:s.data,m,n),me(this,Go,m),me(this,yr,null)}catch(w){me(this,yr,w)}else m=f.data;if(n.placeholderData!==void 0&&m===void 0&&p==="pending"){let w;if(s!=null&&s.isPlaceholderData&&n.placeholderData===(a==null?void 0:a.placeholderData))w=s.data;else if(w=typeof n.placeholderData=="function"?n.placeholderData((P=L(this,jo))==null?void 0:P.state.data,L(this,jo)):n.placeholderData,n.select&&w!==void 0)try{w=n.select(w),me(this,yr,null)}catch(M){me(this,yr,M)}w!==void 0&&(p="success",m=ap(s==null?void 0:s.data,w,n),h=!0)}L(this,yr)&&(x=L(this,yr),m=L(this,Go),g=Date.now(),p="error");const d=f.fetchStatus==="fetching",y=p==="pending",_=p==="error",S=y&&d,A=m!==void 0,T={status:p,fetchStatus:f.fetchStatus,isPending:y,isSuccess:p==="success",isError:_,isInitialLoading:S,isLoading:S,data:m,dataUpdatedAt:f.dataUpdatedAt,error:x,errorUpdatedAt:g,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>c.dataUpdateCount||f.errorUpdateCount>c.errorUpdateCount,isFetching:d,isRefetching:d&&!y,isLoadingError:_&&!A,isPaused:f.fetchStatus==="paused",isPlaceholderData:h,isRefetchError:_&&A,isStale:km(e,n),refetch:this.refetch,promise:L(this,wi)};if(this.options.experimental_prefetchInRender){const w=U=>{T.status==="error"?U.reject(T.error):T.data!==void 0&&U.resolve(T.data)},M=()=>{const U=me(this,wi,T.promise=lp());w(U)},D=L(this,wi);switch(D.status){case"pending":e.queryHash===r.queryHash&&w(D);break;case"fulfilled":(T.status==="error"||T.data!==D.value)&&M();break;case"rejected":(T.status!=="error"||T.error!==D.reason)&&M();break}}return T}updateResult(e){const n=L(this,on),r=this.createResult(L(this,Ge),this.options);if(me(this,xs,L(this,Ge).state),me(this,Vo,this.options),L(this,xs).data!==void 0&&me(this,jo,L(this,Ge)),bu(r,n))return;me(this,on,r);const i={},s=()=>{if(!n)return!0;const{notifyOnChangeProps:o}=this.options,a=typeof o=="function"?o():o;if(a==="all"||!a&&!L(this,Wo).size)return!0;const l=new Set(a??L(this,Wo));return this.options.throwOnError&&l.add("error"),Object.keys(L(this,on)).some(c=>{const u=c;return L(this,on)[u]!==n[u]&&l.has(u)})};(e==null?void 0:e.listeners)!==!1&&s()&&(i.listeners=!0),ze(this,it,lM).call(this,{...i,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&ze(this,it,fp).call(this)}},hn=new WeakMap,Ge=new WeakMap,xl=new WeakMap,on=new WeakMap,xs=new WeakMap,Vo=new WeakMap,wi=new WeakMap,yr=new WeakMap,yl=new WeakMap,Go=new WeakMap,jo=new WeakMap,ys=new WeakMap,_s=new WeakMap,bi=new WeakMap,Wo=new WeakMap,it=new WeakSet,Fa=function(e){ze(this,it,mp).call(this);let n=L(this,Ge).fetch(this.options,e);return e!=null&&e.throwOnError||(n=n.catch(On)),n},cp=function(){ze(this,it,hp).call(this);const e=Do(this.options.staleTime,L(this,Ge));if(Us||L(this,on).isStale||!sp(e))return;const r=JS(L(this,on).dataUpdatedAt,e)+1;me(this,ys,setTimeout(()=>{L(this,on).isStale||this.updateResult()},r))},up=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(L(this,Ge)):this.options.refetchInterval)??!1},dp=function(e){ze(this,it,pp).call(this),me(this,bi,e),!(Us||sr(this.options.enabled,L(this,Ge))===!1||!sp(L(this,bi))||L(this,bi)===0)&&me(this,_s,setInterval(()=>{(this.options.refetchIntervalInBackground||Um.isFocused())&&ze(this,it,Fa).call(this)},L(this,bi)))},fp=function(){ze(this,it,cp).call(this),ze(this,it,dp).call(this,ze(this,it,up).call(this))},hp=function(){L(this,ys)&&(clearTimeout(L(this,ys)),me(this,ys,void 0))},pp=function(){L(this,_s)&&(clearInterval(L(this,_s)),me(this,_s,void 0))},mp=function(){const e=L(this,hn).getQueryCache().build(L(this,hn),this.options);if(e===L(this,Ge))return;const n=L(this,Ge);me(this,Ge,e),me(this,xl,e.state),this.hasListeners()&&(n==null||n.removeObserver(this),e.addObserver(this))},lM=function(e){kt.batch(()=>{e.listeners&&this.listeners.forEach(n=>{n(L(this,on))}),L(this,hn).getQueryCache().notify({query:L(this,Ge),type:"observerResultsUpdated"})})},Xv);function L3(t,e){return sr(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Dv(t,e){return L3(t,e)||t.state.data!==void 0&&gp(t,e,e.refetchOnMount)}function gp(t,e,n){if(sr(e.enabled,t)!==!1){const r=typeof n=="function"?n(t):n;return r==="always"||r!==!1&&km(t,e)}return!1}function Lv(t,e,n,r){return(t!==e||sr(r.enabled,t)===!1)&&(!n.suspense||t.state.status!=="error")&&km(t,n)}function km(t,e){return sr(e.enabled,t)!==!1&&t.isStaleByTime(Do(e.staleTime,t))}function I3(t,e){return!bu(t.getCurrentResult(),e)}var Ti,Ci,pn,Fr,Xr,$c,vp,qv,U3=(qv=class extends fa{constructor(n,r){super();Re(this,Xr);Re(this,Ti);Re(this,Ci);Re(this,pn);Re(this,Fr);me(this,Ti,n),this.setOptions(r),this.bindMethods(),ze(this,Xr,$c).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(n){var i;const r=this.options;this.options=L(this,Ti).defaultMutationOptions(n),bu(this.options,r)||L(this,Ti).getMutationCache().notify({type:"observerOptionsUpdated",mutation:L(this,pn),observer:this}),r!=null&&r.mutationKey&&this.options.mutationKey&&ks(r.mutationKey)!==ks(this.options.mutationKey)?this.reset():((i=L(this,pn))==null?void 0:i.state.status)==="pending"&&L(this,pn).setOptions(this.options)}onUnsubscribe(){var n;this.hasListeners()||(n=L(this,pn))==null||n.removeObserver(this)}onMutationUpdate(n){ze(this,Xr,$c).call(this),ze(this,Xr,vp).call(this,n)}getCurrentResult(){return L(this,Ci)}reset(){var n;(n=L(this,pn))==null||n.removeObserver(this),me(this,pn,void 0),ze(this,Xr,$c).call(this),ze(this,Xr,vp).call(this)}mutate(n,r){var i;return me(this,Fr,r),(i=L(this,pn))==null||i.removeObserver(this),me(this,pn,L(this,Ti).getMutationCache().build(L(this,Ti),this.options)),L(this,pn).addObserver(this),L(this,pn).execute(n)}},Ti=new WeakMap,Ci=new WeakMap,pn=new WeakMap,Fr=new WeakMap,Xr=new WeakSet,$c=function(){var r;const n=((r=L(this,pn))==null?void 0:r.state)??aM();me(this,Ci,{...n,isPending:n.status==="pending",isSuccess:n.status==="success",isError:n.status==="error",isIdle:n.status==="idle",mutate:this.mutate,reset:this.reset})},vp=function(n){kt.batch(()=>{var r,i,s,o,a,l,c,u;if(L(this,Fr)&&this.hasListeners()){const f=L(this,Ci).variables,h=L(this,Ci).context;(n==null?void 0:n.type)==="success"?((i=(r=L(this,Fr)).onSuccess)==null||i.call(r,n.data,f,h),(o=(s=L(this,Fr)).onSettled)==null||o.call(s,n.data,null,f,h)):(n==null?void 0:n.type)==="error"&&((l=(a=L(this,Fr)).onError)==null||l.call(a,n.error,f,h),(u=(c=L(this,Fr)).onSettled)==null||u.call(c,void 0,n.error,f,h))}this.listeners.forEach(f=>{f(L(this,Ci))})})},qv),cM=N.createContext(void 0),Ju=t=>{const e=N.useContext(cM);if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},k3=({client:t,children:e})=>(N.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),v.jsx(cM.Provider,{value:t,children:e})),uM=N.createContext(!1),F3=()=>N.useContext(uM);uM.Provider;function O3(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var B3=N.createContext(O3()),z3=()=>N.useContext(B3);function dM(t,e){return typeof t=="function"?t(...e):!!t}function xp(){}var H3=(t,e)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&(e.isReset()||(t.retryOnMount=!1))},V3=t=>{N.useEffect(()=>{t.clearReset()},[t])},G3=({result:t,errorResetBoundary:e,throwOnError:n,query:r})=>t.isError&&!e.isReset()&&!t.isFetching&&r&&dM(n,[t.error,r]),j3=t=>{t.suspense&&(t.staleTime===void 0&&(t.staleTime=1e3),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3)))},W3=(t,e)=>t.isLoading&&t.isFetching&&!e,X3=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,Iv=(t,e,n)=>e.fetchOptimistic(t).catch(()=>{n.clearReset()});function q3(t,e,n){var u,f,h,m,x;const r=Ju(),i=F3(),s=z3(),o=r.defaultQueryOptions(t);(f=(u=r.getDefaultOptions().queries)==null?void 0:u._experimental_beforeQuery)==null||f.call(u,o),o._optimisticResults=i?"isRestoring":"optimistic",j3(o),H3(o,s),V3(s);const a=!r.getQueryCache().get(o.queryHash),[l]=N.useState(()=>new e(r,o)),c=l.getOptimisticResult(o);if(N.useSyncExternalStore(N.useCallback(g=>{const p=i?xp:l.subscribe(kt.batchCalls(g));return l.updateResult(),p},[l,i]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),N.useEffect(()=>{l.setOptions(o,{listeners:!1})},[o,l]),X3(o,c))throw Iv(o,l,s);if(G3({result:c,errorResetBoundary:s,throwOnError:o.throwOnError,query:r.getQueryCache().get(o.queryHash)}))throw c.error;if((m=(h=r.getDefaultOptions().queries)==null?void 0:h._experimental_afterQuery)==null||m.call(h,o,c),o.experimental_prefetchInRender&&!Us&&W3(c,i)){const g=a?Iv(o,l,s):(x=r.getQueryCache().get(o.queryHash))==null?void 0:x.promise;g==null||g.catch(xp).finally(()=>{l.updateResult()})}return o.notifyOnChangeProps?c:l.trackResult(c)}function Cu(t,e){return q3(t,D3)}function Fm(t,e){const n=Ju(),[r]=N.useState(()=>new U3(n,t));N.useEffect(()=>{r.setOptions(t)},[r,t]);const i=N.useSyncExternalStore(N.useCallback(o=>r.subscribe(kt.batchCalls(o)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),s=N.useCallback((o,a)=>{r.mutate(o,a).catch(xp)},[r]);if(i.error&&dM(r.options.throwOnError,[i.error]))throw i.error;return{...i,mutate:s,mutateAsync:i.mutate}}const $3=()=>{let t=localStorage.getItem("user-fingerprint");return t||(t="fp-"+Math.random().toString(36).substr(2,9)+"-"+Date.now(),localStorage.setItem("user-fingerprint",t)),t};function xf({blogPostId:t,className:e="",size:n=24}){const[r,i]=N.useState(!1),[s,o]=N.useState(0),a=$3(),l=Ju(),{data:c}=Cu({queryKey:["blog-stats",t],queryFn:()=>fetch(`/api/blog/${t}/stats`).then(x=>x.json())}),{data:u}=Cu({queryKey:["user-interaction",a,t],queryFn:()=>fetch(`/api/blog/${t}/user/${a}`).then(x=>x.json())}),f=(u==null?void 0:u.hasLiked)||!1;N.useEffect(()=>{o((c==null?void 0:c.hearts)||0)},[c]);const h=Fm({mutationFn:()=>fetch(`/api/blog/${t}/heart`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userFingerprint:a})}).then(x=>x.json()),onSuccess:x=>{o(x.totalHearts),l.invalidateQueries({queryKey:["blog-stats",t]}),l.invalidateQueries({queryKey:["user-interaction",a,t]})}}),m=()=>{i(!0),h.mutate(),setTimeout(()=>i(!1),600)};return v.jsxs("button",{onClick:m,className:`
        relative inline-flex items-center justify-center p-2 rounded-full 
        transition-all duration-200 ease-in-out transform hover:scale-110
        ${f?"text-red-500 hover:text-red-600":"text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400"}
        ${r?"animate-pulse":""}
        ${e}
      `,disabled:h.isPending,children:[v.jsx(_0,{size:n,className:`
          transition-all duration-300 ease-in-out
          ${f?"fill-current":"fill-none"}
          ${r?"animate-bounce":""}
        `}),r&&f&&v.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(3)].map((x,g)=>v.jsx(_0,{size:12,className:`
                absolute text-red-500 fill-current animate-float-heart
                ${g===0?"left-1/2 top-0":""}
                ${g===1?"left-1/4 top-1/4":""}
                ${g===2?"right-1/4 top-1/4":""}
              `,style:{animationDelay:`${g*100}ms`,animationDuration:"1s"}},g))}),r&&v.jsx("div",{className:"absolute inset-0 rounded-full bg-red-400 opacity-30 animate-ping"}),s>0&&v.jsx("span",{className:"absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",children:s>99?"99+":s})]})}function yf({blogPostId:t,className:e="",size:n=16}){const[r,i]=N.useState(!1),{data:s}=Cu({queryKey:["blog-stats",t],queryFn:()=>fetch(`/api/blog/${t}/stats`).then(c=>c.json())}),o=(s==null?void 0:s.views)||0,a=Fm({mutationFn:()=>fetch(`/api/blog/${t}/view`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then(c=>c.json())});N.useEffect(()=>{const c=`viewed-${t}`;!sessionStorage.getItem(c)&&!r&&(a.mutate(),sessionStorage.setItem(c,"true"),i(!0))},[t,a,r]);const l=c=>c>=1e6?`${(c/1e6).toFixed(1)}M`:c>=1e3?`${(c/1e3).toFixed(1)}K`:c.toString();return v.jsxs("div",{className:`inline-flex items-center space-x-1 text-gray-500 dark:text-gray-400 ${e}`,children:[v.jsx(sT,{size:n}),v.jsx("span",{className:"text-sm font-medium",children:l(o)})]})}function fM(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=fM(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Y3(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=fM(t))&&(r&&(r+=" "),r+=e);return r}const Uv=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,kv=Y3,K3=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return kv(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:s}=e,o=Object.keys(i).map(c=>{const u=n==null?void 0:n[c],f=s==null?void 0:s[c];if(u===null)return null;const h=Uv(u)||Uv(f);return i[c][h]}),a=n&&Object.entries(n).reduce((c,u)=>{let[f,h]=u;return h===void 0||(c[f]=h),c},{}),l=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((c,u)=>{let{class:f,className:h,...m}=u;return Object.entries(m).every(x=>{let[g,p]=x;return Array.isArray(p)?p.includes({...s,...a}[g]):{...s,...a}[g]===p})?[...c,f,h]:c},[]);return kv(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)},Q3=K3("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),rr=N.forwardRef(({className:t,variant:e,size:n,asChild:r=!1,...i},s)=>{const o=r?Wu:"button";return v.jsx(o,{className:zs(Q3({variant:e,size:n,className:t})),ref:s,...i})});rr.displayName="Button";const yp=N.forwardRef(({className:t,...e},n)=>v.jsx("textarea",{className:zs("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...e}));yp.displayName="Textarea";function Z3({isOpen:t,onClose:e,onAuth:n}){const[r,i]=N.useState(!1);if(!t)return null;const s=async()=>{i(!0);try{const a=window.open("https://accounts.google.com/oauth/authorize?client_id=your-google-client-id&redirect_uri="+encodeURIComponent(window.location.origin+"/auth/google/callback")+"&response_type=code&scope=openid profile email","google-auth","width=500,height=600"),l=prompt("Enter your name:")||"Anonymous User",c=prompt("Enter your email:")||"user@example.com",u={name:l,email:c};localStorage.setItem("authUser",JSON.stringify(u)),n(u),e()}catch(a){console.error("Google auth failed:",a)}finally{i(!1)}},o=async()=>{i(!0);try{const a=window.open("https://github.com/login/oauth/authorize?client_id=your-github-client-id&redirect_uri="+encodeURIComponent(window.location.origin+"/auth/github/callback")+"&scope=user:email","github-auth","width=500,height=600"),l=prompt("Enter your GitHub username:")||"github-user",c=prompt("Enter your email:")||"user@github.com",u={name:l,email:c};localStorage.setItem("authUser",JSON.stringify(u)),n(u),e()}catch(a){console.error("GitHub auth failed:",a)}finally{i(!1)}};return v.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[v.jsx("div",{className:"fixed inset-0 bg-black/50",onClick:e}),v.jsxs("div",{className:"relative bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4 shadow-xl",children:[v.jsxs("div",{className:"flex items-center justify-between mb-6",children:[v.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Sign in to comment"}),v.jsx("button",{onClick:e,className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",children:v.jsx(la,{size:20})})]}),v.jsxs("div",{className:"space-y-4",children:[v.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-4",children:"Choose your preferred method to sign in and start commenting"}),v.jsxs(rr,{onClick:s,disabled:r,className:"w-full flex items-center justify-center space-x-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600",variant:"outline",children:[v.jsx(iT,{size:20,className:"text-red-500"}),v.jsx("span",{children:"Continue with Google"})]}),v.jsxs(rr,{onClick:o,disabled:r,className:"w-full flex items-center justify-center space-x-3 bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600",children:[v.jsx(aT,{size:20}),v.jsx("span",{children:"Continue with GitHub"})]})]}),v.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-4 text-center",children:"We'll only use your information to display your name with comments"})]})]})}function J3({blogPostId:t,userFingerprint:e}){const[n,r]=N.useState(!1),[i,s]=N.useState(null),[o,a]=N.useState(!1),[l,c]=N.useState(null),[u,f]=N.useState({content:""}),h=Ju();N.useEffect(()=>{const C=localStorage.getItem("authUser");C&&c(JSON.parse(C))},[]);const{data:m=[],isLoading:x}=Cu({queryKey:["comments",t],queryFn:()=>fetch(`/api/blog/${t}/comments`).then(C=>C.json())}),g=Fm({mutationFn:C=>fetch(`/api/blog/${t}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({authorName:(l==null?void 0:l.name)||"Anonymous",authorEmail:(l==null?void 0:l.email)||"anonymous@example.com",content:C.content,parentId:C.parentId,userFingerprint:e})}).then(T=>T.json()),onSuccess:()=>{h.invalidateQueries({queryKey:["comments",t]}),f({content:""}),r(!1),s(null)}}),d=(C=>{const T=new Map,P=[];return C.forEach(w=>{T.set(w.id,{...w,replies:[]})}),C.forEach(w=>{const M=T.get(w.id);if(w.parent_id){const D=T.get(w.parent_id);D&&D.replies.push(M)}else P.push(M)}),P})(m),y=(C,T)=>{if(C.preventDefault(),!l){a(!0);return}u.content&&g.mutate({content:u.content,parentId:T})},_=C=>{c(C)},S=()=>{localStorage.removeItem("authUser"),c(null),r(!1),s(null)},A=({comment:C,depth:T=0})=>v.jsx("div",{className:`${T>0?"ml-8 mt-4":"mb-6"}`,children:v.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-lg p-4",children:[v.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[v.jsx(mT,{size:16,className:"text-gray-500"}),v.jsx("span",{className:"font-medium text-sm text-gray-900 dark:text-white",children:C.author_name}),v.jsx("span",{className:"text-xs text-gray-500",children:new Date(C.created_at).toLocaleDateString()})]}),v.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:C.content}),v.jsxs("button",{onClick:()=>s(i===C.id?null:C.id),className:"text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center space-x-1",children:[v.jsx(hT,{size:14}),v.jsx("span",{children:"Reply"})]}),i===C.id&&v.jsxs("form",{onSubmit:P=>y(P,C.id),className:"mt-4 space-y-3",children:[l&&v.jsxs("div",{className:"flex items-center space-x-2 mb-3",children:[l.avatar&&v.jsx("img",{src:l.avatar,alt:l.name,className:"w-6 h-6 rounded-full"}),v.jsxs("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Replying as ",l.name]})]}),v.jsx(yp,{placeholder:l?"Write your reply...":"Sign in to reply...",value:u.content,onChange:P=>f(w=>({...w,content:P.target.value})),rows:3,required:!0,disabled:!l}),v.jsxs("div",{className:"flex space-x-2",children:[v.jsx(rr,{type:"submit",size:"sm",disabled:g.isPending||!l,children:g.isPending?"Posting...":"Post Reply"}),v.jsx(rr,{type:"button",variant:"outline",size:"sm",onClick:()=>s(null),children:"Cancel"})]})]}),C.replies&&C.replies.length>0&&v.jsx("div",{className:"mt-4",children:C.replies.map(P=>v.jsx(A,{comment:P,depth:T+1},P.id))})]})});return x?v.jsx("div",{className:"mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg",children:v.jsxs("div",{className:"animate-pulse",children:[v.jsx("div",{className:"h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mb-4"}),v.jsxs("div",{className:"space-y-3",children:[v.jsx("div",{className:"h-3 bg-gray-300 dark:bg-gray-600 rounded"}),v.jsx("div",{className:"h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6"})]})]})}):v.jsxs("div",{className:"mt-8",children:[v.jsxs("div",{className:"flex items-center justify-between mb-6",children:[v.jsxs("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2",children:[v.jsx(fT,{size:20}),v.jsxs("span",{children:["Comments (",m.length,")"]})]}),v.jsx("div",{className:"flex items-center space-x-3",children:l?v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"flex items-center space-x-2",children:[l.avatar&&v.jsx("img",{src:l.avatar,alt:l.name,className:"w-6 h-6 rounded-full"}),v.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:l.name})]}),v.jsx(rr,{onClick:()=>r(!n),variant:"outline",children:"Add Comment"}),v.jsx(rr,{onClick:S,variant:"ghost",size:"sm",children:v.jsx(dT,{size:16})})]}):v.jsx(rr,{onClick:()=>a(!0),variant:"outline",children:"Sign in to Comment"})})]}),n&&l&&v.jsxs("form",{onSubmit:C=>y(C),className:"mb-8 space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg",children:[v.jsxs("div",{className:"flex items-center space-x-2 mb-4",children:[l.avatar&&v.jsx("img",{src:l.avatar,alt:l.name,className:"w-8 h-8 rounded-full"}),v.jsxs("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Commenting as ",l.name]})]}),v.jsx(yp,{placeholder:"Share your thoughts...",value:u.content,onChange:C=>f(T=>({...T,content:C.target.value})),rows:4,required:!0}),v.jsxs("div",{className:"flex space-x-2",children:[v.jsx(rr,{type:"submit",disabled:g.isPending,children:g.isPending?"Posting...":"Post Comment"}),v.jsx(rr,{type:"button",variant:"outline",onClick:()=>r(!1),children:"Cancel"})]})]}),v.jsx("div",{className:"space-y-4",children:d.length===0?v.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-center py-8",children:"No comments yet. Be the first to share your thoughts!"}):d.map(C=>v.jsx(A,{comment:C},C.id))}),v.jsx(Z3,{isOpen:o,onClose:()=>a(!1),onAuth:_})]})}function eL({title:t,excerpt:e,url:n,className:r=""}){const[i,s]=N.useState(!1),[o,a]=N.useState(!1),l=[{name:"Facebook",icon:oT,color:"hover:bg-blue-600 hover:text-white",action:()=>{window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(n)}`,"_blank")}},{name:"Twitter",icon:la,color:"hover:bg-black hover:text-white",action:()=>{const u=`${t} - ${e}`;window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(u)}&url=${encodeURIComponent(n)}`,"_blank")}},{name:"LinkedIn",icon:uT,color:"hover:bg-blue-700 hover:text-white",action:()=>{window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(n)}`,"_blank")}},{name:"Copy Link",icon:cT,color:"hover:bg-gray-600 hover:text-white",action:async()=>{try{await navigator.clipboard.writeText(n),a(!0),setTimeout(()=>a(!1),2e3)}catch{const f=document.createElement("textarea");f.value=n,document.body.appendChild(f),f.select(),document.execCommand("copy"),document.body.removeChild(f),a(!0),setTimeout(()=>a(!1),2e3)}s(!1)}}],c=async()=>{try{navigator.share?await navigator.share({title:t,text:e,url:n}):s(!i)}catch(u){u.name!=="AbortError"&&s(!i)}};return v.jsxs("div",{className:"relative",children:[v.jsxs(rr,{onClick:c,className:`flex items-center space-x-2 ${r}`,variant:"outline",children:[v.jsx(pT,{size:16}),v.jsx("span",{className:"text-sm font-medium",children:o?"Copied!":"Share"})]}),i&&v.jsx("div",{className:"absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 z-50 min-w-[200px]",children:v.jsx("div",{className:"space-y-1",children:l.map(u=>v.jsxs("button",{onClick:u.action,className:`w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md transition-colors ${u.color}`,children:[v.jsx(u.icon,{size:16}),v.jsx("span",{children:u.name})]},u.name))})}),i&&v.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>s(!1)})]})}const tL=[{id:"aws-architecture-scalable-applications",title:"Building Scalable Applications with AWS Architecture",excerpt:"Explore how to design and implement robust, scalable applications using AWS services including Lambda, API Gateway, RDS, and S3.",content:`
# Building Scalable Applications with AWS Architecture

## Introduction

In today's rapidly evolving digital landscape, building scalable applications is crucial for business success. Amazon Web Services (AWS) provides a comprehensive suite of tools and services that enable developers to create robust, scalable applications with ease.

## Core AWS Services for Scalability

### 1. AWS Lambda - Serverless Computing
AWS Lambda allows you to run code without provisioning or managing servers. This serverless approach automatically scales your application based on demand.

**Benefits:**
- Automatic scaling
- Pay-per-use pricing model
- Zero server management
- Built-in fault tolerance

### 2. Amazon API Gateway
API Gateway acts as a front door for applications to access data, business logic, or functionality from backend services.

**Key Features:**
- Traffic management
- Authorization and access control
- Monitoring and analytics
- Request/response transformation

### 3. Amazon RDS - Managed Database Service
RDS simplifies database administration tasks while providing high availability and security.

**Advantages:**
- Automated backups
- Multi-AZ deployments
- Read replicas for scaling
- Automated patching

### 4. Amazon S3 - Object Storage
S3 provides secure, durable, and highly scalable object storage for any amount of data.

## Architecture Diagram

\`\`\`
[Client] → [CloudFront] → [API Gateway] → [Lambda] → [RDS/DynamoDB]
                                      ↓
                                    [S3]
\`\`\`

## Best Practices

1. **Use Auto Scaling Groups** for EC2 instances
2. **Implement caching** with ElastiCache
3. **Monitor with CloudWatch** for performance insights
4. **Use IAM roles** for secure access management
5. **Design for failure** with multiple availability zones

## Implementation Example

Here's a basic serverless architecture setup:

\`\`\`javascript
// Lambda function example
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            message: 'Hello from Lambda!',
            data: processRequest(event)
        }),
    };
    return response;
};
\`\`\`

## Conclusion

AWS provides the tools necessary to build applications that can handle millions of users while maintaining high performance and availability. The key is to leverage managed services, implement proper monitoring, and design with scalability in mind from the beginning.
    `,date:"2025-01-15",readTime:"8 min read",category:"Cloud Architecture",image:"/blog-aws.jpg",tags:["AWS","Serverless","Scalability","Lambda","API Gateway"]},{id:"generative-ai-modern-development",title:"Integrating Generative AI into Modern Development Workflows",excerpt:"Learn how to leverage AI tools like GPT, Copilot, and Claude to enhance productivity and code quality in software development.",content:`
# Integrating Generative AI into Modern Development Workflows

## The AI Revolution in Software Development

Generative AI has transformed how we approach software development, offering unprecedented assistance in coding, debugging, and architectural decisions.

## Key AI Tools for Developers

### 1. GitHub Copilot
An AI pair programmer that suggests code completions and entire functions.

**Use Cases:**
- Code completion and suggestions
- Function generation from comments
- Test case creation
- Documentation writing

### 2. ChatGPT/Claude for Development
Large language models excel at explaining complex concepts and solving programming challenges.

**Applications:**
- Code review and optimization
- Architecture planning
- Bug fixing assistance
- Learning new technologies

### 3. AI-Powered Code Analysis
Tools like DeepCode and CodeGuru provide intelligent code analysis.

## AI Integration Architecture

\`\`\`
[Developer] → [AI Assistant] → [IDE] → [Version Control]
                     ↓
              [Code Analysis] → [Automated Testing]
                     ↓
              [Deployment Pipeline]
\`\`\`

## Best Practices for AI-Assisted Development

### 1. Code Quality Assurance
- Always review AI-generated code
- Implement comprehensive testing
- Use static analysis tools
- Maintain coding standards

### 2. Security Considerations
- Validate AI suggestions for security vulnerabilities
- Avoid exposing sensitive data to AI models
- Implement proper access controls
- Regular security audits

### 3. Productivity Enhancement
- Use AI for boilerplate code generation
- Leverage AI for documentation
- Automate repetitive tasks
- Focus on complex problem-solving

## Implementation Example

\`\`\`python
# AI-assisted API development
from openai import OpenAI
import asyncio

class AICodeAssistant:
    def __init__(self, api_key):
        self.client = OpenAI(api_key=api_key)
    
    async def generate_function(self, description):
        response = await self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a senior software engineer."},
                {"role": "user", "content": f"Generate a Python function that {description}"}
            ]
        )
        return response.choices[0].message.content

# Usage example
assistant = AICodeAssistant("your-api-key")
code = await assistant.generate_function("validates email addresses using regex")
\`\`\`

## Future Outlook

The integration of AI in development workflows will continue to evolve, with emerging trends including:

- Automated code refactoring
- Intelligent bug prediction
- AI-driven architectural decisions
- Natural language to code translation

## Conclusion

Generative AI is not replacing developers but augmenting their capabilities. The key is to use these tools strategically while maintaining code quality, security, and human oversight in the development process.
    `,date:"2025-01-12",readTime:"10 min read",category:"Artificial Intelligence",image:"/blog-ai.jpg",tags:["AI","GPT","Machine Learning","Development","Productivity"]},{id:"microservices-vs-macroservices",title:"Microservices vs Macroservices: Choosing the Right Architecture",excerpt:"A comprehensive comparison of microservices and macroservices architectures, including when to use each approach and implementation strategies.",content:`
# Microservices vs Macroservices: Choosing the Right Architecture

## Introduction

The debate between microservices and macroservices (also known as modular monoliths) continues to shape modern software architecture decisions. Understanding when to use each approach is crucial for building successful applications.

## Understanding the Architectures

### Microservices Architecture
A collection of loosely coupled, independently deployable services that communicate over well-defined APIs.

**Characteristics:**
- Single responsibility per service
- Independent deployment
- Technology diversity
- Distributed data management

### Macroservices/Modular Monolith
A single deployable unit with well-defined internal module boundaries and clear separation of concerns.

**Characteristics:**
- Modular internal structure
- Single deployment unit
- Shared database
- In-process communication

## Architecture Comparison

### Microservices Architecture Diagram
\`\`\`
[API Gateway] → [Auth Service] → [Database A]
              → [User Service] → [Database B]
              → [Order Service] → [Database C]
              → [Payment Service] → [Database D]
\`\`\`

### Macroservices Architecture Diagram
\`\`\`
[API Layer]
     ↓
[Business Logic Layer]
├── Auth Module
├── User Module
├── Order Module
└── Payment Module
     ↓
[Shared Database]
\`\`\`

## Detailed Comparison

| Aspect | Microservices | Macroservices |
|--------|---------------|---------------|
| **Complexity** | High operational complexity | Lower operational complexity |
| **Scalability** | Independent scaling per service | Scale entire application |
| **Development Speed** | Slower initial setup, faster feature development | Faster initial setup |
| **Team Structure** | Requires multiple specialized teams | Can work with smaller teams |
| **Technology Stack** | Multiple technologies possible | Single technology stack |
| **Data Consistency** | Eventual consistency | Strong consistency |
| **Testing** | Complex integration testing | Simpler testing strategy |
| **Monitoring** | Distributed tracing required | Centralized monitoring |

## When to Choose Microservices

### Ideal Scenarios:
1. **Large, complex applications** with distinct business domains
2. **Multiple development teams** working independently
3. **Different scalability requirements** for different components
4. **Technology diversity** needs across services
5. **High availability requirements** with fault isolation

### Example Use Case:
E-commerce platform with separate teams for user management, inventory, orders, payments, and recommendations.

\`\`\`javascript
// Microservice example - Order Service
class OrderService {
    async createOrder(orderData) {
        // Validate order
        const validation = await this.userService.validateUser(orderData.userId);
        
        // Check inventory
        const inventory = await this.inventoryService.checkAvailability(orderData.items);
        
        // Process payment
        const payment = await this.paymentService.processPayment(orderData.payment);
        
        // Create order
        return await this.orderRepository.create({
            ...orderData,
            status: 'confirmed'
        });
    }
}
\`\`\`

## When to Choose Macroservices

### Ideal Scenarios:
1. **Small to medium applications** with clear module boundaries
2. **Limited development team** size
3. **Simple deployment requirements**
4. **Strong consistency needs**
5. **Rapid prototyping and development**

### Example Use Case:
Content management system with modules for authentication, content creation, user management, and analytics.

\`\`\`javascript
// Macroservice example - Modular structure
class ApplicationService {
    constructor() {
        this.authModule = new AuthModule();
        this.userModule = new UserModule();
        this.contentModule = new ContentModule();
        this.analyticsModule = new AnalyticsModule();
    }
    
    async createContent(userId, contentData) {
        // All modules can share the same database transaction
        const transaction = await this.database.beginTransaction();
        
        try {
            const user = await this.userModule.getUser(userId, transaction);
            const content = await this.contentModule.create(contentData, transaction);
            await this.analyticsModule.trackContentCreation(userId, content.id, transaction);
            
            await transaction.commit();
            return content;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
}
\`\`\`

## Migration Strategies

### From Monolith to Microservices
1. **Identify service boundaries** using Domain-Driven Design
2. **Extract services incrementally** (Strangler Fig pattern)
3. **Implement API contracts** between services
4. **Set up monitoring and logging**
5. **Establish CI/CD pipelines** for each service

### From Microservices to Macroservices
1. **Identify tightly coupled services**
2. **Merge related services** into modules
3. **Consolidate databases** where appropriate
4. **Simplify communication patterns**
5. **Reduce operational overhead**

## Best Practices

### For Microservices:
- Implement proper service discovery
- Use circuit breakers for resilience
- Establish comprehensive monitoring
- Design for failure scenarios
- Maintain service contracts

### For Macroservices:
- Maintain clear module boundaries
- Implement proper dependency injection
- Use feature flags for gradual rollouts
- Establish module interfaces
- Keep modules loosely coupled

## Conclusion

The choice between microservices and macroservices depends on your specific context, team size, application complexity, and organizational needs. Start with a macroservice approach for simplicity, and consider migrating to microservices when complexity and scale justify the additional operational overhead.

Remember: Architecture should serve your business goals, not the other way around.
    `,date:"2025-01-10",readTime:"12 min read",category:"Software Architecture",image:"/blog-architecture.jpg",tags:["Microservices","Architecture","Monolith","Design Patterns","Scalability"]}];function Fv(){const[t,e]=N.useState(null),[n,r]=N.useState(!1),[i,s]=N.useState("");return N.useEffect(()=>{const o=()=>{const c=document.createElement("canvas").getContext("2d");return c&&(c.textBaseline="top",c.font="14px Arial",c.fillText("User fingerprint",2,2)),`fp-${Math.random().toString(36).substr(2,9)}-${Date.now()}`};let a=localStorage.getItem("userFingerprint");a||(a=o(),localStorage.setItem("userFingerprint",a)),s(a)},[]),t?v.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[v.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800",children:v.jsx("div",{className:"container mx-auto px-4 py-4",children:v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsxs(gt,{href:"/",className:"flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300",children:[v.jsx(lT,{className:"h-5 w-5"}),v.jsx("span",{children:"Home"})]}),v.jsx("span",{className:"text-gray-400",children:"/"}),v.jsx("button",{onClick:()=>e(null),className:"text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300",children:"Blog"})]}),v.jsx(ws,{})]})})}),v.jsx("article",{className:"pt-20 pb-12",children:v.jsxs("div",{className:"container mx-auto px-4 max-w-4xl",children:[v.jsxs("header",{className:"mb-8",children:[v.jsx("button",{onClick:()=>e(null),className:"inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-6",children:"← Back to Blog"}),v.jsx("div",{className:"mb-4",children:v.jsx("span",{className:"inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium",children:t.category})}),v.jsx("h1",{className:"text-4xl font-bold mb-4 text-gray-900 dark:text-white",children:t.title}),v.jsxs("div",{className:"flex items-center justify-between mb-6",children:[v.jsxs("div",{className:"flex items-center space-x-4 text-gray-600 dark:text-gray-400",children:[v.jsxs("div",{className:"flex items-center space-x-1",children:[v.jsx(x0,{className:"h-4 w-4"}),v.jsx("span",{children:new Date(t.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})]}),v.jsxs("div",{className:"flex items-center space-x-1",children:[v.jsx(y0,{className:"h-4 w-4"}),v.jsx("span",{children:t.readTime})]}),v.jsx(yf,{blogPostId:t.id})]}),v.jsx(xf,{blogPostId:t.id,size:24})]}),v.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:t.tags.map((o,a)=>v.jsxs("span",{className:"px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm",children:["#",o]},a))})]}),v.jsx("div",{className:"prose prose-lg dark:prose-invert max-w-none",children:v.jsx("div",{dangerouslySetInnerHTML:{__html:t.content.replace(/\n/g,"<br />").replace(/```([^`]+)```/g,'<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code>$1</code></pre>').replace(/`([^`]+)`/g,'<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">$1</code>')}})}),v.jsxs("div",{className:"mt-12 pt-8 border-t border-gray-200 dark:border-gray-700",children:[v.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4",children:[v.jsxs("div",{className:"flex items-center space-x-6",children:[v.jsx(xf,{blogPostId:t.id,className:"flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",size:20}),v.jsx(yf,{blogPostId:t.id,className:"flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800",size:16})]}),v.jsx("div",{className:"flex items-center space-x-4",children:v.jsx(eL,{title:t.title,excerpt:t.excerpt,url:window.location.href,className:"px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"})})]}),v.jsx("div",{className:"mt-6 text-center text-sm text-gray-600 dark:text-gray-400",children:v.jsx("p",{children:"Enjoyed this post? Share your thoughts or connect with me!"})})]}),i&&v.jsx(J3,{blogPostId:t.id,userFingerprint:i})]})})]}):v.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[v.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800",children:v.jsxs("div",{className:"container mx-auto px-4 py-4",children:[v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{className:"flex items-center space-x-8",children:[v.jsxs(gt,{href:"/",className:"flex items-center space-x-2",children:[v.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 flex items-center justify-center text-sm text-white font-bold",children:"PB"}),v.jsx("span",{className:"text-xl font-semibold bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"Parth Bhodia"})]}),v.jsxs("div",{className:"hidden md:flex items-center space-x-6",children:[v.jsx(gt,{href:"/",className:"text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Home"}),v.jsx(gt,{href:"/skills",className:"text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Skills"}),v.jsx("span",{className:"text-green-600 dark:text-green-400 font-medium",children:"Blog"})]})]}),v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx(ws,{}),v.jsx("button",{onClick:()=>r(!n),className:"md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors",children:n?v.jsx(la,{className:"h-6 w-6"}):v.jsx(Mm,{className:"h-6 w-6"})})]})]}),n&&v.jsx("div",{className:"md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700",children:v.jsxs("div",{className:"flex flex-col space-y-4",children:[v.jsx(gt,{href:"/",className:"text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Home"}),v.jsx(gt,{href:"/skills",className:"text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors",children:"Skills"}),v.jsx("span",{className:"text-green-600 dark:text-green-400 font-medium",children:"Blog"})]})})]})}),v.jsx("section",{className:"pt-24 pb-12 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800",children:v.jsxs("div",{className:"container mx-auto px-4 text-center",children:[v.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:v.jsx("span",{className:"bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-600 text-transparent bg-clip-text",children:"Tech Blog"})}),v.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Insights on cloud architecture, AI integration, and modern software development practices"})]})}),v.jsx("section",{className:"py-12",children:v.jsx("div",{className:"container mx-auto px-4",children:v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:tL.map(o=>v.jsxs("article",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow",children:[v.jsx("div",{className:"h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center cursor-pointer",onClick:()=>e(o),children:v.jsxs("div",{className:"text-white text-center p-4",children:[v.jsxs("div",{className:"text-6xl mb-2",children:[o.category==="Cloud Architecture"&&"☁️",o.category==="Artificial Intelligence"&&"🤖",o.category==="Software Architecture"&&"🏗️"]}),v.jsx("p",{className:"text-sm opacity-90",children:o.category})]})}),v.jsxs("div",{className:"p-6",children:[v.jsx("div",{className:"mb-3",children:v.jsx("span",{className:"inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium",children:o.category})}),v.jsx("h2",{className:"text-xl font-bold mb-3 text-gray-900 dark:text-white cursor-pointer hover:text-green-600 dark:hover:text-green-400 transition-colors",onClick:()=>e(o),children:o.title}),v.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 cursor-pointer",onClick:()=>e(o),children:o.excerpt}),v.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4",children:[v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsxs("div",{className:"flex items-center space-x-1",children:[v.jsx(x0,{className:"h-4 w-4"}),v.jsx("span",{children:new Date(o.date).toLocaleDateString()})]}),v.jsxs("div",{className:"flex items-center space-x-1",children:[v.jsx(y0,{className:"h-4 w-4"}),v.jsx("span",{children:o.readTime})]})]}),v.jsxs("div",{className:"flex items-center space-x-3",children:[v.jsx(yf,{blogPostId:o.id}),v.jsx("div",{onClick:a=>a.stopPropagation(),children:v.jsx(xf,{blogPostId:o.id,size:20})})]})]}),v.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:o.tags.slice(0,3).map((a,l)=>v.jsxs("span",{className:"px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs",children:["#",a]},l))}),v.jsxs("button",{className:"inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium",onClick:()=>e(o),children:["Read More",v.jsx(rT,{className:"h-4 w-4 ml-1"})]})]})]},o.id))})})})]})}function nL(){return v.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100",children:[v.jsx("div",{className:"text-9xl font-bold text-blue-600 dark:text-blue-500 mb-6",children:"404"}),v.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-center mb-4",children:"Page Not Found"}),v.jsx("p",{className:"text-xl text-center text-gray-600 dark:text-gray-400 max-w-md mb-8",children:"The page you are looking for doesn't exist or has been moved."}),v.jsx(gt,{href:"/",children:v.jsx("a",{className:"px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",children:"Go Back Home"})})]})}function rL(){const[t,e]=N.useState({x:0,y:0}),[n,r]=N.useState(!1),[i,s]=N.useState(!1);return N.useEffect(()=>{const o=u=>{e({x:u.clientX,y:u.clientY}),i||s(!0)},a=u=>{const f=u.target,h=f.tagName==="BUTTON"||f.tagName==="A"||f.closest("button")!==null||f.closest("a")!==null||f.getAttribute("role")==="button"||window.getComputedStyle(f).cursor==="pointer";r(!!h)},l=()=>{s(!1)},c=()=>{s(!0)};return document.addEventListener("mousemove",o),document.addEventListener("mouseover",a),document.addEventListener("mouseleave",l),document.addEventListener("mouseenter",c),()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseover",a),document.removeEventListener("mouseleave",l),document.removeEventListener("mouseenter",c)}},[i]),typeof window<"u"&&"ontouchstart"in window?null:v.jsx("div",{className:`custom-cursor ${n?"hover":""}`,style:{left:`${t.x}px`,top:`${t.y}px`,opacity:i?1:0}})}async function iL(t){if(!t.ok){const e=await t.text()||t.statusText;throw new Error(`${t.status}: ${e}`)}}const sL=({on401:t})=>async({queryKey:e})=>{const n=await fetch(e[0],{credentials:"include"});return t==="returnNull"&&n.status===401?null:(await iL(n),await n.json())},oL=new N3({defaultOptions:{queries:{queryFn:sL({on401:"throw"}),refetchInterval:!1,refetchOnWindowFocus:!1,staleTime:1/0,retry:!1},mutations:{retry:!1}}}),aL=()=>{if(typeof window<"u"){const t=window.localStorage.getItem("theme");if(t)return t}return"dark"};function lL(){return N.useEffect(()=>{const t=aL();document.documentElement.classList.add("dark"),t==="light"&&document.documentElement.classList.remove("dark"),typeof window<"u"&&!window.localStorage.getItem("theme")&&window.localStorage.setItem("theme","dark")},[]),v.jsx(k3,{client:oL,children:v.jsxs("div",{className:"app",children:[v.jsx(rL,{}),v.jsx(ZS,{}),v.jsxs(S1,{children:[v.jsx(Ma,{path:"/",component:m3}),v.jsx(Ma,{path:"/skills",component:g3}),v.jsx(Ma,{path:"/blog",component:Fv}),v.jsx(Ma,{path:"/blog/:slug",component:Fv}),v.jsx(Ma,{component:nL})]})]})})}_f.createRoot(document.getElementById("root")).render(v.jsx(sx.StrictMode,{children:v.jsx(lL,{})}));
