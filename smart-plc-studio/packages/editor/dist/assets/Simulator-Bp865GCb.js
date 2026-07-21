import{a as Sr,o as Er,b as po,O as il,e as qt,f as C,m as Ye,s as sl,F as Ne,g as Fe,k as Vi,h as vi,t as Nt,x as ye,n as un,v as Sn,j as Ii,r as le,z as dr,c as Xt,_ as yr,A as Wi,i as rl,w as al,l as Br,a5 as ol,u as ll}from"./index-DBBOKVkv.js";import{u as mo}from"./kinematics-tHTjULXE.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const br="160",cl=0,zr=1,ul=2,_o=1,go=2,Mn=3,Fn=0,Ze=1,Be=2,Un=0,xi=1,Gr=2,Hr=3,kr=4,dl=5,Xn=100,hl=101,fl=102,Vr=103,Wr=104,pl=200,ml=201,_l=202,gl=203,hr=204,fr=205,vl=206,xl=207,Ml=208,Sl=209,El=210,yl=211,bl=212,Tl=213,wl=214,Al=0,Rl=1,Cl=2,_s=3,Ll=4,Pl=5,Dl=6,Ul=7,Tr=0,Il=1,Nl=2,In=0,Fl=1,Ol=2,Bl=3,zl=4,Gl=5,Hl=6,vo=300,Si=301,Ei=302,pr=303,mr=304,ys=306,_r=1e3,dn=1001,gr=1002,Ve=1003,Xr=1004,Us=1005,en=1006,kl=1007,Bi=1008,Nn=1009,Vl=1010,Wl=1011,wr=1012,xo=1013,Ln=1014,Pn=1015,zi=1016,Mo=1017,So=1018,qn=1020,Xl=1021,hn=1023,Yl=1024,ql=1025,$n=1026,yi=1027,$l=1028,Eo=1029,Zl=1030,yo=1031,bo=1033,Is=33776,Ns=33777,Fs=33778,Os=33779,Yr=35840,qr=35841,$r=35842,Zr=35843,To=36196,jr=37492,Kr=37496,Jr=37808,Qr=37809,ta=37810,ea=37811,na=37812,ia=37813,sa=37814,ra=37815,aa=37816,oa=37817,la=37818,ca=37819,ua=37820,da=37821,Bs=36492,ha=36494,fa=36495,jl=36283,pa=36284,ma=36285,_a=36286,wo=3e3,Zn=3001,Kl=3200,Jl=3201,Ar=0,Ql=1,nn="",Re="srgb",yn="srgb-linear",Rr="display-p3",bs="display-p3-linear",gs="linear",ue="srgb",vs="rec709",xs="p3",Qn=7680,ga=519,tc=512,ec=513,nc=514,Ao=515,ic=516,sc=517,rc=518,ac=519,va=35044,xa="300 es",vr=1035,En=2e3,Ms=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ma=1234567;const Ni=Math.PI/180,Gi=180/Math.PI;function wi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function Cr(i,t){return(i%t+t)%t}function oc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function lc(i,t,e){return i!==t?(e-i)/(t-i):0}function Fi(i,t,e){return(1-e)*i+e*t}function cc(i,t,e,n){return Fi(i,t,1-Math.exp(-e*n))}function uc(i,t=1){return t-Math.abs(Cr(i,t*2)-t)}function dc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function hc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function pc(i,t){return i+Math.random()*(t-i)}function mc(i){return i*(.5-Math.random())}function _c(i){i!==void 0&&(Ma=i);let t=Ma+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gc(i){return i*Ni}function vc(i){return i*Gi}function xr(i){return(i&i-1)===0&&i!==0}function xc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ss(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mc(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),d=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),m=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*d,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*d,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*d,a*c);break;case"XZX":i.set(a*d,l*_,l*m,a*c);break;case"YXY":i.set(l*m,a*d,l*_,a*c);break;case"ZYZ":i.set(l*_,l*m,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xi={DEG2RAD:Ni,RAD2DEG:Gi,generateUUID:wi,clamp:We,euclideanModulo:Cr,mapLinear:oc,inverseLerp:lc,lerp:Fi,damp:cc,pingpong:uc,smoothstep:dc,smootherstep:hc,randInt:fc,randFloat:pc,randFloatSpread:mc,seededRandom:_c,degToRad:gc,radToDeg:vc,isPowerOfTwo:xr,ceilPowerOfTwo:xc,floorPowerOfTwo:Ss,setQuaternionFromProperEuler:Mc,normalize:Ge,denormalize:mi};class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,s,r,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],f=n[7],h=n[2],m=n[5],_=n[8],g=s[0],p=s[3],u=s[6],w=s[1],M=s[4],L=s[7],I=s[2],R=s[5],P=s[8];return r[0]=o*g+a*w+l*I,r[3]=o*p+a*M+l*R,r[6]=o*u+a*L+l*P,r[1]=c*g+d*w+f*I,r[4]=c*p+d*M+f*R,r[7]=c*u+d*L+f*P,r[2]=h*g+m*w+_*I,r[5]=h*p+m*M+_*R,r[8]=h*u+m*L+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=d*o-a*c,h=a*l-d*r,m=c*r-o*l,_=e*f+n*h+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(s*c-d*n)*g,t[2]=(a*n-s*o)*g,t[3]=h*g,t[4]=(d*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zs.makeScale(t,e)),this}rotate(t){return this.premultiply(zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(zs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new Jt;function Ro(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sc(){const i=Es("canvas");return i.style.display="block",i}const Sa={};function Oi(i){i in Sa||(Sa[i]=!0,console.warn(i))}const Ea=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ya=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yi={[yn]:{transfer:gs,primaries:vs,toReference:i=>i,fromReference:i=>i},[Re]:{transfer:ue,primaries:vs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[bs]:{transfer:gs,primaries:xs,toReference:i=>i.applyMatrix3(ya),fromReference:i=>i.applyMatrix3(Ea)},[Rr]:{transfer:ue,primaries:xs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ya),fromReference:i=>i.applyMatrix3(Ea).convertLinearToSRGB()}},Ec=new Set([yn,bs]),oe={enabled:!0,_workingColorSpace:yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ec.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Yi[t].toReference,s=Yi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Yi[i].primaries},getTransfer:function(i){return i===nn?gs:Yi[i].transfer}};function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ti;class Co{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ti===void 0&&(ti=Es("canvas")),ti.width=t.width,ti.height=t.height;const n=ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Es("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yc=0;class Lo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=wi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Hs(s[o].image)):r.push(Hs(s[o]))}else r=Hs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Hs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Co.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bc=0;class Je extends Ti{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=dn,s=dn,r=en,o=Bi,a=hn,l=Nn,c=Je.DEFAULT_ANISOTROPY,d=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=wi(),this.name="",this.source=new Lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Zn?Re:nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _r:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _r:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Re?Zn:wo}set encoding(t){Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Zn?Re:nn}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=vo;Je.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],_=l[9],g=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,L=(m+1)/2,I=(u+1)/2,R=(d+h)/4,P=(f+g)/4,j=(_+p)/4;return M>L&&M>I?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=P/n):L>I?L<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(L),n=R/s,r=j/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=P/r,s=j/r),this.set(n,s,r,e),this}let w=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(p-_)/w,this.y=(f-g)/w,this.z=(h-d)/w,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tc extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(Oi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zn?Re:nn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Lo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Tc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Po extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wc extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],f=n[s+3];const h=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==h||c!==m||d!==_){let p=1-a;const u=l*h+c*m+d*_+f*g,w=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const I=Math.sqrt(M),R=Math.atan2(I,u*w);p=Math.sin(p*R)/I,a=Math.sin(a*R)/I}const L=a*w;if(l=l*p+h*L,c=c*p+m*L,d=d*p+_*L,f=f*p+g*L,p===1-a){const I=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=I,c*=I,d*=I,f*=I}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],f=r[o],h=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+d*f+l*m-c*h,t[e+1]=l*_+d*h+c*f-a*m,t[e+2]=c*_+d*m+a*h-l*f,t[e+3]=d*_-a*f-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),f=a(r/2),h=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"YXZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"ZXY":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"ZYX":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"YZX":this._x=h*d*f+c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f-h*m*_;break;case"XZY":this._x=h*d*f-c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],f=e[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-e)*d)/c,h=Math.sin(e*d)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ba.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ba.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),d=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*d,this.y=n+l*d+a*c-r*f,this.z=s+l*f+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ks.copy(this).projectOnVector(t),this.sub(ks)}reflect(t){return this.sub(ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ks=new O,ba=new Hi;class ki{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qi.copy(n.boundingBox)),qi.applyMatrix4(t.matrixWorld),this.union(qi)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ci),$i.subVectors(this.max,Ci),ei.subVectors(t.a,Ci),ni.subVectors(t.b,Ci),ii.subVectors(t.c,Ci),bn.subVectors(ni,ei),Tn.subVectors(ii,ni),zn.subVectors(ei,ii);let e=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-zn.z,zn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,zn.z,0,-zn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-zn.y,zn.x,0];return!Vs(e,ei,ni,ii,$i)||(e=[1,0,0,0,1,0,0,0,1],!Vs(e,ei,ni,ii,$i))?!1:(Zi.crossVectors(bn,Tn),e=[Zi.x,Zi.y,Zi.z],Vs(e,ei,ni,ii,$i))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new O,new O,new O,new O,new O,new O,new O,new O],an=new O,qi=new ki,ei=new O,ni=new O,ii=new O,bn=new O,Tn=new O,zn=new O,Ci=new O,$i=new O,Zi=new O,Gn=new O;function Vs(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gn.fromArray(i,r);const a=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=t.dot(Gn),c=e.dot(Gn),d=n.dot(Gn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Ac=new ki,Li=new O,Ws=new O;class Ts{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ac.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Li.subVectors(t,this.center);const e=Li.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Li,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ws.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Li.copy(t.center).add(Ws)),this.expandByPoint(Li.copy(t.center).sub(Ws))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new O,Xs=new O,ji=new O,wn=new O,Ys=new O,Ki=new O,qs=new O;class Do{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xs.copy(t).add(e).multiplyScalar(.5),ji.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(Xs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ji),a=wn.dot(this.direction),l=-wn.dot(ji),c=wn.lengthSq(),d=Math.abs(1-o*o);let f,h,m,_;if(d>0)if(f=o*l-a,h=o*a-l,_=r*d,f>=0)if(h>=-_)if(h<=_){const g=1/d;f*=g,h*=g,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Xs).addScaledVector(ji,h),m}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),d>=0?(r=(t.min.y-h.y)*d,o=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,o=(t.min.y-h.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){Ys.subVectors(e,t),Ki.subVectors(n,t),qs.crossVectors(Ys,Ki);let o=this.direction.dot(qs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,t);const l=a*this.direction.dot(Ki.crossVectors(wn,Ki));if(l<0)return null;const c=a*this.direction.dot(Ys.cross(wn));if(c<0||l+c>o)return null;const d=-a*wn.dot(qs);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,o,a,l,c,d,f,h,m,_,g,p){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,d,f,h,m,_,g,p)}set(t,e,n,s,r,o,a,l,c,d,f,h,m,_,g,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=_,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/si.setFromMatrixColumn(t,0).length(),r=1/si.setFromMatrixColumn(t,1).length(),o=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*d,m=o*f,_=a*d,g=a*f;e[0]=l*d,e[4]=-l*f,e[8]=c,e[1]=m+_*c,e[5]=h-g*c,e[9]=-a*l,e[2]=g-h*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*d,m=l*f,_=c*d,g=c*f;e[0]=h+g*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*d,e[9]=-a,e[2]=m*a-_,e[6]=g+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*d,m=l*f,_=c*d,g=c*f;e[0]=h-g*a,e[4]=-o*f,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*d,e[9]=g-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*d,m=o*f,_=a*d,g=a*f;e[0]=l*d,e[4]=_*c-m,e[8]=h*c+g,e[1]=l*f,e[5]=g*c+h,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*d,e[4]=g-h*f,e[8]=_*f+m,e[1]=f,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=m*f+_,e[10]=h-g*f}else if(t.order==="XZY"){const h=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*d,e[4]=-f,e[8]=c*d,e[1]=h*f+g,e[5]=o*d,e[9]=m*f-_,e[2]=_*f-m,e[6]=a*d,e[10]=g*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rc,t,Cc)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),An.crossVectors(n,je),An.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),An.crossVectors(n,je)),An.normalize(),Ji.crossVectors(je,An),s[0]=An.x,s[4]=Ji.x,s[8]=je.x,s[1]=An.y,s[5]=Ji.y,s[9]=je.y,s[2]=An.z,s[6]=Ji.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],f=n[5],h=n[9],m=n[13],_=n[2],g=n[6],p=n[10],u=n[14],w=n[3],M=n[7],L=n[11],I=n[15],R=s[0],P=s[4],j=s[8],y=s[12],b=s[1],Z=s[5],rt=s[9],_t=s[13],D=s[2],G=s[6],Y=s[10],lt=s[14],at=s[3],ot=s[7],F=s[11],ct=s[15];return r[0]=o*R+a*b+l*D+c*at,r[4]=o*P+a*Z+l*G+c*ot,r[8]=o*j+a*rt+l*Y+c*F,r[12]=o*y+a*_t+l*lt+c*ct,r[1]=d*R+f*b+h*D+m*at,r[5]=d*P+f*Z+h*G+m*ot,r[9]=d*j+f*rt+h*Y+m*F,r[13]=d*y+f*_t+h*lt+m*ct,r[2]=_*R+g*b+p*D+u*at,r[6]=_*P+g*Z+p*G+u*ot,r[10]=_*j+g*rt+p*Y+u*F,r[14]=_*y+g*_t+p*lt+u*ct,r[3]=w*R+M*b+L*D+I*at,r[7]=w*P+M*Z+L*G+I*ot,r[11]=w*j+M*rt+L*Y+I*F,r[15]=w*y+M*_t+L*lt+I*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],f=t[6],h=t[10],m=t[14],_=t[3],g=t[7],p=t[11],u=t[15];return _*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*m-n*l*m)+g*(+e*l*m-e*c*h+r*o*h-s*o*m+s*c*d-r*l*d)+p*(+e*c*f-e*a*m-r*o*f+n*o*m+r*a*d-n*c*d)+u*(-s*a*d-e*l*f+e*a*h+s*o*f-n*o*h+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=t[9],h=t[10],m=t[11],_=t[12],g=t[13],p=t[14],u=t[15],w=f*p*c-g*h*c+g*l*m-a*p*m-f*l*u+a*h*u,M=_*h*c-d*p*c-_*l*m+o*p*m+d*l*u-o*h*u,L=d*g*c-_*f*c+_*a*m-o*g*m-d*a*u+o*f*u,I=_*f*l-d*g*l-_*a*h+o*g*h+d*a*p-o*f*p,R=e*w+n*M+s*L+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=w*P,t[1]=(g*h*r-f*p*r-g*s*m+n*p*m+f*s*u-n*h*u)*P,t[2]=(a*p*r-g*l*r+g*s*c-n*p*c-a*s*u+n*l*u)*P,t[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*m-n*l*m)*P,t[4]=M*P,t[5]=(d*p*r-_*h*r+_*s*m-e*p*m-d*s*u+e*h*u)*P,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*u-e*l*u)*P,t[7]=(o*h*r-d*l*r+d*s*c-e*h*c-o*s*m+e*l*m)*P,t[8]=L*P,t[9]=(_*f*r-d*g*r-_*n*m+e*g*m+d*n*u-e*f*u)*P,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*u+e*a*u)*P,t[11]=(d*a*r-o*f*r-d*n*c+e*f*c+o*n*m-e*a*m)*P,t[12]=I*P,t[13]=(d*g*s-_*f*s+_*n*h-e*g*h-d*n*p+e*f*p)*P,t[14]=(_*a*s-o*g*s-_*n*l+e*g*l+o*n*p-e*a*p)*P,t[15]=(o*f*s-d*a*s+d*n*l-e*f*l-o*n*h+e*a*h)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,f=a+a,h=r*c,m=r*d,_=r*f,g=o*d,p=o*f,u=a*f,w=l*c,M=l*d,L=l*f,I=n.x,R=n.y,P=n.z;return s[0]=(1-(g+u))*I,s[1]=(m+L)*I,s[2]=(_-M)*I,s[3]=0,s[4]=(m-L)*R,s[5]=(1-(h+u))*R,s[6]=(p+w)*R,s[7]=0,s[8]=(_+M)*P,s[9]=(p-w)*P,s[10]=(1-(h+g))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=si.set(s[0],s[1],s[2]).length();const o=si.set(s[4],s[5],s[6]).length(),a=si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const c=1/r,d=1/o,f=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=d,on.elements[5]*=d,on.elements[6]*=d,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=En){const l=this.elements,c=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let m,_;if(a===En)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ms)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=En){const l=this.elements,c=1/(e-t),d=1/(n-s),f=1/(o-r),h=(e+t)*c,m=(n+s)*d;let _,g;if(a===En)_=(o+r)*f,g=-2*f;else if(a===Ms)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const si=new O,on=new _e,Rc=new O(0,0,0),Cc=new O(1,1,1),An=new O,Ji=new O,je=new O,Ta=new _e,wa=new Hi;class ws{constructor(t=0,e=0,n=0,s=ws.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],f=s[2],h=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ta.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ta,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wa.setFromEuler(this),this.setFromQuaternion(wa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ws.DEFAULT_ORDER="XYZ";class Uo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lc=0;const Aa=new O,ri=new Hi,gn=new _e,Qi=new O,Pi=new O,Pc=new O,Dc=new Hi,Ra=new O(1,0,0),Ca=new O(0,1,0),La=new O(0,0,1),Uc={type:"added"},Ic={type:"removed"};class Ce extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new O,e=new ws,n=new Hi,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Jt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(Ra,t)}rotateY(t){return this.rotateOnAxis(Ca,t)}rotateZ(t){return this.rotateOnAxis(La,t)}translateOnAxis(t,e){return Aa.copy(t).applyQuaternion(this.quaternion),this.position.add(Aa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ra,t)}translateY(t){return this.translateOnAxis(Ca,t)}translateZ(t){return this.translateOnAxis(La,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qi.copy(t):Qi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Pi,Qi,this.up):gn.lookAt(Qi,Pi,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),ri.setFromRotationMatrix(gn),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Uc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ic)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,t,Pc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,Dc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),f=o(t.shapes),h=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new O(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new O,vn=new O,$s=new O,xn=new O,ai=new O,oi=new O,Pa=new O,Zs=new O,js=new O,Ks=new O;let ts=!1;class cn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),vn.subVectors(n,e),$s.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(vn),l=ln.dot($s),c=vn.dot(vn),d=vn.dot($s),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,m=(c*l-a*d)*h,_=(o*d-a*l)*h;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(t,e,n,s,r,o,a,l){return ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ts=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(o,xn.y),l.addScaledVector(a,xn.z),l)}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),vn.subVectors(t,e),ln.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),ln.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ts=!0),cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ai.subVectors(s,n),oi.subVectors(r,n),Zs.subVectors(t,n);const l=ai.dot(Zs),c=oi.dot(Zs);if(l<=0&&c<=0)return e.copy(n);js.subVectors(t,s);const d=ai.dot(js),f=oi.dot(js);if(d>=0&&f<=d)return e.copy(s);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(ai,o);Ks.subVectors(t,r);const m=ai.dot(Ks),_=oi.dot(Ks);if(_>=0&&m<=_)return e.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(oi,a);const p=d*_-m*f;if(p<=0&&f-d>=0&&m-_>=0)return Pa.subVectors(r,s),a=(f-d)/(f-d+(m-_)),e.copy(s).addScaledVector(Pa,a);const u=1/(p+g+h);return o=g*u,a=h*u,e.copy(n).addScaledVector(ai,o).addScaledVector(oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Io={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},es={h:0,s:0,l:0};function Js(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Cr(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Js(o,r,t+1/3),this.g=Js(o,r,t),this.b=Js(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=Io[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return oe.fromWorkingColorSpace(Ie.copy(this),t),Math.round(We(Ie.r*255,0,255))*65536+Math.round(We(Ie.g*255,0,255))*256+Math.round(We(Ie.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Re){oe.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,s=Ie.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(es);const n=Fi(Rn.h,es.h,e),s=Fi(Rn.s,es.s,e),r=Fi(Rn.l,es.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new jt;jt.NAMES=Io;let Nc=0;class Jn extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=xi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hr,this.blendDst=fr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ga,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hr&&(n.blendSrc=this.blendSrc),this.blendDst!==fr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ga&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class No extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new O,ns=new ne;class pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=va,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ns.fromBufferAttribute(this,e),ns.applyMatrix3(t),this.setXY(e,ns.x,ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==va&&(t.usage=this.usage),t}}class Fo extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Oo extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Le extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Fc=0;const tn=new _e,Qs=new Ce,li=new O,Ke=new ki,Di=new ki,we=new O;class sn extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ro(t)?Oo:Fo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Qs.lookAt(t),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Di.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Ke.min,Di.min),Ke.expandByPoint(we),we.addVectors(Ke.max,Di.max),Ke.expandByPoint(we)):(Ke.expandByPoint(Di.min),Ke.expandByPoint(Di.max))}Ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)we.fromBufferAttribute(a,c),l&&(li.fromBufferAttribute(t,c),we.add(li)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let b=0;b<a;b++)c[b]=new O,d[b]=new O;const f=new O,h=new O,m=new O,_=new ne,g=new ne,p=new ne,u=new O,w=new O;function M(b,Z,rt){f.fromArray(s,b*3),h.fromArray(s,Z*3),m.fromArray(s,rt*3),_.fromArray(o,b*2),g.fromArray(o,Z*2),p.fromArray(o,rt*2),h.sub(f),m.sub(f),g.sub(_),p.sub(_);const _t=1/(g.x*p.y-p.x*g.y);isFinite(_t)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(_t),w.copy(m).multiplyScalar(g.x).addScaledVector(h,-p.x).multiplyScalar(_t),c[b].add(u),c[Z].add(u),c[rt].add(u),d[b].add(w),d[Z].add(w),d[rt].add(w))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.length}]);for(let b=0,Z=L.length;b<Z;++b){const rt=L[b],_t=rt.start,D=rt.count;for(let G=_t,Y=_t+D;G<Y;G+=3)M(n[G+0],n[G+1],n[G+2])}const I=new O,R=new O,P=new O,j=new O;function y(b){P.fromArray(r,b*3),j.copy(P);const Z=c[b];I.copy(Z),I.sub(P.multiplyScalar(P.dot(Z))).normalize(),R.crossVectors(j,Z);const _t=R.dot(d[b])<0?-1:1;l[b*4]=I.x,l[b*4+1]=I.y,l[b*4+2]=I.z,l[b*4+3]=_t}for(let b=0,Z=L.length;b<Z;++b){const rt=L[b],_t=rt.start,D=rt.count;for(let G=_t,Y=_t+D;G<Y;G+=3)y(n[G+0]),y(n[G+1]),y(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,d=new O,f=new O;if(t)for(let h=0,m=t.count;h<m;h+=3){const _=t.getX(h+0),g=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(d),l.add(d),c.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*d;for(let u=0;u<d;u++)h[_++]=c[m++]}return new pn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=t(h,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],f=r[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Da=new _e,Hn=new Do,is=new Ts,Ua=new O,ci=new O,ui=new O,di=new O,tr=new O,ss=new O,rs=new ne,as=new ne,os=new ne,Ia=new O,Na=new O,Fa=new O,ls=new O,cs=new O;class $t extends Ce{constructor(t=new sn,e=new No){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],f=r[l];d!==0&&(tr.fromBufferAttribute(f,t),o?ss.addScaledVector(tr,d):ss.addScaledVector(tr.sub(e),d))}e.add(ss)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(r),Hn.copy(t.ray).recast(t.near),!(is.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(is,Ua)===null||Hn.origin.distanceToSquared(Ua)>(t.far-t.near)**2))&&(Da.copy(r).invert(),Hn.copy(t.ray).applyMatrix4(Da),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],u=o[p.materialIndex],w=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let L=w,I=M;L<I;L+=3){const R=a.getX(L),P=a.getX(L+1),j=a.getX(L+2);s=us(this,u,t,n,c,d,f,R,P,j),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const w=a.getX(p),M=a.getX(p+1),L=a.getX(p+2);s=us(this,o,t,n,c,d,f,w,M,L),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],u=o[p.materialIndex],w=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let L=w,I=M;L<I;L+=3){const R=L,P=L+1,j=L+2;s=us(this,u,t,n,c,d,f,R,P,j),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const w=p,M=p+1,L=p+2;s=us(this,o,t,n,c,d,f,w,M,L),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Oc(i,t,e,n,s,r,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Fn,a),l===null)return null;cs.copy(a),cs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(cs);return c<e.near||c>e.far?null:{distance:c,point:cs.clone(),object:i}}function us(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ci),i.getVertexPosition(l,ui),i.getVertexPosition(c,di);const d=Oc(i,t,e,n,ci,ui,di,ls);if(d){s&&(rs.fromBufferAttribute(s,a),as.fromBufferAttribute(s,l),os.fromBufferAttribute(s,c),d.uv=cn.getInterpolation(ls,ci,ui,di,rs,as,os,new ne)),r&&(rs.fromBufferAttribute(r,a),as.fromBufferAttribute(r,l),os.fromBufferAttribute(r,c),d.uv1=cn.getInterpolation(ls,ci,ui,di,rs,as,os,new ne),d.uv2=d.uv1),o&&(Ia.fromBufferAttribute(o,a),Na.fromBufferAttribute(o,l),Fa.fromBufferAttribute(o,c),d.normal=cn.getInterpolation(ls,ci,ui,di,Ia,Na,Fa,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};cn.getNormal(ci,ui,di,f.normal),d.face=f}return d}class qe extends sn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(f,2));function _(g,p,u,w,M,L,I,R,P,j,y){const b=L/P,Z=I/j,rt=L/2,_t=I/2,D=R/2,G=P+1,Y=j+1;let lt=0,at=0;const ot=new O;for(let F=0;F<Y;F++){const ct=F*Z-_t;for(let it=0;it<G;it++){const J=it*b-rt;ot[g]=J*w,ot[p]=ct*M,ot[u]=D,c.push(ot.x,ot.y,ot.z),ot[g]=0,ot[p]=0,ot[u]=R>0?1:-1,d.push(ot.x,ot.y,ot.z),f.push(it/P),f.push(1-F/j),lt+=1}}for(let F=0;F<j;F++)for(let ct=0;ct<P;ct++){const it=h+ct+G*F,J=h+ct+G*(F+1),ht=h+(ct+1)+G*(F+1),St=h+(ct+1)+G*F;l.push(it,J,St),l.push(J,ht,St),at+=6}a.addGroup(m,at,y),m+=at,h+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=bi(i[e]);for(const s in n)t[s]=n[s]}return t}function Bc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bo(i){return i.getRenderTarget()===null?i.outputColorSpace:oe.workingColorSpace}const zc={clone:bi,merge:He};var Gc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gc,this.fragmentShader=Hc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bi(t.uniforms),this.uniformsGroups=Bc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zo extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $e extends zo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ni*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(Ni*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ni*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hi=-90,fi=1;class kc extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(hi,fi,t,e);s.layers=this.layers,this.add(s);const r=new $e(hi,fi,t,e);r.layers=this.layers,this.add(r);const o=new $e(hi,fi,t,e);o.layers=this.layers,this.add(o);const a=new $e(hi,fi,t,e);a.layers=this.layers,this.add(a);const l=new $e(hi,fi,t,e);l.layers=this.layers,this.add(l);const c=new $e(hi,fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(f,h,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Go extends Je{constructor(t,e,n,s,r,o,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vc extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Oi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Zn?Re:nn),this.texture=new Go(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qe(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Un});r.uniforms.tEquirect.value=e;const o=new $t(s,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=en),new kc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const er=new O,Wc=new O,Xc=new Jt;class Vn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=er.subVectors(n,e).cross(Wc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(er),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xc.getNormalMatrix(t),s=this.coplanarPoint(er).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Ts,ds=new O;class Lr{constructor(t=new Vn,e=new Vn,n=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],f=s[6],h=s[7],m=s[8],_=s[9],g=s[10],p=s[11],u=s[12],w=s[13],M=s[14],L=s[15];if(n[0].setComponents(l-r,h-c,p-m,L-u).normalize(),n[1].setComponents(l+r,h+c,p+m,L+u).normalize(),n[2].setComponents(l+o,h+d,p+_,L+w).normalize(),n[3].setComponents(l-o,h-d,p-_,L-w).normalize(),n[4].setComponents(l-a,h-f,p-g,L-M).normalize(),e===En)n[5].setComponents(l+a,h+f,p+g,L+M).normalize();else if(e===Ms)n[5].setComponents(a,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ds.x=s.normal.x>0?t.max.x:t.min.x,ds.y=s.normal.y>0?t.max.y:t.min.y,ds.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ho(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yc(i,t){const e=t.isWebGL2,n=new WeakMap;function s(c,d){const f=c.array,h=c.usage,m=f.byteLength,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,d,f){const h=d.array,m=d._updateRange,_=d.updateRanges;if(i.bindBuffer(f,c),m.count===-1&&_.length===0&&i.bufferSubData(f,0,h),_.length!==0){for(let g=0,p=_.length;g<p;g++){const u=_[g];e?i.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):i.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(i.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,s(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,d),f.version=c.version}}return{get:o,remove:a,update:l}}class ke extends sn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,f=t/a,h=e/l,m=[],_=[],g=[],p=[];for(let u=0;u<d;u++){const w=u*h-o;for(let M=0;M<c;M++){const L=M*f-r;_.push(L,-w,0),g.push(0,0,1),p.push(M/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<a;w++){const M=w+c*u,L=w+c*(u+1),I=w+1+c*(u+1),R=w+1+c*u;m.push(M,L,R),m.push(L,I,R)}this.setIndex(m),this.setAttribute("position",new Le(_,3)),this.setAttribute("normal",new Le(g,3)),this.setAttribute("uv",new Le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.width,t.height,t.widthSegments,t.heightSegments)}}var qc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$c=`#ifdef USE_ALPHAHASH
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
#endif`,Zc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qc=`#ifdef USE_AOMAP
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
#endif`,tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,au=`#ifdef USE_IRIDESCENCE
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
#endif`,ou=`#ifdef USE_BUMPMAP
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
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_u=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,gu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vu=`vec3 transformedNormal = objectNormal;
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
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",bu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Tu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Du=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iu=`#ifdef USE_GRADIENTMAP
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
}`,Nu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zu=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Gu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xu=`PhysicalMaterial material;
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
#endif`,Yu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,qu=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,$u=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ju=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,id=`#if defined( USE_POINTS_UV )
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
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ad=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ld=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,md=`#ifdef USE_NORMALMAP
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
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ld=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nd=`#ifdef USE_SKINNING
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
#endif`,Fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zd=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gd=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qd=`uniform sampler2D t2D;
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`#include <common>
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
}`,Qd=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,th=`#define DISTANCE
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
}`,eh=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ih=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sh=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ah=`#include <common>
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
}`,oh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lh=`#define LAMBERT
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
}`,ch=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,uh=`#define MATCAP
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
}`,dh=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,hh=`#define NORMAL
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
}`,fh=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ph=`#define PHONG
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
}`,mh=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_h=`#define STANDARD
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
}`,gh=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vh=`#define TOON
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
}`,xh=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Mh=`uniform float size;
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
}`,Sh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Eh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,yh=`uniform vec3 color;
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
}`,bh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Th=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zt={alphahash_fragment:qc,alphahash_pars_fragment:$c,alphamap_fragment:Zc,alphamap_pars_fragment:jc,alphatest_fragment:Kc,alphatest_pars_fragment:Jc,aomap_fragment:Qc,aomap_pars_fragment:tu,batching_pars_vertex:eu,batching_vertex:nu,begin_vertex:iu,beginnormal_vertex:su,bsdfs:ru,iridescence_fragment:au,bumpmap_pars_fragment:ou,clipping_planes_fragment:lu,clipping_planes_pars_fragment:cu,clipping_planes_pars_vertex:uu,clipping_planes_vertex:du,color_fragment:hu,color_pars_fragment:fu,color_pars_vertex:pu,color_vertex:mu,common:_u,cube_uv_reflection_fragment:gu,defaultnormal_vertex:vu,displacementmap_pars_vertex:xu,displacementmap_vertex:Mu,emissivemap_fragment:Su,emissivemap_pars_fragment:Eu,colorspace_fragment:yu,colorspace_pars_fragment:bu,envmap_fragment:Tu,envmap_common_pars_fragment:wu,envmap_pars_fragment:Au,envmap_pars_vertex:Ru,envmap_physical_pars_fragment:Gu,envmap_vertex:Cu,fog_vertex:Lu,fog_pars_vertex:Pu,fog_fragment:Du,fog_pars_fragment:Uu,gradientmap_pars_fragment:Iu,lightmap_fragment:Nu,lightmap_pars_fragment:Fu,lights_lambert_fragment:Ou,lights_lambert_pars_fragment:Bu,lights_pars_begin:zu,lights_toon_fragment:Hu,lights_toon_pars_fragment:ku,lights_phong_fragment:Vu,lights_phong_pars_fragment:Wu,lights_physical_fragment:Xu,lights_physical_pars_fragment:Yu,lights_fragment_begin:qu,lights_fragment_maps:$u,lights_fragment_end:Zu,logdepthbuf_fragment:ju,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:Ju,logdepthbuf_vertex:Qu,map_fragment:td,map_pars_fragment:ed,map_particle_fragment:nd,map_particle_pars_fragment:id,metalnessmap_fragment:sd,metalnessmap_pars_fragment:rd,morphcolor_vertex:ad,morphnormal_vertex:od,morphtarget_pars_vertex:ld,morphtarget_vertex:cd,normal_fragment_begin:ud,normal_fragment_maps:dd,normal_pars_fragment:hd,normal_pars_vertex:fd,normal_vertex:pd,normalmap_pars_fragment:md,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:gd,clearcoat_pars_fragment:vd,iridescence_pars_fragment:xd,opaque_fragment:Md,packing:Sd,premultiplied_alpha_fragment:Ed,project_vertex:yd,dithering_fragment:bd,dithering_pars_fragment:Td,roughnessmap_fragment:wd,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:Rd,shadowmap_pars_vertex:Cd,shadowmap_vertex:Ld,shadowmask_pars_fragment:Pd,skinbase_vertex:Dd,skinning_pars_vertex:Ud,skinning_vertex:Id,skinnormal_vertex:Nd,specularmap_fragment:Fd,specularmap_pars_fragment:Od,tonemapping_fragment:Bd,tonemapping_pars_fragment:zd,transmission_fragment:Gd,transmission_pars_fragment:Hd,uv_pars_fragment:kd,uv_pars_vertex:Vd,uv_vertex:Wd,worldpos_vertex:Xd,background_vert:Yd,background_frag:qd,backgroundCube_vert:$d,backgroundCube_frag:Zd,cube_vert:jd,cube_frag:Kd,depth_vert:Jd,depth_frag:Qd,distanceRGBA_vert:th,distanceRGBA_frag:eh,equirect_vert:nh,equirect_frag:ih,linedashed_vert:sh,linedashed_frag:rh,meshbasic_vert:ah,meshbasic_frag:oh,meshlambert_vert:lh,meshlambert_frag:ch,meshmatcap_vert:uh,meshmatcap_frag:dh,meshnormal_vert:hh,meshnormal_frag:fh,meshphong_vert:ph,meshphong_frag:mh,meshphysical_vert:_h,meshphysical_frag:gh,meshtoon_vert:vh,meshtoon_frag:xh,points_vert:Mh,points_frag:Sh,shadow_vert:Eh,shadow_frag:yh,sprite_vert:bh,sprite_frag:Th},bt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},fn={basic:{uniforms:He([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:He([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:He([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:He([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:He([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:He([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:He([bt.points,bt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:He([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:He([bt.common,bt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:He([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:He([bt.sprite,bt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:He([bt.common,bt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:He([bt.lights,bt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};fn.physical={uniforms:He([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const hs={r:0,b:0,g:0};function wh(i,t,e,n,s,r,o){const a=new jt(0);let l=r===!0?0:1,c,d,f=null,h=0,m=null;function _(p,u){let w=!1,M=u.isScene===!0?u.background:null;M&&M.isTexture&&(M=(u.backgroundBlurriness>0?e:t).get(M)),M===null?g(a,l):M&&M.isColor&&(g(M,1),w=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ys)?(d===void 0&&(d=new $t(new qe(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:bi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=oe.getTransfer(M.colorSpace)!==ue,(f!==M||h!==M.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,f=M,h=M.version,m=i.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new $t(new ke(2,2),new Kn({name:"BackgroundMaterial",uniforms:bi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=oe.getTransfer(M.colorSpace)!==ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,u){p.getRGB(hs,Bo(i)),n.buffers.color.setClear(hs.r,hs.g,hs.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function Ah(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,d=!1;function f(D,G,Y,lt,at){let ot=!1;if(o){const F=g(lt,Y,G);c!==F&&(c=F,m(c.object)),ot=u(D,lt,Y,at),ot&&w(D,lt,Y,at)}else{const F=G.wireframe===!0;(c.geometry!==lt.id||c.program!==Y.id||c.wireframe!==F)&&(c.geometry=lt.id,c.program=Y.id,c.wireframe=F,ot=!0)}at!==null&&e.update(at,i.ELEMENT_ARRAY_BUFFER),(ot||d)&&(d=!1,j(D,G,Y,lt),at!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(at).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function g(D,G,Y){const lt=Y.wireframe===!0;let at=a[D.id];at===void 0&&(at={},a[D.id]=at);let ot=at[G.id];ot===void 0&&(ot={},at[G.id]=ot);let F=ot[lt];return F===void 0&&(F=p(h()),ot[lt]=F),F}function p(D){const G=[],Y=[],lt=[];for(let at=0;at<s;at++)G[at]=0,Y[at]=0,lt[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:lt,object:D,attributes:{},index:null}}function u(D,G,Y,lt){const at=c.attributes,ot=G.attributes;let F=0;const ct=Y.getAttributes();for(const it in ct)if(ct[it].location>=0){const ht=at[it];let St=ot[it];if(St===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(St=D.instanceColor)),ht===void 0||ht.attribute!==St||St&&ht.data!==St.data)return!0;F++}return c.attributesNum!==F||c.index!==lt}function w(D,G,Y,lt){const at={},ot=G.attributes;let F=0;const ct=Y.getAttributes();for(const it in ct)if(ct[it].location>=0){let ht=ot[it];ht===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor));const St={};St.attribute=ht,ht&&ht.data&&(St.data=ht.data),at[it]=St,F++}c.attributes=at,c.attributesNum=F,c.index=lt}function M(){const D=c.newAttributes;for(let G=0,Y=D.length;G<Y;G++)D[G]=0}function L(D){I(D,0)}function I(D,G){const Y=c.newAttributes,lt=c.enabledAttributes,at=c.attributeDivisors;Y[D]=1,lt[D]===0&&(i.enableVertexAttribArray(D),lt[D]=1),at[D]!==G&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),at[D]=G)}function R(){const D=c.newAttributes,G=c.enabledAttributes;for(let Y=0,lt=G.length;Y<lt;Y++)G[Y]!==D[Y]&&(i.disableVertexAttribArray(Y),G[Y]=0)}function P(D,G,Y,lt,at,ot,F){F===!0?i.vertexAttribIPointer(D,G,Y,at,ot):i.vertexAttribPointer(D,G,Y,lt,at,ot)}function j(D,G,Y,lt){if(n.isWebGL2===!1&&(D.isInstancedMesh||lt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const at=lt.attributes,ot=Y.getAttributes(),F=G.defaultAttributeValues;for(const ct in ot){const it=ot[ct];if(it.location>=0){let J=at[ct];if(J===void 0&&(ct==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),ct==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){const ht=J.normalized,St=J.itemSize,Ct=e.get(J);if(Ct===void 0)continue;const At=Ct.buffer,kt=Ct.type,Ot=Ct.bytesPerElement,Ft=n.isWebGL2===!0&&(kt===i.INT||kt===i.UNSIGNED_INT||J.gpuType===xo);if(J.isInterleavedBufferAttribute){const Wt=J.data,k=Wt.stride,Se=J.offset;if(Wt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<it.locationSize;Ut++)I(it.location+Ut,Wt.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Wt.meshPerAttribute*Wt.count)}else for(let Ut=0;Ut<it.locationSize;Ut++)L(it.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,At);for(let Ut=0;Ut<it.locationSize;Ut++)P(it.location+Ut,St/it.locationSize,kt,ht,k*Ot,(Se+St/it.locationSize*Ut)*Ot,Ft)}else{if(J.isInstancedBufferAttribute){for(let Wt=0;Wt<it.locationSize;Wt++)I(it.location+Wt,J.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Wt=0;Wt<it.locationSize;Wt++)L(it.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,At);for(let Wt=0;Wt<it.locationSize;Wt++)P(it.location+Wt,St/it.locationSize,kt,ht,St*Ot,St/it.locationSize*Wt*Ot,Ft)}}else if(F!==void 0){const ht=F[ct];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(it.location,ht);break;case 3:i.vertexAttrib3fv(it.location,ht);break;case 4:i.vertexAttrib4fv(it.location,ht);break;default:i.vertexAttrib1fv(it.location,ht)}}}}R()}function y(){rt();for(const D in a){const G=a[D];for(const Y in G){const lt=G[Y];for(const at in lt)_(lt[at].object),delete lt[at];delete G[Y]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;const G=a[D.id];for(const Y in G){const lt=G[Y];for(const at in lt)_(lt[at].object),delete lt[at];delete G[Y]}delete a[D.id]}function Z(D){for(const G in a){const Y=a[G];if(Y[D.id]===void 0)continue;const lt=Y[D.id];for(const at in lt)_(lt[at].object),delete lt[at];delete Y[D.id]}}function rt(){_t(),d=!0,c!==l&&(c=l,m(c.object))}function _t(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:rt,resetDefaultState:_t,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:Z,initAttributes:M,enableAttribute:L,disableUnusedAttributes:R}}function Rh(i,t,e,n){const s=n.isWebGL2;let r;function o(d){r=d}function a(d,f){i.drawArrays(r,d,f),e.update(f,r,1)}function l(d,f,h){if(h===0)return;let m,_;if(s)m=i,_="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,d,f,h),e.update(f,r,h)}function c(d,f,h){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(d[_],f[_]);else{m.multiDrawArraysWEBGL(r,d,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=f[g];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ch(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,L=o||t.has("OES_texture_float"),I=M&&L,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:w,vertexTextures:M,floatFragmentTextures:L,floatVertexTextures:I,maxSamples:R}}function Lh(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Vn,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||s;return s=h,n=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=d(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!s||_===null||_.length===0||r&&!p)r?d(null):c();else{const w=r?0:n,M=w*4;let L=u.clippingState||null;l.value=L,L=d(_,h,M,m);for(let I=0;I!==M;++I)L[I]=e[I];u.clippingState=L,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,h,m,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const u=m+g*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,L=m;M!==g;++M,L+=4)o.copy(f[M]).applyMatrix4(w,a),o.normal.toArray(p,L),p[L+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Ph(i){let t=new WeakMap;function e(o,a){return a===pr?o.mapping=Si:a===mr&&(o.mapping=Ei),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===pr||a===mr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vc(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ko extends zo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _i=4,Oa=[.125,.215,.35,.446,.526,.582],Yn=20,nr=new ko,Ba=new jt;let ir=null,sr=0,rr=0;const Wn=(1+Math.sqrt(5))/2,pi=1/Wn,za=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Wn,pi),new O(0,Wn,-pi),new O(pi,0,Wn),new O(-pi,0,Wn),new O(Wn,pi,0),new O(-Wn,pi,0)];class Ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Va(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ir,sr,rr),t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===Ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:zi,format:hn,colorSpace:yn,depthBuffer:!1},s=Ha(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ha(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dh(r)),this._blurMaterial=Uh(r,t,e)}return s}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,nr)}_sceneToCubeUV(t,e,n,s){const a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Ba),d.toneMapping=In,d.autoClear=!1;const m=new No({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),_=new $t(new qe,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(Ba),g=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):w===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const M=this._cubeSize;fs(s,w*M,u>2?M:0,M,M),d.setRenderTarget(s),g&&d.render(_,a),d.render(t,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Si||t.mapping===Ei;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Va()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ka());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,nr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=za[(s-1)%za.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new $t(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Yn-1),g=r/_,p=isFinite(r)?1+Math.floor(d*g):Yn;p>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yn}`);const u=[];let w=0;for(let P=0;P<Yn;++P){const j=P/g,y=Math.exp(-j*j/2);u.push(y),P===0?w+=y:P<p&&(w+=2*y)}for(let P=0;P<u.length;P++)u[P]=u[P]/w;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=_,h.mipInt.value=M-n;const L=this._sizeLods[s],I=3*L*(s>M-_i?s-M+_i:0),R=4*(this._cubeSize-L);fs(e,I,R,3*L,2*L),l.setRenderTarget(e),l.render(f,nr)}}function Dh(i){const t=[],e=[],n=[];let s=i;const r=i-_i+1+Oa.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-_i?l=Oa[o-i+_i-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,g=3,p=2,u=1,w=new Float32Array(g*_*m),M=new Float32Array(p*_*m),L=new Float32Array(u*_*m);for(let R=0;R<m;R++){const P=R%3*2/3-1,j=R>2?0:-1,y=[P,j,0,P+2/3,j,0,P+2/3,j+1,0,P,j,0,P+2/3,j+1,0,P,j+1,0];w.set(y,g*_*R),M.set(h,p*_*R);const b=[R,R,R,R,R,R];L.set(b,u*_*R)}const I=new sn;I.setAttribute("position",new pn(w,g)),I.setAttribute("uv",new pn(M,p)),I.setAttribute("faceIndex",new pn(L,u)),t.push(I),s>_i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ha(i,t,e){const n=new jn(i,t,e);return n.texture.mapping=ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Uh(i,t,e){const n=new Float32Array(Yn),s=new O(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pr(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ka(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pr(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Va(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Pr(){return`

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
	`}function Ih(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===pr||l===mr,d=l===Si||l===Ei;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new Ga(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&s(f)){e===null&&(e=new Ga(i));const h=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Nh(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fh(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let p=0,u=g.length;p<u;p++)t.remove(g[p])}h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(t.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)t.update(h[_],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,u=g.length;p<u;p++)t.update(g[p],i.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const w=m.array;g=m.version;for(let M=0,L=w.length;M<L;M+=3){const I=w[M+0],R=w[M+1],P=w[M+2];h.push(I,R,R,P,P,I)}}else if(_!==void 0){const w=_.array;g=_.version;for(let M=0,L=w.length/3-1;M<L;M+=3){const I=M+0,R=M+1,P=M+2;h.push(I,R,R,P,P,I)}}else return;const p=new(Ro(h)?Oo:Fo)(h,1);p.version=g;const u=r.get(f);u&&t.remove(u),r.set(f,p)}function d(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function Oh(i,t,e,n){const s=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,_){i.drawElements(r,_,a,m*l),e.update(_,r,1)}function f(m,_,g){if(g===0)return;let p,u;if(s)p=i,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,_,a,m*l,g),e.update(_,r,g)}function h(m,_,g){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<g;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,g);let u=0;for(let w=0;w<g;w++)u+=_[w];e.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function Bh(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zh(i,t){return i[0]-t[0]}function Gh(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Hh(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,o=new he,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=m!==void 0?m.length:0;let g=r.get(d);if(g===void 0||g.count!==_){let D=function(){rt.dispose(),r.delete(d),d.removeEventListener("dispose",D)};g!==void 0&&g.texture.dispose();const w=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,L=d.morphAttributes.color!==void 0,I=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let j=0;w===!0&&(j=1),M===!0&&(j=2),L===!0&&(j=3);let y=d.attributes.position.count*j,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const Z=new Float32Array(y*b*4*_),rt=new Po(Z,y,b,_);rt.type=Pn,rt.needsUpdate=!0;const _t=j*4;for(let G=0;G<_;G++){const Y=I[G],lt=R[G],at=P[G],ot=y*b*4*G;for(let F=0;F<Y.count;F++){const ct=F*_t;w===!0&&(o.fromBufferAttribute(Y,F),Z[ot+ct+0]=o.x,Z[ot+ct+1]=o.y,Z[ot+ct+2]=o.z,Z[ot+ct+3]=0),M===!0&&(o.fromBufferAttribute(lt,F),Z[ot+ct+4]=o.x,Z[ot+ct+5]=o.y,Z[ot+ct+6]=o.z,Z[ot+ct+7]=0),L===!0&&(o.fromBufferAttribute(at,F),Z[ot+ct+8]=o.x,Z[ot+ct+9]=o.y,Z[ot+ct+10]=o.z,Z[ot+ct+11]=at.itemSize===4?o.w:1)}}g={count:_,texture:rt,size:new ne(y,b)},r.set(d,g),d.addEventListener("dispose",D)}let p=0;for(let w=0;w<h.length;w++)p+=h[w];const u=d.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",u),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const m=h===void 0?0:h.length;let _=n[d.id];if(_===void 0||_.length!==m){_=[];for(let M=0;M<m;M++)_[M]=[M,0];n[d.id]=_}for(let M=0;M<m;M++){const L=_[M];L[0]=M,L[1]=h[M]}_.sort(Gh);for(let M=0;M<8;M++)M<m&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(zh);const g=d.morphAttributes.position,p=d.morphAttributes.normal;let u=0;for(let M=0;M<8;M++){const L=a[M],I=L[0],R=L[1];I!==Number.MAX_SAFE_INTEGER&&R?(g&&d.getAttribute("morphTarget"+M)!==g[I]&&d.setAttribute("morphTarget"+M,g[I]),p&&d.getAttribute("morphNormal"+M)!==p[I]&&d.setAttribute("morphNormal"+M,p[I]),s[M]=R,u+=R):(g&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),p&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),s[M]=0)}const w=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(i,"morphTargetBaseInfluence",w),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function kh(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,f=t.get(l,d);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Vo extends Je{constructor(t,e,n,s,r,o,a,l,c,d){if(d=d!==void 0?d:$n,d!==$n&&d!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===$n&&(n=Ln),n===void 0&&d===yi&&(n=qn),super(null,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Wo=new Je,Xo=new Vo(1,1);Xo.compareFunction=Ao;const Yo=new Po,qo=new wc,$o=new Go,Wa=[],Xa=[],Ya=new Float32Array(16),qa=new Float32Array(9),$a=new Float32Array(4);function Ai(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Wa[s];if(r===void 0&&(r=new Float32Array(s),Wa[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function As(i,t){let e=Xa[t];e===void 0&&(e=new Int32Array(t),Xa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function Xh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function Yh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function qh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;$a.set(n),i.uniformMatrix2fv(this.addr,!1,$a),Te(e,n)}}function $h(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;qa.set(n),i.uniformMatrix3fv(this.addr,!1,qa),Te(e,n)}}function Zh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;Ya.set(n),i.uniformMatrix4fv(this.addr,!1,Ya),Te(e,n)}}function jh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Kh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function Jh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function Qh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function tf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function rf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Xo:Wo;e.setTexture2D(t||r,s)}function af(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qo,s)}function of(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$o,s)}function lf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yo,s)}function cf(i){switch(i){case 5126:return Vh;case 35664:return Wh;case 35665:return Xh;case 35666:return Yh;case 35674:return qh;case 35675:return $h;case 35676:return Zh;case 5124:case 35670:return jh;case 35667:case 35671:return Kh;case 35668:case 35672:return Jh;case 35669:case 35673:return Qh;case 5125:return tf;case 36294:return ef;case 36295:return nf;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return rf;case 35679:case 36299:case 36307:return af;case 35680:case 36300:case 36308:case 36293:return of;case 36289:case 36303:case 36311:case 36292:return lf}}function uf(i,t){i.uniform1fv(this.addr,t)}function df(i,t){const e=Ai(t,this.size,2);i.uniform2fv(this.addr,e)}function hf(i,t){const e=Ai(t,this.size,3);i.uniform3fv(this.addr,e)}function ff(i,t){const e=Ai(t,this.size,4);i.uniform4fv(this.addr,e)}function pf(i,t){const e=Ai(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mf(i,t){const e=Ai(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _f(i,t){const e=Ai(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gf(i,t){i.uniform1iv(this.addr,t)}function vf(i,t){i.uniform2iv(this.addr,t)}function xf(i,t){i.uniform3iv(this.addr,t)}function Mf(i,t){i.uniform4iv(this.addr,t)}function Sf(i,t){i.uniform1uiv(this.addr,t)}function Ef(i,t){i.uniform2uiv(this.addr,t)}function yf(i,t){i.uniform3uiv(this.addr,t)}function bf(i,t){i.uniform4uiv(this.addr,t)}function Tf(i,t,e){const n=this.cache,s=t.length,r=As(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wo,r[o])}function wf(i,t,e){const n=this.cache,s=t.length,r=As(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qo,r[o])}function Af(i,t,e){const n=this.cache,s=t.length,r=As(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$o,r[o])}function Rf(i,t,e){const n=this.cache,s=t.length,r=As(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yo,r[o])}function Cf(i){switch(i){case 5126:return uf;case 35664:return df;case 35665:return hf;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return _f;case 5124:case 35670:return gf;case 35667:case 35671:return vf;case 35668:case 35672:return xf;case 35669:case 35673:return Mf;case 5125:return Sf;case 36294:return Ef;case 36295:return yf;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Tf;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return Rf}}class Lf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cf(e.type)}}class Pf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cf(e.type)}}class Df{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ar=/(\w+)(\])?(\[|\.)?/g;function Za(i,t){i.seq.push(t),i.map[t.id]=t}function Uf(i,t,e){const n=i.name,s=n.length;for(ar.lastIndex=0;;){const r=ar.exec(n),o=ar.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Za(e,c===void 0?new Lf(a,i,t):new Pf(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Df(a),Za(e,f)),e=f}}}class ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Uf(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ja(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const If=37297;let Nf=0;function Ff(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Of(i){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i);let n;switch(t===e?n="":t===xs&&e===vs?n="LinearDisplayP3ToLinearSRGB":t===vs&&e===xs&&(n="LinearSRGBToLinearDisplayP3"),i){case yn:case bs:return[n,"LinearTransferOETF"];case Re:case Rr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ka(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ff(i.getShaderSource(t),o)}else return s}function Bf(i,t){const e=Of(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function zf(i,t){let e;switch(t){case Fl:e="Linear";break;case Ol:e="Reinhard";break;case Bl:e="OptimizedCineon";break;case zl:e="ACESFilmic";break;case Hl:e="AgX";break;case Gl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Gf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gi).join(`
`)}function Hf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(gi).join(`
`)}function kf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gi(i){return i!==""}function Ja(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qa(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mr(i){return i.replace(Wf,Yf)}const Xf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yf(i,t){let e=Zt[t];if(e===void 0){const n=Xf.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mr(e)}const qf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function to(i){return i.replace(qf,$f)}function $f(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eo(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_o?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===go?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function jf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Si:case Ei:t="ENVMAP_TYPE_CUBE";break;case ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ei:t="ENVMAP_MODE_REFRACTION";break}return t}function Jf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tr:t="ENVMAP_BLENDING_MULTIPLY";break;case Il:t="ENVMAP_BLENDING_MIX";break;case Nl:t="ENVMAP_BLENDING_ADD";break}return t}function Qf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function tp(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Zf(e),c=jf(e),d=Kf(e),f=Jf(e),h=Qf(e),m=e.isWebGL2?"":Gf(e),_=Hf(e),g=kf(r),p=s.createProgram();let u,w,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gi).join(`
`),u.length>0&&(u+=`
`),w=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gi).join(`
`),w.length>0&&(w+=`
`)):(u=[eo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),w=[m,eo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Zt.tonemapping_pars_fragment:"",e.toneMapping!==In?zf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Bf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gi).join(`
`)),o=Mr(o),o=Ja(o,e),o=Qa(o,e),a=Mr(a),a=Ja(a,e),a=Qa(a,e),o=to(o),a=to(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const L=M+u+o,I=M+w+a,R=ja(s,s.VERTEX_SHADER,L),P=ja(s,s.FRAGMENT_SHADER,I);s.attachShader(p,R),s.attachShader(p,P),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function j(rt){if(i.debug.checkShaderErrors){const _t=s.getProgramInfoLog(p).trim(),D=s.getShaderInfoLog(R).trim(),G=s.getShaderInfoLog(P).trim();let Y=!0,lt=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,R,P);else{const at=Ka(s,R,"vertex"),ot=Ka(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+_t+`
`+at+`
`+ot)}else _t!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_t):(D===""||G==="")&&(lt=!1);lt&&(rt.diagnostics={runnable:Y,programLog:_t,vertexShader:{log:D,prefix:u},fragmentShader:{log:G,prefix:w}})}s.deleteShader(R),s.deleteShader(P),y=new ms(s,p),b=Vf(s,p)}let y;this.getUniforms=function(){return y===void 0&&j(this),y};let b;this.getAttributes=function(){return b===void 0&&j(this),b};let Z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=s.getProgramParameter(p,If)),Z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=P,this}let ep=0;class np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ip(t),e.set(t,n)),n}}class ip{constructor(t){this.id=ep++,this.code=t,this.usedTimes=0}}function sp(i,t,e,n,s,r,o){const a=new Uo,l=new np,c=[],d=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function p(y,b,Z,rt,_t){const D=rt.fog,G=_t.geometry,Y=y.isMeshStandardMaterial?rt.environment:null,lt=(y.isMeshStandardMaterial?e:t).get(y.envMap||Y),at=lt&&lt.mapping===ys?lt.image.height:null,ot=_[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const F=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ct=F!==void 0?F.length:0;let it=0;G.morphAttributes.position!==void 0&&(it=1),G.morphAttributes.normal!==void 0&&(it=2),G.morphAttributes.color!==void 0&&(it=3);let J,ht,St,Ct;if(ot){const Ee=fn[ot];J=Ee.vertexShader,ht=Ee.fragmentShader}else J=y.vertexShader,ht=y.fragmentShader,l.update(y),St=l.getVertexShaderID(y),Ct=l.getFragmentShaderID(y);const At=i.getRenderTarget(),kt=_t.isInstancedMesh===!0,Ot=_t.isBatchedMesh===!0,Ft=!!y.map,Wt=!!y.matcap,k=!!lt,Se=!!y.aoMap,Ut=!!y.lightMap,Vt=!!y.bumpMap,Rt=!!y.normalMap,ee=!!y.displacementMap,yt=!!y.emissiveMap,E=!!y.metalnessMap,x=!!y.roughnessMap,$=y.anisotropy>0,vt=y.clearcoat>0,gt=y.iridescence>0,xt=y.sheen>0,A=y.transmission>0,v=$&&!!y.anisotropyMap,U=vt&&!!y.clearcoatMap,N=vt&&!!y.clearcoatNormalMap,mt=vt&&!!y.clearcoatRoughnessMap,V=gt&&!!y.iridescenceMap,Lt=gt&&!!y.iridescenceThicknessMap,et=xt&&!!y.sheenColorMap,pt=xt&&!!y.sheenRoughnessMap,Et=!!y.specularMap,W=!!y.specularColorMap,Q=!!y.specularIntensityMap,st=A&&!!y.transmissionMap,ut=A&&!!y.thicknessMap,nt=!!y.gradientMap,H=!!y.alphaMap,T=y.alphaTest>0,ft=!!y.alphaHash,Mt=!!y.extensions,It=!!G.attributes.uv1,Pt=!!G.attributes.uv2,ie=!!G.attributes.uv3;let se=In;return y.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(se=i.toneMapping),{isWebGL2:d,shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:J,fragmentShader:ht,defines:y.defines,customVertexShaderID:St,customFragmentShaderID:Ct,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ot,instancing:kt,instancingColor:kt&&_t.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:yn,map:Ft,matcap:Wt,envMap:k,envMapMode:k&&lt.mapping,envMapCubeUVHeight:at,aoMap:Se,lightMap:Ut,bumpMap:Vt,normalMap:Rt,displacementMap:h&&ee,emissiveMap:yt,normalMapObjectSpace:Rt&&y.normalMapType===Ql,normalMapTangentSpace:Rt&&y.normalMapType===Ar,metalnessMap:E,roughnessMap:x,anisotropy:$,anisotropyMap:v,clearcoat:vt,clearcoatMap:U,clearcoatNormalMap:N,clearcoatRoughnessMap:mt,iridescence:gt,iridescenceMap:V,iridescenceThicknessMap:Lt,sheen:xt,sheenColorMap:et,sheenRoughnessMap:pt,specularMap:Et,specularColorMap:W,specularIntensityMap:Q,transmission:A,transmissionMap:st,thicknessMap:ut,gradientMap:nt,opaque:y.transparent===!1&&y.blending===xi,alphaMap:H,alphaTest:T,alphaHash:ft,combine:y.combine,mapUv:Ft&&g(y.map.channel),aoMapUv:Se&&g(y.aoMap.channel),lightMapUv:Ut&&g(y.lightMap.channel),bumpMapUv:Vt&&g(y.bumpMap.channel),normalMapUv:Rt&&g(y.normalMap.channel),displacementMapUv:ee&&g(y.displacementMap.channel),emissiveMapUv:yt&&g(y.emissiveMap.channel),metalnessMapUv:E&&g(y.metalnessMap.channel),roughnessMapUv:x&&g(y.roughnessMap.channel),anisotropyMapUv:v&&g(y.anisotropyMap.channel),clearcoatMapUv:U&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:N&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:et&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&g(y.sheenRoughnessMap.channel),specularMapUv:Et&&g(y.specularMap.channel),specularColorMapUv:W&&g(y.specularColorMap.channel),specularIntensityMapUv:Q&&g(y.specularIntensityMap.channel),transmissionMapUv:st&&g(y.transmissionMap.channel),thicknessMapUv:ut&&g(y.thicknessMap.channel),alphaMapUv:H&&g(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Rt||$),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:Pt,vertexUv3s:ie,pointsUvs:_t.isPoints===!0&&!!G.attributes.uv&&(Ft||H),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:_t.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:it,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ft&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===ue,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Be,flipSided:y.side===Ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Mt&&y.extensions.derivatives===!0,extensionFragDepth:Mt&&y.extensions.fragDepth===!0,extensionDrawBuffers:Mt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Mt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Mt&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const Z in y.defines)b.push(Z),b.push(y.defines[Z]);return y.isRawShaderMaterial===!1&&(w(b,y),M(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function w(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function L(y){const b=_[y.type];let Z;if(b){const rt=fn[b];Z=zc.clone(rt.uniforms)}else Z=y.uniforms;return Z}function I(y,b){let Z;for(let rt=0,_t=c.length;rt<_t;rt++){const D=c[rt];if(D.cacheKey===b){Z=D,++Z.usedTimes;break}}return Z===void 0&&(Z=new tp(i,b,y,r),c.push(Z)),Z}function R(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function P(y){l.remove(y)}function j(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:L,acquireProgram:I,releaseProgram:R,releaseShaderCache:P,programs:c,dispose:j}}function rp(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function ap(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function no(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function io(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,h,m,_,g,p){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},i[t]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=g,u.group=p),t++,u}function a(f,h,m,_,g,p){const u=o(f,h,m,_,g,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(f,h,m,_,g,p){const u=o(f,h,m,_,g,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(f,h){e.length>1&&e.sort(f||ap),n.length>1&&n.sort(h||no),s.length>1&&s.sort(h||no)}function d(){for(let f=t,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function op(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new io,i.set(n,[o])):s>=r.length?(o=new io,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function lp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new jt};break;case"SpotLight":e={position:new O,direction:new O,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function cp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let up=0;function dp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hp(i,t){const e=new lp,n=cp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new O);const r=new O,o=new _e,a=new _e;function l(d,f){let h=0,m=0,_=0;for(let rt=0;rt<9;rt++)s.probe[rt].set(0,0,0);let g=0,p=0,u=0,w=0,M=0,L=0,I=0,R=0,P=0,j=0,y=0;d.sort(dp);const b=f===!0?Math.PI:1;for(let rt=0,_t=d.length;rt<_t;rt++){const D=d[rt],G=D.color,Y=D.intensity,lt=D.distance,at=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=G.r*Y*b,m+=G.g*Y*b,_+=G.b*Y*b;else if(D.isLightProbe){for(let ot=0;ot<9;ot++)s.probe[ot].addScaledVector(D.sh.coefficients[ot],Y);y++}else if(D.isDirectionalLight){const ot=e.get(D);if(ot.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const F=D.shadow,ct=n.get(D);ct.shadowBias=F.bias,ct.shadowNormalBias=F.normalBias,ct.shadowRadius=F.radius,ct.shadowMapSize=F.mapSize,s.directionalShadow[g]=ct,s.directionalShadowMap[g]=at,s.directionalShadowMatrix[g]=D.shadow.matrix,L++}s.directional[g]=ot,g++}else if(D.isSpotLight){const ot=e.get(D);ot.position.setFromMatrixPosition(D.matrixWorld),ot.color.copy(G).multiplyScalar(Y*b),ot.distance=lt,ot.coneCos=Math.cos(D.angle),ot.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ot.decay=D.decay,s.spot[u]=ot;const F=D.shadow;if(D.map&&(s.spotLightMap[P]=D.map,P++,F.updateMatrices(D),D.castShadow&&j++),s.spotLightMatrix[u]=F.matrix,D.castShadow){const ct=n.get(D);ct.shadowBias=F.bias,ct.shadowNormalBias=F.normalBias,ct.shadowRadius=F.radius,ct.shadowMapSize=F.mapSize,s.spotShadow[u]=ct,s.spotShadowMap[u]=at,R++}u++}else if(D.isRectAreaLight){const ot=e.get(D);ot.color.copy(G).multiplyScalar(Y),ot.halfWidth.set(D.width*.5,0,0),ot.halfHeight.set(0,D.height*.5,0),s.rectArea[w]=ot,w++}else if(D.isPointLight){const ot=e.get(D);if(ot.color.copy(D.color).multiplyScalar(D.intensity*b),ot.distance=D.distance,ot.decay=D.decay,D.castShadow){const F=D.shadow,ct=n.get(D);ct.shadowBias=F.bias,ct.shadowNormalBias=F.normalBias,ct.shadowRadius=F.radius,ct.shadowMapSize=F.mapSize,ct.shadowCameraNear=F.camera.near,ct.shadowCameraFar=F.camera.far,s.pointShadow[p]=ct,s.pointShadowMap[p]=at,s.pointShadowMatrix[p]=D.shadow.matrix,I++}s.point[p]=ot,p++}else if(D.isHemisphereLight){const ot=e.get(D);ot.skyColor.copy(D.color).multiplyScalar(Y*b),ot.groundColor.copy(D.groundColor).multiplyScalar(Y*b),s.hemi[M]=ot,M++}}w>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=bt.LTC_FLOAT_1,s.rectAreaLTC2=bt.LTC_FLOAT_2):(s.rectAreaLTC1=bt.LTC_HALF_1,s.rectAreaLTC2=bt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=bt.LTC_FLOAT_1,s.rectAreaLTC2=bt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=bt.LTC_HALF_1,s.rectAreaLTC2=bt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=m,s.ambient[2]=_;const Z=s.hash;(Z.directionalLength!==g||Z.pointLength!==p||Z.spotLength!==u||Z.rectAreaLength!==w||Z.hemiLength!==M||Z.numDirectionalShadows!==L||Z.numPointShadows!==I||Z.numSpotShadows!==R||Z.numSpotMaps!==P||Z.numLightProbes!==y)&&(s.directional.length=g,s.spot.length=u,s.rectArea.length=w,s.point.length=p,s.hemi.length=M,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=R+P-j,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=j,s.numLightProbes=y,Z.directionalLength=g,Z.pointLength=p,Z.spotLength=u,Z.rectAreaLength=w,Z.hemiLength=M,Z.numDirectionalShadows=L,Z.numPointShadows=I,Z.numSpotShadows=R,Z.numSpotMaps=P,Z.numLightProbes=y,s.version=up++)}function c(d,f){let h=0,m=0,_=0,g=0,p=0;const u=f.matrixWorldInverse;for(let w=0,M=d.length;w<M;w++){const L=d[w];if(L.isDirectionalLight){const I=s.directional[h];I.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),h++}else if(L.isSpotLight){const I=s.spot[_];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(u),I.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),_++}else if(L.isRectAreaLight){const I=s.rectArea[g];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(u),a.identity(),o.copy(L.matrixWorld),o.premultiply(u),a.extractRotation(o),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),g++}else if(L.isPointLight){const I=s.point[m];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(u),m++}else if(L.isHemisphereLight){const I=s.hemi[p];I.direction.setFromMatrixPosition(L.matrixWorld),I.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:s}}function so(i,t){const e=new hp(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){e.setup(n,f)}function c(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function fp(i,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new so(i,t),e.set(r,[l])):o>=a.length?(l=new so(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class pp extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mp extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gp=`uniform sampler2D shadow_pass;
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
}`;function vp(i,t,e){let n=new Lr;const s=new ne,r=new ne,o=new he,a=new pp({depthPacking:Jl}),l=new mp,c={},d=e.maxTextureSize,f={[Fn]:Ze,[Ze]:Fn,[Be]:Be},h=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:_p,fragmentShader:gp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $t(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_o;let u=this.type;this.render=function(R,P,j){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const y=i.getRenderTarget(),b=i.getActiveCubeFace(),Z=i.getActiveMipmapLevel(),rt=i.state;rt.setBlending(Un),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const _t=u!==Mn&&this.type===Mn,D=u===Mn&&this.type!==Mn;for(let G=0,Y=R.length;G<Y;G++){const lt=R[G],at=lt.shadow;if(at===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(at.autoUpdate===!1&&at.needsUpdate===!1)continue;s.copy(at.mapSize);const ot=at.getFrameExtents();if(s.multiply(ot),r.copy(at.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ot.x),s.x=r.x*ot.x,at.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ot.y),s.y=r.y*ot.y,at.mapSize.y=r.y)),at.map===null||_t===!0||D===!0){const ct=this.type!==Mn?{minFilter:Ve,magFilter:Ve}:{};at.map!==null&&at.map.dispose(),at.map=new jn(s.x,s.y,ct),at.map.texture.name=lt.name+".shadowMap",at.camera.updateProjectionMatrix()}i.setRenderTarget(at.map),i.clear();const F=at.getViewportCount();for(let ct=0;ct<F;ct++){const it=at.getViewport(ct);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),rt.viewport(o),at.updateMatrices(lt,ct),n=at.getFrustum(),L(P,j,at.camera,lt,this.type)}at.isPointLightShadow!==!0&&this.type===Mn&&w(at,j),at.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(y,b,Z)};function w(R,P){const j=t.update(g);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new jn(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,j,h,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,j,m,g,null)}function M(R,P,j,y){let b=null;const Z=j.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(Z!==void 0)b=Z;else if(b=j.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const rt=b.uuid,_t=P.uuid;let D=c[rt];D===void 0&&(D={},c[rt]=D);let G=D[_t];G===void 0&&(G=b.clone(),D[_t]=G,P.addEventListener("dispose",I)),b=G}if(b.visible=P.visible,b.wireframe=P.wireframe,y===Mn?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:f[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,j.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const rt=i.properties.get(b);rt.light=j}return b}function L(R,P,j,y,b){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Mn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld);const _t=t.update(R),D=R.material;if(Array.isArray(D)){const G=_t.groups;for(let Y=0,lt=G.length;Y<lt;Y++){const at=G[Y],ot=D[at.materialIndex];if(ot&&ot.visible){const F=M(R,ot,y,b);R.onBeforeShadow(i,R,P,j,_t,F,at),i.renderBufferDirect(j,null,_t,F,R,at),R.onAfterShadow(i,R,P,j,_t,F,at)}}}else if(D.visible){const G=M(R,D,y,b);R.onBeforeShadow(i,R,P,j,_t,G,null),i.renderBufferDirect(j,null,_t,G,R,null),R.onAfterShadow(i,R,P,j,_t,G,null)}}const rt=R.children;for(let _t=0,D=rt.length;_t<D;_t++)L(rt[_t],P,j,y,b)}function I(R){R.target.removeEventListener("dispose",I);for(const j in c){const y=c[j],b=R.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function xp(i,t,e){const n=e.isWebGL2;function s(){let T=!1;const ft=new he;let Mt=null;const It=new he(0,0,0,0);return{setMask:function(Pt){Mt!==Pt&&!T&&(i.colorMask(Pt,Pt,Pt,Pt),Mt=Pt)},setLocked:function(Pt){T=Pt},setClear:function(Pt,ie,se,ge,Ee){Ee===!0&&(Pt*=ge,ie*=ge,se*=ge),ft.set(Pt,ie,se,ge),It.equals(ft)===!1&&(i.clearColor(Pt,ie,se,ge),It.copy(ft))},reset:function(){T=!1,Mt=null,It.set(-1,0,0,0)}}}function r(){let T=!1,ft=null,Mt=null,It=null;return{setTest:function(Pt){Pt?Ot(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(Pt){ft!==Pt&&!T&&(i.depthMask(Pt),ft=Pt)},setFunc:function(Pt){if(Mt!==Pt){switch(Pt){case Al:i.depthFunc(i.NEVER);break;case Rl:i.depthFunc(i.ALWAYS);break;case Cl:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case Ll:i.depthFunc(i.EQUAL);break;case Pl:i.depthFunc(i.GEQUAL);break;case Dl:i.depthFunc(i.GREATER);break;case Ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=Pt}},setLocked:function(Pt){T=Pt},setClear:function(Pt){It!==Pt&&(i.clearDepth(Pt),It=Pt)},reset:function(){T=!1,ft=null,Mt=null,It=null}}}function o(){let T=!1,ft=null,Mt=null,It=null,Pt=null,ie=null,se=null,ge=null,Ee=null;return{setTest:function(re){T||(re?Ot(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(re){ft!==re&&!T&&(i.stencilMask(re),ft=re)},setFunc:function(re,Ae,Xe){(Mt!==re||It!==Ae||Pt!==Xe)&&(i.stencilFunc(re,Ae,Xe),Mt=re,It=Ae,Pt=Xe)},setOp:function(re,Ae,Xe){(ie!==re||se!==Ae||ge!==Xe)&&(i.stencilOp(re,Ae,Xe),ie=re,se=Ae,ge=Xe)},setLocked:function(re){T=re},setClear:function(re){Ee!==re&&(i.clearStencil(re),Ee=re)},reset:function(){T=!1,ft=null,Mt=null,It=null,Pt=null,ie=null,se=null,ge=null,Ee=null}}}const a=new s,l=new r,c=new o,d=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,g=[],p=null,u=!1,w=null,M=null,L=null,I=null,R=null,P=null,j=null,y=new jt(0,0,0),b=0,Z=!1,rt=null,_t=null,D=null,G=null,Y=null;const lt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,ot=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(F)[1]),at=ot>=1):F.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),at=ot>=2);let ct=null,it={};const J=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),St=new he().fromArray(J),Ct=new he().fromArray(ht);function At(T,ft,Mt,It){const Pt=new Uint8Array(4),ie=i.createTexture();i.bindTexture(T,ie),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<Mt;se++)n&&(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)?i.texImage3D(ft,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(ft+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return ie}const kt={};kt[i.TEXTURE_2D]=At(i.TEXTURE_2D,i.TEXTURE_2D,1),kt[i.TEXTURE_CUBE_MAP]=At(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(kt[i.TEXTURE_2D_ARRAY]=At(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),kt[i.TEXTURE_3D]=At(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ot(i.DEPTH_TEST),l.setFunc(_s),yt(!1),E(zr),Ot(i.CULL_FACE),Rt(Un);function Ot(T){h[T]!==!0&&(i.enable(T),h[T]=!0)}function Ft(T){h[T]!==!1&&(i.disable(T),h[T]=!1)}function Wt(T,ft){return m[T]!==ft?(i.bindFramebuffer(T,ft),m[T]=ft,n&&(T===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ft),T===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ft)),!0):!1}function k(T,ft){let Mt=g,It=!1;if(T)if(Mt=_.get(ft),Mt===void 0&&(Mt=[],_.set(ft,Mt)),T.isWebGLMultipleRenderTargets){const Pt=T.texture;if(Mt.length!==Pt.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,se=Pt.length;ie<se;ie++)Mt[ie]=i.COLOR_ATTACHMENT0+ie;Mt.length=Pt.length,It=!0}}else Mt[0]!==i.COLOR_ATTACHMENT0&&(Mt[0]=i.COLOR_ATTACHMENT0,It=!0);else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,It=!0);It&&(e.isWebGL2?i.drawBuffers(Mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Mt))}function Se(T){return p!==T?(i.useProgram(T),p=T,!0):!1}const Ut={[Xn]:i.FUNC_ADD,[hl]:i.FUNC_SUBTRACT,[fl]:i.FUNC_REVERSE_SUBTRACT};if(n)Ut[Vr]=i.MIN,Ut[Wr]=i.MAX;else{const T=t.get("EXT_blend_minmax");T!==null&&(Ut[Vr]=T.MIN_EXT,Ut[Wr]=T.MAX_EXT)}const Vt={[pl]:i.ZERO,[ml]:i.ONE,[_l]:i.SRC_COLOR,[hr]:i.SRC_ALPHA,[El]:i.SRC_ALPHA_SATURATE,[Ml]:i.DST_COLOR,[vl]:i.DST_ALPHA,[gl]:i.ONE_MINUS_SRC_COLOR,[fr]:i.ONE_MINUS_SRC_ALPHA,[Sl]:i.ONE_MINUS_DST_COLOR,[xl]:i.ONE_MINUS_DST_ALPHA,[yl]:i.CONSTANT_COLOR,[bl]:i.ONE_MINUS_CONSTANT_COLOR,[Tl]:i.CONSTANT_ALPHA,[wl]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(T,ft,Mt,It,Pt,ie,se,ge,Ee,re){if(T===Un){u===!0&&(Ft(i.BLEND),u=!1);return}if(u===!1&&(Ot(i.BLEND),u=!0),T!==dl){if(T!==w||re!==Z){if((M!==Xn||R!==Xn)&&(i.blendEquation(i.FUNC_ADD),M=Xn,R=Xn),re)switch(T){case xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gr:i.blendFunc(i.ONE,i.ONE);break;case Hr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}L=null,I=null,P=null,j=null,y.set(0,0,0),b=0,w=T,Z=re}return}Pt=Pt||ft,ie=ie||Mt,se=se||It,(ft!==M||Pt!==R)&&(i.blendEquationSeparate(Ut[ft],Ut[Pt]),M=ft,R=Pt),(Mt!==L||It!==I||ie!==P||se!==j)&&(i.blendFuncSeparate(Vt[Mt],Vt[It],Vt[ie],Vt[se]),L=Mt,I=It,P=ie,j=se),(ge.equals(y)===!1||Ee!==b)&&(i.blendColor(ge.r,ge.g,ge.b,Ee),y.copy(ge),b=Ee),w=T,Z=!1}function ee(T,ft){T.side===Be?Ft(i.CULL_FACE):Ot(i.CULL_FACE);let Mt=T.side===Ze;ft&&(Mt=!Mt),yt(Mt),T.blending===xi&&T.transparent===!1?Rt(Un):Rt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),l.setFunc(T.depthFunc),l.setTest(T.depthTest),l.setMask(T.depthWrite),a.setMask(T.colorWrite);const It=T.stencilWrite;c.setTest(It),It&&(c.setMask(T.stencilWriteMask),c.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),c.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),$(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Ot(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(T){rt!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),rt=T)}function E(T){T!==cl?(Ot(i.CULL_FACE),T!==_t&&(T===zr?i.cullFace(i.BACK):T===ul?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),_t=T}function x(T){T!==D&&(at&&i.lineWidth(T),D=T)}function $(T,ft,Mt){T?(Ot(i.POLYGON_OFFSET_FILL),(G!==ft||Y!==Mt)&&(i.polygonOffset(ft,Mt),G=ft,Y=Mt)):Ft(i.POLYGON_OFFSET_FILL)}function vt(T){T?Ot(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function gt(T){T===void 0&&(T=i.TEXTURE0+lt-1),ct!==T&&(i.activeTexture(T),ct=T)}function xt(T,ft,Mt){Mt===void 0&&(ct===null?Mt=i.TEXTURE0+lt-1:Mt=ct);let It=it[Mt];It===void 0&&(It={type:void 0,texture:void 0},it[Mt]=It),(It.type!==T||It.texture!==ft)&&(ct!==Mt&&(i.activeTexture(Mt),ct=Mt),i.bindTexture(T,ft||kt[T]),It.type=T,It.texture=ft)}function A(){const T=it[ct];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function v(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function U(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function N(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function V(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function W(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Q(T){St.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),St.copy(T))}function st(T){Ct.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),Ct.copy(T))}function ut(T,ft){let Mt=f.get(ft);Mt===void 0&&(Mt=new WeakMap,f.set(ft,Mt));let It=Mt.get(T);It===void 0&&(It=i.getUniformBlockIndex(ft,T.name),Mt.set(T,It))}function nt(T,ft){const It=f.get(ft).get(T);d.get(ft)!==It&&(i.uniformBlockBinding(ft,It,T.__bindingPointIndex),d.set(ft,It))}function H(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,it={},m={},_=new WeakMap,g=[],p=null,u=!1,w=null,M=null,L=null,I=null,R=null,P=null,j=null,y=new jt(0,0,0),b=0,Z=!1,rt=null,_t=null,D=null,G=null,Y=null,St.set(0,0,i.canvas.width,i.canvas.height),Ct.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ot,disable:Ft,bindFramebuffer:Wt,drawBuffers:k,useProgram:Se,setBlending:Rt,setMaterial:ee,setFlipSided:yt,setCullFace:E,setLineWidth:x,setPolygonOffset:$,setScissorTest:vt,activeTexture:gt,bindTexture:xt,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:Et,texImage3D:W,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:et,texStorage3D:pt,texSubImage2D:N,texSubImage3D:mt,compressedTexSubImage2D:V,compressedTexSubImage3D:Lt,scissor:Q,viewport:st,reset:H}}function Mp(i,t,e,n,s,r,o){const a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,x){return m?new OffscreenCanvas(E,x):Es("canvas")}function g(E,x,$,vt){let gt=1;if((E.width>vt||E.height>vt)&&(gt=vt/Math.max(E.width,E.height)),gt<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const xt=x?Ss:Math.floor,A=xt(gt*E.width),v=xt(gt*E.height);f===void 0&&(f=_(A,v));const U=$?_(A,v):f;return U.width=A,U.height=v,U.getContext("2d").drawImage(E,0,0,A,v),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+A+"x"+v+")."),U}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return xr(E.width)&&xr(E.height)}function u(E){return a?!1:E.wrapS!==dn||E.wrapT!==dn||E.minFilter!==Ve&&E.minFilter!==en}function w(E,x){return E.generateMipmaps&&x&&E.minFilter!==Ve&&E.minFilter!==en}function M(E){i.generateMipmap(E)}function L(E,x,$,vt,gt=!1){if(a===!1)return x;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let xt=x;if(x===i.RED&&($===i.FLOAT&&(xt=i.R32F),$===i.HALF_FLOAT&&(xt=i.R16F),$===i.UNSIGNED_BYTE&&(xt=i.R8)),x===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(xt=i.R8UI),$===i.UNSIGNED_SHORT&&(xt=i.R16UI),$===i.UNSIGNED_INT&&(xt=i.R32UI),$===i.BYTE&&(xt=i.R8I),$===i.SHORT&&(xt=i.R16I),$===i.INT&&(xt=i.R32I)),x===i.RG&&($===i.FLOAT&&(xt=i.RG32F),$===i.HALF_FLOAT&&(xt=i.RG16F),$===i.UNSIGNED_BYTE&&(xt=i.RG8)),x===i.RGBA){const A=gt?gs:oe.getTransfer(vt);$===i.FLOAT&&(xt=i.RGBA32F),$===i.HALF_FLOAT&&(xt=i.RGBA16F),$===i.UNSIGNED_BYTE&&(xt=A===ue?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(xt=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(xt=i.RGB5_A1)}return(xt===i.R16F||xt===i.R32F||xt===i.RG16F||xt===i.RG32F||xt===i.RGBA16F||xt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function I(E,x,$){return w(E,$)===!0||E.isFramebufferTexture&&E.minFilter!==Ve&&E.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){return E===Ve||E===Xr||E===Us?i.NEAREST:i.LINEAR}function P(E){const x=E.target;x.removeEventListener("dispose",P),y(x),x.isVideoTexture&&d.delete(x)}function j(E){const x=E.target;x.removeEventListener("dispose",j),Z(x)}function y(E){const x=n.get(E);if(x.__webglInit===void 0)return;const $=E.source,vt=h.get($);if(vt){const gt=vt[x.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&b(E),Object.keys(vt).length===0&&h.delete($)}n.remove(E)}function b(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const $=E.source,vt=h.get($);delete vt[x.__cacheKey],o.memory.textures--}function Z(E){const x=E.texture,$=n.get(E),vt=n.get(x);if(vt.__webglTexture!==void 0&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray($.__webglFramebuffer[gt]))for(let xt=0;xt<$.__webglFramebuffer[gt].length;xt++)i.deleteFramebuffer($.__webglFramebuffer[gt][xt]);else i.deleteFramebuffer($.__webglFramebuffer[gt]);$.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer[gt])}else{if(Array.isArray($.__webglFramebuffer))for(let gt=0;gt<$.__webglFramebuffer.length;gt++)i.deleteFramebuffer($.__webglFramebuffer[gt]);else i.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&i.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let gt=0;gt<$.__webglColorRenderbuffer.length;gt++)$.__webglColorRenderbuffer[gt]&&i.deleteRenderbuffer($.__webglColorRenderbuffer[gt]);$.__webglDepthRenderbuffer&&i.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let gt=0,xt=x.length;gt<xt;gt++){const A=n.get(x[gt]);A.__webglTexture&&(i.deleteTexture(A.__webglTexture),o.memory.textures--),n.remove(x[gt])}n.remove(x),n.remove(E)}let rt=0;function _t(){rt=0}function D(){const E=rt;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),rt+=1,E}function G(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function Y(E,x){const $=n.get(E);if(E.isVideoTexture&&ee(E),E.isRenderTargetTexture===!1&&E.version>0&&$.__version!==E.version){const vt=E.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St($,E,x);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+x)}function lt(E,x){const $=n.get(E);if(E.version>0&&$.__version!==E.version){St($,E,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+x)}function at(E,x){const $=n.get(E);if(E.version>0&&$.__version!==E.version){St($,E,x);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+x)}function ot(E,x){const $=n.get(E);if(E.version>0&&$.__version!==E.version){Ct($,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+x)}const F={[_r]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[gr]:i.MIRRORED_REPEAT},ct={[Ve]:i.NEAREST,[Xr]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[kl]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},it={[tc]:i.NEVER,[ac]:i.ALWAYS,[ec]:i.LESS,[Ao]:i.LEQUAL,[nc]:i.EQUAL,[rc]:i.GEQUAL,[ic]:i.GREATER,[sc]:i.NOTEQUAL};function J(E,x,$){if($?(i.texParameteri(E,i.TEXTURE_WRAP_S,F[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,F[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,F[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ct[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ct[x.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==dn||x.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,R(x.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==Ve&&x.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,it[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const vt=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ve||x.minFilter!==Us&&x.minFilter!==Bi||x.type===Pn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===zi&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(E,vt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function ht(E,x){let $=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",P));const vt=x.source;let gt=h.get(vt);gt===void 0&&(gt={},h.set(vt,gt));const xt=G(x);if(xt!==E.__cacheKey){gt[xt]===void 0&&(gt[xt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),gt[xt].usedTimes++;const A=gt[E.__cacheKey];A!==void 0&&(gt[E.__cacheKey].usedTimes--,A.usedTimes===0&&b(x)),E.__cacheKey=xt,E.__webglTexture=gt[xt].texture}return $}function St(E,x,$){let vt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(vt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(vt=i.TEXTURE_3D);const gt=ht(E,x),xt=x.source;e.bindTexture(vt,E.__webglTexture,i.TEXTURE0+$);const A=n.get(xt);if(xt.version!==A.__version||gt===!0){e.activeTexture(i.TEXTURE0+$);const v=oe.getPrimaries(oe.workingColorSpace),U=x.colorSpace===nn?null:oe.getPrimaries(x.colorSpace),N=x.colorSpace===nn||v===U?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);const mt=u(x)&&p(x.image)===!1;let V=g(x.image,mt,!1,s.maxTextureSize);V=yt(x,V);const Lt=p(V)||a,et=r.convert(x.format,x.colorSpace);let pt=r.convert(x.type),Et=L(x.internalFormat,et,pt,x.colorSpace,x.isVideoTexture);J(vt,x,Lt);let W;const Q=x.mipmaps,st=a&&x.isVideoTexture!==!0&&Et!==To,ut=A.__version===void 0||gt===!0,nt=I(x,V,Lt);if(x.isDepthTexture)Et=i.DEPTH_COMPONENT,a?x.type===Pn?Et=i.DEPTH_COMPONENT32F:x.type===Ln?Et=i.DEPTH_COMPONENT24:x.type===qn?Et=i.DEPTH24_STENCIL8:Et=i.DEPTH_COMPONENT16:x.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===$n&&Et===i.DEPTH_COMPONENT&&x.type!==wr&&x.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ln,pt=r.convert(x.type)),x.format===yi&&Et===i.DEPTH_COMPONENT&&(Et=i.DEPTH_STENCIL,x.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=qn,pt=r.convert(x.type))),ut&&(st?e.texStorage2D(i.TEXTURE_2D,1,Et,V.width,V.height):e.texImage2D(i.TEXTURE_2D,0,Et,V.width,V.height,0,et,pt,null));else if(x.isDataTexture)if(Q.length>0&&Lt){st&&ut&&e.texStorage2D(i.TEXTURE_2D,nt,Et,Q[0].width,Q[0].height);for(let H=0,T=Q.length;H<T;H++)W=Q[H],st?e.texSubImage2D(i.TEXTURE_2D,H,0,0,W.width,W.height,et,pt,W.data):e.texImage2D(i.TEXTURE_2D,H,Et,W.width,W.height,0,et,pt,W.data);x.generateMipmaps=!1}else st?(ut&&e.texStorage2D(i.TEXTURE_2D,nt,Et,V.width,V.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,V.width,V.height,et,pt,V.data)):e.texImage2D(i.TEXTURE_2D,0,Et,V.width,V.height,0,et,pt,V.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){st&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Et,Q[0].width,Q[0].height,V.depth);for(let H=0,T=Q.length;H<T;H++)W=Q[H],x.format!==hn?et!==null?st?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,W.width,W.height,V.depth,et,W.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Et,W.width,W.height,V.depth,0,W.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,W.width,W.height,V.depth,et,pt,W.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,Et,W.width,W.height,V.depth,0,et,pt,W.data)}else{st&&ut&&e.texStorage2D(i.TEXTURE_2D,nt,Et,Q[0].width,Q[0].height);for(let H=0,T=Q.length;H<T;H++)W=Q[H],x.format!==hn?et!==null?st?e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,W.width,W.height,et,W.data):e.compressedTexImage2D(i.TEXTURE_2D,H,Et,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?e.texSubImage2D(i.TEXTURE_2D,H,0,0,W.width,W.height,et,pt,W.data):e.texImage2D(i.TEXTURE_2D,H,Et,W.width,W.height,0,et,pt,W.data)}else if(x.isDataArrayTexture)st?(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Et,V.width,V.height,V.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,et,pt,V.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,V.width,V.height,V.depth,0,et,pt,V.data);else if(x.isData3DTexture)st?(ut&&e.texStorage3D(i.TEXTURE_3D,nt,Et,V.width,V.height,V.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,et,pt,V.data)):e.texImage3D(i.TEXTURE_3D,0,Et,V.width,V.height,V.depth,0,et,pt,V.data);else if(x.isFramebufferTexture){if(ut)if(st)e.texStorage2D(i.TEXTURE_2D,nt,Et,V.width,V.height);else{let H=V.width,T=V.height;for(let ft=0;ft<nt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Et,H,T,0,et,pt,null),H>>=1,T>>=1}}else if(Q.length>0&&Lt){st&&ut&&e.texStorage2D(i.TEXTURE_2D,nt,Et,Q[0].width,Q[0].height);for(let H=0,T=Q.length;H<T;H++)W=Q[H],st?e.texSubImage2D(i.TEXTURE_2D,H,0,0,et,pt,W):e.texImage2D(i.TEXTURE_2D,H,Et,et,pt,W);x.generateMipmaps=!1}else st?(ut&&e.texStorage2D(i.TEXTURE_2D,nt,Et,V.width,V.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,et,pt,V)):e.texImage2D(i.TEXTURE_2D,0,Et,et,pt,V);w(x,Lt)&&M(vt),A.__version=xt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ct(E,x,$){if(x.image.length!==6)return;const vt=ht(E,x),gt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+$);const xt=n.get(gt);if(gt.version!==xt.__version||vt===!0){e.activeTexture(i.TEXTURE0+$);const A=oe.getPrimaries(oe.workingColorSpace),v=x.colorSpace===nn?null:oe.getPrimaries(x.colorSpace),U=x.colorSpace===nn||A===v?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,U);const N=x.isCompressedTexture||x.image[0].isCompressedTexture,mt=x.image[0]&&x.image[0].isDataTexture,V=[];for(let H=0;H<6;H++)!N&&!mt?V[H]=g(x.image[H],!1,!0,s.maxCubemapSize):V[H]=mt?x.image[H].image:x.image[H],V[H]=yt(x,V[H]);const Lt=V[0],et=p(Lt)||a,pt=r.convert(x.format,x.colorSpace),Et=r.convert(x.type),W=L(x.internalFormat,pt,Et,x.colorSpace),Q=a&&x.isVideoTexture!==!0,st=xt.__version===void 0||vt===!0;let ut=I(x,Lt,et);J(i.TEXTURE_CUBE_MAP,x,et);let nt;if(N){Q&&st&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,W,Lt.width,Lt.height);for(let H=0;H<6;H++){nt=V[H].mipmaps;for(let T=0;T<nt.length;T++){const ft=nt[T];x.format!==hn?pt!==null?Q?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,T,0,0,ft.width,ft.height,pt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,T,W,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,T,0,0,ft.width,ft.height,pt,Et,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,T,W,ft.width,ft.height,0,pt,Et,ft.data)}}}else{nt=x.mipmaps,Q&&st&&(nt.length>0&&ut++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,W,V[0].width,V[0].height));for(let H=0;H<6;H++)if(mt){Q?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,V[H].width,V[H].height,pt,Et,V[H].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,W,V[H].width,V[H].height,0,pt,Et,V[H].data);for(let T=0;T<nt.length;T++){const Mt=nt[T].image[H].image;Q?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,T+1,0,0,Mt.width,Mt.height,pt,Et,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,T+1,W,Mt.width,Mt.height,0,pt,Et,Mt.data)}}else{Q?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,pt,Et,V[H]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,W,pt,Et,V[H]);for(let T=0;T<nt.length;T++){const ft=nt[T];Q?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,T+1,0,0,pt,Et,ft.image[H]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,T+1,W,pt,Et,ft.image[H])}}}w(x,et)&&M(i.TEXTURE_CUBE_MAP),xt.__version=gt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function At(E,x,$,vt,gt,xt){const A=r.convert($.format,$.colorSpace),v=r.convert($.type),U=L($.internalFormat,A,v,$.colorSpace);if(!n.get(x).__hasExternalTextures){const mt=Math.max(1,x.width>>xt),V=Math.max(1,x.height>>xt);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,xt,U,mt,V,x.depth,0,A,v,null):e.texImage2D(gt,xt,U,mt,V,0,A,v,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Rt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,gt,n.get($).__webglTexture,0,Vt(x)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,vt,gt,n.get($).__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(E,x,$){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let vt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if($||Rt(x)){const gt=x.depthTexture;gt&&gt.isDepthTexture&&(gt.type===Pn?vt=i.DEPTH_COMPONENT32F:gt.type===Ln&&(vt=i.DEPTH_COMPONENT24));const xt=Vt(x);Rt(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,vt,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,vt,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,vt,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const vt=Vt(x);$&&Rt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,i.DEPTH24_STENCIL8,x.width,x.height):Rt(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const vt=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let gt=0;gt<vt.length;gt++){const xt=vt[gt],A=r.convert(xt.format,xt.colorSpace),v=r.convert(xt.type),U=L(xt.internalFormat,A,v,xt.colorSpace),N=Vt(x);$&&Rt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,N,U,x.width,x.height):Rt(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N,U,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,U,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const vt=n.get(x.depthTexture).__webglTexture,gt=Vt(x);if(x.depthTexture.format===$n)Rt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0);else if(x.depthTexture.format===yi)Rt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Ft(E){const x=n.get(E),$=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ot(x.__webglFramebuffer,E)}else if($){x.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[vt]),x.__webglDepthbuffer[vt]=i.createRenderbuffer(),kt(x.__webglDepthbuffer[vt],E,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),kt(x.__webglDepthbuffer,E,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(E,x,$){const vt=n.get(E);x!==void 0&&At(vt.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Ft(E)}function k(E){const x=E.texture,$=n.get(E),vt=n.get(x);E.addEventListener("dispose",j),E.isWebGLMultipleRenderTargets!==!0&&(vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture()),vt.__version=x.version,o.memory.textures++);const gt=E.isWebGLCubeRenderTarget===!0,xt=E.isWebGLMultipleRenderTargets===!0,A=p(E)||a;if(gt){$.__webglFramebuffer=[];for(let v=0;v<6;v++)if(a&&x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer[v]=[];for(let U=0;U<x.mipmaps.length;U++)$.__webglFramebuffer[v][U]=i.createFramebuffer()}else $.__webglFramebuffer[v]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer=[];for(let v=0;v<x.mipmaps.length;v++)$.__webglFramebuffer[v]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(xt)if(s.drawBuffers){const v=E.texture;for(let U=0,N=v.length;U<N;U++){const mt=n.get(v[U]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Rt(E)===!1){const v=xt?x:[x];$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let U=0;U<v.length;U++){const N=v[U];$.__webglColorRenderbuffer[U]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[U]);const mt=r.convert(N.format,N.colorSpace),V=r.convert(N.type),Lt=L(N.internalFormat,mt,V,N.colorSpace,E.isXRRenderTarget===!0),et=Vt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Lt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,$.__webglColorRenderbuffer[U])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),kt($.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,vt.__webglTexture),J(i.TEXTURE_CUBE_MAP,x,A);for(let v=0;v<6;v++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let U=0;U<x.mipmaps.length;U++)At($.__webglFramebuffer[v][U],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+v,U);else At($.__webglFramebuffer[v],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0);w(x,A)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){const v=E.texture;for(let U=0,N=v.length;U<N;U++){const mt=v[U],V=n.get(mt);e.bindTexture(i.TEXTURE_2D,V.__webglTexture),J(i.TEXTURE_2D,mt,A),At($.__webglFramebuffer,E,mt,i.COLOR_ATTACHMENT0+U,i.TEXTURE_2D,0),w(mt,A)&&M(i.TEXTURE_2D)}e.unbindTexture()}else{let v=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?v=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(v,vt.__webglTexture),J(v,x,A),a&&x.mipmaps&&x.mipmaps.length>0)for(let U=0;U<x.mipmaps.length;U++)At($.__webglFramebuffer[U],E,x,i.COLOR_ATTACHMENT0,v,U);else At($.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,v,0);w(x,A)&&M(v),e.unbindTexture()}E.depthBuffer&&Ft(E)}function Se(E){const x=p(E)||a,$=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let vt=0,gt=$.length;vt<gt;vt++){const xt=$[vt];if(w(xt,x)){const A=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,v=n.get(xt).__webglTexture;e.bindTexture(A,v),M(A),e.unbindTexture()}}}function Ut(E){if(a&&E.samples>0&&Rt(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],$=E.width,vt=E.height;let gt=i.COLOR_BUFFER_BIT;const xt=[],A=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,v=n.get(E),U=E.isWebGLMultipleRenderTargets===!0;if(U)for(let N=0;N<x.length;N++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,v.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,v.__webglFramebuffer);for(let N=0;N<x.length;N++){xt.push(i.COLOR_ATTACHMENT0+N),E.depthBuffer&&xt.push(A);const mt=v.__ignoreDepthValues!==void 0?v.__ignoreDepthValues:!1;if(mt===!1&&(E.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),U&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,v.__webglColorRenderbuffer[N]),mt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[A]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])),U){const V=n.get(x[N]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,V,0)}i.blitFramebuffer(0,0,$,vt,0,0,$,vt,gt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),U)for(let N=0;N<x.length;N++){e.bindFramebuffer(i.FRAMEBUFFER,v.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,v.__webglColorRenderbuffer[N]);const mt=n.get(x[N]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,v.__webglMultisampledFramebuffer)}}function Vt(E){return Math.min(s.maxSamples,E.samples)}function Rt(E){const x=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ee(E){const x=o.render.frame;d.get(E)!==x&&(d.set(E,x),E.update())}function yt(E,x){const $=E.colorSpace,vt=E.format,gt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===vr||$!==yn&&$!==nn&&(oe.getTransfer($)===ue?a===!1?t.has("EXT_sRGB")===!0&&vt===hn?(E.format=vr,E.minFilter=en,E.generateMipmaps=!1):x=Co.sRGBToLinear(x):(vt!==hn||gt!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),x}this.allocateTextureUnit=D,this.resetTextureUnits=_t,this.setTexture2D=Y,this.setTexture2DArray=lt,this.setTexture3D=at,this.setTextureCube=ot,this.rebindTextures=Wt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Rt}function Sp(i,t,e){const n=e.isWebGL2;function s(r,o=nn){let a;const l=oe.getTransfer(o);if(r===Nn)return i.UNSIGNED_BYTE;if(r===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(r===So)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Vl)return i.BYTE;if(r===Wl)return i.SHORT;if(r===wr)return i.UNSIGNED_SHORT;if(r===xo)return i.INT;if(r===Ln)return i.UNSIGNED_INT;if(r===Pn)return i.FLOAT;if(r===zi)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Xl)return i.ALPHA;if(r===hn)return i.RGBA;if(r===Yl)return i.LUMINANCE;if(r===ql)return i.LUMINANCE_ALPHA;if(r===$n)return i.DEPTH_COMPONENT;if(r===yi)return i.DEPTH_STENCIL;if(r===vr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===$l)return i.RED;if(r===Eo)return i.RED_INTEGER;if(r===Zl)return i.RG;if(r===yo)return i.RG_INTEGER;if(r===bo)return i.RGBA_INTEGER;if(r===Is||r===Ns||r===Fs||r===Os)if(l===ue)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Is)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Is)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ns)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Os)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yr||r===qr||r===$r||r===Zr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Yr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$r)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===To)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===jr||r===Kr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===jr)return l===ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Kr)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jr||r===Qr||r===ta||r===ea||r===na||r===ia||r===sa||r===ra||r===aa||r===oa||r===la||r===ca||r===ua||r===da)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Jr)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qr)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ta)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ea)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===na)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ia)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sa)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ra)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===aa)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oa)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===la)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ca)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ua)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===da)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bs||r===ha||r===fa)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Bs)return l===ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ha)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===fa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jl||r===pa||r===ma||r===_a)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Bs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===pa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ma)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_a)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Ep extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Oe extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yp={type:"move"};class or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),u=this._getHandJoint(c,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class bp extends Ti{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,_=null;const g=e.getContextAttributes();let p=null,u=null;const w=[],M=[],L=new ne;let I=null;const R=new $e;R.layers.enable(1),R.viewport=new he;const P=new $e;P.layers.enable(2),P.viewport=new he;const j=[R,P],y=new Ep;y.layers.enable(1),y.layers.enable(2);let b=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ht=w[J];return ht===void 0&&(ht=new or,w[J]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(J){let ht=w[J];return ht===void 0&&(ht=new or,w[J]=ht),ht.getGripSpace()},this.getHand=function(J){let ht=w[J];return ht===void 0&&(ht=new or,w[J]=ht),ht.getHandSpace()};function rt(J){const ht=M.indexOf(J.inputSource);if(ht===-1)return;const St=w[ht];St!==void 0&&(St.update(J.inputSource,J.frame,c||o),St.dispatchEvent({type:J.type,data:J.inputSource}))}function _t(){s.removeEventListener("select",rt),s.removeEventListener("selectstart",rt),s.removeEventListener("selectend",rt),s.removeEventListener("squeeze",rt),s.removeEventListener("squeezestart",rt),s.removeEventListener("squeezeend",rt),s.removeEventListener("end",_t),s.removeEventListener("inputsourceschange",D);for(let J=0;J<w.length;J++){const ht=M[J];ht!==null&&(M[J]=null,w[J].disconnect(ht))}b=null,Z=null,t.setRenderTarget(p),m=null,h=null,f=null,s=null,u=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",rt),s.addEventListener("selectstart",rt),s.addEventListener("selectend",rt),s.addEventListener("squeeze",rt),s.addEventListener("squeezestart",rt),s.addEventListener("squeezeend",rt),s.addEventListener("end",_t),s.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const ht={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new jn(m.framebufferWidth,m.framebufferHeight,{format:hn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ht=null,St=null,Ct=null;g.depth&&(Ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=g.stencil?yi:$n,St=g.stencil?qn:Ln);const At={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(At),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),u=new jn(h.textureWidth,h.textureHeight,{format:hn,type:Nn,depthTexture:new Vo(h.textureWidth,h.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const kt=t.properties.get(u);kt.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(J){for(let ht=0;ht<J.removed.length;ht++){const St=J.removed[ht],Ct=M.indexOf(St);Ct>=0&&(M[Ct]=null,w[Ct].disconnect(St))}for(let ht=0;ht<J.added.length;ht++){const St=J.added[ht];let Ct=M.indexOf(St);if(Ct===-1){for(let kt=0;kt<w.length;kt++)if(kt>=M.length){M.push(St),Ct=kt;break}else if(M[kt]===null){M[kt]=St,Ct=kt;break}if(Ct===-1)break}const At=w[Ct];At&&At.connect(St)}}const G=new O,Y=new O;function lt(J,ht,St){G.setFromMatrixPosition(ht.matrixWorld),Y.setFromMatrixPosition(St.matrixWorld);const Ct=G.distanceTo(Y),At=ht.projectionMatrix.elements,kt=St.projectionMatrix.elements,Ot=At[14]/(At[10]-1),Ft=At[14]/(At[10]+1),Wt=(At[9]+1)/At[5],k=(At[9]-1)/At[5],Se=(At[8]-1)/At[0],Ut=(kt[8]+1)/kt[0],Vt=Ot*Se,Rt=Ot*Ut,ee=Ct/(-Se+Ut),yt=ee*-Se;ht.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(yt),J.translateZ(ee),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const E=Ot+ee,x=Ft+ee,$=Vt-yt,vt=Rt+(Ct-yt),gt=Wt*Ft/x*E,xt=k*Ft/x*E;J.projectionMatrix.makePerspective($,vt,gt,xt,E,x),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function at(J,ht){ht===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ht.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;y.near=P.near=R.near=J.near,y.far=P.far=R.far=J.far,(b!==y.near||Z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,Z=y.far);const ht=J.parent,St=y.cameras;at(y,ht);for(let Ct=0;Ct<St.length;Ct++)at(St[Ct],ht);St.length===2?lt(y,R,P):y.projectionMatrix.copy(R.projectionMatrix),ot(J,y,ht)};function ot(J,ht,St){St===null?J.matrix.copy(ht.matrixWorld):(J.matrix.copy(St.matrixWorld),J.matrix.invert(),J.matrix.multiply(ht.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Gi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)};let F=null;function ct(J,ht){if(d=ht.getViewerPose(c||o),_=ht,d!==null){const St=d.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let Ct=!1;St.length!==y.cameras.length&&(y.cameras.length=0,Ct=!0);for(let At=0;At<St.length;At++){const kt=St[At];let Ot=null;if(m!==null)Ot=m.getViewport(kt);else{const Wt=f.getViewSubImage(h,kt);Ot=Wt.viewport,At===0&&(t.setRenderTargetTextures(u,Wt.colorTexture,h.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(u))}let Ft=j[At];Ft===void 0&&(Ft=new $e,Ft.layers.enable(At),Ft.viewport=new he,j[At]=Ft),Ft.matrix.fromArray(kt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(kt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),At===0&&(y.matrix.copy(Ft.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ct===!0&&y.cameras.push(Ft)}}for(let St=0;St<w.length;St++){const Ct=M[St],At=w[St];Ct!==null&&At!==void 0&&At.update(Ct,ht,c||o)}F&&F(J,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),_=null}const it=new Ho;it.setAnimationLoop(ct),this.setAnimationLoop=function(J){F=J},this.dispose=function(){}}}function Tp(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Bo(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,w,M,L){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),d(p,u)):u.isMeshStandardMaterial?(r(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,L)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),g(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,w,M):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ze&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ze&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const w=t.get(u).envMap;if(w&&(p.envMap.value=w,p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const M=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*M,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,w,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*w,p.scale.value=M*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,w){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ze&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){const w=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wp(i,t,e,n){let s={},r={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,M){const L=M.program;n.uniformBlockBinding(w,L)}function c(w,M){let L=s[w.id];L===void 0&&(_(w),L=d(w),s[w.id]=L,w.addEventListener("dispose",p));const I=M.program;n.updateUBOMapping(w,I);const R=t.render.frame;r[w.id]!==R&&(h(w),r[w.id]=R)}function d(w){const M=f();w.__bindingPointIndex=M;const L=i.createBuffer(),I=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,L),L}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const M=s[w.id],L=w.uniforms,I=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,P=L.length;R<P;R++){const j=Array.isArray(L[R])?L[R]:[L[R]];for(let y=0,b=j.length;y<b;y++){const Z=j[y];if(m(Z,R,y,I)===!0){const rt=Z.__offset,_t=Array.isArray(Z.value)?Z.value:[Z.value];let D=0;for(let G=0;G<_t.length;G++){const Y=_t[G],lt=g(Y);typeof Y=="number"||typeof Y=="boolean"?(Z.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,rt+D,Z.__data)):Y.isMatrix3?(Z.__data[0]=Y.elements[0],Z.__data[1]=Y.elements[1],Z.__data[2]=Y.elements[2],Z.__data[3]=0,Z.__data[4]=Y.elements[3],Z.__data[5]=Y.elements[4],Z.__data[6]=Y.elements[5],Z.__data[7]=0,Z.__data[8]=Y.elements[6],Z.__data[9]=Y.elements[7],Z.__data[10]=Y.elements[8],Z.__data[11]=0):(Y.toArray(Z.__data,D),D+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,rt,Z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,M,L,I){const R=w.value,P=M+"_"+L;if(I[P]===void 0)return typeof R=="number"||typeof R=="boolean"?I[P]=R:I[P]=R.clone(),!0;{const j=I[P];if(typeof R=="number"||typeof R=="boolean"){if(j!==R)return I[P]=R,!0}else if(j.equals(R)===!1)return j.copy(R),!0}return!1}function _(w){const M=w.uniforms;let L=0;const I=16;for(let P=0,j=M.length;P<j;P++){const y=Array.isArray(M[P])?M[P]:[M[P]];for(let b=0,Z=y.length;b<Z;b++){const rt=y[b],_t=Array.isArray(rt.value)?rt.value:[rt.value];for(let D=0,G=_t.length;D<G;D++){const Y=_t[D],lt=g(Y),at=L%I;at!==0&&I-at<lt.boundary&&(L+=I-at),rt.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=L,L+=lt.storage}}}const R=L%I;return R>0&&(L+=I-R),w.__size=L,w.__cache={},this}function g(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function p(w){const M=w.target;M.removeEventListener("dispose",p);const L=o.indexOf(M.__bindingPointIndex);o.splice(L,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function u(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}class Dr{constructor(t={}){const{canvas:e=Sc(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const u=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this._useLegacyLights=!1,this.toneMapping=In,this.toneMappingExposure=1;const M=this;let L=!1,I=0,R=0,P=null,j=-1,y=null;const b=new he,Z=new he;let rt=null;const _t=new jt(0);let D=0,G=e.width,Y=e.height,lt=1,at=null,ot=null;const F=new he(0,0,G,Y),ct=new he(0,0,G,Y);let it=!1;const J=new Lr;let ht=!1,St=!1,Ct=null;const At=new _e,kt=new ne,Ot=new O,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Wt(){return P===null?lt:1}let k=n;function Se(S,B){for(let X=0;X<S.length;X++){const z=S[X],q=e.getContext(z,B);if(q!==null)return q}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${br}`),e.addEventListener("webglcontextlost",H,!1),e.addEventListener("webglcontextrestored",T,!1),e.addEventListener("webglcontextcreationerror",ft,!1),k===null){const B=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&B.shift(),k=Se(B,S),k===null)throw Se(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ut,Vt,Rt,ee,yt,E,x,$,vt,gt,xt,A,v,U,N,mt,V,Lt,et,pt,Et,W,Q,st;function ut(){Ut=new Nh(k),Vt=new Ch(k,Ut,t),Ut.init(Vt),W=new Sp(k,Ut,Vt),Rt=new xp(k,Ut,Vt),ee=new Bh(k),yt=new rp,E=new Mp(k,Ut,Rt,yt,Vt,W,ee),x=new Ph(M),$=new Ih(M),vt=new Yc(k,Vt),Q=new Ah(k,Ut,vt,Vt),gt=new Fh(k,vt,ee,Q),xt=new kh(k,gt,vt,ee),et=new Hh(k,Vt,E),mt=new Lh(yt),A=new sp(M,x,$,Ut,Vt,Q,mt),v=new Tp(M,yt),U=new op,N=new fp(Ut,Vt),Lt=new wh(M,x,$,Rt,xt,h,l),V=new vp(M,xt,Vt),st=new wp(k,ee,Vt,Rt),pt=new Rh(k,Ut,ee,Vt),Et=new Oh(k,Ut,ee,Vt),ee.programs=A.programs,M.capabilities=Vt,M.extensions=Ut,M.properties=yt,M.renderLists=U,M.shadowMap=V,M.state=Rt,M.info=ee}ut();const nt=new bp(M,k);this.xr=nt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const S=Ut.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ut.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(S){S!==void 0&&(lt=S,this.setSize(G,Y,!1))},this.getSize=function(S){return S.set(G,Y)},this.setSize=function(S,B,X=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,Y=B,e.width=Math.floor(S*lt),e.height=Math.floor(B*lt),X===!0&&(e.style.width=S+"px",e.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(G*lt,Y*lt).floor()},this.setDrawingBufferSize=function(S,B,X){G=S,Y=B,lt=X,e.width=Math.floor(S*X),e.height=Math.floor(B*X),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(F)},this.setViewport=function(S,B,X,z){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,B,X,z),Rt.viewport(b.copy(F).multiplyScalar(lt).floor())},this.getScissor=function(S){return S.copy(ct)},this.setScissor=function(S,B,X,z){S.isVector4?ct.set(S.x,S.y,S.z,S.w):ct.set(S,B,X,z),Rt.scissor(Z.copy(ct).multiplyScalar(lt).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(S){Rt.setScissorTest(it=S)},this.setOpaqueSort=function(S){at=S},this.setTransparentSort=function(S){ot=S},this.getClearColor=function(S){return S.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(S=!0,B=!0,X=!0){let z=0;if(S){let q=!1;if(P!==null){const Tt=P.texture.format;q=Tt===bo||Tt===yo||Tt===Eo}if(q){const Tt=P.texture.type,Dt=Tt===Nn||Tt===Ln||Tt===wr||Tt===qn||Tt===Mo||Tt===So,Bt=Lt.getClearColor(),Gt=Lt.getClearAlpha(),Yt=Bt.r,zt=Bt.g,Ht=Bt.b;Dt?(m[0]=Yt,m[1]=zt,m[2]=Ht,m[3]=Gt,k.clearBufferuiv(k.COLOR,0,m)):(_[0]=Yt,_[1]=zt,_[2]=Ht,_[3]=Gt,k.clearBufferiv(k.COLOR,0,_))}else z|=k.COLOR_BUFFER_BIT}B&&(z|=k.DEPTH_BUFFER_BIT),X&&(z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",H,!1),e.removeEventListener("webglcontextrestored",T,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),U.dispose(),N.dispose(),yt.dispose(),x.dispose(),$.dispose(),xt.dispose(),Q.dispose(),st.dispose(),A.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Ee),nt.removeEventListener("sessionend",re),Ct&&(Ct.dispose(),Ct=null),Ae.stop()};function H(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function T(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const S=ee.autoReset,B=V.enabled,X=V.autoUpdate,z=V.needsUpdate,q=V.type;ut(),ee.autoReset=S,V.enabled=B,V.autoUpdate=X,V.needsUpdate=z,V.type=q}function ft(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Mt(S){const B=S.target;B.removeEventListener("dispose",Mt),It(B)}function It(S){Pt(S),yt.remove(S)}function Pt(S){const B=yt.get(S).programs;B!==void 0&&(B.forEach(function(X){A.releaseProgram(X)}),S.isShaderMaterial&&A.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,X,z,q,Tt){B===null&&(B=Ft);const Dt=q.isMesh&&q.matrixWorld.determinant()<0,Bt=ve(S,B,X,z,q);Rt.setMaterial(z,Dt);let Gt=X.index,Yt=1;if(z.wireframe===!0){if(Gt=gt.getWireframeAttribute(X),Gt===void 0)return;Yt=2}const zt=X.drawRange,Ht=X.attributes.position;let fe=zt.start*Yt,xe=(zt.start+zt.count)*Yt;Tt!==null&&(fe=Math.max(fe,Tt.start*Yt),xe=Math.min(xe,(Tt.start+Tt.count)*Yt)),Gt!==null?(fe=Math.max(fe,0),xe=Math.min(xe,Gt.count)):Ht!=null&&(fe=Math.max(fe,0),xe=Math.min(xe,Ht.count));const me=xe-fe;if(me<0||me===1/0)return;Q.setup(q,z,Bt,X,Gt);let rn,ce=pt;if(Gt!==null&&(rn=vt.get(Gt),ce=Et,ce.setIndex(rn)),q.isMesh)z.wireframe===!0?(Rt.setLineWidth(z.wireframeLinewidth*Wt()),ce.setMode(k.LINES)):ce.setMode(k.TRIANGLES);else if(q.isLine){let Kt=z.linewidth;Kt===void 0&&(Kt=1),Rt.setLineWidth(Kt*Wt()),q.isLineSegments?ce.setMode(k.LINES):q.isLineLoop?ce.setMode(k.LINE_LOOP):ce.setMode(k.LINE_STRIP)}else q.isPoints?ce.setMode(k.POINTS):q.isSprite&&ce.setMode(k.TRIANGLES);if(q.isBatchedMesh)ce.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)ce.renderInstances(fe,me,q.count);else if(X.isInstancedBufferGeometry){const Kt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Cs=Math.min(X.instanceCount,Kt);ce.renderInstances(fe,me,Cs)}else ce.render(fe,me)};function ie(S,B,X){S.transparent===!0&&S.side===Be&&S.forceSinglePass===!1?(S.side=Ze,S.needsUpdate=!0,wt(S,B,X),S.side=Fn,S.needsUpdate=!0,wt(S,B,X),S.side=Be):wt(S,B,X)}this.compile=function(S,B,X=null){X===null&&(X=S),p=N.get(X),p.init(),w.push(p),X.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),S!==X&&S.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(M._useLegacyLights);const z=new Set;return S.traverse(function(q){const Tt=q.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const Bt=Tt[Dt];ie(Bt,X,q),z.add(Bt)}else ie(Tt,X,q),z.add(Tt)}),w.pop(),p=null,z},this.compileAsync=function(S,B,X=null){const z=this.compile(S,B,X);return new Promise(q=>{function Tt(){if(z.forEach(function(Dt){yt.get(Dt).currentProgram.isReady()&&z.delete(Dt)}),z.size===0){q(S);return}setTimeout(Tt,10)}Ut.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let se=null;function ge(S){se&&se(S)}function Ee(){Ae.stop()}function re(){Ae.start()}const Ae=new Ho;Ae.setAnimationLoop(ge),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(S){se=S,nt.setAnimationLoop(S),S===null?Ae.stop():Ae.start()},nt.addEventListener("sessionstart",Ee),nt.addEventListener("sessionend",re),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(B),B=nt.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,B,P),p=N.get(S,w.length),p.init(),w.push(p),At.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J.setFromProjectionMatrix(At),St=this.localClippingEnabled,ht=mt.init(this.clippingPlanes,St),g=U.get(S,u.length),g.init(),u.push(g),Xe(S,B,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(at,ot),this.info.render.frame++,ht===!0&&mt.beginShadows();const X=p.state.shadowsArray;if(V.render(X,S,B),ht===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Lt.render(g,S),p.setupLights(M._useLegacyLights),B.isArrayCamera){const z=B.cameras;for(let q=0,Tt=z.length;q<Tt;q++){const Dt=z[q];ae(g,S,Dt,Dt.viewport)}}else ae(g,S,B);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(M,S,B),Q.resetDefaultState(),j=-1,y=null,w.pop(),w.length>0?p=w[w.length-1]:p=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function Xe(S,B,X,z){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||J.intersectsSprite(S)){z&&Ot.setFromMatrixPosition(S.matrixWorld).applyMatrix4(At);const Dt=xt.update(S),Bt=S.material;Bt.visible&&g.push(S,Dt,Bt,X,Ot.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||J.intersectsObject(S))){const Dt=xt.update(S),Bt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ot.copy(S.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Ot.copy(Dt.boundingSphere.center)),Ot.applyMatrix4(S.matrixWorld).applyMatrix4(At)),Array.isArray(Bt)){const Gt=Dt.groups;for(let Yt=0,zt=Gt.length;Yt<zt;Yt++){const Ht=Gt[Yt],fe=Bt[Ht.materialIndex];fe&&fe.visible&&g.push(S,Dt,fe,X,Ot.z,Ht)}}else Bt.visible&&g.push(S,Dt,Bt,X,Ot.z,null)}}const Tt=S.children;for(let Dt=0,Bt=Tt.length;Dt<Bt;Dt++)Xe(Tt[Dt],B,X,z)}function ae(S,B,X,z){const q=S.opaque,Tt=S.transmissive,Dt=S.transparent;p.setupLightsView(X),ht===!0&&mt.setGlobalState(M.clippingPlanes,X),Tt.length>0&&dt(q,Tt,B,X),z&&Rt.viewport(b.copy(z)),q.length>0&&K(q,B,X),Tt.length>0&&K(Tt,B,X),Dt.length>0&&K(Dt,B,X),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function dt(S,B,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const Tt=Vt.isWebGL2;Ct===null&&(Ct=new jn(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")?zi:Nn,minFilter:Bi,samples:Tt?4:0})),M.getDrawingBufferSize(kt),Tt?Ct.setSize(kt.x,kt.y):Ct.setSize(Ss(kt.x),Ss(kt.y));const Dt=M.getRenderTarget();M.setRenderTarget(Ct),M.getClearColor(_t),D=M.getClearAlpha(),D<1&&M.setClearColor(16777215,.5),M.clear();const Bt=M.toneMapping;M.toneMapping=In,K(S,X,z),E.updateMultisampleRenderTarget(Ct),E.updateRenderTargetMipmap(Ct);let Gt=!1;for(let Yt=0,zt=B.length;Yt<zt;Yt++){const Ht=B[Yt],fe=Ht.object,xe=Ht.geometry,me=Ht.material,rn=Ht.group;if(me.side===Be&&fe.layers.test(z.layers)){const ce=me.side;me.side=Ze,me.needsUpdate=!0,tt(fe,X,z,xe,me,rn),me.side=ce,me.needsUpdate=!0,Gt=!0}}Gt===!0&&(E.updateMultisampleRenderTarget(Ct),E.updateRenderTargetMipmap(Ct)),M.setRenderTarget(Dt),M.setClearColor(_t,D),M.toneMapping=Bt}function K(S,B,X){const z=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Tt=S.length;q<Tt;q++){const Dt=S[q],Bt=Dt.object,Gt=Dt.geometry,Yt=z===null?Dt.material:z,zt=Dt.group;Bt.layers.test(X.layers)&&tt(Bt,B,X,Gt,Yt,zt)}}function tt(S,B,X,z,q,Tt){S.onBeforeRender(M,B,X,z,q,Tt),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(M,B,X,z,S,Tt),q.transparent===!0&&q.side===Be&&q.forceSinglePass===!1?(q.side=Ze,q.needsUpdate=!0,M.renderBufferDirect(X,B,z,q,S,Tt),q.side=Fn,q.needsUpdate=!0,M.renderBufferDirect(X,B,z,q,S,Tt),q.side=Be):M.renderBufferDirect(X,B,z,q,S,Tt),S.onAfterRender(M,B,X,z,q,Tt)}function wt(S,B,X){B.isScene!==!0&&(B=Ft);const z=yt.get(S),q=p.state.lights,Tt=p.state.shadowsArray,Dt=q.state.version,Bt=A.getParameters(S,q.state,Tt,B,X),Gt=A.getProgramCacheKey(Bt);let Yt=z.programs;z.environment=S.isMeshStandardMaterial?B.environment:null,z.fog=B.fog,z.envMap=(S.isMeshStandardMaterial?$:x).get(S.envMap||z.environment),Yt===void 0&&(S.addEventListener("dispose",Mt),Yt=new Map,z.programs=Yt);let zt=Yt.get(Gt);if(zt!==void 0){if(z.currentProgram===zt&&z.lightsStateVersion===Dt)return te(S,Bt),zt}else Bt.uniforms=A.getUniforms(S),S.onBuild(X,Bt,M),S.onBeforeCompile(Bt,M),zt=A.acquireProgram(Bt,Gt),Yt.set(Gt,zt),z.uniforms=Bt.uniforms;const Ht=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ht.clippingPlanes=mt.uniform),te(S,Bt),z.needsLights=Pe(S),z.lightsStateVersion=Dt,z.needsLights&&(Ht.ambientLightColor.value=q.state.ambient,Ht.lightProbe.value=q.state.probe,Ht.directionalLights.value=q.state.directional,Ht.directionalLightShadows.value=q.state.directionalShadow,Ht.spotLights.value=q.state.spot,Ht.spotLightShadows.value=q.state.spotShadow,Ht.rectAreaLights.value=q.state.rectArea,Ht.ltc_1.value=q.state.rectAreaLTC1,Ht.ltc_2.value=q.state.rectAreaLTC2,Ht.pointLights.value=q.state.point,Ht.pointLightShadows.value=q.state.pointShadow,Ht.hemisphereLights.value=q.state.hemi,Ht.directionalShadowMap.value=q.state.directionalShadowMap,Ht.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ht.spotShadowMap.value=q.state.spotShadowMap,Ht.spotLightMatrix.value=q.state.spotLightMatrix,Ht.spotLightMap.value=q.state.spotLightMap,Ht.pointShadowMap.value=q.state.pointShadowMap,Ht.pointShadowMatrix.value=q.state.pointShadowMatrix),z.currentProgram=zt,z.uniformsList=null,zt}function Qt(S){if(S.uniformsList===null){const B=S.currentProgram.getUniforms();S.uniformsList=ms.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function te(S,B){const X=yt.get(S);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function ve(S,B,X,z,q){B.isScene!==!0&&(B=Ft),E.resetTextureUnits();const Tt=B.fog,Dt=z.isMeshStandardMaterial?B.environment:null,Bt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:yn,Gt=(z.isMeshStandardMaterial?$:x).get(z.envMap||Dt),Yt=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,zt=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ht=!!X.morphAttributes.position,fe=!!X.morphAttributes.normal,xe=!!X.morphAttributes.color;let me=In;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(me=M.toneMapping);const rn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ce=rn!==void 0?rn.length:0,Kt=yt.get(z),Cs=p.state.lights;if(ht===!0&&(St===!0||S!==y)){const Qe=S===y&&z.id===j;mt.setState(z,S,Qe)}let pe=!1;z.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Cs.state.version||Kt.outputColorSpace!==Bt||q.isBatchedMesh&&Kt.batching===!1||!q.isBatchedMesh&&Kt.batching===!0||q.isInstancedMesh&&Kt.instancing===!1||!q.isInstancedMesh&&Kt.instancing===!0||q.isSkinnedMesh&&Kt.skinning===!1||!q.isSkinnedMesh&&Kt.skinning===!0||q.isInstancedMesh&&Kt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Kt.instancingColor===!1&&q.instanceColor!==null||Kt.envMap!==Gt||z.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==mt.numPlanes||Kt.numIntersection!==mt.numIntersection)||Kt.vertexAlphas!==Yt||Kt.vertexTangents!==zt||Kt.morphTargets!==Ht||Kt.morphNormals!==fe||Kt.morphColors!==xe||Kt.toneMapping!==me||Vt.isWebGL2===!0&&Kt.morphTargetsCount!==ce)&&(pe=!0):(pe=!0,Kt.__version=z.version);let On=Kt.currentProgram;pe===!0&&(On=wt(z,B,q));let Fr=!1,Ri=!1,Ls=!1;const De=On.getUniforms(),Bn=Kt.uniforms;if(Rt.useProgram(On.program)&&(Fr=!0,Ri=!0,Ls=!0),z.id!==j&&(j=z.id,Ri=!0),Fr||y!==S){De.setValue(k,"projectionMatrix",S.projectionMatrix),De.setValue(k,"viewMatrix",S.matrixWorldInverse);const Qe=De.map.cameraPosition;Qe!==void 0&&Qe.setValue(k,Ot.setFromMatrixPosition(S.matrixWorld)),Vt.logarithmicDepthBuffer&&De.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&De.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Ri=!0,Ls=!0)}if(q.isSkinnedMesh){De.setOptional(k,q,"bindMatrix"),De.setOptional(k,q,"bindMatrixInverse");const Qe=q.skeleton;Qe&&(Vt.floatVertexTextures?(Qe.boneTexture===null&&Qe.computeBoneTexture(),De.setValue(k,"boneTexture",Qe.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(De.setOptional(k,q,"batchingTexture"),De.setValue(k,"batchingTexture",q._matricesTexture,E));const Ps=X.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0&&Vt.isWebGL2===!0)&&et.update(q,X,On),(Ri||Kt.receiveShadow!==q.receiveShadow)&&(Kt.receiveShadow=q.receiveShadow,De.setValue(k,"receiveShadow",q.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Bn.envMap.value=Gt,Bn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),Ri&&(De.setValue(k,"toneMappingExposure",M.toneMappingExposure),Kt.needsLights&&ze(Bn,Ls),Tt&&z.fog===!0&&v.refreshFogUniforms(Bn,Tt),v.refreshMaterialUniforms(Bn,z,lt,Y,Ct),ms.upload(k,Qt(Kt),Bn,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ms.upload(k,Qt(Kt),Bn,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&De.setValue(k,"center",q.center),De.setValue(k,"modelViewMatrix",q.modelViewMatrix),De.setValue(k,"normalMatrix",q.normalMatrix),De.setValue(k,"modelMatrix",q.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Qe=z.uniformsGroups;for(let Ds=0,nl=Qe.length;Ds<nl;Ds++)if(Vt.isWebGL2){const Or=Qe[Ds];st.update(Or,On),st.bind(Or,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function ze(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Pe(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,B,X){yt.get(S.texture).__webglTexture=B,yt.get(S.depthTexture).__webglTexture=X;const z=yt.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=X===void 0,z.__autoAllocateDepthBuffer||Ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,B){const X=yt.get(S);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,X=0){P=S,I=B,R=X;let z=!0,q=null,Tt=!1,Dt=!1;if(S){const Gt=yt.get(S);Gt.__useDefaultFramebuffer!==void 0?(Rt.bindFramebuffer(k.FRAMEBUFFER,null),z=!1):Gt.__webglFramebuffer===void 0?E.setupRenderTarget(S):Gt.__hasExternalTextures&&E.rebindTextures(S,yt.get(S.texture).__webglTexture,yt.get(S.depthTexture).__webglTexture);const Yt=S.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Dt=!0);const zt=yt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(zt[B])?q=zt[B][X]:q=zt[B],Tt=!0):Vt.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?q=yt.get(S).__webglMultisampledFramebuffer:Array.isArray(zt)?q=zt[X]:q=zt,b.copy(S.viewport),Z.copy(S.scissor),rt=S.scissorTest}else b.copy(F).multiplyScalar(lt).floor(),Z.copy(ct).multiplyScalar(lt).floor(),rt=it;if(Rt.bindFramebuffer(k.FRAMEBUFFER,q)&&Vt.drawBuffers&&z&&Rt.drawBuffers(S,q),Rt.viewport(b),Rt.scissor(Z),Rt.setScissorTest(rt),Tt){const Gt=yt.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,Gt.__webglTexture,X)}else if(Dt){const Gt=yt.get(S.texture),Yt=B||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Gt.__webglTexture,X||0,Yt)}j=-1},this.readRenderTargetPixels=function(S,B,X,z,q,Tt,Dt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=yt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){Rt.bindFramebuffer(k.FRAMEBUFFER,Bt);try{const Gt=S.texture,Yt=Gt.format,zt=Gt.type;if(Yt!==hn&&W.convert(Yt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=zt===zi&&(Ut.has("EXT_color_buffer_half_float")||Vt.isWebGL2&&Ut.has("EXT_color_buffer_float"));if(zt!==Nn&&W.convert(zt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===Pn&&(Vt.isWebGL2||Ut.has("OES_texture_float")||Ut.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-z&&X>=0&&X<=S.height-q&&k.readPixels(B,X,z,q,W.convert(Yt),W.convert(zt),Tt)}finally{const Gt=P!==null?yt.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(k.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(S,B,X=0){const z=Math.pow(2,-X),q=Math.floor(B.image.width*z),Tt=Math.floor(B.image.height*z);E.setTexture2D(B,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,S.x,S.y,q,Tt),Rt.unbindTexture()},this.copyTextureToTexture=function(S,B,X,z=0){const q=B.image.width,Tt=B.image.height,Dt=W.convert(X.format),Bt=W.convert(X.type);E.setTexture2D(X,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment),B.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,z,S.x,S.y,q,Tt,Dt,Bt,B.image.data):B.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,z,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,Dt,B.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,z,S.x,S.y,Dt,Bt,B.image),z===0&&X.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(S,B,X,z,q=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Tt=S.max.x-S.min.x+1,Dt=S.max.y-S.min.y+1,Bt=S.max.z-S.min.z+1,Gt=W.convert(z.format),Yt=W.convert(z.type);let zt;if(z.isData3DTexture)E.setTexture3D(z,0),zt=k.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)E.setTexture2DArray(z,0),zt=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);const Ht=k.getParameter(k.UNPACK_ROW_LENGTH),fe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),xe=k.getParameter(k.UNPACK_SKIP_PIXELS),me=k.getParameter(k.UNPACK_SKIP_ROWS),rn=k.getParameter(k.UNPACK_SKIP_IMAGES),ce=X.isCompressedTexture?X.mipmaps[q]:X.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ce.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ce.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,S.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,S.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,S.min.z),X.isDataTexture||X.isData3DTexture?k.texSubImage3D(zt,q,B.x,B.y,B.z,Tt,Dt,Bt,Gt,Yt,ce.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(zt,q,B.x,B.y,B.z,Tt,Dt,Bt,Gt,ce.data)):k.texSubImage3D(zt,q,B.x,B.y,B.z,Tt,Dt,Bt,Gt,Yt,ce),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ht),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,fe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xe),k.pixelStorei(k.UNPACK_SKIP_ROWS,me),k.pixelStorei(k.UNPACK_SKIP_IMAGES,rn),q===0&&z.generateMipmaps&&k.generateMipmap(zt),Rt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),Rt.unbindTexture()},this.resetState=function(){I=0,R=0,P=null,Rt.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Rr?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===bs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Re?Zn:wo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Zn?Re:yn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Ap extends Dr{}Ap.prototype.isWebGL1Renderer=!0;class Rs{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=n}clone(){return new Rs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zo extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ur extends Jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ro=new O,ao=new O,oo=new _e,lr=new Do,ps=new Ts;class jo extends Ce{constructor(t=new sn,e=new Ur){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ro.fromBufferAttribute(e,s-1),ao.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ro.distanceTo(ao);t.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),ps.radius+=r,t.ray.intersectsSphere(ps)===!1)return;oo.copy(s).invert(),lr.copy(t.ray).applyMatrix4(oo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,d=new O,f=new O,h=new O,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const u=Math.max(0,o.start),w=Math.min(_.count,o.start+o.count);for(let M=u,L=w-1;M<L;M+=m){const I=_.getX(M),R=_.getX(M+1);if(c.fromBufferAttribute(p,I),d.fromBufferAttribute(p,R),lr.distanceSqToSegment(c,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const j=t.ray.origin.distanceTo(h);j<t.near||j>t.far||e.push({distance:j,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),w=Math.min(p.count,o.start+o.count);for(let M=u,L=w-1;M<L;M+=m){if(c.fromBufferAttribute(p,M),d.fromBufferAttribute(p,M+1),lr.distanceSqToSegment(c,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(h);R<t.near||R>t.far||e.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const lo=new O,co=new O;class Rp extends jo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)lo.fromBufferAttribute(e,s),co.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lo.distanceTo(co);t.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dn extends sn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],f=[],h=[],m=[];let _=0;const g=[],p=n/2;let u=0;w(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new Le(f,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(m,2));function w(){const L=new O,I=new O;let R=0;const P=(e-t)/n;for(let j=0;j<=r;j++){const y=[],b=j/r,Z=b*(e-t)+t;for(let rt=0;rt<=s;rt++){const _t=rt/s,D=_t*l+a,G=Math.sin(D),Y=Math.cos(D);I.x=Z*G,I.y=-b*n+p,I.z=Z*Y,f.push(I.x,I.y,I.z),L.set(G,P,Y).normalize(),h.push(L.x,L.y,L.z),m.push(_t,1-b),y.push(_++)}g.push(y)}for(let j=0;j<s;j++)for(let y=0;y<r;y++){const b=g[y][j],Z=g[y+1][j],rt=g[y+1][j+1],_t=g[y][j+1];d.push(b,Z,_t),d.push(Z,rt,_t),R+=6}c.addGroup(u,R,0),u+=R}function M(L){const I=_,R=new ne,P=new O;let j=0;const y=L===!0?t:e,b=L===!0?1:-1;for(let rt=1;rt<=s;rt++)f.push(0,p*b,0),h.push(0,b,0),m.push(.5,.5),_++;const Z=_;for(let rt=0;rt<=s;rt++){const D=rt/s*l+a,G=Math.cos(D),Y=Math.sin(D);P.x=y*Y,P.y=p*b,P.z=y*G,f.push(P.x,P.y,P.z),h.push(0,b,0),R.x=G*.5+.5,R.y=Y*.5*b+.5,m.push(R.x,R.y),_++}for(let rt=0;rt<s;rt++){const _t=I+rt,D=Z+rt;L===!0?d.push(D,D+1,_t):d.push(D+1,D,_t),j+=3}c.addGroup(u,j,L===!0?1:2),u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cn extends Dn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Cn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ir extends sn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new O,h=new O,m=[],_=[],g=[],p=[];for(let u=0;u<=n;u++){const w=[],M=u/n;let L=0;u===0&&o===0?L=.5/e:u===n&&l===Math.PI&&(L=-.5/e);for(let I=0;I<=e;I++){const R=I/e;f.x=-t*Math.cos(s+R*r)*Math.sin(o+M*a),f.y=t*Math.cos(o+M*a),f.z=t*Math.sin(s+R*r)*Math.sin(o+M*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),p.push(R+L,1-M),w.push(c++)}d.push(w)}for(let u=0;u<n;u++)for(let w=0;w<e;w++){const M=d[u][w+1],L=d[u][w],I=d[u+1][w],R=d[u+1][w+1];(u!==0||o>0)&&m.push(M,L,R),(u!==n-1||l<Math.PI)&&m.push(L,I,R)}this.setIndex(m),this.setAttribute("position",new Le(_,3)),this.setAttribute("normal",new Le(g,3)),this.setAttribute("uv",new Le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class de extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ar,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cp extends Jn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new jt(16777215),this.specular=new jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ar,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nr extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const cr=new _e,uo=new O,ho=new O;class Ko{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uo.setFromMatrixPosition(t.matrixWorld),e.position.copy(uo),ho.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ho),e.updateMatrixWorld(),cr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const fo=new _e,Ui=new O,ur=new O;class Lp extends Ko{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ui.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ui),ur.copy(n.position),ur.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ur),n.updateMatrixWorld(),s.makeTranslation(-Ui.x,-Ui.y,-Ui.z),fo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo)}}class Jo extends Nr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Pp extends Ko{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qo extends Nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Pp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class tl extends Nr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class el extends Rp{constructor(t=10,e=10,n=4473924,s=8947848){n=new jt(n),s=new jt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let h=0,m=0,_=-a;h<=e;h++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const g=h===r?n:s;g.toArray(c,m),m+=3,g.toArray(c,m),m+=3,g.toArray(c,m),m+=3,g.toArray(c,m),m+=3}const d=new sn;d.setAttribute("position",new Le(l,3)),d.setAttribute("color",new Le(c,3));const f=new Ur({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:br}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=br);const Dp={class:"cncsim-panel"},Up={class:"cncsim-layout"},Ip={class:"control-panel"},Np={class:"panel-section"},Fp={label:"铣床"},Op=["value"],Bp={label:"五轴"},zp=["value"],Gp={label:"机器人"},Hp=["value"],kp={label:"其他"},Vp=["value"],Wp={key:0,label:"自定义运动学"},Xp=["value"],Yp={class:"machine-desc"},qp={class:"machine-axes"},$p={class:"panel-section"},Zp={class:"control-row"},jp={class:"panel-section"},Kp={class:"control-row"},Jp=["disabled"],Qp=["disabled"],tm={class:"control-row",style:{"margin-top":"4px"}},em=["disabled"],nm={class:"panel-section"},im={class:"jog-grid"},sm={class:"axis-label"},rm=["disabled","onMousedown"],am={class:"jog-value"},om=["disabled","onMousedown"],lm={class:"panel-section"},cm={class:"section-title"},um={class:"panel-section"},dm={class:"section-title"},hm={class:"panel-section"},fm={class:"viewport-container"},pm={class:"viewport-header"},mm={class:"viewport-controls"},_m={class:"material-symbols-outlined"},gm={key:0,class:"path-info"},vm={key:0,class:"spindle-indicator"},xm={class:"status-panel"},Mm={class:"panel-section"},Sm={class:"dro-axis"},Em={class:"dro-value mcs"},ym={class:"panel-section"},bm={class:"dro-axis"},Tm={class:"dro-value wcs"},wm={class:"panel-section"},Am={class:"status-row"},Rm={class:"status-val"},Cm={class:"status-row"},Lm={class:"status-row"},Pm={class:"status-val"},Dm={class:"status-row"},Um={class:"status-val"},Im={class:"status-row"},Nm={class:"status-val"},Fm={class:"panel-section"},Om={class:"gcode-modes"},Bm={class:"panel-section"},zm=Sr({__name:"CncSimPanel",emits:["connect","disconnect"],setup(i,{emit:t}){const e=t,n=[{id:"vmc",name:"VMC 三轴铣床",desc:"立式加工中心 XYZ 3轴",axes:["X","Y","Z"],kinematics:"identity",viewDistance:250,viewRotX:-60,viewRotY:45,gridSize:200},{id:"hmc",name:"HMC 卧式铣床",desc:"卧式加工中心 XYZ+B 4轴",axes:["X","Y","Z","B"],kinematics:"identity",viewDistance:300,viewRotX:-40,viewRotY:30,gridSize:250},{id:"lathe",name:"数控车床",desc:"两轴车床 X/Z + 主轴C",axes:["X","Z","C"],kinematics:"identity",viewDistance:250,viewRotX:-50,viewRotY:45,gridSize:200},{id:"5axis_ac",name:"五轴铣床 (XYZAC)",desc:"A+C 转台型五轴 Hermle风格",axes:["X","Y","Z","A","C"],kinematics:"identity",viewDistance:500,viewRotX:-55,viewRotY:25,gridSize:400},{id:"5axis_bc",name:"五轴铣床 (XYZBC)",desc:"B+C 转台型五轴",axes:["X","Y","Z","B","C"],kinematics:"identity",viewDistance:500,viewRotX:-55,viewRotY:25,gridSize:400},{id:"5axis_bcw",name:"五轴龙门铣 (XYZBCW)",desc:"龙门铣 摆头+转台",axes:["X","Y","Z","B","C"],kinematics:"5axis",viewDistance:1200,viewRotX:-50,viewRotY:35,gridSize:1e3},{id:"5axis_ab",name:"五轴铣床 (XYZAB)",desc:"双旋转工作台五轴",axes:["X","Y","Z","A","B"],kinematics:"identity",viewDistance:500,viewRotX:-55,viewRotY:0,gridSize:400},{id:"5axis_maxnc",name:"五轴铣床 (MaxNC)",desc:"MaxNC 5轴 摆头+转台",axes:["X","Y","Z","B","C"],kinematics:"maxkins",viewDistance:500,viewRotX:-45,viewRotY:30,gridSize:400},{id:"scara",name:"SCARA 机器人",desc:"水平关节机器人 4轴",axes:["J1","J2","J3","J4"],kinematics:"scara",viewDistance:500,viewRotX:-45,viewRotY:-60,gridSize:400},{id:"delta",name:"Delta 并联机器人",desc:"并联机器人 3轴",axes:["J1","J2","J3"],kinematics:"delta",viewDistance:500,viewRotX:-40,viewRotY:25,gridSize:400},{id:"puma",name:"PUMA 六轴机器人",desc:"PUMA 560 六轴工业机器人",axes:["J1","J2","J3","J4","J5","J6"],kinematics:"puma",viewDistance:150,viewRotX:-40,viewRotY:50,gridSize:150},{id:"fanuc",name:"Fanuc 六轴机器人",desc:"Fanuc 200F 六轴工业机器人",axes:["J1","J2","J3","J4","J5","J6"],kinematics:"puma",viewDistance:300,viewRotX:-40,viewRotY:50,gridSize:250},{id:"router",name:"Router 开料机",desc:"ATC 龙门开料机 XYZ 3轴",axes:["X","Y","Z"],kinematics:"identity",viewDistance:1500,viewRotX:-30,viewRotY:45,gridSize:1200}],s=n.filter(dt=>["vmc","hmc","lathe"].includes(dt.id)),r=n.filter(dt=>dt.id.startsWith("5axis")),o=n.filter(dt=>["scara","delta","puma","fanuc"].includes(dt.id)),a=n.filter(dt=>dt.id==="router"),l=mo(),c=Ii(()=>l.customKinConfigs.map(dt=>({id:`kin_${dt.id}`,name:dt.name,desc:`${dt.type} — ${dt.joints.length}轴 — 来自运动学编辑器`,axes:dt.joints.map((K,tt)=>`J${tt+1}`),kinematics:"custom_kin",viewDistance:500,viewRotX:-45,viewRotY:30,gridSize:400}))),d=Ii(()=>[...n,...c.value]),f=le("vmc"),h=Ii(()=>d.value.find(dt=>dt.id===f.value)),m=le(!1),_=le(!1),g=le(!1),p=le(0),u=le(0),w=le(100),M=le(""),L=le(["G21","G90","G17"]),I=le(1),R=le(!1),P=le(!0),j=dr({}),y=dr({}),b=le([]),Z=le(0),rt=le([{level:"info",text:"仿真器已就绪"}]),_t=le(null),D=le(null),G=le(null);let Y=null,lt=null,at=null,ot=null,F=null,ct=null,it=null,J=null,ht=null,St=null,Ct=!1,At=0,kt=0,Ot=0,Ft=0,Wt=250;Er(()=>{k(),Ut(),ae("info",`${h.value.name} 3D 视图已初始化`),e("connect")}),po(()=>{ot!==null&&cancelAnimationFrame(ot),St&&clearInterval(St),at==null||at.dispose()});function k(){const dt=h.value.axes;for(const K of dt)j[K]=0,y[K]=0}function Se(){k(),Xe(),Vt(),ae("info",`切换机型: ${h.value.name}`)}function Ut(){if(!G.value||!D.value)return;const dt=D.value,K=dt.clientWidth,tt=dt.clientHeight;Y=new Zo,Y.background=new jt(988970),Y.fog=new Rs(988970,500,2e3),lt=new $e(45,K/tt,.1,5e3),at=new Dr({canvas:G.value,antialias:!0}),at.setSize(K,tt),at.setPixelRatio(window.devicePixelRatio),Y.add(new tl(4210784,.6));const wt=new Qo(16777215,1);wt.position.set(100,200,150),Y.add(wt);const Qt=new Jo(5082879,.5,500);Qt.position.set(-100,200,-100),Y.add(Qt),Vt();const te=G.value;te.addEventListener("mousedown",Lt),te.addEventListener("mousemove",et),te.addEventListener("mouseup",pt),te.addEventListener("mouseleave",pt),te.addEventListener("wheel",Et),V(),W()}function Vt(){if(Y&&(F&&Y.remove(F),J&&Y.remove(J),ht&&Y.remove(ht),J=null,ht=null),F=new Oe,Rt(),Y){Y.add(F);const K=h.value.gridSize,tt=new el(K*2,Math.floor(K/5),1712960,1712960);Y.add(tt)}const dt=h.value;Wt=dt.viewDistance,Ot=Xi.degToRad(dt.viewRotX),Ft=Xi.degToRad(dt.viewRotY),V()}function Rt(){if(!F)return;const dt=f.value;switch(dt){case"vmc":x();break;case"hmc":$();break;case"lathe":vt();break;case"5axis_ac":case"5axis_bc":case"5axis_ab":case"5axis_maxnc":gt();break;case"5axis_bcw":xt();break;case"scara":A();break;case"delta":v();break;case"puma":case"fanuc":U();break;case"router":N();break;default:dt.startsWith("kin_")?mt():x()}}function ee(dt,K=!1){return new Cp({color:dt,wireframe:K})}function yt(dt,K,tt,wt){return new $t(new qe(dt,K,tt),ee(wt))}function E(dt,K,tt,wt){return new $t(new Dn(dt,K,tt,20),ee(wt))}function x(){const dt=yt(120,10,80,2962505);dt.position.set(0,-5,0),F.add(dt);const K=yt(80,6,60,4343636);K.position.set(0,3,0),F.add(K);const tt=yt(16,100,16,4015193);tt.position.set(-50,50,0),F.add(tt);const wt=yt(24,30,24,5082879);wt.position.set(-50,70,0),F.add(wt),ct=E(4,4,35,11388671),ct.position.set(-50,45,0),F.add(ct),it=new $t(new Cn(2,18,8),ee(16493567)),it.position.set(-50,22,0),F.add(it)}function $(){const dt=yt(160,12,100,2962505);dt.position.set(0,-6,0),F.add(dt);const K=yt(90,8,80,4343636);K.position.set(20,8,0),F.add(K);const tt=E(30,30,10,5082879);tt.position.set(20,17,0),F.add(tt);const wt=yt(16,110,16,4015193);wt.position.set(60,55,0),F.add(wt);const Qt=yt(40,20,20,5082879);Qt.position.set(40,60,0),F.add(Qt),ct=E(4,4,40,11388671),ct.rotation.z=Math.PI/2,ct.position.set(10,60,0),F.add(ct),it=new $t(new Cn(2,15,8),ee(16493567)),it.rotation.z=Math.PI/2,it.position.set(-15,60,0),F.add(it)}function vt(){const dt=yt(140,10,70,2962505);dt.position.set(0,-5,0),F.add(dt);const K=yt(30,40,50,4015193);K.position.set(-50,20,0),F.add(K),ct=E(18,18,8,5082879),ct.rotation.z=Math.PI/2,ct.position.set(-30,20,0),F.add(ct);const tt=yt(20,30,30,4015193);tt.position.set(50,15,0),F.add(tt);const wt=yt(15,15,15,4343636);wt.position.set(0,30,25),F.add(wt),it=new $t(new Cn(2,12,8),ee(16493567)),it.rotation.z=Math.PI/2,it.position.set(0,30,15),F.add(it)}function gt(){const dt=yt(150,12,120,2962505);dt.position.set(0,-6,0),F.add(dt);const K=yt(20,120,20,4015193);K.position.set(-60,60,0),F.add(K);const tt=yt(28,35,28,5082879);tt.position.set(-60,75,0),F.add(tt),ct=E(5,5,40,11388671),ct.position.set(-60,45,0),F.add(ct),it=new $t(new Cn(2,16,8),ee(16493567)),it.position.set(-60,20,0),F.add(it);const wt=yt(80,8,80,4343636);wt.position.set(0,6,0),F.add(wt);const Qt=E(35,35,12,5082879);Qt.position.set(0,16,0),F.add(Qt);const te=yt(30,25,30,5929562);te.position.set(0,35,0),F.add(te)}function xt(){const dt=yt(200,15,160,2962505);dt.position.set(0,-7,0),F.add(dt);const K=yt(140,8,120,4343636);K.position.set(0,11,0),F.add(K);const tt=yt(16,130,16,4015193);tt.position.set(-80,65,0),F.add(tt);const wt=yt(16,130,16,4015193);wt.position.set(80,65,0),F.add(wt);const Qt=yt(180,14,16,4015193);Qt.position.set(0,110,0),F.add(Qt);const te=yt(30,10,24,5082879);te.position.set(0,100,0),F.add(te);const ve=yt(16,50,16,5082879);ve.position.set(0,70,0),F.add(ve),ct=E(5,5,30,11388671),ct.position.set(0,40,0),F.add(ct),it=new $t(new Cn(2,16,8),ee(16493567)),it.position.set(0,18,0),F.add(it)}function A(){const dt=E(25,30,15,2962505);dt.position.set(0,-7,0),F.add(dt);const K=yt(100,12,20,4015193);K.position.set(50,10,0),F.add(K);const tt=E(12,12,16,5082879);tt.position.set(0,10,0),F.add(tt);const wt=yt(80,10,16,4343636);wt.position.set(90,10,0),F.add(wt);const Qt=E(10,10,14,5082879);Qt.position.set(100,10,0),F.add(Qt),it=E(4,4,20,16493567),it.position.set(130,5,0),F.add(it)}function v(){const dt=E(40,40,8,2962505);dt.position.set(0,80,0),F.add(dt);const K=E(20,20,6,5082879);K.position.set(0,20,0),F.add(K);for(let tt=0;tt<3;tt++){const wt=tt*120*Math.PI/180,Qt=Math.cos(wt)*35,te=Math.sin(wt)*35,ve=E(3,3,80,4015193);ve.position.set(Qt,40,te),F.add(ve);const ze=yt(4,50,4,4343636);ze.position.set(Qt*.5,45,te*.5),F.add(ze)}it=E(2,2,15,16493567),it.position.set(0,10,0),F.add(it)}function U(){const dt=E(20,25,12,2962505);dt.position.set(0,-6,0),F.add(dt);const K=E(16,16,15,4015193);K.position.set(0,12,0),F.add(K);const tt=yt(14,30,14,5082879);tt.position.set(0,35,0),F.add(tt);const wt=yt(10,50,10,4015193);wt.position.set(0,70,0),F.add(wt);const Qt=E(8,8,12,5082879);Qt.position.set(0,95,0),F.add(Qt);const te=yt(8,40,8,4343636);te.position.set(0,120,0),F.add(te);const ve=E(6,6,10,5082879);ve.position.set(0,142,0),F.add(ve),it=E(2,2,14,16493567),it.position.set(0,154,0),F.add(it)}function N(){const dt=yt(300,10,200,2962505);dt.position.set(0,-5,0),F.add(dt);const K=yt(280,4,180,4343636);K.position.set(0,2,0),F.add(K);const tt=yt(12,100,12,4015193);tt.position.set(-130,50,0),F.add(tt);const wt=yt(12,100,12,4015193);wt.position.set(130,50,0),F.add(wt);const Qt=yt(280,10,12,4015193);Qt.position.set(0,90,0),F.add(Qt),ct=yt(20,30,16,5082879),ct.position.set(0,75,0),F.add(ct);const te=E(4,4,25,11388671);te.position.set(0,55,0),F.add(te),it=new $t(new Cn(2,14,8),ee(16493567)),it.position.set(0,38,0),F.add(it)}function mt(){const dt=f.value.replace("kin_",""),K=l.getKinConfig(dt),tt=(K==null?void 0:K.joints.length)||6,wt=E(25,30,15,2962505);wt.position.set(0,-7,0),F.add(wt);const Qt=Math.max(20,120/tt);let te=0;const ve=10,ze=10;for(let Pe=0;Pe<tt;Pe++){const S=Math.max(5,10-Pe*.5),B=E(S,S,ze,5082879);B.position.set(0,te,0),F.add(B);const X=Qt*(1-Pe*.15),z=yt(ve,X,ze,Pe%2===0?4015193:4343636);if(z.position.set(0,te+X/2+S/2,0),F.add(z),te+=X+S,Pe===tt-1){const q=E(5,5,10,5082879);q.position.set(0,te,0),F.add(q),it=E(2,2,18,16493567),it.position.set(0,te+14,0),F.add(it)}}}function V(){if(!lt)return;const dt=Wt*Math.cos(Ot)*Math.cos(Ft),K=Wt*Math.sin(Ot),tt=Wt*Math.cos(Ot)*Math.sin(Ft);lt.position.set(dt,Math.abs(K)+50,tt),lt.lookAt(0,20,0)}function Lt(dt){Ct=!0,At=dt.clientX,kt=dt.clientY}function et(dt){if(!Ct)return;const K=dt.clientX-At,tt=dt.clientY-kt;Ft+=K*.005,Ot=Math.max(-1.4,Math.min(.1,Ot+tt*.005)),At=dt.clientX,kt=dt.clientY,V()}function pt(){Ct=!1}function Et(dt){Wt=Math.max(50,Math.min(3e3,Wt+dt.deltaY*.5)),V()}function W(){ot=requestAnimationFrame(W),at&&Y&&lt&&P.value&&at.render(Y,lt)}function Q(){const dt=h.value;Wt=dt.viewDistance,Ot=Xi.degToRad(dt.viewRotX),Ft=Xi.degToRad(dt.viewRotY),V()}function st(){F&&F.traverse(dt=>{dt instanceof $t&&(dt.material.wireframe=!dt.material.wireframe)})}function ut(){P.value=!P.value}function nt(){m.value=!m.value,ae("info",m.value?"电源已接通":"电源已断开")}function H(){m.value=!1,_.value=!1,g.value=!1,p.value=0,u.value=0,R.value=!1,St&&(clearInterval(St),St=null),ae("error","紧急停止!")}function T(){_.value=!0,g.value=!0,ae("info","循环启动")}function ft(){_.value=!1,u.value=0,St&&(clearInterval(St),St=null),ae("info","循环停止")}function Mt(){k(),Ee(),ae("info","各轴已回零")}function It(dt,K){if(!m.value)return;const tt=f.value.includes("5axis")||f.value==="router"?1:.5;j[dt]=Math.round((j[dt]+K*tt)*1e3)/1e3,Ee()}function Pt(){}function ie(dt){const K=dt.split(`
`),tt=[];let wt="G01",Qt=100,te=!0,ve=j.X||0,ze=j.Y||0,Pe=j.Z||0;for(const S of K){const B=S.split(";")[0].split("//")[0].trim();if(!B)continue;const X=B.toUpperCase(),z={},q=X.matchAll(/([A-Z])([-+]?\d*\.?\d+)/g);for(const zt of q)z[zt[1]]=parseFloat(zt[2]);const Tt=X.match(/G(\d+)/g);if(Tt)for(const zt of Tt)switch(parseInt(zt.substring(1))){case 0:wt="G00";break;case 1:wt="G01";break;case 2:wt="G02";break;case 3:wt="G03";break;case 17:L.value.push("G17");break;case 18:L.value.push("G18");break;case 19:L.value.push("G19");break;case 20:ae("info","英制模式");break;case 21:ae("info","公制模式 (mm)");break;case 28:ve=0,ze=0,Pe=0;break;case 90:te=!0;break;case 91:te=!1;break;case 92:z.X!==void 0&&(y.X=ve-z.X),z.Y!==void 0&&(y.Y=ze-z.Y),z.Z!==void 0&&(y.Z=Pe-z.Z);break}const Dt=X.match(/M(\d+)/g);if(Dt)for(const zt of Dt)switch(parseInt(zt.substring(1))){case 0:ae("info","M0 程序暂停");break;case 1:ae("info","M1 选择性暂停");break;case 2:_.value=!1,ae("info","M2 程序结束");break;case 30:g.value=!1,_.value=!1,ae("info","M30 程序结束并回零");break;case 3:g.value=!0,ae("info","主轴正转");break;case 4:g.value=!0,ae("info","主轴反转");break;case 5:g.value=!1,ae("info","主轴停止");break;case 6:z.T!==void 0&&(I.value=Math.round(z.T)),ae("info",`换刀 T${I.value}`);break;case 7:R.value=!0,ae("info","M7 切削液开 (雾)");break;case 8:R.value=!0,ae("info","M8 切削液开");break;case 9:R.value=!1,ae("info","M9 切削液关");break;case 98:ae("info","M98 子程序调用");break;case 99:ae("info","M99 子程序返回");break}z.S!==void 0&&(p.value=Math.round(z.S)),z.T!==void 0&&(I.value=Math.round(z.T)),z.F!==void 0&&(Qt=z.F);let Bt=z.X!==void 0?te?z.X:ve+z.X:ve,Gt=z.Y!==void 0?te?z.Y:ze+z.Y:ze,Yt=z.Z!==void 0?te?z.Z:Pe+z.Z:Pe;if(z.X!==void 0||z.Y!==void 0||z.Z!==void 0||wt==="G02"||wt==="G03"){if(wt==="G02"||wt==="G03"){const zt=z.R||10,Ht=20,fe=wt==="G02"?1:-1;for(let xe=1;xe<=Ht;xe++){const me=xe/Ht*Math.PI*.5*fe,rn=ve+(Bt-ve)*(xe/Ht)+Math.sin(me)*zt*.3,ce=ze+(Gt-ze)*(xe/Ht)+Math.cos(me)*zt*.3;tt.push({x:rn,y:ce,z:Pe+(Yt-Pe)*(xe/Ht),feed:Qt,spindle:g.value})}}else tt.push({x:Bt,y:Gt,z:Yt,feed:Qt,spindle:g.value});ve=Bt,ze=Gt,Pe=Yt}}b.value=tt.map(S=>({x:S.x,y:S.y,z:S.z})),ae("info",`G 代码解析完成，${tt.length} 个路径点，开始动画执行...`),se(tt)}function se(dt){St&&clearInterval(St),Z.value=0;const K=[];St=setInterval(()=>{if(Z.value>=dt.length){clearInterval(St),St=null,_.value=!1,u.value=0,ae("info","仿真执行完成");return}const tt=dt[Z.value];j.X=tt.x,j.Y=tt.y,j.Z=tt.z,g.value=tt.spindle,u.value=tt.feed*(w.value/100),Z.value++,Ee(),K.push(new O(tt.x,tt.y,tt.z)),ge(K)},50)}function ge(dt){if(!Y||(ht&&Y.remove(ht),dt.length<2))return;const K=new sn().setFromPoints(dt),tt=new Ur({color:65416,linewidth:2});ht=new jo(K,tt),Y.add(ht)}function Ee(){if(!F)return;h.value.axes;const dt=j.X||0,K=j.Y||0,tt=j.Z||0,wt=f.value;if(wt==="vmc"||wt==="hmc")it&&(it.position.x=(wt==="vmc"?-50:0)+dt,it.position.y=22+K,it.position.z=tt),ct&&(ct.position.x=(wt==="vmc"?-50:-15)+dt,ct.position.y=45+K,ct.position.z=tt);else if(wt==="lathe")it&&(it.position.x=dt,it.position.z=15+tt);else if(wt.startsWith("5axis"))it&&(it.position.x=-60+dt,it.position.y=20+K,it.position.z=tt);else if(wt==="5axis_bcw")it&&(it.position.x=dt,it.position.y=18+tt,it.position.z=K);else if(wt==="router")it&&(it.position.x=dt,it.position.y=38+tt,it.position.z=K);else if(wt.startsWith("kin_")&&it){const Qt=(j.J1||0)*Math.PI/180;it.position.x=Math.sin(Qt)*80,it.position.z=Math.cos(Qt)*80,it.position.y=150+(j.J2||0)*.5}}function re(){if(!M.value.trim()){ae("warning","请输入 G 代码");return}Xe(),ie(M.value)}function Ae(){const dt=f.value;dt==="scara"||dt==="delta"||dt==="puma"||dt==="fanuc"||dt.startsWith("kin_")?M.value=`; 示例关节运动
G90 G21
G0 J1=0 J2=0 J3=0 J4=0
G1 J1=45 F200
G1 J2=30 F150
G1 J1=0 J2=0 F300
M30`:dt==="lathe"?M.value=`; 示例车削
G90 G21 G18
G0 X20 Z0
G1 X0 Z-30 F100
G1 X20 Z-60 F150
G1 X25 Z-60
G0 X30 Z0
M30`:M.value=`; 示例铣削路径
G90 G21 G17
G0 X0 Y0 Z10
G1 Z-2 F100
M3 S3000
G1 X50 F300
G1 Y40
G1 X0
G1 Y0
G2 X50 Y40 R30 F200
M5
G0 Z10
G0 X0 Y0
M30`}function Xe(){b.value=[],Z.value=0,St&&(clearInterval(St),St=null),J&&Y&&(Y.remove(J),J=null),ht&&Y&&(Y.remove(ht),ht=null)}function ae(dt,K){rt.value.push({level:dt,text:K}),rt.value.length>100&&rt.value.shift(),il(()=>{_t.value&&(_t.value.scrollTop=_t.value.scrollHeight)})}return(dt,K)=>(Xt(),qt("div",Dp,[C("div",Up,[C("div",Ip,[C("div",Np,[K[5]||(K[5]=C("div",{class:"section-title"},"机型选择",-1)),Ye(C("select",{class:"machine-select","onUpdate:modelValue":K[0]||(K[0]=tt=>f.value=tt),onChange:Se},[C("optgroup",Fp,[(Xt(!0),qt(Ne,null,Fe(Vi(s),tt=>(Xt(),qt("option",{key:tt.id,value:tt.id},Nt(tt.name),9,Op))),128))]),C("optgroup",Bp,[(Xt(!0),qt(Ne,null,Fe(Vi(r),tt=>(Xt(),qt("option",{key:tt.id,value:tt.id},Nt(tt.name),9,zp))),128))]),C("optgroup",Gp,[(Xt(!0),qt(Ne,null,Fe(Vi(o),tt=>(Xt(),qt("option",{key:tt.id,value:tt.id},Nt(tt.name),9,Hp))),128))]),C("optgroup",kp,[(Xt(!0),qt(Ne,null,Fe(Vi(a),tt=>(Xt(),qt("option",{key:tt.id,value:tt.id},Nt(tt.name),9,Vp))),128))]),c.value.length>0?(Xt(),qt("optgroup",Wp,[(Xt(!0),qt(Ne,null,Fe(c.value,tt=>(Xt(),qt("option",{key:tt.id,value:tt.id},Nt(tt.name),9,Xp))),128))])):vi("",!0)],544),[[sl,f.value]]),C("div",Yp,Nt(h.value.desc),1),C("div",qp,[K[4]||(K[4]=ye(" 轴: ",-1)),(Xt(!0),qt(Ne,null,Fe(h.value.axes,tt=>(Xt(),qt("span",{key:tt,class:"axis-tag"},Nt(tt),1))),128))])]),C("div",$p,[K[8]||(K[8]=C("div",{class:"section-title"},"电源控制",-1)),C("div",Zp,[C("button",{class:un(["ctrl-btn",{active:m.value}]),onClick:nt},[K[6]||(K[6]=C("span",{class:"material-symbols-outlined"},"power_settings_new",-1)),ye(" "+Nt(m.value?"上电":"断电"),1)],2),C("button",{class:"ctrl-btn estop",onClick:H},[...K[7]||(K[7]=[C("span",{class:"material-symbols-outlined"},"emergency",-1),ye(" 急停 ",-1)])])])]),C("div",jp,[K[12]||(K[12]=C("div",{class:"section-title"},"运行控制",-1)),C("div",Kp,[C("button",{class:"ctrl-btn",disabled:!m.value,onClick:T},[...K[9]||(K[9]=[C("span",{class:"material-symbols-outlined"},"play_arrow",-1),ye(" 循环启动 ",-1)])],8,Jp),C("button",{class:"ctrl-btn",disabled:!m.value,onClick:ft},[...K[10]||(K[10]=[C("span",{class:"material-symbols-outlined"},"stop",-1),ye(" 停止 ",-1)])],8,Qp)]),C("div",tm,[C("button",{class:"ctrl-btn",disabled:!m.value,onClick:Mt},[...K[11]||(K[11]=[C("span",{class:"material-symbols-outlined"},"home",-1),ye(" 回零 ",-1)])],8,em)])]),C("div",nm,[K[15]||(K[15]=C("div",{class:"section-title"},"手动 jog",-1)),C("div",im,[(Xt(!0),qt(Ne,null,Fe(h.value.axes,tt=>{var wt;return Xt(),qt("div",{key:tt,class:"jog-row"},[C("span",sm,Nt(tt),1),C("button",{class:"jog-btn",disabled:!m.value,onMousedown:Qt=>It(tt,-1),onMouseup:Pt,onMouseleave:Pt},[...K[13]||(K[13]=[C("span",{class:"material-symbols-outlined"},"remove",-1)])],40,rm),C("span",am,Nt(((wt=j[tt])==null?void 0:wt.toFixed(3))||"0.000"),1),C("button",{class:"jog-btn",disabled:!m.value,onMousedown:Qt=>It(tt,1),onMouseup:Pt,onMouseleave:Pt},[...K[14]||(K[14]=[C("span",{class:"material-symbols-outlined"},"add",-1)])],40,om)])}),128))])]),C("div",lm,[C("div",cm,"进给倍率 "+Nt(w.value)+"%",1),Ye(C("input",{type:"range",class:"feed-slider",min:"0",max:"200","onUpdate:modelValue":K[1]||(K[1]=tt=>w.value=tt)},null,512),[[Sn,w.value,void 0,{number:!0}]])]),C("div",um,[C("div",dm,"主轴转速 "+Nt(p.value)+" RPM",1),Ye(C("input",{type:"range",class:"feed-slider",min:"0",max:"8000",step:"100","onUpdate:modelValue":K[2]||(K[2]=tt=>p.value=tt)},null,512),[[Sn,p.value,void 0,{number:!0}]])]),C("div",hm,[K[18]||(K[18]=C("div",{class:"section-title"},"加载 G 代码",-1)),Ye(C("textarea",{class:"gcode-input","onUpdate:modelValue":K[3]||(K[3]=tt=>M.value=tt),placeholder:`在此输入 G 代码...
G90 G21 G17
G0 X0 Y0 Z10
G1 Z-5 F200
M3 S3000
G1 X50 F300
M5
G0 Z10`,rows:"10"},null,512),[[Sn,M.value]]),C("div",{class:"control-row",style:{"margin-top":"4px"}},[C("button",{class:"ctrl-btn load-btn",onClick:re},[...K[16]||(K[16]=[C("span",{class:"material-symbols-outlined"},"play_circle",-1),ye(" 加载运行 ",-1)])]),C("button",{class:"ctrl-btn",onClick:Ae},[...K[17]||(K[17]=[C("span",{class:"material-symbols-outlined"},"description",-1),ye(" 示例 ",-1)])])])])]),C("div",fm,[C("div",pm,[C("span",null,Nt(h.value.name)+" — 3D 视图",1),C("div",mm,[C("button",{class:"view-btn",onClick:Q,title:"重置视图"},[...K[19]||(K[19]=[C("span",{class:"material-symbols-outlined"},"center_focus_strong",-1)])]),C("button",{class:"view-btn",onClick:st,title:"线框模式"},[...K[20]||(K[20]=[C("span",{class:"material-symbols-outlined"},"grid_on",-1)])]),C("button",{class:"view-btn",onClick:ut,title:"暂停/继续"},[C("span",_m,Nt(P.value?"pause":"play_arrow"),1)])])]),C("div",{class:"viewport-3d",ref_key:"viewportContainer",ref:D},[C("canvas",{ref_key:"threeCanvas",ref:G},null,512)],512),b.value.length>0?(Xt(),qt("div",gm,[C("span",null,"路径点: "+Nt(Z.value)+" / "+Nt(b.value.length),1),g.value?(Xt(),qt("span",vm," ⚙ "+Nt(p.value)+" RPM ",1)):vi("",!0),C("button",{class:"clear-btn",onClick:Xe},"清除路径")])):vi("",!0)]),C("div",xm,[C("div",Mm,[K[21]||(K[21]=C("div",{class:"section-title"},"机床坐标 (MCS)",-1)),(Xt(!0),qt(Ne,null,Fe(h.value.axes,tt=>(Xt(),qt("div",{class:"dro-row",key:tt},[C("span",Sm,Nt(tt),1),C("span",Em,Nt((j[tt]||0).toFixed(3)),1)]))),128))]),C("div",ym,[K[22]||(K[22]=C("div",{class:"section-title"},"工件坐标 (WCS)",-1)),(Xt(!0),qt(Ne,null,Fe(h.value.axes,tt=>(Xt(),qt("div",{class:"dro-row",key:tt},[C("span",bm,Nt(tt),1),C("span",Tm,Nt(((j[tt]||0)-(y[tt]||0)).toFixed(3)),1)]))),128))]),C("div",wm,[K[28]||(K[28]=C("div",{class:"section-title"},"状态",-1)),C("div",Am,[K[23]||(K[23]=C("span",{class:"status-label"},"模式",-1)),C("span",Rm,Nt(_.value?"自动":"手动"),1)]),C("div",Cm,[K[24]||(K[24]=C("span",{class:"status-label"},"主轴",-1)),C("span",{class:un(["status-val",{"spindle-on":g.value}])},Nt(g.value?p.value+" RPM":"停止"),3)]),C("div",Lm,[K[25]||(K[25]=C("span",{class:"status-label"},"进给",-1)),C("span",Pm,Nt(u.value.toFixed(0))+" mm/min",1)]),C("div",Dm,[K[26]||(K[26]=C("span",{class:"status-label"},"刀具",-1)),C("span",Um,"T"+Nt(I.value),1)]),C("div",Im,[K[27]||(K[27]=C("span",{class:"status-label"},"冷却",-1)),C("span",Nm,Nt(R.value?"开":"关"),1)])]),C("div",Fm,[K[29]||(K[29]=C("div",{class:"section-title"},"模态代码",-1)),C("div",Om,[(Xt(!0),qt(Ne,null,Fe(L.value,tt=>(Xt(),qt("span",{class:"gmode",key:tt},Nt(tt),1))),128))])]),C("div",Bm,[K[30]||(K[30]=C("div",{class:"section-title"},"消息",-1)),C("div",{class:"message-area",ref_key:"messageArea",ref:_t},[(Xt(!0),qt(Ne,null,Fe(rt.value,(tt,wt)=>(Xt(),qt("div",{key:wt,class:un(["msg-item","msg-"+tt.level])},Nt(tt.text),3))),128))],512)])])])]))}}),Gm=yr(zm,[["__scopeId","data-v-4d9b58cc"]]),Hm={class:"factory-sim"},km={class:"fs-toolbar"},Vm={class:"toolbar-group"},Wm={key:0,class:"toolbar-group"},Xm={class:"tb-selection-info"},Ym={class:"fs-body"},qm={class:"fs-sidebar"},$m={class:"sidebar-section"},Zm={class:"model-search"},jm={class:"equip-category"},Km={class:"material-symbols-outlined toggle-arrow"},Jm={class:"cat-count"},Qm={class:"cat-items"},t0=["onClick"],e0={class:"model-thumb"},n0={class:"material-symbols-outlined"},i0={class:"model-lib-info"},s0={class:"model-lib-name"},r0={class:"model-lib-type"},a0={class:"equip-category"},o0={class:"material-symbols-outlined toggle-arrow"},l0={class:"cat-count"},c0={class:"cat-items"},u0=["onClick"],d0={class:"model-thumb"},h0={class:"material-symbols-outlined"},f0={class:"model-lib-info"},p0={class:"model-lib-name"},m0={class:"model-lib-type"},_0={class:"equip-category"},g0={class:"material-symbols-outlined toggle-arrow"},v0={class:"cat-count"},x0={class:"cat-items"},M0=["onClick"],S0={class:"model-thumb"},E0={class:"material-symbols-outlined"},y0={class:"model-lib-info"},b0={class:"model-lib-name"},T0={class:"model-lib-type"},w0={class:"equip-category"},A0={class:"material-symbols-outlined toggle-arrow"},R0={class:"cat-count"},C0={class:"cat-items"},L0=["onClick"],P0={class:"model-thumb"},D0={class:"material-symbols-outlined"},U0={class:"model-lib-info"},I0={class:"model-lib-name"},N0={class:"model-lib-type"},F0={class:"sidebar-section",style:{"border-top":"1px solid var(--outline-variant)"}},O0={class:"section-header"},B0={class:"scene-equip-list"},z0=["onClick"],G0={class:"material-symbols-outlined eq-icon"},H0={class:"eq-name"},k0=["onClick"],V0={class:"fs-viewport"},W0={class:"viewport-info"},X0={key:0,class:"viewport-hint"},Y0={key:0,class:"fs-props"},q0={class:"props-header"},$0={class:"props-body"},Z0={class:"prop-section"},j0={class:"prop-row"},K0={class:"prop-row"},J0={class:"prop-row"},Q0={class:"prop-section"},t_={class:"prop-row"},e_={class:"prop-section"},n_={class:"prop-row"},i_={class:"prop-section"},s_={key:1,class:"fs-props fs-props-empty"},r_=Sr({__name:"WorldSimPanel",emits:["connect","disconnect"],setup(i,{emit:t}){const e=mo(),n=[{id:"vmc",name:"VMC 立铣",category:"machining",icon:"precision_manufacturing",color:4015193,width:2.5,height:2.8,depth:2},{id:"hmc",name:"HMC 卧铣",category:"machining",icon:"precision_manufacturing",color:4015193,width:3,height:2.5,depth:2.5},{id:"lathe",name:"数控车床",category:"machining",icon:"precision_manufacturing",color:4343636,width:3,height:1.8,depth:1.5},{id:"5axis",name:"五轴加工中心",category:"machining",icon:"precision_manufacturing",color:5082879,width:3.5,height:3,depth:3},{id:"router",name:"开料机",category:"machining",icon:"precision_manufacturing",color:2962505,width:5,height:2,depth:3.5},{id:"grinder",name:"磨床",category:"machining",icon:"precision_manufacturing",color:4015193,width:2,height:1.6,depth:1.5},{id:"robot6",name:"6轴机器人",category:"robot",icon:"precision_manufacturing",color:16739125,width:.8,height:1.8,depth:.8},{id:"scara",name:"SCARA 机器人",category:"robot",icon:"precision_manufacturing",color:5025616,width:.7,height:1.2,depth:.7},{id:"delta",name:"Delta 并联",category:"robot",icon:"view_in_ar",color:2201331,width:.6,height:1.5,depth:.6},{id:"cobot",name:"协作机器人",category:"robot",icon:"precision_manufacturing",color:16750592,width:.5,height:1.4,depth:.5},{id:"conveyor",name:"传送带",category:"logistics",icon:"moving",color:6323595,width:6,height:.8,depth:.6},{id:"agv",name:"AGV 小车",category:"logistics",icon:"local_shipping",color:2201331,width:1,height:.5,depth:.6},{id:"forklift",name:"叉车",category:"logistics",icon:"local_shipping",color:16750592,width:1.5,height:2,depth:1},{id:"pallet",name:"托盘货架",category:"logistics",icon:"warehouse",color:7951688,width:1.2,height:2.5,depth:1},{id:"pillar",name:"立柱",category:"infra",icon:"square_foot",color:10395294,width:.4,height:5,depth:.4},{id:"workbench",name:"工作台",category:"infra",icon:"table_restaurant",color:9268835,width:2,height:.9,depth:1},{id:"cabinet",name:"电气柜",category:"infra",icon:"view_in_ar",color:4545124,width:.8,height:2,depth:.6},{id:"safety_fence",name:"安全围栏",category:"infra",icon:"fence",color:16771899,width:3,height:1.8,depth:.1}],s=Ii(()=>e.allRobotTypes.map(A=>({id:`kin_${A.id}`,name:A.name,category:"robot",icon:"precision_manufacturing",color:15277667,width:.8,height:1.8,depth:.8}))),r=Ii(()=>[...n,...s.value]),o=le("interior"),a=le(!0),l=le(!0),c=le(""),d=dr({machining:!0,robot:!0,logistics:!1,infra:!1}),f=le([]),h=le(null),m=le(null);let _=null,g=null,p=null,u=null,w=null,M=null,L=null,I=null,R=null,P=null,j=!1,y=!1,b=0,Z=0,rt=Math.PI/4,_t=Math.PI/3,D=30,G=new O(0,2,0);function Y(A){d[A]=!d[A]}function lt(A){const v=c.value.toLowerCase();return r.value.filter(U=>U.category===A&&(!v||U.name.toLowerCase().includes(v)))}Er(()=>{at()}),po(()=>{u!==null&&cancelAnimationFrame(u),_==null||_.dispose()});function at(){if(!m.value)return;const A=m.value,v=A.parentElement,U=v.clientWidth,N=v.clientHeight;g=new Zo,g.background=new jt(8900331),g.fog=new Rs(8900331,80,200),p=new $e(50,U/N,.1,500),_=new Dr({canvas:A,antialias:!0}),_.setSize(U,N),_.setPixelRatio(window.devicePixelRatio),_.shadowMap.enabled=!0,_.shadowMap.type=go,g.add(new tl(16777215,.5));const mt=new Qo(16774368,1.2);mt.position.set(30,40,20),mt.castShadow=!0,mt.shadow.mapSize.set(2048,2048),mt.shadow.camera.near=.5,mt.shadow.camera.far=150,mt.shadow.camera.left=-50,mt.shadow.camera.right=50,mt.shadow.camera.top=50,mt.shadow.camera.bottom=-50,g.add(mt);const V=new Jo(16775400,.6,60);V.position.set(0,8,0),g.add(V),F(),A.addEventListener("mousedown",E),A.addEventListener("mousemove",x),A.addEventListener("mouseup",$),A.addEventListener("mouseleave",$),A.addEventListener("wheel",vt),A.addEventListener("contextmenu",Lt=>Lt.preventDefault()),yt(),xt(),window.addEventListener("resize",ot)}function ot(){if(!m.value||!_||!p)return;const A=m.value.parentElement,v=A.clientWidth,U=A.clientHeight;p.aspect=v/U,p.updateProjectionMatrix(),_.setSize(v,U)}function F(){g&&(w=new Oe,I=new Oe,R=new Oe,L=new Oe,M=new Oe,P=new Oe,ct(),it(),St(),w.add(I),w.add(R),w.add(L),w.add(M),w.add(P),g.add(w))}function ct(){if(!I)return;const A=new ke(200,200),v=new de({color:8172354,roughness:.9}),U=new $t(A,v);U.rotation.x=-Math.PI/2,U.position.y=-.01,U.receiveShadow=!0,U.name="ground",I.add(U);const N=new ke(40,30),mt=new de({color:12434877,roughness:.7}),V=new $t(N,mt);V.rotation.x=-Math.PI/2,V.position.y=.01,V.receiveShadow=!0,V.name="floor",I.add(V);const Lt=new el(200,40,6856504,6856504);Lt.position.y=.02,Lt.material.opacity=.15,Lt.material.transparent=!0,I.add(Lt)}function it(){if(!R)return;const A=new ke(8,80),v=new de({color:4342338,roughness:.8}),U=new $t(A,v);U.rotation.x=-Math.PI/2,U.position.set(-25,.03,0),U.receiveShadow=!0,R.add(U);const N=U.clone();N.rotation.z=Math.PI/2,N.position.set(0,.03,-25),R.add(N);const mt=new ke(.2,78),V=new de({color:16771899}),Lt=new $t(mt,V);Lt.rotation.x=-Math.PI/2,Lt.position.set(-25,.04,0),R.add(Lt);const et=Lt.clone();et.rotation.z=Math.PI/2,et.position.set(0,.04,-25),R.add(et);const pt=[[-35,10],[-35,-10],[-35,20],[-35,-20],[-35,30],[-35,-30],[25,-15],[25,-25],[30,-15],[30,-25],[25,15],[25,25],[30,15],[30,25],[-15,-18],[-5,-18],[5,-18],[15,-18]];for(const[Et,W]of pt)R.add(J(Et,W));for(let Et=0;Et<6;Et++){const W=new ke(2.5,5),Q=new de({color:6381921,roughness:.8}),st=new $t(W,Q);st.rotation.x=-Math.PI/2,st.position.set(25+Et*3,.03,-15),R.add(st)}for(let Et=-40;Et<=40;Et+=10)R.add(ht(Et,35)),R.add(ht(Et,-35));for(let Et=-35;Et<=35;Et+=10)R.add(ht(40,Et)),R.add(ht(-40,Et))}function J(A,v){const U=new Oe,N=new Dn(.15,.2,3,8),mt=new de({color:6111287}),V=new $t(N,mt);V.position.set(0,1.5,0),V.castShadow=!0,U.add(V);const Lt=new Ir(1.5,8,6),et=new de({color:3046706}),pt=new $t(Lt,et);return pt.position.set(0,4,0),pt.castShadow=!0,U.add(pt),U.position.set(A,0,v),U}function ht(A,v){const U=new Oe,N=new Dn(.05,.05,2.5,6),mt=new de({color:10395294}),V=new $t(N,mt);return V.position.set(0,1.25,0),U.add(V),U.position.set(A,0,v),U}function St(){if(!L||!M)return;const A=40,v=30,U=8;new de({color:14737632,roughness:.6,side:Be});const N=At(A,U,14737632);N.position.set(0,U/2,v/2),L.add(N);const mt=Ct(A,U,14606046);mt.position.set(0,U/2,-v/2),L.add(mt);const V=kt(v,U,15263976);V.rotation.y=Math.PI/2,V.position.set(-A/2,U/2,0),L.add(V);const Lt=kt(v,U,15263976);Lt.rotation.y=Math.PI/2,Lt.position.set(A/2,U/2,0),L.add(Lt);const et=new qe(A+1,.3,v+1),pt=new de({color:7901340,roughness:.5}),Et=new $t(et,pt);Et.position.y=U,Et.castShadow=!0,M.add(Et);for(let Q=-A/2+5;Q<=A/2;Q+=10){const st=new qe(.2,.3,v),ut=new de({color:5533306}),nt=new $t(st,ut);nt.position.set(Q,U-.3,0),M.add(nt)}for(let Q=-15;Q<=15;Q+=10)for(let st=-10;st<=10;st+=10){const ut=new qe(1.5,.1,.3),nt=new de({color:16775620,emissive:16775620,emissiveIntensity:.3}),H=new $t(ut,nt);H.position.set(Q,U-.5,st),L.add(H)}for(let Q=-15;Q<=15;Q+=10)for(let st of[-10,10]){const ut=new Dn(.2,.25,U,8),nt=new de({color:9479342}),H=new $t(ut,nt);H.position.set(Q,U/2,st),H.castShadow=!0,L.add(H)}const W=new de({color:16635957});for(let Q of[-5,5]){const st=new ke(A-2,.15),ut=new $t(st,W);ut.rotation.x=-Math.PI/2,ut.position.set(0,.05,Q),L.add(ut)}}function Ct(A,v,U){const N=new ke(A,v),mt=new de({color:U,side:Be,transparent:!0,opacity:.85});return new $t(N,mt)}function At(A,v,U){const N=new Oe,mt=6,V=5,Lt=(A-mt)/2;{const nt=new ke(Lt,v),H=new de({color:U,side:Be,transparent:!0,opacity:.85}),T=new $t(nt,H);T.position.set(-A/2+Lt/2,0,0),N.add(T)}const et=(A-mt)/2;{const nt=new ke(et,v),H=new de({color:U,side:Be,transparent:!0,opacity:.85}),T=new $t(nt,H);T.position.set(A/2-et/2,0,0),N.add(T)}const pt=v-V;{const nt=new ke(mt,pt),H=new de({color:U,side:Be,transparent:!0,opacity:.85}),T=new $t(nt,H);T.position.set(0,V/2+pt/2,0),N.add(T)}const Et=new de({color:4545124}),W=.15,Q=new $t(new qe(W,V,W),Et);Q.position.set(-mt/2,-v/2+V/2,0),N.add(Q);const st=Q.clone();st.position.x=mt/2,N.add(st);const ut=new $t(new qe(mt,W,W),Et);return ut.position.set(0,-v/2+V,0),N.add(ut),N}function kt(A,v,U){const N=new Oe,mt=new de({color:U,side:Be,transparent:!0,opacity:.85}),V=new de({color:8445674,transparent:!0,opacity:.4,side:Be}),Lt=new ke(A,v),et=new $t(Lt,mt);N.add(et);const pt=2.5,Et=2,W=3,Q=Math.floor(A/5),st=-(Q-1)*5/2;for(let ut=0;ut<Q;ut++){const nt=new ke(pt,Et),H=new $t(nt,V);H.position.set(st+ut*5,W,.01),N.add(H);const T=new de({color:4545124}),ft=.08;for(const Mt of[-Et/2,Et/2]){const It=new $t(new qe(pt+ft*2,ft,ft),T);It.position.set(st+ut*5,W+Mt,.02),N.add(It)}for(const Mt of[-pt/2,pt/2]){const It=new $t(new qe(ft,Et,ft),T);It.position.set(st+ut*5+Mt,W,.02),N.add(It)}}return N}function Ot(A){const U={uid:`eq_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,libId:A.id,name:A.name,icon:A.icon,color:A.color,posX:(Math.random()-.5)*20,posY:A.height/2,posZ:(Math.random()-.5)*14,rotY:0,scale:1,width:A.width,height:A.height,depth:A.depth};U.posY=0,f.value.push(U),Ft(U),k(U)}function Ft(A){if(!P)return;const v=new Oe,U=A.color,N=(W,Q=.6)=>new de({color:W,roughness:Q}),mt=W=>N(W,.35),V=N(2829099,.7);N(16119285,.5);const Lt=new de({color:9489145,transparent:!0,opacity:.4,roughness:.1});function et(W,Q,st,ut){const nt=new $t(new qe(W,Q,st),ut);return nt.castShadow=!0,nt.receiveShadow=!0,nt}function pt(W,Q,st,ut,nt=16){const H=new $t(new Dn(W,Q,st,nt),ut);return H.castShadow=!0,H}switch(A.libId){case"vmc":{const W=et(2.5,.3,2,V);W.position.y=.15,v.add(W);const Q=et(1.6,.15,1.4,mt(6381921));Q.position.set(0,.45,0),v.add(Q);const st=et(.4,2.4,.4,N(U));st.position.set(-.8,1.35,0),v.add(st);const ut=et(.6,.6,.6,N(1402304));ut.position.set(-.8,1.6,0),v.add(ut);const nt=pt(.08,.08,.7,mt(3276));nt.position.set(-.8,1.05,0),v.add(nt);const H=pt(.03,.02,.3,mt(16755456));H.position.set(-.8,.55,0),v.add(H);const T=et(1,1.8,.05,Lt);T.position.set(-.1,1.2,1.02),v.add(T);const ft=et(.3,.5,.08,N(819));ft.position.set(.9,1,1.05),v.add(ft);const Mt=et(.22,.15,.02,N(1793568));Mt.position.set(.9,1.15,1.1),v.add(Mt);break}case"hmc":{const W=et(3,.35,2.5,V);W.position.y=.175,v.add(W);const Q=et(1.4,.15,1.4,mt(6381921));Q.position.set(.5,.55,0),v.add(Q);const st=pt(.5,.5,.2,N(1402304));st.position.set(.5,.75,0),v.add(st);const ut=et(.5,2.5,.5,N(U));ut.position.set(-1,1.4,0),v.add(ut);const nt=et(.8,.5,.5,N(1402304));nt.position.set(-.3,1.6,0),v.add(nt);const H=pt(.08,.08,.8,mt(3276));H.rotation.z=Math.PI/2,H.position.set(.3,1.6,0),v.add(H);const T=pt(.03,.02,.25,mt(16755456));T.rotation.z=Math.PI/2,T.position.set(.85,1.6,0),v.add(T);const ft=et(1.4,2,.05,Lt);ft.position.set(.3,1.2,1.28),v.add(ft);break}case"lathe":{const W=et(3,.25,1.5,V);W.position.y=.125,v.add(W);const Q=et(.6,.8,1,N(U));Q.position.set(-1.1,.65,0),v.add(Q);const st=pt(.35,.35,.15,mt(2184));st.rotation.z=Math.PI/2,st.position.set(-.7,.65,0),v.add(st);const ut=et(.4,.6,.6,N(U));ut.position.set(1.1,.55,0),v.add(ut);const nt=et(.3,.3,.3,N(1402304));nt.position.set(0,.75,.45),v.add(nt);const H=et(.05,.03,.25,mt(16755456));H.position.set(0,.75,.65),v.add(H);const T=et(2.6,.04,.06,mt(2730));T.position.set(0,.38,.35),v.add(T);const ft=T.clone();ft.position.z=-.35,v.add(ft);const Mt=et(1.2,1,.05,Lt);Mt.position.set(0,.7,.78),v.add(Mt);break}case"5axis":{const W=et(3.5,.3,3,V);W.position.y=.15,v.add(W);const Q=et(.5,2.6,.5,N(U));Q.position.set(-1.3,1.6,0),v.add(Q);const st=et(.7,.7,.7,N(1402304));st.position.set(-1.3,2.2,0),v.add(st);const ut=pt(.09,.09,.8,mt(3276));ut.position.set(-1.3,1.5,0),v.add(ut);const nt=pt(.55,.55,.25,N(1402304));nt.position.set(.3,.55,0),v.add(nt);const H=et(.6,.5,.6,N(5025616));H.position.set(.3,1.05,0),v.add(H);const T=pt(.03,.02,.3,mt(16755456));T.position.set(-1.3,.85,0),v.add(T);break}case"router":{const W=et(5,.2,3.5,V);W.position.y=.1,v.add(W);const Q=et(4.8,.08,3.3,N(7951688));Q.position.y=.24,v.add(Q);const st=et(.25,2,.25,N(U));st.position.set(-2.2,1.2,0),v.add(st);const ut=et(.25,2,.25,N(U));ut.position.set(2.2,1.2,0),v.add(ut);const nt=et(4.6,.2,.3,N(U));nt.position.set(0,2.1,0),v.add(nt);const H=et(.35,.5,.35,N(1402304));H.position.set(0,1.75,0),v.add(H);const T=pt(.06,.06,.4,mt(3276));T.position.set(0,1.3,0),v.add(T);const ft=pt(.02,.015,.2,mt(16755456));ft.position.set(0,.95,0),v.add(ft);break}case"grinder":{const W=et(2,.2,1.5,V);W.position.y=.1,v.add(W);const Q=et(1.4,.1,1.2,mt(6381921));Q.position.y=.3,v.add(Q);const st=pt(.4,.4,.15,N(12986408));st.position.set(0,.9,-.3),v.add(st);const ut=pt(.35,.35,.08,N(10395294));ut.position.set(0,.9,-.15),v.add(ut);const nt=et(.3,1.5,.3,N(U));nt.position.set(0,.95,-.45),v.add(nt);break}case"robot6":{const W=pt(.25,.3,.2,V);W.position.y=.1,v.add(W);const Q=pt(.18,.18,.12,N(16739125));Q.position.y=.26,v.add(Q);const st=pt(.12,.12,.15,N(16739125));st.position.y=.4,v.add(st);const ut=et(.1,.55,.1,N(16747088));ut.position.set(0,.75,0),v.add(ut);const nt=pt(.09,.09,.1,N(16739125));nt.position.set(0,1.05,0),v.add(nt);const H=et(.08,.4,.08,N(16747088));H.position.set(0,1.3,0),v.add(H);const T=pt(.06,.06,.08,N(16739125));T.position.set(0,1.55,0),v.add(T);const ft=pt(.04,.04,.04,mt(2730));ft.position.set(0,1.62,0),v.add(ft);break}case"scara":{const W=pt(.2,.25,.2,V);W.position.y=.1,v.add(W);const Q=pt(.1,.1,.08,N(5025616));Q.position.y=.24,v.add(Q);const st=et(.5,.06,.1,N(6732650));st.position.set(.25,.3,0),v.add(st);const ut=pt(.08,.08,.06,N(5025616));ut.position.set(.5,.3,0),v.add(ut);const nt=et(.4,.05,.08,N(6732650));nt.position.set(.75,.3,0),v.add(nt);const H=pt(.025,.025,.3,mt(2730));H.position.set(.95,.25,0),v.add(H);const T=pt(.04,.04,.03,mt(16755456));T.position.set(.95,.12,0),v.add(T);break}case"delta":{const W=pt(.3,.3,.06,N(2201331));W.position.y=1.3,v.add(W);for(let ut=0;ut<3;ut++){const nt=ut*120*Math.PI/180,H=Math.cos(nt)*.22,T=Math.sin(nt)*.22,ft=pt(.02,.02,.9,N(U));ft.position.set(H,.85,T),v.add(ft);const Mt=et(.02,.5,.02,N(9479342));Mt.position.set(H*.5,.75,T*.5),v.add(Mt)}const Q=pt(.12,.12,.04,N(4367861));Q.position.y=.35,v.add(Q);const st=pt(.04,.06,.06,N(819));st.position.y=.28,v.add(st);break}case"cobot":{const W=pt(.18,.22,.15,V);W.position.y=.075,v.add(W);const Q=pt(.1,.1,.08,N(16750592));Q.position.y=.19,v.add(Q);const st=et(.07,.45,.07,N(16758605));st.position.set(0,.5,0),v.add(st);const ut=pt(.06,.06,.07,N(16750592));ut.position.set(0,.76,0),v.add(ut);const nt=et(.06,.35,.06,N(16758605));nt.position.set(0,.98,0),v.add(nt);const H=pt(.04,.04,.06,N(16750592));H.position.set(0,1.18,0),v.add(H);const T=pt(.03,.03,.03,mt(2730));T.position.set(0,1.25,0),v.add(T);break}case"conveyor":{const W=N(6381921);for(let nt=-A.width/2+.3;nt<=A.width/2-.3;nt+=1.2)for(const H of[-A.depth/2+.08,A.depth/2-.08]){const T=et(.05,A.height*.5,.05,W);T.position.set(nt,A.height*.25,H),v.add(T)}for(let nt=-A.width/2+.3;nt<=A.width/2-.3;nt+=1.2){const H=et(.05,.05,A.depth*.9,W);H.position.set(nt,A.height*.5,0),v.add(H)}const Q=et(A.width-.1,.03,A.depth*.85,N(2171169));Q.position.y=A.height*.53,v.add(Q);const st=mt(2184);for(let nt=-A.width/2+.15;nt<=A.width/2-.15;nt+=.5){const H=pt(.04,.04,A.depth*.8,st);H.rotation.x=Math.PI/2,H.position.set(nt,A.height*.5,0),v.add(H)}const ut=et(.2,.2,.2,N(1402304));ut.position.set(A.width/2-.1,A.height*.5,0),v.add(ut);break}case"agv":{const W=et(1,.12,.6,N(1402304));W.position.y=.15,v.add(W);const Q=et(.8,.15,.5,N(2201331));Q.position.y=.29,v.add(Q);const st=V;for(const[H,T]of[[-.35,.3],[.35,.3],[-.35,-.3],[.35,-.3]]){const ft=pt(.08,.08,.04,st,12);ft.rotation.x=Math.PI/2,ft.position.set(H,.08,T),v.add(ft)}const ut=pt(.04,.04,.06,N(5025616));ut.position.set(0,.4,0),v.add(ut);const nt=et(.6,.08,.4,N(9479342));nt.position.set(0,.41,0),v.add(nt);break}case"forklift":{const W=et(1.2,.15,.8,N(16088064));W.position.y=.15,v.add(W);const Q=et(.8,.6,.7,N(16750592));Q.position.set(-.1,.55,0),v.add(Q);const st=et(.5,.55,.6,N(819));st.position.set(-.15,.95,0),v.add(st);const ut=et(.45,.35,.02,Lt);ut.position.set(-.15,1,.32),v.add(ut);const nt=et(.06,1.6,.06,N(4342338));nt.position.set(.55,.95,0),v.add(nt);const H=nt.clone();H.position.z=.25,v.add(H);const T=et(.5,.04,.06,N(2184));T.position.set(.75,.35,-.1),v.add(T);const ft=T.clone();ft.position.z=.1,v.add(ft);for(const[Mt,It]of[[-.45,.35],[.4,.35],[-.45,-.35],[.4,-.35]]){const Pt=pt(.1,.1,.06,V,12);Pt.rotation.x=Math.PI/2,Pt.position.set(Mt,.1,It),v.add(Pt)}break}case"pallet":{const W=N(7951688);for(const[st,ut]of[[-.5,-.4],[.5,-.4],[-.5,.4],[.5,.4]]){const nt=et(.05,A.height,.05,W);nt.position.set(st,A.height/2,ut),v.add(nt)}for(let st=.4;st<A.height;st+=.6){const ut=et(A.width-.1,.04,A.depth-.1,N(9268835));ut.position.y=st,v.add(ut);const nt=et(A.width-.1,.03,.03,W);nt.position.set(0,st+.03,A.depth/2-.05),v.add(nt);const H=nt.clone();H.position.z=-A.depth/2+.05,v.add(H)}const Q=et(.5,.3,.4,N(6323595));Q.position.set(0,.57,0),v.add(Q);break}case"pillar":{const W=pt(.15,.18,A.height,N(9479342));W.position.y=A.height/2,v.add(W);const Q=et(.5,.1,.5,N(7697781));Q.position.y=.05,v.add(Q);break}case"workbench":{const W=et(A.width,.06,A.depth,N(9268835));W.position.y=.87,v.add(W);const Q=N(6381921);for(const[nt,H]of[[-.9,-.4],[.9,-.4],[-.9,.4],[.9,.4]]){const T=et(.05,.84,.05,Q);T.position.set(nt,.42,H),v.add(T)}const st=et(A.width-.2,.04,.04,Q);st.position.set(0,.3,0),v.add(st);const ut=et(.5,.15,.3,N(7901340));ut.position.set(0,.72,.2),v.add(ut);break}case"cabinet":{const W=et(A.width,A.height*.9,A.depth,N(4545124));W.position.y=A.height*.45,v.add(W);const Q=et(A.width*.95,A.height*.85,.02,N(3622735));Q.position.set(0,A.height*.45,A.depth/2+.01),v.add(Q);const st=et(.02,.12,.03,mt(2730));st.position.set(A.width*.35,A.height*.5,A.depth/2+.03),v.add(st);for(let nt=A.height*.2;nt<A.height*.4;nt+=.06){const H=et(A.width*.5,.02,.01,N(2503224));H.position.set(0,nt,A.depth/2+.02),v.add(H)}const ut=et(A.width+.04,.04,A.depth+.04,N(5533306));ut.position.y=A.height*.92,v.add(ut);break}case"safety_fence":{const W=N(16635957),Q=N(16361509);for(const st of[-A.width/2,A.width/2]){const ut=et(.04,A.height,.04,Q);ut.position.set(st,A.height/2,0),v.add(ut)}for(const st of[.1,A.height*.5,A.height-.05]){const ut=et(A.width,.025,.025,Q);ut.position.set(0,st,0),v.add(ut)}for(let st=.2;st<A.height-.1;st+=.15){const ut=et(A.width-.1,.008,.008,W);ut.position.set(0,st,0),v.add(ut)}for(let st=-A.width/2+.15;st<A.width/2;st+=.2){const ut=et(.008,A.height-.2,.008,W);ut.position.set(st,A.height/2,0),v.add(ut)}break}default:if(A.libId.startsWith("kin_")){const W=pt(.25,.3,.2,V);W.position.y=.1,v.add(W);const Q=pt(.18,.18,.1,N(15277667));Q.position.y=.25,v.add(Q);const st=et(.08,.8,.08,N(15753874));st.position.set(0,.7,0),v.add(st);const ut=pt(.06,.06,.08,N(15277667));ut.position.set(0,1.15,0),v.add(ut);const nt=pt(.03,.03,.03,mt(2730));nt.position.set(0,1.22,0),v.add(nt)}else{const W=et(A.width,A.height*.7,A.depth,N(U));W.position.y=A.height*.35,v.add(W)}}const Et=et(A.width*.6,.18,.01,N(2171169));Et.position.set(0,A.height+.15,0),v.add(Et),v.position.set(A.posX,A.posY,A.posZ),v.rotation.y=A.rotY*Math.PI/180,v.scale.setScalar(A.scale),v.userData={uid:A.uid},A.mesh=v,P.add(v)}function Wt(A){var U;const v=f.value.findIndex(N=>N.uid===A);if(v>=0){const N=f.value[v];N.mesh&&P&&P.remove(N.mesh),f.value.splice(v,1),((U=h.value)==null?void 0:U.uid)===A&&(h.value=null)}}function k(A){h.value=A}function Se(){h.value=null}function Ut(){const A=h.value;!A||!A.mesh||(A.mesh.position.set(A.posX,A.posY,A.posZ),A.mesh.rotation.y=A.rotY*Math.PI/180,A.mesh.scale.setScalar(A.scale))}function Vt(A){o.value=A,A==="interior"?(D=15,G.set(0,3,0),_t=Math.PI/3):(D=45,G.set(0,3,0),_t=Math.PI/4),yt()}function Rt(){a.value=!a.value,M&&(M.visible=a.value)}function ee(){l.value=!l.value,L&&(L.visible=l.value)}function yt(){if(!p)return;const A=G.x+D*Math.cos(_t)*Math.cos(rt),v=G.y+D*Math.sin(_t),U=G.z+D*Math.cos(_t)*Math.sin(rt);p.position.set(A,Math.max(1,v),U),p.lookAt(G)}function E(A){j=!0,y=A.button===2,b=A.clientX,Z=A.clientY}function x(A){if(!j)return;const v=A.clientX-b,U=A.clientY-Z;if(b=A.clientX,Z=A.clientY,y){const N=new O,mt=new O(0,1,0);p.getWorldDirection(N),N.cross(mt).normalize();const V=D*.002;G.add(N.multiplyScalar(-v*V)),G.y+=U*V}else rt+=v*.005,_t=Math.max(.05,Math.min(Math.PI/2-.05,_t+U*.005));yt()}function $(){j=!1}function vt(A){D=Math.max(3,Math.min(100,D+A.deltaY*.02)),yt()}function gt(){rt=Math.PI/4,_t=Math.PI/3,D=o.value==="interior"?15:45,G.set(0,3,0),yt()}function xt(){u=requestAnimationFrame(xt),_&&g&&p&&_.render(g,p)}return(A,v)=>(Xt(),qt("div",Hm,[C("div",km,[v[21]||(v[21]=C("div",{class:"toolbar-group"},[C("span",{class:"material-symbols-outlined tb-icon"},"factory"),C("span",{class:"toolbar-title"},"工厂仿真")],-1)),C("div",Vm,[C("button",{class:un(["tb-btn",{active:o.value==="exterior"}]),onClick:v[0]||(v[0]=U=>Vt("exterior"))},[...v[13]||(v[13]=[C("span",{class:"material-symbols-outlined"},"landscape",-1),ye("外景 ",-1)])],2),C("button",{class:un(["tb-btn",{active:o.value==="interior"}]),onClick:v[1]||(v[1]=U=>Vt("interior"))},[...v[14]||(v[14]=[C("span",{class:"material-symbols-outlined"},"warehouse",-1),ye("内景 ",-1)])],2),v[17]||(v[17]=C("span",{class:"tb-separator"},null,-1)),C("button",{class:un(["tb-btn",{active:a.value}]),onClick:Rt,title:"显示/隐藏屋顶"},[...v[15]||(v[15]=[C("span",{class:"material-symbols-outlined"},"house",-1),ye("屋顶 ",-1)])],2),C("button",{class:un(["tb-btn",{active:l.value}]),onClick:ee,title:"显示/隐藏墙壁"},[...v[16]||(v[16]=[C("span",{class:"material-symbols-outlined"},"view_week",-1),ye("墙壁 ",-1)])],2)]),v[22]||(v[22]=C("div",{class:"toolbar-spacer"},null,-1)),C("div",{class:"toolbar-group"},[C("button",{class:"tb-btn",onClick:gt},[...v[18]||(v[18]=[C("span",{class:"material-symbols-outlined"},"center_focus_strong",-1),ye("重置视角 ",-1)])])]),h.value?(Xt(),qt("div",Wm,[v[20]||(v[20]=C("span",{class:"tb-separator"},null,-1)),C("span",Xm,Nt(h.value.name),1),C("button",{class:"tb-btn tb-btn-sm",onClick:Se},[...v[19]||(v[19]=[C("span",{class:"material-symbols-outlined"},"close",-1)])])])):vi("",!0)]),C("div",Ym,[C("aside",qm,[C("div",$m,[v[27]||(v[27]=C("div",{class:"section-header"},[C("span",null,"设备库")],-1)),C("div",Zm,[Ye(C("input",{class:"prop-input","onUpdate:modelValue":v[2]||(v[2]=U=>c.value=U),placeholder:"搜索设备..."},null,512),[[Sn,c.value]])]),C("div",jm,[C("div",{class:"cat-header",onClick:v[3]||(v[3]=U=>Y("machining"))},[C("span",Km,Nt(d.machining?"expand_more":"chevron_right"),1),v[23]||(v[23]=C("span",null,"加工设备",-1)),C("span",Jm,Nt(lt("machining").length),1)]),Ye(C("div",Qm,[(Xt(!0),qt(Ne,null,Fe(lt("machining"),U=>(Xt(),qt("div",{key:U.id,class:"model-lib-item",onClick:N=>Ot(U)},[C("div",e0,[C("span",n0,Nt(U.icon),1)]),C("div",i0,[C("div",s0,Nt(U.name),1),C("div",r0,Nt(U.category),1)])],8,t0))),128))],512),[[Wi,d.machining]])]),C("div",a0,[C("div",{class:"cat-header",onClick:v[4]||(v[4]=U=>Y("robot"))},[C("span",o0,Nt(d.robot?"expand_more":"chevron_right"),1),v[24]||(v[24]=C("span",null,"机器人",-1)),C("span",l0,Nt(lt("robot").length),1)]),Ye(C("div",c0,[(Xt(!0),qt(Ne,null,Fe(lt("robot"),U=>(Xt(),qt("div",{key:U.id,class:"model-lib-item",onClick:N=>Ot(U)},[C("div",d0,[C("span",h0,Nt(U.icon),1)]),C("div",f0,[C("div",p0,Nt(U.name),1),C("div",m0,Nt(U.category),1)])],8,u0))),128))],512),[[Wi,d.robot]])]),C("div",_0,[C("div",{class:"cat-header",onClick:v[5]||(v[5]=U=>Y("logistics"))},[C("span",g0,Nt(d.logistics?"expand_more":"chevron_right"),1),v[25]||(v[25]=C("span",null,"物流设备",-1)),C("span",v0,Nt(lt("logistics").length),1)]),Ye(C("div",x0,[(Xt(!0),qt(Ne,null,Fe(lt("logistics"),U=>(Xt(),qt("div",{key:U.id,class:"model-lib-item",onClick:N=>Ot(U)},[C("div",S0,[C("span",E0,Nt(U.icon),1)]),C("div",y0,[C("div",b0,Nt(U.name),1),C("div",T0,Nt(U.category),1)])],8,M0))),128))],512),[[Wi,d.logistics]])]),C("div",w0,[C("div",{class:"cat-header",onClick:v[6]||(v[6]=U=>Y("infra"))},[C("span",A0,Nt(d.infra?"expand_more":"chevron_right"),1),v[26]||(v[26]=C("span",null,"基础设施",-1)),C("span",R0,Nt(lt("infra").length),1)]),Ye(C("div",C0,[(Xt(!0),qt(Ne,null,Fe(lt("infra"),U=>(Xt(),qt("div",{key:U.id,class:"model-lib-item",onClick:N=>Ot(U)},[C("div",P0,[C("span",D0,Nt(U.icon),1)]),C("div",U0,[C("div",I0,Nt(U.name),1),C("div",N0,Nt(U.category),1)])],8,L0))),128))],512),[[Wi,d.infra]])])]),C("div",F0,[C("div",O0,[C("span",null,"场景设备 ("+Nt(f.value.length)+")",1)]),C("div",B0,[(Xt(!0),qt(Ne,null,Fe(f.value,U=>{var N;return Xt(),qt("div",{key:U.uid,class:un(["scene-equip-item",{selected:((N=h.value)==null?void 0:N.uid)===U.uid}]),onClick:mt=>k(U)},[C("span",G0,Nt(U.icon),1),C("span",H0,Nt(U.name),1),C("button",{class:"icon-btn-sm",onClick:al(mt=>Wt(U.uid),["stop"])},[...v[28]||(v[28]=[C("span",{class:"material-symbols-outlined"},"close",-1)])],8,k0)],10,z0)}),128))])])]),C("main",V0,[C("canvas",{ref_key:"threeCanvas",ref:m},null,512),C("div",W0,[C("span",null,Nt(o.value==="exterior"?"外景视角":"内景视角"),1),v[29]||(v[29]=C("span",{class:"info-sep"},"|",-1)),C("span",null,Nt(f.value.length)+" 台设备",1)]),f.value.length===0&&o.value==="interior"?(Xt(),qt("div",X0,[...v[30]||(v[30]=[C("span",{class:"material-symbols-outlined",style:{"font-size":"48px",opacity:"0.2"}},"factory",-1),C("p",null,"从左侧设备库添加设备到厂房",-1)])])):vi("",!0)]),h.value?(Xt(),qt("aside",Y0,[C("div",q0,[v[31]||(v[31]=C("span",{class:"material-symbols-outlined",style:{"font-size":"14px"}},"tune",-1)),ye(" 属性 — "+Nt(h.value.name),1)]),C("div",$0,[C("div",Z0,[v[35]||(v[35]=C("div",{class:"prop-section-title"},"位置",-1)),C("div",j0,[v[32]||(v[32]=C("label",null,"X",-1)),Ye(C("input",{type:"number",class:"prop-input","onUpdate:modelValue":v[7]||(v[7]=U=>h.value.posX=U),step:"0.5",onInput:Ut},null,544),[[Sn,h.value.posX,void 0,{number:!0}]])]),C("div",K0,[v[33]||(v[33]=C("label",null,"Y",-1)),Ye(C("input",{type:"number",class:"prop-input","onUpdate:modelValue":v[8]||(v[8]=U=>h.value.posY=U),step:"0.5",onInput:Ut},null,544),[[Sn,h.value.posY,void 0,{number:!0}]])]),C("div",J0,[v[34]||(v[34]=C("label",null,"Z",-1)),Ye(C("input",{type:"number",class:"prop-input","onUpdate:modelValue":v[9]||(v[9]=U=>h.value.posZ=U),step:"0.5",onInput:Ut},null,544),[[Sn,h.value.posZ,void 0,{number:!0}]])])]),C("div",Q0,[v[37]||(v[37]=C("div",{class:"prop-section-title"},"旋转 (度)",-1)),C("div",t_,[v[36]||(v[36]=C("label",null,"Y轴",-1)),Ye(C("input",{type:"number",class:"prop-input","onUpdate:modelValue":v[10]||(v[10]=U=>h.value.rotY=U),step:"5",onInput:Ut},null,544),[[Sn,h.value.rotY,void 0,{number:!0}]])])]),C("div",e_,[v[39]||(v[39]=C("div",{class:"prop-section-title"},"缩放",-1)),C("div",n_,[v[38]||(v[38]=C("label",null,"比例",-1)),Ye(C("input",{type:"number",class:"prop-input","onUpdate:modelValue":v[11]||(v[11]=U=>h.value.scale=U),step:"0.1",min:"0.1",max:"10",onInput:Ut},null,544),[[Sn,h.value.scale,void 0,{number:!0}]])])]),C("div",i_,[C("button",{class:"tb-btn tb-btn-danger full-width",onClick:v[12]||(v[12]=U=>Wt(h.value.uid))},[...v[40]||(v[40]=[C("span",{class:"material-symbols-outlined"},"delete",-1),ye("删除设备 ",-1)])])])])])):(Xt(),qt("aside",s_,[...v[41]||(v[41]=[rl('<div class="props-header" data-v-4e19fbb2><span class="material-symbols-outlined" style="font-size:14px;" data-v-4e19fbb2>info</span> 信息 </div><div class="props-body" data-v-4e19fbb2><div class="empty-hint" data-v-4e19fbb2><p data-v-4e19fbb2>点击场景中的设备查看属性</p><p class="hint-sub" data-v-4e19fbb2>从左侧设备库添加设备</p></div></div>',2)])]))])]))}}),a_=yr(r_,[["__scopeId","data-v-4e19fbb2"]]),o_={class:"simulator-layout"},l_={class:"sim-header"},c_={class:"sim-tabs"},u_={class:"sim-status"},d_={class:"sim-content"},h_=Sr({__name:"Simulator",setup(i){const t=ll(),e=ol(),n=le(e.query.type||"cnc"),s=le(!1);function r(){t.push("/")}return Er(()=>{e.query.type&&(n.value=e.query.type)}),(o,a)=>(Xt(),qt("div",o_,[C("header",l_,[C("button",{class:"back-btn",onClick:r},[...a[6]||(a[6]=[C("span",{class:"material-symbols-outlined"},"arrow_back",-1),ye(" 返回IDE ",-1)])]),C("div",c_,[C("button",{class:un(["sim-tab",{active:n.value==="cnc"}]),onClick:a[0]||(a[0]=l=>n.value="cnc")},[...a[7]||(a[7]=[C("span",{class:"material-symbols-outlined"},"precision_manufacturing",-1),ye(" 设备仿真 ",-1)])],2),C("button",{class:un(["sim-tab",{active:n.value==="world"}]),onClick:a[1]||(a[1]=l=>n.value="world")},[...a[8]||(a[8]=[C("span",{class:"material-symbols-outlined"},"public",-1),ye(" 全场景仿真 ",-1)])],2)]),C("div",u_,[C("span",{class:un(["status-dot",s.value?"connected":""])},null,2),ye(" "+Nt(s.value?"已连接":"未连接"),1)])]),C("div",d_,[n.value==="cnc"?(Xt(),Br(Gm,{key:0,onConnect:a[2]||(a[2]=l=>s.value=!0),onDisconnect:a[3]||(a[3]=l=>s.value=!1)})):n.value==="world"?(Xt(),Br(a_,{key:1,onConnect:a[4]||(a[4]=l=>s.value=!0),onDisconnect:a[5]||(a[5]=l=>s.value=!1)})):vi("",!0)])]))}}),m_=yr(h_,[["__scopeId","data-v-47343b1e"]]);export{m_ as default};
//# sourceMappingURL=Simulator-Bp865GCb.js.map
