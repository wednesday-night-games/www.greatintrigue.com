(self.webpackChunkwww_greatintrigue_com=self.webpackChunkwww_greatintrigue_com||[]).push([[678],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r},e.exports.__esModule=!0,e.exports.default=e.exports},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},3913:function(e){function t(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},9754:function(e){function t(a){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(a)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},2205:function(e,t,a){var r=a(9489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},3884:function(e){e.exports=function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,o=[],l=!0,s=!1;try{for(a=a.call(e);!(l=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(c){s=!0,n=c}finally{try{l||null==a.return||a.return()}finally{if(s)throw n}}return o}},e.exports.__esModule=!0,e.exports.default=e.exports},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},8585:function(e,t,a){var r=a(8).default,n=a(1506);e.exports=function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3038:function(e,t,a){var r=a(2858),n=a(3884),o=a(379),l=a(521);e.exports=function(e,t){return r(e)||n(e,t)||o(e,t)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},8:function(e){function t(a){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(a)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,a){var r=a(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},9726:function(e,t,a){"use strict";var r=a(5318),n=r(a(8)),o=r(a(4575)),l=r(a(3913)),s=r(a(1506)),c=r(a(2205)),i=r(a(8585)),u=r(a(9754));function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=(0,u.default)(e);if(t){var n=(0,u.default)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return(0,i.default)(this,a)}}var m=a(7294),p=a(3621).generateQuery,h=[],f=!1,v=function(e){(0,c.default)(a,e);var t=d(a);function a(e){var r;(0,o.default)(this,a),(r=t.call(this,e)).renderCaptcha=r.renderCaptcha.bind((0,s.default)(r)),r.resetCaptcha=r.resetCaptcha.bind((0,s.default)(r)),r.removeCaptcha=r.removeCaptcha.bind((0,s.default)(r)),r.isReady=r.isReady.bind((0,s.default)(r)),r.handleOnLoad=r.handleOnLoad.bind((0,s.default)(r)),r.handleSubmit=r.handleSubmit.bind((0,s.default)(r)),r.handleExpire=r.handleExpire.bind((0,s.default)(r)),r.handleError=r.handleError.bind((0,s.default)(r)),r.handleOpen=r.handleOpen.bind((0,s.default)(r)),r.handleClose=r.handleClose.bind((0,s.default)(r)),r.handleChallengeExpired=r.handleChallengeExpired.bind((0,s.default)(r));var n="undefined"!=typeof hcaptcha;return r.ref=m.createRef(),r.state={isApiReady:n,isRemoved:!1,elementId:e.id,captchaId:""},r}return(0,l.default)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.apihost,a=e.assethost,r=e.endpoint,n=e.host,o=e.imghost,l=e.languageOverride,s=e.reCaptchaCompat,c=e.reportapi,i=e.sentry,u=e.custom;this.state.isApiReady?this.renderCaptcha():(f||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f=!0,window.hcaptchaOnLoad=function(){h=h.filter((function(e){return e(),!1}))};var t=e.apihost||"https://js.hcaptcha.com";delete e.apihost;var a=document.createElement("script");a.src="".concat(t,"/1/api.js?render=explicit&onload=hcaptchaOnLoad"),a.async=!0;var r=p(e);a.src+=""!==r?"&".concat(r):"",document.head.appendChild(a)}({apihost:t,assethost:a,endpoint:r,hl:l,host:n,imghost:o,recaptchacompat:!1===s?"off":null,reportapi:c,sentry:i,custom:u}),h.push(this.handleOnLoad))}},{key:"componentWillUnmount",value:function(){var e=this.state.captchaId;this.isReady()&&(hcaptcha.reset(e),hcaptcha.remove(e))}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.isApiReady===t.isApiReady&&this.state.isRemoved===t.isRemoved}},{key:"componentDidUpdate",value:function(e){var t=this;["sitekey","size","theme","tabindex","languageOverride","endpoint"].every((function(a){return e[a]===t.props[a]}))||this.removeCaptcha((function(){t.renderCaptcha()}))}},{key:"renderCaptcha",value:function(e){if(this.state.isApiReady){var t=Object.assign({"open-callback":this.handleOpen,"close-callback":this.handleClose,"error-callback":this.handleError,"chalexpired-callback":this.handleChallengeExpired,"expired-callback":this.handleExpire,callback:this.handleSubmit},this.props,{hl:this.props.hl||this.props.languageOverride,languageOverride:void 0}),a=hcaptcha.render(this.ref.current,t);this.setState({isRemoved:!1,captchaId:a},(function(){e&&e()}))}}},{key:"resetCaptcha",value:function(){var e=this.state.captchaId;this.isReady()&&hcaptcha.reset(e)}},{key:"removeCaptcha",value:function(e){var t=this.state.captchaId;this.isReady()&&this.setState({isRemoved:!0},(function(){hcaptcha.remove(t),e&&e()}))}},{key:"handleOnLoad",value:function(){var e=this;this.setState({isApiReady:!0},(function(){e.renderCaptcha((function(){var t=e.props.onLoad;t&&t()}))}))}},{key:"handleSubmit",value:function(e){var t=this.props.onVerify,a=this.state,r=a.isRemoved,n=a.captchaId;"undefined"==typeof hcaptcha||r||t(hcaptcha.getResponse(n),hcaptcha.getRespKey(n))}},{key:"handleExpire",value:function(){var e=this.props.onExpire,t=this.state.captchaId;this.isReady()&&(hcaptcha.reset(t),e&&e())}},{key:"handleError",value:function(e){var t=this.props.onError,a=this.state.captchaId;this.isReady()&&(hcaptcha.reset(a),t&&t(e))}},{key:"isReady",value:function(){var e=this.state,t=e.isApiReady,a=e.isRemoved;return t&&!a}},{key:"handleOpen",value:function(){this.isReady()&&this.props.onOpen&&this.props.onOpen()}},{key:"handleClose",value:function(){this.isReady()&&this.props.onClose&&this.props.onClose()}},{key:"handleChallengeExpired",value:function(){this.isReady()&&this.props.onChalExpired&&this.props.onChalExpired()}},{key:"execute",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.state.captchaId;if(this.isReady())return e&&"object"!==(0,n.default)(e)&&(e=null),hcaptcha.execute(t,e)}},{key:"render",value:function(){var e=this.state.elementId;return m.createElement("div",{ref:this.ref,id:e})}}]),a}(m.Component);e.exports=v},3621:function(e,t,a){"use strict";var r=a(5318)(a(3038));e.exports={generateQuery:function(e){return Object.entries(e).filter((function(e){var t=(0,r.default)(e,2),a=(t[0],t[1]);return a||!1===a})).map((function(e){var t=(0,r.default)(e,2),a=t[0],n=t[1];return"".concat(encodeURIComponent(a),"=").concat(encodeURIComponent(n))})).join("&")}}},3426:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var r=a(7294),n=a(5414),o=a(5116),l=a.p+"static/great-intrigue-banner-f0fb77e7a49c80a2f43e2b5b77ef5dce.png",s=a.p+"static/lava-llama-nyc-screenshot-1e7a731f42236fb690bf1af96aaba15c.png",c=a.p+"static/lava-llama-website-screenshot-42ccf3645d2bf6c1891ceb3d4f5c8024.png",i=a.p+"static/great-intrigue-logo-a1aa9ac884e4d6e9c20b377a204bf1ce.png",u=a(9726),d=a.n(u);function m(e){var t=e.source,a=(0,r.useState)([]),n=a[0],o=a[1],l=(0,r.useState)(""),s=l[0],c=l[1],i=(0,r.useState)(""),u=i[0],m=i[1],p=(0,r.useState)(""),h=p[0],f=p[1],v=(0,r.useState)(),y=v[0],g=v[1],b=(0,r.useState)(!1),E=b[0],x=b[1],w=(0,r.useState)(!1),N=w[0],C=w[1];return r.createElement("form",{id:"contact-form"},r.createElement("div",{className:"p-3 border bg-light"},r.createElement("div",{className:"mb-3"},r.createElement("label",{htmlFor:"contact-name",className:"form-label"},"Name"),r.createElement("input",{type:"text",onChange:function(e){return c(e.target.value)},className:"form-control",id:"contact-name","aria-describedby":"contact-form",placeholder:"Enter name"})),r.createElement("div",{className:"mb-3"},r.createElement("label",{htmlFor:"contact-email",className:"form-label"},"Email address"),r.createElement("input",{type:"email",onChange:function(e){return m(e.target.value)},className:"form-control",id:"contact-email","aria-describedby":"contact-form",placeholder:"Enter email"})),r.createElement("div",{className:"mb-3"},r.createElement("label",{htmlFor:"contact-message",className:"form-label"},"Message"),r.createElement("textarea",{onChange:function(e){return f(e.target.value)},className:"form-control",id:"contact-message",rows:"3"})),n.length>0&&r.createElement("div",{id:"contact-error-message",className:"alert alert-danger mt-2 mb-3"},r.createElement("p",null,"Please correct the following errors and submit the form again:"),r.createElement("ul",{className:"mb-0"},n.map((function(e){return r.createElement("li",{key:e},e)})))),N?r.createElement("div",{id:"contact-thank-you-for-message",className:"mt-3"},"Thank you for your message!"):r.createElement(r.Fragment,null,r.createElement(d(),{sitekey:"405bf2cb-db4a-4aad-8821-4576f8b365b6",onVerify:function(e,t){g(e),o([])},onLoad:function(){["g-recaptcha-response","h-captcha-response"].forEach((function(e){var t=document.querySelector('textarea[name="'+e+'"]');if(t){var a=document.createElement("label");a.htmlFor=t.id,a.innerText=e,a.style.display="none",t.parentNode.insertBefore(a,t)}}))}}),r.createElement("button",{onClick:function(e,a){e.preventDefault();var r=function(){var e=[];return""===s&&e.push("Name is required."),""===u?e.push("Email address is required."):(null===u.match(/^(.+)@[a-z0-9.]+\.[a-z0-9]+$/)||u.length>100)&&e.push("Invalid email address."),""===h&&e.push("Message is required."),y||e.push("Captcha is required."),e}();r.length>0?o(r):(o([]),x(!0),fetch("https://services.ejdigitalmedia.com/contact",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({source:t,name:s,email:u,message:h,"g-recaptcha-response":y})}).then((function(e){return e.json()})).then((function(e){x(!1),e.success?C(!0):o(e.errors)})))},type:"submit",className:"btn btn-primary float-end",disabled:E},E?"Submitting...":"Submit")),r.createElement("div",{className:"clearfix"})))}var p=a(6832),h=a(5935),f=function(){return r.createElement(o.Z,null,r.createElement(n.Z,null,r.createElement("title",null,"Home - Great Intrigue")),r.createElement(h.Z,{anchorLinks:!0}),r.createElement("main",{id:"main-content"},r.createElement("h1",{className:"sr-only"},"Great Intrigue"),r.createElement("div",{id:"home-hero",className:"position-relative overflow-hidden text-center bg-light mb-3 mb-md-5"},r.createElement("img",{alt:"Great Intrigue Logo Banner",src:l,className:"w-100"})),r.createElement("div",{className:"container"},r.createElement("hr",{id:"games",className:"featurette-divider invisible my-5"}),r.createElement("div",{className:"row featurette py-3"},r.createElement("div",{className:"col-lg-7"},r.createElement("h2",{className:"featurette-heading"},"Games"),r.createElement("p",{className:"lead"},'...or more accurately, "game"! We have one game out right now, and that game is Lava Llama! Guide your llama to safety in this 8-bit runner game, jumping from platform to platform and avoiding various obstacles as you go. Check out ',r.createElement("a",{href:"https://www.lavallama.com/"},"www.lavallama.com")," for more info!")),r.createElement("div",{className:"col-lg-5"},r.createElement("img",{className:"featurette-image img-fluid mx-auto img-thumbnail",src:s,alt:"Lava Llama game screenshot"}))),r.createElement("hr",{id:"news",className:"featurette-divider my-5"}),r.createElement("div",{className:"row featurette py-3"},r.createElement("div",{className:"col-lg-7"},r.createElement("h2",{className:"featurette-heading"},"News"),r.createElement("p",{className:"lead"},"Lava llama is available for iOS and Android! Check it out!",r.createElement("br",null),r.createElement("a",{href:"https://www.lavallama.com/"},"www.lavallama.com")),r.createElement("p",null,r.createElement("a",{className:"btn btn-primary mb-3 me-3",href:"https://itunes.apple.com/us/app/lava-llama/id1131968402"},"Download for iOS »"),r.createElement("a",{className:"btn btn-primary mb-3",href:"https://play.google.com/store/apps/details?id=com.wednesdaynightgames.lavallama"},"Download for Android »"))),r.createElement("div",{className:"col-lg-5"},r.createElement("img",{className:"featurette-image img-fluid mx-auto img-thumbnail",src:c,alt:"Lava llama website screenshot"}))),r.createElement("hr",{id:"about",className:"featurette-divider my-5"}),r.createElement("div",{className:"row featurette py-3"},r.createElement("div",{className:"col-lg-7"},r.createElement("h2",{className:"featurette-heading"},"About"),r.createElement("p",{className:"lead"},"Lava Llama was made by a team of friends who have a passion for developing games. They have been involved in a variety of game development projects including Lava Llama (available now for iOS and Android), The Adventures of Dude Man, and Project Shadow. Will they make more games in the future? Maybe! For now though, all effort is being channelled into improving and promoting Lava Llama.")),r.createElement("div",{className:"col-lg-5"},r.createElement("img",{className:"featurette-image img-fluid mx-auto img-thumbnail",src:i,alt:"Great Intrigue logo"}))),r.createElement("hr",{id:"contact",className:"featurette-divider my-5"}),r.createElement("div",{className:"row featurette py-3"},r.createElement("div",{className:"col-lg-7"},r.createElement("h2",{className:"featurette-heading"},"Contact"),r.createElement("p",{className:"lead"},"Feel free to send us questions and feedback!")),r.createElement("div",{className:"col-lg-5"},r.createElement(m,{source:"www.greatintrigue.com"}))))),r.createElement(p.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f6e7e9d88ce05103caf4.js.map