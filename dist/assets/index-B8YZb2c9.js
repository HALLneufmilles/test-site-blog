(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const a of u.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();var He={exports:{}};(function(e){(function(r,i){var l=i(r,r.document,Date);r.lazySizes=l,e.exports&&(e.exports=l)})(typeof window<"u"?window:{},function(i,l,c){var u,a;if(function(){var n,s={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};a=i.lazySizesConfig||i.lazysizesConfig||{};for(n in s)n in a||(a[n]=s[n])}(),!l||!l.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var F=l.documentElement,Q=i.HTMLPictureElement,I="addEventListener",b="getAttribute",C=i[I].bind(i),k=i.setTimeout,te=i.requestAnimationFrame||k,re=i.requestIdleCallback,oe=/^picture$/i,ae=["load","error","lazyincluded","_lazyloaded"],D={},$=Array.prototype.forEach,Y=function(n,s){return D[s]||(D[s]=new RegExp("(\\s|^)"+s+"(\\s|$)")),D[s].test(n[b]("class")||"")&&D[s]},X=function(n,s){Y(n,s)||n.setAttribute("class",(n[b]("class")||"").trim()+" "+s)},m=function(n,s){var d;(d=Y(n,s))&&n.setAttribute("class",(n[b]("class")||"").replace(d," "))},p=function(n,s,d){var z=d?I:"removeEventListener";d&&p(n,s),ae.forEach(function(E){n[z](E,s)})},g=function(n,s,d,z,E){var f=l.createEvent("Event");return d||(d={}),d.instance=u,f.initEvent(s,!z,!E),f.detail=d,n.dispatchEvent(f),f},_=function(n,s){var d;!Q&&(d=i.picturefill||a.pf)?(s&&s.src&&!n[b]("srcset")&&n.setAttribute("srcset",s.src),d({reevaluate:!0,elements:[n]})):s&&s.src&&(n.src=s.src)},L=function(n,s){return(getComputedStyle(n,null)||{})[s]},S=function(n,s,d){for(d=d||n.offsetWidth;d<a.minSize&&s&&!n._lazysizesWidth;)d=s.offsetWidth,s=s.parentNode;return d},w=function(){var n,s,d=[],z=[],E=d,f=function(){var v=E;for(E=d.length?z:d,n=!0,s=!1;v.length;)v.shift()();n=!1},x=function(v,y){n&&!y?v.apply(this,arguments):(E.push(v),s||(s=!0,(l.hidden?k:te)(f)))};return x._lsFlush=f,x}(),H=function(n,s){return s?function(){w(n)}:function(){var d=this,z=arguments;w(function(){n.apply(d,z)})}},R=function(n){var s,d=0,z=a.throttleDelay,E=a.ricTimeout,f=function(){s=!1,d=c.now(),n()},x=re&&E>49?function(){re(f,{timeout:E}),E!==a.ricTimeout&&(E=a.ricTimeout)}:H(function(){k(f)},!0);return function(v){var y;(v=v===!0)&&(E=33),!s&&(s=!0,y=z-(c.now()-d),y<0&&(y=0),v||y<9?x():k(x,y))}},N=function(n){var s,d,z=99,E=function(){s=null,n()},f=function(){var x=c.now()-d;x<z?k(f,z-x):(re||E)(E)};return function(){d=c.now(),s||(s=k(f,z))}},fe=function(){var n,s,d,z,E,f,x,v,y,q,V,Z,ke=/^img$/i,Pe=/^iframe$/i,Re="onscroll"in i&&!/(gle|ing)bot/.test(navigator.userAgent),Ie=0,ce=0,j=0,ie=-1,pe=function(t){j--,(!t||j<0||!t.target)&&(j=0)},ge=function(t){return Z==null&&(Z=L(l.body,"visibility")=="hidden"),Z||!(L(t.parentNode,"visibility")=="hidden"&&L(t,"visibility")=="hidden")},qe=function(t,o){var h,T=t,M=ge(t);for(v-=o,V+=o,y-=o,q+=o;M&&(T=T.offsetParent)&&T!=l.body&&T!=F;)M=(L(T,"opacity")||1)>0,M&&L(T,"overflow")!="visible"&&(h=T.getBoundingClientRect(),M=q>h.left&&y<h.right&&V>h.top-1&&v<h.bottom+1);return M},be=function(){var t,o,h,T,M,P,K,J,G,U,ee,ne,O=u.elements;if((z=a.loadMode)&&j<8&&(t=O.length)){for(o=0,ie++;o<t;o++)if(!(!O[o]||O[o]._lazyRace)){if(!Re||u.prematureUnveil&&u.prematureUnveil(O[o])){de(O[o]);continue}if((!(J=O[o][b]("data-expand"))||!(P=J*1))&&(P=ce),U||(U=!a.expand||a.expand<1?F.clientHeight>500&&F.clientWidth>500?500:370:a.expand,u._defEx=U,ee=U*a.expFactor,ne=a.hFac,Z=null,ce<ee&&j<1&&ie>2&&z>2&&!l.hidden?(ce=ee,ie=0):z>1&&ie>1&&j<6?ce=U:ce=Ie),G!==P&&(f=innerWidth+P*ne,x=innerHeight+P,K=P*-1,G=P),h=O[o].getBoundingClientRect(),(V=h.bottom)>=K&&(v=h.top)<=x&&(q=h.right)>=K*ne&&(y=h.left)<=f&&(V||q||y||v)&&(a.loadHidden||ge(O[o]))&&(s&&j<3&&!J&&(z<3||ie<4)||qe(O[o],P))){if(de(O[o]),M=!0,j>9)break}else!M&&s&&!T&&j<4&&ie<4&&z>2&&(n[0]||a.preloadAfterLoad)&&(n[0]||!J&&(V||q||y||v||O[o][b](a.sizesAttr)!="auto"))&&(T=n[0]||O[o])}T&&!M&&de(T)}},B=R(be),ye=function(t){var o=t.target;if(o._lazyCache){delete o._lazyCache;return}pe(t),X(o,a.loadedClass),m(o,a.loadingClass),p(o,Ee),g(o,"lazyloaded")},Be=H(ye),Ee=function(t){Be({target:t.target})},Fe=function(t,o){var h=t.getAttribute("data-load-mode")||a.iframeLoadMode;h==0?t.contentWindow.location.replace(o):h==1&&(t.src=o)},Ne=function(t){var o,h=t[b](a.srcsetAttr);(o=a.customMedia[t[b]("data-media")||t[b]("media")])&&t.setAttribute("media",o),h&&t.setAttribute("srcset",h)},Oe=H(function(t,o,h,T,M){var P,K,J,G,U,ee;(U=g(t,"lazybeforeunveil",o)).defaultPrevented||(T&&(h?X(t,a.autosizesClass):t.setAttribute("sizes",T)),K=t[b](a.srcsetAttr),P=t[b](a.srcAttr),M&&(J=t.parentNode,G=J&&oe.test(J.nodeName||"")),ee=o.firesLoad||"src"in t&&(K||P||G),U={target:t},X(t,a.loadingClass),ee&&(clearTimeout(d),d=k(pe,2500),p(t,Ee,!0)),G&&$.call(J.getElementsByTagName("source"),Ne),K?t.setAttribute("srcset",K):P&&!G&&(Pe.test(t.nodeName)?Fe(t,P):t.src=P),M&&(K||G)&&_(t,{src:P})),t._lazyRace&&delete t._lazyRace,m(t,a.lazyClass),w(function(){var ne=t.complete&&t.naturalWidth>1;(!ee||ne)&&(ne&&X(t,a.fastLoadedClass),ye(U),t._lazyCache=!0,k(function(){"_lazyCache"in t&&delete t._lazyCache},9)),t.loading=="lazy"&&j--},!0)}),de=function(t){if(!t._lazyRace){var o,h=ke.test(t.nodeName),T=h&&(t[b](a.sizesAttr)||t[b]("sizes")),M=T=="auto";(M||!s)&&h&&(t[b]("src")||t.srcset)&&!t.complete&&!Y(t,a.errorClass)&&Y(t,a.lazyClass)||(o=g(t,"lazyunveilread").detail,M&&le.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,j++,Oe(t,o,M,T,h))}},je=N(function(){a.loadMode=3,B()}),Le=function(){a.loadMode==3&&(a.loadMode=2),je()},me=function(){if(!s){if(c.now()-E<999){k(me,999);return}s=!0,a.loadMode=3,B(),C("scroll",Le,!0)}};return{_:function(){E=c.now(),u.elements=l.getElementsByClassName(a.lazyClass),n=l.getElementsByClassName(a.lazyClass+" "+a.preloadClass),C("scroll",B,!0),C("resize",B,!0),C("pageshow",function(t){if(t.persisted){var o=l.querySelectorAll("."+a.loadingClass);o.length&&o.forEach&&te(function(){o.forEach(function(h){h.complete&&de(h)})})}}),i.MutationObserver?new MutationObserver(B).observe(F,{childList:!0,subtree:!0,attributes:!0}):(F[I]("DOMNodeInserted",B,!0),F[I]("DOMAttrModified",B,!0),setInterval(B,999)),C("hashchange",B,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(t){l[I](t,B,!0)}),/d$|^c/.test(l.readyState)?me():(C("load",me),l[I]("DOMContentLoaded",B),k(me,2e4)),u.elements.length?(be(),w._lsFlush()):B()},checkElems:B,unveil:de,_aLSL:Le}}(),le=function(){var n,s=H(function(f,x,v,y){var q,V,Z;if(f._lazysizesWidth=y,y+="px",f.setAttribute("sizes",y),oe.test(x.nodeName||""))for(q=x.getElementsByTagName("source"),V=0,Z=q.length;V<Z;V++)q[V].setAttribute("sizes",y);v.detail.dataAttr||_(f,v.detail)}),d=function(f,x,v){var y,q=f.parentNode;q&&(v=S(f,q,v),y=g(f,"lazybeforesizes",{width:v,dataAttr:!!x}),y.defaultPrevented||(v=y.detail.width,v&&v!==f._lazysizesWidth&&s(f,q,y,v)))},z=function(){var f,x=n.length;if(x)for(f=0;f<x;f++)d(n[f])},E=N(z);return{_:function(){n=l.getElementsByClassName(a.autosizesClass),C("resize",E)},checkElems:E,updateElem:d}}(),se=function(){!se.i&&l.getElementsByClassName&&(se.i=!0,le._(),fe._())};return k(function(){a.init&&se()}),u={cfg:a,autoSizer:le,loader:fe,init:se,uP:_,aC:X,rC:m,hC:Y,fire:g,gW:S,rAF:w},u})})(He);class ue{constructor(r=0,i="Network Error"){this.status=r,this.text=i}}const Ve=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,r)=>Promise.resolve(localStorage.setItem(e,r)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},A={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Ve()},he=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},We=(e,r="https://api.emailjs.com")=>{if(!e)return;const i=he(e);A.publicKey=i.publicKey,A.blockHeadless=i.blockHeadless,A.storageProvider=i.storageProvider,A.blockList=i.blockList,A.limitRate=i.limitRate,A.origin=i.origin||r},ze=async(e,r,i={})=>{const l=await fetch(A.origin+e,{method:"POST",headers:i,body:r}),c=await l.text(),u=new ue(l.status,c);if(l.ok)return u;throw u},Ce=(e,r,i)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!r||typeof r!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i||typeof i!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},De=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},xe=e=>e.webdriver||!e.languages||e.languages.length===0,Se=()=>new ue(451,"Unavailable For Headless Browser"),Ke=(e,r)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof r!="string")throw"The BlockList watchVariable has to be a string"},Je=e=>{var r;return!((r=e.list)!=null&&r.length)||!e.watchVariable},Ue=(e,r)=>e instanceof FormData?e.get(r):e[r],we=(e,r)=>{if(Je(e))return!1;Ke(e.list,e.watchVariable);const i=Ue(r,e.watchVariable);return typeof i!="string"?!1:e.list.includes(i)},Te=()=>new ue(403,"Forbidden"),$e=(e,r)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(r&&typeof r!="string")throw"The LimitRate ID has to be a non-empty string"},Ye=async(e,r,i)=>{const l=Number(await i.get(e)||0);return r-Date.now()+l},_e=async(e,r,i)=>{if(!r.throttle||!i)return!1;$e(r.throttle,r.id);const l=r.id||e;return await Ye(l,r.throttle,i)>0?!0:(await i.set(l,Date.now().toString()),!1)},Ae=()=>new ue(429,"Too Many Requests"),Ge=async(e,r,i,l)=>{const c=he(l),u=c.publicKey||A.publicKey,a=c.blockHeadless||A.blockHeadless,F=c.storageProvider||A.storageProvider,Q={...A.blockList,...c.blockList},I={...A.limitRate,...c.limitRate};return a&&xe(navigator)?Promise.reject(Se()):(Ce(u,e,r),De(i),i&&we(Q,i)?Promise.reject(Te()):await _e(location.pathname,I,F)?Promise.reject(Ae()):ze("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:u,service_id:e,template_id:r,template_params:i}),{"Content-type":"application/json"}))},Qe=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Xe=e=>typeof e=="string"?document.querySelector(e):e,Ze=async(e,r,i,l)=>{const c=he(l),u=c.publicKey||A.publicKey,a=c.blockHeadless||A.blockHeadless,F=A.storageProvider||c.storageProvider,Q={...A.blockList,...c.blockList},I={...A.limitRate,...c.limitRate};if(a&&xe(navigator))return Promise.reject(Se());const b=Xe(i);Ce(u,e,r),Qe(b);const C=new FormData(b);return we(Q,C)?Promise.reject(Te()):await _e(location.pathname,I,F)?Promise.reject(Ae()):(C.append("lib_version","4.4.1"),C.append("service_id",e),C.append("template_id",r),C.append("user_id",u),ze("/api/v1.0/email/send-form",C))},Me={init:We,send:Ge,sendForm:Ze,EmailJSResponseStatus:ue};Me.init("SSGMoBteY1IqEzwlA");const et=navigator.userAgent.toLowerCase().includes("firefox"),tt=navigator.userAgent.toLowerCase().includes("android"),ve=window.matchMedia("(orientation: portrait)").matches||window.innerWidth<940;document.addEventListener("DOMContentLoaded",function(){console.log("DOM Content Loaded"),et&&tt&&window.matchMedia("(orientation: portrait)").matches&&document.querySelectorAll(".box-sticky").forEach(m=>{m.style.position="static"});const e=document.querySelector(".nav-barre"),r=document.querySelector(".toggle-btn"),i=document.querySelectorAll(".links, .footer-links"),l=document.querySelector("#overlay-menu");r.addEventListener("click",()=>{const m=e.classList.toggle("active");r.classList.toggle("active"),l.classList.toggle("active"),m?document.documentElement.classList.add("no-scroll"):document.documentElement.classList.remove("no-scroll")}),i.forEach(m=>{m.addEventListener("click",p=>{if(m.getAttribute("target")==="_blank"||m.href.startsWith("http"))return;p.preventDefault();const _=m.getAttribute("href").slice(1),L=document.getElementById(_);L&&c(L),e.classList.remove("active"),r.classList.remove("active"),l.classList.remove("active"),document.documentElement.classList.remove("no-scroll")})}),document.addEventListener("click",m=>{!e.contains(m.target)&&!r.contains(m.target)&&(e.classList.remove("active"),r.classList.remove("active"),l.classList.remove("active"),document.documentElement.classList.remove("no-scroll"))});function c(m){const p=window.scrollY,_=m.getBoundingClientRect().top+p-p,L=2e3;let S=null;function w(R){S||(S=R);const N=R-S,fe=Math.min(N/L,1),le=H(fe),se=p+_*le;window.scrollTo(0,se),N<L&&requestAnimationFrame(w)}function H(R){return R<.5?2*R*R:1-Math.pow(-2*R+2,2)/2}requestAnimationFrame(w)}const u=new Promise((m,p)=>{var g=document.createElement("link");g.rel="preload",g.as="image",window.matchMedia("(min-width: 1024px)").matches?g.href="/img/hero/20-fond-hero-section-1400.webp":g.href="/img/hero/20-fond-hero-section-800.webp",g.onload=()=>m(),g.onerror=()=>p(new Error("Erreur lors du chargement de l'image")),document.head.appendChild(g)});function a(){if(console.log("showVoletBoxs appellée"),!document.querySelector("#footer")){console.error("L'élément #footer n'existe pas dans le DOM.");return}const p=document.querySelectorAll(".box"),g=(L,S)=>{L.forEach(w=>{w.isIntersecting?(w.target.classList.add("visible-box"),w.target.classList.remove("hidden-box")):(w.target.classList.add("hidden-box"),w.target.classList.remove("visible-box"))})},_=new IntersectionObserver(g,{threshold:.1});p.forEach(L=>_.observe(L))}function F(){particlesJS("particles-js",{particles:{number:{value:65,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:236.74429248968178,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:5,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}),ve&&setTimeout(()=>{if(console.log("Arrêt des particules après 5 secondes"),window.pJSDom&&window.pJSDom.length>0){const m=window.pJSDom[0].pJS;m.particles.move.enable=!1,m.fn.particlesRefresh()}},5e3)}function Q(){console.log("handleColorInversion appelée");const m=document.querySelector("#prix");if(!m){console.error("La section #prix n'existe pas dans le DOM.");return}console.log(m);const p=ve?.1:.7,g=L=>{L.forEach(S=>{S.isIntersecting?document.documentElement.classList.add("root-inverted"):document.documentElement.classList.remove("root-inverted")})};new IntersectionObserver(g,{threshold:p}).observe(m)}class I{constructor(p){this.el=p,this.chars="01",this.update=this.update.bind(this)}setText(p){const g=this.el.innerText,_=Math.max(g.length,p.length),L=new Promise(S=>this.resolve=S);this.queue=[];for(let S=0;S<_;S++){const w=g[S]||"",H=p[S]||"",R=Math.floor(Math.random()*80),N=R+Math.floor(Math.random()*80);this.queue.push({from:w,to:H,start:R,end:N})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),L}update(){let p="",g=0;for(let _=0,L=this.queue.length;_<L;_++){let{from:S,to:w,start:H,end:R,char:N}=this.queue[_];this.frame>=R?(g++,p+=w):this.frame>=H?((!N||Math.random()<.28)&&(N=this.randomChar(),this.queue[_].char=N),p+=`<span class="dud">${N}</span>`):p+=S}this.el.innerHTML=p,g===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}const b=["Développeur Web"],C=["A La Rochelle"],k=["01000100 11000011 10101001"],te=["MaVitrineDuWeb.fr"],re=document.getElementById("text1"),oe=document.getElementById("text2"),ae=new I(re),D=new I(oe);let $=0;const Y=()=>{ve&&$>=1||ae.setText(k[$%k.length]).then(()=>{setTimeout(()=>{D.setText(te[$%te.length]).then(()=>{setTimeout(()=>{ae.setText(b[$%b.length]).then(()=>{D.setText(C[$%C.length]).then(()=>{$++,setTimeout(Y,900)})})},200)})},200)})},X=()=>{re.innerText=k[0],oe.innerText=te[0],setTimeout(ve?()=>{ae.setText(b[0]).then(()=>{D.setText(C[0]).then(()=>{console.log("Animation terminée après une transition sur smartphone")})})}:()=>{ae.setText(b[0]).then(()=>{D.setText(C[0]).then(()=>{setTimeout(Y,500)})})},500)};u.then(()=>{console.log("Image préchargée, initialisation des particules et inversion des couleurs"),F(),X(),Q(),a()}).catch(m=>{console.error("Une erreur s'est produite :",m)})});const W=ScrollReveal({origin:"bottom",distance:"60px",duration:1e3,delay:100,easing:"ease-in-out"});W.reveal(".presentation",{delay:200,distance:"200px"});W.reveal(".messagedefilant",{delay:200,distance:"200px"});W.reveal(".services-title",{delay:200,distance:"200px"});W.reveal(".card",{delay:200,distance:"200px"});W.reveal(".stape-container",{delay:200,distance:"200px"});W.reveal(".stape-card",{delay:200,distance:"200px"});W.reveal("#themes",{delay:200,distance:"100px"});W.reveal(".skills",{delay:200,distance:"100px"});W.reveal(".contact-form",{delay:200,distance:"100px"});W.reveal(".buton-phone",{delay:600});window.sendMail=function(){const e=document.getElementById("contact-form");let r={user_name:document.getElementById("user_name").value,user_email:document.getElementById("user_email").value,subject:document.getElementById("subject").value,message:document.getElementById("message").value,contact_number:document.getElementById("contact_number").value};console.log("params:",r),Me.send("service_e1lshyl","template_nroyljv",r).then(i=>{alert("Email Sent!"),console.log("SUCCESS",i),e.reset()}).catch(i=>{console.error("Failed to send email: ",i),console.log("afetr catch params:",r)})};