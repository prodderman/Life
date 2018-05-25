webpackJsonp([1],{"+4Yb":function(t,e,n){"use strict";var r=n("vCxL"),i=n("1n8/"),a=(n.n(i),n("6QlO")),o=n.n(a),u=n("2+lu"),c=(n.n(u),function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.b=o()("test-page"),e}return r.c(e,t),e.prototype.render=function(){var t=this.b;return i.createElement("div",{className:t()},i.createElement("h1",{className:t("title")()},"test"))},e}(i.PureComponent));e.a=c},"2+lu":function(t,e){},"3LLX":function(t,e){},"3X5z":function(t,e,n){"use strict";var r=n("vCxL"),i=n("1n8/"),a=(n.n(i),n("6QlO")),o=n.n(a),u=n("4eBB"),c=(n.n(u),n("akHQ")),s=n("Ganu"),l=n("CC/j"),p=(n.n(l),function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.b=o()("game-page"),e}return r.c(e,t),e.prototype.render=function(){var t=this.b,e=s.a;this.props.history;return i.createElement("div",{className:t()},i.createElement("h1",{className:t("title")()},"Game of Life"),i.createElement("div",{className:t("board")()},i.createElement(e,null)),i.createElement("div",{className:t("test-link")(),onClick:this.linkToTest},"Test Router Link"))},e.prototype.linkToTest=function(){this.props.history.push(c.a+"/test")},r.b([u.bind],e.prototype,"linkToTest",null),e}(i.PureComponent));e.a=p},"55+h":function(t,e,n){"use strict";var r=n("W+du"),i={width:40,height:30},a={edit:{grid:Object(r.b)(i),generations:0,gameStatus:{timerId:null,isRunning:!1},gridSize:i,gameSpeed:10}};e.a=a},"6n15":function(t,e,n){"use strict";var r=n("b9RH");n.d(e,"a",function(){return r.a})},"75oV":function(t,e,n){"use strict";function r(t){if(!t.board)throw new Error("Cannot find board feature state!");return t.board}function i(t){return r(t).edit.grid}function a(t){return r(t).edit.gameStatus}function o(t){return r(t).edit.generations}function u(t){return r(t).edit.gridSize}function c(t){return r(t).edit.gameSpeed}Object.defineProperty(e,"__esModule",{value:!0}),e.getFeatureState=r,e.getGrid=i,e.getGameStatus=a,e.getGenerations=o,e.getGridSize=u,e.getGameSpeed=c},"9Kgn":function(t,e,n){"use strict";n.d(e,"b",function(){return u});var r=n("PR7M"),i=(n.n(r),n("zF2A")),a=n.n(i),o=n("SYo8");n.d(e,"a",function(){return o.a});var u=new r.Container;a()(u).lazyInject},BWJO:function(t,e,n){"use strict";function r(t){function e(t){var e=t.reducers,n=t.sagas;if(!m)throw new Error("Cannot find store, while connecting module.");if(e){Object.keys(e).reduce(function(t,n){var r=e[n];return!p[n]&&r?(p[n]=r,!0):t||!1},!1)&&m.replaceReducer(Object(u.a)(p))}n&&n.forEach(function(t){!l.includes(t)&&f&&(f(t(g)),l.push(t))})}var n=[new c.a,new c.b];if(t)return i.a({},t,{modules:n});var r=[s.b],l=[],p={},d=Object(u.b)(),f=d.runSaga,m=d.store;o.b.bind(o.a.connectEntryToStore).toConstantValue(e);var g=Object(a.a)(m);return r.forEach(e),n.forEach(function(t){t.dependencies=g,t.store=m,t.getReduxEntry&&e(t.getReduxEntry())}),{modules:n,store:m}}var i=n("vCxL"),a=n("yMWN"),o=n("9Kgn"),u=n("hvuP"),c=n("R7Uq"),s=n("Ganu");e.a=r},"CC/j":function(t,e){},DUMq:function(t,e,n){"use strict";var r=n("VilR");n.d(e,"a",function(){return r.a})},FQtd:function(t,e,n){"use strict";var r=n("vCxL"),i=n("1n8/"),a=(n.n(i),n("6QlO")),o=(n.n(a),n("3LLX")),u=(n.n(o),a("button"),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.c(e,t),e.prototype.render=function(){var t=this.props,e=t.title,n=void 0===e?"button":e,r=t.handleClick;return i.createElement("button",{onClick:r,className:"button"},n)},e}(i.Component));e.a=u},Ganu:function(t,e,n){"use strict";var r=n("axYJ"),i=(n.n(r),n("g5N1")),a=n("DUMq");n.d(e,"a",function(){return a.a}),e.b=function(){return{reducers:{board:i.b}}}()},N3sO:function(t,e,n){"use strict";function r(t){var e=t.modules,n=t.store;return i.createElement(a.a,{store:n},i.createElement(o.a,null,Object(u.a)(e)))}var i=n("1n8/"),a=(n.n(i),n("jYI/")),o=n("obMO"),u=n("wtwB");e.a=r},PbW8:function(t,e,n){"use strict";var r=n("vCxL"),i=n("1n8/"),a=(n.n(i),n("akHQ")),o=n("zGGS"),u=n("obMO"),c=n("3X5z"),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.c(e,t),e.prototype.getRoutes=function(){return i.createElement(u.c,{key:"life",path:a.a+"/life",component:c.a})},e}(o.a);e.a=s},R7Uq:function(t,e,n){"use strict";var r=n("PbW8"),i=n("uVWx");n.d(e,"a",function(){return r.a}),n.d(e,"b",function(){return i.a})},SYo8:function(t,e,n){"use strict";var r={Store:Symbol("Store"),connectEntryToStore:Symbol("connectFeatureToStore")};e.a=r},TeG3:function(t,e){},VilR:function(t,e,n){"use strict";function r(t){return{grid:p.c.getGrid(t),gameStatus:p.c.getGameStatus(t),generations:p.c.getGenerations(t),gridSize:p.c.getGridSize(t),gameSpeed:p.c.getGameSpeed(t)}}function i(t){return Object(s.bindActionCreators)({toggleAlive:p.a.toggleAlive,makeRandomGrid:p.a.makeRandomGrid,tick:p.a.tick,startPlaying:p.a.startPlaying,stopPlaying:p.a.stopPlaying,clear:p.a.clear,resizeGrid:p.a.resizeGrid,changeSpeed:p.a.changeSpeed},t)}var a=n("vCxL"),o=n("1n8/"),u=(n.n(o),n("6QlO")),c=(n.n(u),n("jYI/")),s=n("fpuT"),l=n("4eBB"),p=(n.n(l),n("g5N1")),d=n("biDV"),f=n("FQtd"),m=n("y//s"),g=(n.n(m),u("board")),h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.c(e,t),e.prototype.render=function(){var t=this.props,e=t.grid,n=t.toggleAlive,r=t.tick,i=t.generations,a=t.gameStatus,u=t.gridSize,c=t.gameSpeed;return o.createElement("div",{className:g()},o.createElement("table",{className:g("grid")()},o.createElement("tbody",null,e.map(function(t,e){return o.createElement("tr",{key:e},t.map(function(t,r){var i=function(){return n({x:e,y:r})};return o.createElement(d.a,{key:r,alive:t.alive,newBorn:t.newBorn,handleClick:i})}))}))),o.createElement("div",{className:g("footer")()},o.createElement("div",{className:g("counter")()},"Generations: ",i),o.createElement("div",{className:g("controls")()},o.createElement("div",{className:g("button")()},o.createElement(f.a,{title:"Randomize",handleClick:this.randomGrid}),o.createElement(f.a,{title:"Clear",handleClick:this.clearGrid}),o.createElement(f.a,{title:a.isRunning?"Stop":"Start",handleClick:this.togglePlay}),o.createElement(f.a,{title:"Forward",handleClick:r})),o.createElement("div",{className:g("speed")()},"speed:",o.createElement("input",{type:"range",onChange:this.changeSpeed,defaultValue:""+c,min:"-1000",max:"0",step:"1"})),o.createElement("div",{className:g("size")()},o.createElement("input",{type:"number",defaultValue:""+u.width,onBlur:this.setGridWidth}),o.createElement("input",{type:"number",defaultValue:""+u.height,onBlur:this.setGridHeight})))))},e.prototype.changeSpeed=function(t){var e=Math.abs(parseInt(t.currentTarget.value,10));if(this.props.changeSpeed(e),this.props.gameStatus.isRunning){window.clearInterval(this.props.gameStatus.timerId);var n=window.setInterval(this.props.tick,this.props.gameSpeed);this.props.startPlaying(n)}},e.prototype.togglePlay=function(){if(this.props.gameStatus.isRunning)window.clearInterval(this.props.gameStatus.timerId),this.props.stopPlaying(this.props.gameStatus.timerId);else{var t=window.setInterval(this.props.tick,this.props.gameSpeed);this.props.startPlaying(t)}},e.prototype.clearGrid=function(){this.props.gameStatus.isRunning&&(window.clearInterval(this.props.gameStatus.timerId),this.props.stopPlaying(this.props.gameStatus.timerId)),this.props.clear(this.props.gridSize)},e.prototype.randomGrid=function(){this.props.makeRandomGrid(this.props.gridSize)},e.prototype.setGridWidth=function(t){this.props.gameStatus.isRunning&&(window.clearInterval(this.props.gameStatus.timerId),this.props.stopPlaying(this.props.gameStatus.timerId));var e={width:parseInt(t.currentTarget.value,10),height:this.props.gridSize.height};this.props.resizeGrid(e)},e.prototype.setGridHeight=function(t){this.props.gameStatus.isRunning&&(window.clearInterval(this.props.gameStatus.timerId),this.props.stopPlaying(this.props.gameStatus.timerId));var e={width:this.props.gridSize.width,height:parseInt(t.currentTarget.value,10)};this.props.resizeGrid(e)},a.b([l.bind],e.prototype,"changeSpeed",null),a.b([l.bind],e.prototype,"togglePlay",null),a.b([l.bind],e.prototype,"clearGrid",null),a.b([l.bind],e.prototype,"randomGrid",null),a.b([l.bind],e.prototype,"setGridWidth",null),a.b([l.bind],e.prototype,"setGridHeight",null),e}(o.Component);e.a=Object(c.b)(r,i)(h)},WklZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("l+3c");n.d(e,"tick",function(){return r.g}),n.d(e,"startPlaying",function(){return r.e}),n.d(e,"stopPlaying",function(){return r.f}),n.d(e,"toggleAlive",function(){return r.h}),n.d(e,"makeRandomGrid",function(){return r.c}),n.d(e,"clear",function(){return r.b}),n.d(e,"resizeGrid",function(){return r.d}),n.d(e,"changeSpeed",function(){return r.a})},akHQ:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="/Life"},axYJ:function(t,e){},b9RH:function(t,e,n){"use strict";var r=n("vCxL"),i=n("1n8/"),a=(n.n(i),n("6QlO")),o=n.n(a),u=n("hhkA"),c=(n.n(u),n("TeG3")),s=(n.n(c),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.c(e,t),e.prototype.render=function(){var t=o()("application"),e=this.props.children;return i.createElement("div",{className:t()},e)},e}(i.Component));e.a=s},biDV:function(t,e,n){"use strict";var r=n("vCxL"),i=n("1n8/"),a=(n.n(i),n("6QlO")),o=(n.n(a),n("gQFe")),u=(n.n(o),a("cell")),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.c(e,t),e.prototype.render=function(){var t=this.props,e=t.alive,n=t.newBorn,r=t.handleClick;return i.createElement("td",{onClick:r,className:u()+" "+(e?u({alive:!0}):"")+" "+(n?u({"new-born":!0})():"")})},e}(i.PureComponent);e.a=c},bqio:function(t,e,n){"use strict";var r=n("fpuT"),i=n("f0DR"),a=Object(r.combineReducers)({edit:i.a});e.a=a},f0DR:function(t,e,n){"use strict";function r(t,e){switch(void 0===t&&(t=l.a.edit.gameStatus),e.type){case"BOARD:PLAY":return{timerId:e.payload,isRunning:!0};case"BOARD:STOP":return{timerId:null,isRunning:!1};default:return t}}function i(t,e){switch(void 0===t&&(t=l.a.edit.generations),e.type){case"BOARD:TICK":return t+1;case"BOARD:CLEAR":case"BOARD:MAKE_RANDOM":return 0;default:return t}}function a(t,e){switch(void 0===t&&(t=l.a.edit.grid),e.type){case"BOARD:TOGGLE_ALIVE":var n=t.slice(0),r=n[e.payload.x][e.payload.y];return r.alive=!r.alive,r.newBorn=!r.newBorn,n;case"BOARD:MAKE_RANDOM":return Object(s.b)(e.payload,!0);case"BOARD:CLEAR":case"BOARD:RESIZE":return Object(s.b)(e.payload);case"BOARD:TICK":return Object(s.a)(t.slice(0));default:return t}}function o(t,e){switch(void 0===t&&(t=l.a.edit.gridSize),e.type){case"BOARD:RESIZE":return e.payload;default:return t}}function u(t,e){switch(void 0===t&&(t=l.a.edit.gameSpeed),e.type){case"BOARD:CHANGE_SPEED":return e.payload;default:return t}}var c=n("fpuT"),s=n("W+du"),l=n("55+h");e.a=Object(c.combineReducers)({grid:a,generations:i,gameStatus:r,gridSize:o,gameSpeed:u})},g5N1:function(t,e,n){"use strict";var r=n("bqio"),i=n("WklZ"),a=n("75oV");n.d(e,"b",function(){return r.a}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i})},gQFe:function(t,e){},gp7H:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("npqE"),i=(n.n(r),n("wllv")),a=(n.n(i),n("1n8/")),o=(n.n(a),n("NKHc")),u=(n.n(o),n("BWJO")),c=n("/aVi"),s=(n.n(c),n("N3sO")),l=Object(u.a)(),p=function(t){return o.render(a.createElement(c.AppContainer,null,t),document.getElementById("root"))};p(a.createElement(s.a,{modules:l.modules,store:l.store})),console.info("%cApp version: 0.0.1","background: #EBF5F8; color: gray; font-size: x-medium; border-radius: 5px; padding: 5px;")},hvuP:function(t,e,n){"use strict";function r(){var t=Object(o.a)(),e=[t],n=u.compose;return{store:Object(u.createStore)(function(t){return t},n(u.applyMiddleware.apply(void 0,e))),runSaga:t.run}}function i(t){return Object(s.a)([c.a,Object(u.combineReducers)(t)])}n.d(e,"a",function(){return i});var a=n("yP4S"),o=(n.n(a),n("pCRc")),u=n("fpuT"),c=n("TRx0"),s=n("CmXq");e.b=r},"l+3c":function(t,e,n){"use strict";function r(){return{type:"BOARD:TICK"}}function i(t){return{type:"BOARD:PLAY",payload:t}}function a(t){return{type:"BOARD:STOP",payload:t}}function o(t){return{type:"BOARD:TOGGLE_ALIVE",payload:t}}function u(t){return{type:"BOARD:MAKE_RANDOM",payload:t}}function c(t){return{type:"BOARD:CLEAR",payload:t}}function s(t){return{type:"BOARD:RESIZE",payload:t}}function l(t){return{type:"BOARD:CHANGE_SPEED",payload:t}}e.g=r,e.e=i,e.f=a,e.h=o,e.c=u,e.b=c,e.d=s,e.a=l},uVWx:function(t,e,n){"use strict";var r=n("vCxL"),i=n("1n8/"),a=(n.n(i),n("akHQ")),o=n("zGGS"),u=n("obMO"),c=n("+4Yb"),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.c(e,t),e.prototype.getRoutes=function(){return i.createElement(u.c,{key:"test",path:a.a+"/test",component:c.a})},e}(o.a);e.a=s},wtwB:function(t,e,n){"use strict";function r(t){return i.createElement(o.c,{path:a.a},i.createElement(u.a,null,i.createElement(o.d,null,t.map(function(t){return t.getRoutes?t.getRoutes():null}),i.createElement(o.b,{exact:!0,from:a.a,to:a.a+"/life"}))))}var i=n("1n8/"),a=(n.n(i),n("akHQ")),o=n("obMO"),u=n("6n15");e.a=r},"y//s":function(t,e){},yMWN:function(t,e,n){"use strict";function r(t){return{api:"without api"}}e.a=r}},["gp7H"]);