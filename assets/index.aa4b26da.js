const ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};ie();function y(){}function te(t){return t()}function Y(){return Object.create(null)}function L(t){t.forEach(te)}function se(t){return typeof t=="function"}function F(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let O;function le(t,e){return O||(O=document.createElement("a")),O.href=e,t===O.href}function ce(t){return Object.keys(t).length===0}function a(t,e){t.appendChild(e)}function K(t,e,n){t.insertBefore(e,n||null)}function T(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function x(){return C(" ")}function U(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ue(t){return Array.from(t.childNodes)}function ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let V;function w(t){V=t}const k=[],Z=[],A=[],ee=[],ae=Promise.resolve();let I=!1;function fe(){I||(I=!0,ae.then(re))}function P(t){A.push(t)}const B=new Set;let j=0;function re(){const t=V;do{for(;j<k.length;){const e=k[j];j++,w(e),de(e.$$)}for(w(null),k.length=0,j=0;Z.length;)Z.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];B.has(n)||(B.add(n),n())}A.length=0}while(k.length);for(;ee.length;)ee.pop()();I=!1,B.clear(),w(t)}function de(t){if(t.fragment!==null){t.update(),L(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const N=new Set;let b;function me(){b={r:0,c:[],p:b}}function pe(){b.r||L(b.c),b=b.p}function E(t,e){t&&t.i&&(N.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(N.has(t))return;N.add(t),b.c.push(()=>{N.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function oe(t){t&&t.c()}function R(t,e,n,r){const{fragment:o,on_mount:i,on_destroy:s,after_update:l}=t.$$;o&&o.m(e,n),r||P(()=>{const u=i.map(te).filter(se);s?s.push(...u):L(u),t.$$.on_mount=[]}),l.forEach(P)}function D(t,e){const n=t.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function he(t,e){t.$$.dirty[0]===-1&&(k.push(t),fe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,r,o,i,s,l=[-1]){const u=V;w(t);const c=t.$$={fragment:null,ctx:null,props:i,update:y,not_equal:o,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Y(),dirty:l,skip_bound:!1,root:e.target||u.$$.root};s&&s(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(f,_,...$)=>{const g=$.length?$[0]:_;return c.ctx&&o(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),h&&he(t,f)),_}):[],c.update(),h=!0,L(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const f=ue(e.target);c.fragment&&c.fragment.l(f),f.forEach(T)}else c.fragment&&c.fragment.c();e.intro&&E(t.$$.fragment),R(t,e.target,e.anchor,e.customElement),re()}w(u)}class J{$destroy(){D(this,1),this.$destroy=y}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!ce(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var _e="/assets/svelte.d72399d3.png";function ge(t){let e,n,r,o,i;return{c(){e=p("button"),n=C("Clicks: "),r=C(t[0]),m(e,"class","svelte-1c7643s")},m(s,l){K(s,e,l),a(e,n),a(e,r),o||(i=U(e,"click",t[1]),o=!0)},p(s,[l]){l&1&&ne(r,s[0])},i:y,o:y,d(s){s&&T(e),o=!1,i()}}}function ve(t,e,n){let r=0;return[r,()=>{n(0,r+=1)}]}class be extends J{constructor(e){super(),G(this,e,ve,ge,F,{})}}function ye(t){let e,n,r,o,i;return{c(){e=p("button"),n=C("Click - "),r=C(t[0]),m(e,"class","svelte-teoofu")},m(s,l){K(s,e,l),a(e,n),a(e,r),o||(i=U(e,"click",t[1]),o=!0)},p(s,[l]){l&1&&ne(r,s[0])},i:y,o:y,d(s){s&&T(e),o=!1,i()}}}function $e(t,e,n){let r=0;return[r,()=>{n(0,r-=1)}]}class xe extends J{constructor(e){super(),G(this,e,$e,ye,F,{})}}function ke(t){let e,n;return e=new xe({}),{c(){oe(e.$$.fragment)},m(r,o){R(e,r,o),n=!0},i(r){n||(E(e.$$.fragment,r),n=!0)},o(r){M(e.$$.fragment,r),n=!1},d(r){D(e,r)}}}function we(t){let e,n;return e=new be({}),{c(){oe(e.$$.fragment)},m(r,o){R(e,r,o),n=!0},i(r){n||(E(e.$$.fragment,r),n=!0)},o(r){M(e.$$.fragment,r),n=!1},d(r){D(e,r)}}}function Ce(t){let e,n,r,o,i,s,l,u,c,h,f,_,$,g,S,H,Q;const W=[we,ke],v=[];function X(d,q){return d[1]==="#counter"?0:1}return l=X(t),u=v[l]=W[l](t),{c(){e=p("main"),n=p("img"),o=x(),i=p("h1"),i.textContent="Hello Typescript!",s=x(),u.c(),c=x(),h=p("button"),h.textContent="\uBC14\uAFB8\uAE30",f=x(),_=p("p"),_.innerHTML=`Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.`,$=x(),g=p("p"),g.innerHTML=`Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!`,le(n.src,r=_e)||m(n,"src",r),m(n,"alt","Svelte Logo"),m(n,"class","svelte-1fm71xa"),m(i,"class","svelte-1fm71xa"),m(_,"class","svelte-1fm71xa"),m(g,"class","svelte-1fm71xa"),m(e,"class","svelte-1fm71xa")},m(d,q){K(d,e,q),a(e,n),a(e,o),a(e,i),a(e,s),v[l].m(e,null),a(e,c),a(e,h),a(e,f),a(e,_),a(e,$),a(e,g),S=!0,H||(Q=U(h,"click",t[2]),H=!0)},p(d,[q]){let z=l;l=X(d),l!==z&&(me(),M(v[z],1,1,()=>{v[z]=null}),pe(),u=v[l],u||(u=v[l]=W[l](d),u.c()),E(u,1),u.m(e,c))},i(d){S||(E(u),S=!0)},o(d){M(u),S=!1},d(d){d&&T(e),v[l].d(),H=!1,Q()}}}function Ee(t,e,n){let r=location.hash==="#counter",o="";const i=()=>n(0,r=!r);return t.$$.update=()=>{t.$$.dirty&3&&(n(1,o=r?"#counter":"#countless"),location.hash=o)},[r,o,i]}class Le extends J{constructor(e){super(),G(this,e,Ee,Ce,F,{})}}new Le({target:document.getElementById("app")});