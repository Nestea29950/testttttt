(self.webpackChunkstrapi_sqlite=self.webpackChunkstrapi_sqlite||[]).push([[4121],{36825:function(e,t,n){"use strict";e.exports=n(32800)},32800:function(e,t,n){var r,o;e.exports=(r=n(53547),o=n(78384),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=121)}({0:function(e,t,n){e.exports=n(17)()},1:function(e,t){e.exports=r},10:function(e,t,n){var r=n(23),o=n(24),a=n(20),i=n(25);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},121:function(e,t,n){"use strict";n.r(t),n.d(t,"Switch",(function(){return x}));var r,o,a=n(6),i=n.n(a),l=n(5),s=n.n(l),u=n(3),d=n.n(u),c=n(1),f=n.n(c),p=n(0),b=n.n(p),h=n(2),m=n.n(h),g=n(9),y=n(4),v=["label","onChange","onLabel","offLabel","selected","visibleLabels"],E=m.a.div(r||(r=d()(["\n  background: ",";\n  border: none;\n  border-radius: 16px;\n  position: relative;\n  height: ","rem;\n  width: ","rem;\n\n  & span {\n    font-size: ",";\n  }\n\n  &:before {\n    content: '';\n    background: ",";\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n    position: absolute;\n    transition: all 0.5s;\n    left: ",";\n    top: ",";\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    &:before {\n      transition: none;\n    }\n  }\n"])),(function(e){return e.theme.colors.danger500}),1.5,2.5,(function(e){return e.visibleLabels?"1rem":0}),(function(e){return e.theme.colors.neutral0}),(function(e){return e.theme.spaces[1]}),(function(e){return e.theme.spaces[1]})),w=m.a.button(o||(o=d()(["\n  background: transparent;\n  padding: 0;\n  border: none;\n\n  &[aria-checked='true'] "," {\n    background: ",";\n  }\n\n  &[aria-checked='true'] ",":before {\n    transform: translateX(1rem);\n  }\n"])),E,(function(e){return e.theme.colors.success500}),E),x=f.a.forwardRef((function(e,t){var n=e.label,r=e.onChange,o=e.onLabel,a=e.offLabel,l=e.selected,u=e.visibleLabels,d=s()(e,v);return f.a.createElement(w,i()({ref:t,role:"switch","aria-checked":l,"aria-label":n,onClick:r,visibleLabels:u,type:"button"},d),f.a.createElement(g.Flex,null,f.a.createElement(E,null,f.a.createElement("span",null,o),f.a.createElement("span",null,a)),u&&f.a.createElement(y.Box,{as:"span","aria-hidden":!0,paddingLeft:2,color:l?"success600":"danger600"},l?o:a)))}));x.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},x.propTypes={label:b.a.string.isRequired,offLabel:b.a.string,onChange:b.a.func.isRequired,onLabel:b.a.string,selected:b.a.bool.isRequired,visibleLabels:b.a.bool},x.displayName="Switch"},13:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},17:function(e,t,n){"use strict";var r=n(18);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},18:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t){e.exports=o},20:function(e,t,n){var r=n(19);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},23:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},25:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,t,n){"use strict";n.r(t),n.d(t,"Box",(function(){return f}));var r,o=n(3),a=n.n(o),i=n(0),l=n.n(i),s=n(2),u=n.n(s),d=n(7),c={color:!0},f=u.a.div.withConfig({shouldForwardProp:function(e,t){return!c[e]&&t(e)}})(r||(r=a()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(e){var t=e.fontSize;return e.theme.fontSizes[t]||t}),(function(e){var t=e.theme,n=e.background;return t.colors[n]}),(function(e){var t=e.theme,n=e.color;return t.colors[n]}),(function(e){var t=e.theme,n=e.padding;return Object(d.a)("padding",n,t)}),(function(e){var t=e.theme,n=e.paddingTop;return Object(d.a)("padding-top",n,t)}),(function(e){var t=e.theme,n=e.paddingRight;return Object(d.a)("padding-right",n,t)}),(function(e){var t=e.theme,n=e.paddingBottom;return Object(d.a)("padding-bottom",n,t)}),(function(e){var t=e.theme,n=e.paddingLeft;return Object(d.a)("padding-left",n,t)}),(function(e){var t=e.theme,n=e.marginLeft;return Object(d.a)("margin-left",n,t)}),(function(e){var t=e.theme,n=e.marginRight;return Object(d.a)("margin-right",n,t)}),(function(e){var t=e.theme,n=e.marginTop;return Object(d.a)("margin-top",n,t)}),(function(e){var t=e.theme,n=e.marginBottom;return Object(d.a)("margin-bottom",n,t)}),(function(e){var t=e.theme;return e.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0}),(function(e){var t=e.theme;return e.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0}),(function(e){var t=e.theme,n=e.hasRadius,r=e.borderRadius;return n?t.borderRadius:r}),(function(e){return e.borderStyle}),(function(e){return e.borderWidth}),(function(e){var t=e.borderColor;return e.theme.colors[t]}),(function(e){var t=e.theme,n=e.borderColor,r=e.borderStyle,o=e.borderWidth;if(n&&!r&&!o)return"1px solid ".concat(t.colors[n])}),(function(e){var t=e.theme,n=e.shadow;return t.shadows[n]}),(function(e){return e.pointerEvents}),(function(e){var t=e._hover,n=e.theme;return t?t(n):void 0}),(function(e){return e.display}),(function(e){return e.position}),(function(e){var t=e.left;return e.theme.spaces[t]||t}),(function(e){var t=e.right;return e.theme.spaces[t]||t}),(function(e){var t=e.top;return e.theme.spaces[t]||t}),(function(e){var t=e.bottom;return e.theme.spaces[t]||t}),(function(e){return e.zIndex}),(function(e){return e.overflow}),(function(e){return e.cursor}),(function(e){var t=e.width;return e.theme.spaces[t]||t}),(function(e){var t=e.maxWidth;return e.theme.spaces[t]||t}),(function(e){var t=e.minWidth;return e.theme.spaces[t]||t}),(function(e){var t=e.height;return e.theme.spaces[t]||t}),(function(e){var t=e.maxHeight;return e.theme.spaces[t]||t}),(function(e){var t=e.minHeight;return e.theme.spaces[t]||t}),(function(e){return e.transition}),(function(e){return e.transform}),(function(e){return e.animation}),(function(e){return e.shrink}),(function(e){return e.grow}),(function(e){return e.basis}),(function(e){return e.flex}),(function(e){return e.textAlign}),(function(e){return e.textTransform}),(function(e){return e.lineHeight}),(function(e){return e.cursor}));f.displayName="Box",f.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},f.propTypes={_hover:l.a.func,background:l.a.string,basis:l.a.oneOfType([l.a.string,l.a.string]),borderColor:l.a.string,children:l.a.oneOfType([l.a.node,l.a.string]),color:l.a.string,flex:l.a.oneOfType([l.a.string,l.a.string]),grow:l.a.oneOfType([l.a.string,l.a.string]),hasRadius:l.a.bool,hiddenS:l.a.bool,hiddenXS:l.a.bool,padding:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingBottom:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingLeft:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingRight:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingTop:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),shadow:l.a.string,shrink:l.a.oneOfType([l.a.string,l.a.string])}},5:function(e,t,n){var r=n(22);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},7:function(e,t,n){"use strict";var r=n(10),o=n.n(r),a=n(13),i=n.n(a);t.a=function(e,t,n){var r=t;if(Array.isArray(t)||"object"!==i()(t)||(r=[null==t?void 0:t.desktop,null==t?void 0:t.tablet,null==t?void 0:t.mobile]),void 0!==r){if(Array.isArray(r)){var a=r,l=o()(a,3),s=l[0],u=l[1],d=l[2],c="".concat(e,": ").concat(n.spaces[s],";");return void 0!==u&&(c+="".concat(n.mediaQueries.tablet,"{\n          ").concat(e,": ").concat(n.spaces[u],";\n        }")),void 0!==d&&(c+="".concat(n.mediaQueries.mobile,"{\n          ").concat(e,": ").concat(n.spaces[d],";\n        }")),c}var f=n.spaces[r]||r;return"".concat(e,": ").concat(f,";")}}},9:function(e,t,n){"use strict";n.r(t),n.d(t,"Flex",(function(){return f}));var r,o=n(3),a=n.n(o),i=n(0),l=n.n(i),s=n(2),u=n.n(s),d=n(4),c={direction:!0},f=u()(d.Box).withConfig({shouldForwardProp:function(e,t){return!c[e]&&t(e)}})(r||(r=a()(["\n  display: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  flex-wrap: ",";\n"])),(function(e){return e.inline?"inline-flex":"flex"}),(function(e){return e.direction}),(function(e){return e.justifyContent}),(function(e){return e.alignItems}),(function(e){return e.wrap}));f.defaultProps={alignItems:"center",basis:void 0,direction:"row",inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},f.propTypes={alignItems:l.a.string,basis:l.a.oneOfType([l.a.string,l.a.number]),direction:l.a.string,inline:l.a.bool,justifyContent:l.a.string,reverse:l.a.bool,wrap:l.a.string}}}))},72251:function(e,t,n){"use strict";var r=n(25108),o=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67154)),i=j(n(53547)),l=n(39711),s=n(97132),u=n(68547),d=n(35395),c=n(92543),f=n(40264),p=n(9524),b=n(49549),h=n(46458),m=n(43546),g=n(33483),y=n(64459),v=n(19631),E=n(36825),w=n(80117),x=n(31512),T=n(67422),O=n(94117),k=o(n(89326)),_=o(n(56204)),S=o(n(62982)),L=o(n(26485)),C=j(n(71681)),D=o(n(13240));function M(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(M=function(e){return e?n:t})(e)}function j(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=M(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}var P=()=>{const{isLoading:e,allowedActions:{canCreate:t,canRead:n,canUpdate:o,canDelete:M}}=(0,u.useRBAC)(D.default.settings.webhooks),j=(0,u.useNotification)(),P=(0,i.useRef)(!0),{formatMessage:B}=(0,s.useIntl)(),[W,A]=(0,i.useState)(!1),[{webhooks:R,webhooksToDelete:I,webhookToDelete:H,loadingWebhooks:K},N]=(0,i.useReducer)(C.default,C.initialState),{notifyStatus:z}=(0,T.useNotifyAT)();(0,u.useFocusWhenNavigate)();const{push:F}=(0,l.useHistory)(),{pathname:$}=(0,l.useLocation)(),q=R.length,G=I.length,U=e=>R.findIndex((t=>t.id===e));(0,i.useEffect)((()=>(P.current=!0,()=>{P.current=!1})),[]),(0,i.useEffect)((()=>{n&&Q()}),[n]);const Q=async()=>{try{const{data:e}=await(0,u.request)("/admin/webhooks",{method:"GET"});P.current&&(N({type:"GET_DATA_SUCCEEDED",data:e}),z("webhooks have been loaded"))}catch(e){r.log(e),P.current&&(20!==e.code&&j({type:"warning",message:{id:"notification.error"}}),N({type:"TOGGLE_LOADING"}))}},V=async()=>{try{await(0,u.request)(`/admin/webhooks/${H}`,{method:"DELETE"}),N({type:"WEBHOOK_DELETED",index:U(H)})}catch(e){20!==e.code&&j({type:"warning",message:{id:"notification.error"}})}A(!1)},X=async()=>{const e={ids:I};try{await(0,u.request)("/admin/webhooks/batch-delete",{method:"POST",body:e}),P.current&&N({type:"WEBHOOKS_DELETED"})}catch(t){P.current&&20!==t.code&&j({type:"warning",message:{id:"notification.error"}})}A(!1)},Y=e=>{A(!0),"all"!==e&&N({type:"SET_WEBHOOK_TO_DELETE",id:e})},J=e=>{F(`${$}/${e}`)};return i.default.createElement(d.Layout,null,i.default.createElement(u.SettingsPageTitle,{name:"Webhooks"}),i.default.createElement(w.Main,{"aria-busy":e||K},i.default.createElement(d.HeaderLayout,{title:B({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:B({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:t&&!K&&i.default.createElement(x.LinkButton,{startIcon:i.default.createElement(k.default,null),variant:"default",to:`${$}/create`,size:"L"},B({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),G>0&&M&&i.default.createElement(d.ActionLayout,{startActions:i.default.createElement(i.default.Fragment,null,i.default.createElement(g.Typography,{variant:"epsilon",textColor:"neutral600"},B({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:G})),i.default.createElement(y.Button,{onClick:()=>Y("all"),startIcon:i.default.createElement(S.default,null),size:"L",variant:"danger-light"},B({id:"global.delete",defaultMessage:"Delete"})))}),i.default.createElement(d.ContentLayout,null,e||K?i.default.createElement(O.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},i.default.createElement(u.LoadingIndicatorPage,null)):i.default.createElement(i.default.Fragment,null,q>0?i.default.createElement(m.Table,{colCount:5,rowCount:q+1,footer:i.default.createElement(m.TFooter,{onClick:()=>t?J("create"):{},icon:i.default.createElement(k.default,null)},B({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},i.default.createElement(m.Thead,null,i.default.createElement(m.Tr,null,i.default.createElement(m.Th,null,i.default.createElement(h.BaseCheckbox,{"aria-label":B({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:G>0&&G<q,value:G===q,onValueChange:()=>{N({type:"SET_ALL_WEBHOOKS_TO_DELETE"})}})),i.default.createElement(m.Th,{width:"20%"},i.default.createElement(g.Typography,{variant:"sigma",textColor:"neutral600"},B({id:"global.name",defaultMessage:"Name"}))),i.default.createElement(m.Th,{width:"60%"},i.default.createElement(g.Typography,{variant:"sigma",textColor:"neutral600"},B({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),i.default.createElement(m.Th,{width:"20%"},i.default.createElement(g.Typography,{variant:"sigma",textColor:"neutral600"},B({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),i.default.createElement(m.Th,null,i.default.createElement(v.VisuallyHidden,null,B({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),i.default.createElement(m.Tbody,null,R.map((e=>i.default.createElement(m.Tr,(0,a.default)({key:e.id},(0,u.onRowClick)({fn:()=>J(e.id),condition:o})),i.default.createElement(m.Td,u.stopPropagation,i.default.createElement(h.BaseCheckbox,{"aria-label":`${B({id:"global.select",defaultMessage:"Select"})} ${e.name}`,value:null===I||void 0===I?void 0:I.includes(e.id),onValueChange:t=>((e,t)=>{N({type:"SET_WEBHOOKS_TO_DELETE",value:e,id:t})})(t,e.id),id:"select",name:"select"})),i.default.createElement(m.Td,null,i.default.createElement(g.Typography,{fontWeight:"semiBold",textColor:"neutral800"},e.name)),i.default.createElement(m.Td,null,i.default.createElement(g.Typography,{textColor:"neutral800"},e.url)),i.default.createElement(m.Td,null,i.default.createElement(f.Flex,u.stopPropagation,i.default.createElement(E.Switch,{onLabel:B({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:B({id:"global.disabled",defaultMessage:"Disabled"}),label:`${e.name} ${B({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:e.isEnabled,onChange:()=>(async(e,t)=>{const n=U(t),r=[n,"isEnabled"],o={...R[n],isEnabled:e};delete o.id;try{N({type:"SET_WEBHOOK_ENABLED",keys:r,value:e}),await(0,u.request)(`/admin/webhooks/${t}`,{method:"PUT",body:o})}catch(a){P.current&&(N({type:"SET_WEBHOOK_ENABLED",keys:r,value:!e}),20!==a.code&&j({type:"warning",message:{id:"notification.error"}}))}})(!e.isEnabled,e.id),visibleLabels:!0}))),i.default.createElement(m.Td,null,i.default.createElement(p.Stack,(0,a.default)({horizontal:!0,spacing:1},u.stopPropagation),o&&i.default.createElement(b.IconButton,{onClick:()=>{J(e.id)},label:B({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:i.default.createElement(_.default,null),noBorder:!0}),M&&i.default.createElement(b.IconButton,{onClick:()=>Y(e.id),label:B({id:"global.delete",defaultMessage:"Delete"}),icon:i.default.createElement(S.default,null),noBorder:!0,id:`delete-${e.id}`})))))))):i.default.createElement(c.EmptyStateLayout,{icon:i.default.createElement(L.default,{width:"160px"}),content:B({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:i.default.createElement(y.Button,{variant:"secondary",startIcon:i.default.createElement(k.default,null),onClick:()=>t?J("create"):{}},B({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))})))),i.default.createElement(u.ConfirmDialog,{isOpen:W,onToggleDialog:()=>{A((e=>!e))},onConfirm:()=>{H?V():X()}}))};t.default=P},71681:function(e,t,n){"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=t.default=void 0;var o=r(n(66312)),a=r(n(36968));t.initialState={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0};var i=(e,t)=>(0,o.default)(e,(n=>{switch(t.type){case"GET_DATA_SUCCEEDED":n.webhooks=t.data,n.loadingWebhooks=!1;break;case"TOGGLE_LOADING":n.loadingWebhooks=!e.loadingWebhooks;break;case"SET_WEBHOOK_ENABLED":(0,a.default)(n,["webhooks",...t.keys],t.value);break;case"SET_WEBHOOK_TO_DELETE":n.webhookToDelete=t.id;break;case"SET_WEBHOOKS_TO_DELETE":t.value?n.webhooksToDelete.push(t.id):n.webhooksToDelete=e.webhooksToDelete.filter((e=>e!==t.id));break;case"SET_ALL_WEBHOOKS_TO_DELETE":0===e.webhooksToDelete.length?n.webhooksToDelete=e.webhooks.map((e=>e.id)):n.webhooksToDelete=[];break;case"WEBHOOKS_DELETED":n.webhooks=e.webhooks.filter((t=>!e.webhooksToDelete.includes(t.id))),n.webhooksToDelete=[];break;case"WEBHOOK_DELETED":n.webhooks=e.webhooks.filter(((e,n)=>n!==t.index)),n.webhookToDelete=null;break;default:return n}}));t.default=i},94859:function(e,t,n){"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(53547)),a=n(68547),i=r(n(13240)),l=r(n(72251));var s=()=>o.default.createElement(a.CheckPagePermissions,{permissions:i.default.settings.webhooks.main},o.default.createElement(l.default,null));t.default=s}}]);