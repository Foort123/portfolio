(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const _i="/portfolio/".endsWith("/")?"/portfolio/":"/portfolio//",bs=[{id:"biostone",index:"01",title:"BioStone",categoryLabel:"Сайт",categories:["sites"],link:`${_i}showcase/biostone/index.html`,image:`${_i}showcase/biostone/preview-card.jpg`,video:"",aspectRatio:1.6},{id:"vaier",index:"02",title:"Vaier",categoryLabel:"Сайт",categories:["sites"],link:`${_i}showcase/vaier/index.html`,image:`${_i}showcase/vaier/preview-card.jpg`,video:"",aspectRatio:1.6},{id:"billboard-1",index:"03",title:"Билборд",categoryLabel:"Билборд",categories:["billboards"],link:`${_i}showcase/portfolio/billboard-1-large.jpg`,image:`${_i}showcase/portfolio/billboard-1-card.jpg`,video:"",aspectRatio:1536/1024},{id:"billboard-2",index:"04",title:"Билборд",categoryLabel:"Билборд",categories:["billboards"],link:`${_i}showcase/portfolio/billboard-2-large.jpg`,image:`${_i}showcase/portfolio/billboard-2-card.jpg`,video:"",aspectRatio:1600/960},{id:"preview-1",index:"05",title:"YouTube Превью",categoryLabel:"Превью",categories:["graphics"],link:`${_i}showcase/portfolio/preview-1-large.jpg`,image:`${_i}showcase/portfolio/preview-1-card.jpg`,video:"",aspectRatio:1600/900}];/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="160",Hu=0,hh=1,Vu=2,nc=1,Gu=2,Di=3,sn=0,Be=1,Fi=2,Ki=0,bn=1,lh=2,ch=3,uh=4,Xu=5,yn=100,Wu=101,Yu=102,dh=103,fh=104,qu=200,ju=201,Ju=202,Zu=203,Qa=204,to=205,$u=206,Ku=207,Qu=208,td=209,ed=210,id=211,nd=212,sd=213,rd=214,ad=0,od=1,hd=2,Fr=3,ld=4,cd=5,ud=6,dd=7,sc=0,fd=1,pd=2,Qi=0,md=1,gd=2,_d=3,xd=4,vd=5,yd=6,rc=300,cs=301,us=302,eo=303,io=304,Jr=306,no=1e3,pi=1001,so=1002,Ue=1003,ph=1004,oa=1005,Fe=1006,Sd=1007,ds=1008,tn=1009,Md=1010,Td=1011,Ao=1012,ac=1013,qi=1014,ji=1015,Bs=1016,oc=1017,hc=1018,En=1020,bd=1021,mi=1023,Ed=1024,wd=1025,wn=1026,fs=1027,Ad=1028,lc=1029,Cd=1030,cc=1031,uc=1033,ha=33776,la=33777,ca=33778,ua=33779,mh=35840,gh=35841,_h=35842,xh=35843,dc=36196,vh=37492,yh=37496,Sh=37808,Mh=37809,Th=37810,bh=37811,Eh=37812,wh=37813,Ah=37814,Ch=37815,Rh=37816,Ph=37817,Lh=37818,Dh=37819,Ih=37820,Uh=37821,da=36492,Oh=36494,Fh=36495,Rd=36283,Nh=36284,kh=36285,Bh=36286,fc=3e3,An=3001,Pd=3200,Ld=3201,pc=0,Dd=1,ri="",se="srgb",ki="srgb-linear",Co="display-p3",Zr="display-p3-linear",Nr="linear",Qt="srgb",kr="rec709",Br="p3",Un=7680,zh=519,Id=512,Ud=513,Od=514,mc=515,Fd=516,Nd=517,kd=518,Bd=519,Hh=35044,Vh="300 es",ro=1035,Ni=2e3,zr=2001;class ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fa=Math.PI/180,ao=180/Math.PI;function Js(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(we[r&255]+we[r>>8&255]+we[r>>16&255]+we[r>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]).toLowerCase()}function Me(r,t,e){return Math.max(t,Math.min(e,r))}function zd(r,t){return(r%t+t)%t}function pa(r,t,e){return(1-e)*r+e*t}function Gh(r){return(r&r-1)===0&&r!==0}function oo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Es(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Oe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,i,n,s,a,o,h,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,h,l)}set(t,e,i,n,s,a,o,h,l){const c=this.elements;return c[0]=t,c[1]=n,c[2]=o,c[3]=e,c[4]=s,c[5]=h,c[6]=i,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],h=i[6],l=i[1],c=i[4],u=i[7],f=i[2],d=i[5],_=i[8],g=n[0],p=n[3],m=n[6],S=n[1],v=n[4],x=n[7],E=n[2],y=n[5],T=n[8];return s[0]=a*g+o*S+h*E,s[3]=a*p+o*v+h*y,s[6]=a*m+o*x+h*T,s[1]=l*g+c*S+u*E,s[4]=l*p+c*v+u*y,s[7]=l*m+c*x+u*T,s[2]=f*g+d*S+_*E,s[5]=f*p+d*v+_*y,s[8]=f*m+d*x+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8];return e*a*c-e*o*l-i*s*c+i*o*h+n*s*l-n*a*h}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8],u=c*a-o*l,f=o*h-c*s,d=l*s-a*h,_=e*u+i*f+n*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(n*l-c*i)*g,t[2]=(o*i-n*a)*g,t[3]=f*g,t[4]=(c*e-n*h)*g,t[5]=(n*s-o*e)*g,t[6]=d*g,t[7]=(i*h-l*e)*g,t[8]=(a*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const h=Math.cos(s),l=Math.sin(s);return this.set(i*h,i*l,-i*(h*a+l*o)+a+t,-n*l,n*h,-n*(-l*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new zt;function gc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function zs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hd(){const r=zs("canvas");return r.style.display="block",r}const Xh={};function Is(r){r in Xh||(Xh[r]=!0,console.warn(r))}const Wh=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yh=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ir={[ki]:{transfer:Nr,primaries:kr,toReference:r=>r,fromReference:r=>r},[se]:{transfer:Qt,primaries:kr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Zr]:{transfer:Nr,primaries:Br,toReference:r=>r.applyMatrix3(Yh),fromReference:r=>r.applyMatrix3(Wh)},[Co]:{transfer:Qt,primaries:Br,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Yh),fromReference:r=>r.applyMatrix3(Wh).convertLinearToSRGB()}},Vd=new Set([ki,Zr]),qt={enabled:!0,_workingColorSpace:ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Vd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const i=ir[t].toReference,n=ir[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ir[r].primaries},getTransfer:function(r){return r===ri?Nr:ir[r].transfer}};function rs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ga(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let On;class _c{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{On===void 0&&(On=zs("canvas")),On.width=t.width,On.height=t.height;const i=On.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=On}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=rs(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(rs(e[i]/255)*255):e[i]=rs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gd=0;class xc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Js(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(_a(n[a].image)):s.push(_a(n[a]))}else s=_a(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function _a(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_c.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xd=0;class Re extends ys{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,i=pi,n=pi,s=Fe,a=ds,o=mi,h=tn,l=Re.DEFAULT_ANISOTROPY,c=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Js(),this.name="",this.source=new xc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===An?se:ri),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case no:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case no:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===se?An:fc}set encoding(t){Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===An?se:ri}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=rc;Re.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,i=0,n=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const h=t.elements,l=h[0],c=h[4],u=h[8],f=h[1],d=h[5],_=h[9],g=h[2],p=h[6],m=h[10];if(Math.abs(c-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,x=(d+1)/2,E=(m+1)/2,y=(c+f)/4,T=(u+g)/4,R=(_+p)/4;return v>x&&v>E?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=y/i,s=T/i):x>E?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=y/n,s=R/n):E<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(E),i=T/s,n=R/s),this.set(i,n,s,e),this}let S=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(f-c)*(f-c));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(u-g)/S,this.z=(f-c)/S,this.w=Math.acos((l+d+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wd extends ys{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(Is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===An?se:ri),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Re(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Wd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class vc extends Re{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yd extends Re{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zs{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let h=i[n+0],l=i[n+1],c=i[n+2],u=i[n+3];const f=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||h!==f||l!==d||c!==_){let p=1-o;const m=h*f+l*d+c*_+u*g,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const E=Math.sqrt(v),y=Math.atan2(E,m*S);p=Math.sin(p*y)/E,o=Math.sin(o*y)/E}const x=o*S;if(h=h*p+f*x,l=l*p+d*x,c=c*p+_*x,u=u*p+g*x,p===1-o){const E=1/Math.sqrt(h*h+l*l+c*c+u*u);h*=E,l*=E,c*=E,u*=E}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){const o=i[n],h=i[n+1],l=i[n+2],c=i[n+3],u=s[a],f=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+c*u+h*d-l*f,t[e+1]=h*_+c*f+l*u-o*d,t[e+2]=l*_+c*d+o*f-h*u,t[e+3]=c*_-o*u-h*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,h=Math.sin,l=o(i/2),c=o(n/2),u=o(s/2),f=h(i/2),d=h(n/2),_=h(s/2);switch(a){case"XYZ":this._x=f*c*u+l*d*_,this._y=l*d*u-f*c*_,this._z=l*c*_+f*d*u,this._w=l*c*u-f*d*_;break;case"YXZ":this._x=f*c*u+l*d*_,this._y=l*d*u-f*c*_,this._z=l*c*_-f*d*u,this._w=l*c*u+f*d*_;break;case"ZXY":this._x=f*c*u-l*d*_,this._y=l*d*u+f*c*_,this._z=l*c*_+f*d*u,this._w=l*c*u-f*d*_;break;case"ZYX":this._x=f*c*u-l*d*_,this._y=l*d*u+f*c*_,this._z=l*c*_-f*d*u,this._w=l*c*u+f*d*_;break;case"YZX":this._x=f*c*u+l*d*_,this._y=l*d*u+f*c*_,this._z=l*c*_-f*d*u,this._w=l*c*u-f*d*_;break;case"XZY":this._x=f*c*u-l*d*_,this._y=l*d*u-f*c*_,this._z=l*c*_+f*d*u,this._w=l*c*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],h=e[9],l=e[2],c=e[6],u=e[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-h)*d,this._y=(s-l)*d,this._z=(a-n)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(c-h)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(s+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(s-l)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(h+c)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-n)/d,this._x=(s+l)/d,this._y=(h+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,h=e._y,l=e._z,c=e._w;return this._x=i*c+a*o+n*l-s*h,this._y=n*c+a*h+s*o-i*l,this._z=s*c+a*l+i*h-n*o,this._w=a*c-i*o-n*h-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const h=1-o*o;if(h<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(h),c=Math.atan2(l,o),u=Math.sin((1-e)*c)/l,f=Math.sin(e*c)/l;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,h=t.w,l=2*(a*n-o*i),c=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+h*l+a*u-o*c,this.y=i+h*c+o*l-s*u,this.z=n+h*u+s*c-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,h=e.z;return this.x=n*h-s*o,this.y=s*a-i*h,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xa.copy(this).projectOnVector(t),this.sub(xa)}reflect(t){return this.sub(xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new O,qh=new Zs;class $s{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,li):li.fromBufferAttribute(s,a),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nr.copy(i.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),sr.subVectors(this.max,ws),Fn.subVectors(t.a,ws),Nn.subVectors(t.b,ws),kn.subVectors(t.c,ws),Vi.subVectors(Nn,Fn),Gi.subVectors(kn,Nn),un.subVectors(Fn,kn);let e=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-un.z,un.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,un.z,0,-un.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-un.y,un.x,0];return!va(e,Fn,Nn,kn,sr)||(e=[1,0,0,0,1,0,0,0,1],!va(e,Fn,Nn,kn,sr))?!1:(rr.crossVectors(Vi,Gi),e=[rr.x,rr.y,rr.z],va(e,Fn,Nn,kn,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ai=[new O,new O,new O,new O,new O,new O,new O,new O],li=new O,nr=new $s,Fn=new O,Nn=new O,kn=new O,Vi=new O,Gi=new O,un=new O,ws=new O,sr=new O,rr=new O,dn=new O;function va(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){dn.fromArray(r,s);const o=n.x*Math.abs(dn.x)+n.y*Math.abs(dn.y)+n.z*Math.abs(dn.z),h=t.dot(dn),l=e.dot(dn),c=i.dot(dn);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>o)return!1}return!0}const qd=new $s,As=new O,ya=new O;class $r{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):qd.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);const e=As.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(As,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(ya)),this.expandByPoint(As.copy(t.center).sub(ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new O,Sa=new O,ar=new O,Xi=new O,Ma=new O,or=new O,Ta=new O;class Ro{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Sa.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(Sa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ar),o=Xi.dot(this.direction),h=-Xi.dot(ar),l=Xi.lengthSq(),c=Math.abs(1-a*a);let u,f,d,_;if(c>0)if(u=a*h-o,f=a*o-h,_=s*c,u>=0)if(f>=-_)if(f<=_){const g=1/c;u*=g,f*=g,d=u*(u+a*f+2*o)+f*(a*u+f+2*h)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*h)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*h)+l;else f<=-_?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-h),s),d=-u*u+f*(f+2*h)+l):f<=_?(u=0,f=Math.min(Math.max(-s,-h),s),d=f*(f+2*h)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-h),s),d=-u*u+f*(f+2*h)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Sa).addScaledVector(ar,f),d}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);const i=Ci.dot(this.direction),n=Ci.dot(Ci)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,h=i+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,h;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,n=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,n=(t.min.x-f.x)*l),c>=0?(s=(t.min.y-f.y)*c,a=(t.max.y-f.y)*c):(s=(t.max.y-f.y)*c,a=(t.min.y-f.y)*c),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-f.z)*u,h=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,h=(t.min.z-f.z)*u),i>h||o>n)||((o>i||i!==i)&&(i=o),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,n,s){Ma.subVectors(e,t),or.subVectors(i,t),Ta.crossVectors(Ma,or);let a=this.direction.dot(Ta),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,t);const h=o*this.direction.dot(or.crossVectors(Xi,or));if(h<0)return null;const l=o*this.direction.dot(Ma.cross(Xi));if(l<0||h+l>a)return null;const c=-o*Xi.dot(Ta);return c<0?null:this.at(c/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,i,n,s,a,o,h,l,c,u,f,d,_,g,p){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,h,l,c,u,f,d,_,g,p)}set(t,e,i,n,s,a,o,h,l,c,u,f,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=o,m[13]=h,m[2]=l,m[6]=c,m[10]=u,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Bn.setFromMatrixColumn(t,0).length(),s=1/Bn.setFromMatrixColumn(t,1).length(),a=1/Bn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),h=Math.cos(n),l=Math.sin(n),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*c,d=a*u,_=o*c,g=o*u;e[0]=h*c,e[4]=-h*u,e[8]=l,e[1]=d+_*l,e[5]=f-g*l,e[9]=-o*h,e[2]=g-f*l,e[6]=_+d*l,e[10]=a*h}else if(t.order==="YXZ"){const f=h*c,d=h*u,_=l*c,g=l*u;e[0]=f+g*o,e[4]=_*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*c,e[9]=-o,e[2]=d*o-_,e[6]=g+f*o,e[10]=a*h}else if(t.order==="ZXY"){const f=h*c,d=h*u,_=l*c,g=l*u;e[0]=f-g*o,e[4]=-a*u,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*c,e[9]=g-f*o,e[2]=-a*l,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){const f=a*c,d=a*u,_=o*c,g=o*u;e[0]=h*c,e[4]=_*l-d,e[8]=f*l+g,e[1]=h*u,e[5]=g*l+f,e[9]=d*l-_,e[2]=-l,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){const f=a*h,d=a*l,_=o*h,g=o*l;e[0]=h*c,e[4]=g-f*u,e[8]=_*u+d,e[1]=u,e[5]=a*c,e[9]=-o*c,e[2]=-l*c,e[6]=d*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=a*h,d=a*l,_=o*h,g=o*l;e[0]=h*c,e[4]=-u,e[8]=l*c,e[1]=f*u+g,e[5]=a*c,e[9]=d*u-_,e[2]=_*u-d,e[6]=o*c,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jd,t,Jd)}lookAt(t,e,i){const n=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Wi.crossVectors(i,Ye),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Wi.crossVectors(i,Ye)),Wi.normalize(),hr.crossVectors(Ye,Wi),n[0]=Wi.x,n[4]=hr.x,n[8]=Ye.x,n[1]=Wi.y,n[5]=hr.y,n[9]=Ye.y,n[2]=Wi.z,n[6]=hr.z,n[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],h=i[8],l=i[12],c=i[1],u=i[5],f=i[9],d=i[13],_=i[2],g=i[6],p=i[10],m=i[14],S=i[3],v=i[7],x=i[11],E=i[15],y=n[0],T=n[4],R=n[8],M=n[12],b=n[1],I=n[5],L=n[9],B=n[13],P=n[2],F=n[6],V=n[10],q=n[14],k=n[3],N=n[7],X=n[11],K=n[15];return s[0]=a*y+o*b+h*P+l*k,s[4]=a*T+o*I+h*F+l*N,s[8]=a*R+o*L+h*V+l*X,s[12]=a*M+o*B+h*q+l*K,s[1]=c*y+u*b+f*P+d*k,s[5]=c*T+u*I+f*F+d*N,s[9]=c*R+u*L+f*V+d*X,s[13]=c*M+u*B+f*q+d*K,s[2]=_*y+g*b+p*P+m*k,s[6]=_*T+g*I+p*F+m*N,s[10]=_*R+g*L+p*V+m*X,s[14]=_*M+g*B+p*q+m*K,s[3]=S*y+v*b+x*P+E*k,s[7]=S*T+v*I+x*F+E*N,s[11]=S*R+v*L+x*V+E*X,s[15]=S*M+v*B+x*q+E*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],h=t[9],l=t[13],c=t[2],u=t[6],f=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*h*u-n*l*u-s*o*f+i*l*f+n*o*d-i*h*d)+g*(+e*h*d-e*l*f+s*a*f-n*a*d+n*l*c-s*h*c)+p*(+e*l*u-e*o*d-s*a*u+i*a*d+s*o*c-i*l*c)+m*(-n*o*c-e*h*u+e*o*f+n*a*u-i*a*f+i*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8],u=t[9],f=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],S=u*p*l-g*f*l+g*h*d-o*p*d-u*h*m+o*f*m,v=_*f*l-c*p*l-_*h*d+a*p*d+c*h*m-a*f*m,x=c*g*l-_*u*l+_*o*d-a*g*d-c*o*m+a*u*m,E=_*u*h-c*g*h-_*o*f+a*g*f+c*o*p-a*u*p,y=e*S+i*v+n*x+s*E;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/y;return t[0]=S*T,t[1]=(g*f*s-u*p*s-g*n*d+i*p*d+u*n*m-i*f*m)*T,t[2]=(o*p*s-g*h*s+g*n*l-i*p*l-o*n*m+i*h*m)*T,t[3]=(u*h*s-o*f*s-u*n*l+i*f*l+o*n*d-i*h*d)*T,t[4]=v*T,t[5]=(c*p*s-_*f*s+_*n*d-e*p*d-c*n*m+e*f*m)*T,t[6]=(_*h*s-a*p*s-_*n*l+e*p*l+a*n*m-e*h*m)*T,t[7]=(a*f*s-c*h*s+c*n*l-e*f*l-a*n*d+e*h*d)*T,t[8]=x*T,t[9]=(_*u*s-c*g*s-_*i*d+e*g*d+c*i*m-e*u*m)*T,t[10]=(a*g*s-_*o*s+_*i*l-e*g*l-a*i*m+e*o*m)*T,t[11]=(c*o*s-a*u*s-c*i*l+e*u*l+a*i*d-e*o*d)*T,t[12]=E*T,t[13]=(c*g*n-_*u*n+_*i*f-e*g*f-c*i*p+e*u*p)*T,t[14]=(_*o*n-a*g*n-_*i*h+e*g*h+a*i*p-e*o*p)*T,t[15]=(a*u*n-c*o*n+c*i*h-e*u*h-a*i*f+e*o*f)*T,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,h=t.z,l=s*a,c=s*o;return this.set(l*a+i,l*o-n*h,l*h+n*o,0,l*o+n*h,c*o+i,c*h-n*a,0,l*h-n*o,c*h+n*a,s*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,h=e._w,l=s+s,c=a+a,u=o+o,f=s*l,d=s*c,_=s*u,g=a*c,p=a*u,m=o*u,S=h*l,v=h*c,x=h*u,E=i.x,y=i.y,T=i.z;return n[0]=(1-(g+m))*E,n[1]=(d+x)*E,n[2]=(_-v)*E,n[3]=0,n[4]=(d-x)*y,n[5]=(1-(f+m))*y,n[6]=(p+S)*y,n[7]=0,n[8]=(_+v)*T,n[9]=(p-S)*T,n[10]=(1-(f+g))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=Bn.set(n[0],n[1],n[2]).length();const a=Bn.set(n[4],n[5],n[6]).length(),o=Bn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],ci.copy(this);const l=1/s,c=1/a,u=1/o;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=c,ci.elements[5]*=c,ci.elements[6]*=c,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,e.setFromRotationMatrix(ci),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=Ni){const h=this.elements,l=2*s/(e-t),c=2*s/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n);let d,_;if(o===Ni)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===zr)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=c,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Ni){const h=this.elements,l=1/(e-t),c=1/(i-n),u=1/(a-s),f=(e+t)*l,d=(i+n)*c;let _,g;if(o===Ni)_=(a+s)*u,g=-2*u;else if(o===zr)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*l,h[4]=0,h[8]=0,h[12]=-f,h[1]=0,h[5]=2*c,h[9]=0,h[13]=-d,h[2]=0,h[6]=0,h[10]=g,h[14]=-_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Bn=new O,ci=new ue,jd=new O(0,0,0),Jd=new O(1,1,1),Wi=new O,hr=new O,Ye=new O,jh=new ue,Jh=new Zs;class Kr{constructor(t=0,e=0,i=0,n=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],h=n[1],l=n[5],c=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class Po{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zd=0;const Zh=new O,zn=new Zs,Ri=new ue,lr=new O,Cs=new O,$d=new O,Kd=new Zs,$h=new O(1,0,0),Kh=new O(0,1,0),Qh=new O(0,0,1),Qd={type:"added"},tf={type:"removed"};class Te extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new O,e=new Kr,i=new Zs,n=new O(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ue},normalMatrix:{value:new zt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.multiply(zn),this}rotateOnWorldAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.premultiply(zn),this}rotateX(t){return this.rotateOnAxis($h,t)}rotateY(t){return this.rotateOnAxis(Kh,t)}rotateZ(t){return this.rotateOnAxis(Qh,t)}translateOnAxis(t,e){return Zh.copy(t).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($h,t)}translateY(t){return this.translateOnAxis(Kh,t)}translateZ(t){return this.translateOnAxis(Qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?lr.copy(t):lr.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Cs,lr,this.up):Ri.lookAt(lr,Cs,this.up),this.quaternion.setFromRotationMatrix(Ri),n&&(Ri.extractRotation(n.matrixWorld),zn.setFromRotationMatrix(Ri),this.quaternion.premultiply(zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Qd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,$d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const u=h[l];s(t.shapes,u)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(s(t.materials,this.material[h]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];n.animations.push(s(t.animations,h))}}if(e){const o=a(t.geometries),h=a(t.materials),l=a(t.textures),c=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=n,i;function a(o){const h=[];for(const l in o){const c=o[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Te.DEFAULT_UP=new O(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new O,Pi=new O,ba=new O,Li=new O,Hn=new O,Vn=new O,tl=new O,Ea=new O,wa=new O,Aa=new O;let cr=!1;class fi{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ui.subVectors(t,e),n.cross(ui);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){ui.subVectors(n,e),Pi.subVectors(i,e),ba.subVectors(t,e);const a=ui.dot(ui),o=ui.dot(Pi),h=ui.dot(ba),l=Pi.dot(Pi),c=Pi.dot(ba),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(l*h-o*c)*f,_=(a*c-o*h)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getUV(t,e,i,n,s,a,o,h){return cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cr=!0),this.getInterpolation(t,e,i,n,s,a,o,h)}static getInterpolation(t,e,i,n,s,a,o,h){return this.getBarycoord(t,e,i,n,Li)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,Li.x),h.addScaledVector(a,Li.y),h.addScaledVector(o,Li.z),h)}static isFrontFacing(t,e,i,n){return ui.subVectors(i,e),Pi.subVectors(t,e),ui.cross(Pi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ui.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fi.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cr=!0),fi.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return fi.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;Hn.subVectors(n,i),Vn.subVectors(s,i),Ea.subVectors(t,i);const h=Hn.dot(Ea),l=Vn.dot(Ea);if(h<=0&&l<=0)return e.copy(i);wa.subVectors(t,n);const c=Hn.dot(wa),u=Vn.dot(wa);if(c>=0&&u<=c)return e.copy(n);const f=h*u-c*l;if(f<=0&&h>=0&&c<=0)return a=h/(h-c),e.copy(i).addScaledVector(Hn,a);Aa.subVectors(t,s);const d=Hn.dot(Aa),_=Vn.dot(Aa);if(_>=0&&d<=_)return e.copy(s);const g=d*l-h*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector(Vn,o);const p=c*_-d*u;if(p<=0&&u-c>=0&&d-_>=0)return tl.subVectors(s,n),o=(u-c)/(u-c+(d-_)),e.copy(n).addScaledVector(tl,o);const m=1/(p+g+f);return a=g*m,o=f*m,e.copy(i).addScaledVector(Hn,a).addScaledVector(Vn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Ca(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Gt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=qt.workingColorSpace){if(t=zd(t,1),e=Me(e,0,1),i=Me(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ca(a,s,t+1/3),this.g=Ca(a,s,t),this.b=Ca(a,s,t-1/3)}return qt.toWorkingColorSpace(this,n),this}setStyle(t,e=se){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=se){const i=yc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=se){return qt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Me(Ae.r*255,0,255))*65536+Math.round(Me(Ae.g*255,0,255))*256+Math.round(Me(Ae.b*255,0,255))}getHexString(t=se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ae.copy(this),e);const i=Ae.r,n=Ae.g,s=Ae.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let h,l;const c=(o+a)/2;if(o===a)h=0,l=0;else{const u=a-o;switch(l=c<=.5?u/(a+o):u/(2-a-o),a){case i:h=(n-s)/u+(n<s?6:0);break;case n:h=(s-i)/u+2;break;case s:h=(i-n)/u+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=se){qt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,i=Ae.g,n=Ae.b;return t!==se?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(ur);const i=pa(Yi.h,ur.h,e),n=pa(Yi.s,ur.s,e),s=pa(Yi.l,ur.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Gt;Gt.NAMES=yc;let ef=0;class Ss extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=bn,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=to,this.blendEquation=yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Un,this.stencilZFail=Un,this.stencilZPass=Un,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bn&&(i.blending=this.blending),this.side!==sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qa&&(i.blendSrc=this.blendSrc),this.blendDst!==to&&(i.blendDst=this.blendDst),this.blendEquation!==yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Un&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Un&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Un&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const h=s[o];delete h.metadata,a.push(h)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Hr extends Ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new O,dr=new at;class ke{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Hh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Es(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Es(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Es(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Es(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hh&&(t.usage=this.usage),t}}class Sc extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Mc extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Mi extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}let nf=0;const ii=new ue,Ra=new Te,Gn=new O,qe=new $s,Rs=new $s,ve=new O;class bi extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gc(t)?Mc:Sc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,i){return ii.makeTranslation(t,e,i),this.applyMatrix4(ii),this}scale(t,e,i){return ii.makeScale(t,e,i),this.applyMatrix4(ii),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gn).negate(),this.translate(Gn.x,Gn.y,Gn.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];qe.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(qe.min,Rs.min),qe.expandByPoint(ve),ve.addVectors(qe.max,Rs.max),qe.expandByPoint(ve)):(qe.expandByPoint(Rs.min),qe.expandByPoint(Rs.max))}qe.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)ve.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(ve));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],h=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)ve.fromBufferAttribute(o,l),h&&(Gn.fromBufferAttribute(t,l),ve.add(Gn)),n=Math.max(n,i.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*o),4));const h=this.getAttribute("tangent").array,l=[],c=[];for(let b=0;b<o;b++)l[b]=new O,c[b]=new O;const u=new O,f=new O,d=new O,_=new at,g=new at,p=new at,m=new O,S=new O;function v(b,I,L){u.fromArray(n,b*3),f.fromArray(n,I*3),d.fromArray(n,L*3),_.fromArray(a,b*2),g.fromArray(a,I*2),p.fromArray(a,L*2),f.sub(u),d.sub(u),g.sub(_),p.sub(_);const B=1/(g.x*p.y-p.x*g.y);isFinite(B)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-g.y).multiplyScalar(B),S.copy(d).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(B),l[b].add(m),l[I].add(m),l[L].add(m),c[b].add(S),c[I].add(S),c[L].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let b=0,I=x.length;b<I;++b){const L=x[b],B=L.start,P=L.count;for(let F=B,V=B+P;F<V;F+=3)v(i[F+0],i[F+1],i[F+2])}const E=new O,y=new O,T=new O,R=new O;function M(b){T.fromArray(s,b*3),R.copy(T);const I=l[b];E.copy(I),E.sub(T.multiplyScalar(T.dot(I))).normalize(),y.crossVectors(R,I);const B=y.dot(c[b])<0?-1:1;h[b*4]=E.x,h[b*4+1]=E.y,h[b*4+2]=E.z,h[b*4+3]=B}for(let b=0,I=x.length;b<I;++b){const L=x[b],B=L.start,P=L.count;for(let F=B,V=B+P;F<V;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const n=new O,s=new O,a=new O,o=new O,h=new O,l=new O,c=new O,u=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);n.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),c.subVectors(a,s),u.subVectors(n,s),c.cross(u),o.fromBufferAttribute(i,_),h.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),o.add(c),h.add(c),l.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,h.x,h.y,h.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),c.subVectors(a,s),u.subVectors(n,s),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,h){const l=o.array,c=o.itemSize,u=o.normalized,f=new l.constructor(h.length*c);let d=0,_=0;for(let g=0,p=h.length;g<p;g++){o.isInterleavedBufferAttribute?d=h[g]*o.data.stride+o.offset:d=h[g]*c;for(let m=0;m<c;m++)f[_++]=l[d++]}return new ke(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bi,i=this.index.array,n=this.attributes;for(const o in n){const h=n[o],l=t(h,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const h=[],l=s[o];for(let c=0,u=l.length;c<u;c++){const f=l[c],d=t(f,i);h.push(d)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const l=i[h];t.data.attributes[h]=l.toJSON(t.data)}const n={};let s=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];c.push(d.toJSON(t.data))}c.length>0&&(n[h]=c,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const c=n[l];this.setAttribute(l,c.clone(e))}const s=t.morphAttributes;for(const l in s){const c=[],u=s[l];for(let f=0,d=u.length;f<d;f++)c.push(u[f].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const el=new ue,fn=new Ro,fr=new $r,il=new O,Xn=new O,Wn=new O,Yn=new O,Pa=new O,pr=new O,mr=new at,gr=new at,_r=new at,nl=new O,sl=new O,rl=new O,xr=new O,vr=new O;class ai extends Te{constructor(t=new bi,e=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){pr.set(0,0,0);for(let h=0,l=s.length;h<l;h++){const c=o[h],u=s[h];c!==0&&(Pa.fromBufferAttribute(u,t),a?pr.addScaledVector(Pa,c):pr.addScaledVector(Pa.sub(e),c))}e.add(pr)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere),fr.applyMatrix4(s),fn.copy(t.ray).recast(t.near),!(fr.containsPoint(fn.origin)===!1&&(fn.intersectSphere(fr,il)===null||fn.origin.distanceToSquared(il)>(t.far-t.near)**2))&&(el.copy(s).invert(),fn.copy(t.ray).applyMatrix4(el),!(i.boundingBox!==null&&fn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fn)))}_computeIntersections(t,e,i){let n;const s=this.geometry,a=this.material,o=s.index,h=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),v=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let x=S,E=v;x<E;x+=3){const y=o.getX(x),T=o.getX(x+1),R=o.getX(x+2);n=yr(this,m,t,i,l,c,u,y,T,R),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=o.getX(p),v=o.getX(p+1),x=o.getX(p+2);n=yr(this,a,t,i,l,c,u,S,v,x),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(h!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),v=Math.min(h.count,Math.min(p.start+p.count,d.start+d.count));for(let x=S,E=v;x<E;x+=3){const y=x,T=x+1,R=x+2;n=yr(this,m,t,i,l,c,u,y,T,R),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const _=Math.max(0,d.start),g=Math.min(h.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=p,v=p+1,x=p+2;n=yr(this,a,t,i,l,c,u,S,v,x),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function sf(r,t,e,i,n,s,a,o){let h;if(t.side===Be?h=i.intersectTriangle(a,s,n,!0,o):h=i.intersectTriangle(n,s,a,t.side===sn,o),h===null)return null;vr.copy(o),vr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(vr);return l<e.near||l>e.far?null:{distance:l,point:vr.clone(),object:r}}function yr(r,t,e,i,n,s,a,o,h,l){r.getVertexPosition(o,Xn),r.getVertexPosition(h,Wn),r.getVertexPosition(l,Yn);const c=sf(r,t,e,i,Xn,Wn,Yn,xr);if(c){n&&(mr.fromBufferAttribute(n,o),gr.fromBufferAttribute(n,h),_r.fromBufferAttribute(n,l),c.uv=fi.getInterpolation(xr,Xn,Wn,Yn,mr,gr,_r,new at)),s&&(mr.fromBufferAttribute(s,o),gr.fromBufferAttribute(s,h),_r.fromBufferAttribute(s,l),c.uv1=fi.getInterpolation(xr,Xn,Wn,Yn,mr,gr,_r,new at),c.uv2=c.uv1),a&&(nl.fromBufferAttribute(a,o),sl.fromBufferAttribute(a,h),rl.fromBufferAttribute(a,l),c.normal=fi.getInterpolation(xr,Xn,Wn,Yn,nl,sl,rl,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:h,c:l,normal:new O,materialIndex:0};fi.getNormal(Xn,Wn,Yn,u.normal),c.face=u}return c}class Ks extends bi{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const h=[],l=[],c=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,n,a,2),_("x","z","y",1,-1,t,i,-e,n,a,3),_("x","y","z",1,-1,t,e,i,n,s,4),_("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(h),this.setAttribute("position",new Mi(l,3)),this.setAttribute("normal",new Mi(c,3)),this.setAttribute("uv",new Mi(u,2));function _(g,p,m,S,v,x,E,y,T,R,M){const b=x/T,I=E/R,L=x/2,B=E/2,P=y/2,F=T+1,V=R+1;let q=0,k=0;const N=new O;for(let X=0;X<V;X++){const K=X*I-B;for(let $=0;$<F;$++){const G=$*b-L;N[g]=G*S,N[p]=K*v,N[m]=P,l.push(N.x,N.y,N.z),N[g]=0,N[p]=0,N[m]=y>0?1:-1,c.push(N.x,N.y,N.z),u.push($/T),u.push(1-X/R),q+=1}}for(let X=0;X<R;X++)for(let K=0;K<T;K++){const $=f+K+F*X,G=f+K+F*(X+1),Z=f+(K+1)+F*(X+1),tt=f+(K+1)+F*X;h.push($,G,tt),h.push(G,Z,tt),k+=6}o.addGroup(d,k,M),d+=k,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ie(r){const t={};for(let e=0;e<r.length;e++){const i=ps(r[e]);for(const n in i)t[n]=i[n]}return t}function rf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Tc(r){return r.getRenderTarget()===null?r.outputColorSpace:qt.workingColorSpace}const af={clone:ps,merge:Ie};var of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends Ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class bc extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class si extends bc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fa*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/h,e-=a.offsetY*i/l,n*=a.width/h,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qn=-90,jn=1;class lf extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new si(qn,jn,t,e);n.layers=this.layers,this.add(n);const s=new si(qn,jn,t,e);s.layers=this.layers,this.add(s);const a=new si(qn,jn,t,e);a.layers=this.layers,this.add(a);const o=new si(qn,jn,t,e);o.layers=this.layers,this.add(o);const h=new si(qn,jn,t,e);h.layers=this.layers,this.add(h);const l=new si(qn,jn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,h]=e;for(const l of e)this.remove(l);if(t===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===zr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,h,l,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,h),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,n),t.render(e,c),t.setRenderTarget(u,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ec extends Re{constructor(t,e,i,n,s,a,o,h,l,c){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,i,n,s,a,o,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cf extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(Is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===An?se:ri),this.texture=new Ec(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ks(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:Ki});s.uniforms.tEquirect.value=e;const a=new ai(n,s),o=e.minFilter;return e.minFilter===ds&&(e.minFilter=Fe),new lf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}const La=new O,uf=new O,df=new zt;class _n{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=La.subVectors(i,e).cross(uf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(La),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||df.getNormalMatrix(t),n=this.coplanarPoint(La).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pn=new $r,Sr=new O;class Lo{constructor(t=new _n,e=new _n,i=new _n,n=new _n,s=new _n,a=new _n){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ni){const i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],h=n[3],l=n[4],c=n[5],u=n[6],f=n[7],d=n[8],_=n[9],g=n[10],p=n[11],m=n[12],S=n[13],v=n[14],x=n[15];if(i[0].setComponents(h-s,f-l,p-d,x-m).normalize(),i[1].setComponents(h+s,f+l,p+d,x+m).normalize(),i[2].setComponents(h+a,f+c,p+_,x+S).normalize(),i[3].setComponents(h-a,f-c,p-_,x-S).normalize(),i[4].setComponents(h-o,f-u,p-g,x-v).normalize(),e===Ni)i[5].setComponents(h+o,f+u,p+g,x+v).normalize();else if(e===zr)i[5].setComponents(o,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pn)}intersectsSprite(t){return pn.center.set(0,0,0),pn.radius=.7071067811865476,pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(pn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Sr.x=n.normal.x>0?t.max.x:t.min.x,Sr.y=n.normal.y>0?t.max.y:t.min.y,Sr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wc(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ff(r,t){const e=t.isWebGL2,i=new WeakMap;function n(l,c){const u=l.array,f=l.usage,d=u.byteLength,_=r.createBuffer();r.bindBuffer(c,_),r.bufferData(c,u,f),l.onUploadCallback();let g;if(u instanceof Float32Array)g=r.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=r.SHORT;else if(u instanceof Uint32Array)g=r.UNSIGNED_INT;else if(u instanceof Int32Array)g=r.INT;else if(u instanceof Int8Array)g=r.BYTE;else if(u instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function s(l,c,u){const f=c.array,d=c._updateRange,_=c.updateRanges;if(r.bindBuffer(u,l),d.count===-1&&_.length===0&&r.bufferSubData(u,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){const m=_[g];e?r.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):r.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}c.clearUpdateRanges()}d.count!==-1&&(e?r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),c.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=i.get(l);c&&(r.deleteBuffer(c.buffer),i.delete(l))}function h(l,c){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);if(u===void 0)i.set(l,n(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,c),u.version=l.version}}return{get:a,remove:o,update:h}}class Ui extends bi{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,o=Math.floor(i),h=Math.floor(n),l=o+1,c=h+1,u=t/o,f=e/h,d=[],_=[],g=[],p=[];for(let m=0;m<c;m++){const S=m*f-a;for(let v=0;v<l;v++){const x=v*u-s;_.push(x,-S,0),g.push(0,0,1),p.push(v/o),p.push(1-m/h)}}for(let m=0;m<h;m++)for(let S=0;S<o;S++){const v=S+l*m,x=S+l*(m+1),E=S+1+l*(m+1),y=S+1+l*m;d.push(v,x,y),d.push(x,E,y)}this.setIndex(d),this.setAttribute("position",new Mi(_,3)),this.setAttribute("normal",new Mi(g,3)),this.setAttribute("uv",new Mi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.widthSegments,t.heightSegments)}}var pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mf=`#ifdef USE_ALPHAHASH
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
#endif`,gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
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
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
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
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Af=`#ifdef USE_IRIDESCENCE
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
#endif`,Cf=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nf=`#define PI 3.141592653589793
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
} // validated`,kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bf=`vec3 transformedNormal = objectNormal;
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
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`
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
}`,Yf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,ip=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
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
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
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
#endif`,fp=`struct PhysicalMaterial {
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
}`,pp=`
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
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
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kp=`float getShadowMask() {
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
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
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
}`,ym=`#if DEPTH_PACKING == 3200
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
}`,Sm=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Pm=`#define LAMBERT
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
}`,Lm=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Um=`#define NORMAL
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
}`,Om=`#define PHONG
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
}`,Fm=`#define PHONG
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
}`,Nm=`#define STANDARD
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
}`,km=`#define STANDARD
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
}`,Bm=`#define TOON
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
}`,zm=`#define TOON
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
}`,Hm=`uniform float size;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Xm=`uniform vec3 color;
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
}`,Wm=`uniform float rotation;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:pf,alphahash_pars_fragment:mf,alphamap_fragment:gf,alphamap_pars_fragment:_f,alphatest_fragment:xf,alphatest_pars_fragment:vf,aomap_fragment:yf,aomap_pars_fragment:Sf,batching_pars_vertex:Mf,batching_vertex:Tf,begin_vertex:bf,beginnormal_vertex:Ef,bsdfs:wf,iridescence_fragment:Af,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Pf,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Df,color_fragment:If,color_pars_fragment:Uf,color_pars_vertex:Of,color_vertex:Ff,common:Nf,cube_uv_reflection_fragment:kf,defaultnormal_vertex:Bf,displacementmap_pars_vertex:zf,displacementmap_vertex:Hf,emissivemap_fragment:Vf,emissivemap_pars_fragment:Gf,colorspace_fragment:Xf,colorspace_pars_fragment:Wf,envmap_fragment:Yf,envmap_common_pars_fragment:qf,envmap_pars_fragment:jf,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:op,envmap_vertex:Zf,fog_vertex:$f,fog_pars_vertex:Kf,fog_fragment:Qf,fog_pars_fragment:tp,gradientmap_pars_fragment:ep,lightmap_fragment:ip,lightmap_pars_fragment:np,lights_lambert_fragment:sp,lights_lambert_pars_fragment:rp,lights_pars_begin:ap,lights_toon_fragment:hp,lights_toon_pars_fragment:lp,lights_phong_fragment:cp,lights_phong_pars_fragment:up,lights_physical_fragment:dp,lights_physical_pars_fragment:fp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,logdepthbuf_fragment:_p,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:yp,map_fragment:Sp,map_pars_fragment:Mp,map_particle_fragment:Tp,map_particle_pars_fragment:bp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:wp,morphcolor_vertex:Ap,morphnormal_vertex:Cp,morphtarget_pars_vertex:Rp,morphtarget_vertex:Pp,normal_fragment_begin:Lp,normal_fragment_maps:Dp,normal_pars_fragment:Ip,normal_pars_vertex:Up,normal_vertex:Op,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:kp,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:zp,opaque_fragment:Hp,packing:Vp,premultiplied_alpha_fragment:Gp,project_vertex:Xp,dithering_fragment:Wp,dithering_pars_fragment:Yp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Zp,shadowmap_vertex:$p,shadowmask_pars_fragment:Kp,skinbase_vertex:Qp,skinning_pars_vertex:tm,skinning_vertex:em,skinnormal_vertex:im,specularmap_fragment:nm,specularmap_pars_fragment:sm,tonemapping_fragment:rm,tonemapping_pars_fragment:am,transmission_fragment:om,transmission_pars_fragment:hm,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:um,worldpos_vertex:dm,background_vert:fm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:_m,cube_frag:xm,depth_vert:vm,depth_frag:ym,distanceRGBA_vert:Sm,distanceRGBA_frag:Mm,equirect_vert:Tm,equirect_frag:bm,linedashed_vert:Em,linedashed_frag:wm,meshbasic_vert:Am,meshbasic_frag:Cm,meshlambert_vert:Rm,meshlambert_frag:Pm,meshmatcap_vert:Lm,meshmatcap_frag:Dm,meshnormal_vert:Im,meshnormal_frag:Um,meshphong_vert:Om,meshphong_frag:Fm,meshphysical_vert:Nm,meshphysical_frag:km,meshtoon_vert:Bm,meshtoon_frag:zm,points_vert:Hm,points_frag:Vm,shadow_vert:Gm,shadow_frag:Xm,sprite_vert:Wm,sprite_frag:Ym},rt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},vi={basic:{uniforms:Ie([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ie([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ie([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ie([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ie([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ie([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ie([rt.points,rt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ie([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ie([rt.common,rt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ie([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ie([rt.sprite,rt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ie([rt.common,rt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ie([rt.lights,rt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};vi.physical={uniforms:Ie([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Mr={r:0,b:0,g:0};function qm(r,t,e,i,n,s,a){const o=new Gt(0);let h=s===!0?0:1,l,c,u=null,f=0,d=null;function _(p,m){let S=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?e:t).get(v)),v===null?g(o,h):v&&v.isColor&&(g(v,1),S=!0);const x=r.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Jr)?(c===void 0&&(c=new ai(new Ks(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:ps(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=qt.getTransfer(v.colorSpace)!==Qt,(u!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ai(new Ui(2,2),new Bi({name:"BackgroundMaterial",uniforms:ps(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=qt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,m){p.getRGB(Mr,Tc(r)),i.buffers.color.setClear(Mr.r,Mr.g,Mr.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),h=m,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(p){h=p,g(o,h)},render:_}}function jm(r,t,e,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},h=p(null);let l=h,c=!1;function u(P,F,V,q,k){let N=!1;if(a){const X=g(q,V,F);l!==X&&(l=X,d(l.object)),N=m(P,q,V,k),N&&S(P,q,V,k)}else{const X=F.wireframe===!0;(l.geometry!==q.id||l.program!==V.id||l.wireframe!==X)&&(l.geometry=q.id,l.program=V.id,l.wireframe=X,N=!0)}k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(N||c)&&(c=!1,R(P,F,V,q),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function f(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(P){return i.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function g(P,F,V){const q=V.wireframe===!0;let k=o[P.id];k===void 0&&(k={},o[P.id]=k);let N=k[F.id];N===void 0&&(N={},k[F.id]=N);let X=N[q];return X===void 0&&(X=p(f()),N[q]=X),X}function p(P){const F=[],V=[],q=[];for(let k=0;k<n;k++)F[k]=0,V[k]=0,q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:q,object:P,attributes:{},index:null}}function m(P,F,V,q){const k=l.attributes,N=F.attributes;let X=0;const K=V.getAttributes();for(const $ in K)if(K[$].location>=0){const Z=k[$];let tt=N[$];if(tt===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor)),Z===void 0||Z.attribute!==tt||tt&&Z.data!==tt.data)return!0;X++}return l.attributesNum!==X||l.index!==q}function S(P,F,V,q){const k={},N=F.attributes;let X=0;const K=V.getAttributes();for(const $ in K)if(K[$].location>=0){let Z=N[$];Z===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const tt={};tt.attribute=Z,Z&&Z.data&&(tt.data=Z.data),k[$]=tt,X++}l.attributes=k,l.attributesNum=X,l.index=q}function v(){const P=l.newAttributes;for(let F=0,V=P.length;F<V;F++)P[F]=0}function x(P){E(P,0)}function E(P,F){const V=l.newAttributes,q=l.enabledAttributes,k=l.attributeDivisors;V[P]=1,q[P]===0&&(r.enableVertexAttribArray(P),q[P]=1),k[P]!==F&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),k[P]=F)}function y(){const P=l.newAttributes,F=l.enabledAttributes;for(let V=0,q=F.length;V<q;V++)F[V]!==P[V]&&(r.disableVertexAttribArray(V),F[V]=0)}function T(P,F,V,q,k,N,X){X===!0?r.vertexAttribIPointer(P,F,V,k,N):r.vertexAttribPointer(P,F,V,q,k,N)}function R(P,F,V,q){if(i.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const k=q.attributes,N=V.getAttributes(),X=F.defaultAttributeValues;for(const K in N){const $=N[K];if($.location>=0){let G=k[K];if(G===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const Z=G.normalized,tt=G.itemSize,ft=e.get(G);if(ft===void 0)continue;const pt=ft.buffer,Tt=ft.type,_t=ft.bytesPerElement,St=i.isWebGL2===!0&&(Tt===r.INT||Tt===r.UNSIGNED_INT||G.gpuType===ac);if(G.isInterleavedBufferAttribute){const Pt=G.data,z=Pt.stride,pe=G.offset;if(Pt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<$.locationSize;Mt++)E($.location+Mt,Pt.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let Mt=0;Mt<$.locationSize;Mt++)x($.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let Mt=0;Mt<$.locationSize;Mt++)T($.location+Mt,tt/$.locationSize,Tt,Z,z*_t,(pe+tt/$.locationSize*Mt)*_t,St)}else{if(G.isInstancedBufferAttribute){for(let Pt=0;Pt<$.locationSize;Pt++)E($.location+Pt,G.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Pt=0;Pt<$.locationSize;Pt++)x($.location+Pt);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let Pt=0;Pt<$.locationSize;Pt++)T($.location+Pt,tt/$.locationSize,Tt,Z,tt*_t,tt/$.locationSize*Pt*_t,St)}}else if(X!==void 0){const Z=X[K];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv($.location,Z);break;case 3:r.vertexAttrib3fv($.location,Z);break;case 4:r.vertexAttrib4fv($.location,Z);break;default:r.vertexAttrib1fv($.location,Z)}}}}y()}function M(){L();for(const P in o){const F=o[P];for(const V in F){const q=F[V];for(const k in q)_(q[k].object),delete q[k];delete F[V]}delete o[P]}}function b(P){if(o[P.id]===void 0)return;const F=o[P.id];for(const V in F){const q=F[V];for(const k in q)_(q[k].object),delete q[k];delete F[V]}delete o[P.id]}function I(P){for(const F in o){const V=o[F];if(V[P.id]===void 0)continue;const q=V[P.id];for(const k in q)_(q[k].object),delete q[k];delete V[P.id]}}function L(){B(),c=!0,l!==h&&(l=h,d(l.object))}function B(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:u,reset:L,resetDefaultState:B,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:x,disableUnusedAttributes:y}}function Jm(r,t,e,i){const n=i.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),e.update(u,s,1)}function h(c,u,f){if(f===0)return;let d,_;if(n)d=r,_="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,c,u,f),e.update(u,s,f)}function l(c,u,f){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<f;_++)this.render(c[_],u[_]);else{d.multiDrawArraysWEBGL(s,c,0,u,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=h,this.renderMultiDraw=l}function Zm(r,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const h=s(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);const l=a||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,x=a||t.has("OES_texture_float"),E=v&&x,y=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:y}}function $m(r){const t=this;let e=null,i=0,n=!1,s=!1;const a=new _n,o=new zt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!n||_===null||_.length===0||s&&!p)s?c(null):l();else{const S=s?0:i,v=S*4;let x=m.clippingState||null;h.value=x,x=c(_,f,v,d);for(let E=0;E!==v;++E)x[E]=e[E];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,f,d,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=h.value,_!==!0||p===null){const m=d+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,x=d;v!==g;++v,x+=4)a.copy(u[v]).applyMatrix4(S,o),a.normal.toArray(p,x),p[x+3]=a.constant}h.value=p,h.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Km(r){let t=new WeakMap;function e(a,o){return o===eo?a.mapping=cs:o===io&&(a.mapping=us),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===eo||o===io)if(t.has(a)){const h=t.get(a).texture;return e(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const l=new cf(h.height/2);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",n),e(l.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Ac extends bc{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,h=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=c*this.view.offsetY,h=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ts=4,al=[.125,.215,.35,.446,.526,.582],Sn=20,Da=new Ac,ol=new Gt;let Ia=null,Ua=0,Oa=0;const xn=(1+Math.sqrt(5))/2,Jn=1/xn,hl=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,xn,Jn),new O(0,xn,-Jn),new O(Jn,0,xn),new O(-Jn,0,xn),new O(xn,Jn,0),new O(-xn,Jn,0)];class ll{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Ia=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ia,Ua,Oa),t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Bs,format:mi,colorSpace:ki,depthBuffer:!1},n=cl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(s)),this._blurMaterial=tg(s,t,e)}return n}_compileMaterial(t){const e=new ai(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,i,n){const o=new si(90,1,e,i),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(ol),c.toneMapping=Qi,c.autoClear=!1;const d=new Hr({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),_=new ai(new Ks,d);let g=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,g=!0):(d.color.copy(ol),g=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,h[m],0),o.lookAt(l[m],0,0)):S===1?(o.up.set(0,0,h[m]),o.lookAt(0,l[m],0)):(o.up.set(0,h[m],0),o.lookAt(0,0,l[m]));const v=this._cubeSize;Tr(n,S*v,m>2?v:0,v,v),c.setRenderTarget(n),g&&c.render(_,o),c.render(t,o)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===cs||t.mapping===us;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ul());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new ai(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const h=this._cubeSize;Tr(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(a,Da)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=hl[(n-1)%hl.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){const h=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new ai(this._lodPlanes[n],l),f=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Sn-1),g=s/_,p=isFinite(s)?1+Math.floor(c*g):Sn;p>Sn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Sn}`);const m=[];let S=0;for(let T=0;T<Sn;++T){const R=T/g,M=Math.exp(-R*R/2);m.push(M),T===0?S+=M:T<p&&(S+=2*M)}for(let T=0;T<m.length;T++)m[T]=m[T]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const x=this._sizeLods[n],E=3*x*(n>v-ts?n-v+ts:0),y=4*(this._cubeSize-x);Tr(e,E,y,3*x,2*x),h.setRenderTarget(e),h.render(u,Da)}}function Qm(r){const t=[],e=[],i=[];let n=r;const s=r-ts+1+al.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);e.push(o);let h=1/o;a>r-ts?h=al[a-r+ts-1]:a===0&&(h=0),i.push(h);const l=1/(o-2),c=-l,u=1+l,f=[c,c,u,c,u,u,c,c,u,u,c,u],d=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*d),v=new Float32Array(p*_*d),x=new Float32Array(m*_*d);for(let y=0;y<d;y++){const T=y%3*2/3-1,R=y>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];S.set(M,g*_*y),v.set(f,p*_*y);const b=[y,y,y,y,y,y];x.set(b,m*_*y)}const E=new bi;E.setAttribute("position",new ke(S,g)),E.setAttribute("uv",new ke(v,p)),E.setAttribute("faceIndex",new ke(x,m)),t.push(E),n>ts&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function cl(r,t,e){const i=new Dn(r,t,e);return i.texture.mapping=Jr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function tg(r,t,e){const i=new Float32Array(Sn),n=new O(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Sn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Do(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function ul(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function dl(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Do(){return`

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
	`}function eg(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const h=o.mapping,l=h===eo||h===io,c=h===cs||h===us;if(l||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new ll(r)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||c&&u&&n(u)){e===null&&(e=new ll(r));const f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function n(o){let h=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&h++;return h===l}function s(o){const h=o.target;h.removeEventListener("dispose",s);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function ig(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function ng(r,t,e,i){const n={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}f.removeEventListener("dispose",a),delete n[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,e.memory.geometries++),f}function h(u){const f=u.attributes;for(const _ in f)t.update(f[_],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let v=0,x=S.length;v<x;v+=3){const E=S[v+0],y=S[v+1],T=S[v+2];f.push(E,y,y,T,T,E)}}else if(_!==void 0){const S=_.array;g=_.version;for(let v=0,x=S.length/3-1;v<x;v+=3){const E=v+0,y=v+1,T=v+2;f.push(E,y,y,T,T,E)}}else return;const p=new(gc(f)?Mc:Sc)(f,1);p.version=g;const m=s.get(u);m&&t.remove(m),s.set(u,p)}function c(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:h,getWireframeAttribute:c}}function sg(r,t,e,i){const n=i.isWebGL2;let s;function a(d){s=d}let o,h;function l(d){o=d.type,h=d.bytesPerElement}function c(d,_){r.drawElements(s,_,o,d*h),e.update(_,s,1)}function u(d,_,g){if(g===0)return;let p,m;if(n)p=r,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,_,o,d*h,g),e.update(_,s,g)}function f(d,_,g){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<g;m++)this.render(d[m]/h,_[m]);else{p.multiDrawElementsWEBGL(s,_,0,o,d,0,g);let m=0;for(let S=0;S<g;S++)m+=_[S];e.update(m,s,1)}}this.setMode=a,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function rg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function ag(r,t){return r[0]-t[0]}function og(r,t){return Math.abs(t[1])-Math.abs(r[1])}function hg(r,t,e){const i={},n=new Float32Array(8),s=new WeakMap,a=new ye,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function h(l,c,u){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=_!==void 0?_.length:0;let p=s.get(c);if(p===void 0||p.count!==g){let F=function(){B.dispose(),s.delete(c),c.removeEventListener("dispose",F)};var d=F;p!==void 0&&p.texture.dispose();const v=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),E===!0&&(M=3);let b=c.attributes.position.count*M,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const L=new Float32Array(b*I*4*g),B=new vc(L,b,I,g);B.type=ji,B.needsUpdate=!0;const P=M*4;for(let V=0;V<g;V++){const q=y[V],k=T[V],N=R[V],X=b*I*4*V;for(let K=0;K<q.count;K++){const $=K*P;v===!0&&(a.fromBufferAttribute(q,K),L[X+$+0]=a.x,L[X+$+1]=a.y,L[X+$+2]=a.z,L[X+$+3]=0),x===!0&&(a.fromBufferAttribute(k,K),L[X+$+4]=a.x,L[X+$+5]=a.y,L[X+$+6]=a.z,L[X+$+7]=0),E===!0&&(a.fromBufferAttribute(N,K),L[X+$+8]=a.x,L[X+$+9]=a.y,L[X+$+10]=a.z,L[X+$+11]=N.itemSize===4?a.w:1)}}p={count:g,texture:B,size:new at(b,I)},s.set(c,p),c.addEventListener("dispose",F)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];const S=c.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",S),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=i[c.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];i[c.id]=g}for(let x=0;x<_;x++){const E=g[x];E[0]=x,E[1]=f[x]}g.sort(og);for(let x=0;x<8;x++)x<_&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(ag);const p=c.morphAttributes.position,m=c.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const E=o[x],y=E[0],T=E[1];y!==Number.MAX_SAFE_INTEGER&&T?(p&&c.getAttribute("morphTarget"+x)!==p[y]&&c.setAttribute("morphTarget"+x,p[y]),m&&c.getAttribute("morphNormal"+x)!==m[y]&&c.setAttribute("morphNormal"+x,m[y]),n[x]=T,S+=T):(p&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),m&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),n[x]=0)}const v=c.morphTargetsRelative?1:1-S;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:h}}function lg(r,t,e,i){let n=new WeakMap;function s(h){const l=i.render.frame,c=h.geometry,u=t.get(h,c);if(n.get(u)!==l&&(t.update(u),n.set(u,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),n.get(h)!==l&&(e.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,r.ARRAY_BUFFER),n.set(h,l))),h.isSkinnedMesh){const f=h.skeleton;n.get(f)!==l&&(f.update(),n.set(f,l))}return u}function a(){n=new WeakMap}function o(h){const l=h.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class Cc extends Re{constructor(t,e,i,n,s,a,o,h,l,c){if(c=c!==void 0?c:wn,c!==wn&&c!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===wn&&(i=qi),i===void 0&&c===fs&&(i=En),super(null,n,s,a,o,h,c,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=h!==void 0?h:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Rc=new Re,Pc=new Cc(1,1);Pc.compareFunction=mc;const Lc=new vc,Dc=new Yd,Ic=new Ec,fl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),_l=new Float32Array(4);function Ms(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=fl[n];if(s===void 0&&(s=new Float32Array(n),fl[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function me(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function ge(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Qr(r,t){let e=pl[t];e===void 0&&(e=new Int32Array(t),pl[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function cg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function ug(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2fv(this.addr,t),ge(e,t)}}function dg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;r.uniform3fv(this.addr,t),ge(e,t)}}function fg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4fv(this.addr,t),ge(e,t)}}function pg(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;_l.set(i),r.uniformMatrix2fv(this.addr,!1,_l),ge(e,i)}}function mg(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;gl.set(i),r.uniformMatrix3fv(this.addr,!1,gl),ge(e,i)}}function gg(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;ml.set(i),r.uniformMatrix4fv(this.addr,!1,ml),ge(e,i)}}function _g(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function xg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2iv(this.addr,t),ge(e,t)}}function vg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;r.uniform3iv(this.addr,t),ge(e,t)}}function yg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4iv(this.addr,t),ge(e,t)}}function Sg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Mg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2uiv(this.addr,t),ge(e,t)}}function Tg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;r.uniform3uiv(this.addr,t),ge(e,t)}}function bg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4uiv(this.addr,t),ge(e,t)}}function Eg(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);const s=this.type===r.SAMPLER_2D_SHADOW?Pc:Rc;e.setTexture2D(t||s,n)}function wg(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Dc,n)}function Ag(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Ic,n)}function Cg(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Lc,n)}function Rg(r){switch(r){case 5126:return cg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return yg;case 5125:return Sg;case 36294:return Mg;case 36295:return Tg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Cg}}function Pg(r,t){r.uniform1fv(this.addr,t)}function Lg(r,t){const e=Ms(t,this.size,2);r.uniform2fv(this.addr,e)}function Dg(r,t){const e=Ms(t,this.size,3);r.uniform3fv(this.addr,e)}function Ig(r,t){const e=Ms(t,this.size,4);r.uniform4fv(this.addr,e)}function Ug(r,t){const e=Ms(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Og(r,t){const e=Ms(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Fg(r,t){const e=Ms(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Ng(r,t){r.uniform1iv(this.addr,t)}function kg(r,t){r.uniform2iv(this.addr,t)}function Bg(r,t){r.uniform3iv(this.addr,t)}function zg(r,t){r.uniform4iv(this.addr,t)}function Hg(r,t){r.uniform1uiv(this.addr,t)}function Vg(r,t){r.uniform2uiv(this.addr,t)}function Gg(r,t){r.uniform3uiv(this.addr,t)}function Xg(r,t){r.uniform4uiv(this.addr,t)}function Wg(r,t,e){const i=this.cache,n=t.length,s=Qr(e,n);me(i,s)||(r.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Rc,s[a])}function Yg(r,t,e){const i=this.cache,n=t.length,s=Qr(e,n);me(i,s)||(r.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Dc,s[a])}function qg(r,t,e){const i=this.cache,n=t.length,s=Qr(e,n);me(i,s)||(r.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Ic,s[a])}function jg(r,t,e){const i=this.cache,n=t.length,s=Qr(e,n);me(i,s)||(r.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Lc,s[a])}function Jg(r){switch(r){case 5126:return Pg;case 35664:return Lg;case 35665:return Dg;case 35666:return Ig;case 35674:return Ug;case 35675:return Og;case 35676:return Fg;case 5124:case 35670:return Ng;case 35667:case 35671:return kg;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return Hg;case 36294:return Vg;case 36295:return Gg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return jg}}class Zg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Rg(e.type)}}class $g{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jg(e.type)}}class Kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function xl(r,t){r.seq.push(t),r.map[t.id]=t}function Qg(r,t,e){const i=r.name,n=i.length;for(Fa.lastIndex=0;;){const s=Fa.exec(i),a=Fa.lastIndex;let o=s[1];const h=s[2]==="]",l=s[3];if(h&&(o=o|0),l===void 0||l==="["&&a+2===n){xl(e,l===void 0?new Zg(o,r,t):new $g(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Kg(o),xl(e,u)),e=u}}}class Dr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);Qg(s,a,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const o=e[s],h=i[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function vl(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const t0=37297;let e0=0;function i0(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function n0(r){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(r);let i;switch(t===e?i="":t===Br&&e===kr?i="LinearDisplayP3ToLinearSRGB":t===kr&&e===Br&&(i="LinearSRGBToLinearDisplayP3"),r){case ki:case Zr:return[i,"LinearTransferOETF"];case se:case Co:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function yl(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+i0(r.getShaderSource(t),a)}else return n}function s0(r,t){const e=n0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function r0(r,t){let e;switch(t){case md:e="Linear";break;case gd:e="Reinhard";break;case _d:e="OptimizedCineon";break;case xd:e="ACESFilmic";break;case yd:e="AgX";break;case vd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function a0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(es).join(`
`)}function o0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(es).join(`
`)}function h0(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function l0(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function es(r){return r!==""}function Sl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ml(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const c0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(r){return r.replace(c0,d0)}const u0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function d0(r,t){let e=Ot[t];if(e===void 0){const i=u0.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ho(e)}const f0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tl(r){return r.replace(f0,p0)}function p0(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function bl(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function m0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===nc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Gu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function g0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case cs:case us:t="ENVMAP_TYPE_CUBE";break;case Jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function x0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case sc:t="ENVMAP_BLENDING_MULTIPLY";break;case fd:t="ENVMAP_BLENDING_MIX";break;case pd:t="ENVMAP_BLENDING_ADD";break}return t}function v0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function y0(r,t,e,i){const n=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const h=m0(e),l=g0(e),c=_0(e),u=x0(e),f=v0(e),d=e.isWebGL2?"":a0(e),_=o0(e),g=h0(s),p=n.createProgram();let m,S,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(es).join(`
`),m.length>0&&(m+=`
`),S=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(es).join(`
`),S.length>0&&(S+=`
`)):(m=[bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),S=[d,bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Qi?r0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,s0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),a=ho(a),a=Sl(a,e),a=Ml(a,e),o=ho(o),o=Sl(o,e),o=Ml(o,e),a=Tl(a),o=Tl(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const x=v+m+a,E=v+S+o,y=vl(n,n.VERTEX_SHADER,x),T=vl(n,n.FRAGMENT_SHADER,E);n.attachShader(p,y),n.attachShader(p,T),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function R(L){if(r.debug.checkShaderErrors){const B=n.getProgramInfoLog(p).trim(),P=n.getShaderInfoLog(y).trim(),F=n.getShaderInfoLog(T).trim();let V=!0,q=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,p,y,T);else{const k=yl(n,y,"vertex"),N=yl(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+k+`
`+N)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(P===""||F==="")&&(q=!1);q&&(L.diagnostics={runnable:V,programLog:B,vertexShader:{log:P,prefix:m},fragmentShader:{log:F,prefix:S}})}n.deleteShader(y),n.deleteShader(T),M=new Dr(n,p),b=l0(n,p)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=n.getProgramParameter(p,t0)),I},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=T,this}let S0=0;class M0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new T0(t),e.set(t,i)),i}}class T0{constructor(t){this.id=S0++,this.code=t,this.usedTimes=0}}function b0(r,t,e,i,n,s,a){const o=new Po,h=new M0,l=[],c=n.isWebGL2,u=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,b,I,L,B){const P=L.fog,F=B.geometry,V=M.isMeshStandardMaterial?L.environment:null,q=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),k=q&&q.mapping===Jr?q.image.height:null,N=_[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const X=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,K=X!==void 0?X.length:0;let $=0;F.morphAttributes.position!==void 0&&($=1),F.morphAttributes.normal!==void 0&&($=2),F.morphAttributes.color!==void 0&&($=3);let G,Z,tt,ft;if(N){const Le=vi[N];G=Le.vertexShader,Z=Le.fragmentShader}else G=M.vertexShader,Z=M.fragmentShader,h.update(M),tt=h.getVertexShaderID(M),ft=h.getFragmentShaderID(M);const pt=r.getRenderTarget(),Tt=B.isInstancedMesh===!0,_t=B.isBatchedMesh===!0,St=!!M.map,Pt=!!M.matcap,z=!!q,pe=!!M.aoMap,Mt=!!M.lightMap,ot=!!M.bumpMap,ut=!!M.normalMap,Wt=!!M.displacementMap,xt=!!M.emissiveMap,C=!!M.metalnessMap,w=!!M.roughnessMap,W=M.anisotropy>0,it=M.clearcoat>0,Q=M.iridescence>0,nt=M.sheen>0,vt=M.transmission>0,ct=W&&!!M.anisotropyMap,mt=it&&!!M.clearcoatMap,At=it&&!!M.clearcoatNormalMap,Ft=it&&!!M.clearcoatRoughnessMap,et=Q&&!!M.iridescenceMap,Yt=Q&&!!M.iridescenceThicknessMap,Ht=nt&&!!M.sheenColorMap,Lt=nt&&!!M.sheenRoughnessMap,bt=!!M.specularMap,gt=!!M.specularColorMap,Ut=!!M.specularIntensityMap,Xt=vt&&!!M.transmissionMap,ae=vt&&!!M.thicknessMap,kt=!!M.gradientMap,st=!!M.alphaMap,D=M.alphaTest>0,ht=!!M.alphaHash,lt=!!M.extensions,Ct=!!F.attributes.uv1,Et=!!F.attributes.uv2,Zt=!!F.attributes.uv3;let $t=Qi;return M.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&($t=r.toneMapping),{isWebGL2:c,shaderID:N,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:Z,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:ft,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:_t,instancing:Tt,instancingColor:Tt&&B.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:pt===null?r.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:ki,map:St,matcap:Pt,envMap:z,envMapMode:z&&q.mapping,envMapCubeUVHeight:k,aoMap:pe,lightMap:Mt,bumpMap:ot,normalMap:ut,displacementMap:f&&Wt,emissiveMap:xt,normalMapObjectSpace:ut&&M.normalMapType===Dd,normalMapTangentSpace:ut&&M.normalMapType===pc,metalnessMap:C,roughnessMap:w,anisotropy:W,anisotropyMap:ct,clearcoat:it,clearcoatMap:mt,clearcoatNormalMap:At,clearcoatRoughnessMap:Ft,iridescence:Q,iridescenceMap:et,iridescenceThicknessMap:Yt,sheen:nt,sheenColorMap:Ht,sheenRoughnessMap:Lt,specularMap:bt,specularColorMap:gt,specularIntensityMap:Ut,transmission:vt,transmissionMap:Xt,thicknessMap:ae,gradientMap:kt,opaque:M.transparent===!1&&M.blending===bn,alphaMap:st,alphaTest:D,alphaHash:ht,combine:M.combine,mapUv:St&&g(M.map.channel),aoMapUv:pe&&g(M.aoMap.channel),lightMapUv:Mt&&g(M.lightMap.channel),bumpMapUv:ot&&g(M.bumpMap.channel),normalMapUv:ut&&g(M.normalMap.channel),displacementMapUv:Wt&&g(M.displacementMap.channel),emissiveMapUv:xt&&g(M.emissiveMap.channel),metalnessMapUv:C&&g(M.metalnessMap.channel),roughnessMapUv:w&&g(M.roughnessMap.channel),anisotropyMapUv:ct&&g(M.anisotropyMap.channel),clearcoatMapUv:mt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:At&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&g(M.sheenRoughnessMap.channel),specularMapUv:bt&&g(M.specularMap.channel),specularColorMapUv:gt&&g(M.specularColorMap.channel),specularIntensityMapUv:Ut&&g(M.specularIntensityMap.channel),transmissionMapUv:Xt&&g(M.transmissionMap.channel),thicknessMapUv:ae&&g(M.thicknessMap.channel),alphaMapUv:st&&g(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ut||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ct,vertexUv2s:Et,vertexUv3s:Zt,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(St||st),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:$,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:$t,useLegacyLights:r._useLegacyLights,decodeVideoTexture:St&&M.map.isVideoTexture===!0&&qt.getTransfer(M.map.colorSpace)===Qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Fi,flipSided:M.side===Be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:lt&&M.extensions.derivatives===!0,extensionFragDepth:lt&&M.extensions.fragDepth===!0,extensionDrawBuffers:lt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)b.push(I),b.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(S(b,M),v(b,M),b.push(r.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function S(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function x(M){const b=_[M.type];let I;if(b){const L=vi[b];I=af.clone(L.uniforms)}else I=M.uniforms;return I}function E(M,b){let I;for(let L=0,B=l.length;L<B;L++){const P=l[L];if(P.cacheKey===b){I=P,++I.usedTimes;break}}return I===void 0&&(I=new y0(r,b,M,s),l.push(I)),I}function y(M){if(--M.usedTimes===0){const b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function T(M){h.remove(M)}function R(){h.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:E,releaseProgram:y,releaseShaderCache:T,programs:l,dispose:R}}function E0(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function w0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function El(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function wl(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,f,d,_,g,p){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},r[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=p),t++,m}function o(u,f,d,_,g,p){const m=a(u,f,d,_,g,p);d.transmission>0?i.push(m):d.transparent===!0?n.push(m):e.push(m)}function h(u,f,d,_,g,p){const m=a(u,f,d,_,g,p);d.transmission>0?i.unshift(m):d.transparent===!0?n.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||w0),i.length>1&&i.sort(f||El),n.length>1&&n.sort(f||El)}function c(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:h,finish:c,sort:l}}function A0(){let r=new WeakMap;function t(i,n){const s=r.get(i);let a;return s===void 0?(a=new wl,r.set(i,[a])):n>=s.length?(a=new wl,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function C0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Gt};break;case"SpotLight":e={position:new O,direction:new O,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function R0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let P0=0;function L0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function D0(r,t){const e=new C0,i=R0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,a=new ue,o=new ue;function h(c,u){let f=0,d=0,_=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let g=0,p=0,m=0,S=0,v=0,x=0,E=0,y=0,T=0,R=0,M=0;c.sort(L0);const b=u===!0?Math.PI:1;for(let L=0,B=c.length;L<B;L++){const P=c[L],F=P.color,V=P.intensity,q=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*V*b,d+=F.g*V*b,_+=F.b*V*b;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],V);M++}else if(P.isDirectionalLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const X=P.shadow,K=i.get(P);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=k,n.directionalShadowMatrix[g]=P.shadow.matrix,x++}n.directional[g]=N,g++}else if(P.isSpotLight){const N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(F).multiplyScalar(V*b),N.distance=q,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[m]=N;const X=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,X.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[m]=X.matrix,P.castShadow){const K=i.get(P);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,n.spotShadow[m]=K,n.spotShadowMap[m]=k,y++}m++}else if(P.isRectAreaLight){const N=e.get(P);N.color.copy(F).multiplyScalar(V),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[S]=N,S++}else if(P.isPointLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*b),N.distance=P.distance,N.decay=P.decay,P.castShadow){const X=P.shadow,K=i.get(P);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,n.pointShadow[p]=K,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=P.shadow.matrix,E++}n.point[p]=N,p++}else if(P.isHemisphereLight){const N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(V*b),N.groundColor.copy(P.groundColor).multiplyScalar(V*b),n.hemi[v]=N,v++}}S>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=_;const I=n.hash;(I.directionalLength!==g||I.pointLength!==p||I.spotLength!==m||I.rectAreaLength!==S||I.hemiLength!==v||I.numDirectionalShadows!==x||I.numPointShadows!==E||I.numSpotShadows!==y||I.numSpotMaps!==T||I.numLightProbes!==M)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=S,n.point.length=p,n.hemi.length=v,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+T-R,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=M,I.directionalLength=g,I.pointLength=p,I.spotLength=m,I.rectAreaLength=S,I.hemiLength=v,I.numDirectionalShadows=x,I.numPointShadows=E,I.numSpotShadows=y,I.numSpotMaps=T,I.numLightProbes=M,n.version=P0++)}function l(c,u){let f=0,d=0,_=0,g=0,p=0;const m=u.matrixWorldInverse;for(let S=0,v=c.length;S<v;S++){const x=c[S];if(x.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(x.isSpotLight){const E=n.spot[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),_++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),o.identity(),a.copy(x.matrixWorld),a.premultiply(m),o.extractRotation(a),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const E=n.hemi[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:h,setupView:l,state:n}}function Al(r,t){const e=new D0(r,t),i=[],n=[];function s(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function h(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:h,setupLightsView:l,pushLight:a,pushShadow:o}}function I0(r,t){let e=new WeakMap;function i(s,a=0){const o=e.get(s);let h;return o===void 0?(h=new Al(r,t),e.set(s,[h])):a>=o.length?(h=new Al(r,t),o.push(h)):h=o[a],h}function n(){e=new WeakMap}return{get:i,dispose:n}}class U0 extends Ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class O0 extends Ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const F0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N0=`uniform sampler2D shadow_pass;
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
}`;function k0(r,t,e){let i=new Lo;const n=new at,s=new at,a=new ye,o=new U0({depthPacking:Ld}),h=new O0,l={},c=e.maxTextureSize,u={[sn]:Be,[Be]:sn,[Fi]:Fi},f=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:F0,fragmentShader:N0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new bi;_.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ai(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let m=this.type;this.render=function(y,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const M=r.getRenderTarget(),b=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Ki),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=m!==Di&&this.type===Di,P=m===Di&&this.type!==Di;for(let F=0,V=y.length;F<V;F++){const q=y[F],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);const N=k.getFrameExtents();if(n.multiply(N),s.copy(k.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/N.x),n.x=s.x*N.x,k.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/N.y),n.y=s.y*N.y,k.mapSize.y=s.y)),k.map===null||B===!0||P===!0){const K=this.type!==Di?{minFilter:Ue,magFilter:Ue}:{};k.map!==null&&k.map.dispose(),k.map=new Dn(n.x,n.y,K),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const X=k.getViewportCount();for(let K=0;K<X;K++){const $=k.getViewport(K);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),L.viewport(a),k.updateMatrices(q,K),i=k.getFrustum(),x(T,R,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===Di&&S(k,R),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(M,b,I)};function S(y,T){const R=t.update(g);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Dn(n.x,n.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(T,null,R,f,g,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(T,null,R,d,g,null)}function v(y,T,R,M){let b=null;const I=R.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)b=I;else if(b=R.isPointLight===!0?h:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=b.uuid,B=T.uuid;let P=l[L];P===void 0&&(P={},l[L]=P);let F=P[B];F===void 0&&(F=b.clone(),P[B]=F,T.addEventListener("dispose",E)),b=F}if(b.visible=T.visible,b.wireframe=T.wireframe,M===Di?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const L=r.properties.get(b);L.light=R}return b}function x(y,T,R,M,b){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===Di)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld);const B=t.update(y),P=y.material;if(Array.isArray(P)){const F=B.groups;for(let V=0,q=F.length;V<q;V++){const k=F[V],N=P[k.materialIndex];if(N&&N.visible){const X=v(y,N,M,b);y.onBeforeShadow(r,y,T,R,B,X,k),r.renderBufferDirect(R,null,B,X,y,k),y.onAfterShadow(r,y,T,R,B,X,k)}}}else if(P.visible){const F=v(y,P,M,b);y.onBeforeShadow(r,y,T,R,B,F,null),r.renderBufferDirect(R,null,B,F,y,null),y.onAfterShadow(r,y,T,R,B,F,null)}}const L=y.children;for(let B=0,P=L.length;B<P;B++)x(L[B],T,R,M,b)}function E(y){y.target.removeEventListener("dispose",E);for(const R in l){const M=l[R],b=y.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function B0(r,t,e){const i=e.isWebGL2;function n(){let D=!1;const ht=new ye;let lt=null;const Ct=new ye(0,0,0,0);return{setMask:function(Et){lt!==Et&&!D&&(r.colorMask(Et,Et,Et,Et),lt=Et)},setLocked:function(Et){D=Et},setClear:function(Et,Zt,$t,_e,Le){Le===!0&&(Et*=_e,Zt*=_e,$t*=_e),ht.set(Et,Zt,$t,_e),Ct.equals(ht)===!1&&(r.clearColor(Et,Zt,$t,_e),Ct.copy(ht))},reset:function(){D=!1,lt=null,Ct.set(-1,0,0,0)}}}function s(){let D=!1,ht=null,lt=null,Ct=null;return{setTest:function(Et){Et?_t(r.DEPTH_TEST):St(r.DEPTH_TEST)},setMask:function(Et){ht!==Et&&!D&&(r.depthMask(Et),ht=Et)},setFunc:function(Et){if(lt!==Et){switch(Et){case ad:r.depthFunc(r.NEVER);break;case od:r.depthFunc(r.ALWAYS);break;case hd:r.depthFunc(r.LESS);break;case Fr:r.depthFunc(r.LEQUAL);break;case ld:r.depthFunc(r.EQUAL);break;case cd:r.depthFunc(r.GEQUAL);break;case ud:r.depthFunc(r.GREATER);break;case dd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}lt=Et}},setLocked:function(Et){D=Et},setClear:function(Et){Ct!==Et&&(r.clearDepth(Et),Ct=Et)},reset:function(){D=!1,ht=null,lt=null,Ct=null}}}function a(){let D=!1,ht=null,lt=null,Ct=null,Et=null,Zt=null,$t=null,_e=null,Le=null;return{setTest:function(Kt){D||(Kt?_t(r.STENCIL_TEST):St(r.STENCIL_TEST))},setMask:function(Kt){ht!==Kt&&!D&&(r.stencilMask(Kt),ht=Kt)},setFunc:function(Kt,De,gi){(lt!==Kt||Ct!==De||Et!==gi)&&(r.stencilFunc(Kt,De,gi),lt=Kt,Ct=De,Et=gi)},setOp:function(Kt,De,gi){(Zt!==Kt||$t!==De||_e!==gi)&&(r.stencilOp(Kt,De,gi),Zt=Kt,$t=De,_e=gi)},setLocked:function(Kt){D=Kt},setClear:function(Kt){Le!==Kt&&(r.clearStencil(Kt),Le=Kt)},reset:function(){D=!1,ht=null,lt=null,Ct=null,Et=null,Zt=null,$t=null,_e=null,Le=null}}}const o=new n,h=new s,l=new a,c=new WeakMap,u=new WeakMap;let f={},d={},_=new WeakMap,g=[],p=null,m=!1,S=null,v=null,x=null,E=null,y=null,T=null,R=null,M=new Gt(0,0,0),b=0,I=!1,L=null,B=null,P=null,F=null,V=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,N=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=N>=1):X.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=N>=2);let K=null,$={};const G=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),tt=new ye().fromArray(G),ft=new ye().fromArray(Z);function pt(D,ht,lt,Ct){const Et=new Uint8Array(4),Zt=r.createTexture();r.bindTexture(D,Zt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $t=0;$t<lt;$t++)i&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(ht,0,r.RGBA,1,1,Ct,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(ht+$t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return Zt}const Tt={};Tt[r.TEXTURE_2D]=pt(r.TEXTURE_2D,r.TEXTURE_2D,1),Tt[r.TEXTURE_CUBE_MAP]=pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Tt[r.TEXTURE_2D_ARRAY]=pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Tt[r.TEXTURE_3D]=pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),h.setClear(1),l.setClear(0),_t(r.DEPTH_TEST),h.setFunc(Fr),xt(!1),C(hh),_t(r.CULL_FACE),ut(Ki);function _t(D){f[D]!==!0&&(r.enable(D),f[D]=!0)}function St(D){f[D]!==!1&&(r.disable(D),f[D]=!1)}function Pt(D,ht){return d[D]!==ht?(r.bindFramebuffer(D,ht),d[D]=ht,i&&(D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ht),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ht)),!0):!1}function z(D,ht){let lt=g,Ct=!1;if(D)if(lt=_.get(ht),lt===void 0&&(lt=[],_.set(ht,lt)),D.isWebGLMultipleRenderTargets){const Et=D.texture;if(lt.length!==Et.length||lt[0]!==r.COLOR_ATTACHMENT0){for(let Zt=0,$t=Et.length;Zt<$t;Zt++)lt[Zt]=r.COLOR_ATTACHMENT0+Zt;lt.length=Et.length,Ct=!0}}else lt[0]!==r.COLOR_ATTACHMENT0&&(lt[0]=r.COLOR_ATTACHMENT0,Ct=!0);else lt[0]!==r.BACK&&(lt[0]=r.BACK,Ct=!0);Ct&&(e.isWebGL2?r.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function pe(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const Mt={[yn]:r.FUNC_ADD,[Wu]:r.FUNC_SUBTRACT,[Yu]:r.FUNC_REVERSE_SUBTRACT};if(i)Mt[dh]=r.MIN,Mt[fh]=r.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(Mt[dh]=D.MIN_EXT,Mt[fh]=D.MAX_EXT)}const ot={[qu]:r.ZERO,[ju]:r.ONE,[Ju]:r.SRC_COLOR,[Qa]:r.SRC_ALPHA,[ed]:r.SRC_ALPHA_SATURATE,[Qu]:r.DST_COLOR,[$u]:r.DST_ALPHA,[Zu]:r.ONE_MINUS_SRC_COLOR,[to]:r.ONE_MINUS_SRC_ALPHA,[td]:r.ONE_MINUS_DST_COLOR,[Ku]:r.ONE_MINUS_DST_ALPHA,[id]:r.CONSTANT_COLOR,[nd]:r.ONE_MINUS_CONSTANT_COLOR,[sd]:r.CONSTANT_ALPHA,[rd]:r.ONE_MINUS_CONSTANT_ALPHA};function ut(D,ht,lt,Ct,Et,Zt,$t,_e,Le,Kt){if(D===Ki){m===!0&&(St(r.BLEND),m=!1);return}if(m===!1&&(_t(r.BLEND),m=!0),D!==Xu){if(D!==S||Kt!==I){if((v!==yn||y!==yn)&&(r.blendEquation(r.FUNC_ADD),v=yn,y=yn),Kt)switch(D){case bn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lh:r.blendFunc(r.ONE,r.ONE);break;case ch:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case uh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case bn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ch:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case uh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,E=null,T=null,R=null,M.set(0,0,0),b=0,S=D,I=Kt}return}Et=Et||ht,Zt=Zt||lt,$t=$t||Ct,(ht!==v||Et!==y)&&(r.blendEquationSeparate(Mt[ht],Mt[Et]),v=ht,y=Et),(lt!==x||Ct!==E||Zt!==T||$t!==R)&&(r.blendFuncSeparate(ot[lt],ot[Ct],ot[Zt],ot[$t]),x=lt,E=Ct,T=Zt,R=$t),(_e.equals(M)===!1||Le!==b)&&(r.blendColor(_e.r,_e.g,_e.b,Le),M.copy(_e),b=Le),S=D,I=!1}function Wt(D,ht){D.side===Fi?St(r.CULL_FACE):_t(r.CULL_FACE);let lt=D.side===Be;ht&&(lt=!lt),xt(lt),D.blending===bn&&D.transparent===!1?ut(Ki):ut(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),h.setFunc(D.depthFunc),h.setTest(D.depthTest),h.setMask(D.depthWrite),o.setMask(D.colorWrite);const Ct=D.stencilWrite;l.setTest(Ct),Ct&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),W(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):St(r.SAMPLE_ALPHA_TO_COVERAGE)}function xt(D){L!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),L=D)}function C(D){D!==Hu?(_t(r.CULL_FACE),D!==B&&(D===hh?r.cullFace(r.BACK):D===Vu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):St(r.CULL_FACE),B=D}function w(D){D!==P&&(k&&r.lineWidth(D),P=D)}function W(D,ht,lt){D?(_t(r.POLYGON_OFFSET_FILL),(F!==ht||V!==lt)&&(r.polygonOffset(ht,lt),F=ht,V=lt)):St(r.POLYGON_OFFSET_FILL)}function it(D){D?_t(r.SCISSOR_TEST):St(r.SCISSOR_TEST)}function Q(D){D===void 0&&(D=r.TEXTURE0+q-1),K!==D&&(r.activeTexture(D),K=D)}function nt(D,ht,lt){lt===void 0&&(K===null?lt=r.TEXTURE0+q-1:lt=K);let Ct=$[lt];Ct===void 0&&(Ct={type:void 0,texture:void 0},$[lt]=Ct),(Ct.type!==D||Ct.texture!==ht)&&(K!==lt&&(r.activeTexture(lt),K=lt),r.bindTexture(D,ht||Tt[D]),Ct.type=D,Ct.texture=ht)}function vt(){const D=$[K];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ct(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Yt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(D){tt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function Xt(D){ft.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),ft.copy(D))}function ae(D,ht){let lt=u.get(ht);lt===void 0&&(lt=new WeakMap,u.set(ht,lt));let Ct=lt.get(D);Ct===void 0&&(Ct=r.getUniformBlockIndex(ht,D.name),lt.set(D,Ct))}function kt(D,ht){const Ct=u.get(ht).get(D);c.get(ht)!==Ct&&(r.uniformBlockBinding(ht,Ct,D.__bindingPointIndex),c.set(ht,Ct))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},K=null,$={},d={},_=new WeakMap,g=[],p=null,m=!1,S=null,v=null,x=null,E=null,y=null,T=null,R=null,M=new Gt(0,0,0),b=0,I=!1,L=null,B=null,P=null,F=null,V=null,tt.set(0,0,r.canvas.width,r.canvas.height),ft.set(0,0,r.canvas.width,r.canvas.height),o.reset(),h.reset(),l.reset()}return{buffers:{color:o,depth:h,stencil:l},enable:_t,disable:St,bindFramebuffer:Pt,drawBuffers:z,useProgram:pe,setBlending:ut,setMaterial:Wt,setFlipSided:xt,setCullFace:C,setLineWidth:w,setPolygonOffset:W,setScissorTest:it,activeTexture:Q,bindTexture:nt,unbindTexture:vt,compressedTexImage2D:ct,compressedTexImage3D:mt,texImage2D:bt,texImage3D:gt,updateUBOMapping:ae,uniformBlockBinding:kt,texStorage2D:Ht,texStorage3D:Lt,texSubImage2D:At,texSubImage3D:Ft,compressedTexSubImage2D:et,compressedTexSubImage3D:Yt,scissor:Ut,viewport:Xt,reset:st}}function z0(r,t,e,i,n,s,a){const o=n.isWebGL2,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return d?new OffscreenCanvas(C,w):zs("canvas")}function g(C,w,W,it){let Q=1;if((C.width>it||C.height>it)&&(Q=it/Math.max(C.width,C.height)),Q<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const nt=w?oo:Math.floor,vt=nt(Q*C.width),ct=nt(Q*C.height);u===void 0&&(u=_(vt,ct));const mt=W?_(vt,ct):u;return mt.width=vt,mt.height=ct,mt.getContext("2d").drawImage(C,0,0,vt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+vt+"x"+ct+")."),mt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return Gh(C.width)&&Gh(C.height)}function m(C){return o?!1:C.wrapS!==pi||C.wrapT!==pi||C.minFilter!==Ue&&C.minFilter!==Fe}function S(C,w){return C.generateMipmaps&&w&&C.minFilter!==Ue&&C.minFilter!==Fe}function v(C){r.generateMipmap(C)}function x(C,w,W,it,Q=!1){if(o===!1)return w;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let nt=w;if(w===r.RED&&(W===r.FLOAT&&(nt=r.R32F),W===r.HALF_FLOAT&&(nt=r.R16F),W===r.UNSIGNED_BYTE&&(nt=r.R8)),w===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(nt=r.R8UI),W===r.UNSIGNED_SHORT&&(nt=r.R16UI),W===r.UNSIGNED_INT&&(nt=r.R32UI),W===r.BYTE&&(nt=r.R8I),W===r.SHORT&&(nt=r.R16I),W===r.INT&&(nt=r.R32I)),w===r.RG&&(W===r.FLOAT&&(nt=r.RG32F),W===r.HALF_FLOAT&&(nt=r.RG16F),W===r.UNSIGNED_BYTE&&(nt=r.RG8)),w===r.RGBA){const vt=Q?Nr:qt.getTransfer(it);W===r.FLOAT&&(nt=r.RGBA32F),W===r.HALF_FLOAT&&(nt=r.RGBA16F),W===r.UNSIGNED_BYTE&&(nt=vt===Qt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(nt=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(nt=r.RGB5_A1)}return(nt===r.R16F||nt===r.R32F||nt===r.RG16F||nt===r.RG32F||nt===r.RGBA16F||nt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function E(C,w,W){return S(C,W)===!0||C.isFramebufferTexture&&C.minFilter!==Ue&&C.minFilter!==Fe?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function y(C){return C===Ue||C===ph||C===oa?r.NEAREST:r.LINEAR}function T(C){const w=C.target;w.removeEventListener("dispose",T),M(w),w.isVideoTexture&&c.delete(w)}function R(C){const w=C.target;w.removeEventListener("dispose",R),I(w)}function M(C){const w=i.get(C);if(w.__webglInit===void 0)return;const W=C.source,it=f.get(W);if(it){const Q=it[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(C),Object.keys(it).length===0&&f.delete(W)}i.remove(C)}function b(C){const w=i.get(C);r.deleteTexture(w.__webglTexture);const W=C.source,it=f.get(W);delete it[w.__cacheKey],a.memory.textures--}function I(C){const w=C.texture,W=i.get(C),it=i.get(w);if(it.__webglTexture!==void 0&&(r.deleteTexture(it.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(W.__webglFramebuffer[Q]))for(let nt=0;nt<W.__webglFramebuffer[Q].length;nt++)r.deleteFramebuffer(W.__webglFramebuffer[Q][nt]);else r.deleteFramebuffer(W.__webglFramebuffer[Q]);W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[Q])}else{if(Array.isArray(W.__webglFramebuffer))for(let Q=0;Q<W.__webglFramebuffer.length;Q++)r.deleteFramebuffer(W.__webglFramebuffer[Q]);else r.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let Q=0;Q<W.__webglColorRenderbuffer.length;Q++)W.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(W.__webglColorRenderbuffer[Q]);W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Q=0,nt=w.length;Q<nt;Q++){const vt=i.get(w[Q]);vt.__webglTexture&&(r.deleteTexture(vt.__webglTexture),a.memory.textures--),i.remove(w[Q])}i.remove(w),i.remove(C)}let L=0;function B(){L=0}function P(){const C=L;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),L+=1,C}function F(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function V(C,w){const W=i.get(C);if(C.isVideoTexture&&Wt(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const it=C.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(W,C,w);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+w)}function q(C,w){const W=i.get(C);if(C.version>0&&W.__version!==C.version){tt(W,C,w);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+w)}function k(C,w){const W=i.get(C);if(C.version>0&&W.__version!==C.version){tt(W,C,w);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+w)}function N(C,w){const W=i.get(C);if(C.version>0&&W.__version!==C.version){ft(W,C,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+w)}const X={[no]:r.REPEAT,[pi]:r.CLAMP_TO_EDGE,[so]:r.MIRRORED_REPEAT},K={[Ue]:r.NEAREST,[ph]:r.NEAREST_MIPMAP_NEAREST,[oa]:r.NEAREST_MIPMAP_LINEAR,[Fe]:r.LINEAR,[Sd]:r.LINEAR_MIPMAP_NEAREST,[ds]:r.LINEAR_MIPMAP_LINEAR},$={[Id]:r.NEVER,[Bd]:r.ALWAYS,[Ud]:r.LESS,[mc]:r.LEQUAL,[Od]:r.EQUAL,[kd]:r.GEQUAL,[Fd]:r.GREATER,[Nd]:r.NOTEQUAL};function G(C,w,W){if(W?(r.texParameteri(C,r.TEXTURE_WRAP_S,X[w.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,X[w.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,X[w.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,K[w.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,K[w.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==pi||w.wrapT!==pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,y(w.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,y(w.minFilter)),w.minFilter!==Ue&&w.minFilter!==Fe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,$[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ue||w.minFilter!==oa&&w.minFilter!==ds||w.type===ji&&t.has("OES_texture_float_linear")===!1||o===!1&&w.type===Bs&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(r.texParameterf(C,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Z(C,w){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",T));const it=w.source;let Q=f.get(it);Q===void 0&&(Q={},f.set(it,Q));const nt=F(w);if(nt!==C.__cacheKey){Q[nt]===void 0&&(Q[nt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,W=!0),Q[nt].usedTimes++;const vt=Q[C.__cacheKey];vt!==void 0&&(Q[C.__cacheKey].usedTimes--,vt.usedTimes===0&&b(w)),C.__cacheKey=nt,C.__webglTexture=Q[nt].texture}return W}function tt(C,w,W){let it=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(it=r.TEXTURE_3D);const Q=Z(C,w),nt=w.source;e.bindTexture(it,C.__webglTexture,r.TEXTURE0+W);const vt=i.get(nt);if(nt.version!==vt.__version||Q===!0){e.activeTexture(r.TEXTURE0+W);const ct=qt.getPrimaries(qt.workingColorSpace),mt=w.colorSpace===ri?null:qt.getPrimaries(w.colorSpace),At=w.colorSpace===ri||ct===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Ft=m(w)&&p(w.image)===!1;let et=g(w.image,Ft,!1,n.maxTextureSize);et=xt(w,et);const Yt=p(et)||o,Ht=s.convert(w.format,w.colorSpace);let Lt=s.convert(w.type),bt=x(w.internalFormat,Ht,Lt,w.colorSpace,w.isVideoTexture);G(it,w,Yt);let gt;const Ut=w.mipmaps,Xt=o&&w.isVideoTexture!==!0&&bt!==dc,ae=vt.__version===void 0||Q===!0,kt=E(w,et,Yt);if(w.isDepthTexture)bt=r.DEPTH_COMPONENT,o?w.type===ji?bt=r.DEPTH_COMPONENT32F:w.type===qi?bt=r.DEPTH_COMPONENT24:w.type===En?bt=r.DEPTH24_STENCIL8:bt=r.DEPTH_COMPONENT16:w.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===wn&&bt===r.DEPTH_COMPONENT&&w.type!==Ao&&w.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=qi,Lt=s.convert(w.type)),w.format===fs&&bt===r.DEPTH_COMPONENT&&(bt=r.DEPTH_STENCIL,w.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=En,Lt=s.convert(w.type))),ae&&(Xt?e.texStorage2D(r.TEXTURE_2D,1,bt,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,bt,et.width,et.height,0,Ht,Lt,null));else if(w.isDataTexture)if(Ut.length>0&&Yt){Xt&&ae&&e.texStorage2D(r.TEXTURE_2D,kt,bt,Ut[0].width,Ut[0].height);for(let st=0,D=Ut.length;st<D;st++)gt=Ut[st],Xt?e.texSubImage2D(r.TEXTURE_2D,st,0,0,gt.width,gt.height,Ht,Lt,gt.data):e.texImage2D(r.TEXTURE_2D,st,bt,gt.width,gt.height,0,Ht,Lt,gt.data);w.generateMipmaps=!1}else Xt?(ae&&e.texStorage2D(r.TEXTURE_2D,kt,bt,et.width,et.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,et.width,et.height,Ht,Lt,et.data)):e.texImage2D(r.TEXTURE_2D,0,bt,et.width,et.height,0,Ht,Lt,et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Xt&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,kt,bt,Ut[0].width,Ut[0].height,et.depth);for(let st=0,D=Ut.length;st<D;st++)gt=Ut[st],w.format!==mi?Ht!==null?Xt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,gt.width,gt.height,et.depth,Ht,gt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,st,bt,gt.width,gt.height,et.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,gt.width,gt.height,et.depth,Ht,Lt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,st,bt,gt.width,gt.height,et.depth,0,Ht,Lt,gt.data)}else{Xt&&ae&&e.texStorage2D(r.TEXTURE_2D,kt,bt,Ut[0].width,Ut[0].height);for(let st=0,D=Ut.length;st<D;st++)gt=Ut[st],w.format!==mi?Ht!==null?Xt?e.compressedTexSubImage2D(r.TEXTURE_2D,st,0,0,gt.width,gt.height,Ht,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,st,bt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage2D(r.TEXTURE_2D,st,0,0,gt.width,gt.height,Ht,Lt,gt.data):e.texImage2D(r.TEXTURE_2D,st,bt,gt.width,gt.height,0,Ht,Lt,gt.data)}else if(w.isDataArrayTexture)Xt?(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,kt,bt,et.width,et.height,et.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Ht,Lt,et.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,et.width,et.height,et.depth,0,Ht,Lt,et.data);else if(w.isData3DTexture)Xt?(ae&&e.texStorage3D(r.TEXTURE_3D,kt,bt,et.width,et.height,et.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Ht,Lt,et.data)):e.texImage3D(r.TEXTURE_3D,0,bt,et.width,et.height,et.depth,0,Ht,Lt,et.data);else if(w.isFramebufferTexture){if(ae)if(Xt)e.texStorage2D(r.TEXTURE_2D,kt,bt,et.width,et.height);else{let st=et.width,D=et.height;for(let ht=0;ht<kt;ht++)e.texImage2D(r.TEXTURE_2D,ht,bt,st,D,0,Ht,Lt,null),st>>=1,D>>=1}}else if(Ut.length>0&&Yt){Xt&&ae&&e.texStorage2D(r.TEXTURE_2D,kt,bt,Ut[0].width,Ut[0].height);for(let st=0,D=Ut.length;st<D;st++)gt=Ut[st],Xt?e.texSubImage2D(r.TEXTURE_2D,st,0,0,Ht,Lt,gt):e.texImage2D(r.TEXTURE_2D,st,bt,Ht,Lt,gt);w.generateMipmaps=!1}else Xt?(ae&&e.texStorage2D(r.TEXTURE_2D,kt,bt,et.width,et.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Ht,Lt,et)):e.texImage2D(r.TEXTURE_2D,0,bt,Ht,Lt,et);S(w,Yt)&&v(it),vt.__version=nt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ft(C,w,W){if(w.image.length!==6)return;const it=Z(C,w),Q=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+W);const nt=i.get(Q);if(Q.version!==nt.__version||it===!0){e.activeTexture(r.TEXTURE0+W);const vt=qt.getPrimaries(qt.workingColorSpace),ct=w.colorSpace===ri?null:qt.getPrimaries(w.colorSpace),mt=w.colorSpace===ri||vt===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const At=w.isCompressedTexture||w.image[0].isCompressedTexture,Ft=w.image[0]&&w.image[0].isDataTexture,et=[];for(let st=0;st<6;st++)!At&&!Ft?et[st]=g(w.image[st],!1,!0,n.maxCubemapSize):et[st]=Ft?w.image[st].image:w.image[st],et[st]=xt(w,et[st]);const Yt=et[0],Ht=p(Yt)||o,Lt=s.convert(w.format,w.colorSpace),bt=s.convert(w.type),gt=x(w.internalFormat,Lt,bt,w.colorSpace),Ut=o&&w.isVideoTexture!==!0,Xt=nt.__version===void 0||it===!0;let ae=E(w,Yt,Ht);G(r.TEXTURE_CUBE_MAP,w,Ht);let kt;if(At){Ut&&Xt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ae,gt,Yt.width,Yt.height);for(let st=0;st<6;st++){kt=et[st].mipmaps;for(let D=0;D<kt.length;D++){const ht=kt[D];w.format!==mi?Lt!==null?Ut?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D,0,0,ht.width,ht.height,Lt,ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D,gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D,0,0,ht.width,ht.height,Lt,bt,ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D,gt,ht.width,ht.height,0,Lt,bt,ht.data)}}}else{kt=w.mipmaps,Ut&&Xt&&(kt.length>0&&ae++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ae,gt,et[0].width,et[0].height));for(let st=0;st<6;st++)if(Ft){Ut?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,et[st].width,et[st].height,Lt,bt,et[st].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,gt,et[st].width,et[st].height,0,Lt,bt,et[st].data);for(let D=0;D<kt.length;D++){const lt=kt[D].image[st].image;Ut?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D+1,0,0,lt.width,lt.height,Lt,bt,lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D+1,gt,lt.width,lt.height,0,Lt,bt,lt.data)}}else{Ut?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Lt,bt,et[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,gt,Lt,bt,et[st]);for(let D=0;D<kt.length;D++){const ht=kt[D];Ut?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D+1,0,0,Lt,bt,ht.image[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D+1,gt,Lt,bt,ht.image[st])}}}S(w,Ht)&&v(r.TEXTURE_CUBE_MAP),nt.__version=Q.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function pt(C,w,W,it,Q,nt){const vt=s.convert(W.format,W.colorSpace),ct=s.convert(W.type),mt=x(W.internalFormat,vt,ct,W.colorSpace);if(!i.get(w).__hasExternalTextures){const Ft=Math.max(1,w.width>>nt),et=Math.max(1,w.height>>nt);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,nt,mt,Ft,et,w.depth,0,vt,ct,null):e.texImage2D(Q,nt,mt,Ft,et,0,vt,ct,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),ut(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,Q,i.get(W).__webglTexture,0,ot(w)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,it,Q,i.get(W).__webglTexture,nt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(C,w,W){if(r.bindRenderbuffer(r.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let it=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(W||ut(w)){const Q=w.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ji?it=r.DEPTH_COMPONENT32F:Q.type===qi&&(it=r.DEPTH_COMPONENT24));const nt=ot(w);ut(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nt,it,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,it,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,it,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){const it=ot(w);W&&ut(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,r.DEPTH24_STENCIL8,w.width,w.height):ut(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const it=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Q=0;Q<it.length;Q++){const nt=it[Q],vt=s.convert(nt.format,nt.colorSpace),ct=s.convert(nt.type),mt=x(nt.internalFormat,vt,ct,nt.colorSpace),At=ot(w);W&&ut(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,At,mt,w.width,w.height):ut(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,At,mt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,mt,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _t(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const it=i.get(w.depthTexture).__webglTexture,Q=ot(w);if(w.depthTexture.format===wn)ut(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0);else if(w.depthTexture.format===fs)ut(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function St(C){const w=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");_t(w.__webglFramebuffer,C)}else if(W){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]=r.createRenderbuffer(),Tt(w.__webglDepthbuffer[it],C,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),Tt(w.__webglDepthbuffer,C,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(C,w,W){const it=i.get(C);w!==void 0&&pt(it.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&St(C)}function z(C){const w=C.texture,W=i.get(C),it=i.get(w);C.addEventListener("dispose",R),C.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture()),it.__version=w.version,a.memory.textures++);const Q=C.isWebGLCubeRenderTarget===!0,nt=C.isWebGLMultipleRenderTargets===!0,vt=p(C)||o;if(Q){W.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(o&&w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[ct]=[];for(let mt=0;mt<w.mipmaps.length;mt++)W.__webglFramebuffer[ct][mt]=r.createFramebuffer()}else W.__webglFramebuffer[ct]=r.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let ct=0;ct<w.mipmaps.length;ct++)W.__webglFramebuffer[ct]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(nt)if(n.drawBuffers){const ct=C.texture;for(let mt=0,At=ct.length;mt<At;mt++){const Ft=i.get(ct[mt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&ut(C)===!1){const ct=nt?w:[w];W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let mt=0;mt<ct.length;mt++){const At=ct[mt];W.__webglColorRenderbuffer[mt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[mt]);const Ft=s.convert(At.format,At.colorSpace),et=s.convert(At.type),Yt=x(At.internalFormat,Ft,et,At.colorSpace,C.isXRRenderTarget===!0),Ht=ot(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,Yt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,W.__webglColorRenderbuffer[mt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Tt(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),G(r.TEXTURE_CUBE_MAP,w,vt);for(let ct=0;ct<6;ct++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)pt(W.__webglFramebuffer[ct][mt],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else pt(W.__webglFramebuffer[ct],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);S(w,vt)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const ct=C.texture;for(let mt=0,At=ct.length;mt<At;mt++){const Ft=ct[mt],et=i.get(Ft);e.bindTexture(r.TEXTURE_2D,et.__webglTexture),G(r.TEXTURE_2D,Ft,vt),pt(W.__webglFramebuffer,C,Ft,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,0),S(Ft,vt)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let ct=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ct=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,it.__webglTexture),G(ct,w,vt),o&&w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)pt(W.__webglFramebuffer[mt],C,w,r.COLOR_ATTACHMENT0,ct,mt);else pt(W.__webglFramebuffer,C,w,r.COLOR_ATTACHMENT0,ct,0);S(w,vt)&&v(ct),e.unbindTexture()}C.depthBuffer&&St(C)}function pe(C){const w=p(C)||o,W=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let it=0,Q=W.length;it<Q;it++){const nt=W[it];if(S(nt,w)){const vt=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ct=i.get(nt).__webglTexture;e.bindTexture(vt,ct),v(vt),e.unbindTexture()}}}function Mt(C){if(o&&C.samples>0&&ut(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],W=C.width,it=C.height;let Q=r.COLOR_BUFFER_BIT;const nt=[],vt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=i.get(C),mt=C.isWebGLMultipleRenderTargets===!0;if(mt)for(let At=0;At<w.length;At++)e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let At=0;At<w.length;At++){nt.push(r.COLOR_ATTACHMENT0+At),C.depthBuffer&&nt.push(vt);const Ft=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Ft===!1&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),mt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ct.__webglColorRenderbuffer[At]),Ft===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[vt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[vt])),mt){const et=i.get(w[At]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,W,it,0,0,W,it,Q,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),mt)for(let At=0;At<w.length;At++){e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,ct.__webglColorRenderbuffer[At]);const Ft=i.get(w[At]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,Ft,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function ot(C){return Math.min(n.maxSamples,C.samples)}function ut(C){const w=i.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Wt(C){const w=a.render.frame;c.get(C)!==w&&(c.set(C,w),C.update())}function xt(C,w){const W=C.colorSpace,it=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ro||W!==ki&&W!==ri&&(qt.getTransfer(W)===Qt?o===!1?t.has("EXT_sRGB")===!0&&it===mi?(C.format=ro,C.minFilter=Fe,C.generateMipmaps=!1):w=_c.sRGBToLinear(w):(it!==mi||Q!==tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}this.allocateTextureUnit=P,this.resetTextureUnits=B,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=k,this.setTextureCube=N,this.rebindTextures=Pt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ut}function H0(r,t,e){const i=e.isWebGL2;function n(s,a=ri){let o;const h=qt.getTransfer(a);if(s===tn)return r.UNSIGNED_BYTE;if(s===oc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===hc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Md)return r.BYTE;if(s===Td)return r.SHORT;if(s===Ao)return r.UNSIGNED_SHORT;if(s===ac)return r.INT;if(s===qi)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===Bs)return i?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===bd)return r.ALPHA;if(s===mi)return r.RGBA;if(s===Ed)return r.LUMINANCE;if(s===wd)return r.LUMINANCE_ALPHA;if(s===wn)return r.DEPTH_COMPONENT;if(s===fs)return r.DEPTH_STENCIL;if(s===ro)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ad)return r.RED;if(s===lc)return r.RED_INTEGER;if(s===Cd)return r.RG;if(s===cc)return r.RG_INTEGER;if(s===uc)return r.RGBA_INTEGER;if(s===ha||s===la||s===ca||s===ua)if(h===Qt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ha)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===la)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ha)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===la)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ca)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ua)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mh||s===gh||s===_h||s===xh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===mh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_h)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vh||s===yh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===vh)return h===Qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===yh)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sh||s===Mh||s===Th||s===bh||s===Eh||s===wh||s===Ah||s===Ch||s===Rh||s===Ph||s===Lh||s===Dh||s===Ih||s===Uh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Sh)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mh)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Th)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bh)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Eh)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wh)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ah)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ch)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rh)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ph)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lh)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dh)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ih)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uh)return h===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===da||s===Oh||s===Fh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===da)return h===Qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Oh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rd||s===Nh||s===kh||s===Bh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===da)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Nh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===En?i?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class V0 extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mn extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const G0={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const o=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,i),m=this._getHandJoint(l,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(G0)))}return o!==null&&(o.visible=n!==null),h!==null&&(h.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Mn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class X0 extends ys{constructor(t,e){super();const i=this;let n=null,s=1,a=null,o="local-floor",h=1,l=null,c=null,u=null,f=null,d=null,_=null;const g=e.getContextAttributes();let p=null,m=null;const S=[],v=[],x=new at;let E=null;const y=new si;y.layers.enable(1),y.viewport=new ye;const T=new si;T.layers.enable(2),T.viewport=new ye;const R=[y,T],M=new V0;M.layers.enable(1),M.layers.enable(2);let b=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=S[G];return Z===void 0&&(Z=new Na,S[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=S[G];return Z===void 0&&(Z=new Na,S[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=S[G];return Z===void 0&&(Z=new Na,S[G]=Z),Z.getHandSpace()};function L(G){const Z=v.indexOf(G.inputSource);if(Z===-1)return;const tt=S[Z];tt!==void 0&&(tt.update(G.inputSource,G.frame,l||a),tt.dispatchEvent({type:G.type,data:G.inputSource}))}function B(){n.removeEventListener("select",L),n.removeEventListener("selectstart",L),n.removeEventListener("selectend",L),n.removeEventListener("squeeze",L),n.removeEventListener("squeezestart",L),n.removeEventListener("squeezeend",L),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",P);for(let G=0;G<S.length;G++){const Z=v[G];Z!==null&&(v[G]=null,S[G].disconnect(Z))}b=null,I=null,t.setRenderTarget(p),d=null,f=null,u=null,n=null,m=null,$.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",L),n.addEventListener("selectstart",L),n.addEventListener("selectend",L),n.addEventListener("squeeze",L),n.addEventListener("squeezestart",L),n.addEventListener("squeezeend",L),n.addEventListener("end",B),n.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(x),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,e,Z),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Dn(d.framebufferWidth,d.framebufferHeight,{format:mi,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,tt=null,ft=null;g.depth&&(ft=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=g.stencil?fs:wn,tt=g.stencil?En:qi);const pt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};u=new XRWebGLBinding(n,e),f=u.createProjectionLayer(pt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),m=new Dn(f.textureWidth,f.textureHeight,{format:mi,type:tn,depthTexture:new Cc(f.textureWidth,f.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const Tt=t.properties.get(m);Tt.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(h),l=null,a=await n.requestReferenceSpace(o),$.setContext(n),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function P(G){for(let Z=0;Z<G.removed.length;Z++){const tt=G.removed[Z],ft=v.indexOf(tt);ft>=0&&(v[ft]=null,S[ft].disconnect(tt))}for(let Z=0;Z<G.added.length;Z++){const tt=G.added[Z];let ft=v.indexOf(tt);if(ft===-1){for(let Tt=0;Tt<S.length;Tt++)if(Tt>=v.length){v.push(tt),ft=Tt;break}else if(v[Tt]===null){v[Tt]=tt,ft=Tt;break}if(ft===-1)break}const pt=S[ft];pt&&pt.connect(tt)}}const F=new O,V=new O;function q(G,Z,tt){F.setFromMatrixPosition(Z.matrixWorld),V.setFromMatrixPosition(tt.matrixWorld);const ft=F.distanceTo(V),pt=Z.projectionMatrix.elements,Tt=tt.projectionMatrix.elements,_t=pt[14]/(pt[10]-1),St=pt[14]/(pt[10]+1),Pt=(pt[9]+1)/pt[5],z=(pt[9]-1)/pt[5],pe=(pt[8]-1)/pt[0],Mt=(Tt[8]+1)/Tt[0],ot=_t*pe,ut=_t*Mt,Wt=ft/(-pe+Mt),xt=Wt*-pe;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(xt),G.translateZ(Wt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const C=_t+Wt,w=St+Wt,W=ot-xt,it=ut+(ft-xt),Q=Pt*St/w*C,nt=z*St/w*C;G.projectionMatrix.makePerspective(W,it,Q,nt,C,w),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function k(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;M.near=T.near=y.near=G.near,M.far=T.far=y.far=G.far,(b!==M.near||I!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,I=M.far);const Z=G.parent,tt=M.cameras;k(M,Z);for(let ft=0;ft<tt.length;ft++)k(tt[ft],Z);tt.length===2?q(M,y,T):M.projectionMatrix.copy(y.projectionMatrix),N(G,M,Z)};function N(G,Z,tt){tt===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(tt.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ao*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return h},this.setFoveation=function(G){h=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)};let X=null;function K(G,Z){if(c=Z.getViewerPose(l||a),_=Z,c!==null){const tt=c.views;d!==null&&(t.setRenderTargetFramebuffer(m,d.framebuffer),t.setRenderTarget(m));let ft=!1;tt.length!==M.cameras.length&&(M.cameras.length=0,ft=!0);for(let pt=0;pt<tt.length;pt++){const Tt=tt[pt];let _t=null;if(d!==null)_t=d.getViewport(Tt);else{const Pt=u.getViewSubImage(f,Tt);_t=Pt.viewport,pt===0&&(t.setRenderTargetTextures(m,Pt.colorTexture,f.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(m))}let St=R[pt];St===void 0&&(St=new si,St.layers.enable(pt),St.viewport=new ye,R[pt]=St),St.matrix.fromArray(Tt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Tt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(_t.x,_t.y,_t.width,_t.height),pt===0&&(M.matrix.copy(St.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ft===!0&&M.cameras.push(St)}}for(let tt=0;tt<S.length;tt++){const ft=v[tt],pt=S[tt];ft!==null&&pt!==void 0&&pt.update(ft,Z,l||a)}X&&X(G,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const $=new wc;$.setAnimationLoop(K),this.setAnimationLoop=function(G){X=G},this.dispose=function(){}}}function W0(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Tc(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,S,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),c(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?h(p,m,S,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Be&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Be&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function h(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Be&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Y0(r,t,e,i){let n={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(S,v){const x=v.program;i.uniformBlockBinding(S,x)}function l(S,v){let x=n[S.id];x===void 0&&(_(S),x=c(S),n[S.id]=x,S.addEventListener("dispose",p));const E=v.program;i.updateUBOMapping(S,E);const y=t.render.frame;s[S.id]!==y&&(f(S),s[S.id]=y)}function c(S){const v=u();S.__bindingPointIndex=v;const x=r.createBuffer(),E=S.__size,y=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,E,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=n[S.id],x=S.uniforms,E=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let y=0,T=x.length;y<T;y++){const R=Array.isArray(x[y])?x[y]:[x[y]];for(let M=0,b=R.length;M<b;M++){const I=R[M];if(d(I,y,M,E)===!0){const L=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let P=0;for(let F=0;F<B.length;F++){const V=B[F],q=g(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,L+P,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,v,x,E){const y=S.value,T=v+"_"+x;if(E[T]===void 0)return typeof y=="number"||typeof y=="boolean"?E[T]=y:E[T]=y.clone(),!0;{const R=E[T];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return E[T]=y,!0}else if(R.equals(y)===!1)return R.copy(y),!0}return!1}function _(S){const v=S.uniforms;let x=0;const E=16;for(let T=0,R=v.length;T<R;T++){const M=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,I=M.length;b<I;b++){const L=M[b],B=Array.isArray(L.value)?L.value:[L.value];for(let P=0,F=B.length;P<F;P++){const V=B[P],q=g(V),k=x%E;k!==0&&E-k<q.boundary&&(x+=E-k),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=q.storage}}}const y=x%E;return y>0&&(x+=E-y),S.__size=x,S.__cache={},this}function g(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function m(){for(const S in n)r.deleteBuffer(n[S]);a=[],n={},s={}}return{bind:h,update:l,dispose:m}}class Uc{constructor(t={}){const{canvas:e=Hd(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=se,this._useLegacyLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1;const v=this;let x=!1,E=0,y=0,T=null,R=-1,M=null;const b=new ye,I=new ye;let L=null;const B=new Gt(0);let P=0,F=e.width,V=e.height,q=1,k=null,N=null;const X=new ye(0,0,F,V),K=new ye(0,0,F,V);let $=!1;const G=new Lo;let Z=!1,tt=!1,ft=null;const pt=new ue,Tt=new at,_t=new O,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pt(){return T===null?q:1}let z=i;function pe(A,H){for(let j=0;j<A.length;j++){const J=A[j],Y=e.getContext(J,H);if(Y!==null)return Y}return null}try{const A={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",ht,!1),z===null){const H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),z=pe(H,A),z===null)throw pe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Mt,ot,ut,Wt,xt,C,w,W,it,Q,nt,vt,ct,mt,At,Ft,et,Yt,Ht,Lt,bt,gt,Ut,Xt;function ae(){Mt=new ig(z),ot=new Zm(z,Mt,t),Mt.init(ot),gt=new H0(z,Mt,ot),ut=new B0(z,Mt,ot),Wt=new rg(z),xt=new E0,C=new z0(z,Mt,ut,xt,ot,gt,Wt),w=new Km(v),W=new eg(v),it=new ff(z,ot),Ut=new jm(z,Mt,it,ot),Q=new ng(z,it,Wt,Ut),nt=new lg(z,Q,it,Wt),Ht=new hg(z,ot,C),Ft=new $m(xt),vt=new b0(v,w,W,Mt,ot,Ut,Ft),ct=new W0(v,xt),mt=new A0,At=new I0(Mt,ot),Yt=new qm(v,w,W,ut,nt,f,h),et=new k0(v,nt,ot),Xt=new Y0(z,Wt,ot,ut),Lt=new Jm(z,Mt,Wt,ot),bt=new sg(z,Mt,Wt,ot),Wt.programs=vt.programs,v.capabilities=ot,v.extensions=Mt,v.properties=xt,v.renderLists=mt,v.shadowMap=et,v.state=ut,v.info=Wt}ae();const kt=new X0(v,z);this.xr=kt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=Mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(F,V,!1))},this.getSize=function(A){return A.set(F,V)},this.setSize=function(A,H,j=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,V=H,e.width=Math.floor(A*q),e.height=Math.floor(H*q),j===!0&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(F*q,V*q).floor()},this.setDrawingBufferSize=function(A,H,j){F=A,V=H,q=j,e.width=Math.floor(A*j),e.height=Math.floor(H*j),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(X)},this.setViewport=function(A,H,j,J){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,H,j,J),ut.viewport(b.copy(X).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,H,j,J){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,H,j,J),ut.scissor(I.copy(K).multiplyScalar(q).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(A){ut.setScissorTest($=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){N=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(A=!0,H=!0,j=!0){let J=0;if(A){let Y=!1;if(T!==null){const dt=T.texture.format;Y=dt===uc||dt===cc||dt===lc}if(Y){const dt=T.texture.type,yt=dt===tn||dt===qi||dt===Ao||dt===En||dt===oc||dt===hc,wt=Yt.getClearColor(),Rt=Yt.getClearAlpha(),Nt=wt.r,Dt=wt.g,It=wt.b;yt?(d[0]=Nt,d[1]=Dt,d[2]=It,d[3]=Rt,z.clearBufferuiv(z.COLOR,0,d)):(_[0]=Nt,_[1]=Dt,_[2]=It,_[3]=Rt,z.clearBufferiv(z.COLOR,0,_))}else J|=z.COLOR_BUFFER_BIT}H&&(J|=z.DEPTH_BUFFER_BIT),j&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),mt.dispose(),At.dispose(),xt.dispose(),w.dispose(),W.dispose(),nt.dispose(),Ut.dispose(),Xt.dispose(),vt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Le),kt.removeEventListener("sessionend",Kt),ft&&(ft.dispose(),ft=null),De.stop()};function st(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=Wt.autoReset,H=et.enabled,j=et.autoUpdate,J=et.needsUpdate,Y=et.type;ae(),Wt.autoReset=A,et.enabled=H,et.autoUpdate=j,et.needsUpdate=J,et.type=Y}function ht(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function lt(A){const H=A.target;H.removeEventListener("dispose",lt),Ct(H)}function Ct(A){Et(A),xt.remove(A)}function Et(A){const H=xt.get(A).programs;H!==void 0&&(H.forEach(function(j){vt.releaseProgram(j)}),A.isShaderMaterial&&vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,j,J,Y,dt){H===null&&(H=St);const yt=Y.isMesh&&Y.matrixWorld.determinant()<0,wt=Nu(A,H,j,J,Y);ut.setMaterial(J,yt);let Rt=j.index,Nt=1;if(J.wireframe===!0){if(Rt=Q.getWireframeAttribute(j),Rt===void 0)return;Nt=2}const Dt=j.drawRange,It=j.attributes.position;let le=Dt.start*Nt,We=(Dt.start+Dt.count)*Nt;dt!==null&&(le=Math.max(le,dt.start*Nt),We=Math.min(We,(dt.start+dt.count)*Nt)),Rt!==null?(le=Math.max(le,0),We=Math.min(We,Rt.count)):It!=null&&(le=Math.max(le,0),We=Math.min(We,It.count));const xe=We-le;if(xe<0||xe===1/0)return;Ut.setup(Y,J,wt,j,Rt);let wi,ee=Lt;if(Rt!==null&&(wi=it.get(Rt),ee=bt,ee.setIndex(wi)),Y.isMesh)J.wireframe===!0?(ut.setLineWidth(J.wireframeLinewidth*Pt()),ee.setMode(z.LINES)):ee.setMode(z.TRIANGLES);else if(Y.isLine){let Bt=J.linewidth;Bt===void 0&&(Bt=1),ut.setLineWidth(Bt*Pt()),Y.isLineSegments?ee.setMode(z.LINES):Y.isLineLoop?ee.setMode(z.LINE_LOOP):ee.setMode(z.LINE_STRIP)}else Y.isPoints?ee.setMode(z.POINTS):Y.isSprite&&ee.setMode(z.TRIANGLES);if(Y.isBatchedMesh)ee.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ee.renderInstances(le,xe,Y.count);else if(j.isInstancedBufferGeometry){const Bt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,na=Math.min(j.instanceCount,Bt);ee.renderInstances(le,xe,na)}else ee.render(le,xe)};function Zt(A,H,j){A.transparent===!0&&A.side===Fi&&A.forceSinglePass===!1?(A.side=Be,A.needsUpdate=!0,er(A,H,j),A.side=sn,A.needsUpdate=!0,er(A,H,j),A.side=Fi):er(A,H,j)}this.compile=function(A,H,j=null){j===null&&(j=A),p=At.get(j),p.init(),S.push(p),j.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),A!==j&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(v._useLegacyLights);const J=new Set;return A.traverse(function(Y){const dt=Y.material;if(dt)if(Array.isArray(dt))for(let yt=0;yt<dt.length;yt++){const wt=dt[yt];Zt(wt,j,Y),J.add(wt)}else Zt(dt,j,Y),J.add(dt)}),S.pop(),p=null,J},this.compileAsync=function(A,H,j=null){const J=this.compile(A,H,j);return new Promise(Y=>{function dt(){if(J.forEach(function(yt){xt.get(yt).currentProgram.isReady()&&J.delete(yt)}),J.size===0){Y(A);return}setTimeout(dt,10)}Mt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let $t=null;function _e(A){$t&&$t(A)}function Le(){De.stop()}function Kt(){De.start()}const De=new wc;De.setAnimationLoop(_e),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(A){$t=A,kt.setAnimationLoop(A),A===null?De.stop():De.start()},kt.addEventListener("sessionstart",Le),kt.addEventListener("sessionend",Kt),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(H),H=kt.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,H,T),p=At.get(A,S.length),p.init(),S.push(p),pt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),G.setFromProjectionMatrix(pt),tt=this.localClippingEnabled,Z=Ft.init(this.clippingPlanes,tt),g=mt.get(A,m.length),g.init(),m.push(g),gi(A,H,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(k,N),this.info.render.frame++,Z===!0&&Ft.beginShadows();const j=p.state.shadowsArray;if(et.render(j,A,H),Z===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(g,A),p.setupLights(v._useLegacyLights),H.isArrayCamera){const J=H.cameras;for(let Y=0,dt=J.length;Y<dt;Y++){const yt=J[Y];ih(g,A,yt,yt.viewport)}}else ih(g,A,H);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(v,A,H),Ut.resetDefaultState(),R=-1,M=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function gi(A,H,j,J){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||G.intersectsSprite(A)){J&&_t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pt);const yt=nt.update(A),wt=A.material;wt.visible&&g.push(A,yt,wt,j,_t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||G.intersectsObject(A))){const yt=nt.update(A),wt=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_t.copy(A.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),_t.copy(yt.boundingSphere.center)),_t.applyMatrix4(A.matrixWorld).applyMatrix4(pt)),Array.isArray(wt)){const Rt=yt.groups;for(let Nt=0,Dt=Rt.length;Nt<Dt;Nt++){const It=Rt[Nt],le=wt[It.materialIndex];le&&le.visible&&g.push(A,yt,le,j,_t.z,It)}}else wt.visible&&g.push(A,yt,wt,j,_t.z,null)}}const dt=A.children;for(let yt=0,wt=dt.length;yt<wt;yt++)gi(dt[yt],H,j,J)}function ih(A,H,j,J){const Y=A.opaque,dt=A.transmissive,yt=A.transparent;p.setupLightsView(j),Z===!0&&Ft.setGlobalState(v.clippingPlanes,j),dt.length>0&&Fu(Y,dt,H,j),J&&ut.viewport(b.copy(J)),Y.length>0&&tr(Y,H,j),dt.length>0&&tr(dt,H,j),yt.length>0&&tr(yt,H,j),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Fu(A,H,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const dt=ot.isWebGL2;ft===null&&(ft=new Dn(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?Bs:tn,minFilter:ds,samples:dt?4:0})),v.getDrawingBufferSize(Tt),dt?ft.setSize(Tt.x,Tt.y):ft.setSize(oo(Tt.x),oo(Tt.y));const yt=v.getRenderTarget();v.setRenderTarget(ft),v.getClearColor(B),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const wt=v.toneMapping;v.toneMapping=Qi,tr(A,j,J),C.updateMultisampleRenderTarget(ft),C.updateRenderTargetMipmap(ft);let Rt=!1;for(let Nt=0,Dt=H.length;Nt<Dt;Nt++){const It=H[Nt],le=It.object,We=It.geometry,xe=It.material,wi=It.group;if(xe.side===Fi&&le.layers.test(J.layers)){const ee=xe.side;xe.side=Be,xe.needsUpdate=!0,nh(le,j,J,We,xe,wi),xe.side=ee,xe.needsUpdate=!0,Rt=!0}}Rt===!0&&(C.updateMultisampleRenderTarget(ft),C.updateRenderTargetMipmap(ft)),v.setRenderTarget(yt),v.setClearColor(B,P),v.toneMapping=wt}function tr(A,H,j){const J=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,dt=A.length;Y<dt;Y++){const yt=A[Y],wt=yt.object,Rt=yt.geometry,Nt=J===null?yt.material:J,Dt=yt.group;wt.layers.test(j.layers)&&nh(wt,H,j,Rt,Nt,Dt)}}function nh(A,H,j,J,Y,dt){A.onBeforeRender(v,H,j,J,Y,dt),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(v,H,j,J,A,dt),Y.transparent===!0&&Y.side===Fi&&Y.forceSinglePass===!1?(Y.side=Be,Y.needsUpdate=!0,v.renderBufferDirect(j,H,J,Y,A,dt),Y.side=sn,Y.needsUpdate=!0,v.renderBufferDirect(j,H,J,Y,A,dt),Y.side=Fi):v.renderBufferDirect(j,H,J,Y,A,dt),A.onAfterRender(v,H,j,J,Y,dt)}function er(A,H,j){H.isScene!==!0&&(H=St);const J=xt.get(A),Y=p.state.lights,dt=p.state.shadowsArray,yt=Y.state.version,wt=vt.getParameters(A,Y.state,dt,H,j),Rt=vt.getProgramCacheKey(wt);let Nt=J.programs;J.environment=A.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(A.isMeshStandardMaterial?W:w).get(A.envMap||J.environment),Nt===void 0&&(A.addEventListener("dispose",lt),Nt=new Map,J.programs=Nt);let Dt=Nt.get(Rt);if(Dt!==void 0){if(J.currentProgram===Dt&&J.lightsStateVersion===yt)return rh(A,wt),Dt}else wt.uniforms=vt.getUniforms(A),A.onBuild(j,wt,v),A.onBeforeCompile(wt,v),Dt=vt.acquireProgram(wt,Rt),Nt.set(Rt,Dt),J.uniforms=wt.uniforms;const It=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=Ft.uniform),rh(A,wt),J.needsLights=Bu(A),J.lightsStateVersion=yt,J.needsLights&&(It.ambientLightColor.value=Y.state.ambient,It.lightProbe.value=Y.state.probe,It.directionalLights.value=Y.state.directional,It.directionalLightShadows.value=Y.state.directionalShadow,It.spotLights.value=Y.state.spot,It.spotLightShadows.value=Y.state.spotShadow,It.rectAreaLights.value=Y.state.rectArea,It.ltc_1.value=Y.state.rectAreaLTC1,It.ltc_2.value=Y.state.rectAreaLTC2,It.pointLights.value=Y.state.point,It.pointLightShadows.value=Y.state.pointShadow,It.hemisphereLights.value=Y.state.hemi,It.directionalShadowMap.value=Y.state.directionalShadowMap,It.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,It.spotShadowMap.value=Y.state.spotShadowMap,It.spotLightMatrix.value=Y.state.spotLightMatrix,It.spotLightMap.value=Y.state.spotLightMap,It.pointShadowMap.value=Y.state.pointShadowMap,It.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Dt,J.uniformsList=null,Dt}function sh(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Dr.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function rh(A,H){const j=xt.get(A);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function Nu(A,H,j,J,Y){H.isScene!==!0&&(H=St),C.resetTextureUnits();const dt=H.fog,yt=J.isMeshStandardMaterial?H.environment:null,wt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ki,Rt=(J.isMeshStandardMaterial?W:w).get(J.envMap||yt),Nt=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Dt=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),It=!!j.morphAttributes.position,le=!!j.morphAttributes.normal,We=!!j.morphAttributes.color;let xe=Qi;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xe=v.toneMapping);const wi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ee=wi!==void 0?wi.length:0,Bt=xt.get(J),na=p.state.lights;if(Z===!0&&(tt===!0||A!==M)){const ei=A===M&&J.id===R;Ft.setState(J,A,ei)}let oe=!1;J.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==na.state.version||Bt.outputColorSpace!==wt||Y.isBatchedMesh&&Bt.batching===!1||!Y.isBatchedMesh&&Bt.batching===!0||Y.isInstancedMesh&&Bt.instancing===!1||!Y.isInstancedMesh&&Bt.instancing===!0||Y.isSkinnedMesh&&Bt.skinning===!1||!Y.isSkinnedMesh&&Bt.skinning===!0||Y.isInstancedMesh&&Bt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Bt.instancingColor===!1&&Y.instanceColor!==null||Bt.envMap!==Rt||J.fog===!0&&Bt.fog!==dt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Ft.numPlanes||Bt.numIntersection!==Ft.numIntersection)||Bt.vertexAlphas!==Nt||Bt.vertexTangents!==Dt||Bt.morphTargets!==It||Bt.morphNormals!==le||Bt.morphColors!==We||Bt.toneMapping!==xe||ot.isWebGL2===!0&&Bt.morphTargetsCount!==ee)&&(oe=!0):(oe=!0,Bt.__version=J.version);let ln=Bt.currentProgram;oe===!0&&(ln=er(J,H,Y));let ah=!1,Ts=!1,sa=!1;const Ee=ln.getUniforms(),cn=Bt.uniforms;if(ut.useProgram(ln.program)&&(ah=!0,Ts=!0,sa=!0),J.id!==R&&(R=J.id,Ts=!0),ah||M!==A){Ee.setValue(z,"projectionMatrix",A.projectionMatrix),Ee.setValue(z,"viewMatrix",A.matrixWorldInverse);const ei=Ee.map.cameraPosition;ei!==void 0&&ei.setValue(z,_t.setFromMatrixPosition(A.matrixWorld)),ot.logarithmicDepthBuffer&&Ee.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ee.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Ts=!0,sa=!0)}if(Y.isSkinnedMesh){Ee.setOptional(z,Y,"bindMatrix"),Ee.setOptional(z,Y,"bindMatrixInverse");const ei=Y.skeleton;ei&&(ot.floatVertexTextures?(ei.boneTexture===null&&ei.computeBoneTexture(),Ee.setValue(z,"boneTexture",ei.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Ee.setOptional(z,Y,"batchingTexture"),Ee.setValue(z,"batchingTexture",Y._matricesTexture,C));const ra=j.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&ot.isWebGL2===!0)&&Ht.update(Y,j,ln),(Ts||Bt.receiveShadow!==Y.receiveShadow)&&(Bt.receiveShadow=Y.receiveShadow,Ee.setValue(z,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(cn.envMap.value=Rt,cn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Ts&&(Ee.setValue(z,"toneMappingExposure",v.toneMappingExposure),Bt.needsLights&&ku(cn,sa),dt&&J.fog===!0&&ct.refreshFogUniforms(cn,dt),ct.refreshMaterialUniforms(cn,J,q,V,ft),Dr.upload(z,sh(Bt),cn,C)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Dr.upload(z,sh(Bt),cn,C),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ee.setValue(z,"center",Y.center),Ee.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Ee.setValue(z,"normalMatrix",Y.normalMatrix),Ee.setValue(z,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const ei=J.uniformsGroups;for(let aa=0,zu=ei.length;aa<zu;aa++)if(ot.isWebGL2){const oh=ei[aa];Xt.update(oh,ln),Xt.bind(oh,ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ln}function ku(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Bu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,H,j){xt.get(A.texture).__webglTexture=H,xt.get(A.depthTexture).__webglTexture=j;const J=xt.get(A);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,H){const j=xt.get(A);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,j=0){T=A,E=H,y=j;let J=!0,Y=null,dt=!1,yt=!1;if(A){const Rt=xt.get(A);Rt.__useDefaultFramebuffer!==void 0?(ut.bindFramebuffer(z.FRAMEBUFFER,null),J=!1):Rt.__webglFramebuffer===void 0?C.setupRenderTarget(A):Rt.__hasExternalTextures&&C.rebindTextures(A,xt.get(A.texture).__webglTexture,xt.get(A.depthTexture).__webglTexture);const Nt=A.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(yt=!0);const Dt=xt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Dt[H])?Y=Dt[H][j]:Y=Dt[H],dt=!0):ot.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?Y=xt.get(A).__webglMultisampledFramebuffer:Array.isArray(Dt)?Y=Dt[j]:Y=Dt,b.copy(A.viewport),I.copy(A.scissor),L=A.scissorTest}else b.copy(X).multiplyScalar(q).floor(),I.copy(K).multiplyScalar(q).floor(),L=$;if(ut.bindFramebuffer(z.FRAMEBUFFER,Y)&&ot.drawBuffers&&J&&ut.drawBuffers(A,Y),ut.viewport(b),ut.scissor(I),ut.setScissorTest(L),dt){const Rt=xt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Rt.__webglTexture,j)}else if(yt){const Rt=xt.get(A.texture),Nt=H||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Rt.__webglTexture,j||0,Nt)}R=-1},this.readRenderTargetPixels=function(A,H,j,J,Y,dt,yt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){ut.bindFramebuffer(z.FRAMEBUFFER,wt);try{const Rt=A.texture,Nt=Rt.format,Dt=Rt.type;if(Nt!==mi&&gt.convert(Nt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Dt===Bs&&(Mt.has("EXT_color_buffer_half_float")||ot.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(Dt!==tn&&gt.convert(Dt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===ji&&(ot.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-J&&j>=0&&j<=A.height-Y&&z.readPixels(H,j,J,Y,gt.convert(Nt),gt.convert(Dt),dt)}finally{const Rt=T!==null?xt.get(T).__webglFramebuffer:null;ut.bindFramebuffer(z.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(A,H,j=0){const J=Math.pow(2,-j),Y=Math.floor(H.image.width*J),dt=Math.floor(H.image.height*J);C.setTexture2D(H,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,A.x,A.y,Y,dt),ut.unbindTexture()},this.copyTextureToTexture=function(A,H,j,J=0){const Y=H.image.width,dt=H.image.height,yt=gt.convert(j.format),wt=gt.convert(j.type);C.setTexture2D(j,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment),H.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,J,A.x,A.y,Y,dt,yt,wt,H.image.data):H.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,J,A.x,A.y,H.mipmaps[0].width,H.mipmaps[0].height,yt,H.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,J,A.x,A.y,yt,wt,H.image),J===0&&j.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(A,H,j,J,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=A.max.x-A.min.x+1,yt=A.max.y-A.min.y+1,wt=A.max.z-A.min.z+1,Rt=gt.convert(J.format),Nt=gt.convert(J.type);let Dt;if(J.isData3DTexture)C.setTexture3D(J,0),Dt=z.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)C.setTexture2DArray(J,0),Dt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,J.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,J.unpackAlignment);const It=z.getParameter(z.UNPACK_ROW_LENGTH),le=z.getParameter(z.UNPACK_IMAGE_HEIGHT),We=z.getParameter(z.UNPACK_SKIP_PIXELS),xe=z.getParameter(z.UNPACK_SKIP_ROWS),wi=z.getParameter(z.UNPACK_SKIP_IMAGES),ee=j.isCompressedTexture?j.mipmaps[Y]:j.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ee.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ee.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,A.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,A.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,A.min.z),j.isDataTexture||j.isData3DTexture?z.texSubImage3D(Dt,Y,H.x,H.y,H.z,dt,yt,wt,Rt,Nt,ee.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Dt,Y,H.x,H.y,H.z,dt,yt,wt,Rt,ee.data)):z.texSubImage3D(Dt,Y,H.x,H.y,H.z,dt,yt,wt,Rt,Nt,ee),z.pixelStorei(z.UNPACK_ROW_LENGTH,It),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,le),z.pixelStorei(z.UNPACK_SKIP_PIXELS,We),z.pixelStorei(z.UNPACK_SKIP_ROWS,xe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,wi),Y===0&&J.generateMipmaps&&z.generateMipmap(Dt),ut.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),ut.unbindTexture()},this.resetState=function(){E=0,y=0,T=null,ut.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Co?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===Zr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===se?An:fc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===An?se:ki}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class q0 extends Uc{}q0.prototype.isWebGL1Renderer=!0;class j0 extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class J0 extends Ss{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cl=new ue,lo=new Ro,br=new $r,Er=new O;class Z0 extends Te{constructor(t=new bi,e=new J0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(n),br.radius+=s,t.ray.intersectsSphere(br)===!1)return;Cl.copy(n).invert(),lo.copy(t.ray).applyMatrix4(Cl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,l=i.index,u=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let _=f,g=d;_<g;_++){const p=l.getX(_);Er.fromBufferAttribute(u,p),Rl(Er,p,h,n,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=f,g=d;_<g;_++)Er.fromBufferAttribute(u,_),Rl(Er,_,h,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Rl(r,t,e,i,n,s,a){const o=lo.distanceSqToPoint(r);if(o<e){const h=new O;lo.closestPointToPoint(r,h),h.applyMatrix4(i);const l=n.ray.origin.distanceTo(h);if(l<n.near||l>n.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:h,index:t,face:null,object:a})}}class $0 extends Re{constructor(t,e,i,n,s,a,o,h,l){super(t,e,i,n,s,a,o,h,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Fe,this.magFilter=s!==void 0?s:Fe,this.generateMipmaps=!1;const c=this;function u(){c.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ka extends Re{constructor(t,e,i,n,s,a,o,h,l){super(t,e,i,n,s,a,o,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,h=s-1,l;for(;o<=h;)if(n=Math.floor(o+(h-o)/2),l=i[n]-a,l<0)o=n+1;else if(l>0)h=n-1;else{h=n;break}if(n=h,i[n]===a)return n/(s-1);const c=i[n],f=i[n+1]-c,d=(a-c)/f;return(n+d)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),h=e||(a.isVector2?new at:new O);return h.copy(o).sub(a).normalize(),h}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new O,n=[],s=[],a=[],o=new O,h=new ue;for(let d=0;d<=t;d++){const _=d/t;n[d]=this.getTangentAt(_,new O)}s[0]=new O,a[0]=new O;let l=Number.MAX_VALUE;const c=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);c<=l&&(l=c,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Me(n[d-1].dot(n[d]),-1,1));s[d].applyMatrix4(h.makeRotationAxis(o,_))}a[d].crossVectors(n[d],s[d])}if(e===!0){let d=Math.acos(Me(s[0].dot(s[t]),-1,1));d/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(h.makeRotationAxis(n[_],d*_)),a[_].crossVectors(n[_],s[_])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Io extends Ei{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=h}getPoint(t,e){const i=e||new at,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+t*s;let h=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=h-this.aX,d=l-this.aY;h=f*c-d*u+this.aX,l=f*u+d*c+this.aY}return i.set(h,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class K0 extends Io{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Uo(){let r=0,t=0,e=0,i=0;function n(s,a,o,h){r=s,t=o,e=-3*s+3*a-2*o-h,i=2*s-2*a+o+h}return{initCatmullRom:function(s,a,o,h,l){n(a,o,l*(o-s),l*(h-a))},initNonuniformCatmullRom:function(s,a,o,h,l,c,u){let f=(a-s)/l-(o-s)/(l+c)+(o-a)/c,d=(o-a)/c-(h-a)/(c+u)+(h-o)/u;f*=c,d*=c,n(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+i*o}}}const wr=new O,Ba=new Uo,za=new Uo,Ha=new Uo;class Q0 extends Ei{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new O){const i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),h=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:h===0&&o===s-1&&(o=s-2,h=1);let l,c;this.closed||o>0?l=n[(o-1)%s]:(wr.subVectors(n[0],n[1]).add(n[0]),l=wr);const u=n[o%s],f=n[(o+1)%s];if(this.closed||o+2<s?c=n[(o+2)%s]:(wr.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=wr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(c),d);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Ba.initNonuniformCatmullRom(l.x,u.x,f.x,c.x,_,g,p),za.initNonuniformCatmullRom(l.y,u.y,f.y,c.y,_,g,p),Ha.initNonuniformCatmullRom(l.z,u.z,f.z,c.z,_,g,p)}else this.curveType==="catmullrom"&&(Ba.initCatmullRom(l.x,u.x,f.x,c.x,this.tension),za.initCatmullRom(l.y,u.y,f.y,c.y,this.tension),Ha.initCatmullRom(l.z,u.z,f.z,c.z,this.tension));return i.set(Ba.calc(h),za.calc(h),Ha.calc(h)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new O().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Pl(r,t,e,i,n){const s=(i-t)*.5,a=(n-e)*.5,o=r*r,h=r*o;return(2*e-2*i+s+a)*h+(-3*e+3*i-2*s-a)*o+s*r+e}function t_(r,t){const e=1-r;return e*e*t}function e_(r,t){return 2*(1-r)*r*t}function i_(r,t){return r*r*t}function Us(r,t,e,i){return t_(r,t)+e_(r,e)+i_(r,i)}function n_(r,t){const e=1-r;return e*e*e*t}function s_(r,t){const e=1-r;return 3*e*e*r*t}function r_(r,t){return 3*(1-r)*r*r*t}function a_(r,t){return r*r*r*t}function Os(r,t,e,i,n){return n_(r,t)+s_(r,e)+r_(r,i)+a_(r,n)}class Oc extends Ei{constructor(t=new at,e=new at,i=new at,n=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new at){const i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Os(t,n.x,s.x,a.x,o.x),Os(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class o_ extends Ei{constructor(t=new O,e=new O,i=new O,n=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new O){const i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Os(t,n.x,s.x,a.x,o.x),Os(t,n.y,s.y,a.y,o.y),Os(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fc extends Ei{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class h_ extends Ei{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nc extends Ei{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){const i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Us(t,n.x,s.x,a.x),Us(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class l_ extends Ei{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){const i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Us(t,n.x,s.x,a.x),Us(t,n.y,s.y,a.y),Us(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kc extends Ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,h=n[a===0?a:a-1],l=n[a],c=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Pl(o,h.x,l.x,c.x,u.x),Pl(o,h.y,l.y,c.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new at().fromArray(n))}return this}}var Ll=Object.freeze({__proto__:null,ArcCurve:K0,CatmullRomCurve3:Q0,CubicBezierCurve:Oc,CubicBezierCurve3:o_,EllipseCurve:Io,LineCurve:Fc,LineCurve3:h_,QuadraticBezierCurve:Nc,QuadraticBezierCurve3:l_,SplineCurve:kc});class c_ extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ll[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const a=n[s]-i,o=this.curves[s],h=o.getLength(),l=h===0?0:1-a/h;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,h=a.getPoints(o);for(let l=0;l<h.length;l++){const c=h[l];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Ll[n.type]().fromJSON(n))}return this}}class u_ extends c_{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Fc(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const s=new Nc(this.currentPoint.clone(),new at(t,e),new at(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){const o=new Oc(this.currentPoint.clone(),new at(t,e),new at(i,n),new at(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new kc(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){const o=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+o,e+h,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,h){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,i,n,s,a,o,h),this}absellipse(t,e,i,n,s,a,o,h){const l=new Io(t,e,i,n,s,a,o,h);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Oo extends bi{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Me(n,0,Math.PI*2);const s=[],a=[],o=[],h=[],l=[],c=1/e,u=new O,f=new at,d=new O,_=new O,g=new O;let p=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.normalize(),h.push(d.x,d.y,d.z);break;case t.length-1:h.push(g.x,g.y,g.z);break;default:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-p,d.z=m*0,_.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),h.push(d.x,d.y,d.z),g.copy(_)}for(let S=0;S<=e;S++){const v=i+S*c*n,x=Math.sin(v),E=Math.cos(v);for(let y=0;y<=t.length-1;y++){u.x=t[y].x*x,u.y=t[y].y,u.z=t[y].x*E,a.push(u.x,u.y,u.z),f.x=S/e,f.y=y/(t.length-1),o.push(f.x,f.y);const T=h[3*y+0]*x,R=h[3*y+1],M=h[3*y+0]*E;l.push(T,R,M)}}for(let S=0;S<e;S++)for(let v=0;v<t.length-1;v++){const x=v+S*t.length,E=x,y=x+t.length,T=x+t.length+1,R=x+1;s.push(E,y,R),s.push(T,R,y)}this.setIndex(s),this.setAttribute("position",new Mi(a,3)),this.setAttribute("uv",new Mi(o,2)),this.setAttribute("normal",new Mi(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.points,t.segments,t.phiStart,t.phiLength)}}class Fo extends Oo{constructor(t=1,e=1,i=4,n=8){const s=new u_;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new Fo(t.radius,t.length,t.capSegments,t.radialSegments)}}class Zn extends Ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Dl={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class d_{constructor(t,e,i){const n=this;let s=!1,a=0,o=0,h;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){o++,s===!1&&n.onStart!==void 0&&n.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,n.onProgress!==void 0&&n.onProgress(c,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],_=l[u+1];if(d.global&&(d.lastIndex=0),d.test(c))return _}return null}}}const f_=new d_;class No{constructor(t){this.manager=t!==void 0?t:f_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}No.DEFAULT_MATERIAL_NAME="__DEFAULT";class p_ extends No{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Dl.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=zs("img");function h(){c(),Dl.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){c(),n&&n(u),s.manager.itemError(t),s.manager.itemEnd(t)}function c(){o.removeEventListener("load",h,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class m_ extends No{constructor(t){super(t)}load(t,e,i,n){const s=new Re,a=new p_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}}class Bc extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Va=new ue,Il=new O,Ul=new O;class g_{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Il.setFromMatrixPosition(t.matrixWorld),e.position.copy(Il),Ul.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ul),e.updateMatrixWorld(),Va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class __ extends g_{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ol extends Bc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new __}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class x_ extends Bc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class v_{constructor(t,e,i=0,n=1/0){this.ray=new Ro(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return co(t,this,i,e),i.sort(Fl),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)co(t[n],this,i,e);return i.sort(Fl),i}}function Fl(r,t){return r.distance-t.distance}function co(r,t,e,i){if(r.layers.test(t.layers)&&r.raycast(t,e),i===!0){const n=r.children;for(let s=0,a=n.length;s<a;s++)co(n[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);class y_{constructor(t){this.canvas=t,this.width=window.innerWidth,this.height=window.innerHeight,this.scene=new j0;const e=45;this.camera=new si(e,this.width/this.height,1,3e3),this.cameraZ=this.height/(2*Math.tan(e*Math.PI/360)),this.camera.position.set(0,0,this.cameraZ),this.renderer=new Uc({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=se;const i=new x_(16777215,1.2);this.scene.add(i),this.mouse={x:0,y:0,targetX:0,targetY:0},this.initEvents()}initEvents(){window.addEventListener("resize",()=>this.onResize()),window.addEventListener("mousemove",t=>{this.mouse.targetX=(t.clientX/this.width-.5)*2,this.mouse.targetY=-(t.clientY/this.height-.5)*2}),window.addEventListener("mouseleave",()=>{this.mouse.targetX=0,this.mouse.targetY=0})}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.cameraZ=this.height/(2*Math.tan(this.camera.fov*Math.PI/360)),this.camera.position.z=this.cameraZ,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}update(){this.mouse.x+=(this.mouse.targetX-this.mouse.x)*.05,this.mouse.y+=(this.mouse.targetY-this.mouse.y)*.05,this.camera.position.x=this.mouse.x*25,this.camera.position.y=this.mouse.y*25}render(){this.renderer.render(this.scene,this.camera)}}function Ii(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function zc(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ke={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Hs={duration:.5,overwrite:!1,delay:0},ko,be,te,oi=1e8,Jt=1/oi,uo=Math.PI*2,S_=uo/4,M_=0,Hc=Math.sqrt,T_=Math.cos,b_=Math.sin,Se=function(t){return typeof t=="string"},he=function(t){return typeof t=="function"},zi=function(t){return typeof t=="number"},Bo=function(t){return typeof t>"u"},Ti=function(t){return typeof t=="object"},ze=function(t){return t!==!1},zo=function(){return typeof window<"u"},Ar=function(t){return he(t)||Se(t)},Vc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pe=Array.isArray,E_=/random\([^)]+\)/g,w_=/,\s*/g,Nl=/(?:-?\.?\d|\.)+/gi,Gc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ga=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xc=/[+-]=-?[.\d]+/,A_=/[^,'"\[\]\s]+/gi,C_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ne,xi,fo,Ho,Qe={},Vr={},Wc,Yc=function(t){return(Vr=ms(t,Qe))&&Xe},Vo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Vs=function(t,e){return!e&&console.warn(t)},qc=function(t,e){return t&&(Qe[t]=e)&&Vr&&(Vr[t]=e)||Qe},Gs=function(){return 0},R_={suppressEvents:!0,isStart:!0,kill:!1},Ir={suppressEvents:!0,kill:!1},P_={suppressEvents:!0},Go={},en=[],po={},jc,je={},Xa={},kl=30,Ur=[],Xo="",Wo=function(t){var e=t[0],i,n;if(Ti(e)||he(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=Ur.length;n--&&!Ur[n].targetTest(e););i=Ur[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new gu(t[n],i)))||t.splice(n,1);return t},Cn=function(t){return t._gsap||Wo(hi(t))[0]._gsap},Jc=function(t,e,i){return(i=t[e])&&he(i)?t[e]():Bo(i)&&t.getAttribute&&t.getAttribute(e)||i},He=function(t,e){return(t=t.split(",")).forEach(e)||t},ce=function(t){return Math.round(t*1e5)/1e5||0},ie=function(t){return Math.round(t*1e7)/1e7||0},as=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},L_=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},Gr=function(){var t=en.length,e=en.slice(0),i,n;for(po={},en.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Yo=function(t){return!!(t._initted||t._startAt||t.add)},Zc=function(t,e,i,n){en.length&&!be&&Gr(),t.render(e,i,!!(be&&e<0&&Yo(t))),en.length&&!be&&Gr()},$c=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(A_).length<2?e:Se(t)?t.trim():t},Kc=function(t){return t},ti=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},D_=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},ms=function(t,e){for(var i in e)t[i]=e[i];return t},Bl=function r(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Ti(e[i])?r(t[i]||(t[i]={}),e[i]):e[i]);return t},Xr=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},Fs=function(t){var e=t.parent||ne,i=t.keyframes?D_(Pe(t.keyframes)):ti;if(ze(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},I_=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Qc=function(t,e,i,n,s){var a=t[n],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=a,e.parent=e._dp=t,e},ta=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=e._prev,a=e._next;s?s._next=a:t[i]===e&&(t[i]=a),a?a._prev=s:t[n]===e&&(t[n]=s),e._next=e._prev=e.parent=null},rn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Rn=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},U_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},mo=function(t,e,i,n){return t._startAt&&(be?t._startAt.revert(Ir):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},O_=function r(t){return!t||t._ts&&r(t.parent)},zl=function(t){return t._repeat?gs(t._tTime,t=t.duration()+t._rDelay)*t:0},gs=function(t,e){var i=Math.floor(t=ie(t/e));return t&&i===t?i-1:i},Wr=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ea=function(t){return t._end=ie(t._start+(t._tDur/Math.abs(t._ts||t._rts||Jt)||0))},ia=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=ie(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ea(t),i._dirty||Rn(i,t)),t},tu=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Wr(t.rawTime(),e),(!e._dur||Qs(0,e.totalDuration(),i)-e._tTime>Jt)&&e.render(i,!0)),Rn(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Jt}},yi=function(t,e,i,n){return e.parent&&rn(e),e._start=ie((zi(i)?i:i||t!==ne?ni(t,i,e):t._time)+e._delay),e._end=ie(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Qc(t,e,"_first","_last",t._sort?"_start":0),go(e)||(t._recent=e),n||tu(t,e),t._ts<0&&ia(t,t._tTime),t},eu=function(t,e){return(Qe.ScrollTrigger||Vo("scrollTrigger",e))&&Qe.ScrollTrigger.create(e,t)},iu=function(t,e,i,n,s){if(jo(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!be&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&jc!==Je.frame)return en.push(t),t._lazy=[s,n],1},F_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},go=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},N_=function(t,e,i,n){var s=t.ratio,a=e<0||!e&&(!t._start&&F_(t)&&!(!t._initted&&go(t))||(t._ts<0||t._dp._ts<0)&&!go(t))?0:1,o=t._rDelay,h=0,l,c,u;if(o&&t._repeat&&(h=Qs(0,t._tDur,e),c=gs(h,o),t._yoyo&&c&1&&(a=1-a),c!==gs(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||be||n||t._zTime===Jt||!e&&t._zTime){if(!t._initted&&iu(t,e,n,i,h))return;for(u=t._zTime,t._zTime=e||(i?Jt:0),i||(i=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=h,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&mo(t,e,i,!0),t._onUpdate&&!i&&Ze(t,"onUpdate"),h&&t._repeat&&!i&&t.parent&&Ze(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&rn(t,1),!i&&!be&&(Ze(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},k_=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},_s=function(t,e,i,n){var s=t._repeat,a=ie(e)||0,o=t._tTime/t._tDur;return o&&!n&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ie(a*(s+1)+t._rDelay*s):a,o>0&&!n&&ia(t,t._tTime=t._tDur*o),t.parent&&ea(t),i||Rn(t.parent,t),t},Hl=function(t){return t instanceof Ne?Rn(t):_s(t,t._dur)},B_={_start:0,endTime:Gs,totalDuration:Gs},ni=function r(t,e,i){var n=t.labels,s=t._recent||B_,a=t.duration()>=oi?s.endTime(!1):t._dur,o,h,l;return Se(e)&&(isNaN(e)||e in n)?(h=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),h==="<"||h===">"?(o>=0&&(e=e.replace(/=/,"")),(h==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?s:i).totalDuration()/100:1)):o<0?(e in n||(n[e]=a),n[e]):(h=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&i&&(h=h/100*(Pe(i)?i[0]:i).totalDuration()),o>1?r(t,e.substr(0,o-1),i)+h:a+h)):e==null?a:+e},Ns=function(t,e,i){var n=zi(e[1]),s=(n?2:1)+(t<2?0:1),a=e[s],o,h;if(n&&(a.duration=e[1]),a.parent=i,t){for(o=a,h=i;h&&!("immediateRender"in o);)o=h.vars.defaults||{},h=ze(h.vars.inherit)&&h.parent;a.immediateRender=ze(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new fe(e[0],a,e[s+1])},hn=function(t,e){return t||t===0?e(t):e},Qs=function(t,e,i){return i<t?t:i>e?e:i},Ce=function(t,e){return!Se(t)||!(e=C_.exec(t))?"":e[1]},z_=function(t,e,i){return hn(i,function(n){return Qs(t,e,n)})},_o=[].slice,nu=function(t,e){return t&&Ti(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ti(t[0]))&&!t.nodeType&&t!==xi},H_=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var s;return Se(n)&&!e||nu(n,1)?(s=i).push.apply(s,hi(n)):i.push(n)})||i},hi=function(t,e,i){return te&&!e&&te.selector?te.selector(t):Se(t)&&!i&&(fo||!xs())?_o.call((e||Ho).querySelectorAll(t),0):Pe(t)?H_(t,i):nu(t)?_o.call(t,0):t?[t]:[]},xo=function(t){return t=hi(t)[0]||Vs("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return hi(e,i.querySelectorAll?i:i===t?Vs("Invalid scope")||Ho.createElement("div"):t)}},su=function(t){return t.sort(function(){return .5-Math.random()})},ru=function(t){if(he(t))return t;var e=Ti(t)?t:{each:t},i=Pn(e.ease),n=e.from||0,s=parseFloat(e.base)||0,a={},o=n>0&&n<1,h=isNaN(n)||o,l=e.axis,c=n,u=n;return Se(n)?c=u={center:.5,edges:.5,end:1}[n]||0:!o&&h&&(c=n[0],u=n[1]),function(f,d,_){var g=(_||e).length,p=a[g],m,S,v,x,E,y,T,R,M;if(!p){if(M=e.grid==="auto"?0:(e.grid||[1,oi])[1],!M){for(T=-oi;T<(T=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(p=a[g]=[],m=h?Math.min(M,g)*c-.5:n%M,S=M===oi?0:h?g*u/M-.5:n/M|0,T=0,R=oi,y=0;y<g;y++)v=y%M-m,x=S-(y/M|0),p[y]=E=l?Math.abs(l==="y"?x:v):Hc(v*v+x*x),E>T&&(T=E),E<R&&(R=E);n==="random"&&su(p),p.max=T-R,p.min=R,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(M>g?g-1:l?l==="y"?g/M:M:Math.max(M,g/M))||0)*(n==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Ce(e.amount||e.each)||0,i=i&&g<0?tx(i):i}return g=(p[f]-p.min)/p.max||0,ie(p.b+(i?i(g):g)*p.v)+p.u}},vo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=ie(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(zi(i)?0:Ce(i))}},au=function(t,e){var i=Pe(t),n,s;return!i&&Ti(t)&&(n=i=t.radius||oi,t.values?(t=hi(t.values),(s=!zi(t[0]))&&(n*=n)):t=vo(t.increment)),hn(e,i?he(t)?function(a){return s=t(a),Math.abs(s-a)<=n?s:a}:function(a){for(var o=parseFloat(s?a.x:a),h=parseFloat(s?a.y:0),l=oi,c=0,u=t.length,f,d;u--;)s?(f=t[u].x-o,d=t[u].y-h,f=f*f+d*d):f=Math.abs(t[u]-o),f<l&&(l=f,c=u);return c=!n||l<=n?t[c]:a,s||c===a||zi(a)?c:c+Ce(a)}:vo(t))},ou=function(t,e,i,n){return hn(Pe(t)?!e:i===!0?!!(i=0):!n,function(){return Pe(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},V_=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(s,a){return a(s)},n)}},G_=function(t,e){return function(i){return t(parseFloat(i))+(e||Ce(i))}},X_=function(t,e,i){return lu(t,e,0,1,i)},hu=function(t,e,i){return hn(i,function(n){return t[~~e(n)]})},W_=function r(t,e,i){var n=e-t;return Pe(t)?hu(t,r(0,t.length),e):hn(i,function(s){return(n+(s-t)%n)%n+t})},Y_=function r(t,e,i){var n=e-t,s=n*2;return Pe(t)?hu(t,r(0,t.length-1),e):hn(i,function(a){return a=(s+(a-t)%s)%s||0,t+(a>n?s-a:a)})},Xs=function(t){return t.replace(E_,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(w_);return ou(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},lu=function(t,e,i,n,s){var a=e-t,o=n-i;return hn(s,function(h){return i+((h-t)/a*o||0)})},q_=function r(t,e,i,n){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Se(t),o={},h,l,c,u,f;if(i===!0&&(n=1)&&(i=null),a)t={p:t},e={p:e};else if(Pe(t)&&!Pe(e)){for(c=[],u=t.length,f=u-2,l=1;l<u;l++)c.push(r(t[l-1],t[l]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return c[g](_-g)},i=e}else n||(t=ms(Pe(t)?[]:{},t));if(!c){for(h in e)qo.call(o,t,h,"get",e[h]);s=function(_){return $o(_,o)||(a?t.p:t)}}}return hn(i,s)},Vl=function(t,e,i){var n=t.labels,s=oi,a,o,h;for(a in n)o=n[a]-e,o<0==!!i&&o&&s>(o=Math.abs(o))&&(h=a,s=o);return h},Ze=function(t,e,i){var n=t.vars,s=n[e],a=te,o=t._ctx,h,l,c;if(s)return h=n[e+"Params"],l=n.callbackScope||t,i&&en.length&&Gr(),o&&(te=o),c=h?s.apply(l,h):s.call(l),te=a,c},Ls=function(t){return rn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!be),t.progress()<1&&Ze(t,"onInterrupt"),t},ns,cu=[],uu=function(t){if(t)if(t=!t.name&&t.default||t,zo()||t.headless){var e=t.name,i=he(t),n=e&&!i&&t.init?function(){this._props=[]}:t,s={init:Gs,render:$o,add:qo,kill:cx,modifier:lx,rawVars:0},a={targetTest:0,get:0,getSetter:Zo,aliases:{},register:0};if(xs(),t!==n){if(je[e])return;ti(n,ti(Xr(t,s),a)),ms(n.prototype,ms(s,Xr(t,a))),je[n.prop=e]=n,t.targetTest&&(Ur.push(n),Go[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}qc(e,n),t.register&&t.register(Xe,n,Ve)}else cu.push(t)},jt=255,Ds={aqua:[0,jt,jt],lime:[0,jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,jt],navy:[0,0,128],white:[jt,jt,jt],olive:[128,128,0],yellow:[jt,jt,0],orange:[jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[jt,0,0],pink:[jt,192,203],cyan:[0,jt,jt],transparent:[jt,jt,jt,0]},Wa=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*jt+.5|0},du=function(t,e,i){var n=t?zi(t)?[t>>16,t>>8&jt,t&jt]:0:Ds.black,s,a,o,h,l,c,u,f,d,_;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ds[t])n=Ds[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&jt,n&jt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&jt,t&jt]}else if(t.substr(0,3)==="hsl"){if(n=_=t.match(Nl),!e)h=+n[0]%360/360,l=+n[1]/100,c=+n[2]/100,a=c<=.5?c*(l+1):c+l-c*l,s=c*2-a,n.length>3&&(n[3]*=1),n[0]=Wa(h+1/3,s,a),n[1]=Wa(h,s,a),n[2]=Wa(h-1/3,s,a);else if(~t.indexOf("="))return n=t.match(Gc),i&&n.length<4&&(n[3]=1),n}else n=t.match(Nl)||Ds.transparent;n=n.map(Number)}return e&&!_&&(s=n[0]/jt,a=n[1]/jt,o=n[2]/jt,u=Math.max(s,a,o),f=Math.min(s,a,o),c=(u+f)/2,u===f?h=l=0:(d=u-f,l=c>.5?d/(2-u-f):d/(u+f),h=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,h*=60),n[0]=~~(h+.5),n[1]=~~(l*100+.5),n[2]=~~(c*100+.5)),i&&n.length<4&&(n[3]=1),n},fu=function(t){var e=[],i=[],n=-1;return t.split(nn).forEach(function(s){var a=s.match(is)||[];e.push.apply(e,a),i.push(n+=a.length+1)}),e.c=i,e},Gl=function(t,e,i){var n="",s=(t+n).match(nn),a=e?"hsla(":"rgba(",o=0,h,l,c,u;if(!s)return t;if(s=s.map(function(f){return(f=du(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=fu(t),h=i.c,h.join(n)!==c.c.join(n)))for(l=t.replace(nn,"1").split(is),u=l.length-1;o<u;o++)n+=l[o]+(~h.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!l)for(l=t.split(nn),u=l.length-1;o<u;o++)n+=l[o]+s[o];return n+l[u]},nn=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ds)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),j_=/hsl[a]?\(/,pu=function(t){var e=t.join(" "),i;if(nn.lastIndex=0,nn.test(e))return i=j_.test(e),t[1]=Gl(t[1],i),t[0]=Gl(t[0],i,fu(t[1])),!0},Ws,Je=function(){var r=Date.now,t=500,e=33,i=r(),n=i,s=1e3/240,a=s,o=[],h,l,c,u,f,d,_=function g(p){var m=r()-n,S=p===!0,v,x,E,y;if((m>t||m<0)&&(i+=m-e),n+=m,E=n-i,v=E-a,(v>0||S)&&(y=++u.frame,f=E-u.time*1e3,u.time=E=E/1e3,a+=v+(v>=s?4:s-v),x=1),S||(h=l(g)),x)for(d=0;d<o.length;d++)o[d](E,f,y,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Wc&&(!fo&&zo()&&(xi=fo=window,Ho=xi.document||{},Qe.gsap=Xe,(xi.gsapVersions||(xi.gsapVersions=[])).push(Xe.version),Yc(Vr||xi.GreenSockGlobals||!xi.gsap&&xi||{}),cu.forEach(uu)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,h&&u.sleep(),l=c||function(p){return setTimeout(p,a-u.time*1e3+1|0)},Ws=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(h),Ws=0,l=Gs},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=u.time*1e3+s},add:function(p,m,S){var v=m?function(x,E,y,T){p(x,E,y,T),u.remove(v)}:p;return u.remove(p),o[S?"unshift":"push"](v),xs(),v},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},u}(),xs=function(){return!Ws&&Je.wake()},Vt={},J_=/^[\d.\-M][\d.\-,\s]/,Z_=/["']/g,$_=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],s=1,a=i.length,o,h,l;s<a;s++)h=i[s],o=s!==a-1?h.lastIndexOf(","):h.length,l=h.substr(0,o),e[n]=isNaN(l)?l.replace(Z_,"").trim():+l,n=h.substr(o+1).trim();return e},K_=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},Q_=function(t){var e=(t+"").split("("),i=Vt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[$_(e[1])]:K_(t).split(",").map($c)):Vt._CE&&J_.test(t)?Vt._CE("",t):i},tx=function(t){return function(e){return 1-t(1-e)}},Pn=function(t,e){return t&&(he(t)?t:Vt[t]||Q_(t))||e},In=function(t,e,i,n){i===void 0&&(i=function(h){return 1-e(1-h)}),n===void 0&&(n=function(h){return h<.5?e(h*2)/2:1-e((1-h)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:n},a;return He(t,function(o){Vt[o]=Qe[o]=s,Vt[a=o.toLowerCase()]=i;for(var h in s)Vt[a+(h==="easeIn"?".in":h==="easeOut"?".out":".inOut")]=Vt[o+"."+h]=s[h]}),s},mu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ya=function r(t,e,i){var n=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),a=s/uo*(Math.asin(1/n)||0),o=function(c){return c===1?1:n*Math.pow(2,-10*c)*b_((c-a)*s)+1},h=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:mu(o);return s=uo/s,h.config=function(l,c){return r(t,l,c)},h},qa=function r(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},n=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:mu(i);return n.config=function(s){return r(t,s)},n};He("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;In(r+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Vt.Linear.easeNone=Vt.none=Vt.Linear.easeIn;In("Elastic",Ya("in"),Ya("out"),Ya());(function(r,t){var e=1/t,i=2*e,n=2.5*e,s=function(o){return o<e?r*o*o:o<i?r*Math.pow(o-1.5/t,2)+.75:o<n?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};In("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);In("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});In("Circ",function(r){return-(Hc(1-r*r)-1)});In("Sine",function(r){return r===1?1:-T_(r*S_)+1});In("Back",qa("in"),qa("out"),qa());Vt.SteppedEase=Vt.steps=Qe.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),s=e?1:0,a=1-Jt;return function(o){return((n*Qs(0,a,o)|0)+s)*i}}};Hs.ease=Vt["quad.out"];He("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Xo+=r+","+r+"Params,"});var gu=function(t,e){this.id=M_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Jc,this.set=e?e.getSetter:Zo},Ys=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,_s(this,+e.duration,1,1),this.data=e.data,te&&(this._ctx=te,te.data.push(this)),Ws||Je.wake()}var t=r.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,_s(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(xs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ia(this,i),!s._dp||s.parent||tu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&yi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Jt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Zc(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+zl(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+zl(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?gs(this._tTime,s)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-Jt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Wr(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Jt?0:this._rts,this.totalTime(Qs(-Math.abs(this._delay),this.totalDuration(),s),n!==!1),ea(this),U_(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Jt&&(this._tTime-=Jt)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=ie(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&yi(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(ze(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wr(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=P_);var n=be;return be=i,Yo(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),be=n,this},t.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Hl(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Hl(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(ni(this,i),ze(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,ze(n)),this._dur||(this._zTime=-Jt),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Jt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Jt,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-Jt)},t.eventCallback=function(i,n,s){var a=this.vars;return arguments.length>1?(n?(a[i]=n,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},t.then=function(i){var n=this,s=n._prom;return new Promise(function(a){var o=he(i)?i:Kc,h=function(){var c=n.then;n.then=null,s&&s(),he(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=c),a(o),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?h():n._prom=h})},t.kill=function(){Ls(this)},r}();ti(Ys.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Jt,_prom:0,_ps:!1,_rts:1});var Ne=function(r){zc(t,r);function t(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ze(i.sortChildren),ne&&yi(i.parent||ne,Ii(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&eu(Ii(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(n,s,a){return Ns(0,arguments,this),this},e.from=function(n,s,a){return Ns(1,arguments,this),this},e.fromTo=function(n,s,a,o){return Ns(2,arguments,this),this},e.set=function(n,s,a){return s.duration=0,s.parent=this,Fs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new fe(n,s,ni(this,a),1),this},e.call=function(n,s,a){return yi(this,fe.delayedCall(0,n,s),a)},e.staggerTo=function(n,s,a,o,h,l,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=c,a.parent=this,new fe(n,a,ni(this,h)),this},e.staggerFrom=function(n,s,a,o,h,l,c){return a.runBackwards=1,Fs(a).immediateRender=ze(a.immediateRender),this.staggerTo(n,s,a,o,h,l,c)},e.staggerFromTo=function(n,s,a,o,h,l,c,u){return o.startAt=a,Fs(o).immediateRender=ze(o.immediateRender),this.staggerTo(n,s,o,h,l,c,u)},e.render=function(n,s,a){var o=this._time,h=this._dirty?this.totalDuration():this._tDur,l=this._dur,c=n<=0?0:ie(n),u=this._zTime<0!=n<0&&(this._initted||!l),f,d,_,g,p,m,S,v,x,E,y,T;if(this!==ne&&c>h&&n>=0&&(c=h),c!==this._tTime||a||u){if(o!==this._time&&l&&(c+=this._time-o,n+=this._time-o),f=c,x=this._start,v=this._ts,m=!v,u&&(l||(o=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(y=this._yoyo,p=l+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,s,a);if(f=ie(c%p),c===h?(g=this._repeat,f=l):(E=ie(c/p),g=~~E,g&&g===E&&(f=l,g--),f>l&&(f=l)),E=gs(this._tTime,p),!o&&this._tTime&&E!==g&&this._tTime-E*p-this._dur<=0&&(E=g),y&&g&1&&(f=l-f,T=1),g!==E&&!this._lock){var R=y&&E&1,M=R===(y&&g&1);if(g<E&&(R=!R),o=R?0:c%l?l:c,this._lock=1,this.render(o||(T?0:ie(g*p)),s,!l)._lock=0,this._tTime=c,!s&&this.parent&&Ze(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,E=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,h=this._tDur,M&&(this._lock=2,o=R?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=k_(this,ie(o),ie(f)),S&&(c-=f-(f=S._start))),this._tTime=c,this._time=f,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&c&&l&&!s&&!E&&(Ze(this,"onStart"),this._tTime!==c))return this;if(f>=o&&n>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(n,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!m){S=0,_&&(c+=this._zTime=-Jt);break}}d=_}else{d=this._last;for(var b=n<0?n:f;d;){if(_=d._prev,(d._act||b<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(n,s,a);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,a||be&&Yo(d)),f!==this._time||!this._ts&&!m){S=0,_&&(c+=this._zTime=b?-Jt:Jt);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-Jt)._zTime=f>=o?1:-1,this._ts))return this._start=x,ea(this),this.render(n,s,a);this._onUpdate&&!s&&Ze(this,"onUpdate",!0),(c===h&&this._tTime>=this.totalDuration()||!c&&o)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((n||!l)&&(c===h&&this._ts>0||!c&&this._ts<0)&&rn(this,1),!s&&!(n<0&&!o)&&(c||o||!h)&&(Ze(this,c===h&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<h&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,s){var a=this;if(zi(s)||(s=ni(this,s,n)),!(n instanceof Ys)){if(Pe(n))return n.forEach(function(o){return a.add(o,s)}),this;if(Se(n))return this.addLabel(n,s);if(he(n))n=fe.delayedCall(0,n);else return this}return this!==n?yi(this,n,s):this},e.getChildren=function(n,s,a,o){n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-oi);for(var h=[],l=this._first;l;)l._start>=o&&(l instanceof fe?s&&h.push(l):(a&&h.push(l),n&&h.push.apply(h,l.getChildren(!0,s,a)))),l=l._next;return h},e.getById=function(n){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===n)return s[a]},e.remove=function(n){return Se(n)?this.removeLabel(n):he(n)?this.killTweensOf(n):(n.parent===this&&ta(this,n),n===this._recent&&(this._recent=this._last),Rn(this))},e.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ie(Je.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},e.addLabel=function(n,s){return this.labels[n]=ni(this,s),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,s,a){var o=fe.delayedCall(0,s||Gs,a);return o.data="isPause",this._hasPause=1,yi(this,o,ni(this,n))},e.removePause=function(n){var s=this._first;for(n=ni(this,n);s;)s._start===n&&s.data==="isPause"&&rn(s),s=s._next},e.killTweensOf=function(n,s,a){for(var o=this.getTweensOf(n,a),h=o.length;h--;)Ji!==o[h]&&o[h].kill(n,s);return this},e.getTweensOf=function(n,s){for(var a=[],o=hi(n),h=this._first,l=zi(s),c;h;)h instanceof fe?L_(h._targets,o)&&(l?(!Ji||h._initted&&h._ts)&&h.globalTime(0)<=s&&h.globalTime(h.totalDuration())>s:!s||h.isActive())&&a.push(h):(c=h.getTweensOf(o,s)).length&&a.push.apply(a,c),h=h._next;return a},e.tweenTo=function(n,s){s=s||{};var a=this,o=ni(a,n),h=s,l=h.startAt,c=h.onStart,u=h.onStartParams,f=h.immediateRender,d,_=fe.to(a,ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||Jt,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());_._dur!==p&&_s(_,p,0,1).render(_._time,!0,!0),d=1}c&&c.apply(_,u||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(n,s,a){return this.tweenTo(s,ti({startAt:{time:ni(this,n)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),Vl(this,ni(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),Vl(this,ni(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Jt)},e.shiftChildren=function(n,s,a){a===void 0&&(a=0);var o=this._first,h=this.labels,l;for(n=ie(n);o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(s)for(l in h)h[l]>=a&&(h[l]+=n);return Rn(this)},e.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Rn(this)},e.totalDuration=function(n){var s=0,a=this,o=a._last,h=oi,l,c,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(u=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>h&&a._sort&&o._ts&&!a._lock?(a._lock=1,yi(a,o,c-o._delay,1)._lock=0):h=c,c<0&&o._ts&&(s-=c,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=ie(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),h=0),o._end>s&&o._ts&&(s=o._end),o=l;_s(a,a===ne&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(n){if(ne._ts&&(Zc(ne,Wr(n,ne)),jc=Je.frame),Je.frame>=kl){kl+=Ke.autoSleep||120;var s=ne._first;if((!s||!s._ts)&&Ke.autoSleep&&Je._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Je.sleep()}}},t}(Ys);ti(Ne.prototype,{_lock:0,_hasPause:0,_forcing:0});var ex=function(t,e,i,n,s,a,o){var h=new Ve(this._pt,t,e,0,1,Mu,null,s),l=0,c=0,u,f,d,_,g,p,m,S;for(h.b=i,h.e=n,i+="",n+="",(m=~n.indexOf("random("))&&(n=Xs(n)),a&&(S=[i,n],a(S,t,e),i=S[0],n=S[1]),f=i.match(Ga)||[];u=Ga.exec(n);)_=u[0],g=n.substring(l,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[c++]&&(p=parseFloat(f[c-1])||0,h._pt={_next:h._pt,p:g||c===1?g:",",s:p,c:_.charAt(1)==="="?as(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},l=Ga.lastIndex);return h.c=l<n.length?n.substring(l,n.length):"",h.fp=o,(Xc.test(n)||m)&&(h.e=0),this._pt=h,h},qo=function(t,e,i,n,s,a,o,h,l,c){he(n)&&(n=n(s||0,t,a));var u=t[e],f=i!=="get"?i:he(u)?l?t[e.indexOf("set")||!he(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,d=he(u)?l?ax:yu:Jo,_;if(Se(n)&&(~n.indexOf("random(")&&(n=Xs(n)),n.charAt(1)==="="&&(_=as(f,n)+(Ce(f)||0),(_||_===0)&&(n=_))),!c||f!==n||yo)return!isNaN(f*n)&&n!==""?(_=new Ve(this._pt,t,e,+f||0,n-(f||0),typeof u=="boolean"?hx:Su,0,d),l&&(_.fp=l),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&Vo(e,n),ex.call(this,t,e,f,n,d,h||Ke.stringFilter,l))},ix=function(t,e,i,n,s){if(he(t)&&(t=ks(t,s,e,i,n)),!Ti(t)||t.style&&t.nodeType||Pe(t)||Vc(t))return Se(t)?ks(t,s,e,i,n):t;var a={},o;for(o in t)a[o]=ks(t[o],s,e,i,n);return a},_u=function(t,e,i,n,s,a){var o,h,l,c;if(je[t]&&(o=new je[t]).init(s,o.rawVars?e[t]:ix(e[t],n,s,a,i),i,n,a)!==!1&&(i._pt=h=new Ve(i._pt,s,t,0,1,o.render,o,0,o.priority),i!==ns))for(l=i._ptLookup[i._targets.indexOf(s)],c=o._props.length;c--;)l[o._props[c]]=h;return o},Ji,yo,jo=function r(t,e,i){var n=t.vars,s=n.ease,a=n.startAt,o=n.immediateRender,h=n.lazy,l=n.onUpdate,c=n.runBackwards,u=n.yoyoEase,f=n.keyframes,d=n.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:p,v=t._overwrite==="auto"&&!ko,x=t.timeline,E=n.easeReverse||u,y,T,R,M,b,I,L,B,P,F,V,q,k;if(x&&(!f||!s)&&(s="none"),t._ease=Pn(s,Hs.ease),t._rEase=E&&(Pn(E)||t._ease),t._from=!x&&!!n.runBackwards,t._from&&(t.ratio=1),!x||f&&!n.stagger){if(B=p[0]?Cn(p[0]).harness:0,q=B&&n[B.prop],y=Xr(n,Go),g&&(g._zTime<0&&g.progress(1),e<0&&c&&o&&!d?g.render(-1,!0):g.revert(c&&_?Ir:R_),g._lazy=0),a){if(rn(t._startAt=fe.set(p,ti({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&ze(h),startAt:null,delay:0,onUpdate:l&&function(){return Ze(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(be||!o&&!d)&&t._startAt.revert(Ir),o&&_&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(c&&_&&!g){if(e&&(o=!1),R=ti({overwrite:!1,data:"isFromStart",lazy:o&&!g&&ze(h),immediateRender:o,stagger:0,parent:m},y),q&&(R[B.prop]=q),rn(t._startAt=fe.set(p,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(be?t._startAt.revert(Ir):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Jt,Jt);else if(!e)return}for(t._pt=t._ptCache=0,h=_&&ze(h)||h&&!_,T=0;T<p.length;T++){if(b=p[T],L=b._gsap||Wo(p)[T]._gsap,t._ptLookup[T]=F={},po[L.id]&&en.length&&Gr(),V=S===p?T:S.indexOf(b),B&&(P=new B).init(b,q||y,t,V,S)!==!1&&(t._pt=M=new Ve(t._pt,b,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(N){F[N]=M}),P.priority&&(I=1)),!B||q)for(R in y)je[R]&&(P=_u(R,y,t,V,b,S))?P.priority&&(I=1):F[R]=M=qo.call(t,b,R,"get",y[R],V,S,0,n.stringFilter);t._op&&t._op[T]&&t.kill(b,t._op[T]),v&&t._pt&&(Ji=t,ne.killTweensOf(b,F,t.globalTime(e)),k=!t.parent,Ji=0),t._pt&&h&&(po[L.id]=1)}I&&Tu(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!k,f&&e<=0&&x.render(oi,!0,!0)},nx=function(t,e,i,n,s,a,o,h){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,f,d;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(c=f[d][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return yo=1,t.vars[e]="+=0",jo(t,o),yo=0,h?Vs(e+" not eligible for reset. Try splitting into individual properties"):1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(n||n===0)&&!s?n:c.s+(n||0)+a*c.c,c.c=i-c.s,u.e&&(u.e=ce(i)+Ce(u.e)),u.b&&(u.b=c.s+Ce(u.b))},sx=function(t,e){var i=t[0]?Cn(t[0]).harness:0,n=i&&i.aliases,s,a,o,h;if(!n)return e;s=ms({},e);for(a in n)if(a in s)for(h=n[a].split(","),o=h.length;o--;)s[h[o]]=s[a];return s},rx=function(t,e,i,n){var s=e.ease||n||"power1.inOut",a,o;if(Pe(e))o=i[t]||(i[t]=[]),e.forEach(function(h,l){return o.push({t:l/(e.length-1)*100,v:h,e:s})});else for(a in e)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},ks=function(t,e,i,n,s){return he(t)?t.call(e,i,n,s):Se(t)&&~t.indexOf("random(")?Xs(t):t},xu=Xo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",vu={};He(xu+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return vu[r]=1});var fe=function(r){zc(t,r);function t(i,n,s,a){var o;typeof n=="number"&&(s.duration=n,n=s,s=null),o=r.call(this,a?n:Fs(n))||this;var h=o.vars,l=h.duration,c=h.delay,u=h.immediateRender,f=h.stagger,d=h.overwrite,_=h.keyframes,g=h.defaults,p=h.scrollTrigger,m=n.parent||ne,S=(Pe(i)||Vc(i)?zi(i[0]):"length"in n)?[i]:hi(i),v,x,E,y,T,R,M,b;if(o._targets=S.length?Wo(S):Vs("GSAP target "+i+" not found. https://gsap.com",!Ke.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||Ar(l)||Ar(c)){n=o.vars;var I=n.easeReverse||n.yoyoEase;if(v=o.timeline=new Ne({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:S}),v.kill(),v.parent=v._dp=Ii(o),v._start=0,f||Ar(l)||Ar(c)){if(y=S.length,M=f&&ru(f),Ti(f))for(T in f)~xu.indexOf(T)&&(b||(b={}),b[T]=f[T]);for(x=0;x<y;x++)E=Xr(n,vu),E.stagger=0,I&&(E.easeReverse=I),b&&ms(E,b),R=S[x],E.duration=+ks(l,Ii(o),x,R,S),E.delay=(+ks(c,Ii(o),x,R,S)||0)-o._delay,!f&&y===1&&E.delay&&(o._delay=c=E.delay,o._start+=c,E.delay=0),v.to(R,E,M?M(x,R,S):0),v._ease=Vt.none;v.duration()?l=c=0:o.timeline=0}else if(_){Fs(ti(v.vars.defaults,{ease:"none"})),v._ease=Pn(_.ease||n.ease||"none");var L=0,B,P,F;if(Pe(_))_.forEach(function(V){return v.to(S,V,">")}),v.duration();else{E={};for(T in _)T==="ease"||T==="easeEach"||rx(T,_[T],E,_.easeEach);for(T in E)for(B=E[T].sort(function(V,q){return V.t-q.t}),L=0,x=0;x<B.length;x++)P=B[x],F={ease:P.e,duration:(P.t-(x?B[x-1].t:0))/100*l},F[T]=P.v,v.to(S,F,L),L+=F.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||o.duration(l=v.duration())}else o.timeline=0;return d===!0&&!ko&&(Ji=Ii(o),ne.killTweensOf(S),Ji=0),yi(m,Ii(o),s),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(u||!l&&!_&&o._start===ie(m._time)&&ze(u)&&O_(Ii(o))&&m.data!=="nested")&&(o._tTime=-Jt,o.render(Math.max(0,-c)||0)),p&&eu(Ii(o),p),o}var e=t.prototype;return e.render=function(n,s,a){var o=this._time,h=this._tDur,l=this._dur,c=n<0,u=n>h-Jt&&!c?h:n<Jt?0:n,f,d,_,g,p,m,S,v;if(!l)N_(this,n,s,a);else if(u!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=u,v=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+n,s,a);if(f=ie(u%g),u===h?(_=this._repeat,f=l):(p=ie(u/g),_=~~p,_&&_===p?(f=l,_--):f>l&&(f=l)),m=this._yoyo&&_&1,m&&(f=l-f),p=gs(this._tTime,g),f===o&&!a&&this._initted&&_===p)return this._tTime=u,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(ie(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(iu(this,c?n:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(l!==this._dur)return this.render(n,s,a)}if(this._rEase){var x=f<o;if(x!==this._inv){var E=x?o:l-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(x?-1:1)/E:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/l);if(this._from&&(this.ratio=S=1-S),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!p&&(Ze(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;v&&v.render(n<0?n:v._dur*v._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(c&&mo(this,n,s,a),Ze(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Ze(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(c&&!this._onUpdate&&mo(this,n,!0,!0),(n||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&rn(this,1),!s&&!(c&&!o)&&(u||o||m)&&(Ze(this,u===h?"onComplete":"onReverseComplete",!0),this._prom&&!(u<h&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},e.resetTo=function(n,s,a,o,h){Ws||Je.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||jo(this,l),c=this._ease(l/this._dur),nx(this,n,s,a,o,c,l,h)?this.resetTo(n,s,a,o,1):(ia(this,0),this.parent||Qc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ls(this):this.scrollTrigger&&this.scrollTrigger.kill(!!be),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,Ji&&Ji.vars.overwrite!==!0)._first||Ls(this),this.parent&&a!==this.timeline.totalDuration()&&_s(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,h=n?hi(n):o,l=this._ptLookup,c=this._pt,u,f,d,_,g,p,m;if((!s||s==="all")&&I_(o,h))return s==="all"&&(this._pt=0),Ls(this);for(u=this._op=this._op||[],s!=="all"&&(Se(s)&&(g={},He(s,function(S){return g[S]=1}),s=g),s=sx(o,s)),m=o.length;m--;)if(~h.indexOf(o[m])){f=l[m],s==="all"?(u[m]=s,_=f,d={}):(d=u[m]=u[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&ta(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&c&&Ls(this),this},t.to=function(n,s){return new t(n,s,arguments[2])},t.from=function(n,s){return Ns(1,arguments)},t.delayedCall=function(n,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(n,s,a){return Ns(2,arguments)},t.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(n,s)},t.killTweensOf=function(n,s,a){return ne.killTweensOf(n,s,a)},t}(Ys);ti(fe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});He("staggerTo,staggerFrom,staggerFromTo",function(r){fe[r]=function(){var t=new Ne,e=_o.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Jo=function(t,e,i){return t[e]=i},yu=function(t,e,i){return t[e](i)},ax=function(t,e,i,n){return t[e](n.fp,i)},ox=function(t,e,i){return t.setAttribute(e,i)},Zo=function(t,e){return he(t[e])?yu:Bo(t[e])&&t.setAttribute?ox:Jo},Su=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},hx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Mu=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},$o=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},lx=function(t,e,i,n){for(var s=this._pt,a;s;)a=s._next,s.p===n&&s.modifier(t,e,i),s=a},cx=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?ta(this,e,"_pt"):e.dep||(i=1),e=n;return!i},ux=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},Tu=function(t){for(var e=t._pt,i,n,s,a;e;){for(i=e._next,n=s;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:a)?e._prev._next=e:s=e,(e._next=n)?n._prev=e:a=e,e=i}t._pt=s},Ve=function(){function r(e,i,n,s,a,o,h,l,c){this.t=i,this.s=s,this.c=a,this.p=n,this.r=o||Su,this.d=h||this,this.set=l||Jo,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=ux,this.m=i,this.mt=s,this.tween=n},r}();He(Xo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Go[r]=1});Qe.TweenMax=Qe.TweenLite=fe;Qe.TimelineLite=Qe.TimelineMax=Ne;ne=new Ne({sortChildren:!1,defaults:Hs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ke.stringFilter=pu;var Ln=[],Or={},dx=[],Xl=0,fx=0,ja=function(t){return(Or[t]||dx).map(function(e){return e()})},So=function(){var t=Date.now(),e=[];t-Xl>2&&(ja("matchMediaInit"),Ln.forEach(function(i){var n=i.queries,s=i.conditions,a,o,h,l;for(o in n)a=xi.matchMedia(n[o]).matches,a&&(h=1),a!==s[o]&&(s[o]=a,l=1);l&&(i.revert(),h&&e.push(i))}),ja("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Xl=t,ja("matchMedia"))},bu=function(){function r(e,i){this.selector=i&&xo(i),this.data=[],this._r=[],this.isReverted=!1,this.id=fx++,e&&this.add(e)}var t=r.prototype;return t.add=function(i,n,s){he(i)&&(s=n,n=i,i=he);var a=this,o=function(){var l=te,c=a.selector,u;return l&&l!==a&&l.data.push(a),s&&(a.selector=xo(s)),te=a,u=n.apply(a,arguments),he(u)&&a._r.push(u),te=l,a.selector=c,a.isReverted=!1,u};return a.last=o,i===he?o(a,function(h){return a.add(null,h)}):i?a[i]=o:o},t.ignore=function(i){var n=te;te=null,i(this),te=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof fe&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var s=this;if(i?function(){for(var o=s.getTweens(),h=s.data.length,l;h--;)l=s.data[h],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,u){return u.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),h=s.data.length;h--;)l=s.data[h],l instanceof Ne?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof fe)&&l.revert&&l.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=Ln.length;a--;)Ln[a].id===this.id&&Ln.splice(a,1)},t.revert=function(i){this.kill(i||{})},r}(),px=function(){function r(e){this.contexts=[],this.scope=e,te&&te.data.push(this)}var t=r.prototype;return t.add=function(i,n,s){Ti(i)||(i={matches:i});var a=new bu(0,s||this.scope),o=a.conditions={},h,l,c;te&&!a.selector&&(a.selector=te.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(l in i)l==="all"?c=1:(h=xi.matchMedia(i[l]),h&&(Ln.indexOf(a)<0&&Ln.push(a),(o[l]=h.matches)&&(c=1),h.addListener?h.addListener(So):h.addEventListener("change",So)));return c&&n(a,function(u){return a.add(null,u)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r}(),Yr={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return uu(n)})},timeline:function(t){return new Ne(t)},getTweensOf:function(t,e){return ne.getTweensOf(t,e)},getProperty:function(t,e,i,n){Se(t)&&(t=hi(t)[0]);var s=Cn(t||{}).get,a=i?Kc:$c;return i==="native"&&(i=""),t&&(e?a((je[e]&&je[e].get||s)(t,e,i,n)):function(o,h,l){return a((je[o]&&je[o].get||s)(t,o,h,l))})},quickSetter:function(t,e,i){if(t=hi(t),t.length>1){var n=t.map(function(c){return Xe.quickSetter(c,e,i)}),s=n.length;return function(c){for(var u=s;u--;)n[u](c)}}t=t[0]||{};var a=je[e],o=Cn(t),h=o.harness&&(o.harness.aliases||{})[e]||e,l=a?function(c){var u=new a;ns._pt=0,u.init(t,i?c+i:c,ns,0,[t]),u.render(1,u),ns._pt&&$o(1,ns)}:o.set(t,h);return a?l:function(c){return l(t,h,i?c+i:c,o,1)}},quickTo:function(t,e,i){var n,s=Xe.to(t,ti((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(h,l,c){return s.resetTo(e,h,l,c)};return a.tween=s,a},isTweening:function(t){return ne.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Pn(t.ease,Hs.ease)),Bl(Hs,t||{})},config:function(t){return Bl(Ke,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,s=t.defaults,a=t.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!je[o]&&!Qe[o]&&Vs(e+" effect requires "+o+" plugin.")}),Xa[e]=function(o,h,l){return i(hi(o),ti(h||{},s),l)},a&&(Ne.prototype[e]=function(o,h,l){return this.add(Xa[e](o,Ti(h)?h:(l=h)&&{},this),l)})},registerEase:function(t,e){Vt[t]=Pn(e)},parseEase:function(t,e){return arguments.length?Pn(t,e):Vt},getById:function(t){return ne.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Ne(t),n,s;for(i.smoothChildTiming=ze(t.smoothChildTiming),ne.remove(i),i._dp=0,i._time=i._tTime=ne._time,n=ne._first;n;)s=n._next,(e||!(!n._dur&&n instanceof fe&&n.vars.onComplete===n._targets[0]))&&yi(i,n,n._start-n._delay),n=s;return yi(ne,i,0),i},context:function(t,e){return t?new bu(t,e):te},matchMedia:function(t){return new px(t)},matchMediaRefresh:function(){return Ln.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||So()},addEventListener:function(t,e){var i=Or[t]||(Or[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Or[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:W_,wrapYoyo:Y_,distribute:ru,random:ou,snap:au,normalize:X_,getUnit:Ce,clamp:z_,splitColor:du,toArray:hi,selector:xo,mapRange:lu,pipe:V_,unitize:G_,interpolate:q_,shuffle:su},install:Yc,effects:Xa,ticker:Je,updateRoot:Ne.updateRoot,plugins:je,globalTimeline:ne,core:{PropTween:Ve,globals:qc,Tween:fe,Timeline:Ne,Animation:Ys,getCache:Cn,_removeLinkedListItem:ta,reverting:function(){return be},context:function(t){return t&&te&&(te.data.push(t),t._ctx=te),te},suppressOverwrites:function(t){return ko=t}}};He("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Yr[r]=fe[r]});Je.add(Ne.updateRoot);ns=Yr.to({},{duration:0});var mx=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},gx=function(t,e){var i=t._targets,n,s,a;for(n in e)for(s=i.length;s--;)a=t._ptLookup[s][n],a&&(a=a.d)&&(a._pt&&(a=mx(a,n)),a&&a.modifier&&a.modifier(e[n],t,i[s],n))},Ja=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,s,a){a._onInit=function(o){var h,l;if(Se(s)&&(h={},He(s,function(c){return h[c]=1}),s=h),e){h={};for(l in s)h[l]=e(s[l]);s=h}gx(o,s)}}}},Xe=Yr.registerPlugin({name:"attr",init:function(t,e,i,n,s){var a,o,h;this.tween=i;for(a in e)h=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(h||0)+"",e[a],n,s,0,0,a),o.op=a,o.b=h,this._props.push(a)},render:function(t,e){for(var i=e._pt;i;)be?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Ja("roundProps",vo),Ja("modifiers"),Ja("snap",au))||Yr;fe.version=Ne.version=Xe.version="3.15.0";Wc=1;zo()&&xs();Vt.Power0;Vt.Power1;Vt.Power2;Vt.Power3;Vt.Power4;Vt.Linear;Vt.Quad;Vt.Cubic;Vt.Quart;Vt.Quint;Vt.Strong;Vt.Elastic;Vt.Back;Vt.SteppedEase;Vt.Bounce;Vt.Sine;Vt.Expo;Vt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wl,Zi,os,Ko,Tn,Yl,Qo,_x=function(){return typeof window<"u"},Hi={},vn=180/Math.PI,hs=Math.PI/180,$n=Math.atan2,ql=1e8,th=/([A-Z])/g,xx=/(left|right|width|margin|padding|x)/i,vx=/[\s,\(]\S/,Si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Mo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},yx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Sx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Mx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Tx=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Eu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},wu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},bx=function(t,e,i){return t.style[e]=i},Ex=function(t,e,i){return t.style.setProperty(e,i)},wx=function(t,e,i){return t._gsap[e]=i},Ax=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Cx=function(t,e,i,n,s){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},Rx=function(t,e,i,n,s){var a=t._gsap;a[e]=i,a.renderTransform(s,a)},re="transform",Ge=re+"Origin",Px=function r(t,e){var i=this,n=this.target,s=n.style,a=n._gsap;if(t in Hi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Si[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=Oi(n,o)}):this.tfm[t]=a.x?a[t]:Oi(n,t),t===Ge&&(this.tfm.zOrigin=a.zOrigin);else return Si.transform.split(",").forEach(function(o){return r.call(i,o,e)});if(this.props.indexOf(re)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Ge,e,"")),t=re}(s||e)&&this.props.push(t,e,s[t])},Au=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Lx=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(th,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Qo(),(!s||!s.isStart)&&!i[re]&&(Au(i),n.zOrigin&&i[Ge]&&(i[Ge]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Cu=function(t,e){var i={target:t,props:[],revert:Lx,save:Px};return t._gsap||Xe.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},Ru,To=function(t,e){var i=Zi.createElementNS?Zi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Zi.createElement(t);return i&&i.style?i:Zi.createElement(t)},$e=function r(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(th,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&r(t,vs(e)||e,1)||""},jl="O,Moz,ms,Ms,Webkit".split(","),vs=function(t,e,i){var n=e||Tn,s=n.style,a=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(jl[a]+t in s););return a<0?null:(a===3?"ms":a>=0?jl[a]:"")+t},bo=function(){_x()&&window.document&&(Wl=window,Zi=Wl.document,os=Zi.documentElement,Tn=To("div")||{style:{}},To("div"),re=vs(re),Ge=re+"Origin",Tn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ru=!!vs("perspective"),Qo=Xe.core.reverting,Ko=1)},Jl=function(t){var e=t.ownerSVGElement,i=To("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),s;n.style.display="block",i.appendChild(n),os.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),os.removeChild(i),s},Zl=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Pu=function(t){var e,i;try{e=t.getBBox()}catch{e=Jl(t),i=1}return e&&(e.width||e.height)||i||(e=Jl(t)),e&&!e.width&&!e.x&&!e.y?{x:+Zl(t,["x","cx","x1"])||0,y:+Zl(t,["y","cy","y1"])||0,width:0,height:0}:e},Lu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Pu(t))},an=function(t,e){if(e){var i=t.style,n;e in Hi&&e!==Ge&&(e=re),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(th,"-$1").toLowerCase())):i.removeAttribute(e)}},$i=function(t,e,i,n,s,a){var o=new Ve(t._pt,e,i,0,1,a?wu:Eu);return t._pt=o,o.b=n,o.e=s,t._props.push(i),o},$l={deg:1,rad:1,turn:1},Dx={grid:1,flex:1},on=function r(t,e,i,n){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Tn.style,h=xx.test(e),l=t.tagName.toLowerCase()==="svg",c=(l?"client":"offset")+(h?"Width":"Height"),u=100,f=n==="px",d=n==="%",_,g,p,m;if(n===a||!s||$l[n]||$l[a])return s;if(a!=="px"&&!f&&(s=r(t,e,i,"px")),m=t.getCTM&&Lu(t),(d||a==="%")&&(Hi[e]||~e.indexOf("adius")))return _=m?t.getBBox()[h?"width":"height"]:t[c],ce(d?s/_*u:s/100*_);if(o[h?"width":"height"]=u+(f?a:n),g=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!l?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Zi||!g.appendChild)&&(g=Zi.body),p=g._gsap,p&&d&&p.width&&h&&p.time===Je.time&&!p.uncache)return ce(s/p.width*u);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+n,_=t[c],S?t.style[e]=S:an(t,e)}else(d||a==="%")&&!Dx[$e(g,"display")]&&(o.position=$e(t,"position")),g===t&&(o.position="static"),g.appendChild(Tn),_=Tn[c],g.removeChild(Tn),o.position="absolute";return h&&d&&(p=Cn(g),p.time=Je.time,p.width=g[c]),ce(f?_*s/u:_&&s?u/_*s:0)},Oi=function(t,e,i,n){var s;return Ko||bo(),e in Si&&e!=="transform"&&(e=Si[e],~e.indexOf(",")&&(e=e.split(",")[0])),Hi[e]&&e!=="transform"?(s=js(t,n),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:jr($e(t,Ge))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=qr[e]&&qr[e](t,e,i)||$e(t,e)||Jc(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?on(t,e,s,i)+i:s},Ix=function(t,e,i,n){if(!i||i==="none"){var s=vs(e,t,1),a=s&&$e(t,s,1);a&&a!==i?(e=s,i=a):e==="borderColor"&&(i=$e(t,"borderTopColor"))}var o=new Ve(this._pt,t.style,e,0,1,Mu),h=0,l=0,c,u,f,d,_,g,p,m,S,v,x,E;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=$e(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(g=t.style[e],t.style[e]=n,n=$e(t,e)||n,g?t.style[e]=g:an(t,e)),c=[i,n],pu(c),i=c[0],n=c[1],f=i.match(is)||[],E=n.match(is)||[],E.length){for(;u=is.exec(n);)p=u[0],S=n.substring(h,u.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=f[l++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),p.charAt(1)==="="&&(p=as(d,p)+x),m=parseFloat(p),v=p.substr((m+"").length),h=is.lastIndex-v.length,v||(v=v||Ke.units[e]||x,h===n.length&&(n+=v,o.e+=v)),x!==v&&(d=on(t,e,g,v)||0),o._pt={_next:o._pt,p:S||l===1?S:",",s:d,c:m-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=h<n.length?n.substring(h,n.length):""}else o.r=e==="display"&&n==="none"?wu:Eu;return Xc.test(n)&&(o.e=0),this._pt=o,o},Kl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ux=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=Kl[i]||i,e[1]=Kl[n]||n,e.join(" ")},Ox=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,s=e.u,a=i._gsap,o,h,l;if(s==="all"||s===!0)n.cssText="",h=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],Hi[o]&&(h=1,o=o==="transformOrigin"?Ge:re),an(i,o);h&&(an(i,re),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",js(i,1),a.uncache=1,Au(n)))}},qr={clearProps:function(t,e,i,n,s){if(s.data!=="isFromStart"){var a=t._pt=new Ve(t._pt,e,i,0,0,Ox);return a.u=n,a.pr=-10,a.tween=s,t._props.push(i),1}}},qs=[1,0,0,1,0,0],Du={},Iu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ql=function(t){var e=$e(t,re);return Iu(e)?qs:e.substr(7).match(Gc).map(ce)},eh=function(t,e){var i=t._gsap||Cn(t),n=t.style,s=Ql(t),a,o,h,l;return i.svg&&t.getAttribute("transform")?(h=t.transform.baseVal.consolidate().matrix,s=[h.a,h.b,h.c,h.d,h.e,h.f],s.join(",")==="1,0,0,1,0,0"?qs:s):(s===qs&&!t.offsetParent&&t!==os&&!i.svg&&(h=n.display,n.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,o=t.nextElementSibling,os.appendChild(t)),s=Ql(t),h?n.display=h:an(t,"display"),l&&(o?a.insertBefore(t,o):a?a.appendChild(t):os.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Eo=function(t,e,i,n,s,a){var o=t._gsap,h=s||eh(t,!0),l=o.xOrigin||0,c=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=h[0],_=h[1],g=h[2],p=h[3],m=h[4],S=h[5],v=e.split(" "),x=parseFloat(v[0])||0,E=parseFloat(v[1])||0,y,T,R,M;i?h!==qs&&(T=d*p-_*g)&&(R=x*(p/T)+E*(-g/T)+(g*S-p*m)/T,M=x*(-_/T)+E*(d/T)-(d*S-_*m)/T,x=R,E=M):(y=Pu(t),x=y.x+(~v[0].indexOf("%")?x/100*y.width:x),E=y.y+(~(v[1]||v[0]).indexOf("%")?E/100*y.height:E)),n||n!==!1&&o.smooth?(m=x-l,S=E-c,o.xOffset=u+(m*d+S*g)-m,o.yOffset=f+(m*_+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=E,o.smooth=!!n,o.origin=e,o.originIsAbsolute=!!i,t.style[Ge]="0px 0px",a&&($i(a,o,"xOrigin",l,x),$i(a,o,"yOrigin",c,E),$i(a,o,"xOffset",u,o.xOffset),$i(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+E)},js=function(t,e){var i=t._gsap||new gu(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,s=i.scaleX<0,a="px",o="deg",h=getComputedStyle(t),l=$e(t,Ge)||"0",c,u,f,d,_,g,p,m,S,v,x,E,y,T,R,M,b,I,L,B,P,F,V,q,k,N,X,K,$,G,Z,tt;return c=u=f=g=p=m=S=v=x=0,d=_=1,i.svg=!!(t.getCTM&&Lu(t)),h.translate&&((h.translate!=="none"||h.scale!=="none"||h.rotate!=="none")&&(n[re]=(h.translate!=="none"?"translate3d("+(h.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(h.rotate!=="none"?"rotate("+h.rotate+") ":"")+(h.scale!=="none"?"scale("+h.scale.split(" ").join(",")+") ":"")+(h[re]!=="none"?h[re]:"")),n.scale=n.rotate=n.translate="none"),T=eh(t,i.svg),i.svg&&(i.uncache?(k=t.getBBox(),l=i.xOrigin-k.x+"px "+(i.yOrigin-k.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),Eo(t,q||l,!!q||i.originIsAbsolute,i.smooth!==!1,T)),E=i.xOrigin||0,y=i.yOrigin||0,T!==qs&&(I=T[0],L=T[1],B=T[2],P=T[3],c=F=T[4],u=V=T[5],T.length===6?(d=Math.sqrt(I*I+L*L),_=Math.sqrt(P*P+B*B),g=I||L?$n(L,I)*vn:0,S=B||P?$n(B,P)*vn+g:0,S&&(_*=Math.abs(Math.cos(S*hs))),i.svg&&(c-=E-(E*I+y*B),u-=y-(E*L+y*P))):(tt=T[6],G=T[7],X=T[8],K=T[9],$=T[10],Z=T[11],c=T[12],u=T[13],f=T[14],R=$n(tt,$),p=R*vn,R&&(M=Math.cos(-R),b=Math.sin(-R),q=F*M+X*b,k=V*M+K*b,N=tt*M+$*b,X=F*-b+X*M,K=V*-b+K*M,$=tt*-b+$*M,Z=G*-b+Z*M,F=q,V=k,tt=N),R=$n(-B,$),m=R*vn,R&&(M=Math.cos(-R),b=Math.sin(-R),q=I*M-X*b,k=L*M-K*b,N=B*M-$*b,Z=P*b+Z*M,I=q,L=k,B=N),R=$n(L,I),g=R*vn,R&&(M=Math.cos(R),b=Math.sin(R),q=I*M+L*b,k=F*M+V*b,L=L*M-I*b,V=V*M-F*b,I=q,F=k),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=ce(Math.sqrt(I*I+L*L+B*B)),_=ce(Math.sqrt(V*V+tt*tt)),R=$n(F,V),S=Math.abs(R)>2e-4?R*vn:0,x=Z?1/(Z<0?-Z:Z):0),i.svg&&(q=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Iu($e(t,re)),q&&t.setAttribute("transform",q))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||i.uncache,i.x=c-((i.xPercent=c&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=ce(d),i.scaleY=ce(_),i.rotation=ce(g)+o,i.rotationX=ce(p)+o,i.rotationY=ce(m)+o,i.skewX=S+o,i.skewY=v+o,i.transformPerspective=x+a,(i.zOrigin=parseFloat(l.split(" ")[2])||!e&&i.zOrigin||0)&&(n[Ge]=jr(l)),i.xOffset=i.yOffset=0,i.force3D=Ke.force3D,i.renderTransform=i.svg?Nx:Ru?Uu:Fx,i.uncache=0,i},jr=function(t){return(t=t.split(" "))[0]+" "+t[1]},Za=function(t,e,i){var n=Ce(e);return ce(parseFloat(e)+parseFloat(on(t,"x",i+"px",n)))+n},Fx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Uu(t,e)},mn="0deg",Ps="0px",gn=") ",Uu=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,h=i.z,l=i.rotation,c=i.rotationY,u=i.rotationX,f=i.skewX,d=i.skewY,_=i.scaleX,g=i.scaleY,p=i.transformPerspective,m=i.force3D,S=i.target,v=i.zOrigin,x="",E=m==="auto"&&t&&t!==1||m===!0;if(v&&(u!==mn||c!==mn)){var y=parseFloat(c)*hs,T=Math.sin(y),R=Math.cos(y),M;y=parseFloat(u)*hs,M=Math.cos(y),a=Za(S,a,T*M*-v),o=Za(S,o,-Math.sin(y)*-v),h=Za(S,h,R*M*-v+v)}p!==Ps&&(x+="perspective("+p+gn),(n||s)&&(x+="translate("+n+"%, "+s+"%) "),(E||a!==Ps||o!==Ps||h!==Ps)&&(x+=h!==Ps||E?"translate3d("+a+", "+o+", "+h+") ":"translate("+a+", "+o+gn),l!==mn&&(x+="rotate("+l+gn),c!==mn&&(x+="rotateY("+c+gn),u!==mn&&(x+="rotateX("+u+gn),(f!==mn||d!==mn)&&(x+="skew("+f+", "+d+gn),(_!==1||g!==1)&&(x+="scale("+_+", "+g+gn),S.style[re]=x||"translate(0, 0)"},Nx=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,h=i.rotation,l=i.skewX,c=i.skewY,u=i.scaleX,f=i.scaleY,d=i.target,_=i.xOrigin,g=i.yOrigin,p=i.xOffset,m=i.yOffset,S=i.forceCSS,v=parseFloat(a),x=parseFloat(o),E,y,T,R,M;h=parseFloat(h),l=parseFloat(l),c=parseFloat(c),c&&(c=parseFloat(c),l+=c,h+=c),h||l?(h*=hs,l*=hs,E=Math.cos(h)*u,y=Math.sin(h)*u,T=Math.sin(h-l)*-f,R=Math.cos(h-l)*f,l&&(c*=hs,M=Math.tan(l-c),M=Math.sqrt(1+M*M),T*=M,R*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),E*=M,y*=M)),E=ce(E),y=ce(y),T=ce(T),R=ce(R)):(E=u,R=f,y=T=0),(v&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(v=on(d,"x",a,"px"),x=on(d,"y",o,"px")),(_||g||p||m)&&(v=ce(v+_-(_*E+g*T)+p),x=ce(x+g-(_*y+g*R)+m)),(n||s)&&(M=d.getBBox(),v=ce(v+n/100*M.width),x=ce(x+s/100*M.height)),M="matrix("+E+","+y+","+T+","+R+","+v+","+x+")",d.setAttribute("transform",M),S&&(d.style[re]=M)},kx=function(t,e,i,n,s){var a=360,o=Se(s),h=parseFloat(s)*(o&&~s.indexOf("rad")?vn:1),l=h-n,c=n+l+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*ql)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*ql)%a-~~(l/a)*a)),t._pt=f=new Ve(t._pt,e,i,n,l,yx),f.e=c,f.u="deg",t._props.push(i),f},tc=function(t,e){for(var i in e)t[i]=e[i];return t},Bx=function(t,e,i){var n=tc({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,h,l,c,u,f,d,_;n.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),a[re]=e,o=js(i,1),an(i,re),i.setAttribute("transform",l)):(l=getComputedStyle(i)[re],a[re]=e,o=js(i,1),a[re]=l);for(h in Hi)l=n[h],c=o[h],l!==c&&s.indexOf(h)<0&&(d=Ce(l),_=Ce(c),u=d!==_?on(i,h,l,_):parseFloat(l),f=parseFloat(c),t._pt=new Ve(t._pt,o,h,u,f-u,Mo),t._pt.u=_||0,t._props.push(h));tc(o,n)};He("padding,margin,Width,Radius",function(r,t){var e="Top",i="Right",n="Bottom",s="Left",a=(t<3?[e,i,n,s]:[e+s,e+i,n+i,n+s]).map(function(o){return t<2?r+o:"border"+o+r});qr[t>1?"border"+r:r]=function(o,h,l,c,u){var f,d;if(arguments.length<4)return f=a.map(function(_){return Oi(o,_,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(c+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(h,d,u)}});var Ou={name:"css",register:bo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,s){var a=this._props,o=t.style,h=i.vars.startAt,l,c,u,f,d,_,g,p,m,S,v,x,E,y,T,R,M;Ko||bo(),this.styles=this.styles||Cu(t),R=this.styles.props,this.tween=i;for(g in e)if(g!=="autoRound"&&(c=e[g],!(je[g]&&_u(g,e,i,n,t,s)))){if(d=typeof c,_=qr[g],d==="function"&&(c=c.call(i,n,t,s),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=Xs(c)),_)_(this,t,g,c,i)&&(T=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(g)+"").trim(),c+="",nn.lastIndex=0,nn.test(l)||(p=Ce(l),m=Ce(c),m?p!==m&&(l=on(t,g,l,m)+m):p&&(c+=p)),this.add(o,"setProperty",l,c,n,s,0,0,g),a.push(g),R.push(g,0,o[g]);else if(d!=="undefined"){if(h&&g in h?(l=typeof h[g]=="function"?h[g].call(i,n,t,s):h[g],Se(l)&&~l.indexOf("random(")&&(l=Xs(l)),Ce(l+"")||l==="auto"||(l+=Ke.units[g]||Ce(Oi(t,g))||""),(l+"").charAt(1)==="="&&(l=Oi(t,g))):l=Oi(t,g),f=parseFloat(l),S=d==="string"&&c.charAt(1)==="="&&c.substr(0,2),S&&(c=c.substr(2)),u=parseFloat(c),g in Si&&(g==="autoAlpha"&&(f===1&&Oi(t,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,o.visibility),$i(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Si[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Hi,v){if(this.styles.save(g),M=c,d==="string"&&c.substring(0,6)==="var(--"){if(c=$e(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var b=t.style.perspective;t.style.perspective=c,c=$e(t,"perspective"),b?t.style.perspective=b:an(t,"perspective")}u=parseFloat(c)}if(x||(E=t._gsap,E.renderTransform&&!e.parseTransform||js(t,e.parseTransform),y=e.smoothOrigin!==!1&&E.smooth,x=this._pt=new Ve(this._pt,o,re,0,1,E.renderTransform,E,0,-1),x.dep=1),g==="scale")this._pt=new Ve(this._pt,E,"scaleY",E.scaleY,(S?as(E.scaleY,S+u):u)-E.scaleY||0,Mo),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Ge,0,o[Ge]),c=Ux(c),E.svg?Eo(t,c,0,y,0,this):(m=parseFloat(c.split(" ")[2])||0,m!==E.zOrigin&&$i(this,E,"zOrigin",E.zOrigin,m),$i(this,o,g,jr(l),jr(c)));continue}else if(g==="svgOrigin"){Eo(t,c,1,y,0,this);continue}else if(g in Du){kx(this,E,g,f,S?as(f,S+c):c);continue}else if(g==="smoothOrigin"){$i(this,E,"smooth",E.smooth,c);continue}else if(g==="force3D"){E[g]=c;continue}else if(g==="transform"){Bx(this,c,t);continue}}else g in o||(g=vs(g)||g);if(v||(u||u===0)&&(f||f===0)&&!vx.test(c)&&g in o)p=(l+"").substr((f+"").length),u||(u=0),m=Ce(c)||(g in Ke.units?Ke.units[g]:p),p!==m&&(f=on(t,g,l,m)),this._pt=new Ve(this._pt,v?E:o,g,f,(S?as(f,S+u):u)-f,!v&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?Tx:Mo),this._pt.u=m||0,v&&M!==c?(this._pt.b=l,this._pt.e=M,this._pt.r=Mx):p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=Sx);else if(g in o)Ix.call(this,t,g,l,S?S+c:c);else if(g in t)this.add(t,g,l||t[g],S?S+c:c,n,s);else if(g!=="parseTransform"){Vo(g,c);continue}v||(g in o?R.push(g,0,o[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,l||t[g])),a.push(g)}}T&&Tu(this)},render:function(t,e){if(e.tween._time||!Qo())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Oi,aliases:Si,getSetter:function(t,e,i){var n=Si[e];return n&&n.indexOf(",")<0&&(e=n),e in Hi&&e!==Ge&&(t._gsap.x||Oi(t,"x"))?i&&Yl===i?e==="scale"?Ax:wx:(Yl=i||{})&&(e==="scale"?Cx:Rx):t.style&&!Bo(t.style[e])?bx:~e.indexOf("-")?Ex:Zo(t,e)},core:{_removeProperty:an,_getMatrix:eh}};Xe.utils.checkPrefix=vs;Xe.core.getStyleSaver=Cu;(function(r,t,e,i){var n=He(r+","+t+","+e,function(s){Hi[s]=1});He(t,function(s){Ke.units[s]="deg",Du[s]=1}),Si[n[13]]=r+","+t,He(i,function(s){var a=s.split(":");Si[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");He("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ke.units[r]="px"});Xe.registerPlugin(Ou);var di=Xe.registerPlugin(Ou)||Xe;di.core.Tween;const zx=`
  uniform float uScrollSpeed;
  uniform float uHover;
  uniform float uTime;
  uniform vec2 uMouseUv;
  uniform vec2 uCursorVel;
  uniform float uWaveStrength;
  uniform vec2 uPlaneRes;
  varying vec2 vUv;
  varying float vWave;
  varying float vWaveElevation;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Organic wave curve based on scroll inertia
    float scrollWave = sin(pos.y * 0.005) * uScrollSpeed * 10.0;
    pos.z -= scrollWave;
    pos.y += uScrollSpeed * 3.5;
    vWave = scrollWave;

    // 🌊 LIQUID / MEMBRANE WAVE DEFORMATION
    vec2 aspectVec = vec2(uPlaneRes.x / uPlaneRes.y, 1.0);
    vec2 delta = (uv - uMouseUv) * aspectVec;
    float dist = length(delta);

    // 1. Local soft indentation/deflection under cursor
    float localFlex = exp(-dist * dist * 14.0);

    // 2. Outward radiating soft wave propagating from cursor point
    float wavePhase = dist * 16.0 - uTime * 5.0;
    float waveDecay = exp(-dist * 4.2);
    float radialWave = sin(wavePhase) * waveDecay;

    // 3. Directional velocity shear
    float velDot = dot(normalize(delta + 0.0001), uCursorVel);
    float velPush = velDot * exp(-dist * 5.0) * 1.5;

    // Combine into subtle 3D Z-elevation (membrane yields under cursor & ripples)
    float zDeform = (-localFlex * 0.45 + radialWave * 0.55 + velPush) * uWaveStrength * uHover;
    pos.z += zDeform * 16.0;
    vWaveElevation = zDeform;

    // 4. Subtle elastic edge flex
    vec2 edgeFactor = smoothstep(vec2(0.0), vec2(0.35), min(uv, 1.0 - uv));
    float edgeElasticity = (1.0 - edgeFactor.x * edgeFactor.y);
    pos.xy += uCursorVel * 10.0 * edgeElasticity * uWaveStrength * uHover;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,Hx=`
  uniform sampler2D uTexture;
  uniform float uAlpha;
  uniform float uHover;
  uniform float uScrollSpeed;
  uniform float uTime;
  uniform vec2 uPlaneRes;
  uniform vec2 uImageRes;
  uniform vec2 uMediaParallax;
  uniform vec2 uMouseUv;
  uniform vec2 uCursorVel;
  uniform float uWaveStrength;
  varying vec2 vUv;
  varying float vWave;
  varying float vWaveElevation;

  vec2 getCoverUv(vec2 uv, vec2 planeRes, vec2 imgRes) {
    vec2 s = planeRes;
    vec2 i = imgRes;
    float rPlane = s.x / s.y;
    float rImage = i.x / i.y;
    vec2 newUv = uv;
    if (rPlane > rImage) {
      newUv.y = (uv.y - 0.5) * (rImage / rPlane) + 0.5;
    } else {
      newUv.x = (uv.x - 0.5) * (rPlane / rImage) + 0.5;
    }
    return newUv;
  }

  void main() {
    // 🌊 LIQUID MEDIA REFRACTION / DEFORMATION
    vec2 aspectVec = vec2(uPlaneRes.x / uPlaneRes.y, 1.0);
    vec2 delta = (vUv - uMouseUv) * aspectVec;
    float dist = length(delta);

    // Wave normal gradient refraction
    vec2 waveDir = (dist > 0.0001) ? (delta / dist) : vec2(0.0);
    float waveDerivative = cos(dist * 16.0 - uTime * 5.0) * exp(-dist * 4.2);
    vec2 liquidRefraction = waveDir * waveDerivative * 0.016 * uWaveStrength * uHover;

    // Velocity shear refraction
    vec2 velRefraction = uCursorVel * exp(-dist * 6.0) * 0.018 * uWaveStrength * uHover;

    // Media layer displacement: parallax + liquid wave refraction
    vec2 shiftedUv = vUv - uMediaParallax * 0.038 * uHover + liquidRefraction + velRefraction;

    vec2 uv = getCoverUv(shiftedUv, uPlaneRes, uImageRes);
    
    // Light scale (~1.045x) on hover
    uv = (uv - 0.5) * (1.0 - uHover * 0.043) + 0.5;

    // Chromatic Aberration during fast scroll
    float rgbShift = clamp(abs(uScrollSpeed) * 0.006, 0.0, 0.035);
    vec4 rTex = texture2D(uTexture, uv + vec2(rgbShift, 0.0));
    vec4 gTex = texture2D(uTexture, uv);
    vec4 bTex = texture2D(uTexture, uv - vec2(rgbShift, 0.0));

    vec3 color = vec3(rTex.r, gTex.g, bTex.b);

    // Subtle contrast boost on hover
    color = mix(color, color * 1.05, uHover);

    // Subtle specular highlight modulated by wave elevation for liquid sheen
    float distToCursor = length(vUv - uMouseUv);
    float highlight = smoothstep(0.55, 0.0, distToCursor) * (0.09 + vWaveElevation * 0.05) * uHover;
    color += vec3(highlight);

    // Smooth rounded corners mask (always computed on clean unshifted vUv - zero tearing!)
    vec2 d = min(vUv, 1.0 - vUv) * uPlaneRes;
    float cornerRadius = 14.0;
    float corner = length(max(vec2(cornerRadius) - d, 0.0)) - cornerRadius;
    float alphaMask = 1.0 - smoothstep(-1.0, 1.0, corner);
    if (alphaMask <= 0.001) discard;

    gl_FragColor = vec4(color, gTex.a * uAlpha * alphaMask);
    #include <colorspace_fragment>
  }
`;class ss{constructor(t,e){var i,n;this.project=t,this.index=e,this.group=new Mn,this.group.name=t.id,this.width=460,this.height=270,this.isHovered=!1,this.isVisible=!0,this.tilt={current:new at(0,0),target:new at(0,0)},this.mouseUv={current:new at(.5,.5),target:new at(.5,.5)},this.hover={current:0,target:0},this.prevCursor=new at(.5,.5),this.cursorVelocity=new at(0,0),this.targetVelocity=new at(0,0),this.waveStrength=0,this.targetWaveStrength=0,this.reducedMotion=((n=(i=window.matchMedia)==null?void 0:i.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:n.matches)||!1,this.targetPos=new O(0,0,0),this.initMesh(),this.initTextPlate(),this.initVideo()}initMesh(){this.geometry=new Ui(this.width,this.height,36,36);const t=document.createElement("canvas");t.width=16,t.height=9;const e=t.getContext("2d");e.fillStyle="#dfcfc9",e.fillRect(0,0,16,9),this.defaultTexture=new ka(t),this.defaultTexture.colorSpace=se,this.material=new Bi({vertexShader:zx,fragmentShader:Hx,transparent:!0,depthTest:!0,depthWrite:!0,uniforms:{uTexture:{value:this.defaultTexture},uScrollSpeed:{value:0},uHover:{value:0},uTime:{value:0},uMediaParallax:{value:new at(0,0)},uMouseUv:{value:new at(.5,.5)},uCursorVel:{value:new at(0,0)},uWaveStrength:{value:0},uAlpha:{value:1},uPlaneRes:{value:new at(this.width,this.height)},uImageRes:{value:new at(1024,538)}}}),this.mesh=new ai(this.geometry,this.material),this.mesh.userData={project:this.project,card:this},this.group.add(this.mesh);const i=512/392,n=320/220,s=new Ui(this.width*i,this.height*n),a=new Hr({map:ss.getSharedShadowTexture(),transparent:!0,opacity:.6,depthWrite:!1,depthTest:!0});if(this.shadowMesh=new ai(s,a),this.shadowMesh.position.set(0,-10,-12),this.group.add(this.shadowMesh),this.project.image){const o=new m_;o.crossOrigin="anonymous",o.load(this.project.image,h=>{h.colorSpace=se,h.generateMipmaps=!0,h.minFilter=ds,this.imageTexture=h,this.material.uniforms.uTexture.value=h,this.material.uniforms.uImageRes.value.set(h.image.width||1024,h.image.height||538)},void 0,h=>{console.warn("Could not load image texture:",this.project.image)})}}static getSharedShadowTexture(){if(ss._sharedShadowTexture)return ss._sharedShadowTexture;const t=512,e=320,i=document.createElement("canvas");i.width=t,i.height=e;const n=i.getContext("2d"),s=60,a=50,o=t-s*2,h=e-a*2,l=22,c=1e3;n.shadowColor="rgba(70, 35, 24, 0.12)",n.shadowBlur=42,n.shadowOffsetX=0,n.shadowOffsetY=c+12,n.fillStyle="#000",n.beginPath(),n.roundRect(s,a-c,o,h,l),n.fill(),n.shadowColor="rgba(55, 25, 16, 0.18)",n.shadowBlur=20,n.shadowOffsetY=c+6,n.beginPath(),n.roundRect(s+2,a-c,o-4,h,l),n.fill(),n.shadowColor="rgba(40, 16, 10, 0.22)",n.shadowBlur=8,n.shadowOffsetY=c+2,n.beginPath(),n.roundRect(s+6,a-c,o-12,h,l),n.fill();const u=new ka(i);return u.colorSpace=se,ss._sharedShadowTexture=u,u}initTextPlate(){var h;const t=document.createElement("canvas"),e=2,i=this.width*e,n=75*e;t.width=i,t.height=n;const s=t.getContext("2d");s.scale(e,e),s.shadowColor="rgba(70, 35, 25, 0.20)",s.shadowBlur=4,s.shadowOffsetY=1,s.shadowOffsetX=0,s.font='500 19px "Neue Montreal", sans-serif',s.fillStyle="#212121",s.textAlign="left",s.textBaseline="top",s.fillText(this.project.title,0,10),s.shadowColor="transparent",s.font='400 13.5px "Neue Montreal", sans-serif',s.fillStyle="#7a7a7a",s.fillText(this.project.categoryLabel||((h=this.project.categories)==null?void 0:h.join(" • "))||"",0,38),s.font='400 14px "Neue Montreal", sans-serif',s.fillStyle="#999999",s.textAlign="right",s.fillText(this.project.index,this.width,10),this.textCanvas=t,this.textCtx=s,this.textTexture=new ka(t),this.textTexture.colorSpace=se;const a=new Ui(this.width,75),o=new Hr({map:this.textTexture,transparent:!0,opacity:.95});this.textMesh=new ai(a,o),this.textMesh.position.set(0,-this.height/2-42,0),this.group.add(this.textMesh)}initVideo(){this.project.video&&(this.video=document.createElement("video"),this.video.crossOrigin="anonymous",this.video.src=this.project.video,this.video.loop=!0,this.video.muted=!0,this.video.playsInline=!0,this.video.preload="metadata",this.videoTexture=null)}setHover(t){var e;this.isHovered!==t&&(this.isHovered=t,this.hover.target=t?1:0,t||(this.tilt.target.set(0,0),this.mouseUv.target.set(.5,.5),this.targetVelocity.set(0,0),this.targetWaveStrength=0),this.textCtx&&(this.textCtx.clearRect(0,0,this.width,75),this.textCtx.font=t?'italic 400 20px "Saol Display", Georgia, serif':'500 19px "Neue Montreal", sans-serif',this.textCtx.fillStyle="#212121",this.textCtx.textAlign="left",this.textCtx.textBaseline="top",this.textCtx.fillText(this.project.title,0,10),this.textCtx.font='400 13.5px "Neue Montreal", sans-serif',this.textCtx.fillStyle=t?"#212121":"#7a7a7a",this.textCtx.fillText(this.project.categoryLabel||((e=this.project.categories)==null?void 0:e.join(" • "))||"",0,38),this.textCtx.font='400 14px "Neue Montreal", sans-serif',this.textCtx.fillStyle="#999999",this.textCtx.textAlign="right",this.textCtx.fillText(this.project.index,this.width,10),this.textTexture.needsUpdate=!0),t&&this.video?(this.videoTexture||(this.videoTexture=new $0(this.video),this.videoTexture.colorSpace=se),this.material.uniforms.uTexture.value=this.videoTexture,this.video.play().catch(()=>{})):!t&&this.video&&(this.video.pause(),this.imageTexture&&(this.material.uniforms.uTexture.value=this.imageTexture)))}setCursorPosition(t,e,i){if(!this.isHovered||this.reducedMotion)return;this.tilt.target.set(t,e);const n=i||new at((t+1)*.5,(e+1)*.5);this.mouseUv.target.copy(n);const s=n.x-this.prevCursor.x,a=n.y-this.prevCursor.y;this.prevCursor.copy(n);const o=Math.hypot(s,a);this.targetVelocity.x=Math.max(-.4,Math.min(.4,s*5)),this.targetVelocity.y=Math.max(-.4,Math.min(.4,a*5)),this.targetWaveStrength=Math.min(1,this.targetWaveStrength+o*4)}setScrollSpeed(t){this.material.uniforms.uScrollSpeed.value=t}update(){if(this.reducedMotion)return;const t=this.isHovered?.085:.055;this.hover.current+=(this.hover.target-this.hover.current)*t,this.material.uniforms.uHover.value=this.hover.current;const e=this.isHovered?.09:.05;this.tilt.current.lerp(this.tilt.target,e),this.mouseUv.current.lerp(this.mouseUv.target,e),this.cursorVelocity.lerp(this.targetVelocity,.12),this.targetVelocity.multiplyScalar(.86),this.waveStrength+=(this.targetWaveStrength-this.waveStrength)*.12,this.targetWaveStrength*=.91;const i=.042;if(this.mesh.rotation.y=this.tilt.current.x*i*this.hover.current,this.mesh.rotation.x=-this.tilt.current.y*i*this.hover.current,this.mesh.position.z=this.hover.current*32,this.shadowMesh){const n=this.hover.current;this.shadowMesh.position.y=-10-n*12,this.shadowMesh.position.x=this.tilt.current.x*10*n;const s=1+n*.06;this.shadowMesh.scale.set(s,s,1),this.shadowMesh.material.opacity=(.5+n*.18)*this.material.uniforms.uAlpha.value}this.material.uniforms.uMediaParallax.value.copy(this.tilt.current),this.material.uniforms.uMouseUv.value.copy(this.mouseUv.current),this.material.uniforms.uCursorVel.value.copy(this.cursorVelocity),this.material.uniforms.uWaveStrength.value=this.waveStrength,this.material.uniforms.uTime.value=performance.now()*.001}setVisible(t,e=0){this.isVisible=t,t?(this.group.visible=!0,di.to(this.group.position,{x:this.targetPos.x,y:this.targetPos.y,z:0,duration:.7,delay:e,ease:"power3.out"}),di.to(this.material.uniforms.uAlpha,{value:1,duration:.5,delay:e,ease:"power2.out"}),di.to(this.textMesh.material,{opacity:.95,duration:.5,delay:e,ease:"power2.out"}),this.shadowMesh&&di.to(this.shadowMesh.material,{opacity:.5,duration:.5,delay:e,ease:"power2.out"})):(di.to(this.group.position,{z:-600,duration:.5,delay:e,ease:"power2.in",onComplete:()=>{this.isVisible||(this.group.visible=!1)}}),di.to(this.material.uniforms.uAlpha,{value:0,duration:.4,delay:e,ease:"power2.in"}),di.to(this.textMesh.material,{opacity:0,duration:.4,delay:e,ease:"power2.in"}),this.shadowMesh&&di.to(this.shadowMesh.material,{opacity:0,duration:.4,delay:e,ease:"power2.in"}))}updateDimensions(t,e){var n;if(this.width=t,this.height=e,this.mesh.geometry.dispose(),this.geometry=new Ui(t,e,36,36),this.mesh.geometry=this.geometry,this.material.uniforms.uPlaneRes.value.set(t,e),this.shadowMesh){this.shadowMesh.geometry.dispose();const s=512/392,a=320/220;this.shadowMesh.geometry=new Ui(t*s,e*a)}this.textMesh.geometry.dispose(),this.textMesh.geometry=new Ui(t,75),this.textMesh.position.set(0,-e/2-42,0);const i=2;this.textCanvas.width=t*i,this.textCanvas.height=75*i,this.textCtx.scale(i,i),this.textCtx.font='500 19px "Neue Montreal", sans-serif',this.textCtx.fillStyle="#212121",this.textCtx.textAlign="left",this.textCtx.textBaseline="top",this.textCtx.fillText(this.project.title,0,10),this.textCtx.font='400 13.5px "Neue Montreal", sans-serif',this.textCtx.fillStyle="#7a7a7a",this.textCtx.fillText(this.project.categoryLabel||((n=this.project.categories)==null?void 0:n.join(" • "))||"",0,38),this.textCtx.font='400 14px "Neue Montreal", sans-serif',this.textCtx.fillStyle="#999999",this.textCtx.textAlign="right",this.textCtx.fillText(this.project.index,t,10),this.textTexture.needsUpdate=!0}}const Vx=`
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aVelocity;
  uniform float uTime;
  uniform vec2 uMouseParallax;
  varying float vAlpha;

  void main() {
    vAlpha = aAlpha;
    vec3 pos = position;

    // Organic harmonic drift
    pos.x += sin(uTime * aVelocity.x + pos.y * 0.003) * 20.0;
    pos.y += cos(uTime * aVelocity.y + pos.x * 0.003) * 20.0;
    pos.z += sin(uTime * aVelocity.z) * 15.0;

    // Subtle delayed mouse parallax
    pos.x += uMouseParallax.x * 40.0 * (1.0 + pos.z * 0.002);
    pos.y += uMouseParallax.y * 40.0 * (1.0 + pos.z * 0.002);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (350.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`,Gx=`
  varying float vAlpha;

  void main() {
    // Soft blurred bokeh circle
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float shape = smoothstep(0.5, 0.08, dist);

    // Warm, muted champagne tone matching Unseen Studio palette
    vec3 color = vec3(0.82, 0.73, 0.70);
    gl_FragColor = vec4(color, shape * vAlpha * 0.22);
  }
`;class Xx{constructor(t){this.scene=t,this.count=55,this.mouse={current:new at(0,0),target:new at(0,0)},this.init()}init(){const t=new bi,e=new Float32Array(this.count*3),i=new Float32Array(this.count),n=new Float32Array(this.count),s=new Float32Array(this.count*3),a=window.innerWidth*1.2,o=3200,h=400;for(let l=0;l<this.count;l++)e[l*3+0]=(Math.random()-.5)*a,e[l*3+1]=(Math.random()-.5)*o,e[l*3+2]=(Math.random()-.5)*h-50,i[l]=Math.random()*8+4,n[l]=Math.random()*.5+.5,s[l*3+0]=Math.random()*.4+.2,s[l*3+1]=Math.random()*.4+.2,s[l*3+2]=Math.random()*.3+.1;t.setAttribute("position",new ke(e,3)),t.setAttribute("aSize",new ke(i,1)),t.setAttribute("aAlpha",new ke(n,1)),t.setAttribute("aVelocity",new ke(s,3)),this.material=new Bi({vertexShader:Vx,fragmentShader:Gx,transparent:!0,depthWrite:!1,blending:bn,uniforms:{uTime:{value:0},uMouseParallax:{value:new at(0,0)}}}),this.points=new Z0(t,this.material),this.points.renderOrder=-1,this.scene.add(this.points)}setMouse(t,e){this.mouse.target.set(t,e)}update(t){this.material&&(this.material.uniforms.uTime.value=t,this.mouse.current.lerp(this.mouse.target,.04),this.material.uniforms.uMouseParallax.value.copy(this.mouse.current))}}class Wx{constructor(){this.ctx=null,this.isMuted=!1,this.initialized=!1,this.ratchetCounter=0}init(){if(!this.initialized)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.initialized=!0}catch(t){console.warn("Web Audio API not supported",t)}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted}setMuted(t){this.isMuted=t}playRatchet(){if(this.isMuted||!this.ctx)return;this.resume(),this.ratchetCounter++;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain(),s=1350+this.ratchetCounter%4*45;e.type="sine",e.frequency.setValueAtTime(s,t),e.frequency.exponentialRampToValueAtTime(320,t+.022),i.gain.setValueAtTime(.045,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.022),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.022)}playClick(){if(this.isMuted||!this.ctx)return;this.resume();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(840,t),e.frequency.exponentialRampToValueAtTime(180,t+.038),i.gain.setValueAtTime(.075,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.038),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.038)}playHop(){if(this.isMuted||!this.ctx)return;this.resume();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(240,t),e.frequency.exponentialRampToValueAtTime(480,t+.075),i.gain.setValueAtTime(.035,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.075),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.075)}playEnterChime(){if(this.isMuted||!this.ctx)return;this.resume();const t=this.ctx.currentTime;[261.63,329.63,392,523.25,659.25].forEach((i,n)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(i,t+n*.04),a.gain.setValueAtTime(0,t+n*.04),a.gain.linearRampToValueAtTime(.045,t+n*.04+.08),a.gain.exponentialRampToValueAtTime(1e-4,t+n*.04+1.4),s.connect(a),a.connect(this.ctx.destination),s.start(t+n*.04),s.stop(t+n*.04+1.5)})}playWoodClack(t=.035){if(this.isMuted||!this.ctx)return;this.resume();const e=this.ctx.currentTime;if(this.lastWoodClack&&e-this.lastWoodClack<.1)return;this.lastWoodClack=e;const i=this.ctx.createOscillator(),n=this.ctx.createGain();i.type="triangle";const s=660+Math.random()*120;i.frequency.setValueAtTime(s,e),i.frequency.exponentialRampToValueAtTime(280,e+.022),n.gain.setValueAtTime(t,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.022),i.connect(n),n.connect(this.ctx.destination),i.start(e),i.stop(e+.022)}}const U=new Wx,Cr=new O,ec=new O,Rr=new O,ic=new O,ls=new O,$a=new O,Kn=new O,Qn=new O,Ka=new O,Pr=new O,Lr=new O;function Yx(r,t,e,i){ls.set(0,1,0).applyQuaternion(r.mesh.quaternion);const n=r.length*.5;Cr.copy(r.pos).addScaledVector(ls,n),ec.copy(r.pos).addScaledVector(ls,-n),$a.set(0,1,0).applyQuaternion(t.mesh.quaternion);const s=t.length*.5;Rr.copy(t.pos).addScaledVector($a,s),ic.copy(t.pos).addScaledVector($a,-s),Kn.subVectors(ec,Cr),Qn.subVectors(ic,Rr),Ka.subVectors(Cr,Rr);const a=Kn.dot(Kn),o=Kn.dot(Qn),h=Qn.dot(Qn),l=Kn.dot(Ka),c=Qn.dot(Ka),u=a*h-o*o;let f,d,_=u,g,p,m=u;return u<1e-4?(d=0,_=1,p=c,m=h):(d=o*c-h*l,p=a*c-o*l,d<0?(d=0,p=c,m=h):d>_&&(d=_,p=c+o,m=h)),p<0?(p=0,-l<0?d=0:-l>a?d=_:(d=-l,_=a)):p>m&&(p=m,-l+o<0?d=0:-l+o>a?d=_:(d=-l+o,_=a)),f=Math.abs(d)<1e-4?0:d/_,g=Math.abs(p)<1e-4?0:p/m,e.copy(Kn).multiplyScalar(f).add(Cr),i.copy(Qn).multiplyScalar(g).add(Rr),e.distanceTo(i)}class qx{constructor(t,e){this.bounds=e,this.length=Math.random()*32+38,this.radius=Math.random()*.8+1.4;const i=new Fo(this.radius,this.length,6,12);i.computeVertexNormals(),this.mesh=new ai(i,t),this.mesh.renderOrder=-2,this.baseZ=-35-Math.random()*20,this.pos=new O(0,0,this.baseZ),this.targetOpacity=1,this.mesh.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),this.rotAxis=new O(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),this.baseRotSpeed=(Math.random()*.002+.0016)*(Math.random()<.5?1:-1),this.rotSpeed=this.baseRotSpeed,this.velocity=new O((Math.random()-.5)*.2,(Math.random()-.5)*.2,0),this.seedX=Math.random()*100,this.seedY=Math.random()*100,this.seedZ=Math.random()*100,this.speedMult=Math.random()*.25+.35}update(t,e,i,n,s){if(this.mesh.material&&(this.mesh.material.opacity+=(this.targetOpacity-this.mesh.material.opacity)*.08,this.mesh.visible=this.mesh.material.opacity>.02),!this.mesh.visible&&this.targetOpacity<=.01)return;const a=e*.12,o=(Math.sin(a*.85+this.seedX)*.26+Math.cos(a*.4+this.seedY)*.16)*this.speedMult,h=(Math.cos(a*.75+this.seedY)*.24+Math.sin(a*.35+this.seedZ)*.14)*this.speedMult;this.velocity.x+=(o-this.velocity.x)*.025,this.velocity.y+=(h-this.velocity.y)*.025;const l=n?n.length():0;if(i&&l>.02){const S=this.pos.x-i.x,v=this.pos.y-i.y,x=Math.hypot(S,v),E=240;if(x<E&&x>1){const y=1-x/E,T=y*y*(3-2*y),R=T*Math.min(l*.12,.35);this.velocity.x+=S/x*R,this.velocity.y+=v/x*R,this.rotSpeed+=(this.baseRotSpeed>0?1:-1)*T*3e-4}}const c=this.velocity.length(),u=5;c>u&&this.velocity.multiplyScalar(u/c),this.rotSpeed+=(this.baseRotSpeed-this.rotSpeed)*.02;let f=0;const d=40;if(s&&s.length>0)for(let S=0;S<s.length;S++){const v=s[S],x=Math.abs(this.pos.x-v.x),E=Math.abs(this.pos.y-v.y);if(x<v.halfW+d&&E<v.halfH+d){const y=Math.max(0,1-x/(v.halfW+d)),T=Math.max(0,1-E/(v.halfH+d)),R=Math.min(y,T),M=R*R*(3-2*R);M>f&&(f=M)}}const _=this.baseZ-f*40;this.pos.z+=(_-this.pos.z)*.06,this.velocity.multiplyScalar(.975),this.pos.x+=this.velocity.x,this.pos.y+=this.velocity.y,this.mesh.position.copy(this.pos),this.mesh.rotateOnAxis(this.rotAxis,this.rotSpeed);const g=this.bounds.width*.72,p=650,m=-this.bounds.height-350;this.pos.x>g?(this.pos.x=g,this.velocity.x=-Math.abs(this.velocity.x)*.4-.05):this.pos.x<-g&&(this.pos.x=-g,this.velocity.x=Math.abs(this.velocity.x)*.4+.05),this.pos.y>p?(this.pos.y=p,this.velocity.y=-Math.abs(this.velocity.y)*.4-.05):this.pos.y<m&&(this.pos.y=m,this.velocity.y=Math.abs(this.velocity.y)*.4+.08)}applyImpulse(t,e,i=0){this.velocity.x+=t,this.velocity.y+=e,i&&(this.rotSpeed+=i)}}class jx{constructor(t){this.parent=t,this.count=32,this.sticks=[],this.mouse=new at(0,0),this.prevMouse=new at(0,0),this.mouseVel=new at(0,0),this.lastTime=performance.now()*.001,this.bounds={width:window.innerWidth,height:2400},this.init()}init(){this.container=new Mn,this.container.renderOrder=-2,this.parent.add(this.container);const t=new Ol(16774894,1.8);t.position.set(220,450,320),this.container.add(t);const e=new Ol(13945536,.9);e.position.set(-220,-220,160),this.container.add(e);const i=[new Zn({color:6047802,roughness:.62,metalness:.06,transparent:!0,opacity:1}),new Zn({color:9204578,roughness:.65,metalness:.05,transparent:!0,opacity:1}),new Zn({color:12100241,roughness:.6,metalness:.08,transparent:!0,opacity:1}),new Zn({color:4075816,roughness:.68,metalness:.04,transparent:!0,opacity:1}),new Zn({color:10779741,roughness:.64,metalness:.06,transparent:!0,opacity:1}),new Zn({color:14009783,roughness:.58,metalness:.08,transparent:!0,opacity:1})],n=5,s=8;this.count=n*s;const a=this.bounds.width*1.25,o=this.bounds.height+400,h=a/n,l=o/s;let c=0;for(let u=0;u<s;u++){const f=320-(u+.5)*l;for(let d=0;d<n;d++){const _=-a*.5+(d+.5)*h,g=i[c%i.length].clone(),p=new qx(g,this.bounds),m=(Math.random()-.5)*h*.4,S=(Math.random()-.5)*l*.4;p.pos.x=_+m,p.pos.y=f+S,p.mesh.position.copy(p.pos),this.sticks.push(p),this.container.add(p.mesh),c++}}}setMouse(t,e){const i=t*(window.innerWidth*.5),n=e*(window.innerHeight*.5),s=(i-this.prevMouse.x)*.15,a=(n-this.prevMouse.y)*.15;this.mouseVel.x+=(s-this.mouseVel.x)*.4,this.mouseVel.y+=(a-this.mouseVel.y)*.4,this.prevMouse.x=i,this.prevMouse.y=n,this.mouse.x=i,this.mouse.y=n}update(t,e=0,i=[]){const n=t||performance.now()*.001,s=Math.min(.05,n-this.lastTime);this.lastTime=n,this.mouseVel.multiplyScalar(.85);const a={x:this.mouse.x,y:this.mouse.y-e},o=[];if(i&&i.length>0)for(let f=0;f<i.length;f++){const d=i[f];d.group&&d.group.visible&&o.push({x:d.group.position.x,y:d.group.position.y-25,halfW:(d.width||480)*.5+20,halfH:(d.height||280)*.5+55})}const h=window.innerWidth*.5+160,l=window.innerHeight*.5+160,c=[];for(let f=0;f<this.sticks.length;f++){const d=this.sticks[f],_=d.pos.y+e,g=Math.abs(d.pos.x)<=h&&Math.abs(_)<=l,m=Math.hypot(d.pos.x-a.x,d.pos.y-a.y)<320;if(g||m){const S=Math.hypot(d.pos.x,_);c.push({stick:d,dist:S,isNearCursor:m})}else d.targetOpacity=0}c.sort((f,d)=>f.isNearCursor&&!d.isNearCursor?-1:!f.isNearCursor&&d.isNearCursor?1:f.dist-d.dist);const u=16;for(let f=0;f<c.length;f++)f<u||c[f].isNearCursor?c[f].stick.targetOpacity=1:c[f].stick.targetOpacity=0;for(let f=0;f<this.sticks.length;f++){const d=this.sticks[f];for(let _=f+1;_<this.sticks.length;_++){const g=this.sticks[_],p=d.pos.x-g.pos.x,m=d.pos.y-g.pos.y,S=p*p+m*m;if(S>175*175)continue;const v=Math.sqrt(S)||1;if(v<145){const y=(1-v/145)*.045,T=p/v*y,R=m/v*y;d.velocity.x+=T,d.velocity.y+=R,g.velocity.x-=T,g.velocity.y-=R}const x=(d.length+g.length)*.5+10;if(v<x){const E=Yx(d,g,Pr,Lr),y=Pr.x-Lr.x,T=Pr.y-Lr.y,R=Math.hypot(y,T),M=Math.abs(Pr.z-Lr.z),b=d.radius+g.radius+6;if(E<b||R<b&&M<24){let L=y,B=T;const P=Math.hypot(L,B);P>.001?(L/=P,B/=P):(L=p/v,B=m/v);const F=Math.max(0,b-R);if(F>0){const G=F*.55;d.pos.x+=L*G,d.pos.y+=B*G,g.pos.x-=L*G,g.pos.y-=B*G,d.mesh.position.copy(d.pos),g.mesh.position.copy(g.pos)}const V=d.velocity.x-g.velocity.x,q=d.velocity.y-g.velocity.y,k=V*L+q*B;let N=0;k<0&&(N=-1.85*k),N=Math.max(N,.58);const X=L*N*.5,K=B*N*.5;d.velocity.x+=X,d.velocity.y+=K,g.velocity.x-=X,g.velocity.y-=K;const $=(Math.random()<.5?1:-1)*(.004+N*.0035);d.rotSpeed=-d.rotSpeed*.6+$,g.rotSpeed=-g.rotSpeed*.6-$,d.rotAxis.x+=B*.35,d.rotAxis.y-=L*.35,d.rotAxis.normalize(),g.rotAxis.x-=B*.35,g.rotAxis.y+=L*.35,g.rotAxis.normalize(),(d.mesh.visible||g.mesh.visible)&&U.playWoodClack(Math.min(.045,.02+N*.02))}}}}for(let f=0;f<this.sticks.length;f++)this.sticks[f].update(s,n,a,this.mouseVel,o)}onResize(t){this.bounds.width=window.innerWidth,t&&t>500&&(this.bounds.height=t)}getStickScreenSegments(){const t=this.parent?this.parent.position.y:0,e=window.innerWidth*.5,i=window.innerHeight*.5,n=[];for(let s=0;s<this.sticks.length;s++){const a=this.sticks[s];if(!a.mesh.visible||a.mesh.material&&a.mesh.material.opacity<.2)continue;const o=a.pos.x,h=a.pos.y+t,l=e+o,c=i-h;if(l<-100||l>window.innerWidth+100||c<-100||c>window.innerHeight+100)continue;ls.set(0,1,0).applyQuaternion(a.mesh.quaternion);const u=a.length*.5,f=ls.x*u,d=-ls.y*u;n.push({stick:a,x1:l-f,y1:c-d,x2:l+f,y2:c+d,cx:l,cy:c,radius:a.radius||2,length:a.length,depthZ:a.pos.z})}return n}}class Jx{constructor(t,e,i,n){this.sm=t,this.projects=e,this.cursor=i,this.modal=n,this.cards=[],this.activeFilter="all",this.scroll={current:0,target:0,ease:.085,velocity:0,min:0,max:1e3},this.isDragging=!1,this.dragStart={y:0,scrollStart:0,time:0},this.dragVelocity=0,this.lastDragY=0,this.dragDistance=0,this.raycaster=new v_,this.mouseNorm=new at(-999,-999),this.mouseClient={x:-9999,y:-9999},this.isPointerOverUI=!1,this.hoveredCard=null,this.container=new Mn,this.sm.scene.add(this.container),this.particles=new Xx(this.sm.scene),this.sticks=new jx(this.container),this.ctaElement=document.querySelector(".project-grid-cta"),this.filtersElement=document.querySelector(".project-filters"),this.initCards(),this.updateLayout(!1),this.initEvents()}initCards(){this.projects.forEach((t,e)=>{const i=new ss(t,e);this.cards.push(i),this.container.add(i.group)})}updateLayout(t=!0){var f,d;(f=this.sticks)==null||f.onResize();const e=window.innerWidth<=800,i=window.innerWidth>1400,n=e?1:2,s=e?0:i?80:56,a=e?95:140,o=e?Math.min(window.innerWidth*.88,420):Math.min((window.innerWidth*.82-s)/2,i?560:490),h=o/(1024/538),l=this.cards.filter(_=>this.activeFilter==="all"?!0:_.project.categories.includes(this.activeFilter)),c=new Array(n).fill(0);e||(c[1]=135),l.forEach((_,g)=>{_.updateDimensions(o,h);const p=g%n;let m=0;e||(m=p===0?-o/2-s/2:o/2+s/2);const S=-c[p];c[p]+=h+a,_.targetPos.set(m,S,0),t?di.to(_.group.position,{x:m,y:S,duration:.8,ease:"power3.out"}):_.group.position.set(m,S,0)});const u=Math.max(...c);this.scroll.max=Math.max(0,u-window.innerHeight*.55),(d=this.sticks)==null||d.onResize(u)}initEvents(){window.addEventListener("wheel",n=>{const s=document.querySelector(".loader");s&&!s.classList.contains("is-loaded")||document.documentElement.classList.contains("is-project-open")||(this.scroll.target+=n.deltaY*.85,this.clampScroll())},{passive:!0});const t=(n,s,a)=>{var l,c,u,f;const o=document.querySelector(".loader");if(o&&!o.classList.contains("is-loaded")||document.documentElement.classList.contains("is-project-open")||(c=(l=window.__app)==null?void 0:l.character)!=null&&c.isPointerOverCharacter(n,s)||(f=(u=window.__app)==null?void 0:u.character)!=null&&f.isDragging)return;const h=(a==null?void 0:a.target)||(n>=0&&s>=0?document.elementFromPoint(n,s):null);h&&h.closest('.header, .project-filters__inner, .project-filters__title, .project-grid-cta, .menu, .project-modal, .project-screen, .project-viewer, .loader, button, a, [data-cursor="pointer"], .interactive')||(this.isDragging=!0,this.dragStart.y=s,this.dragStart.scrollStart=this.scroll.target,this.dragStart.time=performance.now(),this.lastDragY=s,this.dragDistance=0,this.dragVelocity=0)},e=(n,s,a)=>{var o,h;if(this.mouseClient.x=n,this.mouseClient.y=s,this.mouseNorm.x=n/window.innerWidth*2-1,this.mouseNorm.y=-(s/window.innerHeight)*2+1,(h=(o=window.__app)==null?void 0:o.character)!=null&&h.isDragging){this.isDragging=!1;return}if(this.checkPointerOverUI(a==null?void 0:a.target),this.particles.setMouse(this.mouseNorm.x,this.mouseNorm.y),this.sticks.setMouse(this.mouseNorm.x,this.mouseNorm.y),this.isDragging){const l=this.dragStart.y-s;this.dragDistance+=Math.abs(l);const c=performance.now(),u=Math.max(1,c-this.dragStart.time);this.dragVelocity=(this.lastDragY-s)/u,this.lastDragY=s,this.dragStart.time=c,this.scroll.target=this.dragStart.scrollStart+l*1.4,this.clampScroll()}},i=()=>{this.isDragging&&(this.isDragging=!1,Math.abs(this.dragVelocity)>.1&&(this.scroll.target+=this.dragVelocity*280,this.clampScroll()))};window.addEventListener("mousedown",n=>t(n.clientX,n.clientY,n)),window.addEventListener("mousemove",n=>e(n.clientX,n.clientY,n)),window.addEventListener("mouseup",i),window.addEventListener("touchstart",n=>t(n.touches[0].clientX,n.touches[0].clientY,n),{passive:!0}),window.addEventListener("touchmove",n=>e(n.touches[0].clientX,n.touches[0].clientY,n),{passive:!0}),window.addEventListener("touchend",i),window.addEventListener("keydown",n=>{n.key==="ArrowDown"||n.key==="PageDown"?(this.scroll.target+=220,this.clampScroll()):(n.key==="ArrowUp"||n.key==="PageUp")&&(this.scroll.target-=220,this.clampScroll())}),window.addEventListener("resize",()=>{this.updateLayout(!1)}),this.sm.canvas.addEventListener("click",n=>{var a,o,h,l;const s=document.querySelector(".loader");s&&!s.classList.contains("is-loaded")||document.documentElement.classList.contains("is-project-open")||this.dragDistance>12||(o=(a=window.__app)==null?void 0:a.character)!=null&&o.isPointerOverCharacter(n.clientX,n.clientY)||(l=(h=window.__app)==null?void 0:h.character)!=null&&l.isDragging||this.checkPointerOverUI(n==null?void 0:n.target)||this.hoveredCard&&this.modal.open(this.hoveredCard.project)})}checkPointerOverUI(t){var s,a,o,h;const e=document.querySelector(".loader");if(e&&!e.classList.contains("is-loaded"))return this.isPointerOverUI=!0,!0;if(document.documentElement.classList.contains("is-project-open")||document.querySelector(".project-screen.is-active, .project-viewer.is-active"))return this.isPointerOverUI=!0,!0;if((a=(s=window.__app)==null?void 0:s.character)!=null&&a.isPointerOverCharacter(this.mouseClient.x,this.mouseClient.y)||(h=(o=window.__app)==null?void 0:o.character)!=null&&h.isDragging)return this.isPointerOverUI=!0,!0;let i=t;if(!i&&this.mouseClient.x>=0&&this.mouseClient.y>=0&&(i=document.elementFromPoint(this.mouseClient.x,this.mouseClient.y)),!i)return this.isPointerOverUI=!1,!1;const n=!!i.closest('.header, .project-filters__inner, .project-filters__title, .project-grid-cta, .menu, .project-modal, .project-screen, .project-viewer, .loader, button, a, [data-cursor="pointer"], .interactive');return this.isPointerOverUI=n,n}clampScroll(){this.scroll.target=Math.max(-60,Math.min(this.scroll.target,this.scroll.max+60))}getCardScreenRects(){var n;if(!this.cards||!((n=this.sm)!=null&&n.camera))return[];const t=this.sm.camera,e=window.innerWidth,i=window.innerHeight;return this.cards.filter(s=>{var a;return s.isVisible&&((a=s.group)==null?void 0:a.visible)&&s.mesh}).map(s=>{s.mesh.updateWorldMatrix(!0,!1);const a=s.width/2,o=s.height/2,h=(b,I,L=0)=>{const B=new O(b,I,L);return B.applyMatrix4(s.mesh.matrixWorld),B.project(t),{x:(B.x*.5+.5)*e,y:(-B.y*.5+.5)*i,z:B.z}},l=h(-a,o),c=h(a,o),u=h(a,-o),f=h(-a,-o),d=h(0,0),_=c.x-l.x,g=c.y-l.y,p=Math.atan2(g,_),m=Math.hypot(_,g),S=Math.min(l.x,c.x,u.x,f.x),v=Math.max(l.x,c.x,u.x,f.x),x=Math.min(l.y,c.y,u.y,f.y),E=Math.max(l.y,c.y,u.y,f.y),y=18,T=b=>{const I=Math.max(-a,Math.min(a,b));let L=o,B=0,P=!1,F=0,V=0;if(I<-a+y){const k=-a+y-I;if(k>0){const N=y-Math.sqrt(Math.max(0,y*y-k*k));L=o-N,B=-Math.atan2(k,Math.sqrt(Math.max(.01,y*y-k*k))),P=!0,F=-1,V=Math.min(1,k/y)}}else if(I>a-y){const k=I-(a-y);if(k>0){const N=y-Math.sqrt(Math.max(0,y*y-k*k));L=o-N,B=Math.atan2(k,Math.sqrt(Math.max(.01,y*y-k*k))),P=!0,F=1,V=Math.min(1,k/y)}}const q=h(I,L);return q.surfaceAngle=p+B,q.isCorner=P,q.cornerSide=F,q.slopeFactor=V,q.localX=I,q},R=b=>{const I=M(b);return T(I).y},M=b=>{if(Math.abs(_)<.001)return 0;const I=Math.max(0,Math.min(1,(b-l.x)/_));return-a+I*(2*a)};return{id:s.project.id,title:s.project.title,x:d.x,y:d.y,width:m,height:E-x,left:S,right:v,top:x,bottom:E,corners:{tl:l,tr:c,br:u,bl:f},topLedge:{x1:l.x,y1:l.y,x2:c.x,y2:c.y,angle:p,length:m},hw:a,hh:o,getLedgePoint:T,getLedgeYAtScreenX:R,screenXToLocalX:M,cardRef:s}})}getSticksScreenSegments(){var t;return((t=this.sticks)==null?void 0:t.getStickScreenSegments())||[]}filter(t){if(this.activeFilter===t)return;this.activeFilter=t;let e=0;this.cards.forEach(i=>{t==="all"||i.project.categories.includes(t)?(i.setVisible(!0,e*.035),e++):i.setVisible(!1)}),setTimeout(()=>{this.updateLayout(!0),this.scroll.target>this.scroll.max&&di.to(this.scroll,{target:this.scroll.max,duration:.45,ease:"power2.out"})},150)}update(){const t=this.scroll.current;this.scroll.current+=(this.scroll.target-this.scroll.current)*this.scroll.ease,this.scroll.velocity=this.scroll.current-t;const i=window.innerWidth<=800?75:95;if(this.container.position.y=this.scroll.current-i,this.filtersElement&&!document.body.classList.contains("menu-open")){const o=window.innerWidth<=800,h=o?180:240,l=o?140:190;this.scroll.current>h?this.filtersElement.classList.add("is-hidden"):this.scroll.current<l&&this.filtersElement.classList.remove("is-hidden")}if(this.ctaElement&&!document.body.classList.contains("menu-open")){const o=this.cards.filter(c=>c.isVisible&&c.group.visible),h=o.length>0?o[o.length-1]:null;let l=!1;if(this.scroll.max<=80)l=!0;else if(h){const u=-(h.group.position.y+this.container.position.y)+window.innerHeight*.5,f=this.ctaElement.classList.contains("is-hidden"),d=window.innerHeight-30,_=window.innerHeight;f?l=u<=d:l=u<_}else{const c=Math.max(80,this.scroll.max-260);l=this.scroll.current>=c}l?this.ctaElement.classList.remove("is-hidden"):this.ctaElement.classList.add("is-hidden")}const n=Math.max(-14,Math.min(14,this.scroll.velocity));if(this.cards.forEach(o=>{o.group.visible&&(o.setScrollSpeed(n*.0035),o.update())}),this.particles.update(performance.now()*.001),this.sticks.update(performance.now()*.001,this.container.position.y,this.cards),this.checkPointerOverUI(),this.isPointerOverUI){this.hoveredCard&&(this.hoveredCard.setHover(!1),this.hoveredCard=null),this.cursor&&(this.cursor.state==="is-drag"||this.cursor.state==="is-video")&&this.cursor.setState("default");return}this.raycaster.setFromCamera(this.mouseNorm,this.sm.camera);const s=this.cards.filter(o=>o.isVisible&&o.group.visible).map(o=>o.mesh),a=this.raycaster.intersectObjects(s);if(a.length>0){const o=a[0],h=o.object.userData.card;this.hoveredCard!==h&&(this.hoveredCard&&this.hoveredCard.setHover(!1),this.hoveredCard=h,this.hoveredCard.setHover(!0),U.playRatchet(),this.hoveredCard.project.video?this.cursor.setState("is-video"):this.cursor.setState("is-drag"));const l=o.point,c=new O;this.hoveredCard.mesh.getWorldPosition(c);const u=Math.max(-1,Math.min(1,(l.x-c.x)/(this.hoveredCard.width/2))),f=Math.max(-1,Math.min(1,(l.y-c.y)/(this.hoveredCard.height/2)));this.hoveredCard.setCursorPosition(u,f,o.uv)}else this.hoveredCard&&(this.hoveredCard.setHover(!1),this.hoveredCard=null,this.cursor.setState("default"))}}class Zx{constructor(){this.el=document.querySelector(".custom-cursor"),this.pos={current:{x:window.innerWidth/2,y:window.innerHeight/2},target:{x:window.innerWidth/2,y:window.innerHeight/2}},this.ease=.22,this.state="default",this.rafId=null,this.hasMoved=!1,this.el&&(this.initEvents(),this.render())}initEvents(){const t=o=>{this.pos.target.x=o.clientX,this.pos.target.y=o.clientY,this.hasMoved||(this.hasMoved=!0,this.pos.current.x=o.clientX,this.pos.current.y=o.clientY,document.documentElement.classList.add("has-custom-cursor")),this.el.classList.remove("is-hidden"),this.el.classList.add("is-visible"),o.target.closest(".loader__enter-btn, .menu.is-active, .project-screen.is-image-mode")?this.el.classList.add("is-dark-surface"):this.el.classList.remove("is-dark-surface")};window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("mousemove",t,{passive:!0}),window.addEventListener("pointerdown",t,{passive:!0});const e=()=>{this.el.classList.add("is-hidden"),this.el.classList.remove("is-visible")},i=()=>{this.hasMoved&&(this.el.classList.remove("is-hidden"),this.el.classList.add("is-visible"))};document.addEventListener("mouseleave",e),document.documentElement.addEventListener("mouseleave",e),window.addEventListener("mouseleave",e),document.addEventListener("pointerleave",e),window.addEventListener("blur",e),document.addEventListener("mouseenter",i),document.documentElement.addEventListener("mouseenter",i),window.addEventListener("mouseenter",i),document.addEventListener("pointerenter",i),window.addEventListener("focus",i);const n=()=>{this.el&&(document.fullscreenElement?document.fullscreenElement.appendChild(this.el):document.body.appendChild(this.el),this.el.classList.remove("is-hidden"),this.el.classList.add("is-visible"))};document.addEventListener("fullscreenchange",n),document.addEventListener("webkitfullscreenchange",n);const s=document.getElementById("project-viewer-frame");s==null||s.addEventListener("mouseenter",e);const a=document.querySelector(".project-screen__floating-back");a==null||a.addEventListener("pointerenter",i),a==null||a.addEventListener("mouseenter",i),this.isHoveringUI=!1,document.addEventListener("mouseover",o=>{o.target.closest('a, button, [data-cursor="pointer"], .interactive, .filter-btn, .nav-item, .audio-toggle-btn, .project-filters__inner')&&(this.isHoveringUI=!0,this.setState("is-pointer"))}),document.addEventListener("mouseout",o=>{var l;o.target.closest('a, button, [data-cursor="pointer"], .interactive, .filter-btn, .nav-item, .audio-toggle-btn, .project-filters__inner')&&(this.isHoveringUI=!1,this.state==="is-pointer"&&(document.documentElement.classList.contains("is-project-open")&&((l=window.__imageZoomManager)!=null&&l.isActive())?window.__imageZoomManager.updateCursorState():this.setState("default")))})}setState(t){(document.documentElement.classList.contains("is-project-open")||document.querySelector(".loader:not(.is-loaded)"))&&(t==="is-drag"||t==="is-video")||this.isHoveringUI&&(t==="is-drag"||t==="is-video")||!document.documentElement.classList.contains("is-project-image-mode")&&(t==="is-zoom-in"||t==="is-zoom-out"||t==="is-grabbing")||this.state!==t&&(this.el.classList.remove("is-pointer","is-drag","is-video","is-zoom-in","is-zoom-out","is-grabbing"),this.state=t,t!=="default"&&this.el.classList.add(t))}render(){this.pos.current.x+=(this.pos.target.x-this.pos.current.x)*this.ease,this.pos.current.y+=(this.pos.target.y-this.pos.current.y)*this.ease,this.el.style.transform=`translate3d(${this.pos.current.x}px, ${this.pos.current.y}px, 0)`,this.rafId=requestAnimationFrame(()=>this.render())}destroy(){this.rafId&&cancelAnimationFrame(this.rafId)}}class $x{constructor(){this.menuEl=document.querySelector(".menu"),this.toggleBtn=document.querySelector(".js-menu-toggle"),this.headerEl=document.querySelector(".header"),this.isOpen=!1,!(!this.toggleBtn||!this.menuEl)&&this.initEvents()}initEvents(){this.toggleBtn.addEventListener("click",()=>{U.playClick(),this.toggle()}),this.menuEl.querySelectorAll("a").forEach(e=>{e.addEventListener("mouseenter",()=>{U.playRatchet()}),e.addEventListener("click",i=>{const n=e.getAttribute("href");n&&n.startsWith("#")&&(i.preventDefault(),this.close())})}),window.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()})}toggle(){this.isOpen?this.close():this.open()}open(){var t,e;this.isOpen=!0,this.menuEl.classList.add("is-active"),document.body.classList.add("menu-open"),(t=document.querySelector(".project-filters"))==null||t.classList.add("is-hidden"),(e=document.querySelector(".project-grid-cta"))==null||e.classList.add("is-hidden")}close(){var t,e,i,n,s;this.isOpen=!1,this.menuEl.classList.remove("is-active"),document.body.classList.remove("menu-open"),(t=document.querySelector(".project-filters"))==null||t.classList.remove("is-hidden"),((n=(i=(e=window.__app)==null?void 0:e.gallery)==null?void 0:i.scroll)==null?void 0:n.current)>80&&((s=document.querySelector(".project-grid-cta"))==null||s.classList.remove("is-hidden"))}}class Kx{constructor(t,e){this.projects=t,this.onFilterChange=e,this.container=document.querySelector(".project-filters"),this.listEl=document.querySelector(".project-filters__list"),this.pillEl=document.querySelector(".filter-active-pill"),this.currentFilter="all",this.init()}init(){if(!this.listEl)return;const t={all:this.projects.length};this.projects.forEach(n=>{(n.categories||[]).forEach(s=>{t[s]=(t[s]||0)+1})}),this.listEl.querySelectorAll(".filter-btn").forEach(n=>{const s=n.dataset.filter,a=n.querySelector(".filter-btn__count");a&&t[s]!==void 0&&(a.textContent=t[s]),n.addEventListener("mouseenter",()=>{U.playRatchet()}),n.addEventListener("click",()=>{U.playClick(),this.setFilter(s,n)})});const i=this.listEl.querySelector(".filter-btn.is-active");i&&this.updatePillPosition(i),window.addEventListener("resize",()=>{const n=this.listEl.querySelector(".filter-btn.is-active");n&&this.updatePillPosition(n)})}setFilter(t,e){if(this.currentFilter===t)return;this.currentFilter=t,this.listEl.querySelectorAll(".filter-btn").forEach(n=>n.classList.remove("is-active")),e.classList.add("is-active"),this.updatePillPosition(e),this.onFilterChange&&this.onFilterChange(t)}updatePillPosition(t){if(!this.pillEl||!t)return;const e=t.getBoundingClientRect(),i=this.listEl.getBoundingClientRect(),n=e.left-i.left,s=e.width;this.pillEl.style.transform=`translateX(${n}px)`,this.pillEl.style.width=`${s}px`}}class Qx{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.dpr=Math.min(window.devicePixelRatio||1,2),this.width=500,this.height=295,this.canvas.width=this.width*this.dpr,this.canvas.height=this.height*this.dpr,this.ctx.scale(this.dpr,this.dpr),this.time=0,this.lastTime=null,this.animId=null,this.isDestroyed=!1,this.centerX=250,this.platformBaseY=226,this.mouse={x:250,y:130,isOver:!1},this.blinkTimer=0,this.isBlinking=!1,this.lettersList=["K","L","O","U","R","K"],this.nextLetterIndex=0,this.throwTimer=0,this.throwInterval=.52,this.activeLetters=[],this.archTargets=[{x:96,y:96},{x:154,y:66},{x:219,y:50},{x:275,y:50},{x:336,y:66},{x:396,y:96}],this.charState="throwing",this.celebrateTimer=0,this.armThrowPhase=0,this.jumpY=0,this.jumpVy=0,this.bindEvents(),this.loop=this.loop.bind(this),this.animId=requestAnimationFrame(this.loop)}bindEvents(){this.onMouseMove=t=>{const e=this.canvas.getBoundingClientRect();this.mouse.x=(t.clientX-e.left)*(this.width/e.width),this.mouse.y=(t.clientY-e.top)*(this.height/e.height),this.mouse.isOver=!0},this.onMouseLeave=()=>{this.mouse.isOver=!1},this.onClick=()=>{this.jumpY===0&&(this.jumpVy=-4.5)},this.canvas.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("mouseleave",this.onMouseLeave),this.canvas.addEventListener("click",this.onClick)}spawnLetter(t){const e=this.lettersList[t],i=this.archTargets[t],n=this.centerX+18,s=this.platformBaseY-48,a={char:e,index:t,x:n,y:s,startX:n,startY:s,targetX:i.x,targetY:i.y,vx:(i.x-n)*.05,vy:-8.5,rotation:(Math.random()-.5)*.2,vRot:(Math.random()-.5)*.03,scale:.5,targetScale:1,opacity:1,status:"flying",flightProgress:0};this.activeLetters.push(a)}update(t){if((this.jumpVy!==0||this.jumpY!==0)&&(this.jumpY+=this.jumpVy,this.jumpVy+=.35,this.jumpY>=0&&(this.jumpY=0,this.jumpVy=0)),this.blinkTimer+=t,this.blinkTimer>3.5&&(this.isBlinking=!0,this.blinkTimer>3.65&&(this.isBlinking=!1,this.blinkTimer=Math.random()*.8)),this.charState==="throwing"){this.throwTimer+=t;const e=this.throwTimer%this.throwInterval/this.throwInterval;this.armThrowPhase=e,this.throwTimer>=this.throwInterval&&(this.throwTimer=0,this.nextLetterIndex<this.lettersList.length&&(this.spawnLetter(this.nextLetterIndex),this.nextLetterIndex++,this.nextLetterIndex>=this.lettersList.length&&(this.charState="celebrating",this.celebrateTimer=0)))}else this.charState==="celebrating"?(this.celebrateTimer+=t,this.armThrowPhase=0,this.celebrateTimer>=2.8&&(this.charState="resetting",this.activeLetters.forEach(e=>{e.status="dispersing",e.vx=(e.x-this.centerX)*.03+(Math.random()-.5)*2,e.vy=-2.5-Math.random()*2.5}))):this.charState==="resetting"&&(this.celebrateTimer+=t,this.celebrateTimer>=3.6&&(this.activeLetters=[],this.nextLetterIndex=0,this.throwTimer=0,this.charState="throwing"));this.activeLetters.forEach(e=>{if(e.status==="flying"){e.flightProgress=Math.min(1,e.flightProgress+t*2.65);const i=e.flightProgress,n=1-Math.pow(1-i,3),a=Math.sin(i*Math.PI)*-14;e.x=e.startX+(e.targetX-e.startX)*n;const o=e.startY+(e.targetY-e.startY)*n+a;e.y=Math.max(28,o),e.scale=.5+.5*n,e.rotation=(1-n)*.2,i>=1&&(e.status="arrived",e.x=e.targetX,e.y=e.targetY,e.rotation=0)}else e.status==="dispersing"&&(e.x+=e.vx,e.y+=e.vy,e.vy+=.14,e.rotation+=e.vRot*2,e.opacity=Math.max(0,e.opacity-t*1.3))})}draw(){this.ctx.clearRect(0,0,this.width,this.height);const t=Math.sin(this.time*1.1)*1.6,e=this.centerX,i=this.platformBaseY+t,n=76-t*.8,s=11-t*.3,a=this.ctx.createRadialGradient(e,i+26,4,e,i+26,n);a.addColorStop(0,"rgba(45, 33, 26, 0.18)"),a.addColorStop(.65,"rgba(45, 33, 26, 0.06)"),a.addColorStop(1,"rgba(45, 33, 26, 0)"),this.ctx.fillStyle=a,this.ctx.beginPath(),this.ctx.ellipse(e,i+26,n,s,0,0,Math.PI*2),this.ctx.fill();const o=75,h=17,l=16,c=this.ctx.createLinearGradient(e-o,i,e+o,i+l);c.addColorStop(0,"#caa299"),c.addColorStop(.35,"#b98f86"),c.addColorStop(.7,"#a57a71"),c.addColorStop(1,"#8e655c"),this.ctx.fillStyle=c,this.ctx.beginPath(),this.ctx.ellipse(e,i+l,o,h,0,0,Math.PI),this.ctx.lineTo(e-o,i),this.ctx.ellipse(e,i,o,h,0,Math.PI,0,!0),this.ctx.closePath(),this.ctx.fill(),this.ctx.strokeStyle="rgba(60, 40, 32, 0.22)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.ellipse(e,i+l,o,h,0,0,Math.PI),this.ctx.stroke();const u=this.ctx.createLinearGradient(e,i-h,e,i+h);u.addColorStop(0,"#f5ebe7"),u.addColorStop(.55,"#ebdad4"),u.addColorStop(1,"#dfccc7"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.ellipse(e,i,o,h,0,0,Math.PI*2),this.ctx.fill(),this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=1.8,this.ctx.beginPath(),this.ctx.ellipse(e,i,o,h,0,0,Math.PI*2),this.ctx.stroke();const f=i-1+this.jumpY;this.drawCharacter(e,f),this.drawLetters()}drawCharacter(t,e){const i="#241914",n="#170f0c";this.ctx.save(),this.ctx.translate(t,e);const s=Math.sin(this.time*1.6)*.4,a=-20,o=-40+s,h=14,l=20,c=o-10;this.ctx.fillStyle=i,this.ctx.strokeStyle=i,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.lineWidth=3.6,this.ctx.beginPath(),this.ctx.moveTo(-4.5,a),this.ctx.lineTo(-4.5,0),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(-5,-1,3.8,2,0,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(4.5,a),this.ctx.lineTo(4.5,0),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(5.5,-1,3.8,2,0,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.roundRect?this.ctx.roundRect(-h/2,o,h,l,5):this.ctx.rect(-h/2,o,h,l),this.ctx.fill();const u="#3a271f";this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.rect(-h/2-1.2,o-1.5,h+2.4,4.8),this.ctx.fill();const f=Math.sin(this.time*2.8)*2.5;this.ctx.strokeStyle=u,this.ctx.lineWidth=3.2,this.ctx.lineCap="round",this.ctx.beginPath(),this.ctx.moveTo(-h/2,o+1.2),this.ctx.quadraticCurveTo(-h/2-8,o+1.2+f,-h/2-17,o+1-f*.7),this.ctx.stroke();const d=7.6;if(this.ctx.fillStyle=i,this.ctx.beginPath(),this.ctx.arc(0,c,d,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle=n,this.ctx.beginPath(),this.ctx.ellipse(-.8,c-6.6,8.8,3.6,-.22,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.arc(-1.5,c-10.8,1.2,0,Math.PI*2),this.ctx.fill(),!this.isBlinking){let _=this.mouse.x-t,g=this.mouse.y-(e+c);const p=this.activeLetters.find(T=>T.status==="flying")||this.activeLetters[this.activeLetters.length-1];p&&this.charState!=="celebrating"?(_=p.x-t,g=p.y-(e+c)):(_=0,g=-120);const m=Math.atan2(g,_),S=Math.min(2,Math.hypot(_,g)*.02),v=Math.cos(m)*S,x=Math.sin(m)*S,E=2.8,y=c-.5;this.ctx.fillStyle="#ffffff",this.ctx.beginPath(),this.ctx.arc(E,y,2.8,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#170f0c",this.ctx.beginPath(),this.ctx.arc(E+v,y+x,1.35,0,Math.PI*2),this.ctx.fill()}if(this.ctx.strokeStyle=i,this.ctx.lineWidth=3.3,this.charState==="celebrating")this.ctx.beginPath(),this.ctx.moveTo(-5,o+4),this.ctx.quadraticCurveTo(-14,o+2,-12,o-18),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(5,o+4),this.ctx.lineTo(11,o-18),this.ctx.stroke();else{const _=this.armThrowPhase;let g=0;_>=.25&&_<.5?g=-1.8*Math.sin((_-.25)/.25*Math.PI):_>=.5&&_<.7&&(g=1*Math.sin((_-.5)/.2*Math.PI));const p=-5.2+g*.4,m=o+11,S=-5+g,v=o+18;this.ctx.beginPath(),this.ctx.moveTo(-5,o+4),this.ctx.lineTo(p,m),this.ctx.lineTo(S,v),this.ctx.stroke(),this.ctx.fillStyle=i,this.ctx.beginPath(),this.ctx.arc(S,v,1.8,0,Math.PI*2),this.ctx.fill();let x,E,y,T;if(_<.25){const R=_/.25;x=6+R*2.5,E=o+8+R*4,y=6+R*1.5,T=o+17+R*3}else if(_<.5){const R=(_-.25)/.25;x=8.5-R*5,E=o+12-R*10,y=7.5-R*10,T=o+20-R*28}else if(_<.7){const R=(_-.5)/.2;x=3.5+R*7,E=o+2-R*4,y=-2.5+R*22,T=o-8-R*13}else{const R=(_-.7)/.3;x=10.5-R*4.5,E=o-2+R*10,y=19.5-R*13.5,T=o-21+R*38}this.ctx.beginPath(),this.ctx.moveTo(5,o+4),this.ctx.lineTo(x,E),this.ctx.lineTo(y,T),this.ctx.stroke(),this.ctx.fillStyle=i,this.ctx.beginPath(),this.ctx.arc(y,T,2,0,Math.PI*2),this.ctx.fill()}this.ctx.restore()}drawLetters(){this.ctx.save(),this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.font='bold 28px "Neue Montreal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',this.activeLetters.forEach(t=>{this.ctx.save();const e=t.status==="arrived"?Math.sin(this.time*1.2+t.index*.45)*1.2:0,i=t.y+e;this.ctx.translate(t.x,i),this.ctx.rotate(t.rotation),this.ctx.scale(t.scale,t.scale),this.ctx.globalAlpha=t.opacity,this.ctx.save(),this.ctx.shadowColor="rgba(45, 33, 26, 0.26)",this.ctx.shadowBlur=6,this.ctx.shadowOffsetX=1.5,this.ctx.shadowOffsetY=3.5,this.ctx.fillStyle="rgba(33, 33, 33, 0.2)",this.ctx.fillText(t.char,0,0),this.ctx.restore();const n=this.ctx.createLinearGradient(0,-14,0,14);n.addColorStop(0,"#2e2b2a"),n.addColorStop(.5,"#212121"),n.addColorStop(1,"#151312"),this.ctx.fillStyle=n,this.ctx.fillText(t.char,0,0),this.ctx.strokeStyle="rgba(255, 255, 255, 0.18)",this.ctx.lineWidth=.8,this.ctx.strokeText(t.char,-.3,-.4),this.ctx.restore()}),this.ctx.restore()}loop(t){if(this.isDestroyed)return;const e=t*.001,i=Math.min(.033,this.lastTime?e-this.lastTime:.016);this.lastTime=e,this.time=e,this.update(i),this.draw(),this.animId=requestAnimationFrame(this.loop)}destroy(){this.isDestroyed=!0,this.animId&&cancelAnimationFrame(this.animId),this.canvas&&(this.canvas.removeEventListener("mousemove",this.onMouseMove),this.canvas.removeEventListener("mouseleave",this.onMouseLeave),this.canvas.removeEventListener("click",this.onClick))}}class tv{constructor(t){this.el=document.querySelector(".loader"),this.bar=document.querySelector(".loader-track__bar"),this.canvas=document.querySelector(".loader__character-canvas"),this.onComplete=t,this.progress=0,this.isFinished=!1,this.canvas&&(this.character=new Qx(this.canvas)),this.bindEvents(),this.startLoading()}bindEvents(){document.addEventListener("click",i=>{if(this.isFinished)return;if(i.target.closest(".js-enter-audio")){i.preventDefault(),i.stopPropagation(),this.handleEnter(!0);return}if(i.target.closest(".js-enter-no-audio")){i.preventDefault(),i.stopPropagation(),this.handleEnter(!1);return}}),document.querySelectorAll(".js-enter-audio").forEach(i=>{i.addEventListener("click",n=>{n.preventDefault(),this.handleEnter(!0)})}),document.querySelectorAll(".js-enter-no-audio").forEach(i=>{i.addEventListener("click",n=>{n.preventDefault(),this.handleEnter(!1)})})}handleEnter(t){if(!this.isFinished){this.isFinished=!0;try{U.init(),U.setMuted(!t),t&&U.playEnterChime()}catch(e){console.warn("Audio initialization warning:",e)}this.finish()}}startLoading(){const t=setInterval(()=>{if(this.isFinished){clearInterval(t);return}this.progress+=Math.floor(Math.random()*8)+4,this.progress>=100&&(this.progress=100,clearInterval(t)),this.bar&&(this.bar.style.width=`${this.progress}%`)},60)}finish(){this.el&&(this.el.classList.add("is-loaded"),setTimeout(()=>{this.character&&this.character.destroy(),this.el.style.display="none",this.onComplete&&this.onComplete()},900))}}class ev{constructor(t={}){var e,i,n,s,a;this.container=t.container||document.getElementById("project-viewer-image-wrapper"),this.imageEl=t.imageEl||document.getElementById("project-viewer-image"),this.toolbar=t.toolbar||document.getElementById("project-viewer-zoom-toolbar"),this.screenEl=t.screenEl||document.getElementById("project-viewer"),this.cursor=t.cursor||window.__cursor||null,this.scale=1,this.minScale=1,this.maxScale=4.5,this.pan={x:0,y:0},this.isDragging=!1,this.dragStart={x:0,y:0},this.panStart={x:0,y:0},this.pointerMoved=!1,this.touches=new Map,this.initialPinchDistance=0,this.initialPinchScale=1,this.pinchCenter={x:0,y:0},this.btnIn=(e=this.toolbar)==null?void 0:e.querySelector(".js-zoom-in"),this.btnOut=(i=this.toolbar)==null?void 0:i.querySelector(".js-zoom-out"),this.btnReset=(n=this.toolbar)==null?void 0:n.querySelector(".js-zoom-reset"),this.btnFit=(s=this.toolbar)==null?void 0:s.querySelector(".js-zoom-fit"),this.valText=(a=this.toolbar)==null?void 0:a.querySelector(".zoom-val-text"),this.rafId=null,this.initEvents()}setCursor(t){this.cursor=t}initEvents(){var t,e,i,n;!this.container||!this.imageEl||(this.container.addEventListener("wheel",s=>this.onWheel(s),{passive:!1}),this.container.addEventListener("pointerdown",s=>this.onPointerDown(s)),window.addEventListener("pointermove",s=>this.onPointerMove(s),{passive:!0}),window.addEventListener("pointerup",s=>this.onPointerUp(s)),window.addEventListener("pointercancel",s=>this.onPointerUp(s)),this.container.addEventListener("dblclick",s=>this.onDoubleClick(s)),this.container.addEventListener("touchstart",s=>this.onTouchStart(s),{passive:!1}),this.container.addEventListener("touchmove",s=>this.onTouchMove(s),{passive:!1}),this.container.addEventListener("touchend",s=>this.onTouchEnd(s),{passive:!0}),this.container.addEventListener("touchcancel",s=>this.onTouchEnd(s),{passive:!0}),(t=this.btnIn)==null||t.addEventListener("click",s=>{s.stopPropagation(),this.zoomBy(.5)}),(e=this.btnOut)==null||e.addEventListener("click",s=>{s.stopPropagation(),this.zoomBy(-.5)}),(i=this.btnReset)==null||i.addEventListener("click",s=>{s.stopPropagation(),Math.abs(this.scale-1)<.05?this.zoomTo(2,window.innerWidth/2,window.innerHeight/2,!0):this.reset(!0)}),(n=this.btnFit)==null||n.addEventListener("click",s=>{s.stopPropagation(),this.reset(!0)}),window.addEventListener("keydown",s=>this.onKeyDown(s)),this.container.addEventListener("pointerenter",()=>{this.isActive()&&this.updateCursorState()}),this.container.addEventListener("pointerleave",()=>{this.cursor&&this.isActive()&&this.cursor.setState("default")}),window.addEventListener("resize",()=>{this.scale>1&&(this.pan=this.clampPan(this.pan.x,this.pan.y,this.scale),this.applyTransform(!1))}))}isActive(){var t,e;return document.documentElement.classList.contains("is-project-image-mode")&&((t=this.screenEl)==null?void 0:t.classList.contains("is-image-mode"))&&((e=this.screenEl)==null?void 0:e.classList.contains("is-active"))}onWheel(t){if(!this.isActive())return;t.preventDefault();const e=t.ctrlKey?.015:.0022,i=-t.deltaY*e,n=this.scale*(1+i);this.zoomTo(n,t.clientX,t.clientY,!1)}onPointerDown(t){this.isActive()&&(t.target.closest(".project-screen__floating-back, .project-viewer__zoom-toolbar")||(this.isDragging=!0,this.pointerMoved=!1,this.dragStart={x:t.clientX,y:t.clientY},this.panStart={x:this.pan.x,y:this.pan.y},this.scale>1.05&&(document.documentElement.classList.add("is-zoomed-dragging"),this.updateCursorState(!0))))}onPointerMove(t){if(!this.isDragging||!this.isActive())return;const e=t.clientX-this.dragStart.x,i=t.clientY-this.dragStart.y;(Math.abs(e)>6||Math.abs(i)>6)&&(this.pointerMoved=!0),this.scale>1&&this.pointerMoved&&(this.pan=this.clampPan(this.panStart.x+e,this.panStart.y+i,this.scale),this.applyTransform(!1))}onPointerUp(t){if(this.isDragging)if(this.isDragging=!1,document.documentElement.classList.remove("is-zoomed-dragging"),!this.pointerMoved&&this.isActive()){if(t.target.closest(".project-screen__floating-back, .project-viewer__zoom-toolbar"))return;this.scale<=1.05?(this.zoomTo(2.25,t.clientX,t.clientY,!0),U.playClick()):(this.reset(!0),U.playClick())}else this.updateCursorState(!1)}onDoubleClick(t){this.isActive()&&(t.target.closest(".project-screen__floating-back, .project-viewer__zoom-toolbar")||(t.preventDefault(),this.scale<=1.05?this.zoomTo(2.5,t.clientX,t.clientY,!0):this.reset(!0),U.playClick()))}onTouchStart(t){if(this.isActive()&&t.touches.length===2){t.preventDefault();const e=t.touches[0],i=t.touches[1];this.initialPinchDistance=Math.hypot(i.clientX-e.clientX,i.clientY-e.clientY),this.initialPinchScale=this.scale,this.pinchCenter={x:(e.clientX+i.clientX)/2,y:(e.clientY+i.clientY)/2}}}onTouchMove(t){if(this.isActive()&&t.touches.length===2&&this.initialPinchDistance>0){t.preventDefault();const e=t.touches[0],i=t.touches[1],s=Math.hypot(i.clientX-e.clientX,i.clientY-e.clientY)/this.initialPinchDistance,a=this.initialPinchScale*s;this.zoomTo(a,this.pinchCenter.x,this.pinchCenter.y,!1)}}onTouchEnd(t){t.touches.length<2&&(this.initialPinchDistance=0)}onKeyDown(t){if(this.isActive()){if(t.key==="+"||t.key==="=")t.preventDefault(),this.zoomBy(.5);else if(t.key==="-"||t.key==="_")t.preventDefault(),this.zoomBy(-.5);else if(t.key==="0")t.preventDefault(),this.reset(!0);else if(this.scale>1){let i=this.pan.x,n=this.pan.y,s=!1;t.key==="ArrowLeft"?(i+=60,s=!0):t.key==="ArrowRight"?(i-=60,s=!0):t.key==="ArrowUp"?(n+=60,s=!0):t.key==="ArrowDown"&&(n-=60,s=!0),s&&(t.preventDefault(),this.pan=this.clampPan(i,n,this.scale),this.applyTransform(!0))}}}zoomBy(t){const e=this.scale+t;this.zoomTo(e,window.innerWidth/2,window.innerHeight/2,!0),U.playClick()}zoomTo(t,e=window.innerWidth/2,i=window.innerHeight/2,n=!0){const s=this.scale,a=Math.max(this.minScale,Math.min(this.maxScale,t));if(Math.abs(a-1)<.02){this.reset(n);return}const o=a/s,h=window.innerWidth/2+this.pan.x,l=window.innerHeight/2+this.pan.y,c=e-h,u=i-l,f=this.pan.x-c*(o-1),d=this.pan.y-u*(o-1);this.scale=a,this.pan=this.clampPan(f,d,this.scale),this.applyTransform(n),this.updateUI(),this.updateCursorState()}clampPan(t,e,i){if(i<=1.01)return{x:0,y:0};const n=window.innerWidth,s=window.innerHeight,a=this.imageEl.naturalWidth||n,o=this.imageEl.naturalHeight||s,h=a/o,l=n/s;let c,u;h>l?(c=n,u=n/h):(u=s,c=s*h);const f=c*i,d=u*i,_=f>n?(f-n)/2+60:20,g=d>s?(d-s)/2+60:20;return{x:Math.max(-_,Math.min(_,t)),y:Math.max(-g,Math.min(g,e))}}applyTransform(t=!1){this.imageEl&&(this.imageEl.style.transition=t?"transform 0.32s cubic-bezier(0.16, 1, 0.3, 1)":"none",this.imageEl.style.transform=`translate3d(${Math.round(this.pan.x)}px, ${Math.round(this.pan.y)}px, 0) scale(${this.scale.toFixed(3)})`)}reset(t=!1){this.scale=1,this.pan={x:0,y:0},this.applyTransform(t),this.updateUI(),this.isActive()?this.updateCursorState(!1):this.cursor&&this.cursor.setState("default")}updateUI(){if(this.valText){const t=Math.round(this.scale*100);this.valText.textContent=`${t}%`}}updateCursorState(t=!1){if(this.cursor){if(!this.isActive()){this.cursor.setState("default");return}t?this.cursor.setState("is-grabbing"):this.scale>1.05?this.cursor.setState("is-zoom-out"):this.cursor.setState("is-zoom-in")}}}class iv{constructor(t=[],e=null){var i;this.projects=t,this.cursor=e,this.siteMain=document.getElementById("site-main"),this.el=document.getElementById("project-viewer"),this.indexEl=document.getElementById("project-viewer-index"),this.titleEl=document.getElementById("project-viewer-title"),this.catEl=document.getElementById("project-viewer-cat"),this.externalLink=document.getElementById("project-viewer-external-link"),this.imageEl=document.getElementById("project-viewer-image"),this.frameEl=document.getElementById("project-viewer-frame"),this.loaderEl=(i=this.el)==null?void 0:i.querySelector(".project-viewer__loader"),this.shareBtn=document.getElementById("project-viewer-share"),this.fullscreenBtn=document.getElementById("project-viewer-fullscreen"),this.closeBtn=document.getElementById("project-viewer-close"),this.backBtns=document.querySelectorAll(".js-project-back"),this.currentProject=null,this.cleanupTimer=null,this.readyFallbackTimer=null,this.shareTimer=null,this.frameStylePollTimer=null,this.el&&(this.zoomManager=new ev({screenEl:this.el,cursor:this.cursor}),window.__imageZoomManager=this.zoomManager,this.initEvents())}initEvents(){var e,i,n,s;this.backBtns.forEach(a=>{a.addEventListener("click",o=>{o.preventDefault(),this.close()})}),window.addEventListener("keydown",a=>{a.key==="Escape"&&this.el.classList.contains("is-active")&&(document.fullscreenElement?document.exitFullscreen().catch(()=>{}):this.close()),a.key==="F11"&&setTimeout(()=>{this.syncFullscreenIcon()},150)}),(e=this.shareBtn)==null||e.addEventListener("click",()=>this.handleShare()),(i=this.fullscreenBtn)==null||i.addEventListener("click",()=>this.toggleFullscreen()),document.addEventListener("fullscreenchange",()=>{this.syncFullscreenIcon()}),(n=this.imageEl)==null||n.addEventListener("load",()=>{var a;this.el.classList.add("is-ready"),(a=this.zoomManager)==null||a.reset(!1)});const t=()=>{clearTimeout(this.readyFallbackTimer),this.injectFrameStyles(),this.frameEl&&this.frameEl.src&&!this.frameEl.src.endsWith("about:blank")&&this.el.classList.add("is-ready")};(s=this.frameEl)==null||s.addEventListener("load",t),this.frameEl&&(this.frameEl.onload=t),window.addEventListener("popstate",()=>{const a=new URLSearchParams(window.location.search).get("p");if(a){const o=this.projects.find(h=>h.id===a);o&&this.open(o,{updateUrl:!1})}else(this.el.classList.contains("is-active")||this.el.classList.contains("is-open"))&&this.close({updateUrl:!1})})}open(t,{updateUrl:e=!0}={}){var s,a,o,h,l;if(!t)return;if(U.playClick(),this.currentProject=t,clearTimeout(this.cleanupTimer),clearTimeout(this.readyFallbackTimer),this.el.classList.remove("is-ready"),this.indexEl&&(this.indexEl.textContent=t.index||"01"),this.titleEl&&(this.titleEl.textContent=t.title||""),this.catEl){const c=t.categoryLabel||((s=t.categories)!=null&&s.includes("sites")?"Сайт":(a=t.categories)!=null&&a.includes("billboards")?"Билборд":"Превью");this.catEl.textContent=c}const i=t.link&&t.link.endsWith(".html");if(i){if(document.documentElement.classList.remove("is-project-image-mode"),this.el.classList.remove("is-image-mode"),(o=this.zoomManager)==null||o.reset(!1),this.cursor&&this.cursor.setState("default"),this.externalLink&&(this.externalLink.style.display="inline-flex",this.externalLink.href=t.link),this.imageEl&&(this.imageEl.style.display="none",this.imageEl.removeAttribute("src")),this.frameEl){this.frameEl.removeAttribute("hidden"),this.frameEl.style.display="block",this.frameEl.src=t.link,clearInterval(this.frameStylePollTimer),this.injectFrameStyles();let c=0;this.frameStylePollTimer=setInterval(()=>{this.injectFrameStyles(),c++,c>50&&clearInterval(this.frameStylePollTimer)},30),this.readyFallbackTimer=setTimeout(()=>{this.el.classList.add("is-ready")},2500)}}else document.documentElement.classList.add("is-project-image-mode"),this.el.classList.add("is-image-mode"),(h=this.zoomManager)==null||h.reset(!1),this.externalLink&&(this.externalLink.style.display="none"),this.frameEl&&(this.frameEl.style.display="none",this.frameEl.removeAttribute("src")),this.imageEl&&(this.imageEl.removeAttribute("hidden"),this.imageEl.style.display="block",this.imageEl.src=t.link||t.image);document.documentElement.classList.add("is-project-open"),this.el.setAttribute("aria-hidden","false"),this.el.classList.add("is-active","is-open"),(l=this.siteMain)==null||l.classList.add("is-slid-out");const n=document.querySelector(".custom-cursor");n&&(n.classList.remove("is-drag","is-video"),i&&n.classList.remove("is-zoom-in","is-zoom-out","is-grabbing")),e&&t.id&&history.replaceState({p:t.id},"",`?p=${t.id}`)}close({updateUrl:t=!0}={}){var i,n;if(document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),!this.el.classList.contains("is-active")&&!this.el.classList.contains("is-open"))return;U.playClick(),document.documentElement.classList.remove("is-project-image-mode"),(i=this.zoomManager)==null||i.reset(!1),this.cursor&&this.cursor.setState("default"),document.documentElement.classList.remove("is-project-open"),this.el.classList.remove("is-active","is-open"),(n=this.siteMain)==null||n.classList.remove("is-slid-out"),this.el.setAttribute("aria-hidden","true"),this.currentProject=null;const e=document.querySelector(".custom-cursor");e&&e.classList.remove("is-drag","is-video","is-zoom-in","is-zoom-out","is-grabbing"),t&&history.replaceState({p:null},"",window.location.pathname),clearInterval(this.frameStylePollTimer),clearTimeout(this.cleanupTimer),clearTimeout(this.readyFallbackTimer),this.cleanupTimer=setTimeout(()=>{this.el.classList.remove("is-ready"),this.el.classList.remove("is-image-mode"),this.imageEl&&(this.imageEl.removeAttribute("src"),this.imageEl.hidden=!0),this.frameEl&&(this.frameEl.removeAttribute("src"),this.frameEl.hidden=!0)},800)}injectFrameStyles(){var t;try{if(!this.frameEl)return;const e=this.frameEl.contentDocument||((t=this.frameEl.contentWindow)==null?void 0:t.document);if(!e||e.getElementById("klourk-hide-scrollbars"))return;const i=e.createElement("style");i.id="klourk-hide-scrollbars",i.textContent=`
        html::-webkit-scrollbar,
        body::-webkit-scrollbar,
        *::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
        }
        html, body, * {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
          scrollbar-gutter: auto !important;
        }
        /* Offset header navbar to avoid overlapping floating back button */
        .nav {
          padding-left: 125px !important;
        }
      `;const n=e.head||e.documentElement||e.body;n&&n.appendChild(i)}catch{}}async handleShare(){var n,s;if(!this.currentProject)return;const t=`${window.location.origin}${window.location.pathname}?p=${this.currentProject.id}`,e=(n=this.shareBtn)==null?void 0:n.querySelector(".project-viewer__share-label");let i=!1;try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(t),i=!0;else{const a=document.createElement("textarea");a.value=t,a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select(),document.execCommand("copy"),a.remove(),i=!0}}catch{i=!1}e&&(e.textContent=i?"Скопировано!":"Ошибка"),(s=this.shareBtn)==null||s.classList.toggle("is-copied",i),clearTimeout(this.shareTimer),this.shareTimer=setTimeout(()=>{var a;e&&(e.textContent="Поделиться"),(a=this.shareBtn)==null||a.classList.remove("is-copied")},1600)}async toggleFullscreen(){U.playClick();try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch(t){console.warn("Fullscreen toggle failed:",t)}finally{this.syncFullscreenIcon()}}syncFullscreenIcon(){if(!this.fullscreenBtn)return;const t=!!document.fullscreenElement;this.fullscreenBtn.setAttribute("title",t?"Свернуть":"Во весь экран"),this.fullscreenBtn.setAttribute("aria-label",t?"Свернуть":"Во весь экран");const e=this.fullscreenBtn.querySelector("svg");e&&(t?e.innerHTML='<path d="M4 14h6m0 0v6m0-6L3 21m17-7h-6m0 0v6m0-6l7 7M10 4v6m0 0H4m6 0L3 3m14 7h6m-6 0V4m0 6l7-7"/>':e.innerHTML='<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>')}}class nv{constructor(){this.canvas=document.createElement("canvas"),this.canvas.className="bg-character-canvas",this.ctx=this.canvas.getContext("2d"),this.canvas.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 25;
      cursor: default;
    `,document.body.appendChild(this.canvas),this.dpr=Math.min(window.devicePixelRatio||1,2),this.width=window.innerWidth,this.height=window.innerHeight,this.floorY=this.height-55,this.pageBaseY=this.floorY,this.baseY=this.floorY,this.x=120,this.y=0,this.vy=0,this.vx=0,this.gravity=.4,this.attachedObstacle=null,this.baseSpeed=2.1,this.currentSpeed=this.baseSpeed,this.runCycle=0,this.facing=1,this.tilt=0,this.targetTilt=0,this.surfaceAngle=0,this.animsList=["standing","running","lying","jumping"],this.currentAnim="running",this.state="running",this.userIdleThreshold=300,this.userIdleTime=0,this.animDuration=20+Math.random()*100,this.animTimer=0,this.animSubTimer=0,this.aiState="floor_idle",this.aiTimer=0,this.aiDecisionInterval=2.4+Math.random()*2.2,this.targetCardId=null,this.navTargetX=null,this.smartJumpData=null,this.cardsVisitedInSequence=0,this.cardExploreTimer=0,this.cardExploreSubstate="survey",this.patrolTargetX=null,this.lettersExploreTimer=0,this.lettersExploreSubstate="survey",this.lettersPatrolTargetX=null,this.pillExploreTimer=0,this.pillExploreSubstate="survey",this.pillPatrolTargetX=null,this.floorSubstate="running_free",this.floorActionTimer=0,this.floorActionDuration=2.4,this.floorStrollTargetX=null,this.floorRunTargetX=null,this.floorRunTimer=0,this.floorRunDuration=4+Math.random()*2.5,this.floorHopTimer=0,this.isSkidding=!1,this.microActionDuration=2.4,this.slideVx=0,this.slideCardVx=0,this.stickCollisionCooldown=0,this.ladders=[],this.currentLadder=null,this.buildTimer=0,this.deployTimer=0,this.climbProgress=0,this.climbTimer=0,this.ladderPerchTimer=0,this.lastStrikeTime=0,this.lastClimbRung=0,this.lastDeployRung=0,this.isWaving=!1,this.attachedStick=null,this.stickGrabCooldown=0,this.swingTimer=0,this.swingAngle=0,this.idleBlinkTimer=0,this.isBlinking=!1,this.lastStepPhase=0,this.sleepBubbles=[],this.intendedTargetCardId=null,this.retryJumpCount=0,this.maxRetries=3,this.recoveryTimer=0,this.lastFailedTakeoffX=null,this.jumpArcBonusExtra=0,this.stuckTimer=0,this.lastTrackedX=this.x,this.crouchSafetyTimer=0,this.isDragging=!1,this.dragOffset={x:0,y:0},this.dragStartPos={x:0,y:0},this.dragHistory=[],this.dragDistance=0,this.scaleX=1,this.scaleY=1,this.targetScaleX=1,this.targetScaleY=1,this.rotation=0,this.targetRotation=0,this.particles=[],this.mouse={x:-999,y:-999},this.isHovered=!1,this.isFleeing=!1,this.fleeTimer=0,this.dodgeCooldown=0,this.prevMouseX=-999,this.prevMouseY=-999,this.prevMouseTime=0,this.mouseSpeed=0,this.initAIController(),this.debug=window.__character_ai,window.__jumpingCharacter=this,window.__character=this,this.initEvents(),this.onResize(),this.loop()}get attachedCard(){return this.attachedObstacle&&this.attachedObstacle.type==="card"?{id:this.attachedObstacle.cardId,ledge:this.attachedObstacle.ledge}:null}set attachedCard(t){var e;t?this.attachedObstacle={id:`card-${t.id}-${t.ledge||"top"}`,cardId:t.id,type:"card",ledge:t.ledge||"top"}:((e=this.attachedObstacle)==null?void 0:e.type)==="card"&&(this.attachedObstacle=null)}initAIController(){window.__character_ai={character:this,getState:()=>({state:this.state,aiState:this.aiState,attachedObstacle:this.attachedObstacle,attachedCard:this.attachedCard,currentAnim:this.currentAnim,x:this.x,y:this.y,baseY:this.baseY,vx:this.vx,vy:this.vy,facing:this.facing,intendedTargetCardId:this.intendedTargetCardId,retryJumpCount:this.retryJumpCount,stuckTimer:this.stuckTimer,userIdleTime:this.userIdleTime,userIdleThreshold:this.userIdleThreshold,isSleeping:this.state==="lying"}),getUserIdleTime:()=>this.userIdleTime,setUserIdleTime:t=>{this.userIdleTime=t,this.userIdleTime>=this.userIdleThreshold?this.attachedObstacle&&this.attachedObstacle.type==="card"?(this.cardExploreSubstate="rest",this.setAnimation("lying")):this.attachedObstacle&&this.attachedObstacle.type==="letters"?(this.lettersExploreSubstate="rest",this.setAnimation("lying")):this.attachedObstacle&&this.attachedObstacle.type==="pill"?(this.pillExploreSubstate="rest",this.setAnimation("lying")):this.setAnimation("lying"):this.state==="lying"&&this.wakeUp()},wakeUp:()=>this.wakeUp(),isSleeping:()=>this.state==="lying",triggerAction:(t,e=4)=>(this.attachedObstacle&&this.attachedObstacle.type==="card"?(this.cardExploreSubstate=t,this.cardExploreTimer=0,this.microActionDuration=e,this.state=t):this.attachedObstacle&&this.attachedObstacle.type==="pill"?(this.pillExploreSubstate=t,this.pillExploreTimer=0,this.microActionDuration=e,this.state=t):this.attachedObstacle&&this.attachedObstacle.type==="letters"?(this.lettersExploreSubstate=t,this.lettersExploreTimer=0,this.microActionDuration=e,this.state=t):(this.floorSubstate=t,this.floorActionTimer=0,this.floorActionDuration=e,this.state=t==="looking_up"?"standing":t),!0),getAction:()=>({state:this.state,cardSubstate:this.cardExploreSubstate,pillSubstate:this.pillExploreSubstate,lettersSubstate:this.lettersExploreSubstate,floorSubstate:this.floorSubstate}),placeOnLetters:(t=0)=>{var n,s,a;const e=this.getTitleLettersCollision();if(!e||!e.letters.length)return!1;const i=typeof t=="number"&&t>=0&&t<e.letters.length?e.letters[t]:e.letters[0];return this.attachedObstacle={id:"title-letters",type:"letters",name:e.name},this.x=(i.left+i.right)/2,this.baseY=i.top,this.pageBaseY=this.baseY+(((a=(s=(n=window.__app)==null?void 0:n.gallery)==null?void 0:s.scroll)==null?void 0:a.current)||0),this.y=0,this.vy=0,this.vx=0,this.surfaceAngle=0,this.aiState="on_letters",this.lettersExploreSubstate="survey",this.lettersExploreTimer=0,this.state="standing",this.currentAnim="standing",this.updateCanvasZIndex(),!0},jumpToLetters:(t=0)=>this.executeJumpToLetters(t),jumpFromLettersToCard:t=>this.executeJumpFromLettersToCard(t),jumpFromLettersToPill:()=>this.executeJumpFromLettersToPill(),getTitleLettersCollision:()=>this.getTitleLettersCollision(),placeOnPill:(t=0)=>{var a,o,h;const e=this.getFilterPillCollision();if(!e)return!1;const i=(e.left+e.right)/2,n=Math.max(e.left+5,Math.min(e.right-5,i+t)),s=e.getSurfaceAtScreenX(n);return this.attachedObstacle={id:"filter-pill",type:"pill",name:e.name},this.x=n,this.baseY=s.y,this.pageBaseY=this.baseY+(((h=(o=(a=window.__app)==null?void 0:a.gallery)==null?void 0:o.scroll)==null?void 0:h.current)||0),this.y=0,this.vy=0,this.vx=0,this.surfaceAngle=s.angle,this.aiState="on_pill",this.pillExploreSubstate="survey",this.pillExploreTimer=0,this.state="standing",this.currentAnim="standing",this.slideVx=0,this.updateCanvasZIndex(),!0},jumpToPill:()=>this.executeJumpToPill(),jumpFromPillToCard:(t=0)=>this.executeJumpFromPillToCard(t),getFilterPillCollision:()=>this.getFilterPillCollision(),placeOnCard:(t=0)=>{var n,s;const e=((s=(n=window.__app)==null?void 0:n.gallery)==null?void 0:s.getCardScreenRects())||[],i=typeof t=="number"&&t<e.length?e[t]:e.find(a=>a.id===t);if(i){this.attachedObstacle={id:`card-${i.id}-top`,cardId:i.id,type:"card",relX:0,cardRef:i.cardRef};const a=i.getLedgePoint(0);return this.x=a.x,this.baseY=a.y,this.y=0,this.vy=0,this.vx=0,this.surfaceAngle=i.topLedge.angle,this.aiState="on_card",this.cardExploreSubstate="survey",this.cardExploreTimer=0,this.state="standing",this.currentAnim="standing",!0}return!1},placeOnCardRelX:(t=0,e=0)=>{var s,a;const i=((a=(s=window.__app)==null?void 0:s.gallery)==null?void 0:a.getCardScreenRects())||[],n=typeof t=="number"&&t<i.length?i[t]:i.find(o=>o.id===t);if(n){this.attachedObstacle={id:`card-${n.id}-top`,cardId:n.id,type:"card",relX:e,cardRef:n.cardRef};const o=n.getLedgePoint(e);return this.x=o.x,this.baseY=o.y,this.y=0,this.vy=0,this.vx=0,this.surfaceAngle=o.surfaceAngle||n.topLedge.angle,this.aiState="on_card",this.cardExploreSubstate="survey",this.cardExploreTimer=0,this.state="standing",this.currentAnim="standing",this.slideCardVx=0,!0}return!1},jumpToCard:t=>{var n,s;const e=((s=(n=window.__app)==null?void 0:n.gallery)==null?void 0:s.getCardScreenRects())||[],i=t?e.find(a=>a.id===t):e[0];return i?(this.targetCardId=i.id,this.executeJumpToCard(i.id),!0):!1},jumpToAdjacentCard:t=>{var s,a;if(!this.attachedObstacle||this.attachedObstacle.type!=="card")return!1;const e=((a=(s=window.__app)==null?void 0:s.gallery)==null?void 0:a.getCardScreenRects())||[],i=e.find(o=>o.id===this.attachedObstacle.cardId);if(!i)return!1;const n=this.findAdjacentCards(i,e);if(n.length>0){const o=t&&n.find(h=>h.id===t)||n[0];return this.targetCardId=o.id,this.executeCardToCardJump(o.id),!0}return!1},simulateStickCollision:(t=!0)=>{var e,i;if(t){const s=(((i=(e=window.__app)==null?void 0:e.gallery)==null?void 0:i.getCardScreenRects())||[]).find(a=>{var o;return a.id===((o=this.smartJumpData)==null?void 0:o.targetCardId)||a.id===this.targetCardId});s&&(this.x=s.left-45)}this.handleJumpCollisionWithObstacle("stick",-this.facing,0)},jumpFromCardToFloor:(t=null)=>this.executeJumpFromCardToFloor(t),jumpFromPillToFloor:(t=null)=>this.executeJumpFromPillToFloor(t),jumpFromLettersToFloor:(t=null)=>this.executeJumpFromLettersToFloor(t),startFloorRunning:(t=null)=>(this.startFloorRunning(t),!0),isFloorRunning:()=>this.floorSubstate==="running_free",buildLadder:(t=null,e=null,i=null)=>this.buildLadder(t,e,i),getLadders:()=>this.ladders,getCurrentLadder:()=>this.currentLadder,jumpToStick:(t=null)=>this.jumpToStick(t),isSwingingOnStick:()=>!!this.attachedStick,getAttachedStick:()=>this.attachedStick,dismountFromStick:()=>{this.dismountFromStick()},thinkNow:()=>{this.aiTimer=999,this.cardExploreTimer=999,this.lettersExploreTimer=999}}}isPointerOverCharacter(t,e){const i=this.baseY+this.y-22;if(i<-50||i>this.height+50||this.x<-40||this.x>this.width+40)return!1;const n=Math.abs(t-this.x),s=Math.abs(e-i),a=this.currentAnim==="lying"||this.state==="lying",o=a?38:this.isFleeing?16:20,h=a?24:this.isFleeing?28:36;return n<o&&s<h}initEvents(){window.addEventListener("resize",()=>this.onResize());const t=(n,s,a)=>{var o,h,l,c,u,f,d;if(this.isPointerOverCharacter(n,s)){this.isDragging=!0,this.isFleeing=!1,this.fleeTimer=0,this.dragStartPos={x:n,y:s},this.dragDistance=0;const _=this.baseY+this.y;this.dragOffset.x=n-this.x,this.dragOffset.y=s-_,this.dragHistory=[{x:n,y:s,time:performance.now()}],this.attachedObstacle=null,this.attachedStick=null,this.currentLadder=null,this.ladders=[],this.smartJumpData=null,this.intendedTargetCardId=null,this.retryJumpCount=0,this.jumpArcBonusExtra=0,this.aiState="grabbed",this.state="grabbed",this.currentAnim="standing",this.runCycle=0,this.targetTilt=0,this.rotation=0,this.targetRotation=0,this.vy=0,this.vx=0,this.baseY=_,this.y=0;const g=((l=(h=(o=window.__app)==null?void 0:o.gallery)==null?void 0:h.scroll)==null?void 0:l.current)||0;this.pageBaseY=this.baseY+g,this.canvas.style.zIndex="65",this.canvas.style.pointerEvents="auto",this.canvas.style.cursor="grabbing",document.body.style.userSelect="none",document.body.style.cursor="grabbing",(c=U==null?void 0:U.playHop)==null||c.call(U,.18),(u=a==null?void 0:a.preventDefault)==null||u.call(a),(f=a==null?void 0:a.stopPropagation)==null||f.call(a)}else{const _=this.baseY+this.y-20;if(Math.hypot(n-this.x,s-_)<75&&!this.isDragging&&this.state!=="in_jump"&&this.state!=="falling"&&this.aiState!=="climbing_ladder"&&this.aiState!=="pocket_ladder_deploy"&&this.aiState!=="sitting_ladder_top"){const p=this.x-n>=0?1:-1;this.facing=p,this.vx=p*5.4,this.vy=-3.8,this.setFloorCoordinateSpace(),this.state="in_jump",this.targetScaleY=.75,this.targetScaleX=1.35,this.spawnLandingDust(),(d=U==null?void 0:U.playHop)==null||d.call(U,.12)}}},e=(n,s)=>{var a,o,h;if(this.mouse.x=n,this.mouse.y=s,this.isDragging){const l=n-this.dragStartPos.x,c=s-this.dragStartPos.y;this.dragDistance+=Math.hypot(l,c);const u=performance.now();this.dragHistory.push({x:n,y:s,time:u}),this.dragHistory.length>8&&this.dragHistory.shift();const f=n-this.dragOffset.x,d=s-this.dragOffset.y,_=f-this.x;this.vx=_*.4,Math.abs(_)>.5&&(this.facing=_>0?1:-1),this.x=Math.max(25,Math.min(this.width-25,f)),this.baseY=Math.max(30,Math.min(this.height+60,d)),this.y=0;const g=((h=(o=(a=window.__app)==null?void 0:a.gallery)==null?void 0:o.scroll)==null?void 0:h.current)||0;this.pageBaseY=this.baseY+g}else this.isHovered=this.isPointerOverCharacter(n,s),this.canvas.style.cursor=this.isHovered?"grab":"default",this.canvas.style.pointerEvents=this.isHovered?"auto":"none"},i=()=>{var p,m,S,v,x,E;if(!this.isDragging)return;this.isDragging=!1,document.body.style.userSelect="",document.body.style.cursor="",this.canvas.style.cursor=this.isHovered?"grab":"default",this.canvas.style.pointerEvents=this.isHovered?"auto":"none";const n=performance.now(),s=this.dragHistory.filter(y=>n-y.time<120);let a=0,o=0;if(s.length>=2){const y=s[0],T=s[s.length-1],R=Math.max(16,T.time-y.time);a=(T.x-y.x)/R*16,o=(T.y-y.y)/R*16}a=Math.max(-14,Math.min(14,a)),o=Math.max(-14,Math.min(14,o));const h=this.x,l=this.baseY,c=((S=(m=(p=window.__app)==null?void 0:p.gallery)==null?void 0:m.scroll)==null?void 0:S.current)||0,u=this.getTitleLettersCollision();if(u&&h>=u.left-20&&h<=u.right+20){const y=u.getLedgeYAtScreenX(h);if(l>=y-55&&l<=u.bottom+25&&o>-5){this.attachedObstacle={id:"title-letters",type:"letters",name:u.name},this.x=h,this.baseY=y,this.pageBaseY=this.baseY+c,this.y=0,this.vy=0,this.vx=0,this.surfaceAngle=0,this.aiState="on_letters",this.lettersExploreSubstate="survey",this.lettersExploreTimer=0,this.aiTimer=0,this.aiDecisionInterval=8+Math.random()*4,this.currentAnim="standing",this.state="landing_jump",this.targetScaleY=.65,this.targetScaleX=1.4,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),setTimeout(()=>{this.state==="landing_jump"&&(this.targetScaleY=1,this.targetScaleX=1,this.state="standing")},140);return}}const f=this.getFilterPillCollision();if(f&&h>=f.left-15&&h<=f.right+15){const y=f.getSurfaceAtScreenX(h);if(l>=y.y-50&&l<=f.bottom+25&&o>-5){this.attachedObstacle={id:"filter-pill",type:"pill",name:f.name},this.x=h,this.baseY=y.y,this.pageBaseY=this.baseY+c,this.y=0,this.vy=0,this.vx=0,this.surfaceAngle=y.angle,this.aiState="on_pill",this.pillExploreSubstate="survey",this.pillExploreTimer=0,this.aiTimer=0,this.aiDecisionInterval=8+Math.random()*4,this.slideVx=0,this.currentAnim="standing",this.state="landing_jump",this.targetScaleY=.65,this.targetScaleX=1.4,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),setTimeout(()=>{this.state==="landing_jump"&&(this.targetScaleY=1,this.targetScaleX=1,this.state="standing")},140);return}}const d=((x=(v=window.__app)==null?void 0:v.gallery)==null?void 0:x.getCardScreenRects())||[];let _=null,g=99999;for(const y of d){if(!((E=y.cardRef)!=null&&E.isVisible))continue;const T=y.getLedgeYAtScreenX(h);if(h>=y.left-25&&h<=y.right+25&&l>=T-65&&l<=y.bottom+20){const R=Math.abs(l-T);R<g&&(g=R,_=y)}}if(_&&o>-5){const y=_.screenXToLocalX(h);this.attachedObstacle={id:`card-${_.id}-top`,cardId:_.id,type:"card",ledge:"top",relX:y};const T=_.getLedgePoint(y);this.x=T.x,this.baseY=T.y,this.pageBaseY=this.baseY+c,this.y=0,this.vy=0,this.vx=0,this.surfaceAngle=_.topLedge.angle,this.aiState="on_card",this.cardExploreSubstate="survey",this.cardExploreTimer=0,this.aiTimer=0,this.aiDecisionInterval=8+Math.random()*4,this.currentAnim="standing",this.state="landing_jump",this.targetScaleY=.65,this.targetScaleX=1.4,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),setTimeout(()=>{this.state==="landing_jump"&&(this.targetScaleY=1,this.targetScaleX=1,this.state="standing")},140);return}if(l>=this.floorY-25&&o>=-2){this.attachedObstacle=null,this.baseY=l,this.pageBaseY=l+c,this.y=0,this.vy=0,this.vx=0,this.surfaceAngle=0,this.aiState="floor_idle",this.aiTimer=0,this.aiDecisionInterval=8+Math.random()*4,this.currentAnim="standing",this.state="landing_jump",this.targetScaleY=.65,this.targetScaleX=1.4,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),setTimeout(()=>{this.state==="landing_jump"&&(this.targetScaleY=1,this.targetScaleX=1,this.state="standing")},140);return}this.attachedObstacle=null,this.baseY=l,this.pageBaseY=l+c,this.y=0,this.vx=a,this.vy=o,this.surfaceAngle=0,this.state="falling",this.currentAnim="standing",this.aiTimer=0,this.aiDecisionInterval=8+Math.random()*4,this.updateCanvasZIndex()};window.addEventListener("mousedown",n=>{this.resetUserActivity(),t(n.clientX,n.clientY,n)}),window.addEventListener("mousemove",n=>{this.resetUserActivity(),e(n.clientX,n.clientY)}),window.addEventListener("mouseup",i),window.addEventListener("blur",i),window.addEventListener("touchstart",n=>{this.resetUserActivity(),n.touches.length>0&&t(n.touches[0].clientX,n.touches[0].clientY,n)},{passive:!1}),window.addEventListener("touchmove",n=>{this.resetUserActivity(),n.touches.length>0&&this.isDragging&&(e(n.touches[0].clientX,n.touches[0].clientY),n.preventDefault())},{passive:!1}),window.addEventListener("touchend",i),window.addEventListener("keydown",n=>{if(this.resetUserActivity(),n.key==="l"||n.key==="L"||n.key==="д"||n.key==="Д"){const s=this.mouse&&this.mouse.x>0?this.mouse.x:this.x+this.facing*40,a=this.mouse&&this.mouse.y>0?this.mouse.y:null;this.buildLadder(s,a)}else(n.key==="s"||n.key==="S"||n.key==="ы"||n.key==="Ы"||n.key==="c"||n.key==="C"||n.key==="с"||n.key==="С")&&this.jumpToStick()}),window.addEventListener("dblclick",n=>{var o,h;this.resetUserActivity();const a=(((h=(o=window.__app)==null?void 0:o.gallery)==null?void 0:h.getSticksScreenSegments())||[]).find(l=>Math.hypot(n.clientX-l.cx,n.clientY-l.cy)<Math.max(40,l.length*.65));a?this.jumpToStick(a.stick):this.buildLadder(n.clientX,n.clientY)}),window.addEventListener("wheel",()=>this.resetUserActivity(),{passive:!0}),window.addEventListener("scroll",()=>this.resetUserActivity(),{passive:!0})}resetUserActivity(){this.userIdleTime=0,(this.state==="lying"||this.currentAnim==="lying"||this.cardExploreSubstate==="rest"||this.lettersExploreSubstate==="rest"||this.pillExploreSubstate==="rest")&&this.wakeUp()}wakeUp(){var t;(this.state==="lying"||this.currentAnim==="lying"||this.cardExploreSubstate==="rest"||this.lettersExploreSubstate==="rest"||this.pillExploreSubstate==="rest")&&(this.sleepBubbles=[],this.state="standing",this.currentAnim="standing",this.targetScaleY=1.25,this.targetScaleX=.85,this.spawnLandingDust(),(t=U==null?void 0:U.playHop)==null||t.call(U),this.attachedObstacle&&this.attachedObstacle.type==="card"?(this.cardExploreSubstate="survey",this.cardExploreTimer=0):this.attachedObstacle&&this.attachedObstacle.type==="letters"?(this.lettersExploreSubstate="survey",this.lettersExploreTimer=0):this.attachedObstacle&&this.attachedObstacle.type==="pill"?(this.pillExploreSubstate="survey",this.pillExploreTimer=0):(this.aiState="floor_idle",this.aiTimer=0),setTimeout(()=>{this.state==="standing"&&(this.targetScaleY=1,this.targetScaleX=1)},200))}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.floorY=this.height-55,this.canvas.width=this.width*this.dpr,this.canvas.height=this.height*this.dpr,this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0),this._cachedTitleCollision=null,this._cachedFilterPillCollision=null,this.attachedObstacle||(this.baseY=this.floorY,this.x=Math.max(40,Math.min(this.width-40,this.x)))}onScroll(t){Math.abs(t)>.05&&this.resetUserActivity(),!this.isDragging&&(this.scrollVelocity=t,this.isScrolling=Math.abs(t)>.3,clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout(()=>{this.isScrolling=!1,this.scrollVelocity=0},150))}switchNextAnimation(){const i=(this.userIdleTime>=this.userIdleThreshold?this.animsList:this.animsList.filter(s=>s!=="lying")).filter(s=>s!==this.currentAnim),n=i.length>0?i[Math.floor(Math.random()*i.length)]:"standing";this.setAnimation(n)}setAnimation(t){t==="lying"&&this.userIdleTime<this.userIdleThreshold&&(t="standing"),this.currentAnim=t,this.animTimer=0,this.animDuration=20+Math.random()*100,this.animSubTimer=0,this.targetRotation=0,this.rotation=0,this.targetScaleX=1,this.targetScaleY=1,this.restoreCurrentAnimState()}restoreCurrentAnimState(){this.currentAnim==="running"?(this.state="running",this.runDuration=4+Math.random()*4):this.currentAnim==="standing"?this.state="standing":this.currentAnim==="jumping"?(this.state="standing",this.aiTimer=999,this.cardExploreTimer=999):this.currentAnim==="lying"&&(this.state="lying",this.aiState="floor_idle",this.navTargetX=null,this.vx=0,this.spawnLandingDust())}triggerTurn(){this.isDragging||(this.facing*=-1,this.state="running",this.animSubTimer=0,this.targetTilt=this.facing*.16,this.spawnLandingDust())}setFloorCoordinateSpace(){var i,n,s;const t=((s=(n=(i=window.__app)==null?void 0:i.gallery)==null?void 0:n.scroll)==null?void 0:s.current)||0,e=this.baseY+this.y;(this.pageBaseY===void 0||this.pageBaseY===null)&&(this.pageBaseY=e+t),this.baseY=this.pageBaseY-t,this.y=e-this.baseY,this.attachedObstacle=null}detachFromObstacle(t=1){this.attachedObstacle&&(this.setFloorCoordinateSpace(),this.state="falling",this.vy=t,this.updateCanvasZIndex())}detachToFloor(){var e,i,n;const t=((n=(i=(e=window.__app)==null?void 0:e.gallery)==null?void 0:i.scroll)==null?void 0:n.current)||0;this.attachedObstacle=null,this.attachedStick=null,this.smartJumpData=null,this.baseY=this.floorY,this.pageBaseY=this.floorY+t,this.y=0,this.vy=0,this.vx=0,this.state="standing",this.aiState="floor_idle",this.aiTimer=0,this.targetScaleX=1,this.targetScaleY=1,this.targetTilt=0,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex()}triggerSingleJump(t=!1){if(this.isDragging||this.state==="crouch"||this.state==="in_jump")return;this.state="crouch",this.targetScaleY=.7,this.targetScaleX=1.34;const e=t?-13.2:-9.5-Math.random()*2.2,i=t||Math.random()<.35,n=this.state==="running"?this.facing*Math.min(3,this.currentSpeed*.7):0;setTimeout(()=>{this.state==="crouch"&&(this.setFloorCoordinateSpace(),this.state="in_jump",this.vy=e,this.targetScaleY=1.38,this.targetScaleX=.76,U==null||U.playHop(),this.updateCanvasZIndex(),this.vx=n+(Math.random()-.45)*1.2,i&&(this.targetRotation=this.rotation+this.facing*Math.PI*2))},130)}spawnFootstepDust(){const t=-this.facing;this.particles.push({x:this.x+t*6,y:this.baseY-1,vx:t*(1.2+Math.random()*1.2),vy:-.3-Math.random()*.5,radius:1.8+Math.random()*1.2,alpha:.35,decay:.04})}spawnSkidDust(){const t=-this.facing;for(let e=0;e<4;e++)this.particles.push({x:this.x+t*(4+e*3),y:this.baseY-1,vx:t*(1.8+Math.random()*1.5),vy:-.4-Math.random()*.8,radius:2.2+Math.random()*1.5,alpha:.45,decay:.035})}spawnLandingDust(){for(let t=0;t<4;t++){const e=t%2===0?-1:1;this.particles.push({x:this.x+e*(4+Math.random()*5),y:this.baseY-1,vx:e*(1.2+Math.random()*1.4),vy:-.3-Math.random()*.6,radius:2+Math.random()*1.5,alpha:.35,decay:.035})}}updateCanvasZIndex(){if(this.isDragging){this.canvas.style.zIndex="65";return}if(this.attachedStick||this.currentLadder||this.aiState==="climbing_ladder"||this.aiState==="pocket_ladder_deploy"||this.aiState==="building_ladder"||this.aiState==="sitting_ladder_top"){this.canvas.style.zIndex="35";return}if(this.state==="in_jump"||this.state==="falling"){this.canvas.style.zIndex="65";return}if(!this.attachedObstacle){this.canvas.style.zIndex="25";return}this.attachedObstacle.type==="card"?this.canvas.style.zIndex="25":this.canvas.style.zIndex="65"}getTitleLettersCollision(){if(this._cachedTitleCollision)return this._cachedTitleCollision;const t=document.querySelector(".project-filters__title");if(!t)return null;const e=t.getBoundingClientRect();if(e.width===0||e.height===0)return null;const i=Array.from(t.querySelectorAll(".title-char"));if(i.length===0)return null;this._measureCanvas||(this._measureCanvas=document.createElement("canvas"),this._measureCtx=this._measureCanvas.getContext("2d"));const n=window.getComputedStyle(t);this._measureCtx.font=`${n.fontWeight} ${n.fontSize} ${n.fontFamily}`;const a=this._measureCtx.measureText(t.textContent).fontBoundingBoxDescent||parseFloat(n.fontSize)*.25,o=e.bottom-a,h=i.map((d,_)=>{const g=d.getBoundingClientRect(),p=d.textContent,S=this._measureCtx.measureText(p).actualBoundingBoxAscent||parseFloat(n.fontSize)*.52,v=o-S;return{index:_,char:p,left:g.left,right:g.right,width:g.width,top:v,bottom:g.bottom,baseline:o}}),l=h[0],c=h[h.length-1],u=d=>{const g=h.find(p=>d>=p.left-3&&d<=p.right+3);return g?g.top:h.length>=10&&d>=h[8].right&&d<=h[9].left?(h[8].top+h[9].top)/2:d<l.left?l.top:c.top},f={id:"title-letters",type:"letters",name:'Заголовок "Портфолио проектов"',left:l.left,right:c.right,top:Math.min(...h.map(d=>d.top)),bottom:e.bottom,letters:h,getLedgeYAtScreenX:u};return this._cachedTitleCollision=f,f}getFilterPillCollision(){if(this._cachedFilterPillCollision)return this._cachedFilterPillCollision;const t=document.querySelector(".project-filters__inner");if(!t)return null;const e=t.getBoundingClientRect();if(e.width===0||e.height===0)return null;const i=Math.min(e.height/2,e.width/2),n=e.left+i,s=e.right-i,a=e.top+i,o=l=>{if(l<n){const c=n-l;if(c>=i)return{y:a,angle:-Math.PI/2,isCorner:!0,cornerSide:-1,slopeFactor:1,isOff:!0};const u=Math.sqrt(Math.max(0,i*i-c*c)),f=a-u,d=-Math.atan2(c,Math.max(.01,u)),_=c/i;return{y:f,angle:d,isCorner:!0,cornerSide:-1,slopeFactor:_,isOff:!1}}if(l>s){const c=l-s;if(c>=i)return{y:a,angle:Math.PI/2,isCorner:!0,cornerSide:1,slopeFactor:1,isOff:!0};const u=Math.sqrt(Math.max(0,i*i-c*c)),f=a-u,d=Math.atan2(c,Math.max(.01,u)),_=c/i;return{y:f,angle:d,isCorner:!0,cornerSide:1,slopeFactor:_,isOff:!1}}return{y:e.top,angle:0,isCorner:!1,cornerSide:0,slopeFactor:0,isOff:!1}},h={id:"filter-pill",type:"pill",name:"Панель фильтров",left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.width,height:e.height,radius:i,leftCornerCenterX:n,rightCornerCenterX:s,getSurfaceAtScreenX:o,getLedgeYAtScreenX:l=>o(l).y};return this._cachedFilterPillCollision=h,h}getSceneObstacles(){var s,a;const e=(((a=(s=window.__app)==null?void 0:s.gallery)==null?void 0:a.getCardScreenRects())||[]).map(o=>({id:`card-${o.id}-top`,cardId:o.id,type:"card",ledge:"top",name:`Карточка ${o.title} (верх)`,left:o.left,right:o.right,top:o.top,bottom:o.bottom,isPlatform:!0,isCeiling:!1,isWall:!1,cardRef:o.cardRef,cardData:o})),i=this.getTitleLettersCollision();i&&e.push({id:"title-letters",type:"letters",name:i.name,left:i.left,right:i.right,top:i.top,bottom:i.bottom,isPlatform:!0,titleData:i});const n=this.getFilterPillCollision();return n&&e.push({id:"filter-pill",type:"pill",name:n.name,left:n.left,right:n.right,top:n.top,bottom:n.bottom,isPlatform:!0,pillData:n}),e}checkSticksCollision(t=null,e=null){var f,d,_,g,p,m;const i=(f=window.__app)==null?void 0:f.gallery;if(!i||!i.getSticksScreenSegments)return;const n=i.getSticksScreenSegments();if(!n||n.length===0)return;const s=this.x,a=this.baseY+this.y;if(a<-70||a>this.height+70||s<-60||s>this.width+60)return;const h=t!==null?t:this.prevX!==void 0?this.prevX:s,l=e!==null?e:this.prevFeetY!==void 0?this.prevFeetY:a,u=this.state==="in_jump"||this.state==="falling"?5:1;for(let S=0;S<n.length;S++){const v=n[S];if(!v||!v.stick||v.depthZ!==void 0&&Math.abs(v.depthZ)>90)continue;const x=v.x1,E=v.y1,y=v.x2,T=v.y2,R=y-x,M=T-E,b=R*R+M*M,I=v.radius||2.5;let L=!1,B=1/0,P=0,F=0,V=null,q=s,k=a;for(let N=0;N<=u;N++){const X=u>0?N/u:1,K=h+(s-h)*X,$=l+(a-l)*X,G=[{x:K,y:$-6,r:15},{x:K,y:$-20,r:18},{x:K,y:$-36,r:15}];for(let Z=0;Z<G.length;Z++){const tt=G[Z],ft=tt.r+I+4,pt=ft*ft;let Tt=0;b>1e-4&&(Tt=Math.max(0,Math.min(1,((tt.x-x)*R+(tt.y-E)*M)/b)));const _t=x+Tt*R,St=E+Tt*M,Pt=(tt.x-_t)*(tt.x-_t)+(tt.y-St)*(tt.y-St);Pt<pt&&Pt<B&&(L=!0,B=Pt,P=_t,F=St,V=tt,q=K,k=$)}if(L)break}if(L&&V){let N=q-P,X=k-20-F;const K=Math.hypot(N,X)||1;if(N/=K,X/=K,this.isDragging){if(this.stickCollisionCooldown<=0){const $=(this.vx||0)*.65+(Math.random()-.5)*2.5,G=-(this.vy||0)*.65+(Math.random()-.5)*2.5,Z=(Math.random()-.5)*.2;v.stick.applyImpulse?v.stick.applyImpulse($,G,Z):(v.stick.velocity.x+=$,v.stick.velocity.y+=G,v.stick.rotSpeed+=Z),(d=U.playWoodClack)==null||d.call(U,.08),this.spawnLandingDust(),this.stickCollisionCooldown=.16}continue}if(this.state==="lying"){this.stickCollisionCooldown<=0&&(v.stick.applyImpulse&&v.stick.applyImpulse((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*.1),(_=U.playWoodClack)==null||_.call(U,.04),this.stickCollisionCooldown=.5);continue}if(this.state==="in_jump"||this.state==="falling"){const $=((g=this.smartJumpData)==null?void 0:g.targetType)==="stick"&&((p=this.smartJumpData)==null?void 0:p.targetStick)===v.stick,G=this.stickGrabCooldown<=0&&this.vy>=-4.8;if($||G){this.grabStick(v.stick,P,F);return}if(this.stickCollisionCooldown<=0){const Z=V.r+I+3;this.x=P+N*Z,this.y=F+X*Z+20-this.baseY;const tt=this.vx||this.facing*4,ft=this.vy||2.5,pt=-N*3.4+tt*.85,Tt=X*3.4-ft*.85,_t=(Math.random()<.5?1:-1)*(.12+Math.random()*.08);v.stick.applyImpulse?v.stick.applyImpulse(pt,Tt,_t):(v.stick.velocity.x+=pt,v.stick.velocity.y+=Tt,v.stick.rotSpeed+=_t),this.handleJumpCollisionWithObstacle("stick",N,X),this.stickCollisionCooldown=.35}return}if(this.stickCollisionCooldown<=0){const $=(this.facing||1)*3.8,G=(Math.random()<.5?1:-1)*.1;v.stick.applyImpulse?v.stick.applyImpulse($,(Math.random()-.5)*2,G):(v.stick.velocity.x+=$,v.stick.velocity.y+=(Math.random()-.5)*2,v.stick.rotSpeed+=G);const Z=V.r+I+3;if(this.x=P+N*Z,(m=U.playWoodClack)==null||m.call(U,.085),this.spawnLandingDust(),this.state==="running"||this.floorSubstate==="running_free"){const tt=N!==0?N>0?1:-1:-this.facing;this.facing=tt,this.isSkidding=!1,this.state="running",this.currentSpeed=3.2+Math.random()*.8,this.targetTilt=this.facing*.16,this.floorRunTargetX=this.facing>0?this.width-85:85,this.targetScaleX=1.25,this.targetScaleY=.75}else this.targetTilt=-this.facing*.25,this.targetScaleX=1.2,this.targetScaleY=.8;this.stickCollisionCooldown=.35}}}}handleJumpCollisionWithObstacle(t,e=0,i=0){var s,a;if(this.isDragging)return;(s=this.smartJumpData)!=null&&s.targetCardId?this.intendedTargetCardId=this.smartJumpData.targetCardId:this.targetCardId&&(this.intendedTargetCardId=this.targetCardId),this.lastFailedTakeoffX=this.navTargetX||this.x,this.smartJumpData=null,this.setFloorCoordinateSpace(),this.state="falling";const n=e!==0?Math.sign(e):-Math.sign(this.vx||this.facing||1);this.vx=n*(4.5+Math.random()*1.5),this.vy=Math.max(3.6,Math.abs(this.vy)*.45+3.2),this.targetRotation=this.rotation+n*1.4,this.targetScaleX=1.4,this.targetScaleY=.6,this.targetTilt=-n*.4,this.spawnLandingDust(),(a=U.playWoodClack)==null||a.call(U,.095)}checkAntiStuck(t){if(this.isDragging||this.state==="lying"||this.state==="landing_jump"){this.stuckTimer=0,this.lastTrackedX=this.x;return}this.state==="running"||this.aiState==="navigating_to_card"||this.aiState==="navigating_to_edge"||this.aiState==="prepare_card_launch"||this.cardExploreSubstate==="patrol"||this.lettersExploreSubstate==="patrol"||this.pillExploreSubstate==="patrol"?(Math.abs(this.x-this.lastTrackedX)<.35?this.stuckTimer+=t:(this.stuckTimer=0,this.lastTrackedX=this.x),this.stuckTimer>.75&&this.handleStuckResolution()):(this.stuckTimer=0,this.lastTrackedX=this.x)}handleStuckResolution(){var t,e,i,n;if(this.stuckTimer=0,this.lastTrackedX=this.x,this.aiState==="navigating_to_card"){const a=(((e=(t=window.__app)==null?void 0:t.gallery)==null?void 0:e.getCardScreenRects())||[]).find(o=>o.id===this.targetCardId);if(a&&Math.abs(a.x-this.x)<450){this.aiState="prepare_card_launch",this.aiTimer=0,this.state="crouch",this.targetScaleY=.68,this.targetScaleX=1.34;return}this.triggerSingleJump(!1),this.vx=this.facing*2.5,this.vy=-6.2;return}if(this.aiState==="navigating_to_edge"){this.executeCardToCardJump(this.targetCardId);return}if(this.cardExploreSubstate==="patrol"){this.facing*=-1,this.cardExploreSubstate="survey",this.cardExploreTimer=0,this.state="standing";return}if(((i=this.attachedObstacle)==null?void 0:i.type)==="letters"&&this.lettersExploreSubstate==="patrol"){this.facing*=-1,this.lettersExploreSubstate="survey",this.lettersExploreTimer=0,this.state="standing";return}if(((n=this.attachedObstacle)==null?void 0:n.type)==="pill"&&this.pillExploreSubstate==="patrol"){this.facing*=-1,this.pillExploreSubstate="survey",this.pillExploreTimer=0,this.state="standing";return}this.state==="running"&&(Math.random()<.5?(this.triggerSingleJump(!1),this.vx=this.facing*2.4,this.vy=-5.8):this.triggerTurn())}updatePhysics(t){var h,l,c,u,f,d,_,g,p,m,S,v,x,E,y,T,R,M,b,I,L,B,P,F,V,q;this.userIdleTime+=t,this.recentlyLeftCardTimer>0&&(this.recentlyLeftCardTimer-=t,this.recentlyLeftCardTimer<=0&&(this.recentlyLeftCardId=null)),this.recentlyLeftPillTimer>0&&(this.recentlyLeftPillTimer-=t),!this.isDragging&&this.state!=="falling"&&this.state!=="grabbed"&&(this.animTimer+=t,this.animTimer>=this.animDuration&&this.switchNextAnimation()),this.animSubTimer+=t,this.currentSpeed+=(this.baseSpeed-this.currentSpeed)*.04,this.scaleX+=(this.targetScaleX-this.scaleX)*.22,this.scaleY+=(this.targetScaleY-this.scaleY)*.22,this.rotation+=(this.targetRotation-this.rotation)*.16,this.stickCollisionCooldown>0&&(this.stickCollisionCooldown-=t),this.stickGrabCooldown>0&&(this.stickGrabCooldown-=t),this.dodgeCooldown>0&&(this.dodgeCooldown-=t),this.fleeTimer>0&&(this.fleeTimer-=t,this.fleeTimer<=0&&(this.isFleeing=!1)),this.checkSticksCollision(),this.updateLadders(t);let e=35,i=this.width-35;(this.state==="falling"||this.state==="in_jump")&&this.attachedObstacle&&this.setFloorCoordinateSpace();const n=((c=(l=(h=window.__app)==null?void 0:h.gallery)==null?void 0:l.scroll)==null?void 0:c.current)||0;if(this.attachedObstacle&&!this.isDragging&&this.aiState!=="climbing_ladder"&&this.aiState!=="sitting_ladder_top"){const k=this.attachedObstacle;if(k.type==="card"){const X=(((f=(u=window.__app)==null?void 0:u.gallery)==null?void 0:f.getCardScreenRects())||[]).find(K=>K.id===k.cardId);if(X&&((d=X.cardRef)!=null&&d.isVisible)){const K=X.hw;k.relX===void 0&&(k.relX=X.screenXToLocalX(this.x));const $=X.getLedgePoint(k.relX);if(this.x=$.x,this.baseY=$.y,this.y=0,this.surfaceAngle=$.surfaceAngle||X.topLedge.angle,this.pageBaseY=this.baseY+n,e=X.left+16,i=X.right-16,$.isCorner&&$.slopeFactor>.18){const G=$.cornerSide*(2.2*$.slopeFactor+.8);this.slideCardVx=(this.slideCardVx||0)+G*t*60,k.relX+=this.slideCardVx;const Z=X.getLedgePoint(k.relX);if(this.x=Z.x,this.baseY=Z.y,this.targetTilt=(Z.surfaceAngle-X.topLedge.angle)*1.5,Math.random()<.4&&this.spawnFootstepDust(),Z.slopeFactor>.72||k.relX<=-K+4||k.relX>=K-4){const tt=Z.cornerSide,ft=k.cardId;this.detachFromObstacle(2.5),this.recentlyLeftCardId=ft,this.recentlyLeftCardTimer=.45,this.vx=tt*(3.8+Math.abs(this.slideCardVx)*.4),this.vy=2,this.slideCardVx=0,this.targetRotation=this.rotation+tt*.9,this.state="falling",this.spawnLandingDust(),(_=U==null?void 0:U.playWoodClack)==null||_.call(U,.05)}}else this.slideCardVx=0}else this.detachFromObstacle(2)}else if(k.type==="pill"){const N=this.getFilterPillCollision();if(N){const X=N.getSurfaceAtScreenX(this.x);if(this.baseY=X.y,this.y=0,this.surfaceAngle=X.angle,this.pageBaseY=this.baseY+n,e=N.left+N.radius,i=N.right-N.radius,X.isCorner&&X.slopeFactor>.18){const K=X.cornerSide*(2.4*X.slopeFactor+1);this.slideVx=(this.slideVx||0)+K*t*60,this.x+=this.slideVx;const $=N.getSurfaceAtScreenX(this.x);if(this.baseY=$.y,this.targetTilt=$.angle*1.4,Math.random()<.4&&this.spawnFootstepDust(),$.isOff||$.slopeFactor>.72||this.x<=N.left+3||this.x>=N.right-3){const G=X.cornerSide;this.detachFromObstacle(2.5),this.recentlyLeftPillTimer=.45,this.vx=G*(4+Math.abs(this.slideVx)*.4),this.vy=2,this.slideVx=0,this.targetRotation=this.rotation+G*.9,this.state="falling",this.spawnLandingDust(),(g=U==null?void 0:U.playWoodClack)==null||g.call(U,.05)}}else this.slideVx=0}else this.detachFromObstacle(2)}else if(k.type==="letters"){const N=this.getTitleLettersCollision();if(N){this.x=Math.max(N.left+8,Math.min(N.right-8,this.x));const X=N.getLedgeYAtScreenX(this.x);Math.abs(X-this.baseY)<.5?this.baseY=X:this.baseY+=(X-this.baseY)*.45,this.y=0,this.surfaceAngle=0,this.pageBaseY=this.baseY+n,e=N.left+10,i=N.right-10}else this.detachFromObstacle(2)}else this.detachFromObstacle(2)}else this.isDragging||(this.attachedStick?(this.pageBaseY=this.baseY+n,this.surfaceAngle=0):this.aiState==="climbing_ladder"||this.aiState==="sitting_ladder_top"||this.aiState==="pocket_ladder_deploy"||this.aiState==="building_ladder"?(this.pageBaseY=this.baseY+n,this.surfaceAngle=0):((this.pageBaseY===void 0||this.pageBaseY===null)&&(this.pageBaseY=this.floorY+n),this.baseY=this.pageBaseY-n,this.surfaceAngle=0),e=70,i=this.width-70);if(this.updateCanvasZIndex(),this.attachedStick)this.updateStickAI(t);else if(this.state!=="in_jump"&&this.state!=="falling"&&this.state!=="grabbed")this.updateAI(t,e,i);else if(this.state==="in_jump"||this.state==="falling"){this.vy+=this.gravity,this.vx*=.985;const k=this.baseY+this.y,N=this.x;this.y+=this.vy,this.x+=this.vx,this.runCycle+=.15;const X=this.baseY+this.y,K=X-44;this.checkSticksCollision(N,k),this.vy<-2?(this.targetScaleY=1.3,this.targetScaleX=.8,this.targetTilt=this.facing*.18):Math.abs(this.vy)<=2?(this.targetScaleY=1.04,this.targetScaleX=.96,this.targetTilt=0):(this.targetScaleY=1.16,this.targetScaleX=.88,this.targetTilt=-this.facing*.12);const $=this.isFleeing||this.x<0?-85:70,G=this.isFleeing||this.x>this.width?this.width+85:this.width-70;if(this.x<$?(this.x=$,this.vx=Math.abs(this.vx)*.5+1.5,this.facing=1):this.x>G&&(this.x=G,this.vx=-(Math.abs(this.vx)*.5+1.5),this.facing=-1),K<5&&(this.y=49-this.baseY,this.vy=Math.max(1.8,-this.vy*.35),this.targetScaleY=.8,this.targetScaleX=1.25,U.playClick()),this.vy>=0){let Z=!1;const tt=!!((p=this.smartJumpData)!=null&&p.targetCardId),ft=((m=this.smartJumpData)==null?void 0:m.targetType)==="pill",pt=((S=this.smartJumpData)==null?void 0:S.targetType)==="letters",Tt=((v=this.smartJumpData)==null?void 0:v.targetType)==="floor",_t=this.getTitleLettersCollision();if(!Tt&&!tt&&!ft&&_t&&this.x>=_t.left-15&&this.x<=_t.right+15){const z=_t.getLedgeYAtScreenX(this.x);X>=z-8&&k<=z+36&&(Z=!0,this.attachedObstacle={id:"title-letters",type:"letters",name:_t.name},this.x=Math.max(_t.left+8,Math.min(_t.right-8,this.x)),this.baseY=z,this.y=0,this.vy=0,this.vx=0,this.surfaceAngle=0,this.pageBaseY=this.baseY+n,this.smartJumpData=null,this.intendedTargetCardId=null,this.retryJumpCount=0,this.jumpArcBonusExtra=0,this.aiState="on_letters",this.lettersExploreSubstate="survey",this.lettersExploreTimer=0,this.currentAnim="standing",this.targetScaleY=.65,this.targetScaleX=1.4,this.targetRotation=Math.round(this.rotation/(Math.PI*2))*(Math.PI*2),this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),this.state="landing_jump",setTimeout(()=>{this.state==="landing_jump"&&(this.targetScaleY=1,this.targetScaleX=1,this.state="standing")},140))}let St=!1;const Pt=this.getFilterPillCollision();if(!Tt&&!tt&&!pt&&(!this.recentlyLeftPillTimer||this.recentlyLeftPillTimer<=0)&&Pt&&this.x>=Pt.left-10&&this.x<=Pt.right+10){const z=Pt.getSurfaceAtScreenX(this.x);X>=z.y-8&&k<=z.y+36&&(St=!0,this.attachedObstacle={id:"filter-pill",type:"pill",name:Pt.name},this.baseY=z.y,this.y=0,this.vy=0,this.vx=0,this.surfaceAngle=z.angle,this.pageBaseY=this.baseY+n,this.smartJumpData=null,this.intendedTargetCardId=null,this.retryJumpCount=0,this.jumpArcBonusExtra=0,this.aiState="on_pill",this.pillExploreSubstate="survey",this.pillExploreTimer=0,this.slideVx=0,this.currentAnim="standing",this.targetScaleY=.65,this.targetScaleX=1.4,this.targetRotation=Math.round(this.rotation/(Math.PI*2))*(Math.PI*2),this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),this.state="landing_jump",setTimeout(()=>{this.state==="landing_jump"&&(this.targetScaleY=1,this.targetScaleX=1,this.state="standing")},140))}if(!Z&&!St){let z=null,pe=0;const Mt=((E=(x=window.__app)==null?void 0:x.gallery)==null?void 0:E.getCardScreenRects())||[];if((y=this.smartJumpData)!=null&&y.targetCardId){const ot=Mt.find(ut=>ut.id===this.smartJumpData.targetCardId);if(ot&&((T=ot.cardRef)!=null&&T.isVisible)&&((M=(R=ot.cardRef)==null?void 0:R.group)!=null&&M.visible)){const ut=Math.min(ot.topLedge.x1,ot.topLedge.x2)-20,Wt=Math.max(ot.topLedge.x1,ot.topLedge.x2)+20;if(this.x>=ut&&this.x<=Wt){const xt=ot.getLedgeYAtScreenX(this.x);X>=xt-8&&k<=xt+36&&(z=ot,pe=this.smartJumpData.targetRelX!==void 0?this.smartJumpData.targetRelX:ot.screenXToLocalX(this.x))}}}if(!z)for(const ot of Mt){if(this.recentlyLeftCardId===ot.id&&this.recentlyLeftCardTimer>0||!((b=ot.cardRef)!=null&&b.isVisible)||!((L=(I=ot.cardRef)==null?void 0:I.group)!=null&&L.visible))continue;const ut=Math.min(ot.topLedge.x1,ot.topLedge.x2)-16,Wt=Math.max(ot.topLedge.x1,ot.topLedge.x2)+16;if(this.x<ut||this.x>Wt)continue;const xt=ot.getLedgeYAtScreenX(this.x);if(X>=xt-6&&k<=xt+32){z=ot,pe=ot.screenXToLocalX(this.x);break}}if(z){const ot=Math.max(-z.hw+8,Math.min(z.hw-8,pe)),ut=z.getLedgePoint(ot);this.attachedObstacle={id:`card-${z.id}-top`,cardId:z.id,type:"card",relX:ot,cardRef:z.cardRef},this.x=ut.x,this.baseY=ut.y,this.y=0,this.vy=0,this.vx=0,this.surfaceAngle=z.topLedge.angle,this.pageBaseY=this.baseY+n,this.smartJumpData=null,this.intendedTargetCardId=null,this.retryJumpCount=0,this.jumpArcBonusExtra=0,this.aiState="on_card",this.cardExploreSubstate="survey",this.cardExploreTimer=0,this.currentAnim="standing",this.targetScaleY=.65,this.targetScaleX=1.4,this.targetRotation=Math.round(this.rotation/(Math.PI*2))*(Math.PI*2),this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),this.state="landing_jump",setTimeout(()=>{this.state==="landing_jump"&&(this.targetScaleY=1,this.targetScaleX=1,this.state="standing")},140)}else{const ot=((B=this.smartJumpData)==null?void 0:B.targetType)==="floor"&&((P=this.smartJumpData)==null?void 0:P.targetY)!==void 0?this.smartJumpData.targetY:this.pageBaseY!==void 0&&this.pageBaseY!==null?this.pageBaseY-n:this.floorY,ut=!!((F=this.smartJumpData)!=null&&F.targetCardId&&((V=this.smartJumpData)!=null&&V.targetY)&&this.smartJumpData.targetY>ot-10);if(X>=ot&&!ut||ut&&X>=this.smartJumpData.targetY+45){const xt=Mt.find(C=>{var it,Q,nt;if(!((it=C.cardRef)!=null&&it.isVisible)||!((nt=(Q=C.cardRef)==null?void 0:Q.group)!=null&&nt.visible))return!1;const w=Math.min(C.topLedge.x1,C.topLedge.x2)-16,W=Math.max(C.topLedge.x1,C.topLedge.x2)+16;return this.x>=w&&this.x<=W&&C.top<=ot+65&&C.bottom>=ot-65});if(xt){const C=Math.max(-xt.hw+8,Math.min(xt.hw-8,xt.screenXToLocalX(this.x))),w=xt.getLedgePoint(C);this.attachedObstacle={id:`card-${xt.id}-top`,cardId:xt.id,type:"card",relX:C,cardRef:xt.cardRef},this.x=w.x,this.baseY=w.y,this.y=0,this.vy=0,this.vx=0,this.surfaceAngle=xt.topLedge.angle,this.pageBaseY=this.baseY+n,this.smartJumpData=null,this.intendedTargetCardId=null,this.retryJumpCount=0,this.jumpArcBonusExtra=0,this.aiState="on_card",this.cardExploreSubstate="survey",this.cardExploreTimer=0,this.currentAnim="standing",this.targetScaleY=.65,this.targetScaleX=1.4,this.targetRotation=Math.round(this.rotation/(Math.PI*2))*(Math.PI*2),this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),this.state="landing_jump",setTimeout(()=>{this.state==="landing_jump"&&(this.targetScaleY=1,this.targetScaleX=1,this.state="standing")},140)}else{const C=((q=this.smartJumpData)==null?void 0:q.targetType)==="floor";this.attachedObstacle=null,this.baseY=ot,this.pageBaseY=ot+n,this.y=0,this.vy=0,this.vx=0,this.smartJumpData=null,this.targetScaleY=.65,this.targetScaleX=1.4,this.targetRotation=Math.round(this.rotation/(Math.PI*2))*(Math.PI*2),this.spawnLandingDust(),U.playHop(),this.updateCanvasZIndex(),this.state="landing_jump",this.intendedTargetCardId&&this.retryJumpCount<this.maxRetries?(this.aiState="recovering_from_fall",this.recoveryTimer=0,setTimeout(()=>{this.targetScaleY=1,this.targetScaleX=1,this.state="standing"},140)):(this.intendedTargetCardId=null,this.retryJumpCount=0,this.jumpArcBonusExtra=0,this.aiState="floor_idle",this.aiTimer=0,this.currentAnim="standing",setTimeout(()=>{this.targetScaleY=1,this.targetScaleX=1,C||Math.random()<.6?this.startFloorRunning():this.state="standing"},140))}}}}}}else this.state==="grabbed"&&(this.runCycle=0,this.vx*=.85,this.targetTilt=Math.max(-.25,Math.min(.25,-this.vx*.03)),this.targetScaleY=1.06,this.targetScaleX=.95);this.state==="crouch"?(this.crouchSafetyTimer+=t,this.crouchSafetyTimer>.8&&(this.crouchSafetyTimer=0,this.state="standing",this.targetScaleX=1,this.targetScaleY=1)):this.crouchSafetyTimer=0;const s=this.isFleeing||this.offscreenReturnTimer!==void 0&&this.offscreenReturnTimer>0||this.x<0||this.x>this.width,a=s?-85:70,o=s?this.width+85:this.width-70;this.isDragging||(this.x<a?(this.x=a,this.state==="running"||this.state==="skid"?(this.isSkidding=!1,this.facing=1,this.state="running",this.targetTilt=this.facing*.16,this.floorRunTargetX=this.width-85-Math.random()*120,this.spawnLandingDust()):(this.state==="in_jump"||this.state==="falling")&&(this.vx=Math.abs(this.vx||2.5),this.facing=1)):this.x>o&&(this.x=o,this.state==="running"||this.state==="skid"?(this.isSkidding=!1,this.facing=-1,this.state="running",this.targetTilt=this.facing*.16,this.floorRunTargetX=85+Math.random()*120,this.spawnLandingDust()):(this.state==="in_jump"||this.state==="falling")&&(this.vx=-Math.abs(this.vx||2.5),this.facing=-1))),this.checkAntiStuck(t),this.tilt+=(this.targetTilt-this.tilt)*.2;for(let k=this.particles.length-1;k>=0;k--){const N=this.particles[k];N.x+=N.vx,N.y+=N.vy,N.vx*=.92,N.vy+=.04,N.alpha-=N.decay,N.alpha<=0&&this.particles.splice(k,1)}for(let k=this.sleepBubbles.length-1;k>=0;k--){const N=this.sleepBubbles[k];N.x+=N.vx,N.y+=N.vy,N.scale+=.01,N.alpha-=.007,N.alpha<=0&&this.sleepBubbles.splice(k,1)}this.prevX=this.x,this.prevFeetY=this.baseY+this.y}calculateBallisticJump(t,e,i,n,s=55){const a=this.gravity,o=.985,h=Math.min(e,n)-s,l=Math.max(16,e-h),c=Math.max(16,n-h),u=Math.sqrt(2*l/a),f=Math.sqrt(2*c/a),d=Math.max(18,Math.round(u+f)),g=(n-e)/d-a*(d+1)/2,p=i-t,m=o*(1-Math.pow(o,d))/(1-o);return{vx:p/m,vy:g,totalFrames:d,targetX:i,targetY:n}}updateCursorAvoidance(t,e,i){var E,y,T,R,M,b,I;if(this.isDragging||this.state==="grabbed"||this.state==="landing_jump"||this.state==="in_jump"||this.state==="falling"||this.aiState==="pocket_ladder_deploy"||this.aiState==="climbing_ladder"||this.aiState==="sitting_ladder_top")return!1;if(!this.mouse||this.mouse.x<0||this.mouse.y<0)return this.isFleeing=!1,this.fleeTimer=0,!1;const n=this.baseY+this.y-20,s=this.x-this.mouse.x,a=n-this.mouse.y,o=Math.hypot(s,a),h=performance.now();this.prevMouseTime||(this.prevMouseTime=h);const l=Math.max(16,h-this.prevMouseTime);this.prevMouseTime=h;const c=(this.mouse.x-(this.prevMouseX??this.mouse.x))/(l/1e3),u=(this.mouse.y-(this.prevMouseY??this.mouse.y))/(l/1e3);if(this.prevMouseX=this.mouse.x,this.prevMouseY=this.mouse.y,this.mouseSpeed=Math.hypot(c,u),o<160&&(this.state==="lying"||this.currentAnim==="lying")&&(this.wakeUp(),this.spawnLandingDust(),(E=U==null?void 0:U.playHop)==null||E.call(U,.12),this.isFleeing=!0,this.fleeTimer=1),!(o<140||this.fleeTimer>0))return this.isFleeing=!1,!1;this.isFleeing=!0,this.fleeTimer=Math.max(this.fleeTimer,.75);const d=Math.abs(s)>2?s>0?1:-1:this.x>this.width/2?-1:1;this.facing=d;const _=d===1&&this.x>=i-35||d===-1&&this.x<=e+35;let g=!1,p=null;if(this.attachedObstacle&&this.attachedObstacle.type==="card"&&(p=(((T=(y=window.__app)==null?void 0:y.gallery)==null?void 0:T.getCardScreenRects())||[]).find(B=>B.id===this.attachedObstacle.cardId),p)){const B=this.attachedObstacle.relX??0;g=d===1&&B>=p.hw-35||d===-1&&B<=-p.hw+35}if(g&&o<100&&this.dodgeCooldown<=0)return this.dodgeCooldown=.95,this.cardsVisitedInSequence=0,this.executeJumpFromCardToFloor(d>0?"right":"left"),(R=U==null?void 0:U.playHop)==null||R.call(U,.14),!0;if(this.attachedObstacle&&_&&o<105&&this.dodgeCooldown<=0){this.dodgeCooldown=1.1;const L=-d;return this.facing=L,this.setFloorCoordinateSpace(),this.state="in_jump",this.aiState="in_smart_jump",this.smartJumpData={targetType:"floor",targetX:Math.max(e+35,Math.min(i-35,this.x+L*175)),targetY:this.baseY},this.vx=L*6.4,this.vy=-6.8,this.targetRotation=this.rotation+L*Math.PI*2,this.targetScaleY=1.45,this.targetScaleX=.7,this.spawnLandingDust(),(M=U==null?void 0:U.playHop)==null||M.call(U,.16),!0}if(this.mouseSpeed>450&&o<75&&this.dodgeCooldown<=0)return this.dodgeCooldown=.8,this.facing=d,this.setFloorCoordinateSpace(),this.state="in_jump",this.vy=-4,this.vx=d*5.8,this.targetScaleY=.75,this.targetScaleX=1.35,this.spawnLandingDust(),(b=U==null?void 0:U.playHop)==null||b.call(U,.12),!0;const m=Math.max(0,1-o/140),S=3.8+m*3.2;if(this.state="running",this.currentAnim="running",this.currentSpeed=S,this.attachedObstacle&&this.attachedObstacle.type==="card"&&p){const L=this.attachedObstacle.relX??0,B=Math.max(-p.hw+18,Math.min(p.hw-18,L+d*S));this.attachedObstacle.relX=B;const P=p.getLedgePoint(B);this.x=P.x,this.baseY=P.y}else if(this.attachedObstacle&&this.attachedObstacle.type==="pill"){const L=this.getFilterPillCollision();L&&(this.x=Math.max(L.left+15,Math.min(L.right-15,this.x+d*S)))}else if(this.attachedObstacle&&this.attachedObstacle.type==="letters"){const L=this.getTitleLettersCollision();L&&(this.x=Math.max(L.left+15,Math.min(L.right-15,this.x+d*S)))}else{const B=this.width+85;this.x=Math.max(-85,Math.min(B,this.x+d*S)),(this.x<=-50||this.x>=this.width+50)&&(this.isFleeing=!1,this.fleeTimer=0,this.offscreenReturnTimer=0)}this.targetTilt=d*(.2+m*.12),this.targetScaleY=.9,this.targetScaleX=1.15;const v=S*.065;this.runCycle+=v;const x=Math.sin(this.runCycle);return x*this.lastStepPhase<0&&(this.spawnFootstepDust(),Math.random()<.4&&((I=U==null?void 0:U.playWoodClack)==null||I.call(U,.025))),this.lastStepPhase=x,!0}updateAI(t,e,i){const n=this.baseY+this.y;if(n<-70||n>this.height+70||this.x<0||this.x>this.width){if(this.state=this.currentAnim==="lying"&&this.userIdleTime>=this.userIdleThreshold?"lying":"standing",this.vx=0,this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1,this.x<0||this.x>this.width){this.offscreenReturnTimer=(this.offscreenReturnTimer||0)+t;const a=!this.mouse||(this.x<0?this.mouse.x>200:this.mouse.x<this.width-200);if(this.offscreenReturnTimer>2&&a){const o=this.x<0?1:-1;this.facing=o,this.state="running",this.currentAnim="running",this.currentSpeed=2.2,this.x+=o*this.currentSpeed,this.targetTilt=o*.12,this.x>=75&&this.x<=this.width-75&&(this.offscreenReturnTimer=0)}}return}if(this.state!=="landing_jump"){if(this.attachedStick){this.updateStickAI(t);return}if(!this.updateCursorAvoidance(t,e,i)){if(this.aiState==="navigating_to_ladder"||this.aiState==="building_ladder"||this.aiState==="pocket_ladder_deploy"||this.aiState==="climbing_ladder"||this.aiState==="sitting_ladder_top"){this.updateLadderAI(t);return}this.attachedObstacle&&this.attachedObstacle.type==="card"?this.updateCardAI(t,e,i):this.attachedObstacle&&this.attachedObstacle.type==="letters"?this.updateLettersAI(t,e,i):this.attachedObstacle&&this.attachedObstacle.type==="pill"?this.updatePillAI(t,e,i):this.updateFloorAI(t,e,i)}}}updateFloorAI(t,e,i){var n,s,a,o,h,l,c,u,f,d,_,g,p,m,S,v,x;if(this.aiTimer+=t,this.aiState==="recovering_from_fall"){if(this.recoveryTimer+=t,this.recoveryTimer<.45){this.state="standing",this.targetTilt=Math.sin(this.recoveryTimer*30)*.14,Math.random()<.25&&this.spawnLandingDust();const B=(((s=(n=window.__app)==null?void 0:n.gallery)==null?void 0:s.getCardScreenRects())||[]).find(P=>P.id===this.intendedTargetCardId);B&&(this.facing=B.x>this.x?1:-1);return}const y=(((o=(a=window.__app)==null?void 0:a.gallery)==null?void 0:o.getCardScreenRects())||[]).find(L=>L.id===this.intendedTargetCardId);if(!y||!((h=y.cardRef)!=null&&h.isVisible)||y.top>this.height-30){this.intendedTargetCardId=null,this.retryJumpCount=0,this.aiState="floor_idle",this.aiTimer=0;return}this.retryJumpCount++,this.jumpArcBonusExtra+=35;const T=50,R=y.left+T,M=y.right-T,b=y.x;let I;this.retryJumpCount===1?this.lastFailedTakeoffX&&this.lastFailedTakeoffX>b?I=Math.max(45,R):I=Math.min(this.width-45,M):this.retryJumpCount===2?I=b:I=Math.max(45,Math.min(this.width-45,this.x)),this.targetCardId=this.intendedTargetCardId,this.navTargetX=Math.max(40,Math.min(this.width-40,I)),this.aiState="navigating_to_card",this.currentAnim="running",this.state="running",this.aiTimer=0,this.stuckTimer=0;return}if(this.userIdleTime>=this.userIdleThreshold&&!this.intendedTargetCardId){this.state!=="lying"&&(this.currentAnim="lying",this.state="lying",this.aiState="floor_idle",this.navTargetX=null,this.vx=0,this.spawnLandingDust()),this.targetTilt=0,Math.random()<.015&&this.sleepBubbles.length<3&&this.sleepBubbles.push({x:this.x+this.facing*12,y:this.baseY-14,vx:this.facing*.3+(Math.random()-.5)*.4,vy:-.6-Math.random()*.4,alpha:.45,scale:.6});return}if(this.aiState==="navigating_to_card"){if(this.navTargetX===null||!this.targetCardId){this.aiState="floor_idle",this.state="standing";return}const y=(((c=(l=window.__app)==null?void 0:l.gallery)==null?void 0:c.getCardScreenRects())||[]).find(M=>M.id===this.targetCardId);if(!y||!((u=y.cardRef)!=null&&u.isVisible)||y.top>this.height){this.aiState="floor_idle",this.intendedTargetCardId=null,this.retryJumpCount=0,this.state="standing";return}const T=this.navTargetX-this.x,R=this.x>=y.left+25&&this.x<=y.right-25;if(Math.abs(T)<28||R||T>0&&this.x>=this.width-50||T<0&&this.x<=50)this.vx=0,this.aiState="prepare_card_launch",this.aiTimer=0,this.state="crouch",this.targetScaleY=.68,this.targetScaleX=1.34,this.targetTilt=0,this.facing=y.x>this.x?1:-1;else{this.facing=T>0?1:-1,this.state="running",this.currentSpeed=Math.min(3.2,Math.max(1.8,Math.abs(T)*.035+1.6)),this.x+=this.facing*this.currentSpeed,this.x=Math.max(75,Math.min(this.width-75,this.x)),this.targetTilt=this.facing*.13;const M=this.currentSpeed*.055;this.runCycle+=M;const b=Math.sin(this.runCycle);b*this.lastStepPhase<0&&this.spawnFootstepDust(),this.lastStepPhase=b}return}if(this.aiState==="prepare_card_launch"){this.state="crouch",this.targetScaleY=.68,this.targetScaleX=1.34,this.targetTilt=0,this.aiTimer>=.22?this.executeJumpToCard(this.targetCardId):this.aiTimer>1.2&&(this.aiState="floor_idle",this.state="standing");return}if(this.aiState==="floor_idle"){if(!this.attachedObstacle&&!this.attachedStick&&!this.currentLadder){const y=(((d=(f=window.__app)==null?void 0:f.gallery)==null?void 0:d.getCardScreenRects())||[]).find(T=>{var b,I,L;if(!((b=T.cardRef)!=null&&b.isVisible)||!((L=(I=T.cardRef)==null?void 0:I.group)!=null&&L.visible))return!1;const R=Math.min(T.topLedge.x1,T.topLedge.x2)-15,M=Math.max(T.topLedge.x1,T.topLedge.x2)+15;return this.x>=R&&this.x<=M&&this.baseY>=T.top-15&&this.baseY<=T.top+50});if(y){const T=Math.max(-y.hw+8,Math.min(y.hw-8,y.screenXToLocalX(this.x))),R=y.getLedgePoint(T);this.attachedObstacle={id:`card-${y.id}-top`,cardId:y.id,type:"card",relX:T,cardRef:y.cardRef},this.baseY=R.y,this.x=R.x,this.y=0,this.aiState="on_card",this.cardExploreSubstate="survey",this.cardExploreTimer=0;return}else{const T=((p=(g=(_=window.__app)==null?void 0:_.gallery)==null?void 0:g.scroll)==null?void 0:p.current)||0,R=this.pageBaseY!==void 0&&this.pageBaseY!==null?this.pageBaseY-T:this.floorY;Math.abs(this.baseY-R)>2&&(this.baseY=R,this.y=0)}}if(this.userIdleTime>=this.userIdleThreshold){this.state!=="lying"&&(this.currentAnim="lying",this.state="lying",this.spawnLandingDust()),this.targetTilt=0,Math.random()<.015&&this.sleepBubbles.length<3&&this.sleepBubbles.push({x:this.x+this.facing*12,y:this.baseY-14,vx:this.facing*.3+(Math.random()-.5)*.4,vy:-.6-Math.random()*.4,alpha:.45,scale:.6});return}if(this.state==="lying"){this.wakeUp();return}if(this.floorSubstate==="sitting_edge"||this.floorSubstate==="inspecting"||this.floorSubstate==="waving"||this.floorSubstate==="stretching"||this.floorSubstate==="balancing"||this.floorSubstate==="looking_up"){if(this.state=this.floorSubstate==="looking_up"?"standing":this.floorSubstate,this.vx=0,this.floorSubstate==="looking_up"?this.targetTilt=-this.facing*.22:this.floorSubstate==="inspecting"?this.targetTilt=this.facing*.18:this.floorSubstate==="stretching"?(this.targetScaleY=1.15,this.targetScaleX=.9,this.targetTilt=-this.facing*.08):this.floorSubstate==="balancing"?this.targetTilt=Math.sin(performance.now()*.003)*.09:this.targetTilt=0,this.idleBlinkTimer+=t,this.idleBlinkTimer>2.5&&(this.isBlinking=!0,this.idleBlinkTimer>2.68&&(this.isBlinking=!1,this.idleBlinkTimer=0)),this.floorActionTimer=(this.floorActionTimer||0)+t,this.floorActionTimer>=(this.floorActionDuration||1.8)){const E=this.floorSubstate==="looking_up";if(this.floorSubstate="survey",this.floorActionTimer=0,this.state="standing",this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1,E){const y=this.findReachableCardsFromFloor();if(y.length>0){y.sort((T,R)=>Math.hypot(T.x-this.x,T.top-this.baseY)-Math.hypot(R.x-this.x,R.top-this.baseY)),this.initiateSeekCard(y[0]);return}}}return}if(this.floorSubstate==="running_free"){this.floorRunTimer+=t,this.floorHopTimer=(this.floorHopTimer||0)+t,this.floorHopTimer>1.6&&Math.random()<.08&&this.y===0&&this.state==="running"&&(this.vy=-5.2,this.y=-1,this.targetScaleY=1.28,this.targetScaleX=.8,this.floorHopTimer=0,U==null||U.playHop()),(this.floorRunTargetX===null||this.floorRunTargetX===void 0)&&(this.floorRunTargetX=this.facing>0?this.width-85:85);const E=this.floorRunTargetX-this.x,y=this.x<=80&&this.facing<0,T=this.x>=this.width-80&&this.facing>0;if(Math.abs(E)<20||y||T)if(this.floorRunTimer<this.floorRunDuration){this.facing=y?1:T||E>0?-1:1,this.state="running",this.currentSpeed=2.1+Math.random()*.5,this.targetTilt=this.facing*.12;const R=85;this.floorRunTargetX=this.facing>0?this.width-R-Math.random()*120:R+Math.random()*120,this.spawnFootstepDust()}else this.floorSubstate="survey",this.state="standing",this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1,this.aiTimer=0,this.aiDecisionInterval=1.8+Math.random()*1.6;else if(this.floorRunTimer>=this.floorRunDuration)this.floorSubstate="survey",this.state="standing",this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1,this.aiTimer=0,this.aiDecisionInterval=1.8+Math.random()*1.6;else{const R=(m=window.__app)==null?void 0:m.gallery,M=this.isScrolling||Math.abs(((S=R==null?void 0:R.scroll)==null?void 0:S.velocity)||0)>.04||Math.abs((((v=R==null?void 0:R.scroll)==null?void 0:v.target)||0)-(((x=R==null?void 0:R.scroll)==null?void 0:x.current)||0))>1.5,b=this.baseY<-50||this.baseY>this.height+50;if(!M&&!b&&this.floorRunTimer>.8&&Math.random()<.035){const P=((R==null?void 0:R.getCardScreenRects())||[]).find(F=>{var q;if(!((q=F.cardRef)!=null&&q.isVisible)||F.bottom<40||F.top>this.height-20)return!1;const V=this.baseY-F.top;return V>20&&V<=600&&this.x>=F.left+35&&this.x<=F.right-35});if(P){this.initiateSeekCard(P);return}}this.state="running",this.facing=E>0?1:-1,this.x+=this.facing*this.currentSpeed,this.x=Math.max(75,Math.min(this.width-75,this.x)),this.targetTilt=this.facing*.12;const I=this.currentSpeed*.055;this.runCycle+=I;const L=Math.sin(this.runCycle);L*this.lastStepPhase<0&&this.spawnFootstepDust(),this.lastStepPhase=L}return}if(this.floorSubstate==="stroll"){if(this.floorStrollTargetX===void 0||this.floorStrollTargetX===null){this.floorSubstate="survey",this.state="standing";return}const E=this.floorStrollTargetX-this.x;if(Math.abs(E)<10)this.floorSubstate="survey",this.state="standing",this.targetTilt=0,this.aiTimer=0,this.aiDecisionInterval=3.5+Math.random()*3;else{this.facing=E>0?1:-1,this.state="running",this.currentSpeed=1.3,this.x+=this.facing*this.currentSpeed,this.x=Math.max(75,Math.min(this.width-75,this.x)),this.targetTilt=this.facing*.1;const y=this.currentSpeed*.055;this.runCycle+=y;const T=Math.sin(this.runCycle);T*this.lastStepPhase<0&&this.spawnFootstepDust(),this.lastStepPhase=T}return}if(this.state="standing",this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1,this.idleBlinkTimer+=t,this.idleBlinkTimer>2.5&&(this.isBlinking=!0,this.idleBlinkTimer>2.68&&(this.isBlinking=!1,this.idleBlinkTimer=0,Math.random()<.35&&(this.facing*=-1))),this.aiTimer>=this.aiDecisionInterval){if(this.aiTimer=0,this.aiDecisionInterval=2.4+Math.random()*2,this.isScrolling)return;const E=this.findReachableCardsFromFloor(),y=Math.random();if(y<.18&&this.jumpToStick())return;if(y<.38){const T=this.findBestLadderTarget(this.x+this.facing*18,this.baseY);if(T){this.buildLadder(T.topX,T.topY,T.obstacle);return}}if(E.length>0&&y<.68){E.sort((T,R)=>Math.hypot(T.x-this.x,T.top-this.baseY)-Math.hypot(R.x-this.x,R.top-this.baseY)),this.initiateSeekCard(E[0]);return}if(y<.88){this.startFloorRunning();return}else y<.94?(this.floorSubstate="looking_up",this.floorActionDuration=2.2+Math.random()*1,this.floorActionTimer=0):y<.97?(this.floorSubstate="waving",this.floorActionDuration=2+Math.random()*.8,this.floorActionTimer=0):(this.floorSubstate=Math.random()<.5?"stretching":"balancing",this.floorActionDuration=2+Math.random()*.8,this.floorActionTimer=0)}return}}updateCardAI(t,e,i){var o,h;const n=((h=(o=window.__app)==null?void 0:o.gallery)==null?void 0:h.getCardScreenRects())||[],s=n.find(l=>l.id===this.attachedObstacle.cardId);if(!s){this.detachFromObstacle(1.5);return}if(s.bottom<15||s.top>this.height-15||this.isScrolling){this.state="standing",this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1;return}if(this.aiState==="prepare_card_to_card_leap"){this.state="crouch",this.targetScaleY=.68,this.targetScaleX=1.34,this.targetTilt=0,this.aiTimer+=t,this.aiTimer>=.22?this.executeCardToCardJump(this.targetCardId):this.aiTimer>1.2&&(this.aiState="on_card",this.cardExploreSubstate="survey",this.state="standing");return}if(this.aiState==="navigating_to_edge"){(this.navTargetRelX===void 0||this.navTargetRelX===null)&&(this.navTargetRelX=this.facing>0?s.hw-28:-s.hw+28);const l=this.attachedObstacle.relX??0,c=this.navTargetRelX-l;if(Math.abs(c)<14){this.vx=0,this.aiState="prepare_card_to_card_leap",this.aiTimer=0,this.state="crouch",this.targetScaleY=.68,this.targetScaleX=1.34,this.targetTilt=0;const u=n.find(f=>f.id===this.targetCardId);u&&(this.facing=u.x>this.x?1:-1)}else{this.facing=c>0?1:-1,this.state="running",this.currentSpeed=Math.min(2.4,Math.max(1.4,Math.abs(c)*.03+1.2)),this.attachedObstacle.relX=Math.max(-s.hw+24,Math.min(s.hw-24,l+this.facing*this.currentSpeed));const u=s.getLedgePoint(this.attachedObstacle.relX);this.x=u.x,this.baseY=u.y,this.targetTilt=this.facing*.11;const f=this.currentSpeed*.052;this.runCycle+=f;const d=Math.sin(this.runCycle);d*this.lastStepPhase<0&&this.spawnFootstepDust(),this.lastStepPhase=d}return}if(this.userIdleTime>=this.userIdleThreshold)this.cardExploreSubstate!=="rest"&&this.state!=="crouch"&&this.state!=="in_jump"&&(this.cardExploreSubstate="rest",this.cardExploreTimer=0,this.currentAnim="lying",this.state="lying",this.spawnLandingDust());else if(this.cardExploreSubstate==="rest"||this.state==="lying"){this.wakeUp();return}if(this.cardExploreTimer+=t,this.cardExploreSubstate==="sitting_edge"||this.cardExploreSubstate==="inspecting"||this.cardExploreSubstate==="waving"||this.cardExploreSubstate==="stretching"||this.cardExploreSubstate==="balancing"){this.state=this.cardExploreSubstate,this.vx=0,this.cardExploreSubstate==="inspecting"?this.targetTilt=this.facing*.18:this.cardExploreSubstate==="stretching"?(this.targetScaleY=1.15,this.targetScaleX=.9,this.targetTilt=-this.facing*.08):this.cardExploreSubstate==="balancing"?(this.targetTilt=Math.sin(performance.now()*.003)*.09,this.targetScaleX=1,this.targetScaleY=1):(this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1),this.idleBlinkTimer+=t,this.idleBlinkTimer>2.2&&(this.isBlinking=!0,this.idleBlinkTimer>2.38&&(this.isBlinking=!1,this.idleBlinkTimer=0)),this.cardExploreTimer>=(this.microActionDuration||2.4)&&(this.cardExploreTimer=0,this.cardExploreSubstate="survey",this.state="standing",this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1);return}if(this.cardExploreSubstate==="survey")this.state="standing",this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1,this.idleBlinkTimer+=t,this.idleBlinkTimer>2&&(this.isBlinking=!0,this.idleBlinkTimer>2.18&&(this.isBlinking=!1,this.idleBlinkTimer=0,Math.random()<.35&&(this.facing*=-1))),this.cardExploreTimer>=2.4+Math.random()*1.8&&(this.cardExploreTimer=0,this.chooseNextCardAction(s,n));else if(this.cardExploreSubstate==="patrol"){if(this.patrolTargetRelX===void 0||this.patrolTargetRelX===null){this.chooseNextCardAction(s,n);return}const l=this.attachedObstacle.relX??0,c=this.patrolTargetRelX-l;if(Math.abs(c)<8){this.attachedObstacle.relX=this.patrolTargetRelX;const u=s.getLedgePoint(this.attachedObstacle.relX);this.x=u.x,this.baseY=u.y,this.cardExploreSubstate="survey",this.cardExploreTimer=0,this.state="standing",this.targetTilt=0}else{this.facing=c>0?1:-1,this.state="running",this.currentSpeed=1.4,this.attachedObstacle.relX=Math.max(-s.hw+24,Math.min(s.hw-24,l+this.facing*this.currentSpeed));const u=s.getLedgePoint(this.attachedObstacle.relX);this.x=u.x,this.baseY=u.y,this.targetTilt=this.facing*.1;const f=this.currentSpeed*.052;this.runCycle+=f;const d=Math.sin(this.runCycle);d*this.lastStepPhase<0&&this.spawnFootstepDust(),this.lastStepPhase=d}}else this.cardExploreSubstate==="rest"&&(this.state="lying",this.targetTilt=0,Math.random()<.02&&this.sleepBubbles.length<3&&this.sleepBubbles.push({x:this.x+this.facing*12,y:this.baseY-14,vx:this.facing*.3+(Math.random()-.5)*.4,vy:-.6-Math.random()*.4,alpha:.45,scale:.6}))}chooseNextCardAction(t,e){if(this.isScrolling)return;if(this.getFilterPillCollision()&&t.top<620&&Math.random()<.04){this.executeJumpToPill();return}const n=this.getTitleLettersCollision();if(n&&t.top<520&&Math.random()<.04){const l=n.letters.reduce((c,u)=>{const f=(u.left+u.right)/2;return Math.abs(f-this.x)<Math.abs((c.left+c.right)/2-this.x)?u:c},n.letters[0]);this.executeJumpToLetters(l.index);return}if(Math.random()<.16&&this.jumpToStick())return;const s=this.findBestLadderTarget(this.x,this.baseY);if(s&&Math.random()<.2){this.buildLadder(s.topX,s.topY,s.obstacle);return}const a=this.findAdjacentCards(t,e);this.cardsVisitedInSequence=(this.cardsVisitedInSequence||0)+1;const o=e.find(l=>{var u,f,d;return l.id===t.id||!((u=l.cardRef)!=null&&u.isVisible)||!((d=(f=l.cardRef)==null?void 0:f.group)!=null&&d.visible)||l.top<=t.top+60||l.top>this.height+80?!1:Math.min(l.right,t.right)-Math.max(l.left,t.left)>60});if(o&&Math.random()<.45){this.initiateCardToCardJump(t,o);return}if(a.length>0&&Math.random()<.45){const l=a[Math.floor(Math.random()*a.length)];this.initiateCardToCardJump(t,l);return}if(!o&&(this.cardsVisitedInSequence>=2||Math.random()<.35)){this.cardsVisitedInSequence=0,this.executeJumpFromCardToFloor();return}if(Math.random()<.55){const c=(this.attachedObstacle.relX??0)>0?-t.hw+35:t.hw-35;this.patrolTargetRelX=Math.max(-t.hw+26,Math.min(t.hw-26,c)),this.cardExploreSubstate="patrol",this.cardExploreTimer=0;return}const h=Math.random();h<.35?(this.cardExploreSubstate="sitting_edge",this.state="sitting_edge",this.microActionDuration=1.3+Math.random()*.6,this.cardExploreTimer=0):h<.7?(this.cardExploreSubstate="waving",this.state="waving",this.microActionDuration=1.2+Math.random()*.5,this.cardExploreTimer=0):(this.cardExploreSubstate="stretching",this.state="stretching",this.microActionDuration=1.2+Math.random()*.5,this.cardExploreTimer=0)}findReachableCardsFromFloor(){var a,o,h,l;const t=(a=window.__app)==null?void 0:a.gallery,e=Math.abs(((o=t==null?void 0:t.scroll)==null?void 0:o.velocity)||0),i=Math.abs((((h=t==null?void 0:t.scroll)==null?void 0:h.target)||0)-(((l=t==null?void 0:t.scroll)==null?void 0:l.current)||0));return this.isScrolling||e>.04||i>1.5?[]:this.baseY<-50||this.baseY>this.height+50||this.x<-40||this.x>this.width+40?[]:((t==null?void 0:t.getCardScreenRects())||[]).filter(c=>{var f;if(!((f=c.cardRef)!=null&&f.isVisible)||c.right<50||c.left>this.width-50||c.bottom<40||c.top>this.height-20)return!1;const u=this.baseY-c.top;return u>20&&u<=650})}initiateSeekCard(t){if(this.targetCardId=t.id,this.intendedTargetCardId=t.id,this.aiTimer=0,this.stuckTimer=0,this.isSkidding=!1,this.x>=t.left-25&&this.x<=t.right+25){this.navTargetX=this.x,this.vx=0,this.aiState="prepare_card_launch",this.state="crouch",this.targetScaleY=.68,this.targetScaleX=1.34,this.targetTilt=0,this.facing=t.x>this.x?1:-1;return}this.aiState="navigating_to_card",this.currentAnim="running";const i=45;this.x<t.left?this.navTargetX=Math.max(40,t.left+i):this.x>t.right?this.navTargetX=Math.min(this.width-40,t.right-i):this.navTargetX=this.x}executeJumpToCard(t){var _,g;const i=(((g=(_=window.__app)==null?void 0:_.gallery)==null?void 0:g.getCardScreenRects())||[]).find(p=>p.id===t);if(!i){this.aiState="floor_idle",this.restoreCurrentAnimState();return}this.intendedTargetCardId=t;const n=i.screenXToLocalX(this.x),s=Math.max(-i.hw+35,Math.min(i.hw-35,n)),a=i.getLedgePoint(s),o=a.x,h=a.y,l=this.baseY+this.y,c=this.jumpArcBonusExtra||0,u=Math.abs(h-l),f=Math.max(50,Math.min(130,u*.12+45+c)),d=this.calculateBallisticJump(this.x,l,o,h,f);this.setFloorCoordinateSpace(),this.state="in_jump",this.aiState="in_smart_jump",this.smartJumpData={targetCardId:t,targetX:o,targetY:h,targetRelX:s,landingLedge:"top"},this.vx=d.vx,this.vy=d.vy,this.targetScaleY=1.38,this.targetScaleX=.76,this.facing=d.vx>=0?1:-1,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex()}findAdjacentCards(t,e){return e.filter(i=>{var a;if(i.id===t.id||!((a=i.cardRef)!=null&&a.isVisible)||i.bottom<40||i.top>this.height-30||i.right<40||i.left>this.width-40)return!1;const n=Math.abs(i.x-t.x),s=Math.abs(i.top-t.top);return n<750&&s<480})}initiateCardToCardJump(t,e){var i;this.targetCardId=e.id,this.intendedTargetCardId=e.id,this.aiState="navigating_to_edge",this.aiTimer=0,this.stuckTimer=0,Math.abs(e.x-t.x)<50?this.navTargetRelX=Math.max(-t.hw+35,Math.min(t.hw-35,((i=this.attachedObstacle)==null?void 0:i.relX)??0)):e.x>t.x?this.navTargetRelX=t.hw-28:this.navTargetRelX=-t.hw+28}executeCardToCardJump(t){var d,_;const i=(((_=(d=window.__app)==null?void 0:d.gallery)==null?void 0:_.getCardScreenRects())||[]).find(g=>g.id===t);if(!i){this.aiState="on_card",this.cardExploreSubstate="survey";return}this.intendedTargetCardId=t;const n=this.x<i.x?-i.hw+45:i.hw-45,s=i.getLedgePoint(n),a=s.x,o=s.y,h=this.baseY+this.y,l=this.jumpArcBonusExtra||0,c=Math.abs(a-this.x),u=Math.max(50,Math.min(130,c*.14+40+l)),f=this.calculateBallisticJump(this.x,h,a,o,u);this.setFloorCoordinateSpace(),this.state="in_jump",this.aiState="in_smart_jump",this.smartJumpData={targetCardId:t,targetX:a,targetY:o,targetRelX:n,landingLedge:"top"},this.vx=f.vx,this.vy=f.vy,this.targetScaleY=1.36,this.targetScaleX=.76,this.facing=f.vx>=0?1:-1,Math.abs(f.vx)>3.2&&(this.targetRotation=this.rotation+this.facing*Math.PI*2),this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex()}updateLettersAI(t,e,i){const n=this.getTitleLettersCollision();if(!n||!n.letters.length){this.detachFromObstacle(2);return}if(this.userIdleTime>=this.userIdleThreshold)this.lettersExploreSubstate!=="rest"&&this.state!=="crouch"&&this.state!=="in_jump"&&(this.lettersExploreSubstate="rest",this.lettersExploreTimer=0,this.currentAnim="lying",this.state="lying",this.spawnLandingDust());else if(this.lettersExploreSubstate==="rest"||this.state==="lying"){this.wakeUp();return}if(this.lettersExploreTimer+=t,this.lettersExploreSubstate==="sitting_edge"||this.lettersExploreSubstate==="inspecting"||this.lettersExploreSubstate==="waving"||this.lettersExploreSubstate==="stretching"||this.lettersExploreSubstate==="balancing"){this.state=this.lettersExploreSubstate,this.vx=0,this.lettersExploreSubstate==="inspecting"?this.targetTilt=this.facing*.18:this.lettersExploreSubstate==="stretching"?(this.targetScaleY=1.15,this.targetScaleX=.9,this.targetTilt=-this.facing*.08):this.lettersExploreSubstate==="balancing"?(this.targetTilt=Math.sin(performance.now()*.003)*.09,this.targetScaleX=1,this.targetScaleY=1):(this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1),this.idleBlinkTimer+=t,this.idleBlinkTimer>2.2&&(this.isBlinking=!0,this.idleBlinkTimer>2.38&&(this.isBlinking=!1,this.idleBlinkTimer=0)),this.lettersExploreTimer>=(this.microActionDuration||4)&&(this.lettersExploreTimer=0,this.lettersExploreSubstate="survey",this.state="standing",this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1);return}if(this.lettersExploreSubstate==="survey")this.state="standing",this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1,this.idleBlinkTimer+=t,this.idleBlinkTimer>2.2&&(this.isBlinking=!0,this.idleBlinkTimer>2.38&&(this.isBlinking=!1,this.idleBlinkTimer=0,Math.random()<.35&&(this.facing*=-1))),this.lettersExploreTimer>=2.4+Math.random()*1.8&&(this.lettersExploreTimer=0,this.chooseNextLettersAction(n));else if(this.lettersExploreSubstate==="patrol"){if(this.lettersPatrolTargetX===void 0||this.lettersPatrolTargetX===null){this.chooseNextLettersAction(n);return}const s=this.lettersPatrolTargetX-this.x;if(Math.abs(s)<5){this.x=this.lettersPatrolTargetX;const a=n.getLedgeYAtScreenX(this.x);this.baseY=a,this.lettersExploreSubstate="survey",this.lettersExploreTimer=0,this.state="standing",this.targetTilt=0}else{this.facing=s>0?1:-1,this.state="running",this.currentSpeed=1.4,this.x+=this.facing*this.currentSpeed,this.x=Math.max(n.left+8,Math.min(n.right-8,this.x));const a=n.getLedgeYAtScreenX(this.x);Math.abs(a-this.baseY)<.5?this.baseY=a:this.baseY+=(a-this.baseY)*.45,this.targetTilt=this.facing*.1;const o=this.currentSpeed*.052;this.runCycle+=o;const h=Math.sin(this.runCycle);h*this.lastStepPhase<0&&this.spawnFootstepDust(),this.lastStepPhase=h}}else this.lettersExploreSubstate==="rest"&&(this.state="lying",this.targetTilt=0,Math.random()<.02&&this.sleepBubbles.length<3&&this.sleepBubbles.push({x:this.x+this.facing*12,y:this.baseY-14,vx:this.facing*.3+(Math.random()-.5)*.4,vy:-.6-Math.random()*.4,alpha:.45,scale:.6}))}chooseNextLettersAction(t){var a,o;if(this.isScrolling)return;const i=(((o=(a=window.__app)==null?void 0:a.gallery)==null?void 0:o.getCardScreenRects())||[]).filter(h=>{var l;return((l=h.cardRef)==null?void 0:l.isVisible)&&h.top>160&&h.top<this.height-40});if(i.length>0&&Math.random()<.4){const h=i.reduce((l,c)=>Math.abs(c.x-this.x)<Math.abs(l.x-this.x)?c:l,i[0]);this.executeJumpFromLettersToCard(h.id);return}if(Math.random()<.35){this.executeJumpFromLettersToFloor();return}if(this.getFilterPillCollision()&&Math.random()<.25){this.executeJumpFromLettersToPill();return}if(Math.random()<.6){const h=t.letters[Math.floor(Math.random()*t.letters.length)];this.lettersPatrolTargetX=(h.left+h.right)/2,this.lettersExploreSubstate="patrol",this.lettersExploreTimer=0;return}const s=Math.random();s<.4?(this.lettersExploreSubstate="sitting_edge",this.state="sitting_edge",this.microActionDuration=1.3+Math.random()*.6,this.lettersExploreTimer=0):s<.7?(this.lettersExploreSubstate="waving",this.state="waving",this.microActionDuration=1.2+Math.random()*.5,this.lettersExploreTimer=0):(this.lettersExploreSubstate="stretching",this.state="stretching",this.microActionDuration=1.2+Math.random()*.5,this.lettersExploreTimer=0)}executeJumpFromLettersToCard(t){var u,f;const e=((f=(u=window.__app)==null?void 0:u.gallery)==null?void 0:f.getCardScreenRects())||[],i=typeof t=="number"&&t<e.length?e[t]:e.find(d=>d.id===t);if(!i)return this.lettersExploreSubstate="survey",!1;const n=0,s=i.getLedgePoint(n),a=s.x,o=s.y,h=this.baseY+this.y,c=this.calculateBallisticJump(this.x,h,a,o,45);return this.setFloorCoordinateSpace(),this.facing=a>this.x?1:-1,this.state="in_jump",this.aiState="in_smart_jump",this.smartJumpData={targetCardId:i.id,targetX:a,targetY:o,targetRelX:n,landingLedge:"top"},this.vx=c.vx,this.vy=c.vy,this.targetScaleY=1.38,this.targetScaleX=.76,this.targetTilt=this.facing*.22,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),!0}executeJumpToLetters(t=0){const e=this.getTitleLettersCollision();if(!e||!e.letters.length)return!1;const i=t>=0&&t<e.letters.length?e.letters[t]:e.letters[Math.floor(Math.random()*e.letters.length)],n=(i.left+i.right)/2,s=i.top,a=this.baseY+this.y,o=Math.abs(s-a),h=Math.max(50,Math.min(140,o*.15+40)),l=this.calculateBallisticJump(this.x,a,n,s,h);return this.setFloorCoordinateSpace(),this.facing=n>this.x?1:-1,this.state="in_jump",this.aiState="in_smart_jump",this.smartJumpData={targetType:"letters",targetX:n,targetY:s,letterIndex:i.index},this.vx=l.vx,this.vy=l.vy,this.targetScaleY=1.38,this.targetScaleX=.76,this.targetTilt=this.facing*.22,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),!0}executeJumpFromLettersToPill(){const t=this.getFilterPillCollision();if(!t)return this.lettersExploreSubstate="survey",!1;const e=t.left+t.radius+15,i=t.right-t.radius-15,n=Math.max(e,Math.min(i,this.x+(Math.random()-.5)*120)),s=t.top,a=this.baseY+this.y,h=this.calculateBallisticJump(this.x,a,n,s,40);return this.setFloorCoordinateSpace(),this.facing=n>this.x?1:-1,this.state="in_jump",this.aiState="in_smart_jump",this.smartJumpData={targetType:"pill",targetX:n,targetY:s},this.vx=h.vx,this.vy=h.vy,this.targetScaleY=1.38,this.targetScaleX=.76,this.targetTilt=this.facing*.22,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),!0}executeJumpToPill(){const t=this.getFilterPillCollision();if(!t)return!1;const e=t.left+t.radius+15,i=t.right-t.radius-15,n=Math.max(e,Math.min(i,this.x+(Math.random()-.5)*80)),s=t.top,a=this.baseY+this.y,o=Math.abs(s-a),h=Math.max(50,Math.min(130,o*.15+40)),l=this.calculateBallisticJump(this.x,a,n,s,h);return this.setFloorCoordinateSpace(),this.facing=n>this.x?1:-1,this.state="in_jump",this.aiState="in_smart_jump",this.smartJumpData={targetType:"pill",targetX:n,targetY:s},this.vx=l.vx,this.vy=l.vy,this.targetScaleY=1.38,this.targetScaleX=.76,this.targetTilt=this.facing*.22,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),!0}executeJumpFromPillToCard(t){var u,f;const e=((f=(u=window.__app)==null?void 0:u.gallery)==null?void 0:f.getCardScreenRects())||[],i=typeof t=="number"&&t<e.length?e[t]:e.find(d=>d.id===t);if(!i)return this.pillExploreSubstate="survey",!1;const n=this.x<i.x?-i.hw+50:i.hw-50,s=i.getLedgePoint(n),a=s.x,o=s.y,h=this.baseY+this.y,c=this.calculateBallisticJump(this.x,h,a,o,45);return this.setFloorCoordinateSpace(),this.facing=a>this.x?1:-1,this.state="in_jump",this.aiState="in_smart_jump",this.smartJumpData={targetCardId:i.id,targetX:a,targetY:o,targetRelX:n,landingLedge:"top"},this.vx=c.vx,this.vy=c.vy,this.targetScaleY=1.38,this.targetScaleX=.76,this.targetTilt=this.facing*.22,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),!0}executeJumpFromCardToFloor(t=null){var c,u;const e=((u=(c=window.__app)==null?void 0:c.gallery)==null?void 0:u.getCardScreenRects())||[],i=e.find(f=>{var d;return f.id===((d=this.attachedObstacle)==null?void 0:d.cardId)});if(i){const f=e.find(d=>{var g,p,m;return d.id===i.id||!((g=d.cardRef)!=null&&g.isVisible)||!((m=(p=d.cardRef)==null?void 0:p.group)!=null&&m.visible)||d.top<=i.top+60||d.top>this.height+80?!1:Math.min(d.right,i.right)-Math.max(d.left,i.left)>60});if(f)return this.initiateCardToCardJump(i,f)}let n;t==="left"||!t&&this.x<this.width/2?n=i?Math.max(65,i.left-75-Math.random()*40):Math.max(65,this.x-140):n=i?Math.min(this.width-65,i.right+75+Math.random()*40):Math.min(this.width-65,this.x+140),n=Math.max(65,Math.min(this.width-65,n));const s=this.floorY,a=this.baseY+this.y,o=Math.abs(s-a),h=Math.max(30,Math.min(75,o*.08+25)),l=this.calculateBallisticJump(this.x,a,n,s,h);return this.setFloorCoordinateSpace(),this.facing=n>this.x?1:-1,this.state="in_jump",this.aiState="in_smart_jump",this.smartJumpData={targetType:"floor",targetX:n,targetY:s},this.vx=l.vx,this.vy=l.vy,this.targetScaleY=1.38,this.targetScaleX=.76,this.targetTilt=this.facing*.22,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),!0}executeJumpFromPillToFloor(t=null){const e=t==="left"||t===null&&(this.x>this.width/2?Math.random()<.6:Math.random()<.4)?Math.max(70,this.x-140-Math.random()*100):Math.min(this.width-70,this.x+140+Math.random()*100),i=this.floorY,n=this.baseY+this.y,s=Math.abs(i-n),a=Math.max(35,Math.min(80,s*.08+30)),o=this.calculateBallisticJump(this.x,n,e,i,a);return this.setFloorCoordinateSpace(),this.facing=e>this.x?1:-1,this.state="in_jump",this.aiState="in_smart_jump",this.smartJumpData={targetType:"floor",targetX:e,targetY:i},this.vx=o.vx,this.vy=o.vy,this.targetScaleY=1.38,this.targetScaleX=.76,this.targetTilt=this.facing*.22,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),!0}executeJumpFromLettersToFloor(t=null){const e=t==="left"||t===null&&(this.x>this.width/2?Math.random()<.6:Math.random()<.4)?Math.max(70,this.x-140-Math.random()*100):Math.min(this.width-70,this.x+140+Math.random()*100),i=this.floorY,n=this.baseY+this.y,s=Math.abs(i-n),a=Math.max(40,Math.min(90,s*.08+35)),o=this.calculateBallisticJump(this.x,n,e,i,a);return this.setFloorCoordinateSpace(),this.facing=e>this.x?1:-1,this.state="in_jump",this.aiState="in_smart_jump",this.smartJumpData={targetType:"floor",targetX:e,targetY:i},this.vx=o.vx,this.vy=o.vy,this.targetScaleY=1.38,this.targetScaleX=.76,this.targetTilt=this.facing*.22,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),!0}startFloorRunning(t=null){this.aiState="floor_idle",this.floorSubstate="running_free",this.state="running",this.currentAnim="running",this.floorRunDuration=2.4+Math.random()*1.8,this.floorRunTimer=0,this.floorHopTimer=0,this.isSkidding=!1,t!==null?this.floorRunTargetX=Math.max(85,Math.min(this.width-85,t)):this.x<this.width*.4?this.floorRunTargetX=this.width-85-Math.random()*120:this.x>this.width*.6?this.floorRunTargetX=85+Math.random()*120:this.floorRunTargetX=Math.random()<.5?85+Math.random()*100:this.width-85-Math.random()*100,this.facing=this.floorRunTargetX>this.x?1:-1,this.currentSpeed=2.1+Math.random()*.5,this.targetTilt=this.facing*.12}grabStick(t,e,i){var d,_;if(this.isDragging)return;const n=(d=window.__app)==null?void 0:d.gallery;if(!n||!n.getSticksScreenSegments)return;const s=n.getSticksScreenSegments(),a=s.find(g=>g.stick===t)||s[0];if(!a)return;const o=a.x2-a.cx,h=a.y2-a.cy,l=o*o+h*h;let c=0;l>.001&&(c=((e-a.cx)*o+(i-a.cy)*h)/l),c=Math.max(-.65,Math.min(.65,c));const u=Math.random()<.6?"hang":"sit";this.attachedStick={stick:t,relT:c,mode:u,timer:0,duration:3.2+Math.random()*1.6,swingAmp:.58+Math.random()*.22},this.state=u==="hang"?"swinging_stick_hang":"swinging_stick_sit",this.aiState=this.state,this.attachedObstacle=null,this.smartJumpData=null,this.stickGrabCooldown=1,this.swingTimer=0,this.vy=0,this.vx=0,this.targetScaleX=1,this.targetScaleY=1,this.targetRotation=0,this.rotation=0;const f=this.facing||1;t.applyImpulse?t.applyImpulse(f*1.8,-2.2,(Math.random()-.5)*.12):(t.velocity.x+=f*1.8,t.velocity.y-=2.2),(_=U.playWoodClack)==null||_.call(U,.09),this.spawnLandingDust(),this.updateCanvasZIndex()}updateStickAI(t){var f,d,_;if(!this.attachedStick)return;const e=(f=window.__app)==null?void 0:f.gallery,n=(((d=e==null?void 0:e.getSticksScreenSegments)==null?void 0:d.call(e))||[]).find(g=>g.stick===this.attachedStick.stick);if(!n){this.dismountFromStick();return}const s=this.attachedStick.stick,a=n.x2-n.cx,o=n.y2-n.cy,h=Math.atan2(o,a),l=n.cx+a*this.attachedStick.relT,c=n.cy+o*this.attachedStick.relT;this.swingTimer+=t,this.attachedStick.timer+=t,s.velocity.y-=.06*t*60;const u=4.2;this.swingAngle=Math.sin(this.swingTimer*u)*this.attachedStick.swingAmp,s.rotSpeed+=Math.sin(this.swingAngle)*25e-5,s.velocity.x+=Math.cos(this.swingAngle)*.025,this.attachedStick.mode==="hang"?(this.state="swinging_stick_hang",this.x=l-Math.sin(this.swingAngle)*16,this.baseY=c+Math.cos(this.swingAngle)*36,this.y=0,this.tilt=this.swingAngle*.85+h*.35):(this.state="swinging_stick_sit",this.x=l,this.baseY=c+8,this.y=0,this.tilt=h+Math.sin(this.swingTimer*3.5)*.18),Math.abs(this.swingAngle)>.45&&Math.random()<.04&&((_=U.playWoodClack)==null||_.call(U,.035)),this.attachedStick.timer>=this.attachedStick.duration&&Math.cos(this.swingTimer*u)>.3&&this.dismountFromStick()}dismountFromStick(){var a,o,h;if(!this.attachedStick)return;const t=this.attachedStick.stick;this.attachedStick=null,this.stickGrabCooldown=1;const i=(Math.cos(this.swingTimer*4.2)>=0?this.facing:-this.facing)||1;this.facing=i,t.applyImpulse?t.applyImpulse(-i*2,2.5,(Math.random()-.5)*.15):(t.velocity.x-=i*2,t.velocity.y+=2.5),(a=U.playHop)==null||a.call(U),this.spawnLandingDust();const s=(((h=(o=window.__app)==null?void 0:o.gallery)==null?void 0:h.getCardScreenRects())||[]).find(l=>{var c;return(c=l.cardRef)!=null&&c.isVisible?this.x>=l.left-40&&this.x<=l.right+40&&l.top>this.baseY-20&&l.top<this.height-40:!1});if(this.setFloorCoordinateSpace(),this.state="in_jump",this.aiState="in_smart_jump",s){const l=Math.max(-s.hw+30,Math.min(s.hw-30,s.screenXToLocalX(this.x+i*60))),c=s.getLedgePoint(l);this.smartJumpData={targetType:"card",targetCardId:s.id,targetRelX:l,targetX:c.x,targetY:c.y};const u=this.calculateBallisticJump(this.x,this.baseY,c.x,c.y,35);this.vx=u.vx,this.vy=u.vy}else this.smartJumpData={targetType:"floor",targetX:Math.max(80,Math.min(this.width-80,this.x+i*120)),targetY:this.floorY},this.vx=i*(3.8+Math.random()*1.2),this.vy=-6.2;this.targetRotation=this.rotation+i*Math.PI*2,this.targetScaleY=1.35,this.targetScaleX=.78,this.updateCanvasZIndex()}jumpToStick(t=null){var u;if(this.isDragging||this.attachedStick)return!1;const e=(u=window.__app)==null?void 0:u.gallery;if(!e||!e.getSticksScreenSegments)return!1;const i=e.getSticksScreenSegments();if(!i||i.length===0)return!1;let n=null;if(t&&(n=i.find(f=>f.stick===t)),!n){const f=this.baseY+this.y,d=i.filter(_=>{const g=f-_.cy,p=Math.abs(_.cx-this.x);return _.cy>70&&_.cy<this.height-70&&p<480&&g>-60&&g<420});d.length>0&&(d.sort((_,g)=>Math.hypot(_.cx-this.x,_.cy-f)-Math.hypot(g.cx-this.x,g.cy-f)),n=d[0])}if(!n)return!1;this.state==="lying"&&this.wakeUp();const s=this.baseY+this.y,a=n.cx,o=n.cy,h=Math.abs(o-s),l=Math.max(35,Math.min(80,h*.12+30)),c=this.calculateBallisticJump(this.x,s,a,o,l);return this.setFloorCoordinateSpace(),this.facing=a>this.x?1:-1,this.state="in_jump",this.aiState="in_smart_jump",this.smartJumpData={targetType:"stick",targetStick:n.stick,targetX:a,targetY:o},this.vx=c.vx,this.vy=c.vy,this.targetScaleY=1.38,this.targetScaleX=.76,this.targetTilt=this.facing*.22,this.spawnLandingDust(),U==null||U.playHop(),this.updateCanvasZIndex(),!0}spawnWoodChips(t,e,i=4){const n=["#3d2b1f","#5c4033","#8b5a2b","#2b211a"];for(let s=0;s<i;s++){const a=Math.random()*Math.PI*2,o=1.2+Math.random()*2.8;this.particles.push({x:t+(Math.random()-.5)*12,y:e+(Math.random()-.5)*8,vx:Math.cos(a)*o,vy:-Math.abs(Math.sin(a)*o)-1.2,radius:1.2+Math.random()*1.5,alpha:.9,decay:.035+Math.random()*.025,color:n[Math.floor(Math.random()*n.length)]})}}findBestLadderTarget(t,e){var h,l,c;const i=((l=(h=window.__app)==null?void 0:h.gallery)==null?void 0:l.getCardScreenRects())||[],n=(c=this.attachedObstacle)==null?void 0:c.cardId,s=280,a=115,o=i.filter(u=>{var _,g,p;if(!((_=u.cardRef)!=null&&_.isVisible)||!((p=(g=u.cardRef)==null?void 0:g.group)!=null&&p.visible)||n&&u.id===n||u.top<a)return!1;const f=e-u.top;return f<45||f>s?!1:Math.abs((u.left+u.right)/2-t)<360});if(o.length>0){o.sort((_,g)=>{const p=Math.hypot((_.left+_.right)/2-t,(e-_.top)*.75),m=Math.hypot((g.left+g.right)/2-t,(e-g.top)*.75);return p-m});const u=o[0],f=Math.max(-u.hw+30,Math.min(u.hw-30,u.screenXToLocalX(t))),d=u.getLedgePoint(f);return d.y<a?null:{topX:d.x,topY:d.y,obstacle:{id:`card-${u.id}-top`,cardId:u.id,type:"card",relX:f,cardRef:u.cardRef}}}return null}buildLadder(t=null,e=null,i=null){var m,S,v,x,E,y,T,R,M;if(this.isDragging||this.state==="in_jump"||this.state==="falling"||this.aiState==="pocket_ladder_deploy"||this.aiState==="climbing_ladder")return!1;if((this.state==="lying"||this.currentAnim==="lying")&&this.wakeUp(),this.attachedStick)return this.dismountFromStick(),!1;let n=this.x,s=this.baseY,a=null,o="floor";this.attachedObstacle&&this.attachedObstacle.type==="card"?(o="card",a={...this.attachedObstacle},s=this.baseY,n=this.x):(o="floor",a=null,s=this.baseY,n=this.x);let h=t,l=e,c=i;if(t!==null&&e!==null&&!c){const b=((S=(m=window.__app)==null?void 0:m.gallery)==null?void 0:S.getCardScreenRects())||[],I=(v=this.attachedObstacle)==null?void 0:v.cardId,L=b.find(B=>{var P,F,V;return!((P=B.cardRef)!=null&&P.isVisible)||!((V=(F=B.cardRef)==null?void 0:F.group)!=null&&V.visible)||I&&B.id===I?!1:t>=B.left-25&&t<=B.right+25&&e>=B.top-30&&e<=B.bottom+30});if(L){const B=Math.max(-L.hw+30,Math.min(L.hw-30,L.screenXToLocalX(t))),P=L.getLedgePoint(B);h=P.x,l=P.y,c={id:`card-${L.id}-top`,cardId:L.id,type:"card",relX:B,cardRef:L.cardRef}}}if(l==null){const b=this.findBestLadderTarget(n,s);if(!b)return!1;h=b.topX,l=b.topY,c=b.obstacle}if(h==null&&(h=n),this.facing=h>=n?1:-1,n=Math.max(50,Math.min(this.width-50,n+this.facing*14)),o==="card"&&a){const I=(((E=(x=window.__app)==null?void 0:x.gallery)==null?void 0:E.getCardScreenRects())||[]).find(L=>L.id===a.cardId);if(I){a.relX=I.screenXToLocalX(n);const L=I.getLedgePoint(a.relX);n=L.x,s=L.y}}if(l>=s-45||s-l>280||l<115)return!1;h=Math.max(50,Math.min(this.width-50,h));const f=h-n,d=l-s,_=Math.hypot(f,d),g=Math.max(5,Math.min(18,Math.round(_/16))),p={id:`ladder-${Date.now()}-${Math.floor(Math.random()*1e3)}`,baseType:o,baseObstacle:a,baseX:n,bottomX:n,bottomY:s,basePageY:s+(((R=(T=(y=window.__app)==null?void 0:y.gallery)==null?void 0:T.scroll)==null?void 0:R.current)||0),targetObstacle:c,topX:h,topY:l,initialDx:f,initialDy:d,fixedHeight:_,fixedAngle:Math.atan2(d,f),height:_,width:24,rungsCount:g,progress:0,state:"deploying",deployTimer:0,alpha:1,vanishingTimer:0,vanishingDuration:.16};return this.ladders=[p],this.currentLadder=p,this.aiState="pocket_ladder_deploy",this.state="pocket_ladder_deploy",this.deployTimer=0,this.climbProgress=0,this.climbTimer=0,this.lastDeployRung=0,this.lastClimbRung=0,this.vx=0,this.vy=0,(M=U.playHop)==null||M.call(U,.08),this.updateCanvasZIndex(),p}updateLadderAI(t){var i,n,s,a,o,h,l,c,u,f,d,_,g,p,m,S,v;if(!this.currentLadder){this.attachedObstacle?(this.aiState="on_card",this.state="standing"):(this.aiState="floor_idle",this.state="standing",this.baseY=this.floorY,this.y=0);return}const e=this.currentLadder;if(this.aiState==="pocket_ladder_deploy"||this.aiState==="building_ladder"){this.deployTimer+=t,this.state="pocket_ladder_deploy";const x=.7;if(this.deployTimer<.22)e.progress=0,this.targetTilt=this.facing*.08;else{const E=Math.min(1,(this.deployTimer-.22)/.48);e.progress=E,this.targetTilt=-this.facing*.06;const y=Math.floor(E*e.rungsCount);if(y>(this.lastDeployRung||0)){this.lastDeployRung=y,(i=U.playWoodClack)==null||i.call(U,.06);const T=e.bottomX+(e.topX-e.bottomX)*E,R=e.bottomY+(e.topY-e.bottomY)*E;Math.random()<.4&&this.spawnWoodChips(T,R,1)}}this.deployTimer>=x&&(e.progress=1,e.state="standing",(n=U.playWoodClack)==null||n.call(U,.14),this.spawnLandingDust(e.bottomX,e.bottomY),this.aiState="climbing_ladder",this.state="climbing_ladder",this.climbProgress=0,this.climbTimer=0,this.lastClimbRung=0,this.targetScaleY=1,this.targetScaleX=1,this.targetTilt=0,this.attachedObstacle=null);return}if(this.aiState==="climbing_ladder"){this.climbTimer+=t,this.state="climbing_ladder";const x=165/Math.max(60,e.height);this.climbProgress+=x*t;const E=Math.min(1,this.climbProgress);this.x=e.bottomX+(e.topX-e.bottomX)*E,this.baseY=e.bottomY+(e.topY-e.bottomY)*E,this.y=0,this.pageBaseY=this.baseY+(((o=(a=(s=window.__app)==null?void 0:s.gallery)==null?void 0:a.scroll)==null?void 0:o.current)||0);const y=Math.floor(E*e.rungsCount);if(y>this.lastClimbRung&&(this.lastClimbRung=y,(h=U.playWoodClack)==null||h.call(U,.04),Math.random()<.25&&this.spawnWoodChips(this.x,this.baseY,1)),this.climbProgress>=1){this.x=e.topX,this.baseY=e.topY;const T=((c=(l=window.__app)==null?void 0:l.gallery)==null?void 0:c.getCardScreenRects())||[];let R=null,M=0;if(e.targetObstacle&&e.targetObstacle.type==="card"){const b=T.find(I=>I.id===e.targetObstacle.cardId);if(b&&((u=b.cardRef)!=null&&u.isVisible)){const I=b.screenXToLocalX(this.x),L=b.getLedgePoint(I);Math.abs(L.y-this.baseY)<48&&this.x>=b.left-20&&this.x<=b.right+20&&(R=b,M=I)}}if(!R){for(const b of T)if((f=b.cardRef)!=null&&f.isVisible&&this.x>=b.left-20&&this.x<=b.right+20){const I=b.screenXToLocalX(this.x),L=b.getLedgePoint(I);if(Math.abs(L.y-this.baseY)<48){R=b,M=I;break}}}if(R)this.attachedObstacle={id:`card-${R.id}-top`,cardId:R.id,type:"card",relX:M,cardRef:R.cardRef},this.aiState="on_card",this.state="standing",this.cardExploreSubstate="survey",this.cardExploreTimer=0,this.cardsVisitedInSequence=0,this.spawnLandingDust(this.x,this.baseY),(d=U.playHop)==null||d.call(U),this.triggerLadderDisappear(e);else if(e.targetObstacle&&e.targetObstacle.type==="pill"){const b=this.getFilterPillCollision();b&&Math.abs(b.top-this.baseY)<45?(this.attachedObstacle=e.targetObstacle,this.aiState="on_pill",this.state="standing",this.pillExploreSubstate="survey",this.pillExploreTimer=0,this.spawnLandingDust(this.x,this.baseY),(_=U.playHop)==null||_.call(U),this.triggerLadderDisappear(e)):this.dismountToFloor(e)}else if(e.targetObstacle&&e.targetObstacle.type==="letters"){const b=this.getTitleLettersCollision();b&&Math.abs(b.top-this.baseY)<45?(this.attachedObstacle=e.targetObstacle,this.aiState="on_letters",this.state="standing",this.lettersExploreSubstate="survey",this.lettersExploreTimer=0,this.spawnLandingDust(this.x,this.baseY),(g=U.playHop)==null||g.call(U),this.triggerLadderDisappear(e)):this.dismountToFloor(e)}else e.targetObstacle?this.dismountToFloor(e):(this.aiState="sitting_ladder_top",this.state="sitting_ladder_top",this.ladderPerchTimer=0,this.targetTilt=0)}return}if(this.aiState==="sitting_ladder_top"){if(this.ladderPerchTimer+=t,this.state="sitting_ladder_top",this.x=e.topX,this.baseY=e.topY,this.y=0,this.pageBaseY=this.baseY+(((S=(m=(p=window.__app)==null?void 0:p.gallery)==null?void 0:m.scroll)==null?void 0:S.current)||0),this.ladderPerchTimer>.6&&this.ladderPerchTimer<1.9?this.isWaving=!0:this.isWaving=!1,this.ladderPerchTimer>=2.4){const x=this.x>this.width/2?-1:1;this.facing=x,this.setFloorCoordinateSpace(),this.state="in_jump",this.aiState="in_smart_jump",this.smartJumpData={targetType:"floor",targetX:Math.max(80,Math.min(this.width-80,this.x+x*110)),targetY:this.floorY},this.vx=x*2.8,this.vy=-4.2,this.targetRotation=this.rotation+x*Math.PI*2,(v=U.playHop)==null||v.call(U),this.spawnLandingDust(this.x,this.baseY),this.triggerLadderDisappear(e)}return}}dismountToFloor(t){var i;const e=this.facing||1;this.setFloorCoordinateSpace(),this.state="in_jump",this.aiState="in_smart_jump",this.smartJumpData={targetType:"floor",targetX:Math.max(80,Math.min(this.width-80,this.x+e*60)),targetY:this.floorY},this.vx=e*2.2,this.vy=-3.5,this.targetRotation=this.rotation+e*Math.PI*2,(i=U.playHop)==null||i.call(U),this.spawnLandingDust(this.x,this.baseY),this.triggerLadderDisappear(t)}triggerLadderDisappear(t){var e;t&&(t.state="vanishing",t.vanishingTimer=0,this.spawnWoodChips(t.bottomX,t.bottomY,4),this.spawnWoodChips(t.topX,t.topY,4),this.spawnLandingDust(t.bottomX,t.bottomY),(e=U.playHop)==null||e.call(U,.08),this.currentLadder===t&&(this.currentLadder=null))}updateLadders(t){var i,n,s,a,o,h,l;const e=((n=(i=window.__app)==null?void 0:i.gallery)==null?void 0:n.getCardScreenRects())||[];for(let c=this.ladders.length-1;c>=0;c--){const u=this.ladders[c];if(u.baseType==="card"&&((s=u.baseObstacle)!=null&&s.cardId)){const f=e.find(d=>d.id===u.baseObstacle.cardId);if(f&&((a=f.cardRef)!=null&&a.isVisible)){const d=f.getLedgePoint(u.baseObstacle.relX);u.bottomX=d.x,u.bottomY=d.y}}else{const f=((l=(h=(o=window.__app)==null?void 0:o.gallery)==null?void 0:h.scroll)==null?void 0:l.current)||0;u.bottomY=(u.basePageY!==void 0?u.basePageY:this.pageBaseY||this.floorY)-f}u.topX=u.bottomX+u.initialDx,u.topY=u.bottomY+u.initialDy,u.height=u.fixedHeight,u.state==="vanishing"&&(u.vanishingTimer+=t,u.alpha=Math.max(0,1-u.vanishingTimer/u.vanishingDuration),(u.alpha<=.02||u.vanishingTimer>=u.vanishingDuration)&&(this.ladders.splice(c,1),this.currentLadder===u&&(this.currentLadder=null)))}}drawLadders(){for(const t of this.ladders){if(t.alpha<=0)continue;this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(0,95,this.width,this.height-95),this.ctx.clip(),this.ctx.globalAlpha=Math.max(0,Math.min(1,t.alpha));const e=Math.max(0,Math.min(1,t.progress));if(e<=.02){this.ctx.restore();continue}const i=t.bottomX+(t.topX-t.bottomX)*e,n=t.bottomY+(t.topY-t.bottomY)*e,s=i-t.bottomX,a=n-t.bottomY;if(Math.hypot(s,a)<4){this.ctx.restore();continue}const l=Math.atan2(a,s)+Math.PI/2,c=(t.width||24)/2*(t.state==="vanishing"?t.alpha:1),u=Math.cos(l)*c,f=Math.sin(l)*c;this.ctx.fillStyle="rgba(38, 29, 23, 0.22)",this.ctx.beginPath(),this.ctx.ellipse(t.bottomX,t.bottomY,c+5,3,0,0,Math.PI*2),this.ctx.fill(),this.ctx.strokeStyle="#2b211a",this.ctx.fillStyle="#2b211a",this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.lineWidth=3.4,this.ctx.beginPath(),this.ctx.moveTo(t.bottomX-u,t.bottomY-f),this.ctx.lineTo(i-u,n-f),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(t.bottomX+u,t.bottomY+f),this.ctx.lineTo(i+u,n+f),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(i-u,n-f,2.2,0,Math.PI*2),this.ctx.arc(i+u,n+f,2.2,0,Math.PI*2),this.ctx.fill();const d=t.rungsCount||8,_=Math.floor(d*e);this.ctx.lineWidth=2.6;for(let g=1;g<=_;g++){const p=g/(d+1),m=t.bottomX+(t.topX-t.bottomX)*p,S=t.bottomY+(t.topY-t.bottomY)*p;this.ctx.beginPath(),this.ctx.moveTo(m-u-1.2,S-f),this.ctx.lineTo(m+u+1.2,S+f),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(m-u,S-f,1.6,0,Math.PI*2),this.ctx.arc(m+u,S+f,1.6,0,Math.PI*2),this.ctx.fill()}this.ctx.restore()}}updatePillAI(t,e,i){const n=this.getFilterPillCollision();if(!n){this.detachFromObstacle(2);return}if(this.userIdleTime>=this.userIdleThreshold)this.pillExploreSubstate!=="rest"&&this.state!=="crouch"&&this.state!=="in_jump"&&(this.pillExploreSubstate="rest",this.pillExploreTimer=0,this.currentAnim="lying",this.state="lying",this.spawnLandingDust());else if(this.pillExploreSubstate==="rest"||this.state==="lying"){this.wakeUp();return}if(this.pillExploreTimer+=t,this.pillExploreSubstate==="sitting_edge"||this.pillExploreSubstate==="inspecting"||this.pillExploreSubstate==="waving"||this.pillExploreSubstate==="stretching"||this.pillExploreSubstate==="balancing"){this.state=this.pillExploreSubstate,this.vx=0,this.pillExploreSubstate==="inspecting"?this.targetTilt=this.facing*.18:this.pillExploreSubstate==="stretching"?(this.targetScaleY=1.15,this.targetScaleX=.9,this.targetTilt=-this.facing*.08):this.pillExploreSubstate==="balancing"?(this.targetTilt=Math.sin(performance.now()*.003)*.09,this.targetScaleX=1,this.targetScaleY=1):(this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1),this.idleBlinkTimer+=t,this.idleBlinkTimer>2.2&&(this.isBlinking=!0,this.idleBlinkTimer>2.38&&(this.isBlinking=!1,this.idleBlinkTimer=0)),this.pillExploreTimer>=(this.microActionDuration||4)&&(this.pillExploreTimer=0,this.pillExploreSubstate="survey",this.state="standing",this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1);return}if(this.pillExploreSubstate==="survey")this.state="standing",this.targetTilt=0,this.targetScaleX=1,this.targetScaleY=1,this.idleBlinkTimer+=t,this.idleBlinkTimer>2.2&&(this.isBlinking=!0,this.idleBlinkTimer>2.38&&(this.isBlinking=!1,this.idleBlinkTimer=0,Math.random()<.35&&(this.facing*=-1))),this.pillExploreTimer>=2.4+Math.random()*1.8&&(this.pillExploreTimer=0,this.chooseNextPillAction(n));else if(this.pillExploreSubstate==="patrol"){if(this.pillPatrolTargetX===void 0||this.pillPatrolTargetX===null){this.chooseNextPillAction(n);return}const s=this.pillPatrolTargetX-this.x;if(Math.abs(s)<5){this.x=this.pillPatrolTargetX;const a=n.getSurfaceAtScreenX(this.x);this.baseY=a.y,this.pillExploreSubstate="survey",this.pillExploreTimer=0,this.state="standing",this.targetTilt=0}else{this.facing=s>0?1:-1,this.state="running",this.currentSpeed=1.4,this.x+=this.facing*this.currentSpeed;const a=n.getSurfaceAtScreenX(this.x);this.baseY=a.y,this.targetTilt=this.facing*.1;const o=this.currentSpeed*.052;this.runCycle+=o;const h=Math.sin(this.runCycle);h*this.lastStepPhase<0&&this.spawnFootstepDust(),this.lastStepPhase=h}}else this.pillExploreSubstate==="rest"&&(this.state="lying",this.targetTilt=0,Math.random()<.02&&this.sleepBubbles.length<3&&this.sleepBubbles.push({x:this.x+this.facing*12,y:this.baseY-14,vx:this.facing*.3+(Math.random()-.5)*.4,vy:-.6-Math.random()*.4,alpha:.45,scale:.6}))}chooseNextPillAction(t){var a,o;if(this.isScrolling)return;const i=(((o=(a=window.__app)==null?void 0:a.gallery)==null?void 0:o.getCardScreenRects())||[]).filter(h=>{var l;return((l=h.cardRef)==null?void 0:l.isVisible)&&h.top>t.bottom+20&&h.top<this.height-40});if(i.length>0&&Math.random()<.4){const h=i.reduce((l,c)=>Math.abs(c.x-this.x)<Math.abs(l.x-this.x)?c:l,i[0]);this.executeJumpFromPillToCard(h.id);return}if(Math.random()<.35){this.executeJumpFromPillToFloor();return}const n=this.getTitleLettersCollision();if(n&&Math.random()<.15){const h=n.letters.reduce((l,c)=>{const u=(c.left+c.right)/2;return Math.abs(u-this.x)<Math.abs((l.left+l.right)/2-this.x)?c:l},n.letters[0]);this.executeJumpToLetters(h.index);return}if(Math.random()<.6){const h=Math.random()<.2;let l;if(h)l=Math.random()<.5?t.left+t.radius*.3:t.right-t.radius*.3;else{const c=t.left+t.radius+10,u=t.right-t.radius-10;l=c+Math.random()*(u-c)}this.pillPatrolTargetX=l,this.pillExploreSubstate="patrol",this.pillExploreTimer=0;return}const s=Math.random();s<.35?(this.pillExploreSubstate="sitting_edge",this.state="sitting_edge",this.microActionDuration=1.3+Math.random()*.6,this.pillExploreTimer=0):s<.7?(this.pillExploreSubstate="waving",this.state="waving",this.microActionDuration=1.2+Math.random()*.5,this.pillExploreTimer=0):(this.pillExploreSubstate="stretching",this.state="stretching",this.microActionDuration=1.2+Math.random()*.5,this.pillExploreTimer=0)}draw(){var S,v;this.ctx.clearRect(0,0,this.width,this.height);const t="#2b211a";this.sleepBubbles.forEach(x=>{this.ctx.save(),this.ctx.translate(x.x,x.y),this.ctx.scale(x.scale,x.scale),this.ctx.fillStyle=`rgba(50, 40, 32, ${x.alpha})`,this.ctx.font="bold 11px sans-serif",this.ctx.fillText("z",0,0),this.ctx.restore()});const e=Math.max(0,1-Math.abs(this.y)/160);let i=Math.max(5,17-Math.abs(this.y)*.06),n=Math.max(1.8,4.6*e);this.state==="lying"&&(i=23,n=3.6);const s=.24*e;if(this.ctx.save(),this.ctx.translate(this.x,this.baseY),((S=this.attachedObstacle)==null?void 0:S.type)==="card"&&this.surfaceAngle&&this.ctx.rotate(this.surfaceAngle),this.ctx.fillStyle=`rgba(38, 29, 23, ${s})`,this.ctx.beginPath(),this.ctx.ellipse(0,0,i,n,0,0,Math.PI*2),this.ctx.fill(),this.ctx.restore(),this.particles.forEach(x=>{this.ctx.fillStyle=x.color||`rgba(45, 35, 27, ${x.alpha})`,this.ctx.beginPath(),this.ctx.arc(x.x,x.y,x.radius,0,Math.PI*2),this.ctx.fill()}),this.drawLadders(),this.state==="lying"){this.drawLying();return}let a=0,o=0;this.state==="running"?a=-Math.abs(Math.sin(this.runCycle))*3.5:this.state==="standing"||this.state==="pause_running"||this.state==="waving"?a=Math.sin(performance.now()*.004)*1.4:this.state==="sitting_edge"||this.state==="sitting_ladder_top"?(o=11,a=Math.sin(performance.now()*.003)*.8):this.state==="inspecting"?(o=4,a=0):this.state==="balancing"?a=Math.sin(performance.now()*.003)*.9:this.state==="grabbed"?a=0:this.state==="building_ladder"||this.state==="pocket_ladder_deploy"?(o=1,a=0):this.state==="climbing_ladder"?(o=0,a=Math.sin(this.climbTimer*4.8)*1.2):this.state==="swinging_stick_sit"?(o=11,a=0):this.state==="swinging_stick_hang"&&(o=0,a=0);const h=this.baseY+this.y+a;this.ctx.save();const l=this.state==="swinging_stick_hang"?-47:-22+o*.5;this.ctx.translate(this.x,h),((v=this.attachedObstacle)==null?void 0:v.type)==="card"&&this.surfaceAngle&&this.ctx.rotate(this.surfaceAngle),this.ctx.translate(0,l),this.ctx.scale(this.scaleX*this.facing,this.scaleY),this.ctx.rotate(this.rotation+this.tilt*this.facing),this.ctx.translate(0,-l),this.ctx.fillStyle=t,this.ctx.strokeStyle=t,this.ctx.lineCap="round",this.ctx.lineJoin="round";const c=-18+o;if(this.ctx.lineWidth=3.2,this.state==="running"||this.state==="falling"){const x=Math.sin(this.runCycle)*.75,E=-2.5+Math.sin(x)*9.5,y=c+Math.cos(x)*9.5,T=x+Math.max(-.2,Math.cos(this.runCycle))*1.15,R=E+Math.sin(T)*9.5,M=Math.min(0,y+Math.cos(T)*9.5);this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(E,y),this.ctx.lineTo(R,M),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(R+1.5,M-1,3.2,1.8,.2,0,Math.PI*2),this.ctx.fill();const b=Math.sin(this.runCycle+Math.PI)*.75,I=2.5+Math.sin(b)*9.5,L=c+Math.cos(b)*9.5,B=b+Math.max(-.2,Math.cos(this.runCycle+Math.PI))*1.15,P=I+Math.sin(B)*9.5,F=Math.min(0,L+Math.cos(B)*9.5);this.ctx.beginPath(),this.ctx.moveTo(2.5,c),this.ctx.lineTo(I,L),this.ctx.lineTo(P,F),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(P+1.5,F-1,3.2,1.8,.2,0,Math.PI*2),this.ctx.fill()}else if(this.state==="grabbed"){const x=Math.sin(performance.now()*.005)*1.2+Math.max(-3.5,Math.min(3.5,-this.vx*.6));this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(-3.5+x*.5,c+9),this.ctx.lineTo(-2+x*.85,c+17.5),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(-1.5+x*.85,c+17.5,3.2,1.8,.2,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(2.5,c),this.ctx.lineTo(3.5+x*.4,c+8.5),this.ctx.lineTo(4.5+x*.75,c+17),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(5+x*.75,c+17,3.2,1.8,.1,0,Math.PI*2),this.ctx.fill()}else if(this.state==="sitting_edge"){const x=performance.now()*.003;if(this.attachedObstacle){const E=Math.sin(x*3)*2.8,y=Math.sin(x*3+1.2)*2.6;this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(-3,1),this.ctx.lineTo(-2+E,10),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(-1+E,10.5,3,1.7,.25,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(2.5,c),this.ctx.lineTo(3.2,1.5),this.ctx.lineTo(3.8+y,11),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(4.8+y,11.5,3,1.7,.15,0,Math.PI*2),this.ctx.fill()}else{const E=Math.sin(x*2)*.8;this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(3,-3),this.ctx.lineTo(12,-.5),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(13.2,-1.5,3,1.8,-.4,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(2.5,c),this.ctx.lineTo(5.5,-2.5),this.ctx.lineTo(14.5+E,-.5),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(15.8+E,-1.5,3,1.8,-.35,0,Math.PI*2),this.ctx.fill()}}else if(this.state==="inspecting")this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(-6,-6),this.ctx.lineTo(-3.5,0),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(2.5,c),this.ctx.lineTo(6.5,-6),this.ctx.lineTo(4,0),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(-3.5,-1,3.2,1.8,0,0,Math.PI*2),this.ctx.ellipse(4,-1,3.2,1.8,0,0,Math.PI*2),this.ctx.fill();else if(this.state==="balancing"){const x=Math.sin(performance.now()*.0035)*1.5;this.ctx.beginPath(),this.ctx.moveTo(0,c),this.ctx.lineTo(0,0),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(.5,-1,3.4,1.8,0,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(-7.5,c+5+x*.5),this.ctx.lineTo(-6,c-2+x),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(-6,c-2+x,2.8,1.6,-.35,0,Math.PI*2),this.ctx.fill()}else if(this.state==="stretching")this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(-2.5,1),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(2.5,c),this.ctx.lineTo(2.5,1),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(-2.5,1.2,2.6,2,.25,0,Math.PI*2),this.ctx.ellipse(2.5,1.2,2.6,2,.25,0,Math.PI*2),this.ctx.fill();else if(this.state==="skid"||this.state==="crouch"||this.state==="landing_jump")this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(-7,-8),this.ctx.lineTo(-4,0),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(2.5,c),this.ctx.lineTo(7,-8),this.ctx.lineTo(4,0),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(-4,-1,3.2,1.8,0,0,Math.PI*2),this.ctx.ellipse(4,-1,3.2,1.8,0,0,Math.PI*2),this.ctx.fill();else if(this.state==="in_jump"){const x=Math.sin(performance.now()*.012)*3;this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(-4,-8+x),this.ctx.lineTo(-3,2+x),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(2.5,c),this.ctx.lineTo(5,-7-x),this.ctx.lineTo(6,1-x),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(-3,1+x,3.2,1.8,0,0,Math.PI*2)}else if(this.state==="climbing_ladder"){const x=this.climbTimer*4.8,E=Math.sin(x),y=Math.sin(x+Math.PI),T=c+7-Math.max(0,E)*5,R=-3.5-Math.max(0,E)*1.5,M=c+16-Math.max(0,E)*6,b=-3.5;this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(R,T),this.ctx.lineTo(b,M),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(b,M,3,1.8,0,0,Math.PI*2),this.ctx.fill();const I=c+7-Math.max(0,y)*5,L=3.5+Math.max(0,y)*1.5,B=c+16-Math.max(0,y)*6,P=3.5;this.ctx.beginPath(),this.ctx.moveTo(2.5,c),this.ctx.lineTo(L,I),this.ctx.lineTo(P,B),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(P,B,3,1.8,0,0,Math.PI*2),this.ctx.fill()}else if(this.state==="building_ladder"||this.state==="pocket_ladder_deploy")this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(-5.5,c+8),this.ctx.lineTo(-4.5,0),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(2.5,c),this.ctx.lineTo(5.5,c+8),this.ctx.lineTo(5,0),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(-4.5,-.8,3.2,1.8,0,0,Math.PI*2),this.ctx.ellipse(5,-.8,3.2,1.8,0,0,Math.PI*2),this.ctx.fill();else if(this.state==="sitting_ladder_top"){const x=performance.now()*.003,E=Math.sin(x*3.2)*3,y=Math.sin(x*3.2+1.2)*2.8;this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(-3,1),this.ctx.lineTo(-2+E,10.5),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(-1+E,11,3,1.7,.25,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(2.5,c),this.ctx.lineTo(3.2,1.5),this.ctx.lineTo(3.8+y,11.5),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(4.8+y,12,3,1.7,.15,0,Math.PI*2),this.ctx.fill()}else if(this.state==="swinging_stick_hang"){const x=this.swingTimer*4.2,E=Math.sin(x)*5.5,y=Math.sin(x+.4)*4.5;this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(-4+E*.4,c+8),this.ctx.lineTo(-2.5+E+y,c+17),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(-2.5+E+y,c+17.5,3.2,1.8,E*.08,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(2.5,c),this.ctx.lineTo(4+E*.5,c+8),this.ctx.lineTo(5.5+E*1.2+y,c+17),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(5.5+E*1.2+y,c+17.5,3.2,1.8,E*.08,0,Math.PI*2),this.ctx.fill()}else if(this.state==="swinging_stick_sit"){const x=performance.now()*.003,E=Math.sin(x*3.5)*3.5,y=Math.sin(x*3.5+1.2)*3.2;this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(-3,1),this.ctx.lineTo(-2+E,10.5),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(-1+E,11,3,1.7,.25,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(2.5,c),this.ctx.lineTo(3.2,1.5),this.ctx.lineTo(3.8+y,11.5),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(4.8+y,12,3,1.7,.15,0,Math.PI*2),this.ctx.fill()}else this.ctx.beginPath(),this.ctx.moveTo(-2.5,c),this.ctx.lineTo(-2.5,0),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(2.5,c),this.ctx.lineTo(2.5,0),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(-3,-1,3.2,1.8,0,0,Math.PI*2),this.ctx.ellipse(3,-1,3.2,1.8,0,0,Math.PI*2),this.ctx.fill();const u=-35+o,f=17,d=11;this.ctx.beginPath(),this.ctx.roundRect?this.ctx.roundRect(-d/2,u,d,f,4.5):this.ctx.rect(-d/2,u,d,f),this.ctx.fill(),this.ctx.fillStyle="#423328",this.ctx.beginPath(),this.ctx.rect(-d/2-1,u-1.5,d+2,4),this.ctx.fill();const _=this.state==="running"?this.currentSpeed*1.5:this.state==="swinging_stick_hang"?Math.abs(Math.sin(this.swingTimer*4.2))*3.2+1.2:1,g=Math.sin(performance.now()*.016*_)*3.5;this.ctx.strokeStyle="#423328",this.ctx.lineWidth=2.6,this.ctx.beginPath(),this.ctx.moveTo(-d/2,u+1),this.ctx.quadraticCurveTo(-d/2-6,u+1+g,-d/2-12-_*1.2,u+1-g*.8),this.ctx.stroke();const p=-43+o,m=6.5;if(this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc(0,p,m,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1c1511",this.ctx.beginPath(),this.ctx.ellipse(-.5,p-5.5,7.5,3.2,-.22,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.arc(-1.5,p-9,1.2,0,Math.PI*2),this.ctx.fill(),!this.isBlinking){let x=0,E=0;if(this.mouse&&this.mouse.x>0&&!this.isDragging){const M=this.x,b=h+p*this.scaleY,I=(this.mouse.x-M)*this.facing,L=this.mouse.y-b,B=Math.hypot(I,L);B>8&&B<650&&(x=Math.max(-.75,Math.min(.75,I/B*.75)),E=Math.max(-.65,Math.min(.65,L/B*.65)))}(this.state==="looking_up"||this.state==="climbing_ladder"||this.state==="pocket_ladder_deploy")&&(E=-.65,x=.2);const y=this.isFleeing,T=y?2.2:1.6,R=y?2.1:1.5;this.ctx.fillStyle="#fff4ed",this.ctx.beginPath(),this.ctx.ellipse(2.7,p-.5,T,R,0,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1c1511",this.ctx.beginPath(),this.ctx.arc(2.7+x,p-.5+E,y?.95:.75,0,Math.PI*2),this.ctx.fill()}if(this.ctx.strokeStyle=t,this.ctx.lineWidth=2.8,this.state==="running"||this.state==="falling"){const x=Math.sin(this.runCycle)*7.5;this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(8-x*.4,u+10),this.ctx.lineTo(5-x,u+15),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(-8+x*.4,u+10),this.ctx.lineTo(-5+x,u+15),this.ctx.stroke()}else if(this.state==="grabbed"){const x=Math.max(-2.5,Math.min(2.5,-this.vx*.4));this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(7+x*.5,u+10),this.ctx.lineTo(7.5+x,u+16),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(-7+x*.5,u+10),this.ctx.lineTo(-6.5+x,u+16),this.ctx.stroke()}else if(this.state==="sitting_edge")this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(-8.5,u+10),this.ctx.lineTo(-9.5,-1),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(7.5,u+9),this.ctx.lineTo(4.5,-4),this.ctx.stroke();else if(this.state==="inspecting"){const x=Math.sin(performance.now()*.012)*1.5;this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(-7.5,u+10),this.ctx.lineTo(-5.5,-4),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(9.5,u-3),this.ctx.lineTo(5.5+x*.4,p+3.5+x),this.ctx.stroke(),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.ellipse(5.5+x*.4,p+3.5+x,2,1.6,.3,0,Math.PI*2),this.ctx.fill()}else if(this.state==="waving"){this.ctx.beginPath(),this.ctx.moveTo(-4.5,u+3),this.ctx.lineTo(-6.5,u+11),this.ctx.lineTo(-5,u+16),this.ctx.stroke();const x=Math.sin(performance.now()*.012)*5.5;this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(9.5,u-6),this.ctx.lineTo(11.5+x,u-18),this.ctx.stroke(),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.ellipse(12.5+x,u-19,2.6,2.1,x*.05,0,Math.PI*2),this.ctx.fill()}else if(this.state==="stretching"){const x=Math.sin(performance.now()*.02)*.6;this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(-7,u-8),this.ctx.lineTo(-5+x,u-21),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(7,u-8),this.ctx.lineTo(5-x,u-21),this.ctx.stroke(),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc(-5+x,u-22,1.8,0,Math.PI*2),this.ctx.arc(5-x,u-22,1.8,0,Math.PI*2),this.ctx.fill()}else if(this.state==="balancing"){const x=Math.sin(performance.now()*.0035)*3.5;this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(-12,u+4-x),this.ctx.lineTo(-19,u+5-x*1.4),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(12,u+4+x),this.ctx.lineTo(19,u+5+x*1.4),this.ctx.stroke()}else if(this.state==="in_jump")this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(-8,u-6),this.ctx.lineTo(-6,u-15),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(8,u-6),this.ctx.lineTo(6,u-15),this.ctx.stroke();else if(this.state==="crouch"||this.state==="skid")this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(-9,u+9),this.ctx.lineTo(-12,u+14),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(-1,u+9);else if(this.state==="building_ladder"||this.state==="pocket_ladder_deploy")(this.deployTimer||this.buildTimer||0)<.22?(this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(-7,u+7),this.ctx.lineTo(-5,u+10),this.ctx.stroke(),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc(-5,u+10,2,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(8,u+8),this.ctx.lineTo(6,u+13),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(6,u+13,2,0,Math.PI*2),this.ctx.fill(),this.ctx.save(),this.ctx.translate(6,u+13),this.ctx.rotate(.35),this.ctx.strokeStyle="#5c4033",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(-3,-5),this.ctx.lineTo(-3,5),this.ctx.moveTo(3,-5),this.ctx.lineTo(3,5),this.ctx.moveTo(-3,-2),this.ctx.lineTo(3,-2),this.ctx.moveTo(-3,2),this.ctx.lineTo(3,2),this.ctx.stroke(),this.ctx.restore()):(this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(2,u+4),this.ctx.lineTo(7,u+3),this.ctx.stroke(),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc(7,u+3,2,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(8,u+3),this.ctx.lineTo(12,u+2),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(12,u+2,2,0,Math.PI*2),this.ctx.fill());else if(this.state==="climbing_ladder"){const x=this.climbTimer*4.8,E=Math.sin(x+Math.PI),y=Math.sin(x),T=u-6+Math.max(-8,E*8);this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(-9,u-1+E*4),this.ctx.lineTo(-10.5,T),this.ctx.stroke(),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc(-10.5,T,2.2,0,Math.PI*2),this.ctx.fill();const R=u-6+Math.max(-8,y*8);this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(9,u-1+y*4),this.ctx.lineTo(10.5,R),this.ctx.stroke(),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc(10.5,R,2.2,0,Math.PI*2),this.ctx.fill()}else if(this.state==="sitting_ladder_top")if(this.isWaving){this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(-8.5,u+9),this.ctx.lineTo(-10,0),this.ctx.stroke(),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc(-10,0,2,0,Math.PI*2),this.ctx.fill();const x=Math.sin(performance.now()*.012)*5.5;this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(9.5,u-6),this.ctx.lineTo(11.5+x,u-18),this.ctx.stroke(),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.ellipse(12.5+x,u-19,2.6,2.1,x*.05,0,Math.PI*2),this.ctx.fill()}else this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(-8,u+9),this.ctx.lineTo(-9.5,0),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(8,u+9),this.ctx.lineTo(9.5,0),this.ctx.stroke(),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc(-9.5,0,2,0,Math.PI*2),this.ctx.arc(9.5,0,2,0,Math.PI*2),this.ctx.fill();else if(this.state==="swinging_stick_hang"){const x=u-12;this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(-5.5,u-4),this.ctx.lineTo(-5,x),this.ctx.stroke(),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc(-5,x,2.3,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(5.5,u-4),this.ctx.lineTo(5,x),this.ctx.stroke(),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc(5,x,2.3,0,Math.PI*2),this.ctx.fill()}else if(this.state==="swinging_stick_sit")this.ctx.beginPath(),this.ctx.moveTo(-4,u+3),this.ctx.lineTo(-7,u+10),this.ctx.lineTo(-8,0),this.ctx.stroke(),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc(-8,0,2.2,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(4,u+3),this.ctx.lineTo(7,u+10),this.ctx.lineTo(8,0),this.ctx.stroke(),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc(8,0,2.2,0,Math.PI*2),this.ctx.fill();else{const x=Math.sin(performance.now()*.003)*1.2;this.ctx.beginPath(),this.ctx.moveTo(-4.5,u+3),this.ctx.lineTo(-6,u+11+x),this.ctx.lineTo(-5,u+17+x),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(4.5,u+3),this.ctx.lineTo(6,u+11-x),this.ctx.lineTo(5,u+17-x),this.ctx.stroke()}this.ctx.restore()}drawLying(){var a;const t="#2b211a",e=Math.sin(performance.now()*.0025)*1.2,i=this.baseY-1;this.ctx.save(),this.ctx.translate(this.x,i),((a=this.attachedObstacle)==null?void 0:a.type)==="card"&&this.surfaceAngle&&this.ctx.rotate(this.surfaceAngle),this.ctx.scale(this.facing,1),this.ctx.fillStyle=t,this.ctx.strokeStyle=t,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.beginPath(),this.ctx.roundRect?this.ctx.roundRect(-8,-10+e*.5,17,9,3.5):this.ctx.rect(-8,-10+e*.5,17,9),this.ctx.fill();const n=-13,s=-6;this.ctx.beginPath(),this.ctx.arc(n,s,6.2,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1c1511",this.ctx.beginPath(),this.ctx.ellipse(n-1,s-4.5,6.8,3,-.4,0,Math.PI*2),this.ctx.fill(),this.ctx.strokeStyle="#fff4ed",this.ctx.lineWidth=1.2,this.ctx.beginPath(),this.ctx.arc(n+2,s-.5,1.4,.2,Math.PI*.85),this.ctx.stroke(),this.ctx.strokeStyle="#423328",this.ctx.lineWidth=2.4,this.ctx.beginPath(),this.ctx.moveTo(-8,-6),this.ctx.lineTo(-7,-1),this.ctx.lineTo(-3,0),this.ctx.stroke(),this.ctx.strokeStyle=t,this.ctx.lineWidth=3.2,this.ctx.beginPath(),this.ctx.moveTo(9,-6),this.ctx.lineTo(21,-3),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(22,-3,3,1.8,0,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(9,-6),this.ctx.lineTo(15,-12),this.ctx.lineTo(20,-3),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.ellipse(21,-3,3,1.8,0,0,Math.PI*2),this.ctx.fill(),this.ctx.lineWidth=2.6,this.ctx.beginPath(),this.ctx.moveTo(-6,-7),this.ctx.lineTo(-11,-3),this.ctx.lineTo(-14,-5),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(-4,-9),this.ctx.lineTo(2,-8+e),this.ctx.lineTo(0,-5+e),this.ctx.stroke(),this.ctx.restore()}tick(t=.016){this.updatePhysics(t),this.draw()}loop(){this.drivenByApp||(this.tick(.016),requestAnimationFrame(()=>this.loop()))}destroy(){var t;this.drivenByApp=!0,this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),window.__character===this&&(window.__character=null),window.__jumpingCharacter===this&&(window.__jumpingCharacter=null),((t=window.__character_ai)==null?void 0:t.character)===this&&(window.__character_ai=null)}}class sv{constructor(){this.projects=bs,this.canvas=document.getElementById("gl"),this.cursor=new Zx,window.__cursor=this.cursor,this.modal=new iv(bs,this.cursor),this.menu=new $x,this.character=null,this.sm=null,this.gallery=null,this.filters=null,window.__showCharacter=()=>this.showCharacter(),window.__hideCharacter=()=>this.hideCharacter(),this.initAudioToggle(),this.initNavEvents(),this.initWebGL(),this.initPreloader()}initAudioToggle(){const t=document.querySelector(".js-audio-toggle"),e=t==null?void 0:t.querySelector(".audio-waves");t==null||t.addEventListener("click",()=>{U.init(),U.toggleMute()?(e==null||e.classList.remove("is-playing"),e==null||e.classList.add("is-muted")):(e==null||e.classList.add("is-playing"),e==null||e.classList.remove("is-muted"),U.playClick())})}initNavEvents(){document.querySelectorAll(".js-nav-link").forEach(e=>{e.addEventListener("mouseenter",()=>U.playRatchet()),e.addEventListener("click",()=>U.playClick())})}initWebGL(){this.sm=new y_(this.canvas),this.gallery=new Jx(this.sm,bs,this.cursor,this.modal),this.filters=new Kx(bs,t=>{this.gallery.filter(t)}),this.loop()}initPreloader(){this.preloader=new tv(()=>{const t=new URLSearchParams(window.location.search).get("p");if(t){const e=bs.find(i=>i.id===t);e&&this.modal.open(e,{updateUrl:!1})}})}showCharacter(){return this.character||(this.character=new nv,this.character.drivenByApp=!0),this.character}hideCharacter(){var t,e;this.character&&((e=(t=this.character).destroy)==null||e.call(t),this.character=null)}loop(){this.sm.update(),this.gallery.update(),this.sm.render(),this.character&&(this.gallery&&this.character.onScroll(this.gallery.scroll.velocity),this.character.tick(.016)),requestAnimationFrame(()=>this.loop())}}window.addEventListener("DOMContentLoaded",()=>{window.__app=new sv});
