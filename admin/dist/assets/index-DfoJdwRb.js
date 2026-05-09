(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function tc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ql={exports:{}},Zr={},Vl={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qt=Symbol.for("react.element"),rc=Symbol.for("react.portal"),ic=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),lc=Symbol.for("react.provider"),sc=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),uc=Symbol.for("react.memo"),pc=Symbol.for("react.lazy"),La=Symbol.iterator;function mc(e){return e===null||typeof e!="object"?null:(e=La&&e[La]||e["@@iterator"],typeof e=="function"?e:null)}var Hl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jl=Object.assign,Ql={};function rt(e,n,t){this.props=e,this.context=n,this.refs=Ql,this.updater=t||Hl}rt.prototype.isReactComponent={};rt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};rt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kl(){}Kl.prototype=rt.prototype;function Bo(e,n,t){this.props=e,this.context=n,this.refs=Ql,this.updater=t||Hl}var $o=Bo.prototype=new Kl;$o.constructor=Bo;jl($o,rt.prototype);$o.isPureReactComponent=!0;var Na=Array.isArray,Wl=Object.prototype.hasOwnProperty,Fo={current:null},Gl={key:!0,ref:!0,__self:!0,__source:!0};function Xl(e,n,t){var r,i={},o=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(o=""+n.key),n)Wl.call(n,r)&&!Gl.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Qt,type:e,key:o,ref:a,props:i,_owner:Fo.current}}function fc(e,n){return{$$typeof:Qt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function zo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qt}function vc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ma=/\/+/g;function yi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?vc(""+e.key):n.toString(36)}function gr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Qt:case rc:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+yi(a,0):r,Na(i)?(t="",e!=null&&(t=e.replace(Ma,"$&/")+"/"),gr(i,n,t,"",function(c){return c})):i!=null&&(zo(i)&&(i=fc(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ma,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",Na(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+yi(o,l);a+=gr(o,n,t,s,i)}else if(s=mc(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+yi(o,l++),a+=gr(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Zt(e,n,t){if(e==null)return e;var r=[],i=0;return gr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function gc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},hr={transition:null},hc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:hr,ReactCurrentOwner:Fo};function Yl(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Zt,forEach:function(e,n,t){Zt(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Zt(e,function(){n++}),n},toArray:function(e){return Zt(e,function(n){return n})||[]},only:function(e){if(!zo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=rt;D.Fragment=ic;D.Profiler=ac;D.PureComponent=Bo;D.StrictMode=oc;D.Suspense=cc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hc;D.act=Yl;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jl({},e.props),i=e.key,o=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,a=Fo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)Wl.call(n,s)&&!Gl.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Qt,type:e.type,key:i,ref:o,props:r,_owner:a}};D.createContext=function(e){return e={$$typeof:sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lc,_context:e},e.Consumer=e};D.createElement=Xl;D.createFactory=function(e){var n=Xl.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:dc,render:e}};D.isValidElement=zo;D.lazy=function(e){return{$$typeof:pc,_payload:{_status:-1,_result:e},_init:gc}};D.memo=function(e,n){return{$$typeof:uc,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=hr.transition;hr.transition={};try{e()}finally{hr.transition=n}};D.unstable_act=Yl;D.useCallback=function(e,n){return ae.current.useCallback(e,n)};D.useContext=function(e){return ae.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};D.useEffect=function(e,n){return ae.current.useEffect(e,n)};D.useId=function(){return ae.current.useId()};D.useImperativeHandle=function(e,n,t){return ae.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return ae.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return ae.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return ae.current.useMemo(e,n)};D.useReducer=function(e,n,t){return ae.current.useReducer(e,n,t)};D.useRef=function(e){return ae.current.useRef(e)};D.useState=function(e){return ae.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return ae.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return ae.current.useTransition()};D.version="18.3.1";Vl.exports=D;var Uo=Vl.exports;const yc=tc(Uo);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc=Uo,Ec=Symbol.for("react.element"),xc=Symbol.for("react.fragment"),Sc=Object.prototype.hasOwnProperty,wc=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ac={key:!0,ref:!0,__self:!0,__source:!0};function Jl(e,n,t){var r,i={},o=null,a=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Sc.call(n,r)&&!Ac.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Ec,type:e,key:o,ref:a,props:i,_owner:wc.current}}Zr.Fragment=xc;Zr.jsx=Jl;Zr.jsxs=Jl;ql.exports=Zr;var Cr=ql.exports,Zl={exports:{}},he={},es={exports:{}},ns={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(w,R){var C=w.length;w.push(R);e:for(;0<C;){var V=C-1>>>1,W=w[V];if(0<i(W,R))w[V]=R,w[C]=W,C=V;else break e}}function t(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var R=w[0],C=w.pop();if(C!==R){w[0]=C;e:for(var V=0,W=w.length,Yt=W>>>1;V<Yt;){var vn=2*(V+1)-1,hi=w[vn],gn=vn+1,Jt=w[gn];if(0>i(hi,C))gn<W&&0>i(Jt,hi)?(w[V]=Jt,w[gn]=C,V=gn):(w[V]=hi,w[vn]=C,V=vn);else if(gn<W&&0>i(Jt,C))w[V]=Jt,w[gn]=C,V=gn;else break e}}return R}function i(w,R){var C=w.sortIndex-R.sortIndex;return C!==0?C:w.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],v=1,f=null,m=3,y=!1,b=!1,E=!1,O=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(w){for(var R=t(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=w)r(c),R.sortIndex=R.expirationTime,n(s,R);else break;R=t(c)}}function g(w){if(E=!1,p(w),!b)if(t(s)!==null)b=!0,vi(S);else{var R=t(c);R!==null&&gi(g,R.startTime-w)}}function S(w,R){b=!1,E&&(E=!1,u(_),_=-1),y=!0;var C=m;try{for(p(R),f=t(s);f!==null&&(!(f.expirationTime>R)||w&&!ke());){var V=f.callback;if(typeof V=="function"){f.callback=null,m=f.priorityLevel;var W=V(f.expirationTime<=R);R=e.unstable_now(),typeof W=="function"?f.callback=W:f===t(s)&&r(s),p(R)}else r(s);f=t(s)}if(f!==null)var Yt=!0;else{var vn=t(c);vn!==null&&gi(g,vn.startTime-R),Yt=!1}return Yt}finally{f=null,m=C,y=!1}}var A=!1,k=null,_=-1,q=5,T=-1;function ke(){return!(e.unstable_now()-T<q)}function at(){if(k!==null){var w=e.unstable_now();T=w;var R=!0;try{R=k(!0,w)}finally{R?lt():(A=!1,k=null)}}else A=!1}var lt;if(typeof d=="function")lt=function(){d(at)};else if(typeof MessageChannel<"u"){var Ia=new MessageChannel,nc=Ia.port2;Ia.port1.onmessage=at,lt=function(){nc.postMessage(null)}}else lt=function(){O(at,0)};function vi(w){k=w,A||(A=!0,lt())}function gi(w,R){_=O(function(){w(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(w){w.callback=null},e.unstable_continueExecution=function(){b||y||(b=!0,vi(S))},e.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<w?Math.floor(1e3/w):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(w){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var C=m;m=R;try{return w()}finally{m=C}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(w,R){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var C=m;m=w;try{return R()}finally{m=C}},e.unstable_scheduleCallback=function(w,R,C){var V=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?V+C:V):C=V,w){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=C+W,w={id:v++,callback:R,priorityLevel:w,startTime:C,expirationTime:W,sortIndex:-1},C>V?(w.sortIndex=C,n(c,w),t(s)===null&&w===t(c)&&(E?(u(_),_=-1):E=!0,gi(g,C-V))):(w.sortIndex=W,n(s,w),b||y||(b=!0,vi(S))),w},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(w){var R=m;return function(){var C=m;m=R;try{return w.apply(this,arguments)}finally{m=C}}}})(ns);es.exports=ns;var kc=es.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=Uo,ge=kc;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ts=new Set,Dt={};function Dn(e,n){Xn(e,n),Xn(e+"Capture",n)}function Xn(e,n){for(Dt[e]=n,e=0;e<n.length;e++)ts.add(n[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hi=Object.prototype.hasOwnProperty,Rc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa={},Ba={};function Cc(e){return Hi.call(Ba,e)?!0:Hi.call(Oa,e)?!1:Rc.test(e)?Ba[e]=!0:(Oa[e]=!0,!1)}function Dc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tc(e,n,t,r){if(n===null||typeof n>"u"||Dc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function le(e,n,t,r,i,o,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=a}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Z[e]=new le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Z[n]=new le(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Z[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Z[e]=new le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Z[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Z[e]=new le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Z[e]=new le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Z[e]=new le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Z[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var qo=/[\-:]([a-z])/g;function Vo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(qo,Vo);Z[n]=new le(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(qo,Vo);Z[n]=new le(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(qo,Vo);Z[n]=new le(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Z[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)});Z.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Z[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ho(e,n,t,r){var i=Z.hasOwnProperty(n)?Z[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Tc(n,t,i,r)&&(t=null),r||i===null?Cc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ke=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,er=Symbol.for("react.element"),In=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),jo=Symbol.for("react.strict_mode"),ji=Symbol.for("react.profiler"),rs=Symbol.for("react.provider"),is=Symbol.for("react.context"),Qo=Symbol.for("react.forward_ref"),Qi=Symbol.for("react.suspense"),Ki=Symbol.for("react.suspense_list"),Ko=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),os=Symbol.for("react.offscreen"),$a=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=$a&&e[$a]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,bi;function gt(e){if(bi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);bi=n&&n[1]||""}return`
`+bi+e}var Ei=!1;function xi(e,n){if(!e||Ei)return"";Ei=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ei=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?gt(e):""}function Pc(e){switch(e.tag){case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return gt("Suspense");case 19:return gt("SuspenseList");case 0:case 2:case 15:return e=xi(e.type,!1),e;case 11:return e=xi(e.type.render,!1),e;case 1:return e=xi(e.type,!0),e;default:return""}}function Wi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case In:return"Portal";case ji:return"Profiler";case jo:return"StrictMode";case Qi:return"Suspense";case Ki:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case is:return(e.displayName||"Context")+".Consumer";case rs:return(e._context.displayName||"Context")+".Provider";case Qo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ko:return n=e.displayName||null,n!==null?n:Wi(e.type)||"Memo";case Ge:n=e._payload,e=e._init;try{return Wi(e(n))}catch{}}return null}function Ic(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wi(n);case 8:return n===jo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function as(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Lc(e){var n=as(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function nr(e){e._valueTracker||(e._valueTracker=Lc(e))}function ls(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=as(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gi(e,n){var t=n.checked;return z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Fa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=cn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ss(e,n){n=n.checked,n!=null&&Ho(e,"checked",n,!1)}function Xi(e,n){ss(e,n);var t=cn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Yi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Yi(e,n.type,cn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function za(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Yi(e,n,t){(n!=="number"||Dr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ht=Array.isArray;function Hn(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+cn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ji(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(h(91));return z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ua(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(h(92));if(ht(t)){if(1<t.length)throw Error(h(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:cn(t)}}function ds(e,n){var t=cn(n.value),r=cn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function qa(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function cs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?cs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var tr,us=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(tr=tr||document.createElement("div"),tr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Tt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Et={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nc=["Webkit","ms","Moz","O"];Object.keys(Et).forEach(function(e){Nc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Et[n]=Et[e]})});function ps(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Et.hasOwnProperty(e)&&Et[e]?(""+n).trim():n+"px"}function ms(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=ps(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Mc=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eo(e,n){if(n){if(Mc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(h(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(h(61))}if(n.style!=null&&typeof n.style!="object")throw Error(h(62))}}function no(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var to=null;function Wo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ro=null,jn=null,Qn=null;function Va(e){if(e=Gt(e)){if(typeof ro!="function")throw Error(h(280));var n=e.stateNode;n&&(n=ii(n),ro(e.stateNode,e.type,n))}}function fs(e){jn?Qn?Qn.push(e):Qn=[e]:jn=e}function vs(){if(jn){var e=jn,n=Qn;if(Qn=jn=null,Va(e),n)for(e=0;e<n.length;e++)Va(n[e])}}function gs(e,n){return e(n)}function hs(){}var Si=!1;function ys(e,n,t){if(Si)return e(n,t);Si=!0;try{return gs(e,n,t)}finally{Si=!1,(jn!==null||Qn!==null)&&(hs(),vs())}}function Pt(e,n){var t=e.stateNode;if(t===null)return null;var r=ii(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(h(231,n,typeof t));return t}var io=!1;if(Ve)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){io=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{io=!1}function Oc(e,n,t,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(v){this.onError(v)}}var xt=!1,Tr=null,Pr=!1,oo=null,Bc={onError:function(e){xt=!0,Tr=e}};function $c(e,n,t,r,i,o,a,l,s){xt=!1,Tr=null,Oc.apply(Bc,arguments)}function Fc(e,n,t,r,i,o,a,l,s){if($c.apply(this,arguments),xt){if(xt){var c=Tr;xt=!1,Tr=null}else throw Error(h(198));Pr||(Pr=!0,oo=c)}}function Tn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function bs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ha(e){if(Tn(e)!==e)throw Error(h(188))}function zc(e){var n=e.alternate;if(!n){if(n=Tn(e),n===null)throw Error(h(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Ha(i),e;if(o===r)return Ha(i),n;o=o.sibling}throw Error(h(188))}if(t.return!==r.return)t=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a)throw Error(h(189))}}if(t.alternate!==r)throw Error(h(190))}if(t.tag!==3)throw Error(h(188));return t.stateNode.current===t?e:n}function Es(e){return e=zc(e),e!==null?xs(e):null}function xs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=xs(e);if(n!==null)return n;e=e.sibling}return null}var Ss=ge.unstable_scheduleCallback,ja=ge.unstable_cancelCallback,Uc=ge.unstable_shouldYield,qc=ge.unstable_requestPaint,H=ge.unstable_now,Vc=ge.unstable_getCurrentPriorityLevel,Go=ge.unstable_ImmediatePriority,ws=ge.unstable_UserBlockingPriority,Ir=ge.unstable_NormalPriority,Hc=ge.unstable_LowPriority,As=ge.unstable_IdlePriority,ei=null,Oe=null;function jc(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:Wc,Qc=Math.log,Kc=Math.LN2;function Wc(e){return e>>>=0,e===0?32:31-(Qc(e)/Kc|0)|0}var rr=64,ir=4194304;function yt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~i;l!==0?r=yt(l):(o&=a,o!==0&&(r=yt(o)))}else a=t&~i,a!==0?r=yt(a):o!==0&&(r=yt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Te(n),i=1<<t,r|=e[t],n&=~i;return r}function Gc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Te(o),l=1<<a,s=i[a];s===-1?(!(l&t)||l&r)&&(i[a]=Gc(l,n)):s<=n&&(e.expiredLanes|=l),o&=~l}}function ao(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ks(){var e=rr;return rr<<=1,!(rr&4194240)&&(rr=64),e}function wi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Kt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Te(n),e[n]=t}function Yc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Te(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Xo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Te(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var I=0;function _s(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rs,Yo,Cs,Ds,Ts,lo=!1,or=[],nn=null,tn=null,rn=null,It=new Map,Lt=new Map,Ye=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qa(e,n){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":It.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lt.delete(n.pointerId)}}function ct(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Gt(n),n!==null&&Yo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Zc(e,n,t,r,i){switch(n){case"focusin":return nn=ct(nn,e,n,t,r,i),!0;case"dragenter":return tn=ct(tn,e,n,t,r,i),!0;case"mouseover":return rn=ct(rn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return It.set(o,ct(It.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Lt.set(o,ct(Lt.get(o)||null,e,n,t,r,i)),!0}return!1}function Ps(e){var n=bn(e.target);if(n!==null){var t=Tn(n);if(t!==null){if(n=t.tag,n===13){if(n=bs(t),n!==null){e.blockedOn=n,Ts(e.priority,function(){Cs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=so(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);to=r,t.target.dispatchEvent(r),to=null}else return n=Gt(t),n!==null&&Yo(n),e.blockedOn=t,!1;n.shift()}return!0}function Ka(e,n,t){yr(e)&&t.delete(n)}function eu(){lo=!1,nn!==null&&yr(nn)&&(nn=null),tn!==null&&yr(tn)&&(tn=null),rn!==null&&yr(rn)&&(rn=null),It.forEach(Ka),Lt.forEach(Ka)}function ut(e,n){e.blockedOn===n&&(e.blockedOn=null,lo||(lo=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,eu)))}function Nt(e){function n(i){return ut(i,e)}if(0<or.length){ut(or[0],e);for(var t=1;t<or.length;t++){var r=or[t];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&ut(nn,e),tn!==null&&ut(tn,e),rn!==null&&ut(rn,e),It.forEach(n),Lt.forEach(n),t=0;t<Ye.length;t++)r=Ye[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ye.length&&(t=Ye[0],t.blockedOn===null);)Ps(t),t.blockedOn===null&&Ye.shift()}var Kn=Ke.ReactCurrentBatchConfig,Nr=!0;function nu(e,n,t,r){var i=I,o=Kn.transition;Kn.transition=null;try{I=1,Jo(e,n,t,r)}finally{I=i,Kn.transition=o}}function tu(e,n,t,r){var i=I,o=Kn.transition;Kn.transition=null;try{I=4,Jo(e,n,t,r)}finally{I=i,Kn.transition=o}}function Jo(e,n,t,r){if(Nr){var i=so(e,n,t,r);if(i===null)Li(e,n,r,Mr,t),Qa(e,r);else if(Zc(i,e,n,t,r))r.stopPropagation();else if(Qa(e,r),n&4&&-1<Jc.indexOf(e)){for(;i!==null;){var o=Gt(i);if(o!==null&&Rs(o),o=so(e,n,t,r),o===null&&Li(e,n,r,Mr,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Li(e,n,r,null,t)}}var Mr=null;function so(e,n,t,r){if(Mr=null,e=Wo(r),e=bn(e),e!==null)if(n=Tn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=bs(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Mr=e,null}function Is(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vc()){case Go:return 1;case ws:return 4;case Ir:case Hc:return 16;case As:return 536870912;default:return 16}default:return 16}}var Ze=null,Zo=null,br=null;function Ls(){if(br)return br;var e,n=Zo,t=n.length,r,i="value"in Ze?Ze.value:Ze.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[o-r];r++);return br=i.slice(e,1<r?1-r:void 0)}function Er(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function Wa(){return!1}function ye(e){function n(t,r,i,o,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ar:Wa,this.isPropagationStopped=Wa,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),n}var it={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=ye(it),Wt=z({},it,{view:0,detail:0}),ru=ye(Wt),Ai,ki,pt,ni=z({},Wt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pt&&(pt&&e.type==="mousemove"?(Ai=e.screenX-pt.screenX,ki=e.screenY-pt.screenY):ki=Ai=0,pt=e),Ai)},movementY:function(e){return"movementY"in e?e.movementY:ki}}),Ga=ye(ni),iu=z({},ni,{dataTransfer:0}),ou=ye(iu),au=z({},Wt,{relatedTarget:0}),_i=ye(au),lu=z({},it,{animationName:0,elapsedTime:0,pseudoElement:0}),su=ye(lu),du=z({},it,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cu=ye(du),uu=z({},it,{data:0}),Xa=ye(uu),pu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vu(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=fu[e])?!!n[e]:!1}function na(){return vu}var gu=z({},Wt,{key:function(e){if(e.key){var n=pu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:na,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hu=ye(gu),yu=z({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ya=ye(yu),bu=z({},Wt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:na}),Eu=ye(bu),xu=z({},it,{propertyName:0,elapsedTime:0,pseudoElement:0}),Su=ye(xu),wu=z({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Au=ye(wu),ku=[9,13,27,32],ta=Ve&&"CompositionEvent"in window,St=null;Ve&&"documentMode"in document&&(St=document.documentMode);var _u=Ve&&"TextEvent"in window&&!St,Ns=Ve&&(!ta||St&&8<St&&11>=St),Ja=" ",Za=!1;function Ms(e,n){switch(e){case"keyup":return ku.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Os(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function Ru(e,n){switch(e){case"compositionend":return Os(n);case"keypress":return n.which!==32?null:(Za=!0,Ja);case"textInput":return e=n.data,e===Ja&&Za?null:e;default:return null}}function Cu(e,n){if(Nn)return e==="compositionend"||!ta&&Ms(e,n)?(e=Ls(),br=Zo=Ze=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ns&&n.locale!=="ko"?null:n.data;default:return null}}var Du={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function el(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Du[e.type]:n==="textarea"}function Bs(e,n,t,r){fs(r),n=Or(n,"onChange"),0<n.length&&(t=new ea("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var wt=null,Mt=null;function Tu(e){Ws(e,0)}function ti(e){var n=Bn(e);if(ls(n))return e}function Pu(e,n){if(e==="change")return n}var $s=!1;if(Ve){var Ri;if(Ve){var Ci="oninput"in document;if(!Ci){var nl=document.createElement("div");nl.setAttribute("oninput","return;"),Ci=typeof nl.oninput=="function"}Ri=Ci}else Ri=!1;$s=Ri&&(!document.documentMode||9<document.documentMode)}function tl(){wt&&(wt.detachEvent("onpropertychange",Fs),Mt=wt=null)}function Fs(e){if(e.propertyName==="value"&&ti(Mt)){var n=[];Bs(n,Mt,e,Wo(e)),ys(Tu,n)}}function Iu(e,n,t){e==="focusin"?(tl(),wt=n,Mt=t,wt.attachEvent("onpropertychange",Fs)):e==="focusout"&&tl()}function Lu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ti(Mt)}function Nu(e,n){if(e==="click")return ti(n)}function Mu(e,n){if(e==="input"||e==="change")return ti(n)}function Ou(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ie=typeof Object.is=="function"?Object.is:Ou;function Ot(e,n){if(Ie(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Hi.call(n,i)||!Ie(e[i],n[i]))return!1}return!0}function rl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function il(e,n){var t=rl(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=rl(t)}}function zs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Us(){for(var e=window,n=Dr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Dr(e.document)}return n}function ra(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bu(e){var n=Us(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&zs(t.ownerDocument.documentElement,t)){if(r!==null&&ra(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=il(t,o);var a=il(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $u=Ve&&"documentMode"in document&&11>=document.documentMode,Mn=null,co=null,At=null,uo=!1;function ol(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;uo||Mn==null||Mn!==Dr(r)||(r=Mn,"selectionStart"in r&&ra(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),At&&Ot(At,r)||(At=r,r=Or(co,"onSelect"),0<r.length&&(n=new ea("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Mn)))}function lr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var On={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionend:lr("Transition","TransitionEnd")},Di={},qs={};Ve&&(qs=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function ri(e){if(Di[e])return Di[e];if(!On[e])return e;var n=On[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in qs)return Di[e]=n[t];return e}var Vs=ri("animationend"),Hs=ri("animationiteration"),js=ri("animationstart"),Qs=ri("transitionend"),Ks=new Map,al="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,n){Ks.set(e,n),Dn(n,[e])}for(var Ti=0;Ti<al.length;Ti++){var Pi=al[Ti],Fu=Pi.toLowerCase(),zu=Pi[0].toUpperCase()+Pi.slice(1);pn(Fu,"on"+zu)}pn(Vs,"onAnimationEnd");pn(Hs,"onAnimationIteration");pn(js,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Qs,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uu=new Set("cancel close invalid load scroll toggle".split(" ").concat(bt));function ll(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Fc(r,n,void 0,e),e.currentTarget=null}function Ws(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;ll(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;ll(i,l,c),o=s}}}if(Pr)throw e=oo,Pr=!1,oo=null,e}function N(e,n){var t=n[go];t===void 0&&(t=n[go]=new Set);var r=e+"__bubble";t.has(r)||(Gs(n,e,2,!1),t.add(r))}function Ii(e,n,t){var r=0;n&&(r|=4),Gs(t,e,r,n)}var sr="_reactListening"+Math.random().toString(36).slice(2);function Bt(e){if(!e[sr]){e[sr]=!0,ts.forEach(function(t){t!=="selectionchange"&&(Uu.has(t)||Ii(t,!1,e),Ii(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sr]||(n[sr]=!0,Ii("selectionchange",!1,n))}}function Gs(e,n,t,r){switch(Is(n)){case 1:var i=nu;break;case 4:i=tu;break;default:i=Jo}t=i.bind(null,n,t,e),i=void 0,!io||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Li(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=bn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}ys(function(){var c=o,v=Wo(t),f=[];e:{var m=Ks.get(e);if(m!==void 0){var y=ea,b=e;switch(e){case"keypress":if(Er(t)===0)break e;case"keydown":case"keyup":y=hu;break;case"focusin":b="focus",y=_i;break;case"focusout":b="blur",y=_i;break;case"beforeblur":case"afterblur":y=_i;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ou;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Eu;break;case Vs:case Hs:case js:y=su;break;case Qs:y=Su;break;case"scroll":y=ru;break;case"wheel":y=Au;break;case"copy":case"cut":case"paste":y=cu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ya}var E=(n&4)!==0,O=!E&&e==="scroll",u=E?m!==null?m+"Capture":null:m;E=[];for(var d=c,p;d!==null;){p=d;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,u!==null&&(g=Pt(d,u),g!=null&&E.push($t(d,g,p)))),O)break;d=d.return}0<E.length&&(m=new y(m,b,null,t,v),f.push({event:m,listeners:E}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==to&&(b=t.relatedTarget||t.fromElement)&&(bn(b)||b[He]))break e;if((y||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,y?(b=t.relatedTarget||t.toElement,y=c,b=b?bn(b):null,b!==null&&(O=Tn(b),b!==O||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=c),y!==b)){if(E=Ga,g="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(E=Ya,g="onPointerLeave",u="onPointerEnter",d="pointer"),O=y==null?m:Bn(y),p=b==null?m:Bn(b),m=new E(g,d+"leave",y,t,v),m.target=O,m.relatedTarget=p,g=null,bn(v)===c&&(E=new E(u,d+"enter",b,t,v),E.target=p,E.relatedTarget=O,g=E),O=g,y&&b)n:{for(E=y,u=b,d=0,p=E;p;p=Pn(p))d++;for(p=0,g=u;g;g=Pn(g))p++;for(;0<d-p;)E=Pn(E),d--;for(;0<p-d;)u=Pn(u),p--;for(;d--;){if(E===u||u!==null&&E===u.alternate)break n;E=Pn(E),u=Pn(u)}E=null}else E=null;y!==null&&sl(f,m,y,E,!1),b!==null&&O!==null&&sl(f,O,b,E,!0)}}e:{if(m=c?Bn(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var S=Pu;else if(el(m))if($s)S=Mu;else{S=Lu;var A=Iu}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Nu);if(S&&(S=S(e,c))){Bs(f,S,t,v);break e}A&&A(e,m,c),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&Yi(m,"number",m.value)}switch(A=c?Bn(c):window,e){case"focusin":(el(A)||A.contentEditable==="true")&&(Mn=A,co=c,At=null);break;case"focusout":At=co=Mn=null;break;case"mousedown":uo=!0;break;case"contextmenu":case"mouseup":case"dragend":uo=!1,ol(f,t,v);break;case"selectionchange":if($u)break;case"keydown":case"keyup":ol(f,t,v)}var k;if(ta)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Nn?Ms(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Ns&&t.locale!=="ko"&&(Nn||_!=="onCompositionStart"?_==="onCompositionEnd"&&Nn&&(k=Ls()):(Ze=v,Zo="value"in Ze?Ze.value:Ze.textContent,Nn=!0)),A=Or(c,_),0<A.length&&(_=new Xa(_,e,null,t,v),f.push({event:_,listeners:A}),k?_.data=k:(k=Os(t),k!==null&&(_.data=k)))),(k=_u?Ru(e,t):Cu(e,t))&&(c=Or(c,"onBeforeInput"),0<c.length&&(v=new Xa("onBeforeInput","beforeinput",null,t,v),f.push({event:v,listeners:c}),v.data=k))}Ws(f,n)})}function $t(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Or(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pt(e,t),o!=null&&r.unshift($t(e,o,i)),o=Pt(e,n),o!=null&&r.push($t(e,o,i))),e=e.return}return r}function Pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sl(e,n,t,r,i){for(var o=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=Pt(t,o),s!=null&&a.unshift($t(t,s,l))):i||(s=Pt(t,o),s!=null&&a.push($t(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var qu=/\r\n?/g,Vu=/\u0000|\uFFFD/g;function dl(e){return(typeof e=="string"?e:""+e).replace(qu,`
`).replace(Vu,"")}function dr(e,n,t){if(n=dl(n),dl(e)!==n&&t)throw Error(h(425))}function Br(){}var po=null,mo=null;function fo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vo=typeof setTimeout=="function"?setTimeout:void 0,Hu=typeof clearTimeout=="function"?clearTimeout:void 0,cl=typeof Promise=="function"?Promise:void 0,ju=typeof queueMicrotask=="function"?queueMicrotask:typeof cl<"u"?function(e){return cl.resolve(null).then(e).catch(Qu)}:vo;function Qu(e){setTimeout(function(){throw e})}function Ni(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Nt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Nt(n)}function on(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ul(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ot=Math.random().toString(36).slice(2),Me="__reactFiber$"+ot,Ft="__reactProps$"+ot,He="__reactContainer$"+ot,go="__reactEvents$"+ot,Ku="__reactListeners$"+ot,Wu="__reactHandles$"+ot;function bn(e){var n=e[Me];if(n)return n;for(var t=e.parentNode;t;){if(n=t[He]||t[Me]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ul(e);e!==null;){if(t=e[Me])return t;e=ul(e)}return n}e=t,t=e.parentNode}return null}function Gt(e){return e=e[Me]||e[He],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function ii(e){return e[Ft]||null}var ho=[],$n=-1;function mn(e){return{current:e}}function M(e){0>$n||(e.current=ho[$n],ho[$n]=null,$n--)}function L(e,n){$n++,ho[$n]=e.current,e.current=n}var un={},re=mn(un),ce=mn(!1),An=un;function Yn(e,n){var t=e.type.contextTypes;if(!t)return un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ue(e){return e=e.childContextTypes,e!=null}function $r(){M(ce),M(re)}function pl(e,n,t){if(re.current!==un)throw Error(h(168));L(re,n),L(ce,t)}function Xs(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(h(108,Ic(e)||"Unknown",i));return z({},t,r)}function Fr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,An=re.current,L(re,e),L(ce,ce.current),!0}function ml(e,n,t){var r=e.stateNode;if(!r)throw Error(h(169));t?(e=Xs(e,n,An),r.__reactInternalMemoizedMergedChildContext=e,M(ce),M(re),L(re,e)):M(ce),L(ce,t)}var Fe=null,oi=!1,Mi=!1;function Ys(e){Fe===null?Fe=[e]:Fe.push(e)}function Gu(e){oi=!0,Ys(e)}function fn(){if(!Mi&&Fe!==null){Mi=!0;var e=0,n=I;try{var t=Fe;for(I=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Fe=null,oi=!1}catch(i){throw Fe!==null&&(Fe=Fe.slice(e+1)),Ss(Go,fn),i}finally{I=n,Mi=!1}}return null}var Fn=[],zn=0,zr=null,Ur=0,be=[],Ee=0,kn=null,ze=1,Ue="";function hn(e,n){Fn[zn++]=Ur,Fn[zn++]=zr,zr=e,Ur=n}function Js(e,n,t){be[Ee++]=ze,be[Ee++]=Ue,be[Ee++]=kn,kn=e;var r=ze;e=Ue;var i=32-Te(r)-1;r&=~(1<<i),t+=1;var o=32-Te(n)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,ze=1<<32-Te(n)+i|t<<i|r,Ue=o+e}else ze=1<<o|t<<i|r,Ue=e}function ia(e){e.return!==null&&(hn(e,1),Js(e,1,0))}function oa(e){for(;e===zr;)zr=Fn[--zn],Fn[zn]=null,Ur=Fn[--zn],Fn[zn]=null;for(;e===kn;)kn=be[--Ee],be[Ee]=null,Ue=be[--Ee],be[Ee]=null,ze=be[--Ee],be[Ee]=null}var ve=null,fe=null,B=!1,De=null;function Zs(e,n){var t=xe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function fl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ve=e,fe=on(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ve=e,fe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=kn!==null?{id:ze,overflow:Ue}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=xe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ve=e,fe=null,!0):!1;default:return!1}}function yo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bo(e){if(B){var n=fe;if(n){var t=n;if(!fl(e,n)){if(yo(e))throw Error(h(418));n=on(t.nextSibling);var r=ve;n&&fl(e,n)?Zs(r,t):(e.flags=e.flags&-4097|2,B=!1,ve=e)}}else{if(yo(e))throw Error(h(418));e.flags=e.flags&-4097|2,B=!1,ve=e}}}function vl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function cr(e){if(e!==ve)return!1;if(!B)return vl(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!fo(e.type,e.memoizedProps)),n&&(n=fe)){if(yo(e))throw ed(),Error(h(418));for(;n;)Zs(e,n),n=on(n.nextSibling)}if(vl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){fe=on(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}fe=null}}else fe=ve?on(e.stateNode.nextSibling):null;return!0}function ed(){for(var e=fe;e;)e=on(e.nextSibling)}function Jn(){fe=ve=null,B=!1}function aa(e){De===null?De=[e]:De.push(e)}var Xu=Ke.ReactCurrentBatchConfig;function mt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(h(309));var r=t.stateNode}if(!r)throw Error(h(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},n._stringRef=o,n)}if(typeof e!="string")throw Error(h(284));if(!t._owner)throw Error(h(290,e))}return e}function ur(e,n){throw e=Object.prototype.toString.call(n),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function gl(e){var n=e._init;return n(e._payload)}function nd(e){function n(u,d){if(e){var p=u.deletions;p===null?(u.deletions=[d],u.flags|=16):p.push(d)}}function t(u,d){if(!e)return null;for(;d!==null;)n(u,d),d=d.sibling;return null}function r(u,d){for(u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function i(u,d){return u=dn(u,d),u.index=0,u.sibling=null,u}function o(u,d,p){return u.index=p,e?(p=u.alternate,p!==null?(p=p.index,p<d?(u.flags|=2,d):p):(u.flags|=2,d)):(u.flags|=1048576,d)}function a(u){return e&&u.alternate===null&&(u.flags|=2),u}function l(u,d,p,g){return d===null||d.tag!==6?(d=qi(p,u.mode,g),d.return=u,d):(d=i(d,p),d.return=u,d)}function s(u,d,p,g){var S=p.type;return S===Ln?v(u,d,p.props.children,g,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ge&&gl(S)===d.type)?(g=i(d,p.props),g.ref=mt(u,d,p),g.return=u,g):(g=Rr(p.type,p.key,p.props,null,u.mode,g),g.ref=mt(u,d,p),g.return=u,g)}function c(u,d,p,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Vi(p,u.mode,g),d.return=u,d):(d=i(d,p.children||[]),d.return=u,d)}function v(u,d,p,g,S){return d===null||d.tag!==7?(d=wn(p,u.mode,g,S),d.return=u,d):(d=i(d,p),d.return=u,d)}function f(u,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=qi(""+d,u.mode,p),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case er:return p=Rr(d.type,d.key,d.props,null,u.mode,p),p.ref=mt(u,null,d),p.return=u,p;case In:return d=Vi(d,u.mode,p),d.return=u,d;case Ge:var g=d._init;return f(u,g(d._payload),p)}if(ht(d)||st(d))return d=wn(d,u.mode,p,null),d.return=u,d;ur(u,d)}return null}function m(u,d,p,g){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:l(u,d,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case er:return p.key===S?s(u,d,p,g):null;case In:return p.key===S?c(u,d,p,g):null;case Ge:return S=p._init,m(u,d,S(p._payload),g)}if(ht(p)||st(p))return S!==null?null:v(u,d,p,g,null);ur(u,p)}return null}function y(u,d,p,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return u=u.get(p)||null,l(d,u,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case er:return u=u.get(g.key===null?p:g.key)||null,s(d,u,g,S);case In:return u=u.get(g.key===null?p:g.key)||null,c(d,u,g,S);case Ge:var A=g._init;return y(u,d,p,A(g._payload),S)}if(ht(g)||st(g))return u=u.get(p)||null,v(d,u,g,S,null);ur(d,g)}return null}function b(u,d,p,g){for(var S=null,A=null,k=d,_=d=0,q=null;k!==null&&_<p.length;_++){k.index>_?(q=k,k=null):q=k.sibling;var T=m(u,k,p[_],g);if(T===null){k===null&&(k=q);break}e&&k&&T.alternate===null&&n(u,k),d=o(T,d,_),A===null?S=T:A.sibling=T,A=T,k=q}if(_===p.length)return t(u,k),B&&hn(u,_),S;if(k===null){for(;_<p.length;_++)k=f(u,p[_],g),k!==null&&(d=o(k,d,_),A===null?S=k:A.sibling=k,A=k);return B&&hn(u,_),S}for(k=r(u,k);_<p.length;_++)q=y(k,u,_,p[_],g),q!==null&&(e&&q.alternate!==null&&k.delete(q.key===null?_:q.key),d=o(q,d,_),A===null?S=q:A.sibling=q,A=q);return e&&k.forEach(function(ke){return n(u,ke)}),B&&hn(u,_),S}function E(u,d,p,g){var S=st(p);if(typeof S!="function")throw Error(h(150));if(p=S.call(p),p==null)throw Error(h(151));for(var A=S=null,k=d,_=d=0,q=null,T=p.next();k!==null&&!T.done;_++,T=p.next()){k.index>_?(q=k,k=null):q=k.sibling;var ke=m(u,k,T.value,g);if(ke===null){k===null&&(k=q);break}e&&k&&ke.alternate===null&&n(u,k),d=o(ke,d,_),A===null?S=ke:A.sibling=ke,A=ke,k=q}if(T.done)return t(u,k),B&&hn(u,_),S;if(k===null){for(;!T.done;_++,T=p.next())T=f(u,T.value,g),T!==null&&(d=o(T,d,_),A===null?S=T:A.sibling=T,A=T);return B&&hn(u,_),S}for(k=r(u,k);!T.done;_++,T=p.next())T=y(k,u,_,T.value,g),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?_:T.key),d=o(T,d,_),A===null?S=T:A.sibling=T,A=T);return e&&k.forEach(function(at){return n(u,at)}),B&&hn(u,_),S}function O(u,d,p,g){if(typeof p=="object"&&p!==null&&p.type===Ln&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case er:e:{for(var S=p.key,A=d;A!==null;){if(A.key===S){if(S=p.type,S===Ln){if(A.tag===7){t(u,A.sibling),d=i(A,p.props.children),d.return=u,u=d;break e}}else if(A.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ge&&gl(S)===A.type){t(u,A.sibling),d=i(A,p.props),d.ref=mt(u,A,p),d.return=u,u=d;break e}t(u,A);break}else n(u,A);A=A.sibling}p.type===Ln?(d=wn(p.props.children,u.mode,g,p.key),d.return=u,u=d):(g=Rr(p.type,p.key,p.props,null,u.mode,g),g.ref=mt(u,d,p),g.return=u,u=g)}return a(u);case In:e:{for(A=p.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){t(u,d.sibling),d=i(d,p.children||[]),d.return=u,u=d;break e}else{t(u,d);break}else n(u,d);d=d.sibling}d=Vi(p,u.mode,g),d.return=u,u=d}return a(u);case Ge:return A=p._init,O(u,d,A(p._payload),g)}if(ht(p))return b(u,d,p,g);if(st(p))return E(u,d,p,g);ur(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(t(u,d.sibling),d=i(d,p),d.return=u,u=d):(t(u,d),d=qi(p,u.mode,g),d.return=u,u=d),a(u)):t(u,d)}return O}var Zn=nd(!0),td=nd(!1),qr=mn(null),Vr=null,Un=null,la=null;function sa(){la=Un=Vr=null}function da(e){var n=qr.current;M(qr),e._currentValue=n}function Eo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Wn(e,n){Vr=e,la=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function we(e){var n=e._currentValue;if(la!==e)if(e={context:e,memoizedValue:n,next:null},Un===null){if(Vr===null)throw Error(h(308));Un=e,Vr.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return n}var En=null;function ca(e){En===null?En=[e]:En.push(e)}function rd(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,ca(n)):(t.next=i.next,i.next=t),n.interleaved=t,je(e,r)}function je(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Xe=!1;function ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function id(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function an(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,P&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,je(e,t)}return i=r.interleaved,i===null?(n.next=n,ca(r)):(n.next=i.next,i.next=n),r.interleaved=n,je(e,t)}function xr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xo(e,t)}}function hl(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=a:o=o.next=a,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Hr(e,n,t,r){var i=e.updateQueue;Xe=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var v=e.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==a&&(l===null?v.firstBaseUpdate=c:l.next=c,v.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;a=0,v=c=s=null,l=o;do{var m=l.lane,y=l.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,E=l;switch(m=n,y=t,E.tag){case 1:if(b=E.payload,typeof b=="function"){f=b.call(y,f,m);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=E.payload,m=typeof b=="function"?b.call(y,f,m):b,m==null)break e;f=z({},f,m);break e;case 2:Xe=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(c=v=y,s=f):v=v.next=y,a|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(v===null&&(s=f),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Rn|=a,e.lanes=a,e.memoizedState=f}}function yl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(h(191,i));i.call(r)}}}var Xt={},Be=mn(Xt),zt=mn(Xt),Ut=mn(Xt);function xn(e){if(e===Xt)throw Error(h(174));return e}function pa(e,n){switch(L(Ut,n),L(zt,e),L(Be,Xt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Zi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Zi(n,e)}M(Be),L(Be,n)}function et(){M(Be),M(zt),M(Ut)}function od(e){xn(Ut.current);var n=xn(Be.current),t=Zi(n,e.type);n!==t&&(L(zt,e),L(Be,t))}function ma(e){zt.current===e&&(M(Be),M(zt))}var $=mn(0);function jr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oi=[];function fa(){for(var e=0;e<Oi.length;e++)Oi[e]._workInProgressVersionPrimary=null;Oi.length=0}var Sr=Ke.ReactCurrentDispatcher,Bi=Ke.ReactCurrentBatchConfig,_n=0,F=null,Q=null,G=null,Qr=!1,kt=!1,qt=0,Yu=0;function ee(){throw Error(h(321))}function va(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ie(e[t],n[t]))return!1;return!0}function ga(e,n,t,r,i,o){if(_n=o,F=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Sr.current=e===null||e.memoizedState===null?np:tp,e=t(r,i),kt){o=0;do{if(kt=!1,qt=0,25<=o)throw Error(h(301));o+=1,G=Q=null,n.updateQueue=null,Sr.current=rp,e=t(r,i)}while(kt)}if(Sr.current=Kr,n=Q!==null&&Q.next!==null,_n=0,G=Q=F=null,Qr=!1,n)throw Error(h(300));return e}function ha(){var e=qt!==0;return qt=0,e}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return G===null?F.memoizedState=G=e:G=G.next=e,G}function Ae(){if(Q===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var n=G===null?F.memoizedState:G.next;if(n!==null)G=n,Q=e;else{if(e===null)throw Error(h(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},G===null?F.memoizedState=G=e:G=G.next=e}return G}function Vt(e,n){return typeof n=="function"?n(e):n}function $i(e){var n=Ae(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=Q,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var v=c.lane;if((_n&v)===v)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,F.lanes|=v,Rn|=v}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,Ie(r,n.memoizedState)||(de=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,F.lanes|=o,Rn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Fi(e){var n=Ae(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ie(o,n.memoizedState)||(de=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function ad(){}function ld(e,n){var t=F,r=Ae(),i=n(),o=!Ie(r.memoizedState,i);if(o&&(r.memoizedState=i,de=!0),r=r.queue,ya(cd.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||G!==null&&G.memoizedState.tag&1){if(t.flags|=2048,Ht(9,dd.bind(null,t,r,i,n),void 0,null),X===null)throw Error(h(349));_n&30||sd(t,n,i)}return i}function sd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=F.updateQueue,n===null?(n={lastEffect:null,stores:null},F.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function dd(e,n,t,r){n.value=t,n.getSnapshot=r,ud(n)&&pd(e)}function cd(e,n,t){return t(function(){ud(n)&&pd(e)})}function ud(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ie(e,t)}catch{return!0}}function pd(e){var n=je(e,1);n!==null&&Pe(n,e,1,-1)}function bl(e){var n=Ne();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:e},n.queue=e,e=e.dispatch=ep.bind(null,F,e),[n.memoizedState,e]}function Ht(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=F.updateQueue,n===null?(n={lastEffect:null,stores:null},F.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function md(){return Ae().memoizedState}function wr(e,n,t,r){var i=Ne();F.flags|=e,i.memoizedState=Ht(1|n,t,void 0,r===void 0?null:r)}function ai(e,n,t,r){var i=Ae();r=r===void 0?null:r;var o=void 0;if(Q!==null){var a=Q.memoizedState;if(o=a.destroy,r!==null&&va(r,a.deps)){i.memoizedState=Ht(n,t,o,r);return}}F.flags|=e,i.memoizedState=Ht(1|n,t,o,r)}function El(e,n){return wr(8390656,8,e,n)}function ya(e,n){return ai(2048,8,e,n)}function fd(e,n){return ai(4,2,e,n)}function vd(e,n){return ai(4,4,e,n)}function gd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hd(e,n,t){return t=t!=null?t.concat([e]):null,ai(4,4,gd.bind(null,n,e),t)}function ba(){}function yd(e,n){var t=Ae();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&va(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function bd(e,n){var t=Ae();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&va(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ed(e,n,t){return _n&21?(Ie(t,n)||(t=ks(),F.lanes|=t,Rn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function Ju(e,n){var t=I;I=t!==0&&4>t?t:4,e(!0);var r=Bi.transition;Bi.transition={};try{e(!1),n()}finally{I=t,Bi.transition=r}}function xd(){return Ae().memoizedState}function Zu(e,n,t){var r=sn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Sd(e))wd(n,t);else if(t=rd(e,n,t,r),t!==null){var i=oe();Pe(t,e,r,i),Ad(t,n,r)}}function ep(e,n,t){var r=sn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sd(e))wd(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var a=n.lastRenderedState,l=o(a,t);if(i.hasEagerState=!0,i.eagerState=l,Ie(l,a)){var s=n.interleaved;s===null?(i.next=i,ca(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=rd(e,n,i,r),t!==null&&(i=oe(),Pe(t,e,r,i),Ad(t,n,r))}}function Sd(e){var n=e.alternate;return e===F||n!==null&&n===F}function wd(e,n){kt=Qr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ad(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xo(e,t)}}var Kr={readContext:we,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},np={readContext:we,useCallback:function(e,n){return Ne().memoizedState=[e,n===void 0?null:n],e},useContext:we,useEffect:El,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,wr(4194308,4,gd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return wr(4194308,4,e,n)},useInsertionEffect:function(e,n){return wr(4,2,e,n)},useMemo:function(e,n){var t=Ne();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ne();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Zu.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var n=Ne();return e={current:e},n.memoizedState=e},useState:bl,useDebugValue:ba,useDeferredValue:function(e){return Ne().memoizedState=e},useTransition:function(){var e=bl(!1),n=e[0];return e=Ju.bind(null,e[1]),Ne().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=F,i=Ne();if(B){if(t===void 0)throw Error(h(407));t=t()}else{if(t=n(),X===null)throw Error(h(349));_n&30||sd(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,El(cd.bind(null,r,o,e),[e]),r.flags|=2048,Ht(9,dd.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Ne(),n=X.identifierPrefix;if(B){var t=Ue,r=ze;t=(r&~(1<<32-Te(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=qt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Yu++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tp={readContext:we,useCallback:yd,useContext:we,useEffect:ya,useImperativeHandle:hd,useInsertionEffect:fd,useLayoutEffect:vd,useMemo:bd,useReducer:$i,useRef:md,useState:function(){return $i(Vt)},useDebugValue:ba,useDeferredValue:function(e){var n=Ae();return Ed(n,Q.memoizedState,e)},useTransition:function(){var e=$i(Vt)[0],n=Ae().memoizedState;return[e,n]},useMutableSource:ad,useSyncExternalStore:ld,useId:xd,unstable_isNewReconciler:!1},rp={readContext:we,useCallback:yd,useContext:we,useEffect:ya,useImperativeHandle:hd,useInsertionEffect:fd,useLayoutEffect:vd,useMemo:bd,useReducer:Fi,useRef:md,useState:function(){return Fi(Vt)},useDebugValue:ba,useDeferredValue:function(e){var n=Ae();return Q===null?n.memoizedState=e:Ed(n,Q.memoizedState,e)},useTransition:function(){var e=Fi(Vt)[0],n=Ae().memoizedState;return[e,n]},useMutableSource:ad,useSyncExternalStore:ld,useId:xd,unstable_isNewReconciler:!1};function Re(e,n){if(e&&e.defaultProps){n=z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function xo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var li={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=oe(),i=sn(e),o=qe(r,i);o.payload=n,t!=null&&(o.callback=t),n=an(e,o,i),n!==null&&(Pe(n,e,i,r),xr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=oe(),i=sn(e),o=qe(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=an(e,o,i),n!==null&&(Pe(n,e,i,r),xr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=oe(),r=sn(e),i=qe(t,r);i.tag=2,n!=null&&(i.callback=n),n=an(e,i,r),n!==null&&(Pe(n,e,r,t),xr(n,e,r))}};function xl(e,n,t,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):n.prototype&&n.prototype.isPureReactComponent?!Ot(t,r)||!Ot(i,o):!0}function kd(e,n,t){var r=!1,i=un,o=n.contextType;return typeof o=="object"&&o!==null?o=we(o):(i=ue(n)?An:re.current,r=n.contextTypes,o=(r=r!=null)?Yn(e,i):un),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=li,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Sl(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&li.enqueueReplaceState(n,n.state,null)}function So(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ua(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=we(o):(o=ue(n)?An:re.current,i.context=Yn(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(xo(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&li.enqueueReplaceState(i,i.state,null),Hr(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nt(e,n){try{var t="",r=n;do t+=Pc(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function zi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function wo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ip=typeof WeakMap=="function"?WeakMap:Map;function _d(e,n,t){t=qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Gr||(Gr=!0,Lo=r),wo(e,n)},t}function Rd(e,n,t){t=qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){wo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){wo(e,n),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function wl(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ip;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=yp.bind(null,e,n,t),n.then(e,e))}function Al(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function kl(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=qe(-1,1),n.tag=2,an(t,n,1))),t.lanes|=1),e)}var op=Ke.ReactCurrentOwner,de=!1;function ie(e,n,t,r){n.child=e===null?td(n,null,t,r):Zn(n,e.child,t,r)}function _l(e,n,t,r,i){t=t.render;var o=n.ref;return Wn(n,i),r=ga(e,n,t,r,o,i),t=ha(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Qe(e,n,i)):(B&&t&&ia(n),n.flags|=1,ie(e,n,r,i),n.child)}function Rl(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Ra(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Cd(e,n,o,r,i)):(e=Rr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(t=t.compare,t=t!==null?t:Ot,t(a,r)&&e.ref===n.ref)return Qe(e,n,i)}return n.flags|=1,e=dn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Cd(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Ot(o,r)&&e.ref===n.ref)if(de=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,Qe(e,n,i)}return Ao(e,n,t,r,i)}function Dd(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(Vn,me),me|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,L(Vn,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,L(Vn,me),me|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,L(Vn,me),me|=r;return ie(e,n,i,t),n.child}function Td(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ao(e,n,t,r,i){var o=ue(t)?An:re.current;return o=Yn(n,o),Wn(n,i),t=ga(e,n,t,r,o,i),r=ha(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Qe(e,n,i)):(B&&r&&ia(n),n.flags|=1,ie(e,n,t,i),n.child)}function Cl(e,n,t,r,i){if(ue(t)){var o=!0;Fr(n)}else o=!1;if(Wn(n,i),n.stateNode===null)Ar(e,n),kd(n,t,r),So(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=we(c):(c=ue(t)?An:re.current,c=Yn(n,c));var v=t.getDerivedStateFromProps,f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&Sl(n,a,r,c),Xe=!1;var m=n.memoizedState;a.state=m,Hr(n,r,a,i),s=n.memoizedState,l!==r||m!==s||ce.current||Xe?(typeof v=="function"&&(xo(n,t,v,r),s=n.memoizedState),(l=Xe||xl(n,t,l,r,m,s,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,id(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:Re(n.type,l),a.props=c,f=n.pendingProps,m=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=we(s):(s=ue(t)?An:re.current,s=Yn(n,s));var y=t.getDerivedStateFromProps;(v=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||m!==s)&&Sl(n,a,r,s),Xe=!1,m=n.memoizedState,a.state=m,Hr(n,r,a,i);var b=n.memoizedState;l!==f||m!==b||ce.current||Xe?(typeof y=="function"&&(xo(n,t,y,r),b=n.memoizedState),(c=Xe||xl(n,t,c,r,m,b,s)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=b),a.props=r,a.state=b,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return ko(e,n,t,r,o,i)}function ko(e,n,t,r,i,o){Td(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&ml(n,t,!1),Qe(e,n,o);r=n.stateNode,op.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Zn(n,e.child,null,o),n.child=Zn(n,null,l,o)):ie(e,n,l,o),n.memoizedState=r.state,i&&ml(n,t,!0),n.child}function Pd(e){var n=e.stateNode;n.pendingContext?pl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&pl(e,n.context,!1),pa(e,n.containerInfo)}function Dl(e,n,t,r,i){return Jn(),aa(i),n.flags|=256,ie(e,n,t,r),n.child}var _o={dehydrated:null,treeContext:null,retryLane:0};function Ro(e){return{baseLanes:e,cachePool:null,transitions:null}}function Id(e,n,t){var r=n.pendingProps,i=$.current,o=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),L($,i&1),e===null)return bo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,o?(r=n.mode,o=n.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ci(a,r,0,null),e=wn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Ro(t),n.memoizedState=_o,e):Ea(n,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ap(e,n,a,r,l,i,t);if(o){o=r.fallback,a=n.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=dn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=dn(l,o):(o=wn(o,a,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,a=e.child.memoizedState,a=a===null?Ro(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~t,n.memoizedState=_o,r}return o=e.child,e=o.sibling,r=dn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ea(e,n){return n=ci({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function pr(e,n,t,r){return r!==null&&aa(r),Zn(n,e.child,null,t),e=Ea(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ap(e,n,t,r,i,o,a){if(t)return n.flags&256?(n.flags&=-257,r=zi(Error(h(422))),pr(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=ci({mode:"visible",children:r.children},i,0,null),o=wn(o,i,a,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Zn(n,e.child,null,a),n.child.memoizedState=Ro(a),n.memoizedState=_o,o);if(!(n.mode&1))return pr(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(h(419)),r=zi(o,r,void 0),pr(e,n,a,r)}if(l=(a&e.childLanes)!==0,de||l){if(r=X,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,je(e,i),Pe(r,e,i,-1))}return _a(),r=zi(Error(h(421))),pr(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=bp.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,fe=on(i.nextSibling),ve=n,B=!0,De=null,e!==null&&(be[Ee++]=ze,be[Ee++]=Ue,be[Ee++]=kn,ze=e.id,Ue=e.overflow,kn=n),n=Ea(n,r.children),n.flags|=4096,n)}function Tl(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Eo(e.return,n,t)}function Ui(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Ld(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(ie(e,n,r.children,t),r=$.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tl(e,t,n);else if(e.tag===19)Tl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L($,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&jr(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Ui(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&jr(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Ui(n,!0,t,null,o);break;case"together":Ui(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ar(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Qe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Rn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(h(153));if(n.child!==null){for(e=n.child,t=dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function lp(e,n,t){switch(n.tag){case 3:Pd(n),Jn();break;case 5:od(n);break;case 1:ue(n.type)&&Fr(n);break;case 4:pa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;L(qr,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(L($,$.current&1),n.flags|=128,null):t&n.child.childLanes?Id(e,n,t):(L($,$.current&1),e=Qe(e,n,t),e!==null?e.sibling:null);L($,$.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ld(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L($,$.current),r)break;return null;case 22:case 23:return n.lanes=0,Dd(e,n,t)}return Qe(e,n,t)}var Nd,Co,Md,Od;Nd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Co=function(){};Md=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,xn(Be.current);var o=null;switch(t){case"input":i=Gi(e,i),r=Gi(e,r),o=[];break;case"select":i=z({},i,{value:void 0}),r=z({},r,{value:void 0}),o=[];break;case"textarea":i=Ji(e,i),r=Ji(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Br)}eo(t,r);var a;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Dt.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(o||(o=[]),o.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Dt.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&N("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};Od=function(e,n,t,r){t!==r&&(n.flags|=4)};function ft(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function sp(e,n,t){var r=n.pendingProps;switch(oa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(n),null;case 1:return ue(n.type)&&$r(),ne(n),null;case 3:return r=n.stateNode,et(),M(ce),M(re),fa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(cr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,De!==null&&(Oo(De),De=null))),Co(e,n),ne(n),null;case 5:ma(n);var i=xn(Ut.current);if(t=n.type,e!==null&&n.stateNode!=null)Md(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(h(166));return ne(n),null}if(e=xn(Be.current),cr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Me]=n,r[Ft]=o,e=(n.mode&1)!==0,t){case"dialog":N("cancel",r),N("close",r);break;case"iframe":case"object":case"embed":N("load",r);break;case"video":case"audio":for(i=0;i<bt.length;i++)N(bt[i],r);break;case"source":N("error",r);break;case"img":case"image":case"link":N("error",r),N("load",r);break;case"details":N("toggle",r);break;case"input":Fa(r,o),N("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},N("invalid",r);break;case"textarea":Ua(r,o),N("invalid",r)}eo(t,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,l,e),i=["children",""+l]):Dt.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&N("scroll",r)}switch(t){case"input":nr(r),za(r,o,!0);break;case"textarea":nr(r),qa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Br)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Me]=n,e[Ft]=r,Nd(e,n,!1,!1),n.stateNode=e;e:{switch(a=no(t,r),t){case"dialog":N("cancel",e),N("close",e),i=r;break;case"iframe":case"object":case"embed":N("load",e),i=r;break;case"video":case"audio":for(i=0;i<bt.length;i++)N(bt[i],e);i=r;break;case"source":N("error",e),i=r;break;case"img":case"image":case"link":N("error",e),N("load",e),i=r;break;case"details":N("toggle",e),i=r;break;case"input":Fa(e,r),i=Gi(e,r),N("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=z({},r,{value:void 0}),N("invalid",e);break;case"textarea":Ua(e,r),i=Ji(e,r),N("invalid",e);break;default:i=r}eo(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ms(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&us(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Tt(e,s):typeof s=="number"&&Tt(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Dt.hasOwnProperty(o)?s!=null&&o==="onScroll"&&N("scroll",e):s!=null&&Ho(e,o,s,a))}switch(t){case"input":nr(e),za(e,r,!1);break;case"textarea":nr(e),qa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Hn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Br)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ne(n),null;case 6:if(e&&n.stateNode!=null)Od(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(h(166));if(t=xn(Ut.current),xn(Be.current),cr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Me]=n,(o=r.nodeValue!==t)&&(e=ve,e!==null))switch(e.tag){case 3:dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Me]=n,n.stateNode=r}return ne(n),null;case 13:if(M($),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&fe!==null&&n.mode&1&&!(n.flags&128))ed(),Jn(),n.flags|=98560,o=!1;else if(o=cr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(h(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(h(317));o[Me]=n}else Jn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ne(n),o=!1}else De!==null&&(Oo(De),De=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||$.current&1?K===0&&(K=3):_a())),n.updateQueue!==null&&(n.flags|=4),ne(n),null);case 4:return et(),Co(e,n),e===null&&Bt(n.stateNode.containerInfo),ne(n),null;case 10:return da(n.type._context),ne(n),null;case 17:return ue(n.type)&&$r(),ne(n),null;case 19:if(M($),o=n.memoizedState,o===null)return ne(n),null;if(r=(n.flags&128)!==0,a=o.rendering,a===null)if(r)ft(o,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=jr(e),a!==null){for(n.flags|=128,ft(o,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return L($,$.current&1|2),n.child}e=e.sibling}o.tail!==null&&H()>tt&&(n.flags|=128,r=!0,ft(o,!1),n.lanes=4194304)}else{if(!r)if(e=jr(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ft(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!B)return ne(n),null}else 2*H()-o.renderingStartTime>tt&&t!==1073741824&&(n.flags|=128,r=!0,ft(o,!1),n.lanes=4194304);o.isBackwards?(a.sibling=n.child,n.child=a):(t=o.last,t!==null?t.sibling=a:n.child=a,o.last=a)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=H(),n.sibling=null,t=$.current,L($,r?t&1|2:t&1),n):(ne(n),null);case 22:case 23:return ka(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(ne(n),n.subtreeFlags&6&&(n.flags|=8192)):ne(n),null;case 24:return null;case 25:return null}throw Error(h(156,n.tag))}function dp(e,n){switch(oa(n),n.tag){case 1:return ue(n.type)&&$r(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return et(),M(ce),M(re),fa(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ma(n),null;case 13:if(M($),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(h(340));Jn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return M($),null;case 4:return et(),null;case 10:return da(n.type._context),null;case 22:case 23:return ka(),null;case 24:return null;default:return null}}var mr=!1,te=!1,cp=typeof WeakSet=="function"?WeakSet:Set,x=null;function qn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){U(e,n,r)}else t.current=null}function Do(e,n,t){try{t()}catch(r){U(e,n,r)}}var Pl=!1;function up(e,n){if(po=Nr,e=Us(),ra(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,c=0,v=0,f=e,m=null;n:for(;;){for(var y;f!==t||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===e)break n;if(m===t&&++c===i&&(l=a),m===o&&++v===r&&(s=a),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(mo={focusedElem:e,selectionRange:t},Nr=!1,x=n;x!==null;)if(n=x,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,x=e;else for(;x!==null;){n=x;try{var b=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var E=b.memoizedProps,O=b.memoizedState,u=n.stateNode,d=u.getSnapshotBeforeUpdate(n.elementType===n.type?E:Re(n.type,E),O);u.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(g){U(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,x=e;break}x=n.return}return b=Pl,Pl=!1,b}function _t(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Do(n,t,o)}i=i.next}while(i!==r)}}function si(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function To(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Bd(e){var n=e.alternate;n!==null&&(e.alternate=null,Bd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Me],delete n[Ft],delete n[go],delete n[Ku],delete n[Wu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $d(e){return e.tag===5||e.tag===3||e.tag===4}function Il(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Po(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Br));else if(r!==4&&(e=e.child,e!==null))for(Po(e,n,t),e=e.sibling;e!==null;)Po(e,n,t),e=e.sibling}function Io(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Io(e,n,t),e=e.sibling;e!==null;)Io(e,n,t),e=e.sibling}var Y=null,Ce=!1;function We(e,n,t){for(t=t.child;t!==null;)Fd(e,n,t),t=t.sibling}function Fd(e,n,t){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(ei,t)}catch{}switch(t.tag){case 5:te||qn(t,n);case 6:var r=Y,i=Ce;Y=null,We(e,n,t),Y=r,Ce=i,Y!==null&&(Ce?(e=Y,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Y.removeChild(t.stateNode));break;case 18:Y!==null&&(Ce?(e=Y,t=t.stateNode,e.nodeType===8?Ni(e.parentNode,t):e.nodeType===1&&Ni(e,t),Nt(e)):Ni(Y,t.stateNode));break;case 4:r=Y,i=Ce,Y=t.stateNode.containerInfo,Ce=!0,We(e,n,t),Y=r,Ce=i;break;case 0:case 11:case 14:case 15:if(!te&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Do(t,n,a),i=i.next}while(i!==r)}We(e,n,t);break;case 1:if(!te&&(qn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){U(t,n,l)}We(e,n,t);break;case 21:We(e,n,t);break;case 22:t.mode&1?(te=(r=te)||t.memoizedState!==null,We(e,n,t),te=r):We(e,n,t);break;default:We(e,n,t)}}function Ll(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new cp),n.forEach(function(r){var i=Ep.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function _e(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:Y=l.stateNode,Ce=!1;break e;case 3:Y=l.stateNode.containerInfo,Ce=!0;break e;case 4:Y=l.stateNode.containerInfo,Ce=!0;break e}l=l.return}if(Y===null)throw Error(h(160));Fd(o,a,i),Y=null,Ce=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){U(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)zd(n,e),n=n.sibling}function zd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(n,e),Le(e),r&4){try{_t(3,e,e.return),si(3,e)}catch(E){U(e,e.return,E)}try{_t(5,e,e.return)}catch(E){U(e,e.return,E)}}break;case 1:_e(n,e),Le(e),r&512&&t!==null&&qn(t,t.return);break;case 5:if(_e(n,e),Le(e),r&512&&t!==null&&qn(t,t.return),e.flags&32){var i=e.stateNode;try{Tt(i,"")}catch(E){U(e,e.return,E)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=t!==null?t.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ss(i,o),no(l,a);var c=no(l,o);for(a=0;a<s.length;a+=2){var v=s[a],f=s[a+1];v==="style"?ms(i,f):v==="dangerouslySetInnerHTML"?us(i,f):v==="children"?Tt(i,f):Ho(i,v,f,c)}switch(l){case"input":Xi(i,o);break;case"textarea":ds(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Hn(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?Hn(i,!!o.multiple,o.defaultValue,!0):Hn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ft]=o}catch(E){U(e,e.return,E)}}break;case 6:if(_e(n,e),Le(e),r&4){if(e.stateNode===null)throw Error(h(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(E){U(e,e.return,E)}}break;case 3:if(_e(n,e),Le(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Nt(n.containerInfo)}catch(E){U(e,e.return,E)}break;case 4:_e(n,e),Le(e);break;case 13:_e(n,e),Le(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(wa=H())),r&4&&Ll(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(te=(c=te)||v,_e(n,e),te=c):_e(n,e),Le(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(x=e,v=e.child;v!==null;){for(f=x=v;x!==null;){switch(m=x,y=m.child,m.tag){case 0:case 11:case 14:case 15:_t(4,m,m.return);break;case 1:qn(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,b.props=n.memoizedProps,b.state=n.memoizedState,b.componentWillUnmount()}catch(E){U(r,t,E)}}break;case 5:qn(m,m.return);break;case 22:if(m.memoizedState!==null){Ml(f);continue}}y!==null?(y.return=m,x=y):Ml(f)}v=v.sibling}e:for(v=null,f=e;;){if(f.tag===5){if(v===null){v=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ps("display",a))}catch(E){U(e,e.return,E)}}}else if(f.tag===6){if(v===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(E){U(e,e.return,E)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;v===f&&(v=null),f=f.return}v===f&&(v=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:_e(n,e),Le(e),r&4&&Ll(e);break;case 21:break;default:_e(n,e),Le(e)}}function Le(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if($d(t)){var r=t;break e}t=t.return}throw Error(h(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tt(i,""),r.flags&=-33);var o=Il(e);Io(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Il(e);Po(e,l,a);break;default:throw Error(h(161))}}catch(s){U(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pp(e,n,t){x=e,Ud(e)}function Ud(e,n,t){for(var r=(e.mode&1)!==0;x!==null;){var i=x,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||mr;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||te;l=mr;var c=te;if(mr=a,(te=s)&&!c)for(x=i;x!==null;)a=x,s=a.child,a.tag===22&&a.memoizedState!==null?Ol(i):s!==null?(s.return=a,x=s):Ol(i);for(;o!==null;)x=o,Ud(o),o=o.sibling;x=i,mr=l,te=c}Nl(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,x=o):Nl(e)}}function Nl(e){for(;x!==null;){var n=x;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:te||si(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!te)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Re(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&yl(n,o,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}yl(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var f=v.dehydrated;f!==null&&Nt(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}te||n.flags&512&&To(n)}catch(m){U(n,n.return,m)}}if(n===e){x=null;break}if(t=n.sibling,t!==null){t.return=n.return,x=t;break}x=n.return}}function Ml(e){for(;x!==null;){var n=x;if(n===e){x=null;break}var t=n.sibling;if(t!==null){t.return=n.return,x=t;break}x=n.return}}function Ol(e){for(;x!==null;){var n=x;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{si(4,n)}catch(s){U(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){U(n,i,s)}}var o=n.return;try{To(n)}catch(s){U(n,o,s)}break;case 5:var a=n.return;try{To(n)}catch(s){U(n,a,s)}}}catch(s){U(n,n.return,s)}if(n===e){x=null;break}var l=n.sibling;if(l!==null){l.return=n.return,x=l;break}x=n.return}}var mp=Math.ceil,Wr=Ke.ReactCurrentDispatcher,xa=Ke.ReactCurrentOwner,Se=Ke.ReactCurrentBatchConfig,P=0,X=null,j=null,J=0,me=0,Vn=mn(0),K=0,jt=null,Rn=0,di=0,Sa=0,Rt=null,se=null,wa=0,tt=1/0,$e=null,Gr=!1,Lo=null,ln=null,fr=!1,en=null,Xr=0,Ct=0,No=null,kr=-1,_r=0;function oe(){return P&6?H():kr!==-1?kr:kr=H()}function sn(e){return e.mode&1?P&2&&J!==0?J&-J:Xu.transition!==null?(_r===0&&(_r=ks()),_r):(e=I,e!==0||(e=window.event,e=e===void 0?16:Is(e.type)),e):1}function Pe(e,n,t,r){if(50<Ct)throw Ct=0,No=null,Error(h(185));Kt(e,t,r),(!(P&2)||e!==X)&&(e===X&&(!(P&2)&&(di|=t),K===4&&Je(e,J)),pe(e,r),t===1&&P===0&&!(n.mode&1)&&(tt=H()+500,oi&&fn()))}function pe(e,n){var t=e.callbackNode;Xc(e,n);var r=Lr(e,e===X?J:0);if(r===0)t!==null&&ja(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ja(t),n===1)e.tag===0?Gu(Bl.bind(null,e)):Ys(Bl.bind(null,e)),ju(function(){!(P&6)&&fn()}),t=null;else{switch(_s(r)){case 1:t=Go;break;case 4:t=ws;break;case 16:t=Ir;break;case 536870912:t=As;break;default:t=Ir}t=Gd(t,qd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function qd(e,n){if(kr=-1,_r=0,P&6)throw Error(h(327));var t=e.callbackNode;if(Gn()&&e.callbackNode!==t)return null;var r=Lr(e,e===X?J:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Yr(e,r);else{n=r;var i=P;P|=2;var o=Hd();(X!==e||J!==n)&&($e=null,tt=H()+500,Sn(e,n));do try{gp();break}catch(l){Vd(e,l)}while(!0);sa(),Wr.current=o,P=i,j!==null?n=0:(X=null,J=0,n=K)}if(n!==0){if(n===2&&(i=ao(e),i!==0&&(r=i,n=Mo(e,i))),n===1)throw t=jt,Sn(e,0),Je(e,r),pe(e,H()),t;if(n===6)Je(e,r);else{if(i=e.current.alternate,!(r&30)&&!fp(i)&&(n=Yr(e,r),n===2&&(o=ao(e),o!==0&&(r=o,n=Mo(e,o))),n===1))throw t=jt,Sn(e,0),Je(e,r),pe(e,H()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(h(345));case 2:yn(e,se,$e);break;case 3:if(Je(e,r),(r&130023424)===r&&(n=wa+500-H(),10<n)){if(Lr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vo(yn.bind(null,e,se,$e),n);break}yn(e,se,$e);break;case 4:if(Je(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-Te(r);o=1<<a,a=n[a],a>i&&(i=a),r&=~o}if(r=i,r=H()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mp(r/1960))-r,10<r){e.timeoutHandle=vo(yn.bind(null,e,se,$e),r);break}yn(e,se,$e);break;case 5:yn(e,se,$e);break;default:throw Error(h(329))}}}return pe(e,H()),e.callbackNode===t?qd.bind(null,e):null}function Mo(e,n){var t=Rt;return e.current.memoizedState.isDehydrated&&(Sn(e,n).flags|=256),e=Yr(e,n),e!==2&&(n=se,se=t,n!==null&&Oo(n)),e}function Oo(e){se===null?se=e:se.push.apply(se,e)}function fp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Ie(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Je(e,n){for(n&=~Sa,n&=~di,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Te(n),r=1<<t;e[t]=-1,n&=~r}}function Bl(e){if(P&6)throw Error(h(327));Gn();var n=Lr(e,0);if(!(n&1))return pe(e,H()),null;var t=Yr(e,n);if(e.tag!==0&&t===2){var r=ao(e);r!==0&&(n=r,t=Mo(e,r))}if(t===1)throw t=jt,Sn(e,0),Je(e,n),pe(e,H()),t;if(t===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,yn(e,se,$e),pe(e,H()),null}function Aa(e,n){var t=P;P|=1;try{return e(n)}finally{P=t,P===0&&(tt=H()+500,oi&&fn())}}function Cn(e){en!==null&&en.tag===0&&!(P&6)&&Gn();var n=P;P|=1;var t=Se.transition,r=I;try{if(Se.transition=null,I=1,e)return e()}finally{I=r,Se.transition=t,P=n,!(P&6)&&fn()}}function ka(){me=Vn.current,M(Vn)}function Sn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Hu(t)),j!==null)for(t=j.return;t!==null;){var r=t;switch(oa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:et(),M(ce),M(re),fa();break;case 5:ma(r);break;case 4:et();break;case 13:M($);break;case 19:M($);break;case 10:da(r.type._context);break;case 22:case 23:ka()}t=t.return}if(X=e,j=e=dn(e.current,null),J=me=n,K=0,jt=null,Sa=di=Rn=0,se=Rt=null,En!==null){for(n=0;n<En.length;n++)if(t=En[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}t.pending=r}En=null}return e}function Vd(e,n){do{var t=j;try{if(sa(),Sr.current=Kr,Qr){for(var r=F.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qr=!1}if(_n=0,G=Q=F=null,kt=!1,qt=0,xa.current=null,t===null||t.return===null){K=1,jt=n,j=null;break}e:{var o=e,a=t.return,l=t,s=n;if(n=J,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,v=l,f=v.tag;if(!(v.mode&1)&&(f===0||f===11||f===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var y=Al(a);if(y!==null){y.flags&=-257,kl(y,a,l,o,n),y.mode&1&&wl(o,c,n),n=y,s=c;var b=n.updateQueue;if(b===null){var E=new Set;E.add(s),n.updateQueue=E}else b.add(s);break e}else{if(!(n&1)){wl(o,c,n),_a();break e}s=Error(h(426))}}else if(B&&l.mode&1){var O=Al(a);if(O!==null){!(O.flags&65536)&&(O.flags|=256),kl(O,a,l,o,n),aa(nt(s,l));break e}}o=s=nt(s,l),K!==4&&(K=2),Rt===null?Rt=[o]:Rt.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var u=_d(o,s,n);hl(o,u);break e;case 1:l=s;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ln===null||!ln.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var g=Rd(o,l,n);hl(o,g);break e}}o=o.return}while(o!==null)}Qd(t)}catch(S){n=S,j===t&&t!==null&&(j=t=t.return);continue}break}while(!0)}function Hd(){var e=Wr.current;return Wr.current=Kr,e===null?Kr:e}function _a(){(K===0||K===3||K===2)&&(K=4),X===null||!(Rn&268435455)&&!(di&268435455)||Je(X,J)}function Yr(e,n){var t=P;P|=2;var r=Hd();(X!==e||J!==n)&&($e=null,Sn(e,n));do try{vp();break}catch(i){Vd(e,i)}while(!0);if(sa(),P=t,Wr.current=r,j!==null)throw Error(h(261));return X=null,J=0,K}function vp(){for(;j!==null;)jd(j)}function gp(){for(;j!==null&&!Uc();)jd(j)}function jd(e){var n=Wd(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?Qd(e):j=n,xa.current=null}function Qd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=dp(t,n),t!==null){t.flags&=32767,j=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,j=null;return}}else if(t=sp(t,n,me),t!==null){j=t;return}if(n=n.sibling,n!==null){j=n;return}j=n=e}while(n!==null);K===0&&(K=5)}function yn(e,n,t){var r=I,i=Se.transition;try{Se.transition=null,I=1,hp(e,n,t,r)}finally{Se.transition=i,I=r}return null}function hp(e,n,t,r){do Gn();while(en!==null);if(P&6)throw Error(h(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Yc(e,o),e===X&&(j=X=null,J=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||fr||(fr=!0,Gd(Ir,function(){return Gn(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Se.transition,Se.transition=null;var a=I;I=1;var l=P;P|=4,xa.current=null,up(e,t),zd(t,e),Bu(mo),Nr=!!po,mo=po=null,e.current=t,pp(t),qc(),P=l,I=a,Se.transition=o}else e.current=t;if(fr&&(fr=!1,en=e,Xr=i),o=e.pendingLanes,o===0&&(ln=null),jc(t.stateNode),pe(e,H()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gr)throw Gr=!1,e=Lo,Lo=null,e;return Xr&1&&e.tag!==0&&Gn(),o=e.pendingLanes,o&1?e===No?Ct++:(Ct=0,No=e):Ct=0,fn(),null}function Gn(){if(en!==null){var e=_s(Xr),n=Se.transition,t=I;try{if(Se.transition=null,I=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Xr=0,P&6)throw Error(h(331));var i=P;for(P|=4,x=e.current;x!==null;){var o=x,a=o.child;if(x.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(x=c;x!==null;){var v=x;switch(v.tag){case 0:case 11:case 15:_t(8,v,o)}var f=v.child;if(f!==null)f.return=v,x=f;else for(;x!==null;){v=x;var m=v.sibling,y=v.return;if(Bd(v),v===c){x=null;break}if(m!==null){m.return=y,x=m;break}x=y}}}var b=o.alternate;if(b!==null){var E=b.child;if(E!==null){b.child=null;do{var O=E.sibling;E.sibling=null,E=O}while(E!==null)}}x=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,x=a;else e:for(;x!==null;){if(o=x,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_t(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,x=u;break e}x=o.return}}var d=e.current;for(x=d;x!==null;){a=x;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,x=p;else e:for(a=d;x!==null;){if(l=x,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:si(9,l)}}catch(S){U(l,l.return,S)}if(l===a){x=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,x=g;break e}x=l.return}}if(P=i,fn(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(ei,e)}catch{}r=!0}return r}finally{I=t,Se.transition=n}}return!1}function $l(e,n,t){n=nt(t,n),n=_d(e,n,1),e=an(e,n,1),n=oe(),e!==null&&(Kt(e,1,n),pe(e,n))}function U(e,n,t){if(e.tag===3)$l(e,e,t);else for(;n!==null;){if(n.tag===3){$l(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=nt(t,e),e=Rd(n,e,1),n=an(n,e,1),e=oe(),n!==null&&(Kt(n,1,e),pe(n,e));break}}n=n.return}}function yp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=oe(),e.pingedLanes|=e.suspendedLanes&t,X===e&&(J&t)===t&&(K===4||K===3&&(J&130023424)===J&&500>H()-wa?Sn(e,0):Sa|=t),pe(e,n)}function Kd(e,n){n===0&&(e.mode&1?(n=ir,ir<<=1,!(ir&130023424)&&(ir=4194304)):n=1);var t=oe();e=je(e,n),e!==null&&(Kt(e,n,t),pe(e,t))}function bp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Kd(e,t)}function Ep(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(n),Kd(e,t)}var Wd;Wd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ce.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,lp(e,n,t);de=!!(e.flags&131072)}else de=!1,B&&n.flags&1048576&&Js(n,Ur,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ar(e,n),e=n.pendingProps;var i=Yn(n,re.current);Wn(n,t),i=ga(null,n,r,e,i,t);var o=ha();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ue(r)?(o=!0,Fr(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ua(n),i.updater=li,n.stateNode=i,i._reactInternals=n,So(n,r,e,t),n=ko(null,n,r,!0,o,t)):(n.tag=0,B&&o&&ia(n),ie(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ar(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Sp(r),e=Re(r,e),i){case 0:n=Ao(null,n,r,e,t);break e;case 1:n=Cl(null,n,r,e,t);break e;case 11:n=_l(null,n,r,e,t);break e;case 14:n=Rl(null,n,r,Re(r.type,e),t);break e}throw Error(h(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Re(r,i),Ao(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Re(r,i),Cl(e,n,r,i,t);case 3:e:{if(Pd(n),e===null)throw Error(h(387));r=n.pendingProps,o=n.memoizedState,i=o.element,id(e,n),Hr(n,r,null,t);var a=n.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=nt(Error(h(423)),n),n=Dl(e,n,r,t,i);break e}else if(r!==i){i=nt(Error(h(424)),n),n=Dl(e,n,r,t,i);break e}else for(fe=on(n.stateNode.containerInfo.firstChild),ve=n,B=!0,De=null,t=td(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Jn(),r===i){n=Qe(e,n,t);break e}ie(e,n,r,t)}n=n.child}return n;case 5:return od(n),e===null&&bo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,fo(r,i)?a=null:o!==null&&fo(r,o)&&(n.flags|=32),Td(e,n),ie(e,n,a,t),n.child;case 6:return e===null&&bo(n),null;case 13:return Id(e,n,t);case 4:return pa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Zn(n,null,r,t):ie(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Re(r,i),_l(e,n,r,i,t);case 7:return ie(e,n,n.pendingProps,t),n.child;case 8:return ie(e,n,n.pendingProps.children,t),n.child;case 12:return ie(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,a=i.value,L(qr,r._currentValue),r._currentValue=a,o!==null)if(Ie(o.value,a)){if(o.children===i.children&&!ce.current){n=Qe(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=qe(-1,t&-t),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?s.next=s:(s.next=v.next,v.next=s),c.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Eo(o.return,t,n),l.lanes|=t;break}s=s.next}}else if(o.tag===10)a=o.type===n.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(h(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Eo(a,t,n),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===n){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ie(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Wn(n,t),i=we(i),r=r(i),n.flags|=1,ie(e,n,r,t),n.child;case 14:return r=n.type,i=Re(r,n.pendingProps),i=Re(r.type,i),Rl(e,n,r,i,t);case 15:return Cd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Re(r,i),Ar(e,n),n.tag=1,ue(r)?(e=!0,Fr(n)):e=!1,Wn(n,t),kd(n,r,i),So(n,r,i,t),ko(null,n,r,!0,e,t);case 19:return Ld(e,n,t);case 22:return Dd(e,n,t)}throw Error(h(156,n.tag))};function Gd(e,n){return Ss(e,n)}function xp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,n,t,r){return new xp(e,n,t,r)}function Ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sp(e){if(typeof e=="function")return Ra(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qo)return 11;if(e===Ko)return 14}return 2}function dn(e,n){var t=e.alternate;return t===null?(t=xe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Rr(e,n,t,r,i,o){var a=2;if(r=e,typeof e=="function")Ra(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ln:return wn(t.children,i,o,n);case jo:a=8,i|=8;break;case ji:return e=xe(12,t,n,i|2),e.elementType=ji,e.lanes=o,e;case Qi:return e=xe(13,t,n,i),e.elementType=Qi,e.lanes=o,e;case Ki:return e=xe(19,t,n,i),e.elementType=Ki,e.lanes=o,e;case os:return ci(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rs:a=10;break e;case is:a=9;break e;case Qo:a=11;break e;case Ko:a=14;break e;case Ge:a=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return n=xe(a,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function wn(e,n,t,r){return e=xe(7,e,r,n),e.lanes=t,e}function ci(e,n,t,r){return e=xe(22,e,r,n),e.elementType=os,e.lanes=t,e.stateNode={isHidden:!1},e}function qi(e,n,t){return e=xe(6,e,null,n),e.lanes=t,e}function Vi(e,n,t){return n=xe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function wp(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wi(0),this.expirationTimes=wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ca(e,n,t,r,i,o,a,l,s){return e=new wp(e,n,t,l,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=xe(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ua(o),e}function Ap(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Xd(e){if(!e)return un;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(h(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ue(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(h(171))}if(e.tag===1){var t=e.type;if(ue(t))return Xs(e,t,n)}return n}function Yd(e,n,t,r,i,o,a,l,s){return e=Ca(t,r,!0,e,i,o,a,l,s),e.context=Xd(null),t=e.current,r=oe(),i=sn(t),o=qe(r,i),o.callback=n??null,an(t,o,i),e.current.lanes=i,Kt(e,i,r),pe(e,r),e}function ui(e,n,t,r){var i=n.current,o=oe(),a=sn(i);return t=Xd(t),n.context===null?n.context=t:n.pendingContext=t,n=qe(o,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=an(i,n,a),e!==null&&(Pe(e,i,a,o),xr(e,i,a)),a}function Jr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Da(e,n){Fl(e,n),(e=e.alternate)&&Fl(e,n)}function kp(){return null}var Jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ta(e){this._internalRoot=e}pi.prototype.render=Ta.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(h(409));ui(e,n,null,null)};pi.prototype.unmount=Ta.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Cn(function(){ui(null,e,null,null)}),n[He]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ds();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ye.length&&n!==0&&n<Ye[t].priority;t++);Ye.splice(t,0,e),t===0&&Ps(e)}};function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zl(){}function _p(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Jr(a);o.call(c)}}var a=Yd(n,r,e,0,null,!1,!1,"",zl);return e._reactRootContainer=a,e[He]=a.current,Bt(e.nodeType===8?e.parentNode:e),Cn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Jr(s);l.call(c)}}var s=Ca(e,0,!1,null,null,!1,!1,"",zl);return e._reactRootContainer=s,e[He]=s.current,Bt(e.nodeType===8?e.parentNode:e),Cn(function(){ui(n,s,t,r)}),s}function fi(e,n,t,r,i){var o=t._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Jr(a);l.call(s)}}ui(n,a,e,i)}else a=_p(t,n,e,i,r);return Jr(a)}Rs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=yt(n.pendingLanes);t!==0&&(Xo(n,t|1),pe(n,H()),!(P&6)&&(tt=H()+500,fn()))}break;case 13:Cn(function(){var r=je(e,1);if(r!==null){var i=oe();Pe(r,e,1,i)}}),Da(e,1)}};Yo=function(e){if(e.tag===13){var n=je(e,134217728);if(n!==null){var t=oe();Pe(n,e,134217728,t)}Da(e,134217728)}};Cs=function(e){if(e.tag===13){var n=sn(e),t=je(e,n);if(t!==null){var r=oe();Pe(t,e,n,r)}Da(e,n)}};Ds=function(){return I};Ts=function(e,n){var t=I;try{return I=e,n()}finally{I=t}};ro=function(e,n,t){switch(n){case"input":if(Xi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ii(r);if(!i)throw Error(h(90));ls(r),Xi(r,i)}}}break;case"textarea":ds(e,t);break;case"select":n=t.value,n!=null&&Hn(e,!!t.multiple,n,!1)}};gs=Aa;hs=Cn;var Rp={usingClientEntryPoint:!1,Events:[Gt,Bn,ii,fs,vs,Aa]},vt={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cp={bundleType:vt.bundleType,version:vt.version,rendererPackageName:vt.rendererPackageName,rendererConfig:vt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Es(e),e===null?null:e.stateNode},findFiberByHostInstance:vt.findFiberByHostInstance||kp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{ei=vr.inject(Cp),Oe=vr}catch{}}he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rp;he.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pa(n))throw Error(h(200));return Ap(e,n,null,t)};he.createRoot=function(e,n){if(!Pa(e))throw Error(h(299));var t=!1,r="",i=Jd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ca(e,1,!1,null,null,t,!1,r,i),e[He]=n.current,Bt(e.nodeType===8?e.parentNode:e),new Ta(n)};he.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Es(n),e=e===null?null:e.stateNode,e};he.flushSync=function(e){return Cn(e)};he.hydrate=function(e,n,t){if(!mi(n))throw Error(h(200));return fi(null,e,n,!0,t)};he.hydrateRoot=function(e,n,t){if(!Pa(e))throw Error(h(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",a=Jd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Yd(n,null,e,1,t??null,i,!1,o,a),e[He]=n.current,Bt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new pi(n)};he.render=function(e,n,t){if(!mi(n))throw Error(h(200));return fi(null,e,n,!1,t)};he.unmountComponentAtNode=function(e){if(!mi(e))throw Error(h(40));return e._reactRootContainer?(Cn(function(){fi(null,null,e,!1,function(){e._reactRootContainer=null,e[He]=null})}),!0):!1};he.unstable_batchedUpdates=Aa;he.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!mi(t))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return fi(e,n,t,!1,r)};he.version="18.3.1-next-f1338f8080-20240426";function Zd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zd)}catch(e){console.error(e)}}Zd(),Zl.exports=he;var Dp=Zl.exports,ec,Ul=Dp;ec=Ul.createRoot,Ul.hydrateRoot;const Tp=`<!DOCTYPE html>
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

html[data-lang="ar"] {
  direction: rtl;
}

html[data-lang="ar"] body,
html[data-lang="ar"] .btn,
html[data-lang="ar"] .form-input,
html[data-lang="ar"] .filter-select,
html[data-lang="ar"] .nav-item,
html[data-lang="ar"] .page-title,
html[data-lang="ar"] .topbar-title {
  font-family: var(--font-ar);
}

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
.exec-editor-section {
  margin-bottom: 28px;
  padding: 20px 22px;
  border-radius: 12px;
  border: 1px solid var(--border2);
  background: var(--surface);
}
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
          <div class="exec-editor-section">
            <h3>Editing context (same as customer filters)</h3>
            <p class="exec-editor-hint">Choose filters first, then edit fields. Save stores Executive text for this exact filter combination.</p>
            <div class="exec-editor-grid3">
              <div class="form-group"><label class="form-label">Branch</label><select class="filter-select" id="execCtxBranch" onchange="loadExecutiveEditorForm()"><option>All Branches</option><option>Riyadh</option><option>Jeddah</option><option>Dammam</option></select></div>
              <div class="form-group"><label class="form-label">Gender</label><select class="filter-select" id="execCtxGender" onchange="loadExecutiveEditorForm()"><option>All Genders</option><option>Male</option><option>Female</option></select></div>
              <div class="form-group"><label class="form-label">Service</label><select class="filter-select" id="execCtxService" onchange="loadExecutiveEditorForm()"><option>All Services</option><option>Mechanical</option><option>Bodyshop</option></select></div>
              <div class="form-group"><label class="form-label">Frequency</label><select class="filter-select" id="execCtxFrequency" onchange="loadExecutiveEditorForm()"><option>All Frequencies</option><option>1 Visit</option><option>2–3 Visits</option><option>4+ Visits</option></select></div>
              <div class="form-group"><label class="form-label">Age</label><select class="filter-select" id="execCtxAge" onchange="loadExecutiveEditorForm()"><option>All Ages</option><option>&lt;25</option><option>25–34</option><option>35–44</option><option>45+</option></select></div>
              <div class="form-group"><label class="form-label">Context key</label><input class="form-input" id="execCtxKeyView" readonly></div>
            </div>
          </div>

          <div class="exec-editor-section">
            <h3>KPI strip (top of customer Executive)</h3>
            <div class="exec-editor-grid3">
              <div class="form-group"><label class="form-label">CX trend line</label><input class="form-input" id="execEd_kpiTrend1" placeholder="↑ +0.3"></div>
              <div class="form-group"><label class="form-label">CX score line</label><input class="form-input" id="execEd_kpiScore" placeholder="76% (3.8)"></div>
              <div class="form-group"><label class="form-label">Model power %</label><input class="form-input" id="execEd_kpiStripR2" placeholder="72%"></div>
              <div class="form-group"><label class="form-label">Top driver (EN)</label><input class="form-input" id="execEd_kpiTopDriverEn" placeholder="Quality"></div>
              <div class="form-group"><label class="form-label">Top driver (AR)</label><input class="form-input" id="execEd_kpiTopDriverAr" dir="rtl" placeholder="الجودة"></div>
              <div class="form-group"><label class="form-label">Waste risk (EN)</label><input class="form-input" id="execEd_kpiRiskEn" placeholder="Speed"></div>
              <div class="form-group"><label class="form-label">Waste risk (AR)</label><input class="form-input" id="execEd_kpiRiskAr" dir="rtl" placeholder="السرعة"></div>
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
            <p class="exec-editor-hint"><b>This is the single place</b> to manage driver names/values. Ranking table, units bars, bubble map, simulation labels, and expected score all use this data automatically.</p>
            <div class="exec-editor-grid2" id="cxEd_driverRowsMount"></div>
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
              <div class="form-group"><label class="form-label">Subtitle line (EN)</label><textarea class="form-input" id="upEd_segSubEn" rows="2"></textarea></div>
              <div class="form-group"><label class="form-label">Subtitle line (AR)</label><textarea class="form-input" id="upEd_segSubAr" rows="2" dir="rtl"></textarea></div>
            </div>
          </div>

          <div class="exec-editor-section">
            <h3>Driver bars source</h3>
            <p class="exec-editor-hint"><b>Single source enabled:</b> Units Performance bars now read from <b>CX Drivers → Driver settings</b>. No separate driver-bar editing here (to avoid duplicate filling).</p>
          </div>

          <div class="exec-editor-section">
            <h3>Recommendation cards — titles</h3>
            <div class="exec-editor-grid3">
              <div class="form-group"><label class="form-label">Invest card (EN)</label><input class="form-input" id="upEd_cardInvestTitleEn" placeholder="Invest Now"></div>
              <div class="form-group"><label class="form-label">Invest card (AR)</label><input class="form-input" id="upEd_cardInvestTitleAr" dir="rtl"></div>
              <div class="form-group"><label class="form-label">Optimize card (EN)</label><input class="form-input" id="upEd_cardOptimizeTitleEn" placeholder="Optimize"></div>
              <div class="form-group"><label class="form-label">Optimize card (AR)</label><input class="form-input" id="upEd_cardOptimizeTitleAr" dir="rtl"></div>
              <div class="form-group"><label class="form-label">Avoid card (EN)</label><input class="form-input" id="upEd_cardAvoidTitleEn" placeholder="Avoid"></div>
              <div class="form-group"><label class="form-label">Avoid card (AR)</label><input class="form-input" id="upEd_cardAvoidTitleAr" dir="rtl"></div>
            </div>
          </div>

          <div class="exec-editor-section">
            <h3>Bullet lists (one line per bullet)</h3>
            <div class="exec-editor-grid2">
              <div class="form-group"><label class="form-label">Invest — EN</label><textarea class="form-input" id="upEd_investEn" rows="5"></textarea></div>
              <div class="form-group"><label class="form-label">Invest — AR</label><textarea class="form-input" id="upEd_investAr" rows="5" dir="rtl"></textarea></div>
              <div class="form-group"><label class="form-label">Optimize — EN</label><textarea class="form-input" id="upEd_optimizeEn" rows="5"></textarea></div>
              <div class="form-group"><label class="form-label">Optimize — AR</label><textarea class="form-input" id="upEd_optimizeAr" rows="5" dir="rtl"></textarea></div>
              <div class="form-group"><label class="form-label">Avoid — EN</label><textarea class="form-input" id="upEd_avoidEn" rows="5"></textarea></div>
              <div class="form-group"><label class="form-label">Avoid — AR</label><textarea class="form-input" id="upEd_avoidAr" rows="5" dir="rtl"></textarea></div>
            </div>
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
  return {
    branch: (document.getElementById('execCtxBranch')?.value || 'All Branches').trim(),
    gender: (document.getElementById('execCtxGender')?.value || 'All Genders').trim(),
    service: (document.getElementById('execCtxService')?.value || 'All Services').trim(),
    frequency: (document.getElementById('execCtxFrequency')?.value || 'All Frequencies').trim(),
    age: (document.getElementById('execCtxAge')?.value || 'All Ages').trim(),
  };
}

function buildExecutiveFilterKey(ctx) {
  const c = ctx || getExecutiveFilterContext();
  return [c.branch, c.gender, c.service, c.frequency, c.age].join(' | ');
}

function updateExecutiveContextKeyView() {
  const el = document.getElementById('execCtxKeyView');
  if (el) el.value = buildExecutiveFilterKey();
}

const EXEC_EDITOR_FLOW_DEFAULT = [
  { titleEn: '1. Filter', titleAr: '١. التصفية', bodyEn: 'Branch / gender / service / visits / age', bodyAr: 'الفرع / الجنس / الخدمة / الزيارات / العمر' },
  { titleEn: '2. Sample', titleAr: '٢. العيّنة', bodyEn: 'Segment N & share', bodyAr: 'الحجم ونسبة الشريحة' },
  { titleEn: '3. Drivers', titleAr: '٣. المحركات', bodyEn: 'Impact + decisions', bodyAr: 'الأثر + القرار' },
  { titleEn: '4. Simulate', titleAr: '٤. المحاكاة', bodyEn: 'Expected Lift', bodyAr: 'الارتفاع المتوقع' },
  { titleEn: '5. Recommend', titleAr: '٥. التوصية', bodyEn: 'Do / Optimize / Avoid', bodyAr: 'نفّذ / حسّن / تجنّب' },
];

function getExecutiveDefaultOverrides() {
  return {
    kpiTrend1: '↑ +0.3',
    kpiScore: '76% (3.8)',
    kpiStripR2: '72%',
    kpiTopDriverEn: 'Quality',
    kpiTopDriverAr: 'الجودة',
    kpiRiskEn: 'Speed',
    kpiRiskAr: 'السرعة',
    kpiSampleN: '300',
    kpiSampleShareEn: '100% of full sample (300)',
    kpiSampleShareAr: '100% من العينة الكاملة (300)',
    investEn: [ 
      'Fund quality consistency improvements.',
      'Audit first-time-right and rework patterns.',
      'Make quality the main CX improvement program.',
    ],
    investAr: [
      'موّل تحسينات الجودة المستمرة.',
      'راجع أنماط الإصلاح من أول مرة والإعادة.',
      'اجعل الجودة برنامج التحسين الرئيسي.',
    ],
    optimizeEn: [
      'Improve customer communication discipline.',
      'Use advisor scripts for updates.',
      'Target price fairness where complaints cluster.',
    ],
    optimizeAr: [
      'حسّن انضباط التواصل مع العملاء.',
      'استخدم نصوص المستشار للتحديثات.',
      'استهدف عدالة السعر حيث تتركز الشكاوى.',
    ],
    avoidEn: [
      'Do not invest in speed just because its average is low.',
      'Do not build one action plan for all branches.',
      'Do not use averages as decision authority.',
    ],
    avoidAr: [
      'لا تستثمر في السرعة لأن متوسطها منخفض فقط.',
      'لا تبنِ خطة عمل واحدة لجميع الفروع.',
      'لا تستخدم المتوسطات كسلطة قرار.',
    ],
    branchBars: [
      { labelEn: 'Riyadh', labelAr: 'الرياض', scoreLabel: '74% (3.7)', widthPct: 74 },
      { labelEn: 'Jeddah', labelAr: 'جدة', scoreLabel: '68% (3.4)', widthPct: 68 },
      { labelEn: 'Dammam', labelAr: 'الدمام', scoreLabel: '64% (3.2)', widthPct: 64 },
    ],
    flowSteps: EXEC_EDITOR_FLOW_DEFAULT.map((s) => ({ ...s })),
    coreRuleEn: 'A low average score is not a priority unless it has meaningful effect size and enough segment sample.',
    coreRuleAr: 'انخفاض متوسط الدرجة ليس أولوية ما لم يكن لتأثيره حجم مهم وحجم شريحة كافٍ.',
    segmentWarningMode: 'auto',
    segmentWarningEn: '',
    segmentWarningAr: '',
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
  const base = getExecutiveDefaultOverrides();
  const s = readExecutiveOverridesFromStorage();
  const scoped = resolveExecutiveOverridesForContext(s);
  if (!scoped) return base;
  return Object.assign({}, base, scoped, {
    investEn: Array.isArray(scoped.investEn) ? scoped.investEn : base.investEn,
    investAr: Array.isArray(scoped.investAr) ? scoped.investAr : base.investAr,
    optimizeEn: Array.isArray(scoped.optimizeEn) ? scoped.optimizeEn : base.optimizeEn,
    optimizeAr: Array.isArray(scoped.optimizeAr) ? scoped.optimizeAr : base.optimizeAr,
    avoidEn: Array.isArray(scoped.avoidEn) ? scoped.avoidEn : base.avoidEn,
    avoidAr: Array.isArray(scoped.avoidAr) ? scoped.avoidAr : base.avoidAr,
    branchBars: Array.isArray(scoped.branchBars) && scoped.branchBars.length ? scoped.branchBars : base.branchBars,
    flowSteps: Array.isArray(scoped.flowSteps) && scoped.flowSteps.length === 5 ? scoped.flowSteps : base.flowSteps,
  });
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
    kpiScore: _v('execEd_kpiScore'),
    kpiStripR2: _v('execEd_kpiStripR2'),
    kpiTopDriverEn: _v('execEd_kpiTopDriverEn'),
    kpiTopDriverAr: _v('execEd_kpiTopDriverAr'),
    kpiRiskEn: _v('execEd_kpiRiskEn'),
    kpiRiskAr: _v('execEd_kpiRiskAr'),
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
  _set('execEd_kpiScore', o.kpiScore);
  _set('execEd_kpiStripR2', o.kpiStripR2);
  _set('execEd_kpiTopDriverEn', o.kpiTopDriverEn);
  _set('execEd_kpiTopDriverAr', o.kpiTopDriverAr);
  _set('execEd_kpiRiskEn', o.kpiRiskEn);
  _set('execEd_kpiRiskAr', o.kpiRiskAr);
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
  if (!document.getElementById('execEd_kpiScore')) return;
  updateExecutiveContextKeyView();
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
  return CX_CUSTOMER_MODEL_ALL_BRANCHES.drivers.map((dr, i) => ({
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
  return CX_CUSTOMER_MODEL_ALL_BRANCHES.drivers.slice(0, 4).map((dr) => ({
    labelEn: \`\${dr.name} Improvement\`,
    labelAr: \`\${dr.nameAr || dr.name} تحسين\`,
  }));
}

function getCxDriversDefaultOverrides() {
  const M = CX_CUSTOMER_MODEL_ALL_BRANCHES;
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
  const merged = { ...base, ...s };
  merged.driversRows =
    Array.isArray(s.driversRows) && s.driversRows.length ? s.driversRows : base.driversRows;
  merged.bubbles = s.bubbles !== undefined ? s.bubbles : base.bubbles;
  const bSl = base.simSliders;
  const sSl = Array.isArray(s.simSliders) && s.simSliders.length === 4 ? s.simSliders : null;
  merged.simSliders = sSl ? sSl.map((slot, i) => (slot && (slot.labelEn || slot.labelAr) ? slot : bSl[i])) : bSl;
  return merged;
}

function ensureCxDriverRowEditorsBuilt() {
  const host = document.getElementById('cxEd_driverRowsMount');
  if (!host || host.dataset.bound === '1') return;
  host.innerHTML = [0, 1, 2, 3, 4]
    .map(
      (i) => \`
    <div class="exec-flow-step" style="grid-column:1/-1;border:1px solid var(--border);border-radius:12px;padding:14px;margin-bottom:12px">
      <label style="font-weight:700;margin-bottom:8px;display:block">Driver \${i + 1}</label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <input class="form-input" id="cxEd_dr\${i}_rank" placeholder="Rank # (optional)">
        <select class="filter-select" id="cxEd_dr\${i}_cls" style="min-height:42px">
          <option value="navy">Badge: Navy</option>
          <option value="warning">Badge: Warning</option>
          <option value="danger">Badge: Danger</option>
          <option value="gold">Badge: Gold</option>
        </select>
      </div>
      <input class="form-input" id="cxEd_dr\${i}_nameEn" placeholder="Name EN" style="margin-top:8px">
      <input class="form-input" id="cxEd_dr\${i}_nameAr" placeholder="Name AR" dir="rtl" style="margin-top:6px">
      <input class="form-input" id="cxEd_dr\${i}_impact" placeholder="Impact e.g. 0.34" style="margin-top:6px">
      <input class="form-input" id="cxEd_dr\${i}_avgScore" placeholder="Avg score numeric (/5) e.g. 3.4" style="margin-top:6px">
      <input class="form-input" id="cxEd_dr\${i}_decisionEn" placeholder="Decision EN" style="margin-top:6px">
      <input class="form-input" id="cxEd_dr\${i}_decisionAr" placeholder="Decision AR" dir="rtl" style="margin-top:6px">
    </div>\`
    )
    .join('');
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
  for (let i = 0; i < 5; i++) {
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
  for (let i = 0; i < 5; i++) {
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
  ensureCxDriverRowEditorsBuilt();
  applyCxDriversOverridesToForm(mergeCxDriversOverrides());
}

function saveCxDriversOverridesFromForm() {
  const payload = gatherCxDriversOverridesFromForm();
  try {
    localStorage.setItem(CX_DRIVERS_OVERRIDES_STORAGE_KEY, JSON.stringify(payload));
  } catch (_) {
    toast('Could not save (storage blocked).', 'error');
    return;
  }
  addAuditEntry('UPDATE', 'CX Drivers overrides', 'Customer CX Drivers content saved to localStorage');
  notifyCustomerDashboardOverrides('cx-drivers-overrides-updated');
  toast('Saved. Customer dashboard will update if it is open (same site).', 'success');
}

function resetCxDriversOverrides() {
  try {
    localStorage.removeItem(CX_DRIVERS_OVERRIDES_STORAGE_KEY);
  } catch (_) {}
  loadCxDriversEditorForm();
  addAuditEntry('UPDATE', 'CX Drivers overrides', 'Reset to defaults');
  notifyCustomerDashboardOverrides('cx-drivers-overrides-updated');
  toast('CX Drivers overrides cleared.', 'info');
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
  const M = CX_CUSTOMER_MODEL_ALL_BRANCHES;
  return {
    segTitleEn: 'All Branches — Units Performance',
    segTitleAr: 'جميع الفروع — أداء الوحدات',
    segSubEn: \`\${M.explanatory}% · Top driver: \${M.top} · \${cxFormatMean5(M.score, 1)}\`,
    segSubAr: \`\${M.explanatory}% · المحرك الأول: \${M.topAr} · \${cxFormatMean5(M.score, 1)}\`,
    investEn: M.invest.slice(),
    investAr: M.investAr.slice(),
    optimizeEn: M.optimize.slice(),
    optimizeAr: M.optimizeAr.slice(),
    avoidEn: M.avoid.slice(),
    avoidAr: M.avoidAr.slice(),
    cardInvestTitleEn: 'Invest Now',
    cardInvestTitleAr: 'استثمر الآن',
    cardOptimizeTitleEn: 'Optimize',
    cardOptimizeTitleAr: 'حسّن',
    cardAvoidTitleEn: 'Avoid',
    cardAvoidTitleAr: 'تجنّب',
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
  return Object.assign({}, base, s, {
    investEn: Array.isArray(s.investEn) ? s.investEn : base.investEn,
    investAr: Array.isArray(s.investAr) ? s.investAr : base.investAr,
    optimizeEn: Array.isArray(s.optimizeEn) ? s.optimizeEn : base.optimizeEn,
    optimizeAr: Array.isArray(s.optimizeAr) ? s.optimizeAr : base.optimizeAr,
    avoidEn: Array.isArray(s.avoidEn) ? s.avoidEn : base.avoidEn,
    avoidAr: Array.isArray(s.avoidAr) ? s.avoidAr : base.avoidAr,
  });
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
    segSubEn: _v('upEd_segSubEn'),
    segSubAr: _v('upEd_segSubAr'),
    investEn: _lines('upEd_investEn'),
    investAr: _lines('upEd_investAr'),
    optimizeEn: _lines('upEd_optimizeEn'),
    optimizeAr: _lines('upEd_optimizeAr'),
    avoidEn: _lines('upEd_avoidEn'),
    avoidAr: _lines('upEd_avoidAr'),
    cardInvestTitleEn: _v('upEd_cardInvestTitleEn'),
    cardInvestTitleAr: _v('upEd_cardInvestTitleAr'),
    cardOptimizeTitleEn: _v('upEd_cardOptimizeTitleEn'),
    cardOptimizeTitleAr: _v('upEd_cardOptimizeTitleAr'),
    cardAvoidTitleEn: _v('upEd_cardAvoidTitleEn'),
    cardAvoidTitleAr: _v('upEd_cardAvoidTitleAr'),
  };
}

function applyUnitsPerformanceOverridesToForm(o) {
  _set('upEd_segTitleEn', o.segTitleEn);
  _set('upEd_segTitleAr', o.segTitleAr);
  _set('upEd_segSubEn', o.segSubEn);
  _set('upEd_segSubAr', o.segSubAr);
  _set('upEd_cardInvestTitleEn', o.cardInvestTitleEn);
  _set('upEd_cardInvestTitleAr', o.cardInvestTitleAr);
  _set('upEd_cardOptimizeTitleEn', o.cardOptimizeTitleEn);
  _set('upEd_cardOptimizeTitleAr', o.cardOptimizeTitleAr);
  _set('upEd_cardAvoidTitleEn', o.cardAvoidTitleEn);
  _set('upEd_cardAvoidTitleAr', o.cardAvoidTitleAr);
  _setLines('upEd_investEn', o.investEn);
  _setLines('upEd_investAr', o.investAr);
  _setLines('upEd_optimizeEn', o.optimizeEn);
  _setLines('upEd_optimizeAr', o.optimizeAr);
  _setLines('upEd_avoidEn', o.avoidEn);
  _setLines('upEd_avoidAr', o.avoidAr);
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
    const res = await fetch('./customer-dashboard.html', { cache: 'no-store' });
    if (!res.ok) throw new Error('fetch failed');
    const txt = await res.text();
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
    const res = await fetch('./customer-dashboard.html', { cache: 'no-store' });
    if (!res.ok) throw new Error('fetch failed');
    const txt = await res.text();
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

async function fetchDefaultModelQualityPanelHtml() {
  try {
    const res = await fetch('./customer-dashboard.html', { cache: 'no-store' });
    if (!res.ok) throw new Error('fetch failed');
    const txt = await res.text();
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

function mqEsc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function readModelQualityStored() {
  try {
    const raw = localStorage.getItem(MODEL_QUALITY_OVERRIDES_STORAGE_KEY);
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
}

async function loadModelQualityEditorForm(forceReloadDefaults) {
  if (!_mqDefaultPairs.length || forceReloadDefaults) {
    const html = await fetchDefaultModelQualityPanelHtml();
    _mqDefaultPairs = mqExtractPairsFromHtml(html);
    _mqDefaultValues = mqExtractValuesFromHtml(html);
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
  try {
    localStorage.setItem(MODEL_QUALITY_OVERRIDES_STORAGE_KEY, JSON.stringify(payload));
  } catch (_) {
    toast('Could not save (storage blocked).', 'error');
    return;
  }
  addAuditEntry('UPDATE', 'Model Quality overrides', 'Customer Model Quality labels/values saved to localStorage');
  notifyCustomerDashboardOverrides('model-quality-overrides-updated');
  toast('Saved. Customer dashboard will update if it is open (same site).', 'success');
}

function resetModelQualityOverrides() {
  try {
    localStorage.removeItem(MODEL_QUALITY_OVERRIDES_STORAGE_KEY);
  } catch (_) {}
  renderModelQualityEditor(_mqDefaultPairs, _mqDefaultValues, { pairs: {}, values: {} });
  addAuditEntry('UPDATE', 'Model Quality overrides', 'Reset to defaults');
  notifyCustomerDashboardOverrides('model-quality-overrides-updated');
  toast('Model Quality overrides cleared.', 'info');
}

const ADMIN_MIRROR_DB_PANEL = {
};

const ADMIN_PREVIEW_DB_PANEL = {
  executive: 'executive',
  'cx-drivers': 'cx-drivers',
  'units-performance': 'units-performance',
  demographics: 'demographics',
  'customer-patterns': 'customer-patterns',
  questionnaire: 'questionnaire',
  'pilot-analysis': 'pilot',
  'model-quality': 'model-quality',
};

function resolveAdminCustomerEmbedBase() {
  return './customer-dashboard.html';
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
</html>`;function Pp(){return Cr.jsx("main",{className:"admin-shell",children:Cr.jsx("iframe",{title:"ROSHD Admin Control Center",className:"admin-legacy-frame",srcDoc:Tp})})}ec(document.getElementById("root")).render(Cr.jsx(yc.StrictMode,{children:Cr.jsx(Pp,{})}));
