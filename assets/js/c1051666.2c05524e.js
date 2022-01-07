"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[194],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=c(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3777:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return b}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l="Table",c={unversionedId:"types/table",id:"types/table",isDocsHomePage:!1,title:"Table",description:"Automerge.Table provides a collection datatype that is similar to a table in a relational",source:"@site/docs/types/table.md",sourceDirName:"types",slug:"/types/table",permalink:"/docs/docs/types/table",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/types/table.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Observable",permalink:"/docs/docs/types/observable"},next:{title:"Modeling Data",permalink:"/docs/docs/cookbook/modeling-data"}},u=[],p={toc:u};function b(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"table"},"Table"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Automerge.Table")," provides a collection datatype that is similar to a table in a relational\ndatabase. It is intended for a set of objects (",(0,o.kt)("em",{parentName:"p"},"rows"),") that have the same properties (",(0,o.kt)("em",{parentName:"p"},"columns")," in a\nrelational table). Unlike a list, the objects have no order. You can scan over the objects in a\ntable, or look up individual objects by their primary key. An Automerge document can contain as many\ntables as you want."),(0,o.kt)("p",null,"Each object is assigned a primary key (a unique ID) by Automerge. When you want to reference one\nobject from another, it is important that you use this Automerge-generated ID; do not generate your\nown IDs."),(0,o.kt)("p",null,"You can create new tables and insert rows like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let database = Automerge.change(Automerge.init(), doc => {\n  doc.authors = new Automerge.Table()\n  doc.publications = new Automerge.Table()\n  // Automerge.Table.add() inserts a new row into the database\n  // and returns the primary key (unique ID) of the new row\n  const martinID = doc.authors.add({ surname: 'Kleppmann', forename: 'Martin' })\n  // Adding a publication that references the above author ID\n  const ddia = doc.publications.add({\n    type: 'book',\n    authors: [martinID],\n    title: 'Designing Data-Intensive Applications',\n    publisher: \"O'Reilly Media\",\n    year: 2017\n  })\n})\n")),(0,o.kt)("p",null,"You can read the contents of a table like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Array of row objects\ndatabase.publications.rows\n// Array of row IDs (primary keys)\ndatabase.publications.ids\n// Looking up a row by primary key\ndatabase.publications.byId('29f6cd15-61ff-460d-b7fb-39a5594f32d5')\n// Number of rows in the table\ndatabase.publications.count\n// Like \"SELECT * FROM publications WHERE title LIKE 'Designing%'\"\ndatabase.publications.filter(pub => pub.title.startsWith('Designing'))\n// Like \"SELECT publisher FROM publications\"\ndatabase.publications.map(pub => pub.publisher)\n")),(0,o.kt)("p",null,"You can modify rows in a table like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"database = Automerge.change(database, doc => {\n  // Update a row\n  let book = doc.publications.byId('29f6cd15-61ff-460d-b7fb-39a5594f32d5')\n  book.isbn = '1449373321'\n  // Delete a row\n  doc.publications.remove('29f6cd15-61ff-460d-b7fb-39a5594f32d5')\n})\n")),(0,o.kt)("p",null,"Note that currently the ",(0,o.kt)("inlineCode",{parentName:"p"},"Automerge.Table")," type does not enforce a schema. By convention, the row\nobjects that you add to a table should have the same properties (like columns in a table), but\nAutomerge does not enforce this. This is because different users may be running different versions\nof your app, which might be using different properties."))}b.isMDXComponent=!0}}]);