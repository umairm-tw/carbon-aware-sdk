"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[671],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},c="Quick Start",u={unversionedId:"intro",id:"intro",title:"Quick Start",description:"Getting started with the Carbon Aware SDK",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/carbon-aware-sdk/docs/intro",editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Carbon Aware CLI Reference",permalink:"/carbon-aware-sdk/docs/tutorial-basics/clarbone-aware-cli-reference"}},s=[{value:"dotnet",id:"dotnet",children:[],level:2}],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Getting started with the Carbon Aware SDK"),(0,a.kt)("h2",{id:"dotnet"},"dotnet"),(0,a.kt)("p",null,"The dotnet SDK is built in .NET 6.0.  It supports devcontainers, and can be buitl via command line or via Visual Studio.  This quickstart assumes you know how to use dev containers.  To learn more about dev containers please check out ",(0,a.kt)("em",{parentName:"p"},"link here")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First step is to clone the project with git",(0,a.kt)("pre",null,"$ git clone command here")),(0,a.kt)("li",{parentName:"ol"},"Open the root folder of the project in Visual Studio Code"),(0,a.kt)("li",{parentName:"ol"},"Bring up the console with ctrl-` "),(0,a.kt)("li",{parentName:"ol"},"Change to the src/dotnet/build directory by typing the following in the console",(0,a.kt)("pre",null,"$ cd src/dotnet/build")),(0,a.kt)("li",{parentName:"ol"},"Publish the build",(0,a.kt)("pre",null,"$ dotnet publish .. -o .")),(0,a.kt)("li",{parentName:"ol"},"Run with the hello world test data set",(0,a.kt)("pre",null,'$ CarbonAwareCLI -l westus eastus -d "data-files/hello-world.json"')),(0,a.kt)("li",{parentName:"ol"},"You should see the following results",(0,a.kt)("pre",null,"TODO: results sample here")),(0,a.kt)("li",{parentName:"ol"},"Sucess!  You now have the CLI running in the dev container"),(0,a.kt)("li",{parentName:"ol"},'The build folder will also have all class libraries to add to your own dotnet project.  Check out the "Sample Client" project in the solution for an example of where to start')),(0,a.kt)("h1",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"For more advanced capabilties and to learn more about what you can do with the CLI, please refer to the Carbon Aware CLI documentation."))}d.isMDXComponent=!0}}]);