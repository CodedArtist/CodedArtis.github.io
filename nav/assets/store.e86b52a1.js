import{i as t,j as e}from"./index.6f9f6b42.js";
/*!
 * vuex v4.0.0
 * (c) 2021 Evan You
 * @license MIT
 */var o=("undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function n(t,e){Object.keys(t).forEach((function(o){return e(t[o],o)}))}var i=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var o=t.state;this.state=("function"==typeof o?o():o)||{}},r={namespaced:{configurable:!0}};r.namespaced.get=function(){return!!this._rawModule.namespaced},i.prototype.addChild=function(t,e){this._children[t]=e},i.prototype.removeChild=function(t){delete this._children[t]},i.prototype.getChild=function(t){return this._children[t]},i.prototype.hasChild=function(t){return t in this._children},i.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},i.prototype.forEachChild=function(t){n(this._children,t)},i.prototype.forEachGetter=function(t){this._rawModule.getters&&n(this._rawModule.getters,t)},i.prototype.forEachAction=function(t){this._rawModule.actions&&n(this._rawModule.actions,t)},i.prototype.forEachMutation=function(t){this._rawModule.mutations&&n(this._rawModule.mutations,t)},Object.defineProperties(i.prototype,r);var s=function(t){this.register([],t,!1)};function a(t,e,o){if(e.update(o),o.modules)for(var n in o.modules){if(!e.getChild(n))return;a(t.concat(n),e.getChild(n),o.modules[n])}}s.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},s.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,o){return t+((e=e.getChild(o)).namespaced?o+"/":"")}),"")},s.prototype.update=function(t){a([],this.root,t)},s.prototype.register=function(t,e,o){var r=this;void 0===o&&(o=!0);var s=new i(e,o);0===t.length?this.root=s:this.get(t.slice(0,-1)).addChild(t[t.length-1],s);e.modules&&n(e.modules,(function(e,n){r.register(t.concat(n),e,o)}))},s.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),o=t[t.length-1],n=e.getChild(o);n&&n.runtime&&e.removeChild(o)},s.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),o=t[t.length-1];return!!e&&e.hasChild(o)};var c=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new s(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null);var r=this,a=this.dispatch,c=this.commit;this.dispatch=function(t,e){return a.call(r,t,e)},this.commit=function(t,e,o){return c.call(r,t,e,o)},this.strict=i;var u=this._modules.root.state;p(this,u,[],this._modules.root),l(this,u),n.forEach((function(t){return t(e)})),(void 0===t.devtools||t.devtools)&&function(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}(this)},u={state:{configurable:!0}};function h(t,e,o){return e.indexOf(t)<0&&(o&&o.prepend?e.unshift(t):e.push(t)),function(){var o=e.indexOf(t);o>-1&&e.splice(o,1)}}function f(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var o=t.state;p(t,o,[],t._modules.root,!0),l(t,o,e)}function l(o,i,r){var s=o._state;o.getters={},o._makeLocalGettersCache=Object.create(null);var a=o._wrappedGetters,c={};n(a,(function(t,e){c[e]=function(t,e){return function(){return t(e)}}(t,o),Object.defineProperty(o.getters,e,{get:function(){return c[e]()},enumerable:!0})})),o._state=e({data:i}),o.strict&&function(e){t((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(o),s&&r&&o._withCommit((function(){s.data=null}))}function p(t,e,o,n,i){var r=!o.length,s=t._modules.getNamespace(o);if(n.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=n),!r&&!i){var a=d(e,o.slice(0,-1)),c=o[o.length-1];t._withCommit((function(){a[c]=n.state}))}var u=n.context=function(t,e,o){var n=""===e,i={dispatch:n?t.dispatch:function(o,n,i){var r=m(o,n,i),s=r.payload,a=r.options,c=r.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:n?t.commit:function(o,n,i){var r=m(o,n,i),s=r.payload,a=r.options,c=r.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:n?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var o={},n=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,n)===e){var r=i.slice(n);Object.defineProperty(o,r,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=o}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return d(t.state,o)}}}),i}(t,s,o);n.forEachMutation((function(e,o){!function(t,e,o,n){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){o.call(t,n.state,e)}))}(t,s+o,e,u)})),n.forEachAction((function(e,o){var n=e.root?o:s+o,i=e.handler||e;!function(t,e,o,n){(t._actions[e]||(t._actions[e]=[])).push((function(e){var i,r=o.call(t,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:t.getters,rootState:t.state},e);return(i=r)&&"function"==typeof i.then||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}(t,n,i,u)})),n.forEachGetter((function(e,o){!function(t,e,o,n){if(t._wrappedGetters[e])return;t._wrappedGetters[e]=function(t){return o(n.state,n.getters,t.state,t.getters)}}(t,s+o,e,u)})),n.forEachChild((function(n,r){p(t,e,o.concat(r),n,i)}))}function d(t,e){return e.reduce((function(t,e){return t[e]}),t)}function m(t,e,o){var n;return null!==(n=t)&&"object"==typeof n&&t.type&&(o=e,e=t,t=t.type),{type:t,payload:e,options:o}}c.prototype.install=function(t,e){t.provide(e||"store",this),t.config.globalProperties.$store=this},u.state.get=function(){return this._state.data},u.state.set=function(t){},c.prototype.commit=function(t,e,o){var n=this,i=m(t,e,o),r=i.type,s=i.payload,a={type:r,payload:s},c=this._mutations[r];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,n.state)})))},c.prototype.dispatch=function(t,e){var o=this,n=m(t,e),i=n.type,r=n.payload,s={type:i,payload:r},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,o.state)}))}catch(u){}var c=a.length>1?Promise.all(a.map((function(t){return t(r)}))):a[0](r);return new Promise((function(t,e){c.then((function(e){try{o._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,o.state)}))}catch(u){}t(e)}),(function(t){try{o._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,o.state,t)}))}catch(u){}e(t)}))}))}},c.prototype.subscribe=function(t,e){return h(t,this._subscribers,e)},c.prototype.subscribeAction=function(t,e){return h("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},c.prototype.watch=function(e,o,n){var i=this;return t((function(){return e(i.state,i.getters)}),o,Object.assign({},n))},c.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},c.prototype.registerModule=function(t,e,o){void 0===o&&(o={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),p(this,this.state,t,this._modules.get(t),o.preserveState),l(this,this.state)},c.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){delete d(e.state,t.slice(0,-1))[t[t.length-1]]})),f(this)},c.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},c.prototype.hotUpdate=function(t){this._modules.update(t),f(this,!0)},c.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(c.prototype,u);var _=new c({state:()=>({tags:null,bookmarks:null,database:null}),mutations:{setTags(t,e){t.tags=e},setBookmarks(t,e){t.bookmarks=e},setDatabase(t,e){t.database=e}}});export{_ as s};