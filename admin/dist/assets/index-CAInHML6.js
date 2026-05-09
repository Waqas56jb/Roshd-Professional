(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function ac(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Hl={exports:{}},nr={},Vl={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gt=Symbol.for("react.element"),rc=Symbol.for("react.portal"),ic=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),lc=Symbol.for("react.profiler"),oc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),cc=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),uc=Symbol.for("react.memo"),mc=Symbol.for("react.lazy"),Ts=Symbol.iterator;function fc(n){return n===null||typeof n!="object"?null:(n=Ts&&n[Ts]||n["@@iterator"],typeof n=="function"?n:null)}var Ul={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jl=Object.assign,Ql={};function at(n,e,t){this.props=n,this.context=e,this.refs=Ql,this.updater=t||Ul}at.prototype.isReactComponent={};at.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};at.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Gl(){}Gl.prototype=at.prototype;function Fi(n,e,t){this.props=n,this.context=e,this.refs=Ql,this.updater=t||Ul}var qi=Fi.prototype=new Gl;qi.constructor=Fi;jl(qi,at.prototype);qi.isPureReactComponent=!0;var Is=Array.isArray,Kl=Object.prototype.hasOwnProperty,Ni={current:null},Wl={key:!0,ref:!0,__self:!0,__source:!0};function Xl(n,e,t){var a,r={},i=null,s=null;if(e!=null)for(a in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(i=""+e.key),e)Kl.call(e,a)&&!Wl.hasOwnProperty(a)&&(r[a]=e[a]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var o=Array(l),c=0;c<l;c++)o[c]=arguments[c+2];r.children=o}if(n&&n.defaultProps)for(a in l=n.defaultProps,l)r[a]===void 0&&(r[a]=l[a]);return{$$typeof:Gt,type:n,key:i,ref:s,props:r,_owner:Ni.current}}function bc(n,e){return{$$typeof:Gt,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function zi(n){return typeof n=="object"&&n!==null&&n.$$typeof===Gt}function gc(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Os=/\/+/g;function xr(n,e){return typeof n=="object"&&n!==null&&n.key!=null?gc(""+n.key):e.toString(36)}function va(n,e,t,a,r){var i=typeof n;(i==="undefined"||i==="boolean")&&(n=null);var s=!1;if(n===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(n.$$typeof){case Gt:case rc:s=!0}}if(s)return s=n,r=r(s),n=a===""?"."+xr(s,0):a,Is(r)?(t="",n!=null&&(t=n.replace(Os,"$&/")+"/"),va(r,e,t,"",function(c){return c})):r!=null&&(zi(r)&&(r=bc(r,t+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Os,"$&/")+"/")+n)),e.push(r)),1;if(s=0,a=a===""?".":a+":",Is(n))for(var l=0;l<n.length;l++){i=n[l];var o=a+xr(i,l);s+=va(i,e,t,o,r)}else if(o=fc(n),typeof o=="function")for(n=o.call(n),l=0;!(i=n.next()).done;)i=i.value,o=a+xr(i,l++),s+=va(i,e,t,o,r);else if(i==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function na(n,e,t){if(n==null)return n;var a=[],r=0;return va(n,a,"","",function(i){return e.call(t,i,r++)}),a}function vc(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var ln={current:null},ha={transition:null},hc={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:ha,ReactCurrentOwner:Ni};function Yl(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:na,forEach:function(n,e,t){na(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return na(n,function(){e++}),e},toArray:function(n){return na(n,function(e){return e})||[]},only:function(n){if(!zi(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};R.Component=at;R.Fragment=ic;R.Profiler=lc;R.PureComponent=Fi;R.StrictMode=sc;R.Suspense=pc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hc;R.act=Yl;R.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var a=jl({},n.props),r=n.key,i=n.ref,s=n._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,s=Ni.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var l=n.type.defaultProps;for(o in e)Kl.call(e,o)&&!Wl.hasOwnProperty(o)&&(a[o]=e[o]===void 0&&l!==void 0?l[o]:e[o])}var o=arguments.length-2;if(o===1)a.children=t;else if(1<o){l=Array(o);for(var c=0;c<o;c++)l[c]=arguments[c+2];a.children=l}return{$$typeof:Gt,type:n.type,key:r,ref:i,props:a,_owner:s}};R.createContext=function(n){return n={$$typeof:dc,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:oc,_context:n},n.Consumer=n};R.createElement=Xl;R.createFactory=function(n){var e=Xl.bind(null,n);return e.type=n,e};R.createRef=function(){return{current:null}};R.forwardRef=function(n){return{$$typeof:cc,render:n}};R.isValidElement=zi;R.lazy=function(n){return{$$typeof:mc,_payload:{_status:-1,_result:n},_init:vc}};R.memo=function(n,e){return{$$typeof:uc,type:n,compare:e===void 0?null:e}};R.startTransition=function(n){var e=ha.transition;ha.transition={};try{n()}finally{ha.transition=e}};R.unstable_act=Yl;R.useCallback=function(n,e){return ln.current.useCallback(n,e)};R.useContext=function(n){return ln.current.useContext(n)};R.useDebugValue=function(){};R.useDeferredValue=function(n){return ln.current.useDeferredValue(n)};R.useEffect=function(n,e){return ln.current.useEffect(n,e)};R.useId=function(){return ln.current.useId()};R.useImperativeHandle=function(n,e,t){return ln.current.useImperativeHandle(n,e,t)};R.useInsertionEffect=function(n,e){return ln.current.useInsertionEffect(n,e)};R.useLayoutEffect=function(n,e){return ln.current.useLayoutEffect(n,e)};R.useMemo=function(n,e){return ln.current.useMemo(n,e)};R.useReducer=function(n,e,t){return ln.current.useReducer(n,e,t)};R.useRef=function(n){return ln.current.useRef(n)};R.useState=function(n){return ln.current.useState(n)};R.useSyncExternalStore=function(n,e,t){return ln.current.useSyncExternalStore(n,e,t)};R.useTransition=function(){return ln.current.useTransition()};R.version="18.3.1";Vl.exports=R;var Rt=Vl.exports;const xc=ac(Rt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc=Rt,Ec=Symbol.for("react.element"),wc=Symbol.for("react.fragment"),kc=Object.prototype.hasOwnProperty,Sc=yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ac={key:!0,ref:!0,__self:!0,__source:!0};function Jl(n,e,t){var a,r={},i=null,s=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(s=e.ref);for(a in e)kc.call(e,a)&&!Ac.hasOwnProperty(a)&&(r[a]=e[a]);if(n&&n.defaultProps)for(a in e=n.defaultProps,e)r[a]===void 0&&(r[a]=e[a]);return{$$typeof:Ec,type:n,key:i,ref:s,props:r,_owner:Sc.current}}nr.Fragment=wc;nr.jsx=Jl;nr.jsxs=Jl;Hl.exports=nr;var Ra=Hl.exports,Zl={exports:{}},hn={},no={exports:{}},eo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(k,_){var D=k.length;k.push(_);n:for(;0<D;){var V=D-1>>>1,K=k[V];if(0<r(K,_))k[V]=_,k[D]=K,D=V;else break n}}function t(k){return k.length===0?null:k[0]}function a(k){if(k.length===0)return null;var _=k[0],D=k.pop();if(D!==_){k[0]=D;n:for(var V=0,K=k.length,Jt=K>>>1;V<Jt;){var be=2*(V+1)-1,hr=k[be],ge=be+1,Zt=k[ge];if(0>r(hr,D))ge<K&&0>r(Zt,hr)?(k[V]=Zt,k[ge]=D,V=ge):(k[V]=hr,k[be]=D,V=be);else if(ge<K&&0>r(Zt,D))k[V]=Zt,k[ge]=D,V=ge;else break n}}return _}function r(k,_){var D=k.sortIndex-_.sortIndex;return D!==0?D:k.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;n.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();n.unstable_now=function(){return s.now()-l}}var o=[],c=[],b=1,f=null,m=3,h=!1,x=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(k){for(var _=t(c);_!==null;){if(_.callback===null)a(c);else if(_.startTime<=k)a(c),_.sortIndex=_.expirationTime,e(o,_);else break;_=t(c)}}function g(k){if(y=!1,u(k),!x)if(t(o)!==null)x=!0,gr(w);else{var _=t(c);_!==null&&vr(g,_.startTime-k)}}function w(k,_){x=!1,y&&(y=!1,p(C),C=-1),h=!0;var D=m;try{for(u(_),f=t(o);f!==null&&(!(f.expirationTime>_)||k&&!Cn());){var V=f.callback;if(typeof V=="function"){f.callback=null,m=f.priorityLevel;var K=V(f.expirationTime<=_);_=n.unstable_now(),typeof K=="function"?f.callback=K:f===t(o)&&a(o),u(_)}else a(o);f=t(o)}if(f!==null)var Jt=!0;else{var be=t(c);be!==null&&vr(g,be.startTime-_),Jt=!1}return Jt}finally{f=null,m=D,h=!1}}var S=!1,A=null,C=-1,H=5,M=-1;function Cn(){return!(n.unstable_now()-M<H)}function st(){if(A!==null){var k=n.unstable_now();M=k;var _=!0;try{_=A(!0,k)}finally{_?lt():(S=!1,A=null)}}else S=!1}var lt;if(typeof d=="function")lt=function(){d(st)};else if(typeof MessageChannel<"u"){var Ls=new MessageChannel,tc=Ls.port2;Ls.port1.onmessage=st,lt=function(){tc.postMessage(null)}}else lt=function(){P(st,0)};function gr(k){A=k,S||(S=!0,lt())}function vr(k,_){C=P(function(){k(n.unstable_now())},_)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(k){k.callback=null},n.unstable_continueExecution=function(){x||h||(x=!0,gr(w))},n.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<k?Math.floor(1e3/k):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(o)},n.unstable_next=function(k){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var D=m;m=_;try{return k()}finally{m=D}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(k,_){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var D=m;m=k;try{return _()}finally{m=D}},n.unstable_scheduleCallback=function(k,_,D){var V=n.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?V+D:V):D=V,k){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=D+K,k={id:b++,callback:_,priorityLevel:k,startTime:D,expirationTime:K,sortIndex:-1},D>V?(k.sortIndex=D,e(c,k),t(o)===null&&k===t(c)&&(y?(p(C),C=-1):y=!0,vr(g,D-V))):(k.sortIndex=K,e(o,k),x||h||(x=!0,gr(w))),k},n.unstable_shouldYield=Cn,n.unstable_wrapCallback=function(k){var _=m;return function(){var D=m;m=_;try{return k.apply(this,arguments)}finally{m=D}}}})(eo);no.exports=eo;var Cc=no.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=Rt,vn=Cc;function v(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var to=new Set,Mt={};function Re(n,e){Xe(n,e),Xe(n+"Capture",e)}function Xe(n,e){for(Mt[n]=e,n=0;n<e.length;n++)to.add(e[n])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qr=Object.prototype.hasOwnProperty,Dc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ps={},$s={};function Rc(n){return Qr.call($s,n)?!0:Qr.call(Ps,n)?!1:Dc.test(n)?$s[n]=!0:(Ps[n]=!0,!1)}function Mc(n,e,t,a){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Bc(n,e,t,a){if(e===null||typeof e>"u"||Mc(n,e,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(n,e,t,a,r,i,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=i,this.removeEmptyString=s}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Z[n]=new on(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Z[e]=new on(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Z[n]=new on(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Z[n]=new on(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Z[n]=new on(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Z[n]=new on(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Z[n]=new on(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Z[n]=new on(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Z[n]=new on(n,5,!1,n.toLowerCase(),null,!1,!1)});var Hi=/[\-:]([a-z])/g;function Vi(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Hi,Vi);Z[e]=new on(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Hi,Vi);Z[e]=new on(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Hi,Vi);Z[e]=new on(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Z[n]=new on(n,1,!1,n.toLowerCase(),null,!1,!1)});Z.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Z[n]=new on(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ui(n,e,t,a){var r=Z.hasOwnProperty(e)?Z[e]:null;(r!==null?r.type!==0:a||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bc(e,t,r,a)&&(t=null),a||r===null?Rc(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,a=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,a?n.setAttributeNS(a,e,t):n.setAttribute(e,t))))}var Kn=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=Symbol.for("react.element"),Le=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),ji=Symbol.for("react.strict_mode"),Gr=Symbol.for("react.profiler"),ao=Symbol.for("react.provider"),ro=Symbol.for("react.context"),Qi=Symbol.for("react.forward_ref"),Kr=Symbol.for("react.suspense"),Wr=Symbol.for("react.suspense_list"),Gi=Symbol.for("react.memo"),Xn=Symbol.for("react.lazy"),io=Symbol.for("react.offscreen"),Fs=Symbol.iterator;function ot(n){return n===null||typeof n!="object"?null:(n=Fs&&n[Fs]||n["@@iterator"],typeof n=="function"?n:null)}var N=Object.assign,yr;function gt(n){if(yr===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);yr=e&&e[1]||""}return`
`+yr+n}var Er=!1;function wr(n,e){if(!n||Er)return"";Er=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var a=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){a=c}n.call(e.prototype)}else{try{throw Error()}catch(c){a=c}n()}}catch(c){if(c&&a&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=a.stack.split(`
`),s=r.length-1,l=i.length-1;1<=s&&0<=l&&r[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(r[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||r[s]!==i[l]){var o=`
`+r[s].replace(" at new "," at ");return n.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",n.displayName)),o}while(1<=s&&0<=l);break}}}finally{Er=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?gt(n):""}function Lc(n){switch(n.tag){case 5:return gt(n.type);case 16:return gt("Lazy");case 13:return gt("Suspense");case 19:return gt("SuspenseList");case 0:case 2:case 15:return n=wr(n.type,!1),n;case 11:return n=wr(n.type.render,!1),n;case 1:return n=wr(n.type,!0),n;default:return""}}function Xr(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Te:return"Fragment";case Le:return"Portal";case Gr:return"Profiler";case ji:return"StrictMode";case Kr:return"Suspense";case Wr:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ro:return(n.displayName||"Context")+".Consumer";case ao:return(n._context.displayName||"Context")+".Provider";case Qi:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Gi:return e=n.displayName||null,e!==null?e:Xr(n.type)||"Memo";case Xn:e=n._payload,n=n._init;try{return Xr(n(e))}catch{}}return null}function Tc(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xr(e);case 8:return e===ji?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function so(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ic(n){var e=so(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),a=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ta(n){n._valueTracker||(n._valueTracker=Ic(n))}function lo(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return n&&(a=so(n)?n.checked?"true":"false":n.value),n=a,n!==t?(e.setValue(n),!0):!1}function Ma(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Yr(n,e){var t=e.checked;return N({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function qs(n,e){var t=e.defaultValue==null?"":e.defaultValue,a=e.checked!=null?e.checked:e.defaultChecked;t=ce(e.value!=null?e.value:t),n._wrapperState={initialChecked:a,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function oo(n,e){e=e.checked,e!=null&&Ui(n,"checked",e,!1)}function Jr(n,e){oo(n,e);var t=ce(e.value),a=e.type;if(t!=null)a==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(a==="submit"||a==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Zr(n,e.type,t):e.hasOwnProperty("defaultValue")&&Zr(n,e.type,ce(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Ns(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var a=e.type;if(!(a!=="submit"&&a!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Zr(n,e,t){(e!=="number"||Ma(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var vt=Array.isArray;function Ue(n,e,t,a){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&a&&(n[t].defaultSelected=!0)}else{for(t=""+ce(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,a&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ni(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(v(91));return N({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function zs(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(v(92));if(vt(t)){if(1<t.length)throw Error(v(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ce(t)}}function co(n,e){var t=ce(e.value),a=ce(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),a!=null&&(n.defaultValue=""+a)}function Hs(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function po(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ei(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?po(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var aa,uo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,a,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,a,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(aa=aa||document.createElement("div"),aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=aa.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Bt(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var yt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(yt).forEach(function(n){Oc.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),yt[e]=yt[n]})});function mo(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||yt.hasOwnProperty(n)&&yt[n]?(""+e).trim():e+"px"}function fo(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var a=t.indexOf("--")===0,r=mo(t,e[t],a);t==="float"&&(t="cssFloat"),a?n.setProperty(t,r):n[t]=r}}var Pc=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ti(n,e){if(e){if(Pc[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(v(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(v(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(v(61))}if(e.style!=null&&typeof e.style!="object")throw Error(v(62))}}function ai(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ri=null;function Ki(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ii=null,je=null,Qe=null;function Vs(n){if(n=Xt(n)){if(typeof ii!="function")throw Error(v(280));var e=n.stateNode;e&&(e=ir(e),ii(n.stateNode,n.type,e))}}function bo(n){je?Qe?Qe.push(n):Qe=[n]:je=n}function go(){if(je){var n=je,e=Qe;if(Qe=je=null,Vs(n),e)for(n=0;n<e.length;n++)Vs(e[n])}}function vo(n,e){return n(e)}function ho(){}var kr=!1;function xo(n,e,t){if(kr)return n(e,t);kr=!0;try{return vo(n,e,t)}finally{kr=!1,(je!==null||Qe!==null)&&(ho(),go())}}function Lt(n,e){var t=n.stateNode;if(t===null)return null;var a=ir(t);if(a===null)return null;t=a[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(v(231,e,typeof t));return t}var si=!1;if(Un)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){si=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{si=!1}function $c(n,e,t,a,r,i,s,l,o){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(b){this.onError(b)}}var Et=!1,Ba=null,La=!1,li=null,Fc={onError:function(n){Et=!0,Ba=n}};function qc(n,e,t,a,r,i,s,l,o){Et=!1,Ba=null,$c.apply(Fc,arguments)}function Nc(n,e,t,a,r,i,s,l,o){if(qc.apply(this,arguments),Et){if(Et){var c=Ba;Et=!1,Ba=null}else throw Error(v(198));La||(La=!0,li=c)}}function Me(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function yo(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Us(n){if(Me(n)!==n)throw Error(v(188))}function zc(n){var e=n.alternate;if(!e){if(e=Me(n),e===null)throw Error(v(188));return e!==n?null:n}for(var t=n,a=e;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return Us(r),n;if(i===a)return Us(r),e;i=i.sibling}throw Error(v(188))}if(t.return!==a.return)t=r,a=i;else{for(var s=!1,l=r.child;l;){if(l===t){s=!0,t=r,a=i;break}if(l===a){s=!0,a=r,t=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===t){s=!0,t=i,a=r;break}if(l===a){s=!0,a=i,t=r;break}l=l.sibling}if(!s)throw Error(v(189))}}if(t.alternate!==a)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?n:e}function Eo(n){return n=zc(n),n!==null?wo(n):null}function wo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=wo(n);if(e!==null)return e;n=n.sibling}return null}var ko=vn.unstable_scheduleCallback,js=vn.unstable_cancelCallback,Hc=vn.unstable_shouldYield,Vc=vn.unstable_requestPaint,U=vn.unstable_now,Uc=vn.unstable_getCurrentPriorityLevel,Wi=vn.unstable_ImmediatePriority,So=vn.unstable_UserBlockingPriority,Ta=vn.unstable_NormalPriority,jc=vn.unstable_LowPriority,Ao=vn.unstable_IdlePriority,er=null,$n=null;function Qc(n){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(er,n,void 0,(n.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:Wc,Gc=Math.log,Kc=Math.LN2;function Wc(n){return n>>>=0,n===0?32:31-(Gc(n)/Kc|0)|0}var ra=64,ia=4194304;function ht(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ia(n,e){var t=n.pendingLanes;if(t===0)return 0;var a=0,r=n.suspendedLanes,i=n.pingedLanes,s=t&268435455;if(s!==0){var l=s&~r;l!==0?a=ht(l):(i&=s,i!==0&&(a=ht(i)))}else s=t&~r,s!==0?a=ht(s):i!==0&&(a=ht(i));if(a===0)return 0;if(e!==0&&e!==a&&!(e&r)&&(r=a&-a,i=e&-e,r>=i||r===16&&(i&4194240)!==0))return e;if(a&4&&(a|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=a;0<e;)t=31-Bn(e),r=1<<t,a|=n[t],e&=~r;return a}function Xc(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yc(n,e){for(var t=n.suspendedLanes,a=n.pingedLanes,r=n.expirationTimes,i=n.pendingLanes;0<i;){var s=31-Bn(i),l=1<<s,o=r[s];o===-1?(!(l&t)||l&a)&&(r[s]=Xc(l,e)):o<=e&&(n.expiredLanes|=l),i&=~l}}function oi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Co(){var n=ra;return ra<<=1,!(ra&4194240)&&(ra=64),n}function Sr(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Kt(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Bn(e),n[e]=t}function Jc(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var a=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Bn(t),i=1<<r;e[r]=0,a[r]=-1,n[r]=-1,t&=~i}}function Xi(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var a=31-Bn(t),r=1<<a;r&e|n[a]&e&&(n[a]|=e),t&=~r}}var L=0;function _o(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Do,Yi,Ro,Mo,Bo,di=!1,sa=[],te=null,ae=null,re=null,Tt=new Map,It=new Map,Jn=[],Zc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qs(n,e){switch(n){case"focusin":case"focusout":te=null;break;case"dragenter":case"dragleave":ae=null;break;case"mouseover":case"mouseout":re=null;break;case"pointerover":case"pointerout":Tt.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":It.delete(e.pointerId)}}function ct(n,e,t,a,r,i){return n===null||n.nativeEvent!==i?(n={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},e!==null&&(e=Xt(e),e!==null&&Yi(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function np(n,e,t,a,r){switch(e){case"focusin":return te=ct(te,n,e,t,a,r),!0;case"dragenter":return ae=ct(ae,n,e,t,a,r),!0;case"mouseover":return re=ct(re,n,e,t,a,r),!0;case"pointerover":var i=r.pointerId;return Tt.set(i,ct(Tt.get(i)||null,n,e,t,a,r)),!0;case"gotpointercapture":return i=r.pointerId,It.set(i,ct(It.get(i)||null,n,e,t,a,r)),!0}return!1}function Lo(n){var e=xe(n.target);if(e!==null){var t=Me(e);if(t!==null){if(e=t.tag,e===13){if(e=yo(t),e!==null){n.blockedOn=e,Bo(n.priority,function(){Ro(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xa(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=ci(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var a=new t.constructor(t.type,t);ri=a,t.target.dispatchEvent(a),ri=null}else return e=Xt(t),e!==null&&Yi(e),n.blockedOn=t,!1;e.shift()}return!0}function Gs(n,e,t){xa(n)&&t.delete(e)}function ep(){di=!1,te!==null&&xa(te)&&(te=null),ae!==null&&xa(ae)&&(ae=null),re!==null&&xa(re)&&(re=null),Tt.forEach(Gs),It.forEach(Gs)}function pt(n,e){n.blockedOn===e&&(n.blockedOn=null,di||(di=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,ep)))}function Ot(n){function e(r){return pt(r,n)}if(0<sa.length){pt(sa[0],n);for(var t=1;t<sa.length;t++){var a=sa[t];a.blockedOn===n&&(a.blockedOn=null)}}for(te!==null&&pt(te,n),ae!==null&&pt(ae,n),re!==null&&pt(re,n),Tt.forEach(e),It.forEach(e),t=0;t<Jn.length;t++)a=Jn[t],a.blockedOn===n&&(a.blockedOn=null);for(;0<Jn.length&&(t=Jn[0],t.blockedOn===null);)Lo(t),t.blockedOn===null&&Jn.shift()}var Ge=Kn.ReactCurrentBatchConfig,Oa=!0;function tp(n,e,t,a){var r=L,i=Ge.transition;Ge.transition=null;try{L=1,Ji(n,e,t,a)}finally{L=r,Ge.transition=i}}function ap(n,e,t,a){var r=L,i=Ge.transition;Ge.transition=null;try{L=4,Ji(n,e,t,a)}finally{L=r,Ge.transition=i}}function Ji(n,e,t,a){if(Oa){var r=ci(n,e,t,a);if(r===null)Ir(n,e,a,Pa,t),Qs(n,a);else if(np(r,n,e,t,a))a.stopPropagation();else if(Qs(n,a),e&4&&-1<Zc.indexOf(n)){for(;r!==null;){var i=Xt(r);if(i!==null&&Do(i),i=ci(n,e,t,a),i===null&&Ir(n,e,a,Pa,t),i===r)break;r=i}r!==null&&a.stopPropagation()}else Ir(n,e,a,null,t)}}var Pa=null;function ci(n,e,t,a){if(Pa=null,n=Ki(a),n=xe(n),n!==null)if(e=Me(n),e===null)n=null;else if(t=e.tag,t===13){if(n=yo(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Pa=n,null}function To(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uc()){case Wi:return 1;case So:return 4;case Ta:case jc:return 16;case Ao:return 536870912;default:return 16}default:return 16}}var ne=null,Zi=null,ya=null;function Io(){if(ya)return ya;var n,e=Zi,t=e.length,a,r="value"in ne?ne.value:ne.textContent,i=r.length;for(n=0;n<t&&e[n]===r[n];n++);var s=t-n;for(a=1;a<=s&&e[t-a]===r[i-a];a++);return ya=r.slice(n,1<a?1-a:void 0)}function Ea(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function la(){return!0}function Ks(){return!1}function xn(n){function e(t,a,r,i,s){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in n)n.hasOwnProperty(l)&&(t=n[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?la:Ks,this.isPropagationStopped=Ks,this}return N(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),e}var rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=xn(rt),Wt=N({},rt,{view:0,detail:0}),rp=xn(Wt),Ar,Cr,ut,tr=N({},Wt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:es,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ut&&(ut&&n.type==="mousemove"?(Ar=n.screenX-ut.screenX,Cr=n.screenY-ut.screenY):Cr=Ar=0,ut=n),Ar)},movementY:function(n){return"movementY"in n?n.movementY:Cr}}),Ws=xn(tr),ip=N({},tr,{dataTransfer:0}),sp=xn(ip),lp=N({},Wt,{relatedTarget:0}),_r=xn(lp),op=N({},rt,{animationName:0,elapsedTime:0,pseudoElement:0}),dp=xn(op),cp=N({},rt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),pp=xn(cp),up=N({},rt,{data:0}),Xs=xn(up),mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gp(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=bp[n])?!!e[n]:!1}function es(){return gp}var vp=N({},Wt,{key:function(n){if(n.key){var e=mp[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ea(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?fp[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:es,charCode:function(n){return n.type==="keypress"?Ea(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ea(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),hp=xn(vp),xp=N({},tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ys=xn(xp),yp=N({},Wt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:es}),Ep=xn(yp),wp=N({},rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),kp=xn(wp),Sp=N({},tr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ap=xn(Sp),Cp=[9,13,27,32],ts=Un&&"CompositionEvent"in window,wt=null;Un&&"documentMode"in document&&(wt=document.documentMode);var _p=Un&&"TextEvent"in window&&!wt,Oo=Un&&(!ts||wt&&8<wt&&11>=wt),Js=" ",Zs=!1;function Po(n,e){switch(n){case"keyup":return Cp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $o(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ie=!1;function Dp(n,e){switch(n){case"compositionend":return $o(e);case"keypress":return e.which!==32?null:(Zs=!0,Js);case"textInput":return n=e.data,n===Js&&Zs?null:n;default:return null}}function Rp(n,e){if(Ie)return n==="compositionend"||!ts&&Po(n,e)?(n=Io(),ya=Zi=ne=null,Ie=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Oo&&e.locale!=="ko"?null:e.data;default:return null}}var Mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nl(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Mp[n.type]:e==="textarea"}function Fo(n,e,t,a){bo(a),e=$a(e,"onChange"),0<e.length&&(t=new ns("onChange","change",null,t,a),n.push({event:t,listeners:e}))}var kt=null,Pt=null;function Bp(n){Wo(n,0)}function ar(n){var e=$e(n);if(lo(e))return n}function Lp(n,e){if(n==="change")return e}var qo=!1;if(Un){var Dr;if(Un){var Rr="oninput"in document;if(!Rr){var el=document.createElement("div");el.setAttribute("oninput","return;"),Rr=typeof el.oninput=="function"}Dr=Rr}else Dr=!1;qo=Dr&&(!document.documentMode||9<document.documentMode)}function tl(){kt&&(kt.detachEvent("onpropertychange",No),Pt=kt=null)}function No(n){if(n.propertyName==="value"&&ar(Pt)){var e=[];Fo(e,Pt,n,Ki(n)),xo(Bp,e)}}function Tp(n,e,t){n==="focusin"?(tl(),kt=e,Pt=t,kt.attachEvent("onpropertychange",No)):n==="focusout"&&tl()}function Ip(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ar(Pt)}function Op(n,e){if(n==="click")return ar(e)}function Pp(n,e){if(n==="input"||n==="change")return ar(e)}function $p(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Tn=typeof Object.is=="function"?Object.is:$p;function $t(n,e){if(Tn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!Qr.call(e,r)||!Tn(n[r],e[r]))return!1}return!0}function al(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rl(n,e){var t=al(n);n=0;for(var a;t;){if(t.nodeType===3){if(a=n+t.textContent.length,n<=e&&a>=e)return{node:t,offset:e-n};n=a}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=al(t)}}function zo(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?zo(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ho(){for(var n=window,e=Ma();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ma(n.document)}return e}function as(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Fp(n){var e=Ho(),t=n.focusedElem,a=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&zo(t.ownerDocument.documentElement,t)){if(a!==null&&as(t)){if(e=a.start,n=a.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,i=Math.min(a.start,r);a=a.end===void 0?i:Math.min(a.end,r),!n.extend&&i>a&&(r=a,a=i,i=r),r=rl(t,i);var s=rl(t,a);r&&s&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==s.node||n.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),i>a?(n.addRange(e),n.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var qp=Un&&"documentMode"in document&&11>=document.documentMode,Oe=null,pi=null,St=null,ui=!1;function il(n,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ui||Oe==null||Oe!==Ma(a)||(a=Oe,"selectionStart"in a&&as(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),St&&$t(St,a)||(St=a,a=$a(pi,"onSelect"),0<a.length&&(e=new ns("onSelect","select",null,e,t),n.push({event:e,listeners:a}),e.target=Oe)))}function oa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Pe={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},Mr={},Vo={};Un&&(Vo=document.createElement("div").style,"AnimationEvent"in window||(delete Pe.animationend.animation,delete Pe.animationiteration.animation,delete Pe.animationstart.animation),"TransitionEvent"in window||delete Pe.transitionend.transition);function rr(n){if(Mr[n])return Mr[n];if(!Pe[n])return n;var e=Pe[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Vo)return Mr[n]=e[t];return n}var Uo=rr("animationend"),jo=rr("animationiteration"),Qo=rr("animationstart"),Go=rr("transitionend"),Ko=new Map,sl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ue(n,e){Ko.set(n,e),Re(e,[n])}for(var Br=0;Br<sl.length;Br++){var Lr=sl[Br],Np=Lr.toLowerCase(),zp=Lr[0].toUpperCase()+Lr.slice(1);ue(Np,"on"+zp)}ue(Uo,"onAnimationEnd");ue(jo,"onAnimationIteration");ue(Qo,"onAnimationStart");ue("dblclick","onDoubleClick");ue("focusin","onFocus");ue("focusout","onBlur");ue(Go,"onTransitionEnd");Xe("onMouseEnter",["mouseout","mouseover"]);Xe("onMouseLeave",["mouseout","mouseover"]);Xe("onPointerEnter",["pointerout","pointerover"]);Xe("onPointerLeave",["pointerout","pointerover"]);Re("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Re("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Re("onBeforeInput",["compositionend","keypress","textInput","paste"]);Re("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Re("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Re("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hp=new Set("cancel close invalid load scroll toggle".split(" ").concat(xt));function ll(n,e,t){var a=n.type||"unknown-event";n.currentTarget=t,Nc(a,e,void 0,n),n.currentTarget=null}function Wo(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var a=n[t],r=a.event;a=a.listeners;n:{var i=void 0;if(e)for(var s=a.length-1;0<=s;s--){var l=a[s],o=l.instance,c=l.currentTarget;if(l=l.listener,o!==i&&r.isPropagationStopped())break n;ll(r,l,c),i=o}else for(s=0;s<a.length;s++){if(l=a[s],o=l.instance,c=l.currentTarget,l=l.listener,o!==i&&r.isPropagationStopped())break n;ll(r,l,c),i=o}}}if(La)throw n=li,La=!1,li=null,n}function I(n,e){var t=e[vi];t===void 0&&(t=e[vi]=new Set);var a=n+"__bubble";t.has(a)||(Xo(e,n,2,!1),t.add(a))}function Tr(n,e,t){var a=0;e&&(a|=4),Xo(t,n,a,e)}var da="_reactListening"+Math.random().toString(36).slice(2);function Ft(n){if(!n[da]){n[da]=!0,to.forEach(function(t){t!=="selectionchange"&&(Hp.has(t)||Tr(t,!1,n),Tr(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[da]||(e[da]=!0,Tr("selectionchange",!1,e))}}function Xo(n,e,t,a){switch(To(e)){case 1:var r=tp;break;case 4:r=ap;break;default:r=Ji}t=r.bind(null,e,t,n),r=void 0,!si||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),a?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ir(n,e,t,a,r){var i=a;if(!(e&1)&&!(e&2)&&a!==null)n:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var l=a.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(s===4)for(s=a.return;s!==null;){var o=s.tag;if((o===3||o===4)&&(o=s.stateNode.containerInfo,o===r||o.nodeType===8&&o.parentNode===r))return;s=s.return}for(;l!==null;){if(s=xe(l),s===null)return;if(o=s.tag,o===5||o===6){a=i=s;continue n}l=l.parentNode}}a=a.return}xo(function(){var c=i,b=Ki(t),f=[];n:{var m=Ko.get(n);if(m!==void 0){var h=ns,x=n;switch(n){case"keypress":if(Ea(t)===0)break n;case"keydown":case"keyup":h=hp;break;case"focusin":x="focus",h=_r;break;case"focusout":x="blur",h=_r;break;case"beforeblur":case"afterblur":h=_r;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=sp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Ep;break;case Uo:case jo:case Qo:h=dp;break;case Go:h=kp;break;case"scroll":h=rp;break;case"wheel":h=Ap;break;case"copy":case"cut":case"paste":h=pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ys}var y=(e&4)!==0,P=!y&&n==="scroll",p=y?m!==null?m+"Capture":null:m;y=[];for(var d=c,u;d!==null;){u=d;var g=u.stateNode;if(u.tag===5&&g!==null&&(u=g,p!==null&&(g=Lt(d,p),g!=null&&y.push(qt(d,g,u)))),P)break;d=d.return}0<y.length&&(m=new h(m,x,null,t,b),f.push({event:m,listeners:y}))}}if(!(e&7)){n:{if(m=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",m&&t!==ri&&(x=t.relatedTarget||t.fromElement)&&(xe(x)||x[jn]))break n;if((h||m)&&(m=b.window===b?b:(m=b.ownerDocument)?m.defaultView||m.parentWindow:window,h?(x=t.relatedTarget||t.toElement,h=c,x=x?xe(x):null,x!==null&&(P=Me(x),x!==P||x.tag!==5&&x.tag!==6)&&(x=null)):(h=null,x=c),h!==x)){if(y=Ws,g="onMouseLeave",p="onMouseEnter",d="mouse",(n==="pointerout"||n==="pointerover")&&(y=Ys,g="onPointerLeave",p="onPointerEnter",d="pointer"),P=h==null?m:$e(h),u=x==null?m:$e(x),m=new y(g,d+"leave",h,t,b),m.target=P,m.relatedTarget=u,g=null,xe(b)===c&&(y=new y(p,d+"enter",x,t,b),y.target=u,y.relatedTarget=P,g=y),P=g,h&&x)e:{for(y=h,p=x,d=0,u=y;u;u=Be(u))d++;for(u=0,g=p;g;g=Be(g))u++;for(;0<d-u;)y=Be(y),d--;for(;0<u-d;)p=Be(p),u--;for(;d--;){if(y===p||p!==null&&y===p.alternate)break e;y=Be(y),p=Be(p)}y=null}else y=null;h!==null&&ol(f,m,h,y,!1),x!==null&&P!==null&&ol(f,P,x,y,!0)}}n:{if(m=c?$e(c):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var w=Lp;else if(nl(m))if(qo)w=Pp;else{w=Ip;var S=Tp}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=Op);if(w&&(w=w(n,c))){Fo(f,w,t,b);break n}S&&S(n,m,c),n==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&Zr(m,"number",m.value)}switch(S=c?$e(c):window,n){case"focusin":(nl(S)||S.contentEditable==="true")&&(Oe=S,pi=c,St=null);break;case"focusout":St=pi=Oe=null;break;case"mousedown":ui=!0;break;case"contextmenu":case"mouseup":case"dragend":ui=!1,il(f,t,b);break;case"selectionchange":if(qp)break;case"keydown":case"keyup":il(f,t,b)}var A;if(ts)n:{switch(n){case"compositionstart":var C="onCompositionStart";break n;case"compositionend":C="onCompositionEnd";break n;case"compositionupdate":C="onCompositionUpdate";break n}C=void 0}else Ie?Po(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Oo&&t.locale!=="ko"&&(Ie||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ie&&(A=Io()):(ne=b,Zi="value"in ne?ne.value:ne.textContent,Ie=!0)),S=$a(c,C),0<S.length&&(C=new Xs(C,n,null,t,b),f.push({event:C,listeners:S}),A?C.data=A:(A=$o(t),A!==null&&(C.data=A)))),(A=_p?Dp(n,t):Rp(n,t))&&(c=$a(c,"onBeforeInput"),0<c.length&&(b=new Xs("onBeforeInput","beforeinput",null,t,b),f.push({event:b,listeners:c}),b.data=A))}Wo(f,e)})}function qt(n,e,t){return{instance:n,listener:e,currentTarget:t}}function $a(n,e){for(var t=e+"Capture",a=[];n!==null;){var r=n,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Lt(n,t),i!=null&&a.unshift(qt(n,i,r)),i=Lt(n,e),i!=null&&a.push(qt(n,i,r))),n=n.return}return a}function Be(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ol(n,e,t,a,r){for(var i=e._reactName,s=[];t!==null&&t!==a;){var l=t,o=l.alternate,c=l.stateNode;if(o!==null&&o===a)break;l.tag===5&&c!==null&&(l=c,r?(o=Lt(t,i),o!=null&&s.unshift(qt(t,o,l))):r||(o=Lt(t,i),o!=null&&s.push(qt(t,o,l)))),t=t.return}s.length!==0&&n.push({event:e,listeners:s})}var Vp=/\r\n?/g,Up=/\u0000|\uFFFD/g;function dl(n){return(typeof n=="string"?n:""+n).replace(Vp,`
`).replace(Up,"")}function ca(n,e,t){if(e=dl(e),dl(n)!==e&&t)throw Error(v(425))}function Fa(){}var mi=null,fi=null;function bi(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout=="function"?setTimeout:void 0,jp=typeof clearTimeout=="function"?clearTimeout:void 0,cl=typeof Promise=="function"?Promise:void 0,Qp=typeof queueMicrotask=="function"?queueMicrotask:typeof cl<"u"?function(n){return cl.resolve(null).then(n).catch(Gp)}:gi;function Gp(n){setTimeout(function(){throw n})}function Or(n,e){var t=e,a=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(a===0){n.removeChild(r),Ot(e);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=r}while(t);Ot(e)}function ie(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function pl(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var it=Math.random().toString(36).slice(2),Pn="__reactFiber$"+it,Nt="__reactProps$"+it,jn="__reactContainer$"+it,vi="__reactEvents$"+it,Kp="__reactListeners$"+it,Wp="__reactHandles$"+it;function xe(n){var e=n[Pn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[jn]||t[Pn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=pl(n);n!==null;){if(t=n[Pn])return t;n=pl(n)}return e}n=t,t=n.parentNode}return null}function Xt(n){return n=n[Pn]||n[jn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $e(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(v(33))}function ir(n){return n[Nt]||null}var hi=[],Fe=-1;function me(n){return{current:n}}function O(n){0>Fe||(n.current=hi[Fe],hi[Fe]=null,Fe--)}function T(n,e){Fe++,hi[Fe]=n.current,n.current=e}var pe={},an=me(pe),pn=me(!1),Se=pe;function Ye(n,e){var t=n.type.contextTypes;if(!t)return pe;var a=n.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===e)return a.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=e[i];return a&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function un(n){return n=n.childContextTypes,n!=null}function qa(){O(pn),O(an)}function ul(n,e,t){if(an.current!==pe)throw Error(v(168));T(an,e),T(pn,t)}function Yo(n,e,t){var a=n.stateNode;if(e=e.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var r in a)if(!(r in e))throw Error(v(108,Tc(n)||"Unknown",r));return N({},t,a)}function Na(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pe,Se=an.current,T(an,n),T(pn,pn.current),!0}function ml(n,e,t){var a=n.stateNode;if(!a)throw Error(v(169));t?(n=Yo(n,e,Se),a.__reactInternalMemoizedMergedChildContext=n,O(pn),O(an),T(an,n)):O(pn),T(pn,t)}var Nn=null,sr=!1,Pr=!1;function Jo(n){Nn===null?Nn=[n]:Nn.push(n)}function Xp(n){sr=!0,Jo(n)}function fe(){if(!Pr&&Nn!==null){Pr=!0;var n=0,e=L;try{var t=Nn;for(L=1;n<t.length;n++){var a=t[n];do a=a(!0);while(a!==null)}Nn=null,sr=!1}catch(r){throw Nn!==null&&(Nn=Nn.slice(n+1)),ko(Wi,fe),r}finally{L=e,Pr=!1}}return null}var qe=[],Ne=0,za=null,Ha=0,yn=[],En=0,Ae=null,zn=1,Hn="";function ve(n,e){qe[Ne++]=Ha,qe[Ne++]=za,za=n,Ha=e}function Zo(n,e,t){yn[En++]=zn,yn[En++]=Hn,yn[En++]=Ae,Ae=n;var a=zn;n=Hn;var r=32-Bn(a)-1;a&=~(1<<r),t+=1;var i=32-Bn(e)+r;if(30<i){var s=r-r%5;i=(a&(1<<s)-1).toString(32),a>>=s,r-=s,zn=1<<32-Bn(e)+r|t<<r|a,Hn=i+n}else zn=1<<i|t<<r|a,Hn=n}function rs(n){n.return!==null&&(ve(n,1),Zo(n,1,0))}function is(n){for(;n===za;)za=qe[--Ne],qe[Ne]=null,Ha=qe[--Ne],qe[Ne]=null;for(;n===Ae;)Ae=yn[--En],yn[En]=null,Hn=yn[--En],yn[En]=null,zn=yn[--En],yn[En]=null}var gn=null,bn=null,$=!1,Mn=null;function nd(n,e){var t=wn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function fl(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,gn=n,bn=ie(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,gn=n,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ae!==null?{id:zn,overflow:Hn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=wn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,gn=n,bn=null,!0):!1;default:return!1}}function xi(n){return(n.mode&1)!==0&&(n.flags&128)===0}function yi(n){if($){var e=bn;if(e){var t=e;if(!fl(n,e)){if(xi(n))throw Error(v(418));e=ie(t.nextSibling);var a=gn;e&&fl(n,e)?nd(a,t):(n.flags=n.flags&-4097|2,$=!1,gn=n)}}else{if(xi(n))throw Error(v(418));n.flags=n.flags&-4097|2,$=!1,gn=n}}}function bl(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;gn=n}function pa(n){if(n!==gn)return!1;if(!$)return bl(n),$=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!bi(n.type,n.memoizedProps)),e&&(e=bn)){if(xi(n))throw ed(),Error(v(418));for(;e;)nd(n,e),e=ie(e.nextSibling)}if(bl(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(v(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){bn=ie(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}bn=null}}else bn=gn?ie(n.stateNode.nextSibling):null;return!0}function ed(){for(var n=bn;n;)n=ie(n.nextSibling)}function Je(){bn=gn=null,$=!1}function ss(n){Mn===null?Mn=[n]:Mn.push(n)}var Yp=Kn.ReactCurrentBatchConfig;function mt(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var a=t.stateNode}if(!a)throw Error(v(147,n));var r=a,i=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var l=r.refs;s===null?delete l[i]:l[i]=s},e._stringRef=i,e)}if(typeof n!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,n))}return n}function ua(n,e){throw n=Object.prototype.toString.call(e),Error(v(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function gl(n){var e=n._init;return e(n._payload)}function td(n){function e(p,d){if(n){var u=p.deletions;u===null?(p.deletions=[d],p.flags|=16):u.push(d)}}function t(p,d){if(!n)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function a(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function r(p,d){return p=de(p,d),p.index=0,p.sibling=null,p}function i(p,d,u){return p.index=u,n?(u=p.alternate,u!==null?(u=u.index,u<d?(p.flags|=2,d):u):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return n&&p.alternate===null&&(p.flags|=2),p}function l(p,d,u,g){return d===null||d.tag!==6?(d=Vr(u,p.mode,g),d.return=p,d):(d=r(d,u),d.return=p,d)}function o(p,d,u,g){var w=u.type;return w===Te?b(p,d,u.props.children,g,u.key):d!==null&&(d.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Xn&&gl(w)===d.type)?(g=r(d,u.props),g.ref=mt(p,d,u),g.return=p,g):(g=Da(u.type,u.key,u.props,null,p.mode,g),g.ref=mt(p,d,u),g.return=p,g)}function c(p,d,u,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==u.containerInfo||d.stateNode.implementation!==u.implementation?(d=Ur(u,p.mode,g),d.return=p,d):(d=r(d,u.children||[]),d.return=p,d)}function b(p,d,u,g,w){return d===null||d.tag!==7?(d=ke(u,p.mode,g,w),d.return=p,d):(d=r(d,u),d.return=p,d)}function f(p,d,u){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Vr(""+d,p.mode,u),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ea:return u=Da(d.type,d.key,d.props,null,p.mode,u),u.ref=mt(p,null,d),u.return=p,u;case Le:return d=Ur(d,p.mode,u),d.return=p,d;case Xn:var g=d._init;return f(p,g(d._payload),u)}if(vt(d)||ot(d))return d=ke(d,p.mode,u,null),d.return=p,d;ua(p,d)}return null}function m(p,d,u,g){var w=d!==null?d.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return w!==null?null:l(p,d,""+u,g);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ea:return u.key===w?o(p,d,u,g):null;case Le:return u.key===w?c(p,d,u,g):null;case Xn:return w=u._init,m(p,d,w(u._payload),g)}if(vt(u)||ot(u))return w!==null?null:b(p,d,u,g,null);ua(p,u)}return null}function h(p,d,u,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return p=p.get(u)||null,l(d,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ea:return p=p.get(g.key===null?u:g.key)||null,o(d,p,g,w);case Le:return p=p.get(g.key===null?u:g.key)||null,c(d,p,g,w);case Xn:var S=g._init;return h(p,d,u,S(g._payload),w)}if(vt(g)||ot(g))return p=p.get(u)||null,b(d,p,g,w,null);ua(d,g)}return null}function x(p,d,u,g){for(var w=null,S=null,A=d,C=d=0,H=null;A!==null&&C<u.length;C++){A.index>C?(H=A,A=null):H=A.sibling;var M=m(p,A,u[C],g);if(M===null){A===null&&(A=H);break}n&&A&&M.alternate===null&&e(p,A),d=i(M,d,C),S===null?w=M:S.sibling=M,S=M,A=H}if(C===u.length)return t(p,A),$&&ve(p,C),w;if(A===null){for(;C<u.length;C++)A=f(p,u[C],g),A!==null&&(d=i(A,d,C),S===null?w=A:S.sibling=A,S=A);return $&&ve(p,C),w}for(A=a(p,A);C<u.length;C++)H=h(A,p,C,u[C],g),H!==null&&(n&&H.alternate!==null&&A.delete(H.key===null?C:H.key),d=i(H,d,C),S===null?w=H:S.sibling=H,S=H);return n&&A.forEach(function(Cn){return e(p,Cn)}),$&&ve(p,C),w}function y(p,d,u,g){var w=ot(u);if(typeof w!="function")throw Error(v(150));if(u=w.call(u),u==null)throw Error(v(151));for(var S=w=null,A=d,C=d=0,H=null,M=u.next();A!==null&&!M.done;C++,M=u.next()){A.index>C?(H=A,A=null):H=A.sibling;var Cn=m(p,A,M.value,g);if(Cn===null){A===null&&(A=H);break}n&&A&&Cn.alternate===null&&e(p,A),d=i(Cn,d,C),S===null?w=Cn:S.sibling=Cn,S=Cn,A=H}if(M.done)return t(p,A),$&&ve(p,C),w;if(A===null){for(;!M.done;C++,M=u.next())M=f(p,M.value,g),M!==null&&(d=i(M,d,C),S===null?w=M:S.sibling=M,S=M);return $&&ve(p,C),w}for(A=a(p,A);!M.done;C++,M=u.next())M=h(A,p,C,M.value,g),M!==null&&(n&&M.alternate!==null&&A.delete(M.key===null?C:M.key),d=i(M,d,C),S===null?w=M:S.sibling=M,S=M);return n&&A.forEach(function(st){return e(p,st)}),$&&ve(p,C),w}function P(p,d,u,g){if(typeof u=="object"&&u!==null&&u.type===Te&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case ea:n:{for(var w=u.key,S=d;S!==null;){if(S.key===w){if(w=u.type,w===Te){if(S.tag===7){t(p,S.sibling),d=r(S,u.props.children),d.return=p,p=d;break n}}else if(S.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Xn&&gl(w)===S.type){t(p,S.sibling),d=r(S,u.props),d.ref=mt(p,S,u),d.return=p,p=d;break n}t(p,S);break}else e(p,S);S=S.sibling}u.type===Te?(d=ke(u.props.children,p.mode,g,u.key),d.return=p,p=d):(g=Da(u.type,u.key,u.props,null,p.mode,g),g.ref=mt(p,d,u),g.return=p,p=g)}return s(p);case Le:n:{for(S=u.key;d!==null;){if(d.key===S)if(d.tag===4&&d.stateNode.containerInfo===u.containerInfo&&d.stateNode.implementation===u.implementation){t(p,d.sibling),d=r(d,u.children||[]),d.return=p,p=d;break n}else{t(p,d);break}else e(p,d);d=d.sibling}d=Ur(u,p.mode,g),d.return=p,p=d}return s(p);case Xn:return S=u._init,P(p,d,S(u._payload),g)}if(vt(u))return x(p,d,u,g);if(ot(u))return y(p,d,u,g);ua(p,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,d!==null&&d.tag===6?(t(p,d.sibling),d=r(d,u),d.return=p,p=d):(t(p,d),d=Vr(u,p.mode,g),d.return=p,p=d),s(p)):t(p,d)}return P}var Ze=td(!0),ad=td(!1),Va=me(null),Ua=null,ze=null,ls=null;function os(){ls=ze=Ua=null}function ds(n){var e=Va.current;O(Va),n._currentValue=e}function Ei(n,e,t){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===t)break;n=n.return}}function Ke(n,e){Ua=n,ls=ze=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(cn=!0),n.firstContext=null)}function Sn(n){var e=n._currentValue;if(ls!==n)if(n={context:n,memoizedValue:e,next:null},ze===null){if(Ua===null)throw Error(v(308));ze=n,Ua.dependencies={lanes:0,firstContext:n}}else ze=ze.next=n;return e}var ye=null;function cs(n){ye===null?ye=[n]:ye.push(n)}function rd(n,e,t,a){var r=e.interleaved;return r===null?(t.next=t,cs(e)):(t.next=r.next,r.next=t),e.interleaved=t,Qn(n,a)}function Qn(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Yn=!1;function ps(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function id(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function se(n,e,t){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,B&2){var r=a.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),a.pending=e,Qn(n,t)}return r=a.interleaved,r===null?(e.next=e,cs(a)):(e.next=r.next,r.next=e),a.interleaved=e,Qn(n,t)}function wa(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Xi(n,t)}}function vl(n,e){var t=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?r=i=e:i=i.next=e}else r=i=e;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,effects:a.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ja(n,e,t,a){var r=n.updateQueue;Yn=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var o=l,c=o.next;o.next=null,s===null?i=c:s.next=c,s=o;var b=n.alternate;b!==null&&(b=b.updateQueue,l=b.lastBaseUpdate,l!==s&&(l===null?b.firstBaseUpdate=c:l.next=c,b.lastBaseUpdate=o))}if(i!==null){var f=r.baseState;s=0,b=c=o=null,l=i;do{var m=l.lane,h=l.eventTime;if((a&m)===m){b!==null&&(b=b.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});n:{var x=n,y=l;switch(m=e,h=t,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(h,f,m);break n}f=x;break n;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,m=typeof x=="function"?x.call(h,f,m):x,m==null)break n;f=N({},f,m);break n;case 2:Yn=!0}}l.callback!==null&&l.lane!==0&&(n.flags|=64,m=r.effects,m===null?r.effects=[l]:m.push(l))}else h={eventTime:h,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},b===null?(c=b=h,o=f):b=b.next=h,s|=m;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;m=l,l=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(b===null&&(o=f),r.baseState=o,r.firstBaseUpdate=c,r.lastBaseUpdate=b,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else i===null&&(r.shared.lanes=0);_e|=s,n.lanes=s,n.memoizedState=f}}function hl(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var a=n[e],r=a.callback;if(r!==null){if(a.callback=null,a=t,typeof r!="function")throw Error(v(191,r));r.call(a)}}}var Yt={},Fn=me(Yt),zt=me(Yt),Ht=me(Yt);function Ee(n){if(n===Yt)throw Error(v(174));return n}function us(n,e){switch(T(Ht,e),T(zt,n),T(Fn,Yt),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ei(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ei(e,n)}O(Fn),T(Fn,e)}function nt(){O(Fn),O(zt),O(Ht)}function sd(n){Ee(Ht.current);var e=Ee(Fn.current),t=ei(e,n.type);e!==t&&(T(zt,n),T(Fn,t))}function ms(n){zt.current===n&&(O(Fn),O(zt))}var F=me(0);function Qa(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $r=[];function fs(){for(var n=0;n<$r.length;n++)$r[n]._workInProgressVersionPrimary=null;$r.length=0}var ka=Kn.ReactCurrentDispatcher,Fr=Kn.ReactCurrentBatchConfig,Ce=0,q=null,Q=null,W=null,Ga=!1,At=!1,Vt=0,Jp=0;function nn(){throw Error(v(321))}function bs(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Tn(n[t],e[t]))return!1;return!0}function gs(n,e,t,a,r,i){if(Ce=i,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ka.current=n===null||n.memoizedState===null?tu:au,n=t(a,r),At){i=0;do{if(At=!1,Vt=0,25<=i)throw Error(v(301));i+=1,W=Q=null,e.updateQueue=null,ka.current=ru,n=t(a,r)}while(At)}if(ka.current=Ka,e=Q!==null&&Q.next!==null,Ce=0,W=Q=q=null,Ga=!1,e)throw Error(v(300));return n}function vs(){var n=Vt!==0;return Vt=0,n}function On(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return W===null?q.memoizedState=W=n:W=W.next=n,W}function An(){if(Q===null){var n=q.alternate;n=n!==null?n.memoizedState:null}else n=Q.next;var e=W===null?q.memoizedState:W.next;if(e!==null)W=e,Q=n;else{if(n===null)throw Error(v(310));Q=n,n={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},W===null?q.memoizedState=W=n:W=W.next=n}return W}function Ut(n,e){return typeof e=="function"?e(n):e}function qr(n){var e=An(),t=e.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=n;var a=Q,r=a.baseQueue,i=t.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}a.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,a=a.baseState;var l=s=null,o=null,c=i;do{var b=c.lane;if((Ce&b)===b)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),a=c.hasEagerState?c.eagerState:n(a,c.action);else{var f={lane:b,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(l=o=f,s=a):o=o.next=f,q.lanes|=b,_e|=b}c=c.next}while(c!==null&&c!==i);o===null?s=a:o.next=l,Tn(a,e.memoizedState)||(cn=!0),e.memoizedState=a,e.baseState=s,e.baseQueue=o,t.lastRenderedState=a}if(n=t.interleaved,n!==null){r=n;do i=r.lane,q.lanes|=i,_e|=i,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Nr(n){var e=An(),t=e.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=n;var a=t.dispatch,r=t.pending,i=e.memoizedState;if(r!==null){t.pending=null;var s=r=r.next;do i=n(i,s.action),s=s.next;while(s!==r);Tn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,a]}function ld(){}function od(n,e){var t=q,a=An(),r=e(),i=!Tn(a.memoizedState,r);if(i&&(a.memoizedState=r,cn=!0),a=a.queue,hs(pd.bind(null,t,a,n),[n]),a.getSnapshot!==e||i||W!==null&&W.memoizedState.tag&1){if(t.flags|=2048,jt(9,cd.bind(null,t,a,r,e),void 0,null),X===null)throw Error(v(349));Ce&30||dd(t,e,r)}return r}function dd(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function cd(n,e,t,a){e.value=t,e.getSnapshot=a,ud(e)&&md(n)}function pd(n,e,t){return t(function(){ud(e)&&md(n)})}function ud(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Tn(n,t)}catch{return!0}}function md(n){var e=Qn(n,1);e!==null&&Ln(e,n,1,-1)}function xl(n){var e=On();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:n},e.queue=n,n=n.dispatch=eu.bind(null,q,n),[e.memoizedState,n]}function jt(n,e,t,a){return n={tag:n,create:e,destroy:t,deps:a,next:null},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(a=t.next,t.next=n,n.next=a,e.lastEffect=n)),n}function fd(){return An().memoizedState}function Sa(n,e,t,a){var r=On();q.flags|=n,r.memoizedState=jt(1|e,t,void 0,a===void 0?null:a)}function lr(n,e,t,a){var r=An();a=a===void 0?null:a;var i=void 0;if(Q!==null){var s=Q.memoizedState;if(i=s.destroy,a!==null&&bs(a,s.deps)){r.memoizedState=jt(e,t,i,a);return}}q.flags|=n,r.memoizedState=jt(1|e,t,i,a)}function yl(n,e){return Sa(8390656,8,n,e)}function hs(n,e){return lr(2048,8,n,e)}function bd(n,e){return lr(4,2,n,e)}function gd(n,e){return lr(4,4,n,e)}function vd(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function hd(n,e,t){return t=t!=null?t.concat([n]):null,lr(4,4,vd.bind(null,e,n),t)}function xs(){}function xd(n,e){var t=An();e=e===void 0?null:e;var a=t.memoizedState;return a!==null&&e!==null&&bs(e,a[1])?a[0]:(t.memoizedState=[n,e],n)}function yd(n,e){var t=An();e=e===void 0?null:e;var a=t.memoizedState;return a!==null&&e!==null&&bs(e,a[1])?a[0]:(n=n(),t.memoizedState=[n,e],n)}function Ed(n,e,t){return Ce&21?(Tn(t,e)||(t=Co(),q.lanes|=t,_e|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,cn=!0),n.memoizedState=t)}function Zp(n,e){var t=L;L=t!==0&&4>t?t:4,n(!0);var a=Fr.transition;Fr.transition={};try{n(!1),e()}finally{L=t,Fr.transition=a}}function wd(){return An().memoizedState}function nu(n,e,t){var a=oe(n);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},kd(n))Sd(e,t);else if(t=rd(n,e,t,a),t!==null){var r=sn();Ln(t,n,a,r),Ad(t,e,a)}}function eu(n,e,t){var a=oe(n),r={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(kd(n))Sd(e,r);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,l=i(s,t);if(r.hasEagerState=!0,r.eagerState=l,Tn(l,s)){var o=e.interleaved;o===null?(r.next=r,cs(e)):(r.next=o.next,o.next=r),e.interleaved=r;return}}catch{}finally{}t=rd(n,e,r,a),t!==null&&(r=sn(),Ln(t,n,a,r),Ad(t,e,a))}}function kd(n){var e=n.alternate;return n===q||e!==null&&e===q}function Sd(n,e){At=Ga=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Ad(n,e,t){if(t&4194240){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Xi(n,t)}}var Ka={readContext:Sn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},tu={readContext:Sn,useCallback:function(n,e){return On().memoizedState=[n,e===void 0?null:e],n},useContext:Sn,useEffect:yl,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Sa(4194308,4,vd.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Sa(4194308,4,n,e)},useInsertionEffect:function(n,e){return Sa(4,2,n,e)},useMemo:function(n,e){var t=On();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var a=On();return e=t!==void 0?t(e):e,a.memoizedState=a.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},a.queue=n,n=n.dispatch=nu.bind(null,q,n),[a.memoizedState,n]},useRef:function(n){var e=On();return n={current:n},e.memoizedState=n},useState:xl,useDebugValue:xs,useDeferredValue:function(n){return On().memoizedState=n},useTransition:function(){var n=xl(!1),e=n[0];return n=Zp.bind(null,n[1]),On().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var a=q,r=On();if($){if(t===void 0)throw Error(v(407));t=t()}else{if(t=e(),X===null)throw Error(v(349));Ce&30||dd(a,e,t)}r.memoizedState=t;var i={value:t,getSnapshot:e};return r.queue=i,yl(pd.bind(null,a,i,n),[n]),a.flags|=2048,jt(9,cd.bind(null,a,i,t,e),void 0,null),t},useId:function(){var n=On(),e=X.identifierPrefix;if($){var t=Hn,a=zn;t=(a&~(1<<32-Bn(a)-1)).toString(32)+t,e=":"+e+"R"+t,t=Vt++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Jp++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},au={readContext:Sn,useCallback:xd,useContext:Sn,useEffect:hs,useImperativeHandle:hd,useInsertionEffect:bd,useLayoutEffect:gd,useMemo:yd,useReducer:qr,useRef:fd,useState:function(){return qr(Ut)},useDebugValue:xs,useDeferredValue:function(n){var e=An();return Ed(e,Q.memoizedState,n)},useTransition:function(){var n=qr(Ut)[0],e=An().memoizedState;return[n,e]},useMutableSource:ld,useSyncExternalStore:od,useId:wd,unstable_isNewReconciler:!1},ru={readContext:Sn,useCallback:xd,useContext:Sn,useEffect:hs,useImperativeHandle:hd,useInsertionEffect:bd,useLayoutEffect:gd,useMemo:yd,useReducer:Nr,useRef:fd,useState:function(){return Nr(Ut)},useDebugValue:xs,useDeferredValue:function(n){var e=An();return Q===null?e.memoizedState=n:Ed(e,Q.memoizedState,n)},useTransition:function(){var n=Nr(Ut)[0],e=An().memoizedState;return[n,e]},useMutableSource:ld,useSyncExternalStore:od,useId:wd,unstable_isNewReconciler:!1};function Dn(n,e){if(n&&n.defaultProps){e=N({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function wi(n,e,t,a){e=n.memoizedState,t=t(a,e),t=t==null?e:N({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var or={isMounted:function(n){return(n=n._reactInternals)?Me(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var a=sn(),r=oe(n),i=Vn(a,r);i.payload=e,t!=null&&(i.callback=t),e=se(n,i,r),e!==null&&(Ln(e,n,r,a),wa(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var a=sn(),r=oe(n),i=Vn(a,r);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=se(n,i,r),e!==null&&(Ln(e,n,r,a),wa(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=sn(),a=oe(n),r=Vn(t,a);r.tag=2,e!=null&&(r.callback=e),e=se(n,r,a),e!==null&&(Ln(e,n,a,t),wa(e,n,a))}};function El(n,e,t,a,r,i,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,i,s):e.prototype&&e.prototype.isPureReactComponent?!$t(t,a)||!$t(r,i):!0}function Cd(n,e,t){var a=!1,r=pe,i=e.contextType;return typeof i=="object"&&i!==null?i=Sn(i):(r=un(e)?Se:an.current,a=e.contextTypes,i=(a=a!=null)?Ye(n,r):pe),e=new e(t,i),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=or,n.stateNode=e,e._reactInternals=n,a&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=i),e}function wl(n,e,t,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==n&&or.enqueueReplaceState(e,e.state,null)}function ki(n,e,t,a){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},ps(n);var i=e.contextType;typeof i=="object"&&i!==null?r.context=Sn(i):(i=un(e)?Se:an.current,r.context=Ye(n,i)),r.state=n.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(wi(n,e,i,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&or.enqueueReplaceState(r,r.state,null),ja(n,t,r,a),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function et(n,e){try{var t="",a=e;do t+=Lc(a),a=a.return;while(a);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:n,source:e,stack:r,digest:null}}function zr(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Si(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var iu=typeof WeakMap=="function"?WeakMap:Map;function _d(n,e,t){t=Vn(-1,t),t.tag=3,t.payload={element:null};var a=e.value;return t.callback=function(){Xa||(Xa=!0,Ii=a),Si(n,e)},t}function Dd(n,e,t){t=Vn(-1,t),t.tag=3;var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=e.value;t.payload=function(){return a(r)},t.callback=function(){Si(n,e)}}var i=n.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Si(n,e),typeof a!="function"&&(le===null?le=new Set([this]):le.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),t}function kl(n,e,t){var a=n.pingCache;if(a===null){a=n.pingCache=new iu;var r=new Set;a.set(e,r)}else r=a.get(e),r===void 0&&(r=new Set,a.set(e,r));r.has(t)||(r.add(t),n=xu.bind(null,n,e,t),e.then(n,n))}function Sl(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Al(n,e,t,a,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Vn(-1,1),e.tag=2,se(t,e,1))),t.lanes|=1),n)}var su=Kn.ReactCurrentOwner,cn=!1;function rn(n,e,t,a){e.child=n===null?ad(e,null,t,a):Ze(e,n.child,t,a)}function Cl(n,e,t,a,r){t=t.render;var i=e.ref;return Ke(e,r),a=gs(n,e,t,a,i,r),t=vs(),n!==null&&!cn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Gn(n,e,r)):($&&t&&rs(e),e.flags|=1,rn(n,e,a,r),e.child)}function _l(n,e,t,a,r){if(n===null){var i=t.type;return typeof i=="function"&&!_s(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=i,Rd(n,e,i,a,r)):(n=Da(t.type,null,a,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(i=n.child,!(n.lanes&r)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:$t,t(s,a)&&n.ref===e.ref)return Gn(n,e,r)}return e.flags|=1,n=de(i,a),n.ref=e.ref,n.return=e,e.child=n}function Rd(n,e,t,a,r){if(n!==null){var i=n.memoizedProps;if($t(i,a)&&n.ref===e.ref)if(cn=!1,e.pendingProps=a=i,(n.lanes&r)!==0)n.flags&131072&&(cn=!0);else return e.lanes=n.lanes,Gn(n,e,r)}return Ai(n,e,t,a,r)}function Md(n,e,t){var a=e.pendingProps,r=a.children,i=n!==null?n.memoizedState:null;if(a.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},T(Ve,fn),fn|=t;else{if(!(t&1073741824))return n=i!==null?i.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,T(Ve,fn),fn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:t,T(Ve,fn),fn|=a}else i!==null?(a=i.baseLanes|t,e.memoizedState=null):a=t,T(Ve,fn),fn|=a;return rn(n,e,r,t),e.child}function Bd(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ai(n,e,t,a,r){var i=un(t)?Se:an.current;return i=Ye(e,i),Ke(e,r),t=gs(n,e,t,a,i,r),a=vs(),n!==null&&!cn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Gn(n,e,r)):($&&a&&rs(e),e.flags|=1,rn(n,e,t,r),e.child)}function Dl(n,e,t,a,r){if(un(t)){var i=!0;Na(e)}else i=!1;if(Ke(e,r),e.stateNode===null)Aa(n,e),Cd(e,t,a),ki(e,t,a,r),a=!0;else if(n===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var o=s.context,c=t.contextType;typeof c=="object"&&c!==null?c=Sn(c):(c=un(t)?Se:an.current,c=Ye(e,c));var b=t.getDerivedStateFromProps,f=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==a||o!==c)&&wl(e,s,a,c),Yn=!1;var m=e.memoizedState;s.state=m,ja(e,a,s,r),o=e.memoizedState,l!==a||m!==o||pn.current||Yn?(typeof b=="function"&&(wi(e,t,b,a),o=e.memoizedState),(l=Yn||El(e,t,l,a,m,o,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=o),s.props=a,s.state=o,s.context=c,a=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{s=e.stateNode,id(n,e),l=e.memoizedProps,c=e.type===e.elementType?l:Dn(e.type,l),s.props=c,f=e.pendingProps,m=s.context,o=t.contextType,typeof o=="object"&&o!==null?o=Sn(o):(o=un(t)?Se:an.current,o=Ye(e,o));var h=t.getDerivedStateFromProps;(b=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||m!==o)&&wl(e,s,a,o),Yn=!1,m=e.memoizedState,s.state=m,ja(e,a,s,r);var x=e.memoizedState;l!==f||m!==x||pn.current||Yn?(typeof h=="function"&&(wi(e,t,h,a),x=e.memoizedState),(c=Yn||El(e,t,c,a,m,x,o)||!1)?(b||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,x,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,x,o)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=x),s.props=a,s.state=x,s.context=o,a=c):(typeof s.componentDidUpdate!="function"||l===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),a=!1)}return Ci(n,e,t,a,i,r)}function Ci(n,e,t,a,r,i){Bd(n,e);var s=(e.flags&128)!==0;if(!a&&!s)return r&&ml(e,t,!1),Gn(n,e,i);a=e.stateNode,su.current=e;var l=s&&typeof t.getDerivedStateFromError!="function"?null:a.render();return e.flags|=1,n!==null&&s?(e.child=Ze(e,n.child,null,i),e.child=Ze(e,null,l,i)):rn(n,e,l,i),e.memoizedState=a.state,r&&ml(e,t,!0),e.child}function Ld(n){var e=n.stateNode;e.pendingContext?ul(n,e.pendingContext,e.pendingContext!==e.context):e.context&&ul(n,e.context,!1),us(n,e.containerInfo)}function Rl(n,e,t,a,r){return Je(),ss(r),e.flags|=256,rn(n,e,t,a),e.child}var _i={dehydrated:null,treeContext:null,retryLane:0};function Di(n){return{baseLanes:n,cachePool:null,transitions:null}}function Td(n,e,t){var a=e.pendingProps,r=F.current,i=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=n!==null&&n.memoizedState===null?!1:(r&2)!==0),l?(i=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),T(F,r&1),n===null)return yi(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=a.children,n=a.fallback,i?(a=e.mode,i=e.child,s={mode:"hidden",children:s},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=pr(s,a,0,null),n=ke(n,a,t,null),i.return=e,n.return=e,i.sibling=n,e.child=i,e.child.memoizedState=Di(t),e.memoizedState=_i,n):ys(e,s));if(r=n.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return lu(n,e,s,a,l,r,t);if(i){i=a.fallback,s=e.mode,r=n.child,l=r.sibling;var o={mode:"hidden",children:a.children};return!(s&1)&&e.child!==r?(a=e.child,a.childLanes=0,a.pendingProps=o,e.deletions=null):(a=de(r,o),a.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=de(l,i):(i=ke(i,s,t,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,a=i,i=e.child,s=n.child.memoizedState,s=s===null?Di(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=n.childLanes&~t,e.memoizedState=_i,a}return i=n.child,n=i.sibling,a=de(i,{mode:"visible",children:a.children}),!(e.mode&1)&&(a.lanes=t),a.return=e,a.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=a,e.memoizedState=null,a}function ys(n,e){return e=pr({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ma(n,e,t,a){return a!==null&&ss(a),Ze(e,n.child,null,t),n=ys(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function lu(n,e,t,a,r,i,s){if(t)return e.flags&256?(e.flags&=-257,a=zr(Error(v(422))),ma(n,e,s,a)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(i=a.fallback,r=e.mode,a=pr({mode:"visible",children:a.children},r,0,null),i=ke(i,r,s,null),i.flags|=2,a.return=e,i.return=e,a.sibling=i,e.child=a,e.mode&1&&Ze(e,n.child,null,s),e.child.memoizedState=Di(s),e.memoizedState=_i,i);if(!(e.mode&1))return ma(n,e,s,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var l=a.dgst;return a=l,i=Error(v(419)),a=zr(i,a,void 0),ma(n,e,s,a)}if(l=(s&n.childLanes)!==0,cn||l){if(a=X,a!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(a.suspendedLanes|s)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Qn(n,r),Ln(a,n,r,-1))}return Cs(),a=zr(Error(v(421))),ma(n,e,s,a)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=yu.bind(null,n),r._reactRetry=e,null):(n=i.treeContext,bn=ie(r.nextSibling),gn=e,$=!0,Mn=null,n!==null&&(yn[En++]=zn,yn[En++]=Hn,yn[En++]=Ae,zn=n.id,Hn=n.overflow,Ae=e),e=ys(e,a.children),e.flags|=4096,e)}function Ml(n,e,t){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),Ei(n.return,e,t)}function Hr(n,e,t,a,r){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=t,i.tailMode=r)}function Id(n,e,t){var a=e.pendingProps,r=a.revealOrder,i=a.tail;if(rn(n,e,a.children,t),a=F.current,a&2)a=a&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ml(n,t,e);else if(n.tag===19)Ml(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}a&=1}if(T(F,a),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Qa(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Hr(e,!1,r,t,i);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Qa(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Hr(e,!0,t,null,i);break;case"together":Hr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Aa(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Gn(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),_e|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(v(153));if(e.child!==null){for(n=e.child,t=de(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=de(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function ou(n,e,t){switch(e.tag){case 3:Ld(e),Je();break;case 5:sd(e);break;case 1:un(e.type)&&Na(e);break;case 4:us(e,e.stateNode.containerInfo);break;case 10:var a=e.type._context,r=e.memoizedProps.value;T(Va,a._currentValue),a._currentValue=r;break;case 13:if(a=e.memoizedState,a!==null)return a.dehydrated!==null?(T(F,F.current&1),e.flags|=128,null):t&e.child.childLanes?Td(n,e,t):(T(F,F.current&1),n=Gn(n,e,t),n!==null?n.sibling:null);T(F,F.current&1);break;case 19:if(a=(t&e.childLanes)!==0,n.flags&128){if(a)return Id(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),T(F,F.current),a)break;return null;case 22:case 23:return e.lanes=0,Md(n,e,t)}return Gn(n,e,t)}var Od,Ri,Pd,$d;Od=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ri=function(){};Pd=function(n,e,t,a){var r=n.memoizedProps;if(r!==a){n=e.stateNode,Ee(Fn.current);var i=null;switch(t){case"input":r=Yr(n,r),a=Yr(n,a),i=[];break;case"select":r=N({},r,{value:void 0}),a=N({},a,{value:void 0}),i=[];break;case"textarea":r=ni(n,r),a=ni(n,a),i=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(n.onclick=Fa)}ti(t,a);var s;t=null;for(c in r)if(!a.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(s in l)l.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mt.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in a){var o=a[c];if(l=r!=null?r[c]:void 0,a.hasOwnProperty(c)&&o!==l&&(o!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||o&&o.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in o)o.hasOwnProperty(s)&&l[s]!==o[s]&&(t||(t={}),t[s]=o[s])}else t||(i||(i=[]),i.push(c,t)),t=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,l=l?l.__html:void 0,o!=null&&l!==o&&(i=i||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mt.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&I("scroll",n),i||l===o||(i=[])):(i=i||[]).push(c,o))}t&&(i=i||[]).push("style",t);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};$d=function(n,e,t,a){t!==a&&(e.flags|=4)};function ft(n,e){if(!$)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null}}function en(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,a=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=a,n.childLanes=t,e}function du(n,e,t){var a=e.pendingProps;switch(is(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return un(e.type)&&qa(),en(e),null;case 3:return a=e.stateNode,nt(),O(pn),O(an),fs(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(pa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mn!==null&&($i(Mn),Mn=null))),Ri(n,e),en(e),null;case 5:ms(e);var r=Ee(Ht.current);if(t=e.type,n!==null&&e.stateNode!=null)Pd(n,e,t,a,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!a){if(e.stateNode===null)throw Error(v(166));return en(e),null}if(n=Ee(Fn.current),pa(e)){a=e.stateNode,t=e.type;var i=e.memoizedProps;switch(a[Pn]=e,a[Nt]=i,n=(e.mode&1)!==0,t){case"dialog":I("cancel",a),I("close",a);break;case"iframe":case"object":case"embed":I("load",a);break;case"video":case"audio":for(r=0;r<xt.length;r++)I(xt[r],a);break;case"source":I("error",a);break;case"img":case"image":case"link":I("error",a),I("load",a);break;case"details":I("toggle",a);break;case"input":qs(a,i),I("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},I("invalid",a);break;case"textarea":zs(a,i),I("invalid",a)}ti(t,i),r=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?a.textContent!==l&&(i.suppressHydrationWarning!==!0&&ca(a.textContent,l,n),r=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ca(a.textContent,l,n),r=["children",""+l]):Mt.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&I("scroll",a)}switch(t){case"input":ta(a),Ns(a,i,!0);break;case"textarea":ta(a),Hs(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=Fa)}a=r,e.updateQueue=a,a!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=po(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof a.is=="string"?n=s.createElement(t,{is:a.is}):(n=s.createElement(t),t==="select"&&(s=n,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):n=s.createElementNS(n,t),n[Pn]=e,n[Nt]=a,Od(n,e,!1,!1),e.stateNode=n;n:{switch(s=ai(t,a),t){case"dialog":I("cancel",n),I("close",n),r=a;break;case"iframe":case"object":case"embed":I("load",n),r=a;break;case"video":case"audio":for(r=0;r<xt.length;r++)I(xt[r],n);r=a;break;case"source":I("error",n),r=a;break;case"img":case"image":case"link":I("error",n),I("load",n),r=a;break;case"details":I("toggle",n),r=a;break;case"input":qs(n,a),r=Yr(n,a),I("invalid",n);break;case"option":r=a;break;case"select":n._wrapperState={wasMultiple:!!a.multiple},r=N({},a,{value:void 0}),I("invalid",n);break;case"textarea":zs(n,a),r=ni(n,a),I("invalid",n);break;default:r=a}ti(t,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="style"?fo(n,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&uo(n,o)):i==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&Bt(n,o):typeof o=="number"&&Bt(n,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mt.hasOwnProperty(i)?o!=null&&i==="onScroll"&&I("scroll",n):o!=null&&Ui(n,i,o,s))}switch(t){case"input":ta(n),Ns(n,a,!1);break;case"textarea":ta(n),Hs(n);break;case"option":a.value!=null&&n.setAttribute("value",""+ce(a.value));break;case"select":n.multiple=!!a.multiple,i=a.value,i!=null?Ue(n,!!a.multiple,i,!1):a.defaultValue!=null&&Ue(n,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Fa)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break n;case"img":a=!0;break n;default:a=!1}}a&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(n&&e.stateNode!=null)$d(n,e,n.memoizedProps,a);else{if(typeof a!="string"&&e.stateNode===null)throw Error(v(166));if(t=Ee(Ht.current),Ee(Fn.current),pa(e)){if(a=e.stateNode,t=e.memoizedProps,a[Pn]=e,(i=a.nodeValue!==t)&&(n=gn,n!==null))switch(n.tag){case 3:ca(a.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ca(a.nodeValue,t,(n.mode&1)!==0)}i&&(e.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Pn]=e,e.stateNode=a}return en(e),null;case 13:if(O(F),a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($&&bn!==null&&e.mode&1&&!(e.flags&128))ed(),Je(),e.flags|=98560,i=!1;else if(i=pa(e),a!==null&&a.dehydrated!==null){if(n===null){if(!i)throw Error(v(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[Pn]=e}else Je(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),i=!1}else Mn!==null&&($i(Mn),Mn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(a=a!==null,a!==(n!==null&&n.memoizedState!==null)&&a&&(e.child.flags|=8192,e.mode&1&&(n===null||F.current&1?G===0&&(G=3):Cs())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return nt(),Ri(n,e),n===null&&Ft(e.stateNode.containerInfo),en(e),null;case 10:return ds(e.type._context),en(e),null;case 17:return un(e.type)&&qa(),en(e),null;case 19:if(O(F),i=e.memoizedState,i===null)return en(e),null;if(a=(e.flags&128)!==0,s=i.rendering,s===null)if(a)ft(i,!1);else{if(G!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(s=Qa(n),s!==null){for(e.flags|=128,ft(i,!1),a=s.updateQueue,a!==null&&(e.updateQueue=a,e.flags|=4),e.subtreeFlags=0,a=t,t=e.child;t!==null;)i=t,n=a,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=n,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,n=s.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return T(F,F.current&1|2),e.child}n=n.sibling}i.tail!==null&&U()>tt&&(e.flags|=128,a=!0,ft(i,!1),e.lanes=4194304)}else{if(!a)if(n=Qa(s),n!==null){if(e.flags|=128,a=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ft(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!$)return en(e),null}else 2*U()-i.renderingStartTime>tt&&t!==1073741824&&(e.flags|=128,a=!0,ft(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=U(),e.sibling=null,t=F.current,T(F,a?t&1|2:t&1),e):(en(e),null);case 22:case 23:return As(),a=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==a&&(e.flags|=8192),a&&e.mode&1?fn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(v(156,e.tag))}function cu(n,e){switch(is(e),e.tag){case 1:return un(e.type)&&qa(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return nt(),O(pn),O(an),fs(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return ms(e),null;case 13:if(O(F),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(v(340));Je()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return O(F),null;case 4:return nt(),null;case 10:return ds(e.type._context),null;case 22:case 23:return As(),null;case 24:return null;default:return null}}var fa=!1,tn=!1,pu=typeof WeakSet=="function"?WeakSet:Set,E=null;function He(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){z(n,e,a)}else t.current=null}function Mi(n,e,t){try{t()}catch(a){z(n,e,a)}}var Bl=!1;function uu(n,e){if(mi=Oa,n=Ho(),as(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break n}var s=0,l=-1,o=-1,c=0,b=0,f=n,m=null;e:for(;;){for(var h;f!==t||r!==0&&f.nodeType!==3||(l=s+r),f!==i||a!==0&&f.nodeType!==3||(o=s+a),f.nodeType===3&&(s+=f.nodeValue.length),(h=f.firstChild)!==null;)m=f,f=h;for(;;){if(f===n)break e;if(m===t&&++c===r&&(l=s),m===i&&++b===a&&(o=s),(h=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=h}t=l===-1||o===-1?null:{start:l,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(fi={focusedElem:n,selectionRange:t},Oa=!1,E=e;E!==null;)if(e=E,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,E=n;else for(;E!==null;){e=E;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,P=x.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:Dn(e.type,y),P);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var u=e.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){z(e,e.return,g)}if(n=e.sibling,n!==null){n.return=e.return,E=n;break}E=e.return}return x=Bl,Bl=!1,x}function Ct(n,e,t){var a=e.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&n)===n){var i=r.destroy;r.destroy=void 0,i!==void 0&&Mi(e,t,i)}r=r.next}while(r!==a)}}function dr(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var a=t.create;t.destroy=a()}t=t.next}while(t!==e)}}function Bi(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Fd(n){var e=n.alternate;e!==null&&(n.alternate=null,Fd(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Pn],delete e[Nt],delete e[vi],delete e[Kp],delete e[Wp])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qd(n){return n.tag===5||n.tag===3||n.tag===4}function Ll(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||qd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Li(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Fa));else if(a!==4&&(n=n.child,n!==null))for(Li(n,e,t),n=n.sibling;n!==null;)Li(n,e,t),n=n.sibling}function Ti(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(a!==4&&(n=n.child,n!==null))for(Ti(n,e,t),n=n.sibling;n!==null;)Ti(n,e,t),n=n.sibling}var Y=null,Rn=!1;function Wn(n,e,t){for(t=t.child;t!==null;)Nd(n,e,t),t=t.sibling}function Nd(n,e,t){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(er,t)}catch{}switch(t.tag){case 5:tn||He(t,e);case 6:var a=Y,r=Rn;Y=null,Wn(n,e,t),Y=a,Rn=r,Y!==null&&(Rn?(n=Y,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Y.removeChild(t.stateNode));break;case 18:Y!==null&&(Rn?(n=Y,t=t.stateNode,n.nodeType===8?Or(n.parentNode,t):n.nodeType===1&&Or(n,t),Ot(n)):Or(Y,t.stateNode));break;case 4:a=Y,r=Rn,Y=t.stateNode.containerInfo,Rn=!0,Wn(n,e,t),Y=a,Rn=r;break;case 0:case 11:case 14:case 15:if(!tn&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Mi(t,e,s),r=r.next}while(r!==a)}Wn(n,e,t);break;case 1:if(!tn&&(He(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){z(t,e,l)}Wn(n,e,t);break;case 21:Wn(n,e,t);break;case 22:t.mode&1?(tn=(a=tn)||t.memoizedState!==null,Wn(n,e,t),tn=a):Wn(n,e,t);break;default:Wn(n,e,t)}}function Tl(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new pu),e.forEach(function(a){var r=Eu.bind(null,n,a);t.has(a)||(t.add(a),a.then(r,r))})}}function _n(n,e){var t=e.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];try{var i=n,s=e,l=s;n:for(;l!==null;){switch(l.tag){case 5:Y=l.stateNode,Rn=!1;break n;case 3:Y=l.stateNode.containerInfo,Rn=!0;break n;case 4:Y=l.stateNode.containerInfo,Rn=!0;break n}l=l.return}if(Y===null)throw Error(v(160));Nd(i,s,r),Y=null,Rn=!1;var o=r.alternate;o!==null&&(o.return=null),r.return=null}catch(c){z(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zd(e,n),e=e.sibling}function zd(n,e){var t=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_n(e,n),In(n),a&4){try{Ct(3,n,n.return),dr(3,n)}catch(y){z(n,n.return,y)}try{Ct(5,n,n.return)}catch(y){z(n,n.return,y)}}break;case 1:_n(e,n),In(n),a&512&&t!==null&&He(t,t.return);break;case 5:if(_n(e,n),In(n),a&512&&t!==null&&He(t,t.return),n.flags&32){var r=n.stateNode;try{Bt(r,"")}catch(y){z(n,n.return,y)}}if(a&4&&(r=n.stateNode,r!=null)){var i=n.memoizedProps,s=t!==null?t.memoizedProps:i,l=n.type,o=n.updateQueue;if(n.updateQueue=null,o!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&oo(r,i),ai(l,s);var c=ai(l,i);for(s=0;s<o.length;s+=2){var b=o[s],f=o[s+1];b==="style"?fo(r,f):b==="dangerouslySetInnerHTML"?uo(r,f):b==="children"?Bt(r,f):Ui(r,b,f,c)}switch(l){case"input":Jr(r,i);break;case"textarea":co(r,i);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Ue(r,!!i.multiple,h,!1):m!==!!i.multiple&&(i.defaultValue!=null?Ue(r,!!i.multiple,i.defaultValue,!0):Ue(r,!!i.multiple,i.multiple?[]:"",!1))}r[Nt]=i}catch(y){z(n,n.return,y)}}break;case 6:if(_n(e,n),In(n),a&4){if(n.stateNode===null)throw Error(v(162));r=n.stateNode,i=n.memoizedProps;try{r.nodeValue=i}catch(y){z(n,n.return,y)}}break;case 3:if(_n(e,n),In(n),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ot(e.containerInfo)}catch(y){z(n,n.return,y)}break;case 4:_n(e,n),In(n);break;case 13:_n(e,n),In(n),r=n.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(ks=U())),a&4&&Tl(n);break;case 22:if(b=t!==null&&t.memoizedState!==null,n.mode&1?(tn=(c=tn)||b,_n(e,n),tn=c):_n(e,n),In(n),a&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!b&&n.mode&1)for(E=n,b=n.child;b!==null;){for(f=E=b;E!==null;){switch(m=E,h=m.child,m.tag){case 0:case 11:case 14:case 15:Ct(4,m,m.return);break;case 1:He(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){a=m,t=m.return;try{e=a,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){z(a,t,y)}}break;case 5:He(m,m.return);break;case 22:if(m.memoizedState!==null){Ol(f);continue}}h!==null?(h.return=m,E=h):Ol(f)}b=b.sibling}n:for(b=null,f=n;;){if(f.tag===5){if(b===null){b=f;try{r=f.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,o=f.memoizedProps.style,s=o!=null&&o.hasOwnProperty("display")?o.display:null,l.style.display=mo("display",s))}catch(y){z(n,n.return,y)}}}else if(f.tag===6){if(b===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){z(n,n.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break n;for(;f.sibling===null;){if(f.return===null||f.return===n)break n;b===f&&(b=null),f=f.return}b===f&&(b=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:_n(e,n),In(n),a&4&&Tl(n);break;case 21:break;default:_n(e,n),In(n)}}function In(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(qd(t)){var a=t;break n}t=t.return}throw Error(v(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&(Bt(r,""),a.flags&=-33);var i=Ll(n);Ti(n,i,r);break;case 3:case 4:var s=a.stateNode.containerInfo,l=Ll(n);Li(n,l,s);break;default:throw Error(v(161))}}catch(o){z(n,n.return,o)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function mu(n,e,t){E=n,Hd(n)}function Hd(n,e,t){for(var a=(n.mode&1)!==0;E!==null;){var r=E,i=r.child;if(r.tag===22&&a){var s=r.memoizedState!==null||fa;if(!s){var l=r.alternate,o=l!==null&&l.memoizedState!==null||tn;l=fa;var c=tn;if(fa=s,(tn=o)&&!c)for(E=r;E!==null;)s=E,o=s.child,s.tag===22&&s.memoizedState!==null?Pl(r):o!==null?(o.return=s,E=o):Pl(r);for(;i!==null;)E=i,Hd(i),i=i.sibling;E=r,fa=l,tn=c}Il(n)}else r.subtreeFlags&8772&&i!==null?(i.return=r,E=i):Il(n)}}function Il(n){for(;E!==null;){var e=E;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||dr(5,e);break;case 1:var a=e.stateNode;if(e.flags&4&&!tn)if(t===null)a.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Dn(e.type,t.memoizedProps);a.componentDidUpdate(r,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&hl(e,i,a);break;case 3:var s=e.updateQueue;if(s!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}hl(e,s,t)}break;case 5:var l=e.stateNode;if(t===null&&e.flags&4){t=l;var o=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var b=c.memoizedState;if(b!==null){var f=b.dehydrated;f!==null&&Ot(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}tn||e.flags&512&&Bi(e)}catch(m){z(e,e.return,m)}}if(e===n){E=null;break}if(t=e.sibling,t!==null){t.return=e.return,E=t;break}E=e.return}}function Ol(n){for(;E!==null;){var e=E;if(e===n){E=null;break}var t=e.sibling;if(t!==null){t.return=e.return,E=t;break}E=e.return}}function Pl(n){for(;E!==null;){var e=E;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{dr(4,e)}catch(o){z(e,t,o)}break;case 1:var a=e.stateNode;if(typeof a.componentDidMount=="function"){var r=e.return;try{a.componentDidMount()}catch(o){z(e,r,o)}}var i=e.return;try{Bi(e)}catch(o){z(e,i,o)}break;case 5:var s=e.return;try{Bi(e)}catch(o){z(e,s,o)}}}catch(o){z(e,e.return,o)}if(e===n){E=null;break}var l=e.sibling;if(l!==null){l.return=e.return,E=l;break}E=e.return}}var fu=Math.ceil,Wa=Kn.ReactCurrentDispatcher,Es=Kn.ReactCurrentOwner,kn=Kn.ReactCurrentBatchConfig,B=0,X=null,j=null,J=0,fn=0,Ve=me(0),G=0,Qt=null,_e=0,cr=0,ws=0,_t=null,dn=null,ks=0,tt=1/0,qn=null,Xa=!1,Ii=null,le=null,ba=!1,ee=null,Ya=0,Dt=0,Oi=null,Ca=-1,_a=0;function sn(){return B&6?U():Ca!==-1?Ca:Ca=U()}function oe(n){return n.mode&1?B&2&&J!==0?J&-J:Yp.transition!==null?(_a===0&&(_a=Co()),_a):(n=L,n!==0||(n=window.event,n=n===void 0?16:To(n.type)),n):1}function Ln(n,e,t,a){if(50<Dt)throw Dt=0,Oi=null,Error(v(185));Kt(n,t,a),(!(B&2)||n!==X)&&(n===X&&(!(B&2)&&(cr|=t),G===4&&Zn(n,J)),mn(n,a),t===1&&B===0&&!(e.mode&1)&&(tt=U()+500,sr&&fe()))}function mn(n,e){var t=n.callbackNode;Yc(n,e);var a=Ia(n,n===X?J:0);if(a===0)t!==null&&js(t),n.callbackNode=null,n.callbackPriority=0;else if(e=a&-a,n.callbackPriority!==e){if(t!=null&&js(t),e===1)n.tag===0?Xp($l.bind(null,n)):Jo($l.bind(null,n)),Qp(function(){!(B&6)&&fe()}),t=null;else{switch(_o(a)){case 1:t=Wi;break;case 4:t=So;break;case 16:t=Ta;break;case 536870912:t=Ao;break;default:t=Ta}t=Xd(t,Vd.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Vd(n,e){if(Ca=-1,_a=0,B&6)throw Error(v(327));var t=n.callbackNode;if(We()&&n.callbackNode!==t)return null;var a=Ia(n,n===X?J:0);if(a===0)return null;if(a&30||a&n.expiredLanes||e)e=Ja(n,a);else{e=a;var r=B;B|=2;var i=jd();(X!==n||J!==e)&&(qn=null,tt=U()+500,we(n,e));do try{vu();break}catch(l){Ud(n,l)}while(!0);os(),Wa.current=i,B=r,j!==null?e=0:(X=null,J=0,e=G)}if(e!==0){if(e===2&&(r=oi(n),r!==0&&(a=r,e=Pi(n,r))),e===1)throw t=Qt,we(n,0),Zn(n,a),mn(n,U()),t;if(e===6)Zn(n,a);else{if(r=n.current.alternate,!(a&30)&&!bu(r)&&(e=Ja(n,a),e===2&&(i=oi(n),i!==0&&(a=i,e=Pi(n,i))),e===1))throw t=Qt,we(n,0),Zn(n,a),mn(n,U()),t;switch(n.finishedWork=r,n.finishedLanes=a,e){case 0:case 1:throw Error(v(345));case 2:he(n,dn,qn);break;case 3:if(Zn(n,a),(a&130023424)===a&&(e=ks+500-U(),10<e)){if(Ia(n,0)!==0)break;if(r=n.suspendedLanes,(r&a)!==a){sn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=gi(he.bind(null,n,dn,qn),e);break}he(n,dn,qn);break;case 4:if(Zn(n,a),(a&4194240)===a)break;for(e=n.eventTimes,r=-1;0<a;){var s=31-Bn(a);i=1<<s,s=e[s],s>r&&(r=s),a&=~i}if(a=r,a=U()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*fu(a/1960))-a,10<a){n.timeoutHandle=gi(he.bind(null,n,dn,qn),a);break}he(n,dn,qn);break;case 5:he(n,dn,qn);break;default:throw Error(v(329))}}}return mn(n,U()),n.callbackNode===t?Vd.bind(null,n):null}function Pi(n,e){var t=_t;return n.current.memoizedState.isDehydrated&&(we(n,e).flags|=256),n=Ja(n,e),n!==2&&(e=dn,dn=t,e!==null&&$i(e)),n}function $i(n){dn===null?dn=n:dn.push.apply(dn,n)}function bu(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var r=t[a],i=r.getSnapshot;r=r.value;try{if(!Tn(i(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(n,e){for(e&=~ws,e&=~cr,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Bn(e),a=1<<t;n[t]=-1,e&=~a}}function $l(n){if(B&6)throw Error(v(327));We();var e=Ia(n,0);if(!(e&1))return mn(n,U()),null;var t=Ja(n,e);if(n.tag!==0&&t===2){var a=oi(n);a!==0&&(e=a,t=Pi(n,a))}if(t===1)throw t=Qt,we(n,0),Zn(n,e),mn(n,U()),t;if(t===6)throw Error(v(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,he(n,dn,qn),mn(n,U()),null}function Ss(n,e){var t=B;B|=1;try{return n(e)}finally{B=t,B===0&&(tt=U()+500,sr&&fe())}}function De(n){ee!==null&&ee.tag===0&&!(B&6)&&We();var e=B;B|=1;var t=kn.transition,a=L;try{if(kn.transition=null,L=1,n)return n()}finally{L=a,kn.transition=t,B=e,!(B&6)&&fe()}}function As(){fn=Ve.current,O(Ve)}function we(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,jp(t)),j!==null)for(t=j.return;t!==null;){var a=t;switch(is(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&qa();break;case 3:nt(),O(pn),O(an),fs();break;case 5:ms(a);break;case 4:nt();break;case 13:O(F);break;case 19:O(F);break;case 10:ds(a.type._context);break;case 22:case 23:As()}t=t.return}if(X=n,j=n=de(n.current,null),J=fn=e,G=0,Qt=null,ws=cr=_e=0,dn=_t=null,ye!==null){for(e=0;e<ye.length;e++)if(t=ye[e],a=t.interleaved,a!==null){t.interleaved=null;var r=a.next,i=t.pending;if(i!==null){var s=i.next;i.next=r,a.next=s}t.pending=a}ye=null}return n}function Ud(n,e){do{var t=j;try{if(os(),ka.current=Ka,Ga){for(var a=q.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}Ga=!1}if(Ce=0,W=Q=q=null,At=!1,Vt=0,Es.current=null,t===null||t.return===null){G=1,Qt=e,j=null;break}n:{var i=n,s=t.return,l=t,o=e;if(e=J,l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,b=l,f=b.tag;if(!(b.mode&1)&&(f===0||f===11||f===15)){var m=b.alternate;m?(b.updateQueue=m.updateQueue,b.memoizedState=m.memoizedState,b.lanes=m.lanes):(b.updateQueue=null,b.memoizedState=null)}var h=Sl(s);if(h!==null){h.flags&=-257,Al(h,s,l,i,e),h.mode&1&&kl(i,c,e),e=h,o=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(o),e.updateQueue=y}else x.add(o);break n}else{if(!(e&1)){kl(i,c,e),Cs();break n}o=Error(v(426))}}else if($&&l.mode&1){var P=Sl(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Al(P,s,l,i,e),ss(et(o,l));break n}}i=o=et(o,l),G!==4&&(G=2),_t===null?_t=[i]:_t.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var p=_d(i,o,e);vl(i,p);break n;case 1:l=o;var d=i.type,u=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(le===null||!le.has(u)))){i.flags|=65536,e&=-e,i.lanes|=e;var g=Dd(i,l,e);vl(i,g);break n}}i=i.return}while(i!==null)}Gd(t)}catch(w){e=w,j===t&&t!==null&&(j=t=t.return);continue}break}while(!0)}function jd(){var n=Wa.current;return Wa.current=Ka,n===null?Ka:n}function Cs(){(G===0||G===3||G===2)&&(G=4),X===null||!(_e&268435455)&&!(cr&268435455)||Zn(X,J)}function Ja(n,e){var t=B;B|=2;var a=jd();(X!==n||J!==e)&&(qn=null,we(n,e));do try{gu();break}catch(r){Ud(n,r)}while(!0);if(os(),B=t,Wa.current=a,j!==null)throw Error(v(261));return X=null,J=0,G}function gu(){for(;j!==null;)Qd(j)}function vu(){for(;j!==null&&!Hc();)Qd(j)}function Qd(n){var e=Wd(n.alternate,n,fn);n.memoizedProps=n.pendingProps,e===null?Gd(n):j=e,Es.current=null}function Gd(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=cu(t,e),t!==null){t.flags&=32767,j=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{G=6,j=null;return}}else if(t=du(t,e,fn),t!==null){j=t;return}if(e=e.sibling,e!==null){j=e;return}j=e=n}while(e!==null);G===0&&(G=5)}function he(n,e,t){var a=L,r=kn.transition;try{kn.transition=null,L=1,hu(n,e,t,a)}finally{kn.transition=r,L=a}return null}function hu(n,e,t,a){do We();while(ee!==null);if(B&6)throw Error(v(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(v(177));n.callbackNode=null,n.callbackPriority=0;var i=t.lanes|t.childLanes;if(Jc(n,i),n===X&&(j=X=null,J=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ba||(ba=!0,Xd(Ta,function(){return We(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=kn.transition,kn.transition=null;var s=L;L=1;var l=B;B|=4,Es.current=null,uu(n,t),zd(t,n),Fp(fi),Oa=!!mi,fi=mi=null,n.current=t,mu(t),Vc(),B=l,L=s,kn.transition=i}else n.current=t;if(ba&&(ba=!1,ee=n,Ya=r),i=n.pendingLanes,i===0&&(le=null),Qc(t.stateNode),mn(n,U()),e!==null)for(a=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],a(r.value,{componentStack:r.stack,digest:r.digest});if(Xa)throw Xa=!1,n=Ii,Ii=null,n;return Ya&1&&n.tag!==0&&We(),i=n.pendingLanes,i&1?n===Oi?Dt++:(Dt=0,Oi=n):Dt=0,fe(),null}function We(){if(ee!==null){var n=_o(Ya),e=kn.transition,t=L;try{if(kn.transition=null,L=16>n?16:n,ee===null)var a=!1;else{if(n=ee,ee=null,Ya=0,B&6)throw Error(v(331));var r=B;for(B|=4,E=n.current;E!==null;){var i=E,s=i.child;if(E.flags&16){var l=i.deletions;if(l!==null){for(var o=0;o<l.length;o++){var c=l[o];for(E=c;E!==null;){var b=E;switch(b.tag){case 0:case 11:case 15:Ct(8,b,i)}var f=b.child;if(f!==null)f.return=b,E=f;else for(;E!==null;){b=E;var m=b.sibling,h=b.return;if(Fd(b),b===c){E=null;break}if(m!==null){m.return=h,E=m;break}E=h}}}var x=i.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}E=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,E=s;else n:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ct(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,E=p;break n}E=i.return}}var d=n.current;for(E=d;E!==null;){s=E;var u=s.child;if(s.subtreeFlags&2064&&u!==null)u.return=s,E=u;else n:for(s=d;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:dr(9,l)}}catch(w){z(l,l.return,w)}if(l===s){E=null;break n}var g=l.sibling;if(g!==null){g.return=l.return,E=g;break n}E=l.return}}if(B=r,fe(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(er,n)}catch{}a=!0}return a}finally{L=t,kn.transition=e}}return!1}function Fl(n,e,t){e=et(t,e),e=_d(n,e,1),n=se(n,e,1),e=sn(),n!==null&&(Kt(n,1,e),mn(n,e))}function z(n,e,t){if(n.tag===3)Fl(n,n,t);else for(;e!==null;){if(e.tag===3){Fl(e,n,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(le===null||!le.has(a))){n=et(t,n),n=Dd(e,n,1),e=se(e,n,1),n=sn(),e!==null&&(Kt(e,1,n),mn(e,n));break}}e=e.return}}function xu(n,e,t){var a=n.pingCache;a!==null&&a.delete(e),e=sn(),n.pingedLanes|=n.suspendedLanes&t,X===n&&(J&t)===t&&(G===4||G===3&&(J&130023424)===J&&500>U()-ks?we(n,0):ws|=t),mn(n,e)}function Kd(n,e){e===0&&(n.mode&1?(e=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):e=1);var t=sn();n=Qn(n,e),n!==null&&(Kt(n,e,t),mn(n,t))}function yu(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Kd(n,t)}function Eu(n,e){var t=0;switch(n.tag){case 13:var a=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=n.stateNode;break;default:throw Error(v(314))}a!==null&&a.delete(e),Kd(n,t)}var Wd;Wd=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||pn.current)cn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return cn=!1,ou(n,e,t);cn=!!(n.flags&131072)}else cn=!1,$&&e.flags&1048576&&Zo(e,Ha,e.index);switch(e.lanes=0,e.tag){case 2:var a=e.type;Aa(n,e),n=e.pendingProps;var r=Ye(e,an.current);Ke(e,t),r=gs(null,e,a,n,r,t);var i=vs();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(a)?(i=!0,Na(e)):i=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ps(e),r.updater=or,e.stateNode=r,r._reactInternals=e,ki(e,a,n,t),e=Ci(null,e,a,!0,i,t)):(e.tag=0,$&&i&&rs(e),rn(null,e,r,t),e=e.child),e;case 16:a=e.elementType;n:{switch(Aa(n,e),n=e.pendingProps,r=a._init,a=r(a._payload),e.type=a,r=e.tag=ku(a),n=Dn(a,n),r){case 0:e=Ai(null,e,a,n,t);break n;case 1:e=Dl(null,e,a,n,t);break n;case 11:e=Cl(null,e,a,n,t);break n;case 14:e=_l(null,e,a,Dn(a.type,n),t);break n}throw Error(v(306,a,""))}return e;case 0:return a=e.type,r=e.pendingProps,r=e.elementType===a?r:Dn(a,r),Ai(n,e,a,r,t);case 1:return a=e.type,r=e.pendingProps,r=e.elementType===a?r:Dn(a,r),Dl(n,e,a,r,t);case 3:n:{if(Ld(e),n===null)throw Error(v(387));a=e.pendingProps,i=e.memoizedState,r=i.element,id(n,e),ja(e,a,null,t);var s=e.memoizedState;if(a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){r=et(Error(v(423)),e),e=Rl(n,e,a,t,r);break n}else if(a!==r){r=et(Error(v(424)),e),e=Rl(n,e,a,t,r);break n}else for(bn=ie(e.stateNode.containerInfo.firstChild),gn=e,$=!0,Mn=null,t=ad(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Je(),a===r){e=Gn(n,e,t);break n}rn(n,e,a,t)}e=e.child}return e;case 5:return sd(e),n===null&&yi(e),a=e.type,r=e.pendingProps,i=n!==null?n.memoizedProps:null,s=r.children,bi(a,r)?s=null:i!==null&&bi(a,i)&&(e.flags|=32),Bd(n,e),rn(n,e,s,t),e.child;case 6:return n===null&&yi(e),null;case 13:return Td(n,e,t);case 4:return us(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=Ze(e,null,a,t):rn(n,e,a,t),e.child;case 11:return a=e.type,r=e.pendingProps,r=e.elementType===a?r:Dn(a,r),Cl(n,e,a,r,t);case 7:return rn(n,e,e.pendingProps,t),e.child;case 8:return rn(n,e,e.pendingProps.children,t),e.child;case 12:return rn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(a=e.type._context,r=e.pendingProps,i=e.memoizedProps,s=r.value,T(Va,a._currentValue),a._currentValue=s,i!==null)if(Tn(i.value,s)){if(i.children===r.children&&!pn.current){e=Gn(n,e,t);break n}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var o=l.firstContext;o!==null;){if(o.context===a){if(i.tag===1){o=Vn(-1,t&-t),o.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var b=c.pending;b===null?o.next=o:(o.next=b.next,b.next=o),c.pending=o}}i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),Ei(i.return,t,e),l.lanes|=t;break}o=o.next}}else if(i.tag===10)s=i.type===e.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(v(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ei(s,t,e),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}rn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,a=e.pendingProps.children,Ke(e,t),r=Sn(r),a=a(r),e.flags|=1,rn(n,e,a,t),e.child;case 14:return a=e.type,r=Dn(a,e.pendingProps),r=Dn(a.type,r),_l(n,e,a,r,t);case 15:return Rd(n,e,e.type,e.pendingProps,t);case 17:return a=e.type,r=e.pendingProps,r=e.elementType===a?r:Dn(a,r),Aa(n,e),e.tag=1,un(a)?(n=!0,Na(e)):n=!1,Ke(e,t),Cd(e,a,r),ki(e,a,r,t),Ci(null,e,a,!0,n,t);case 19:return Id(n,e,t);case 22:return Md(n,e,t)}throw Error(v(156,e.tag))};function Xd(n,e){return ko(n,e)}function wu(n,e,t,a){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(n,e,t,a){return new wu(n,e,t,a)}function _s(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ku(n){if(typeof n=="function")return _s(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Qi)return 11;if(n===Gi)return 14}return 2}function de(n,e){var t=n.alternate;return t===null?(t=wn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Da(n,e,t,a,r,i){var s=2;if(a=n,typeof n=="function")_s(n)&&(s=1);else if(typeof n=="string")s=5;else n:switch(n){case Te:return ke(t.children,r,i,e);case ji:s=8,r|=8;break;case Gr:return n=wn(12,t,e,r|2),n.elementType=Gr,n.lanes=i,n;case Kr:return n=wn(13,t,e,r),n.elementType=Kr,n.lanes=i,n;case Wr:return n=wn(19,t,e,r),n.elementType=Wr,n.lanes=i,n;case io:return pr(t,r,i,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ao:s=10;break n;case ro:s=9;break n;case Qi:s=11;break n;case Gi:s=14;break n;case Xn:s=16,a=null;break n}throw Error(v(130,n==null?n:typeof n,""))}return e=wn(s,t,e,r),e.elementType=n,e.type=a,e.lanes=i,e}function ke(n,e,t,a){return n=wn(7,n,a,e),n.lanes=t,n}function pr(n,e,t,a){return n=wn(22,n,a,e),n.elementType=io,n.lanes=t,n.stateNode={isHidden:!1},n}function Vr(n,e,t){return n=wn(6,n,null,e),n.lanes=t,n}function Ur(n,e,t){return e=wn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Su(n,e,t,a,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sr(0),this.expirationTimes=Sr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sr(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ds(n,e,t,a,r,i,s,l,o){return n=new Su(n,e,t,l,o),e===1?(e=1,i===!0&&(e|=8)):e=0,i=wn(3,null,null,e),n.current=i,i.stateNode=n,i.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(i),n}function Au(n,e,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Le,key:a==null?null:""+a,children:n,containerInfo:e,implementation:t}}function Yd(n){if(!n)return pe;n=n._reactInternals;n:{if(Me(n)!==n||n.tag!==1)throw Error(v(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(v(171))}if(n.tag===1){var t=n.type;if(un(t))return Yo(n,t,e)}return e}function Jd(n,e,t,a,r,i,s,l,o){return n=Ds(t,a,!0,n,r,i,s,l,o),n.context=Yd(null),t=n.current,a=sn(),r=oe(t),i=Vn(a,r),i.callback=e??null,se(t,i,r),n.current.lanes=r,Kt(n,r,a),mn(n,a),n}function ur(n,e,t,a){var r=e.current,i=sn(),s=oe(r);return t=Yd(t),e.context===null?e.context=t:e.pendingContext=t,e=Vn(i,s),e.payload={element:n},a=a===void 0?null:a,a!==null&&(e.callback=a),n=se(r,e,s),n!==null&&(Ln(n,r,s,i),wa(n,r,s)),s}function Za(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ql(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Rs(n,e){ql(n,e),(n=n.alternate)&&ql(n,e)}function Cu(){return null}var Zd=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ms(n){this._internalRoot=n}mr.prototype.render=Ms.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(v(409));ur(n,e,null,null)};mr.prototype.unmount=Ms.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;De(function(){ur(null,n,null,null)}),e[jn]=null}};function mr(n){this._internalRoot=n}mr.prototype.unstable_scheduleHydration=function(n){if(n){var e=Mo();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Jn.length&&e!==0&&e<Jn[t].priority;t++);Jn.splice(t,0,n),t===0&&Lo(n)}};function Bs(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function fr(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Nl(){}function _u(n,e,t,a,r){if(r){if(typeof a=="function"){var i=a;a=function(){var c=Za(s);i.call(c)}}var s=Jd(e,a,n,0,null,!1,!1,"",Nl);return n._reactRootContainer=s,n[jn]=s.current,Ft(n.nodeType===8?n.parentNode:n),De(),s}for(;r=n.lastChild;)n.removeChild(r);if(typeof a=="function"){var l=a;a=function(){var c=Za(o);l.call(c)}}var o=Ds(n,0,!1,null,null,!1,!1,"",Nl);return n._reactRootContainer=o,n[jn]=o.current,Ft(n.nodeType===8?n.parentNode:n),De(function(){ur(e,o,t,a)}),o}function br(n,e,t,a,r){var i=t._reactRootContainer;if(i){var s=i;if(typeof r=="function"){var l=r;r=function(){var o=Za(s);l.call(o)}}ur(e,s,n,r)}else s=_u(t,e,n,r,a);return Za(s)}Do=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ht(e.pendingLanes);t!==0&&(Xi(e,t|1),mn(e,U()),!(B&6)&&(tt=U()+500,fe()))}break;case 13:De(function(){var a=Qn(n,1);if(a!==null){var r=sn();Ln(a,n,1,r)}}),Rs(n,1)}};Yi=function(n){if(n.tag===13){var e=Qn(n,134217728);if(e!==null){var t=sn();Ln(e,n,134217728,t)}Rs(n,134217728)}};Ro=function(n){if(n.tag===13){var e=oe(n),t=Qn(n,e);if(t!==null){var a=sn();Ln(t,n,e,a)}Rs(n,e)}};Mo=function(){return L};Bo=function(n,e){var t=L;try{return L=n,e()}finally{L=t}};ii=function(n,e,t){switch(e){case"input":if(Jr(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==n&&a.form===n.form){var r=ir(a);if(!r)throw Error(v(90));lo(a),Jr(a,r)}}}break;case"textarea":co(n,t);break;case"select":e=t.value,e!=null&&Ue(n,!!t.multiple,e,!1)}};vo=Ss;ho=De;var Du={usingClientEntryPoint:!1,Events:[Xt,$e,ir,bo,go,Ss]},bt={findFiberByHostInstance:xe,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ru={bundleType:bt.bundleType,version:bt.version,rendererPackageName:bt.rendererPackageName,rendererConfig:bt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Eo(n),n===null?null:n.stateNode},findFiberByHostInstance:bt.findFiberByHostInstance||Cu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ga.isDisabled&&ga.supportsFiber)try{er=ga.inject(Ru),$n=ga}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Du;hn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bs(e))throw Error(v(200));return Au(n,e,null,t)};hn.createRoot=function(n,e){if(!Bs(n))throw Error(v(299));var t=!1,a="",r=Zd;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ds(n,1,!1,null,null,t,!1,a,r),n[jn]=e.current,Ft(n.nodeType===8?n.parentNode:n),new Ms(e)};hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(v(188)):(n=Object.keys(n).join(","),Error(v(268,n)));return n=Eo(e),n=n===null?null:n.stateNode,n};hn.flushSync=function(n){return De(n)};hn.hydrate=function(n,e,t){if(!fr(e))throw Error(v(200));return br(null,n,e,!0,t)};hn.hydrateRoot=function(n,e,t){if(!Bs(n))throw Error(v(405));var a=t!=null&&t.hydratedSources||null,r=!1,i="",s=Zd;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),e=Jd(e,null,n,1,t??null,r,!1,i,s),n[jn]=e.current,Ft(n),a)for(n=0;n<a.length;n++)t=a[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new mr(e)};hn.render=function(n,e,t){if(!fr(e))throw Error(v(200));return br(null,n,e,!1,t)};hn.unmountComponentAtNode=function(n){if(!fr(n))throw Error(v(40));return n._reactRootContainer?(De(function(){br(null,null,n,!1,function(){n._reactRootContainer=null,n[jn]=null})}),!0):!1};hn.unstable_batchedUpdates=Ss;hn.unstable_renderSubtreeIntoContainer=function(n,e,t,a){if(!fr(t))throw Error(v(200));if(n==null||n._reactInternals===void 0)throw Error(v(38));return br(n,e,t,!1,a)};hn.version="18.3.1-next-f1338f8080-20240426";function nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc)}catch(n){console.error(n)}}nc(),Zl.exports=hn;var Mu=Zl.exports,ec,zl=Mu;ec=zl.createRoot,zl.hydrateRoot;const Bu=`<!DOCTYPE html>
<html lang="en" data-lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>ROSHD Admin — Control Center</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
/* ═══════════════════════════════════════════════════════════
   ROOT VARIABLES
═══════════════════════════════════════════════════════════ */
:root {
  --bg:          #080c14;
  --bg2:         #0d1220;
  --surface:     #111827;
  --surface2:    #1a2236;
  --card:        #141e30;
  --card2:       #1c2840;
  --border:      rgba(255,255,255,0.07);
  --border2:     rgba(255,255,255,0.12);
  --gold:        #c9973a;
  --gold-light:  #e5b55a;
  --gold-dim:    rgba(201,151,58,0.18);
  --gold-glow:   rgba(201,151,58,0.08);
  --text:        rgba(255,255,255,0.92);
  --text-dim:    rgba(255,255,255,0.55);
  --text-mute:   rgba(255,255,255,0.30);
  --green:       #22c55e;
  --green-dim:   rgba(34,197,94,0.14);
  --red:         #ef4444;
  --red-dim:     rgba(239,68,68,0.14);
  --blue:        #3b82f6;
  --blue-dim:    rgba(59,130,246,0.14);
  --amber:       #f59e0b;
  --amber-dim:   rgba(245,158,11,0.14);
  --purple:      #8b5cf6;
  --purple-dim:  rgba(139,92,246,0.14);
  --teal:        #14b8a6;
  --teal-dim:    rgba(20,184,166,0.14);
  --sidebar-w:   256px;
  --topbar-h:    60px;
  --radius:      10px;
  --radius-sm:   6px;
  --shadow:      0 4px 24px rgba(0,0,0,0.4);
  --shadow-lg:   0 12px 48px rgba(0,0,0,0.55);
  --font-main:   'DM Sans', sans-serif;
  --font-ar:     'Cairo', sans-serif;
  --font-mono:   'DM Mono', monospace;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  font-family: var(--font-main);
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  min-height: 100vh;
}

/* Mobile browsers should not auto-zoom text unexpectedly */
html, body {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

html[data-lang="ar"] {
  direction: rtl;
}

html[data-lang="ar"] body,
html[data-lang="ar"] .btn,
html[data-lang="ar"] .form-input,
html[data-lang="ar"] .filter-select,
html[data-lang="ar"] .db-select,
html[data-lang="ar"] .nav-item,
html[data-lang="ar"] .page-title,
html[data-lang="ar"] .topbar-title {
  font-family: var(--font-ar);
}

html[data-lang="en"] .ar { display: none !important; }
html[data-lang="ar"] .en { display: none !important; }

html[data-lang="ar"] .main {
  margin-left: 0;
  margin-right: var(--sidebar-w);
}

html[data-lang="ar"] .sidebar {
  left: auto;
  right: 0;
}

html[data-lang="ar"] .topbar-menu-btn svg {
  transform: scaleX(-1);
}

/* Match customer dashboard typography (lighter than old admin) */
.sidebar-title,
.admin-name,
.topbar-title,
.page-eyebrow,
.page-title,
.stat-value,
.modal-title,
.confirm-title {
  font-weight: 600;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background:
    radial-gradient(ellipse 800px 600px at 20% -10%, rgba(201,151,58,0.045) 0%, transparent 60%),
    radial-gradient(ellipse 600px 400px at 85% 90%, rgba(59,130,246,0.04) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.form-group { margin-bottom: 18px; }

.form-label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  background: var(--bg2);
  border: 1px solid var(--border2);
  border-radius: var(--radius-sm);
  color: var(--text);
  font-family: var(--font-main);
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.form-input:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(201,151,58,0.12);
}
.form-input::placeholder { color: var(--text-mute); }

textarea.form-input { resize: vertical; min-height: 100px; }

.pw-wrap { position: relative; }
.pw-wrap .form-input { padding-right: 46px; }
.pw-eye {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-dim);
  padding: 4px;
  border-radius: 4px;
  transition: color 0.15s;
}
.pw-eye:hover { color: var(--gold); }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: var(--radius-sm);
  font-family: var(--font-main);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: 0.04em;
  min-height: 42px;
}

.btn-primary {
  background: var(--gold);
  color: #0a0f1e;
}
.btn-primary:hover { background: var(--gold-light); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(201,151,58,0.3); }

.btn-secondary {
  background: var(--surface2);
  color: var(--text);
  border: 1px solid var(--border2);
}
.btn-secondary:hover { background: var(--card2); border-color: var(--gold); color: var(--gold-light); }

.btn-danger {
  background: var(--red-dim);
  color: #fca5a5;
  border: 1px solid rgba(239,68,68,0.3);
}
.btn-danger:hover { background: rgba(239,68,68,0.25); }

.btn-success {
  background: var(--green-dim);
  color: #86efac;
  border: 1px solid rgba(34,197,94,0.3);
}
.btn-success:hover { background: rgba(34,197,94,0.22); }

.btn-sm { padding: 7px 14px; font-size: 12px; min-height: 34px; }
.btn-icon { padding: 8px; min-height: 36px; width: 36px; }
.btn-full { width: 100%; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none !important; }

/* ═══════════════════════════════════════════════════════════
   MAIN LAYOUT
═══════════════════════════════════════════════════════════ */
#adminApp {
  display: flex;
  min-height: 100vh;
}

/* ═══════════════════════════════════════════════════════════
   SIDEBAR
═══════════════════════════════════════════════════════════ */
.sidebar {
  width: var(--sidebar-w);
  background: var(--bg2);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0; left: 0; bottom: 0;
  z-index: 200;
  transition: transform 0.3s ease;
  overflow-y: auto;
}

.sidebar::-webkit-scrollbar { width: 3px; }
.sidebar::-webkit-scrollbar-thumb { background: rgba(201,151,58,0.2); border-radius: 99px; }

.sidebar-brand {
  padding: 20px 20px 16px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.sidebar-brand-icon {
  width: 40px;
  height: 40px;
  border-radius: 9px;
  background: var(--gold-dim);
  border: 1px solid rgba(201,151,58,0.3);
  display: grid;
  place-items: center;
  font-size: 18px;
  flex-shrink: 0;
}

.sidebar-brand-text strong {
  display: block;
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.1em;
}

.sidebar-brand-text .badge-admin {
  display: inline-block;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold);
  background: var(--gold-dim);
  border: 1px solid rgba(201,151,58,0.25);
  border-radius: 4px;
  padding: 2px 7px;
  margin-top: 3px;
}

.sidebar-admin-strip {
  padding: 14px 18px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.admin-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #0a0f1e;
  font-size: 14px;
  flex-shrink: 0;
}

.admin-info { overflow: hidden; }
.admin-name { font-size: 13px; font-weight: 700; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.admin-role {
  font-size: 10px;
  color: var(--gold);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.sidebar-nav { flex: 1; padding: 12px 10px; }

.nav-section {
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-mute);
  padding: 12px 10px 6px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  color: rgba(246, 248, 252, 0.72);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, border-color 0.18s;
  position: relative;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  -webkit-tap-highlight-color: transparent;
  min-height: 42px;
  letter-spacing: 0.02em;
}

.nav-item svg {
  flex-shrink: 0;
  stroke: currentColor;
  fill: none;
}

.nav-item:hover { background: rgba(255,255,255,0.06); color: rgba(246, 248, 252, 0.92); }

.nav-item.active {
  background: rgba(255,255,255,0.08);
  color: var(--gold-light);
  border: none;
  box-shadow: inset 0 0 0 1px rgba(201, 151, 58, 0.12);
}

.nav-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 18%;
  bottom: 18%;
  width: 3px;
  background: var(--gold);
  border-radius: 0 99px 99px 0;
}

html[data-lang="ar"] .nav-item { text-align: right; }
html[data-lang="ar"] .nav-item.active::before {
  left: auto;
  right: 0;
  border-radius: 99px 0 0 99px;
}

.nav-badge {
  margin-left: auto;
  background: var(--red);
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 99px;
  min-width: 18px;
  text-align: center;
}

.nav-badge.gold { background: var(--gold); color: #0a0f1e; }
.nav-badge.green { background: var(--green); color: #fff; }

.sidebar-footer {
  padding: 12px 10px;
  border-top: 1px solid var(--border);
  flex-shrink: 0;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  background: none;
  border: none;
  color: rgba(239,68,68,0.65);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.logout-btn:hover { background: var(--red-dim); color: #fca5a5; }

/* ═══════════════════════════════════════════════════════════
   MAIN AREA
═══════════════════════════════════════════════════════════ */
.main {
  margin-left: var(--sidebar-w);
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 0;
}

/* ═══════════════════════════════════════════════════════════
   TOPBAR
═══════════════════════════════════════════════════════════ */
.topbar {
  height: var(--topbar-h);
  background: var(--bg2);
  border-bottom: 1px solid var(--border);
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  gap: 16px;
}

.topbar-left { display: flex; align-items: center; gap: 14px; min-width: 0; }

.topbar-menu-btn {
  display: none;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: 1px solid var(--border2);
  background: var(--surface);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-dim);
  transition: all 0.2s;
  flex-shrink: 0;
}
.topbar-menu-btn:hover { border-color: var(--gold); color: var(--gold-light); }

.topbar-title { font-size: 17px; font-weight: 800; color: var(--text); }
.topbar-breadcrumb { font-size: 11px; color: var(--text-mute); margin-top: 1px; }
.topbar-breadcrumb span { color: var(--gold); }

.topbar-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

.lang-toggle-nav {
  display: flex;
  align-items: center;
  gap: 2px;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px;
  padding: 3px;
}
.lang-nav-btn {
  background: none;
  border: none;
  color: rgba(255,255,255,0.48);
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.22s ease;
  font-family: 'DM Sans', sans-serif;
  min-height: 34px;
  min-width: 42px;
  line-height: 1;
}
.lang-nav-btn.active { background: var(--gold); color: #0f1c3d; box-shadow: 0 2px 8px rgba(184,150,46,0.35); }
.lang-nav-btn:hover:not(.active) { color: rgba(255,255,255,0.85); background: rgba(255,255,255,0.06); }

.topbar-search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--surface);
  border: 1px solid var(--border2);
  border-radius: var(--radius-sm);
  padding: 7px 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.topbar-search:focus-within { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,151,58,0.1); }
.topbar-search input {
  background: none;
  border: none;
  outline: none;
  color: var(--text);
  font-family: var(--font-main);
  font-size: 13px;
  width: 180px;
}
.topbar-search input::placeholder { color: var(--text-mute); }

.topbar-icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--border2);
  background: var(--surface);
  display: grid;
  place-items: center;
  cursor: pointer;
  color: var(--text-dim);
  transition: all 0.2s;
  position: relative;
}
.topbar-icon-btn:hover { border-color: var(--gold); color: var(--gold-light); }

.notif-dot {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--red);
  border: 1.5px solid var(--bg2);
}

.status-pill {
  display: flex;
  align-items: center;
  gap: 7px;
  background: var(--green-dim);
  border: 1px solid rgba(34,197,94,0.25);
  color: #86efac;
  padding: 6px 14px;
  border-radius: 99px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--green);
  animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

/* ═══════════════════════════════════════════════════════════
   CONTENT AREA
═══════════════════════════════════════════════════════════ */
.content {
  flex: 1;
  padding: 28px;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
}

.panel { display: none; animation: panelIn 0.3s ease; }
.panel.active { display: block; }
.panel.panel--customer-mirror.active {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 168px);
}
@keyframes panelIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

.admin-customer-mirror-shell {
  flex: 1;
  display: flex;
  min-height: min(760px, calc(100vh - 200px));
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border2);
  background: var(--surface);
}
.admin-customer-dash-iframe {
  flex: 1;
  width: 100%;
  min-height: 520px;
  border: 0;
  display: block;
}

.exec-editor { max-width: 1100px; }
#panel-executive .exec-editor {
  max-width: none;
  padding-top: 120px;
}
#panel-cx-drivers .exec-editor {
  max-width: none;
  padding-top: 120px;
}
.exec-editor-section {
  margin-bottom: 28px;
  padding: 20px 22px;
  border-radius: 12px;
  border: 1px solid var(--border2);
  background: var(--surface);
}
#panel-executive .exec-editor-section--sticky {
  position: fixed;
  top: var(--topbar-h);
  left: calc(var(--sidebar-w) + 28px);
  right: 28px;
  z-index: 180;
  margin-top: 0;
  margin-bottom: 16px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.14);
}
#panel-cx-drivers .exec-editor-section--sticky {
  position: fixed;
  top: var(--topbar-h);
  left: calc(var(--sidebar-w) + 28px);
  right: 28px;
  z-index: 170;
  margin-top: 0;
  margin-bottom: 16px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.14);
}
/* Executive / CX — filter strip (admin dark theme; markup matches customer db-* for parity) */
.admin-dash-filter-mirror {
  --afs-bg: var(--card);
}
.admin-dash-filter-mirror .db-filter-bar {
  padding: 8px 24px 10px;
  background: var(--afs-bg);
  border-bottom: 1px solid var(--border);
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px 18px;
  flex-shrink: 0;
}
.admin-dash-filter-mirror .db-filter-bar__lead {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.admin-dash-filter-mirror .db-filter-bar__title {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1;
}
html[data-lang="ar"] .admin-dash-filter-mirror .db-filter-bar__title {
  font-family: var(--font-ar);
  letter-spacing: 0;
  font-size: 11px;
}
.admin-dash-filter-mirror .db-filter-bar-scroll-outer {
  min-width: 0;
  position: relative;
  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;
}
.admin-dash-filter-mirror .db-filter-bar-scroll-outer::before,
.admin-dash-filter-mirror .db-filter-bar-scroll-outer::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 14px;
  pointer-events: none;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.admin-dash-filter-mirror .db-filter-bar-scroll-outer.is-scrollable-start::before,
.admin-dash-filter-mirror .db-filter-bar-scroll-outer.is-scrollable-end::after {
  opacity: 1;
}
.admin-dash-filter-mirror .db-filter-bar-scroll-outer::before {
  left: 0;
  background: linear-gradient(90deg, var(--afs-bg), transparent);
}
.admin-dash-filter-mirror .db-filter-bar-scroll-outer::after {
  right: 0;
  background: linear-gradient(270deg, var(--afs-bg), transparent);
}
html[data-lang="ar"] .admin-dash-filter-mirror .db-filter-bar-scroll-outer::before {
  left: auto;
  right: 0;
  background: linear-gradient(270deg, var(--afs-bg), transparent);
}
html[data-lang="ar"] .admin-dash-filter-mirror .db-filter-bar-scroll-outer::after {
  right: auto;
  left: 0;
  background: linear-gradient(90deg, var(--afs-bg), transparent);
}
.admin-dash-filter-mirror .db-filter-bar-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 8px 12px;
  padding: 2px 0;
  max-width: 100%;
}
.admin-dash-filter-mirror .db-filter-chip {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
  flex: 1 1 128px;
  max-width: 200px;
}
.admin-dash-filter-mirror .db-filter-chip-lbl {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-mute);
  line-height: 1.2;
  padding-inline-start: 1px;
}
html[data-lang="ar"] .admin-dash-filter-mirror .db-filter-chip-lbl {
  font-family: var(--font-ar);
  letter-spacing: 0;
  font-size: 10px;
}
.admin-dash-filter-mirror .db-filter-chip-select-wrap {
  position: relative;
  border-radius: 6px;
  transition: box-shadow 0.15s ease;
}
.admin-dash-filter-mirror .db-filter-chip-select-wrap:focus-within {
  box-shadow: 0 0 0 1px rgba(184, 150, 46, 0.55);
}
.admin-dash-filter-mirror .db-select {
  width: 100%;
  min-width: 0;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
  background-color: rgba(255, 255, 255, 0.03);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23a89040' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m3.5 4.5 2.5 2.5 2.5-2.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 11px 11px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.9);
  padding: 6px 26px 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  font-family: var(--font-main);
  line-height: 1.3;
  cursor: pointer;
  outline: none;
  transition: border-color 0.15s ease, background-color 0.15s ease;
}
html[data-lang="ar"] .admin-dash-filter-mirror .db-select {
  font-family: var(--font-ar);
  direction: rtl;
  background-position: left 8px center;
  padding: 6px 10px 6px 26px;
}
.admin-dash-filter-mirror .db-select:hover {
  border-color: rgba(201, 151, 58, 0.35);
  background-color: rgba(255, 255, 255, 0.06);
}
.admin-dash-filter-mirror .db-select:focus-visible {
  border-color: rgba(201, 151, 58, 0.55);
}
.admin-dash-filter-mirror .db-select:active {
  transform: none;
}
.admin-dash-filter-mirror .db-select option {
  background: var(--card);
  color: var(--text);
}
.admin-dash-filter-mirror .db-filter-bar__trail {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: nowrap;
  justify-content: flex-end;
}
/* Matches customer dashboard Export control (outline gold, compact) */
.admin-dash-filter-mirror .admin-filter-bar-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-shrink: 0;
  white-space: nowrap;
  background: transparent;
  color: var(--gold-light);
  border: 1px solid rgba(184, 150, 46, 0.4);
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  font-family: var(--font-main);
  cursor: pointer;
  outline: none;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  box-shadow: none;
}
html[data-lang="ar"] .admin-dash-filter-mirror .admin-filter-bar-action {
  font-family: var(--font-ar);
}
.admin-dash-filter-mirror .admin-filter-bar-action:hover {
  background: rgba(184, 150, 46, 0.1);
  border-color: rgba(184, 150, 46, 0.65);
  color: var(--gold-light);
}
.admin-dash-filter-mirror .admin-filter-bar-action:active {
  background: rgba(184, 150, 46, 0.06);
}
.admin-dash-filter-mirror .admin-filter-bar-action:focus-visible {
  box-shadow: 0 0 0 1px rgba(184, 150, 46, 0.45);
}
@media (max-width: 1100px) {
  .admin-dash-filter-mirror .db-filter-bar {
    grid-template-columns: minmax(0, 1fr);
    gap: 10px;
  }
  .admin-dash-filter-mirror .db-filter-bar__trail {
    justify-content: space-between;
    width: 100%;
  }
  .admin-dash-filter-mirror .db-filter-bar-scroll-outer {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: rgba(184, 150, 46, 0.25) transparent;
  }
  .admin-dash-filter-mirror .db-filter-bar-scroll-outer::-webkit-scrollbar {
    height: 4px;
  }
  .admin-dash-filter-mirror .db-filter-bar-scroll-outer::-webkit-scrollbar-thumb {
    background: rgba(184, 150, 46, 0.28);
    border-radius: 99px;
  }
  .admin-dash-filter-mirror .db-filter-bar-inner {
    flex-wrap: nowrap;
    padding: 2px 0;
    scroll-snap-type: x proximity;
    width: max-content;
    max-width: none;
    min-width: 100%;
    box-sizing: border-box;
  }
  .admin-dash-filter-mirror .db-filter-chip {
    flex: 0 0 auto;
    width: min(184px, 70vw);
    max-width: 200px;
    scroll-snap-align: start;
  }
}
@media (max-width: 520px) {
  .admin-dash-filter-mirror .db-filter-chip {
    width: min(220px, 82vw);
  }
}
@media (max-width: 900px) {
  #panel-executive .exec-editor {
    padding-top: 156px;
  }
  #panel-cx-drivers .exec-editor {
    padding-top: 156px;
  }
  #panel-executive .exec-editor-section--sticky {
    top: calc(var(--topbar-h) + 4px);
    left: 20px;
    right: 20px;
  }
  #panel-cx-drivers .exec-editor-section--sticky {
    top: calc(var(--topbar-h) + 4px);
    left: 20px;
    right: 20px;
  }
}
@media (max-width: 480px) {
  #panel-executive .exec-editor {
    padding-top: 174px;
  }
  #panel-cx-drivers .exec-editor {
    padding-top: 174px;
  }
  #panel-executive .exec-editor-section--sticky {
    left: 14px;
    right: 14px;
  }
  #panel-cx-drivers .exec-editor-section--sticky {
    left: 14px;
    right: 14px;
  }
}
#panel-executive { overflow: visible; }
.exec-editor-section h3 {
  margin: 0 0 14px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
}
.exec-editor-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
@media (max-width: 900px) { .exec-editor-grid2 { grid-template-columns: 1fr; } }
.exec-editor-grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
@media (max-width: 900px) { .exec-editor-grid3 { grid-template-columns: 1fr; } }
.exec-editor textarea.form-input { min-height: 88px; resize: vertical; font-size: 13px; line-height: 1.45; }
.exec-flow-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
@media (max-width: 1100px) { .exec-flow-grid { grid-template-columns: 1fr 1fr; } }
.exec-flow-step { padding: 10px 12px; border-radius: 8px; border: 1px solid var(--border2); background: rgba(255,255,255,0.03); }
.exec-flow-step label { display: block; font-size: 10px; font-weight: 700; color: var(--text-mute); margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.06em; }
.exec-flow-step input { width: 100%; font-size: 12px; }
.exec-editor-actions { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-top: 8px; }
.exec-editor-hint { font-size: 12px; color: var(--text-dim); margin-top: 10px; line-height: 1.5; }

/* ═══════════════════════════════════════════════════════════
   PAGE HEADERS
═══════════════════════════════════════════════════════════ */
.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.page-eyebrow { font-size: 10px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); margin-bottom: 6px; }
.page-title { font-size: 22px; font-weight: 800; color: var(--text); }
.page-subtitle { font-size: 13px; color: var(--text-dim); margin-top: 4px; }
.page-header-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }

/* ═══════════════════════════════════════════════════════════
   STAT CARDS
═══════════════════════════════════════════════════════════ */
.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 22px;
  position: relative;
  overflow: hidden;
  transition: all 0.22s;
}
.stat-card:hover { transform: translateY(-2px); border-color: var(--border2); box-shadow: var(--shadow); }
.stat-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--accent, var(--gold));
}

.stat-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.stat-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: var(--icon-bg, var(--gold-dim));
}

.stat-trend {
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 3px;
}
.stat-trend.up { color: var(--green); }
.stat-trend.down { color: var(--red); }
.stat-trend.neutral { color: var(--text-dim); }

.stat-value { font-size: 28px; font-weight: 800; color: var(--text); line-height: 1.1; margin-bottom: 4px; font-variant-numeric: tabular-nums; }
.stat-label { font-size: 11px; color: var(--text-dim); letter-spacing: 0.06em; font-weight: 600; }
.stat-sub { font-size: 11px; color: var(--text-mute); margin-top: 6px; }

/* ═══════════════════════════════════════════════════════════
   CARDS
═══════════════════════════════════════════════════════════ */
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 20px;
}

.card-header {
  padding: 16px 22px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.card-title { font-size: 15px; font-weight: 700; color: var(--text); }
.card-subtitle { font-size: 11px; color: var(--text-dim); margin-top: 2px; }
.card-actions { display: flex; align-items: center; gap: 8px; }

.card-body { padding: 22px; }
.card-body-sm { padding: 16px 18px; }

/* ═══════════════════════════════════════════════════════════
   TABLES
═══════════════════════════════════════════════════════════ */
.table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }

table.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  min-width: 600px;
}

table.data-table thead tr { border-bottom: 1px solid var(--border2); }

table.data-table th {
  padding: 10px 14px;
  text-align: left;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-mute);
  background: rgba(255,255,255,0.02);
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: color 0.15s;
}
table.data-table th:hover { color: var(--gold-light); }
table.data-table th .sort-icon { opacity: 0.4; margin-left: 4px; }
table.data-table th.sorted { color: var(--gold); }
table.data-table th.sorted .sort-icon { opacity: 1; }

table.data-table td {
  padding: 13px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.035);
  color: var(--text);
  vertical-align: middle;
}

table.data-table tbody tr { transition: background 0.15s; }
table.data-table tbody tr:hover td { background: rgba(255,255,255,0.025); }
table.data-table tbody tr:last-child td { border-bottom: none; }

.table-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 22px;
  border-top: 1px solid var(--border);
  gap: 12px;
  flex-wrap: wrap;
}

.pagination-info { font-size: 12px; color: var(--text-dim); }
.pagination-btns { display: flex; align-items: center; gap: 6px; }
.page-btn {
  min-width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid var(--border2);
  background: var(--surface);
  color: var(--text-dim);
  font-size: 12px;
  font-family: var(--font-main);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  display: grid;
  place-items: center;
  padding: 0 8px;
}
.page-btn:hover { border-color: var(--gold); color: var(--gold-light); }
.page-btn.active { background: var(--gold); color: #0a0f1e; border-color: var(--gold); }
.page-btn:disabled { opacity: 0.35; cursor: not-allowed; }

/* ═══════════════════════════════════════════════════════════
   BADGES / CHIPS
═══════════════════════════════════════════════════════════ */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 9px;
  border-radius: 99px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.badge-green  { background: var(--green-dim);  color: #86efac; border: 1px solid rgba(34,197,94,0.25); }
.badge-red    { background: var(--red-dim);    color: #fca5a5; border: 1px solid rgba(239,68,68,0.25); }
.badge-gold   { background: var(--gold-dim);   color: var(--gold-light); border: 1px solid rgba(201,151,58,0.3); }
.badge-blue   { background: var(--blue-dim);   color: #93c5fd; border: 1px solid rgba(59,130,246,0.25); }
.badge-purple { background: var(--purple-dim); color: #c4b5fd; border: 1px solid rgba(139,92,246,0.25); }
.badge-amber  { background: var(--amber-dim);  color: #fcd34d; border: 1px solid rgba(245,158,11,0.25); }
.badge-teal   { background: var(--teal-dim);   color: #5eead4; border: 1px solid rgba(20,184,166,0.25); }
.badge-gray   { background: rgba(255,255,255,0.06); color: var(--text-dim); border: 1px solid var(--border2); }

/* ═══════════════════════════════════════════════════════════
   SEARCH / FILTER BAR
═══════════════════════════════════════════════════════════ */
.filter-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-bottom: 1px solid var(--border);
  background: rgba(255,255,255,0.015);
  flex-wrap: wrap;
}

.filter-search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg2);
  border: 1px solid var(--border2);
  border-radius: var(--radius-sm);
  padding: 8px 14px;
  flex: 1;
  min-width: 200px;
  max-width: 320px;
  transition: border-color 0.2s;
}
.filter-search:focus-within { border-color: var(--gold); }
.filter-search input { background: none; border: none; outline: none; color: var(--text); font-family: var(--font-main); font-size: 13px; width: 100%; }
.filter-search input::placeholder { color: var(--text-mute); }
.filter-search svg { flex-shrink: 0; color: var(--text-mute); }

.filter-select {
  background: var(--bg2);
  border: 1px solid var(--border2);
  color: var(--text);
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  font-family: var(--font-main);
  font-size: 13px;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s;
  min-height: 38px;
}
.filter-select:focus { border-color: var(--gold); }
.filter-select option { background: var(--card); }

.filter-actions { margin-left: auto; display: flex; gap: 8px; }

/* ═══════════════════════════════════════════════════════════
   MODALS
═══════════════════════════════════════════════════════════ */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(6px);
  z-index: 9000;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
}
.modal-overlay.open { display: flex; }

.modal {
  background: var(--surface);
  border: 1px solid var(--border2);
  border-radius: 14px;
  width: 100%;
  max-width: 540px;
  box-shadow: var(--shadow-lg);
  animation: modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
  margin: auto;
  max-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
}

.modal-lg { max-width: 720px; }
.modal-xl { max-width: 900px; }

@keyframes modalIn { from { opacity: 0; transform: scale(0.9) translateY(16px); } to { opacity: 1; transform: scale(1) translateY(0); } }

.modal-header {
  padding: 22px 28px 18px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-shrink: 0;
}

.modal-title { font-size: 18px; font-weight: 800; color: var(--text); }
.modal-subtitle { font-size: 12px; color: var(--text-dim); margin-top: 3px; }

.modal-close {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  border: none;
  color: var(--text-dim);
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: all 0.2s;
  flex-shrink: 0;
}
.modal-close:hover { background: var(--red-dim); color: #fca5a5; }

.modal-body { padding: 24px 28px; overflow-y: auto; -webkit-overflow-scrolling: touch; flex: 1; }

.modal-footer {
  padding: 16px 28px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.modal-error {
  background: var(--red-dim);
  border: 1px solid rgba(239,68,68,0.3);
  color: #fca5a5;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  font-size: 13px;
  margin-bottom: 18px;
  display: none;
}
.modal-error.show { display: block; }
.modal-success {
  background: var(--green-dim);
  border: 1px solid rgba(34,197,94,0.3);
  color: #86efac;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  font-size: 13px;
  margin-bottom: 18px;
  display: none;
}
.modal-success.show { display: block; }

/* ═══════════════════════════════════════════════════════════
   FORM ELEMENTS
═══════════════════════════════════════════════════════════ */
.form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }

.form-select {
  width: 100%;
  padding: 12px 16px;
  background: var(--bg2);
  border: 1px solid var(--border2);
  border-radius: var(--radius-sm);
  color: var(--text);
  font-family: var(--font-main);
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  cursor: pointer;
  min-height: 44px;
}
.form-select:focus { border-color: var(--gold); }
.form-select option { background: var(--card); }

.form-hint { font-size: 11px; color: var(--text-mute); margin-top: 6px; }

.form-divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 20px 0;
}

.toggle-switch {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}
.toggle-track {
  width: 40px;
  height: 22px;
  border-radius: 99px;
  background: var(--surface2);
  border: 1px solid var(--border2);
  position: relative;
  transition: background 0.2s, border-color 0.2s;
  cursor: pointer;
}
.toggle-track.on { background: var(--gold); border-color: var(--gold); }
.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.2s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
}
.toggle-track.on .toggle-thumb { transform: translateX(18px); }

/* ═══════════════════════════════════════════════════════════
   TOAST
═══════════════════════════════════════════════════════════ */
.toast-container {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.toast {
  background: var(--surface2);
  border: 1px solid var(--border2);
  border-left: 4px solid var(--gold);
  color: var(--text);
  padding: 14px 18px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  max-width: 340px;
  box-shadow: var(--shadow);
  animation: toastIn 0.35s cubic-bezier(0.34,1.56,0.64,1);
  display: flex;
  align-items: center;
  gap: 10px;
}
.toast.success { border-left-color: var(--green); }
.toast.error   { border-left-color: var(--red); }
.toast.warning { border-left-color: var(--amber); }
@keyframes toastIn { from { opacity: 0; transform: translateX(24px); } to { opacity: 1; transform: translateX(0); } }

/* ═══════════════════════════════════════════════════════════
   SPECIFIC PANELS
═══════════════════════════════════════════════════════════ */

/* Overview sparklines */
.mini-bar-chart {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 40px;
}
.mini-bar-chart .bar {
  flex: 1;
  border-radius: 3px 3px 0 0;
  background: linear-gradient(180deg, var(--gold) 0%, rgba(201,151,58,0.3) 100%);
  min-height: 4px;
  transition: height 0.8s ease;
}

/* Activity feed */
.activity-feed { display: flex; flex-direction: column; gap: 0; }
.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 22px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: background 0.15s;
}
.activity-item:hover { background: rgba(255,255,255,0.02); }
.activity-item:last-child { border-bottom: none; }

.activity-icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.activity-content { flex: 1; min-width: 0; }
.activity-text { font-size: 13px; color: var(--text); line-height: 1.45; }
.activity-text b { color: var(--gold-light); font-weight: 700; }
.activity-time { font-size: 11px; color: var(--text-mute); margin-top: 3px; font-family: var(--font-mono); }
.activity-meta { display: flex; align-items: center; gap: 8px; margin-top: 5px; flex-wrap: wrap; }

/* User table avatar */
.user-cell { display: flex; align-items: center; gap: 10px; }
.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #0a0f1e;
  font-size: 12px;
  flex-shrink: 0;
}
.user-avatar.blue { background: linear-gradient(135deg, #2563eb, #60a5fa); color: #fff; }
.user-avatar.green { background: linear-gradient(135deg, #16a34a, #4ade80); color: #fff; }
.user-avatar.purple { background: linear-gradient(135deg, #7c3aed, #c4b5fd); color: #fff; }
.user-name { font-weight: 600; font-size: 13px; color: var(--text); }
.user-email { font-size: 11px; color: var(--text-mute); margin-top: 1px; font-family: var(--font-mono); }

/* Row action buttons */
.row-actions { display: flex; align-items: center; gap: 6px; }

/* Branch / KPI score bars */
.score-bar-row { display: flex; align-items: center; gap: 10px; font-size: 13px; }
.score-bar-label { width: 110px; flex-shrink: 0; font-weight: 600; color: var(--text); }
.score-bar-track { flex: 1; height: 8px; background: rgba(255,255,255,0.08); border-radius: 99px; overflow: hidden; }
.score-bar-fill { height: 100%; border-radius: 99px; background: linear-gradient(90deg, var(--gold), var(--gold-light)); transition: width 0.8s ease; }
.score-bar-val { font-size: 12px; color: var(--gold-light); font-weight: 700; font-variant-numeric: tabular-nums; min-width: 52px; text-align: right; }

/* Data upload zone */
.upload-zone {
  border: 2px dashed var(--border2);
  border-radius: var(--radius);
  padding: 48px 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  background: rgba(255,255,255,0.015);
}
.upload-zone:hover { border-color: var(--gold); background: var(--gold-glow); }
.upload-zone.drag-over { border-color: var(--gold-light); background: rgba(201,151,58,0.12); }
.upload-icon { font-size: 42px; margin-bottom: 16px; opacity: 0.7; }
.upload-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
.upload-desc { font-size: 13px; color: var(--text-dim); line-height: 1.55; }
.upload-input { display: none; }

/* Questionnaire items editor */
.q-item {
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  margin-bottom: 10px;
  background: rgba(255,255,255,0.02);
  transition: border-color 0.15s;
}
.q-item:hover { border-color: var(--border2); }
.q-item-head { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.q-code { font-family: var(--font-mono); font-size: 11px; font-weight: 600; background: var(--gold-dim); color: var(--gold-light); padding: 3px 8px; border-radius: 4px; flex-shrink: 0; }
.q-actions { margin-left: auto; display: flex; gap: 6px; }
.q-input { width: 100%; font-family: var(--font-main); font-size: 13px; background: var(--bg2); border: 1px solid var(--border2); border-radius: 5px; padding: 8px 12px; color: var(--text); outline: none; transition: border-color 0.2s; }
.q-input:focus { border-color: var(--gold); }
.q-status { padding: 3px 8px; border-radius: 4px; font-size: 10px; font-weight: 700; }
.q-status.retained { background: var(--green-dim); color: #86efac; }
.q-status.removed  { background: var(--red-dim);   color: #fca5a5; }

/* Settings sections */
.settings-section { margin-bottom: 28px; }
.settings-section-title { font-size: 13px; font-weight: 800; color: var(--gold); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 14px; padding-bottom: 8px; border-bottom: 1px solid var(--border); }

.setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.setting-row:last-child { border-bottom: none; }
.setting-info { flex: 1; }
.setting-name { font-size: 14px; font-weight: 600; color: var(--text); }
.setting-desc { font-size: 12px; color: var(--text-dim); margin-top: 3px; line-height: 1.45; }

/* Analytics control sliders */
.driver-weight-row {
  display: grid;
  grid-template-columns: 150px 1fr 60px 100px;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.driver-weight-row:last-child { border-bottom: none; }
.driver-weight-name { font-size: 13px; font-weight: 700; color: var(--text); }
input[type=range].admin-range {
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 5px;
  border-radius: 99px;
  background: rgba(255,255,255,0.1);
  outline: none;
  cursor: pointer;
}
input[type=range].admin-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px; height: 18px;
  border-radius: 50%;
  background: var(--bg);
  border: 3px solid var(--gold-light);
  cursor: pointer;
  transition: background 0.2s;
}
input[type=range].admin-range::-webkit-slider-thumb:hover { background: var(--gold); }

/* Audit log */
.audit-row { font-family: var(--font-mono); }
.audit-action { font-size: 10px; font-weight: 700; letter-spacing: 0.06em; }

/* Sidebar overlay mobile */
.sidebar-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 190;
}

/* Confirm modal */
.confirm-modal { max-width: 400px; }
.confirm-body { text-align: center; padding: 32px 28px 24px; }
.confirm-icon { font-size: 48px; margin-bottom: 16px; }
.confirm-title { font-size: 18px; font-weight: 800; color: var(--text); margin-bottom: 8px; }
.confirm-message { font-size: 13px; color: var(--text-dim); line-height: 1.6; }

/* Empty states */
.empty-state { text-align: center; padding: 60px 20px; }
.empty-icon { font-size: 48px; opacity: 0.4; margin-bottom: 16px; }
.empty-title { font-size: 16px; font-weight: 700; color: var(--text-dim); margin-bottom: 8px; }
.empty-desc { font-size: 13px; color: var(--text-mute); }

/* Grid layouts */
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
.grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 20px; }

/* Info boxes */
.info-box { padding: 14px 18px; border-radius: 8px; font-size: 13px; line-height: 1.65; display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px; }
.info-box.gold    { background: var(--gold-dim); border: 1px solid rgba(201,151,58,0.25); color: var(--gold-light); }
.info-box.info    { background: var(--blue-dim);  border: 1px solid rgba(59,130,246,0.25); color: #93c5fd; }
.info-box.warning { background: var(--amber-dim); border: 1px solid rgba(245,158,11,0.25); color: #fcd34d; }
.info-box.success { background: var(--green-dim); border: 1px solid rgba(34,197,94,0.25); color: #86efac; }
.info-box.danger  { background: var(--red-dim);   border: 1px solid rgba(239,68,68,0.25); color: #fca5a5; }

/* ═══════════════════════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════════════════════ */
@media (max-width: 1024px) {
  .sidebar {
    transform: translateX(-100%);
    width: min(84vw, 320px);
    z-index: 250;
  }
  .sidebar.open { transform: translateX(0); }
  .sidebar-overlay { display: block; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .sidebar-overlay.open { opacity: 1; pointer-events: auto; }
  .main { margin-left: 0; }
  .topbar-menu-btn {
    display: flex;
    width: 38px;
    height: 38px;
  }
  .topbar-search { display: none; }
  .topbar {
    padding-left: max(16px, env(safe-area-inset-left, 0px));
    padding-right: max(16px, env(safe-area-inset-right, 0px));
  }
  .content {
    padding-left: max(18px, env(safe-area-inset-left, 0px));
    padding-right: max(18px, env(safe-area-inset-right, 0px));
    padding-bottom: calc(22px + env(safe-area-inset-bottom, 0px));
  }
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
  .form-grid-2, .form-grid-3 { grid-template-columns: 1fr; }
  .driver-weight-row { grid-template-columns: 1fr; gap: 8px; }

  /* Keep fixed filter bars aligned when sidebar is hidden */
  #panel-executive .exec-editor {
    padding-top: 156px;
  }
  #panel-cx-drivers .exec-editor {
    padding-top: 156px;
  }
  #panel-executive .exec-editor-section--sticky,
  #panel-cx-drivers .exec-editor-section--sticky {
    left: max(18px, env(safe-area-inset-left, 0px));
    right: max(18px, env(safe-area-inset-right, 0px));
    top: calc(var(--topbar-h) + env(safe-area-inset-top, 0px));
  }
}

@media (max-width: 768px) {
  .content { padding-top: 16px; }
  .stat-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
  .page-header { flex-direction: column; gap: 14px; }
  .page-title { font-size: 20px; }
  .topbar {
    min-height: calc(var(--topbar-h) + env(safe-area-inset-top, 0px));
    padding-top: env(safe-area-inset-top, 0px);
  }
  .topbar-title { font-size: 15px; }
  .topbar-breadcrumb { display: none; }
  .topbar-right { gap: 8px; }
  .status-pill { display: none; }
  .topbar-icon-btn {
    width: 36px;
    height: 36px;
  }
  .modal {
    width: calc(100vw - 20px);
    max-height: calc(100dvh - 20px - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px));
    border-radius: 12px;
  }
  .modal-header, .modal-body, .modal-footer { padding-left: 20px; padding-right: 20px; }
  .btn, .filter-select, .form-input, .q-input { min-height: 42px; }
  .topbar-right {
    min-width: 0;
    gap: 6px;
  }
  .lang-toggle-nav {
    flex-shrink: 0;
  }
  .exec-editor-section,
  .card {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .stat-grid { grid-template-columns: 1fr; }
  .filter-bar { gap: 8px; }
  .filter-select { flex: 1 1 calc(50% - 8px); min-width: 0; }
  .table-wrap { margin: 0 -6px; }
  table.data-table { min-width: 640px; }
  .modal {
    width: calc(100vw - 14px);
    border-radius: 10px;
  }
  .modal-header, .modal-body, .modal-footer { padding-left: 16px; padding-right: 16px; }
  .content {
    padding-left: max(12px, env(safe-area-inset-left, 0px));
    padding-right: max(12px, env(safe-area-inset-right, 0px));
  }
  .page-title {
    font-size: 18px;
  }
  .page-subtitle {
    font-size: 12px;
    line-height: 1.45;
  }
  .table-wrap {
    margin: 0 -8px;
    padding: 0 8px;
  }
}

/* RTL mobile sidebar should slide from right edge */
@media (max-width: 1024px) {
  html[data-lang="ar"] .sidebar {
    transform: translateX(100%);
  }
  html[data-lang="ar"] .sidebar.open {
    transform: translateX(0);
  }
}
</style>
</head>
<body>

<!-- ════════════════════════════════════════
  ADMIN APP (no login gate — opens directly)
════════════════════════════════════════ -->
<div id="adminApp">

  <!-- Sidebar overlay (mobile) -->
  <div class="sidebar-overlay" id="sidebarOverlay" onclick="closeSidebar()"></div>

  <!-- ══ SIDEBAR ══ -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-brand">
      <div class="sidebar-brand-icon">🛡️</div>
      <div class="sidebar-brand-text">
        <strong>ROSHD</strong>
        <span class="badge-admin">Admin</span>
      </div>
    </div>

    <div class="sidebar-admin-strip">
      <div class="admin-avatar" id="adminAvatar">A</div>
      <div class="admin-info">
        <div class="admin-name" id="adminDisplayName">Administrator</div>
        <div class="admin-role">Super Admin</div>
      </div>
    </div>

    <nav class="sidebar-nav">
      <div class="nav-section">Analytics</div>
      <button class="nav-item active" data-panel="executive" onclick="showPanel('executive',this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M8 12l2.5 2.5L16 9"/></svg>
        Executive View
      </button>
      <button class="nav-item" data-panel="cx-drivers" onclick="showPanel('cx-drivers',this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
        CX Drivers Analysis
      </button>
      <button class="nav-item" data-panel="units-performance" onclick="showPanel('units-performance',this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a17 17 0 0 0 0 18M12 3a17 17 0 0 1 0 18"/></svg>
        Units Performance
      </button>
      <button class="nav-item" data-panel="demographics" onclick="showPanel('demographics',this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3"/><path d="M6 21v-.5a6 6 0 0 1 12 0V21"/></svg>
        Demographics
      </button>
      <button class="nav-item" data-panel="dashboard-filters" onclick="showPanel('dashboard-filters',this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 12h14M12 5v14"/></svg>
        Dashboard filters
      </button>
      <button class="nav-item" data-panel="customer-patterns" onclick="showPanel('customer-patterns',this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        Customer Patterns
      </button>
      <button class="nav-item" data-panel="questionnaire" onclick="showPanel('questionnaire',this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="14" r="1" fill="currentColor" stroke="none"/></svg>
        Questionnaire
      </button>
      <button class="nav-item" data-panel="pilot-analysis" onclick="showPanel('pilot-analysis',this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="m8.5 12.5 2 2 5-5"/></svg>
        Pilot Analysis
      </button>
      <button class="nav-item" data-panel="model-quality" onclick="showPanel('model-quality',this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12h3l2-6 4 12 2-6h4l2-4"/></svg>
        Model Quality
      </button>
    </nav>

    <div class="sidebar-footer">
      <button class="logout-btn" onclick="handleLogout()">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        Logout
      </button>
    </div>
  </aside>

  <!-- ══ MAIN ══ -->
  <div class="main">

    <!-- Topbar -->
    <div class="topbar">
      <div class="topbar-left">
        <button class="topbar-menu-btn" onclick="toggleSidebar()">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div>
          <div class="topbar-title" id="topbarTitle">Executive View</div>
          <div class="topbar-breadcrumb">ROSHD Admin <span>›</span> <span id="topbarCrumb">Analytics</span></div>
        </div>
      </div>
      <div class="topbar-right">
        <div class="lang-toggle-nav">
          <button class="lang-nav-btn active" id="admin-lang-en" onclick="setAdminLanguage('en')">EN</button>
          <button class="lang-nav-btn" id="admin-lang-ar" onclick="setAdminLanguage('ar')">عر</button>
        </div>
        <div class="topbar-search">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" placeholder="Search users, data…" id="globalSearch" oninput="handleGlobalSearch(this.value)">
        </div>
        <div class="status-pill">
          <div class="status-dot"></div>
          <span>System Live</span>
        </div>
        <div class="topbar-icon-btn" onclick="toggleNotif()" title="Notifications">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <div class="notif-dot"></div>
        </div>
        <div class="topbar-icon-btn" onclick="window.print()" title="Print / Export">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
        </div>
        <div class="topbar-icon-btn" onclick="openCustomerPreviewForActivePanel()" title="Preview customer page">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="content">

      <!-- ══════════════ EXECUTIVE VIEW — edit customer Executive screen (localStorage sync) ══════════════ -->
      <div class="panel active" id="panel-executive">
        <div class="page-header">
          <div class="page-header-left">
            <div class="page-eyebrow">Customer dashboard</div>
            <div class="page-title">Executive View — content editor</div>
            <div class="page-subtitle">Edits save to this browser only (localStorage). The live customer Executive tab reads the same key and updates on refresh — no API yet.</div>
          </div>
          <div class="page-header-actions">
            <button type="button" class="btn btn-secondary btn-sm" onclick="resetExecutiveOverrides()">Reset this filter</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="resetAllExecutiveOverrides()">Reset all filters</button>
            <button type="button" class="btn btn-primary btn-sm" onclick="saveExecutiveOverridesFromForm()">Save &amp; push to customer view</button>
          </div>
        </div>

        <div class="exec-editor">
          <div class="exec-editor-section exec-editor-section--sticky">
            <h3>Editing context (same as customer filters)</h3>
            <div class="admin-dash-filter-mirror">
              <div class="db-filter-bar" aria-label="Segment filters">
                <div class="db-filter-bar__lead">
                  <span class="db-filter-bar__title"><span class="en">Filters</span><span class="ar">التصفية</span></span>
                </div>
                <div class="db-filter-bar-scroll-outer" id="execFilterScrollOuter">
                  <div id="execFilterStripInner" class="db-filter-bar-inner"></div>
                </div>
                <div class="db-filter-bar__trail">
                  <button type="button" class="admin-filter-bar-action" onclick="openToolbarFilterLabelsModal()" title="Edit toolbar labels (EN/AR)">
                    <span class="en">Edit names</span><span class="ar">تعديل الأسماء</span>
                  </button>
                </div>
              </div>
            </div>
            <p class="exec-editor-hint">Filter badlain, form values us context par switch hongi. Save se isi filter combination ka text/description update hota hai.</p>
          </div>

          <div class="exec-editor-section">
            <h3>KPI strip (top of customer Executive)</h3>
            <div class="exec-editor-grid3">
              <div class="form-group"><label class="form-label">CX trend line</label><input class="form-input" id="execEd_kpiTrend1" placeholder="↑ +0.3"></div>
              <div class="form-group"><label class="form-label">Model power %</label><input class="form-input" id="execEd_kpiStripR2" placeholder="72%"></div>
              <div class="form-group"><label class="form-label">Filtered N</label><input class="form-input" id="execEd_kpiSampleN" placeholder="300"></div>
              <div class="form-group"><label class="form-label">Sample share (EN)</label><input class="form-input" id="execEd_kpiSampleShareEn" placeholder="100% of full sample (300)"></div>
              <div class="form-group"><label class="form-label">Sample share (AR)</label><input class="form-input" id="execEd_kpiSampleShareAr" dir="rtl" placeholder="100% من العينة الكاملة (300)"></div>
            </div>
          </div>

          <div class="exec-editor-section">
            <h3>Invest / Optimize / Avoid lists</h3>
            <p class="exec-editor-hint">One bullet per line. Arabic fields are shown when the customer dashboard language is Arabic.</p>
            <div class="exec-editor-grid2">
              <div class="form-group"><label class="form-label">Invest — English</label><textarea class="form-input" id="execEd_investEn"></textarea></div>
              <div class="form-group"><label class="form-label">Invest — Arabic</label><textarea class="form-input" id="execEd_investAr" dir="rtl"></textarea></div>
              <div class="form-group"><label class="form-label">Optimize — English</label><textarea class="form-input" id="execEd_optimizeEn"></textarea></div>
              <div class="form-group"><label class="form-label">Optimize — Arabic</label><textarea class="form-input" id="execEd_optimizeAr" dir="rtl"></textarea></div>
              <div class="form-group"><label class="form-label">Avoid — English</label><textarea class="form-input" id="execEd_avoidEn"></textarea></div>
              <div class="form-group"><label class="form-label">Avoid — Arabic</label><textarea class="form-input" id="execEd_avoidAr" dir="rtl"></textarea></div>
            </div>
          </div>

          <div class="exec-editor-section">
            <h3>Branch performance bars</h3>
            <div class="exec-editor-grid3">
              <div class="exec-flow-step">
                <label>Branch 1</label>
                <input class="form-input" id="execEd_br0_en" placeholder="Label EN">
                <input class="form-input" id="execEd_br0_ar" placeholder="Label AR" dir="rtl" style="margin-top:6px">
                <input class="form-input" id="execEd_br0_score" placeholder="Score text e.g. 76% (3.7)" style="margin-top:6px">
                <input class="form-input" id="execEd_br0_width" placeholder="Bar width 0–100" style="margin-top:6px">
              </div>
              <div class="exec-flow-step">
                <label>Branch 2</label>
                <input class="form-input" id="execEd_br1_en">
                <input class="form-input" id="execEd_br1_ar" dir="rtl" style="margin-top:6px">
                <input class="form-input" id="execEd_br1_score" style="margin-top:6px">
                <input class="form-input" id="execEd_br1_width" style="margin-top:6px">
              </div>
              <div class="exec-flow-step">
                <label>Branch 3</label>
                <input class="form-input" id="execEd_br2_en">
                <input class="form-input" id="execEd_br2_ar" dir="rtl" style="margin-top:6px">
                <input class="form-input" id="execEd_br2_score" style="margin-top:6px">
                <input class="form-input" id="execEd_br2_width" style="margin-top:6px">
              </div>
            </div>
          </div>

          <div class="exec-editor-section">
            <h3>Decision flow (five tiles)</h3>
            <div class="exec-flow-grid" id="execEd_flowMount"></div>
          </div>

          <div class="exec-editor-section">
            <h3>Core rule callout</h3>
            <div class="exec-editor-grid2">
              <div class="form-group"><label class="form-label">English body (after “Core rule:”)</label><textarea class="form-input" id="execEd_coreRuleEn" rows="3"></textarea></div>
              <div class="form-group"><label class="form-label">Arabic body (after label)</label><textarea class="form-input" id="execEd_coreRuleAr" rows="3" dir="rtl"></textarea></div>
            </div>
          </div>

          <div class="exec-editor-section">
            <h3>Segment warning box</h3>
            <div class="form-group" style="max-width:320px">
              <label class="form-label">Mode</label>
              <select class="filter-select" id="execEd_segMode" style="width:100%">
                <option value="auto">Automatic (follow filters &amp; sample size)</option>
                <option value="hide">Hidden</option>
                <option value="custom">Custom text</option>
              </select>
            </div>
            <div class="exec-editor-grid2" style="margin-top:12px">
              <div class="form-group"><label class="form-label">Custom warning (EN)</label><textarea class="form-input" id="execEd_segWarnEn" rows="3"></textarea></div>
              <div class="form-group"><label class="form-label">Custom warning (AR)</label><textarea class="form-input" id="execEd_segWarnAr" rows="3" dir="rtl"></textarea></div>
            </div>
          </div>

          <div class="exec-editor-actions">
            <button type="button" class="btn btn-primary" onclick="saveExecutiveOverridesFromForm()">Save &amp; push to customer view</button>
            <button type="button" class="btn btn-secondary" onclick="resetExecutiveOverrides()">Reset to defaults</button>
          </div>
          <p class="exec-editor-hint">Keep the customer dashboard open on the same site — saving notifies it automatically (same as CX Drivers overrides).</p>
        </div>
      </div>

      <!-- ══════════════ CX DRIVERS — overrides editor (no embedded preview) ══════════════ -->
      <div class="panel" id="panel-cx-drivers">
        <div class="cx-drivers-editor exec-editor">
          <div class="page-header" style="margin-bottom:18px">
            <div class="page-header-left">
              <div class="page-title">CX Drivers overrides</div>
              <div class="page-subtitle" style="font-size:13px;color:var(--text-dim);max-width:720px">Defaults reflect the live customer dashboard baseline (<b>All Branches</b>, filters cleared) — same numbers and labels as the CX Drivers tab before overrides. Saving writes <code style="opacity:.85">roshd_cx_drivers_overrides</code> and updates an open customer dashboard on the same site.</div>
            </div>
            <div class="page-header-actions">
              <button type="button" class="btn btn-secondary btn-sm" onclick="resetCxDriversOverrides()">Reset to defaults</button>
              <button type="button" class="btn btn-primary btn-sm" onclick="saveCxDriversOverridesFromForm()">Save</button>
            </div>
          </div>

          <div class="exec-editor-section exec-editor-section--sticky" style="margin-bottom:16px">
            <h3>Editing context (same as customer filters)</h3>
            <div class="admin-dash-filter-mirror">
              <div class="db-filter-bar" aria-label="Segment filters">
                <div class="db-filter-bar__lead">
                  <span class="db-filter-bar__title"><span class="en">Filters</span><span class="ar">التصفية</span></span>
                </div>
                <div class="db-filter-bar-scroll-outer" id="cxFilterScrollOuter">
                  <div id="cxFilterStripInner" class="db-filter-bar-inner"></div>
                </div>
                <div class="db-filter-bar__trail">
                  <button type="button" class="admin-filter-bar-action" onclick="openToolbarFilterLabelsModal()" title="Edit toolbar labels (EN/AR)">
                    <span class="en">Edit names</span><span class="ar">تعديل الأسماء</span>
                  </button>
                </div>
              </div>
            </div>
            <p class="exec-editor-hint">Filter badlain, CX Drivers defaults isi context ke mutabiq load hongay. Save se isi filter combination ka data update hota hai.</p>
          </div>

          <div class="exec-editor-section">
            <h3>Impact map &amp; ranking cards</h3>
            <div class="exec-editor-grid3">
              <div class="form-group"><label class="form-label">Map title (EN)</label><input class="form-input" id="cxEd_mapTitleEn" placeholder="Driver Impact Map"></div>
              <div class="form-group"><label class="form-label">Map title (AR)</label><input class="form-input" id="cxEd_mapTitleAr" dir="rtl" placeholder="خريطة تأثير المحركات"></div>
              <div class="form-group"><label class="form-label">Map subtitle (EN)</label><input class="form-input" id="cxEd_mapSubEn"></div>
              <div class="form-group"><label class="form-label">Map subtitle (AR)</label><input class="form-input" id="cxEd_mapSubAr" dir="rtl"></div>
              <div class="form-group"><label class="form-label">Ranking title (EN)</label><input class="form-input" id="cxEd_rankTitleEn" placeholder="Driver Ranking"></div>
              <div class="form-group"><label class="form-label">Ranking title (AR)</label><input class="form-input" id="cxEd_rankTitleAr" dir="rtl"></div>
              <div class="form-group"><label class="form-label">Ranking subtitle (EN)</label><input class="form-input" id="cxEd_rankSubEn"></div>
              <div class="form-group"><label class="form-label">Ranking subtitle (AR)</label><input class="form-input" id="cxEd_rankSubAr" dir="rtl"></div>
            </div>
          </div>

          <div class="exec-editor-section">
            <h3>Interpretation note</h3>
            <div class="exec-editor-grid2">
              <div class="form-group"><label class="form-label">English (body after “Interpretation:”)</label><textarea class="form-input" id="cxEd_interpretEn" rows="4"></textarea></div>
              <div class="form-group"><label class="form-label">Arabic</label><textarea class="form-input" id="cxEd_interpretAr" rows="4" dir="rtl"></textarea></div>
            </div>
          </div>

          <div class="exec-editor-section">
            <h3>Driver settings (single source)</h3>
            <p class="exec-editor-hint"><b>Single master table:</b> yahi ek jagah hai jahan driver ranking data (EN/AR) enter hoga. Ranking table, map, simulation labels, expected score, executive top driver aur units bars sab isi array se data lenge.</p>
            <div id="cxEd_driverRowsMount"></div>
          </div>

          <div class="exec-editor-section">
            <h3>Simulation lab</h3>
            <div class="exec-editor-grid3">
              <div class="form-group"><label class="form-label">Card title (EN)</label><input class="form-input" id="cxEd_simTitleEn"></div>
              <div class="form-group"><label class="form-label">Card title (AR)</label><input class="form-input" id="cxEd_simTitleAr" dir="rtl"></div>
              <div class="form-group"><label class="form-label">Card subtitle (EN)</label><input class="form-input" id="cxEd_simSubEn"></div>
              <div class="form-group"><label class="form-label">Card subtitle (AR)</label><input class="form-input" id="cxEd_simSubAr" dir="rtl"></div>
              <div class="form-group"><label class="form-label">Reset button (EN)</label><input class="form-input" id="cxEd_simResetEn"></div>
              <div class="form-group"><label class="form-label">Reset button (AR)</label><input class="form-input" id="cxEd_simResetAr" dir="rtl"></div>
              <div class="form-group"><label class="form-label">“Expected score” label (EN)</label><input class="form-input" id="cxEd_simLblExpectedEn"></div>
              <div class="form-group"><label class="form-label">“Expected score” label (AR)</label><input class="form-input" id="cxEd_simLblExpectedAr" dir="rtl"></div>
              <div class="form-group"><label class="form-label">“Baseline:” prefix (EN)</label><input class="form-input" id="cxEd_baselineLblEn"></div>
              <div class="form-group"><label class="form-label">“Baseline:” prefix (AR)</label><input class="form-input" id="cxEd_baselineLblAr" dir="rtl"></div>
              <div class="form-group"><label class="form-label">Baseline suffix (after score)</label><input class="form-input" id="cxEd_baselineSuffix" placeholder=" / 5"></div>
            </div>
            <div class="exec-editor-grid2" style="margin-top:12px">
              <div class="exec-flow-step">
                <label>Simulation Lever 1</label>
                <input class="form-input" id="cxEd_simLever0En" placeholder="Label EN">
                <input class="form-input" id="cxEd_simLever0Ar" placeholder="Label AR" dir="rtl" style="margin-top:6px">
              </div>
              <div class="exec-flow-step">
                <label>Simulation Lever 2</label>
                <input class="form-input" id="cxEd_simLever1En" placeholder="Label EN">
                <input class="form-input" id="cxEd_simLever1Ar" placeholder="Label AR" dir="rtl" style="margin-top:6px">
              </div>
              <div class="exec-flow-step">
                <label>Simulation Lever 3</label>
                <input class="form-input" id="cxEd_simLever2En" placeholder="Label EN">
                <input class="form-input" id="cxEd_simLever2Ar" placeholder="Label AR" dir="rtl" style="margin-top:6px">
              </div>
              <div class="exec-flow-step">
                <label>Simulation Lever 4</label>
                <input class="form-input" id="cxEd_simLever3En" placeholder="Label EN">
                <input class="form-input" id="cxEd_simLever3Ar" placeholder="Label AR" dir="rtl" style="margin-top:6px">
              </div>
            </div>
            <div class="exec-editor-grid2" style="margin-top:12px">
              <div class="form-group"><label class="form-label">Fixed expected lead (optional — hides live sim math when set)</label><input class="form-input" id="cxEd_simExpectedLead" placeholder="e.g. 79%"></div>
              <div class="form-group"><label class="form-label">Fixed expected (paren)</label><input class="form-input" id="cxEd_simExpectedParen" placeholder="e.g. (3.9)"></div>
              <div class="form-group"><label class="form-label">Fixed baseline value text</label><input class="form-input" id="cxEd_simBaseline"></div>
              <div class="form-group"><label class="form-label">Advice (EN)</label><textarea class="form-input" id="cxEd_simAdviceEn" rows="3"></textarea></div>
              <div class="form-group"><label class="form-label">Advice (AR)</label><textarea class="form-input" id="cxEd_simAdviceAr" rows="3" dir="rtl"></textarea></div>
            </div>
          </div>

          <div class="exec-editor-actions">
            <button type="button" class="btn btn-primary" onclick="saveCxDriversOverridesFromForm()">Save</button>
            <button type="button" class="btn btn-secondary" onclick="resetCxDriversOverrides()">Reset to defaults</button>
          </div>
        </div>
      </div>

      <!-- ══════════════ UNITS PERFORMANCE — overrides editor ══════════════ -->
      <div class="panel" id="panel-units-performance">
        <div class="units-perf-editor exec-editor">
          <div class="page-header" style="margin-bottom:18px">
            <div class="page-header-left">
              <div class="page-title">Units Performance overrides</div>
              <div class="page-subtitle" style="font-size:13px;color:var(--text-dim);max-width:720px">
                Defaults match the customer dashboard (<b>All Branches</b>, filters cleared). Saving writes <code style="opacity:.85">roshd_units_performance_overrides</code> and updates an open customer dashboard on the same site.
              </div>
            </div>
            <div class="page-header-actions">
              <button type="button" class="btn btn-secondary btn-sm" onclick="resetUnitsPerformanceOverrides()">Reset to defaults</button>
              <button type="button" class="btn btn-primary btn-sm" onclick="saveUnitsPerformanceOverridesFromForm()">Save</button>
            </div>
          </div>

          <div class="exec-editor-section">
            <h3>Card header</h3>
            <div class="exec-editor-grid2">
              <div class="form-group"><label class="form-label">Title (EN)</label><input class="form-input" id="upEd_segTitleEn" placeholder="All Branches — Units Performance"></div>
              <div class="form-group"><label class="form-label">Title (AR)</label><input class="form-input" id="upEd_segTitleAr" dir="rtl"></div>
            </div>
            <p class="exec-editor-hint">Subtitle is auto-generated from CX Driver Ranking + active filters.</p>
          </div>

          <div class="exec-editor-section">
            <h3>Driver bars source</h3>
            <p class="exec-editor-hint"><b>Single source enabled:</b> Units Performance bars now read from <b>CX Drivers → Driver settings</b>. No separate driver-bar editing here (to avoid duplicate filling).</p>
          </div>

          <div class="exec-editor-section">
            <h3>Recommendation cards</h3>
            <p class="exec-editor-hint"><b>Single source enabled:</b> Invest / Optimize / Avoid cards are now managed from <b>Executive</b> only. Duplicate editing here has been removed.</p>
          </div>

          <div class="exec-editor-actions">
            <button type="button" class="btn btn-primary" onclick="saveUnitsPerformanceOverridesFromForm()">Save</button>
            <button type="button" class="btn btn-secondary" onclick="resetUnitsPerformanceOverrides()">Reset to defaults</button>
          </div>
        </div>
      </div>

      <!-- ══════════════ DEMOGRAPHICS — overrides editor ══════════════ -->
      <div class="panel" id="panel-demographics">
        <div class="demographics-editor exec-editor" id="dmDemographicsRoot">
          <div class="page-header" style="margin-bottom:18px">
            <div class="page-header-left">
              <div class="page-title">Demographics overrides</div>
              <div class="page-subtitle" style="font-size:13px;color:var(--text-dim);max-width:760px">
                Edit quality funnel, exclusions, strength copy, headers, insight, and demographic chart captions. Saves to <code style="opacity:.85">roshd_demographics_overrides</code> and refreshes an open customer dashboard on the same site (same-origin).
              </div>
            </div>
            <div class="page-header-actions">
              <button type="button" class="btn btn-secondary btn-sm" onclick="resetDemographicsOverrides()">Reset to defaults</button>
              <button type="button" class="btn btn-primary btn-sm" onclick="saveDemographicsOverridesFromForm()">Save</button>
            </div>
          </div>
          <div id="dmDemographicsMount"></div>
          <div class="exec-editor-actions">
            <button type="button" class="btn btn-primary" onclick="saveDemographicsOverridesFromForm()">Save</button>
            <button type="button" class="btn btn-secondary" onclick="resetDemographicsOverrides()">Reset to defaults</button>
          </div>
        </div>
      </div>

      <!-- ══════════════ DASHBOARD FILTERS — 8-toolbar config ══════════════ -->
      <div class="panel" id="panel-dashboard-filters">
        <div class="exec-editor">
          <div class="page-header" style="margin-bottom:18px">
            <div class="page-header-left">
              <div class="page-title">Dashboard filters</div>
              <div class="page-subtitle" style="font-size:13px;color:var(--text-dim);max-width:760px">
                Configure eight customer-toolbar filters (labels, “All” row, unlimited options per filter). Persists as <code style="opacity:.85">roshd_filter_bar_config</code> and syncs the Executive/CX contexts + synthetic segment data. Quick-edit <b>labels only</b> from Executive or CX Drivers using <b>Edit names</b> on the filter strip.
              </div>
            </div>
            <div class="page-header-actions">
              <button type="button" class="btn btn-secondary btn-sm" onclick="resetDashboardFiltersToDefaults()">Reset to defaults</button>
              <button type="button" class="btn btn-primary btn-sm" onclick="saveDashboardFiltersFromForm()">Save</button>
            </div>
          </div>
          <div id="dfEditorMount"></div>
          <div class="exec-editor-actions">
            <button type="button" class="btn btn-primary" onclick="saveDashboardFiltersFromForm()">Save</button>
            <button type="button" class="btn btn-secondary" onclick="resetDashboardFiltersToDefaults()">Reset</button>
          </div>
        </div>
      </div>

      <!-- ══════════════ CUSTOMER PATTERNS — overrides editor ══════════════ -->
      <div class="panel" id="panel-customer-patterns">
        <div class="exec-editor" id="cpRoot">
          <div class="page-header" style="margin-bottom:18px">
            <div class="page-header-left">
              <div class="page-title">Customer Patterns overrides</div>
              <div class="page-subtitle" style="font-size:13px;color:var(--text-dim);max-width:760px">
                Edit all visible copy in Customer Patterns (titles, summaries, legend, cards, labels). Saves to <code style="opacity:.85">roshd_customer_patterns_overrides</code> and auto-refreshes customer dashboard on the same site.
              </div>
            </div>
            <div class="page-header-actions">
              <button type="button" class="btn btn-secondary btn-sm" onclick="resetCustomerPatternsOverrides()">Reset to defaults</button>
              <button type="button" class="btn btn-primary btn-sm" onclick="saveCustomerPatternsOverridesFromForm()">Save</button>
            </div>
          </div>
          <div id="cpMount"></div>
          <div class="exec-editor-actions">
            <button type="button" class="btn btn-primary" onclick="saveCustomerPatternsOverridesFromForm()">Save</button>
            <button type="button" class="btn btn-secondary" onclick="resetCustomerPatternsOverrides()">Reset to defaults</button>
          </div>
        </div>
      </div>

      <!-- ══════════════ PILOT ANALYSIS — field editor ══════════════ -->
      <div class="panel" id="panel-pilot-analysis">
        <div class="exec-editor" id="plRoot">
          <div class="page-header" style="margin-bottom:18px">
            <div class="page-header-left">
              <div class="page-title">Pilot Analysis overrides</div>
              <div class="page-subtitle" style="font-size:13px;color:var(--text-dim);max-width:760px">
                Edit all visible Pilot Analysis labels using EN/AR fields. Non-technical editor with live sync to customer dashboard.
              </div>
            </div>
            <div class="page-header-actions">
              <button type="button" class="btn btn-secondary btn-sm" onclick="loadPilotAnalysisEditorForm(true)">Reload defaults</button>
              <button type="button" class="btn btn-secondary btn-sm" onclick="resetPilotAnalysisOverrides()">Reset</button>
              <button type="button" class="btn btn-primary btn-sm" onclick="savePilotAnalysisOverridesFromForm()">Save</button>
            </div>
          </div>
          <div class="exec-editor-section">
            <h3>All visible Pilot Analysis labels</h3>
            <div id="plPairsMount"></div>
          </div>
          <div class="exec-editor-section">
            <h3>Pilot values (numbers/text)</h3>
            <p class="exec-editor-hint">Edit numeric/text values shown in Pilot cards/diagram (e.g. 30, 19, 0.86, 5 × 3).</p>
            <div id="plValuesMount"></div>
          </div>
          <div class="exec-editor-actions">
            <button type="button" class="btn btn-primary" onclick="savePilotAnalysisOverridesFromForm()">Save</button>
            <button type="button" class="btn btn-secondary" onclick="resetPilotAnalysisOverrides()">Reset to defaults</button>
          </div>
        </div>
      </div>

      <!-- ══════════════ USER MANAGEMENT ══════════════ -->
      <div class="panel" id="panel-users">
        <div class="page-header">
          <div class="page-header-left">
            <div class="page-eyebrow">User Management</div>
            <div class="page-title">All Users</div>
            <div class="page-subtitle">Create, edit, suspend, and delete user accounts — full CRUD control</div>
          </div>
          <div class="page-header-actions">
            <button class="btn btn-secondary btn-sm" onclick="openImportUsers()">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/></svg>
              Import CSV
            </button>
            <button class="btn btn-primary btn-sm" onclick="openCreateUser()">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add User
            </button>
          </div>
        </div>

        <div class="card" style="margin-bottom:0">
          <div class="filter-bar">
            <div class="filter-search">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input type="text" placeholder="Search by name or email…" id="userSearch" oninput="filterUsers()">
            </div>
            <select class="filter-select" id="userRoleFilter" onchange="filterUsers()">
              <option value="">All Roles</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
              <option value="analyst">Analyst</option>
            </select>
            <select class="filter-select" id="userStatusFilter" onchange="filterUsers()">
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
              <option value="pending">Pending</option>
            </select>
            <select class="filter-select" id="userBranchFilter" onchange="filterUsers()">
              <option value="">All Branches</option>
              <option value="Riyadh">Riyadh</option>
              <option value="Jeddah">Jeddah</option>
              <option value="Dammam">Dammam</option>
            </select>
            <div class="filter-actions">
              <button class="btn btn-secondary btn-sm" onclick="bulkAction('suspend')" id="bulkSuspendBtn" style="display:none">Suspend Selected</button>
              <button class="btn btn-danger btn-sm"   onclick="bulkAction('delete')"  id="bulkDeleteBtn"  style="display:none">Delete Selected</button>
            </div>
          </div>
          <div class="table-wrap">
            <table class="data-table" id="usersTable">
              <thead>
                <tr>
                  <th style="width:36px"><input type="checkbox" id="selectAllUsers" onchange="toggleSelectAll(this)"></th>
                  <th onclick="sortTable('users','name')">User <span class="sort-icon">↕</span></th>
                  <th onclick="sortTable('users','branch')">Branch <span class="sort-icon">↕</span></th>
                  <th onclick="sortTable('users','role')">Role <span class="sort-icon">↕</span></th>
                  <th onclick="sortTable('users','status')">Status <span class="sort-icon">↕</span></th>
                  <th onclick="sortTable('users','loginCount')">Logins <span class="sort-icon">↕</span></th>
                  <th onclick="sortTable('users','lastLogin')">Last Login <span class="sort-icon">↕</span></th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="usersTbody"></tbody>
            </table>
          </div>
          <div class="table-pagination" id="usersPagination"></div>
        </div>
      </div>

      <!-- ══════════════ BRANCH MANAGEMENT ══════════════ -->
      <div class="panel" id="panel-branches">
        <div class="page-header">
          <div class="page-header-left">
            <div class="page-eyebrow">Branch Control</div>
            <div class="page-title">Branch Management</div>
            <div class="page-subtitle">Add, edit, and remove service branches — override CX scores and driver weights per branch</div>
          </div>
          <div class="page-header-actions">
            <button class="btn btn-primary btn-sm" onclick="openCreateBranch()">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add Branch
            </button>
          </div>
        </div>

        <div id="branchCards" class="grid-3"></div>

        <div class="card">
          <div class="card-header">
            <div><div class="card-title">Branch CX Scores — Editable</div><div class="card-subtitle">Override scores used in customer dashboards</div></div>
            <button class="btn btn-primary btn-sm" onclick="saveBranchScores()">Save Changes</button>
          </div>
          <div class="card-body">
            <div id="branchScoreEditor"></div>
          </div>
        </div>
      </div>

      <!-- ══════════════ DATA MANAGEMENT ══════════════ -->
      <div class="panel" id="panel-data">
        <div class="page-header">
          <div class="page-header-left">
            <div class="page-eyebrow">Data Control</div>
            <div class="page-title">Data Management</div>
            <div class="page-subtitle">Upload, validate, and manage survey datasets — full CSV/Excel import pipeline</div>
          </div>
          <div class="page-header-actions">
            <button class="btn btn-secondary btn-sm" onclick="downloadTemplate()">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Template
            </button>
          </div>
        </div>

        <!-- Upload Zone -->
        <div class="card" style="margin-bottom:20px">
          <div class="card-header"><div class="card-title">Upload New Dataset</div><div class="card-subtitle">CSV / Excel — max 10MB. Columns: ID, Branch, Gender, Service, Frequency, Age, Q_Score, C_Score, P_Score, S_Score, CX_Score</div></div>
          <div class="card-body">
            <div class="upload-zone" id="uploadZone" onclick="triggerUpload()" ondragover="onDragOver(event)" ondragleave="onDragLeave(event)" ondrop="onDrop(event)">
              <div class="upload-icon">📂</div>
              <div class="upload-title">Drop your dataset file here</div>
              <div class="upload-desc">Supports CSV, XLSX, XLS — or click to browse</div>
            </div>
            <input type="file" class="upload-input" id="dataFileInput" accept=".csv,.xlsx,.xls" onchange="handleFileUpload(this)">
            <div id="uploadProgress" style="margin-top:16px;display:none">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
                <span style="font-size:13px;font-weight:600;color:var(--text)" id="uploadFileName">file.csv</span>
                <span style="font-size:12px;color:var(--gold-light)" id="uploadPct">0%</span>
              </div>
              <div style="height:6px;background:rgba(255,255,255,0.08);border-radius:99px;overflow:hidden">
                <div id="uploadBar" style="height:100%;width:0%;background:linear-gradient(90deg,var(--gold),var(--gold-light));border-radius:99px;transition:width 0.3s"></div>
              </div>
              <div id="uploadStatus" style="margin-top:8px;font-size:12px;color:var(--text-dim)"></div>
            </div>
          </div>
        </div>

        <!-- Dataset Table -->
        <div class="card">
          <div class="card-header">
            <div><div class="card-title">Uploaded Datasets</div><div class="card-subtitle">Manage, validate, and activate survey datasets</div></div>
            <div class="card-actions">
              <button class="btn btn-secondary btn-sm" onclick="refreshDatasets()">Refresh</button>
            </div>
          </div>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Dataset Name</th>
                  <th>Period</th>
                  <th>Rows</th>
                  <th>Status</th>
                  <th>Uploaded By</th>
                  <th>Upload Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="datasetsTbody"></tbody>
            </table>
          </div>
        </div>

        <!-- Sample Records Preview -->
        <div class="card">
          <div class="card-header">
            <div><div class="card-title">Sample Records — Editable</div><div class="card-subtitle">Inline edit individual response records</div></div>
            <button class="btn btn-primary btn-sm" onclick="saveRecordEdits()">Save Edits</button>
          </div>
          <div class="filter-bar">
            <div class="filter-search">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input type="text" placeholder="Search records…" id="recordSearch" oninput="filterRecords()">
            </div>
            <select class="filter-select" id="recordBranchFilter" onchange="filterRecords()">
              <option value="">All Branches</option>
              <option value="Riyadh">Riyadh</option>
              <option value="Jeddah">Jeddah</option>
              <option value="Dammam">Dammam</option>
            </select>
          </div>
          <div class="table-wrap">
            <table class="data-table" id="recordsTable">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Branch</th>
                  <th>Gender</th>
                  <th>Service</th>
                  <th>Frequency</th>
                  <th>Age</th>
                  <th>Q</th>
                  <th>C</th>
                  <th>P</th>
                  <th>S</th>
                  <th>CX</th>
                  <th>Risk</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="recordsTbody"></tbody>
            </table>
          </div>
          <div class="table-pagination" id="recordsPagination"></div>
        </div>
      </div>

      <!-- ══════════════ QUESTIONNAIRE — field editor ══════════════ -->
      <div class="panel" id="panel-questionnaire">
        <div class="exec-editor" id="qnRoot">
          <div class="page-header" style="margin-bottom:18px">
            <div class="page-header-left">
              <div class="page-title">Questionnaire overrides</div>
              <div class="page-subtitle" style="font-size:13px;color:var(--text-dim);max-width:760px">
                Non-technical editor for Questionnaire topics and questions. Create new topics, rename topics, and add/edit/remove question codes + EN/AR text.
              </div>
            </div>
            <div class="page-header-actions">
              <button type="button" class="btn btn-secondary btn-sm" onclick="qnAddSection()">Add topic</button>
              <button type="button" class="btn btn-secondary btn-sm" onclick="qnAddQuestionGlobal()">Add question</button>
              <button type="button" class="btn btn-secondary btn-sm" onclick="loadQuestionnaireEditorForm(true)">Reload defaults</button>
              <button type="button" class="btn btn-secondary btn-sm" onclick="resetQuestionnaireOverrides()">Reset</button>
              <button type="button" class="btn btn-primary btn-sm" onclick="saveQuestionnaireOverridesFromForm()">Save</button>
            </div>
          </div>
          <div class="exec-editor-section">
            <h3>Topics &amp; Questions builder</h3>
            <p class="exec-editor-hint">Use Add topic / Add question buttons. You can edit topic names and each question code + EN/AR text.</p>
            <div id="qnBuilderMount"></div>
          </div>
          <div class="exec-editor-actions">
            <button type="button" class="btn btn-primary" onclick="saveQuestionnaireOverridesFromForm()">Save</button>
            <button type="button" class="btn btn-secondary" onclick="resetQuestionnaireOverrides()">Reset to defaults</button>
          </div>
        </div>
      </div>

      <!-- ══════════════ MODEL QUALITY — field editor ══════════════ -->
      <div class="panel" id="panel-model-quality">
        <div class="exec-editor" id="mqRoot">
          <div class="page-header" style="margin-bottom:18px">
            <div class="page-header-left">
              <div class="page-title">Model Quality overrides</div>
              <div class="page-subtitle" style="font-size:13px;color:var(--text-dim);max-width:760px">
                Edit all visible Model Quality labels and values (metrics + management explanation) with non-technical fields.
              </div>
            </div>
            <div class="page-header-actions">
              <button type="button" class="btn btn-secondary btn-sm" onclick="loadModelQualityEditorForm(true)">Reload defaults</button>
              <button type="button" class="btn btn-secondary btn-sm" onclick="resetModelQualityOverrides()">Reset</button>
              <button type="button" class="btn btn-primary btn-sm" onclick="saveModelQualityOverridesFromForm()">Save</button>
            </div>
          </div>
          <div class="exec-editor-section">
            <h3>All visible labels (EN/AR)</h3>
            <div id="mqPairsMount"></div>
          </div>
          <div class="exec-editor-section">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
              <h3 style="margin:0">Flow card blocks (left side)</h3>
              <button type="button" class="btn btn-secondary btn-sm" onclick="mqAddFlowBlock()">Add block</button>
            </div>
            <p class="exec-editor-hint">Add up to 8 blocks. These blocks render in customer Model Quality flow card with responsive arrows to the right-side outcome box.</p>
            <div id="mqFlowBlocksMount"></div>
          </div>
          <div class="exec-editor-section">
            <h3>Model values</h3>
            <div id="mqValuesMount"></div>
          </div>
          <div class="exec-editor-actions">
            <button type="button" class="btn btn-primary" onclick="saveModelQualityOverridesFromForm()">Save</button>
            <button type="button" class="btn btn-secondary" onclick="resetModelQualityOverrides()">Reset to defaults</button>
          </div>
        </div>
      </div>

      <!-- ══════════════ REPORTS & EXPORT ══════════════ -->
      <div class="panel" id="panel-reports">
        <div class="page-header">
          <div class="page-header-left">
            <div class="page-eyebrow">Output Center</div>
            <div class="page-title">Reports & Export</div>
            <div class="page-subtitle">Generate formatted reports, schedule exports, and manage delivery templates</div>
          </div>
        </div>

        <div class="grid-2">
          <div class="card">
            <div class="card-header"><div class="card-title">Generate Report</div><div class="card-subtitle">Custom report builder for any branch and period</div></div>
            <div class="card-body">
              <div class="form-group"><label class="form-label">Report Type</label>
                <select class="form-select" id="reportType">
                  <option value="executive">Executive Summary</option>
                  <option value="cx_drivers">CX Drivers Deep Dive</option>
                  <option value="branch_comparison">Branch Comparison</option>
                  <option value="demographics">Demographics Profile</option>
                  <option value="model_quality">Model Quality Report</option>
                  <option value="full">Full Dashboard Export</option>
                </select>
              </div>
              <div class="form-group"><label class="form-label">Branch</label>
                <select class="form-select" id="reportBranch">
                  <option>All Branches</option>
                  <option>Riyadh</option>
                  <option>Jeddah</option>
                  <option>Dammam</option>
                </select>
              </div>
              <div class="form-grid-2">
                <div class="form-group"><label class="form-label">Period From</label><input type="date" class="form-input" id="reportFrom" value="2026-04-01"></div>
                <div class="form-group"><label class="form-label">Period To</label><input type="date" class="form-input" id="reportTo" value="2026-06-30"></div>
              </div>
              <div class="form-group"><label class="form-label">Format</label>
                <select class="form-select" id="reportFormat">
                  <option>PDF</option>
                  <option>Excel / CSV</option>
                  <option>JSON (API)</option>
                  <option>Print-ready HTML</option>
                </select>
              </div>
              <div class="form-group"><label class="form-label">Language</label>
                <select class="form-select" id="reportLang">
                  <option>English</option>
                  <option>Arabic</option>
                  <option>Bilingual (EN + AR)</option>
                </select>
              </div>
              <button class="btn btn-primary btn-full" onclick="generateReport()">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg>
                Generate & Download
              </button>
            </div>
          </div>

          <div class="card">
            <div class="card-header"><div class="card-title">Scheduled Exports</div><div class="card-subtitle">Automated export schedule management</div></div>
            <div class="card-body" id="scheduledExports"></div>
            <div style="padding:0 22px 18px">
              <button class="btn btn-secondary btn-sm" onclick="openScheduleModal()">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                New Schedule
              </button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header"><div><div class="card-title">Export History</div><div class="card-subtitle">Previously generated reports and downloads</div></div></div>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Report Name</th><th>Type</th><th>Branch</th><th>Format</th><th>Generated By</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody id="reportHistoryTbody"></tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ══════════════ SETTINGS ══════════════ -->
      <div class="panel" id="panel-settings">
        <div class="page-header">
          <div class="page-header-left">
            <div class="page-eyebrow">Configuration</div>
            <div class="page-title">System Settings</div>
            <div class="page-subtitle">Platform configuration, user permissions, email templates, and system preferences</div>
          </div>
          <div class="page-header-actions">
            <button class="btn btn-primary btn-sm" onclick="saveSettings()">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
              Save Settings
            </button>
          </div>
        </div>

        <div class="grid-2">
          <div class="card">
            <div class="card-body">
              <div class="settings-section">
                <div class="settings-section-title">Platform Configuration</div>
                <div class="setting-row">
                  <div class="setting-info"><div class="setting-name">Maintenance Mode</div><div class="setting-desc">When enabled, clients see a maintenance page</div></div>
                  <div class="toggle-track" id="toggleMaintenance" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>
                </div>
                <div class="setting-row">
                  <div class="setting-info"><div class="setting-name">New Registrations</div><div class="setting-desc">Allow new users to self-register</div></div>
                  <div class="toggle-track on" id="toggleRegistrations" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>
                </div>
                <div class="setting-row">
                  <div class="setting-info"><div class="setting-name">Arabic Default Language</div><div class="setting-desc">Show Arabic as the default interface language</div></div>
                  <div class="toggle-track on" id="toggleArabicDefault" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>
                </div>
                <div class="setting-row">
                  <div class="setting-info"><div class="setting-name">Demo Mode</div><div class="setting-desc">Allow login without server verification (demo fallback)</div></div>
                  <div class="toggle-track on" id="toggleDemoMode" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>
                </div>
                <div class="setting-row">
                  <div class="setting-info"><div class="setting-name">Dashboard Filter Persistence</div><div class="setting-desc">Remember user filter selections across sessions</div></div>
                  <div class="toggle-track on" id="toggleFilterPersist" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>
                </div>
              </div>
              <div class="settings-section">
                <div class="settings-section-title">Dashboard Display</div>
                <div class="form-group"><label class="form-label">Current Quarter Label</label><input class="form-input" id="quarterLabel" value="Q2 2026"></div>
                <div class="form-group"><label class="form-label">Total Sample Size (N)</label><input class="form-input" id="sampleSizeN" type="number" value="300"></div>
                <div class="form-group"><label class="form-label">Model Explanatory Power (%)</label><input class="form-input" id="modelR2" type="number" value="72" min="0" max="100"></div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="settings-section">
                <div class="settings-section-title">Security & Access</div>
                <div class="setting-row">
                  <div class="setting-info"><div class="setting-name">Two-Factor Authentication</div><div class="setting-desc">Require 2FA for admin accounts</div></div>
                  <div class="toggle-track" id="toggle2FA" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>
                </div>
                <div class="setting-row">
                  <div class="setting-info"><div class="setting-name">Session Timeout (hours)</div><div class="setting-desc">Auto-logout after inactivity</div></div>
                  <select class="filter-select" style="width:auto" id="sessionTimeout">
                    <option value="1">1 hour</option>
                    <option value="4">4 hours</option>
                    <option value="8" selected>8 hours</option>
                    <option value="24">24 hours</option>
                  </select>
                </div>
                <div class="setting-row">
                  <div class="setting-info"><div class="setting-name">Audit All Admin Actions</div><div class="setting-desc">Log every admin create/edit/delete operation</div></div>
                  <div class="toggle-track on" id="toggleAudit" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>
                </div>
              </div>
              <div class="settings-section">
                <div class="settings-section-title">Email Notifications</div>
                <div class="setting-row">
                  <div class="setting-info"><div class="setting-name">New User Registration Alert</div><div class="setting-desc">Email admin when a new user signs up</div></div>
                  <div class="toggle-track on" id="toggleNewUserEmail" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>
                </div>
                <div class="setting-row">
                  <div class="setting-info"><div class="setting-name">Weekly Report Digest</div><div class="setting-desc">Automated weekly analytics summary</div></div>
                  <div class="toggle-track" id="toggleWeeklyDigest" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>
                </div>
                <div class="form-group" style="margin-top:16px"><label class="form-label">Admin Email Recipients</label><input class="form-input" id="adminEmails" value="admin@roshd-professional.com"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header"><div class="card-title">Danger Zone</div><div class="card-subtitle">Irreversible system-level operations</div></div>
          <div class="card-body">
            <div style="display:flex;flex-wrap:wrap;gap:14px;align-items:center">
              <button class="btn btn-danger btn-sm" onclick="confirmDanger('clear-cache','Clear System Cache','This will force all clients to reload fresh data. Users currently on the platform will experience a brief reload.')">Clear Cache</button>
              <button class="btn btn-danger btn-sm" onclick="confirmDanger('reset-filters','Reset All User Filters','This will erase all stored filter preferences for every user account.')">Reset User Filters</button>
              <button class="btn btn-danger btn-sm" onclick="confirmDanger('flush-sessions','Flush All Sessions','All active client sessions will be terminated. Users will need to log in again.')">Flush Sessions</button>
              <button class="btn btn-danger btn-sm" onclick="confirmDanger('reset-model','Reset Model to Defaults','All manual driver weight overrides will be reverted to calculated defaults.')">Reset Model Overrides</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ══════════════ AUDIT LOG ══════════════ -->
      <div class="panel" id="panel-audit">
        <div class="page-header">
          <div class="page-header-left">
            <div class="page-eyebrow">Security & Compliance</div>
            <div class="page-title">Audit Log</div>
            <div class="page-subtitle">Complete record of all admin actions — who did what, when, and on which resource</div>
          </div>
          <div class="page-header-actions">
            <button class="btn btn-secondary btn-sm" onclick="exportAuditLog()">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg>
              Export Log
            </button>
          </div>
        </div>

        <div class="card" style="margin-bottom:0">
          <div class="filter-bar">
            <div class="filter-search">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input type="text" placeholder="Search actions, users…" id="auditSearch" oninput="filterAuditLog()">
            </div>
            <select class="filter-select" id="auditActionFilter" onchange="filterAuditLog()">
              <option value="">All Actions</option>
              <option value="CREATE">Create</option>
              <option value="UPDATE">Update</option>
              <option value="DELETE">Delete</option>
              <option value="LOGIN">Login</option>
              <option value="EXPORT">Export</option>
              <option value="UPLOAD">Upload</option>
              <option value="OVERRIDE">Override</option>
            </select>
            <select class="filter-select" id="auditAdminFilter" onchange="filterAuditLog()">
              <option value="">All Admins</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Manager">Manager</option>
            </select>
            <button class="btn btn-danger btn-sm" onclick="confirmDanger('clear-audit','Clear Audit Log','This will permanently delete all audit log entries. This action cannot be undone.')">Clear Log</button>
          </div>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Admin</th>
                  <th>Action</th>
                  <th>Resource</th>
                  <th>Details</th>
                  <th>IP Address</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody id="auditTbody"></tbody>
            </table>
          </div>
          <div class="table-pagination" id="auditPagination"></div>
        </div>
      </div>

    </div><!-- end content -->
  </div><!-- end main -->
</div><!-- end adminApp -->

<!-- ════════════════════════════════════════
  MODALS
════════════════════════════════════════ -->

<!-- Create / Edit User Modal -->
<div class="modal-overlay" id="userModal" onclick="closeModal('userModal',event)">
  <div class="modal">
    <div class="modal-header">
      <div><div class="modal-title" id="userModalTitle">Add New User</div><div class="modal-subtitle">Create a new client account with assigned branch and role</div></div>
      <button class="modal-close" onclick="closeModalById('userModal')">✕</button>
    </div>
    <div class="modal-body">
      <div class="modal-error" id="userModalError"></div>
      <input type="hidden" id="editUserId">
      <div class="form-grid-2">
        <div class="form-group"><label class="form-label">First Name *</label><input class="form-input" id="uFirstName" placeholder="Ahmed"></div>
        <div class="form-group"><label class="form-label">Last Name *</label><input class="form-input" id="uLastName" placeholder="Al-Rashidi"></div>
      </div>
      <div class="form-group"><label class="form-label">Email Address *</label><input type="email" class="form-input" id="uEmail" placeholder="ahmed@company.com"></div>
      <div class="form-grid-2">
        <div class="form-group"><label class="form-label">Password *</label><div class="pw-wrap"><input type="password" class="form-input" id="uPassword" placeholder="Min. 8 characters"><button class="pw-eye" onclick="togglePw('uPassword',this)"><svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></div></div>
        <div class="form-group"><label class="form-label">Role *</label>
          <select class="form-select" id="uRole">
            <option value="customer">Customer</option>
            <option value="analyst">Analyst</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>
      <div class="form-grid-2">
        <div class="form-group"><label class="form-label">Branch</label>
          <select class="form-select" id="uBranch">
            <option value="All Branches">All Branches</option>
            <option value="Riyadh">Riyadh</option>
            <option value="Jeddah">Jeddah</option>
            <option value="Dammam">Dammam</option>
          </select>
        </div>
        <div class="form-group"><label class="form-label">Status</label>
          <select class="form-select" id="uStatus">
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
      </div>
      <div class="form-group"><label class="form-label">Organization / Company</label><input class="form-input" id="uOrg" placeholder="Company name"></div>
      <div class="form-group"><label class="form-label">Notes</label><textarea class="form-input" id="uNotes" rows="2" placeholder="Internal notes about this user…"></textarea></div>
      <div style="display:flex;align-items:center;gap:14px;padding:12px 0;border-top:1px solid var(--border);margin-top:4px">
        <label class="toggle-switch">
          <div class="toggle-track on" id="uEmailVerified" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>
          <span style="font-size:13px;color:var(--text-dim);font-weight:600">Email Verified</span>
        </label>
        <label class="toggle-switch">
          <div class="toggle-track" id="uSendWelcome" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>
          <span style="font-size:13px;color:var(--text-dim);font-weight:600">Send Welcome Email</span>
        </label>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModalById('userModal')">Cancel</button>
      <button class="btn btn-primary" onclick="saveUser()" id="saveUserBtn">Create User</button>
    </div>
  </div>
</div>

<!-- Create / Edit Branch Modal -->
<div class="modal-overlay" id="branchModal" onclick="closeModal('branchModal',event)">
  <div class="modal">
    <div class="modal-header">
      <div><div class="modal-title" id="branchModalTitle">Add Branch</div><div class="modal-subtitle">New service branch configuration</div></div>
      <button class="modal-close" onclick="closeModalById('branchModal')">✕</button>
    </div>
    <div class="modal-body">
      <input type="hidden" id="editBranchId">
      <div class="form-grid-2">
        <div class="form-group"><label class="form-label">Branch Name (EN) *</label><input class="form-input" id="bNameEn" placeholder="e.g. Riyadh North"></div>
        <div class="form-group"><label class="form-label">Branch Name (AR) *</label><input class="form-input" id="bNameAr" placeholder="مثال: الرياض الشمال" dir="rtl"></div>
      </div>
      <div class="form-grid-2">
        <div class="form-group"><label class="form-label">Region</label>
          <select class="form-select" id="bRegion">
            <option>Riyadh</option><option>Jeddah</option><option>Dammam</option><option>Other</option>
          </select>
        </div>
        <div class="form-group"><label class="form-label">Manager Name</label><input class="form-input" id="bManager" placeholder="Branch manager"></div>
      </div>
      <div class="form-group"><label class="form-label">Address</label><input class="form-input" id="bAddress" placeholder="Full branch address"></div>
      <div class="form-grid-2">
        <div class="form-group"><label class="form-label">CX Score Override (/5)</label><input class="form-input" type="number" id="bCxScore" placeholder="3.8" min="1" max="5" step="0.1"></div>
        <div class="form-group"><label class="form-label">Sample Size (N)</label><input class="form-input" type="number" id="bSampleN" placeholder="100" min="0"></div>
      </div>
      <div class="form-group"><label class="form-label">Status</label>
        <select class="form-select" id="bStatus">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pilot">Pilot</option>
        </select>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModalById('branchModal')">Cancel</button>
      <button class="btn btn-primary" onclick="saveBranch()" id="saveBranchBtn">Save Branch</button>
    </div>
  </div>
</div>

<!-- View User Modal -->
<div class="modal-overlay" id="viewUserModal" onclick="closeModal('viewUserModal',event)">
  <div class="modal modal-lg">
    <div class="modal-header">
      <div><div class="modal-title" id="viewUserTitle">User Profile</div><div class="modal-subtitle" id="viewUserSub">Full account details</div></div>
      <button class="modal-close" onclick="closeModalById('viewUserModal')">✕</button>
    </div>
    <div class="modal-body" id="viewUserBody"></div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModalById('viewUserModal')">Close</button>
      <button class="btn btn-primary" onclick="editUserFromView()" id="editFromViewBtn">Edit User</button>
    </div>
  </div>
</div>

<!-- Confirm Danger Modal -->
<div class="modal-overlay" id="confirmModal" onclick="closeModal('confirmModal',event)">
  <div class="modal confirm-modal">
    <div class="confirm-body">
      <div class="confirm-icon" id="confirmIcon">⚠️</div>
      <div class="confirm-title" id="confirmTitle">Are you sure?</div>
      <div class="confirm-message" id="confirmMessage">This action cannot be undone.</div>
    </div>
    <div class="modal-footer" style="justify-content:center">
      <button class="btn btn-secondary" onclick="closeModalById('confirmModal')">Cancel</button>
      <button class="btn btn-danger" onclick="executeConfirmedAction()" id="confirmActionBtn">Confirm</button>
    </div>
  </div>
</div>

<!-- Toolbar filter names (EN/AR) — same storage as Dashboard filters page -->
<div class="modal-overlay" id="toolbarFilterLabelsModal" onclick="closeModal('toolbarFilterLabelsModal',event)">
  <div class="modal modal-lg">
    <div class="modal-header">
      <div>
        <div class="modal-title"><span class="en">Filter toolbar names</span><span class="ar">أسماء مرشحات شريط الأدوات</span></div>
        <div class="modal-subtitle" style="font-size:12px;line-height:1.45"><span class="en">Edit English and Arabic labels for all eight filters. Saves to <code style="opacity:.85">roshd_filter_bar_config</code> — customer dashboard, Executive editor, and CX editor update immediately.</span><span class="ar">حرّر التسميات بالإنجليزية والعربية للمرشحات الثمانية. يُحفظ في نفس المفتاح ويُحدّث لوحة العميل ومحرري المحتوى فورًا.</span></div>
      </div>
      <button type="button" class="modal-close" onclick="closeModalById('toolbarFilterLabelsModal')">✕</button>
    </div>
    <div class="modal-body" id="toolbarFilterLabelsMount" style="overflow-y:auto;max-height:min(70vh,520px);padding-top:4px"></div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" onclick="closeModalById('toolbarFilterLabelsModal')"><span class="en">Cancel</span><span class="ar">إلغاء</span></button>
      <button type="button" class="btn btn-primary" onclick="saveToolbarFilterLabelsFromModal()"><span class="en">Save &amp; sync everywhere</span><span class="ar">حفظ ومزامنة للجميع</span></button>
    </div>
  </div>
</div>

<!-- Schedule Export Modal -->
<div class="modal-overlay" id="scheduleModal" onclick="closeModal('scheduleModal',event)">
  <div class="modal">
    <div class="modal-header">
      <div><div class="modal-title">Schedule Export</div><div class="modal-subtitle">Set up automated periodic report generation</div></div>
      <button class="modal-close" onclick="closeModalById('scheduleModal')">✕</button>
    </div>
    <div class="modal-body">
      <div class="form-group"><label class="form-label">Report Name</label><input class="form-input" id="schedName" placeholder="Weekly CX Summary"></div>
      <div class="form-grid-2">
        <div class="form-group"><label class="form-label">Frequency</label>
          <select class="form-select" id="schedFreq"><option>Weekly</option><option>Monthly</option><option>Quarterly</option></select>
        </div>
        <div class="form-group"><label class="form-label">Format</label>
          <select class="form-select" id="schedFormat"><option>PDF</option><option>Excel</option><option>CSV</option></select>
        </div>
      </div>
      <div class="form-group"><label class="form-label">Send To (email)</label><input class="form-input" id="schedEmail" placeholder="manager@company.com"></div>
      <div class="form-group"><label class="form-label">Branch</label>
        <select class="form-select" id="schedBranch"><option>All Branches</option><option>Riyadh</option><option>Jeddah</option><option>Dammam</option></select>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModalById('scheduleModal')">Cancel</button>
      <button class="btn btn-primary" onclick="saveSchedule()">Create Schedule</button>
    </div>
  </div>
</div>

<!-- Toast container -->
<div class="toast-container" id="toastContainer"></div>

<!-- ════════════════════════════════════════
  JAVASCRIPT
════════════════════════════════════════ -->
<script>
/* Embedded admin (Vite/React iframe srcDoc): fetch cannot load /customer-dashboard.html (opaque origin).
   Parent bundles ../../index.html and posts it here — see admin/src/App.jsx */
(function setupCustomerDashboardHtmlFromParent() {
  window.__ROSHD_CUSTOMER_DASHBOARD_HTML__ = '';
  window.addEventListener('message', function (ev) {
    try {
      if (!ev.data || ev.data.type !== 'roshd-customer-dashboard-html') return;
      const html = ev.data.html;
      if (typeof html === 'string' && html.length > 100) window.__ROSHD_CUSTOMER_DASHBOARD_HTML__ = html;
    } catch (_) {}
  });
})();

/* When admin is embedded via React/Vite (\`iframe srcDoc\`), relative fetch('./customer-dashboard.html')
   resolves against about:srcdoc and fails silently on Vercel — editors show empty defaults. */
function resolveCustomerDashboardHtmlUrl() {
  function originHint() {
    try {
      if (window.parent && window.parent !== window && window.parent.location?.origin)
        return String(window.parent.location.origin);
    } catch (_) {}
    try {
      if (window.location?.origin && window.location.origin !== 'null') return String(window.location.origin);
    } catch (_) {}
    try {
      if (document.referrer) return new URL(document.referrer).origin;
    } catch (_) {}
    return '';
  }
  const o = originHint().replace(/\\/$/, '');
  return (o || '') + '/customer-dashboard.html';
}

async function fetchCustomerDashboardHtmlBundle() {
  const cached = typeof window.__ROSHD_CUSTOMER_DASHBOARD_HTML__ === 'string' ? window.__ROSHD_CUSTOMER_DASHBOARD_HTML__ : '';
  if (cached.length > 100) return cached;
  try {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: 'roshd-request-customer-dashboard-html' }, '*');
      const deadline = Date.now() + 2800;
      while (Date.now() < deadline) {
        const h = typeof window.__ROSHD_CUSTOMER_DASHBOARD_HTML__ === 'string' ? window.__ROSHD_CUSTOMER_DASHBOARD_HTML__ : '';
        if (h.length > 100) return h;
        await new Promise((r) => setTimeout(r, 40));
      }
    }
  } catch (_) {}
  const urls = [];
  const push = (u) => {
    if (u && urls.indexOf(u) === -1) urls.push(u);
  };
  push(resolveCustomerDashboardHtmlUrl());
  try {
    const p = window.parent && window.parent !== window ? window.parent : window;
    const o = String(p.location?.origin || '').replace(/\\/$/, '');
    if (o && o !== 'null') push(o + '/customer-dashboard.html');
  } catch (_) {}
  try {
    const o = String(window.location?.origin || '').replace(/\\/$/, '');
    if (o && o !== 'null') push(o + '/customer-dashboard.html');
  } catch (_) {}
  try {
    if (document.referrer) push(new URL(document.referrer).origin + '/customer-dashboard.html');
  } catch (_) {}
  push('/customer-dashboard.html');
  try {
    const base = typeof API_BASE === 'string' ? API_BASE.replace(/\\/$/, '') : '';
    if (/^https?:\\/\\//i.test(base)) push(base + '/customer-dashboard.html');
  } catch (_) {}
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      const res = await fetch(url, { cache: 'no-store', credentials: 'omit', mode: 'cors' });
      if (res.ok) return await res.text();
    } catch (_) {}
  }
  return typeof window.__ROSHD_CUSTOMER_DASHBOARD_HTML__ === 'string' && window.__ROSHD_CUSTOMER_DASHBOARD_HTML__.length > 100
    ? window.__ROSHD_CUSTOMER_DASHBOARD_HTML__
    : '';
}

/* ═══════════════════════════════════════════
   CONSTANTS & STATE
═══════════════════════════════════════════ */
const API_BASE = 'https://roshd-professional-s8lh.vercel.app';

const BRANCHES_DATA = {
  'All Branches': { score:3.8, explanatory:72, top:'Quality',        topAr:'الجودة',        n:300 },
  'Riyadh':       { score:3.7, explanatory:74, top:'Quality',        topAr:'الجودة',        n:100 },
  'Jeddah':       { score:3.4, explanatory:69, top:'Communication',  topAr:'التواصل',       n:100 },
  'Dammam':       { score:3.2, explanatory:63, top:'Price Fairness', topAr:'عدالة السعر',   n:100 }
};

const DRIVERS_DATA = {
  'All Branches': [
    {name:'Quality',        impact:0.34, avg:3.4, decision:'Invest'},
    {name:'Communication',  impact:0.23, avg:3.0, decision:'Selective'},
    {name:'Price Fairness', impact:0.12, avg:2.9, decision:'Monitor'},
    {name:'Advisor Behavior',impact:0.10,avg:3.8, decision:'Maintain'},
    {name:'Speed',          impact:0.01, avg:1.4, decision:'Do not overinvest'}
  ],
  'Riyadh': [
    {name:'Quality',        impact:0.34, avg:3.5, decision:'Invest'},
    {name:'Advisor Behavior',impact:0.15,avg:3.9, decision:'Optimize'},
    {name:'Communication',  impact:0.11, avg:3.2, decision:'Selective'},
    {name:'Price Fairness', impact:0.07, avg:3.0, decision:'Monitor'},
    {name:'Speed',          impact:0.01, avg:1.5, decision:'Do not overinvest'}
  ],
  'Jeddah': [
    {name:'Communication',  impact:0.26, avg:2.8, decision:'Invest'},
    {name:'Quality',        impact:0.18, avg:3.4, decision:'Optimize'},
    {name:'Price Fairness', impact:0.12, avg:2.7, decision:'Selective'},
    {name:'Advisor Behavior',impact:0.08,avg:3.5, decision:'Monitor'},
    {name:'Speed',          impact:0.01, avg:1.3, decision:'Do not overinvest'}
  ],
  'Dammam': [
    {name:'Price Fairness', impact:0.22, avg:2.5, decision:'Invest'},
    {name:'Communication',  impact:0.15, avg:3.0, decision:'Optimize'},
    {name:'Quality',        impact:0.10, avg:3.3, decision:'Selective'},
    {name:'Advisor Behavior',impact:0.06,avg:3.4, decision:'Monitor'},
    {name:'Speed',          impact:0.01, avg:1.2, decision:'Do not overinvest'}
  ]
};

const EXEC_DB_DATA = {
  "All Branches": {
    score: 3.8, explanatory: 72, top: "Quality", topAr: "الجودة", risk: "Speed", riskAr: "السرعة",
    drivers: [
      { name: "Quality", nameAr: "الجودة", avg: 3.4, impact: 0.34, decision: "Invest", decisionAr: "استثمر", cls: "navy" },
      { name: "Communication", nameAr: "التواصل", avg: 3.0, impact: 0.23, decision: "Selective", decisionAr: "انتقائي", cls: "warning" },
      { name: "Price Fairness", nameAr: "عدالة السعر", avg: 2.9, impact: 0.12, decision: "Monitor", decisionAr: "راقب", cls: "info" },
      { name: "Advisor Behavior", nameAr: "سلوك المستشار", avg: 3.8, impact: 0.10, decision: "Maintain", decisionAr: "حافظ", cls: "" },
      { name: "Speed", nameAr: "السرعة", avg: 1.4, impact: 0.01, decision: "Do not overinvest", decisionAr: "لا تُبالغ في الاستثمار", cls: "danger" },
    ],
    invest: ["Fund quality consistency improvements.", "Audit first-time-right and rework patterns.", "Make quality the main CX improvement program."],
    investAr: ["موّل تحسينات الجودة المستمرة.", "راجع أنماط الإصلاح من أول مرة والإعادة.", "اجعل الجودة برنامج التحسين الرئيسي."],
    optimize: ["Improve customer communication discipline.", "Use advisor scripts for updates.", "Target price fairness where complaints cluster."],
    optimizeAr: ["حسّن انضباط التواصل مع العملاء.", "استخدم نصوص المستشار للتحديثات.", "استهدف عدالة السعر حيث تتركز الشكاوى."],
    avoid: ["Do not invest in speed just because its average is low.", "Do not build one action plan for all branches.", "Do not use averages as decision authority."],
    avoidAr: ["لا تستثمر في السرعة لأن متوسطها منخفض فقط.", "لا تبنِ خطة عمل واحدة لجميع الفروع.", "لا تستخدم المتوسطات كسلطة قرار."],
  },
  "Riyadh": {
    score: 3.7, explanatory: 74, top: "Quality", topAr: "الجودة", risk: "Speed", riskAr: "السرعة",
    drivers: [
      { name: "Quality", nameAr: "الجودة", avg: 3.5, impact: 0.34, decision: "Invest", decisionAr: "استثمر", cls: "navy" },
      { name: "Advisor Behavior", nameAr: "سلوك المستشار", avg: 3.9, impact: 0.15, decision: "Optimize", decisionAr: "حسّن", cls: "warning" },
      { name: "Communication", nameAr: "التواصل", avg: 3.2, impact: 0.11, decision: "Selective", decisionAr: "انتقائي", cls: "info" },
      { name: "Price Fairness", nameAr: "عدالة السعر", avg: 3.0, impact: 0.07, decision: "Monitor", decisionAr: "راقب", cls: "" },
      { name: "Speed", nameAr: "السرعة", avg: 1.5, impact: 0.01, decision: "Do not overinvest", decisionAr: "لا تُبالغ", cls: "danger" },
    ],
    invest: ["Invest in repair quality consistency.", "Introduce quality gate before delivery.", "Tie rework reduction to branch KPIs."],
    investAr: ["استثمر في استمرارية جودة الإصلاح.", "أدخل بوابة جودة قبل التسليم.", "اربط تخفيض الإعادة بمؤشرات الفرع."],
    optimize: ["Coach advisors on expectation setting.", "Improve explanation during handover.", "Track advisor-level complaints."],
    optimizeAr: ["درّب المستشارين على تحديد التوقعات.", "حسّن الشرح أثناء التسليم.", "تتبع الشكاوى على مستوى المستشار."],
    avoid: ["Do not add capacity only to improve speed.", "Avoid generic campaigns not linked to quality.", "Do not treat Riyadh like other branches."],
    avoidAr: ["لا تضف طاقة فقط لتحسين السرعة.", "تجنّب الحملات العامة غير المرتبطة بالجودة.", "لا تعامل الرياض مثل الفروع الأخرى."],
  },
  "Jeddah": {
    score: 3.4, explanatory: 69, top: "Communication", topAr: "التواصل", risk: "Speed", riskAr: "السرعة",
    drivers: [
      { name: "Communication", nameAr: "التواصل", avg: 2.8, impact: 0.26, decision: "Invest", decisionAr: "استثمر", cls: "navy" },
      { name: "Quality", nameAr: "الجودة", avg: 3.4, impact: 0.18, decision: "Optimize", decisionAr: "حسّن", cls: "warning" },
      { name: "Price Fairness", nameAr: "عدالة السعر", avg: 2.7, impact: 0.12, decision: "Selective", decisionAr: "انتقائي", cls: "info" },
      { name: "Advisor Behavior", nameAr: "سلوك المستشار", avg: 3.5, impact: 0.08, decision: "Monitor", decisionAr: "راقب", cls: "" },
      { name: "Speed", nameAr: "السرعة", avg: 1.3, impact: 0.01, decision: "Do not overinvest", decisionAr: "لا تُبالغ", cls: "danger" },
    ],
    invest: ["Invest in communication discipline.", "Mandatory customer update checkpoints.", "Daily advisor update compliance tracking."],
    investAr: ["استثمر في انضباط التواصل.", "نقاط تحديث إلزامية للعملاء.", "تتبع يومي لامتثال تحديثات المستشار."],
    optimize: ["Target quality issues in repeat complaints.", "Use selective quality audit.", "Improve repair explanation to customer."],
    optimizeAr: ["استهدف مشكلات الجودة في الشكاوى المتكررة.", "استخدم تدقيق جودة انتقائي.", "حسّن شرح الإصلاح للعميل."],
    avoid: ["Do not assume speed is the root cause.", "Avoid staffing increases without driver evidence.", "Do not overreact to low averages."],
    avoidAr: ["لا تفترض أن السرعة هي السبب الجذري.", "تجنّب زيادة الكوادر بدون دليل محرك.", "لا تبالغ في الاستجابة لانخفاض المتوسطات."],
  },
  "Dammam": {
    score: 3.2, explanatory: 63, top: "Price Fairness", topAr: "عدالة السعر", risk: "Speed", riskAr: "السرعة",
    drivers: [
      { name: "Price Fairness", nameAr: "عدالة السعر", avg: 2.5, impact: 0.22, decision: "Invest", decisionAr: "استثمر", cls: "navy" },
      { name: "Communication", nameAr: "التواصل", avg: 3.0, impact: 0.15, decision: "Optimize", decisionAr: "حسّن", cls: "warning" },
      { name: "Quality", nameAr: "الجودة", avg: 3.3, impact: 0.10, decision: "Selective", decisionAr: "انتقائي", cls: "info" },
      { name: "Advisor Behavior", nameAr: "سلوك المستشار", avg: 3.4, impact: 0.06, decision: "Monitor", decisionAr: "راقب", cls: "" },
      { name: "Speed", nameAr: "السرعة", avg: 1.2, impact: 0.01, decision: "Do not overinvest", decisionAr: "لا تُبالغ", cls: "danger" },
    ],
    invest: ["Invest in price fairness explanation.", "Improve estimate transparency.", "Train advisors on value explanation."],
    investAr: ["استثمر في شرح عدالة السعر.", "حسّن شفافية التقديرات.", "درّب المستشارين على شرح القيمة."],
    optimize: ["Support price fairness with better communication.", "Send clear estimates before approval.", "Track price-related objections."],
    optimizeAr: ["ادعم عدالة السعر بتواصل أفضل.", "أرسل تقديرات واضحة قبل الموافقة.", "تتبع الاعتراضات المتعلقة بالسعر."],
    avoid: ["Do not discount blindly.", "Do not prioritize speed.", "Avoid across-the-board fixes."],
    avoidAr: ["لا تُقدّم خصومات بشكل أعمى.", "لا تُعطِ أولوية للسرعة.", "تجنّب الإصلاحات الشاملة."],
  },
};

function execDedupeDrivers(arr) {
  const seen = new Set();
  return (arr || []).filter((dr) => {
    const k = String(dr?.name || "").trim();
    if (!k || seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

/** Must match customer dashboard */
const FILTER_BAR_STORAGE_KEY = 'roshd_filter_bar_config';
let __admExecFilterSig = '';
let __admCustFilterSelectorsSig = '';

function admDefaultFilterBarConfig() {
  return {
    filters: [
      { key: 'branch', labelEn: 'Branch', labelAr: 'الفرع', allValue: 'All Branches', allLabelEn: 'All Branches', allLabelAr: 'جميع الفروع', options: [{ value: 'Riyadh', labelEn: 'Riyadh', labelAr: 'الرياض' }, { value: 'Jeddah', labelEn: 'Jeddah', labelAr: 'جدة' }, { value: 'Dammam', labelEn: 'Dammam', labelAr: 'الدمام' }] },
      { key: 'gender', labelEn: 'Gender', labelAr: 'الجنس', allValue: 'All Genders', allLabelEn: 'All Genders', allLabelAr: 'الجنسين', options: [{ value: 'Male', labelEn: 'Male', labelAr: 'ذكر' }, { value: 'Female', labelEn: 'Female', labelAr: 'أنثى' }] },
      { key: 'service', labelEn: 'Service', labelAr: 'الخدمة', allValue: 'All Services', allLabelEn: 'All Services', allLabelAr: 'جميع الخدمات', options: [{ value: 'Mechanical', labelEn: 'Mechanical', labelAr: 'ميكانيكي' }, { value: 'Bodyshop', labelEn: 'Bodyshop', labelAr: 'هيكل السيارة' }] },
      { key: 'frequency', labelEn: 'Frequency', labelAr: 'تكرار الزيارات', allValue: 'All Frequencies', allLabelEn: 'All Frequencies', allLabelAr: 'كل التكرارات', options: [{ value: '1 Visit', labelEn: '1 Visit', labelAr: 'زيارة واحدة' }, { value: '2–3 Visits', labelEn: '2–3 Visits', labelAr: '2–3 زيارات' }, { value: '4+ Visits', labelEn: '4+ Visits', labelAr: '4+ زيارات' }] },
      { key: 'age', labelEn: 'Age', labelAr: 'العمر', allValue: 'All Ages', allLabelEn: 'All Ages', allLabelAr: 'كل الأعمار', options: [{ value: '<25', labelEn: '<25', labelAr: 'أقل من 25' }, { value: '25–34', labelEn: '25–34', labelAr: '25–34' }, { value: '35–44', labelEn: '35–44', labelAr: '35–44' }, { value: '45+', labelEn: '45+', labelAr: '45+' }] },
      { key: 'extra1', labelEn: 'Channel', labelAr: 'القناة', allValue: '__ALL__', allLabelEn: 'All channels', allLabelAr: 'كل القنوات', options: [{ value: 'Walk-in', labelEn: 'Walk-in', labelAr: 'حضوري' }, { value: 'App', labelEn: 'App / Online', labelAr: 'التطبيق' }, { value: 'Phone', labelEn: 'Phone', labelAr: 'هاتف' }] },
      { key: 'extra2', labelEn: 'Customer type', labelAr: 'نوع العميل', allValue: '__ALL__', allLabelEn: 'All types', allLabelAr: 'كل الأنواع', options: [{ value: 'New', labelEn: 'New', labelAr: 'جديد' }, { value: 'Returning', labelEn: 'Returning', labelAr: 'عائد' }] },
      { key: 'extra3', labelEn: 'Day part', labelAr: 'فترة اليوم', allValue: '__ALL__', allLabelEn: 'All', allLabelAr: 'الكل', options: [{ value: 'Weekday', labelEn: 'Weekday', labelAr: 'يوم عمل' }, { value: 'Weekend', labelEn: 'Weekend', labelAr: 'عطلة' }] }
    ]
  };
}

function admDeepCloneJson(x) {
  try {
    return JSON.parse(JSON.stringify(x));
  } catch (_) {
    return admDefaultFilterBarConfig();
  }
}

function admNormalizeFilterBarConfig(parsed) {
  const def = admDefaultFilterBarConfig();
  if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.filters)) return def;
  const out = { filters: [] };
  for (let i = 0; i < 8; i++) {
    const d = admDeepCloneJson(def).filters[i];
    const s = parsed.filters[i];
    if (!s || typeof s !== 'object') {
      out.filters.push(d);
      continue;
    }
    const merged = {
      key: d.key,
      labelEn: String(s.labelEn || d.labelEn),
      labelAr: String(s.labelAr || d.labelAr),
      allValue: String(s.allValue != null && s.allValue !== '' ? s.allValue : d.allValue),
      allLabelEn: String(s.allLabelEn || d.allLabelEn),
      allLabelAr: String(s.allLabelAr || d.allLabelAr),
      options: admDeepCloneJson(d.options)
    };
    const rawOpts = Array.isArray(s.options) ? s.options : [];
    const seen = new Set();
    const opts = [];
    rawOpts.forEach((ro) => {
      const v = String(ro && ro.value != null ? ro.value : '').trim();
      if (!v || seen.has(v)) return;
      seen.add(v);
      opts.push({
        value: v,
        labelEn: String(ro.labelEn || v),
        labelAr: String(ro.labelAr || ro.labelEn || v)
      });
    });
    if (opts.length) merged.options = opts;
    out.filters.push(merged);
  }
  return out;
}

function admGetFilterBarConfig() {
  try {
    const raw = localStorage.getItem(FILTER_BAR_STORAGE_KEY);
    if (raw) return admNormalizeFilterBarConfig(JSON.parse(raw));
  } catch (_) {}
  return admDefaultFilterBarConfig();
}

function admFilterFingerprint() {
  try {
    return JSON.stringify(admGetFilterBarConfig().filters);
  } catch (_) {
    return '';
  }
}

function admFilterDatasetCol(filterIndex) {
  if (filterIndex < 5) return 1 + filterIndex;
  return 12 + (filterIndex - 5);
}

function admFilId(kind, i) {
  if (kind === 'exec') return 'execFil' + i;
  if (kind === 'cx') return 'cxFil' + i;
  return 'admDf' + i;
}

function admGetFilValue(kind, i) {
  const cfg = admGetFilterBarConfig();
  const f = cfg.filters[i];
  if (!f) return '';
  const el = document.getElementById(admFilId(kind, i));
  const allV = String(f.allValue ?? '').trim();
  const raw = el ? String(el.value).trim() : allV;
  if (raw === '') return allV;
  return raw;
}

function admFilMatchesRow(row, filterIndex, selectedRaw) {
  const cfg = admGetFilterBarConfig();
  const f = cfg.filters[filterIndex];
  if (!f) return true;
  const col = admFilterDatasetCol(filterIndex);
  const allV = String(f.allValue ?? '').trim();
  const sel = String(selectedRaw ?? '').trim();
  if (sel === '' || sel === allV) return true;
  return String(row[col] ?? '').trim() === sel;
}

function admAttrEsc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function admSyncDashFilterSelectOptions() {
  ['execFilterStripInner', 'cxFilterStripInner'].forEach((id) => {
    const host = document.getElementById(id);
    if (!host) return;
    host.querySelectorAll('select option[data-en]').forEach((opt) => {
      const en = opt.dataset.en;
      const ar = opt.dataset.ar;
      opt.textContent = document.documentElement.getAttribute('data-lang') === 'ar' ? ar || en : en;
    });
  });
}

function admUpdateDashFilterScrollFade(outer) {
  if (!outer) return;
  const max = outer.scrollWidth - outer.clientWidth;
  if (max <= 1) {
    outer.classList.remove('is-scrollable-start', 'is-scrollable-end');
    return;
  }
  const tol = 4;
  const sl = outer.scrollLeft;
  outer.classList.toggle('is-scrollable-start', sl > tol);
  outer.classList.toggle('is-scrollable-end', sl < max - tol);
}

let __admDashFilterScrollBound = false;
function admBindDashFilterScrollFade() {
  const outers = [document.getElementById('execFilterScrollOuter'), document.getElementById('cxFilterScrollOuter')].filter(Boolean);
  if (!outers.length) return;
  const upd = () => {
    requestAnimationFrame(() => outers.forEach((o) => admUpdateDashFilterScrollFade(o)));
  };
  upd();
  if (__admDashFilterScrollBound) return;
  __admDashFilterScrollBound = true;
  outers.forEach((o) => o.addEventListener('scroll', upd, { passive: true }));
  window.addEventListener('resize', upd);
}

function admRebuildCustomerFilterSelectors() {
  const sig = admFilterFingerprint();
  const execHost = document.getElementById('execFilterStripInner');
  const cxHost = document.getElementById('cxFilterStripInner');
  if (!execHost || !cxHost) return;
  __admCustFilterSelectorsSig = sig;
  function build(kind, host, onchg) {
    const cfg = admGetFilterBarConfig();
    host.innerHTML = cfg.filters
      .map((f, i) => {
        const fid = admFilId(kind, i);
        const lbl = \`<label class="db-filter-chip-lbl" for="\${fid}"><span class="en">\${admAttrEsc(f.labelEn)}</span><span class="ar">\${admAttrEsc(f.labelAr)}</span></label>\`;
        const optAll = \`<option value="\${admAttrEsc(f.allValue)}" data-en="\${admAttrEsc(f.allLabelEn)}" data-ar="\${admAttrEsc(f.allLabelAr)}">\${admAttrEsc(f.allLabelEn)}</option>\`;
        const opts = (f.options || [])
          .map(
            (o) =>
              \`<option value="\${admAttrEsc(o.value)}" data-en="\${admAttrEsc(o.labelEn)}" data-ar="\${admAttrEsc(o.labelAr)}">\${admAttrEsc(o.labelEn)}</option>\`
          )
          .join('');
        const ev = onchg ? \` onchange="\${onchg}"\` : '';
        const aria = admAttrEsc(f.labelEn);
        return \`<div class="db-filter-chip">\${lbl}<div class="db-filter-chip-select-wrap"><select class="db-select" id="\${fid}" aria-label="\${aria}"\${ev}>\${optAll}\${opts}</select></div></div>\`;
      })
      .join('');
  }
  build('exec', execHost, 'loadExecutiveEditorForm()');
  build('cx', cxHost, 'loadCxDriversEditorForm()');
  admSyncDashFilterSelectOptions();
  admBindDashFilterScrollFade();
}

function admApplyRoshdSnapshotTo(kind) {
  let snap = {};
  try {
    snap = JSON.parse(localStorage.getItem('roshd_filters') || 'null');
  } catch (_) {
    snap = {};
  }
  if (!snap || typeof snap !== 'object') snap = {};
  const lb = snap.branch,
    lg = snap.gender,
    ls = snap.service,
    lf = snap.frequency,
    la = snap.age;
  const cfg = admGetFilterBarConfig();
  cfg.filters.forEach((f, i) => {
    const el = document.getElementById(admFilId(kind, i));
    if (!el) return;
    let v = snap[f.key];
    if (v == null || v === '') {
      if (f.key === 'branch') v = lb;
      else if (f.key === 'gender') v = lg;
      else if (f.key === 'service') v = ls;
      else if (f.key === 'frequency') v = lf;
      else if (f.key === 'age') v = la;
    }
    if (v == null || v === '') return;
    const has = Array.from(el.options).some((o) => String(o.value) === String(v));
    if (has) el.value = String(v);
  });
}

function admAfterFilterSelectorsRebuild() {
  admApplyRoshdSnapshotTo('exec');
  admApplyRoshdSnapshotTo('cx');
}

function execEnsureFilterSelectorsMounted() {
  if (!document.getElementById('execFilterStripInner') || !document.getElementById('cxFilterStripInner')) return;
  const sig = admFilterFingerprint();
  const need = sig !== __admCustFilterSelectorsSig || !document.getElementById('execFil0');
  if (need) {
    admRebuildCustomerFilterSelectors();
    admAfterFilterSelectorsRebuild();
  }
}

function admAfterDashboardFiltersSaved() {
  __admCustFilterSelectorsSig = '';
  __admExecFilterSig = '';
  execEnsureFilterSelectorsMounted();
  execEnsureCustomersMatchFilterConfig();
  try {
    loadExecutiveEditorForm();
  } catch (_) {}
  try {
    loadCxDriversEditorForm();
  } catch (_) {}
  try {
    loadDashboardFiltersEditor();
  } catch (_) {}
  notifyCustomerDashboardOverrides('filter-bar-config-updated');
}

const EXEC_DB_SAMPLE_TOTAL = 300;
const EXEC_DB_BR_LIST = ["Riyadh", "Jeddah", "Dammam"];
const EXEC_DB_CUSTOMERS = [];

function execRegenerateCustomersFromFilterConfig() {
  EXEC_DB_CUSTOMERS.length = 0;
  const cfg = admGetFilterBarConfig();
  function optVals(ix) {
    const o = (cfg.filters[ix] && cfg.filters[ix].options) || [];
    const out = o.map((x) => String(x.value).trim()).filter(Boolean);
    return out.length ? out : ['—'];
  }
  function pick(arr, seed) {
    if (!arr.length) return '';
    const u = (typeof seed === 'number' ? seed >>> 0 : 1) >>> 0;
    return arr[(u * 7919 + 104729 + (seed || 1) * 993) % arr.length];
  }
  let branchChoicesFinal = optVals(0).filter((b) => EXEC_DB_DATA[b]);
  if (!branchChoicesFinal.length) branchChoicesFinal = EXEC_DB_BR_LIST.slice();
  const branchPool = [];
  for (let zi = 0; zi < branchChoicesFinal.length; zi++) {
    const b = branchChoicesFinal[zi];
    const nEach = EXEC_DB_SAMPLE_TOTAL / branchChoicesFinal.length;
    for (let z = 0; z < nEach; z++) branchPool.push(b);
  }
  while (branchPool.length < EXEC_DB_SAMPLE_TOTAL)
    branchPool.push(branchChoicesFinal[branchPool.length % branchChoicesFinal.length]);
  for (let k = branchPool.length - 1; k > 0; k--) {
    const jj = ((k * 7919 + 104729 + k * k * 993) >>> 0) % (k + 1);
    const t = branchPool[k];
    branchPool[k] = branchPool[jj];
    branchPool[jj] = t;
  }
  for (let i = 1; i <= EXEC_DB_SAMPLE_TOTAL; i++) {
    const seed = i * 31 + ((i ^ 997) >>> 0);
    let branch = branchPool[i - 1];
    let gender = pick(optVals(1), seed ^ 3);
    if (!gender || gender === '—') gender = (i * 7) % 10 < 6 ? 'Male' : 'Female';
    let service = pick(optVals(2), seed ^ 7);
    if (!service || service === '—') service = (i * 11) % 5 < 3 ? 'Mechanical' : 'Bodyshop';
    let frequency = pick(optVals(3), seed ^ 13);
    if (!frequency || frequency === '—')
      frequency = (i * 13) % 10 < 3 ? '1 Visit' : (i * 13) % 10 < 8 ? '2–3 Visits' : '4+ Visits';
    let age = pick(optVals(4), seed ^ 21);
    if (!age || age === '—') {
      let ageBand = (i * 17) % 12;
      age = ageBand < 2 ? '<25' : ageBand < 6 ? '25–34' : ageBand < 10 ? '35–44' : '45+';
    }
    let ex1 = pick(optVals(5), seed ^ 103);
    let ex2 = pick(optVals(6), seed ^ 107);
    let ex3 = pick(optVals(7), seed ^ 109);
    if (branch === 'Riyadh' && i % 4 === 0) service = 'Bodyshop';
    if (branch === 'Dammam' && i % 5 === 0) frequency = '4+ Visits';
    let q = branch === 'Riyadh' ? 3.7 : branch === 'Jeddah' ? 3.3 : 3.1;
    let c = branch === 'Jeddah' ? 2.8 : 3.2;
    let p = branch === 'Dammam' ? 2.5 : 2.9;
    let s = 1.2 + (i % 4) * 0.15;
    if (frequency === '4+ Visits') q += 0.25;
    if (age === '<25') p -= 0.25;
    if (gender === 'Female') c -= 0.1;
    const sat = Math.max(1, Math.min(5, q * 0.38 + c * 0.27 + p * 0.22 + s * 0.05 + 1.0));
    const risk = sat < 3 ? 'High' : sat < 3.6 ? 'Medium' : 'Low';
    EXEC_DB_CUSTOMERS.push([
      'C-' + String(i).padStart(3, '0'),
      branch,
      gender,
      service,
      frequency,
      age,
      +q.toFixed(1),
      +c.toFixed(1),
      +p.toFixed(1),
      +s.toFixed(1),
      +sat.toFixed(1),
      risk,
      ex1 || '—',
      ex2 || '—',
      ex3 || '—'
    ]);
  }
}

function execEnsureCustomersMatchFilterConfig() {
  const sig = admFilterFingerprint();
  if (__admExecFilterSig === sig && EXEC_DB_CUSTOMERS.length) return;
  __admExecFilterSig = sig;
  execRegenerateCustomersFromFilterConfig();
}

execEnsureCustomersMatchFilterConfig();

function execFilteredCustomers(ctx) {
  execEnsureCustomersMatchFilterConfig();
  const c = ctx || getExecutiveFilterContext();
  const cfg = admGetFilterBarConfig();
  const vals = cfg.filters.map((f, ix) => c[f.key]);
  return EXEC_DB_CUSTOMERS.filter((row) => vals.every((v, i) => admFilMatchesRow(row, i, v)));
}

function execDataForContext(ctx) {
  const c = ctx || getExecutiveFilterContext();
  const branch = execBranchForAggregateData(c);
  const d = JSON.parse(JSON.stringify(EXEC_DB_DATA[branch] || EXEC_DB_DATA["All Branches"]));
  if (!admCtxIsAll(c, "gender") && admCtxSel(c, "gender") === "Female") {
    d.top = "Communication";
    d.topAr = "التواصل";
    d.drivers = [
      { name: "Communication", nameAr: "التواصل", avg: 2.9, impact: 0.25, decision: "Invest", decisionAr: "استثمر", cls: "navy" },
      { name: "Quality", nameAr: "الجودة", avg: 3.4, impact: 0.19, decision: "Optimize", decisionAr: "حسّن", cls: "warning" },
      { name: "Advisor Behavior", nameAr: "سلوك المستشار", avg: 3.5, impact: 0.13, decision: "Selective", decisionAr: "انتقائي", cls: "info" },
      { name: "Price Fairness", nameAr: "عدالة السعر", avg: 2.8, impact: 0.08, decision: "Monitor", decisionAr: "راقب", cls: "" },
      { name: "Speed", nameAr: "السرعة", avg: 1.3, impact: 0.01, decision: "Do not overinvest", decisionAr: "لا تُبالغ في الاستثمار", cls: "danger" },
    ];
    d.invest = ["Female segment: communication is the strongest driver.", "Improve proactive updates and clarity.", "Standardize advisor explanation before and after service."];
    d.investAr = ["شريحة الإناث: التواصل أقوى محرّك للرضا.", "حسّن التحديثات الاستباقية والوضوح.", "وحّد شرح المستشار قبل وبعد الخدمة."];
  }
  if (!admCtxIsAll(c, "gender") && admCtxSel(c, "gender") === "Male" && admCtxIsAll(c, "branch")) {
    d.top = "Quality";
    d.topAr = "الجودة";
    if (d.drivers[0]) d.drivers[0].impact = 0.29;
    if (d.drivers.length > 1) {
      d.drivers[1] = { name: "Price Fairness", nameAr: "عدالة السعر", avg: 3.0, impact: 0.16, decision: "Optimize", decisionAr: "حسّن", cls: "warning" };
    }
  }
  if (!admCtxIsAll(c, "service") && admCtxSel(c, "service") === "Bodyshop") {
    d.score = Math.max(1, d.score - 0.2);
    d.explanatory = Math.max(55, d.explanatory - 3);
    if (d.drivers[0]) d.drivers[0].impact = Math.min(0.38, d.drivers[0].impact + 0.03);
  }
  if (!admCtxIsAll(c, "frequency") && admCtxSel(c, "frequency") === "4+ Visits") {
    d.top = "Quality";
    d.topAr = "الجودة";
    d.drivers.unshift({ name: "Quality", nameAr: "الجودة", avg: 3.8, impact: 0.35, decision: "Invest", decisionAr: "استثمر", cls: "navy" });
    d.drivers = execDedupeDrivers(d.drivers);
    const tail = (d.invest || []).slice(0, 2);
    const tailAr = (d.investAr || d.invest || []).slice(0, 2);
    d.invest = ["High-frequency customers are quality-sensitive; protect retention through first-time-right discipline.", ...tail];
    d.investAr = ["عملاء الزيارات المتكررة أكثر حساسية للجودة؛ حافظ على الاحتفاظ عبر الانضباط في الإصلاح من أول مرة.", ...tailAr];
  }
  if (!admCtxIsAll(c, "frequency") && admCtxSel(c, "frequency") === "1 Visit") {
    d.top = "Communication";
    d.topAr = "التواصل";
    d.drivers.unshift({ name: "Communication", nameAr: "التواصل", avg: 2.9, impact: 0.24, decision: "Invest", decisionAr: "استثمر", cls: "navy" });
    d.drivers = execDedupeDrivers(d.drivers);
  }
  if (!admCtxIsAll(c, "age") && admCtxSel(c, "age") === "<25") {
    d.top = "Price Fairness";
    d.topAr = "عدالة السعر";
    d.drivers.unshift({ name: "Price Fairness", nameAr: "عدالة السعر", avg: 2.6, impact: 0.25, decision: "Invest", decisionAr: "استثمر", cls: "navy" });
    d.drivers = execDedupeDrivers(d.drivers);
    const tail = (d.invest || []).slice(0, 2);
    const tailAr = (d.investAr || d.invest || []).slice(0, 2);
    d.invest = ["Younger customers show stronger price sensitivity; improve estimate transparency and value explanation.", ...tail];
    d.investAr = ["العملاء الأصغر سناً أكثر حساسية للسعر؛ حسّن شفافية التقدير وشرح القيمة.", ...tailAr];
  }
  const fc = execFilteredCustomers(c);
  if (fc.length) {
    d.score = fc.reduce((acc, row) => acc + row[10], 0) / fc.length;
    let adj = 0;
    if (fc.length < 30) adj = 7;
    else if (fc.length < 60) adj = 3;
    d.explanatory = Math.max(52, Math.min(78, Math.round(d.explanatory - adj)));
  }
  d.drivers = (d.drivers || []).slice(0, 5);
  d.risk = "Speed";
  d.riskAr = "السرعة";
  return d;
}

/* Admin branch overrides (editable) */
let branchOverrides = JSON.parse(JSON.stringify(BRANCHES_DATA));

/* Model weight overrides */
let modelOverrides = {};
Object.keys(DRIVERS_DATA).forEach(b => {
  modelOverrides[b] = DRIVERS_DATA[b].map(d => ({...d}));
});

/* State */
let currentAdmin = null;
let pendingDangerAction = null;
let usersData = [];
let branchesData = [];
let auditLog = [];
let sortState = {};
let userPage = 1; const USER_PAGE_SIZE = 10;
let recordPage = 1; const RECORD_PAGE_SIZE = 15;
let auditPage = 1; const AUDIT_PAGE_SIZE = 20;
let editingUserId = null;
let editingBranchId = null;
let contentTabActive = 'questionnaire';
let scheduledExportsList = [];
let reportHistory = [];
let currentLang = 'en';

const I18N = {
  en: {
    panelMeta: {
      executive: { title: 'Executive View', crumb: 'Analytics' },
      'cx-drivers': { title: 'CX Drivers Analysis', crumb: 'Analytics' },
      'units-performance': { title: 'Units Performance', crumb: 'Analytics' },
      demographics: { title: 'Demographics', crumb: 'Analytics' },
      'dashboard-filters': { title: 'Dashboard filters', crumb: 'Analytics' },
      'customer-patterns': { title: 'Customer Patterns', crumb: 'Analytics' },
      questionnaire: { title: 'Questionnaire', crumb: 'Analytics' },
      'pilot-analysis': { title: 'Pilot Analysis', crumb: 'Analytics' },
      'model-quality': { title: 'Model Quality', crumb: 'Analytics' },
      users: { title: 'User Management', crumb: 'Management' },
      branches: { title: 'Branch Management', crumb: 'Management' },
      data: { title: 'Data Management', crumb: 'Management' },
      reports: { title: 'Reports & Export', crumb: 'Output' },
      settings: { title: 'Settings', crumb: 'System' },
      audit: { title: 'Audit Log', crumb: 'System' }
    },
    labels: {
      searchGlobal: 'Search users, data…',
      navExecutive: 'Executive View',
      navCxDrivers: 'CX Drivers Analysis',
      navUnitsPerformance: 'Units Performance',
      navDemographics: 'Demographics',
      navDashboardFilters: 'Dashboard filters',
      navCustomerPatterns: 'Customer Patterns',
      navQuestionnaire: 'Questionnaire',
      navPilotAnalysis: 'Pilot Analysis',
      navModelQuality: 'Model Quality',
      navUsers: 'User Management',
      navBranches: 'Branch Management',
      navData: 'Data Management',
      navReports: 'Reports & Export',
      navSettings: 'Settings',
      navAudit: 'Audit Log',
      logout: 'Logout',
      dashboardHeader: 'Dashboard',
      loginTitle: 'Admin Sign In',
      loginSubtitle: 'Restricted access — authorized administrators only',
      loginBtn: 'Access Admin Panel'
    },
    messages: {
      loginMissing: 'Please enter your email and password.',
      signingIn: 'Signing in…',
      invalidCreds: 'Invalid admin credentials.',
      serverDown: 'Cannot reach server. Use demo credentials: admin@roshd.com / admin123',
      welcome: (name) => \`Welcome, \${name}!\`,
      logoutDone: 'Logged out successfully.',
      notif: '3 new notifications — feature connects to your backend.',
      refreshOverview: 'Overview refreshed.'
    }
  },
  ar: {
    panelMeta: {
      executive: { title: 'المنظر التنفيذي', crumb: 'التحليلات' },
      'cx-drivers': { title: 'تحليل محركات تجربة العملاء', crumb: 'التحليلات' },
      'units-performance': { title: 'أداء الوحدات', crumb: 'التحليلات' },
      demographics: { title: 'التركيبة السكانية', crumb: 'التحليلات' },
      'dashboard-filters': { title: 'مرشّحات اللوحة', crumb: 'التحليلات' },
      'customer-patterns': { title: 'أنماط العملاء', crumb: 'التحليلات' },
      questionnaire: { title: 'الاستبيان', crumb: 'التحليلات' },
      'pilot-analysis': { title: 'تحليل التجربة التجريبية', crumb: 'التحليلات' },
      'model-quality': { title: 'جودة النموذج', crumb: 'التحليلات' },
      users: { title: 'إدارة المستخدمين', crumb: 'الإدارة' },
      branches: { title: 'إدارة الفروع', crumb: 'الإدارة' },
      data: { title: 'إدارة البيانات', crumb: 'الإدارة' },
      reports: { title: 'التقارير والتصدير', crumb: 'المخرجات' },
      settings: { title: 'الإعدادات', crumb: 'النظام' },
      audit: { title: 'سجل التدقيق', crumb: 'النظام' }
    },
    labels: {
      searchGlobal: 'ابحث في المستخدمين والبيانات…',
      navExecutive: 'المنظر التنفيذي',
      navCxDrivers: 'تحليل محركات تجربة العملاء',
      navUnitsPerformance: 'أداء الوحدات',
      navDemographics: 'التركيبة السكانية',
      navDashboardFilters: 'مرشّحات اللوحة',
      navCustomerPatterns: 'أنماط العملاء',
      navQuestionnaire: 'الاستبيان',
      navPilotAnalysis: 'تحليل التجربة التجريبية',
      navModelQuality: 'جودة النموذج',
      navUsers: 'إدارة المستخدمين',
      navBranches: 'إدارة الفروع',
      navData: 'إدارة البيانات',
      navReports: 'التقارير والتصدير',
      navSettings: 'الإعدادات',
      navAudit: 'سجل التدقيق',
      logout: 'تسجيل الخروج',
      dashboardHeader: 'لوحة التحكم',
      loginTitle: 'تسجيل دخول المشرف',
      loginSubtitle: 'وصول مقيّد — للمشرفين المصرّح لهم فقط',
      loginBtn: 'الدخول إلى لوحة المشرف'
    },
    messages: {
      loginMissing: 'يرجى إدخال البريد الإلكتروني وكلمة المرور.',
      signingIn: 'جارٍ تسجيل الدخول…',
      invalidCreds: 'بيانات دخول المشرف غير صحيحة.',
      serverDown: 'تعذر الوصول إلى الخادم. استخدم بيانات العرض: admin@roshd.com / admin123',
      welcome: (name) => \`مرحبًا، \${name}!\`,
      logoutDone: 'تم تسجيل الخروج بنجاح.',
      notif: 'لديك 3 إشعارات جديدة — هذه الميزة تتصل بالخادم.',
      refreshOverview: 'تم تحديث النظرة العامة.'
    }
  }
};

function tx(path) {
  const parts = path.split('.');
  let value = I18N[currentLang];
  for (const part of parts) value = value?.[part];
  return value ?? path;
}

const TERM_MAP = {
  branch: { Riyadh:'الرياض', Jeddah:'جدة', Dammam:'الدمام', 'All Branches':'كل الفروع' },
  role: { admin:'مشرف', analyst:'محلل', customer:'عميل' },
  status: { active:'نشط', suspended:'موقوف', pending:'قيد الانتظار', archived:'مؤرشف', pilot:'تجريبي', Ready:'جاهز' },
  risk: { High:'مرتفع', Medium:'متوسط', Low:'منخفض' },
  action: { CREATE:'إنشاء', UPDATE:'تحديث', DELETE:'حذف', LOGIN:'دخول', EXPORT:'تصدير', UPLOAD:'رفع', OVERRIDE:'تعديل' },
  gender: { Male:'ذكر', Female:'أنثى' },
  service: { Mechanical:'ميكانيكا', Bodyshop:'هيكل' },
  freq: { '1 Visit':'زيارة واحدة', '2–3 Visits':'2–3 زيارات', '4+ Visits':'4+ زيارات' },
  decision: { Invest:'استثمر', Optimize:'حسّن', Selective:'انتقائي', Monitor:'راقب', Maintain:'حافظ', 'Do not overinvest':'لا تبالغ في الاستثمار' }
};

function tr(type, value) {
  if (currentLang !== 'ar') return value;
  return TERM_MAP[type]?.[value] || value;
}

function toArabicUiText(input) {
  if (!input) return input;
  let out = String(input);

  if (STATIC_AR_MAP[out.trim()]) {
    return out.replace(out.trim(), STATIC_AR_MAP[out.trim()]);
  }

  const tokenMap = {
    'Admin': 'مشرف',
    'Auth': 'المصادقة',
    'User': 'مستخدم',
    'Users': 'المستخدمون',
    'Branch': 'فرع',
    'Branches': 'الفروع',
    'Quality': 'الجودة',
    'Communication': 'التواصل',
    'Price Fairness': 'عدالة السعر',
    'Advisor Behavior': 'سلوك المستشار',
    'Speed': 'السرعة',
    'Dashboard': 'لوحة التحكم',
    'System': 'النظام',
    'Settings': 'الإعدادات',
    'Report': 'تقرير',
    'Reports': 'التقارير',
    'Export': 'تصدير',
    'Data': 'البيانات',
    'Model': 'النموذج',
    'Weights': 'الأوزان',
    'Active': 'نشط',
    'Inactive': 'غير نشط',
    'Pending': 'قيد الانتظار',
    'Suspended': 'موقوف',
    'Archived': 'مؤرشف',
    'Pilot': 'تجريبي',
    'Manager': 'المدير',
    'Super Admin': 'المشرف العام',
    'Login': 'دخول',
    'Create': 'إنشاء',
    'Update': 'تحديث',
    'Delete': 'حذف',
    'Upload': 'رفع',
    'Override': 'تعديل',
    'Dataset': 'مجموعة البيانات',
    'Template': 'قالب',
    'Role': 'الدور',
    'Status': 'الحالة',
    'Actions': 'إجراءات',
    'Email': 'البريد الإلكتروني',
    'Password': 'كلمة المرور',
    'Search': 'بحث',
    'Refresh': 'تحديث',
    'Download': 'تنزيل',
    'Save': 'حفظ',
    'Cancel': 'إلغاء',
    'Close': 'إغلاق',
    'All': 'الكل',
    'Overview': 'نظرة عامة',
    'Analytics': 'التحليلات',
    'English': 'الإنجليزية',
    'Arabic': 'العربية',
    'Riyadh': 'الرياض',
    'Jeddah': 'جدة',
    'Dammam': 'الدمام'
  };

  Object.entries(tokenMap).forEach(([en, ar]) => {
    const re = new RegExp(\`\\\\b\${en.replace(/[.*+?^\${}()|[\\\\]\\\\\\\\]/g, '\\\\\\\\$&')}\\\\b\`, 'g');
    out = out.replace(re, ar);
  });

  out = out.replace(/\\s{2,}/g, ' ').trim();
  return out || input;
}

function trDriverName(name) {
  if (currentLang !== 'ar') return name;
  return {
    'Quality': 'الجودة',
    'Communication': 'التواصل',
    'Price Fairness': 'عدالة السعر',
    'Advisor Behavior': 'سلوك المستشار',
    'Speed': 'السرعة'
  }[name] || name;
}

function trAdminName(name) {
  if (currentLang !== 'ar') return name;
  return { 'Super Admin': 'المشرف العام', 'Manager': 'المدير' }[name] || name;
}

function trAuditResource(resource) {
  if (currentLang !== 'ar') return resource;
  let r = resource || '';
  r = r.replace(/^Admin Auth$/,'مصادقة المشرف');
  r = r.replace(/^User\\s+/,'المستخدم ');
  r = r.replace(/^Branch\\s+/,'الفرع ');
  r = r.replace(/^Dataset\\s+/,'مجموعة البيانات ');
  r = r.replace(/^Report Executive$/,'التقرير التنفيذي');
  r = r.replace(/^Report\\s+/,'تقرير ');
  r = r.replace(/^Model Weights$/,'أوزان النموذج');
  r = r.replace(/^Questionnaire\\s+/,'الاستبيان ');
  r = r.replace(/^Settings$/,'الإعدادات');
  r = r.replace(/^Schedule Weekly$/,'جدولة أسبوعية');
  r = r.replace(/^Audit Log$/,'سجل التدقيق');
  r = r.replace(/^Bulk Users$/,'المستخدمون المحددون');
  r = r.replace(/^Template$/,'القالب');
  r = r.replace(/^Response Records$/,'سجلات الاستجابات');
  r = r.replace(/^Analytics Report$/,'تقرير التحليلات');
  r = r.replace(/^System$/,'النظام');
  r = r.replace(/^Record$/,'سجل');
  r = r.replace('Riyadh', tr('branch', 'Riyadh')).replace('Jeddah', tr('branch', 'Jeddah')).replace('Dammam', tr('branch', 'Dammam'));
  return r;
}

function trAuditDetail(detail) {
  if (currentLang !== 'ar') return detail;
  let d = detail || '';
  const swaps = [
    ['Successful admin login','تم تسجيل دخول المشرف بنجاح'],
    ['Session restored from token','تمت استعادة الجلسة من الرمز'],
    ['New customer account created','تم إنشاء حساب عميل جديد'],
    ['CX score updated to 3.7','تم تحديث درجة CX إلى 3.7'],
    ['Account permanently deleted','تم حذف الحساب نهائيًا'],
    ['records uploaded and validated','سجل تم رفعه والتحقق منه'],
    ['Executive PDF generated','تم إنشاء ملف PDF التنفيذي'],
    ['weight set to','تم ضبط الوزن إلى'],
    ['Item status changed to removed','تم تغيير حالة العنصر إلى محذوف'],
    ['New branch added','تمت إضافة فرع جديد'],
    ['Registration toggle enabled','تم تفعيل خيار التسجيل'],
    ['Archived dataset removed','تم حذف مجموعة البيانات المؤرشفة'],
    ['Log exported as CSV','تم تصدير السجل بصيغة CSV'],
    ['Role changed from customer to analyst','تم تغيير الدور من عميل إلى محلل']
  ];
  swaps.forEach(([en, ar]) => { d = d.replace(en, ar); });
  return d;
}

const STATIC_AR_MAP = {
  'System Live': 'النظام يعمل',
  'Refresh': 'تحديث',
  'Upload Data': 'رفع البيانات',
  'CX Score by Branch': 'درجة CX حسب الفرع',
  'Live satisfaction scores (avg /5 · with % of scale)': 'درجات الرضا المباشرة (متوسط /5 مع النسبة المئوية)',
  'Manage Branches': 'إدارة الفروع',
  'Recent Activity': 'النشاط الأخير',
  'Latest admin and system actions': 'آخر إجراءات المشرف والنظام',
  'View All': 'عرض الكل',
  'Driver Impact Summary': 'ملخص تأثير العوامل',
  'Effect sizes across all branches': 'أحجام التأثير عبر جميع الفروع',
  'User Segments': 'شرائح المستخدمين',
  'Sample distribution breakdown': 'تفصيل توزيع العينة',
  'System Health': 'صحة النظام',
  'Platform and model status': 'حالة المنصة والنموذج',
  'Intelligence Engine': 'محرك الذكاء',
  'Live Analytics Control': 'التحكم في التحليلات المباشرة',
  'Read-only real-time view of customer dashboard data across all branches': 'عرض مباشر للقراءة فقط لبيانات لوحة العملاء عبر جميع الفروع',
  'Export Report': 'تصدير التقرير',
  'Driver Ranking': 'ترتيب العوامل',
  'Impact effect sizes — current branch filter': 'أحجام التأثير حسب فلتر الفرع الحالي',
  'Branch Performance Comparison': 'مقارنة أداء الفروع',
  'Average CX Score — all branches': 'متوسط درجة CX لجميع الفروع',
  'Sample Breakdown': 'تفصيل العينة',
  '300-respondent distribution across demographics': 'توزيع 300 مشارك حسب الخصائص السكانية',
  'Import CSV': 'استيراد CSV',
  'Add User': 'إضافة مستخدم',
  'Search by name or email…': 'ابحث بالاسم أو البريد الإلكتروني…',
  'All Roles': 'كل الأدوار',
  'All Statuses': 'كل الحالات',
  'Suspend Selected': 'إيقاف المحدد',
  'Delete Selected': 'حذف المحدد',
  'User': 'المستخدم',
  'Branch': 'الفرع',
  'Role': 'الدور',
  'Status': 'الحالة',
  'Logins': 'عمليات الدخول',
  'Last Login': 'آخر دخول',
  'Actions': 'إجراءات',
  'Branch Control': 'التحكم في الفروع',
  'Data Control': 'التحكم في البيانات',
  'Download Template': 'تنزيل القالب',
  'Upload New Dataset': 'رفع مجموعة بيانات جديدة',
  'Drop your dataset file here': 'أسقط ملف البيانات هنا',
  'Supports CSV, XLSX, XLS — or click to browse': 'يدعم CSV وXLSX وXLS — أو انقر للتصفح',
  'Uploaded Datasets': 'مجموعات البيانات المرفوعة',
  'Manage, validate, and activate survey datasets': 'إدارة مجموعات الاستبيان والتحقق منها وتفعيلها',
  'Dataset Name': 'اسم مجموعة البيانات',
  'Period': 'الفترة',
  'Rows': 'الصفوف',
  'Uploaded By': 'تم الرفع بواسطة',
  'Upload Date': 'تاريخ الرفع',
  'Sample Records — Editable': 'سجلات العينة — قابلة للتعديل',
  'Inline edit individual response records': 'تعديل سجلات الاستجابات الفردية مباشرة',
  'Save Edits': 'حفظ التعديلات',
  'Search records…': 'ابحث في السجلات…',
  'Gender': 'الجنس',
  'Service': 'الخدمة',
  'Frequency': 'التكرار',
  'Age': 'العمر',
  'Risk': 'المخاطر',
  'Content Control': 'التحكم في المحتوى',
  'Content & Questionnaire Editor': 'محرر المحتوى والاستبيان',
  'Edit questionnaire items, platform content, and service descriptions': 'تعديل عناصر الاستبيان ومحتوى المنصة ووصف الخدمات',
  'Reset to Default': 'إعادة للوضع الافتراضي',
  'Save All Changes': 'حفظ جميع التغييرات',
  'Questionnaire Items': 'عناصر الاستبيان',
  'Platform Text': 'نصوص المنصة',
  'Services': 'الخدمات',
  'Governance:': 'الحوكمة:',
  'Add New Item': 'إضافة عنصر جديد',
  'Add Service': 'إضافة خدمة',
  'Intelligence Control': 'التحكم في الذكاء',
  'Model & Weights Control': 'التحكم في النموذج والأوزان',
  'Reset to Calculated': 'إعادة للقيم المحسوبة',
  'Apply Changes': 'تطبيق التغييرات',
  'Output Center': 'مركز المخرجات',
  'Generate Report': 'إنشاء تقرير',
  'Scheduled Exports': 'التصدير المجدول',
  'New Schedule': 'جدولة جديدة',
  'Export History': 'سجل التصدير',
  'Configuration': 'الإعدادات',
  'System Settings': 'إعدادات النظام',
  'Save Settings': 'حفظ الإعدادات',
  'Platform Configuration': 'إعدادات المنصة',
  'Security & Access': 'الأمن والوصول',
  'Email Notifications': 'إشعارات البريد',
  'Danger Zone': 'منطقة الخطر',
  'Clear Cache': 'مسح التخزين المؤقت',
  'Flush Sessions': 'إنهاء الجلسات',
  'Security & Compliance': 'الأمن والامتثال',
  'Search actions, users…': 'ابحث في الإجراءات والمستخدمين…',
  'All Actions': 'كل الإجراءات',
  'All Admins': 'كل المشرفين',
  'Clear Log': 'مسح السجل',
  'Timestamp': 'الوقت',
  'Admin': 'المشرف',
  'Resource': 'المورد',
  'Details': 'التفاصيل',
  'IP Address': 'عنوان IP',
  'Add New User': 'إضافة مستخدم جديد',
  'Cancel': 'إلغاء',
  'Create User': 'إنشاء مستخدم',
  'Save Branch': 'حفظ الفرع',
  'Close': 'إغلاق',
  'Edit User': 'تعديل المستخدم',
  'Confirm': 'تأكيد',
  'Schedule Export': 'جدولة التصدير',
  'Create Schedule': 'إنشاء الجدولة',
  'English': 'الإنجليزية',
  'Arabic': 'العربية'
};

const __nodeSourceText = new WeakMap();
const __attrSourceText = new WeakMap();

function localizeStaticContent() {
  const roots = [document.getElementById('adminApp')].filter(Boolean);
  roots.forEach((root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parentTag = node.parentElement?.tagName;
        if (!parentTag || ['SCRIPT', 'STYLE'].includes(parentTag)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => {
      const raw = node.textContent;
      if (!raw || !raw.trim()) return;
      if (!__nodeSourceText.has(node)) __nodeSourceText.set(node, raw);
      const source = __nodeSourceText.get(node);
      const key = source.trim();
      if (currentLang === 'ar') {
        node.textContent = toArabicUiText(source);
      } else if (currentLang === 'en') {
        node.textContent = source;
      }
    });

    root.querySelectorAll('[placeholder],[title]').forEach((el) => {
      if (!__attrSourceText.has(el)) {
        __attrSourceText.set(el, {
          placeholder: el.getAttribute('placeholder'),
          title: el.getAttribute('title')
        });
      }
      const src = __attrSourceText.get(el);
      ['placeholder', 'title'].forEach((attr) => {
        const val = src[attr];
        if (!val) return;
        const trVal = currentLang === 'ar' ? toArabicUiText(val) : val;
        el.setAttribute(attr, trVal);
      });
    });

  });
}

function applyAdminLanguage() {
  const root = document.documentElement;
  const isAr = currentLang === 'ar';
  root.setAttribute('data-lang', currentLang);
  root.setAttribute('lang', currentLang);
  root.setAttribute('dir', isAr ? 'rtl' : 'ltr');

  const btnEn = document.getElementById('admin-lang-en');
  const btnAr = document.getElementById('admin-lang-ar');
  if (btnEn && btnAr) {
    btnEn.classList.toggle('active', !isAr);
    btnAr.classList.toggle('active', isAr);
  }

  const search = document.getElementById('globalSearch');
  if (search) search.placeholder = tx('labels.searchGlobal');

  const navTextByPanel = {
    executive: tx('labels.navExecutive'),
    'cx-drivers': tx('labels.navCxDrivers'),
    'units-performance': tx('labels.navUnitsPerformance'),
    demographics: tx('labels.navDemographics'),
    'dashboard-filters': tx('labels.navDashboardFilters'),
    'customer-patterns': tx('labels.navCustomerPatterns'),
    questionnaire: tx('labels.navQuestionnaire'),
    'pilot-analysis': tx('labels.navPilotAnalysis'),
    'model-quality': tx('labels.navModelQuality')
  };

  document.querySelectorAll('.nav-item[data-panel]').forEach((el) => {
    const panel = el.getAttribute('data-panel');
    const firstTextNode = [...el.childNodes].find((n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
    if (firstTextNode && navTextByPanel[panel]) firstTextNode.textContent = \` \${navTextByPanel[panel]} \`;
  });

  const logout = document.querySelector('.logout-btn');
  if (logout) {
    const txt = [...logout.childNodes].find((n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
    if (txt) txt.textContent = \` \${tx('labels.logout')} \`;
  }

  const activeNav = document.querySelector('.nav-item.active');
  const activePanel = activeNav?.getAttribute('data-panel') || 'executive';
  const meta = I18N[currentLang].panelMeta[activePanel] || { title: activePanel, crumb: activePanel };
  const topTitle = document.getElementById('topbarTitle');
  const topCrumb = document.getElementById('topbarCrumb');
  if (topTitle) topTitle.textContent = meta.title;
  if (topCrumb) topCrumb.textContent = meta.crumb;

  const breadcrumb = document.querySelector('.topbar-breadcrumb');
  if (breadcrumb) {
    const firstText = [...breadcrumb.childNodes].find((n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
    if (firstText) firstText.textContent = currentLang === 'ar' ? ' لوحة المشرف ' : ' ROSHD Admin ';
  }

  const sections = document.querySelectorAll('.nav-section');
  const navSections = currentLang === 'ar' ? ['التحليلات'] : ['Analytics'];
  sections.forEach((sec, i) => { if (navSections[i]) sec.textContent = navSections[i]; });

  const executivePanel = document.getElementById('panel-executive');
  if (executivePanel) {
    const eyebrow = executivePanel.querySelector('.page-eyebrow');
    const title = executivePanel.querySelector('.page-title');
    const subtitle = executivePanel.querySelector('.page-subtitle');
    if (eyebrow) eyebrow.textContent = currentLang === 'ar' ? 'نظرة عامة على النظام' : 'System Overview';
    if (title) title.textContent = currentLang === 'ar' ? 'لوحة المشرف' : 'Admin Dashboard';
    if (subtitle) subtitle.textContent = currentLang === 'ar'
      ? 'صحة المنصة لحظيًا، وإحصاءات المستخدمين، ومؤشرات النظام — الربع الثاني 2026'
      : 'Real-time platform health, user stats, and system KPIs — Q2 2026';
  }

  localizeStaticContent();
  admSyncDashFilterSelectOptions();
}

function setAdminLanguage(lang) {
  currentLang = lang === 'ar' ? 'ar' : 'en';
  if (document.getElementById('overviewStats')) renderOverview();
  if (document.getElementById('analyticsKpis')) renderAnalytics();
  renderUsersTable();
  renderBranchPanel();
  renderDataPanel();
  if (document.getElementById('questionnaireEditor')) renderContentPanel();
  if (document.getElementById('modelWeightsEditor')) renderModelWeights();
  renderReports();
  renderAuditLog();
  applyAdminLanguage();
  reloadActiveCustomerMirrorIframe();
}

/* ═══════════════════════════════════════════
   QUESTIONNAIRE DATA (from customer side)
═══════════════════════════════════════════ */
let questionnaireItems = [
  {code:'Q1', construct:'Quality',       status:'retained', en:'The repair/service was completed correctly the first time.',             ar:'تم إكمال الإصلاح من أول مرة بشكل صحيح.'},
  {code:'Q2', construct:'Quality',       status:'retained', en:'The delivered work met my expectations.',                                ar:'العمل المُسلَّم كان بمستوى توقّعاتي.'},
  {code:'Q3', construct:'Quality',       status:'retained', en:'The vehicle was returned in good condition.',                            ar:'عُادت المركبة بحالة جيدة.'},
  {code:'Q4', construct:'Quality',       status:'removed',  en:'The quality of work increased my confidence in the service center.',    ar:'الجودة زادت ثقتي بالمركز.'},
  {code:'C1', construct:'Communication', status:'retained', en:'I received clear updates during the service process.',                   ar:'تلقيت تحديثات واضحة أثناء الخدمة.'},
  {code:'C2', construct:'Communication', status:'retained', en:'The advisor explained the required work clearly.',                       ar:'أوضح المستشار العمل المطلوب بوضوح.'},
  {code:'C3', construct:'Communication', status:'retained', en:'I was informed before any major change or delay.',                       ar:'أُبلِغت قبل أي تغيير كبير أو تأخير.'},
  {code:'C4', construct:'Communication', status:'removed',  en:'Communication was easy to understand.',                                  ar:'التواصل كان سهل الفهم.'},
  {code:'P1', construct:'Price',         status:'retained', en:'The price was fair compared with the service.',                          ar:'السعر كان عادلًا مقارنة بالخدمة.'},
  {code:'P2', construct:'Price',         status:'retained', en:'The estimate was clear before approval.',                                ar:'التقدير كان واضحًا قبل الموافقة.'},
  {code:'P3', construct:'Price',         status:'retained', en:'The final invoice matched what was explained.',                          ar:'الفاتورة النهائية طابقت الشرح.'},
  {code:'P4', construct:'Price',         status:'removed',  en:'The value justified the amount paid.',                                   ar:'القيمة برّرت المبلغ المدفوع.'},
  {code:'S1', construct:'Speed',         status:'retained', en:'The service was completed within a reasonable time.',                    ar:'أُنجزت الخدمة في وقت معقول.'},
  {code:'S2', construct:'Speed',         status:'retained', en:'Waiting time was acceptable.',                                           ar:'وقت الانتظار مقبول.'},
  {code:'S3', construct:'Speed',         status:'retained', en:'Delivery matched the promised timing.',                                  ar:'التسليم طابق الموعد المُعلَن.'},
  {code:'S4', construct:'Speed',         status:'removed',  en:'Total process time was convenient.',                                     ar:'وقت العملية كان مناسبًا.'},
  {code:'OS1',construct:'CX Score',      status:'retained', en:'Overall I am satisfied with the service experience.',                   ar:'بشكل عام راضٍ عن تجربة الخدمة.'},
  {code:'OS2',construct:'CX Score',      status:'retained', en:'The experience met my expectations.',                                   ar:'التجربة نالت توقّعاتي.'},
  {code:'OS3',construct:'CX Score',      status:'retained', en:'I would consider returning.',                                            ar:'قد أعود لنفس المركز.'},
];

/* Services data */
let servicesData = [
  {id:1, num:'01', nameEn:'Training & Capability Building', nameAr:'التدريب وبناء القدرات', descEn:'Practical, role-based training linked directly to real outcomes.', descAr:'تدريب عملي مرتبط مباشرة بنتائج واقعية.'},
  {id:2, num:'02', nameEn:'Consulting & Implementation',    nameAr:'الاستشارات والتنفيذ',   descEn:"We don't advise—we design and implement working systems.",        descAr:'لا نقدم توصيات فقط، بل نصمم ونطبق أنظمة عمل فعلية.'},
  {id:3, num:'03', nameEn:'Performance & Data Intelligence', nameAr:'تحليل الأداء والبيانات', descEn:'Turning data into clear, measurable decisions.',              descAr:'تحويل البيانات إلى قرارات واضحة وقابلة للقياس.'},
  {id:4, num:'04', nameEn:'System Enablement',              nameAr:'تمكين الأنظمة',          descEn:'Ensuring business systems are actually used—not just installed.', descAr:'ضمان استخدام الأنظمة فعلياً داخل التشغيل.'},
  {id:5, num:'05', nameEn:'Research & Knowledge Solutions', nameAr:'حلول البحث والمعرفة',   descEn:'From academic frameworks to real-world application.',           descAr:'ربط المنهج العلمي بالتطبيق العملي.'},
];

/* Datasets */
let datasets = [
  {id:1, name:'Q2_2026_Full_Survey.csv',   period:'Q2 2026', rows:412, status:'active',   uploader:'Super Admin', date:'2026-04-01'},
  {id:2, name:'Q1_2026_Survey_Riyadh.csv', period:'Q1 2026', rows:118, status:'archived', uploader:'Super Admin', date:'2026-01-15'},
  {id:3, name:'Pilot_Test_2026.csv',       period:'Pilot',   rows:30,  status:'pilot',    uploader:'Analyst',     date:'2025-12-10'},
];

/* Model quality metrics (editable) */
let modelMetrics = { r2:'72%', alpha:'0.88', cr:'0.91', ave:'0.64', htmt:'0.78' };

/* ═══════════════════════════════════════════
   GENERATE MOCK USERS
═══════════════════════════════════════════ */
(function generateUsers() {
  const firstNames = ['Ahmed','Mohammed','Abdullah','Khalid','Omar','Saad','Fahad','Turki','Nora','Fatima','Reem','Sara','Maha','Hana','Lina','Yasmine','Hassan','Ibrahim','Yusuf','Tariq'];
  const lastNames  = ['Al-Rashidi','Al-Zahrani','Al-Otaibi','Al-Harbi','Al-Qahtani','Al-Shehri','Al-Ghamdi','Al-Dosari','Al-Mutairi','Al-Harthi'];
  const branches   = ['Riyadh','Jeddah','Dammam'];
  const roles      = ['customer','customer','customer','customer','analyst','admin'];
  const statuses   = ['active','active','active','active','active','suspended','pending'];
  const orgs       = ['ARAMCO','SABIC','STC','Almarai','NCB','Riyad Bank','Dar Al Arkan','Mobily','ACWA Power','Saudi Electricity'];
  for (let i = 1; i <= 50; i++) {
    const fn   = firstNames[(i*7)%firstNames.length];
    const ln   = lastNames[(i*3)%lastNames.length];
    const br   = branches[(i*11)%branches.length];
    const role = roles[(i*5)%roles.length];
    const stat = statuses[(i*13)%statuses.length];
    const org  = orgs[(i*9)%orgs.length];
    const d    = new Date(2026,3,1);
    d.setDate(d.getDate() - (i*7)%90);
    const loginD = new Date(2026,4,1);
    loginD.setDate(loginD.getDate() - (i*3)%30);
    usersData.push({
      id: \`USR-\${String(i).padStart(3,'0')}\`,
      firstName: fn, lastName: ln,
      email: \`\${fn.toLowerCase()}.\${ln.toLowerCase().replace('al-','')}@\${org.toLowerCase().replace(/ /g,'')}.com\`,
      role, branch: br, status: stat,
      org, loginCount: (i*17)%120 + 1,
      createdAt: d.toISOString().slice(0,10),
      lastLogin: loginD.toISOString().slice(0,10),
      notes: ''
    });
  }
})();

/* ═══════════════════════════════════════════
   GENERATE AUDIT LOG
═══════════════════════════════════════════ */
(function generateAudit() {
  const actions = [
    {action:'LOGIN',   resource:'Admin Auth',        detail:'Successful admin login',           ip:'192.168.1.10'},
    {action:'CREATE',  resource:'User USR-001',       detail:'New customer account created',     ip:'192.168.1.10'},
    {action:'UPDATE',  resource:'Branch Riyadh',      detail:'CX score updated to 3.7',          ip:'192.168.1.10'},
    {action:'DELETE',  resource:'User USR-048',       detail:'Account permanently deleted',      ip:'192.168.1.12'},
    {action:'UPLOAD',  resource:'Dataset Q2_2026',    detail:'412 records uploaded and validated',ip:'192.168.1.10'},
    {action:'EXPORT',  resource:'Report Executive',   detail:'Executive PDF generated',          ip:'192.168.1.10'},
    {action:'OVERRIDE',resource:'Model Weights',      detail:'Quality weight set to 0.38',       ip:'192.168.1.10'},
    {action:'UPDATE',  resource:'Questionnaire C4',   detail:'Item status changed to removed',   ip:'192.168.1.14'},
    {action:'CREATE',  resource:'Branch Dammam North',detail:'New branch added',                 ip:'192.168.1.10'},
    {action:'UPDATE',  resource:'Settings',           detail:'Registration toggle enabled',      ip:'192.168.1.10'},
    {action:'DELETE',  resource:'Dataset Q3_2025',    detail:'Archived dataset removed',         ip:'192.168.1.10'},
    {action:'LOGIN',   resource:'Admin Auth',         detail:'Session restored from token',      ip:'192.168.1.11'},
    {action:'EXPORT',  resource:'Audit Log',          detail:'Log exported as CSV',              ip:'192.168.1.10'},
    {action:'UPDATE',  resource:'User USR-015',       detail:'Role changed from customer to analyst', ip:'192.168.1.10'},
    {action:'CREATE',  resource:'Schedule Weekly',    detail:'Weekly report schedule created',   ip:'192.168.1.10'},
  ];
  const now = new Date(2026,4,5,14,22,0);
  actions.forEach((a,i) => {
    const ts = new Date(now - i * 3600000 * 1.3);
    auditLog.push({
      id: \`AL-\${String(i+1).padStart(3,'0')}\`,
      timestamp: ts.toISOString().replace('T',' ').slice(0,19),
      admin: i % 4 === 3 ? 'Manager' : 'Super Admin',
      action: a.action, resource: a.resource,
      detail: a.detail, ip: a.ip, status: 'SUCCESS'
    });
  });
})();

/* Generate branch admin cards data */
(function generateBranches() {
  ['Riyadh','Jeddah','Dammam'].forEach((name,i) => {
    branchesData.push({
      id: \`BR-\${String(i+1).padStart(2,'0')}\`,
      nameEn: name,
      nameAr: ['الرياض','جدة','الدمام'][i],
      region: name,
      manager: ['Khalid Al-Otaibi','Mohammed Al-Zahrani','Abdullah Al-Harbi'][i],
      address: [\`King Fahd Rd, \${name}\`],
      cxScore: [3.7,3.4,3.2][i],
      sampleN: 100,
      status: 'active'
    });
  });
})();

/* Report history */
(function generateReportHistory() {
  const types  = ['Executive Summary','CX Drivers','Branch Comparison','Demographics','Full Export'];
  const fmts   = ['PDF','Excel','CSV','HTML'];
  const brs    = ['All Branches','Riyadh','Jeddah','Dammam'];
  for (let i = 1; i <= 8; i++) {
    const d = new Date(2026,4,5); d.setDate(d.getDate() - i*3);
    reportHistory.push({
      id:\`RPT-\${String(i).padStart(3,'0')}\`,
      name:\`\${types[(i-1)%types.length]} — \${brs[(i-1)%brs.length]}\`,
      type: types[(i-1)%types.length],
      branch: brs[(i-1)%brs.length],
      format: fmts[(i-1)%fmts.length],
      by:'Super Admin',
      date: d.toISOString().slice(0,10),
      status: i<3?'Ready':'Archived'
    });
  }
})();

/* Scheduled exports */
scheduledExportsList = [
  {id:'SCH-001',name:'Weekly CX Summary',freq:'Weekly',format:'PDF',branch:'All Branches',email:'admin@roshd.com',active:true},
  {id:'SCH-002',name:'Monthly Branch Comparison',freq:'Monthly',format:'Excel',branch:'Riyadh',email:'manager@roshd.com',active:false},
];

/* ═══════════════════════════════════════════
   UTILITY FUNCTIONS
═══════════════════════════════════════════ */
function toast(msg, type='success', icon='✓') {
  const container = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = \`toast \${type}\`;
  const icons = {success:'✓', error:'✕', warning:'⚠', info:'ℹ'};
  el.innerHTML = \`<span style="font-size:16px">\${icons[type]||icon}</span>\${msg}\`;
  container.appendChild(el);
  setTimeout(() => { el.style.opacity='0'; el.style.transform='translateX(100%)'; el.style.transition='all 0.3s ease'; setTimeout(()=>el.remove(),300); }, 3500);
}

function addAuditEntry(action, resource, detail) {
  const now = new Date(2026,4,5);
  auditLog.unshift({
    id:\`AL-\${String(auditLog.length+1).padStart(3,'0')}\`,
    timestamp: now.toISOString().replace('T',' ').slice(0,19),
    admin: currentAdmin?.name || 'Super Admin',
    action, resource, detail,
    ip: '192.168.1.10',
    status: 'SUCCESS'
  });
  const badge = document.getElementById('auditBadge');
  if (badge) badge.textContent = Math.min(99, auditLog.filter(a=>a.action!=='LOGIN').length);
}

function pct(score) { return Math.round((score/5)*100); }

function scoreColor(score) {
  if (score >= 4)   return 'var(--green)';
  if (score >= 3.5) return 'var(--gold)';
  if (score >= 3)   return 'var(--amber)';
  return 'var(--red)';
}

function formatScore(score) { return \`\${pct(score)}% (\${Number(score).toFixed(1)})\`; }

function impactPct(impact) { return \`\${Math.round(impact*100)}%\`; }

function togglePw(id, btn) {
  const inp = document.getElementById(id);
  if (!inp || !btn) return;
  inp.type = inp.type === 'password' ? 'text' : 'password';
}

function toggleSetting(el) {
  el.classList.toggle('on');
}

function closeModal(modalId, event) {
  if (event.target === document.getElementById(modalId)) closeModalById(modalId);
}
function closeModalById(id) {
  document.getElementById(id).classList.remove('open');
}
function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function confirmDanger(action, title, message) {
  pendingDangerAction = action;
  document.getElementById('confirmTitle').textContent   = title;
  document.getElementById('confirmMessage').textContent = message;
  const icons = { 'delete':'🗑️', 'clear-cache':'🔄', 'reset-filters':'⚙️', 'flush-sessions':'🚪', 'reset-model':'📊', 'clear-audit':'🗃️' };
  document.getElementById('confirmIcon').textContent = icons[action] || '⚠️';
  openModal('confirmModal');
}

function executeConfirmedAction() {
  const a = pendingDangerAction;
  closeModalById('confirmModal');
  if (!a) return;
  const msgs = {
    'delete':        \`User deleted successfully.\`,
    'clear-cache':   \`System cache cleared. Clients will reload fresh data.\`,
    'reset-filters': \`All user filter preferences reset.\`,
    'flush-sessions':\`All active sessions flushed. Users logged out.\`,
    'reset-model':   \`Model overrides reset to calculated defaults.\`,
    'clear-audit':   \`Audit log cleared.\`,
    'suspend':       \`Selected users suspended.\`,
  };
  if (a.startsWith('delete-user-')) {
    const uid = a.replace('delete-user-','');
    usersData = usersData.filter(u => u.id !== uid);
    renderUsersTable();
    addAuditEntry('DELETE', \`User \${uid}\`, 'Account permanently deleted');
    toast(\`User \${uid} deleted.\`,'success');
  } else if (a.startsWith('delete-branch-')) {
    const bid = a.replace('delete-branch-','');
    branchesData = branchesData.filter(b => b.id !== bid);
    renderBranchPanel();
    addAuditEntry('DELETE', \`Branch \${bid}\`, 'Branch removed');
    toast('Branch deleted.','success');
  } else if (a.startsWith('delete-record-')) {
    toast('Record deleted.','success');
    addAuditEntry('DELETE', 'Record', 'Response record removed');
  } else if (a === 'reset-model') {
    modelOverrides = {};
    Object.keys(DRIVERS_DATA).forEach(b => { modelOverrides[b] = DRIVERS_DATA[b].map(d=>({...d})); });
    renderModelWeights();
    addAuditEntry('OVERRIDE','Model Weights','All driver weight overrides reset to defaults');
    toast('Model weights reset to defaults.','success');
  } else if (a === 'clear-audit') {
    auditLog = [];
    renderAuditLog();
    toast('Audit log cleared.','warning');
  } else {
    toast(msgs[a] || 'Action completed.','success');
    addAuditEntry('OVERRIDE', 'System', msgs[a] || 'Admin action executed');
  }
  pendingDangerAction = null;
}

function launchAdmin(user, opts) {
  opts = opts || {};
  currentAdmin = user;
  document.getElementById('adminApp')?.classList.add('open');
  const dn = document.getElementById('adminDisplayName');
  const av = document.getElementById('adminAvatar');
  if (dn) dn.textContent = user.name;
  if (av) av.textContent = (user.name || 'A').charAt(0).toUpperCase();
  if (!opts.quiet) addAuditEntry('LOGIN', 'Admin Auth', 'Successful admin login');
  initAllPanels();
  applyAdminLanguage();
  if (!opts.quiet) toast(I18N[currentLang].messages.welcome(user.name), 'success');
}

function handleLogout() {
  addAuditEntry('LOGIN', 'Admin Auth', 'Admin logged out (reload)');
  currentAdmin = null;
  toast(tx('messages.logoutDone'), 'info');
  location.reload();
}

/* ═══════════════════════════════════════════
   PANEL NAVIGATION
═══════════════════════════════════════════ */
const PANEL_META = I18N.en.panelMeta;

const EXEC_OVERRIDES_STORAGE_KEY = 'roshd_executive_overrides';

function getExecutiveFilterContext() {
  execEnsureFilterSelectorsMounted();
  const cfg = admGetFilterBarConfig();
  const out = {};
  cfg.filters.forEach((f, i) => {
    out[f.key] = admGetFilValue('exec', i);
  });
  return out;
}

function admCtxSel(ctx, key) {
  return ctx && ctx[key] != null ? String(ctx[key]).trim() : '';
}

function admCtxIsAll(ctx, key) {
  const f = admGetFilterBarConfig().filters.find((x) => x.key === key);
  if (!f) return true;
  const v = admCtxSel(ctx, key);
  const allV = String(f.allValue ?? '').trim();
  return v === '' || v === allV;
}

function execBranchForAggregateData(ctx) {
  const c = ctx || getExecutiveFilterContext();
  if (admCtxIsAll(c, 'branch')) return 'All Branches';
  const b = admCtxSel(c, 'branch');
  return EXEC_DB_DATA[b] ? b : 'All Branches';
}

function buildExecutiveFilterKey(ctx) {
  const c = ctx || getExecutiveFilterContext();
  const cfg = admGetFilterBarConfig();
  return cfg.filters.map((f) => admCtxSel(c, f.key) || String(f.allValue ?? '')).join(' | ');
}

function syncExecutiveContextToCustomerFilters(ctx) {
  const c = ctx || getExecutiveFilterContext();
  try {
    localStorage.setItem('roshd_filters', JSON.stringify(Object.assign({}, c)));
  } catch (_) {}
}

const EXEC_EDITOR_FLOW_DEFAULT = [
  { titleEn: '1. Filter', titleAr: '١. التصفية', bodyEn: 'Branch / gender / service / visits / age', bodyAr: 'الفرع / الجنس / الخدمة / الزيارات / العمر' },
  { titleEn: '2. Sample', titleAr: '٢. العيّنة', bodyEn: 'Segment N & share', bodyAr: 'الحجم ونسبة الشريحة' },
  { titleEn: '3. Drivers', titleAr: '٣. المحركات', bodyEn: 'Impact + decisions', bodyAr: 'الأثر + القرار' },
  { titleEn: '4. Simulate', titleAr: '٤. المحاكاة', bodyEn: 'Expected Lift', bodyAr: 'الارتفاع المتوقع' },
  { titleEn: '5. Recommend', titleAr: '٥. التوصية', bodyEn: 'Do / Optimize / Avoid', bodyAr: 'نفّذ / حسّن / تجنّب' },
];

function getExecutiveDefaultOverrides(ctx) {
  const c = ctx || getExecutiveFilterContext();
  const d = execDataForContext(c);
  const score = Number(d.score || 3.8);
  const explanatory = Number(d.explanatory || 72);
  const segmentN = execFilteredCustomers(c).length;
  const sharePct = segmentN ? Math.round((segmentN / EXEC_DB_SAMPLE_TOTAL) * 100) : 0;

  const branchBars = ['Riyadh', 'Jeddah', 'Dammam'].map((b) => {
    const row = BRANCHES_DATA[b] || BRANCHES_DATA['All Branches'];
    let pct = Math.max(0, Math.min(100, Math.round((Number(row.score || 0) / 5) * 100)));
    if (!admCtxIsAll(c, 'branch') && admCtxSel(c, 'branch') === b) pct = Math.min(100, pct + 4);
    return {
      labelEn: b,
      labelAr: tr('branch', b),
      scoreLabel: \`\${pct}% (\${Number(row.score || 0).toFixed(1)})\`,
      widthPct: pct,
    };
  });

  return {
    kpiTrend1: '↑ +0.3',
    kpiScore: \`\${Math.round((score / 5) * 100)}% (\${score.toFixed(1)})\`,
    kpiStripR2: \`\${Math.round(explanatory)}%\`,
    kpiTopDriverEn: d.top || 'Quality',
    kpiTopDriverAr: d.topAr || trDriverName(d.top || 'Quality'),
    kpiRiskEn: d.risk || 'Speed',
    kpiRiskAr: d.riskAr || trDriverName(d.risk || 'Speed'),
    kpiSampleN: String(segmentN),
    kpiSampleShareEn: \`\${sharePct}% of full sample (\${EXEC_DB_SAMPLE_TOTAL})\`,
    kpiSampleShareAr: \`\${sharePct}% من العينة الكاملة (\${EXEC_DB_SAMPLE_TOTAL})\`,
    investEn: Array.isArray(d.invest) ? d.invest : [],
    investAr: Array.isArray(d.investAr) ? d.investAr : [],
    optimizeEn: Array.isArray(d.optimize) ? d.optimize : [],
    optimizeAr: Array.isArray(d.optimizeAr) ? d.optimizeAr : [],
    avoidEn: Array.isArray(d.avoid) ? d.avoid : [],
    avoidAr: Array.isArray(d.avoidAr) ? d.avoidAr : [],
    branchBars,
    flowSteps: EXEC_EDITOR_FLOW_DEFAULT.map((s) => ({ ...s })),
    coreRuleEn: 'A low average score is not a priority unless it has meaningful effect size and enough segment sample.',
    coreRuleAr: 'انخفاض متوسط الدرجة ليس أولوية ما لم يكن لتأثيره حجم مهم وحجم شريحة كافٍ.',
    segmentWarningMode: 'auto',
    segmentWarningEn: '',
    segmentWarningAr: '',
  };
}

function getExecutiveLiveDriversPreview(ctx) {
  const d = execDataForContext(ctx);
  return Array.isArray(d.drivers) ? d.drivers : [];
}

function applyExecutiveAutoFieldsByContext(base, ctx) {
  const c = ctx || getExecutiveFilterContext();
  const drivers = getExecutiveLiveDriversPreview(c)
    .slice()
    .sort((a, b) => (Number(b?.impact) || 0) - (Number(a?.impact) || 0));
  if (drivers.length) {
    const topRow = drivers[0];
    const topEn = String(topRow?.name || '').trim();
    const topAr = String(topRow?.nameAr || '').trim();
    if (topEn) base.kpiTopDriverEn = topEn;
    if (topAr) base.kpiTopDriverAr = topAr;
    else if (topEn) base.kpiTopDriverAr = trDriverName(topEn) || base.kpiTopDriverAr;
  }
  return {
    ...base,
    kpiRiskEn: 'Speed',
    kpiRiskAr: trDriverName('Speed'),
  };
}

function readExecutiveOverridesFromStorage() {
  try {
    const raw = localStorage.getItem(EXEC_OVERRIDES_STORAGE_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

function resolveExecutiveOverridesForContext(storeObj, key) {
  const k = key || buildExecutiveFilterKey();
  if (!storeObj) return null;
  if (storeObj.byFilter && typeof storeObj.byFilter === 'object') {
    const scoped = storeObj.byFilter[k];
    if (scoped && typeof scoped === 'object') return scoped;
    if (storeObj.global && typeof storeObj.global === 'object') return storeObj.global;
    return null;
  }
  return storeObj;
}

function mergeExecutiveOverrides() {
  const ctx = getExecutiveFilterContext();
  const base = applyExecutiveAutoFieldsByContext(getExecutiveDefaultOverrides(ctx), ctx);
  const s = readExecutiveOverridesFromStorage();
  const scoped = resolveExecutiveOverridesForContext(s, buildExecutiveFilterKey(ctx));
  if (!scoped) return base;
  const merged = Object.assign({}, base, scoped, {
    investEn: Array.isArray(scoped.investEn) && scoped.investEn.length ? scoped.investEn : base.investEn,
    investAr: Array.isArray(scoped.investAr) && scoped.investAr.length ? scoped.investAr : base.investAr,
    optimizeEn: Array.isArray(scoped.optimizeEn) && scoped.optimizeEn.length ? scoped.optimizeEn : base.optimizeEn,
    optimizeAr: Array.isArray(scoped.optimizeAr) && scoped.optimizeAr.length ? scoped.optimizeAr : base.optimizeAr,
    avoidEn: Array.isArray(scoped.avoidEn) && scoped.avoidEn.length ? scoped.avoidEn : base.avoidEn,
    avoidAr: Array.isArray(scoped.avoidAr) && scoped.avoidAr.length ? scoped.avoidAr : base.avoidAr,
    branchBars: Array.isArray(scoped.branchBars) && scoped.branchBars.length ? scoped.branchBars : base.branchBars,
    flowSteps: Array.isArray(scoped.flowSteps) && scoped.flowSteps.length === 5 ? scoped.flowSteps : base.flowSteps,
  });
  const fallbackIfBlank = (key) => {
    const v = merged[key];
    if (v == null || String(v).trim() === '') merged[key] = base[key];
  };
  fallbackIfBlank('kpiTopDriverEn');
  fallbackIfBlank('kpiTopDriverAr');
  fallbackIfBlank('kpiRiskEn');
  fallbackIfBlank('kpiRiskAr');
  return merged;
}

function ensureExecFlowEditorBuilt() {
  const host = document.getElementById('execEd_flowMount');
  if (!host || host.dataset.bound === '1') return;
  host.innerHTML = [0, 1, 2, 3, 4].map((i) => \`
    <div class="exec-flow-step">
      <label>Step \${i + 1}</label>
      <input class="form-input" id="execEd_flow\${i}_titleEn" placeholder="Title EN">
      <input class="form-input" id="execEd_flow\${i}_titleAr" placeholder="Title AR" dir="rtl" style="margin-top:6px">
      <input class="form-input" id="execEd_flow\${i}_bodyEn" placeholder="Body EN" style="margin-top:6px">
      <input class="form-input" id="execEd_flow\${i}_bodyAr" placeholder="Body AR" dir="rtl" style="margin-top:6px">
    </div>\`).join('');
  host.dataset.bound = '1';
}

function _v(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

function _lines(id) {
  return (document.getElementById(id)?.value || '')
    .split('\\n')
    .map((s) => s.trim())
    .filter(Boolean);
}

function _set(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val != null ? String(val) : '';
}

function _setLines(id, arr) {
  _set(id, (arr || []).join('\\n'));
}

function gatherExecutiveOverridesFromForm() {
  ensureExecFlowEditorBuilt();
  const flowSteps = [];
  for (let i = 0; i < 5; i++) {
    flowSteps.push({
      titleEn: _v(\`execEd_flow\${i}_titleEn\`),
      titleAr: _v(\`execEd_flow\${i}_titleAr\`),
      bodyEn: _v(\`execEd_flow\${i}_bodyEn\`),
      bodyAr: _v(\`execEd_flow\${i}_bodyAr\`),
    });
  }
  const branchBars = [];
  for (let i = 0; i < 3; i++) {
    const labelEn = _v(\`execEd_br\${i}_en\`);
    if (!labelEn && !_v(\`execEd_br\${i}_ar\`)) continue;
    branchBars.push({
      labelEn,
      labelAr: _v(\`execEd_br\${i}_ar\`) || labelEn,
      scoreLabel: _v(\`execEd_br\${i}_score\`),
      widthPct: Math.min(100, Math.max(0, parseFloat(_v(\`execEd_br\${i}_width\`)) || 0)),
    });
  }
  const defFlow = getExecutiveDefaultOverrides().flowSteps;
  const flowStepsNorm = flowSteps.map((st, i) => ({
    titleEn: st.titleEn || defFlow[i].titleEn,
    titleAr: st.titleAr || defFlow[i].titleAr,
    bodyEn: st.bodyEn || defFlow[i].bodyEn,
    bodyAr: st.bodyAr || defFlow[i].bodyAr,
  }));
  return {
    kpiTrend1: _v('execEd_kpiTrend1'),
    kpiStripR2: _v('execEd_kpiStripR2'),
    kpiSampleN: _v('execEd_kpiSampleN'),
    kpiSampleShareEn: _v('execEd_kpiSampleShareEn'),
    kpiSampleShareAr: _v('execEd_kpiSampleShareAr'),
    investEn: _lines('execEd_investEn'),
    investAr: _lines('execEd_investAr'),
    optimizeEn: _lines('execEd_optimizeEn'),
    optimizeAr: _lines('execEd_optimizeAr'),
    avoidEn: _lines('execEd_avoidEn'),
    avoidAr: _lines('execEd_avoidAr'),
    branchBars: branchBars.length ? branchBars : getExecutiveDefaultOverrides().branchBars,
    flowSteps: flowStepsNorm,
    coreRuleEn: _v('execEd_coreRuleEn'),
    coreRuleAr: _v('execEd_coreRuleAr'),
    segmentWarningMode: document.getElementById('execEd_segMode')?.value || 'auto',
    segmentWarningEn: _v('execEd_segWarnEn'),
    segmentWarningAr: _v('execEd_segWarnAr'),
  };
}

function applyExecutiveOverridesToForm(o) {
  ensureExecFlowEditorBuilt();
  _set('execEd_kpiTrend1', o.kpiTrend1);
  _set('execEd_kpiStripR2', o.kpiStripR2);
  _set('execEd_kpiSampleN', o.kpiSampleN);
  _set('execEd_kpiSampleShareEn', o.kpiSampleShareEn);
  _set('execEd_kpiSampleShareAr', o.kpiSampleShareAr);
  _setLines('execEd_investEn', o.investEn);
  _setLines('execEd_investAr', o.investAr);
  _setLines('execEd_optimizeEn', o.optimizeEn);
  _setLines('execEd_optimizeAr', o.optimizeAr);
  _setLines('execEd_avoidEn', o.avoidEn);
  _setLines('execEd_avoidAr', o.avoidAr);
  (o.branchBars || []).slice(0, 3).forEach((row, i) => {
    _set(\`execEd_br\${i}_en\`, row.labelEn);
    _set(\`execEd_br\${i}_ar\`, row.labelAr);
    _set(\`execEd_br\${i}_score\`, row.scoreLabel);
    _set(\`execEd_br\${i}_width\`, row.widthPct != null ? String(row.widthPct) : '');
  });
  (o.flowSteps || []).forEach((st, i) => {
    if (i > 4) return;
    _set(\`execEd_flow\${i}_titleEn\`, st.titleEn);
    _set(\`execEd_flow\${i}_titleAr\`, st.titleAr);
    _set(\`execEd_flow\${i}_bodyEn\`, st.bodyEn);
    _set(\`execEd_flow\${i}_bodyAr\`, st.bodyAr);
  });
  const sm = document.getElementById('execEd_segMode');
  if (sm) sm.value = o.segmentWarningMode || 'auto';
  _set('execEd_coreRuleEn', o.coreRuleEn);
  _set('execEd_coreRuleAr', o.coreRuleAr);
  _set('execEd_segWarnEn', o.segmentWarningEn);
  _set('execEd_segWarnAr', o.segmentWarningAr);
}

function loadExecutiveEditorForm() {
  if (!document.getElementById('execEd_kpiTrend1')) return;
  execEnsureFilterSelectorsMounted();
  syncExecutiveContextToCustomerFilters();
  ensureExecFlowEditorBuilt();
  applyExecutiveOverridesToForm(mergeExecutiveOverrides());
}

function notifyCustomerDashboardOverrides(msgType) {
  try {
    const ch = new BroadcastChannel('roshd_dashboard_sync');
    ch.postMessage({ type: msgType });
    ch.close();
  } catch (_) {}
}

function saveExecutiveOverridesFromForm() {
  const ctxKey = buildExecutiveFilterKey();
  const payload = gatherExecutiveOverridesFromForm();
  const current = readExecutiveOverridesFromStorage();
  const byFilter = current && current.byFilter && typeof current.byFilter === 'object'
    ? Object.assign({}, current.byFilter)
    : {};
  byFilter[ctxKey] = payload;
  try {
    localStorage.setItem(EXEC_OVERRIDES_STORAGE_KEY, JSON.stringify({ byFilter }));
  } catch (_) {
    toast('Could not save (storage blocked).', 'error');
    return;
  }
  addAuditEntry('UPDATE', 'Executive overrides', \`Customer Executive KPIs and copy saved for filter: \${ctxKey}\`);
  notifyCustomerDashboardOverrides('executive-overrides-updated');
  toast(\`Saved for filter context: \${ctxKey}\`, 'success');
}

function resetExecutiveOverrides() {
  const ctxKey = buildExecutiveFilterKey();
  const current = readExecutiveOverridesFromStorage();
  if (current && current.byFilter && typeof current.byFilter === 'object') {
    const byFilter = Object.assign({}, current.byFilter);
    delete byFilter[ctxKey];
    try {
      if (Object.keys(byFilter).length) localStorage.setItem(EXEC_OVERRIDES_STORAGE_KEY, JSON.stringify({ byFilter }));
      else localStorage.removeItem(EXEC_OVERRIDES_STORAGE_KEY);
    } catch (_) {}
  } else {
    try {
      localStorage.removeItem(EXEC_OVERRIDES_STORAGE_KEY);
    } catch (_) {}
  }
  loadExecutiveEditorForm();
  addAuditEntry('UPDATE', 'Executive overrides', \`Reset Executive override for filter: \${ctxKey}\`);
  notifyCustomerDashboardOverrides('executive-overrides-updated');
  toast(\`Executive override cleared for: \${ctxKey}\`, 'info');
}

function resetAllExecutiveOverrides() {
  try {
    localStorage.removeItem(EXEC_OVERRIDES_STORAGE_KEY);
  } catch (_) {}
  loadExecutiveEditorForm();
  addAuditEntry('UPDATE', 'Executive overrides', 'Reset all Executive filter overrides to defaults');
  notifyCustomerDashboardOverrides('executive-overrides-updated');
  toast('All Executive overrides cleared.', 'info');
}

const CX_DRIVERS_OVERRIDES_STORAGE_KEY = 'roshd_cx_drivers_overrides';
const CX_MAX_DRIVERS = 8;

function getCxFilterContext() {
  execEnsureFilterSelectorsMounted();
  const cfg = admGetFilterBarConfig();
  const out = {};
  cfg.filters.forEach((f, i) => {
    out[f.key] = admGetFilValue('cx', i);
  });
  return out;
}

function buildCxFilterKey(ctx) {
  const c = ctx || getCxFilterContext();
  const cfg = admGetFilterBarConfig();
  return cfg.filters.map((f) => admCtxSel(c, f.key) || String(f.allValue ?? '')).join(' | ');
}

function syncCxContextToCustomerFilters(ctx) {
  const c = ctx || getCxFilterContext();
  try {
    localStorage.setItem('roshd_filters', JSON.stringify(Object.assign({}, c)));
  } catch (_) {}
}

/** Mirrors customer dashboard \`DB_DATA["All Branches"]\` (must stay in sync for admin preview). */
const CX_CUSTOMER_MODEL_ALL_BRANCHES = {
  score: 3.8,
  explanatory: 72,
  top: 'Quality',
  topAr: 'الجودة',
  invest: [
    'Fund quality consistency improvements.',
    'Audit first-time-right and rework patterns.',
    'Make quality the main CX improvement program.',
  ],
  investAr: [
    'موّل تحسينات الجودة المستمرة.',
    'راجع أنماط الإصلاح من أول مرة والإعادة.',
    'اجعل الجودة برنامج التحسين الرئيسي.',
  ],
  optimize: [
    'Improve customer communication discipline.',
    'Use advisor scripts for updates.',
    'Target price fairness where complaints cluster.',
  ],
  optimizeAr: [
    'حسّن انضباط التواصل مع العملاء.',
    'استخدم نصوص المستشار للتحديثات.',
    'استهدف عدالة السعر حيث تتركز الشكاوى.',
  ],
  avoid: [
    'Do not invest in speed just because its average is low.',
    'Do not build one action plan for all branches.',
    'Do not use averages as decision authority.',
  ],
  avoidAr: [
    'لا تستثمر في السرعة لأن متوسطها منخفض فقط.',
    'لا تبنِ خطة عمل واحدة لجميع الفروع.',
    'لا تستخدم المتوسطات كسلطة قرار.',
  ],
  drivers: [
    { name: 'Quality', nameAr: 'الجودة', avg: 3.4, impact: 0.34, decision: 'Invest', decisionAr: 'استثمر', cls: 'navy' },
    { name: 'Communication', nameAr: 'التواصل', avg: 3.0, impact: 0.23, decision: 'Selective', decisionAr: 'انتقائي', cls: 'warning' },
    { name: 'Price Fairness', nameAr: 'عدالة السعر', avg: 2.9, impact: 0.12, decision: 'Monitor', decisionAr: 'راقب', cls: 'info' },
    { name: 'Advisor Behavior', nameAr: 'سلوك المستشار', avg: 3.8, impact: 0.1, decision: 'Maintain', decisionAr: 'حافظ', cls: '' },
    { name: 'Speed', nameAr: 'السرعة', avg: 1.4, impact: 0.01, decision: 'Do not overinvest', decisionAr: 'لا تُبالغ في الاستثمار', cls: 'danger' },
  ],
};

function cxPctOf5(score) {
  const v = Number(score);
  if (Number.isNaN(v)) return 0;
  return Math.min(100, Math.max(0, Math.round((v / 5) * 100)));
}

/** Same pattern as customer \`dbFormatMean5\` — e.g. 3.4 → "3.4 (68%)" */
function cxFormatMean5(score, decimals) {
  const d = decimals === undefined ? 1 : decimals;
  const v = Number(score);
  if (Number.isNaN(v)) return String(score);
  return \`\${v.toFixed(d)} (\${cxPctOf5(v)}%)\`;
}

function cxResolveDriverCls(cls) {
  const c = String(cls || '').toLowerCase();
  if (c === 'navy' || c === 'danger' || c === 'warning') return c;
  return 'gold';
}

function buildCxDriversRowsLiveDefaults() {
  const d = execDataForContext(getCxFilterContext());
  return (d.drivers || []).map((dr, i) => ({
    rank: i + 1,
    nameEn: dr.name,
    nameAr: dr.nameAr || dr.name,
    impact: dr.impact,
    avg: Number(dr.avg),
    decisionEn: dr.decision,
    decisionAr: dr.decisionAr || dr.decision,
    cls: cxResolveDriverCls(dr.cls),
  }));
}

/** Top-four levers in cohort order (matches customer \`dbRenderSimulation\`). */
function buildCxSimSliderLiveDefaults() {
  const d = execDataForContext(getCxFilterContext());
  return (d.drivers || []).slice(0, 4).map((dr) => ({
    labelEn: \`\${dr.name} Improvement\`,
    labelAr: \`\${dr.nameAr || dr.name} تحسين\`,
  }));
}

function getCxDriversDefaultOverrides() {
  const M = execDataForContext(getCxFilterContext());
  return {
    mapTitleEn: 'Driver Impact Map',
    mapTitleAr: 'خريطة تأثير المحركات',
    mapSubEn:
      'Bubble size reflects effect size (Impact). Larger = stronger lever. Speed is highlighted when impact is weak.',
    mapSubAr:
      'حجم الفقاعة يعكس الأثر. الأكبر = رافعة أقوى. تظل السرعة مميّزة عندما يكون الأثر ضعيفًا.',
    rankTitleEn: 'Driver Ranking',
    rankTitleAr: 'ترتيب المحركات',
    rankSubEn: 'Priority follows Impact effect size',
    rankSubAr: 'الأولوية تتبع حجم الأثر',
    thRankEn: 'Rank',
    thRankAr: 'الترتيب',
    thDriverEn: 'Driver',
    thDriverAr: 'المحرك',
    thEffectEn: 'Effect share',
    thEffectAr: 'حصة الأثر',
    thAvgEn: 'Avg score',
    thAvgAr: 'المتوسط',
    thDecisionEn: 'Decision',
    thDecisionAr: 'القرار',
    interpretEn:
      'Effect size is the practical impact—how much a factor actually changes the outcome.\\nSmall ≈ 0.02 (low), medium ≈ 0.15 (moderate), large ≈ 0.35 (high impact).',
    interpretAr:
      'حجم الأثر هو الأثر العملي — مقدار ما يُغيّر به العامل النتيجة فعلًا.\\nصغير ≈ ٠٫٠٢ (منخفض)، متوسط ≈ ٠٫١٥ (معتدل)، كبير ≈ ٠٫٣٥ (أثر عالٍ).',
    driversRows: buildCxDriversRowsLiveDefaults(),
    bubbles: null,
    simTitleEn: 'Decision Simulation Lab',
    simTitleAr: 'مختبر محاكاة القرارات',
    simSubEn: 'Adjust improvement levers to estimate satisfaction lift',
    simSubAr: 'اضبط رافعات التحسين لتقدير الارتفاع في مستوى الرضا',
    simResetEn: 'Reset to current',
    simResetAr: 'إعادة للحالي',
    simLblExpectedEn: 'Expected Score',
    simLblExpectedAr: 'النتيجة المتوقعة',
    baselineLblEn: 'Baseline: ',
    baselineLblAr: 'الأساس: ',
    baselineSuffix: ' / 5',
    simExpectedLead: '',
    simExpectedParen: '',
    simBaseline: '',
    simAdviceEn: '',
    simAdviceAr: '',
    simSliders: buildCxSimSliderLiveDefaults(),
  };
}

function readCxDriversOverridesFromStorage() {
  try {
    const raw = localStorage.getItem(CX_DRIVERS_OVERRIDES_STORAGE_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

function mergeCxDriversOverrides() {
  const base = getCxDriversDefaultOverrides();
  const s = readCxDriversOverridesFromStorage();
  if (!s) return base;
  let scoped = s;
  if (s.byFilter && typeof s.byFilter === 'object') {
    scoped = s.byFilter[buildCxFilterKey()] || null;
  }
  if (!scoped) return base;
  const merged = { ...base, ...scoped };
  merged.driversRows =
    Array.isArray(scoped.driversRows) && scoped.driversRows.length ? scoped.driversRows : base.driversRows;
  merged.bubbles = scoped.bubbles !== undefined ? scoped.bubbles : base.bubbles;
  const bSl = base.simSliders;
  const sSl = Array.isArray(scoped.simSliders) && scoped.simSliders.length === 4 ? scoped.simSliders : null;
  merged.simSliders = sSl ? sSl.map((slot, i) => (slot && (slot.labelEn || slot.labelAr) ? slot : bSl[i])) : bSl;
  return merged;
}

function ensureCxDriverRowEditorsBuilt() {
  const host = document.getElementById('cxEd_driverRowsMount');
  if (!host || host.dataset.bound === '1') return;
  const rows = Array.from({ length: CX_MAX_DRIVERS }, (_, i) => \`
    <tr>
      <td><input class="form-input" id="cxEd_dr\${i}_rank" placeholder="\${i + 1}" style="min-width:72px"></td>
      <td><input class="form-input" id="cxEd_dr\${i}_nameEn" placeholder="Driver name EN"></td>
      <td><input class="form-input" id="cxEd_dr\${i}_nameAr" placeholder="Driver name AR" dir="rtl"></td>
      <td><input class="form-input" id="cxEd_dr\${i}_impact" placeholder="0.00" style="min-width:110px"></td>
      <td><input class="form-input" id="cxEd_dr\${i}_avgScore" placeholder="0-5" style="min-width:90px"></td>
      <td><input class="form-input" id="cxEd_dr\${i}_decisionEn" placeholder="Decision EN"></td>
      <td><input class="form-input" id="cxEd_dr\${i}_decisionAr" placeholder="Decision AR" dir="rtl"></td>
      <td>
        <select class="filter-select" id="cxEd_dr\${i}_cls" style="min-height:38px;min-width:130px">
          <option value="navy">Navy</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
          <option value="gold">Gold</option>
        </select>
      </td>
    </tr>
  \`).join("");
  host.innerHTML = \`
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name (EN)</th>
            <th>Name (AR)</th>
            <th>Impact</th>
            <th>Avg (/5)</th>
            <th>Decision (EN)</th>
            <th>Decision (AR)</th>
            <th>Badge</th>
          </tr>
        </thead>
        <tbody>\${rows}</tbody>
      </table>
    </div>\`;
  host.dataset.bound = '1';
}

function gatherCxDriversOverridesFromForm() {
  ensureCxDriverRowEditorsBuilt();
  const parseAvgScore = (s) => {
    const raw = String(s || '').trim();
    if (!raw) return null;
    const m = raw.match(/-?\\d+(\\.\\d+)?/);
    if (!m) return null;
    const n = Number(m[0]);
    if (Number.isNaN(n)) return null;
    return Math.min(5, Math.max(0, n));
  };
  const driversRows = [];
  for (let i = 0; i < CX_MAX_DRIVERS; i++) {
    const nameEn = _v(\`cxEd_dr\${i}_nameEn\`);
    const nameAr = _v(\`cxEd_dr\${i}_nameAr\`);
    if (!nameEn && !nameAr) continue;
    const rankRaw = _v(\`cxEd_dr\${i}_rank\`);
    const rank = rankRaw !== '' ? parseInt(rankRaw, 10) : undefined;
    driversRows.push({
      rank: Number.isFinite(rank) ? rank : undefined,
      nameEn: nameEn || nameAr,
      nameAr: nameAr || nameEn,
      impact: parseFloat(_v(\`cxEd_dr\${i}_impact\`)) || 0,
      avg: parseAvgScore(_v(\`cxEd_dr\${i}_avgScore\`)),
      decisionEn: _v(\`cxEd_dr\${i}_decisionEn\`),
      decisionAr: _v(\`cxEd_dr\${i}_decisionAr\`),
      cls: document.getElementById(\`cxEd_dr\${i}_cls\`)?.value || 'gold',
    });
  }
  const defaultSimSliders = buildCxSimSliderLiveDefaults();
  const simSliders = [0, 1, 2, 3].map((i) => {
    const en = _v(\`cxEd_simLever\${i}En\`);
    const ar = _v(\`cxEd_simLever\${i}Ar\`);
    const def = defaultSimSliders[i] || { labelEn: \`Lever \${i + 1}\`, labelAr: \`الرافعة \${i + 1}\` };
    return {
      labelEn: en || def.labelEn,
      labelAr: ar || def.labelAr || en || def.labelEn,
    };
  });
  return {
    mapTitleEn: _v('cxEd_mapTitleEn'),
    mapTitleAr: _v('cxEd_mapTitleAr'),
    mapSubEn: _v('cxEd_mapSubEn'),
    mapSubAr: _v('cxEd_mapSubAr'),
    rankTitleEn: _v('cxEd_rankTitleEn'),
    rankTitleAr: _v('cxEd_rankTitleAr'),
    rankSubEn: _v('cxEd_rankSubEn'),
    rankSubAr: _v('cxEd_rankSubAr'),
    interpretEn: _v('cxEd_interpretEn'),
    interpretAr: _v('cxEd_interpretAr'),
    driversRows: driversRows.length ? driversRows : getCxDriversDefaultOverrides().driversRows,
    simTitleEn: _v('cxEd_simTitleEn'),
    simTitleAr: _v('cxEd_simTitleAr'),
    simSubEn: _v('cxEd_simSubEn'),
    simSubAr: _v('cxEd_simSubAr'),
    simResetEn: _v('cxEd_simResetEn'),
    simResetAr: _v('cxEd_simResetAr'),
    simLblExpectedEn: _v('cxEd_simLblExpectedEn'),
    simLblExpectedAr: _v('cxEd_simLblExpectedAr'),
    baselineLblEn: _v('cxEd_baselineLblEn'),
    baselineLblAr: _v('cxEd_baselineLblAr'),
    baselineSuffix: _v('cxEd_baselineSuffix'),
    simExpectedLead: _v('cxEd_simExpectedLead'),
    simExpectedParen: _v('cxEd_simExpectedParen'),
    simBaseline: _v('cxEd_simBaseline'),
    simAdviceEn: _v('cxEd_simAdviceEn'),
    simAdviceAr: _v('cxEd_simAdviceAr'),
    simSliders,
  };
}

function applyCxDriversOverridesToForm(o) {
  ensureCxDriverRowEditorsBuilt();
  _set('cxEd_mapTitleEn', o.mapTitleEn);
  _set('cxEd_mapTitleAr', o.mapTitleAr);
  _set('cxEd_mapSubEn', o.mapSubEn);
  _set('cxEd_mapSubAr', o.mapSubAr);
  _set('cxEd_rankTitleEn', o.rankTitleEn);
  _set('cxEd_rankTitleAr', o.rankTitleAr);
  _set('cxEd_rankSubEn', o.rankSubEn);
  _set('cxEd_rankSubAr', o.rankSubAr);
  _set('cxEd_interpretEn', o.interpretEn);
  _set('cxEd_interpretAr', o.interpretAr);
  _set('cxEd_simTitleEn', o.simTitleEn);
  _set('cxEd_simTitleAr', o.simTitleAr);
  _set('cxEd_simSubEn', o.simSubEn);
  _set('cxEd_simSubAr', o.simSubAr);
  _set('cxEd_simResetEn', o.simResetEn);
  _set('cxEd_simResetAr', o.simResetAr);
  _set('cxEd_simLblExpectedEn', o.simLblExpectedEn);
  _set('cxEd_simLblExpectedAr', o.simLblExpectedAr);
  _set('cxEd_baselineLblEn', o.baselineLblEn);
  _set('cxEd_baselineLblAr', o.baselineLblAr);
  _set('cxEd_baselineSuffix', o.baselineSuffix);
  _set('cxEd_simExpectedLead', o.simExpectedLead);
  _set('cxEd_simExpectedParen', o.simExpectedParen);
  _set('cxEd_simBaseline', o.simBaseline);
  _set('cxEd_simAdviceEn', o.simAdviceEn);
  _set('cxEd_simAdviceAr', o.simAdviceAr);
  const simSlots = Array.isArray(o.simSliders) ? o.simSliders : buildCxSimSliderLiveDefaults();
  for (let i = 0; i < 4; i++) {
    const slot = simSlots[i] || {};
    _set(\`cxEd_simLever\${i}En\`, slot.labelEn || '');
    _set(\`cxEd_simLever\${i}Ar\`, slot.labelAr || slot.labelEn || '');
  }
  for (let i = 0; i < CX_MAX_DRIVERS; i++) {
    const row = (o.driversRows || [])[i];
    _set(\`cxEd_dr\${i}_rank\`, row && row.rank != null ? String(row.rank) : '');
    _set(\`cxEd_dr\${i}_nameEn\`, row ? row.nameEn : '');
    _set(\`cxEd_dr\${i}_nameAr\`, row ? row.nameAr : '');
    _set(\`cxEd_dr\${i}_impact\`, row && row.impact != null ? String(row.impact) : '');
    _set(\`cxEd_dr\${i}_avgScore\`, row && row.avg != null ? String(row.avg) : row && row.avgScore != null ? String(row.avgScore) : '');
    _set(\`cxEd_dr\${i}_decisionEn\`, row ? row.decisionEn : '');
    _set(\`cxEd_dr\${i}_decisionAr\`, row ? row.decisionAr : '');
    const sel = document.getElementById(\`cxEd_dr\${i}_cls\`);
    if (sel) sel.value = (row && row.cls) || 'gold';
  }
}

function loadCxDriversEditorForm() {
  if (!document.getElementById('cxEd_mapTitleEn')) return;
  execEnsureFilterSelectorsMounted();
  syncCxContextToCustomerFilters();
  ensureCxDriverRowEditorsBuilt();
  applyCxDriversOverridesToForm(mergeCxDriversOverrides());
}

function saveCxDriversOverridesFromForm() {
  const ctxKey = buildCxFilterKey();
  const payload = gatherCxDriversOverridesFromForm();
  const current = readCxDriversOverridesFromStorage();
  const byFilter = current && current.byFilter && typeof current.byFilter === 'object'
    ? Object.assign({}, current.byFilter)
    : {};
  byFilter[ctxKey] = payload;
  try {
    localStorage.setItem(CX_DRIVERS_OVERRIDES_STORAGE_KEY, JSON.stringify({ byFilter }));
  } catch (_) {
    toast('Could not save (storage blocked).', 'error');
    return;
  }
  addAuditEntry('UPDATE', 'CX Drivers overrides', \`Customer CX Drivers content saved for filter: \${ctxKey}\`);
  notifyCustomerDashboardOverrides('cx-drivers-overrides-updated');
  toast(\`Saved for filter context: \${ctxKey}\`, 'success');
}

function resetCxDriversOverrides() {
  const ctxKey = buildCxFilterKey();
  const current = readCxDriversOverridesFromStorage();
  if (current && current.byFilter && typeof current.byFilter === 'object') {
    const byFilter = Object.assign({}, current.byFilter);
    delete byFilter[ctxKey];
    try {
      if (Object.keys(byFilter).length) localStorage.setItem(CX_DRIVERS_OVERRIDES_STORAGE_KEY, JSON.stringify({ byFilter }));
      else localStorage.removeItem(CX_DRIVERS_OVERRIDES_STORAGE_KEY);
    } catch (_) {}
  } else {
    try { localStorage.removeItem(CX_DRIVERS_OVERRIDES_STORAGE_KEY); } catch (_) {}
  }
  loadCxDriversEditorForm();
  addAuditEntry('UPDATE', 'CX Drivers overrides', \`Reset defaults for filter: \${ctxKey}\`);
  notifyCustomerDashboardOverrides('cx-drivers-overrides-updated');
  toast(\`CX Drivers override cleared for: \${ctxKey}\`, 'info');
}

const UNITS_PERF_OVERRIDES_STORAGE_KEY = 'roshd_units_performance_overrides';

function buildUnitsPerfDriverBarsDefaults() {
  return CX_CUSTOMER_MODEL_ALL_BRANCHES.drivers.map((dr) => ({
    nameEn: dr.name,
    nameAr: dr.nameAr || dr.name,
    impact: dr.impact,
    impactPctLabel: '',
    widthPct: '',
  }));
}

function getUnitsPerformanceDefaultOverrides() {
  return {
    segTitleEn: 'All Branches — Units Performance',
    segTitleAr: 'جميع الفروع — أداء الوحدات',
  };
}

function readUnitsPerformanceOverridesFromStorage() {
  try {
    const raw = localStorage.getItem(UNITS_PERF_OVERRIDES_STORAGE_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

function mergeUnitsPerformanceOverrides() {
  const base = getUnitsPerformanceDefaultOverrides();
  const s = readUnitsPerformanceOverridesFromStorage();
  if (!s) return base;
  return Object.assign({}, base, s);
}

function ensureUnitsPerfDriverBarsEditorsBuilt() {
  const host = document.getElementById('upEd_driverBarsMount');
  if (!host || host.dataset.bound === '1') return;
  host.innerHTML = [0, 1, 2, 3, 4]
    .map(
      (i) => \`
    <div class="exec-flow-step" style="grid-column:1/-1;border:1px solid var(--border);border-radius:12px;padding:14px;margin-bottom:12px">
      <label style="font-weight:700;margin-bottom:8px;display:block">Driver bar \${i + 1}</label>
      <input class="form-input" id="upEd_ub\${i}_nameEn" placeholder="Name EN" style="margin-top:8px">
      <input class="form-input" id="upEd_ub\${i}_nameAr" placeholder="Name AR" dir="rtl" style="margin-top:6px">
      <input class="form-input" id="upEd_ub\${i}_impact" placeholder="Impact (0–1, e.g. 0.34)" style="margin-top:6px">
      <input class="form-input" id="upEd_ub\${i}_impactPctLabel" placeholder="Effect % label override (optional)" style="margin-top:6px">
      <input class="form-input" id="upEd_ub\${i}_widthPct" placeholder="Bar width 0–100 (optional)" style="margin-top:6px">
    </div>\`
    )
    .join('');
  host.dataset.bound = '1';
}

function gatherUnitsPerformanceOverridesFromForm() {
  return {
    segTitleEn: _v('upEd_segTitleEn'),
    segTitleAr: _v('upEd_segTitleAr'),
  };
}

function applyUnitsPerformanceOverridesToForm(o) {
  _set('upEd_segTitleEn', o.segTitleEn);
  _set('upEd_segTitleAr', o.segTitleAr);
}

function loadUnitsPerformanceEditorForm() {
  if (!document.getElementById('upEd_segTitleEn')) return;
  applyUnitsPerformanceOverridesToForm(mergeUnitsPerformanceOverrides());
}

function saveUnitsPerformanceOverridesFromForm() {
  const payload = gatherUnitsPerformanceOverridesFromForm();
  try {
    localStorage.setItem(UNITS_PERF_OVERRIDES_STORAGE_KEY, JSON.stringify(payload));
  } catch (_) {
    toast('Could not save (storage blocked).', 'error');
    return;
  }
  addAuditEntry('UPDATE', 'Units Performance overrides', 'Customer Units Performance content saved to localStorage');
  notifyCustomerDashboardOverrides('units-performance-overrides-updated');
  toast('Saved. Customer dashboard will update if it is open (same site).', 'success');
}

function resetUnitsPerformanceOverrides() {
  try {
    localStorage.removeItem(UNITS_PERF_OVERRIDES_STORAGE_KEY);
  } catch (_) {}
  loadUnitsPerformanceEditorForm();
  addAuditEntry('UPDATE', 'Units Performance overrides', 'Reset to defaults');
  notifyCustomerDashboardOverrides('units-performance-overrides-updated');
  toast('Units Performance overrides cleared.', 'info');
}

const DEMOGRAPHICS_OVERRIDES_STORAGE_KEY = 'roshd_demographics_overrides';

const DEMO_EDITOR_FIELD_GROUPS = [
  {
    title: 'Core funnel numbers',
    fields: [
      { id: 'dm_studyN', key: 'studyN', kind: 'num', lbl: 'Valid sample N', def: 300 },
      { id: 'dm_sent', key: 'sent', kind: 'num', lbl: 'Surveys sent', def: 1250 },
      { id: 'dm_recv', key: 'recv', kind: 'num', lbl: 'Responses', def: 412 },
      { id: 'dm_compl', key: 'compl', kind: 'num', lbl: 'Completes', def: 352 },
      { id: 'dm_excInc', key: 'excInc', kind: 'num', lbl: 'Excluded — incomplete', def: 60 },
      { id: 'dm_excSpe', key: 'excSpe', kind: 'num', lbl: 'Excluded — speeders', def: 32 },
      { id: 'dm_excLow', key: 'excLow', kind: 'num', lbl: 'Excluded — low quality', def: 20 }
    ]
  },
  {
    title: 'Funnel captions',
    fields: [
      { id: 'dm_funnelC1MainEn', key: 'funnelC1MainEn', lbl: 'Col 1 · main EN', def: 'Surveys sent', ph: 'Surveys sent' },
      { id: 'dm_funnelC1MainAr', key: 'funnelC1MainAr', lbl: 'Col 1 · main AR', def: 'المرسلة', rtl: true },
      { id: 'dm_funnelC1SmallEn', key: 'funnelC1SmallEn', lbl: 'Col 1 · caption EN', def: 'Invitation wave' },
      { id: 'dm_funnelC1SmallAr', key: 'funnelC1SmallAr', lbl: 'Col 1 · caption AR', def: 'موجة الدعوة', rtl: true },
      { id: 'dm_funnelC2MainEn', key: 'funnelC2MainEn', lbl: 'Col 2 · main EN', def: 'Responses' },
      { id: 'dm_funnelC2MainAr', key: 'funnelC2MainAr', lbl: 'Col 2 · main AR', def: 'المستجابات', rtl: true },
      { id: 'dm_funnelC2VsEn', key: 'funnelC2VsEn', lbl: 'Col 2 · vs label EN', def: 'vs sent' },
      { id: 'dm_funnelC2VsAr', key: 'funnelC2VsAr', lbl: 'Col 2 · vs label AR', def: 'من المرسل', rtl: true },
      { id: 'dm_funnelC3MainEn', key: 'funnelC3MainEn', lbl: 'Col 3 · main EN', def: 'Valid sample (N)' },
      { id: 'dm_funnelC3MainAr', key: 'funnelC3MainAr', lbl: 'Col 3 · main AR', def: 'عينة صالحة', rtl: true },
      { id: 'dm_funnelC3VsEn', key: 'funnelC3VsEn', lbl: 'Col 3 · vs label EN', def: 'vs responses' },
      { id: 'dm_funnelC3VsAr', key: 'funnelC3VsAr', lbl: 'Col 3 · vs label AR', def: 'من المستجابات', rtl: true },
      { id: 'dm_funnelKpiRespLblEn', key: 'funnelKpiRespLblEn', lbl: 'Response rate lbl EN', def: 'Response rate' },
      { id: 'dm_funnelKpiRespLblAr', key: 'funnelKpiRespLblAr', lbl: 'Response rate lbl AR', def: 'معدل الاستجابة', rtl: true },
      { id: 'dm_funnelKpiRespSubEn', key: 'funnelKpiRespSubEn', lbl: 'Resp. rate sub EN', def: 'Responses / Sent' },
      { id: 'dm_funnelKpiRespSubAr', key: 'funnelKpiRespSubAr', lbl: 'Resp. rate sub AR', def: 'المستجابات / المرسل', rtl: true },
      { id: 'dm_funnelKpiCompLblEn', key: 'funnelKpiCompLblEn', lbl: 'Completion rate lbl EN', def: 'Completion rate' },
      { id: 'dm_funnelKpiCompLblAr', key: 'funnelKpiCompLblAr', lbl: 'Completion rate lbl AR', def: 'معدل الإتمام', rtl: true },
      { id: 'dm_funnelKpiCompSubEn', key: 'funnelKpiCompSubEn', lbl: 'Compl. rate sub EN', def: 'Completed / Responses' },
      { id: 'dm_funnelKpiCompSubAr', key: 'funnelKpiCompSubAr', lbl: 'Compl. rate sub AR', def: 'المكتمل / المستجابة', rtl: true }
    ]
  },
  {
    title: 'Exclusions',
    gridClass: 'exec-editor-grid2',
    fields: [
      { id: 'dm_excDonutLblEn', key: 'excDonutLblEn', lbl: 'Center label EN', def: 'Total excluded' },
      { id: 'dm_excDonutLblAr', key: 'excDonutLblAr', lbl: 'Center label AR', def: 'إجمالي المستبعد', rtl: true },
      { id: 'dm_excR1LblEn', key: 'excR1LblEn', lbl: 'Row1 label EN', def: 'Incomplete responses' },
      { id: 'dm_excR1LblAr', key: 'excR1LblAr', lbl: 'Row1 label AR', def: 'غير مكتملة', rtl: true },
      { id: 'dm_excR1KickEn', key: 'excR1KickEn', lbl: 'Row1 kicker EN', def: 'Partial submits & drop-offs' },
      { id: 'dm_excR1KickAr', key: 'excR1KickAr', lbl: 'Row1 kicker AR', def: 'مشاركات جزئية وانسحابات', rtl: true },
      { id: 'dm_excR2LblEn', key: 'excR2LblEn', lbl: 'Row2 label EN', def: 'Speeders / too fast' },
      { id: 'dm_excR2LblAr', key: 'excR2LblAr', lbl: 'Row2 label AR', def: 'سريعون جدًا', rtl: true },
      { id: 'dm_excR2KickEn', key: 'excR2KickEn', lbl: 'Row2 kicker EN', def: 'Below minimum engagement time' },
      { id: 'dm_excR2KickAr', key: 'excR2KickAr', lbl: 'Row2 kicker AR', def: 'وقت تعبئة دون الحدّ الأدنى', rtl: true },
      { id: 'dm_excR3LblEn', key: 'excR3LblEn', lbl: 'Row3 label EN', def: 'Low-quality responses' },
      { id: 'dm_excR3LblAr', key: 'excR3LblAr', lbl: 'Row3 label AR', def: 'جودة منخفضة', rtl: true },
      { id: 'dm_excR3KickEn', key: 'excR3KickEn', lbl: 'Row3 kicker EN', def: 'Fails attention / consistency checks' },
      { id: 'dm_excR3KickAr', key: 'excR3KickAr', lbl: 'Row3 kicker AR', def: 'رسوب فحوص الانتباه والثبات', rtl: true },
      { id: 'dm_excRowShareEn', key: 'excRowShareEn', lbl: 'Share label EN', def: 'share' },
      { id: 'dm_excRowShareAr', key: 'excRowShareAr', lbl: 'Share label AR', def: 'من المستجابات', rtl: true },
      { id: 'dm_excFootLblEn', key: 'excFootLblEn', lbl: 'Foot label EN', def: 'Total excluded (vs responses)' },
      { id: 'dm_excFootLblAr', key: 'excFootLblAr', lbl: 'Foot label AR', def: 'المستبعد (مقابل المستجابات)', rtl: true }
    ]
  },
  {
    title: 'Sample strength & messages',
    gridClass: 'exec-editor-grid2',
    fields: [
      { id: 'dm_strCovLblEn', key: 'strCovLblEn', lbl: 'Coverage label EN', def: 'Coverage' },
      { id: 'dm_strCovLblAr', key: 'strCovLblAr', lbl: 'Coverage label AR', def: 'التغطية', rtl: true },
      { id: 'dm_strGaugeCapEn', key: 'strGaugeCapEn', kind: 'area', rows: 3, lbl: 'Gauge caption EN (blank = dashboard default with bold hints)', def: '' },
      { id: 'dm_strGaugeCapAr', key: 'strGaugeCapAr', kind: 'area', rows: 3, lbl: 'Gauge caption AR', def: '', rtl: true },
      { id: 'dm_strSampleSubEn', key: 'strSampleSubEn', lbl: 'Twin block subtitle EN', def: 'Sample size' },
      { id: 'dm_strSampleSubAr', key: 'strSampleSubAr', lbl: 'Twin block subtitle AR', def: 'حجم العيّنة', rtl: true },
      { id: 'dm_strTwinLeftLblEn', key: 'strTwinLeftLblEn', lbl: 'Left box title EN', def: 'Total valid sample (N)' },
      { id: 'dm_strTwinLeftLblAr', key: 'strTwinLeftLblAr', lbl: 'Left box title AR', def: 'إجمالي العينة الصالحة (N)', rtl: true },
      { id: 'dm_strTwinLeftHintEn', key: 'strTwinLeftHintEn', lbl: 'Left hint EN', def: 'After exclusions; fixed study pool for this dashboard.' },
      { id: 'dm_strTwinLeftHintAr', key: 'strTwinLeftHintAr', lbl: 'Left hint AR', def: 'بعد الاستبعاد؛ مرجع ثابت لهذه اللوحة.', rtl: true },
      { id: 'dm_strTwinRightLblEn', key: 'strTwinRightLblEn', lbl: 'Right box title EN', def: 'Current filtered (N)' },
      { id: 'dm_strTwinRightLblAr', key: 'strTwinRightLblAr', lbl: 'Right box title AR', def: 'المصفّى الحالي (N)', rtl: true },
      { id: 'dm_strTwinRightHintEn', key: 'strTwinRightHintEn', kind: 'area', rows: 2, lbl: 'Right hint EN (leave blank → live · share %)', def: '' },
      { id: 'dm_strTwinRightHintAr', key: 'strTwinRightHintAr', kind: 'area', rows: 2, lbl: 'Right hint AR (optional)', def: '', rtl: true },
      { id: 'dm_strLeg1KeyEn', key: 'strLeg1KeyEn', lbl: 'Legend 1 key EN', def: 'COVERAGE GAUGE' },
      { id: 'dm_strLeg1KeyAr', key: 'strLeg1KeyAr', lbl: 'Legend 1 key AR', def: 'مؤشر التغطية', rtl: true },
      { id: 'dm_strLeg1ValEn', key: 'strLeg1ValEn', kind: 'area', rows: 2, lbl: 'Legend 1 text EN', def: 'Shows how close your current sample is to the minimum required for reliable insights. It reflects data confidence—not participation rate.' },
      { id: 'dm_strLeg1ValAr', key: 'strLeg1ValAr', kind: 'area', rows: 2, lbl: 'Legend 1 text AR', def: 'يوضح مدى اقتراب حجم العينة الحالية من الحد الأدنى المطلوب للحصول على نتائج موثوقة. يعكس مستوى الثقة في البيانات وليس نسبة المشاركة.', rtl: true },
      { id: 'dm_strLeg2KeyEn', key: 'strLeg2KeyEn', lbl: 'Legend 2 key EN', def: 'TOTAL VALID' },
      { id: 'dm_strLeg2KeyAr', key: 'strLeg2KeyAr', lbl: 'Legend 2 key AR', def: 'إجمالي العينة المعتمدة', rtl: true },
      { id: 'dm_strLeg2ValEn', key: 'strLeg2ValEn', lbl: 'Legend 2 text EN', def: 'Full dataset after cleaning. Use as the reference base.' },
      { id: 'dm_strLeg2ValAr', key: 'strLeg2ValAr', lbl: 'Legend 2 text AR', def: 'يمثل كامل البيانات بعد التنقية، ويُستخدم كمرجع أساسي للمقارنة.', rtl: true },
      { id: 'dm_strLeg3KeyEn', key: 'strLeg3KeyEn', lbl: 'Legend 3 key EN', def: 'FILTERED N' },
      { id: 'dm_strLeg3KeyAr', key: 'strLeg3KeyAr', lbl: 'Legend 3 key AR', def: 'حجم العينة المُرشَّحة (الحالية)', rtl: true },
      { id: 'dm_strLeg3ValEn', key: 'strLeg3ValEn', kind: 'area', rows: 2, lbl: 'Legend 3 text EN', def: 'Current segment size. Smaller samples may show more fluctuation—focus on overall direction, not small differences.' },
      { id: 'dm_strLeg3ValAr', key: 'strLeg3ValAr', kind: 'area', rows: 2, lbl: 'Legend 3 text AR', def: 'يمثل حجم الشريحة قيد التحليل. عند صِغر العينة، قد تظهر تقلبات في النتائج، لذا يُفضَّل التركيز على الاتجاه العام بدل الفروقات البسيطة.', rtl: true },
      { id: 'dm_strMsgOkEn', key: 'strMsgOkEn', lbl: 'Msg OK EN', def: 'Sample size is adequate for reliable analysis.' },
      { id: 'dm_strMsgOkAr', key: 'strMsgOkAr', lbl: 'Msg OK AR', def: 'حجم العيّنة كافٍ لتحليل موثوق.', rtl: true },
      { id: 'dm_strMsgWarnEn', key: 'strMsgWarnEn', lbl: 'Msg warn EN', def: 'Modest segment — prioritize directionally; validate where possible.' },
      { id: 'dm_strMsgWarnAr', key: 'strMsgWarnAr', lbl: 'Msg warn AR', def: 'حجم متوسط — أولْ الاتجاه والتحقق عند الإمكان.', rtl: true },
      { id: 'dm_strMsgBadEn', key: 'strMsgBadEn', lbl: 'Msg low-N EN', def: 'Segment is small — outputs are directional only.' },
      { id: 'dm_strMsgBadAr', key: 'strMsgBadAr', lbl: 'Msg low-N AR', def: 'شريحة صغيرة — المخرجات توجيهية فقط.', rtl: true }
    ]
  },
  {
    title: 'Section headings (titles & subtitles)',
    gridClass: 'exec-editor-grid2',
    fields: [
      { id: 'dm_hdrFunnelEn', key: 'hdrFunnelEn', lbl: 'Funnel header EN', def: '1 · Data collection funnel' },
      { id: 'dm_hdrFunnelAr', key: 'hdrFunnelAr', lbl: 'Funnel header AR', def: '١ · قمع جمع البيانات', rtl: true },
      { id: 'dm_hdrExcEn', key: 'hdrExcEn', lbl: 'Exclusions header EN', def: '2 · Data cleaning (exclusions)' },
      { id: 'dm_hdrExcAr', key: 'hdrExcAr', lbl: 'Exclusions header AR', def: '٢ · التنظيف (الاستبعاد)', rtl: true },
      { id: 'dm_hdrStrEn', key: 'hdrStrEn', lbl: 'Strength header EN', def: '3 · Sample strength' },
      { id: 'dm_hdrStrAr', key: 'hdrStrAr', lbl: 'Strength header AR', def: '٣ · قوّة العيّنة', rtl: true },
      { id: 'dm_hdrStrDescEn', key: 'hdrStrDescEn', kind: 'area', rows: 2, lbl: 'Strength blurb EN (optional — hides bold tags when set)', def: '' },
      { id: 'dm_hdrStrDescAr', key: 'hdrStrDescAr', kind: 'area', rows: 2, lbl: 'Strength blurb AR', def: '', rtl: true },
      { id: 'dm_hdrEngineTitleEn', key: 'hdrEngineTitleEn', lbl: 'Engine title EN', def: 'Demographics & Sample Engine' },
      { id: 'dm_hdrEngineTitleAr', key: 'hdrEngineTitleAr', lbl: 'Engine title AR', def: 'الديموغرافيا وحجم العيّنة', rtl: true },
      { id: 'dm_hdrEngineSubEn', key: 'hdrEngineSubEn', lbl: 'Engine subtitle EN', def: 'Insight · branches & gender for selected filters' },
      { id: 'dm_hdrEngineSubAr', key: 'hdrEngineSubAr', lbl: 'Engine subtitle AR', def: 'خلاصة فورية وفروع وجنس وفق المرشّح', rtl: true },
      { id: 'dm_hdrProfileTitleEn', key: 'hdrProfileTitleEn', lbl: 'Profile title EN', def: 'Final sample profile (demographics)' },
      { id: 'dm_hdrProfileTitleAr', key: 'hdrProfileTitleAr', lbl: 'Profile title AR', def: 'ملف العينة النهائي (ديموغرافيا)', rtl: true },
      { id: 'dm_hdrProfileSubEn', key: 'hdrProfileSubEn', lbl: 'Profile subtitle EN', def: 'Service lane & visit cadence · this slice' },
      { id: 'dm_hdrProfileSubAr', key: 'hdrProfileSubAr', lbl: 'Profile subtitle AR', def: 'الخدمة وإيقاع الزيارات · هذه الشريحة', rtl: true },
      { id: 'dm_hdrAgeTitleEn', key: 'hdrAgeTitleEn', lbl: 'Age card title EN', def: 'Age Categories' },
      { id: 'dm_hdrAgeTitleAr', key: 'hdrAgeTitleAr', lbl: 'Age card title AR', def: 'فئات العمر', rtl: true },
      { id: 'dm_hdrAgeSubEn', key: 'hdrAgeSubEn', lbl: 'Age card subtitle EN', def: 'Population spread by age category · full layout width' },
      { id: 'dm_hdrAgeSubAr', key: 'hdrAgeSubAr', lbl: 'Age card subtitle AR', def: 'توزيع الأعمار حسب الفئة على كامل العرض لهذه الشريحة', rtl: true }
    ]
  },
  {
    title: 'Chart kickers',
    gridClass: 'exec-editor-grid3',
    fields: [
      { id: 'dm_ckBranchEn', key: 'ckBranchEn', lbl: 'Branch EN', def: 'Donut · share by branch' },
      { id: 'dm_ckBranchAr', key: 'ckBranchAr', lbl: 'Branch AR', def: 'دائرة · توزيع الفروع', rtl: true },
      { id: 'dm_ckGenderEn', key: 'ckGenderEn', lbl: 'Gender EN', def: 'Composition · gender mix' },
      { id: 'dm_ckGenderAr', key: 'ckGenderAr', lbl: 'Gender AR', def: 'التركيب · الجنس', rtl: true },
      { id: 'dm_ckServiceEn', key: 'ckServiceEn', lbl: 'Service EN', def: 'Split · service lane' },
      { id: 'dm_ckServiceAr', key: 'ckServiceAr', lbl: 'Service AR', def: 'انقسام · نوع الخدمة', rtl: true },
      { id: 'dm_ckFreqEn', key: 'ckFreqEn', lbl: 'Frequency EN', def: 'Bars · visit frequency vs max' },
      { id: 'dm_ckFreqAr', key: 'ckFreqAr', lbl: 'Frequency AR', def: 'أعمدة · تكرار الزيارات', rtl: true },
      { id: 'dm_ckAgeEn', key: 'ckAgeEn', lbl: 'Age EN', def: 'Bars · age category spread' },
      { id: 'dm_ckAgeAr', key: 'ckAgeAr', lbl: 'Age AR', def: 'أعمدة · فئات العمر', rtl: true }
    ]
  },
  {
    title: 'Custom insight (optional)',
    gridClass: 'exec-editor-grid2',
    fields: [
      { id: 'dm_insightEn', key: 'insightEn', kind: 'area', rows: 4, lbl: 'Replace auto insight — EN (both empty = auto)', def: '' },
      { id: 'dm_insightAr', key: 'insightAr', kind: 'area', rows: 4, lbl: 'Replace auto insight — AR', def: '', rtl: true }
    ]
  }
];

let _demographicsEditorDomBuilt = false;

function getDemographicsDefaultOverrides() {
  const o = {};
  for (const g of DEMO_EDITOR_FIELD_GROUPS) {
    for (const f of g.fields) {
      if (!f.key) continue;
      o[f.key] = f.kind === 'num' ? Number(f.def) : f.def != null ? String(f.def) : '';
    }
  }
  return o;
}

function ensureDemographicsEditorBuilt() {
  if (_demographicsEditorDomBuilt) return;
  const mount = document.getElementById('dmDemographicsMount');
  if (!mount) return;
  _demographicsEditorDomBuilt = true;
  const parts = [];
  for (const g of DEMO_EDITOR_FIELD_GROUPS) {
    parts.push(\`<div class="exec-editor-section"><h3>\${g.title}</h3><div class="\${g.gridClass || 'exec-editor-grid3'}">\`);
    for (const f of g.fields) {
      const rtl = f.rtl ? ' dir="rtl"' : '';
      const ph = f.ph != null ? String(f.ph).replace(/"/g, '&quot;') : '';
      const rows = f.rows || 3;
      if (f.kind === 'area') {
        parts.push(
          \`<div class="form-group"><label class="form-label">\${f.lbl}</label><textarea class="form-input" id="\${f.id}" rows="\${rows}"\${rtl} placeholder="\${ph}"></textarea></div>\`
        );
      } else if (f.kind === 'num') {
        parts.push(
          \`<div class="form-group"><label class="form-label">\${f.lbl}</label><input class="form-input" id="\${f.id}" type="number" step="any" placeholder="\${ph}"></div>\`
        );
      } else {
        parts.push(
          \`<div class="form-group"><label class="form-label">\${f.lbl}</label><input class="form-input" id="\${f.id}"\${rtl} placeholder="\${ph}"></div>\`
        );
      }
    }
    parts.push('</div></div>');
  }
  mount.innerHTML = parts.join('');
}

function mergeDemographicsOverrides() {
  const defs = getDemographicsDefaultOverrides();
  let stored = {};
  try {
    const raw = localStorage.getItem(DEMOGRAPHICS_OVERRIDES_STORAGE_KEY);
    if (raw) stored = JSON.parse(raw) || {};
  } catch (_) {}
  return Object.assign({}, defs, stored);
}

function dmValEqualsDef(f, rawTrim, defStr) {
  if (f.kind === 'num') {
    const n = Number(rawTrim);
    if (Number.isNaN(n)) return true;
    return n === Number(defStr);
  }
  return rawTrim === defStr;
}

function gatherDemographicsOverridesFromForm() {
  const defs = getDemographicsDefaultOverrides();
  const out = {};
  for (const g of DEMO_EDITOR_FIELD_GROUPS) {
    for (const f of g.fields) {
      if (!f.key) continue;
      const el = document.getElementById(f.id);
      if (!el) continue;
      const rawTrim = el.value.trim();
      const defStr = defs[f.key] != null ? String(defs[f.key]) : '';
      if (rawTrim === '' || dmValEqualsDef(f, rawTrim, defStr)) continue;
      if (f.kind === 'num') {
        const n = Number(rawTrim);
        if (!Number.isNaN(n)) out[f.key] = n;
      } else {
        out[f.key] = rawTrim;
      }
    }
  }
  return out;
}

function applyDemographicsOverridesToForm(data) {
  for (const g of DEMO_EDITOR_FIELD_GROUPS) {
    for (const f of g.fields) {
      if (!f.key) continue;
      const el = document.getElementById(f.id);
      if (!el) continue;
      const val = data[f.key];
      el.value = val != null && val !== '' ? String(val) : '';
    }
  }
}

function loadDemographicsEditorForm() {
  if (!document.getElementById('dmDemographicsMount')) return;
  ensureDemographicsEditorBuilt();
  applyDemographicsOverridesToForm(mergeDemographicsOverrides());
}

function saveDemographicsOverridesFromForm() {
  const payload = gatherDemographicsOverridesFromForm();
  try {
    localStorage.setItem(DEMOGRAPHICS_OVERRIDES_STORAGE_KEY, JSON.stringify(payload));
  } catch (_) {
    toast('Could not save (storage blocked).', 'error');
    return;
  }
  addAuditEntry('UPDATE', 'Demographics overrides', 'Customer Demographics content saved to localStorage');
  notifyCustomerDashboardOverrides('demographics-overrides-updated');
  toast('Saved. Customer dashboard will update if it is open (same site).', 'success');
}

function resetDemographicsOverrides() {
  try {
    localStorage.removeItem(DEMOGRAPHICS_OVERRIDES_STORAGE_KEY);
  } catch (_) {}
  loadDemographicsEditorForm();
  addAuditEntry('UPDATE', 'Demographics overrides', 'Reset to defaults');
  notifyCustomerDashboardOverrides('demographics-overrides-updated');
  toast('Demographics overrides cleared.', 'info');
}

function dfFormAttr(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;');
}

function dfAddOptionRow(si) {
  const tb = document.getElementById('dfOptBody_' + si);
  if (!tb) return;
  const j = tb.querySelectorAll('tr').length;
  const tr = document.createElement('tr');
  tr.innerHTML = \`<td><input class="form-input df-opt-val" value="" placeholder="stored value"></td>
    <td><input class="form-input df-opt-en" value="" placeholder="English label"></td>
    <td><input class="form-input df-opt-ar" value="" placeholder="Arabic" dir="rtl"></td>
    <td><button type="button" class="btn btn-secondary btn-sm" onclick="dfRemoveOptionRow(this)">Remove</button></td>\`;
  tb.appendChild(tr);
}

function dfRemoveOptionRow(btn) {
  const tr = btn && btn.closest('tr');
  if (tr) tr.remove();
}

function loadDashboardFiltersEditor() {
  const mount = document.getElementById('dfEditorMount');
  if (!mount) return;
  const cfg = admGetFilterBarConfig();
  const cards = cfg.filters
    .map((f, si) => {
      const opts = (f.options || [])
        .map(
          (o) =>
            \`<tr>
          <td><input class="form-input df-opt-val" value="\${dfFormAttr(o.value)}"></td>
          <td><input class="form-input df-opt-en" value="\${dfFormAttr(o.labelEn)}"></td>
          <td><input class="form-input df-opt-ar" value="\${dfFormAttr(o.labelAr)}" dir="rtl"></td>
          <td><button type="button" class="btn btn-secondary btn-sm" onclick="dfRemoveOptionRow(this)">Remove</button></td>
        </tr>\`
        )
        .join('');
      const keyNote = \`<p class="exec-editor-hint">Fixed key: <code>\${dfFormAttr(f.key)}</code></p>\`;
      return \`
    <div class="exec-editor-section" style="margin-bottom:16px;border:1px solid var(--border2);border-radius:12px;padding:14px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px">
        <h3 style="margin:0">Filter \${si + 1}</h3>
        <button type="button" class="btn btn-secondary btn-sm" onclick="dfAddOptionRow(\${si})">Add option</button>
      </div>
      \${keyNote}
      <div class="exec-editor-grid2" style="margin-bottom:12px">
        <div class="form-group"><label class="form-label">Toolbar label EN</label><input class="form-input" id="dfLblEn_\${si}" value="\${dfFormAttr(f.labelEn)}"></div>
        <div class="form-group"><label class="form-label">Toolbar label AR</label><input class="form-input" id="dfLblAr_\${si}" value="\${dfFormAttr(f.labelAr)}" dir="rtl"></div>
        <div class="form-group"><label class="form-label">&quot;All&quot; stored value</label><input class="form-input" id="dfAllV_\${si}" value="\${dfFormAttr(f.allValue)}"></div>
        <div class="form-group"><label class="form-label">&quot;All&quot; label EN</label><input class="form-input" id="dfAllLe_\${si}" value="\${dfFormAttr(f.allLabelEn)}"></div>
        <div class="form-group"><label class="form-label">&quot;All&quot; label AR</label><input class="form-input" id="dfAllLa_\${si}" value="\${dfFormAttr(f.allLabelAr)}" dir="rtl"></div>
      </div>
      <h4 style="margin:8px 0">Options</h4>
      <div style="overflow:auto">
      <table class="data-table" style="width:100%;font-size:12px"><thead><tr><th>Value</th><th>English</th><th>Arabic</th><th></th></tr></thead>
      <tbody id="dfOptBody_\${si}">\${opts}</tbody></table></div>
    </div>\`;
    })
    .join('');
  mount.innerHTML =
    '<p class="exec-editor-hint">Eight filters with fixed keys and order. Add as many option rows as you need. Branch option <b>values</b> must stay Riyadh/Jeddah/Dammam (or other keys present in branch data) so scores stay consistent.</p>' +
    cards;
}

function dashboardFiltersGatherNormalized() {
  const baseDef = admDefaultFilterBarConfig();
  const cfg = admGetFilterBarConfig();
  const merged = cfg.filters.map((f, si) => {
    const gv = (id) => String(document.getElementById(id)?.value ?? '').trim();
    const allValue = gv('dfAllV_' + si) || baseDef.filters[si].allValue;
    const labelEn = gv('dfLblEn_' + si) || baseDef.filters[si].labelEn;
    const labelAr = gv('dfLblAr_' + si) || baseDef.filters[si].labelAr;
    const allLabelEn = gv('dfAllLe_' + si) || baseDef.filters[si].allLabelEn;
    const allLabelAr = gv('dfAllLa_' + si) || baseDef.filters[si].allLabelAr;
    const tb = document.getElementById('dfOptBody_' + si);
    const opts = [];
    if (tb) {
      tb.querySelectorAll('tr').forEach((tr) => {
        const v = tr.querySelector('.df-opt-val')?.value?.trim() ?? '';
        if (!v) return;
        const en = (tr.querySelector('.df-opt-en')?.value ?? '').trim() || v;
        const ar = (tr.querySelector('.df-opt-ar')?.value ?? '').trim() || en;
        opts.push({ value: v, labelEn: en, labelAr: ar });
      });
    }
    const outFilter = Object.assign({}, baseDef.filters[si], f, {
      key: baseDef.filters[si].key,
      labelEn,
      labelAr,
      allValue,
      allLabelEn,
      allLabelAr,
      options: opts.length ? opts : baseDef.filters[si].options
    });
    return outFilter;
  });
  return admNormalizeFilterBarConfig({ filters: merged });
}

function saveDashboardFiltersFromForm() {
  const payload = dashboardFiltersGatherNormalized();
  try {
    localStorage.setItem(FILTER_BAR_STORAGE_KEY, JSON.stringify(payload));
  } catch (_) {
    toast('Could not save (storage blocked).', 'error');
    return;
  }
  admAfterDashboardFiltersSaved();
  addAuditEntry('UPDATE', 'Dashboard filters config', 'Customer toolbar filters saved');
  toast('Dashboard filters saved. Reloaded admin filter strips and segment sample.', 'success');
}

function resetDashboardFiltersToDefaults() {
  try {
    localStorage.removeItem(FILTER_BAR_STORAGE_KEY);
  } catch (_) {}
  loadDashboardFiltersEditor();
  admAfterDashboardFiltersSaved();
  addAuditEntry('UPDATE', 'Dashboard filters config', 'Reset bundled defaults');
  toast('Dashboard filters restored to defaults.', 'info');
}

function openToolbarFilterLabelsModal() {
  const mount = document.getElementById('toolbarFilterLabelsMount');
  if (!mount) return;
  const cfg = admGetFilterBarConfig();
  mount.innerHTML = cfg.filters
    .map((f, si) => {
      const keyEsc = dfFormAttr(f.key);
      return \`
    <div class="exec-editor-section" style="margin-bottom:12px;padding:12px 14px;border:1px solid var(--border2);border-radius:10px">
      <div style="font-size:11px;color:var(--text-dim);margin-bottom:10px">Filter \${si + 1} · <code>\${keyEsc}</code></div>
      <div class="exec-editor-grid2">
        <div class="form-group"><label class="form-label">Toolbar label EN</label><input class="form-input" id="tblLblEn_\${si}" value="\${dfFormAttr(f.labelEn)}"></div>
        <div class="form-group"><label class="form-label">Toolbar label AR</label><input class="form-input" id="tblLblAr_\${si}" value="\${dfFormAttr(f.labelAr)}" dir="rtl"></div>
      </div>
    </div>\`;
    })
    .join('');
  openModal('toolbarFilterLabelsModal');
}

function saveToolbarFilterLabelsFromModal() {
  const base = admGetFilterBarConfig();
  const merged = base.filters.map((f, si) => {
    const labelEn = String(document.getElementById('tblLblEn_' + si)?.value ?? '').trim() || f.labelEn;
    const labelAr = String(document.getElementById('tblLblAr_' + si)?.value ?? '').trim() || f.labelAr;
    return Object.assign({}, f, { labelEn, labelAr });
  });
  const payload = admNormalizeFilterBarConfig({ filters: merged });
  try {
    localStorage.setItem(FILTER_BAR_STORAGE_KEY, JSON.stringify(payload));
  } catch (_) {
    toast('Could not save (storage blocked).', 'error');
    return;
  }
  closeModalById('toolbarFilterLabelsModal');
  admAfterDashboardFiltersSaved();
  addAuditEntry('UPDATE', 'Dashboard filters config', 'Toolbar filter labels (EN/AR) updated');
  toast('Filter names saved. Customer dashboard and admin strips updated.', 'success');
}

const CUSTOMER_PATTERNS_OVERRIDES_STORAGE_KEY = 'roshd_customer_patterns_overrides';
const CP_EDITOR_FIELDS = [
  { id:'cp_titleEn', key:'titleEn', lbl:'Panel title EN', def:'Customer Pattern View' },
  { id:'cp_titleAr', key:'titleAr', lbl:'Panel title AR', def:'عرض أنماط العملاء', rtl:true },
  { id:'cp_subEn', key:'subEn', lbl:'Panel subtitle EN', def:'Distribution charts respect Branch and all demographic filters in the toolbar' },
  { id:'cp_subAr', key:'subAr', lbl:'Panel subtitle AR', def:'مخططات التوزيع تلتزم بمرشّح الفرع وكل مرشّحات الديموغرافيا في شريط الأدوات', rtl:true },
  { id:'cp_summaryHasDataEn', key:'summaryHasDataEn', lbl:'Summary when data EN (use %s for plural s)', def:'customer%s in cohort (updates with Branch & filters)' },
  { id:'cp_summaryHasDataAr', key:'summaryHasDataAr', lbl:'Summary when data AR', def:'عميلًا في المجموعة (يتحدَّث مع الفرع والمرشّحات)', rtl:true },
  { id:'cp_summaryNoDataEn', key:'summaryNoDataEn', lbl:'Summary empty EN', def:'No customers match Branch and filters · widen selections to populate charts.' },
  { id:'cp_summaryNoDataAr', key:'summaryNoDataAr', lbl:'Summary empty AR', def:'لا يوجد عميل مطابق للفرع والمرشّحات · وسّع الاختيار لملء المخططات.', rtl:true },
  { id:'cp_emptyDashEn', key:'emptyDashEn', lbl:'Chart empty EN', def:'No chart data · adjust Branch filter or demographics.' },
  { id:'cp_emptyDashAr', key:'emptyDashAr', lbl:'Chart empty AR', def:'لا بيانات للمخطّط · عدِّل مرشّح الفرع أو الديموغرافيا.', rtl:true },
  { id:'cp_legendCohortEn', key:'legendCohortEn', lbl:'Legend cohort EN', def:'Selected cohort (Branch filter)' },
  { id:'cp_legendCohortAr', key:'legendCohortAr', lbl:'Legend cohort AR', def:'مجموعة العرض (الفرع الحالي)', rtl:true },
  { id:'cp_legendBenchEn', key:'legendBenchEn', lbl:'Legend benchmark EN', def:'All branches · same demographics' },
  { id:'cp_legendBenchAr', key:'legendBenchAr', lbl:'Legend benchmark AR', def:'جميع الفروع · نفس الديموغرافيا', rtl:true },
  { id:'cp_dimQualityEn', key:'dimQualityEn', lbl:'Dimension: Quality EN', def:'Quality' },
  { id:'cp_dimQualityAr', key:'dimQualityAr', lbl:'Dimension: Quality AR', def:'الجودة', rtl:true },
  { id:'cp_dimCommunicationEn', key:'dimCommunicationEn', lbl:'Dimension: Communication EN', def:'Communication' },
  { id:'cp_dimCommunicationAr', key:'dimCommunicationAr', lbl:'Dimension: Communication AR', def:'التواصل', rtl:true },
  { id:'cp_dimPriceEn', key:'dimPriceEn', lbl:'Dimension: Price EN', def:'Price' },
  { id:'cp_dimPriceAr', key:'dimPriceAr', lbl:'Dimension: Price AR', def:'السعر', rtl:true },
  { id:'cp_dimSpeedEn', key:'dimSpeedEn', lbl:'Dimension: Speed EN', def:'Speed' },
  { id:'cp_dimSpeedAr', key:'dimSpeedAr', lbl:'Dimension: Speed AR', def:'السرعة', rtl:true },
  { id:'cp_dimSatisfactionEn', key:'dimSatisfactionEn', lbl:'Dimension: Satisfaction EN', def:'Satisfaction' },
  { id:'cp_dimSatisfactionAr', key:'dimSatisfactionAr', lbl:'Dimension: Satisfaction AR', def:'الرضا', rtl:true },
  { id:'cp_dimCardSubEn', key:'dimCardSubEn', lbl:'Dimension card subtitle EN', def:'Overlapping bell-shaped densities (Gaussian kernel)' },
  { id:'cp_dimCardSubAr', key:'dimCardSubAr', lbl:'Dimension card subtitle AR', def:'منحنيان متداخلان (تنعيم نواة غوسية)', rtl:true },
  { id:'cp_cohortAvgLblEn', key:'cohortAvgLblEn', lbl:'Cohort average label EN', def:'Cohort average (μ)' },
  { id:'cp_cohortAvgLblAr', key:'cohortAvgLblAr', lbl:'Cohort average label AR', def:'متوسط المجموعة (μ)', rtl:true },
  { id:'cp_benchAvgLblEn', key:'benchAvgLblEn', lbl:'Benchmark average label EN', def:'Benchmark average (μ)' },
  { id:'cp_benchAvgLblAr', key:'benchAvgLblAr', lbl:'Benchmark average label AR', def:'متوسط المرجع (μ)', rtl:true },
  { id:'cp_probLblEn', key:'probLblEn', lbl:'Probability label EN', def:'P(≥3)' },
  { id:'cp_probLblAr', key:'probLblAr', lbl:'Probability label AR', def:'احتمال ≥3', rtl:true },
  { id:'cp_cohortMeanPassEn', key:'cohortMeanPassEn', lbl:'Cohort mean passes EN', def:'Cohort mean passes' },
  { id:'cp_cohortMeanPassAr', key:'cohortMeanPassAr', lbl:'Cohort mean passes AR', def:'متوسط اجتيازات المجموعة', rtl:true },
  { id:'cp_benchMeanPassEn', key:'benchMeanPassEn', lbl:'Benchmark mean passes EN', def:'Benchmark mean passes' },
  { id:'cp_benchMeanPassAr', key:'benchMeanPassAr', lbl:'Benchmark mean passes AR', def:'متوسط اجتيازات المرجع', rtl:true },
  { id:'cp_passCardHeadEn', key:'passCardHeadEn', lbl:'Aggregate card title EN', def:'Aggregate passes · kernel density' },
  { id:'cp_passCardHeadAr', key:'passCardHeadAr', lbl:'Aggregate card title AR', def:'مجموع الاجتيازات · كثافة نواة', rtl:true },
  { id:'cp_passCardSubEn', key:'passCardSubEn', lbl:'Aggregate card subtitle EN', def:'How many CX dimensions reach ≥ 3 per customer — smoothed like the reference overlays' },
  { id:'cp_passCardSubAr', key:'passCardSubAr', lbl:'Aggregate card subtitle AR', def:'كم بُعدًا من أبعاد التجربة يحقق ≥3 لكل عميل — بتنعيم شبيه بالطبقات في المرجع', rtl:true },
  { id:'cp_passMetaEn', key:'passMetaEn', lbl:'Aggregate meta lead EN', def:'Mean passes / customer' },
  { id:'cp_passMetaAr', key:'passMetaAr', lbl:'Aggregate meta lead AR', def:'متوسط الاجتيازات للعميل', rtl:true },
  { id:'cp_passMetaTailEn', key:'passMetaTailEn', lbl:'Aggregate meta tail EN', def:'(max 5)' },
  { id:'cp_passMetaTailAr', key:'passMetaTailAr', lbl:'Aggregate meta tail AR', def:'(أقصى ٥)', rtl:true },
  { id:'cp_riskHighEn', key:'riskHighEn', lbl:'Risk high EN', def:'High' },
  { id:'cp_riskHighAr', key:'riskHighAr', lbl:'Risk high AR', def:'عالٍ', rtl:true },
  { id:'cp_riskMediumEn', key:'riskMediumEn', lbl:'Risk medium EN', def:'Medium' },
  { id:'cp_riskMediumAr', key:'riskMediumAr', lbl:'Risk medium AR', def:'متوسط', rtl:true },
  { id:'cp_riskLowEn', key:'riskLowEn', lbl:'Risk low EN', def:'Low' },
  { id:'cp_riskLowAr', key:'riskLowAr', lbl:'Risk low AR', def:'منخفض', rtl:true },
  { id:'cp_riskHeadEn', key:'riskHeadEn', lbl:'Risk card title EN', def:'Risk tier mix' },
  { id:'cp_riskHeadAr', key:'riskHeadAr', lbl:'Risk card title AR', def:'مزيج خطر الانقطاع', rtl:true },
  { id:'cp_riskSubEn', key:'riskSubEn', lbl:'Risk card subtitle EN', def:'Modeled churn-risk labels · same cohort as Branch filter' },
  { id:'cp_riskSubAr', key:'riskSubAr', lbl:'Risk card subtitle AR', def:'وسوم مخاطرة مركَّبة · نفس مجموعة مرشّح الفرع', rtl:true },
];
let _cpEditorBuilt = false;

function getCustomerPatternsDefaultOverrides() {
  const o = {};
  CP_EDITOR_FIELDS.forEach(f => { o[f.key] = f.def; });
  return o;
}
function ensureCustomerPatternsEditorBuilt() {
  if (_cpEditorBuilt) return;
  const mount = document.getElementById('cpMount');
  if (!mount) return;
  _cpEditorBuilt = true;
  const cells = CP_EDITOR_FIELDS.map(f => {
    const rtl = f.rtl ? ' dir="rtl"' : '';
    return \`<div class="form-group"><label class="form-label">\${f.lbl}</label><input class="form-input" id="\${f.id}"\${rtl}></div>\`;
  }).join('');
  mount.innerHTML = \`<div class="exec-editor-section"><h3>Editable text keys</h3><div class="exec-editor-grid2">\${cells}</div></div>\`;
}
function mergeCustomerPatternsOverrides() {
  const defs = getCustomerPatternsDefaultOverrides();
  let stored = {};
  try {
    const raw = localStorage.getItem(CUSTOMER_PATTERNS_OVERRIDES_STORAGE_KEY);
    if (raw) stored = JSON.parse(raw) || {};
  } catch (_) {}
  return Object.assign({}, defs, stored);
}
function applyCustomerPatternsOverridesToForm(data) {
  CP_EDITOR_FIELDS.forEach(f => {
    const el = document.getElementById(f.id);
    if (el) el.value = data[f.key] != null ? String(data[f.key]) : '';
  });
}
function gatherCustomerPatternsOverridesFromForm() {
  const defs = getCustomerPatternsDefaultOverrides();
  const out = {};
  CP_EDITOR_FIELDS.forEach(f => {
    const el = document.getElementById(f.id);
    if (!el) return;
    const v = el.value.trim();
    if (v === '' || v === String(defs[f.key])) return;
    out[f.key] = v;
  });
  return out;
}
function loadCustomerPatternsEditorForm() {
  if (!document.getElementById('cpMount')) return;
  ensureCustomerPatternsEditorBuilt();
  applyCustomerPatternsOverridesToForm(mergeCustomerPatternsOverrides());
}
function saveCustomerPatternsOverridesFromForm() {
  const payload = gatherCustomerPatternsOverridesFromForm();
  try {
    localStorage.setItem(CUSTOMER_PATTERNS_OVERRIDES_STORAGE_KEY, JSON.stringify(payload));
  } catch (_) {
    toast('Could not save (storage blocked).', 'error');
    return;
  }
  addAuditEntry('UPDATE', 'Customer Patterns overrides', 'Customer Patterns content saved to localStorage');
  notifyCustomerDashboardOverrides('customer-patterns-overrides-updated');
  toast('Saved. Customer dashboard will update if it is open (same site).', 'success');
}
function resetCustomerPatternsOverrides() {
  try {
    localStorage.removeItem(CUSTOMER_PATTERNS_OVERRIDES_STORAGE_KEY);
  } catch (_) {}
  loadCustomerPatternsEditorForm();
  addAuditEntry('UPDATE', 'Customer Patterns overrides', 'Reset to defaults');
  notifyCustomerDashboardOverrides('customer-patterns-overrides-updated');
  toast('Customer Patterns overrides cleared.', 'info');
}

const QUESTIONNAIRE_OVERRIDES_STORAGE_KEY = 'roshd_questionnaire_overrides';
let _qnDefaultSections = [];
let _qnSections = [];

async function fetchDefaultQuestionnairePanelHtml() {
  try {
    const txt = await fetchCustomerDashboardHtmlBundle();
    if (!txt) throw new Error('fetch failed');
    const doc = new DOMParser().parseFromString(txt, 'text/html');
    const panel = doc.getElementById('db-panel-questionnaire');
    return panel ? panel.innerHTML.trim() : '';
  } catch (_) {
    return '';
  }
}

function qnExtractSectionsFromHtml(innerHtml) {
  const wrap = document.createElement('div');
  wrap.innerHTML = innerHtml || '';
  const sections = [];
  wrap.querySelectorAll('.db-q-items-inner .db-q-section').forEach(sec => {
    const topicEn = (sec.querySelector('.db-q-section-head .en')?.textContent || '').trim();
    const topicAr = (sec.querySelector('.db-q-section-head .ar')?.textContent || '').trim();
    const questions = [];
    sec.querySelectorAll('.db-q-lines > li').forEach(li => {
      questions.push({
        code: (li.querySelector('.db-q-tag')?.textContent || '').trim(),
        en: (li.querySelector('.db-q-lines-txt .en')?.textContent || '').trim(),
        ar: (li.querySelector('.db-q-lines-txt .ar')?.textContent || '').trim(),
      });
    });
    sections.push({ topicEn, topicAr, questions });
  });
  return sections;
}

function qnCloneSections(sections) {
  return JSON.parse(JSON.stringify(sections || []));
}

function qnEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function qnRenderBuilder() {
  const mount = document.getElementById('qnBuilderMount');
  if (!mount) return;
  const rows = _qnSections.map((sec, si) => {
    const qRows = (sec.questions || []).map((q, qi) => {
      return \`<div class="exec-editor-section" style="margin:10px 0;border:1px solid var(--border2);border-radius:10px;padding:10px">
        <div class="exec-editor-grid3">
          <div class="form-group"><label class="form-label">Code</label><input class="form-input" value="\${qnEsc(q.code)}" oninput="qnSetQuestionField(\${si},\${qi},'code',this.value)"></div>
          <div class="form-group"><label class="form-label">Question EN</label><input class="form-input" value="\${qnEsc(q.en)}" oninput="qnSetQuestionField(\${si},\${qi},'en',this.value)"></div>
          <div class="form-group"><label class="form-label">Question AR</label><input class="form-input" dir="rtl" value="\${qnEsc(q.ar)}" oninput="qnSetQuestionField(\${si},\${qi},'ar',this.value)"></div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
          <button type="button" class="btn btn-secondary btn-sm" onclick="qnRemoveQuestion(\${si},\${qi})">Remove question</button>
        </div>
      </div>\`;
    }).join('');
    return \`<div class="exec-editor-section" style="border:1px solid var(--border2);border-radius:12px;padding:12px;margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px">
        <h3 style="margin:0">Topic \${si + 1}</h3>
        <div style="display:flex;gap:8px">
          <button type="button" class="btn btn-secondary btn-sm" onclick="qnAddQuestion(\${si})">Add question</button>
          <button type="button" class="btn btn-secondary btn-sm" onclick="qnRemoveSection(\${si})">Remove topic</button>
        </div>
      </div>
      <div class="exec-editor-grid2">
        <div class="form-group"><label class="form-label">Topic name EN</label><input class="form-input" value="\${qnEsc(sec.topicEn)}" oninput="qnSetSectionField(\${si},'topicEn',this.value)"></div>
        <div class="form-group"><label class="form-label">Topic name AR</label><input class="form-input" dir="rtl" value="\${qnEsc(sec.topicAr)}" oninput="qnSetSectionField(\${si},'topicAr',this.value)"></div>
      </div>
      \${qRows || '<div class="exec-editor-hint">No questions yet.</div>'}
    </div>\`;
  }).join('');
  mount.innerHTML = rows || '<div class="exec-editor-hint">No topics yet. Click "Add topic".</div>';
}

function qnSetSectionField(si, key, value) {
  if (!_qnSections[si]) return;
  _qnSections[si][key] = value;
}
function qnSetQuestionField(si, qi, key, value) {
  if (!_qnSections[si] || !_qnSections[si].questions || !_qnSections[si].questions[qi]) return;
  _qnSections[si].questions[qi][key] = value;
}
function qnAddSection() {
  _qnSections.push({ topicEn: 'New Topic', topicAr: 'موضوع جديد', questions: [{ code: 'N1', en: 'New question', ar: 'سؤال جديد' }] });
  qnRenderBuilder();
}
function qnRemoveSection(si) {
  _qnSections.splice(si, 1);
  qnRenderBuilder();
}
function qnAddQuestion(si) {
  if (!_qnSections[si]) return;
  if (!Array.isArray(_qnSections[si].questions)) _qnSections[si].questions = [];
  _qnSections[si].questions.push({ code: 'N' + (_qnSections[si].questions.length + 1), en: 'New question', ar: 'سؤال جديد' });
  qnRenderBuilder();
  setTimeout(() => {
    try {
      const secCards = document.querySelectorAll('#qnBuilderMount .exec-editor-section');
      const last = secCards && secCards[secCards.length - 1];
      if (last && typeof last.scrollIntoView === 'function') last.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (_) {}
  }, 0);
}
function qnAddQuestionGlobal() {
  if (!_qnSections.length) {
    _qnSections.push({ topicEn: 'New Topic', topicAr: 'موضوع جديد', questions: [] });
  }
  qnAddQuestion(_qnSections.length - 1);
}
function qnRemoveQuestion(si, qi) {
  if (!_qnSections[si] || !Array.isArray(_qnSections[si].questions)) return;
  _qnSections[si].questions.splice(qi, 1);
  qnRenderBuilder();
}

function readQuestionnaireStoredSections() {
  try {
    const raw = localStorage.getItem(QUESTIONNAIRE_OVERRIDES_STORAGE_KEY);
    if (!raw) return {};
    const o = JSON.parse(raw);
    if (!o || typeof o !== 'object') return {};
    return Array.isArray(o.sections) ? o.sections : null;
  } catch (_) {
    return null;
  }
}

async function loadQuestionnaireEditorForm(forceReloadDefaults) {
  const mount = document.getElementById('qnBuilderMount');
  if (!mount) return;
  if (!_qnDefaultSections.length || forceReloadDefaults) {
    const defHtml = await fetchDefaultQuestionnairePanelHtml();
    _qnDefaultSections = qnExtractSectionsFromHtml(defHtml);
    if (!_qnDefaultSections.length) {
      toast(
        defHtml
          ? 'Questionnaire panel HTML loaded but no sections were found (unexpected markup).'
          : 'Could not fetch customer-dashboard.html for Questionnaire/Pilot/Model editors. Ensure /customer-dashboard.html is deployed and reachable.',
        'error'
      );
    }
  }
  const storedSections = readQuestionnaireStoredSections();
  _qnSections = qnCloneSections(storedSections && storedSections.length ? storedSections : _qnDefaultSections);
  qnRenderBuilder();
}

async function loadQuestionnaireDefaultHtmlIntoEditor() {
  const defHtml = await fetchDefaultQuestionnairePanelHtml();
  if (!defHtml) {
    toast('Could not reload questionnaire defaults.', 'error');
    return;
  }
  _qnDefaultSections = qnExtractSectionsFromHtml(defHtml);
  _qnSections = qnCloneSections(_qnDefaultSections);
  qnRenderBuilder();
  toast('Questionnaire defaults loaded.', 'info');
}

function saveQuestionnaireOverridesFromForm() {
  const curr = JSON.stringify(_qnSections || []);
  const defs = JSON.stringify(_qnDefaultSections || []);
  const payload = curr !== defs ? { sections: qnCloneSections(_qnSections) } : {};
  try {
    localStorage.setItem(QUESTIONNAIRE_OVERRIDES_STORAGE_KEY, JSON.stringify(payload));
  } catch (_) {
    toast('Could not save (storage blocked).', 'error');
    return;
  }
  addAuditEntry('UPDATE', 'Questionnaire overrides', 'Customer Questionnaire labels saved to localStorage');
  notifyCustomerDashboardOverrides('questionnaire-overrides-updated');
  toast('Saved. Customer dashboard will update if it is open (same site).', 'success');
}

function resetQuestionnaireOverrides() {
  try {
    localStorage.removeItem(QUESTIONNAIRE_OVERRIDES_STORAGE_KEY);
  } catch (_) {}
  _qnSections = qnCloneSections(_qnDefaultSections);
  qnRenderBuilder();
  addAuditEntry('UPDATE', 'Questionnaire overrides', 'Reset to defaults');
  notifyCustomerDashboardOverrides('questionnaire-overrides-updated');
  toast('Questionnaire overrides cleared.', 'info');
}

const PILOT_ANALYSIS_OVERRIDES_STORAGE_KEY = 'roshd_pilot_analysis_overrides';
let _plDefaultPairs = [];
let _plDefaultValues = [];

async function fetchDefaultPilotAnalysisPanelHtml() {
  try {
    const txt = await fetchCustomerDashboardHtmlBundle();
    if (!txt) throw new Error('fetch failed');
    const doc = new DOMParser().parseFromString(txt, 'text/html');
    const panel = doc.getElementById('db-panel-pilot');
    return panel ? panel.innerHTML.trim() : '';
  } catch (_) {
    return '';
  }
}

function plExtractPairsFromHtml(innerHtml) {
  const wrap = document.createElement('div');
  wrap.innerHTML = innerHtml || '';
  const enSpans = Array.from(wrap.querySelectorAll('span.en'));
  const arSpans = Array.from(wrap.querySelectorAll('span.ar'));
  const n = Math.min(enSpans.length, arSpans.length);
  const out = [];
  for (let i = 0; i < n; i++) {
    const en = (enSpans[i].textContent || '').trim();
    const ar = (arSpans[i].textContent || '').trim();
    out.push({ key: String(i), label: en || ar || \`Pair \${i + 1}\`, en, ar });
  }
  return out;
}

function plExtractValueFieldsFromHtml(innerHtml) {
  const wrap = document.createElement('div');
  wrap.innerHTML = innerHtml || '';
  const nodes = Array.from(wrap.querySelectorAll('.db-pilot-alpha-val, .db-pilot-flow-svg text'));
  return nodes.map((el, i) => ({ key: String(i), label: (el.textContent || '').trim() || \`Value \${i + 1}\`, value: (el.textContent || '').trim() }));
}

function plEsc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function renderPilotAnalysisPairsEditor(pairs, stored, storedValues) {
  const mount = document.getElementById('plPairsMount');
  if (!mount) return;
  const rows = pairs.map((p, i) => {
    const sv = stored && stored[p.key] ? stored[p.key] : null;
    const en = sv && sv.en != null ? String(sv.en) : p.en;
    const ar = sv && sv.ar != null ? String(sv.ar) : p.ar;
    return \`<div class="exec-editor-section" style="margin-bottom:10px">
      <div class="exec-editor-hint" style="margin-bottom:8px"><b>#\${i + 1}</b> · \${plEsc(p.label)}</div>
      <div class="exec-editor-grid2">
        <div class="form-group"><label class="form-label">English</label><input class="form-input" id="plEn_\${i}" value="\${plEsc(en)}"></div>
        <div class="form-group"><label class="form-label">Arabic</label><input class="form-input" id="plAr_\${i}" dir="rtl" value="\${plEsc(ar)}"></div>
      </div>
    </div>\`;
  }).join('');
  mount.innerHTML = rows || '<div class="exec-editor-hint">No EN/AR label pairs found in Pilot Analysis panel.</div>';

  const vMount = document.getElementById('plValuesMount');
  if (!vMount) return;
  const vRows = _plDefaultValues.map((v, i) => {
    const vv = storedValues && storedValues[v.key] != null ? String(storedValues[v.key]) : v.value;
    return \`<div class="form-group" style="margin-bottom:8px">
      <label class="form-label">#\${i + 1} · \${plEsc(v.label)}</label>
      <input class="form-input" id="plVal_\${i}" value="\${plEsc(vv)}">
    </div>\`;
  }).join('');
  vMount.innerHTML = vRows || '<div class="exec-editor-hint">No value fields detected.</div>';
}

function readPilotAnalysisStored() {
  try {
    const raw = localStorage.getItem(PILOT_ANALYSIS_OVERRIDES_STORAGE_KEY);
    if (!raw) return { pairs: {}, values: {} };
    const o = JSON.parse(raw);
    if (!o || typeof o !== 'object') return { pairs: {}, values: {} };
    return {
      pairs: o.pairs && typeof o.pairs === 'object' ? o.pairs : {},
      values: o.values && typeof o.values === 'object' ? o.values : {}
    };
  } catch (_) {
    return { pairs: {}, values: {} };
  }
}

async function loadPilotAnalysisEditorForm(forceReloadDefaults) {
  if (!_plDefaultPairs.length || forceReloadDefaults) {
    const html = await fetchDefaultPilotAnalysisPanelHtml();
    _plDefaultPairs = plExtractPairsFromHtml(html);
    _plDefaultValues = plExtractValueFieldsFromHtml(html);
  }
  const stored = readPilotAnalysisStored();
  renderPilotAnalysisPairsEditor(_plDefaultPairs, stored.pairs, stored.values);
}

function savePilotAnalysisOverridesFromForm() {
  const pairs = {};
  _plDefaultPairs.forEach((p, i) => {
    const enEl = document.getElementById('plEn_' + i);
    const arEl = document.getElementById('plAr_' + i);
    if (!enEl || !arEl) return;
    const en = enEl.value.trim();
    const ar = arEl.value.trim();
    if (en === p.en && ar === p.ar) return;
    pairs[p.key] = { en, ar };
  });
  const values = {};
  _plDefaultValues.forEach((v, i) => {
    const el = document.getElementById('plVal_' + i);
    if (!el) return;
    const vv = el.value.trim();
    if (vv === v.value) return;
    values[v.key] = vv;
  });
  const payload = {};
  if (Object.keys(pairs).length) payload.pairs = pairs;
  if (Object.keys(values).length) payload.values = values;
  try {
    localStorage.setItem(PILOT_ANALYSIS_OVERRIDES_STORAGE_KEY, JSON.stringify(payload));
  } catch (_) {
    toast('Could not save (storage blocked).', 'error');
    return;
  }
  addAuditEntry('UPDATE', 'Pilot Analysis overrides', 'Customer Pilot Analysis labels saved to localStorage');
  notifyCustomerDashboardOverrides('pilot-analysis-overrides-updated');
  toast('Saved. Customer dashboard will update if it is open (same site).', 'success');
}

function resetPilotAnalysisOverrides() {
  try {
    localStorage.removeItem(PILOT_ANALYSIS_OVERRIDES_STORAGE_KEY);
  } catch (_) {}
  renderPilotAnalysisPairsEditor(_plDefaultPairs, {}, {});
  addAuditEntry('UPDATE', 'Pilot Analysis overrides', 'Reset to defaults');
  notifyCustomerDashboardOverrides('pilot-analysis-overrides-updated');
  toast('Pilot Analysis overrides cleared.', 'info');
}

const MODEL_QUALITY_OVERRIDES_STORAGE_KEY = 'roshd_model_quality_overrides';
let _mqDefaultPairs = [];
let _mqDefaultValues = [];
let _mqDefaultFlowBlocks = [];
let _mqFlowBlocks = [];

async function fetchDefaultModelQualityPanelHtml() {
  try {
    const txt = await fetchCustomerDashboardHtmlBundle();
    if (!txt) throw new Error('fetch failed');
    const doc = new DOMParser().parseFromString(txt, 'text/html');
    const panel = doc.getElementById('db-panel-model');
    return panel ? panel.innerHTML.trim() : '';
  } catch (_) {
    return '';
  }
}

function mqExtractPairsFromHtml(innerHtml) {
  const wrap = document.createElement('div');
  wrap.innerHTML = innerHtml || '';
  const enSpans = Array.from(wrap.querySelectorAll('span.en'));
  const arSpans = Array.from(wrap.querySelectorAll('span.ar'));
  const n = Math.min(enSpans.length, arSpans.length);
  const out = [];
  for (let i = 0; i < n; i++) {
    const en = (enSpans[i].textContent || '').trim();
    const ar = (arSpans[i].textContent || '').trim();
    out.push({ key: String(i), label: en || ar || \`Pair \${i + 1}\`, en, ar });
  }
  return out;
}

function mqExtractValuesFromHtml(innerHtml) {
  const wrap = document.createElement('div');
  wrap.innerHTML = innerHtml || '';
  const vals = Array.from(wrap.querySelectorAll('.db-model-metric-val')).map((el, i) => ({
    key: String(i),
    label: (el.textContent || '').trim() || \`Value \${i + 1}\`,
    value: (el.textContent || '').trim()
  }));
  return vals;
}

function mqExtractFlowBlocksFromHtml(innerHtml) {
  const wrap = document.createElement('div');
  wrap.innerHTML = innerHtml || '';
  const rows = [];
  wrap.querySelectorAll('.db-mq-construct-list .db-mq-ant').forEach((li) => {
    if (li.classList.contains('db-mq-ant--cx')) return;
    const nameEn = (li.querySelector('.db-mq-ant-text strong .en')?.textContent || '').trim();
    const nameAr = (li.querySelector('.db-mq-ant-text strong .ar')?.textContent || '').trim();
    const descEn = (li.querySelector('.db-mq-ant-text small .en')?.textContent || '').trim();
    const descAr = (li.querySelector('.db-mq-ant-text small .ar')?.textContent || '').trim();
    const qTxt = (li.querySelector('.db-mq-qty')?.textContent || '').trim();
    const qCount = Number.parseInt(qTxt, 10);
    rows.push({
      nameEn: nameEn || 'New Block',
      nameAr: nameAr || 'كتلة جديدة',
      descEn: descEn || '',
      descAr: descAr || '',
      qCount: Number.isFinite(qCount) && qCount > 0 ? qCount : 4,
    });
  });
  return rows.slice(0, 8);
}

function mqEsc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function readModelQualityStored() {
  try {
    const raw = localStorage.getItem(MODEL_QUALITY_OVERRIDES_STORAGE_KEY);
    if (!raw) return { pairs: {}, values: {}, flowBlocks: null };
    const o = JSON.parse(raw);
    if (!o || typeof o !== 'object') return { pairs: {}, values: {}, flowBlocks: null };
    return {
      pairs: o.pairs && typeof o.pairs === 'object' ? o.pairs : {},
      values: o.values && typeof o.values === 'object' ? o.values : {},
      flowBlocks: Array.isArray(o.flowBlocks) ? o.flowBlocks.slice(0, 8) : null,
    };
  } catch (_) {
    return { pairs: {}, values: {}, flowBlocks: null };
  }
}

function mqRenderFlowBlocksEditor() {
  const mount = document.getElementById('mqFlowBlocksMount');
  if (!mount) return;
  mount.innerHTML = (_mqFlowBlocks || [])
    .map((b, i) => {
      return \`<div class="exec-editor-section" style="border:1px solid var(--border2);border-radius:12px;padding:12px;margin-bottom:10px">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px">
          <div class="exec-editor-hint"><b>Block #\${i + 1}</b></div>
          <button type="button" class="btn btn-secondary btn-sm" onclick="mqRemoveFlowBlock(\${i})">Remove block</button>
        </div>
        <div class="exec-editor-grid2">
          <div class="form-group"><label class="form-label">Name (EN)</label><input class="form-input" value="\${mqEsc(b.nameEn || '')}" oninput="mqSetFlowBlockField(\${i},'nameEn',this.value)"></div>
          <div class="form-group"><label class="form-label">Name (AR)</label><input class="form-input" dir="rtl" value="\${mqEsc(b.nameAr || '')}" oninput="mqSetFlowBlockField(\${i},'nameAr',this.value)"></div>
          <div class="form-group"><label class="form-label">Description (EN)</label><input class="form-input" value="\${mqEsc(b.descEn || '')}" oninput="mqSetFlowBlockField(\${i},'descEn',this.value)"></div>
          <div class="form-group"><label class="form-label">Description (AR)</label><input class="form-input" dir="rtl" value="\${mqEsc(b.descAr || '')}" oninput="mqSetFlowBlockField(\${i},'descAr',this.value)"></div>
          <div class="form-group"><label class="form-label">Questions count</label><input class="form-input" type="number" min="1" max="20" value="\${mqEsc(String(Math.max(1, Number(b.qCount) || 1)))}" oninput="mqSetFlowBlockField(\${i},'qCount',this.value)"></div>
        </div>
      </div>\`;
    })
    .join('');
  if (!_mqFlowBlocks.length) {
    mount.innerHTML = '<div class="exec-editor-hint">No flow blocks. Click "Add block" to start.</div>';
  }
}

function mqSetFlowBlockField(i, key, value) {
  if (!_mqFlowBlocks[i]) return;
  if (key === 'qCount') {
    const n = Number.parseInt(String(value), 10);
    _mqFlowBlocks[i][key] = Number.isFinite(n) && n > 0 ? n : 1;
    return;
  }
  _mqFlowBlocks[i][key] = value;
}

function mqAddFlowBlock() {
  if (!Array.isArray(_mqFlowBlocks)) _mqFlowBlocks = [];
  if (_mqFlowBlocks.length >= 8) {
    toast('Maximum 8 blocks allowed.', 'info');
    return;
  }
  _mqFlowBlocks.push({
    nameEn: 'New Block',
    nameAr: 'كتلة جديدة',
    descEn: 'Describe this construct',
    descAr: 'وصف هذه الكتلة',
    qCount: 4,
  });
  mqRenderFlowBlocksEditor();
}

function mqRemoveFlowBlock(i) {
  if (!Array.isArray(_mqFlowBlocks) || !_mqFlowBlocks[i]) return;
  _mqFlowBlocks.splice(i, 1);
  mqRenderFlowBlocksEditor();
}

function renderModelQualityEditor(pairs, values, stored) {
  const pMount = document.getElementById('mqPairsMount');
  const vMount = document.getElementById('mqValuesMount');
  if (!pMount || !vMount) return;

  pMount.innerHTML = pairs.map((p, i) => {
    const sv = stored.pairs && stored.pairs[p.key] ? stored.pairs[p.key] : null;
    const en = sv && sv.en != null ? String(sv.en) : p.en;
    const ar = sv && sv.ar != null ? String(sv.ar) : p.ar;
    return \`<div class="exec-editor-section" style="margin-bottom:10px">
      <div class="exec-editor-hint" style="margin-bottom:8px"><b>#\${i + 1}</b> · \${mqEsc(p.label)}</div>
      <div class="exec-editor-grid2">
        <div class="form-group"><label class="form-label">English</label><input class="form-input" id="mqEn_\${i}" value="\${mqEsc(en)}"></div>
        <div class="form-group"><label class="form-label">Arabic</label><input class="form-input" id="mqAr_\${i}" dir="rtl" value="\${mqEsc(ar)}"></div>
      </div>
    </div>\`;
  }).join('') || '<div class="exec-editor-hint">No EN/AR pairs found.</div>';

  vMount.innerHTML = values.map((v, i) => {
    const vv = stored.values && stored.values[v.key] != null ? String(stored.values[v.key]) : v.value;
    return \`<div class="form-group" style="margin-bottom:8px">
      <label class="form-label">#\${i + 1} · \${mqEsc(v.label)}</label>
      <input class="form-input" id="mqVal_\${i}" value="\${mqEsc(vv)}">
    </div>\`;
  }).join('') || '<div class="exec-editor-hint">No value fields found.</div>';

  _mqFlowBlocks = Array.isArray(stored.flowBlocks) && stored.flowBlocks.length
    ? JSON.parse(JSON.stringify(stored.flowBlocks.slice(0, 8)))
    : JSON.parse(JSON.stringify(_mqDefaultFlowBlocks.slice(0, 8)));
  mqRenderFlowBlocksEditor();
}

async function loadModelQualityEditorForm(forceReloadDefaults) {
  if (!_mqDefaultPairs.length || forceReloadDefaults) {
    const html = await fetchDefaultModelQualityPanelHtml();
    _mqDefaultPairs = mqExtractPairsFromHtml(html);
    _mqDefaultValues = mqExtractValuesFromHtml(html);
    _mqDefaultFlowBlocks = mqExtractFlowBlocksFromHtml(html);
  }
  renderModelQualityEditor(_mqDefaultPairs, _mqDefaultValues, readModelQualityStored());
}

function saveModelQualityOverridesFromForm() {
  const pairs = {};
  _mqDefaultPairs.forEach((p, i) => {
    const enEl = document.getElementById('mqEn_' + i);
    const arEl = document.getElementById('mqAr_' + i);
    if (!enEl || !arEl) return;
    const en = enEl.value.trim();
    const ar = arEl.value.trim();
    if (en === p.en && ar === p.ar) return;
    pairs[p.key] = { en, ar };
  });
  const values = {};
  _mqDefaultValues.forEach((v, i) => {
    const el = document.getElementById('mqVal_' + i);
    if (!el) return;
    const vv = el.value.trim();
    if (vv === v.value) return;
    values[v.key] = vv;
  });
  const payload = {};
  if (Object.keys(pairs).length) payload.pairs = pairs;
  if (Object.keys(values).length) payload.values = values;
  const currFlow = JSON.stringify((_mqFlowBlocks || []).slice(0, 8));
  const defFlow = JSON.stringify((_mqDefaultFlowBlocks || []).slice(0, 8));
  if (currFlow !== defFlow) payload.flowBlocks = JSON.parse(currFlow);
  try {
    localStorage.setItem(MODEL_QUALITY_OVERRIDES_STORAGE_KEY, JSON.stringify(payload));
  } catch (_) {
    toast('Could not save (storage blocked).', 'error');
    return;
  }
  addAuditEntry('UPDATE', 'Model Quality overrides', 'Customer Model Quality labels/values/flow blocks saved to localStorage');
  notifyCustomerDashboardOverrides('model-quality-overrides-updated');
  toast('Saved. Customer dashboard will update if it is open (same site).', 'success');
}

function resetModelQualityOverrides() {
  try {
    localStorage.removeItem(MODEL_QUALITY_OVERRIDES_STORAGE_KEY);
  } catch (_) {}
  renderModelQualityEditor(_mqDefaultPairs, _mqDefaultValues, { pairs: {}, values: {}, flowBlocks: null });
  addAuditEntry('UPDATE', 'Model Quality overrides', 'Reset to defaults');
  notifyCustomerDashboardOverrides('model-quality-overrides-updated');
  toast('Model Quality overrides cleared.', 'info');
}

const ADMIN_MIRROR_DB_PANEL = {
};

const ADMIN_PREVIEW_DB_PANEL = {
  executive: 'executive',
  'cx-drivers': 'drivers',
  'units-performance': 'segments',
  demographics: 'demographics',
  'customer-patterns': 'customers',
  questionnaire: 'questionnaire',
  'pilot-analysis': 'pilot',
  'model-quality': 'model',
};

function resolveAdminCustomerEmbedBase() {
  return resolveCustomerDashboardHtmlUrl();
}

function embedCustomerDashboardMirror(panelAdminKey, forceReload) {
  if (!Object.prototype.hasOwnProperty.call(ADMIN_MIRROR_DB_PANEL, panelAdminKey)) return;
  const wrap = document.getElementById('panel-' + panelAdminKey);
  if (!wrap) return;
  const iframe = wrap.querySelector('iframe.admin-customer-dash-iframe');
  if (!iframe) return;
  if (iframe.dataset.mirrorLoaded === '1' && !forceReload) return;
  const qp = new URLSearchParams({
    adminEmbed: '1',
    dbPanel: ADMIN_MIRROR_DB_PANEL[panelAdminKey],
    lang: currentLang === 'ar' ? 'ar' : 'en',
  });
  iframe.src = resolveAdminCustomerEmbedBase() + '?' + qp.toString();
  iframe.dataset.mirrorLoaded = '1';
}

function reloadActiveCustomerMirrorIframe() {
  const activeNav = document.querySelector('.nav-item.active');
  const pk = activeNav && activeNav.getAttribute('data-panel');
  if (!pk || !Object.prototype.hasOwnProperty.call(ADMIN_MIRROR_DB_PANEL, pk)) return;
  const iframe = document.querySelector('#panel-' + pk + ' iframe.admin-customer-dash-iframe');
  if (iframe) iframe.dataset.mirrorLoaded = '';
  embedCustomerDashboardMirror(pk, true);
}

function openCustomerPreviewForActivePanel() {
  const activeNav = document.querySelector('.nav-item.active');
  const pk = activeNav && activeNav.getAttribute('data-panel');
  const dbPanel = pk ? ADMIN_PREVIEW_DB_PANEL[pk] : null;
  if (!dbPanel) {
    toast('No customer dashboard preview available for this tab.', 'info');
    return;
  }
  if (pk === 'executive') {
    try {
      localStorage.setItem('roshd_filters', JSON.stringify(getExecutiveFilterContext()));
    } catch (_) {}
  }
  const qp = new URLSearchParams({
    adminEmbed: '1',
    dbPanel,
    lang: currentLang === 'ar' ? 'ar' : 'en',
  });
  window.open(resolveAdminCustomerEmbedBase() + '?' + qp.toString(), '_blank');
}

function showPanel(id, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('panel-' + id);
  if (panel) panel.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  const navBtn = document.querySelector(\`[data-panel="\${id}"]\`) || btn;
  if (navBtn) navBtn.classList.add('active');
  const meta = I18N[currentLang].panelMeta[id] || PANEL_META[id] || {title:id, crumb:id};
  document.getElementById('topbarTitle').textContent = meta.title;
  document.getElementById('topbarCrumb').textContent = meta.crumb;
  closeSidebar();
  /* Lazy render */
  if (id === 'executive')       loadExecutiveEditorForm();
  if (id === 'cx-drivers')      loadCxDriversEditorForm();
  if (id === 'units-performance') loadUnitsPerformanceEditorForm();
  if (id === 'demographics')    loadDemographicsEditorForm();
  if (id === 'dashboard-filters') loadDashboardFiltersEditor();
  if (id === 'customer-patterns') loadCustomerPatternsEditorForm();
  if (id === 'questionnaire')   loadQuestionnaireEditorForm();
  if (id === 'pilot-analysis')  loadPilotAnalysisEditorForm();
  if (id === 'model-quality')   loadModelQualityEditorForm();
  if (Object.prototype.hasOwnProperty.call(ADMIN_MIRROR_DB_PANEL, id)) embedCustomerDashboardMirror(id);
  if (id === 'users')           renderUsersTable();
  if (id === 'branches')        renderBranchPanel();
  if (id === 'data')            renderDataPanel();
  if (id === 'reports')         renderReports();
  if (id === 'settings')        {}
  if (id === 'audit')           renderAuditLog();
}

/* ═══════════════════════════════════════════
   SIDEBAR MOBILE
═══════════════════════════════════════════ */
function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebarOverlay');
  const open = sb.classList.toggle('open');
  ov.classList.toggle('open', open);
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

/* ═══════════════════════════════════════════
   INIT ALL PANELS
═══════════════════════════════════════════ */
function initAllPanels() {
  loadExecutiveEditorForm();
  loadCxDriversEditorForm();
  loadUnitsPerformanceEditorForm();
  loadDemographicsEditorForm();
  loadDashboardFiltersEditor();
  loadCustomerPatternsEditorForm();
  loadQuestionnaireEditorForm();
  loadPilotAnalysisEditorForm();
  loadModelQualityEditorForm();
}

/* ═══════════════════════════════════════════
   OVERVIEW PANEL
═══════════════════════════════════════════ */
function refreshOverview() { renderOverview(); toast(tx('messages.refreshOverview'),'info'); }

function renderOverview() {
  if (!document.getElementById('overviewStats')) return;
  const ar = currentLang === 'ar';
  const branchName = (en, arName) => (ar ? arName : en);
  /* Stats */
  const stats = [
    {label: ar ? 'إجمالي المستخدمين' : 'Total Users', value: usersData.length, trend:'+12', trendDir:'up', accent:'var(--gold)',    iconBg:'var(--gold-dim)',   icon:'👥'},
    {label: ar ? 'المستخدمون النشطون' : 'Active Users', value: usersData.filter(u=>u.status==='active').length, trend:'+5', trendDir:'up', accent:'var(--green)', iconBg:'var(--green-dim)', icon:'✓'},
    {label: ar ? 'حجم العينة الكلي' : 'Total Sample N', value:'300', trend:'0', trendDir:'neutral', accent:'var(--blue)', iconBg:'var(--blue-dim)', icon:'📊'},
    {label: ar ? 'متوسط درجة CX' : 'Avg CX Score',  value:'76% (3.8)', trend:'+0.3', trendDir:'up', accent:'var(--purple)', iconBg:'var(--purple-dim)', icon:'⭐'},
    {label: ar ? 'قوة النموذج' : 'Model Power',   value:'72%',  trend:'+2%', trendDir:'up', accent:'var(--teal)',   iconBg:'var(--teal-dim)',   icon:'🧠'},
    {label: ar ? 'الفروع' : 'Branches',      value: branchesData.length, trend:'0', trendDir:'neutral', accent:'var(--amber)', iconBg:'var(--amber-dim)', icon:'🏢'},
  ];
  document.getElementById('overviewStats').innerHTML = stats.map(s =>
    \`<div class="stat-card" style="--accent:\${s.accent}">
      <div class="stat-head">
        <div class="stat-icon" style="background:\${s.iconBg}"><span style="font-size:18px">\${s.icon}</span></div>
        <span class="stat-trend \${s.trendDir}">\${s.trendDir==='up'?'↑':s.trendDir==='down'?'↓':'—'} \${s.trend}</span>
      </div>
      <div class="stat-value">\${s.value}</div>
      <div class="stat-label">\${s.label}</div>
    </div>\`
  ).join('');

  /* Branch scores */
  document.getElementById('branchScoresBars').innerHTML = ['Riyadh','Jeddah','Dammam'].map(b => {
    const d = branchOverrides[b]; const w = pct(d.score);
    return \`<div class="score-bar-row" style="margin-bottom:14px">
      <span class="score-bar-label">\${branchName(b, b==='Riyadh'?'الرياض':b==='Jeddah'?'جدة':'الدمام')}</span>
      <div class="score-bar-track"><div class="score-bar-fill" style="width:\${w}%;background:linear-gradient(90deg,\${scoreColor(d.score)},\${scoreColor(d.score)}cc)"></div></div>
      <span class="score-bar-val">\${formatScore(d.score)}</span>
    </div>\`;
  }).join('');

  /* Activity feed */
  document.getElementById('activityFeed').innerHTML = auditLog.slice(0,6).map(a => {
    const colors = {CREATE:'var(--green)',UPDATE:'var(--blue)',DELETE:'var(--red)',LOGIN:'var(--gold)',EXPORT:'var(--teal)',UPLOAD:'var(--purple)',OVERRIDE:'var(--amber)'};
    const icons  = {CREATE:'✚',UPDATE:'✎',DELETE:'✕',LOGIN:'→',EXPORT:'↓',UPLOAD:'↑',OVERRIDE:'◈'};
    return \`<div class="activity-item">
      <div class="activity-icon" style="background:\${colors[a.action]||'var(--text-dim)'}22;border:1px solid \${colors[a.action]||'var(--border2)'}44">
        <span style="font-size:14px;color:\${colors[a.action]||'var(--text-dim)'};font-weight:800">\${icons[a.action]||'·'}</span>
      </div>
      <div class="activity-content">
        <div class="activity-text"><b>\${trAuditResource(a.resource)}</b> — \${trAuditDetail(a.detail)}</div>
        <div class="activity-time">\${a.timestamp} · \${trAdminName(a.admin)}</div>
      </div>
    </div>\`;
  }).join('');

  /* Driver summary */
  const drivers = DRIVERS_DATA['All Branches'];
  document.getElementById('driverSummary').innerHTML = drivers.map(d => {
    const w = Math.min(100, Math.round(d.impact / 0.35 * 100));
    return \`<div class="score-bar-row" style="margin-bottom:12px">
      <span class="score-bar-label" style="width:130px">\${trDriverName(d.name)}</span>
      <div class="score-bar-track"><div class="score-bar-fill" style="width:\${w}%;background:\${d.name==='Speed'?'var(--red)':'linear-gradient(90deg,var(--gold),var(--gold-light))'}"></div></div>
      <span class="score-bar-val">\${impactPct(d.impact)}</span>
    </div>\`;
  }).join('');

  /* User segments */
  const roles = {};
  usersData.forEach(u => { roles[u.role] = (roles[u.role]||0)+1; });
  document.getElementById('userSegments').innerHTML = Object.entries(roles).map(([role,count]) => {
    const pct2 = Math.round(count/usersData.length*100);
    const clr = {admin:'var(--gold)',analyst:'var(--blue)',customer:'var(--green)'}[role]||'var(--text-dim)';
    return \`<div class="score-bar-row" style="margin-bottom:12px">
      <span class="score-bar-label" style="width:90px;text-transform:capitalize">\${tr('role', role)}</span>
      <div class="score-bar-track"><div class="score-bar-fill" style="width:\${pct2}%;background:\${clr}"></div></div>
      <span class="score-bar-val">\${count}</span>
    </div>\`;
  }).join('');

  /* System health */
  const health = [
    {name: ar ? 'خادم API' : 'API Server',      status: ar ? 'يعمل' : 'Operational', color:'var(--green)'},
    {name: ar ? 'قاعدة البيانات' : 'Database',        status: ar ? 'يعمل' : 'Operational', color:'var(--green)'},
    {name: ar ? 'محرك التحليلات' : 'Analytics Engine',status: ar ? 'يعمل' : 'Operational', color:'var(--green)'},
    {name: ar ? 'خدمة التصدير' : 'Export Service',  status: ar ? 'متدهور' : 'Degraded',    color:'var(--amber)'},
    {name: ar ? 'خدمة البريد' : 'Email Service',   status: ar ? 'يعمل' : 'Operational', color:'var(--green)'},
  ];
  document.getElementById('systemHealth').innerHTML = health.map(h =>
    \`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.04)">
      <span style="font-size:13px;font-weight:600;color:var(--text)">\${h.name}</span>
      <span class="badge" style="background:\${h.color}22;color:\${h.color};border-color:\${h.color}44">\${h.status}</span>
    </div>\`
  ).join('');
}

/* ═══════════════════════════════════════════
   ANALYTICS PANEL
═══════════════════════════════════════════ */
function renderAnalytics() {
  if (!document.getElementById('analyticsKpis')) return;
  const ar = currentLang === 'ar';
  const branch = document.getElementById('analyticsBranch')?.value || 'All Branches';
  const d = branchOverrides[branch] || branchOverrides['All Branches'];
  const drivers = (modelOverrides[branch] || modelOverrides['All Branches'] || []);

  /* KPIs */
  document.getElementById('analyticsKpis').innerHTML = [
    {label: ar ? 'درجة CX' : 'CX Score',      value:formatScore(d.score),    color:'var(--gold)',   icon:'⭐'},
    {label: ar ? 'قوة النموذج' : 'Model Power',   value:d.explanatory+'%',        color:'var(--blue)',   icon:'🧠'},
    {label: ar ? 'العامل الأعلى' : 'Top Driver',    value: ar ? (d.topAr || d.top) : d.top,                    color:'var(--green)',  icon:'🎯'},
    {label: ar ? 'حجم العينة' : 'Sample N',      value: d.n||300,               color:'var(--purple)', icon:'👥'},
  ].map(k =>
    \`<div class="stat-card" style="--accent:\${k.color}">
      <div class="stat-head"><div class="stat-icon" style="background:\${k.color}22"><span style="font-size:18px">\${k.icon}</span></div></div>
      <div class="stat-value">\${k.value}</div>
      <div class="stat-label">\${k.label}</div>
    </div>\`
  ).join('');

  /* Driver bars */
  document.getElementById('analyticsDriverBars').innerHTML = drivers.map(dr => {
    const w = Math.min(100, Math.round(dr.impact/0.35*100));
    return \`<div class="score-bar-row" style="margin-bottom:14px">
      <span class="score-bar-label">\${dr.name}</span>
      <div class="score-bar-track"><div class="score-bar-fill" style="width:\${w}%;background:\${dr.name==='Speed'?'var(--red)':'linear-gradient(90deg,var(--gold),var(--gold-light))'}"></div></div>
      <span class="score-bar-val">\${impactPct(dr.impact)}</span>
    </div>\`;
  }).join('');

  /* Branch comparison */
  document.getElementById('analyticsBranchComp').innerHTML = ['Riyadh','Jeddah','Dammam'].map(b => {
    const bd = branchOverrides[b]; const w = pct(bd.score);
    return \`<div class="score-bar-row" style="margin-bottom:14px">
      <span class="score-bar-label">\${b}</span>
      <div class="score-bar-track"><div class="score-bar-fill" style="width:\${w}%;background:linear-gradient(90deg,\${scoreColor(bd.score)},\${scoreColor(bd.score)}bb)"></div></div>
      <span class="score-bar-val">\${formatScore(bd.score)}</span>
    </div>\`;
  }).join('');

  /* Demo breakdown */
  const demos = [{label: ar ? 'ذكور' : 'Male',n:180},{label: ar ? 'إناث' : 'Female',n:120}];
  document.getElementById('analyticsDemoBreakdown').innerHTML =
    \`<div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-mute);margin-bottom:12px">\${ar ? 'توزيع الجنس' : 'Gender Split'}</div>\` +
    demos.map(item => {
      const w = Math.round(item.n/300*100);
      return \`<div class="score-bar-row" style="margin-bottom:12px">
        <span class="score-bar-label">\${item.label}</span>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:\${w}%"></div></div>
        <span class="score-bar-val">\${w}% (\${item.n})</span>
      </div>\`;
    }).join('');

  const ages = [{label: ar ? 'أقل من 25' : '<25',n:30},{label:'25–34',n:90},{label:'35–44',n:120},{label: ar ? '45+' : '45+',n:60}];
  document.getElementById('analyticsAgeBreakdown').innerHTML =
    \`<div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-mute);margin-bottom:12px">\${ar ? 'توزيع الأعمار' : 'Age Distribution'}</div>\` +
    ages.map(item => {
      const w = Math.round(item.n/300*100);
      return \`<div class="score-bar-row" style="margin-bottom:12px">
        <span class="score-bar-label">\${item.label}</span>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:\${w}%"></div></div>
        <span class="score-bar-val">\${w}% (\${item.n})</span>
      </div>\`;
    }).join('');
}

function exportAnalyticsReport() {
  toast('Analytics report generated and downloaded.','success');
  addAuditEntry('EXPORT','Analytics Report','Analytics overview exported');
}

/* ═══════════════════════════════════════════
   USERS PANEL
═══════════════════════════════════════════ */
let filteredUsers = [];

function filterUsers() {
  const q  = (document.getElementById('userSearch')?.value||'').toLowerCase();
  const role   = document.getElementById('userRoleFilter')?.value   || '';
  const status = document.getElementById('userStatusFilter')?.value || '';
  const branch = document.getElementById('userBranchFilter')?.value || '';
  filteredUsers = usersData.filter(u => {
    const fullName = \`\${u.firstName} \${u.lastName}\`.toLowerCase();
    const match = !q || fullName.includes(q) || u.email.toLowerCase().includes(q) || u.id.toLowerCase().includes(q);
    return match &&
      (!role   || u.role===role) &&
      (!status || u.status===status) &&
      (!branch || u.branch===branch);
  });
  userPage = 1;
  renderUsersTable();
}

function renderUsersTable() {
  filterUsers();
}

function renderUserTableWithData() {
  const ar = currentLang === 'ar';
  const tbody = document.getElementById('usersTbody');
  if (!tbody) return;
  const start = (userPage-1)*USER_PAGE_SIZE;
  const page  = filteredUsers.slice(start, start+USER_PAGE_SIZE);
  const statusBadge = {active:'badge-green', suspended:'badge-red', pending:'badge-amber'};
  const roleBadge   = {admin:'badge-gold', analyst:'badge-blue', customer:'badge-gray'};
  const avatarClass = {admin:'', analyst:'blue', customer:'green'};
  tbody.innerHTML = page.map(u =>
    \`<tr>
      <td><input type="checkbox" class="user-cb" value="\${u.id}" onchange="updateBulkButtons()"></td>
      <td><div class="user-cell">
        <div class="user-avatar \${avatarClass[u.role]||''}">\${u.firstName.charAt(0)}\${u.lastName.charAt(0)}</div>
        <div><div class="user-name">\${u.firstName} \${u.lastName}</div><div class="user-email">\${u.email}</div></div>
      </div></td>
      <td>\${tr('branch', u.branch)}</td>
      <td><span class="badge \${roleBadge[u.role]||'badge-gray'}">\${tr('role', u.role)}</span></td>
      <td><span class="badge \${statusBadge[u.status]||'badge-gray'}">\${tr('status', u.status)}</span></td>
      <td><span style="font-family:var(--font-mono);font-size:12px">\${u.loginCount}</span></td>
      <td><span style="font-family:var(--font-mono);font-size:11px;color:var(--text-dim)">\${u.lastLogin}</span></td>
      <td><div class="row-actions">
        <button class="btn btn-secondary btn-sm btn-icon" onclick="viewUser('\${u.id}')" title="\${ar?'عرض':'View'}">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
        <button class="btn btn-secondary btn-sm btn-icon" onclick="editUser('\${u.id}')" title="\${ar?'تعديل':'Edit'}">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="btn btn-sm btn-icon" onclick="toggleUserStatus('\${u.id}')" title="\${u.status==='active'?(ar?'إيقاف':'Suspend'):(ar?'تفعيل':'Activate')}" style="background:\${u.status==='active'?'var(--amber-dim)':'var(--green-dim)'};color:\${u.status==='active'?'#fcd34d':'#86efac'};border-color:\${u.status==='active'?'rgba(245,158,11,0.3)':'rgba(34,197,94,0.3)'}">
          \${u.status==='active'?'⏸':'▶'}
        </button>
        <button class="btn btn-danger btn-sm btn-icon" onclick="deleteUser('\${u.id}')" title="\${ar?'حذف':'Delete'}">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
        </button>
      </div></td>
    </tr>\`
  ).join('') || \`<tr><td colspan="8"><div class="empty-state"><div class="empty-icon">👤</div><div class="empty-title">\${ar?'لا يوجد مستخدمون':'No users found'}</div><div class="empty-desc">\${ar?'جرّب تغيير البحث أو الفلاتر.':'Try changing your search or filters.'}</div></div></td></tr>\`;

  const total = filteredUsers.length;
  const totalPages = Math.ceil(total/USER_PAGE_SIZE)||1;
  document.getElementById('usersPagination').innerHTML =
    \`<div class="pagination-info">\${ar?'عرض':'Showing'} \${Math.min(start+1,total)}–\${Math.min(start+USER_PAGE_SIZE,total)} \${ar?'من':'of'} \${total} \${ar?'مستخدم':'users'}</div>
     <div class="pagination-btns">
       <button class="page-btn" onclick="setUserPage(\${userPage-1})" \${userPage<=1?'disabled':''}>‹</button>
       \${Array.from({length:Math.min(5,totalPages)},(_,i)=>{
         const p = Math.max(1,Math.min(totalPages-4,userPage-2))+i;
         return \`<button class="page-btn \${p===userPage?'active':''}" onclick="setUserPage(\${p})">\${p}</button>\`;
       }).join('')}
       <button class="page-btn" onclick="setUserPage(\${userPage+1})" \${userPage>=totalPages?'disabled':''}>›</button>
     </div>\`;

  const badge = document.getElementById('userBadge');
  if (badge) badge.textContent = usersData.length;
}

function setUserPage(p) { userPage = p; renderUserTableWithData(); }

function filterUsers() {
  const q      = (document.getElementById('userSearch')?.value||'').toLowerCase();
  const role   = document.getElementById('userRoleFilter')?.value   || '';
  const status = document.getElementById('userStatusFilter')?.value || '';
  const branch = document.getElementById('userBranchFilter')?.value || '';
  filteredUsers = usersData.filter(u => {
    const fullName = \`\${u.firstName} \${u.lastName}\`.toLowerCase();
    const match = !q || fullName.includes(q) || u.email.toLowerCase().includes(q) || u.id.toLowerCase().includes(q);
    return match && (!role||u.role===role) && (!status||u.status===status) && (!branch||u.branch===branch);
  });
  userPage = 1;
  renderUserTableWithData();
}

function renderUsersTable() { filteredUsers = [...usersData]; renderUserTableWithData(); setTimeout(filterUsers, 0); }

function openCreateUser() {
  editingUserId = null;
  document.getElementById('userModalTitle').textContent = 'Add New User';
  document.getElementById('saveUserBtn').textContent = 'Create User';
  document.getElementById('editUserId').value = '';
  ['uFirstName','uLastName','uEmail','uPassword','uOrg','uNotes'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  document.getElementById('uRole').value   = 'customer';
  document.getElementById('uBranch').value = 'All Branches';
  document.getElementById('uStatus').value = 'active';
  document.getElementById('userModalError').classList.remove('show');
  openModal('userModal');
}

function editUser(uid) {
  const u = usersData.find(x=>x.id===uid);
  if (!u) return;
  editingUserId = uid;
  document.getElementById('userModalTitle').textContent = 'Edit User';
  document.getElementById('saveUserBtn').textContent    = 'Save Changes';
  document.getElementById('editUserId').value           = uid;
  document.getElementById('uFirstName').value           = u.firstName;
  document.getElementById('uLastName').value            = u.lastName;
  document.getElementById('uEmail').value               = u.email;
  document.getElementById('uPassword').value            = '';
  document.getElementById('uRole').value                = u.role;
  document.getElementById('uBranch').value              = u.branch;
  document.getElementById('uStatus').value              = u.status;
  document.getElementById('uOrg').value                 = u.org||'';
  document.getElementById('uNotes').value               = u.notes||'';
  document.getElementById('userModalError').classList.remove('show');
  closeModalById('viewUserModal');
  openModal('userModal');
}

function editUserFromView() {
  const uid = document.getElementById('viewUserBody').getAttribute('data-uid');
  if (uid) editUser(uid);
}

function saveUser() {
  const fn    = document.getElementById('uFirstName').value.trim();
  const ln    = document.getElementById('uLastName').value.trim();
  const email = document.getElementById('uEmail').value.trim();
  const pw    = document.getElementById('uPassword').value;
  const role  = document.getElementById('uRole').value;
  const branch= document.getElementById('uBranch').value;
  const status= document.getElementById('uStatus').value;
  const org   = document.getElementById('uOrg').value.trim();
  const notes = document.getElementById('uNotes').value.trim();
  const errEl = document.getElementById('userModalError');
  errEl.classList.remove('show');

  if (!fn || !ln || !email) { errEl.textContent='First name, last name, and email are required.'; errEl.classList.add('show'); return; }
  if (!editingUserId && pw.length < 8) { errEl.textContent='Password must be at least 8 characters.'; errEl.classList.add('show'); return; }

  if (editingUserId) {
    const u = usersData.find(x=>x.id===editingUserId);
    if (u) { Object.assign(u, {firstName:fn,lastName:ln,email,role,branch,status,org,notes}); if(pw.length>=8) u.passwordChanged=true; }
    addAuditEntry('UPDATE',\`User \${editingUserId}\`,\`User profile updated (\${role})\`);
    toast('User updated successfully.','success');
  } else {
    const id = \`USR-\${String(usersData.length+1).padStart(3,'0')}\`;
    usersData.unshift({id,firstName:fn,lastName:ln,email,role,branch,status,org,notes,loginCount:0,createdAt:new Date().toISOString().slice(0,10),lastLogin:'—'});
    addAuditEntry('CREATE',\`User \${id}\`,\`New \${role} account created\`);
    toast('User created successfully.','success');
  }
  closeModalById('userModal');
  renderUsersTable();
}

function viewUser(uid) {
  const u = usersData.find(x=>x.id===uid);
  if (!u) return;
  document.getElementById('viewUserTitle').textContent = \`\${u.firstName} \${u.lastName}\`;
  document.getElementById('viewUserSub').textContent   = u.email;
  const body = document.getElementById('viewUserBody');
  body.setAttribute('data-uid', uid);
  const statusColors = {active:'var(--green)',suspended:'var(--red)',pending:'var(--amber)'};
  const roleColors   = {admin:'var(--gold)',analyst:'var(--blue)',customer:'var(--green)'};
  body.innerHTML = \`
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;padding:20px;background:var(--bg2);border-radius:10px">
      <div class="user-avatar" style="width:56px;height:56px;font-size:22px">\${u.firstName.charAt(0)}\${u.lastName.charAt(0)}</div>
      <div>
        <div style="font-size:19px;font-weight:800;color:var(--text)">\${u.firstName} \${u.lastName}</div>
        <div style="font-size:13px;color:var(--text-dim);margin-top:4px;font-family:var(--font-mono)">\${u.email}</div>
        <div style="display:flex;gap:8px;margin-top:8px">
          <span class="badge" style="background:\${roleColors[u.role]}22;color:\${roleColors[u.role]};border-color:\${roleColors[u.role]}44">\${u.role}</span>
          <span class="badge" style="background:\${statusColors[u.status]}22;color:\${statusColors[u.status]};border-color:\${statusColors[u.status]}44">\${u.status}</span>
        </div>
      </div>
    </div>
    <div class="form-grid-2">
      <div><div class="form-label">User ID</div><div style="font-family:var(--font-mono);font-size:13px;color:var(--text)">\${u.id}</div></div>
      <div><div class="form-label">Organization</div><div style="font-size:13px;color:var(--text)">\${u.org||'—'}</div></div>
      <div><div class="form-label">Branch</div><div style="font-size:13px;color:var(--text)">\${u.branch}</div></div>
      <div><div class="form-label">Total Logins</div><div style="font-size:13px;font-family:var(--font-mono);color:var(--text)">\${u.loginCount}</div></div>
      <div><div class="form-label">Created</div><div style="font-size:13px;font-family:var(--font-mono);color:var(--text-dim)">\${u.createdAt}</div></div>
      <div><div class="form-label">Last Login</div><div style="font-size:13px;font-family:var(--font-mono);color:var(--text-dim)">\${u.lastLogin}</div></div>
    </div>
    \${u.notes?\`<div style="margin-top:16px;padding:12px 16px;background:var(--bg2);border-radius:8px;font-size:13px;color:var(--text-dim)">\${u.notes}</div>\`:''}\`;
  openModal('viewUserModal');
}

function toggleUserStatus(uid) {
  const u = usersData.find(x=>x.id===uid);
  if (!u) return;
  u.status = u.status === 'active' ? 'suspended' : 'active';
  addAuditEntry('UPDATE',\`User \${uid}\`,\`Status changed to \${u.status}\`);
  toast(\`User \${u.status==='active'?'activated':'suspended'}.\`, u.status==='active'?'success':'warning');
  renderUsersTable();
}

function deleteUser(uid) {
  confirmDanger(\`delete-user-\${uid}\`, 'Delete User', \`This will permanently delete the user account and all associated data. This cannot be undone.\`);
}

function toggleSelectAll(cb) {
  document.querySelectorAll('.user-cb').forEach(c => c.checked = cb.checked);
  updateBulkButtons();
}

function updateBulkButtons() {
  const checked = document.querySelectorAll('.user-cb:checked').length;
  document.getElementById('bulkSuspendBtn').style.display = checked > 0 ? '' : 'none';
  document.getElementById('bulkDeleteBtn').style.display  = checked > 0 ? '' : 'none';
}

function bulkAction(action) {
  const ids = [...document.querySelectorAll('.user-cb:checked')].map(c=>c.value);
  if (!ids.length) return;
  if (action === 'suspend') {
    ids.forEach(id => { const u=usersData.find(x=>x.id===id); if(u) u.status='suspended'; });
    addAuditEntry('UPDATE','Bulk Users',\`\${ids.length} users suspended\`);
    toast(\`\${ids.length} users suspended.\`,'warning');
  } else if (action === 'delete') {
    confirmDanger('delete', 'Delete Selected Users', \`This will permanently delete \${ids.length} user accounts. This cannot be undone.\`);
    return;
  }
  renderUsersTable();
}

function openImportUsers() {
  toast('CSV import modal — connect to your data pipeline.','info');
}

function handleGlobalSearch(val) {
  if (!val) return;
  const panel = document.querySelector('.panel.active');
  if (panel && panel.id === 'panel-users') {
    document.getElementById('userSearch').value = val;
    filterUsers();
  }
}

/* ═══════════════════════════════════════════
   BRANCH PANEL
═══════════════════════════════════════════ */
function renderBranchPanel() {
  const ar = currentLang === 'ar';
  const grid = document.getElementById('branchCards');
  if (!grid) return;
  grid.innerHTML = branchesData.map(b => {
    const d = branchOverrides[b.nameEn] || {};
    const clr = scoreColor(d.score||3.5);
    return \`<div class="card" style="--accent:\${clr};position:relative">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:\${clr}"></div>
      <div class="card-body">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px">
          <div>
            <div style="font-size:16px;font-weight:800;color:var(--text)">\${ar ? b.nameAr : b.nameEn}</div>
            <div style="font-size:12px;color:var(--text-dim);margin-top:2px" dir="rtl">\${b.nameAr}</div>
          </div>
          <span class="badge \${b.status==='active'?'badge-green':b.status==='pilot'?'badge-amber':'badge-gray'}">\${tr('status', b.status)}</span>
        </div>
        <div style="font-size:30px;font-weight:800;color:var(--text);margin-bottom:4px">\${formatScore(d.score||3.5)}</div>
        <div style="font-size:11px;color:var(--text-dim);margin-bottom:14px">\${ar?'درجة CX':'CX Score'} · N=\${b.sampleN}</div>
        <div style="font-size:12px;color:var(--text-dim)">\${ar?'المدير':'Manager'}: <span style="color:var(--text);font-weight:600">\${b.manager}</span></div>
        <div style="font-size:12px;color:var(--text-dim);margin-top:4px">\${ar?'العامل الأعلى':'Top driver'}: <span style="color:var(--gold-light);font-weight:600">\${ar ? (d.topAr || d.top || 'الجودة') : (d.top||'Quality')}</span></div>
        <div style="display:flex;gap:8px;margin-top:16px">
          <button class="btn btn-secondary btn-sm" onclick="editBranch('\${b.id}')">\${ar?'تعديل':'Edit'}</button>
          <button class="btn btn-danger btn-sm" onclick="confirmDanger('delete-branch-\${b.id}','\${ar?'حذف الفرع':'Delete Branch'}','\${ar?'سيتم حذف هذا الفرع وإعداداته نهائيًا.':'This branch and its configuration will be permanently removed.'}')">\${ar?'حذف':'Delete'}</button>
        </div>
      </div>
    </div>\`;
  }).join('') || \`<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🏢</div><div class="empty-title">\${ar?'لا توجد فروع بعد':'No branches yet'}</div></div>\`;

  /* Score editor */
  const editor = document.getElementById('branchScoreEditor');
  if (editor) {
    editor.innerHTML = ['Riyadh','Jeddah','Dammam'].map(b => {
      const d = branchOverrides[b];
      const w = pct(d.score);
      return \`<div class="driver-weight-row" style="margin-bottom:12px;padding:14px;background:var(--bg2);border-radius:8px;border:1px solid var(--border)">
        <span class="driver-weight-name">\${b}</span>
        <input type="range" class="admin-range" min="1" max="5" step="0.1" value="\${d.score}" data-branch="\${b}" oninput="updateBranchScore(this)">
        <span style="font-size:13px;font-weight:700;color:var(--gold-light);font-family:var(--font-mono);min-width:80px;text-align:right" id="branchScoreVal-\${b}">\${formatScore(d.score)}</span>
        <button class="btn btn-secondary btn-sm" onclick="resetBranchScore('\${b}')">Reset</button>
      </div>\`;
    }).join('');
  }
}

function updateBranchScore(inp) {
  const b = inp.getAttribute('data-branch');
  const v = parseFloat(inp.value);
  branchOverrides[b].score = v;
  const lbl = document.getElementById(\`branchScoreVal-\${b}\`);
  if (lbl) lbl.textContent = formatScore(v);
}

function resetBranchScore(b) {
  branchOverrides[b].score = BRANCHES_DATA[b].score;
  renderBranchPanel();
}

function saveBranchScores() {
  addAuditEntry('UPDATE','Branch Scores','CX score overrides saved for all branches');
  toast('Branch scores saved.','success');
}

function openCreateBranch() {
  editingBranchId = null;
  document.getElementById('branchModalTitle').textContent = 'Add Branch';
  document.getElementById('saveBranchBtn').textContent = 'Save Branch';
  ['bNameEn','bNameAr','bManager','bAddress'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  document.getElementById('bCxScore').value = '';
  document.getElementById('bSampleN').value = '';
  document.getElementById('bStatus').value = 'active';
  openModal('branchModal');
}

function editBranch(bid) {
  const b = branchesData.find(x=>x.id===bid);
  if (!b) return;
  editingBranchId = bid;
  document.getElementById('branchModalTitle').textContent = 'Edit Branch';
  document.getElementById('saveBranchBtn').textContent = 'Save Changes';
  document.getElementById('editBranchId').value = bid;
  document.getElementById('bNameEn').value = b.nameEn;
  document.getElementById('bNameAr').value = b.nameAr;
  document.getElementById('bManager').value = b.manager;
  document.getElementById('bAddress').value = b.address;
  document.getElementById('bCxScore').value = branchOverrides[b.nameEn]?.score || '';
  document.getElementById('bSampleN').value = b.sampleN;
  document.getElementById('bStatus').value  = b.status;
  openModal('branchModal');
}

function saveBranch() {
  const en   = document.getElementById('bNameEn').value.trim();
  const ar   = document.getElementById('bNameAr').value.trim();
  const mgr  = document.getElementById('bManager').value.trim();
  const addr = document.getElementById('bAddress').value.trim();
  const cx   = parseFloat(document.getElementById('bCxScore').value)||3.5;
  const n    = parseInt(document.getElementById('bSampleN').value)||100;
  const st   = document.getElementById('bStatus').value;
  if (!en || !ar) { toast('Branch names (EN and AR) are required.','error'); return; }
  if (editingBranchId) {
    const b = branchesData.find(x=>x.id===editingBranchId);
    if (b) { Object.assign(b,{nameEn:en,nameAr:ar,manager:mgr,address:addr,sampleN:n,status:st}); if(!branchOverrides[en]) branchOverrides[en]={...branchOverrides[b.nameEn]||{score:cx}}; branchOverrides[en].score=cx; }
    addAuditEntry('UPDATE',\`Branch \${en}\`,\`Branch details updated\`);
    toast('Branch updated.','success');
  } else {
    const id = \`BR-\${String(branchesData.length+1).padStart(2,'0')}\`;
    branchesData.push({id,nameEn:en,nameAr:ar,region:en,manager:mgr,address:addr,cxScore:cx,sampleN:n,status:st});
    branchOverrides[en] = {score:cx,explanatory:65,top:'Quality',topAr:'الجودة',n};
    addAuditEntry('CREATE',\`Branch \${en}\`,\`New branch added\`);
    toast('Branch created.','success');
  }
  closeModalById('branchModal');
  renderBranchPanel();
}

/* ═══════════════════════════════════════════
   DATA PANEL
═══════════════════════════════════════════ */
function renderDataPanel() {
  renderDatasets();
  renderRecordsTable();
}

function renderDatasets() {
  const ar = currentLang === 'ar';
  const tbody = document.getElementById('datasetsTbody');
  if (!tbody) return;
  const statusClr = {active:'badge-green',archived:'badge-gray',pilot:'badge-blue'};
  tbody.innerHTML = datasets.map(d =>
    \`<tr>
      <td><b>\${d.name}</b></td>
      <td><span class="badge badge-gold">\${d.period}</span></td>
      <td><span style="font-family:var(--font-mono)">\${d.rows.toLocaleString()}</span></td>
      <td><span class="badge \${statusClr[d.status]||'badge-gray'}">\${tr('status', d.status)}</span></td>
      <td>\${d.uploader}</td>
      <td style="font-family:var(--font-mono);font-size:11px;color:var(--text-dim)">\${d.date}</td>
      <td><div class="row-actions">
        \${d.status!=='active'?\`<button class="btn btn-success btn-sm" onclick="activateDataset(\${d.id})">\${ar?'تفعيل':'Activate'}</button>\`:\`<span class="badge badge-green">\${ar?'نشط':'Active'}</span>\`}
        <button class="btn btn-secondary btn-sm" onclick="downloadDataset(\${d.id})">\${ar?'تنزيل':'Download'}</button>
        <button class="btn btn-danger btn-sm btn-icon" onclick="deleteDataset(\${d.id})">
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
        </button>
      </div></td>
    </tr>\`
  ).join('');
}

function activateDataset(id) {
  datasets.forEach(d => d.status = d.id===id?'active':'archived');
  addAuditEntry('UPDATE',\`Dataset #\${id}\`,'Dataset set as active');
  toast('Dataset activated.','success');
  renderDatasets();
}

function downloadDataset(id) {
  toast(\`Dataset #\${id} download initiated.\`,'info');
  addAuditEntry('EXPORT',\`Dataset #\${id}\`,'Dataset downloaded by admin');
}

function deleteDataset(id) {
  datasets = datasets.filter(d => d.id !== id);
  addAuditEntry('DELETE',\`Dataset #\${id}\`,'Dataset permanently deleted');
  toast('Dataset deleted.','success');
  renderDatasets();
}

function refreshDatasets() { renderDatasets(); toast('Datasets refreshed.','info'); }
function downloadTemplate() { toast('Template CSV downloaded.','info'); addAuditEntry('EXPORT','Template','CSV upload template downloaded'); }
function saveRecordEdits() { toast('Record edits saved.','success'); addAuditEntry('UPDATE','Response Records','Manual record edits applied'); }

/* Sample records from DB_CUSTOMERS (50 shown) */
let allRecords = [];
(function genRecords() {
  const branches=['Riyadh','Jeddah','Dammam'];
  const genders=['Male','Female'];
  const services=['Mechanical','Bodyshop'];
  const freqs=['1 Visit','2–3 Visits','4+ Visits'];
  const ages=['<25','25–34','35–44','45+'];
  for (let i=1;i<=60;i++) {
    const br = branches[(i*11)%3];
    const g  = (i*7)%10<6?'Male':'Female';
    const sv = (i*11)%5<3?'Mechanical':'Bodyshop';
    const fr = (i*13)%10<3?'1 Visit':(i*13)%10<8?'2–3 Visits':'4+ Visits';
    const ag = ['<25','25–34','35–44','45+'][(i*17)%4];
    const q  = parseFloat((2.5+(i%30)*0.07).toFixed(1));
    const c  = parseFloat((2.3+(i%28)*0.08).toFixed(1));
    const p  = parseFloat((2.2+(i%26)*0.09).toFixed(1));
    const s  = parseFloat((1.2+(i%20)*0.1).toFixed(1));
    const cx = parseFloat(Math.min(5,q*0.38+c*0.27+p*0.22+s*0.05+1.0).toFixed(1));
    const risk = cx<3?'High':cx<3.6?'Medium':'Low';
    allRecords.push({id:\`C-\${String(i).padStart(3,'0')}\`,branch:br,gender:g,service:sv,freq:fr,age:ag,q,c,p,s,cx,risk});
  }
})();

let filteredRecords = [...allRecords];

function filterRecords() {
  const q = (document.getElementById('recordSearch')?.value||'').toLowerCase();
  const b = document.getElementById('recordBranchFilter')?.value||'';
  filteredRecords = allRecords.filter(r => {
    const m = !q || r.id.toLowerCase().includes(q) || r.branch.toLowerCase().includes(q);
    return m && (!b||r.branch===b);
  });
  recordPage = 1;
  renderRecordsTable();
}

function renderRecordsTable() {
  filterRecords();
}

function renderRecordsTableWithData() {
  const ar = currentLang === 'ar';
  const tbody = document.getElementById('recordsTbody');
  if (!tbody) return;
  const start = (recordPage-1)*RECORD_PAGE_SIZE;
  const page  = filteredRecords.slice(start, start+RECORD_PAGE_SIZE);
  const riskBadge = {High:'badge-red',Medium:'badge-amber',Low:'badge-green'};
  tbody.innerHTML = page.map(r =>
    \`<tr>
      <td style="font-family:var(--font-mono);font-size:11px">\${r.id}</td>
      <td>\${tr('branch', r.branch)}</td>
      <td>\${tr('gender', r.gender)}</td>
      <td>\${tr('service', r.service)}</td>
      <td>\${tr('freq', r.freq)}</td>
      <td>\${r.age}</td>
      <td><input class="q-input" style="width:56px" type="number" step="0.1" min="1" max="5" value="\${r.q}" onchange="updateRecord('\${r.id}','q',this.value)"></td>
      <td><input class="q-input" style="width:56px" type="number" step="0.1" min="1" max="5" value="\${r.c}" onchange="updateRecord('\${r.id}','c',this.value)"></td>
      <td><input class="q-input" style="width:56px" type="number" step="0.1" min="1" max="5" value="\${r.p}" onchange="updateRecord('\${r.id}','p',this.value)"></td>
      <td><input class="q-input" style="width:56px" type="number" step="0.1" min="1" max="5" value="\${r.s}" onchange="updateRecord('\${r.id}','s',this.value)"></td>
      <td style="font-weight:700;color:\${scoreColor(r.cx)}">\${r.cx}</td>
      <td><span class="badge \${riskBadge[r.risk]||'badge-gray'}">\${tr('risk', r.risk)}</span></td>
      <td><div class="row-actions">
        <button class="btn btn-danger btn-sm btn-icon" onclick="confirmDanger('delete-record-\${r.id}','\${ar?'حذف السجل':'Delete Record'}','\${ar?'سيتم حذف هذا السجل نهائيًا.':'This response record will be permanently deleted.'}')">
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H5L4 6"/></svg>
        </button>
      </div></td>
    </tr>\`
  ).join('');

  const total = filteredRecords.length;
  const totalPages = Math.ceil(total/RECORD_PAGE_SIZE)||1;
  document.getElementById('recordsPagination').innerHTML =
    \`<div class="pagination-info">\${ar?'عرض':'Showing'} \${Math.min(start+1,total)}–\${Math.min(start+RECORD_PAGE_SIZE,total)} \${ar?'من':'of'} \${total} \${ar?'سجل':'records'}</div>
     <div class="pagination-btns">
       <button class="page-btn" onclick="setRecordPage(\${recordPage-1})" \${recordPage<=1?'disabled':''}>‹</button>
       \${Array.from({length:Math.min(5,totalPages)},(_,i)=>{
         const p = Math.max(1,Math.min(totalPages-4,recordPage-2))+i;
         return \`<button class="page-btn \${p===recordPage?'active':''}" onclick="setRecordPage(\${p})">\${p}</button>\`;
       }).join('')}
       <button class="page-btn" onclick="setRecordPage(\${recordPage+1})" \${recordPage>=totalPages?'disabled':''}>›</button>
     </div>\`;
}

function setRecordPage(p) { recordPage=p; renderRecordsTableWithData(); }
function filterRecords() {
  const q = (document.getElementById('recordSearch')?.value||'').toLowerCase();
  const b = document.getElementById('recordBranchFilter')?.value||'';
  filteredRecords = allRecords.filter(r => (!q||r.id.includes(q)||r.branch.toLowerCase().includes(q)) && (!b||r.branch===b));
  recordPage=1;
  renderRecordsTableWithData();
}
function renderRecordsTable() { filteredRecords=[...allRecords]; renderRecordsTableWithData(); setTimeout(filterRecords,0); }
function updateRecord(id, field, val) { const r=allRecords.find(x=>x.id===id); if(r) r[field]=parseFloat(val); }

function triggerUpload()  { document.getElementById('dataFileInput').click(); }
function onDragOver(e)    { e.preventDefault(); document.getElementById('uploadZone').classList.add('drag-over'); }
function onDragLeave()    { document.getElementById('uploadZone').classList.remove('drag-over'); }
function onDrop(e)        { e.preventDefault(); document.getElementById('uploadZone').classList.remove('drag-over'); const f=e.dataTransfer.files[0]; if(f) simulateUpload(f); }
function handleFileUpload(inp) { if(inp.files[0]) simulateUpload(inp.files[0]); }

function simulateUpload(file) {
  const prog = document.getElementById('uploadProgress');
  const bar  = document.getElementById('uploadBar');
  const pct2 = document.getElementById('uploadPct');
  const stat = document.getElementById('uploadStatus');
  const fn   = document.getElementById('uploadFileName');
  prog.style.display = '';
  fn.textContent = file.name;
  let p = 0;
  const iv = setInterval(() => {
    p += Math.random()*15+5;
    if (p >= 100) { p=100; clearInterval(iv); stat.textContent='✓ Validated — 300 records ready to activate'; stat.style.color='var(--green)'; addAuditEntry('UPLOAD',\`Dataset \${file.name}\`,\`\${file.name} uploaded and validated\`); toast('File uploaded and validated successfully.','success'); datasets.unshift({id:datasets.length+1,name:file.name,period:'Q2 2026',rows:300,status:'pending',uploader:currentAdmin?.name||'Admin',date:new Date().toISOString().slice(0,10)}); renderDatasets(); }
    bar.style.width = p+'%';
    pct2.textContent = Math.round(p)+'%';
  }, 150);
}

/* ═══════════════════════════════════════════
   CONTENT PANEL
═══════════════════════════════════════════ */
function switchContentTab(tab, btn) {
  document.querySelectorAll('.content-tab-btn').forEach(b => {
    b.style.borderBottomColor='transparent'; b.style.color='var(--text-dim)';
  });
  btn.style.borderBottomColor='var(--gold)'; btn.style.color='var(--gold)';
  ['questionnaire','platform','services'].forEach(t => {
    const el = document.getElementById(\`content-tab-\${t}\`);
    if (el) el.style.display = t===tab?'':'none';
  });
  contentTabActive = tab;
}

function renderContentPanel() {
  if (!document.getElementById('questionnaireEditor') && !document.getElementById('servicesEditor')) return;
  renderQuestionnaireEditor();
  renderServicesEditor();
}

function renderQuestionnaireEditor() {
  const el = document.getElementById('questionnaireEditor');
  if (!el) return;
  const constructs = [...new Set(questionnaireItems.map(q=>q.construct))];
  el.innerHTML = constructs.map(construct => {
    const items = questionnaireItems.filter(q=>q.construct===construct);
    return \`<div style="margin-bottom:20px">
      <div style="font-size:11px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:var(--gold);margin-bottom:10px;padding:8px 12px;background:var(--gold-dim);border-radius:6px;border:1px solid rgba(201,151,58,0.2)">\${construct}</div>
      \${items.map((q,idx) => \`<div class="q-item">
        <div class="q-item-head">
          <span class="q-code">\${q.code}</span>
          <span class="q-status \${q.status}">\${q.status}</span>
          <div class="q-actions">
            <button class="btn btn-secondary btn-sm" onclick="toggleItemStatus('\${q.code}')">\${q.status==='retained'?'Mark Removed':'Mark Retained'}</button>
            <button class="btn btn-danger btn-sm btn-icon" onclick="deleteQuestionnaireItem('\${q.code}')">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H5L4 6"/></svg>
            </button>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <input class="q-input" value="\${q.en}" placeholder="English text" onchange="updateQItem('\${q.code}','en',this.value)">
          <input class="q-input" value="\${q.ar}" dir="rtl" placeholder="النص العربي" onchange="updateQItem('\${q.code}','ar',this.value)">
        </div>
      </div>\`).join('')}
    </div>\`;
  }).join('');
}

function toggleItemStatus(code) {
  const q = questionnaireItems.find(x=>x.code===code);
  if (q) { q.status = q.status==='retained'?'removed':'retained'; addAuditEntry('UPDATE',\`Questionnaire \${code}\`,\`Item status set to \${q.status}\`); toast(\`Item \${code} marked as \${q.status}.\`,'success'); renderQuestionnaireEditor(); }
}

function deleteQuestionnaireItem(code) {
  questionnaireItems = questionnaireItems.filter(q=>q.code!==code);
  addAuditEntry('DELETE',\`Questionnaire \${code}\`,'Item permanently removed from instrument');
  toast(\`Item \${code} deleted.\`,'success');
  renderQuestionnaireEditor();
}

function updateQItem(code, field, val) {
  const q = questionnaireItems.find(x=>x.code===code);
  if (q) q[field]=val;
}

function addQuestionnaireItem() {
  const code = \`Q\${questionnaireItems.length+1}\`;
  questionnaireItems.push({code,construct:'Quality',status:'retained',en:'New question text.',ar:'نص السؤال الجديد.'});
  addAuditEntry('CREATE',\`Questionnaire \${code}\`,'New questionnaire item added');
  toast('New item added.','success');
  renderQuestionnaireEditor();
}

function renderServicesEditor() {
  const el = document.getElementById('servicesEditor');
  if (!el) return;
  el.innerHTML = servicesData.map(s =>
    \`<div class="q-item" style="margin-bottom:14px">
      <div class="q-item-head">
        <span class="q-code">\${s.num}</span>
        <span style="font-size:13px;font-weight:700;color:var(--text)">\${s.nameEn}</span>
        <div class="q-actions">
          <button class="btn btn-danger btn-sm btn-icon" onclick="deleteService(\${s.id})">
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H5L4 6"/></svg>
          </button>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px">
        <input class="q-input" value="\${s.nameEn}" placeholder="Name (EN)" onchange="updateService(\${s.id},'nameEn',this.value)">
        <input class="q-input" value="\${s.nameAr}" dir="rtl" placeholder="الاسم (AR)" onchange="updateService(\${s.id},'nameAr',this.value)">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <input class="q-input" value="\${s.descEn}" placeholder="Description (EN)" onchange="updateService(\${s.id},'descEn',this.value)">
        <input class="q-input" value="\${s.descAr}" dir="rtl" placeholder="الوصف (AR)" onchange="updateService(\${s.id},'descAr',this.value)">
      </div>
    </div>\`
  ).join('');
}

function updateService(id, field, val) { const s=servicesData.find(x=>x.id===id); if(s) s[field]=val; }
function deleteService(id) { servicesData=servicesData.filter(s=>s.id!==id); addAuditEntry('DELETE',\`Service #\${id}\`,'Service entry removed'); toast('Service deleted.','success'); renderServicesEditor(); }
function addService() { const id=servicesData.length+1; servicesData.push({id,num:\`0\${id}\`,nameEn:'New Service',nameAr:'خدمة جديدة',descEn:'Description.',descAr:'الوصف.'}); addAuditEntry('CREATE',\`Service #\${id}\`,'New service added'); toast('Service added.','success'); renderServicesEditor(); }
function saveAllContent() { addAuditEntry('UPDATE','Content','All content changes saved'); toast('All content changes saved.','success'); }
function resetContent() { toast('Content reset to defaults.','warning'); }

/* ═══════════════════════════════════════════
   MODEL & WEIGHTS
═══════════════════════════════════════════ */
function renderModelWeights() {
  const ar = currentLang === 'ar';
  const branch = document.getElementById('modelBranchSelect')?.value || 'All Branches';
  const drivers = modelOverrides[branch] || modelOverrides['All Branches'] || [];
  const el = document.getElementById('modelWeightsEditor');
  if (!el) return;

  el.innerHTML = drivers.map(dr =>
    \`<div class="driver-weight-row">
      <span class="driver-weight-name">\${ar ? ({Quality:'الجودة',Communication:'التواصل','Price Fairness':'عدالة السعر','Advisor Behavior':'سلوك المستشار',Speed:'السرعة'}[dr.name] || dr.name) : dr.name}</span>
      <div style="display:flex;flex-direction:column;gap:4px">
        <input type="range" class="admin-range" min="0" max="0.5" step="0.01" value="\${dr.impact}" data-branch="\${branch}" data-driver="\${dr.name}" oninput="updateWeight(this)">
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-mute);font-weight:600"><span>0.00</span><span>0.25</span><span>0.50</span></div>
      </div>
      <span style="font-size:13px;font-weight:700;color:var(--gold-light);font-family:var(--font-mono)" id="wt-\${branch.replace(' ','_')}-\${dr.name}">\${impactPct(dr.impact)}</span>
      <select class="filter-select" style="font-size:12px" onchange="updateDecision('\${branch}','\${dr.name}',this.value)">
        \${['Invest','Optimize','Selective','Monitor','Maintain','Do not overinvest'].map(d=>\`<option \${d===dr.decision?'selected':''}>\${ar ? tr('decision', d) : d}</option>\`).join('')}
      </select>
    </div>\`
  ).join('');

  /* Metrics editor */
  const mEl = document.getElementById('modelMetricsEditor');
  if (mEl) {
    mEl.innerHTML = Object.entries(modelMetrics).map(([k,v]) =>
      \`<div class="form-group">
        <label class="form-label">\${ar ? ({r2:'القوة التفسيرية (R²)',alpha:'ألفا كرونباخ',cr:'الموثوقية المركبة',ave:'متوسط التباين المستخرج',htmt:'HTMT'}[k]||k) : ({r2:'Explanatory Power (R²)',alpha:'Cronbach Alpha',cr:'Composite Reliability',ave:'AVE',htmt:'HTMT'}[k]||k)}</label>
        <input class="form-input" value="\${v}" onchange="modelMetrics['\${k}']=this.value" style="font-family:var(--font-mono)">
      </div>\`
    ).join('');
  }

  /* Decision labels override */
  const dEl = document.getElementById('decisionLabelsEditor');
  if (dEl) {
    dEl.innerHTML = \`<div class="grid-2" style="margin:0">\${drivers.map(dr => \`<div class="form-group">
      <label class="form-label">\${dr.name}</label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <input class="form-input" value="\${ar ? tr('decision', dr.decision) : dr.decision}" placeholder="\${ar?'القرار (AR)':'Decision (EN)'}" onchange="updateDecision('\${branch}','\${dr.name}',this.value)" style="font-size:13px">
        <input class="form-input" placeholder="القرار (AR)" style="font-size:13px" dir="rtl">
      </div>
    </div>\`).join('')}</div>\`;
  }
}

function updateWeight(inp) {
  const b  = inp.getAttribute('data-branch');
  const dn = inp.getAttribute('data-driver');
  const v  = parseFloat(inp.value);
  const drivers = modelOverrides[b];
  if (drivers) { const d=drivers.find(x=>x.name===dn); if(d) d.impact=v; }
  const lbl = document.getElementById(\`wt-\${b.replace(' ','_')}-\${dn}\`);
  if (lbl) lbl.textContent = impactPct(v);
}

function updateDecision(branch, driverName, val) {
  const drivers = modelOverrides[branch];
  if (drivers) { const d=drivers.find(x=>x.name===driverName); if(d) d.decision=val; }
}

function saveModelWeights() {
  addAuditEntry('OVERRIDE','Model Weights',\`Driver weights saved for \${document.getElementById('modelBranchSelect')?.value||'All'}\`);
  toast('Model weights saved and applied.','success');
}

function resetModelWeights() {
  confirmDanger('reset-model','Reset Model Weights','All manual driver weight overrides will be reverted to their calculated defaults.');
}

/* ═══════════════════════════════════════════
   REPORTS
═══════════════════════════════════════════ */
function renderReports() {
  const ar = currentLang === 'ar';
  /* Scheduled */
  const sel = document.getElementById('scheduledExports');
  if (sel) {
    sel.innerHTML = scheduledExportsList.length
      ? scheduledExportsList.map(s =>
          \`<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 22px;border-bottom:1px solid var(--border)">
            <div>
              <div style="font-size:13px;font-weight:600;color:var(--text)">\${s.name}</div>
              <div style="font-size:11px;color:var(--text-dim);margin-top:3px">\${tr('freq', s.freq) || s.freq} · \${s.format} · \${tr('branch', s.branch)} → \${s.email}</div>
            </div>
            <div style="display:flex;gap:8px;align-items:center">
              <div class="toggle-track \${s.active?'on':''}" onclick="toggleSchedule('\${s.id}',this)"><div class="toggle-thumb"></div></div>
              <button class="btn btn-danger btn-sm btn-icon" onclick="deleteSchedule('\${s.id}')">✕</button>
            </div>
          </div>\`
        ).join('')
      : \`<div class="empty-state"><div class="empty-icon">📅</div><div class="empty-title">\${ar?'لا يوجد تصدير مجدول':'No scheduled exports'}</div></div>\`;
  }

  /* History */
  const tbody = document.getElementById('reportHistoryTbody');
  if (tbody) {
    tbody.innerHTML = reportHistory.map(r =>
      \`<tr>
        <td><b>\${r.name}</b></td>
        <td><span class="badge badge-blue">\${r.type}</span></td>
        <td>\${tr('branch', r.branch)}</td>
        <td><span class="badge badge-gold">\${r.format}</span></td>
        <td>\${r.by}</td>
        <td style="font-family:var(--font-mono);font-size:11px;color:var(--text-dim)">\${r.date}</td>
        <td><span class="badge \${r.status==='Ready'?'badge-green':'badge-gray'}">\${tr('status', r.status)}</span></td>
        <td><div class="row-actions">
          \${r.status==='Ready'?\`<button class="btn btn-secondary btn-sm" onclick="downloadReport('\${r.id}')">\${ar?'تنزيل':'Download'}</button>\`:''}
          <button class="btn btn-danger btn-sm btn-icon" onclick="deleteReport('\${r.id}')">✕</button>
        </div></td>
      </tr>\`
    ).join('');
  }
}

function generateReport() {
  const type   = document.getElementById('reportType').value;
  const branch = document.getElementById('reportBranch').value;
  const format = document.getElementById('reportFormat').value;
  const lang   = document.getElementById('reportLang').value;
  toast(\`Generating \${type} (\${branch}) as \${format} — \${lang}…\`,'info');
  setTimeout(() => {
    const id = \`RPT-\${String(reportHistory.length+1).padStart(3,'0')}\`;
    reportHistory.unshift({id,name:\`\${type} — \${branch}\`,type,branch,format,by:currentAdmin?.name||'Admin',date:new Date().toISOString().slice(0,10),status:'Ready'});
    addAuditEntry('EXPORT',\`Report \${id}\`,\`\${type} report generated\`);
    toast('Report ready for download.','success');
    renderReports();
  }, 2000);
}

function openScheduleModal() { openModal('scheduleModal'); }
function saveSchedule() {
  const name  = document.getElementById('schedName').value.trim();
  const freq  = document.getElementById('schedFreq').value;
  const fmt   = document.getElementById('schedFormat').value;
  const email = document.getElementById('schedEmail').value.trim();
  const br    = document.getElementById('schedBranch').value;
  if (!name || !email) { toast('Name and email are required.','error'); return; }
  scheduledExportsList.push({id:\`SCH-\${String(scheduledExportsList.length+1).padStart(3,'0')}\`,name,freq,format:fmt,branch:br,email,active:true});
  addAuditEntry('CREATE',\`Schedule \${name}\`,\`Automated \${freq} report scheduled\`);
  toast('Export schedule created.','success');
  closeModalById('scheduleModal');
  renderReports();
}
function toggleSchedule(id, el) { el.classList.toggle('on'); const s=scheduledExportsList.find(x=>x.id===id); if(s) s.active=!s.active; toast(\`Schedule \${s?.active?'activated':'paused'}.\`,'info'); }
function deleteSchedule(id) { scheduledExportsList=scheduledExportsList.filter(s=>s.id!==id); toast('Schedule deleted.','success'); renderReports(); }
function downloadReport(id) { toast(\`Report \${id} downloading…\`,'info'); addAuditEntry('EXPORT',\`Report \${id}\`,'Report downloaded'); }
function deleteReport(id) { reportHistory=reportHistory.filter(r=>r.id!==id); toast('Report removed.','success'); renderReports(); }

/* ═══════════════════════════════════════════
   SETTINGS
═══════════════════════════════════════════ */
function saveSettings() {
  const quarter = document.getElementById('quarterLabel')?.value;
  const n       = document.getElementById('sampleSizeN')?.value;
  const r2      = document.getElementById('modelR2')?.value;
  addAuditEntry('UPDATE','Settings',\`Platform settings saved — Q:\${quarter}, N:\${n}, R²:\${r2}%\`);
  toast('Settings saved successfully.','success');
}

/* ═══════════════════════════════════════════
   AUDIT LOG
═══════════════════════════════════════════ */
let filteredAudit = [];

function filterAuditLog() {
  const q      = (document.getElementById('auditSearch')?.value||'').toLowerCase();
  const action = document.getElementById('auditActionFilter')?.value||'';
  const admin  = document.getElementById('auditAdminFilter')?.value||'';
  filteredAudit = auditLog.filter(a =>
    (!q      || a.resource.toLowerCase().includes(q) || a.detail.toLowerCase().includes(q) || a.admin.toLowerCase().includes(q)) &&
    (!action || a.action===action) &&
    (!admin  || a.admin===admin)
  );
  auditPage = 1;
  renderAuditLogTable();
}

function renderAuditLog() { filteredAudit=[...auditLog]; renderAuditLogTable(); setTimeout(filterAuditLog,0); }

function renderAuditLogTable() {
  const ar = currentLang === 'ar';
  const tbody = document.getElementById('auditTbody');
  if (!tbody) return;
  const start = (auditPage-1)*AUDIT_PAGE_SIZE;
  const page  = filteredAudit.slice(start, start+AUDIT_PAGE_SIZE);
  const colors = {CREATE:'var(--green)',UPDATE:'var(--blue)',DELETE:'var(--red)',LOGIN:'var(--gold)',EXPORT:'var(--teal)',UPLOAD:'var(--purple)',OVERRIDE:'var(--amber)'};
  tbody.innerHTML = page.map(a =>
    \`<tr class="audit-row">
      <td style="font-family:var(--font-mono);font-size:11px;color:var(--text-dim);white-space:nowrap">\${a.timestamp}</td>
      <td><span style="font-weight:600;font-size:12px">\${trAdminName(a.admin)}</span></td>
      <td><span class="badge audit-action" style="background:\${colors[a.action]||'var(--text-dim)'}22;color:\${colors[a.action]||'var(--text-dim)'};border-color:\${colors[a.action]||'var(--border2)'}44">\${tr('action', a.action)}</span></td>
      <td style="font-size:12px;font-weight:600;color:var(--text)">\${trAuditResource(a.resource)}</td>
      <td style="font-size:12px;color:var(--text-dim);max-width:260px">\${trAuditDetail(a.detail)}</td>
      <td style="font-family:var(--font-mono);font-size:11px;color:var(--text-mute)">\${a.ip}</td>
      <td><span class="badge badge-green">\${currentLang === 'ar' ? 'ناجح' : a.status}</span></td>
    </tr>\`
  ).join('') || \`<tr><td colspan="7"><div class="empty-state"><div class="empty-icon">📋</div><div class="empty-title">\${ar?'لا توجد سجلات تدقيق':'No audit entries'}</div></div></td></tr>\`;

  const total = filteredAudit.length;
  const totalPages = Math.ceil(total/AUDIT_PAGE_SIZE)||1;
  document.getElementById('auditPagination').innerHTML =
    \`<div class="pagination-info">\${total} \${ar?'سجل':'entries'}</div>
     <div class="pagination-btns">
       <button class="page-btn" onclick="setAuditPage(\${auditPage-1})" \${auditPage<=1?'disabled':''}>‹</button>
       \${Array.from({length:Math.min(5,totalPages)},(_,i)=>{
         const p=Math.max(1,Math.min(totalPages-4,auditPage-2))+i;
         return \`<button class="page-btn \${p===auditPage?'active':''}" onclick="setAuditPage(\${p})">\${p}</button>\`;
       }).join('')}
       <button class="page-btn" onclick="setAuditPage(\${auditPage+1})" \${auditPage>=totalPages?'disabled':''}>›</button>
     </div>\`;
  const badge = document.getElementById('auditBadge');
  if (badge) badge.textContent = Math.min(99,auditLog.filter(a=>a.action!=='LOGIN').length);
}

function setAuditPage(p) { auditPage=p; renderAuditLogTable(); }
function exportAuditLog() { addAuditEntry('EXPORT','Audit Log','Full audit log exported as CSV'); toast('Audit log exported.','success'); }

/* ═══════════════════════════════════════════
   NOTIFICATIONS
═══════════════════════════════════════════ */
function toggleNotif() { toast(tx('messages.notif'),'info'); }

/* ═══════════════════════════════════════════
   KEYBOARD SHORTCUTS
═══════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['userModal','branchModal','viewUserModal','confirmModal','scheduleModal'].forEach(id => { const el=document.getElementById(id); if(el) el.classList.remove('open'); });
    closeSidebar();
  }
  if ((e.ctrlKey||e.metaKey) && e.key==='k') { e.preventDefault(); document.getElementById('globalSearch')?.focus(); }
});

/* ═══════════════════════════════════════════
   SORT TABLE (stub for extensibility)
═══════════════════════════════════════════ */
function sortTable(table, field) {
  if (table==='users') {
    if (!sortState[field]) sortState[field]='asc'; else sortState[field]=sortState[field]==='asc'?'desc':'asc';
    const dir = sortState[field]==='asc'?1:-1;
    usersData.sort((a,b) => {
      const av=a[field]||''; const bv=b[field]||'';
      return av<bv?-dir:av>bv?dir:0;
    });
    renderUsersTable();
  }
}

launchAdmin({ name: 'Super Admin', email: 'admin@roshd.com' }, { quiet: true });
<\/script>
</body>
</html>`,jr=`<!DOCTYPE html>
<html lang="ar" data-lang="ar">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5">
<title>ROSHD Professional — Clarity. Insight. Impact.</title>
<link rel="icon" type="image/png" href="/search-bar.png" sizes="any">
<link rel="apple-touch-icon" href="/search-bar.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap" rel="stylesheet">
<style>
/* ═══════════════════════════════════════════════
   ROOT VARIABLES
   ═══════════════════════════════════════════════ */
:root {
  --navy: #1a2952;
  --navy-deep: #0f1c3d;
  --navy-mid: #243160;
  --gold: #b8962e;
  --gold-light: #d4af55;
  --gold-pale: #f0e4b8;
  --white: #ffffff;
  --offwhite: #f8f6f0;
  --cream: #faf7f0;
  --gray: #6b7280;
  --gray-light: #e8e4dc;
  --ink: #1a1a2e;
  /* Dashboard specific */
  --db-bg: #0d1628;
  --db-surface: #111e38;
  --db-card: #162040;
  --db-border: rgba(184,150,46,0.15);
  --db-border-subtle: rgba(255,255,255,0.07);
  --db-text: rgba(255,255,255,0.88);
  --db-muted: rgba(255,255,255,0.45);
  --db-sidebar: #0b1525;
  --db-chart-1: #d4af55;
  --db-chart-2: #6fa8d8;
  --db-chart-3: #a898d6;
  --db-chart-4: #5eb890;
  --db-chart-5: #e0986e;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; scroll-padding-top: 88px; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--cream);
  color: var(--ink);
  overflow-x: hidden;
}

/* Noise texture */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1000;
  opacity: 0.4;
}

/* ═══════════════════════════════════════════════
   LANGUAGE SYSTEM
   ═══════════════════════════════════════════════ */
html[data-lang="en"] .ar { display: none !important; }
html[data-lang="ar"] .en { display: none !important; }
html[data-lang="ar"] { direction: rtl; }
html[data-lang="ar"] body { font-family: 'Cairo', sans-serif; font-size: 16px; line-height: 1.8; }
html[data-lang="ar"] h1,
html[data-lang="ar"] h2,
html[data-lang="ar"] h3,
html[data-lang="ar"] .hero-title,
html[data-lang="ar"] .section-title {
  font-family: 'Cairo', sans-serif;
  font-weight: 700;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: 0;
}
html[data-lang="ar"] .hero-title { font-size: clamp(42px, 5vw, 70px); line-height: 1.3; }
html[data-lang="ar"] .section-title { font-size: clamp(30px, 3.5vw, 50px); }
html[data-lang="ar"] .nav-links a,
html[data-lang="ar"] .nav-btn,
html[data-lang="ar"] .btn-primary,
html[data-lang="ar"] .btn-ghost,
html[data-lang="ar"] .lang-nav-btn {
  letter-spacing: 0;
  text-transform: none;
  font-family: 'Cairo', sans-serif;
  font-weight: 600;
}
html[data-lang="ar"] em { font-style: normal; }
html[data-lang="ar"] .hero-actions { flex-direction: row-reverse; }
html[data-lang="ar"] .hero-stats { flex-direction: row-reverse; }
html[data-lang="ar"] .about-bullets li { padding-left: 0; padding-right: 20px; }
html[data-lang="ar"] .about-bullets li::before { left: auto; right: 0; }
html[data-lang="ar"] .about-principle { border-left: none; border-right: 3px solid var(--gold); border-radius: 4px 0 0 4px; padding-left: 16px; padding-right: 20px; }
html[data-lang="ar"] .services-footer { border-left: none; border-right: 4px solid var(--gold); }
html[data-lang="ar"] .platform-bullets li { padding-left: 12px; padding-right: 28px; border-left: none; border-right: 2px solid var(--gold); border-radius: 4px 0 0 4px; }
html[data-lang="ar"] .platform-bullets li::before { left: auto; right: 9px; }
html[data-lang="ar"] .platform-arrows li { padding-left: 0; padding-right: 22px; }
html[data-lang="ar"] .platform-arrows li::before { content: '←'; left: auto; right: 0; }
html[data-lang="ar"] .form-input { text-align: right; }
html[data-lang="ar"] .modal { direction: rtl; }

/* ═══════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════ */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 960;
  padding: 0 48px;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(10,15,35,0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: all 0.35s ease;
}

nav.scrolled {
  background: rgba(10, 15, 35, 0.97);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(184,150,46,0.22);
  height: 68px;
}

.nav-logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }
.nav-logo img { height: 52px; width: auto; object-fit: contain; transition: height 0.3s ease; }
nav.scrolled .nav-logo img { height: 44px; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 36px;
  list-style: none;
  margin-inline-start: auto;
}

.nav-links a {
  text-decoration: none;
  color: rgba(255,255,255,0.78);
  font-size: 13.5px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: color 0.2s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0; right: 100%;
  height: 1px;
  background: var(--gold);
  transition: right 0.3s ease;
}

.nav-links a:hover { color: var(--white); }
.nav-links a:hover::after { right: 0; }

.nav-btn {
  background: var(--gold);
  color: var(--navy-deep) !important;
  padding: 10px 24px;
  border-radius: 2px;
  font-weight: 600 !important;
  letter-spacing: 0.08em;
  transition: background 0.2s, transform 0.2s !important;
}
.nav-btn:hover { background: var(--gold-light) !important; transform: translateY(-1px); }
.nav-btn::after { display: none !important; }

.nav-signup {
  border: 1px solid rgba(184,150,46,0.55);
  color: rgba(255,255,255,0.92) !important;
  padding: 10px 22px;
  border-radius: 2px;
  font-weight: 600 !important;
  letter-spacing: 0.08em;
  background: transparent;
  transition: background 0.2s, border-color 0.2s, transform 0.2s !important;
}
.nav-signup:hover { background: rgba(184,150,46,0.12); border-color: var(--gold-light); color: var(--white) !important; }
.nav-signup::after { display: none !important; }

/* Lang toggle */
.lang-toggle-nav {
  display: flex;
  align-items: center;
  gap: 2px;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px;
  padding: 3px;
  flex-shrink: 0;
  position: relative;
  z-index: 965;
}

.lang-nav-btn {
  background: none;
  border: none;
  color: rgba(255,255,255,0.48);
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.22s ease;
  font-family: 'DM Sans', sans-serif;
  min-height: 34px;
  min-width: 42px;
  line-height: 1;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  position: relative;
  z-index: 965;
}
.lang-nav-btn.active { background: var(--gold); color: var(--navy-deep); box-shadow: 0 2px 8px rgba(184,150,46,0.35); }
.lang-nav-btn:hover:not(.active) { color: rgba(255,255,255,0.85); background: rgba(255,255,255,0.06); }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin-inline-start: auto;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  position: relative;
  z-index: 965;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: rgba(255,255,255,0.9);
  border-radius: 2px;
  transition: all 0.28s cubic-bezier(0.4,0,0.2,1);
  transform-origin: center;
  pointer-events: none;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile nav overlay */
.mobile-nav-overlay {
  display: block;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  z-index: 950;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.mobile-nav-overlay.open { opacity: 1; pointer-events: auto; }
.nav-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 8px 0; list-style: none; }

/* ═══════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════ */
.hero {
  min-height: 100vh;
  background: var(--navy-deep);
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(184,150,46,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(184,150,46,0.06) 1px, transparent 1px);
  background-size: 80px 80px;
  animation: gridDrift 40s linear infinite;
}
@keyframes gridDrift { from { transform: translateY(0); } to { transform: translateY(80px); } }

.hero-glow {
  position: absolute;
  width: 900px; height: 900px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(184,150,46,0.12) 0%, transparent 70%);
  top: -200px; right: -200px;
  animation: glowPulse 6s ease-in-out infinite;
}
.hero-glow-2 {
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(36,49,96,0.5) 0%, transparent 70%);
  bottom: -100px; left: -100px;
}
@keyframes glowPulse { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.08); opacity: 1; } }

.orb { position: absolute; border-radius: 50%; border: 1px solid rgba(184,150,46,0.15); animation: orbFloat linear infinite; }
.orb-1 { width: 300px; height: 300px; top: 15%; left: 8%; animation-duration: 18s; }
.orb-2 { width: 180px; height: 180px; top: 60%; right: 12%; animation-duration: 14s; animation-delay: -5s; }
.orb-3 { width: 80px; height: 80px; bottom: 20%; left: 35%; animation-duration: 10s; animation-delay: -3s; }
@keyframes orbFloat { 0%, 100% { transform: translateY(0) rotate(0deg); } 33% { transform: translateY(-20px) rotate(120deg); } 66% { transform: translateY(10px) rotate(240deg); } }

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 1300px;
  margin: 0 auto;
  padding: 120px 48px 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-eyebrow { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 28px; opacity: 0; animation: fadeUp 0.8s ease 0.2s forwards; }
.hero-eyebrow-line { width: 40px; height: 1px; background: var(--gold); }
.hero-eyebrow span { font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold); font-weight: 600; }

.hero-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(48px, 5.5vw, 78px); font-weight: 300; color: var(--white); line-height: 1.05; margin-bottom: 10px; opacity: 0; animation: fadeUp 0.8s ease 0.4s forwards; }
.hero-title em { font-style: italic; color: var(--gold-light); }
.hero-title strong { font-weight: 700; display: block; }

.hero-subtitle { font-size: 16px; color: rgba(255,255,255,0.55); line-height: 1.7; max-width: 480px; margin: 24px 0 44px; opacity: 0; animation: fadeUp 0.8s ease 0.6s forwards; }

.hero-actions { display: flex; gap: 16px; align-items: center; opacity: 0; animation: fadeUp 0.8s ease 0.8s forwards; }

.btn-primary, .btn-ghost {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  text-decoration: none; font-weight: 600; font-size: 14px; border-radius: 2px;
  transition: all 0.25s ease; cursor: pointer; white-space: nowrap;
  min-height: 52px; box-sizing: border-box;
  -webkit-tap-highlight-color: transparent; touch-action: manipulation;
}
.btn-primary { background: var(--gold); color: var(--navy-deep); padding: 16px 36px; letter-spacing: 0.06em; text-transform: uppercase; border: none; }
.btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 12px 32px rgba(184,150,46,0.3); }
.btn-primary svg { transition: transform 0.2s; flex-shrink: 0; }
.btn-primary:hover svg { transform: translateX(4px); }
.btn-ghost { background: transparent; color: rgba(255,255,255,0.7); padding: 16px 28px; letter-spacing: 0.04em; border: 1px solid rgba(255,255,255,0.18); }
.btn-ghost:hover { border-color: var(--gold); color: var(--gold-light); }

.hero-stats { display: flex; gap: 40px; margin-top: 60px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.08); opacity: 0; animation: fadeUp 0.8s ease 1s forwards; }
.hero-stat-num { font-family: 'Cormorant Garamond', serif; font-size: 42px; font-weight: 600; color: var(--white); line-height: 1; }
.hero-stat-num span { color: var(--gold); }
.hero-stat-label { font-size: 12px; color: rgba(255,255,255,0.45); letter-spacing: 0.12em; text-transform: uppercase; margin-top: 6px; }

.hero-right { opacity: 0; animation: fadeIn 1.2s ease 0.9s forwards; }

.dashboard-preview { background: rgba(255,255,255,0.04); border: 1px solid rgba(184,150,46,0.2); border-radius: 16px; padding: 28px; backdrop-filter: blur(10px); position: relative; overflow: hidden; }
.dashboard-preview::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold)); }
.dp-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
.dp-dots { display: flex; gap: 6px; }
.dp-dots span { width: 10px; height: 10px; border-radius: 50%; }
.dp-dots span:nth-child(1) { background: #ff5f57; }
.dp-dots span:nth-child(2) { background: #ffbd2e; }
.dp-dots span:nth-child(3) { background: #28c840; }
.dp-title { font-size: 11px; color: rgba(255,255,255,0.4); letter-spacing: 0.15em; text-transform: uppercase; }
.dp-kpis { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px; }
.dp-kpi { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 14px; }
.dp-kpi-val { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 600; color: var(--white); }
.dp-kpi-val.gold { color: var(--gold-light); }
.dp-kpi-label { font-size: 10px; color: rgba(255,255,255,0.4); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 4px; }
.dp-chart { margin-bottom: 16px; }
.dp-bar-row { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.dp-bar-label { font-size: 11px; color: rgba(255,255,255,0.5); width: 90px; flex-shrink: 0; }
.dp-bar-track { flex: 1; height: 6px; background: rgba(255,255,255,0.08); border-radius: 99px; overflow: hidden; }
.dp-bar-fill { height: 100%; border-radius: 99px; background: linear-gradient(90deg, var(--gold), var(--gold-light)); width: 0; animation: barGrow 1.5s ease forwards; }
.dp-bar-row:nth-child(1) .dp-bar-fill { animation-delay: 1.2s; --w: 87%; }
.dp-bar-row:nth-child(2) .dp-bar-fill { animation-delay: 1.35s; --w: 72%; }
.dp-bar-row:nth-child(3) .dp-bar-fill { animation-delay: 1.5s; --w: 58%; }
.dp-bar-row:nth-child(4) .dp-bar-fill { animation-delay: 1.65s; --w: 43%; }
@keyframes barGrow { to { width: var(--w); } }
.dp-bar-val { font-size: 11px; color: var(--gold-light); font-weight: 600; width: 30px; text-align: right; }
.dp-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(184,150,46,0.15); border: 1px solid rgba(184,150,46,0.3); color: var(--gold-light); padding: 6px 12px; border-radius: 99px; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; }
.dp-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); animation: blink 2s ease-in-out infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }

/* ═══════════════════════════════════════════════
   SECTION COMMONS
   ═══════════════════════════════════════════════ */
section { position: relative; }
.section-inner { max-width: 1300px; margin: 0 auto; padding: 0 48px; }
.section-tag { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 20px; }
.section-tag-line { width: 32px; height: 1px; background: var(--gold); }
.section-tag span { font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--gold); font-weight: 600; }
.section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(36px, 4vw, 58px); font-weight: 300; line-height: 1.1; margin-bottom: 16px; }
.section-title em { font-style: italic; color: var(--gold); }
.section-lead { font-size: 16px; line-height: 1.75; color: var(--gray); max-width: 600px; }

/* Reveal */
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ═══════════════════════════════════════════════
   ABOUT — two-column: copy aligns with Services; aside fills viewport
   ═══════════════════════════════════════════════ */
.about-strip { background: var(--white); padding: 56px 0 88px; border-bottom: 1px solid var(--gray-light); }
.about-strip .section-inner { display: block; }
.about-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.46fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: start;
}
.about-main {
  min-width: 0;
}
.about-main > .section-tag { margin-bottom: 16px; }
.about-main > .about-title { margin-bottom: 28px; }
.about-aside { min-width: 0; }
.about-aside-inner {
  position: sticky;
  top: 96px;
  padding: clamp(20px, 3vw, 32px) 0;
  text-align: center;
  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;
}
.about-aside-inner::before {
  content: '';
  display: block;
  height: 3px;
  width: 56px;
  margin: 0 auto 28px;
  background: linear-gradient(90deg, var(--gold), var(--gold-light));
  border-radius: 99px;
}
.about-aside-logo {
  display: block;
  width: min(100%, 300px);
  height: auto;
  margin-inline: auto;
  object-fit: contain;
}
/* About-specific title */
.about-title {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  color: var(--navy);
  letter-spacing: -0.02em;
  text-wrap: balance;
}
.about-title-lead {
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(13px, 1.4vw, 15px);
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gray);
  margin-bottom: 12px;
  line-height: 1.4;
}
.about-title-accent {
  display: block;
  font-size: clamp(32px, 4.2vw, 52px);
  font-weight: 500;
  line-height: 1.12;
}
.about-title-accent em {
  font-style: italic;
  color: var(--gold);
  font-weight: 500;
}
html[data-lang="ar"] .about-title-lead {
  letter-spacing: 0;
  text-transform: none;
  font-family: 'Cairo', sans-serif;
  font-size: clamp(14px, 1.6vw, 17px);
  font-weight: 700;
  color: var(--navy-mid);
}
html[data-lang="ar"] .about-title-accent { font-family: 'Cairo', sans-serif; font-weight: 700; letter-spacing: 0; }
html[data-lang="ar"] .about-title-accent em { font-style: normal; }
.about-body { font-size: 15px; line-height: 1.85; color: var(--gray); margin-bottom: 16px; }
.about-bold { font-weight: 600; color: var(--navy); }
.about-bullets { list-style: none; margin: 0 0 16px 0; padding: 0; }
.about-bullets li { font-size: 14px; color: var(--gray); line-height: 1.7; margin-bottom: 10px; padding-left: 20px; position: relative; }
.about-bullets li::before { content: ''; position: absolute; left: 0; top: 12px; width: 8px; height: 2px; background: var(--gold); }
.about-principle {
  font-family: 'Cormorant Garamond', serif;
  font-size: 19px;
  font-style: italic;
  color: var(--navy);
  border-left: 3px solid var(--gold);
  padding: 12px 16px;
  margin-top: 24px;
  background: var(--offwhite);
  border-radius: 0 4px 4px 0;
}

@media (max-width: 960px) {
  .about-layout { grid-template-columns: 1fr; gap: 40px; }
  .about-aside-inner {
    position: relative;
    top: auto;
    max-width: 420px;
    margin-inline-start: 0;
  }
}

@media (max-width: 640px) {
  .about-aside-inner { padding: 22px 20px; }
  .about-aside-inner::before { margin-bottom: 20px; }
}

/* ═══════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════ */
.services { background: var(--offwhite); padding: 48px 0 120px; }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 36px; }
.service-card { background: var(--white); border: 1px solid var(--gray-light); border-radius: 4px; padding: 44px 36px; position: relative; overflow: hidden; transition: all 0.35s ease; cursor: pointer; }
.service-card::before { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--gold), var(--gold-light)); transform: scaleX(0); transform-origin: left; transition: transform 0.35s ease; }
.service-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(26,41,82,0.12); border-color: rgba(184,150,46,0.3); }
.service-card:hover::before { transform: scaleX(1); }
.service-num { font-family: 'Cormorant Garamond', serif; font-size: 64px; font-weight: 300; color: var(--gold-pale); line-height: 1; margin-bottom: 20px; transition: color 0.3s; }
.service-card:hover .service-num { color: var(--gold-light); }
.service-icon { width: 48px; height: 48px; background: var(--navy); border-radius: 10px; display: grid; place-items: center; margin-bottom: 24px; transition: background 0.3s; }
.service-card:hover .service-icon { background: var(--gold); }
.service-name { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 600; color: var(--navy); margin-bottom: 12px; line-height: 1.2; }
.service-desc { font-size: 14px; line-height: 1.7; color: var(--gray); }
.services-footer { margin-top: 60px; padding: 28px 40px; background: var(--white); border: 1px solid var(--gray-light); border-radius: 4px; display: flex; align-items: center; justify-content: space-between; gap: 40px; border-left: 4px solid var(--gold); }
.services-footer-text { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: var(--navy); font-style: italic; flex: 1; }

/* ═══════════════════════════════════════════════
   PLATFORM / INSIGHT FEATURE
   ═══════════════════════════════════════════════ */
.insight-feature { background: var(--navy-deep); padding: 48px 0 120px; overflow: hidden; position: relative; }
.insight-feature .hero-grid { opacity: 0.4; animation: gridDrift 60s linear infinite; }
.insight-feature .section-inner { position: relative; z-index: 2; display: block; }

.platform-tabs-nav { display: flex; gap: 0; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 56px; flex-wrap: wrap; }
.platform-tab-btn { padding: 14px 28px; cursor: pointer; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.35); background: none; border: none; border-bottom: 2px solid transparent; margin-bottom: -1px; transition: all 0.3s; white-space: nowrap; }
.platform-tab-btn.active { color: var(--gold); border-bottom-color: var(--gold); }
.platform-tab-btn:hover:not(.active) { color: rgba(255,255,255,0.65); }
.platform-panel { display: none; }
.platform-panel.active { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
.platform-en h3, .platform-ar h3 { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 600; color: var(--white); margin-bottom: 18px; line-height: 1.3; }
.platform-ar h3 { font-family: 'Cairo', sans-serif; text-align: right; }
.platform-tagline { font-size: 14.5px; color: rgba(255,255,255,0.55); line-height: 1.75; margin-bottom: 20px; }
.platform-ar .platform-tagline { font-family: 'Cairo', sans-serif; text-align: right; }
.platform-transition-label, .platform-section-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.09em; color: var(--gold); font-weight: 600; margin-bottom: 10px; margin-top: 20px; }
.platform-ar .platform-transition-label, .platform-ar .platform-section-label { font-family: 'Cairo', sans-serif; text-align: right; }
.platform-arrows { list-style: none; padding: 0; margin: 0 0 4px 0; }
.platform-arrows li { font-size: 14px; color: rgba(255,255,255,0.6); padding: 7px 0 7px 22px; position: relative; line-height: 1.6; }
.platform-arrows li::before { content: '→'; position: absolute; left: 0; color: var(--gold); font-size: 13px; }
.platform-ar .platform-arrows li { font-family: 'Cairo', sans-serif; padding-left: 0; padding-right: 24px; text-align: right; }
.platform-ar .platform-arrows li::before { content: '←'; left: auto; right: 0; }
.platform-bullets { list-style: none; padding: 0; margin: 0 0 20px 0; display: flex; flex-direction: column; gap: 7px; }
.platform-bullets li { font-size: 13.5px; color: rgba(255,255,255,0.55); padding: 9px 12px 9px 28px; background: rgba(255,255,255,0.04); border-left: 2px solid var(--gold); border-radius: 0 4px 4px 0; line-height: 1.6; position: relative; }
.platform-bullets li::before { content: '✦'; position: absolute; left: 9px; color: var(--gold); font-size: 7px; top: 13px; }
.platform-ar .platform-bullets li { font-family: 'Cairo', sans-serif; text-align: right; padding-left: 12px; padding-right: 28px; border-left: none; border-right: 2px solid var(--gold); border-radius: 4px 0 0 4px; }
.platform-ar .platform-bullets li::before { left: auto; right: 9px; }
.platform-outcome { margin-top: 24px; padding: 20px 24px; background: rgba(184,150,46,0.07); border: 1px solid rgba(184,150,46,0.2); border-radius: 8px; }
.platform-outcome-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold); font-weight: 600; margin-bottom: 12px; }
.platform-ar .platform-outcome-label { font-family: 'Cairo', sans-serif; text-align: right; }
.platform-outcome-bullets { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 8px; }
.platform-outcome-bullets li { font-size: 13px; color: rgba(255,255,255,0.65); background: rgba(255,255,255,0.06); padding: 6px 14px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.08); }
.platform-ar .platform-outcome-bullets li { font-family: 'Cairo', sans-serif; }

/* ═══════════════════════════════════════════════
   PROCESS
   ═══════════════════════════════════════════════ */
.process { background: var(--white); padding: 48px 0 120px; }
.process-steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; margin-top: 64px; position: relative; }
.process-steps::before { content: ''; position: absolute; top: 36px; left: 10%; right: 10%; height: 1px; background: linear-gradient(90deg, transparent, var(--gold), var(--gold), transparent); }
.process-step { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 16px; position: relative; }
.process-step-num { width: 72px; height: 72px; border-radius: 50%; background: var(--navy); color: var(--white); font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 600; display: grid; place-items: center; margin-bottom: 24px; border: 4px solid var(--white); box-shadow: 0 0 0 1px var(--gray-light); position: relative; z-index: 2; transition: all 0.3s ease; }
.process-step:hover .process-step-num { background: var(--gold); box-shadow: 0 0 0 1px var(--gold), 0 8px 24px rgba(184,150,46,0.3); transform: scale(1.08); }
.process-step-name { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 600; color: var(--navy); margin-bottom: 8px; }
.process-step-desc { font-size: 12px; color: var(--gray); line-height: 1.6; }

/* ═══════════════════════════════════════════════
   CTA BANNER
   ═══════════════════════════════════════════════ */
.cta-banner { background: var(--navy); padding: 100px 0; position: relative; overflow: hidden; }
.cta-banner::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy-mid) 100%); }
.cta-banner .section-inner { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr auto; gap: 60px; align-items: center; }
.cta-banner .section-title { color: var(--white); }
.cta-banner .section-lead { color: rgba(255,255,255,0.55); margin-top: 16px; }
.cta-banner .section-tag span { color: var(--gold); }
.cta-banner .section-tag-line { background: var(--gold); }
.cta-actions { display: flex; flex-direction: column; gap: 14px; align-items: flex-start; flex-shrink: 0; }

/* ═══════════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════════ */
.contact { background: var(--offwhite); padding: 48px 0 120px; }
.contact .section-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.contact-form { background: var(--white); border: 1px solid var(--gray-light); border-radius: 4px; padding: 48px; }
.form-group { margin-bottom: 24px; }
.form-label { display: block; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--navy); margin-bottom: 8px; }
.form-input { width: 100%; padding: 14px 16px; border: 1px solid var(--gray-light); border-radius: 2px; font-family: 'DM Sans', sans-serif; font-size: 15px; color: var(--ink); background: var(--cream); transition: border-color 0.2s, box-shadow 0.2s; outline: none; }
.form-input:focus { border-color: var(--navy); box-shadow: 0 0 0 3px rgba(26,41,82,0.08); background: var(--white); }
textarea.form-input { resize: vertical; min-height: 120px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

/* Password toggle */
.pw-field { position: relative; }
.pw-field .form-input { padding-right: 48px; }
.pw-toggle { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; display: grid; place-items: center; border: none; background: transparent; cursor: pointer; color: var(--gray); border-radius: 6px; transition: color 0.15s, background 0.15s; }
.pw-toggle:hover { color: var(--navy); background: rgba(26,41,82,0.06); }
.pw-toggle svg { display: block; width: 20px; height: 20px; }

/* ═══════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════ */
footer { background: var(--navy-deep); padding: 80px 0 40px; border-top: 1px solid rgba(184,150,46,0.15); }
.footer-inner { max-width: 1300px; margin: 0 auto; padding: 0 48px; }
.footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; padding-bottom: 60px; border-bottom: 1px solid rgba(255,255,255,0.08); }
.footer-brand img { height: 52px; width: auto; object-fit: contain; margin-bottom: 16px; }
.footer-tagline { font-family: 'Cormorant Garamond', serif; font-size: 16px; font-style: italic; color: var(--gold-light); margin-bottom: 12px; }
.footer-desc { font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.7; max-width: 260px; }
.footer-col-title { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 20px; }
.footer-links { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.footer-links a { text-decoration: none; color: rgba(255,255,255,0.45); font-size: 14px; transition: color 0.2s; }
.footer-links a:hover { color: var(--gold-light); }
.footer-bottom { display: flex; align-items: center; justify-content: space-between; padding-top: 32px; }
.footer-copy { font-size: 12px; color: rgba(255,255,255,0.3); }
.footer-copy span { color: var(--gold); }

/* ═══════════════════════════════════════════════
   MODALS (LOGIN / SIGNUP)
   ═══════════════════════════════════════════════ */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(10,15,35,0.85);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: none;
  align-items: center;
  justify-content: center;
  padding: max(12px, env(safe-area-inset-top)) 12px max(12px, env(safe-area-inset-bottom));
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.modal-overlay.open { display: flex; }
.modal {
  background: var(--white);
  border-radius: 6px;
  width: 100%;
  max-width: 440px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 24px);
  animation: modalIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards;
  margin: auto;
}
@keyframes modalIn { from { opacity: 0; transform: scale(0.85) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
.modal-header { background: var(--navy); padding: 36px 40px 28px; position: relative; flex-shrink: 0; }
.modal-header::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--gold), var(--gold-light)); }
.modal-logo-row { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.modal-logo-row img { height: 36px; object-fit: contain; }
.modal-logo-text { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 700; color: var(--white); letter-spacing: 0.1em; }
.modal-title { font-family: 'Cormorant Garamond', serif; font-size: 30px; font-weight: 300; color: var(--white); line-height: 1.2; }
.modal-subtitle { font-size: 13px; color: rgba(255,255,255,0.5); margin-top: 6px; }
.modal-close { position: absolute; top: max(12px, env(safe-area-inset-top)); right: max(12px, env(safe-area-inset-right)); background: transparent; border: none; color: rgba(255,255,255,0.5); cursor: pointer; font-size: 20px; width: 32px; height: 32px; display: grid; place-items: center; border-radius: 50%; transition: color 0.2s; }
.modal-close:hover { color: var(--white); background: rgba(255,255,255,0.1); }
.modal-body { padding: 36px 40px; flex: 1 1 auto; min-height: 0; overflow-y: auto; -webkit-overflow-scrolling: touch; }
.modal-error { background: #fef2f2; border: 1px solid #fecaca; color: #991b1b; padding: 10px 14px; border-radius: 4px; font-size: 13px; margin-bottom: 20px; display: none; }
.modal-error.show { display: block; }
.modal-success { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 10px 14px; border-radius: 4px; font-size: 13px; margin-bottom: 20px; display: none; line-height: 1.5; }
.modal-success.show { display: block; }
.modal-footer-text { text-align: center; font-size: 12px; color: var(--gray); margin-top: 20px; }
.modal-switch { text-align: center; font-size: 13px; color: var(--gray); margin-top: 18px; line-height: 1.5; }
.modal-switch a { color: var(--navy); font-weight: 600; text-decoration: none; border-bottom: 1px solid transparent; }
.modal-switch a:hover { border-bottom-color: var(--gold); }

/* ═══════════════════════════════════════════════
   TOAST
   ═══════════════════════════════════════════════ */
.toast {
  position: fixed;
  bottom: 32px; right: 32px;
  background: var(--navy);
  color: var(--white);
  padding: 16px 22px;
  border-radius: 6px;
  font-size: 14px;
  border-left: 4px solid var(--gold);
  z-index: 99999;
  transform: translateX(120%);
  transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
  max-width: 320px;
}
.toast.show { transform: translateX(0); }
html[data-lang="ar"] .toast { right: auto; left: 32px; border-left: none; border-right: 4px solid var(--gold); transform: translateX(-120%); }
html[data-lang="ar"] .toast.show { transform: translateX(0); }

/* ═══════════════════════════════════════════════
   CUSTOMER DASHBOARD — FULL SCREEN OVERLAY
   ═══════════════════════════════════════════════ */
#customerDashboard {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 8000;
  background: var(--db-bg);
  color: var(--db-text);
  overflow: hidden;
  flex-direction: row;
  max-width: 100vw;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
#customerDashboard.open {
  display: flex;
  animation: dbFadeIn 0.5s ease forwards;
}
@keyframes dbFadeIn { from { opacity: 0; } to { opacity: 1; } }

/* Admin preview: same UI as customer, loaded in an iframe (sidebar hidden) */
#customerDashboard.db-admin-embed-shell { animation: none; }
#customerDashboard.db-admin-embed-shell .db-sidebar,
#customerDashboard.db-admin-embed-shell .db-sidebar-overlay {
  display: none !important;
}
#customerDashboard.db-admin-embed-shell .db-main {
  flex: 1 1 auto;
  width: 100%;
  min-width: 0;
}

/* ── Reset global \`nav {}\` styles so .db-nav stays inside the sidebar ── */
#customerDashboard nav.db-nav {
  /* cancel every property set by nav { position:fixed; top:0; left:0; … } */
  position: static !important;
  top: auto !important;
  left: auto !important;
  right: auto !important;
  inset: unset !important;
  z-index: auto !important;
  width: auto !important;
  height: auto !important;
  max-height: none !important;
  min-height: 0 !important;
  padding: 14px 12px !important;
  margin: 0 !important;
  gap: 0 !important;
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border: none !important;
  border-bottom: none !important;
  box-shadow: none !important;
  transition: none !important;
  /* keep flex column for the nav items */
  display: flex !important;
  flex-direction: column !important;
  align-items: stretch !important;
  flex: 1 1 auto !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  -webkit-overflow-scrolling: touch !important;
}

/* ── Dashboard Sidebar ── */
.db-sidebar {
  width: 260px;
  background: var(--db-sidebar);
  border-inline-end: 1px solid var(--db-border);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  z-index: 10;
  overflow-y: auto;
}

html[data-lang="ar"] .db-sidebar { border-inline-end: none; border-inline-start: 1px solid var(--db-border); }

.db-brand {
  padding: 28px 22px 24px;
  border-bottom: 1px solid var(--db-border-subtle);
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.db-brand img { height: 38px; width: auto; object-fit: contain; flex-shrink: 0; }
.db-brand-text { display: flex; flex-direction: column; line-height: 1.2; }
.db-brand-text strong { font-family: 'Cormorant Garamond', serif; font-size: 17px; font-weight: 700; color: var(--white); letter-spacing: 0.1em; white-space: nowrap; }
html[data-lang="ar"] .db-brand-text strong { font-family: 'Cairo', sans-serif; }
.db-brand-text small { font-size: 9px; color: var(--gold); letter-spacing: 0.2em; text-transform: uppercase; font-weight: 600; }
html[data-lang="ar"] .db-brand-text small { letter-spacing: 0; font-family: 'Cairo', sans-serif; }

.db-user-strip {
  padding: 16px 20px;
  border-bottom: 1px solid var(--db-border-subtle);
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.db-avatar {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  display: grid; place-items: center;
  font-weight: 700; color: var(--navy-deep); font-size: 15px;
  flex-shrink: 0;
}
.db-user-info { overflow: hidden; }
.db-user-name { font-size: 13px; font-weight: 600; color: var(--white); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
html[data-lang="ar"] .db-user-name { font-family: 'Cairo', sans-serif; }
.db-user-role { font-size: 10px; color: var(--db-muted); text-transform: uppercase; letter-spacing: 0.12em; }
html[data-lang="ar"] .db-user-role { font-family: 'Cairo', sans-serif; letter-spacing: 0; }

.db-nav { flex: 1; padding: 14px 12px; overflow-y: auto; }
.db-nav::-webkit-scrollbar { width: 3px; }
.db-nav::-webkit-scrollbar-thumb { background: rgba(184,150,46,0.2); border-radius: 99px; }

.db-nav-section { font-size: 9px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.45); padding: 14px 12px 6px; }
html[data-lang="ar"] .db-nav-section { font-family: 'Cairo', sans-serif; letter-spacing: 0; font-size: 11px; }

.db-nav-item {
  display: flex; align-items: center; gap: 11px;
  padding: 11px 14px; border-radius: 8px;
  color: rgba(255,255,255,0.72); font-size: 14px; font-weight: 500;
  cursor: pointer; transition: all 0.2s ease;
  position: relative; white-space: nowrap;
  border: none; background: none; width: 100%; text-align: start;
  -webkit-tap-highlight-color: transparent;
  min-height: 44px;
}
html[data-lang="ar"] .db-nav-item { font-family: 'Cairo', sans-serif; font-size: 14px; }
.db-nav-item:hover { background: rgba(255,255,255,0.05); color: var(--white); }
.db-nav-item.active { background: rgba(184,150,46,0.14); color: var(--gold-light); border: 1px solid rgba(184,150,46,0.18); }
.db-nav-item.active::before { content: ''; position: absolute; inset-inline-start: 0; top: 25%; bottom: 25%; width: 3px; background: var(--gold); border-radius: 0 99px 99px 0; }
html[data-lang="ar"] .db-nav-item.active::before { border-radius: 99px 0 0 99px; }
.db-nav-item svg { flex-shrink: 0; }

.db-sidebar-footer { padding: 16px 12px; border-top: 1px solid var(--db-border-subtle); flex-shrink: 0; }

.db-logout-btn {
  display: flex; align-items: center; gap: 10px;
  width: 100%; padding: 11px 14px; border-radius: 8px;
  background: none; border: none;
  color: rgba(220,38,38,0.65); font-size: 14px; font-weight: 500;
  cursor: pointer; transition: all 0.2s;
  -webkit-tap-highlight-color: transparent;
}
html[data-lang="ar"] .db-logout-btn { font-family: 'Cairo', sans-serif; }
.db-logout-btn:hover { background: rgba(220,38,38,0.08); color: #ef4444; }

/* ── Dashboard Main Area ── */
.db-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
}

.db-topbar {
  height: 64px;
  background: var(--db-surface);
  border-bottom: 1px solid var(--db-border-subtle);
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  gap: 12px;
}

.db-topbar-left { min-width: 0; }
.db-page-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: var(--white); }
html[data-lang="ar"] .db-page-title { font-family: 'Cairo', sans-serif; font-weight: 700; font-size: 20px; }
.db-breadcrumb { font-size: 11px; color: var(--db-muted); }
html[data-lang="ar"] .db-breadcrumb { font-family: 'Cairo', sans-serif; }
.db-breadcrumb span { color: var(--gold); }

.db-topbar-right { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }

.db-topbar-btn {
  width: 36px; height: 36px;
  border-radius: 8px;
  border: 1px solid var(--db-border-subtle);
  background: rgba(255,255,255,0.04);
  display: grid; place-items: center;
  cursor: pointer;
  color: var(--db-muted);
  transition: all 0.2s;
}
.db-topbar-btn:hover { border-color: var(--gold); color: var(--gold-light); }

.db-period-badge {
  display: flex; align-items: center; gap: 8px;
  background: rgba(184,150,46,0.12);
  border: 1px solid var(--db-border);
  color: var(--gold-light);
  padding: 7px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
}
html[data-lang="ar"] .db-period-badge { font-family: 'Cairo', sans-serif; letter-spacing: 0; }

/* ── Filter bar — minimal thin strip (same theme: db-card + gold accent) ── */
.db-filter-bar {
  padding: 8px 24px 10px;
  background: var(--db-card);
  border-bottom: 1px solid var(--db-border-subtle);
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px 18px;
  flex-shrink: 0;
}

.db-filter-bar__lead {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.db-filter-bar__title {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1;
}
html[data-lang="ar"] .db-filter-bar__title {
  font-family: 'Cairo', sans-serif;
  letter-spacing: 0;
  font-size: 11px;
}

.db-filter-bar-scroll-outer {
  min-width: 0;
  position: relative;
  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;
}

.db-filter-bar-scroll-outer::before,
.db-filter-bar-scroll-outer::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 14px;
  pointer-events: none;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.db-filter-bar-scroll-outer.is-scrollable-start::before,
.db-filter-bar-scroll-outer.is-scrollable-end::after {
  opacity: 1;
}
.db-filter-bar-scroll-outer::before {
  left: 0;
  background: linear-gradient(90deg, var(--db-card), transparent);
}
.db-filter-bar-scroll-outer::after {
  right: 0;
  background: linear-gradient(270deg, var(--db-card), transparent);
}
html[data-lang="ar"] .db-filter-bar-scroll-outer::before {
  left: auto;
  right: 0;
  background: linear-gradient(270deg, var(--db-card), transparent);
}
html[data-lang="ar"] .db-filter-bar-scroll-outer::after {
  right: auto;
  left: 0;
  background: linear-gradient(90deg, var(--db-card), transparent);
}

.db-filter-bar-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 8px 12px;
  padding: 2px 0;
  max-width: 100%;
}

.db-filter-chip {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
  flex: 1 1 128px;
  max-width: 200px;
}

.db-filter-chip-lbl {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.32);
  line-height: 1.2;
  padding-inline-start: 1px;
}
html[data-lang="ar"] .db-filter-chip-lbl {
  font-family: 'Cairo', sans-serif;
  letter-spacing: 0;
  font-size: 10px;
}

.db-filter-chip-select-wrap {
  position: relative;
  border-radius: 6px;
  transition: box-shadow 0.15s ease;
}
.db-filter-chip-select-wrap:focus-within {
  box-shadow: 0 0 0 1px rgba(184, 150, 46, 0.55);
}

.db-select {
  width: 100%;
  min-width: 0;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
  background-color: rgba(255, 255, 255, 0.03);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23a89040' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m3.5 4.5 2.5 2.5 2.5-2.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 11px 11px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.9);
  padding: 6px 26px 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
  line-height: 1.3;
  cursor: pointer;
  outline: none;
  transition: border-color 0.15s ease, background-color 0.15s ease;
}
html[data-lang="ar"] .db-select {
  font-family: 'Cairo', sans-serif;
  direction: rtl;
  background-position: left 8px center;
  padding: 6px 10px 6px 26px;
}
.db-select:hover {
  border-color: rgba(184, 150, 46, 0.22);
  background-color: rgba(255, 255, 255, 0.05);
}
.db-select:focus-visible {
  border-color: rgba(184, 150, 46, 0.45);
}
.db-select:active {
  transform: none;
}
.db-select option { background: var(--db-card); color: var(--db-text); }

.db-filter-bar__trail {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.db-period-badge--filter {
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  background: rgba(184, 150, 46, 0.08);
  border: 1px solid rgba(184, 150, 46, 0.22);
  color: rgba(212, 175, 55, 0.95);
}
html[data-lang="ar"] .db-period-badge--filter {
  font-family: 'Cairo', sans-serif;
  letter-spacing: 0;
}

.db-export-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: transparent;
  color: var(--gold-light);
  border: 1px solid rgba(184, 150, 46, 0.4);
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  white-space: nowrap;
  box-shadow: none;
}
html[data-lang="ar"] .db-export-btn { font-family: 'Cairo', sans-serif; }
.db-export-btn:hover {
  background: rgba(184, 150, 46, 0.1);
  border-color: rgba(184, 150, 46, 0.65);
  color: var(--gold-light);
}
.db-export-btn:active {
  background: rgba(184, 150, 46, 0.06);
}

@media (max-width: 1100px) {
  .db-filter-bar {
    grid-template-columns: minmax(0, 1fr);
    gap: 10px;
  }
  .db-filter-bar__trail {
    justify-content: space-between;
    width: 100%;
  }
  .db-filter-bar-scroll-outer {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: rgba(184, 150, 46, 0.25) transparent;
  }
  .db-filter-bar-scroll-outer::-webkit-scrollbar {
    height: 4px;
  }
  .db-filter-bar-scroll-outer::-webkit-scrollbar-thumb {
    background: rgba(184, 150, 46, 0.28);
    border-radius: 99px;
  }
  .db-filter-bar-inner {
    flex-wrap: nowrap;
    padding: 2px 0;
    scroll-snap-type: x proximity;
    width: max-content;
    max-width: none;
    min-width: 100%;
    box-sizing: border-box;
  }
  .db-filter-chip {
    flex: 0 0 auto;
    width: min(184px, 70vw);
    max-width: 200px;
    scroll-snap-align: start;
  }
}

@media (max-width: 520px) {
  .db-filter-chip {
    width: min(220px, 82vw);
  }
}

/* ── Panels ── */
.db-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 28px;
  min-height: 0;
  -webkit-overflow-scrolling: touch;
}
.db-content::-webkit-scrollbar { width: 5px; }
.db-content::-webkit-scrollbar-thumb { background: rgba(184,150,46,0.2); border-radius: 99px; }

.db-panel { display: none; }
.db-panel.active { display: block; animation: panelIn 0.35s ease; }
@keyframes panelIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

/* ── KPI Grid (legacy helpers still used inside overview tiles) ── */
.db-kpi-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 16px; margin-bottom: 24px; }

#dbKpiStrip { margin-bottom: 20px; }

/* ── Rich KPI overview (funnel + chart tiles, replaces plain cards) ── */
.db-overviewviz {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 8px;
}
.db-overviewviz-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.db-overviewviz-title {
  font-size: clamp(13px, 1.4vw, 15px);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.92);
  letter-spacing: 0.04em;
}
html[data-lang="ar"] .db-overviewviz-title { font-family: 'Cairo', sans-serif; letter-spacing: 0; }
.db-overviewviz-card {
  background: var(--db-card);
  border: 1px solid var(--db-border-subtle);
  border-radius: 14px;
  padding: 16px 18px 14px;
  position: relative;
  overflow: hidden;
}
.db-overviewviz-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--gold), #3b82f6, #22C55E, #a855f7);
}
.db-overviewviz-card-hd {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--db-muted);
  margin-bottom: 12px;
}
html[data-lang="ar"] .db-overviewviz-card-hd { font-family: 'Cairo', sans-serif; letter-spacing: 0; }
.db-overviewviz-funnel { min-height: 108px; }
.db-overviewviz-funnel--rep { min-height: 112px; }
.db-overview-rep {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 22px;
  padding: 4px 0 8px;
}
.db-overview-rep-gauge {
  position: relative;
  flex: 0 0 200px;
  max-width: 240px;
  width: 100%;
  margin-inline: auto;
  padding-bottom: 12px;
}
.db-overview-rep-g svg {
  display: block;
  width: 100%;
  height: auto;
}
.db-overview-rep-val {
  position: absolute;
  inset-inline: 0;
  bottom: 8px;
  text-align: center;
  pointer-events: none;
}
.db-overview-rep-num {
  font-size: clamp(22px, 4vw, 28px);
  font-weight: 800;
  color: #fff;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}
html[data-lang="ar"] .db-overview-rep-num {
  font-family: 'Cairo', sans-serif;
}
.db-overview-rep-lbl {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #5eead4;
  margin-top: 4px;
}
html[data-lang="ar"] .db-overview-rep-lbl {
  font-family: 'Cairo', sans-serif;
  letter-spacing: 0;
  text-transform: none;
  font-size: 11px;
}
.db-overview-rep-copy {
  flex: 1;
  min-width: min(280px, 100%);
  font-size: 12px;
  line-height: 1.55;
  color: var(--db-muted);
  font-weight: 600;
}
html[data-lang="ar"] .db-overview-rep-copy {
  font-family: 'Cairo', sans-serif;
  font-size: 13px;
}
.db-overview-rep-stat {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 24px;
  margin-top: 12px;
  font-variant-numeric: tabular-nums;
  color: rgba(255, 255, 255, 0.82);
}
.db-funnel-stack { display: flex; flex-direction: column; gap: 10px; }
.db-funnel-bars {
  display: grid;
  align-items: end;
  gap: 4px;
  height: 86px;
  padding: 0 2px;
}
.db-funnel-bar {
  border-radius: 8px 8px 4px 4px;
  min-height: 16px;
  position: relative;
  background: linear-gradient(180deg, rgba(59, 130, 246, 0.55), rgba(59, 130, 246, 0.08));
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.2);
}
.db-funnel-bar:nth-child(1) {
  background: linear-gradient(180deg, rgba(212, 175, 85, 0.5), rgba(212, 175, 85, 0.1));
}
.db-funnel-bar:nth-child(2) {
  background: linear-gradient(180deg, rgba(56, 189, 248, 0.5), rgba(59, 130, 246, 0.12));
}
.db-funnel-bar:nth-child(3) {
  background: linear-gradient(180deg, rgba(34, 197, 94, 0.45), rgba(34, 197, 94, 0.1));
}
.db-funnel-bar:nth-child(4) {
  background: linear-gradient(180deg, rgba(168, 85, 247, 0.5), rgba(168, 85, 247, 0.1));
}
.db-funnel-vals {
  display: grid;
  gap: 4px;
  font-size: 11px;
  font-weight: 700;
  text-align: center;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.3;
}
html[data-lang="ar"] .db-funnel-vals { font-family: 'Cairo', sans-serif; font-size: 12px; }
.db-funnel-vals small {
  display: block;
  font-size: 9px;
  font-weight: 600;
  color: var(--db-muted);
  margin-top: 2px;
}
html[data-lang="ar"] .db-funnel-vals small { font-size: 10px; }
.db-funnel-foot {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 24px;
  margin-top: 8px;
  padding-top: 10px;
  border-top: 1px solid var(--db-border-subtle);
  font-size: 11px;
  font-weight: 700;
  color: var(--db-muted);
}
html[data-lang="ar"] .db-funnel-foot { font-family: 'Cairo', sans-serif; font-size: 12px; }
.db-funnel-foot strong { color: var(--gold-light); font-variant-numeric: tabular-nums; }
.db-overviewviz-metrics {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
}
.db-overviewviz-tile.db-kpi-card { padding: 14px 16px 18px; }
.db-overviewviz-chart-area {
  min-height: 72px;
  max-height: 88px;
  margin: 2px 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.db-overviewviz-chart-area svg { width: 100%; max-width: 200px; height: auto; overflow: visible; }
.db-overviewviz-spark-wrap {
  width: 100%;
  margin: -6px 0 4px;
  opacity: 0.92;
}
.db-overviewviz-spark-wrap svg { width: 100%; height: 44px; display: block; }
.db-overviewviz-mini-bars { width: 100%; max-width: 220px; margin: 0 auto; display: flex; flex-direction: column; gap: 7px; }
.db-overviewviz-mini-row {
  display: grid;
  grid-template-columns: minmax(0, 92px) 1fr;
  gap: 8px;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
}
html[data-lang="ar"] .db-overviewviz-mini-row { font-family: 'Cairo', sans-serif; }
.db-overviewviz-mini-row span:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.78);
}
.db-overviewviz-mini-track {
  height: 7px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}
.db-overviewviz-mini-fill {
  height: 100%;
  border-radius: 99px;
  background: linear-gradient(90deg, var(--gold), var(--gold-light));
}
.db-overviewviz-risk-meter {
  position: relative;
  width: 100%;
  max-width: 200px;
  height: 12px;
  border-radius: 99px;
  background: linear-gradient(90deg, #22c55e, #eab308 45%, #f97316 70%, #dc2626);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.35);
  margin-bottom: 4px;
}
.db-overviewviz-risk-tick {
  position: absolute;
  top: -5px;
  width: 0;
  height: 0;
  border-inline: 7px solid transparent;
  border-top: 9px solid #fff;
  transform: translateX(-50%);
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.5));
}
.db-overviewviz-donut {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  margin: 0 auto;
  box-shadow:
    inset 0 2px 14px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.06);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(50% - 10px), #000 calc(50% - 9px));
  mask: radial-gradient(farthest-side, transparent calc(50% - 10px), #000 calc(50% - 9px));
  transition: background 0.35s ease;
}
.db-overviewviz-donut--r2 { width: 80px; height: 80px; }

/* Hide KPI strip on Pilot + Demographics (full-width panel flow) */
#customerDashboard.db-panel-no-kpi #dbKpiStrip {
  display: none !important;
}
#customerDashboard.db-panel-no-kpi .db-content {
  padding-block-start: 28px;
}

/* Pilot tab: instrument flow diagram */
.db-pilot-flow-card { margin-bottom: 20px; }
.db-pilot-diagram-wrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 0 -4px;
  padding: 4px;
}
.db-pilot-flow-svg {
  display: block;
  width: 100%;
  min-width: 520px;
  max-width: 720px;
  height: auto;
  margin: 0 auto;
}
.db-pilot-flow-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 22px;
  margin-top: 14px;
  font-size: 11px;
  font-weight: 600;
  color: var(--db-muted);
}
html[data-lang="ar"] .db-pilot-flow-legend { font-family: 'Cairo', sans-serif; }
.db-pilot-legend-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.db-pilot-legend-chip > i {
  width: 11px;
  height: 11px;
  border-radius: 3px;
  flex-shrink: 0;
}
.db-pilot-legend-chip > i.ret { background: linear-gradient(90deg, var(--gold), var(--gold-light)); }
.db-pilot-legend-chip > i.rem { background: rgba(239, 68, 68, 0.85); }
.db-pilot-alpha-block {
  margin-top: 22px;
  padding-top: 20px;
  border-top: 1px solid var(--db-border-subtle);
}
.db-pilot-alpha-head {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--db-muted);
  margin-bottom: 14px;
}
html[data-lang="ar"] .db-pilot-alpha-head { font-family: 'Cairo', sans-serif; letter-spacing: 0; }
.db-pilot-alpha-row {
  display: grid;
  grid-template-columns: minmax(0, 148px) 1fr 40px;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 600;
}
html[data-lang="ar"] .db-pilot-alpha-row { font-family: 'Cairo', sans-serif; }
.db-pilot-alpha-name { color: rgba(255,255,255,0.92); line-height: 1.3; word-break: break-word; }
.db-pilot-alpha-track {
  height: 10px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}
.db-pilot-alpha-fill {
  height: 100%;
  border-radius: 99px;
  background: linear-gradient(90deg, rgba(212,175,85,0.85), var(--gold-light));
}
.db-pilot-alpha-val {
  font-variant-numeric: tabular-nums;
  color: var(--gold-light);
  text-align: end;
}

/* Questionnaire: Items | Instrument map — equal columns (structure + legend under diagram) */
.db-q-panel-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-areas: 'items viz';
  column-gap: 12px;
  row-gap: 16px;
  margin-bottom: 20px;
  align-items: start;
}
.db-q-panel-grid > .db-card {
  margin-bottom: 0;
}
.db-q-panel-grid > .db-q-panel-items {
  grid-area: items;
}
.db-q-panel-grid > .db-q-panel-viz {
  grid-area: viz;
  align-self: start;
  width: 100%;
}
html[data-lang="ar"] .db-q-panel-grid {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-areas: 'viz items';
}

#customerDashboard:has(#db-panel-questionnaire.active) .db-content {
  padding-left: clamp(12px, 2vw, 22px);
  padding-right: clamp(12px, 2vw, 22px);
}

#db-panel-questionnaire .db-q-panel-items.db-card {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

#db-panel-questionnaire .db-q-panel-viz.db-card {
  display: flex;
  flex-direction: column;
}

#db-panel-questionnaire .db-q-panel-viz .db-card-body {
  display: flex;
  flex-direction: column;
}

#db-panel-questionnaire .db-q-panel-viz .db-q-viz-wrap {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 10px 8px;
  border-radius: 10px;
  background: rgba(15, 23, 42, 0.4);
  border: 1px solid rgba(212, 175, 85, 0.1);
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
}
#db-panel-questionnaire .db-q-panel-viz .db-q-viz-svg {
  max-width: 100%;
  width: 100%;
  min-width: 260px;
  height: auto;
}
#db-panel-questionnaire .db-q-panel-viz .db-q-viz-legend {
  margin-top: 12px;
  flex-shrink: 0;
}
#db-panel-questionnaire .db-q-panel-viz .db-q-viz-note {
  margin-top: 10px;
  margin-bottom: 0;
  flex-shrink: 0;
}
#db-panel-questionnaire .db-q-panel-viz .db-q-panel-struct--nested {
  margin-top: 16px;
  margin-bottom: 0;
  border: 1px solid rgba(212, 175, 85, 0.15);
  border-radius: 10px;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.35);
}
#db-panel-questionnaire .db-q-panel-viz .db-q-panel-struct--nested .db-card-header {
  padding: 14px 16px;
}
#db-panel-questionnaire .db-q-panel-viz .db-q-panel-struct--nested .db-card-body {
  padding: 16px 16px 18px;
}
html[data-lang="ar"] #db-panel-questionnaire .db-q-panel-viz .db-q-viz-legend,
html[data-lang="ar"] #db-panel-questionnaire .db-q-panel-viz .db-q-viz-note {
  direction: rtl;
  text-align: right;
}

.db-q-panel-items .db-q-items-inner {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.db-q-section {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--db-border-subtle);
  background: rgba(15, 23, 42, 0.5);
}
.db-q-section-head {
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 700;
  color: var(--gold-light);
  letter-spacing: 0.03em;
  border-bottom: 1px solid rgba(212, 175, 85, 0.22);
  background: rgba(184, 150, 46, 0.1);
}
html[data-lang="ar"] .db-q-section-head {
  font-family: 'Cairo', sans-serif;
  font-size: 16px;
  text-align: right;
  direction: rtl;
}
.db-q-lines {
  list-style: none;
  margin: 0;
  padding: 12px 16px 14px;
  display: flex;
  flex-direction: column;
}
.db-q-lines li {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 12px 14px;
  align-items: start;
  padding: 11px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 13px;
  line-height: 1.55;
  color: rgba(248, 250, 252, 0.9);
}
.db-q-lines li:last-child {
  border-bottom: none;
  padding-bottom: 4px;
}
html[data-lang="ar"] .db-q-lines li {
  font-family: 'Cairo', sans-serif;
  grid-template-columns: minmax(0, 1fr) 48px;
  text-align: right;
  direction: rtl;
}
.db-q-tag {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  align-self: start;
  min-height: 32px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.03em;
  font-variant-numeric: tabular-nums;
  background: rgba(184, 150, 46, 0.14);
  border: 1px solid rgba(212, 175, 85, 0.38);
  color: var(--gold-light);
}
.db-q-lines-txt span {
  display: block;
}
html[data-lang="ar"] .db-q-tag {
  font-family: 'Cairo', sans-serif;
}
.db-q-viz-wrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 0 -4px;
  padding: 4px;
}
.db-q-viz-svg {
  display: block;
  width: 100%;
  min-width: 280px;
  max-width: 560px;
  height: auto;
  margin: 0 auto;
}
.db-q-viz-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 20px;
  margin-top: 14px;
  font-size: 11px;
  font-weight: 600;
  color: var(--db-muted);
}
html[data-lang="ar"] .db-q-viz-legend { font-family: 'Cairo', sans-serif; }
.db-q-viz-note {
  margin-top: 14px;
  font-size: 11px;
  line-height: 1.55;
  color: var(--db-muted);
}
html[data-lang="ar"] .db-q-viz-note { font-family: 'Cairo', sans-serif; }

/* Questionnaire structure table */
#db-panel-questionnaire .db-q-panel-struct .db-table-wrap {
  overflow-x: visible;
}
#db-panel-questionnaire .db-q-panel-struct table.db-table {
  table-layout: fixed;
  width: 100%;
}
#db-panel-questionnaire .db-q-panel-struct table.db-table th,
#db-panel-questionnaire .db-q-panel-struct table.db-table td {
  white-space: normal;
  vertical-align: top;
  overflow-wrap: break-word;
  word-break: break-word;
}
#db-panel-questionnaire .db-q-panel-struct table.db-table th:nth-child(1),
#db-panel-questionnaire .db-q-panel-struct table.db-table td:nth-child(1) {
  width: 32%;
}
#db-panel-questionnaire .db-q-panel-struct table.db-table th:nth-child(2),
#db-panel-questionnaire .db-q-panel-struct table.db-table td:nth-child(2) {
  width: 10%;
}
.db-mq-measure-card { margin-bottom: 20px; }
.db-mq-measure-intro {
  font-size: 13px;
  line-height: 1.65;
  color: var(--db-muted);
  margin-bottom: 20px;
  max-width: 720px;
}
html[data-lang="ar"] .db-mq-measure-intro { font-family: 'Cairo', sans-serif; }
.db-mq-measure-split {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: clamp(18px, 3vw, 32px);
  justify-content: space-between;
}
.db-mq-construct-list {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1 1 260px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.db-mq-ant {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  font-weight: 600;
  font-size: 13px;
}
html[data-lang="ar"] .db-mq-ant { font-family: 'Cairo', sans-serif; }
.db-mq-ant strong .en,
.db-mq-ant strong .ar { font-weight: 700; color: rgba(255, 255, 255, 0.95); }
.db-mq-ant--quality { border-color: rgba(96, 165, 250, 0.45); background: rgba(96, 165, 250, 0.08); }
.db-mq-ant--comm { border-color: rgba(52, 211, 153, 0.45); background: rgba(52, 211, 153, 0.06); }
.db-mq-ant--price { border-color: rgba(234, 179, 8, 0.4); background: rgba(234, 179, 8, 0.07); }
.db-mq-ant--speed { border-color: rgba(167, 139, 250, 0.5); background: rgba(167, 139, 250, 0.07); }
.db-mq-ant--cx {
  border-color: rgba(212, 175, 85, 0.45);
  background: rgba(184, 150, 46, 0.1);
  grid-template-columns: 40px minmax(0, 1fr) auto;
}
.db-mq-ico {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.db-mq-ant--quality .db-mq-ico { background: rgba(96, 165, 250, 0.25); border: 1px solid rgba(96, 165, 250, 0.5); }
.db-mq-ant--comm .db-mq-ico { background: rgba(52, 211, 153, 0.22); border: 1px solid rgba(52, 211, 153, 0.45); }
.db-mq-ant--price .db-mq-ico { background: rgba(234, 179, 8, 0.22); border: 1px solid rgba(234, 179, 8, 0.45); }
.db-mq-ant--speed .db-mq-ico { background: rgba(167, 139, 250, 0.25); border: 1px solid rgba(167, 139, 250, 0.45); }
.db-mq-ant--cx .db-mq-ico { background: rgba(212, 175, 85, 0.2); border: 1px solid rgba(212, 175, 85, 0.42); color: var(--gold-light); }
.db-mq-ant-text small {
  display: block;
  font-size: 10px;
  font-weight: 600;
  color: var(--db-muted);
  margin-top: 3px;
  line-height: 1.35;
}
html[data-lang="ar"] .db-mq-ant-text small { font-family: 'Cairo', sans-serif; font-size: 11px; }
.db-mq-chip {
  flex-shrink: 0;
  min-width: 56px;
  text-align: center;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--gold-light);
}
.db-mq-chip-lg {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  line-height: 1.2;
}
.db-mq-chip-lg .db-mq-qty { font-size: 15px; font-weight: 800; color: rgba(255, 255, 255, 0.95); }
.db-mq-chip-lg .db-mq-q-note {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--db-muted);
}
html[data-lang="ar"] .db-mq-chip-lg .db-mq-q-note { font-family: 'Cairo', sans-serif; letter-spacing: 0; text-transform: none; font-size: 10px; }
.db-mq-diagram-panel {
  flex: 1 1 260px;
  min-width: 0;
}
.db-mq-diagram-caption {
  font-size: 11px;
  color: var(--db-muted);
  margin-top: 14px;
  text-align: center;
  max-width: 520px;
  margin-inline: auto;
}
html[data-lang="ar"] .db-mq-diagram-caption { font-family: 'Cairo', sans-serif; }
.db-mq-svg-wrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.db-mq-model-svg {
  display: block;
  width: 100%;
  max-width: 560px;
  height: auto;
  margin-inline: auto;
}

/* ── Demographics: pipeline / exclusions / sample strength (reference-style) ── */
.db-demo-quality-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}
@media (max-width: 900px) {
  .db-demo-quality-top { grid-template-columns: 1fr; }
  .db-demo-profile-columns { grid-template-columns: 1fr; }
}
.db-demo-qcard {
  background: var(--db-card);
  border: 1px solid var(--db-border-subtle);
  border-radius: 14px;
  padding: 16px 18px 18px;
  position: relative;
  overflow: hidden;
}
.db-demo-qcard::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
}
.db-demo-qcard--funnel::after {
  background: linear-gradient(90deg, #2563eb, #22d3ee, #22c55e);
}
.db-demo-qcard--exc::after {
  background: linear-gradient(90deg, #ef4444, #f97316);
}
.db-demo-qcard-hd {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}
.db-demo-qcard-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.db-demo-qcard--funnel .db-demo-qcard-icon {
  background: rgba(37, 99, 235, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.45);
  color: #60a5fa;
}
.db-demo-qcard--exc .db-demo-qcard-icon {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(248, 113, 113, 0.45);
  color: #fca5a5;
}
.db-demo-qcard-title {
  font-weight: 800;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.02em;
}
html[data-lang="ar"] .db-demo-qcard-title { font-family: 'Cairo', sans-serif; }
.db-demo-qcard-head-copy { flex: 1; min-width: 0; }
.db-demo-qcard--strength .db-demo-qcard-hd { align-items: flex-start; }
.db-demo-qcard-desc {
  margin: 6px 0 0;
  font-size: 11px;
  line-height: 1.48;
  color: var(--db-muted);
  font-weight: 500;
}
html[data-lang="ar"] .db-demo-qcard-desc { font-family: 'Cairo', sans-serif; letter-spacing: 0; font-size: 12px; }
.db-demo-funnel-scroll {
  overflow-x: hidden;
  overflow-y: visible;
  margin: 0;
  padding: 0;
  min-width: 0;
}
#dbDemoQualityFunnel {
  width: 100%;
  min-width: 0;
}
.db-demo-funnel-svg {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
}
.db-demo-funnel-caption-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px 8px;
  text-align: center;
  margin-top: 8px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.9);
}
@media (max-width: 640px) {
  .db-demo-funnel-caption-grid { font-size: 10px; }
}
html[data-lang="ar"] .db-demo-funnel-caption-grid { font-family: 'Cairo', sans-serif; font-size: 12px; }
.db-demo-funnel-caption-grid small {
  display: block;
  font-size: 9px;
  font-weight: 600;
  color: var(--db-muted);
  margin-top: 4px;
}
html[data-lang="ar"] .db-demo-funnel-caption-grid small { font-size: 10px; }
.db-exc-center-n {
  font-size: clamp(21px, 5.2vw, 26px);
  font-weight: 800;
  color: #fff;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}
html[data-lang="ar"] .db-exc-center-n { font-family: 'Cairo', sans-serif; }
.db-exc-center-lbl {
  font-size: 9.5px;
  font-weight: 700;
  color: rgba(226, 232, 240, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  max-width: 96px;
  line-height: 1.22;
}
html[data-lang="ar"] .db-exc-center-lbl {
  font-family: 'Cairo', sans-serif;
  letter-spacing: 0;
  text-transform: none;
  font-size: 10px;
}
.db-demo-funnel-kpis {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 10px;
}
@media (max-width: 480px) {
  .db-demo-funnel-kpis { grid-template-columns: 1fr; }
}
.db-demo-kpi-mini {
  border: 1px solid var(--db-border-subtle);
  border-radius: 10px;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.03);
}
.db-demo-kpi-mini .val {
  font-size: 20px;
  font-weight: 800;
  color: #93c5fd;
  font-variant-numeric: tabular-nums;
}
html[data-lang="ar"] .db-demo-kpi-mini .val { font-family: 'Cairo', sans-serif; }
.db-demo-kpi-mini .lbl {
  font-size: 10px;
  font-weight: 700;
  color: var(--db-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}
html[data-lang="ar"] .db-demo-kpi-mini .lbl {
  font-family: 'Cairo', sans-serif;
  letter-spacing: 0;
  text-transform: none;
  font-size: 11px;
}
.db-demo-kpi-mini .sub {
  font-size: 10px;
  color: var(--db-muted);
  margin-top: 4px;
}
html[data-lang="ar"] .db-demo-kpi-mini .sub { font-family: 'Cairo', sans-serif; font-size: 11px; }
#dbDemoQualityExclusions {
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
}
.db-exc-body {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 10px;
  justify-content: space-between;
}
html[data-lang="ar"] .db-exc-body { flex-direction: row-reverse; }
.db-exc-donut-col {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1.08 1 0;
  min-width: 0;
  padding-inline: 2px;
}
.db-exc-donut-wrap {
  position: relative;
  width: clamp(146px, 28vw, 176px);
  height: clamp(146px, 28vw, 176px);
  flex-shrink: 0;
}
.db-exc-donut {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow:
    inset 0 3px 20px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(255, 255, 255, 0.07),
    0 4px 18px rgba(0, 0, 0, 0.2);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(50% - 17px), #000 calc(50% - 16px));
  mask: radial-gradient(farthest-side, transparent calc(50% - 17px), #000 calc(50% - 16px));
}
.db-exc-donut-center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
}
.db-exc-rows {
  flex: 1.2 1 0;
  min-width: min(156px, 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}
.db-exc-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 11px;
  border-radius: 11px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.025));
  border: 1px solid rgba(255, 255, 255, 0.082);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.07),
    0 1px 14px rgba(0, 0, 0, 0.12);
}
html[data-lang="ar"] .db-exc-row {
  flex-direction: row-reverse;
  font-family: 'Cairo', sans-serif;
}
.db-exc-sw {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-inline-end: 11px;
  box-shadow:
    0 0 0 2px rgba(0, 0, 0, 0.4),
    0 2px 6px rgba(0, 0, 0, 0.25);
}
html[data-lang="ar"] .db-exc-sw { margin-inline-end: 0; margin-inline-start: 11px; }
.db-exc-row-main {
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 0;
}
html[data-lang="ar"] .db-exc-row-main { flex-direction: row-reverse; }
.db-exc-row-copy {
  min-width: 0;
}
.db-exc-row-label {
  display: block;
  font-size: 12.75px;
  font-weight: 800;
  letter-spacing: 0.02em;
  line-height: 1.3;
  color: rgba(250, 250, 250, 0.97);
}
html[data-lang="ar"] .db-exc-row-label {
  font-family: 'Cairo', sans-serif;
  font-weight: 800;
  font-size: 13px;
}
.db-exc-row-kicker {
  display: block;
  margin-top: 2px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(148, 163, 184, 0.88);
}
html[data-lang="ar"] .db-exc-row-kicker {
  font-family: 'Cairo', sans-serif;
  letter-spacing: 0;
  text-transform: none;
  font-size: 11px;
}
.db-exc-stat {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
  flex-shrink: 0;
}
html[data-lang="ar"] .db-exc-stat {
  align-items: flex-start;
}
.db-exc-num {
  font-size: 15px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  line-height: 1.1;
  color: #fcd34d;
  text-shadow: 0 0 28px rgba(251, 191, 36, 0.2);
}
html[data-lang="ar"] .db-exc-num {
  font-family: 'Cairo', sans-serif;
}
.db-exc-pct-line {
  font-size: 10.5px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: rgba(252, 211, 77, 0.75);
}
html[data-lang="ar"] .db-exc-pct-line {
  font-family: 'Cairo', sans-serif;
}
.db-exc-foot {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid var(--db-border-subtle);
  font-size: 13px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  color: rgba(255, 255, 255, 0.9);
}
.db-exc-foot > span:first-child {
  color: rgba(241, 245, 249, 0.92);
}
html[data-lang="ar"] .db-exc-foot { font-family: 'Cairo', sans-serif; }
.db-exc-foot-strong {
  color: #fca5a5;
  font-variant-numeric: tabular-nums;
}
@media (max-width: 720px) {
  .db-exc-body {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
  }
  html[data-lang="ar"] .db-exc-body {
    flex-direction: column;
  }
  .db-exc-donut-wrap {
    margin-inline: auto;
    width: min(182px, 72vw);
    height: min(182px, 72vw);
  }
  .db-exc-donut-col {
    width: 100%;
    flex: 1 1 auto;
    justify-content: center;
    padding-block: 2px;
  }
  .db-exc-rows {
    width: 100%;
    min-width: 0;
  }
  .db-exc-row {
    flex-wrap: wrap;
    row-gap: 4px;
  }
  .db-exc-stat {
    align-items: flex-end;
    min-width: 3.25rem;
  }
  html[data-lang="ar"] .db-exc-stat {
    align-items: flex-start;
  }
}
.db-demo-strength-wrap {
  margin-bottom: 16px;
}
.db-demo-qcard--strength::after {
  background: linear-gradient(90deg, #8b5cf6, #a78bfa, #34d399);
}
.db-demo-qcard--strength .db-demo-qcard-icon {
  background: rgba(139, 92, 246, 0.22);
  border: 1px solid rgba(167, 139, 250, 0.5);
  color: #c4b5fd;
}
.db-str-body {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 22px;
}
@media (max-width: 640px) {
  .db-str-body { flex-direction: column; }
}
.db-str-gauge {
  position: relative;
  flex: 0 0 200px;
  max-width: 220px;
  margin-inline: auto;
  padding-bottom: 10px;
}
@media (max-width: 640px) {
  .db-str-gauge {
    flex-basis: auto;
    width: min(260px, 100%);
    margin-inline: auto;
  }
}
.db-str-gauge-svg {
  display: block;
  width: 100%;
  height: auto;
}
.db-str-val {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 8px;
  text-align: center;
  pointer-events: none;
}
.db-str-val-num {
  font-size: 28px;
  font-weight: 800;
  color: #fff;
  font-variant-numeric: tabular-nums;
}
html[data-lang="ar"] .db-str-val-num { font-family: 'Cairo', sans-serif; }
.db-str-val-lbl {
  font-size: 11px;
  font-weight: 700;
  color: rgba(167, 139, 250, 0.95);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
html[data-lang="ar"] .db-str-val-lbl { font-family: 'Cairo', sans-serif; letter-spacing: 0; text-transform: none; font-size: 12px; }
.db-str-aside {
  flex: 1;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
}
.db-str-aside-sub {
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--db-muted);
  margin-bottom: 6px;
}
html[data-lang="ar"] .db-str-aside-sub { font-family: 'Cairo', sans-serif; letter-spacing: 0; text-transform: none; font-size: 11px; }
.db-str-twin {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.db-str-box {
  border: 1px solid rgba(139, 92, 246, 0.35);
  border-radius: 12px;
  padding: 12px 14px;
  background: rgba(139, 92, 246, 0.06);
}
.db-str-box .n {
  font-size: 24px;
  font-weight: 800;
  color: #c4b5fd;
  font-variant-numeric: tabular-nums;
}
html[data-lang="ar"] .db-str-box .n { font-family: 'Cairo', sans-serif; }
.db-str-box .l {
  font-size: 10px;
  font-weight: 700;
  color: var(--db-muted);
  margin-bottom: 4px;
}
html[data-lang="ar"] .db-str-box .l { font-family: 'Cairo', sans-serif; font-size: 11px; }
.db-str-msg {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  font-weight: 700;
}
.db-str-msg svg {
  flex-shrink: 0;
  margin-top: 1px;
}
html[data-lang="ar"] .db-str-msg { font-family: 'Cairo', sans-serif; }
.db-str-msg.ok { color: #4ade80; }
.db-str-msg.warn { color: #fcd34d; }
.db-str-msg.bad { color: #fca5a5; }
.db-str-gauge-cap {
  margin-top: 6px;
  padding: 0 4px;
  font-size: 10px;
  line-height: 1.45;
  color: rgba(148, 163, 184, 0.88);
  text-align: center;
  max-width: 220px;
  margin-inline: auto;
}
html[data-lang="ar"] .db-str-gauge-cap { font-family: 'Cairo', sans-serif; font-size: 11px; }
.db-str-box-hint {
  margin-top: 8px;
  font-size: 10px;
  line-height: 1.35;
  color: rgba(148, 163, 184, 0.85);
  font-weight: 600;
}
html[data-lang="ar"] .db-str-box-hint { font-family: 'Cairo', sans-serif; font-size: 11px; }
.db-str-legend {
  margin-top: 4px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid rgba(139, 92, 246, 0.22);
  background: rgba(15, 23, 42, 0.35);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.db-str-leg-row {
  display: grid;
  grid-template-columns: minmax(0, 112px) 1fr;
  gap: 10px 14px;
  align-items: start;
  font-size: 11px;
  line-height: 1.45;
}
@media (max-width: 520px) {
  .db-str-leg-row { grid-template-columns: 1fr; gap: 4px; }
}
.db-str-leg-k {
  font-weight: 800;
  color: rgba(196, 181, 253, 0.95);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 9px;
}
html[data-lang="ar"] .db-str-leg-k {
  font-family: 'Cairo', sans-serif;
  letter-spacing: 0;
  text-transform: none;
  font-size: 10px;
}
.db-str-leg-v { color: var(--db-muted); font-weight: 600; }
html[data-lang="ar"] .db-str-leg-v { font-family: 'Cairo', sans-serif; }

.db-kpi-card {
  background: var(--db-card);
  border: 1px solid var(--db-border-subtle);
  border-radius: 12px;
  padding: 20px 22px;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;
}
.db-kpi-card:hover { transform: translateY(-2px); border-color: var(--db-border); box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
.db-kpi-card::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--kpi-color, var(--gold)); }

.db-kpi-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.db-kpi-icon { width: 36px; height: 36px; border-radius: 8px; display: grid; place-items: center; background: var(--kpi-bg, rgba(184,150,46,0.15)); }

.db-kpi-trend { font-size: 11px; font-weight: 700; display: flex; align-items: center; gap: 3px; }
.db-kpi-trend.up { color: #22C55E; }
.db-kpi-trend.down { color: #ef4444; }
.db-kpi-trend.neutral { color: var(--db-muted); }
.db-kpi-trend-icon svg { display: block; }

.db-kpi-val { font-family: 'Cormorant Garamond', serif; font-size: clamp(20px, 2.2vw, 36px); font-weight: 600; color: var(--white); line-height: 1.15; margin-bottom: 4px; overflow: hidden; word-break: break-word; }
html[data-lang="ar"] .db-kpi-val { font-family: 'Cairo', sans-serif; font-size: clamp(18px, 1.8vw, 28px); }
.db-kpi-label { font-size: 11px; color: var(--db-muted); letter-spacing: 0.06em; }
html[data-lang="ar"] .db-kpi-label { font-family: 'Cairo', sans-serif; letter-spacing: 0; }
.db-kpi-sublabel { font-size: 11px; color: var(--db-muted); margin-top: 6px; line-height: 1.35; }
html[data-lang="ar"] .db-kpi-sublabel { font-family: 'Cairo', sans-serif; }
.db-kpi-pill {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 6px;
  background: rgba(184,150,46,0.14);
  color: var(--gold-light);
  border: 1px solid rgba(184,150,46,0.28);
}
html[data-lang="ar"] .db-kpi-pill { font-family: 'Cairo', sans-serif; letter-spacing: 0; font-size: 11px; }

/* ── Driver bubble map (responsive grid — no overlap) ── */
.db-bubble-map {
  min-height: 120px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--db-border-subtle);
  border-radius: 12px;
  position: relative;
  overflow: visible;
  padding: 14px 12px 18px;
}
.db-bubble-layer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 14px;
  align-items: start;
  justify-items: center;
  max-width: 720px;
  margin: 0 auto;
}
.db-bubble {
  position: relative;
  border-radius: 999px;
  background: rgba(255,255,255,0.07);
  border: 2px solid rgba(255,255,255,0.14);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 10px;
  font-weight: 700;
  color: rgba(255,255,255,0.92);
  box-shadow: 0 6px 20px rgba(0,0,0,0.28);
  padding: 8px;
  line-height: 1.25;
  flex-shrink: 0;
  aspect-ratio: 1;
}
html[data-lang="ar"] .db-bubble { font-family: 'Cairo', sans-serif; }
.db-bubble-name { font-size: clamp(10px, 2.8vw, 12px); max-width: 100%; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical; }
.db-bubble-imp { font-size: 9px; color: rgba(255,255,255,0.55); margin-top: 4px; font-variant-numeric: tabular-nums; }
.db-bubble.low { background: rgba(220,38,38,0.14); border-color: rgba(248,113,113,0.5); color: #fecaca; }
.db-bubble.low .db-bubble-imp { color: rgba(254,202,202,0.65); }
@media (min-width: 900px) {
  .db-bubble-layer {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 16px 12px;
    max-width: none;
  }
}

/* ── Demographics mini-charts ── */
.db-demo-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(12px, 2vw, 16px);
  min-width: 0;
}
#dbDemoInsight + .db-demo-grid {
  margin-top: clamp(14px, 2.2vw, 20px);
}
/* Odd last row: span full width so 5 tiles do not leave a blank cell */
@media (min-width: 721px) {
  .db-demo-grid .db-mini-chart:last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }
}
@media (max-width: 720px) {
  .db-demo-grid {
    grid-template-columns: 1fr;
  }
}
.db-mini-chart {
  border: 1px solid var(--db-border-subtle);
  border-radius: 12px;
  padding: 16px 18px;
  background: rgba(255,255,255,0.02);
  min-width: 0;
  container-type: inline-size;
  container-name: dbdemo-mini;
}
.db-mini-title { font-weight: 700; font-size: 13px; color: var(--white); margin: 0 0 12px; }
html[data-lang="ar"] .db-mini-title { font-family: 'Cairo', sans-serif; }
.db-demo-chart { display: flex; flex-direction: column; gap: 10px; }
.db-demo-chart--rich { gap: 12px; }
.db-demo-kicker {
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--db-muted);
  margin: -4px 0 10px;
}
html[data-lang="ar"] .db-demo-kicker { font-family: 'Cairo', sans-serif; letter-spacing: 0; }
html[data-lang="ar"] .db-demo-kicker .en { display: none; }
html[data-lang="en"] .db-demo-kicker .ar { display: none; }
.db-demo-donut-shell {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  justify-content: space-between;
}
html[data-lang="ar"] .db-demo-donut-shell { flex-direction: row-reverse; }
.db-demo-donut-wrap { flex-shrink: 0; position: relative; }
.db-demo-donut {
  width: clamp(82px, min(136px, 44cqi), 136px);
  aspect-ratio: 1;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow:
    inset 0 2px 14px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(255, 255, 255, 0.07),
    0 3px 14px rgba(0, 0, 0, 0.12);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(50% - 13px), #000 calc(50% - 12px));
  mask: radial-gradient(farthest-side, transparent calc(50% - 13px), #000 calc(50% - 12px));
}
@supports not (width: 1cqi) {
  .db-demo-donut {
    width: clamp(86px, 30vw, 136px);
  }
}
.db-demo-mini-legend { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 8px; }
html[data-lang="ar"] .db-demo-mini-legend { align-items: flex-end; text-align: right; }
.db-demo-legend-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3;
}
html[data-lang="ar"] .db-demo-legend-row { flex-direction: row-reverse; justify-content: flex-start; font-family: 'Cairo', sans-serif; }
.db-demo-legend-sw { flex-shrink: 0; width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.35); }
.db-demo-legend-lbl {
  flex: 1;
  min-width: 0;
  color: rgba(255, 255, 255, 0.92);
}
html[data-lang="ar"] .db-demo-legend-lbl .en { display: none; }
html[data-lang="en"] .db-demo-legend-lbl .ar { display: none; }
.db-demo-legend-pct {
  font-variant-numeric: tabular-nums;
  color: var(--gold-light);
  font-weight: 700;
}
.db-demo-stack {
  height: 12px;
  border-radius: 99px;
  overflow: hidden;
  display: flex;
  width: 100%;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
}
.db-demo-stack > span {
  min-width: 2px;
  height: 100%;
  opacity: 0.95;
  transition: opacity 0.2s ease;
}
.db-demo-svg-wrap {
  width: 100%;
  margin: -2px 0 4px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  display: flex;
  justify-content: center;
}
.db-demo-svg-wrap svg {
  width: 100%;
  height: auto;
  max-height: clamp(104px, 22vw, 152px);
  max-width: 920px;
  margin-inline: auto;
  flex-shrink: 0;
  display: block;
  overflow: visible;
}

/* Ordinal axis stays LTR so bars line up under labels even in RTL UI */
.db-demo-chart-cols {
  direction: ltr;
  width: 100%;
}
/* Stack donut + legend when the mini-card is narrow (split view, small tablets, etc.) */
@container dbdemo-mini (max-width: 420px) {
  .db-demo-donut-shell {
    flex-direction: column !important;
    align-items: center;
    gap: 12px;
  }
  html[data-lang="ar"] .db-demo-donut-shell {
    flex-direction: column !important;
  }
  .db-demo-mini-legend {
    width: 100%;
    max-width: 288px;
  }
}
.db-demo-col-grid {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  gap: 4px;
  margin-top: 6px;
  font-size: 10px;
  font-weight: 600;
  color: var(--db-muted);
  text-align: center;
  line-height: 1.25;
}
html[data-lang="ar"] .db-demo-col-grid .en { display: none; }
html[data-lang="en"] .db-demo-col-grid .ar { display: none; }

.db-demo-row { display: grid; grid-template-columns: minmax(0, 130px) 1fr 40px; gap: 10px; align-items: center; font-size: 12px; font-weight: 600; }
.db-demo-row > span:first-child { color: rgba(255,255,255,0.9); font-weight: 600; line-height: 1.35; word-break: break-word; }
.db-demo-row > span:last-child { color: var(--gold-light); font-variant-numeric: tabular-nums; }
html[data-lang="ar"] .db-demo-row { grid-template-columns: minmax(0, 120px) 1fr 36px; font-family: 'Cairo', sans-serif; }
.db-demo-track { height: 8px; background: rgba(255,255,255,0.08); border-radius: 99px; overflow: hidden; }
.db-demo-fill { height: 100%; border-radius: 99px; background: linear-gradient(90deg, var(--gold), var(--gold-light)); }

@media (max-width: 720px) {
  .db-mini-chart {
    padding: 12px 14px;
  }
  .db-demo-row {
    grid-template-columns: minmax(0, 34%) minmax(0, 1fr) 34px;
    gap: 8px;
    font-size: 11px;
  }
  html[data-lang="ar"] .db-demo-row {
    grid-template-columns: minmax(0, 34%) minmax(0, 1fr) 32px;
  }
  .db-demo-svg-wrap svg {
    max-height: min(120px, 28vw);
  }
  #db-panel-demographics .db-card-body {
    padding: 16px 14px 18px;
  }
  #db-panel-demographics .db-card-header {
    padding: 14px 16px;
    flex-wrap: wrap;
    gap: 8px;
  }
}

/* Phones: stack donut + legend where @container is unsupported or layout is cramped */
@media (max-width: 480px) {
  .db-demo-donut-shell {
    flex-direction: column;
    align-items: center;
  }
  html[data-lang="ar"] .db-demo-donut-shell {
    flex-direction: column;
  }
  .db-demo-mini-legend {
    width: 100%;
    max-width: 300px;
  }
  html[data-lang="ar"] .db-demo-mini-legend {
    align-items: flex-end;
  }
}

@media (max-width: 400px) {
  .db-demo-row {
    grid-template-columns: minmax(0, 30%) minmax(0, 1fr) 30px;
    gap: 6px;
    font-size: 10px;
  }
  .db-demo-col-grid {
    font-size: 9px;
    gap: 2px;
  }
  html[data-lang="ar"] .db-demo-col-grid {
    font-size: 9px;
  }
  .db-demo-legend-row {
    font-size: 11px;
  }
  .db-demo-kicker {
    font-size: 9px;
  }
}

/* ── Cards ── */
.db-card {
  background: var(--db-card);
  border: 1px solid var(--db-border-subtle);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
}
.db-card-header { padding: 18px 22px; border-bottom: 1px solid var(--db-border-subtle); display: flex; align-items: center; justify-content: space-between; }
.db-card-title { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 600; color: var(--white); }
html[data-lang="ar"] .db-card-title { font-family: 'Cairo', sans-serif; font-size: 17px; font-weight: 700; }
.db-card-subtitle { font-size: 11px; color: var(--db-muted); margin-top: 2px; }
html[data-lang="ar"] .db-card-subtitle { font-family: 'Cairo', sans-serif; }
.db-card-body { padding: 22px; }

.db-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }

/* Demographics: split charts across columns + wide age band row */
.db-demo-profile-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
  align-items: stretch;
}
.db-demo-profile-columns > .db-demo-profile-span {
  grid-column: 1 / -1;
}

/* Demographics: symmetric columns — stacked mini-charts stretch so the right column is not hollow */
#db-panel-demographics .db-demo-profile-columns > .db-card:not(.db-demo-profile-span) {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
#db-panel-demographics .db-demo-profile-columns > .db-card:not(.db-demo-profile-span) .db-card-header {
  flex-shrink: 0;
}
#db-panel-demographics .db-demo-profile-columns > .db-card:not(.db-demo-profile-span) .db-card-body {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 1.8vw, 18px);
  min-height: 0;
}
#db-panel-demographics .db-demo-profile-columns > .db-card:not(.db-demo-profile-span) .db-info-box {
  flex-shrink: 0;
}
#db-panel-demographics .db-demo-profile-columns > .db-card:not(.db-demo-profile-span) .db-demo-grid {
  flex: 1 1 auto;
  min-height: 0;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(252px, 1fr));
  align-content: stretch;
}
@media (max-width: 900px) {
  #db-panel-demographics .db-demo-profile-columns > .db-card:not(.db-demo-profile-span) .db-demo-grid {
    grid-template-rows: auto;
  }
}
#db-panel-demographics .db-demo-profile-columns > .db-card:not(.db-demo-profile-span) .db-mini-chart {
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
}
#db-panel-demographics .db-demo-profile-columns > .db-card:not(.db-demo-profile-span) .db-demo-chart.db-demo-chart--rich {
  flex: 1 1 auto;
  min-height: 0;
}
#db-panel-demographics .db-demo-profile-columns > .db-card:not(.db-demo-profile-span) .db-demo-donut-shell {
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  gap: clamp(14px, 2.6vw, 24px);
  min-height: 0;
}
#db-panel-demographics .db-demo-chart-cols-grow {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 0;
  gap: 4px;
}
#db-panel-demographics .db-demo-profile-span .db-card-body {
  display: flex;
  flex-direction: column;
  min-height: 0;
}
#db-panel-demographics .db-demo-profile-span #dbAgeDemoChart {
  flex: 1 1 auto;
}

.db-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 20px; }

/* ── Bar Charts ── */
.db-bar-list { display: flex; flex-direction: column; gap: 14px; }
.db-bar-row { display: grid; grid-template-columns: 130px 1fr 44px; gap: 12px; align-items: center; font-size: 13px; }
html[data-lang="ar"] .db-bar-row { grid-template-columns: 140px 1fr 44px; }
.db-bar-label { font-weight: 600; color: var(--db-text); }
html[data-lang="ar"] .db-bar-label { font-family: 'Cairo', sans-serif; }
.db-bar-track { height: 8px; background: rgba(255,255,255,0.08); border-radius: 99px; overflow: hidden; }
.db-bar-fill { height: 100%; border-radius: 99px; background: linear-gradient(90deg, var(--gold), var(--gold-light)); transition: width 1.2s cubic-bezier(0.22,1,0.36,1); }
.db-bar-fill.navy { background: linear-gradient(90deg, var(--navy), var(--navy-mid)); }
.db-bar-fill.success { background: linear-gradient(90deg, #22C55E, #22C55E); }
.db-bar-fill.danger { background: linear-gradient(90deg, #dc2626, #ef4444); }
.db-bar-val { font-weight: 700; color: var(--gold-light); font-size: 13px; text-align: end; }

/* ── Badges ── */
.db-badge { display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px; border-radius: 99px; font-size: 11px; font-weight: 700; }
html[data-lang="ar"] .db-badge { font-family: 'Cairo', sans-serif; }
.db-badge-gold { background: rgba(184,150,46,0.18); color: var(--gold-light); border: 1px solid rgba(184,150,46,0.3); }
.db-badge-navy { background: var(--navy); color: var(--white); }
.db-badge-success { background: rgba(34,197,94,0.15); color: #22C55E; border: 1px solid rgba(34,197,94,0.25); }
.db-badge-warning { background: rgba(217,119,6,0.15); color: #fbbf24; border: 1px solid rgba(217,119,6,0.25); }
.db-badge-danger { background: rgba(220,38,38,0.15); color: #f87171; border: 1px solid rgba(220,38,38,0.25); }

/* ── Table ── */
.db-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; min-width: 0; }
table.db-table { width: 100%; border-collapse: collapse; font-size: 13px; }
table.db-table thead tr { border-bottom: 1px solid var(--db-border-subtle); }
table.db-table th { padding: 12px 14px; text-align: start; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--db-muted); background: rgba(255,255,255,0.03); white-space: nowrap; }
html[data-lang="ar"] table.db-table th { font-family: 'Cairo', sans-serif; letter-spacing: 0; font-size: 11px; }
table.db-table td { padding: 13px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); color: var(--db-text); }
html[data-lang="ar"] table.db-table td { font-family: 'Cairo', sans-serif; }
table.db-table tr:last-child td { border-bottom: none; }
table.db-table tr:hover td { background: rgba(255,255,255,0.02); }

/* Driver Ranking (CX Drivers): compact columns, no horizontal scrollbar */
.db-table-wrap--drivers-rank {
  overflow-x: hidden;
}
table.db-table--drivers-rank {
  table-layout: fixed;
  width: 100%;
  font-size: 12px;
}
table.db-table--drivers-rank th,
table.db-table--drivers-rank td {
  padding: 9px 6px;
  vertical-align: middle;
}
table.db-table--drivers-rank th {
  white-space: normal;
  line-height: 1.25;
  font-size: 9px;
  letter-spacing: 0.05em;
  hyphens: auto;
}
html[data-lang="ar"] table.db-table--drivers-rank th {
  font-size: 10px;
  letter-spacing: 0;
}
table.db-table--drivers-rank td:nth-child(1),
table.db-table--drivers-rank th:nth-child(1) {
  width: 9%;
  text-align: center;
}
table.db-table--drivers-rank td:nth-child(2),
table.db-table--drivers-rank th:nth-child(2) {
  width: 22%;
}
table.db-table--drivers-rank td:nth-child(3),
table.db-table--drivers-rank th:nth-child(3) {
  width: 17%;
  text-align: end;
}
html[data-lang="ar"] table.db-table--drivers-rank td:nth-child(3),
html[data-lang="ar"] table.db-table--drivers-rank th:nth-child(3) {
  text-align: start;
}
table.db-table--drivers-rank td:nth-child(4),
table.db-table--drivers-rank th:nth-child(4) {
  width: 20%;
  text-align: end;
  font-variant-numeric: tabular-nums;
}
html[data-lang="ar"] table.db-table--drivers-rank td:nth-child(4),
html[data-lang="ar"] table.db-table--drivers-rank th:nth-child(4) {
  text-align: start;
}
table.db-table--drivers-rank td:nth-child(5),
table.db-table--drivers-rank th:nth-child(5) {
  width: 32%;
}
table.db-table--drivers-rank td:nth-child(2) {
  word-break: break-word;
}
table.db-table--drivers-rank .db-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: 3px 7px;
  font-size: 10px;
  line-height: 1.25;
  white-space: normal;
  text-align: center;
}
@media (max-width: 640px) {
  table.db-table--drivers-rank th,
  table.db-table--drivers-rank td {
    padding: 8px 4px;
  }
  table.db-table--drivers-rank th {
    font-size: 8px;
  }
  html[data-lang="ar"] table.db-table--drivers-rank th {
    font-size: 9px;
  }
  table.db-table--drivers-rank .db-badge {
    font-size: 9px;
    padding: 3px 5px;
  }
}

.db-drivers-interpret {
  margin-top: 16px;
  padding: 14px 16px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.72);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--db-border-subtle);
}
.db-drivers-interpret b {
  color: rgba(255, 255, 255, 0.9);
}
html[data-lang="ar"] .db-drivers-interpret {
  font-family: 'Cairo', sans-serif;
  text-align: right;
}

/* ── Simulation ── */
.db-sim-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 24px; align-items: start; }
.db-sim-sliders-col { display: flex; flex-direction: column; gap: 14px; min-width: 0; }
.db-sim-toolbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}
html[data-lang="ar"] .db-sim-toolbar { justify-content: flex-start; }
.db-sim-reset-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid rgba(184,150,46,0.38);
  background: rgba(255,255,255,0.04);
  color: rgba(248,250,252,0.92);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s, color 0.2s;
}
.db-sim-reset-btn:hover {
  border-color: var(--gold-light);
  background: rgba(184,150,46,0.1);
  color: var(--white);
}
.db-sim-reset-btn svg { flex-shrink: 0; opacity: 0.9; stroke: currentColor; }
html[data-lang="ar"] .db-sim-reset-btn { font-family: 'Cairo', sans-serif; letter-spacing: 0; text-transform: none; font-size: 13px; }
.db-slider-wrap { margin-bottom: 22px; }
.db-slider-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.db-slider-name { font-size: 14px; font-weight: 600; color: var(--db-text); }
html[data-lang="ar"] .db-slider-name { font-family: 'Cairo', sans-serif; }
.db-slider-val { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: var(--gold-light); }
.db-sim-range-ticks {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 2px;
  font-size: 10px;
  font-weight: 700;
  color: rgba(148, 163, 184, 0.75);
  font-variant-numeric: tabular-nums;
}
html[data-lang="ar"] .db-sim-range-ticks { font-family: 'Cairo', sans-serif; }

input[type=range].db-range {
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 5px;
  border-radius: 99px;
  outline: none;
  cursor: pointer;
  /* Track + gold tick at 50% (center of 0–100 scale) */
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.1) calc(50% - 1px),
    rgba(184, 150, 46, 0.45) 50%,
    rgba(184, 150, 46, 0.45) calc(50% + 1px),
    rgba(255, 255, 255, 0.1) calc(50% + 1px),
    rgba(255, 255, 255, 0.1) 100%
  );
}
input[type=range].db-range::-webkit-slider-thumb {
  -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%;
  background: var(--navy); border: 3px solid var(--gold-light);
  box-shadow: 0 2px 8px rgba(0,0,0,0.4); cursor: pointer; transition: background 0.2s;
}
input[type=range].db-range::-moz-range-thumb {
  width: 20px; height: 20px; border-radius: 50%;
  background: var(--navy); border: 3px solid var(--gold-light);
  box-shadow: 0 2px 8px rgba(0,0,0,0.4); cursor: pointer;
}
input[type=range].db-range::-webkit-slider-thumb:hover { background: var(--gold); }

.db-sim-result {
  background: var(--navy-deep);
  border: 1px solid var(--db-border);
  border-radius: 12px;
  padding: 28px;
  display: flex; flex-direction: column; gap: 16px;
}
.db-sim-score { font-family: 'Cormorant Garamond', serif; font-size: 64px; font-weight: 300; color: var(--white); line-height: 1; }
.db-sim-expected-lead { font-weight: 700; color: var(--gold-light); }
.db-sim-expected-br {
  font-size: clamp(20px, 3vw, 34px);
  font-weight: 600;
  color: rgba(212, 175, 85, 0.88);
  white-space: nowrap;
}
html[data-lang="ar"] .db-sim-score { font-family: 'Cairo', sans-serif; font-size: 52px; }
html[data-lang="ar"] .db-sim-expected-br { font-family: 'Cairo', sans-serif; }
.db-sim-label { font-size: 11px; color: var(--db-muted); text-transform: uppercase; letter-spacing: 0.15em; }
html[data-lang="ar"] .db-sim-label { font-family: 'Cairo', sans-serif; letter-spacing: 0; }
.db-sim-baseline { font-size: 13px; color: var(--db-muted); }
html[data-lang="ar"] .db-sim-baseline { font-family: 'Cairo', sans-serif; }
.db-sim-advice { background: rgba(255,255,255,0.05); border: 1px solid var(--db-border-subtle); border-radius: 8px; padding: 14px; font-size: 13px; color: var(--db-muted); line-height: 1.6; }
html[data-lang="ar"] .db-sim-advice { font-family: 'Cairo', sans-serif; text-align: right; }

/* ── Executive cards ── */
.db-exec-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.db-exec-card { border-radius: 10px; padding: 22px; }
.db-exec-card-title { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 700; margin-bottom: 14px; }
html[data-lang="ar"] .db-exec-card-title { font-family: 'Cairo', sans-serif; font-size: 18px; }
.db-exec-card ul { padding-inline-start: 18px; display: flex; flex-direction: column; gap: 8px; }
.db-exec-card li { font-size: 13px; line-height: 1.55; }
html[data-lang="ar"] .db-exec-card li { font-family: 'Cairo', sans-serif; }
.db-exec-invest { background: var(--navy); border: 1px solid rgba(184,150,46,0.2); }
.db-exec-invest .db-exec-card-title { color: var(--gold-light); }
.db-exec-invest li { color: rgba(255,255,255,0.75); }
.db-exec-optimize { background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.2); }
.db-exec-optimize .db-exec-card-title { color: #22C55E; }
.db-exec-optimize li { color: rgba(255,255,255,0.65); }
.db-exec-avoid { background: rgba(220,38,38,0.08); border: 1px solid rgba(220,38,38,0.2); }
.db-exec-avoid .db-exec-card-title { color: #f87171; }
.db-exec-avoid li { color: rgba(255,255,255,0.65); }

/* ── Info box ── */
.db-info-box { padding: 14px 18px; border-radius: 8px; font-size: 13px; line-height: 1.65; display: flex; gap: 12px; align-items: flex-start; margin-top: 16px; }
#db-panel-model .db-model-mgmt-text {
  flex: 1;
  min-width: 0;
  color: rgba(226, 232, 240, 0.9);
}
#db-panel-model .db-model-mgmt-sec {
  margin: 0 0 1rem;
}
#db-panel-model .db-model-mgmt-sec:last-child {
  margin-bottom: 0;
}
#db-panel-model .db-model-mgmt-sec strong {
  display: block;
  margin-bottom: 6px;
  color: rgba(255, 255, 255, 0.96);
  font-size: 13.5px;
}
.db-info-box.gold { background: rgba(184,150,46,0.1); border: 1px solid rgba(184,150,46,0.25); color: var(--gold-light); }
.db-info-box.info { background: rgba(37,99,235,0.1); border: 1px solid rgba(37,99,235,0.25); color: #93c5fd; }
.db-info-box.warning { background: rgba(217,119,6,0.1); border: 1px solid rgba(217,119,6,0.25); color: #fbbf24; }
html[data-lang="ar"] .db-info-box { font-family: 'Cairo', sans-serif; text-align: right; }

/* ── Customer pattern distribution dashboard ── */
.db-customer-patterns-body { padding-top: 8px; }
.db-dist-summary {
  display: flex; flex-wrap: wrap; align-items: center; gap: 10px 20px;
  padding: 14px 18px; margin-bottom: 18px;
  background: rgba(184,150,46,0.07); border: 1px solid rgba(184,150,46,0.2); border-radius: 10px;
  font-size: 13px; color: rgba(255,255,255,0.82); line-height: 1.55;
}
html[data-lang="ar"] .db-dist-summary { font-family: 'Cairo', sans-serif; text-align: right; direction: rtl; }
.db-dist-summary strong { color: var(--gold-light); font-weight: 600; }
.db-dist-dash { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
.db-dist-dash .db-dist-card-wide { grid-column: 1 / -1; }
.db-dist-card {
  background: linear-gradient(165deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  border: 1px solid var(--db-border-subtle); border-radius: 12px;
  padding: 16px 18px 12px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.db-dist-card:hover { border-color: rgba(184,150,46,0.28); box-shadow: 0 8px 28px rgba(0,0,0,0.22); }
.db-dist-card-head {
  font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 600; color: var(--white); margin-bottom: 4px; letter-spacing: 0.02em;
}
html[data-lang="ar"] .db-dist-card-head { font-family: 'Cairo', sans-serif; font-size: 16px; }
.db-dist-card-sub { font-size: 11px; color: var(--db-muted); margin-bottom: 10px; line-height: 1.45; }
html[data-lang="ar"] .db-dist-card-sub { font-family: 'Cairo', sans-serif; font-size: 11px; }
.db-dist-svg { width: 100%; height: auto; display: block; min-height: 120px; }
.db-dist-meta { display: flex; flex-wrap: wrap; gap: 12px 18px; margin-top: 10px; font-size: 11px; color: var(--db-muted); }
html[data-lang="ar"] .db-dist-meta { font-family: 'Cairo', sans-serif; }
.db-dist-meta span b { color: var(--gold-light); font-weight: 600; }
.db-dist-risk-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; font-size: 12px; }
html[data-lang="ar"] .db-dist-risk-row { direction: rtl; font-family: 'Cairo', sans-serif; }
.db-dist-risk-lbl { width: 74px; flex-shrink: 0; color: rgba(255,255,255,0.82); }
html[data-lang="ar"] .db-dist-risk-lbl { width: auto; min-width: 56px; }
.db-dist-risk-track {
  flex: 1; min-width: 0; height: 10px; border-radius: 99px;
  background: rgba(255,255,255,0.06); overflow: hidden; display: flex;
}
.db-dist-risk-fill { height: 100%; transition: width 0.35s ease; }
.db-dist-empty {
  grid-column: 1 / -1; text-align: center; padding: 48px 24px; color: var(--db-muted); font-size: 14px;
  border: 1px dashed var(--db-border-subtle); border-radius: 12px; background: rgba(255,255,255,0.02);
}
html[data-lang="ar"] .db-dist-empty { font-family: 'Cairo', sans-serif; }
.db-dist-legend {
  display: flex; flex-wrap: wrap; align-items: center; gap: 14px 20px;
  margin-top: 10px; font-size: 10px; color: rgba(255,255,255,0.55);
}
html[data-lang="ar"] .db-dist-legend { font-family: 'Cairo', sans-serif; direction: rtl; }
.db-dist-legend-it { display: inline-flex; align-items: center; gap: 6px; }
.db-dist-legend-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.25); box-shadow: 0 0 0 3px rgba(0,0,0,0.15); }
.db-dist-avg-row {
  display: flex; flex-wrap: wrap; align-items: stretch; gap: 10px 12px;
  margin: 2px 0 8px;
}
.db-dist-avg {
  flex: 1 1 auto; min-width: min(140px, 100%);
  display: flex; align-items: baseline; justify-content: space-between; gap: 10px;
  padding: 10px 12px;
  border-radius: 11px;
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.07);
}
.db-dist-avg--cohort { border-inline-start: 4px solid #4ade80; box-shadow: inset 0 0 0 1px rgba(74, 222, 128, 0.12); }
.db-dist-avg--bench { border-inline-start: 4px solid #2dd4bf; box-shadow: inset 0 0 0 1px rgba(45, 212, 191, 0.14); }
.db-dist-avg-lbl {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(226, 232, 240, 0.55);
  line-height: 1.25;
}
html[data-lang="ar"] .db-dist-avg-lbl { font-family: 'Cairo', sans-serif; letter-spacing: 0; text-transform: none; font-size: 11px; }
.db-dist-avg strong {
  font-variant-numeric: tabular-nums;
  font-size: 20px;
  font-weight: 700;
  color: var(--gold-light);
  line-height: 1;
}
html[data-lang="ar"] .db-dist-avg-row { direction: rtl; }

/* ── Model quality metrics ── */
.db-model-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
.db-model-grid.db-model-grid--wrap {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 138px), 1fr));
}
.db-model-metric { background: rgba(255,255,255,0.04); border: 1px solid var(--db-border-subtle); border-radius: 10px; padding: 18px; text-align: center; transition: all 0.2s; }
.db-model-metric:hover { border-color: var(--db-border); background: rgba(184,150,46,0.05); }
.db-model-metric-val { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 600; color: var(--white); line-height: 1; margin-bottom: 6px; }
html[data-lang="ar"] .db-model-metric-val { font-family: 'Cairo', sans-serif; font-size: 24px; }
.db-model-metric-label { font-size: 10px; color: var(--db-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
html[data-lang="ar"] .db-model-metric-label { font-family: 'Cairo', sans-serif; letter-spacing: 0; font-size: 11px; }
.db-model-metric-desc { font-size: 10px; color: rgba(255,255,255,0.42); }
html[data-lang="ar"] .db-model-metric-desc { font-family: 'Cairo', sans-serif; }

/* ── Mobile hamburger for dashboard sidebar ── */
.db-topbar-menu-btn {
  display: none;
  width: 44px; height: 44px;
  border-radius: 8px;
  border: 1px solid var(--db-border-subtle);
  background: rgba(255,255,255,0.04);
  align-items: center; justify-content: center;
  cursor: pointer; color: var(--db-muted);
  transition: all 0.2s;
  flex-shrink: 0;
}
.db-topbar-menu-btn:hover { border-color: var(--gold); color: var(--gold-light); }

.db-sidebar-toggle {
  position: fixed;
  bottom: max(20px, env(safe-area-inset-bottom, 0px));
  inset-inline-start: max(16px, env(safe-area-inset-left, 0px));
  z-index: 8500;
  width: 48px; height: 48px;
  border-radius: 50%;
  background: var(--gold);
  border: none;
  color: var(--navy-deep);
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(184,150,46,0.45);
}
.db-sidebar-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 8400; }

/* ═══════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════ */
@media (max-width: 1200px) {
  .hero-content { gap: 56px; }
  .section-inner { padding: 0 32px; }
  .db-kpi-grid { grid-template-columns: repeat(3, 1fr); }
  .db-overviewviz-metrics { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .db-model-grid:not(.db-model-grid--wrap) { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 1024px) {
  nav { padding: 0 24px; gap: 16px; }
  .hamburger { display: flex; }
  .nav-links { margin-inline-start: 0; position: fixed; top: 0; right: -320px; width: min(300px, 82vw); height: 100dvh; background: rgba(10,15,38,0.98); backdrop-filter: blur(20px); border-left: 1px solid rgba(184,150,46,0.2); flex-direction: column; padding: 0 0 48px; gap: 0; display: flex !important; list-style: none; z-index: 970; transition: right 0.32s cubic-bezier(0.4,0,0.2,1); overflow-y: auto; box-shadow: -12px 0 40px rgba(0,0,0,0.5); }
  .nav-links.open { right: 0; }
  html[data-lang="ar"] .nav-links { right: auto; left: -320px; border-left: none; border-right: 1px solid rgba(184,150,46,0.2); box-shadow: 12px 0 40px rgba(0,0,0,0.5); }
  html[data-lang="ar"] .nav-links.open { left: 0; }
  .nav-links::before { content: ''; display: block; height: 72px; flex-shrink: 0; border-bottom: 1px solid rgba(255,255,255,0.06); margin-bottom: 8px; }
  .nav-links li { width: 100%; }
  .nav-links a { display: flex; align-items: center; padding: 16px 28px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 15px; font-weight: 500; letter-spacing: 0.04em; color: rgba(255,255,255,0.75); transition: background 0.18s, color 0.18s; }
  .nav-links a:hover { background: rgba(184,150,46,0.08); color: var(--white); }
  .nav-links a::after { display: none !important; }
  .nav-links .nav-btn { display: flex !important; align-items: center; justify-content: center; margin: 12px 24px 0; padding: 14px 24px !important; border-radius: 4px; width: calc(100% - 48px); font-size: 14px; min-height: 52px; background: var(--gold) !important; color: var(--navy-deep) !important; }
  .hero-content { grid-template-columns: 1fr; gap: 48px; padding: 120px 24px 60px; }
  .hero-right { display: none; }
  .services-grid { grid-template-columns: 1fr 1fr; }
  .platform-panel.active { display: block !important; }
  .services-footer { flex-direction: column; gap: 20px; text-align: center; }
  .process-steps { grid-template-columns: 1fr 1fr; }
  .process-steps::before { display: none; }
  .cta-banner .section-inner { grid-template-columns: 1fr; text-align: center; }
  .cta-actions { justify-content: center; }
  .contact .section-inner { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
  .section-inner { padding: 0 24px; }
  .services, .process, .contact, .insight-feature { padding: 56px 0 80px; }
  /* Dashboard mobile */
  .db-topbar-menu-btn { display: flex; }
  .db-sidebar { position: fixed; inset-block: 0; inset-inline-start: -280px; width: min(280px, 88vw); z-index: 8500; transition: inset-inline-start 0.3s ease; }
  .db-sidebar.open { inset-inline-start: 0; }
  html[data-lang="ar"] .db-sidebar { inset-inline-start: auto; inset-inline-end: -280px; }
  html[data-lang="ar"] .db-sidebar.open { inset-inline-end: 0; }
  .db-sidebar-overlay { display: block; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .db-sidebar-overlay.open { opacity: 1; pointer-events: auto; }
  .db-sidebar-toggle { display: flex; }
  .db-kpi-grid { grid-template-columns: repeat(2, 1fr); }
  .db-overviewviz-metrics { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .db-exec-grid { grid-template-columns: 1fr; }
  .db-sim-grid { grid-template-columns: 1fr; }
  .db-model-grid:not(.db-model-grid--wrap) { grid-template-columns: repeat(3, 1fr); }
  .db-grid-2 { grid-template-columns: 1fr; }
  .db-q-panel-grid {
    grid-template-columns: 1fr;
    grid-template-areas:
      'items'
      'viz';
    column-gap: 0;
  }
  html[data-lang="ar"] .db-q-panel-grid {
    grid-template-columns: 1fr;
    grid-template-areas:
      'items'
      'viz';
  }
  .db-dist-dash { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 768px) {
  .hero-actions { flex-direction: column; align-items: stretch; gap: 12px; }
  .hero-actions .btn-primary, .hero-actions .btn-ghost { width: 100%; display: flex; justify-content: center; }
  .hero-stats { gap: 28px; }
  .cta-actions { flex-direction: column; align-items: stretch; gap: 12px; }
  .cta-actions .btn-primary, .cta-actions .btn-ghost { width: 100%; display: flex; justify-content: center; }
  .platform-tab-btn { font-size: 12px; padding: 10px 14px; min-height: 44px; }
  /* Dashboard */
  .db-sidebar-toggle { display: flex !important; }
  .db-exec-grid { grid-template-columns: 1fr !important; }
  .db-sim-grid { grid-template-columns: 1fr !important; }
  .db-grid-2 { grid-template-columns: 1fr !important; }
  .db-kpi-grid { grid-template-columns: 1fr 1fr; }
  .db-overviewviz-metrics { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .db-model-grid:not(.db-model-grid--wrap) { grid-template-columns: repeat(2, 1fr); }
  .db-dist-dash { grid-template-columns: 1fr; }
  .db-content { padding: 16px; }
  .db-topbar { padding: 0 16px; height: 56px; gap: 8px; }
  .db-page-title { font-size: 16px; }
  .db-filter-bar {
    padding: 10px 14px 12px;
    gap: 8px;
  }
  .db-select {
    min-height: 44px;
    font-size: 16px;
    padding: 8px 28px 8px 12px;
  }
  html[data-lang="ar"] .db-select {
    padding: 8px 12px 8px 28px;
  }
  .db-export-btn {
    min-height: 44px;
    padding: 10px 16px;
    font-size: 13px;
  }
}

@media (max-width: 640px) {
  nav { padding: 0 16px; height: 64px; gap: 12px; }
  nav.scrolled { height: 58px; }
  .nav-logo img { height: 42px; }
  .lang-nav-btn { padding: 5px 11px; min-height: 32px; min-width: 36px; font-size: 11px; }
  .hero-content { padding: 88px 16px 48px; }
  .hero-title { font-size: clamp(32px, 9vw, 50px); }
  .hero-stats { flex-direction: column; gap: 18px; padding-top: 28px; margin-top: 32px; }
  .services-grid { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr; gap: 36px; }
  .form-row { grid-template-columns: 1fr; }
  .section-inner { padding: 0 16px; }
  .btn-primary, .btn-ghost { padding: 15px 24px; font-size: 13px; min-height: 50px; }
  /* Dashboard */
  .db-kpi-grid { grid-template-columns: 1fr; gap: 10px; }
  .db-overviewviz-metrics { grid-template-columns: 1fr; gap: 10px; }
  .db-content { padding: 14px 12px; }
  .db-model-grid:not(.db-model-grid--wrap) { grid-template-columns: 1fr 1fr; }
  .db-bar-row { grid-template-columns: 80px 1fr 36px; gap: 8px; }
  .db-bar-label { font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .db-topbar { padding: 0 12px; }
  .db-page-title { font-size: 17px; }
  .db-breadcrumb { display: none; }
}

@media (max-width: 480px) {
  nav { padding: 0 12px; height: 60px; gap: 10px; }
  .hero-title { font-size: clamp(28px, 9.5vw, 42px); }
  .modal-header { padding: 28px 20px 22px; }
  .modal-body { padding: 24px 16px 28px; }
  .form-input { min-height: 48px; font-size: 16px; }
  .toast { left: 12px; right: 12px; bottom: max(16px, env(safe-area-inset-bottom)); max-width: none; }
  .db-model-grid:not(.db-model-grid--wrap) { grid-template-columns: 1fr 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  .modal-overlay.open .modal { animation: none; }
  #customerDashboard.open { animation: none; }
  .db-export-btn:hover,
  .db-export-btn:active { transform: none; }
  .db-select:active { transform: none; }
}

/* ── Dashboard responsive polish ── */
/* Make filter selects shrink gracefully so they don't overflow */
@media (max-width: 900px) {
  .db-select {
    min-width: 0;
    font-size: 13px;
    padding: 6px 26px 6px 10px;
    min-height: 40px;
  }
  html[data-lang="ar"] .db-select {
    padding: 6px 10px 6px 26px;
  }
  .db-filter-bar-inner {
    gap: 8px 10px;
  }
  .db-kpi-grid { grid-template-columns: repeat(2, 1fr); }
  .db-overviewviz-metrics { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 420px) {
  .db-kpi-grid { grid-template-columns: 1fr !important; }
  .db-overviewviz-metrics { grid-template-columns: 1fr !important; }
  .db-model-grid:not(.db-model-grid--wrap) { grid-template-columns: 1fr !important; }
  .db-topbar { padding: 0 12px; height: 52px; }
  .db-filter-bar {
    padding: 8px 12px 10px;
  }
  .db-select {
    font-size: 16px;
    padding: 8px 26px 8px 10px;
    min-height: 44px;
  }
  html[data-lang="ar"] .db-select {
    padding: 8px 10px 8px 26px;
  }
  .db-page-title { font-size: 14px; }
}

/* ── Dashboard mobile polish ───────────────────────── */
.db-kpi-card { min-height: 110px; }

/* Hide the print icon on very small screens to prevent topbar crowding */
@media (max-width: 480px) {
  .db-topbar-btn { display: none; }
}

/* iOS safe area + room for mobile dashboard FAB (sidebar toggle) */
.db-sidebar-footer {
  padding-bottom: calc(16px + env(safe-area-inset-bottom, 0px));
}
#customerDashboard .db-content {
  padding-bottom: calc(28px + env(safe-area-inset-bottom, 0px));
}
@media (max-width: 1024px) {
  #customerDashboard .db-content {
    padding-bottom: calc(20px + 56px + env(safe-area-inset-bottom, 0px));
  }
}
@media (max-width: 768px) {
  #customerDashboard .db-content {
    padding-bottom: calc(16px + 56px + env(safe-area-inset-bottom, 0px));
  }
}
@media (max-width: 640px) {
  #customerDashboard .db-content {
    padding-bottom: calc(12px + 56px + env(safe-area-inset-bottom, 0px));
  }
}
</style>
</head>
<body>

<!-- ═══════════════════════════════════════════════
     NAVBAR
     ═══════════════════════════════════════════════ -->
<nav id="navbar">
  <a href="#" class="nav-logo">
    <img src="/logo.png" alt="ROSHD Professional">
  </a>
  <div class="lang-toggle-nav">
    <button class="lang-nav-btn" id="btn-en" onclick="setLanguage('en')">EN</button>
    <button class="lang-nav-btn active" id="btn-ar" onclick="setLanguage('ar')">عر</button>
  </div>
  <button class="hamburger" id="hamburger" onclick="toggleMobileMenu()" aria-label="Toggle menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    <li><a href="#about" onclick="closeMobileMenu()"><span class="en">About</span><span class="ar">من نحن</span></a></li>
    <li><a href="#services" onclick="closeMobileMenu()"><span class="en">Solutions</span><span class="ar">الحلول</span></a></li>
    <li><a href="#platform" onclick="closeMobileMenu()"><span class="en">Platform</span><span class="ar">المنصة</span></a></li>
    <li><a href="#contact" onclick="closeMobileMenu()"><span class="en">Contact</span><span class="ar">تواصل معنا</span></a></li>
    <li class="nav-divider"></li>
    <li><a href="#" class="nav-btn" onclick="openLogin(event);closeMobileMenu()"><span class="en">Client Login</span><span class="ar">دخول العملاء</span></a></li>
  </ul>
</nav>
<div class="mobile-nav-overlay" id="mobileNavOverlay" onclick="closeMobileMenu()"></div>

<!-- ═══════════════════════════════════════════════
     HERO
     ═══════════════════════════════════════════════ -->
<section class="hero">
  <div class="hero-grid"></div>
  <div class="hero-glow"></div>
  <div class="hero-glow-2"></div>
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>

  <div class="hero-content">
    <div class="hero-left">
      <!-- English -->
      <div class="en">
        <div class="hero-eyebrow"><div class="hero-eyebrow-line"></div><span>Training &amp; Consulting</span></div>
        <h1 class="hero-title"><em>Clarity.</em><strong>Insight. Impact.</strong></h1>
        <p class="hero-subtitle">ROSHD Professional delivers data-driven consulting and executive training that transforms how organizations understand and act on customer intelligence.</p>
        <div class="hero-actions">
          <a href="#services" class="btn-primary">Explore Services <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          <a href="#" class="btn-ghost" onclick="openLogin(event)"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Client Portal</a>
        </div>
        <div class="hero-stats">
          <div><div class="hero-stat-num">200<span>+</span></div><div class="hero-stat-label">Projects Delivered</div></div>
          <div><div class="hero-stat-num">15<span>+</span></div><div class="hero-stat-label">Industries Served</div></div>
          <div><div class="hero-stat-num">98<span>%</span></div><div class="hero-stat-label">Client Satisfaction</div></div>
        </div>
      </div>
      <!-- Arabic -->
      <div class="ar">
        <div class="hero-eyebrow"><div class="hero-eyebrow-line"></div><span>التدريب والاستشارات</span></div>
        <h1 class="hero-title"><em>وضوح.</em><strong>رؤية. تأثير.</strong></h1>
        <p class="hero-subtitle">تقدّم رُشد الاحتراف استشارات قائمة على البيانات وبرامج تدريب تنفيذي تُحوّل فهم المؤسسات لذكاء العملاء إلى قرارات واضحة ونتائج قابلة للقياس.</p>
        <div class="hero-actions">
          <a href="#services" class="btn-primary">استكشف الخدمات <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          <a href="#" class="btn-ghost" onclick="openLogin(event)"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> بوابة العملاء</a>
        </div>
        <div class="hero-stats">
          <div><div class="hero-stat-num"><span>+</span>200</div><div class="hero-stat-label">مشروع مُنجز</div></div>
          <div><div class="hero-stat-num"><span>+</span>15</div><div class="hero-stat-label">قطاعًا مخدومًا</div></div>
          <div><div class="hero-stat-num">98<span>%</span></div><div class="hero-stat-label">رضا العملاء</div></div>
        </div>
      </div>
    </div>

    <div class="hero-right">
      <div class="dashboard-preview">
        <div class="dp-header">
          <div class="dp-dots"><span></span><span></span><span></span></div>
          <div class="dp-title"><span class="en">Insight Engine — Live Dashboard</span><span class="ar">محرك الرؤى — لوحة التحكم المباشرة</span></div>
        </div>
        <div class="dp-kpis">
          <div class="dp-kpi"><div class="dp-kpi-val gold">3.8 (76%)</div><div class="dp-kpi-label"><span class="en">Satisfaction Score</span><span class="ar">درجة الرضا</span></div></div>
          <div class="dp-kpi"><div class="dp-kpi-val">72%</div><div class="dp-kpi-label"><span class="en">Model Power</span><span class="ar">قوة النموذج</span></div></div>
          <div class="dp-kpi"><div class="dp-kpi-val gold"><span class="en">Quality</span><span class="ar">الجودة</span></div><div class="dp-kpi-label"><span class="en">Top Driver</span><span class="ar">المحرك الأول</span></div></div>
        </div>
        <div class="dp-chart">
          <div class="dp-bar-row"><span class="dp-bar-label"><span class="en">Quality</span><span class="ar">الجودة</span></span><div class="dp-bar-track"><div class="dp-bar-fill"></div></div><span class="dp-bar-val">.87</span></div>
          <div class="dp-bar-row"><span class="dp-bar-label"><span class="en">Communication</span><span class="ar">التواصل</span></span><div class="dp-bar-track"><div class="dp-bar-fill"></div></div><span class="dp-bar-val">.72</span></div>
          <div class="dp-bar-row"><span class="dp-bar-label"><span class="en">Price Fairness</span><span class="ar">عدالة السعر</span></span><div class="dp-bar-track"><div class="dp-bar-fill"></div></div><span class="dp-bar-val">.58</span></div>
          <div class="dp-bar-row"><span class="dp-bar-label"><span class="en">Speed</span><span class="ar">السرعة</span></span><div class="dp-bar-track"><div class="dp-bar-fill"></div></div><span class="dp-bar-val">.04</span></div>
        </div>
        <div class="dp-badge"><div class="dp-badge-dot"></div><span class="en">Live · Q2 2026 · All Branches</span><span class="ar">مباشر · الربع الثاني 2026 · جميع الفروع</span></div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     ABOUT
     ═══════════════════════════════════════════════ -->
<section class="about-strip" id="about">
  <div class="section-inner">
    <div class="en about-layout">
      <div class="about-main">
      <div class="section-tag reveal"><div class="section-tag-line"></div><span>About Us</span></div>
        <h2 class="about-title reveal"><span class="about-title-lead">We are an</span><span class="about-title-accent"><em>Enablement Partner</em></span></h2>
      <div class="reveal">
        <p class="about-body">We are not a training company.<br>We are not a traditional consulting firm.<br><strong>We are an Enablement Partner.</strong></p>
        <p class="about-body">Our role is simple: turn knowledge into execution, and execution into measurable results.</p>
        <p class="about-body">Most organizations invest in training, systems, and consulting—but fail to translate them into real performance. The problem is not lack of knowledge. It is the absence of structured application.</p>
        <p class="about-body about-bold">We close this gap.</p>
        <p class="about-body">We design integrated solutions where:</p>
        <ul class="about-bullets">
          <li>Training is linked to real business outcomes</li>
          <li>Consulting is translated into operating systems</li>
          <li>Data is converted into clear decisions</li>
        </ul>
        <p class="about-body">We don't deliver courses or reports.<br>We build working systems that drive performance.</p>
        <div class="about-principle">If it cannot be applied, it has no value.</div>
      </div>
    </div>
      <aside class="about-aside reveal">
        <div class="about-aside-inner">
          <img src="/logo2.png" alt="" class="about-aside-logo" width="300" height="300">
        </div>
      </aside>
    </div>
    <div class="ar about-layout">
      <div class="about-main">
      <div class="section-tag reveal"><div class="section-tag-line"></div><span>من نحن</span></div>
        <h2 class="about-title reveal"><span class="about-title-lead">شريككم في</span><span class="about-title-accent"><em>تمكين الأداء وتحقيق النتائج</em></span></h2>
      <div class="reveal">
        <p class="about-body">لسنا شركة تدريب تقليدية،<br>ولسنا شركة استشارات بالمعنى الكلاسيكي.<br><strong>نحن شريك تمكين</strong></p>
        <p class="about-body">دورنا واضح: تحويل المعرفة إلى تطبيق، والتطبيق إلى نتائج قابلة للقياس.</p>
        <p class="about-body">تعاني معظم الجهات من فجوة حقيقية: الاستثمار في التدريب والأنظمة والاستشارات دون تحقيق نتائج فعلية. المشكلة ليست في نقص المعرفة، بل في غياب التطبيق المنظم.</p>
        <p class="about-body about-bold">هنا يأتي دورنا.</p>
        <p class="about-body">نقوم بتصميم حلول متكاملة بحيث:</p>
        <ul class="about-bullets">
          <li>يرتبط التدريب بنتائج تشغيلية حقيقية</li>
          <li>تتحول الاستشارات إلى أنظمة عمل</li>
          <li>تتحول البيانات إلى قرارات واضحة</li>
        </ul>
        <p class="about-body">نحن لا نقدم دورات ولا تقارير،<br>بل نبني أنظمة تشغيل تحقق الأداء.</p>
        <div class="about-principle">أي معرفة لا تُطبّق… لا قيمة لها.</div>
      </div>
      </div>
      <aside class="about-aside reveal">
        <div class="about-aside-inner">
          <img src="/logo2.png" alt="" class="about-aside-logo" width="300" height="300">
        </div>
      </aside>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     SERVICES
     ═══════════════════════════════════════════════ -->
<section class="services" id="services">
  <div class="section-inner">
    <div class="section-tag reveal"><div class="section-tag-line"></div><span class="en">Services</span><span class="ar">الخدمات</span></div>
    <h2 class="section-title reveal"><span class="en">End-to-End <em>Enablement Solutions</em></span><span class="ar">حلول تمكين <em>شاملة ومتكاملة</em></span></h2>
    <p class="section-lead reveal"><span class="en">We provide end-to-end enablement solutions, not fragmented services.</span><span class="ar">نُصمّم وننفّذ حلولًا مترابطة تُغلق الفجوات، بدل تقديم خدمات متفرقة.</span></p>
    <div class="services-grid">
      <div class="service-card reveal">
        <div class="service-icon"><svg width="22" height="22" fill="none" stroke="white" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
        <div class="service-num">01</div>
        <div class="en"><div class="service-name">Training &amp; Capability Building</div><div class="service-desc">Practical, role-based training linked directly to real outcomes.</div></div>
        <div class="ar"><div class="service-name">التدريب وبناء القدرات</div><div class="service-desc">تدريب عملي مرتبط مباشرة بنتائج واقعية.</div></div>
      </div>
      <div class="service-card reveal" style="transition-delay:0.1s">
        <div class="service-icon"><svg width="22" height="22" fill="none" stroke="white" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
        <div class="service-num">02</div>
        <div class="en"><div class="service-name">Consulting &amp; Implementation</div><div class="service-desc">We don't advise—we design and implement working systems.</div></div>
        <div class="ar"><div class="service-name">الاستشارات والتنفيذ</div><div class="service-desc">لا نقدم توصيات فقط، بل نصمم ونطبق أنظمة عمل فعلية.</div></div>
      </div>
      <div class="service-card reveal" style="transition-delay:0.2s">
        <div class="service-icon"><svg width="22" height="22" fill="none" stroke="white" stroke-width="1.8" viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6"/></svg></div>
        <div class="service-num">03</div>
        <div class="en"><div class="service-name">Performance &amp; Data Intelligence</div><div class="service-desc">Turning data into clear, measurable decisions.</div></div>
        <div class="ar"><div class="service-name">تحليل الأداء والبيانات</div><div class="service-desc">تحويل البيانات إلى قرارات واضحة وقابلة للقياس.</div></div>
      </div>
      <div class="service-card reveal" style="transition-delay:0.3s">
        <div class="service-icon"><svg width="22" height="22" fill="none" stroke="white" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
        <div class="service-num">04</div>
        <div class="en"><div class="service-name">System Enablement</div><div class="service-desc">Ensuring business systems are actually used—not just installed.</div></div>
        <div class="ar"><div class="service-name">تمكين الأنظمة</div><div class="service-desc">ضمان استخدام الأنظمة فعلياً داخل التشغيل، وليس مجرد تركيبها.</div></div>
      </div>
      <div class="service-card reveal" style="transition-delay:0.4s">
        <div class="service-icon"><svg width="22" height="22" fill="none" stroke="white" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div>
        <div class="service-num">05</div>
        <div class="en"><div class="service-name">Research &amp; Knowledge Solutions</div><div class="service-desc">From academic frameworks to real-world application.</div></div>
        <div class="ar"><div class="service-name">حلول البحث والمعرفة</div><div class="service-desc">ربط المنهج العلمي بالتطبيق العملي.</div></div>
      </div>
    </div>
    <div class="services-footer reveal">
      <div class="en services-footer-text">Our engagement model focuses on one outcome: measurable business impact—not activity.</div>
      <div class="ar services-footer-text">نُصمّم نموذج عملنا لتحقيق نتائج قابلة للقياس—بعيدًا عن مؤشرات النشاط الشكلية.</div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     PLATFORM
     ═══════════════════════════════════════════════ -->
<section class="insight-feature" id="platform">
  <div class="hero-grid"></div>
  <div class="section-inner" style="display:block; position:relative; z-index:2;">
    <div class="section-tag reveal"><div class="section-tag-line"></div><span class="en">The Platform</span><span class="ar">المنصة</span></div>
    <h2 class="section-title reveal" style="color:var(--white)"><span class="en">Our Intelligence <em>Platforms</em></span><span class="ar">منصاتنا <em>الذكية</em></span></h2>
    <div class="platform-tabs-nav reveal">
      <button class="platform-tab-btn active" onclick="switchPlatform(0)"><span class="en">CX Intelligence</span><span class="ar">ذكاء تجربة العميل</span></button>
      <button class="platform-tab-btn" onclick="switchPlatform(1)"><span class="en">Customer Loyalty</span><span class="ar">ولاء العملاء</span></button>
      <button class="platform-tab-btn" onclick="switchPlatform(2)"><span class="en">Performance Management</span><span class="ar">إدارة الأداء</span></button>
    </div>
    <div class="platform-panel active" id="plat-0">
      <div class="en">
        <h3>Customer Experience Intelligence Platform</h3>
        <p class="platform-tagline">Most companies measure satisfaction. Very few understand what drives it.</p>
        <p class="platform-transition-label">We move you from:</p>
        <ul class="platform-arrows"><li>Scores → Drivers</li><li>Feedback → Decisions</li><li>Assumptions → Measurable impact</li></ul>
        <p class="platform-section-label">What we deliver:</p>
        <ul class="platform-bullets"><li>Tailored CX measurement design</li><li>Data validation and quality control</li><li>Driver identification using advanced modeling</li><li>Impact quantification (what actually matters)</li><li>Clear action roadmap</li></ul>
        <div class="platform-outcome"><div class="platform-outcome-label">Outcome</div><ul class="platform-outcome-bullets"><li>Focused investments</li><li>Faster improvements</li><li>Proven ROI on CX initiatives</li></ul></div>
      </div>
      <div class="ar">
        <h3>منصة تحليل تجربة العميل</h3>
        <p class="platform-tagline">معظم الشركات تقيس الرضا، لكن القليل يفهم ما الذي يؤثر عليه فعليًا.</p>
        <p class="platform-transition-label">نحن ننقلك من:</p>
        <ul class="platform-arrows"><li>درجات ← محركات</li><li>آراء ← قرارات</li><li>انطباعات ← أثر قابل للقياس</li></ul>
        <p class="platform-section-label">ما نقدمه:</p>
        <ul class="platform-bullets"><li>تصميم قياس مخصص لتجربة العميل</li><li>ضبط جودة البيانات</li><li>تحديد المحركات الحقيقية</li><li>قياس الأثر الفعلي لكل عامل</li><li>خطة عمل واضحة</li></ul>
        <div class="platform-outcome"><div class="platform-outcome-label">النتيجة</div><ul class="platform-outcome-bullets"><li>استثمار دقيق</li><li>تحسين أسرع</li><li>أثر مثبت على رضا العملاء</li></ul></div>
      </div>
    </div>
    <div class="platform-panel" id="plat-1">
      <div class="en">
        <h3>Customer Loyalty Intelligence Platform</h3>
        <p class="platform-tagline">Most companies measure retention and loyalty. Very few understand what actually drives it.</p>
        <p class="platform-transition-label">We move you from:</p>
        <ul class="platform-arrows"><li>Tracking metrics → understanding drivers</li><li>General assumptions → decision clarity</li><li>Activities → measurable impact</li></ul>
        <p class="platform-section-label">What we deliver:</p>
        <ul class="platform-bullets"><li>Tailored loyalty measurement aligned to customer lifecycle</li><li>Data validation and quality control</li><li>Driver identification (what truly influences retention)</li><li>Impact quantification (which factors matter most)</li><li>Clear, actionable insights</li></ul>
        <div class="platform-outcome"><div class="platform-outcome-label">Outcome</div><ul class="platform-outcome-bullets"><li>Focused retention initiatives</li><li>Better allocation of loyalty investments</li><li>Measurable impact on customer retention</li></ul></div>
      </div>
      <div class="ar">
        <h3>منصة تحليل الولاء والاحتفاظ بالعملاء</h3>
        <p class="platform-tagline">معظم الشركات تقيس الولاء والاحتفاظ، لكن القليل يفهم ما الذي يؤثر عليه فعليًا.</p>
        <p class="platform-transition-label">نحن ننقلك من:</p>
        <ul class="platform-arrows"><li>متابعة المؤشرات ← فهم المحركات</li><li>افتراضات عامة ← وضوح في القرار</li><li>أنشطة ← أثر قابل للقياس</li></ul>
        <p class="platform-section-label">ما نقدمه:</p>
        <ul class="platform-bullets"><li>تصميم قياس مخصص للولاء مرتبط بدورة حياة العميل</li><li>ضبط جودة البيانات</li><li>تحديد المحركات الحقيقية للاحتفاظ</li><li>قياس الأثر لكل عامل</li><li>مخرجات واضحة قابلة للتنفيذ</li></ul>
        <div class="platform-outcome"><div class="platform-outcome-label">النتيجة</div><ul class="platform-outcome-bullets"><li>مبادرات احتفاظ أكثر دقة</li><li>توجيه أفضل للاستثمار في الولاء</li><li>أثر قابل للقياس على الاحتفاظ بالعملاء</li></ul></div>
      </div>
    </div>
    <div class="platform-panel" id="plat-2">
      <div class="en">
        <h3>Performance Management Platform</h3>
        <p class="platform-tagline">Most organizations track KPIs. Very few measure performance at the role level.</p>
        <p class="platform-transition-label">We move you from:</p>
        <ul class="platform-arrows"><li>Generic KPIs → role-based performance measurement</li><li>Subjective evaluation → structured assessment</li><li>Reviews → decision-driven performance management</li></ul>
        <p class="platform-section-label">What we deliver:</p>
        <ul class="platform-bullets"><li>Role-based performance framework (objectives &amp; competencies per role)</li><li>Definition of performance weightings (goals vs. competencies)</li><li>Clear targets for each objective and competency</li><li>Measurement logic for each performance element</li><li>Calculation of overall performance score</li><li>Digital management of performance cycles through the platform</li></ul>
        <div class="platform-outcome"><div class="platform-outcome-label">Outcome</div><ul class="platform-outcome-bullets"><li>Objective, role-specific evaluation</li><li>Consistent &amp; measurable scoring</li><li>Structured performance cycles</li><li>System-driven performance decisions</li></ul></div>
      </div>
      <div class="ar">
        <h3>منصة إدارة الأداء</h3>
        <p class="platform-tagline">معظم الشركات تتابع مؤشرات عامة، لكن القليل يقيس الأداء على مستوى الوظيفة.</p>
        <p class="platform-transition-label">نحن ننقلك من:</p>
        <ul class="platform-arrows"><li>مؤشرات عامة ← قياس أداء حسب كل وظيفة</li><li>تقييمات شخصية ← تقييمات منظمة</li><li>مراجعات شكلية ← إدارة أداء قائمة على القرار</li></ul>
        <p class="platform-section-label">ما نقدمه:</p>
        <ul class="platform-bullets"><li>إطار أداء لكل وظيفة (الأهداف والكفاءات لكل دور)</li><li>تحديد أوزان الأداء (نسبة الأهداف مقابل الكفاءات)</li><li>تحديد مستهدفات واضحة لكل عنصر</li><li>تعريف آلية قياس لكل هدف وكفاءة</li><li>احتساب التقييم النهائي للأداء</li><li>إدارة دورة الأداء إلكترونيًا عبر المنصة</li></ul>
        <div class="platform-outcome"><div class="platform-outcome-label">النتيجة</div><ul class="platform-outcome-bullets"><li>تقييم موضوعي ودقيق لكل وظيفة</li><li>نتائج أداء قابلة للقياس والمقارنة</li><li>إدارة منظمة لدورات الأداء</li><li>توجيه قرارات الأداء بشكل منهجي</li></ul></div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     PROCESS
     ═══════════════════════════════════════════════ -->
<section class="process">
  <div class="section-inner">
    <div class="section-tag reveal"><div class="section-tag-line"></div><span class="en">How It Works</span><span class="ar">كيف نعمل</span></div>
    <h2 class="section-title reveal"><span class="en">From Data to <em>Decisions</em></span><span class="ar">من البيانات إلى <em>قرارات</em></span></h2>
    <div class="process-steps">
      <div class="process-step reveal"><div class="process-step-num">1</div><div class="process-step-name"><span class="en">Scope</span><span class="ar">تحديد النطاق</span></div><div class="process-step-desc"><span class="en">Define the branch, segment, or service to focus the analysis.</span><span class="ar">نحدّد الفرع أو الشريحة أو الخدمة لتركيز التحليل.</span></div></div>
      <div class="process-step reveal" style="transition-delay:0.1s"><div class="process-step-num">2</div><div class="process-step-name"><span class="en">Model</span><span class="ar">النمذجة</span></div><div class="process-step-desc"><span class="en">We build a robust analytical model to explain what drives outcomes.</span><span class="ar">نبني نموذجًا تحليليًا يفسّر النتائج ويكشف ما يقودها فعليًا.</span></div></div>
      <div class="process-step reveal" style="transition-delay:0.2s"><div class="process-step-num">3</div><div class="process-step-name"><span class="en">Identify Drivers</span><span class="ar">تحديد المحركات</span></div><div class="process-step-desc"><span class="en">Quantify impact and rank the key drivers based on their real influence.</span><span class="ar">نقيس حجم التأثير ونرتّب العوامل حسب تأثيرها الحقيقي.</span></div></div>
      <div class="process-step reveal" style="transition-delay:0.3s"><div class="process-step-num">4</div><div class="process-step-name"><span class="en">Simulate</span><span class="ar">المحاكاة</span></div><div class="process-step-desc"><span class="en">Test improvement scenarios and estimate the expected uplift before acting.</span><span class="ar">نختبر سيناريوهات التحسين ونقدّر الأثر المتوقع قبل التنفيذ.</span></div></div>
      <div class="process-step reveal" style="transition-delay:0.4s"><div class="process-step-num">5</div><div class="process-step-name"><span class="en">Decide</span><span class="ar">اتخاذ القرار</span></div><div class="process-step-desc"><span class="en">Translate insights into clear actions: Do, Optimize, or Stop.</span><span class="ar">قرارات واضحة: نفّذ، حسّن، أو أعِد النظر.</span></div></div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     CTA BANNER
     ═══════════════════════════════════════════════ -->
<section class="cta-banner">
  <div class="section-inner">
    <div>
      <div class="section-tag"><div class="section-tag-line"></div><span class="en">Get Started</span><span class="ar">ابدأ الآن</span></div>
      <h2 class="section-title"><span class="en">Ready to make decisions <em>with confidence?</em></span><span class="ar">هل أنت جاهز لاتخاذ قرارات <em>بثقة؟</em></span></h2>
      <p class="section-lead"><span class="en">Access your personalized dashboard or contact us to learn how ROSHD Professional can serve your organization.</span><span class="ar">ادخل إلى المنصة المخصصة أو تواصل معنا لتكتشف كيف يمكن لـ رُشد الاحتراف دعم مؤسستك.</span></p>
    </div>
    <div class="cta-actions">
      <button class="btn-primary" onclick="openLogin(event)"><span class="en">Access Client Portal</span><span class="ar">الدخول إلى بوابة العملاء</span><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
      <a href="#contact" class="btn-ghost"><span class="en">Request a Demo</span><span class="ar">طلب عرض توضيحي</span></a>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     CONTACT
     ═══════════════════════════════════════════════ -->
<section class="contact" id="contact">
  <div class="section-inner">
    <div>
      <div class="section-tag reveal"><div class="section-tag-line"></div><span class="en">Get In Touch</span><span class="ar">تواصل معنا</span></div>
      <h2 class="section-title reveal"><span class="en">Let's turn your idea into <em>measurable results</em></span><span class="ar">لنحوّل فكرتك إلى <em>نتائج قابلة للقياس</em></span></h2>
      <p class="section-lead reveal"><span class="en">Have an initiative or operational challenge? We'll work with you to turn data into clear decisions.</span><span class="ar">لديك مبادرة أو تحدٍ تشغيلي؟ سنعمل معك لتحويل البيانات إلى قرارات واضحة وخطوات قابلة للتنفيذ.</span></p>
      <div style="margin-top:48px; display:flex; flex-direction:column; gap:28px;">
        <div class="reveal">
          <div style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);font-weight:600;margin-bottom:6px;"><span class="en">Email</span><span class="ar">البريد الإلكتروني</span></div>
          <div style="font-size:16px;color:var(--navy);">info@roshd-professional.com</div>
        </div>
        <div class="reveal">
          <div class="en" style="font-family:'Cormorant Garamond',serif;font-size:22px;font-style:italic;color:var(--navy);">Clarity. Insight. Impact.</div>
          <div class="ar" style="font-family:'Cairo',sans-serif;font-size:20px;font-weight:600;color:var(--navy);">وضوح. رؤية. تأثير.</div>
          <div style="font-size:13px;color:var(--gray);margin-top:6px;"><span class="en">Training &amp; Consulting</span><span class="ar">تدريب واستشارات</span></div>
        </div>
      </div>
    </div>
    <div class="contact-form reveal">
      <h3 style="font-size:26px;font-weight:600;color:var(--navy);margin-bottom:28px;"><span class="en" style="font-family:'Cormorant Garamond',serif;font-style:italic;">Send a Message</span><span class="ar">إرسال الرسالة</span></h3>
      <div class="form-row">
        <div class="form-group"><label class="form-label"><span class="en">First Name</span><span class="ar">الاسم الأول</span></label><input type="text" class="form-input" data-ph-en="Ahmed" data-ph-ar="الاسم الأول" placeholder="الاسم الأول"></div>
        <div class="form-group"><label class="form-label"><span class="en">Last Name</span><span class="ar">اسم العائلة</span></label><input type="text" class="form-input" data-ph-en="Al-Rashidi" data-ph-ar="اسم العائلة" placeholder="اسم العائلة"></div>
      </div>
      <div class="form-group"><label class="form-label"><span class="en">Email Address</span><span class="ar">البريد الإلكتروني</span></label><input type="email" class="form-input" data-ph-en="ahmed@company.com" data-ph-ar="ahmed@company.com" placeholder="ahmed@company.com"></div>
      <div class="form-group"><label class="form-label"><span class="en">Organization / Company</span><span class="ar">الجهة / الشركة</span></label><input type="text" class="form-input" data-ph-en="Your Organization" data-ph-ar="الجهة / الشركة" placeholder="الجهة / الشركة"></div>
      <div class="form-group"><label class="form-label"><span class="en">Message</span><span class="ar">رسالتك</span></label><textarea class="form-input" data-ph-en="Tell us about your initiative or challenge..." data-ph-ar="اكتب بإيجاز عن التحدي أو الهدف" placeholder="اكتب بإيجاز عن التحدي أو الهدف"></textarea></div>
      <button class="btn-primary" style="width:100%;display:flex;justify-content:center;" onclick="handleContact(event)"><span class="en">Send Message</span><span class="ar">إرسال الرسالة</span><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════
     FOOTER
     ═══════════════════════════════════════════════ -->
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <img src="/logo.png" alt="ROSHD Professional">
        <div class="footer-tagline en">Clarity. Insight. Impact.</div>
        <div class="footer-tagline ar">وضوح. رؤية. تأثير.</div>
        <div class="footer-desc en">ROSHD Professional delivers data-driven consulting and executive training that transforms data into clear decisions and measurable results.</div>
        <div class="footer-desc ar">تقدّم رُشد الاحتراف استشارات قائمة على البيانات وبرامج تدريب تنفيذي تُحوّل البيانات إلى قرارات واضحة ونتائج قابلة للقياس.</div>
      </div>
      <div>
        <div class="footer-col-title"><span class="en">Company</span><span class="ar">الشركة</span></div>
        <ul class="footer-links">
          <li><a href="#about"><span class="en">About Us</span><span class="ar">من نحن</span></a></li>
          <li><a href="#services"><span class="en">Services</span><span class="ar">الخدمات</span></a></li>
          <li><a href="#platform"><span class="en">Platform</span><span class="ar">المنصة</span></a></li>
          <li><a href="#contact"><span class="en">Contact</span><span class="ar">تواصل معنا</span></a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title"><span class="en">Platform</span><span class="ar">المنصة</span></div>
        <ul class="footer-links">
          <li><a href="#" onclick="openLogin(event)"><span class="en">Client Login</span><span class="ar">دخول العملاء</span></a></li>
          <li><a href="#"><span class="en">Executive Dashboard</span><span class="ar">لوحة القيادة التنفيذية</span></a></li>
          <li><a href="#"><span class="en">Analytics Engine</span><span class="ar">محرك التحليلات</span></a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title"><span class="en">Contact</span><span class="ar">التواصل</span></div>
        <ul class="footer-links">
          <li><a href="mailto:info@roshd-professional.com">info@roshd-professional.com</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2026 <span>ROSHD Professional</span>. <span class="en">All rights reserved.</span><span class="ar">جميع الحقوق محفوظة.</span></div>
      <div class="footer-copy en">Built with <span>Clarity. Insight. Impact.</span></div>
      <div class="footer-copy ar">بُني بـ <span>وضوح. رؤية. تأثير.</span></div>
    </div>
  </div>
</footer>

<!-- ═══════════════════════════════════════════════
     LOGIN MODAL
     ═══════════════════════════════════════════════ -->
<div class="modal-overlay" id="loginModal" onclick="closeOnOverlay(event)">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-logo-row"><img src="/logo.png" alt="ROSHD"><span class="modal-logo-text">ROSHD PROFESSIONAL</span></div>
      <div class="modal-title"><span class="en">Welcome Back</span><span class="ar">مرحبًا بعودتك</span></div>
      <div class="modal-subtitle"><span class="en">Sign in to access your analytics dashboard and make data-driven decisions.</span><span class="ar">سجّل الدخول للوصول إلى لوحة التحليلات واتخاذ قرارات مبنية على البيانات.</span></div>
      <button type="button" class="modal-close" onclick="closeLogin()">&times;</button>
    </div>
    <div class="modal-body">
      <div class="modal-error" id="loginError"></div>
      <div class="form-group">
        <label class="form-label"><span class="en">Email Address</span><span class="ar">البريد الإلكتروني</span></label>
        <input type="email" class="form-input" id="loginEmail" data-ph-en="your@email.com" data-ph-ar="your@email.com" placeholder="your@email.com">
      </div>
      <div class="form-group">
        <label class="form-label"><span class="en">Password</span><span class="ar">كلمة المرور</span></label>
        <div class="pw-field">
          <input type="password" class="form-input" id="loginPassword" placeholder="••••••••" autocomplete="current-password">
          <button type="button" class="pw-toggle" onclick="togglePwVisibility('loginPassword', this)">
            <span class="pw-eye-open"><svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></span>
            <span class="pw-eye-off" hidden><svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path d="M1 1l22 22"/></svg></span>
          </button>
        </div>
      </div>
      <button class="btn-primary" style="width:100%;display:flex;justify-content:center;margin-top:8px;" onclick="handleLogin()">
        <span class="en">Sign In to Dashboard</span><span class="ar">الدخول إلى لوحة التحكم</span>
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
      <div class="modal-switch">
        <span class="en">Don't have an account? <a href="#" onclick="switchToSignup();return false;">Create Account</a></span>
        <span class="ar">ليس لديك حساب؟ <a href="#" onclick="switchToSignup();return false;">إنشاء حساب</a></span>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════
     SIGNUP MODAL
     ═══════════════════════════════════════════════ -->
<div class="modal-overlay" id="signupModal" onclick="closeOnOverlaySignup(event)">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-logo-row"><img src="/logo.png" alt="ROSHD"><span class="modal-logo-text">ROSHD PROFESSIONAL</span></div>
      <div class="modal-title"><span class="en">Create Account</span><span class="ar">إنشاء حساب</span></div>
      <div class="modal-subtitle"><span class="en">Join ROSHD Professional to access your analytics dashboard.</span><span class="ar">انضم إلى رُشد الاحتراف للوصول إلى لوحة التحليلات.</span></div>
      <button type="button" class="modal-close" onclick="closeSignup()">&times;</button>
    </div>
    <div class="modal-body">
      <div class="modal-error" id="signupError"></div>
      <div class="modal-success" id="signupSuccess"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
        <div class="form-group"><label class="form-label"><span class="en">First Name</span><span class="ar">الاسم الأول</span></label><input type="text" class="form-input" id="signupFirstName" data-ph-en="First name" data-ph-ar="الاسم الأول" placeholder="الاسم الأول" autocomplete="given-name"></div>
        <div class="form-group"><label class="form-label"><span class="en">Last Name</span><span class="ar">اسم العائلة</span></label><input type="text" class="form-input" id="signupLastName" data-ph-en="Last name" data-ph-ar="اسم العائلة" placeholder="اسم العائلة" autocomplete="family-name"></div>
      </div>
      <div class="form-group"><label class="form-label"><span class="en">Email Address</span><span class="ar">البريد الإلكتروني</span></label><input type="email" class="form-input" id="signupEmail" data-ph-en="your@email.com" data-ph-ar="your@email.com" placeholder="your@email.com" autocomplete="email"></div>
      <div class="form-group">
        <label class="form-label"><span class="en">Password</span><span class="ar">كلمة المرور</span></label>
        <div class="pw-field">
          <input type="password" class="form-input" id="signupPassword" data-ph-en="Min. 8 characters" data-ph-ar="8 أحرف على الأقل" placeholder="8 أحرف على الأقل" autocomplete="new-password">
          <button type="button" class="pw-toggle" onclick="togglePwVisibility('signupPassword', this)">
            <span class="pw-eye-open"><svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></span>
            <span class="pw-eye-off" hidden><svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path d="M1 1l22 22"/></svg></span>
          </button>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label"><span class="en">Confirm Password</span><span class="ar">تأكيد كلمة المرور</span></label>
        <div class="pw-field">
          <input type="password" class="form-input" id="signupConfirmPassword" data-ph-en="Re-enter password" data-ph-ar="أعد إدخال كلمة المرور" placeholder="أعد إدخال كلمة المرور" autocomplete="new-password">
          <button type="button" class="pw-toggle" onclick="togglePwVisibility('signupConfirmPassword', this)">
            <span class="pw-eye-open"><svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></span>
            <span class="pw-eye-off" hidden><svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path d="M1 1l22 22"/></svg></span>
          </button>
        </div>
      </div>
      <button class="btn-primary" style="width:100%;display:flex;justify-content:center;margin-top:8px;" onclick="handleSignup()">
        <span class="en">Create Account</span><span class="ar">إنشاء الحساب</span>
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
      <div class="modal-switch">
        <span class="en">Already have an account? <a href="#" onclick="switchToLogin();return false;">Sign In</a></span>
        <span class="ar">لديك حساب بالفعل؟ <a href="#" onclick="switchToLogin();return false;">تسجيل الدخول</a></span>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════
     CUSTOMER DASHBOARD — FULL SCREEN
     ═══════════════════════════════════════════════ -->
<div id="customerDashboard">

  <!-- Sidebar overlay (mobile) -->
  <div class="db-sidebar-overlay" id="dbSidebarOverlay" onclick="closeDashboardSidebar()"></div>

  <!-- SIDEBAR -->
  <aside class="db-sidebar" id="dbSidebar">
    <div class="db-brand">
      <img src="/logo.png" alt="ROSHD">
      <div class="db-brand-text">
        <strong>ROSHD</strong>
        <small><span class="en">Insight Engine</span><span class="ar">محرك الرؤى</span></small>
      </div>
    </div>

    <div class="db-user-strip">
      <div class="db-avatar" id="dbAvatar">U</div>
      <div class="db-user-info">
        <div class="db-user-name" id="dbUserName"><span class="en">Loading…</span><span class="ar">جارٍ التحميل…</span></div>
        <div class="db-user-role"><span class="en">Client Portal</span><span class="ar">بوابة العملاء</span></div>
      </div>
    </div>

    <nav class="db-nav">
      <div class="db-nav-section"><span class="en">Analytics</span><span class="ar">التحليلات</span></div>
      <button class="db-nav-item active" data-panel="executive" onclick="dbShowPanel('executive', this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        <span class="en">Executive View</span><span class="ar">العرض التنفيذي</span>
      </button>
      <button class="db-nav-item" data-panel="drivers" onclick="dbShowPanel('drivers', this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
        <span class="en">CX Drivers Analysis</span><span class="ar">تحليل محركات تجربة العميل</span>
      </button>
      <button class="db-nav-item" data-panel="segments" onclick="dbShowPanel('segments', this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
        <span class="en">Units Performance</span><span class="ar">أداء الوحدات</span>
      </button>
      <button class="db-nav-item" data-panel="demographics" onclick="dbShowPanel('demographics', this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        <span class="en">Demographics</span><span class="ar">البيانات الديموغرافية</span>
      </button>
      <button class="db-nav-item" data-panel="customers" onclick="dbShowPanel('customers', this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        <span class="en">Customer Patterns</span><span class="ar">أنماط العملاء</span>
      </button>
      <button class="db-nav-item" data-panel="questionnaire" onclick="dbShowPanel('questionnaire', this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
        <span class="en">Questionnaire</span><span class="ar">عناصر الاستبيان</span>
      </button>
      <button class="db-nav-item" data-panel="pilot" onclick="dbShowPanel('pilot', this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 11l3 3 8-8"/><circle cx="12" cy="12" r="10"/></svg>
        <span class="en">Pilot Analysis</span><span class="ar">تحليل تجريبي</span>
      </button>
      <button class="db-nav-item" data-panel="model" onclick="dbShowPanel('model', this)">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        <span class="en">Model Quality</span><span class="ar">جودة النموذج</span>
      </button>
    </nav>

    <div class="db-sidebar-footer">
      <button class="db-logout-btn" onclick="handleDashboardLogout()">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        <span class="en">Logout</span><span class="ar">تسجيل الخروج</span>
      </button>
    </div>
  </aside>

  <!-- MAIN -->
  <div class="db-main">
    <!-- Topbar -->
    <div class="db-topbar">
      <div class="db-topbar-left" style="display:flex;align-items:center;gap:10px">
        <button class="db-topbar-menu-btn" onclick="toggleDashboardSidebar()" aria-label="Toggle sidebar">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div>
        <div class="db-page-title" id="dbPageTitle"><span class="en">Executive View</span><span class="ar">العرض التنفيذي</span></div>
        <div class="db-breadcrumb"><span class="en">ROSHD</span><span class="ar">رشد</span> <span>›</span> <span id="dbPageBreadcrumb"><span class="en">Dashboard</span><span class="ar">لوحة التحكم</span></span></div>
        </div>
      </div>
      <div class="db-topbar-right">
        <!-- Lang toggle inside dashboard -->
        <div class="lang-toggle-nav" style="border-color:rgba(255,255,255,0.1)">
          <button class="lang-nav-btn" id="db-btn-en" onclick="setLanguage('en')">EN</button>
          <button class="lang-nav-btn active" id="db-btn-ar" onclick="setLanguage('ar')">عر</button>
        </div>
        <button class="db-topbar-btn" onclick="window.print()" title="Export / Print">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
        </button>
      </div>
    </div>

    <!-- Global Filter Bar (8 configurable filters — built in JS from roshd_filter_bar_config) -->
    <div class="db-filter-bar" aria-label="Segment filters">
      <div class="db-filter-bar__lead">
        <span class="db-filter-bar__title"><span class="en">Filters</span><span class="ar">التصفية</span></span>
      </div>
      <div class="db-filter-bar-scroll-outer">
        <div id="dbFilterBarInner" class="db-filter-bar-inner"></div>
      </div>
      <div class="db-filter-bar__trail">
        <span class="db-period-badge db-period-badge--filter" title="Reporting period"><span class="en">Q2 2026</span><span class="ar">٢٠٢٦ Q2</span></span>
        <button type="button" class="db-export-btn" onclick="window.print()">
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span class="en">Export</span><span class="ar">تصدير</span>
        </button>
      </div>
    </div>

    <!-- Scrollable Content -->
    <div class="db-content">

    <!-- KPI strip (hidden on Pilot & Demographics via .db-panel-no-kpi) -->
      <div id="dbKpiStrip">
        <section class="db-kpi-strip" aria-label="Executive KPI snapshot">
          <div class="db-kpi-grid">
            <div class="db-kpi-card" style="--kpi-color:var(--gold);--kpi-bg:rgba(184,150,46,0.15)">
              <div class="db-kpi-header">
                <div class="db-kpi-icon"><svg width="18" height="18" fill="none" stroke="var(--gold)" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
                <span class="db-kpi-trend up" id="kpiTrend1">↑ +0.3</span>
              </div>
              <div class="db-kpi-val" id="kpiScore">76% (3.8)</div>
              <div class="db-kpi-label"><span class="en">CX Score / 5</span><span class="ar">درجة تجربة العملاء / 5</span></div>
            </div>
            <div class="db-kpi-card" style="--kpi-color:#3b82f6;--kpi-bg:rgba(59,130,246,0.12)">
              <div class="db-kpi-header">
                <div class="db-kpi-icon"><svg width="18" height="18" fill="none" stroke="#3b82f6" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
                <span class="db-kpi-trend up"><span class="en">↑ 2%</span><span class="ar">↑ ٢٪</span></span>
              </div>
              <div class="db-kpi-val" id="kpiStripR2">72%</div>
              <div class="db-kpi-label"><span class="en">Model Explanatory Power</span><span class="ar">القدرة التفسيرية للنموذج</span></div>
            </div>
            <div class="db-kpi-card" style="--kpi-color:#22C55E;--kpi-bg:rgba(34,197,94,0.12)">
              <div class="db-kpi-header">
                <div class="db-kpi-icon"><svg width="18" height="18" fill="none" stroke="#22C55E" stroke-width="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
                <span class="db-kpi-trend neutral">—</span>
              </div>
              <div class="db-kpi-val" id="kpiTopDriver"><span class="en">Quality</span><span class="ar">الجودة</span></div>
              <div class="db-kpi-label"><span class="en">Top Driver</span><span class="ar">أقوى محرّك</span></div>
            </div>
            <div class="db-kpi-card" style="--kpi-color:#ef4444;--kpi-bg:rgba(239,68,68,0.12)">
              <div class="db-kpi-header">
                <div class="db-kpi-icon"><svg width="18" height="18" fill="none" stroke="#f87171" stroke-width="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
                <span class="db-kpi-trend down db-kpi-trend-icon" aria-hidden="true"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg></span>
              </div>
              <div class="db-kpi-val" id="kpiRisk"><span class="en">Speed</span><span class="ar">السرعة</span></div>
              <div class="db-kpi-label"><span class="en">Waste Risk</span><span class="ar">مخاطر الهدر</span></div>
            </div>
            <div class="db-kpi-card" style="--kpi-color:var(--gold-light);--kpi-bg:rgba(255,255,255,0.06)">
              <div class="db-kpi-header">
                <div class="db-kpi-icon"><svg width="18" height="18" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                <span class="db-kpi-pill"><span class="en">Filtered N</span><span class="ar">عيّنة مرشَّحة</span></span>
              </div>
              <div class="db-kpi-val" id="kpiSampleN">300</div>
              <div class="db-kpi-label"><span class="en">Segment Sample</span><span class="ar">عينة الشريحة</span></div>
              <div class="db-kpi-sublabel" id="kpiSampleShare"><span class="en">100% of full sample (300)</span><span class="ar">100% من العينة الكاملة (300)</span></div>
            </div>
          </div>
        </section>
      </div>

      <!-- ── EXECUTIVE PANEL ── -->
      <div class="db-panel active" id="db-panel-executive">
        <div class="db-exec-grid" id="dbExecGrid"></div>
        <div class="db-grid-2" style="margin-top:20px">
          <div class="db-card">
            <div class="db-card-header">
              <div><div class="db-card-title"><span class="en">Decision Logic Flow</span><span class="ar">منطق القرار</span></div></div>
            </div>
            <div class="db-card-body">
              <div id="dbDecisionFlowSteps" style="display:flex;gap:10px;flex-wrap:wrap">
                <div style="flex:1;min-width:100px;background:rgba(255,255,255,0.04);border:1px solid var(--db-border-subtle);border-radius:8px;padding:14px;text-align:center">
                  <div style="font-weight:700;color:var(--gold-light);margin-bottom:4px;font-size:13px"><span class="en">1. Filter</span><span class="ar">١. التصفية</span></div>
                  <div style="font-size:11px;color:var(--db-muted)"><span class="en">Branch / gender / service / visits / age</span><span class="ar">الفرع / الجنس / الخدمة / الزيارات / العمر</span></div>
                </div>
                <div style="flex:1;min-width:100px;background:rgba(255,255,255,0.04);border:1px solid var(--db-border-subtle);border-radius:8px;padding:14px;text-align:center">
                  <div style="font-weight:700;color:var(--gold-light);margin-bottom:4px;font-size:13px"><span class="en">2. Sample</span><span class="ar">٢. العيّنة</span></div>
                  <div style="font-size:11px;color:var(--db-muted)"><span class="en">Segment N &amp; share</span><span class="ar">الحجم ونسبة الشريحة</span></div>
                </div>
                <div style="flex:1;min-width:100px;background:rgba(255,255,255,0.04);border:1px solid var(--db-border-subtle);border-radius:8px;padding:14px;text-align:center">
                  <div style="font-weight:700;color:var(--gold-light);margin-bottom:4px;font-size:13px"><span class="en">3. Drivers</span><span class="ar">٣. المحركات</span></div>
                  <div style="font-size:11px;color:var(--db-muted)"><span class="en">Impact + decisions</span><span class="ar">الأثر + القرار</span></div>
                </div>
                <div style="flex:1;min-width:100px;background:rgba(255,255,255,0.04);border:1px solid var(--db-border-subtle);border-radius:8px;padding:14px;text-align:center">
                  <div style="font-weight:700;color:var(--gold-light);margin-bottom:4px;font-size:13px"><span class="en">4. Simulate</span><span class="ar">٤. المحاكاة</span></div>
                  <div style="font-size:11px;color:var(--db-muted)"><span class="en">Expected Lift</span><span class="ar">الارتفاع المتوقع</span></div>
                </div>
                <div style="flex:1;min-width:100px;background:var(--navy);border:1px solid var(--db-border);border-radius:8px;padding:14px;text-align:center">
                  <div style="font-weight:700;color:var(--gold-light);margin-bottom:4px;font-size:13px"><span class="en">5. Recommend</span><span class="ar">٥. التوصية</span></div>
                  <div style="font-size:11px;color:rgba(255,255,255,0.4)"><span class="en">Do / Optimize / Avoid</span><span class="ar">نفّذ / حسّن / تجنّب</span></div>
                </div>
              </div>
              <div class="db-info-box gold" style="margin-top:16px">
                <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span id="dbExecCoreRule"><span class="en"><b>Core rule:</b> A low average score is not a priority unless it has meaningful effect size and enough segment sample.</span><span class="ar"><b>القاعدة الأساسية:</b> انخفاض متوسط الدرجة ليس أولوية ما لم يكن لتأثيره حجم مهم وحجم شريحة كافٍ.</span></span>
              </div>
              <div class="db-info-box warning" id="dbSegmentWarning" style="margin-top:14px"></div>
            </div>
          </div>
          <div class="db-card">
            <div class="db-card-header">
              <div><div class="db-card-title"><span class="en">Branch Performance</span><span class="ar">أداء الفروع</span></div><div class="db-card-subtitle"><span class="en">Average satisfaction by branch</span><span class="ar">متوسط الرضا حسب الفرع</span></div></div>
            </div>
            <div class="db-card-body">
              <div class="db-bar-list" id="dbBranchPerfBars"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── CX DRIVERS ANALYSIS (map + ranking + simulation) ── -->
      <div class="db-panel" id="db-panel-drivers">
        <div class="db-grid-2">
          <div class="db-card">
            <div class="db-card-header">
              <div><div class="db-card-title"><span class="en" id="dbCxMapTitleEn">Driver Impact Map</span><span class="ar" id="dbCxMapTitleAr">خريطة تأثير المحركات</span></div><div class="db-card-subtitle"><span class="en" id="dbCxMapSubEn">Bubble size reflects effect size (Impact). Larger = stronger lever. Speed is highlighted when impact is weak.</span><span class="ar" id="dbCxMapSubAr">حجم الفقاعة يعكس الأثر. الأكبر = رافعة أقوى. تظل السرعة مميّزة عندما يكون الأثر ضعيفًا.</span></div></div>
            </div>
            <div class="db-card-body" style="padding:16px 18px 22px">
              <div class="db-bubble-map"><div class="db-bubble-layer" id="dbBubbleContainer"></div></div>
            </div>
          </div>
          <div class="db-card">
            <div class="db-card-header">
              <div><div class="db-card-title"><span class="en" id="dbCxRankTitleEn">Driver Ranking</span><span class="ar" id="dbCxRankTitleAr">ترتيب المحركات</span></div><div class="db-card-subtitle"><span class="en" id="dbCxRankSubEn">Priority follows Impact effect size</span><span class="ar" id="dbCxRankSubAr">الأولوية تتبع حجم الأثر</span></div></div>
            </div>
            <div class="db-card-body" style="padding-top:16px">
              <div class="db-table-wrap db-table-wrap--drivers-rank">
                <table class="db-table db-table--drivers-rank">
                  <thead>
                    <tr>
                      <th><span class="en" id="dbCxThRankEn">Rank</span><span class="ar" id="dbCxThRankAr">الترتيب</span></th>
                      <th><span class="en" id="dbCxThDriverEn">Driver</span><span class="ar" id="dbCxThDriverAr">المحرك</span></th>
                      <th><span class="en" id="dbCxThEffectEn">Effect share</span><span class="ar" id="dbCxThEffectAr">حصة الأثر</span></th>
                      <th><span class="en" id="dbCxThAvgEn">Avg score</span><span class="ar" id="dbCxThAvgAr">المتوسط</span></th>
                      <th><span class="en" id="dbCxThDecisionEn">Decision</span><span class="ar" id="dbCxThDecisionAr">القرار</span></th>
                    </tr>
                  </thead>
                  <tbody id="dbDriversTable"></tbody>
                </table>
              </div>
              <div class="db-drivers-interpret" role="note">
                <span class="en" id="dbCxInterpretEn"><b>Interpretation:</b> Effect size is the practical impact—how much a factor actually changes the outcome.<br/>Small ≈ 0.02 (low), medium ≈ 0.15 (moderate), large ≈ 0.35 (high impact).</span>
                <span class="ar" id="dbCxInterpretAr"><b>التفسير:</b> حجم الأثر هو الأثر العملي — مقدار ما يُغيّر به العامل النتيجة فعلًا.<br/>صغير ≈ ٠٫٠٢ (منخفض)، متوسط ≈ ٠٫١٥ (معتدل)، كبير ≈ ٠٫٣٥ (أثر عالٍ).</span>
              </div>
            </div>
          </div>
        </div>

        <div class="db-card db-sim-embedded-card" style="margin-top:20px">
          <div class="db-card-header">
            <div>
              <div class="db-card-title"><span class="en" id="dbCxSimTitleEn">Decision Simulation Lab</span><span class="ar" id="dbCxSimTitleAr">مختبر محاكاة القرارات</span></div>
              <div class="db-card-subtitle">
                <span class="en" id="dbCxSimSubEn">Adjust improvement levers to estimate satisfaction lift</span>
                <span class="ar" id="dbCxSimSubAr">اضبط رافعات التحسين لتقدير الارتفاع في مستوى الرضا</span>
              </div>
            </div>
          </div>
          <div class="db-card-body">
            <div class="db-sim-grid">
              <div class="db-sim-sliders-col">
                <div class="db-sim-toolbar">
                  <button type="button" class="db-sim-reset-btn" onclick="dbSimReset()" title="Restore levers from current driver scores">
                    <svg width="16" height="16" fill="none" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-7"/><path d="M3 3v6h6"/></svg>
                    <span class="en" id="dbCxSimResetEn">Reset to current</span><span class="ar" id="dbCxSimResetAr">إعادة للحالي</span>
                  </button>
                </div>
                <div id="dbSimSliders"></div>
              </div>
              <div class="db-sim-result">
                <div class="db-sim-label"><span class="en" id="dbCxSimLblExpectedEn">Expected Score</span><span class="ar" id="dbCxSimLblExpectedAr">النتيجة المتوقعة</span></div>
                <div class="db-sim-score" id="dbSimExpected"><span class="db-sim-expected-lead" id="dbSimExpectedLeadSpan">79%</span> <span class="db-sim-expected-br" id="dbSimExpectedParenSpan">(3.9)</span></div>
                <div class="db-sim-baseline"><span class="en" id="dbCxBaselineLblEn">Baseline: </span><span class="ar" id="dbCxBaselineLblAr">الأساس: </span><span id="dbSimBaseline">3.80 (76%)</span><span id="dbCxBaselineSuffix"> / 5</span></div>
                <div class="db-sim-advice" id="dbSimAdvice"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── SEGMENTS PANEL ── -->
      <div class="db-panel" id="db-panel-segments">
        <div class="db-card" id="dbSegmentDetail">
          <div class="db-card-header">
            <div><div class="db-card-title" id="dbSegDetailTitle"><span class="en">Units Performance</span><span class="ar">أداء الوحدات</span></div><div class="db-card-subtitle" id="dbSegDetailSub"><span class="en">Reflects branch and demographics filters applied on the dashboard</span><span class="ar">يعكس مرشّح الفرع ومرشّحات الديموغرافيا المفعّلة في لوحة القيادة</span></div></div>
          </div>
          <div class="db-card-body" id="dbSegDetailBody"></div>
        </div>
      </div>

      <!-- ── CUSTOMERS PANEL ── -->
      <div class="db-panel" id="db-panel-customers">
        <div class="db-card">
          <div class="db-card-header">
            <div><div class="db-card-title" id="dbCustPatTitle"><span class="en">Customer Pattern View</span><span class="ar">عرض أنماط العملاء</span></div><div class="db-card-subtitle" id="dbCustPatSub"><span class="en">Distribution charts respect Branch and all demographic filters in the toolbar</span><span class="ar">مخططات التوزيع تلتزم بمرشّح الفرع وكل مرشّحات الديموغرافيا في شريط الأدوات</span></div></div>
          </div>
          <div class="db-card-body db-customer-patterns-body">
            <div class="db-dist-summary" id="dbCustomerPatternsSummary"></div>
            <div class="db-dist-dash" id="dbCustomerPatternsDash" aria-live="polite"></div>
          </div>
        </div>
      </div>

      <!-- ── MODEL QUALITY PANEL ── -->
      <div class="db-panel" id="db-panel-model">
        <div class="db-card db-mq-measure-card">
          <div class="db-card-header">
            <div>
              <div class="db-card-title"><span class="en">Structural measurement model</span><span class="ar">النموذج القياسي البُنيوي</span></div>
              <div class="db-card-subtitle">
                <span class="en">Constructs captured by the questionnaire, with item counts, converging toward the Customer Experience Score outcome.</span>
                <span class="ar">المستحدَثات التي يقيّمها الاستبيان وبعدد البنود، تتجمّع نحو مخرج درجة تجربة العميل.</span>
              </div>
            </div>
          </div>
          <div class="db-card-body">
            <p class="db-mq-measure-intro">
              <span class="en"><b>Note:</b> Below is a built-in diagram for the dark dashboard. To use your own asset, save it as <code style="opacity:.85">mode.png</code> in the site root and we can wire it in next to this block.</span>
              <span class="ar"><b>ملاحظة:</b> أدناه مخطط مدمج يناسب الوضع الداكن. لاستخدام صورتك، احفظها باسم <code style="opacity:.85">mode.png</code> في جذر الموقع لربطها لاحقًا بجانب هذا القسم.</span>
            </p>
            <div class="db-mq-measure-split">
              <ul class="db-mq-construct-list" id="dbMqConstructList">
                <li class="db-mq-ant db-mq-ant--quality">
                  <span class="db-mq-ico" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#93c5fd" stroke-width="1.75"/></svg>
                  </span>
                  <div class="db-mq-ant-text">
                    <strong><span class="en">Quality</span><span class="ar">الجودة</span></strong>
                    <small><span class="en">Repair correctness, expectation fit, confidence</span><span class="ar">استقرار الإصلاح، التوقعات، الثقة</span></small>
                  </div>
                  <span class="db-mq-chip db-mq-chip-lg"><span class="db-mq-qty">4</span><span class="db-mq-q-note"><span class="en">Qs</span><span class="ar">أسئلة</span></span></span>
                </li>
                <li class="db-mq-ant db-mq-ant--comm">
                  <span class="db-mq-ico" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#6ee7b7" stroke-width="1.75"/></svg>
                  </span>
                  <div class="db-mq-ant-text">
                    <strong><span class="en">Communication</span><span class="ar">التواصل</span></strong>
                    <small><span class="en">Updates, clarity of explanation, delays</span><span class="ar">التحديثات، الشرح، التأخير</span></small>
                  </div>
                  <span class="db-mq-chip db-mq-chip-lg"><span class="db-mq-qty">4</span><span class="db-mq-q-note"><span class="en">Qs</span><span class="ar">أسئلة</span></span></span>
                </li>
                <li class="db-mq-ant db-mq-ant--price">
                  <span class="db-mq-ico" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" stroke="#facc15" stroke-width="1.75"/></svg>
                  </span>
                  <div class="db-mq-ant-text">
                    <strong><span class="en">Price fairness</span><span class="ar">عدالة السعر</span></strong>
                    <small><span class="en">Fairness perception, invoice vs estimate</span><span class="ar">المعقولية، الفاتورة والتقدير</span></small>
                  </div>
                  <span class="db-mq-chip db-mq-chip-lg"><span class="db-mq-qty">4</span><span class="db-mq-q-note"><span class="en">Qs</span><span class="ar">أسئلة</span></span></span>
                </li>
                <li class="db-mq-ant db-mq-ant--speed">
                  <span class="db-mq-ico" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#c4b5fd" stroke-width="1.75"/><path d="M12 7v6l4 2" stroke="#c4b5fd" stroke-width="1.75"/></svg>
                  </span>
                  <div class="db-mq-ant-text">
                    <strong><span class="en">Speed</span><span class="ar">السرعة</span></strong>
                    <small><span class="en">Completion time, waits, commitments</span><span class="ar">وقت الإنجاز، الانتظار، الالتزام</span></small>
                  </div>
                  <span class="db-mq-chip db-mq-chip-lg"><span class="db-mq-qty">4</span><span class="db-mq-q-note"><span class="en">Qs</span><span class="ar">أسئلة</span></span></span>
                </li>
                <li class="db-mq-ant db-mq-ant--cx">
                  <span class="db-mq-ico" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#d4af55" stroke-width="1.75"/><circle cx="12" cy="7" r="4" stroke="#d4af55" stroke-width="1.75"/></svg>
                  </span>
                  <div class="db-mq-ant-text">
                    <strong><span class="en">Customer Experience Score</span><span class="ar">درجة تجربة العميل</span></strong>
                    <small><span class="en">Reflective latent · OS1–OS3</span><span class="ar">كتلة انعكاسية · OS1–OS3</span></small>
                  </div>
                  <span class="db-mq-chip db-mq-chip-lg"><span class="db-mq-qty">3</span><span class="db-mq-q-note"><span class="en">Qs</span><span class="ar">أسئلة</span></span></span>
                </li>
              </ul>
              <div class="db-mq-diagram-panel">
                <div class="db-mq-svg-wrap" dir="ltr" id="dbMqSvgWrap">
                  <svg class="db-mq-model-svg" viewBox="0 0 548 392" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                      <marker id="dbMqMb" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><polygon points="0 0,9 4.5,0 9" fill="#60a5fa"/></marker>
                      <marker id="dbMqMg" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><polygon points="0 0,9 4.5,0 9" fill="#34d399"/></marker>
                      <marker id="dbMqMy" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><polygon points="0 0,9 4.5,0 9" fill="#eab308"/></marker>
                      <marker id="dbMqMv" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><polygon points="0 0,9 4.5,0 9" fill="#a78bfa"/></marker>
                    </defs>
                    <!-- Antecedent nodes (taller spacing so stems don’t crowd) -->
                    <rect x="22" y="22" width="162" height="58" rx="12" stroke="rgba(96,165,250,0.55)" stroke-width="1.5" fill="rgba(96,165,250,0.1)"/>
                    <text x="103" y="48" text-anchor="middle" fill="rgba(255,255,255,0.92)" font-size="13" font-weight="700">Quality</text>
                    <text x="103" y="68" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="700">× 4 questions</text>

                    <rect x="22" y="118" width="162" height="58" rx="12" stroke="rgba(52,211,153,0.52)" stroke-width="1.5" fill="rgba(52,211,153,0.08)"/>
                    <text x="103" y="144" text-anchor="middle" fill="rgba(255,255,255,0.92)" font-size="13" font-weight="700">Communication</text>
                    <text x="103" y="164" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="700">× 4 questions</text>

                    <rect x="22" y="214" width="162" height="58" rx="12" stroke="rgba(234,179,8,0.5)" stroke-width="1.5" fill="rgba(234,179,8,0.08)"/>
                    <text x="103" y="240" text-anchor="middle" fill="rgba(255,255,255,0.92)" font-size="13" font-weight="700">Price fairness</text>
                    <text x="103" y="260" text-anchor="middle" fill="#facc15" font-size="11" font-weight="700">× 4 questions</text>

                    <rect x="22" y="310" width="162" height="58" rx="12" stroke="rgba(167,139,250,0.55)" stroke-width="1.5" fill="rgba(167,139,250,0.08)"/>
                    <text x="103" y="336" text-anchor="middle" fill="rgba(255,255,255,0.92)" font-size="13" font-weight="700">Speed</text>
                    <text x="103" y="356" text-anchor="middle" fill="#c4b5fd" font-size="11" font-weight="700">× 4 questions</text>

                    <!-- Outcome (scaled up; arrows land at staggered ys on LEFT edge = no stacked heads) -->
                    <rect x="338" y="116" width="188" height="158" rx="16" stroke="rgba(212,175,85,0.58)" stroke-width="1.6" fill="rgba(184,150,46,0.1)"/>
                    <text x="432" y="166" text-anchor="middle" fill="rgba(255,255,255,0.95)" font-size="13.5" font-weight="700">Customer Experience</text>
                    <text x="432" y="188" text-anchor="middle" fill="rgba(255,255,255,0.95)" font-size="13.5" font-weight="700">Score</text>
                    <text x="432" y="226" text-anchor="middle" fill="#e8c65c" font-size="11.5" font-weight="700">3 indicators (OS1–OS3)</text>

                    <!-- Orthogonal elbows: horizontal from source → short run → diagonal to staggered CES left edge -->
                    <path d="M 184 51 L 276 51 L 338 156" stroke="#60a5fa" stroke-width="1.85" fill="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" marker-end="url(#dbMqMb)"/>
                    <path d="M 184 147 L 276 147 L 338 184" stroke="#34d399" stroke-width="1.85" fill="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" marker-end="url(#dbMqMg)"/>
                    <path d="M 184 243 L 276 243 L 338 208" stroke="#eab308" stroke-width="1.85" fill="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" marker-end="url(#dbMqMy)"/>
                    <path d="M 184 339 L 276 339 L 338 232" stroke="#a78bfa" stroke-width="1.85" fill="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" marker-end="url(#dbMqMv)"/>
                  </svg>
                </div>
                <p class="db-mq-diagram-caption" id="dbMqDiagramCaption">
                  <span class="en">Conceptual drivers → Customer Experience Score (19 items across all blocks pre-pilot).</span>
                  <span class="ar">محركات مفاهيمية → درجة تجربة العميل (١٩ بندًا إجمالًا قبل التجربة).</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="db-card" style="margin-bottom:20px">
          <div class="db-card-header">
            <div><div class="db-card-title"><span class="en">Model Quality Metrics</span><span class="ar">مقاييس جودة النموذج</span></div><div class="db-card-subtitle"><span class="en">Build analytical credibility with stakeholders</span><span class="ar">بناء مصداقية تحليلية مع أصحاب المصلحة</span></div></div>
          </div>
          <div class="db-card-body">
            <div class="db-model-grid">
              <div class="db-model-metric">
                <div class="db-model-metric-val" id="mqR2">72%</div>
                <div class="db-model-metric-label"><span class="en">Explanatory Power</span><span class="ar">القوة التفسيرية</span></div>
                <div class="db-model-metric-desc"><span class="en">Model strength</span><span class="ar">قوة النموذج</span></div>
              </div>
              <div class="db-model-metric">
                <div class="db-model-metric-val">0.88</div>
                <div class="db-model-metric-label"><span class="en">Alpha (Cronbach)</span><span class="ar">ألفا كرونباخ</span></div>
                <div class="db-model-metric-desc"><span class="en">Reliability</span><span class="ar">الموثوقية</span></div>
              </div>
              <div class="db-model-metric">
                <div class="db-model-metric-val">0.91</div>
                <div class="db-model-metric-label"><span class="en">CR</span><span class="ar">الموثوقية المركبة</span></div>
                <div class="db-model-metric-desc"><span class="en">Composite reliability</span><span class="ar">الموثوقية المركبة</span></div>
              </div>
              <div class="db-model-metric">
                <div class="db-model-metric-val">0.64</div>
                <div class="db-model-metric-label"><span class="en">AVE</span><span class="ar">متوسط التباين</span></div>
                <div class="db-model-metric-desc"><span class="en">Convergent validity</span><span class="ar">صحة التقارب</span></div>
              </div>
              <div class="db-model-metric">
                <div class="db-model-metric-val">0.78</div>
                <div class="db-model-metric-label"><span class="en">HTMT</span><span class="ar">HTMT</span></div>
                <div class="db-model-metric-desc"><span class="en">Discriminant validity</span><span class="ar">صحة التمييز</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="db-card">
          <div class="db-card-header"><div class="db-card-title"><span class="en">Management Explanation</span><span class="ar">الشرح للإدارة</span></div></div>
          <div class="db-card-body">
            <div class="db-info-box info" style="margin-top:0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <div class="db-model-mgmt-text">
                <div class="en">
                  <p class="db-model-mgmt-sec"><strong>Explanatory Power (69%)</strong> Shows how much of Customer Experience (CX) is explained by the model. At 69%, it demonstrates strong explanatory power—above benchmarks (≈0.25 weak, 0.50 moderate, 0.75 substantial)—capturing most key drivers and enabling confident decisions. The remaining 31% reflects external or unmeasured factors.</p>
                  <p class="db-model-mgmt-sec"><strong>Alpha (0.88) &amp; Composite Reliability (0.91)</strong> Confirm consistency. Both exceed the 0.70 minimum threshold (0.70–0.95 acceptable), indicating high internal consistency. Results are stable, reliable, and suitable for decision-making.</p>
                  <p class="db-model-mgmt-sec"><strong>AVE (0.64)</strong> Confirms validity. Above the 0.50 benchmark, meaning each factor explains more than half of its indicators. Constructs are well-defined with strong signal and low noise.</p>
                  <p class="db-model-mgmt-sec"><strong>HTMT (0.78)</strong> Confirms separation. Below the 0.85 strict threshold (and 0.90 lenient), indicating factors are clearly distinct with no overlap. Each driver represents an independent lever for improving CX.</p>
                </div>
                <div class="ar">
                  <p class="db-model-mgmt-sec"><strong>القوة التفسيرية (٦٩٪)</strong> توضّح مقدار ما يفسره النموذج من تجربة العميل (CX). عند ٦٩٪ تدلّ على قدرة تفسيرية قوية—فوق مرجعيات شائعة (‏≈‏٠٫٢٥ ضعيف، ٠٫٥٠ متوسط، ٠٫٧٥ جوهري)—فتمثّل أغلب المحفّزات الرئيسة وتدعم قرارات أوضح. النسبة المتبقية ٣١٪ تعكس عوامل خارجية أو غير مقاسة في النموذج.</p>
                  <p class="db-model-mgmt-sec"><strong>ألفا (٠٫٨٨) والموثوقية المركبة (٠٫٩١)</strong> يؤكّدان الاتّساق الداخلي. كلاهما فوق الحدّ الأدنى ٠٫٧٠ (ومن ٠٫٧٠ إلى ٠٫٩٥ مقبول عمومًا)، ما يدلّ على اتّساق عالٍ. النتائج مستقرة وموثوقة ومناسبة لاتّخاذ القرار.</p>
                  <p class="db-model-mgmt-sec"><strong>AVE (٠٫٦٤)</strong> يؤكّد الصحة التجميعية. أعلى من معيار ٠٫٥٠، أي أن كل عاملاً يفسر أكثر من نصف تبايُن مؤشّراته. المستحدَثات واضحة بإشارة قوية وضجيج منخفض.</p>
                  <p class="db-model-mgmt-sec"><strong>HTMT (٠٫٧٨)</strong> يؤكّد التميّز بين العوامل. دون العتبة الصارمة ٠٫٨٥ (والمرنة ٠٫٩٠)، ما يدلّ على أنّ العوامل متميّزة دون تداخل عملي بينها. كلّ محرّك يمثّل رافعة مستقلّة لتحسين تجربة العميل.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── QUESTIONNAIRE PANEL ── -->
      <div class="db-panel" id="db-panel-questionnaire">
        <div class="db-q-panel-grid">
          <div class="db-card db-q-panel-items">
            <div class="db-card-header"><div><div class="db-card-title"><span class="en">Questionnaire Items</span><span class="ar">عناصر الاستبيان</span></div><div class="db-card-subtitle"><span class="en">Neutral mapping — no accept/reject classification</span><span class="ar">ربط محايد دون تصنيف قبول/رفض</span></div></div></div>
            <div class="db-card-body">
              <div class="db-q-items-inner">
                <section class="db-q-section" aria-labelledby="db-q-sh-q">
                  <header class="db-q-section-head" id="db-q-sh-q"><span class="en">Quality</span><span class="ar">الجودة</span></header>
                  <ol class="db-q-lines">
                    <li><div class="db-q-tag">Q1</div><div class="db-q-lines-txt"><span class="en">The repair/service was completed correctly the first time.</span><span class="ar">تم إكمال الإصلاح من أول مرة بشكل صحيح.</span></div></li>
                    <li><div class="db-q-tag">Q2</div><div class="db-q-lines-txt"><span class="en">The delivered work met my expectations.</span><span class="ar">العمل المُسلَّم كان بمستوى توقّعاتي.</span></div></li>
                    <li><div class="db-q-tag">Q3</div><div class="db-q-lines-txt"><span class="en">The vehicle was returned in good condition.</span><span class="ar">عُادت المركبة بحالة جيدة.</span></div></li>
                    <li><div class="db-q-tag">Q4</div><div class="db-q-lines-txt"><span class="en">The quality of work increased my confidence in the service center.</span><span class="ar">الجودة زادت ثقتي بالمركز.</span></div></li>
                  </ol>
                </section>
                <section class="db-q-section" aria-labelledby="db-q-sh-c">
                  <header class="db-q-section-head" id="db-q-sh-c"><span class="en">Communication</span><span class="ar">التواصل</span></header>
                  <ol class="db-q-lines">
                    <li><div class="db-q-tag">C1</div><div class="db-q-lines-txt"><span class="en">I received clear updates during the service process.</span><span class="ar">تلقيت تحديثات واضحة أثناء الخدمة.</span></div></li>
                    <li><div class="db-q-tag">C2</div><div class="db-q-lines-txt"><span class="en">The advisor explained the required work clearly.</span><span class="ar">أوضح المستشار العمل المطلوب بوضوح.</span></div></li>
                    <li><div class="db-q-tag">C3</div><div class="db-q-lines-txt"><span class="en">I was informed before any major change or delay.</span><span class="ar">أُبلِغت قبل أي تغيير كبير أو تأخير.</span></div></li>
                    <li><div class="db-q-tag">C4</div><div class="db-q-lines-txt"><span class="en">Communication was easy to understand.</span><span class="ar">التواصل كان سهل الفهم.</span></div></li>
                  </ol>
                </section>
                <section class="db-q-section" aria-labelledby="db-q-sh-p">
                  <header class="db-q-section-head" id="db-q-sh-p"><span class="en">Price Fairness</span><span class="ar">عدالة السعر</span></header>
                  <ol class="db-q-lines">
                    <li><div class="db-q-tag">P1</div><div class="db-q-lines-txt"><span class="en">The price was fair compared with the service.</span><span class="ar">السعر كان عادلًا مقارنة بالخدمة.</span></div></li>
                    <li><div class="db-q-tag">P2</div><div class="db-q-lines-txt"><span class="en">The estimate was clear before approval.</span><span class="ar">التقدير كان واضحًا قبل الموافقة.</span></div></li>
                    <li><div class="db-q-tag">P3</div><div class="db-q-lines-txt"><span class="en">The final invoice matched what was explained.</span><span class="ar">الفاتورة النهائية طابقت الشرح.</span></div></li>
                    <li><div class="db-q-tag">P4</div><div class="db-q-lines-txt"><span class="en">The value justified the amount paid.</span><span class="ar">القيمة برّرت المبلغ المدفوع.</span></div></li>
                  </ol>
                </section>
                <section class="db-q-section" aria-labelledby="db-q-sh-s">
                  <header class="db-q-section-head" id="db-q-sh-s"><span class="en">Speed</span><span class="ar">السرعة</span></header>
                  <ol class="db-q-lines">
                    <li><div class="db-q-tag">S1</div><div class="db-q-lines-txt"><span class="en">The service was completed within a reasonable time.</span><span class="ar">أُنجزت الخدمة في وقت معقول.</span></div></li>
                    <li><div class="db-q-tag">S2</div><div class="db-q-lines-txt"><span class="en">Waiting time was acceptable.</span><span class="ar">وقت الانتظار مقبول.</span></div></li>
                    <li><div class="db-q-tag">S3</div><div class="db-q-lines-txt"><span class="en">Delivery matched the promised timing.</span><span class="ar">التسليم طابق الموعد المُعلَن.</span></div></li>
                    <li><div class="db-q-tag">S4</div><div class="db-q-lines-txt"><span class="en">Total process time was convenient.</span><span class="ar">وقت العملية كان مناسبًا.</span></div></li>
                  </ol>
                </section>
                <section class="db-q-section" aria-labelledby="db-q-sh-os">
                  <header class="db-q-section-head" id="db-q-sh-os"><span class="en">Customer Experience Score</span><span class="ar">درجة تجربة العميل</span></header>
                  <ol class="db-q-lines">
                    <li><div class="db-q-tag">OS1</div><div class="db-q-lines-txt"><span class="en">Overall I am satisfied with the service experience.</span><span class="ar">بشكل عام راضٍ عن تجربة الخدمة.</span></div></li>
                    <li><div class="db-q-tag">OS2</div><div class="db-q-lines-txt"><span class="en">The experience met my expectations.</span><span class="ar">التجربة نالت توقّعاتي.</span></div></li>
                    <li><div class="db-q-tag">OS3</div><div class="db-q-lines-txt"><span class="en">I would consider returning.</span><span class="ar">قد أعود لنفس المركز.</span></div></li>
                  </ol>
                </section>
              </div>
            </div>
          </div>
          <div class="db-card db-q-viz-card db-q-panel-viz">
            <div class="db-card-header">
              <div>
                <div class="db-card-title"><span class="en">Instrument map</span><span class="ar">خريطة الأداة القياسية</span></div>
                <div class="db-card-subtitle">
                  <span class="en">Nineteen items grouped into five constructs before pilot refinement (conceptual schematic).</span>
                  <span class="ar">تسعة عشر بندًا في خمس مستحدَثات قبل ضبط التجربة (مخطط مفاهيمي).</span>
                </div>
              </div>
            </div>
            <div class="db-card-body">
              <div class="db-q-viz-wrap" dir="ltr">
                <svg class="db-q-viz-svg" viewBox="0 0 512 168" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    <linearGradient id="dbQChip" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stop-color="rgba(212,175,85,0.92)" />
                      <stop offset="100%" stop-color="rgba(184,150,46,0.45)" />
                    </linearGradient>
                  </defs>
                  <rect x="12" y="8" width="488" height="32" rx="10" stroke="rgba(212,175,85,0.35)" stroke-width="1.2" fill="rgba(184,150,46,0.06)" />
                  <text x="256" y="20" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="11" font-weight="700" font-family="'DM Sans', sans-serif">19 items · 5 constructs</text>
                  <text x="256" y="34" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-size="9.5" font-weight="600" font-family="'DM Sans', sans-serif">neutral mapping — prior to pilot</text>
                  <g stroke="rgba(212,175,85,0.28)" stroke-width="1">
                    <rect x="48" y="48" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="48" y="62" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="48" y="76" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="48" y="90" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="136" y="48" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="136" y="62" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="136" y="76" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="136" y="90" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="224" y="48" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="224" y="62" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="224" y="76" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="224" y="90" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="312" y="48" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="312" y="62" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="312" y="76" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="312" y="90" width="60" height="11" rx="3" fill="url(#dbQChip)" />
                    <rect x="392" y="54" width="72" height="11" rx="3" fill="url(#dbQChip)" opacity="0.95" />
                    <rect x="392" y="68" width="72" height="11" rx="3" fill="url(#dbQChip)" opacity="0.95" />
                    <rect x="392" y="82" width="72" height="11" rx="3" fill="url(#dbQChip)" opacity="0.95" />
                  </g>
                  <text x="78" y="124" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-size="10" font-weight="700" font-family="'DM Sans', sans-serif">Q×4</text>
                  <text x="166" y="124" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-size="10" font-weight="700" font-family="'DM Sans', sans-serif">C×4</text>
                  <text x="254" y="124" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-size="10" font-weight="700" font-family="'DM Sans', sans-serif">P×4</text>
                  <text x="342" y="124" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-size="10" font-weight="700" font-family="'DM Sans', sans-serif">S×4</text>
                  <text x="428" y="124" text-anchor="middle" fill="rgba(255,255,255,0.55)" font-size="10" font-weight="700" font-family="'DM Sans', sans-serif">CES×3</text>
                  <text x="256" y="152" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-size="9" font-weight="600" font-family="'DM Sans', sans-serif">each chip = one questionnaire item</text>
                </svg>
              </div>
              <div class="db-card db-q-panel-struct db-q-panel-struct--nested">
                <div class="db-card-header"><div><div class="db-card-title"><span class="en">Questionnaire Structure</span><span class="ar">هيكل الاستبيان</span></div><div class="db-card-subtitle"><span class="en">Instrument map before pilot / SEM</span><span class="ar">خريطة الأداة قبل التجريب ونمذجة المعادلات</span></div></div></div>
                <div class="db-card-body">
                  <div class="db-table-wrap">
                    <table class="db-table">
                      <thead><tr><th><span class="en">Variable</span><span class="ar">المتغيّر</span></th><th><span class="en">Items</span><span class="ar">البنود</span></th><th><span class="en">Measurement focus</span><span class="ar">التركيز القياسي</span></th></tr></thead>
                      <tbody>
                        <tr><td><span class="en">Quality</span><span class="ar">الجودة</span></td><td>4</td><td><span class="en">Repair correctness, expectations, condition, confidence</span><span class="ar">صحة الإصلاح، التوقعات، الحالة، الثقة</span></td></tr>
                        <tr><td><span class="en">Communication</span><span class="ar">التواصل</span></td><td>4</td><td><span class="en">Updates, explanation, delay notification, clarity</span><span class="ar">تحديثات، شرح، إشعار التأخير، الوضوح</span></td></tr>
                        <tr><td><span class="en">Price Fairness</span><span class="ar">عدالة السعر</span></td><td>4</td><td><span class="en">Fairness, estimate, invoice, value</span><span class="ar">العدالة، التقدير، الفاتورة، القيمة</span></td></tr>
                        <tr><td><span class="en">Speed</span><span class="ar">السرعة</span></td><td>4</td><td><span class="en">Completion time, waiting, promised timing, convenience</span><span class="ar">الإنجاز، الانتظار، الموعد، الملاءمة</span></td></tr>
                        <tr><td><span class="en">Customer Experience Score</span><span class="ar">درجة تجربة العميل</span></td><td>3</td><td><span class="en">CX evaluation, expectations, return intention</span><span class="ar">تقييم التجربة، التوقعات، نية العودة</span></td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="db-info-box info" style="margin-top:14px">
                    <span><span class="en"><b>Governance:</b> Item removal is documented only under Pilot Test Analysis.</span><span class="ar"><b>الحوكمة:</b> حذف البنود موثّق فقط في تحليل الاختبار التجريبي.</span></span>
                  </div>
                </div>
              </div>
              <div class="db-q-viz-legend">
                <span><span class="en"><b>Q</b> Quality · <b>C</b> Communication · <b>P</b> Price · <b>S</b> Speed · <b>OS</b> Customer Experience Score</span><span class="ar"><b>Q</b> الجودة · <b>C</b> التواصل · <b>P</b> السعر · <b>S</b> السرعة · <b>OS</b> درجة تجربة العميل</span></span>
              </div>
              <p class="db-q-viz-note">
                <span class="en"><b>Schematic only.</b> Tags (Q, C, P, S, OS) match the sections in <b>Questionnaire Items</b> beside this card. Pilot-driven edits are tracked under <b>Pilot Test Analysis</b>.</span>
                <span class="ar"><b>لمخطّط مرجعي فقط:</b> الوسوم (Q‏، C‏، P‏، S‏، OS‏) تطابق الفقرات في «عناصر الاستبيان» بجانب هذه البطاقة. تعديلات التجربة تُتابع ضمن «<b>تحليل الاختبار التجريبي</b>».</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- ── PILOT PANEL ── -->
      <div class="db-panel" id="db-panel-pilot">
        <div class="db-card db-pilot-flow-card">
          <div class="db-card-header">
            <div>
              <div class="db-card-title"><span class="en">Pilot instrument flow</span><span class="ar">مسار الأداة في التجريب</span></div>
              <div class="db-card-subtitle">
                <span class="en">From pilot responses through item pruning to the retained 15-item measurement model (5 constructs).</span>
                <span class="ar">من استجابات التجريب عبر ضبط البنود إلى نموذج القياس المكوّن من 15 بندًا (5 مُستحدَثات).</span>
              </div>
            </div>
          </div>
          <div class="db-card-body">
            <div class="db-pilot-diagram-wrap" dir="ltr">
              <svg class="db-pilot-flow-svg" viewBox="0 0 640 158" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <marker id="dbPilotArr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <polygon points="0 0, 8 4, 0 8" fill="rgba(255,255,255,0.25)" />
                  </marker>
                </defs>
                <rect x="8" y="42" width="98" height="58" rx="10" stroke="rgba(184,150,46,0.45)" stroke-width="1.5" fill="rgba(184,150,46,0.09)" />
                <text x="57" y="68" text-anchor="middle" fill="rgba(255,255,255,0.92)" font-size="15" font-weight="700" font-family="'DM Sans', sans-serif">30</text>
                <foreignObject x="12" y="74" width="88" height="28" style="overflow: visible">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="text-align:center;line-height:1.12;font-size:8px;font-weight:600;color:rgba(255,255,255,0.5);font-family:'DM Sans',sans-serif">
                    <span class="en">Valid Responses</span>
                    <span class="ar">استجابات صالحة</span>
                  </div>
                </foreignObject>
                <line x1="106" y1="72" x2="126" y2="72" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" marker-end="url(#dbPilotArr)" />
                <rect x="134" y="46" width="92" height="52" rx="10" stroke="rgba(212,175,85,0.35)" stroke-width="1.5" fill="rgba(255,255,255,0.04)" />
                <text x="180" y="72" text-anchor="middle" fill="rgba(255,255,255,0.92)" font-size="15" font-weight="700" font-family="'DM Sans', sans-serif">19</text>
                <text x="180" y="90" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-size="10" font-weight="600" font-family="'DM Sans', sans-serif">items</text>
                <line x1="226" y1="72" x2="252" y2="72" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" marker-end="url(#dbPilotArr)" />
                <path d="M 260 72 L 290 72 L 290 40 L 320 40" stroke="rgba(239,68,68,0.55)" stroke-width="1.5" fill="none" marker-end="url(#dbPilotArr)" />
                <path d="M 290 72 L 290 100 L 320 100" stroke="rgba(212,175,85,0.45)" stroke-width="1.5" fill="none" marker-end="url(#dbPilotArr)" />
                <rect x="322" y="22" width="86" height="36" rx="8" stroke="rgba(239,68,68,0.65)" stroke-width="1.5" fill="rgba(239,68,68,0.12)" />
                <text x="365" y="37" text-anchor="middle" fill="#fca5a5" font-size="13" font-weight="700" font-family="'DM Sans', sans-serif">4</text>
                <text x="365" y="52" text-anchor="middle" fill="rgba(252,165,165,0.85)" font-size="9.5" font-weight="600" font-family="'DM Sans', sans-serif">removed</text>
                <rect x="322" y="82" width="86" height="44" rx="10" stroke="rgba(184,150,46,0.55)" stroke-width="1.5" fill="rgba(184,150,46,0.1)" />
                <text x="365" y="104" text-anchor="middle" fill="rgba(255,255,255,0.92)" font-size="15" font-weight="700" font-family="'DM Sans', sans-serif">15</text>
                <text x="365" y="120" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="10" font-weight="600" font-family="'DM Sans', sans-serif">retained</text>
                <line x1="408" y1="104" x2="432" y2="104" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" marker-end="url(#dbPilotArr)" />
                <rect x="440" y="72" width="118" height="64" rx="12" stroke="rgba(212,175,85,0.4)" stroke-width="1.5" fill="rgba(255,255,255,0.03)" />
                <text x="499" y="100" text-anchor="middle" fill="rgba(255,255,255,0.92)" font-size="15" font-weight="700" font-family="'DM Sans', sans-serif">5 × 3</text>
                <text x="499" y="120" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-size="10" font-weight="600" font-family="'DM Sans', sans-serif">constructs · items</text>
              </svg>
            </div>
            <div class="db-pilot-flow-legend">
              <span class="db-pilot-legend-chip"><i class="ret" aria-hidden="true"></i><span class="en">Retained path → final instrument</span><span class="ar">مسار المحتفَظ به → الأداة النهائية</span></span>
              <span class="db-pilot-legend-chip"><i class="rem" aria-hidden="true"></i><span class="en">Governed removals (documented below)</span><span class="ar">إزالات موثَّقة (أدناه في الجدول)</span></span>
            </div>
            <div class="db-pilot-alpha-block">
              <div class="db-pilot-alpha-head"><span class="en">Cronbach’s α · pilot composites</span><span class="ar">Cronbach α · مركبات التجربة</span></div>
              <div class="db-pilot-alpha-row">
                <div class="db-pilot-alpha-name"><span class="en">Quality</span><span class="ar">الجودة</span></div>
                <div class="db-pilot-alpha-track"><div class="db-pilot-alpha-fill" style="width:86%"></div></div>
                <div class="db-pilot-alpha-val">0.86</div>
              </div>
              <div class="db-pilot-alpha-row">
                <div class="db-pilot-alpha-name"><span class="en">Communication</span><span class="ar">التواصل</span></div>
                <div class="db-pilot-alpha-track"><div class="db-pilot-alpha-fill" style="width:84%"></div></div>
                <div class="db-pilot-alpha-val">0.84</div>
              </div>
              <div class="db-pilot-alpha-row">
                <div class="db-pilot-alpha-name"><span class="en">Price fairness</span><span class="ar">عدالة السعر</span></div>
                <div class="db-pilot-alpha-track"><div class="db-pilot-alpha-fill" style="width:81%"></div></div>
                <div class="db-pilot-alpha-val">0.81</div>
              </div>
              <div class="db-pilot-alpha-row">
                <div class="db-pilot-alpha-name"><span class="en">Speed</span><span class="ar">السرعة</span></div>
                <div class="db-pilot-alpha-track"><div class="db-pilot-alpha-fill" style="width:78%"></div></div>
                <div class="db-pilot-alpha-val">0.78</div>
              </div>
              <div class="db-pilot-alpha-row">
                <div class="db-pilot-alpha-name"><span class="en">Customer Experience Score</span><span class="ar">درجة تجربة العميل</span></div>
                <div class="db-pilot-alpha-track"><div class="db-pilot-alpha-fill" style="width:88%"></div></div>
                <div class="db-pilot-alpha-val">0.88</div>
              </div>
              <div class="db-info-box info" style="margin-top:16px">
                <span>
                  <span class="en"><b>Note:</b> Bar fill width mirrors α scaled to the 0–1 metric (illustrative).</span>
                  <span class="ar"><b>ملاحظة:</b> عرض الشريحة يقتبس α على مقياس ٠–١ (توضيحي).</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="db-grid-2">
          <div class="db-card">
            <div class="db-card-header"><div><div class="db-card-title"><span class="en">Pilot Test Analysis</span><span class="ar">تحليل الاختبار التجريبي</span></div><div class="db-card-subtitle"><span class="en">Reliability + governance — not the final SEM model</span><span class="ar">الموثوقية والحوكمة — وليس نموذج SEM النهائي</span></div></div></div>
            <div class="db-card-body">
              <div class="db-model-grid db-model-grid--wrap" style="margin-bottom:20px">
                <div class="db-model-metric"><div class="db-model-metric-val">30</div><div class="db-model-metric-label"><span class="en">Pilot sample</span><span class="ar">عينة تجريبية</span></div><div class="db-model-metric-desc"><span class="en">Valid responses</span><span class="ar">استجابات صالحة</span></div></div>
                <div class="db-model-metric"><div class="db-model-metric-val">5</div><div class="db-model-metric-label"><span class="en">Constructs</span><span class="ar">المُستحدَثات</span></div><div class="db-model-metric-desc"><span class="en">Variables tested</span><span class="ar">متغيّرات</span></div></div>
                <div class="db-model-metric"><div class="db-model-metric-val">19</div><div class="db-model-metric-label"><span class="en">Items (before)</span><span class="ar">بنود قبل الحذف</span></div></div>
                <div class="db-model-metric"><div class="db-model-metric-val">4</div><div class="db-model-metric-label"><span class="en">Items removed</span><span class="ar">بنود مُزالة</span></div></div>
                <div class="db-model-metric"><div class="db-model-metric-val">15</div><div class="db-model-metric-label"><span class="en">Items retained</span><span class="ar">بنود محتفَظ بها</span></div></div>
              </div>
              <div class="db-table-wrap">
                <table class="db-table">
                  <thead><tr><th><span class="en">Variable</span><span class="ar">المتغيّر</span></th><th><span class="en">Items after</span><span class="ar">بعد الحذف</span></th><th>α</th><th><span class="en">Reading</span><span class="ar">القراءة</span></th></tr></thead>
                  <tbody>
                    <tr><td><span class="en">Quality</span><span class="ar">الجودة</span></td><td>3</td><td>0.86</td><td><span class="en">Good</span><span class="ar">جيد</span></td></tr>
                    <tr><td><span class="en">Communication</span><span class="ar">التواصل</span></td><td>3</td><td>0.84</td><td><span class="en">Good</span><span class="ar">جيد</span></td></tr>
                    <tr><td><span class="en">Price Fairness</span><span class="ar">عدالة السعر</span></td><td>3</td><td>0.81</td><td><span class="en">Good</span><span class="ar">جيد</span></td></tr>
                    <tr><td><span class="en">Speed</span><span class="ar">السرعة</span></td><td>3</td><td>0.78</td><td><span class="en">Acceptable</span><span class="ar">مقبول</span></td></tr>
                    <tr><td><span class="en">Cust. Experience Score</span><span class="ar">درجة تجربة العميل</span></td><td>3</td><td>0.88</td><td><span class="en">Good</span><span class="ar">جيد</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="db-card">
            <div class="db-card-header"><div><div class="db-card-title"><span class="en">Removed Items — Governance Trail</span><span class="ar">البنود المُزالة — مسار الحوكمة</span></div><div class="db-card-subtitle"><span class="en">Each removal needs a clear reason</span><span class="ar">لكل إزالة سبب واضح</span></div></div></div>
            <div class="db-card-body">
              <div class="db-table-wrap">
                <table class="db-table">
                  <thead><tr><th><span class="en">Item</span><span class="ar">البند</span></th><th><span class="en">Variable</span><span class="ar">المتغيّر</span></th><th><span class="en">Why removed</span><span class="ar">سبب الإزالة</span></th></tr></thead>
                  <tbody>
                    <tr><td>Q4</td><td><span class="en">Quality</span><span class="ar">الجودة</span></td><td><span class="en">Overlapped with Customer Experience Score items; weakened construct purity.</span><span class="ar">تداخل مع بنود درجة تجربة العميل؛ أضعف نقاء المُستحدَث.</span></td></tr>
                    <tr><td>C4</td><td><span class="en">Communication</span><span class="ar">التواصل</span></td><td><span class="en">Duplicate meaning with advisor clarity; weaker item-total.</span><span class="ar">تكرار المعنى مع وضوح المستشار؛ مساهمة أضعف في البند–الكلي.</span></td></tr>
                    <tr><td>P4</td><td><span class="en">Price Fairness</span><span class="ar">عدالة السعر</span></td><td><span class="en">Mixed value with fairness; risk of cross-loading on the Customer Experience Score construct.</span><span class="ar">اختلاط القيمة بالعدالة؛ خطر تحميل متقاطع مع مستحدَث درجة تجربة العميل.</span></td></tr>
                    <tr><td>S4</td><td><span class="en">Speed</span><span class="ar">السرعة</span></td><td><span class="en">Broad “convenience” overlapped waiting &amp; process wording.</span><span class="ar">صياغة «الملاءمة» تتداخل مع الانتظار وتجربة العملية.</span></td></tr>
                  </tbody>
                </table>
              </div>
              <div class="db-info-box warning" style="margin-top:16px">
                <span><span class="en"><b>Transparency:</b> Documented removals strengthen credibility with stakeholders.</span><span class="ar"><b>الشفافية:</b> الإزالات الموثَّقة ترفع المصداقية لدى المعنيين.</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── DEMOGRAPHICS PANEL ── -->
      <div class="db-panel" id="db-panel-demographics">
        <div class="db-demo-quality-top">
          <div class="db-demo-qcard db-demo-qcard--funnel">
            <div class="db-demo-qcard-hd">
              <div class="db-demo-qcard-icon" aria-hidden="true">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 16h8l4-6-4-7-3 5-3-2-3 4h-3"/></svg>
              </div>
              <div class="db-demo-qcard-title" id="dbDemoHdrFunnel"><span class="en">1 · Data collection funnel</span><span class="ar">١ · قمع جمع البيانات</span></div>
            </div>
            <div class="db-demo-funnel-scroll"><div id="dbDemoQualityFunnel"></div></div>
          </div>
          <div class="db-demo-qcard db-demo-qcard--exc">
            <div class="db-demo-qcard-hd">
              <div class="db-demo-qcard-icon" aria-hidden="true">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l14.14 14.14"/></svg>
              </div>
              <div class="db-demo-qcard-title" id="dbDemoHdrExc"><span class="en">2 · Data cleaning (exclusions)</span><span class="ar">٢ · التنظيف (الاستبعاد)</span></div>
            </div>
            <div id="dbDemoQualityExclusions"></div>
          </div>
        </div>
        <div class="db-demo-strength-wrap">
          <div class="db-demo-qcard db-demo-qcard--strength">
            <div class="db-demo-qcard-hd">
              <div class="db-demo-qcard-icon" aria-hidden="true">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              </div>
              <div class="db-demo-qcard-head-copy">
                <div class="db-demo-qcard-title" id="dbDemoHdrStr"><span class="en">3 · Sample strength</span><span class="ar">٣ · قوّة العيّنة</span></div>
                <p class="db-demo-qcard-desc" id="dbDemoHdrStrDesc">
                  <span class="en">Explains how far your <b>current filtered</b> cohort is from a stability benchmark—separate from funnel response rates or % of the full file.</span>
                  <span class="ar">يوضّح مدى قرب <b>المصفّى الحالي</b> من حدّ استقرار مرجعي—منفصل عن معدّلات الاستجابة في القمع أو نسبة الملف الكامل.</span>
                </p>
              </div>
            </div>
            <div id="dbDemoQualityStrength"></div>
          </div>
        </div>
        <div class="db-demo-profile-columns">
          <div class="db-card">
            <div class="db-card-header"><div><div class="db-card-title" id="dbDemoHdrEngine"><span class="en">Demographics &amp; Sample Engine</span><span class="ar">الديموغرافيا وحجم العيّنة</span></div><div class="db-card-subtitle" id="dbDemoSubEngine"><span class="en">Insight · branches &amp; gender for selected filters</span><span class="ar">خلاصة فورية وفروع وجنس وفق المرشّح</span></div></div></div>
            <div class="db-card-body">
              <div class="db-info-box info" id="dbDemoInsight" style="margin-top:0"></div>
              <div class="db-demo-grid">
                <div class="db-mini-chart"><div class="db-mini-title"><span class="en">Branches</span><span class="ar">الفروع</span></div><div id="dbBranchDemoChart" class="db-demo-chart"></div></div>
                <div class="db-mini-chart"><div class="db-mini-title"><span class="en">Gender</span><span class="ar">الجنس</span></div><div id="dbGenderDemoChart" class="db-demo-chart"></div></div>
              </div>
            </div>
          </div>
          <div class="db-card">
            <div class="db-card-header"><div><div class="db-card-title" id="dbDemoHdrProfile"><span class="en">Final sample profile (demographics)</span><span class="ar">ملف العينة النهائي (ديموغرافيا)</span></div><div class="db-card-subtitle" id="dbDemoSubProfile"><span class="en">Service lane &amp; visit cadence · this slice</span><span class="ar">الخدمة وإيقاع الزيارات · هذه الشريحة</span></div></div></div>
            <div class="db-card-body">
              <div class="db-demo-grid">
                <div class="db-mini-chart"><div class="db-mini-title"><span class="en">Service</span><span class="ar">الخدمة</span></div><div id="dbServiceDemoChart" class="db-demo-chart"></div></div>
                <div class="db-mini-chart"><div class="db-mini-title"><span class="en">Visit frequency</span><span class="ar">تكرار الزيارات</span></div><div id="dbFrequencyDemoChart" class="db-demo-chart"></div></div>
              </div>
            </div>
          </div>
          <div class="db-card db-demo-profile-span">
            <div class="db-card-header"><div><div class="db-card-title" id="dbDemoHdrAge"><span class="en">Age Categories</span><span class="ar">فئات العمر</span></div><div class="db-card-subtitle" id="dbDemoSubAge"><span class="en">Population spread by age category · full layout width</span><span class="ar">توزيع الأعمار حسب الفئة على كامل العرض لهذه الشريحة</span></div></div></div>
            <div class="db-card-body">
              <div id="dbAgeDemoChart" class="db-demo-chart"></div>
            </div>
          </div>
        </div>
      </div>

    </div><!-- end db-content -->
  </div><!-- end db-main -->

  <!-- Mobile sidebar toggle -->
  <button class="db-sidebar-toggle" id="dbSidebarToggle" onclick="toggleDashboardSidebar()">
    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
  </button>

</div><!-- end customerDashboard -->

<!-- TOAST -->
<div class="toast" id="toast"></div>

<!-- ═══════════════════════════════════════════════
     JAVASCRIPT
     ═══════════════════════════════════════════════ -->
<script>
/* ── Backend API base URL ── */
const API_BASE = 'https://roshd-professional-s8lh.vercel.app';

/* ── Language System ── */
function setLanguage(lang) {
  const isAr = lang === 'ar';
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  // Public nav buttons
  const btnAr = document.getElementById('btn-ar');
  const btnEn = document.getElementById('btn-en');
  if (btnAr) { btnAr.classList.toggle('active', isAr); }
  if (btnEn) { btnEn.classList.toggle('active', !isAr); }
  // Dashboard nav buttons
  const dbBtnAr = document.getElementById('db-btn-ar');
  const dbBtnEn = document.getElementById('db-btn-en');
  if (dbBtnAr) { dbBtnAr.classList.toggle('active', isAr); }
  if (dbBtnEn) { dbBtnEn.classList.toggle('active', !isAr); }
  // Placeholders
  document.querySelectorAll('[data-ph-en]').forEach(el => {
    el.placeholder = isAr ? (el.dataset.phAr || '') : (el.dataset.phEn || '');
  });
  // Dashboard filter select options
  document.querySelectorAll('#customerDashboard select option[data-en]').forEach(opt => {
    opt.textContent = isAr ? (opt.dataset.ar || opt.dataset.en) : opt.dataset.en;
  });
  if (document.getElementById('hamburger')?.classList.contains('open')) closeMobileMenu();
  try { localStorage.setItem('roshd-lang', lang); } catch(e) {}
  // Re-render dashboard if open
  if (document.getElementById('customerDashboard').classList.contains('open')) {
    dbRender();
    try {
      const fb = document.querySelector('.db-filter-bar-scroll-outer');
      if (fb && typeof dbUpdateFilterBarScrollFade === 'function')
        requestAnimationFrame(() => dbUpdateFilterBarScrollFade(fb));
    } catch (_) {}
  }
}

function t(en, ar) {
  return document.documentElement.getAttribute('data-lang') === 'ar' ? ar : en;
}

// Init language
(function() {
  var saved = null;
  try { saved = localStorage.getItem('roshd-lang'); } catch(e) {}
  setLanguage(saved || 'ar');
})();

/* ── Platform tabs ── */
function switchPlatform(idx) {
  document.querySelectorAll('.platform-tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  document.querySelectorAll('.platform-panel').forEach((p, i) => p.classList.toggle('active', i === idx));
}

/* ── Navbar scroll ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Password toggle ── */
function togglePwVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input || !btn) return;
  input.type = input.type === 'password' ? 'text' : 'password';
  const masked = input.type === 'password';
  const open = btn.querySelector('.pw-eye-open');
  const off  = btn.querySelector('.pw-eye-off');
  if (open) open.hidden = !masked;
  if (off)  off.hidden  = masked;
}

/* ── Mobile Menu ── */
function toggleMobileMenu() {
  document.getElementById('hamburger').classList.contains('open') ? closeMobileMenu() : openMobileMenu();
}
function openMobileMenu() {
  document.getElementById('hamburger').classList.add('open');
  document.getElementById('hamburger').setAttribute('aria-expanded', 'true');
  document.getElementById('navLinks').classList.add('open');
  document.getElementById('mobileNavOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('mobileNavOverlay').classList.remove('open');
  if (!document.getElementById('loginModal').classList.contains('open') && !document.getElementById('signupModal').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

/* ── Keyboard ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeMobileMenu(); closeLogin(); closeSignup(); }
});

/* ── Login Modal ── */
function openLogin(e) {
  e && e.preventDefault();
  closeSignup();
  document.getElementById('loginModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLogin() {
  document.getElementById('loginModal').classList.remove('open');
  if (!document.getElementById('signupModal').classList.contains('open')) document.body.style.overflow = '';
}
function closeOnOverlay(e) {
  if (e.target === document.getElementById('loginModal')) closeLogin();
}

/* ── Signup Modal ── */
function openSignup(e) {
  e && e.preventDefault();
  closeLogin();
  document.getElementById('signupModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSignup() {
  document.getElementById('signupModal').classList.remove('open');
  if (!document.getElementById('loginModal').classList.contains('open')) document.body.style.overflow = '';
}
function closeOnOverlaySignup(e) {
  if (e.target === document.getElementById('signupModal')) closeSignup();
}
function switchToSignup() { closeLogin(); setTimeout(openSignup, 120); }
function switchToLogin()  { closeSignup(); setTimeout(openLogin, 120); }

/* ── Login Handler ── */
async function handleLogin() {
  const emailEl    = document.getElementById('loginEmail');
  const passwordEl = document.getElementById('loginPassword');
  const errorEl    = document.getElementById('loginError');
  const btnEl      = document.querySelector('#loginModal .btn-primary');
  const email      = (emailEl?.value || '').trim();
  const password   = passwordEl?.value || '';
  errorEl.classList.remove('show');

  if (!email || !password) {
    errorEl.textContent = t('Please enter your email and password.', 'يرجى إدخال البريد الإلكتروني وكلمة المرور.');
    errorEl.classList.add('show'); return;
  }

  const originalText = btnEl ? btnEl.innerHTML : '';
  if (btnEl) { btnEl.disabled = true; btnEl.textContent = t('Signing in…', 'جارٍ تسجيل الدخول…'); }

  try {
    const res  = await fetch(API_BASE + '/api/auth/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email, password }) });
    let data = {};
    try { data = await res.json(); } catch(_) {}

    if (data.success) {
      try {
        localStorage.setItem('roshd_access_token',  data.token);
        localStorage.setItem('roshd_refresh_token', data.refresh_token);
        localStorage.setItem('roshd_user',          JSON.stringify(data.user || {}));
      } catch(_) {}
      closeLogin();
      showDashboard(data.user);
      showToast(t('Welcome back! Dashboard loaded.', 'مرحبًا بعودتك! تم تحميل لوحة التحكم.'));
      return;
    }

    const msg = data.message || (res.status === 429
      ? t('Too many attempts — wait a few minutes.', 'محاولات كثيرة — انتظر بضع دقائق.')
      : t('Invalid email or password.', 'البريد الإلكتروني أو كلمة المرور غير صحيحة.'));
    errorEl.textContent = msg;
    errorEl.classList.add('show');
  } catch(_) {
    // Demo fallback when server not connected
    if (email && password.length >= 4) {
      closeLogin();
      showDashboard({ email, first_name: email.split('@')[0], role: 'customer' });
      showToast(t('Demo mode — Dashboard loaded.', 'وضع العرض التجريبي — تم تحميل لوحة التحكم.'));
    } else {
      errorEl.textContent = t('Invalid credentials.', 'بيانات الدخول غير صحيحة.');
      errorEl.classList.add('show');
    }
  } finally {
    if (btnEl) { btnEl.disabled = false; btnEl.innerHTML = originalText; }
  }
}

/* ── Signup Handler ── */
async function handleSignup() {
  const firstEl   = document.getElementById('signupFirstName');
  const lastEl    = document.getElementById('signupLastName');
  const emailEl   = document.getElementById('signupEmail');
  const pwEl      = document.getElementById('signupPassword');
  const cpwEl     = document.getElementById('signupConfirmPassword');
  const errorEl   = document.getElementById('signupError');
  const successEl = document.getElementById('signupSuccess');
  const btnEl     = document.querySelector('#signupModal .btn-primary');
  const first = (firstEl?.value||'').trim(), last = (lastEl?.value||'').trim();
  const email = (emailEl?.value||'').trim(), pw = pwEl?.value||'', cpw = cpwEl?.value||'';
  errorEl.classList.remove('show'); successEl.classList.remove('show');

  if (!first || !last || !email || !pw) { errorEl.textContent = t('Please fill in all required fields.','يرجى ملء جميع الحقول المطلوبة.'); errorEl.classList.add('show'); return; }
  if (pw.length < 8) { errorEl.textContent = t('Password must be at least 8 characters.','يجب أن تكون كلمة المرور 8 أحرف على الأقل.'); errorEl.classList.add('show'); return; }
  if (pw !== cpw) { errorEl.textContent = t('Passwords do not match.','كلمتا المرور غير متطابقتين.'); errorEl.classList.add('show'); return; }

  const originalText = btnEl ? btnEl.innerHTML : '';
  if (btnEl) { btnEl.disabled = true; btnEl.textContent = t('Creating account…','جارٍ إنشاء الحساب…'); }
  try {
    const res = await fetch(API_BASE + '/api/auth/register', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email, password: pw, first_name: first, last_name: last }) });
    let data = {};
    try { data = await res.json(); } catch(_) {}
    if (data.success) {
      successEl.textContent = t('Account created! You can now sign in.','تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.');
      successEl.classList.add('show');
      [firstEl, lastEl, emailEl, pwEl, cpwEl].forEach(el => { if(el) el.value=''; });
      setTimeout(switchToLogin, 1800); return;
    }
    errorEl.textContent = data.message || t('Could not create account.','تعذّر إنشاء الحساب.'); errorEl.classList.add('show');
  } catch(_) {
    errorEl.textContent = t('Could not reach the server.','تعذّر الاتصال بالخادم.'); errorEl.classList.add('show');
  } finally {
    if (btnEl) { btnEl.disabled = false; btnEl.innerHTML = originalText; }
  }
}

/* ── Contact ── */
function handleContact(e) {
  showToast(t('Message sent! We\\'ll get back to you shortly.', 'تم الإرسال! سنتواصل معك قريبًا.'));
}

/* ── Toast ── */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ════════════════════════════════════════════════
   CUSTOMER DASHBOARD SYSTEM
   ════════════════════════════════════════════════ */

/* ── Dashboard Data ── */
const DB_DATA = {
  "All Branches": {
    score:3.8, explanatory:72, top:"Quality", risk:"Speed",
    topAr:"الجودة", riskAr:"السرعة",
    drivers:[
      {name:"Quality",nameAr:"الجودة",avg:3.4,path:.68,impact:.34,decision:"Invest",decisionAr:"استثمر",cls:"navy"},
      {name:"Communication",nameAr:"التواصل",avg:3.0,path:.48,impact:.23,decision:"Selective",decisionAr:"انتقائي",cls:"warning"},
      {name:"Price Fairness",nameAr:"عدالة السعر",avg:2.9,path:.32,impact:.12,decision:"Monitor",decisionAr:"راقب",cls:"info"},
      {name:"Advisor Behavior",nameAr:"سلوك المستشار",avg:3.8,path:.36,impact:.10,decision:"Maintain",decisionAr:"حافظ",cls:""},
      {name:"Speed",nameAr:"السرعة",avg:1.4,path:.04,impact:.01,decision:"Do not overinvest",decisionAr:"لا تُبالغ في الاستثمار",cls:"danger"}
    ],
    invest:["Fund quality consistency improvements.","Audit first-time-right and rework patterns.","Make quality the main CX improvement program."],
    investAr:["موّل تحسينات الجودة المستمرة.","راجع أنماط الإصلاح من أول مرة والإعادة.","اجعل الجودة برنامج التحسين الرئيسي."],
    optimize:["Improve customer communication discipline.","Use advisor scripts for updates.","Target price fairness where complaints cluster."],
    optimizeAr:["حسّن انضباط التواصل مع العملاء.","استخدم نصوص المستشار للتحديثات.","استهدف عدالة السعر حيث تتركز الشكاوى."],
    avoid:["Do not invest in speed just because its average is low.","Do not build one action plan for all branches.","Do not use averages as decision authority."],
    avoidAr:["لا تستثمر في السرعة لأن متوسطها منخفض فقط.","لا تبنِ خطة عمل واحدة لجميع الفروع.","لا تستخدم المتوسطات كسلطة قرار."]
  },
  "Riyadh": {
    score:3.7, explanatory:74, top:"Quality", risk:"Speed",
    topAr:"الجودة", riskAr:"السرعة",
    drivers:[
      {name:"Quality",nameAr:"الجودة",avg:3.5,path:.71,impact:.34,decision:"Invest",decisionAr:"استثمر",cls:"navy"},
      {name:"Advisor Behavior",nameAr:"سلوك المستشار",avg:3.9,path:.39,impact:.15,decision:"Optimize",decisionAr:"حسّن",cls:"warning"},
      {name:"Communication",nameAr:"التواصل",avg:3.2,path:.31,impact:.11,decision:"Selective",decisionAr:"انتقائي",cls:"info"},
      {name:"Price Fairness",nameAr:"عدالة السعر",avg:3.0,path:.20,impact:.07,decision:"Monitor",decisionAr:"راقب",cls:""},
      {name:"Speed",nameAr:"السرعة",avg:1.5,path:.03,impact:.01,decision:"Do not overinvest",decisionAr:"لا تُبالغ",cls:"danger"}
    ],
    invest:["Invest in repair quality consistency.","Introduce quality gate before delivery.","Tie rework reduction to branch KPIs."],
    investAr:["استثمر في استمرارية جودة الإصلاح.","أدخل بوابة جودة قبل التسليم.","اربط تخفيض الإعادة بمؤشرات الفرع."],
    optimize:["Coach advisors on expectation setting.","Improve explanation during handover.","Track advisor-level complaints."],
    optimizeAr:["درّب المستشارين على تحديد التوقعات.","حسّن الشرح أثناء التسليم.","تتبع الشكاوى على مستوى المستشار."],
    avoid:["Do not add capacity only to improve speed.","Avoid generic campaigns not linked to quality.","Do not treat Riyadh like other branches."],
    avoidAr:["لا تضف طاقة فقط لتحسين السرعة.","تجنّب الحملات العامة غير المرتبطة بالجودة.","لا تعامل الرياض مثل الفروع الأخرى."]
  },
  "Jeddah": {
    score:3.4, explanatory:69, top:"Communication", risk:"Speed",
    topAr:"التواصل", riskAr:"السرعة",
    drivers:[
      {name:"Communication",nameAr:"التواصل",avg:2.8,path:.62,impact:.26,decision:"Invest",decisionAr:"استثمر",cls:"navy"},
      {name:"Quality",nameAr:"الجودة",avg:3.4,path:.44,impact:.18,decision:"Optimize",decisionAr:"حسّن",cls:"warning"},
      {name:"Price Fairness",nameAr:"عدالة السعر",avg:2.7,path:.33,impact:.12,decision:"Selective",decisionAr:"انتقائي",cls:"info"},
      {name:"Advisor Behavior",nameAr:"سلوك المستشار",avg:3.5,path:.25,impact:.08,decision:"Monitor",decisionAr:"راقب",cls:""},
      {name:"Speed",nameAr:"السرعة",avg:1.3,path:.05,impact:.01,decision:"Do not overinvest",decisionAr:"لا تُبالغ",cls:"danger"}
    ],
    invest:["Invest in communication discipline.","Mandatory customer update checkpoints.","Daily advisor update compliance tracking."],
    investAr:["استثمر في انضباط التواصل.","نقاط تحديث إلزامية للعملاء.","تتبع يومي لامتثال تحديثات المستشار."],
    optimize:["Target quality issues in repeat complaints.","Use selective quality audit.","Improve repair explanation to customer."],
    optimizeAr:["استهدف مشكلات الجودة في الشكاوى المتكررة.","استخدم تدقيق جودة انتقائي.","حسّن شرح الإصلاح للعميل."],
    avoid:["Do not assume speed is the root cause.","Avoid staffing increases without driver evidence.","Do not overreact to low averages."],
    avoidAr:["لا تفترض أن السرعة هي السبب الجذري.","تجنّب زيادة الكوادر بدون دليل محرك.","لا تبالغ في الاستجابة لانخفاض المتوسطات."]
  },
  "Dammam": {
    score:3.2, explanatory:63, top:"Price Fairness", risk:"Speed",
    topAr:"عدالة السعر", riskAr:"السرعة",
    drivers:[
      {name:"Price Fairness",nameAr:"عدالة السعر",avg:2.5,path:.51,impact:.22,decision:"Invest",decisionAr:"استثمر",cls:"navy"},
      {name:"Communication",nameAr:"التواصل",avg:3.0,path:.37,impact:.15,decision:"Optimize",decisionAr:"حسّن",cls:"warning"},
      {name:"Quality",nameAr:"الجودة",avg:3.3,path:.30,impact:.10,decision:"Selective",decisionAr:"انتقائي",cls:"info"},
      {name:"Advisor Behavior",nameAr:"سلوك المستشار",avg:3.4,path:.21,impact:.06,decision:"Monitor",decisionAr:"راقب",cls:""},
      {name:"Speed",nameAr:"السرعة",avg:1.2,path:.04,impact:.01,decision:"Do not overinvest",decisionAr:"لا تُبالغ",cls:"danger"}
    ],
    invest:["Invest in price fairness explanation.","Improve estimate transparency.","Train advisors on value explanation."],
    investAr:["استثمر في شرح عدالة السعر.","حسّن شفافية التقديرات.","درّب المستشارين على شرح القيمة."],
    optimize:["Support price fairness with better communication.","Send clear estimates before approval.","Track price-related objections."],
    optimizeAr:["ادعم عدالة السعر بتواصل أفضل.","أرسل تقديرات واضحة قبل الموافقة.","تتبع الاعتراضات المتعلقة بالسعر."],
    avoid:["Do not discount blindly.","Do not prioritize speed.","Avoid across-the-board fixes."],
    avoidAr:["لا تُقدّم خصومات بشكل أعمى.","لا تُعطِ أولوية للسرعة.","تجنّب الإصلاحات الشاملة."]
  }
};

const DB_SAMPLE_TOTAL = 300;
const DB_BR_LIST = ["Riyadh", "Jeddah", "Dammam"];
const DB_GENDER_LIST = ["Male", "Female"];
const DB_SVC_LIST = ["Mechanical", "Bodyshop"];
const DB_FREQ_LIST = ["1 Visit", "2–3 Visits", "4+ Visits"];
const DB_AGE_LIST = ["<25", "25–34", "35–44", "45+"];

/** Must match admin \`FILTER_BAR_STORAGE_KEY\` */
const FILTER_BAR_STORAGE_KEY = 'roshd_filter_bar_config';
let __dbgFilterCfgSig = '';

function dbDefaultFilterBarConfig() {
  return {
    filters: [
      { key: 'branch', labelEn: 'Branch', labelAr: 'الفرع', allValue: 'All Branches', allLabelEn: 'All Branches', allLabelAr: 'جميع الفروع', options: [{ value: 'Riyadh', labelEn: 'Riyadh', labelAr: 'الرياض' }, { value: 'Jeddah', labelEn: 'Jeddah', labelAr: 'جدة' }, { value: 'Dammam', labelEn: 'Dammam', labelAr: 'الدمام' }] },
      { key: 'gender', labelEn: 'Gender', labelAr: 'الجنس', allValue: 'All Genders', allLabelEn: 'All Genders', allLabelAr: 'الجنسين', options: [{ value: 'Male', labelEn: 'Male', labelAr: 'ذكر' }, { value: 'Female', labelEn: 'Female', labelAr: 'أنثى' }] },
      { key: 'service', labelEn: 'Service', labelAr: 'الخدمة', allValue: 'All Services', allLabelEn: 'All Services', allLabelAr: 'جميع الخدمات', options: [{ value: 'Mechanical', labelEn: 'Mechanical', labelAr: 'ميكانيكي' }, { value: 'Bodyshop', labelEn: 'Bodyshop', labelAr: 'هيكل السيارة' }] },
      { key: 'frequency', labelEn: 'Frequency', labelAr: 'تكرار الزيارات', allValue: 'All Frequencies', allLabelEn: 'All Frequencies', allLabelAr: 'كل التكرارات', options: [{ value: '1 Visit', labelEn: '1 Visit', labelAr: 'زيارة واحدة' }, { value: '2–3 Visits', labelEn: '2–3 Visits', labelAr: '2–3 زيارات' }, { value: '4+ Visits', labelEn: '4+ Visits', labelAr: '4+ زيارات' }] },
      { key: 'age', labelEn: 'Age', labelAr: 'العمر', allValue: 'All Ages', allLabelEn: 'All Ages', allLabelAr: 'كل الأعمار', options: [{ value: '<25', labelEn: '<25', labelAr: 'أقل من 25' }, { value: '25–34', labelEn: '25–34', labelAr: '25–34' }, { value: '35–44', labelEn: '35–44', labelAr: '35–44' }, { value: '45+', labelEn: '45+', labelAr: '45+' }] },
      { key: 'extra1', labelEn: 'Channel', labelAr: 'القناة', allValue: '__ALL__', allLabelEn: 'All channels', allLabelAr: 'كل القنوات', options: [{ value: 'Walk-in', labelEn: 'Walk-in', labelAr: 'حضوري' }, { value: 'App', labelEn: 'App / Online', labelAr: 'التطبيق' }, { value: 'Phone', labelEn: 'Phone', labelAr: 'هاتف' }] },
      { key: 'extra2', labelEn: 'Customer type', labelAr: 'نوع العميل', allValue: '__ALL__', allLabelEn: 'All types', allLabelAr: 'كل الأنواع', options: [{ value: 'New', labelEn: 'New', labelAr: 'جديد' }, { value: 'Returning', labelEn: 'Returning', labelAr: 'عائد' }] },
      { key: 'extra3', labelEn: 'Day part', labelAr: 'فترة اليوم', allValue: '__ALL__', allLabelEn: 'All', allLabelAr: 'الكل', options: [{ value: 'Weekday', labelEn: 'Weekday', labelAr: 'يوم عمل' }, { value: 'Weekend', labelEn: 'Weekend', labelAr: 'عطلة' }] }
    ]
  };
}

function dbDeepCloneJson(x) {
  try { return JSON.parse(JSON.stringify(x)); } catch (_) { return dbDefaultFilterBarConfig(); }
}

function dbNormalizeFilterBarConfig(parsed) {
  const def = dbDefaultFilterBarConfig();
  if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.filters)) return def;
  const out = { filters: [] };
  for (let i = 0; i < 8; i++) {
    const d = dbDeepCloneJson(def).filters[i];
    const s = parsed.filters[i];
    if (!s || typeof s !== 'object') {
      out.filters.push(d);
      continue;
    }
    const merged = {
      key: d.key,
      labelEn: String(s.labelEn || d.labelEn),
      labelAr: String(s.labelAr || d.labelAr),
      allValue: String(s.allValue != null && s.allValue !== '' ? s.allValue : d.allValue),
      allLabelEn: String(s.allLabelEn || d.allLabelEn),
      allLabelAr: String(s.allLabelAr || d.allLabelAr),
      options: dbDeepCloneJson(d.options)
    };
    const rawOpts = Array.isArray(s.options) ? s.options : [];
    const seen = new Set();
    const opts = [];
    rawOpts.forEach((ro) => {
      const v = String(ro && ro.value != null ? ro.value : '').trim();
      if (!v || seen.has(v)) return;
      seen.add(v);
      opts.push({
        value: v,
        labelEn: String(ro.labelEn || v),
        labelAr: String(ro.labelAr || ro.labelEn || v)
      });
    });
    if (opts.length) merged.options = opts;
    out.filters.push(merged);
  }
  return out;
}

function dbGetFilterBarConfig() {
  try {
    const raw = localStorage.getItem(FILTER_BAR_STORAGE_KEY);
    if (raw) return dbNormalizeFilterBarConfig(JSON.parse(raw));
  } catch (_) {}
  return dbDefaultFilterBarConfig();
}

function dbFilterConfigFingerprint() {
  try { return JSON.stringify(dbGetFilterBarConfig().filters); } catch (_) { return ''; }
}

/** Column index for customer row: dims 1–5 at 1–5, extras at 12–14 (risk stays at 11). */
function dbFilterDatasetCol(filterIndex) {
  if (filterIndex < 5) return 1 + filterIndex;
  return 12 + (filterIndex - 5);
}

function dbFilId(kind, i) {
  if (kind === 'exec') return 'execFil' + i;
  if (kind === 'cx') return 'cxFil' + i;
  return 'dbFil' + i;
}

function dbGetFilValue(kind, i) {
  const cfg = dbGetFilterBarConfig();
  const f = cfg.filters[i];
  if (!f) return '';
  const el = document.getElementById(dbFilId(kind, i));
  const allV = String(f.allValue ?? '').trim();
  const raw = el ? String(el.value).trim() : allV;
  if (raw === '') return allV;
  return raw;
}

function dbFilValueByKey(key, fallbackWhenAll) {
  const cfg = dbGetFilterBarConfig();
  const ix = cfg.filters.findIndex((x) => x.key === key);
  if (ix < 0) return fallbackWhenAll;
  const f = cfg.filters[ix];
  const v = dbGetFilValue('db', ix);
  const allV = String(f.allValue ?? '').trim();
  if (!v || v === allV) return fallbackWhenAll;
  return v;
}

function dbFilMatchesCustomerRow(cust, filterIndex, selectedRaw) {
  const cfg = dbGetFilterBarConfig();
  const f = cfg.filters[filterIndex];
  if (!f) return true;
  const col = dbFilterDatasetCol(filterIndex);
  const allV = String(f.allValue ?? '').trim();
  const sel = String(selectedRaw ?? '').trim();
  if (sel === '' || sel === allV) return true;
  return String(cust[col] ?? '').trim() === sel;
}

function dbGetAllFilValues(kind) {
  const cfg = dbGetFilterBarConfig();
  const out = [];
  for (let i = 0; i < 8; i++) out.push(dbGetFilValue(kind, i));
  return out;
}

function dbPersistRoshdFilters() {
  const cfg = dbGetFilterBarConfig();
  const o = {};
  cfg.filters.forEach((f, i) => {
    const el = document.getElementById(dbFilId('db', i));
    o[f.key] = el ? String(el.value) : String(f.allValue ?? '');
  });
  try {
    localStorage.setItem('roshd_filters', JSON.stringify(o));
  } catch (_) {}
}

function dbRestoreRoshdFilters(obj) {
  if (!obj || typeof obj !== 'object') return;
  const cfg = dbGetFilterBarConfig();
  const legacy = {
    branch: obj.branch,
    gender: obj.gender,
    service: obj.service,
    frequency: obj.frequency,
    age: obj.age
  };
  cfg.filters.forEach((f, i) => {
    const el = document.getElementById(dbFilId('db', i));
    if (!el) return;
    let v = obj[f.key];
    if (v == null || v === '') v = legacy[f.key];
    if (v == null || v === '') return;
    const has = Array.from(el.options).some((o) => String(o.value) === String(v));
    if (has) el.value = String(v);
  });
}

function dbSyncFilterBarAfterExternalConfigChange() {
  try {
    __dbgFilterCfgSig = '';
    dbBuildCustomerFilterBar();
    dbRestoreRoshdFilters(JSON.parse(localStorage.getItem('roshd_filters') || 'null'));
    dbEnsureCustomersBuiltForFilters();
    if (typeof dbRender === 'function') dbRender();
  } catch (_) {}
}

function dbEnsureCustomersBuiltForFilters() {
  const sig = dbFilterConfigFingerprint();
  if (__dbgFilterCfgSig === sig && DB_CUSTOMERS.length) return;
  __dbgFilterCfgSig = sig;
  dbRegenerateCustomers();
}

function dbEscAttr(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function dbUpdateFilterBarScrollFade(outer) {
  if (!outer) return;
  const max = outer.scrollWidth - outer.clientWidth;
  if (max <= 1) {
    outer.classList.remove('is-scrollable-start', 'is-scrollable-end');
    return;
  }
  const tol = 4;
  const sl = outer.scrollLeft;
  outer.classList.toggle('is-scrollable-start', sl > tol);
  outer.classList.toggle('is-scrollable-end', sl < max - tol);
}

let __dbFilterScrollBound = false;
function dbBindFilterBarScrollFade() {
  const outer = document.querySelector('.db-filter-bar-scroll-outer');
  if (!outer) return;
  const upd = () => {
    requestAnimationFrame(() => dbUpdateFilterBarScrollFade(outer));
  };
  upd();
  if (__dbFilterScrollBound) return;
  __dbFilterScrollBound = true;
  outer.addEventListener('scroll', upd, { passive: true });
  window.addEventListener('resize', upd);
}

function dbBuildCustomerFilterBar() {
  const host = document.getElementById('dbFilterBarInner');
  if (!host) return;
  const cfg = dbGetFilterBarConfig();
  host.innerHTML = cfg.filters.map((f, i) => {
    const fid = dbFilId('db', i);
    const lbl = \`<label class="db-filter-chip-lbl" for="\${fid}"><span class="en">\${dbEscAttr(f.labelEn)}</span><span class="ar">\${dbEscAttr(f.labelAr)}</span></label>\`;
    const optAll = \`<option value="\${dbEscAttr(f.allValue)}" data-en="\${dbEscAttr(f.allLabelEn)}" data-ar="\${dbEscAttr(f.allLabelAr)}">\${dbEscAttr(f.allLabelEn)}</option>\`;
    const opts = (f.options || []).map(
      (o) =>
        \`<option value="\${dbEscAttr(o.value)}" data-en="\${dbEscAttr(o.labelEn)}" data-ar="\${dbEscAttr(o.labelAr)}">\${dbEscAttr(o.labelEn)}</option>\`
    ).join('');
    return \`<div class="db-filter-chip">\${lbl}<div class="db-filter-chip-select-wrap"><select class="db-select" id="\${fid}" aria-label="\${dbEscAttr(f.labelEn)}" onchange="dbRender()">\${optAll}\${opts}</select></div></div>\`;
  }).join('');
  document.querySelectorAll('#dbFilterBarInner select option[data-en]').forEach((opt) => {
    const en = opt.dataset.en;
    const ar = opt.dataset.ar;
    opt.textContent = document.documentElement.getAttribute('data-lang') === 'ar' ? (ar || en) : en;
  });
  dbBindFilterBarScrollFade();
}

/** @type {Array<any>} Customer rows: … + risk @11, extra1–3 @12–14 */
const DB_CUSTOMERS = [];

function dbRegenerateCustomers() {
  DB_CUSTOMERS.length = 0;
  const cfg = dbGetFilterBarConfig();

  function optVals(ix) {
    const o = (cfg.filters[ix] && cfg.filters[ix].options) || [];
    const out = o.map((x) => String(x.value).trim()).filter(Boolean);
    return out.length ? out : ['—'];
  }

  function pick(arr, seed) {
    if (!arr.length) return '';
    const u = (typeof seed === 'number' ? seed >>> 0 : 1) >>> 0;
    return arr[(u * 7919 + 104729 + (seed || 1) * 993) % arr.length];
  }

  let branchChoicesFinal = optVals(0).filter((b) => DB_DATA[b]);
  if (!branchChoicesFinal.length) branchChoicesFinal = DB_BR_LIST.slice();

  const branchPool = [];
  for (let zi = 0; zi < branchChoicesFinal.length; zi++) {
    const b = branchChoicesFinal[zi];
    const nEach = DB_SAMPLE_TOTAL / branchChoicesFinal.length;
    for (let z = 0; z < nEach; z++) branchPool.push(b);
  }
  while (branchPool.length < DB_SAMPLE_TOTAL)
    branchPool.push(branchChoicesFinal[branchPool.length % branchChoicesFinal.length]);
  for (let k = branchPool.length - 1; k > 0; k--) {
    const jj = ((k * 7919 + 104729 + k * k * 993) >>> 0) % (k + 1);
    const t = branchPool[k];
    branchPool[k] = branchPool[jj];
    branchPool[jj] = t;
  }

  for (let i = 1; i <= DB_SAMPLE_TOTAL; i++) {
    const seed = i * 31 + ((i ^ 997) >>> 0);
    let branch = branchPool[i - 1];

    let gender = pick(optVals(1), seed ^ 3);
    if (!gender || gender === '—') gender = (i * 7) % 10 < 6 ? 'Male' : 'Female';
    let service = pick(optVals(2), seed ^ 7);
    if (!service || service === '—') service = (i * 11) % 5 < 3 ? 'Mechanical' : 'Bodyshop';
    let frequency = pick(optVals(3), seed ^ 13);
    if (!frequency || frequency === '—') frequency = (i * 13) % 10 < 3 ? '1 Visit' : (i * 13) % 10 < 8 ? '2–3 Visits' : '4+ Visits';
    let age = pick(optVals(4), seed ^ 21);
    if (!age || age === '—') {
      let ageBand = (i * 17) % 12;
      age = ageBand < 2 ? '<25' : ageBand < 6 ? '25–34' : ageBand < 10 ? '35–44' : '45+';
    }
    let ex1 = pick(optVals(5), seed ^ 103);
    let ex2 = pick(optVals(6), seed ^ 107);
    let ex3 = pick(optVals(7), seed ^ 109);

    if (branch === 'Riyadh' && i % 4 === 0) service = 'Bodyshop';
    if (branch === 'Dammam' && i % 5 === 0) frequency = '4+ Visits';

    let q = branch === 'Riyadh' ? 3.7 : branch === 'Jeddah' ? 3.3 : 3.1;
    let c = branch === 'Jeddah' ? 2.8 : 3.2;
    let p = branch === 'Dammam' ? 2.5 : 2.9;
    let s = 1.2 + (i % 4) * 0.15;
    if (frequency === '4+ Visits') q += 0.25;
    if (age === '<25') p -= 0.25;
    if (gender === 'Female') c -= 0.1;
    const sat = Math.max(1, Math.min(5, q * 0.38 + c * 0.27 + p * 0.22 + s * 0.05 + 1.0));
    const risk = sat < 3 ? 'High' : sat < 3.6 ? 'Medium' : 'Low';

    DB_CUSTOMERS.push([
      'C-' + String(i).padStart(3, '0'),
      branch,
      gender,
      service,
      frequency,
      age,
      +q.toFixed(1),
      +c.toFixed(1),
      +p.toFixed(1),
      +s.toFixed(1),
      +sat.toFixed(1),
      risk,
      ex1 || '—',
      ex2 || '—',
      ex3 || '—'
    ]);
  }
}

dbRegenerateCustomers();

function dbDedupeDrivers(arr) {
  const seen = new Set();
  return arr.filter(dr => {
    if (seen.has(dr.name)) return false;
    seen.add(dr.name);
    return true;
  });
}

function dbFilteredCustomers() {
  dbEnsureCustomersBuiltForFilters();
  const vals = dbGetAllFilValues('db');
  return DB_CUSTOMERS.filter((c) => vals.every((v, i) => dbFilMatchesCustomerRow(c, i, v)));
}

/** Benchmark for comparison charts: same demographics as toolbar, branches pooled (ignores Branch filter). */
function dbFilteredCustomersBenchSameDemo() {
  dbEnsureCustomersBuiltForFilters();
  const vals = dbGetAllFilValues('db');
  return DB_CUSTOMERS.filter((c) =>
    vals.every((v, i) => (i === 0 ? true : dbFilMatchesCustomerRow(c, i, v)))
  );
}

let dbCustDistIdSeq = 0;
function dbCustDistNext(prefix) {
  dbCustDistIdSeq++;
  return prefix + dbCustDistIdSeq;
}

function dbPassMetricCount(cust) {
  let k = 0;
  for (let ii = 6; ii <= 10; ii++) if (cust[ii] >= 3) k++;
  return k;
}

function dbMeanStd(vals) {
  const n = vals.length;
  if (!n) return { mean: 0, std: 0 };
  const mean = vals.reduce((a, b) => a + b, 0) / n;
  const v = vals.reduce((a, b) => a + (b - mean) * (b - mean), 0) / n;
  return { mean, std: Math.sqrt(v) };
}

function dbLinspace(a, b, n) {
  if (n < 2) return [a, b];
  const step = (b - a) / (n - 1);
  const out = [];
  for (let i = 0; i < n; i++) out.push(a + step * i);
  return out;
}

function dbBandwidthSilverman(vals) {
  const n = vals.length;
  if (n < 2) return 0.26;
  const { std } = dbMeanStd(vals);
  const sig = std > 1e-6 ? std : 0.22;
  return Math.min(0.5, Math.max(0.1, 1.06 * sig * Math.pow(n, -0.2)));
}

function dbKDEValues(vals, xs, h) {
  const n = vals.length;
  if (!n) return xs.map(() => 0);
  const c = 1 / (n * h * Math.sqrt(2 * Math.PI));
  const out = xs.map(() => 0);
  for (let v of vals) {
    for (let i = 0; i < xs.length; i++) {
      const t = (xs[i] - v) / h;
      out[i] += c * Math.exp(-0.5 * t * t);
    }
  }
  return out;
}

/**
 * Overlapping density areas (kernel-smoothed) — lime cohort vs teal benchmark.
 * @param {{ width?: number, height?: number, meanA?: number, meanB?: number, padTop?: number }} [opts]
 */
function dbSvgDualKDE(valsA, valsB, vmin, vmax, opts) {
  opts = opts || {};
  const W = opts.width || 340;
  const H = opts.height || 140;
  const padL = 38;
  const padR = 12;
  const padB = 30;
  const hasB = valsB && valsB.length > 0;
  const meanAOpt = opts.meanA;
  const meanBOpt = opts.meanB;
  const meanA = meanAOpt !== undefined && meanAOpt !== null ? meanAOpt : valsA.length ? dbMeanStd(valsA).mean : null;
  const meanB =
    meanBOpt !== undefined && meanBOpt !== null ? meanBOpt : hasB && valsB.length ? dbMeanStd(valsB).mean : null;
  const showMeanA = meanA != null && Number.isFinite(meanA);
  const showMeanB = hasB && meanB != null && Number.isFinite(meanB);
  let padT = typeof opts.padTop === 'number' ? opts.padTop : 14;
  if (showMeanA || showMeanB) padT = Math.max(padT, 22);

  const innerW = W - padL - padR;
  const plotH = H - padT - padB;
  const yBase = H - padB;
  const xs = dbLinspace(vmin, vmax, 96);
  const hA = dbBandwidthSilverman(valsA);
  let yA = dbKDEValues(valsA, xs, hA);
  const hB = hasB ? dbBandwidthSilverman(valsB) : hA;
  let yB = hasB ? dbKDEValues(valsB, xs, hB) : null;
  const maxY = hasB ? Math.max(...yA, ...yB, 1e-9) : Math.max(...yA, 1e-9);
  yA = yA.map(y => y / maxY);
  if (hasB) yB = yB.map(y => y / maxY);

  const xToPx = x => padL + ((x - vmin) / (vmax - vmin)) * innerW;

  function fillPath(ys) {
    let d = \`M \${xToPx(xs[0]).toFixed(2)} \${yBase.toFixed(2)}\`;
    for (let i = 0; i < xs.length; i++) {
      const px = xToPx(xs[i]);
      const py = yBase - ys[i] * plotH;
      d += \` L \${px.toFixed(2)} \${py.toFixed(2)}\`;
    }
    d += \` L \${xToPx(xs[xs.length - 1]).toFixed(2)} \${yBase.toFixed(2)} Z\`;
    return d;
  }

  function linePath(ys) {
    let d = '';
    for (let i = 0; i < xs.length; i++) {
      const px = xToPx(xs[i]);
      const py = yBase - ys[i] * plotH;
      d += i === 0 ? \`M \${px.toFixed(2)} \${py.toFixed(2)}\` : \` L \${px.toFixed(2)} \${py.toFixed(2)}\`;
    }
    return d;
  }

  const gidA = dbCustDistNext('dbKDgA');
  const gidB = dbCustDistNext('dbKDgB');
  const x1 = padL;
  const xMid = padL + innerW / 2;
  const xMax = padL + innerW;

  let pathsB = '';
  if (hasB) {
    pathsB = \`
  <path d="\${fillPath(yB)}" fill="url(#\${gidB})" stroke="none"/>
  <path d="\${linePath(yB)}" fill="none" stroke="#2dd4bf" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" opacity="0.92"/>\`;
  }

  const clampM = x => Math.max(vmin, Math.min(vmax, x));
  const yLineTop = padT + 4;
  let meanMarks = '';
  if (showMeanB) {
    const xb = xToPx(clampM(meanB));
    meanMarks += \`<line x1="\${xb.toFixed(2)}" y1="\${yLineTop}" x2="\${xb.toFixed(2)}" y2="\${yBase}" stroke="#2dd4bf" stroke-width="1.5" stroke-dasharray="6 5" opacity="0.9"/>\`;
  }
  if (showMeanA) {
    const xa = xToPx(clampM(meanA));
    meanMarks += \`<line x1="\${xa.toFixed(2)}" y1="\${yLineTop}" x2="\${xa.toFixed(2)}" y2="\${yBase}" stroke="#bbf7d0" stroke-width="1.65" stroke-dasharray="4 4" opacity="0.95"/>\`;
  }

  return \`
<svg viewBox="0 0 \${W} \${H}" class="db-dist-svg" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="\${gidB}" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#0f766e" stop-opacity="0.14"/>
      <stop offset="55%" stop-color="#2dd4bf" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#5eead4" stop-opacity="0.62"/>
    </linearGradient>
    <linearGradient id="\${gidA}" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#065f46" stop-opacity="0.12"/>
      <stop offset="50%" stop-color="#34d399" stop-opacity="0.44"/>
      <stop offset="100%" stop-color="#86efac" stop-opacity="0.65"/>
    </linearGradient>
  </defs>\${pathsB}
  <path d="\${fillPath(yA)}" fill="url(#\${gidA})" stroke="none"/>
  <path d="\${linePath(yA)}" fill="none" stroke="#bbf7d0" stroke-width="2.05" stroke-linecap="round" stroke-linejoin="round" opacity="0.98"/>
  \${meanMarks}
  <line x1="\${x1}" y1="\${yBase}" x2="\${xMax}" y2="\${yBase}" stroke="rgba(255,255,255,0.11)" stroke-width="1"/>
  <text x="\${x1}" y="\${H - 7}" fill="rgba(255,255,255,0.35)" font-size="9.5">\${vmin.toFixed(1)}</text>
  <text x="\${xMid}" y="\${H - 7}" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-size="9.5">\${((vmin + vmax) / 2).toFixed(1)}</text>
  <text x="\${xMax}" y="\${H - 7}" text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="9.5">\${vmax.toFixed(1)}</text>
</svg>\`;
}

function dbRenderCustomerPatterns(fc) {
  const O = dbGetCustomerPatternsOverrides();
  const esc = dbExecHtmlEscape;
  const summaryEl = document.getElementById('dbCustomerPatternsSummary');
  const dashEl = document.getElementById('dbCustomerPatternsDash');
  if (!summaryEl || !dashEl) return;
  const titleEl = document.getElementById('dbCustPatTitle');
  const subEl = document.getElementById('dbCustPatSub');
  if (titleEl) titleEl.innerHTML = \`<span class="en">\${esc(cpS(O, 'titleEn', 'Customer Pattern View'))}</span><span class="ar">\${esc(cpS(O, 'titleAr', 'عرض أنماط العملاء'))}</span>\`;
  if (subEl) subEl.innerHTML = \`<span class="en">\${esc(cpS(O, 'subEn', 'Distribution charts respect Branch and all demographic filters in the toolbar'))}</span><span class="ar">\${esc(cpS(O, 'subAr', 'مخططات التوزيع تلتزم بمرشّح الفرع وكل مرشّحات الديموغرافيا في شريط الأدوات'))}</span>\`;

  const branchSel = dbFilValueByKey('branch', 'All Branches');
  const BR_AR = { Riyadh: 'الرياض', Jeddah: 'جدة', Dammam: 'الدمام' };
  const brEn = branchSel === 'All Branches' ? 'All branches' : branchSel;
  const brAr = branchSel === 'All Branches' ? 'جميع الفروع' : (BR_AR[branchSel] || branchSel);
  const n = fc.length;

  summaryEl.innerHTML =
    \`<strong><span class="en">\${esc(brEn)}</span><span class="ar">\${esc(brAr)}</span></strong> — \` +
    (n
      ? \`<span class="en">\${n} \${esc(cpS(O, 'summaryHasDataEn', 'customer%s in cohort (updates with Branch & filters)').replace('%s', n === 1 ? '' : 's'))}</span><span class="ar">\${n} \${esc(cpS(O, 'summaryHasDataAr', 'عميلًا في المجموعة (يتحدَّث مع الفرع والمرشّحات)'))}</span>\`
      : \`<span class="en">\${esc(cpS(O, 'summaryNoDataEn', 'No customers match Branch and filters · widen selections to populate charts.'))}</span><span class="ar">\${esc(cpS(O, 'summaryNoDataAr', 'لا يوجد عميل مطابق للفرع والمرشّحات · وسّع الاختيار لملء المخططات.'))}</span>\`);

  if (!n) {
    dashEl.innerHTML =
      \`<div class="db-dist-empty"><span class="en">\${esc(cpS(O, 'emptyDashEn', 'No chart data · adjust Branch filter or demographics.'))}</span>\` +
      \`<span class="ar">\${esc(cpS(O, 'emptyDashAr', 'لا بيانات للمخطّط · عدِّل مرشّح الفرع أو الديموغرافيا.'))}</span></div>\`;
    return;
  }

  const fcBench = dbFilteredCustomersBenchSameDemo();
  const legendHtml = \`
    <div class="db-dist-legend">
      <span class="db-dist-legend-it"><span class="db-dist-legend-dot" style="background:linear-gradient(165deg,#86efac,#22c55e)"></span><span class="en">\${esc(cpS(O, 'legendCohortEn', 'Selected cohort (Branch filter)'))}</span><span class="ar">\${esc(cpS(O, 'legendCohortAr', 'مجموعة العرض (الفرع الحالي)'))}</span></span>
      <span class="db-dist-legend-it"><span class="db-dist-legend-dot" style="background:linear-gradient(165deg,#5eead4,#0d9488)"></span><span class="en">\${esc(cpS(O, 'legendBenchEn', 'All branches · same demographics'))}</span><span class="ar">\${esc(cpS(O, 'legendBenchAr', 'جميع الفروع · نفس الديموغرافيا'))}</span></span>
    </div>\`;

  const DIMS = [
    { idx: 6, en: cpS(O, 'dimQualityEn', 'Quality'), ar: cpS(O, 'dimQualityAr', 'الجودة') },
    { idx: 7, en: cpS(O, 'dimCommunicationEn', 'Communication'), ar: cpS(O, 'dimCommunicationAr', 'التواصل') },
    { idx: 8, en: cpS(O, 'dimPriceEn', 'Price'), ar: cpS(O, 'dimPriceAr', 'السعر') },
    { idx: 9, en: cpS(O, 'dimSpeedEn', 'Speed'), ar: cpS(O, 'dimSpeedAr', 'السرعة') },
    { idx: 10, en: cpS(O, 'dimSatisfactionEn', 'Satisfaction'), ar: cpS(O, 'dimSatisfactionAr', 'الرضا') }
  ];

  const scoreCardsHtml = DIMS.map(m => {
    const vals = fc.map(c => c[m.idx]);
    const valsB = fcBench.map(c => c[m.idx]);
    const { mean, std } = dbMeanStd(vals);
    const benchStats = valsB.length ? dbMeanStd(valsB) : null;
    const benchMean = benchStats ? benchStats.mean : null;
    const passFrac = vals.filter(v => v >= 3).length / n;
    const fmtMean = x => (m.idx === 10 ? dbFormatMean5(x, 2) : x.toFixed(2));
    const svg = dbSvgDualKDE(vals, valsB, 1, 5, {
      meanA: mean,
      meanB: benchMean != null ? benchMean : undefined
    });
    const cohortPill = \`<span class="db-dist-avg db-dist-avg--cohort"><span class="db-dist-avg-lbl"><span class="en">\${esc(cpS(O, 'cohortAvgLblEn', 'Cohort average (μ)'))}</span><span class="ar">\${esc(cpS(O, 'cohortAvgLblAr', 'متوسط المجموعة (μ)'))}</span></span><strong>\${fmtMean(mean)}</strong></span>\`;
    const benchPill =
      benchMean != null
        ? \`<span class="db-dist-avg db-dist-avg--bench"><span class="db-dist-avg-lbl"><span class="en">\${esc(cpS(O, 'benchAvgLblEn', 'Benchmark average (μ)'))}</span><span class="ar">\${esc(cpS(O, 'benchAvgLblAr', 'متوسط المرجع (μ)'))}</span></span><strong>\${fmtMean(benchMean)}</strong></span>\`
        : '';
    const avgRowHtml = \`<div class="db-dist-avg-row">\${cohortPill}\${benchPill}</div>\`;
    return \`
      <div class="db-dist-card">
        <div class="db-dist-card-head"><span class="en">\${m.en}</span><span class="ar">\${m.ar}</span></div>
        <div class="db-dist-card-sub"><span class="en">\${esc(cpS(O, 'dimCardSubEn', 'Overlapping bell-shaped densities (Gaussian kernel)'))}</span><span class="ar">\${esc(cpS(O, 'dimCardSubAr', 'منحنيان متداخلان (تنعيم نواة غوسية)'))}</span></div>
        \${svg}
        \${avgRowHtml}
        \${legendHtml}
        <div class="db-dist-meta">
          <span><b>μ</b>&nbsp;\${fmtMean(mean)}</span><span><b>σ</b>&nbsp;\${std.toFixed(2)}</span>
          <span><span class="en"><b>\${esc(cpS(O, 'probLblEn', 'P(≥3)'))}</b> \${(passFrac * 100).toFixed(0)}%</span><span class="ar"><b>\${esc(cpS(O, 'probLblAr', 'احتمال ≥3'))}</b> \${(passFrac * 100).toFixed(0)}٪</span></span>
        </div>
      </div>\`;
  }).join('');

  const passA = fc.map(dbPassMetricCount);
  const passB = fcBench.map(dbPassMetricCount);
  const meanPass =
    passA.length ? passA.reduce((a, k) => a + k, 0) / passA.length : 0;

  const benchMeanPass = passB.length ? dbMeanStd(passB).mean : null;
  const svgPass = dbSvgDualKDE(passA, passB, -0.45, 5.45, {
    width: 720,
    height: 152,
    meanA: meanPass,
    meanB: benchMeanPass != null ? benchMeanPass : undefined
  });
  const avgPassRow =
    benchMeanPass != null
      ? \`<div class="db-dist-avg-row">
          <span class="db-dist-avg db-dist-avg--cohort"><span class="db-dist-avg-lbl"><span class="en">\${esc(cpS(O, 'cohortMeanPassEn', 'Cohort mean passes'))}</span><span class="ar">\${esc(cpS(O, 'cohortMeanPassAr', 'متوسط اجتيازات المجموعة'))}</span></span><strong>\${meanPass.toFixed(2)}</strong></span>
          <span class="db-dist-avg db-dist-avg--bench"><span class="db-dist-avg-lbl"><span class="en">\${esc(cpS(O, 'benchMeanPassEn', 'Benchmark mean passes'))}</span><span class="ar">\${esc(cpS(O, 'benchMeanPassAr', 'متوسط اجتيازات المرجع'))}</span></span><strong>\${benchMeanPass.toFixed(2)}</strong></span>
        </div>\`
      : \`<div class="db-dist-avg-row">
          <span class="db-dist-avg db-dist-avg--cohort"><span class="db-dist-avg-lbl"><span class="en">\${esc(cpS(O, 'cohortMeanPassEn', 'Cohort mean passes'))}</span><span class="ar">\${esc(cpS(O, 'cohortMeanPassAr', 'متوسط اجتيازات المجموعة'))}</span></span><strong>\${meanPass.toFixed(2)}</strong></span>
        </div>\`;
  const passWideHtml = \`
    <div class="db-dist-card db-dist-card-wide">
      <div class="db-dist-card-head"><span class="en">\${esc(cpS(O, 'passCardHeadEn', 'Aggregate passes · kernel density'))}</span><span class="ar">\${esc(cpS(O, 'passCardHeadAr', 'مجموع الاجتيازات · كثافة نواة'))}</span></div>
      <div class="db-dist-card-sub"><span class="en">\${esc(cpS(O, 'passCardSubEn', 'How many CX dimensions reach ≥ 3 per customer — smoothed like the reference overlays'))}</span><span class="ar">\${esc(cpS(O, 'passCardSubAr', 'كم بُعدًا من أبعاد التجربة يحقق ≥3 لكل عميل — بتنعيم شبيه بالطبقات في المرجع'))}</span></div>
      \${svgPass}
      \${avgPassRow}
      \${legendHtml}
      <div class="db-dist-meta">
        <span><span class="en">\${esc(cpS(O, 'passMetaEn', 'Mean passes / customer'))} <b>\${meanPass.toFixed(2)}</b> \${esc(cpS(O, 'passMetaTailEn', '(max 5)'))}</span><span class="ar">\${esc(cpS(O, 'passMetaAr', 'متوسط الاجتيازات للعميل'))} <b>\${meanPass.toFixed(2)}</b> \${esc(cpS(O, 'passMetaTailAr', '(أقصى ٥)'))}</span></span>
      </div>
    </div>\`;

  const riskOrder = [['High', cpS(O, 'riskHighAr', 'عالٍ')], ['Medium', cpS(O, 'riskMediumAr', 'متوسط')], ['Low', cpS(O, 'riskLowAr', 'منخفض')]];
  const riskEnMap = { High: cpS(O, 'riskHighEn', 'High'), Medium: cpS(O, 'riskMediumEn', 'Medium'), Low: cpS(O, 'riskLowEn', 'Low') };
  const riskClr = { High: '#dc2626', Medium: '#ca8a04', Low: '#22c55e' };
  let riskRows = '';
  for (const [lv, lvAr] of riskOrder) {
    const cnt = fc.filter(r => r[11] === lv).length;
    const pct = (cnt / n) * 100;
    riskRows += \`
      <div class="db-dist-risk-row">
        <span class="db-dist-risk-lbl"><span class="en">\${esc(riskEnMap[lv] || lv)}</span><span class="ar">\${esc(lvAr)}</span></span>
        <div class="db-dist-risk-track"><span class="db-dist-risk-fill" style="width:\${pct.toFixed(1)}%;background:\${riskClr[lv]}"></span></div>
        <span style="font-size:11px;color:var(--db-muted);min-width:86px;text-align:end;flex-shrink:0;">\${pct.toFixed(0)}% (\${cnt})</span>
      </div>\`;
  }
  const riskCardHtml = \`
    <div class="db-dist-card">
      <div class="db-dist-card-head"><span class="en">\${esc(cpS(O, 'riskHeadEn', 'Risk tier mix'))}</span><span class="ar">\${esc(cpS(O, 'riskHeadAr', 'مزيج خطر الانقطاع'))}</span></div>
      <div class="db-dist-card-sub"><span class="en">\${esc(cpS(O, 'riskSubEn', 'Modeled churn-risk labels · same cohort as Branch filter'))}</span><span class="ar">\${esc(cpS(O, 'riskSubAr', 'وسوم مخاطرة مركَّبة · نفس مجموعة مرشّح الفرع'))}</span></div>
      \${riskRows}
    </div>\`;

  dashEl.innerHTML = scoreCardsHtml + passWideHtml + riskCardHtml;
}

let dbSimValues = {};

function dbSimSpanId(name) {
  let s = '';
  for (let i = 0; i < name.length; i++) s += '_' + name.charCodeAt(i);
  return 'dbSimV' + s;
}

/** Snap simulation levers to defaults from current cohort driver averages (top 4). */
function dbSimReset() {
  const d = dbGetData();
  d.drivers.slice(0, 4).forEach(dr => {
    dbSimValues[dr.name] = dbSimDefaultV(dr);
  });
  dbRenderSimulation();
}

function dbSimSliderInput(inp) {
  const name = decodeURIComponent(inp.getAttribute('data-driver') || '');
  if (!name) return;
  const raw = inp.valueAsNumber;
  dbSimValues[name] = Number.isFinite(raw) ? Math.min(100, Math.max(0, raw)) : 0;
  const lid = inp.getAttribute('data-lab');
  const labEl = lid ? document.getElementById(lid) : null;
  if (labEl) labEl.textContent = dbSimLeverLabel(dbSimValues[name]);
  dbUpdateSimulation();
}

function dbIsAdminEmbedPreview() {
  try { return new URLSearchParams(location.search).get('adminEmbed') === '1'; }
  catch (_) { return false; }
}

function dbAdminEmbedInitialPanel() {
  if (!dbIsAdminEmbedPreview()) return undefined;
  const allow = ['executive','drivers','segments','demographics','customers','questionnaire','pilot','model'];
  try {
    const p = new URLSearchParams(location.search).get('dbPanel');
    if (p && allow.includes(p)) return p;
  } catch (_) {}
  return 'executive';
}

/* ── Dashboard: Show/Hide ── */
function showDashboard(user) {
  const db = document.getElementById('customerDashboard');
  db.classList.add('open');
  if (dbIsAdminEmbedPreview()) db.classList.add('db-admin-embed-shell');
  document.body.style.overflow = 'hidden';

  // Set user info
  const displayName = user?.first_name
    ? (user.first_name + (user.last_name ? ' ' + user.last_name : ''))
    : (user?.email || 'Client');
  const nameEl = document.getElementById('dbUserName');
  if (nameEl) nameEl.textContent = displayName;
  const avatarEl = document.getElementById('dbAvatar');
  if (avatarEl) avatarEl.textContent = displayName.charAt(0).toUpperCase();

  dbBuildCustomerFilterBar();
  try {
    dbRestoreRoshdFilters(JSON.parse(localStorage.getItem('roshd_filters') || 'null'));
  } catch (_) {}
  dbEnsureCustomersBuiltForFilters();

  // Seed simulation levers from each driver's avg (top 4 only); dbRenderSimulation does the same if missing
  const d = dbGetData();
  d.drivers.slice(0, 4).forEach(dr => {
    if (dbSimValues[dr.name] === undefined) dbSimValues[dr.name] = dbSimDefaultV(dr);
  });

  dbRender();

  // Restore last active panel (default: executive). Legacy Effect panel merged into Drivers.
  const embedPanel = dbAdminEmbedInitialPanel();
  let savedPanel = embedPanel !== undefined
    ? embedPanel
    : (localStorage.getItem('roshd_panel') || 'executive');
  if (savedPanel === 'effect') {
    savedPanel = 'drivers';
    try { localStorage.setItem('roshd_panel', 'drivers'); } catch(_) {}
  }
  if (savedPanel === 'recommendations') {
    savedPanel = 'executive';
    try { localStorage.setItem('roshd_panel', 'executive'); } catch(_) {}
  }
  if (savedPanel === 'simulation') {
    savedPanel = 'drivers';
    try { localStorage.setItem('roshd_panel', 'drivers'); } catch(_) {}
  }
  const savedBtn = document.querySelector(\`.db-nav-item[data-panel="\${savedPanel}"]\`);
  dbShowPanel(savedPanel, savedBtn || document.querySelector('.db-nav-item'));
}

function hideDashboard() {
  document.getElementById('customerDashboard').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Dashboard: Get Data ── */
function dbGetData() {
  const branch = dbFilValueByKey("branch", "All Branches");
  const gender = dbFilValueByKey("gender", "All Genders");
  const service = dbFilValueByKey("service", "All Services");
  const freq = dbFilValueByKey("frequency", "All Frequencies");
  const ageSel = dbFilValueByKey("age", "All Ages");

  let d = JSON.parse(JSON.stringify(DB_DATA[branch] || DB_DATA["All Branches"]));

  if (gender === "Female") {
    d.top = "Communication";
    d.topAr = "التواصل";
    d.drivers = [
      { name: "Communication", nameAr: "التواصل", avg: 2.9, path: 0.59, impact: 0.25, decision: "Invest", decisionAr: "استثمر", cls: "navy" },
      { name: "Quality", nameAr: "الجودة", avg: 3.4, path: 0.46, impact: 0.19, decision: "Optimize", decisionAr: "حسّن", cls: "warning" },
      { name: "Advisor Behavior", nameAr: "سلوك المستشار", avg: 3.5, path: 0.34, impact: 0.13, decision: "Selective", decisionAr: "انتقائي", cls: "info" },
      { name: "Price Fairness", nameAr: "عدالة السعر", avg: 2.8, path: 0.25, impact: 0.08, decision: "Monitor", decisionAr: "راقب", cls: "" },
      { name: "Speed", nameAr: "السرعة", avg: 1.3, path: 0.05, impact: 0.01, decision: "Do not overinvest", decisionAr: "لا تُبالغ في الاستثمار", cls: "danger" }
    ];
    d.invest = ["Female segment: communication is the strongest driver.", "Improve proactive updates and clarity.", "Standardize advisor explanation before and after service."];
    d.investAr = ["شريحة الإناث: التواصل أقوى محرّك للرضا.", "حسّن التحديثات الاستباقية والوضوح.", "وحّد شرح المستشار قبل وبعد الخدمة."];
  }

  if (gender === "Male" && branch === "All Branches") {
    d.top = "Quality";
    d.topAr = "الجودة";
    if (d.drivers[0]) d.drivers[0].impact = 0.29;
    if (d.drivers.length > 1) {
      d.drivers[1] = {
        name: "Price Fairness",
        nameAr: "عدالة السعر",
        avg: 3.0,
        path: 0.38,
        impact: 0.16,
        decision: "Optimize",
        decisionAr: "حسّن",
        cls: "warning"
      };
    }
  }

  if (service === "Bodyshop") {
    d.score = Math.max(1, d.score - 0.2);
    d.explanatory = Math.max(55, d.explanatory - 3);
    if (d.drivers[0]) d.drivers[0].impact = Math.min(0.38, d.drivers[0].impact + 0.03);
  }

  if (freq === "4+ Visits") {
    d.top = "Quality";
    d.topAr = "الجودة";
    d.drivers.unshift({
      name: "Quality",
      nameAr: "الجودة",
      avg: 3.8,
      path: 0.72,
      impact: 0.35,
      decision: "Invest",
      decisionAr: "استثمر",
      cls: "navy"
    });
    d.drivers = dbDedupeDrivers(d.drivers);
    const tail = (d.invest || []).slice(0, 2);
    const tailAr = (d.investAr || d.invest || []).slice(0, 2);
    d.invest = ["High-frequency customers are quality-sensitive; protect retention through first-time-right discipline.", ...tail];
    d.investAr = ["عملاء الزيارات المتكررة أكثر حساسية للجودة؛ حافظ على الاحتفاظ عبر الانضباط في الإصلاح من أول مرة.", ...tailAr];
  }

  if (freq === "1 Visit") {
    d.top = "Communication";
    d.topAr = "التواصل";
    d.drivers.unshift({
      name: "Communication",
      nameAr: "التواصل",
      avg: 2.9,
      path: 0.55,
      impact: 0.24,
      decision: "Invest",
      decisionAr: "استثمر",
      cls: "navy"
    });
    d.drivers = dbDedupeDrivers(d.drivers);
  }

  if (ageSel === "<25") {
    d.top = "Price Fairness";
    d.topAr = "عدالة السعر";
    d.drivers.unshift({
      name: "Price Fairness",
      nameAr: "عدالة السعر",
      avg: 2.6,
      path: 0.57,
      impact: 0.25,
      decision: "Invest",
      decisionAr: "استثمر",
      cls: "navy"
    });
    d.drivers = dbDedupeDrivers(d.drivers);
    const tail = (d.invest || []).slice(0, 2);
    const tailAr = (d.investAr || d.invest || []).slice(0, 2);
    d.invest = ["Younger customers show stronger price sensitivity; improve estimate transparency and value explanation.", ...tail];
    d.investAr = ["العملاء الأصغر سناً أكثر حساسية للسعر؛ حسّن شفافية التقدير وشرح القيمة.", ...tailAr];
  }

  const fc = dbFilteredCustomers();
  if (fc.length) {
    d.score = fc.reduce((acc, row) => acc + row[10], 0) / fc.length;
    let adj = 0;
    if (fc.length < 30) adj = 7;
    else if (fc.length < 60) adj = 3;
    d.explanatory = Math.max(52, Math.min(78, Math.round(d.explanatory - adj)));
  }

  const cxOvr = dbGetCxDriversOverrides();
  const normRows = dbNormalizeCxOverrideRows(cxOvr && cxOvr.driversRows);
  if (normRows && normRows.length) {
    d.drivers = normRows.slice(0, 5).map(r => ({
      name: r.name || r.nameAr || '—',
      nameAr: r.nameAr || r.name || '—',
      avg: r.avg,
      path: r.impact,
      impact: r.impact,
      decision: r.decision || '—',
      decisionAr: r.decisionAr || r.decision || '—',
      cls: r.cls || '',
    }));
    const top = d.drivers[0];
    if (top) {
      d.top = top.name;
      d.topAr = top.nameAr || top.name;
    }
  }

  d.drivers = d.drivers.slice(0, 5);
  d.risk = "Speed";
  d.riskAr = "السرعة";
  return d;
}

/* ── Dashboard: Panel Navigation ── */
function dbShowPanel(id, btn) {
  if (id === 'effect') id = 'drivers';
  if (id === 'recommendations') id = 'executive';
  if (id === 'simulation') id = 'drivers';

  document.querySelectorAll('.db-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('db-panel-' + id);
  if (panel) panel.classList.add('active');

  const dash = document.getElementById('customerDashboard');
  if (dash)
    dash.classList.toggle('db-panel-no-kpi', id === 'pilot' || id === 'demographics');

  document.querySelectorAll('.db-nav-item').forEach(b => b.classList.remove('active'));
  const navBtn = document.querySelector(\`.db-nav-item[data-panel="\${id}"]\`) || btn;
  if (navBtn) navBtn.classList.add('active');

  const titles = {
    executive:       { en:'Executive View',       ar:'العرض التنفيذي' },
    drivers:         { en:'CX Drivers Analysis', ar:'تحليل محركات تجربة العميل' },
    segments:        { en:'Units Performance',    ar:'أداء الوحدات' },
    customers:       { en:'Customer Patterns',    ar:'أنماط العملاء' },
    model:           { en:'Model Quality',        ar:'جودة النموذج' },
    questionnaire:   { en:'Questionnaire Items', ar:'عناصر الاستبيان' },
    pilot:           { en:'Pilot Test Analysis',  ar:'تحليل الاختبار التجريبي' },
    demographics:    { en:'Demographics Engine',  ar:'محرك البيانات الديموغرافية' }
  };
  const info = titles[id] || { en: id, ar: id };
  document.getElementById('dbPageTitle').innerHTML     = \`<span class="en">\${info.en}</span><span class="ar">\${info.ar}</span>\`;
  document.getElementById('dbPageBreadcrumb').innerHTML = \`<span class="en">\${info.en}</span><span class="ar">\${info.ar}</span>\`;
  setLanguage(document.documentElement.getAttribute('data-lang'));

  if (!dbIsAdminEmbedPreview()) {
    try { localStorage.setItem('roshd_panel', id); } catch (_) {}
  }

  if (id === 'segments')   dbRenderSegments();
  closeDashboardSidebar();
}

/** Demographics visuals */
const DB_DEMO_PALETTE_CSS = ['var(--db-chart-1)', 'var(--db-chart-2)', 'var(--db-chart-3)', 'var(--db-chart-4)', 'var(--db-chart-5)'];

function dbDemoSlices(fieldIdx, labelPairs) {
  const fc = dbFilteredCustomers();
  const total = fc.length || 1;
  const slices = labelPairs.map(([value, htmlLabel]) => {
    const n = fc.filter(r => r[fieldIdx] === value).length;
    const p = total ? Math.round((n / total) * 100) : 0;
    const w = total ? (n / total) * 100 : 0;
    return { value, htmlLabel, n, p, w };
  });
  return { total, slices };
}

function dbDemoConicGradient(slices) {
  const sumN = slices.reduce((a, s) => a + s.n, 0) || 1;
  let angle = 0;
  const parts = slices.map((s, i) => {
    const a0 = angle;
    angle += (s.n / sumN) * 360;
    return \`\${DB_DEMO_PALETTE_CSS[i % 5]} \${a0.toFixed(2)}deg \${angle.toFixed(2)}deg\`;
  });
  return \`conic-gradient(\${parts.join(',')})\`;
}

function dbFillDemoDonutStack(containerId, fieldIdx, labelPairs, kickerEn, kickerAr) {
  const box = document.getElementById(containerId);
  if (!box) return;
  const { total, slices } = dbDemoSlices(fieldIdx, labelPairs);
  const donutBg =
    total && slices.some(s => s.n > 0)
      ? dbDemoConicGradient(slices)
      : 'conic-gradient(var(--db-muted) 0deg 360deg)';
  const legend = slices
    .map(
      (s, i) =>
        \`<div class="db-demo-legend-row"><span class="db-demo-legend-sw" style="background:\${DB_DEMO_PALETTE_CSS[i % 5]}"></span>\` +
        \`<span class="db-demo-legend-lbl">\${s.htmlLabel}</span>\` +
        \`<span class="db-demo-legend-pct">\${s.p}%</span></div>\`
    )
    .join('');
  const stack = slices
    .map((s, i) => \`<span style="width:\${s.w}%;background:\${DB_DEMO_PALETTE_CSS[i % 5]}"></span>\`)
    .join('');
  const barRows = slices
    .map(
      s =>
        \`<div class="db-demo-row"><span>\${s.htmlLabel}</span><div class="db-demo-track"><div class="db-demo-fill" style="width:\${s.p}%"></div></div><span>\${s.p}%</span></div>\`
    )
    .join('');
  box.classList.add('db-demo-chart--rich');
  box.innerHTML =
    \`<div class="db-demo-kicker"><span class="en">\${kickerEn}</span><span class="ar">\${kickerAr}</span></div>\` +
    \`<div class="db-demo-donut-shell"><div class="db-demo-donut-wrap" aria-hidden="true"><div class="db-demo-donut" style="background:\${donutBg}"></div></div>\` +
    \`<div class="db-demo-mini-legend">\${legend}</div></div>\` +
    \`<div class="db-demo-stack">\${stack}</div>\` +
    barRows;
}

function dbFillDemoColumnBars(containerId, fieldIdx, labelPairs, kickerEn, kickerAr) {
  const box = document.getElementById(containerId);
  if (!box) return;
  const { slices } = dbDemoSlices(fieldIdx, labelPairs);
  const n = Math.max(slices.length, 1);
  const vbW = Math.round(Math.max(432, Math.min(880, 48 + n * 96)));
  const padL = 14;
  const padR = 14;
  const chartTop = 8;
  const chartH = 82;
  const baseY = chartTop + chartH;
  const vbH = baseY + 12;
  const innerW = vbW - padL - padR;
  const slotW = innerW / n;
  const barW = Math.max(14, Math.min(48, slotW * 0.55));
  const maxP = Math.max(...slices.map(s => s.p), 1);
  let rects = '';
  slices.forEach((s, i) => {
    const hRaw = chartH * (s.p / maxP);
    const h = Math.max(s.p > 0 ? 2 : 0, hRaw);
    const cx = padL + i * slotW + slotW / 2;
    const x = cx - barW / 2;
    const y = baseY - h;
    rects +=
      \`<g><title>\${s.p}%</title><rect x="\${x.toFixed(1)}" y="\${y.toFixed(1)}" width="\${barW.toFixed(
        1
      )}" height="\${h.toFixed(1)}" rx="5" fill="\${DB_DEMO_PALETTE_CSS[i % 5]}" opacity="0.94" /></g>\`;
  });
  const svg =
    \`<svg viewBox="0 0 \${vbW} \${vbH}" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><line x1="\${padL}" y1="\${baseY}" x2="\${vbW - padR}" y2="\${baseY}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>\` +
    rects +
    \`</svg>\`;
  const labels = slices.map((s) => \`<span>\${s.htmlLabel}</span>\`).join('');
  const barRows = slices
    .map(
      s =>
        \`<div class="db-demo-row"><span>\${s.htmlLabel}</span><div class="db-demo-track"><div class="db-demo-fill" style="width:\${s.p}%"></div></div><span>\${s.p}%</span></div>\`
    )
    .join('');
  box.classList.add('db-demo-chart--rich');
  const colsGrow = containerId === 'dbAgeDemoChart' || containerId === 'dbFrequencyDemoChart';
  const colsClass = colsGrow ? 'db-demo-chart-cols db-demo-chart-cols-grow' : 'db-demo-chart-cols';
  box.innerHTML =
    \`<div class="db-demo-kicker"><span class="en">\${kickerEn}</span><span class="ar">\${kickerAr}</span></div>\` +
    \`<div class="\${colsClass}">\` +
    \`<div class="db-demo-svg-wrap">\${svg}</div>\` +
    \`<div class="db-demo-col-grid">\${labels}</div>\` +
      \`</div>\` +
    barRows;
}

const DEMOGRAPHICS_OVERRIDES_KEY = 'roshd_demographics_overrides';

function dbGetDemographicsOverrides() {
  try {
    const raw = localStorage.getItem(DEMOGRAPHICS_OVERRIDES_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

function dqN(O, key, defVal) {
  if (!O || O[key] === undefined || O[key] === null || String(O[key]).trim() === '') return defVal;
  const n = Number(O[key]);
  return Number.isNaN(n) ? defVal : n;
}

function dqS(O, key, defVal) {
  if (!O || O[key] === undefined || O[key] === null) return defVal;
  const s = String(O[key]).trim();
  return s === '' ? defVal : s;
}

function dbFillDemographicsQualityCards(segmentN, sharePct) {
  const O = dbGetDemographicsOverrides();
  const studyN = dqN(O, 'studyN', DB_SAMPLE_TOTAL);
  const sent = dqN(O, 'sent', 1250);
  const recv = dqN(O, 'recv', 412);
  const compl = dqN(O, 'compl', 352);
  const rateR = +(recv / sent * 100).toFixed(2);
  const rateC = +(compl / recv * 100).toFixed(2);
  const rateStudyFromRecv = +(studyN / recv * 100).toFixed(2);

  const nInc = dqN(O, 'excInc', 60);
  const nSpe = dqN(O, 'excSpe', 32);
  const nLow = dqN(O, 'excLow', 20);
  const nExc = nInc + nSpe + nLow;
  const pIncRecv = +(nInc / recv * 100).toFixed(2);
  const pSpeRecv = +(nSpe / recv * 100).toFixed(2);
  const pLowRecv = +(nLow / recv * 100).toFixed(2);
  const pExcRecv = +(nExc / recv * 100).toFixed(2);
  const a1 = (nInc / nExc) * 360;
  const a2 = a1 + (nSpe / nExc) * 360;
  const donutBg = \`conic-gradient(#ef4444 0deg \${a1}deg, #eab308 \${a1}deg \${a2}deg, #a855f7 \${a2}deg 360deg)\`;

  const covGauge = segmentN <= 0 ? 0 : segmentN >= 60 ? 100 : Math.round((segmentN / 60) * 100);
  let msgCls = 'ok';
  let msgHtml =
    '<span class="en">' +
    dbExecHtmlEscape(dqS(O, 'strMsgOkEn', 'Sample size is adequate for reliable analysis.')) +
    '</span>' +
    '<span class="ar">' +
    dbExecHtmlEscape(dqS(O, 'strMsgOkAr', 'حجم العيّنة كافٍ لتحليل موثوق.')) +
    '</span>';
  if (segmentN < 30) {
    msgCls = 'bad';
    msgHtml =
      '<span class="en">' +
      dbExecHtmlEscape(dqS(O, 'strMsgBadEn', 'Segment is small — outputs are directional only.')) +
      '</span>' +
      '<span class="ar">' +
      dbExecHtmlEscape(dqS(O, 'strMsgBadAr', 'شريحة صغيرة — المخرجات توجيهية فقط.')) +
      '</span>';
  } else if (segmentN < 60) {
    msgCls = 'warn';
    msgHtml =
      '<span class="en">' +
      dbExecHtmlEscape(dqS(O, 'strMsgWarnEn', 'Modest segment — prioritize directionally; validate where possible.')) +
      '</span>' +
      '<span class="ar">' +
      dbExecHtmlEscape(dqS(O, 'strMsgWarnAr', 'حجم متوسط — أولْ الاتجاه والتحقق عند الإمكان.')) +
      '</span>';
  }

  const fvTop = 42;
  const fvBot = 172;
  const fvMid = (fvTop + fvBot) / 2;
  const fvSvgH = fvBot + 14;
  const fvRateTxtY = 30;
  const fvRateLnY = 38;

  const cx = [116, 344, 574];
  const wi = [176, 128, 92];
  const poly = [0, 1, 2]
    .map(i => {
      const c = cx[i];
      const w = wi[i];
      const tt = w * 0.42;
      const bb = w * 0.5;
      return \`<polygon fill="url(#dbfGrad\${i})" stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-linejoin="round" points="\${c - tt},\${fvTop} \${c + tt},\${fvTop} \${c + bb},\${fvBot} \${c - bb},\${fvBot}"/>\`;
    })
    .join('');
  const rateTx = [rateR, rateStudyFromRecv]
    .map((r, i) => {
      const m = (cx[i] + cx[i + 1]) / 2;
      return \`<text x="\${m}" y="\${fvRateTxtY}" fill="#e2e8f0" font-size="12" font-weight="800" text-anchor="middle">\${r}%</text><path d="M \${m - 20} \${fvRateLnY} H \${m + 20}" stroke="#64748b" stroke-width="1.5" stroke-linecap="round"/>\`;
    })
    .join('');
  const icons = [
    \`<g transform="translate(\${cx[0]},\${fvMid})" fill="none" stroke="#e2e8f0" stroke-width="2"><rect x="-14" y="-10" width="28" height="20" rx="2"/><polyline points="-5,-4 -5,6 7,0"/></g>\`,
    \`<g transform="translate(\${cx[1]},\${fvMid})" fill="none" stroke="#e2e8f0" stroke-width="2"><path d="M -14 -4 h 28 v 16 a 10 8 0 0 1 -10 8 h -8 a 10 8 0 0 1 -10 -8 z"/><circle cx="-4" cy="6" r="1.5" fill="#e2e8f0" stroke="none"/><circle cx="6" cy="6" r="1.5" fill="#e2e8f0" stroke="none"/></g>\`,
    \`<g transform="translate(\${cx[2]},\${fvMid})" fill="none" stroke="#86efac" stroke-width="2"><path d="M 0 -12 L -12 14 H 12 Z"/><path d="M -1 0 L 3 8 9 -6" stroke-linecap="round" stroke-linejoin="round"/></g>\`
  ].join('');

  const funnel = document.getElementById('dbDemoQualityFunnel');
  if (funnel) {
    funnel.innerHTML =
      \`<svg class="db-demo-funnel-svg" viewBox="0 0 688 \${fvSvgH}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="dbfGrad0" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#1e3a8a"/><stop offset="100%" stop-color="#2563eb"/></linearGradient>
        <linearGradient id="dbfGrad1" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#1d4ed8"/><stop offset="100%" stop-color="#0ea5e9"/></linearGradient>
        <linearGradient id="dbfGrad2" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#166534"/><stop offset="100%" stop-color="#4ade80"/></linearGradient>
      </defs>
      \${poly}
      \${rateTx}
      \${icons}
    </svg>
    <div class="db-demo-funnel-caption-grid">
      <div><span class="en">\${dbExecHtmlEscape(dqS(O, 'funnelC1MainEn', 'Surveys sent'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'funnelC1MainAr', 'المرسلة'))}</span><br/><strong>\${sent.toLocaleString()}</strong><small class="en">\${dbExecHtmlEscape(dqS(O, 'funnelC1SmallEn', 'Invitation wave'))}</small><small class="ar">\${dbExecHtmlEscape(dqS(O, 'funnelC1SmallAr', 'موجة الدعوة'))}</small></div>
      <div><span class="en">\${dbExecHtmlEscape(dqS(O, 'funnelC2MainEn', 'Responses'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'funnelC2MainAr', 'المستجابات'))}</span><br/><strong>\${recv}</strong><small>\${rateR}% <span class="en">\${dbExecHtmlEscape(dqS(O, 'funnelC2VsEn', 'vs sent'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'funnelC2VsAr', 'من المرسل'))}</span></small></div>
      <div><span class="en">\${dbExecHtmlEscape(dqS(O, 'funnelC3MainEn', 'Valid sample (N)'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'funnelC3MainAr', 'عينة صالحة'))}</span><br/><strong>\${studyN}</strong><small>\${rateStudyFromRecv}% <span class="en">\${dbExecHtmlEscape(dqS(O, 'funnelC3VsEn', 'vs responses'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'funnelC3VsAr', 'من المستجابات'))}</span></small></div>
    </div>
    <div class="db-demo-funnel-kpis">
      <div class="db-demo-kpi-mini">
        <div class="lbl"><span class="en">\${dbExecHtmlEscape(dqS(O, 'funnelKpiRespLblEn', 'Response rate'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'funnelKpiRespLblAr', 'معدل الاستجابة'))}</span></div>
        <div class="val">\${rateR}%</div>
        <div class="sub"><span class="en">\${dbExecHtmlEscape(dqS(O, 'funnelKpiRespSubEn', 'Responses / Sent'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'funnelKpiRespSubAr', 'المستجابات / المرسل'))}</span></div>
      </div>
      <div class="db-demo-kpi-mini">
        <div class="lbl"><span class="en">\${dbExecHtmlEscape(dqS(O, 'funnelKpiCompLblEn', 'Completion rate'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'funnelKpiCompLblAr', 'معدل الإتمام'))}</span></div>
        <div class="val">\${rateC}%</div>
        <div class="sub"><span class="en">\${dbExecHtmlEscape(dqS(O, 'funnelKpiCompSubEn', 'Completed / Responses'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'funnelKpiCompSubAr', 'المكتمل / المستجابة'))}</span></div>
      </div>
    </div>\`;
  }

  const exc = document.getElementById('dbDemoQualityExclusions');
  if (exc) {
    exc.innerHTML =
      \`<div class="db-exc-body">
      <div class="db-exc-donut-col">
        <div class="db-exc-donut-wrap" aria-hidden="true">
        <div class="db-exc-donut" style="background:\${donutBg}"></div>
        <div class="db-exc-donut-center">
          <span class="db-exc-center-n">\${nExc}</span>
          <span class="db-exc-center-lbl"><span class="en">\${dbExecHtmlEscape(dqS(O, 'excDonutLblEn', 'Total excluded'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'excDonutLblAr', 'إجمالي المستبعد'))}</span></span>
        </div>
      </div>
      </div>
      <div class="db-exc-rows">
        <div class="db-exc-row">
          <span class="db-exc-row-main"><span class="db-exc-sw" style="background:#ef4444"></span><span class="db-exc-row-copy"><span class="db-exc-row-label"><span class="en">\${dbExecHtmlEscape(dqS(O, 'excR1LblEn', 'Incomplete responses'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'excR1LblAr', 'غير مكتملة'))}</span></span><span class="db-exc-row-kicker"><span class="en">\${dbExecHtmlEscape(dqS(O, 'excR1KickEn', 'Partial submits & drop-offs'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'excR1KickAr', 'مشاركات جزئية وانسحابات'))}</span></span></span></span>
          <span class="db-exc-stat"><span class="db-exc-num">\${nInc}</span><span class="db-exc-pct-line">\${pIncRecv}% <span class="en">\${dbExecHtmlEscape(dqS(O, 'excRowShareEn', 'share'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'excRowShareAr', 'من المستجابات'))}</span></span></span>
        </div>
        <div class="db-exc-row">
          <span class="db-exc-row-main"><span class="db-exc-sw" style="background:#eab308"></span><span class="db-exc-row-copy"><span class="db-exc-row-label"><span class="en">\${dbExecHtmlEscape(dqS(O, 'excR2LblEn', 'Speeders / too fast'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'excR2LblAr', 'سريعون جدًا'))}</span></span><span class="db-exc-row-kicker"><span class="en">\${dbExecHtmlEscape(dqS(O, 'excR2KickEn', 'Below minimum engagement time'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'excR2KickAr', 'وقت تعبئة دون الحدّ الأدنى'))}</span></span></span></span>
          <span class="db-exc-stat"><span class="db-exc-num">\${nSpe}</span><span class="db-exc-pct-line">\${pSpeRecv}% <span class="en">\${dbExecHtmlEscape(dqS(O, 'excRowShareEn', 'share'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'excRowShareAr', 'من المستجابات'))}</span></span></span>
        </div>
        <div class="db-exc-row">
          <span class="db-exc-row-main"><span class="db-exc-sw" style="background:#a855f7"></span><span class="db-exc-row-copy"><span class="db-exc-row-label"><span class="en">\${dbExecHtmlEscape(dqS(O, 'excR3LblEn', 'Low-quality responses'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'excR3LblAr', 'جودة منخفضة'))}</span></span><span class="db-exc-row-kicker"><span class="en">\${dbExecHtmlEscape(dqS(O, 'excR3KickEn', 'Fails attention / consistency checks'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'excR3KickAr', 'رسوب فحوص الانتباه والثبات'))}</span></span></span></span>
          <span class="db-exc-stat"><span class="db-exc-num">\${nLow}</span><span class="db-exc-pct-line">\${pLowRecv}% <span class="en">\${dbExecHtmlEscape(dqS(O, 'excRowShareEn', 'share'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'excRowShareAr', 'من المستجابات'))}</span></span></span>
        </div>
      </div>
    </div>
    <div class="db-exc-foot">
      <span><span class="en">\${dbExecHtmlEscape(dqS(O, 'excFootLblEn', 'Total excluded (vs responses)'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'excFootLblAr', 'المستبعد (مقابل المستجابات)'))}</span></span>
      <span class="db-exc-foot-strong">\${nExc} (\${pExcRecv}%)</span>
    </div>\`;
  }

  const gaugeOff = Math.max(0.5, Math.min(100, 100 - covGauge));
  let msgSvg =
    '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
  if (msgCls === 'warn')
    msgSvg =
      '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
  if (msgCls === 'bad')
    msgSvg =
      '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';

  const capEnHtml =
    O && String(O.strGaugeCapEn || '').trim() !== ''
      ? dbExecHtmlEscape(String(O.strGaugeCapEn).trim())
      : 'Arc = progress to the <b>60-complete</b> stability target (100% when filtered N ≥ 60). Axis is <b>not</b> filtered ÷ total database.';
  const capArHtml =
    O && String(O.strGaugeCapAr || '').trim() !== ''
      ? dbExecHtmlEscape(String(O.strGaugeCapAr).trim())
      : 'القوس = التقدّم نحو هدف استقرار <b>٦٠ مكتملًا</b> (١٠٠٪ عندما يكون N المصفّى ≥ ٦٠). المحور <b>ليس</b> نسبة المصفّى إلى قاعدة البيانات كلها.';
  const twinHintEnHtml =
    O && String(O.strTwinRightHintEn || '').trim() !== ''
      ? dbExecHtmlEscape(String(O.strTwinRightHintEn).trim())
      : \`Matches Branch + demographics now; Coverage &amp; KPIs use this slice · <strong>\${sharePct}%</strong> of valid sample.\`;
  const twinHintArHtml =
    O && String(O.strTwinRightHintAr || '').trim() !== ''
      ? dbExecHtmlEscape(String(O.strTwinRightHintAr).trim())
      : \`يطابق الفرع والديموغرافيا الآن؛ التغطية والمؤشرات على هذه الشريحة · <strong>\${sharePct}%</strong> من العينة الصالحة.\`;

  const str = document.getElementById('dbDemoQualityStrength');
  if (str) {
    str.innerHTML =
      \`      <div class="db-str-body">
      <div class="db-str-gauge">
        <svg class="db-str-gauge-svg" viewBox="0 0 120 78" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M 14 64 A 46 46 0 0 1 106 64" fill="none" stroke="rgba(255,255,255,0.09)" stroke-width="11" stroke-linecap="round"/>
          <path d="M 14 64 A 46 46 0 0 1 106 64" fill="none" stroke="#a855f7" stroke-width="11" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="\${gaugeOff}" />
          <text x="14" y="74" fill="rgba(148,163,184,0.9)" font-size="9">0%</text>
          <text x="106" y="74" fill="rgba(148,163,184,0.9)" font-size="9" text-anchor="end">100%</text>
        </svg>
        <div class="db-str-val">
          <div class="db-str-val-num">\${covGauge}%</div>
          <div class="db-str-val-lbl"><span class="en">\${dbExecHtmlEscape(dqS(O, 'strCovLblEn', 'Coverage'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'strCovLblAr', 'التغطية'))}</span></div>
        </div>
        <p class="db-str-gauge-cap">
          <span class="en">\${capEnHtml}</span>
          <span class="ar">\${capArHtml}</span>
        </p>
      </div>
      <div class="db-str-aside">
        <div>
          <div class="db-str-aside-sub"><span class="en">\${dbExecHtmlEscape(dqS(O, 'strSampleSubEn', 'Sample size'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'strSampleSubAr', 'حجم العيّنة'))}</span></div>
          <div class="db-str-twin">
            <div class="db-str-box">
              <div class="l"><span class="en">\${dbExecHtmlEscape(dqS(O, 'strTwinLeftLblEn', 'Total valid sample (N)'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'strTwinLeftLblAr', 'إجمالي العينة الصالحة (N)'))}</span></div>
              <div class="n">\${studyN}</div>
              <div class="db-str-box-hint"><span class="en">\${dbExecHtmlEscape(dqS(O, 'strTwinLeftHintEn', 'After exclusions; fixed study pool for this dashboard.'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'strTwinLeftHintAr', 'بعد الاستبعاد؛ مرجع ثابت لهذه اللوحة.'))}</span></div>
            </div>
            <div class="db-str-box">
              <div class="l"><span class="en">\${dbExecHtmlEscape(dqS(O, 'strTwinRightLblEn', 'Current filtered (N)'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'strTwinRightLblAr', 'المصفّى الحالي (N)'))}</span></div>
              <div class="n">\${segmentN}</div>
              <div class="db-str-box-hint"><span class="en">\${twinHintEnHtml}</span><span class="ar">\${twinHintArHtml}</span></div>
            </div>
          </div>
            <div class="db-str-legend" role="group" aria-label="Sample strength legend">
            <div class="db-str-leg-row">
              <div class="db-str-leg-k"><span class="en">\${dbExecHtmlEscape(dqS(O, 'strLeg1KeyEn', 'COVERAGE GAUGE'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'strLeg1KeyAr', 'مؤشر التغطية'))}</span></div>
              <div class="db-str-leg-v"><span class="en">\${dbExecHtmlEscape(dqS(O, 'strLeg1ValEn', 'Shows how close your current sample is to the minimum required for reliable insights. It reflects data confidence—not participation rate.'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'strLeg1ValAr', 'يوضح مدى اقتراب حجم العينة الحالية من الحد الأدنى المطلوب للحصول على نتائج موثوقة. يعكس مستوى الثقة في البيانات وليس نسبة المشاركة.'))}</span></div>
            </div>
            <div class="db-str-leg-row">
              <div class="db-str-leg-k"><span class="en">\${dbExecHtmlEscape(dqS(O, 'strLeg2KeyEn', 'TOTAL VALID'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'strLeg2KeyAr', 'إجمالي العينة المعتمدة'))}</span></div>
              <div class="db-str-leg-v"><span class="en">\${dbExecHtmlEscape(dqS(O, 'strLeg2ValEn', 'Full dataset after cleaning. Use as the reference base.'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'strLeg2ValAr', 'يمثل كامل البيانات بعد التنقية، ويُستخدم كمرجع أساسي للمقارنة.'))}</span></div>
            </div>
            <div class="db-str-leg-row">
              <div class="db-str-leg-k"><span class="en">\${dbExecHtmlEscape(dqS(O, 'strLeg3KeyEn', 'FILTERED N'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'strLeg3KeyAr', 'حجم العينة المُرشَّحة (الحالية)'))}</span></div>
              <div class="db-str-leg-v"><span class="en">\${dbExecHtmlEscape(dqS(O, 'strLeg3ValEn', 'Current segment size. Smaller samples may show more fluctuation—focus on overall direction, not small differences.'))}</span><span class="ar">\${dbExecHtmlEscape(dqS(O, 'strLeg3ValAr', 'يمثل حجم الشريحة قيد التحليل. عند صِغر العينة، قد تظهر تقلبات في النتائج، لذا يُفضَّل التركيز على الاتجاه العام بدل الفروقات البسيطة.'))}</span></div>
            </div>
          </div>
        </div>
        <div class="db-str-msg \${msgCls}">
          \${msgSvg}
          \${msgHtml}
        </div>
      </div>
    </div>\`;
  }
}

function dbFinalizeDemographicsShells(O) {
  if (!O) return;
  const pair = (id, kEn, kAr, defEn, defAr) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML =
      \`<span class="en">\${dbExecHtmlEscape(dqS(O, kEn, defEn))}</span>\` +
      \`<span class="ar">\${dbExecHtmlEscape(dqS(O, kAr, defAr))}</span>\`;
  };
  pair('dbDemoHdrFunnel', 'hdrFunnelEn', 'hdrFunnelAr', '1 · Data collection funnel', '١ · قمع جمع البيانات');
  pair('dbDemoHdrExc', 'hdrExcEn', 'hdrExcAr', '2 · Data cleaning (exclusions)', '٢ · التنظيف (الاستبعاد)');
  pair('dbDemoHdrStr', 'hdrStrEn', 'hdrStrAr', '3 · Sample strength', '٣ · قوّة العيّنة');
  const desc = document.getElementById('dbDemoHdrStrDesc');
  if (desc) {
    const dEn =
      O && String(O.hdrStrDescEn || '').trim() !== ''
        ? dbExecHtmlEscape(String(O.hdrStrDescEn).trim())
        : 'Explains how far your <b>current filtered</b> cohort is from a stability benchmark—separate from funnel response rates or % of the full file.';
    const dAr =
      O && String(O.hdrStrDescAr || '').trim() !== ''
        ? dbExecHtmlEscape(String(O.hdrStrDescAr).trim())
        : 'يوضّح مدى قرب <b>المصفّى الحالي</b> من حدّ استقرار مرجعي—منفصل عن معدّلات الاستجابة في القمع أو نسبة الملف الكامل.';
    desc.innerHTML = \`<span class="en">\${dEn}</span><span class="ar">\${dAr}</span>\`;
  }
  pair('dbDemoHdrEngine', 'hdrEngineTitleEn', 'hdrEngineTitleAr', 'Demographics & Sample Engine', 'الديموغرافيا وحجم العيّنة');
  pair('dbDemoSubEngine', 'hdrEngineSubEn', 'hdrEngineSubAr', 'Insight · branches & gender for selected filters', 'خلاصة فورية وفروع وجنس وفق المرشّح');
  pair('dbDemoHdrProfile', 'hdrProfileTitleEn', 'hdrProfileTitleAr', 'Final sample profile (demographics)', 'ملف العينة النهائي (ديموغرافيا)');
  pair('dbDemoSubProfile', 'hdrProfileSubEn', 'hdrProfileSubAr', 'Service lane & visit cadence · this slice', 'الخدمة وإيقاع الزيارات · هذه الشريحة');
  pair('dbDemoHdrAge', 'hdrAgeTitleEn', 'hdrAgeTitleAr', 'Age Categories', 'فئات العمر');
  pair('dbDemoSubAge', 'hdrAgeSubEn', 'hdrAgeSubAr', 'Population spread by age category · full layout width', 'توزيع الأعمار حسب الفئة على كامل العرض لهذه الشريحة');
}

function dbRenderDemographics(d, segmentN, sharePct, freqVal, ageSel) {
  const O = dbGetDemographicsOverrides();
  dbFillDemographicsQualityCards(segmentN, sharePct);

  const demoInsight = document.getElementById('dbDemoInsight');
  const studyTotal = dqN(O, 'studyN', DB_SAMPLE_TOTAL);

  if (demoInsight) {
    const custEn = O && O.insightEn != null ? String(O.insightEn).trim() : '';
    const custAr = O && O.insightAr != null ? String(O.insightAr).trim() : '';
    if (custEn !== '' || custAr !== '') {
      demoInsight.innerHTML =
        \`<span><span class="en">\${dbExecHtmlEscape(custEn || custAr || '—')}</span>\` +
        \`<span class="ar">\${dbExecHtmlEscape(custAr || custEn || '—')}</span></span>\`;
    } else {
      const flagEn =
        segmentN < 30 ? 'LOW N — directional only.' : segmentN < 60 ? 'CAUTION — modest sample.' : 'OK — adequate sample.';
      const flagAr =
        segmentN < 30 ? 'حجم منخفض — نتائج توجيهية.' : segmentN < 60 ? 'انتباه — عينة متوسطة.' : 'مقبول — عينة كافية.';
      const extraFreqEn =
        freqVal === '4+ Visits'
          ? 'High-frequency customers are retention assets — quality failures are costly.'
          : freqVal === '1 Visit'
            ? 'First visits need communication clarity to build trust quickly.'
            : 'Use visit frequency to separate acquisition gaps from retention issues.';
      const extraFreqAr =
        freqVal === '4+ Visits'
          ? 'عملاء الزيارات العالية أصول احتفاظ؛ تعثر الجودة يكلف.'
          : freqVal === '1 Visit'
            ? 'الزيارات الأولى تحتاج وضوح تواصل لبناء الثقة.'
            : 'استخدم تكرار الزيارة لفصل مشاكل الجذب عن الاحتفاظ.';
      const ageEn =
        ageSel === '<25'
          ? 'Younger respondents show higher price sensitivity — prioritize estimate transparency.'
          : 'Review age mix before assuming price-led priorities.';
      const ageAr =
        ageSel === '<25'
          ? 'الأصغر حساسية أعلى للسعر؛ أولِ شفافية التقديرات.'
          : 'راجع مزيج العمر قبل افتراض أولوية السعر.';
      demoInsight.innerHTML =
        \`<span><span class="en"><b>Insight:</b> <b>\${segmentN}</b> of <b>\${studyTotal}</b> responses in this slice (<b>\${sharePct}%</b> of full sample). <b>\${flagEn}</b> Strongest lever: <b>\${d.top}</b>. \${extraFreqEn} \${ageEn}</span>\` +
        \`<span class="ar"><b>ملخص:</b> <b>\${segmentN}</b> من <b>\${studyTotal}</b> ضمن هذه الشريحة (<b>\${sharePct}%</b> من العينة الكاملة). <b>\${flagAr}</b> أقوى رافعة: <b>\${d.topAr || d.top}</b>. \${extraFreqAr} \${ageAr}</span></span>\`;
    }
  }

  dbFillDemoDonutStack(
    'dbBranchDemoChart',
    1,
    [
      ['Riyadh', '<span class="en">Riyadh</span><span class="ar">الرياض</span>'],
      ['Jeddah', '<span class="en">Jeddah</span><span class="ar">جدة</span>'],
      ['Dammam', '<span class="en">Dammam</span><span class="ar">الدمام</span>']
    ],
    dqS(O, 'ckBranchEn', 'Donut · share by branch'),
    dqS(O, 'ckBranchAr', 'دائرة · توزيع الفروع')
  );
  dbFillDemoDonutStack(
    'dbGenderDemoChart',
    2,
    [
      ['Male', '<span class="en">Male</span><span class="ar">ذكر</span>'],
      ['Female', '<span class="en">Female</span><span class="ar">أنثى</span>']
    ],
    dqS(O, 'ckGenderEn', 'Composition · gender mix'),
    dqS(O, 'ckGenderAr', 'التركيب · الجنس')
  );
  dbFillDemoDonutStack(
    'dbServiceDemoChart',
    3,
    [
      ['Mechanical', '<span class="en">Mechanical</span><span class="ar">ميكانيكي</span>'],
      ['Bodyshop', '<span class="en">Bodyshop</span><span class="ar">هيكل السيارة</span>']
    ],
    dqS(O, 'ckServiceEn', 'Split · service lane'),
    dqS(O, 'ckServiceAr', 'انقسام · نوع الخدمة')
  );
  dbFillDemoColumnBars(
    'dbFrequencyDemoChart',
    4,
    [
      ['1 Visit', '<span class="en">1 Visit</span><span class="ar">زيارة واحدة</span>'],
      ['2–3 Visits', '<span class="en">2–3 Visits</span><span class="ar">2–3 زيارات</span>'],
      ['4+ Visits', '<span class="en">4+ Visits</span><span class="ar">4+ زيارات</span>']
    ],
    dqS(O, 'ckFreqEn', 'Bars · visit frequency vs max'),
    dqS(O, 'ckFreqAr', 'أعمدة · تكرار الزيارات')
  );
  dbFillDemoColumnBars(
    'dbAgeDemoChart',
    5,
    [
      ['<25', '<span class="en">&lt;25</span><span class="ar">أقل من 25</span>'],
      ['25–34', '<span class="en">25–34</span><span class="ar">25–34</span>'],
      ['35–44', '<span class="en">35–44</span><span class="ar">35–44</span>'],
      ['45+', '<span class="en">45+</span><span class="ar">45+</span>']
    ],
    dqS(O, 'ckAgeEn', 'Bars · age category spread'),
    dqS(O, 'ckAgeAr', 'أعمدة · فئات العمر')
  );

  dbFinalizeDemographicsShells(O);
}

/* ── Dashboard: Main Render ── */
/** Percent of max 5 for 1–5 scale means (capped 0–100). */
function dbPctOf5(score) {
  const v = Number(score);
  if (Number.isNaN(v)) return 0;
  return Math.min(100, Math.max(0, Math.round((v / 5) * 100)));
}
/** Simulation slider 0–100 → implied mean on 0–5 scale (for labels). */
function dbSimLeverMeanFromV(vRaw) {
  const n = Number(vRaw);
  if (Number.isNaN(n)) return 0;
  return Math.min(5, Math.max(0, (n / 100) * 5));
}
/** Beside slider: "68% (3.4)" (% of scale, then implied /5 mean). */
function dbSimLeverLabel(sliderV) {
  const mean = dbSimLeverMeanFromV(sliderV);
  return \`\${dbPctOf5(mean)}% (\${mean.toFixed(1)})\`;
}
/** Default knob = driver's current avg score as % of 5-point ceiling. */
function dbSimDefaultV(dr) {
  return dbPctOf5(dr.avg);
}
/** e.g. 3.8 → "3.8 (76%)" */
function dbFormatMean5(score, decimals) {
  const d = decimals === undefined ? 1 : decimals;
  const v = Number(score);
  if (Number.isNaN(v)) return String(score);
  return \`\${v.toFixed(d)} (\${dbPctOf5(v)}%)\`;
}
/** Effect impact coefficient (typically 0–1 scale) → e.g. "34%" */
function dbImpactPct(impact, decimals) {
  const v = Number(impact);
  if (Number.isNaN(v)) return '—';
  const pct = v * 100;
  return decimals !== undefined ? \`\${pct.toFixed(decimals)}%\` : \`\${Math.round(pct)}%\`;
}

function dbGetExecutiveOverrides() {
  try {
    const raw = localStorage.getItem('roshd_executive_overrides');
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

function dbExecHtmlEscape(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const CUSTOMER_PATTERNS_OVERRIDES_KEY = 'roshd_customer_patterns_overrides';

function dbGetCustomerPatternsOverrides() {
  try {
    const raw = localStorage.getItem(CUSTOMER_PATTERNS_OVERRIDES_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

function cpS(O, key, defVal) {
  if (!O || O[key] === undefined || O[key] === null) return defVal;
  const s = String(O[key]).trim();
  return s === '' ? defVal : s;
}

const QUESTIONNAIRE_OVERRIDES_KEY = 'roshd_questionnaire_overrides';
let dbQuestionnaireDefaultInnerHtml = null;
const PILOT_ANALYSIS_OVERRIDES_KEY = 'roshd_pilot_analysis_overrides';
let dbPilotAnalysisDefaultInnerHtml = null;
const MODEL_QUALITY_OVERRIDES_KEY = 'roshd_model_quality_overrides';
let dbModelQualityDefaultInnerHtml = null;

function dbGetModelQualityOverrides() {
  try {
    const raw = localStorage.getItem(MODEL_QUALITY_OVERRIDES_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

function dbGetQuestionnaireOverrides() {
  try {
    const raw = localStorage.getItem(QUESTIONNAIRE_OVERRIDES_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

function dbApplyQuestionnaireOverrides() {
  const panel = document.getElementById('db-panel-questionnaire');
  if (!panel) return;
  if (dbQuestionnaireDefaultInnerHtml == null) dbQuestionnaireDefaultInnerHtml = panel.innerHTML;
  const o = dbGetQuestionnaireOverrides();
  const sections = o && Array.isArray(o.sections) ? o.sections : null;
  const pairs = o && o.pairs && typeof o.pairs === 'object' ? o.pairs : null;
  const hasSections = !!(sections && sections.length);
  const hasPairs = !!(pairs && Object.keys(pairs).length);
  if (!hasSections && !hasPairs) {
    if (dbQuestionnaireDefaultInnerHtml != null && panel.innerHTML !== dbQuestionnaireDefaultInnerHtml) {
      panel.innerHTML = dbQuestionnaireDefaultInnerHtml;
    }
    return;
  }
  if (dbQuestionnaireDefaultInnerHtml != null && panel.innerHTML !== dbQuestionnaireDefaultInnerHtml) {
    panel.innerHTML = dbQuestionnaireDefaultInnerHtml;
  }
  if (hasSections) {
    const itemsInner = panel.querySelector('.db-q-items-inner');
    if (itemsInner) {
      const secHtml = sections.map((sec, si) => {
        const qHtml = (Array.isArray(sec.questions) ? sec.questions : []).map(q =>
          \`<li><div class="db-q-tag">\${dbExecHtmlEscape(q.code || '')}</div><div class="db-q-lines-txt"><span class="en">\${dbExecHtmlEscape(q.en || '')}</span><span class="ar">\${dbExecHtmlEscape(q.ar || '')}</span></div></li>\`
        ).join('');
        return \`<section class="db-q-section" aria-labelledby="db-q-sh-o-\${si}">
          <header class="db-q-section-head" id="db-q-sh-o-\${si}"><span class="en">\${dbExecHtmlEscape(sec.topicEn || '')}</span><span class="ar">\${dbExecHtmlEscape(sec.topicAr || '')}</span></header>
          <ol class="db-q-lines">\${qHtml}</ol>
        </section>\`;
      }).join('');
      itemsInner.innerHTML = secHtml;
    }
  } else if (hasPairs) {
    const enSpans = Array.from(panel.querySelectorAll('span.en'));
    const arSpans = Array.from(panel.querySelectorAll('span.ar'));
    const n = Math.min(enSpans.length, arSpans.length);
    for (let i = 0; i < n; i++) {
      const p = pairs[String(i)];
      if (!p) continue;
      if (p.en != null) enSpans[i].textContent = String(p.en);
      if (p.ar != null) arSpans[i].textContent = String(p.ar);
    }
  }
}

function dbExtractQuestionnaireSectionsFromPanel() {
  const panel = document.getElementById('db-panel-questionnaire');
  if (!panel) return [];
  const out = [];
  panel.querySelectorAll('.db-q-items-inner .db-q-section').forEach((sec) => {
    const topicEn = (sec.querySelector('.db-q-section-head .en')?.textContent || '').trim();
    const topicAr = (sec.querySelector('.db-q-section-head .ar')?.textContent || '').trim();
    const qCount = sec.querySelectorAll('.db-q-lines > li').length;
    if (!topicEn && !topicAr) return;
    out.push({
      topicEn: topicEn || topicAr || '—',
      topicAr: topicAr || topicEn || '—',
      qCount: qCount > 0 ? qCount : 1,
    });
  });
  return out;
}

function dbMeasurementColor(idx) {
  const palette = ['#60a5fa', '#34d399', '#eab308', '#a78bfa', '#f97316', '#22d3ee', '#f43f5e', '#84cc16'];
  return palette[idx % palette.length];
}

function dbRenderMeasurementModelFromQuestionnaire() {
  const listEl = document.getElementById('dbMqConstructList');
  const svgWrap = document.getElementById('dbMqSvgWrap');
  const capEl = document.getElementById('dbMqDiagramCaption');
  if (!listEl || !svgWrap || !capEl) return;

  const mqOverrides = dbGetModelQualityOverrides();
  const mqRows = Array.isArray(mqOverrides && mqOverrides.flowBlocks)
    ? mqOverrides.flowBlocks
        .slice(0, 8)
        .map((b) => ({
          topicEn: String((b && b.nameEn) || '').trim(),
          topicAr: String((b && b.nameAr) || '').trim(),
          descEn: String((b && b.descEn) || '').trim(),
          descAr: String((b && b.descAr) || '').trim(),
          qCount: Math.max(1, Number.parseInt(String((b && b.qCount) || 1), 10) || 1),
        }))
        .filter((b) => b.topicEn || b.topicAr)
    : [];

  const allSections = dbExtractQuestionnaireSectionsFromPanel();
  const antecedents = allSections.filter((s) => {
    const t = \`\${s.topicEn} \${s.topicAr}\`.toLowerCase();
    return !(t.includes('customer experience score') || t.includes('درجة تجربة العميل') || t.includes('cx score'));
  });
  const outcome = allSections.find((s) => {
    const t = \`\${s.topicEn} \${s.topicAr}\`.toLowerCase();
    return t.includes('customer experience score') || t.includes('درجة تجربة العميل') || t.includes('cx score');
  });

  const rows = (mqRows.length ? mqRows : antecedents).slice(0, 8);
  if (!rows.length) return;
  const outcomeRow = outcome || { topicEn: 'Customer Experience Score', topicAr: 'درجة تجربة العميل', qCount: 3 };
  const totalItems = rows.reduce((a, b) => a + (Number(b.qCount) || 0), 0) + (Number(outcomeRow.qCount) || 0);

  listEl.innerHTML = rows
    .map((r, i) => {
      const c = dbMeasurementColor(i);
      return \`<li class="db-mq-ant" style="border-color:\${dbExecHtmlEscape(c)}66;background:color-mix(in srgb, \${dbExecHtmlEscape(c)} 12%, transparent)">
        <span class="db-mq-ico" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="\${dbExecHtmlEscape(c)}" stroke-width="1.75"/></svg>
        </span>
        <div class="db-mq-ant-text">
          <strong><span class="en">\${dbExecHtmlEscape(r.topicEn || r.topicAr || '—')}</span><span class="ar">\${dbExecHtmlEscape(r.topicAr || r.topicEn || '—')}</span></strong>
          <small><span class="en">\${dbExecHtmlEscape(r.descEn || 'Block defined in Model Quality editor')}</span><span class="ar">\${dbExecHtmlEscape(r.descAr || 'كتلة معرفة في محرر جودة النموذج')}</span></small>
        </div>
        <span class="db-mq-chip db-mq-chip-lg"><span class="db-mq-qty">\${Math.max(1, Number(r.qCount) || 1)}</span><span class="db-mq-q-note"><span class="en">Qs</span><span class="ar">أسئلة</span></span></span>
      </li>\`;
    })
    .join('') +
    \`<li class="db-mq-ant db-mq-ant--cx">
      <span class="db-mq-ico" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#d4af55" stroke-width="1.75"/><circle cx="12" cy="7" r="4" stroke="#d4af55" stroke-width="1.75"/></svg>
      </span>
      <div class="db-mq-ant-text">
        <strong><span class="en">\${dbExecHtmlEscape(outcomeRow.topicEn)}</span><span class="ar">\${dbExecHtmlEscape(outcomeRow.topicAr)}</span></strong>
        <small><span class="en">Reflective latent · OS block</span><span class="ar">كتلة انعكاسية · OS</span></small>
      </div>
      <span class="db-mq-chip db-mq-chip-lg"><span class="db-mq-qty">\${Math.max(1, Number(outcomeRow.qCount) || 1)}</span><span class="db-mq-q-note"><span class="en">Qs</span><span class="ar">أسئلة</span></span></span>
    </li>\`;

  const n = rows.length;
  const step = 68;
  const topPad = 20;
  const h = Math.max(260, topPad * 2 + (n - 1) * step + 50);
  const rightBoxY = Math.max(24, (h - 130) / 2);
  const rightJoinStart = rightBoxY + 28;
  const rightJoinEnd = rightBoxY + 102;

  const nodes = rows
    .map((r, i) => {
      const y = topPad + i * step;
      const c = dbMeasurementColor(i);
      const txtY = y + 23;
      const subY = y + 40;
      return \`
        <rect x="18" y="\${y}" width="176" height="50" rx="12" stroke="\${c}99" stroke-width="1.5" fill="\${c}17"/>
        <text x="106" y="\${txtY}" text-anchor="middle" fill="rgba(255,255,255,0.92)" font-size="12.5" font-weight="700">\${dbExecHtmlEscape(r.topicEn)}</text>
        <text x="106" y="\${subY}" text-anchor="middle" fill="\${c}" font-size="10.5" font-weight="700">× \${Math.max(1, Number(r.qCount) || 1)} questions</text>
      \`;
    })
    .join('');

  const linkMarkers = rows
    .map((_, i) => {
      const c = dbMeasurementColor(i);
      const marker = \`dbMqDynArr\${i}\`;
      return \`<marker id="\${marker}" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><polygon points="0 0,9 4.5,0 9" fill="\${c}"/></marker>\`;
    })
    .join('');

  const links = rows
    .map((_, i) => {
      const y = topPad + i * step + 25;
      const targetY = rightJoinStart + ((rightJoinEnd - rightJoinStart) * (i + 1)) / (n + 1);
      const c = dbMeasurementColor(i);
      const marker = \`dbMqDynArr\${i}\`;
      return \`<path d="M 194 \${y} L 282 \${y} L 338 \${targetY}" stroke="\${c}" stroke-width="1.8" fill="none" marker-end="url(#\${marker})"/>\`;
    })
    .join('');

  svgWrap.innerHTML = \`<svg class="db-mq-model-svg" viewBox="0 0 548 \${h}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>\${linkMarkers}</defs>
    \${nodes}
    \${links}
    <rect x="338" y="\${rightBoxY}" width="188" height="130" rx="16" stroke="rgba(212,175,85,0.58)" stroke-width="1.6" fill="rgba(184,150,46,0.1)"/>
    <text x="432" y="\${rightBoxY + 52}" text-anchor="middle" fill="rgba(255,255,255,0.95)" font-size="13.5" font-weight="700">\${dbExecHtmlEscape(outcomeRow.topicEn)}</text>
    <text x="432" y="\${rightBoxY + 84}" text-anchor="middle" fill="#e8c65c" font-size="11.5" font-weight="700">\${Math.max(1, Number(outcomeRow.qCount) || 1)} indicators</text>
  </svg>\`;

  capEl.innerHTML = \`<span class="en">Conceptual drivers → \${dbExecHtmlEscape(outcomeRow.topicEn)} (\${totalItems} items across active model blocks).</span>
  <span class="ar">محركات مفاهيمية → \${dbExecHtmlEscape(outcomeRow.topicAr)} (إجمالي \${totalItems} بندًا عبر كتل النموذج النشطة).</span>\`;
}

function dbApplyPilotAnalysisOverrides() {
  const panel = document.getElementById('db-panel-pilot');
  if (!panel) return;
  if (dbPilotAnalysisDefaultInnerHtml == null) dbPilotAnalysisDefaultInnerHtml = panel.innerHTML;
  let pairs = null;
  let values = null;
  try {
    const raw = localStorage.getItem(PILOT_ANALYSIS_OVERRIDES_KEY);
    if (raw) {
      const o = JSON.parse(raw);
      if (o && typeof o === 'object' && o.pairs && typeof o.pairs === 'object') pairs = o.pairs;
      if (o && typeof o === 'object' && o.values && typeof o.values === 'object') values = o.values;
    }
  } catch (_) {}
  const hasPairs = !!(pairs && Object.keys(pairs).length);
  const hasValues = !!(values && Object.keys(values).length);
  if (!hasPairs && !hasValues) {
    if (dbPilotAnalysisDefaultInnerHtml != null && panel.innerHTML !== dbPilotAnalysisDefaultInnerHtml) {
      panel.innerHTML = dbPilotAnalysisDefaultInnerHtml;
    }
    return;
  }
  if (dbPilotAnalysisDefaultInnerHtml != null && panel.innerHTML !== dbPilotAnalysisDefaultInnerHtml) {
    panel.innerHTML = dbPilotAnalysisDefaultInnerHtml;
  }
  if (hasPairs) {
    const enSpans = Array.from(panel.querySelectorAll('span.en'));
    const arSpans = Array.from(panel.querySelectorAll('span.ar'));
    const n = Math.min(enSpans.length, arSpans.length);
    for (let i = 0; i < n; i++) {
      const p = pairs[String(i)];
      if (!p) continue;
      if (p.en != null) enSpans[i].textContent = String(p.en);
      if (p.ar != null) arSpans[i].textContent = String(p.ar);
    }
  }
  if (hasValues) {
    const nodes = Array.from(panel.querySelectorAll('.db-pilot-alpha-val, .db-pilot-flow-svg text'));
    for (let i = 0; i < nodes.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(values, String(i))) continue;
      nodes[i].textContent = String(values[String(i)]);
    }
  }
}

function dbApplyModelQualityOverrides() {
  const panel = document.getElementById('db-panel-model');
  if (!panel) return;
  if (dbModelQualityDefaultInnerHtml == null) dbModelQualityDefaultInnerHtml = panel.innerHTML;
  let pairs = null;
  let values = null;
  const o = dbGetModelQualityOverrides();
  if (o && typeof o === 'object' && o.pairs && typeof o.pairs === 'object') pairs = o.pairs;
  if (o && typeof o === 'object' && o.values && typeof o.values === 'object') values = o.values;
  const hasPairs = !!(pairs && Object.keys(pairs).length);
  const hasValues = !!(values && Object.keys(values).length);
  if (!hasPairs && !hasValues) {
    if (dbModelQualityDefaultInnerHtml != null && panel.innerHTML !== dbModelQualityDefaultInnerHtml) {
      panel.innerHTML = dbModelQualityDefaultInnerHtml;
    }
    return;
  }
  if (dbModelQualityDefaultInnerHtml != null && panel.innerHTML !== dbModelQualityDefaultInnerHtml) {
    panel.innerHTML = dbModelQualityDefaultInnerHtml;
  }
  if (hasPairs) {
    const enSpans = Array.from(panel.querySelectorAll('span.en'));
    const arSpans = Array.from(panel.querySelectorAll('span.ar'));
    const n = Math.min(enSpans.length, arSpans.length);
    for (let i = 0; i < n; i++) {
      const p = pairs[String(i)];
      if (!p) continue;
      if (p.en != null) enSpans[i].textContent = String(p.en);
      if (p.ar != null) arSpans[i].textContent = String(p.ar);
    }
  }
  if (hasValues) {
    const nodes = Array.from(panel.querySelectorAll('.db-model-metric-val'));
    for (let i = 0; i < nodes.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(values, String(i))) continue;
      nodes[i].textContent = String(values[String(i)]);
    }
  }
}

const CX_DRIVERS_OVERRIDES_KEY = 'roshd_cx_drivers_overrides';

function dbGetCxDriversOverrides() {
  try {
    const raw = localStorage.getItem(CX_DRIVERS_OVERRIDES_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

function dbNormalizeCxOverrideRows(rows) {
  if (!Array.isArray(rows) || !rows.length) return null;
  const norm = rows
    .map((row, i) => {
      const impact = Number(row && row.impact);
      let avg = Number(row && row.avg);
      if (!Number.isFinite(avg)) {
        const m = String((row && row.avgScore) || '').match(/-?\\d+(\\.\\d+)?/);
        avg = m ? Number(m[0]) : NaN;
      }
      return {
        rank: Number.isFinite(Number(row && row.rank)) ? Number(row.rank) : i + 1,
        name: String((row && row.nameEn) || (row && row.name) || '').trim(),
        nameAr: String((row && row.nameAr) || (row && row.nameEn) || (row && row.name) || '').trim(),
        impact: Number.isFinite(impact) ? Math.max(0, impact) : 0,
        avg: Number.isFinite(avg) ? Math.min(5, Math.max(0, avg)) : 3,
        decision: String((row && row.decisionEn) || '').trim(),
        decisionAr: String((row && row.decisionAr) || (row && row.decisionEn) || '').trim(),
        cls: String((row && row.cls) || '').trim(),
      };
    })
    .filter(r => r.name || r.nameAr);
  norm.sort((a, b) => a.rank - b.rank);
  return norm.length ? norm : null;
}

function dbCxBadgeClass(cls) {
  const c = String(cls || '').toLowerCase();
  if (c === 'navy') return 'db-badge-navy';
  if (c === 'danger') return 'db-badge-danger';
  if (c === 'warning') return 'db-badge-warning';
  return 'db-badge-gold';
}

/** After live sim math — optional fixed copy for expected / baseline / advice. */
function dbApplyCxDriversSimulationPatch() {
  const o = dbGetCxDriversOverrides();
  if (!o) return;
  const esc = dbExecHtmlEscape;
  const leadEl = document.getElementById('dbSimExpectedLeadSpan');
  const parEl = document.getElementById('dbSimExpectedParenSpan');
  if (o.simExpectedLead != null && String(o.simExpectedLead).trim() !== '') {
    if (leadEl) leadEl.textContent = o.simExpectedLead;
    if (parEl) parEl.textContent = o.simExpectedParen != null && String(o.simExpectedParen).trim() !== '' ? o.simExpectedParen : '';
  }
  const baseEl = document.getElementById('dbSimBaseline');
  if (baseEl && o.simBaseline != null && String(o.simBaseline).trim() !== '') baseEl.textContent = o.simBaseline;
  const advEl = document.getElementById('dbSimAdvice');
  if (
    advEl &&
    ((o.simAdviceEn != null && String(o.simAdviceEn).trim() !== '') ||
      (o.simAdviceAr != null && String(o.simAdviceAr).trim() !== ''))
  ) {
    const en = String(o.simAdviceEn || '').trim();
    const ar = String(o.simAdviceAr || '').trim() || en;
    advEl.innerHTML = \`<span class="en">\${esc(en).replace(/\\n/g, '<br/>')}</span><span class="ar">\${esc(ar).replace(/\\n/g, '<br/>')}</span>\`;
  }
  const sfx = document.getElementById('dbCxBaselineSuffix');
  if (sfx && o.baselineSuffix != null && o.baselineSuffix !== '') sfx.textContent = o.baselineSuffix;
}

function dbApplyCxDriversSliderLabels() {
  // Slider labels now always derive from live top drivers (single source).
}

function dbApplyCxDriversDisplayOverrides() {
  const o = dbGetCxDriversOverrides();
  if (!o) return;
  const esc = dbExecHtmlEscape;

  function setPair(enId, arId, enVal, arVal) {
    const enEl = document.getElementById(enId);
    const arEl = document.getElementById(arId);
    if (enEl && enVal != null && String(enVal).trim() !== '') enEl.textContent = enVal;
    if (arEl && arVal != null && String(arVal).trim() !== '') arEl.textContent = arVal;
  }

  setPair('dbCxMapTitleEn', 'dbCxMapTitleAr', o.mapTitleEn, o.mapTitleAr);
  setPair('dbCxMapSubEn', 'dbCxMapSubAr', o.mapSubEn, o.mapSubAr);
  setPair('dbCxRankTitleEn', 'dbCxRankTitleAr', o.rankTitleEn, o.rankTitleAr);
  setPair('dbCxRankSubEn', 'dbCxRankSubAr', o.rankSubEn, o.rankSubAr);
  setPair('dbCxThRankEn', 'dbCxThRankAr', o.thRankEn, o.thRankAr);
  setPair('dbCxThDriverEn', 'dbCxThDriverAr', o.thDriverEn, o.thDriverAr);
  setPair('dbCxThEffectEn', 'dbCxThEffectAr', o.thEffectEn, o.thEffectAr);
  setPair('dbCxThAvgEn', 'dbCxThAvgAr', o.thAvgEn, o.thAvgAr);
  setPair('dbCxThDecisionEn', 'dbCxThDecisionAr', o.thDecisionEn, o.thDecisionAr);
  setPair('dbCxSimTitleEn', 'dbCxSimTitleAr', o.simTitleEn, o.simTitleAr);
  setPair('dbCxSimSubEn', 'dbCxSimSubAr', o.simSubEn, o.simSubAr);
  setPair('dbCxSimResetEn', 'dbCxSimResetAr', o.simResetEn, o.simResetAr);
  setPair('dbCxSimLblExpectedEn', 'dbCxSimLblExpectedAr', o.simLblExpectedEn, o.simLblExpectedAr);
  setPair('dbCxBaselineLblEn', 'dbCxBaselineLblAr', o.baselineLblEn, o.baselineLblAr);

  if (o.interpretEn != null && String(o.interpretEn).trim() !== '') {
    const el = document.getElementById('dbCxInterpretEn');
    if (el) el.innerHTML = \`<b>Interpretation:</b> \${esc(o.interpretEn).replace(/\\n/g, '<br/>')}\`;
  }
  if (o.interpretAr != null && String(o.interpretAr).trim() !== '') {
    const el = document.getElementById('dbCxInterpretAr');
    if (el) el.innerHTML = \`<b>التفسير:</b> \${esc(o.interpretAr).replace(/\\n/g, '<br/>')}\`;
  }

  // Driver rows now act as single source via dbGetData(); ranking/bubbles/simulation refresh from same model.

  dbApplyCxDriversSliderLabels();
}

function dbApplyExecutiveDisplayOverrides() {
  const o = dbGetExecutiveOverrides();
  if (!o) return;

  const elTrend = document.getElementById('kpiTrend1');
  if (elTrend && o.kpiTrend1 != null && o.kpiTrend1 !== '') elTrend.textContent = o.kpiTrend1;

  const elScore = document.getElementById('kpiScore');
  if (elScore && o.kpiScore != null && o.kpiScore !== '') elScore.textContent = o.kpiScore;

  const elR2 = document.getElementById('kpiStripR2');
  if (elR2 && o.kpiStripR2 != null && o.kpiStripR2 !== '') elR2.textContent = o.kpiStripR2;

  const elTop = document.getElementById('kpiTopDriver');
  if (elTop && (o.kpiTopDriverEn != null || o.kpiTopDriverAr != null)) {
    const en = o.kpiTopDriverEn != null && o.kpiTopDriverEn !== '' ? o.kpiTopDriverEn : '—';
    const ar = o.kpiTopDriverAr != null && o.kpiTopDriverAr !== '' ? o.kpiTopDriverAr : en;
    elTop.innerHTML = \`<span class="en">\${dbExecHtmlEscape(en)}</span><span class="ar">\${dbExecHtmlEscape(ar)}</span>\`;
  }

  const elRisk = document.getElementById('kpiRisk');
  if (elRisk && (o.kpiRiskEn != null || o.kpiRiskAr != null)) {
    const en = o.kpiRiskEn != null && o.kpiRiskEn !== '' ? o.kpiRiskEn : '—';
    const ar = o.kpiRiskAr != null && o.kpiRiskAr !== '' ? o.kpiRiskAr : en;
    elRisk.innerHTML = \`<span class="en">\${dbExecHtmlEscape(en)}</span><span class="ar">\${dbExecHtmlEscape(ar)}</span>\`;
  }

  const elN = document.getElementById('kpiSampleN');
  if (elN && o.kpiSampleN != null && o.kpiSampleN !== '') elN.textContent = String(o.kpiSampleN);

  const elShare = document.getElementById('kpiSampleShare');
  if (elShare && (o.kpiSampleShareEn != null || o.kpiSampleShareAr != null)) {
    const en = o.kpiSampleShareEn != null && o.kpiSampleShareEn !== '' ? o.kpiSampleShareEn : '';
    const ar = o.kpiSampleShareAr != null && o.kpiSampleShareAr !== '' ? o.kpiSampleShareAr : en;
    elShare.innerHTML = \`<span class="en">\${dbExecHtmlEscape(en)}</span><span class="ar">\${dbExecHtmlEscape(ar)}</span>\`;
  }

  const execGrid = document.getElementById('dbExecGrid');
  if (execGrid && Array.isArray(o.investEn)) {
    const isAr = document.documentElement.getAttribute('data-lang') === 'ar';
    const pick = (enArr, arArr) => {
      const a = isAr && Array.isArray(arArr) && arArr.length ? arArr : enArr;
      return (a || []).map((x) => \`<li>\${dbExecHtmlEscape(x)}</li>\`).join('');
    };
    execGrid.innerHTML = \`
    <div class="db-exec-card db-exec-invest">
      <div class="db-exec-card-title"><span class="en">Invest Now</span><span class="ar">استثمر الآن</span></div>
      <ul>\${pick(o.investEn, o.investAr)}</ul>
    </div>
    <div class="db-exec-card db-exec-optimize">
      <div class="db-exec-card-title"><span class="en">Optimize Selectively</span><span class="ar">حسّن بانتقائية</span></div>
      <ul>\${pick(o.optimizeEn || [], o.optimizeAr)}</ul>
    </div>
    <div class="db-exec-card db-exec-avoid">
      <div class="db-exec-card-title"><span class="en">Avoid / Defer</span><span class="ar">تجنّب / أجّل</span></div>
      <ul>\${pick(o.avoidEn || [], o.avoidAr)}</ul>
    </div>\`;
  }

  const branchPerf = document.getElementById('dbBranchPerfBars');
  if (branchPerf && Array.isArray(o.branchBars) && o.branchBars.length) {
    branchPerf.innerHTML = o.branchBars
      .map((row) => {
        const w = Math.min(100, Math.max(0, Number(row.widthPct) || 0));
        const en = row.labelEn != null ? String(row.labelEn) : '';
        const ar = row.labelAr != null && row.labelAr !== '' ? String(row.labelAr) : en;
        const val = row.scoreLabel != null ? String(row.scoreLabel) : '';
        return \`<div class="db-bar-row">
        <span class="db-bar-label"><span class="en">\${dbExecHtmlEscape(en)}</span><span class="ar">\${dbExecHtmlEscape(ar)}</span></span>
        <div class="db-bar-track"><div class="db-bar-fill" style="width:\${w}%"></div></div>
        <span class="db-bar-val">\${dbExecHtmlEscape(val)}</span>
      </div>\`;
      })
      .join('');
  }

  const flowHost = document.getElementById('dbDecisionFlowSteps');
  if (flowHost && Array.isArray(o.flowSteps) && o.flowSteps.length === 5) {
    const tile = (st, isLast) => {
      const bg = isLast ? 'var(--navy)' : 'rgba(255,255,255,0.04)';
      const border = isLast ? '1px solid var(--db-border)' : '1px solid var(--db-border-subtle)';
      const subColor = isLast ? 'rgba(255,255,255,0.4)' : 'var(--db-muted)';
      return \`<div style="flex:1;min-width:100px;background:\${bg};border:\${border};border-radius:8px;padding:14px;text-align:center">
        <div style="font-weight:700;color:var(--gold-light);margin-bottom:4px;font-size:13px"><span class="en">\${dbExecHtmlEscape(st.titleEn || '')}</span><span class="ar">\${dbExecHtmlEscape(st.titleAr || st.titleEn || '')}</span></div>
        <div style="font-size:11px;color:\${subColor}"><span class="en">\${dbExecHtmlEscape(st.bodyEn || '')}</span><span class="ar">\${dbExecHtmlEscape(st.bodyAr || st.bodyEn || '')}</span></div>
      </div>\`;
    };
    flowHost.innerHTML = o.flowSteps.map((st, i) => tile(st, i === 4)).join('');
  }

  const core = document.getElementById('dbExecCoreRule');
  if (core && (o.coreRuleEn != null || o.coreRuleAr != null)) {
    const en = o.coreRuleEn != null && o.coreRuleEn !== '' ? o.coreRuleEn : '';
    const ar = o.coreRuleAr != null && o.coreRuleAr !== '' ? o.coreRuleAr : en;
    core.innerHTML = \`<span class="en"><b>Core rule:</b> \${dbExecHtmlEscape(en)}</span><span class="ar"><b>القاعدة الأساسية:</b> \${dbExecHtmlEscape(ar)}</span>\`;
  }

  const warnEl = document.getElementById('dbSegmentWarning');
  if (warnEl && o.segmentWarningMode) {
    if (o.segmentWarningMode === 'hide') {
      warnEl.style.display = 'none';
    } else if (o.segmentWarningMode === 'custom' && ((o.segmentWarningEn && o.segmentWarningEn.trim()) || (o.segmentWarningAr && o.segmentWarningAr.trim()))) {
      warnEl.style.display = '';
      const en = (o.segmentWarningEn || '').trim();
      const ar = (o.segmentWarningAr || '').trim() || en;
      warnEl.innerHTML = \`<span><span class="en">\${dbExecHtmlEscape(en)}</span><span class="ar">\${dbExecHtmlEscape(ar)}</span></span>\`;
    }
  }
}

const UNITS_PERF_OVERRIDES_KEY = 'roshd_units_performance_overrides';

function dbGetUnitsPerformanceOverrides() {
  try {
    const raw = localStorage.getItem(UNITS_PERF_OVERRIDES_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

/** Admin-saved Units Performance copy (localStorage). Applied after live \`dbRenderSegments\`. */
function dbApplyUnitsPerformanceDisplayOverrides() {
  const o = dbGetUnitsPerformanceOverrides();
  if (!o) return;
  const esc = dbExecHtmlEscape;
  const titleEl = document.getElementById('dbSegDetailTitle');
  if (!titleEl) return;

  if (
    (o.segTitleEn != null && String(o.segTitleEn).trim() !== '') ||
    (o.segTitleAr != null && String(o.segTitleAr).trim() !== '')
  ) {
    const en =
      o.segTitleEn != null && String(o.segTitleEn).trim() !== ''
        ? String(o.segTitleEn).trim()
        : '—';
    const ar =
      o.segTitleAr != null && String(o.segTitleAr).trim() !== ''
        ? String(o.segTitleAr).trim()
        : en;
    titleEl.innerHTML = \`<span class="en">\${esc(en)}</span><span class="ar">\${esc(ar)}</span>\`;
  }

}

function dbRender() {
  dbPersistRoshdFilters();

  const fc = dbFilteredCustomers();
  const segmentN = fc.length;
  const sharePct = segmentN ? Math.round((segmentN / DB_SAMPLE_TOTAL) * 100) : 0;
  const d = dbGetData();
  const isAr = document.documentElement.getAttribute('data-lang') === 'ar';
  const freqVal = dbFilValueByKey('frequency', 'All Frequencies');
  const ageSel = dbFilValueByKey('age', 'All Ages');

  const kScore = document.getElementById('kpiScore');
  if (kScore) {
    const sv = Number(d.score);
    kScore.textContent = Number.isNaN(sv)
      ? String(d.score)
      : \`\${dbPctOf5(sv)}% (\${sv.toFixed(1)})\`;
  }
  const mq = document.getElementById('mqR2');
  if (mq) mq.textContent = d.explanatory + '%';
  const stripR2 = document.getElementById('kpiStripR2');
  if (stripR2) stripR2.textContent = d.explanatory + '%';

  const sortedKpi = [...(d.drivers || [])].sort((a, b) => b.impact - a.impact);
  const kpiTopDrv = document.getElementById('kpiTopDriver');
  if (kpiTopDrv) {
    kpiTopDrv.innerHTML = sortedKpi[0]
      ? \`<span class="en">\${sortedKpi[0].name}</span><span class="ar">\${sortedKpi[0].nameAr || sortedKpi[0].name}</span>\`
      : '<span class="en">—</span><span class="ar">—</span>';
  }
  const kpiRiskEl = document.getElementById('kpiRisk');
  if (kpiRiskEl)
    kpiRiskEl.innerHTML =
      \`<span class="en">\${d.risk}</span><span class="ar">\${d.riskAr || d.risk}</span>\`;

  const sampleNEl = document.getElementById('kpiSampleN');
  const sampleShareEl = document.getElementById('kpiSampleShare');
  if (sampleNEl) sampleNEl.textContent = String(segmentN);
  if (sampleShareEl) {
    sampleShareEl.innerHTML =
      \`<span class="en">\${sharePct}% of full sample (\${DB_SAMPLE_TOTAL})</span><span class="ar">\${sharePct}% من العينة الكاملة (\${DB_SAMPLE_TOTAL})</span>\`;
  }


  const warnEl = document.getElementById('dbSegmentWarning');
  if (warnEl) {
    if (segmentN < 30) {
      warnEl.innerHTML =
        \`<span><span class="en"><b>Warning:</b> Segment N is below 30. Treat outputs as directional, not proof.</span><span class="ar"><b>تنبيه:</b> حجم الشريحة أقل من 30. اعتبر المخرجات توجيهية وليست دليلًا نهائيًا.</span></span>\`;
      warnEl.style.display = '';
    } else if (segmentN < 60) {
      warnEl.innerHTML =
        \`<span><span class="en"><b>Caution:</b> Segment N is modest — use for prioritization, not definitive proof.</span><span class="ar"><b>تحفّظ:</b> حجم الشريحة متوسط — للأولوية وليس الإثبات النهائي.</span></span>\`;
      warnEl.style.display = '';
    } else {
      warnEl.innerHTML =
        \`<span><span class="en"><b>Sample check:</b> Segment size supports dashboard-level interpretation.</span><span class="ar"><b>مراجعة العينة:</b> الحجم ملائم لتفسير على مستوى اللوحة.</span></span>\`;
      warnEl.style.display = '';
    }
  }

  const branchPerf = document.getElementById('dbBranchPerfBars');
  if (branchPerf) {
    branchPerf.innerHTML = DB_BR_LIST.map(b => {
      const bd = DB_DATA[b];
      const w = Math.min(100, Math.round(((bd.score || 3) / 5) * 100));
      return \`<div class="db-bar-row">
        <span class="db-bar-label"><span class="en">\${b}</span><span class="ar">\${b === 'Riyadh' ? 'الرياض' : b === 'Jeddah' ? 'جدة' : 'الدمام'}</span></span>
        <div class="db-bar-track"><div class="db-bar-fill" style="width:\${w}%"></div></div>
        <span class="db-bar-val">\${dbFormatMean5(bd.score, 1)}</span>
      </div>\`;
    }).join('');
  }

  const execHTML = \`
    <div class="db-exec-card db-exec-invest">
      <div class="db-exec-card-title"><span class="en">Invest Now</span><span class="ar">استثمر الآن</span></div>
      <ul>\${(isAr ? d.investAr||d.invest : d.invest).map(x=>\`<li>\${x}</li>\`).join('')}</ul>
    </div>
    <div class="db-exec-card db-exec-optimize">
      <div class="db-exec-card-title"><span class="en">Optimize Selectively</span><span class="ar">حسّن بانتقائية</span></div>
      <ul>\${(isAr ? d.optimizeAr||d.optimize : d.optimize).map(x=>\`<li>\${x}</li>\`).join('')}</ul>
    </div>
    <div class="db-exec-card db-exec-avoid">
      <div class="db-exec-card-title"><span class="en">Avoid / Defer</span><span class="ar">تجنّب / أجّل</span></div>
      <ul>\${(isAr ? d.avoidAr||d.avoid : d.avoid).map(x=>\`<li>\${x}</li>\`).join('')}</ul>
    </div>\`;
  const execGrid = document.getElementById('dbExecGrid');
  if (execGrid) execGrid.innerHTML = execHTML;

  // Drivers table (full ranking)
  const driversTbody = document.getElementById('dbDriversTable');
  if (driversTbody) {
    driversTbody.innerHTML = d.drivers.map((dr, i) => {
      const dName = isAr ? (dr.nameAr||dr.name) : dr.name;
      const dDec  = isAr ? (dr.decisionAr||dr.decision) : dr.decision;
      const badgeCls = dr.cls === 'navy' ? 'db-badge-navy' : dr.cls === 'danger' ? 'db-badge-danger' : dr.cls === 'warning' ? 'db-badge-warning' : 'db-badge-gold';
      return \`<tr>
        <td><b>#\${i+1}</b></td>
        <td><b>\${dName}</b></td>
        <td><b>\${dbImpactPct(dr.impact)}</b></td>
        <td>\${dbFormatMean5(dr.avg, 1)}</td>
        <td><span class="db-badge \${badgeCls}">\${dDec}</span></td>
      </tr>\`;
    }).join('');
  }

  // Driver bubble map (grid layout — sorted by impact, sizes clamped)
  const bub = document.getElementById('dbBubbleContainer');
  if (bub) {
    const sorted = [...d.drivers].sort((a, b) => b.impact - a.impact);
    bub.innerHTML = sorted.map(dr => {
      const size = Math.min(118, Math.max(76, 56 + dr.impact * 220));
      const low = dr.name === 'Speed' ? ' low' : '';
      const lab = isAr ? (dr.nameAr || dr.name) : dr.name;
      const impLab = isAr ? 'الأثر' : 'Impact';
      return \`<div class="db-bubble\${low}" style="width:\${size}px;height:\${size}px" role="img" aria-label="\${lab} \${impLab} \${dbImpactPct(dr.impact)}">
        <span class="db-bubble-name">\${lab}</span>
        <span class="db-bubble-imp">\${impLab} \${dbImpactPct(dr.impact)}</span>
      </div>\`;
    }).join('');
  }

  dbRenderCustomerPatterns(fc);

  dbRenderDemographics(d, segmentN, sharePct, freqVal, ageSel);

  dbRenderSimulation();

  // Segments if visible
  const segPan = document.getElementById('db-panel-segments');
  if (segPan && segPan.classList.contains('active')) dbRenderSegments();

  dbApplyCxDriversDisplayOverrides();
  dbApplyExecutiveDisplayOverrides();
  dbApplyQuestionnaireOverrides();
  dbApplyPilotAnalysisOverrides();
  dbApplyModelQualityOverrides();
  dbRenderMeasurementModelFromQuestionnaire();
}

/* ── Simulation ── */
function dbRenderSimulation() {
  const d = dbGetData();
  const container = document.getElementById('dbSimSliders');
  if (!container) return;
  const top4 = d.drivers.slice(0, 4);
  if (top4.length && top4.every(dr => dbSimValues[dr.name] === 10))
    top4.forEach(dr => {
      dbSimValues[dr.name] = dbSimDefaultV(dr);
    });
  top4.forEach(dr => {
    if (dbSimValues[dr.name] === undefined) dbSimValues[dr.name] = dbSimDefaultV(dr);
  });
  const isAr = document.documentElement.getAttribute('data-lang') === 'ar';
  container.innerHTML = d.drivers.slice(0, 4).map(dr => {
    const spId = dbSimSpanId(dr.name);
    const dName = isAr ? (dr.nameAr||dr.name) : dr.name;
    const encName = encodeURIComponent(dr.name);
    const v = dbSimValues[dr.name];
    return \`<div class="db-slider-wrap">
      <div class="db-slider-header">
        <span class="db-slider-name">\${dName} \${t('Improvement','تحسين')}</span>
        <span class="db-slider-val" id="\${spId}">\${dbSimLeverLabel(v)}</span>
      </div>
      <input type="range" class="db-range" data-driver="\${encName}" data-lab="\${spId}" min="0" max="100" step="1" value="\${v}"
        oninput="dbSimSliderInput(this)">
      <div class="db-sim-range-ticks"><span>0</span><span>50</span><span>100</span></div>
    </div>\`;
  }).join('');
  dbUpdateSimulation();
}

function dbUpdateSimulation() {
  const d = dbGetData();
  let lift = 0;
  const liftScale = 20;
  d.drivers.slice(0, 4).forEach(dr => {
    const mult = dr.name === 'Speed' ? 0.08 : 0.11;
    const v = dbSimValues[dr.name] !== undefined ? dbSimValues[dr.name] : dbSimDefaultV(dr);
    const v0 = dbSimDefaultV(dr);
    lift += ((v - v0) / 100) * liftScale * dr.impact * mult;
  });
  const expected = Math.min(5, Math.max(1, d.score + lift));
  const expEl = document.getElementById('dbSimExpected');
  if (expEl)
    expEl.innerHTML = \`<span class="db-sim-expected-lead" id="dbSimExpectedLeadSpan">\${dbPctOf5(expected)}%</span> <span class="db-sim-expected-br" id="dbSimExpectedParenSpan">(\${expected.toFixed(1)})</span>\`;
  const baseEl = document.getElementById('dbSimBaseline');
  if (baseEl) baseEl.textContent = dbFormatMean5(d.score, 2);
  const advEl = document.getElementById('dbSimAdvice');
  if (advEl) advEl.innerHTML = \`<span class="en">Strongest lever: <b>\${d.top}</b>. Speed remains low-impact unless its effect size changes.</span><span class="ar">الرافعة الأقوى: <b>\${d.topAr||d.top}</b>. السرعة تظل ضعيفة الأثر ما لم يتغيّر حجم تأثيرها.</span>\`;
  dbApplyCxDriversSimulationPatch();
}

/* ── Segments ── */
function dbRenderSegments() {
  const titleEl = document.getElementById('dbSegDetailTitle');
  const subEl   = document.getElementById('dbSegDetailSub');
  const bodyEl  = document.getElementById('dbSegDetailBody');
  if (!titleEl || !subEl || !bodyEl) return;

  const d = dbGetData();
  const isAr = document.documentElement.getAttribute('data-lang') === 'ar';
  const branchVal = dbFilValueByKey('branch', 'All Branches');
  const labels = {
    'All Branches': ['All Branches', 'جميع الفروع'],
    'Riyadh': ['Riyadh', 'الرياض'],
    'Jeddah': ['Jeddah', 'جدة'],
    'Dammam': ['Dammam', 'الدمام']
  };
  const lbl = labels[branchVal] || [branchVal, branchVal];

  titleEl.innerHTML = \`<span class="en">\${lbl[0]} — Units Performance</span><span class="ar">\${lbl[1]} — أداء الوحدات</span>\`;
  subEl.innerHTML   = \`\${d.explanatory}% · <span class="en">Top driver:</span><span class="ar">المحرك الأول:</span> <span class="en">\${d.top}</span><span class="ar">\${d.topAr||d.top}</span> · \${dbFormatMean5(d.score, 1)}\`;

  bodyEl.innerHTML = \`
    <div class="db-bar-list" style="margin-bottom:20px">
      \${d.drivers.map(dr => \`
        <div class="db-bar-row">
          <span class="db-bar-label"><span class="en">\${dr.name}</span><span class="ar">\${dr.nameAr||dr.name}</span></span>
          <div class="db-bar-track"><div class="db-bar-fill" style="width:\${Math.min(100,dr.impact/.35*100)}%"></div></div>
          <span class="db-bar-val">\${dbImpactPct(dr.impact)}</span>
        </div>\`).join('')}
    </div>
    <div class="db-exec-grid">
      <div class="db-exec-card db-exec-invest">
        <div class="db-exec-card-title"><span class="en">Invest Now</span><span class="ar">استثمر الآن</span></div>
        <ul>\${(isAr ? d.investAr||d.invest : d.invest).map(x=>\`<li>\${x}</li>\`).join('')}</ul>
      </div>
      <div class="db-exec-card db-exec-optimize">
        <div class="db-exec-card-title"><span class="en">Optimize</span><span class="ar">حسّن</span></div>
        <ul>\${(isAr ? d.optimizeAr||d.optimize : d.optimize).map(x=>\`<li>\${x}</li>\`).join('')}</ul>
      </div>
      <div class="db-exec-card db-exec-avoid">
        <div class="db-exec-card-title"><span class="en">Avoid</span><span class="ar">تجنّب</span></div>
        <ul>\${(isAr ? d.avoidAr||d.avoid : d.avoid).map(x=>\`<li>\${x}</li>\`).join('')}</ul>
      </div>
    </div>\`;

  dbApplyUnitsPerformanceDisplayOverrides();
}

/* ── Dashboard Logout ── */
function handleDashboardLogout() {
  try {
    localStorage.removeItem('roshd_access_token');
    localStorage.removeItem('roshd_refresh_token');
    localStorage.removeItem('roshd_user');
    localStorage.removeItem('roshd_panel');
    localStorage.removeItem('roshd_filters');
    localStorage.removeItem('roshd_scroll');
  } catch(_) {}
  hideDashboard();
  showToast(t('You have been logged out.', 'تم تسجيل خروجك.'));
}

/* ── Dashboard Sidebar mobile ── */
function toggleDashboardSidebar() {
  const sidebar  = document.getElementById('dbSidebar');
  const overlay  = document.getElementById('dbSidebarOverlay');
  const isOpen   = sidebar.classList.contains('open');
  sidebar.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
}
function closeDashboardSidebar() {
  document.getElementById('dbSidebar').classList.remove('open');
  document.getElementById('dbSidebarOverlay').classList.remove('open');
}

/* ── Check for stored session on load ── */
(function checkStoredSession() {
  try {
    if (dbIsAdminEmbedPreview()) {
      const qs = new URLSearchParams(location.search);
      const lng = qs.get('lang');
      if (lng === 'en' || lng === 'ar') setLanguage(lng);
      showDashboard({
        first_name: 'Admin',
        last_name: 'Preview',
        email: 'admin.preview@roshd.local',
      });
      return;
    }

    const token = localStorage.getItem('roshd_access_token');
    const user  = JSON.parse(localStorage.getItem('roshd_user') || 'null');
    if (token && user) {
      // ── Immediately restore the dashboard — no waiting for server ──
      showDashboard(user);

      // ── Background verify: only log out on explicit 401/403 ──
      fetch(API_BASE + '/api/auth/me', { headers: { 'Authorization': 'Bearer ' + token } })
        .then(r => {
          if (r.status === 401 || r.status === 403) {
            // Token definitively rejected — clear session and exit dashboard
            try {
              localStorage.removeItem('roshd_access_token');
              localStorage.removeItem('roshd_refresh_token');
              localStorage.removeItem('roshd_user');
            } catch(_) {}
            hideDashboard();
            showToast(t('Session expired. Please log in again.', 'انتهت الجلسة. يرجى تسجيل الدخول مجدداً.'));
            return null;
          }
          return r.json();
        })
        .then(d => {
          if (d && d.success && d.user) {
            // Refresh stored user data with latest from server
            try { localStorage.setItem('roshd_user', JSON.stringify(d.user)); } catch(_) {}
            const displayName = d.user.first_name
              ? (d.user.first_name + (d.user.last_name ? ' ' + d.user.last_name : ''))
              : (d.user.email || 'Client');
            const nameEl   = document.getElementById('dbUserName');
            const avatarEl = document.getElementById('dbAvatar');
            if (nameEl)   nameEl.textContent   = displayName;
            if (avatarEl) avatarEl.textContent  = displayName.charAt(0).toUpperCase();
          }
        })
        .catch(() => {
          // Server offline / unreachable — keep dashboard open, do nothing
        });
    } else {
      // No stored session — restore main-page scroll position
      try {
        const savedScroll = localStorage.getItem('roshd_scroll');
        if (savedScroll) {
          requestAnimationFrame(() => {
            window.scrollTo({ top: parseInt(savedScroll, 10), behavior: 'instant' });
          });
        }
      } catch(_) {}
    }
  } catch(_) {}
})();

/* ── Mini-tab interaction on hero preview ── */
document.querySelectorAll('.mini-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.mini-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

/* ── Main page scroll position persistence ── */
let _scrollSaveTimer;
window.addEventListener('scroll', () => {
  const db = document.getElementById('customerDashboard');
  if (db && !db.classList.contains('open')) {
    clearTimeout(_scrollSaveTimer);
    _scrollSaveTimer = setTimeout(() => {
      try { localStorage.setItem('roshd_scroll', Math.round(window.scrollY)); } catch(_) {}
    }, 150);
  }
}, { passive: true });

/* ── Live refresh when admin saves overrides (same origin, other tab / BroadcastChannel) ── */
(function setupRoshdOverrideSync() {
  function refreshDashboardIfOpen() {
    try {
      const dash = document.getElementById('customerDashboard');
      if (!dash || !dash.classList.contains('open')) return;
      if (typeof dbRender === 'function') dbRender();
    } catch (_) {}
  }
  try {
    const ch = new BroadcastChannel('roshd_dashboard_sync');
    ch.onmessage = (ev) => {
      const t = ev.data && ev.data.type;
      if (t === 'filter-bar-config-updated') {
        dbSyncFilterBarAfterExternalConfigChange();
        return;
      }
      if (
        t === 'cx-drivers-overrides-updated' ||
        t === 'executive-overrides-updated' ||
        t === 'units-performance-overrides-updated' ||
        t === 'demographics-overrides-updated' ||
        t === 'customer-patterns-overrides-updated' ||
        t === 'questionnaire-overrides-updated' ||
        t === 'pilot-analysis-overrides-updated' ||
        t === 'model-quality-overrides-updated'
      )
        refreshDashboardIfOpen();
    };
  } catch (_) {}
  window.addEventListener('storage', (e) => {
    if (
      e.key === 'roshd_cx_drivers_overrides' ||
      e.key === 'roshd_executive_overrides' ||
      e.key === 'roshd_units_performance_overrides' ||
      e.key === 'roshd_demographics_overrides' ||
      e.key === 'roshd_customer_patterns_overrides' ||
      e.key === 'roshd_questionnaire_overrides' ||
      e.key === 'roshd_pilot_analysis_overrides' ||
      e.key === 'roshd_model_quality_overrides'
    )
      refreshDashboardIfOpen();
    if (e.key === FILTER_BAR_STORAGE_KEY) dbSyncFilterBarAfterExternalConfigChange();
    if (e.key === 'roshd_filters') {
      try {
        const dash = document.getElementById('customerDashboard');
        if (!dash || !dash.classList.contains('open')) return;
        dbRestoreRoshdFilters(JSON.parse(e.newValue || 'null'));
        dbRender();
      } catch (_) {}
    }
  });
})();
<\/script>
</body>
</html>`,Lu="roshd-customer-dashboard-html",Tu="roshd-request-customer-dashboard-html";function Iu(){useRef(null);const n=Rt.useCallback(e=>{if(!(!e||typeof jr!="string"||!jr.length))try{e.postMessage({type:Lu,html:jr},"*")}catch{}},[]);return Rt.useEffect(()=>{function e(t){!t.data||t.data.type!==Tu||n(t.source)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[n]),Ra.jsx("main",{className:"admin-shell",children:Ra.jsx("iframe",{title:"ROSHD Admin Control Center",className:"admin-legacy-frame",srcDoc:Bu,onLoad:e=>n(e.currentTarget.contentWindow)})})}ec(document.getElementById("root")).render(Ra.jsx(xc.StrictMode,{children:Ra.jsx(Iu,{})}));
