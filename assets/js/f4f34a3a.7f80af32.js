"use strict";(self.webpackChunkboa_dev_github_io=self.webpackChunkboa_dev_github_io||[]).push([[8636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={layout:"post",tags:["post"],title:"Adding a JavaScript interpreter to your Rust project",author:"Boa Developers"},i=void 0,s={permalink:"/boa-dev.github.io/blog/2021/08/01/mdx-blog-post",source:"@site/blog/2021-08-01-mdx-blog-post.mdx",title:"Adding a JavaScript interpreter to your Rust project",description:"Introduction",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[{label:"post",permalink:"/boa-dev.github.io/blog/tags/post"}],readingTime:11.48,hasTruncateMarker:!1,authors:[{name:"Boa Developers"}],frontMatter:{layout:"post",tags:["post"],title:"Adding a JavaScript interpreter to your Rust project",author:"Boa Developers"},prevItem:{title:"Welcome",permalink:"/boa-dev.github.io/blog/welcome"},nextItem:{title:"Long Blog Post",permalink:"/boa-dev.github.io/blog/long-blog-post"}},l={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Starting from scratch",id:"starting-from-scratch",level:2},{value:"But, what can you do with Boa?",id:"but-what-can-you-do-with-boa",level:2},{value:"Integrating a full Rust data structure",id:"integrating-a-full-rust-data-structure",level:2},{value:"What&#39;s coming next?",id:"whats-coming-next",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"When we develop tools for our users, we sometimes want to give them some form of control over how\nthey work. This is common in games, where we can add scripting for our users to be able to create\nextensions, or even for business tools, where we allow our customer to change or extend the\nbehaviour of our platform. For those cases, using Rust, a compiled, type safe language can be a\nchallenge, since once a program has been compiled, it's tricky to change or extend it at runtime.\nFurthermore, many of our users will prefer to use a more common scripting language, such as\nJavaScript."),(0,o.kt)("p",null,"This is where Boa enters the scene. Boa is a Javascript engine fully written in Rust. Currently, it\ncan be used in places where you need most of the JavaScript language to work, even though, we would\nadvise to wait to get all our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/issues?q=64+162+718+773+2068+1930+1922+1917+1900+1848+1805+1570+1402+1307+1180+is%3Aopen"},"known blocker bugs")," solved before using this for critical\nworkloads. You can check how conformant we are with the official ECMAScript specification\n",(0,o.kt)("a",{parentName:"p",href:"https://boa-dev.github.io/boa/test262/"},"here"),"."),(0,o.kt)("p",null,"And, before going further, we would like to mention that you can contribute to Boa by solving one\nof the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22%2CHacktoberfest%2CE-Easy%2C%22good+first+issue%22+no%3Aassignee"},"issues")," where we need special help, and we now also accept financial contributions\nin ",(0,o.kt)("a",{parentName:"p",href:"https://opencollective.com/boa"},"our OpenCollective")," page."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: You can see more examples of integrating Boa in ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/boa-dev/boa/tree/main/boa_examples"},"our repository"),".")),(0,o.kt)("h2",{id:"starting-from-scratch"},"Starting from scratch"),(0,o.kt)("p",null,"Let's start a new project running ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo new my_project"),", and then add ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/boa_engine"},(0,o.kt)("inlineCode",{parentName:"a"},"boa_engine"))," as one\nof our dependencies by running ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo add boa_engine -F console")," in our newly created ",(0,o.kt)("inlineCode",{parentName:"p"},"my_project"),"\ndirectory."),(0,o.kt)("p",null,"Let's start by adding the minimal code needed to get a JavaScript interpreter working in our\n",(0,o.kt)("inlineCode",{parentName:"p"},"src/main.rs")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use boa_engine::Context;\n\nfn main() {\n    let js_code = "console.log(\'Hello World from a JS code string!\')";\n\n    // Instantiate the execution context\n    let mut context = Context::default();\n\n    // Parse the source code\n    match context.eval(js_code) {\n        Ok(res) => {\n            println!("{}", res.to_string(&mut context).unwrap());\n        }\n        Err(e) => {\n            // Pretty print the error\n            eprintln!("Uncaught {}", e.display());\n        }\n    };\n}\n')),(0,o.kt)("p",null,"As you can see in this example, when working with Boa, you will have to use a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/struct.Context.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Context")),",\nwhich will be in charge of initializing all the internals and built-in objects (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Date"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," and so on). The ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," in Boa is also your go-to place for configuring your interpreter\nas you wish. You can add custom global functions, objects, and anything you might imagine. It's also\none of the arguments you will receive if you create a Rust function and expose it to JavaScript, and\nwith it, you will be able to throw errors, modify the global object and return values to JavaScript."),(0,o.kt)("p",null,"Talking about values, Boa comes with its built-in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/enum.JsValue.html"},(0,o.kt)("inlineCode",{parentName:"a"},"JsValue"))," type. This enumeration\nrepresents any JavaScript value that can, for example, be assigned to a variable. And, before you\nask, you can convert it to and from a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/serde_json/latest/serde_json/value/enum.Value.html"},(0,o.kt)("inlineCode",{parentName:"a"},"serde_json::Value")),", of course, by using the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/enum.JsValue.html#method.from_json"},(0,o.kt)("inlineCode",{parentName:"a"},"JsValue::from_json()"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/enum.JsValue.html#method.to_json"},(0,o.kt)("inlineCode",{parentName:"a"},"JsValue::to_json()"))," methods."),(0,o.kt)("p",null,"As you can see in those methods, or in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Context::eval()")," that we used earlier, you will\nreceive a ",(0,o.kt)("inlineCode",{parentName:"p"},"JsResult")," as a response. This result type will contain a ",(0,o.kt)("inlineCode",{parentName:"p"},"JsValue")," as its error variant,\nwhich means you can return the error back to JavaScript for it to handle it. A ",(0,o.kt)("inlineCode",{parentName:"p"},"JsValue"),", internally,\nis a garbage-collected JavaScript value. But, isn't Rust one of the few non-garbage collected\nlanguages? Wasn't that a good thing?"),(0,o.kt)("p",null,"The answer is ",(0,o.kt)("em",{parentName:"p"},"yes, of course"),", but JavaScript requires a garbage collector. This garbage collector\nmakes sure that all values are freed when they are no longer needed. It also makes a ",(0,o.kt)("inlineCode",{parentName:"p"},"JsValue"),"\nextremely cheap to clone, independently of its contents."),(0,o.kt)("p",null,"If you run this example code with ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo run"),", you will notice that it will print the message sent\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log()"),", and it will also print ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," at the end. This last ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," is part of\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Ok(res)")," branch in the ",(0,o.kt)("inlineCode",{parentName:"p"},"match"),", which prints the result of the execution. In this case, the\nresult of the execution is the result of the last statement, which is the ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log()"),", and this\nstatement returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("h2",{id:"but-what-can-you-do-with-boa"},"But, what can you do with Boa?"),(0,o.kt)("p",null,"Let's start with the basics. Of course, you can execute JavaScript code. This code can be any\nstring or directly a byte vector (so you can load files and use them directly). You can use\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/struct.Context.html#method.eval"},(0,o.kt)("inlineCode",{parentName:"a"},"Context::eval()"))," in both cases, as you saw before, and you can also use\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/struct.Context.html#method.parse"},(0,o.kt)("inlineCode",{parentName:"a"},"Context::parse()")),", which will give you a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/syntax/ast/node/statement_list/struct.StatementList.html"},(0,o.kt)("inlineCode",{parentName:"a"},"StatementList"))," that\nyou can use multiple times in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/struct.Context.html#method.compile"},(0,o.kt)("inlineCode",{parentName:"a"},"Context::compile()")),", so that you don't need to\nparse the same code more than once. The compiled source code can also be executed multiple times,\nsince it's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/vm/struct.CodeBlock.html"},(0,o.kt)("inlineCode",{parentName:"a"},"CodeBlock"))," is garbage collected, and therefore it can be cheaply cloned.\nIn order to execute a code block you will need to use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/struct.Context.html#method.execute"},(0,o.kt)("inlineCode",{parentName:"a"},"Context::execute()")),"."),(0,o.kt)("p",null,"This in itself is good enough to provide a simple scripting API for your project, but where Boa\nreally shines is in the ability to inter-operate Rust and JavaScript. Let's start with a simple\nexample: exposing a Rust function to JavaScript. A JavaScript-compatible Rust function must have\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/builtins/function/type.NativeFunctionSignature.html"},(0,o.kt)("inlineCode",{parentName:"a"},"NativeFunctionSignature"))," signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use boa_engine::{builtins::JsArgs, Context, JsResult, JsValue};\n\n/// Says "hello" using the first argument.\nfn say_hello(_this: &JsValue, args: &[JsValue], context: &mut Context) -> JsResult<JsValue> {\n    let name = args.get_or_undefined(0);\n\n    if name.is_undefined() {\n        println!("Hello World!");\n    } else {\n        println!("Hello {}!", name.to_string(context)?);\n    }\n\n    Ok(JsValue::undefined())\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/builtins/trait.JsArgs.html"},(0,o.kt)("inlineCode",{parentName:"a"},"JsArgs"))," trait allows you to retrieve a value if the function received it, or set it\nto the ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," value, if not. Then, in this case, it will convert the name to a ",(0,o.kt)("inlineCode",{parentName:"p"},"JsString"),"\nbefore printing it, since we might be receiving an object, a symbol, a boolean... one of the perks\nof dynamic typing. This will then print the result in th standard output using the common\n",(0,o.kt)("inlineCode",{parentName:"p"},"println!()")," macro in Rust. It will just return an undefined value."),(0,o.kt)("p",null,"You can register this function in the context by adding this line after the context creation (and\nbefore executing any JS) in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'context.register_global_builtin_function("say_hello", 1, say_hello);\n')),(0,o.kt)("p",null,"This will register it as a global function, with the ",(0,o.kt)("inlineCode",{parentName:"p"},"say_hello()")," name, and with a ",(0,o.kt)("inlineCode",{parentName:"p"},"length")," of 1\n(which indicates the number of arguments that it receives by default). You can then try it out by\nmodifying the JavaScript string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let js_code = r#"say_hello("Rust");"#;\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},'r#"..."#')," syntax is a Rust raw ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/rust-by-example/std/str.html#literals-and-escapes"},"string literal"),"."),(0,o.kt)("p",null,"You can also add any ",(0,o.kt)("inlineCode",{parentName:"p"},"JsValue")," as a property to the global object by using the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/struct.Context.html#method.register_global_property"},(0,o.kt)("inlineCode",{parentName:"a"},"Context::register_global_property()"))," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use boa_engine::property::Attribute;\n\ncontext.register_global_property("MY_PROJECT_VERSION", "1.0.0", Attribute::all());\n')),(0,o.kt)("p",null,"And you can use it in JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"say_hello(MY_PROJECT_VERSION);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/property/struct.Attribute.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Attribute"))," of a property indicates if it will be writable (it can be set and\nmodified), enumerable (it can be used in ",(0,o.kt)("inlineCode",{parentName:"p"},"for..in")," statements) and configurable (its attributes or\ntype of property can be modified)."),(0,o.kt)("h2",{id:"integrating-a-full-rust-data-structure"},"Integrating a full Rust data structure"),(0,o.kt)("p",null,"Sometimes, adding a function or a single ",(0,o.kt)("inlineCode",{parentName:"p"},"JsValue")," to the global scope of your JavaScript context\nis not enough, and you want to enable the full power of Rust with its structures to handle more\ncomplex scenarios. This can be achieved using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/class/trait.Class.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Class"))," trait. This has to be combined\nwith two other traits, that make any Rust object be garbage-collected: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_gc/latest/boa_gc/trait.Trace.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Trace"))," and\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_gc/0.16.0/boa_gc/trait.Finalize.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Finalize")),", in the ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/boa_gc"},(0,o.kt)("inlineCode",{parentName:"a"},"boa_gc"))," crate. Luckily those two traits can be derived."),(0,o.kt)("p",null,"Let's start by implementing a ",(0,o.kt)("inlineCode",{parentName:"p"},"Person")," type, that will showcase the potential of this API. Let's\nrun ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo add gc boa_gc")," and add some code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use boa_gc::{Finalize, Trace};\n\n#[derive(Debug, Trace, Finalize)]\nstruct Person {\n    /// The name of the person.\n    name: String,\n    /// The age of the person.\n    age: u8,\n}\n")),(0,o.kt)("p",null,"Then, we will move the ",(0,o.kt)("inlineCode",{parentName:"p"},"say_hello()")," function to be a static method of ",(0,o.kt)("inlineCode",{parentName:"p"},"Person"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'impl Person {\n    /// Says "hello" using the name and the age of a `Person`.\n    fn say_hello(this: &JsValue, _args: &[JsValue], context: &mut Context) -> JsResult<JsValue> {\n        let this = this\n            .as_object()\n            .and_then(|obj| obj.downcast_ref::<Self>())\n            .ok_or_else(|| context.construct_type_error("`this` is not a `Person` object"))?;\n\n        println!("Hello {}-year-old {}!", this.age, this.name);\n\n        Ok(JsValue::undefined())\n    }\n}\n')),(0,o.kt)("p",null,"As you can see, this now uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"say_hello()")," function, which should be a\n",(0,o.kt)("inlineCode",{parentName:"p"},"Person"),", but in JavaScript you can assign methods of some objects to others, so we must make sure\nthat on this invocation, we are indeed working with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Person"),", and return a ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeError")," if not."),(0,o.kt)("p",null,"Now, let's implement the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/class/trait.Class.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Class"))," trait. This trait requires a ",(0,o.kt)("inlineCode",{parentName:"p"},"NAME")," constant, which will\nbe the name of the global object property, and a ",(0,o.kt)("inlineCode",{parentName:"p"},"LENGTH")," for the constructor (the number of\narguments, by default ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"). Then, it needs a ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor()")," function, which is a native function\nthat will be called when we do a ",(0,o.kt)("inlineCode",{parentName:"p"},"new Person()"),", and an ",(0,o.kt)("inlineCode",{parentName:"p"},"init()")," function, which will be called by\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," when registering the function in the global scope. It will receive a\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/class/struct.ClassBuilder.html"},(0,o.kt)("inlineCode",{parentName:"a"},"ClassBuilder")),", which allows you to add a method (both, static and ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype"),"), a\n",(0,o.kt)("inlineCode",{parentName:"p"},"property"),", also for both cases, accessor properties (to use ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"set"),") and property\ndescriptors. You can also get a reference to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ClasBuilder::context()")," method,\nin case you want to do anything fancier."),(0,o.kt)("p",null,"In this case, the constructor will take care of constructing the Rust ",(0,o.kt)("inlineCode",{parentName:"p"},"Person")," data structure with\nthe two arguments it receives, and then register the ",(0,o.kt)("inlineCode",{parentName:"p"},"say_hello()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use boa_engine::{\n    builtins::JsArgs,\n    class::{Class, ClassBuilder},\n};\n\nimpl Class for Person {\n    const NAME: &\'static str = "Person";\n    const LENGTH: usize = 2;\n\n    // This is what is called when we construct a `Person` with the expression `new Person()`.\n    fn constructor(_this: &JsValue, args: &[JsValue], context: &mut Context) -> JsResult<Self> {\n        let name = args.get_or_undefined(0).to_string(context)?;\n        let age = args.get_or_undefined(1).to_u32(context)?;\n\n        if !(0..=150).contains(&age) {\n            context.throw_range_error(format!("invalid age `{age}`. Must be between 0 and 150"))?;\n        }\n\n        let age = u8::try_from(age).expect("we already checked that it was in range");\n\n        let person = Person {\n            name: name.to_string(),\n            age,\n        };\n\n        Ok(person)\n    }\n\n    /// Here is where the class is initialized, to be inserted into the global object.\n    fn init(class: &mut ClassBuilder) -> JsResult<()> {\n        class.method("say_hello", 0, Self::say_hello);\n\n        Ok(())\n    }\n}\n')),(0,o.kt)("p",null,"In order to register the class, you will need to use the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/struct.Context.html#method.register_global_class"},(0,o.kt)("inlineCode",{parentName:"a"},"Context::register_global_class()"))," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'context\n    .register_global_class::<Person>()\n    .expect("could not register class");\n')),(0,o.kt)("p",null,"You can now adapt the JavaScript code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let person = new Person("John", 28);\nperson.say_hello();\n')),(0,o.kt)("p",null,"If you want to access the global object from Rust, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Context::global_object()"),", which\nwill return a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/object/struct.JsObject.html"},(0,o.kt)("inlineCode",{parentName:"a"},"JsObject")),". In this object, you can use the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/boa_engine/latest/boa_engine/object/struct.JsObject.html#method.get"},(0,o.kt)("inlineCode",{parentName:"a"},"JsObject::get()"))," function to retrieve any property of the global object, such as\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_PROJECT_VERSION")," that you defined earlier, or any intrinsic, such as the ",(0,o.kt)("inlineCode",{parentName:"p"},"Date")," object."),(0,o.kt)("p",null,"We are now in the process of creating Rust wrappers for all JavaScript intrinsics (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/issues/2098"},"#2098"),").\nFor example, you can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"JsArray")," from a ",(0,o.kt)("inlineCode",{parentName:"p"},"JsObject")," to make it much easier to manipulate a\nJavaScript array from Rust. In the following example, you'll create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"reverseAppend()")," global\nfunction that will receive an array, reverse it, and then append the ",(0,o.kt)("em",{parentName:"p"},'"My Project"')," string to it.\nIt will then get the ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_PROJECT_VERSION")," from the global object, and append it to the array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use boa_engine::{\n    builtins::JsArgs, object::JsArray, property::Attribute, Context, JsResult, JsValue,\n};\n\n/// Reverses an array and appends the `"My Project"` string and the `MY_PROJECT_VERSION` global\n/// property to it.\nfn reverse_append(_this: &JsValue, args: &[JsValue], context: &mut Context) -> JsResult<JsValue> {\n    let arr = args\n        .get_or_undefined(0)\n        .as_object()\n        .ok_or_else(|| context.construct_type_error("argument must be an array"))?;\n\n    let arr = JsArray::from_object(arr.clone(), context)?;\n\n    let reverse = arr.reverse(context)?;\n    reverse.push("My Project", context)?;\n\n    let global_object = context.global_object().clone();\n    let version = global_object\n        .get("MY_PROJECT_VERSION", context)\n        .unwrap_or_default();\n\n    reverse.push(version, context)?;\n\n    Ok((*reverse).clone().into())\n}\n\nfn main() {\n    let js_code = r#"\n        let arr = [\'a\', 2, 5.4, "Hello"];\n        reverseAppend(arr);\n    "#;\n\n    // Instantiate the execution context\n    let mut context = Context::default();\n\n    context.register_global_property("MY_PROJECT_VERSION", "1.0.0", Attribute::all());\n\n    context.register_global_builtin_function("reverseAppend", 1, reverse_append);\n\n    // Parse the source code\n    match context.eval(js_code) {\n        Ok(res) => {\n            println!("{}", res.to_string(&mut context).unwrap());\n        }\n        Err(e) => {\n            // Pretty print the error\n            eprintln!("Uncaught {}", e.display());\n        }\n    };\n}\n')),(0,o.kt)("p",null,"We are looking for contributors to implement the rest of the wrappers, and of course, we offer mentoring!"),(0,o.kt)("h2",{id:"whats-coming-next"},"What's coming next?"),(0,o.kt)("p",null,"Boa's development is ongoing non-stop. The next version, v0.17, is already looking pretty nice,\nwith some great enhancements. For example, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jedel1043"},"@jedel1043")," has created new\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/pull/2283"},'"lazy" errors'),", that are much easier to create and throw, since they don't need a\n",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),", and also enhance the performance. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nekevss"},"@nekevss")," has implemented a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/pull/2326"},"new wrapper")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"RegExp"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/anuvratsingh"},"@anuvratsingh")," is working on a ",(0,o.kt)("inlineCode",{parentName:"p"},"Date"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/pull/2181"},"wrapper"),". ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Razican"},"@razican")," is working on a JavaScript <-> Rust\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boa-dev/boa/pull/2276"},"conversion trait")," and derive, that will allow you to convert a ",(0,o.kt)("inlineCode",{parentName:"p"},"JsValue")," to a Rust\nstructure and back really easily:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use boa_derive::TryFromJs;\nuse boa_engine::{value::TryFromJs, Context, JsResult, JsValue};\n\n#[derive(Debug, TryFromJs)]\n#[allow(dead_code)]\nstruct TestStruct {\n    inner: bool,\n    hello: String,\n    #[boa(from_js_with = "lossy_conversion", hello = "myfriend")]\n    my_float: i16,\n}\n\nfn main() {\n    let js = r#"\n    let x = {\n        inner: false,\n        hello: "World",\n        my_float: 2.9,\n    };\n\n    x;\n    "#;\n\n    let mut context = Context::default();\n    let res = context.eval(js).unwrap();\n\n    let str = TestStruct::try_from_js(&res, &mut context)\n        .map_err(|e| e.display().to_string())\n        .unwrap();\n\n    println!("{str:?}");\n}\n\n/// Converts the value lossly\nfn lossy_conversion(value: &JsValue, context: &mut Context) -> JsResult<i16> {\n    match value {\n        JsValue::Rational(r) => Ok(r.round() as i16),\n        JsValue::Integer(i) => Ok(*i as i16),\n        _ => context.throw_type_error("cannot convert value to an i16"),\n    }\n}\n')),(0,o.kt)("p",null,"We love contributions, whether it's a documentation enhancement, fixing or implementing the\nECMAScript specification, adding new functionality / APIs or enhancing performance, we would love\nto get new contributors on board! We are also looking for financial contributors, so feel free to\njoin our ",(0,o.kt)("a",{parentName:"p",href:"https://opencollective.com/boa"},"OpenCollective"),"."))}h.isMDXComponent=!0}}]);