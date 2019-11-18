/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/debug/index.ts":
/*!***********************************!*\
  !*** ./src/config/debug/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(__webpack_require__(/*! chalk */ "chalk"));
const debug_1 = __importDefault(__webpack_require__(/*! debug */ "debug"));
const appName = 'beautyfool';
const namespaceCreator = (namespaceName) => (name) => namespaceName + ':' + name;
const namespace = namespaceCreator(appName);
const debugs = {
    appName: appName,
    chalk: chalk_1.default,
    // will send debug messages related to the server
    server: debug_1.default(namespace('server')),
    // will send debug messages related to mongoose
    mongoose: debug_1.default(namespace('mongoose')),
    socket: {
        // will send debug messages related to the socket listeners
        on: debug_1.default(namespace('socket:on')),
        // will send debug messages related to the socket emitters
        emit: debug_1.default(namespace('socket:emit')),
    },
};
exports.debug = debugs;


/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./mongoose */ "./src/config/mongoose.ts");
__webpack_require__(/*! ./server */ "./src/config/server.ts");
__webpack_require__(/*! ./socket */ "./src/config/socket.ts");


/***/ }),

/***/ "./src/config/mongoose.ts":
/*!********************************!*\
  !*** ./src/config/mongoose.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const chalk_1 = __importDefault(__webpack_require__(/*! chalk */ "chalk"));
const debug_1 = __webpack_require__(/*! ./debug */ "./src/config/debug/index.ts");
// ': string' is the type of the constant, since `mongoose.connect` only takes a string
// as first parameter and the environment variables are of type `string | undefined` we need a default string in case
// the environment variable `MONGO_URI` is undefined
const mongoUri = "mongodb://admin:admin91@ds031329.mlab.com:31329/beautyfool" || false;
// make the connection to the DB
mongoose_1.default.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true // use the unified topology since the old one is deprecated and will be removed in a future version
})
    .then(() => debug_1.debug.mongoose(chalk_1.default.green('MongoDB started')))
    .catch(err => {
    console.error(chalk_1.default.red(`MongoDB connection error: ${err}`));
    // exit the process because of an error
    process.exit(1);
});
// set `useFindAndModify` to false because it is deprecated and will be removed in a future version
mongoose_1.default.set('useFindAndModify', false);
// `useCreateIndex` is recommanded
mongoose_1.default.set('useCreateIndex', true);


/***/ }),

/***/ "./src/config/server.ts":
/*!******************************!*\
  !*** ./src/config/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const http_1 = __importDefault(__webpack_require__(/*! http */ "http"));
const debug_1 = __webpack_require__(/*! ./debug */ "./src/config/debug/index.ts");
const port = 8000;
exports.port = port;
// create an app express to handle the http server
const app = express_1.default();
exports.app = app;
const server = new http_1.default.Server(app);
exports.server = server;
// make the server listen on a specific port
server.listen(port, () => debug_1.debug.server(`Http server listening on port ${port}`));
;


/***/ }),

/***/ "./src/config/socket.ts":
/*!******************************!*\
  !*** ./src/config/socket.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(__webpack_require__(/*! socket.io */ "socket.io"));
const server_1 = __webpack_require__(/*! ./server */ "./src/config/server.ts");
// link the server with the client
exports.io = socket_io_1.default(server_1.server);


/***/ }),

/***/ "./src/express/index.ts":
/*!******************************!*\
  !*** ./src/express/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./middlewares */ "./src/express/middlewares/index.ts");
__webpack_require__(/*! ./router */ "./src/express/router/index.ts");


/***/ }),

/***/ "./src/express/middlewares/headers.ts":
/*!********************************************!*\
  !*** ./src/express/middlewares/headers.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __webpack_require__(/*! ../../config/server */ "./src/config/server.ts");
// this middleware will be called for each request to the server to define these http headers
server_1.app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


/***/ }),

/***/ "./src/express/middlewares/helmet.ts":
/*!*******************************************!*\
  !*** ./src/express/middlewares/helmet.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = __importDefault(__webpack_require__(/*! helmet */ "helmet"));
const server_1 = __webpack_require__(/*! ../../config/server */ "./src/config/server.ts");
server_1.app.use(helmet_1.default());


/***/ }),

/***/ "./src/express/middlewares/index.ts":
/*!******************************************!*\
  !*** ./src/express/middlewares/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./headers */ "./src/express/middlewares/headers.ts");
__webpack_require__(/*! ./helmet */ "./src/express/middlewares/helmet.ts");


/***/ }),

/***/ "./src/express/router/index.ts":
/*!*************************************!*\
  !*** ./src/express/router/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./staticFiles */ "./src/express/router/staticFiles.ts");


/***/ }),

/***/ "./src/express/router/staticFiles.ts":
/*!*******************************************!*\
  !*** ./src/express/router/staticFiles.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const server_1 = __webpack_require__(/*! ../../config/server */ "./src/config/server.ts");
const build = express_1.default.static('../front/build');
server_1.app.use('/', build);
server_1.app.use('*', build);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./config */ "./src/config/index.ts");
__webpack_require__(/*! ./express */ "./src/express/index.ts");


/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map