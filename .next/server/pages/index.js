"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst MyPage = ({ metadata  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const redirectTimer = setTimeout(()=>{\n            router.push(\"http://localhost:19006/nft?type=nft&id=0xeb0c72328771ee802d2c052531478ecef755e39916\");\n        }, 0);\n        return ()=>clearTimeout(redirectTimer); // Limpia el temporizador al desmontar el componente\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    property: \"og:title\",\n                    content: metadata.title\n                }, void 0, false, {\n                    fileName: \"/Users/rodrigocrespo/Desktop/xo/repo/share-link/src/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    property: \"og:description\",\n                    content: metadata.description\n                }, void 0, false, {\n                    fileName: \"/Users/rodrigocrespo/Desktop/xo/repo/share-link/src/pages/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    property: \"og:image\",\n                    content: metadata.image\n                }, void 0, false, {\n                    fileName: \"/Users/rodrigocrespo/Desktop/xo/repo/share-link/src/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rodrigocrespo/Desktop/xo/repo/share-link/src/pages/index.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\nasync function getServerSideProps() {\n    // Realizar la solicitud HTTP al servidor para obtener los datos de las metadatas\n    // const response = await axios.get('https://api.example.com/metadata');\n    const response = {\n        description: \"Works of great realism, inspired by a dystopian Japanese anime\",\n        image: \"https://ipfs.io/ipfs/QmfQE6WQJjB5Z8mEJxVSVZjDYfgHVYZBUYzjRyX4fPck5U\",\n        title: \"Illustrations of Japan\"\n    };\n    // Extraer los datos de las metadatas de la respuesta\n    const metadata = response;\n    // Devolver los datos como prop para el componente\n    return {\n        props: {\n            metadata\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1c7QUFDTjtBQVNsQyxNQUFNRyxTQUFTLENBQUMsRUFBRUMsU0FBUSxFQUEwQixHQUFLO0lBQ3ZELE1BQU1DLFNBQVNKLHNEQUFTQTtJQUV4QkMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1JLGdCQUFnQkMsV0FBVyxJQUFNO1lBQ3JDRixPQUFPRyxJQUFJLENBQUM7UUFDZCxHQUFHO1FBRUgsT0FBTyxJQUFNQyxhQUFhSCxnQkFBZ0Isb0RBQW9EO0lBQ2hHLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNFLDRFQUFDTixrREFBSUE7OzhCQUNILDhEQUFDVTtvQkFBS0MsVUFBUztvQkFBV0MsU0FBU1IsU0FBU1MsS0FBSzs7Ozs7OzhCQUNqRCw4REFBQ0g7b0JBQUtDLFVBQVM7b0JBQWlCQyxTQUFTUixTQUFTVSxXQUFXOzs7Ozs7OEJBQzdELDhEQUFDSjtvQkFBS0MsVUFBUztvQkFBV0MsU0FBU1IsU0FBU1csS0FBSzs7Ozs7Ozs7Ozs7OztBQU16RDtBQUVPLGVBQWVDLHFCQUFxQjtJQUN6QyxpRkFBaUY7SUFDakYsd0VBQXdFO0lBQ3hFLE1BQU1DLFdBQVc7UUFDZkgsYUFBYTtRQUNiQyxPQUFPO1FBQ1BGLE9BQU87SUFDVDtJQUVBLHFEQUFxRDtJQUNyRCxNQUFNVCxXQUFxQmE7SUFFM0Isa0RBQWtEO0lBQ2xELE9BQU87UUFDTEMsT0FBTztZQUNMZDtRQUNGO0lBQ0Y7QUFDRixDQUFDO0FBRUQsaUVBQWVELE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLW5leHQtbW9uZ28vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIE1ldGFkYXRhIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgLy8gQWdyZWdhIG90cmFzIHByb3BpZWRhZGVzIGRlIG1ldGFkYXRhIHNpIGxhcyB0aWVuZXNcbn1cblxuY29uc3QgTXlQYWdlID0gKHsgbWV0YWRhdGEgfTogeyBtZXRhZGF0YTogTWV0YWRhdGEgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlZGlyZWN0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKCdodHRwOi8vbG9jYWxob3N0OjE5MDA2L25mdD90eXBlPW5mdCZpZD0weGViMGM3MjMyODc3MWVlODAyZDJjMDUyNTMxNDc4ZWNlZjc1NWUzOTkxNicpO1xuICAgIH0sIDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChyZWRpcmVjdFRpbWVyKTsgLy8gTGltcGlhIGVsIHRlbXBvcml6YWRvciBhbCBkZXNtb250YXIgZWwgY29tcG9uZW50ZVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXttZXRhZGF0YS50aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGFkYXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17bWV0YWRhdGEuaW1hZ2V9IC8+XG4gICAgICAgIHsvKiAuLi4gb3RyYXMgbWV0YWRhdGFzIHF1ZSBuZWNlc2l0ZXMgLi4uICovfVxuICAgICAgPC9IZWFkPlxuICAgICAgey8qIFJlc3RvIGRlbCBjb250ZW5pZG8gZGUgbGEgcMOhZ2luYSAqL31cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIC8vIFJlYWxpemFyIGxhIHNvbGljaXR1ZCBIVFRQIGFsIHNlcnZpZG9yIHBhcmEgb2J0ZW5lciBsb3MgZGF0b3MgZGUgbGFzIG1ldGFkYXRhc1xuICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkuZXhhbXBsZS5jb20vbWV0YWRhdGEnKTtcbiAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgZGVzY3JpcHRpb246IFwiV29ya3Mgb2YgZ3JlYXQgcmVhbGlzbSwgaW5zcGlyZWQgYnkgYSBkeXN0b3BpYW4gSmFwYW5lc2UgYW5pbWVcIixcbiAgICBpbWFnZTogXCJodHRwczovL2lwZnMuaW8vaXBmcy9RbWZRRTZXUUpqQjVaOG1FSnhWU1ZaakRZZmdIVllaQlVZempSeVg0ZlBjazVVXCIsXG4gICAgdGl0bGU6IFwiSWxsdXN0cmF0aW9ucyBvZiBKYXBhblwiXG4gIH1cblxuICAvLyBFeHRyYWVyIGxvcyBkYXRvcyBkZSBsYXMgbWV0YWRhdGFzIGRlIGxhIHJlc3B1ZXN0YVxuICBjb25zdCBtZXRhZGF0YTogTWV0YWRhdGEgPSByZXNwb25zZTtcblxuICAvLyBEZXZvbHZlciBsb3MgZGF0b3MgY29tbyBwcm9wIHBhcmEgZWwgY29tcG9uZW50ZVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZXRhZGF0YVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlQYWdlO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJNeVBhZ2UiLCJtZXRhZGF0YSIsInJvdXRlciIsInJlZGlyZWN0VGltZXIiLCJzZXRUaW1lb3V0IiwicHVzaCIsImNsZWFyVGltZW91dCIsIm1ldGEiLCJwcm9wZXJ0eSIsImNvbnRlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXNwb25zZSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();