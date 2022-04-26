(self["webpackChunklemon_mart"] = self["webpackChunklemon_mart"] || []).push([["src_app_inventory_inventory_module_ts"],{

/***/ 5151:
/*!**************************************************************!*\
  !*** ./src/app/inventory/categories/categories.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_categories_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./categories.component.html */ 7614);
/* harmony import */ var _categories_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.component.css */ 2883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CategoriesComponent = class CategoriesComponent {
    constructor() { }
    ngOnInit() { }
};
CategoriesComponent.ctorParameters = () => [];
CategoriesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-categories',
        template: _raw_loader_categories_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_categories_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CategoriesComponent);



/***/ }),

/***/ 9171:
/*!**********************************************************************!*\
  !*** ./src/app/inventory/inventory-home/inventory-home.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryHomeComponent": () => (/* binding */ InventoryHomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let InventoryHomeComponent = class InventoryHomeComponent {
    constructor() { }
    ngOnInit() { }
};
InventoryHomeComponent.ctorParameters = () => [];
InventoryHomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-inventory-home',
        template: `
    <p>
      <img
        src="https://user-images.githubusercontent.com/822159/36186560-c61ba57a-110d-11e8-8fbe-ff1c69e70864.png"
      />
    </p>
  `,
    })
], InventoryHomeComponent);



/***/ }),

/***/ 6458:
/*!*******************************************************!*\
  !*** ./src/app/inventory/inventory-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryRoutingModule": () => (/* binding */ InventoryRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories/categories.component */ 5151);
/* harmony import */ var _inventory_home_inventory_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory-home/inventory-home.component */ 9171);
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory.component */ 2190);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ 277);
/* harmony import */ var _stock_entry_stock_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock-entry/stock-entry.component */ 480);








const routes = [
    {
        path: '',
        component: _inventory_component__WEBPACK_IMPORTED_MODULE_2__.InventoryComponent,
        children: [
            { path: '', redirectTo: '/inventory/home', pathMatch: 'full' },
            { path: 'home', component: _inventory_home_inventory_home_component__WEBPACK_IMPORTED_MODULE_1__.InventoryHomeComponent },
            { path: 'stock-entry', component: _stock_entry_stock_entry_component__WEBPACK_IMPORTED_MODULE_4__.StockEntryComponent },
            { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__.ProductsComponent },
            { path: 'categories', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_0__.CategoriesComponent },
        ],
    },
];
let InventoryRoutingModule = class InventoryRoutingModule {
};
InventoryRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    })
], InventoryRoutingModule);



/***/ }),

/***/ 2190:
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryComponent": () => (/* binding */ InventoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_inventory_inventory_component_ts_css_C_Users_odniyonkuru_Downloads_lemon_mart_main_node_modules_ngtools_webpack_src_inline_data_loader_js_data_CiAgICAgIC5hY3RpdmUtbGluayB7CiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDUwMDU7CiAgICAgIH0KICAgIA_3D_3D_C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_inventory_inventory_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/inventory/inventory.component.ts.css!=!./node_modules/@ngtools/webpack/src/inline-data-loader.js?data=CiAgICAgIC5hY3RpdmUtbGluayB7CiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDUwMDU7CiAgICAgIH0KICAgIA%3D%3D!./src/app/inventory/inventory.component.ts */ 1298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



let InventoryComponent = class InventoryComponent {
    constructor() { }
    ngOnInit() { }
};
InventoryComponent.ctorParameters = () => [];
InventoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-inventory',
        template: `
    <mat-toolbar color="accent" fxLayoutGap="8px">
      <a mat-button routerLink="/inventory/home" routerLinkActive="active-link">
        Inventory Dashboard
      </a>
      <a mat-button routerLink="/inventory/stock-entry" routerLinkActive="active-link">
        Stock Entry
      </a>
      <a mat-button routerLink="/inventory/products" routerLinkActive="active-link">
        Products
      </a>
      <a mat-button routerLink="/inventory/categories" routerLinkActive="active-link">
        Categories
      </a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
        styles: [C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_inventory_inventory_component_ts_css_C_Users_odniyonkuru_Downloads_lemon_mart_main_node_modules_ngtools_webpack_src_inline_data_loader_js_data_CiAgICAgIC5hY3RpdmUtbGluayB7CiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDUwMDU7CiAgICAgIH0KICAgIA_3D_3D_C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_inventory_inventory_component_ts__WEBPACK_IMPORTED_MODULE_0__.default]
    })
], InventoryComponent);



/***/ }),

/***/ 1564:
/*!***********************************************!*\
  !*** ./src/app/inventory/inventory.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryModule": () => (/* binding */ InventoryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-material.module */ 4519);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories/categories.component */ 5151);
/* harmony import */ var _inventory_home_inventory_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory-home/inventory-home.component */ 9171);
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory-routing.module */ 6458);
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory.component */ 2190);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ 277);
/* harmony import */ var _stock_entry_stock_entry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-entry/stock-entry.component */ 480);










let InventoryModule = class InventoryModule {
};
InventoryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__.InventoryRoutingModule, _app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule],
        declarations: [
            _inventory_component__WEBPACK_IMPORTED_MODULE_4__.InventoryComponent,
            _stock_entry_stock_entry_component__WEBPACK_IMPORTED_MODULE_6__.StockEntryComponent,
            _products_products_component__WEBPACK_IMPORTED_MODULE_5__.ProductsComponent,
            _categories_categories_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesComponent,
            _inventory_home_inventory_home_component__WEBPACK_IMPORTED_MODULE_2__.InventoryHomeComponent,
        ],
    })
], InventoryModule);



/***/ }),

/***/ 277:
/*!**********************************************************!*\
  !*** ./src/app/inventory/products/products.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_products_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./products.component.html */ 8365);
/* harmony import */ var _products_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.component.css */ 9567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ProductsComponent = class ProductsComponent {
    constructor() { }
    ngOnInit() { }
};
ProductsComponent.ctorParameters = () => [];
ProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-products',
        template: _raw_loader_products_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_products_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductsComponent);



/***/ }),

/***/ 480:
/*!****************************************************************!*\
  !*** ./src/app/inventory/stock-entry/stock-entry.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockEntryComponent": () => (/* binding */ StockEntryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_stock_entry_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stock-entry.component.html */ 5392);
/* harmony import */ var _stock_entry_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock-entry.component.css */ 7774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let StockEntryComponent = class StockEntryComponent {
    constructor() { }
    ngOnInit() { }
};
StockEntryComponent.ctorParameters = () => [];
StockEntryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-stock-entry',
        template: _raw_loader_stock_entry_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_stock_entry_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StockEntryComponent);



/***/ }),

/***/ 1298:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts.css!=!./node_modules/@ngtools/webpack/src/inline-data-loader.js?data=CiAgICAgIC5hY3RpdmUtbGluayB7CiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDUwMDU7CiAgICAgIH0KICAgIA%3D%3D!./src/app/inventory/inventory.component.ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n      .active-link {\n        font-weight: bold;\n        border-bottom: 2px solid #005005;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVudG9yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsaUJBQWlCO1FBQ2pCLGdDQUFnQztNQUNsQyIsImZpbGUiOiJpbnZlbnRvcnkuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuYWN0aXZlLWxpbmsge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDUwMDU7XG4gICAgICB9XG4gICAgIl19 */");

/***/ }),

/***/ 2883:
/*!***************************************************************!*\
  !*** ./src/app/inventory/categories/categories.component.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ 9567:
/*!***********************************************************!*\
  !*** ./src/app/inventory/products/products.component.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 7774:
/*!*****************************************************************!*\
  !*** ./src/app/inventory/stock-entry/stock-entry.component.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9jay1lbnRyeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 7614:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/categories/categories.component.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  <img\n    src=\"https://user-images.githubusercontent.com/822159/36186541-a99abe7c-110d-11e8-938c-caa46b4f74fe.png\" />\n</p>\n");

/***/ }),

/***/ 8365:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/products/products.component.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  <img\n    src=\"https://user-images.githubusercontent.com/822159/36186538-a552e7d6-110d-11e8-81c8-38ad614d90f3.png\" />\n</p>\n");

/***/ }),

/***/ 5392:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/stock-entry/stock-entry.component.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  <img\n    src=\"https://user-images.githubusercontent.com/822159/36186540-a6f9163c-110d-11e8-92b7-75f206125edc.png\" />\n</p>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_inventory_inventory_module_ts.js.map