"use strict";(self.webpackChunkboa_dev_github_io=self.webpackChunkboa_dev_github_io||[]).push([[8743],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(d,i(i({ref:t},h),{},{components:a})):n.createElement(d,i({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7107:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={layout:"post",tags:["post"],title:"Boa release v0.10",author:"Boa Developers",permalink:"2020/10/02/boa-release-10.html"},i=void 0,s={permalink:"/boa-dev.github.io/blog/2020/10/02/boa-release-10",source:"@site/blog/2020-10-02-boa-release-10/index.md",title:"Boa release v0.10",description:"Boa is an experimental Javascript lexer, parser and compiler written in Rust. It has support for some of the language, can be embedded in Rust projects fairly easily and also used from the command line.",date:"2020-10-02T00:00:00.000Z",formattedDate:"October 2, 2020",tags:[{label:"post",permalink:"/boa-dev.github.io/blog/tags/post"}],readingTime:3.04,hasTruncateMarker:!1,authors:[{name:"Boa Developers"}],frontMatter:{layout:"post",tags:["post"],title:"Boa release v0.10",author:"Boa Developers",permalink:"2020/10/02/boa-release-10.html"},prevItem:{title:"Boa release v0.11",permalink:"/boa-dev.github.io/blog/2021/01/14/boa-release-11"},nextItem:{title:"Boa v0.9: measureme & optimisations",permalink:"/boa-dev.github.io/blog/2020/07/03/boa-release-09"}},l={authorsImageUrls:[void 0]},p=[{value:"Test262",id:"test262",level:2},{value:"Built-ins",id:"built-ins",level:2},{value:"Lexer",id:"lexer",level:2},{value:"Goal Symbols",id:"goal-symbols",level:3},{value:"Repl syntax highlighting",id:"repl-syntax-highlighting",level:2},{value:"Looking forward",id:"looking-forward",level:2}],h={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Boa is an experimental Javascript lexer, parser and compiler written in Rust. It has support for some of the language, can be embedded in Rust projects fairly easily and also used from the command line.\nBoa also exists to serve as a Rust implementation of the EcmaScript specification, there will be areas where we can utilise Rust and its fantastic ecosystem to make a fast, concurrent and safe engine."),(0,r.kt)("p",null,"We have a long way to go, however v0.10 has been the biggest release to date, with 138 issues closed!"),(0,r.kt)("p",null,"We have some highlights, but if you prefer to read the full changelog, you can do that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/blob/main/CHANGELOG.md"},"here")),(0,r.kt)("h2",{id:"test262"},"Test262"),(0,r.kt)("p",null,"One question we've been asked for a long time is \"how conformant are you to the spec?\". It's been tough to answer as we've been unable to run against the official test suite."),(0,r.kt)("p",null,"Test262 is the official ECMAScript Test Suite and exists to provide conformance tests for the latest drafts of the Ecma specification. It is used for all engines, you can even run it in your ",(0,r.kt)("a",{parentName:"p",href:"https://bakkot.github.io/test262-web-runner/"},"browser"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Thanks to @Razican in v0.10 we now have a test harness that allows us to run it against Boa at any time."),(0,r.kt)("p",null,"This is a new crate inside the Boa repository that can parse through all of the tests (roughly 40,000 of them) in under 10 minutes and tell us how conformant we are."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(449).Z,width:"1216",height:"654"})),(0,r.kt)("p",null,"Today Boa has ",(0,r.kt)("span",{class:"x x-first x-last"},"18"),"% conformity to the specification. We'll be keeping an eye on this number over the releases. We expect to achieve around 30% by 0.11 due to some of the fixes we're adding which should pass a few thousand tests."),(0,r.kt)("p",null,"These are run via Github Actions against PRs and for our main branch so that we can keep track of where we are and if there are regressions."),(0,r.kt)("h2",{id:"built-ins"},"Built-ins"),(0,r.kt)("p",null,"We've added support for ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date")),", ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"},(0,r.kt)("inlineCode",{parentName:"a"},"Map"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol"},"well-known symbols"),". Supporting Well-known symbols unblocks a lot of work around adding ",(0,r.kt)("inlineCode",{parentName:"p"},"@@iterators")," to some of our global objects which is coming up in the next release.",(0,r.kt)("br",{parentName:"p"}),"\n","Both ",(0,r.kt)("inlineCode",{parentName:"p"},"Math")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Number")," have had their remaining methods implemented."),(0,r.kt)("h2",{id:"lexer"},"Lexer"),(0,r.kt)("p",null,"The lexer has been rebuilt from scratch. Just like the old parser it was a single file before looping through and becoming unmaintainable. Today we've reorganised it into separate modules which know how to lex certain areas. The new lexer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/issues/294"},"now supports goal symbols")," and can now tokenize with the correct context at any time."),(0,r.kt)("h3",{id:"goal-symbols"},"Goal Symbols"),(0,r.kt)("p",null,"Our issue with goal symbols is explained by the V8 team:\n",(0,r.kt)("a",{parentName:"p",href:"https://v8.dev/blog/understanding-ecmascript-part-3#lexical-grammar"},"https://v8.dev/blog/understanding-ecmascript-part-3#lexical-grammar")),(0,r.kt)("p",null,"Previously we weren't distinguishing between the contexts where some input elements are permitted and some are not, so lexing ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," would yeild a ",(0,r.kt)("inlineCode",{parentName:"p"},"division")," symbols when it should be a ",(0,r.kt)("inlineCode",{parentName:"p"},"RegularExpressionLiteral")," for example. This change unblocked us being able to run Test262."),(0,r.kt)("p",null,"Performance wise it is much faster for larger files. The lexer is far more efficient at streaming tokens to the parser than previously so in some scenarios we have big gains."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"You can see all the benchmarks ",(0,r.kt)("a",{parentName:"em",href:"https://boa-dev.github.io/boa/dev/bench/"},"here"))),(0,r.kt)("h2",{id:"repl-syntax-highlighting"},"Repl syntax highlighting"),(0,r.kt)("p",null,"Syntax highlighting was added to the repl this release thanks to @HalidOdat",(0,r.kt)("br",{parentName:"p"}),"\n","Our repl is made possible due to the great work of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kkawakam/rustyline"},"RustyLine")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(4021).Z,width:"1507",height:"223"})),(0,r.kt)("h2",{id:"looking-forward"},"Looking forward"),(0,r.kt)("p",null,"There are plenty of fixes and performance changes still needed, we also hope to experiment with producing Bytecode from our AST in future. Test262 coverage will almost certainly increase, and we are polishing the public API for easier use when embedding into other Rust projects."),(0,r.kt)("p",null,"Thanks to all those who contributed to 0.10, you can see the names in the full changelog linked above."),(0,r.kt)("p",null,"You can checkout Boa via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa"},"Github")," or on ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/Boa"},"crates.io")))}c.isMDXComponent=!0},4021:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syntaxHighlighting-15e6ee1c89ea7aa912f12feb0bed085a.gif"},449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/test262-screenshot-6dec809e4ab236a4655e0277075e639d.png"}}]);