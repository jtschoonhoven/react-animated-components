(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{464:function(module,exports,__webpack_require__){__webpack_require__(465),__webpack_require__(621),__webpack_require__(622),__webpack_require__(829),__webpack_require__(830),__webpack_require__(834),__webpack_require__(835),__webpack_require__(833),__webpack_require__(831),__webpack_require__(836),__webpack_require__(837),module.exports=__webpack_require__(821)},532:function(module,exports){},622:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(333)},821:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(333).configure)([__webpack_require__(822),__webpack_require__(823)],module,!1)}).call(this,__webpack_require__(189)(module))},822:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=822},823:function(module,exports,__webpack_require__){var map={"./Animations.stories.tsx":832};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=823},832:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_FadeIn",(function(){return _FadeIn})),__webpack_require__.d(__webpack_exports__,"_FadeOut",(function(){return _FadeOut})),__webpack_require__.d(__webpack_exports__,"_Rotate",(function(){return _Rotate}));__webpack_require__(8),__webpack_require__(824),__webpack_require__(13),__webpack_require__(22),__webpack_require__(30);var _templateObject,react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=(__webpack_require__(46),__webpack_require__(157),__webpack_require__(129),__webpack_require__(826),__webpack_require__(38),__webpack_require__(17),__webpack_require__(109),__webpack_require__(41),__webpack_require__(40),__webpack_require__(48),__webpack_require__(9),__webpack_require__(135),__webpack_require__(827),__webpack_require__(66));var animation_factory_templateObject,_templateObject2,globals={durationMs:{fast:500,medium:1e3,slow:2e3},timingFunc:{linear:"linear",easeIn:"ease-in",easeInOut:"ease-in-out"},iterations:{once:1,infinite:"infinite"},components:{default:styled_components_browser_esm.b.span(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n      display: inline-block;\n    "])))}},jsx_runtime=__webpack_require__(67);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=arr&&("undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"]);if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function animation_factory_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var animation_factory=function animationFactory(_ref){var keyframes=_ref.keyframes,component=_ref.component,defaultDurationMs=_ref.defaultDurationMs,defaultTimingFunc=_ref.defaultTimingFunc,defaultIterations=_ref.defaultIterations,defaultExitOnComplete=_ref.defaultExitOnComplete;component=component||globals.components.default,defaultDurationMs=defaultDurationMs||globals.durationMs.slow,defaultTimingFunc=defaultTimingFunc||globals.timingFunc.linear,defaultIterations=defaultIterations||globals.iterations.once;var componentCss=Object(styled_components_browser_esm.a)(animation_factory_templateObject||(animation_factory_templateObject=animation_factory_taggedTemplateLiteral(["\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n    animation-iteration-count ",";\n  "])),keyframes,(function(props){return props.durationMs||defaultDurationMs}),(function(props){return props.timingFunc||defaultTimingFunc}),(function(props){return props.iterations||defaultIterations})),Component=("string"==typeof component?styled_components_browser_esm.b[component]:Object(styled_components_browser_esm.b)(component))(_templateObject2||(_templateObject2=animation_factory_taggedTemplateLiteral(["",""])),componentCss);return function Animation(_ref2){var onComplete=_ref2.onComplete,exitOnComplete=_ref2.exitOnComplete,children=_ref2.children,props=_objectWithoutProperties(_ref2,["onComplete","exitOnComplete","children"]),_React$useState2=_slicedToArray(react_default.a.useState(!1),2),isComplete=_React$useState2[0],setIsComplete=_React$useState2[1],durationMs=props.durationMs||defaultDurationMs,iterations=props.iterations||defaultIterations;return exitOnComplete=void 0!==exitOnComplete?!!exitOnComplete:!!defaultExitOnComplete,react_default.a.useEffect((function(){var timeoutId;return iterations&&!isNaN(iterations)&&(timeoutId=setTimeout((function(){setIsComplete(!0),onComplete&&onComplete()}),durationMs*iterations)),function(){timeoutId&&clearTimeout(timeoutId)}}),[durationMs,iterations]),exitOnComplete&&isComplete?Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{}):Object(jsx_runtime.jsx)(Component,Object.assign({},props,{children:children}))}};try{animationfactory.displayName="animationfactory",animationfactory.__docgenInfo={description:"Factory function to configure and return an animated function component.",displayName:"animationfactory",props:{keyframes:{defaultValue:null,description:"",name:"keyframes",required:!0,type:{name:"string | Keyframes"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType"}},defaultDurationMs:{defaultValue:null,description:"",name:"defaultDurationMs",required:!1,type:{name:"number"}},defaultTimingFunc:{defaultValue:null,description:"",name:"defaultTimingFunc",required:!1,type:{name:"AnimationTimingFunction"}},defaultIterations:{defaultValue:null,description:"",name:"defaultIterations",required:!1,type:{name:"AnimationIterationCount"}},defaultExitOnComplete:{defaultValue:null,description:"",name:"defaultExitOnComplete",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/animation-factory.tsx#animationfactory"]={docgenInfo:animationfactory.__docgenInfo,name:"animationfactory",path:"src/animation-factory.tsx#animationfactory"})}catch(__react_docgen_typescript_loader_error){}function Animation_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Animation_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Animation_Animation=function Animation(_ref){var keyframes=_ref.keyframes,component=_ref.component,children=_ref.children,props=Animation_objectWithoutProperties(_ref,["keyframes","component","children"]),AnimatedComponent=react_default.a.useMemo((function(){return animation_factory({keyframes:keyframes,component:component})}),[keyframes]);return Object(jsx_runtime.jsx)(AnimatedComponent,Object.assign({},props,{children:children}))};Animation_Animation.displayName="Animation";var FadeIn_templateObject,components_Animation=Animation_Animation;try{Animation_Animation.displayName="Animation",Animation_Animation.__docgenInfo={description:"Generic animation component that wraps the animation factory for full customization.",displayName:"Animation",props:{keyframes:{defaultValue:null,description:"",name:"keyframes",required:!0,type:{name:"Keyframes"}},component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"ComponentType"}},durationMs:{defaultValue:null,description:"",name:"durationMs",required:!1,type:{name:"number"}},timingFunc:{defaultValue:null,description:"",name:"timingFunc",required:!1,type:{name:"AnimationTimingFunction"}},iterations:{defaultValue:null,description:"",name:"iterations",required:!1,type:{name:"AnimationIterationCount"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"(() => void)"}},exitOnComplete:{defaultValue:null,description:"",name:"exitOnComplete",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Animation.tsx#Animation"]={docgenInfo:Animation_Animation.__docgenInfo,name:"Animation",path:"src/components/Animation.tsx#Animation"})}catch(__react_docgen_typescript_loader_error){}var FadeOut_templateObject,fadeInKeyframes=Object(styled_components_browser_esm.c)(FadeIn_templateObject||(FadeIn_templateObject=function FadeIn_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  from { opacity: 0; }\n  to { opacity: 1; }\n"]))),FadeIn=animation_factory({keyframes:fadeInKeyframes,defaultDurationMs:globals.durationMs.medium,defaultTimingFunc:globals.timingFunc.linear,defaultIterations:globals.iterations.once}),components_FadeIn=FadeIn;try{FadeIn.displayName="FadeIn",FadeIn.__docgenInfo={description:"",displayName:"FadeIn",props:{durationMs:{defaultValue:null,description:"",name:"durationMs",required:!1,type:{name:"number"}},timingFunc:{defaultValue:null,description:"",name:"timingFunc",required:!1,type:{name:"AnimationTimingFunction"}},iterations:{defaultValue:null,description:"",name:"iterations",required:!1,type:{name:"AnimationIterationCount"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"(() => void)"}},exitOnComplete:{defaultValue:null,description:"",name:"exitOnComplete",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FadeIn.tsx#FadeIn"]={docgenInfo:FadeIn.__docgenInfo,name:"FadeIn",path:"src/components/FadeIn.tsx#FadeIn"})}catch(__react_docgen_typescript_loader_error){}var Rotate_templateObject,fadeOutKeyframes=Object(styled_components_browser_esm.c)(FadeOut_templateObject||(FadeOut_templateObject=function FadeOut_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  from { opacity: 1; }\n  to { opacity: 0; }\n"]))),FadeOut=animation_factory({keyframes:fadeOutKeyframes,defaultDurationMs:globals.durationMs.medium,defaultTimingFunc:globals.timingFunc.linear,defaultIterations:globals.iterations.once,defaultExitOnComplete:!0}),components_FadeOut=FadeOut;try{FadeOut.displayName="FadeOut",FadeOut.__docgenInfo={description:"",displayName:"FadeOut",props:{durationMs:{defaultValue:null,description:"",name:"durationMs",required:!1,type:{name:"number"}},timingFunc:{defaultValue:null,description:"",name:"timingFunc",required:!1,type:{name:"AnimationTimingFunction"}},iterations:{defaultValue:null,description:"",name:"iterations",required:!1,type:{name:"AnimationIterationCount"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"(() => void)"}},exitOnComplete:{defaultValue:null,description:"",name:"exitOnComplete",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FadeOut.tsx#FadeOut"]={docgenInfo:FadeOut.__docgenInfo,name:"FadeOut",path:"src/components/FadeOut.tsx#FadeOut"})}catch(__react_docgen_typescript_loader_error){}var rotateKeyframes=Object(styled_components_browser_esm.c)(Rotate_templateObject||(Rotate_templateObject=function Rotate_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  from { transform: rotate(0deg); }\n  to { transform: rotate(359deg); }\n"]))),Rotate=animation_factory({keyframes:rotateKeyframes,defaultDurationMs:globals.durationMs.slow,defaultTimingFunc:globals.timingFunc.linear,defaultIterations:globals.iterations.infinite}),components_Rotate=Rotate;try{Rotate.displayName="Rotate",Rotate.__docgenInfo={description:"",displayName:"Rotate",props:{durationMs:{defaultValue:null,description:"",name:"durationMs",required:!1,type:{name:"number"}},timingFunc:{defaultValue:null,description:"",name:"timingFunc",required:!1,type:{name:"AnimationTimingFunction"}},iterations:{defaultValue:null,description:"",name:"iterations",required:!1,type:{name:"AnimationIterationCount"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"(() => void)"}},exitOnComplete:{defaultValue:null,description:"",name:"exitOnComplete",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Rotate.tsx#Rotate"]={docgenInfo:Rotate.__docgenInfo,name:"Rotate",path:"src/components/Rotate.tsx#Rotate"})}catch(__react_docgen_typescript_loader_error){}function Animations_stories_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Animations_stories_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Animations_stories_Template=function Template(_ref){var Component=_ref.Component,args=Animations_stories_objectWithoutProperties(_ref,["Component"]);return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Object(jsx_runtime.jsx)(Component,Object.assign({},args,{children:"💅"}))})},_FadeIn=Animations_stories_Template.bind({});_FadeIn.args={Component:components_FadeIn};var _FadeOut=Animations_stories_Template.bind({});_FadeOut.args={Component:components_FadeOut};var _Rotate=Animations_stories_Template.bind({});_Rotate.args={Component:components_Rotate};__webpack_exports__.default={title:"Animations",component:components_Animation,argTypes:{durationMs:{type:"number"},timingFunc:{type:"text"},iterations:{type:"text"},Component:{table:{disable:!0}},keyframes:{table:{disable:!0}},component:{table:{disable:!0}},onComplete:{table:{disable:!0}}}};_FadeIn.parameters=Object.assign({storySource:{source:"({ Component, ...args }) => {\n  return (\n    <>\n      <Component {...args}>💅</Component>\n    </>\n  )\n}"}},_FadeIn.parameters),_FadeOut.parameters=Object.assign({storySource:{source:"({ Component, ...args }) => {\n  return (\n    <>\n      <Component {...args}>💅</Component>\n    </>\n  )\n}"}},_FadeOut.parameters),_Rotate.parameters=Object.assign({storySource:{source:"({ Component, ...args }) => {\n  return (\n    <>\n      <Component {...args}>💅</Component>\n    </>\n  )\n}"}},_Rotate.parameters)},837:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(13),__webpack_require__(30),__webpack_require__(44),__webpack_require__(818),__webpack_require__(35),__webpack_require__(36),__webpack_require__(819),__webpack_require__(129),__webpack_require__(820);var client_api=__webpack_require__(842),esm=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[464,2,3]]]);