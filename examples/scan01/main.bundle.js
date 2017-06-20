webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 139;


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(154);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ESL READER';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(212),
        styles: [__webpack_require__(209)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__barcode_barcode_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(149);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__barcode_barcode_component__["a" /* BarcodeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quagga__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quagga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_quagga__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarcodeComponent = (function () {
    function BarcodeComponent(ref) {
        this.ref = ref;
        this.barcode = '';
        this.configQuagga = {
            inputStream: {
                name: 'Live',
                type: 'LiveStream',
                target: '#inputBarcode',
                constraints: {
                    width: { min: 640 },
                    height: { min: 480 },
                    aspectRatio: { min: 1, max: 100 },
                    facingMode: 'environment',
                },
                singleChannel: false // true: only the red color-channel is read
            },
            locator: {
                patchSize: 'medium',
                halfSample: true
            },
            locate: true,
            numOfWorkers: 4,
            decoder: {
                readers: ['code_128_reader']
            }
        };
    }
    BarcodeComponent.prototype.ngOnInit = function () {
        console.log('Barcode: initialization');
    };
    BarcodeComponent.prototype.testChangeValues = function () {
        this.barcode = 'Code-barres bidon : 0123456789';
    };
    BarcodeComponent.prototype.startScanner = function () {
        var _this = this;
        this.barcode = '';
        this.ref.detectChanges();
        __WEBPACK_IMPORTED_MODULE_1_quagga___default.a.onProcessed(function (result) { return _this.onProcessed(result); });
        __WEBPACK_IMPORTED_MODULE_1_quagga___default.a.onDetected(function (result) { return _this.logCode(result); });
        __WEBPACK_IMPORTED_MODULE_1_quagga___default.a.init(this.configQuagga, function (err) {
            if (err) {
                return console.log(err);
            }
            __WEBPACK_IMPORTED_MODULE_1_quagga___default.a.start();
            console.log('Barcode: initialization finished. Ready to start');
        });
    };
    BarcodeComponent.prototype.onProcessed = function (result) {
        var drawingCtx = __WEBPACK_IMPORTED_MODULE_1_quagga___default.a.canvas.ctx.overlay;
        var drawingCanvas = __WEBPACK_IMPORTED_MODULE_1_quagga___default.a.canvas.dom.overlay;
        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width'), 10), parseInt(drawingCanvas.getAttribute('height'), 10));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    __WEBPACK_IMPORTED_MODULE_1_quagga___default.a.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: 'green', lineWidth: 2 });
                });
            }
            if (result.box) {
                __WEBPACK_IMPORTED_MODULE_1_quagga___default.a.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: '#00F', lineWidth: 2 });
            }
            if (result.codeResult && result.codeResult.code) {
                __WEBPACK_IMPORTED_MODULE_1_quagga___default.a.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
            }
        }
    };
    BarcodeComponent.prototype.logCode = function (result) {
        var code = result.codeResult.code;
        if (this.barcode !== code) {
            this.barcode = 'Code-barres EAN : ' + code;
            this.ref.detectChanges();
            console.log(this.barcode);
            __WEBPACK_IMPORTED_MODULE_1_quagga___default.a.stop();
        }
    };
    return BarcodeComponent;
}());
BarcodeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-barcode',
        template: __webpack_require__(213),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ChangeDetectorRef */]) === "function" && _a || Object])
], BarcodeComponent);

var _a;
//# sourceMappingURL=barcode.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    color: white;\r\n    background-color: #ff6600;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    /* TODO style temporaire en attendant de migrer dans un autre composant */\r\n    margin: auto !important;\r\n    padding: 0px !important;\r\n    height: 40px;\r\n    line-height: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "\t#interactive.viewport {\r\n\t    position: relative;\r\n\t    width: 100%;\r\n\t    height: auto;\r\n\t    overflow: hidden;\r\n\t    text-align: center;\r\n\t}\r\n\t\r\n\t#interactive.viewport>canvas,\r\n\t#interactive.viewport>video {\r\n\t    max-width: 100%;\r\n\t    width: 100%;\r\n\t}\r\n\t\r\n\tcanvas.drawing,\r\n\tcanvas.drawingBuffer {\r\n\t    position: absolute;\r\n\t    left: 0;\r\n\t    top: 0;\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<h1>\n    {{title}}\n</h1>\n<app-barcode>code barre en cours de chargement</app-barcode>"

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<div>\n    <ngb-alert type=\"info\" [dismissible]=\"false\">\n        <strong>Je scanne</strong> le code-barres pour voir les ODR.\n    </ngb-alert>\n</div>\n<div *ngIf=\"barcode\">\n    <ngb-alert type=\"success\" [dismissible]=\"false\">\n        {{ barcode }}\n    </ngb-alert>\n</div>\n<button type=\"button\" class=\"btn btn-warning\" (click)=\"startScanner()\">\n    Démarrer le scan du code-barres\n</button>\n\n<div class=\"input-group\">\n    <!-- <input type=\"text\" id=\"inputBarcode\" class=\"form-control\" placeholder=\"zone de vision de la caméra\" />-->\n    <div id=\"inputBarcode\" style=\"position: static\">\n        <div id=\"interactive\" class=\"viewport\"></div>\n    </div>\n</div>\n<!-- <div id=\"inputBarCode\">zone de vision de la caméra</div> -->"

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);


/***/ })

},[240]);
//# sourceMappingURL=main.bundle.js.map