/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\");\n\nconst headline = document.createElement('div');\nheadline.textContent = \"Contact\";\nheadline.classList.add('headline2');\n\nconst contactInfo = document.createElement('div');\ncontactInfo.classList.add('info-card')\n\ncontactInfo.innerHTML = `Restaurant Phone: <b>808-808-8080</b> <br>\n<b>Location</b>: Kalakaua Ave, Honolulu, HI, 96815`\n\nconst loadContact = () => {\n    content.appendChild(headline);\n    content.appendChild(contactInfo);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\");\n\nconst headline = document.createElement('div');\nconst phrase = document.createElement('div');\nconst alienPic = document.createElement('img');\n\nheadline.textContent = \"Wahine Restaurant\";\nheadline.classList.add('headline');\nphrase.textContent = 'We serve local grindz!'\nphrase.classList.add('phrase');\n\nconst loadHome = () => {\n    content.appendChild(headline);\n    content.appendChild(phrase);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst content = document.querySelector('div#content');\nconst tabDiv = document.createElement('div');\ntabDiv.classList.add('tabs');\n//insert at beginning of elements\ncontent.prepend(tabDiv);\n\nfunction newTab(tabText) {\n    const tab = document.createElement('button');\n    tab.textContent = tabText;\n    tab.id = tabText;\n    tab.addEventListener('click', () => {\n        content.replaceChildren(content.firstElementChild); //keep just tabs\n        if (tab.id === 'home') {\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        } else if (tab.id === 'menu') {\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        } else if (tab.id === 'contact') {\n            (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        }\n    })\n    tabDiv.appendChild(tab);\n};\n\nnewTab('home');\nnewTab('menu');\nnewTab('contact');\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//#content from index.html\nconst content = document.querySelector(\"#content\");\n//create element \nconst headline = document.createElement('div');\nheadline.textContent = \"Menu\";\nheadline.classList.add('headline3');\n\nconst menuDiv = document.createElement('div');\nmenuDiv.classList.add('menu');\n\n//function adds menu items and related icon\nfunction Food(name, price, desc) {\n    this.name = name;\n    this.price = `$${price}`;\n    this.desc = desc;\n    this.firstName = name.split(' ')[0].toLowerCase();\n    this.info = {'name': this.name, 'price': this.price, 'desc': this.desc};\n    this.append = function() {\n        const itemDiv = document.createElement('div');\n        const img = document.createElement('img');\n        itemDiv.classList.add('item');\n        img.id = `${this.firstName}`;\n        img.src = `images/${this.firstName}.png`;\n        img.alt = `${this.name}`;\n        itemDiv.appendChild(img);\n        for (const [key, value] of Object.entries(this.info)) {\n            const infoDiv = document.createElement('div');\n            infoDiv.classList.add(`item-${key}`);\n            infoDiv.textContent = `${value}`;\n            itemDiv.appendChild(infoDiv);\n        };\n        menuDiv.appendChild(itemDiv);\n    }\n}\n\nconst huli = new Food('Huli Huli Chicken', '29', '1/2 chicken, garlic, ginger, shoyu');\nconst cajun = new Food('Cajun Fish', '25', 'Flour tortillas, tomatillo sauce, pico de gallo, fresh tortilla chips');\nconst poke = new Food('Poke', '23', 'Fresh raw ahi, shoyu, maui onions, wasabi');\nconst filet = new Food('Filet Mignon', '54', 'Corn fed angus beef, dijon rubbed, maui onion jam');\nconst pono= new Food('Pono Pie', '12', 'Hawaiian breadfruit, passion fruit, macadamia nuts, strawberries');\n\nconst foodList = [huli, cajun, poke, filet, pono];\n\nfoodList.forEach(element => {\n    element.append();\n});\n\nconst loadMenu = () => {\n    content.appendChild(headline);\n    content.appendChild(menuDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;