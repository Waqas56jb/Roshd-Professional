(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function ru(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jl={exports:{}},Jt={},Hl={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr=Symbol.for("react.element"),tu=Symbol.for("react.portal"),iu=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),au=Symbol.for("react.profiler"),lu=Symbol.for("react.provider"),su=Symbol.for("react.context"),du=Symbol.for("react.forward_ref"),uu=Symbol.for("react.suspense"),cu=Symbol.for("react.memo"),pu=Symbol.for("react.lazy"),Ma=Symbol.iterator;function fu(e){return e===null||typeof e!="object"?null:(e=Ma&&e[Ma]||e["@@iterator"],typeof e=="function"?e:null)}var Vl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ql=Object.assign,Wl={};function tr(e,n,r){this.props=e,this.context=n,this.refs=Wl,this.updater=r||Vl}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ql(){}ql.prototype=tr.prototype;function zo(e,n,r){this.props=e,this.context=n,this.refs=Wl,this.updater=r||Vl}var _o=zo.prototype=new ql;_o.constructor=zo;Ql(_o,tr.prototype);_o.isPureReactComponent=!0;var La=Array.isArray,Gl=Object.prototype.hasOwnProperty,Oo={current:null},Xl={key:!0,ref:!0,__self:!0,__source:!0};function Kl(e,n,r){var t,i={},o=null,a=null;if(n!=null)for(t in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(o=""+n.key),n)Gl.call(n,t)&&!Xl.hasOwnProperty(t)&&(i[t]=n[t]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(t in l=e.defaultProps,l)i[t]===void 0&&(i[t]=l[t]);return{$$typeof:Wr,type:e,key:o,ref:a,props:i,_owner:Oo.current}}function vu(e,n){return{$$typeof:Wr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Uo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wr}function mu(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var Na=/\/+/g;function yi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?mu(""+e.key):n.toString(36)}function gt(e,n,r,t,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Wr:case tu:a=!0}}if(a)return a=e,i=i(a),e=t===""?"."+yi(a,0):t,La(i)?(r="",e!=null&&(r=e.replace(Na,"$&/")+"/"),gt(i,n,r,"",function(u){return u})):i!=null&&(Uo(i)&&(i=vu(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Na,"$&/")+"/")+e)),n.push(i)),1;if(a=0,t=t===""?".":t+":",La(e))for(var l=0;l<e.length;l++){o=e[l];var s=t+yi(o,l);a+=gt(o,n,r,s,i)}else if(s=fu(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=t+yi(o,l++),a+=gt(o,n,r,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Jr(e,n,r){if(e==null)return e;var t=[],i=0;return gt(e,t,"","",function(o){return n.call(r,o,i++)}),t}function gu(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},ht={transition:null},hu={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:ht,ReactCurrentOwner:Oo};function Yl(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:Jr,forEach:function(e,n,r){Jr(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return Jr(e,function(){n++}),n},toArray:function(e){return Jr(e,function(n){return n})||[]},only:function(e){if(!Uo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=tr;T.Fragment=iu;T.Profiler=au;T.PureComponent=zo;T.StrictMode=ou;T.Suspense=uu;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hu;T.act=Yl;T.cloneElement=function(e,n,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=Ql({},e.props),i=e.key,o=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,a=Oo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)Gl.call(n,s)&&!Xl.hasOwnProperty(s)&&(t[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)t.children=r;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];t.children=l}return{$$typeof:Wr,type:e.type,key:i,ref:o,props:t,_owner:a}};T.createContext=function(e){return e={$$typeof:su,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lu,_context:e},e.Consumer=e};T.createElement=Kl;T.createFactory=function(e){var n=Kl.bind(null,e);return n.type=e,n};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:du,render:e}};T.isValidElement=Uo;T.lazy=function(e){return{$$typeof:pu,_payload:{_status:-1,_result:e},_init:gu}};T.memo=function(e,n){return{$$typeof:cu,type:e,compare:n===void 0?null:n}};T.startTransition=function(e){var n=ht.transition;ht.transition={};try{e()}finally{ht.transition=n}};T.unstable_act=Yl;T.useCallback=function(e,n){return ae.current.useCallback(e,n)};T.useContext=function(e){return ae.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};T.useEffect=function(e,n){return ae.current.useEffect(e,n)};T.useId=function(){return ae.current.useId()};T.useImperativeHandle=function(e,n,r){return ae.current.useImperativeHandle(e,n,r)};T.useInsertionEffect=function(e,n){return ae.current.useInsertionEffect(e,n)};T.useLayoutEffect=function(e,n){return ae.current.useLayoutEffect(e,n)};T.useMemo=function(e,n){return ae.current.useMemo(e,n)};T.useReducer=function(e,n,r){return ae.current.useReducer(e,n,r)};T.useRef=function(e){return ae.current.useRef(e)};T.useState=function(e){return ae.current.useState(e)};T.useSyncExternalStore=function(e,n,r){return ae.current.useSyncExternalStore(e,n,r)};T.useTransition=function(){return ae.current.useTransition()};T.version="18.3.1";Hl.exports=T;var Fo=Hl.exports;const yu=ru(Fo);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu=Fo,xu=Symbol.for("react.element"),wu=Symbol.for("react.fragment"),Eu=Object.prototype.hasOwnProperty,Su=bu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ku={key:!0,ref:!0,__self:!0,__source:!0};function Zl(e,n,r){var t,i={},o=null,a=null;r!==void 0&&(o=""+r),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(a=n.ref);for(t in n)Eu.call(n,t)&&!ku.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps,n)i[t]===void 0&&(i[t]=n[t]);return{$$typeof:xu,type:e,key:o,ref:a,props:i,_owner:Su.current}}Jt.Fragment=wu;Jt.jsx=Zl;Jt.jsxs=Zl;jl.exports=Jt;var Bt=jl.exports,Jl={exports:{}},he={},es={exports:{}},ns={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(S,I){var B=S.length;S.push(I);e:for(;0<B;){var H=B-1>>>1,G=S[H];if(0<i(G,I))S[H]=I,S[B]=G,B=H;else break e}}function r(S){return S.length===0?null:S[0]}function t(S){if(S.length===0)return null;var I=S[0],B=S.pop();if(B!==I){S[0]=B;e:for(var H=0,G=S.length,Yr=G>>>1;H<Yr;){var mn=2*(H+1)-1,hi=S[mn],gn=mn+1,Zr=S[gn];if(0>i(hi,B))gn<G&&0>i(Zr,hi)?(S[H]=Zr,S[gn]=B,H=gn):(S[H]=hi,S[mn]=B,H=mn);else if(gn<G&&0>i(Zr,B))S[H]=Zr,S[gn]=B,H=gn;else break e}}return I}function i(S,I){var B=S.sortIndex-I.sortIndex;return B!==0?B:S.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],m=1,v=null,f=3,y=!1,b=!1,x=!1,$=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var I=r(u);I!==null;){if(I.callback===null)t(u);else if(I.startTime<=S)t(u),I.sortIndex=I.expirationTime,n(s,I);else break;I=r(u)}}function g(S){if(x=!1,p(S),!b)if(r(s)!==null)b=!0,mi(E);else{var I=r(u);I!==null&&gi(g,I.startTime-S)}}function E(S,I){b=!1,x&&(x=!1,c(A),A=-1),y=!0;var B=f;try{for(p(I),v=r(s);v!==null&&(!(v.expirationTime>I)||S&&!Ce());){var H=v.callback;if(typeof H=="function"){v.callback=null,f=v.priorityLevel;var G=H(v.expirationTime<=I);I=e.unstable_now(),typeof G=="function"?v.callback=G:v===r(s)&&t(s),p(I)}else t(s);v=r(s)}if(v!==null)var Yr=!0;else{var mn=r(u);mn!==null&&gi(g,mn.startTime-I),Yr=!1}return Yr}finally{v=null,f=B,y=!1}}var k=!1,C=null,A=-1,j=5,P=-1;function Ce(){return!(e.unstable_now()-P<j)}function ar(){if(C!==null){var S=e.unstable_now();P=S;var I=!0;try{I=C(!0,S)}finally{I?lr():(k=!1,C=null)}}else k=!1}var lr;if(typeof d=="function")lr=function(){d(ar)};else if(typeof MessageChannel<"u"){var Ra=new MessageChannel,nu=Ra.port2;Ra.port1.onmessage=ar,lr=function(){nu.postMessage(null)}}else lr=function(){$(ar,0)};function mi(S){C=S,k||(k=!0,lr())}function gi(S,I){A=$(function(){S(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){b||y||(b=!0,mi(E))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(s)},e.unstable_next=function(S){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var B=f;f=I;try{return S()}finally{f=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,I){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var B=f;f=S;try{return I()}finally{f=B}},e.unstable_scheduleCallback=function(S,I,B){var H=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?H+B:H):B=H,S){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=B+G,S={id:m++,callback:I,priorityLevel:S,startTime:B,expirationTime:G,sortIndex:-1},B>H?(S.sortIndex=B,n(u,S),r(s)===null&&S===r(u)&&(x?(c(A),A=-1):x=!0,gi(g,B-H))):(S.sortIndex=G,n(s,S),b||y||(b=!0,mi(E))),S},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(S){var I=f;return function(){var B=f;f=I;try{return S.apply(this,arguments)}finally{f=B}}}})(ns);es.exports=ns;var Cu=es.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au=Fo,ge=Cu;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rs=new Set,Tr={};function Tn(e,n){Kn(e,n),Kn(e+"Capture",n)}function Kn(e,n){for(Tr[e]=n,e=0;e<n.length;e++)rs.add(n[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vi=Object.prototype.hasOwnProperty,Iu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$a={},za={};function Bu(e){return Vi.call(za,e)?!0:Vi.call($a,e)?!1:Iu.test(e)?za[e]=!0:($a[e]=!0,!1)}function Tu(e,n,r,t){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pu(e,n,r,t){if(n===null||typeof n>"u"||Tu(e,n,r,t))return!0;if(t)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function le(e,n,r,t,i,o,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=a}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];J[n]=new le(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){J[e]=new le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){J[e]=new le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){J[e]=new le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){J[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var jo=/[\-:]([a-z])/g;function Ho(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(jo,Ho);J[n]=new le(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(jo,Ho);J[n]=new le(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(jo,Ho);J[n]=new le(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){J[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)});J.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){J[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vo(e,n,r,t){var i=J.hasOwnProperty(n)?J[n]:null;(i!==null?i.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Pu(n,r,i,t)&&(r=null),t||i===null?Bu(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(n=i.attributeName,t=i.attributeNamespace,r===null?e.removeAttribute(n):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,t?e.setAttributeNS(t,n,r):e.setAttribute(n,r))))}var qe=Au.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,et=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),Qo=Symbol.for("react.strict_mode"),Qi=Symbol.for("react.profiler"),ts=Symbol.for("react.provider"),is=Symbol.for("react.context"),Wo=Symbol.for("react.forward_ref"),Wi=Symbol.for("react.suspense"),qi=Symbol.for("react.suspense_list"),qo=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),os=Symbol.for("react.offscreen"),_a=Symbol.iterator;function sr(e){return e===null||typeof e!="object"?null:(e=_a&&e[_a]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,bi;function gr(e){if(bi===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);bi=n&&n[1]||""}return`
`+bi+e}var xi=!1;function wi(e,n){if(!e||xi)return"";xi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var t=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){t=u}e.call(n.prototype)}else{try{throw Error()}catch(u){t=u}e()}}catch(u){if(u&&t&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=t.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{xi=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?gr(e):""}function Du(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=wi(e.type,!1),e;case 11:return e=wi(e.type.render,!1),e;case 1:return e=wi(e.type,!0),e;default:return""}}function Gi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case Rn:return"Portal";case Qi:return"Profiler";case Qo:return"StrictMode";case Wi:return"Suspense";case qi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case is:return(e.displayName||"Context")+".Consumer";case ts:return(e._context.displayName||"Context")+".Provider";case Wo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qo:return n=e.displayName||null,n!==null?n:Gi(e.type)||"Memo";case Xe:n=e._payload,e=e._init;try{return Gi(e(n))}catch{}}return null}function Ru(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gi(n);case 8:return n===Qo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function as(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Mu(e){var n=as(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){t=""+a,o.call(this,a)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(a){t=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function nt(e){e._valueTracker||(e._valueTracker=Mu(e))}function ls(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),t="";return e&&(t=as(e)?e.checked?"true":"false":e.value),e=t,e!==r?(n.setValue(e),!0):!1}function Tt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xi(e,n){var r=n.checked;return U({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Oa(e,n){var r=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;r=un(n.value!=null?n.value:r),e._wrapperState={initialChecked:t,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ss(e,n){n=n.checked,n!=null&&Vo(e,"checked",n,!1)}function Ki(e,n){ss(e,n);var r=un(n.value),t=n.type;if(r!=null)t==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Yi(e,n.type,r):n.hasOwnProperty("defaultValue")&&Yi(e,n.type,un(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ua(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Yi(e,n,r){(n!=="number"||Tt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var hr=Array.isArray;function Vn(e,n,r,t){if(e=e.options,n){n={};for(var i=0;i<r.length;i++)n["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=n.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&t&&(e[r].defaultSelected=!0)}else{for(r=""+un(r),n=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,t&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Zi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(h(91));return U({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fa(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(h(92));if(hr(r)){if(1<r.length)throw Error(h(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:un(r)}}function ds(e,n){var r=un(n.value),t=un(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),t!=null&&(e.defaultValue=""+t)}function ja(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function us(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ji(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?us(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rt,cs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,t,i){MSApp.execUnsafeLocalFunction(function(){return e(n,r,t,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(rt=rt||document.createElement("div"),rt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=rt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Pr(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lu=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(e){Lu.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),xr[n]=xr[e]})});function ps(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||xr.hasOwnProperty(e)&&xr[e]?(""+n).trim():n+"px"}function fs(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var t=r.indexOf("--")===0,i=ps(r,n[r],t);r==="float"&&(r="cssFloat"),t?e.setProperty(r,i):e[r]=i}}var Nu=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eo(e,n){if(n){if(Nu[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(h(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(h(61))}if(n.style!=null&&typeof n.style!="object")throw Error(h(62))}}function no(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ro=null;function Go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var to=null,Qn=null,Wn=null;function Ha(e){if(e=Xr(e)){if(typeof to!="function")throw Error(h(280));var n=e.stateNode;n&&(n=ii(n),to(e.stateNode,e.type,n))}}function vs(e){Qn?Wn?Wn.push(e):Wn=[e]:Qn=e}function ms(){if(Qn){var e=Qn,n=Wn;if(Wn=Qn=null,Ha(e),n)for(e=0;e<n.length;e++)Ha(n[e])}}function gs(e,n){return e(n)}function hs(){}var Ei=!1;function ys(e,n,r){if(Ei)return e(n,r);Ei=!0;try{return gs(e,n,r)}finally{Ei=!1,(Qn!==null||Wn!==null)&&(hs(),ms())}}function Dr(e,n){var r=e.stateNode;if(r===null)return null;var t=ii(r);if(t===null)return null;r=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(h(231,n,typeof r));return r}var io=!1;if(He)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){io=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{io=!1}function $u(e,n,r,t,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(r,u)}catch(m){this.onError(m)}}var wr=!1,Pt=null,Dt=!1,oo=null,zu={onError:function(e){wr=!0,Pt=e}};function _u(e,n,r,t,i,o,a,l,s){wr=!1,Pt=null,$u.apply(zu,arguments)}function Ou(e,n,r,t,i,o,a,l,s){if(_u.apply(this,arguments),wr){if(wr){var u=Pt;wr=!1,Pt=null}else throw Error(h(198));Dt||(Dt=!0,oo=u)}}function Pn(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function bs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Va(e){if(Pn(e)!==e)throw Error(h(188))}function Uu(e){var n=e.alternate;if(!n){if(n=Pn(e),n===null)throw Error(h(188));return n!==e?null:e}for(var r=e,t=n;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(t=i.return,t!==null){r=t;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Va(i),e;if(o===t)return Va(i),n;o=o.sibling}throw Error(h(188))}if(r.return!==t.return)r=i,t=o;else{for(var a=!1,l=i.child;l;){if(l===r){a=!0,r=i,t=o;break}if(l===t){a=!0,t=i,r=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===r){a=!0,r=o,t=i;break}if(l===t){a=!0,t=o,r=i;break}l=l.sibling}if(!a)throw Error(h(189))}}if(r.alternate!==t)throw Error(h(190))}if(r.tag!==3)throw Error(h(188));return r.stateNode.current===r?e:n}function xs(e){return e=Uu(e),e!==null?ws(e):null}function ws(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ws(e);if(n!==null)return n;e=e.sibling}return null}var Es=ge.unstable_scheduleCallback,Qa=ge.unstable_cancelCallback,Fu=ge.unstable_shouldYield,ju=ge.unstable_requestPaint,V=ge.unstable_now,Hu=ge.unstable_getCurrentPriorityLevel,Xo=ge.unstable_ImmediatePriority,Ss=ge.unstable_UserBlockingPriority,Rt=ge.unstable_NormalPriority,Vu=ge.unstable_LowPriority,ks=ge.unstable_IdlePriority,ei=null,$e=null;function Qu(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var Pe=Math.clz32?Math.clz32:Gu,Wu=Math.log,qu=Math.LN2;function Gu(e){return e>>>=0,e===0?32:31-(Wu(e)/qu|0)|0}var tt=64,it=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mt(e,n){var r=e.pendingLanes;if(r===0)return 0;var t=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var l=a&~i;l!==0?t=yr(l):(o&=a,o!==0&&(t=yr(o)))}else a=r&~i,a!==0?t=yr(a):o!==0&&(t=yr(o));if(t===0)return 0;if(n!==0&&n!==t&&!(n&i)&&(i=t&-t,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(t&4&&(t|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=t;0<n;)r=31-Pe(n),i=1<<r,t|=e[r],n&=~i;return t}function Xu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ku(e,n){for(var r=e.suspendedLanes,t=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Pe(o),l=1<<a,s=i[a];s===-1?(!(l&r)||l&t)&&(i[a]=Xu(l,n)):s<=n&&(e.expiredLanes|=l),o&=~l}}function ao(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cs(){var e=tt;return tt<<=1,!(tt&4194240)&&(tt=64),e}function Si(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function qr(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Pe(n),e[n]=r}function Yu(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Pe(r),o=1<<i;n[i]=0,t[i]=-1,e[i]=-1,r&=~o}}function Ko(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var t=31-Pe(r),i=1<<t;i&n|e[t]&n&&(e[t]|=n),r&=~i}}var R=0;function As(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Is,Yo,Bs,Ts,Ps,lo=!1,ot=[],nn=null,rn=null,tn=null,Rr=new Map,Mr=new Map,Ye=[],Zu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wa(e,n){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Rr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(n.pointerId)}}function ur(e,n,r,t,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:r,eventSystemFlags:t,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Xr(n),n!==null&&Yo(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Ju(e,n,r,t,i){switch(n){case"focusin":return nn=ur(nn,e,n,r,t,i),!0;case"dragenter":return rn=ur(rn,e,n,r,t,i),!0;case"mouseover":return tn=ur(tn,e,n,r,t,i),!0;case"pointerover":var o=i.pointerId;return Rr.set(o,ur(Rr.get(o)||null,e,n,r,t,i)),!0;case"gotpointercapture":return o=i.pointerId,Mr.set(o,ur(Mr.get(o)||null,e,n,r,t,i)),!0}return!1}function Ds(e){var n=bn(e.target);if(n!==null){var r=Pn(n);if(r!==null){if(n=r.tag,n===13){if(n=bs(r),n!==null){e.blockedOn=n,Ps(e.priority,function(){Bs(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yt(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=so(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var t=new r.constructor(r.type,r);ro=t,r.target.dispatchEvent(t),ro=null}else return n=Xr(r),n!==null&&Yo(n),e.blockedOn=r,!1;n.shift()}return!0}function qa(e,n,r){yt(e)&&r.delete(n)}function ec(){lo=!1,nn!==null&&yt(nn)&&(nn=null),rn!==null&&yt(rn)&&(rn=null),tn!==null&&yt(tn)&&(tn=null),Rr.forEach(qa),Mr.forEach(qa)}function cr(e,n){e.blockedOn===n&&(e.blockedOn=null,lo||(lo=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,ec)))}function Lr(e){function n(i){return cr(i,e)}if(0<ot.length){cr(ot[0],e);for(var r=1;r<ot.length;r++){var t=ot[r];t.blockedOn===e&&(t.blockedOn=null)}}for(nn!==null&&cr(nn,e),rn!==null&&cr(rn,e),tn!==null&&cr(tn,e),Rr.forEach(n),Mr.forEach(n),r=0;r<Ye.length;r++)t=Ye[r],t.blockedOn===e&&(t.blockedOn=null);for(;0<Ye.length&&(r=Ye[0],r.blockedOn===null);)Ds(r),r.blockedOn===null&&Ye.shift()}var qn=qe.ReactCurrentBatchConfig,Lt=!0;function nc(e,n,r,t){var i=R,o=qn.transition;qn.transition=null;try{R=1,Zo(e,n,r,t)}finally{R=i,qn.transition=o}}function rc(e,n,r,t){var i=R,o=qn.transition;qn.transition=null;try{R=4,Zo(e,n,r,t)}finally{R=i,qn.transition=o}}function Zo(e,n,r,t){if(Lt){var i=so(e,n,r,t);if(i===null)Mi(e,n,t,Nt,r),Wa(e,t);else if(Ju(i,e,n,r,t))t.stopPropagation();else if(Wa(e,t),n&4&&-1<Zu.indexOf(e)){for(;i!==null;){var o=Xr(i);if(o!==null&&Is(o),o=so(e,n,r,t),o===null&&Mi(e,n,t,Nt,r),o===i)break;i=o}i!==null&&t.stopPropagation()}else Mi(e,n,t,null,r)}}var Nt=null;function so(e,n,r,t){if(Nt=null,e=Go(t),e=bn(e),e!==null)if(n=Pn(e),n===null)e=null;else if(r=n.tag,r===13){if(e=bs(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Nt=e,null}function Rs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hu()){case Xo:return 1;case Ss:return 4;case Rt:case Vu:return 16;case ks:return 536870912;default:return 16}default:return 16}}var Je=null,Jo=null,bt=null;function Ms(){if(bt)return bt;var e,n=Jo,r=n.length,t,i="value"in Je?Je.value:Je.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return bt=i.slice(e,1<t?1-t:void 0)}function xt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function at(){return!0}function Ga(){return!1}function ye(e){function n(r,t,i,o,a){this._reactName=r,this._targetInst=i,this.type=t,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?at:Ga,this.isPropagationStopped=Ga,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=at)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=at)},persist:function(){},isPersistent:at}),n}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=ye(ir),Gr=U({},ir,{view:0,detail:0}),tc=ye(Gr),ki,Ci,pr,ni=U({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(ki=e.screenX-pr.screenX,Ci=e.screenY-pr.screenY):Ci=ki=0,pr=e),ki)},movementY:function(e){return"movementY"in e?e.movementY:Ci}}),Xa=ye(ni),ic=U({},ni,{dataTransfer:0}),oc=ye(ic),ac=U({},Gr,{relatedTarget:0}),Ai=ye(ac),lc=U({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),sc=ye(lc),dc=U({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uc=ye(dc),cc=U({},ir,{data:0}),Ka=ye(cc),pc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vc[e])?!!n[e]:!1}function na(){return mc}var gc=U({},Gr,{key:function(e){if(e.key){var n=pc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=xt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:na,charCode:function(e){return e.type==="keypress"?xt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hc=ye(gc),yc=U({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ya=ye(yc),bc=U({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:na}),xc=ye(bc),wc=U({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ec=ye(wc),Sc=U({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kc=ye(Sc),Cc=[9,13,27,32],ra=He&&"CompositionEvent"in window,Er=null;He&&"documentMode"in document&&(Er=document.documentMode);var Ac=He&&"TextEvent"in window&&!Er,Ls=He&&(!ra||Er&&8<Er&&11>=Er),Za=" ",Ja=!1;function Ns(e,n){switch(e){case"keyup":return Cc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function Ic(e,n){switch(e){case"compositionend":return $s(n);case"keypress":return n.which!==32?null:(Ja=!0,Za);case"textInput":return e=n.data,e===Za&&Ja?null:e;default:return null}}function Bc(e,n){if(Ln)return e==="compositionend"||!ra&&Ns(e,n)?(e=Ms(),bt=Jo=Je=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ls&&n.locale!=="ko"?null:n.data;default:return null}}var Tc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function el(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Tc[e.type]:n==="textarea"}function zs(e,n,r,t){vs(t),n=$t(n,"onChange"),0<n.length&&(r=new ea("onChange","change",null,r,t),e.push({event:r,listeners:n}))}var Sr=null,Nr=null;function Pc(e){Gs(e,0)}function ri(e){var n=zn(e);if(ls(n))return e}function Dc(e,n){if(e==="change")return n}var _s=!1;if(He){var Ii;if(He){var Bi="oninput"in document;if(!Bi){var nl=document.createElement("div");nl.setAttribute("oninput","return;"),Bi=typeof nl.oninput=="function"}Ii=Bi}else Ii=!1;_s=Ii&&(!document.documentMode||9<document.documentMode)}function rl(){Sr&&(Sr.detachEvent("onpropertychange",Os),Nr=Sr=null)}function Os(e){if(e.propertyName==="value"&&ri(Nr)){var n=[];zs(n,Nr,e,Go(e)),ys(Pc,n)}}function Rc(e,n,r){e==="focusin"?(rl(),Sr=n,Nr=r,Sr.attachEvent("onpropertychange",Os)):e==="focusout"&&rl()}function Mc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ri(Nr)}function Lc(e,n){if(e==="click")return ri(n)}function Nc(e,n){if(e==="input"||e==="change")return ri(n)}function $c(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Re=typeof Object.is=="function"?Object.is:$c;function $r(e,n){if(Re(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(t=0;t<r.length;t++){var i=r[t];if(!Vi.call(n,i)||!Re(e[i],n[i]))return!1}return!0}function tl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function il(e,n){var r=tl(e);e=0;for(var t;r;){if(r.nodeType===3){if(t=e+r.textContent.length,e<=n&&t>=n)return{node:r,offset:n-e};e=t}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=tl(r)}}function Us(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Us(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Fs(){for(var e=window,n=Tt();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Tt(e.document)}return n}function ta(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function zc(e){var n=Fs(),r=e.focusedElem,t=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&Us(r.ownerDocument.documentElement,r)){if(t!==null&&ta(r)){if(n=t.start,e=t.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(t.start,i);t=t.end===void 0?o:Math.min(t.end,i),!e.extend&&o>t&&(i=t,t=o,o=i),i=il(r,o);var a=il(r,t);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>t?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _c=He&&"documentMode"in document&&11>=document.documentMode,Nn=null,uo=null,kr=null,co=!1;function ol(e,n,r){var t=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;co||Nn==null||Nn!==Tt(t)||(t=Nn,"selectionStart"in t&&ta(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),kr&&$r(kr,t)||(kr=t,t=$t(uo,"onSelect"),0<t.length&&(n=new ea("onSelect","select",null,n,r),e.push({event:n,listeners:t}),n.target=Nn)))}function lt(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var $n={animationend:lt("Animation","AnimationEnd"),animationiteration:lt("Animation","AnimationIteration"),animationstart:lt("Animation","AnimationStart"),transitionend:lt("Transition","TransitionEnd")},Ti={},js={};He&&(js=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function ti(e){if(Ti[e])return Ti[e];if(!$n[e])return e;var n=$n[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in js)return Ti[e]=n[r];return e}var Hs=ti("animationend"),Vs=ti("animationiteration"),Qs=ti("animationstart"),Ws=ti("transitionend"),qs=new Map,al="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,n){qs.set(e,n),Tn(n,[e])}for(var Pi=0;Pi<al.length;Pi++){var Di=al[Pi],Oc=Di.toLowerCase(),Uc=Di[0].toUpperCase()+Di.slice(1);pn(Oc,"on"+Uc)}pn(Hs,"onAnimationEnd");pn(Vs,"onAnimationIteration");pn(Qs,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Ws,"onTransitionEnd");Kn("onMouseEnter",["mouseout","mouseover"]);Kn("onMouseLeave",["mouseout","mouseover"]);Kn("onPointerEnter",["pointerout","pointerover"]);Kn("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fc=new Set("cancel close invalid load scroll toggle".split(" ").concat(br));function ll(e,n,r){var t=e.type||"unknown-event";e.currentTarget=r,Ou(t,n,void 0,e),e.currentTarget=null}function Gs(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var t=e[r],i=t.event;t=t.listeners;e:{var o=void 0;if(n)for(var a=t.length-1;0<=a;a--){var l=t[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;ll(i,l,u),o=s}else for(a=0;a<t.length;a++){if(l=t[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;ll(i,l,u),o=s}}}if(Dt)throw e=oo,Dt=!1,oo=null,e}function L(e,n){var r=n[go];r===void 0&&(r=n[go]=new Set);var t=e+"__bubble";r.has(t)||(Xs(n,e,2,!1),r.add(t))}function Ri(e,n,r){var t=0;n&&(t|=4),Xs(r,e,t,n)}var st="_reactListening"+Math.random().toString(36).slice(2);function zr(e){if(!e[st]){e[st]=!0,rs.forEach(function(r){r!=="selectionchange"&&(Fc.has(r)||Ri(r,!1,e),Ri(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[st]||(n[st]=!0,Ri("selectionchange",!1,n))}}function Xs(e,n,r,t){switch(Rs(n)){case 1:var i=nc;break;case 4:i=rc;break;default:i=Zo}r=i.bind(null,n,r,e),i=void 0,!io||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),t?i!==void 0?e.addEventListener(n,r,{capture:!0,passive:i}):e.addEventListener(n,r,!0):i!==void 0?e.addEventListener(n,r,{passive:i}):e.addEventListener(n,r,!1)}function Mi(e,n,r,t,i){var o=t;if(!(n&1)&&!(n&2)&&t!==null)e:for(;;){if(t===null)return;var a=t.tag;if(a===3||a===4){var l=t.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=t.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=bn(l),a===null)return;if(s=a.tag,s===5||s===6){t=o=a;continue e}l=l.parentNode}}t=t.return}ys(function(){var u=o,m=Go(r),v=[];e:{var f=qs.get(e);if(f!==void 0){var y=ea,b=e;switch(e){case"keypress":if(xt(r)===0)break e;case"keydown":case"keyup":y=hc;break;case"focusin":b="focus",y=Ai;break;case"focusout":b="blur",y=Ai;break;case"beforeblur":case"afterblur":y=Ai;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=oc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=xc;break;case Hs:case Vs:case Qs:y=sc;break;case Ws:y=Ec;break;case"scroll":y=tc;break;case"wheel":y=kc;break;case"copy":case"cut":case"paste":y=uc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ya}var x=(n&4)!==0,$=!x&&e==="scroll",c=x?f!==null?f+"Capture":null:f;x=[];for(var d=u,p;d!==null;){p=d;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,c!==null&&(g=Dr(d,c),g!=null&&x.push(_r(d,g,p)))),$)break;d=d.return}0<x.length&&(f=new y(f,b,null,r,m),v.push({event:f,listeners:x}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&r!==ro&&(b=r.relatedTarget||r.fromElement)&&(bn(b)||b[Ve]))break e;if((y||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,y?(b=r.relatedTarget||r.toElement,y=u,b=b?bn(b):null,b!==null&&($=Pn(b),b!==$||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=u),y!==b)){if(x=Xa,g="onMouseLeave",c="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ya,g="onPointerLeave",c="onPointerEnter",d="pointer"),$=y==null?f:zn(y),p=b==null?f:zn(b),f=new x(g,d+"leave",y,r,m),f.target=$,f.relatedTarget=p,g=null,bn(m)===u&&(x=new x(c,d+"enter",b,r,m),x.target=p,x.relatedTarget=$,g=x),$=g,y&&b)n:{for(x=y,c=b,d=0,p=x;p;p=Dn(p))d++;for(p=0,g=c;g;g=Dn(g))p++;for(;0<d-p;)x=Dn(x),d--;for(;0<p-d;)c=Dn(c),p--;for(;d--;){if(x===c||c!==null&&x===c.alternate)break n;x=Dn(x),c=Dn(c)}x=null}else x=null;y!==null&&sl(v,f,y,x,!1),b!==null&&$!==null&&sl(v,$,b,x,!0)}}e:{if(f=u?zn(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var E=Dc;else if(el(f))if(_s)E=Nc;else{E=Mc;var k=Rc}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=Lc);if(E&&(E=E(e,u))){zs(v,E,r,m);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&Yi(f,"number",f.value)}switch(k=u?zn(u):window,e){case"focusin":(el(k)||k.contentEditable==="true")&&(Nn=k,uo=u,kr=null);break;case"focusout":kr=uo=Nn=null;break;case"mousedown":co=!0;break;case"contextmenu":case"mouseup":case"dragend":co=!1,ol(v,r,m);break;case"selectionchange":if(_c)break;case"keydown":case"keyup":ol(v,r,m)}var C;if(ra)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ln?Ns(e,r)&&(A="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(A="onCompositionStart");A&&(Ls&&r.locale!=="ko"&&(Ln||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ln&&(C=Ms()):(Je=m,Jo="value"in Je?Je.value:Je.textContent,Ln=!0)),k=$t(u,A),0<k.length&&(A=new Ka(A,e,null,r,m),v.push({event:A,listeners:k}),C?A.data=C:(C=$s(r),C!==null&&(A.data=C)))),(C=Ac?Ic(e,r):Bc(e,r))&&(u=$t(u,"onBeforeInput"),0<u.length&&(m=new Ka("onBeforeInput","beforeinput",null,r,m),v.push({event:m,listeners:u}),m.data=C))}Gs(v,n)})}function _r(e,n,r){return{instance:e,listener:n,currentTarget:r}}function $t(e,n){for(var r=n+"Capture",t=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Dr(e,r),o!=null&&t.unshift(_r(e,o,i)),o=Dr(e,n),o!=null&&t.push(_r(e,o,i))),e=e.return}return t}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sl(e,n,r,t,i){for(var o=n._reactName,a=[];r!==null&&r!==t;){var l=r,s=l.alternate,u=l.stateNode;if(s!==null&&s===t)break;l.tag===5&&u!==null&&(l=u,i?(s=Dr(r,o),s!=null&&a.unshift(_r(r,s,l))):i||(s=Dr(r,o),s!=null&&a.push(_r(r,s,l)))),r=r.return}a.length!==0&&e.push({event:n,listeners:a})}var jc=/\r\n?/g,Hc=/\u0000|\uFFFD/g;function dl(e){return(typeof e=="string"?e:""+e).replace(jc,`
`).replace(Hc,"")}function dt(e,n,r){if(n=dl(n),dl(e)!==n&&r)throw Error(h(425))}function zt(){}var po=null,fo=null;function vo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var mo=typeof setTimeout=="function"?setTimeout:void 0,Vc=typeof clearTimeout=="function"?clearTimeout:void 0,ul=typeof Promise=="function"?Promise:void 0,Qc=typeof queueMicrotask=="function"?queueMicrotask:typeof ul<"u"?function(e){return ul.resolve(null).then(e).catch(Wc)}:mo;function Wc(e){setTimeout(function(){throw e})}function Li(e,n){var r=n,t=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(t===0){e.removeChild(i),Lr(n);return}t--}else r!=="$"&&r!=="$?"&&r!=="$!"||t++;r=i}while(r);Lr(n)}function on(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function cl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),Ne="__reactFiber$"+or,Or="__reactProps$"+or,Ve="__reactContainer$"+or,go="__reactEvents$"+or,qc="__reactListeners$"+or,Gc="__reactHandles$"+or;function bn(e){var n=e[Ne];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Ve]||r[Ne]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=cl(e);e!==null;){if(r=e[Ne])return r;e=cl(e)}return n}e=r,r=e.parentNode}return null}function Xr(e){return e=e[Ne]||e[Ve],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function ii(e){return e[Or]||null}var ho=[],_n=-1;function fn(e){return{current:e}}function N(e){0>_n||(e.current=ho[_n],ho[_n]=null,_n--)}function M(e,n){_n++,ho[_n]=e.current,e.current=n}var cn={},te=fn(cn),ue=fn(!1),kn=cn;function Yn(e,n){var r=e.type.contextTypes;if(!r)return cn;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=n[o];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ce(e){return e=e.childContextTypes,e!=null}function _t(){N(ue),N(te)}function pl(e,n,r){if(te.current!==cn)throw Error(h(168));M(te,n),M(ue,r)}function Ks(e,n,r){var t=e.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return r;t=t.getChildContext();for(var i in t)if(!(i in n))throw Error(h(108,Ru(e)||"Unknown",i));return U({},r,t)}function Ot(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,kn=te.current,M(te,e),M(ue,ue.current),!0}function fl(e,n,r){var t=e.stateNode;if(!t)throw Error(h(169));r?(e=Ks(e,n,kn),t.__reactInternalMemoizedMergedChildContext=e,N(ue),N(te),M(te,e)):N(ue),M(ue,r)}var Oe=null,oi=!1,Ni=!1;function Ys(e){Oe===null?Oe=[e]:Oe.push(e)}function Xc(e){oi=!0,Ys(e)}function vn(){if(!Ni&&Oe!==null){Ni=!0;var e=0,n=R;try{var r=Oe;for(R=1;e<r.length;e++){var t=r[e];do t=t(!0);while(t!==null)}Oe=null,oi=!1}catch(i){throw Oe!==null&&(Oe=Oe.slice(e+1)),Es(Xo,vn),i}finally{R=n,Ni=!1}}return null}var On=[],Un=0,Ut=null,Ft=0,be=[],xe=0,Cn=null,Ue=1,Fe="";function hn(e,n){On[Un++]=Ft,On[Un++]=Ut,Ut=e,Ft=n}function Zs(e,n,r){be[xe++]=Ue,be[xe++]=Fe,be[xe++]=Cn,Cn=e;var t=Ue;e=Fe;var i=32-Pe(t)-1;t&=~(1<<i),r+=1;var o=32-Pe(n)+i;if(30<o){var a=i-i%5;o=(t&(1<<a)-1).toString(32),t>>=a,i-=a,Ue=1<<32-Pe(n)+i|r<<i|t,Fe=o+e}else Ue=1<<o|r<<i|t,Fe=e}function ia(e){e.return!==null&&(hn(e,1),Zs(e,1,0))}function oa(e){for(;e===Ut;)Ut=On[--Un],On[Un]=null,Ft=On[--Un],On[Un]=null;for(;e===Cn;)Cn=be[--xe],be[xe]=null,Fe=be[--xe],be[xe]=null,Ue=be[--xe],be[xe]=null}var me=null,ve=null,z=!1,Te=null;function Js(e,n){var r=we(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function vl(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,me=e,ve=on(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,me=e,ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=Cn!==null?{id:Ue,overflow:Fe}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=we(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,me=e,ve=null,!0):!1;default:return!1}}function yo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bo(e){if(z){var n=ve;if(n){var r=n;if(!vl(e,n)){if(yo(e))throw Error(h(418));n=on(r.nextSibling);var t=me;n&&vl(e,n)?Js(t,r):(e.flags=e.flags&-4097|2,z=!1,me=e)}}else{if(yo(e))throw Error(h(418));e.flags=e.flags&-4097|2,z=!1,me=e}}}function ml(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;me=e}function ut(e){if(e!==me)return!1;if(!z)return ml(e),z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!vo(e.type,e.memoizedProps)),n&&(n=ve)){if(yo(e))throw ed(),Error(h(418));for(;n;)Js(e,n),n=on(n.nextSibling)}if(ml(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){ve=on(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}ve=null}}else ve=me?on(e.stateNode.nextSibling):null;return!0}function ed(){for(var e=ve;e;)e=on(e.nextSibling)}function Zn(){ve=me=null,z=!1}function aa(e){Te===null?Te=[e]:Te.push(e)}var Kc=qe.ReactCurrentBatchConfig;function fr(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(h(309));var t=r.stateNode}if(!t)throw Error(h(147,e));var i=t,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},n._stringRef=o,n)}if(typeof e!="string")throw Error(h(284));if(!r._owner)throw Error(h(290,e))}return e}function ct(e,n){throw e=Object.prototype.toString.call(n),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function gl(e){var n=e._init;return n(e._payload)}function nd(e){function n(c,d){if(e){var p=c.deletions;p===null?(c.deletions=[d],c.flags|=16):p.push(d)}}function r(c,d){if(!e)return null;for(;d!==null;)n(c,d),d=d.sibling;return null}function t(c,d){for(c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function i(c,d){return c=dn(c,d),c.index=0,c.sibling=null,c}function o(c,d,p){return c.index=p,e?(p=c.alternate,p!==null?(p=p.index,p<d?(c.flags|=2,d):p):(c.flags|=2,d)):(c.flags|=1048576,d)}function a(c){return e&&c.alternate===null&&(c.flags|=2),c}function l(c,d,p,g){return d===null||d.tag!==6?(d=ji(p,c.mode,g),d.return=c,d):(d=i(d,p),d.return=c,d)}function s(c,d,p,g){var E=p.type;return E===Mn?m(c,d,p.props.children,g,p.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Xe&&gl(E)===d.type)?(g=i(d,p.props),g.ref=fr(c,d,p),g.return=c,g):(g=It(p.type,p.key,p.props,null,c.mode,g),g.ref=fr(c,d,p),g.return=c,g)}function u(c,d,p,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Hi(p,c.mode,g),d.return=c,d):(d=i(d,p.children||[]),d.return=c,d)}function m(c,d,p,g,E){return d===null||d.tag!==7?(d=Sn(p,c.mode,g,E),d.return=c,d):(d=i(d,p),d.return=c,d)}function v(c,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ji(""+d,c.mode,p),d.return=c,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case et:return p=It(d.type,d.key,d.props,null,c.mode,p),p.ref=fr(c,null,d),p.return=c,p;case Rn:return d=Hi(d,c.mode,p),d.return=c,d;case Xe:var g=d._init;return v(c,g(d._payload),p)}if(hr(d)||sr(d))return d=Sn(d,c.mode,p,null),d.return=c,d;ct(c,d)}return null}function f(c,d,p,g){var E=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:l(c,d,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case et:return p.key===E?s(c,d,p,g):null;case Rn:return p.key===E?u(c,d,p,g):null;case Xe:return E=p._init,f(c,d,E(p._payload),g)}if(hr(p)||sr(p))return E!==null?null:m(c,d,p,g,null);ct(c,p)}return null}function y(c,d,p,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return c=c.get(p)||null,l(d,c,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case et:return c=c.get(g.key===null?p:g.key)||null,s(d,c,g,E);case Rn:return c=c.get(g.key===null?p:g.key)||null,u(d,c,g,E);case Xe:var k=g._init;return y(c,d,p,k(g._payload),E)}if(hr(g)||sr(g))return c=c.get(p)||null,m(d,c,g,E,null);ct(d,g)}return null}function b(c,d,p,g){for(var E=null,k=null,C=d,A=d=0,j=null;C!==null&&A<p.length;A++){C.index>A?(j=C,C=null):j=C.sibling;var P=f(c,C,p[A],g);if(P===null){C===null&&(C=j);break}e&&C&&P.alternate===null&&n(c,C),d=o(P,d,A),k===null?E=P:k.sibling=P,k=P,C=j}if(A===p.length)return r(c,C),z&&hn(c,A),E;if(C===null){for(;A<p.length;A++)C=v(c,p[A],g),C!==null&&(d=o(C,d,A),k===null?E=C:k.sibling=C,k=C);return z&&hn(c,A),E}for(C=t(c,C);A<p.length;A++)j=y(C,c,A,p[A],g),j!==null&&(e&&j.alternate!==null&&C.delete(j.key===null?A:j.key),d=o(j,d,A),k===null?E=j:k.sibling=j,k=j);return e&&C.forEach(function(Ce){return n(c,Ce)}),z&&hn(c,A),E}function x(c,d,p,g){var E=sr(p);if(typeof E!="function")throw Error(h(150));if(p=E.call(p),p==null)throw Error(h(151));for(var k=E=null,C=d,A=d=0,j=null,P=p.next();C!==null&&!P.done;A++,P=p.next()){C.index>A?(j=C,C=null):j=C.sibling;var Ce=f(c,C,P.value,g);if(Ce===null){C===null&&(C=j);break}e&&C&&Ce.alternate===null&&n(c,C),d=o(Ce,d,A),k===null?E=Ce:k.sibling=Ce,k=Ce,C=j}if(P.done)return r(c,C),z&&hn(c,A),E;if(C===null){for(;!P.done;A++,P=p.next())P=v(c,P.value,g),P!==null&&(d=o(P,d,A),k===null?E=P:k.sibling=P,k=P);return z&&hn(c,A),E}for(C=t(c,C);!P.done;A++,P=p.next())P=y(C,c,A,P.value,g),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?A:P.key),d=o(P,d,A),k===null?E=P:k.sibling=P,k=P);return e&&C.forEach(function(ar){return n(c,ar)}),z&&hn(c,A),E}function $(c,d,p,g){if(typeof p=="object"&&p!==null&&p.type===Mn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case et:e:{for(var E=p.key,k=d;k!==null;){if(k.key===E){if(E=p.type,E===Mn){if(k.tag===7){r(c,k.sibling),d=i(k,p.props.children),d.return=c,c=d;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Xe&&gl(E)===k.type){r(c,k.sibling),d=i(k,p.props),d.ref=fr(c,k,p),d.return=c,c=d;break e}r(c,k);break}else n(c,k);k=k.sibling}p.type===Mn?(d=Sn(p.props.children,c.mode,g,p.key),d.return=c,c=d):(g=It(p.type,p.key,p.props,null,c.mode,g),g.ref=fr(c,d,p),g.return=c,c=g)}return a(c);case Rn:e:{for(k=p.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){r(c,d.sibling),d=i(d,p.children||[]),d.return=c,c=d;break e}else{r(c,d);break}else n(c,d);d=d.sibling}d=Hi(p,c.mode,g),d.return=c,c=d}return a(c);case Xe:return k=p._init,$(c,d,k(p._payload),g)}if(hr(p))return b(c,d,p,g);if(sr(p))return x(c,d,p,g);ct(c,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(r(c,d.sibling),d=i(d,p),d.return=c,c=d):(r(c,d),d=ji(p,c.mode,g),d.return=c,c=d),a(c)):r(c,d)}return $}var Jn=nd(!0),rd=nd(!1),jt=fn(null),Ht=null,Fn=null,la=null;function sa(){la=Fn=Ht=null}function da(e){var n=jt.current;N(jt),e._currentValue=n}function xo(e,n,r){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===r)break;e=e.return}}function Gn(e,n){Ht=e,la=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function Se(e){var n=e._currentValue;if(la!==e)if(e={context:e,memoizedValue:n,next:null},Fn===null){if(Ht===null)throw Error(h(308));Fn=e,Ht.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return n}var xn=null;function ua(e){xn===null?xn=[e]:xn.push(e)}function td(e,n,r,t){var i=n.interleaved;return i===null?(r.next=r,ua(n)):(r.next=i.next,i.next=r),n.interleaved=r,Qe(e,t)}function Qe(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Ke=!1;function ca(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function id(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function je(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function an(e,n,r){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,D&2){var i=t.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n,Qe(e,r)}return i=t.interleaved,i===null?(n.next=n,ua(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qe(e,r)}function wt(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var t=n.lanes;t&=e.pendingLanes,r|=t,n.lanes=r,Ko(e,r)}}function hl(e,n){var r=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,r===t)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=n:o=o.next=n}else i=o=n;r={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:t.shared,effects:t.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function Vt(e,n,r,t){var i=e.updateQueue;Ke=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=s))}if(o!==null){var v=i.baseState;a=0,m=u=s=null,l=o;do{var f=l.lane,y=l.eventTime;if((t&f)===f){m!==null&&(m=m.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,x=l;switch(f=n,y=r,x.tag){case 1:if(b=x.payload,typeof b=="function"){v=b.call(y,v,f);break e}v=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=x.payload,f=typeof b=="function"?b.call(y,v,f):b,f==null)break e;v=U({},v,f);break e;case 2:Ke=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else y={eventTime:y,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=y,s=v):m=m.next=y,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(m===null&&(s=v),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=m,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);In|=a,e.lanes=a,e.memoizedState=v}}function yl(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var t=e[n],i=t.callback;if(i!==null){if(t.callback=null,t=r,typeof i!="function")throw Error(h(191,i));i.call(t)}}}var Kr={},ze=fn(Kr),Ur=fn(Kr),Fr=fn(Kr);function wn(e){if(e===Kr)throw Error(h(174));return e}function pa(e,n){switch(M(Fr,n),M(Ur,e),M(ze,Kr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ji(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ji(n,e)}N(ze),M(ze,n)}function er(){N(ze),N(Ur),N(Fr)}function od(e){wn(Fr.current);var n=wn(ze.current),r=Ji(n,e.type);n!==r&&(M(Ur,e),M(ze,r))}function fa(e){Ur.current===e&&(N(ze),N(Ur))}var _=fn(0);function Qt(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=[];function va(){for(var e=0;e<$i.length;e++)$i[e]._workInProgressVersionPrimary=null;$i.length=0}var Et=qe.ReactCurrentDispatcher,zi=qe.ReactCurrentBatchConfig,An=0,O=null,W=null,X=null,Wt=!1,Cr=!1,jr=0,Yc=0;function ee(){throw Error(h(321))}function ma(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Re(e[r],n[r]))return!1;return!0}function ga(e,n,r,t,i,o){if(An=o,O=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Et.current=e===null||e.memoizedState===null?np:rp,e=r(t,i),Cr){o=0;do{if(Cr=!1,jr=0,25<=o)throw Error(h(301));o+=1,X=W=null,n.updateQueue=null,Et.current=tp,e=r(t,i)}while(Cr)}if(Et.current=qt,n=W!==null&&W.next!==null,An=0,X=W=O=null,Wt=!1,n)throw Error(h(300));return e}function ha(){var e=jr!==0;return jr=0,e}function Le(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?O.memoizedState=X=e:X=X.next=e,X}function ke(){if(W===null){var e=O.alternate;e=e!==null?e.memoizedState:null}else e=W.next;var n=X===null?O.memoizedState:X.next;if(n!==null)X=n,W=e;else{if(e===null)throw Error(h(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},X===null?O.memoizedState=X=e:X=X.next=e}return X}function Hr(e,n){return typeof n=="function"?n(e):n}function _i(e){var n=ke(),r=n.queue;if(r===null)throw Error(h(311));r.lastRenderedReducer=e;var t=W,i=t.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}t.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,t=t.baseState;var l=a=null,s=null,u=o;do{var m=u.lane;if((An&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),t=u.hasEagerState?u.eagerState:e(t,u.action);else{var v={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=v,a=t):s=s.next=v,O.lanes|=m,In|=m}u=u.next}while(u!==null&&u!==o);s===null?a=t:s.next=l,Re(t,n.memoizedState)||(de=!0),n.memoizedState=t,n.baseState=a,n.baseQueue=s,r.lastRenderedState=t}if(e=r.interleaved,e!==null){i=e;do o=i.lane,O.lanes|=o,In|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function Oi(e){var n=ke(),r=n.queue;if(r===null)throw Error(h(311));r.lastRenderedReducer=e;var t=r.dispatch,i=r.pending,o=n.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Re(o,n.memoizedState)||(de=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),r.lastRenderedState=o}return[o,t]}function ad(){}function ld(e,n){var r=O,t=ke(),i=n(),o=!Re(t.memoizedState,i);if(o&&(t.memoizedState=i,de=!0),t=t.queue,ya(ud.bind(null,r,t,e),[e]),t.getSnapshot!==n||o||X!==null&&X.memoizedState.tag&1){if(r.flags|=2048,Vr(9,dd.bind(null,r,t,i,n),void 0,null),K===null)throw Error(h(349));An&30||sd(r,n,i)}return i}function sd(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=O.updateQueue,n===null?(n={lastEffect:null,stores:null},O.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function dd(e,n,r,t){n.value=r,n.getSnapshot=t,cd(n)&&pd(e)}function ud(e,n,r){return r(function(){cd(n)&&pd(e)})}function cd(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Re(e,r)}catch{return!0}}function pd(e){var n=Qe(e,1);n!==null&&De(n,e,1,-1)}function bl(e){var n=Le();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},n.queue=e,e=e.dispatch=ep.bind(null,O,e),[n.memoizedState,e]}function Vr(e,n,r,t){return e={tag:e,create:n,destroy:r,deps:t,next:null},n=O.updateQueue,n===null?(n={lastEffect:null,stores:null},O.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(t=r.next,r.next=e,e.next=t,n.lastEffect=e)),e}function fd(){return ke().memoizedState}function St(e,n,r,t){var i=Le();O.flags|=e,i.memoizedState=Vr(1|n,r,void 0,t===void 0?null:t)}function ai(e,n,r,t){var i=ke();t=t===void 0?null:t;var o=void 0;if(W!==null){var a=W.memoizedState;if(o=a.destroy,t!==null&&ma(t,a.deps)){i.memoizedState=Vr(n,r,o,t);return}}O.flags|=e,i.memoizedState=Vr(1|n,r,o,t)}function xl(e,n){return St(8390656,8,e,n)}function ya(e,n){return ai(2048,8,e,n)}function vd(e,n){return ai(4,2,e,n)}function md(e,n){return ai(4,4,e,n)}function gd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hd(e,n,r){return r=r!=null?r.concat([e]):null,ai(4,4,gd.bind(null,n,e),r)}function ba(){}function yd(e,n){var r=ke();n=n===void 0?null:n;var t=r.memoizedState;return t!==null&&n!==null&&ma(n,t[1])?t[0]:(r.memoizedState=[e,n],e)}function bd(e,n){var r=ke();n=n===void 0?null:n;var t=r.memoizedState;return t!==null&&n!==null&&ma(n,t[1])?t[0]:(e=e(),r.memoizedState=[e,n],e)}function xd(e,n,r){return An&21?(Re(r,n)||(r=Cs(),O.lanes|=r,In|=r,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=r)}function Zc(e,n){var r=R;R=r!==0&&4>r?r:4,e(!0);var t=zi.transition;zi.transition={};try{e(!1),n()}finally{R=r,zi.transition=t}}function wd(){return ke().memoizedState}function Jc(e,n,r){var t=sn(e);if(r={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null},Ed(e))Sd(n,r);else if(r=td(e,n,r,t),r!==null){var i=oe();De(r,e,t,i),kd(r,n,t)}}function ep(e,n,r){var t=sn(e),i={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ed(e))Sd(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var a=n.lastRenderedState,l=o(a,r);if(i.hasEagerState=!0,i.eagerState=l,Re(l,a)){var s=n.interleaved;s===null?(i.next=i,ua(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}r=td(e,n,i,t),r!==null&&(i=oe(),De(r,e,t,i),kd(r,n,t))}}function Ed(e){var n=e.alternate;return e===O||n!==null&&n===O}function Sd(e,n){Cr=Wt=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function kd(e,n,r){if(r&4194240){var t=n.lanes;t&=e.pendingLanes,r|=t,n.lanes=r,Ko(e,r)}}var qt={readContext:Se,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},np={readContext:Se,useCallback:function(e,n){return Le().memoizedState=[e,n===void 0?null:n],e},useContext:Se,useEffect:xl,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,St(4194308,4,gd.bind(null,n,e),r)},useLayoutEffect:function(e,n){return St(4194308,4,e,n)},useInsertionEffect:function(e,n){return St(4,2,e,n)},useMemo:function(e,n){var r=Le();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var t=Le();return n=r!==void 0?r(n):n,t.memoizedState=t.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=Jc.bind(null,O,e),[t.memoizedState,e]},useRef:function(e){var n=Le();return e={current:e},n.memoizedState=e},useState:bl,useDebugValue:ba,useDeferredValue:function(e){return Le().memoizedState=e},useTransition:function(){var e=bl(!1),n=e[0];return e=Zc.bind(null,e[1]),Le().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var t=O,i=Le();if(z){if(r===void 0)throw Error(h(407));r=r()}else{if(r=n(),K===null)throw Error(h(349));An&30||sd(t,n,r)}i.memoizedState=r;var o={value:r,getSnapshot:n};return i.queue=o,xl(ud.bind(null,t,o,e),[e]),t.flags|=2048,Vr(9,dd.bind(null,t,o,r,n),void 0,null),r},useId:function(){var e=Le(),n=K.identifierPrefix;if(z){var r=Fe,t=Ue;r=(t&~(1<<32-Pe(t)-1)).toString(32)+r,n=":"+n+"R"+r,r=jr++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=Yc++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rp={readContext:Se,useCallback:yd,useContext:Se,useEffect:ya,useImperativeHandle:hd,useInsertionEffect:vd,useLayoutEffect:md,useMemo:bd,useReducer:_i,useRef:fd,useState:function(){return _i(Hr)},useDebugValue:ba,useDeferredValue:function(e){var n=ke();return xd(n,W.memoizedState,e)},useTransition:function(){var e=_i(Hr)[0],n=ke().memoizedState;return[e,n]},useMutableSource:ad,useSyncExternalStore:ld,useId:wd,unstable_isNewReconciler:!1},tp={readContext:Se,useCallback:yd,useContext:Se,useEffect:ya,useImperativeHandle:hd,useInsertionEffect:vd,useLayoutEffect:md,useMemo:bd,useReducer:Oi,useRef:fd,useState:function(){return Oi(Hr)},useDebugValue:ba,useDeferredValue:function(e){var n=ke();return W===null?n.memoizedState=e:xd(n,W.memoizedState,e)},useTransition:function(){var e=Oi(Hr)[0],n=ke().memoizedState;return[e,n]},useMutableSource:ad,useSyncExternalStore:ld,useId:wd,unstable_isNewReconciler:!1};function Ie(e,n){if(e&&e.defaultProps){n=U({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function wo(e,n,r,t){n=e.memoizedState,r=r(t,n),r=r==null?n:U({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var li={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var t=oe(),i=sn(e),o=je(t,i);o.payload=n,r!=null&&(o.callback=r),n=an(e,o,i),n!==null&&(De(n,e,i,t),wt(n,e,i))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var t=oe(),i=sn(e),o=je(t,i);o.tag=1,o.payload=n,r!=null&&(o.callback=r),n=an(e,o,i),n!==null&&(De(n,e,i,t),wt(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=oe(),t=sn(e),i=je(r,t);i.tag=2,n!=null&&(i.callback=n),n=an(e,i,t),n!==null&&(De(n,e,t,r),wt(n,e,t))}};function wl(e,n,r,t,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,o,a):n.prototype&&n.prototype.isPureReactComponent?!$r(r,t)||!$r(i,o):!0}function Cd(e,n,r){var t=!1,i=cn,o=n.contextType;return typeof o=="object"&&o!==null?o=Se(o):(i=ce(n)?kn:te.current,t=n.contextTypes,o=(t=t!=null)?Yn(e,i):cn),n=new n(r,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=li,e.stateNode=n,n._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function El(e,n,r,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,t),n.state!==e&&li.enqueueReplaceState(n,n.state,null)}function Eo(e,n,r,t){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},ca(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Se(o):(o=ce(n)?kn:te.current,i.context=Yn(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(wo(e,n,o,r),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&li.enqueueReplaceState(i,i.state,null),Vt(e,r,i,t),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,n){try{var r="",t=n;do r+=Du(t),t=t.return;while(t);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Ui(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function So(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var ip=typeof WeakMap=="function"?WeakMap:Map;function Ad(e,n,r){r=je(-1,r),r.tag=3,r.payload={element:null};var t=n.value;return r.callback=function(){Xt||(Xt=!0,Mo=t),So(e,n)},r}function Id(e,n,r){r=je(-1,r),r.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var i=n.value;r.payload=function(){return t(i)},r.callback=function(){So(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){So(e,n),typeof t!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),r}function Sl(e,n,r){var t=e.pingCache;if(t===null){t=e.pingCache=new ip;var i=new Set;t.set(n,i)}else i=t.get(n),i===void 0&&(i=new Set,t.set(n,i));i.has(r)||(i.add(r),e=yp.bind(null,e,n,r),n.then(e,e))}function kl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Cl(e,n,r,t,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=je(-1,1),n.tag=2,an(r,n,1))),r.lanes|=1),e)}var op=qe.ReactCurrentOwner,de=!1;function ie(e,n,r,t){n.child=e===null?rd(n,null,r,t):Jn(n,e.child,r,t)}function Al(e,n,r,t,i){r=r.render;var o=n.ref;return Gn(n,i),t=ga(e,n,r,t,o,i),r=ha(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,We(e,n,i)):(z&&r&&ia(n),n.flags|=1,ie(e,n,t,i),n.child)}function Il(e,n,r,t,i){if(e===null){var o=r.type;return typeof o=="function"&&!Ia(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=o,Bd(e,n,o,t,i)):(e=It(r.type,null,t,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:$r,r(a,t)&&e.ref===n.ref)return We(e,n,i)}return n.flags|=1,e=dn(o,t),e.ref=n.ref,e.return=n,n.child=e}function Bd(e,n,r,t,i){if(e!==null){var o=e.memoizedProps;if($r(o,t)&&e.ref===n.ref)if(de=!1,n.pendingProps=t=o,(e.lanes&i)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,We(e,n,i)}return ko(e,n,r,t,i)}function Td(e,n,r){var t=n.pendingProps,i=t.children,o=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Hn,fe),fe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,M(Hn,fe),fe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=o!==null?o.baseLanes:r,M(Hn,fe),fe|=t}else o!==null?(t=o.baseLanes|r,n.memoizedState=null):t=r,M(Hn,fe),fe|=t;return ie(e,n,i,r),n.child}function Pd(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function ko(e,n,r,t,i){var o=ce(r)?kn:te.current;return o=Yn(n,o),Gn(n,i),r=ga(e,n,r,t,o,i),t=ha(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,We(e,n,i)):(z&&t&&ia(n),n.flags|=1,ie(e,n,r,i),n.child)}function Bl(e,n,r,t,i){if(ce(r)){var o=!0;Ot(n)}else o=!1;if(Gn(n,i),n.stateNode===null)kt(e,n),Cd(n,r,t),Eo(n,r,t,i),t=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=Se(u):(u=ce(r)?kn:te.current,u=Yn(n,u));var m=r.getDerivedStateFromProps,v=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==t||s!==u)&&El(n,a,t,u),Ke=!1;var f=n.memoizedState;a.state=f,Vt(n,t,a,i),s=n.memoizedState,l!==t||f!==s||ue.current||Ke?(typeof m=="function"&&(wo(n,r,m,t),s=n.memoizedState),(l=Ke||wl(n,r,l,t,f,s,u))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=s),a.props=t,a.state=s,a.context=u,t=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{a=n.stateNode,id(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:Ie(n.type,l),a.props=u,v=n.pendingProps,f=a.context,s=r.contextType,typeof s=="object"&&s!==null?s=Se(s):(s=ce(r)?kn:te.current,s=Yn(n,s));var y=r.getDerivedStateFromProps;(m=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==v||f!==s)&&El(n,a,t,s),Ke=!1,f=n.memoizedState,a.state=f,Vt(n,t,a,i);var b=n.memoizedState;l!==v||f!==b||ue.current||Ke?(typeof y=="function"&&(wo(n,r,y,t),b=n.memoizedState),(u=Ke||wl(n,r,u,t,f,b,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(t,b,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(t,b,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=b),a.props=t,a.state=b,a.context=s,t=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),t=!1)}return Co(e,n,r,t,o,i)}function Co(e,n,r,t,i,o){Pd(e,n);var a=(n.flags&128)!==0;if(!t&&!a)return i&&fl(n,r,!1),We(e,n,o);t=n.stateNode,op.current=n;var l=a&&typeof r.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,e!==null&&a?(n.child=Jn(n,e.child,null,o),n.child=Jn(n,null,l,o)):ie(e,n,l,o),n.memoizedState=t.state,i&&fl(n,r,!0),n.child}function Dd(e){var n=e.stateNode;n.pendingContext?pl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&pl(e,n.context,!1),pa(e,n.containerInfo)}function Tl(e,n,r,t,i){return Zn(),aa(i),n.flags|=256,ie(e,n,r,t),n.child}var Ao={dehydrated:null,treeContext:null,retryLane:0};function Io(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rd(e,n,r){var t=n.pendingProps,i=_.current,o=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),M(_,i&1),e===null)return bo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=t.children,e=t.fallback,o?(t=n.mode,o=n.child,a={mode:"hidden",children:a},!(t&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ui(a,t,0,null),e=Sn(e,t,r,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Io(r),n.memoizedState=Ao,e):xa(n,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ap(e,n,a,t,l,i,r);if(o){o=t.fallback,a=n.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:t.children};return!(a&1)&&n.child!==i?(t=n.child,t.childLanes=0,t.pendingProps=s,n.deletions=null):(t=dn(i,s),t.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=dn(l,o):(o=Sn(o,a,r,null),o.flags|=2),o.return=n,t.return=n,t.sibling=o,n.child=t,t=o,o=n.child,a=e.child.memoizedState,a=a===null?Io(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,n.memoizedState=Ao,t}return o=e.child,e=o.sibling,t=dn(o,{mode:"visible",children:t.children}),!(n.mode&1)&&(t.lanes=r),t.return=n,t.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=t,n.memoizedState=null,t}function xa(e,n){return n=ui({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function pt(e,n,r,t){return t!==null&&aa(t),Jn(n,e.child,null,r),e=xa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ap(e,n,r,t,i,o,a){if(r)return n.flags&256?(n.flags&=-257,t=Ui(Error(h(422))),pt(e,n,a,t)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=t.fallback,i=n.mode,t=ui({mode:"visible",children:t.children},i,0,null),o=Sn(o,i,a,null),o.flags|=2,t.return=n,o.return=n,t.sibling=o,n.child=t,n.mode&1&&Jn(n,e.child,null,a),n.child.memoizedState=Io(a),n.memoizedState=Ao,o);if(!(n.mode&1))return pt(e,n,a,null);if(i.data==="$!"){if(t=i.nextSibling&&i.nextSibling.dataset,t)var l=t.dgst;return t=l,o=Error(h(419)),t=Ui(o,t,void 0),pt(e,n,a,t)}if(l=(a&e.childLanes)!==0,de||l){if(t=K,t!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(t.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qe(e,i),De(t,e,i,-1))}return Aa(),t=Ui(Error(h(421))),pt(e,n,a,t)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=bp.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,ve=on(i.nextSibling),me=n,z=!0,Te=null,e!==null&&(be[xe++]=Ue,be[xe++]=Fe,be[xe++]=Cn,Ue=e.id,Fe=e.overflow,Cn=n),n=xa(n,t.children),n.flags|=4096,n)}function Pl(e,n,r){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),xo(e.return,n,r)}function Fi(e,n,r,t,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:r,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=t,o.tail=r,o.tailMode=i)}function Md(e,n,r){var t=n.pendingProps,i=t.revealOrder,o=t.tail;if(ie(e,n,t.children,r),t=_.current,t&2)t=t&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pl(e,r,n);else if(e.tag===19)Pl(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(M(_,t),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(r=n.child,i=null;r!==null;)e=r.alternate,e!==null&&Qt(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=n.child,n.child=null):(i=r.sibling,r.sibling=null),Fi(n,!1,i,r,o);break;case"backwards":for(r=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Qt(e)===null){n.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Fi(n,!0,r,null,o);break;case"together":Fi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function kt(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function We(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),In|=n.lanes,!(r&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(h(153));if(n.child!==null){for(e=n.child,r=dn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=dn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function lp(e,n,r){switch(n.tag){case 3:Dd(n),Zn();break;case 5:od(n);break;case 1:ce(n.type)&&Ot(n);break;case 4:pa(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,i=n.memoizedProps.value;M(jt,t._currentValue),t._currentValue=i;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(M(_,_.current&1),n.flags|=128,null):r&n.child.childLanes?Rd(e,n,r):(M(_,_.current&1),e=We(e,n,r),e!==null?e.sibling:null);M(_,_.current&1);break;case 19:if(t=(r&n.childLanes)!==0,e.flags&128){if(t)return Md(e,n,r);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(_,_.current),t)break;return null;case 22:case 23:return n.lanes=0,Td(e,n,r)}return We(e,n,r)}var Ld,Bo,Nd,$d;Ld=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Bo=function(){};Nd=function(e,n,r,t){var i=e.memoizedProps;if(i!==t){e=n.stateNode,wn(ze.current);var o=null;switch(r){case"input":i=Xi(e,i),t=Xi(e,t),o=[];break;case"select":i=U({},i,{value:void 0}),t=U({},t,{value:void 0}),o=[];break;case"textarea":i=Zi(e,i),t=Zi(e,t),o=[];break;default:typeof i.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=zt)}eo(r,t);var a;r=null;for(u in i)if(!t.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in t){var s=t[u];if(l=i!=null?i[u]:void 0,t.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(r||(r={}),r[a]=s[a])}else r||(o||(o=[]),o.push(u,r)),r=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&L("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}r&&(o=o||[]).push("style",r);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};$d=function(e,n,r,t){r!==t&&(n.flags|=4)};function vr(e,n){if(!z)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,t=0;if(n)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,t|=i.subtreeFlags&14680064,t|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=t,e.childLanes=r,n}function sp(e,n,r){var t=n.pendingProps;switch(oa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(n),null;case 1:return ce(n.type)&&_t(),ne(n),null;case 3:return t=n.stateNode,er(),N(ue),N(te),va(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ut(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Te!==null&&($o(Te),Te=null))),Bo(e,n),ne(n),null;case 5:fa(n);var i=wn(Fr.current);if(r=n.type,e!==null&&n.stateNode!=null)Nd(e,n,r,t,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(h(166));return ne(n),null}if(e=wn(ze.current),ut(n)){t=n.stateNode,r=n.type;var o=n.memoizedProps;switch(t[Ne]=n,t[Or]=o,e=(n.mode&1)!==0,r){case"dialog":L("cancel",t),L("close",t);break;case"iframe":case"object":case"embed":L("load",t);break;case"video":case"audio":for(i=0;i<br.length;i++)L(br[i],t);break;case"source":L("error",t);break;case"img":case"image":case"link":L("error",t),L("load",t);break;case"details":L("toggle",t);break;case"input":Oa(t,o),L("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!o.multiple},L("invalid",t);break;case"textarea":Fa(t,o),L("invalid",t)}eo(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?t.textContent!==l&&(o.suppressHydrationWarning!==!0&&dt(t.textContent,l,e),i=["children",l]):typeof l=="number"&&t.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&dt(t.textContent,l,e),i=["children",""+l]):Tr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&L("scroll",t)}switch(r){case"input":nt(t),Ua(t,o,!0);break;case"textarea":nt(t),ja(t);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(t.onclick=zt)}t=i,n.updateQueue=t,t!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=us(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=a.createElement(r,{is:t.is}):(e=a.createElement(r),r==="select"&&(a=e,t.multiple?a.multiple=!0:t.size&&(a.size=t.size))):e=a.createElementNS(e,r),e[Ne]=n,e[Or]=t,Ld(e,n,!1,!1),n.stateNode=e;e:{switch(a=no(r,t),r){case"dialog":L("cancel",e),L("close",e),i=t;break;case"iframe":case"object":case"embed":L("load",e),i=t;break;case"video":case"audio":for(i=0;i<br.length;i++)L(br[i],e);i=t;break;case"source":L("error",e),i=t;break;case"img":case"image":case"link":L("error",e),L("load",e),i=t;break;case"details":L("toggle",e),i=t;break;case"input":Oa(e,t),i=Xi(e,t),L("invalid",e);break;case"option":i=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},i=U({},t,{value:void 0}),L("invalid",e);break;case"textarea":Fa(e,t),i=Zi(e,t),L("invalid",e);break;default:i=t}eo(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?fs(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&cs(e,s)):o==="children"?typeof s=="string"?(r!=="textarea"||s!=="")&&Pr(e,s):typeof s=="number"&&Pr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Tr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&L("scroll",e):s!=null&&Vo(e,o,s,a))}switch(r){case"input":nt(e),Ua(e,t,!1);break;case"textarea":nt(e),ja(e);break;case"option":t.value!=null&&e.setAttribute("value",""+un(t.value));break;case"select":e.multiple=!!t.multiple,o=t.value,o!=null?Vn(e,!!t.multiple,o,!1):t.defaultValue!=null&&Vn(e,!!t.multiple,t.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zt)}switch(r){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ne(n),null;case 6:if(e&&n.stateNode!=null)$d(e,n,e.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(h(166));if(r=wn(Fr.current),wn(ze.current),ut(n)){if(t=n.stateNode,r=n.memoizedProps,t[Ne]=n,(o=t.nodeValue!==r)&&(e=me,e!==null))switch(e.tag){case 3:dt(t.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dt(t.nodeValue,r,(e.mode&1)!==0)}o&&(n.flags|=4)}else t=(r.nodeType===9?r:r.ownerDocument).createTextNode(t),t[Ne]=n,n.stateNode=t}return ne(n),null;case 13:if(N(_),t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&ve!==null&&n.mode&1&&!(n.flags&128))ed(),Zn(),n.flags|=98560,o=!1;else if(o=ut(n),t!==null&&t.dehydrated!==null){if(e===null){if(!o)throw Error(h(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(h(317));o[Ne]=n}else Zn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ne(n),o=!1}else Te!==null&&($o(Te),Te=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=r,n):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(n.child.flags|=8192,n.mode&1&&(e===null||_.current&1?q===0&&(q=3):Aa())),n.updateQueue!==null&&(n.flags|=4),ne(n),null);case 4:return er(),Bo(e,n),e===null&&zr(n.stateNode.containerInfo),ne(n),null;case 10:return da(n.type._context),ne(n),null;case 17:return ce(n.type)&&_t(),ne(n),null;case 19:if(N(_),o=n.memoizedState,o===null)return ne(n),null;if(t=(n.flags&128)!==0,a=o.rendering,a===null)if(t)vr(o,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Qt(e),a!==null){for(n.flags|=128,vr(o,!1),t=a.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=r,r=n.child;r!==null;)o=r,e=t,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return M(_,_.current&1|2),n.child}e=e.sibling}o.tail!==null&&V()>rr&&(n.flags|=128,t=!0,vr(o,!1),n.lanes=4194304)}else{if(!t)if(e=Qt(a),e!==null){if(n.flags|=128,t=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),vr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!z)return ne(n),null}else 2*V()-o.renderingStartTime>rr&&r!==1073741824&&(n.flags|=128,t=!0,vr(o,!1),n.lanes=4194304);o.isBackwards?(a.sibling=n.child,n.child=a):(r=o.last,r!==null?r.sibling=a:n.child=a,o.last=a)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=V(),n.sibling=null,r=_.current,M(_,t?r&1|2:r&1),n):(ne(n),null);case 22:case 23:return Ca(),t=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(n.flags|=8192),t&&n.mode&1?fe&1073741824&&(ne(n),n.subtreeFlags&6&&(n.flags|=8192)):ne(n),null;case 24:return null;case 25:return null}throw Error(h(156,n.tag))}function dp(e,n){switch(oa(n),n.tag){case 1:return ce(n.type)&&_t(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return er(),N(ue),N(te),va(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return fa(n),null;case 13:if(N(_),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(h(340));Zn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return N(_),null;case 4:return er(),null;case 10:return da(n.type._context),null;case 22:case 23:return Ca(),null;case 24:return null;default:return null}}var ft=!1,re=!1,up=typeof WeakSet=="function"?WeakSet:Set,w=null;function jn(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(t){F(e,n,t)}else r.current=null}function To(e,n,r){try{r()}catch(t){F(e,n,t)}}var Dl=!1;function cp(e,n){if(po=Lt,e=Fs(),ta(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var t=r.getSelection&&r.getSelection();if(t&&t.rangeCount!==0){r=t.anchorNode;var i=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,l=-1,s=-1,u=0,m=0,v=e,f=null;n:for(;;){for(var y;v!==r||i!==0&&v.nodeType!==3||(l=a+i),v!==o||t!==0&&v.nodeType!==3||(s=a+t),v.nodeType===3&&(a+=v.nodeValue.length),(y=v.firstChild)!==null;)f=v,v=y;for(;;){if(v===e)break n;if(f===r&&++u===i&&(l=a),f===o&&++m===t&&(s=a),(y=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=y}r=l===-1||s===-1?null:{start:l,end:s}}else r=null}r=r||{start:0,end:0}}else r=null;for(fo={focusedElem:e,selectionRange:r},Lt=!1,w=n;w!==null;)if(n=w,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,w=e;else for(;w!==null;){n=w;try{var b=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var x=b.memoizedProps,$=b.memoizedState,c=n.stateNode,d=c.getSnapshotBeforeUpdate(n.elementType===n.type?x:Ie(n.type,x),$);c.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(g){F(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,w=e;break}w=n.return}return b=Dl,Dl=!1,b}function Ar(e,n,r){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&To(n,r,o)}i=i.next}while(i!==t)}}function si(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var t=r.create;r.destroy=t()}r=r.next}while(r!==n)}}function Po(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function zd(e){var n=e.alternate;n!==null&&(e.alternate=null,zd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ne],delete n[Or],delete n[go],delete n[qc],delete n[Gc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _d(e){return e.tag===5||e.tag===3||e.tag===4}function Rl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Do(e,n,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=zt));else if(t!==4&&(e=e.child,e!==null))for(Do(e,n,r),e=e.sibling;e!==null;)Do(e,n,r),e=e.sibling}function Ro(e,n,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(Ro(e,n,r),e=e.sibling;e!==null;)Ro(e,n,r),e=e.sibling}var Y=null,Be=!1;function Ge(e,n,r){for(r=r.child;r!==null;)Od(e,n,r),r=r.sibling}function Od(e,n,r){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(ei,r)}catch{}switch(r.tag){case 5:re||jn(r,n);case 6:var t=Y,i=Be;Y=null,Ge(e,n,r),Y=t,Be=i,Y!==null&&(Be?(e=Y,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Y.removeChild(r.stateNode));break;case 18:Y!==null&&(Be?(e=Y,r=r.stateNode,e.nodeType===8?Li(e.parentNode,r):e.nodeType===1&&Li(e,r),Lr(e)):Li(Y,r.stateNode));break;case 4:t=Y,i=Be,Y=r.stateNode.containerInfo,Be=!0,Ge(e,n,r),Y=t,Be=i;break;case 0:case 11:case 14:case 15:if(!re&&(t=r.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){i=t=t.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&To(r,n,a),i=i.next}while(i!==t)}Ge(e,n,r);break;case 1:if(!re&&(jn(r,n),t=r.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=r.memoizedProps,t.state=r.memoizedState,t.componentWillUnmount()}catch(l){F(r,n,l)}Ge(e,n,r);break;case 21:Ge(e,n,r);break;case 22:r.mode&1?(re=(t=re)||r.memoizedState!==null,Ge(e,n,r),re=t):Ge(e,n,r);break;default:Ge(e,n,r)}}function Ml(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new up),n.forEach(function(t){var i=xp.bind(null,e,t);r.has(t)||(r.add(t),t.then(i,i))})}}function Ae(e,n){var r=n.deletions;if(r!==null)for(var t=0;t<r.length;t++){var i=r[t];try{var o=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:Y=l.stateNode,Be=!1;break e;case 3:Y=l.stateNode.containerInfo,Be=!0;break e;case 4:Y=l.stateNode.containerInfo,Be=!0;break e}l=l.return}if(Y===null)throw Error(h(160));Od(o,a,i),Y=null,Be=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){F(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ud(n,e),n=n.sibling}function Ud(e,n){var r=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(n,e),Me(e),t&4){try{Ar(3,e,e.return),si(3,e)}catch(x){F(e,e.return,x)}try{Ar(5,e,e.return)}catch(x){F(e,e.return,x)}}break;case 1:Ae(n,e),Me(e),t&512&&r!==null&&jn(r,r.return);break;case 5:if(Ae(n,e),Me(e),t&512&&r!==null&&jn(r,r.return),e.flags&32){var i=e.stateNode;try{Pr(i,"")}catch(x){F(e,e.return,x)}}if(t&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ss(i,o),no(l,a);var u=no(l,o);for(a=0;a<s.length;a+=2){var m=s[a],v=s[a+1];m==="style"?fs(i,v):m==="dangerouslySetInnerHTML"?cs(i,v):m==="children"?Pr(i,v):Vo(i,m,v,u)}switch(l){case"input":Ki(i,o);break;case"textarea":ds(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Vn(i,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?Vn(i,!!o.multiple,o.defaultValue,!0):Vn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Or]=o}catch(x){F(e,e.return,x)}}break;case 6:if(Ae(n,e),Me(e),t&4){if(e.stateNode===null)throw Error(h(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){F(e,e.return,x)}}break;case 3:if(Ae(n,e),Me(e),t&4&&r!==null&&r.memoizedState.isDehydrated)try{Lr(n.containerInfo)}catch(x){F(e,e.return,x)}break;case 4:Ae(n,e),Me(e);break;case 13:Ae(n,e),Me(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Sa=V())),t&4&&Ml(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(re=(u=re)||m,Ae(n,e),re=u):Ae(n,e),Me(e),t&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(w=e,m=e.child;m!==null;){for(v=w=m;w!==null;){switch(f=w,y=f.child,f.tag){case 0:case 11:case 14:case 15:Ar(4,f,f.return);break;case 1:jn(f,f.return);var b=f.stateNode;if(typeof b.componentWillUnmount=="function"){t=f,r=f.return;try{n=t,b.props=n.memoizedProps,b.state=n.memoizedState,b.componentWillUnmount()}catch(x){F(t,r,x)}}break;case 5:jn(f,f.return);break;case 22:if(f.memoizedState!==null){Nl(v);continue}}y!==null?(y.return=f,w=y):Nl(v)}m=m.sibling}e:for(m=null,v=e;;){if(v.tag===5){if(m===null){m=v;try{i=v.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=v.stateNode,s=v.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ps("display",a))}catch(x){F(e,e.return,x)}}}else if(v.tag===6){if(m===null)try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(x){F(e,e.return,x)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;m===v&&(m=null),v=v.return}m===v&&(m=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ae(n,e),Me(e),t&4&&Ml(e);break;case 21:break;default:Ae(n,e),Me(e)}}function Me(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(_d(r)){var t=r;break e}r=r.return}throw Error(h(160))}switch(t.tag){case 5:var i=t.stateNode;t.flags&32&&(Pr(i,""),t.flags&=-33);var o=Rl(e);Ro(e,o,i);break;case 3:case 4:var a=t.stateNode.containerInfo,l=Rl(e);Do(e,l,a);break;default:throw Error(h(161))}}catch(s){F(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pp(e,n,r){w=e,Fd(e)}function Fd(e,n,r){for(var t=(e.mode&1)!==0;w!==null;){var i=w,o=i.child;if(i.tag===22&&t){var a=i.memoizedState!==null||ft;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||re;l=ft;var u=re;if(ft=a,(re=s)&&!u)for(w=i;w!==null;)a=w,s=a.child,a.tag===22&&a.memoizedState!==null?$l(i):s!==null?(s.return=a,w=s):$l(i);for(;o!==null;)w=o,Fd(o),o=o.sibling;w=i,ft=l,re=u}Ll(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,w=o):Ll(e)}}function Ll(e){for(;w!==null;){var n=w;if(n.flags&8772){var r=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||si(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!re)if(r===null)t.componentDidMount();else{var i=n.elementType===n.type?r.memoizedProps:Ie(n.type,r.memoizedProps);t.componentDidUpdate(i,r.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&yl(n,o,t);break;case 3:var a=n.updateQueue;if(a!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}yl(n,a,r)}break;case 5:var l=n.stateNode;if(r===null&&n.flags&4){r=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break;case"img":s.src&&(r.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var v=m.dehydrated;v!==null&&Lr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}re||n.flags&512&&Po(n)}catch(f){F(n,n.return,f)}}if(n===e){w=null;break}if(r=n.sibling,r!==null){r.return=n.return,w=r;break}w=n.return}}function Nl(e){for(;w!==null;){var n=w;if(n===e){w=null;break}var r=n.sibling;if(r!==null){r.return=n.return,w=r;break}w=n.return}}function $l(e){for(;w!==null;){var n=w;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{si(4,n)}catch(s){F(n,r,s)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var i=n.return;try{t.componentDidMount()}catch(s){F(n,i,s)}}var o=n.return;try{Po(n)}catch(s){F(n,o,s)}break;case 5:var a=n.return;try{Po(n)}catch(s){F(n,a,s)}}}catch(s){F(n,n.return,s)}if(n===e){w=null;break}var l=n.sibling;if(l!==null){l.return=n.return,w=l;break}w=n.return}}var fp=Math.ceil,Gt=qe.ReactCurrentDispatcher,wa=qe.ReactCurrentOwner,Ee=qe.ReactCurrentBatchConfig,D=0,K=null,Q=null,Z=0,fe=0,Hn=fn(0),q=0,Qr=null,In=0,di=0,Ea=0,Ir=null,se=null,Sa=0,rr=1/0,_e=null,Xt=!1,Mo=null,ln=null,vt=!1,en=null,Kt=0,Br=0,Lo=null,Ct=-1,At=0;function oe(){return D&6?V():Ct!==-1?Ct:Ct=V()}function sn(e){return e.mode&1?D&2&&Z!==0?Z&-Z:Kc.transition!==null?(At===0&&(At=Cs()),At):(e=R,e!==0||(e=window.event,e=e===void 0?16:Rs(e.type)),e):1}function De(e,n,r,t){if(50<Br)throw Br=0,Lo=null,Error(h(185));qr(e,r,t),(!(D&2)||e!==K)&&(e===K&&(!(D&2)&&(di|=r),q===4&&Ze(e,Z)),pe(e,t),r===1&&D===0&&!(n.mode&1)&&(rr=V()+500,oi&&vn()))}function pe(e,n){var r=e.callbackNode;Ku(e,n);var t=Mt(e,e===K?Z:0);if(t===0)r!==null&&Qa(r),e.callbackNode=null,e.callbackPriority=0;else if(n=t&-t,e.callbackPriority!==n){if(r!=null&&Qa(r),n===1)e.tag===0?Xc(zl.bind(null,e)):Ys(zl.bind(null,e)),Qc(function(){!(D&6)&&vn()}),r=null;else{switch(As(t)){case 1:r=Xo;break;case 4:r=Ss;break;case 16:r=Rt;break;case 536870912:r=ks;break;default:r=Rt}r=Xd(r,jd.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function jd(e,n){if(Ct=-1,At=0,D&6)throw Error(h(327));var r=e.callbackNode;if(Xn()&&e.callbackNode!==r)return null;var t=Mt(e,e===K?Z:0);if(t===0)return null;if(t&30||t&e.expiredLanes||n)n=Yt(e,t);else{n=t;var i=D;D|=2;var o=Vd();(K!==e||Z!==n)&&(_e=null,rr=V()+500,En(e,n));do try{gp();break}catch(l){Hd(e,l)}while(!0);sa(),Gt.current=o,D=i,Q!==null?n=0:(K=null,Z=0,n=q)}if(n!==0){if(n===2&&(i=ao(e),i!==0&&(t=i,n=No(e,i))),n===1)throw r=Qr,En(e,0),Ze(e,t),pe(e,V()),r;if(n===6)Ze(e,t);else{if(i=e.current.alternate,!(t&30)&&!vp(i)&&(n=Yt(e,t),n===2&&(o=ao(e),o!==0&&(t=o,n=No(e,o))),n===1))throw r=Qr,En(e,0),Ze(e,t),pe(e,V()),r;switch(e.finishedWork=i,e.finishedLanes=t,n){case 0:case 1:throw Error(h(345));case 2:yn(e,se,_e);break;case 3:if(Ze(e,t),(t&130023424)===t&&(n=Sa+500-V(),10<n)){if(Mt(e,0)!==0)break;if(i=e.suspendedLanes,(i&t)!==t){oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=mo(yn.bind(null,e,se,_e),n);break}yn(e,se,_e);break;case 4:if(Ze(e,t),(t&4194240)===t)break;for(n=e.eventTimes,i=-1;0<t;){var a=31-Pe(t);o=1<<a,a=n[a],a>i&&(i=a),t&=~o}if(t=i,t=V()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*fp(t/1960))-t,10<t){e.timeoutHandle=mo(yn.bind(null,e,se,_e),t);break}yn(e,se,_e);break;case 5:yn(e,se,_e);break;default:throw Error(h(329))}}}return pe(e,V()),e.callbackNode===r?jd.bind(null,e):null}function No(e,n){var r=Ir;return e.current.memoizedState.isDehydrated&&(En(e,n).flags|=256),e=Yt(e,n),e!==2&&(n=se,se=r,n!==null&&$o(n)),e}function $o(e){se===null?se=e:se.push.apply(se,e)}function vp(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var t=0;t<r.length;t++){var i=r[t],o=i.getSnapshot;i=i.value;try{if(!Re(o(),i))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ze(e,n){for(n&=~Ea,n&=~di,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-Pe(n),t=1<<r;e[r]=-1,n&=~t}}function zl(e){if(D&6)throw Error(h(327));Xn();var n=Mt(e,0);if(!(n&1))return pe(e,V()),null;var r=Yt(e,n);if(e.tag!==0&&r===2){var t=ao(e);t!==0&&(n=t,r=No(e,t))}if(r===1)throw r=Qr,En(e,0),Ze(e,n),pe(e,V()),r;if(r===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,yn(e,se,_e),pe(e,V()),null}function ka(e,n){var r=D;D|=1;try{return e(n)}finally{D=r,D===0&&(rr=V()+500,oi&&vn())}}function Bn(e){en!==null&&en.tag===0&&!(D&6)&&Xn();var n=D;D|=1;var r=Ee.transition,t=R;try{if(Ee.transition=null,R=1,e)return e()}finally{R=t,Ee.transition=r,D=n,!(D&6)&&vn()}}function Ca(){fe=Hn.current,N(Hn)}function En(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Vc(r)),Q!==null)for(r=Q.return;r!==null;){var t=r;switch(oa(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&_t();break;case 3:er(),N(ue),N(te),va();break;case 5:fa(t);break;case 4:er();break;case 13:N(_);break;case 19:N(_);break;case 10:da(t.type._context);break;case 22:case 23:Ca()}r=r.return}if(K=e,Q=e=dn(e.current,null),Z=fe=n,q=0,Qr=null,Ea=di=In=0,se=Ir=null,xn!==null){for(n=0;n<xn.length;n++)if(r=xn[n],t=r.interleaved,t!==null){r.interleaved=null;var i=t.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,t.next=a}r.pending=t}xn=null}return e}function Hd(e,n){do{var r=Q;try{if(sa(),Et.current=qt,Wt){for(var t=O.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Wt=!1}if(An=0,X=W=O=null,Cr=!1,jr=0,wa.current=null,r===null||r.return===null){q=1,Qr=n,Q=null;break}e:{var o=e,a=r.return,l=r,s=n;if(n=Z,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=l,v=m.tag;if(!(m.mode&1)&&(v===0||v===11||v===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=kl(a);if(y!==null){y.flags&=-257,Cl(y,a,l,o,n),y.mode&1&&Sl(o,u,n),n=y,s=u;var b=n.updateQueue;if(b===null){var x=new Set;x.add(s),n.updateQueue=x}else b.add(s);break e}else{if(!(n&1)){Sl(o,u,n),Aa();break e}s=Error(h(426))}}else if(z&&l.mode&1){var $=kl(a);if($!==null){!($.flags&65536)&&($.flags|=256),Cl($,a,l,o,n),aa(nr(s,l));break e}}o=s=nr(s,l),q!==4&&(q=2),Ir===null?Ir=[o]:Ir.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var c=Ad(o,s,n);hl(o,c);break e;case 1:l=s;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ln===null||!ln.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var g=Id(o,l,n);hl(o,g);break e}}o=o.return}while(o!==null)}Wd(r)}catch(E){n=E,Q===r&&r!==null&&(Q=r=r.return);continue}break}while(!0)}function Vd(){var e=Gt.current;return Gt.current=qt,e===null?qt:e}function Aa(){(q===0||q===3||q===2)&&(q=4),K===null||!(In&268435455)&&!(di&268435455)||Ze(K,Z)}function Yt(e,n){var r=D;D|=2;var t=Vd();(K!==e||Z!==n)&&(_e=null,En(e,n));do try{mp();break}catch(i){Hd(e,i)}while(!0);if(sa(),D=r,Gt.current=t,Q!==null)throw Error(h(261));return K=null,Z=0,q}function mp(){for(;Q!==null;)Qd(Q)}function gp(){for(;Q!==null&&!Fu();)Qd(Q)}function Qd(e){var n=Gd(e.alternate,e,fe);e.memoizedProps=e.pendingProps,n===null?Wd(e):Q=n,wa.current=null}function Wd(e){var n=e;do{var r=n.alternate;if(e=n.return,n.flags&32768){if(r=dp(r,n),r!==null){r.flags&=32767,Q=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Q=null;return}}else if(r=sp(r,n,fe),r!==null){Q=r;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);q===0&&(q=5)}function yn(e,n,r){var t=R,i=Ee.transition;try{Ee.transition=null,R=1,hp(e,n,r,t)}finally{Ee.transition=i,R=t}return null}function hp(e,n,r,t){do Xn();while(en!==null);if(D&6)throw Error(h(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Yu(e,o),e===K&&(Q=K=null,Z=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||vt||(vt=!0,Xd(Rt,function(){return Xn(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ee.transition,Ee.transition=null;var a=R;R=1;var l=D;D|=4,wa.current=null,cp(e,r),Ud(r,e),zc(fo),Lt=!!po,fo=po=null,e.current=r,pp(r),ju(),D=l,R=a,Ee.transition=o}else e.current=r;if(vt&&(vt=!1,en=e,Kt=i),o=e.pendingLanes,o===0&&(ln=null),Qu(r.stateNode),pe(e,V()),n!==null)for(t=e.onRecoverableError,r=0;r<n.length;r++)i=n[r],t(i.value,{componentStack:i.stack,digest:i.digest});if(Xt)throw Xt=!1,e=Mo,Mo=null,e;return Kt&1&&e.tag!==0&&Xn(),o=e.pendingLanes,o&1?e===Lo?Br++:(Br=0,Lo=e):Br=0,vn(),null}function Xn(){if(en!==null){var e=As(Kt),n=Ee.transition,r=R;try{if(Ee.transition=null,R=16>e?16:e,en===null)var t=!1;else{if(e=en,en=null,Kt=0,D&6)throw Error(h(331));var i=D;for(D|=4,w=e.current;w!==null;){var o=w,a=o.child;if(w.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(w=u;w!==null;){var m=w;switch(m.tag){case 0:case 11:case 15:Ar(8,m,o)}var v=m.child;if(v!==null)v.return=m,w=v;else for(;w!==null;){m=w;var f=m.sibling,y=m.return;if(zd(m),m===u){w=null;break}if(f!==null){f.return=y,w=f;break}w=y}}}var b=o.alternate;if(b!==null){var x=b.child;if(x!==null){b.child=null;do{var $=x.sibling;x.sibling=null,x=$}while(x!==null)}}w=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,w=a;else e:for(;w!==null;){if(o=w,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ar(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,w=c;break e}w=o.return}}var d=e.current;for(w=d;w!==null;){a=w;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,w=p;else e:for(a=d;w!==null;){if(l=w,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:si(9,l)}}catch(E){F(l,l.return,E)}if(l===a){w=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,w=g;break e}w=l.return}}if(D=i,vn(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(ei,e)}catch{}t=!0}return t}finally{R=r,Ee.transition=n}}return!1}function _l(e,n,r){n=nr(r,n),n=Ad(e,n,1),e=an(e,n,1),n=oe(),e!==null&&(qr(e,1,n),pe(e,n))}function F(e,n,r){if(e.tag===3)_l(e,e,r);else for(;n!==null;){if(n.tag===3){_l(n,e,r);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(ln===null||!ln.has(t))){e=nr(r,e),e=Id(n,e,1),n=an(n,e,1),e=oe(),n!==null&&(qr(n,1,e),pe(n,e));break}}n=n.return}}function yp(e,n,r){var t=e.pingCache;t!==null&&t.delete(n),n=oe(),e.pingedLanes|=e.suspendedLanes&r,K===e&&(Z&r)===r&&(q===4||q===3&&(Z&130023424)===Z&&500>V()-Sa?En(e,0):Ea|=r),pe(e,n)}function qd(e,n){n===0&&(e.mode&1?(n=it,it<<=1,!(it&130023424)&&(it=4194304)):n=1);var r=oe();e=Qe(e,n),e!==null&&(qr(e,n,r),pe(e,r))}function bp(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),qd(e,r)}function xp(e,n){var r=0;switch(e.tag){case 13:var t=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(h(314))}t!==null&&t.delete(n),qd(e,r)}var Gd;Gd=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||ue.current)de=!0;else{if(!(e.lanes&r)&&!(n.flags&128))return de=!1,lp(e,n,r);de=!!(e.flags&131072)}else de=!1,z&&n.flags&1048576&&Zs(n,Ft,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;kt(e,n),e=n.pendingProps;var i=Yn(n,te.current);Gn(n,r),i=ga(null,n,t,e,i,r);var o=ha();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ce(t)?(o=!0,Ot(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ca(n),i.updater=li,n.stateNode=i,i._reactInternals=n,Eo(n,t,e,r),n=Co(null,n,t,!0,o,r)):(n.tag=0,z&&o&&ia(n),ie(null,n,i,r),n=n.child),n;case 16:t=n.elementType;e:{switch(kt(e,n),e=n.pendingProps,i=t._init,t=i(t._payload),n.type=t,i=n.tag=Ep(t),e=Ie(t,e),i){case 0:n=ko(null,n,t,e,r);break e;case 1:n=Bl(null,n,t,e,r);break e;case 11:n=Al(null,n,t,e,r);break e;case 14:n=Il(null,n,t,Ie(t.type,e),r);break e}throw Error(h(306,t,""))}return n;case 0:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:Ie(t,i),ko(e,n,t,i,r);case 1:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:Ie(t,i),Bl(e,n,t,i,r);case 3:e:{if(Dd(n),e===null)throw Error(h(387));t=n.pendingProps,o=n.memoizedState,i=o.element,id(e,n),Vt(n,t,null,r);var a=n.memoizedState;if(t=a.element,o.isDehydrated)if(o={element:t,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=nr(Error(h(423)),n),n=Tl(e,n,t,r,i);break e}else if(t!==i){i=nr(Error(h(424)),n),n=Tl(e,n,t,r,i);break e}else for(ve=on(n.stateNode.containerInfo.firstChild),me=n,z=!0,Te=null,r=rd(n,null,t,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Zn(),t===i){n=We(e,n,r);break e}ie(e,n,t,r)}n=n.child}return n;case 5:return od(n),e===null&&bo(n),t=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,vo(t,i)?a=null:o!==null&&vo(t,o)&&(n.flags|=32),Pd(e,n),ie(e,n,a,r),n.child;case 6:return e===null&&bo(n),null;case 13:return Rd(e,n,r);case 4:return pa(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=Jn(n,null,t,r):ie(e,n,t,r),n.child;case 11:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:Ie(t,i),Al(e,n,t,i,r);case 7:return ie(e,n,n.pendingProps,r),n.child;case 8:return ie(e,n,n.pendingProps.children,r),n.child;case 12:return ie(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(t=n.type._context,i=n.pendingProps,o=n.memoizedProps,a=i.value,M(jt,t._currentValue),t._currentValue=a,o!==null)if(Re(o.value,a)){if(o.children===i.children&&!ue.current){n=We(e,n,r);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===t){if(o.tag===1){s=je(-1,r&-r),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),xo(o.return,r,n),l.lanes|=r;break}s=s.next}}else if(o.tag===10)a=o.type===n.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(h(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),xo(a,r,n),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===n){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ie(e,n,i.children,r),n=n.child}return n;case 9:return i=n.type,t=n.pendingProps.children,Gn(n,r),i=Se(i),t=t(i),n.flags|=1,ie(e,n,t,r),n.child;case 14:return t=n.type,i=Ie(t,n.pendingProps),i=Ie(t.type,i),Il(e,n,t,i,r);case 15:return Bd(e,n,n.type,n.pendingProps,r);case 17:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:Ie(t,i),kt(e,n),n.tag=1,ce(t)?(e=!0,Ot(n)):e=!1,Gn(n,r),Cd(n,t,i),Eo(n,t,i,r),Co(null,n,t,!0,e,r);case 19:return Md(e,n,r);case 22:return Td(e,n,r)}throw Error(h(156,n.tag))};function Xd(e,n){return Es(e,n)}function wp(e,n,r,t){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function we(e,n,r,t){return new wp(e,n,r,t)}function Ia(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ep(e){if(typeof e=="function")return Ia(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wo)return 11;if(e===qo)return 14}return 2}function dn(e,n){var r=e.alternate;return r===null?(r=we(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function It(e,n,r,t,i,o){var a=2;if(t=e,typeof e=="function")Ia(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Mn:return Sn(r.children,i,o,n);case Qo:a=8,i|=8;break;case Qi:return e=we(12,r,n,i|2),e.elementType=Qi,e.lanes=o,e;case Wi:return e=we(13,r,n,i),e.elementType=Wi,e.lanes=o,e;case qi:return e=we(19,r,n,i),e.elementType=qi,e.lanes=o,e;case os:return ui(r,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ts:a=10;break e;case is:a=9;break e;case Wo:a=11;break e;case qo:a=14;break e;case Xe:a=16,t=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return n=we(a,r,n,i),n.elementType=e,n.type=t,n.lanes=o,n}function Sn(e,n,r,t){return e=we(7,e,t,n),e.lanes=r,e}function ui(e,n,r,t){return e=we(22,e,t,n),e.elementType=os,e.lanes=r,e.stateNode={isHidden:!1},e}function ji(e,n,r){return e=we(6,e,null,n),e.lanes=r,e}function Hi(e,n,r){return n=we(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Sp(e,n,r,t,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Si(0),this.expirationTimes=Si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Si(0),this.identifierPrefix=t,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ba(e,n,r,t,i,o,a,l,s){return e=new Sp(e,n,r,l,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=we(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:t,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ca(o),e}function kp(e,n,r){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:t==null?null:""+t,children:e,containerInfo:n,implementation:r}}function Kd(e){if(!e)return cn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(h(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ce(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(h(171))}if(e.tag===1){var r=e.type;if(ce(r))return Ks(e,r,n)}return n}function Yd(e,n,r,t,i,o,a,l,s){return e=Ba(r,t,!0,e,i,o,a,l,s),e.context=Kd(null),r=e.current,t=oe(),i=sn(r),o=je(t,i),o.callback=n??null,an(r,o,i),e.current.lanes=i,qr(e,i,t),pe(e,t),e}function ci(e,n,r,t){var i=n.current,o=oe(),a=sn(i);return r=Kd(r),n.context===null?n.context=r:n.pendingContext=r,n=je(o,a),n.payload={element:e},t=t===void 0?null:t,t!==null&&(n.callback=t),e=an(i,n,a),e!==null&&(De(e,i,a,o),wt(e,i,a)),a}function Zt(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ol(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Ta(e,n){Ol(e,n),(e=e.alternate)&&Ol(e,n)}function Cp(){return null}var Zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pa(e){this._internalRoot=e}pi.prototype.render=Pa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(h(409));ci(e,n,null,null)};pi.prototype.unmount=Pa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Bn(function(){ci(null,e,null,null)}),n[Ve]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ts();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Ye.length&&n!==0&&n<Ye[r].priority;r++);Ye.splice(r,0,e),r===0&&Ds(e)}};function Da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ul(){}function Ap(e,n,r,t,i){if(i){if(typeof t=="function"){var o=t;t=function(){var u=Zt(a);o.call(u)}}var a=Yd(n,t,e,0,null,!1,!1,"",Ul);return e._reactRootContainer=a,e[Ve]=a.current,zr(e.nodeType===8?e.parentNode:e),Bn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof t=="function"){var l=t;t=function(){var u=Zt(s);l.call(u)}}var s=Ba(e,0,!1,null,null,!1,!1,"",Ul);return e._reactRootContainer=s,e[Ve]=s.current,zr(e.nodeType===8?e.parentNode:e),Bn(function(){ci(n,s,r,t)}),s}function vi(e,n,r,t,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Zt(a);l.call(s)}}ci(n,a,e,i)}else a=Ap(r,n,e,i,t);return Zt(a)}Is=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=yr(n.pendingLanes);r!==0&&(Ko(n,r|1),pe(n,V()),!(D&6)&&(rr=V()+500,vn()))}break;case 13:Bn(function(){var t=Qe(e,1);if(t!==null){var i=oe();De(t,e,1,i)}}),Ta(e,1)}};Yo=function(e){if(e.tag===13){var n=Qe(e,134217728);if(n!==null){var r=oe();De(n,e,134217728,r)}Ta(e,134217728)}};Bs=function(e){if(e.tag===13){var n=sn(e),r=Qe(e,n);if(r!==null){var t=oe();De(r,e,n,t)}Ta(e,n)}};Ts=function(){return R};Ps=function(e,n){var r=R;try{return R=e,n()}finally{R=r}};to=function(e,n,r){switch(n){case"input":if(Ki(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var t=r[n];if(t!==e&&t.form===e.form){var i=ii(t);if(!i)throw Error(h(90));ls(t),Ki(t,i)}}}break;case"textarea":ds(e,r);break;case"select":n=r.value,n!=null&&Vn(e,!!r.multiple,n,!1)}};gs=ka;hs=Bn;var Ip={usingClientEntryPoint:!1,Events:[Xr,zn,ii,vs,ms,ka]},mr={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bp={bundleType:mr.bundleType,version:mr.version,rendererPackageName:mr.rendererPackageName,rendererConfig:mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xs(e),e===null?null:e.stateNode},findFiberByHostInstance:mr.findFiberByHostInstance||Cp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mt.isDisabled&&mt.supportsFiber)try{ei=mt.inject(Bp),$e=mt}catch{}}he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip;he.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Da(n))throw Error(h(200));return kp(e,n,null,r)};he.createRoot=function(e,n){if(!Da(e))throw Error(h(299));var r=!1,t="",i=Zd;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ba(e,1,!1,null,null,r,!1,t,i),e[Ve]=n.current,zr(e.nodeType===8?e.parentNode:e),new Pa(n)};he.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=xs(n),e=e===null?null:e.stateNode,e};he.flushSync=function(e){return Bn(e)};he.hydrate=function(e,n,r){if(!fi(n))throw Error(h(200));return vi(null,e,n,!0,r)};he.hydrateRoot=function(e,n,r){if(!Da(e))throw Error(h(405));var t=r!=null&&r.hydratedSources||null,i=!1,o="",a=Zd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),n=Yd(n,null,e,1,r??null,i,!1,o,a),e[Ve]=n.current,zr(e),t)for(e=0;e<t.length;e++)r=t[e],i=r._getVersion,i=i(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,i]:n.mutableSourceEagerHydrationData.push(r,i);return new pi(n)};he.render=function(e,n,r){if(!fi(n))throw Error(h(200));return vi(null,e,n,!1,r)};he.unmountComponentAtNode=function(e){if(!fi(e))throw Error(h(40));return e._reactRootContainer?(Bn(function(){vi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ve]=null})}),!0):!1};he.unstable_batchedUpdates=ka;he.unstable_renderSubtreeIntoContainer=function(e,n,r,t){if(!fi(r))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return vi(e,n,r,!1,t)};he.version="18.3.1-next-f1338f8080-20240426";function Jd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jd)}catch(e){console.error(e)}}Jd(),Jl.exports=he;var Tp=Jl.exports,eu,Fl=Tp;eu=Fl.createRoot,Fl.hydrateRoot;const Pp=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
<meta charset="UTF-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">\r
<title>ROSHD Admin — Control Center</title>\r
<link rel="preconnect" href="https://fonts.googleapis.com">\r
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">\r
<style>\r
/* ═══════════════════════════════════════════════════════════\r
   ROOT VARIABLES\r
═══════════════════════════════════════════════════════════ */\r
:root {\r
  --bg:          #080c14;\r
  --bg2:         #0d1220;\r
  --surface:     #111827;\r
  --surface2:    #1a2236;\r
  --card:        #141e30;\r
  --card2:       #1c2840;\r
  --border:      rgba(255,255,255,0.07);\r
  --border2:     rgba(255,255,255,0.12);\r
  --gold:        #c9973a;\r
  --gold-light:  #e5b55a;\r
  --gold-dim:    rgba(201,151,58,0.18);\r
  --gold-glow:   rgba(201,151,58,0.08);\r
  --text:        rgba(255,255,255,0.92);\r
  --text-dim:    rgba(255,255,255,0.55);\r
  --text-mute:   rgba(255,255,255,0.30);\r
  --green:       #22c55e;\r
  --green-dim:   rgba(34,197,94,0.14);\r
  --red:         #ef4444;\r
  --red-dim:     rgba(239,68,68,0.14);\r
  --blue:        #3b82f6;\r
  --blue-dim:    rgba(59,130,246,0.14);\r
  --amber:       #f59e0b;\r
  --amber-dim:   rgba(245,158,11,0.14);\r
  --purple:      #8b5cf6;\r
  --purple-dim:  rgba(139,92,246,0.14);\r
  --teal:        #14b8a6;\r
  --teal-dim:    rgba(20,184,166,0.14);\r
  --sidebar-w:   256px;\r
  --topbar-h:    60px;\r
  --radius:      10px;\r
  --radius-sm:   6px;\r
  --shadow:      0 4px 24px rgba(0,0,0,0.4);\r
  --shadow-lg:   0 12px 48px rgba(0,0,0,0.55);\r
  --font-main:   'Syne', sans-serif;\r
  --font-ar:     'Cairo', sans-serif;\r
  --font-mono:   'DM Mono', monospace;\r
}\r
\r
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\r
html { scroll-behavior: smooth; }\r
\r
body {\r
  font-family: var(--font-main);\r
  background: var(--bg);\r
  color: var(--text);\r
  overflow-x: hidden;\r
  min-height: 100vh;\r
}\r
\r
body::before {\r
  content: '';\r
  position: fixed;\r
  inset: 0;\r
  background:\r
    radial-gradient(ellipse 800px 600px at 20% -10%, rgba(201,151,58,0.045) 0%, transparent 60%),\r
    radial-gradient(ellipse 600px 400px at 85% 90%, rgba(59,130,246,0.04) 0%, transparent 50%);\r
  pointer-events: none;\r
  z-index: 0;\r
}\r
\r
/* ═══════════════════════════════════════════════════════════\r
   LOGIN SCREEN\r
═══════════════════════════════════════════════════════════ */\r
#loginScreen {\r
  position: fixed;\r
  inset: 0;\r
  z-index: 9999;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  background: var(--bg);\r
  padding: 20px;\r
}\r
\r
#loginScreen::before {\r
  content: '';\r
  position: absolute;\r
  inset: 0;\r
  background:\r
    radial-gradient(ellipse 700px 500px at 30% 30%, rgba(201,151,58,0.08) 0%, transparent 65%),\r
    radial-gradient(ellipse 500px 400px at 70% 70%, rgba(59,130,246,0.06) 0%, transparent 60%);\r
}\r
\r
.login-card {\r
  position: relative;\r
  z-index: 1;\r
  width: 100%;\r
  max-width: 420px;\r
  background: var(--surface);\r
  border: 1px solid var(--border2);\r
  border-radius: 16px;\r
  overflow: hidden;\r
  box-shadow: var(--shadow-lg), 0 0 0 1px rgba(201,151,58,0.1);\r
}\r
\r
.login-header {\r
  background: linear-gradient(135deg, #0f1c3d 0%, #1a2952 100%);\r
  padding: 36px 36px 28px;\r
  position: relative;\r
  border-bottom: 1px solid rgba(201,151,58,0.2);\r
}\r
\r
.login-header::after {\r
  content: '';\r
  position: absolute;\r
  bottom: 0;\r
  left: 0;\r
  right: 0;\r
  height: 3px;\r
  background: linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold));\r
}\r
\r
.login-brand {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  margin-bottom: 24px;\r
}\r
\r
.login-brand-icon {\r
  width: 44px;\r
  height: 44px;\r
  border-radius: 10px;\r
  background: var(--gold-dim);\r
  border: 1px solid rgba(201,151,58,0.35);\r
  display: grid;\r
  place-items: center;\r
  font-size: 20px;\r
  flex-shrink: 0;\r
}\r
\r
.login-brand-text strong {\r
  display: block;\r
  font-family: var(--font-main);\r
  font-size: 16px;\r
  font-weight: 800;\r
  color: #fff;\r
  letter-spacing: 0.12em;\r
}\r
\r
.login-brand-text small {\r
  font-size: 10px;\r
  font-weight: 600;\r
  color: var(--gold);\r
  letter-spacing: 0.22em;\r
  text-transform: uppercase;\r
}\r
\r
.login-title {\r
  font-size: 26px;\r
  font-weight: 800;\r
  color: #fff;\r
  line-height: 1.2;\r
}\r
\r
.login-subtitle {\r
  font-size: 13px;\r
  color: rgba(255,255,255,0.5);\r
  margin-top: 6px;\r
}\r
\r
.login-body {\r
  padding: 32px 36px 36px;\r
}\r
\r
.login-error {\r
  background: var(--red-dim);\r
  border: 1px solid rgba(239,68,68,0.3);\r
  color: #fca5a5;\r
  padding: 10px 14px;\r
  border-radius: var(--radius-sm);\r
  font-size: 13px;\r
  margin-bottom: 20px;\r
  display: none;\r
}\r
.login-error.show { display: block; }\r
\r
.form-group { margin-bottom: 18px; }\r
\r
.form-label {\r
  display: block;\r
  font-size: 11px;\r
  font-weight: 700;\r
  letter-spacing: 0.12em;\r
  text-transform: uppercase;\r
  color: var(--text-dim);\r
  margin-bottom: 8px;\r
}\r
\r
.form-input {\r
  width: 100%;\r
  padding: 12px 16px;\r
  background: var(--bg2);\r
  border: 1px solid var(--border2);\r
  border-radius: var(--radius-sm);\r
  color: var(--text);\r
  font-family: var(--font-main);\r
  font-size: 14px;\r
  outline: none;\r
  transition: border-color 0.2s, box-shadow 0.2s;\r
}\r
.form-input:focus {\r
  border-color: var(--gold);\r
  box-shadow: 0 0 0 3px rgba(201,151,58,0.12);\r
}\r
.form-input::placeholder { color: var(--text-mute); }\r
\r
textarea.form-input { resize: vertical; min-height: 100px; }\r
\r
.pw-wrap { position: relative; }\r
.pw-wrap .form-input { padding-right: 46px; }\r
.pw-eye {\r
  position: absolute;\r
  right: 12px;\r
  top: 50%;\r
  transform: translateY(-50%);\r
  background: none;\r
  border: none;\r
  cursor: pointer;\r
  color: var(--text-dim);\r
  padding: 4px;\r
  border-radius: 4px;\r
  transition: color 0.15s;\r
}\r
.pw-eye:hover { color: var(--gold); }\r
\r
.btn {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 8px;\r
  padding: 11px 20px;\r
  border-radius: var(--radius-sm);\r
  font-family: var(--font-main);\r
  font-size: 13px;\r
  font-weight: 700;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  border: none;\r
  text-decoration: none;\r
  white-space: nowrap;\r
  letter-spacing: 0.04em;\r
  min-height: 42px;\r
}\r
\r
.btn-primary {\r
  background: var(--gold);\r
  color: #0a0f1e;\r
}\r
.btn-primary:hover { background: var(--gold-light); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(201,151,58,0.3); }\r
\r
.btn-secondary {\r
  background: var(--surface2);\r
  color: var(--text);\r
  border: 1px solid var(--border2);\r
}\r
.btn-secondary:hover { background: var(--card2); border-color: var(--gold); color: var(--gold-light); }\r
\r
.btn-danger {\r
  background: var(--red-dim);\r
  color: #fca5a5;\r
  border: 1px solid rgba(239,68,68,0.3);\r
}\r
.btn-danger:hover { background: rgba(239,68,68,0.25); }\r
\r
.btn-success {\r
  background: var(--green-dim);\r
  color: #86efac;\r
  border: 1px solid rgba(34,197,94,0.3);\r
}\r
.btn-success:hover { background: rgba(34,197,94,0.22); }\r
\r
.btn-sm { padding: 7px 14px; font-size: 12px; min-height: 34px; }\r
.btn-icon { padding: 8px; min-height: 36px; width: 36px; }\r
.btn-full { width: 100%; }\r
.btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none !important; }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   MAIN LAYOUT\r
═══════════════════════════════════════════════════════════ */\r
#adminApp {\r
  display: none;\r
  min-height: 100vh;\r
}\r
#adminApp.open { display: flex; }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   SIDEBAR\r
═══════════════════════════════════════════════════════════ */\r
.sidebar {\r
  width: var(--sidebar-w);\r
  background: var(--bg2);\r
  border-right: 1px solid var(--border);\r
  display: flex;\r
  flex-direction: column;\r
  position: fixed;\r
  top: 0; left: 0; bottom: 0;\r
  z-index: 200;\r
  transition: transform 0.3s ease;\r
  overflow-y: auto;\r
}\r
\r
.sidebar::-webkit-scrollbar { width: 3px; }\r
.sidebar::-webkit-scrollbar-thumb { background: rgba(201,151,58,0.2); border-radius: 99px; }\r
\r
.sidebar-brand {\r
  padding: 20px 20px 16px;\r
  border-bottom: 1px solid var(--border);\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  flex-shrink: 0;\r
}\r
\r
.sidebar-brand-icon {\r
  width: 40px;\r
  height: 40px;\r
  border-radius: 9px;\r
  background: var(--gold-dim);\r
  border: 1px solid rgba(201,151,58,0.3);\r
  display: grid;\r
  place-items: center;\r
  font-size: 18px;\r
  flex-shrink: 0;\r
}\r
\r
.sidebar-brand-text strong {\r
  display: block;\r
  font-size: 14px;\r
  font-weight: 800;\r
  color: #fff;\r
  letter-spacing: 0.1em;\r
}\r
\r
.sidebar-brand-text .badge-admin {\r
  display: inline-block;\r
  font-size: 9px;\r
  font-weight: 800;\r
  letter-spacing: 0.16em;\r
  text-transform: uppercase;\r
  color: var(--gold);\r
  background: var(--gold-dim);\r
  border: 1px solid rgba(201,151,58,0.25);\r
  border-radius: 4px;\r
  padding: 2px 7px;\r
  margin-top: 3px;\r
}\r
\r
.sidebar-admin-strip {\r
  padding: 14px 18px;\r
  border-bottom: 1px solid var(--border);\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  flex-shrink: 0;\r
}\r
\r
.admin-avatar {\r
  width: 36px;\r
  height: 36px;\r
  border-radius: 50%;\r
  background: linear-gradient(135deg, var(--gold), var(--gold-light));\r
  display: grid;\r
  place-items: center;\r
  font-weight: 800;\r
  color: #0a0f1e;\r
  font-size: 14px;\r
  flex-shrink: 0;\r
}\r
\r
.admin-info { overflow: hidden; }\r
.admin-name { font-size: 13px; font-weight: 700; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\r
.admin-role {\r
  font-size: 10px;\r
  color: var(--gold);\r
  font-weight: 700;\r
  letter-spacing: 0.12em;\r
  text-transform: uppercase;\r
}\r
\r
.sidebar-nav { flex: 1; padding: 12px 10px; }\r
\r
.nav-section {\r
  font-size: 9px;\r
  font-weight: 800;\r
  letter-spacing: 0.22em;\r
  text-transform: uppercase;\r
  color: var(--text-mute);\r
  padding: 12px 10px 6px;\r
}\r
\r
.nav-item {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  padding: 10px 12px;\r
  border-radius: 8px;\r
  color: var(--text-dim);\r
  font-size: 13px;\r
  font-weight: 600;\r
  cursor: pointer;\r
  transition: all 0.18s;\r
  position: relative;\r
  border: none;\r
  background: none;\r
  width: 100%;\r
  text-align: left;\r
  -webkit-tap-highlight-color: transparent;\r
  min-height: 42px;\r
  letter-spacing: 0.02em;\r
}\r
\r
.nav-item:hover { background: rgba(255,255,255,0.05); color: var(--text); }\r
\r
.nav-item.active {\r
  background: var(--gold-glow);\r
  color: var(--gold-light);\r
  border: 1px solid rgba(201,151,58,0.18);\r
}\r
\r
.nav-item.active::before {\r
  content: '';\r
  position: absolute;\r
  left: 0;\r
  top: 20%;\r
  bottom: 20%;\r
  width: 3px;\r
  background: var(--gold);\r
  border-radius: 0 99px 99px 0;\r
}\r
\r
.nav-badge {\r
  margin-left: auto;\r
  background: var(--red);\r
  color: #fff;\r
  font-size: 9px;\r
  font-weight: 800;\r
  padding: 2px 6px;\r
  border-radius: 99px;\r
  min-width: 18px;\r
  text-align: center;\r
}\r
\r
.nav-badge.gold { background: var(--gold); color: #0a0f1e; }\r
.nav-badge.green { background: var(--green); color: #fff; }\r
\r
.sidebar-footer {\r
  padding: 12px 10px;\r
  border-top: 1px solid var(--border);\r
  flex-shrink: 0;\r
}\r
\r
.logout-btn {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  width: 100%;\r
  padding: 10px 12px;\r
  border-radius: 8px;\r
  background: none;\r
  border: none;\r
  color: rgba(239,68,68,0.65);\r
  font-size: 13px;\r
  font-weight: 600;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
}\r
.logout-btn:hover { background: var(--red-dim); color: #fca5a5; }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   MAIN AREA\r
═══════════════════════════════════════════════════════════ */\r
.main {\r
  margin-left: var(--sidebar-w);\r
  flex: 1;\r
  display: flex;\r
  flex-direction: column;\r
  min-height: 100vh;\r
  min-width: 0;\r
}\r
\r
/* ═══════════════════════════════════════════════════════════\r
   TOPBAR\r
═══════════════════════════════════════════════════════════ */\r
.topbar {\r
  height: var(--topbar-h);\r
  background: var(--bg2);\r
  border-bottom: 1px solid var(--border);\r
  padding: 0 28px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  position: sticky;\r
  top: 0;\r
  z-index: 100;\r
  gap: 16px;\r
}\r
\r
.topbar-left { display: flex; align-items: center; gap: 14px; min-width: 0; }\r
\r
.topbar-menu-btn {\r
  display: none;\r
  width: 38px;\r
  height: 38px;\r
  border-radius: 8px;\r
  border: 1px solid var(--border2);\r
  background: var(--surface);\r
  align-items: center;\r
  justify-content: center;\r
  cursor: pointer;\r
  color: var(--text-dim);\r
  transition: all 0.2s;\r
  flex-shrink: 0;\r
}\r
.topbar-menu-btn:hover { border-color: var(--gold); color: var(--gold-light); }\r
\r
.topbar-title { font-size: 17px; font-weight: 800; color: var(--text); }\r
.topbar-breadcrumb { font-size: 11px; color: var(--text-mute); margin-top: 1px; }\r
.topbar-breadcrumb span { color: var(--gold); }\r
\r
.topbar-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }\r
\r
.topbar-search {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  background: var(--surface);\r
  border: 1px solid var(--border2);\r
  border-radius: var(--radius-sm);\r
  padding: 7px 14px;\r
  transition: border-color 0.2s, box-shadow 0.2s;\r
}\r
.topbar-search:focus-within { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,151,58,0.1); }\r
.topbar-search input {\r
  background: none;\r
  border: none;\r
  outline: none;\r
  color: var(--text);\r
  font-family: var(--font-main);\r
  font-size: 13px;\r
  width: 180px;\r
}\r
.topbar-search input::placeholder { color: var(--text-mute); }\r
\r
.topbar-icon-btn {\r
  width: 36px;\r
  height: 36px;\r
  border-radius: 8px;\r
  border: 1px solid var(--border2);\r
  background: var(--surface);\r
  display: grid;\r
  place-items: center;\r
  cursor: pointer;\r
  color: var(--text-dim);\r
  transition: all 0.2s;\r
  position: relative;\r
}\r
.topbar-icon-btn:hover { border-color: var(--gold); color: var(--gold-light); }\r
\r
.notif-dot {\r
  position: absolute;\r
  top: 6px;\r
  right: 6px;\r
  width: 7px;\r
  height: 7px;\r
  border-radius: 50%;\r
  background: var(--red);\r
  border: 1.5px solid var(--bg2);\r
}\r
\r
.status-pill {\r
  display: flex;\r
  align-items: center;\r
  gap: 7px;\r
  background: var(--green-dim);\r
  border: 1px solid rgba(34,197,94,0.25);\r
  color: #86efac;\r
  padding: 6px 14px;\r
  border-radius: 99px;\r
  font-size: 11px;\r
  font-weight: 700;\r
  letter-spacing: 0.06em;\r
}\r
\r
.status-dot {\r
  width: 6px;\r
  height: 6px;\r
  border-radius: 50%;\r
  background: var(--green);\r
  animation: pulse-dot 2s ease-in-out infinite;\r
}\r
@keyframes pulse-dot { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   CONTENT AREA\r
═══════════════════════════════════════════════════════════ */\r
.content {\r
  flex: 1;\r
  padding: 28px;\r
  position: relative;\r
  z-index: 1;\r
  overflow-x: hidden;\r
}\r
\r
.panel { display: none; animation: panelIn 0.3s ease; }\r
.panel.active { display: block; }\r
@keyframes panelIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   PAGE HEADERS\r
═══════════════════════════════════════════════════════════ */\r
.page-header {\r
  display: flex;\r
  align-items: flex-start;\r
  justify-content: space-between;\r
  gap: 20px;\r
  margin-bottom: 28px;\r
  flex-wrap: wrap;\r
}\r
\r
.page-header-left {}\r
.page-eyebrow { font-size: 10px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); margin-bottom: 6px; }\r
.page-title { font-size: 22px; font-weight: 800; color: var(--text); }\r
.page-subtitle { font-size: 13px; color: var(--text-dim); margin-top: 4px; }\r
.page-header-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   STAT CARDS\r
═══════════════════════════════════════════════════════════ */\r
.stat-grid {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r
  gap: 16px;\r
  margin-bottom: 24px;\r
}\r
\r
.stat-card {\r
  background: var(--card);\r
  border: 1px solid var(--border);\r
  border-radius: var(--radius);\r
  padding: 20px 22px;\r
  position: relative;\r
  overflow: hidden;\r
  transition: all 0.22s;\r
}\r
.stat-card:hover { transform: translateY(-2px); border-color: var(--border2); box-shadow: var(--shadow); }\r
.stat-card::after {\r
  content: '';\r
  position: absolute;\r
  top: 0; left: 0; right: 0;\r
  height: 2px;\r
  background: var(--accent, var(--gold));\r
}\r
\r
.stat-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }\r
.stat-icon {\r
  width: 36px;\r
  height: 36px;\r
  border-radius: 8px;\r
  display: grid;\r
  place-items: center;\r
  background: var(--icon-bg, var(--gold-dim));\r
}\r
\r
.stat-trend {\r
  font-size: 11px;\r
  font-weight: 700;\r
  display: flex;\r
  align-items: center;\r
  gap: 3px;\r
}\r
.stat-trend.up { color: var(--green); }\r
.stat-trend.down { color: var(--red); }\r
.stat-trend.neutral { color: var(--text-dim); }\r
\r
.stat-value { font-size: 28px; font-weight: 800; color: var(--text); line-height: 1.1; margin-bottom: 4px; font-variant-numeric: tabular-nums; }\r
.stat-label { font-size: 11px; color: var(--text-dim); letter-spacing: 0.06em; font-weight: 600; }\r
.stat-sub { font-size: 11px; color: var(--text-mute); margin-top: 6px; }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   CARDS\r
═══════════════════════════════════════════════════════════ */\r
.card {\r
  background: var(--card);\r
  border: 1px solid var(--border);\r
  border-radius: var(--radius);\r
  overflow: hidden;\r
  margin-bottom: 20px;\r
}\r
\r
.card-header {\r
  padding: 16px 22px;\r
  border-bottom: 1px solid var(--border);\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 12px;\r
  flex-wrap: wrap;\r
}\r
\r
.card-title { font-size: 15px; font-weight: 700; color: var(--text); }\r
.card-subtitle { font-size: 11px; color: var(--text-dim); margin-top: 2px; }\r
.card-actions { display: flex; align-items: center; gap: 8px; }\r
\r
.card-body { padding: 22px; }\r
.card-body-sm { padding: 16px 18px; }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   TABLES\r
═══════════════════════════════════════════════════════════ */\r
.table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }\r
\r
table.data-table {\r
  width: 100%;\r
  border-collapse: collapse;\r
  font-size: 13px;\r
  min-width: 600px;\r
}\r
\r
table.data-table thead tr { border-bottom: 1px solid var(--border2); }\r
\r
table.data-table th {\r
  padding: 10px 14px;\r
  text-align: left;\r
  font-size: 10px;\r
  font-weight: 800;\r
  letter-spacing: 0.12em;\r
  text-transform: uppercase;\r
  color: var(--text-mute);\r
  background: rgba(255,255,255,0.02);\r
  white-space: nowrap;\r
  cursor: pointer;\r
  user-select: none;\r
  transition: color 0.15s;\r
}\r
table.data-table th:hover { color: var(--gold-light); }\r
table.data-table th .sort-icon { opacity: 0.4; margin-left: 4px; }\r
table.data-table th.sorted { color: var(--gold); }\r
table.data-table th.sorted .sort-icon { opacity: 1; }\r
\r
table.data-table td {\r
  padding: 13px 14px;\r
  border-bottom: 1px solid rgba(255,255,255,0.035);\r
  color: var(--text);\r
  vertical-align: middle;\r
}\r
\r
table.data-table tbody tr { transition: background 0.15s; }\r
table.data-table tbody tr:hover td { background: rgba(255,255,255,0.025); }\r
table.data-table tbody tr:last-child td { border-bottom: none; }\r
\r
.table-pagination {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 14px 22px;\r
  border-top: 1px solid var(--border);\r
  gap: 12px;\r
  flex-wrap: wrap;\r
}\r
\r
.pagination-info { font-size: 12px; color: var(--text-dim); }\r
.pagination-btns { display: flex; align-items: center; gap: 6px; }\r
.page-btn {\r
  min-width: 32px;\r
  height: 32px;\r
  border-radius: 6px;\r
  border: 1px solid var(--border2);\r
  background: var(--surface);\r
  color: var(--text-dim);\r
  font-size: 12px;\r
  font-family: var(--font-main);\r
  font-weight: 600;\r
  cursor: pointer;\r
  transition: all 0.15s;\r
  display: grid;\r
  place-items: center;\r
  padding: 0 8px;\r
}\r
.page-btn:hover { border-color: var(--gold); color: var(--gold-light); }\r
.page-btn.active { background: var(--gold); color: #0a0f1e; border-color: var(--gold); }\r
.page-btn:disabled { opacity: 0.35; cursor: not-allowed; }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   BADGES / CHIPS\r
═══════════════════════════════════════════════════════════ */\r
.badge {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 5px;\r
  padding: 3px 9px;\r
  border-radius: 99px;\r
  font-size: 11px;\r
  font-weight: 700;\r
  letter-spacing: 0.04em;\r
}\r
.badge-green  { background: var(--green-dim);  color: #86efac; border: 1px solid rgba(34,197,94,0.25); }\r
.badge-red    { background: var(--red-dim);    color: #fca5a5; border: 1px solid rgba(239,68,68,0.25); }\r
.badge-gold   { background: var(--gold-dim);   color: var(--gold-light); border: 1px solid rgba(201,151,58,0.3); }\r
.badge-blue   { background: var(--blue-dim);   color: #93c5fd; border: 1px solid rgba(59,130,246,0.25); }\r
.badge-purple { background: var(--purple-dim); color: #c4b5fd; border: 1px solid rgba(139,92,246,0.25); }\r
.badge-amber  { background: var(--amber-dim);  color: #fcd34d; border: 1px solid rgba(245,158,11,0.25); }\r
.badge-teal   { background: var(--teal-dim);   color: #5eead4; border: 1px solid rgba(20,184,166,0.25); }\r
.badge-gray   { background: rgba(255,255,255,0.06); color: var(--text-dim); border: 1px solid var(--border2); }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   SEARCH / FILTER BAR\r
═══════════════════════════════════════════════════════════ */\r
.filter-bar {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  padding: 14px 22px;\r
  border-bottom: 1px solid var(--border);\r
  background: rgba(255,255,255,0.015);\r
  flex-wrap: wrap;\r
}\r
\r
.filter-search {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  background: var(--bg2);\r
  border: 1px solid var(--border2);\r
  border-radius: var(--radius-sm);\r
  padding: 8px 14px;\r
  flex: 1;\r
  min-width: 200px;\r
  max-width: 320px;\r
  transition: border-color 0.2s;\r
}\r
.filter-search:focus-within { border-color: var(--gold); }\r
.filter-search input { background: none; border: none; outline: none; color: var(--text); font-family: var(--font-main); font-size: 13px; width: 100%; }\r
.filter-search input::placeholder { color: var(--text-mute); }\r
.filter-search svg { flex-shrink: 0; color: var(--text-mute); }\r
\r
.filter-select {\r
  background: var(--bg2);\r
  border: 1px solid var(--border2);\r
  color: var(--text);\r
  padding: 8px 14px;\r
  border-radius: var(--radius-sm);\r
  font-family: var(--font-main);\r
  font-size: 13px;\r
  cursor: pointer;\r
  outline: none;\r
  transition: border-color 0.2s;\r
  min-height: 38px;\r
}\r
.filter-select:focus { border-color: var(--gold); }\r
.filter-select option { background: var(--card); }\r
\r
.filter-actions { margin-left: auto; display: flex; gap: 8px; }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   MODALS\r
═══════════════════════════════════════════════════════════ */\r
.modal-overlay {\r
  position: fixed;\r
  inset: 0;\r
  background: rgba(0,0,0,0.7);\r
  backdrop-filter: blur(6px);\r
  z-index: 9000;\r
  display: none;\r
  align-items: center;\r
  justify-content: center;\r
  padding: 20px;\r
  overflow-y: auto;\r
}\r
.modal-overlay.open { display: flex; }\r
\r
.modal {\r
  background: var(--surface);\r
  border: 1px solid var(--border2);\r
  border-radius: 14px;\r
  width: 100%;\r
  max-width: 540px;\r
  box-shadow: var(--shadow-lg);\r
  animation: modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1);\r
  margin: auto;\r
  max-height: calc(100vh - 40px);\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.modal-lg { max-width: 720px; }\r
.modal-xl { max-width: 900px; }\r
\r
@keyframes modalIn { from { opacity: 0; transform: scale(0.9) translateY(16px); } to { opacity: 1; transform: scale(1) translateY(0); } }\r
\r
.modal-header {\r
  padding: 22px 28px 18px;\r
  border-bottom: 1px solid var(--border);\r
  display: flex;\r
  align-items: flex-start;\r
  justify-content: space-between;\r
  gap: 12px;\r
  flex-shrink: 0;\r
}\r
\r
.modal-title { font-size: 18px; font-weight: 800; color: var(--text); }\r
.modal-subtitle { font-size: 12px; color: var(--text-dim); margin-top: 3px; }\r
\r
.modal-close {\r
  width: 32px;\r
  height: 32px;\r
  border-radius: 50%;\r
  background: rgba(255,255,255,0.06);\r
  border: none;\r
  color: var(--text-dim);\r
  cursor: pointer;\r
  display: grid;\r
  place-items: center;\r
  transition: all 0.2s;\r
  flex-shrink: 0;\r
}\r
.modal-close:hover { background: var(--red-dim); color: #fca5a5; }\r
\r
.modal-body { padding: 24px 28px; overflow-y: auto; -webkit-overflow-scrolling: touch; flex: 1; }\r
\r
.modal-footer {\r
  padding: 16px 28px;\r
  border-top: 1px solid var(--border);\r
  display: flex;\r
  align-items: center;\r
  justify-content: flex-end;\r
  gap: 10px;\r
  flex-shrink: 0;\r
  flex-wrap: wrap;\r
}\r
\r
.modal-error {\r
  background: var(--red-dim);\r
  border: 1px solid rgba(239,68,68,0.3);\r
  color: #fca5a5;\r
  padding: 10px 14px;\r
  border-radius: var(--radius-sm);\r
  font-size: 13px;\r
  margin-bottom: 18px;\r
  display: none;\r
}\r
.modal-error.show { display: block; }\r
.modal-success {\r
  background: var(--green-dim);\r
  border: 1px solid rgba(34,197,94,0.3);\r
  color: #86efac;\r
  padding: 10px 14px;\r
  border-radius: var(--radius-sm);\r
  font-size: 13px;\r
  margin-bottom: 18px;\r
  display: none;\r
}\r
.modal-success.show { display: block; }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   FORM ELEMENTS\r
═══════════════════════════════════════════════════════════ */\r
.form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }\r
.form-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }\r
\r
.form-select {\r
  width: 100%;\r
  padding: 12px 16px;\r
  background: var(--bg2);\r
  border: 1px solid var(--border2);\r
  border-radius: var(--radius-sm);\r
  color: var(--text);\r
  font-family: var(--font-main);\r
  font-size: 14px;\r
  outline: none;\r
  transition: border-color 0.2s;\r
  cursor: pointer;\r
  min-height: 44px;\r
}\r
.form-select:focus { border-color: var(--gold); }\r
.form-select option { background: var(--card); }\r
\r
.form-hint { font-size: 11px; color: var(--text-mute); margin-top: 6px; }\r
\r
.form-divider {\r
  border: none;\r
  border-top: 1px solid var(--border);\r
  margin: 20px 0;\r
}\r
\r
.toggle-switch {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  cursor: pointer;\r
}\r
.toggle-track {\r
  width: 40px;\r
  height: 22px;\r
  border-radius: 99px;\r
  background: var(--surface2);\r
  border: 1px solid var(--border2);\r
  position: relative;\r
  transition: background 0.2s, border-color 0.2s;\r
  cursor: pointer;\r
}\r
.toggle-track.on { background: var(--gold); border-color: var(--gold); }\r
.toggle-thumb {\r
  position: absolute;\r
  top: 2px;\r
  left: 2px;\r
  width: 16px;\r
  height: 16px;\r
  border-radius: 50%;\r
  background: #fff;\r
  transition: transform 0.2s;\r
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);\r
}\r
.toggle-track.on .toggle-thumb { transform: translateX(18px); }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   TOAST\r
═══════════════════════════════════════════════════════════ */\r
.toast-container {\r
  position: fixed;\r
  bottom: 28px;\r
  right: 28px;\r
  z-index: 99999;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 10px;\r
}\r
\r
.toast {\r
  background: var(--surface2);\r
  border: 1px solid var(--border2);\r
  border-left: 4px solid var(--gold);\r
  color: var(--text);\r
  padding: 14px 18px;\r
  border-radius: 8px;\r
  font-size: 13px;\r
  font-weight: 600;\r
  max-width: 340px;\r
  box-shadow: var(--shadow);\r
  animation: toastIn 0.35s cubic-bezier(0.34,1.56,0.64,1);\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
}\r
.toast.success { border-left-color: var(--green); }\r
.toast.error   { border-left-color: var(--red); }\r
.toast.warning { border-left-color: var(--amber); }\r
@keyframes toastIn { from { opacity: 0; transform: translateX(24px); } to { opacity: 1; transform: translateX(0); } }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   SPECIFIC PANELS\r
═══════════════════════════════════════════════════════════ */\r
\r
/* Overview sparklines */\r
.mini-bar-chart {\r
  display: flex;\r
  align-items: flex-end;\r
  gap: 3px;\r
  height: 40px;\r
}\r
.mini-bar-chart .bar {\r
  flex: 1;\r
  border-radius: 3px 3px 0 0;\r
  background: linear-gradient(180deg, var(--gold) 0%, rgba(201,151,58,0.3) 100%);\r
  min-height: 4px;\r
  transition: height 0.8s ease;\r
}\r
\r
/* Activity feed */\r
.activity-feed { display: flex; flex-direction: column; gap: 0; }\r
.activity-item {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 14px;\r
  padding: 14px 22px;\r
  border-bottom: 1px solid rgba(255,255,255,0.04);\r
  transition: background 0.15s;\r
}\r
.activity-item:hover { background: rgba(255,255,255,0.02); }\r
.activity-item:last-child { border-bottom: none; }\r
\r
.activity-icon {\r
  width: 34px;\r
  height: 34px;\r
  border-radius: 50%;\r
  display: grid;\r
  place-items: center;\r
  flex-shrink: 0;\r
}\r
\r
.activity-content { flex: 1; min-width: 0; }\r
.activity-text { font-size: 13px; color: var(--text); line-height: 1.45; }\r
.activity-text b { color: var(--gold-light); font-weight: 700; }\r
.activity-time { font-size: 11px; color: var(--text-mute); margin-top: 3px; font-family: var(--font-mono); }\r
.activity-meta { display: flex; align-items: center; gap: 8px; margin-top: 5px; flex-wrap: wrap; }\r
\r
/* User table avatar */\r
.user-cell { display: flex; align-items: center; gap: 10px; }\r
.user-avatar {\r
  width: 32px;\r
  height: 32px;\r
  border-radius: 50%;\r
  background: linear-gradient(135deg, var(--gold), var(--gold-light));\r
  display: grid;\r
  place-items: center;\r
  font-weight: 800;\r
  color: #0a0f1e;\r
  font-size: 12px;\r
  flex-shrink: 0;\r
}\r
.user-avatar.blue { background: linear-gradient(135deg, #2563eb, #60a5fa); color: #fff; }\r
.user-avatar.green { background: linear-gradient(135deg, #16a34a, #4ade80); color: #fff; }\r
.user-avatar.purple { background: linear-gradient(135deg, #7c3aed, #c4b5fd); color: #fff; }\r
.user-name { font-weight: 600; font-size: 13px; color: var(--text); }\r
.user-email { font-size: 11px; color: var(--text-mute); margin-top: 1px; font-family: var(--font-mono); }\r
\r
/* Row action buttons */\r
.row-actions { display: flex; align-items: center; gap: 6px; }\r
\r
/* Branch / KPI score bars */\r
.score-bar-row { display: flex; align-items: center; gap: 10px; font-size: 13px; }\r
.score-bar-label { width: 110px; flex-shrink: 0; font-weight: 600; color: var(--text); }\r
.score-bar-track { flex: 1; height: 8px; background: rgba(255,255,255,0.08); border-radius: 99px; overflow: hidden; }\r
.score-bar-fill { height: 100%; border-radius: 99px; background: linear-gradient(90deg, var(--gold), var(--gold-light)); transition: width 0.8s ease; }\r
.score-bar-val { font-size: 12px; color: var(--gold-light); font-weight: 700; font-variant-numeric: tabular-nums; min-width: 52px; text-align: right; }\r
\r
/* Data upload zone */\r
.upload-zone {\r
  border: 2px dashed var(--border2);\r
  border-radius: var(--radius);\r
  padding: 48px 32px;\r
  text-align: center;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  background: rgba(255,255,255,0.015);\r
}\r
.upload-zone:hover { border-color: var(--gold); background: var(--gold-glow); }\r
.upload-zone.drag-over { border-color: var(--gold-light); background: rgba(201,151,58,0.12); }\r
.upload-icon { font-size: 42px; margin-bottom: 16px; opacity: 0.7; }\r
.upload-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 8px; }\r
.upload-desc { font-size: 13px; color: var(--text-dim); line-height: 1.55; }\r
.upload-input { display: none; }\r
\r
/* Questionnaire items editor */\r
.q-item {\r
  border: 1px solid var(--border);\r
  border-radius: var(--radius-sm);\r
  padding: 14px 16px;\r
  margin-bottom: 10px;\r
  background: rgba(255,255,255,0.02);\r
  transition: border-color 0.15s;\r
}\r
.q-item:hover { border-color: var(--border2); }\r
.q-item-head { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }\r
.q-code { font-family: var(--font-mono); font-size: 11px; font-weight: 600; background: var(--gold-dim); color: var(--gold-light); padding: 3px 8px; border-radius: 4px; flex-shrink: 0; }\r
.q-actions { margin-left: auto; display: flex; gap: 6px; }\r
.q-input { width: 100%; font-family: var(--font-main); font-size: 13px; background: var(--bg2); border: 1px solid var(--border2); border-radius: 5px; padding: 8px 12px; color: var(--text); outline: none; transition: border-color 0.2s; }\r
.q-input:focus { border-color: var(--gold); }\r
.q-status { padding: 3px 8px; border-radius: 4px; font-size: 10px; font-weight: 700; }\r
.q-status.retained { background: var(--green-dim); color: #86efac; }\r
.q-status.removed  { background: var(--red-dim);   color: #fca5a5; }\r
\r
/* Settings sections */\r
.settings-section { margin-bottom: 28px; }\r
.settings-section-title { font-size: 13px; font-weight: 800; color: var(--gold); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 14px; padding-bottom: 8px; border-bottom: 1px solid var(--border); }\r
\r
.setting-row {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 16px;\r
  padding: 14px 0;\r
  border-bottom: 1px solid rgba(255,255,255,0.04);\r
}\r
.setting-row:last-child { border-bottom: none; }\r
.setting-info { flex: 1; }\r
.setting-name { font-size: 14px; font-weight: 600; color: var(--text); }\r
.setting-desc { font-size: 12px; color: var(--text-dim); margin-top: 3px; line-height: 1.45; }\r
\r
/* Analytics control sliders */\r
.driver-weight-row {\r
  display: grid;\r
  grid-template-columns: 150px 1fr 60px 100px;\r
  align-items: center;\r
  gap: 14px;\r
  padding: 12px 0;\r
  border-bottom: 1px solid rgba(255,255,255,0.04);\r
}\r
.driver-weight-row:last-child { border-bottom: none; }\r
.driver-weight-name { font-size: 13px; font-weight: 700; color: var(--text); }\r
input[type=range].admin-range {\r
  width: 100%;\r
  -webkit-appearance: none;\r
  appearance: none;\r
  height: 5px;\r
  border-radius: 99px;\r
  background: rgba(255,255,255,0.1);\r
  outline: none;\r
  cursor: pointer;\r
}\r
input[type=range].admin-range::-webkit-slider-thumb {\r
  -webkit-appearance: none;\r
  width: 18px; height: 18px;\r
  border-radius: 50%;\r
  background: var(--bg);\r
  border: 3px solid var(--gold-light);\r
  cursor: pointer;\r
  transition: background 0.2s;\r
}\r
input[type=range].admin-range::-webkit-slider-thumb:hover { background: var(--gold); }\r
\r
/* Audit log */\r
.audit-row { font-family: var(--font-mono); }\r
.audit-action { font-size: 10px; font-weight: 700; letter-spacing: 0.06em; }\r
\r
/* Sidebar overlay mobile */\r
.sidebar-overlay {\r
  display: none;\r
  position: fixed;\r
  inset: 0;\r
  background: rgba(0,0,0,0.6);\r
  z-index: 190;\r
}\r
\r
/* Confirm modal */\r
.confirm-modal { max-width: 400px; }\r
.confirm-body { text-align: center; padding: 32px 28px 24px; }\r
.confirm-icon { font-size: 48px; margin-bottom: 16px; }\r
.confirm-title { font-size: 18px; font-weight: 800; color: var(--text); margin-bottom: 8px; }\r
.confirm-message { font-size: 13px; color: var(--text-dim); line-height: 1.6; }\r
\r
/* Empty states */\r
.empty-state { text-align: center; padding: 60px 20px; }\r
.empty-icon { font-size: 48px; opacity: 0.4; margin-bottom: 16px; }\r
.empty-title { font-size: 16px; font-weight: 700; color: var(--text-dim); margin-bottom: 8px; }\r
.empty-desc { font-size: 13px; color: var(--text-mute); }\r
\r
/* Grid layouts */\r
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }\r
.grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 20px; }\r
\r
/* Info boxes */\r
.info-box { padding: 14px 18px; border-radius: 8px; font-size: 13px; line-height: 1.65; display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px; }\r
.info-box.gold    { background: var(--gold-dim); border: 1px solid rgba(201,151,58,0.25); color: var(--gold-light); }\r
.info-box.info    { background: var(--blue-dim);  border: 1px solid rgba(59,130,246,0.25); color: #93c5fd; }\r
.info-box.warning { background: var(--amber-dim); border: 1px solid rgba(245,158,11,0.25); color: #fcd34d; }\r
.info-box.success { background: var(--green-dim); border: 1px solid rgba(34,197,94,0.25); color: #86efac; }\r
.info-box.danger  { background: var(--red-dim);   border: 1px solid rgba(239,68,68,0.25); color: #fca5a5; }\r
\r
/* ═══════════════════════════════════════════════════════════\r
   RESPONSIVE\r
═══════════════════════════════════════════════════════════ */\r
@media (max-width: 1024px) {\r
  .sidebar { transform: translateX(-100%); }\r
  .sidebar.open { transform: translateX(0); }\r
  .sidebar-overlay { display: block; opacity: 0; pointer-events: none; transition: opacity 0.3s; }\r
  .sidebar-overlay.open { opacity: 1; pointer-events: auto; }\r
  .main { margin-left: 0; }\r
  .topbar-menu-btn { display: flex; }\r
  .topbar-search { display: none; }\r
  .grid-2, .grid-3 { grid-template-columns: 1fr; }\r
  .form-grid-2, .form-grid-3 { grid-template-columns: 1fr; }\r
  .driver-weight-row { grid-template-columns: 1fr; gap: 8px; }\r
}\r
\r
@media (max-width: 768px) {\r
  .content { padding: 16px; }\r
  .stat-grid { grid-template-columns: 1fr 1fr; }\r
  .page-header { flex-direction: column; }\r
  .topbar { padding: 0 16px; }\r
  .modal { max-height: calc(100dvh - 24px); }\r
}\r
\r
@media (max-width: 480px) {\r
  .stat-grid { grid-template-columns: 1fr; }\r
  .filter-bar { gap: 8px; }\r
  .filter-select { flex: 1 1 calc(50% - 8px); min-width: 0; }\r
  .modal-header, .modal-body, .modal-footer { padding-left: 18px; padding-right: 18px; }\r
}\r
</style>\r
</head>\r
<body>\r
\r
<!-- ════════════════════════════════════════\r
  LOGIN SCREEN\r
════════════════════════════════════════ -->\r
<div id="loginScreen">\r
  <div class="login-card">\r
    <div class="login-header">\r
      <div class="login-brand">\r
        <div class="login-brand-icon">🛡️</div>\r
        <div class="login-brand-text">\r
          <strong>ROSHD</strong>\r
          <small>Admin Control Center</small>\r
        </div>\r
      </div>\r
      <div class="login-title">Admin Sign In</div>\r
      <div class="login-subtitle">Restricted access — authorized administrators only</div>\r
    </div>\r
    <div class="login-body">\r
      <div class="login-error" id="loginError"></div>\r
      <div class="form-group">\r
        <label class="form-label">Email Address</label>\r
        <input type="email" class="form-input" id="adminEmail" placeholder="admin@roshd-professional.com" autocomplete="username">\r
      </div>\r
      <div class="form-group">\r
        <label class="form-label">Password</label>\r
        <div class="pw-wrap">\r
          <input type="password" class="form-input" id="adminPassword" placeholder="••••••••••" autocomplete="current-password">\r
          <button class="pw-eye" onclick="togglePw('adminPassword', this)">\r
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>\r
          </button>\r
        </div>\r
      </div>\r
      <button class="btn btn-primary btn-full" onclick="handleAdminLogin()" id="loginBtn" style="margin-top:8px">\r
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>\r
        Access Admin Panel\r
      </button>\r
      <div style="margin-top:18px;text-align:center;font-size:12px;color:var(--text-mute)">\r
        <span>Demo credentials: <code style="color:var(--gold-light);background:var(--gold-dim);padding:2px 6px;border-radius:3px">admin@roshd.com</code> / <code style="color:var(--gold-light);background:var(--gold-dim);padding:2px 6px;border-radius:3px">admin123</code></span>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ════════════════════════════════════════\r
  ADMIN APP\r
════════════════════════════════════════ -->\r
<div id="adminApp">\r
\r
  <!-- Sidebar overlay (mobile) -->\r
  <div class="sidebar-overlay" id="sidebarOverlay" onclick="closeSidebar()"></div>\r
\r
  <!-- ══ SIDEBAR ══ -->\r
  <aside class="sidebar" id="sidebar">\r
    <div class="sidebar-brand">\r
      <div class="sidebar-brand-icon">🛡️</div>\r
      <div class="sidebar-brand-text">\r
        <strong>ROSHD</strong>\r
        <span class="badge-admin">Admin</span>\r
      </div>\r
    </div>\r
\r
    <div class="sidebar-admin-strip">\r
      <div class="admin-avatar" id="adminAvatar">A</div>\r
      <div class="admin-info">\r
        <div class="admin-name" id="adminDisplayName">Administrator</div>\r
        <div class="admin-role">Super Admin</div>\r
      </div>\r
    </div>\r
\r
    <nav class="sidebar-nav">\r
      <div class="nav-section">Dashboard</div>\r
      <button class="nav-item active" data-panel="overview" onclick="showPanel('overview',this)">\r
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>\r
        Overview\r
      </button>\r
      <button class="nav-item" data-panel="analytics" onclick="showPanel('analytics',this)">\r
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>\r
        Live Analytics\r
        <span class="nav-badge gold">Live</span>\r
      </button>\r
\r
      <div class="nav-section">Management</div>\r
      <button class="nav-item" data-panel="users" onclick="showPanel('users',this)">\r
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>\r
        User Management\r
        <span class="nav-badge" id="userBadge">300</span>\r
      </button>\r
      <button class="nav-item" data-panel="branches" onclick="showPanel('branches',this)">\r
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>\r
        Branch Management\r
      </button>\r
      <button class="nav-item" data-panel="data" onclick="showPanel('data',this)">\r
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>\r
        Data Management\r
        <span class="nav-badge green">CSV</span>\r
      </button>\r
      <button class="nav-item" data-panel="content" onclick="showPanel('content',this)">\r
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>\r
        Content & Questionnaire\r
      </button>\r
\r
      <div class="nav-section">Intelligence</div>\r
      <button class="nav-item" data-panel="model" onclick="showPanel('model',this)">\r
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>\r
        Model & Weights Control\r
      </button>\r
      <button class="nav-item" data-panel="reports" onclick="showPanel('reports',this)">\r
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>\r
        Reports & Export\r
      </button>\r
\r
      <div class="nav-section">System</div>\r
      <button class="nav-item" data-panel="settings" onclick="showPanel('settings',this)">\r
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>\r
        Settings\r
      </button>\r
      <button class="nav-item" data-panel="audit" onclick="showPanel('audit',this)">\r
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>\r
        Audit Log\r
        <span class="nav-badge" id="auditBadge">12</span>\r
      </button>\r
    </nav>\r
\r
    <div class="sidebar-footer">\r
      <button class="logout-btn" onclick="handleLogout()">\r
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>\r
        Logout\r
      </button>\r
    </div>\r
  </aside>\r
\r
  <!-- ══ MAIN ══ -->\r
  <div class="main">\r
\r
    <!-- Topbar -->\r
    <div class="topbar">\r
      <div class="topbar-left">\r
        <button class="topbar-menu-btn" onclick="toggleSidebar()">\r
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>\r
        </button>\r
        <div>\r
          <div class="topbar-title" id="topbarTitle">Overview</div>\r
          <div class="topbar-breadcrumb">ROSHD Admin <span>›</span> <span id="topbarCrumb">Dashboard</span></div>\r
        </div>\r
      </div>\r
      <div class="topbar-right">\r
        <div class="topbar-search">\r
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>\r
          <input type="text" placeholder="Search users, data…" id="globalSearch" oninput="handleGlobalSearch(this.value)">\r
        </div>\r
        <div class="status-pill">\r
          <div class="status-dot"></div>\r
          <span>System Live</span>\r
        </div>\r
        <div class="topbar-icon-btn" onclick="toggleNotif()" title="Notifications">\r
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>\r
          <div class="notif-dot"></div>\r
        </div>\r
        <div class="topbar-icon-btn" onclick="window.print()" title="Print / Export">\r
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Content -->\r
    <div class="content">\r
\r
      <!-- ══════════════ OVERVIEW PANEL ══════════════ -->\r
      <div class="panel active" id="panel-overview">\r
        <div class="page-header">\r
          <div class="page-header-left">\r
            <div class="page-eyebrow">System Overview</div>\r
            <div class="page-title">Admin Dashboard</div>\r
            <div class="page-subtitle">Real-time platform health, user stats, and system KPIs — Q2 2026</div>\r
          </div>\r
          <div class="page-header-actions">\r
            <button class="btn btn-secondary btn-sm" onclick="refreshOverview()">\r
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-7"/><path d="M3 3v6h6"/></svg>\r
              Refresh\r
            </button>\r
            <button class="btn btn-primary btn-sm" onclick="showPanel('data',document.querySelector('[data-panel=data]'))">\r
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>\r
              Upload Data\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- KPI Stats -->\r
        <div class="stat-grid" id="overviewStats">\r
          <!-- Rendered by JS -->\r
        </div>\r
\r
        <div class="grid-2">\r
          <!-- CX Scores by Branch -->\r
          <div class="card">\r
            <div class="card-header">\r
              <div>\r
                <div class="card-title">CX Score by Branch</div>\r
                <div class="card-subtitle">Live satisfaction scores (avg /5 · with % of scale)</div>\r
              </div>\r
              <button class="btn btn-secondary btn-sm" onclick="showPanel('branches',document.querySelector('[data-panel=branches]'))">Manage Branches</button>\r
            </div>\r
            <div class="card-body" id="branchScoresBars"></div>\r
          </div>\r
\r
          <!-- Activity Feed -->\r
          <div class="card">\r
            <div class="card-header">\r
              <div>\r
                <div class="card-title">Recent Activity</div>\r
                <div class="card-subtitle">Latest admin and system actions</div>\r
              </div>\r
              <button class="btn btn-secondary btn-sm" onclick="showPanel('audit',document.querySelector('[data-panel=audit]'))">View All</button>\r
            </div>\r
            <div class="activity-feed" id="activityFeed"></div>\r
          </div>\r
        </div>\r
\r
        <div class="grid-3">\r
          <!-- Driver Distribution -->\r
          <div class="card">\r
            <div class="card-header"><div><div class="card-title">Driver Impact Summary</div><div class="card-subtitle">Effect sizes across all branches</div></div></div>\r
            <div class="card-body" id="driverSummary"></div>\r
          </div>\r
\r
          <!-- User Distribution -->\r
          <div class="card">\r
            <div class="card-header"><div><div class="card-title">User Segments</div><div class="card-subtitle">Sample distribution breakdown</div></div></div>\r
            <div class="card-body" id="userSegments"></div>\r
          </div>\r
\r
          <!-- System Health -->\r
          <div class="card">\r
            <div class="card-header"><div><div class="card-title">System Health</div><div class="card-subtitle">Platform and model status</div></div></div>\r
            <div class="card-body" id="systemHealth"></div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- ══════════════ LIVE ANALYTICS PANEL ══════════════ -->\r
      <div class="panel" id="panel-analytics">\r
        <div class="page-header">\r
          <div class="page-header-left">\r
            <div class="page-eyebrow">Intelligence Engine</div>\r
            <div class="page-title">Live Analytics Control</div>\r
            <div class="page-subtitle">Read-only real-time view of customer dashboard data across all branches</div>\r
          </div>\r
          <div class="page-header-actions">\r
            <select class="filter-select" id="analyticsBranch" onchange="renderAnalytics()">\r
              <option value="All Branches">All Branches</option>\r
              <option value="Riyadh">Riyadh</option>\r
              <option value="Jeddah">Jeddah</option>\r
              <option value="Dammam">Dammam</option>\r
            </select>\r
            <button class="btn btn-primary btn-sm" onclick="exportAnalyticsReport()">\r
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg>\r
              Export Report\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="stat-grid" id="analyticsKpis"></div>\r
\r
        <div class="grid-2">\r
          <div class="card">\r
            <div class="card-header"><div><div class="card-title">Driver Ranking</div><div class="card-subtitle">Impact effect sizes — current branch filter</div></div></div>\r
            <div class="card-body" id="analyticsDriverBars"></div>\r
          </div>\r
          <div class="card">\r
            <div class="card-header"><div><div class="card-title">Branch Performance Comparison</div><div class="card-subtitle">Average CX Score — all branches</div></div></div>\r
            <div class="card-body" id="analyticsBranchComp"></div>\r
          </div>\r
        </div>\r
\r
        <div class="card">\r
          <div class="card-header">\r
            <div><div class="card-title">Sample Breakdown</div><div class="card-subtitle">300-respondent distribution across demographics</div></div>\r
          </div>\r
          <div class="card-body">\r
            <div class="grid-2" style="margin:0">\r
              <div id="analyticsDemoBreakdown"></div>\r
              <div id="analyticsAgeBreakdown"></div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- ══════════════ USER MANAGEMENT ══════════════ -->\r
      <div class="panel" id="panel-users">\r
        <div class="page-header">\r
          <div class="page-header-left">\r
            <div class="page-eyebrow">User Management</div>\r
            <div class="page-title">All Users</div>\r
            <div class="page-subtitle">Create, edit, suspend, and delete user accounts — full CRUD control</div>\r
          </div>\r
          <div class="page-header-actions">\r
            <button class="btn btn-secondary btn-sm" onclick="openImportUsers()">\r
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/></svg>\r
              Import CSV\r
            </button>\r
            <button class="btn btn-primary btn-sm" onclick="openCreateUser()">\r
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>\r
              Add User\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="card" style="margin-bottom:0">\r
          <div class="filter-bar">\r
            <div class="filter-search">\r
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>\r
              <input type="text" placeholder="Search by name or email…" id="userSearch" oninput="filterUsers()">\r
            </div>\r
            <select class="filter-select" id="userRoleFilter" onchange="filterUsers()">\r
              <option value="">All Roles</option>\r
              <option value="admin">Admin</option>\r
              <option value="customer">Customer</option>\r
              <option value="analyst">Analyst</option>\r
            </select>\r
            <select class="filter-select" id="userStatusFilter" onchange="filterUsers()">\r
              <option value="">All Statuses</option>\r
              <option value="active">Active</option>\r
              <option value="suspended">Suspended</option>\r
              <option value="pending">Pending</option>\r
            </select>\r
            <select class="filter-select" id="userBranchFilter" onchange="filterUsers()">\r
              <option value="">All Branches</option>\r
              <option value="Riyadh">Riyadh</option>\r
              <option value="Jeddah">Jeddah</option>\r
              <option value="Dammam">Dammam</option>\r
            </select>\r
            <div class="filter-actions">\r
              <button class="btn btn-secondary btn-sm" onclick="bulkAction('suspend')" id="bulkSuspendBtn" style="display:none">Suspend Selected</button>\r
              <button class="btn btn-danger btn-sm"   onclick="bulkAction('delete')"  id="bulkDeleteBtn"  style="display:none">Delete Selected</button>\r
            </div>\r
          </div>\r
          <div class="table-wrap">\r
            <table class="data-table" id="usersTable">\r
              <thead>\r
                <tr>\r
                  <th style="width:36px"><input type="checkbox" id="selectAllUsers" onchange="toggleSelectAll(this)"></th>\r
                  <th onclick="sortTable('users','name')">User <span class="sort-icon">↕</span></th>\r
                  <th onclick="sortTable('users','branch')">Branch <span class="sort-icon">↕</span></th>\r
                  <th onclick="sortTable('users','role')">Role <span class="sort-icon">↕</span></th>\r
                  <th onclick="sortTable('users','status')">Status <span class="sort-icon">↕</span></th>\r
                  <th onclick="sortTable('users','loginCount')">Logins <span class="sort-icon">↕</span></th>\r
                  <th onclick="sortTable('users','lastLogin')">Last Login <span class="sort-icon">↕</span></th>\r
                  <th>Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody id="usersTbody"></tbody>\r
            </table>\r
          </div>\r
          <div class="table-pagination" id="usersPagination"></div>\r
        </div>\r
      </div>\r
\r
      <!-- ══════════════ BRANCH MANAGEMENT ══════════════ -->\r
      <div class="panel" id="panel-branches">\r
        <div class="page-header">\r
          <div class="page-header-left">\r
            <div class="page-eyebrow">Branch Control</div>\r
            <div class="page-title">Branch Management</div>\r
            <div class="page-subtitle">Add, edit, and remove service branches — override CX scores and driver weights per branch</div>\r
          </div>\r
          <div class="page-header-actions">\r
            <button class="btn btn-primary btn-sm" onclick="openCreateBranch()">\r
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>\r
              Add Branch\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div id="branchCards" class="grid-3"></div>\r
\r
        <div class="card">\r
          <div class="card-header">\r
            <div><div class="card-title">Branch CX Scores — Editable</div><div class="card-subtitle">Override scores used in customer dashboards</div></div>\r
            <button class="btn btn-primary btn-sm" onclick="saveBranchScores()">Save Changes</button>\r
          </div>\r
          <div class="card-body">\r
            <div id="branchScoreEditor"></div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- ══════════════ DATA MANAGEMENT ══════════════ -->\r
      <div class="panel" id="panel-data">\r
        <div class="page-header">\r
          <div class="page-header-left">\r
            <div class="page-eyebrow">Data Control</div>\r
            <div class="page-title">Data Management</div>\r
            <div class="page-subtitle">Upload, validate, and manage survey datasets — full CSV/Excel import pipeline</div>\r
          </div>\r
          <div class="page-header-actions">\r
            <button class="btn btn-secondary btn-sm" onclick="downloadTemplate()">\r
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>\r
              Download Template\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Upload Zone -->\r
        <div class="card" style="margin-bottom:20px">\r
          <div class="card-header"><div class="card-title">Upload New Dataset</div><div class="card-subtitle">CSV / Excel — max 10MB. Columns: ID, Branch, Gender, Service, Frequency, Age, Q_Score, C_Score, P_Score, S_Score, CX_Score</div></div>\r
          <div class="card-body">\r
            <div class="upload-zone" id="uploadZone" onclick="triggerUpload()" ondragover="onDragOver(event)" ondragleave="onDragLeave(event)" ondrop="onDrop(event)">\r
              <div class="upload-icon">📂</div>\r
              <div class="upload-title">Drop your dataset file here</div>\r
              <div class="upload-desc">Supports CSV, XLSX, XLS — or click to browse</div>\r
            </div>\r
            <input type="file" class="upload-input" id="dataFileInput" accept=".csv,.xlsx,.xls" onchange="handleFileUpload(this)">\r
            <div id="uploadProgress" style="margin-top:16px;display:none">\r
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">\r
                <span style="font-size:13px;font-weight:600;color:var(--text)" id="uploadFileName">file.csv</span>\r
                <span style="font-size:12px;color:var(--gold-light)" id="uploadPct">0%</span>\r
              </div>\r
              <div style="height:6px;background:rgba(255,255,255,0.08);border-radius:99px;overflow:hidden">\r
                <div id="uploadBar" style="height:100%;width:0%;background:linear-gradient(90deg,var(--gold),var(--gold-light));border-radius:99px;transition:width 0.3s"></div>\r
              </div>\r
              <div id="uploadStatus" style="margin-top:8px;font-size:12px;color:var(--text-dim)"></div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Dataset Table -->\r
        <div class="card">\r
          <div class="card-header">\r
            <div><div class="card-title">Uploaded Datasets</div><div class="card-subtitle">Manage, validate, and activate survey datasets</div></div>\r
            <div class="card-actions">\r
              <button class="btn btn-secondary btn-sm" onclick="refreshDatasets()">Refresh</button>\r
            </div>\r
          </div>\r
          <div class="table-wrap">\r
            <table class="data-table">\r
              <thead>\r
                <tr>\r
                  <th>Dataset Name</th>\r
                  <th>Period</th>\r
                  <th>Rows</th>\r
                  <th>Status</th>\r
                  <th>Uploaded By</th>\r
                  <th>Upload Date</th>\r
                  <th>Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody id="datasetsTbody"></tbody>\r
            </table>\r
          </div>\r
        </div>\r
\r
        <!-- Sample Records Preview -->\r
        <div class="card">\r
          <div class="card-header">\r
            <div><div class="card-title">Sample Records — Editable</div><div class="card-subtitle">Inline edit individual response records</div></div>\r
            <button class="btn btn-primary btn-sm" onclick="saveRecordEdits()">Save Edits</button>\r
          </div>\r
          <div class="filter-bar">\r
            <div class="filter-search">\r
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>\r
              <input type="text" placeholder="Search records…" id="recordSearch" oninput="filterRecords()">\r
            </div>\r
            <select class="filter-select" id="recordBranchFilter" onchange="filterRecords()">\r
              <option value="">All Branches</option>\r
              <option value="Riyadh">Riyadh</option>\r
              <option value="Jeddah">Jeddah</option>\r
              <option value="Dammam">Dammam</option>\r
            </select>\r
          </div>\r
          <div class="table-wrap">\r
            <table class="data-table" id="recordsTable">\r
              <thead>\r
                <tr>\r
                  <th>ID</th>\r
                  <th>Branch</th>\r
                  <th>Gender</th>\r
                  <th>Service</th>\r
                  <th>Frequency</th>\r
                  <th>Age</th>\r
                  <th>Q</th>\r
                  <th>C</th>\r
                  <th>P</th>\r
                  <th>S</th>\r
                  <th>CX</th>\r
                  <th>Risk</th>\r
                  <th>Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody id="recordsTbody"></tbody>\r
            </table>\r
          </div>\r
          <div class="table-pagination" id="recordsPagination"></div>\r
        </div>\r
      </div>\r
\r
      <!-- ══════════════ CONTENT & QUESTIONNAIRE ══════════════ -->\r
      <div class="panel" id="panel-content">\r
        <div class="page-header">\r
          <div class="page-header-left">\r
            <div class="page-eyebrow">Content Control</div>\r
            <div class="page-title">Content & Questionnaire Editor</div>\r
            <div class="page-subtitle">Edit questionnaire items, platform content, and service descriptions</div>\r
          </div>\r
          <div class="page-header-actions">\r
            <button class="btn btn-secondary btn-sm" onclick="resetContent()">Reset to Default</button>\r
            <button class="btn btn-primary btn-sm" onclick="saveAllContent()">\r
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>\r
              Save All Changes\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Tab nav -->\r
        <div style="display:flex;gap:0;border-bottom:1px solid var(--border);margin-bottom:24px">\r
          <button class="content-tab-btn active" onclick="switchContentTab('questionnaire',this)" style="padding:12px 22px;background:none;border:none;border-bottom:2px solid var(--gold);color:var(--gold);font-family:var(--font-main);font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;transition:all 0.2s">Questionnaire Items</button>\r
          <button class="content-tab-btn" onclick="switchContentTab('platform',this)" style="padding:12px 22px;background:none;border:none;border-bottom:2px solid transparent;color:var(--text-dim);font-family:var(--font-main);font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;transition:all 0.2s">Platform Text</button>\r
          <button class="content-tab-btn" onclick="switchContentTab('services',this)" style="padding:12px 22px;background:none;border:none;border-bottom:2px solid transparent;color:var(--text-dim);font-family:var(--font-main);font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;transition:all 0.2s">Services</button>\r
        </div>\r
\r
        <div id="content-tab-questionnaire">\r
          <div class="info-box info">\r
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>\r
            <span><b>Governance:</b> Item removal is tracked in the Pilot section. Use the status toggle here to mark items as Retained or Removed for client-side display.</span>\r
          </div>\r
          <div id="questionnaireEditor"></div>\r
          <button class="btn btn-primary" onclick="addQuestionnaireItem()">\r
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>\r
            Add New Item\r
          </button>\r
        </div>\r
\r
        <div id="content-tab-platform" style="display:none">\r
          <div class="grid-2">\r
            <div class="card">\r
              <div class="card-header"><div class="card-title">Hero Section</div></div>\r
              <div class="card-body">\r
                <div class="form-group"><label class="form-label">Title (EN)</label><input class="form-input" id="heroTitleEn" value="Clarity. Insight. Impact."></div>\r
                <div class="form-group"><label class="form-label">Title (AR)</label><input class="form-input" id="heroTitleAr" value="وضوح. رؤية. تأثير." dir="rtl"></div>\r
                <div class="form-group"><label class="form-label">Subtitle (EN)</label><textarea class="form-input" id="heroSubEn" rows="3">ROSHD Professional delivers data-driven consulting and executive training.</textarea></div>\r
                <div class="form-group"><label class="form-label">Subtitle (AR)</label><textarea class="form-input" id="heroSubAr" rows="3" dir="rtl">تقدّم رُشد الاحتراف استشارات قائمة على البيانات.</textarea></div>\r
              </div>\r
            </div>\r
            <div class="card">\r
              <div class="card-header"><div class="card-title">Contact & Footer</div></div>\r
              <div class="card-body">\r
                <div class="form-group"><label class="form-label">Contact Email</label><input class="form-input" id="contactEmail" value="info@roshd-professional.com"></div>\r
                <div class="form-group"><label class="form-label">Phone</label><input class="form-input" id="contactPhone" value="+966 11 000 0000"></div>\r
                <div class="form-group"><label class="form-label">Footer Tagline (EN)</label><input class="form-input" id="footerTagEn" value="Clarity. Insight. Impact."></div>\r
                <div class="form-group"><label class="form-label">Footer Tagline (AR)</label><input class="form-input" id="footerTagAr" value="وضوح. رؤية. تأثير." dir="rtl"></div>\r
                <div class="form-group"><label class="form-label">API Base URL</label><input class="form-input" id="apiBaseUrl" value="https://roshd-professional-s8lh.vercel.app" style="font-family:var(--font-mono);font-size:12px"></div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div id="content-tab-services" style="display:none">\r
          <div id="servicesEditor"></div>\r
          <button class="btn btn-secondary" onclick="addService()">\r
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>\r
            Add Service\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- ══════════════ MODEL & WEIGHTS ══════════════ -->\r
      <div class="panel" id="panel-model">\r
        <div class="page-header">\r
          <div class="page-header-left">\r
            <div class="page-eyebrow">Intelligence Control</div>\r
            <div class="page-title">Model & Weights Control</div>\r
            <div class="page-subtitle">Override driver impact weights, explanatory power, and CX score calculations per branch</div>\r
          </div>\r
          <div class="page-header-actions">\r
            <button class="btn btn-secondary btn-sm" onclick="resetModelWeights()">Reset to Calculated</button>\r
            <button class="btn btn-primary btn-sm" onclick="saveModelWeights()">\r
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>\r
              Apply Changes\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="info-box warning">\r
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;margin-top:1px"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>\r
          <span><b>Admin Override:</b> Changing driver weights will affect what customers see in their dashboards. Changes are logged. Use with care — always document the reason for overrides.</span>\r
        </div>\r
\r
        <!-- Branch selector for model edit -->\r
        <div style="margin-bottom:20px;display:flex;align-items:center;gap:12px">\r
          <label class="form-label" style="margin:0">Edit weights for branch:</label>\r
          <select class="filter-select" id="modelBranchSelect" onchange="renderModelWeights()" style="width:auto">\r
            <option value="All Branches">All Branches (Global)</option>\r
            <option value="Riyadh">Riyadh</option>\r
            <option value="Jeddah">Jeddah</option>\r
            <option value="Dammam">Dammam</option>\r
          </select>\r
        </div>\r
\r
        <div class="grid-2">\r
          <div class="card">\r
            <div class="card-header"><div><div class="card-title">Driver Impact Weights</div><div class="card-subtitle">Adjust the explanatory contribution of each driver</div></div></div>\r
            <div class="card-body">\r
              <div id="modelWeightsEditor"></div>\r
            </div>\r
          </div>\r
          <div class="card">\r
            <div class="card-header"><div><div class="card-title">Model Quality Metrics</div><div class="card-subtitle">Edit displayed quality values</div></div></div>\r
            <div class="card-body" id="modelMetricsEditor"></div>\r
          </div>\r
        </div>\r
\r
        <div class="card">\r
          <div class="card-header"><div><div class="card-title">Decision Labels Override</div><div class="card-subtitle">Edit the decision text shown per driver in customer dashboards</div></div></div>\r
          <div class="card-body" id="decisionLabelsEditor"></div>\r
        </div>\r
      </div>\r
\r
      <!-- ══════════════ REPORTS & EXPORT ══════════════ -->\r
      <div class="panel" id="panel-reports">\r
        <div class="page-header">\r
          <div class="page-header-left">\r
            <div class="page-eyebrow">Output Center</div>\r
            <div class="page-title">Reports & Export</div>\r
            <div class="page-subtitle">Generate formatted reports, schedule exports, and manage delivery templates</div>\r
          </div>\r
        </div>\r
\r
        <div class="grid-2">\r
          <div class="card">\r
            <div class="card-header"><div class="card-title">Generate Report</div><div class="card-subtitle">Custom report builder for any branch and period</div></div>\r
            <div class="card-body">\r
              <div class="form-group"><label class="form-label">Report Type</label>\r
                <select class="form-select" id="reportType">\r
                  <option value="executive">Executive Summary</option>\r
                  <option value="cx_drivers">CX Drivers Deep Dive</option>\r
                  <option value="branch_comparison">Branch Comparison</option>\r
                  <option value="demographics">Demographics Profile</option>\r
                  <option value="model_quality">Model Quality Report</option>\r
                  <option value="full">Full Dashboard Export</option>\r
                </select>\r
              </div>\r
              <div class="form-group"><label class="form-label">Branch</label>\r
                <select class="form-select" id="reportBranch">\r
                  <option>All Branches</option>\r
                  <option>Riyadh</option>\r
                  <option>Jeddah</option>\r
                  <option>Dammam</option>\r
                </select>\r
              </div>\r
              <div class="form-grid-2">\r
                <div class="form-group"><label class="form-label">Period From</label><input type="date" class="form-input" id="reportFrom" value="2026-04-01"></div>\r
                <div class="form-group"><label class="form-label">Period To</label><input type="date" class="form-input" id="reportTo" value="2026-06-30"></div>\r
              </div>\r
              <div class="form-group"><label class="form-label">Format</label>\r
                <select class="form-select" id="reportFormat">\r
                  <option>PDF</option>\r
                  <option>Excel / CSV</option>\r
                  <option>JSON (API)</option>\r
                  <option>Print-ready HTML</option>\r
                </select>\r
              </div>\r
              <div class="form-group"><label class="form-label">Language</label>\r
                <select class="form-select" id="reportLang">\r
                  <option>English</option>\r
                  <option>Arabic</option>\r
                  <option>Bilingual (EN + AR)</option>\r
                </select>\r
              </div>\r
              <button class="btn btn-primary btn-full" onclick="generateReport()">\r
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg>\r
                Generate & Download\r
              </button>\r
            </div>\r
          </div>\r
\r
          <div class="card">\r
            <div class="card-header"><div class="card-title">Scheduled Exports</div><div class="card-subtitle">Automated export schedule management</div></div>\r
            <div class="card-body" id="scheduledExports"></div>\r
            <div style="padding:0 22px 18px">\r
              <button class="btn btn-secondary btn-sm" onclick="openScheduleModal()">\r
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>\r
                New Schedule\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="card">\r
          <div class="card-header"><div><div class="card-title">Export History</div><div class="card-subtitle">Previously generated reports and downloads</div></div></div>\r
          <div class="table-wrap">\r
            <table class="data-table">\r
              <thead><tr><th>Report Name</th><th>Type</th><th>Branch</th><th>Format</th><th>Generated By</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>\r
              <tbody id="reportHistoryTbody"></tbody>\r
            </table>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- ══════════════ SETTINGS ══════════════ -->\r
      <div class="panel" id="panel-settings">\r
        <div class="page-header">\r
          <div class="page-header-left">\r
            <div class="page-eyebrow">Configuration</div>\r
            <div class="page-title">System Settings</div>\r
            <div class="page-subtitle">Platform configuration, user permissions, email templates, and system preferences</div>\r
          </div>\r
          <div class="page-header-actions">\r
            <button class="btn btn-primary btn-sm" onclick="saveSettings()">\r
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>\r
              Save Settings\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="grid-2">\r
          <div class="card">\r
            <div class="card-body">\r
              <div class="settings-section">\r
                <div class="settings-section-title">Platform Configuration</div>\r
                <div class="setting-row">\r
                  <div class="setting-info"><div class="setting-name">Maintenance Mode</div><div class="setting-desc">When enabled, clients see a maintenance page</div></div>\r
                  <div class="toggle-track" id="toggleMaintenance" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>\r
                </div>\r
                <div class="setting-row">\r
                  <div class="setting-info"><div class="setting-name">New Registrations</div><div class="setting-desc">Allow new users to self-register</div></div>\r
                  <div class="toggle-track on" id="toggleRegistrations" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>\r
                </div>\r
                <div class="setting-row">\r
                  <div class="setting-info"><div class="setting-name">Arabic Default Language</div><div class="setting-desc">Show Arabic as the default interface language</div></div>\r
                  <div class="toggle-track on" id="toggleArabicDefault" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>\r
                </div>\r
                <div class="setting-row">\r
                  <div class="setting-info"><div class="setting-name">Demo Mode</div><div class="setting-desc">Allow login without server verification (demo fallback)</div></div>\r
                  <div class="toggle-track on" id="toggleDemoMode" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>\r
                </div>\r
                <div class="setting-row">\r
                  <div class="setting-info"><div class="setting-name">Dashboard Filter Persistence</div><div class="setting-desc">Remember user filter selections across sessions</div></div>\r
                  <div class="toggle-track on" id="toggleFilterPersist" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>\r
                </div>\r
              </div>\r
              <div class="settings-section">\r
                <div class="settings-section-title">Dashboard Display</div>\r
                <div class="form-group"><label class="form-label">Current Quarter Label</label><input class="form-input" id="quarterLabel" value="Q2 2026"></div>\r
                <div class="form-group"><label class="form-label">Total Sample Size (N)</label><input class="form-input" id="sampleSizeN" type="number" value="300"></div>\r
                <div class="form-group"><label class="form-label">Model Explanatory Power (%)</label><input class="form-input" id="modelR2" type="number" value="72" min="0" max="100"></div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="card">\r
            <div class="card-body">\r
              <div class="settings-section">\r
                <div class="settings-section-title">Security & Access</div>\r
                <div class="setting-row">\r
                  <div class="setting-info"><div class="setting-name">Two-Factor Authentication</div><div class="setting-desc">Require 2FA for admin accounts</div></div>\r
                  <div class="toggle-track" id="toggle2FA" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>\r
                </div>\r
                <div class="setting-row">\r
                  <div class="setting-info"><div class="setting-name">Session Timeout (hours)</div><div class="setting-desc">Auto-logout after inactivity</div></div>\r
                  <select class="filter-select" style="width:auto" id="sessionTimeout">\r
                    <option value="1">1 hour</option>\r
                    <option value="4">4 hours</option>\r
                    <option value="8" selected>8 hours</option>\r
                    <option value="24">24 hours</option>\r
                  </select>\r
                </div>\r
                <div class="setting-row">\r
                  <div class="setting-info"><div class="setting-name">Audit All Admin Actions</div><div class="setting-desc">Log every admin create/edit/delete operation</div></div>\r
                  <div class="toggle-track on" id="toggleAudit" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>\r
                </div>\r
              </div>\r
              <div class="settings-section">\r
                <div class="settings-section-title">Email Notifications</div>\r
                <div class="setting-row">\r
                  <div class="setting-info"><div class="setting-name">New User Registration Alert</div><div class="setting-desc">Email admin when a new user signs up</div></div>\r
                  <div class="toggle-track on" id="toggleNewUserEmail" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>\r
                </div>\r
                <div class="setting-row">\r
                  <div class="setting-info"><div class="setting-name">Weekly Report Digest</div><div class="setting-desc">Automated weekly analytics summary</div></div>\r
                  <div class="toggle-track" id="toggleWeeklyDigest" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>\r
                </div>\r
                <div class="form-group" style="margin-top:16px"><label class="form-label">Admin Email Recipients</label><input class="form-input" id="adminEmails" value="admin@roshd-professional.com"></div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="card">\r
          <div class="card-header"><div class="card-title">Danger Zone</div><div class="card-subtitle">Irreversible system-level operations</div></div>\r
          <div class="card-body">\r
            <div style="display:flex;flex-wrap:wrap;gap:14px;align-items:center">\r
              <button class="btn btn-danger btn-sm" onclick="confirmDanger('clear-cache','Clear System Cache','This will force all clients to reload fresh data. Users currently on the platform will experience a brief reload.')">Clear Cache</button>\r
              <button class="btn btn-danger btn-sm" onclick="confirmDanger('reset-filters','Reset All User Filters','This will erase all stored filter preferences for every user account.')">Reset User Filters</button>\r
              <button class="btn btn-danger btn-sm" onclick="confirmDanger('flush-sessions','Flush All Sessions','All active client sessions will be terminated. Users will need to log in again.')">Flush Sessions</button>\r
              <button class="btn btn-danger btn-sm" onclick="confirmDanger('reset-model','Reset Model to Defaults','All manual driver weight overrides will be reverted to calculated defaults.')">Reset Model Overrides</button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- ══════════════ AUDIT LOG ══════════════ -->\r
      <div class="panel" id="panel-audit">\r
        <div class="page-header">\r
          <div class="page-header-left">\r
            <div class="page-eyebrow">Security & Compliance</div>\r
            <div class="page-title">Audit Log</div>\r
            <div class="page-subtitle">Complete record of all admin actions — who did what, when, and on which resource</div>\r
          </div>\r
          <div class="page-header-actions">\r
            <button class="btn btn-secondary btn-sm" onclick="exportAuditLog()">\r
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg>\r
              Export Log\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="card" style="margin-bottom:0">\r
          <div class="filter-bar">\r
            <div class="filter-search">\r
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>\r
              <input type="text" placeholder="Search actions, users…" id="auditSearch" oninput="filterAuditLog()">\r
            </div>\r
            <select class="filter-select" id="auditActionFilter" onchange="filterAuditLog()">\r
              <option value="">All Actions</option>\r
              <option value="CREATE">Create</option>\r
              <option value="UPDATE">Update</option>\r
              <option value="DELETE">Delete</option>\r
              <option value="LOGIN">Login</option>\r
              <option value="EXPORT">Export</option>\r
              <option value="UPLOAD">Upload</option>\r
              <option value="OVERRIDE">Override</option>\r
            </select>\r
            <select class="filter-select" id="auditAdminFilter" onchange="filterAuditLog()">\r
              <option value="">All Admins</option>\r
              <option value="Super Admin">Super Admin</option>\r
              <option value="Manager">Manager</option>\r
            </select>\r
            <button class="btn btn-danger btn-sm" onclick="confirmDanger('clear-audit','Clear Audit Log','This will permanently delete all audit log entries. This action cannot be undone.')">Clear Log</button>\r
          </div>\r
          <div class="table-wrap">\r
            <table class="data-table">\r
              <thead>\r
                <tr>\r
                  <th>Timestamp</th>\r
                  <th>Admin</th>\r
                  <th>Action</th>\r
                  <th>Resource</th>\r
                  <th>Details</th>\r
                  <th>IP Address</th>\r
                  <th>Status</th>\r
                </tr>\r
              </thead>\r
              <tbody id="auditTbody"></tbody>\r
            </table>\r
          </div>\r
          <div class="table-pagination" id="auditPagination"></div>\r
        </div>\r
      </div>\r
\r
    </div><!-- end content -->\r
  </div><!-- end main -->\r
</div><!-- end adminApp -->\r
\r
<!-- ════════════════════════════════════════\r
  MODALS\r
════════════════════════════════════════ -->\r
\r
<!-- Create / Edit User Modal -->\r
<div class="modal-overlay" id="userModal" onclick="closeModal('userModal',event)">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div><div class="modal-title" id="userModalTitle">Add New User</div><div class="modal-subtitle">Create a new client account with assigned branch and role</div></div>\r
      <button class="modal-close" onclick="closeModalById('userModal')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="modal-error" id="userModalError"></div>\r
      <input type="hidden" id="editUserId">\r
      <div class="form-grid-2">\r
        <div class="form-group"><label class="form-label">First Name *</label><input class="form-input" id="uFirstName" placeholder="Ahmed"></div>\r
        <div class="form-group"><label class="form-label">Last Name *</label><input class="form-input" id="uLastName" placeholder="Al-Rashidi"></div>\r
      </div>\r
      <div class="form-group"><label class="form-label">Email Address *</label><input type="email" class="form-input" id="uEmail" placeholder="ahmed@company.com"></div>\r
      <div class="form-grid-2">\r
        <div class="form-group"><label class="form-label">Password *</label><div class="pw-wrap"><input type="password" class="form-input" id="uPassword" placeholder="Min. 8 characters"><button class="pw-eye" onclick="togglePw('uPassword',this)"><svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></div></div>\r
        <div class="form-group"><label class="form-label">Role *</label>\r
          <select class="form-select" id="uRole">\r
            <option value="customer">Customer</option>\r
            <option value="analyst">Analyst</option>\r
            <option value="admin">Admin</option>\r
          </select>\r
        </div>\r
      </div>\r
      <div class="form-grid-2">\r
        <div class="form-group"><label class="form-label">Branch</label>\r
          <select class="form-select" id="uBranch">\r
            <option value="All Branches">All Branches</option>\r
            <option value="Riyadh">Riyadh</option>\r
            <option value="Jeddah">Jeddah</option>\r
            <option value="Dammam">Dammam</option>\r
          </select>\r
        </div>\r
        <div class="form-group"><label class="form-label">Status</label>\r
          <select class="form-select" id="uStatus">\r
            <option value="active">Active</option>\r
            <option value="pending">Pending</option>\r
            <option value="suspended">Suspended</option>\r
          </select>\r
        </div>\r
      </div>\r
      <div class="form-group"><label class="form-label">Organization / Company</label><input class="form-input" id="uOrg" placeholder="Company name"></div>\r
      <div class="form-group"><label class="form-label">Notes</label><textarea class="form-input" id="uNotes" rows="2" placeholder="Internal notes about this user…"></textarea></div>\r
      <div style="display:flex;align-items:center;gap:14px;padding:12px 0;border-top:1px solid var(--border);margin-top:4px">\r
        <label class="toggle-switch">\r
          <div class="toggle-track on" id="uEmailVerified" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>\r
          <span style="font-size:13px;color:var(--text-dim);font-weight:600">Email Verified</span>\r
        </label>\r
        <label class="toggle-switch">\r
          <div class="toggle-track" id="uSendWelcome" onclick="toggleSetting(this)"><div class="toggle-thumb"></div></div>\r
          <span style="font-size:13px;color:var(--text-dim);font-weight:600">Send Welcome Email</span>\r
        </label>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModalById('userModal')">Cancel</button>\r
      <button class="btn btn-primary" onclick="saveUser()" id="saveUserBtn">Create User</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Create / Edit Branch Modal -->\r
<div class="modal-overlay" id="branchModal" onclick="closeModal('branchModal',event)">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div><div class="modal-title" id="branchModalTitle">Add Branch</div><div class="modal-subtitle">New service branch configuration</div></div>\r
      <button class="modal-close" onclick="closeModalById('branchModal')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <input type="hidden" id="editBranchId">\r
      <div class="form-grid-2">\r
        <div class="form-group"><label class="form-label">Branch Name (EN) *</label><input class="form-input" id="bNameEn" placeholder="e.g. Riyadh North"></div>\r
        <div class="form-group"><label class="form-label">Branch Name (AR) *</label><input class="form-input" id="bNameAr" placeholder="مثال: الرياض الشمال" dir="rtl"></div>\r
      </div>\r
      <div class="form-grid-2">\r
        <div class="form-group"><label class="form-label">Region</label>\r
          <select class="form-select" id="bRegion">\r
            <option>Riyadh</option><option>Jeddah</option><option>Dammam</option><option>Other</option>\r
          </select>\r
        </div>\r
        <div class="form-group"><label class="form-label">Manager Name</label><input class="form-input" id="bManager" placeholder="Branch manager"></div>\r
      </div>\r
      <div class="form-group"><label class="form-label">Address</label><input class="form-input" id="bAddress" placeholder="Full branch address"></div>\r
      <div class="form-grid-2">\r
        <div class="form-group"><label class="form-label">CX Score Override (/5)</label><input class="form-input" type="number" id="bCxScore" placeholder="3.8" min="1" max="5" step="0.1"></div>\r
        <div class="form-group"><label class="form-label">Sample Size (N)</label><input class="form-input" type="number" id="bSampleN" placeholder="100" min="0"></div>\r
      </div>\r
      <div class="form-group"><label class="form-label">Status</label>\r
        <select class="form-select" id="bStatus">\r
          <option value="active">Active</option>\r
          <option value="inactive">Inactive</option>\r
          <option value="pilot">Pilot</option>\r
        </select>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModalById('branchModal')">Cancel</button>\r
      <button class="btn btn-primary" onclick="saveBranch()" id="saveBranchBtn">Save Branch</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- View User Modal -->\r
<div class="modal-overlay" id="viewUserModal" onclick="closeModal('viewUserModal',event)">\r
  <div class="modal modal-lg">\r
    <div class="modal-header">\r
      <div><div class="modal-title" id="viewUserTitle">User Profile</div><div class="modal-subtitle" id="viewUserSub">Full account details</div></div>\r
      <button class="modal-close" onclick="closeModalById('viewUserModal')">✕</button>\r
    </div>\r
    <div class="modal-body" id="viewUserBody"></div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModalById('viewUserModal')">Close</button>\r
      <button class="btn btn-primary" onclick="editUserFromView()" id="editFromViewBtn">Edit User</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Confirm Danger Modal -->\r
<div class="modal-overlay" id="confirmModal" onclick="closeModal('confirmModal',event)">\r
  <div class="modal confirm-modal">\r
    <div class="confirm-body">\r
      <div class="confirm-icon" id="confirmIcon">⚠️</div>\r
      <div class="confirm-title" id="confirmTitle">Are you sure?</div>\r
      <div class="confirm-message" id="confirmMessage">This action cannot be undone.</div>\r
    </div>\r
    <div class="modal-footer" style="justify-content:center">\r
      <button class="btn btn-secondary" onclick="closeModalById('confirmModal')">Cancel</button>\r
      <button class="btn btn-danger" onclick="executeConfirmedAction()" id="confirmActionBtn">Confirm</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Schedule Export Modal -->\r
<div class="modal-overlay" id="scheduleModal" onclick="closeModal('scheduleModal',event)">\r
  <div class="modal">\r
    <div class="modal-header">\r
      <div><div class="modal-title">Schedule Export</div><div class="modal-subtitle">Set up automated periodic report generation</div></div>\r
      <button class="modal-close" onclick="closeModalById('scheduleModal')">✕</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="form-group"><label class="form-label">Report Name</label><input class="form-input" id="schedName" placeholder="Weekly CX Summary"></div>\r
      <div class="form-grid-2">\r
        <div class="form-group"><label class="form-label">Frequency</label>\r
          <select class="form-select" id="schedFreq"><option>Weekly</option><option>Monthly</option><option>Quarterly</option></select>\r
        </div>\r
        <div class="form-group"><label class="form-label">Format</label>\r
          <select class="form-select" id="schedFormat"><option>PDF</option><option>Excel</option><option>CSV</option></select>\r
        </div>\r
      </div>\r
      <div class="form-group"><label class="form-label">Send To (email)</label><input class="form-input" id="schedEmail" placeholder="manager@company.com"></div>\r
      <div class="form-group"><label class="form-label">Branch</label>\r
        <select class="form-select" id="schedBranch"><option>All Branches</option><option>Riyadh</option><option>Jeddah</option><option>Dammam</option></select>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" onclick="closeModalById('scheduleModal')">Cancel</button>\r
      <button class="btn btn-primary" onclick="saveSchedule()">Create Schedule</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Toast container -->\r
<div class="toast-container" id="toastContainer"></div>\r
\r
<!-- ════════════════════════════════════════\r
  JAVASCRIPT\r
════════════════════════════════════════ -->\r
<script>\r
/* ═══════════════════════════════════════════\r
   CONSTANTS & STATE\r
═══════════════════════════════════════════ */\r
const API_BASE = 'https://roshd-professional-s8lh.vercel.app';\r
\r
const BRANCHES_DATA = {\r
  'All Branches': { score:3.8, explanatory:72, top:'Quality',        topAr:'الجودة',        n:300 },\r
  'Riyadh':       { score:3.7, explanatory:74, top:'Quality',        topAr:'الجودة',        n:100 },\r
  'Jeddah':       { score:3.4, explanatory:69, top:'Communication',  topAr:'التواصل',       n:100 },\r
  'Dammam':       { score:3.2, explanatory:63, top:'Price Fairness', topAr:'عدالة السعر',   n:100 }\r
};\r
\r
const DRIVERS_DATA = {\r
  'All Branches': [\r
    {name:'Quality',        impact:0.34, avg:3.4, decision:'Invest'},\r
    {name:'Communication',  impact:0.23, avg:3.0, decision:'Selective'},\r
    {name:'Price Fairness', impact:0.12, avg:2.9, decision:'Monitor'},\r
    {name:'Advisor Behavior',impact:0.10,avg:3.8, decision:'Maintain'},\r
    {name:'Speed',          impact:0.01, avg:1.4, decision:'Do not overinvest'}\r
  ],\r
  'Riyadh': [\r
    {name:'Quality',        impact:0.34, avg:3.5, decision:'Invest'},\r
    {name:'Advisor Behavior',impact:0.15,avg:3.9, decision:'Optimize'},\r
    {name:'Communication',  impact:0.11, avg:3.2, decision:'Selective'},\r
    {name:'Price Fairness', impact:0.07, avg:3.0, decision:'Monitor'},\r
    {name:'Speed',          impact:0.01, avg:1.5, decision:'Do not overinvest'}\r
  ],\r
  'Jeddah': [\r
    {name:'Communication',  impact:0.26, avg:2.8, decision:'Invest'},\r
    {name:'Quality',        impact:0.18, avg:3.4, decision:'Optimize'},\r
    {name:'Price Fairness', impact:0.12, avg:2.7, decision:'Selective'},\r
    {name:'Advisor Behavior',impact:0.08,avg:3.5, decision:'Monitor'},\r
    {name:'Speed',          impact:0.01, avg:1.3, decision:'Do not overinvest'}\r
  ],\r
  'Dammam': [\r
    {name:'Price Fairness', impact:0.22, avg:2.5, decision:'Invest'},\r
    {name:'Communication',  impact:0.15, avg:3.0, decision:'Optimize'},\r
    {name:'Quality',        impact:0.10, avg:3.3, decision:'Selective'},\r
    {name:'Advisor Behavior',impact:0.06,avg:3.4, decision:'Monitor'},\r
    {name:'Speed',          impact:0.01, avg:1.2, decision:'Do not overinvest'}\r
  ]\r
};\r
\r
/* Admin branch overrides (editable) */\r
let branchOverrides = JSON.parse(JSON.stringify(BRANCHES_DATA));\r
\r
/* Model weight overrides */\r
let modelOverrides = {};\r
Object.keys(DRIVERS_DATA).forEach(b => {\r
  modelOverrides[b] = DRIVERS_DATA[b].map(d => ({...d}));\r
});\r
\r
/* State */\r
let currentAdmin = null;\r
let pendingDangerAction = null;\r
let usersData = [];\r
let branchesData = [];\r
let auditLog = [];\r
let sortState = {};\r
let userPage = 1; const USER_PAGE_SIZE = 10;\r
let recordPage = 1; const RECORD_PAGE_SIZE = 15;\r
let auditPage = 1; const AUDIT_PAGE_SIZE = 20;\r
let editingUserId = null;\r
let editingBranchId = null;\r
let contentTabActive = 'questionnaire';\r
let scheduledExportsList = [];\r
let reportHistory = [];\r
\r
/* ═══════════════════════════════════════════\r
   QUESTIONNAIRE DATA (from customer side)\r
═══════════════════════════════════════════ */\r
let questionnaireItems = [\r
  {code:'Q1', construct:'Quality',       status:'retained', en:'The repair/service was completed correctly the first time.',             ar:'تم إكمال الإصلاح من أول مرة بشكل صحيح.'},\r
  {code:'Q2', construct:'Quality',       status:'retained', en:'The delivered work met my expectations.',                                ar:'العمل المُسلَّم كان بمستوى توقّعاتي.'},\r
  {code:'Q3', construct:'Quality',       status:'retained', en:'The vehicle was returned in good condition.',                            ar:'عُادت المركبة بحالة جيدة.'},\r
  {code:'Q4', construct:'Quality',       status:'removed',  en:'The quality of work increased my confidence in the service center.',    ar:'الجودة زادت ثقتي بالمركز.'},\r
  {code:'C1', construct:'Communication', status:'retained', en:'I received clear updates during the service process.',                   ar:'تلقيت تحديثات واضحة أثناء الخدمة.'},\r
  {code:'C2', construct:'Communication', status:'retained', en:'The advisor explained the required work clearly.',                       ar:'أوضح المستشار العمل المطلوب بوضوح.'},\r
  {code:'C3', construct:'Communication', status:'retained', en:'I was informed before any major change or delay.',                       ar:'أُبلِغت قبل أي تغيير كبير أو تأخير.'},\r
  {code:'C4', construct:'Communication', status:'removed',  en:'Communication was easy to understand.',                                  ar:'التواصل كان سهل الفهم.'},\r
  {code:'P1', construct:'Price',         status:'retained', en:'The price was fair compared with the service.',                          ar:'السعر كان عادلًا مقارنة بالخدمة.'},\r
  {code:'P2', construct:'Price',         status:'retained', en:'The estimate was clear before approval.',                                ar:'التقدير كان واضحًا قبل الموافقة.'},\r
  {code:'P3', construct:'Price',         status:'retained', en:'The final invoice matched what was explained.',                          ar:'الفاتورة النهائية طابقت الشرح.'},\r
  {code:'P4', construct:'Price',         status:'removed',  en:'The value justified the amount paid.',                                   ar:'القيمة برّرت المبلغ المدفوع.'},\r
  {code:'S1', construct:'Speed',         status:'retained', en:'The service was completed within a reasonable time.',                    ar:'أُنجزت الخدمة في وقت معقول.'},\r
  {code:'S2', construct:'Speed',         status:'retained', en:'Waiting time was acceptable.',                                           ar:'وقت الانتظار مقبول.'},\r
  {code:'S3', construct:'Speed',         status:'retained', en:'Delivery matched the promised timing.',                                  ar:'التسليم طابق الموعد المُعلَن.'},\r
  {code:'S4', construct:'Speed',         status:'removed',  en:'Total process time was convenient.',                                     ar:'وقت العملية كان مناسبًا.'},\r
  {code:'OS1',construct:'CX Score',      status:'retained', en:'Overall I am satisfied with the service experience.',                   ar:'بشكل عام راضٍ عن تجربة الخدمة.'},\r
  {code:'OS2',construct:'CX Score',      status:'retained', en:'The experience met my expectations.',                                   ar:'التجربة نالت توقّعاتي.'},\r
  {code:'OS3',construct:'CX Score',      status:'retained', en:'I would consider returning.',                                            ar:'قد أعود لنفس المركز.'},\r
];\r
\r
/* Services data */\r
let servicesData = [\r
  {id:1, num:'01', nameEn:'Training & Capability Building', nameAr:'التدريب وبناء القدرات', descEn:'Practical, role-based training linked directly to real outcomes.', descAr:'تدريب عملي مرتبط مباشرة بنتائج واقعية.'},\r
  {id:2, num:'02', nameEn:'Consulting & Implementation',    nameAr:'الاستشارات والتنفيذ',   descEn:"We don't advise—we design and implement working systems.",        descAr:'لا نقدم توصيات فقط، بل نصمم ونطبق أنظمة عمل فعلية.'},\r
  {id:3, num:'03', nameEn:'Performance & Data Intelligence', nameAr:'تحليل الأداء والبيانات', descEn:'Turning data into clear, measurable decisions.',              descAr:'تحويل البيانات إلى قرارات واضحة وقابلة للقياس.'},\r
  {id:4, num:'04', nameEn:'System Enablement',              nameAr:'تمكين الأنظمة',          descEn:'Ensuring business systems are actually used—not just installed.', descAr:'ضمان استخدام الأنظمة فعلياً داخل التشغيل.'},\r
  {id:5, num:'05', nameEn:'Research & Knowledge Solutions', nameAr:'حلول البحث والمعرفة',   descEn:'From academic frameworks to real-world application.',           descAr:'ربط المنهج العلمي بالتطبيق العملي.'},\r
];\r
\r
/* Datasets */\r
let datasets = [\r
  {id:1, name:'Q2_2026_Full_Survey.csv',   period:'Q2 2026', rows:412, status:'active',   uploader:'Super Admin', date:'2026-04-01'},\r
  {id:2, name:'Q1_2026_Survey_Riyadh.csv', period:'Q1 2026', rows:118, status:'archived', uploader:'Super Admin', date:'2026-01-15'},\r
  {id:3, name:'Pilot_Test_2026.csv',       period:'Pilot',   rows:30,  status:'pilot',    uploader:'Analyst',     date:'2025-12-10'},\r
];\r
\r
/* Model quality metrics (editable) */\r
let modelMetrics = { r2:'72%', alpha:'0.88', cr:'0.91', ave:'0.64', htmt:'0.78' };\r
\r
/* ═══════════════════════════════════════════\r
   GENERATE MOCK USERS\r
═══════════════════════════════════════════ */\r
(function generateUsers() {\r
  const firstNames = ['Ahmed','Mohammed','Abdullah','Khalid','Omar','Saad','Fahad','Turki','Nora','Fatima','Reem','Sara','Maha','Hana','Lina','Yasmine','Hassan','Ibrahim','Yusuf','Tariq'];\r
  const lastNames  = ['Al-Rashidi','Al-Zahrani','Al-Otaibi','Al-Harbi','Al-Qahtani','Al-Shehri','Al-Ghamdi','Al-Dosari','Al-Mutairi','Al-Harthi'];\r
  const branches   = ['Riyadh','Jeddah','Dammam'];\r
  const roles      = ['customer','customer','customer','customer','analyst','admin'];\r
  const statuses   = ['active','active','active','active','active','suspended','pending'];\r
  const orgs       = ['ARAMCO','SABIC','STC','Almarai','NCB','Riyad Bank','Dar Al Arkan','Mobily','ACWA Power','Saudi Electricity'];\r
  for (let i = 1; i <= 50; i++) {\r
    const fn   = firstNames[(i*7)%firstNames.length];\r
    const ln   = lastNames[(i*3)%lastNames.length];\r
    const br   = branches[(i*11)%branches.length];\r
    const role = roles[(i*5)%roles.length];\r
    const stat = statuses[(i*13)%statuses.length];\r
    const org  = orgs[(i*9)%orgs.length];\r
    const d    = new Date(2026,3,1);\r
    d.setDate(d.getDate() - (i*7)%90);\r
    const loginD = new Date(2026,4,1);\r
    loginD.setDate(loginD.getDate() - (i*3)%30);\r
    usersData.push({\r
      id: \`USR-\${String(i).padStart(3,'0')}\`,\r
      firstName: fn, lastName: ln,\r
      email: \`\${fn.toLowerCase()}.\${ln.toLowerCase().replace('al-','')}@\${org.toLowerCase().replace(/ /g,'')}.com\`,\r
      role, branch: br, status: stat,\r
      org, loginCount: (i*17)%120 + 1,\r
      createdAt: d.toISOString().slice(0,10),\r
      lastLogin: loginD.toISOString().slice(0,10),\r
      notes: ''\r
    });\r
  }\r
})();\r
\r
/* ═══════════════════════════════════════════\r
   GENERATE AUDIT LOG\r
═══════════════════════════════════════════ */\r
(function generateAudit() {\r
  const actions = [\r
    {action:'LOGIN',   resource:'Admin Auth',        detail:'Successful admin login',           ip:'192.168.1.10'},\r
    {action:'CREATE',  resource:'User USR-001',       detail:'New customer account created',     ip:'192.168.1.10'},\r
    {action:'UPDATE',  resource:'Branch Riyadh',      detail:'CX score updated to 3.7',          ip:'192.168.1.10'},\r
    {action:'DELETE',  resource:'User USR-048',       detail:'Account permanently deleted',      ip:'192.168.1.12'},\r
    {action:'UPLOAD',  resource:'Dataset Q2_2026',    detail:'412 records uploaded and validated',ip:'192.168.1.10'},\r
    {action:'EXPORT',  resource:'Report Executive',   detail:'Executive PDF generated',          ip:'192.168.1.10'},\r
    {action:'OVERRIDE',resource:'Model Weights',      detail:'Quality weight set to 0.38',       ip:'192.168.1.10'},\r
    {action:'UPDATE',  resource:'Questionnaire C4',   detail:'Item status changed to removed',   ip:'192.168.1.14'},\r
    {action:'CREATE',  resource:'Branch Dammam North',detail:'New branch added',                 ip:'192.168.1.10'},\r
    {action:'UPDATE',  resource:'Settings',           detail:'Registration toggle enabled',      ip:'192.168.1.10'},\r
    {action:'DELETE',  resource:'Dataset Q3_2025',    detail:'Archived dataset removed',         ip:'192.168.1.10'},\r
    {action:'LOGIN',   resource:'Admin Auth',         detail:'Session restored from token',      ip:'192.168.1.11'},\r
    {action:'EXPORT',  resource:'Audit Log',          detail:'Log exported as CSV',              ip:'192.168.1.10'},\r
    {action:'UPDATE',  resource:'User USR-015',       detail:'Role changed from customer to analyst', ip:'192.168.1.10'},\r
    {action:'CREATE',  resource:'Schedule Weekly',    detail:'Weekly report schedule created',   ip:'192.168.1.10'},\r
  ];\r
  const now = new Date(2026,4,5,14,22,0);\r
  actions.forEach((a,i) => {\r
    const ts = new Date(now - i * 3600000 * 1.3);\r
    auditLog.push({\r
      id: \`AL-\${String(i+1).padStart(3,'0')}\`,\r
      timestamp: ts.toISOString().replace('T',' ').slice(0,19),\r
      admin: i % 4 === 3 ? 'Manager' : 'Super Admin',\r
      action: a.action, resource: a.resource,\r
      detail: a.detail, ip: a.ip, status: 'SUCCESS'\r
    });\r
  });\r
})();\r
\r
/* Generate branch admin cards data */\r
(function generateBranches() {\r
  ['Riyadh','Jeddah','Dammam'].forEach((name,i) => {\r
    branchesData.push({\r
      id: \`BR-\${String(i+1).padStart(2,'0')}\`,\r
      nameEn: name,\r
      nameAr: ['الرياض','جدة','الدمام'][i],\r
      region: name,\r
      manager: ['Khalid Al-Otaibi','Mohammed Al-Zahrani','Abdullah Al-Harbi'][i],\r
      address: [\`King Fahd Rd, \${name}\`],\r
      cxScore: [3.7,3.4,3.2][i],\r
      sampleN: 100,\r
      status: 'active'\r
    });\r
  });\r
})();\r
\r
/* Report history */\r
(function generateReportHistory() {\r
  const types  = ['Executive Summary','CX Drivers','Branch Comparison','Demographics','Full Export'];\r
  const fmts   = ['PDF','Excel','CSV','HTML'];\r
  const brs    = ['All Branches','Riyadh','Jeddah','Dammam'];\r
  for (let i = 1; i <= 8; i++) {\r
    const d = new Date(2026,4,5); d.setDate(d.getDate() - i*3);\r
    reportHistory.push({\r
      id:\`RPT-\${String(i).padStart(3,'0')}\`,\r
      name:\`\${types[(i-1)%types.length]} — \${brs[(i-1)%brs.length]}\`,\r
      type: types[(i-1)%types.length],\r
      branch: brs[(i-1)%brs.length],\r
      format: fmts[(i-1)%fmts.length],\r
      by:'Super Admin',\r
      date: d.toISOString().slice(0,10),\r
      status: i<3?'Ready':'Archived'\r
    });\r
  }\r
})();\r
\r
/* Scheduled exports */\r
scheduledExportsList = [\r
  {id:'SCH-001',name:'Weekly CX Summary',freq:'Weekly',format:'PDF',branch:'All Branches',email:'admin@roshd.com',active:true},\r
  {id:'SCH-002',name:'Monthly Branch Comparison',freq:'Monthly',format:'Excel',branch:'Riyadh',email:'manager@roshd.com',active:false},\r
];\r
\r
/* ═══════════════════════════════════════════\r
   UTILITY FUNCTIONS\r
═══════════════════════════════════════════ */\r
function toast(msg, type='success', icon='✓') {\r
  const container = document.getElementById('toastContainer');\r
  const el = document.createElement('div');\r
  el.className = \`toast \${type}\`;\r
  const icons = {success:'✓', error:'✕', warning:'⚠', info:'ℹ'};\r
  el.innerHTML = \`<span style="font-size:16px">\${icons[type]||icon}</span>\${msg}\`;\r
  container.appendChild(el);\r
  setTimeout(() => { el.style.opacity='0'; el.style.transform='translateX(100%)'; el.style.transition='all 0.3s ease'; setTimeout(()=>el.remove(),300); }, 3500);\r
}\r
\r
function addAuditEntry(action, resource, detail) {\r
  const now = new Date(2026,4,5);\r
  auditLog.unshift({\r
    id:\`AL-\${String(auditLog.length+1).padStart(3,'0')}\`,\r
    timestamp: now.toISOString().replace('T',' ').slice(0,19),\r
    admin: currentAdmin?.name || 'Super Admin',\r
    action, resource, detail,\r
    ip: '192.168.1.10',\r
    status: 'SUCCESS'\r
  });\r
  const badge = document.getElementById('auditBadge');\r
  if (badge) badge.textContent = Math.min(99, auditLog.filter(a=>a.action!=='LOGIN').length);\r
}\r
\r
function pct(score) { return Math.round((score/5)*100); }\r
\r
function scoreColor(score) {\r
  if (score >= 4)   return 'var(--green)';\r
  if (score >= 3.5) return 'var(--gold)';\r
  if (score >= 3)   return 'var(--amber)';\r
  return 'var(--red)';\r
}\r
\r
function formatScore(score) { return \`\${pct(score)}% (\${Number(score).toFixed(1)})\`; }\r
\r
function impactPct(impact) { return \`\${Math.round(impact*100)}%\`; }\r
\r
function togglePw(id, btn) {\r
  const inp = document.getElementById(id);\r
  if (!inp || !btn) return;\r
  inp.type = inp.type === 'password' ? 'text' : 'password';\r
}\r
\r
function toggleSetting(el) {\r
  el.classList.toggle('on');\r
}\r
\r
function closeModal(modalId, event) {\r
  if (event.target === document.getElementById(modalId)) closeModalById(modalId);\r
}\r
function closeModalById(id) {\r
  document.getElementById(id).classList.remove('open');\r
}\r
function openModal(id) {\r
  document.getElementById(id).classList.add('open');\r
}\r
\r
function confirmDanger(action, title, message) {\r
  pendingDangerAction = action;\r
  document.getElementById('confirmTitle').textContent   = title;\r
  document.getElementById('confirmMessage').textContent = message;\r
  const icons = { 'delete':'🗑️', 'clear-cache':'🔄', 'reset-filters':'⚙️', 'flush-sessions':'🚪', 'reset-model':'📊', 'clear-audit':'🗃️' };\r
  document.getElementById('confirmIcon').textContent = icons[action] || '⚠️';\r
  openModal('confirmModal');\r
}\r
\r
function executeConfirmedAction() {\r
  const a = pendingDangerAction;\r
  closeModalById('confirmModal');\r
  if (!a) return;\r
  const msgs = {\r
    'delete':        \`User deleted successfully.\`,\r
    'clear-cache':   \`System cache cleared. Clients will reload fresh data.\`,\r
    'reset-filters': \`All user filter preferences reset.\`,\r
    'flush-sessions':\`All active sessions flushed. Users logged out.\`,\r
    'reset-model':   \`Model overrides reset to calculated defaults.\`,\r
    'clear-audit':   \`Audit log cleared.\`,\r
    'suspend':       \`Selected users suspended.\`,\r
  };\r
  if (a.startsWith('delete-user-')) {\r
    const uid = a.replace('delete-user-','');\r
    usersData = usersData.filter(u => u.id !== uid);\r
    renderUsersTable();\r
    addAuditEntry('DELETE', \`User \${uid}\`, 'Account permanently deleted');\r
    toast(\`User \${uid} deleted.\`,'success');\r
  } else if (a.startsWith('delete-branch-')) {\r
    const bid = a.replace('delete-branch-','');\r
    branchesData = branchesData.filter(b => b.id !== bid);\r
    renderBranchPanel();\r
    addAuditEntry('DELETE', \`Branch \${bid}\`, 'Branch removed');\r
    toast('Branch deleted.','success');\r
  } else if (a.startsWith('delete-record-')) {\r
    toast('Record deleted.','success');\r
    addAuditEntry('DELETE', 'Record', 'Response record removed');\r
  } else if (a === 'reset-model') {\r
    modelOverrides = {};\r
    Object.keys(DRIVERS_DATA).forEach(b => { modelOverrides[b] = DRIVERS_DATA[b].map(d=>({...d})); });\r
    renderModelWeights();\r
    addAuditEntry('OVERRIDE','Model Weights','All driver weight overrides reset to defaults');\r
    toast('Model weights reset to defaults.','success');\r
  } else if (a === 'clear-audit') {\r
    auditLog = [];\r
    renderAuditLog();\r
    toast('Audit log cleared.','warning');\r
  } else {\r
    toast(msgs[a] || 'Action completed.','success');\r
    addAuditEntry('OVERRIDE', 'System', msgs[a] || 'Admin action executed');\r
  }\r
  pendingDangerAction = null;\r
}\r
\r
/* ═══════════════════════════════════════════\r
   LOGIN\r
═══════════════════════════════════════════ */\r
async function handleAdminLogin() {\r
  const email    = document.getElementById('adminEmail').value.trim();\r
  const password = document.getElementById('adminPassword').value;\r
  const errorEl  = document.getElementById('loginError');\r
  const btnEl    = document.getElementById('loginBtn');\r
  errorEl.classList.remove('show');\r
\r
  if (!email || !password) {\r
    errorEl.textContent = 'Please enter your email and password.';\r
    errorEl.classList.add('show'); return;\r
  }\r
\r
  const orig = btnEl.innerHTML;\r
  btnEl.disabled = true; btnEl.textContent = 'Signing in…';\r
\r
  /* Demo check */\r
  if (email === 'admin@roshd.com' && password === 'admin123') {\r
    launchAdmin({name:'Super Admin', email});\r
    btnEl.disabled = false; btnEl.innerHTML = orig;\r
    return;\r
  }\r
\r
  try {\r
    const res  = await fetch(API_BASE + '/api/auth/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email,password}) });\r
    let data = {};\r
    try { data = await res.json(); } catch(_) {}\r
    if (data.success) {\r
      /* Accept any logged-in user as admin in demo — real deployment would check role */\r
      launchAdmin({name: data.user?.first_name ? \`\${data.user.first_name} \${data.user.last_name||''}\`.trim() : email, email});\r
    } else {\r
      errorEl.textContent = data.message || 'Invalid admin credentials.';\r
      errorEl.classList.add('show');\r
    }\r
  } catch(_) {\r
    errorEl.textContent = 'Cannot reach server. Use demo credentials: admin@roshd.com / admin123';\r
    errorEl.classList.add('show');\r
  } finally {\r
    btnEl.disabled = false; btnEl.innerHTML = orig;\r
  }\r
}\r
\r
function launchAdmin(user) {\r
  currentAdmin = user;\r
  document.getElementById('loginScreen').style.display = 'none';\r
  document.getElementById('adminApp').classList.add('open');\r
  document.getElementById('adminDisplayName').textContent = user.name;\r
  document.getElementById('adminAvatar').textContent = user.name.charAt(0).toUpperCase();\r
  addAuditEntry('LOGIN','Admin Auth','Successful admin login');\r
  initAllPanels();\r
  toast(\`Welcome, \${user.name}!\`,'success');\r
}\r
\r
function handleLogout() {\r
  addAuditEntry('LOGIN','Admin Auth','Admin logged out');\r
  document.getElementById('adminApp').classList.remove('open');\r
  document.getElementById('loginScreen').style.display = 'flex';\r
  document.getElementById('adminEmail').value = '';\r
  document.getElementById('adminPassword').value = '';\r
  currentAdmin = null;\r
  toast('Logged out successfully.','info');\r
}\r
\r
/* ═══════════════════════════════════════════\r
   PANEL NAVIGATION\r
═══════════════════════════════════════════ */\r
const PANEL_META = {\r
  overview:   {title:'Overview',              crumb:'Dashboard'},\r
  analytics:  {title:'Live Analytics',        crumb:'Intelligence'},\r
  users:      {title:'User Management',       crumb:'Management'},\r
  branches:   {title:'Branch Management',     crumb:'Management'},\r
  data:       {title:'Data Management',       crumb:'Management'},\r
  content:    {title:'Content & Questionnaire',crumb:'Management'},\r
  model:      {title:'Model & Weights',       crumb:'Intelligence'},\r
  reports:    {title:'Reports & Export',      crumb:'Output'},\r
  settings:   {title:'Settings',             crumb:'System'},\r
  audit:      {title:'Audit Log',             crumb:'System'},\r
};\r
\r
function showPanel(id, btn) {\r
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));\r
  const panel = document.getElementById('panel-' + id);\r
  if (panel) panel.classList.add('active');\r
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));\r
  const navBtn = document.querySelector(\`[data-panel="\${id}"]\`) || btn;\r
  if (navBtn) navBtn.classList.add('active');\r
  const meta = PANEL_META[id] || {title:id, crumb:id};\r
  document.getElementById('topbarTitle').textContent = meta.title;\r
  document.getElementById('topbarCrumb').textContent = meta.crumb;\r
  closeSidebar();\r
  /* Lazy render */\r
  if (id === 'analytics')  renderAnalytics();\r
  if (id === 'users')      renderUsersTable();\r
  if (id === 'branches')   renderBranchPanel();\r
  if (id === 'data')       renderDataPanel();\r
  if (id === 'content')    renderContentPanel();\r
  if (id === 'model')      renderModelWeights();\r
  if (id === 'reports')    renderReports();\r
  if (id === 'settings')   {}\r
  if (id === 'audit')      renderAuditLog();\r
}\r
\r
/* ═══════════════════════════════════════════\r
   SIDEBAR MOBILE\r
═══════════════════════════════════════════ */\r
function toggleSidebar() {\r
  const sb = document.getElementById('sidebar');\r
  const ov = document.getElementById('sidebarOverlay');\r
  const open = sb.classList.toggle('open');\r
  ov.classList.toggle('open', open);\r
}\r
function closeSidebar() {\r
  document.getElementById('sidebar').classList.remove('open');\r
  document.getElementById('sidebarOverlay').classList.remove('open');\r
}\r
\r
/* ═══════════════════════════════════════════\r
   INIT ALL PANELS\r
═══════════════════════════════════════════ */\r
function initAllPanels() {\r
  renderOverview();\r
}\r
\r
/* ═══════════════════════════════════════════\r
   OVERVIEW PANEL\r
═══════════════════════════════════════════ */\r
function refreshOverview() { renderOverview(); toast('Overview refreshed.','info'); }\r
\r
function renderOverview() {\r
  /* Stats */\r
  const stats = [\r
    {label:'Total Users', value: usersData.length, trend:'+12', trendDir:'up', accent:'var(--gold)',    iconBg:'var(--gold-dim)',   icon:'👥'},\r
    {label:'Active Users', value: usersData.filter(u=>u.status==='active').length, trend:'+5', trendDir:'up', accent:'var(--green)', iconBg:'var(--green-dim)', icon:'✓'},\r
    {label:'Total Sample N', value:'300', trend:'0', trendDir:'neutral', accent:'var(--blue)', iconBg:'var(--blue-dim)', icon:'📊'},\r
    {label:'Avg CX Score',  value:'76% (3.8)', trend:'+0.3', trendDir:'up', accent:'var(--purple)', iconBg:'var(--purple-dim)', icon:'⭐'},\r
    {label:'Model Power',   value:'72%',  trend:'+2%', trendDir:'up', accent:'var(--teal)',   iconBg:'var(--teal-dim)',   icon:'🧠'},\r
    {label:'Branches',      value: branchesData.length, trend:'0', trendDir:'neutral', accent:'var(--amber)', iconBg:'var(--amber-dim)', icon:'🏢'},\r
  ];\r
  document.getElementById('overviewStats').innerHTML = stats.map(s =>\r
    \`<div class="stat-card" style="--accent:\${s.accent}">\r
      <div class="stat-head">\r
        <div class="stat-icon" style="background:\${s.iconBg}"><span style="font-size:18px">\${s.icon}</span></div>\r
        <span class="stat-trend \${s.trendDir}">\${s.trendDir==='up'?'↑':s.trendDir==='down'?'↓':'—'} \${s.trend}</span>\r
      </div>\r
      <div class="stat-value">\${s.value}</div>\r
      <div class="stat-label">\${s.label}</div>\r
    </div>\`\r
  ).join('');\r
\r
  /* Branch scores */\r
  document.getElementById('branchScoresBars').innerHTML = ['Riyadh','Jeddah','Dammam'].map(b => {\r
    const d = branchOverrides[b]; const w = pct(d.score);\r
    return \`<div class="score-bar-row" style="margin-bottom:14px">\r
      <span class="score-bar-label">\${b}</span>\r
      <div class="score-bar-track"><div class="score-bar-fill" style="width:\${w}%;background:linear-gradient(90deg,\${scoreColor(d.score)},\${scoreColor(d.score)}cc)"></div></div>\r
      <span class="score-bar-val">\${formatScore(d.score)}</span>\r
    </div>\`;\r
  }).join('');\r
\r
  /* Activity feed */\r
  document.getElementById('activityFeed').innerHTML = auditLog.slice(0,6).map(a => {\r
    const colors = {CREATE:'var(--green)',UPDATE:'var(--blue)',DELETE:'var(--red)',LOGIN:'var(--gold)',EXPORT:'var(--teal)',UPLOAD:'var(--purple)',OVERRIDE:'var(--amber)'};\r
    const icons  = {CREATE:'✚',UPDATE:'✎',DELETE:'✕',LOGIN:'→',EXPORT:'↓',UPLOAD:'↑',OVERRIDE:'◈'};\r
    return \`<div class="activity-item">\r
      <div class="activity-icon" style="background:\${colors[a.action]||'var(--text-dim)'}22;border:1px solid \${colors[a.action]||'var(--border2)'}44">\r
        <span style="font-size:14px;color:\${colors[a.action]||'var(--text-dim)'};font-weight:800">\${icons[a.action]||'·'}</span>\r
      </div>\r
      <div class="activity-content">\r
        <div class="activity-text"><b>\${a.resource}</b> — \${a.detail}</div>\r
        <div class="activity-time">\${a.timestamp} · \${a.admin}</div>\r
      </div>\r
    </div>\`;\r
  }).join('');\r
\r
  /* Driver summary */\r
  const drivers = DRIVERS_DATA['All Branches'];\r
  document.getElementById('driverSummary').innerHTML = drivers.map(d => {\r
    const w = Math.min(100, Math.round(d.impact / 0.35 * 100));\r
    return \`<div class="score-bar-row" style="margin-bottom:12px">\r
      <span class="score-bar-label" style="width:130px">\${d.name}</span>\r
      <div class="score-bar-track"><div class="score-bar-fill" style="width:\${w}%;background:\${d.name==='Speed'?'var(--red)':'linear-gradient(90deg,var(--gold),var(--gold-light))'}"></div></div>\r
      <span class="score-bar-val">\${impactPct(d.impact)}</span>\r
    </div>\`;\r
  }).join('');\r
\r
  /* User segments */\r
  const roles = {};\r
  usersData.forEach(u => { roles[u.role] = (roles[u.role]||0)+1; });\r
  document.getElementById('userSegments').innerHTML = Object.entries(roles).map(([role,count]) => {\r
    const pct2 = Math.round(count/usersData.length*100);\r
    const clr = {admin:'var(--gold)',analyst:'var(--blue)',customer:'var(--green)'}[role]||'var(--text-dim)';\r
    return \`<div class="score-bar-row" style="margin-bottom:12px">\r
      <span class="score-bar-label" style="width:90px;text-transform:capitalize">\${role}</span>\r
      <div class="score-bar-track"><div class="score-bar-fill" style="width:\${pct2}%;background:\${clr}"></div></div>\r
      <span class="score-bar-val">\${count}</span>\r
    </div>\`;\r
  }).join('');\r
\r
  /* System health */\r
  const health = [\r
    {name:'API Server',      status:'Operational', color:'var(--green)'},\r
    {name:'Database',        status:'Operational', color:'var(--green)'},\r
    {name:'Analytics Engine',status:'Operational', color:'var(--green)'},\r
    {name:'Export Service',  status:'Degraded',    color:'var(--amber)'},\r
    {name:'Email Service',   status:'Operational', color:'var(--green)'},\r
  ];\r
  document.getElementById('systemHealth').innerHTML = health.map(h =>\r
    \`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.04)">\r
      <span style="font-size:13px;font-weight:600;color:var(--text)">\${h.name}</span>\r
      <span class="badge" style="background:\${h.color}22;color:\${h.color};border-color:\${h.color}44">\${h.status}</span>\r
    </div>\`\r
  ).join('');\r
}\r
\r
/* ═══════════════════════════════════════════\r
   ANALYTICS PANEL\r
═══════════════════════════════════════════ */\r
function renderAnalytics() {\r
  const branch = document.getElementById('analyticsBranch')?.value || 'All Branches';\r
  const d = branchOverrides[branch] || branchOverrides['All Branches'];\r
  const drivers = (modelOverrides[branch] || modelOverrides['All Branches'] || []);\r
\r
  /* KPIs */\r
  document.getElementById('analyticsKpis').innerHTML = [\r
    {label:'CX Score',      value:formatScore(d.score),    color:'var(--gold)',   icon:'⭐'},\r
    {label:'Model Power',   value:d.explanatory+'%',        color:'var(--blue)',   icon:'🧠'},\r
    {label:'Top Driver',    value:d.top,                    color:'var(--green)',  icon:'🎯'},\r
    {label:'Sample N',      value: d.n||300,               color:'var(--purple)', icon:'👥'},\r
  ].map(k =>\r
    \`<div class="stat-card" style="--accent:\${k.color}">\r
      <div class="stat-head"><div class="stat-icon" style="background:\${k.color}22"><span style="font-size:18px">\${k.icon}</span></div></div>\r
      <div class="stat-value">\${k.value}</div>\r
      <div class="stat-label">\${k.label}</div>\r
    </div>\`\r
  ).join('');\r
\r
  /* Driver bars */\r
  document.getElementById('analyticsDriverBars').innerHTML = drivers.map(dr => {\r
    const w = Math.min(100, Math.round(dr.impact/0.35*100));\r
    return \`<div class="score-bar-row" style="margin-bottom:14px">\r
      <span class="score-bar-label">\${dr.name}</span>\r
      <div class="score-bar-track"><div class="score-bar-fill" style="width:\${w}%;background:\${dr.name==='Speed'?'var(--red)':'linear-gradient(90deg,var(--gold),var(--gold-light))'}"></div></div>\r
      <span class="score-bar-val">\${impactPct(dr.impact)}</span>\r
    </div>\`;\r
  }).join('');\r
\r
  /* Branch comparison */\r
  document.getElementById('analyticsBranchComp').innerHTML = ['Riyadh','Jeddah','Dammam'].map(b => {\r
    const bd = branchOverrides[b]; const w = pct(bd.score);\r
    return \`<div class="score-bar-row" style="margin-bottom:14px">\r
      <span class="score-bar-label">\${b}</span>\r
      <div class="score-bar-track"><div class="score-bar-fill" style="width:\${w}%;background:linear-gradient(90deg,\${scoreColor(bd.score)},\${scoreColor(bd.score)}bb)"></div></div>\r
      <span class="score-bar-val">\${formatScore(bd.score)}</span>\r
    </div>\`;\r
  }).join('');\r
\r
  /* Demo breakdown */\r
  const demos = [{label:'Male',n:180},{label:'Female',n:120}];\r
  document.getElementById('analyticsDemoBreakdown').innerHTML =\r
    \`<div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-mute);margin-bottom:12px">Gender Split</div>\` +\r
    demos.map(item => {\r
      const w = Math.round(item.n/300*100);\r
      return \`<div class="score-bar-row" style="margin-bottom:12px">\r
        <span class="score-bar-label">\${item.label}</span>\r
        <div class="score-bar-track"><div class="score-bar-fill" style="width:\${w}%"></div></div>\r
        <span class="score-bar-val">\${w}% (\${item.n})</span>\r
      </div>\`;\r
    }).join('');\r
\r
  const ages = [{label:'<25',n:30},{label:'25–34',n:90},{label:'35–44',n:120},{label:'45+',n:60}];\r
  document.getElementById('analyticsAgeBreakdown').innerHTML =\r
    \`<div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-mute);margin-bottom:12px">Age Distribution</div>\` +\r
    ages.map(item => {\r
      const w = Math.round(item.n/300*100);\r
      return \`<div class="score-bar-row" style="margin-bottom:12px">\r
        <span class="score-bar-label">\${item.label}</span>\r
        <div class="score-bar-track"><div class="score-bar-fill" style="width:\${w}%"></div></div>\r
        <span class="score-bar-val">\${w}% (\${item.n})</span>\r
      </div>\`;\r
    }).join('');\r
}\r
\r
function exportAnalyticsReport() {\r
  toast('Analytics report generated and downloaded.','success');\r
  addAuditEntry('EXPORT','Analytics Report','Analytics overview exported');\r
}\r
\r
/* ═══════════════════════════════════════════\r
   USERS PANEL\r
═══════════════════════════════════════════ */\r
let filteredUsers = [];\r
\r
function filterUsers() {\r
  const q  = (document.getElementById('userSearch')?.value||'').toLowerCase();\r
  const role   = document.getElementById('userRoleFilter')?.value   || '';\r
  const status = document.getElementById('userStatusFilter')?.value || '';\r
  const branch = document.getElementById('userBranchFilter')?.value || '';\r
  filteredUsers = usersData.filter(u => {\r
    const fullName = \`\${u.firstName} \${u.lastName}\`.toLowerCase();\r
    const match = !q || fullName.includes(q) || u.email.toLowerCase().includes(q) || u.id.toLowerCase().includes(q);\r
    return match &&\r
      (!role   || u.role===role) &&\r
      (!status || u.status===status) &&\r
      (!branch || u.branch===branch);\r
  });\r
  userPage = 1;\r
  renderUsersTable();\r
}\r
\r
function renderUsersTable() {\r
  filterUsers();\r
}\r
\r
function renderUserTableWithData() {\r
  const tbody = document.getElementById('usersTbody');\r
  if (!tbody) return;\r
  const start = (userPage-1)*USER_PAGE_SIZE;\r
  const page  = filteredUsers.slice(start, start+USER_PAGE_SIZE);\r
  const statusBadge = {active:'badge-green', suspended:'badge-red', pending:'badge-amber'};\r
  const roleBadge   = {admin:'badge-gold', analyst:'badge-blue', customer:'badge-gray'};\r
  const avatarClass = {admin:'', analyst:'blue', customer:'green'};\r
  tbody.innerHTML = page.map(u =>\r
    \`<tr>\r
      <td><input type="checkbox" class="user-cb" value="\${u.id}" onchange="updateBulkButtons()"></td>\r
      <td><div class="user-cell">\r
        <div class="user-avatar \${avatarClass[u.role]||''}">\${u.firstName.charAt(0)}\${u.lastName.charAt(0)}</div>\r
        <div><div class="user-name">\${u.firstName} \${u.lastName}</div><div class="user-email">\${u.email}</div></div>\r
      </div></td>\r
      <td>\${u.branch}</td>\r
      <td><span class="badge \${roleBadge[u.role]||'badge-gray'}">\${u.role}</span></td>\r
      <td><span class="badge \${statusBadge[u.status]||'badge-gray'}">\${u.status}</span></td>\r
      <td><span style="font-family:var(--font-mono);font-size:12px">\${u.loginCount}</span></td>\r
      <td><span style="font-family:var(--font-mono);font-size:11px;color:var(--text-dim)">\${u.lastLogin}</span></td>\r
      <td><div class="row-actions">\r
        <button class="btn btn-secondary btn-sm btn-icon" onclick="viewUser('\${u.id}')" title="View">\r
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>\r
        </button>\r
        <button class="btn btn-secondary btn-sm btn-icon" onclick="editUser('\${u.id}')" title="Edit">\r
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>\r
        </button>\r
        <button class="btn btn-sm btn-icon" onclick="toggleUserStatus('\${u.id}')" title="\${u.status==='active'?'Suspend':'Activate'}" style="background:\${u.status==='active'?'var(--amber-dim)':'var(--green-dim)'};color:\${u.status==='active'?'#fcd34d':'#86efac'};border-color:\${u.status==='active'?'rgba(245,158,11,0.3)':'rgba(34,197,94,0.3)'}">\r
          \${u.status==='active'?'⏸':'▶'}\r
        </button>\r
        <button class="btn btn-danger btn-sm btn-icon" onclick="deleteUser('\${u.id}')" title="Delete">\r
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>\r
        </button>\r
      </div></td>\r
    </tr>\`\r
  ).join('') || \`<tr><td colspan="8"><div class="empty-state"><div class="empty-icon">👤</div><div class="empty-title">No users found</div><div class="empty-desc">Try changing your search or filters.</div></div></td></tr>\`;\r
\r
  const total = filteredUsers.length;\r
  const totalPages = Math.ceil(total/USER_PAGE_SIZE)||1;\r
  document.getElementById('usersPagination').innerHTML =\r
    \`<div class="pagination-info">Showing \${Math.min(start+1,total)}–\${Math.min(start+USER_PAGE_SIZE,total)} of \${total} users</div>\r
     <div class="pagination-btns">\r
       <button class="page-btn" onclick="setUserPage(\${userPage-1})" \${userPage<=1?'disabled':''}>‹</button>\r
       \${Array.from({length:Math.min(5,totalPages)},(_,i)=>{\r
         const p = Math.max(1,Math.min(totalPages-4,userPage-2))+i;\r
         return \`<button class="page-btn \${p===userPage?'active':''}" onclick="setUserPage(\${p})">\${p}</button>\`;\r
       }).join('')}\r
       <button class="page-btn" onclick="setUserPage(\${userPage+1})" \${userPage>=totalPages?'disabled':''}>›</button>\r
     </div>\`;\r
\r
  const badge = document.getElementById('userBadge');\r
  if (badge) badge.textContent = usersData.length;\r
}\r
\r
function setUserPage(p) { userPage = p; renderUserTableWithData(); }\r
\r
function filterUsers() {\r
  const q      = (document.getElementById('userSearch')?.value||'').toLowerCase();\r
  const role   = document.getElementById('userRoleFilter')?.value   || '';\r
  const status = document.getElementById('userStatusFilter')?.value || '';\r
  const branch = document.getElementById('userBranchFilter')?.value || '';\r
  filteredUsers = usersData.filter(u => {\r
    const fullName = \`\${u.firstName} \${u.lastName}\`.toLowerCase();\r
    const match = !q || fullName.includes(q) || u.email.toLowerCase().includes(q) || u.id.toLowerCase().includes(q);\r
    return match && (!role||u.role===role) && (!status||u.status===status) && (!branch||u.branch===branch);\r
  });\r
  userPage = 1;\r
  renderUserTableWithData();\r
}\r
\r
function renderUsersTable() { filteredUsers = [...usersData]; renderUserTableWithData(); setTimeout(filterUsers, 0); }\r
\r
function openCreateUser() {\r
  editingUserId = null;\r
  document.getElementById('userModalTitle').textContent = 'Add New User';\r
  document.getElementById('saveUserBtn').textContent = 'Create User';\r
  document.getElementById('editUserId').value = '';\r
  ['uFirstName','uLastName','uEmail','uPassword','uOrg','uNotes'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });\r
  document.getElementById('uRole').value   = 'customer';\r
  document.getElementById('uBranch').value = 'All Branches';\r
  document.getElementById('uStatus').value = 'active';\r
  document.getElementById('userModalError').classList.remove('show');\r
  openModal('userModal');\r
}\r
\r
function editUser(uid) {\r
  const u = usersData.find(x=>x.id===uid);\r
  if (!u) return;\r
  editingUserId = uid;\r
  document.getElementById('userModalTitle').textContent = 'Edit User';\r
  document.getElementById('saveUserBtn').textContent    = 'Save Changes';\r
  document.getElementById('editUserId').value           = uid;\r
  document.getElementById('uFirstName').value           = u.firstName;\r
  document.getElementById('uLastName').value            = u.lastName;\r
  document.getElementById('uEmail').value               = u.email;\r
  document.getElementById('uPassword').value            = '';\r
  document.getElementById('uRole').value                = u.role;\r
  document.getElementById('uBranch').value              = u.branch;\r
  document.getElementById('uStatus').value              = u.status;\r
  document.getElementById('uOrg').value                 = u.org||'';\r
  document.getElementById('uNotes').value               = u.notes||'';\r
  document.getElementById('userModalError').classList.remove('show');\r
  closeModalById('viewUserModal');\r
  openModal('userModal');\r
}\r
\r
function editUserFromView() {\r
  const uid = document.getElementById('viewUserBody').getAttribute('data-uid');\r
  if (uid) editUser(uid);\r
}\r
\r
function saveUser() {\r
  const fn    = document.getElementById('uFirstName').value.trim();\r
  const ln    = document.getElementById('uLastName').value.trim();\r
  const email = document.getElementById('uEmail').value.trim();\r
  const pw    = document.getElementById('uPassword').value;\r
  const role  = document.getElementById('uRole').value;\r
  const branch= document.getElementById('uBranch').value;\r
  const status= document.getElementById('uStatus').value;\r
  const org   = document.getElementById('uOrg').value.trim();\r
  const notes = document.getElementById('uNotes').value.trim();\r
  const errEl = document.getElementById('userModalError');\r
  errEl.classList.remove('show');\r
\r
  if (!fn || !ln || !email) { errEl.textContent='First name, last name, and email are required.'; errEl.classList.add('show'); return; }\r
  if (!editingUserId && pw.length < 8) { errEl.textContent='Password must be at least 8 characters.'; errEl.classList.add('show'); return; }\r
\r
  if (editingUserId) {\r
    const u = usersData.find(x=>x.id===editingUserId);\r
    if (u) { Object.assign(u, {firstName:fn,lastName:ln,email,role,branch,status,org,notes}); if(pw.length>=8) u.passwordChanged=true; }\r
    addAuditEntry('UPDATE',\`User \${editingUserId}\`,\`User profile updated (\${role})\`);\r
    toast('User updated successfully.','success');\r
  } else {\r
    const id = \`USR-\${String(usersData.length+1).padStart(3,'0')}\`;\r
    usersData.unshift({id,firstName:fn,lastName:ln,email,role,branch,status,org,notes,loginCount:0,createdAt:new Date().toISOString().slice(0,10),lastLogin:'—'});\r
    addAuditEntry('CREATE',\`User \${id}\`,\`New \${role} account created\`);\r
    toast('User created successfully.','success');\r
  }\r
  closeModalById('userModal');\r
  renderUsersTable();\r
}\r
\r
function viewUser(uid) {\r
  const u = usersData.find(x=>x.id===uid);\r
  if (!u) return;\r
  document.getElementById('viewUserTitle').textContent = \`\${u.firstName} \${u.lastName}\`;\r
  document.getElementById('viewUserSub').textContent   = u.email;\r
  const body = document.getElementById('viewUserBody');\r
  body.setAttribute('data-uid', uid);\r
  const statusColors = {active:'var(--green)',suspended:'var(--red)',pending:'var(--amber)'};\r
  const roleColors   = {admin:'var(--gold)',analyst:'var(--blue)',customer:'var(--green)'};\r
  body.innerHTML = \`\r
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;padding:20px;background:var(--bg2);border-radius:10px">\r
      <div class="user-avatar" style="width:56px;height:56px;font-size:22px">\${u.firstName.charAt(0)}\${u.lastName.charAt(0)}</div>\r
      <div>\r
        <div style="font-size:19px;font-weight:800;color:var(--text)">\${u.firstName} \${u.lastName}</div>\r
        <div style="font-size:13px;color:var(--text-dim);margin-top:4px;font-family:var(--font-mono)">\${u.email}</div>\r
        <div style="display:flex;gap:8px;margin-top:8px">\r
          <span class="badge" style="background:\${roleColors[u.role]}22;color:\${roleColors[u.role]};border-color:\${roleColors[u.role]}44">\${u.role}</span>\r
          <span class="badge" style="background:\${statusColors[u.status]}22;color:\${statusColors[u.status]};border-color:\${statusColors[u.status]}44">\${u.status}</span>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="form-grid-2">\r
      <div><div class="form-label">User ID</div><div style="font-family:var(--font-mono);font-size:13px;color:var(--text)">\${u.id}</div></div>\r
      <div><div class="form-label">Organization</div><div style="font-size:13px;color:var(--text)">\${u.org||'—'}</div></div>\r
      <div><div class="form-label">Branch</div><div style="font-size:13px;color:var(--text)">\${u.branch}</div></div>\r
      <div><div class="form-label">Total Logins</div><div style="font-size:13px;font-family:var(--font-mono);color:var(--text)">\${u.loginCount}</div></div>\r
      <div><div class="form-label">Created</div><div style="font-size:13px;font-family:var(--font-mono);color:var(--text-dim)">\${u.createdAt}</div></div>\r
      <div><div class="form-label">Last Login</div><div style="font-size:13px;font-family:var(--font-mono);color:var(--text-dim)">\${u.lastLogin}</div></div>\r
    </div>\r
    \${u.notes?\`<div style="margin-top:16px;padding:12px 16px;background:var(--bg2);border-radius:8px;font-size:13px;color:var(--text-dim)">\${u.notes}</div>\`:''}\`;\r
  openModal('viewUserModal');\r
}\r
\r
function toggleUserStatus(uid) {\r
  const u = usersData.find(x=>x.id===uid);\r
  if (!u) return;\r
  u.status = u.status === 'active' ? 'suspended' : 'active';\r
  addAuditEntry('UPDATE',\`User \${uid}\`,\`Status changed to \${u.status}\`);\r
  toast(\`User \${u.status==='active'?'activated':'suspended'}.\`, u.status==='active'?'success':'warning');\r
  renderUsersTable();\r
}\r
\r
function deleteUser(uid) {\r
  confirmDanger(\`delete-user-\${uid}\`, 'Delete User', \`This will permanently delete the user account and all associated data. This cannot be undone.\`);\r
}\r
\r
function toggleSelectAll(cb) {\r
  document.querySelectorAll('.user-cb').forEach(c => c.checked = cb.checked);\r
  updateBulkButtons();\r
}\r
\r
function updateBulkButtons() {\r
  const checked = document.querySelectorAll('.user-cb:checked').length;\r
  document.getElementById('bulkSuspendBtn').style.display = checked > 0 ? '' : 'none';\r
  document.getElementById('bulkDeleteBtn').style.display  = checked > 0 ? '' : 'none';\r
}\r
\r
function bulkAction(action) {\r
  const ids = [...document.querySelectorAll('.user-cb:checked')].map(c=>c.value);\r
  if (!ids.length) return;\r
  if (action === 'suspend') {\r
    ids.forEach(id => { const u=usersData.find(x=>x.id===id); if(u) u.status='suspended'; });\r
    addAuditEntry('UPDATE','Bulk Users',\`\${ids.length} users suspended\`);\r
    toast(\`\${ids.length} users suspended.\`,'warning');\r
  } else if (action === 'delete') {\r
    confirmDanger('delete', 'Delete Selected Users', \`This will permanently delete \${ids.length} user accounts. This cannot be undone.\`);\r
    return;\r
  }\r
  renderUsersTable();\r
}\r
\r
function openImportUsers() {\r
  toast('CSV import modal — connect to your data pipeline.','info');\r
}\r
\r
function handleGlobalSearch(val) {\r
  if (!val) return;\r
  const panel = document.querySelector('.panel.active');\r
  if (panel && panel.id === 'panel-users') {\r
    document.getElementById('userSearch').value = val;\r
    filterUsers();\r
  }\r
}\r
\r
/* ═══════════════════════════════════════════\r
   BRANCH PANEL\r
═══════════════════════════════════════════ */\r
function renderBranchPanel() {\r
  const grid = document.getElementById('branchCards');\r
  if (!grid) return;\r
  grid.innerHTML = branchesData.map(b => {\r
    const d = branchOverrides[b.nameEn] || {};\r
    const clr = scoreColor(d.score||3.5);\r
    return \`<div class="card" style="--accent:\${clr};position:relative">\r
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:\${clr}"></div>\r
      <div class="card-body">\r
        <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px">\r
          <div>\r
            <div style="font-size:16px;font-weight:800;color:var(--text)">\${b.nameEn}</div>\r
            <div style="font-size:12px;color:var(--text-dim);margin-top:2px" dir="rtl">\${b.nameAr}</div>\r
          </div>\r
          <span class="badge \${b.status==='active'?'badge-green':b.status==='pilot'?'badge-amber':'badge-gray'}">\${b.status}</span>\r
        </div>\r
        <div style="font-size:30px;font-weight:800;color:var(--text);margin-bottom:4px">\${formatScore(d.score||3.5)}</div>\r
        <div style="font-size:11px;color:var(--text-dim);margin-bottom:14px">CX Score · N=\${b.sampleN}</div>\r
        <div style="font-size:12px;color:var(--text-dim)">Manager: <span style="color:var(--text);font-weight:600">\${b.manager}</span></div>\r
        <div style="font-size:12px;color:var(--text-dim);margin-top:4px">Top driver: <span style="color:var(--gold-light);font-weight:600">\${d.top||'Quality'}</span></div>\r
        <div style="display:flex;gap:8px;margin-top:16px">\r
          <button class="btn btn-secondary btn-sm" onclick="editBranch('\${b.id}')">Edit</button>\r
          <button class="btn btn-danger btn-sm" onclick="confirmDanger('delete-branch-\${b.id}','Delete Branch','This branch and its configuration will be permanently removed.')">Delete</button>\r
        </div>\r
      </div>\r
    </div>\`;\r
  }).join('') || \`<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🏢</div><div class="empty-title">No branches yet</div></div>\`;\r
\r
  /* Score editor */\r
  const editor = document.getElementById('branchScoreEditor');\r
  if (editor) {\r
    editor.innerHTML = ['Riyadh','Jeddah','Dammam'].map(b => {\r
      const d = branchOverrides[b];\r
      const w = pct(d.score);\r
      return \`<div class="driver-weight-row" style="margin-bottom:12px;padding:14px;background:var(--bg2);border-radius:8px;border:1px solid var(--border)">\r
        <span class="driver-weight-name">\${b}</span>\r
        <input type="range" class="admin-range" min="1" max="5" step="0.1" value="\${d.score}" data-branch="\${b}" oninput="updateBranchScore(this)">\r
        <span style="font-size:13px;font-weight:700;color:var(--gold-light);font-family:var(--font-mono);min-width:80px;text-align:right" id="branchScoreVal-\${b}">\${formatScore(d.score)}</span>\r
        <button class="btn btn-secondary btn-sm" onclick="resetBranchScore('\${b}')">Reset</button>\r
      </div>\`;\r
    }).join('');\r
  }\r
}\r
\r
function updateBranchScore(inp) {\r
  const b = inp.getAttribute('data-branch');\r
  const v = parseFloat(inp.value);\r
  branchOverrides[b].score = v;\r
  const lbl = document.getElementById(\`branchScoreVal-\${b}\`);\r
  if (lbl) lbl.textContent = formatScore(v);\r
}\r
\r
function resetBranchScore(b) {\r
  branchOverrides[b].score = BRANCHES_DATA[b].score;\r
  renderBranchPanel();\r
}\r
\r
function saveBranchScores() {\r
  addAuditEntry('UPDATE','Branch Scores','CX score overrides saved for all branches');\r
  toast('Branch scores saved.','success');\r
}\r
\r
function openCreateBranch() {\r
  editingBranchId = null;\r
  document.getElementById('branchModalTitle').textContent = 'Add Branch';\r
  document.getElementById('saveBranchBtn').textContent = 'Save Branch';\r
  ['bNameEn','bNameAr','bManager','bAddress'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });\r
  document.getElementById('bCxScore').value = '';\r
  document.getElementById('bSampleN').value = '';\r
  document.getElementById('bStatus').value = 'active';\r
  openModal('branchModal');\r
}\r
\r
function editBranch(bid) {\r
  const b = branchesData.find(x=>x.id===bid);\r
  if (!b) return;\r
  editingBranchId = bid;\r
  document.getElementById('branchModalTitle').textContent = 'Edit Branch';\r
  document.getElementById('saveBranchBtn').textContent = 'Save Changes';\r
  document.getElementById('editBranchId').value = bid;\r
  document.getElementById('bNameEn').value = b.nameEn;\r
  document.getElementById('bNameAr').value = b.nameAr;\r
  document.getElementById('bManager').value = b.manager;\r
  document.getElementById('bAddress').value = b.address;\r
  document.getElementById('bCxScore').value = branchOverrides[b.nameEn]?.score || '';\r
  document.getElementById('bSampleN').value = b.sampleN;\r
  document.getElementById('bStatus').value  = b.status;\r
  openModal('branchModal');\r
}\r
\r
function saveBranch() {\r
  const en   = document.getElementById('bNameEn').value.trim();\r
  const ar   = document.getElementById('bNameAr').value.trim();\r
  const mgr  = document.getElementById('bManager').value.trim();\r
  const addr = document.getElementById('bAddress').value.trim();\r
  const cx   = parseFloat(document.getElementById('bCxScore').value)||3.5;\r
  const n    = parseInt(document.getElementById('bSampleN').value)||100;\r
  const st   = document.getElementById('bStatus').value;\r
  if (!en || !ar) { toast('Branch names (EN and AR) are required.','error'); return; }\r
  if (editingBranchId) {\r
    const b = branchesData.find(x=>x.id===editingBranchId);\r
    if (b) { Object.assign(b,{nameEn:en,nameAr:ar,manager:mgr,address:addr,sampleN:n,status:st}); if(!branchOverrides[en]) branchOverrides[en]={...branchOverrides[b.nameEn]||{score:cx}}; branchOverrides[en].score=cx; }\r
    addAuditEntry('UPDATE',\`Branch \${en}\`,\`Branch details updated\`);\r
    toast('Branch updated.','success');\r
  } else {\r
    const id = \`BR-\${String(branchesData.length+1).padStart(2,'0')}\`;\r
    branchesData.push({id,nameEn:en,nameAr:ar,region:en,manager:mgr,address:addr,cxScore:cx,sampleN:n,status:st});\r
    branchOverrides[en] = {score:cx,explanatory:65,top:'Quality',topAr:'الجودة',n};\r
    addAuditEntry('CREATE',\`Branch \${en}\`,\`New branch added\`);\r
    toast('Branch created.','success');\r
  }\r
  closeModalById('branchModal');\r
  renderBranchPanel();\r
}\r
\r
/* ═══════════════════════════════════════════\r
   DATA PANEL\r
═══════════════════════════════════════════ */\r
function renderDataPanel() {\r
  renderDatasets();\r
  renderRecordsTable();\r
}\r
\r
function renderDatasets() {\r
  const tbody = document.getElementById('datasetsTbody');\r
  if (!tbody) return;\r
  const statusClr = {active:'badge-green',archived:'badge-gray',pilot:'badge-blue'};\r
  tbody.innerHTML = datasets.map(d =>\r
    \`<tr>\r
      <td><b>\${d.name}</b></td>\r
      <td><span class="badge badge-gold">\${d.period}</span></td>\r
      <td><span style="font-family:var(--font-mono)">\${d.rows.toLocaleString()}</span></td>\r
      <td><span class="badge \${statusClr[d.status]||'badge-gray'}">\${d.status}</span></td>\r
      <td>\${d.uploader}</td>\r
      <td style="font-family:var(--font-mono);font-size:11px;color:var(--text-dim)">\${d.date}</td>\r
      <td><div class="row-actions">\r
        \${d.status!=='active'?\`<button class="btn btn-success btn-sm" onclick="activateDataset(\${d.id})">Activate</button>\`:'<span class="badge badge-green">Active</span>'}\r
        <button class="btn btn-secondary btn-sm" onclick="downloadDataset(\${d.id})">Download</button>\r
        <button class="btn btn-danger btn-sm btn-icon" onclick="deleteDataset(\${d.id})">\r
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>\r
        </button>\r
      </div></td>\r
    </tr>\`\r
  ).join('');\r
}\r
\r
function activateDataset(id) {\r
  datasets.forEach(d => d.status = d.id===id?'active':'archived');\r
  addAuditEntry('UPDATE',\`Dataset #\${id}\`,'Dataset set as active');\r
  toast('Dataset activated.','success');\r
  renderDatasets();\r
}\r
\r
function downloadDataset(id) {\r
  toast(\`Dataset #\${id} download initiated.\`,'info');\r
  addAuditEntry('EXPORT',\`Dataset #\${id}\`,'Dataset downloaded by admin');\r
}\r
\r
function deleteDataset(id) {\r
  datasets = datasets.filter(d => d.id !== id);\r
  addAuditEntry('DELETE',\`Dataset #\${id}\`,'Dataset permanently deleted');\r
  toast('Dataset deleted.','success');\r
  renderDatasets();\r
}\r
\r
function refreshDatasets() { renderDatasets(); toast('Datasets refreshed.','info'); }\r
function downloadTemplate() { toast('Template CSV downloaded.','info'); addAuditEntry('EXPORT','Template','CSV upload template downloaded'); }\r
function saveRecordEdits() { toast('Record edits saved.','success'); addAuditEntry('UPDATE','Response Records','Manual record edits applied'); }\r
\r
/* Sample records from DB_CUSTOMERS (50 shown) */\r
let allRecords = [];\r
(function genRecords() {\r
  const branches=['Riyadh','Jeddah','Dammam'];\r
  const genders=['Male','Female'];\r
  const services=['Mechanical','Bodyshop'];\r
  const freqs=['1 Visit','2–3 Visits','4+ Visits'];\r
  const ages=['<25','25–34','35–44','45+'];\r
  for (let i=1;i<=60;i++) {\r
    const br = branches[(i*11)%3];\r
    const g  = (i*7)%10<6?'Male':'Female';\r
    const sv = (i*11)%5<3?'Mechanical':'Bodyshop';\r
    const fr = (i*13)%10<3?'1 Visit':(i*13)%10<8?'2–3 Visits':'4+ Visits';\r
    const ag = ['<25','25–34','35–44','45+'][(i*17)%4];\r
    const q  = parseFloat((2.5+(i%30)*0.07).toFixed(1));\r
    const c  = parseFloat((2.3+(i%28)*0.08).toFixed(1));\r
    const p  = parseFloat((2.2+(i%26)*0.09).toFixed(1));\r
    const s  = parseFloat((1.2+(i%20)*0.1).toFixed(1));\r
    const cx = parseFloat(Math.min(5,q*0.38+c*0.27+p*0.22+s*0.05+1.0).toFixed(1));\r
    const risk = cx<3?'High':cx<3.6?'Medium':'Low';\r
    allRecords.push({id:\`C-\${String(i).padStart(3,'0')}\`,branch:br,gender:g,service:sv,freq:fr,age:ag,q,c,p,s,cx,risk});\r
  }\r
})();\r
\r
let filteredRecords = [...allRecords];\r
\r
function filterRecords() {\r
  const q = (document.getElementById('recordSearch')?.value||'').toLowerCase();\r
  const b = document.getElementById('recordBranchFilter')?.value||'';\r
  filteredRecords = allRecords.filter(r => {\r
    const m = !q || r.id.toLowerCase().includes(q) || r.branch.toLowerCase().includes(q);\r
    return m && (!b||r.branch===b);\r
  });\r
  recordPage = 1;\r
  renderRecordsTable();\r
}\r
\r
function renderRecordsTable() {\r
  filterRecords();\r
}\r
\r
function renderRecordsTableWithData() {\r
  const tbody = document.getElementById('recordsTbody');\r
  if (!tbody) return;\r
  const start = (recordPage-1)*RECORD_PAGE_SIZE;\r
  const page  = filteredRecords.slice(start, start+RECORD_PAGE_SIZE);\r
  const riskBadge = {High:'badge-red',Medium:'badge-amber',Low:'badge-green'};\r
  tbody.innerHTML = page.map(r =>\r
    \`<tr>\r
      <td style="font-family:var(--font-mono);font-size:11px">\${r.id}</td>\r
      <td>\${r.branch}</td>\r
      <td>\${r.gender}</td>\r
      <td>\${r.service}</td>\r
      <td>\${r.freq}</td>\r
      <td>\${r.age}</td>\r
      <td><input class="q-input" style="width:56px" type="number" step="0.1" min="1" max="5" value="\${r.q}" onchange="updateRecord('\${r.id}','q',this.value)"></td>\r
      <td><input class="q-input" style="width:56px" type="number" step="0.1" min="1" max="5" value="\${r.c}" onchange="updateRecord('\${r.id}','c',this.value)"></td>\r
      <td><input class="q-input" style="width:56px" type="number" step="0.1" min="1" max="5" value="\${r.p}" onchange="updateRecord('\${r.id}','p',this.value)"></td>\r
      <td><input class="q-input" style="width:56px" type="number" step="0.1" min="1" max="5" value="\${r.s}" onchange="updateRecord('\${r.id}','s',this.value)"></td>\r
      <td style="font-weight:700;color:\${scoreColor(r.cx)}">\${r.cx}</td>\r
      <td><span class="badge \${riskBadge[r.risk]||'badge-gray'}">\${r.risk}</span></td>\r
      <td><div class="row-actions">\r
        <button class="btn btn-danger btn-sm btn-icon" onclick="confirmDanger('delete-record-\${r.id}','Delete Record','This response record will be permanently deleted.')">\r
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H5L4 6"/></svg>\r
        </button>\r
      </div></td>\r
    </tr>\`\r
  ).join('');\r
\r
  const total = filteredRecords.length;\r
  const totalPages = Math.ceil(total/RECORD_PAGE_SIZE)||1;\r
  document.getElementById('recordsPagination').innerHTML =\r
    \`<div class="pagination-info">Showing \${Math.min(start+1,total)}–\${Math.min(start+RECORD_PAGE_SIZE,total)} of \${total} records</div>\r
     <div class="pagination-btns">\r
       <button class="page-btn" onclick="setRecordPage(\${recordPage-1})" \${recordPage<=1?'disabled':''}>‹</button>\r
       \${Array.from({length:Math.min(5,totalPages)},(_,i)=>{\r
         const p = Math.max(1,Math.min(totalPages-4,recordPage-2))+i;\r
         return \`<button class="page-btn \${p===recordPage?'active':''}" onclick="setRecordPage(\${p})">\${p}</button>\`;\r
       }).join('')}\r
       <button class="page-btn" onclick="setRecordPage(\${recordPage+1})" \${recordPage>=totalPages?'disabled':''}>›</button>\r
     </div>\`;\r
}\r
\r
function setRecordPage(p) { recordPage=p; renderRecordsTableWithData(); }\r
function filterRecords() {\r
  const q = (document.getElementById('recordSearch')?.value||'').toLowerCase();\r
  const b = document.getElementById('recordBranchFilter')?.value||'';\r
  filteredRecords = allRecords.filter(r => (!q||r.id.includes(q)||r.branch.toLowerCase().includes(q)) && (!b||r.branch===b));\r
  recordPage=1;\r
  renderRecordsTableWithData();\r
}\r
function renderRecordsTable() { filteredRecords=[...allRecords]; renderRecordsTableWithData(); setTimeout(filterRecords,0); }\r
function updateRecord(id, field, val) { const r=allRecords.find(x=>x.id===id); if(r) r[field]=parseFloat(val); }\r
\r
function triggerUpload()  { document.getElementById('dataFileInput').click(); }\r
function onDragOver(e)    { e.preventDefault(); document.getElementById('uploadZone').classList.add('drag-over'); }\r
function onDragLeave()    { document.getElementById('uploadZone').classList.remove('drag-over'); }\r
function onDrop(e)        { e.preventDefault(); document.getElementById('uploadZone').classList.remove('drag-over'); const f=e.dataTransfer.files[0]; if(f) simulateUpload(f); }\r
function handleFileUpload(inp) { if(inp.files[0]) simulateUpload(inp.files[0]); }\r
\r
function simulateUpload(file) {\r
  const prog = document.getElementById('uploadProgress');\r
  const bar  = document.getElementById('uploadBar');\r
  const pct2 = document.getElementById('uploadPct');\r
  const stat = document.getElementById('uploadStatus');\r
  const fn   = document.getElementById('uploadFileName');\r
  prog.style.display = '';\r
  fn.textContent = file.name;\r
  let p = 0;\r
  const iv = setInterval(() => {\r
    p += Math.random()*15+5;\r
    if (p >= 100) { p=100; clearInterval(iv); stat.textContent='✓ Validated — 300 records ready to activate'; stat.style.color='var(--green)'; addAuditEntry('UPLOAD',\`Dataset \${file.name}\`,\`\${file.name} uploaded and validated\`); toast('File uploaded and validated successfully.','success'); datasets.unshift({id:datasets.length+1,name:file.name,period:'Q2 2026',rows:300,status:'pending',uploader:currentAdmin?.name||'Admin',date:new Date().toISOString().slice(0,10)}); renderDatasets(); }\r
    bar.style.width = p+'%';\r
    pct2.textContent = Math.round(p)+'%';\r
  }, 150);\r
}\r
\r
/* ═══════════════════════════════════════════\r
   CONTENT PANEL\r
═══════════════════════════════════════════ */\r
function switchContentTab(tab, btn) {\r
  document.querySelectorAll('.content-tab-btn').forEach(b => {\r
    b.style.borderBottomColor='transparent'; b.style.color='var(--text-dim)';\r
  });\r
  btn.style.borderBottomColor='var(--gold)'; btn.style.color='var(--gold)';\r
  ['questionnaire','platform','services'].forEach(t => {\r
    const el = document.getElementById(\`content-tab-\${t}\`);\r
    if (el) el.style.display = t===tab?'':'none';\r
  });\r
  contentTabActive = tab;\r
}\r
\r
function renderContentPanel() {\r
  renderQuestionnaireEditor();\r
  renderServicesEditor();\r
}\r
\r
function renderQuestionnaireEditor() {\r
  const el = document.getElementById('questionnaireEditor');\r
  if (!el) return;\r
  const constructs = [...new Set(questionnaireItems.map(q=>q.construct))];\r
  el.innerHTML = constructs.map(construct => {\r
    const items = questionnaireItems.filter(q=>q.construct===construct);\r
    return \`<div style="margin-bottom:20px">\r
      <div style="font-size:11px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:var(--gold);margin-bottom:10px;padding:8px 12px;background:var(--gold-dim);border-radius:6px;border:1px solid rgba(201,151,58,0.2)">\${construct}</div>\r
      \${items.map((q,idx) => \`<div class="q-item">\r
        <div class="q-item-head">\r
          <span class="q-code">\${q.code}</span>\r
          <span class="q-status \${q.status}">\${q.status}</span>\r
          <div class="q-actions">\r
            <button class="btn btn-secondary btn-sm" onclick="toggleItemStatus('\${q.code}')">\${q.status==='retained'?'Mark Removed':'Mark Retained'}</button>\r
            <button class="btn btn-danger btn-sm btn-icon" onclick="deleteQuestionnaireItem('\${q.code}')">\r
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H5L4 6"/></svg>\r
            </button>\r
          </div>\r
        </div>\r
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">\r
          <input class="q-input" value="\${q.en}" placeholder="English text" onchange="updateQItem('\${q.code}','en',this.value)">\r
          <input class="q-input" value="\${q.ar}" dir="rtl" placeholder="النص العربي" onchange="updateQItem('\${q.code}','ar',this.value)">\r
        </div>\r
      </div>\`).join('')}\r
    </div>\`;\r
  }).join('');\r
}\r
\r
function toggleItemStatus(code) {\r
  const q = questionnaireItems.find(x=>x.code===code);\r
  if (q) { q.status = q.status==='retained'?'removed':'retained'; addAuditEntry('UPDATE',\`Questionnaire \${code}\`,\`Item status set to \${q.status}\`); toast(\`Item \${code} marked as \${q.status}.\`,'success'); renderQuestionnaireEditor(); }\r
}\r
\r
function deleteQuestionnaireItem(code) {\r
  questionnaireItems = questionnaireItems.filter(q=>q.code!==code);\r
  addAuditEntry('DELETE',\`Questionnaire \${code}\`,'Item permanently removed from instrument');\r
  toast(\`Item \${code} deleted.\`,'success');\r
  renderQuestionnaireEditor();\r
}\r
\r
function updateQItem(code, field, val) {\r
  const q = questionnaireItems.find(x=>x.code===code);\r
  if (q) q[field]=val;\r
}\r
\r
function addQuestionnaireItem() {\r
  const code = \`Q\${questionnaireItems.length+1}\`;\r
  questionnaireItems.push({code,construct:'Quality',status:'retained',en:'New question text.',ar:'نص السؤال الجديد.'});\r
  addAuditEntry('CREATE',\`Questionnaire \${code}\`,'New questionnaire item added');\r
  toast('New item added.','success');\r
  renderQuestionnaireEditor();\r
}\r
\r
function renderServicesEditor() {\r
  const el = document.getElementById('servicesEditor');\r
  if (!el) return;\r
  el.innerHTML = servicesData.map(s =>\r
    \`<div class="q-item" style="margin-bottom:14px">\r
      <div class="q-item-head">\r
        <span class="q-code">\${s.num}</span>\r
        <span style="font-size:13px;font-weight:700;color:var(--text)">\${s.nameEn}</span>\r
        <div class="q-actions">\r
          <button class="btn btn-danger btn-sm btn-icon" onclick="deleteService(\${s.id})">\r
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H5L4 6"/></svg>\r
          </button>\r
        </div>\r
      </div>\r
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px">\r
        <input class="q-input" value="\${s.nameEn}" placeholder="Name (EN)" onchange="updateService(\${s.id},'nameEn',this.value)">\r
        <input class="q-input" value="\${s.nameAr}" dir="rtl" placeholder="الاسم (AR)" onchange="updateService(\${s.id},'nameAr',this.value)">\r
      </div>\r
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">\r
        <input class="q-input" value="\${s.descEn}" placeholder="Description (EN)" onchange="updateService(\${s.id},'descEn',this.value)">\r
        <input class="q-input" value="\${s.descAr}" dir="rtl" placeholder="الوصف (AR)" onchange="updateService(\${s.id},'descAr',this.value)">\r
      </div>\r
    </div>\`\r
  ).join('');\r
}\r
\r
function updateService(id, field, val) { const s=servicesData.find(x=>x.id===id); if(s) s[field]=val; }\r
function deleteService(id) { servicesData=servicesData.filter(s=>s.id!==id); addAuditEntry('DELETE',\`Service #\${id}\`,'Service entry removed'); toast('Service deleted.','success'); renderServicesEditor(); }\r
function addService() { const id=servicesData.length+1; servicesData.push({id,num:\`0\${id}\`,nameEn:'New Service',nameAr:'خدمة جديدة',descEn:'Description.',descAr:'الوصف.'}); addAuditEntry('CREATE',\`Service #\${id}\`,'New service added'); toast('Service added.','success'); renderServicesEditor(); }\r
function saveAllContent() { addAuditEntry('UPDATE','Content','All content changes saved'); toast('All content changes saved.','success'); }\r
function resetContent() { toast('Content reset to defaults.','warning'); }\r
\r
/* ═══════════════════════════════════════════\r
   MODEL & WEIGHTS\r
═══════════════════════════════════════════ */\r
function renderModelWeights() {\r
  const branch = document.getElementById('modelBranchSelect')?.value || 'All Branches';\r
  const drivers = modelOverrides[branch] || modelOverrides['All Branches'] || [];\r
  const el = document.getElementById('modelWeightsEditor');\r
  if (!el) return;\r
\r
  el.innerHTML = drivers.map(dr =>\r
    \`<div class="driver-weight-row">\r
      <span class="driver-weight-name">\${dr.name}</span>\r
      <div style="display:flex;flex-direction:column;gap:4px">\r
        <input type="range" class="admin-range" min="0" max="0.5" step="0.01" value="\${dr.impact}" data-branch="\${branch}" data-driver="\${dr.name}" oninput="updateWeight(this)">\r
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-mute);font-weight:600"><span>0.00</span><span>0.25</span><span>0.50</span></div>\r
      </div>\r
      <span style="font-size:13px;font-weight:700;color:var(--gold-light);font-family:var(--font-mono)" id="wt-\${branch.replace(' ','_')}-\${dr.name}">\${impactPct(dr.impact)}</span>\r
      <select class="filter-select" style="font-size:12px" onchange="updateDecision('\${branch}','\${dr.name}',this.value)">\r
        \${['Invest','Optimize','Selective','Monitor','Maintain','Do not overinvest'].map(d=>\`<option \${d===dr.decision?'selected':''}>\${d}</option>\`).join('')}\r
      </select>\r
    </div>\`\r
  ).join('');\r
\r
  /* Metrics editor */\r
  const mEl = document.getElementById('modelMetricsEditor');\r
  if (mEl) {\r
    mEl.innerHTML = Object.entries(modelMetrics).map(([k,v]) =>\r
      \`<div class="form-group">\r
        <label class="form-label">\${{r2:'Explanatory Power (R²)',alpha:'Cronbach Alpha',cr:'Composite Reliability',ave:'AVE',htmt:'HTMT'}[k]||k}</label>\r
        <input class="form-input" value="\${v}" onchange="modelMetrics['\${k}']=this.value" style="font-family:var(--font-mono)">\r
      </div>\`\r
    ).join('');\r
  }\r
\r
  /* Decision labels override */\r
  const dEl = document.getElementById('decisionLabelsEditor');\r
  if (dEl) {\r
    dEl.innerHTML = \`<div class="grid-2" style="margin:0">\${drivers.map(dr => \`<div class="form-group">\r
      <label class="form-label">\${dr.name}</label>\r
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">\r
        <input class="form-input" value="\${dr.decision}" placeholder="Decision (EN)" onchange="updateDecision('\${branch}','\${dr.name}',this.value)" style="font-size:13px">\r
        <input class="form-input" placeholder="القرار (AR)" style="font-size:13px" dir="rtl">\r
      </div>\r
    </div>\`).join('')}</div>\`;\r
  }\r
}\r
\r
function updateWeight(inp) {\r
  const b  = inp.getAttribute('data-branch');\r
  const dn = inp.getAttribute('data-driver');\r
  const v  = parseFloat(inp.value);\r
  const drivers = modelOverrides[b];\r
  if (drivers) { const d=drivers.find(x=>x.name===dn); if(d) d.impact=v; }\r
  const lbl = document.getElementById(\`wt-\${b.replace(' ','_')}-\${dn}\`);\r
  if (lbl) lbl.textContent = impactPct(v);\r
}\r
\r
function updateDecision(branch, driverName, val) {\r
  const drivers = modelOverrides[branch];\r
  if (drivers) { const d=drivers.find(x=>x.name===driverName); if(d) d.decision=val; }\r
}\r
\r
function saveModelWeights() {\r
  addAuditEntry('OVERRIDE','Model Weights',\`Driver weights saved for \${document.getElementById('modelBranchSelect')?.value||'All'}\`);\r
  toast('Model weights saved and applied.','success');\r
}\r
\r
function resetModelWeights() {\r
  confirmDanger('reset-model','Reset Model Weights','All manual driver weight overrides will be reverted to their calculated defaults.');\r
}\r
\r
/* ═══════════════════════════════════════════\r
   REPORTS\r
═══════════════════════════════════════════ */\r
function renderReports() {\r
  /* Scheduled */\r
  const sel = document.getElementById('scheduledExports');\r
  if (sel) {\r
    sel.innerHTML = scheduledExportsList.length\r
      ? scheduledExportsList.map(s =>\r
          \`<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 22px;border-bottom:1px solid var(--border)">\r
            <div>\r
              <div style="font-size:13px;font-weight:600;color:var(--text)">\${s.name}</div>\r
              <div style="font-size:11px;color:var(--text-dim);margin-top:3px">\${s.freq} · \${s.format} · \${s.branch} → \${s.email}</div>\r
            </div>\r
            <div style="display:flex;gap:8px;align-items:center">\r
              <div class="toggle-track \${s.active?'on':''}" onclick="toggleSchedule('\${s.id}',this)"><div class="toggle-thumb"></div></div>\r
              <button class="btn btn-danger btn-sm btn-icon" onclick="deleteSchedule('\${s.id}')">✕</button>\r
            </div>\r
          </div>\`\r
        ).join('')\r
      : \`<div class="empty-state"><div class="empty-icon">📅</div><div class="empty-title">No scheduled exports</div></div>\`;\r
  }\r
\r
  /* History */\r
  const tbody = document.getElementById('reportHistoryTbody');\r
  if (tbody) {\r
    tbody.innerHTML = reportHistory.map(r =>\r
      \`<tr>\r
        <td><b>\${r.name}</b></td>\r
        <td><span class="badge badge-blue">\${r.type}</span></td>\r
        <td>\${r.branch}</td>\r
        <td><span class="badge badge-gold">\${r.format}</span></td>\r
        <td>\${r.by}</td>\r
        <td style="font-family:var(--font-mono);font-size:11px;color:var(--text-dim)">\${r.date}</td>\r
        <td><span class="badge \${r.status==='Ready'?'badge-green':'badge-gray'}">\${r.status}</span></td>\r
        <td><div class="row-actions">\r
          \${r.status==='Ready'?\`<button class="btn btn-secondary btn-sm" onclick="downloadReport('\${r.id}')">Download</button>\`:''}\r
          <button class="btn btn-danger btn-sm btn-icon" onclick="deleteReport('\${r.id}')">✕</button>\r
        </div></td>\r
      </tr>\`\r
    ).join('');\r
  }\r
}\r
\r
function generateReport() {\r
  const type   = document.getElementById('reportType').value;\r
  const branch = document.getElementById('reportBranch').value;\r
  const format = document.getElementById('reportFormat').value;\r
  const lang   = document.getElementById('reportLang').value;\r
  toast(\`Generating \${type} (\${branch}) as \${format} — \${lang}…\`,'info');\r
  setTimeout(() => {\r
    const id = \`RPT-\${String(reportHistory.length+1).padStart(3,'0')}\`;\r
    reportHistory.unshift({id,name:\`\${type} — \${branch}\`,type,branch,format,by:currentAdmin?.name||'Admin',date:new Date().toISOString().slice(0,10),status:'Ready'});\r
    addAuditEntry('EXPORT',\`Report \${id}\`,\`\${type} report generated\`);\r
    toast('Report ready for download.','success');\r
    renderReports();\r
  }, 2000);\r
}\r
\r
function openScheduleModal() { openModal('scheduleModal'); }\r
function saveSchedule() {\r
  const name  = document.getElementById('schedName').value.trim();\r
  const freq  = document.getElementById('schedFreq').value;\r
  const fmt   = document.getElementById('schedFormat').value;\r
  const email = document.getElementById('schedEmail').value.trim();\r
  const br    = document.getElementById('schedBranch').value;\r
  if (!name || !email) { toast('Name and email are required.','error'); return; }\r
  scheduledExportsList.push({id:\`SCH-\${String(scheduledExportsList.length+1).padStart(3,'0')}\`,name,freq,format:fmt,branch:br,email,active:true});\r
  addAuditEntry('CREATE',\`Schedule \${name}\`,\`Automated \${freq} report scheduled\`);\r
  toast('Export schedule created.','success');\r
  closeModalById('scheduleModal');\r
  renderReports();\r
}\r
function toggleSchedule(id, el) { el.classList.toggle('on'); const s=scheduledExportsList.find(x=>x.id===id); if(s) s.active=!s.active; toast(\`Schedule \${s?.active?'activated':'paused'}.\`,'info'); }\r
function deleteSchedule(id) { scheduledExportsList=scheduledExportsList.filter(s=>s.id!==id); toast('Schedule deleted.','success'); renderReports(); }\r
function downloadReport(id) { toast(\`Report \${id} downloading…\`,'info'); addAuditEntry('EXPORT',\`Report \${id}\`,'Report downloaded'); }\r
function deleteReport(id) { reportHistory=reportHistory.filter(r=>r.id!==id); toast('Report removed.','success'); renderReports(); }\r
\r
/* ═══════════════════════════════════════════\r
   SETTINGS\r
═══════════════════════════════════════════ */\r
function saveSettings() {\r
  const quarter = document.getElementById('quarterLabel')?.value;\r
  const n       = document.getElementById('sampleSizeN')?.value;\r
  const r2      = document.getElementById('modelR2')?.value;\r
  addAuditEntry('UPDATE','Settings',\`Platform settings saved — Q:\${quarter}, N:\${n}, R²:\${r2}%\`);\r
  toast('Settings saved successfully.','success');\r
}\r
\r
/* ═══════════════════════════════════════════\r
   AUDIT LOG\r
═══════════════════════════════════════════ */\r
let filteredAudit = [];\r
\r
function filterAuditLog() {\r
  const q      = (document.getElementById('auditSearch')?.value||'').toLowerCase();\r
  const action = document.getElementById('auditActionFilter')?.value||'';\r
  const admin  = document.getElementById('auditAdminFilter')?.value||'';\r
  filteredAudit = auditLog.filter(a =>\r
    (!q      || a.resource.toLowerCase().includes(q) || a.detail.toLowerCase().includes(q) || a.admin.toLowerCase().includes(q)) &&\r
    (!action || a.action===action) &&\r
    (!admin  || a.admin===admin)\r
  );\r
  auditPage = 1;\r
  renderAuditLogTable();\r
}\r
\r
function renderAuditLog() { filteredAudit=[...auditLog]; renderAuditLogTable(); setTimeout(filterAuditLog,0); }\r
\r
function renderAuditLogTable() {\r
  const tbody = document.getElementById('auditTbody');\r
  if (!tbody) return;\r
  const start = (auditPage-1)*AUDIT_PAGE_SIZE;\r
  const page  = filteredAudit.slice(start, start+AUDIT_PAGE_SIZE);\r
  const colors = {CREATE:'var(--green)',UPDATE:'var(--blue)',DELETE:'var(--red)',LOGIN:'var(--gold)',EXPORT:'var(--teal)',UPLOAD:'var(--purple)',OVERRIDE:'var(--amber)'};\r
  tbody.innerHTML = page.map(a =>\r
    \`<tr class="audit-row">\r
      <td style="font-family:var(--font-mono);font-size:11px;color:var(--text-dim);white-space:nowrap">\${a.timestamp}</td>\r
      <td><span style="font-weight:600;font-size:12px">\${a.admin}</span></td>\r
      <td><span class="badge audit-action" style="background:\${colors[a.action]||'var(--text-dim)'}22;color:\${colors[a.action]||'var(--text-dim)'};border-color:\${colors[a.action]||'var(--border2)'}44">\${a.action}</span></td>\r
      <td style="font-size:12px;font-weight:600;color:var(--text)">\${a.resource}</td>\r
      <td style="font-size:12px;color:var(--text-dim);max-width:260px">\${a.detail}</td>\r
      <td style="font-family:var(--font-mono);font-size:11px;color:var(--text-mute)">\${a.ip}</td>\r
      <td><span class="badge badge-green">\${a.status}</span></td>\r
    </tr>\`\r
  ).join('') || \`<tr><td colspan="7"><div class="empty-state"><div class="empty-icon">📋</div><div class="empty-title">No audit entries</div></div></td></tr>\`;\r
\r
  const total = filteredAudit.length;\r
  const totalPages = Math.ceil(total/AUDIT_PAGE_SIZE)||1;\r
  document.getElementById('auditPagination').innerHTML =\r
    \`<div class="pagination-info">\${total} entries</div>\r
     <div class="pagination-btns">\r
       <button class="page-btn" onclick="setAuditPage(\${auditPage-1})" \${auditPage<=1?'disabled':''}>‹</button>\r
       \${Array.from({length:Math.min(5,totalPages)},(_,i)=>{\r
         const p=Math.max(1,Math.min(totalPages-4,auditPage-2))+i;\r
         return \`<button class="page-btn \${p===auditPage?'active':''}" onclick="setAuditPage(\${p})">\${p}</button>\`;\r
       }).join('')}\r
       <button class="page-btn" onclick="setAuditPage(\${auditPage+1})" \${auditPage>=totalPages?'disabled':''}>›</button>\r
     </div>\`;\r
  const badge = document.getElementById('auditBadge');\r
  if (badge) badge.textContent = Math.min(99,auditLog.filter(a=>a.action!=='LOGIN').length);\r
}\r
\r
function setAuditPage(p) { auditPage=p; renderAuditLogTable(); }\r
function exportAuditLog() { addAuditEntry('EXPORT','Audit Log','Full audit log exported as CSV'); toast('Audit log exported.','success'); }\r
\r
/* ═══════════════════════════════════════════\r
   NOTIFICATIONS\r
═══════════════════════════════════════════ */\r
function toggleNotif() { toast('3 new notifications — feature connects to your backend.','info'); }\r
\r
/* ═══════════════════════════════════════════\r
   KEYBOARD SHORTCUTS\r
═══════════════════════════════════════════ */\r
document.addEventListener('keydown', e => {\r
  if (e.key === 'Escape') {\r
    ['userModal','branchModal','viewUserModal','confirmModal','scheduleModal'].forEach(id => { const el=document.getElementById(id); if(el) el.classList.remove('open'); });\r
    closeSidebar();\r
  }\r
  if ((e.ctrlKey||e.metaKey) && e.key==='k') { e.preventDefault(); document.getElementById('globalSearch')?.focus(); }\r
});\r
\r
/* ═══════════════════════════════════════════\r
   SORT TABLE (stub for extensibility)\r
═══════════════════════════════════════════ */\r
function sortTable(table, field) {\r
  if (table==='users') {\r
    if (!sortState[field]) sortState[field]='asc'; else sortState[field]=sortState[field]==='asc'?'desc':'asc';\r
    const dir = sortState[field]==='asc'?1:-1;\r
    usersData.sort((a,b) => {\r
      const av=a[field]||''; const bv=b[field]||'';\r
      return av<bv?-dir:av>bv?dir:0;\r
    });\r
    renderUsersTable();\r
  }\r
}\r
<\/script>\r
</body>\r
</html>`;function Dp(){return Bt.jsx("main",{className:"admin-shell",children:Bt.jsx("iframe",{title:"ROSHD Admin Control Center",className:"admin-legacy-frame",srcDoc:Pp})})}eu(document.getElementById("root")).render(Bt.jsx(yu.StrictMode,{children:Bt.jsx(Dp,{})}));
