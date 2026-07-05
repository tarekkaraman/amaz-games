var ih=Object.defineProperty;var sh=(i,t,e)=>t in i?ih(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var k=(i,t,e)=>sh(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="169",rh=0,Lo=1,ah=2,Xc=1,qc=2,gn=3,Gn=0,Ce=1,_n=2,Bn=0,Li=1,Do=2,Io=3,Uo=4,oh=5,ti=100,ch=101,lh=102,hh=103,dh=104,uh=200,fh=201,ph=202,mh=203,oa=204,ca=205,gh=206,vh=207,_h=208,xh=209,yh=210,Mh=211,Sh=212,Eh=213,bh=214,la=0,ha=1,da=2,Fi=3,ua=4,fa=5,pa=6,ma=7,$c=0,wh=1,Th=2,zn=0,Ah=1,Rh=2,Ch=3,Ph=4,Lh=5,Dh=6,Ih=7,Yc=300,Oi=301,ki=302,ga=303,va=304,lr=306,_a=1e3,ni=1001,xa=1002,We=1003,Uh=1004,ps=1005,Je=1006,Mr=1007,ii=1008,wn=1009,Kc=1010,jc=1011,os=1012,to=1013,ri=1014,yn=1015,ls=1016,eo=1017,no=1018,Bi=1020,Jc=35902,Zc=1021,Qc=1022,Ze=1023,tl=1024,el=1025,Di=1026,zi=1027,nl=1028,io=1029,il=1030,so=1031,ro=1033,Gs=33776,Ws=33777,Xs=33778,qs=33779,ya=35840,Ma=35841,Sa=35842,Ea=35843,ba=36196,wa=37492,Ta=37496,Aa=37808,Ra=37809,Ca=37810,Pa=37811,La=37812,Da=37813,Ia=37814,Ua=37815,Na=37816,Fa=37817,Oa=37818,ka=37819,Ba=37820,za=37821,$s=36492,Va=36494,Ha=36495,sl=36283,Ga=36284,Wa=36285,Xa=36286,Nh=3200,Fh=3201,rl=0,Oh=1,Fn="",en="srgb",Wn="srgb-linear",ao="display-p3",hr="display-p3-linear",Zs="linear",se="srgb",Qs="rec709",tr="p3",hi=7680,No=519,kh=512,Bh=513,zh=514,al=515,Vh=516,Hh=517,Gh=518,Wh=519,qa=35044,Fo="300 es",Mn=2e3,er=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sr=Math.PI/180,$a=180/Math.PI;function Vn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Xh(i,t){return(i%t+t)%t}function Er(i,t,e){return(1-e)*i+e*t}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,s,r,a,o,c,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],v=n[8],_=s[0],f=s[3],p=s[6],M=s[1],y=s[4],b=s[7],L=s[2],A=s[5],w=s[8];return r[0]=a*_+o*M+c*L,r[3]=a*f+o*y+c*A,r[6]=a*p+o*b+c*w,r[1]=l*_+h*M+d*L,r[4]=l*f+h*y+d*A,r[7]=l*p+h*b+d*w,r[2]=u*_+m*M+v*L,r[5]=u*f+m*y+v*A,r[8]=u*p+m*b+v*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,m=l*r-a*c,v=e*d+n*u+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=u*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(br.makeScale(t,e)),this}rotate(t){return this.premultiply(br.makeRotation(-t)),this}translate(t,e){return this.premultiply(br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const br=new Nt;function ol(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qh(){const i=nr("canvas");return i.style.display="block",i}const Oo={};function Ys(i){i in Oo||(Oo[i]=!0,console.warn(i))}function $h(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Yh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ko=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bo=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yi={[Wn]:{transfer:Zs,primaries:Qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[en]:{transfer:se,primaries:Qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[hr]:{transfer:Zs,primaries:tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Bo),fromReference:i=>i.applyMatrix3(ko)},[ao]:{transfer:se,primaries:tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Bo),fromReference:i=>i.applyMatrix3(ko).convertLinearToSRGB()}},jh=new Set([Wn,hr]),Kt={enabled:!0,_workingColorSpace:Wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!jh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Yi[t].toReference,s=Yi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Yi[i].primaries},getTransfer:function(i){return i===Fn?Zs:Yi[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Yi[t].luminanceCoefficients)}};function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let di;class Jh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{di===void 0&&(di=nr("canvas")),di.width=t.width,di.height=t.height;const n=di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ii(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ii(e[n]/255)*255):e[n]=Ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zh=0;class cl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tr(s[a].image)):r.push(Tr(s[a]))}else r=Tr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qh=0;class Pe extends Wi{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=ni,s=ni,r=Je,a=ii,o=Ze,c=wn,l=Pe.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Vn(),this.name="",this.source=new cl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _a:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _a:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=Yc;Pe.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],m=c[5],v=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(v+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,b=(m+1)/2,L=(p+1)/2,A=(h+u)/4,w=(d+_)/4,C=(v+f)/4;return y>b&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=w/n):b>L?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=C/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=w/r,s=C/r),this.set(n,s,r,e),this}let M=Math.sqrt((f-v)*(f-v)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(f-v)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class td extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Pe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends td{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ll extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ed extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const u=r[a+0],m=r[a+1],v=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=v,t[e+3]=_;return}if(d!==_||c!==u||l!==m||h!==v){let f=1-o;const p=c*u+l*m+h*v+d*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),A=Math.atan2(L,p*M);f=Math.sin(f*A)/L,o=Math.sin(o*A)/L}const b=o*M;if(c=c*f+u*b,l=l*f+m*b,h=h*f+v*b,d=d*f+_*b,f===1-o){const L=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=L,l*=L,h*=L,d*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],m=r[a+2],v=r[a+3];return t[e]=o*v+h*d+c*m-l*u,t[e+1]=c*v+h*u+l*d-o*m,t[e+2]=l*v+h*m+o*u-c*d,t[e+3]=h*v-o*d-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),m=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*m*v,this._y=l*m*d-u*h*v,this._z=l*h*v+u*m*d,this._w=l*h*d-u*m*v;break;case"YXZ":this._x=u*h*d+l*m*v,this._y=l*m*d-u*h*v,this._z=l*h*v-u*m*d,this._w=l*h*d+u*m*v;break;case"ZXY":this._x=u*h*d-l*m*v,this._y=l*m*d+u*h*v,this._z=l*h*v+u*m*d,this._w=l*h*d-u*m*v;break;case"ZYX":this._x=u*h*d-l*m*v,this._y=l*m*d+u*h*v,this._z=l*h*v-u*m*d,this._w=l*h*d+u*m*v;break;case"YZX":this._x=u*h*d+l*m*v,this._y=l*m*d+u*h*v,this._z=l*h*v-u*m*d,this._w=l*h*d-u*m*v;break;case"XZY":this._x=u*h*d-l*m*v,this._y=l*m*d-u*h*v,this._z=l*h*v+u*m*d,this._w=l*h*d+u*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ar.copy(this).projectOnVector(t),this.sub(Ar)}reflect(t){return this.sub(Ar.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ar=new R,zo=new hs;class ds{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(r,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ms.copy(n.boundingBox)),ms.applyMatrix4(t.matrixWorld),this.union(ms)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ki),gs.subVectors(this.max,Ki),ui.subVectors(t.a,Ki),fi.subVectors(t.b,Ki),pi.subVectors(t.c,Ki),Rn.subVectors(fi,ui),Cn.subVectors(pi,fi),qn.subVectors(ui,pi);let e=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-qn.z,qn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,qn.z,0,-qn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-qn.y,qn.x,0];return!Rr(e,ui,fi,pi,gs)||(e=[1,0,0,0,1,0,0,0,1],!Rr(e,ui,fi,pi,gs))?!1:(vs.crossVectors(Rn,Cn),e=[vs.x,vs.y,vs.z],Rr(e,ui,fi,pi,gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new R,new R,new R,new R,new R,new R,new R,new R],Ye=new R,ms=new ds,ui=new R,fi=new R,pi=new R,Rn=new R,Cn=new R,qn=new R,Ki=new R,gs=new R,vs=new R,$n=new R;function Rr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$n.fromArray(i,r);const o=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),c=t.dot($n),l=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const nd=new ds,ji=new R,Cr=new R;class dr{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):nd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);const e=ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(Cr)),this.expandByPoint(ji.copy(t.center).sub(Cr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new R,Pr=new R,_s=new R,Pn=new R,Lr=new R,xs=new R,Dr=new R;class hl{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pr.copy(t).add(e).multiplyScalar(.5),_s.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(Pr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(_s),o=Pn.dot(this.direction),c=-Pn.dot(_s),l=Pn.lengthSq(),h=Math.abs(1-a*a);let d,u,m,v;if(h>0)if(d=a*c-o,u=a*o-c,v=r*h,d>=0)if(u>=-v)if(u<=v){const _=1/h;d*=_,u*=_,m=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u<=-v?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+u*(u+2*c)+l):u<=v?(d=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Pr).addScaledVector(_s,u),m}intersectSphere(t,e){un.subVectors(t.center,this.origin);const n=un.dot(this.direction),s=un.dot(un)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,s,r){Lr.subVectors(e,t),xs.subVectors(n,t),Dr.crossVectors(Lr,xs);let a=this.direction.dot(Dr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,t);const c=o*this.direction.dot(xs.crossVectors(Pn,xs));if(c<0)return null;const l=o*this.direction.dot(Lr.cross(Pn));if(l<0||c+l>a)return null;const h=-o*Pn.dot(Dr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,a,o,c,l,h,d,u,m,v,_,f){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,m,v,_,f)}set(t,e,n,s,r,a,o,c,l,h,d,u,m,v,_,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=v,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/mi.setFromMatrixColumn(t,0).length(),r=1/mi.setFromMatrixColumn(t,1).length(),a=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,m=a*d,v=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+v*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=v+m*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,m=c*d,v=l*h,_=l*d;e[0]=u+_*o,e[4]=v*o-m,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-v,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,m=c*d,v=l*h,_=l*d;e[0]=u-_*o,e[4]=-a*d,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,m=a*d,v=o*h,_=o*d;e[0]=c*h,e[4]=v*l-m,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=m*l-v,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,m=a*l,v=o*c,_=o*l;e[0]=c*h,e[4]=_-u*d,e[8]=v*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*d+v,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*c,m=a*l,v=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=a*h,e[9]=m*d-v,e[2]=v*d-m,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(id,t,sd)}lookAt(t,e,n){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Ln.crossVectors(n,ke),Ln.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Ln.crossVectors(n,ke)),Ln.normalize(),ys.crossVectors(ke,Ln),s[0]=Ln.x,s[4]=ys.x,s[8]=ke.x,s[1]=Ln.y,s[5]=ys.y,s[9]=ke.y,s[2]=Ln.z,s[6]=ys.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],v=n[2],_=n[6],f=n[10],p=n[14],M=n[3],y=n[7],b=n[11],L=n[15],A=s[0],w=s[4],C=s[8],V=s[12],g=s[1],S=s[5],O=s[9],N=s[13],W=s[2],K=s[6],H=s[10],J=s[14],X=s[3],lt=s[7],ht=s[11],xt=s[15];return r[0]=a*A+o*g+c*W+l*X,r[4]=a*w+o*S+c*K+l*lt,r[8]=a*C+o*O+c*H+l*ht,r[12]=a*V+o*N+c*J+l*xt,r[1]=h*A+d*g+u*W+m*X,r[5]=h*w+d*S+u*K+m*lt,r[9]=h*C+d*O+u*H+m*ht,r[13]=h*V+d*N+u*J+m*xt,r[2]=v*A+_*g+f*W+p*X,r[6]=v*w+_*S+f*K+p*lt,r[10]=v*C+_*O+f*H+p*ht,r[14]=v*V+_*N+f*J+p*xt,r[3]=M*A+y*g+b*W+L*X,r[7]=M*w+y*S+b*K+L*lt,r[11]=M*C+y*O+b*H+L*ht,r[15]=M*V+y*N+b*J+L*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],m=t[14],v=t[3],_=t[7],f=t[11],p=t[15];return v*(+r*c*d-s*l*d-r*o*u+n*l*u+s*o*m-n*c*m)+_*(+e*c*m-e*l*u+r*a*u-s*a*m+s*l*h-r*c*h)+f*(+e*l*d-e*o*m-r*a*d+n*a*m+r*o*h-n*l*h)+p*(-s*o*h-e*c*d+e*o*u+s*a*d-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],m=t[11],v=t[12],_=t[13],f=t[14],p=t[15],M=d*f*l-_*u*l+_*c*m-o*f*m-d*c*p+o*u*p,y=v*u*l-h*f*l-v*c*m+a*f*m+h*c*p-a*u*p,b=h*_*l-v*d*l+v*o*m-a*_*m-h*o*p+a*d*p,L=v*d*c-h*_*c-v*o*u+a*_*u+h*o*f-a*d*f,A=e*M+n*y+s*b+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=M*w,t[1]=(_*u*r-d*f*r-_*s*m+n*f*m+d*s*p-n*u*p)*w,t[2]=(o*f*r-_*c*r+_*s*l-n*f*l-o*s*p+n*c*p)*w,t[3]=(d*c*r-o*u*r-d*s*l+n*u*l+o*s*m-n*c*m)*w,t[4]=y*w,t[5]=(h*f*r-v*u*r+v*s*m-e*f*m-h*s*p+e*u*p)*w,t[6]=(v*c*r-a*f*r-v*s*l+e*f*l+a*s*p-e*c*p)*w,t[7]=(a*u*r-h*c*r+h*s*l-e*u*l-a*s*m+e*c*m)*w,t[8]=b*w,t[9]=(v*d*r-h*_*r-v*n*m+e*_*m+h*n*p-e*d*p)*w,t[10]=(a*_*r-v*o*r+v*n*l-e*_*l-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*m-e*o*m)*w,t[12]=L*w,t[13]=(h*_*s-v*d*s+v*n*u-e*_*u-h*n*f+e*d*f)*w,t[14]=(v*o*s-a*_*s-v*n*c+e*_*c+a*n*f-e*o*f)*w,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*u+e*o*u)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,m=r*h,v=r*d,_=a*h,f=a*d,p=o*d,M=c*l,y=c*h,b=c*d,L=n.x,A=n.y,w=n.z;return s[0]=(1-(_+p))*L,s[1]=(m+b)*L,s[2]=(v-y)*L,s[3]=0,s[4]=(m-b)*A,s[5]=(1-(u+p))*A,s[6]=(f+M)*A,s[7]=0,s[8]=(v+y)*w,s[9]=(f-M)*w,s[10]=(1-(u+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=mi.set(s[0],s[1],s[2]).length();const a=mi.set(s[4],s[5],s[6]).length(),o=mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);const l=1/r,h=1/a,d=1/o;return Ke.elements[0]*=l,Ke.elements[1]*=l,Ke.elements[2]*=l,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=d,Ke.elements[9]*=d,Ke.elements[10]*=d,e.setFromRotationMatrix(Ke),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Mn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let m,v;if(o===Mn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===er)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mn){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*l,m=(n+s)*h;let v,_;if(o===Mn)v=(a+r)*d,_=-2*d;else if(o===er)v=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const mi=new R,Ke=new ae,id=new R(0,0,0),sd=new R(1,1,1),Ln=new R,ys=new R,ke=new R,Vo=new ae,Ho=new hs;class cn{constructor(t=0,e=0,n=0,s=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ho.setFromEuler(this),this.setFromQuaternion(Ho,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rd=0;const Go=new R,gi=new hs,fn=new ae,Ms=new R,Ji=new R,ad=new R,od=new hs,Wo=new R(1,0,0),Xo=new R(0,1,0),qo=new R(0,0,1),$o={type:"added"},cd={type:"removed"},vi={type:"childadded",child:null},Ir={type:"childremoved",child:null};class me extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new R,e=new cn,n=new hs,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Nt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(Wo,t)}rotateY(t){return this.rotateOnAxis(Xo,t)}rotateZ(t){return this.rotateOnAxis(qo,t)}translateOnAxis(t,e){return Go.copy(t).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wo,t)}translateY(t){return this.translateOnAxis(Xo,t)}translateZ(t){return this.translateOnAxis(qo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ms.copy(t):Ms.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Ji,Ms,this.up):fn.lookAt(Ms,Ji,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(fn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($o),vi.child=t,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cd),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($o),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}me.DEFAULT_UP=new R(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new R,pn=new R,Ur=new R,mn=new R,_i=new R,xi=new R,Yo=new R,Nr=new R,Fr=new R,Or=new R,kr=new le,Br=new le,zr=new le;class Ge{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),je.subVectors(t,e),s.cross(je);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){je.subVectors(s,e),pn.subVectors(n,e),Ur.subVectors(t,e);const a=je.dot(je),o=je.dot(pn),c=je.dot(Ur),l=pn.dot(pn),h=pn.dot(Ur),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,m=(l*c-o*h)*u,v=(a*h-o*c)*u;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(a,mn.y),c.addScaledVector(o,mn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return kr.setScalar(0),Br.setScalar(0),zr.setScalar(0),kr.fromBufferAttribute(t,e),Br.fromBufferAttribute(t,n),zr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(kr,r.x),a.addScaledVector(Br,r.y),a.addScaledVector(zr,r.z),a}static isFrontFacing(t,e,n,s){return je.subVectors(n,e),pn.subVectors(t,e),je.cross(pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),je.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ge.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ge.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ge.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ge.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ge.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;_i.subVectors(s,n),xi.subVectors(r,n),Nr.subVectors(t,n);const c=_i.dot(Nr),l=xi.dot(Nr);if(c<=0&&l<=0)return e.copy(n);Fr.subVectors(t,s);const h=_i.dot(Fr),d=xi.dot(Fr);if(h>=0&&d<=h)return e.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(_i,a);Or.subVectors(t,r);const m=_i.dot(Or),v=xi.dot(Or);if(v>=0&&m<=v)return e.copy(r);const _=m*l-c*v;if(_<=0&&l>=0&&v<=0)return o=l/(l-v),e.copy(n).addScaledVector(xi,o);const f=h*v-m*d;if(f<=0&&d-h>=0&&m-v>=0)return Yo.subVectors(r,s),o=(d-h)/(d-h+(m-v)),e.copy(s).addScaledVector(Yo,o);const p=1/(f+_+u);return a=_*p,o=u*p,e.copy(n).addScaledVector(_i,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Vr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=Xh(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Vr(a,r,t+1/3),this.g=Vr(a,r,t),this.b=Vr(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const n=ul[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return Kt.fromWorkingColorSpace(be.copy(this),t),Math.round(ye(be.r*255,0,255))*65536+Math.round(ye(be.g*255,0,255))*256+Math.round(ye(be.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,s=be.g,r=be.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=en){Kt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,s=be.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Ss);const n=Er(Dn.h,Ss.h,e),s=Er(Dn.s,Ss.s,e),r=Er(Dn.l,Ss.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Ft;Ft.NAMES=ul;let ld=0;class ci extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Li,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=ca,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ir extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new R,Es=new st;class Le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}}class fl extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pl extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jt extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hd=0;const He=new ae,Hr=new me,yi=new R,Be=new ds,Zi=new ds,_e=new R;class de extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ol(t)?pl:fl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return Hr.lookAt(t),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Be.min,Zi.min),Be.expandByPoint(_e),_e.addVectors(Be.max,Zi.max),Be.expandByPoint(_e)):(Be.expandByPoint(Zi.min),Be.expandByPoint(Zi.max))}Be.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)_e.fromBufferAttribute(o,l),c&&(yi.fromBufferAttribute(t,l),_e.add(yi)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new R,c[C]=new R;const l=new R,h=new R,d=new R,u=new st,m=new st,v=new st,_=new R,f=new R;function p(C,V,g){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,V),d.fromBufferAttribute(n,g),u.fromBufferAttribute(r,C),m.fromBufferAttribute(r,V),v.fromBufferAttribute(r,g),h.sub(l),d.sub(l),m.sub(u),v.sub(u);const S=1/(m.x*v.y-v.x*m.y);isFinite(S)&&(_.copy(h).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(S),f.copy(d).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(S),o[C].add(_),o[V].add(_),o[g].add(_),c[C].add(f),c[V].add(f),c[g].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,V=M.length;C<V;++C){const g=M[C],S=g.start,O=g.count;for(let N=S,W=S+O;N<W;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new R,b=new R,L=new R,A=new R;function w(C){L.fromBufferAttribute(s,C),A.copy(L);const V=o[C];y.copy(V),y.sub(L.multiplyScalar(L.dot(V))).normalize(),b.crossVectors(A,V);const S=b.dot(c[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,S)}for(let C=0,V=M.length;C<V;++C){const g=M[C],S=g.start,O=g.count;for(let N=S,W=S+O;N<W;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let u=0,m=t.count;u<m;u+=3){const v=t.getX(u+0),_=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,f),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let m=0,v=0;for(let _=0,f=c.length;_<f;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let p=0;p<h;p++)u[v++]=l[m++]}return new Le(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],m=t(u,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ko=new ae,Yn=new hl,bs=new dr,jo=new R,ws=new R,Ts=new R,As=new R,Gr=new R,Rs=new R,Jo=new R,Cs=new R;class Pt extends me{constructor(t=new de,e=new ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Rs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Gr.fromBufferAttribute(d,t),a?Rs.addScaledVector(Gr,h):Rs.addScaledVector(Gr.sub(e),h))}e.add(Rs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),Yn.copy(t.ray).recast(t.near),!(bs.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(bs,jo)===null||Yn.origin.distanceToSquared(jo)>(t.far-t.near)**2))&&(Ko.copy(r).invert(),Yn.copy(t.ray).applyMatrix4(Ko),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=u.length;v<_;v++){const f=u[v],p=a[f.materialIndex],M=Math.max(f.start,m.start),y=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let b=M,L=y;b<L;b+=3){const A=o.getX(b),w=o.getX(b+1),C=o.getX(b+2);s=Ps(this,p,t,n,l,h,d,A,w,C),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=v,p=_;f<p;f+=3){const M=o.getX(f),y=o.getX(f+1),b=o.getX(f+2);s=Ps(this,a,t,n,l,h,d,M,y,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,_=u.length;v<_;v++){const f=u[v],p=a[f.materialIndex],M=Math.max(f.start,m.start),y=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let b=M,L=y;b<L;b+=3){const A=b,w=b+1,C=b+2;s=Ps(this,p,t,n,l,h,d,A,w,C),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=v,p=_;f<p;f+=3){const M=f,y=f+1,b=f+2;s=Ps(this,a,t,n,l,h,d,M,y,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function dd(i,t,e,n,s,r,a,o){let c;if(t.side===Ce?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Gn,o),c===null)return null;Cs.copy(o),Cs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Cs);return l<e.near||l>e.far?null:{distance:l,point:Cs.clone(),object:i}}function Ps(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ws),i.getVertexPosition(c,Ts),i.getVertexPosition(l,As);const h=dd(i,t,e,n,ws,Ts,As,Jo);if(h){const d=new R;Ge.getBarycoord(Jo,ws,Ts,As,d),s&&(h.uv=Ge.getInterpolatedAttribute(s,o,c,l,d,new st)),r&&(h.uv1=Ge.getInterpolatedAttribute(r,o,c,l,d,new st)),a&&(h.normal=Ge.getInterpolatedAttribute(a,o,c,l,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new R,materialIndex:0};Ge.getNormal(ws,Ts,As,u.normal),h.face=u,h.barycoord=d}return h}class Me extends de{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,m=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2));function v(_,f,p,M,y,b,L,A,w,C,V){const g=b/w,S=L/C,O=b/2,N=L/2,W=A/2,K=w+1,H=C+1;let J=0,X=0;const lt=new R;for(let ht=0;ht<H;ht++){const xt=ht*S-N;for(let Xt=0;Xt<K;Xt++){const Jt=Xt*g-O;lt[_]=Jt*M,lt[f]=xt*y,lt[p]=W,l.push(lt.x,lt.y,lt.z),lt[_]=0,lt[f]=0,lt[p]=A>0?1:-1,h.push(lt.x,lt.y,lt.z),d.push(Xt/w),d.push(1-ht/C),J+=1}}for(let ht=0;ht<C;ht++)for(let xt=0;xt<w;xt++){const Xt=u+xt+K*ht,Jt=u+xt+K*(ht+1),q=u+(xt+1)+K*(ht+1),Q=u+(xt+1)+K*ht;c.push(Xt,Jt,Q),c.push(Jt,q,Q),X+=6}o.addGroup(m,X,V),m+=X,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){const t={};for(let e=0;e<i.length;e++){const n=Vi(i[e]);for(const s in n)t[s]=n[s]}return t}function ud(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ml(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const fd={clone:Vi,merge:Re};var pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gl extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new R,Zo=new st,Qo=new st;class ze extends gl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,Zo,Qo),e.subVectors(Qo,Zo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,Si=1;class gd extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ze(Mi,Si,t,e);s.layers=this.layers,this.add(s);const r=new ze(Mi,Si,t,e);r.layers=this.layers,this.add(r);const a=new ze(Mi,Si,t,e);a.layers=this.layers,this.add(a);const o=new ze(Mi,Si,t,e);o.layers=this.layers,this.add(o);const c=new ze(Mi,Si,t,e);c.layers=this.layers,this.add(c);const l=new ze(Mi,Si,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class vl extends Pe{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vd extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Me(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Bn});r.uniforms.tEquirect.value=e;const a=new Pt(s,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=Je),new gd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Wr=new R,_d=new R,xd=new Nt;class Zn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wr.subVectors(n,e).cross(_d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xd.getNormalMatrix(t),s=this.coplanarPoint(Wr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new dr,Ls=new R;class oo{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,a=new Zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],m=s[8],v=s[9],_=s[10],f=s[11],p=s[12],M=s[13],y=s[14],b=s[15];if(n[0].setComponents(c-r,u-l,f-m,b-p).normalize(),n[1].setComponents(c+r,u+l,f+m,b+p).normalize(),n[2].setComponents(c+a,u+h,f+v,b+M).normalize(),n[3].setComponents(c-a,u-h,f-v,b-M).normalize(),n[4].setComponents(c-o,u-d,f-_,b-y).normalize(),e===Mn)n[5].setComponents(c+o,u+d,f+_,b+y).normalize();else if(e===er)n[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ls.x=s.normal.x>0?t.max.x:t.min.x,Ls.y=s.normal.y>0?t.max.y:t.min.y,Ls.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _l(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yd(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((m,v)=>m.start-v.start);let u=0;for(let m=1;m<d.length;m++){const v=d[u],_=d[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++u,d[u]=_)}d.length=u+1;for(let m=0,v=d.length;m<v;m++){const _=d[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Hi extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,m=[],v=[],_=[],f=[];for(let p=0;p<h;p++){const M=p*u-a;for(let y=0;y<l;y++){const b=y*d-r;v.push(b,-M,0),_.push(0,0,1),f.push(y/o),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const y=M+l*p,b=M+l*(p+1),L=M+1+l*(p+1),A=M+1+l*p;m.push(y,b,A),m.push(b,L,A)}this.setIndex(m),this.setAttribute("position",new jt(v,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sd=`#ifdef USE_ALPHAHASH
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
#endif`,Ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ad=`#ifdef USE_AOMAP
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
#endif`,Rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd=`#ifdef USE_BATCHING
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
#endif`,Pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ud=`#ifdef USE_IRIDESCENCE
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
#endif`,Nd=`#ifdef USE_BUMPMAP
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wd=`#define PI 3.141592653589793
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
} // validated`,Xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qd=`vec3 transformedNormal = objectNormal;
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
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`
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
}`,Qd=`#ifdef USE_ENVMAP
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
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eu=`#ifdef USE_ENVMAP
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
#endif`,nu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
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
#endif`,su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,au=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ou=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
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
}`,lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uu=`uniform bool receiveShadow;
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
#endif`,fu=`#ifdef USE_ENVMAP
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
#endif`,pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_u=`PhysicalMaterial material;
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
#endif`,xu=`struct PhysicalMaterial {
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
}`,yu=`
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
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Su=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Au=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pu=`#if defined( USE_POINTS_UV )
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
#endif`,Lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fu=`#ifdef USE_MORPHTARGETS
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
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gu=`#ifdef USE_NORMALMAP
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
#endif`,Wu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ku=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,af=`float getShadowMask() {
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
}`,of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cf=`#ifdef USE_SKINNING
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
#endif`,lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hf=`#ifdef USE_SKINNING
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
#endif`,df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mf=`#ifdef USE_TRANSMISSION
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
#endif`,gf=`#ifdef USE_TRANSMISSION
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
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sf=`uniform sampler2D t2D;
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
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`#include <common>
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
}`,Rf=`#if DEPTH_PACKING == 3200
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
}`,Cf=`#define DISTANCE
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
}`,Pf=`#define DISTANCE
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`uniform float scale;
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
}`,Uf=`uniform vec3 diffuse;
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
}`,Nf=`#include <common>
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
}`,Ff=`uniform vec3 diffuse;
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
}`,Of=`#define LAMBERT
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
}`,kf=`#define LAMBERT
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
}`,Bf=`#define MATCAP
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
}`,zf=`#define MATCAP
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
}`,Vf=`#define NORMAL
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
}`,Hf=`#define NORMAL
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
}`,Gf=`#define PHONG
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
}`,Wf=`#define PHONG
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
}`,Xf=`#define STANDARD
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
}`,qf=`#define STANDARD
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
}`,$f=`#define TOON
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
}`,Yf=`#define TOON
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
}`,Kf=`uniform float size;
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
}`,jf=`uniform vec3 diffuse;
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
}`,Jf=`#include <common>
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
}`,Zf=`uniform vec3 color;
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
}`,Qf=`uniform float rotation;
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
}`,tp=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Md,alphahash_pars_fragment:Sd,alphamap_fragment:Ed,alphamap_pars_fragment:bd,alphatest_fragment:wd,alphatest_pars_fragment:Td,aomap_fragment:Ad,aomap_pars_fragment:Rd,batching_pars_vertex:Cd,batching_vertex:Pd,begin_vertex:Ld,beginnormal_vertex:Dd,bsdfs:Id,iridescence_fragment:Ud,bumpmap_pars_fragment:Nd,clipping_planes_fragment:Fd,clipping_planes_pars_fragment:Od,clipping_planes_pars_vertex:kd,clipping_planes_vertex:Bd,color_fragment:zd,color_pars_fragment:Vd,color_pars_vertex:Hd,color_vertex:Gd,common:Wd,cube_uv_reflection_fragment:Xd,defaultnormal_vertex:qd,displacementmap_pars_vertex:$d,displacementmap_vertex:Yd,emissivemap_fragment:Kd,emissivemap_pars_fragment:jd,colorspace_fragment:Jd,colorspace_pars_fragment:Zd,envmap_fragment:Qd,envmap_common_pars_fragment:tu,envmap_pars_fragment:eu,envmap_pars_vertex:nu,envmap_physical_pars_fragment:fu,envmap_vertex:iu,fog_vertex:su,fog_pars_vertex:ru,fog_fragment:au,fog_pars_fragment:ou,gradientmap_pars_fragment:cu,lightmap_pars_fragment:lu,lights_lambert_fragment:hu,lights_lambert_pars_fragment:du,lights_pars_begin:uu,lights_toon_fragment:pu,lights_toon_pars_fragment:mu,lights_phong_fragment:gu,lights_phong_pars_fragment:vu,lights_physical_fragment:_u,lights_physical_pars_fragment:xu,lights_fragment_begin:yu,lights_fragment_maps:Mu,lights_fragment_end:Su,logdepthbuf_fragment:Eu,logdepthbuf_pars_fragment:bu,logdepthbuf_pars_vertex:wu,logdepthbuf_vertex:Tu,map_fragment:Au,map_pars_fragment:Ru,map_particle_fragment:Cu,map_particle_pars_fragment:Pu,metalnessmap_fragment:Lu,metalnessmap_pars_fragment:Du,morphinstance_vertex:Iu,morphcolor_vertex:Uu,morphnormal_vertex:Nu,morphtarget_pars_vertex:Fu,morphtarget_vertex:Ou,normal_fragment_begin:ku,normal_fragment_maps:Bu,normal_pars_fragment:zu,normal_pars_vertex:Vu,normal_vertex:Hu,normalmap_pars_fragment:Gu,clearcoat_normal_fragment_begin:Wu,clearcoat_normal_fragment_maps:Xu,clearcoat_pars_fragment:qu,iridescence_pars_fragment:$u,opaque_fragment:Yu,packing:Ku,premultiplied_alpha_fragment:ju,project_vertex:Ju,dithering_fragment:Zu,dithering_pars_fragment:Qu,roughnessmap_fragment:tf,roughnessmap_pars_fragment:ef,shadowmap_pars_fragment:nf,shadowmap_pars_vertex:sf,shadowmap_vertex:rf,shadowmask_pars_fragment:af,skinbase_vertex:of,skinning_pars_vertex:cf,skinning_vertex:lf,skinnormal_vertex:hf,specularmap_fragment:df,specularmap_pars_fragment:uf,tonemapping_fragment:ff,tonemapping_pars_fragment:pf,transmission_fragment:mf,transmission_pars_fragment:gf,uv_pars_fragment:vf,uv_pars_vertex:_f,uv_vertex:xf,worldpos_vertex:yf,background_vert:Mf,background_frag:Sf,backgroundCube_vert:Ef,backgroundCube_frag:bf,cube_vert:wf,cube_frag:Tf,depth_vert:Af,depth_frag:Rf,distanceRGBA_vert:Cf,distanceRGBA_frag:Pf,equirect_vert:Lf,equirect_frag:Df,linedashed_vert:If,linedashed_frag:Uf,meshbasic_vert:Nf,meshbasic_frag:Ff,meshlambert_vert:Of,meshlambert_frag:kf,meshmatcap_vert:Bf,meshmatcap_frag:zf,meshnormal_vert:Vf,meshnormal_frag:Hf,meshphong_vert:Gf,meshphong_frag:Wf,meshphysical_vert:Xf,meshphysical_frag:qf,meshtoon_vert:$f,meshtoon_frag:Yf,points_vert:Kf,points_frag:jf,shadow_vert:Jf,shadow_frag:Zf,sprite_vert:Qf,sprite_frag:tp},nt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},nn={basic:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Re([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Re([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Re([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Re([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Re([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Re([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Re([nt.common,nt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Re([nt.lights,nt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};nn.physical={uniforms:Re([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Ds={r:0,b:0,g:0},jn=new cn,ep=new ae;function np(i,t,e,n,s,r,a){const o=new Ft(0);let c=r===!0?0:1,l,h,d=null,u=0,m=null;function v(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const b=v(M);b===null?p(o,c):b&&b.isColor&&(p(b,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(M,y){const b=v(y);b&&(b.isCubeTexture||b.mapping===lr)?(h===void 0&&(h=new Pt(new Me(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Vi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),jn.copy(y.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ep.makeRotationFromEuler(jn)),h.material.toneMapped=Kt.getTransfer(b.colorSpace)!==se,(d!==b||u!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=b,u=b.version,m=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Pt(new Hi(2,2),new Tn({name:"BackgroundMaterial",uniforms:Vi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(b.colorSpace)!==se,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,u=b.version,m=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,y){M.getRGB(Ds,ml(i)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:_,addToRenderList:f}}function ip(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(g,S,O,N,W){let K=!1;const H=d(N,O,S);r!==H&&(r=H,l(r.object)),K=m(g,N,O,W),K&&v(g,N,O,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,b(g,S,O,N),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function d(g,S,O){const N=O.wireframe===!0;let W=n[g.id];W===void 0&&(W={},n[g.id]=W);let K=W[S.id];K===void 0&&(K={},W[S.id]=K);let H=K[N];return H===void 0&&(H=u(c()),K[N]=H),H}function u(g){const S=[],O=[],N=[];for(let W=0;W<e;W++)S[W]=0,O[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:O,attributeDivisors:N,object:g,attributes:{},index:null}}function m(g,S,O,N){const W=r.attributes,K=S.attributes;let H=0;const J=O.getAttributes();for(const X in J)if(J[X].location>=0){const ht=W[X];let xt=K[X];if(xt===void 0&&(X==="instanceMatrix"&&g.instanceMatrix&&(xt=g.instanceMatrix),X==="instanceColor"&&g.instanceColor&&(xt=g.instanceColor)),ht===void 0||ht.attribute!==xt||xt&&ht.data!==xt.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function v(g,S,O,N){const W={},K=S.attributes;let H=0;const J=O.getAttributes();for(const X in J)if(J[X].location>=0){let ht=K[X];ht===void 0&&(X==="instanceMatrix"&&g.instanceMatrix&&(ht=g.instanceMatrix),X==="instanceColor"&&g.instanceColor&&(ht=g.instanceColor));const xt={};xt.attribute=ht,ht&&ht.data&&(xt.data=ht.data),W[X]=xt,H++}r.attributes=W,r.attributesNum=H,r.index=N}function _(){const g=r.newAttributes;for(let S=0,O=g.length;S<O;S++)g[S]=0}function f(g){p(g,0)}function p(g,S){const O=r.newAttributes,N=r.enabledAttributes,W=r.attributeDivisors;O[g]=1,N[g]===0&&(i.enableVertexAttribArray(g),N[g]=1),W[g]!==S&&(i.vertexAttribDivisor(g,S),W[g]=S)}function M(){const g=r.newAttributes,S=r.enabledAttributes;for(let O=0,N=S.length;O<N;O++)S[O]!==g[O]&&(i.disableVertexAttribArray(O),S[O]=0)}function y(g,S,O,N,W,K,H){H===!0?i.vertexAttribIPointer(g,S,O,W,K):i.vertexAttribPointer(g,S,O,N,W,K)}function b(g,S,O,N){_();const W=N.attributes,K=O.getAttributes(),H=S.defaultAttributeValues;for(const J in K){const X=K[J];if(X.location>=0){let lt=W[J];if(lt===void 0&&(J==="instanceMatrix"&&g.instanceMatrix&&(lt=g.instanceMatrix),J==="instanceColor"&&g.instanceColor&&(lt=g.instanceColor)),lt!==void 0){const ht=lt.normalized,xt=lt.itemSize,Xt=t.get(lt);if(Xt===void 0)continue;const Jt=Xt.buffer,q=Xt.type,Q=Xt.bytesPerElement,vt=q===i.INT||q===i.UNSIGNED_INT||lt.gpuType===to;if(lt.isInterleavedBufferAttribute){const dt=lt.data,Dt=dt.stride,bt=lt.offset;if(dt.isInstancedInterleavedBuffer){for(let zt=0;zt<X.locationSize;zt++)p(X.location+zt,dt.meshPerAttribute);g.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let zt=0;zt<X.locationSize;zt++)f(X.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let zt=0;zt<X.locationSize;zt++)y(X.location+zt,xt/X.locationSize,q,ht,Dt*Q,(bt+xt/X.locationSize*zt)*Q,vt)}else{if(lt.isInstancedBufferAttribute){for(let dt=0;dt<X.locationSize;dt++)p(X.location+dt,lt.meshPerAttribute);g.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let dt=0;dt<X.locationSize;dt++)f(X.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let dt=0;dt<X.locationSize;dt++)y(X.location+dt,xt/X.locationSize,q,ht,xt*Q,xt/X.locationSize*dt*Q,vt)}}else if(H!==void 0){const ht=H[J];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(X.location,ht);break;case 3:i.vertexAttrib3fv(X.location,ht);break;case 4:i.vertexAttrib4fv(X.location,ht);break;default:i.vertexAttrib1fv(X.location,ht)}}}}M()}function L(){C();for(const g in n){const S=n[g];for(const O in S){const N=S[O];for(const W in N)h(N[W].object),delete N[W];delete S[O]}delete n[g]}}function A(g){if(n[g.id]===void 0)return;const S=n[g.id];for(const O in S){const N=S[O];for(const W in N)h(N[W].object),delete N[W];delete S[O]}delete n[g.id]}function w(g){for(const S in n){const O=n[S];if(O[g.id]===void 0)continue;const N=O[g.id];for(const W in N)h(N[W].object),delete N[W];delete O[g.id]}}function C(){V(),a=!0,r!==s&&(r=s,l(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:V,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:f,disableUnusedAttributes:M}}function sp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let m=0;for(let v=0;v<d;v++)m+=h[v];e.update(m,n,1)}function c(l,h,d,u){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)a(l[v],h[v],u[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let v=0;for(let _=0;_<d;_++)v+=h[_];for(let _=0;_<u.length;_++)e.update(v,n,u[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function rp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Ze&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==wn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==yn&&!C)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:L,maxSamples:A}}function ap(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Zn,o=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||s;return s=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const v=d.clippingPlanes,_=d.clipIntersection,f=d.clipShadows,p=i.get(d);if(!s||v===null||v.length===0||r&&!f)r?h(null):l();else{const M=r?0:n,y=M*4;let b=p.clippingState||null;c.value=b,b=h(v,u,y,m);for(let L=0;L!==y;++L)b[L]=e[L];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,v){const _=d!==null?d.length:0;let f=null;if(_!==0){if(f=c.value,v!==!0||f===null){const p=m+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let y=0,b=m;y!==_;++y,b+=4)a.copy(d[y]).applyMatrix4(M,o),a.normal.toArray(f,b),f[b+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function op(i){let t=new WeakMap;function e(a,o){return o===ga?a.mapping=Oi:o===va&&(a.mapping=ki),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ga||o===va)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new vd(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class xl extends gl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Pi=4,tc=[.125,.215,.35,.446,.526,.582],ei=20,Xr=new xl,ec=new Ft;let qr=null,$r=0,Yr=0,Kr=!1;const Qn=(1+Math.sqrt(5))/2,Ei=1/Qn,nc=[new R(-Qn,Ei,0),new R(Qn,Ei,0),new R(-Ei,0,Qn),new R(Ei,0,Qn),new R(0,Qn,-Ei),new R(0,Qn,Ei),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class ic{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qr,$r,Yr),this._renderer.xr.enabled=Kr,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:ls,format:Ze,colorSpace:Wn,depthBuffer:!1},s=sc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cp(r)),this._blurMaterial=lp(r,t,e)}return s}_compileMaterial(t){const e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,n,s){const o=new ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ec),h.toneMapping=zn,h.autoClear=!1;const m=new ir({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),v=new Pt(new Me,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(ec),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):M===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const y=this._cubeSize;Is(s,M*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Oi||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Is(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Xr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nc[(s-r-1)%nc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Pt(this._lodPlanes[s],l),u=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ei-1),_=r/v,f=isFinite(r)?1+Math.floor(h*_):ei;f>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ei}`);const p=[];let M=0;for(let w=0;w<ei;++w){const C=w/_,V=Math.exp(-C*C/2);p.push(V),w===0?M+=V:w<f&&(M+=2*V)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=v,u.mipInt.value=y-n;const b=this._sizeLods[s],L=3*b*(s>y-Pi?s-y+Pi:0),A=4*(this._cubeSize-b);Is(e,L,A,3*b,2*b),c.setRenderTarget(e),c.render(d,Xr)}}function cp(i){const t=[],e=[],n=[];let s=i;const r=i-Pi+1+tc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Pi?c=tc[a-i+Pi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,v=6,_=3,f=2,p=1,M=new Float32Array(_*v*m),y=new Float32Array(f*v*m),b=new Float32Array(p*v*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,C=A>2?0:-1,V=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];M.set(V,_*v*A),y.set(u,f*v*A);const g=[A,A,A,A,A,A];b.set(g,p*v*A)}const L=new de;L.setAttribute("position",new Le(M,_)),L.setAttribute("uv",new Le(y,f)),L.setAttribute("faceIndex",new Le(b,p)),t.push(L),s>Pi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sc(i,t,e){const n=new ai(i,t,e);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lp(i,t,e){const n=new Float32Array(ei),s=new R(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:co(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function rc(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ac(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function co(){return`

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
	`}function hp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ga||c===va,h=c===Oi||c===ki;if(l||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new ic(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new ic(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function dp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function up(i,t,e,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);for(const v in u.morphAttributes){const _=u.morphAttributes[v];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}u.removeEventListener("dispose",a),delete s[u.id];const m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const v in u)t.update(u[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const _=m[v];for(let f=0,p=_.length;f<p;f++)t.update(_[f],i.ARRAY_BUFFER)}}function l(d){const u=[],m=d.index,v=d.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let y=0,b=M.length;y<b;y+=3){const L=M[y+0],A=M[y+1],w=M[y+2];u.push(L,A,A,w,w,L)}}else if(v!==void 0){const M=v.array;_=v.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const L=y+0,A=y+1,w=y+2;u.push(L,A,A,w,w,L)}}else return;const f=new(ol(u)?pl:fl)(u,1);f.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,f)}function h(d){const u=r.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function fp(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,m){i.drawElements(n,m,r,u*a),e.update(m,n,1)}function l(u,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,u*a,v),e.update(m,n,v))}function h(u,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,v);let f=0;for(let p=0;p<v;p++)f+=m[p];e.update(f,n,1)}function d(u,m,v,_){if(v===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<u.length;p++)l(u[p]/a,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,_,0,v);let p=0;for(let M=0;M<v;M++)p+=m[M];for(let M=0;M<_.length;M++)e.update(p,n,_[M])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function pp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function mp(i,t,e){const n=new WeakMap,s=new le;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let g=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",g)};var m=g;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;v===!0&&(b=1),_===!0&&(b=2),f===!0&&(b=3);let L=o.attributes.position.count*b,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const w=new Float32Array(L*A*4*d),C=new ll(w,L,A,d);C.type=yn,C.needsUpdate=!0;const V=b*4;for(let S=0;S<d;S++){const O=p[S],N=M[S],W=y[S],K=L*A*4*S;for(let H=0;H<O.count;H++){const J=H*V;v===!0&&(s.fromBufferAttribute(O,H),w[K+J+0]=s.x,w[K+J+1]=s.y,w[K+J+2]=s.z,w[K+J+3]=0),_===!0&&(s.fromBufferAttribute(N,H),w[K+J+4]=s.x,w[K+J+5]=s.y,w[K+J+6]=s.z,w[K+J+7]=0),f===!0&&(s.fromBufferAttribute(W,H),w[K+J+8]=s.x,w[K+J+9]=s.y,w[K+J+10]=s.z,w[K+J+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new st(L,A)},n.set(o,u),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let f=0;f<l.length;f++)v+=l[f];const _=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function gp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class yl extends Pe{constructor(t,e,n,s,r,a,o,c,l,h=Di){if(h!==Di&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Di&&(n=ri),n===void 0&&h===zi&&(n=Bi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:We,this.minFilter=c!==void 0?c:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ml=new Pe,oc=new yl(1,1),Sl=new ll,El=new ed,bl=new vl,cc=[],lc=[],hc=new Float32Array(16),dc=new Float32Array(9),uc=new Float32Array(4);function Xi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=cc[s];if(r===void 0&&(r=new Float32Array(s),cc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ur(i,t){let e=lc[t];e===void 0&&(e=new Int32Array(t),lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Mp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;uc.set(n),i.uniformMatrix2fv(this.addr,!1,uc),ve(e,n)}}function Sp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;dc.set(n),i.uniformMatrix3fv(this.addr,!1,dc),ve(e,n)}}function Ep(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),ve(e,n)}}function bp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Rp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function Dp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oc.compareFunction=al,r=oc):r=Ml,e.setTexture2D(t||r,s)}function Ip(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||El,s)}function Up(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bl,s)}function Np(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Sl,s)}function Fp(i){switch(i){case 5126:return vp;case 35664:return _p;case 35665:return xp;case 35666:return yp;case 35674:return Mp;case 35675:return Sp;case 35676:return Ep;case 5124:case 35670:return bp;case 35667:case 35671:return wp;case 35668:case 35672:return Tp;case 35669:case 35673:return Ap;case 5125:return Rp;case 36294:return Cp;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Np}}function Op(i,t){i.uniform1fv(this.addr,t)}function kp(i,t){const e=Xi(t,this.size,2);i.uniform2fv(this.addr,e)}function Bp(i,t){const e=Xi(t,this.size,3);i.uniform3fv(this.addr,e)}function zp(i,t){const e=Xi(t,this.size,4);i.uniform4fv(this.addr,e)}function Vp(i,t){const e=Xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hp(i,t){const e=Xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gp(i,t){const e=Xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wp(i,t){i.uniform1iv(this.addr,t)}function Xp(i,t){i.uniform2iv(this.addr,t)}function qp(i,t){i.uniform3iv(this.addr,t)}function $p(i,t){i.uniform4iv(this.addr,t)}function Yp(i,t){i.uniform1uiv(this.addr,t)}function Kp(i,t){i.uniform2uiv(this.addr,t)}function jp(i,t){i.uniform3uiv(this.addr,t)}function Jp(i,t){i.uniform4uiv(this.addr,t)}function Zp(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ml,r[a])}function Qp(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||El,r[a])}function tm(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||bl,r[a])}function em(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Sl,r[a])}function nm(i){switch(i){case 5126:return Op;case 35664:return kp;case 35665:return Bp;case 35666:return zp;case 35674:return Vp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return $p;case 5125:return Yp;case 36294:return Kp;case 36295:return jp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}class im{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fp(e.type)}}class sm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nm(e.type)}}class rm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function fc(i,t){i.seq.push(t),i.map[t.id]=t}function am(i,t,e){const n=i.name,s=n.length;for(jr.lastIndex=0;;){const r=jr.exec(n),a=jr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){fc(e,l===void 0?new im(o,i,t):new sm(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new rm(o),fc(e,d)),e=d}}}class Ks{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);am(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function pc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const om=37297;let cm=0;function lm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function hm(i){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(i);let n;switch(t===e?n="":t===tr&&e===Qs?n="LinearDisplayP3ToLinearSRGB":t===Qs&&e===tr&&(n="LinearSRGBToLinearDisplayP3"),i){case Wn:case hr:return[n,"LinearTransferOETF"];case en:case ao:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function mc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+lm(i.getShaderSource(t),a)}else return s}function dm(i,t){const e=hm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function um(i,t){let e;switch(t){case Ah:e="Linear";break;case Rh:e="Reinhard";break;case Ch:e="Cineon";break;case Ph:e="ACESFilmic";break;case Dh:e="AgX";break;case Ih:e="Neutral";break;case Lh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Us=new R;function fm(){Kt.getLuminanceCoefficients(Us);const i=Us.x.toFixed(4),t=Us.y.toFixed(4),e=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function mm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function is(i){return i!==""}function gc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(vm,xm)}const _m=new Map;function xm(i,t){let e=Ut[t];if(e===void 0){const n=_m.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(i){return i.replace(ym,Mm)}function Mm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Em(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case ki:t="ENVMAP_TYPE_CUBE";break;case lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ki:t="ENVMAP_MODE_REFRACTION";break}return t}function wm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $c:t="ENVMAP_BLENDING_MULTIPLY";break;case wh:t="ENVMAP_BLENDING_MIX";break;case Th:t="ENVMAP_BLENDING_ADD";break}return t}function Tm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Am(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Sm(e),l=Em(e),h=bm(e),d=wm(e),u=Tm(e),m=pm(e),v=mm(r),_=s.createProgram();let f,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(is).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(is).join(`
`),p.length>0&&(p+=`
`)):(f=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),p=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==zn?um("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,dm("linearToOutputTexel",e.outputColorSpace),fm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(is).join(`
`)),a=Ya(a),a=gc(a,e),a=vc(a,e),o=Ya(o),o=gc(o,e),o=vc(o,e),a=_c(a),o=_c(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===Fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+f+a,b=M+p+o,L=pc(s,s.VERTEX_SHADER,y),A=pc(s,s.FRAGMENT_SHADER,b);s.attachShader(_,L),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(S){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(L).trim(),W=s.getShaderInfoLog(A).trim();let K=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,A);else{const J=mc(s,L,"vertex"),X=mc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+O+`
`+J+`
`+X)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||W==="")&&(H=!1);H&&(S.diagnostics={runnable:K,programLog:O,vertexShader:{log:N,prefix:f},fragmentShader:{log:W,prefix:p}})}s.deleteShader(L),s.deleteShader(A),C=new Ks(s,_),V=gm(s,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let V;this.getAttributes=function(){return V===void 0&&w(this),V};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(_,om)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let Rm=0;class Cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Pm(t),e.set(t,n)),n}}class Pm{constructor(t){this.id=Rm++,this.code=t,this.usedTimes=0}}function Lm(i,t,e,n,s,r,a){const o=new dl,c=new Cm,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,m=s.vertexTextures;let v=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function p(g,S,O,N,W){const K=N.fog,H=W.geometry,J=g.isMeshStandardMaterial?N.environment:null,X=(g.isMeshStandardMaterial?e:t).get(g.envMap||J),lt=X&&X.mapping===lr?X.image.height:null,ht=_[g.type];g.precision!==null&&(v=s.getMaxPrecision(g.precision),v!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",v,"instead."));const xt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xt=xt!==void 0?xt.length:0;let Jt=0;H.morphAttributes.position!==void 0&&(Jt=1),H.morphAttributes.normal!==void 0&&(Jt=2),H.morphAttributes.color!==void 0&&(Jt=3);let q,Q,vt,dt;if(ht){const Ue=nn[ht];q=Ue.vertexShader,Q=Ue.fragmentShader}else q=g.vertexShader,Q=g.fragmentShader,c.update(g),vt=c.getVertexShaderID(g),dt=c.getFragmentShaderID(g);const Dt=i.getRenderTarget(),bt=W.isInstancedMesh===!0,zt=W.isBatchedMesh===!0,Qt=!!g.map,Vt=!!g.matcap,P=!!X,Ne=!!g.aoMap,kt=!!g.lightMap,Gt=!!g.bumpMap,Tt=!!g.normalMap,ne=!!g.displacementMap,Ct=!!g.emissiveMap,T=!!g.metalnessMap,x=!!g.roughnessMap,F=g.anisotropy>0,Y=g.clearcoat>0,Z=g.dispersion>0,$=g.iridescence>0,yt=g.sheen>0,it=g.transmission>0,ut=F&&!!g.anisotropyMap,Wt=Y&&!!g.clearcoatMap,tt=Y&&!!g.clearcoatNormalMap,ft=Y&&!!g.clearcoatRoughnessMap,At=$&&!!g.iridescenceMap,Rt=$&&!!g.iridescenceThicknessMap,pt=yt&&!!g.sheenColorMap,Bt=yt&&!!g.sheenRoughnessMap,It=!!g.specularMap,ee=!!g.specularColorMap,D=!!g.specularIntensityMap,ot=it&&!!g.transmissionMap,G=it&&!!g.thicknessMap,j=!!g.gradientMap,rt=!!g.alphaMap,ct=g.alphaTest>0,Ht=!!g.alphaHash,ue=!!g.extensions;let Ie=zn;g.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const qt={shaderID:ht,shaderType:g.type,shaderName:g.name,vertexShader:q,fragmentShader:Q,defines:g.defines,customVertexShaderID:vt,customFragmentShaderID:dt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:v,batching:zt,batchingColor:zt&&W._colorsTexture!==null,instancing:bt,instancingColor:bt&&W.instanceColor!==null,instancingMorph:bt&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Dt===null?i.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:Wn,alphaToCoverage:!!g.alphaToCoverage,map:Qt,matcap:Vt,envMap:P,envMapMode:P&&X.mapping,envMapCubeUVHeight:lt,aoMap:Ne,lightMap:kt,bumpMap:Gt,normalMap:Tt,displacementMap:m&&ne,emissiveMap:Ct,normalMapObjectSpace:Tt&&g.normalMapType===Oh,normalMapTangentSpace:Tt&&g.normalMapType===rl,metalnessMap:T,roughnessMap:x,anisotropy:F,anisotropyMap:ut,clearcoat:Y,clearcoatMap:Wt,clearcoatNormalMap:tt,clearcoatRoughnessMap:ft,dispersion:Z,iridescence:$,iridescenceMap:At,iridescenceThicknessMap:Rt,sheen:yt,sheenColorMap:pt,sheenRoughnessMap:Bt,specularMap:It,specularColorMap:ee,specularIntensityMap:D,transmission:it,transmissionMap:ot,thicknessMap:G,gradientMap:j,opaque:g.transparent===!1&&g.blending===Li&&g.alphaToCoverage===!1,alphaMap:rt,alphaTest:ct,alphaHash:Ht,combine:g.combine,mapUv:Qt&&f(g.map.channel),aoMapUv:Ne&&f(g.aoMap.channel),lightMapUv:kt&&f(g.lightMap.channel),bumpMapUv:Gt&&f(g.bumpMap.channel),normalMapUv:Tt&&f(g.normalMap.channel),displacementMapUv:ne&&f(g.displacementMap.channel),emissiveMapUv:Ct&&f(g.emissiveMap.channel),metalnessMapUv:T&&f(g.metalnessMap.channel),roughnessMapUv:x&&f(g.roughnessMap.channel),anisotropyMapUv:ut&&f(g.anisotropyMap.channel),clearcoatMapUv:Wt&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:tt&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&f(g.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&f(g.sheenRoughnessMap.channel),specularMapUv:It&&f(g.specularMap.channel),specularColorMapUv:ee&&f(g.specularColorMap.channel),specularIntensityMapUv:D&&f(g.specularIntensityMap.channel),transmissionMapUv:ot&&f(g.transmissionMap.channel),thicknessMapUv:G&&f(g.thicknessMap.channel),alphaMapUv:rt&&f(g.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Tt||F),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!H.attributes.uv&&(Qt||rt),fog:!!K,useFog:g.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:Jt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Qt&&g.map.isVideoTexture===!0&&Kt.getTransfer(g.map.colorSpace)===se,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===_n,flipSided:g.side===Ce,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ue&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&g.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function M(g){const S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(const O in g.defines)S.push(O),S.push(g.defines[O]);return g.isRawShaderMaterial===!1&&(y(S,g),b(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function y(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function b(g,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),g.push(o.mask)}function L(g){const S=_[g.type];let O;if(S){const N=nn[S];O=fd.clone(N.uniforms)}else O=g.uniforms;return O}function A(g,S){let O;for(let N=0,W=h.length;N<W;N++){const K=h[N];if(K.cacheKey===S){O=K,++O.usedTimes;break}}return O===void 0&&(O=new Am(i,S,g,r),h.push(O)),O}function w(g){if(--g.usedTimes===0){const S=h.indexOf(g);h[S]=h[h.length-1],h.pop(),g.destroy()}}function C(g){c.remove(g)}function V(){c.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:L,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:V}}function Dm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Im(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,m,v,_,f){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:m,groupOrder:v,renderOrder:d.renderOrder,z:_,group:f},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=_,p.group=f),t++,p}function o(d,u,m,v,_,f){const p=a(d,u,m,v,_,f);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function c(d,u,m,v,_,f){const p=a(d,u,m,v,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||Im),n.length>1&&n.sort(u||yc),s.length>1&&s.sort(u||yc)}function h(){for(let d=t,u=i.length;d<u;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Um(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Mc,i.set(n,[a])):s>=r.length?(a=new Mc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Nm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ft};break;case"SpotLight":e={position:new R,direction:new R,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Fm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Om=0;function km(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bm(i){const t=new Nm,e=Fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new ae,a=new ae;function o(l){let h=0,d=0,u=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let m=0,v=0,_=0,f=0,p=0,M=0,y=0,b=0,L=0,A=0,w=0;l.sort(km);for(let V=0,g=l.length;V<g;V++){const S=l[V],O=S.color,N=S.intensity,W=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=O.r*N,d+=O.g*N,u+=O.b*N;else if(S.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(S.sh.coefficients[H],N);w++}else if(S.isDirectionalLight){const H=t.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const J=S.shadow,X=e.get(S);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=S.shadow.matrix,M++}n.directional[m]=H,m++}else if(S.isSpotLight){const H=t.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(O).multiplyScalar(N),H.distance=W,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,n.spot[_]=H;const J=S.shadow;if(S.map&&(n.spotLightMap[L]=S.map,L++,J.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[_]=J.matrix,S.castShadow){const X=e.get(S);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=K,b++}_++}else if(S.isRectAreaLight){const H=t.get(S);H.color.copy(O).multiplyScalar(N),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),n.rectArea[f]=H,f++}else if(S.isPointLight){const H=t.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){const J=S.shadow,X=e.get(S);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,n.pointShadow[v]=X,n.pointShadowMap[v]=K,n.pointShadowMatrix[v]=S.shadow.matrix,y++}n.point[v]=H,v++}else if(S.isHemisphereLight){const H=t.get(S);H.skyColor.copy(S.color).multiplyScalar(N),H.groundColor.copy(S.groundColor).multiplyScalar(N),n.hemi[p]=H,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==m||C.pointLength!==v||C.spotLength!==_||C.rectAreaLength!==f||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==b||C.numSpotMaps!==L||C.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=m,C.pointLength=v,C.spotLength=_,C.rectAreaLength=f,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=b,C.numSpotMaps=L,C.numLightProbes=w,n.version=Om++)}function c(l,h){let d=0,u=0,m=0,v=0,_=0;const f=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const y=l[p];if(y.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),d++}else if(y.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),m++}else if(y.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(y.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),u++}else if(y.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),_++}}}return{setup:o,setupView:c,state:n}}function Sc(i){const t=new Bm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function zm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Sc(i),t.set(s,[o])):r>=a.length?(o=new Sc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Vm extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hm extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
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
}`;function Xm(i,t,e){let n=new oo;const s=new st,r=new st,a=new le,o=new Vm({depthPacking:Fh}),c=new Hm,l={},h=e.maxTextureSize,d={[Gn]:Ce,[Ce]:Gn,[_n]:_n},u=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Gm,fragmentShader:Wm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const v=new de;v.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(v,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let p=this.type;this.render=function(A,w,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const V=i.getRenderTarget(),g=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Bn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=p!==gn&&this.type===gn,W=p===gn&&this.type!==gn;for(let K=0,H=A.length;K<H;K++){const J=A[K],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const lt=X.getFrameExtents();if(s.multiply(lt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,X.mapSize.y=r.y)),X.map===null||N===!0||W===!0){const xt=this.type!==gn?{minFilter:We,magFilter:We}:{};X.map!==null&&X.map.dispose(),X.map=new ai(s.x,s.y,xt),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ht=X.getViewportCount();for(let xt=0;xt<ht;xt++){const Xt=X.getViewport(xt);a.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),O.viewport(a),X.updateMatrices(J,xt),n=X.getFrustum(),b(w,C,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===gn&&M(X,C),X.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(V,g,S)};function M(A,w){const C=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ai(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,C,u,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,C,m,_,null)}function y(A,w,C,V){let g=null;const S=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)g=S;else if(g=C.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=g.uuid,N=w.uuid;let W=l[O];W===void 0&&(W={},l[O]=W);let K=W[N];K===void 0&&(K=g.clone(),W[N]=K,w.addEventListener("dispose",L)),g=K}if(g.visible=w.visible,g.wireframe=w.wireframe,V===gn?g.side=w.shadowSide!==null?w.shadowSide:w.side:g.side=w.shadowSide!==null?w.shadowSide:d[w.side],g.alphaMap=w.alphaMap,g.alphaTest=w.alphaTest,g.map=w.map,g.clipShadows=w.clipShadows,g.clippingPlanes=w.clippingPlanes,g.clipIntersection=w.clipIntersection,g.displacementMap=w.displacementMap,g.displacementScale=w.displacementScale,g.displacementBias=w.displacementBias,g.wireframeLinewidth=w.wireframeLinewidth,g.linewidth=w.linewidth,C.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const O=i.properties.get(g);O.light=C}return g}function b(A,w,C,V,g){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&g===gn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const N=t.update(A),W=A.material;if(Array.isArray(W)){const K=N.groups;for(let H=0,J=K.length;H<J;H++){const X=K[H],lt=W[X.materialIndex];if(lt&&lt.visible){const ht=y(A,lt,V,g);A.onBeforeShadow(i,A,w,C,N,ht,X),i.renderBufferDirect(C,null,N,ht,A,X),A.onAfterShadow(i,A,w,C,N,ht,X)}}}else if(W.visible){const K=y(A,W,V,g);A.onBeforeShadow(i,A,w,C,N,K,null),i.renderBufferDirect(C,null,N,K,A,null),A.onAfterShadow(i,A,w,C,N,K,null)}}const O=A.children;for(let N=0,W=O.length;N<W;N++)b(O[N],w,C,V,g)}function L(A){A.target.removeEventListener("dispose",L);for(const C in l){const V=l[C],g=A.target.uuid;g in V&&(V[g].dispose(),delete V[g])}}}const qm={[la]:ha,[da]:pa,[ua]:ma,[Fi]:fa,[ha]:la,[pa]:da,[ma]:ua,[fa]:Fi};function $m(i){function t(){let D=!1;const ot=new le;let G=null;const j=new le(0,0,0,0);return{setMask:function(rt){G!==rt&&!D&&(i.colorMask(rt,rt,rt,rt),G=rt)},setLocked:function(rt){D=rt},setClear:function(rt,ct,Ht,ue,Ie){Ie===!0&&(rt*=ue,ct*=ue,Ht*=ue),ot.set(rt,ct,Ht,ue),j.equals(ot)===!1&&(i.clearColor(rt,ct,Ht,ue),j.copy(ot))},reset:function(){D=!1,G=null,j.set(-1,0,0,0)}}}function e(){let D=!1,ot=!1,G=null,j=null,rt=null;return{setReversed:function(ct){ot=ct},setTest:function(ct){ct?vt(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(ct){G!==ct&&!D&&(i.depthMask(ct),G=ct)},setFunc:function(ct){if(ot&&(ct=qm[ct]),j!==ct){switch(ct){case la:i.depthFunc(i.NEVER);break;case ha:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case fa:i.depthFunc(i.GEQUAL);break;case pa:i.depthFunc(i.GREATER);break;case ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ct}},setLocked:function(ct){D=ct},setClear:function(ct){rt!==ct&&(i.clearDepth(ct),rt=ct)},reset:function(){D=!1,G=null,j=null,rt=null}}}function n(){let D=!1,ot=null,G=null,j=null,rt=null,ct=null,Ht=null,ue=null,Ie=null;return{setTest:function(qt){D||(qt?vt(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(qt){ot!==qt&&!D&&(i.stencilMask(qt),ot=qt)},setFunc:function(qt,Ue,hn){(G!==qt||j!==Ue||rt!==hn)&&(i.stencilFunc(qt,Ue,hn),G=qt,j=Ue,rt=hn)},setOp:function(qt,Ue,hn){(ct!==qt||Ht!==Ue||ue!==hn)&&(i.stencilOp(qt,Ue,hn),ct=qt,Ht=Ue,ue=hn)},setLocked:function(qt){D=qt},setClear:function(qt){Ie!==qt&&(i.clearStencil(qt),Ie=qt)},reset:function(){D=!1,ot=null,G=null,j=null,rt=null,ct=null,Ht=null,ue=null,Ie=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,u=[],m=null,v=!1,_=null,f=null,p=null,M=null,y=null,b=null,L=null,A=new Ft(0,0,0),w=0,C=!1,V=null,g=null,S=null,O=null,N=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=H>=2);let X=null,lt={};const ht=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Xt=new le().fromArray(ht),Jt=new le().fromArray(xt);function q(D,ot,G,j){const rt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(D,ct),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<G;Ht++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(ot+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return ct}const Q={};Q[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),vt(i.DEPTH_TEST),r.setFunc(Fi),kt(!1),Gt(Lo),vt(i.CULL_FACE),P(Bn);function vt(D){l[D]!==!0&&(i.enable(D),l[D]=!0)}function dt(D){l[D]!==!1&&(i.disable(D),l[D]=!1)}function Dt(D,ot){return h[D]!==ot?(i.bindFramebuffer(D,ot),h[D]=ot,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function bt(D,ot){let G=u,j=!1;if(D){G=d.get(ot),G===void 0&&(G=[],d.set(ot,G));const rt=D.textures;if(G.length!==rt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Ht=rt.length;ct<Ht;ct++)G[ct]=i.COLOR_ATTACHMENT0+ct;G.length=rt.length,j=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,j=!0);j&&i.drawBuffers(G)}function zt(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const Qt={[ti]:i.FUNC_ADD,[ch]:i.FUNC_SUBTRACT,[lh]:i.FUNC_REVERSE_SUBTRACT};Qt[hh]=i.MIN,Qt[dh]=i.MAX;const Vt={[uh]:i.ZERO,[fh]:i.ONE,[ph]:i.SRC_COLOR,[oa]:i.SRC_ALPHA,[yh]:i.SRC_ALPHA_SATURATE,[_h]:i.DST_COLOR,[gh]:i.DST_ALPHA,[mh]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[xh]:i.ONE_MINUS_DST_COLOR,[vh]:i.ONE_MINUS_DST_ALPHA,[Mh]:i.CONSTANT_COLOR,[Sh]:i.ONE_MINUS_CONSTANT_COLOR,[Eh]:i.CONSTANT_ALPHA,[bh]:i.ONE_MINUS_CONSTANT_ALPHA};function P(D,ot,G,j,rt,ct,Ht,ue,Ie,qt){if(D===Bn){v===!0&&(dt(i.BLEND),v=!1);return}if(v===!1&&(vt(i.BLEND),v=!0),D!==oh){if(D!==_||qt!==C){if((f!==ti||y!==ti)&&(i.blendEquation(i.FUNC_ADD),f=ti,y=ti),qt)switch(D){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,M=null,b=null,L=null,A.set(0,0,0),w=0,_=D,C=qt}return}rt=rt||ot,ct=ct||G,Ht=Ht||j,(ot!==f||rt!==y)&&(i.blendEquationSeparate(Qt[ot],Qt[rt]),f=ot,y=rt),(G!==p||j!==M||ct!==b||Ht!==L)&&(i.blendFuncSeparate(Vt[G],Vt[j],Vt[ct],Vt[Ht]),p=G,M=j,b=ct,L=Ht),(ue.equals(A)===!1||Ie!==w)&&(i.blendColor(ue.r,ue.g,ue.b,Ie),A.copy(ue),w=Ie),_=D,C=!1}function Ne(D,ot){D.side===_n?dt(i.CULL_FACE):vt(i.CULL_FACE);let G=D.side===Ce;ot&&(G=!G),kt(G),D.blending===Li&&D.transparent===!1?P(Bn):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(D){V!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),V=D)}function Gt(D){D!==rh?(vt(i.CULL_FACE),D!==g&&(D===Lo?i.cullFace(i.BACK):D===ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),g=D}function Tt(D){D!==S&&(K&&i.lineWidth(D),S=D)}function ne(D,ot,G){D?(vt(i.POLYGON_OFFSET_FILL),(O!==ot||N!==G)&&(i.polygonOffset(ot,G),O=ot,N=G)):dt(i.POLYGON_OFFSET_FILL)}function Ct(D){D?vt(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+W-1),X!==D&&(i.activeTexture(D),X=D)}function x(D,ot,G){G===void 0&&(X===null?G=i.TEXTURE0+W-1:G=X);let j=lt[G];j===void 0&&(j={type:void 0,texture:void 0},lt[G]=j),(j.type!==D||j.texture!==ot)&&(X!==G&&(i.activeTexture(G),X=G),i.bindTexture(D,ot||Q[D]),j.type=D,j.texture=ot)}function F(){const D=lt[X];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){Xt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Xt.copy(D))}function pt(D){Jt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Jt.copy(D))}function Bt(D,ot){let G=c.get(ot);G===void 0&&(G=new WeakMap,c.set(ot,G));let j=G.get(D);j===void 0&&(j=i.getUniformBlockIndex(ot,D.name),G.set(D,j))}function It(D,ot){const j=c.get(ot).get(D);o.get(ot)!==j&&(i.uniformBlockBinding(ot,j,D.__bindingPointIndex),o.set(ot,j))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},X=null,lt={},h={},d=new WeakMap,u=[],m=null,v=!1,_=null,f=null,p=null,M=null,y=null,b=null,L=null,A=new Ft(0,0,0),w=0,C=!1,V=null,g=null,S=null,O=null,N=null,Xt.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:vt,disable:dt,bindFramebuffer:Dt,drawBuffers:bt,useProgram:zt,setBlending:P,setMaterial:Ne,setFlipSided:kt,setCullFace:Gt,setLineWidth:Tt,setPolygonOffset:ne,setScissorTest:Ct,activeTexture:T,bindTexture:x,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:ft,texImage3D:At,updateUBOMapping:Bt,uniformBlockBinding:It,texStorage2D:Wt,texStorage3D:tt,texSubImage2D:$,texSubImage3D:yt,compressedTexSubImage2D:it,compressedTexSubImage3D:ut,scissor:Rt,viewport:pt,reset:ee}}function Ec(i,t,e,n){const s=Ym(n);switch(e){case Zc:return i*t;case tl:return i*t;case el:return i*t*2;case nl:return i*t/s.components*s.byteLength;case io:return i*t/s.components*s.byteLength;case il:return i*t*2/s.components*s.byteLength;case so:return i*t*2/s.components*s.byteLength;case Qc:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case ro:return i*t*4/s.components*s.byteLength;case Gs:case Ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:case Ea:return Math.max(i,16)*Math.max(t,8)/4;case ya:case Sa:return Math.max(i,8)*Math.max(t,8)/2;case ba:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $s:case Va:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sl:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ym(i){switch(i){case wn:case Kc:return{byteLength:1,components:1};case os:case jc:case ls:return{byteLength:2,components:1};case eo:case no:return{byteLength:2,components:4};case ri:case to:case yn:return{byteLength:4,components:1};case Jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Km(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,h=new WeakMap;let d;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,x){return m?new OffscreenCanvas(T,x):nr("canvas")}function _(T,x,F){let Y=1;const Z=Ct(T);if((Z.width>F||Z.height>F)&&(Y=F/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(Y*Z.width),yt=Math.floor(Y*Z.height);d===void 0&&(d=v($,yt));const it=x?v($,yt):d;return it.width=$,it.height=yt,it.getContext("2d").drawImage(T,0,0,$,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+yt+")."),it}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function f(T){return T.generateMipmaps&&T.minFilter!==We&&T.minFilter!==Je}function p(T){i.generateMipmap(T)}function M(T,x,F,Y,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=x;if(x===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),x===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGB8UI),F===i.UNSIGNED_SHORT&&($=i.RGB16UI),F===i.UNSIGNED_INT&&($=i.RGB32UI),F===i.BYTE&&($=i.RGB8I),F===i.SHORT&&($=i.RGB16I),F===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGBA8UI),F===i.UNSIGNED_SHORT&&($=i.RGBA16UI),F===i.UNSIGNED_INT&&($=i.RGBA32UI),F===i.BYTE&&($=i.RGBA8I),F===i.SHORT&&($=i.RGBA16I),F===i.INT&&($=i.RGBA32I)),x===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),x===i.RGBA){const yt=Z?Zs:Kt.getTransfer(Y);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=yt===se?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(T,x){let F;return T?x===null||x===ri||x===Bi?F=i.DEPTH24_STENCIL8:x===yn?F=i.DEPTH32F_STENCIL8:x===os&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ri||x===Bi?F=i.DEPTH_COMPONENT24:x===yn?F=i.DEPTH_COMPONENT32F:x===os&&(F=i.DEPTH_COMPONENT16),F}function b(T,x){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==We&&T.minFilter!==Je?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function L(T){const x=T.target;x.removeEventListener("dispose",L),w(x),x.isVideoTexture&&h.delete(x)}function A(T){const x=T.target;x.removeEventListener("dispose",A),V(x)}function w(T){const x=n.get(T);if(x.__webglInit===void 0)return;const F=T.source,Y=u.get(F);if(Y){const Z=Y[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(T),Object.keys(Y).length===0&&u.delete(F)}n.remove(T)}function C(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const F=T.source,Y=u.get(F);delete Y[x.__cacheKey],a.memory.textures--}function V(T){const x=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Z=0;Z<x.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=T.textures;for(let Y=0,Z=F.length;Y<Z;Y++){const $=n.get(F[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(T)}let g=0;function S(){g=0}function O(){const T=g;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),g+=1,T}function N(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function W(T,x){const F=n.get(T);if(T.isVideoTexture&&Tt(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Jt(F,T,x);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function K(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Jt(F,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function H(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Jt(F,T,x);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function J(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){q(F,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const X={[_a]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[xa]:i.MIRRORED_REPEAT},lt={[We]:i.NEAREST,[Uh]:i.NEAREST_MIPMAP_NEAREST,[ps]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[Mr]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},ht={[kh]:i.NEVER,[Wh]:i.ALWAYS,[Bh]:i.LESS,[al]:i.LEQUAL,[zh]:i.EQUAL,[Gh]:i.GEQUAL,[Vh]:i.GREATER,[Hh]:i.NOTEQUAL};function xt(T,x){if(x.type===yn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Je||x.magFilter===Mr||x.magFilter===ps||x.magFilter===ii||x.minFilter===Je||x.minFilter===Mr||x.minFilter===ps||x.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,X[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,X[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,X[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,lt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ht[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===We||x.minFilter!==ps&&x.minFilter!==ii||x.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Xt(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",L));const Y=x.source;let Z=u.get(Y);Z===void 0&&(Z={},u.set(Y,Z));const $=N(x);if($!==T.__cacheKey){Z[$]===void 0&&(Z[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[$].usedTimes++;const yt=Z[T.__cacheKey];yt!==void 0&&(Z[T.__cacheKey].usedTimes--,yt.usedTimes===0&&C(x)),T.__cacheKey=$,T.__webglTexture=Z[$].texture}return F}function Jt(T,x,F){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=Xt(T,x),$=x.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+F);const yt=n.get($);if($.version!==yt.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);const it=Kt.getPrimaries(Kt.workingColorSpace),ut=x.colorSpace===Fn?null:Kt.getPrimaries(x.colorSpace),Wt=x.colorSpace===Fn||it===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let tt=_(x.image,!1,s.maxTextureSize);tt=ne(x,tt);const ft=r.convert(x.format,x.colorSpace),At=r.convert(x.type);let Rt=M(x.internalFormat,ft,At,x.colorSpace,x.isVideoTexture);xt(Y,x);let pt;const Bt=x.mipmaps,It=x.isVideoTexture!==!0,ee=yt.__version===void 0||Z===!0,D=$.dataReady,ot=b(x,tt);if(x.isDepthTexture)Rt=y(x.format===zi,x.type),ee&&(It?e.texStorage2D(i.TEXTURE_2D,1,Rt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,tt.width,tt.height,0,ft,At,null));else if(x.isDataTexture)if(Bt.length>0){It&&ee&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,Bt[0].width,Bt[0].height);for(let G=0,j=Bt.length;G<j;G++)pt=Bt[G],It?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,At,pt.data):e.texImage2D(i.TEXTURE_2D,G,Rt,pt.width,pt.height,0,ft,At,pt.data);x.generateMipmaps=!1}else It?(ee&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,tt.width,tt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,ft,At,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,tt.width,tt.height,0,ft,At,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){It&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Rt,Bt[0].width,Bt[0].height,tt.depth);for(let G=0,j=Bt.length;G<j;G++)if(pt=Bt[G],x.format!==Ze)if(ft!==null)if(It){if(D)if(x.layerUpdates.size>0){const rt=Ec(pt.width,pt.height,x.format,x.type);for(const ct of x.layerUpdates){const Ht=pt.data.subarray(ct*rt/pt.data.BYTES_PER_ELEMENT,(ct+1)*rt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ct,pt.width,pt.height,1,ft,Ht,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,tt.depth,ft,pt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Rt,pt.width,pt.height,tt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,tt.depth,ft,At,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Rt,pt.width,pt.height,tt.depth,0,ft,At,pt.data)}else{It&&ee&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,Bt[0].width,Bt[0].height);for(let G=0,j=Bt.length;G<j;G++)pt=Bt[G],x.format!==Ze?ft!==null?It?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,At,pt.data):e.texImage2D(i.TEXTURE_2D,G,Rt,pt.width,pt.height,0,ft,At,pt.data)}else if(x.isDataArrayTexture)if(It){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Rt,tt.width,tt.height,tt.depth),D)if(x.layerUpdates.size>0){const G=Ec(tt.width,tt.height,x.format,x.type);for(const j of x.layerUpdates){const rt=tt.data.subarray(j*G/tt.data.BYTES_PER_ELEMENT,(j+1)*G/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,ft,At,rt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ft,At,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,tt.width,tt.height,tt.depth,0,ft,At,tt.data);else if(x.isData3DTexture)It?(ee&&e.texStorage3D(i.TEXTURE_3D,ot,Rt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ft,At,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,tt.width,tt.height,tt.depth,0,ft,At,tt.data);else if(x.isFramebufferTexture){if(ee)if(It)e.texStorage2D(i.TEXTURE_2D,ot,Rt,tt.width,tt.height);else{let G=tt.width,j=tt.height;for(let rt=0;rt<ot;rt++)e.texImage2D(i.TEXTURE_2D,rt,Rt,G,j,0,ft,At,null),G>>=1,j>>=1}}else if(Bt.length>0){if(It&&ee){const G=Ct(Bt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Rt,G.width,G.height)}for(let G=0,j=Bt.length;G<j;G++)pt=Bt[G],It?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ft,At,pt):e.texImage2D(i.TEXTURE_2D,G,Rt,ft,At,pt);x.generateMipmaps=!1}else if(It){if(ee){const G=Ct(tt);e.texStorage2D(i.TEXTURE_2D,ot,Rt,G.width,G.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,At,tt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ft,At,tt);f(x)&&p(Y),yt.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function q(T,x,F){if(x.image.length!==6)return;const Y=Xt(T,x),Z=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const $=n.get(Z);if(Z.version!==$.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);const yt=Kt.getPrimaries(Kt.workingColorSpace),it=x.colorSpace===Fn?null:Kt.getPrimaries(x.colorSpace),ut=x.colorSpace===Fn||yt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Wt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let j=0;j<6;j++)!Wt&&!tt?ft[j]=_(x.image[j],!0,s.maxCubemapSize):ft[j]=tt?x.image[j].image:x.image[j],ft[j]=ne(x,ft[j]);const At=ft[0],Rt=r.convert(x.format,x.colorSpace),pt=r.convert(x.type),Bt=M(x.internalFormat,Rt,pt,x.colorSpace),It=x.isVideoTexture!==!0,ee=$.__version===void 0||Y===!0,D=Z.dataReady;let ot=b(x,At);xt(i.TEXTURE_CUBE_MAP,x);let G;if(Wt){It&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Bt,At.width,At.height);for(let j=0;j<6;j++){G=ft[j].mipmaps;for(let rt=0;rt<G.length;rt++){const ct=G[rt];x.format!==Ze?Rt!==null?It?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,rt,0,0,ct.width,ct.height,Rt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,rt,Bt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,rt,0,0,ct.width,ct.height,Rt,pt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,rt,Bt,ct.width,ct.height,0,Rt,pt,ct.data)}}}else{if(G=x.mipmaps,It&&ee){G.length>0&&ot++;const j=Ct(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Bt,j.width,j.height)}for(let j=0;j<6;j++)if(tt){It?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ft[j].width,ft[j].height,Rt,pt,ft[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Bt,ft[j].width,ft[j].height,0,Rt,pt,ft[j].data);for(let rt=0;rt<G.length;rt++){const Ht=G[rt].image[j].image;It?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,rt+1,0,0,Ht.width,Ht.height,Rt,pt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,rt+1,Bt,Ht.width,Ht.height,0,Rt,pt,Ht.data)}}else{It?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Rt,pt,ft[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Bt,Rt,pt,ft[j]);for(let rt=0;rt<G.length;rt++){const ct=G[rt];It?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,rt+1,0,0,Rt,pt,ct.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,rt+1,Bt,Rt,pt,ct.image[j])}}}f(x)&&p(i.TEXTURE_CUBE_MAP),$.__version=Z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Q(T,x,F,Y,Z,$){const yt=r.convert(F.format,F.colorSpace),it=r.convert(F.type),ut=M(F.internalFormat,yt,it,F.colorSpace);if(!n.get(x).__hasExternalTextures){const tt=Math.max(1,x.width>>$),ft=Math.max(1,x.height>>$);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,$,ut,tt,ft,x.depth,0,yt,it,null):e.texImage2D(Z,$,ut,tt,ft,0,yt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,n.get(F).__webglTexture,0,kt(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,n.get(F).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(T,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const Y=x.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,$=y(x.stencilBuffer,Z),yt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=kt(x);Gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,$,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,T)}else{const Y=x.textures;for(let Z=0;Z<Y.length;Z++){const $=Y[Z],yt=r.convert($.format,$.colorSpace),it=r.convert($.type),ut=M($.internalFormat,yt,it,$.colorSpace),Wt=kt(x);F&&Gt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ut,x.width,x.height):Gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const Y=n.get(x.depthTexture).__webglTexture,Z=kt(x);if(x.depthTexture.format===Di)Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(x.depthTexture.format===zi)Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Dt(T){const x=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=Y}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");dt(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),vt(x.__webglDepthbuffer[Y],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),vt(x.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(T,x,F){const Y=n.get(T);x!==void 0&&Q(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Dt(T)}function zt(T){const x=T.texture,F=n.get(T),Y=n.get(x);T.addEventListener("dispose",A);const Z=T.textures,$=T.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[it]=[];for(let ut=0;ut<x.mipmaps.length;ut++)F.__webglFramebuffer[it][ut]=i.createFramebuffer()}else F.__webglFramebuffer[it]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let it=0;it<x.mipmaps.length;it++)F.__webglFramebuffer[it]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(yt)for(let it=0,ut=Z.length;it<ut;it++){const Wt=n.get(Z[it]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Gt(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let it=0;it<Z.length;it++){const ut=Z[it];F.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[it]);const Wt=r.convert(ut.format,ut.colorSpace),tt=r.convert(ut.type),ft=M(ut.internalFormat,Wt,tt,ut.colorSpace,T.isXRRenderTarget===!0),At=kt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,ft,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,F.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),xt(i.TEXTURE_CUBE_MAP,x);for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)Q(F.__webglFramebuffer[it][ut],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ut);else Q(F.__webglFramebuffer[it],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);f(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let it=0,ut=Z.length;it<ut;it++){const Wt=Z[it],tt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),xt(i.TEXTURE_2D,Wt),Q(F.__webglFramebuffer,T,Wt,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,0),f(Wt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(it=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,Y.__webglTexture),xt(it,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)Q(F.__webglFramebuffer[ut],T,x,i.COLOR_ATTACHMENT0,it,ut);else Q(F.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,it,0);f(x)&&p(it),e.unbindTexture()}T.depthBuffer&&Dt(T)}function Qt(T){const x=T.textures;for(let F=0,Y=x.length;F<Y;F++){const Z=x[F];if(f(Z)){const $=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,yt=n.get(Z).__webglTexture;e.bindTexture($,yt),p($),e.unbindTexture()}}}const Vt=[],P=[];function Ne(T){if(T.samples>0){if(Gt(T)===!1){const x=T.textures,F=T.width,Y=T.height;let Z=i.COLOR_BUFFER_BIT;const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(T),it=x.length>1;if(it)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ut]);const Wt=n.get(x[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,Z,i.NEAREST),c===!0&&(Vt.length=0,P.length=0,Vt.push(i.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Vt.push($),P.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ut]);const Wt=n.get(x[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function kt(T){return Math.min(s.maxSamples,T.samples)}function Gt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function ne(T,x){const F=T.colorSpace,Y=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Wn&&F!==Fn&&(Kt.getTransfer(F)===se?(Y!==Ze||Z!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=S,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=bt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Gt}function jm(i,t){function e(n,s=Fn){let r;const a=Kt.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===no)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return i.BYTE;if(n===jc)return i.SHORT;if(n===os)return i.UNSIGNED_SHORT;if(n===to)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===ls)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===Ze)return i.RGBA;if(n===tl)return i.LUMINANCE;if(n===el)return i.LUMINANCE_ALPHA;if(n===Di)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===nl)return i.RED;if(n===io)return i.RED_INTEGER;if(n===il)return i.RG;if(n===so)return i.RG_INTEGER;if(n===ro)return i.RGBA_INTEGER;if(n===Gs||n===Ws||n===Xs||n===qs)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ya||n===Ma||n===Sa||n===Ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===wa||n===Ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ba||n===wa)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===ka||n===Ba||n===za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===La)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$s||n===Va||n===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$s)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===Ga||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$s)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Jm extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class an extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zm={type:"move"};class Jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,v=.005;l.inputState.pinching&&u>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tg=`
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

}`;class eg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Pe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:Qm,fragmentShader:tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ng extends Wi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,m=null,v=null;const _=new eg,f=e.getContextAttributes();let p=null,M=null;const y=[],b=[],L=new st;let A=null;const w=new ze;w.layers.enable(1),w.viewport=new le;const C=new ze;C.layers.enable(2),C.viewport=new le;const V=[w,C],g=new Jm;g.layers.enable(1),g.layers.enable(2);let S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=y[q];return Q===void 0&&(Q=new Jr,y[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=y[q];return Q===void 0&&(Q=new Jr,y[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=y[q];return Q===void 0&&(Q=new Jr,y[q]=Q),Q.getHandSpace()};function N(q){const Q=b.indexOf(q.inputSource);if(Q===-1)return;const vt=y[Q];vt!==void 0&&(vt.update(q.inputSource,q.frame,l||a),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",K);for(let q=0;q<y.length;q++){const Q=b[q];Q!==null&&(b[q]=null,y[q].disconnect(Q))}S=null,O=null,_.reset(),t.setRenderTarget(p),m=null,u=null,d=null,s=null,M=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",W),s.addEventListener("inputsourceschange",K),f.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const Q={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ai(m.framebufferWidth,m.framebufferHeight,{format:Ze,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let Q=null,vt=null,dt=null;f.depth&&(dt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=f.stencil?zi:Di,vt=f.stencil?Bi:ri);const Dt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new ai(u.textureWidth,u.textureHeight,{format:Ze,type:wn,depthTexture:new yl(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(q){for(let Q=0;Q<q.removed.length;Q++){const vt=q.removed[Q],dt=b.indexOf(vt);dt>=0&&(b[dt]=null,y[dt].disconnect(vt))}for(let Q=0;Q<q.added.length;Q++){const vt=q.added[Q];let dt=b.indexOf(vt);if(dt===-1){for(let bt=0;bt<y.length;bt++)if(bt>=b.length){b.push(vt),dt=bt;break}else if(b[bt]===null){b[bt]=vt,dt=bt;break}if(dt===-1)break}const Dt=y[dt];Dt&&Dt.connect(vt)}}const H=new R,J=new R;function X(q,Q,vt){H.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(vt.matrixWorld);const dt=H.distanceTo(J),Dt=Q.projectionMatrix.elements,bt=vt.projectionMatrix.elements,zt=Dt[14]/(Dt[10]-1),Qt=Dt[14]/(Dt[10]+1),Vt=(Dt[9]+1)/Dt[5],P=(Dt[9]-1)/Dt[5],Ne=(Dt[8]-1)/Dt[0],kt=(bt[8]+1)/bt[0],Gt=zt*Ne,Tt=zt*kt,ne=dt/(-Ne+kt),Ct=ne*-Ne;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ct),q.translateZ(ne),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Dt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const T=zt+ne,x=Qt+ne,F=Gt-Ct,Y=Tt+(dt-Ct),Z=Vt*Qt/x*T,$=P*Qt/x*T;q.projectionMatrix.makePerspective(F,Y,Z,$,T,x),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function lt(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,vt=q.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),g.near=C.near=w.near=Q,g.far=C.far=w.far=vt,(S!==g.near||O!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),S=g.near,O=g.far);const dt=q.parent,Dt=g.cameras;lt(g,dt);for(let bt=0;bt<Dt.length;bt++)lt(Dt[bt],dt);Dt.length===2?X(g,w,C):g.projectionMatrix.copy(w.projectionMatrix),ht(q,g,dt)};function ht(q,Q,vt){vt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$a*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(g)};let xt=null;function Xt(q,Q){if(h=Q.getViewerPose(l||a),v=Q,h!==null){const vt=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let dt=!1;vt.length!==g.cameras.length&&(g.cameras.length=0,dt=!0);for(let bt=0;bt<vt.length;bt++){const zt=vt[bt];let Qt=null;if(m!==null)Qt=m.getViewport(zt);else{const P=d.getViewSubImage(u,zt);Qt=P.viewport,bt===0&&(t.setRenderTargetTextures(M,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(M))}let Vt=V[bt];Vt===void 0&&(Vt=new ze,Vt.layers.enable(bt),Vt.viewport=new le,V[bt]=Vt),Vt.matrix.fromArray(zt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(zt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),bt===0&&(g.matrix.copy(Vt.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),dt===!0&&g.cameras.push(Vt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const bt=d.getDepthInformation(vt[0]);bt&&bt.isValid&&bt.texture&&_.init(t,bt,s.renderState)}}for(let vt=0;vt<y.length;vt++){const dt=b[vt],Dt=y[vt];dt!==null&&Dt!==void 0&&Dt.update(dt,Q,l||a)}xt&&xt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),v=null}const Jt=new _l;Jt.setAnimationLoop(Xt),this.setAnimationLoop=function(q){xt=q},this.dispose=function(){}}}const Jn=new cn,ig=new ae;function sg(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,ml(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,M,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(r(f,p),v(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?c(f,p,M,y):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ce&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ce&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const M=t.get(p),y=M.envMap,b=M.envMapRotation;y&&(f.envMap.value=y,Jn.copy(b),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),f.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(Jn)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,M,y){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=y*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,M){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ce&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const M=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const b=y.program;n.uniformBlockBinding(M,b)}function l(M,y){let b=s[M.id];b===void 0&&(v(M),b=h(M),s[M.id]=b,M.addEventListener("dispose",f));const L=y.program;n.updateUBOMapping(M,L);const A=t.render.frame;r[M.id]!==A&&(u(M),r[M.id]=A)}function h(M){const y=d();M.__bindingPointIndex=y;const b=i.createBuffer(),L=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const y=s[M.id],b=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,w=b.length;A<w;A++){const C=Array.isArray(b[A])?b[A]:[b[A]];for(let V=0,g=C.length;V<g;V++){const S=C[V];if(m(S,A,V,L)===!0){const O=S.__offset,N=Array.isArray(S.value)?S.value:[S.value];let W=0;for(let K=0;K<N.length;K++){const H=N[K],J=_(H);typeof H=="number"||typeof H=="boolean"?(S.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,O+W,S.__data)):H.isMatrix3?(S.__data[0]=H.elements[0],S.__data[1]=H.elements[1],S.__data[2]=H.elements[2],S.__data[3]=0,S.__data[4]=H.elements[3],S.__data[5]=H.elements[4],S.__data[6]=H.elements[5],S.__data[7]=0,S.__data[8]=H.elements[6],S.__data[9]=H.elements[7],S.__data[10]=H.elements[8],S.__data[11]=0):(H.toArray(S.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,y,b,L){const A=M.value,w=y+"_"+b;if(L[w]===void 0)return typeof A=="number"||typeof A=="boolean"?L[w]=A:L[w]=A.clone(),!0;{const C=L[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return L[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function v(M){const y=M.uniforms;let b=0;const L=16;for(let w=0,C=y.length;w<C;w++){const V=Array.isArray(y[w])?y[w]:[y[w]];for(let g=0,S=V.length;g<S;g++){const O=V[g],N=Array.isArray(O.value)?O.value:[O.value];for(let W=0,K=N.length;W<K;W++){const H=N[W],J=_(H),X=b%L,lt=X%J.boundary,ht=X+lt;b+=lt,ht!==0&&L-ht<J.storage&&(b+=L-ht),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=J.storage}}}const A=b%L;return A>0&&(b+=L-A),M.__size=b,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function f(M){const y=M.target;y.removeEventListener("dispose",f);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class wl{constructor(t={}){const{canvas:e=qh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,f=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=zn,this.toneMappingExposure=1;const y=this;let b=!1,L=0,A=0,w=null,C=-1,V=null;const g=new le,S=new le;let O=null;const N=new Ft(0);let W=0,K=e.width,H=e.height,J=1,X=null,lt=null;const ht=new le(0,0,K,H),xt=new le(0,0,K,H);let Xt=!1;const Jt=new oo;let q=!1,Q=!1;const vt=new ae,dt=new ae,Dt=new R,bt=new le,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function Vt(){return w===null?J:1}let P=n;function Ne(E,I){return e.getContext(E,I)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qa}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),P===null){const I="webgl2";if(P=Ne(I,E),P===null)throw Ne(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let kt,Gt,Tt,ne,Ct,T,x,F,Y,Z,$,yt,it,ut,Wt,tt,ft,At,Rt,pt,Bt,It,ee,D;function ot(){kt=new dp(P),kt.init(),It=new jm(P,kt),Gt=new rp(P,kt,t,It),Tt=new $m(P),Gt.reverseDepthBuffer&&Tt.buffers.depth.setReversed(!0),ne=new pp(P),Ct=new Dm,T=new Km(P,kt,Tt,Ct,Gt,It,ne),x=new op(y),F=new hp(y),Y=new yd(P),ee=new ip(P,Y),Z=new up(P,Y,ne,ee),$=new gp(P,Z,Y,ne),Rt=new mp(P,Gt,T),tt=new ap(Ct),yt=new Lm(y,x,F,kt,Gt,ee,tt),it=new sg(y,Ct),ut=new Um,Wt=new zm(kt),At=new np(y,x,F,Tt,$,u,c),ft=new Xm(y,$,Gt),D=new rg(P,ne,Gt,Tt),pt=new sp(P,kt,ne),Bt=new fp(P,kt,ne),ne.programs=yt.programs,y.capabilities=Gt,y.extensions=kt,y.properties=Ct,y.renderLists=ut,y.shadowMap=ft,y.state=Tt,y.info=ne}ot();const G=new ng(y,P);this.xr=G,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=kt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=kt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(K,H,!1))},this.getSize=function(E){return E.set(K,H)},this.setSize=function(E,I,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,H=I,e.width=Math.floor(E*J),e.height=Math.floor(I*J),B===!0&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(K*J,H*J).floor()},this.setDrawingBufferSize=function(E,I,B){K=E,H=I,J=B,e.width=Math.floor(E*B),e.height=Math.floor(I*B),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(g)},this.getViewport=function(E){return E.copy(ht)},this.setViewport=function(E,I,B,z){E.isVector4?ht.set(E.x,E.y,E.z,E.w):ht.set(E,I,B,z),Tt.viewport(g.copy(ht).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(xt)},this.setScissor=function(E,I,B,z){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,I,B,z),Tt.scissor(S.copy(xt).multiplyScalar(J).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(E){Tt.setScissorTest(Xt=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(E=!0,I=!0,B=!0){let z=0;if(E){let U=!1;if(w!==null){const et=w.texture.format;U=et===ro||et===so||et===io}if(U){const et=w.texture.type,at=et===wn||et===ri||et===os||et===Bi||et===eo||et===no,gt=At.getClearColor(),_t=At.getClearAlpha(),Et=gt.r,wt=gt.g,Mt=gt.b;at?(m[0]=Et,m[1]=wt,m[2]=Mt,m[3]=_t,P.clearBufferuiv(P.COLOR,0,m)):(v[0]=Et,v[1]=wt,v[2]=Mt,v[3]=_t,P.clearBufferiv(P.COLOR,0,v))}else z|=P.COLOR_BUFFER_BIT}I&&(z|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ut.dispose(),Wt.dispose(),Ct.dispose(),x.dispose(),F.dispose(),$.dispose(),ee.dispose(),D.dispose(),yt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Eo),G.removeEventListener("sessionend",bo),Xn.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=ne.autoReset,I=ft.enabled,B=ft.autoUpdate,z=ft.needsUpdate,U=ft.type;ot(),ne.autoReset=E,ft.enabled=I,ft.autoUpdate=B,ft.needsUpdate=z,ft.type=U}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ht(E){const I=E.target;I.removeEventListener("dispose",Ht),ue(I)}function ue(E){Ie(E),Ct.remove(E)}function Ie(E){const I=Ct.get(E).programs;I!==void 0&&(I.forEach(function(B){yt.releaseProgram(B)}),E.isShaderMaterial&&yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,B,z,U,et){I===null&&(I=zt);const at=U.isMesh&&U.matrixWorld.determinant()<0,gt=Ql(E,I,B,z,U);Tt.setMaterial(z,at);let _t=B.index,Et=1;if(z.wireframe===!0){if(_t=Z.getWireframeAttribute(B),_t===void 0)return;Et=2}const wt=B.drawRange,Mt=B.attributes.position;let Zt=wt.start*Et,ie=(wt.start+wt.count)*Et;et!==null&&(Zt=Math.max(Zt,et.start*Et),ie=Math.min(ie,(et.start+et.count)*Et)),_t!==null?(Zt=Math.max(Zt,0),ie=Math.min(ie,_t.count)):Mt!=null&&(Zt=Math.max(Zt,0),ie=Math.min(ie,Mt.count));const ce=ie-Zt;if(ce<0||ce===1/0)return;ee.setup(U,z,gt,B,_t);let Fe,$t=pt;if(_t!==null&&(Fe=Y.get(_t),$t=Bt,$t.setIndex(Fe)),U.isMesh)z.wireframe===!0?(Tt.setLineWidth(z.wireframeLinewidth*Vt()),$t.setMode(P.LINES)):$t.setMode(P.TRIANGLES);else if(U.isLine){let St=z.linewidth;St===void 0&&(St=1),Tt.setLineWidth(St*Vt()),U.isLineSegments?$t.setMode(P.LINES):U.isLineLoop?$t.setMode(P.LINE_LOOP):$t.setMode(P.LINE_STRIP)}else U.isPoints?$t.setMode(P.POINTS):U.isSprite&&$t.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)$t.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))$t.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const St=U._multiDrawStarts,xe=U._multiDrawCounts,Yt=U._multiDrawCount,$e=_t?Y.get(_t).bytesPerElement:1,li=Ct.get(z).currentProgram.getUniforms();for(let Oe=0;Oe<Yt;Oe++)li.setValue(P,"_gl_DrawID",Oe),$t.render(St[Oe]/$e,xe[Oe])}else if(U.isInstancedMesh)$t.renderInstances(Zt,ce,U.count);else if(B.isInstancedBufferGeometry){const St=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,xe=Math.min(B.instanceCount,St);$t.renderInstances(Zt,ce,xe)}else $t.render(Zt,ce)};function qt(E,I,B){E.transparent===!0&&E.side===_n&&E.forceSinglePass===!1?(E.side=Ce,E.needsUpdate=!0,fs(E,I,B),E.side=Gn,E.needsUpdate=!0,fs(E,I,B),E.side=_n):fs(E,I,B)}this.compile=function(E,I,B=null){B===null&&(B=E),f=Wt.get(B),f.init(I),M.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),E!==B&&E.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const z=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const et=U.material;if(et)if(Array.isArray(et))for(let at=0;at<et.length;at++){const gt=et[at];qt(gt,B,U),z.add(gt)}else qt(et,B,U),z.add(et)}),M.pop(),f=null,z},this.compileAsync=function(E,I,B=null){const z=this.compile(E,I,B);return new Promise(U=>{function et(){if(z.forEach(function(at){Ct.get(at).currentProgram.isReady()&&z.delete(at)}),z.size===0){U(E);return}setTimeout(et,10)}kt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ue=null;function hn(E){Ue&&Ue(E)}function Eo(){Xn.stop()}function bo(){Xn.start()}const Xn=new _l;Xn.setAnimationLoop(hn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(E){Ue=E,G.setAnimationLoop(E),E===null?Xn.stop():Xn.start()},G.addEventListener("sessionstart",Eo),G.addEventListener("sessionend",bo),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,I,w),f=Wt.get(E,M.length),f.init(I),M.push(f),dt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Jt.setFromProjectionMatrix(dt),Q=this.localClippingEnabled,q=tt.init(this.clippingPlanes,Q),_=ut.get(E,p.length),_.init(),p.push(_),G.enabled===!0&&G.isPresenting===!0){const et=y.xr.getDepthSensingMesh();et!==null&&vr(et,I,-1/0,y.sortObjects)}vr(E,I,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(X,lt),Qt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Qt&&At.addToRenderList(_,E),this.info.render.frame++,q===!0&&tt.beginShadows();const B=f.state.shadowsArray;ft.render(B,E,I),q===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=_.opaque,U=_.transmissive;if(f.setupLights(),I.isArrayCamera){const et=I.cameras;if(U.length>0)for(let at=0,gt=et.length;at<gt;at++){const _t=et[at];To(z,U,E,_t)}Qt&&At.render(E);for(let at=0,gt=et.length;at<gt;at++){const _t=et[at];wo(_,E,_t,_t.viewport)}}else U.length>0&&To(z,U,E,I),Qt&&At.render(E),wo(_,E,I);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(y,E,I),ee.resetDefaultState(),C=-1,V=null,M.pop(),M.length>0?(f=M[M.length-1],q===!0&&tt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function vr(E,I,B,z){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Jt.intersectsSprite(E)){z&&bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(dt);const at=$.update(E),gt=E.material;gt.visible&&_.push(E,at,gt,B,bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Jt.intersectsObject(E))){const at=$.update(E),gt=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),bt.copy(E.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),bt.copy(at.boundingSphere.center)),bt.applyMatrix4(E.matrixWorld).applyMatrix4(dt)),Array.isArray(gt)){const _t=at.groups;for(let Et=0,wt=_t.length;Et<wt;Et++){const Mt=_t[Et],Zt=gt[Mt.materialIndex];Zt&&Zt.visible&&_.push(E,at,Zt,B,bt.z,Mt)}}else gt.visible&&_.push(E,at,gt,B,bt.z,null)}}const et=E.children;for(let at=0,gt=et.length;at<gt;at++)vr(et[at],I,B,z)}function wo(E,I,B,z){const U=E.opaque,et=E.transmissive,at=E.transparent;f.setupLightsView(B),q===!0&&tt.setGlobalState(y.clippingPlanes,B),z&&Tt.viewport(g.copy(z)),U.length>0&&us(U,I,B),et.length>0&&us(et,I,B),at.length>0&&us(at,I,B),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function To(E,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new ai(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?ls:wn,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const et=f.state.transmissionRenderTarget[z.id],at=z.viewport||g;et.setSize(at.z,at.w);const gt=y.getRenderTarget();y.setRenderTarget(et),y.getClearColor(N),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Qt&&At.render(B);const _t=y.toneMapping;y.toneMapping=zn;const Et=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),q===!0&&tt.setGlobalState(y.clippingPlanes,z),us(E,B,z),T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et),kt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Mt=0,Zt=I.length;Mt<Zt;Mt++){const ie=I[Mt],ce=ie.object,Fe=ie.geometry,$t=ie.material,St=ie.group;if($t.side===_n&&ce.layers.test(z.layers)){const xe=$t.side;$t.side=Ce,$t.needsUpdate=!0,Ao(ce,B,z,Fe,$t,St),$t.side=xe,$t.needsUpdate=!0,wt=!0}}wt===!0&&(T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et))}y.setRenderTarget(gt),y.setClearColor(N,W),Et!==void 0&&(z.viewport=Et),y.toneMapping=_t}function us(E,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,et=E.length;U<et;U++){const at=E[U],gt=at.object,_t=at.geometry,Et=z===null?at.material:z,wt=at.group;gt.layers.test(B.layers)&&Ao(gt,I,B,_t,Et,wt)}}function Ao(E,I,B,z,U,et){E.onBeforeRender(y,I,B,z,U,et),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(y,I,B,z,E,et),U.transparent===!0&&U.side===_n&&U.forceSinglePass===!1?(U.side=Ce,U.needsUpdate=!0,y.renderBufferDirect(B,I,z,U,E,et),U.side=Gn,U.needsUpdate=!0,y.renderBufferDirect(B,I,z,U,E,et),U.side=_n):y.renderBufferDirect(B,I,z,U,E,et),E.onAfterRender(y,I,B,z,U,et)}function fs(E,I,B){I.isScene!==!0&&(I=zt);const z=Ct.get(E),U=f.state.lights,et=f.state.shadowsArray,at=U.state.version,gt=yt.getParameters(E,U.state,et,I,B),_t=yt.getProgramCacheKey(gt);let Et=z.programs;z.environment=E.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(E.isMeshStandardMaterial?F:x).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Et===void 0&&(E.addEventListener("dispose",Ht),Et=new Map,z.programs=Et);let wt=Et.get(_t);if(wt!==void 0){if(z.currentProgram===wt&&z.lightsStateVersion===at)return Co(E,gt),wt}else gt.uniforms=yt.getUniforms(E),E.onBeforeCompile(gt,y),wt=yt.acquireProgram(gt,_t),Et.set(_t,wt),z.uniforms=gt.uniforms;const Mt=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Mt.clippingPlanes=tt.uniform),Co(E,gt),z.needsLights=eh(E),z.lightsStateVersion=at,z.needsLights&&(Mt.ambientLightColor.value=U.state.ambient,Mt.lightProbe.value=U.state.probe,Mt.directionalLights.value=U.state.directional,Mt.directionalLightShadows.value=U.state.directionalShadow,Mt.spotLights.value=U.state.spot,Mt.spotLightShadows.value=U.state.spotShadow,Mt.rectAreaLights.value=U.state.rectArea,Mt.ltc_1.value=U.state.rectAreaLTC1,Mt.ltc_2.value=U.state.rectAreaLTC2,Mt.pointLights.value=U.state.point,Mt.pointLightShadows.value=U.state.pointShadow,Mt.hemisphereLights.value=U.state.hemi,Mt.directionalShadowMap.value=U.state.directionalShadowMap,Mt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Mt.spotShadowMap.value=U.state.spotShadowMap,Mt.spotLightMatrix.value=U.state.spotLightMatrix,Mt.spotLightMap.value=U.state.spotLightMap,Mt.pointShadowMap.value=U.state.pointShadowMap,Mt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=wt,z.uniformsList=null,wt}function Ro(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Ks.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Co(E,I){const B=Ct.get(E);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Ql(E,I,B,z,U){I.isScene!==!0&&(I=zt),T.resetTextureUnits();const et=I.fog,at=z.isMeshStandardMaterial?I.environment:null,gt=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Wn,_t=(z.isMeshStandardMaterial?F:x).get(z.envMap||at),Et=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,wt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Mt=!!B.morphAttributes.position,Zt=!!B.morphAttributes.normal,ie=!!B.morphAttributes.color;let ce=zn;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ce=y.toneMapping);const Fe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$t=Fe!==void 0?Fe.length:0,St=Ct.get(z),xe=f.state.lights;if(q===!0&&(Q===!0||E!==V)){const Ve=E===V&&z.id===C;tt.setState(z,E,Ve)}let Yt=!1;z.version===St.__version?(St.needsLights&&St.lightsStateVersion!==xe.state.version||St.outputColorSpace!==gt||U.isBatchedMesh&&St.batching===!1||!U.isBatchedMesh&&St.batching===!0||U.isBatchedMesh&&St.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&St.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&St.instancing===!1||!U.isInstancedMesh&&St.instancing===!0||U.isSkinnedMesh&&St.skinning===!1||!U.isSkinnedMesh&&St.skinning===!0||U.isInstancedMesh&&St.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&St.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&St.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&St.instancingMorph===!1&&U.morphTexture!==null||St.envMap!==_t||z.fog===!0&&St.fog!==et||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==tt.numPlanes||St.numIntersection!==tt.numIntersection)||St.vertexAlphas!==Et||St.vertexTangents!==wt||St.morphTargets!==Mt||St.morphNormals!==Zt||St.morphColors!==ie||St.toneMapping!==ce||St.morphTargetsCount!==$t)&&(Yt=!0):(Yt=!0,St.__version=z.version);let $e=St.currentProgram;Yt===!0&&($e=fs(z,I,U));let li=!1,Oe=!1,_r=!1;const he=$e.getUniforms(),An=St.uniforms;if(Tt.useProgram($e.program)&&(li=!0,Oe=!0,_r=!0),z.id!==C&&(C=z.id,Oe=!0),li||V!==E){Gt.reverseDepthBuffer?(vt.copy(E.projectionMatrix),Yh(vt),Kh(vt),he.setValue(P,"projectionMatrix",vt)):he.setValue(P,"projectionMatrix",E.projectionMatrix),he.setValue(P,"viewMatrix",E.matrixWorldInverse);const Ve=he.map.cameraPosition;Ve!==void 0&&Ve.setValue(P,Dt.setFromMatrixPosition(E.matrixWorld)),Gt.logarithmicDepthBuffer&&he.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&he.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,Oe=!0,_r=!0)}if(U.isSkinnedMesh){he.setOptional(P,U,"bindMatrix"),he.setOptional(P,U,"bindMatrixInverse");const Ve=U.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),he.setValue(P,"boneTexture",Ve.boneTexture,T))}U.isBatchedMesh&&(he.setOptional(P,U,"batchingTexture"),he.setValue(P,"batchingTexture",U._matricesTexture,T),he.setOptional(P,U,"batchingIdTexture"),he.setValue(P,"batchingIdTexture",U._indirectTexture,T),he.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&he.setValue(P,"batchingColorTexture",U._colorsTexture,T));const xr=B.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&Rt.update(U,B,$e),(Oe||St.receiveShadow!==U.receiveShadow)&&(St.receiveShadow=U.receiveShadow,he.setValue(P,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(An.envMap.value=_t,An.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(An.envMapIntensity.value=I.environmentIntensity),Oe&&(he.setValue(P,"toneMappingExposure",y.toneMappingExposure),St.needsLights&&th(An,_r),et&&z.fog===!0&&it.refreshFogUniforms(An,et),it.refreshMaterialUniforms(An,z,J,H,f.state.transmissionRenderTarget[E.id]),Ks.upload(P,Ro(St),An,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ks.upload(P,Ro(St),An,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&he.setValue(P,"center",U.center),he.setValue(P,"modelViewMatrix",U.modelViewMatrix),he.setValue(P,"normalMatrix",U.normalMatrix),he.setValue(P,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ve=z.uniformsGroups;for(let yr=0,nh=Ve.length;yr<nh;yr++){const Po=Ve[yr];D.update(Po,$e),D.bind(Po,$e)}}return $e}function th(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function eh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,I,B){Ct.get(E.texture).__webglTexture=I,Ct.get(E.depthTexture).__webglTexture=B;const z=Ct.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const B=Ct.get(E);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,B=0){w=E,L=I,A=B;let z=!0,U=null,et=!1,at=!1;if(E){const _t=Ct.get(E);if(_t.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(_t.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(_t.__hasExternalTextures)T.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Mt=E.depthTexture;if(_t.__boundDepthTexture!==Mt){if(Mt!==null&&Ct.has(Mt)&&(E.width!==Mt.image.width||E.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(at=!0);const wt=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?U=wt[I][B]:U=wt[I],et=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?U=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(wt)?U=wt[B]:U=wt,g.copy(E.viewport),S.copy(E.scissor),O=E.scissorTest}else g.copy(ht).multiplyScalar(J).floor(),S.copy(xt).multiplyScalar(J).floor(),O=Xt;if(Tt.bindFramebuffer(P.FRAMEBUFFER,U)&&z&&Tt.drawBuffers(E,U),Tt.viewport(g),Tt.scissor(S),Tt.setScissorTest(O),et){const _t=Ct.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,_t.__webglTexture,B)}else if(at){const _t=Ct.get(E.texture),Et=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.__webglTexture,B||0,Et)}C=-1},this.readRenderTargetPixels=function(E,I,B,z,U,et,at){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&at!==void 0&&(gt=gt[at]),gt){Tt.bindFramebuffer(P.FRAMEBUFFER,gt);try{const _t=E.texture,Et=_t.format,wt=_t.type;if(!Gt.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-z&&B>=0&&B<=E.height-U&&P.readPixels(I,B,z,U,It.convert(Et),It.convert(wt),et)}finally{const _t=w!==null?Ct.get(w).__webglFramebuffer:null;Tt.bindFramebuffer(P.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(E,I,B,z,U,et,at){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&at!==void 0&&(gt=gt[at]),gt){const _t=E.texture,Et=_t.format,wt=_t.type;if(!Gt.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-z&&B>=0&&B<=E.height-U){Tt.bindFramebuffer(P.FRAMEBUFFER,gt);const Mt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Mt),P.bufferData(P.PIXEL_PACK_BUFFER,et.byteLength,P.STREAM_READ),P.readPixels(I,B,z,U,It.convert(Et),It.convert(wt),0);const Zt=w!==null?Ct.get(w).__webglFramebuffer:null;Tt.bindFramebuffer(P.FRAMEBUFFER,Zt);const ie=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await $h(P,ie,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Mt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,et),P.deleteBuffer(Mt),P.deleteSync(ie),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,B=0){E.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(E.image.width*z),et=Math.floor(E.image.height*z),at=I!==null?I.x:0,gt=I!==null?I.y:0;T.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,at,gt,U,et),Tt.unbindTexture()},this.copyTextureToTexture=function(E,I,B=null,z=null,U=0){E.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let et,at,gt,_t,Et,wt;B!==null?(et=B.max.x-B.min.x,at=B.max.y-B.min.y,gt=B.min.x,_t=B.min.y):(et=E.image.width,at=E.image.height,gt=0,_t=0),z!==null?(Et=z.x,wt=z.y):(Et=0,wt=0);const Mt=It.convert(I.format),Zt=It.convert(I.type);T.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const ie=P.getParameter(P.UNPACK_ROW_LENGTH),ce=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Fe=P.getParameter(P.UNPACK_SKIP_PIXELS),$t=P.getParameter(P.UNPACK_SKIP_ROWS),St=P.getParameter(P.UNPACK_SKIP_IMAGES),xe=E.isCompressedTexture?E.mipmaps[U]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,xe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,_t),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Et,wt,et,at,Mt,Zt,xe.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Et,wt,xe.width,xe.height,Mt,xe.data):P.texSubImage2D(P.TEXTURE_2D,U,Et,wt,et,at,Mt,Zt,xe),P.pixelStorei(P.UNPACK_ROW_LENGTH,ie),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ce),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Fe),P.pixelStorei(P.UNPACK_SKIP_ROWS,$t),P.pixelStorei(P.UNPACK_SKIP_IMAGES,St),U===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(E,I,B=null,z=null,U=0){E.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,E=arguments[2],I=arguments[3],U=arguments[4]||0);let et,at,gt,_t,Et,wt,Mt,Zt,ie;const ce=E.isCompressedTexture?E.mipmaps[U]:E.image;B!==null?(et=B.max.x-B.min.x,at=B.max.y-B.min.y,gt=B.max.z-B.min.z,_t=B.min.x,Et=B.min.y,wt=B.min.z):(et=ce.width,at=ce.height,gt=ce.depth,_t=0,Et=0,wt=0),z!==null?(Mt=z.x,Zt=z.y,ie=z.z):(Mt=0,Zt=0,ie=0);const Fe=It.convert(I.format),$t=It.convert(I.type);let St;if(I.isData3DTexture)T.setTexture3D(I,0),St=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)T.setTexture2DArray(I,0),St=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const xe=P.getParameter(P.UNPACK_ROW_LENGTH),Yt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),$e=P.getParameter(P.UNPACK_SKIP_PIXELS),li=P.getParameter(P.UNPACK_SKIP_ROWS),Oe=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ce.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ce.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_t),P.pixelStorei(P.UNPACK_SKIP_ROWS,Et),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wt),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(St,U,Mt,Zt,ie,et,at,gt,Fe,$t,ce.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(St,U,Mt,Zt,ie,et,at,gt,Fe,ce.data):P.texSubImage3D(St,U,Mt,Zt,ie,et,at,gt,Fe,$t,ce),P.pixelStorei(P.UNPACK_ROW_LENGTH,xe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Yt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,$e),P.pixelStorei(P.UNPACK_SKIP_ROWS,li),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Oe),U===0&&I.generateMipmaps&&P.generateMipmap(St),Tt.unbindTexture()},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Tt.unbindTexture()},this.resetState=function(){L=0,A=0,w=null,Tt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ao?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===hr?"display-p3":"srgb"}}class lo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=e}clone(){return new lo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tl extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ag{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qa,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ae=new R;class sr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new sr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Al extends ci{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let bi;const Qi=new R,wi=new R,Ti=new R,Ai=new st,ts=new st,Rl=new ae,Ns=new R,es=new R,Fs=new R,bc=new st,Zr=new st,wc=new st;class og extends me{constructor(t=new Al){if(super(),this.isSprite=!0,this.type="Sprite",bi===void 0){bi=new de;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ag(e,5);bi.setIndex([0,1,2,0,2,3]),bi.setAttribute("position",new sr(n,3,0,!1)),bi.setAttribute("uv",new sr(n,2,3,!1))}this.geometry=bi,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wi.setFromMatrixScale(this.matrixWorld),Rl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wi.multiplyScalar(-Ti.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Os(Ns.set(-.5,-.5,0),Ti,a,wi,s,r),Os(es.set(.5,-.5,0),Ti,a,wi,s,r),Os(Fs.set(.5,.5,0),Ti,a,wi,s,r),bc.set(0,0),Zr.set(1,0),wc.set(1,1);let o=t.ray.intersectTriangle(Ns,es,Fs,!1,Qi);if(o===null&&(Os(es.set(-.5,.5,0),Ti,a,wi,s,r),Zr.set(0,1),o=t.ray.intersectTriangle(Ns,Fs,es,!1,Qi),o===null))return;const c=t.ray.origin.distanceTo(Qi);c<t.near||c>t.far||e.push({distance:c,point:Qi.clone(),uv:Ge.getInterpolation(Qi,Ns,es,Fs,bc,Zr,wc,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Os(i,t,e,n,s,r){Ai.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ts.x=r*Ai.x-s*Ai.y,ts.y=s*Ai.x+r*Ai.y):ts.copy(Ai),i.copy(t),i.x+=ts.x,i.y+=ts.y,i.applyMatrix4(Rl)}class fr extends ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Tc=new ae,Ka=new hl,ks=new dr,Bs=new R;class ho extends me{constructor(t=new de,e=new fr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),ks.radius+=r,t.ray.intersectsSphere(ks)===!1)return;Tc.copy(s).invert(),Ka.copy(t.ray).applyMatrix4(Tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let v=u,_=m;v<_;v++){const f=l.getX(v);Bs.fromBufferAttribute(d,f),Ac(Bs,f,c,s,t,e,this)}}else{const u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=u,_=m;v<_;v++)Bs.fromBufferAttribute(d,v),Ac(Bs,v,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ac(i,t,e,n,s,r,a){const o=Ka.distanceSqToPoint(i);if(o<e){const c=new R;Ka.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Cl extends Pe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,m=(a-h)/u;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new st:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],a=[],o=new R,c=new ae;for(let m=0;m<=t;m++){const v=m/t;s[m]=this.getTangentAt(v,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(ye(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,v))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(ye(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let v=1;v<=t;v++)r[v].applyMatrix4(c.makeRotationAxis(s[v],m*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class uo extends ln{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new st){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,m=l-this.aY;c=u*h-m*d+this.aX,l=u*d+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class cg extends uo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function fo(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,m*=h,s(a,o,u,m)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const zs=new R,Qr=new fo,ta=new fo,ea=new fo;class Pl extends ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(zs.subVectors(s[0],s[1]).add(s[0]),l=zs);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(zs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(d),m),_=Math.pow(d.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(h),m);_<1e-4&&(_=1),v<1e-4&&(v=_),f<1e-4&&(f=_),Qr.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,v,_,f),ta.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,v,_,f),ea.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,v,_,f)}else this.curveType==="catmullrom"&&(Qr.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ta.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),ea.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Qr.calc(c),ta.calc(c),ea.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function lg(i,t){const e=1-i;return e*e*t}function hg(i,t){return 2*(1-i)*i*t}function dg(i,t){return i*i*t}function rs(i,t,e,n){return lg(i,t)+hg(i,e)+dg(i,n)}function ug(i,t){const e=1-i;return e*e*e*t}function fg(i,t){const e=1-i;return 3*e*e*i*t}function pg(i,t){return 3*(1-i)*i*i*t}function mg(i,t){return i*i*i*t}function as(i,t,e,n,s){return ug(i,t)+fg(i,e)+pg(i,n)+mg(i,s)}class Ll extends ln{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(as(t,s.x,r.x,a.x,o.x),as(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gg extends ln{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(as(t,s.x,r.x,a.x,o.x),as(t,s.y,r.y,a.y,o.y),as(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dl extends ln{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vg extends ln{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Il extends ln{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rs(t,s.x,r.x,a.x),rs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _g extends ln{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rs(t,s.x,r.x,a.x),rs(t,s.y,r.y,a.y),rs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ul extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Rc(o,c.x,l.x,h.x,d.x),Rc(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var Cc=Object.freeze({__proto__:null,ArcCurve:cg,CatmullRomCurve3:Pl,CubicBezierCurve:Ll,CubicBezierCurve3:gg,EllipseCurve:uo,LineCurve:Dl,LineCurve3:vg,QuadraticBezierCurve:Il,QuadraticBezierCurve3:_g,SplineCurve:Ul});class xg extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Cc[s.type]().fromJSON(s))}return this}}class yg extends xg{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Dl(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Il(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Ll(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ul(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new uo(t,e,n,s,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class po extends de{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ye(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,d=new R,u=new st,m=new R,v=new R,_=new R;let f=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:f=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,m.x=p*1,m.y=-f,m.z=p*0,_.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:f=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,m.x=p*1,m.y=-f,m.z=p*0,v.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),c.push(m.x,m.y,m.z),_.copy(v)}for(let M=0;M<=e;M++){const y=n+M*h*s,b=Math.sin(y),L=Math.cos(y);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*b,d.y=t[A].y,d.z=t[A].x*L,a.push(d.x,d.y,d.z),u.x=M/e,u.y=A/(t.length-1),o.push(u.x,u.y);const w=c[3*A+0]*b,C=c[3*A+1],V=c[3*A+0]*L;l.push(w,C,V)}}for(let M=0;M<e;M++)for(let y=0;y<t.length-1;y++){const b=y+M*t.length,L=b,A=b+t.length,w=b+t.length+1,C=b+1;r.push(L,A,C),r.push(w,C,A)}this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("uv",new jt(o,2)),this.setAttribute("normal",new jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.points,t.segments,t.phiStart,t.phiLength)}}class mo extends po{constructor(t=1,e=1,n=4,s=8){const r=new yg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new mo(t.radius,t.length,t.capSegments,t.radialSegments)}}class rr extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new R,h=new st;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const m=n+d/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xe extends de{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],m=[];let v=0;const _=[],f=n/2;let p=0;M(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(m,2));function M(){const b=new R,L=new R;let A=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const V=[],g=C/r,S=g*(e-t)+t;for(let O=0;O<=s;O++){const N=O/s,W=N*c+o,K=Math.sin(W),H=Math.cos(W);L.x=S*K,L.y=-g*n+f,L.z=S*H,d.push(L.x,L.y,L.z),b.set(K,w,H).normalize(),u.push(b.x,b.y,b.z),m.push(N,1-g),V.push(v++)}_.push(V)}for(let C=0;C<s;C++)for(let V=0;V<r;V++){const g=_[V][C],S=_[V+1][C],O=_[V+1][C+1],N=_[V][C+1];t>0&&(h.push(g,S,N),A+=3),e>0&&(h.push(S,O,N),A+=3)}l.addGroup(p,A,0),p+=A}function y(b){const L=v,A=new st,w=new R;let C=0;const V=b===!0?t:e,g=b===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,f*g,0),u.push(0,g,0),m.push(.5,.5),v++;const S=v;for(let O=0;O<=s;O++){const W=O/s*c+o,K=Math.cos(W),H=Math.sin(W);w.x=V*H,w.y=f*g,w.z=V*K,d.push(w.x,w.y,w.z),u.push(0,g,0),A.x=K*.5+.5,A.y=H*.5*g+.5,m.push(A.x,A.y),v++}for(let O=0;O<s;O++){const N=L+O,W=S+O;b===!0?h.push(W,W+1,N):h.push(W+1,W,N),C+=3}l.addGroup(p,C,b===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kn extends Xe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new kn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pr extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const y=new R,b=new R,L=new R;for(let A=0;A<e.length;A+=3)m(e[A+0],y),m(e[A+1],b),m(e[A+2],L),c(y,b,L,M)}function c(M,y,b,L){const A=L+1,w=[];for(let C=0;C<=A;C++){w[C]=[];const V=M.clone().lerp(b,C/A),g=y.clone().lerp(b,C/A),S=A-C;for(let O=0;O<=S;O++)O===0&&C===A?w[C][O]=V:w[C][O]=V.clone().lerp(g,O/S)}for(let C=0;C<A;C++)for(let V=0;V<2*(A-C)-1;V++){const g=Math.floor(V/2);V%2===0?(u(w[C][g+1]),u(w[C+1][g]),u(w[C][g])):(u(w[C][g+1]),u(w[C+1][g+1]),u(w[C+1][g]))}}function l(M){const y=new R;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(M),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function h(){const M=new R;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const b=f(M)/2/Math.PI+.5,L=p(M)/Math.PI+.5;a.push(b,1-L)}v(),d()}function d(){for(let M=0;M<a.length;M+=6){const y=a[M+0],b=a[M+2],L=a[M+4],A=Math.max(y,b,L),w=Math.min(y,b,L);A>.9&&w<.1&&(y<.2&&(a[M+0]+=1),b<.2&&(a[M+2]+=1),L<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function m(M,y){const b=M*3;y.x=t[b+0],y.y=t[b+1],y.z=t[b+2]}function v(){const M=new R,y=new R,b=new R,L=new R,A=new st,w=new st,C=new st;for(let V=0,g=0;V<r.length;V+=9,g+=6){M.set(r[V+0],r[V+1],r[V+2]),y.set(r[V+3],r[V+4],r[V+5]),b.set(r[V+6],r[V+7],r[V+8]),A.set(a[g+0],a[g+1]),w.set(a[g+2],a[g+3]),C.set(a[g+4],a[g+5]),L.copy(M).add(y).add(b).divideScalar(3);const S=f(L);_(A,g+0,M,S),_(w,g+2,y,S),_(C,g+4,b,S)}}function _(M,y,b,L){L<0&&M.x===1&&(a[y]=M.x-1),b.x===0&&b.z===0&&(a[y]=L/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.vertices,t.indices,t.radius,t.details)}}class go extends pr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new go(t.radius,t.detail)}}class vo extends pr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vo(t.radius,t.detail)}}class Sn extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new R,u=new R,m=[],v=[],_=[],f=[];for(let p=0;p<=n;p++){const M=[],y=p/n;let b=0;p===0&&a===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){const A=L/e;d.x=-t*Math.cos(s+A*r)*Math.sin(a+y*o),d.y=t*Math.cos(a+y*o),d.z=t*Math.sin(s+A*r)*Math.sin(a+y*o),v.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),f.push(A+b,1-y),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const y=h[p][M+1],b=h[p][M],L=h[p+1][M],A=h[p+1][M+1];(p!==0||a>0)&&m.push(y,b,A),(p!==n-1||c<Math.PI)&&m.push(b,L,A)}this.setIndex(m),this.setAttribute("position",new jt(v,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mr extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new R,d=new R,u=new R;for(let m=0;m<=n;m++)for(let v=0;v<=s;v++){const _=v/s*r,f=m/n*Math.PI*2;d.x=(t+e*Math.cos(f))*Math.cos(_),d.y=(t+e*Math.cos(f))*Math.sin(_),d.z=e*Math.sin(f),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(v/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=s;v++){const _=(s+1)*m+v-1,f=(s+1)*(m-1)+v-1,p=(s+1)*(m-1)+v,M=(s+1)*m+v;a.push(_,f,M),a.push(f,p,M)}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class _o extends de{constructor(t=1,e=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);const o=[],c=[],l=[],h=[],d=new R,u=new R,m=new R,v=new R,_=new R,f=new R,p=new R;for(let y=0;y<=n;++y){const b=y/n*r*Math.PI*2;M(b,r,a,t,m),M(b+.01,r,a,t,v),f.subVectors(v,m),p.addVectors(v,m),_.crossVectors(f,p),p.crossVectors(_,f),_.normalize(),p.normalize();for(let L=0;L<=s;++L){const A=L/s*Math.PI*2,w=-e*Math.cos(A),C=e*Math.sin(A);d.x=m.x+(w*p.x+C*_.x),d.y=m.y+(w*p.y+C*_.y),d.z=m.z+(w*p.z+C*_.z),c.push(d.x,d.y,d.z),u.subVectors(d,m).normalize(),l.push(u.x,u.y,u.z),h.push(y/n),h.push(L/s)}}for(let y=1;y<=n;y++)for(let b=1;b<=s;b++){const L=(s+1)*(y-1)+(b-1),A=(s+1)*y+(b-1),w=(s+1)*y+b,C=(s+1)*(y-1)+b;o.push(L,A,C),o.push(A,w,C)}this.setIndex(o),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(h,2));function M(y,b,L,A,w){const C=Math.cos(y),V=Math.sin(y),g=L/b*y,S=Math.cos(g);w.x=A*(2+S)*.5*C,w.y=A*(2+S)*V*.5,w.z=A*Math.sin(g)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class oe extends ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nl extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Fl extends Nl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const na=new ae,Pc=new R,Lc=new R;class Mg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pc),Lc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lc),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Sg extends Mg{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ol extends Nl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new Sg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);const Eg=()=>({quality:bg(),shadows:!0,particles:!0,motionBlur:!1,reflections:!0,screenShake:!0,steerAssist:!1,autoAccel:!1,reducedFlashing:!1,musicVol:.55,sfxVol:.8,controlMode:"buttons"});function bg(){const i=navigator.deviceMemory??4,t=navigator.hardwareConcurrency??4,e=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);return e&&i<=3?"low":e?"medium":i>=8&&t>=8?"ultra":i>=6?"high":"medium"}function kl(i){switch(i){case"low":return{pixelRatio:1,shadowMap:0,decorDensity:.35,drawDistance:900,particleScale:.4,antialias:!1};case"medium":return{pixelRatio:1.2,shadowMap:1024,decorDensity:.6,drawDistance:1300,particleScale:.7,antialias:!0};case"high":return{pixelRatio:1.5,shadowMap:2048,decorDensity:.85,drawDistance:1800,particleScale:1,antialias:!0};case"ultra":return{pixelRatio:Math.min(2,window.devicePixelRatio||1),shadowMap:4096,decorDensity:1.1,drawDistance:2400,particleScale:1.3,antialias:!0}}}const Bl="amal-turbo-save-v2";function js(){return{v:2,coins:0,xp:0,selectedRacer:"leo",kit:{vehicleId:"sport",paint:-1,trail:0,wheels:0},presets:[],unlockedRacers:["leo","kiki","finn","zara","bruno","pip","ruby","dash","luna","rocky","nova"],unlockedVehicles:["sport","hover","rocket","monster","aqua","candy","truck","ice","cruiser","insect","shell","cloud","dragon","lunar","neon"],championshipsWon:[],bestTimes:{},bestLaps:{},medals:{},ghosts:{},challenges:{day:"",done:[],progress:{}},settings:Eg(),seenIntro:!1,tutorialDone:!1}}function wg(){try{const i=localStorage.getItem(Bl);if(!i)return js();const t=JSON.parse(i),e=js();return{...e,...t,kit:{...e.kit,...t.kit??{}},settings:{...e.settings,...t.settings??{}},challenges:{...e.challenges,...t.challenges??{}},bestTimes:t.bestTimes??{},bestLaps:t.bestLaps??{},medals:t.medals??{},ghosts:t.ghosts??{},unlockedRacers:t.unlockedRacers??e.unlockedRacers,unlockedVehicles:t.unlockedVehicles??e.unlockedVehicles}}catch{return js()}}let Ui=null;function Tg(){return Ui||(Ui=wg()),Ui}function Qe(){if(Ui)try{localStorage.setItem(Bl,JSON.stringify(Ui))}catch{}}function Ag(){Ui=js(),Qe()}const oi=[{id:"leo",name:"Leo Blaze",animal:"Lion",emoji:"🦁",color:16742959,accent:16765503,personality:"Confident, brave and competitive.",vehicle:"Flame-powered sports kart",passive:"overtake-boost",passiveText:"Longer boost after overtaking a rival.",bio:"The reigning showman of the circuit. Leo lives for the roar of the crowd on the final straight.",food:"Spicy jerky",style:"Aggressive front-runner",speed:9,accel:6,handling:6,weight:8,drift:6,boost:8},{id:"kiki",name:"Kiki Spark",animal:"Fennec Fox",emoji:"🦊",color:3530960,accent:16732120,personality:"Clever, energetic and mischievous.",vehicle:"Small neon hover kart",passive:"fast-drift",passiveText:"Charges drift boosts faster.",bio:"A blur of neon and giggles. Kiki treats every corner as a puzzle to be drifted through.",food:"Fizzy berries",style:"Technical drifter",speed:6,accel:9,handling:9,weight:3,drift:9,boost:7},{id:"finn",name:"Finn Wave",animal:"Dolphin",emoji:"🐬",color:3123455,accent:9433343,personality:"Relaxed, adventurous and funny.",vehicle:"Aqua jet kart",passive:"water-speed",passiveText:"Faster through water and underwater sections.",bio:"Never met a puddle he did not want to surf. Finn rules the ocean tracks.",food:"Kelp smoothies",style:"Flowing cruiser",speed:7,accel:8,handling:8,weight:5,drift:7,boost:6},{id:"zara",name:"Zara Stripe",animal:"Tiger",emoji:"🐯",color:16752412,accent:2829634,personality:"Focused, fearless and cool.",vehicle:"Futuristic jungle racer",passive:"offroad-grip",passiveText:"Loses less speed on dirt and grass.",bio:"Silent, precise and always on the racing line. Zara turns the jungle into her hunting ground.",food:"Grilled skewers",style:"Precise all-rounder",speed:9,accel:6,handling:9,weight:5,drift:7,boost:6},{id:"bruno",name:"Bruno Boulder",animal:"Gorilla",emoji:"🦍",color:9267016,accent:5032432,personality:"Strong, loyal and surprisingly gentle.",vehicle:"Heavy off-road kart",passive:"heavy-armor",passiveText:"Barely flinches from collisions and knockback.",bio:"A mountain with a steering wheel. Bruno bulldozes through chaos without blinking.",food:"Banana stacks",style:"Unstoppable bruiser",speed:9,accel:3,handling:4,weight:10,drift:4,boost:6},{id:"pip",name:"Pip Rocket",animal:"Penguin",emoji:"🐧",color:4415982,accent:15858414,personality:"Smart, sarcastic and inventive.",vehicle:"Rocket-powered ice kart",passive:"ice-grip",passiveText:"Superior grip on ice and snow.",bio:"Builds his own rockets and complains the whole way to the podium.",food:"Frozen anchovies",style:"Cool-headed engineer",speed:6,accel:9,handling:8,weight:4,drift:7,boost:8},{id:"ruby",name:"Ruby Bounce",animal:"Kangaroo",emoji:"🦘",color:16735631,accent:16765503,personality:"Sporty, confident and cheerful.",vehicle:"Spring-powered rally kart",passive:"trick-boost",passiveText:"Stronger landing boost after tricks.",bio:"Air is her home. Ruby launches off every ramp like it owes her money.",food:"Trail mix",style:"Aerial daredevil",speed:8,accel:6,handling:6,weight:5,drift:6,boost:7},{id:"dash",name:"Dash Bolt",animal:"Cheetah",emoji:"🐆",color:16766474,accent:16726832,personality:"Extremely competitive and impatient.",vehicle:"Low-profile lightning racer",passive:"clean-run",passiveText:"Speed surge after driving cleanly without crashing.",bio:"The fastest paws alive — if only he could stop hitting the walls.",food:"Energy gels",style:"Pure speed glass cannon",speed:10,accel:6,handling:6,weight:3,drift:5,boost:7},{id:"luna",name:"Luna Glide",animal:"Snow Owl",emoji:"🦉",color:13481215,accent:15858414,personality:"Calm, mysterious and observant.",vehicle:"Winged moon glider",passive:"air-control",passiveText:"Superb air control on jumps and glides.",bio:"Sees the whole track from above and always seems to know the shortcut.",food:"Moonberries",style:"Graceful glider",speed:6,accel:6,handling:9,weight:3,drift:8,boost:6},{id:"rocky",name:"Rocky Shell",animal:"Turtle",emoji:"🐢",color:3129201,accent:16765503,personality:"Calm, determined and impossible to intimidate.",vehicle:"Armoured shell kart",passive:"long-shield",passiveText:"Shield power-ups last noticeably longer.",bio:"Slow to anger, impossible to knock off course. Rocky simply endures — and wins.",food:"Sea lettuce",style:"Defensive tank",speed:6,accel:4,handling:6,weight:10,drift:5,boost:6},{id:"nova",name:"Nova Paws",animal:"Red Panda",emoji:"🐼",color:16740419,accent:9433343,personality:"Creative, curious and slightly chaotic.",vehicle:"Candy-powered hover buggy",passive:"double-boost",passiveText:"Chance to get two mini-boosts from one boost item.",bio:"Half genius, half gremlin. Nova rewires her buggy between every race.",food:"Candy floss",style:"Chaotic wildcard",speed:6,accel:9,handling:8,weight:3,drift:8,boost:7},{id:"shadow",name:"Shadow Lynx",animal:"Lynx",emoji:"🐈‍⬛",color:8073207,accent:16723888,personality:"Mysterious, calm and highly skilled.",vehicle:"Black & purple anti-gravity kart",passive:"drift-cloak",passiveText:"Briefly untargetable after a clean drift.",bio:"A masked racer of impossible skill, collecting Turbo Star fragments for reasons unknown…",food:"Unknown",style:"Flawless phantom",speed:9,accel:9,handling:9,weight:5,drift:9,boost:9,locked:!0}],qi=i=>oi.find(t=>t.id===i)??oi[0],we=(i,t,e,n,s={})=>({id:i,name:t,shape:e,desc:n,dSpeed:s.dSpeed??0,dAccel:s.dAccel??0,dHandling:s.dHandling??0,dWeight:s.dWeight??0,dDrift:s.dDrift??0,dBoost:s.dBoost??0,dOffroad:s.dOffroad??0}),Gi=[we("sport","Blaze GT","sport","A balanced flame-styled sports kart.",{dSpeed:.5,dBoost:.3}),we("hover","Neon Drifter","hover","Hovering neon kart with razor handling.",{dHandling:.6,dDrift:.6,dWeight:-.4}),we("rocket","Sky Piercer","rocket","Rocket-boosted straight-line monster.",{dSpeed:.7,dAccel:.4,dHandling:-.3}),we("monster","Grit Crawler","monster","Huge tyres, huge grip off-road.",{dOffroad:.8,dWeight:.6,dSpeed:.3,dHandling:-.3}),we("aqua","Tide Runner","aqua","Streamlined for water tracks.",{dHandling:.4,dDrift:.4}),we("candy","Sugar Rush","candy","Sweet hover buggy with a sugar high.",{dAccel:.6,dBoost:.4,dWeight:-.3}),we("truck","Canopy Hauler","truck","Rugged jungle truck.",{dWeight:.5,dOffroad:.6,dAccel:-.2}),we("ice","Frost Lance","ice","Rocket-ice racer built for cold.",{dAccel:.5,dHandling:.4}),we("cruiser","Star Cruiser","cruiser","Space cruiser with smooth top speed.",{dSpeed:.6,dWeight:.3}),we("insect","Skitter Mk3","insect","Mechanical insect kart, nimble as a bug.",{dHandling:.7,dAccel:.4,dWeight:-.4}),we("shell","Bastion Shell","shell","Armoured shell, tough as nails.",{dWeight:.8,dOffroad:.3,dSpeed:.2,dAccel:-.3}),we("cloud","Zephyr","cloud","Light cloud racer that floats through turns.",{dHandling:.5,dDrift:.5,dWeight:-.5}),we("dragon","Emberwing","dragon","Dragon-inspired kart breathing boost.",{dSpeed:.5,dBoost:.6,dWeight:.2}),we("lunar","Moonglider","lunar","Winged lunar glider, king of the air.",{dHandling:.5,dDrift:.4,dWeight:-.3}),we("neon","Pulse Street","neon","Neon street racer, all attitude.",{dSpeed:.5,dAccel:.3,dDrift:.3}),we("shadow","Void Runner","shadow","A phantom anti-gravity kart.",{dSpeed:.5,dAccel:.5,dHandling:.5,dDrift:.5,dBoost:.5})];Gi[Gi.length-1].locked=!0;const zl=i=>Gi.find(t=>t.id===i)??Gi[0],ia=[{name:"Signature",color:-1},{name:"Turbo Red",color:16726832},{name:"Sunset Orange",color:16742959},{name:"Volt Yellow",color:16766474},{name:"Jungle Green",color:3129201},{name:"Aqua",color:3123455},{name:"Galaxy Purple",color:8073207},{name:"Neon Pink",color:16723888},{name:"Frost White",color:15398655},{name:"Shadow Black",color:1448491}],Dc=[{name:"Classic Fire",color:16742959},{name:"Neon Cyan",color:3530960},{name:"Rainbow",color:-1},{name:"Violet",color:10181887},{name:"Gold",color:16765503},{name:"Ice Blue",color:9433343}],Vl={candy:{id:"candy",name:"Candy Kingdom",road:7031439,roadEdge:16735665,ground:16766700,offroad:16230616,skyTop:9358335,skyBottom:16765420,fog:16765420,fogDensity:.0012,accent:16723888,decor:"candy",music:"candy"},ocean:{id:"ocean",name:"Deep Ocean",road:1796751,roadEdge:3530960,ground:670298,offroad:872046,skyTop:405577,skyBottom:678522,fog:674408,fogDensity:.0022,accent:3530960,decor:"coral",water:!0,music:"ocean"},galaxy:{id:"galaxy",name:"Galaxy Zone",road:2764629,roadEdge:9068543,ground:658975,offroad:1316922,skyTop:328463,skyBottom:1182254,fog:657440,fogDensity:.0016,accent:10181887,decor:"space",night:!0,music:"galaxy"},jungle:{id:"jungle",name:"Wild Jungle",road:6967862,roadEdge:16765503,ground:2059066,offroad:3115596,skyTop:7259903,skyBottom:13496063,fog:12576454,fogDensity:.0016,accent:8114751,decor:"jungle",music:"jungle"},frozen:{id:"frozen",name:"Frozen Kingdom",road:10471400,roadEdge:9433343,ground:14676479,offroad:12574962,skyTop:9418982,skyBottom:15135999,fog:14477813,fogDensity:.0018,accent:9433343,decor:"ice",music:"frozen"},neon:{id:"neon",name:"Neon Future",road:1316398,roadEdge:16723888,ground:526874,offroad:1053482,skyTop:328463,skyBottom:1707578,fog:657440,fogDensity:.002,accent:58879,decor:"city",night:!0,music:"neon"},shadow:{id:"shadow",name:"Shadow Fortress",road:1708848,roadEdge:11619327,ground:460048,offroad:1051170,skyTop:262920,skyBottom:1706542,fog:656664,fogDensity:.0022,accent:16723888,decor:"fortress",night:!0,music:"shadow"}},Un={oval:[1.35,1.3,1.15,1,.92,.95,1.1,1.28,1.34,1.3,1.12,.98,.9,.96,1.12,1.3],kidney:[1.2,1.35,1.3,1,.72,.8,1.05,1.2,1.15,1.25,1.3,1.05,.78,.72,.95,1.15],clover:[1.3,1,1.28,.98,1.3,1,1.26,.98,1.3,1,1.28,.98,1.3,1,1.26,.98],wavy:[1.2,1.32,1.1,1.28,1.05,1.26,1.08,1.3,1.12,1.28,1.06,1.24,1.1,1.3,1.12,1.24],peanut:[1.4,1.2,.95,.85,.95,1.2,1.4,1.2,.95,.85,.62,.85,.95,1.2,1.35,1.3],star:[1.35,.95,1.28,.92,1.32,.95,1.25,.9,1.34,.95,1.28,.92,1.3,.95,1.26,.9],serpent:[1.15,1.3,1.05,.8,1,1.3,1.1,.82,1.05,1.32,1.12,.85,1,1.28,1.14,.9]},ja=[{id:"sugar-rush",name:"Sugar Rush Speedway",world:"candy",cup:"rookie",laps:3,scale:240,width:13,hillAmp:5,hillFreq:3,shape:Un.oval,boostPads:[.12,.55,.82],ramps:[.33,.7],desc:"Chocolate roads and giant spinning lollipops."},{id:"choco-volcano",name:"Chocolate Volcano",world:"candy",cup:"rookie",laps:3,scale:250,width:12,hillAmp:16,hillFreq:2,shape:Un.peanut,boostPads:[.2,.63],ramps:[.28,.52,.86],desc:"Caramel waterfalls and a cookie mega-jump."},{id:"coral-city",name:"Coral City Circuit",world:"ocean",cup:"ocean",laps:3,scale:260,width:13,hillAmp:7,hillFreq:3,shape:Un.kidney,boostPads:[.15,.48,.78],ramps:[.4,.68],desc:"Glass tunnels and glowing jellyfish."},{id:"moonbase",name:"Moonbase Mayhem",world:"galaxy",cup:"galaxy",laps:3,scale:270,width:12,hillAmp:12,hillFreq:3,shape:Un.serpent,boostPads:[.1,.44,.72],ramps:[.25,.5,.8],desc:"Low-gravity jumps over glowing craters."},{id:"jungle-temple",name:"Jungle Temple Run",world:"jungle",cup:"jungle",laps:3,scale:250,width:12,hillAmp:10,hillFreq:4,shape:Un.clover,boostPads:[.18,.42,.68,.9],ramps:[.35,.72],desc:"Ancient ruins, vines and rolling boulders."},{id:"iceberg",name:"Iceberg Avalanche",world:"frozen",cup:"galaxy",laps:3,scale:260,width:13,hillAmp:14,hillFreq:2,shape:Un.wavy,boostPads:[.2,.6],ramps:[.3,.55,.82],desc:"Slippery turns beneath a cracking glacier."},{id:"neon-paws",name:"Neon Paws City",world:"neon",cup:"turbo",laps:3,scale:280,width:12,hillAmp:8,hillFreq:3,shape:Un.star,boostPads:[.12,.4,.66,.88],ramps:[.3,.6],desc:"Rooftop racing through neon skyscrapers."},{id:"shadow-fortress",name:"Shadow Turbo Fortress",world:"shadow",cup:"shadow",laps:3,scale:290,width:11,hillAmp:18,hillFreq:3,shape:Un.star,boostPads:[.1,.35,.6,.85],ramps:[.22,.48,.74],desc:"The final track, built around the Turbo Star."}],gr=i=>ja.find(t=>t.id===i)??ja[0],ar=[{id:"rookie",name:"Rookie Cup",emoji:"🍭",tracks:["sugar-rush","choco-volcano","jungle-temple","coral-city"]},{id:"turbo",name:"Turbo Cup",emoji:"🌆",tracks:["neon-paws","moonbase","iceberg","coral-city"]},{id:"shadow",name:"Shadow Cup",emoji:"🌑",tracks:["jungle-temple","iceberg","neon-paws","shadow-fortress"]}],cs=i=>ar.find(t=>t.id===i)??ar[0],Hl={carrot:{id:"carrot",name:"Turbo Carrot",icon:"🥕",desc:"A strong instant speed boost.",kind:"self"},banana:{id:"banana",name:"Banana Bounce",icon:"🍌",desc:"Drop a peel — racers who hit it spin out.",kind:"drop"},shield:{id:"shield",name:"Bubble Shield",icon:"🫧",desc:"A bubble that blocks one attack.",kind:"self"},falcon:{id:"falcon",name:"Rocket Falcon",icon:"🦅",desc:"A homing falcon that hits the racer ahead.",kind:"projectile"},jelly:{id:"jelly",name:"Jelly Splash",icon:"🟣",desc:"A slippery blob — driving through it kills your grip.",kind:"drop"},ink:{id:"ink",name:"Octopus Ink",icon:"🐙",desc:"Splatters the screens of racers ahead of you.",kind:"field"},roar:{id:"roar",name:"Thunder Roar",icon:"🌩️",desc:"A shockwave that shoves nearby racers away.",kind:"area"},star:{id:"star",name:"Turbo Star",icon:"⭐",desc:"Invincible, super-fast and glowing. Rare!",kind:"self"}};function Rg(i,t){const e=i,n=1-i,s=[["carrot",2+e*2],["banana",1.5+n*1.5],["shield",1.2+n],["falcon",1.5+e*1.2],["jelly",1+n],["ink",.8+e],["roar",1],["star",e>.55?e*1.4:.05]],r=s.reduce((o,[,c])=>o+c,0);let a=t()*r;for(const[o,c]of s)if(a-=c,a<=0)return o;return"carrot"}class Cg{constructor(t,e=600){k(this,"n");k(this,"pos",[]);k(this,"tan",[]);k(this,"nrm",[]);k(this,"totalLength");const n=new Pl(t,!0,"catmullrom",.5);this.totalLength=n.getLength(),this.n=e;const s=n.getSpacedPoints(e);for(let a=0;a<e;a++)this.pos.push(s[a].clone());const r=new R(0,1,0);for(let a=0;a<e;a++){const o=this.pos[(a-1+e)%e],c=this.pos[(a+1)%e],l=new R().subVectors(c,o).normalize();this.tan.push(l);const h=new R().crossVectors(r,l).normalize();this.nrm.push(h)}}frameAt(t){const n=(t%1+1)%1*this.n,s=Math.floor(n)%this.n,r=(s+1)%this.n,a=n-Math.floor(n),o=this.pos[s].clone().lerp(this.pos[r],a),c=this.tan[s].clone().lerp(this.tan[r],a).normalize(),l=this.nrm[s].clone().lerp(this.nrm[r],a).normalize();return{pos:o,tan:c,nrm:l}}tOfIndex(t){return t%this.n/this.n}project(t,e,n=40){let s=e%this.n,r=1/0;for(let l=-n;l<=n;l++){const h=((e+l)%this.n+this.n)%this.n,d=this.pos[h].distanceToSquared(t);d<r&&(r=d,s=h)}const a=this.nrm[s],c=new R().subVectors(t,this.pos[s]).dot(a);return{t:this.tOfIndex(s),index:s,lateral:c,dist:Math.sqrt(r)}}projectGlobal(t){let e=0,n=1/0;for(let s=0;s<this.n;s++){const r=this.pos[s].distanceToSquared(t);r<n&&(n=r,e=s)}return this.project(t,e,4)}}class Pg{constructor(t,e){k(this,"curve");k(this,"group",new an);k(this,"width");k(this,"laps");k(this,"theme");k(this,"def");k(this,"boostPads",[]);k(this,"ramps",[]);k(this,"checkpoints",[]);k(this,"decorMeshes",[]);this.def=t,this.laps=t.laps,this.width=t.width,this.theme=Vl[t.world];const n=kl(e),s=[],r=64;for(let a=0;a<r;a++){const o=a/r*Math.PI*2,c=a/r*t.shape.length,l=Math.floor(c)%t.shape.length,h=(l+1)%t.shape.length,d=c-Math.floor(c),u=t.shape[l]*(1-d)+t.shape[h]*d,m=t.scale*u,v=Math.sin(o*t.hillFreq)*t.hillAmp+Math.sin(o*t.hillFreq*2+1.3)*t.hillAmp*.35;s.push(new R(Math.cos(o)*m,v,Math.sin(o)*m))}this.curve=new Cg(s,600),this.buildRoad(),this.buildGround(),this.buildStartLine(),this.buildFeatures(),this.buildCheckpoints(32),this.buildDecor(n.decorDensity)}heightAtT(t){return this.curve.frameAt(t).pos.y}frameAt(t){return this.curve.frameAt(t)}buildRoad(){const t=this.curve.n,e=this.width,n=[],s=[],r=[],a=[];for(let l=0;l<t;l++){const h=this.curve.pos[l],d=this.curve.nrm[l];r.push(h.clone().addScaledVector(d,e)),a.push(h.clone().addScaledVector(d,-e))}for(let l=0;l<t;l++)n.push(r[l].x,r[l].y+.05,r[l].z),n.push(a[l].x,a[l].y+.05,a[l].z);for(let l=0;l<t;l++){const h=l*2,d=h+1,u=(l+1)%t*2,m=u+1;s.push(h,d,u,d,m,u)}const o=new de;o.setAttribute("position",new jt(n,3)),o.setIndex(s),o.computeVertexNormals();const c=new Pt(o,new oe({color:this.theme.road,roughness:.85,metalness:.1}));c.receiveShadow=!0,this.group.add(c);for(const l of[1,-1]){const h=[],d=[];for(let v=0;v<t;v++){const _=this.curve.pos[v],f=this.curve.nrm[v],p=_.clone().addScaledVector(f,l*(e-.5)),M=_.clone().addScaledVector(f,l*e);h.push(p.x,p.y+.1,p.z,M.x,M.y+.1,M.z)}for(let v=0;v<t;v++){const _=v*2,f=_+1,p=(v+1)%t*2,M=p+1;d.push(_,f,p,f,M,p)}const u=new de;u.setAttribute("position",new jt(h,3)),u.setIndex(d),u.computeVertexNormals();const m=new Pt(u,new oe({color:this.theme.roadEdge,emissive:this.theme.roadEdge,emissiveIntensity:.8,roughness:.4}));this.group.add(m);for(let v=0;v<t;v+=24){const _=this.curve.pos[v],f=this.curve.nrm[v],p=new Pt(new Me(.4,1.1,.4),new oe({color:this.theme.roadEdge,emissive:this.theme.roadEdge,emissiveIntensity:.5}));p.position.copy(_.clone().addScaledVector(f,l*(e+.4))),p.position.y+=.55,this.group.add(p)}}}buildGround(){let t=1/0;for(const n of this.curve.pos)t=Math.min(t,n.y);const e=new Pt(new rr(this.def.scale*2.4,48),new oe({color:this.theme.ground,roughness:1}));if(e.rotation.x=-Math.PI/2,e.position.y=t-6,e.receiveShadow=!0,this.group.add(e),this.theme.water){const n=new Pt(new rr(this.def.scale*2.3,48),new oe({color:941958,transparent:!0,opacity:.55,roughness:.2,metalness:.4}));n.rotation.x=-Math.PI/2,n.position.y=t-1.5,this.group.add(n)}}buildStartLine(){const t=this.curve.frameAt(0),e=new Hi(this.width*2,4),n=document.createElement("canvas");n.width=128,n.height=32;const s=n.getContext("2d");for(let l=0;l<4;l++)for(let h=0;h<16;h++)s.fillStyle=(h+l)%2?"#fff":"#111",s.fillRect(h*8,l*8,8,8);const r=new Cl(n),a=new Pt(e,new oe({map:r}));a.rotation.x=-Math.PI/2,a.position.copy(t.pos),a.position.y+=.12,a.lookAt(t.pos.clone().add(new R(0,1,0))),a.rotation.x=-Math.PI/2;const o=Math.atan2(t.tan.x,t.tan.z);a.rotation.z=-o,this.group.add(a);for(const l of[1,-1]){const h=new Pt(new Xe(.4,.4,10,8),new oe({color:this.theme.accent,emissive:this.theme.accent,emissiveIntensity:.5}));h.position.copy(t.pos.clone().addScaledVector(t.nrm,l*(this.width+1))),h.position.y+=5,this.group.add(h)}const c=new Pt(new Me(this.width*2+4,1.4,1.4),new oe({color:this.theme.roadEdge,emissive:this.theme.roadEdge,emissiveIntensity:.7}));c.position.copy(t.pos),c.position.y+=10,c.rotation.y=Math.atan2(t.nrm.x,t.nrm.z),this.group.add(c)}buildFeatures(){for(const t of this.def.boostPads){const e=this.curve.frameAt(t),n=new Pt(new Hi(this.width*1.4,8),new oe({color:this.theme.accent,emissive:this.theme.accent,emissiveIntensity:1.2,transparent:!0,opacity:.9}));n.rotation.x=-Math.PI/2,n.position.copy(e.pos),n.position.y+=.14,n.rotation.z=-Math.atan2(e.tan.x,e.tan.z),this.group.add(n),this.boostPads.push({t,pos:e.pos.clone(),dir:e.tan.clone()})}for(const t of this.def.ramps){const e=this.curve.frameAt(t),n=new Pt(new Me(this.width*1.8,.6,7),new oe({color:this.theme.roadEdge,emissive:this.theme.roadEdge,emissiveIntensity:.5,roughness:.5}));n.position.copy(e.pos),n.position.y+=.5,n.rotation.y=Math.atan2(e.tan.x,e.tan.z),n.rotation.x=-.18,n.castShadow=!0,this.group.add(n),this.ramps.push({t,pos:e.pos.clone(),dir:e.tan.clone()})}}buildCheckpoints(t){for(let e=0;e<t;e++){const n=e/t;this.checkpoints.push({t:n,pos:this.curve.frameAt(n).pos.clone()})}}buildDecor(t){const e=this.curve.n,n=Math.max(6,Math.floor(18/t)),s=Dg(this.def.id.length*997+13);for(let r=0;r<e;r+=n)for(const a of[1,-1]){if(s()>.72)continue;const o=this.curve.pos[r],c=this.curve.nrm[r],l=this.width+4+s()*16,h=o.clone().addScaledVector(c,a*l),d=this.decorProp(s);d&&(d.position.copy(h),d.position.y=o.y,d.rotation.y=s()*Math.PI*2,this.group.add(d),this.decorMeshes.push(d))}this.buildLandmarks()}decorProp(t){const e=this.theme.accent,n=this.theme.roadEdge,s=1+t()*1.6,r=(a,o=0,c=0)=>new oe({color:a,emissive:o,emissiveIntensity:c,roughness:.6});switch(this.theme.decor){case"candy":{const a=new an,o=new Pt(new Xe(.18,.18,4*s,8),r(16777215));o.position.y=2*s,a.add(o);const c=new Pt(new mr(1.1*s,.4*s,8,16),r(t()>.5?16735665:16765503));return c.position.y=4*s,a.add(c),a.children.forEach(l=>l.castShadow=!0),a}case"coral":{const a=new Pt(new kn(1.1*s,4*s,7),r(t()>.5?16740241:9433343,e,.25));return a.position.y=2*s,a.castShadow=!0,a}case"space":{const a=new Pt(new Xe(.3,.5,6*s,6),r(1316922,e,.9));return a.position.y=3*s,a}case"jungle":{const a=new an,o=new Pt(new Xe(.4,.6,4*s,7),r(6965802));o.position.y=2*s,o.castShadow=!0;const c=new Pt(new Sn(1.8*s,8,6),r(3115583));return c.position.y=4.4*s,c.castShadow=!0,a.add(o,c),a}case"ice":{const a=new Pt(new kn(.9*s,5*s,6),r(14676479,n,.3));return a.position.y=2.5*s,a.castShadow=!0,a}case"city":{const a=8+t()*26,o=new Pt(new Me(3+t()*3,a,3+t()*3),r(856112,t()>.5?e:n,.5));return o.position.y=a/2,o.castShadow=!0,o}case"fortress":{const a=6+t()*20,o=new Pt(new Me(2.4,a,2.4),r(1182244,11619327,.4));return o.position.y=a/2,o}}return null}buildLandmarks(){const t=this.theme.accent,e=[.25,.7];for(const n of e){const s=this.curve.frameAt(n),r=s.pos.clone().addScaledVector(s.nrm,40);let a;switch(this.theme.decor){case"candy":a=Lg();break;case"coral":a=Ri(new _o(6,1.6,60,10),9433343,t);break;case"space":a=Ri(new go(8,0),2764646,t);break;case"jungle":a=Ri(new kn(7,22,8),3115583,0);break;case"ice":a=Ri(new kn(6,26,7),14676479,t);break;case"city":a=Ri(new Me(8,60,8),856112,t);break;default:a=Ri(new vo(10,0),1708080,16723888)}a.position.copy(r),a.position.y+=8,this.group.add(a)}}dispose(){this.group.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const n=e.material;Array.isArray(n)?n.forEach(s=>s.dispose()):n&&n.dispose()})}}function Ri(i,t,e){const n=new Pt(i,new oe({color:t,emissive:e,emissiveIntensity:e?.6:0,roughness:.5,metalness:.2}));return n.castShadow=!0,n}function Lg(){const i=new an,t=new Pt(new Xe(.7,.7,24,10),new oe({color:16777215}));t.position.y=12,i.add(t);const e=new Pt(new Xe(7,7,1.4,20),new oe({color:16735665,emissive:16735665,emissiveIntensity:.3}));return e.rotation.x=Math.PI/2,e.position.y=24,i.add(e),i.userData.spin=!0,i}function Dg(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const sa=new Map;function Ig(i){if(sa.has(i))return sa.get(i);const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.clearRect(0,0,128,128),e.font="104px serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i,64,72);const n=new Cl(t);return n.anisotropy=4,sa.set(i,n),n}function Ug(i,t,e){const n=new Xe(i,i,t,12);n.rotateZ(Math.PI/2);const s=[2236962,1119e3,2763317,1708080][e%4],r=new Pt(n,new oe({color:s,roughness:.6,metalness:.3}));return r.castShadow=!0,r}function Gl(i,t,e){const n=new an,s=e.paint>=0?e.paint:i.color,r=i.accent,a=t.shape,o=new oe({color:s,roughness:.35,metalness:.35}),c=new oe({color:r,roughness:.4,metalness:.5,emissive:r,emissiveIntensity:.25});let l,h=.55,d=.5,u=.34,m=1.05,v=1.4,_=!1;switch(a){case"monster":case"truck":l=new Me(1.7,.9,2.6),h=.95,d=.85,u=.5,m=1.25,v=1.55;break;case"rocket":case"dragon":l=new Xe(.42,.6,2.9,10),l.rotateX(Math.PI/2),h=.55,d=.46;break;case"hover":case"cloud":case"lunar":case"shadow":l=new Me(1.5,.5,2.4),h=.6,_=!0;break;case"shell":l=new Sn(1.05,14,10),l.scale(1,.6,1.25),h=.75,d=.42;break;case"insect":l=new Sn(.85,12,10),l.scale(1,.7,1.35),h=.7,d=.4,m=1.15;break;case"aqua":case"cruiser":l=new Xe(.5,.7,2.7,12),l.rotateX(Math.PI/2),h=.6;break;default:l=new Me(1.5,.6,2.5),h=.55}const f=new Pt(l,o);f.position.y=h,f.castShadow=!0,n.add(f);const p=new Pt(new Me(1.2,.3,.8),c);p.position.set(0,h-.05,1.35),p.castShadow=!0,n.add(p);const M=new Pt(new Me(1.5,.5,.14),c);M.position.set(0,h+.45,-1.25),n.add(M);const y=new og(new Al({map:Ig(i.emoji),transparent:!0}));y.scale.set(1.15,1.15,1.15),y.position.set(0,h+.9,.1),n.add(y);const b=[];if(_){const N=new Pt(new Me(1.4,.12,2.2),new oe({color:r,emissive:r,emissiveIntensity:1.1,transparent:!0,opacity:.85}));N.position.y=.18,n.add(N),b.push(N)}else{const N=[[-m,v],[m,v],[-m,-v],[m,-v]];for(const[W,K]of N){const H=Ug(d,u,e.wheels);H.position.set(W,d,K),n.add(H),b.push(H)}}const L=new an;for(let N=0;N<2;N++){const W=new Pt(new kn(.28,1.1,8),new ir({color:16753983,transparent:!0,opacity:.9}));W.rotation.x=-Math.PI/2,W.position.set(N===0?-.45:.45,h-.1,-1.5),L.add(W)}L.visible=!1,n.add(L);const A=new de,w=24,C=new Float32Array(w*3);for(let N=0;N<w;N++)C[N*3]=(N%2?-1:1)*.9,C[N*3+1]=.2,C[N*3+2]=-1.2-Math.random();A.setAttribute("position",new Le(C,3));const V=new ho(A,new fr({color:6728447,size:.4,transparent:!0,opacity:.9}));V.visible=!1,n.add(V);const g=new Pt(new Sn(1.8,16,12),new oe({color:7000319,transparent:!0,opacity:.28,emissive:3123455,emissiveIntensity:.4}));g.position.y=h,g.visible=!1,n.add(g);const S=new Pt(new Sn(1.9,16,12),new ir({color:16769357,transparent:!0,opacity:.35}));return S.position.y=h,S.visible=!1,n.add(S),{group:n,wheels:b,body:f,driver:y,boostFlame:L,driftSparks:V,shieldMesh:g,starAura:S,setPaint:N=>{o.color.setHex(N)}}}let Ot=null,ns=null,Hn=null,tn=null,Wl=.55,Xl=.8,sn=null,xn=null,On=null,Ni=null,Vs=0,Ic="candy",ss=1;function Ng(){if(Ot)return;const i=window.AudioContext??window.webkitAudioContext;i&&(Ot=new i,ns=Ot.createGain(),ns.gain.value=.9,ns.connect(Ot.destination),Hn=Ot.createGain(),Hn.gain.value=Wl,Hn.connect(ns),tn=Ot.createGain(),tn.gain.value=Xl,tn.connect(ns))}function xo(){Ng(),Ot&&Ot.state==="suspended"&&Ot.resume().catch(()=>{})}function Uc(i,t){Wl=i,Xl=t,Hn&&(Hn.gain.value=i),tn&&(tn.gain.value=t)}function ql(){return Ot?Ot.currentTime:0}function Te(i,t,e,n,s,r=0){if(!Ot||!tn)return;const a=ql()+r,o=Ot.createOscillator(),c=Ot.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(1,s),a+t),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(n,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(c).connect(tn),o.start(a),o.stop(a+t+.02)}function Hs(i,t,e,n=0){if(!Ot||!tn)return;const s=ql()+n,r=Math.floor(Ot.sampleRate*i),a=Ot.createBuffer(1,r,Ot.sampleRate),o=a.getChannelData(0);for(let d=0;d<r;d++)o[d]=(Math.random()*2-1)*(1-d/r);const c=Ot.createBufferSource();c.buffer=a;const l=Ot.createBiquadFilter();l.type="bandpass",l.frequency.value=e,l.Q.value=.8;const h=Ot.createGain();h.gain.value=t,c.connect(l).connect(h).connect(tn),c.start(s)}function Fg(){if(!Ot||!tn||sn)return;On=Ot.createGain(),On.gain.value=0;const i=Ot.createBiquadFilter();i.type="lowpass",i.frequency.value=900,sn=Ot.createOscillator(),sn.type="sawtooth",sn.frequency.value=70,xn=Ot.createOscillator(),xn.type="square",xn.frequency.value=46,sn.connect(On),xn.connect(On),On.connect(i).connect(tn),sn.start(),xn.start()}function Nc(){try{sn?.stop(),xn?.stop()}catch{}sn=xn=null,On=null}function Og(i,t){if(!sn||!xn||!On||!Ot)return;const e=60+i*210+(t?60:0);sn.frequency.setTargetAtTime(e,Ot.currentTime,.05),xn.frequency.setTargetAtTime(e*.5,Ot.currentTime,.05),On.gain.setTargetAtTime(.06+i*.09,Ot.currentTime,.1)}const Lt={countdownBeep:(i=!1)=>{Te(i?880:440,.18,"square",.16)},go:()=>{Te(660,.1,"square",.16),Te(990,.3,"square",.16,void 0,.08)},drift:()=>Hs(.25,.05,1600),spark:i=>Te(500+i*200,.08,"triangle",.05),boost:()=>{Te(300,.35,"sawtooth",.16,1100),Hs(.3,.06,2200)},miniBoost:()=>Te(400,.2,"sawtooth",.12,900),pickup:()=>{Te(700,.09,"triangle",.12),Te(1050,.12,"triangle",.12,void 0,.07)},usePower:()=>Te(520,.14,"square",.12,260),hit:()=>{Hs(.3,.14,500),Te(140,.25,"sawtooth",.14,60)},bump:()=>Hs(.12,.08,350),star:()=>{for(let i=0;i<5;i++)Te(600+i*180,.14,"triangle",.08,void 0,i*.08)},trick:()=>Te(500,.2,"sine",.1,1200),land:()=>Te(260,.12,"sine",.1,120),ui:()=>Te(600,.05,"triangle",.06),win:()=>{[523,659,784,1046,1318].forEach((i,t)=>Te(i,.3,"triangle",.14,void 0,t*.12))},lose:()=>{[440,392,330].forEach((i,t)=>Te(i,.35,"sine",.1,void 0,t*.16))}},Fc={candy:[523.25,587.33,659.25,783.99,880,987.77],ocean:[261.63,311.13,349.23,392,466.16,523.25],galaxy:[329.63,392,440,523.25,587.33,659.25],jungle:[293.66,349.23,392,440,523.25,587.33],frozen:[523.25,622.25,698.46,783.99,880,1046.5],neon:[349.23,415.3,466.16,523.25,622.25,698.46],shadow:[277.18,329.63,369.99,415.3,493.88,554.37]};function Oc(i){Ic=Fc[i]?i:"candy",Vs=0,ss=1,Ni&&window.clearInterval(Ni);const t=()=>{if(!Ot||!Hn)return;const n=Fc[Ic],s=Vs%8;if(s%2===0){const a=n[0]/2;ra(a,.28,"triangle",.05*ss)}const r=n[Vs*3%n.length];ra(r,.16,"square",.03*ss),(s===0||s===4)&&ra(n[2]*2,.1,"sine",.02*ss),Vs++};Ni=window.setInterval(t,200)}function ra(i,t,e,n){if(!Ot||!Hn)return;const s=Ot.currentTime,r=Ot.createOscillator(),a=Ot.createGain();r.type=e,r.frequency.value=i,a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(n,s+.02),a.gain.exponentialRampToValueAtTime(1e-4,s+t),r.connect(a).connect(Hn),r.start(s),r.stop(s+t+.02)}function kc(i){ss=i}function Ja(){Ni&&(window.clearInterval(Ni),Ni=null)}const Bc=new R,vn=(i,t,e)=>Math.max(t,Math.min(e,i)),Nn=(i,t,e)=>i+(t-i)*e;function kg(i,t){const e=(h,d)=>vn(h+d*1.5,1,11),n=e(i.speed,t.dSpeed),s=e(i.accel,t.dAccel),r=e(i.handling,t.dHandling),a=e(i.weight,t.dWeight),o=e(i.drift,t.dDrift),c=e(i.boost,t.dBoost),l=vn(.35+t.dOffroad*.4+(i.passive==="offroad-grip"?.35:0),.2,.95);return{maxSpeed:52+n*4.6,accel:20+s*2.6,turn:1.5+r*.16,grip:.72+r*.02,weight:.6+a*.12,driftRate:.75+o*.08,boostMul:1.2+c*.03,boostDur:.85+c*.05,offroadKeep:l}}const Ci=[.5,1.05,1.75,2.6],Bg=[{t:.55,p:1.16},{t:.95,p:1.26},{t:1.45,p:1.4},{t:2.1,p:1.55}],zg=[6728447,11559167,16765503,16735665];class Vg{constructor(t,e,n,s){k(this,"racer");k(this,"vehicle");k(this,"visual");k(this,"isPlayer");k(this,"stats");k(this,"pos",new R);k(this,"yaw",0);k(this,"speed",0);k(this,"vy",0);k(this,"grounded",!0);k(this,"bank",0);k(this,"pitch",0);k(this,"trackT",0);k(this,"hintIndex",0);k(this,"lateral",0);k(this,"offroadAmt",0);k(this,"lap",0);k(this,"nextCp",0);k(this,"place",1);k(this,"finished",!1);k(this,"finishMs",0);k(this,"wrongWay",!1);k(this,"driftDir",0);k(this,"driftCharge",0);k(this,"driftTier",-1);k(this,"wasDrift",!1);k(this,"boostTime",0);k(this,"boostPow",1);k(this,"jumpArmed",new Set);k(this,"padCd",0);k(this,"trickActive",!1);k(this,"trickSpin",0);k(this,"trickDone",!1);k(this,"spinTime",0);k(this,"slowTime",0);k(this,"shieldTime",0);k(this,"starTime",0);k(this,"cloakTime",0);k(this,"moonTime",0);k(this,"knock",new R);k(this,"cleanTime",0);k(this,"cleanBonus",0);k(this,"heldPower",null);k(this,"rubber",1);k(this,"inkTime",0);k(this,"ghostSamples",[]);k(this,"lastSteerVis",0);this.racer=t,this.vehicle=e,this.isPlayer=s,this.stats=kg(t,e),this.visual=Gl(t,e,n)}resetTo(t,e,n){const s=t.frameAt(e);this.pos.copy(s.pos).addScaledVector(s.nrm,n),this.pos.y=s.pos.y,this.yaw=Math.atan2(s.tan.x,s.tan.z),this.speed=0,this.vy=0,this.grounded=!0,this.driftDir=0,this.driftCharge=0,this.boostTime=0,this.spinTime=this.slowTime=0,this.knock.set(0,0,0),this.trackT=e,this.hintIndex=Math.floor(e*t.curve.n)%t.curve.n,this.syncVisual(0)}giveShield(t){this.shieldTime=Math.max(this.shieldTime,t*(this.racer.passive==="long-shield"?1.6:1))}giveStar(t){this.starTime=Math.max(this.starTime,t),Lt.star()}applyBoost(t,e){this.boostTime=Math.max(this.boostTime,t),this.boostPow=Math.max(this.boostPow,e)}hit(t){if(this.starTime>0||this.cloakTime>0)return!1;if(this.shieldTime>0)return this.shieldTime=0,Lt.bump(),!1;const e=this.racer.passive==="heavy-armor"?.4:1;return t.kind==="spin"?(this.spinTime=Math.max(this.spinTime,1.1*e),this.speed*=.4,this.cleanTime=0,this.cleanBonus=0):t.kind==="slow"?(this.slowTime=Math.max(this.slowTime,1.6*e),this.cleanTime=0):t.kind==="push"&&t.dir&&(this.knock.addScaledVector(t.dir,(t.power??20)*e/this.stats.weight),this.cleanTime=0),this.isPlayer&&Lt.hit(),!0}update(t,e,n,s){if(this.finished){this.coastToStop(t,n),this.syncVisual(t);return}this.boostTime=Math.max(0,this.boostTime-t),this.boostTime===0&&(this.boostPow=1),this.spinTime=Math.max(0,this.spinTime-t),this.slowTime=Math.max(0,this.slowTime-t),this.shieldTime=Math.max(0,this.shieldTime-t),this.starTime=Math.max(0,this.starTime-t),this.cloakTime=Math.max(0,this.cloakTime-t),this.moonTime=Math.max(0,this.moonTime-t),this.padCd=Math.max(0,this.padCd-t);const r=this.spinTime>0;let a=r?0:e.steer,o=r?0:e.throttle;if(this.padCd===0){for(const b of n.boostPads)if(this.pos.distanceToSquared(b.pos)<64&&this.forwardDot(b.dir)>.3){this.applyBoost(.9,this.stats.boostMul),this.padCd=.8,this.isPlayer&&Lt.miniBoost();break}}this.updateDrift(t,e,o,a);const c=vn(Math.abs(this.speed)/this.stats.maxSpeed,0,1);let l=this.stats.turn*(.55+.65*(1-Math.abs(c-.4)));if(this.grounded||(l*=this.racer.passive==="air-control"?.55:.32),this.driftDir!==0){const b=vn(a,-1,1),L=this.driftDir*.6;this.yaw+=(L+b*.55)*l*1.35*t}else this.yaw+=a*l*t*(this.speed<0?-1:1);this.inkTime=Math.max(0,this.inkTime-t);const h=(this.stats.maxSpeed*this.boostPow+this.cleanBonus)*this.rubber,d=this.offroadAmt>0?Nn(1,this.stats.offroadKeep,this.offroadAmt):1,u=this.slowTime>0?.55:1,m=h*d*u;o>0?this.speed+=this.stats.accel*o*t:o<0?this.speed>0?this.speed+=o*this.stats.accel*1.6*t:this.speed+=o*this.stats.accel*.5*t:this.speed-=this.speed*1.1*t,this.speed=vn(this.speed,-18,Math.max(m,(this.boostTime>0,m))),this.speed>m&&this.boostTime===0&&(this.speed=Nn(this.speed,m,1-Math.pow(.001,t)));const v=Bc.set(Math.sin(this.yaw),0,Math.cos(this.yaw));this.pos.addScaledVector(v,this.speed*t),this.knock.lengthSq()>.01&&(this.pos.addScaledVector(this.knock,t),this.knock.multiplyScalar(Math.pow(.02,t))),this.handleRampsAndAir(t,e,n);const _=n.curve.project(this.pos,this.hintIndex,this.grounded?26:40);this.hintIndex=_.index,this.trackT=_.t,this.lateral=_.lateral;const f=n.width,p=Math.abs(_.lateral)-f;this.offroadAmt=p>0?vn(p/f,0,1):0;const M=f*2.2;if(Math.abs(_.lateral)>M){const b=_.lateral>0?-1:1;this.pos.addScaledVector(n.curve.nrm[_.index],b*(Math.abs(_.lateral)-M)),this.speed*=.7,this.isPlayer&&this.grounded&&Lt.bump()}const y=n.curve.pos[_.index].y;this.grounded&&(this.pos.y=Nn(this.pos.y,y,1-Math.pow(1e-4,t)),this.pitch=Nn(this.pitch,vn(-o*.12+(this.boostTime>0?-.08:0),-.25,.25),.15));for(const b of s){if(b===this)continue;const L=this.pos.x-b.pos.x,A=this.pos.z-b.pos.z,w=L*L+A*A;if(w<6.25&&Math.abs(this.pos.y-b.pos.y)<3){const C=Math.sqrt(w)||.01,V=(2.5-C)/2.5,g=L/C,S=A/C,O=b.stats.weight/(this.stats.weight+b.stats.weight);this.pos.x+=g*V*O,this.pos.z+=S*V*O,this.knock.x+=g*V*6*O,this.knock.z+=S*V*6*O,this.starTime>0&&b.starTime===0&&b.hit({kind:"spin"})}}this.racer.passive==="clean-run"&&(this.offroadAmt<.05&&this.spinTime===0&&this.slowTime===0?(this.cleanTime+=t,this.cleanTime>3&&(this.cleanBonus=Nn(this.cleanBonus,8,.05))):(this.cleanTime=0,this.cleanBonus=Nn(this.cleanBonus,0,.2))),this.syncVisual(t)}coastToStop(t,e){this.speed*=Math.pow(.2,t);const n=Bc.set(Math.sin(this.yaw),0,Math.cos(this.yaw));this.pos.addScaledVector(n,this.speed*t);const s=e.curve.project(this.pos,this.hintIndex,20);this.hintIndex=s.index,this.pos.y=Nn(this.pos.y,e.curve.pos[s.index].y,.2)}updateDrift(t,e,n,s){const r=this.grounded&&this.speed>this.stats.maxSpeed*.35&&n>=0;if(e.drift&&r){if(this.driftDir===0&&Math.abs(s)>.15&&(this.driftDir=s>0?1:-1,this.isPlayer&&Lt.drift()),this.driftDir!==0){const a=this.stats.driftRate*(this.racer.passive==="fast-drift"?1.35:1);this.driftCharge+=a*t,this.driftCharge>Ci[3]+1.1&&(this.driftCharge=Ci[2]+.05);const o=this.driftCharge>=Ci[3]?3:this.driftCharge>=Ci[2]?2:this.driftCharge>=Ci[1]?1:this.driftCharge>=Ci[0]?0:-1;o!==this.driftTier&&o>=0&&this.isPlayer&&Lt.spark(o),this.driftTier=o}}else if(this.driftDir!==0){const a=this.driftTier;if(a>=0){const o=Bg[a];this.applyBoost(o.t*this.stats.boostDur,Math.max(this.boostPow,o.p)),this.isPlayer&&Lt.boost(),this.racer.passive==="drift-cloak"&&a>=1&&(this.cloakTime=Math.max(this.cloakTime,1.2))}this.driftDir=0,this.driftCharge=0,this.driftTier=-1}this.wasDrift=e.drift,this.wasDrift}handleRampsAndAir(t,e,n){if(this.grounded)for(let s=0;s<n.ramps.length;s++){const r=n.ramps[s];this.pos.distanceToSquared(r.pos)<49&&this.forwardDot(r.dir)>.2&&this.speed>20&&(this.jumpArmed.has(s)||(this.vy=9+Math.min(this.speed,90)*.14,this.grounded=!1,this.trickDone=!1,this.jumpArmed.add(s),setTimeout(()=>this.jumpArmed.delete(s),1500)))}else{const s=this.moonTime>0?12:26;this.vy-=s*t,this.pos.y+=this.vy*t,e.trick&&!this.trickActive&&!this.trickDone&&(this.trickActive=!0,this.trickDone=!0,this.trickSpin=0,this.isPlayer&&Lt.trick()),this.trickActive&&(this.trickSpin+=t*10,this.trickSpin>Math.PI*2&&(this.trickActive=!1));const r=n.curve.project(this.pos,this.hintIndex,40),a=n.curve.pos[r.index].y;if(this.pos.y<=a&&(this.pos.y=a,this.vy=0,this.grounded=!0,this.trickActive=!1,this.trickDone)){const o=this.racer.passive==="trick-boost"?1.35:1;this.applyBoost(.7*o,Math.max(this.boostPow,1.2)),this.isPlayer&&Lt.land()}}}forwardDot(t){return Math.sin(this.yaw)*t.x+Math.cos(this.yaw)*t.z}syncVisual(t){const e=this.visual.group;e.position.copy(this.pos);const n=this.driftDir!==0?-this.driftDir*.35:vn(-this.lastSteerVis*.15,-.2,.2);this.bank=Nn(this.bank,n,.2),e.rotation.set(this.pitch,this.yaw,this.bank),this.trickActive&&(e.rotation.x=this.pitch+this.trickSpin),this.spinTime>0&&(e.rotation.y=this.yaw+this.spinTime*18);const s=this.speed*t*2.2;for(const l of this.visual.wheels)l.rotation.x+=s;const r=this.boostTime>0;this.visual.boostFlame.visible=r,r&&this.visual.boostFlame.scale.setScalar(.7+Math.random()*.6);const a=this.visual.driftSparks;this.driftDir!==0&&this.driftTier>=0?(a.visible=!0,a.material.color.setHex(zg[this.driftTier])):a.visible=!1,this.visual.shieldMesh.visible=this.shieldTime>0;const o=this.starTime>0;this.visual.starAura.visible=o,o?this.visual.body.material.emissive.setHSL(performance.now()/300%1,1,.5):this.visual.body.material.emissive.setHex(0);const c=this.cloakTime>0?.35:1;this.visual.body.material.opacity=c,this.visual.body.material.transparent=c<1}setSteerVis(t){this.lastSteerVis=t}get speed01(){return vn(Math.abs(this.speed)/this.stats.maxSpeed,0,1)}}const Hg=i=>{for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i},zc={rookie:{skill:.35,governor:.9,mistakeRate:.05},normal:{skill:.6,governor:.97,mistakeRate:.03},pro:{skill:.82,governor:1.01,mistakeRate:.015},master:{skill:.95,governor:1.04,mistakeRate:.008}};class Vc{constructor(t,e,n){k(this,"kart");k(this,"style");k(this,"diff");k(this,"lane");k(this,"noise",0);k(this,"noiseTarget",0);k(this,"mistakeTime",0);this.kart=t,this.style=e,this.diff=n,this.lane=e==="shortcut"?-.4:e==="aggressive"?-.2:(Math.random()-.5)*.5,t.stats.maxSpeed*=n.governor,t.stats.accel*=.9+n.skill*.2}control(t,e){const n=this.kart;this.noise+=(this.noiseTarget-this.noise)*Math.min(1,t*3),Math.random()<.02&&(this.noiseTarget=(Math.random()-.5)*(1-this.diff.skill)*.8),this.mistakeTime=Math.max(0,this.mistakeTime-t),this.mistakeTime===0&&Math.random()<this.diff.mistakeRate&&(this.mistakeTime=.4+Math.random()*.5);const s=n.speed01,r=.012+s*.03,a=e.frameAt(n.trackT+r),o=this.lane*e.width,c=a.pos.clone().addScaledVector(a.nrm,o),l=new R(c.x-n.pos.x,0,c.z-n.pos.z),h=Math.atan2(l.x,l.z);let d=Hg(h-n.yaw),u=Math.max(-1,Math.min(1,d*1.6+this.noise+n.inkTime*(Math.random()-.5)));const m=e.frameAt(n.trackT+r+.03),_=1-a.tan.dot(m.tan);let f=1;this.mistakeTime>0?f=.4:_>.06&&this.diff.skill<.6&&(f=.7);const M=_>.05&&s>.45&&this.diff.skill>.4&&Math.abs(d)>.18||n.driftDir!==0&&Math.abs(d)>.08&&s>.4;return{throttle:f,steer:u,drift:M,rear:!1,power:!1,trick:!n.grounded&&Math.random()<.04*this.diff.skill,camera:!1,reset:!1,pause:!1}}}const aa=(i,t,e)=>Math.max(t,Math.min(e,i)),Hc=(i,t,e)=>i+(t-i)*e;class Gg{constructor(t,e,n){k(this,"opts");k(this,"renderer");k(this,"scene",new Tl);k(this,"camera");k(this,"track");k(this,"karts",[]);k(this,"ai",[]);k(this,"player");k(this,"input");k(this,"raf",0);k(this,"last",0);k(this,"acc",0);k(this,"running",!1);k(this,"paused",!1);k(this,"finished",!1);k(this,"state","countdown");k(this,"countdownT",3.999);k(this,"raceMs",0);k(this,"cumT",[]);k(this,"prevT",[]);k(this,"lapOf",[]);k(this,"bestLap",[]);k(this,"lapStart",[]);k(this,"wrongCounter",[]);k(this,"eliminated",new Set);k(this,"elimTimer",0);k(this,"message",null);k(this,"messageT",0);k(this,"driftSeconds",0);k(this,"tricks",0);k(this,"hits",0);k(this,"cleanRun",!0);k(this,"accelPressedAt",-1);k(this,"items",[]);k(this,"hazards",[]);k(this,"projectiles",[]);k(this,"particles");k(this,"camPos",new R);k(this,"camLook",new R);k(this,"camYaw",0);k(this,"fov",62);k(this,"shake",0);k(this,"hud");k(this,"onFinish");k(this,"prof");k(this,"ghostSampleTimer",0);k(this,"autopilot",null);k(this,"tick",t=>{if(!this.running)return;this.raf=requestAnimationFrame(this.tick);let e=(t-this.last)/1e3;if(this.last=t,e=Math.min(e,.05),!this.paused){this.acc+=e;const n=1/60;let s=0;for(;this.acc>=n&&s<5;)this.fixed(n),this.acc-=n,s++;this.render(e)}});k(this,"rearToggle",!1);k(this,"graceT",null);k(this,"onResize",()=>{const t=this.opts.container;this.camera.aspect=t.clientWidth/t.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(t.clientWidth,t.clientHeight)});this.opts=t,this.hud=e,this.onFinish=n,this.input=t.input,this.prof=kl(t.settings.quality),this.renderer=new wl({antialias:this.prof.antialias,powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.prof.pixelRatio),this.renderer.setSize(t.container.clientWidth,t.container.clientHeight),this.renderer.shadowMap.enabled=t.settings.shadows&&this.prof.shadowMap>0,this.renderer.shadowMap.type=qc,t.container.appendChild(this.renderer.domElement),this.camera=new ze(62,t.container.clientWidth/t.container.clientHeight,.5,this.prof.drawDistance),this.track=new Pg(gr(t.trackId),t.settings.quality),t.mirror&&(this.track.group.scale.x=-1),this.scene.add(this.track.group),this.setupWorld(),this.setupKarts(),this.particles=new Xg(this.scene,t.settings.particles?Math.floor(400*this.prof.particleScale):0),t.items&&t.mode!=="time"&&this.spawnItems(),window.addEventListener("resize",this.onResize)}setupWorld(){const t=this.track.theme;this.scene.background=new Ft(t.skyBottom),this.scene.fog=new lo(t.fog,t.fogDensity);const e=new Fl(t.skyTop,t.ground,t.night?.5:.9);this.scene.add(e);const n=new Ol(16777215,t.night?.6:1.1);if(n.position.set(120,200,80),this.renderer.shadowMap.enabled){n.castShadow=!0,n.shadow.mapSize.set(this.prof.shadowMap,this.prof.shadowMap);const r=this.track.def.scale*1.2;n.shadow.camera.left=-r,n.shadow.camera.right=r,n.shadow.camera.top=r,n.shadow.camera.bottom=-r,n.shadow.camera.far=900,n.shadow.bias=-5e-4}this.scene.add(n);const s=new Pt(new Sn(this.prof.drawDistance*.9,24,16),new Tn({side:Ce,depthWrite:!1,uniforms:{top:{value:new Ft(t.skyTop)},bot:{value:new Ft(t.skyBottom)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying vec3 vP; uniform vec3 top; uniform vec3 bot; void main(){ float h = normalize(vP).y*0.5+0.5; gl_FragColor = vec4(mix(bot, top, h), 1.0); }"}));if(this.scene.add(s),t.night){const r=new de,a=600,o=new Float32Array(a*3);for(let c=0;c<a;c++){const l=new R().randomDirection().multiplyScalar(this.prof.drawDistance*.7);o[c*3]=l.x,o[c*3+1]=Math.abs(l.y),o[c*3+2]=l.z}r.setAttribute("position",new Le(o,3)),this.scene.add(new ho(r,new fr({color:16777215,size:1.5})))}}setupKarts(){const t=1+this.opts.aiCount,e=[this.opts.playerRacerId],n=(this.opts.fieldRacerIds??oi.filter(o=>!o.locked).map(o=>o.id)).filter(o=>o!==this.opts.playerRacerId);let s=0;for(;e.length<t;)e.push(n[s%n.length]),s++;const r=["aggressive","defensive","shortcut","drifter","itemPro","risky","consistent","comeback"],a=zc[this.opts.difficulty];for(let o=0;o<t;o++){const c=o===0,l=qi(e[o]),h=c?this.opts.playerVehicleId:this.pickVehicleFor(l),d=c?this.opts.kit:{vehicleId:h,paint:-1,trail:0,wheels:o%4},u=new Vg(l,zl(h),d,c),m=Math.floor(o/2),v=o%2,_=.004+m*.006,f=(v===0?-1:1)*this.track.width*.45;u.resetTo(this.track,_,f),this.scene.add(u.visual.group),this.karts.push(u),this.ai.push(c?null:new Vc(u,r[o%r.length],a)),this.cumT.push(0),this.prevT.push(u.trackT),this.lapOf.push(0),this.bestLap.push(1/0),this.lapStart.push(0),this.wrongCounter.push(0),c&&(this.player=u)}}pickVehicleFor(t){return{leo:"sport",kiki:"hover",finn:"aqua",zara:"truck",bruno:"monster",pip:"ice",ruby:"sport",dash:"neon",luna:"lunar",rocky:"shell",nova:"candy",shadow:"shadow"}[t.id]??"sport"}spawnItems(){const t=[.18,.38,.58,.78,.95];for(const e of t){const n=this.track.frameAt(e);for(const s of[-.5,0,.5]){const r=n.pos.clone().addScaledVector(n.nrm,s*this.track.width);r.y+=2;const a=new Pt(new mo(.8,.8,4,8),new oe({color:16777215,emissive:this.track.theme.accent,emissiveIntensity:.8,transparent:!0,opacity:.9}));a.position.copy(r),this.scene.add(a),this.items.push({mesh:a,pos:r,taken:0})}}}start(){this.running=!0,this.last=performance.now(),xo(),Fg(),Oc(this.track.theme.music),kc(1),this.raf=requestAnimationFrame(this.tick)}enableAutopilot(){this.autopilot=new Vc(this.player,"consistent",zc.pro)}debugTick(t){this.paused||(this.fixed(t),this.render(t))}debugInfo(){return{state:this.state,countdown:this.countdownT,playerSpeed:Math.round(this.player.speed),playerPlace:this.player.place,cumT:this.cumT.map(t=>+t.toFixed(3)),speeds:this.karts.map(t=>Math.round(t.speed)),finished:this.finished}}fixed(t){this.state==="countdown"?this.updateCountdown(t):this.state==="racing"&&(this.raceMs+=t*1e3);const e=this.state==="racing",n=this.input.sample();if(n.pause){this.togglePause();return}n.camera&&(this.rearToggle=!this.rearToggle),n.reset&&e&&this.player.resetTo(this.track,this.player.trackT,0),n.power&&e&&this.usePower(this.player),this.state==="countdown"&&n.throttle>0&&this.accelPressedAt<0&&(this.accelPressedAt=this.countdownT);for(let r=0;r<this.karts.length;r++){const a=this.karts[r];if(this.eliminated.has(r))continue;let o=r===0?this.autopilot?this.autopilot.control(t,this.track):n:this.ai[r].control(t,this.track);e||(o={...o,throttle:0,steer:r===0?o.steer:0,drift:!1}),r===0&&a.setSteerVis(o.steer),a.rubber=e?this.rubberFor(r):1,a.update(t,o,this.track,this.karts),e&&r!==0&&a.heldPower&&Math.random()<.01&&this.usePower(a),e&&(this.updateProgress(r,t),a.driftDir!==0&&r===0&&(this.driftSeconds+=t),r===0&&a.trickActive)}e&&(this.updateItems(),this.updateHazards(t),this.updateProjectiles(t),this.rankPositions(),this.opts.mode==="elim"&&this.updateElimination(t),this.checkFinish());const s=this.lapDisplay(0);kc(s>=this.opts.laps?1.35:1),this.messageT=Math.max(0,this.messageT-t),this.messageT===0&&(this.message=null),this.emitHud()}updateCountdown(t){const e=Math.ceil(this.countdownT);this.countdownT-=t;const n=Math.ceil(this.countdownT);if(n!==e&&n>=1&&n<=3&&Lt.countdownBeep(!1),this.countdownT<=0){this.state="racing",Lt.go();const s=this.accelPressedAt;s>0&&(s<.35?(this.player.applyBoost(1.6,this.player.stats.boostMul),this.flash("PERFECT START!"),Lt.boost()):s<.9?(this.player.applyBoost(.8,1.2),this.flash("Good start!")):(this.player.spinTime=.5,this.flash("Too early…")));for(let r=0;r<this.karts.length;r++)this.lapStart[r]=0}}updateProgress(t,e){const n=this.karts[t];let s=n.trackT-this.prevT[t];s>.5?s-=1:s<-.5&&(s+=1),this.cumT[t]+=s,this.prevT[t]=n.trackT,s<-5e-4?this.wrongCounter[t]=Math.min(30,this.wrongCounter[t]+1):this.wrongCounter[t]=Math.max(0,this.wrongCounter[t]-2),n.wrongWay=this.wrongCounter[t]>8;const r=Math.floor(Math.max(0,this.cumT[t]));if(r>this.lapOf[t]){const a=this.raceMs-this.lapStart[t];this.bestLap[t]=Math.min(this.bestLap[t],a),this.lapStart[t]=this.raceMs,this.lapOf[t]=r,t===0&&r===this.opts.laps-1&&this.flash("FINAL LAP!")}n.lap=r}lapDisplay(t){return aa(Math.floor(Math.max(0,this.cumT[t]))+1,1,this.opts.laps)}rubberFor(t){if(this.karts.length<3)return 1;const e=[...this.cumT].sort((s,r)=>s-r)[Math.floor(this.karts.length/2)],n=this.cumT[t]-e;return aa(1-n*.12,.95,1.06)}rankPositions(){this.karts.map((e,n)=>({i:n,p:this.karts[n].finished?1e9+this.karts[n].finishMs*-1:this.cumT[n]})).sort((e,n)=>(this.karts[n.i].finished?this.karts[n.i].finishMs:-n.p)-(this.karts[e.i].finished?this.karts[e.i].finishMs:-e.p)),this.karts.map((e,n)=>n).sort((e,n)=>{const s=this.karts[e].finished,r=this.karts[n].finished;return s&&r?this.karts[e].finishMs-this.karts[n].finishMs:s?-1:r?1:this.cumT[n]-this.cumT[e]}).forEach((e,n)=>{this.karts[e].place=n+1})}updateItems(){const t=this.raceMs;for(const e of this.items){if(e.taken>0){t-e.taken>5e3&&(e.taken=0,e.mesh.visible=!0);continue}e.mesh.rotation.y+=.05;for(const n of this.karts)if(!n.heldPower&&n.pos.distanceToSquared(e.pos)<9){const s=(n.place-1)/Math.max(1,this.karts.length-1);n.heldPower=Rg(s,Math.random),e.taken=t,e.mesh.visible=!1,n.isPlayer&&Lt.pickup();break}}}usePower(t){const e=t.heldPower;if(!e)return;t.heldPower=null,t.isPlayer&&Lt.usePower();const n=this.karts.indexOf(t);switch(e){case"carrot":{t.applyBoost(1.6,t.stats.boostMul),t.racer.passive==="double-boost"&&Math.random()<.5&&setTimeout(()=>t.applyBoost(1.2,t.stats.boostMul),900),t.isPlayer&&Lt.boost();break}case"star":t.giveStar(7);break;case"shield":t.giveShield(6);break;case"banana":this.dropHazard("banana",t,n);break;case"jelly":this.dropHazard("jelly",t,n);break;case"falcon":this.fireFalcon(t,n);break;case"roar":this.roar(t);break;case"ink":this.useInk(t);break}}dropHazard(t,e,n){const s=new R(Math.sin(e.yaw),0,Math.cos(e.yaw)).multiplyScalar(-4),r=e.pos.clone().add(s);r.y+=.3;const a=t==="banana"?new Pt(new mr(.7,.28,8,12),new oe({color:16765503,emissive:5587968,emissiveIntensity:.3})):new Pt(new Sn(1.1,10,8),new oe({color:12078591,transparent:!0,opacity:.75,emissive:8073207,emissiveIntensity:.4}));a.position.copy(r),this.scene.add(a),this.hazards.push({kind:t,mesh:a,pos:r,ownerId:n,life:20})}updateHazards(t){for(let e=this.hazards.length-1;e>=0;e--){const n=this.hazards[e];n.life-=t,n.mesh.rotation.y+=t*2;let s=!1;for(let r=0;r<this.karts.length;r++){const a=this.karts[r];a.pos.distanceToSquared(n.pos)<4&&Math.abs(a.pos.y-n.pos.y)<3&&(n.kind==="banana"?(a.hit({kind:"spin"})&&a.isPlayer&&this.registerHit(a),s=!0):a.hit({kind:"slow"}))}(s||n.life<=0)&&(this.scene.remove(n.mesh),this.hazards.splice(e,1))}}fireFalcon(t,e){const n=new Pt(new kn(.5,1.6,8),new oe({color:13690623,emissive:8961023,emissiveIntensity:.8}));n.rotation.x=Math.PI/2,this.scene.add(n),this.projectiles.push({kind:"falcon",mesh:n,t:t.trackT,ownerId:e,life:5})}updateProjectiles(t){for(let e=this.projectiles.length-1;e>=0;e--){const n=this.projectiles[e];n.life-=t,n.t=(n.t+t*.09)%1;const s=this.track.frameAt(n.t);n.mesh.position.copy(s.pos),n.mesh.position.y+=1.5,n.mesh.lookAt(s.pos.clone().add(s.tan));let r=n.life<=0;for(let a=0;a<this.karts.length;a++){if(a===n.ownerId)continue;const o=this.karts[a];if(o.pos.distanceToSquared(n.mesh.position)<12){o.hit({kind:"spin"})&&o.isPlayer&&this.registerHit(o),r=!0;break}}r&&(this.scene.remove(n.mesh),this.projectiles.splice(e,1))}}roar(t){Lt.hit();for(const e of this.karts)if(e!==t&&t.pos.distanceToSquared(e.pos)<400){const n=e.pos.clone().sub(t.pos).setY(0).normalize();e.hit({kind:"push",dir:n,power:26})}}useInk(t){for(const e of this.karts)e!==t&&this.cumT[this.karts.indexOf(e)]>this.cumT[this.karts.indexOf(t)]&&(e.inkTime=Math.max(e.inkTime,2.2))}registerHit(t){t.isPlayer&&(this.hits++,this.cleanRun=!1,this.shake=.4)}updateElimination(t){this.elimTimer-=t;const e=this.karts.map((n,s)=>s).filter(n=>!this.eliminated.has(n));if(!(e.length<=1)&&this.elimTimer<=0){this.elimTimer=12;const n=e.sort((s,r)=>this.cumT[s]-this.cumT[r])[0];this.eliminated.add(n),this.karts[n].visual.group.visible=!1,n===0?(this.flash("You were eliminated!"),this.endRaceForPlayerElim()):this.flash(`${this.karts[n].racer.name} eliminated!`),e.length-1===1&&this.flash("WINNER!")}}endRaceForPlayerElim(){this.player.finished=!0,this.player.finishMs=this.raceMs,this.finish()}checkFinish(){for(let e=0;e<this.karts.length;e++){const n=this.karts[e];!n.finished&&this.cumT[e]>=this.opts.laps&&(n.finished=!0,n.finishMs=this.raceMs,e===0&&this.flash("FINISH!"))}const t=this.player.finished;if(this.opts.mode==="time"&&t){this.finish();return}t&&this.state==="racing"&&(this.karts.every((n,s)=>n.finished||this.eliminated.has(s))?this.finish():this.graceT=this.graceT??3),this.graceT!=null&&(this.graceT-=1/60,this.graceT<=0&&this.finish())}finish(){if(this.state==="done")return;this.state="done",this.finished=!0;const t=this.karts.map((s,r)=>r).sort((s,r)=>{const a=this.karts[s].finished,o=this.karts[r].finished;return a&&o?this.karts[s].finishMs-this.karts[r].finishMs:a?-1:o?1:this.cumT[r]-this.cumT[s]}),e={order:t.map((s,r)=>({racer:this.karts[s].racer,ms:this.karts[s].finished?this.karts[s].finishMs:this.raceMs+r*800,isPlayer:s===0,place:r+1})),playerPlace:t.indexOf(0)+1,playerMs:this.player.finished?this.player.finishMs:this.raceMs,bestLapMs:this.bestLap[0]===1/0?this.raceMs:this.bestLap[0],coins:0,xp:0,driftSeconds:this.driftSeconds,tricks:this.tricks,hits:this.hits,clean:this.cleanRun&&this.player.place===1},n=e.playerPlace;e.coins=Math.max(20,Math.round((this.karts.length-n+1)*25+this.driftSeconds*3)),e.xp=Math.round(120-n*8+this.driftSeconds*2),Nc(),n===1?Lt.win():Lt.lose(),this.onFinish(e)}render(t){const e=this.player,n=this.rearToggle?1:-1,s=e.yaw;this.camYaw=Wg(this.camYaw,s,1-Math.pow(.0015,t));const r=new R(Math.sin(this.camYaw),0,Math.cos(this.camYaw)),a=4.4,o=e.pos.clone().addScaledVector(r,n*-8.5).add(new R(0,a,0));this.camPos.lerp(o,1-Math.pow(9e-4,t)),e.grounded||(this.camPos.y=Hc(this.camPos.y,e.pos.y+a+2,.1));const c=e.pos.clone().addScaledVector(r,n*6).add(new R(0,1.5,0));this.camLook.lerp(c,1-Math.pow(.002,t)),this.shake=Math.max(0,this.shake-t);const l=this.camPos.clone();this.shake>0&&this.opts.settings.screenShake&&(l.x+=(Math.random()-.5)*this.shake*3,l.y+=(Math.random()-.5)*this.shake*3),this.camera.position.copy(l),this.camera.lookAt(this.camLook);const h=60+e.speed01*8+(e.boostTime>0?10:0);if(this.fov=Hc(this.fov,h,.1),this.camera.fov=this.fov,this.camera.updateProjectionMatrix(),this.track.group.children.forEach(d=>{d.userData?.spin&&(d.rotation.y+=t)}),this.particles.max>0){for(const d of this.karts){if(d.finished)continue;const u=d.pos.clone().addScaledVector(new R(Math.sin(d.yaw),0,Math.cos(d.yaw)),-1.6);d.driftDir!==0&&d.driftTier>=0&&Math.random()<.6&&this.particles.spawn(u,16777215,.5),d.offroadAmt>.2&&d.speed01>.3&&Math.random()<.5&&this.particles.spawn(u,this.track.theme.offroad,.6),d.boostTime>0&&Math.random()<.5&&this.particles.spawn(u,this.track.theme.accent,.4)}this.particles.update(t)}Og(e.speed01,e.boostTime>0),this.renderer.render(this.scene,this.camera)}emitHud(){const t=this.player,e=this.karts.map((n,s)=>({t:n.trackT,color:n.racer.color,isPlayer:s===0}));this.hud({place:t.place,total:this.karts.length,lap:this.lapDisplay(0),laps:this.opts.laps,speed:Math.round(Math.abs(t.speed)*2.4),driftTier:t.driftDir!==0?t.driftTier:-1,power:t.heldPower??null,timeMs:this.raceMs,bestLapMs:this.bestLap[0]===1/0?null:this.bestLap[0],finalLap:this.lapDisplay(0)>=this.opts.laps,wrongWay:t.wrongWay,countdown:this.state==="countdown"?Math.ceil(this.countdownT)>0?String(Math.ceil(this.countdownT)):"GO!":null,message:this.message,positions:e,playerT:t.trackT,ink:t.inkTime,boostBar:t.boostTime>0?1:t.driftDir!==0?aa(t.driftCharge/2.6,0,1):0,eliminatedNext:this.opts.mode==="elim"&&this.state==="racing"?`Elim in ${Math.ceil(this.elimTimer)}s`:null})}flash(t){this.message=t,this.messageT=2}togglePause(){this.paused=!this.paused,this.paused?Ja():Oc(this.track.theme.music)}setPaused(t){t!==this.paused&&this.togglePause()}dispose(){this.running=!1,cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.onResize),Nc(),Ja(),this.track.dispose(),this.scene.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose()}),this.renderer.dispose(),this.renderer.domElement.remove()}}function Wg(i,t,e){let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*e}class Xg{constructor(t,e){k(this,"max");k(this,"pts",null);k(this,"posArr");k(this,"colArr");k(this,"vel",[]);k(this,"life",[]);k(this,"head",0);if(this.max=e,this.posArr=new Float32Array(Math.max(1,e)*3),this.colArr=new Float32Array(Math.max(1,e)*3),e<=0)return;for(let s=0;s<e;s++)this.vel.push(new R),this.life.push(0),this.posArr[s*3+1]=-999;const n=new de;n.setAttribute("position",new Le(this.posArr,3)),n.setAttribute("color",new Le(this.colArr,3)),this.pts=new ho(n,new fr({size:.8,vertexColors:!0,transparent:!0,opacity:.85})),this.pts.frustumCulled=!1,t.add(this.pts)}spawn(t,e,n){if(this.max<=0)return;const s=this.head;this.head=(this.head+1)%this.max,this.posArr[s*3]=t.x,this.posArr[s*3+1]=t.y+.3,this.posArr[s*3+2]=t.z,this.vel[s].set((Math.random()-.5)*n,Math.random()*n+.5,(Math.random()-.5)*n);const r=new Ft(e);this.colArr[s*3]=r.r,this.colArr[s*3+1]=r.g,this.colArr[s*3+2]=r.b,this.life[s]=.7}update(t){if(this.pts){for(let e=0;e<this.max;e++)this.life[e]<=0||(this.life[e]-=t,this.posArr[e*3]+=this.vel[e].x*t,this.posArr[e*3+1]+=this.vel[e].y*t,this.posArr[e*3+2]+=this.vel[e].z*t,this.vel[e].y-=t*4,this.life[e]<=0&&(this.posArr[e*3+1]=-999));this.pts.geometry.getAttribute("position").needsUpdate=!0,this.pts.geometry.getAttribute("color").needsUpdate=!0}}}class qg{constructor(t,e,n){k(this,"root");k(this,"el",{});k(this,"mini");k(this,"mctx");k(this,"outline",[]);k(this,"bounds",{minX:0,maxX:1,minZ:0,maxZ:1});k(this,"lastPower",null);k(this,"onPause",()=>{});k(this,"touchRoot");this.root=document.createElement("div"),this.root.id="hud",this.root.innerHTML=`
      <div class="hud-tl">
        <div class="hud-place" data-place>1<small>/8</small></div>
        <div class="hud-lap" data-lap>LAP 1/3</div>
      </div>
      <div class="hud-tr">
        <button class="icon-btn hud-pauseb" data-pause aria-label="Pause">⏸</button>
        <div class="hud-time" data-time>0:00.00</div>
        <div class="hud-time" data-best style="opacity:.75">BEST --</div>
      </div>
      <div class="hud-power" data-power></div>
      <div class="hud-speed"><span class="n" data-speed>0</span> <span class="u">KM/H</span></div>
      <div class="hud-drift"><div class="fill" data-drift></div></div>
      <canvas class="minimap" data-mini width="256" height="256"></canvas>
      <div class="hud-center"><div class="countdown hidden" data-cd></div></div>
      <div class="flash-msg hidden" data-flash></div>
      <div class="warn hidden" data-warn>WRONG WAY!</div>
      <div class="ink-overlay" data-ink style="opacity:0"></div>
    `,t.appendChild(this.root);const s=r=>this.root.querySelector(r);this.el={place:s("[data-place]"),lap:s("[data-lap]"),time:s("[data-time]"),best:s("[data-best]"),power:s("[data-power]"),speed:s("[data-speed]"),drift:s("[data-drift]"),cd:s("[data-cd]"),flash:s("[data-flash]"),warn:s("[data-warn]"),ink:s("[data-ink]")},s("[data-pause]").addEventListener("click",()=>this.onPause()),this.mini=s("[data-mini]"),this.mctx=this.mini.getContext("2d"),this.buildTouch(t,e,n)}setTrackOutline(t){const e=Math.max(1,Math.floor(t.length/90));this.outline=t.filter((o,c)=>c%e===0);let n=1/0,s=-1/0,r=1/0,a=-1/0;for(const o of this.outline)n=Math.min(n,o.x),s=Math.max(s,o.x),r=Math.min(r,o.z),a=Math.max(a,o.z);this.bounds={minX:n,maxX:s,minZ:r,maxZ:a}}mapPt(t,e,n,s,r=14){const{minX:a,maxX:o,minZ:c,maxZ:l}=this.bounds,h=o-a||1,d=l-c||1,u=Math.min((n-r*2)/h,(s-r*2)/d);return{x:r+(t-a)*u+(n-r*2-h*u)/2,y:r+(e-c)*u+(s-r*2-d*u)/2}}fmt(t){if(t==null||!isFinite(t))return"--";const e=Math.max(0,t),n=Math.floor(e/6e4),s=Math.floor(e%6e4/1e3),r=Math.floor(e%1e3/10);return`${n}:${s.toString().padStart(2,"0")}.${r.toString().padStart(2,"0")}`}update(t){this.el.place.innerHTML=`${t.place}<small>/${t.total}</small>`,this.el.lap.textContent=`LAP ${t.lap}/${t.laps}`,t.finalLap&&(this.el.lap.style.color="var(--gold)"),this.el.time.textContent=this.fmt(t.timeMs),this.el.best.textContent="BEST "+this.fmt(t.bestLapMs??NaN),this.el.speed.textContent=String(t.speed);const e=this.el.power;t.power?(e.textContent=Hl[t.power].icon,t.power!==this.lastPower&&(e.classList.remove("pulse"),e.offsetWidth,e.classList.add("pulse"))):e.textContent="",this.lastPower=t.power;const n=this.el.drift;n.style.width=`${Math.round(t.boostBar*100)}%`;const s=["#66aaff","#b060ff","#ffd23f","#ff5db1"];n.style.background=t.driftTier>=0?s[t.driftTier]:"linear-gradient(90deg,var(--cyan),var(--magenta))",t.countdown?(this.el.cd.classList.remove("hidden"),this.el.cd.textContent=t.countdown,this.el.cd.classList.toggle("go",t.countdown==="GO!")):this.el.cd.classList.add("hidden"),t.message?(this.el.flash.classList.remove("hidden"),this.el.flash.textContent!==t.message&&(this.el.flash.textContent=t.message,this.el.flash.style.animation="none",this.el.flash.offsetWidth,this.el.flash.style.animation="")):this.el.flash.classList.add("hidden"),this.el.warn.classList.toggle("hidden",!t.wrongWay),this.el.ink.style.opacity=String(Math.min(1,t.ink/2)),this.drawMini(t)}drawMini(t){const e=this.mctx,n=this.mini.width,s=this.mini.height;if(e.clearRect(0,0,n,s),!(this.outline.length<2)){e.lineWidth=10,e.strokeStyle="rgba(10,14,30,0.7)",e.lineJoin="round",e.beginPath(),this.outline.forEach((r,a)=>{const o=this.mapPt(r.x,r.z,n,s);a?e.lineTo(o.x,o.y):e.moveTo(o.x,o.y)}),e.closePath(),e.stroke(),e.lineWidth=5,e.strokeStyle="rgba(0,229,255,0.85)",e.stroke();for(const r of t.positions){const a=Math.floor(r.t*this.outline.length)%this.outline.length,o=this.outline[a];if(!o)continue;const c=this.mapPt(o.x,o.z,n,s);e.beginPath(),e.arc(c.x,c.y,r.isPlayer?9:6,0,Math.PI*2),e.fillStyle=r.isPlayer?"#fff":"#"+r.color.toString(16).padStart(6,"0"),e.fill(),r.isPlayer&&(e.lineWidth=3,e.strokeStyle="#00e5ff",e.stroke())}}}buildTouch(t,e,n){const s=document.createElement("div");s.className="touch"+(n?" on":""),s.innerHTML=`
      <button class="tc steer left" data-t="left">◄</button>
      <button class="tc steer rightsteer" data-t="right">►</button>
      <button class="tc accel" data-t="accel">GAS</button>
      <button class="tc brake" data-t="brake">BRK</button>
      <button class="tc drift" data-t="drift">DRIFT</button>
      <button class="tc power" data-t="power">ITEM</button>
      <button class="tc trick" data-t="trick">TRICK</button>
    `,t.appendChild(s),this.touchRoot=s;const r=(o,c)=>{const l=d=>{d.preventDefault(),o.classList.add("held"),e.setTouch(c,!0)},h=d=>{d.preventDefault(),o.classList.remove("held"),e.setTouch(c,!1)};o.addEventListener("touchstart",l,{passive:!1}),o.addEventListener("touchend",h),o.addEventListener("touchcancel",h),o.addEventListener("mousedown",l),o.addEventListener("mouseup",h),o.addEventListener("mouseleave",h)},a=(o,c)=>{const l=h=>{h.preventDefault(),e.fireTouch(c)};o.addEventListener("touchstart",l,{passive:!1}),o.addEventListener("mousedown",l)};s.querySelectorAll("[data-t]").forEach(o=>{const c=o.dataset.t;c==="power"||c==="trick"?a(o,c):r(o,c)})}setTouchVisible(t){this.touchRoot?.classList.toggle("on",t)}dispose(){this.root.remove(),this.touchRoot?.remove()}}class $g{constructor(){k(this,"keys",new Set);k(this,"touch",{accel:!1,brake:!1,left:!1,right:!1,drift:!1,rear:!1});k(this,"edges",{power:!1,trick:!1,camera:!1,reset:!1,pause:!1});k(this,"autoAccel",!1);k(this,"tilt",{enabled:!1,x:0});k(this,"onKey");k(this,"onKeyUp");k(this,"onTilt");k(this,"_analogSteer",null);k(this,"padPrev",new Set);this.onKey=t=>{const e=t.key.toLowerCase();[" ","arrowup","arrowdown","arrowleft","arrowright"].includes(e)&&t.preventDefault(),this.keys.has(e)||(e==="shift"&&(this.edges.power=!0),e==="e"&&(this.edges.trick=!0),e==="c"&&(this.edges.camera=!0),e==="r"&&(this.edges.reset=!0),(e==="escape"||e==="p")&&(this.edges.pause=!0)),this.keys.add(e)},this.onKeyUp=t=>this.keys.delete(t.key.toLowerCase()),this.onTilt=t=>{this.tilt.enabled&&t.gamma!=null&&(this.tilt.x=Math.max(-1,Math.min(1,t.gamma/30)))},window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("deviceorientation",this.onTilt)}dispose(){window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("deviceorientation",this.onTilt)}setTouch(t,e){this.touch[t]=e}fireTouch(t){this.edges[t]=!0}setSteerAnalog(t){this.touch.left=t<-.05,this.touch.right=t>.05,this._analogSteer=t}pollPad(){const t=navigator.getGamepads?.()??[],e=Array.from(t).find(h=>h);if(!e)return{};const n=[],s=Math.abs(e.axes[0]??0)>.12?e.axes[0]:0,r=e.buttons[7]?.value??0,a=e.buttons[6]?.value??0,o=r>.05?r:a>.05?-a:0,c=(e.buttons[5]?.pressed||e.buttons[4]?.pressed)??!1,l=e.buttons[3]?.pressed??!1;return e.buttons[0]?.pressed&&n.push("power"),(e.buttons[1]?.pressed||e.buttons[2]?.pressed)&&n.push("trick"),e.buttons[9]?.pressed&&n.push("pause"),{throttle:o,steer:s,drift:c,rear:l,edges:n}}sample(){const t=this.keys;let e=0,n=0;(t.has("w")||t.has("arrowup")||this.touch.accel)&&(e+=1),(t.has("s")||t.has("arrowdown")||this.touch.brake)&&(e-=1),this.autoAccel&&e===0&&(e=1),(t.has("a")||t.has("arrowleft")||this.touch.left)&&(n-=1),(t.has("d")||t.has("arrowright")||this.touch.right)&&(n+=1),this._analogSteer!=null&&(n=this._analogSteer),this.tilt.enabled&&(n=this.tilt.x);let s=t.has(" ")||this.touch.drift,r=t.has("b")||this.touch.rear;const a=this.pollPad();if(a.throttle&&(e=a.throttle),a.steer&&(n=a.steer),a.drift&&(s=!0),a.rear&&(r=!0),a.edges){for(const c of a.edges)this.padPrev.has(c)||(this.edges[c]=!0);this.padPrev=new Set(a.edges)}const o={throttle:Math.max(-1,Math.min(1,e)),steer:Math.max(-1,Math.min(1,n)),drift:s,rear:r,power:this.edges.power,trick:this.edges.trick,camera:this.edges.camera,reset:this.edges.reset,pause:this.edges.pause};return this.edges={power:!1,trick:!1,camera:!1,reset:!1,pause:!1},o}}const or=document.getElementById("app"),mt=Tg(),En=new $g;En.autoAccel=mt.settings.autoAccel;const Gc="ontouchstart"in window||navigator.maxTouchPoints>0,Yg=[15,12,10,8,6,4,2,1];window.addEventListener("pointerdown",()=>xo(),{once:!0});function re(i){const t=document.createElement("div");return t.innerHTML=i.trim(),t.firstElementChild}function De(i){or.innerHTML="",or.appendChild(i)}function qe(){return`<div class="grid-bg"></div>
    <div class="glowblob" style="width:360px;height:360px;background:#ff2fb0;left:-80px;top:-60px"></div>
    <div class="glowblob" style="width:420px;height:420px;background:#00e5ff;right:-120px;bottom:-80px"></div>`}function $l(i){return[["Speed",i.speed],["Accel",i.accel],["Handling",i.handling],["Weight",i.weight],["Drift",i.drift],["Boost",i.boost]].map(([e,n])=>`<div class="statbar"><span>${e}</span><div class="track"><div class="fill" style="width:${n*10}%"></div></div></div>`).join("")}function Js(i){if(!isFinite(i))return"--";const t=Math.floor(i/6e4),e=Math.floor(i%6e4/1e3),n=Math.floor(i%1e3/10);return`${t}:${e.toString().padStart(2,"0")}.${n.toString().padStart(2,"0")}`}function Kg(i){const t=re(`<div class="toast"><span style="font-size:1.4rem">🏆</span><span>${i}</span></div>`);or.appendChild(t),Lt.ui(),setTimeout(()=>t.remove(),2600)}function jg(i){const t=re(`<div class="screen center"><canvas style="position:absolute;inset:0;width:100%;height:100%"></canvas>
    <div class="intro-line" data-line></div>
    <button class="btn secondary skip" data-skip>Skip ▶</button></div>`);De(t);const e=t.querySelector("canvas"),n=e.getContext("2d"),s=t.querySelector("[data-line]");let r=0,a=0;const o=()=>{r=e.width=innerWidth,a=e.height=innerHeight};o(),window.addEventListener("resize",o);const c=["A mysterious energy — the TURBO STAR — races through the cosmos…","It shatters, scattering fragments across the animal worlds…","The greatest racers gather for the AMAL TURBO CHAMPIONSHIP.","But a masked racer watches from the shadows… SHADOW LYNX."],l=[];let h=0,d=0,u=!1;const m=()=>{u||(u=!0,cancelAnimationFrame(d),window.removeEventListener("resize",o),mt.seenIntro=!0,Qe(),i())};t.querySelector("[data-skip]").addEventListener("click",m);const v=()=>{d=requestAnimationFrame(v),h+=1/60,n.fillStyle="#04030c",n.fillRect(0,0,r,a),n.fillStyle="rgba(255,255,255,0.6)";for(let M=0;M<60;M++){const y=M*97%r,b=M*53%a;n.fillRect(y,(b+h*40*(1+M%3))%a,2,2)}const _=r/2,f=a/2;if(h<3){const M=20+h*30,y=n.createRadialGradient(_,f,0,_,f,M*2);y.addColorStop(0,"#fff"),y.addColorStop(.4,"#ffd23f"),y.addColorStop(1,"rgba(255,47,176,0)"),n.fillStyle=y,n.beginPath(),n.arc(_,f,M*2,0,Math.PI*2),n.fill(),Wc(n,_,f,M,"#fff")}else{if(l.length===0)for(let M=0;M<60;M++){const y=Math.random()*Math.PI*2,b=2+Math.random()*6;l.push({x:_,y:f,vx:Math.cos(y)*b,vy:Math.sin(y)*b,c:["#ff2fb0","#00e5ff","#ffd23f","#7b2ff7","#3fe08a"][M%5]})}for(const M of l)M.x+=M.vx,M.y+=M.vy,M.vy+=.02,Wc(n,M.x,M.y,8,M.c)}const p=Math.min(c.length-1,Math.floor(h/2.2));s.textContent=c[p],h>c.length*2.2+.5&&m()};v()}function Wc(i,t,e,n,s){i.save(),i.translate(t,e),i.fillStyle=s,i.beginPath();for(let r=0;r<10;r++){const a=r%2?n*.45:n,o=r/10*Math.PI*2-Math.PI/2;i[r?"lineTo":"moveTo"](Math.cos(o)*a,Math.sin(o)*a)}i.closePath(),i.fill(),i.restore()}function cr(){Ja();const i=re(`<div class="screen center">${qe()}
    <div class="wrap center" style="gap:0">
      <div class="logo">
        <div class="amal">AMAL</div><div class="turbo">TURBO</div>
        <div class="tagline">Animal Kart Championship</div>
      </div>
      <div class="title-actions">
        <button class="btn big gold" data-play>🏁 Press to Race</button>
        <div class="row">
          <button class="btn secondary" data-how>How to Play</button>
          <button class="btn secondary" data-set>Settings</button>
        </div>
      </div>
    </div></div>`);De(i),i.querySelector("[data-play]").addEventListener("click",()=>{xo(),Lt.ui(),Se()}),i.querySelector("[data-how]").addEventListener("click",()=>Zl(cr)),i.querySelector("[data-set]").addEventListener("click",()=>So(cr))}function Se(){const i=qi(mt.selectedRacer),t=[["🏆","Championship","Race cups across the worlds",a0],["🏁","Quick Race","Jump straight into a race",Zg],["⏱️","Time Trial","Beat the clock & your ghost",e0],["💥","Elimination","Last place is knocked out",n0],["🦁","Racers","Pick & inspect your racer",()=>Jg(Se)],["🔧","Garage","Customise your kart",()=>Yl(Se)],["📖","Collection","Racer & world encyclopedia",l0],["⚙️","Settings","Graphics, audio, controls",()=>So(Se)],["❓","How to Play","Controls & tips",()=>Zl(Se)]],e=re(`<div class="screen">${qe()}
    <div class="wrap">
      <div class="topbar">
        <div class="logo" style="text-align:left"><div class="amal" style="font-size:2rem">AMAL <span style="color:var(--gold)">TURBO</span></div></div>
        <div class="spacer"></div>
        <div class="chip">🪙 <span class="k">${mt.coins}</span></div>
        <div class="chip">⭐ Lv ${1+Math.floor(mt.xp/500)}</div>
        <div class="chip">${i.emoji} ${i.name}</div>
      </div>
      <div class="pad scroll" style="flex:1">
        <div class="menu-grid" data-grid></div>
      </div>
    </div></div>`);De(e);const n=e.querySelector("[data-grid]");for(const[s,r,a,o,c]of t){const l=re(`<button class="tile ${c?"locked":""}"><div class="big-emoji">${s}</div><div class="t-name">${r}</div><div class="t-desc">${a}</div></button>`);c||l.addEventListener("click",()=>{Lt.ui(),o()}),n.appendChild(l)}}function Jg(i,t){let e=mt.selectedRacer;const n=re(`<div class="screen">${qe()}<div class="wrap">
    <div class="topbar"><button class="icon-btn" data-back>◄</button><h2>Choose Racer</h2></div>
    <div class="pad scroll" style="flex:1">
      <div class="grid2">
        <div class="card-row" data-list></div>
        <div class="panel detail" data-detail></div>
      </div>
    </div></div></div>`);De(n),n.querySelector("[data-back]").addEventListener("click",()=>{Lt.ui(),i()});const s=n.querySelector("[data-list]"),r=n.querySelector("[data-detail]"),a=()=>{s.innerHTML="";for(const c of oi){const l=mt.unlockedRacers.includes(c.id),h=re(`<button class="rcard ${e===c.id?"sel":""} ${l?"":"locked"}">
        <div class="face">${l?c.emoji:"🔒"}</div><div class="rn">${l?c.name:"???"}</div><div class="ra">${l?c.animal:"Locked"}</div></button>`);l&&h.addEventListener("click",()=>{e=c.id,Lt.ui(),a()}),s.appendChild(h)}const o=qi(e);r.innerHTML=`<div class="row"><span style="font-size:3rem">${o.emoji}</span><div><div class="dname">${o.name}</div><div class="muted">${o.animal} • ${o.style}</div></div></div>
      <div class="passive">✦ ${o.passiveText}</div>
      <p class="muted small">${o.bio}</p>
      <hr class="hr">${$l(o)}
      <button class="btn block gold" data-choose>Select ${o.name}</button>`,r.querySelector("[data-choose]").addEventListener("click",()=>{mt.selectedRacer=e,Qe(),Lt.ui(),i()})};a()}function Yl(i){const t=re(`<div class="screen">${qe()}<div class="wrap">
    <div class="topbar"><button class="icon-btn" data-back>◄</button><h2>Garage</h2><div class="spacer"></div><button class="btn secondary" data-rand>🎲 Random</button></div>
    <div class="garage-stage"><div id="garage-canvas"></div></div>
    <div class="pad panel scroll" style="max-height:44%">
      <div class="field"><label>Vehicle</label><div class="seg" data-veh></div></div>
      <div class="grid2">
        <div class="field"><label>Paint</label><div class="row" data-paint></div></div>
        <div class="field"><label>Boost Trail</label><div class="row" data-trail></div></div>
      </div>
      <div class="field"><label>Wheels</label><div class="seg" data-wheels></div></div>
      <div class="row spread"><button class="btn secondary" data-save>💾 Save Preset</button><button class="btn gold" data-done>Done</button></div>
    </div></div></div>`);De(t);const e={...mt.kit},n=qi(mt.selectedRacer),s=t.querySelector("#garage-canvas"),r=new Tl;r.add(new Fl(8952319,2232627,1.1));const a=new Ol(16777215,1.1);a.position.set(5,8,6),r.add(a);const o=new ze(45,1,.1,100);o.position.set(4,3,5);const c=new wl({antialias:!0,alpha:!0});c.setPixelRatio(Math.min(2,devicePixelRatio)),s.appendChild(c.domElement);let l=null;const h=()=>{l&&r.remove(l),l=Gl(n,zl(e.vehicleId),e).group,r.add(l)};h();const d=()=>{const w=s.clientWidth,C=s.clientHeight;c.setSize(w,C),o.aspect=w/C,o.updateProjectionMatrix()};let u=!0,m=0;const v=()=>{u&&(requestAnimationFrame(v),m+=.008,l&&(l.rotation.y=m),o.lookAt(0,.7,0),c.render(r,o))};setTimeout(d,0),window.addEventListener("resize",d),v();let _=0,f=!1;c.domElement.addEventListener("pointerdown",w=>{f=!0,_=w.clientX}),window.addEventListener("pointermove",w=>{f&&l&&(m+=(w.clientX-_)*.01,_=w.clientX)}),window.addEventListener("pointerup",()=>f=!1);const p=()=>{u=!1,window.removeEventListener("resize",d),c.dispose()},M=t.querySelector("[data-veh]");for(const w of Gi){if(w.locked&&!mt.unlockedVehicles.includes(w.id))continue;const C=re(`<button class="${e.vehicleId===w.id?"on":""}">${w.name}</button>`);C.addEventListener("click",()=>{e.vehicleId=w.id,Lt.ui(),h(),M.querySelectorAll("button").forEach(V=>V.classList.remove("on")),C.classList.add("on")}),M.appendChild(C)}const y=t.querySelector("[data-paint]");ia.forEach((w,C)=>{const V=w.color<0?n.color:w.color,g=re(`<button class="swatch ${e.paint<0&&w.color<0||e.paint===w.color?"on":""}" style="background:#${V.toString(16).padStart(6,"0")}" title="${w.name}"></button>`);g.addEventListener("click",()=>{e.paint=w.color,Lt.ui(),h(),y.querySelectorAll(".swatch").forEach(S=>S.classList.remove("on")),g.classList.add("on")}),y.appendChild(g)});const b=t.querySelector("[data-trail]");Dc.forEach((w,C)=>{const V=w.color<0?16777215:w.color,g=re(`<button class="swatch ${e.trail===C?"on":""}" style="background:${w.color<0?"linear-gradient(120deg,#ff2fb0,#00e5ff,#ffd23f)":"#"+V.toString(16).padStart(6,"0")}" title="${w.name}"></button>`);g.addEventListener("click",()=>{e.trail=C,Lt.ui(),b.querySelectorAll(".swatch").forEach(S=>S.classList.remove("on")),g.classList.add("on")}),b.appendChild(g)});const L=t.querySelector("[data-wheels]");["Street","Sport","Off-road","Neon"].forEach((w,C)=>{const V=re(`<button class="${e.wheels===C?"on":""}">${w}</button>`);V.addEventListener("click",()=>{e.wheels=C,Lt.ui(),h(),L.querySelectorAll("button").forEach(g=>g.classList.remove("on")),V.classList.add("on")}),L.appendChild(V)}),t.querySelector("[data-rand]").addEventListener("click",()=>{const w=Gi.filter(C=>!C.locked||mt.unlockedVehicles.includes(C.id));e.vehicleId=w[Math.floor(Math.random()*w.length)].id,e.paint=ia[Math.floor(Math.random()*ia.length)].color,e.trail=Math.floor(Math.random()*Dc.length),e.wheels=Math.floor(Math.random()*4),Lt.ui(),Yl(i)}),t.querySelector("[data-save]").addEventListener("click",()=>{mt.presets.push({...e}),Qe(),Kg("Preset saved!")});const A=()=>{mt.kit={...e},Qe(),p(),Lt.ui(),i()};t.querySelector("[data-back]").addEventListener("click",A),t.querySelector("[data-done]").addEventListener("click",A)}function yo(i,t,e,n){const s=re(`<div class="screen">${qe()}<div class="wrap">
    <div class="topbar"><button class="icon-btn" data-back>◄</button><h2>${i}</h2></div>
    <div class="pad scroll" style="flex:1">${n??""}<div class="menu-grid" data-grid></div></div></div></div>`);De(s),s.querySelector("[data-back]").addEventListener("click",()=>{Lt.ui(),e()});const r=s.querySelector("[data-grid]");for(const a of ja){const o=Vl[a.world],c=re(`<button class="tile"><div class="corner">${o.name}</div><div class="big-emoji">🏁</div><div class="t-name">${a.name}</div><div class="t-desc">${a.desc}</div>
      <div class="small muted">${mt.bestLaps[a.id]?"Best lap "+Js(mt.bestLaps[a.id]):""} ${"⭐".repeat(mt.medals[a.id]??0)}</div></button>`);c.style.background=`linear-gradient(135deg, #${o.skyBottom.toString(16).padStart(6,"0")}aa, var(--panel))`,c.addEventListener("click",()=>{Lt.ui(),t(a.id)}),r.appendChild(c)}return s}let pe={laps:3,difficulty:"normal",ai:7,items:!0,mirror:!1};function Zg(){const i=yo("Quick Race",t=>$i({trackId:t,mode:"quick",laps:pe.laps,aiCount:pe.ai,difficulty:pe.difficulty,mirror:pe.mirror,items:pe.items,playerRacerId:mt.selectedRacer,playerVehicleId:mt.kit.vehicleId,kit:mt.kit,settings:mt.settings,container:null,input:En},Se,{kind:"quick"}),Se,Qg());t0(i)}function Qg(){return`<div class="panel pad" style="margin-bottom:14px">
    <div class="row" style="gap:20px;flex-wrap:wrap">
      <div class="field" style="margin:0"><label>Laps</label><div class="seg" data-laps>${[2,3,5].map(i=>`<button data-l="${i}" class="${pe.laps===i?"on":""}">${i}</button>`).join("")}</div></div>
      <div class="field" style="margin:0"><label>Difficulty</label><div class="seg" data-diff>${["rookie","normal","pro","master"].map(i=>`<button data-d="${i}" class="${pe.difficulty===i?"on":""}">${i}</button>`).join("")}</div></div>
      <div class="field" style="margin:0"><label>Racers</label><div class="seg" data-ai>${[3,5,7].map(i=>`<button data-a="${i}" class="${pe.ai===i?"on":""}">${i+1}</button>`).join("")}</div></div>
      <div class="field" style="margin:0"><label>Items</label><div class="seg" data-items><button data-i="1" class="${pe.items?"on":""}">On</button><button data-i="0" class="${pe.items?"":"on"}">Off</button></div></div>
      <div class="field" style="margin:0"><label>Mirror</label><div class="seg" data-mir><button data-m="0" class="${pe.mirror?"":"on"}">Off</button><button data-m="1" class="${pe.mirror?"on":""}">On</button></div></div>
    </div><p class="small muted">Pick a track below to start.</p></div>`}function t0(i){const t=(e,n)=>i.querySelectorAll(`${e} button`).forEach(s=>s.addEventListener("click",()=>{i.querySelectorAll(`${e} button`).forEach(r=>r.classList.remove("on")),s.classList.add("on"),Lt.ui(),n(s.dataset[Object.keys(s.dataset)[0]])}));t("[data-laps]",e=>pe.laps=+e),t("[data-diff]",e=>pe.difficulty=e),t("[data-ai]",e=>pe.ai=+e),t("[data-items]",e=>pe.items=e==="1"),t("[data-mir]",e=>pe.mirror=e==="1")}function e0(){yo("Time Trial",i=>$i({trackId:i,mode:"time",laps:3,aiCount:0,difficulty:"normal",mirror:!1,items:!1,playerRacerId:mt.selectedRacer,playerVehicleId:mt.kit.vehicleId,kit:mt.kit,settings:mt.settings,container:null,input:En},Se,{kind:"time"}),Se)}function n0(){yo("Elimination",i=>$i({trackId:i,mode:"elim",laps:5,aiCount:7,difficulty:pe.difficulty,mirror:!1,items:!0,playerRacerId:mt.selectedRacer,playerVehicleId:mt.kit.vehicleId,kit:mt.kit,settings:mt.settings,container:null,input:En},Se,{kind:"elim"}),Se)}let on=null,Za=null,si=null;function $i(i,t,e){si=re('<div class="screen" style="background:#000"></div>'),De(si);const n={...i,container:si};e.field&&(n.fieldRacerIds=e.field);const s=new qg(si,En,Gc||mt.settings.controlMode!=="buttons");Za=s,En.autoAccel=mt.settings.autoAccel,En.tilt.enabled=Gc&&mt.settings.controlMode==="tilt";const r=new Gg(n,a=>s.update(a),a=>s0(a,t,e));on=r,window.__race=r,s.setTrackOutline(r.track.curve.pos.map(a=>({x:a.x,z:a.z}))),s.onPause=()=>Kl(t,e),r.start()}function bn(){on?.dispose(),on=null,Za?.dispose(),Za=null,si=null}function Kl(i,t){if(!on)return;on.setPaused(!0);const e=re(`<div class="screen center" style="position:absolute;background:rgba(4,6,20,0.8);z-index:30">
    <div class="panel pad center" style="display:flex;flex-direction:column;gap:12px;min-width:280px">
      <h2 class="center-text">Paused</h2>
      <button class="btn block" data-resume>▶ Resume</button>
      <button class="btn block secondary" data-restart>🔄 Restart</button>
      <button class="btn block secondary" data-set>⚙️ Settings</button>
      <button class="btn block ghost" data-quit>🏠 Quit to Menu</button>
    </div></div>`);si.appendChild(e),e.querySelector("[data-resume]").addEventListener("click",()=>{e.remove(),on.setPaused(!1)}),e.querySelector("[data-restart]").addEventListener("click",()=>{const n=on.opts;bn(),$i(n,i,t)}),e.querySelector("[data-set]").addEventListener("click",()=>So(()=>{i0(i,t)},!0)),e.querySelector("[data-quit]").addEventListener("click",()=>{bn(),i()})}function i0(i,t){De(si),Kl(i,t)}function s0(i,t,e){mt.coins+=i.coins,mt.xp+=i.xp;const n=on.opts.trackId;if(i.playerMs&&(!mt.bestTimes[n]||i.playerMs<mt.bestTimes[n])&&(mt.bestTimes[n]=i.playerMs),i.bestLapMs&&(!mt.bestLaps[n]||i.bestLapMs<mt.bestLaps[n])&&(mt.bestLaps[n]=i.bestLapMs),e.kind==="time"){const s=gr(n),r=on.track.curve.totalLength/62*1e3*s.laps,a=i.playerMs<=r?3:i.playerMs<=r*1.12?2:i.playerMs<=r*1.3?1:0;mt.medals[n]=Math.max(mt.medals[n]??0,a)}if(Qe(),e.kind==="champ"){o0(i,e);return}r0(i,t,e)}function r0(i,t,e,n=""){const s=i.order.map(c=>`<div class="result-row ${c.isPlayer?"you":""}">
    <div class="pl">${c.place}</div><div><span style="font-size:1.3rem">${c.racer.emoji}</span> ${c.racer.name}</div>
    <div class="rt">${Js(c.ms)}</div></div>`).join(""),r=i.playerPlace===1,a=re(`<div class="screen">${qe()}<div class="wrap scroll pad">
    ${n}
    <h2 class="center-text">${r?"🏆 You Won!":`Finished ${Mo(i.playerPlace)}`}</h2>
    <div class="grid2" style="margin-top:12px">
      <div class="panel pad"><div class="result-list">${s}</div></div>
      <div class="panel pad">
        <h3>Race Stats</h3>
        <div class="row spread"><span class="muted">Your time</span><b>${Js(i.playerMs)}</b></div>
        <div class="row spread"><span class="muted">Best lap</span><b>${Js(i.bestLapMs)}</b></div>
        <div class="row spread"><span class="muted">Drift time</span><b>${i.driftSeconds.toFixed(1)}s</b></div>
        <div class="row spread"><span class="muted">Clean race</span><b>${i.clean?"Yes ✨":"No"}</b></div>
        <hr class="hr">
        <div class="row spread"><span>🪙 Coins</span><b class="k">+${i.coins}</b></div>
        <div class="row spread"><span>⭐ XP</span><b>+${i.xp}</b></div>
        <div class="row" style="margin-top:14px">
          <button class="btn" data-retry>🔄 Retry</button>
          <button class="btn gold" data-cont>Continue ▶</button>
        </div>
        <button class="btn block ghost" data-home style="margin-top:8px">🏠 Menu</button>
      </div>
    </div></div></div>`);De(a);const o=on.opts;a.querySelector("[data-retry]").addEventListener("click",()=>{bn(),$i(o,t,e)}),a.querySelector("[data-cont]").addEventListener("click",()=>{bn(),t()}),a.querySelector("[data-home]").addEventListener("click",()=>{bn(),Se()})}function Mo(i){return i+(["th","st","nd","rd"][i%100-i%10==10?0:i%10]||"th")}function a0(){const i=re(`<div class="screen">${qe()}<div class="wrap">
    <div class="topbar"><button class="icon-btn" data-back>◄</button><h2>Championship</h2></div>
    <div class="pad scroll" style="flex:1"><div class="menu-grid" data-grid></div></div></div></div>`);De(i),i.querySelector("[data-back]").addEventListener("click",()=>{Lt.ui(),Se()});const t=i.querySelector("[data-grid]");ar.forEach((e,n)=>{const s=mt.championshipsWon.includes(e.id),r=n>0&&!mt.championshipsWon.includes(ar[n-1].id),a=re(`<button class="tile ${r?"locked":""}"><div class="corner">${s?"✅ Won":""}</div>
      <div class="big-emoji">${e.emoji}</div><div class="t-name">${e.name}</div>
      <div class="t-desc">${e.tracks.map(o=>gr(o).name).join(" • ")}</div></button>`);r||a.addEventListener("click",()=>{Lt.ui(),jl(e.id)}),t.appendChild(a)})}function jl(i){cs(i);const t=oi.filter(n=>!n.locked&&n.id!==mt.selectedRacer).slice(0,7).map(n=>n.id),e={};[mt.selectedRacer,...t].forEach(n=>e[n]=0),Jl(i,0,e,t)}function Jl(i,t,e,n){const r=cs(i).tracks[t];$i({trackId:r,mode:"quick",laps:3,aiCount:n.length,difficulty:pe.difficulty,mirror:i==="shadow"&&t===3,items:!0,playerRacerId:mt.selectedRacer,playerVehicleId:mt.kit.vehicleId,kit:mt.kit,settings:mt.settings,container:null,input:En},Se,{kind:"champ",cupId:i,raceIndex:t,standings:e,field:n})}function o0(i,t){const e=cs(t.cupId),n=t.standings;i.order.forEach(a=>{n[a.racer.id]=(n[a.racer.id]??0)+(Yg[a.place-1]??0)});const s=t.raceIndex+1,r=Object.entries(n).sort((a,o)=>o[1]-a[1]).map(([a,o],c)=>{const l=qi(a);return`<div class="result-row ${a===mt.selectedRacer?"you":""}"><div class="pl">${c+1}</div><div>${l.emoji} ${l.name}</div><div class="rt">${o} pts</div></div>`}).join("");if(s<e.tracks.length){const a=re(`<div class="screen">${qe()}<div class="wrap scroll pad">
      <h2 class="center-text">${e.emoji} ${e.name} — Race ${t.raceIndex+1}/${e.tracks.length} done</h2>
      <div class="grid2" style="margin-top:12px">
        <div class="panel pad"><h3>Standings</h3><div class="result-list">${r}</div></div>
        <div class="panel pad center" style="display:flex;flex-direction:column;gap:10px;justify-content:center">
          <div class="center-text muted">You finished ${Mo(i.playerPlace)}</div>
          <div class="center-text">Next: <b>${gr(e.tracks[s]).name}</b></div>
          <button class="btn gold block" data-next>Next Race ▶</button>
          <button class="btn ghost block" data-quit>Quit Championship</button>
        </div>
      </div></div></div>`);De(a),a.querySelector("[data-next]").addEventListener("click",()=>{bn(),Jl(t.cupId,s,n,t.field)}),a.querySelector("[data-quit]").addEventListener("click",()=>{bn(),Se()})}else c0(e.id,n)}function c0(i,t,e){const n=Object.entries(t).sort((h,d)=>d[1]-h[1]),s=n.findIndex(([h])=>h===mt.selectedRacer)+1,r=s===1;r&&!mt.championshipsWon.includes(i)&&(mt.championshipsWon.push(i),i==="shadow"&&!mt.unlockedRacers.includes("shadow")&&(mt.unlockedRacers.push("shadow"),mt.unlockedVehicles.push("shadow")),mt.coins+=300,Qe());const a=n.slice(0,3),o=[1,0,2].map(h=>{const d=a[h];if(!d)return"";const u=qi(d[0]);return`<div class="pod ${h===0?"p1":h===1?"p2":"p3"}"><div class="face">${u.emoji}</div><b>${h+1}</b><div class="small">${d[1]}</div></div>`}).join(""),c=i==="shadow"&&r,l=re(`<div class="screen">${qe()}<div class="wrap scroll pad center">
    <div class="story">
      <h2>${r?`🏆 ${cs(i).name} Champion!`:`${cs(i).name} — ${Mo(s)} overall`}</h2>
      <div class="podium">${o}</div>
      ${c?'<div class="panel pad"><div class="big-emoji">🐈‍⬛</div><p><b>Shadow Lynx unmasked!</b> The phantom racer joins your roster, along with the Void Runner kart.</p></div>':r?'<p class="muted">Turbo Star fragments collected. A new cup awaits…</p>':'<p class="muted">So close! Try again to top the standings.</p>'}
      <div class="row center" style="justify-content:center">
        ${r?"":'<button class="btn secondary" data-retry>🔄 Retry Cup</button>'}
        <button class="btn gold" data-home>🏠 Menu</button>
      </div>
    </div></div></div>`);De(l),Lt.win(),l.querySelector("[data-home]").addEventListener("click",()=>{bn(),Se()}),l.querySelector("[data-retry]")?.addEventListener("click",()=>{bn(),jl(i)})}function l0(){const i=re(`<div class="screen">${qe()}<div class="wrap">
    <div class="topbar"><button class="icon-btn" data-back>◄</button><h2>Collection</h2></div>
    <div class="pad scroll" style="flex:1"><div class="card-row" data-list></div><div class="panel detail" data-d style="margin-top:14px"></div></div></div></div>`);De(i),i.querySelector("[data-back]").addEventListener("click",()=>{Lt.ui(),Se()});const t=i.querySelector("[data-list]"),e=i.querySelector("[data-d]"),n=s=>{const r=mt.unlockedRacers.includes(s.id);e.innerHTML=r?`<div class="row"><span style="font-size:3rem">${s.emoji}</span><div><div class="dname">${s.name}</div><div class="muted">${s.animal}</div></div></div>
      <div class="passive">✦ ${s.passiveText}</div><p>${s.bio}</p>
      <div class="row" style="gap:20px"><span class="muted">Home: <b>${h0(s)}</b></span><span class="muted">Food: <b>${s.food}</b></span><span class="muted">Style: <b>${s.style}</b></span></div>
      <div class="row" style="gap:16px"><span class="muted">Vehicle: <b>${s.vehicle}</b></span></div>
      <hr class="hr">${$l(s)}`:`<p class="muted center-text">🔒 Unlock ${s.name} by completing the championship.</p>`};for(const s of oi){const r=mt.unlockedRacers.includes(s.id),a=re(`<button class="rcard ${r?"":"locked"}"><div class="face">${r?s.emoji:"🔒"}</div><div class="rn">${r?s.name:"???"}</div></button>`);a.addEventListener("click",()=>{Lt.ui(),n(s)}),t.appendChild(a)}n(oi[0])}function h0(i){return{leo:"Safari",kiki:"Neon Future",finn:"Deep Ocean",zara:"Wild Jungle",bruno:"Wild Jungle",pip:"Frozen Kingdom",ruby:"Safari",dash:"Neon Future",luna:"Frozen Kingdom",rocky:"Deep Ocean",nova:"Candy Kingdom",shadow:"Shadow Fortress"}[i.id]??"Unknown"}function So(i,t=!1){const e=mt.settings,n=(o,c,l)=>`<div class="field"><label>${o}</label><div class="seg" data-key="${c}">${l.map(([h,d])=>`<button data-v="${d}" class="${String(e[c])===String(d)?"on":""}">${h}</button>`).join("")}</div></div>`,s=re(`<div class="screen">${qe()}<div class="wrap">
    <div class="topbar"><button class="icon-btn" data-back>◄</button><h2>Settings</h2></div>
    <div class="pad scroll" style="flex:1">
      <div class="grid2">
        <div class="panel pad">
          <h3>Graphics</h3>
          ${n("Quality","quality",[["Low","low"],["Medium","medium"],["High","high"],["Ultra","ultra"]])}
          ${n("Shadows","shadows",[["On",!0],["Off",!1]])}
          ${n("Particles","particles",[["On",!0],["Off",!1]])}
          ${n("Reflections","reflections",[["On",!0],["Off",!1]])}
          ${n("Screen shake","screenShake",[["On",!0],["Off",!1]])}
          ${n("Motion blur","motionBlur",[["On",!0],["Off",!1]])}
        </div>
        <div class="panel pad">
          <h3>Audio & Controls</h3>
          <div class="field"><label>Music <span data-mv>${Math.round(e.musicVol*100)}</span>%</label><input type="range" min="0" max="1" step="0.05" value="${e.musicVol}" data-music></div>
          <div class="field"><label>Sound FX <span data-sv>${Math.round(e.sfxVol*100)}</span>%</label><input type="range" min="0" max="1" step="0.05" value="${e.sfxVol}" data-sfx></div>
          ${n("Control mode","controlMode",[["Buttons","buttons"],["Wheel","wheel"],["Tilt","tilt"]])}
          <h3 style="margin-top:12px">Accessibility</h3>
          ${n("Steering assist","steerAssist",[["On",!0],["Off",!1]])}
          ${n("Auto-accelerate","autoAccel",[["On",!0],["Off",!1]])}
          ${n("Reduced flashing","reducedFlashing",[["On",!0],["Off",!1]])}
        </div>
      </div>
      ${t?"":'<div class="panel pad" style="margin-top:14px"><h3>Save</h3><div class="row"><button class="btn ghost" data-reset>🗑️ Reset all progress</button></div></div>'}
    </div></div></div>`);De(s),s.querySelector("[data-back]").addEventListener("click",()=>{Qe(),Lt.ui(),i()}),s.querySelectorAll(".seg[data-key]").forEach(o=>{const c=o.dataset.key;o.querySelectorAll("button").forEach(l=>l.addEventListener("click",()=>{o.querySelectorAll("button").forEach(d=>d.classList.remove("on")),l.classList.add("on");let h=l.dataset.v;h==="true"?h=!0:h==="false"&&(h=!1),e[c]=h,En.autoAccel=e.autoAccel,Lt.ui(),Qe()}))});const r=s.querySelector("[data-music]"),a=s.querySelector("[data-sfx]");r.addEventListener("input",()=>{e.musicVol=+r.value,s.querySelector("[data-mv]").textContent=String(Math.round(e.musicVol*100)),Uc(e.musicVol,e.sfxVol),Qe()}),a.addEventListener("input",()=>{e.sfxVol=+a.value,s.querySelector("[data-sv]").textContent=String(Math.round(e.sfxVol*100)),Uc(e.musicVol,e.sfxVol),Lt.ui(),Qe()}),s.querySelector("[data-reset]")?.addEventListener("click",()=>{confirm("Reset ALL progress, unlocks and settings?")&&(Ag(),location.reload())})}function Zl(i){const t=re(`<div class="screen">${qe()}<div class="wrap">
    <div class="topbar"><button class="icon-btn" data-back>◄</button><h2>How to Play</h2></div>
    <div class="pad scroll" style="flex:1"><div class="grid2">
      <div class="panel pad">
        <h3>🎯 The Goal</h3>
        <p class="muted">Race across imaginative animal worlds, collect Turbo Star fragments and win every cup to unmask the mysterious <b>Shadow Lynx</b>.</p>
        <h3 style="margin-top:12px">🏎️ Keyboard</h3>
        <p class="small">W / ↑ — Accelerate<br>S / ↓ — Brake & reverse<br>A · D / ← → — Steer<br>Space — Drift<br>Shift — Use item<br>E — Trick (in the air)<br>C — Camera · B — Rear view<br>R — Reset · Esc — Pause</p>
      </div>
      <div class="panel pad">
        <h3>💠 Drifting = Speed</h3>
        <p class="muted small">Hold <b>Drift</b> in a corner to slide. Sparks build up:</p>
        <p class="small">🔵 Blue → small boost<br>🟣 Purple → medium boost<br>🟡 Gold → strong boost<br>🌈 Rainbow → maximum boost</p>
        <p class="small muted">Release drift to fire the boost — but don't hold too long or you'll lose the top charge!</p>
        <h3 style="margin-top:12px">🎁 Items</h3>
        <p class="small muted">Grab Turbo Capsules for power-ups. Fall behind and you'll get stronger comeback items.</p>
        <div class="row" style="flex-wrap:wrap;gap:6px">${Object.values(Hl).map(n=>`<span class="chip">${n.icon} ${n.name}</span>`).join("")}</div>
      </div>
    </div>
    <div class="row center" style="justify-content:center;margin-top:16px"><button class="btn gold" data-ok>Got it!</button></div>
    </div></div></div>`);De(t);const e=()=>{Lt.ui(),i()};t.querySelector("[data-back]").addEventListener("click",e),t.querySelector("[data-ok]").addEventListener("click",e)}try{mt.seenIntro?cr():jg(cr)}catch(i){console.error(i),or.innerHTML=`<div class="screen center"><div class="panel pad center-text"><h2>Something went wrong</h2><p class="muted">${i.message}</p><button class="btn" onclick="location.reload()">Reload</button></div></div>`}
