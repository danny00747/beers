(self["webpackChunklemon_mart"] = self["webpackChunklemon_mart"] || []).push([["src_app_pos_pos_module_ts"],{

/***/ 3852:
/*!*******************************************!*\
  !*** ./src/app/pos/pos-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosRoutingModule": () => (/* binding */ PosRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pos_pos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos/pos.component */ 3365);




const routes = [{ path: '', component: _pos_pos_component__WEBPACK_IMPORTED_MODULE_0__.PosComponent }];
let PosRoutingModule = class PosRoutingModule {
};
PosRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PosRoutingModule);



/***/ }),

/***/ 9295:
/*!***********************************!*\
  !*** ./src/app/pos/pos.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosModule": () => (/* binding */ PosModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-material.module */ 4519);
/* harmony import */ var _pos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos-routing.module */ 3852);
/* harmony import */ var _pos_pos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pos/pos.component */ 3365);
/* harmony import */ var _transaction_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction/transaction.service */ 4184);







let PosModule = class PosModule {
};
PosModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _pos_routing_module__WEBPACK_IMPORTED_MODULE_1__.PosRoutingModule, _app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule],
        declarations: [_pos_pos_component__WEBPACK_IMPORTED_MODULE_2__.PosComponent],
        providers: [_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_3__.TransactionService],
    })
], PosModule);



/***/ }),

/***/ 3365:
/*!******************************************!*\
  !*** ./src/app/pos/pos/pos.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosComponent": () => (/* binding */ PosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pos_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pos.component.html */ 3158);
/* harmony import */ var _pos_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos.component.css */ 9721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! subsink */ 18);
/* harmony import */ var _common_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ui.service */ 6775);
/* harmony import */ var _transaction_transaction_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transaction/transaction.enum */ 6151);
/* harmony import */ var _transaction_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transaction/transaction.service */ 4184);









let PosComponent = class PosComponent {
    constructor(transactionService, uiService) {
        this.transactionService = transactionService;
        this.uiService = uiService;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_2__.SubSink();
    }
    ngOnInit() {
        this.currentTransaction = {
            paymentAmount: 25.78,
            paymentType: _transaction_transaction_enum__WEBPACK_IMPORTED_MODULE_4__.TransactionType.Credit,
        };
    }
    checkout(transaction) {
        this.uiService.showToast('Checkout initiated');
        dataLayer.push({
            event: 'checkoutInitiated',
        });
        this.subs.sink = this.transactionService
            .processTransaction(transaction)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)((tx) => tx != null || tx !== undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((transactionId) => {
            this.uiService.showToast('Checkout completed');
            dataLayer.push({
                event: 'checkoutCompleted',
            });
        }))
            .subscribe();
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
};
PosComponent.ctorParameters = () => [
    { type: _transaction_transaction_service__WEBPACK_IMPORTED_MODULE_5__.TransactionService },
    { type: _common_ui_service__WEBPACK_IMPORTED_MODULE_3__.UiService }
];
PosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-pos',
        template: _raw_loader_pos_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pos_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PosComponent);



/***/ }),

/***/ 6151:
/*!*****************************************************!*\
  !*** ./src/app/pos/transaction/transaction.enum.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionType": () => (/* binding */ TransactionType)
/* harmony export */ });
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["Cash"] = 0] = "Cash";
    TransactionType[TransactionType["Credit"] = 1] = "Credit";
    TransactionType[TransactionType["LemonCoin"] = 2] = "LemonCoin";
})(TransactionType || (TransactionType = {}));


/***/ }),

/***/ 4184:
/*!********************************************************!*\
  !*** ./src/app/pos/transaction/transaction.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionService": () => (/* binding */ TransactionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);



let TransactionService = class TransactionService {
    constructor() { }
    processTransaction(transaction) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('5a6352c6810c19729de860ea').asObservable();
    }
};
TransactionService.ctorParameters = () => [];
TransactionService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], TransactionService);



/***/ }),

/***/ 9721:
/*!*******************************************!*\
  !*** ./src/app/pos/pos/pos.component.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 3158:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pos/pos/pos.component.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  <img\n    src=\"https://user-images.githubusercontent.com/822159/36186684-9f05fef8-110e-11e8-991f-fae6ca60fe5d.png\" />\n</p>\n<p>\n  <button mat-icon-button (click)=\"checkout(currentTransaction)\">\n    <mat-icon>shopping_cart</mat-icon> Checkout Customer\n  </button>\n</p>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pos_pos_module_ts.js.map