(self.webpackChunkstrapi_sqlite=self.webpackChunkstrapi_sqlite||[]).push([[5199],{14319:function(e,t,a){var r;e.exports=(r=a(53547),function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=67)}({0:function(e,t){e.exports=r},67:function(e,t,a){"use strict";a.r(t);var r=a(0);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}t.default=function(e){return r.createElement("svg",n({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",fill:"#32324D"}),r.createElement("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",fill:"#32324D"}),r.createElement("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",fill:"#32324D"}))}}}))},35470:function(e,t,a){"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67154)),l=r(a(53547)),i=r(a(45697)),o=a(46458),s=a(94117),u=a(49549),d=a(40264),c=a(33483),f=a(43546),p=r(a(56204)),m=r(a(62982)),g=a(39711),y=a(97132),v=a(68547),b=a(26595);const h=e=>{let{canDelete:t,headers:a,entriesToDelete:r,onClickDelete:i,onSelectRow:h,withMainAction:E,withBulkActions:M,rows:w}=e;const{push:k,location:{pathname:O}}=(0,g.useHistory)(),{formatMessage:S}=(0,y.useIntl)();return l.default.createElement(f.Tbody,null,w.map((e=>{const g=-1!==r.findIndex((t=>t===e.id));return l.default.createElement(f.Tr,(0,n.default)({key:e.id},(0,v.onRowClick)({fn:()=>k(`${O}/${e.id}`),condition:M})),E&&l.default.createElement(f.Td,v.stopPropagation,l.default.createElement(o.BaseCheckbox,{"aria-label":S({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,b.getFullName)(e.firstname,e.lastname)}),checked:g,onChange:()=>{h({name:e.id,value:!g})}})),a.map((t=>{let{key:a,cellFormatter:r,name:n,...i}=t;return l.default.createElement(f.Td,{key:a},"function"===typeof r?r(e,{key:a,name:n,...i}):l.default.createElement(c.Typography,{textColor:"neutral800"},e[n]||"-"))})),M&&l.default.createElement(f.Td,null,l.default.createElement(d.Flex,{justifyContent:"end"},l.default.createElement(u.IconButton,{onClick:()=>k(`${O}/${e.id}`),label:S({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,b.getFullName)(e.firstname,e.lastname)}),noBorder:!0,icon:l.default.createElement(p.default,null)}),t&&l.default.createElement(s.Box,(0,n.default)({paddingLeft:1},v.stopPropagation),l.default.createElement(u.IconButton,{onClick:()=>i(e.id),label:S({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,b.getFullName)(e.firstname,e.lastname)}),noBorder:!0,icon:l.default.createElement(m.default,null)})))))})))};h.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete:()=>{},onSelectRow:()=>{},rows:[],withBulkActions:!1,withMainAction:!1},h.propTypes={canDelete:i.default.bool,entriesToDelete:i.default.array,headers:i.default.array.isRequired,onClickDelete:i.default.func,onSelectRow:i.default.func,rows:i.default.array,withBulkActions:i.default.bool,withMainAction:i.default.bool};var E=h;t.default=E},19703:function(e,t,a){"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=n?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(53547)),l=r(a(45697)),i=a(97132),o=a(64459),s=a(94117),u=r(a(88231)),d=a(68547);function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}const f=e=>{let{displayedFilters:t}=e;const[a,r]=(0,n.useState)(!1),{formatMessage:l}=(0,i.useIntl)(),c=(0,n.useRef)(),f=()=>{r((e=>!e))};return n.default.createElement(n.default.Fragment,null,n.default.createElement(s.Box,{paddingTop:1,paddingBottom:1},n.default.createElement(o.Button,{variant:"tertiary",ref:c,startIcon:n.default.createElement(u.default,null),onClick:f,size:"S"},l({id:"app.utils.filters",defaultMessage:"Filters"})),a&&n.default.createElement(d.FilterPopoverURLQuery,{displayedFilters:t,isVisible:a,onToggle:f,source:c})),n.default.createElement(d.FilterListURLQuery,{filtersSchema:t}))};f.propTypes={displayedFilters:l.default.arrayOf(l.default.shape({name:l.default.string.isRequired,metadatas:l.default.shape({label:l.default.string}),fieldSchema:l.default.shape({type:l.default.string})})).isRequired};var p=f;t.default=p},19891:function(e,t,a){"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67154)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=k(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=n?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(53547)),i=r(a(45697)),o=a(97132),s=a(68991),u=a(39272),d=a(44981),c=a(94117),f=a(64459),p=a(9524),m=a(33483),g=a(80831),y=a(68547),v=a(23724),b=a(53777),h=r(a(22849)),E=r(a(59127)),M=r(a(36031)),w=r(a(63875));function k(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(k=function(e){return e?a:t})(e)}const O=window&&window.strapi&&window.strapi.isEE?a(2008).Z:a(42072).default,S=window&&window.strapi&&window.strapi.isEE?a(656).Z:a(99852).Z,P=window&&window.strapi&&window.strapi.isEE?a(43685).Z:a(84768).Z,j=e=>{let{queryName:t,onToggle:a}=e;const[r,i]=(0,l.useState)("create"),[k,j]=(0,l.useState)(!1),[C,T]=(0,l.useState)(null),_=(0,v.useQueryClient)(),{formatMessage:A}=(0,o.useIntl)(),x=(0,y.useNotification)(),{lockApp:D,unlockApp:B}=(0,y.useOverlayBlocker)(),F=(0,v.useMutation)((e=>b.axiosInstance.post("/admin/users",e)),{onSuccess:async e=>{let{data:a}=e;T(a.data.registrationToken),await _.invalidateQueries(t),L(),j(!1)},onError:e=>{throw j(!1),x({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),e},onSettled:()=>{B()}}),I=A({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),L=()=>{U?i(U):a()},{buttonSubmitLabel:R,isDisabled:q,next:U}=w.default[r],W="create"===r?l.default.createElement(f.Button,{type:"submit",loading:k},A(R)):l.default.createElement(f.Button,{type:"button",loading:k,onClick:a},A(R));return l.default.createElement(s.ModalLayout,{onClose:a,labelledBy:"title"},l.default.createElement(s.ModalHeader,null,l.default.createElement(d.Breadcrumbs,{label:I},l.default.createElement(d.Crumb,null,I))),l.default.createElement(g.Formik,{initialValues:O,onSubmit:async(e,t)=>{let{setErrors:a}=t;D(),j(!0);try{await F.mutateAsync(e)}catch(n){var r;B(),"Email already taken"===(null===n||void 0===n||null===(r=n.response)||void 0===r?void 0:r.data.message)&&a({email:n.response.data.message})}},validationSchema:M.default,validateOnChange:!1},(e=>{let{errors:t,handleChange:i,values:o}=e;return l.default.createElement(y.Form,null,l.default.createElement(s.ModalBody,null,l.default.createElement(p.Stack,{spacing:6},"create"!==r&&l.default.createElement(P,{registrationToken:C}),l.default.createElement(c.Box,null,l.default.createElement(m.Typography,{variant:"beta",as:"h2"},A({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),l.default.createElement(c.Box,{paddingTop:4},l.default.createElement(p.Stack,{spacing:1},l.default.createElement(u.Grid,{gap:5},E.default.map((e=>e.map((e=>l.default.createElement(u.GridItem,(0,n.default)({key:e.name},e.size),l.default.createElement(y.GenericInput,(0,n.default)({},e,{disabled:q,error:t[e.name],onChange:i,value:o[e.name]}))))))))))),l.default.createElement(c.Box,null,l.default.createElement(m.Typography,{variant:"beta",as:"h2"},A({id:"global.roles",defaultMessage:"User's role"})),l.default.createElement(c.Box,{paddingTop:4},l.default.createElement(u.Grid,{gap:5},l.default.createElement(u.GridItem,{col:6,xs:12},l.default.createElement(h.default,{disabled:q,error:t.roles,onChange:i,value:o.roles})),S.map((e=>e.map((e=>l.default.createElement(u.GridItem,(0,n.default)({key:e.name},e.size),l.default.createElement(y.GenericInput,(0,n.default)({},e,{disabled:q,onChange:i,value:o[e.name]})))))))))))),l.default.createElement(s.ModalFooter,{startActions:l.default.createElement(f.Button,{variant:"tertiary",onClick:a,type:"button"},A({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:W}))})))};j.propTypes={onToggle:i.default.func.isRequired,queryName:i.default.array.isRequired};var C=j;t.default=C},42072:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={firstname:"",lastname:"",email:"",roles:[]};t.default=a},59127:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]];t.default=a},99852:function(e,t){"use strict";t.Z=void 0;var a=[];t.Z=a},36031:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=l(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,a&&a.set(e,r);return r}(a(53209)),n=a(68547);function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(l=function(e){return e?a:t})(e)}var i=r.object().shape({firstname:r.string().required(n.translatedErrors.required),lastname:r.string(),email:r.string().email(n.translatedErrors.email).required(n.translatedErrors.required),roles:r.array().min(1,n.translatedErrors.required).required(n.translatedErrors.required)});t.default=i},63875:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};t.default=a},42902:function(e,t,a){"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(53547)),l=r(a(45697)),i=a(94117),o=a(40264),s=a(68547);const u=e=>{let{pagination:t}=e;return n.default.createElement(i.Box,{paddingTop:4},n.default.createElement(o.Flex,{alignItems:"flex-end",justifyContent:"space-between"},n.default.createElement(s.PageSizeURLQuery,null),n.default.createElement(s.PaginationURLQuery,{pagination:t})))};u.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},u.propTypes={pagination:l.default.shape({page:l.default.number,pageCount:l.default.number,pageSize:l.default.number,total:l.default.number})};var d=u;t.default=d},69515:function(e,t,a){"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=w(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=n?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(53547)),l=a(68547),i=a(35395),o=a(64459),s=a(80117),u=a(67422),d=r(a(14319)),c=a(39711),f=a(97132),p=a(23724),m=r(a(13240)),g=r(a(35470)),y=r(a(19703)),v=r(a(19891)),b=r(a(42902)),h=a(25594),E=r(a(27433)),M=r(a(20920));function w(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(w=function(e){return e?a:t})(e)}var k=()=>{const[e,t]=(0,n.useState)(!1),{allowedActions:{canCreate:a,canDelete:r,canRead:w}}=(0,l.useRBAC)(m.default.settings.users),k=(0,p.useQueryClient)(),O=(0,l.useNotification)(),{formatMessage:S}=(0,f.useIntl)(),{search:P}=(0,c.useLocation)();(0,l.useFocusWhenNavigate)();const{notifyStatus:j}=(0,u.useNotifyAT)(),C=["users",P],T=S({id:"global.users",defaultMessage:"Users"}),_=()=>{j(S({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:T}))},{status:A,data:x,isFetching:D}=(0,p.useQuery)(C,(()=>(0,h.fetchData)(P,_)),{enabled:w,keepPreviousData:!0,retry:!1,staleTime:2e4,onError:()=>{O({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),B=()=>{t((e=>!e))},F=(0,p.useMutation)((e=>(0,h.deleteData)(e)),{onSuccess:async()=>{await k.invalidateQueries(C)},onError:e=>{var t,a;null!==e&&void 0!==e&&null!==(t=e.response)&&void 0!==t&&null!==(a=t.data)&&void 0!==a&&a.data?O({type:"warning",message:e.response.data.data}):O({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),I="success"!==A&&"error"!==A||"success"===A&&D,L=a?n.default.createElement(o.Button,{"data-testid":"create-user-button",onClick:B,startIcon:n.default.createElement(d.default,null),size:"L"},S({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})):void 0;return n.default.createElement(s.Main,{"aria-busy":I},n.default.createElement(l.SettingsPageTitle,{name:"Users"}),n.default.createElement(i.HeaderLayout,{primaryAction:L,title:T,subtitle:S({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),w&&n.default.createElement(i.ActionLayout,{startActions:n.default.createElement(n.default.Fragment,null,n.default.createElement(l.SearchURLQuery,{label:S({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:T})}),n.default.createElement(y.default,{displayedFilters:E.default}))}),n.default.createElement(i.ContentLayout,{canRead:w},!w&&n.default.createElement(l.NoPermissions,null),"error"===A&&n.default.createElement("div",null,"TODO: An error occurred"),w&&n.default.createElement(n.default.Fragment,null,n.default.createElement(l.DynamicTable,{contentType:"Users",isLoading:I,onConfirmDeleteAll:F.mutateAsync,onConfirmDelete:e=>F.mutateAsync([e]),headers:M.default,rows:null===x||void 0===x?void 0:x.results,withBulkActions:!0,withMainAction:r},n.default.createElement(g.default,{canDelete:r,headers:M.default,rows:(null===x||void 0===x?void 0:x.results)||[],withBulkActions:!0,withMainAction:r})),n.default.createElement(b.default,{pagination:null===x||void 0===x?void 0:x.pagination}))),e&&n.default.createElement(v.default,{onToggle:B,queryName:C}))};t.default=k},25594:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchData=t.deleteData=void 0;var r=a(53777);t.fetchData=async(e,t)=>{const{data:{data:a}}=await r.axiosInstance.get(`/admin/users${e}`);return t(),a};t.deleteData=async e=>{await r.axiosInstance.post("/admin/users/batch-delete",{ids:e})}},27433:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}];t.default=a},20920:function(e,t,a){"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(53547)),l=a(40264),i=a(33483),o=a(68547);var s=[{name:"firstname",key:"firstname",metadatas:{label:"Firstname",sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:"Lastname",sortable:!0}},{key:"email",name:"email",metadatas:{label:"Email",sortable:!0}},{key:"roles",name:"roles",metadatas:{label:"Roles",sortable:!1},cellFormatter:e=>{let{roles:t}=e;return n.default.createElement(i.Typography,{textColor:"neutral800"},t.map((e=>e.name)).join(",\n"))}},{key:"username",name:"username",metadatas:{label:"Username",sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:"User status",sortable:!1},cellFormatter:e=>{let{isActive:t}=e;return n.default.createElement(l.Flex,null,n.default.createElement(o.Status,{isActive:t,variant:t?"success":"danger"}),n.default.createElement(i.Typography,{textColor:"neutral800"},t?"Active":"Inactive"))}}];t.default=s},42222:function(e,t,a){"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(53547)),l=a(68547),i=r(a(13240)),o=r(a(69515));var s=()=>n.default.createElement(l.CheckPagePermissions,{permissions:i.default.settings.users.main},n.default.createElement(o.default,null));t.default=s},38059:function(e,t,a){"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(53547)),l=r(a(45697)),i=a(49549),o=a(68547),s=r(a(54279)),u=a(74855),d=a(97132);const c=()=>n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},n.default.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},n.default.createElement("tspan",{x:"23",y:"36"},"\u2709\ufe0f"))),f=e=>{let{children:t,target:a}=e;const r=(0,o.useNotification)(),{formatMessage:l}=(0,d.useIntl)(),f=l({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return n.default.createElement(o.ContentBox,{endAction:n.default.createElement(u.CopyToClipboard,{onCopy:()=>{r({type:"info",message:{id:"notification.link-copied"}})},text:a},n.default.createElement(i.IconButton,{label:f,noBorder:!0,icon:n.default.createElement(s.default,null)})),title:a,titleEllipsis:!0,subtitle:t,icon:n.default.createElement(c,null),iconBackground:"neutral100"})};f.propTypes={children:l.default.oneOfType([l.default.element,l.default.string]).isRequired,target:l.default.string.isRequired};var p=f;t.default=p},84768:function(e,t,a){"use strict";var r=a(95318);t.Z=void 0;var n=r(a(53547)),l=a(97132),i=r(a(45697)),o=r(a(92424)),s=r(a(38059));const u=e=>{let{registrationToken:t}=e;const{formatMessage:a}=(0,l.useIntl)(),r=`${window.location.origin}${o.default}auth/register?registrationToken=${t}`;return n.default.createElement(s.default,{target:r},a({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};u.defaultProps={registrationToken:""},u.propTypes={registrationToken:i.default.string};var d=u;t.Z=d},22849:function(e,t,a){"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(53547)),l=r(a(45697)),i=a(97132),o=a(2632),s=a(23724),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=n?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(78384)),d=r(a(79386)),c=a(53777);function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}const p=(0,u.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(359deg);}"]),m=u.default.div.withConfig({displayName:"SelectRoles__LoadingWrapper",componentId:"sc-1z5s3s-0"})(["animation:"," 2s infinite linear;"],p),g=()=>n.default.createElement(m,null,n.default.createElement(d.default,null)),y=async()=>{const{data:e}=await c.axiosInstance.get("/admin/roles");return e.data},v=e=>{let{disabled:t,error:a,onChange:r,value:l}=e;const{status:u,data:d}=(0,s.useQuery)(["roles"],y,{staleTime:5e4}),{formatMessage:c}=(0,i.useIntl)(),f=a?c({id:a,defaultMessage:a}):"",p=c({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),m=c({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),v=c({id:"app.components.Select.placeholder",defaultMessage:"Select"}),b="loading"===u?n.default.createElement(g,null):void 0;return n.default.createElement(o.Select,{id:"roles",disabled:t,error:f,hint:m,label:p,name:"roles",onChange:e=>{r({target:{name:"roles",value:e}})},placeholder:v,multi:!0,startIcon:b,value:l,withTags:!0,required:!0},(d||[]).map((e=>n.default.createElement(o.Option,{key:e.id,value:e.id},e.name))))};v.defaultProps={disabled:!1,error:void 0},v.propTypes={disabled:l.default.bool,error:l.default.string,onChange:l.default.func.isRequired,value:l.default.array.isRequired};var b=v;t.default=b},2008:function(e,t,a){"use strict";var r=a(95318);t.Z=void 0;var n=r(a(42072));const l=strapi.features.isEnabled(strapi.features.SSO)?{useSSORegistration:!0}:{};var i={...n.default,...l};t.Z=i},656:function(e,t){"use strict";t.Z=void 0;var a=strapi.features.isEnabled(strapi.features.SSO)?[[{intlLabel:{id:"Settings.permissions.users.form.sso",defaultMessage:"Connect with SSO"},hint:{id:"Settings.permissions.users.form.sso.description",defaultMessage:"When enabled (ON), users can login via SSO"},name:"useSSORegistration",type:"bool",size:{col:6,xs:12}}]]:[];t.Z=a},43685:function(e,t,a){"use strict";var r=a(95318);t.Z=void 0;var n=r(a(53547)),l=a(97132),i=r(a(45697)),o=r(a(92424)),s=r(a(38059));const u=e=>{let{registrationToken:t}=e;const{formatMessage:a}=(0,l.useIntl)();return t?n.default.createElement(s.default,{target:`${window.location.origin}${o.default}auth/register?registrationToken=${t}`},a({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):n.default.createElement(s.default,{target:`${window.location.origin}${o.default}auth/login`},a({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};u.defaultProps={registrationToken:""},u.propTypes={registrationToken:i.default.string};var d=u;t.Z=d}}]);