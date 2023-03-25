"use strict";(self.webpackChunkboa_dev_github_io=self.webpackChunkboa_dev_github_io||[]).push([[4909],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>d});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(o),m=n,d=c["".concat(p,".").concat(m)]||c[m]||h[m]||r;return o?a.createElement(d,i(i({ref:t},l),{},{components:o})):a.createElement(d,i({ref:t},l))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<r;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6671:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=o(7462),n=(o(7294),o(3905));const r={layout:"post",tags:["post"],title:"Boa release v0.16",author:"Boa Developers"},i=void 0,s={permalink:"/boa-dev.github.io/blog/2022/09/25/boa-release-16",source:"@site/blog/2022-09-25-boa-release-16.md",title:"Boa release v0.16",description:"Summary",date:"2022-09-25T00:00:00.000Z",formattedDate:"September 25, 2022",tags:[{label:"post",permalink:"/boa-dev.github.io/blog/tags/post"}],readingTime:3.435,hasTruncateMarker:!1,authors:[{name:"Boa Developers"}],frontMatter:{layout:"post",tags:["post"],title:"Boa release v0.16",author:"Boa Developers"},prevItem:{title:"Adding a JavaScript interpreter to your Rust project",permalink:"/boa-dev.github.io/blog/2022/10/24/boa-usage"},nextItem:{title:"Boa release v0.15",permalink:"/boa-dev.github.io/blog/2022/06/10/boa-release-15"}},p={authorsImageUrls:[void 0]},u=[{value:"Summary",id:"summary",level:2},{value:"New ECMAScript features",id:"new-ecmascript-features",level:2},{value:"Support for Promises",id:"support-for-promises",level:3},{value:"Support for Async/Await",id:"support-for-asyncawait",level:3},{value:"Dense/Packed JavaScript Arrays",id:"densepacked-javascript-arrays",level:2},{value:"Support for URI encoding and decoding functions",id:"support-for-uri-encoding-and-decoding-functions",level:2},{value:"How can you contribute to Boa?",id:"how-can-you-contribute-to-boa",level:2},{value:"Thank You",id:"thank-you",level:3}],l={toc:u},c="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"Boa v0.16 is now available! After around 3 months of development, we are very happy to present you the newest release of\nthe Boa JavaScript engine. Boa makes it easy to embed a JS engine in your projects, and you can even use it from\nWebAssembly. See the ",(0,n.kt)("a",{parentName:"p",href:"/about"},"about")," page for more info."),(0,n.kt)("p",null,"Boa currently supports part of the JavaScript language. In this release, our conformance has grown from 62.29% to 74.53%\nin the official ECMAScript Test Suite (Test262). The engine now passes 68,612 tests, coming from 56,372 in Boa 0.15\n(21.7% increase), and we have closed 9 issues and merged 59 pull requests. You can check the full list of changes\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/blob/v0.16/CHANGELOG.md"},"here"),", and the full information on conformance\n",(0,n.kt)("a",{parentName:"p",href:"https://boa-dev.github.io/boa/test262/"},"here"),"."),(0,n.kt)("h2",{id:"new-ecmascript-features"},"New ECMAScript features"),(0,n.kt)("h3",{id:"support-for-promises"},"Support for Promises"),(0,n.kt)("p",null,"With this new release Boa ships support for ECMAScript Promises. All tests in the 262 test suite ",(0,n.kt)("inlineCode",{parentName:"p"},"built-ins/Promise")," pass.\nPromises enable asynchronous operations to be executed via an internal job queue. Starting with our work on Promises,\nwe have stopped ignoring the 262 tests that are flagged as ",(0,n.kt)("inlineCode",{parentName:"p"},"async"),". We also have enabled our 262 test runner to work\nwith asynchronous tests. We would like to thank ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aaronmunsters"},"@aaronmunsters")," for proposing\nthe initial PR for Promises (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/pull/1923"},"#1923"),") that we then could expand on."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// This program will print:\n//    1. End of synchronous execution.\n//    2. The Promise has been resolved.\n\nlet promise = Promise.resolve();\n\npromise.then(() => console.log("2. The Promise has been resolved."));\n\nconsole.log("1. End of synchronous execution.");\n')),(0,n.kt)("h3",{id:"support-for-asyncawait"},"Support for Async/Await"),(0,n.kt)("p",null,"The implementation of Promises has enabled us to implement async functions and the await keyword. The async/await syntax\nmakes it easier to use Promises within javascript. We have implemented async functions, async generators,\n",(0,n.kt)("inlineCode",{parentName:"p"},"for await...of")," loops and the ",(0,n.kt)("inlineCode",{parentName:"p"},"await")," keyword. While not all tests pass for these features yet, the basic functionality\nshould work."),(0,n.kt)("h2",{id:"densepacked-javascript-arrays"},"Dense/Packed JavaScript Arrays"),(0,n.kt)("p",null,"JavaScript Arrays are regular objects whose values are stored as indexed properties. Because arrays have no fixed\nlength, values can be assigned to any possible index without any of the previous indices being used. Due to this\nbehavior indexed properties are stored in a map instead of in a vector, as the vector would allocate a lot of unused\nmemory if a high index is used. We have implemented an optimization to make it possible to use optimized vector storage\nfor array values, as long as indices are not assigned out of order. This has improved the performance of arrays around\n",(0,n.kt)("strong",{parentName:"p"},"45%")," for arrays without empty slots. To learn more about this optimization take a look at the PR\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/pull/2167"},"#2167"),"."),(0,n.kt)("h2",{id:"support-for-uri-encoding-and-decoding-functions"},"Support for URI encoding and decoding functions"),(0,n.kt)("p",null,"This version for Boa ships with support for the built-in URI encoding and decoding functions ",(0,n.kt)("inlineCode",{parentName:"p"},"encodeURI"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"decodeURI"),",\n",(0,n.kt)("inlineCode",{parentName:"p"},"encodeURIComponent")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"decodeURIComponent"),". With the exception of UTF-16 related test, all test in the relevant 262\ntest suites pass for these functions."),(0,n.kt)("h2",{id:"how-can-you-contribute-to-boa"},"How can you contribute to Boa?"),(0,n.kt)("p",null,"In March, Boa opened financial contributions on its ",(0,n.kt)("a",{parentName:"p",href:"https://opencollective.com/boa"},"OpenCollective page"),".\nIf financial contribution is not your strength, you can contribute by asking to be assigned to one of our\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+no%3Aassignee"},"open issues"),", and asking for mentoring if you\ndon't know your way around the engine. Our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/blob/main/CONTRIBUTING.md"},"contribution guide"),"\nshould help you here. If you are more used to working with JavaScript or frontend web development, we also\nwelcome help to improve our web presence, either in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa-dev.github.io"},"our website"),", or in\nour ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/issues/820"},"testing representation")," page or benchmarks page. You can also contribute to\nour Criterion benchmark comparison GitHub ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/criterion-compare-action"},"action"),"."),(0,n.kt)("p",null,"We are also looking to improve the documentation of the engine, both for developers of the engine itself and for users of the\nengine. Feel free to contact us in ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/tUFFk9Y"},"Discord"),"."),(0,n.kt)("h3",{id:"thank-you"},"Thank You"),(0,n.kt)("p",null,"Last but certainly not least, a big ",(0,n.kt)("strong",{parentName:"p"},"Thank You")," to\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/graphs/contributors?from=2022-06-11&to=2022-09-25&type=c"},"all the contributors"),"\nof this Boa release. We would like to particularly thank our new contributors:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/CYBAI"},"@CYBAI")," who made their first contribution in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/2108"},"#2108")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/udhaykumarbala"},"@udhaykumarbala")," who made their first contribution in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/2245"},"#2245")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tunz"},"@tunz")," who made their first contribution in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/2261"},"#2261")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/anuvratsingh"},"@anuvratsingh")," who made their first contribution in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/2162"},"#2162")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/creampnx-x"},"@creampnx-x")," who made their first contribution in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/boa-dev/boa/pull/2274"},"#2274"))))}h.isMDXComponent=!0}}]);