(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{127:function(s,t,a){s.exports=a.p+"assets/img/hooks-in-sequence.a4377ae7.png"},857:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[s._v("#")]),s._v(" Hooks")]),s._v(" "),e("p",[s._v("Ts.ED emit different events during it's initialization\nphase (lifecycle). This lifecycle hooks that provide visibility into these key life moments and the ability to act\nwhen they occur.")]),s._v(" "),e("p",[s._v("This schemes resume the order of hooks regarding to ServerLoader and Providers:")]),s._v(" "),e("figure",[e("img",{staticStyle:{"max-height":"500px",padding:"20px"},attrs:{src:a(127)}})]),s._v(" "),e("p",[e("a",{attrs:{href:"/assets/img/hooks-in-sequence.png"}},[s._v("Open in fullscreen")])]),s._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("p",[s._v("Hooks can be used on ServerLoader or on your Provider:")]),s._v(" "),e("div",{staticClass:"language-typescript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ServerLoader"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/common"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Server")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServerLoader")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeforeInit")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("$beforeInit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("div",{staticClass:"language-typescript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Injectable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" BeforeInit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/common"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n@"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Injectable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyService")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeforeInit")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("$beforeInit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v("Database connection can be performed with Asynchronous Provider since v5.26. See "),e("router-link",{attrs:{to:"/docs/custom-providers.html"}},[s._v("custom providers")])],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);