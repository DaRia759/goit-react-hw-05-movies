"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[521],{521:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(861),c=e(439),a=e(757),i=e.n(a),o=e(791),u=e(689),s=e(308),h=e(184),f=function(){var t=(0,u.UO)().movieId,n=(0,o.useState)({}),e=(0,c.Z)(n,2),a=e[0],f=e[1];(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.M1)(t).then((function(t){return t.json()})).then((function(t){return f(t)}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]);var l=a.cast&&a.cast.map((function(t){return(0,h.jsxs)("div",{className:"cast-card",children:[(0,h.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w185".concat(t.profile_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVm-NOFWAwzSDCG2503S24gnb6ij0l6Qz1URGonjsEqkf6fmGza-C7SW9iuHQaJj_7sA&usqp=CAU",alt:t.name+"photo"}),(0,h.jsx)("p",{children:t.name}),(0,h.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}));return(0,h.jsxs)("div",{className:"cast-container",children:[(0,h.jsx)("h2",{children:"Credits:"}),l]})}},308:function(t,n,e){e.d(n,{Hg:function(){return c},M1:function(){return o},Pg:function(){return i},Pt:function(){return a},tx:function(){return u}});var r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODhhNjQxNDc2MjFjM2ZkNGQ2ODg4OTc3YTk3MDllYyIsInN1YiI6IjY0Zjc1OWE0ZmZjOWRlMDBlMTMyZTQwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V2H9jIDUdqU5vilUneBqZGbhHzj-gr5yql41Uj7BHJA"}},c=function(){return fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",r)},a=function(t){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),r)},i=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),r)},o=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),r)},u=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),r)}},861:function(t,n,e){function r(t,n,e,r,c,a,i){try{var o=t[a](i),u=o.value}catch(s){return void e(s)}o.done?n(u):Promise.resolve(u).then(r,c)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(c,a){var i=t.apply(n,e);function o(t){r(i,c,a,o,u,"next",t)}function u(t){r(i,c,a,o,u,"throw",t)}o(void 0)}))}}e.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=521.7949fb73.chunk.js.map