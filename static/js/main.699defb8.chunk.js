(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{19:function(e,t,n){e.exports={filterContainer:"Filter_filterContainer__2sX98",filterLabel:"Filter_filterLabel__3KWoH",filterInput:"Filter_filterInput__1jZVN"}},24:function(e,t,n){e.exports={delay:"500ms",enter:"LogoSladeLeftTransition_enter__3jLs9",enterActive:"LogoSladeLeftTransition_enterActive__2bYX-",exit:"LogoSladeLeftTransition_exit__2uqh6",exitActive:"LogoSladeLeftTransition_exitActive__1Rhqp"}},25:function(e,t,n){e.exports={delay:"250ms",enter:"SladeRightTransition_enter__1S0Uu",enterActive:"SladeRightTransition_enterActive__2qOAD",exit:"SladeRightTransition_exit__1kzvW",exitActive:"SladeRightTransition_exitActive__1oXWa"}},26:function(e,t,n){e.exports={delay:"250ms",enter:"ScoleTransition_enter__yKi8L",enterActive:"ScoleTransition_enterActive__1YtLh",exit:"ScoleTransition_exit__2sckY",exitActive:"ScoleTransition_exitActive__31KIE"}},27:function(e,t,n){e.exports={contactItem:"ContactItem_contactItem__3vmuW",deleteButton:"ContactItem_deleteButton__3Kdvp"}},28:function(e,t,n){e.exports={delay:"250ms",enter:"SladeLeftTransition_enter__3GTV7",enterActive:"SladeLeftTransition_enterActive__1D2E5",exit:"SladeLeftTransition_exit__wVV8W",exitActive:"SladeLeftTransition_exitActive__27VI7"}},33:function(e,t,n){e.exports={LogoTitle:"Logo_LogoTitle__4m5DJ"}},34:function(e,t,n){e.exports={ErrorTextWrapper:"ErrorComponent_ErrorTextWrapper__1AqtF"}},36:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},39:function(e,t,n){e.exports=n(52)},49:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),i=n.n(o),c=n(4),l=n(32),s=n(13),u=n(14),m=n(17),p=n(16),E=n(18),_=n(5),f={ADD_CONTACT:"ADD_CONTACT",DELETE_CONTACT:"DELETE_CONTACT",UPDATE_FILTER:"UPDATE_FILTER",UPDATE_ERROR_MESSAGE:"UPDATE_ERROR_MESSAGE"},b=Object(_.b)(f.ADD_CONTACT),d=Object(_.b)(f.DELETE_CONTACT),O=Object(_.b)(f.UPDATE_FILTER),h=Object(_.b)(f.UPDATE_ERROR_MESSAGE),T=n(33),g=n.n(T),v=function(e){var t=e.logoTitle;return a.a.createElement("h1",{className:g.a.LogoTitle},t)},S=n(34),A=n.n(S),y=function(e){var t=e.errorMessage;return a.a.createElement("div",{className:A.a.ErrorTextWrapper},a.a.createElement("p",null,t))},j=n(54),C=n(24),D=n.n(C),L=function(e){var t=e.isShow,n=e.children,r=parseInt(D.a.delay);return a.a.createElement(j.a,{in:t,classNames:D.a,timeout:r,unmountOnExit:!0},n)},x=n(25),w=n.n(x),F=function(e){var t=e.isShow,n=e.children,r=parseInt(w.a.delay);return a.a.createElement(j.a,{in:t,classNames:w.a,timeout:r,unmountOnExit:!0},n)},N={DEFAULT_MESSAGE:"",ALREADY_EXISTS_MESSAGE:"Contact already exists!"},P=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={isShowLogo:!1},n}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({isShowLogo:!0})}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,r=n.errorMessage,a=n.updateErrorMessage;e.errorMessage!==r&&r!==N.DEFAULT_MESSAGE&&setTimeout((function(){a(N.DEFAULT_MESSAGE)}),3e3)}},{key:"render",value:function(){var e=this.state.isShowLogo,t=this.props,n=t.logoTitle,r=t.errorMessage,o=r!==N.DEFAULT_MESSAGE;return a.a.createElement("header",null,a.a.createElement(L,{isShow:e},a.a.createElement(v,{logoTitle:n})),a.a.createElement(F,{isShow:o},a.a.createElement(y,{errorMessage:r})))}}]),t}(r.Component);P.defaultProps={logoTitle:"",errorMessage:""};var M=Object(c.b)((function(e){return{errorMessage:e.errorMessage}}),{updateErrorMessage:h})(P),R=n(6),I=n(55),k=n(8),U=n.n(k);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(R.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W={name:"",number:""},Y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state=B({},W),n.handleChange=function(e){var t=e.target,r=t.name,a=t.value;n.setState(Object(R.a)({},r,a))},n.handleSubmitForm=function(e){e.preventDefault();var t=n.props.addContact,r=n.state;t({name:r.name,number:r.number,id:Object(I.a)()}),n.setState(B({},W))},n}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return a.a.createElement("form",{className:U.a.FormContainer,onSubmit:this.handleSubmitForm},a.a.createElement("label",{className:U.a.labelContainer},"Name",a.a.createElement("input",{type:"text",name:"name",className:U.a.inputForm,value:t,onChange:this.handleChange,required:!0})),a.a.createElement("label",{className:U.a.labelContainer},"Number",a.a.createElement("input",{type:"tel",name:"number",className:U.a.inputForm,value:n,onChange:this.handleChange,pattern:"^(\\+?\\d{1,3}\\(?-?\\s?\\d{2,3}\\)?-?\\s?)?\\d{3}-?\\s?\\d{2}-?\\s?\\d{2}$",required:!0})),a.a.createElement("button",{type:"submit",className:U.a.submitButton},"Add contact"))}}]),t}(r.Component),q=Object(c.b)((function(e){return{contacts:e.contacts}}),{addContact:b})(Y),X=n(26),K=n.n(X),V=function(e){var t=e.isShow,n=e.children,r=parseInt(K.a.delay);return a.a.createElement(j.a,{in:t,classNames:K.a,timeout:r,unmountOnExit:!0},n)},J=n(19),H=n.n(J),z=Object(c.b)((function(e){return{contacts:e.contacts,filter:e.filter}}),{updateFilter:O})((function(e){var t=e.updateFilter;return a.a.createElement("div",{className:H.a.filterContainer},a.a.createElement("label",{className:H.a.filterLabel},"Find contact by name",a.a.createElement("input",{type:"search",className:H.a.filterInput,onChange:function(e){return t(e.target.value)}})))})),Z=n(56),$=n(27),Q=n.n($),ee=function(e){var t=e.elem,n=e.handleDelete,r=t.id,o=t.name,i=t.number;return a.a.createElement("li",{className:Q.a.contactItem,id:r},a.a.createElement("span",null,o),a.a.createElement("span",null,i),a.a.createElement("button",{type:"button",className:Q.a.deleteButton,onClick:function(){return n(r)}},"\u2715"))},te=n(28),ne=n.n(te),re=function(e){var t,n=e.contacts,r=e.filter,o=e.deleteContact,i=parseInt(ne.a.delay),c=r.length>0?(t=r,n.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())}))):n;return a.a.createElement(Z.a,{component:"ul"},c.map((function(e){return a.a.createElement(j.a,{key:e.id,timeout:i,classNames:ne.a,unmountOnExit:!0},a.a.createElement(ee,{elem:e,handleDelete:o}))})))};re.defaultProps={contacts:[],filter:""};var ae,oe=Object(c.b)((function(e){return{contacts:e.contacts,filter:e.filter}}),{deleteContact:d})(re),ie=(n(49),Object(c.b)((function(e){return{contacts:e.contacts}}))((function(e){var t=e.contacts.length>2;return a.a.createElement(a.a.Fragment,null,a.a.createElement(M,{logoTitle:"Phonebook"}),a.a.createElement("main",null,a.a.createElement(q,null),a.a.createElement(V,{isShow:t},a.a.createElement(z,null)),a.a.createElement(oe,null)))}))),ce=n(29),le=n(35),se=n.n(le),ue=n(11),me=n(37);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach((function(t){Object(R.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _e={contacts:n(36),filter:"",errorMessage:""},fe=Object(_.c)(Ee({},_e),(ae={},Object(R.a)(ae,f.ADD_CONTACT,(function(e,t){return e.contacts.find((function(e){return e.name===t.payload.name}))?Ee({},e,{errorMessage:N.ALREADY_EXISTS_MESSAGE}):Ee({},e,{contacts:[].concat(Object(me.a)(e.contacts),[t.payload])})})),Object(R.a)(ae,f.DELETE_CONTACT,(function(e,t){var n=t.payload;return Ee({},e,{contacts:e.contacts.filter((function(e){return e.id!==n}))})})),Object(R.a)(ae,f.UPDATE_FILTER,(function(e,t){return Ee({},e,{filter:t.payload})})),Object(R.a)(ae,f.UPDATE_ERROR_MESSAGE,(function(e,t){return Ee({},e,{errorMessage:t.payload})})),ae)),be={key:"root",storage:se.a},de=Object(ce.a)(be,fe),Oe=Object(_.a)({reducer:de,middleware:[ue.a]}),he=Object(ce.b)(Oe);i.a.render(a.a.createElement(c.a,{store:Oe},a.a.createElement(l.a,{loading:null,persistor:he},a.a.createElement(ie,null))),document.getElementById("root"))},8:function(e,t,n){e.exports={FormContainer:"ContactForm_FormContainer__3O2YO",labelContainer:"ContactForm_labelContainer__3i399",inputForm:"ContactForm_inputForm__2XGjB",submitButton:"ContactForm_submitButton__3Yc72"}}},[[39,1,2]]]);
//# sourceMappingURL=main.699defb8.chunk.js.map