webpackJsonp([1,2],{221:function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e){if(Array.isArray(e)){for(var t=0,l=Array(e.length);t<e.length;t++)l[t]=e[t];return l}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},c=function(){function e(e,t){for(var l=0;l<t.length;l++){var r=t[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,l,r){return l&&e(t.prototype,l),r&&e(t,r),t}}(),d=l(0),f=r(d),m=l(130),p=l(132),g=l(131),h=r(g),b=l(242),v=l(240),y=r(v),E=function(e){function t(){var e,l,r,n;o(this,t);for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];return l=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={url:{longUrl:"",error:!1,valid:!1,loading:!1},list:{data:[],error:!1,loading:!1,loadingDots:[]},urlSubmit:!1,copied:!1},r._handleSubmit=function(e){return e.preventDefault(),r.setState({url:s({},r.state.url,{loading:!0})}),(0,p.isURL)(r.state.url.longUrl)?setTimeout(function(){r.props.submitLink(r.state.url.longUrl).then(function(e){r.setState({urlSubmit:!0,url:s({},r.state.url,{longUrl:"http://shneed.com/"+e.data.url.shortUrl,loading:!1,valid:!0})})},function(){return r.setState({url:s({},r.state.url,{error:!0,loading:!1})})})},1e3):r.setState({url:s({},r.state.url,{error:!0}),urlSubmit:!0})},r._handleChange=function(e){r.setState({url:s({},r.state.url,{longUrl:e.target.value})})},r._checkUrlState=function(){if(r.state.url.error)return"error"},r._handleReset=function(){return r.setState({urlSubmit:!1,url:s({},r.state.url,{error:!1,longUrl:"",valid:!1}),copied:!1})},r._handleCopy=function(){r.setState({copied:!0}),setTimeout(function(){r.setState({copied:!1})},1250)},r._checkButtonText=function(e,t){return e?"Error":t?f.default.createElement("span",{className:"glyphicon glyphicon-refresh",id:"loading-spinner"}):"ShortNeed"},n=l,u(r,n)}return i(t,e),c(t,[{key:"componentWillMount",value:function(){var e=this;return this.setState({list:s({},this.state.list,{loading:!0})}),this.int=setInterval(function(){3===e.state.list.loadingDots.length&&e.setState({list:s({},e.state.list,{loadingDots:[]})}),e.setState({list:s({},e.state.list,{loadingDots:[].concat(a(e.state.list.loadingDots),["."])})})},300),setTimeout(function(){e.props.get5Recents().then(function(t){e.setState({list:s({},e.state.list,{data:t.data.urls,loading:!1,loadingDots:[]})}),clearInterval(e.int)},function(){return e.setState({list:s({},e.state.list,{error:!0,loading:!1})})})},1e3)}},{key:"render",value:function(){var e=this.state,t=e.url,l=e.urlSubmit,r=e.copied,a=e.list;return f.default.createElement("div",{className:"container input-wrapper"},f.default.createElement("div",{className:"row"},f.default.createElement("div",{className:"col-xs-12 col-sm-12 col-md-8 col-md-offset-2"},f.default.createElement("form",{onSubmit:this._handleSubmit},f.default.createElement(m.FormGroup,{validationState:this._checkUrlState(),bsSize:"lg"},t.error&&f.default.createElement(m.ControlLabel,null,"Url not valid, try again!"),f.default.createElement(m.InputGroup,null,f.default.createElement(m.FormControl,{disabled:l,value:t.longUrl,onChange:this._handleChange,type:"text",placeholder:"Paste your url..."}),t.valid?f.default.createElement(h.default,{text:this.state.url.longUrl,onCopy:this._handleCopy},f.default.createElement(m.InputGroup.Button,null,f.default.createElement(m.Button,{bsStyle:"success",bsSize:"lg"},"Copy"),r&&f.default.createElement(m.Tooltip,{placement:"bottom",className:"in",id:"tooltip-bottom"},"Copied"))):f.default.createElement(m.InputGroup.Button,null,f.default.createElement(m.Button,n({type:"submit",disabled:t.loading,bsStyle:t.error?"danger":"primary",bsSize:"lg"},"disabled",0===t.longUrl.length||t.error),this._checkButtonText(t.error,t.loading))))))),l&&f.default.createElement("div",{className:"col-xs-12 col-sm-12 col-md-8 col-md-offset-2 text-center"},f.default.createElement(m.Button,{bsSize:"lg",onClick:this._handleReset,bsStyle:"warning"},"Reset")),f.default.createElement(y.default,a)))}}]),t}(d.Component);E.defaultProps={get5Recents:b.get5Recents,submitLink:b.submitLink},t.default=E},222:function(e,t){},240:function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(0),a=r(n),o=function(e){var t=e.data,l=e.loading,r=e.loadingDots,n=e.error;return a.default.createElement("div",{className:"col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",id:"list-urls"},a.default.createElement("hr",null),a.default.createElement("h5",{className:"text-center"},"Last 5 ShortNeed urls."),a.default.createElement("br",null),l?a.default.createElement("h1",{className:"text-center"},"Loading",r):a.default.createElement("div",null,n?a.default.createElement("div",{className:"alert alert-danger",role:"alert"},"Something wrong happen! Plz Refresh!"):a.default.createElement("ul",{className:"list-group"},t.map(function(e,t){return a.default.createElement("a",{href:e.shortUrl,className:"list-group-item",key:t},a.default.createElement("div",{className:"row"},a.default.createElement("div",{className:"col-md-11"},e.longUrl),a.default.createElement("div",{className:"col-md-1"},e.visits," ",a.default.createElement("i",{className:"fa fa-line-chart"}))))}))))};t.default=o},241:function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.submitLink=t.get5Recents=void 0;var n=l(129),a=r(n);a.default.defaults.baseURL="/api/v1";t.get5Recents=function(){return a.default.get("/get5Recents")},t.submitLink=function(e){return a.default.post("/shorten",{longUrl:e})}},242:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(241);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},516:function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var n=l(0),a=r(n),o=l(16),u=l(221),i=r(u);l(222),(0,o.render)(a.default.createElement(i.default,null),document.getElementById("app"))}},[516]);