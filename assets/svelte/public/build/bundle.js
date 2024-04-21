var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e,n,o){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function g(t,e,n){t.classList[n?"add":"remove"](e)}let b;function $(t){b=t}function v(t){(function(){if(!b)throw new Error("Function called outside component initialization");return b})().$$.on_mount.push(t)}const y=[],w=[];let x=[];const z=[],_=Promise.resolve();let E=!1;function k(t){x.push(t)}const M=new Set;let S=0;function A(){if(0!==S)return;const t=b;do{try{for(;S<y.length;){const t=y[S];S++,$(t),L(t.$$)}}catch(t){throw y.length=0,S=0,t}for($(null),y.length=0,S=0;w.length;)w.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];M.has(e)||(M.add(e),e())}x.length=0}while(y.length);for(;z.length;)z.pop()();E=!1,M.clear(),$(t)}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const N=new Set;let C;function H(t,e){t&&t.i&&(N.delete(t),t.i(e))}function O(t,e,n,o){if(t&&t.o){if(N.has(t))return;N.add(t),C.c.push((()=>{N.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function T(t){t&&t.c()}function j(t,n,s,i){const{fragment:l,after_update:c}=t.$$;l&&l.m(n,s),i||k((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(k)}function Y(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];x.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),x=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(y.push(t),E||(E=!0,_.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,r,s,i,l,c,u,p=[-1]){const f=b;$(e);const d=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:r.target||f.$$.root};u&&u(d.root);let h=!1;if(d.ctx=s?s(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&q(e,t)),n})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(a)}else d.fragment&&d.fragment.c();r.intro&&H(e.$$.fragment),j(e,r.target,r.anchor,r.customElement),A()}$(f)}class P{$destroy(){Y(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(t,e,n){const o=t.slice();return o[12]=e[n].id,o[13]=e[n].offset,o[14]=e[n].horizontal,o[15]=e[n].imageSrc,o[16]=e[n].type,o[17]=e[n].transition,o}function B(t){let e;return{c(){e=p("div"),h(e,"class","shape svelte-1lztp21"),m(e,"position","absolute"),m(e,"background-color","black"),m(e,"top",t[13]+"px"),m(e,"left",t[14]+"px"),m(e,"transition",t[17])},m(t,n){c(t,e,n)},p(t,n){1&n&&m(e,"top",t[13]+"px"),1&n&&m(e,"left",t[14]+"px"),1&n&&m(e,"transition",t[17])},d(t){t&&a(e)}}}function U(t){let e;return{c(){e=p("div"),h(e,"class","shape svelte-1lztp21"),m(e,"position","absolute"),m(e,"background-color","orange"),m(e,"top",t[13]+"px"),m(e,"left",t[14]+"px"),m(e,"transition",t[17])},m(t,n){c(t,e,n)},p(t,n){1&n&&m(e,"top",t[13]+"px"),1&n&&m(e,"left",t[14]+"px"),1&n&&m(e,"transition",t[17])},d(t){t&&a(e)}}}function V(t){let e;return{c(){e=p("div"),h(e,"class","shape svelte-1lztp21"),m(e,"position","absolute"),m(e,"background-color","yellow"),m(e,"top",t[13]+"px"),m(e,"left",t[14]+"px"),m(e,"transition",t[17])},m(t,n){c(t,e,n)},p(t,n){1&n&&m(e,"top",t[13]+"px"),1&n&&m(e,"left",t[14]+"px"),1&n&&m(e,"transition",t[17])},d(t){t&&a(e)}}}function X(t){let e;return{c(){e=p("div"),h(e,"class","shape svelte-1lztp21"),m(e,"position","absolute"),m(e,"background-color","purple"),m(e,"top",t[13]+"px"),m(e,"left",t[14]+"px"),m(e,"transition",t[17])},m(t,n){c(t,e,n)},p(t,n){1&n&&m(e,"top",t[13]+"px"),1&n&&m(e,"left",t[14]+"px"),1&n&&m(e,"transition",t[17])},d(t){t&&a(e)}}}function F(t){let e;return{c(){e=p("div"),h(e,"class","shape svelte-1lztp21"),m(e,"position","absolute"),m(e,"background-color","green"),m(e,"top",t[13]+"px"),m(e,"left",t[14]+"px"),m(e,"transition",t[17])},m(t,n){c(t,e,n)},p(t,n){1&n&&m(e,"top",t[13]+"px"),1&n&&m(e,"left",t[14]+"px"),1&n&&m(e,"transition",t[17])},d(t){t&&a(e)}}}function G(t){let e;return{c(){e=p("div"),h(e,"class","shape svelte-1lztp21"),m(e,"position","absolute"),m(e,"background-color","blue"),m(e,"top",t[13]+"px"),m(e,"left",t[14]+"px"),m(e,"transition",t[17])},m(t,n){c(t,e,n)},p(t,n){1&n&&m(e,"top",t[13]+"px"),1&n&&m(e,"left",t[14]+"px"),1&n&&m(e,"transition",t[17])},d(t){t&&a(e)}}}function R(t){let e;function n(t,e){return"waterbottle"===t[16]?G:"plasticbags"===t[16]?F:"plastics"===t[16]?X:"wrappers"===t[16]?V:"sportsballs"===t[16]?U:"cig"===t[16]?B:void 0}let o=n(t),r=o&&o(t);return{c(){r&&r.c(),e=f("")},m(t,n){r&&r.m(t,n),c(t,e,n)},p(t,s){o===(o=n(t))&&r?r.p(t,s):(r&&r.d(1),r=o&&o(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){r&&r.d(t),t&&a(e)}}}function D(t){let e,n,o,r;return{c(){e=p("div"),n=f("Current Hour: "),o=f(t[3]),r=f(":00"),h(e,"class","hour-counter svelte-1lztp21"),m(e,"top","20%"),m(e,"z-index","10"),m(e,"right","10%")},m(t,s){c(t,e,s),l(e,n),l(e,o),l(e,r)},p(t,e){8&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(o,t[3])},d(t){t&&a(e)}}}function J(e){let n,o,r,s,i,l=e[0],f=[];for(let t=0;t<l.length;t+=1)f[t]=R(W(e,l,t));let g=window.scrollY>=e[1]&&window.scrollY<=e[2]&&D(e);return{c(){n=p("div");for(let t=0;t<f.length;t+=1)f[t].c();o=d(),r=p("div"),g&&g.c(),s=d(),i=p("div"),h(n,"class","center-square svelte-1lztp21"),h(r,"class","hour-counter-container svelte-1lztp21"),m(i,"height","30000px")},m(t,e){c(t,n,e);for(let t=0;t<f.length;t+=1)f[t]&&f[t].m(n,null);c(t,o,e),c(t,r,e),g&&g.m(r,null),c(t,s,e),c(t,i,e)},p(t,[e]){if(1&e){let o;for(l=t[0],o=0;o<l.length;o+=1){const r=W(t,l,o);f[o]?f[o].p(r,e):(f[o]=R(r),f[o].c(),f[o].m(n,null))}for(;o<f.length;o+=1)f[o].d(1);f.length=l.length}window.scrollY>=t[1]&&window.scrollY<=t[2]?g?g.p(t,e):(g=D(t),g.c(),g.m(r,null)):g&&(g.d(1),g=null)},i:t,o:t,d(t){t&&a(n),u(f,t),t&&a(o),t&&a(r),g&&g.d(),t&&a(s),t&&a(i)}}}let K=200;function Q(t,e,n){let o=[],r=0,s=Number.MAX_VALUE,i=Number.MIN_VALUE,l=0,c=0;const a=[{type:"waterbottle",number:1981,imageSrc:"water_bottle.svg"},{type:"cig",number:18656,imageSrc:"water_bottle.svg"},{type:"plasticbags",number:867,imageSrc:"water_bottle.svg"},{type:"plastics",number:1462,imageSrc:"water_bottle.svg"},{type:"glassbottles",number:21,imageSrc:"water_bottle.svg"},{type:"wrappers",number:1427,imageSrc:"water_bottle.svg"},{type:"sportsballs",number:867,imageSrc:"water_bottle.svg"}];function u(){const t=window.scrollY;n(3,l=Math.floor((t-s)/(i-s)*24)%24),n(0,o=t>=i?o.map((t=>({...t,horizontal:t.finalX,offset:t.finalY,transition:"left 5s, top 5s"}))):o.map((e=>{let n=e.initialOffset-t;return{...e,horizontal:e.originalHorizontal,offset:n<=c?c:n,transition:"none"}})))}return v((()=>(r=window.innerHeight,n(1,s=22*r),n(2,i=40*r),n(0,o=a.flatMap((t=>Array.from({length:t.number},((e,n)=>{let o=0;o=n<1&"waterbottle"===t.type?12*r:n<1&"cig"===t.type?14.5*r:n<1&("wrappers"===t.type|"plastics"===t.type|"glassbottles"===t.type|"sportsballs"===t.type|"plasticbags"===t.type)?17.7*r:s+Math.random()*(i-s);const l=100*Math.random();return{id:`${t.type}-${n}`,type:t.type,imageSrc:t.imageSrc,initialOffset:o,horizontal:l,originalHorizontal:l}}))))),function(){let t=r-600,e=0;a.forEach((n=>{let r=0;o.filter((t=>t.type===n.type)).forEach((n=>{let o=Math.floor(r/K),s=r%K;n.finalX=e+10*s,n.finalY=t+10*o,r++})),t+=10*(Math.ceil(n.number/K)+1)}))}(),window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}))),[o,s,i,l]}class Z extends P{constructor(t){super(),I(this,t,Q,J,s,{})}}function tt(t){let e,n;const o=t[7].default,r=function(t,e,n,o){if(t){const r=i(t,e,n,o);return t[0](r)}}(o,t,t[6],null);return{c(){e=p("div"),r&&r.c()},m(o,s){c(o,e,s),r&&r.m(e,null),t[8](e),n=!0},p(t,[e]){r&&r.p&&(!n||64&e)&&function(t,e,n,o,r,s){if(r){const l=i(e,n,o,s);t.p(l,r)}}(r,o,t,t[6],n?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(o,t[6],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[6]),null)},i(t){n||(H(r,t),n=!0)},o(t){O(r,t),n=!1},d(n){n&&a(e),r&&r.d(n),t[8](null)}}}function et(t,e,n){let{$$slots:o={},$$scope:r}=e,{root:s=null}=e,{top:i=0}=e,{bottom:l=0}=e,{increments:c=100}=e,{value:a}=e;const u=[],p=[];let f,d=[],h=[];const m=()=>{d.length&&d.forEach(g)},g=(t,e)=>{const o={root:s,rootMargin:`${i?-1*i:0}px 0px ${l?-1*l:0}px 0px`,threshold:p};h[e]&&h[e].disconnect();const r=new IntersectionObserver((t=>{t[0].isIntersecting;const o=t[0].intersectionRatio;u[e]=o,(()=>{let t=0,e=0;for(let n=0;n<u.length;n++)u[n]>t&&(t=u[n],e=n);n(1,a=t>0?e:void 0)})()}),o);r.observe(t),h[e]=r};return v((()=>{for(let t=0;t<c+1;t++)p.push(t/c);d=f.querySelectorAll(":scope > *"),m()})),t.$$set=t=>{"root"in t&&n(2,s=t.root),"top"in t&&n(3,i=t.top),"bottom"in t&&n(4,l=t.bottom),"increments"in t&&n(5,c=t.increments),"value"in t&&n(1,a=t.value),"$$scope"in t&&n(6,r=t.$$scope)},t.$$.update=()=>{24&t.$$.dirty&&m()},[f,a,s,i,l,c,r,o,function(t){w[t?"unshift":"push"]((()=>{f=t,n(0,f)}))}]}class nt extends P{constructor(t){super(),I(this,t,et,tt,s,{root:2,top:3,bottom:4,increments:5,value:1})}}function ot(t,e,n){const o=t.slice();return o[5]=e[n],o[7]=n,o}function rt(t){let e,n,o=t[5]+"";return{c(){e=p("div"),n=p("div"),h(n,"class","step-content svelte-1mz3adm"),h(e,"class","step svelte-1mz3adm"),g(e,"active",t[1]===t[7])},m(t,r){c(t,e,r),l(e,n),n.innerHTML=o},p(t,n){2&n&&g(e,"active",t[1]===t[7])},d(t){t&&a(e)}}}function st(t){let e,n,o=t[2],r=[];for(let e=0;e<o.length;e+=1)r[e]=rt(ot(t,o,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=d(),n=p("div"),h(n,"class","spacer svelte-1mz3adm")},m(t,o){for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,o);c(t,e,o),c(t,n,o)},p(t,n){if(6&n){let s;for(o=t[2],s=0;s<o.length;s+=1){const i=ot(t,o,s);r[s]?r[s].p(i,n):(r[s]=rt(i),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=o.length}},d(t){u(r,t),t&&a(e),t&&a(n)}}}function it(t){let e,n,o,r,s,i,u,f,g,b,$,v,y,x,_,E,k,M,S,A,L,N,C,q,I,P,W,B,U,V,X,F,G,R,D,J,K,Q,tt,et,ot,rt,it,lt,ct,at,ut,pt,ft,dt,ht,mt,gt,bt,$t,vt,yt,wt,xt,zt,_t,Et,kt,Mt,St,At,Lt,Nt,Ct,Ht,Ot,Tt;function jt(e){t[3](e)}let Yt={$$slots:{default:[st]},$$scope:{ctx:t}};return void 0!==t[1]&&(Yt.value=t[1]),f=new nt({props:Yt}),w.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(f,"value",jt))),v=new Z({}),{c(){e=p("article"),n=p("section"),n.innerHTML="<h2>Garbage In, Garbage Out</h2> \n\t  <p>Society makes a lot of trash. We&#39;re not quite sure what to do with it.</p> \n\t  <p>Anthropomorphizing might help.</p>",o=d(),r=p("div"),s=d(),i=p("div"),u=p("div"),T(f.$$.fragment),b=d(),$=p("div"),T(v.$$.fragment),y=d(),x=p("div"),_=d(),E=p("section"),k=p("h2"),k.textContent="Conclusions Drawn from the Visualization",M=d(),S=p("p"),S.textContent="As we reflect on the visualization that has scrolled out of view, let's discuss the insights gathered. The movement and aggregation of circles within the defined area highlight the clustering tendency of data under certain conditions.",A=d(),L=p("p"),L.textContent="This visualization is not just a showcase of technical prowess but serves as a metaphor for the dynamic and sometimes unpredictable nature of data analysis. Understanding these patterns allows us to anticipate changes and adapt strategies effectively.",N=d(),C=p("br"),q=d(),I=p("br"),P=d(),W=p("br"),B=d(),U=p("br"),V=d(),X=p("br"),F=d(),G=p("br"),R=d(),D=p("br"),J=d(),K=p("br"),Q=d(),tt=p("br"),et=d(),ot=p("br"),rt=d(),it=p("br"),lt=d(),ct=p("br"),at=d(),ut=p("br"),pt=d(),ft=p("br"),dt=d(),ht=p("br"),mt=d(),gt=p("br"),bt=d(),$t=p("br"),vt=d(),yt=p("br"),wt=d(),xt=p("br"),zt=d(),_t=p("br"),Et=d(),kt=p("br"),Mt=d(),St=p("br"),At=d(),Lt=p("br"),Nt=d(),Ct=p("br"),Ht=d(),Ot=p("br"),h(n,"class","article-section svelte-1mz3adm"),h(r,"class","spacer svelte-1mz3adm"),h(u,"class","steps-container svelte-1mz3adm"),h($,"class","sticky svelte-1mz3adm"),h(i,"class","section-container svelte-1mz3adm"),h(x,"class","spacer svelte-1mz3adm"),h(E,"class","article-section conclusion svelte-1mz3adm"),m(E,"visibility",t[0]?"visible":"hidden")},m(t,a){c(t,e,a),l(e,n),l(e,o),l(e,r),l(e,s),l(e,i),l(i,u),j(f,u,null),l(i,b),l(i,$),j(v,$,null),l(e,y),l(e,x),l(e,_),l(e,E),l(E,k),l(E,M),l(E,S),l(E,A),l(E,L),l(E,N),l(E,C),l(E,q),l(E,I),l(E,P),l(E,W),l(E,B),l(E,U),l(E,V),l(E,X),l(E,F),l(E,G),l(E,R),l(E,D),l(E,J),l(E,K),l(E,Q),l(E,tt),l(E,et),l(E,ot),l(E,rt),l(E,it),l(E,lt),l(E,ct),l(E,at),l(E,ut),l(E,pt),l(E,ft),l(E,dt),l(E,ht),l(E,mt),l(E,gt),l(E,bt),l(E,$t),l(E,vt),l(E,yt),l(E,wt),l(E,xt),l(E,zt),l(E,_t),l(E,Et),l(E,kt),l(E,Mt),l(E,St),l(E,At),l(E,Lt),l(E,Nt),l(E,Ct),l(E,Ht),l(E,Ot),Tt=!0},p(t,[e]){const n={};var o;258&e&&(n.$$scope={dirty:e,ctx:t}),!g&&2&e&&(g=!0,n.value=t[1],o=()=>g=!1,z.push(o)),f.$set(n),(!Tt||1&e)&&m(E,"visibility",t[0]?"visible":"hidden")},i(t){Tt||(H(f.$$.fragment,t),H(v.$$.fragment,t),Tt=!0)},o(t){O(f.$$.fragment,t),O(v.$$.fragment,t),Tt=!1},d(t){t&&a(e),Y(f),Y(v)}}}function lt(t,e,n){let o,r=!1;function s(){document.querySelector(".conclusion");const t=document.querySelector(".spacer:last-of-type").getBoundingClientRect().top;n(0,r=t<0)}return v((()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}))),[r,o,["<p>Welcome to the Jones Falls stream in Baltimore, Maryland. </p><p> Meet Mr. Trash Wheel®","<p>Mr. Trash Wheel® has a simple job. And that job is to consume garbage.","<p>Here comes some now.</p>","<p>This is one plastic bottle.</p>","<p>Here is a cigarette butt.</p>","<p>Anyone missing a ball? A glass bottle? Polyethylene? An old wrapper?</p>","<p>Let's see how much garbage comes through in a typical day.</p>"],function(t){o=t,n(1,o)}]}return new class extends P{constructor(t){super(),I(this,t,lt,it,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
