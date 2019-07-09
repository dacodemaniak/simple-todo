/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_local_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/local-data-service */ "./src/services/local-data-service.ts");
/* harmony import */ var _controllers_todo_list_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/todo-list-controller */ "./src/controllers/todo-list-controller.ts");
/**
 * @name App
 * @abstract Point d'entrée dans l'application
 */



class App {
    run() {
        console.log('Hello TypeScript');
        /* Persister un todo
        const todo: TodoModel = new TodoModel();
        todo.title = 'Test';
        todo.begin = new Date();
        todo.end = new Date();
        todo.sensibility = 0;
        todo.detail = 'Description du todo';*/
        const service = new _services_local_data_service__WEBPACK_IMPORTED_MODULE_1__["LocalDataService"]();
        // Instancier le contrôleur de la liste des todos
        const todoListController = new _controllers_todo_list_controller__WEBPACK_IMPORTED_MODULE_2__["TodoListController"](service);
    }
}
jquery__WEBPACK_IMPORTED_MODULE_0__(document).ready(() => {
    const app = new App();
    app.run();
});


/***/ }),

/***/ "./src/controllers/todo-list-controller.ts":
/*!*************************************************!*\
  !*** ./src/controllers/todo-list-controller.ts ***!
  \*************************************************/
/*! exports provided: TodoListController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListController", function() { return TodoListController; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/todo-model */ "./src/models/todo-model.ts");


/**
 * @name TodoListController
 * @abstract Gère l'affichage de la liste des todos
 */
class TodoListController {
    constructor(localDataService) {
        this._service = localDataService;
        // Invoke private method
        this._setTodosNumber();
        this._hydrateTable();
    }
    _setTodosNumber() {
        const placeholder = jquery__WEBPACK_IMPORTED_MODULE_0__('#todos-number');
        placeholder.html(this._service.getSize().toString());
    }
    _hydrateTable() {
        const todos = this._service.get();
        console.log('Todos : ', JSON.stringify(todos));
        if (this._service.getSize() > 0) {
            // Récupérer l'instance de "tbody" du DOM
            const tbody = jquery__WEBPACK_IMPORTED_MODULE_0__('tbody');
            todos.forEach((data) => {
                let todo = new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__["TodoModel"]().deserialize(data);
                let _row = jquery__WEBPACK_IMPORTED_MODULE_0__('<tr>'); // Instance d'un TR dans le DOM
                console.log('ID : ', todo.title);
                let _idTD = jquery__WEBPACK_IMPORTED_MODULE_0__('<td>'); // Instance d'un TD dans le DOM
                _idTD.html(todo.id.toString());
                _idTD.appendTo(_row); // Ajoute le noeud TD enfant dans le TR
                let _titleTD = jquery__WEBPACK_IMPORTED_MODULE_0__('<td>');
                _titleTD.html(todo.title).appendTo(_row);
                jquery__WEBPACK_IMPORTED_MODULE_0__('<td>').html(todo.begin.toString()).appendTo(_row);
                jquery__WEBPACK_IMPORTED_MODULE_0__('<td>').html(todo.end.toString()).appendTo(_row);
                jquery__WEBPACK_IMPORTED_MODULE_0__('<td>').html('').appendTo(_row);
                // Add row to HTML content
                tbody.append(_row);
            });
        }
    }
}


/***/ }),

/***/ "./src/models/todo-model.ts":
/*!**********************************!*\
  !*** ./src/models/todo-model.ts ***!
  \**********************************/
/*! exports provided: TodoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModel", function() { return TodoModel; });
/**
 * @name TodoModel
 * @abstract Modèle des Todos de l'application
 */
class TodoModel {
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get begin() {
        return this._begin;
    }
    set begin(value) {
        this._begin = value;
    }
    get end() {
        return this._end;
    }
    set end(value) {
        this._end = value;
    }
    get sensibility() {
        return this._sensibility;
    }
    set sensibility(value) {
        this._sensibility = value;
    }
    get detail() {
        return this._detail;
    }
    set detail(value) {
        this._detail = value;
    }
    deserialize(data) {
        Object.assign(this, data);
        return this;
    }
}


/***/ }),

/***/ "./src/services/local-data-service.ts":
/*!********************************************!*\
  !*** ./src/services/local-data-service.ts ***!
  \********************************************/
/*! exports provided: LocalDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDataService", function() { return LocalDataService; });
/**
 * @name LocalDataService
 * @abstract Service de presistance locale LocalStorage
 */
class LocalDataService {
    get() {
        if (localStorage.getItem('todos')) {
            const todos = JSON.parse(localStorage.getItem('todos'));
            return todos;
        }
    }
    set(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    getSize() {
        if (localStorage.getItem('todos')) {
            return JSON.parse(localStorage.getItem('todos')).length;
        }
        return 0;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map