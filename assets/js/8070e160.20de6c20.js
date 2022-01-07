"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[651],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2257:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},l="5 minute quick start",s={unversionedId:"quickstart",id:"quickstart",isDocsHomePage:!1,title:"5 minute quick start",description:"This guide will get you up and running with Automerge in your own application. This guide is recommended for you if you have strong understanding of JavaScript fundamentals and CRDTs. If you find this quick start to be complicated, we recommend trying the Tutorial section.",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/docs/quickstart",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hello, World!",permalink:"/docs/docs/hello"},next:{title:"Introduction",permalink:"/docs/docs/tutorial/introduction"}},u=[{value:"Setup",id:"setup",children:[],level:2},{value:"Creating a document",id:"creating-a-document",children:[],level:2},{value:"Making changes",id:"making-changes",children:[],level:2},{value:"Merging documents",id:"merging-documents",children:[],level:2},{value:"Get change history",id:"get-change-history",children:[],level:2},{value:"More",id:"more",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"5-minute-quick-start"},"5 minute quick start"),(0,r.kt)("p",null,"This guide will get you up and running with Automerge in your own application. This guide is recommended for you if you have strong understanding of JavaScript fundamentals and CRDTs. If you find this quick start to be complicated, we recommend trying the ",(0,r.kt)("a",{parentName:"p",href:"docs/tutorial/introduction"},"Tutorial")," section."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install automerge ## or yarn add automerge\n")),(0,r.kt)("h2",{id:"creating-a-document"},"Creating a document"),(0,r.kt)("p",null,"This is how you load Automerge in Node. In a browser, simply including the\nscript tag will set up the Automerge object."),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"import * as Automerge from 'automerge'")," if you are using ES2015 or TypeScript."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const Automerge = require('automerge')\n")),(0,r.kt)("p",null,"Let's say doc1 is the application state on device 1. Further down we'll simulate a second device. We initialize the document to initially contain an empty list of cards."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const doc1 = Automerge.init()\n")),(0,r.kt)("p",null,"Automerge follows good functional programming practice. The ",(0,r.kt)("inlineCode",{parentName:"p"},"doc1")," object is treated as immutable -- you  never change it directly. To change it, you need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"Automerge.change()")," with a callback in which you can mutate the state. "),(0,r.kt)("h2",{id:"making-changes"},"Making changes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"doc1 = Automerge.change(doc1, 'Add card', doc => {\n  doc.cards = []\n  doc.cards.push({ title: 'Rewrite everything in Clojure', done: false })\n  doc.cards.push({ title: 'Rewrite everything in Haskell', done: false })\n})\n// { cards: [ \n//    { title: 'Rewrite everything in Haskell', done: false },\n//    { title: 'Rewrite everything in Clojure', done: false } ]} \n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Automerge.change(doc, [message], changeFn)")," enables you to modify an Automerge document ",(0,r.kt)("inlineCode",{parentName:"p"},"doc"),",\nreturning an updated copy of the document."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," argument is optional. It allows you to attach an arbitrary string to the change, which is not interpreted by Automerge, but saved as part of the change history."),(0,r.kt)("p",null,"the ",(0,r.kt)("inlineCode",{parentName:"p"},"doc1")," returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"Automerge.change()")," is a regular JavaScript object containing all the\nedits you made in the callback. Any parts of the document that you didn't change are carried over\nunmodified. The only special things about it are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is treated as immutable, so all changes must go through ",(0,r.kt)("inlineCode",{parentName:"li"},"Automerge.change()"),"."),(0,r.kt)("li",{parentName:"ul"},"Every object has a unique ID, which you can get by passing the object to the\n",(0,r.kt)("inlineCode",{parentName:"li"},"Automerge.getObjectId()")," function. This ID is used by Automerge to track which object is which."),(0,r.kt)("li",{parentName:"ul"},"Objects also have information about ",(0,r.kt)("em",{parentName:"li"},"conflicts"),", which is used when several users make changes to\nthe same property concurrently (see ",(0,r.kt)("a",{parentName:"li",href:"docs/cookbook/conflicts"},"conflicts"),"). ")),(0,r.kt)("h2",{id:"merging-documents"},"Merging documents"),(0,r.kt)("p",null,"Now let's simulate another device, whose application state is ",(0,r.kt)("inlineCode",{parentName:"p"},"doc2"),". We must\ninitialise it separately, and merge ",(0,r.kt)("inlineCode",{parentName:"p"},"doc1")," into it. After merging, ",(0,r.kt)("inlineCode",{parentName:"p"},"doc2")," is a replicated copy of ",(0,r.kt)("inlineCode",{parentName:"p"},"doc1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let doc2 = Automerge.init()\ndoc2 = Automerge.merge(doc2, doc1)\n")),(0,r.kt)("p",null,"You can also load the document as a binary, if you want to send the document over the network in a compact format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let binary = Automerge.save(doc1)\nlet doc2 = Automerge.load(binary)\n")),(0,r.kt)("p",null,"Now, when both documents, we make separate (non-conflicting) changes. For handling conflicting changes, read below in ",(0,r.kt)("a",{parentName:"p",href:"#conflicts"},"Conflicts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"doc1 = Automerge.change(doc1, 'Mark card as done', doc => {\n  doc.cards[0].done = true\n})\ndoc2 = Automerge.change(doc2, 'Delete card', doc => {\n  delete doc.cards[1]\n})\n")),(0,r.kt)("p",null,"Now comes the moment of truth. Let's merge the changes again. You can also do the merge the other way around, and you'll get the same result. Order doesn't matter here. The merged result remembers that 'Rewrite everything in Haskell' was set to true, and that 'Rewrite everything in Clojure' was deleted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let finalDoc = Automerge.merge(doc1, doc2)\n// { cards: [ { title: 'Rewrite everything in Haskell', done: true } ] }\n")),(0,r.kt)("h2",{id:"get-change-history"},"Get change history"),(0,r.kt)("p",null,'As our final trick, we can inspect the change history. Automerge automatically\nkeeps track of every change, along with the "commit message" that you passed to\nchange(). When you query that history, it includes both changes you made\nlocally, and also changes that came from other devices. You can also see a\nsnapshot of the application state at any moment in time in the past. For\nexample, we can count how many cards there were at each point:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Automerge.getHistory(finalDoc).map(state => [state.change.message, state.snapshot.cards.length])\n// [ [ 'Initialization', 0 ],\n//   [ 'Add card', 1 ],\n//   [ 'Add another card', 2 ],\n//   [ 'Mark card as done', 2 ],\n//   [ 'Delete card', 1 ] ]\n")),(0,r.kt)("h2",{id:"more"},"More"),(0,r.kt)("p",null,"If you're hungry for more, look in the ",(0,r.kt)("a",{parentName:"p",href:"docs/cookbook/modeling-data"},"Cookbook")," setion."))}m.isMDXComponent=!0}}]);