webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gp7H");


/***/ }),

/***/ "3LLX":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("gRL6");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/postcss-loader/index.js??ref--4-4!./Button.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/postcss-loader/index.js??ref--4-4!./Button.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "3X5z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_features_board__ = __webpack_require__("Ganu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_scss__ = __webpack_require__("CC/j");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_scss__);





var GameLayout = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](GameLayout, _super);
    function GameLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b = __WEBPACK_IMPORTED_MODULE_2_bem_cn___default()('game-page');
        return _this;
    }
    GameLayout.prototype.render = function () {
        var b = this.b;
        var Board = __WEBPACK_IMPORTED_MODULE_3_features_board__["a" /* board */];
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b() },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h1", { className: b('title')() }, "Game of Life"),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('board')() },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Board, null))));
    };
    return GameLayout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["a"] = (GameLayout);


/***/ }),

/***/ "55+h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_helpers_gridManipulation__ = __webpack_require__("W+du");

var gridSizesInit = {
    width: 50,
    height: 40,
};
var initialState = {
    edit: {
        grid: Object(__WEBPACK_IMPORTED_MODULE_0_shared_helpers_gridManipulation__["b" /* makeGrid */])(gridSizesInit),
        generations: 0,
        gameStatus: {
            timerId: null,
            isRunning: false,
        },
        gridSize: gridSizesInit,
    },
};
/* harmony default export */ __webpack_exports__["a"] = (initialState);


/***/ }),

/***/ "6n15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_App__ = __webpack_require__("b9RH");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__view_App__["a"]; });



/***/ }),

/***/ "75oV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getFeatureState"] = getFeatureState;
/* harmony export (immutable) */ __webpack_exports__["getGrid"] = getGrid;
/* harmony export (immutable) */ __webpack_exports__["getGameStatus"] = getGameStatus;
/* harmony export (immutable) */ __webpack_exports__["getGenerations"] = getGenerations;
/* harmony export (immutable) */ __webpack_exports__["getGridSize"] = getGridSize;
function getFeatureState(state) {
    if (!state.board) {
        throw new Error('Cannot find board feature state!');
    }
    return state.board;
}
function getGrid(state) {
    return getFeatureState(state).edit.grid;
}
function getGameStatus(state) {
    return getFeatureState(state).edit.gameStatus;
}
function getGenerations(state) {
    return getFeatureState(state).edit.generations;
}
function getGridSize(state) {
    return getFeatureState(state).edit.gridSize;
}


/***/ }),

/***/ "8aIC":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".application {\n  height: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "9Kgn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return container; });
/* unused harmony export inject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__("PR7M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators__ = __webpack_require__("zF2A");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iocTypes__ = __webpack_require__("SYo8");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__iocTypes__["a"]; });



var container = new __WEBPACK_IMPORTED_MODULE_0_inversify__["Container"]();
var lazyInject = __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators___default()(container).lazyInject;



/***/ }),

/***/ "BWJO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configureDeps__ = __webpack_require__("yMWN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configureIoc__ = __webpack_require__("9Kgn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configureStore__ = __webpack_require__("hvuP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_modules__ = __webpack_require__("R7Uq");





function configureApp(data) {
    /* Prepare main app elements */
    var modules = [new __WEBPACK_IMPORTED_MODULE_4_modules__["a" /* GameModule */]()];
    if (data) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, data, { modules: modules });
    }
    var sharedReduxEntries = [];
    var connectedSagas = [];
    var connectedReducers = {};
    var _a = Object(__WEBPACK_IMPORTED_MODULE_3__configureStore__["b" /* default */])(), runSaga = _a.runSaga, store = _a.store;
    __WEBPACK_IMPORTED_MODULE_2__configureIoc__["b" /* container */].bind(__WEBPACK_IMPORTED_MODULE_2__configureIoc__["a" /* TYPES */].connectEntryToStore).toConstantValue(connectEntryToStore);
    var dependencies = Object(__WEBPACK_IMPORTED_MODULE_1__configureDeps__["a" /* default */])(store);
    sharedReduxEntries.forEach(connectEntryToStore);
    modules.forEach(function (module) {
        module.dependencies = dependencies;
        module.store = store;
        if (module.getReduxEntry) {
            connectEntryToStore(module.getReduxEntry());
        }
    });
    function connectEntryToStore(_a) {
        var reducers = _a.reducers, sagas = _a.sagas;
        if (!store) {
            throw new Error('Cannot find store, while connecting module.');
        }
        if (reducers) {
            var keys = Object.keys(reducers);
            var isNeedReplace = keys.reduce(function (acc, key) {
                var featureReducer = reducers[key];
                if (!connectedReducers[key] && featureReducer) {
                    connectedReducers[key] = featureReducer;
                    return true;
                }
                return acc || false;
            }, false);
            if (isNeedReplace) {
                store.replaceReducer(Object(__WEBPACK_IMPORTED_MODULE_3__configureStore__["a" /* createReducer */])(connectedReducers));
            }
        }
        if (sagas) {
            sagas.forEach(function (saga) {
                if (!connectedSagas.includes(saga) && runSaga) {
                    runSaga(saga(dependencies));
                    connectedSagas.push(saga);
                }
            });
        }
    }
    return { modules: modules, store: store };
}
/* harmony default export */ __webpack_exports__["a"] = (configureApp);


/***/ }),

/***/ "CC/j":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cG3b");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/postcss-loader/index.js??ref--4-4!./Layout.scss", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/postcss-loader/index.js??ref--4-4!./Layout.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "DUMq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Board_Board__ = __webpack_require__("VilR");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Board_Board__["a"]; });



/***/ }),

/***/ "FQtd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button_scss__ = __webpack_require__("3LLX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Button_scss__);




var b = __WEBPACK_IMPORTED_MODULE_2_bem_cn__('button');
var Button = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, _b = _a.title, title = _b === void 0 ? 'button' : _b, handleClick = _a.handleClick;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("button", { onClick: handleClick, className: "button" }, title));
    };
    return Button;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Button);


/***/ }),

/***/ "Ganu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__("axYJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__namespace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux__ = __webpack_require__("g5N1");
/* unused harmony reexport namespace */
/* unused harmony reexport selectors */
/* unused harmony reexport actions */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__redux__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_containers__ = __webpack_require__("DUMq");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__view_containers__["a"]; });






/***/ }),

/***/ "N3sO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("jYI/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("obMO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("wtwB");




function App(_a) {
    var modules = _a.modules, store = _a.store;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */], { store: store },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["a" /* BrowserRouter */], null, Object(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* default */])(modules))));
}
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),

/***/ "PbW8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_constants__ = __webpack_require__("akHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_types_app__ = __webpack_require__("zGGS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__("obMO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_Layout_Layout__ = __webpack_require__("3X5z");






var GameModule = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](GameModule, _super);
    function GameModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameModule.prototype.getRoutes = function () {
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { key: "GameOfLife", path: __WEBPACK_IMPORTED_MODULE_2_core_constants__["a" /* ROUTES_PREFIX */] + "/GameOfLife", component: __WEBPACK_IMPORTED_MODULE_5__view_Layout_Layout__["a" /* default */] });
    };
    return GameModule;
}(__WEBPACK_IMPORTED_MODULE_3_shared_types_app__["a" /* Module */]));
/* harmony default export */ __webpack_exports__["a"] = (GameModule);


/***/ }),

/***/ "R7Uq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Game_Game__ = __webpack_require__("PbW8");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Game_Game__["a"]; });




/***/ }),

/***/ "SYo8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var TYPES = {
    Store: Symbol('Store'),
    connectEntryToStore: Symbol('connectFeatureToStore'),
};
/* harmony default export */ __webpack_exports__["a"] = (TYPES);


/***/ }),

/***/ "TeG3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8aIC");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/postcss-loader/index.js??ref--4-4!./styles.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/postcss-loader/index.js??ref--4-4!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "VilR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Board */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("jYI/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_decko__ = __webpack_require__("4eBB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_decko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_decko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux__ = __webpack_require__("g5N1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Cell_Cell__ = __webpack_require__("biDV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Button_Button__ = __webpack_require__("FQtd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Board_scss__ = __webpack_require__("y//s");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Board_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Board_scss__);










function mapState(state) {
    var grid = __WEBPACK_IMPORTED_MODULE_6__redux__["c" /* selectors */].getGrid(state);
    var gameStatus = __WEBPACK_IMPORTED_MODULE_6__redux__["c" /* selectors */].getGameStatus(state);
    var generations = __WEBPACK_IMPORTED_MODULE_6__redux__["c" /* selectors */].getGenerations(state);
    var gridSize = __WEBPACK_IMPORTED_MODULE_6__redux__["c" /* selectors */].getGridSize(state);
    return { grid: grid, gameStatus: gameStatus, generations: generations, gridSize: gridSize };
}
function mapDispatch(dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])({
        toggleAlive: __WEBPACK_IMPORTED_MODULE_6__redux__["a" /* actions */].toggleAlive,
        makeRandomGrid: __WEBPACK_IMPORTED_MODULE_6__redux__["a" /* actions */].makeRandomGrid,
        tick: __WEBPACK_IMPORTED_MODULE_6__redux__["a" /* actions */].tick,
        startPlaying: __WEBPACK_IMPORTED_MODULE_6__redux__["a" /* actions */].startPlaying,
        stopPlaying: __WEBPACK_IMPORTED_MODULE_6__redux__["a" /* actions */].stopPlaying,
        clear: __WEBPACK_IMPORTED_MODULE_6__redux__["a" /* actions */].clear,
        resizeGrid: __WEBPACK_IMPORTED_MODULE_6__redux__["a" /* actions */].resizeGrid,
    }, dispatch);
}
var b = __WEBPACK_IMPORTED_MODULE_2_bem_cn__('board');
var Board = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            timerSpeed: 200,
            minSpeed: 1,
            maxSpeed: 1000,
        };
        return _this;
    }
    Board.prototype.render = function () {
        var _a = this.props, grid = _a.grid, toggleAlive = _a.toggleAlive, makeRandomGrid = _a.makeRandomGrid, tick = _a.tick, generations = _a.generations, gameStatus = _a.gameStatus, gridSize = _a.gridSize;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b() },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("table", { className: b('grid')() },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("tbody", null, grid.map(function (row, i) {
                    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("tr", { key: i }, row.map(function (cell, j) {
                        var handleClick = function () { return toggleAlive({ x: i, y: j }); };
                        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__components_Cell_Cell__["a" /* default */], { key: j, alive: cell.alive, newBorn: cell.newBorn, handleClick: handleClick });
                    }));
                }))),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('footer')() },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('controls')() },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('button')() },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_Button_Button__["a" /* default */], { title: 'Randomize', handleClick: this.randomGrid }),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_Button_Button__["a" /* default */], { title: 'Clear', handleClick: this.clearGrid }),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_Button_Button__["a" /* default */], { title: gameStatus.isRunning ? 'Stop' : 'Start', handleClick: this.togglePlay }),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_Button_Button__["a" /* default */], { title: 'Forward', handleClick: tick })),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('speed')() },
                        "speed:",
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", { type: "range", onChange: this.changeSpeed, defaultValue: "" + (this.state.maxSpeed - this.state.timerSpeed + this.state.minSpeed), min: this.state.minSpeed, max: this.state.maxSpeed, step: "1" })),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('size')() },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", { type: "number", defaultValue: "" + gridSize.width, onBlur: this.setGridWidth }),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", { type: "number", defaultValue: "" + gridSize.height, onBlur: this.setGridHeight }))),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b('counter')() },
                    "Generations: ",
                    generations))));
    };
    Board.prototype.changeSpeed = function (event) {
        var minVal = parseInt(event.target.min, 10);
        var maxVal = parseInt(event.target.max, 10);
        var timerVal = maxVal - parseInt(event.target.value, 10) + minVal;
        this.setState({ timerSpeed: timerVal });
        if (this.props.gameStatus.isRunning) {
            window.clearInterval(this.props.gameStatus.timerId);
            var interval = window.setInterval(this.props.tick, timerVal);
            this.props.startPlaying(interval);
        }
    };
    Board.prototype.togglePlay = function () {
        if (this.props.gameStatus.isRunning) {
            window.clearInterval(this.props.gameStatus.timerId);
            this.props.stopPlaying(this.props.gameStatus.timerId);
        }
        else {
            var interval = window.setInterval(this.props.tick, this.state.timerSpeed);
            this.props.startPlaying(interval);
        }
    };
    Board.prototype.clearGrid = function () {
        if (this.props.gameStatus.isRunning) {
            window.clearInterval(this.props.gameStatus.timerId);
            this.props.stopPlaying(this.props.gameStatus.timerId);
        }
        this.props.clear(this.props.gridSize);
    };
    Board.prototype.randomGrid = function () {
        this.props.makeRandomGrid(this.props.gridSize);
    };
    Board.prototype.setGridWidth = function (event) {
        if (this.props.gameStatus.isRunning) {
            window.clearInterval(this.props.gameStatus.timerId);
            this.props.stopPlaying(this.props.gameStatus.timerId);
        }
        var newGridSize = {
            width: parseInt(event.currentTarget.value, 10),
            height: this.props.gridSize.height,
        };
        this.props.resizeGrid(newGridSize);
    };
    Board.prototype.setGridHeight = function (event) {
        if (this.props.gameStatus.isRunning) {
            window.clearInterval(this.props.gameStatus.timerId);
            this.props.stopPlaying(this.props.gameStatus.timerId);
        }
        var newGridSize = {
            width: this.props.gridSize.width,
            height: parseInt(event.currentTarget.value, 10),
        };
        this.props.resizeGrid(newGridSize);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_5_decko__["bind"]
    ], Board.prototype, "changeSpeed", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_5_decko__["bind"]
    ], Board.prototype, "togglePlay", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_5_decko__["bind"]
    ], Board.prototype, "clearGrid", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_5_decko__["bind"]
    ], Board.prototype, "randomGrid", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_5_decko__["bind"]
    ], Board.prototype, "setGridWidth", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_5_decko__["bind"]
    ], Board.prototype, "setGridHeight", null);
    return Board;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapState, mapDispatch)(Board));


/***/ }),

/***/ "WklZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit__ = __webpack_require__("l+3c");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return __WEBPACK_IMPORTED_MODULE_0__edit__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "startPlaying", function() { return __WEBPACK_IMPORTED_MODULE_0__edit__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stopPlaying", function() { return __WEBPACK_IMPORTED_MODULE_0__edit__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toggleAlive", function() { return __WEBPACK_IMPORTED_MODULE_0__edit__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "makeRandomGrid", function() { return __WEBPACK_IMPORTED_MODULE_0__edit__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return __WEBPACK_IMPORTED_MODULE_0__edit__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "resizeGrid", function() { return __WEBPACK_IMPORTED_MODULE_0__edit__["c"]; });



/***/ }),

/***/ "XPnu":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".board__grid {\n  margin: auto; }\n\n.board__controls {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.board__footer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n", ""]);

// exports


/***/ }),

/***/ "akHQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GITHUB_PACKAGE_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES_PREFIX; });
var GITHUB_PACKAGE_NAME = 'Life';
var ROUTES_PREFIX =  true ? '/' + GITHUB_PACKAGE_NAME : '';


/***/ }),

/***/ "axYJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "b9RH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_view_styles_base_scss__ = __webpack_require__("hhkA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_view_styles_base_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_shared_view_styles_base_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_scss__ = __webpack_require__("TeG3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_scss__);





var App = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var b = __WEBPACK_IMPORTED_MODULE_2_bem_cn___default()('application');
        var children = this.props.children;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: b() }, children));
    };
    return App;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),

/***/ "biDV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("vCxL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn__ = __webpack_require__("6QlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bem_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bem_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cell_scss__ = __webpack_require__("gQFe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cell_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Cell_scss__);




var b = __WEBPACK_IMPORTED_MODULE_2_bem_cn__('cell');
var Cell = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Cell, _super);
    function Cell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cell.prototype.render = function () {
        var _a = this.props, alive = _a.alive, newBorn = _a.newBorn, handleClick = _a.handleClick;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", { onClick: handleClick, className: b() + " " + (alive ? b({ alive: true }) : '') + " " + (newBorn ? b({ 'new-born': true })() : '') }));
    };
    return Cell;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["a"] = (Cell);


/***/ }),

/***/ "bqio":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__("f0DR");


var reducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
});
/* harmony default export */ __webpack_exports__["a"] = (reducer);


/***/ }),

/***/ "cG3b":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".game-page {\n  text-align: center; }\n  .game-page__board {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center; }\n", ""]);

// exports


/***/ }),

/***/ "f0DR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_helpers_gridManipulation__ = __webpack_require__("W+du");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initial__ = __webpack_require__("55+h");



function gameStatusReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_2__initial__["a" /* default */].edit.gameStatus; }
    switch (action.type) {
        case 'BOARD:PLAY':
            return {
                timerId: action.payload,
                isRunning: true,
            };
        case 'BOARD:STOP':
            return {
                timerId: null,
                isRunning: false,
            };
        default:
            return state;
    }
}
// tslint:disable-next-line:max-line-length
function generationCounterReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_2__initial__["a" /* default */].edit.generations; }
    switch (action.type) {
        case 'BOARD:TICK':
            return state + 1;
        case 'BOARD:CLEAR':
            return 0;
        case 'BOARD:MAKE_RANDOM':
            return 0;
        default:
            return state;
    }
}
function boardReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_2__initial__["a" /* default */].edit.grid; }
    switch (action.type) {
        case 'BOARD:TOGGLE_ALIVE':
            var board = state.slice(0);
            var cell = board[action.payload.x][action.payload.y];
            cell.alive = !cell.alive;
            cell.newBorn = !cell.newBorn;
            return board;
        case 'BOARD:MAKE_RANDOM':
            return Object(__WEBPACK_IMPORTED_MODULE_1_shared_helpers_gridManipulation__["b" /* makeGrid */])(action.payload, true);
        case 'BOARD:CLEAR':
            return Object(__WEBPACK_IMPORTED_MODULE_1_shared_helpers_gridManipulation__["b" /* makeGrid */])(action.payload);
        case 'BOARD:RESIZE':
            return Object(__WEBPACK_IMPORTED_MODULE_1_shared_helpers_gridManipulation__["b" /* makeGrid */])(action.payload);
        case 'BOARD:TICK':
            return Object(__WEBPACK_IMPORTED_MODULE_1_shared_helpers_gridManipulation__["a" /* advanceGrid */])(state.slice(0));
        default:
            return state;
    }
}
function gridSizeReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_2__initial__["a" /* default */].edit.gridSize; }
    switch (action.type) {
        case 'BOARD:RESIZE':
            var newGridSize = action.payload;
            return newGridSize;
        default:
            return state;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    grid: boardReducer,
    generations: generationCounterReducer,
    gameStatus: gameStatusReducer,
    gridSize: gridSizeReducer,
}));


/***/ }),

/***/ "g5N1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers__ = __webpack_require__("bqio");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("WklZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectors__ = __webpack_require__("75oV");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__selectors__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__; });






/***/ }),

/***/ "gQFe":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("skfj");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/postcss-loader/index.js??ref--4-4!./Cell.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/postcss-loader/index.js??ref--4-4!./Cell.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "gRL6":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".button {\n  display: inline-block;\n  margin-right: 0.4em;\n  padding: 0.3em 0.7em;\n  cursor: pointer;\n  color: #fff;\n  background-color: #db4500;\n  font-size: 0.9em;\n  font-weight: 400;\n  line-height: 1.5em; }\n  .button:hover {\n    background-color: #ff5b0f; }\n", ""]);

// exports


/***/ }),

/***/ "gp7H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata__ = __webpack_require__("npqE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_polyfill__ = __webpack_require__("wllv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__("NKHc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_configureApp__ = __webpack_require__("BWJO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_hot_loader__ = __webpack_require__("/aVi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_hot_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_hot_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_App__ = __webpack_require__("N3sO");







var version = '0.0.1';
var appData = Object(__WEBPACK_IMPORTED_MODULE_4_core_configureApp__["a" /* default */])();
var render = function (component) { return __WEBPACK_IMPORTED_MODULE_3_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_hot_loader__["AppContainer"], null, component), document.getElementById('root')); };
render(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_core_App__["a" /* default */], { modules: appData.modules, store: appData.store }));
if (false) {
    module.hot.accept(['./core/App', './core/configureApp'], function () {
        var nextConfigureApp = require('./core/configureApp').default;
        var NextApp = require('./core/App').default;
        appData = nextConfigureApp(appData);
        render(React.createElement(NextApp, { modules: appData.modules, store: appData.store }));
    });
}
/* tslint:disable */
console.info("%cApp version: " + version, 'background: #EBF5F8; color: gray; font-size: x-medium; border-radius: 5px; padding: 5px;');
/* tslint:enable */


/***/ }),

/***/ "hvuP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_devtools_extension__ = __webpack_require__("yP4S");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__("pCRc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("fpuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_helpers_redux_multiConnect__ = __webpack_require__("TRx0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shared_helpers_redux__ = __webpack_require__("CmXq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_features_board__ = __webpack_require__("Ganu");






function configureStore() {
    var sagaMiddleware = Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* default */])();
    var middlewares = [sagaMiddleware];
    var composeEnhancers =  true ? Object(__WEBPACK_IMPORTED_MODULE_0_redux_devtools_extension__["composeWithDevTools"])({}) : compose;
    var store = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"])(createReducer({ board: __WEBPACK_IMPORTED_MODULE_5_features_board__["b" /* reducer */] }), composeEnhancers(__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"].apply(void 0, middlewares)));
    return {
        store: store,
        runSaga: sagaMiddleware.run,
    };
}
function createReducer(reducers) {
    return Object(__WEBPACK_IMPORTED_MODULE_4_shared_helpers_redux__["a" /* composeReducers */])([
        __WEBPACK_IMPORTED_MODULE_3_shared_helpers_redux_multiConnect__["a" /* reducer */],
        Object(__WEBPACK_IMPORTED_MODULE_2_redux__["combineReducers"])(reducers),
    ]);
}

/* harmony default export */ __webpack_exports__["b"] = (configureStore);


/***/ }),

/***/ "l+3c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = tick;
/* harmony export (immutable) */ __webpack_exports__["d"] = startPlaying;
/* harmony export (immutable) */ __webpack_exports__["e"] = stopPlaying;
/* harmony export (immutable) */ __webpack_exports__["g"] = toggleAlive;
/* harmony export (immutable) */ __webpack_exports__["b"] = makeRandomGrid;
/* harmony export (immutable) */ __webpack_exports__["a"] = clear;
/* harmony export (immutable) */ __webpack_exports__["c"] = resizeGrid;
function tick() {
    return {
        type: 'BOARD:TICK',
    };
}
function startPlaying(payload) {
    return {
        type: 'BOARD:PLAY',
        payload: payload,
    };
}
function stopPlaying(payload) {
    return {
        type: 'BOARD:STOP',
        payload: payload,
    };
}
function toggleAlive(payload) {
    return {
        type: 'BOARD:TOGGLE_ALIVE',
        payload: payload,
    };
}
function makeRandomGrid(payload) {
    return {
        type: 'BOARD:MAKE_RANDOM',
        payload: payload,
    };
}
function clear(payload) {
    return {
        type: 'BOARD:CLEAR',
        payload: payload,
    };
}
function resizeGrid(payload) {
    return {
        type: 'BOARD:RESIZE',
        payload: payload,
    };
}


/***/ }),

/***/ "skfj":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")();
// imports


// module
exports.push([module.i, ".cell {\n  width: 1rem;\n  height: 1rem;\n  border: 1px solid #ddd; }\n  .cell:hover:not(.cell_alive):not(.cell_alive) {\n    background: #ddd; }\n  .cell_alive {\n    background-color: #ff5400; }\n  .cell_new-born {\n    background-color: #ffbf00; }\n", ""]);

// exports


/***/ }),

/***/ "wtwB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("1n8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_constants__ = __webpack_require__("akHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("obMO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_modules_App__ = __webpack_require__("6n15");




function getRoutes(modules) {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: __WEBPACK_IMPORTED_MODULE_1_core_constants__["a" /* ROUTES_PREFIX */] },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_modules_App__["a" /* App */], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Switch */], null,
                modules.map(function (module) { return module.getRoutes ? module.getRoutes() : null; }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Redirect */], { exact: true, from: __WEBPACK_IMPORTED_MODULE_1_core_constants__["a" /* ROUTES_PREFIX */], to: __WEBPACK_IMPORTED_MODULE_1_core_constants__["a" /* ROUTES_PREFIX */] + "/GameOfLife" })))));
}
/* harmony default export */ __webpack_exports__["a"] = (getRoutes);


/***/ }),

/***/ "y//s":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("XPnu");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/postcss-loader/index.js??ref--4-4!./Board.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js?importLoaders=1!../../../../../../node_modules/postcss-loader/index.js??ref--4-2!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/postcss-loader/index.js??ref--4-4!./Board.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "yMWN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureDeps;
// import Api from 'services/api/Api';
function configureDeps(store) {
    var api = 'without api'; // new Api('/api');
    return { api: api };
}


/***/ })

},[0]);
//# sourceMappingURL=app-be7ce8b1f7190451a925.bundle.js.map