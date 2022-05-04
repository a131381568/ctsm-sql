var M1=Object.defineProperty,y1=Object.defineProperties;var w1=Object.getOwnPropertyDescriptors;var X0=Object.getOwnPropertySymbols;var k1=Object.prototype.hasOwnProperty,$1=Object.prototype.propertyIsEnumerable;var Q0=(e,t,r)=>t in e?M1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W0=(e,t)=>{for(var r in t||(t={}))k1.call(t,r)&&Q0(e,r,t[r]);if(X0)for(var r of X0(t))$1.call(t,r)&&Q0(e,r,t[r]);return e},Y0=(e,t)=>y1(e,w1(t));import{d as S1,a as K,c as z,o as F,b as C,w as B,v as D,u as l,e as c,F as j,f as n0,r as o,g as A1,h as a0,i,n as y,j as y0,T as E1,k as z1,s as B1,l as P1,I as D1,A as L1,m as I1,p as Z,q as R0,t as w0,x as L,y as I,z as s0,B as q,C as J0,D as x,E as R1,G as K0,H as B0,J as V0,K as h0,L as J,M as v0,N as T1,O as O0,P as c1,Q as N1,R as x0,S as t1,U as V1,V as O1,W as j1,X as P0,Y as r0,Z as S0,_ as q1,$ as U1,a0 as H1,a1 as Z1,a2 as G1,a3 as X1,a4 as e1,a5 as r1,a6 as j0,a7 as Q1,a8 as W1,a9 as Y1,aa as J1,ab as K1}from"./vendor.7af1e309.js";const c2=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}};c2();const t2="2.1.0",c0=S1("main",{state:()=>({count:0,debug:!1,version:t2,pageTitle:"",pageSubTitle:"",isHeaderTop:!0,loading:!1,firstEnter:!0,artistsCat:[],popMsgState:!1,popMsgStateInner:!1,popMsgContent:"",popMsgBtnReturn:!1,popMsgConfirm:!0}),actions:{increment(e=1){this.count+=e},setPageTitle(e){this.pageTitle=e},setPageSubTitlee(e){this.pageSubTitle=e},updateHeaderState(e){this.isHeaderTop=e},setLoading(e){this.loading=e},setEnterState(e){this.firstEnter=e},setArtistsCat(e){this.artistsCat=e},changeDate(e){let t="";const r=new Date(e),n=r.getFullYear();let a=r.getDate(),s=r.getMonth()+1;return String(s).length===1?t=n+"-0"+s:t=n+"-"+s,String(a).length===1?t=t+"-0"+a:t=t+"-"+a,t},changeCatName(e,t){const r=e.filter(n=>n.post_category_id===t);return r.length>0?String(r[0].post_category_name):""},closePopMsg(){this.popMsgBtnReturn=!1,this.popMsgState=!1,setTimeout(()=>{this.popMsgStateInner=!1},1e3)},openPopMsg(e,t){this.popMsgConfirm=t,this.popMsgContent=e,this.popMsgBtnReturn=!1,this.popMsgState=!0,setTimeout(()=>{this.popMsgStateInner=!0},300)},popMsgCheckTrun(){this.popMsgBtnReturn=!0,this.popMsgState=!1,setTimeout(()=>{this.popMsgStateInner=!1},1e3)},logOut(){localStorage.clear()}},getters:{get_pageTitle:e=>e.pageTitle,get_pageSubTitle:e=>e.pageSubTitle,get_isHeaderTop:e=>e.isHeaderTop,get_loading:e=>e.loading,get_firstEnter:e=>e.firstEnter,get_popMsgState:e=>e.popMsgState,get_popMsgStateInner:e=>e.popMsgStateInner,get_popMsgContent:e=>e.popMsgContent,get_popMsgBtnReturn:e=>e.popMsgBtnReturn,get_popMsgConfirm:e=>e.popMsgConfirm}}),e2={class:"bg-main-color-dark w-screen h-screen flex items-stretch justify-center fixed top-0 left-0 z-10001 animate__animated animate__fadeInRight animate__faster"},r2={class:"bg-main-color-dark w-screen h-screen flex items-stretch justify-center fixed top-0 left-0 z-10001 animate__animated animate__fadeOutLeft animate__delay-0.7s"},l2=K({setup(e){const t=c0(),r=z(()=>t.get_loading);return(n,a)=>(F(),C(j,null,[B(c("div",e2,null,512),[[D,l(r)]]),B(c("div",r2,null,512),[[D,!l(r)]])],64))}}),n2=["header-data"],a2={class:"stars-wrapper -z-1 fixed w-screen h-screen overflow-hidden left-0 top-0"},i2=y0('<svg class="stars top-0 left-0 right-0 bottom-0 absolute fill-white mobile:filter-bg-opacity-50" width="100%" height="100%" preserveAspectRatio="none"><circle class="star" cx="96.55%" cy="29.88%" r="1.1"></circle><circle class="star" cx="14.86%" cy="46.5%" r="1.2"></circle><circle class="star" cx="10.24%" cy="86.22%" r="0.6"></circle><circle class="star" cx="38.74%" cy="25.38%" r="1.3"></circle><circle class="star" cx="49.72%" cy="21.25%" r="1.4"></circle><circle class="star" cx="18.22%" cy="3.72%" r="1.3"></circle><circle class="star" cx="75.09%" cy="61.02%" r="0.7"></circle><circle class="star" cx="70.59%" cy="99.15%" r="1.2"></circle><circle class="star" cx="80.82%" cy="74.77%" r="0.6"></circle><circle class="star" cx="37.95%" cy="42.02%" r="0.9"></circle><circle class="star" cx="82.1%" cy="43.04%" r="1.5"></circle><circle class="star" cx="99.59%" cy="7.86%" r="1.1"></circle><circle class="star" cx="12.13%" cy="7.54%" r="0.8"></circle><circle class="star" cx="62.04%" cy="27.35%" r="1.5"></circle><circle class="star" cx="43.4%" cy="30.43%" r="1.1"></circle><circle class="star" cx="84.51%" cy="28.44%" r="0.6"></circle><circle class="star" cx="17.22%" cy="97.41%" r="0.5"></circle><circle class="star" cx="59.11%" cy="71.44%" r="1.2"></circle><circle class="star" cx="82.29%" cy="52.45%" r="0.8"></circle><circle class="star" cx="72.9%" cy="66.34%" r="1.3"></circle><circle class="star" cx="20.17%" cy="28.03%" r="1"></circle><circle class="star" cx="16.79%" cy="66.7%" r="1.2"></circle><circle class="star" cx="64.22%" cy="23.65%" r="0.7"></circle><circle class="star" cx="98.48%" cy="35.5%" r="1.2"></circle><circle class="star" cx="2.22%" cy="43.94%" r="0.9"></circle><circle class="star" cx="89.87%" cy="31.93%" r="1.1"></circle><circle class="star" cx="58.59%" cy="55.44%" r="0.9"></circle><circle class="star" cx="35.2%" cy="94.47%" r="1.2"></circle><circle class="star" cx="76.03%" cy="6.84%" r="0.6"></circle><circle class="star" cx="72.44%" cy="17.05%" r="1"></circle><circle class="star" cx="67.9%" cy="28.06%" r="1.3"></circle><circle class="star" cx="62.77%" cy="45.2%" r="0.9"></circle><circle class="star" cx="6.68%" cy="23.64%" r="1.4"></circle><circle class="star" cx="29.15%" cy="42.21%" r="1.4"></circle><circle class="star" cx="78.74%" cy="94.18%" r="0.9"></circle><circle class="star" cx="14.69%" cy="78.72%" r="1.1"></circle><circle class="star" cx="69.79%" cy="3.82%" r="0.7"></circle><circle class="star" cx="27.4%" cy="75.43%" r="1.3"></circle><circle class="star" cx="73.98%" cy="83.17%" r="0.6"></circle><circle class="star" cx="71.74%" cy="24.43%" r="0.9"></circle><circle class="star" cx="86.02%" cy="34.15%" r="0.7"></circle><circle class="star" cx="51.69%" cy="86.69%" r="0.6"></circle><circle class="star" cx="98.75%" cy="28.57%" r="1.1"></circle><circle class="star" cx="57.57%" cy="42.05%" r="1.5"></circle><circle class="star" cx="34.97%" cy="31.03%" r="1"></circle><circle class="star" cx="49.89%" cy="47.13%" r="0.9"></circle><circle class="star" cx="93.52%" cy="61.47%" r="1.4"></circle><circle class="star" cx="21.41%" cy="68.76%" r="1"></circle><circle class="star" cx="53.57%" cy="3.31%" r="0.7"></circle><circle class="star" cx="41.56%" cy="36.31%" r="0.6"></circle><circle class="star" cx="51.6%" cy="29.95%" r="1.4"></circle><circle class="star" cx="22.86%" cy="32.49%" r="0.7"></circle><circle class="star" cx="17.34%" cy="62.52%" r="1.3"></circle><circle class="star" cx="11.74%" cy="7.98%" r="1.3"></circle><circle class="star" cx="6.38%" cy="30%" r="0.6"></circle><circle class="star" cx="83.96%" cy="68.23%" r="1.4"></circle><circle class="star" cx="80.96%" cy="53.84%" r="0.9"></circle><circle class="star" cx="72.38%" cy="53.01%" r="0.8"></circle><circle class="star" cx="53.83%" cy="60.78%" r="0.6"></circle><circle class="star" cx="85.62%" cy="53.55%" r="1.4"></circle><circle class="star" cx="25.59%" cy="68.74%" r="0.9"></circle><circle class="star" cx="69.72%" cy="28.88%" r="1.2"></circle><circle class="star" cx="15.99%" cy="59.54%" r="0.8"></circle><circle class="star" cx="29.6%" cy="64.06%" r="1.5"></circle><circle class="star" cx="98.96%" cy="79.18%" r="0.7"></circle><circle class="star" cx="58.69%" cy="76.74%" r="0.7"></circle><circle class="star" cx="26.91%" cy="46.09%" r="1.3"></circle><circle class="star" cx="53.27%" cy="40.93%" r="1.4"></circle><circle class="star" cx="13.45%" cy="89.91%" r="0.5"></circle><circle class="star" cx="68.13%" cy="14.35%" r="1.1"></circle><circle class="star" cx="90.48%" cy="9.18%" r="0.9"></circle><circle class="star" cx="32.97%" cy="38.25%" r="0.8"></circle><circle class="star" cx="77.04%" cy="47.92%" r="1.1"></circle><circle class="star" cx="39.69%" cy="98.58%" r="0.6"></circle><circle class="star" cx="19.86%" cy="36.07%" r="1.1"></circle><circle class="star" cx="99.5%" cy="76.01%" r="1.4"></circle><circle class="star" cx="82.76%" cy="75.21%" r="1.2"></circle><circle class="star" cx="7.57%" cy="29.03%" r="1.2"></circle><circle class="star" cx="80.92%" cy="93.78%" r="0.8"></circle><circle class="star" cx="96.54%" cy="66.3%" r="0.7"></circle><circle class="star" cx="14.9%" cy="65.23%" r="1.3"></circle><circle class="star" cx="64.65%" cy="14.44%" r="0.5"></circle><circle class="star" cx="64.71%" cy="90.64%" r="0.6"></circle><circle class="star" cx="67.63%" cy="63.98%" r="0.8"></circle><circle class="star" cx="95.24%" cy="3.12%" r="1"></circle><circle class="star" cx="80.03%" cy="22.09%" r="0.9"></circle><circle class="star" cx="17.5%" cy="80.04%" r="0.9"></circle><circle class="star" cx="53.14%" cy="31.46%" r="0.9"></circle><circle class="star" cx="53.89%" cy="56.9%" r="1.3"></circle><circle class="star" cx="66.54%" cy="82.63%" r="1"></circle><circle class="star" cx="44.68%" cy="58.59%" r="0.8"></circle><circle class="star" cx="53.23%" cy="0.84%" r="0.8"></circle><circle class="star" cx="57.77%" cy="56.66%" r="0.8"></circle><circle class="star" cx="31.85%" cy="19.54%" r="0.8"></circle><circle class="star" cx="3.82%" cy="73.54%" r="0.7"></circle><circle class="star" cx="84.83%" cy="90.06%" r="1.1"></circle><circle class="star" cx="34.11%" cy="79.41%" r="1.4"></circle><circle class="star" cx="39.51%" cy="38.2%" r="0.8"></circle><circle class="star" cx="40.28%" cy="9.16%" r="0.5"></circle><circle class="star" cx="86.4%" cy="13.05%" r="0.9"></circle><circle class="star" cx="68.11%" cy="38.04%" r="1"></circle><circle class="star" cx="70.55%" cy="42.82%" r="1.3"></circle><circle class="star" cx="63.06%" cy="47.35%" r="1.2"></circle><circle class="star" cx="56.52%" cy="14.27%" r="1.1"></circle><circle class="star" cx="78.81%" cy="55.47%" r="0.7"></circle><circle class="star" cx="58.57%" cy="80.2%" r="0.8"></circle><circle class="star" cx="66.77%" cy="8.21%" r="1.4"></circle><circle class="star" cx="67.21%" cy="39.27%" r="0.6"></circle><circle class="star" cx="8.68%" cy="91%" r="0.6"></circle><circle class="star" cx="63.17%" cy="69.59%" r="0.7"></circle><circle class="star" cx="3.4%" cy="83.99%" r="1.4"></circle><circle class="star" cx="32.14%" cy="97.75%" r="1.3"></circle><circle class="star" cx="78.33%" cy="21.94%" r="0.7"></circle><circle class="star" cx="96.69%" cy="94.65%" r="1.4"></circle><circle class="star" cx="20.17%" cy="70.63%" r="1"></circle><circle class="star" cx="82.43%" cy="42.74%" r="1.3"></circle><circle class="star" cx="80.1%" cy="54.17%" r="1.4"></circle><circle class="star" cx="36.91%" cy="8.2%" r="1.3"></circle><circle class="star" cx="40.97%" cy="31.58%" r="1.2"></circle><circle class="star" cx="90.62%" cy="44.18%" r="0.6"></circle><circle class="star" cx="3.77%" cy="74.91%" r="1.2"></circle><circle class="star" cx="69.1%" cy="80.56%" r="0.7"></circle><circle class="star" cx="19.67%" cy="75.15%" r="1"></circle><circle class="star" cx="52.83%" cy="87.8%" r="0.8"></circle><circle class="star" cx="95.06%" cy="50.14%" r="0.7"></circle><circle class="star" cx="51.79%" cy="13.12%" r="0.9"></circle><circle class="star" cx="21.24%" cy="54.58%" r="0.8"></circle><circle class="star" cx="82.66%" cy="43.57%" r="1.1"></circle><circle class="star" cx="53.54%" cy="30.53%" r="0.9"></circle><circle class="star" cx="52.22%" cy="0.6%" r="0.6"></circle><circle class="star" cx="3.37%" cy="11.35%" r="1.2"></circle><circle class="star" cx="46.19%" cy="9.64%" r="0.6"></circle><circle class="star" cx="28.01%" cy="91.22%" r="1.2"></circle><circle class="star" cx="47.17%" cy="99.96%" r="0.8"></circle><circle class="star" cx="61.11%" cy="2.54%" r="0.9"></circle><circle class="star" cx="74.71%" cy="95.98%" r="0.8"></circle><circle class="star" cx="58.58%" cy="45.26%" r="0.7"></circle><circle class="star" cx="70.27%" cy="99.17%" r="0.7"></circle><circle class="star" cx="72.82%" cy="22.9%" r="1"></circle><circle class="star" cx="50.34%" cy="46.24%" r="0.7"></circle><circle class="star" cx="76.77%" cy="43.98%" r="0.8"></circle><circle class="star" cx="29.32%" cy="18.05%" r="1.1"></circle><circle class="star" cx="60.48%" cy="12.12%" r="1.2"></circle><circle class="star" cx="59.42%" cy="96.72%" r="1.4"></circle><circle class="star" cx="18.5%" cy="95.09%" r="1.1"></circle><circle class="star" cx="93.46%" cy="91.33%" r="1.2"></circle><circle class="star" cx="22.6%" cy="27.94%" r="0.6"></circle><circle class="star" cx="95.06%" cy="18.4%" r="1.4"></circle><circle class="star" cx="12.68%" cy="4.86%" r="1"></circle><circle class="star" cx="50.27%" cy="48.41%" r="0.7"></circle><circle class="star" cx="91.2%" cy="34.98%" r="0.5"></circle><circle class="star" cx="98.25%" cy="40.63%" r="0.8"></circle><circle class="star" cx="75.54%" cy="74.54%" r="1.5"></circle><circle class="star" cx="46.45%" cy="12.74%" r="0.9"></circle><circle class="star" cx="51.22%" cy="17.94%" r="0.6"></circle><circle class="star" cx="5.24%" cy="82.42%" r="0.6"></circle><circle class="star" cx="19.54%" cy="51.96%" r="1.3"></circle><circle class="star" cx="53.41%" cy="86.14%" r="0.7"></circle><circle class="star" cx="11.83%" cy="79.92%" r="0.6"></circle><circle class="star" cx="86%" cy="90.4%" r="0.5"></circle><circle class="star" cx="96.1%" cy="77%" r="1.5"></circle><circle class="star" cx="25.36%" cy="69.74%" r="1.2"></circle><circle class="star" cx="99.63%" cy="38.8%" r="1.1"></circle><circle class="star" cx="95.64%" cy="44.43%" r="0.6"></circle><circle class="star" cx="26.71%" cy="87.24%" r="0.9"></circle><circle class="star" cx="82.75%" cy="57.5%" r="0.7"></circle><circle class="star" cx="25.34%" cy="99.81%" r="0.9"></circle><circle class="star" cx="95.66%" cy="60.32%" r="1.3"></circle><circle class="star" cx="70.28%" cy="0.9%" r="0.9"></circle><circle class="star" cx="57.75%" cy="53.14%" r="1.4"></circle><circle class="star" cx="33.59%" cy="16.65%" r="1"></circle><circle class="star" cx="87.45%" cy="12.02%" r="1"></circle><circle class="star" cx="5.8%" cy="68.11%" r="0.5"></circle><circle class="star" cx="15.09%" cy="46.08%" r="1.2"></circle><circle class="star" cx="68.04%" cy="18.79%" r="1.3"></circle><circle class="star" cx="35.66%" cy="9.36%" r="1"></circle><circle class="star" cx="6.4%" cy="77.4%" r="1.5"></circle><circle class="star" cx="81.72%" cy="1.91%" r="0.9"></circle><circle class="star" cx="88.21%" cy="1.24%" r="0.9"></circle><circle class="star" cx="52.43%" cy="91.81%" r="0.7"></circle><circle class="star" cx="94.01%" cy="65.21%" r="1.1"></circle><circle class="star" cx="31.97%" cy="0.85%" r="1.1"></circle><circle class="star" cx="45.34%" cy="36.44%" r="1.3"></circle><circle class="star" cx="46.21%" cy="51.38%" r="1.2"></circle><circle class="star" cx="80.11%" cy="27.06%" r="1"></circle><circle class="star" cx="85.3%" cy="11.09%" r="0.9"></circle><circle class="star" cx="61.33%" cy="72.23%" r="0.6"></circle><circle class="star" cx="75.33%" cy="85.57%" r="0.9"></circle><circle class="star" cx="51%" cy="96.09%" r="0.8"></circle><circle class="star" cx="83.45%" cy="34.55%" r="0.7"></circle><circle class="star" cx="76.2%" cy="70.81%" r="1.1"></circle><circle class="star" cx="59.93%" cy="67.19%" r="1.3"></circle><circle class="star" cx="73.92%" cy="68.69%" r="0.7"></circle><circle class="star" cx="87.03%" cy="78.17%" r="1"></circle><circle class="star" cx="50.1%" cy="19.89%" r="0.9"></circle><circle class="star" cx="6.43%" cy="26.21%" r="0.7"></circle><circle class="star" cx="67.26%" cy="82.43%" r="0.6"></circle><circle class="star" cx="99.58%" cy="31.8%" r="1.5"></circle><circle class="star" cx="86.62%" cy="33.93%" r="1"></circle><circle class="star" cx="99.19%" cy="15.45%" r="0.9"></circle></svg><svg class="stars top-0 left-0 right-0 bottom-0 absolute fill-white mobile:filter-bg-opacity-50" width="100%" height="100%" preserveAspectRatio="none"><circle class="star" cx="22.33%" cy="53.11%" r="1.2"></circle><circle class="star" cx="27.26%" cy="6.19%" r="1.5"></circle><circle class="star" cx="73.95%" cy="84.53%" r="1.3"></circle><circle class="star" cx="78.15%" cy="19.27%" r="1.2"></circle><circle class="star" cx="17.22%" cy="91.8%" r="0.7"></circle><circle class="star" cx="86.01%" cy="27.81%" r="0.6"></circle><circle class="star" cx="3.92%" cy="6.57%" r="0.7"></circle><circle class="star" cx="5.57%" cy="39.73%" r="1.2"></circle><circle class="star" cx="22.22%" cy="18.28%" r="1"></circle><circle class="star" cx="27.72%" cy="96.63%" r="0.9"></circle><circle class="star" cx="6.5%" cy="79.76%" r="0.7"></circle><circle class="star" cx="46.93%" cy="80.89%" r="0.5"></circle><circle class="star" cx="78.56%" cy="2.25%" r="0.8"></circle><circle class="star" cx="8.05%" cy="93.96%" r="0.6"></circle><circle class="star" cx="41.31%" cy="72.98%" r="0.9"></circle><circle class="star" cx="98.25%" cy="3.31%" r="1.2"></circle><circle class="star" cx="75.11%" cy="22.81%" r="1.2"></circle><circle class="star" cx="43.23%" cy="90.09%" r="1.2"></circle><circle class="star" cx="41.69%" cy="61.22%" r="0.6"></circle><circle class="star" cx="90.55%" cy="48.59%" r="0.7"></circle><circle class="star" cx="45.09%" cy="51.82%" r="1.4"></circle><circle class="star" cx="14.11%" cy="34.63%" r="0.6"></circle><circle class="star" cx="87.16%" cy="41.36%" r="0.6"></circle><circle class="star" cx="72.83%" cy="51.3%" r="0.6"></circle><circle class="star" cx="85.21%" cy="87.84%" r="1"></circle><circle class="star" cx="60.88%" cy="56.88%" r="0.6"></circle><circle class="star" cx="87.54%" cy="14.69%" r="1"></circle><circle class="star" cx="85.7%" cy="96.07%" r="1"></circle><circle class="star" cx="25.23%" cy="50.9%" r="0.6"></circle><circle class="star" cx="45.86%" cy="27.57%" r="1.2"></circle><circle class="star" cx="62.01%" cy="59.81%" r="1"></circle><circle class="star" cx="4.59%" cy="91.31%" r="1.1"></circle><circle class="star" cx="94.9%" cy="77.32%" r="1.2"></circle><circle class="star" cx="97.93%" cy="22.26%" r="1"></circle><circle class="star" cx="8.5%" cy="11.54%" r="0.9"></circle><circle class="star" cx="14.11%" cy="33.65%" r="1.5"></circle><circle class="star" cx="56.38%" cy="88.82%" r="0.8"></circle><circle class="star" cx="93.18%" cy="94.27%" r="0.6"></circle><circle class="star" cx="69.06%" cy="54.16%" r="0.9"></circle><circle class="star" cx="91.87%" cy="75.06%" r="0.7"></circle><circle class="star" cx="18.61%" cy="35.53%" r="0.6"></circle><circle class="star" cx="12.07%" cy="28.31%" r="0.9"></circle><circle class="star" cx="29.1%" cy="67.22%" r="0.9"></circle><circle class="star" cx="78.99%" cy="20.53%" r="0.7"></circle><circle class="star" cx="62.45%" cy="94.62%" r="1.3"></circle><circle class="star" cx="50.62%" cy="12.89%" r="1.4"></circle><circle class="star" cx="29.32%" cy="34.94%" r="0.7"></circle><circle class="star" cx="45.41%" cy="45.35%" r="1.3"></circle><circle class="star" cx="95.02%" cy="20.39%" r="0.9"></circle><circle class="star" cx="11.74%" cy="87%" r="1"></circle><circle class="star" cx="99.09%" cy="70.82%" r="0.7"></circle><circle class="star" cx="100%" cy="6.07%" r="1.2"></circle><circle class="star" cx="50.57%" cy="6.38%" r="1.2"></circle><circle class="star" cx="1.42%" cy="31.46%" r="0.6"></circle><circle class="star" cx="12.07%" cy="96.41%" r="0.9"></circle><circle class="star" cx="4.77%" cy="76.96%" r="1.4"></circle><circle class="star" cx="3.17%" cy="94.6%" r="0.6"></circle><circle class="star" cx="43.8%" cy="2.8%" r="0.6"></circle><circle class="star" cx="50.85%" cy="97.34%" r="1.3"></circle><circle class="star" cx="31.02%" cy="2.87%" r="1.4"></circle><circle class="star" cx="26.61%" cy="49.91%" r="1.4"></circle><circle class="star" cx="44.9%" cy="62.85%" r="1.5"></circle><circle class="star" cx="18.75%" cy="93.8%" r="0.9"></circle><circle class="star" cx="69.92%" cy="61.98%" r="1.1"></circle><circle class="star" cx="74.78%" cy="36.14%" r="1"></circle><circle class="star" cx="65.1%" cy="23.45%" r="1.2"></circle><circle class="star" cx="62.84%" cy="55.31%" r="1.1"></circle><circle class="star" cx="5.17%" cy="66.48%" r="1.5"></circle><circle class="star" cx="1.79%" cy="43.38%" r="0.7"></circle><circle class="star" cx="63.66%" cy="1.99%" r="0.9"></circle><circle class="star" cx="48.79%" cy="70.39%" r="1"></circle><circle class="star" cx="87.93%" cy="40.97%" r="1.1"></circle><circle class="star" cx="66.4%" cy="73.99%" r="0.5"></circle><circle class="star" cx="27.91%" cy="43.59%" r="1"></circle><circle class="star" cx="81.52%" cy="70.69%" r="1"></circle><circle class="star" cx="87.9%" cy="98.16%" r="0.5"></circle><circle class="star" cx="85.62%" cy="57.59%" r="1.4"></circle><circle class="star" cx="35.64%" cy="93.53%" r="1.2"></circle><circle class="star" cx="34.34%" cy="71.8%" r="0.6"></circle><circle class="star" cx="34.84%" cy="55.36%" r="0.5"></circle><circle class="star" cx="84.15%" cy="26.17%" r="1.3"></circle><circle class="star" cx="82.26%" cy="5.83%" r="1.4"></circle><circle class="star" cx="31.17%" cy="89.34%" r="1.1"></circle><circle class="star" cx="35.33%" cy="74.23%" r="0.9"></circle><circle class="star" cx="57.54%" cy="96.05%" r="0.8"></circle><circle class="star" cx="59.56%" cy="97.89%" r="0.5"></circle><circle class="star" cx="7.21%" cy="24.86%" r="0.9"></circle><circle class="star" cx="17.19%" cy="4.62%" r="1.4"></circle><circle class="star" cx="66.58%" cy="70.46%" r="0.9"></circle><circle class="star" cx="15.71%" cy="17.57%" r="1"></circle><circle class="star" cx="79.17%" cy="30.47%" r="1.3"></circle><circle class="star" cx="11.04%" cy="34.44%" r="0.5"></circle><circle class="star" cx="27.39%" cy="41.22%" r="1.2"></circle><circle class="star" cx="15.46%" cy="18.29%" r="0.5"></circle><circle class="star" cx="55.69%" cy="77.22%" r="0.7"></circle><circle class="star" cx="51.11%" cy="49.46%" r="0.6"></circle><circle class="star" cx="77.41%" cy="49.22%" r="1.4"></circle><circle class="star" cx="70.56%" cy="40.02%" r="1"></circle><circle class="star" cx="18.93%" cy="96.95%" r="1.1"></circle><circle class="star" cx="5.28%" cy="33%" r="0.7"></circle><circle class="star" cx="72.81%" cy="35.36%" r="0.8"></circle><circle class="star" cx="4.83%" cy="82.82%" r="1.3"></circle><circle class="star" cx="17.08%" cy="83.89%" r="0.6"></circle><circle class="star" cx="36.23%" cy="24.3%" r="0.6"></circle><circle class="star" cx="36.74%" cy="67.78%" r="0.9"></circle><circle class="star" cx="50.31%" cy="55.71%" r="0.8"></circle><circle class="star" cx="96.95%" cy="58.57%" r="0.8"></circle><circle class="star" cx="36.2%" cy="90.72%" r="0.8"></circle><circle class="star" cx="3.19%" cy="35.35%" r="1.2"></circle><circle class="star" cx="45.45%" cy="68.8%" r="0.7"></circle><circle class="star" cx="44.39%" cy="8.27%" r="1"></circle><circle class="star" cx="84.1%" cy="65.91%" r="0.5"></circle><circle class="star" cx="48.95%" cy="97.92%" r="1.2"></circle><circle class="star" cx="56.4%" cy="12.07%" r="0.7"></circle><circle class="star" cx="59.44%" cy="45.64%" r="1"></circle><circle class="star" cx="65.51%" cy="55.19%" r="1.4"></circle><circle class="star" cx="21.77%" cy="31.16%" r="1.1"></circle><circle class="star" cx="60.57%" cy="67.21%" r="1.3"></circle><circle class="star" cx="36.65%" cy="5.46%" r="1"></circle><circle class="star" cx="79.96%" cy="65.66%" r="1.5"></circle><circle class="star" cx="64.94%" cy="27.45%" r="1.3"></circle><circle class="star" cx="74.78%" cy="25.66%" r="1.2"></circle><circle class="star" cx="1.16%" cy="72.4%" r="0.6"></circle><circle class="star" cx="57.61%" cy="93.41%" r="0.8"></circle><circle class="star" cx="60.35%" cy="29.6%" r="1.4"></circle><circle class="star" cx="98.31%" cy="61.29%" r="0.6"></circle><circle class="star" cx="41.17%" cy="15.03%" r="0.8"></circle><circle class="star" cx="86.42%" cy="19.95%" r="0.9"></circle><circle class="star" cx="61.17%" cy="12.81%" r="1.4"></circle><circle class="star" cx="60.04%" cy="67.45%" r="0.8"></circle><circle class="star" cx="10.28%" cy="1.5%" r="0.6"></circle><circle class="star" cx="52.34%" cy="57.19%" r="1"></circle><circle class="star" cx="25%" cy="94.24%" r="0.6"></circle><circle class="star" cx="38.66%" cy="5.77%" r="1.3"></circle><circle class="star" cx="50.96%" cy="23.79%" r="0.9"></circle><circle class="star" cx="88.09%" cy="85.23%" r="1.1"></circle><circle class="star" cx="12.76%" cy="41.01%" r="1.2"></circle><circle class="star" cx="11.89%" cy="13.02%" r="0.5"></circle><circle class="star" cx="36.89%" cy="63.5%" r="1.2"></circle><circle class="star" cx="87.65%" cy="26.86%" r="1.3"></circle><circle class="star" cx="28.9%" cy="39.61%" r="0.8"></circle><circle class="star" cx="41.9%" cy="21.55%" r="1.4"></circle><circle class="star" cx="82.56%" cy="13.59%" r="1.2"></circle><circle class="star" cx="88.29%" cy="31.95%" r="0.9"></circle><circle class="star" cx="14.67%" cy="53.4%" r="1.2"></circle><circle class="star" cx="42.16%" cy="0.31%" r="0.7"></circle><circle class="star" cx="55.94%" cy="13.99%" r="0.5"></circle><circle class="star" cx="23.5%" cy="95.78%" r="1.2"></circle><circle class="star" cx="73.82%" cy="62.19%" r="1.1"></circle><circle class="star" cx="71.41%" cy="94.92%" r="0.7"></circle><circle class="star" cx="22.41%" cy="18.82%" r="0.9"></circle><circle class="star" cx="22.45%" cy="84.82%" r="1.2"></circle><circle class="star" cx="88.15%" cy="86.26%" r="1.3"></circle><circle class="star" cx="49.01%" cy="89.99%" r="1.3"></circle><circle class="star" cx="60%" cy="56.81%" r="1"></circle><circle class="star" cx="64.01%" cy="41.65%" r="0.7"></circle><circle class="star" cx="14.37%" cy="78.16%" r="0.8"></circle><circle class="star" cx="43.52%" cy="97.06%" r="1.1"></circle><circle class="star" cx="57.8%" cy="80.02%" r="0.8"></circle><circle class="star" cx="49.79%" cy="27.31%" r="1.2"></circle><circle class="star" cx="34.75%" cy="65.24%" r="1.4"></circle><circle class="star" cx="81.91%" cy="19.38%" r="1.3"></circle><circle class="star" cx="42.93%" cy="4.5%" r="1.2"></circle><circle class="star" cx="7.32%" cy="84.05%" r="0.8"></circle><circle class="star" cx="68.57%" cy="17.92%" r="1.4"></circle><circle class="star" cx="3.39%" cy="31.85%" r="1.1"></circle><circle class="star" cx="72.28%" cy="93.42%" r="0.7"></circle><circle class="star" cx="61.28%" cy="23.81%" r="1.2"></circle><circle class="star" cx="12.03%" cy="9.27%" r="0.5"></circle><circle class="star" cx="68.86%" cy="4.16%" r="1.4"></circle><circle class="star" cx="16.05%" cy="35.94%" r="1.3"></circle><circle class="star" cx="14.16%" cy="76.89%" r="1.5"></circle><circle class="star" cx="1.06%" cy="48.16%" r="1.3"></circle><circle class="star" cx="51.48%" cy="97.96%" r="0.7"></circle><circle class="star" cx="2.17%" cy="31.87%" r="1"></circle><circle class="star" cx="30.58%" cy="44.06%" r="0.9"></circle><circle class="star" cx="26.59%" cy="28.8%" r="0.9"></circle><circle class="star" cx="61.61%" cy="76.83%" r="1"></circle><circle class="star" cx="92.18%" cy="96.28%" r="0.8"></circle><circle class="star" cx="29.22%" cy="25.44%" r="1"></circle><circle class="star" cx="89.58%" cy="3.1%" r="1.4"></circle><circle class="star" cx="89.15%" cy="70.33%" r="0.8"></circle><circle class="star" cx="21.39%" cy="43.71%" r="0.6"></circle><circle class="star" cx="35.88%" cy="4.25%" r="0.8"></circle><circle class="star" cx="5.03%" cy="67.75%" r="1"></circle><circle class="star" cx="77.07%" cy="36.81%" r="1.2"></circle><circle class="star" cx="13.28%" cy="47.81%" r="1.2"></circle><circle class="star" cx="5.43%" cy="73.23%" r="1.2"></circle><circle class="star" cx="67.92%" cy="56.05%" r="0.8"></circle><circle class="star" cx="43.44%" cy="47.66%" r="1"></circle><circle class="star" cx="31.29%" cy="3.14%" r="0.7"></circle><circle class="star" cx="69.17%" cy="11.58%" r="1"></circle><circle class="star" cx="5.7%" cy="14.96%" r="1.1"></circle><circle class="star" cx="18.91%" cy="87.53%" r="1.2"></circle><circle class="star" cx="55.11%" cy="1.22%" r="0.7"></circle><circle class="star" cx="3.61%" cy="54.76%" r="1.5"></circle><circle class="star" cx="27.2%" cy="1.53%" r="1.3"></circle><circle class="star" cx="22.38%" cy="46.74%" r="0.5"></circle><circle class="star" cx="14.51%" cy="18.83%" r="1.1"></circle><circle class="star" cx="64.76%" cy="77.87%" r="1.1"></circle></svg><svg class="extras" width="100%" height="100%" preserveAspectRatio="none"><defs><radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5"><stop offset="0%" stop-color="rgba(255,255,255,.8)"></stop><stop offset="100%" stop-color="rgba(255,255,255,0)"></stop></radialGradient></defs><g transform="rotate(-135)"><ellipse class="comet comet-a" fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="2"></ellipse></g><g transform="rotate(20)"><ellipse class="comet comet-b" fill="url(#comet-gradient)" cx="100%" cy="0" rx="150" ry="2"></ellipse></g><g transform="rotate(300)"><ellipse class="comet comet-c" fill="url(#comet-gradient)" cy="100%" rx="150" ry="2"></ellipse></g></svg>',3),s2=[i2],o2=K({setup(e){const t=n0(),r=z(()=>t.meta.manage),n=c0(),a=o(null),{arrivedState:s}=A1(a),u=z(()=>(n.updateHeaderState(s.top),s.top)),_=z(()=>n.get_loading);return(g,d)=>{const p=a0("router-view");return F(),C(j,null,[c("div",{ref_key:"el",ref:a,"header-data":l(u),class:y(["app-inner relative overflow-y overflow-x-hidden bg-center bg-no-repeat bg-cover",{"bg-admin-featured":l(r)}])},[i(p),B(c("div",a2,s2,512),[[D,!l(r)]])],10,n2),B(i(l2,null,null,512),[[D,l(_)===!0]])],64)}}}),F2=new E1({accessTokenField:"accessToken",isTokenValidOrUndefined:e=>{const t=e.variables.pageRouteName,r=e.operationName,n=localStorage.getItem("expired")||"",a=localStorage.getItem("refresh-expired")||"",s=Math.floor(new Date().getTime()/1e3),u=Number(n),_=Number(a);let g=!1,d=!1;return r==="Login"?!0:n.length===10&&a.length===10?(s>u?g=!1:g=!0,s>_?d=!1:d=!0,!g&&d?!1:(!g&&!g&&(t==="Login"?console.log("token \u5DF2\u7D93\u5728\u767B\u5165\u9801"):(console.log("token \u4E0D\u5728\u767B\u5165\u9801"),alert("\u767B\u5165\u5DF2\u903E\u6642\uFF0C\u8ACB\u91CD\u65B0\u767B\u5165\u3002"),window.location.pathname="/login")),!0)):(console.log("token \u90FD\u6709\u554F\u984C"),["Home","About","Science","SingleScience","Story","SingleStory","Facilities","Stargazing","Archive","Search","NotFound","Login"].filter(f=>f===t).length===0&&(window.location.pathname="/login"),!0)},fetchAccessToken:async()=>{const e=await localStorage.getItem("token")||"",t=await localStorage.getItem("refresh-token")||"";return(await fetch("http://localhost/api",{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({query:`
          mutation ExtendExpired( $oriReToken: String!) {
            extendExpired(oriReToken: $oriReToken) {
              name
              uid
              email
              iat
              token
              exp
              refreshToken
              refreshExp
            }
          }
        `,variables:{oriReToken:t}})})).json()},handleFetch:e=>e,handleResponse:(e,t)=>async r=>{let n={accessToken:r.data.extendExpired.token,accessExp:r.data.extendExpired.exp,refreshToken:r.data.extendExpired.refreshToken,refreshExp:r.data.extendExpired.refreshExp};return await localStorage.setItem("token",n.accessToken),await localStorage.setItem("refresh-token",n.refreshToken),await localStorage.setItem("expired",n.accessExp),await localStorage.setItem("refresh-expired",n.refreshExp),n},handleError:e=>{console.warn("Your refresh token is invalid. Try to relogin"),console.error(e),console.log("\u767B\u51FA")}}),u2=z1({uri:"http://localhost/api"}),d2=B1(async(e,{headers:t})=>{const r=await localStorage.getItem("token");return{headers:Y0(W0({},t),{authorization:r?`Bearer ${r}`:""})}}),p2=P1(({graphQLErrors:e,networkError:t})=>{const r=window.localStorage;e&&e.forEach(({message:n,locations:a,path:s})=>console.log(`[GraphQL error]: Message: ${n}, Location: ${a}, Path: ${s}`)),t&&JSON.parse(JSON.stringify(t)).statusCode!==200&&(alert(t),console.log(`[Network error]: ${t}`),window.location.pathname="/notfound")}),h2=new D1,G=new L1({link:I1([F2,d2,p2,u2]),cache:h2});function f2(e){return G.query({query:Z`
      query PageInfo {
        pageInfo {
          page_title
          sub_page_title
          page_route
        }
      }
    `,variables:{pageRouteName:e}})}function q0(e,t){return G.mutate({mutation:Z`
      mutation SingleUpload($file: Upload!) {
        singleUpload(file: $file) {
          filename
          mimetype
          encoding
          s3Path
          errorTitle
        }
      }
    `,variables:{file:e,pageRouteName:t},fetchPolicy:"no-cache"})}function C2(e,t,r){return G.mutate({mutation:Z`
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          name
          uid
          email
          token
          exp
          refreshToken
          refreshExp
          errorTitle
          errorMsg
        }
      }
    `,variables:{email:e,password:t,pageRouteName:r},fetchPolicy:"no-cache"})}function U0(e,t,r,n,a,s){return G.query({query:Z`
      query Artists(
        $first: Int,
        $last: Int,
        $after: Int,
        $before: Int,
        $categoryid: String
      ) {
        artists(first:$first, last: $last, after: $after, before: $before, categoryid: $categoryid) {
          edges {
            postid
            title
            categoryid
            updatetime
            content
            description
            image
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            start
            end
          }
        }
      }
    `,variables:{first:e,last:t,after:r,before:n,categoryid:a,pageRouteName:s}})}function H0(e,t,r){return G.query({query:Z`
      query GetSinglePost($postid: Int!) {
        getSinglePost(postid: $postid) {
          postid
          content
          title
          categoryid
          updatetime
          image
        }
      }`,variables:{postid:e,pageRouteName:t},fetchPolicy:r?"cache-first":"no-cache"})}function L0(e,t){return G.query({query:Z`
      query ArtistsCategories {
        artistsCategories {
          post_category_name
          post_category_id
        }
      }
    `,variables:{pageRouteName:e},fetchPolicy:t?"cache-first":"no-cache"})}function g2(e,t,r,n,a,s){return G.query({query:Z`
      query SearchArtists(
        $first: Int,
        $last: Int,
        $after: Int,
        $before: Int,
        $keyword: String
      ) {
        searchArtists(first:$first, last: $last, after: $after, before: $before, keyword: $keyword) {
          edges {
            postid
            title
            categoryid
            updatetime
            content
            description
            image
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            start
            end
          }
        }
      }
    `,variables:{first:e,last:t,after:r,before:n,keyword:a,pageRouteName:s}})}function m2(e,t,r){return G.mutate({mutation:Z`
      mutation SetNewCategory($categoryName: String!, $categoryId: String!) {
        setNewCategory(categoryName: $categoryName, categoryId: $categoryId) {
          code
          message
        }
      }
    `,variables:{categoryName:e,categoryId:t,pageRouteName:r},fetchPolicy:"no-cache"})}function l1(e,t){return G.mutate({mutation:Z`
      mutation DeleteCategory($categoryId: String!) {
        deleteCategory(categoryId: $categoryId) {
          code
          message
        }
      }
    `,variables:{categoryId:e,pageRouteName:t},fetchPolicy:"no-cache"})}function _2(e,t,r){return G.mutate({mutation:Z`
      mutation MutCategory($categoryName: String!, $categoryId: String!) {
        mutCategory(categoryName: $categoryName, categoryId: $categoryId) {
          code
          message
        }
      }
    `,variables:{categoryName:e,categoryId:t,pageRouteName:r},fetchPolicy:"no-cache"})}function b2(e,t){return G.query({query:Z`
      query GetSingleCategory($categoryId: String!) {
        getSingleCategory(categoryId: $categoryId) {
          post_category_name
          post_category_id
        }
      }
    `,variables:{categoryId:e,pageRouteName:t},fetchPolicy:"no-cache"})}function x2(e,t,r){return G.query({query:Z`
      query ArtistsPagi($pageNumber: Int, $linesPerpage: Int) {
        artistsPagi(pageNumber: $pageNumber, linesPerpage: $linesPerpage) {
          edges {
            postid
            title
            categoryid
            updatetime
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            start
            end
            totalPagi
          }
        }
      }
    `,variables:{pageNumber:e,linesPerpage:t,pageRouteName:r},fetchPolicy:"no-cache"})}function v2(e,t,r,n,a){return G.mutate({mutation:Z`
      mutation SetNewPost($title: String, $categoryid: String, $content: String, $image: String) {
        setNewPost(title: $title, categoryid: $categoryid, content: $content, image: $image) {
          code
          message
        }
      }
    `,variables:{title:e,categoryid:t,content:r,image:n,pageRouteName:a},fetchPolicy:"no-cache"})}function n1(e,t){return G.mutate({mutation:Z`
      mutation DeletePost($postid: Int) {
        deletePost(postid: $postid) {
          code
          message
        }
      }
    `,variables:{postid:e,pageRouteName:t},fetchPolicy:"no-cache"})}function M2(e,t,r,n,a,s){return G.mutate({mutation:Z`
      mutation MutSinglePost($postid: Int!, $title: String, $categoryid: String, $content: String, $image: String) {
        mutSinglePost(postid: $postid, title: $title, categoryid: $categoryid, content: $content, image: $image) {
          code
          message
        }
      }
    `,variables:{postid:e,title:t,categoryid:r,content:n,image:a,pageRouteName:s},fetchPolicy:"no-cache"})}const y2={class:"fixed flex flex-col items-center justify-center mt-32 z-10000"},w2={class:"flex flex-col"},k2={class:"flex items-center hover:animate-pulse header-logo"},$2=c("defs",null,[c("pattern",{x:"-31.7",y:"123",width:"69",height:"69",patternUnits:"userSpaceOnUse",id:"\u5713\u9EDE\u5716\u6A23",viewBox:"2.1 -70.9 69 69",overflow:"visible"},[c("g",null,[c("polygon",{fill:"none",points:"71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9    "}),c("polygon",{fill:"#F6BB60",points:"71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9    "}),c("g",null,[c("path",{fill:"#FFFFFF",d:"M61.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-71.7,61.8-71.7,61.8-71.7      C61.8-71.6,61.8-71.6,61.8-71.7"}),c("path",{fill:"#FFFFFF",d:"M54.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-71.7,54.1-71.7,54.1-71.7      C54.1-71.6,54.1-71.6,54.1-71.7"}),c("path",{fill:"#FFFFFF",d:"M46.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.4-71.7,46.4-71.7,46.4-71.7      C46.4-71.6,46.4-71.6,46.4-71.7"}),c("path",{fill:"#FFFFFF",d:"M38.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-71.7,38.8-71.7,38.8-71.7      C38.8-71.6,38.8-71.6,38.8-71.7"}),c("path",{fill:"#FFFFFF",d:"M31.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-71.7,31.1-71.7,31.1-71.7      C31.1-71.6,31.1-71.6,31.1-71.7"}),c("path",{fill:"#FFFFFF",d:"M23.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.4-71.7,23.4-71.7,23.4-71.7      C23.4-71.6,23.4-71.6,23.4-71.7"}),c("path",{fill:"#FFFFFF",d:"M15.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-71.7,15.8-71.7,15.8-71.7      C15.8-71.6,15.8-71.6,15.8-71.7"}),c("path",{fill:"#FFFFFF",d:"M8.1-71.7c0,0.1,0,0.1,0,0.2C8-71.4,8-71.4,7.9-71.3c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.1-71.7,8.1-71.7,8.1-71.7      C8.1-71.6,8.1-71.6,8.1-71.7"}),c("path",{fill:"#FFFFFF",d:"M0.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.8-69.4,1-69,1.2-68.9c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.4-71.7,0.4-71.7,0.4-71.7      C0.4-71.6,0.4-71.6,0.4-71.7"})]),c("g",null,[c("path",{fill:"#FFFFFF",d:"M69.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-71.7,69.4-71.7,69.4-71.7      C69.4-71.6,69.4-71.6,69.4-71.7"})]),c("path",{fill:"#FFFFFF",d:"M0.5-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3     c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-69.4,1-69,1.3-68.9c0.2,0,0.4-0.1,0.5-0.1     c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2     c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8     c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-71.7,0.5-71.7,0.5-71.7     C0.5-71.6,0.5-71.6,0.5-71.7"}),c("g",null,[c("g",null,[c("path",{fill:"#FFFFFF",d:"M69.4-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-64,69.4-64.1,69.4-64C69.4-64,69.4-64,69.4-64"}),c("path",{fill:"#FFFFFF",d:"M61.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-64,61.8-64.1,61.8-64C61.8-64,61.8-64,61.8-64"}),c("path",{fill:"#FFFFFF",d:"M54.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-64,54.1-64.1,54.1-64C54.1-64,54.1-64,54.1-64"}),c("path",{fill:"#FFFFFF",d:"M46.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-64,46.5-64.1,46.5-64C46.5-64,46.5-64,46.5-64"}),c("path",{fill:"#FFFFFF",d:"M38.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-64,38.8-64.1,38.8-64C38.8-64,38.8-64,38.8-64"}),c("path",{fill:"#FFFFFF",d:"M31.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-64,31.1-64.1,31.1-64C31.1-64,31.1-64,31.1-64"}),c("path",{fill:"#FFFFFF",d:"M23.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-64,23.5-64.1,23.5-64C23.5-64,23.5-64,23.5-64"}),c("path",{fill:"#FFFFFF",d:"M15.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-64,15.8-64.1,15.8-64C15.8-64,15.8-64,15.8-64"}),c("path",{fill:"#FFFFFF",d:"M8.2-64c0,0.1,0,0.1,0,0.2C8.1-63.7,8-63.7,8-63.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-62.2,8.2-62,8.3-61.9c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-64,8.2-64.1,8.2-64C8.1-64,8.1-64,8.2-64"}),c("path",{fill:"#FFFFFF",d:"M0.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-62,3-61.9,3.1-62c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-64,0.5-64.1,0.5-64C0.5-64,0.5-64,0.5-64"})]),c("g",null,[c("path",{fill:"#FFFFFF",d:"M69.4-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-56.4,69.4-56.4,69.4-56.3       C69.4-56.3,69.4-56.3,69.4-56.3"}),c("path",{fill:"#FFFFFF",d:"M61.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-56.4,61.8-56.4,61.8-56.3       C61.8-56.3,61.8-56.3,61.8-56.3"}),c("path",{fill:"#FFFFFF",d:"M54.1-56.3c0,0.1,0,0.1,0,0.2C54-56.1,54-56.1,53.9-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-56.4,54.1-56.4,54.1-56.3       C54.1-56.3,54.1-56.3,54.1-56.3"}),c("path",{fill:"#FFFFFF",d:"M46.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-56.4,46.5-56.4,46.5-56.3       C46.5-56.3,46.5-56.3,46.5-56.3"}),c("path",{fill:"#FFFFFF",d:"M38.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-56.4,38.8-56.4,38.8-56.3       C38.8-56.3,38.8-56.3,38.8-56.3"}),c("path",{fill:"#FFFFFF",d:"M31.1-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-56.4,31.1-56.4,31.1-56.3       C31.1-56.3,31.1-56.3,31.1-56.3"}),c("path",{fill:"#FFFFFF",d:"M23.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-56.4,23.5-56.4,23.5-56.3       C23.5-56.3,23.5-56.3,23.5-56.3"}),c("path",{fill:"#FFFFFF",d:"M15.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-56.4,15.8-56.4,15.8-56.3       C15.8-56.3,15.8-56.3,15.8-56.3"}),c("path",{fill:"#FFFFFF",d:"M8.2-56.3c0,0.1,0,0.1,0,0.2C8.1-56.1,8-56.1,8-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-56.4,8.2-56.4,8.2-56.3       C8.1-56.3,8.1-56.3,8.2-56.3"}),c("path",{fill:"#FFFFFF",d:"M0.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-56.4,0.5-56.4,0.5-56.3       C0.5-56.3,0.5-56.3,0.5-56.3"})]),c("g",null,[c("path",{fill:"#FFFFFF",d:"M69.4-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-48.7,69.4-48.8,69.4-48.7       C69.4-48.7,69.4-48.7,69.4-48.7"}),c("path",{fill:"#FFFFFF",d:"M61.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-48.7,61.8-48.8,61.8-48.7       C61.8-48.7,61.8-48.7,61.8-48.7"}),c("path",{fill:"#FFFFFF",d:"M54.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-48.7,54.1-48.8,54.1-48.7       C54.1-48.7,54.1-48.7,54.1-48.7"}),c("path",{fill:"#FFFFFF",d:"M46.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-48.7,46.5-48.8,46.5-48.7       C46.5-48.7,46.5-48.7,46.5-48.7"}),c("path",{fill:"#FFFFFF",d:"M38.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-48.7,38.8-48.8,38.8-48.7       C38.8-48.7,38.8-48.7,38.8-48.7"}),c("path",{fill:"#FFFFFF",d:"M31.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-48.7,31.1-48.8,31.1-48.7       C31.1-48.7,31.1-48.7,31.1-48.7"}),c("path",{fill:"#FFFFFF",d:"M23.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-48.7,23.5-48.8,23.5-48.7       C23.5-48.7,23.5-48.7,23.5-48.7"}),c("path",{fill:"#FFFFFF",d:"M15.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-48.7,15.8-48.8,15.8-48.7       C15.8-48.7,15.8-48.7,15.8-48.7"}),c("path",{fill:"#FFFFFF",d:"M8.2-48.7c0,0.1,0,0.1,0,0.2C8.1-48.4,8-48.4,8-48.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C8.5-46.4,8.7-46,8.9-46c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-48.7,8.2-48.8,8.2-48.7       C8.1-48.7,8.1-48.7,8.2-48.7"}),c("path",{fill:"#FFFFFF",d:"M0.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-46.4,1-46,1.3-46c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-48.7,0.5-48.8,0.5-48.7       C0.5-48.7,0.5-48.7,0.5-48.7"})]),c("g",null,[c("path",{fill:"#FFFFFF",d:"M69.4-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-41.1,69.4-41.1,69.4-41       C69.4-41,69.4-41,69.4-41"}),c("path",{fill:"#FFFFFF",d:"M61.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-41.1,61.8-41.1,61.8-41       C61.8-41,61.8-41,61.8-41"}),c("path",{fill:"#FFFFFF",d:"M54.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-41.1,54.1-41.1,54.1-41       C54.1-41,54.1-41,54.1-41"}),c("path",{fill:"#FFFFFF",d:"M46.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-41.1,46.5-41.1,46.5-41       C46.5-41,46.5-41,46.5-41"}),c("path",{fill:"#FFFFFF",d:"M38.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-41.1,38.8-41.1,38.8-41       C38.8-41,38.8-41,38.8-41"}),c("path",{fill:"#FFFFFF",d:"M31.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-41.1,31.1-41.1,31.1-41       C31.1-41,31.1-41,31.1-41"}),c("path",{fill:"#FFFFFF",d:"M23.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-41.1,23.5-41.1,23.5-41       C23.5-41,23.5-41,23.5-41"}),c("path",{fill:"#FFFFFF",d:"M15.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-41.1,15.8-41.1,15.8-41       C15.8-41,15.8-41,15.8-41"}),c("path",{fill:"#FFFFFF",d:"M8.2-41c0,0.1,0,0.1,0,0.2C8.1-40.8,8-40.8,8-40.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-41.1,8.2-41.1,8.2-41C8.1-41,8.1-41,8.2-41"}),c("path",{fill:"#FFFFFF",d:"M0.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-39,3-39,3.1-39c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-41.1,0.5-41.1,0.5-41C0.5-41,0.5-41,0.5-41"})]),c("g",null,[c("path",{fill:"#FFFFFF",d:"M69.4-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-33.4,69.4-33.5,69.4-33.4       C69.4-33.4,69.4-33.4,69.4-33.4"}),c("path",{fill:"#FFFFFF",d:"M61.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-33.4,61.8-33.5,61.8-33.4       C61.8-33.4,61.8-33.4,61.8-33.4"}),c("path",{fill:"#FFFFFF",d:"M54.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-33.4,54.1-33.5,54.1-33.4       C54.1-33.4,54.1-33.4,54.1-33.4"}),c("path",{fill:"#FFFFFF",d:"M46.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-33.4,46.5-33.5,46.5-33.4       C46.5-33.4,46.5-33.4,46.5-33.4"}),c("path",{fill:"#FFFFFF",d:"M38.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-33.4,38.8-33.5,38.8-33.4       C38.8-33.4,38.8-33.4,38.8-33.4"}),c("path",{fill:"#FFFFFF",d:"M31.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-33.4,31.1-33.5,31.1-33.4       C31.1-33.4,31.1-33.4,31.1-33.4"}),c("path",{fill:"#FFFFFF",d:"M23.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-33.4,23.5-33.5,23.5-33.4       C23.5-33.4,23.5-33.4,23.5-33.4"}),c("path",{fill:"#FFFFFF",d:"M15.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-33.4,15.8-33.5,15.8-33.4       C15.8-33.4,15.8-33.4,15.8-33.4"}),c("path",{fill:"#FFFFFF",d:"M8.2-33.4c0,0.1,0,0.1,0,0.2C8.1-33.1,8-33.1,8-33.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-33.4,8.2-33.5,8.2-33.4       C8.1-33.4,8.1-33.4,8.2-33.4"}),c("path",{fill:"#FFFFFF",d:"M0.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-33.4,0.5-33.5,0.5-33.4       C0.5-33.4,0.5-33.4,0.5-33.4"})]),c("g",null,[c("path",{fill:"#FFFFFF",d:"M69.4-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-25.8,69.4-25.8,69.4-25.7       C69.4-25.7,69.4-25.7,69.4-25.7"}),c("path",{fill:"#FFFFFF",d:"M61.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-25.8,61.8-25.8,61.8-25.7       C61.8-25.7,61.8-25.7,61.8-25.7"}),c("path",{fill:"#FFFFFF",d:"M54.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-25.8,54.1-25.8,54.1-25.7       C54.1-25.7,54.1-25.7,54.1-25.7"}),c("path",{fill:"#FFFFFF",d:"M46.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-25.8,46.5-25.8,46.5-25.7       C46.5-25.7,46.5-25.7,46.5-25.7"}),c("path",{fill:"#FFFFFF",d:"M38.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-25.8,38.8-25.8,38.8-25.7       C38.8-25.7,38.8-25.7,38.8-25.7"}),c("path",{fill:"#FFFFFF",d:"M31.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-25.8,31.1-25.8,31.1-25.7       C31.1-25.7,31.1-25.7,31.1-25.7"}),c("path",{fill:"#FFFFFF",d:"M23.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-25.8,23.5-25.8,23.5-25.7       C23.5-25.7,23.5-25.7,23.5-25.7"}),c("path",{fill:"#FFFFFF",d:"M15.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-25.8,15.8-25.8,15.8-25.7       C15.8-25.7,15.8-25.7,15.8-25.7"}),c("path",{fill:"#FFFFFF",d:"M8.2-25.7c0,0.1,0,0.1,0,0.2C8.1-25.4,8-25.5,8-25.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-24,8.2-23.8,8.3-23.6c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-25.8,8.2-25.8,8.2-25.7       C8.1-25.7,8.1-25.7,8.2-25.7"}),c("path",{fill:"#FFFFFF",d:"M0.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-23.5,1-23.1,1.3-23c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-25.8,0.5-25.8,0.5-25.7       C0.5-25.7,0.5-25.7,0.5-25.7"})]),c("g",null,[c("path",{fill:"#FFFFFF",d:"M69.4-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-18.1,69.4-18.2,69.4-18.1       C69.4-18,69.4-18.1,69.4-18.1"}),c("path",{fill:"#FFFFFF",d:"M61.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-18.1,61.8-18.2,61.8-18.1       C61.8-18,61.8-18.1,61.8-18.1"}),c("path",{fill:"#FFFFFF",d:"M54.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-18.1,54.1-18.2,54.1-18.1       C54.1-18,54.1-18.1,54.1-18.1"}),c("path",{fill:"#FFFFFF",d:"M46.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-18.1,46.5-18.2,46.5-18.1       C46.5-18,46.5-18.1,46.5-18.1"}),c("path",{fill:"#FFFFFF",d:"M38.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-18.1,38.8-18.2,38.8-18.1       C38.8-18,38.8-18.1,38.8-18.1"}),c("path",{fill:"#FFFFFF",d:"M31.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-18.1,31.1-18.2,31.1-18.1       C31.1-18,31.1-18.1,31.1-18.1"}),c("path",{fill:"#FFFFFF",d:"M23.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-18.1,23.5-18.2,23.5-18.1       C23.5-18,23.5-18.1,23.5-18.1"}),c("path",{fill:"#FFFFFF",d:"M15.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-18.1,15.8-18.2,15.8-18.1       C15.8-18,15.8-18.1,15.8-18.1"}),c("path",{fill:"#FFFFFF",d:"M8.2-18.1c0,0.1,0,0.1,0,0.2C8.1-17.8,8-17.8,8-17.8c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-16.3,8.2-16.1,8.3-16c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-18.1,8.2-18.2,8.2-18.1       C8.1-18,8.1-18.1,8.2-18.1"}),c("path",{fill:"#FFFFFF",d:"M0.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-16.1,3-16,3.1-16c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-18.1,0.5-18.2,0.5-18.1       C0.5-18,0.5-18.1,0.5-18.1"})]),c("g",null,[c("path",{fill:"#FFFFFF",d:"M69.4-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-10.5,69.4-10.5,69.4-10.4       C69.4-10.4,69.4-10.4,69.4-10.4"}),c("path",{fill:"#FFFFFF",d:"M61.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1C63.9-8,63.8-8.2,64-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-10.5,61.8-10.5,61.8-10.4       C61.8-10.4,61.8-10.4,61.8-10.4"}),c("path",{fill:"#FFFFFF",d:"M54.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-10.5,54.1-10.5,54.1-10.4       C54.1-10.4,54.1-10.4,54.1-10.4"}),c("path",{fill:"#FFFFFF",d:"M46.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-10.5,46.5-10.5,46.5-10.4       C46.5-10.4,46.5-10.4,46.5-10.4"}),c("path",{fill:"#FFFFFF",d:"M38.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1C40.9-8,40.8-8.2,41-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-10.5,38.8-10.5,38.8-10.4       C38.8-10.4,38.8-10.4,38.8-10.4"}),c("path",{fill:"#FFFFFF",d:"M31.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-10.5,31.1-10.5,31.1-10.4       C31.1-10.4,31.1-10.4,31.1-10.4"}),c("path",{fill:"#FFFFFF",d:"M23.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-10.5,23.5-10.5,23.5-10.4       C23.5-10.4,23.5-10.4,23.5-10.4"}),c("path",{fill:"#FFFFFF",d:"M15.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1C17.9-8,17.8-8.2,18-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-10.5,15.8-10.5,15.8-10.4       C15.8-10.4,15.8-10.4,15.8-10.4"}),c("path",{fill:"#FFFFFF",d:"M8.2-10.4c0,0.1,0,0.1,0,0.2C8.1-10.1,8-10.2,8-10.1C7.9-10,7.9-9.8,7.9-9.8c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-8.7,8.2-8.5,8.3-8.3c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-10.5,8.2-10.5,8.2-10.4       C8.1-10.4,8.1-10.4,8.2-10.4"}),c("path",{fill:"#FFFFFF",d:"M0.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1C0.3-10,0.2-9.8,0.2-9.8c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-8.2,1-7.8,1.3-7.7c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1C2.6-8,2.5-8.2,2.7-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-10.5,0.5-10.5,0.5-10.4       C0.5-10.4,0.5-10.4,0.5-10.4"})])]),c("g",null,[c("path",{fill:"#FFFFFF",d:"M69.4-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C69.8-0.5,70-0.1,70.2,0c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-2.8,69.4-2.9,69.4-2.8      C69.4-2.7,69.4-2.8,69.4-2.8"}),c("path",{fill:"#FFFFFF",d:"M61.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C61.6-1,61.8-0.8,62-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-2.8,61.8-2.9,61.8-2.8      C61.8-2.7,61.8-2.8,61.8-2.8"}),c("path",{fill:"#FFFFFF",d:"M54.1-2.8c0,0.1,0,0.1,0,0.2C54-2.5,54-2.5,53.9-2.5c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C54-1,54.1-0.8,54.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C56.9-0.8,57-1,57.1-1.2c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-2.8,54.1-2.9,54.1-2.8      C54.1-2.7,54.1-2.8,54.1-2.8"}),c("path",{fill:"#FFFFFF",d:"M46.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C46.8-0.5,47-0.1,47.2,0c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-2.8,46.5-2.9,46.5-2.8      C46.5-2.7,46.5-2.8,46.5-2.8"}),c("path",{fill:"#FFFFFF",d:"M38.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C38.6-1,38.8-0.8,39-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-2.8,38.8-2.9,38.8-2.8      C38.8-2.7,38.8-2.8,38.8-2.8"}),c("path",{fill:"#FFFFFF",d:"M31.1-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C31-1,31.1-0.8,31.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-2.8,31.1-2.9,31.1-2.8      C31.1-2.7,31.1-2.8,31.1-2.8"}),c("path",{fill:"#FFFFFF",d:"M23.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C23.8-0.5,24-0.1,24.3,0c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-2.8,23.5-2.9,23.5-2.8      C23.5-2.7,23.5-2.8,23.5-2.8"}),c("path",{fill:"#FFFFFF",d:"M15.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C15.7-1,15.8-0.8,16-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-2.8,15.8-2.9,15.8-2.8      C15.8-2.7,15.8-2.8,15.8-2.8"}),c("path",{fill:"#FFFFFF",d:"M8.2-2.8c0,0.1,0,0.1,0,0.2C8.1-2.5,8-2.5,8-2.5C7.9-2.4,7.9-2.2,7.9-2.1c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-1,8.2-0.8,8.3-0.7C8.5-0.5,8.7-0.1,8.9,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1      c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3      c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C9-3.5,8.8-3.4,8.7-3.4      C8.5-3.3,8.6-3.2,8.4-3.1C8.3-3.1,8.2-3,8.2-2.9C8.2-2.8,8.2-2.9,8.2-2.8C8.1-2.7,8.1-2.8,8.2-2.8"}),c("path",{fill:"#FFFFFF",d:"M0.5-2.8c0,0.1,0,0.1,0,0.2C0.4-2.5,0.4-2.5,0.3-2.5C0.3-2.4,0.2-2.2,0.2-2.1c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C0.3-1,0.5-0.8,0.7-0.7C0.9-0.5,1-0.1,1.3,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1      c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C3.3-0.8,3.4-1,3.5-1.2c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3      c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C1.3-3.5,1.2-3.4,1-3.4      C0.9-3.3,0.9-3.2,0.7-3.1C0.6-3.1,0.5-3,0.5-2.9C0.5-2.8,0.5-2.9,0.5-2.8C0.5-2.7,0.5-2.8,0.5-2.8"})])])])],-1),S2=c("path",{fill:"#9BA095",d:"M81.2,27.9L43.8,92.8L6.4,27.9H81.2 M83.1,24.2H4.5c-2,0-3.2,2.2-2.3,3.9l39.3,68.1c0.5,0.8,1.4,1.3,2.3,1.3  c0.9,0,1.7-0.4,2.3-1.3l39.3-68.1C86.4,26.4,85.1,24.2,83.1,24.2L83.1,24.2z"},null,-1),A2=c("path",{fill:"#7A7F73",d:"M43.8,0L0,75.9h87.6L43.8,0z M33.1,29.3l2.5,4.3l-12,20.8L21.1,50L33.1,29.3z M25.4,57.4l12-20.8l19.7,34.2  h-24L25.4,57.4z"},null,-1),E2=[$2,S2,A2],z2={class:"flex items-end space-x-5 self-center hover:animate-pulse"},B2=["onClick"],P2={class:"w-full h-full modal-content relative m-auto overflow-hidden screens-h-900:overflow-y-auto"},D2={class:"grid w-table:grid-cols-2 h-table:grid-cols-none mobile:grid-cols-none h-screen py-20 laptop:px-40 h-table:px-20 h-table:pt-36 h-table:pb-10 mobile:px-9"},L2={class:"grid grid-flow-row gap-7 w-table:gap-9 large-pc:gap-12 screens-h-900:auto-rows-max large-pc:auto-rows-auto auto-rows-max"},I2=q(" About"),R2=q(" Science"),T2=q(" Story"),N2=q(" Facilities"),V2=q(" Stargazing"),O2=q(" Search"),j2=q(" \u95DC\u65BC\u6211\u5011"),q2=q(" \u5929\u6587\u79D1\u666E"),U2=q(" \u661F\u661F\u7269\u8A9E"),H2=q(" \u5929\u6587\u8A2D\u65BD"),Z2=q(" \u89C0\u661F\u5730\u9EDE"),G2=q(" \u641C\u5C0B\u9801\u9762"),X2=q(" \u5929\u6587\u8A2D\u65BD"),k0=K({setup(e){const t=n0(),r=String(t.name);n(r);async function n(A){let e0=(await(await f2(A)).data.pageInfo).filter(Y=>A===Y.page_route);if(e0.length===0)a.setPageTitle("\u627E\u4E0D\u5230\u7DB2\u9801"),a.setPageSubTitlee("PAGE NOT FOUND");else if(!(e0[0].page_route==="SingleStory"||e0[0].page_route==="SingleScience"))if(e0[0].page_route==="Archive"){let Y="\u6A19\u7C64\u5F59\u6574",V="Tag";t.params.tagid&&(V=String(t.params.tagid));const U=await L0(r,!0);Y=await a.changeCatName(U.data.artistsCategories,V),a.setPageTitle(Y),a.setPageSubTitlee(V)}else a.setPageTitle(String(e0[0].page_title)),a.setPageSubTitlee(String(e0[0].sub_page_title))}o([{title:"\u95DC\u65BC\u6211\u5011",enTitle:"About",path:"/about",img:"/img/menu-bg-01.jpg"},{title:"\u5929\u6587\u79D1\u666E",enTitle:"Science",path:"/science",img:"/img/menu-bg-02.jpg"},{title:"\u661F\u661F\u7269\u8A9E",enTitle:"Story",path:"/story",img:"/img/menu-bg-03.jpg"},{title:"\u5929\u6587\u8A2D\u65BD",enTitle:"Facilities",path:"/facilities",img:"/img/menu-bg-04.jpg"},{title:"\u89C0\u661F\u5730\u9EDE",enTitle:"Stargazing",path:"/stargazing",img:"/img/menu-bg-05.jpg"},{title:"\u641C\u5C0B\u9801\u9762",enTitle:"Search",path:"/search",img:"/img/menu-bg-06.jpg"}]);const a=c0(),s=z(()=>a.isHeaderTop);z(()=>a.get_loading);const u=o(!1),_=o(),g=R0(_),d=o(),p=R0(d),h=o(),f=R0(h),M=o(),w=R0(M),b=o(),$=R0(b),k=o(),v=R0(k),S=o(!0);function E(){u.value===!1?(u.value=!0,S.value=!1,setTimeout(()=>{S.value=!0},2e3)):setTimeout(()=>{u.value=!1},500)}return w0(async()=>{}),(A,P)=>{const N=a0("router-link");return F(),C(j,null,[c("div",y2,[c("div",w2,[c("nav",{class:y(["fixed flex justify-between py-5 px-9 w-full top-0 left-0 right-0 delay-75 duration-1000 hover:opacity-100",[{"opacity-30":l(s)===!0&&u.value===!1}]])},[c("div",k2,[i(N,{to:"/",class:"cursor-pointer"},{default:L(()=>[(F(),C("svg",{class:y(["header-svg-obj h-auto w-64px mobile:w-9",{active:u.value===!0}]),xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:a":"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",version:"1.1",x:"0px",y:"0px",width:"89px",height:"98px",viewBox:"-0.7 0 89 98","enable-background":"new -0.7 0 89 98","xml:space":"preserve"},E2,2))]),_:1})]),c("div",z2,[c("div",{class:y(["bars cursor-pointer text-base inline-block group",{active:u.value===!0}]),onClick:I(E,["prevent"])},[c("div",{class:y(["top-bar bg-white transition-all duration-300 ease-in-out w-1-8em h-0-2em mb-0-4em rounded-2em group-hover:bg-sp-color-light",[{"bg-main-color-dark":u.value===!0},{"transform-gpu":u.value===!0},{"rotate-225":u.value===!0},{"translate-y-0-8em ":u.value===!0}]])},null,2),c("div",{class:y(["middle-bar bg-white transition-all duration-300 ease-in-out w-1-8em h-0-2em mb-0-4em rounded-2em group-hover:bg-sp-color-light",[{"bg-main-color-dark":u.value===!0},{"transform-gpu":u.value===!0},{"opacity-0":u.value===!0},{"scale-0":u.value===!0}]])},null,2),c("div",{class:y(["bottom-bar bg-white transition-all duration-300 ease-in-out w-1-8em h-0-2em mb-0-4em rounded-2em group-hover:bg-sp-color-light",[{"bg-main-color-dark":u.value===!0},{"transform-gpu":u.value===!0},{"-rotate-225":u.value===!0},{"-translate-y-0-35em ":u.value===!0}]])},null,2)],10,B2)])],2)])]),c("div",{id:"modal",class:y(["modal-bg fixed w-full h-full left-0 top-0 overflow-auto bg-secondary animate__animated animate__fadeInDown animate__faster",[{"opacity-100":u.value===!0},{"z-9999":u.value===!0},{animate__slideOutUp:u.value===!1},{"opacity-0":S.value===!0}]])},[c("div",P2,[c("div",D2,[c("ul",L2,[c("li",null,[i(N,{ref_key:"aboutRef",ref:_,to:"/about",title:"\u95DC\u65BC\u6211\u5011",class:"font-serif tracking-wide-menu text-main-color-dark hover:text-sp-color-light duration-1000 h-table:text-8xl w-table:text-7xl large-pc:text-menu-title mobile:text-5xl screens-h-900:text-5xl"},{default:L(()=>[I2]),_:1},512)]),c("li",null,[i(N,{ref_key:"scienceRef",ref:d,to:"/science",title:"\u5929\u6587\u79D1\u666E",class:"font-serif tracking-wide-menu text-main-color-dark hover:text-sp-color-light duration-1000 h-table:text-8xl w-table:text-7xl large-pc:text-menu-title mobile:text-5xl screens-h-900:text-5xl"},{default:L(()=>[R2]),_:1},512)]),c("li",null,[i(N,{ref_key:"storyRef",ref:h,to:"/story",title:"\u661F\u661F\u7269\u8A9E",class:"font-serif tracking-wide-menu text-main-color-dark hover:text-sp-color-light duration-1000 h-table:text-8xl w-table:text-7xl large-pc:text-menu-title mobile:text-5xl screens-h-900:text-5xl"},{default:L(()=>[T2]),_:1},512)]),c("li",null,[i(N,{ref_key:"facilitiesRef",ref:M,to:"/facilities",title:"\u5929\u6587\u8A2D\u65BD",class:"font-serif tracking-wide-menu text-main-color-dark hover:text-sp-color-light duration-1000 h-table:text-8xl w-table:text-7xl large-pc:text-menu-title mobile:text-5xl screens-h-900:text-5xl"},{default:L(()=>[N2]),_:1},512)]),c("li",null,[i(N,{ref_key:"stargazingRef",ref:b,to:"/stargazing",title:"\u89C0\u661F\u5730\u9EDE",class:"font-serif tracking-wide-menu text-main-color-dark hover:text-sp-color-light duration-1000 h-table:text-8xl w-table:text-7xl large-pc:text-menu-title mobile:text-5xl screens-h-900:text-5xl"},{default:L(()=>[V2]),_:1},512)]),c("li",null,[i(N,{ref_key:"searchRef",ref:k,to:"/search",title:"\u641C\u5C0B\u9801\u9762",class:"font-serif tracking-wide-menu text-main-color-dark hover:text-sp-color-light duration-1000 h-table:text-8xl w-table:text-7xl large-pc:text-menu-title mobile:text-5xl screens-h-900:text-5xl"},{default:L(()=>[O2]),_:1},512)])]),c("div",{class:y(["w-table:block h-table:hidden mobile:hidden bg-center bg-no-repeat bg-cover relative large-pc:mb-16 -top-4 transition-all duration-400 mobile:text-5xl",[{"bg-menu-about":l(g)},{"bg-menu-science":l(p)},{"bg-menu-story":l(f)},{"bg-menu-facilities":l(w)||!l(g)&&!l(p)&&!l(f)&&!l(w)&&!l($)&&!l(v)},{"bg-menu-stargazing":l($)},{"bg-menu-search":l(v)}]])},[l(g)?(F(),s0(N,{key:0,to:"/about",class:"text-white absolute right-12 bottom-12 text-3xl hover:text-sub-color-light duration-1000 text-shadow"},{default:L(()=>[j2]),_:1})):l(p)?(F(),s0(N,{key:1,to:"/science",class:"text-white absolute right-12 bottom-12 text-3xl hover:text-sub-color-light duration-1000 text-shadow"},{default:L(()=>[q2]),_:1})):l(f)?(F(),s0(N,{key:2,to:"/story",class:"text-white absolute right-12 bottom-12 text-3xl hover:text-sub-color-light duration-1000 text-shadow"},{default:L(()=>[U2]),_:1})):l(w)?(F(),s0(N,{key:3,to:"/facilities",class:"text-white absolute right-12 bottom-12 text-3xl hover:text-sub-color-light duration-1000 text-shadow"},{default:L(()=>[H2]),_:1})):l($)?(F(),s0(N,{key:4,to:"/stargazing",class:"text-white absolute right-12 bottom-12 text-3xl hover:text-sub-color-light duration-1000 text-shadow"},{default:L(()=>[Z2]),_:1})):l(v)?(F(),s0(N,{key:5,to:"/search",class:"text-white absolute right-12 bottom-12 text-3xl hover:text-sub-color-light duration-1000 text-shadow"},{default:L(()=>[G2]),_:1})):(F(),s0(N,{key:6,to:"/facilities",class:"text-white absolute right-12 bottom-12 text-3xl hover:text-sub-color-light duration-1000 text-shadow"},{default:L(()=>[X2]),_:1}))],2)])])],2)],64)}}}),Q2={class:"mx-auto h-screen w-full z-10"},W2={class:"flex items-stretch h-full"},Y2=c("div",{class:"flex-none w-1/12 h-16"},null,-1),J2={class:"flex-grow w-auto h-auto text-white self-center"},K2={class:"font-normal large-pc:text-9xl middle-pc:text-8xl text-sp-color-light tracking-normal"},cc=["innerHTML"],tc=c("span",null,"\u67E5\u770B\u66F4\u591A",-1),ec=c("div",{class:"flex-none w-1/12 h-16"},null,-1),rc=K({setup(e){const t=c0(),r=n0(),n=z(()=>t.get_firstEnter);let a=["Stars","are","blind"],s="\u5F80\u4E0A\u770B\u5929\u4E0A\u7684\u661F\u661F\u800C\u4E0D\u662F\u5F80\u4E0B\u770B\u4F60\u7684\u8173\uFF0C\u8A66\u5716\u7406\u89E3\u4F60\u6240\u770B\u5230\u7684\uFF0C\u601D\u7D22\u5B87\u5B99\u70BA\u4F55\u5B58\u5728\uFF0C\u597D\u5947\u4E00\u9EDE\u3002<p>&nbsp;</p>\u2014\u2014\u53F2\u8482\u82AC\u30FB\u970D\u91D1";const u=z(()=>{let g=t.pageTitle.split(" ");return g.length===1&&g[0].length===0&&(g=a),g}),_=z(()=>t.pageSubTitle||s);return J0({bodyAttrs:{title:r.meta.title},meta:[{property:"og:title",content:r.meta.title},{name:"twitter:title",content:r.meta.title}]}),new Date().getFullYear(),(g,d)=>{const p=k0,h=a0("router-link");return F(),C(j,null,[i(p),c("div",{class:y(["absolute right-0 top-0 mx-auto h-screen w-full z-0 bg-astrolabe bg-right-bottom bg-no-repeat bg-cover filter-bg-opacity-20 w-table:bg-contain animate__animated animate__fadeInRightBig w-table:filter-bg-opacity-50 laptop:filter-bg-opacity-none",[{"animate__delay-5s":l(n)===!0},{"animate__delay-3s":l(n)===!1}]])},null,2),c("div",Q2,[c("div",W2,[Y2,c("div",J2,[c("h1",{class:y(["font-serif large-pc:text-9xl middle-pc:text-8xl tracking-normal animate__animated animate__fadeInLeft mobile:capitalize",[{"animate__delay-3s":l(n)===!0},{"animate__delay-1s":l(n)===!1}]])},[c("span",K2,x(l(u)[0]),1),q(" "+x(l(u)[1])+" "+x(l(u)[2]),1)],2),c("h4",{class:y(["text-main-color-light animate__animated animate__fadeIn large-pc:mt-10 mt-6 large-pc:text-2xl h-table:text-lg mobile:text-lg middle-pc:w-auto h-table:w-380px",[{"animate__delay-4s":l(n)===!0},{"animate__delay-2s":l(n)===!1}]]),innerHTML:l(_)},null,10,cc),i(h,{class:y(["btn draw meet inline-block animate__animated animate__flipInX large-pc:mt-12 mt-8",[{"animate__delay-5s":l(n)===!0},{"animate__delay-3s":l(n)===!1}]]),to:"/science"},{default:L(()=>[tc]),_:1},8,["class"])]),ec])])],64)}}}),i0=K({setup(e){const t=n0(),r=z(()=>t.meta.manage),n=new Date().getFullYear();return(a,s)=>(F(),C("div",{class:y(["border-main-color-light w-full text-center text-tiny tracking-wider text-main-color-light py-6",{"border-t":!l(r)}])},"Copyright \xA9 "+x(l(n))+" STARGAZER. All rights reserved.",3))}}),lc={class:"uppercase text-main-color-light mb-4"},nc={class:"text-white relative -left-2 mobile:text-5xl"},A0=K({setup(e){const t=c0(),r=z(()=>t.get_firstEnter),n=z(()=>t.pageTitle),a=z(()=>t.pageSubTitle);return(s,u)=>(F(),C("div",{class:y(["w-10/12 mb-16 mt-3 animate__animated animate__fadeIn",[{"animate__delay-4s":l(r)===!0},{"animate__delay-1s":l(r)===!1}]])},[c("h4",lc,x(l(a)),1),c("h1",nc,x(l(n)),1)],2))}});var ac="/img/kenny-logo.png",ic="/img/about-bg-sp.jpg",sc="/svg/hand.svg";function oc(e){return G.query({query:Z`
      query AboutInfo {
        aboutInfo {
          visual
          slogan
          philosophy
          quote
          epilogue
        }
      }
    `,variables:{pageRouteName:e}})}function a1(e){return G.query({query:Z`
      query SloganLoad {
        aboutInfo {
          visual
          slogan
          philosophy
          quote
          epilogue
        }
        pageInfo {
          page_title
          sub_page_title
          page_route
        }
      }
    `,variables:{pageRouteName:e},fetchPolicy:"no-cache"})}function Fc(e,t,r){return G.mutate({mutation:Z`
      mutation EditHomeSlogan($pageTitle: String!, $pageSubTitle: String!) {
        editHomeSlogan(pageTitle: $pageTitle, pageSubTitle: $pageSubTitle) {
          code
          message
        }
      }
    `,variables:{pageTitle:e,pageSubTitle:t,pageRouteName:r},fetchPolicy:"no-cache"})}function uc(e,t,r){return G.mutate({mutation:Z`
      mutation MutAboutSlogan($sloganRef: String!, $philosophyRef: String!) {
        mutAboutSlogan(sloganRef: $sloganRef, philosophyRef: $philosophyRef) {
          code
          message
        }
      }
    `,variables:{sloganRef:e,philosophyRef:t,pageRouteName:r},fetchPolicy:"no-cache"})}function dc(e,t){return G.mutate({mutation:Z`
      mutation MutAboutQuote($quoteRef: String!) {
        mutAboutQuote(quoteRef: $quoteRef) {
          code
          message
        }
      }
    `,variables:{quoteRef:e,pageRouteName:t},fetchPolicy:"no-cache"})}function pc(e,t){return G.mutate({mutation:Z`
      mutation MutAboutEpilogue($epilogueRef: String!) {
        mutAboutEpilogue(epilogueRef: $epilogueRef) {
          code
          message
        }
      }
    `,variables:{epilogueRef:e,pageRouteName:t},fetchPolicy:"no-cache"})}const hc={class:"h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"},fc=c("div",{class:"absolute left-0 top-0 w-full h-full bg-gradient-radial from-white z-20"},null,-1),Cc={class:"laptop:w-5/12 h-table:w-10/12 middle-pc:pl-24 laptop:pl-10 laptop:mt-0 mt-10"},gc=["innerHTML"],mc=c("span",{class:"text-sub-color-dark text-9xl font-serif font-light absolute -top-2 right-1 mobile:text-8xl"},"\u201D",-1),_c={class:"h-table:flex flex-wrap items-start justify-center py-24 px-4 bg-main-color-black text-main-color-light mobile:px-8"},bc=c("img",{class:"mx-auto mb-10",src:sc},null,-1),xc={class:"h-table:flex flex-wrap items-start justify-center pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-4 bg-white bg-about-writing bg-right-bottom bg-no-repeat middle-pc:bg-contain h-table:bg-auto-500 mobile:px-8 mobile:bg-contain"},vc=c("div",{class:"middle-pc:w-3/12 h-table:w-5/12"},null,-1),Mc=K({setup(e){const t=n0(),r=String(t.name),n=c0(),a=z(()=>n.get_firstEnter),s=o(null),{tilt:u,roll:_,source:g}=R1(s),d=o(null),p=o(!1),{stop:h}=K0(d,([{isIntersecting:v}])=>{p.value=v,v&&h()}),f=o(""),M=o(""),w=o(""),b=o(""),$=o("");k();async function k(){const v=await oc(r);f.value=String(v.data.aboutInfo.visual.replace(/(\\r)*\\n/g,"")),M.value=String(v.data.aboutInfo.slogan.replace(/(\\r)*\\n/g,"")),w.value=String(v.data.aboutInfo.philosophy.replace(/(\\r)*\\n/g,"")),b.value=String(v.data.aboutInfo.quote.replace(/(\\r)*\\n/g,"")),$.value=String(v.data.aboutInfo.epilogue.replace(/(\\r)*\\n/g,""))}return(v,S)=>{const E=k0,A=A0,P=a0("v-md-preview"),N=i0;return F(),C(j,null,[i(E),c("div",hc,[i(A),c("div",{class:y(["animate__animated animate__fadeInLeftBig laptop:w-5/12 h-table:w-10/12 h-full overflow-hidden relative",[{"animate__delay-3s":l(a)===!0}]])},[c("img",{class:"transition-all ease-out z-30 absolute w-auto object-center",src:ac,style:B0({transform:`rotateX(${l(_)*30}deg) rotateY(${l(u)*30}deg)`,left:"calc(50% - 130px)",top:"calc(50% - 115px)"})},null,4),fc,c("img",{class:"w-auto transition-all ease-out bg-white z-10 object-center",src:ic,ref_key:"photo",ref:s,style:B0({transform:`rotateX(${l(_)*15}deg) rotateY(${l(u)*15}deg) scale(1.05)`})},null,4)],2),c("div",Cc,[B(c("div",{class:y(["animate__animated animate__flipInX callout-box bg-main-color-light py-10 pl-10 pr-14 mb-8 border-l-callout-box-boder border-sub-color-dark relative mobile:py-4 mobile:pl-4",[{"animate__delay-4s":l(a)===!0},{"animate__delay-1s":l(a)===!1}]])},[c("div",{class:"text-main-color-black font-bold",innerHTML:M.value},null,8,gc),mc],2),[[D,M.value]]),B(c("div",{class:y(["text-main-color-light animate__animated animate__fadeIn",[{"animate__delay-5s":l(a)===!0},{"animate__delay-2s":l(a)===!1}]])},[i(P,{class:"markdown-body",text:w.value},null,8,["text"])],2),[[D,w.value]])])]),B(c("div",_c,[c("div",{ref_key:"block_black_target",ref:d,class:y(["h-table:w-10/12 text-center grid laptop:grid-cols-none h-table:grid-cols-3 animate__animated animate__delay-1s opacity-0",{animate__fadeIn:p.value}])},[bc,i(P,{class:"markdown-body laptop:text-center laptop:col-auto text-left h-table:col-span-2",text:b.value},null,8,["text"])],2)],512),[[D,b.value]]),B(c("div",xc,[c("div",{class:y(["middle-pc:w-7/12 laptop:w-5/12 h-table:w-10/12 text-left laptop:pb-0 pb-320px text-main-color-black animate__animated animate__delay-2s",{animate__fadeIn:p.value}])},[i(P,{class:"markdown-body",text:$.value},null,8,["text"])],2),vc],512),[[D,$.value]]),i(N)],64)}}}),yc={key:0,class:"flex"},wc=["onClick"],kc={class:"flex items-center group large-pc:mr-10 laptop:mr-6"},$c=["id","value"],Sc=c("svg",{class:"ml-2 w-4 h-4 absolute right-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),Ac={id:"dropdown",class:"z-10 bg-main-color-light divide-y divide-gray-100 absolute w-200px"},Ec={class:"py-1 text-sm text-main-color-black cursor-pointer"},zc=["onClick"],Bc={class:"text-3xl font-normal text-white truncate"},Pc={class:"text-tiny mt-1 text-main-color-light"},Dc={key:0,class:"text-lg"},Lc=c("span",null,"\u67E5\u770B\u66F4\u591A",-1),Ic={class:y(["h-table:w-10/12","h-screen"])},Rc={class:"h-table:w-10/12 text-center"},Tc=c("span",null,"\u52A0\u8F09\u66F4\u591A",-1),Nc=[Tc],Vc=K({setup(e){const t=n0(),r=String(t.name),n=c0(),a=z(()=>n.get_firstEnter),s=o(""),u=o([]),_=z(()=>{let S=n.changeCatName(u.value,s.value);return S||""}),[g,d]=V0();function p(S){g.value=!1,k(S)}function h(){g.value===!0&&(g.value=!1)}f();async function f(){const E=(await L0(r,!0)).data.artistsCategories.filter(A=>A.post_category_id!=="story");u.value=E}const M=o(!1),w=o([]),b=o({end:0,hasNextPage:!1,hasPreviousPage:!1,start:0});v(9,null,null,null,"");function $(){v(3,null,b.value.end,null,s.value||"")}function k(S){s.value=S,M.value=!0,setTimeout(()=>{w.value=[],v(9,null,null,null,S),M.value=!1},500)}async function v(S,E,A,P,N){const e0=await U0(S,E,A,P,N,r);let V=w.value.concat(e0.data.artists.edges);w.value=V,b.value=e0.data.artists.pageInfo}return(S,E)=>{const A=k0,P=A0,N=a0("router-link"),e0=a0("v-md-preview"),Y=i0;return F(),C(j,null,[i(A),c("div",{onClick:E[2]||(E[2]=I(V=>h(),["self"])),class:"h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"},[i(P),c("div",{class:y(["animate__animated animate__fadeIn w-10/12 middle-pc:mt-16 middle-pc:mb-20 mt-6 mb-16 hidden laptop:inline-flex",[{"animate__delay-4s":l(a)===!0},{"animate__delay-1s":l(a)===!1}]])},[u.value.length>0&&u.value?(F(),C("ul",yc,[(F(!0),C(j,null,h0(u.value,(V,U)=>(F(),C("li",{key:U,class:"min-w-min w-auto",onClick:O=>k(String(V.post_category_id))},[c("div",kc,[c("input",{id:String(V.post_category_id),class:"hidden",value:V.post_category_id},null,8,$c),c("label",{class:y(["flex-none","delay-75","duration-1000","flex","items-center","cursor-pointer","text-2xl","group-hover:text-sp-color-light",{"text-sub-color-light":V.post_category_id===s.value},{"text-main-color-light":V.post_category_id!==s.value}])},[c("span",{class:y(["flex-none w-3 h-3 inline-block mr-2 rounded-full border border-grey flex-no-shrink group-hover:bg-sp-color-light delay-75 duration-1000 whitespace-nowrap",{"bg-sub-color-light":V.post_category_id===s.value}])},null,2),q(" "+x(V.post_category_name),1)],2)])],8,wc))),128))])):J("",!0)],2),c("div",{class:y(["dropdown-menu z-40 h-table:w-10/12 mb-8 relative laptop:hidden animate__animated animate__fadeIn",[{"animate__delay-4s":l(a)===!0},{"animate__delay-1s":l(a)===!1}]])},[c("button",{id:"dropdownDefault",class:"duration-1000 text-main-color-light border border-white border-opacity-60 hover:border-opacity-0 bg-opacity-0 bg-white hover:bg-opacity-18 hover:text-sub-color-light focus:bg-opacity-18 focus:outline-none focus:border-opacity-0 focus:text-sub-color-light font-medium text-xl pl-4 p-3 relative text-center inline-flex items-center tracking-wide-content w-200px",type:"button",onClick:E[0]||(E[0]=I(V=>l(d)(),["prevent"]))},[q(x(l(_))+" ",1),Sc]),B(c("div",Ac,[c("ul",Ec,[(F(!0),C(j,null,h0(u.value,(V,U)=>(F(),C("li",{key:U,onClick:I(O=>p(String(V.post_category_id)),["stop"]),class:"tracking-wide-content block py-2 px-4 hover:text-sub-color-dark"},x(V.post_category_name),9,zc))),128))])],512),[[D,l(g)]])],2),w.value.length>0&&w.value?(F(),C("div",{key:0,class:y(["grid laptop:grid-cols-3 grid-cols-2 mobile:grid-cols-1 pro-pc:gap-24 h-table:gap-12 mobile:gap-5 h-table:w-10/12 overflow-hidden animate__animated animate__fadeInUp",{"animate__delay-4s":l(a)===!0},{animate__fadeOut:M.value}])},[(F(!0),C(j,null,h0(w.value,(V,U)=>(F(),C("div",{key:U},[c("div",{class:y(["h-96 py-12 px-8 bg-white hover:bg-opacity-0 delay-75 duration-1000 border border-white border-opacity-0 hover:border-opacity-60 animate__animated animate__fadeInUp",[{"bg-opacity-18":(U+1)%3===0},{"bg-opacity-12":(U+3)%3===1},{"bg-opacity-6":(U+4)%3===1}]])},[c("p",Bc,x(V.title),1),c("p",Pc,[q(x(l(n).changeDate(Number(V.updatetime)))+", ",1),l(n).changeCatName(u.value,V.categoryid)?(F(),s0(N,{key:1,to:"/archive/"+V.categoryid,class:"text-sub-color-light hover:text-sp-color-light"},{default:L(()=>[q(x(l(n).changeCatName(u.value,V.categoryid)),1)]),_:2},1032,["to"])):(F(),C("span",Dc,"\u672A\u5206\u985E"))]),i(e0,{class:"text-main-color-light font-light mt-5 grid-des-box",text:V.description,height:"400px"},null,8,["text"]),i(N,{class:"mt-10 btn draw meet inline-block",to:"/science/"+V.postid},{default:L(()=>[Lc]),_:2},1032,["to"])],2)]))),128))],2)):J("",!0),B(c("div",Ic,null,512),[[D,w.value.length===0]]),B(c("div",Rc,[c("button",{class:"h-table:mt-24 mt-6 mobile:mt-11 btn draw meet",onClick:E[1]||(E[1]=I(V=>$(),["prevent"]))},Nc)],512),[[D,b.value.hasNextPage&&w.value.length>0]])]),i(Y)],64)}}}),Oc={class:"h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"},jc={class:"h-table:w-10/12 h-table:mt-8 mt-5"},qc={class:"text-main-color-light text-tiny"},Uc=K({setup(e){const t=c0(),r=z(()=>t.get_firstEnter),n=n0(),a=v0(),s=String(n.name),u=z(()=>Number(n.params.sid)),_=o(""),g=o({name:"",catId:""}),d=o("");return w0(async()=>{const p=await L0(s,!0);if(u.value){const h=await H0(u.value,s,!0);if(h.data.getSinglePost){const f=t.changeCatName(p.data.artistsCategories,h.data.getSinglePost.categoryid);t.setPageTitle(h.data.getSinglePost.title),t.setPageSubTitlee(f||"\u672A\u5206\u985E"),d.value=h.data.getSinglePost.content,_.value=t.changeDate(Number(h.data.getSinglePost.updatetime)),g.value={name:f,catId:h.data.getSinglePost.categoryid}}else a.push("/notfound")}else a.push("/notfound")}),(p,h)=>{const f=k0,M=A0,w=a0("v-md-preview"),b=a0("router-link"),$=i0;return F(),C(j,null,[i(f),c("div",Oc,[i(M),c("div",{class:y(["animate__animated animate__fadeIn h-table:w-10/12 bg-opacity-6 bg-white text-main-color-light laptop:p-20 p-10 mobile:p-8 middle-pc:mt-16 mt-8 md-container",[{"animate__delay-5s":l(r)===!0},{"animate__delay-1s":l(r)===!1}]])},[i(w,{class:"markdown-body",text:d.value,height:"400px"},null,8,["text"])],2),c("div",jc,[c("span",qc,x(_.value)+",",1),i(b,{class:"text-sub-color-light text-tiny",to:"/archive/"+g.value.catId},{default:L(()=>[q(x(g.value.name),1)]),_:1},8,["to"])])]),i($)],64)}}}),Hc={class:"h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"},Zc=c("div",{class:"left-line w-3/12 flex items-stretch justify-start border border-b border-t-0 border-l-0 border-r-0 h-0 border-main-color-middle mt-5 mr-2"},[c("span",{class:"self-center bg-sub-color-dark rounded-full h-9px w-9px block relative -left-4px"})],-1),Gc={class:"middle-pc:w-9/12"},Xc={class:"text-3xl text-white group-hover:text-sp-color-light delay-75 duration-1000"},Qc={class:"w-full"},Wc=["src"],Yc={class:"text-main-color-light grid-des-box"},Jc=c("div",{class:"right-line w-3/12 flex items-stretch justify-end border border-b border-t-0 border-l-0 border-r-0 h-0 border-main-color-middle mt-5 ml-2"},[c("span",{class:"self-center bg-sub-color-dark rounded-full h-9px w-9px relative -right-5px"})],-1),Kc={class:"h-table:w-10/12 w-table:text-center text-left"},c4=c("span",null,"\u52A0\u8F09\u66F4\u591A",-1),t4=[c4],e4=K({setup(e){const t=n0(),r=String(t.name),n=c0(),a=z(()=>n.get_firstEnter),s=o(null),{width:u}=T1(),_=O0(c1(s)),g=z(()=>_.width?_.width:600),d=z(()=>u.value>=992?Math.floor(g.value/2):Math.floor(g.value));J0({bodyAttrs:{title:t.meta.title},meta:[{property:"og:title",content:t.meta.title},{name:"twitter:title",content:t.meta.title}]});const p=o([]),h=o({end:0,hasNextPage:!1,hasPreviousPage:!1,start:0});f(4,null,null,null,"story");async function f(w,b,$,k,v){const S=await U0(w,b,$,k,v,r);let A=p.value.concat(S.data.artists.edges);p.value=A,h.value=S.data.artists.pageInfo}function M(){f(1,null,h.value.end,null,"story")}return(w,b)=>{const $=k0,k=A0,v=a0("router-link"),S=a0("masonry-wall"),E=i0;return F(),C(j,null,[i($),c("div",Hc,[i(k),p.value.length>0&&p.value?(F(),C("div",{key:0,ref_key:"masonryRef",ref:s,class:y(["container mx-auto h-table:w-10/12 h-full grid grid-col-2 grid-flow-col justify-items-center relative animate__animated animate__fadeIn",[{"animate__delay-5s":l(a)===!0},{"animate__delay-1s":l(a)===!1}]])},[i(S,{items:p.value,"ssr-columns":1,"column-width":l(d),gap:0,class:"py-56 timeline-grid",style:{width:"100%"}},{default:L(({item:A,index:P})=>[c("div",{class:y([[{"mt-20":P!==0},{"mt-0 ":P===0},{"animate__animated animate__fadeInUp":p.value.length===1+P}],"flex group single-timeline-grid"]),style:B0({width:l(d)+"px"})},[Zc,c("div",Gc,[i(v,{to:"/story/"+A.postid},{default:L(()=>[c("h2",Xc,x(A.title),1)]),_:2},1032,["to"]),c("div",Qc,[i(v,{to:"/story/"+A.postid},{default:L(()=>[c("img",{class:"w-auto mx-0 mt-6 mb-4 inline-block delay-75 duration-1000 group-hover:brightness-75",src:A.image},null,8,Wc)]),_:2},1032,["to"])]),c("span",Yc,x(A.description),1)]),Jc],6)]),_:1},8,["items","column-width"])],2)):J("",!0),B(c("div",Kc,[c("button",{class:"mt-20 btn draw meet",onClick:b[0]||(b[0]=I(A=>M(),["prevent"]))},t4)],512),[[D,h.value.hasNextPage&&p.value.length>0]])]),i(E)],64)}}}),r4={class:"h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"},l4=c("div",{class:"mb-14 text-4xl"},"\u6545\u4E8B\u5167\u5BB9",-1),n4=K({setup(e){const t=o(null),r=O0(c1(t)),n=z(()=>r?r.width*9/12:200),a=c0(),s=z(()=>a.get_firstEnter),u=n0(),_=v0(),g=String(u.name),d=z(()=>Number(u.params.nid)),p=o(""),h=o("");return w0(async()=>{const f=await L0(g,!0);if(d.value){const M=await H0(d.value,g,!0);if(M.data.getSinglePost){const w=a.changeCatName(f.data.artistsCategories,M.data.getSinglePost.categoryid);a.setPageTitle(M.data.getSinglePost.title),a.setPageSubTitlee(w||"\u672A\u5206\u985E"),p.value=M.data.getSinglePost.content,h.value=M.data.getSinglePost.image}else _.push("/notfound")}else _.push("/notfound")}),(f,M)=>{const w=k0,b=A0,$=a0("v-md-preview"),k=i0;return F(),C(j,null,[i(w),c("div",r4,[i(b),c("div",{ref_key:"imgSizeRef",ref:t,class:y(["laptop:w-4/12 h-table:w-5/12 mobile:6/12 flex-shrink mt-10 animate__animated animate__fadeInLeftBig",[{"animate__delay-4s":l(s)===!0},{"animate__delay-1s":l(s)===!1}]])},[c("div",{style:B0([{width:l(n)+"px"},{height:l(n)+"px"},{"background-image":"url("+h.value+")"}]),class:"rounded-full bg-cover laptop:ml-0 ml-auto mr-auto"},null,4)],2),c("div",{class:y(["laptop:w-6/12 h-table:w-10/12 w-full text-main-color-light mt-12 md-container animate__animated animate__fadeIn",[{"animate__delay-5s":l(s)===!0},{"animate__delay-2s":l(s)===!1}]])},[l4,i($,{class:"markdown-body",text:p.value,height:"400px"},null,8,["text"])],2)]),i(k)],64)}}});function a4(e,t){return G.query({query:Z`
      query FacilitiesList {
        facilitiesList {
          facilities_title
          facilities_description
          facilities_image
          facilities_link
        }
        observatoriesList {
          observatory_category_name
          observatory_category_id
          observatory_post_content
        }
      }
    `,variables:{pageRouteName:e},fetchPolicy:t?"cache-first":"no-cache"})}function i4(e){return G.query({query:Z`
      query FacilitiesList {
        facilitiesList {
          facilities_orderid
          facilities_title
          facilities_link
        }
      }
    `,variables:{pageRouteName:e},fetchPolicy:"no-cache"})}function i1(e,t){return G.mutate({mutation:Z`
      mutation DeleteOrganization($facilitiesOrderid: Int!) {
        deleteOrganization(facilities_orderid: $facilitiesOrderid) {
          code
          message
        }
      }
    `,variables:{facilitiesOrderid:e,pageRouteName:t},fetchPolicy:"no-cache"})}function s4(e,t,r,n,a){return G.mutate({mutation:Z`
      mutation SetNewOrganization($facilitiesTitle: String!, $facilitiesDescription: String!, $facilitiesImage: String!, $facilitiesLink: String!) {
        setNewOrganization(facilities_title: $facilitiesTitle, facilities_description: $facilitiesDescription, facilities_image: $facilitiesImage, facilities_link: $facilitiesLink) {
          code
          message
        }
      }
    `,variables:{facilitiesTitle:e,facilitiesDescription:t,facilitiesImage:r,facilitiesLink:n,pageRouteName:a},fetchPolicy:"no-cache"})}function o4(e,t){return G.query({query:Z`
      query GetSingleOrganization($facilitiesOrderid: Int!) {
        getSingleOrganization(facilities_orderid: $facilitiesOrderid) {
          facilities_orderid
          facilities_title
          facilities_description
          facilities_image
          facilities_link
        }
      }
    `,variables:{facilitiesOrderid:e,pageRouteName:t},fetchPolicy:"no-cache"})}function F4(e,t,r,n,a,s){return G.mutate({mutation:Z`
      mutation MutOrganization($facilitiesOrderid: Int!, $facilitiesTitle: String!, $facilitiesDescription: String!, $facilitiesImage: String!, $facilitiesLink: String!) {
        mutOrganization(facilities_orderid: $facilitiesOrderid, facilities_title: $facilitiesTitle, facilities_description: $facilitiesDescription, facilities_image: $facilitiesImage, facilities_link: $facilitiesLink) {
          code
          message
        }
      }
    `,variables:{facilitiesOrderid:e,facilitiesTitle:t,facilitiesDescription:r,facilitiesImage:n,facilitiesLink:a,pageRouteName:s},fetchPolicy:"no-cache"})}function u4(e){return G.query({query:Z`
      query ObservatoriesList {
        observatoriesList {
          observatory_category_name
          observatory_category_id
        }
      }
    `,variables:{pageRouteName:e},fetchPolicy:"no-cache"})}function d4(e,t){return G.query({query:Z`
      query GetSingleObservatory($observatoryCategoryId: String!) {
        getSingleObservatory(observatory_category_id: $observatoryCategoryId) {
          observatory_category_name
          observatory_category_id
          observatory_post_content
        }
      }
    `,variables:{observatoryCategoryId:e,pageRouteName:t},fetchPolicy:"no-cache"})}function s1(e,t){return G.mutate({mutation:Z`
      mutation DeleteObservatories($observatoryCategoryId: String!) {
        deleteObservatories(observatory_category_id: $observatoryCategoryId) {
          code
          message
        }
      }
    `,variables:{observatoryCategoryId:e,pageRouteName:t},fetchPolicy:"no-cache"})}function p4(e,t,r,n){return G.mutate({mutation:Z`
      mutation SetNewObservatories($observatoryCategoryName: String!, $observatoryCategoryId: String!, $observatoryPostContent: String!) {
        setNewObservatories(observatory_category_name: $observatoryCategoryName, observatory_category_id: $observatoryCategoryId, observatory_post_content: $observatoryPostContent) {
          code
          message
        }
      }
    `,variables:{observatoryCategoryName:e,observatoryCategoryId:t,observatoryPostContent:r,pageRouteName:n},fetchPolicy:"no-cache"})}function h4(e,t,r,n){return G.mutate({mutation:Z`
      mutation MutObservatories($observatoryCategoryName: String!, $observatoryCategoryId: String!, $observatoryPostContent: String!) {
        mutObservatories(observatory_category_name: $observatoryCategoryName, observatory_category_id: $observatoryCategoryId, observatory_post_content: $observatoryPostContent) {
          code
          message
        }
      }
    `,variables:{observatoryCategoryName:e,observatoryCategoryId:t,observatoryPostContent:r,pageRouteName:n},fetchPolicy:"no-cache"})}const f4={class:"h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"},C4={class:"w-10/12 mt-8 mb-14"},g4={class:"grid laptop:grid-cols-3 grid-cols-1 large-pc:gap-24 h-table:gap-10 gap-8 h-table:w-10/12 overflow-hidden laptop:pr-0 h-table:pr-36"},m4=["src"],_4={class:"text-3xl text-white truncate font-normal"},b4={class:"text-main-color-light font-light mt-6 text-lg grid-des-box"},x4=["href"],v4=c("span",null,"\u67E5\u770B\u66F4\u591A",-1),M4=[v4],y4={key:0,class:"flex flex-wrap"},w4={class:"flex items-center mr-10 group"},k4=["id","value"],$4=["for"],S4=K({setup(e){const t=n0(),r=String(t.name),n=c0(),a=z(()=>n.get_firstEnter),s=o(null),u=o(!1),{stop:_}=K0(s,([{isIntersecting:f}])=>{u.value=f,f&&_()}),g=o(""),d=o([]),p=o([]);h();async function h(){const f=await a4(r,!0);f&&f.data.facilitiesList&&f.data.observatoriesList&&(p.value=f.data.facilitiesList,d.value=f.data.observatoriesList,g.value=String(d.value[0].observatory_category_id))}return o(null),(f,M)=>{const w=k0,b=A0,$=a0("v-md-preview"),k=i0;return F(),C(j,null,[i(w),c("div",f4,[i(b),c("div",C4,[c("h2",{class:y(["text-main-color-light text-left animate__animated animate__fadeIn",[{"animate__delay-4s":l(a)===!0},{"animate__delay-1s":l(a)===!1}]])}," \u63A8\u5EE3\u6A5F\u69CB",2)]),c("div",g4,[(F(!0),C(j,null,h0(p.value,(v,S)=>(F(),C("div",{class:y(["group animate__animated animate__fadeInUp",{"animate__delay-4s":l(a)===!0}]),key:S},[c("img",{class:"object-cover h-130px w-full delay-75 duration-1000 border border-white border-opacity-0 group-hover:border-opacity-60 border-b-0",src:String(v.facilities_image)},null,8,m4),c("div",{class:y(["h-72 py-7 px-8 delay-75 duration-1000 bg-white group-hover:bg-opacity-0 border border-white border-opacity-0 group-hover:border-opacity-60 border-t-0",[{"bg-opacity-18":(S+1)%3===0},{"bg-opacity-12":(S+3)%3===1},{"bg-opacity-6":(S+4)%3===1}]])},[c("p",_4,x(v.facilities_title),1),c("p",b4,x(v.facilities_description),1),c("a",{class:"mt-7 btn draw meet inline-block",href:String(v.facilities_link),target:"_blank"},M4,8,x4)],2)],2))),128))]),c("div",{class:"w-10/12 mt-28 mb-0",ref_key:"block_observatory_target",ref:s},[c("h2",{class:y(["text-main-color-light text-left animate__animated animate__faster",{animate__fadeIn:u.value}])},"\u5929\u6587\u53F0",2)],512),c("div",{class:y(["w-10/12 mt-14 mb-8 inline-flex animate__animated animate__faster",{animate__fadeIn:u.value}])},[d.value?(F(),C("ul",y4,[(F(!0),C(j,null,h0(d.value,(v,S)=>(F(),C("li",{key:S},[c("div",w4,[B(c("input",{id:String(v.observatory_category_id),type:"radio",name:"radio",class:"hidden","onUpdate:modelValue":M[0]||(M[0]=E=>g.value=E),value:v.observatory_category_id},null,8,k4),[[N1,g.value]]),c("label",{for:String(v.observatory_category_id),class:y(["delay-75","duration-1000","flex","items-center","cursor-pointer","text-2xl","group-hover:text-sp-color-light",{"text-sub-color-light":v.observatory_category_id===g.value},{"text-main-color-light":v.observatory_category_id!==g.value}])},[c("span",{class:y(["w-3 h-3 inline-block mr-2 rounded-full border border-grey flex-no-shrink group-hover:bg-sp-color-light delay-75 duration-1000",{"bg-sub-color-light":v.observatory_category_id===g.value}])},null,2),q(" "+x(v.observatory_category_name),1)],10,$4)])]))),128))])):J("",!0)],2),d.value?(F(),C("div",{key:0,class:y(["h-table:w-10/12 text-main-color-light md-container facilities-md-container animate__animated animate__delay-1s",{animate__fadeIn:u.value}])},[(F(!0),C(j,null,h0(d.value,(v,S)=>B((F(),s0($,{key:S,class:"animate__animated animate__fadeIn animate__faster",text:v.observatory_post_content},null,8,["text"])),[[D,g.value===v.observatory_category_id]])),128))],2)):J("",!0)]),i(k)],64)}}});var o1="/svg/mark.svg";function A4(e){return G.query({query:Z`
      query StargazingList {
        stargazingList {
          stargazing_title
          stargazing_latitude
          stargazing_longitude
          stargazing_image
          stargazing_description
          stargazing_address
          stargazing_link
        }
      }
    `,variables:{pageRouteName:e}})}function E4(e,t,r){return G.query({query:Z`
      query stargazingPagi($pageNumber: Int, $linesPerpage: Int) {
        stargazingPagi(pageNumber: $pageNumber, linesPerpage: $linesPerpage) {
          edges {
            stargazing_title
            stargazing_latitude
            stargazing_longitude
            stargazing_image
            stargazing_description
            stargazing_address
            stargazing_link
            stargazing_lid
            published
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            start
            end
            totalPagi
          }
        }
      }
    `,variables:{pageNumber:e,linesPerpage:t,pageRouteName:r},fetchPolicy:"no-cache"})}function z4(e,t,r,n,a,s,u,_){return G.mutate({mutation:Z`
      mutation SetNewStargazer(
          $stargazingTitle: String,
          $stargazingLatitude: Float,
          $stargazingLongitude: Float,
          $stargazingImage: String,
          $stargazingDescription: String,
          $stargazingAddress: String,
          $published: Boolean
        ) {
          setNewStargazer(
            stargazing_title: $stargazingTitle,
            stargazing_latitude: $stargazingLatitude,
            stargazing_longitude: $stargazingLongitude,
            stargazing_image: $stargazingImage,
            stargazing_description: $stargazingDescription,
            stargazing_address: $stargazingAddress,
            published: $published) {
              code
              message
          }
      }
    `,variables:{stargazingTitle:e,stargazingLatitude:t,stargazingLongitude:r,stargazingImage:n,stargazingDescription:a,stargazingAddress:s,published:u,pageRouteName:_},fetchPolicy:"no-cache"})}function F1(e,t){return G.mutate({mutation:Z`
      mutation DeleteStargazer($stargazingLid: String!) {
        deleteStargazer(stargazing_lid: $stargazingLid) {
          code
          message
        }
      }
    `,variables:{stargazingLid:e,pageRouteName:t},fetchPolicy:"no-cache"})}function B4(e,t){return G.query({query:Z`
      query GetSingleStargazer($stargazingLid: String) {
        getSingleStargazer(stargazing_lid: $stargazingLid) {
          stargazing_title
          stargazing_latitude
          stargazing_longitude
          stargazing_image
          stargazing_description
          stargazing_address
          stargazing_link
          stargazing_lid
          published
        }
      }
    `,variables:{stargazingLid:e,pageRouteName:t},fetchPolicy:"no-cache"})}function P4(e,t,r,n,a,s,u,_){return G.mutate({mutation:Z`
      mutation EditStargazer(
        $stargazingLid: String
        $stargazingTitle: String
        $stargazingLatitude: Float
        $stargazingLongitude: Float
        $stargazingImage: String
        $stargazingDescription: String
        $stargazingAddress: String
        ) {
        editStargazer(
          stargazing_lid: $stargazingLid
          stargazing_title: $stargazingTitle
          stargazing_latitude: $stargazingLatitude
          stargazing_longitude: $stargazingLongitude
          stargazing_image: $stargazingImage
          stargazing_description: $stargazingDescription
          stargazing_address: $stargazingAddress
        ) {
          code
          message
        }
      }
    `,variables:{stargazingLid:e,stargazingTitle:t,stargazingLatitude:r,stargazingLongitude:n,stargazingImage:a,stargazingDescription:s,stargazingAddress:u,pageRouteName:_},fetchPolicy:"no-cache"})}const D4={class:"h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-7 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"},L4=c("svg",{class:"ml-2 w-4 h-4 absolute right-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),I4={id:"dropdown",class:"z-10 bg-main-color-light divide-y divide-gray-100 absolute w-full"},R4={class:"py-1 text-sm text-main-color-black cursor-pointer h-200px overflow-y-auto"},T4=["onClick"],N4=c("h2",{class:"font-normal mb-9"},"\u5730\u9EDE\u5217\u8868",-1),V4=["onClick"],O4=c("img",{class:"w-15px mr-2",src:o1},null,-1),j4={class:"group-hover:text-sp-color-light delay-75 duration-1000 whitespace-nowrap"},q4={class:"w-full flex items-center justify-between p-4 row-span-1"},U4={class:"tracking-normal font-normal truncate middle-pc:text-4xl h-table:text-xl mobile:text-xl"},H4=["onClick"],Z4={class:"p-4 text-main-color-middle row-span-4"},G4={class:"px-4 text-sub-color-light flex items-center row-span-1 mobile:pb-2"},X4=c("img",{class:"w-15px mr-2",src:o1},null,-1),Q4=["href"],W4=K({setup(e){const t=n0(),r=String(t.name),n=c0(),a=z(()=>n.get_firstEnter),s=o(!0);let u=o({setLatLng:T=>!0,setContent:T=>!0,openOn:T=>!0});const _=o([]);let g=o(""),d=o(0),p=o(0),h=o(""),f=o(""),M=o(""),w=o(""),b=o(!1),$=o([]),k=o([0,0]),v=o({zoomControl:{setPosition:T=>""},remove(){},on(){},setView:(T,R)=>!0,closePopup(){},removeLayer(T){}}),S=o({setIcon:T=>{}});const E=x0.icon({iconUrl:"/img/mark-op.png",iconSize:[50,50]}),A=x0.icon({iconUrl:"/img/mark-op-act.png",iconSize:[50,50]});w0(async()=>{await e0(),await C0(),await O()}),t1(()=>{F0()});const[P,N]=V0();async function e0(){const T=await A4(r);_.value=T.data.stargazingList}function Y(T,R){b.value=!0;let m=_.value.filter(t0=>t0.stargazing_latitude===T&&t0.stargazing_longitude===R);P.value=!1,m.length>0&&(g.value=m[0].stargazing_title,d.value=m[0].stargazing_latitude,p.value=m[0].stargazing_longitude,h.value=m[0].stargazing_image,f.value=m[0].stargazing_description,M.value=m[0].stargazing_address,w.value=m[0].stargazing_link),$.value.forEach(t0=>{t0.getLatLng().lat===T&&t0.getLatLng().lng===R&&(t0.setIcon(A),S.value=t0)}),u.value.setLatLng([T,R]),u.value.setContent(m[0].stargazing_title),u.value.openOn(v.value),v.value.setView([T,R],11)}function V(){b.value=!0}function U(){b.value=!1,S.value.setIcon(E)}function O(){v.value=x0.map("map-container",{center:k.value,zoom:10,attributionControl:!1,zoomControl:!0,scrollWheelZoom:!1,zoomAnimation:!0,fadeAnimation:!0,markerZoomAnimation:!0,attribution:'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}),x0.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png").addTo(v.value),v.value.zoomControl.setPosition("topright");let T=x0.featureGroup().addTo(v.value);u.value=x0.popup({offset:[0,-13],className:"stargazing-map-pop"}),_.value.forEach(R=>{o0(R,T)}),$.value=Object.keys(T._layers).map(function(R){return T._layers[R]}),T.on("click",function(R){_.value.forEach(m=>{m.stargazing_latitude===R.latlng.lat&&m.stargazing_longitude===R.latlng.lng&&(U(),setTimeout(()=>{p0(m),V()},1e3),$.value.forEach(t0=>{t0.setIcon(E)}),R.layer.setIcon(A),S.value=R.layer,u.value.setLatLng(R.latlng),u.value.setContent(m.stargazing_title),u.value.openOn(v.value),v.value.setView([m.stargazing_latitude,m.stargazing_longitude],11))})}),setTimeout(()=>{s.value=!1},3e3)}function o0(T,R){x0.marker([T.stargazing_latitude,T.stargazing_longitude],{icon:E,title:T.stargazing_title,opacity:1}).addTo(R)}function C0(){_.value.length>0&&(k.value=[_.value[0].stargazing_latitude,_.value[0].stargazing_longitude],p0(_.value[0]))}function p0(T){g.value=T.stargazing_title,d.value=T.stargazing_latitude,p.value=T.stargazing_longitude,h.value=T.stargazing_image,f.value=T.stargazing_description,M.value=T.stargazing_address,w.value=T.stargazing_link}function F0(){v.value.remove()}return o({}),(T,R)=>{const m=k0,t0=A0,u0=i0;return F(),C(j,null,[i(m),c("div",D4,[i(t0)]),c("div",{class:y(["dropdown-menu z-401 absolute hidden mobile:block mt-2 ml-2 shadow-2xl animate__animated animate__flipInX",[{"animate__delay-5s":l(a)===!0},{"animate__delay-2s":l(a)===!1}]])},[c("button",{id:" dropdownDefault",class:"duration-1000 text-main-color-black border border-white border-opacity-60 bg-opacity-100 bg-white font-medium text-lg pl-4 py-3 pr-12 relative text-center inline-flex items-center tracking-normal w-full",type:"button",onClick:R[0]||(R[0]=I(f0=>l(N)(),["prevent"]))},[q(x(l(g))+" ",1),L4]),B(c("div",I4,[c("ul",R4,[(F(!0),C(j,null,h0(_.value,(f0,z0)=>(F(),C("li",{key:z0,onClick:I(g0=>(Y(f0.stargazing_latitude,f0.stargazing_longitude),U()),["stop"]),class:"tracking-normal block py-2 px-4 hover:text-sub-color-dark"},x(f0.stargazing_title),9,T4))),128))])],512),[[D,l(P)]])],2),c("div",{class:y(["middle-pc:w-1/5 w-table:w-1/3 h-table:w-5/12 w-full h-80vh bg-white z-401 absolute px-7 py-8 shadow-2xl overflow-x-hidden hidden h-table:block animate__animated animate__slideInLeft",[{"animate__delay-4s":l(a)===!0},{"animate__delay-1s":l(a)===!1}]])},[N4,c("ul",null,[(F(!0),C(j,null,h0(_.value,(f0,z0)=>(F(),C("li",{key:z0,class:"text-main-color-middle cursor-pointer mb-3 font-normal flex items-center tracking-wide group",onClick:I(g0=>Y(f0.stargazing_latitude,f0.stargazing_longitude),["stop"])},[O4,c("span",j4,x(f0.stargazing_title),1)],8,V4))),128))])],2),c("div",{class:y(["middle-pc:w-1/3 w-table:w-5/12 h-table:w-1/2 w-full h-80vh bg-white z-401 absolute shadow-2xl grid grid-flow-rows animate__animated animate__slideInLeft animate__faster",[{animate__slideOutLeft:!l(b)},{"-z-9999":s.value}]])},[c("div",q4,[c("h2",U4,x(l(g)),1),c("button",{onClick:I(U,["stop"]),class:"p-6 -m-6 relative mobile:right-2 right-7 bottom-7px w-15px h-15px before:absolute before:left-15px before:h-15px before:w-2px before:bg-black before:rotate-45 after:absolute after:left-15px after:h-15px after:w-2px after:bg-black after:-rotate-45"},null,8,H4)]),c("div",{class:y(["w-full min-h-100px bg-bottom bg-no-repeat bg-cover row-span-6 animate__animated animate__faster",{animate__flipOutX:!l(h)}]),style:B0("background-image: url("+l(h)+")")},null,6),c("div",Z4,[c("div",null,x(l(f)),1)]),c("div",G4,[X4,c("a",{href:`https://maps.google.com?q=${l(d)},${l(p)}`,target:"_blank"},x(l(M)),9,Q4)])],2),c("div",{id:"map-container",class:y(["w-full h-80vh middle-pc:mb-60 h-table:mb-24 z-0 animate__animated animate__fadeInRight",[{"animate__delay-4s":l(a)===!0},{"animate__delay-1s":l(a)===!1}]])},null,2),i(u0)],64)}}});var Y4="/img/bg-achive.png";const J4={class:"h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"},K4=c("img",{class:"laptop:w-auto h-table:w-4/5",src:Y4},null,-1),c3=[K4],t3={class:"laptop:py-8 laptop:px-16 p-6 bg-white hover:bg-opacity-0 delay-75 duration-1000 border border-white border-opacity-0 hover:border-opacity-60 bg-opacity-6 mb-1"},e3={class:"h-table:text-3xl text-xl font-normal text-white"},r3={class:"text-main-color-light font-light h-table:mt-5 mt-1 text-lg truncate"},l3={class:"w-full text-center"},n3=c("span",null,"\u52A0\u8F09\u66F4\u591A",-1),a3=[n3],i3=K({setup(e){const t=c0(),r=z(()=>t.get_firstEnter),n=n0(),a=v0(),s=String(n.name),u=z(()=>n.params.tagid),_=o([]),g=o({end:0,hasNextPage:!1,hasPreviousPage:!1,start:0});p(7,null,null,null);function d(){p(1,null,g.value.end,null)}async function p(h,f,M,w){const b=await U0(h,f,M,w,String(u.value),s);if(b.data.artists.edges.length>0){let k=_.value.concat(b.data.artists.edges);_.value=k,g.value=b.data.artists.pageInfo}else a.push("/notfound")}return(h,f)=>{const M=k0,w=A0,b=a0("router-link"),$=i0;return F(),C(j,null,[i(M),c("div",J4,[i(w),c("div",{class:y(["w-table:block hidden middle-pc:w-4/12 w-table:w-5/12 h-full mt-20 animate__animated animate__flipInY",[{"animate__delay-4s":l(r)===!0},{"animate__delay-1s":l(r)===!1}]])},c3,2),c("div",{class:y(["grid grid-cols-1 middle-pc:w-6/12 w-table:w-5/12 w-10/12 mobile:w-full overflow-hidden w-table:mt-36 animate__animated animate__fadeInUp",[{"animate__delay-4s":l(r)===!0},{"animate__delay-1s":l(r)===!1}]])},[(F(!0),C(j,null,h0(_.value,(k,v)=>(F(),C("div",{key:v,class:"animate__animated animate__fadeInUp"},[i(b,{to:"/science/"+k.postid},{default:L(()=>[c("div",t3,[c("p",e3,x(k.title),1),c("p",r3,x(k.description),1)])]),_:2},1032,["to"])]))),128)),B(c("div",l3,[c("button",{class:"middle-pc:mt-16 h-table:mt-12 mobile:mt-10 btn draw meet",onClick:f[0]||(f[0]=I(k=>d(),["prevent"]))},a3)],512),[[D,g.value.hasNextPage&&_.value.length>0]])],2)]),i($)],64)}}});var s3="/img/bg-search.png";const o3={class:"h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"},F3={class:"relative text-lg bg-transparent text-gray-800"},u3=c("svg",{class:"h-table:h-10 h-6 w-auto fill-white opacity-25 hover:opacity-60 duration-500",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 56.966 56.966",style:{"enable-background":"new 0 0 56.966 56.966"},"xml:space":"preserve",width:"512px",height:"512px"},[c("path",{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"})],-1),d3=[u3],p3={class:"text-sp-color-light font-light h-table:mt-5 mt-1 text-lg truncate"},h3={class:"h-table:w-10/12 h-200px mt-16"},f3={class:"animate__animated animate__fadeIn animate__delay-1s"},C3=c("p",{class:"h-table:text-3xl text-xl font-normal text-white"},"\u67E5\u7121\u7D50\u679C",-1),g3=c("p",{class:"text-main-color-light font-light h-table:mt-5 mt-1 text-lg truncate"},"\u8ACB\u4F7F\u7528\u5176\u5B83\u95DC\u9375\u5B57\u641C\u5C0B",-1),m3=[C3,g3],_3=c("img",{class:"w-auto",src:s3},null,-1),b3=[_3],x3={class:"laptop:py-8 laptop:px-16 p-6 bg-white hover:bg-opacity-0 delay-75 duration-1000 border border-white border-opacity-0 hover:border-opacity-60 bg-opacity-6 mb-1"},v3={class:"h-table:text-3xl text-xl font-normal text-white"},M3={class:"text-main-color-light font-light h-table:mt-5 mt-1 text-lg truncate"},y3={class:"w-full text-center"},w3=c("span",null,"Load More",-1),k3=[w3],$3=K({setup(e){const t=n0(),r=String(t.name),n=c0(),a=z(()=>n.get_firstEnter),s=o(""),u=o(!1),_=o(!1);function g(w,b){const $={name:"SingleScience",params:{sid:b}},k={name:"SingleStory",params:{nid:b}};return w==="story"?k:$}V1(s,()=>{if(s.value.length>30){let w=s.value.substring(0,30);s.value=w}},{debounce:1e3});const d=o([]),p=o({end:0,hasNextPage:!1,hasPreviousPage:!1,start:0});function h(){M(3,null,p.value.end,null)}const f=P0(()=>{const w=s.value;w.split(" ").join("").length===0?_.value=!0:w.trim().length>30||(_.value=!1,u.value=!1,d.value=[],setTimeout(()=>{M(7,null,null,null)},300))},1e3);async function M(w,b,$,k){const v=await g2(w,b,$,k,String(s.value).trim(),r);let E=d.value.concat(v.data.searchArtists.edges);d.value=E,p.value=v.data.searchArtists.pageInfo,d.value.length===0&&p.value.start===null?u.value=!0:u.value=!1}return(w,b)=>{const $=k0,k=A0,v=a0("router-link"),S=i0;return F(),C(j,null,[i($),c("div",o3,[i(k),c("div",{class:y(["h-table:w-10/12 w-full mt-1 mobile:-mt-8 animate__animated animate__fadeInUp",[{"animate__delay-4s":l(a)===!0},{"animate__delay-1s":l(a)===!1}]])},[c("div",F3,[c("div",{class:y(["flex items-center duration-500 border-b border-white border-opacity-25 py-2 focus-within:border-opacity-60 animate__animated animate__fadeIn",[{"animate__delay-4s":l(a)===!0},{"animate__delay-1s":l(a)===!1},{"border-sp-color-light":_.value}]])},[B(c("input",{class:"w-full bg-transparent border-transparent focus:border-transparent border-none mr-3 px-2 h-table:text-3xl text-xl text-main-color-middle focus:outline-0 focus:ring-0 focus:text-main-color-light",type:"text",placeholder:"Search","onUpdate:modelValue":b[0]||(b[0]=E=>s.value=E),onKeyup:b[1]||(b[1]=j1(E=>l(f)(),["enter"]))},null,544),[[O1,s.value]]),c("button",{type:"submit",class:"absolute right-0 top-0 h-table:mt-3 h-table:mr-4 mt-5 mr-1",onClick:b[2]||(b[2]=I(E=>l(f)(),["prevent"]))},d3)],2),B(c("p",p3,"\u8ACB\u8F38\u5165\u95DC\u9375\u5B57",512),[[D,_.value]])])],2),B(c("div",h3,[B(c("div",f3,m3,512),[[D,u.value]])],512),[[D,d.value.length===0]]),B(c("div",{class:y(["w-table:block hidden middle-pc:w-4/12 w-table:w-5/12 h-full mt-20 animate__animated animate__flipInY",[{"animate__delay-4s":l(a)===!0},{"animate__delay-1s":l(a)===!1}]])},b3,2),[[D,d.value.length>0]]),c("div",{class:y(["grid grid-cols-1 middle-pc:w-6/12 w-table:w-5/12 w-10/12 mobile:w-full overflow-hidden w-table:mt-36 mt-14 animate__animated animate__fadeInUp",[{"animate__delay-4s":l(a)===!0},{"animate__delay-1s":l(a)===!1}]])},[(F(!0),C(j,null,h0(d.value,(E,A)=>(F(),C("div",{key:A,class:"animate__animated animate__fadeInUp"},[i(v,{to:g(E.categoryid,E.postid)},{default:L(()=>[c("div",x3,[c("p",v3,x(E.title),1),c("p",M3,x(E.description),1)])]),_:2},1032,["to"])]))),128)),B(c("div",y3,[c("button",{class:"middle-pc:mt-16 h-table:mt-12 mobile:mt-10 btn draw meet",onClick:b[3]||(b[3]=I(E=>h(),["prevent"]))},k3)],512),[[D,p.value.hasNextPage&&d.value.length>0]])],2)]),i(S)],64)}}}),S3={class:"h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"},A3={class:"w-10/12"},E3=c("span",null,"\u8FD4\u56DE\u9996\u9801",-1),z3=c("div",{class:"font-serif text-main-color-light opacity-30 inline-block text-20vw"},"OOPS!",-1),B3=[z3],P3=K({setup(e){const t=c0(),r=z(()=>t.get_firstEnter);return(n,a)=>{const s=k0,u=A0,_=a0("router-link"),g=i0;return F(),C(j,null,[i(s),c("div",S3,[i(u),c("div",A3,[i(_,{to:"/",class:y(["btn draw meet inline-block animate__animated animate__flipInX",[{"animate__delay-4s":l(r)===!0},{"animate__delay-1s":l(r)===!1}]])},{default:L(()=>[E3]),_:1},8,["class"])])]),c("div",{class:y(["w-full text-right inline-block p-10 oops-before mobile:p-4 absolute left-0 bottom-24 screens-h-500:relative animate__animated animate__fadeIn",[{"animate__delay-4s":l(r)===!0},{"animate__delay-1s":l(r)===!1}]])},B3,2),i(g,{class:y(["absolute left-0 bottom-0 screens-h-500:relative animate__animated animate__fadeIn",[{"animate__delay-5s":l(r)===!0},{"animate__delay-2s":l(r)===!1}]])},null,8,["class"])],64)}}});var l0={required(e){return e?!0:"\u6B64\u6B04\u4F4D\u5FC5\u586B"},password(e){return e?/^\w{6,24}$/.test(e)?!0:"\u5BC6\u78BC\u70BA6-24\u500B\u5B57\u7B26":"\u8ACB\u8F38\u5165\u5BC6\u78BC"},email(e){let t=/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;return e?t.test(e)?!0:"\u8ACB\u8F38\u5165\u4FE1\u7BB1\u683C\u5F0F":"\u8ACB\u8F38\u5165\u4FE1\u7BB1"},image(e){return e?!0:"\u8ACB\u4E0A\u50B3\u5716\u7247"}};const D3={class:"h-table:flex items-center justify-center middle-pc:pt-64 middle-pc:pb-44 h-table:py-32 middle-pc:px-28 h-table:px-6 p-8 mobile:pt-32 mobile:pb-20"},L3={class:"large-pc:w-1/3 laptop:w-1/2 w-table:w-7/12 h-table:w-10/12 w-full bg-main-color-light py-16 bg-opacity-90 shadow-30-box"},I3=c("div",{class:"self-center block m-auto mb-8"},[c("svg",{class:"admin-login-svg-obj svg-obj h-auto w-77px mx-auto",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:a":"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",version:"1.1",x:"0px",y:"0px",width:"89px",height:"98px",viewBox:"-0.7 0 89 98","enable-background":"new -0.7 0 89 98","xml:space":"preserve"},[c("defs",null,[c("pattern",{x:"-31.7",y:"123",width:"69",height:"69",patternUnits:"userSpaceOnUse",id:"\u5713\u9EDE\u5716\u6A23",viewBox:"2.1 -70.9 69 69",overflow:"visible"},[c("g",null,[c("polygon",{fill:"none",points:"71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9    "}),c("polygon",{fill:"#F6BB60",points:"71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9    "}),c("g",null,[c("path",{fill:"#1f1f39",d:"M61.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-71.7,61.8-71.7,61.8-71.7      C61.8-71.6,61.8-71.6,61.8-71.7"}),c("path",{fill:"#1f1f39",d:"M54.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-71.7,54.1-71.7,54.1-71.7      C54.1-71.6,54.1-71.6,54.1-71.7"}),c("path",{fill:"#1f1f39",d:"M46.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.4-71.7,46.4-71.7,46.4-71.7      C46.4-71.6,46.4-71.6,46.4-71.7"}),c("path",{fill:"#1f1f39",d:"M38.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-71.7,38.8-71.7,38.8-71.7      C38.8-71.6,38.8-71.6,38.8-71.7"}),c("path",{fill:"#1f1f39",d:"M31.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-71.7,31.1-71.7,31.1-71.7      C31.1-71.6,31.1-71.6,31.1-71.7"}),c("path",{fill:"#1f1f39",d:"M23.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.4-71.7,23.4-71.7,23.4-71.7      C23.4-71.6,23.4-71.6,23.4-71.7"}),c("path",{fill:"#1f1f39",d:"M15.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-71.7,15.8-71.7,15.8-71.7      C15.8-71.6,15.8-71.6,15.8-71.7"}),c("path",{fill:"#1f1f39",d:"M8.1-71.7c0,0.1,0,0.1,0,0.2C8-71.4,8-71.4,7.9-71.3c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.1-71.7,8.1-71.7,8.1-71.7      C8.1-71.6,8.1-71.6,8.1-71.7"}),c("path",{fill:"#1f1f39",d:"M0.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.8-69.4,1-69,1.2-68.9c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.4-71.7,0.4-71.7,0.4-71.7      C0.4-71.6,0.4-71.6,0.4-71.7"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-71.7,69.4-71.7,69.4-71.7      C69.4-71.6,69.4-71.6,69.4-71.7"})]),c("path",{fill:"#1f1f39",d:"M0.5-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3     c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-69.4,1-69,1.3-68.9c0.2,0,0.4-0.1,0.5-0.1     c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2     c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8     c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-71.7,0.5-71.7,0.5-71.7     C0.5-71.6,0.5-71.6,0.5-71.7"}),c("g",null,[c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-64,69.4-64.1,69.4-64C69.4-64,69.4-64,69.4-64"}),c("path",{fill:"#1f1f39",d:"M61.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-64,61.8-64.1,61.8-64C61.8-64,61.8-64,61.8-64"}),c("path",{fill:"#1f1f39",d:"M54.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-64,54.1-64.1,54.1-64C54.1-64,54.1-64,54.1-64"}),c("path",{fill:"#1f1f39",d:"M46.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-64,46.5-64.1,46.5-64C46.5-64,46.5-64,46.5-64"}),c("path",{fill:"#1f1f39",d:"M38.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-64,38.8-64.1,38.8-64C38.8-64,38.8-64,38.8-64"}),c("path",{fill:"#1f1f39",d:"M31.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-64,31.1-64.1,31.1-64C31.1-64,31.1-64,31.1-64"}),c("path",{fill:"#1f1f39",d:"M23.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-64,23.5-64.1,23.5-64C23.5-64,23.5-64,23.5-64"}),c("path",{fill:"#1f1f39",d:"M15.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-64,15.8-64.1,15.8-64C15.8-64,15.8-64,15.8-64"}),c("path",{fill:"#1f1f39",d:"M8.2-64c0,0.1,0,0.1,0,0.2C8.1-63.7,8-63.7,8-63.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-62.2,8.2-62,8.3-61.9c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-64,8.2-64.1,8.2-64C8.1-64,8.1-64,8.2-64"}),c("path",{fill:"#1f1f39",d:"M0.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-62,3-61.9,3.1-62c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-64,0.5-64.1,0.5-64C0.5-64,0.5-64,0.5-64"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-56.4,69.4-56.4,69.4-56.3       C69.4-56.3,69.4-56.3,69.4-56.3"}),c("path",{fill:"#1f1f39",d:"M61.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-56.4,61.8-56.4,61.8-56.3       C61.8-56.3,61.8-56.3,61.8-56.3"}),c("path",{fill:"#1f1f39",d:"M54.1-56.3c0,0.1,0,0.1,0,0.2C54-56.1,54-56.1,53.9-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-56.4,54.1-56.4,54.1-56.3       C54.1-56.3,54.1-56.3,54.1-56.3"}),c("path",{fill:"#1f1f39",d:"M46.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-56.4,46.5-56.4,46.5-56.3       C46.5-56.3,46.5-56.3,46.5-56.3"}),c("path",{fill:"#1f1f39",d:"M38.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-56.4,38.8-56.4,38.8-56.3       C38.8-56.3,38.8-56.3,38.8-56.3"}),c("path",{fill:"#1f1f39",d:"M31.1-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-56.4,31.1-56.4,31.1-56.3       C31.1-56.3,31.1-56.3,31.1-56.3"}),c("path",{fill:"#1f1f39",d:"M23.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-56.4,23.5-56.4,23.5-56.3       C23.5-56.3,23.5-56.3,23.5-56.3"}),c("path",{fill:"#1f1f39",d:"M15.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-56.4,15.8-56.4,15.8-56.3       C15.8-56.3,15.8-56.3,15.8-56.3"}),c("path",{fill:"#1f1f39",d:"M8.2-56.3c0,0.1,0,0.1,0,0.2C8.1-56.1,8-56.1,8-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-56.4,8.2-56.4,8.2-56.3       C8.1-56.3,8.1-56.3,8.2-56.3"}),c("path",{fill:"#1f1f39",d:"M0.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-56.4,0.5-56.4,0.5-56.3       C0.5-56.3,0.5-56.3,0.5-56.3"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-48.7,69.4-48.8,69.4-48.7       C69.4-48.7,69.4-48.7,69.4-48.7"}),c("path",{fill:"#1f1f39",d:"M61.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-48.7,61.8-48.8,61.8-48.7       C61.8-48.7,61.8-48.7,61.8-48.7"}),c("path",{fill:"#1f1f39",d:"M54.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-48.7,54.1-48.8,54.1-48.7       C54.1-48.7,54.1-48.7,54.1-48.7"}),c("path",{fill:"#1f1f39",d:"M46.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-48.7,46.5-48.8,46.5-48.7       C46.5-48.7,46.5-48.7,46.5-48.7"}),c("path",{fill:"#1f1f39",d:"M38.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-48.7,38.8-48.8,38.8-48.7       C38.8-48.7,38.8-48.7,38.8-48.7"}),c("path",{fill:"#1f1f39",d:"M31.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-48.7,31.1-48.8,31.1-48.7       C31.1-48.7,31.1-48.7,31.1-48.7"}),c("path",{fill:"#1f1f39",d:"M23.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-48.7,23.5-48.8,23.5-48.7       C23.5-48.7,23.5-48.7,23.5-48.7"}),c("path",{fill:"#1f1f39",d:"M15.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-48.7,15.8-48.8,15.8-48.7       C15.8-48.7,15.8-48.7,15.8-48.7"}),c("path",{fill:"#1f1f39",d:"M8.2-48.7c0,0.1,0,0.1,0,0.2C8.1-48.4,8-48.4,8-48.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C8.5-46.4,8.7-46,8.9-46c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-48.7,8.2-48.8,8.2-48.7       C8.1-48.7,8.1-48.7,8.2-48.7"}),c("path",{fill:"#1f1f39",d:"M0.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-46.4,1-46,1.3-46c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-48.7,0.5-48.8,0.5-48.7       C0.5-48.7,0.5-48.7,0.5-48.7"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-41.1,69.4-41.1,69.4-41       C69.4-41,69.4-41,69.4-41"}),c("path",{fill:"#1f1f39",d:"M61.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-41.1,61.8-41.1,61.8-41       C61.8-41,61.8-41,61.8-41"}),c("path",{fill:"#1f1f39",d:"M54.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-41.1,54.1-41.1,54.1-41       C54.1-41,54.1-41,54.1-41"}),c("path",{fill:"#1f1f39",d:"M46.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-41.1,46.5-41.1,46.5-41       C46.5-41,46.5-41,46.5-41"}),c("path",{fill:"#1f1f39",d:"M38.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-41.1,38.8-41.1,38.8-41       C38.8-41,38.8-41,38.8-41"}),c("path",{fill:"#1f1f39",d:"M31.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-41.1,31.1-41.1,31.1-41       C31.1-41,31.1-41,31.1-41"}),c("path",{fill:"#1f1f39",d:"M23.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-41.1,23.5-41.1,23.5-41       C23.5-41,23.5-41,23.5-41"}),c("path",{fill:"#1f1f39",d:"M15.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-41.1,15.8-41.1,15.8-41       C15.8-41,15.8-41,15.8-41"}),c("path",{fill:"#1f1f39",d:"M8.2-41c0,0.1,0,0.1,0,0.2C8.1-40.8,8-40.8,8-40.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-41.1,8.2-41.1,8.2-41C8.1-41,8.1-41,8.2-41"}),c("path",{fill:"#1f1f39",d:"M0.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-39,3-39,3.1-39c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-41.1,0.5-41.1,0.5-41C0.5-41,0.5-41,0.5-41"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-33.4,69.4-33.5,69.4-33.4       C69.4-33.4,69.4-33.4,69.4-33.4"}),c("path",{fill:"#1f1f39",d:"M61.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-33.4,61.8-33.5,61.8-33.4       C61.8-33.4,61.8-33.4,61.8-33.4"}),c("path",{fill:"#1f1f39",d:"M54.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-33.4,54.1-33.5,54.1-33.4       C54.1-33.4,54.1-33.4,54.1-33.4"}),c("path",{fill:"#1f1f39",d:"M46.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-33.4,46.5-33.5,46.5-33.4       C46.5-33.4,46.5-33.4,46.5-33.4"}),c("path",{fill:"#1f1f39",d:"M38.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-33.4,38.8-33.5,38.8-33.4       C38.8-33.4,38.8-33.4,38.8-33.4"}),c("path",{fill:"#1f1f39",d:"M31.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-33.4,31.1-33.5,31.1-33.4       C31.1-33.4,31.1-33.4,31.1-33.4"}),c("path",{fill:"#1f1f39",d:"M23.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-33.4,23.5-33.5,23.5-33.4       C23.5-33.4,23.5-33.4,23.5-33.4"}),c("path",{fill:"#1f1f39",d:"M15.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-33.4,15.8-33.5,15.8-33.4       C15.8-33.4,15.8-33.4,15.8-33.4"}),c("path",{fill:"#1f1f39",d:"M8.2-33.4c0,0.1,0,0.1,0,0.2C8.1-33.1,8-33.1,8-33.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-33.4,8.2-33.5,8.2-33.4       C8.1-33.4,8.1-33.4,8.2-33.4"}),c("path",{fill:"#1f1f39",d:"M0.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-33.4,0.5-33.5,0.5-33.4       C0.5-33.4,0.5-33.4,0.5-33.4"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-25.8,69.4-25.8,69.4-25.7       C69.4-25.7,69.4-25.7,69.4-25.7"}),c("path",{fill:"#1f1f39",d:"M61.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-25.8,61.8-25.8,61.8-25.7       C61.8-25.7,61.8-25.7,61.8-25.7"}),c("path",{fill:"#1f1f39",d:"M54.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-25.8,54.1-25.8,54.1-25.7       C54.1-25.7,54.1-25.7,54.1-25.7"}),c("path",{fill:"#1f1f39",d:"M46.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-25.8,46.5-25.8,46.5-25.7       C46.5-25.7,46.5-25.7,46.5-25.7"}),c("path",{fill:"#1f1f39",d:"M38.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-25.8,38.8-25.8,38.8-25.7       C38.8-25.7,38.8-25.7,38.8-25.7"}),c("path",{fill:"#1f1f39",d:"M31.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-25.8,31.1-25.8,31.1-25.7       C31.1-25.7,31.1-25.7,31.1-25.7"}),c("path",{fill:"#1f1f39",d:"M23.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-25.8,23.5-25.8,23.5-25.7       C23.5-25.7,23.5-25.7,23.5-25.7"}),c("path",{fill:"#1f1f39",d:"M15.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-25.8,15.8-25.8,15.8-25.7       C15.8-25.7,15.8-25.7,15.8-25.7"}),c("path",{fill:"#1f1f39",d:"M8.2-25.7c0,0.1,0,0.1,0,0.2C8.1-25.4,8-25.5,8-25.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-24,8.2-23.8,8.3-23.6c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-25.8,8.2-25.8,8.2-25.7       C8.1-25.7,8.1-25.7,8.2-25.7"}),c("path",{fill:"#1f1f39",d:"M0.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-23.5,1-23.1,1.3-23c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-25.8,0.5-25.8,0.5-25.7       C0.5-25.7,0.5-25.7,0.5-25.7"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-18.1,69.4-18.2,69.4-18.1       C69.4-18,69.4-18.1,69.4-18.1"}),c("path",{fill:"#1f1f39",d:"M61.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-18.1,61.8-18.2,61.8-18.1       C61.8-18,61.8-18.1,61.8-18.1"}),c("path",{fill:"#1f1f39",d:"M54.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-18.1,54.1-18.2,54.1-18.1       C54.1-18,54.1-18.1,54.1-18.1"}),c("path",{fill:"#1f1f39",d:"M46.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-18.1,46.5-18.2,46.5-18.1       C46.5-18,46.5-18.1,46.5-18.1"}),c("path",{fill:"#1f1f39",d:"M38.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-18.1,38.8-18.2,38.8-18.1       C38.8-18,38.8-18.1,38.8-18.1"}),c("path",{fill:"#1f1f39",d:"M31.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-18.1,31.1-18.2,31.1-18.1       C31.1-18,31.1-18.1,31.1-18.1"}),c("path",{fill:"#1f1f39",d:"M23.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-18.1,23.5-18.2,23.5-18.1       C23.5-18,23.5-18.1,23.5-18.1"}),c("path",{fill:"#1f1f39",d:"M15.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-18.1,15.8-18.2,15.8-18.1       C15.8-18,15.8-18.1,15.8-18.1"}),c("path",{fill:"#1f1f39",d:"M8.2-18.1c0,0.1,0,0.1,0,0.2C8.1-17.8,8-17.8,8-17.8c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-16.3,8.2-16.1,8.3-16c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-18.1,8.2-18.2,8.2-18.1       C8.1-18,8.1-18.1,8.2-18.1"}),c("path",{fill:"#1f1f39",d:"M0.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-16.1,3-16,3.1-16c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-18.1,0.5-18.2,0.5-18.1       C0.5-18,0.5-18.1,0.5-18.1"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-10.5,69.4-10.5,69.4-10.4       C69.4-10.4,69.4-10.4,69.4-10.4"}),c("path",{fill:"#1f1f39",d:"M61.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1C63.9-8,63.8-8.2,64-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-10.5,61.8-10.5,61.8-10.4       C61.8-10.4,61.8-10.4,61.8-10.4"}),c("path",{fill:"#1f1f39",d:"M54.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-10.5,54.1-10.5,54.1-10.4       C54.1-10.4,54.1-10.4,54.1-10.4"}),c("path",{fill:"#1f1f39",d:"M46.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-10.5,46.5-10.5,46.5-10.4       C46.5-10.4,46.5-10.4,46.5-10.4"}),c("path",{fill:"#1f1f39",d:"M38.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1C40.9-8,40.8-8.2,41-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-10.5,38.8-10.5,38.8-10.4       C38.8-10.4,38.8-10.4,38.8-10.4"}),c("path",{fill:"#1f1f39",d:"M31.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-10.5,31.1-10.5,31.1-10.4       C31.1-10.4,31.1-10.4,31.1-10.4"}),c("path",{fill:"#1f1f39",d:"M23.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-10.5,23.5-10.5,23.5-10.4       C23.5-10.4,23.5-10.4,23.5-10.4"}),c("path",{fill:"#1f1f39",d:"M15.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1C17.9-8,17.8-8.2,18-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-10.5,15.8-10.5,15.8-10.4       C15.8-10.4,15.8-10.4,15.8-10.4"}),c("path",{fill:"#1f1f39",d:"M8.2-10.4c0,0.1,0,0.1,0,0.2C8.1-10.1,8-10.2,8-10.1C7.9-10,7.9-9.8,7.9-9.8c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-8.7,8.2-8.5,8.3-8.3c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-10.5,8.2-10.5,8.2-10.4       C8.1-10.4,8.1-10.4,8.2-10.4"}),c("path",{fill:"#1f1f39",d:"M0.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1C0.3-10,0.2-9.8,0.2-9.8c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-8.2,1-7.8,1.3-7.7c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1C2.6-8,2.5-8.2,2.7-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-10.5,0.5-10.5,0.5-10.4       C0.5-10.4,0.5-10.4,0.5-10.4"})])]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C69.8-0.5,70-0.1,70.2,0c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-2.8,69.4-2.9,69.4-2.8      C69.4-2.7,69.4-2.8,69.4-2.8"}),c("path",{fill:"#1f1f39",d:"M61.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C61.6-1,61.8-0.8,62-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-2.8,61.8-2.9,61.8-2.8      C61.8-2.7,61.8-2.8,61.8-2.8"}),c("path",{fill:"#1f1f39",d:"M54.1-2.8c0,0.1,0,0.1,0,0.2C54-2.5,54-2.5,53.9-2.5c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C54-1,54.1-0.8,54.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C56.9-0.8,57-1,57.1-1.2c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-2.8,54.1-2.9,54.1-2.8      C54.1-2.7,54.1-2.8,54.1-2.8"}),c("path",{fill:"#1f1f39",d:"M46.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C46.8-0.5,47-0.1,47.2,0c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-2.8,46.5-2.9,46.5-2.8      C46.5-2.7,46.5-2.8,46.5-2.8"}),c("path",{fill:"#1f1f39",d:"M38.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C38.6-1,38.8-0.8,39-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-2.8,38.8-2.9,38.8-2.8      C38.8-2.7,38.8-2.8,38.8-2.8"}),c("path",{fill:"#1f1f39",d:"M31.1-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C31-1,31.1-0.8,31.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-2.8,31.1-2.9,31.1-2.8      C31.1-2.7,31.1-2.8,31.1-2.8"}),c("path",{fill:"#1f1f39",d:"M23.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C23.8-0.5,24-0.1,24.3,0c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-2.8,23.5-2.9,23.5-2.8      C23.5-2.7,23.5-2.8,23.5-2.8"}),c("path",{fill:"#1f1f39",d:"M15.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C15.7-1,15.8-0.8,16-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-2.8,15.8-2.9,15.8-2.8      C15.8-2.7,15.8-2.8,15.8-2.8"}),c("path",{fill:"#1f1f39",d:"M8.2-2.8c0,0.1,0,0.1,0,0.2C8.1-2.5,8-2.5,8-2.5C7.9-2.4,7.9-2.2,7.9-2.1c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-1,8.2-0.8,8.3-0.7C8.5-0.5,8.7-0.1,8.9,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1      c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3      c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C9-3.5,8.8-3.4,8.7-3.4      C8.5-3.3,8.6-3.2,8.4-3.1C8.3-3.1,8.2-3,8.2-2.9C8.2-2.8,8.2-2.9,8.2-2.8C8.1-2.7,8.1-2.8,8.2-2.8"}),c("path",{fill:"#1f1f39",d:"M0.5-2.8c0,0.1,0,0.1,0,0.2C0.4-2.5,0.4-2.5,0.3-2.5C0.3-2.4,0.2-2.2,0.2-2.1c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C0.3-1,0.5-0.8,0.7-0.7C0.9-0.5,1-0.1,1.3,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1      c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C3.3-0.8,3.4-1,3.5-1.2c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3      c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C1.3-3.5,1.2-3.4,1-3.4      C0.9-3.3,0.9-3.2,0.7-3.1C0.6-3.1,0.5-3,0.5-2.9C0.5-2.8,0.5-2.9,0.5-2.8C0.5-2.7,0.5-2.8,0.5-2.8"})])])])]),c("path",{fill:"#9BA095",d:"M81.2,27.9L43.8,92.8L6.4,27.9H81.2 M83.1,24.2H4.5c-2,0-3.2,2.2-2.3,3.9l39.3,68.1c0.5,0.8,1.4,1.3,2.3,1.3  c0.9,0,1.7-0.4,2.3-1.3l39.3-68.1C86.4,26.4,85.1,24.2,83.1,24.2L83.1,24.2z"}),c("path",{fill:"#7A7F73",d:"M43.8,0L0,75.9h87.6L43.8,0z M33.1,29.3l2.5,4.3l-12,20.8L21.1,50L33.1,29.3z M25.4,57.4l12-20.8l19.7,34.2  h-24L25.4,57.4z"})]),c("div",{class:"mt-2 font-serif font-medium text-4xl tracking-wider text-main-color-dark text-center"}," Catch the stars")],-1),R3=K({setup(e){const t=v0(),r=n0(),n=String(r.name),a=o({validate:()=>({valid:!1})}),s=o(""),u=o(""),_={email:l0.email,password:l0.password},g=P0(async()=>{const{valid:d}=await a.value.validate();if(d){const p=await C2(s.value,u.value,n);if(p){const h=p.data.login;h.errorMsg?alert(h.errorMsg):(await localStorage.setItem("token",h.token),await localStorage.setItem("expired",h.exp),await localStorage.setItem("refresh-token",h.refreshToken),await localStorage.setItem("refresh-expired",h.refreshExp),await t.push({path:"/board"}))}}},1e3);return(d,p)=>{const h=i0;return F(),C(j,null,[c("div",D3,[c("div",L3,[I3,i(l(S0),{ref_key:"loginForm",ref:a,"validation-schema":_,class:"relative"},{default:L(({errors:f})=>[i(l(r0),{name:"email",type:"text",class:y(["h-table:w-5/12 w-10/12 h-8 block m-auto bg-transparent border-t-0 border-b-2 border-x-0 text-middle placeholder-main-color-dark px-0 py-7 border-opacity-30 focus:outline-0 focus:ring-0 focus:border-opacity-70 focus:border-main-color-black focus:placeholder-transparent",[{"border-sp-color-dark border-opacity-100":f.email},{"border-main-color-black":!f.email}]]),placeholder:"\u5E33\u865F",modelValue:s.value,"onUpdate:modelValue":p[0]||(p[0]=M=>s.value=M)},null,8,["class","modelValue"]),i(l(r0),{name:"password",type:"password",class:y(["h-table:w-5/12 w-10/12 h-8 block m-auto bg-transparent border-t-0 border-b-2 border-x-0 text-middle placeholder-main-color-dark px-0 py-7 border-opacity-30 focus:outline-0 focus:ring-0 focus:border-opacity-70 focus:border-main-color-black focus:placeholder-transparent mt-2",[{"border-sp-color-dark border-opacity-100":f.password},{"border-main-color-black":!f.password}]]),placeholder:"\u5BC6\u78BC",modelValue:u.value,"onUpdate:modelValue":p[1]||(p[1]=M=>u.value=M)},null,8,["class","modelValue"]),c("button",{onClick:p[2]||(p[2]=I((...M)=>l(g)&&l(g)(...M),["prevent"])),id:"submit-login",class:"h-table:w-5/12 w-10/12 btn border block font-bold mt-14 m-auto text-middle shadow-none text-main-color-black border-main-color-black tracking-wide-content hover:bg-main-color-dark transition-all duration-300 hover:text-main-color-light h-12 text-center items-center p-0 justify-center"}," \u767B\u5165\u5F8C\u53F0 "),B(c("span",{class:"text-sp-color-dark text-xs h-table:w-5/12 w-10/12 h-5 block m-auto mt-2"},x(f.email),513),[[D,f.email]]),B(c("span",{class:"text-sp-color-dark text-xs h-table:w-5/12 w-10/12 h-5 block m-auto"},x(f.password),513),[[D,f.password]])]),_:1},512)])]),i(h,{class:"animate__animated animate__fadeIn"})],64)}}}),T3={class:"sidebar-logo inline-block"},N3=c("svg",{class:"admin-login-svg-obj svg-obj h-auto laptop:w-64px mb-3 w-29px",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:a":"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",version:"1.1",x:"0px",y:"0px",width:"89px",height:"98px",viewBox:"-0.7 0 89 98","enable-background":"new -0.7 0 89 98","xml:space":"preserve"},[c("defs",null,[c("pattern",{x:"-31.7",y:"123",width:"69",height:"69",patternUnits:"userSpaceOnUse",id:"\u5713\u9EDE\u5716\u6A23",viewBox:"2.1 -70.9 69 69",overflow:"visible"},[c("g",null,[c("polygon",{fill:"none",points:"71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9    "}),c("polygon",{fill:"#F6BB60",points:"71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9    "}),c("g",null,[c("path",{fill:"#1f1f39",d:"M61.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-71.7,61.8-71.7,61.8-71.7      C61.8-71.6,61.8-71.6,61.8-71.7"}),c("path",{fill:"#1f1f39",d:"M54.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-71.7,54.1-71.7,54.1-71.7      C54.1-71.6,54.1-71.6,54.1-71.7"}),c("path",{fill:"#1f1f39",d:"M46.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.4-71.7,46.4-71.7,46.4-71.7      C46.4-71.6,46.4-71.6,46.4-71.7"}),c("path",{fill:"#1f1f39",d:"M38.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-71.7,38.8-71.7,38.8-71.7      C38.8-71.6,38.8-71.6,38.8-71.7"}),c("path",{fill:"#1f1f39",d:"M31.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-71.7,31.1-71.7,31.1-71.7      C31.1-71.6,31.1-71.6,31.1-71.7"}),c("path",{fill:"#1f1f39",d:"M23.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.4-71.7,23.4-71.7,23.4-71.7      C23.4-71.6,23.4-71.6,23.4-71.7"}),c("path",{fill:"#1f1f39",d:"M15.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-71.7,15.8-71.7,15.8-71.7      C15.8-71.6,15.8-71.6,15.8-71.7"}),c("path",{fill:"#1f1f39",d:"M8.1-71.7c0,0.1,0,0.1,0,0.2C8-71.4,8-71.4,7.9-71.3c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.1-71.7,8.1-71.7,8.1-71.7      C8.1-71.6,8.1-71.6,8.1-71.7"}),c("path",{fill:"#1f1f39",d:"M0.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.8-69.4,1-69,1.2-68.9c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.4-71.7,0.4-71.7,0.4-71.7      C0.4-71.6,0.4-71.6,0.4-71.7"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-71.7,69.4-71.7,69.4-71.7      C69.4-71.6,69.4-71.6,69.4-71.7"})]),c("path",{fill:"#1f1f39",d:"M0.5-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3     c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-69.4,1-69,1.3-68.9c0.2,0,0.4-0.1,0.5-0.1     c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2     c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8     c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-71.7,0.5-71.7,0.5-71.7     C0.5-71.6,0.5-71.6,0.5-71.7"}),c("g",null,[c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-64,69.4-64.1,69.4-64C69.4-64,69.4-64,69.4-64"}),c("path",{fill:"#1f1f39",d:"M61.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-64,61.8-64.1,61.8-64C61.8-64,61.8-64,61.8-64"}),c("path",{fill:"#1f1f39",d:"M54.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-64,54.1-64.1,54.1-64C54.1-64,54.1-64,54.1-64"}),c("path",{fill:"#1f1f39",d:"M46.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-64,46.5-64.1,46.5-64C46.5-64,46.5-64,46.5-64"}),c("path",{fill:"#1f1f39",d:"M38.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-64,38.8-64.1,38.8-64C38.8-64,38.8-64,38.8-64"}),c("path",{fill:"#1f1f39",d:"M31.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-64,31.1-64.1,31.1-64C31.1-64,31.1-64,31.1-64"}),c("path",{fill:"#1f1f39",d:"M23.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-64,23.5-64.1,23.5-64C23.5-64,23.5-64,23.5-64"}),c("path",{fill:"#1f1f39",d:"M15.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-64,15.8-64.1,15.8-64C15.8-64,15.8-64,15.8-64"}),c("path",{fill:"#1f1f39",d:"M8.2-64c0,0.1,0,0.1,0,0.2C8.1-63.7,8-63.7,8-63.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-62.2,8.2-62,8.3-61.9c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-64,8.2-64.1,8.2-64C8.1-64,8.1-64,8.2-64"}),c("path",{fill:"#1f1f39",d:"M0.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-62,3-61.9,3.1-62c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-64,0.5-64.1,0.5-64C0.5-64,0.5-64,0.5-64"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-56.4,69.4-56.4,69.4-56.3       C69.4-56.3,69.4-56.3,69.4-56.3"}),c("path",{fill:"#1f1f39",d:"M61.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-56.4,61.8-56.4,61.8-56.3       C61.8-56.3,61.8-56.3,61.8-56.3"}),c("path",{fill:"#1f1f39",d:"M54.1-56.3c0,0.1,0,0.1,0,0.2C54-56.1,54-56.1,53.9-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-56.4,54.1-56.4,54.1-56.3       C54.1-56.3,54.1-56.3,54.1-56.3"}),c("path",{fill:"#1f1f39",d:"M46.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-56.4,46.5-56.4,46.5-56.3       C46.5-56.3,46.5-56.3,46.5-56.3"}),c("path",{fill:"#1f1f39",d:"M38.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-56.4,38.8-56.4,38.8-56.3       C38.8-56.3,38.8-56.3,38.8-56.3"}),c("path",{fill:"#1f1f39",d:"M31.1-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-56.4,31.1-56.4,31.1-56.3       C31.1-56.3,31.1-56.3,31.1-56.3"}),c("path",{fill:"#1f1f39",d:"M23.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-56.4,23.5-56.4,23.5-56.3       C23.5-56.3,23.5-56.3,23.5-56.3"}),c("path",{fill:"#1f1f39",d:"M15.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-56.4,15.8-56.4,15.8-56.3       C15.8-56.3,15.8-56.3,15.8-56.3"}),c("path",{fill:"#1f1f39",d:"M8.2-56.3c0,0.1,0,0.1,0,0.2C8.1-56.1,8-56.1,8-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-56.4,8.2-56.4,8.2-56.3       C8.1-56.3,8.1-56.3,8.2-56.3"}),c("path",{fill:"#1f1f39",d:"M0.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-56.4,0.5-56.4,0.5-56.3       C0.5-56.3,0.5-56.3,0.5-56.3"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-48.7,69.4-48.8,69.4-48.7       C69.4-48.7,69.4-48.7,69.4-48.7"}),c("path",{fill:"#1f1f39",d:"M61.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-48.7,61.8-48.8,61.8-48.7       C61.8-48.7,61.8-48.7,61.8-48.7"}),c("path",{fill:"#1f1f39",d:"M54.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-48.7,54.1-48.8,54.1-48.7       C54.1-48.7,54.1-48.7,54.1-48.7"}),c("path",{fill:"#1f1f39",d:"M46.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-48.7,46.5-48.8,46.5-48.7       C46.5-48.7,46.5-48.7,46.5-48.7"}),c("path",{fill:"#1f1f39",d:"M38.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-48.7,38.8-48.8,38.8-48.7       C38.8-48.7,38.8-48.7,38.8-48.7"}),c("path",{fill:"#1f1f39",d:"M31.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-48.7,31.1-48.8,31.1-48.7       C31.1-48.7,31.1-48.7,31.1-48.7"}),c("path",{fill:"#1f1f39",d:"M23.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-48.7,23.5-48.8,23.5-48.7       C23.5-48.7,23.5-48.7,23.5-48.7"}),c("path",{fill:"#1f1f39",d:"M15.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-48.7,15.8-48.8,15.8-48.7       C15.8-48.7,15.8-48.7,15.8-48.7"}),c("path",{fill:"#1f1f39",d:"M8.2-48.7c0,0.1,0,0.1,0,0.2C8.1-48.4,8-48.4,8-48.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C8.5-46.4,8.7-46,8.9-46c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-48.7,8.2-48.8,8.2-48.7       C8.1-48.7,8.1-48.7,8.2-48.7"}),c("path",{fill:"#1f1f39",d:"M0.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-46.4,1-46,1.3-46c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-48.7,0.5-48.8,0.5-48.7       C0.5-48.7,0.5-48.7,0.5-48.7"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-41.1,69.4-41.1,69.4-41       C69.4-41,69.4-41,69.4-41"}),c("path",{fill:"#1f1f39",d:"M61.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-41.1,61.8-41.1,61.8-41       C61.8-41,61.8-41,61.8-41"}),c("path",{fill:"#1f1f39",d:"M54.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-41.1,54.1-41.1,54.1-41       C54.1-41,54.1-41,54.1-41"}),c("path",{fill:"#1f1f39",d:"M46.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-41.1,46.5-41.1,46.5-41       C46.5-41,46.5-41,46.5-41"}),c("path",{fill:"#1f1f39",d:"M38.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-41.1,38.8-41.1,38.8-41       C38.8-41,38.8-41,38.8-41"}),c("path",{fill:"#1f1f39",d:"M31.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-41.1,31.1-41.1,31.1-41       C31.1-41,31.1-41,31.1-41"}),c("path",{fill:"#1f1f39",d:"M23.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-41.1,23.5-41.1,23.5-41       C23.5-41,23.5-41,23.5-41"}),c("path",{fill:"#1f1f39",d:"M15.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-41.1,15.8-41.1,15.8-41       C15.8-41,15.8-41,15.8-41"}),c("path",{fill:"#1f1f39",d:"M8.2-41c0,0.1,0,0.1,0,0.2C8.1-40.8,8-40.8,8-40.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-41.1,8.2-41.1,8.2-41C8.1-41,8.1-41,8.2-41"}),c("path",{fill:"#1f1f39",d:"M0.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-39,3-39,3.1-39c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-41.1,0.5-41.1,0.5-41C0.5-41,0.5-41,0.5-41"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-33.4,69.4-33.5,69.4-33.4       C69.4-33.4,69.4-33.4,69.4-33.4"}),c("path",{fill:"#1f1f39",d:"M61.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-33.4,61.8-33.5,61.8-33.4       C61.8-33.4,61.8-33.4,61.8-33.4"}),c("path",{fill:"#1f1f39",d:"M54.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-33.4,54.1-33.5,54.1-33.4       C54.1-33.4,54.1-33.4,54.1-33.4"}),c("path",{fill:"#1f1f39",d:"M46.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-33.4,46.5-33.5,46.5-33.4       C46.5-33.4,46.5-33.4,46.5-33.4"}),c("path",{fill:"#1f1f39",d:"M38.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-33.4,38.8-33.5,38.8-33.4       C38.8-33.4,38.8-33.4,38.8-33.4"}),c("path",{fill:"#1f1f39",d:"M31.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-33.4,31.1-33.5,31.1-33.4       C31.1-33.4,31.1-33.4,31.1-33.4"}),c("path",{fill:"#1f1f39",d:"M23.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-33.4,23.5-33.5,23.5-33.4       C23.5-33.4,23.5-33.4,23.5-33.4"}),c("path",{fill:"#1f1f39",d:"M15.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-33.4,15.8-33.5,15.8-33.4       C15.8-33.4,15.8-33.4,15.8-33.4"}),c("path",{fill:"#1f1f39",d:"M8.2-33.4c0,0.1,0,0.1,0,0.2C8.1-33.1,8-33.1,8-33.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-33.4,8.2-33.5,8.2-33.4       C8.1-33.4,8.1-33.4,8.2-33.4"}),c("path",{fill:"#1f1f39",d:"M0.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-33.4,0.5-33.5,0.5-33.4       C0.5-33.4,0.5-33.4,0.5-33.4"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-25.8,69.4-25.8,69.4-25.7       C69.4-25.7,69.4-25.7,69.4-25.7"}),c("path",{fill:"#1f1f39",d:"M61.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-25.8,61.8-25.8,61.8-25.7       C61.8-25.7,61.8-25.7,61.8-25.7"}),c("path",{fill:"#1f1f39",d:"M54.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-25.8,54.1-25.8,54.1-25.7       C54.1-25.7,54.1-25.7,54.1-25.7"}),c("path",{fill:"#1f1f39",d:"M46.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-25.8,46.5-25.8,46.5-25.7       C46.5-25.7,46.5-25.7,46.5-25.7"}),c("path",{fill:"#1f1f39",d:"M38.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-25.8,38.8-25.8,38.8-25.7       C38.8-25.7,38.8-25.7,38.8-25.7"}),c("path",{fill:"#1f1f39",d:"M31.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-25.8,31.1-25.8,31.1-25.7       C31.1-25.7,31.1-25.7,31.1-25.7"}),c("path",{fill:"#1f1f39",d:"M23.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-25.8,23.5-25.8,23.5-25.7       C23.5-25.7,23.5-25.7,23.5-25.7"}),c("path",{fill:"#1f1f39",d:"M15.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-25.8,15.8-25.8,15.8-25.7       C15.8-25.7,15.8-25.7,15.8-25.7"}),c("path",{fill:"#1f1f39",d:"M8.2-25.7c0,0.1,0,0.1,0,0.2C8.1-25.4,8-25.5,8-25.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-24,8.2-23.8,8.3-23.6c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-25.8,8.2-25.8,8.2-25.7       C8.1-25.7,8.1-25.7,8.2-25.7"}),c("path",{fill:"#1f1f39",d:"M0.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-23.5,1-23.1,1.3-23c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-25.8,0.5-25.8,0.5-25.7       C0.5-25.7,0.5-25.7,0.5-25.7"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-18.1,69.4-18.2,69.4-18.1       C69.4-18,69.4-18.1,69.4-18.1"}),c("path",{fill:"#1f1f39",d:"M61.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-18.1,61.8-18.2,61.8-18.1       C61.8-18,61.8-18.1,61.8-18.1"}),c("path",{fill:"#1f1f39",d:"M54.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-18.1,54.1-18.2,54.1-18.1       C54.1-18,54.1-18.1,54.1-18.1"}),c("path",{fill:"#1f1f39",d:"M46.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-18.1,46.5-18.2,46.5-18.1       C46.5-18,46.5-18.1,46.5-18.1"}),c("path",{fill:"#1f1f39",d:"M38.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-18.1,38.8-18.2,38.8-18.1       C38.8-18,38.8-18.1,38.8-18.1"}),c("path",{fill:"#1f1f39",d:"M31.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-18.1,31.1-18.2,31.1-18.1       C31.1-18,31.1-18.1,31.1-18.1"}),c("path",{fill:"#1f1f39",d:"M23.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-18.1,23.5-18.2,23.5-18.1       C23.5-18,23.5-18.1,23.5-18.1"}),c("path",{fill:"#1f1f39",d:"M15.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-18.1,15.8-18.2,15.8-18.1       C15.8-18,15.8-18.1,15.8-18.1"}),c("path",{fill:"#1f1f39",d:"M8.2-18.1c0,0.1,0,0.1,0,0.2C8.1-17.8,8-17.8,8-17.8c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-16.3,8.2-16.1,8.3-16c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-18.1,8.2-18.2,8.2-18.1       C8.1-18,8.1-18.1,8.2-18.1"}),c("path",{fill:"#1f1f39",d:"M0.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-16.1,3-16,3.1-16c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-18.1,0.5-18.2,0.5-18.1       C0.5-18,0.5-18.1,0.5-18.1"})]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-10.5,69.4-10.5,69.4-10.4       C69.4-10.4,69.4-10.4,69.4-10.4"}),c("path",{fill:"#1f1f39",d:"M61.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1C63.9-8,63.8-8.2,64-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-10.5,61.8-10.5,61.8-10.4       C61.8-10.4,61.8-10.4,61.8-10.4"}),c("path",{fill:"#1f1f39",d:"M54.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-10.5,54.1-10.5,54.1-10.4       C54.1-10.4,54.1-10.4,54.1-10.4"}),c("path",{fill:"#1f1f39",d:"M46.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-10.5,46.5-10.5,46.5-10.4       C46.5-10.4,46.5-10.4,46.5-10.4"}),c("path",{fill:"#1f1f39",d:"M38.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1C40.9-8,40.8-8.2,41-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-10.5,38.8-10.5,38.8-10.4       C38.8-10.4,38.8-10.4,38.8-10.4"}),c("path",{fill:"#1f1f39",d:"M31.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-10.5,31.1-10.5,31.1-10.4       C31.1-10.4,31.1-10.4,31.1-10.4"}),c("path",{fill:"#1f1f39",d:"M23.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-10.5,23.5-10.5,23.5-10.4       C23.5-10.4,23.5-10.4,23.5-10.4"}),c("path",{fill:"#1f1f39",d:"M15.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1C17.9-8,17.8-8.2,18-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-10.5,15.8-10.5,15.8-10.4       C15.8-10.4,15.8-10.4,15.8-10.4"}),c("path",{fill:"#1f1f39",d:"M8.2-10.4c0,0.1,0,0.1,0,0.2C8.1-10.1,8-10.2,8-10.1C7.9-10,7.9-9.8,7.9-9.8c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-8.7,8.2-8.5,8.3-8.3c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-10.5,8.2-10.5,8.2-10.4       C8.1-10.4,8.1-10.4,8.2-10.4"}),c("path",{fill:"#1f1f39",d:"M0.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1C0.3-10,0.2-9.8,0.2-9.8c-0.2,0.1,0,0.2,0,0.3       c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-8.2,1-7.8,1.3-7.7c0.2,0,0.4-0.1,0.5-0.1       c0.2,0,0.4,0,0.6-0.1C2.6-8,2.5-8.2,2.7-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2       c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8       c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-10.5,0.5-10.5,0.5-10.4       C0.5-10.4,0.5-10.4,0.5-10.4"})])]),c("g",null,[c("path",{fill:"#1f1f39",d:"M69.4-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C69.8-0.5,70-0.1,70.2,0c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-2.8,69.4-2.9,69.4-2.8      C69.4-2.7,69.4-2.8,69.4-2.8"}),c("path",{fill:"#1f1f39",d:"M61.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C61.6-1,61.8-0.8,62-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-2.8,61.8-2.9,61.8-2.8      C61.8-2.7,61.8-2.8,61.8-2.8"}),c("path",{fill:"#1f1f39",d:"M54.1-2.8c0,0.1,0,0.1,0,0.2C54-2.5,54-2.5,53.9-2.5c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C54-1,54.1-0.8,54.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C56.9-0.8,57-1,57.1-1.2c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-2.8,54.1-2.9,54.1-2.8      C54.1-2.7,54.1-2.8,54.1-2.8"}),c("path",{fill:"#1f1f39",d:"M46.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C46.8-0.5,47-0.1,47.2,0c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-2.8,46.5-2.9,46.5-2.8      C46.5-2.7,46.5-2.8,46.5-2.8"}),c("path",{fill:"#1f1f39",d:"M38.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C38.6-1,38.8-0.8,39-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-2.8,38.8-2.9,38.8-2.8      C38.8-2.7,38.8-2.8,38.8-2.8"}),c("path",{fill:"#1f1f39",d:"M31.1-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C31-1,31.1-0.8,31.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-2.8,31.1-2.9,31.1-2.8      C31.1-2.7,31.1-2.8,31.1-2.8"}),c("path",{fill:"#1f1f39",d:"M23.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C23.8-0.5,24-0.1,24.3,0c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-2.8,23.5-2.9,23.5-2.8      C23.5-2.7,23.5-2.8,23.5-2.8"}),c("path",{fill:"#1f1f39",d:"M15.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C15.7-1,15.8-0.8,16-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1      c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2      c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8      c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-2.8,15.8-2.9,15.8-2.8      C15.8-2.7,15.8-2.8,15.8-2.8"}),c("path",{fill:"#1f1f39",d:"M8.2-2.8c0,0.1,0,0.1,0,0.2C8.1-2.5,8-2.5,8-2.5C7.9-2.4,7.9-2.2,7.9-2.1c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-1,8.2-0.8,8.3-0.7C8.5-0.5,8.7-0.1,8.9,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1      c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3      c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C9-3.5,8.8-3.4,8.7-3.4      C8.5-3.3,8.6-3.2,8.4-3.1C8.3-3.1,8.2-3,8.2-2.9C8.2-2.8,8.2-2.9,8.2-2.8C8.1-2.7,8.1-2.8,8.2-2.8"}),c("path",{fill:"#1f1f39",d:"M0.5-2.8c0,0.1,0,0.1,0,0.2C0.4-2.5,0.4-2.5,0.3-2.5C0.3-2.4,0.2-2.2,0.2-2.1c-0.2,0.1,0,0.2,0,0.3      c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C0.3-1,0.5-0.8,0.7-0.7C0.9-0.5,1-0.1,1.3,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1      c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C3.3-0.8,3.4-1,3.5-1.2c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3      c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C1.3-3.5,1.2-3.4,1-3.4      C0.9-3.3,0.9-3.2,0.7-3.1C0.6-3.1,0.5-3,0.5-2.9C0.5-2.8,0.5-2.9,0.5-2.8C0.5-2.7,0.5-2.8,0.5-2.8"})])])])]),c("path",{fill:"#9BA095",d:"M81.2,27.9L43.8,92.8L6.4,27.9H81.2 M83.1,24.2H4.5c-2,0-3.2,2.2-2.3,3.9l39.3,68.1c0.5,0.8,1.4,1.3,2.3,1.3  c0.9,0,1.7-0.4,2.3-1.3l39.3-68.1C86.4,26.4,85.1,24.2,83.1,24.2L83.1,24.2z"}),c("path",{fill:"#7A7F73",d:"M43.8,0L0,75.9h87.6L43.8,0z M33.1,29.3l2.5,4.3l-12,20.8L21.1,50L33.1,29.3z M25.4,57.4l12-20.8l19.7,34.2  h-24L25.4,57.4z"})],-1),V3={key:0,class:"text-main-color-dark font-semibold text-xl mt-6"},O3=["onClick"],j3=c("div",{style:{height:"3px",background:"#1f1f39",width:"29px","border-radius":"11px","margin-bottom":"4px"}},null,-1),q3=c("div",{style:{height:"3px",background:"#1f1f39",width:"29px","border-radius":"11px","margin-bottom":"4px"}},null,-1),U3=c("div",{style:{height:"3px",background:"#1f1f39",width:"29px","border-radius":"11px","margin-bottom":"4px"}},null,-1),H3=[j3,q3,U3],M0=K({setup(e){const t=o(!1),r=c0(),n=v0(),a=o([{title:"\u6A19\u8A9E\u7BA1\u7406",path:"title"},{title:"\u9996\u9801\u6A19\u8A9E",path:"/board/slogan"},{title:"\u95DC\u65BC\u6211\u5011",categories:"\u6A19\u8A9E\u7BA1\u7406",path:"/board/slogan?edit=about"},{title:"\u6587\u7AE0\u5206\u985E\u7BA1\u7406",path:"title"},{title:"\u5168\u90E8\u5206\u985E",path:"/board/categories"},{title:"\u65B0\u589E\u5206\u985E",path:"/board/categories/add"},{title:"\u6587\u7AE0\u5217\u8868",path:"title"},{title:"\u5168\u90E8\u6587\u7AE0",path:"/board/article"},{title:"\u65B0\u589E\u6587\u7AE0",path:"/board/article/add"},{title:"\u5929\u6587\u8A2D\u65BD",path:"title"},{title:"\u5929\u6587\u6A5F\u69CB\u7BA1\u7406",path:"/board/organization"},{title:"\u5929\u6587\u53F0\u7BA1\u7406",path:"/board/observatories"},{title:"\u89C0\u661F\u5730\u9EDE\u5217\u8868",path:"title"},{title:"\u5168\u90E8\u5730\u9EDE",path:"/board/stargazer"},{title:"\u65B0\u589E\u5730\u9EDE",path:"/board/stargazer/add"},{title:"\u5176\u5B83\u529F\u80FD",path:"title"},{title:"\u524D\u53F0\u9996\u9801",path:"/"},{title:"\u767B\u51FA",path:"logout"}]);async function s(){await r.logOut(),await n.push("/")}return(u,_)=>{const g=a0("router-link");return F(),C("div",{class:y(["self-stretch laptop:relative laptop:w-1/5 bg-main-color-light laptop:px-10 laptop:py-8 min-h-screen w-11 fixed laptop:z-auto z-9999 mobile:overflow-hidden laptop:h-auto h-full pt-4 px-2 duration-1000 transition-all",{"h-table:w-1/2 mobile:w-full !overflow-y-auto":t.value}])},[c("div",T3,[i(g,{to:"/board"},{default:L(()=>[N3]),_:1})]),c("ul",{class:y(["animate__faster animate__animated laptop:visible",{"animate__fadeIn animate__delay-1s visible":t.value},{invisible:!t.value}])},[(F(!0),C(j,null,h0(a.value,(d,p)=>(F(),C("li",{key:p},[d.path==="title"?(F(),C("h5",V3,x(d.title),1)):d.path==="logout"?(F(),C("h5",{key:1,onClick:I(s,["prevent"]),class:"text-main-color-dark mt-1 hover:text-sub-color-dark transition-all duration-1000 cursor-pointer"},"\u767B\u51FA ",8,O3)):(F(),s0(g,{key:2,to:d.path,class:"text-main-color-dark mt-1 block hover:text-sub-color-dark transition-all duration-1000"},{default:L(()=>[q(x(d.title),1)]),_:2},1032,["to"]))]))),128))],2),c("button",{onClick:_[0]||(_[0]=d=>t.value=!t.value),class:y(["laptop:hidden block text-5xl fixed top-0 h-full py-0 laptop:px-4 px-2 right-auto left-0 shadow-2xl animate__animated animate__delay-2s",{"h-table:left-1/2 h-table:right-auto h-table:pr-2 mobile:left-auto mobile:right-0 animate__fadeIn h-table:bg-main-color-light":t.value}])},H3,2)],2)}}}),Z3={class:"flex"},G3={class:"laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-64 pb-80 mobile:pb-48 h-table:pt-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative"},X3={class:"w-9/12 mobile:w-11/12 flex justify-between mb-12 mobile:mb-6 mobile:block mobile:mx-auto"},Q3={class:"text-white relative -top-2 mobile:text-5xl w-3/4 mobile:w-full"},W3=q(" \u7DE8\u8F2F\u6A19\u8A9E "),Y3={class:"w-9/12 mobile:w-11/12 table-container mobile:m-auto"},J3={key:0,class:"callout-box bg-main-color-light py-10 pl-10 pr-14 mb-20 border-l-callout-box-boder border-sub-color-dark relative mobile:py-4 mobile:px-4 shadow-30-box"},K3={class:"text-main-color-black font-bold mb-2 text-xl"},c5=c("span",{class:"text-sub-color-dark text-9xl font-serif font-light absolute -top-2 right-1 mobile:text-8xl mobile:hidden"},"\u201D",-1),t5={class:"infobox-grid flex flex-wrap justify-between middle-mobile:text-center middle-mobile:justify-center"},e5={class:"infobox flex flex-wrap items-center mb-10 middle-mobile:justify-center"},r5=c("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:a":"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",x:"0px",y:"0px",width:"85px",height:"85px",viewBox:"-0.7 0 23 33","enable-background":"new -0.7 0 23 33","xml:space":"preserve"},[c("defs",null,[c("pattern",{x:"-89.7",y:"116",width:"69",height:"69",patternUnits:"userSpaceOnUse",id:"\u5713\u9EDE\u5716\u6A23",viewBox:"2.1 -70.9 69 69",overflow:"visible"},[c("g",null,[c("polygon",{fill:"none",points:"71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9 			"}),c("polygon",{fill:"#F6BB60",points:"71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9 			"}),c("g",null,[c("path",{fill:"#FFFFFF",d:`M61.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-71.7,61.8-71.7,61.8-71.7\r
					C61.8-71.6,61.8-71.6,61.8-71.7`}),c("path",{fill:"#FFFFFF",d:`M54.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-71.7,54.1-71.7,54.1-71.7\r
					C54.1-71.6,54.1-71.6,54.1-71.7`}),c("path",{fill:"#FFFFFF",d:`M46.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.4-71.7,46.4-71.7,46.4-71.7\r
					C46.4-71.6,46.4-71.6,46.4-71.7`}),c("path",{fill:"#FFFFFF",d:`M38.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-71.7,38.8-71.7,38.8-71.7\r
					C38.8-71.6,38.8-71.6,38.8-71.7`}),c("path",{fill:"#FFFFFF",d:`M31.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-71.7,31.1-71.7,31.1-71.7\r
					C31.1-71.6,31.1-71.6,31.1-71.7`}),c("path",{fill:"#FFFFFF",d:`M23.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.4-71.7,23.4-71.7,23.4-71.7\r
					C23.4-71.6,23.4-71.6,23.4-71.7`}),c("path",{fill:"#FFFFFF",d:`M15.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-71.7,15.8-71.7,15.8-71.7\r
					C15.8-71.6,15.8-71.6,15.8-71.7`}),c("path",{fill:"#FFFFFF",d:`M8.1-71.7c0,0.1,0,0.1,0,0.2C8-71.4,8-71.4,7.9-71.3c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.1-71.7,8.1-71.7,8.1-71.7\r
					C8.1-71.6,8.1-71.6,8.1-71.7`}),c("path",{fill:"#FFFFFF",d:`M0.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.8-69.4,1-69,1.2-68.9c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.4-71.7,0.4-71.7,0.4-71.7\r
					C0.4-71.6,0.4-71.6,0.4-71.7`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-71.7,69.4-71.7,69.4-71.7\r
					C69.4-71.6,69.4-71.6,69.4-71.7`})]),c("path",{fill:"#FFFFFF",d:`M0.5-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-69.4,1-69,1.3-68.9c0.2,0,0.4-0.1,0.5-0.1\r
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-71.7,0.5-71.7,0.5-71.7\r
				C0.5-71.6,0.5-71.6,0.5-71.7`}),c("g",null,[c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-64,69.4-64.1,69.4-64C69.4-64,69.4-64,69.4-64`}),c("path",{fill:"#FFFFFF",d:`M61.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-64,61.8-64.1,61.8-64C61.8-64,61.8-64,61.8-64`}),c("path",{fill:"#FFFFFF",d:`M54.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-64,54.1-64.1,54.1-64C54.1-64,54.1-64,54.1-64`}),c("path",{fill:"#FFFFFF",d:`M46.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-64,46.5-64.1,46.5-64C46.5-64,46.5-64,46.5-64`}),c("path",{fill:"#FFFFFF",d:`M38.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-64,38.8-64.1,38.8-64C38.8-64,38.8-64,38.8-64`}),c("path",{fill:"#FFFFFF",d:`M31.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-64,31.1-64.1,31.1-64C31.1-64,31.1-64,31.1-64`}),c("path",{fill:"#FFFFFF",d:`M23.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-64,23.5-64.1,23.5-64C23.5-64,23.5-64,23.5-64`}),c("path",{fill:"#FFFFFF",d:`M15.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-64,15.8-64.1,15.8-64C15.8-64,15.8-64,15.8-64`}),c("path",{fill:"#FFFFFF",d:`M8.2-64c0,0.1,0,0.1,0,0.2C8.1-63.7,8-63.7,8-63.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-62.2,8.2-62,8.3-61.9c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-64,8.2-64.1,8.2-64C8.1-64,8.1-64,8.2-64`}),c("path",{fill:"#FFFFFF",d:`M0.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-62,3-61.9,3.1-62c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-64,0.5-64.1,0.5-64C0.5-64,0.5-64,0.5-64`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-56.4,69.4-56.4,69.4-56.3\r
						C69.4-56.3,69.4-56.3,69.4-56.3`}),c("path",{fill:"#FFFFFF",d:`M61.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-56.4,61.8-56.4,61.8-56.3\r
						C61.8-56.3,61.8-56.3,61.8-56.3`}),c("path",{fill:"#FFFFFF",d:`M54.1-56.3c0,0.1,0,0.1,0,0.2C54-56.1,54-56.1,53.9-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-56.4,54.1-56.4,54.1-56.3\r
						C54.1-56.3,54.1-56.3,54.1-56.3`}),c("path",{fill:"#FFFFFF",d:`M46.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-56.4,46.5-56.4,46.5-56.3\r
						C46.5-56.3,46.5-56.3,46.5-56.3`}),c("path",{fill:"#FFFFFF",d:`M38.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-56.4,38.8-56.4,38.8-56.3\r
						C38.8-56.3,38.8-56.3,38.8-56.3`}),c("path",{fill:"#FFFFFF",d:`M31.1-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-56.4,31.1-56.4,31.1-56.3\r
						C31.1-56.3,31.1-56.3,31.1-56.3`}),c("path",{fill:"#FFFFFF",d:`M23.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-56.4,23.5-56.4,23.5-56.3\r
						C23.5-56.3,23.5-56.3,23.5-56.3`}),c("path",{fill:"#FFFFFF",d:`M15.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-56.4,15.8-56.4,15.8-56.3\r
						C15.8-56.3,15.8-56.3,15.8-56.3`}),c("path",{fill:"#FFFFFF",d:`M8.2-56.3c0,0.1,0,0.1,0,0.2C8.1-56.1,8-56.1,8-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-56.4,8.2-56.4,8.2-56.3\r
						C8.1-56.3,8.1-56.3,8.2-56.3`}),c("path",{fill:"#FFFFFF",d:`M0.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-56.4,0.5-56.4,0.5-56.3\r
						C0.5-56.3,0.5-56.3,0.5-56.3`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-48.7,69.4-48.8,69.4-48.7\r
						C69.4-48.7,69.4-48.7,69.4-48.7`}),c("path",{fill:"#FFFFFF",d:`M61.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-48.7,61.8-48.8,61.8-48.7\r
						C61.8-48.7,61.8-48.7,61.8-48.7`}),c("path",{fill:"#FFFFFF",d:`M54.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-48.7,54.1-48.8,54.1-48.7\r
						C54.1-48.7,54.1-48.7,54.1-48.7`}),c("path",{fill:"#FFFFFF",d:`M46.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-48.7,46.5-48.8,46.5-48.7\r
						C46.5-48.7,46.5-48.7,46.5-48.7`}),c("path",{fill:"#FFFFFF",d:`M38.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-48.7,38.8-48.8,38.8-48.7\r
						C38.8-48.7,38.8-48.7,38.8-48.7`}),c("path",{fill:"#FFFFFF",d:`M31.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-48.7,31.1-48.8,31.1-48.7\r
						C31.1-48.7,31.1-48.7,31.1-48.7`}),c("path",{fill:"#FFFFFF",d:`M23.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-48.7,23.5-48.8,23.5-48.7\r
						C23.5-48.7,23.5-48.7,23.5-48.7`}),c("path",{fill:"#FFFFFF",d:`M15.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-48.7,15.8-48.8,15.8-48.7\r
						C15.8-48.7,15.8-48.7,15.8-48.7`}),c("path",{fill:"#FFFFFF",d:`M8.2-48.7c0,0.1,0,0.1,0,0.2C8.1-48.4,8-48.4,8-48.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C8.5-46.4,8.7-46,8.9-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-48.7,8.2-48.8,8.2-48.7\r
						C8.1-48.7,8.1-48.7,8.2-48.7`}),c("path",{fill:"#FFFFFF",d:`M0.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-46.4,1-46,1.3-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-48.7,0.5-48.8,0.5-48.7\r
						C0.5-48.7,0.5-48.7,0.5-48.7`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-41.1,69.4-41.1,69.4-41\r
						C69.4-41,69.4-41,69.4-41`}),c("path",{fill:"#FFFFFF",d:`M61.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-41.1,61.8-41.1,61.8-41\r
						C61.8-41,61.8-41,61.8-41`}),c("path",{fill:"#FFFFFF",d:`M54.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-41.1,54.1-41.1,54.1-41\r
						C54.1-41,54.1-41,54.1-41`}),c("path",{fill:"#FFFFFF",d:`M46.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-41.1,46.5-41.1,46.5-41\r
						C46.5-41,46.5-41,46.5-41`}),c("path",{fill:"#FFFFFF",d:`M38.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-41.1,38.8-41.1,38.8-41\r
						C38.8-41,38.8-41,38.8-41`}),c("path",{fill:"#FFFFFF",d:`M31.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-41.1,31.1-41.1,31.1-41\r
						C31.1-41,31.1-41,31.1-41`}),c("path",{fill:"#FFFFFF",d:`M23.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-41.1,23.5-41.1,23.5-41\r
						C23.5-41,23.5-41,23.5-41`}),c("path",{fill:"#FFFFFF",d:`M15.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-41.1,15.8-41.1,15.8-41\r
						C15.8-41,15.8-41,15.8-41`}),c("path",{fill:"#FFFFFF",d:`M8.2-41c0,0.1,0,0.1,0,0.2C8.1-40.8,8-40.8,8-40.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-41.1,8.2-41.1,8.2-41C8.1-41,8.1-41,8.2-41`}),c("path",{fill:"#FFFFFF",d:`M0.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-39,3-39,3.1-39c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-41.1,0.5-41.1,0.5-41C0.5-41,0.5-41,0.5-41`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-33.4,69.4-33.5,69.4-33.4\r
						C69.4-33.4,69.4-33.4,69.4-33.4`}),c("path",{fill:"#FFFFFF",d:`M61.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-33.4,61.8-33.5,61.8-33.4\r
						C61.8-33.4,61.8-33.4,61.8-33.4`}),c("path",{fill:"#FFFFFF",d:`M54.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-33.4,54.1-33.5,54.1-33.4\r
						C54.1-33.4,54.1-33.4,54.1-33.4`}),c("path",{fill:"#FFFFFF",d:`M46.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-33.4,46.5-33.5,46.5-33.4\r
						C46.5-33.4,46.5-33.4,46.5-33.4`}),c("path",{fill:"#FFFFFF",d:`M38.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-33.4,38.8-33.5,38.8-33.4\r
						C38.8-33.4,38.8-33.4,38.8-33.4`}),c("path",{fill:"#FFFFFF",d:`M31.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-33.4,31.1-33.5,31.1-33.4\r
						C31.1-33.4,31.1-33.4,31.1-33.4`}),c("path",{fill:"#FFFFFF",d:`M23.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-33.4,23.5-33.5,23.5-33.4\r
						C23.5-33.4,23.5-33.4,23.5-33.4`}),c("path",{fill:"#FFFFFF",d:`M15.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-33.4,15.8-33.5,15.8-33.4\r
						C15.8-33.4,15.8-33.4,15.8-33.4`}),c("path",{fill:"#FFFFFF",d:`M8.2-33.4c0,0.1,0,0.1,0,0.2C8.1-33.1,8-33.1,8-33.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-33.4,8.2-33.5,8.2-33.4\r
						C8.1-33.4,8.1-33.4,8.2-33.4`}),c("path",{fill:"#FFFFFF",d:`M0.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-33.4,0.5-33.5,0.5-33.4\r
						C0.5-33.4,0.5-33.4,0.5-33.4`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-25.8,69.4-25.8,69.4-25.7\r
						C69.4-25.7,69.4-25.7,69.4-25.7`}),c("path",{fill:"#FFFFFF",d:`M61.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-25.8,61.8-25.8,61.8-25.7\r
						C61.8-25.7,61.8-25.7,61.8-25.7`}),c("path",{fill:"#FFFFFF",d:`M54.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-25.8,54.1-25.8,54.1-25.7\r
						C54.1-25.7,54.1-25.7,54.1-25.7`}),c("path",{fill:"#FFFFFF",d:`M46.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-25.8,46.5-25.8,46.5-25.7\r
						C46.5-25.7,46.5-25.7,46.5-25.7`}),c("path",{fill:"#FFFFFF",d:`M38.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-25.8,38.8-25.8,38.8-25.7\r
						C38.8-25.7,38.8-25.7,38.8-25.7`}),c("path",{fill:"#FFFFFF",d:`M31.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-25.8,31.1-25.8,31.1-25.7\r
						C31.1-25.7,31.1-25.7,31.1-25.7`}),c("path",{fill:"#FFFFFF",d:`M23.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-25.8,23.5-25.8,23.5-25.7\r
						C23.5-25.7,23.5-25.7,23.5-25.7`}),c("path",{fill:"#FFFFFF",d:`M15.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-25.8,15.8-25.8,15.8-25.7\r
						C15.8-25.7,15.8-25.7,15.8-25.7`}),c("path",{fill:"#FFFFFF",d:`M8.2-25.7c0,0.1,0,0.1,0,0.2C8.1-25.4,8-25.5,8-25.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-24,8.2-23.8,8.3-23.6c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-25.8,8.2-25.8,8.2-25.7\r
						C8.1-25.7,8.1-25.7,8.2-25.7`}),c("path",{fill:"#FFFFFF",d:`M0.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-23.5,1-23.1,1.3-23c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-25.8,0.5-25.8,0.5-25.7\r
						C0.5-25.7,0.5-25.7,0.5-25.7`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-18.1,69.4-18.2,69.4-18.1\r
						C69.4-18,69.4-18.1,69.4-18.1`}),c("path",{fill:"#FFFFFF",d:`M61.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-18.1,61.8-18.2,61.8-18.1\r
						C61.8-18,61.8-18.1,61.8-18.1`}),c("path",{fill:"#FFFFFF",d:`M54.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-18.1,54.1-18.2,54.1-18.1\r
						C54.1-18,54.1-18.1,54.1-18.1`}),c("path",{fill:"#FFFFFF",d:`M46.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-18.1,46.5-18.2,46.5-18.1\r
						C46.5-18,46.5-18.1,46.5-18.1`}),c("path",{fill:"#FFFFFF",d:`M38.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-18.1,38.8-18.2,38.8-18.1\r
						C38.8-18,38.8-18.1,38.8-18.1`}),c("path",{fill:"#FFFFFF",d:`M31.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-18.1,31.1-18.2,31.1-18.1\r
						C31.1-18,31.1-18.1,31.1-18.1`}),c("path",{fill:"#FFFFFF",d:`M23.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-18.1,23.5-18.2,23.5-18.1\r
						C23.5-18,23.5-18.1,23.5-18.1`}),c("path",{fill:"#FFFFFF",d:`M15.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-18.1,15.8-18.2,15.8-18.1\r
						C15.8-18,15.8-18.1,15.8-18.1`}),c("path",{fill:"#FFFFFF",d:`M8.2-18.1c0,0.1,0,0.1,0,0.2C8.1-17.8,8-17.8,8-17.8c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-16.3,8.2-16.1,8.3-16c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-18.1,8.2-18.2,8.2-18.1\r
						C8.1-18,8.1-18.1,8.2-18.1`}),c("path",{fill:"#FFFFFF",d:`M0.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-16.1,3-16,3.1-16c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-18.1,0.5-18.2,0.5-18.1\r
						C0.5-18,0.5-18.1,0.5-18.1`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-10.5,69.4-10.5,69.4-10.4\r
						C69.4-10.4,69.4-10.4,69.4-10.4`}),c("path",{fill:"#FFFFFF",d:`M61.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C63.9-8,63.8-8.2,64-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-10.5,61.8-10.5,61.8-10.4\r
						C61.8-10.4,61.8-10.4,61.8-10.4`}),c("path",{fill:"#FFFFFF",d:`M54.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-10.5,54.1-10.5,54.1-10.4\r
						C54.1-10.4,54.1-10.4,54.1-10.4`}),c("path",{fill:"#FFFFFF",d:`M46.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-10.5,46.5-10.5,46.5-10.4\r
						C46.5-10.4,46.5-10.4,46.5-10.4`}),c("path",{fill:"#FFFFFF",d:`M38.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C40.9-8,40.8-8.2,41-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-10.5,38.8-10.5,38.8-10.4\r
						C38.8-10.4,38.8-10.4,38.8-10.4`}),c("path",{fill:"#FFFFFF",d:`M31.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-10.5,31.1-10.5,31.1-10.4\r
						C31.1-10.4,31.1-10.4,31.1-10.4`}),c("path",{fill:"#FFFFFF",d:`M23.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-10.5,23.5-10.5,23.5-10.4\r
						C23.5-10.4,23.5-10.4,23.5-10.4`}),c("path",{fill:"#FFFFFF",d:`M15.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C17.9-8,17.8-8.2,18-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-10.5,15.8-10.5,15.8-10.4\r
						C15.8-10.4,15.8-10.4,15.8-10.4`}),c("path",{fill:"#FFFFFF",d:`M8.2-10.4c0,0.1,0,0.1,0,0.2C8.1-10.1,8-10.2,8-10.1C7.9-10,7.9-9.8,7.9-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-8.7,8.2-8.5,8.3-8.3c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-10.5,8.2-10.5,8.2-10.4\r
						C8.1-10.4,8.1-10.4,8.2-10.4`}),c("path",{fill:"#FFFFFF",d:`M0.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1C0.3-10,0.2-9.8,0.2-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-8.2,1-7.8,1.3-7.7c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C2.6-8,2.5-8.2,2.7-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-10.5,0.5-10.5,0.5-10.4\r
						C0.5-10.4,0.5-10.4,0.5-10.4`})])]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C69.8-0.5,70-0.1,70.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-2.8,69.4-2.9,69.4-2.8\r
					C69.4-2.7,69.4-2.8,69.4-2.8`}),c("path",{fill:"#FFFFFF",d:`M61.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C61.6-1,61.8-0.8,62-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-2.8,61.8-2.9,61.8-2.8\r
					C61.8-2.7,61.8-2.8,61.8-2.8`}),c("path",{fill:"#FFFFFF",d:`M54.1-2.8c0,0.1,0,0.1,0,0.2C54-2.5,54-2.5,53.9-2.5c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C54-1,54.1-0.8,54.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C56.9-0.8,57-1,57.1-1.2c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-2.8,54.1-2.9,54.1-2.8\r
					C54.1-2.7,54.1-2.8,54.1-2.8`}),c("path",{fill:"#FFFFFF",d:`M46.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C46.8-0.5,47-0.1,47.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-2.8,46.5-2.9,46.5-2.8\r
					C46.5-2.7,46.5-2.8,46.5-2.8`}),c("path",{fill:"#FFFFFF",d:`M38.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C38.6-1,38.8-0.8,39-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-2.8,38.8-2.9,38.8-2.8\r
					C38.8-2.7,38.8-2.8,38.8-2.8`}),c("path",{fill:"#FFFFFF",d:`M31.1-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C31-1,31.1-0.8,31.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-2.8,31.1-2.9,31.1-2.8\r
					C31.1-2.7,31.1-2.8,31.1-2.8`}),c("path",{fill:"#FFFFFF",d:`M23.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C23.8-0.5,24-0.1,24.3,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-2.8,23.5-2.9,23.5-2.8\r
					C23.5-2.7,23.5-2.8,23.5-2.8`}),c("path",{fill:"#FFFFFF",d:`M15.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C15.7-1,15.8-0.8,16-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-2.8,15.8-2.9,15.8-2.8\r
					C15.8-2.7,15.8-2.8,15.8-2.8`}),c("path",{fill:"#FFFFFF",d:`M8.2-2.8c0,0.1,0,0.1,0,0.2C8.1-2.5,8-2.5,8-2.5C7.9-2.4,7.9-2.2,7.9-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-1,8.2-0.8,8.3-0.7C8.5-0.5,8.7-0.1,8.9,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C9-3.5,8.8-3.4,8.7-3.4\r
					C8.5-3.3,8.6-3.2,8.4-3.1C8.3-3.1,8.2-3,8.2-2.9C8.2-2.8,8.2-2.9,8.2-2.8C8.1-2.7,8.1-2.8,8.2-2.8`}),c("path",{fill:"#FFFFFF",d:`M0.5-2.8c0,0.1,0,0.1,0,0.2C0.4-2.5,0.4-2.5,0.3-2.5C0.3-2.4,0.2-2.2,0.2-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C0.3-1,0.5-0.8,0.7-0.7C0.9-0.5,1-0.1,1.3,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C3.3-0.8,3.4-1,3.5-1.2c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C1.3-3.5,1.2-3.4,1-3.4\r
					C0.9-3.3,0.9-3.2,0.7-3.1C0.6-3.1,0.5-3,0.5-2.9C0.5-2.8,0.5-2.9,0.5-2.8C0.5-2.7,0.5-2.8,0.5-2.8`})])])])]),c("path",{class:"group-hover:fill-sp-color-light transition-all duration-700",id:"XMLID_1_",fill:"#1f1f39",d:`M21.5,2.3c-0.2-0.8-0.7-1.5-1.4-1.9c-1.5-0.9-3.4-0.4-4.3,1.1L11.4,9c0,0,0,0,0,0.1\r
	c0,0,0,0,0,0.1L0.4,27.3C0,28-0.1,28.8,0.1,29.6c0.1,0.4,0.2,0.7,0.4,1L0.3,31c-0.2,0.3-0.2,0.7-0.1,1c0.1,0.3,0.3,0.6,0.6,0.8\r
	c0.2,0.1,0.4,0.2,0.7,0.2c0.1,0,0.2,0,0.3,0c0.3-0.1,0.6-0.3,0.8-0.6l0.2-0.4c0.1,0,0.2,0,0.3,0c0.3,0,0.5,0,0.8-0.1\r
	c0.8-0.2,1.5-0.7,1.9-1.4l10.9-18.2c0,0,0,0,0-0.1c0,0,0,0,0,0l0.2-0.4c0,0,0,0,0.1,0.1c0.2,0.1,0.3,0.2,0.5,0.2c0.1,0,0.1,0,0.2,0\r
	c0.3,0,0.5-0.2,0.6-0.4l0,0l3.5-5.7c0.3-0.5,0.2-1.1-0.2-1.4c-0.1,0-0.1-0.1-0.2-0.1C21.6,3.7,21.7,3,21.5,2.3z M2,32L2,32\r
	c-0.1,0.1-0.2,0.3-0.4,0.3c-0.2,0-0.3,0-0.5-0.1S0.8,32,0.8,31.8c0-0.2,0-0.3,0.1-0.5L1,31.1c0.2,0.1,0.3,0.3,0.5,0.4\r
	c0.2,0.1,0.4,0.2,0.6,0.3L2,32z M4.6,29.8L4.6,29.8c-0.2,0.4-0.6,0.7-1.1,0.8s-0.9,0-1.4-0.2c-0.4-0.2-0.7-0.6-0.8-1.1\r
	s0-0.9,0.2-1.4l9.7-16.1c0.3,0.6,0.7,1.1,1.2,1.4c0.5,0.3,1,0.4,1.6,0.4c0.1,0,0.2,0,0.3,0L4.6,29.8z M15.6,11.5\r
	c-0.2,0.4-0.6,0.7-1.1,0.8c-0.5,0.1-0.9,0-1.4-0.2s-0.7-0.6-0.8-1.1c-0.1-0.5,0-0.9,0.2-1.4L17,2.2c0.3-0.6,0.9-0.9,1.5-0.9\r
	c0.3,0,0.6,0.1,0.9,0.3c0.4,0.2,0.7,0.6,0.8,1.1c0.1,0.5,0,0.9-0.2,1.4L15.6,11.5z M21.2,5.5l-3.5,5.7c0,0.1-0.1,0.1-0.2,0.1\r
	c0,0-0.1,0-0.2,0c0,0-0.1-0.1-0.1-0.1L21,5c0,0,0.1,0,0.1,0C21.3,5.1,21.3,5.4,21.2,5.5z`})],-1),l5={class:"infobox-text text-main-color-light middle-mobile:w-full"},n5=q(" \u6587\u7AE0\u7BA1\u7406"),a5={class:"mt-2"},i5={class:"hover:text-sp-color-light transition-all duration-700"},s5=q("\u6587\u7AE0\u5206\u985E"),o5={class:"hover:text-sp-color-light transition-all duration-700"},F5=q("\u6587\u7AE0\u5217\u8868"),u5={class:"infobox flex flex-wrap items-center mb-10 middle-mobile:justify-center"},d5=c("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:a":"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",x:"0px",y:"0px",width:"85px",height:"85px",viewBox:"-0.3 -0.7 39 33","enable-background":"new -0.3 -0.7 39 33","xml:space":"preserve"},[c("defs",null,[c("pattern",{x:"-81.3",y:"115.3",width:"69",height:"69",patternUnits:"userSpaceOnUse",id:"\u5713\u9EDE\u5716\u6A23",viewBox:"2.1 -70.9 69 69",overflow:"visible"},[c("g",null,[c("polygon",{fill:"none",points:"71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9"}),c("polygon",{fill:"#F6BB60",points:"71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9"}),c("g",null,[c("path",{fill:"#FFFFFF",d:`M61.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-71.7,61.8-71.7,61.8-71.7\r
					C61.8-71.6,61.8-71.6,61.8-71.7`}),c("path",{fill:"#FFFFFF",d:`M54.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-71.7,54.1-71.7,54.1-71.7\r
					C54.1-71.6,54.1-71.6,54.1-71.7`}),c("path",{fill:"#FFFFFF",d:`M46.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.4-71.7,46.4-71.7,46.4-71.7\r
					C46.4-71.6,46.4-71.6,46.4-71.7`}),c("path",{fill:"#FFFFFF",d:`M38.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-71.7,38.8-71.7,38.8-71.7\r
					C38.8-71.6,38.8-71.6,38.8-71.7`}),c("path",{fill:"#FFFFFF",d:`M31.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-71.7,31.1-71.7,31.1-71.7\r
					C31.1-71.6,31.1-71.6,31.1-71.7`}),c("path",{fill:"#FFFFFF",d:`M23.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.4-71.7,23.4-71.7,23.4-71.7\r
					C23.4-71.6,23.4-71.6,23.4-71.7`}),c("path",{fill:"#FFFFFF",d:`M15.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-71.7,15.8-71.7,15.8-71.7\r
					C15.8-71.6,15.8-71.6,15.8-71.7`}),c("path",{fill:"#FFFFFF",d:`M8.1-71.7c0,0.1,0,0.1,0,0.2C8-71.4,8-71.4,7.9-71.3c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.1-71.7,8.1-71.7,8.1-71.7\r
					C8.1-71.6,8.1-71.6,8.1-71.7`}),c("path",{fill:"#FFFFFF",d:`M0.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.8-69.4,1-69,1.2-68.9c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.4-71.7,0.4-71.7,0.4-71.7\r
					C0.4-71.6,0.4-71.6,0.4-71.7`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-71.7,69.4-71.7,69.4-71.7\r
					C69.4-71.6,69.4-71.6,69.4-71.7`})]),c("path",{fill:"#FFFFFF",d:`M0.5-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-69.4,1-69,1.3-68.9c0.2,0,0.4-0.1,0.5-0.1\r
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-71.7,0.5-71.7,0.5-71.7\r
				C0.5-71.6,0.5-71.6,0.5-71.7`}),c("g",null,[c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-64,69.4-64.1,69.4-64C69.4-64,69.4-64,69.4-64`}),c("path",{fill:"#FFFFFF",d:`M61.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-64,61.8-64.1,61.8-64C61.8-64,61.8-64,61.8-64`}),c("path",{fill:"#FFFFFF",d:`M54.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-64,54.1-64.1,54.1-64C54.1-64,54.1-64,54.1-64`}),c("path",{fill:"#FFFFFF",d:`M46.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-64,46.5-64.1,46.5-64C46.5-64,46.5-64,46.5-64`}),c("path",{fill:"#FFFFFF",d:`M38.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-64,38.8-64.1,38.8-64C38.8-64,38.8-64,38.8-64`}),c("path",{fill:"#FFFFFF",d:`M31.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-64,31.1-64.1,31.1-64C31.1-64,31.1-64,31.1-64`}),c("path",{fill:"#FFFFFF",d:`M23.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-64,23.5-64.1,23.5-64C23.5-64,23.5-64,23.5-64`}),c("path",{fill:"#FFFFFF",d:`M15.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-64,15.8-64.1,15.8-64C15.8-64,15.8-64,15.8-64`}),c("path",{fill:"#FFFFFF",d:`M8.2-64c0,0.1,0,0.1,0,0.2C8.1-63.7,8-63.7,8-63.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-62.2,8.2-62,8.3-61.9c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-64,8.2-64.1,8.2-64C8.1-64,8.1-64,8.2-64`}),c("path",{fill:"#FFFFFF",d:`M0.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-62,3-61.9,3.1-62c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-64,0.5-64.1,0.5-64C0.5-64,0.5-64,0.5-64`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-56.4,69.4-56.4,69.4-56.3\r
						C69.4-56.3,69.4-56.3,69.4-56.3`}),c("path",{fill:"#FFFFFF",d:`M61.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-56.4,61.8-56.4,61.8-56.3\r
						C61.8-56.3,61.8-56.3,61.8-56.3`}),c("path",{fill:"#FFFFFF",d:`M54.1-56.3c0,0.1,0,0.1,0,0.2C54-56.1,54-56.1,53.9-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-56.4,54.1-56.4,54.1-56.3\r
						C54.1-56.3,54.1-56.3,54.1-56.3`}),c("path",{fill:"#FFFFFF",d:`M46.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-56.4,46.5-56.4,46.5-56.3\r
						C46.5-56.3,46.5-56.3,46.5-56.3`}),c("path",{fill:"#FFFFFF",d:`M38.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-56.4,38.8-56.4,38.8-56.3\r
						C38.8-56.3,38.8-56.3,38.8-56.3`}),c("path",{fill:"#FFFFFF",d:`M31.1-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-56.4,31.1-56.4,31.1-56.3\r
						C31.1-56.3,31.1-56.3,31.1-56.3`}),c("path",{fill:"#FFFFFF",d:`M23.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-56.4,23.5-56.4,23.5-56.3\r
						C23.5-56.3,23.5-56.3,23.5-56.3`}),c("path",{fill:"#FFFFFF",d:`M15.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-56.4,15.8-56.4,15.8-56.3\r
						C15.8-56.3,15.8-56.3,15.8-56.3`}),c("path",{fill:"#FFFFFF",d:`M8.2-56.3c0,0.1,0,0.1,0,0.2C8.1-56.1,8-56.1,8-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-56.4,8.2-56.4,8.2-56.3\r
						C8.1-56.3,8.1-56.3,8.2-56.3`}),c("path",{fill:"#FFFFFF",d:`M0.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-56.4,0.5-56.4,0.5-56.3\r
						C0.5-56.3,0.5-56.3,0.5-56.3`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-48.7,69.4-48.8,69.4-48.7\r
						C69.4-48.7,69.4-48.7,69.4-48.7`}),c("path",{fill:"#FFFFFF",d:`M61.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-48.7,61.8-48.8,61.8-48.7\r
						C61.8-48.7,61.8-48.7,61.8-48.7`}),c("path",{fill:"#FFFFFF",d:`M54.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-48.7,54.1-48.8,54.1-48.7\r
						C54.1-48.7,54.1-48.7,54.1-48.7`}),c("path",{fill:"#FFFFFF",d:`M46.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-48.7,46.5-48.8,46.5-48.7\r
						C46.5-48.7,46.5-48.7,46.5-48.7`}),c("path",{fill:"#FFFFFF",d:`M38.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-48.7,38.8-48.8,38.8-48.7\r
						C38.8-48.7,38.8-48.7,38.8-48.7`}),c("path",{fill:"#FFFFFF",d:`M31.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-48.7,31.1-48.8,31.1-48.7\r
						C31.1-48.7,31.1-48.7,31.1-48.7`}),c("path",{fill:"#FFFFFF",d:`M23.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-48.7,23.5-48.8,23.5-48.7\r
						C23.5-48.7,23.5-48.7,23.5-48.7`}),c("path",{fill:"#FFFFFF",d:`M15.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-48.7,15.8-48.8,15.8-48.7\r
						C15.8-48.7,15.8-48.7,15.8-48.7`}),c("path",{fill:"#FFFFFF",d:`M8.2-48.7c0,0.1,0,0.1,0,0.2C8.1-48.4,8-48.4,8-48.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C8.5-46.4,8.7-46,8.9-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-48.7,8.2-48.8,8.2-48.7\r
						C8.1-48.7,8.1-48.7,8.2-48.7`}),c("path",{fill:"#FFFFFF",d:`M0.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-46.4,1-46,1.3-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-48.7,0.5-48.8,0.5-48.7\r
						C0.5-48.7,0.5-48.7,0.5-48.7`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-41.1,69.4-41.1,69.4-41\r
						C69.4-41,69.4-41,69.4-41`}),c("path",{fill:"#FFFFFF",d:`M61.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-41.1,61.8-41.1,61.8-41\r
						C61.8-41,61.8-41,61.8-41`}),c("path",{fill:"#FFFFFF",d:`M54.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-41.1,54.1-41.1,54.1-41\r
						C54.1-41,54.1-41,54.1-41`}),c("path",{fill:"#FFFFFF",d:`M46.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-41.1,46.5-41.1,46.5-41\r
						C46.5-41,46.5-41,46.5-41`}),c("path",{fill:"#FFFFFF",d:`M38.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-41.1,38.8-41.1,38.8-41\r
						C38.8-41,38.8-41,38.8-41`}),c("path",{fill:"#FFFFFF",d:`M31.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-41.1,31.1-41.1,31.1-41\r
						C31.1-41,31.1-41,31.1-41`}),c("path",{fill:"#FFFFFF",d:`M23.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-41.1,23.5-41.1,23.5-41\r
						C23.5-41,23.5-41,23.5-41`}),c("path",{fill:"#FFFFFF",d:`M15.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-41.1,15.8-41.1,15.8-41\r
						C15.8-41,15.8-41,15.8-41`}),c("path",{fill:"#FFFFFF",d:`M8.2-41c0,0.1,0,0.1,0,0.2C8.1-40.8,8-40.8,8-40.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-41.1,8.2-41.1,8.2-41C8.1-41,8.1-41,8.2-41`}),c("path",{fill:"#FFFFFF",d:`M0.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-39,3-39,3.1-39c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-41.1,0.5-41.1,0.5-41C0.5-41,0.5-41,0.5-41`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-33.4,69.4-33.5,69.4-33.4\r
						C69.4-33.4,69.4-33.4,69.4-33.4`}),c("path",{fill:"#FFFFFF",d:`M61.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-33.4,61.8-33.5,61.8-33.4\r
						C61.8-33.4,61.8-33.4,61.8-33.4`}),c("path",{fill:"#FFFFFF",d:`M54.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-33.4,54.1-33.5,54.1-33.4\r
						C54.1-33.4,54.1-33.4,54.1-33.4`}),c("path",{fill:"#FFFFFF",d:`M46.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-33.4,46.5-33.5,46.5-33.4\r
						C46.5-33.4,46.5-33.4,46.5-33.4`}),c("path",{fill:"#FFFFFF",d:`M38.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-33.4,38.8-33.5,38.8-33.4\r
						C38.8-33.4,38.8-33.4,38.8-33.4`}),c("path",{fill:"#FFFFFF",d:`M31.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-33.4,31.1-33.5,31.1-33.4\r
						C31.1-33.4,31.1-33.4,31.1-33.4`}),c("path",{fill:"#FFFFFF",d:`M23.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-33.4,23.5-33.5,23.5-33.4\r
						C23.5-33.4,23.5-33.4,23.5-33.4`}),c("path",{fill:"#FFFFFF",d:`M15.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-33.4,15.8-33.5,15.8-33.4\r
						C15.8-33.4,15.8-33.4,15.8-33.4`}),c("path",{fill:"#FFFFFF",d:`M8.2-33.4c0,0.1,0,0.1,0,0.2C8.1-33.1,8-33.1,8-33.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-33.4,8.2-33.5,8.2-33.4\r
						C8.1-33.4,8.1-33.4,8.2-33.4`}),c("path",{fill:"#FFFFFF",d:`M0.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-33.4,0.5-33.5,0.5-33.4\r
						C0.5-33.4,0.5-33.4,0.5-33.4`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-25.8,69.4-25.8,69.4-25.7\r
						C69.4-25.7,69.4-25.7,69.4-25.7`}),c("path",{fill:"#FFFFFF",d:`M61.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-25.8,61.8-25.8,61.8-25.7\r
						C61.8-25.7,61.8-25.7,61.8-25.7`}),c("path",{fill:"#FFFFFF",d:`M54.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-25.8,54.1-25.8,54.1-25.7\r
						C54.1-25.7,54.1-25.7,54.1-25.7`}),c("path",{fill:"#FFFFFF",d:`M46.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-25.8,46.5-25.8,46.5-25.7\r
						C46.5-25.7,46.5-25.7,46.5-25.7`}),c("path",{fill:"#FFFFFF",d:`M38.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-25.8,38.8-25.8,38.8-25.7\r
						C38.8-25.7,38.8-25.7,38.8-25.7`}),c("path",{fill:"#FFFFFF",d:`M31.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-25.8,31.1-25.8,31.1-25.7\r
						C31.1-25.7,31.1-25.7,31.1-25.7`}),c("path",{fill:"#FFFFFF",d:`M23.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-25.8,23.5-25.8,23.5-25.7\r
						C23.5-25.7,23.5-25.7,23.5-25.7`}),c("path",{fill:"#FFFFFF",d:`M15.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-25.8,15.8-25.8,15.8-25.7\r
						C15.8-25.7,15.8-25.7,15.8-25.7`}),c("path",{fill:"#FFFFFF",d:`M8.2-25.7c0,0.1,0,0.1,0,0.2C8.1-25.4,8-25.5,8-25.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-24,8.2-23.8,8.3-23.6c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-25.8,8.2-25.8,8.2-25.7\r
						C8.1-25.7,8.1-25.7,8.2-25.7`}),c("path",{fill:"#FFFFFF",d:`M0.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-23.5,1-23.1,1.3-23c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-25.8,0.5-25.8,0.5-25.7\r
						C0.5-25.7,0.5-25.7,0.5-25.7`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-18.1,69.4-18.2,69.4-18.1\r
						C69.4-18,69.4-18.1,69.4-18.1`}),c("path",{fill:"#FFFFFF",d:`M61.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-18.1,61.8-18.2,61.8-18.1\r
						C61.8-18,61.8-18.1,61.8-18.1`}),c("path",{fill:"#FFFFFF",d:`M54.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-18.1,54.1-18.2,54.1-18.1\r
						C54.1-18,54.1-18.1,54.1-18.1`}),c("path",{fill:"#FFFFFF",d:`M46.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-18.1,46.5-18.2,46.5-18.1\r
						C46.5-18,46.5-18.1,46.5-18.1`}),c("path",{fill:"#FFFFFF",d:`M38.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-18.1,38.8-18.2,38.8-18.1\r
						C38.8-18,38.8-18.1,38.8-18.1`}),c("path",{fill:"#FFFFFF",d:`M31.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-18.1,31.1-18.2,31.1-18.1\r
						C31.1-18,31.1-18.1,31.1-18.1`}),c("path",{fill:"#FFFFFF",d:`M23.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-18.1,23.5-18.2,23.5-18.1\r
						C23.5-18,23.5-18.1,23.5-18.1`}),c("path",{fill:"#FFFFFF",d:`M15.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-18.1,15.8-18.2,15.8-18.1\r
						C15.8-18,15.8-18.1,15.8-18.1`}),c("path",{fill:"#FFFFFF",d:`M8.2-18.1c0,0.1,0,0.1,0,0.2C8.1-17.8,8-17.8,8-17.8c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-16.3,8.2-16.1,8.3-16c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-18.1,8.2-18.2,8.2-18.1\r
						C8.1-18,8.1-18.1,8.2-18.1`}),c("path",{fill:"#FFFFFF",d:`M0.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-16.1,3-16,3.1-16c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-18.1,0.5-18.2,0.5-18.1\r
						C0.5-18,0.5-18.1,0.5-18.1`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-10.5,69.4-10.5,69.4-10.4\r
						C69.4-10.4,69.4-10.4,69.4-10.4`}),c("path",{fill:"#FFFFFF",d:`M61.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C63.9-8,63.8-8.2,64-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-10.5,61.8-10.5,61.8-10.4\r
						C61.8-10.4,61.8-10.4,61.8-10.4`}),c("path",{fill:"#FFFFFF",d:`M54.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-10.5,54.1-10.5,54.1-10.4\r
						C54.1-10.4,54.1-10.4,54.1-10.4`}),c("path",{fill:"#FFFFFF",d:`M46.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-10.5,46.5-10.5,46.5-10.4\r
						C46.5-10.4,46.5-10.4,46.5-10.4`}),c("path",{fill:"#FFFFFF",d:`M38.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C40.9-8,40.8-8.2,41-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-10.5,38.8-10.5,38.8-10.4\r
						C38.8-10.4,38.8-10.4,38.8-10.4`}),c("path",{fill:"#FFFFFF",d:`M31.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-10.5,31.1-10.5,31.1-10.4\r
						C31.1-10.4,31.1-10.4,31.1-10.4`}),c("path",{fill:"#FFFFFF",d:`M23.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-10.5,23.5-10.5,23.5-10.4\r
						C23.5-10.4,23.5-10.4,23.5-10.4`}),c("path",{fill:"#FFFFFF",d:`M15.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C17.9-8,17.8-8.2,18-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-10.5,15.8-10.5,15.8-10.4\r
						C15.8-10.4,15.8-10.4,15.8-10.4`}),c("path",{fill:"#FFFFFF",d:`M8.2-10.4c0,0.1,0,0.1,0,0.2C8.1-10.1,8-10.2,8-10.1C7.9-10,7.9-9.8,7.9-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-8.7,8.2-8.5,8.3-8.3c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-10.5,8.2-10.5,8.2-10.4\r
						C8.1-10.4,8.1-10.4,8.2-10.4`}),c("path",{fill:"#FFFFFF",d:`M0.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1C0.3-10,0.2-9.8,0.2-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-8.2,1-7.8,1.3-7.7c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C2.6-8,2.5-8.2,2.7-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-10.5,0.5-10.5,0.5-10.4\r
						C0.5-10.4,0.5-10.4,0.5-10.4`})])]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C69.8-0.5,70-0.1,70.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-2.8,69.4-2.9,69.4-2.8\r
					C69.4-2.7,69.4-2.8,69.4-2.8`}),c("path",{fill:"#FFFFFF",d:`M61.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C61.6-1,61.8-0.8,62-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-2.8,61.8-2.9,61.8-2.8\r
					C61.8-2.7,61.8-2.8,61.8-2.8`}),c("path",{fill:"#FFFFFF",d:`M54.1-2.8c0,0.1,0,0.1,0,0.2C54-2.5,54-2.5,53.9-2.5c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C54-1,54.1-0.8,54.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C56.9-0.8,57-1,57.1-1.2c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-2.8,54.1-2.9,54.1-2.8\r
					C54.1-2.7,54.1-2.8,54.1-2.8`}),c("path",{fill:"#FFFFFF",d:`M46.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C46.8-0.5,47-0.1,47.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-2.8,46.5-2.9,46.5-2.8\r
					C46.5-2.7,46.5-2.8,46.5-2.8`}),c("path",{fill:"#FFFFFF",d:`M38.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C38.6-1,38.8-0.8,39-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-2.8,38.8-2.9,38.8-2.8\r
					C38.8-2.7,38.8-2.8,38.8-2.8`}),c("path",{fill:"#FFFFFF",d:`M31.1-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C31-1,31.1-0.8,31.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-2.8,31.1-2.9,31.1-2.8\r
					C31.1-2.7,31.1-2.8,31.1-2.8`}),c("path",{fill:"#FFFFFF",d:`M23.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C23.8-0.5,24-0.1,24.3,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-2.8,23.5-2.9,23.5-2.8\r
					C23.5-2.7,23.5-2.8,23.5-2.8`}),c("path",{fill:"#FFFFFF",d:`M15.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C15.7-1,15.8-0.8,16-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-2.8,15.8-2.9,15.8-2.8\r
					C15.8-2.7,15.8-2.8,15.8-2.8`}),c("path",{fill:"#FFFFFF",d:`M8.2-2.8c0,0.1,0,0.1,0,0.2C8.1-2.5,8-2.5,8-2.5C7.9-2.4,7.9-2.2,7.9-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-1,8.2-0.8,8.3-0.7C8.5-0.5,8.7-0.1,8.9,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C9-3.5,8.8-3.4,8.7-3.4\r
					C8.5-3.3,8.6-3.2,8.4-3.1C8.3-3.1,8.2-3,8.2-2.9C8.2-2.8,8.2-2.9,8.2-2.8C8.1-2.7,8.1-2.8,8.2-2.8`}),c("path",{fill:"#FFFFFF",d:`M0.5-2.8c0,0.1,0,0.1,0,0.2C0.4-2.5,0.4-2.5,0.3-2.5C0.3-2.4,0.2-2.2,0.2-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C0.3-1,0.5-0.8,0.7-0.7C0.9-0.5,1-0.1,1.3,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C3.3-0.8,3.4-1,3.5-1.2c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C1.3-3.5,1.2-3.4,1-3.4\r
					C0.9-3.3,0.9-3.2,0.7-3.1C0.6-3.1,0.5-3,0.5-2.9C0.5-2.8,0.5-2.9,0.5-2.8C0.5-2.7,0.5-2.8,0.5-2.8`})])])])]),c("path",{class:"group-hover:fill-sp-color-light transition-all duration-700",id:"XMLID_10_",fill:"#1f1f39",d:`M17.5,0c-0.5,0-0.8,0.4-0.8,0.8V31c0,0.5,0.4,0.8,0.8,0.8h3.4c0.5,0,0.8-0.4,0.8-0.8V0.8\r
	c0-0.5-0.4-0.8-0.8-0.8H17.5z M20.1,30.2h-1.7V1.6h1.7V30.2z`}),c("path",{class:"group-hover:fill-sp-color-light transition-all duration-700",id:"XMLID_7_",fill:"#1f1f39",d:`M35.3,18.4l2.9-2.5c0.2-0.2,0.3-0.4,0.3-0.6s-0.1-0.5-0.3-0.6l-2.9-2.5\r
	C35.1,12,34.9,12,34.7,12H23.3c-0.5,0-0.8,0.4-0.8,0.8v5.1c0,0.5,0.4,0.8,0.8,0.8h11.4C34.9,18.6,35.1,18.6,35.3,18.4z M24.1,13.6\r
	h10.3l1.9,1.7L34.4,17H24.1V13.6z`}),c("path",{class:"group-hover:fill-sp-color-light transition-all duration-700",id:"XMLID_4_",fill:"#1f1f39",d:`M23.3,3.7c-0.5,0-0.8,0.4-0.8,0.8v5.1c0,0.5,0.4,0.8,0.8,0.8h11.4c0.2,0,0.4-0.1,0.5-0.2\r
	l2.9-2.5c0.2-0.2,0.3-0.4,0.3-0.6s-0.1-0.5-0.3-0.6l-2.9-2.5c-0.1-0.1-0.3-0.2-0.5-0.2H23.3z M24.1,8.8V5.3h10.3L36.4,7l-1.9,1.7\r
	H24.1z`}),c("path",{class:"group-hover:fill-sp-color-light transition-all duration-700",id:"XMLID_1_",fill:"#1f1f39",d:`M3.1,10.2c0.1,0.1,0.3,0.2,0.5,0.2h11.4c0.5,0,0.8-0.4,0.8-0.8V4.5c0-0.5-0.4-0.8-0.8-0.8H3.7\r
	c-0.2,0-0.4,0.1-0.5,0.2L0.3,6.4C0.1,6.6,0,6.8,0,7s0.1,0.5,0.3,0.6L3.1,10.2z M14.3,5.3v3.4H4L2,7L4,5.3H14.3z`})],-1),p5={class:"infobox-text text-main-color-light middle-mobile:w-full"},h5=q(" \u8A2D\u65BD\u7BA1\u7406"),f5={class:"mt-2"},C5={class:"hover:text-sp-color-light transition-all duration-700"},g5=q("\u5929\u6587\u6A5F\u69CB"),m5={class:"hover:text-sp-color-light transition-all duration-700"},_5=q("\u5929\u6587\u53F0"),b5={class:"infobox flex flex-wrap items-center mb-10 middle-mobile:justify-center"},x5=c("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:a":"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",x:"0px",y:"0px",width:"85px",height:"85px",viewBox:"-0.2 -0.1 42 30","enable-background":"new -0.2 -0.1 42 30","xml:space":"preserve"},[c("defs",null,[c("pattern",{x:"-80.2",y:"113.9",width:"69",height:"69",patternUnits:"userSpaceOnUse",id:"\u5713\u9EDE\u5716\u6A23",viewBox:"2.1 -70.9 69 69",overflow:"visible"},[c("g",null,[c("polygon",{fill:"none",points:"71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9 			"}),c("polygon",{fill:"#F6BB60",points:"71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9 			"}),c("g",null,[c("path",{fill:"#FFFFFF",d:`M61.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-71.7,61.8-71.7,61.8-71.7\r
					C61.8-71.6,61.8-71.6,61.8-71.7`}),c("path",{fill:"#FFFFFF",d:`M54.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-71.7,54.1-71.7,54.1-71.7\r
					C54.1-71.6,54.1-71.6,54.1-71.7`}),c("path",{fill:"#FFFFFF",d:`M46.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.4-71.7,46.4-71.7,46.4-71.7\r
					C46.4-71.6,46.4-71.6,46.4-71.7`}),c("path",{fill:"#FFFFFF",d:`M38.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-71.7,38.8-71.7,38.8-71.7\r
					C38.8-71.6,38.8-71.6,38.8-71.7`}),c("path",{fill:"#FFFFFF",d:`M31.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-71.7,31.1-71.7,31.1-71.7\r
					C31.1-71.6,31.1-71.6,31.1-71.7`}),c("path",{fill:"#FFFFFF",d:`M23.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.4-71.7,23.4-71.7,23.4-71.7\r
					C23.4-71.6,23.4-71.6,23.4-71.7`}),c("path",{fill:"#FFFFFF",d:`M15.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-71.7,15.8-71.7,15.8-71.7\r
					C15.8-71.6,15.8-71.6,15.8-71.7`}),c("path",{fill:"#FFFFFF",d:`M8.1-71.7c0,0.1,0,0.1,0,0.2C8-71.4,8-71.4,7.9-71.3c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.1-71.7,8.1-71.7,8.1-71.7\r
					C8.1-71.6,8.1-71.6,8.1-71.7`}),c("path",{fill:"#FFFFFF",d:`M0.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.8-69.4,1-69,1.2-68.9c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.4-71.7,0.4-71.7,0.4-71.7\r
					C0.4-71.6,0.4-71.6,0.4-71.7`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-71.7,69.4-71.7,69.4-71.7\r
					C69.4-71.6,69.4-71.6,69.4-71.7`})]),c("path",{fill:"#FFFFFF",d:`M0.5-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-69.4,1-69,1.3-68.9c0.2,0,0.4-0.1,0.5-0.1\r
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-71.7,0.5-71.7,0.5-71.7\r
				C0.5-71.6,0.5-71.6,0.5-71.7`}),c("g",null,[c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-64,69.4-64.1,69.4-64C69.4-64,69.4-64,69.4-64`}),c("path",{fill:"#FFFFFF",d:`M61.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-64,61.8-64.1,61.8-64C61.8-64,61.8-64,61.8-64`}),c("path",{fill:"#FFFFFF",d:`M54.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-64,54.1-64.1,54.1-64C54.1-64,54.1-64,54.1-64`}),c("path",{fill:"#FFFFFF",d:`M46.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-64,46.5-64.1,46.5-64C46.5-64,46.5-64,46.5-64`}),c("path",{fill:"#FFFFFF",d:`M38.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-64,38.8-64.1,38.8-64C38.8-64,38.8-64,38.8-64`}),c("path",{fill:"#FFFFFF",d:`M31.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-64,31.1-64.1,31.1-64C31.1-64,31.1-64,31.1-64`}),c("path",{fill:"#FFFFFF",d:`M23.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-64,23.5-64.1,23.5-64C23.5-64,23.5-64,23.5-64`}),c("path",{fill:"#FFFFFF",d:`M15.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-64,15.8-64.1,15.8-64C15.8-64,15.8-64,15.8-64`}),c("path",{fill:"#FFFFFF",d:`M8.2-64c0,0.1,0,0.1,0,0.2C8.1-63.7,8-63.7,8-63.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-62.2,8.2-62,8.3-61.9c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-64,8.2-64.1,8.2-64C8.1-64,8.1-64,8.2-64`}),c("path",{fill:"#FFFFFF",d:`M0.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-62,3-61.9,3.1-62c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-64,0.5-64.1,0.5-64C0.5-64,0.5-64,0.5-64`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-56.4,69.4-56.4,69.4-56.3\r
						C69.4-56.3,69.4-56.3,69.4-56.3`}),c("path",{fill:"#FFFFFF",d:`M61.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-56.4,61.8-56.4,61.8-56.3\r
						C61.8-56.3,61.8-56.3,61.8-56.3`}),c("path",{fill:"#FFFFFF",d:`M54.1-56.3c0,0.1,0,0.1,0,0.2C54-56.1,54-56.1,53.9-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-56.4,54.1-56.4,54.1-56.3\r
						C54.1-56.3,54.1-56.3,54.1-56.3`}),c("path",{fill:"#FFFFFF",d:`M46.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-56.4,46.5-56.4,46.5-56.3\r
						C46.5-56.3,46.5-56.3,46.5-56.3`}),c("path",{fill:"#FFFFFF",d:`M38.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-56.4,38.8-56.4,38.8-56.3\r
						C38.8-56.3,38.8-56.3,38.8-56.3`}),c("path",{fill:"#FFFFFF",d:`M31.1-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-56.4,31.1-56.4,31.1-56.3\r
						C31.1-56.3,31.1-56.3,31.1-56.3`}),c("path",{fill:"#FFFFFF",d:`M23.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-56.4,23.5-56.4,23.5-56.3\r
						C23.5-56.3,23.5-56.3,23.5-56.3`}),c("path",{fill:"#FFFFFF",d:`M15.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-56.4,15.8-56.4,15.8-56.3\r
						C15.8-56.3,15.8-56.3,15.8-56.3`}),c("path",{fill:"#FFFFFF",d:`M8.2-56.3c0,0.1,0,0.1,0,0.2C8.1-56.1,8-56.1,8-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-56.4,8.2-56.4,8.2-56.3\r
						C8.1-56.3,8.1-56.3,8.2-56.3`}),c("path",{fill:"#FFFFFF",d:`M0.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-56.4,0.5-56.4,0.5-56.3\r
						C0.5-56.3,0.5-56.3,0.5-56.3`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-48.7,69.4-48.8,69.4-48.7\r
						C69.4-48.7,69.4-48.7,69.4-48.7`}),c("path",{fill:"#FFFFFF",d:`M61.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-48.7,61.8-48.8,61.8-48.7\r
						C61.8-48.7,61.8-48.7,61.8-48.7`}),c("path",{fill:"#FFFFFF",d:`M54.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-48.7,54.1-48.8,54.1-48.7\r
						C54.1-48.7,54.1-48.7,54.1-48.7`}),c("path",{fill:"#FFFFFF",d:`M46.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-48.7,46.5-48.8,46.5-48.7\r
						C46.5-48.7,46.5-48.7,46.5-48.7`}),c("path",{fill:"#FFFFFF",d:`M38.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-48.7,38.8-48.8,38.8-48.7\r
						C38.8-48.7,38.8-48.7,38.8-48.7`}),c("path",{fill:"#FFFFFF",d:`M31.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-48.7,31.1-48.8,31.1-48.7\r
						C31.1-48.7,31.1-48.7,31.1-48.7`}),c("path",{fill:"#FFFFFF",d:`M23.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-48.7,23.5-48.8,23.5-48.7\r
						C23.5-48.7,23.5-48.7,23.5-48.7`}),c("path",{fill:"#FFFFFF",d:`M15.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-48.7,15.8-48.8,15.8-48.7\r
						C15.8-48.7,15.8-48.7,15.8-48.7`}),c("path",{fill:"#FFFFFF",d:`M8.2-48.7c0,0.1,0,0.1,0,0.2C8.1-48.4,8-48.4,8-48.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C8.5-46.4,8.7-46,8.9-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-48.7,8.2-48.8,8.2-48.7\r
						C8.1-48.7,8.1-48.7,8.2-48.7`}),c("path",{fill:"#FFFFFF",d:`M0.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-46.4,1-46,1.3-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-48.7,0.5-48.8,0.5-48.7\r
						C0.5-48.7,0.5-48.7,0.5-48.7`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-41.1,69.4-41.1,69.4-41\r
						C69.4-41,69.4-41,69.4-41`}),c("path",{fill:"#FFFFFF",d:`M61.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-41.1,61.8-41.1,61.8-41\r
						C61.8-41,61.8-41,61.8-41`}),c("path",{fill:"#FFFFFF",d:`M54.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-41.1,54.1-41.1,54.1-41\r
						C54.1-41,54.1-41,54.1-41`}),c("path",{fill:"#FFFFFF",d:`M46.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-41.1,46.5-41.1,46.5-41\r
						C46.5-41,46.5-41,46.5-41`}),c("path",{fill:"#FFFFFF",d:`M38.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-41.1,38.8-41.1,38.8-41\r
						C38.8-41,38.8-41,38.8-41`}),c("path",{fill:"#FFFFFF",d:`M31.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-41.1,31.1-41.1,31.1-41\r
						C31.1-41,31.1-41,31.1-41`}),c("path",{fill:"#FFFFFF",d:`M23.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-41.1,23.5-41.1,23.5-41\r
						C23.5-41,23.5-41,23.5-41`}),c("path",{fill:"#FFFFFF",d:`M15.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-41.1,15.8-41.1,15.8-41\r
						C15.8-41,15.8-41,15.8-41`}),c("path",{fill:"#FFFFFF",d:`M8.2-41c0,0.1,0,0.1,0,0.2C8.1-40.8,8-40.8,8-40.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-41.1,8.2-41.1,8.2-41C8.1-41,8.1-41,8.2-41`}),c("path",{fill:"#FFFFFF",d:`M0.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-39,3-39,3.1-39c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-41.1,0.5-41.1,0.5-41C0.5-41,0.5-41,0.5-41`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-33.4,69.4-33.5,69.4-33.4\r
						C69.4-33.4,69.4-33.4,69.4-33.4`}),c("path",{fill:"#FFFFFF",d:`M61.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-33.4,61.8-33.5,61.8-33.4\r
						C61.8-33.4,61.8-33.4,61.8-33.4`}),c("path",{fill:"#FFFFFF",d:`M54.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-33.4,54.1-33.5,54.1-33.4\r
						C54.1-33.4,54.1-33.4,54.1-33.4`}),c("path",{fill:"#FFFFFF",d:`M46.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-33.4,46.5-33.5,46.5-33.4\r
						C46.5-33.4,46.5-33.4,46.5-33.4`}),c("path",{fill:"#FFFFFF",d:`M38.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-33.4,38.8-33.5,38.8-33.4\r
						C38.8-33.4,38.8-33.4,38.8-33.4`}),c("path",{fill:"#FFFFFF",d:`M31.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-33.4,31.1-33.5,31.1-33.4\r
						C31.1-33.4,31.1-33.4,31.1-33.4`}),c("path",{fill:"#FFFFFF",d:`M23.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-33.4,23.5-33.5,23.5-33.4\r
						C23.5-33.4,23.5-33.4,23.5-33.4`}),c("path",{fill:"#FFFFFF",d:`M15.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-33.4,15.8-33.5,15.8-33.4\r
						C15.8-33.4,15.8-33.4,15.8-33.4`}),c("path",{fill:"#FFFFFF",d:`M8.2-33.4c0,0.1,0,0.1,0,0.2C8.1-33.1,8-33.1,8-33.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-33.4,8.2-33.5,8.2-33.4\r
						C8.1-33.4,8.1-33.4,8.2-33.4`}),c("path",{fill:"#FFFFFF",d:`M0.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-33.4,0.5-33.5,0.5-33.4\r
						C0.5-33.4,0.5-33.4,0.5-33.4`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-25.8,69.4-25.8,69.4-25.7\r
						C69.4-25.7,69.4-25.7,69.4-25.7`}),c("path",{fill:"#FFFFFF",d:`M61.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-25.8,61.8-25.8,61.8-25.7\r
						C61.8-25.7,61.8-25.7,61.8-25.7`}),c("path",{fill:"#FFFFFF",d:`M54.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-25.8,54.1-25.8,54.1-25.7\r
						C54.1-25.7,54.1-25.7,54.1-25.7`}),c("path",{fill:"#FFFFFF",d:`M46.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-25.8,46.5-25.8,46.5-25.7\r
						C46.5-25.7,46.5-25.7,46.5-25.7`}),c("path",{fill:"#FFFFFF",d:`M38.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-25.8,38.8-25.8,38.8-25.7\r
						C38.8-25.7,38.8-25.7,38.8-25.7`}),c("path",{fill:"#FFFFFF",d:`M31.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-25.8,31.1-25.8,31.1-25.7\r
						C31.1-25.7,31.1-25.7,31.1-25.7`}),c("path",{fill:"#FFFFFF",d:`M23.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-25.8,23.5-25.8,23.5-25.7\r
						C23.5-25.7,23.5-25.7,23.5-25.7`}),c("path",{fill:"#FFFFFF",d:`M15.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-25.8,15.8-25.8,15.8-25.7\r
						C15.8-25.7,15.8-25.7,15.8-25.7`}),c("path",{fill:"#FFFFFF",d:`M8.2-25.7c0,0.1,0,0.1,0,0.2C8.1-25.4,8-25.5,8-25.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-24,8.2-23.8,8.3-23.6c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-25.8,8.2-25.8,8.2-25.7\r
						C8.1-25.7,8.1-25.7,8.2-25.7`}),c("path",{fill:"#FFFFFF",d:`M0.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-23.5,1-23.1,1.3-23c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-25.8,0.5-25.8,0.5-25.7\r
						C0.5-25.7,0.5-25.7,0.5-25.7`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-18.1,69.4-18.2,69.4-18.1\r
						C69.4-18,69.4-18.1,69.4-18.1`}),c("path",{fill:"#FFFFFF",d:`M61.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-18.1,61.8-18.2,61.8-18.1\r
						C61.8-18,61.8-18.1,61.8-18.1`}),c("path",{fill:"#FFFFFF",d:`M54.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-18.1,54.1-18.2,54.1-18.1\r
						C54.1-18,54.1-18.1,54.1-18.1`}),c("path",{fill:"#FFFFFF",d:`M46.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-18.1,46.5-18.2,46.5-18.1\r
						C46.5-18,46.5-18.1,46.5-18.1`}),c("path",{fill:"#FFFFFF",d:`M38.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-18.1,38.8-18.2,38.8-18.1\r
						C38.8-18,38.8-18.1,38.8-18.1`}),c("path",{fill:"#FFFFFF",d:`M31.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-18.1,31.1-18.2,31.1-18.1\r
						C31.1-18,31.1-18.1,31.1-18.1`}),c("path",{fill:"#FFFFFF",d:`M23.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-18.1,23.5-18.2,23.5-18.1\r
						C23.5-18,23.5-18.1,23.5-18.1`}),c("path",{fill:"#FFFFFF",d:`M15.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-18.1,15.8-18.2,15.8-18.1\r
						C15.8-18,15.8-18.1,15.8-18.1`}),c("path",{fill:"#FFFFFF",d:`M8.2-18.1c0,0.1,0,0.1,0,0.2C8.1-17.8,8-17.8,8-17.8c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-16.3,8.2-16.1,8.3-16c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-18.1,8.2-18.2,8.2-18.1\r
						C8.1-18,8.1-18.1,8.2-18.1`}),c("path",{fill:"#FFFFFF",d:`M0.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-16.1,3-16,3.1-16c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-18.1,0.5-18.2,0.5-18.1\r
						C0.5-18,0.5-18.1,0.5-18.1`})]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-10.5,69.4-10.5,69.4-10.4\r
						C69.4-10.4,69.4-10.4,69.4-10.4`}),c("path",{fill:"#FFFFFF",d:`M61.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C63.9-8,63.8-8.2,64-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-10.5,61.8-10.5,61.8-10.4\r
						C61.8-10.4,61.8-10.4,61.8-10.4`}),c("path",{fill:"#FFFFFF",d:`M54.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-10.5,54.1-10.5,54.1-10.4\r
						C54.1-10.4,54.1-10.4,54.1-10.4`}),c("path",{fill:"#FFFFFF",d:`M46.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-10.5,46.5-10.5,46.5-10.4\r
						C46.5-10.4,46.5-10.4,46.5-10.4`}),c("path",{fill:"#FFFFFF",d:`M38.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C40.9-8,40.8-8.2,41-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-10.5,38.8-10.5,38.8-10.4\r
						C38.8-10.4,38.8-10.4,38.8-10.4`}),c("path",{fill:"#FFFFFF",d:`M31.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-10.5,31.1-10.5,31.1-10.4\r
						C31.1-10.4,31.1-10.4,31.1-10.4`}),c("path",{fill:"#FFFFFF",d:`M23.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-10.5,23.5-10.5,23.5-10.4\r
						C23.5-10.4,23.5-10.4,23.5-10.4`}),c("path",{fill:"#FFFFFF",d:`M15.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C17.9-8,17.8-8.2,18-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-10.5,15.8-10.5,15.8-10.4\r
						C15.8-10.4,15.8-10.4,15.8-10.4`}),c("path",{fill:"#FFFFFF",d:`M8.2-10.4c0,0.1,0,0.1,0,0.2C8.1-10.1,8-10.2,8-10.1C7.9-10,7.9-9.8,7.9-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-8.7,8.2-8.5,8.3-8.3c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-10.5,8.2-10.5,8.2-10.4\r
						C8.1-10.4,8.1-10.4,8.2-10.4`}),c("path",{fill:"#FFFFFF",d:`M0.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1C0.3-10,0.2-9.8,0.2-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-8.2,1-7.8,1.3-7.7c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C2.6-8,2.5-8.2,2.7-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-10.5,0.5-10.5,0.5-10.4\r
						C0.5-10.4,0.5-10.4,0.5-10.4`})])]),c("g",null,[c("path",{fill:"#FFFFFF",d:`M69.4-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C69.8-0.5,70-0.1,70.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-2.8,69.4-2.9,69.4-2.8\r
					C69.4-2.7,69.4-2.8,69.4-2.8`}),c("path",{fill:"#FFFFFF",d:`M61.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C61.6-1,61.8-0.8,62-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-2.8,61.8-2.9,61.8-2.8\r
					C61.8-2.7,61.8-2.8,61.8-2.8`}),c("path",{fill:"#FFFFFF",d:`M54.1-2.8c0,0.1,0,0.1,0,0.2C54-2.5,54-2.5,53.9-2.5c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C54-1,54.1-0.8,54.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C56.9-0.8,57-1,57.1-1.2c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-2.8,54.1-2.9,54.1-2.8\r
					C54.1-2.7,54.1-2.8,54.1-2.8`}),c("path",{fill:"#FFFFFF",d:`M46.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C46.8-0.5,47-0.1,47.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-2.8,46.5-2.9,46.5-2.8\r
					C46.5-2.7,46.5-2.8,46.5-2.8`}),c("path",{fill:"#FFFFFF",d:`M38.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C38.6-1,38.8-0.8,39-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-2.8,38.8-2.9,38.8-2.8\r
					C38.8-2.7,38.8-2.8,38.8-2.8`}),c("path",{fill:"#FFFFFF",d:`M31.1-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C31-1,31.1-0.8,31.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-2.8,31.1-2.9,31.1-2.8\r
					C31.1-2.7,31.1-2.8,31.1-2.8`}),c("path",{fill:"#FFFFFF",d:`M23.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C23.8-0.5,24-0.1,24.3,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-2.8,23.5-2.9,23.5-2.8\r
					C23.5-2.7,23.5-2.8,23.5-2.8`}),c("path",{fill:"#FFFFFF",d:`M15.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C15.7-1,15.8-0.8,16-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-2.8,15.8-2.9,15.8-2.8\r
					C15.8-2.7,15.8-2.8,15.8-2.8`}),c("path",{fill:"#FFFFFF",d:`M8.2-2.8c0,0.1,0,0.1,0,0.2C8.1-2.5,8-2.5,8-2.5C7.9-2.4,7.9-2.2,7.9-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-1,8.2-0.8,8.3-0.7C8.5-0.5,8.7-0.1,8.9,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C9-3.5,8.8-3.4,8.7-3.4\r
					C8.5-3.3,8.6-3.2,8.4-3.1C8.3-3.1,8.2-3,8.2-2.9C8.2-2.8,8.2-2.9,8.2-2.8C8.1-2.7,8.1-2.8,8.2-2.8`}),c("path",{fill:"#FFFFFF",d:`M0.5-2.8c0,0.1,0,0.1,0,0.2C0.4-2.5,0.4-2.5,0.3-2.5C0.3-2.4,0.2-2.2,0.2-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C0.3-1,0.5-0.8,0.7-0.7C0.9-0.5,1-0.1,1.3,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C3.3-0.8,3.4-1,3.5-1.2c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C1.3-3.5,1.2-3.4,1-3.4\r
					C0.9-3.3,0.9-3.2,0.7-3.1C0.6-3.1,0.5-3,0.5-2.9C0.5-2.8,0.5-2.9,0.5-2.8C0.5-2.7,0.5-2.8,0.5-2.8`})])])])]),c("path",{class:"group-hover:fill-sp-color-light transition-all duration-700",id:"XMLID_7_",fill:"#1f1f39",d:`M14,25.1c0.2,0.3,0.5,0.4,0.8,0.3l6.1-1.1l4.4,4.4c0.2,0.2,0.4,0.2,0.6,0.2c0.1,0,0.2,0,0.3,0\r
	c0.3-0.1,0.5-0.4,0.5-0.7l0.8-6.1l5.5-2.8c0.3-0.1,0.5-0.4,0.4-0.7c0-0.3-0.2-0.6-0.5-0.7l-5.6-2.7l-0.9-6.1c0-0.3-0.3-0.6-0.6-0.7\r
	c-0.3-0.1-0.6,0-0.8,0.2l-4.3,4.5l-6.1-1c-0.3,0-0.6,0.1-0.8,0.3c-0.2,0.3-0.2,0.6-0.1,0.9l2.9,5.5L14,24.3\r
	C13.8,24.5,13.9,24.9,14,25.1z M18.5,19.1c0.1-0.2,0.1-0.5,0-0.8L16.1,14l4.9,0.8c0.3,0,0.5,0,0.7-0.2l3.4-3.6l0.8,4.9\r
	c0,0.3,0.2,0.5,0.5,0.6l4.5,2.2l-4.4,2.2C26.2,21,26,21.2,26,21.5l-0.7,4.9l-3.5-3.5c-0.2-0.2-0.4-0.2-0.6-0.2c0,0-0.1,0-0.1,0\r
	l-4.9,0.9L18.5,19.1z`}),c("path",{class:"group-hover:fill-sp-color-light transition-all duration-700",id:"XMLID_4_",fill:"#1f1f39",d:`M36.2,4.8l-1.5,1.8l-2.3-0.2c-0.3,0-0.6,0.1-0.8,0.4s-0.2,0.6,0,0.9l1.2,2L32,11.6\r
	c-0.1,0.3-0.1,0.6,0.1,0.9c0.2,0.2,0.5,0.3,0.8,0.3l2.2-0.6l1.7,1.5c0.2,0.1,0.3,0.2,0.5,0.2c0.1,0,0.2,0,0.3-0.1\r
	c0.3-0.1,0.5-0.4,0.5-0.7l0.2-2.3l2-1.2c0.3-0.2,0.4-0.5,0.4-0.8c0-0.3-0.2-0.6-0.5-0.7l-2.1-0.9l-0.5-2.3c-0.1-0.3-0.3-0.5-0.6-0.6\r
	C36.8,4.4,36.4,4.5,36.2,4.8z M36.8,10.3l-0.1,1.1L36,10.7c-0.2-0.1-0.3-0.2-0.5-0.2c-0.1,0-0.1,0-0.2,0l-1.1,0.3l0.4-1\r
	c0.1-0.2,0.1-0.5-0.1-0.8L34,8.1L35,8.2c0.3,0,0.5-0.1,0.7-0.3l0.7-0.8l0.2,1.1c0.1,0.3,0.2,0.5,0.5,0.6l1,0.4l-0.9,0.6\r
	C37,9.8,36.9,10,36.8,10.3z`}),c("path",{class:"group-hover:fill-sp-color-light transition-all duration-700",id:"XMLID_1_",fill:"#1f1f39",d:`M3,8.7l-0.8,3.9c-0.1,0.3,0,0.6,0.3,0.8c0.2,0.2,0.6,0.2,0.9,0.1L7,11.8l3.5,2\r
	c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.3,0,0.5-0.1c0.3-0.2,0.4-0.5,0.4-0.8l-0.5-4l3-2.7c0.2-0.2,0.3-0.5,0.2-0.8\r
	c-0.1-0.3-0.3-0.5-0.6-0.6l-4-0.7L8.1,0.5C8,0.2,7.7,0,7.4,0C7.1,0,6.8,0.2,6.6,0.4L4.7,4l-4,0.4C0.4,4.4,0.2,4.6,0,4.9\r
	s0,0.6,0.2,0.8L3,8.7z M6,5.1l1.3-2.5l1.1,2.6C8.6,5.5,8.8,5.6,9,5.7l2.8,0.5L9.7,8.1C9.5,8.3,9.4,8.5,9.5,8.8l0.4,2.8l-2.4-1.4\r
	c-0.1-0.1-0.3-0.1-0.4-0.1c-0.1,0-0.2,0-0.4,0.1l-2.5,1.2l0.6-2.7c0.1-0.3,0-0.5-0.2-0.7l-1.9-2l2.8-0.3C5.6,5.5,5.8,5.4,6,5.1z`})],-1),v5={class:"infobox-text text-main-color-light middle-mobile:w-full"},M5=q("\u89C0\u661F\u7BA1\u7406"),y5={class:"mt-2"},w5={class:"hover:text-sp-color-light transition-all duration-700"},k5=q("\u89C0\u661F\u5217\u8868"),$5={class:"hover:text-sp-color-light transition-all duration-700"},S5=q("\u65B0\u589E\u5730\u9EDE"),A5=K({setup(e){c0();const t=n0(),r=String(t.name),n=o(""),a=o(""),s=o(""),u=z(()=>s.value.split("<br")[0]);async function _(){const g=await a1(r),d=g.data.aboutInfo,p=g.data.pageInfo.filter(h=>h.page_route==="Home");n.value=String(p[0].page_title),a.value=String(p[0].sub_page_title),s.value=String(d.philosophy)}return _(),(g,d)=>{const p=M0,h=a0("router-link"),f=i0;return F(),C("div",Z3,[i(p),c("div",G3,[c("div",X3,[c("h1",Q3,x(n.value),1),i(h,{to:"/board/slogan",class:"flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 btn text-center items-center p-0 justify-center"},{default:L(()=>[W3]),_:1})]),c("div",Y3,[s.value&&s.value.length>0?(F(),C("div",J3,[c("div",K3,x(a.value),1),c("p",null,x(l(u)),1),c5])):J("",!0),c("div",t5,[c("div",e5,[i(h,{to:"/",class:"infobox-icon group mb-6 mr-6 middle-mobile:mr-0"},{default:L(()=>[r5]),_:1}),c("div",l5,[i(h,{class:"font-semibold text-3xl hover:text-sp-color-light transition-all duration-700",to:"/board/article"},{default:L(()=>[n5]),_:1}),c("ul",a5,[c("li",i5,[i(h,{to:"/board/categories"},{default:L(()=>[s5]),_:1})]),c("li",o5,[i(h,{to:"/board/article"},{default:L(()=>[F5]),_:1})])])])]),c("div",u5,[i(h,{to:"/",class:"infobox-icon group mb-6 mr-6 middle-mobile:mr-0"},{default:L(()=>[d5]),_:1}),c("div",p5,[i(h,{class:"font-semibold text-3xl hover:text-sp-color-light transition-all duration-700",to:"/board/organization"},{default:L(()=>[h5]),_:1}),c("ul",f5,[c("li",C5,[i(h,{to:"/board/organization"},{default:L(()=>[g5]),_:1})]),c("li",m5,[i(h,{to:"/board/observatories"},{default:L(()=>[_5]),_:1})])])])]),c("div",b5,[i(h,{to:"/board/stargazer",class:"infobox-icon group mb-6 mr-6 middle-mobile:mr-0"},{default:L(()=>[x5]),_:1}),c("div",v5,[i(h,{class:"font-semibold text-3xl hover:text-sp-color-light transition-all duration-700",to:"/board/stargazer"},{default:L(()=>[M5]),_:1}),c("ul",y5,[c("li",w5,[i(h,{to:"/board/stargazer"},{default:L(()=>[k5]),_:1})]),c("li",$5,[i(h,{to:"/board/stargazer/add"},{default:L(()=>[S5]),_:1})])])])])])]),i(f,{class:"absolute bottom-0 mobile:left-0"})])])}}}),E5={class:"w-96 h-52 modal-inner bg-white grid grid-rows-4"},z5={class:"pop-msg-header w-full bg-main-color-light flex items-center justify-between relative px-4"},B5=c("h6",{class:"text-middle"},"\u901A\u77E5\u8996\u7A97",-1),P5=c("span",{class:"w-12 h-12 block"},[c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40","enable-background":"new 0 0 40 40"},[c("line",{class:"group-hover:stroke-sp-color-light transition-all duration-700",x1:"15",y1:"15",x2:"25",y2:"25",stroke:"#fff","stroke-width":"2.5","stroke-linecap":"round","stroke-miterlimit":"10"}),c("line",{class:"group-hover:stroke-sp-color-light transition-all duration-700",x1:"25",y1:"15",x2:"15",y2:"25",stroke:"#fff","stroke-width":"2.5","stroke-linecap":"round","stroke-miterlimit":"10"})])],-1),D5=[P5],L5={class:"pop-msg-content w-full text-middle row-span-2 p-4 border-b border-main-color-light"},I5={class:"pop-msg-footer w-full text-middle flex content-center"},$0=K({emits:["popBtnCheck"],setup(e,{emit:t}){const r=c0(),n=z(()=>r.popMsgStateInner),a=z(()=>r.popMsgState),s=z(()=>r.popMsgContent),u=z(()=>r.get_popMsgConfirm);function _(g){t("popBtnCheck"),g===!0?r.popMsgCheckTrun():r.closePopMsg()}return(g,d)=>(F(),C("div",{class:y(["admin-stargazer-modal bg-black bg-opacity-50 w-full h-full fixed left-0 top-0 flex items-center justify-center animate__animated",[{animate__fadeOut:!l(a)},{animate__fadeIn:l(a)},{"z-9999":l(n)},{"-z-50":!l(n)}]])},[c("div",E5,[c("div",z5,[B5,c("button",{class:"button small text-white cursor-pointer group",title:"close",onClick:d[0]||(d[0]=I(p=>_(!1),["prevent"]))},D5)]),c("div",L5,x(l(s)),1),c("div",I5,[B(c("button",{onClick:d[1]||(d[1]=I(p=>_(!0),["prevent"])),class:"w-1/2 border-r border-main-color-light hover:bg-sp-color-light transition-all duration-700"},"\u78BA\u5B9A",512),[[D,l(u)]]),B(c("button",{onClick:d[2]||(d[2]=I(p=>_(!1),["prevent"])),class:"w-1/2 hover:bg-main-color-dark hover:text-main-color-light transition-all duration-700"},"\u53D6\u6D88",512),[[D,l(u)]]),B(c("button",{onClick:d[3]||(d[3]=I(p=>_(!1),["prevent"])),class:"w-full hover:bg-main-color-dark hover:text-main-color-light transition-all duration-700"},"\u78BA\u5B9A",512),[[D,!l(u)]])])])],2))}}),R5={class:"flex items-stretch"},T5={class:"laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative"},N5=c("div",{class:"h-table:w-9/12 w-full flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto flex-wrap"},[c("h1",{class:"text-white relative mobile:text-5xl w-table:w-3/4 w-full mobile:w-full w-table:m-0 mb-5"}," \u6A19\u8A9E\u7BA1\u7406")],-1),V5={class:"editer-container h-table:w-9/12 w-full"},O5={class:"flex justify-between mb-8 flex-wrap mobile:mb-4"},j5=c("h2",{class:"text-main-color-light mobile:text-3xl mobile:w-full mobile:mb-4"},"\u9996\u9801\u2014\u4E3B\u8996\u89BA\u6587\u5B57",-1),q5={key:0,class:"editer-inner view-mode"},U5={class:"home-title"},H5={key:1,class:"editer-inner edit-mode mb-8"},Z5=c("h2",{class:"text-main-color-light mobile:text-3xl mobile:w-full mobile:mb-4"},"\u95DC\u65BC\u6211\u5011\u2014\u7406\u5FF5",-1),G5={key:0,class:"editer-inner view-mode mb-14"},X5={class:"text-xl"},Q5=c("hr",{class:"border-main-color-middle my-8"},null,-1),W5={key:1,class:"editer-inner edit-mode md-container"},Y5={class:"flex justify-between mb-8 flex-wrap mobile:mb-4"},J5=c("h2",{class:"text-main-color-light mobile:text-3xl mobile:w-full mobile:mb-4"},"\u95DC\u65BC\u6211\u5011\u2014\u5F15\u8A00",-1),K5={key:0,class:"editer-inner view-mode mb-14"},ct={key:1,class:"editer-inner edit-mode md-container"},tt={class:"flex justify-between mb-8 flex-wrap mobile:mb-4"},et=c("h2",{class:"text-main-color-light mobile:text-3xl mobile:w-full mobile:mb-4"},"\u95DC\u65BC\u6211\u5011\u2014\u7D50\u8A9E",-1),rt={key:0,class:"editer-inner view-mode mb-14"},lt={key:1,class:"editer-inner edit-mode md-container"},nt=K({setup(e){const t=n0(),r=String(t.name),n=z(()=>String(t.query.edit)),a=c0(),s=o(""),u=z(()=>s.value.split(" ")[0]),_=z(()=>s.value.replace(u.value,"")),g=o(""),d=o(""),p=o(""),h=o(""),f=o(""),M=o(!1),w=o(!1),b=o(!1),$=o(!1);function k(R){switch(R){case"homeSloganForm":M.value=!0;break;case"aboutSloganForm":w.value=!0;break;case"aboutQuoteForm":b.value=!0;break;case"aboutEpilogueForm":$.value=!0;break}}const v=o({validate:()=>({valid:!1})}),S=o({validate:()=>({valid:!1})}),E=o({validate:()=>({valid:!1})}),A=o({validate:()=>({valid:!1})}),P={pageTitleRule:l0.required,pageSubTitleRule:l0.required},N={sloganRule:l0.required,philosophyRule:l0.required},e0={quoteRule:l0.required},Y={epilogueRule:l0.required};async function V(){const R=await a1(r),m=R.data.aboutInfo,t0=R.data.pageInfo.filter(u0=>u0.page_route==="Home");s.value=String(t0[0].page_title),g.value=String(t0[0].sub_page_title),d.value=String(m.slogan),p.value=String(m.philosophy),h.value=String(m.quote),f.value=String(m.epilogue)}const U=o("");function O(R){a.openPopMsg("\u78BA\u5B9A\u5132\u5B58\u8B8A\u66F4?",!0),U.value=R}const o0=z(()=>a.get_popMsgBtnReturn),C0=P0(async()=>{const R=await v.value.validate(),m=await S.value.validate(),t0=await E.value.validate(),u0=await A.value.validate();switch(await o0,U.value){case"homeSloganForm":o0.value&&R.valid&&(Fc(s.value,g.value,r),M.value=!1);break;case"aboutSloganForm":o0.value&&m.valid&&(uc(d.value,p.value,r),w.value=!1);break;case"aboutQuoteForm":o0.value&&t0.valid&&(dc(h.value,r),b.value=!1);break;case"aboutEpilogueForm":o0.value&&u0.valid&&(pc(f.value,r),$.value=!1);break}},1e3),p0=o(null),F0=O0(q1(p0));function T(){setTimeout(()=>{if(n.value==="about"){const R=F0.top,m=document.querySelector(".app-inner");m&&m.scrollTo({behavior:"smooth",top:5+R})}},700)}return U1(n,()=>{T()}),V(),w0(()=>{T()}),(R,m)=>{const t0=M0,u0=a0("v-md-preview"),f0=a0("v-md-editor"),z0=i0,g0=$0;return F(),C(j,null,[c("div",R5,[i(t0),c("div",T5,[N5,c("div",V5,[i(l(S0),{ref_key:"homeSloganForm",ref:v,"validation-schema":P,class:"home-slogan w-full mb-14"},{default:L(({errors:X})=>[c("div",O5,[j5,M.value?J("",!0):(F(),C("button",{key:0,class:"admin-sbtn",onClick:m[0]||(m[0]=I(W=>k("homeSloganForm"),["prevent"]))},"\u7DE8\u8F2F\u6A19\u8A9E")),M.value?(F(),C("button",{key:1,class:"admin-edit-sbtn",onClick:m[1]||(m[1]=I(W=>O("homeSloganForm"),["prevent"]))},"\u5132\u5B58\u6A19\u8A9E")):J("",!0)]),M.value?J("",!0):(F(),C("div",q5,[c("h4",U5,[c("i",null,x(l(u)),1),q(x(l(_)),1)]),c("p",null,x(g.value),1)])),M.value?(F(),C("div",H5,[i(l(r0),{name:"pageTitleRule",type:"text",modelValue:s.value,"onUpdate:modelValue":m[2]||(m[2]=W=>s.value=W),class:y(["home-title-input mb-4 bottom-line-input-gray",{"!border-sp-color-dark":X.pageTitleRule}]),placeholder:"\u4E3B\u8996\u89BA\u6A19\u8A9E"},null,8,["modelValue","class"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block mt-2"},x(X.pageTitleRule),513),[[D,X.pageTitleRule]]),i(l(r0),{name:"pageSubTitleRule",type:"text",modelValue:g.value,"onUpdate:modelValue":m[3]||(m[3]=W=>g.value=W),class:y(["home-slogan mb-2 bottom-line-input-gray",{"!border-sp-color-dark":X.pageSubTitleRule}]),placeholder:"\u4E3B\u8996\u89BA\u5F15\u8A00"},null,8,["modelValue","class"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block mt-2"},x(X.pageSubTitleRule),513),[[D,X.pageSubTitleRule]])])):J("",!0)]),_:1},512),i(l(S0),{ref_key:"aboutSloganForm",ref:S,"validation-schema":N,class:"about-slogan w-full mb-14"},{default:L(({errors:X})=>[c("div",{ref_key:"aboutSloganEditOuter",ref:p0,class:"flex justify-between mb-8 flex-wrap mobile:mb-4"},[Z5,w.value?J("",!0):(F(),C("button",{key:0,class:"admin-sbtn",onClick:m[4]||(m[4]=I(W=>k("aboutSloganForm"),["prevent"]))},"\u7DE8\u8F2F\u6A19\u8A9E")),w.value?(F(),C("button",{key:1,class:"admin-edit-sbtn",onClick:m[5]||(m[5]=I(W=>O("aboutSloganForm"),["prevent"]))},"\u5132\u5B58\u6A19\u8A9E")):J("",!0)],512),w.value?J("",!0):(F(),C("div",G5,[c("h4",X5,x(d.value),1),Q5,i(u0,{class:"markdown-body",text:p.value,height:"400px"},null,8,["text"])])),w.value?(F(),C("div",W5,[i(l(r0),{name:"sloganRule",modelValue:d.value,"onUpdate:modelValue":m[6]||(m[6]=W=>d.value=W),class:y(["p-6",{"!bg-sp-color-light":X.sloganRule}]),placeholder:"\u95DC\u65BC\u6211\u5011\u6A19\u8A9E"},null,8,["modelValue","class"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block mt-2 mb-5"},x(X.sloganRule),513),[[D,X.sloganRule]]),B(i(l(r0),{name:"philosophyRule",modelValue:p.value,"onUpdate:modelValue":m[7]||(m[7]=W=>p.value=W)},null,8,["modelValue"]),[[D,!1]]),i(f0,{class:"markdown-body",modelValue:p.value,"onUpdate:modelValue":m[8]||(m[8]=W=>p.value=W),height:"400px"},null,8,["modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block mt-2"},x(X.philosophyRule),513),[[D,X.philosophyRule]])])):J("",!0)]),_:1},512),i(l(S0),{ref_key:"aboutQuoteForm",ref:E,"validation-schema":e0,class:"about-quote w-full mb-14"},{default:L(({errors:X})=>[c("div",Y5,[J5,b.value?J("",!0):(F(),C("button",{key:0,class:"admin-sbtn",onClick:m[9]||(m[9]=I(W=>k("aboutQuoteForm"),["prevent"]))},"\u7DE8\u8F2F\u6A19\u8A9E")),b.value?(F(),C("button",{key:1,class:"admin-edit-sbtn",onClick:m[10]||(m[10]=I(W=>O("aboutQuoteForm"),["prevent"]))},"\u5132\u5B58\u6A19\u8A9E")):J("",!0)]),b.value?J("",!0):(F(),C("div",K5,[i(u0,{class:"markdown-body",text:h.value,height:"400px"},null,8,["text"])])),b.value?(F(),C("div",ct,[B(i(l(r0),{name:"quoteRule",modelValue:h.value,"onUpdate:modelValue":m[11]||(m[11]=W=>h.value=W)},null,8,["modelValue"]),[[D,!1]]),i(f0,{class:"markdown-body",modelValue:h.value,"onUpdate:modelValue":m[12]||(m[12]=W=>h.value=W),height:"400px"},null,8,["modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block mt-2"},x(X.quoteRule),513),[[D,X.quoteRule]])])):J("",!0)]),_:1},512),i(l(S0),{ref_key:"aboutEpilogueForm",ref:A,"validation-schema":Y,class:"about-epilogue w-full mb-14"},{default:L(({errors:X})=>[c("div",tt,[et,$.value?J("",!0):(F(),C("button",{key:0,class:"admin-sbtn",onClick:m[13]||(m[13]=I(W=>k("aboutEpilogueForm"),["prevent"]))},"\u7DE8\u8F2F\u6A19\u8A9E")),$.value?(F(),C("button",{key:1,class:"admin-edit-sbtn",onClick:m[14]||(m[14]=I(W=>O("aboutEpilogueForm"),["prevent"]))},"\u5132\u5B58\u6A19\u8A9E")):J("",!0)]),$.value?J("",!0):(F(),C("div",rt,[i(u0,{class:"markdown-body",text:f.value,height:"400px"},null,8,["text"])])),$.value?(F(),C("div",lt,[B(i(l(r0),{name:"epilogueRule",modelValue:f.value,"onUpdate:modelValue":m[15]||(m[15]=W=>f.value=W)},null,8,["modelValue"]),[[D,!1]]),i(f0,{class:"markdown-body",modelValue:f.value,"onUpdate:modelValue":m[16]||(m[16]=W=>f.value=W),height:"400px"},null,8,["modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block mt-2"},x(X.epilogueRule),513),[[D,X.epilogueRule]])])):J("",!0)]),_:1},512)]),i(z0,{class:"absolute bottom-0 mobile:left-0"})])]),i(g0,{onPopBtnCheck:l(C0)},null,8,["onPopBtnCheck"])],64)}}}),at={class:"w-10/12 mt-14 -ml-2 animate__animated animate__fadeIn mobile:m-auto"},it={"aria-label":"Page navigation"},st={class:"inline-flex items-center -space-x-px"},ot=c("a",{class:"cursor-pointer block py-0 pr-3 ml-0 text-main-color-light mt-1"},[c("span",{class:"sr-only"},"Previous"),c("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[c("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})])],-1),Ft=[ot],ut=["onClick"],dt=c("a",{class:"cursor-pointer block py-0 px-3 text-main-color-light mt-1"},[c("span",{class:"sr-only"},"Next"),c("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[c("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})])],-1),pt=[dt],u1=K({props:{hasNextPage:{type:Boolean,default:!1},hasPreviousPage:{type:Boolean,default:!1},totalPagi:{type:Number,default:1},actionPage:{type:Number,default:1}},emits:["selectPagi"],setup(e,{emit:t}){const r=e;n0();const n=o(!1);function a(){r.actionPage&&(t("selectPagi",r.actionPage-1),_())}function s(){r.actionPage&&(t("selectPagi",r.actionPage+1),_())}function u(g){t("selectPagi",g),_()}function _(){const g=document.querySelector(".app-inner");g&&(g.scrollTop=0),n.value=!0,setTimeout(()=>{n.value=!1},600)}return(g,d)=>B((F(),C("div",at,[c("nav",it,[c("ul",st,[c("li",{class:y({"pointer-events-none opacity-50":!e.hasPreviousPage}),onClick:d[0]||(d[0]=p=>a())},Ft,2),(F(!0),C(j,null,h0(e.totalPagi,p=>(F(),C("li",{class:y({"pointer-events-none":e.actionPage===p}),key:p,onClick:h=>u(p)},[c("a",{class:y(["transition-all duration-700 cursor-pointer w-6 h-6 inline-flex items-center justify-center text-main-color-light text-middle rounded-full pl-2px pb-2px mx-1 hover:text-main-color-dark hover:bg-main-color-light font-semibold",{"!text-main-color-dark bg-main-color-light":e.actionPage===p}])},x(p),3)],10,ut))),128)),c("li",{class:y({"pointer-events-none opacity-50":!e.hasNextPage}),onClick:d[1]||(d[1]=p=>s())},pt,2)])])],512)),[[D,!n.value&&e.totalPagi>1]])}}),ht={class:"flex items-stretch"},ft={class:"laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative"},Ct={class:"w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto"},gt=c("h1",{class:"text-white relative -left-2 -top-2 mobile:text-5xl w-3/4 mobile:w-full"},"\u89C0\u661F\u5730\u9EDE\u5217\u8868",-1),mt=q(" \u65B0\u589E "),_t={class:"w-9/12 mobile:w-11/12 table-container mobile:m-auto"},bt={key:0,id:"responsive-table",class:"animate__animated animate__fadeIn"},xt=c("thead",{class:"w-table:table-header-group hidden"},[c("tr",null,[c("th",null,"\u5730\u9EDE\u540D\u7A31"),c("th",null,"\u5730\u5740\u8AAA\u660E"),c("th",{class:"w-20 text-right"},"\u7DE8\u8F2F"),c("th",{class:"w-20 text-right"},"\u522A\u9664")])],-1),vt={"data-title":"\u540D\u7A31"},Mt={"data-title":"\u8AAA\u660E"},yt={"data-title":"\u7DE8\u8F2F"},wt=["onClick"],kt=y0(`<defs><pattern x="-73.8" y="198.9" width="69" height="69" patternUnits="userSpaceOnUse" id="\u5713\u9EDE\u5716\u6A23" viewBox="2.1 -70.9 69 69" overflow="visible"><g><polygon fill="none" points="71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9 			"></polygon><polygon fill="#F6BB60" points="71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9 			"></polygon><g><path fill="#FFFFFF" d="M61.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-71.7,61.8-71.7,61.8-71.7\r
					C61.8-71.6,61.8-71.6,61.8-71.7"></path><path fill="#FFFFFF" d="M54.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-71.7,54.1-71.7,54.1-71.7\r
					C54.1-71.6,54.1-71.6,54.1-71.7"></path><path fill="#FFFFFF" d="M46.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.4-71.7,46.4-71.7,46.4-71.7\r
					C46.4-71.6,46.4-71.6,46.4-71.7"></path><path fill="#FFFFFF" d="M38.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-71.7,38.8-71.7,38.8-71.7\r
					C38.8-71.6,38.8-71.6,38.8-71.7"></path><path fill="#FFFFFF" d="M31.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-71.7,31.1-71.7,31.1-71.7\r
					C31.1-71.6,31.1-71.6,31.1-71.7"></path><path fill="#FFFFFF" d="M23.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.4-71.7,23.4-71.7,23.4-71.7\r
					C23.4-71.6,23.4-71.6,23.4-71.7"></path><path fill="#FFFFFF" d="M15.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-71.7,15.8-71.7,15.8-71.7\r
					C15.8-71.6,15.8-71.6,15.8-71.7"></path><path fill="#FFFFFF" d="M8.1-71.7c0,0.1,0,0.1,0,0.2C8-71.4,8-71.4,7.9-71.3c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.1-71.7,8.1-71.7,8.1-71.7\r
					C8.1-71.6,8.1-71.6,8.1-71.7"></path><path fill="#FFFFFF" d="M0.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.8-69.4,1-69,1.2-68.9c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.4-71.7,0.4-71.7,0.4-71.7\r
					C0.4-71.6,0.4-71.6,0.4-71.7"></path></g><g><path fill="#FFFFFF" d="M69.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-71.7,69.4-71.7,69.4-71.7\r
					C69.4-71.6,69.4-71.6,69.4-71.7"></path></g><path fill="#FFFFFF" d="M0.5-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-69.4,1-69,1.3-68.9c0.2,0,0.4-0.1,0.5-0.1\r
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-71.7,0.5-71.7,0.5-71.7\r
				C0.5-71.6,0.5-71.6,0.5-71.7"></path><g><g><path fill="#FFFFFF" d="M69.4-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-64,69.4-64.1,69.4-64C69.4-64,69.4-64,69.4-64"></path><path fill="#FFFFFF" d="M61.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-64,61.8-64.1,61.8-64C61.8-64,61.8-64,61.8-64"></path><path fill="#FFFFFF" d="M54.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-64,54.1-64.1,54.1-64C54.1-64,54.1-64,54.1-64"></path><path fill="#FFFFFF" d="M46.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-64,46.5-64.1,46.5-64C46.5-64,46.5-64,46.5-64"></path><path fill="#FFFFFF" d="M38.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-64,38.8-64.1,38.8-64C38.8-64,38.8-64,38.8-64"></path><path fill="#FFFFFF" d="M31.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-64,31.1-64.1,31.1-64C31.1-64,31.1-64,31.1-64"></path><path fill="#FFFFFF" d="M23.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-64,23.5-64.1,23.5-64C23.5-64,23.5-64,23.5-64"></path><path fill="#FFFFFF" d="M15.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-64,15.8-64.1,15.8-64C15.8-64,15.8-64,15.8-64"></path><path fill="#FFFFFF" d="M8.2-64c0,0.1,0,0.1,0,0.2C8.1-63.7,8-63.7,8-63.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-62.2,8.2-62,8.3-61.9c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-64,8.2-64.1,8.2-64C8.1-64,8.1-64,8.2-64"></path><path fill="#FFFFFF" d="M0.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-62,3-61.9,3.1-62c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-64,0.5-64.1,0.5-64C0.5-64,0.5-64,0.5-64"></path></g><g><path fill="#FFFFFF" d="M69.4-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-56.4,69.4-56.4,69.4-56.3\r
						C69.4-56.3,69.4-56.3,69.4-56.3"></path><path fill="#FFFFFF" d="M61.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-56.4,61.8-56.4,61.8-56.3\r
						C61.8-56.3,61.8-56.3,61.8-56.3"></path><path fill="#FFFFFF" d="M54.1-56.3c0,0.1,0,0.1,0,0.2C54-56.1,54-56.1,53.9-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-56.4,54.1-56.4,54.1-56.3\r
						C54.1-56.3,54.1-56.3,54.1-56.3"></path><path fill="#FFFFFF" d="M46.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-56.4,46.5-56.4,46.5-56.3\r
						C46.5-56.3,46.5-56.3,46.5-56.3"></path><path fill="#FFFFFF" d="M38.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-56.4,38.8-56.4,38.8-56.3\r
						C38.8-56.3,38.8-56.3,38.8-56.3"></path><path fill="#FFFFFF" d="M31.1-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-56.4,31.1-56.4,31.1-56.3\r
						C31.1-56.3,31.1-56.3,31.1-56.3"></path><path fill="#FFFFFF" d="M23.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-56.4,23.5-56.4,23.5-56.3\r
						C23.5-56.3,23.5-56.3,23.5-56.3"></path><path fill="#FFFFFF" d="M15.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-56.4,15.8-56.4,15.8-56.3\r
						C15.8-56.3,15.8-56.3,15.8-56.3"></path><path fill="#FFFFFF" d="M8.2-56.3c0,0.1,0,0.1,0,0.2C8.1-56.1,8-56.1,8-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-56.4,8.2-56.4,8.2-56.3\r
						C8.1-56.3,8.1-56.3,8.2-56.3"></path><path fill="#FFFFFF" d="M0.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-56.4,0.5-56.4,0.5-56.3\r
						C0.5-56.3,0.5-56.3,0.5-56.3"></path></g><g><path fill="#FFFFFF" d="M69.4-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-48.7,69.4-48.8,69.4-48.7\r
						C69.4-48.7,69.4-48.7,69.4-48.7"></path><path fill="#FFFFFF" d="M61.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-48.7,61.8-48.8,61.8-48.7\r
						C61.8-48.7,61.8-48.7,61.8-48.7"></path><path fill="#FFFFFF" d="M54.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-48.7,54.1-48.8,54.1-48.7\r
						C54.1-48.7,54.1-48.7,54.1-48.7"></path><path fill="#FFFFFF" d="M46.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-48.7,46.5-48.8,46.5-48.7\r
						C46.5-48.7,46.5-48.7,46.5-48.7"></path><path fill="#FFFFFF" d="M38.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-48.7,38.8-48.8,38.8-48.7\r
						C38.8-48.7,38.8-48.7,38.8-48.7"></path><path fill="#FFFFFF" d="M31.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-48.7,31.1-48.8,31.1-48.7\r
						C31.1-48.7,31.1-48.7,31.1-48.7"></path><path fill="#FFFFFF" d="M23.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-48.7,23.5-48.8,23.5-48.7\r
						C23.5-48.7,23.5-48.7,23.5-48.7"></path><path fill="#FFFFFF" d="M15.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-48.7,15.8-48.8,15.8-48.7\r
						C15.8-48.7,15.8-48.7,15.8-48.7"></path><path fill="#FFFFFF" d="M8.2-48.7c0,0.1,0,0.1,0,0.2C8.1-48.4,8-48.4,8-48.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C8.5-46.4,8.7-46,8.9-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-48.7,8.2-48.8,8.2-48.7\r
						C8.1-48.7,8.1-48.7,8.2-48.7"></path><path fill="#FFFFFF" d="M0.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-46.4,1-46,1.3-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-48.7,0.5-48.8,0.5-48.7\r
						C0.5-48.7,0.5-48.7,0.5-48.7"></path></g><g><path fill="#FFFFFF" d="M69.4-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-41.1,69.4-41.1,69.4-41\r
						C69.4-41,69.4-41,69.4-41"></path><path fill="#FFFFFF" d="M61.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-41.1,61.8-41.1,61.8-41\r
						C61.8-41,61.8-41,61.8-41"></path><path fill="#FFFFFF" d="M54.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-41.1,54.1-41.1,54.1-41\r
						C54.1-41,54.1-41,54.1-41"></path><path fill="#FFFFFF" d="M46.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-41.1,46.5-41.1,46.5-41\r
						C46.5-41,46.5-41,46.5-41"></path><path fill="#FFFFFF" d="M38.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-41.1,38.8-41.1,38.8-41\r
						C38.8-41,38.8-41,38.8-41"></path><path fill="#FFFFFF" d="M31.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-41.1,31.1-41.1,31.1-41\r
						C31.1-41,31.1-41,31.1-41"></path><path fill="#FFFFFF" d="M23.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-41.1,23.5-41.1,23.5-41\r
						C23.5-41,23.5-41,23.5-41"></path><path fill="#FFFFFF" d="M15.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-41.1,15.8-41.1,15.8-41\r
						C15.8-41,15.8-41,15.8-41"></path><path fill="#FFFFFF" d="M8.2-41c0,0.1,0,0.1,0,0.2C8.1-40.8,8-40.8,8-40.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-41.1,8.2-41.1,8.2-41C8.1-41,8.1-41,8.2-41"></path><path fill="#FFFFFF" d="M0.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-39,3-39,3.1-39c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-41.1,0.5-41.1,0.5-41C0.5-41,0.5-41,0.5-41"></path></g><g><path fill="#FFFFFF" d="M69.4-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-33.4,69.4-33.5,69.4-33.4\r
						C69.4-33.4,69.4-33.4,69.4-33.4"></path><path fill="#FFFFFF" d="M61.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-33.4,61.8-33.5,61.8-33.4\r
						C61.8-33.4,61.8-33.4,61.8-33.4"></path><path fill="#FFFFFF" d="M54.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-33.4,54.1-33.5,54.1-33.4\r
						C54.1-33.4,54.1-33.4,54.1-33.4"></path><path fill="#FFFFFF" d="M46.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-33.4,46.5-33.5,46.5-33.4\r
						C46.5-33.4,46.5-33.4,46.5-33.4"></path><path fill="#FFFFFF" d="M38.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-33.4,38.8-33.5,38.8-33.4\r
						C38.8-33.4,38.8-33.4,38.8-33.4"></path><path fill="#FFFFFF" d="M31.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-33.4,31.1-33.5,31.1-33.4\r
						C31.1-33.4,31.1-33.4,31.1-33.4"></path><path fill="#FFFFFF" d="M23.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-33.4,23.5-33.5,23.5-33.4\r
						C23.5-33.4,23.5-33.4,23.5-33.4"></path><path fill="#FFFFFF" d="M15.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-33.4,15.8-33.5,15.8-33.4\r
						C15.8-33.4,15.8-33.4,15.8-33.4"></path><path fill="#FFFFFF" d="M8.2-33.4c0,0.1,0,0.1,0,0.2C8.1-33.1,8-33.1,8-33.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-33.4,8.2-33.5,8.2-33.4\r
						C8.1-33.4,8.1-33.4,8.2-33.4"></path><path fill="#FFFFFF" d="M0.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-33.4,0.5-33.5,0.5-33.4\r
						C0.5-33.4,0.5-33.4,0.5-33.4"></path></g><g><path fill="#FFFFFF" d="M69.4-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-25.8,69.4-25.8,69.4-25.7\r
						C69.4-25.7,69.4-25.7,69.4-25.7"></path><path fill="#FFFFFF" d="M61.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-25.8,61.8-25.8,61.8-25.7\r
						C61.8-25.7,61.8-25.7,61.8-25.7"></path><path fill="#FFFFFF" d="M54.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-25.8,54.1-25.8,54.1-25.7\r
						C54.1-25.7,54.1-25.7,54.1-25.7"></path><path fill="#FFFFFF" d="M46.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-25.8,46.5-25.8,46.5-25.7\r
						C46.5-25.7,46.5-25.7,46.5-25.7"></path><path fill="#FFFFFF" d="M38.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-25.8,38.8-25.8,38.8-25.7\r
						C38.8-25.7,38.8-25.7,38.8-25.7"></path><path fill="#FFFFFF" d="M31.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-25.8,31.1-25.8,31.1-25.7\r
						C31.1-25.7,31.1-25.7,31.1-25.7"></path><path fill="#FFFFFF" d="M23.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-25.8,23.5-25.8,23.5-25.7\r
						C23.5-25.7,23.5-25.7,23.5-25.7"></path><path fill="#FFFFFF" d="M15.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-25.8,15.8-25.8,15.8-25.7\r
						C15.8-25.7,15.8-25.7,15.8-25.7"></path><path fill="#FFFFFF" d="M8.2-25.7c0,0.1,0,0.1,0,0.2C8.1-25.4,8-25.5,8-25.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-24,8.2-23.8,8.3-23.6c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-25.8,8.2-25.8,8.2-25.7\r
						C8.1-25.7,8.1-25.7,8.2-25.7"></path><path fill="#FFFFFF" d="M0.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-23.5,1-23.1,1.3-23c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-25.8,0.5-25.8,0.5-25.7\r
						C0.5-25.7,0.5-25.7,0.5-25.7"></path></g><g><path fill="#FFFFFF" d="M69.4-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-18.1,69.4-18.2,69.4-18.1\r
						C69.4-18,69.4-18.1,69.4-18.1"></path><path fill="#FFFFFF" d="M61.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-18.1,61.8-18.2,61.8-18.1\r
						C61.8-18,61.8-18.1,61.8-18.1"></path><path fill="#FFFFFF" d="M54.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-18.1,54.1-18.2,54.1-18.1\r
						C54.1-18,54.1-18.1,54.1-18.1"></path><path fill="#FFFFFF" d="M46.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-18.1,46.5-18.2,46.5-18.1\r
						C46.5-18,46.5-18.1,46.5-18.1"></path><path fill="#FFFFFF" d="M38.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-18.1,38.8-18.2,38.8-18.1\r
						C38.8-18,38.8-18.1,38.8-18.1"></path><path fill="#FFFFFF" d="M31.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-18.1,31.1-18.2,31.1-18.1\r
						C31.1-18,31.1-18.1,31.1-18.1"></path><path fill="#FFFFFF" d="M23.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-18.1,23.5-18.2,23.5-18.1\r
						C23.5-18,23.5-18.1,23.5-18.1"></path><path fill="#FFFFFF" d="M15.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-18.1,15.8-18.2,15.8-18.1\r
						C15.8-18,15.8-18.1,15.8-18.1"></path><path fill="#FFFFFF" d="M8.2-18.1c0,0.1,0,0.1,0,0.2C8.1-17.8,8-17.8,8-17.8c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-16.3,8.2-16.1,8.3-16c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-18.1,8.2-18.2,8.2-18.1\r
						C8.1-18,8.1-18.1,8.2-18.1"></path><path fill="#FFFFFF" d="M0.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-16.1,3-16,3.1-16c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-18.1,0.5-18.2,0.5-18.1\r
						C0.5-18,0.5-18.1,0.5-18.1"></path></g><g><path fill="#FFFFFF" d="M69.4-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-10.5,69.4-10.5,69.4-10.4\r
						C69.4-10.4,69.4-10.4,69.4-10.4"></path><path fill="#FFFFFF" d="M61.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C63.9-8,63.8-8.2,64-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-10.5,61.8-10.5,61.8-10.4\r
						C61.8-10.4,61.8-10.4,61.8-10.4"></path><path fill="#FFFFFF" d="M54.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-10.5,54.1-10.5,54.1-10.4\r
						C54.1-10.4,54.1-10.4,54.1-10.4"></path><path fill="#FFFFFF" d="M46.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-10.5,46.5-10.5,46.5-10.4\r
						C46.5-10.4,46.5-10.4,46.5-10.4"></path><path fill="#FFFFFF" d="M38.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C40.9-8,40.8-8.2,41-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-10.5,38.8-10.5,38.8-10.4\r
						C38.8-10.4,38.8-10.4,38.8-10.4"></path><path fill="#FFFFFF" d="M31.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-10.5,31.1-10.5,31.1-10.4\r
						C31.1-10.4,31.1-10.4,31.1-10.4"></path><path fill="#FFFFFF" d="M23.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-10.5,23.5-10.5,23.5-10.4\r
						C23.5-10.4,23.5-10.4,23.5-10.4"></path><path fill="#FFFFFF" d="M15.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C17.9-8,17.8-8.2,18-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-10.5,15.8-10.5,15.8-10.4\r
						C15.8-10.4,15.8-10.4,15.8-10.4"></path><path fill="#FFFFFF" d="M8.2-10.4c0,0.1,0,0.1,0,0.2C8.1-10.1,8-10.2,8-10.1C7.9-10,7.9-9.8,7.9-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-8.7,8.2-8.5,8.3-8.3c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-10.5,8.2-10.5,8.2-10.4\r
						C8.1-10.4,8.1-10.4,8.2-10.4"></path><path fill="#FFFFFF" d="M0.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1C0.3-10,0.2-9.8,0.2-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-8.2,1-7.8,1.3-7.7c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C2.6-8,2.5-8.2,2.7-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-10.5,0.5-10.5,0.5-10.4\r
						C0.5-10.4,0.5-10.4,0.5-10.4"></path></g></g><g><path fill="#FFFFFF" d="M69.4-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C69.8-0.5,70-0.1,70.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-2.8,69.4-2.9,69.4-2.8\r
					C69.4-2.7,69.4-2.8,69.4-2.8"></path><path fill="#FFFFFF" d="M61.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C61.6-1,61.8-0.8,62-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-2.8,61.8-2.9,61.8-2.8\r
					C61.8-2.7,61.8-2.8,61.8-2.8"></path><path fill="#FFFFFF" d="M54.1-2.8c0,0.1,0,0.1,0,0.2C54-2.5,54-2.5,53.9-2.5c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C54-1,54.1-0.8,54.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C56.9-0.8,57-1,57.1-1.2c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-2.8,54.1-2.9,54.1-2.8\r
					C54.1-2.7,54.1-2.8,54.1-2.8"></path><path fill="#FFFFFF" d="M46.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C46.8-0.5,47-0.1,47.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-2.8,46.5-2.9,46.5-2.8\r
					C46.5-2.7,46.5-2.8,46.5-2.8"></path><path fill="#FFFFFF" d="M38.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C38.6-1,38.8-0.8,39-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-2.8,38.8-2.9,38.8-2.8\r
					C38.8-2.7,38.8-2.8,38.8-2.8"></path><path fill="#FFFFFF" d="M31.1-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C31-1,31.1-0.8,31.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-2.8,31.1-2.9,31.1-2.8\r
					C31.1-2.7,31.1-2.8,31.1-2.8"></path><path fill="#FFFFFF" d="M23.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C23.8-0.5,24-0.1,24.3,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-2.8,23.5-2.9,23.5-2.8\r
					C23.5-2.7,23.5-2.8,23.5-2.8"></path><path fill="#FFFFFF" d="M15.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C15.7-1,15.8-0.8,16-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-2.8,15.8-2.9,15.8-2.8\r
					C15.8-2.7,15.8-2.8,15.8-2.8"></path><path fill="#FFFFFF" d="M8.2-2.8c0,0.1,0,0.1,0,0.2C8.1-2.5,8-2.5,8-2.5C7.9-2.4,7.9-2.2,7.9-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-1,8.2-0.8,8.3-0.7C8.5-0.5,8.7-0.1,8.9,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C9-3.5,8.8-3.4,8.7-3.4\r
					C8.5-3.3,8.6-3.2,8.4-3.1C8.3-3.1,8.2-3,8.2-2.9C8.2-2.8,8.2-2.9,8.2-2.8C8.1-2.7,8.1-2.8,8.2-2.8"></path><path fill="#FFFFFF" d="M0.5-2.8c0,0.1,0,0.1,0,0.2C0.4-2.5,0.4-2.5,0.3-2.5C0.3-2.4,0.2-2.2,0.2-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C0.3-1,0.5-0.8,0.7-0.7C0.9-0.5,1-0.1,1.3,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C3.3-0.8,3.4-1,3.5-1.2c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C1.3-3.5,1.2-3.4,1-3.4\r
					C0.9-3.3,0.9-3.2,0.7-3.1C0.6-3.1,0.5-3,0.5-2.9C0.5-2.8,0.5-2.9,0.5-2.8C0.5-2.7,0.5-2.8,0.5-2.8"></path></g></g></pattern></defs><path id="XMLID_1_" class="group-hover:fill-sub-color-dark" fill="#c5c5ca" d="M0.1,25.2c1.7-0.8,5-2.3,6.7-3.1c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0c0,0,0,0,0,0\r
	c0.1,0,0.3-0.1,0.4-0.2c4.7-4.8,9.3-9.6,14-14.3c0.7-0.7,1.3-1.4,2-2c0,0,0.1-0.1,0.1-0.1c1.1-1.4,1.1-3.3-0.2-4.5\r
	c-1.3-1.3-3.4-1.2-4.7,0.1c-4.7,4.8-9.3,9.6-14,14.3c-0.7,0.7-1.3,1.4-2,2c-0.2,0.2-0.2,0.4-0.1,0.6c-0.2,0.5-0.4,0.9-0.6,1.4\r
	c-0.1,0.2-0.2,0.4-0.3,0.7c-0.5,1.3-1.2,3.4-1.8,4.7 M22.9,4.3c-1-0.9-1.9-1.9-2.9-2.8C21.7,0.4,23.8,2.5,22.9,4.3z M17.6,3.9\r
	c0.5-0.5,1-1.1,1.6-1.6c1,1,2,2,3,3c-4.5,4.6-9,9.3-13.6,13.9c-0.5,0.5-1,1.1-1.6,1.6c-1-1-2-2-3-3C8.5,13.1,13,8.5,17.6,3.9z\r
	 M3.4,19.2c0.7,0.7,1.5,1.5,2.2,2.2c-0.7,0.3-1.4,0.6-2.2,1c-0.3-0.3-0.7-0.6-1-1C2.8,20.7,3.1,19.9,3.4,19.2z"></path>`,2),$t=[kt],St={"data-title":"\u522A\u9664"},At=["onClick"],Et=y0('<g id="trash"><path class="cls-1" d="M20.5,4H16.86l-.69-2.06A1.37,1.37,0,0,0,14.87,1H10.13a1.37,1.37,0,0,0-1.3.94L8.14,4H4.5a.5.5,0,0,0,0,1h.34l1,17.59A1.45,1.45,0,0,0,7.2,24H17.8a1.45,1.45,0,0,0,1.41-1.41L20.16,5h.34a.5.5,0,0,0,0-1ZM9.77,2.26A.38.38,0,0,1,10.13,2h4.74a.38.38,0,0,1,.36.26L15.81,4H9.19Zm8.44,20.27a.45.45,0,0,1-.41.47H7.2a.45.45,0,0,1-.41-.47L5.84,5H19.16Z"></path><path class="cls-1" d="M9.5,10a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,1,0v-7A.5.5,0,0,0,9.5,10Z"></path><path class="cls-1" d="M12.5,9a.5.5,0,0,0-.5.5v9a.5.5,0,0,0,1,0v-9A.5.5,0,0,0,12.5,9Z"></path><path class="cls-1" d="M15.5,10a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,1,0v-7A.5.5,0,0,0,15.5,10Z"></path></g>',1),zt=[Et],Bt=K({setup(e){const t=c0(),r=v0(),n=n0(),a=String(n.name),s=o(1),u=o([]),_=o({hasNextPage:!1,hasPreviousPage:!1,start:0,end:0,totalPagi:0}),g=o("");w0(async()=>{await d(1)});async function d(b){const $=await E4(Number(b),10,a);u.value=[],setTimeout(()=>{u.value=$.data.stargazingPagi.edges,_.value=$.data.stargazingPagi.pageInfo},300)}function p(b){g.value=b,t.openPopMsg("\u78BA\u5B9A\u522A\u9664\u6B64\u5730\u9EDE?",!0)}const h=z(()=>t.get_popMsgBtnReturn);async function f(){await h,h.value&&(await F1(g.value,a),await d(1))}function M(b){r.push("/board/stargazer/edit/"+b)}function w(b){s.value=Number(b),d(b)}return(b,$)=>{const k=M0,v=a0("router-link"),S=i0,E=$0;return F(),C(j,null,[c("div",ht,[i(k),c("div",ft,[c("div",Ct,[gt,i(v,{to:"/board/stargazer/add",class:"flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 btn text-center items-center p-0 justify-center"},{default:L(()=>[mt]),_:1})]),c("div",_t,[u.value.length>0&&u.value?(F(),C("table",bt,[xt,c("tbody",null,[(F(!0),C(j,null,h0(u.value,(A,P)=>(F(),C("tr",{key:P},[c("td",vt,x(A.stargazing_title),1),c("td",Mt,x(A.stargazing_address),1),c("td",yt,[(F(),C("svg",{onClick:I(N=>M(String(A.stargazing_lid)),["prevent"]),class:"fill-main-color-light inline-block w-28px h-auto group",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:a":"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",x:"0px",y:"0px",width:"26px",height:"26px",viewBox:"-0.8 -0.1 26 26","enable-background":"new -0.8 -0.1 26 26","xml:space":"preserve"},$t,8,wt))]),c("td",St,[(F(),C("svg",{onClick:I(N=>p(String(A.stargazing_lid)),["prevent"]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 25",class:"fill-main-color-light w-29px h-auto inline-block hover:fill-sub-color-dark"},zt,8,At))])]))),128))])])):J("",!0),i(u1,{onSelectPagi:w,hasNextPage:Boolean(_.value.hasNextPage),hasPreviousPage:Boolean(_.value.hasPreviousPage),totalPagi:_.value.totalPagi,actionPage:s.value},null,8,["hasNextPage","hasPreviousPage","totalPagi","actionPage"])]),i(S,{class:"absolute bottom-0 mobile:left-0"})])]),i(E,{onPopBtnCheck:f})],64)}}}),Pt={class:"flex items-stretch"},Dt={class:"laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative"},Lt={class:"w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto flex-wrap"},It={class:"text-white relative -left-2 -top-2 mobile:text-5xl w-table:w-3/4 w-full mobile:w-full w-table:m-0 mb-5"},Rt=["onClick"],Tt={class:"w-table:w-5/12 w-full"},Nt={class:"input-group mb-14"},Vt=c("h4",{class:"text-main-color-light font-normal"},"\u5730\u9EDE\u540D\u7A31",-1),Ot={class:"input-group mb-14"},jt=c("h4",{class:"text-main-color-light font-normal"},"\u5730\u5740\u8AAA\u660E",-1),qt={class:"input-group mb-14"},Ut=c("h4",{class:"text-main-color-light font-normal"},"\u5730\u9EDE\u4ECB\u7D39",-1),Ht={class:"input-group mb-14"},Zt={class:"map-search-bar flex justify-between"},Gt=c("h4",{class:"text-main-color-light font-normal"},"\u5730\u9EDE\u7D93\u7DEF\u5EA6",-1),Xt=["onClick"],Qt={class:"relative place-lat-lon-container flex space-x-3 justify-between before:content-[','] before:block before:absolute before:-bottom-1 before:left-1/2-3px before:text-main-color-light before:opacity-70"},Wt={class:"alert-message flex space-x-3 justify-between"},Yt={class:"w-table:w-5/12 w-full"},Jt={class:"upload-bar flex justify-between mt-7 mb-1"},Kt=c("h4",{class:"text-main-color-light font-normal"},"\u5730\u9EDE\u5716\u7247",-1),ce={class:"cursor-pointer admin-sbtn relative flex items-center justify-center"},te=q("\u4E0A\u50B3\u5716\u7247 "),ee={class:"text-main-color-light mb-7"},re={key:0,class:"w-table:w-10/12 w-full"},le=["onClick"],ne=c("span",{class:"w-12 h-16 inline-block"},[c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40","enable-background":"new 0 0 40 40"},[c("line",{class:"group-hover:stroke-sp-color-light transition-all duration-700",x1:"15",y1:"15",x2:"25",y2:"25",stroke:"#fff","stroke-width":"2.5","stroke-linecap":"round","stroke-miterlimit":"10"}),c("line",{class:"group-hover:stroke-sp-color-light transition-all duration-700",x1:"25",y1:"15",x2:"15",y2:"25",stroke:"#fff","stroke-width":"2.5","stroke-linecap":"round","stroke-miterlimit":"10"})])],-1),ae=[ne],d1=K({setup(e){const t=n0(),r=v0(),n=String(t.name),a=String(t.params.lid),s=c0(),u=z(()=>n==="AddSingleStargazer"?"\u65B0\u589E\u89C0\u661F\u5730\u9EDE":"\u7DE8\u8F2F\u89C0\u661F\u5730\u9EDE"),_=z(()=>n==="AddSingleStargazer"?"\u5132\u5B58\u65B0\u589E":"\u5132\u5B58\u7DE8\u8F2F"),g=o({validate:()=>({valid:!1})}),d=o(""),p=o(""),h=o(""),f=o(null),M=o(null),w=o(""),b=o(""),$={placeNameRef:l0.required,placeDescriptionRef:l0.required,placeIntroductionRef:l0.required,placeLatRef:l0.required,placeLonRef:l0.required,placeImgPathRef:l0.image},k=o(!1),v=o(null),S=o(!1);H1(v,Q=>{(S.value===!0||k.value===!0)&&E()});function E(){S.value=!1,setTimeout(()=>{k.value=!1},1e3)}async function A(){await T(),S.value=await!0,await setTimeout(()=>{k.value=!0},300)}let P=o({setLatLng:Q=>!0,setContent:Q=>!0,openOn:Q=>!0}),N=o(""),e0=o(0),Y=o(0),V=o(""),U=o(""),O=o(""),o0=o(""),C0=o([0,0]),p0=o({zoomControl:{setPosition:Q=>""},remove(){},on(Q,H){},setView:(Q,H)=>!0,closePopup(){},removeLayer(Q){}});const F0=x0.icon({iconUrl:"/img/mark-op.png",iconSize:[50,50]});function T(){p0.value=x0.map("map-container",{center:C0.value,zoom:10,attributionControl:!1,zoomControl:!0,scrollWheelZoom:!1,zoomAnimation:!0,fadeAnimation:!0,markerZoomAnimation:!0,attribution:'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}),x0.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png").addTo(p0.value),p0.value.zoomControl.setPosition("topright");let Q=x0.featureGroup().addTo(p0.value);P.value=x0.popup({offset:[0,-13],className:"stargazing-map-pop"}),p0.value.on("click",function(H){R(H,Q)})}function R(Q,H){let m0=Q.latlng.lat,_0=Q.latlng.lng,N0={stargazing_title:"",stargazing_latitude:m0,stargazing_longitude:_0,stargazing_image:"",stargazing_description:"",stargazing_address:"",stargazing_link:"",stargazing_lid:""};H.clearLayers(),t0(N0,H),P.value.setLatLng(Q.latlng),P.value.setContent(`<div class="admin-stargazer-pop">\u7DEF\u5EA6\uFF1A${m0}<br/>\u7D93\u5EA6\uFF1A${_0}<br /><button id="pop-check-btn">\u5957\u7528\u5EA7\u6A19</button></div>`),P.value.openOn(p0.value);const d0=document.getElementById("pop-check-btn");x0.DomEvent.on(d0,"click",b0=>{f0(N0),E(),m()}),p0.value.setView([m0,_0],10),e0.value=m0,Y.value=_0}function m(){f.value=e0.value,M.value=Y.value}function t0(Q,H){x0.marker([Q.stargazing_latitude,Q.stargazing_longitude],{icon:F0,title:Q.stargazing_title,opacity:1}).addTo(H)}function u0(){let Q={stargazing_title:"",stargazing_latitude:22.828574143383403,stargazing_longitude:121.15307085653819,stargazing_image:"",stargazing_description:"",stargazing_address:"",stargazing_link:"",stargazing_lid:""};C0.value=[Q.stargazing_latitude,Q.stargazing_longitude],f0(Q)}function f0(Q){N.value=Q.stargazing_title,e0.value=Q.stargazing_latitude,Y.value=Q.stargazing_longitude,V.value=Q.stargazing_image,U.value=Q.stargazing_description,O.value=Q.stargazing_address,o0.value=Q.stargazing_link}function z0(){p0.value.remove()}const g0=o(null);async function X(Q){let m0=Q.target.files;if(m0!==null){W.value=!1;const _0=await q0(m0[0],n);_0.data.singleUpload.errorTitle?alert(_0.data.singleUpload.errorTitle):(g0.value=_0.data.singleUpload,w.value=_0.data.singleUpload.filename,b.value=_0.data.singleUpload.s3Path)}}const W=o(!0),G0=z(()=>b.value?(setTimeout(()=>{W.value=!0},1e3),"https://puraliena.com"+b.value):(setTimeout(()=>{W.value=!0},1e3),"/assets/bg/default-image-438x438.gif")),T0=o(!1);function g1(){T0.value=!0,s.openPopMsg("\u78BA\u5B9A\u522A\u9664\u89C0\u661F\u5730\u9EDE?",!0)}function m1(){T0.value=!1,s.openPopMsg("\u78BA\u5B9A"+u.value+"?",!0)}const I0=z(()=>s.get_popMsgBtnReturn);async function _1(){await I0,I0.value&&!T0.value&&b1(),I0.value&&T0.value&&x1(),I0.value||(T0.value=!1)}const b1=P0(async()=>{const{valid:Q}=await g.value.validate();if(await I0,Q&&I0.value)if(n==="AddSingleStargazer"){console.log("\u53EF\u4EE5\u65B0\u589E");const H=await z4(d.value,f.value||0,M.value||0,b.value,h.value,p.value,!0,n);H.data.setNewStargazer.code&&(H.data.setNewStargazer.code>0?r.push("/board/stargazer"):s.openPopMsg(H.data.setNewStargazer.message,!1))}else{console.log("\u53EF\u4EE5\u7DE8\u8F2F");const H=String(t.params.lid),m0=await P4(H,d.value,f.value||0,M.value||0,b.value,h.value,p.value,n);m0.data.editStargazer.code&&(m0.data.editStargazer.code>0?r.push("/board/stargazer"):s.openPopMsg(m0.data.editStargazer.message,!1))}},1e3),x1=async()=>{console.log("\u53EF\u4EE5\u522A\u9664"),await F1(a,n),await setTimeout(()=>{r.push("/board/stargazer")},1e3)};async function v1(){const Q=String(t.params.lid);if(n==="EditSingleStargazer"&&Q){const H=await B4(Q,n);d.value=String(H.data.getSingleStargazer.stargazing_title),p.value=String(H.data.getSingleStargazer.stargazing_address),h.value=String(H.data.getSingleStargazer.stargazing_description),f.value=Number(H.data.getSingleStargazer.stargazing_latitude),M.value=Number(H.data.getSingleStargazer.stargazing_longitude);let m0=String(H.data.getSingleStargazer.stargazing_image),_0=m0.split("/");w.value=_0[_0.length-1],b.value=m0}}return v1(),w0(async()=>{await u0()}),t1(()=>{z0()}),(Q,H)=>{const m0=M0,_0=i0,N0=$0;return F(),C(j,null,[c("div",Pt,[i(m0),c("div",Dt,[c("div",Lt,[c("h1",It,x(l(u)),1),c("button",{onClick:I(m1,["prevent"]),class:"flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 text-center items-center p-0 justify-center"},x(l(_)),9,Rt)]),i(l(S0),{ref_key:"addPlaceForm",ref:g,"validation-schema":$,class:"w-9/12 flex flex-wrap mobile:w-11/12 table-container mobile:m-auto justify-between"},{default:L(({errors:d0})=>[c("div",Tt,[c("div",Nt,[Vt,i(l(r0),{name:"placeNameRef",type:"text",class:y(["h-16 block m-auto bottom-line-input text-lg",{"border-sp-color-dark border-opacity-100":d0.placeNameRef}]),modelValue:d.value,"onUpdate:modelValue":H[0]||(H[0]=b0=>d.value=b0)},null,8,["class","modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"},x(d0.placeNameRef),513),[[D,d0.placeNameRef]])]),c("div",Ot,[jt,i(l(r0),{name:"placeDescriptionRef",type:"text",class:y(["h-16 block m-auto bottom-line-input text-lg",{"border-sp-color-dark border-opacity-100":d0.placeDescriptionRef}]),modelValue:p.value,"onUpdate:modelValue":H[1]||(H[1]=b0=>p.value=b0)},null,8,["class","modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"},x(d0.placeDescriptionRef),513),[[D,d0.placeDescriptionRef]])]),c("div",qt,[Ut,i(l(r0),{name:"placeIntroductionRef",type:"text",as:"textarea",class:y(["bottom-line-input h-200px resize-none block m-auto text-lg pt-4",{"border-sp-color-dark border-opacity-100":d0.placeIntroductionRef}]),modelValue:h.value,"onUpdate:modelValue":H[2]||(H[2]=b0=>h.value=b0)},null,8,["class","modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"},x(d0.placeIntroductionRef),513),[[D,d0.placeIntroductionRef]])]),c("div",Ht,[c("div",Zt,[Gt,c("button",{class:"admin-sbtn",onClick:I(A,["prevent"])},"\u5730\u5716\u67E5\u8A62",8,Xt)]),c("div",Qt,[i(l(r0),{name:"placeLatRef",type:"text",placeholder:"Latitude",class:y(["bottom-line-input h-16",{"border-sp-color-dark border-opacity-100":d0.placeLatRef}]),modelValue:f.value,"onUpdate:modelValue":H[3]||(H[3]=b0=>f.value=b0)},null,8,["class","modelValue"]),i(l(r0),{name:"placeLonRef",type:"text",placeholder:"Longitude",class:y(["bottom-line-input h-16",{"border-sp-color-dark border-opacity-100":d0.placeLonRef}]),modelValue:M.value,"onUpdate:modelValue":H[4]||(H[4]=b0=>M.value=b0)},null,8,["class","modelValue"])]),c("div",Wt,[c("div",{class:y([{visible:d0.placeLatRef},"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"])},x(d0.placeLatRef),3),c("div",{class:y([{visible:d0.placeLonRef},"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"])},x(d0.placeLonRef),3)])])]),c("div",Yt,[c("div",{class:y(["animate__animated h-52 w-full bg-no-repeat bg-cover bg-center",[{animate__fadeIn:W.value},{animate__fadeOut:!W.value}]]),style:B0({"background-image":"url("+l(G0)+")"})},null,6),c("div",Jt,[Kt,c("label",ce,[te,i(l(r0),{name:"placeImgPathRef",modelValue:b.value,"onUpdate:modelValue":H[5]||(H[5]=b0=>b.value=b0),class:"hidden",type:"file",onChange:H[6]||(H[6]=b0=>X(b0))},null,8,["modelValue"])])]),c("h5",ee,x(w.value),1),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"},x(d0.placeImgPathRef),513),[[D,d0.placeImgPathRef]])]),l(n)==="EditSingleStargazer"?(F(),C("div",re,[c("button",{class:"admin-delete-sbtn",onClick:H[7]||(H[7]=I(b0=>g1(),["prevent"]))}," \u522A\u9664 ")])):J("",!0)]),_:1},512),i(_0,{class:"absolute bottom-0 mobile:left-0"})]),c("div",{class:y(["admin-stargazer-modal bg-black bg-opacity-50 w-full h-full fixed left-0 top-0 flex items-center justify-center animate__animated",[{animate__fadeOut:!S.value},{animate__fadeIn:S.value},{"z-9999":k.value},{"-z-50":!k.value}]])},[c("button",{class:"absolute right-4 top-4 button small text-white cursor-pointer group",title:"close",onClick:I(E,["prevent"])},ae,8,le),c("div",{id:"map-container",ref_key:"mapModalRef",ref:v,class:"w-5/6 h-4/5 modal-inner"},null,512)],2)]),i(N0,{onPopBtnCheck:_1})],64)}}});var E0=(e,t)=>{const r=e.__vccOpts||e;for(const[n,a]of t)r[n]=a;return r};const ie={};function se(e,t){const r=d1;return F(),s0(r)}var oe=E0(ie,[["render",se]]);const Fe={};function ue(e,t){const r=d1;return F(),s0(r)}var de=E0(Fe,[["render",ue]]);const pe={class:"flex items-stretch"},he={class:"laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative"},fe={class:"w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto"},Ce=c("h1",{class:"text-white relative -left-2 -top-2 mobile:text-5xl w-3/4 mobile:w-full"},"\u6587\u7AE0\u5206\u985E\u7BA1\u7406",-1),ge=q(" \u65B0\u589E "),me={class:"w-9/12 mobile:w-11/12 table-container mobile:m-auto"},_e={key:0,id:"responsive-table",class:"animate__animated animate__fadeIn"},be=c("thead",{class:"w-table:table-header-group hidden"},[c("tr",null,[c("th",null,"\u5206\u985E\u540D\u7A31"),c("th",null,"\u5206\u985E ID"),c("th",{class:"w-20 text-right"},"\u7DE8\u8F2F"),c("th",{class:"w-20 text-right"},"\u522A\u9664")])],-1),xe={"data-title":"\u540D\u7A31"},ve={"data-title":"ID"},Me={"data-title":"\u7DE8\u8F2F"},ye=["onClick"],we=y0(`<defs><pattern x="-73.8" y="198.9" width="69" height="69" patternUnits="userSpaceOnUse" id="\u5713\u9EDE\u5716\u6A23" viewBox="2.1 -70.9 69 69" overflow="visible"><g><polygon fill="none" points="71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9 			"></polygon><polygon fill="#F6BB60" points="71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9 			"></polygon><g><path fill="#FFFFFF" d="M61.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-71.7,61.8-71.7,61.8-71.7\r
					C61.8-71.6,61.8-71.6,61.8-71.7"></path><path fill="#FFFFFF" d="M54.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-71.7,54.1-71.7,54.1-71.7\r
					C54.1-71.6,54.1-71.6,54.1-71.7"></path><path fill="#FFFFFF" d="M46.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.4-71.7,46.4-71.7,46.4-71.7\r
					C46.4-71.6,46.4-71.6,46.4-71.7"></path><path fill="#FFFFFF" d="M38.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-71.7,38.8-71.7,38.8-71.7\r
					C38.8-71.6,38.8-71.6,38.8-71.7"></path><path fill="#FFFFFF" d="M31.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-71.7,31.1-71.7,31.1-71.7\r
					C31.1-71.6,31.1-71.6,31.1-71.7"></path><path fill="#FFFFFF" d="M23.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.4-71.7,23.4-71.7,23.4-71.7\r
					C23.4-71.6,23.4-71.6,23.4-71.7"></path><path fill="#FFFFFF" d="M15.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-71.7,15.8-71.7,15.8-71.7\r
					C15.8-71.6,15.8-71.6,15.8-71.7"></path><path fill="#FFFFFF" d="M8.1-71.7c0,0.1,0,0.1,0,0.2C8-71.4,8-71.4,7.9-71.3c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.1-71.7,8.1-71.7,8.1-71.7\r
					C8.1-71.6,8.1-71.6,8.1-71.7"></path><path fill="#FFFFFF" d="M0.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.8-69.4,1-69,1.2-68.9c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.4-71.7,0.4-71.7,0.4-71.7\r
					C0.4-71.6,0.4-71.6,0.4-71.7"></path></g><g><path fill="#FFFFFF" d="M69.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-71.7,69.4-71.7,69.4-71.7\r
					C69.4-71.6,69.4-71.6,69.4-71.7"></path></g><path fill="#FFFFFF" d="M0.5-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-69.4,1-69,1.3-68.9c0.2,0,0.4-0.1,0.5-0.1\r
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-71.7,0.5-71.7,0.5-71.7\r
				C0.5-71.6,0.5-71.6,0.5-71.7"></path><g><g><path fill="#FFFFFF" d="M69.4-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-64,69.4-64.1,69.4-64C69.4-64,69.4-64,69.4-64"></path><path fill="#FFFFFF" d="M61.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-64,61.8-64.1,61.8-64C61.8-64,61.8-64,61.8-64"></path><path fill="#FFFFFF" d="M54.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-64,54.1-64.1,54.1-64C54.1-64,54.1-64,54.1-64"></path><path fill="#FFFFFF" d="M46.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-64,46.5-64.1,46.5-64C46.5-64,46.5-64,46.5-64"></path><path fill="#FFFFFF" d="M38.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-64,38.8-64.1,38.8-64C38.8-64,38.8-64,38.8-64"></path><path fill="#FFFFFF" d="M31.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-64,31.1-64.1,31.1-64C31.1-64,31.1-64,31.1-64"></path><path fill="#FFFFFF" d="M23.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-64,23.5-64.1,23.5-64C23.5-64,23.5-64,23.5-64"></path><path fill="#FFFFFF" d="M15.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-64,15.8-64.1,15.8-64C15.8-64,15.8-64,15.8-64"></path><path fill="#FFFFFF" d="M8.2-64c0,0.1,0,0.1,0,0.2C8.1-63.7,8-63.7,8-63.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-62.2,8.2-62,8.3-61.9c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-64,8.2-64.1,8.2-64C8.1-64,8.1-64,8.2-64"></path><path fill="#FFFFFF" d="M0.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-62,3-61.9,3.1-62c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-64,0.5-64.1,0.5-64C0.5-64,0.5-64,0.5-64"></path></g><g><path fill="#FFFFFF" d="M69.4-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-56.4,69.4-56.4,69.4-56.3\r
						C69.4-56.3,69.4-56.3,69.4-56.3"></path><path fill="#FFFFFF" d="M61.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-56.4,61.8-56.4,61.8-56.3\r
						C61.8-56.3,61.8-56.3,61.8-56.3"></path><path fill="#FFFFFF" d="M54.1-56.3c0,0.1,0,0.1,0,0.2C54-56.1,54-56.1,53.9-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-56.4,54.1-56.4,54.1-56.3\r
						C54.1-56.3,54.1-56.3,54.1-56.3"></path><path fill="#FFFFFF" d="M46.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-56.4,46.5-56.4,46.5-56.3\r
						C46.5-56.3,46.5-56.3,46.5-56.3"></path><path fill="#FFFFFF" d="M38.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-56.4,38.8-56.4,38.8-56.3\r
						C38.8-56.3,38.8-56.3,38.8-56.3"></path><path fill="#FFFFFF" d="M31.1-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-56.4,31.1-56.4,31.1-56.3\r
						C31.1-56.3,31.1-56.3,31.1-56.3"></path><path fill="#FFFFFF" d="M23.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-56.4,23.5-56.4,23.5-56.3\r
						C23.5-56.3,23.5-56.3,23.5-56.3"></path><path fill="#FFFFFF" d="M15.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-56.4,15.8-56.4,15.8-56.3\r
						C15.8-56.3,15.8-56.3,15.8-56.3"></path><path fill="#FFFFFF" d="M8.2-56.3c0,0.1,0,0.1,0,0.2C8.1-56.1,8-56.1,8-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-56.4,8.2-56.4,8.2-56.3\r
						C8.1-56.3,8.1-56.3,8.2-56.3"></path><path fill="#FFFFFF" d="M0.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-56.4,0.5-56.4,0.5-56.3\r
						C0.5-56.3,0.5-56.3,0.5-56.3"></path></g><g><path fill="#FFFFFF" d="M69.4-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-48.7,69.4-48.8,69.4-48.7\r
						C69.4-48.7,69.4-48.7,69.4-48.7"></path><path fill="#FFFFFF" d="M61.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-48.7,61.8-48.8,61.8-48.7\r
						C61.8-48.7,61.8-48.7,61.8-48.7"></path><path fill="#FFFFFF" d="M54.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-48.7,54.1-48.8,54.1-48.7\r
						C54.1-48.7,54.1-48.7,54.1-48.7"></path><path fill="#FFFFFF" d="M46.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-48.7,46.5-48.8,46.5-48.7\r
						C46.5-48.7,46.5-48.7,46.5-48.7"></path><path fill="#FFFFFF" d="M38.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-48.7,38.8-48.8,38.8-48.7\r
						C38.8-48.7,38.8-48.7,38.8-48.7"></path><path fill="#FFFFFF" d="M31.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-48.7,31.1-48.8,31.1-48.7\r
						C31.1-48.7,31.1-48.7,31.1-48.7"></path><path fill="#FFFFFF" d="M23.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-48.7,23.5-48.8,23.5-48.7\r
						C23.5-48.7,23.5-48.7,23.5-48.7"></path><path fill="#FFFFFF" d="M15.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-48.7,15.8-48.8,15.8-48.7\r
						C15.8-48.7,15.8-48.7,15.8-48.7"></path><path fill="#FFFFFF" d="M8.2-48.7c0,0.1,0,0.1,0,0.2C8.1-48.4,8-48.4,8-48.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C8.5-46.4,8.7-46,8.9-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-48.7,8.2-48.8,8.2-48.7\r
						C8.1-48.7,8.1-48.7,8.2-48.7"></path><path fill="#FFFFFF" d="M0.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-46.4,1-46,1.3-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-48.7,0.5-48.8,0.5-48.7\r
						C0.5-48.7,0.5-48.7,0.5-48.7"></path></g><g><path fill="#FFFFFF" d="M69.4-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-41.1,69.4-41.1,69.4-41\r
						C69.4-41,69.4-41,69.4-41"></path><path fill="#FFFFFF" d="M61.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-41.1,61.8-41.1,61.8-41\r
						C61.8-41,61.8-41,61.8-41"></path><path fill="#FFFFFF" d="M54.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-41.1,54.1-41.1,54.1-41\r
						C54.1-41,54.1-41,54.1-41"></path><path fill="#FFFFFF" d="M46.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-41.1,46.5-41.1,46.5-41\r
						C46.5-41,46.5-41,46.5-41"></path><path fill="#FFFFFF" d="M38.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-41.1,38.8-41.1,38.8-41\r
						C38.8-41,38.8-41,38.8-41"></path><path fill="#FFFFFF" d="M31.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-41.1,31.1-41.1,31.1-41\r
						C31.1-41,31.1-41,31.1-41"></path><path fill="#FFFFFF" d="M23.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-41.1,23.5-41.1,23.5-41\r
						C23.5-41,23.5-41,23.5-41"></path><path fill="#FFFFFF" d="M15.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-41.1,15.8-41.1,15.8-41\r
						C15.8-41,15.8-41,15.8-41"></path><path fill="#FFFFFF" d="M8.2-41c0,0.1,0,0.1,0,0.2C8.1-40.8,8-40.8,8-40.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-41.1,8.2-41.1,8.2-41C8.1-41,8.1-41,8.2-41"></path><path fill="#FFFFFF" d="M0.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-39,3-39,3.1-39c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-41.1,0.5-41.1,0.5-41C0.5-41,0.5-41,0.5-41"></path></g><g><path fill="#FFFFFF" d="M69.4-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-33.4,69.4-33.5,69.4-33.4\r
						C69.4-33.4,69.4-33.4,69.4-33.4"></path><path fill="#FFFFFF" d="M61.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-33.4,61.8-33.5,61.8-33.4\r
						C61.8-33.4,61.8-33.4,61.8-33.4"></path><path fill="#FFFFFF" d="M54.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-33.4,54.1-33.5,54.1-33.4\r
						C54.1-33.4,54.1-33.4,54.1-33.4"></path><path fill="#FFFFFF" d="M46.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-33.4,46.5-33.5,46.5-33.4\r
						C46.5-33.4,46.5-33.4,46.5-33.4"></path><path fill="#FFFFFF" d="M38.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-33.4,38.8-33.5,38.8-33.4\r
						C38.8-33.4,38.8-33.4,38.8-33.4"></path><path fill="#FFFFFF" d="M31.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-33.4,31.1-33.5,31.1-33.4\r
						C31.1-33.4,31.1-33.4,31.1-33.4"></path><path fill="#FFFFFF" d="M23.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-33.4,23.5-33.5,23.5-33.4\r
						C23.5-33.4,23.5-33.4,23.5-33.4"></path><path fill="#FFFFFF" d="M15.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-33.4,15.8-33.5,15.8-33.4\r
						C15.8-33.4,15.8-33.4,15.8-33.4"></path><path fill="#FFFFFF" d="M8.2-33.4c0,0.1,0,0.1,0,0.2C8.1-33.1,8-33.1,8-33.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-33.4,8.2-33.5,8.2-33.4\r
						C8.1-33.4,8.1-33.4,8.2-33.4"></path><path fill="#FFFFFF" d="M0.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-33.4,0.5-33.5,0.5-33.4\r
						C0.5-33.4,0.5-33.4,0.5-33.4"></path></g><g><path fill="#FFFFFF" d="M69.4-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-25.8,69.4-25.8,69.4-25.7\r
						C69.4-25.7,69.4-25.7,69.4-25.7"></path><path fill="#FFFFFF" d="M61.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-25.8,61.8-25.8,61.8-25.7\r
						C61.8-25.7,61.8-25.7,61.8-25.7"></path><path fill="#FFFFFF" d="M54.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-25.8,54.1-25.8,54.1-25.7\r
						C54.1-25.7,54.1-25.7,54.1-25.7"></path><path fill="#FFFFFF" d="M46.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-25.8,46.5-25.8,46.5-25.7\r
						C46.5-25.7,46.5-25.7,46.5-25.7"></path><path fill="#FFFFFF" d="M38.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-25.8,38.8-25.8,38.8-25.7\r
						C38.8-25.7,38.8-25.7,38.8-25.7"></path><path fill="#FFFFFF" d="M31.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-25.8,31.1-25.8,31.1-25.7\r
						C31.1-25.7,31.1-25.7,31.1-25.7"></path><path fill="#FFFFFF" d="M23.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-25.8,23.5-25.8,23.5-25.7\r
						C23.5-25.7,23.5-25.7,23.5-25.7"></path><path fill="#FFFFFF" d="M15.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-25.8,15.8-25.8,15.8-25.7\r
						C15.8-25.7,15.8-25.7,15.8-25.7"></path><path fill="#FFFFFF" d="M8.2-25.7c0,0.1,0,0.1,0,0.2C8.1-25.4,8-25.5,8-25.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-24,8.2-23.8,8.3-23.6c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-25.8,8.2-25.8,8.2-25.7\r
						C8.1-25.7,8.1-25.7,8.2-25.7"></path><path fill="#FFFFFF" d="M0.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-23.5,1-23.1,1.3-23c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-25.8,0.5-25.8,0.5-25.7\r
						C0.5-25.7,0.5-25.7,0.5-25.7"></path></g><g><path fill="#FFFFFF" d="M69.4-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-18.1,69.4-18.2,69.4-18.1\r
						C69.4-18,69.4-18.1,69.4-18.1"></path><path fill="#FFFFFF" d="M61.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-18.1,61.8-18.2,61.8-18.1\r
						C61.8-18,61.8-18.1,61.8-18.1"></path><path fill="#FFFFFF" d="M54.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-18.1,54.1-18.2,54.1-18.1\r
						C54.1-18,54.1-18.1,54.1-18.1"></path><path fill="#FFFFFF" d="M46.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-18.1,46.5-18.2,46.5-18.1\r
						C46.5-18,46.5-18.1,46.5-18.1"></path><path fill="#FFFFFF" d="M38.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-18.1,38.8-18.2,38.8-18.1\r
						C38.8-18,38.8-18.1,38.8-18.1"></path><path fill="#FFFFFF" d="M31.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-18.1,31.1-18.2,31.1-18.1\r
						C31.1-18,31.1-18.1,31.1-18.1"></path><path fill="#FFFFFF" d="M23.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-18.1,23.5-18.2,23.5-18.1\r
						C23.5-18,23.5-18.1,23.5-18.1"></path><path fill="#FFFFFF" d="M15.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-18.1,15.8-18.2,15.8-18.1\r
						C15.8-18,15.8-18.1,15.8-18.1"></path><path fill="#FFFFFF" d="M8.2-18.1c0,0.1,0,0.1,0,0.2C8.1-17.8,8-17.8,8-17.8c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-16.3,8.2-16.1,8.3-16c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-18.1,8.2-18.2,8.2-18.1\r
						C8.1-18,8.1-18.1,8.2-18.1"></path><path fill="#FFFFFF" d="M0.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-16.1,3-16,3.1-16c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-18.1,0.5-18.2,0.5-18.1\r
						C0.5-18,0.5-18.1,0.5-18.1"></path></g><g><path fill="#FFFFFF" d="M69.4-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-10.5,69.4-10.5,69.4-10.4\r
						C69.4-10.4,69.4-10.4,69.4-10.4"></path><path fill="#FFFFFF" d="M61.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C63.9-8,63.8-8.2,64-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-10.5,61.8-10.5,61.8-10.4\r
						C61.8-10.4,61.8-10.4,61.8-10.4"></path><path fill="#FFFFFF" d="M54.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-10.5,54.1-10.5,54.1-10.4\r
						C54.1-10.4,54.1-10.4,54.1-10.4"></path><path fill="#FFFFFF" d="M46.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-10.5,46.5-10.5,46.5-10.4\r
						C46.5-10.4,46.5-10.4,46.5-10.4"></path><path fill="#FFFFFF" d="M38.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C40.9-8,40.8-8.2,41-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-10.5,38.8-10.5,38.8-10.4\r
						C38.8-10.4,38.8-10.4,38.8-10.4"></path><path fill="#FFFFFF" d="M31.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-10.5,31.1-10.5,31.1-10.4\r
						C31.1-10.4,31.1-10.4,31.1-10.4"></path><path fill="#FFFFFF" d="M23.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-10.5,23.5-10.5,23.5-10.4\r
						C23.5-10.4,23.5-10.4,23.5-10.4"></path><path fill="#FFFFFF" d="M15.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C17.9-8,17.8-8.2,18-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-10.5,15.8-10.5,15.8-10.4\r
						C15.8-10.4,15.8-10.4,15.8-10.4"></path><path fill="#FFFFFF" d="M8.2-10.4c0,0.1,0,0.1,0,0.2C8.1-10.1,8-10.2,8-10.1C7.9-10,7.9-9.8,7.9-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-8.7,8.2-8.5,8.3-8.3c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-10.5,8.2-10.5,8.2-10.4\r
						C8.1-10.4,8.1-10.4,8.2-10.4"></path><path fill="#FFFFFF" d="M0.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1C0.3-10,0.2-9.8,0.2-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-8.2,1-7.8,1.3-7.7c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C2.6-8,2.5-8.2,2.7-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-10.5,0.5-10.5,0.5-10.4\r
						C0.5-10.4,0.5-10.4,0.5-10.4"></path></g></g><g><path fill="#FFFFFF" d="M69.4-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C69.8-0.5,70-0.1,70.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-2.8,69.4-2.9,69.4-2.8\r
					C69.4-2.7,69.4-2.8,69.4-2.8"></path><path fill="#FFFFFF" d="M61.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C61.6-1,61.8-0.8,62-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-2.8,61.8-2.9,61.8-2.8\r
					C61.8-2.7,61.8-2.8,61.8-2.8"></path><path fill="#FFFFFF" d="M54.1-2.8c0,0.1,0,0.1,0,0.2C54-2.5,54-2.5,53.9-2.5c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C54-1,54.1-0.8,54.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C56.9-0.8,57-1,57.1-1.2c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-2.8,54.1-2.9,54.1-2.8\r
					C54.1-2.7,54.1-2.8,54.1-2.8"></path><path fill="#FFFFFF" d="M46.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C46.8-0.5,47-0.1,47.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-2.8,46.5-2.9,46.5-2.8\r
					C46.5-2.7,46.5-2.8,46.5-2.8"></path><path fill="#FFFFFF" d="M38.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C38.6-1,38.8-0.8,39-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-2.8,38.8-2.9,38.8-2.8\r
					C38.8-2.7,38.8-2.8,38.8-2.8"></path><path fill="#FFFFFF" d="M31.1-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C31-1,31.1-0.8,31.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-2.8,31.1-2.9,31.1-2.8\r
					C31.1-2.7,31.1-2.8,31.1-2.8"></path><path fill="#FFFFFF" d="M23.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C23.8-0.5,24-0.1,24.3,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-2.8,23.5-2.9,23.5-2.8\r
					C23.5-2.7,23.5-2.8,23.5-2.8"></path><path fill="#FFFFFF" d="M15.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C15.7-1,15.8-0.8,16-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-2.8,15.8-2.9,15.8-2.8\r
					C15.8-2.7,15.8-2.8,15.8-2.8"></path><path fill="#FFFFFF" d="M8.2-2.8c0,0.1,0,0.1,0,0.2C8.1-2.5,8-2.5,8-2.5C7.9-2.4,7.9-2.2,7.9-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-1,8.2-0.8,8.3-0.7C8.5-0.5,8.7-0.1,8.9,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C9-3.5,8.8-3.4,8.7-3.4\r
					C8.5-3.3,8.6-3.2,8.4-3.1C8.3-3.1,8.2-3,8.2-2.9C8.2-2.8,8.2-2.9,8.2-2.8C8.1-2.7,8.1-2.8,8.2-2.8"></path><path fill="#FFFFFF" d="M0.5-2.8c0,0.1,0,0.1,0,0.2C0.4-2.5,0.4-2.5,0.3-2.5C0.3-2.4,0.2-2.2,0.2-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C0.3-1,0.5-0.8,0.7-0.7C0.9-0.5,1-0.1,1.3,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C3.3-0.8,3.4-1,3.5-1.2c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C1.3-3.5,1.2-3.4,1-3.4\r
					C0.9-3.3,0.9-3.2,0.7-3.1C0.6-3.1,0.5-3,0.5-2.9C0.5-2.8,0.5-2.9,0.5-2.8C0.5-2.7,0.5-2.8,0.5-2.8"></path></g></g></pattern></defs><path id="XMLID_1_" class="group-hover:fill-sub-color-dark" fill="#c5c5ca" d="M0.1,25.2c1.7-0.8,5-2.3,6.7-3.1c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0c0,0,0,0,0,0\r
	c0.1,0,0.3-0.1,0.4-0.2c4.7-4.8,9.3-9.6,14-14.3c0.7-0.7,1.3-1.4,2-2c0,0,0.1-0.1,0.1-0.1c1.1-1.4,1.1-3.3-0.2-4.5\r
	c-1.3-1.3-3.4-1.2-4.7,0.1c-4.7,4.8-9.3,9.6-14,14.3c-0.7,0.7-1.3,1.4-2,2c-0.2,0.2-0.2,0.4-0.1,0.6c-0.2,0.5-0.4,0.9-0.6,1.4\r
	c-0.1,0.2-0.2,0.4-0.3,0.7c-0.5,1.3-1.2,3.4-1.8,4.7 M22.9,4.3c-1-0.9-1.9-1.9-2.9-2.8C21.7,0.4,23.8,2.5,22.9,4.3z M17.6,3.9\r
	c0.5-0.5,1-1.1,1.6-1.6c1,1,2,2,3,3c-4.5,4.6-9,9.3-13.6,13.9c-0.5,0.5-1,1.1-1.6,1.6c-1-1-2-2-3-3C8.5,13.1,13,8.5,17.6,3.9z\r
	 M3.4,19.2c0.7,0.7,1.5,1.5,2.2,2.2c-0.7,0.3-1.4,0.6-2.2,1c-0.3-0.3-0.7-0.6-1-1C2.8,20.7,3.1,19.9,3.4,19.2z"></path>`,2),ke=[we],$e={"data-title":"\u522A\u9664"},Se=["onClick"],Ae=y0('<g id="trash"><path class="cls-1" d="M20.5,4H16.86l-.69-2.06A1.37,1.37,0,0,0,14.87,1H10.13a1.37,1.37,0,0,0-1.3.94L8.14,4H4.5a.5.5,0,0,0,0,1h.34l1,17.59A1.45,1.45,0,0,0,7.2,24H17.8a1.45,1.45,0,0,0,1.41-1.41L20.16,5h.34a.5.5,0,0,0,0-1ZM9.77,2.26A.38.38,0,0,1,10.13,2h4.74a.38.38,0,0,1,.36.26L15.81,4H9.19Zm8.44,20.27a.45.45,0,0,1-.41.47H7.2a.45.45,0,0,1-.41-.47L5.84,5H19.16Z"></path><path class="cls-1" d="M9.5,10a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,1,0v-7A.5.5,0,0,0,9.5,10Z"></path><path class="cls-1" d="M12.5,9a.5.5,0,0,0-.5.5v9a.5.5,0,0,0,1,0v-9A.5.5,0,0,0,12.5,9Z"></path><path class="cls-1" d="M15.5,10a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,1,0v-7A.5.5,0,0,0,15.5,10Z"></path></g>',1),Ee=[Ae],ze=K({setup(e){const t=c0(),r=v0(),n=n0(),a=String(n.name),s=o([]),u=o("");w0(async()=>{await h()});function _(f){u.value=f,t.openPopMsg("\u78BA\u5B9A\u522A\u9664\u6B64\u5206\u985E?",!0)}const g=z(()=>t.get_popMsgBtnReturn);async function d(){await g,g.value&&(await l1(u.value,a),await h())}function p(f){r.push("/board/categories/edit/"+f)}async function h(){const M=(await L0(a,!1)).data.artistsCategories.filter(w=>w.post_category_name!=="\u5168\u90E8\u5206\u985E");s.value=M}return(f,M)=>{const w=M0,b=a0("router-link"),$=i0,k=$0;return F(),C(j,null,[c("div",pe,[i(w),c("div",he,[c("div",fe,[Ce,i(b,{to:"/board/categories/add",class:"flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 btn text-center items-center p-0 justify-center"},{default:L(()=>[ge]),_:1})]),c("div",me,[s.value.length>0&&s.value?(F(),C("table",_e,[be,c("tbody",null,[(F(!0),C(j,null,h0(s.value,(v,S)=>(F(),C("tr",{key:S},[c("td",xe,x(v.post_category_name),1),c("td",ve,x(v.post_category_id),1),c("td",Me,[(F(),C("svg",{onClick:I(E=>p(String(v.post_category_id)),["prevent"]),class:"fill-main-color-light inline-block w-28px h-auto group",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:a":"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",x:"0px",y:"0px",width:"26px",height:"26px",viewBox:"-0.8 -0.1 26 26","enable-background":"new -0.8 -0.1 26 26","xml:space":"preserve"},ke,8,ye))]),c("td",$e,[(F(),C("svg",{onClick:I(E=>_(String(v.post_category_id)),["prevent"]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 25",class:"fill-main-color-light w-29px h-auto inline-block hover:fill-sub-color-dark"},Ee,8,Se))])]))),128))])])):J("",!0)]),i($,{class:"absolute bottom-0 mobile:left-0"})])]),i(k,{onPopBtnCheck:d})],64)}}}),Be={class:"flex items-stretch"},Pe={class:"laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative"},De={class:"w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto flex-wrap"},Le={class:"text-white relative -left-2 -top-2 mobile:text-5xl w-table:w-3/4 w-full mobile:w-full w-table:m-0 mb-5"},Ie=["onClick"],Re={class:"w-table:w-5/12 w-full"},Te={class:"input-group mb-14"},Ne=c("h4",{class:"text-main-color-light font-normal"},"\u5206\u985E\u540D\u7A31",-1),Ve={class:"input-group mb-14"},Oe=c("h4",{class:"text-main-color-light font-normal"},"\u5206\u985E ID",-1),je={key:0,class:"w-table:w-9/12 w-full"},p1=K({setup(e){const t=n0(),r=v0(),n=String(t.name),a=String(t.params.cid),s=c0(),u=z(()=>n==="AddSingleCategories"?"\u65B0\u589E\u6587\u7AE0\u5206\u985E":"\u7DE8\u8F2F\u6587\u7AE0\u5206\u985E"),_=z(()=>n==="AddSingleCategories"?"\u5132\u5B58\u65B0\u589E":"\u5132\u5B58\u7DE8\u8F2F"),g=o({validate:()=>({valid:!1})}),d=o(""),p=o(""),h={categoryNameRef:l0.required,categoryIdRef:l0.required},f=o(!1);function M(){f.value=!0,s.openPopMsg("\u78BA\u5B9A\u522A\u9664\u6587\u7AE0\u5206\u985E?",!0)}function w(){f.value=!1,s.openPopMsg("\u78BA\u5B9A"+u.value+"?",!0)}const b=z(()=>s.get_popMsgBtnReturn);async function $(){await b,b.value&&!f.value&&k(),b.value&&f.value&&v(),b.value||(f.value=!1)}const k=P0(async()=>{const{valid:E}=await g.value.validate();if(await b,E&&b.value)if(n==="AddSingleCategories"){console.log("\u53EF\u4EE5\u65B0\u589E");const A=await m2(String(d.value),String(p.value),n);A.data.setNewCategory.code&&(A.data.setNewCategory.code>0?r.push("/board/categories"):s.openPopMsg(A.data.setNewCategory.message,!1))}else{console.log("\u53EF\u4EE5\u7DE8\u8F2F");const A=await _2(String(d.value),a,n);A.data.mutCategory.code&&(A.data.mutCategory.code>0?r.push("/board/categories"):s.openPopMsg(A.data.mutCategory.message,!1))}},1e3),v=async()=>{console.log("\u53EF\u4EE5\u522A\u9664"),await l1(a,n),await setTimeout(()=>{r.push("/board/categories")},1e3)};async function S(){const E=await b2(a,n);d.value=String(E.data.getSingleCategory.post_category_name),p.value=String(E.data.getSingleCategory.post_category_id)}return S(),(E,A)=>{const P=M0,N=i0,e0=$0;return F(),C(j,null,[c("div",Be,[i(P),c("div",Pe,[c("div",De,[c("h1",Le,x(l(u)),1),c("button",{onClick:I(w,["prevent"]),class:"flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 btn text-center items-center p-0 justify-center"},x(l(_)),9,Ie)]),i(l(S0),{ref_key:"addCategoriesForm",ref:g,"validation-schema":h,class:"w-9/12 flex flex-wrap mobile:w-11/12 table-container mobile:m-auto justify-between"},{default:L(({errors:Y})=>[c("div",Re,[c("div",Te,[Ne,i(l(r0),{name:"categoryNameRef",type:"text",class:y(["h-16 block m-auto bottom-line-input text-lg",{"border-sp-color-dark border-opacity-100":Y.categoryNameRef}]),modelValue:d.value,"onUpdate:modelValue":A[0]||(A[0]=V=>d.value=V)},null,8,["class","modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"},x(Y.categoryNameRef),513),[[D,Y.categoryNameRef]])]),c("div",Ve,[Oe,i(l(r0),{name:"categoryIdRef",type:"text",class:y(["h-16 block m-auto bottom-line-input text-lg",[{"border-sp-color-dark border-opacity-100":Y.categoryIdRef},{"pointer-events-none border-0":l(n)==="EditSingleCategories"}]]),modelValue:p.value,"onUpdate:modelValue":A[1]||(A[1]=V=>p.value=V)},null,8,["class","modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"},x(Y.categoryIdRef),513),[[D,Y.categoryIdRef]])])])]),_:1},512),l(n)==="EditSingleCategories"?(F(),C("div",je,[c("button",{class:"admin-delete-sbtn",onClick:A[2]||(A[2]=I(Y=>M(),["prevent"]))}," \u522A\u9664 ")])):J("",!0),i(N,{class:"absolute bottom-0 mobile:left-0"})])]),i(e0,{onPopBtnCheck:$})],64)}}}),qe={};function Ue(e,t){const r=p1;return F(),s0(r)}var He=E0(qe,[["render",Ue]]);const Ze={};function Ge(e,t){const r=p1;return F(),s0(r)}var Xe=E0(Ze,[["render",Ge]]);const Qe={class:"flex items-stretch"},We={class:"laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative"},Ye={class:"w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto"},Je=c("h1",{class:"text-white relative -left-2 -top-2 mobile:text-5xl w-3/4 mobile:w-full"},"\u6587\u7AE0\u5217\u8868",-1),Ke=q(" \u65B0\u589E "),cr={class:"w-9/12 mobile:w-11/12 table-container mobile:m-auto"},tr={key:0,id:"responsive-table",class:"animate__animated animate__fadeIn"},er=c("thead",{class:"w-table:table-header-group hidden"},[c("tr",null,[c("th",null,"\u6587\u7AE0\u6A19\u984C"),c("th",null,"\u6587\u7AE0\u5206\u985E"),c("th",null,"\u767C\u4F48\u6642\u9593"),c("th",{class:"w-20 text-right"},"\u7DE8\u8F2F"),c("th",{class:"w-20 text-right"},"\u522A\u9664")])],-1),rr={"data-title":"\u6A19\u984C"},lr={"data-title":"\u5206\u985E"},nr={"data-title":"\u6642\u9593"},ar={"data-title":"\u7DE8\u8F2F"},ir=["onClick"],sr=y0(`<defs><pattern x="-73.8" y="198.9" width="69" height="69" patternUnits="userSpaceOnUse" id="\u5713\u9EDE\u5716\u6A23" viewBox="2.1 -70.9 69 69" overflow="visible"><g><polygon fill="none" points="71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9 			"></polygon><polygon fill="#F6BB60" points="71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9 			"></polygon><g><path fill="#FFFFFF" d="M61.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-71.7,61.8-71.7,61.8-71.7\r
					C61.8-71.6,61.8-71.6,61.8-71.7"></path><path fill="#FFFFFF" d="M54.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-71.7,54.1-71.7,54.1-71.7\r
					C54.1-71.6,54.1-71.6,54.1-71.7"></path><path fill="#FFFFFF" d="M46.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.4-71.7,46.4-71.7,46.4-71.7\r
					C46.4-71.6,46.4-71.6,46.4-71.7"></path><path fill="#FFFFFF" d="M38.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-71.7,38.8-71.7,38.8-71.7\r
					C38.8-71.6,38.8-71.6,38.8-71.7"></path><path fill="#FFFFFF" d="M31.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-71.7,31.1-71.7,31.1-71.7\r
					C31.1-71.6,31.1-71.6,31.1-71.7"></path><path fill="#FFFFFF" d="M23.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.4-71.7,23.4-71.7,23.4-71.7\r
					C23.4-71.6,23.4-71.6,23.4-71.7"></path><path fill="#FFFFFF" d="M15.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-71.7,15.8-71.7,15.8-71.7\r
					C15.8-71.6,15.8-71.6,15.8-71.7"></path><path fill="#FFFFFF" d="M8.1-71.7c0,0.1,0,0.1,0,0.2C8-71.4,8-71.4,7.9-71.3c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.1-71.7,8.1-71.7,8.1-71.7\r
					C8.1-71.6,8.1-71.6,8.1-71.7"></path><path fill="#FFFFFF" d="M0.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.8-69.4,1-69,1.2-68.9c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.4-71.7,0.4-71.7,0.4-71.7\r
					C0.4-71.6,0.4-71.6,0.4-71.7"></path></g><g><path fill="#FFFFFF" d="M69.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-71.7,69.4-71.7,69.4-71.7\r
					C69.4-71.6,69.4-71.6,69.4-71.7"></path></g><path fill="#FFFFFF" d="M0.5-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-69.4,1-69,1.3-68.9c0.2,0,0.4-0.1,0.5-0.1\r
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-71.7,0.5-71.7,0.5-71.7\r
				C0.5-71.6,0.5-71.6,0.5-71.7"></path><g><g><path fill="#FFFFFF" d="M69.4-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-64,69.4-64.1,69.4-64C69.4-64,69.4-64,69.4-64"></path><path fill="#FFFFFF" d="M61.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-64,61.8-64.1,61.8-64C61.8-64,61.8-64,61.8-64"></path><path fill="#FFFFFF" d="M54.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-64,54.1-64.1,54.1-64C54.1-64,54.1-64,54.1-64"></path><path fill="#FFFFFF" d="M46.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-64,46.5-64.1,46.5-64C46.5-64,46.5-64,46.5-64"></path><path fill="#FFFFFF" d="M38.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-64,38.8-64.1,38.8-64C38.8-64,38.8-64,38.8-64"></path><path fill="#FFFFFF" d="M31.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-64,31.1-64.1,31.1-64C31.1-64,31.1-64,31.1-64"></path><path fill="#FFFFFF" d="M23.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-64,23.5-64.1,23.5-64C23.5-64,23.5-64,23.5-64"></path><path fill="#FFFFFF" d="M15.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-64,15.8-64.1,15.8-64C15.8-64,15.8-64,15.8-64"></path><path fill="#FFFFFF" d="M8.2-64c0,0.1,0,0.1,0,0.2C8.1-63.7,8-63.7,8-63.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-62.2,8.2-62,8.3-61.9c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-64,8.2-64.1,8.2-64C8.1-64,8.1-64,8.2-64"></path><path fill="#FFFFFF" d="M0.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-62,3-61.9,3.1-62c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-64,0.5-64.1,0.5-64C0.5-64,0.5-64,0.5-64"></path></g><g><path fill="#FFFFFF" d="M69.4-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-56.4,69.4-56.4,69.4-56.3\r
						C69.4-56.3,69.4-56.3,69.4-56.3"></path><path fill="#FFFFFF" d="M61.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-56.4,61.8-56.4,61.8-56.3\r
						C61.8-56.3,61.8-56.3,61.8-56.3"></path><path fill="#FFFFFF" d="M54.1-56.3c0,0.1,0,0.1,0,0.2C54-56.1,54-56.1,53.9-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-56.4,54.1-56.4,54.1-56.3\r
						C54.1-56.3,54.1-56.3,54.1-56.3"></path><path fill="#FFFFFF" d="M46.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-56.4,46.5-56.4,46.5-56.3\r
						C46.5-56.3,46.5-56.3,46.5-56.3"></path><path fill="#FFFFFF" d="M38.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-56.4,38.8-56.4,38.8-56.3\r
						C38.8-56.3,38.8-56.3,38.8-56.3"></path><path fill="#FFFFFF" d="M31.1-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-56.4,31.1-56.4,31.1-56.3\r
						C31.1-56.3,31.1-56.3,31.1-56.3"></path><path fill="#FFFFFF" d="M23.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-56.4,23.5-56.4,23.5-56.3\r
						C23.5-56.3,23.5-56.3,23.5-56.3"></path><path fill="#FFFFFF" d="M15.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-56.4,15.8-56.4,15.8-56.3\r
						C15.8-56.3,15.8-56.3,15.8-56.3"></path><path fill="#FFFFFF" d="M8.2-56.3c0,0.1,0,0.1,0,0.2C8.1-56.1,8-56.1,8-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-56.4,8.2-56.4,8.2-56.3\r
						C8.1-56.3,8.1-56.3,8.2-56.3"></path><path fill="#FFFFFF" d="M0.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-56.4,0.5-56.4,0.5-56.3\r
						C0.5-56.3,0.5-56.3,0.5-56.3"></path></g><g><path fill="#FFFFFF" d="M69.4-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-48.7,69.4-48.8,69.4-48.7\r
						C69.4-48.7,69.4-48.7,69.4-48.7"></path><path fill="#FFFFFF" d="M61.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-48.7,61.8-48.8,61.8-48.7\r
						C61.8-48.7,61.8-48.7,61.8-48.7"></path><path fill="#FFFFFF" d="M54.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-48.7,54.1-48.8,54.1-48.7\r
						C54.1-48.7,54.1-48.7,54.1-48.7"></path><path fill="#FFFFFF" d="M46.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-48.7,46.5-48.8,46.5-48.7\r
						C46.5-48.7,46.5-48.7,46.5-48.7"></path><path fill="#FFFFFF" d="M38.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-48.7,38.8-48.8,38.8-48.7\r
						C38.8-48.7,38.8-48.7,38.8-48.7"></path><path fill="#FFFFFF" d="M31.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-48.7,31.1-48.8,31.1-48.7\r
						C31.1-48.7,31.1-48.7,31.1-48.7"></path><path fill="#FFFFFF" d="M23.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-48.7,23.5-48.8,23.5-48.7\r
						C23.5-48.7,23.5-48.7,23.5-48.7"></path><path fill="#FFFFFF" d="M15.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-48.7,15.8-48.8,15.8-48.7\r
						C15.8-48.7,15.8-48.7,15.8-48.7"></path><path fill="#FFFFFF" d="M8.2-48.7c0,0.1,0,0.1,0,0.2C8.1-48.4,8-48.4,8-48.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C8.5-46.4,8.7-46,8.9-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-48.7,8.2-48.8,8.2-48.7\r
						C8.1-48.7,8.1-48.7,8.2-48.7"></path><path fill="#FFFFFF" d="M0.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-46.4,1-46,1.3-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-48.7,0.5-48.8,0.5-48.7\r
						C0.5-48.7,0.5-48.7,0.5-48.7"></path></g><g><path fill="#FFFFFF" d="M69.4-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-41.1,69.4-41.1,69.4-41\r
						C69.4-41,69.4-41,69.4-41"></path><path fill="#FFFFFF" d="M61.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-41.1,61.8-41.1,61.8-41\r
						C61.8-41,61.8-41,61.8-41"></path><path fill="#FFFFFF" d="M54.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-41.1,54.1-41.1,54.1-41\r
						C54.1-41,54.1-41,54.1-41"></path><path fill="#FFFFFF" d="M46.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-41.1,46.5-41.1,46.5-41\r
						C46.5-41,46.5-41,46.5-41"></path><path fill="#FFFFFF" d="M38.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-41.1,38.8-41.1,38.8-41\r
						C38.8-41,38.8-41,38.8-41"></path><path fill="#FFFFFF" d="M31.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-41.1,31.1-41.1,31.1-41\r
						C31.1-41,31.1-41,31.1-41"></path><path fill="#FFFFFF" d="M23.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-41.1,23.5-41.1,23.5-41\r
						C23.5-41,23.5-41,23.5-41"></path><path fill="#FFFFFF" d="M15.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-41.1,15.8-41.1,15.8-41\r
						C15.8-41,15.8-41,15.8-41"></path><path fill="#FFFFFF" d="M8.2-41c0,0.1,0,0.1,0,0.2C8.1-40.8,8-40.8,8-40.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-41.1,8.2-41.1,8.2-41C8.1-41,8.1-41,8.2-41"></path><path fill="#FFFFFF" d="M0.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-39,3-39,3.1-39c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-41.1,0.5-41.1,0.5-41C0.5-41,0.5-41,0.5-41"></path></g><g><path fill="#FFFFFF" d="M69.4-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-33.4,69.4-33.5,69.4-33.4\r
						C69.4-33.4,69.4-33.4,69.4-33.4"></path><path fill="#FFFFFF" d="M61.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-33.4,61.8-33.5,61.8-33.4\r
						C61.8-33.4,61.8-33.4,61.8-33.4"></path><path fill="#FFFFFF" d="M54.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-33.4,54.1-33.5,54.1-33.4\r
						C54.1-33.4,54.1-33.4,54.1-33.4"></path><path fill="#FFFFFF" d="M46.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-33.4,46.5-33.5,46.5-33.4\r
						C46.5-33.4,46.5-33.4,46.5-33.4"></path><path fill="#FFFFFF" d="M38.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-33.4,38.8-33.5,38.8-33.4\r
						C38.8-33.4,38.8-33.4,38.8-33.4"></path><path fill="#FFFFFF" d="M31.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-33.4,31.1-33.5,31.1-33.4\r
						C31.1-33.4,31.1-33.4,31.1-33.4"></path><path fill="#FFFFFF" d="M23.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-33.4,23.5-33.5,23.5-33.4\r
						C23.5-33.4,23.5-33.4,23.5-33.4"></path><path fill="#FFFFFF" d="M15.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-33.4,15.8-33.5,15.8-33.4\r
						C15.8-33.4,15.8-33.4,15.8-33.4"></path><path fill="#FFFFFF" d="M8.2-33.4c0,0.1,0,0.1,0,0.2C8.1-33.1,8-33.1,8-33.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-33.4,8.2-33.5,8.2-33.4\r
						C8.1-33.4,8.1-33.4,8.2-33.4"></path><path fill="#FFFFFF" d="M0.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-33.4,0.5-33.5,0.5-33.4\r
						C0.5-33.4,0.5-33.4,0.5-33.4"></path></g><g><path fill="#FFFFFF" d="M69.4-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-25.8,69.4-25.8,69.4-25.7\r
						C69.4-25.7,69.4-25.7,69.4-25.7"></path><path fill="#FFFFFF" d="M61.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-25.8,61.8-25.8,61.8-25.7\r
						C61.8-25.7,61.8-25.7,61.8-25.7"></path><path fill="#FFFFFF" d="M54.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-25.8,54.1-25.8,54.1-25.7\r
						C54.1-25.7,54.1-25.7,54.1-25.7"></path><path fill="#FFFFFF" d="M46.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-25.8,46.5-25.8,46.5-25.7\r
						C46.5-25.7,46.5-25.7,46.5-25.7"></path><path fill="#FFFFFF" d="M38.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-25.8,38.8-25.8,38.8-25.7\r
						C38.8-25.7,38.8-25.7,38.8-25.7"></path><path fill="#FFFFFF" d="M31.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-25.8,31.1-25.8,31.1-25.7\r
						C31.1-25.7,31.1-25.7,31.1-25.7"></path><path fill="#FFFFFF" d="M23.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-25.8,23.5-25.8,23.5-25.7\r
						C23.5-25.7,23.5-25.7,23.5-25.7"></path><path fill="#FFFFFF" d="M15.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-25.8,15.8-25.8,15.8-25.7\r
						C15.8-25.7,15.8-25.7,15.8-25.7"></path><path fill="#FFFFFF" d="M8.2-25.7c0,0.1,0,0.1,0,0.2C8.1-25.4,8-25.5,8-25.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-24,8.2-23.8,8.3-23.6c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-25.8,8.2-25.8,8.2-25.7\r
						C8.1-25.7,8.1-25.7,8.2-25.7"></path><path fill="#FFFFFF" d="M0.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-23.5,1-23.1,1.3-23c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-25.8,0.5-25.8,0.5-25.7\r
						C0.5-25.7,0.5-25.7,0.5-25.7"></path></g><g><path fill="#FFFFFF" d="M69.4-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-18.1,69.4-18.2,69.4-18.1\r
						C69.4-18,69.4-18.1,69.4-18.1"></path><path fill="#FFFFFF" d="M61.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-18.1,61.8-18.2,61.8-18.1\r
						C61.8-18,61.8-18.1,61.8-18.1"></path><path fill="#FFFFFF" d="M54.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-18.1,54.1-18.2,54.1-18.1\r
						C54.1-18,54.1-18.1,54.1-18.1"></path><path fill="#FFFFFF" d="M46.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-18.1,46.5-18.2,46.5-18.1\r
						C46.5-18,46.5-18.1,46.5-18.1"></path><path fill="#FFFFFF" d="M38.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-18.1,38.8-18.2,38.8-18.1\r
						C38.8-18,38.8-18.1,38.8-18.1"></path><path fill="#FFFFFF" d="M31.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-18.1,31.1-18.2,31.1-18.1\r
						C31.1-18,31.1-18.1,31.1-18.1"></path><path fill="#FFFFFF" d="M23.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-18.1,23.5-18.2,23.5-18.1\r
						C23.5-18,23.5-18.1,23.5-18.1"></path><path fill="#FFFFFF" d="M15.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-18.1,15.8-18.2,15.8-18.1\r
						C15.8-18,15.8-18.1,15.8-18.1"></path><path fill="#FFFFFF" d="M8.2-18.1c0,0.1,0,0.1,0,0.2C8.1-17.8,8-17.8,8-17.8c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-16.3,8.2-16.1,8.3-16c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-18.1,8.2-18.2,8.2-18.1\r
						C8.1-18,8.1-18.1,8.2-18.1"></path><path fill="#FFFFFF" d="M0.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-16.1,3-16,3.1-16c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-18.1,0.5-18.2,0.5-18.1\r
						C0.5-18,0.5-18.1,0.5-18.1"></path></g><g><path fill="#FFFFFF" d="M69.4-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-10.5,69.4-10.5,69.4-10.4\r
						C69.4-10.4,69.4-10.4,69.4-10.4"></path><path fill="#FFFFFF" d="M61.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C63.9-8,63.8-8.2,64-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-10.5,61.8-10.5,61.8-10.4\r
						C61.8-10.4,61.8-10.4,61.8-10.4"></path><path fill="#FFFFFF" d="M54.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-10.5,54.1-10.5,54.1-10.4\r
						C54.1-10.4,54.1-10.4,54.1-10.4"></path><path fill="#FFFFFF" d="M46.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-10.5,46.5-10.5,46.5-10.4\r
						C46.5-10.4,46.5-10.4,46.5-10.4"></path><path fill="#FFFFFF" d="M38.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C40.9-8,40.8-8.2,41-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-10.5,38.8-10.5,38.8-10.4\r
						C38.8-10.4,38.8-10.4,38.8-10.4"></path><path fill="#FFFFFF" d="M31.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-10.5,31.1-10.5,31.1-10.4\r
						C31.1-10.4,31.1-10.4,31.1-10.4"></path><path fill="#FFFFFF" d="M23.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-10.5,23.5-10.5,23.5-10.4\r
						C23.5-10.4,23.5-10.4,23.5-10.4"></path><path fill="#FFFFFF" d="M15.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C17.9-8,17.8-8.2,18-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-10.5,15.8-10.5,15.8-10.4\r
						C15.8-10.4,15.8-10.4,15.8-10.4"></path><path fill="#FFFFFF" d="M8.2-10.4c0,0.1,0,0.1,0,0.2C8.1-10.1,8-10.2,8-10.1C7.9-10,7.9-9.8,7.9-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-8.7,8.2-8.5,8.3-8.3c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-10.5,8.2-10.5,8.2-10.4\r
						C8.1-10.4,8.1-10.4,8.2-10.4"></path><path fill="#FFFFFF" d="M0.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1C0.3-10,0.2-9.8,0.2-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-8.2,1-7.8,1.3-7.7c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C2.6-8,2.5-8.2,2.7-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-10.5,0.5-10.5,0.5-10.4\r
						C0.5-10.4,0.5-10.4,0.5-10.4"></path></g></g><g><path fill="#FFFFFF" d="M69.4-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C69.8-0.5,70-0.1,70.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-2.8,69.4-2.9,69.4-2.8\r
					C69.4-2.7,69.4-2.8,69.4-2.8"></path><path fill="#FFFFFF" d="M61.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C61.6-1,61.8-0.8,62-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-2.8,61.8-2.9,61.8-2.8\r
					C61.8-2.7,61.8-2.8,61.8-2.8"></path><path fill="#FFFFFF" d="M54.1-2.8c0,0.1,0,0.1,0,0.2C54-2.5,54-2.5,53.9-2.5c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C54-1,54.1-0.8,54.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C56.9-0.8,57-1,57.1-1.2c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-2.8,54.1-2.9,54.1-2.8\r
					C54.1-2.7,54.1-2.8,54.1-2.8"></path><path fill="#FFFFFF" d="M46.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C46.8-0.5,47-0.1,47.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-2.8,46.5-2.9,46.5-2.8\r
					C46.5-2.7,46.5-2.8,46.5-2.8"></path><path fill="#FFFFFF" d="M38.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C38.6-1,38.8-0.8,39-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-2.8,38.8-2.9,38.8-2.8\r
					C38.8-2.7,38.8-2.8,38.8-2.8"></path><path fill="#FFFFFF" d="M31.1-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C31-1,31.1-0.8,31.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-2.8,31.1-2.9,31.1-2.8\r
					C31.1-2.7,31.1-2.8,31.1-2.8"></path><path fill="#FFFFFF" d="M23.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C23.8-0.5,24-0.1,24.3,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-2.8,23.5-2.9,23.5-2.8\r
					C23.5-2.7,23.5-2.8,23.5-2.8"></path><path fill="#FFFFFF" d="M15.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C15.7-1,15.8-0.8,16-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-2.8,15.8-2.9,15.8-2.8\r
					C15.8-2.7,15.8-2.8,15.8-2.8"></path><path fill="#FFFFFF" d="M8.2-2.8c0,0.1,0,0.1,0,0.2C8.1-2.5,8-2.5,8-2.5C7.9-2.4,7.9-2.2,7.9-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-1,8.2-0.8,8.3-0.7C8.5-0.5,8.7-0.1,8.9,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C9-3.5,8.8-3.4,8.7-3.4\r
					C8.5-3.3,8.6-3.2,8.4-3.1C8.3-3.1,8.2-3,8.2-2.9C8.2-2.8,8.2-2.9,8.2-2.8C8.1-2.7,8.1-2.8,8.2-2.8"></path><path fill="#FFFFFF" d="M0.5-2.8c0,0.1,0,0.1,0,0.2C0.4-2.5,0.4-2.5,0.3-2.5C0.3-2.4,0.2-2.2,0.2-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C0.3-1,0.5-0.8,0.7-0.7C0.9-0.5,1-0.1,1.3,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C3.3-0.8,3.4-1,3.5-1.2c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C1.3-3.5,1.2-3.4,1-3.4\r
					C0.9-3.3,0.9-3.2,0.7-3.1C0.6-3.1,0.5-3,0.5-2.9C0.5-2.8,0.5-2.9,0.5-2.8C0.5-2.7,0.5-2.8,0.5-2.8"></path></g></g></pattern></defs><path id="XMLID_1_" class="group-hover:fill-sub-color-dark" fill="#c5c5ca" d="M0.1,25.2c1.7-0.8,5-2.3,6.7-3.1c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0c0,0,0,0,0,0\r
	c0.1,0,0.3-0.1,0.4-0.2c4.7-4.8,9.3-9.6,14-14.3c0.7-0.7,1.3-1.4,2-2c0,0,0.1-0.1,0.1-0.1c1.1-1.4,1.1-3.3-0.2-4.5\r
	c-1.3-1.3-3.4-1.2-4.7,0.1c-4.7,4.8-9.3,9.6-14,14.3c-0.7,0.7-1.3,1.4-2,2c-0.2,0.2-0.2,0.4-0.1,0.6c-0.2,0.5-0.4,0.9-0.6,1.4\r
	c-0.1,0.2-0.2,0.4-0.3,0.7c-0.5,1.3-1.2,3.4-1.8,4.7 M22.9,4.3c-1-0.9-1.9-1.9-2.9-2.8C21.7,0.4,23.8,2.5,22.9,4.3z M17.6,3.9\r
	c0.5-0.5,1-1.1,1.6-1.6c1,1,2,2,3,3c-4.5,4.6-9,9.3-13.6,13.9c-0.5,0.5-1,1.1-1.6,1.6c-1-1-2-2-3-3C8.5,13.1,13,8.5,17.6,3.9z\r
	 M3.4,19.2c0.7,0.7,1.5,1.5,2.2,2.2c-0.7,0.3-1.4,0.6-2.2,1c-0.3-0.3-0.7-0.6-1-1C2.8,20.7,3.1,19.9,3.4,19.2z"></path>`,2),or=[sr],Fr={"data-title":"\u522A\u9664"},ur=["onClick"],dr=y0('<g id="trash"><path class="cls-1" d="M20.5,4H16.86l-.69-2.06A1.37,1.37,0,0,0,14.87,1H10.13a1.37,1.37,0,0,0-1.3.94L8.14,4H4.5a.5.5,0,0,0,0,1h.34l1,17.59A1.45,1.45,0,0,0,7.2,24H17.8a1.45,1.45,0,0,0,1.41-1.41L20.16,5h.34a.5.5,0,0,0,0-1ZM9.77,2.26A.38.38,0,0,1,10.13,2h4.74a.38.38,0,0,1,.36.26L15.81,4H9.19Zm8.44,20.27a.45.45,0,0,1-.41.47H7.2a.45.45,0,0,1-.41-.47L5.84,5H19.16Z"></path><path class="cls-1" d="M9.5,10a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,1,0v-7A.5.5,0,0,0,9.5,10Z"></path><path class="cls-1" d="M12.5,9a.5.5,0,0,0-.5.5v9a.5.5,0,0,0,1,0v-9A.5.5,0,0,0,12.5,9Z"></path><path class="cls-1" d="M15.5,10a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,1,0v-7A.5.5,0,0,0,15.5,10Z"></path></g>',1),pr=[dr],hr=K({setup(e){const t=c0(),r=v0(),n=n0(),a=String(n.name),s=o(1),u=o([]),_=o({hasNextPage:!1,hasPreviousPage:!1,start:0,end:0,totalPagi:0}),g=o(""),d=o([]);w0(async()=>{await p(1),await $()});async function p(k){const v=await x2(Number(k),10,a);u.value=[],setTimeout(()=>{u.value=v.data.artistsPagi.edges,_.value=v.data.artistsPagi.pageInfo},300)}function h(k){g.value=k,t.openPopMsg("\u78BA\u5B9A\u522A\u9664\u6B64\u6587\u7AE0?",!0)}const f=z(()=>t.get_popMsgBtnReturn);async function M(){await f,f.value&&(await n1(g.value,a),await p(1))}function w(k){r.push("/board/article/edit/"+k)}function b(k){s.value=Number(k),p(k)}async function $(){const k=await L0(a,!1);d.value=k.data.artistsCategories}return(k,v)=>{const S=M0,E=a0("router-link"),A=i0,P=$0;return F(),C(j,null,[c("div",Qe,[i(S),c("div",We,[c("div",Ye,[Je,i(E,{to:"/board/article/add",class:"flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 btn text-center items-center p-0 justify-center"},{default:L(()=>[Ke]),_:1})]),c("div",cr,[u.value.length>0&&u.value?(F(),C("table",tr,[er,c("tbody",null,[(F(!0),C(j,null,h0(u.value,(N,e0)=>(F(),C("tr",{key:e0},[c("td",rr,x(N.title),1),c("td",lr,x(l(t).changeCatName(d.value,N.categoryid)||"\u672A\u5206\u985E"),1),c("td",nr,x(l(t).changeDate(Number(N.updatetime))),1),c("td",ar,[(F(),C("svg",{onClick:I(Y=>w(String(N.postid)),["prevent"]),class:"fill-main-color-light inline-block w-28px h-auto group",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:a":"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",x:"0px",y:"0px",width:"26px",height:"26px",viewBox:"-0.8 -0.1 26 26","enable-background":"new -0.8 -0.1 26 26","xml:space":"preserve"},or,8,ir))]),c("td",Fr,[(F(),C("svg",{onClick:I(Y=>h(Number(N.postid)),["prevent"]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 25",class:"fill-main-color-light w-29px h-auto inline-block hover:fill-sub-color-dark"},pr,8,ur))])]))),128))])])):J("",!0),i(u1,{onSelectPagi:b,hasNextPage:Boolean(_.value.hasNextPage),hasPreviousPage:Boolean(_.value.hasPreviousPage),totalPagi:_.value.totalPagi,actionPage:s.value},null,8,["hasNextPage","hasPreviousPage","totalPagi","actionPage"])]),i(A,{class:"absolute bottom-0 mobile:left-0"})])]),i(P,{onPopBtnCheck:M})],64)}}}),fr={class:"flex items-stretch"},Cr={class:"w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto flex-wrap"},gr={class:"text-white relative -left-2 -top-2 mobile:text-5xl w-table:w-3/4 w-full mobile:w-full w-table:m-0 mb-5"},mr=["onClick"],_r={class:"pro-pc:w-7/12 middle-pc:w-2/3 w-full flex content-center large-pc:mb-0 mb-14 mobile:flex-wrap"},br={class:"flex-shrink-0 upload-bar mobile:mt-7 self-center relative h-table:left-8"},xr=c("h4",{class:"text-main-color-light font-normal w-full mb-4"},"\u5C01\u9762\u5716\u7247",-1),vr={class:"text-main-color-light mb-4 truncate w-10/12"},Mr={class:"cursor-pointer admin-sbtn relative w-24 flex justify-center pt-1"},yr=q("\u4E0A\u50B3\u5716\u7247 "),wr={class:"pro-pc:w-5/12 large-pc:w-1/3 w-full"},kr={class:"input-group mb-14"},$r=c("h4",{class:"text-main-color-light font-normal"},"\u6587\u7AE0\u6A19\u984C",-1),Sr={class:"input-group mb-14"},Ar=c("h4",{class:"text-main-color-light font-normal mb-4"},"\u6587\u7AE0\u5206\u985E",-1),Er={class:"dropdown-menu z-40 w-full mb-4 relative animate__animated animate__fadeIn"},zr=c("svg",{class:"ml-2 w-4 h-4 absolute right-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),Br={id:"dropdown",class:"z-10 bg-main-color-light divide-y divide-gray-100 absolute w-full"},Pr={class:"py-1 text-sm text-main-color-black cursor-pointer"},Dr=["onClick"],Lr={class:"w-full editer-inner edit-mode md-container mt-16"},Ir={key:0,class:"middle-pc:w-10/12 w-full mt-16"},h1=K({setup(e){const t=n0(),r=v0(),n=String(t.name),a=Number(t.params.pid),s=c0(),u=z(()=>n==="AddSingleArticle"?"\u65B0\u589E\u6587\u7AE0":"\u7DE8\u8F2F\u6587\u7AE0"),_=z(()=>n==="AddSingleArticle"?"\u5132\u5B58\u65B0\u589E":"\u5132\u5B58\u7DE8\u8F2F"),g=o({validate:()=>({valid:!1})}),d=o(""),p=o(""),h=o(""),f=o(""),M={postTitleRef:l0.required,selectCatRule:l0.required,postImgPathRef:l0.image,postContentRef:l0.required},[w,b]=V0(),$=o(""),k=o([]),v=z(()=>{let R=s.changeCatName(k.value,$.value);return R||"\u9078\u64C7\u5206\u985E"}),S=o(null);async function E(R){let t0=R.target.files;if(t0!==null){A.value=!1;const u0=await q0(t0[0],n);u0.data.singleUpload.errorTitle?alert(u0.data.singleUpload.errorTitle):(S.value=u0.data.singleUpload,p.value=u0.data.singleUpload.filename,h.value=u0.data.singleUpload.s3Path)}}const A=o(!0),P=z(()=>h.value?(setTimeout(()=>{A.value=!0},1e3),"https://puraliena.com"+h.value):(setTimeout(()=>{A.value=!0},1e3),"/assets/bg/default-image-438x438.gif")),N=o(!1);function e0(){N.value=!0,s.openPopMsg("\u78BA\u5B9A\u522A\u9664\u89C0\u661F\u5730\u9EDE?",!0)}function Y(){N.value=!1,s.openPopMsg("\u78BA\u5B9A"+u.value+"?",!0)}const V=z(()=>s.get_popMsgBtnReturn);async function U(){await V,V.value&&!N.value&&O(),V.value&&N.value&&o0(),V.value||(N.value=!1)}const O=P0(async()=>{const{valid:R}=await g.value.validate();if(await V,R&&V.value)if(n==="AddSingleArticle"){console.log("\u53EF\u4EE5\u65B0\u589E");const m=await v2(d.value,$.value,f.value,h.value,n);m.data.setNewPost.code&&(m.data.setNewPost.code>0?r.push("/board/article"):s.openPopMsg(m.data.setNewPost.message,!1))}else{console.log("\u53EF\u4EE5\u7DE8\u8F2F");const m=await M2(a,d.value,$.value,f.value,h.value,n);m.data.mutSinglePost.code&&(m.data.mutSinglePost.code>0?r.push("/board/article"):s.openPopMsg(m.data.mutSinglePost.message,!1))}},1e3),o0=async()=>{console.log("\u53EF\u4EE5\u522A\u9664"),await n1(a,n),await setTimeout(()=>{r.push("/board/article")},1e3)};function C0(R){w.value=!1,$.value=R}function p0(){w.value===!0&&(w.value=!1)}async function F0(){const m=(await L0(n,!1)).data.artistsCategories.filter(t0=>t0.post_category_id!=="");k.value=m}async function T(){if(n==="EditSingleArticle"&&a){const R=await H0(a,n,!1);d.value=String(R.data.getSinglePost.title),f.value=String(R.data.getSinglePost.content),$.value=String(R.data.getSinglePost.categoryid);let m=String(R.data.getSinglePost.image.replace(/\s+/g,"")),t0=m.split("/");p.value=t0[t0.length-1],h.value=m,v.value==="\u9078\u64C7\u5206\u985E"&&($.value="")}}return Z1(async()=>{await F0(),await T()}),(R,m)=>{const t0=M0,u0=a0("v-md-editor"),f0=i0,z0=$0;return F(),C(j,null,[c("div",fr,[i(t0),c("div",{onClick:m[8]||(m[8]=I(g0=>p0(),["self"])),class:"laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative"},[c("div",Cr,[c("h1",gr,x(l(u)),1),c("button",{onClick:I(Y,["prevent"]),class:"flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 text-center items-center p-0 justify-center"},x(l(_)),9,mr)]),i(l(S0),{ref_key:"addArticleForm",ref:g,"validation-schema":M,class:"w-9/12 flex flex-wrap mobile:w-11/12 table-container mobile:m-auto justify-between editer-container"},{default:L(({errors:g0})=>[c("div",_r,[c("div",{class:y(["flex-shrink-0 animate__animated h-304px w-304px mini-mobile:w-200px mini-mobile:h-200px bg-no-repeat bg-cover bg-center rounded-full",[{animate__fadeIn:A.value},{animate__fadeOut:!A.value}]]),style:B0({"background-image":"url("+l(P)+")"})},null,6),c("div",br,[xr,c("h5",vr,x(p.value),1),c("label",Mr,[yr,i(l(r0),{name:"postImgPathRef",modelValue:h.value,"onUpdate:modelValue":m[0]||(m[0]=X=>h.value=X),class:"hidden",type:"file",onChange:m[1]||(m[1]=X=>E(X))},null,8,["modelValue"])]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto mt-4"},x(g0.postImgPathRef),513),[[D,g0.postImgPathRef]])])]),c("div",wr,[c("div",kr,[$r,i(l(r0),{name:"postTitleRef",type:"text",class:y(["h-16 block m-auto bottom-line-input text-lg",{"border-sp-color-dark border-opacity-100":g0.postTitleRef}]),modelValue:d.value,"onUpdate:modelValue":m[2]||(m[2]=X=>d.value=X)},null,8,["class","modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"},x(g0.postTitleRef),513),[[D,g0.postTitleRef]])]),c("div",Sr,[Ar,B(i(l(r0),{name:"selectCatRule",type:"text",modelValue:$.value,"onUpdate:modelValue":m[3]||(m[3]=X=>$.value=X)},null,8,["modelValue"]),[[D,!1]]),c("div",Er,[c("button",{id:"dropdownDefault",class:"w-full duration-1000 text-main-color-light border border-white border-opacity-30 hover:border-opacity-0 bg-opacity-0 bg-white hover:bg-opacity-18 hover:text-sub-color-light focus:bg-opacity-18 focus:outline-none focus:border-opacity-0 focus:text-sub-color-light text-lg pl-4 p-3 relative text-center inline-flex items-center tracking-wide-content",type:"button",onClick:m[4]||(m[4]=I(X=>l(b)(),["prevent"]))},[q(x(l(v))+" ",1),zr]),B(c("div",Br,[c("ul",Pr,[(F(!0),C(j,null,h0(k.value,(X,W)=>(F(),C("li",{key:W,onClick:I(G0=>C0(String(X.post_category_id)),["stop"]),class:"tracking-wide-content block py-2 px-4 hover:text-sub-color-dark"},x(X.post_category_name),9,Dr))),128))])],512),[[D,l(w)]])]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto"},x(g0.selectCatRule),513),[[D,g0.selectCatRule]])])]),c("div",Lr,[B(i(l(r0),{name:"postContentRef",modelValue:f.value,"onUpdate:modelValue":m[5]||(m[5]=X=>f.value=X)},null,8,["modelValue"]),[[D,!1]]),i(u0,{class:"markdown-body",modelValue:f.value,"onUpdate:modelValue":m[6]||(m[6]=X=>f.value=X),height:"550px"},null,8,["modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block mt-2"},x(g0.postContentRef),513),[[D,g0.postContentRef]])]),l(n)==="EditSingleArticle"?(F(),C("div",Ir,[c("button",{class:"admin-delete-sbtn",onClick:m[7]||(m[7]=I(X=>e0(),["prevent"]))}," \u522A\u9664 ")])):J("",!0)]),_:1},512),i(f0,{class:"absolute bottom-0 mobile:left-0"})])]),i(z0,{onPopBtnCheck:U})],64)}}}),Rr={};function Tr(e,t){const r=h1;return F(),s0(r)}var Nr=E0(Rr,[["render",Tr]]);const Vr={};function Or(e,t){const r=h1;return F(),s0(r)}var jr=E0(Vr,[["render",Or]]);const qr={class:"flex items-stretch"},Ur={class:"laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative"},Hr={class:"w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto"},Zr=c("h1",{class:"text-white relative -left-2 -top-2 mobile:text-5xl w-3/4 mobile:w-full"},"\u5929\u6587\u6A5F\u69CB\u7BA1\u7406",-1),Gr=q(" \u65B0\u589E "),Xr={class:"w-9/12 mobile:w-11/12 table-container mobile:m-auto"},Qr={key:0,id:"responsive-table",class:"animate__animated animate__fadeIn"},Wr=c("thead",{class:"w-table:table-header-group hidden"},[c("tr",null,[c("th",null,"\u6A5F\u69CB\u540D\u7A31"),c("th",null,"\u5916\u90E8\u9023\u7D50"),c("th",{class:"w-20 text-right"},"\u7DE8\u8F2F"),c("th",{class:"w-20 text-right"},"\u522A\u9664")])],-1),Yr={"data-title":"\u6A5F\u69CB"},Jr={"data-title":"\u9023\u7D50"},Kr={"data-title":"\u7DE8\u8F2F"},cl=["onClick"],tl=y0(`<defs><pattern x="-73.8" y="198.9" width="69" height="69" patternUnits="userSpaceOnUse" id="\u5713\u9EDE\u5716\u6A23" viewBox="2.1 -70.9 69 69" overflow="visible"><g><polygon fill="none" points="71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9 			"></polygon><polygon fill="#F6BB60" points="71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9 			"></polygon><g><path fill="#FFFFFF" d="M61.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-71.7,61.8-71.7,61.8-71.7\r
					C61.8-71.6,61.8-71.6,61.8-71.7"></path><path fill="#FFFFFF" d="M54.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-71.7,54.1-71.7,54.1-71.7\r
					C54.1-71.6,54.1-71.6,54.1-71.7"></path><path fill="#FFFFFF" d="M46.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.4-71.7,46.4-71.7,46.4-71.7\r
					C46.4-71.6,46.4-71.6,46.4-71.7"></path><path fill="#FFFFFF" d="M38.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-71.7,38.8-71.7,38.8-71.7\r
					C38.8-71.6,38.8-71.6,38.8-71.7"></path><path fill="#FFFFFF" d="M31.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-71.7,31.1-71.7,31.1-71.7\r
					C31.1-71.6,31.1-71.6,31.1-71.7"></path><path fill="#FFFFFF" d="M23.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.4-71.7,23.4-71.7,23.4-71.7\r
					C23.4-71.6,23.4-71.6,23.4-71.7"></path><path fill="#FFFFFF" d="M15.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-71.7,15.8-71.7,15.8-71.7\r
					C15.8-71.6,15.8-71.6,15.8-71.7"></path><path fill="#FFFFFF" d="M8.1-71.7c0,0.1,0,0.1,0,0.2C8-71.4,8-71.4,7.9-71.3c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.1-71.7,8.1-71.7,8.1-71.7\r
					C8.1-71.6,8.1-71.6,8.1-71.7"></path><path fill="#FFFFFF" d="M0.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.8-69.4,1-69,1.2-68.9c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.4-71.7,0.4-71.7,0.4-71.7\r
					C0.4-71.6,0.4-71.6,0.4-71.7"></path></g><g><path fill="#FFFFFF" d="M69.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-71.7,69.4-71.7,69.4-71.7\r
					C69.4-71.6,69.4-71.6,69.4-71.7"></path></g><path fill="#FFFFFF" d="M0.5-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-69.4,1-69,1.3-68.9c0.2,0,0.4-0.1,0.5-0.1\r
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-71.7,0.5-71.7,0.5-71.7\r
				C0.5-71.6,0.5-71.6,0.5-71.7"></path><g><g><path fill="#FFFFFF" d="M69.4-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-64,69.4-64.1,69.4-64C69.4-64,69.4-64,69.4-64"></path><path fill="#FFFFFF" d="M61.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-64,61.8-64.1,61.8-64C61.8-64,61.8-64,61.8-64"></path><path fill="#FFFFFF" d="M54.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-64,54.1-64.1,54.1-64C54.1-64,54.1-64,54.1-64"></path><path fill="#FFFFFF" d="M46.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-64,46.5-64.1,46.5-64C46.5-64,46.5-64,46.5-64"></path><path fill="#FFFFFF" d="M38.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-64,38.8-64.1,38.8-64C38.8-64,38.8-64,38.8-64"></path><path fill="#FFFFFF" d="M31.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-64,31.1-64.1,31.1-64C31.1-64,31.1-64,31.1-64"></path><path fill="#FFFFFF" d="M23.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-64,23.5-64.1,23.5-64C23.5-64,23.5-64,23.5-64"></path><path fill="#FFFFFF" d="M15.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-64,15.8-64.1,15.8-64C15.8-64,15.8-64,15.8-64"></path><path fill="#FFFFFF" d="M8.2-64c0,0.1,0,0.1,0,0.2C8.1-63.7,8-63.7,8-63.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-62.2,8.2-62,8.3-61.9c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-64,8.2-64.1,8.2-64C8.1-64,8.1-64,8.2-64"></path><path fill="#FFFFFF" d="M0.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-62,3-61.9,3.1-62c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-64,0.5-64.1,0.5-64C0.5-64,0.5-64,0.5-64"></path></g><g><path fill="#FFFFFF" d="M69.4-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-56.4,69.4-56.4,69.4-56.3\r
						C69.4-56.3,69.4-56.3,69.4-56.3"></path><path fill="#FFFFFF" d="M61.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-56.4,61.8-56.4,61.8-56.3\r
						C61.8-56.3,61.8-56.3,61.8-56.3"></path><path fill="#FFFFFF" d="M54.1-56.3c0,0.1,0,0.1,0,0.2C54-56.1,54-56.1,53.9-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-56.4,54.1-56.4,54.1-56.3\r
						C54.1-56.3,54.1-56.3,54.1-56.3"></path><path fill="#FFFFFF" d="M46.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-56.4,46.5-56.4,46.5-56.3\r
						C46.5-56.3,46.5-56.3,46.5-56.3"></path><path fill="#FFFFFF" d="M38.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-56.4,38.8-56.4,38.8-56.3\r
						C38.8-56.3,38.8-56.3,38.8-56.3"></path><path fill="#FFFFFF" d="M31.1-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-56.4,31.1-56.4,31.1-56.3\r
						C31.1-56.3,31.1-56.3,31.1-56.3"></path><path fill="#FFFFFF" d="M23.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-56.4,23.5-56.4,23.5-56.3\r
						C23.5-56.3,23.5-56.3,23.5-56.3"></path><path fill="#FFFFFF" d="M15.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-56.4,15.8-56.4,15.8-56.3\r
						C15.8-56.3,15.8-56.3,15.8-56.3"></path><path fill="#FFFFFF" d="M8.2-56.3c0,0.1,0,0.1,0,0.2C8.1-56.1,8-56.1,8-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-56.4,8.2-56.4,8.2-56.3\r
						C8.1-56.3,8.1-56.3,8.2-56.3"></path><path fill="#FFFFFF" d="M0.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-56.4,0.5-56.4,0.5-56.3\r
						C0.5-56.3,0.5-56.3,0.5-56.3"></path></g><g><path fill="#FFFFFF" d="M69.4-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-48.7,69.4-48.8,69.4-48.7\r
						C69.4-48.7,69.4-48.7,69.4-48.7"></path><path fill="#FFFFFF" d="M61.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-48.7,61.8-48.8,61.8-48.7\r
						C61.8-48.7,61.8-48.7,61.8-48.7"></path><path fill="#FFFFFF" d="M54.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-48.7,54.1-48.8,54.1-48.7\r
						C54.1-48.7,54.1-48.7,54.1-48.7"></path><path fill="#FFFFFF" d="M46.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-48.7,46.5-48.8,46.5-48.7\r
						C46.5-48.7,46.5-48.7,46.5-48.7"></path><path fill="#FFFFFF" d="M38.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-48.7,38.8-48.8,38.8-48.7\r
						C38.8-48.7,38.8-48.7,38.8-48.7"></path><path fill="#FFFFFF" d="M31.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-48.7,31.1-48.8,31.1-48.7\r
						C31.1-48.7,31.1-48.7,31.1-48.7"></path><path fill="#FFFFFF" d="M23.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-48.7,23.5-48.8,23.5-48.7\r
						C23.5-48.7,23.5-48.7,23.5-48.7"></path><path fill="#FFFFFF" d="M15.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-48.7,15.8-48.8,15.8-48.7\r
						C15.8-48.7,15.8-48.7,15.8-48.7"></path><path fill="#FFFFFF" d="M8.2-48.7c0,0.1,0,0.1,0,0.2C8.1-48.4,8-48.4,8-48.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C8.5-46.4,8.7-46,8.9-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-48.7,8.2-48.8,8.2-48.7\r
						C8.1-48.7,8.1-48.7,8.2-48.7"></path><path fill="#FFFFFF" d="M0.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-46.4,1-46,1.3-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-48.7,0.5-48.8,0.5-48.7\r
						C0.5-48.7,0.5-48.7,0.5-48.7"></path></g><g><path fill="#FFFFFF" d="M69.4-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-41.1,69.4-41.1,69.4-41\r
						C69.4-41,69.4-41,69.4-41"></path><path fill="#FFFFFF" d="M61.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-41.1,61.8-41.1,61.8-41\r
						C61.8-41,61.8-41,61.8-41"></path><path fill="#FFFFFF" d="M54.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-41.1,54.1-41.1,54.1-41\r
						C54.1-41,54.1-41,54.1-41"></path><path fill="#FFFFFF" d="M46.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-41.1,46.5-41.1,46.5-41\r
						C46.5-41,46.5-41,46.5-41"></path><path fill="#FFFFFF" d="M38.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-41.1,38.8-41.1,38.8-41\r
						C38.8-41,38.8-41,38.8-41"></path><path fill="#FFFFFF" d="M31.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-41.1,31.1-41.1,31.1-41\r
						C31.1-41,31.1-41,31.1-41"></path><path fill="#FFFFFF" d="M23.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-41.1,23.5-41.1,23.5-41\r
						C23.5-41,23.5-41,23.5-41"></path><path fill="#FFFFFF" d="M15.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-41.1,15.8-41.1,15.8-41\r
						C15.8-41,15.8-41,15.8-41"></path><path fill="#FFFFFF" d="M8.2-41c0,0.1,0,0.1,0,0.2C8.1-40.8,8-40.8,8-40.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-41.1,8.2-41.1,8.2-41C8.1-41,8.1-41,8.2-41"></path><path fill="#FFFFFF" d="M0.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-39,3-39,3.1-39c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-41.1,0.5-41.1,0.5-41C0.5-41,0.5-41,0.5-41"></path></g><g><path fill="#FFFFFF" d="M69.4-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-33.4,69.4-33.5,69.4-33.4\r
						C69.4-33.4,69.4-33.4,69.4-33.4"></path><path fill="#FFFFFF" d="M61.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-33.4,61.8-33.5,61.8-33.4\r
						C61.8-33.4,61.8-33.4,61.8-33.4"></path><path fill="#FFFFFF" d="M54.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-33.4,54.1-33.5,54.1-33.4\r
						C54.1-33.4,54.1-33.4,54.1-33.4"></path><path fill="#FFFFFF" d="M46.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-33.4,46.5-33.5,46.5-33.4\r
						C46.5-33.4,46.5-33.4,46.5-33.4"></path><path fill="#FFFFFF" d="M38.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-33.4,38.8-33.5,38.8-33.4\r
						C38.8-33.4,38.8-33.4,38.8-33.4"></path><path fill="#FFFFFF" d="M31.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-33.4,31.1-33.5,31.1-33.4\r
						C31.1-33.4,31.1-33.4,31.1-33.4"></path><path fill="#FFFFFF" d="M23.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-33.4,23.5-33.5,23.5-33.4\r
						C23.5-33.4,23.5-33.4,23.5-33.4"></path><path fill="#FFFFFF" d="M15.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-33.4,15.8-33.5,15.8-33.4\r
						C15.8-33.4,15.8-33.4,15.8-33.4"></path><path fill="#FFFFFF" d="M8.2-33.4c0,0.1,0,0.1,0,0.2C8.1-33.1,8-33.1,8-33.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-33.4,8.2-33.5,8.2-33.4\r
						C8.1-33.4,8.1-33.4,8.2-33.4"></path><path fill="#FFFFFF" d="M0.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-33.4,0.5-33.5,0.5-33.4\r
						C0.5-33.4,0.5-33.4,0.5-33.4"></path></g><g><path fill="#FFFFFF" d="M69.4-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-25.8,69.4-25.8,69.4-25.7\r
						C69.4-25.7,69.4-25.7,69.4-25.7"></path><path fill="#FFFFFF" d="M61.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-25.8,61.8-25.8,61.8-25.7\r
						C61.8-25.7,61.8-25.7,61.8-25.7"></path><path fill="#FFFFFF" d="M54.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-25.8,54.1-25.8,54.1-25.7\r
						C54.1-25.7,54.1-25.7,54.1-25.7"></path><path fill="#FFFFFF" d="M46.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-25.8,46.5-25.8,46.5-25.7\r
						C46.5-25.7,46.5-25.7,46.5-25.7"></path><path fill="#FFFFFF" d="M38.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-25.8,38.8-25.8,38.8-25.7\r
						C38.8-25.7,38.8-25.7,38.8-25.7"></path><path fill="#FFFFFF" d="M31.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-25.8,31.1-25.8,31.1-25.7\r
						C31.1-25.7,31.1-25.7,31.1-25.7"></path><path fill="#FFFFFF" d="M23.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-25.8,23.5-25.8,23.5-25.7\r
						C23.5-25.7,23.5-25.7,23.5-25.7"></path><path fill="#FFFFFF" d="M15.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-25.8,15.8-25.8,15.8-25.7\r
						C15.8-25.7,15.8-25.7,15.8-25.7"></path><path fill="#FFFFFF" d="M8.2-25.7c0,0.1,0,0.1,0,0.2C8.1-25.4,8-25.5,8-25.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-24,8.2-23.8,8.3-23.6c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-25.8,8.2-25.8,8.2-25.7\r
						C8.1-25.7,8.1-25.7,8.2-25.7"></path><path fill="#FFFFFF" d="M0.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-23.5,1-23.1,1.3-23c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-25.8,0.5-25.8,0.5-25.7\r
						C0.5-25.7,0.5-25.7,0.5-25.7"></path></g><g><path fill="#FFFFFF" d="M69.4-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-18.1,69.4-18.2,69.4-18.1\r
						C69.4-18,69.4-18.1,69.4-18.1"></path><path fill="#FFFFFF" d="M61.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-18.1,61.8-18.2,61.8-18.1\r
						C61.8-18,61.8-18.1,61.8-18.1"></path><path fill="#FFFFFF" d="M54.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-18.1,54.1-18.2,54.1-18.1\r
						C54.1-18,54.1-18.1,54.1-18.1"></path><path fill="#FFFFFF" d="M46.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-18.1,46.5-18.2,46.5-18.1\r
						C46.5-18,46.5-18.1,46.5-18.1"></path><path fill="#FFFFFF" d="M38.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-18.1,38.8-18.2,38.8-18.1\r
						C38.8-18,38.8-18.1,38.8-18.1"></path><path fill="#FFFFFF" d="M31.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-18.1,31.1-18.2,31.1-18.1\r
						C31.1-18,31.1-18.1,31.1-18.1"></path><path fill="#FFFFFF" d="M23.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-18.1,23.5-18.2,23.5-18.1\r
						C23.5-18,23.5-18.1,23.5-18.1"></path><path fill="#FFFFFF" d="M15.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-18.1,15.8-18.2,15.8-18.1\r
						C15.8-18,15.8-18.1,15.8-18.1"></path><path fill="#FFFFFF" d="M8.2-18.1c0,0.1,0,0.1,0,0.2C8.1-17.8,8-17.8,8-17.8c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-16.3,8.2-16.1,8.3-16c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-18.1,8.2-18.2,8.2-18.1\r
						C8.1-18,8.1-18.1,8.2-18.1"></path><path fill="#FFFFFF" d="M0.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-16.1,3-16,3.1-16c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-18.1,0.5-18.2,0.5-18.1\r
						C0.5-18,0.5-18.1,0.5-18.1"></path></g><g><path fill="#FFFFFF" d="M69.4-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-10.5,69.4-10.5,69.4-10.4\r
						C69.4-10.4,69.4-10.4,69.4-10.4"></path><path fill="#FFFFFF" d="M61.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C63.9-8,63.8-8.2,64-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-10.5,61.8-10.5,61.8-10.4\r
						C61.8-10.4,61.8-10.4,61.8-10.4"></path><path fill="#FFFFFF" d="M54.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-10.5,54.1-10.5,54.1-10.4\r
						C54.1-10.4,54.1-10.4,54.1-10.4"></path><path fill="#FFFFFF" d="M46.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-10.5,46.5-10.5,46.5-10.4\r
						C46.5-10.4,46.5-10.4,46.5-10.4"></path><path fill="#FFFFFF" d="M38.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C40.9-8,40.8-8.2,41-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-10.5,38.8-10.5,38.8-10.4\r
						C38.8-10.4,38.8-10.4,38.8-10.4"></path><path fill="#FFFFFF" d="M31.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-10.5,31.1-10.5,31.1-10.4\r
						C31.1-10.4,31.1-10.4,31.1-10.4"></path><path fill="#FFFFFF" d="M23.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-10.5,23.5-10.5,23.5-10.4\r
						C23.5-10.4,23.5-10.4,23.5-10.4"></path><path fill="#FFFFFF" d="M15.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C17.9-8,17.8-8.2,18-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-10.5,15.8-10.5,15.8-10.4\r
						C15.8-10.4,15.8-10.4,15.8-10.4"></path><path fill="#FFFFFF" d="M8.2-10.4c0,0.1,0,0.1,0,0.2C8.1-10.1,8-10.2,8-10.1C7.9-10,7.9-9.8,7.9-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-8.7,8.2-8.5,8.3-8.3c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-10.5,8.2-10.5,8.2-10.4\r
						C8.1-10.4,8.1-10.4,8.2-10.4"></path><path fill="#FFFFFF" d="M0.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1C0.3-10,0.2-9.8,0.2-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-8.2,1-7.8,1.3-7.7c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C2.6-8,2.5-8.2,2.7-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-10.5,0.5-10.5,0.5-10.4\r
						C0.5-10.4,0.5-10.4,0.5-10.4"></path></g></g><g><path fill="#FFFFFF" d="M69.4-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C69.8-0.5,70-0.1,70.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-2.8,69.4-2.9,69.4-2.8\r
					C69.4-2.7,69.4-2.8,69.4-2.8"></path><path fill="#FFFFFF" d="M61.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C61.6-1,61.8-0.8,62-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-2.8,61.8-2.9,61.8-2.8\r
					C61.8-2.7,61.8-2.8,61.8-2.8"></path><path fill="#FFFFFF" d="M54.1-2.8c0,0.1,0,0.1,0,0.2C54-2.5,54-2.5,53.9-2.5c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C54-1,54.1-0.8,54.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C56.9-0.8,57-1,57.1-1.2c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-2.8,54.1-2.9,54.1-2.8\r
					C54.1-2.7,54.1-2.8,54.1-2.8"></path><path fill="#FFFFFF" d="M46.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C46.8-0.5,47-0.1,47.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-2.8,46.5-2.9,46.5-2.8\r
					C46.5-2.7,46.5-2.8,46.5-2.8"></path><path fill="#FFFFFF" d="M38.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C38.6-1,38.8-0.8,39-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-2.8,38.8-2.9,38.8-2.8\r
					C38.8-2.7,38.8-2.8,38.8-2.8"></path><path fill="#FFFFFF" d="M31.1-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C31-1,31.1-0.8,31.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-2.8,31.1-2.9,31.1-2.8\r
					C31.1-2.7,31.1-2.8,31.1-2.8"></path><path fill="#FFFFFF" d="M23.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C23.8-0.5,24-0.1,24.3,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-2.8,23.5-2.9,23.5-2.8\r
					C23.5-2.7,23.5-2.8,23.5-2.8"></path><path fill="#FFFFFF" d="M15.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C15.7-1,15.8-0.8,16-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-2.8,15.8-2.9,15.8-2.8\r
					C15.8-2.7,15.8-2.8,15.8-2.8"></path><path fill="#FFFFFF" d="M8.2-2.8c0,0.1,0,0.1,0,0.2C8.1-2.5,8-2.5,8-2.5C7.9-2.4,7.9-2.2,7.9-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-1,8.2-0.8,8.3-0.7C8.5-0.5,8.7-0.1,8.9,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C9-3.5,8.8-3.4,8.7-3.4\r
					C8.5-3.3,8.6-3.2,8.4-3.1C8.3-3.1,8.2-3,8.2-2.9C8.2-2.8,8.2-2.9,8.2-2.8C8.1-2.7,8.1-2.8,8.2-2.8"></path><path fill="#FFFFFF" d="M0.5-2.8c0,0.1,0,0.1,0,0.2C0.4-2.5,0.4-2.5,0.3-2.5C0.3-2.4,0.2-2.2,0.2-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C0.3-1,0.5-0.8,0.7-0.7C0.9-0.5,1-0.1,1.3,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C3.3-0.8,3.4-1,3.5-1.2c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C1.3-3.5,1.2-3.4,1-3.4\r
					C0.9-3.3,0.9-3.2,0.7-3.1C0.6-3.1,0.5-3,0.5-2.9C0.5-2.8,0.5-2.9,0.5-2.8C0.5-2.7,0.5-2.8,0.5-2.8"></path></g></g></pattern></defs><path id="XMLID_1_" class="group-hover:fill-sub-color-dark" fill="#c5c5ca" d="M0.1,25.2c1.7-0.8,5-2.3,6.7-3.1c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0c0,0,0,0,0,0\r
	c0.1,0,0.3-0.1,0.4-0.2c4.7-4.8,9.3-9.6,14-14.3c0.7-0.7,1.3-1.4,2-2c0,0,0.1-0.1,0.1-0.1c1.1-1.4,1.1-3.3-0.2-4.5\r
	c-1.3-1.3-3.4-1.2-4.7,0.1c-4.7,4.8-9.3,9.6-14,14.3c-0.7,0.7-1.3,1.4-2,2c-0.2,0.2-0.2,0.4-0.1,0.6c-0.2,0.5-0.4,0.9-0.6,1.4\r
	c-0.1,0.2-0.2,0.4-0.3,0.7c-0.5,1.3-1.2,3.4-1.8,4.7 M22.9,4.3c-1-0.9-1.9-1.9-2.9-2.8C21.7,0.4,23.8,2.5,22.9,4.3z M17.6,3.9\r
	c0.5-0.5,1-1.1,1.6-1.6c1,1,2,2,3,3c-4.5,4.6-9,9.3-13.6,13.9c-0.5,0.5-1,1.1-1.6,1.6c-1-1-2-2-3-3C8.5,13.1,13,8.5,17.6,3.9z\r
	 M3.4,19.2c0.7,0.7,1.5,1.5,2.2,2.2c-0.7,0.3-1.4,0.6-2.2,1c-0.3-0.3-0.7-0.6-1-1C2.8,20.7,3.1,19.9,3.4,19.2z"></path>`,2),el=[tl],rl={"data-title":"\u522A\u9664"},ll=["onClick"],nl=y0('<g id="trash"><path class="cls-1" d="M20.5,4H16.86l-.69-2.06A1.37,1.37,0,0,0,14.87,1H10.13a1.37,1.37,0,0,0-1.3.94L8.14,4H4.5a.5.5,0,0,0,0,1h.34l1,17.59A1.45,1.45,0,0,0,7.2,24H17.8a1.45,1.45,0,0,0,1.41-1.41L20.16,5h.34a.5.5,0,0,0,0-1ZM9.77,2.26A.38.38,0,0,1,10.13,2h4.74a.38.38,0,0,1,.36.26L15.81,4H9.19Zm8.44,20.27a.45.45,0,0,1-.41.47H7.2a.45.45,0,0,1-.41-.47L5.84,5H19.16Z"></path><path class="cls-1" d="M9.5,10a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,1,0v-7A.5.5,0,0,0,9.5,10Z"></path><path class="cls-1" d="M12.5,9a.5.5,0,0,0-.5.5v9a.5.5,0,0,0,1,0v-9A.5.5,0,0,0,12.5,9Z"></path><path class="cls-1" d="M15.5,10a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,1,0v-7A.5.5,0,0,0,15.5,10Z"></path></g>',1),al=[nl],il=K({setup(e){const t=c0(),r=v0(),n=n0(),a=String(n.name),s=o([]),u=o("");w0(async()=>{await h()});function _(f){u.value=f,t.openPopMsg("\u78BA\u5B9A\u522A\u9664?",!0)}const g=z(()=>t.get_popMsgBtnReturn);async function d(){await g,g.value&&(await i1(u.value,a),await h())}function p(f){const M="/board/organization/edit/"+f;r.push(M)}async function h(){const f=await i4(a);s.value=f.data.facilitiesList}return(f,M)=>{const w=M0,b=a0("router-link"),$=i0,k=$0;return F(),C(j,null,[c("div",qr,[i(w),c("div",Ur,[c("div",Hr,[Zr,i(b,{to:"/board/organization/add",class:"flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 btn text-center items-center p-0 justify-center"},{default:L(()=>[Gr]),_:1})]),c("div",Xr,[s.value.length>0&&s.value?(F(),C("table",Qr,[Wr,c("tbody",null,[(F(!0),C(j,null,h0(s.value,(v,S)=>(F(),C("tr",{key:S},[c("td",Yr,x(v.facilities_title),1),c("td",Jr,x(v.facilities_link),1),c("td",Kr,[(F(),C("svg",{onClick:I(E=>p(v.facilities_orderid),["prevent"]),class:"fill-main-color-light inline-block w-28px h-auto group",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:a":"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",x:"0px",y:"0px",width:"26px",height:"26px",viewBox:"-0.8 -0.1 26 26","enable-background":"new -0.8 -0.1 26 26","xml:space":"preserve"},el,8,cl))]),c("td",rl,[(F(),C("svg",{onClick:I(E=>_(v.facilities_orderid),["prevent"]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 25",class:"fill-main-color-light w-29px h-auto inline-block hover:fill-sub-color-dark"},al,8,ll))])]))),128))])])):J("",!0)]),i($,{class:"absolute bottom-0 mobile:left-0"})])]),i(k,{onPopBtnCheck:d})],64)}}}),sl={class:"flex items-stretch"},ol={class:"laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative"},Fl={class:"w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto flex-wrap"},ul={class:"text-white relative -left-2 -top-2 mobile:text-5xl w-table:w-3/4 w-full mobile:w-full w-table:m-0 mb-5"},dl=["onClick"],pl={class:"w-table:w-5/12 w-full"},hl={class:"input-group mb-14"},fl=c("h4",{class:"text-main-color-light font-normal"},"\u6A5F\u69CB\u540D\u7A31",-1),Cl={class:"input-group mb-14"},gl=c("h4",{class:"text-main-color-light font-normal"},"\u5916\u90E8\u9023\u7D50",-1),ml={class:"input-group mb-14"},_l=c("h4",{class:"text-main-color-light font-normal"},"\u6A5F\u69CB\u4ECB\u7D39",-1),bl={class:"w-table:w-5/12 w-full"},xl={class:"upload-bar flex justify-between mt-7 mb-1"},vl=c("h4",{class:"text-main-color-light font-normal"},"\u6A5F\u69CB\u5716\u7247",-1),Ml={class:"cursor-pointer admin-sbtn relative flex items-center justify-center"},yl=q("\u4E0A\u50B3\u5716\u7247 "),wl={class:"text-main-color-light mb-7"},kl={key:0,class:"w-table:w-10/12 w-full"},f1=K({setup(e){const t=n0(),r=v0(),n=String(t.name),a=Number(t.params.oid),s=c0(),u=z(()=>n==="AddSingleOrganization"?"\u65B0\u589E\u6A5F\u69CB":"\u7DE8\u8F2F\u6A5F\u69CB"),_=z(()=>n==="AddSingleOrganization"?"\u5132\u5B58\u65B0\u589E":"\u5132\u5B58\u7DE8\u8F2F"),g=o({validate:()=>({valid:!1})}),d=o(""),p=o(""),h=o(""),f=o(""),M=o(""),w={facilitiesTitleRef:l0.required,facilitiesLinkRef:l0.required,facilitiesDescriptionRef:l0.required,facilitiesImagePathRef:l0.image},b=o(null);async function $(U){let o0=U.target.files;if(o0!==null){k.value=!1;const C0=await q0(o0[0],n);C0.data.singleUpload.errorTitle?alert(C0.data.singleUpload.errorTitle):(b.value=C0.data.singleUpload,f.value=C0.data.singleUpload.filename,M.value=C0.data.singleUpload.s3Path)}}const k=o(!0),v=z(()=>M.value?(setTimeout(()=>{k.value=!0},1e3),"https://puraliena.com"+M.value):(setTimeout(()=>{k.value=!0},1e3),"/assets/bg/default-image-438x438.gif")),S=o(!1);function E(){S.value=!0,s.openPopMsg("\u78BA\u5B9A\u522A\u9664?",!0)}function A(){S.value=!1,s.openPopMsg("\u78BA\u5B9A"+u.value+"?",!0)}const P=z(()=>s.get_popMsgBtnReturn);async function N(){await P,P.value&&!S.value&&e0(),P.value&&S.value&&Y(),P.value||(S.value=!1)}const e0=P0(async()=>{const{valid:U}=await g.value.validate();if(await P,U&&P.value)if(n==="AddSingleOrganization"){console.log("\u53EF\u4EE5\u65B0\u589E");const O=await s4(d.value,h.value,M.value,p.value,n);O.data.setNewOrganization.code&&(O.data.setNewOrganization.code>0?r.push("/board/organization"):s.openPopMsg(O.data.setNewOrganization.message,!1))}else{console.log("\u53EF\u4EE5\u7DE8\u8F2F");const O=await F4(a,d.value,h.value,M.value,p.value,n);O.data.mutOrganization.code&&(O.data.mutOrganization.code>0?r.push("/board/organization"):s.openPopMsg(O.data.mutOrganization.message,!1))}},1e3),Y=async()=>{console.log("\u53EF\u4EE5\u522A\u9664"),await i1(a,n),await setTimeout(()=>{r.push("/board/organization")},1e3)};async function V(){if(n==="EditSingleOrganization"&&a){const U=await o4(a,n);d.value=U.data.getSingleOrganization.facilities_title,h.value=U.data.getSingleOrganization.facilities_description,p.value=U.data.getSingleOrganization.facilities_link;let O=String(U.data.getSingleOrganization.facilities_image),o0=O.split("/");f.value=o0[o0.length-1],M.value=O}}return V(),(U,O)=>{const o0=M0,C0=i0,p0=$0;return F(),C(j,null,[c("div",sl,[i(o0),c("div",ol,[c("div",Fl,[c("h1",ul,x(l(u)),1),c("button",{onClick:I(A,["prevent"]),class:"flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 text-center items-center p-0 justify-center"},x(l(_)),9,dl)]),i(l(S0),{ref_key:"addPlaceForm",ref:g,"validation-schema":w,class:"w-9/12 flex flex-wrap mobile:w-11/12 table-container mobile:m-auto justify-between"},{default:L(({errors:F0})=>[c("div",pl,[c("div",hl,[fl,i(l(r0),{name:"facilitiesTitleRef",type:"text",class:y(["h-16 block m-auto bottom-line-input text-lg",{"border-sp-color-dark border-opacity-100":F0.facilitiesTitleRef}]),modelValue:d.value,"onUpdate:modelValue":O[0]||(O[0]=T=>d.value=T)},null,8,["class","modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"},x(F0.facilitiesTitleRef),513),[[D,F0.facilitiesTitleRef]])]),c("div",Cl,[gl,i(l(r0),{name:"facilitiesLinkRef",type:"text",class:y(["h-16 block m-auto bottom-line-input text-lg",{"border-sp-color-dark border-opacity-100":F0.facilitiesLinkRef}]),modelValue:p.value,"onUpdate:modelValue":O[1]||(O[1]=T=>p.value=T)},null,8,["class","modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"},x(F0.facilitiesLinkRef),513),[[D,F0.facilitiesLinkRef]])]),c("div",ml,[_l,i(l(r0),{name:"facilitiesDescriptionRef",type:"text",as:"textarea",class:y(["bottom-line-input h-130px resize-none block m-auto text-lg pt-4",{"border-sp-color-dark border-opacity-100":F0.facilitiesDescriptionRef}]),modelValue:h.value,"onUpdate:modelValue":O[2]||(O[2]=T=>h.value=T)},null,8,["class","modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"},x(F0.facilitiesDescriptionRef),513),[[D,F0.facilitiesDescriptionRef]])])]),c("div",bl,[c("div",{class:y(["animate__animated h-52 w-full bg-no-repeat bg-cover bg-center",[{animate__fadeIn:k.value},{animate__fadeOut:!k.value}]]),style:B0({"background-image":"url("+l(v)+")"})},null,6),c("div",xl,[vl,c("label",Ml,[yl,i(l(r0),{name:"facilitiesImagePathRef",modelValue:M.value,"onUpdate:modelValue":O[3]||(O[3]=T=>M.value=T),class:"hidden",type:"file",onChange:O[4]||(O[4]=T=>$(T))},null,8,["modelValue"])])]),c("h5",wl,x(f.value),1),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"},x(F0.facilitiesImagePathRef),513),[[D,F0.facilitiesImagePathRef]])]),l(n)==="EditSingleOrganization"?(F(),C("div",kl,[c("button",{class:"admin-delete-sbtn",onClick:O[5]||(O[5]=I(T=>E(),["prevent"]))}," \u522A\u9664 ")])):J("",!0)]),_:1},512),i(C0,{class:"absolute bottom-0 mobile:left-0"})])]),i(p0,{onPopBtnCheck:N})],64)}}}),$l={};function Sl(e,t){const r=f1;return F(),s0(r)}var Al=E0($l,[["render",Sl]]);const El={};function zl(e,t){const r=f1;return F(),s0(r)}var Bl=E0(El,[["render",zl]]);const Pl={class:"flex items-stretch"},Dl={class:"laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative"},Ll={class:"w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto"},Il=c("h1",{class:"text-white relative -left-2 -top-2 mobile:text-5xl w-3/4 mobile:w-full"},"\u5929\u6587\u53F0\u7BA1\u7406",-1),Rl=q(" \u65B0\u589E "),Tl={class:"w-9/12 mobile:w-11/12 table-container mobile:m-auto"},Nl={key:0,id:"responsive-table",class:"animate__animated animate__fadeIn"},Vl=c("thead",{class:"w-table:table-header-group hidden"},[c("tr",null,[c("th",null,"\u5929\u6587\u53F0\u5206\u985E"),c("th",null,"\u5206\u985E ID"),c("th",{class:"w-20 text-right"},"\u7DE8\u8F2F"),c("th",{class:"w-20 text-right"},"\u522A\u9664")])],-1),Ol={"data-title":"\u5206\u985E"},jl={"data-title":"ID"},ql={"data-title":"\u7DE8\u8F2F"},Ul=["onClick"],Hl=y0(`<defs><pattern x="-73.8" y="198.9" width="69" height="69" patternUnits="userSpaceOnUse" id="\u5713\u9EDE\u5716\u6A23" viewBox="2.1 -70.9 69 69" overflow="visible"><g><polygon fill="none" points="71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9 			"></polygon><polygon fill="#F6BB60" points="71.1,-1.9 2.1,-1.9 2.1,-70.9 71.1,-70.9 			"></polygon><g><path fill="#FFFFFF" d="M61.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-71.7,61.8-71.7,61.8-71.7\r
					C61.8-71.6,61.8-71.6,61.8-71.7"></path><path fill="#FFFFFF" d="M54.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-71.7,54.1-71.7,54.1-71.7\r
					C54.1-71.6,54.1-71.6,54.1-71.7"></path><path fill="#FFFFFF" d="M46.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.4-71.7,46.4-71.7,46.4-71.7\r
					C46.4-71.6,46.4-71.6,46.4-71.7"></path><path fill="#FFFFFF" d="M38.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-71.7,38.8-71.7,38.8-71.7\r
					C38.8-71.6,38.8-71.6,38.8-71.7"></path><path fill="#FFFFFF" d="M31.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-71.7,31.1-71.7,31.1-71.7\r
					C31.1-71.6,31.1-71.6,31.1-71.7"></path><path fill="#FFFFFF" d="M23.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.4-71.7,23.4-71.7,23.4-71.7\r
					C23.4-71.6,23.4-71.6,23.4-71.7"></path><path fill="#FFFFFF" d="M15.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-71.7,15.8-71.7,15.8-71.7\r
					C15.8-71.6,15.8-71.6,15.8-71.7"></path><path fill="#FFFFFF" d="M8.1-71.7c0,0.1,0,0.1,0,0.2C8-71.4,8-71.4,7.9-71.3c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.1-71.7,8.1-71.7,8.1-71.7\r
					C8.1-71.6,8.1-71.6,8.1-71.7"></path><path fill="#FFFFFF" d="M0.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.8-69.4,1-69,1.2-68.9c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.4-71.7,0.4-71.7,0.4-71.7\r
					C0.4-71.6,0.4-71.6,0.4-71.7"></path></g><g><path fill="#FFFFFF" d="M69.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-71.7,69.4-71.7,69.4-71.7\r
					C69.4-71.6,69.4-71.6,69.4-71.7"></path></g><path fill="#FFFFFF" d="M0.5-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-69.4,1-69,1.3-68.9c0.2,0,0.4-0.1,0.5-0.1\r
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-71.7,0.5-71.7,0.5-71.7\r
				C0.5-71.6,0.5-71.6,0.5-71.7"></path><g><g><path fill="#FFFFFF" d="M69.4-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-64,69.4-64.1,69.4-64C69.4-64,69.4-64,69.4-64"></path><path fill="#FFFFFF" d="M61.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-64,61.8-64.1,61.8-64C61.8-64,61.8-64,61.8-64"></path><path fill="#FFFFFF" d="M54.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-64,54.1-64.1,54.1-64C54.1-64,54.1-64,54.1-64"></path><path fill="#FFFFFF" d="M46.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-64,46.5-64.1,46.5-64C46.5-64,46.5-64,46.5-64"></path><path fill="#FFFFFF" d="M38.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-64,38.8-64.1,38.8-64C38.8-64,38.8-64,38.8-64"></path><path fill="#FFFFFF" d="M31.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-64,31.1-64.1,31.1-64C31.1-64,31.1-64,31.1-64"></path><path fill="#FFFFFF" d="M23.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-64,23.5-64.1,23.5-64C23.5-64,23.5-64,23.5-64"></path><path fill="#FFFFFF" d="M15.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-64,15.8-64.1,15.8-64C15.8-64,15.8-64,15.8-64"></path><path fill="#FFFFFF" d="M8.2-64c0,0.1,0,0.1,0,0.2C8.1-63.7,8-63.7,8-63.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-62.2,8.2-62,8.3-61.9c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-64,8.2-64.1,8.2-64C8.1-64,8.1-64,8.2-64"></path><path fill="#FFFFFF" d="M0.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-62,3-61.9,3.1-62c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-64,0.5-64.1,0.5-64C0.5-64,0.5-64,0.5-64"></path></g><g><path fill="#FFFFFF" d="M69.4-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-56.4,69.4-56.4,69.4-56.3\r
						C69.4-56.3,69.4-56.3,69.4-56.3"></path><path fill="#FFFFFF" d="M61.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-56.4,61.8-56.4,61.8-56.3\r
						C61.8-56.3,61.8-56.3,61.8-56.3"></path><path fill="#FFFFFF" d="M54.1-56.3c0,0.1,0,0.1,0,0.2C54-56.1,54-56.1,53.9-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-56.4,54.1-56.4,54.1-56.3\r
						C54.1-56.3,54.1-56.3,54.1-56.3"></path><path fill="#FFFFFF" d="M46.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-56.4,46.5-56.4,46.5-56.3\r
						C46.5-56.3,46.5-56.3,46.5-56.3"></path><path fill="#FFFFFF" d="M38.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-56.4,38.8-56.4,38.8-56.3\r
						C38.8-56.3,38.8-56.3,38.8-56.3"></path><path fill="#FFFFFF" d="M31.1-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-56.4,31.1-56.4,31.1-56.3\r
						C31.1-56.3,31.1-56.3,31.1-56.3"></path><path fill="#FFFFFF" d="M23.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-56.4,23.5-56.4,23.5-56.3\r
						C23.5-56.3,23.5-56.3,23.5-56.3"></path><path fill="#FFFFFF" d="M15.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-56.4,15.8-56.4,15.8-56.3\r
						C15.8-56.3,15.8-56.3,15.8-56.3"></path><path fill="#FFFFFF" d="M8.2-56.3c0,0.1,0,0.1,0,0.2C8.1-56.1,8-56.1,8-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-56.4,8.2-56.4,8.2-56.3\r
						C8.1-56.3,8.1-56.3,8.2-56.3"></path><path fill="#FFFFFF" d="M0.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-56.4,0.5-56.4,0.5-56.3\r
						C0.5-56.3,0.5-56.3,0.5-56.3"></path></g><g><path fill="#FFFFFF" d="M69.4-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-48.7,69.4-48.8,69.4-48.7\r
						C69.4-48.7,69.4-48.7,69.4-48.7"></path><path fill="#FFFFFF" d="M61.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-48.7,61.8-48.8,61.8-48.7\r
						C61.8-48.7,61.8-48.7,61.8-48.7"></path><path fill="#FFFFFF" d="M54.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-48.7,54.1-48.8,54.1-48.7\r
						C54.1-48.7,54.1-48.7,54.1-48.7"></path><path fill="#FFFFFF" d="M46.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-48.7,46.5-48.8,46.5-48.7\r
						C46.5-48.7,46.5-48.7,46.5-48.7"></path><path fill="#FFFFFF" d="M38.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-48.7,38.8-48.8,38.8-48.7\r
						C38.8-48.7,38.8-48.7,38.8-48.7"></path><path fill="#FFFFFF" d="M31.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-48.7,31.1-48.8,31.1-48.7\r
						C31.1-48.7,31.1-48.7,31.1-48.7"></path><path fill="#FFFFFF" d="M23.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-48.7,23.5-48.8,23.5-48.7\r
						C23.5-48.7,23.5-48.7,23.5-48.7"></path><path fill="#FFFFFF" d="M15.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-48.7,15.8-48.8,15.8-48.7\r
						C15.8-48.7,15.8-48.7,15.8-48.7"></path><path fill="#FFFFFF" d="M8.2-48.7c0,0.1,0,0.1,0,0.2C8.1-48.4,8-48.4,8-48.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C8.5-46.4,8.7-46,8.9-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-48.7,8.2-48.8,8.2-48.7\r
						C8.1-48.7,8.1-48.7,8.2-48.7"></path><path fill="#FFFFFF" d="M0.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-46.4,1-46,1.3-46c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-48.7,0.5-48.8,0.5-48.7\r
						C0.5-48.7,0.5-48.7,0.5-48.7"></path></g><g><path fill="#FFFFFF" d="M69.4-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-41.1,69.4-41.1,69.4-41\r
						C69.4-41,69.4-41,69.4-41"></path><path fill="#FFFFFF" d="M61.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-41.1,61.8-41.1,61.8-41\r
						C61.8-41,61.8-41,61.8-41"></path><path fill="#FFFFFF" d="M54.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-41.1,54.1-41.1,54.1-41\r
						C54.1-41,54.1-41,54.1-41"></path><path fill="#FFFFFF" d="M46.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-41.1,46.5-41.1,46.5-41\r
						C46.5-41,46.5-41,46.5-41"></path><path fill="#FFFFFF" d="M38.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-41.1,38.8-41.1,38.8-41\r
						C38.8-41,38.8-41,38.8-41"></path><path fill="#FFFFFF" d="M31.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-41.1,31.1-41.1,31.1-41\r
						C31.1-41,31.1-41,31.1-41"></path><path fill="#FFFFFF" d="M23.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-41.1,23.5-41.1,23.5-41\r
						C23.5-41,23.5-41,23.5-41"></path><path fill="#FFFFFF" d="M15.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-41.1,15.8-41.1,15.8-41\r
						C15.8-41,15.8-41,15.8-41"></path><path fill="#FFFFFF" d="M8.2-41c0,0.1,0,0.1,0,0.2C8.1-40.8,8-40.8,8-40.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-41.1,8.2-41.1,8.2-41C8.1-41,8.1-41,8.2-41"></path><path fill="#FFFFFF" d="M0.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-39,3-39,3.1-39c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-41.1,0.5-41.1,0.5-41C0.5-41,0.5-41,0.5-41"></path></g><g><path fill="#FFFFFF" d="M69.4-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-33.4,69.4-33.5,69.4-33.4\r
						C69.4-33.4,69.4-33.4,69.4-33.4"></path><path fill="#FFFFFF" d="M61.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-33.4,61.8-33.5,61.8-33.4\r
						C61.8-33.4,61.8-33.4,61.8-33.4"></path><path fill="#FFFFFF" d="M54.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-33.4,54.1-33.5,54.1-33.4\r
						C54.1-33.4,54.1-33.4,54.1-33.4"></path><path fill="#FFFFFF" d="M46.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-33.4,46.5-33.5,46.5-33.4\r
						C46.5-33.4,46.5-33.4,46.5-33.4"></path><path fill="#FFFFFF" d="M38.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-33.4,38.8-33.5,38.8-33.4\r
						C38.8-33.4,38.8-33.4,38.8-33.4"></path><path fill="#FFFFFF" d="M31.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-33.4,31.1-33.5,31.1-33.4\r
						C31.1-33.4,31.1-33.4,31.1-33.4"></path><path fill="#FFFFFF" d="M23.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-33.4,23.5-33.5,23.5-33.4\r
						C23.5-33.4,23.5-33.4,23.5-33.4"></path><path fill="#FFFFFF" d="M15.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-33.4,15.8-33.5,15.8-33.4\r
						C15.8-33.4,15.8-33.4,15.8-33.4"></path><path fill="#FFFFFF" d="M8.2-33.4c0,0.1,0,0.1,0,0.2C8.1-33.1,8-33.1,8-33.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-33.4,8.2-33.5,8.2-33.4\r
						C8.1-33.4,8.1-33.4,8.2-33.4"></path><path fill="#FFFFFF" d="M0.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-33.4,0.5-33.5,0.5-33.4\r
						C0.5-33.4,0.5-33.4,0.5-33.4"></path></g><g><path fill="#FFFFFF" d="M69.4-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-25.8,69.4-25.8,69.4-25.7\r
						C69.4-25.7,69.4-25.7,69.4-25.7"></path><path fill="#FFFFFF" d="M61.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-25.8,61.8-25.8,61.8-25.7\r
						C61.8-25.7,61.8-25.7,61.8-25.7"></path><path fill="#FFFFFF" d="M54.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-25.8,54.1-25.8,54.1-25.7\r
						C54.1-25.7,54.1-25.7,54.1-25.7"></path><path fill="#FFFFFF" d="M46.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-25.8,46.5-25.8,46.5-25.7\r
						C46.5-25.7,46.5-25.7,46.5-25.7"></path><path fill="#FFFFFF" d="M38.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-25.8,38.8-25.8,38.8-25.7\r
						C38.8-25.7,38.8-25.7,38.8-25.7"></path><path fill="#FFFFFF" d="M31.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-25.8,31.1-25.8,31.1-25.7\r
						C31.1-25.7,31.1-25.7,31.1-25.7"></path><path fill="#FFFFFF" d="M23.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-25.8,23.5-25.8,23.5-25.7\r
						C23.5-25.7,23.5-25.7,23.5-25.7"></path><path fill="#FFFFFF" d="M15.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-25.8,15.8-25.8,15.8-25.7\r
						C15.8-25.7,15.8-25.7,15.8-25.7"></path><path fill="#FFFFFF" d="M8.2-25.7c0,0.1,0,0.1,0,0.2C8.1-25.4,8-25.5,8-25.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-24,8.2-23.8,8.3-23.6c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-25.8,8.2-25.8,8.2-25.7\r
						C8.1-25.7,8.1-25.7,8.2-25.7"></path><path fill="#FFFFFF" d="M0.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-23.5,1-23.1,1.3-23c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-25.8,0.5-25.8,0.5-25.7\r
						C0.5-25.7,0.5-25.7,0.5-25.7"></path></g><g><path fill="#FFFFFF" d="M69.4-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-18.1,69.4-18.2,69.4-18.1\r
						C69.4-18,69.4-18.1,69.4-18.1"></path><path fill="#FFFFFF" d="M61.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-18.1,61.8-18.2,61.8-18.1\r
						C61.8-18,61.8-18.1,61.8-18.1"></path><path fill="#FFFFFF" d="M54.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-18.1,54.1-18.2,54.1-18.1\r
						C54.1-18,54.1-18.1,54.1-18.1"></path><path fill="#FFFFFF" d="M46.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-18.1,46.5-18.2,46.5-18.1\r
						C46.5-18,46.5-18.1,46.5-18.1"></path><path fill="#FFFFFF" d="M38.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-18.1,38.8-18.2,38.8-18.1\r
						C38.8-18,38.8-18.1,38.8-18.1"></path><path fill="#FFFFFF" d="M31.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-18.1,31.1-18.2,31.1-18.1\r
						C31.1-18,31.1-18.1,31.1-18.1"></path><path fill="#FFFFFF" d="M23.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-18.1,23.5-18.2,23.5-18.1\r
						C23.5-18,23.5-18.1,23.5-18.1"></path><path fill="#FFFFFF" d="M15.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-18.1,15.8-18.2,15.8-18.1\r
						C15.8-18,15.8-18.1,15.8-18.1"></path><path fill="#FFFFFF" d="M8.2-18.1c0,0.1,0,0.1,0,0.2C8.1-17.8,8-17.8,8-17.8c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-16.3,8.2-16.1,8.3-16c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-18.1,8.2-18.2,8.2-18.1\r
						C8.1-18,8.1-18.1,8.2-18.1"></path><path fill="#FFFFFF" d="M0.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-16.1,3-16,3.1-16c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-18.1,0.5-18.2,0.5-18.1\r
						C0.5-18,0.5-18.1,0.5-18.1"></path></g><g><path fill="#FFFFFF" d="M69.4-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-10.5,69.4-10.5,69.4-10.4\r
						C69.4-10.4,69.4-10.4,69.4-10.4"></path><path fill="#FFFFFF" d="M61.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C63.9-8,63.8-8.2,64-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-10.5,61.8-10.5,61.8-10.4\r
						C61.8-10.4,61.8-10.4,61.8-10.4"></path><path fill="#FFFFFF" d="M54.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-10.5,54.1-10.5,54.1-10.4\r
						C54.1-10.4,54.1-10.4,54.1-10.4"></path><path fill="#FFFFFF" d="M46.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-10.5,46.5-10.5,46.5-10.4\r
						C46.5-10.4,46.5-10.4,46.5-10.4"></path><path fill="#FFFFFF" d="M38.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C40.9-8,40.8-8.2,41-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-10.5,38.8-10.5,38.8-10.4\r
						C38.8-10.4,38.8-10.4,38.8-10.4"></path><path fill="#FFFFFF" d="M31.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-10.5,31.1-10.5,31.1-10.4\r
						C31.1-10.4,31.1-10.4,31.1-10.4"></path><path fill="#FFFFFF" d="M23.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-10.5,23.5-10.5,23.5-10.4\r
						C23.5-10.4,23.5-10.4,23.5-10.4"></path><path fill="#FFFFFF" d="M15.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C17.9-8,17.8-8.2,18-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-10.5,15.8-10.5,15.8-10.4\r
						C15.8-10.4,15.8-10.4,15.8-10.4"></path><path fill="#FFFFFF" d="M8.2-10.4c0,0.1,0,0.1,0,0.2C8.1-10.1,8-10.2,8-10.1C7.9-10,7.9-9.8,7.9-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-8.7,8.2-8.5,8.3-8.3c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-10.5,8.2-10.5,8.2-10.4\r
						C8.1-10.4,8.1-10.4,8.2-10.4"></path><path fill="#FFFFFF" d="M0.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1C0.3-10,0.2-9.8,0.2-9.8c-0.2,0.1,0,0.2,0,0.3\r
						c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-8.2,1-7.8,1.3-7.7c0.2,0,0.4-0.1,0.5-0.1\r
						c0.2,0,0.4,0,0.6-0.1C2.6-8,2.5-8.2,2.7-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
						c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
						c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-10.5,0.5-10.5,0.5-10.4\r
						C0.5-10.4,0.5-10.4,0.5-10.4"></path></g></g><g><path fill="#FFFFFF" d="M69.4-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C69.8-0.5,70-0.1,70.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-2.8,69.4-2.9,69.4-2.8\r
					C69.4-2.7,69.4-2.8,69.4-2.8"></path><path fill="#FFFFFF" d="M61.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C61.6-1,61.8-0.8,62-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-2.8,61.8-2.9,61.8-2.8\r
					C61.8-2.7,61.8-2.8,61.8-2.8"></path><path fill="#FFFFFF" d="M54.1-2.8c0,0.1,0,0.1,0,0.2C54-2.5,54-2.5,53.9-2.5c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C54-1,54.1-0.8,54.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C56.9-0.8,57-1,57.1-1.2c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-2.8,54.1-2.9,54.1-2.8\r
					C54.1-2.7,54.1-2.8,54.1-2.8"></path><path fill="#FFFFFF" d="M46.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C46.8-0.5,47-0.1,47.2,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-2.8,46.5-2.9,46.5-2.8\r
					C46.5-2.7,46.5-2.8,46.5-2.8"></path><path fill="#FFFFFF" d="M38.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C38.6-1,38.8-0.8,39-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-2.8,38.8-2.9,38.8-2.8\r
					C38.8-2.7,38.8-2.8,38.8-2.8"></path><path fill="#FFFFFF" d="M31.1-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C31-1,31.1-0.8,31.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-2.8,31.1-2.9,31.1-2.8\r
					C31.1-2.7,31.1-2.8,31.1-2.8"></path><path fill="#FFFFFF" d="M23.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C23.8-0.5,24-0.1,24.3,0c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-2.8,23.5-2.9,23.5-2.8\r
					C23.5-2.7,23.5-2.8,23.5-2.8"></path><path fill="#FFFFFF" d="M15.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C15.7-1,15.8-0.8,16-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1\r
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2\r
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8\r
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-2.8,15.8-2.9,15.8-2.8\r
					C15.8-2.7,15.8-2.8,15.8-2.8"></path><path fill="#FFFFFF" d="M8.2-2.8c0,0.1,0,0.1,0,0.2C8.1-2.5,8-2.5,8-2.5C7.9-2.4,7.9-2.2,7.9-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-1,8.2-0.8,8.3-0.7C8.5-0.5,8.7-0.1,8.9,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C9-3.5,8.8-3.4,8.7-3.4\r
					C8.5-3.3,8.6-3.2,8.4-3.1C8.3-3.1,8.2-3,8.2-2.9C8.2-2.8,8.2-2.9,8.2-2.8C8.1-2.7,8.1-2.8,8.2-2.8"></path><path fill="#FFFFFF" d="M0.5-2.8c0,0.1,0,0.1,0,0.2C0.4-2.5,0.4-2.5,0.3-2.5C0.3-2.4,0.2-2.2,0.2-2.1c-0.2,0.1,0,0.2,0,0.3\r
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C0.3-1,0.5-0.8,0.7-0.7C0.9-0.5,1-0.1,1.3,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1\r
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C3.3-0.8,3.4-1,3.5-1.2c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3\r
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C1.3-3.5,1.2-3.4,1-3.4\r
					C0.9-3.3,0.9-3.2,0.7-3.1C0.6-3.1,0.5-3,0.5-2.9C0.5-2.8,0.5-2.9,0.5-2.8C0.5-2.7,0.5-2.8,0.5-2.8"></path></g></g></pattern></defs><path id="XMLID_1_" class="group-hover:fill-sub-color-dark" fill="#c5c5ca" d="M0.1,25.2c1.7-0.8,5-2.3,6.7-3.1c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0c0,0,0,0,0,0\r
	c0.1,0,0.3-0.1,0.4-0.2c4.7-4.8,9.3-9.6,14-14.3c0.7-0.7,1.3-1.4,2-2c0,0,0.1-0.1,0.1-0.1c1.1-1.4,1.1-3.3-0.2-4.5\r
	c-1.3-1.3-3.4-1.2-4.7,0.1c-4.7,4.8-9.3,9.6-14,14.3c-0.7,0.7-1.3,1.4-2,2c-0.2,0.2-0.2,0.4-0.1,0.6c-0.2,0.5-0.4,0.9-0.6,1.4\r
	c-0.1,0.2-0.2,0.4-0.3,0.7c-0.5,1.3-1.2,3.4-1.8,4.7 M22.9,4.3c-1-0.9-1.9-1.9-2.9-2.8C21.7,0.4,23.8,2.5,22.9,4.3z M17.6,3.9\r
	c0.5-0.5,1-1.1,1.6-1.6c1,1,2,2,3,3c-4.5,4.6-9,9.3-13.6,13.9c-0.5,0.5-1,1.1-1.6,1.6c-1-1-2-2-3-3C8.5,13.1,13,8.5,17.6,3.9z\r
	 M3.4,19.2c0.7,0.7,1.5,1.5,2.2,2.2c-0.7,0.3-1.4,0.6-2.2,1c-0.3-0.3-0.7-0.6-1-1C2.8,20.7,3.1,19.9,3.4,19.2z"></path>`,2),Zl=[Hl],Gl={"data-title":"\u522A\u9664"},Xl=["onClick"],Ql=y0('<g id="trash"><path class="cls-1" d="M20.5,4H16.86l-.69-2.06A1.37,1.37,0,0,0,14.87,1H10.13a1.37,1.37,0,0,0-1.3.94L8.14,4H4.5a.5.5,0,0,0,0,1h.34l1,17.59A1.45,1.45,0,0,0,7.2,24H17.8a1.45,1.45,0,0,0,1.41-1.41L20.16,5h.34a.5.5,0,0,0,0-1ZM9.77,2.26A.38.38,0,0,1,10.13,2h4.74a.38.38,0,0,1,.36.26L15.81,4H9.19Zm8.44,20.27a.45.45,0,0,1-.41.47H7.2a.45.45,0,0,1-.41-.47L5.84,5H19.16Z"></path><path class="cls-1" d="M9.5,10a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,1,0v-7A.5.5,0,0,0,9.5,10Z"></path><path class="cls-1" d="M12.5,9a.5.5,0,0,0-.5.5v9a.5.5,0,0,0,1,0v-9A.5.5,0,0,0,12.5,9Z"></path><path class="cls-1" d="M15.5,10a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,1,0v-7A.5.5,0,0,0,15.5,10Z"></path></g>',1),Wl=[Ql],Yl=K({setup(e){const t=c0(),r=v0(),n=n0(),a=String(n.name),s=o([]),u=o("");w0(async()=>{await h()});function _(f){u.value=String(f),t.openPopMsg("\u78BA\u5B9A\u522A\u9664?",!0)}const g=z(()=>t.get_popMsgBtnReturn);async function d(){await g,g.value&&(await s1(u.value,a),await h())}function p(f){const M="/board/observatories/edit/"+f;r.push(M)}async function h(){const f=await u4(a);s.value=f.data.observatoriesList}return(f,M)=>{const w=M0,b=a0("router-link"),$=i0,k=$0;return F(),C(j,null,[c("div",Pl,[i(w),c("div",Dl,[c("div",Ll,[Il,i(b,{to:"/board/observatories/add",class:"flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 btn text-center items-center p-0 justify-center"},{default:L(()=>[Rl]),_:1})]),c("div",Tl,[s.value.length>0&&s.value?(F(),C("table",Nl,[Vl,c("tbody",null,[(F(!0),C(j,null,h0(s.value,(v,S)=>(F(),C("tr",{key:S},[c("td",Ol,x(v.observatory_category_name),1),c("td",jl,x(v.observatory_category_id),1),c("td",ql,[(F(),C("svg",{onClick:I(E=>p(v.observatory_category_id),["prevent"]),class:"fill-main-color-light inline-block w-28px h-auto group",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:a":"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",x:"0px",y:"0px",width:"26px",height:"26px",viewBox:"-0.8 -0.1 26 26","enable-background":"new -0.8 -0.1 26 26","xml:space":"preserve"},Zl,8,Ul))]),c("td",Gl,[(F(),C("svg",{onClick:I(E=>_(v.observatory_category_id),["prevent"]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 25",class:"fill-main-color-light w-29px h-auto inline-block hover:fill-sub-color-dark"},Wl,8,Xl))])]))),128))])])):J("",!0)]),i($,{class:"absolute bottom-0 mobile:left-0"})])]),i(k,{onPopBtnCheck:d})],64)}}}),Jl={class:"flex items-stretch"},Kl={class:"laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative"},cn={class:"w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto flex-wrap"},tn={class:"text-white relative -left-2 -top-2 mobile:text-5xl w-table:w-3/4 w-full mobile:w-full w-table:m-0 mb-5"},en=["onClick"],rn={class:"w-table:w-5/12 w-full"},ln={class:"input-group mb-14"},nn=c("h4",{class:"text-main-color-light font-normal"},"\u5929\u6587\u53F0\u5206\u985E",-1),an={class:"w-table:w-5/12 w-full"},sn={class:"input-group mb-14"},on=c("h4",{class:"text-main-color-light font-normal"},"\u5206\u985E ID",-1),Fn={class:"w-full editer-container"},un={class:"w-full editer-inner edit-mode md-container"},dn=c("h4",{class:"text-main-color-light font-normal"},"\u8868\u683C\u5167\u5BB9",-1),pn={key:0,class:"w-table:w-10/12 w-full mt-16"},C1=K({setup(e){const t=n0(),r=v0(),n=String(t.name),a=String(t.params.mid),s=c0(),u=z(()=>n==="AddSingleObservatories"?"\u65B0\u589E\u5929\u6587\u53F0":"\u7DE8\u8F2F\u5929\u6587\u53F0"),_=z(()=>n==="AddSingleObservatories"?"\u5132\u5B58\u65B0\u589E":"\u5132\u5B58\u7DE8\u8F2F"),g=o({validate:()=>({valid:!1})}),d=o(""),p=o(""),h=o(""),f={observatoriesTitleRef:l0.required,observatoriesCatIdRef:l0.required,observatoriesContentRef:l0.required},M=o(!1);function w(){M.value=!0,s.openPopMsg("\u78BA\u5B9A\u522A\u9664?",!0)}function b(){M.value=!1,s.openPopMsg("\u78BA\u5B9A"+u.value+"?",!0)}const $=z(()=>s.get_popMsgBtnReturn);async function k(){await $,$.value&&!M.value&&v(),$.value&&M.value&&S(),$.value||(M.value=!1)}const v=P0(async()=>{const{valid:A}=await g.value.validate();if(await $,A&&$.value)if(n==="AddSingleObservatories"){console.log("\u53EF\u4EE5\u65B0\u589E");const P=await p4(d.value,p.value,h.value,n);P.data.setNewObservatories.code&&(P.data.setNewObservatories.code>0?r.push("/board/observatories"):s.openPopMsg(P.data.setNewObservatories.message,!1))}else{console.log("\u53EF\u4EE5\u7DE8\u8F2F");const P=await h4(d.value,p.value,h.value,n);P.data.mutObservatories.code&&(P.data.mutObservatories.code>0?r.push("/board/observatories"):s.openPopMsg(P.data.mutObservatories.message,!1))}},1e3),S=async()=>{console.log("\u53EF\u4EE5\u522A\u9664"),await s1(a,n),await setTimeout(()=>{r.push("/board/observatories")},1e3)};async function E(){if(n==="EditSingleObservatories"&&a){const A=await d4(a,n);d.value=String(A.data.getSingleObservatory.observatory_category_name),p.value=String(A.data.getSingleObservatory.observatory_category_id),h.value=String(A.data.getSingleObservatory.observatory_post_content)}}return E(),(A,P)=>{const N=M0,e0=a0("v-md-editor"),Y=i0,V=$0;return F(),C(j,null,[c("div",Jl,[i(N),c("div",Kl,[c("div",cn,[c("h1",tn,x(l(u)),1),c("button",{onClick:I(b,["prevent"]),class:"flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 text-center items-center p-0 justify-center"},x(l(_)),9,en)]),i(l(S0),{ref_key:"formRef",ref:g,"validation-schema":f,class:"w-9/12 flex flex-wrap mobile:w-11/12 table-container mobile:m-auto justify-between"},{default:L(({errors:U})=>[c("div",rn,[c("div",ln,[nn,i(l(r0),{name:"observatoriesTitleRef",type:"text",class:y(["h-16 block m-auto bottom-line-input text-lg",{"border-sp-color-dark border-opacity-100":U.observatoriesTitleRef}]),modelValue:d.value,"onUpdate:modelValue":P[0]||(P[0]=O=>d.value=O)},null,8,["class","modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"},x(U.observatoriesTitleRef),513),[[D,U.observatoriesTitleRef]])])]),c("div",an,[c("div",sn,[on,i(l(r0),{name:"observatoriesCatIdRef",type:"text",class:y(["h-16 block m-auto bottom-line-input text-lg",[{"border-sp-color-dark border-opacity-100":U.observatoriesCatIdRef},{"pointer-events-none border-0":l(n)==="EditSingleObservatories"}]]),modelValue:p.value,"onUpdate:modelValue":P[1]||(P[1]=O=>p.value=O)},null,8,["class","modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block m-auto mt-2"},x(U.observatoriesCatIdRef),513),[[D,U.observatoriesCatIdRef]])])]),c("div",Fn,[c("div",un,[dn,B(i(l(r0),{name:"observatoriesContentRef",modelValue:h.value,"onUpdate:modelValue":P[2]||(P[2]=O=>h.value=O)},null,8,["modelValue"]),[[D,!1]]),i(e0,{class:"markdown-body",modelValue:h.value,"onUpdate:modelValue":P[3]||(P[3]=O=>h.value=O),height:"550px"},null,8,["modelValue"]),B(c("span",{class:"text-sp-color-dark text-xs w-full h-5 block mt-2"},x(U.observatoriesContentRef),513),[[D,U.observatoriesContentRef]])])]),l(n)==="EditSingleObservatories"?(F(),C("div",pn,[c("button",{class:"admin-delete-sbtn",onClick:P[4]||(P[4]=I(O=>w(),["prevent"]))}," \u522A\u9664 ")])):J("",!0)]),_:1},512),i(Y,{class:"absolute bottom-0 mobile:left-0"})])]),i(V,{onPopBtnCheck:k})],64)}}}),hn={};function fn(e,t){const r=C1;return F(),s0(r)}var Cn=E0(hn,[["render",fn]]);const gn={};function mn(e,t){const r=C1;return F(),s0(r)}var _n=E0(gn,[["render",mn]]);const bn=[{path:"/",name:"Home",component:rc,meta:{title:"\u9996\u9801",manage:!1}},{path:"/home",redirect:"/"},{path:"/about",name:"About",component:Mc,meta:{title:"\u95DC\u65BC\u6211\u5011",manage:!1}},{path:"/science",name:"Science",component:Vc,meta:{title:"\u5929\u6587\u79D1\u666E",manage:!1}},{path:"/science/:sid",name:"SingleScience",component:Uc,meta:{title:"\u5929\u6587\u79D1\u666E",manage:!1}},{path:"/story",name:"Story",component:e4,meta:{title:"\u661F\u661F\u7269\u8A9E",manage:!1}},{path:"/story/:nid",name:"SingleStory",component:n4,meta:{title:"\u661F\u661F\u7269\u8A9E",manage:!1}},{path:"/facilities",name:"Facilities",component:S4,meta:{title:"\u5929\u6587\u8A2D\u65BD",manage:!1}},{path:"/stargazing",name:"Stargazing",component:W4,meta:{title:"\u89C0\u661F\u5730\u9EDE",manage:!1}},{path:"/archive/:tagid",name:"Archive",component:i3,meta:{title:"\u6A19\u7C64",manage:!1}},{path:"/search",name:"Search",component:$3,meta:{title:"\u641C\u5C0B\u9801\u9762",manage:!1}},{path:"/notfound",name:"NotFound",component:P3,meta:{title:"\u627E\u4E0D\u5230\u7DB2\u9801",manage:!1}},{path:"/:catchAll(.*)",redirect:"/notfound"},{path:"/login",name:"Login",component:R3,meta:{title:"\u5F8C\u53F0\u7CFB\u7D71\u767B\u5165",manage:!0}},{path:"/board",name:"Board",component:A5,meta:{title:"\u5F8C\u53F0\u7CFB\u7D71\u7BA1\u7406",manage:!0}},{path:"/board/slogan",name:"Slogan",component:nt,meta:{title:"\u6A19\u8A9E\u7BA1\u7406",manage:!0}},{path:"/board/stargazer",name:"Stargazer",component:Bt,meta:{title:"\u89C0\u661F\u5730\u9EDE\u5217\u8868",manage:!0}},{path:"/board/stargazer/edit/:lid",name:"EditSingleStargazer",component:de,meta:{title:"\u7DE8\u8F2F\u89C0\u661F\u5730\u9EDE",manage:!0}},{path:"/board/stargazer/add",name:"AddSingleStargazer",component:oe,meta:{title:"\u65B0\u589E\u89C0\u661F\u5730\u9EDE",manage:!0}},{path:"/board/categories",name:"Categories",component:ze,meta:{title:"\u6587\u7AE0\u5206\u985E\u7BA1\u7406",manage:!0}},{path:"/board/categories/edit/:cid",name:"EditSingleCategories",component:Xe,meta:{title:"\u7DE8\u8F2F\u6587\u7AE0\u5206\u985E",manage:!0}},{path:"/board/categories/add",name:"AddSingleCategories",component:He,meta:{title:"\u65B0\u589E\u6587\u7AE0\u5206\u985E",manage:!0}},{path:"/board/article",name:"Article",component:hr,meta:{title:"\u6587\u7AE0\u5217\u8868",manage:!0}},{path:"/board/article/edit/:pid",name:"EditSingleArticle",component:jr,meta:{title:"\u7DE8\u8F2F\u6587\u7AE0",manage:!0}},{path:"/board/article/add",name:"AddSingleArticle",component:Nr,meta:{title:"\u65B0\u589E\u6587\u7AE0",manage:!0}},{path:"/board/organization",name:"Organization",component:il,meta:{title:"\u6A5F\u69CB\u7BA1\u7406",manage:!0}},{path:"/board/organization/edit/:oid",name:"EditSingleOrganization",component:Bl,meta:{title:"\u7DE8\u8F2F\u6A5F\u69CB",manage:!0}},{path:"/board/organization/add",name:"AddSingleOrganization",component:Al,meta:{title:"\u65B0\u589E\u6A5F\u69CB",manage:!0}},{path:"/board/observatories",name:"Observatories",component:Yl,meta:{title:"\u5929\u6587\u53F0\u7BA1\u7406",manage:!0}},{path:"/board/observatories/edit/:mid",name:"EditSingleObservatories",component:_n,meta:{title:"\u7DE8\u8F2F\u5929\u6587\u53F0",manage:!0}},{path:"/board/observatories/add",name:"AddSingleObservatories",component:Cn,meta:{title:"\u65B0\u589E\u5929\u6587\u53F0",manage:!0}}],Z0=G1({history:X1(),routes:bn,scrollBehavior(e,t,r){let n=document.querySelector(".app-inner");return n&&(n.scrollTop=0),{behavior:"smooth"}}});Z0.beforeEach((e,t,r)=>{const n=c0();n.setEnterState(!1),n.setLoading(!0),setTimeout(()=>{r()},500)});Z0.afterEach((e,t)=>{c0().setLoading(!1)});e1.use(r1);j0.use(r1);j0.lang.use("zh-TW",Q1);const xn=W1(),D0=Y1(o2);D0.use(J1());D0.use(Z0);D0.use(xn);D0.use(e1);D0.use(j0);D0.use(K1);D0.use(x0);D0.mount("#app");
